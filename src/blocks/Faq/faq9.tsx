import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import React from 'react'

type QandA = {
  question: string
  answer: string
}

export type Faq9Props = {
  title?: string
  faqs?: QandA[]
}

const Faq9: React.FC<Faq9Props> = ({ title, faqs = [] }) => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="mb-12 mt-2 text-3xl font-bold md:text-6xl text-center">{title}</h2>
        <Accordion type="multiple">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-primary-foreground mb-2 rounded-md border px-5 py-2 md:mb-4 last:border-b"
            >
              <AccordionTrigger className="text-left">
                <span className="flex-1 text-left">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export { Faq9 }
