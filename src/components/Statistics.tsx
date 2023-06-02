interface StatisticsProps {
  label: string
  value: number
}

export function Statistics({ label, value }: StatisticsProps) {
  return (
    <div className="flex flex-col">
      <span className="text-lg text-white md:text-[2rem]">
        <div>+ {value}</div>
      </span>
      <span className="text-sm uppercase text-gray md:text-base">{label}</span>
    </div>
  )
}
