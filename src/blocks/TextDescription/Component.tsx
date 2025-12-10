type TextDescriptionProps = {
  title: string
  description: string
}

export const TextDescriptionBlock: React.FC<TextDescriptionProps> = ({ title, description }) => {
  return (
    <section className="w-full bg-muted py-32 md:py-20 lg:py-32 text-center">
      <div className="container max-w-4xl">
        <h2 className="mb-6 text-blackColor text-4xl font-medium leading-tight lg:text-5xl">
          {title}
        </h2>
        <p className="text-text text-lg leading-8">{description}</p>
      </div>
    </section>
  )
}
