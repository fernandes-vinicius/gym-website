import { ReactNode } from 'react'

import './globals.css'

import { Inter } from 'next/font/google'

import { Footer } from '~/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Fit Club',
  description: `
    In here we will help you to shape and build your ideal body and live up your
    life to fullest
  `,
}

interface RootLayoutProps {
  children: ReactNode
  programs: ReactNode
  reasons: ReactNode
  plans: ReactNode
  testimonials: ReactNode
  joinUs: ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  const { children, programs, reasons, plans, testimonials, joinUs } = props

  return (
    <html lang="en" className={inter.className}>
      <body
        className="flex flex-col gap-24 overflow-x-hidden bg-appColor
        bg-main-deep"
      >
        {children}
        {programs}
        {reasons}
        {plans}
        {testimonials}
        {joinUs}

        <Footer />
      </body>
    </html>
  )
}
