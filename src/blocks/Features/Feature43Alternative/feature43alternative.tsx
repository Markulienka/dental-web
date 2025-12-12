type Feature = {
  heading: string
  description: string
}

export type Feature43AlternativeProps = {
  title?: string
  features?: Feature[]
}

const Feature43Alternative: React.FC<Feature43AlternativeProps> = ({ title, features = [] }) => {
  return (
    <section className="bg-muted py-12">
      <div className="container">
        {title && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-primary text-4xl font-medium lg:text-5xl">{title}</h2>
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="bg-primary mb-5 flex size-16 items-center justify-center rounded-full">
                <span className="text-primary-foreground text-2xl font-bold">{i + 1}</span>
              </div>
              <h3 className="mb-2 text-primary text-xl">{feature.heading}</h3>
              <p className="text-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Feature43Alternative }
