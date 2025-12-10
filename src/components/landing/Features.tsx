import { Card } from "@/components/ui/Card";

const features = [
  {
    title: "Smart Dispatch",
    description:
      "Automatically assign cleaners and tasks based on availability and location.",
    icon: "dispatch",
  },
  {
    title: "Route Optimization",
    description:
      "Find the most efficient routes for your team to save travel time.",
    icon: "routes",
  },
  {
    title: "WhatsApp Integration",
    description:
      "Seamless communication with cleaners and guests directly from the platform.",
    icon: "whatsapp",
  },
  {
    title: "Owner Portal",
    description:
      "Give owners access to performance reports and booking information.",
    icon: "owner",
  },
];

function FeatureIcon({ icon }: { icon: string }) {
  const iconPaths: Record<string, React.ReactNode> = {
    dispatch: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
    routes: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
      />
    ),
    whatsapp: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
    owner: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  };

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600/10">
      <svg
        className="h-6 w-6 text-primary-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {iconPaths[icon] || iconPaths.dispatch}
      </svg>
    </div>
  );
}

export function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need to Scale
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features designed for vacation rental managers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <FeatureIcon icon={feature.icon} />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
