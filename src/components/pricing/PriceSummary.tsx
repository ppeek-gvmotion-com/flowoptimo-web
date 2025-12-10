import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ADDONS, TIERS } from "@/lib/config";
import { buildSignupUrl, calculatePricing } from "@/lib/pricing";
import type { PricingState } from "@/types/pricing";

interface PriceSummaryProps {
  state: PricingState;
}

export function PriceSummary({ state }: PriceSummaryProps) {
  const pricing = calculatePricing(state);
  const tierConfig = TIERS[state.tier];
  const signupUrl = buildSignupUrl(state);

  return (
    <Card className="sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
        Your Plan
      </h3>

      <div className="mt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">
            {tierConfig.displayName} ({state.properties} properties)
          </span>
          <span className="font-medium text-gray-900">
            &euro;{pricing.tierPrice}/mo
          </span>
        </div>

        {pricing.addonPrices.map(({ name, price }) => (
          <div key={name} className="flex justify-between text-sm">
            <span className="text-gray-600">{ADDONS[name].displayName}</span>
            <span className="font-medium text-gray-900">&euro;{price}/mo</span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="flex justify-between items-baseline">
          <span className="text-sm text-gray-600">Monthly total</span>
          <span className="text-3xl font-bold text-gray-900">
            &euro;{pricing.totalMonthly}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-500 text-right">
          or &euro;{pricing.totalAnnual}/year (save &euro;{pricing.savings})
        </p>
      </div>

      <div className="mt-6">
        <Link href={signupUrl}>
          <Button className="w-full" size="lg">
            Start 14-Day Free Trial
          </Button>
        </Link>
        <p className="mt-2 text-center text-xs text-gray-500">
          No credit card required
        </p>
      </div>
    </Card>
  );
}
