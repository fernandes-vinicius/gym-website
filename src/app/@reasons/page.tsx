import Image from 'next/image'

import image1 from '~/assets/images/image1.png'
import image2 from '~/assets/images/image2.png'
import image3 from '~/assets/images/image3.png'
import image4 from '~/assets/images/image4.png'

import { Reason } from './components/Reason'
import { Partners } from './components/Partners'

export default function Reasons() {
  return (
    <section id="reasons" className="flex flex-col gap-8 px-8 md:flex-row">
      {/* Left */}
      <div
        className="grid flex-1 auto-rows-auto grid-cols-3 gap-4 overflow-hidden
        md:auto-rows-fr"
      >
        <Image
          src={image1}
          alt=""
          className="row-span-2 h-[17rem] w-28 object-cover md:h-[28rem] md:w-48"
        />
        <Image
          src={image2}
          alt=""
          className="col-span-2 h-40 w-60 object-cover md:h-64 md:w-auto"
        />
        <Image
          src={image3}
          alt=""
          className="col-span-1 row-span-1 h-full w-28 object-cover md:h-auto
          md:w-56"
        />
        <Image
          src={image4}
          alt=""
          className="col-span-1 row-span-1 h-24 w-28 object-cover md:h-[11.2rem]
          md:w-40"
        />
      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col gap-4 uppercase">
        <span className="font-bold text-orange">some reasons</span>
        <div className="text-5xl font-bold text-white">
          <span className="stroke-text">Why</span> <span>choose us?</span>
        </div>

        <div className="flex flex-col gap-4 text-5xl font-bold text-white">
          <Reason>over 140+ expert coach&apos;s</Reason>

          <Reason>train smarter and faster than before</Reason>

          <Reason>1 free program for new member</Reason>

          <Reason>reliable partners</Reason>
        </div>

        <span className="text-base font-normal text-gray">OUR PARTNERS</span>

        <Partners />
      </div>
    </section>
  )
}
