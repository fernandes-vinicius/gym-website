'use client'

import { Button } from '~/components/Button'

export default function Form() {
  return (
    <form
      className="flex w-full flex-col gap-12 bg-[gray] px-8 py-4
      md:flex-row"
    >
      <input
        type="email"
        name="user_email"
        id="user_email"
        placeholder="Enter your Email Address here..."
        className="border-0 bg-inherit px-[2px] py-[1px] text-lightgray
        outline-none placeholder:text-lightgray"
      />
      <Button onClick={(e) => e.preventDefault()}>Join now</Button>
    </form>
  )
}
