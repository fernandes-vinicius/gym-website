import Image from 'next/image'

import heroImg from '~/assets/images/hero.png'
import heroBgImg from '~/assets/images/hero-bg.png'
import hearthIcon from '~/assets/icons/hearth.png'
import caloriesBarsIcon from '~/assets/icons/calories-bars.png'

import { Blur } from '~/components/Blur'
import { Logo } from '~/components/Logo'
import { Navbar } from '~/components/Navbar'
import { Statistics } from '~/components/Statistics'
import { Button } from '~/components/Button'

export default function Home() {
  return (
    <section id="home" className="flex justify-between">
      <Blur className="left-0" />

      {/* Left */}
      <div
        className="flex flex-col gap-8 px-8 pb-8 pt-6"
        style={{ flex: '3 1' }}
      >
        <header id="header" className="flex justify-between">
          <Logo />
          <Navbar />
        </header>

        <div
          className="relative mt-16 flex w-fit items-center justify-start
          rounded-[4rem] bg-[#393d42] px-[13px] py-5 text-white"
        >
          <div
            className="absolute left-2 z-[1] h-4/5 w-[5.4rem] rounded-[3rem]
            bg-[#f48916]"
          />
          <span className="z-[2]">THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        {/* Hero Text */}
        <div
          className="flex flex-col gap-6 text-7xl font-bold uppercase
          text-white"
        >
          <div>
            <span className="stroke-text">Shape</span> <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>

          <div
            className="w-4/5 text-base font-extralight normal-case
            tracking-[1px]"
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
        <div className="flex gap-4 !font-normal">
          <Button>Get Started</Button>
          <Button className="!border-2 !border-orange bg-transparent">
            Learn More
          </Button>
        </div>
      </div>

      {/* Right */}
      <div className="relative bg-[#f48916]" style={{ flex: '1 1' }}>
        <Button className="absolute right-12 top-8 bg-white text-black">
          <a href="/">Join Now</a>
        </Button>

        {/* Heart Rate */}
        <div
          className="absolute right-16 top-28 flex w-fit flex-col items-start
          gap-4 rounded-[5px] bg-darkGrey p-4"
        >
          <Image
            alt=""
            src={hearthIcon}
            width={32}
            height={32}
            className="w-8"
            priority
          />
          <span className="text-gray">Heart Rate</span>
          <span className="text-2xl text-white">116 bpm</span>
        </div>

        <Image
          alt=""
          src={heroImg}
          className="absolute right-32 top-40 w-[23rem]"
        />

        <Image
          alt=""
          src={heroBgImg}
          className="absolute right-80 top-16 -z-[1] w-60"
        />

        {/* Calories */}
        <div
          className="absolute right-[28rem] top-[32rem] flex w-max gap-8
          rounded-[5px] bg-caloryCard p-4"
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
        </div>
      </div>
    </section>
  )
}
