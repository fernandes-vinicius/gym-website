import { ReactNode } from 'react'

import Image from 'next/image'

import reasonCheckIcon from '~/assets/icons/reason-check.png'

export function Reason({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <Image src={reasonCheckIcon} alt="" className="h-8 w-8" />
      <span className="text-base">{children}</span>
    </div>
  )
}
