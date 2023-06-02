import Image from 'next/image'
import Link from 'next/link'

import githubIcon from '~/assets/icons/github.png'
import instagramIcon from '~/assets/icons/instagram.png'
import linkedinIcon from '~/assets/icons/linkedin.png'

import { Logo } from './Logo'
import { Blur } from './Blur'

export function Footer() {
  return (
    <footer className="relative">
      <hr className="border border-solid border-lightgray" />

      <div
        className="flex h-80 flex-col items-center justify-center gap-16 px-8
        py-4"
      >
        {/* Social Links */}
        <div className="flex gap-16">
          <Image
            src={githubIcon}
            alt="Github"
            className="h-8 w-8 cursor-pointer"
          />
          <Image
            src={instagramIcon}
            alt="Instagram"
            className="h-8 w-8 cursor-pointer"
          />
          <Image
            src={linkedinIcon}
            alt="Linkedin"
            className="h-8 w-8 cursor-pointer"
          />
        </div>

        {/* Logo */}
        <Link href="/">
          <Logo className="w-40" />
        </Link>
      </div>

      <Blur
        className="bottom-0 right-[15%] !h-48 !w-[26rem]
      bg-red-600"
      />
      <Blur
        className="absolute bottom-0 left-[15%] !h-48 !w-[26rem]
      bg-[#ff7300]"
      />
    </footer>
  )
}
