'use client'

import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/utilities/ui'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

type FeatureValue = {
  valueType: 'text' | 'boolean'
  textValue?: string
  booleanValue?: boolean
}

type Feature = {
  name: string
}

type PricingPlan = {
  name: string
  isHighlighted?: boolean
  featureValues: FeatureValue[]
}

export type Pricing30Props = {
  title: string
  featuresLabel: string
  features: Feature[]
  plans: PricingPlan[]
}

export const Pricing30: React.FC<Pricing30Props> = ({ title, featuresLabel, features, plans }) => {
  const [selectedPlan, setSelectedPlan] = useState(0)

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

        {/* Mobile View */}
        <div className="lg:hidden">
          <MobilePricingSelector
            selectedPlan={selectedPlan}
            onPlanChange={setSelectedPlan}
            plans={plans}
            features={features}
          />
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <DesktopPricingTable plans={plans} features={features} featuresLabel={featuresLabel} />
        </div>
      </div>
    </div>
  )
}

const MobilePricingSelector = ({
  selectedPlan,
  onPlanChange,
  plans,
  features,
}: {
  selectedPlan: number
  onPlanChange: (index: number) => void
  plans: PricingPlan[]
  features: Feature[]
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const plan = plans[selectedPlan]

  if (!plan) return null

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="border rounded-lg p-4">
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {plan.name}
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-4 space-y-2">
          {plans.map(
            (p, index) =>
              index !== selectedPlan && (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start"
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

        {/* Features List */}
        <div className="mt-6 space-y-3">
          {features.map((feature, featureIndex) => {
            const featureValue = plan.featureValues?.[featureIndex]

            // Skip if featureValue is missing
            if (!featureValue) {
              return (
                <div key={featureIndex} className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm font-medium">{feature.name}</span>
                  <span className="text-sm text-secondary-400">-</span>
                </div>
              )
            }

            return (
              <div key={featureIndex} className="flex justify-between items-center py-2 border-b">
                <span className="text-sm font-medium">{feature.name}</span>
                <span className="text-sm">
                  {featureValue.valueType === 'boolean' ? (
                    featureValue.booleanValue ? (
                      <Check className="h-5 w-5 text-green-600" />
                    ) : (
                      <span className="text-secondary-400 text-lg">×</span>
                    )
                  ) : (
                    <span className="font-medium">{featureValue.textValue || '-'}</span>
                  )}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </Collapsible>
  )
}

const DesktopPricingTable = ({
  plans,
  features,
  featuresLabel,
}: {
  plans: PricingPlan[]
  features: Feature[]
  featuresLabel: string
}) => {
  return (
    <div className="flex gap-2">
      <FeaturesColumn features={features} featuresLabel={featuresLabel} />
      {plans.map((plan, index) => (
        <PricingColumn key={index} plan={plan} isHighlighted={plan.isHighlighted || false} />
      ))}
    </div>
  )
}

const FeaturesColumn = ({
  features,
  featuresLabel,
}: {
  features: Feature[]
  featuresLabel: string
}) => (
  <div className="flex-[2] min-w-[200px]">
    <div className="h-16 flex items-center font-semibold text-sm px-2">{featuresLabel}</div>
    {features.map((feature, index) => (
      <div key={index} className="h-12 flex items-center border-b px-2 text-sm">
        {feature.name}
      </div>
    ))}
  </div>
)

const PricingColumn = ({ plan, isHighlighted }: { plan: PricingPlan; isHighlighted: boolean }) => {
  const columnClass = cn(
    'flex-1 min-w-[120px] max-w-[180px]',
    isHighlighted && 'bg-muted/50 border rounded-xl',
  )

  return (
    <div className={columnClass}>
      {/* Plan Header */}
      <div className="h-16 flex items-center justify-center font-bold text-base px-2 text-center">
        {plan.name}
      </div>

      {/* Features */}
      {plan.featureValues?.map((featureValue, featureIndex) => {
        if (!featureValue) {
          return (
            <div key={featureIndex} className="h-12 flex items-center justify-center border-b px-2">
              <span className="text-gray-400">-</span>
            </div>
          )
        }

        return (
          <div key={featureIndex} className="h-12 flex items-center justify-center border-b px-2">
            {featureValue.valueType === 'boolean' ? (
              featureValue.booleanValue ? (
                <Check className="h-5 w-5 text-green-600" />
              ) : (
                <span className="text-gray-400 text-lg">×</span>
              )
            ) : (
              <span className="text-sm font-medium text-center">
                {featureValue.textValue || '-'}
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}
