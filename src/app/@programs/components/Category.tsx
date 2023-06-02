import { ReactNode } from 'react'

import { ArrowRightIcon } from 'lucide-react'

interface CategoryProps {
  name: string
  description: string
  icon?: ReactNode
}

export function Category({ icon, name, description }: CategoryProps) {
  return (
    <div
      className="flex flex-1 cursor-auto flex-col justify-between gap-4
      bg-[gray] p-8 text-white hover:cursor-pointer hover:bg-plan-card"
    >
      <span className="block">{icon}</span>
      <span className="text-base font-bold">{name}</span>
      <span className="text-[0.9rem] leading-[25px]">{description}</span>
      <div className="flex items-center gap-8">
        <span>Join Now</span>
        <ArrowRightIcon size={24} />
      </div>
    </div>
  )
}
