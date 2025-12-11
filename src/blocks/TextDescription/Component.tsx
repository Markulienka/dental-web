import { cn } from '@/utilities/ui'

type TextDescriptionProps = {
  centeredAlign: boolean
  title: string
  description: string
}

export const TextDescriptionBlock: React.FC<TextDescriptionProps> = ({
  centeredAlign,
  title,
  description,
}) => {
  return (
    <section className="w-full bg-muted py-32 md:py-20 lg:py-32">
      <div className={cn('container max-w-4xl', centeredAlign && 'text-center')}>
        <h2 className="mb-6 text-4xl font-medium leading-tight text-blackColor lg:text-5xl">
          {title}
        </h2>
        <p className="text-lg leading-8 text-text">{description}</p>
      </div>
    </section>
  )
}
