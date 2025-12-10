'use client'

import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/utilities/ui'

import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

type PlanType = 'Starter' | 'Professional' | 'Premium'

interface Plan {
  name: string
  type: PlanType
  features: {
    name: string
    value: string | boolean
  }[]
}

const plans: Plan[] = [
  {
    name: 'Starter',
    type: 'Starter',
    features: [
      { name: 'Počet podstránok', value: '5' },
      { name: 'Mobilná optimalizácia', value: true },
      { name: 'SSL certifikát', value: true },
      { name: 'Online rezervácie', value: false },
      { name: 'Galéria pred/po', value: false },
      { name: 'Pokročilé SEO', value: false },
      { name: 'Google Business integrácia', value: false },
      { name: 'Analytické nástroje', value: 'Základné' },
      { name: 'Email marketing', value: false },
      { name: 'Viacjazyčná podpora', value: false },
      { name: 'Podpora', value: 'Email' },
      { name: 'Account manager', value: false },
    ],
  },
  {
    name: 'Professional',
    type: 'Professional',
    features: [
      { name: 'Počet podstránok', value: '15' },
      { name: 'Mobilná optimalizácia', value: true },
      { name: 'SSL certifikát', value: true },
      { name: 'Online rezervácie', value: true },
      { name: 'Galéria pred/po', value: true },
      { name: 'Pokročilé SEO', value: true },
      { name: 'Google Business integrácia', value: true },
      { name: 'Analytické nástroje', value: 'Pokročilé' },
      { name: 'Email marketing', value: false },
      { name: 'Viacjazyčná podpora', value: false },
      { name: 'Podpora', value: 'Prioritná' },
      { name: 'Account manager', value: false },
    ],
  },
  {
    name: 'Premium',
    type: 'Premium',
    features: [
      { name: 'Počet podstránok', value: 'Neobmedzené' },
      { name: 'Mobilná optimalizácia', value: true },
      { name: 'SSL certifikát', value: true },
      { name: 'Online rezervácie', value: true },
      { name: 'Galéria pred/po', value: true },
      { name: 'Pokročilé SEO', value: true },
      { name: 'Google Business integrácia', value: true },
      { name: 'Analytické nástroje', value: 'Pokročilé' },
      { name: 'Email marketing', value: true },
      { name: 'Viacjazyčná podpora', value: true },
      { name: 'Podpora', value: '24/7' },
      { name: 'Account manager', value: true },
    ],
  },
]

export const Pricing30 = () => {
  const [selectedPlan, setSelectedPlan] = useState(1)

  return (
    <section className="py-32">
      <div className="container font-medium">
        <MobilePricingTable selectedPlan={selectedPlan} onPlanChange={setSelectedPlan} />
        <DesktopPricingTable />
      </div>
    </section>
  )
}

const MobilePricingTable = ({
  selectedPlan,
  onPlanChange,
}: {
  selectedPlan: number
  onPlanChange: (index: number) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const plan = plans[selectedPlan]

  return (
    <div className="md:hidden">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between border-b py-4">
          <CollapsibleTrigger className="flex items-center gap-2">
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <ChevronsUpDown
              className={`size-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="flex flex-col space-y-2 p-2">
          {plans.map(
            (p, index) =>
              index !== selectedPlan && (
                <Button
                  size="lg"
                  variant="secondary"
                  key={index}
                  onClick={() => {
                    onPlanChange(index)
                    setIsOpen(false)
                  }}
                >
                  {p.name}
                </Button>
              ),
          )}
        </CollapsibleContent>
      </Collapsible>

      {/* Features List */}
      <div className="mt-8">
        <div className="space-y-2">
          {plan.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="grid grid-cols-2 items-center gap-8">
              <span className="border-b py-2">{feature.name}</span>
              <div className="flex items-center gap-1 border-b py-2">
                {typeof feature.value === 'boolean' ? (
                  feature.value ? (
                    <Check className="size-5" />
                  ) : (
                    <span className="text-gray-300">×</span>
                  )
                ) : (
                  <span>{feature.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const DesktopPricingTable = () => {
  return (
    <div className="hidden md:grid md:grid-cols-4">
      <FeaturesColumn />
      {plans.map((plan, index) => (
        <PricingColumn key={plan.name} plan={plan} isHighlighted={index === 1} />
      ))}
    </div>
  )
}

const FeaturesColumn = () => (
  <div>
    <div className="py-8">
      <h3 className="text-2xl font-semibold">Funkcie</h3>
    </div>
    {plans[0].features.map((feature, index) => (
      <div key={index} className="border-b py-4">
        {feature.name}
      </div>
    ))}
  </div>
)

const PricingColumn = ({ plan, isHighlighted }: { plan: Plan; isHighlighted: boolean }) => {
  const columnClass = cn('px-6', isHighlighted && 'bg-muted border rounded-xl')

  return (
    <div className={columnClass}>
      {/* Plan Header */}
      <div className="py-8">
        <h3 className="text-2xl font-semibold">{plan.name}</h3>
      </div>

      {/* Features */}
      {plan.features.map((feature, featureIndex) => (
        <div key={featureIndex} className="flex items-center justify-center border-b py-4">
          {typeof feature.value === 'boolean' ? (
            feature.value ? (
              <Check className="size-5" />
            ) : (
              <span className="text-2xl text-gray-300">×</span>
            )
          ) : (
            <span className="text-center">{feature.value}</span>
          )}
        </div>
      ))}
    </div>
  )
}
