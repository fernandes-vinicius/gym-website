'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import hearthRateIcon from '~/assets/icons/hearth-rate.png'

export function HeartRate() {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      whileInView={{ x: '0%', opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute left-4 top-8 flex w-fit flex-col items-start gap-4
      rounded-[5px] bg-darkGrey p-4 md:left-auto md:right-16 md:top-28"
    >
      <Image alt="" src={hearthRateIcon} className="w-8" priority />

      <span className="text-gray">Heart Rate</span>
      <span className="text-2xl text-white">116 bpm</span>
    </motion.div>
  )
}
