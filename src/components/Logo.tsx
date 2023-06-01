import Image from 'next/image'

import clsx from 'clsx'

import logoImg from '~/assets/images/logo.png'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={logoImg}
      alt="The Fit Club"
      className={clsx('h-12 w-40', className)}
    />
  )
}
