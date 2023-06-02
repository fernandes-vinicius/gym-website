'use client'

import clsx from 'clsx'
import { Link, LinkProps } from 'react-scroll'

interface NavLinkProps extends LinkProps {}

export function NavLink({ to, className, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-50}
      duration={200}
      className={clsx('cursor-pointer hover:text-orange', className)}
    >
      {children}
    </Link>
  )
}
