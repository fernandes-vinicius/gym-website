interface StatisticsProps {
  label: string
  value: number
}

export function Statistics({ label, value }: StatisticsProps) {
  return (
    <div className="flex flex-col">
      <span className="text-[2rem] text-white">
        <div>+ {value}</div>
      </span>
      <span className="uppercase text-gray">{label}</span>
    </div>
  )
}
