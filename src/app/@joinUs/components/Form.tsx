import { Button } from '~/components/Button'

export default function Form() {
  return (
    <form className="flex gap-12 bg-[gray] px-8 py-4">
      <input
        type="email"
        name="user_email"
        id="user_email"
        placeholder="Enter your Email Address here..."
        className="border-0 bg-inherit px-[2px] py-[1px] text-lightgray
        outline-none placeholder:text-lightgray"
      />
      <Button>Join now</Button>
    </form>
  )
}
