'use client'

import Image from 'next/image'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'

import tImage3 from '~/assets/images/t-image3.jpg'
import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section id="testimonials" className="flex flex-col gap-4 px-8 md:flex-row">
      {/* Left */}
      <div className="flex flex-1 flex-col gap-8 uppercase text-white">
        <span className="font-bold text-orange">Testimonials</span>

        <span className="stroke-text text-4xl font-bold md:text-5xl">
          What they
        </span>

        <span className="text-4xl font-bold md:text-5xl">say about us</span>

        <span
          className="text-justify normal-case leading-10 tracking-[2px]
          text-white"
        >
          &quot;I made the right choice by choosing the Fitclub and by choosing
          the right plan and program I already achieved my ideal body!&quot;
        </span>
        <span>
          <span className="text-orange">MATHEW HENDRICKSON</span> {'- '}
          ENTREPRENEUR
        </span>
      </div>

      {/* Right */}
      <div
        className="relative flex flex-1 flex-col items-center justify-center
        gap-8 md:flex-row md:items-start md:justify-start md:gap-0"
      >
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{
            x: '0%',
            opacity: 2,
            transition: { duration: 1.5 },
          }}
          className="absolute right-36 top-[0.9rem] h-80 w-[17rem] border-2
          border-solid border-orange"
        />

        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          whileInView={{
            x: '0%',
            opacity: 1,
            transition: { duration: 1.5 },
          }}
          className="absolute right-28 top-16 h-[19rem] w-[17rem]
          bg-plan-card"
        />

        <Image
          src={tImage3}
          alt=""
          width={272}
          height={320}
          className="relative right-0 top-0 h-80 w-[17rem] self-center
          object-cover md:absolute md:right-32 md:top-8 md:self-auto"
        />

        {/* Arrows */}
        <div
          className="relative bottom-0 left-0 top-10 flex items-center gap-4
          md:absolute md:bottom-4 md:left-12 md:top-auto"
        >
          <ArrowLeftIcon size={32} className="cursor-pointer text-white/60" />
          <ArrowRightIcon size={32} className="cursor-pointer text-white" />
        </div>
      </div>
    </section>
  )
}
