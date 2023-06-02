import {
  DumbbellIcon,
  PersonStandingIcon,
  FlameIcon,
  HeartPulseIcon,
} from 'lucide-react'

import { Category } from './components/Category'

export default function Programs() {
  return (
    <section id="programs" className="flex flex-col gap-8 px-8">
      <header
        className="mt-8 flex flex-col items-center justify-center gap-4 text-2xl
        font-bold uppercase italic text-white md:mt-0 md:flex-row
        md:items-start md:gap-20 md:text-5xl"
      >
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </header>

      {/* Categories */}
      <div className="flex flex-col gap-4 md:flex-row">
        <Category
          name="Strength Training"
          description="In this program, you are trained to improve your strength
          through many exercises."
          icon={<DumbbellIcon size={32} className="rotate-90" />}
        />

        <Category
          name="Cardio Training"
          description="In this program, you are trained to do sequential moves
          in range of 20 until 30 minutes."
          icon={<PersonStandingIcon size={32} />}
        />

        <Category
          name="Fat Burning"
          description="This program is suitable for you who wants to get rid of
          your fat and lose their weight."
          icon={<FlameIcon size={32} />}
        />

        <Category
          name="Health Fitness"
          description="This programs is designed for those who exercises only
          for their body fitness not body building."
          icon={<HeartPulseIcon size={32} />}
        />
      </div>
    </section>
  )
}
