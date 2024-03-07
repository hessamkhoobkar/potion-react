import { Button } from '@/components/ui/button';

const upgradePlanData = [
  {
    name: 'Lite',
    price: '0',
    cta: {
      label: 'Currently selected plan',
      state: 'disabled',
    },
    featuresTitle: 'For people just getting started',
    features: [
      'Access to essential LLM chatbot features.',
      'Quick responses and assistance.',
      'Customize chatbot appearance.',
      'Basic greeting message customization.',
      'Standard email support during business hours.',
    ],
  },
  {
    name: 'Ultra',
    price: '20',
    cta: {
      label: 'Upgrade to Ultra',
      state: '',
    },
    featuresTitle: 'Everything in Lite, and:',
    features: [
      'Advanced conversational capabilities.',
      'Multi-step conversation support.',
      'Extensive chatbot customization options.',
      'Personalized greetings and farewells.',
      'Faster response times for email support.',
      'Priority handling of issues.',
      'Integration with popular third-party apps.',
      'API access for custom integrations.',
    ],
  },
  {
    name: 'Max',
    price: '50',
    cta: {
      label: 'Upgrade to Max',
      state: 'primary',
    },
    featuresTitle: 'Everything in Ultra, and:',
    features: [
      'Natural Language Processing (NLP) enhancements.',
      'Advanced sentiment analysis for better understanding.',
      'Complete control over chatbot behavior.',
      'Scripting and advanced configuration options.',
      'Round-the-clock support for critical issues.',
      'Dedicated support team.',
      'Detailed analytics dashboard.',
      'User behavior insights for optimization.',
    ],
  },
];

export default function UpgradePlanContent() {
  return (
    <div className="flex gap-12 py-4">
      {upgradePlanData.map(plan => (
        <div key={plan.name} className="flex w-1/3 flex-col">
          <div>
            <h2 className="text-3xl font-bold">{plan.name}</h2>
            <p className="text-foreground/60">USD ${plan.price}/month</p>
          </div>
          <Button
            size="lg"
            variant={plan.cta.state === 'primary' ? 'default' : 'secondary'}
            className="mt-4 h-14 w-full"
            disabled={plan.cta.state === 'disabled'}
          >
            {plan.cta.label}
          </Button>
          <div className="mt-8">
            <p className="pb-3 text-foreground/60">{plan.featuresTitle}</p>
            <ul className="flex list-disc flex-col gap-3 ps-4">
              {plan.features.map(feature => (
                <li key={feature} className="text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
