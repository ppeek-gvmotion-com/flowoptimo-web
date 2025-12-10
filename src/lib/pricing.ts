import type {
  AddonName,
  PriceSummary,
  PricingState,
  TierName,
} from "@/types/pricing";

import { ADDONS, APP_URL, TIERS } from "./config";

export function calculatePricing(state: PricingState): PriceSummary {
  const tier = TIERS[state.tier];

  // Filter out bundled addons - they're free
  const billableAddons = state.addons.filter(
    (addon) => !tier.bundledAddons.includes(addon)
  );

  const tierPrice = tier.pricePerProperty * state.properties;

  const addonPrices = billableAddons.map((addon) => ({
    name: addon,
    price: ADDONS[addon].pricePerProperty * state.properties,
  }));

  const totalAddons = addonPrices.reduce((sum, a) => sum + a.price, 0);
  const totalMonthly = tierPrice + totalAddons;
  const totalAnnual = totalMonthly * 10; // 2 months free
  const savings = totalMonthly * 12 - totalAnnual;

  return {
    tierPrice,
    addonPrices,
    totalMonthly,
    totalAnnual,
    savings,
  };
}

export function validateAddons(
  addons: AddonName[],
  tier: TierName
): AddonName[] {
  const tierConfig = TIERS[tier];
  const validatedAddons = new Set<AddonName>();

  for (const addon of addons) {
    // Skip if bundled in tier
    if (tierConfig.bundledAddons.includes(addon)) {
      continue;
    }

    validatedAddons.add(addon);

    // Add required dependencies
    for (const required of ADDONS[addon].requires) {
      if (!tierConfig.bundledAddons.includes(required)) {
        validatedAddons.add(required);
      }
    }
  }

  return Array.from(validatedAddons);
}

export function buildSignupUrl(state: PricingState): string {
  const params = new URLSearchParams({
    tier: state.tier,
    properties: state.properties.toString(),
  });

  if (state.addons.length > 0) {
    params.set("addons", state.addons.join(","));
  }

  return `${APP_URL}/signup?${params.toString()}`;
}

export function checkUpsellOpportunity(
  state: PricingState
): { shouldUpsell: boolean; targetTier: TierName; savings: number } | null {
  // Check if adding addons makes higher tier cheaper
  const currentPricing = calculatePricing(state);

  // Try each higher tier
  const tierOrder: TierName[] = ["starter", "professional", "enterprise"];
  const currentIndex = tierOrder.indexOf(state.tier);

  for (let i = currentIndex + 1; i < tierOrder.length; i++) {
    const targetTier = tierOrder[i];

    // Calculate price with target tier (addons might be bundled)
    const targetState: PricingState = {
      properties: state.properties,
      tier: targetTier,
      addons: state.addons,
    };
    const targetPricing = calculatePricing(targetState);

    if (targetPricing.totalMonthly < currentPricing.totalMonthly) {
      return {
        shouldUpsell: true,
        targetTier,
        savings: currentPricing.totalMonthly - targetPricing.totalMonthly,
      };
    }
  }

  return null;
}
