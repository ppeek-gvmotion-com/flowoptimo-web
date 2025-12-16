"use client";

import { clsx } from "clsx";

import { PROPERTY_PRESETS, TIERS } from "@/lib/config";
import type { TierName } from "@/types/pricing";

interface PropertySelectorProps {
  value: number;
  tier: TierName;
  onChange: (value: number) => void;
}

export function PropertySelector({
  value,
  tier,
  onChange,
}: PropertySelectorProps) {
  const tierConfig = TIERS[tier];
  const min = tierConfig.minProperties;
  const max = tierConfig.maxProperties;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value, 10);
    if (!isNaN(num)) {
      onChange(Math.min(Math.max(num, min), max));
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        How many properties do you manage?
      </label>

      <div className="flex flex-wrap items-center gap-2">
        {PROPERTY_PRESETS.filter((p) => p >= min && p <= max).map((preset) => (
          <button
            key={preset}
            onClick={() => onChange(preset)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              value === preset
                ? "border-primary-blue bg-primary-blue text-white"
                : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
            )}
          >
            {preset}
          </button>
        ))}

        <div className="flex items-center gap-2 ml-4">
          <input
            type="number"
            min={min}
            max={max}
            value={value}
            onChange={handleInputChange}
            className="w-20 rounded-lg border border-gray-300 px-3 py-2 text-center focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
          />
          <span className="text-sm text-gray-500">
            {min} - {max} properties
          </span>
        </div>
      </div>
    </div>
  );
}
