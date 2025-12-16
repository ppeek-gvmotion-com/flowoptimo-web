import { TIERS } from "@/lib/config";
import { checkUpsellOpportunity } from "@/lib/pricing";
import type { PricingState, TierName } from "@/types/pricing";

interface UpsellBannerProps {
  state: PricingState;
  onTierChange: (tier: TierName) => void;
}

export function UpsellBanner({ state, onTierChange }: UpsellBannerProps) {
  const upsell = checkUpsellOpportunity(state);

  if (!upsell?.shouldUpsell) {
    return null;
  }

  const targetTier = TIERS[upsell.targetTier];

  return (
    <div className="rounded-lg border border-accent-green bg-accent-green/10 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="font-medium text-accent-dark">
            Save &euro;{upsell.savings.toFixed(0)}/month!
          </p>
          <p className="text-sm text-gray-600">
            Switch to {targetTier.displayName} and get your selected add-ons
            included.
          </p>
        </div>
        <button
          onClick={() => onTierChange(upsell.targetTier)}
          className="shrink-0 rounded-lg border-2 border-accent-green bg-white px-4 py-2 text-sm font-medium text-accent-green hover:bg-accent-green hover:text-white transition-colors"
        >
          Switch to {targetTier.displayName}
        </button>
      </div>
    </div>
  );
}
