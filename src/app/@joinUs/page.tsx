import Form from './components/Form'

export default function JoinUs() {
  return (
    <section id="join-us" className="flex gap-40 px-8">
      {/* Left */}
      <div className="relative text-5xl font-bold uppercase text-white">
        <hr
          className="absolute -my-[10px] w-[10.5rem] rounded-[20%] border-2
          border-solid border-orange"
        />
        <div className="flex gap-4">
          <span className="stroke-text">Ready to</span>
          <span>Level up</span>
        </div>
        <div className="flex gap-4">
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-end justify-center">
        <Form />
      </div>
    </section>
  )
}
