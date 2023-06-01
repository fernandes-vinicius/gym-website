import { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'w-32 border-4 border-solid border-transparent bg-orange',
        'p-2 font-bold text-white transition-all duration-300',
        className,
      )}
    >
      {children}
    </button>
  )
}
