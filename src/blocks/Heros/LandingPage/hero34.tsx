'use client'

import { Play } from 'lucide-react'
import { useState, useRef } from 'react'

import { Media as MediaType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export type LandingPageLink = {
  link: {
    type?: 'reference' | 'custom' | null
    newTab?: boolean | null
    reference?: {
      relationTo: 'pages'
      value: string | number
    } | null
    url?: string | null
    label: string
  }
  id?: string | null
}

export type LandingPageProps = {
  title: string
  description: string
  links: LandingPageLink[]
  video: string | MediaType
}

const Hero34: React.FC<LandingPageProps> = ({ title, description, links, video }) => {
  const [primaryLink, secondaryLink] = links || []
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const videoLabel = secondaryLink?.link.label

  const videoUrl =
    typeof video === 'string' ? video : video?.url ? getMediaUrl(video.url, video.updatedAt) : null

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  if (!videoUrl) {
    return <div>Video URL not found</div>
  }

  return (
    <section className="w-full bg-muted py-12 md:py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary lg:text-5xl xl:text-6xl">
              {title}
            </h1>
            <p className="text-foreground mb-8 max-w-xl text-lg lg:text-xl">{description}</p>
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              {primaryLink ? (
                <CMSLink
                  key={primaryLink.id || primaryLink.link.url}
                  type={primaryLink.link.type || 'custom'}
                  reference={primaryLink.link.reference}
                  url={primaryLink.link.url}
                  newTab={primaryLink.link.newTab}
                  appearance="default"
                  className="inline-flex h-12 items-center justify-center gap-2 px-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                  label={primaryLink.link.label}
                />
              ) : null}

              {secondaryLink ? (
                <button
                  onClick={handleVideoClick}
                  className="inline-flex h-12 items-center justify-center gap-2 px-6 text-base font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  <Play className="h-4 w-4" />
                  {videoLabel}
                </button>
              ) : null}
            </div>
          </div>

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              controls={isPlaying}
            />
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-primary/40 transition-all duration-300 hover:bg-primary/30 cursor-pointer"
                onClick={handleVideoClick}
              >
                <span className="flex items-center gap-2 rounded-full bg-primary-foreground/95 px-6 py-3 text-base font-semibold text-primary shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl">
                  <Play className="h-5 w-5" />
                  {videoLabel && <span>{videoLabel}</span>}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero34 }
