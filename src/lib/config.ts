import type { AddonConfig, TierConfig } from "@/types/pricing";

export const TIERS: Record<string, TierConfig> = {
  starter: {
    name: "starter",
    displayName: "Starter",
    pricePerProperty: 25,
    minProperties: 5,
    maxProperties: 200,
    bundledAddons: [],
    features: [
      "Property management",
      "Booking calendar",
      "Cleaner scheduling",
      "Maintenance management",
      "Task management",
      "Basic reports",
      "Email support",
    ],
  },
  professional: {
    name: "professional",
    displayName: "Professional",
    pricePerProperty: 30,
    minProperties: 5,
    maxProperties: 200,
    bundledAddons: ["dispatch", "routes"],
    features: [
      "Everything in Starter",
      "Smart Dispatch (cleaners & maintenance)",
      "WhatsApp integration",
      "Route optimization",
      "Real-time traffic",
      "Advanced reports",
      "Priority support",
    ],
    popular: true,
  },
  enterprise: {
    name: "enterprise",
    displayName: "Enterprise",
    pricePerProperty: 35,
    minProperties: 10,
    maxProperties: 500,
    bundledAddons: ["dispatch", "routes", "ses", "owner"],
    features: [
      "Everything in Professional",
      "SES compliance suite",
      "Owner portal",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Phone support",
    ],
  },
};

export const ADDONS: Record<string, AddonConfig> = {
  dispatch: {
    name: "dispatch",
    displayName: "Smart Dispatch",
    description: "Auto-schedule cleaners and maintenance staff with WhatsApp notifications",
    pricePerProperty: 1,
    requires: [],
    icon: "/images/features/dispatch.svg",
  },
  routes: {
    name: "routes",
    displayName: "Route Optimization",
    description: "Optimize cleaner and maintenance staff routes based on real-time traffic",
    pricePerProperty: 1.5,
    requires: ["dispatch"],
    icon: "/images/features/routes.svg",
  },
  ses: {
    name: "ses",
    displayName: "SES Compliance",
    description: "Stay compliant with short-term rental regulations",
    pricePerProperty: 0.5,
    requires: [],
    icon: "/images/features/ses.svg",
  },
  owner: {
    name: "owner",
    displayName: "Owner Portal",
    description: "Provide owners with a dedicated access portal",
    pricePerProperty: 1,
    requires: [],
    icon: "/images/features/owner-portal.svg",
  },
};

export const PROPERTY_PRESETS = [5, 10, 20, 50, 100];

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://app.flowoptimo.com";
