import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'

export type CTAFooterLink = {
  type?: 'reference' | 'custom' | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages'
    value: string | number
  } | null
  url?: string | null
  label: string
  appearance?: 'default' | 'outline' | null
  id?: string | null
}

type CTAFooterProps = {
  background?: 'black' | 'muted'
  title?: string
  link: CTAFooterLink
  description?: string
}

export const CTAFooterBlock: React.FC<CTAFooterProps> = ({
  background = 'muted',
  title,
  link,
  description,
}) => {
  const isBlack = background === 'black'
  return (
    <section
      className={cn('py-24', isBlack ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground')}
    >
      <div className="container flex flex-col items-center gap-6 text-center">
        {title && <h2 className="max-w-3xl text-xl font-semibold md:text-2sxl">{title}</h2>}
        <div className="mt-2 flex flex-col items-center gap-4">
          <CMSLink
            size="lg"
            className={cn(
              'px-6 py-3 text-sm font-medium',
              isBlack
                ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                : 'bg-primary text-primary-foreground hover:bg-primary/90',
            )}
            {...link}
          />
          {description && (
            <p
              className={cn(
                'max-w-xl text-sm md:text-base',
                isBlack ? 'text-primary-foreground/80' : 'text-primary/80',
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
