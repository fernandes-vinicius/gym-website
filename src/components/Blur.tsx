import clsx from 'clsx'

export function Blur({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'absolute -z-[9] h-[30rem] w-[22rem] rounded-[50%]',
        'bg-[rgba(253,120,43,.69)] blur-full',
        className,
      )}
    />
  )
}
