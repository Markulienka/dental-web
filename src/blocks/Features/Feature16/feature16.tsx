import { Media } from '@/components/Media'
import { Media as MediaType } from '@/payload-types'

type Feature = {
  doctorName: string
  clinicName: string
  description: string
  items: {
    icon: MediaType | string
  }
}

export type Feature16Props = {
  title?: string
  features?: Feature[]
}

const Feature16: React.FC<Feature16Props> = ({ title, features = [] }) => {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="text-3xl text-blackColor lg:text-4xl text-center">{title}</h2>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div key={i} className="bg-whiteColor border border-border rounded-lg p-5">
              <div className="flex gap-4">
                <span className="bg-muted flex size-12 shrink-0 items-center justify-center rounded-full overflow-hidden">
                  {feature.items?.icon && typeof feature.items.icon === 'object' && (
                    <Media
                      resource={feature.items.icon}
                      className="size-full object-cover"
                      imgClassName="size-full object-cover"
                    />
                  )}
                </span>
                <div className="flex-1">
                  <h3 className="mb-1 text-blackColor">{feature.doctorName}</h3>
                  <p className="mb-3 text-sm text-text">{feature.clinicName}</p>
                </div>
              </div>
              <p className="mt-4 text-text leading-7">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Feature16 }
