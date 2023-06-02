import Image from 'next/image'

import nbIcon from '~/assets/icons/nb.png'
import adidasIcon from '~/assets/icons/adidas.png'
import nikeIcon from '~/assets/icons/nike.png'

export function Partners() {
  return (
    <div className="flex gap-4 text-5xl font-bold text-white">
      <Image src={nbIcon} alt="" width={40} height={40} className="w-10" />
      <Image src={adidasIcon} alt="" width={40} height={40} className="w-10" />
      <Image src={nikeIcon} alt="" width={40} height={40} className="w-10" />
    </div>
  )
}
