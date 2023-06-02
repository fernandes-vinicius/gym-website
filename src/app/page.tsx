'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import heroImg from '~/assets/images/hero.png'
import heroBgImg from '~/assets/images/hero-bg.png'
import caloriesBarsIcon from '~/assets/icons/calories-bars.png'

import { Blur } from '~/components/Blur'
import { Logo } from '~/components/Logo'
import { Navbar } from '~/components/Navbar'
import { Statistics } from '~/components/Statistics'
import { Button } from '~/components/Button'
import { NavLink } from '~/components/NavLink'
import { HeartRate } from '~/components/HeartRate'

const MotionImage = motion(Image)

export default function Home() {
  return (
    <section id="home" className="flex flex-col justify-between md:flex-row">
      <Blur className="left-0 !w-56 md:!w-[22rem]" />

      {/* Left */}
      <div
        className="flex flex-col gap-8 px-8 pb-8 pt-6"
        style={{ flex: '3 1' }}
      >
        <header id="header" className="flex justify-between">
          <Logo />
          <Navbar />
        </header>

        {/* Ad */}
        <div
          className="relative mt-0 flex w-fit scale-[0.8] items-center
          justify-start self-center rounded-[4rem] bg-[#393d42] px-[13px] py-5
          text-xs text-white md:mt-16 md:scale-100 md:self-start md:text-base"
        >
          <motion.div
            initial={{ right: 8, left: 'auto' }}
            whileInView={{ right: 'initial', left: 'initial' }}
            transition={{ duration: 3 }}
            className="absolute left-2 z-[1] h-4/5 w-[5.4rem] rounded-[3rem]
            bg-[#f48916]"
          />
          <span className="z-[2]">THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        {/* Hero Text */}
        <div
          className="flex flex-col items-center justify-center gap-6 text-4xl
          font-bold uppercase text-white md:items-start md:justify-start
          md:text-7xl"
        >
          <div>
            <span className="stroke-text">Shape</span> <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>

          <div
            className="w-4/5 text-center text-sm font-light normal-case
            tracking-[1px] md:text-left md:text-base"
          >
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="flex gap-8">
          <Statistics label="expert coaches" value={140} />
          <Statistics label="Members joined" value={978} />
          <Statistics label="fitness programs" value={50} />
        </div>

        {/* Hero Buttons */}
        <div className="flex justify-center gap-4 !font-normal md:justify-start">
          <Button>Get Started</Button>
          <Button className="!border-2 !border-orange bg-transparent">
            Learn More
          </Button>
        </div>
      </div>

      {/* Right */}
      <div className="relative flex-1 bg-none md:bg-[#f48916]">
        <Button
          className="absolute right-12 top-8 !w-fit !bg-white
          !text-black"
        >
          <NavLink to="join-us" className="hover:!text-black">
            Join Now
          </NavLink>
        </Button>

        {/* Heart Rate */}
        <HeartRate />

        <Image
          alt=""
          src={heroImg}
          className="relative left-28 right-32 top-16 w-60 md:absolute
          md:left-auto md:right-32 md:top-40 md:w-[23rem]"
          priority
        />

        <MotionImage
          initial={{ x: '100%', opacity: 0 }}
          whileInView={{ x: '0%', opacity: 1 }}
          transition={{ duration: 1 }}
          alt=""
          src={heroBgImg}
          className="absolute left-8 right-80 top-0 -z-[1] w-60 md:left-auto
          md:top-16"
        />

        {/* Calories */}
        <motion.div
          initial={{ x: '-50%' }}
          whileInView={{ x: '0%' }}
          transition={{ duration: 1 }}
          className="relative left-8 right-[28rem] top-20 mt-2 flex w-max gap-8
          rounded-[5px] bg-caloryCard p-4 md:absolute md:left-auto
          md:top-[32rem] md:mt-0"
        >
          <Image
            alt=""
            src={caloriesBarsIcon}
            width={48}
            height={48}
            className="w-12"
          />
          <div className="flex flex-col justify-between">
            <span className="text-gray">Calories burned</span>
            <span className="text-2xl text-white">220 kcal</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
