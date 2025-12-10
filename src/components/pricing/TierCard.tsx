import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { buildSignupUrl, calculatePricing } from "@/lib/pricing";
import type { AddonName, TierConfig } from "@/types/pricing";

interface TierCardProps {
  tier: TierConfig;
  properties: number;
  addons: AddonName[];
  isSelected: boolean;
  onSelect: () => void;
}

export function TierCard({
  tier,
  properties,
  addons,
  isSelected,
  onSelect,
}: TierCardProps) {
  const pricing = calculatePricing({
    properties,
    tier: tier.name,
    addons,
  });

  const signupUrl = buildSignupUrl({
    properties,
    tier: tier.name,
    addons,
  });

  return (
    <Card highlight={isSelected || tier.popular} className="relative flex flex-col">
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white uppercase">
          Popular
        </div>
      )}

      <div className="text-center">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          {tier.displayName}
        </h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">
            &euro;{tier.pricePerProperty}
          </span>
          <span className="text-gray-600">/property/mo</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          &euro;{pricing.tierPrice}/mo for {properties} properties
        </p>
      </div>

      <ul className="mt-6 space-y-3 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-accent"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        {isSelected ? (
          <Link href={signupUrl}>
            <Button className="w-full">Get Started</Button>
          </Link>
        ) : (
          <Button variant="outline" className="w-full" onClick={onSelect}>
            Select Plan
          </Button>
        )}
      </div>
    </Card>
  );
}
