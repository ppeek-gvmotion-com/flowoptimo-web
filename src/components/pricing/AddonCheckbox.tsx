import { clsx } from "clsx";

import { TIERS } from "@/lib/config";
import type { AddonConfig, TierName } from "@/types/pricing";

interface AddonCheckboxProps {
  addon: AddonConfig;
  tier: TierName;
  properties: number;
  isSelected: boolean;
  onChange: (checked: boolean) => void;
}

export function AddonCheckbox({
  addon,
  tier,
  properties,
  isSelected,
  onChange,
}: AddonCheckboxProps) {
  const tierConfig = TIERS[tier];
  const isBundled = tierConfig.bundledAddons.includes(addon.name);
  const monthlyPrice = addon.pricePerProperty * properties;

  return (
    <label
      className={clsx(
        "flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-colors",
        isBundled
          ? "cursor-not-allowed border-gray-200 bg-gray-50"
          : isSelected
            ? "border-accent bg-accent/5"
            : "border-gray-200 hover:border-gray-300"
      )}
    >
      <input
        type="checkbox"
        checked={isSelected || isBundled}
        disabled={isBundled}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
      />

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900">{addon.displayName}</span>
          {isBundled && (
            <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent-dark">
              Included
            </span>
          )}
          {addon.requires.length > 0 && !isBundled && (
            <span className="text-xs text-gray-500">
              (requires {addon.requires.join(", ")})
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-gray-600">{addon.description}</p>
        {!isBundled && (
          <p className="mt-2 text-sm font-medium text-gray-900">
            +&euro;{addon.pricePerProperty}/property/mo (&euro;{monthlyPrice}/mo)
          </p>
        )}
      </div>
    </label>
  );
}
