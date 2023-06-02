import { ReactNode } from 'react'

import clsx from 'clsx'
import { CheckCircleIcon } from 'lucide-react'

import { Button } from '~/components/Button'

interface PlanProps {
  icon?: ReactNode
  title: string
  price: number
  features: string[]
  isFeatured?: boolean
  className?: string
}

export function Plan(props: PlanProps) {
  const { icon, title, price, features, isFeatured, className } = props

  return (
    <div
      className={clsx(
        'flex min-w-[15rem] flex-col gap-8 bg-caloryCard p-6 text-white',
        [isFeatured && 'bg-plan-card md:scale-110'],
        className,
      )}
    >
      <span>{icon}</span>

      <span className="text-base font-bold">{title}</span>
      <span className="text-5xl font-bold">$ {price}</span>

      {/* Features */}
      <div className="flex flex-col gap-4">
        {features.map((feature, index) => (
          <div key={feature + index} className="flex items-center gap-4">
            <CheckCircleIcon size={16} />
            <span>{feature}</span>
          </div>
        ))}

        <div className="text-[0.8rem]">
          <span>See more benefits {'->'}</span>
        </div>

        <Button
          className={clsx('w-full !bg-white !text-black', [
            isFeatured && '!text-orange',
          ])}
        >
          Join now
        </Button>
      </div>
    </div>
  )
}
