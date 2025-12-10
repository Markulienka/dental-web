import { Media } from '@/components/Media'
import { Media as MediaType } from '@/payload-types'

type Feature = {
  heading: string
  description: string
  items: {
    icon: MediaType | string
  }
}

export type Feature43Props = {
  title?: string
  features?: Feature[]
}

const Feature43: React.FC<Feature43Props> = ({ title, features = [] }) => {
  return (
    <section className="py-12">
      <div className="container">
        {title && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-blackColor text-4xl font-medium lg:text-5xl">{title}</h2>
          </div>
        )}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="bg-accent mb-5 flex size-16 items-center justify-center rounded-full overflow-hidden">
                {feature.items?.icon && typeof feature.items.icon === 'object' && (
                  <Media
                    resource={feature.items.icon}
                    className="size-full"
                    imgClassName="size-full object-cover"
                  />
                )}
              </div>
              <h3 className="mb-2 text-blackColor text-xl">{feature.heading}</h3>
              <p className="text-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Feature43 }
