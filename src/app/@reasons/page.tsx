import Image from 'next/image'

import image1 from '~/assets/images/image1.png'
import image2 from '~/assets/images/image2.png'
import image3 from '~/assets/images/image3.png'
import image4 from '~/assets/images/image4.png'

import { Reason } from './components/Reason'
import { Partners } from './components/Partners'

export default function Reasons() {
  return (
    <section id="reasons" className="flex gap-8 px-8">
      {/* Left */}
      <div className="grid flex-1 grid-cols-3 grid-rows-2 gap-4">
        <Image
          src={image1}
          alt=""
          className="row-span-2 h-[28rem] w-48 object-cover"
        />
        <Image
          src={image2}
          alt=""
          className="col-span-2 h-64 w-auto object-cover"
        />
        <Image src={image3} alt="" className="col-span-1 w-56 object-cover" />
        <Image
          src={image4}
          alt=""
          className="col-span-1 h-[11.2rem] w-40 object-cover"
        />
      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col gap-4 uppercase">
        <span className="font-bold text-orange">some reasons</span>
        <div className="text-5xl font-bold text-white">
          <span className="stroke-text">Why</span> <span>choose us?</span>
        </div>

        <div className="flex flex-col gap-4 text-5xl font-bold text-white">
          <Reason>over 140+ expert coachs</Reason>

          <Reason>train smarter and faster than before</Reason>

          <Reason>1 free program for new member</Reason>

          <Reason>reliable partners</Reason>

          <span className="text-base font-normal text-gray">OUR PARTNERS</span>

          <Partners />
        </div>
      </div>
    </section>
  )
}
