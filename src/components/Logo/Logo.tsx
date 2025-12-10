import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  invert?: boolean
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className, invert } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Dental Web Logo"
      width={120}
      height={40}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('w-auto h-10 block', invert && 'invert', className)}
      style={{ objectFit: 'contain' }}
      src="/logos/dental_logo_clean.svg"
    />
  )
}
