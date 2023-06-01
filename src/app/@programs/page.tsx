import { Category } from './components/Category'

export default function Programs() {
  return (
    <section id="programs" className="flex flex-col gap-8 px-8">
      <header
        className="flex justify-center gap-20 text-5xl font-bold uppercase
        italic text-white"
      >
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </header>

      {/* Categories */}
      <div className="flex gap-4">
        <Category
          name="Strength Training"
          description="In this program, you are trained to improve your strength
          through many exercises."
          icon="dumbell"
        />

        <Category
          name="Cardio Training"
          description="In this program, you are trained to do sequential moves
          in range of 20 until 30 minutes."
          icon="running"
        />

        <Category
          name="Fat Burning"
          description="This program is suitable for you who wants to get rid of
          your fat and lose their weight."
          icon="flame"
        />

        <Category
          name="Health Fitness"
          description="This programs is designed for those who exercises only
          for their body fitness not body building."
          icon="health"
        />
      </div>
    </section>
  )
}
