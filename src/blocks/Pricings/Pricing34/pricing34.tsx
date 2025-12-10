'use client'

import { BadgeCheck } from 'lucide-react'
import React from 'react'

import { CMSLink } from '@/components/Link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

type Feature = {
  text: string
  bold?: boolean
}

export type PricingCardLink = {
  type?: 'reference' | 'custom' | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages'
    value: string | number
  } | null
  url?: string | null
  label: string
  appearance?: string | null
  id?: string | null
}

type PricingCard = {
  name: string
  price: string
  description?: string
  features: Feature[]
  linkCard: PricingCardLink
  highlighted: boolean
}

export type Pricing34Props = {
  title?: string
  description?: string
  backgroundMuted?: boolean
  centerAlign?: boolean
  card: PricingCard[]
}

const Pricing34: React.FC<Pricing34Props> = ({
  title,
  description,
  backgroundMuted = true,
  centerAlign = true,
  card = [],
}) => {
  return (
    <section className={`py-24 ${backgroundMuted ? 'bg-muted' : ''}`}>
      <div className="container flex flex-col gap-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-blackColor lg:text-5xl">
            {title}
          </h1>
          <p className="text-lg text-text">{description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-7 items-stretch">
          {card.map((plan, index) => (
            <div key={index} className="relative flex w-full max-w-sm">
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-block bg-blackColor text-whiteColor px-3 py-1 rounded-full text-xs font-semibold">
                    Najpopulárnejšie
                  </span>
                </div>
              )}
              <Card
                className={`w-full rounded-2xl border flex flex-col ${
                  plan.highlighted
                    ? 'border-blackColor border-2 bg-whiteColor'
                    : 'border-border bg-whiteColor'
                } shadow-sm`}
              >
                <CardHeader className={centerAlign ? 'text-center' : ''}>
                  <CardTitle
                    className={`text-blackColor text-lg font-medium ${centerAlign ? 'text-center' : ''}`}
                  >
                    {plan.name}
                  </CardTitle>
                  <div
                    className={`mt-4 flex items-baseline gap-2 ${centerAlign ? 'justify-center' : ''}`}
                  >
                    <div className="text-blackColor text-4xl font-bold tracking-tight">
                      {plan.price}
                    </div>
                    <div className="text-text text-sm">/mesiac</div>
                  </div>
                  {plan.description && <p className="mt-2 text-sm text-text">{plan.description}</p>}
                </CardHeader>

                <CardContent className="px-7 pt-6 flex-1 flex flex-col">
                  <div className="relative mb-4 flex items-center justify-center overflow-hidden">
                    <Separator />
                  </div>

                  <ul className="mt-6 space-y-3 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <BadgeCheck className="size-5 text-blackColor shrink-0" />
                        <span
                          className={`text-blackColor text-sm ${feature.bold ? 'font-bold' : 'font-medium'}`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.linkCard && (
                    <CMSLink
                      key={plan.linkCard.id || plan.linkCard.url}
                      type={plan.linkCard.type || 'custom'}
                      reference={plan.linkCard.reference}
                      url={plan.linkCard.url}
                      newTab={plan.linkCard.newTab}
                      label={plan.linkCard.label}
                      appearance="default"
                      className={`mt-6 inline-flex h-10 w-full items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                        plan.highlighted
                          ? 'bg-blackColor text-whiteColor hover:bg-blackColor/90'
                          : 'border border-border bg-whiteColor text-blackColor hover:bg-whiteColor/80'
                      }`}
                    />
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Pricing34 }
