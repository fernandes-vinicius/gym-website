import { CrownIcon, DumbbellIcon, HeartPulseIcon } from 'lucide-react'

import { Blur } from '~/components/Blur'

import { Plan } from './components/Plan'

export default function Plans() {
  return (
    <section id="plans" className="relative -mt-16 flex flex-col gap-16 px-8">
      <Blur className="left-0 top-24 !h-[23rem] !w-[32rem]" />
      <Blur className="right-0 top-40 !h-[23rem] !w-[32rem] " />

      <header
        className="mt-8 flex flex-col items-center justify-center gap-8 text-2xl
        font-bold uppercase italic text-white md:mt-0 md:flex-row
        md:items-start md:justify-start md:text-5xl"
      >
        <span className="stroke-text">Ready to Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">now with us</span>
      </header>

      {/* Plans */}
      <div
        className="flex flex-col items-center justify-center gap-12
        md:flex-row"
      >
        <Plan
          icon={<HeartPulseIcon size={32} className="text-orange" />}
          title="Basic Plan"
          price={25}
          features={[
            '2 hours of exercises',
            'Free consultation to coaches',
            'Access to The Community',
          ]}
        />

        <Plan
          icon={<CrownIcon size={32} />}
          title="Premium Plan"
          price={30}
          features={[
            '5 hours of exercises',
            'Free consultation to coaches',
            'Access to minibar',
          ]}
          isFeatured
        />

        <Plan
          icon={<DumbbellIcon size={32} className="rotate-90 text-orange" />}
          title="Pro Plan"
          price={45}
          features={[
            '8 hours of exercises',
            'Consultation of Private Coach',
            'Free Fitness Merchandises',
          ]}
        />
      </div>
    </section>
  )
}
