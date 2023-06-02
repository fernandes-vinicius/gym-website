import CountUp from 'react-countup'

interface StatisticsProps {
  label: string
  value: number
}

export function Statistics({ label, value }: StatisticsProps) {
  return (
    <div className="flex flex-col">
      <span className="text-lg text-white md:text-[2rem]">
        <div>
          <CountUp start={0} end={value} duration={2.75} prefix="+ " />
        </div>
      </span>
      <span className="text-sm uppercase text-gray md:text-base">{label}</span>
    </div>
  )
}
