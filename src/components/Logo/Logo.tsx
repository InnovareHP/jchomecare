import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <span className={clsx('font-bold text-xl tracking-tight', className)}>
      <span style={{ color: '#73a9d9' }}>JC</span> Home Care
    </span>
  )
}
