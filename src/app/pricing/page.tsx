"use client";

import { useState } from "react";

import { AddonCheckbox } from "@/components/pricing/AddonCheckbox";
import { PriceSummary } from "@/components/pricing/PriceSummary";
import { PropertySelector } from "@/components/pricing/PropertySelector";
import { TierCard } from "@/components/pricing/TierCard";
import { UpsellBanner } from "@/components/pricing/UpsellBanner";
import { ADDONS, TIERS } from "@/lib/config";
import { validateAddons } from "@/lib/pricing";
import type { AddonName, PricingState, TierName } from "@/types/pricing";

export default function PricingPage() {
  const [state, setState] = useState<PricingState>({
    properties: 10,
    tier: "professional",
    addons: [],
  });

  const handleTierChange = (tier: TierName) => {
    setState((prev) => ({
      ...prev,
      tier,
      addons: validateAddons(prev.addons, tier),
    }));
  };

  const handleAddonToggle = (addon: AddonName, checked: boolean) => {
    setState((prev) => {
      const newAddons = checked
        ? [...prev.addons, addon]
        : prev.addons.filter((a) => a !== addon);
      return {
        ...prev,
        addons: validateAddons(newAddons, prev.tier),
      };
    });
  };

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Pay per property. Scale as you grow.
          </p>
        </div>

        <div className="mt-12">
          <PropertySelector
            value={state.properties}
            tier={state.tier}
            onChange={(properties) =>
              setState((prev) => ({ ...prev, properties }))
            }
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="grid gap-6 md:grid-cols-3">
              {Object.values(TIERS).map((tier) => (
                <TierCard
                  key={tier.name}
                  tier={tier}
                  properties={state.properties}
                  addons={state.addons}
                  isSelected={state.tier === tier.name}
                  onSelect={() => handleTierChange(tier.name)}
                />
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-semibold text-gray-900">Add-ons</h2>
              <p className="mt-2 text-gray-600">
                Customize your plan with optional features.
              </p>

              <div className="mt-6">
                <UpsellBanner state={state} onTierChange={handleTierChange} />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {Object.values(ADDONS).map((addon) => (
                  <AddonCheckbox
                    key={addon.name}
                    addon={addon}
                    tier={state.tier}
                    properties={state.properties}
                    isSelected={state.addons.includes(addon.name)}
                    onChange={(checked) =>
                      handleAddonToggle(addon.name, checked)
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <PriceSummary state={state} />
          </div>
        </div>
      </div>
    </div>
  );
}
