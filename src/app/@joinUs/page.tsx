import Form from './components/Form'

export default function JoinUs() {
  return (
    <section
      id="join-us"
      className="flex flex-col gap-4 px-8 md:flex-row md:gap-40"
    >
      {/* Left */}
      <div
        className="relative text-2xl font-bold uppercase text-white
        md:text-5xl"
      >
        <hr
          className="absolute -my-[10px] w-[10.5rem] rounded-[5%] border-2
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
      <div className="flex items-end justify-center py-8 md:p-0">
        <Form />
      </div>
    </section>
  )
}
