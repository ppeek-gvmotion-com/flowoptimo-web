export type TierName = "starter" | "professional" | "enterprise";

export type AddonName = "dispatch" | "routes" | "ses" | "owner";

export interface TierConfig {
  name: TierName;
  displayName: string;
  pricePerProperty: number;
  minProperties: number;
  maxProperties: number;
  bundledAddons: AddonName[];
  features: string[];
  popular?: boolean;
}

export interface AddonConfig {
  name: AddonName;
  displayName: string;
  description: string;
  pricePerProperty: number;
  requires: AddonName[];
  icon: string;
}

export interface PricingState {
  properties: number;
  tier: TierName;
  addons: AddonName[];
}

export interface PriceSummary {
  tierPrice: number;
  addonPrices: { name: AddonName; price: number }[];
  totalMonthly: number;
  totalAnnual: number;
  savings: number;
}
