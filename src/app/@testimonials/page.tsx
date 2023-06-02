import Image from 'next/image'

import tImage3 from '~/assets/images/t-image3.jpg'

export default function Testimonials() {
  return (
    <section id="testimonials" className="flex flex-col gap-4 px-8 md:flex-row">
      {/* Left */}
      <div className="flex flex-1 flex-col gap-8 uppercase text-white">
        <span className="font-bold text-orange">Testimonials</span>

        <span className="stroke-text text-4xl font-bold md:text-5xl">
          What they
        </span>

        <span className="text-4xl font-bold md:text-5xl">say about us</span>

        <span
          className="text-justify normal-case leading-10 tracking-[2px]
          text-white"
        >
          &quot;I made the right choice by choosing the Fitclub and by choosing
          the right plan and program I already achieved my ideal body!&quot;
        </span>
        <span>
          <span className="text-orange">MATHEW HENDRICKSON</span> {'- '}
          ENTREPRENEUR
        </span>
      </div>

      {/* Right */}
      <div
        className="relative flex flex-1 flex-col items-center justify-center
        gap-8 md:flex-row md:items-start md:justify-start md:gap-0"
      >
        <div
          className="absolute right-36 top-[0.9rem] h-80 w-[17rem] border-2
          border-solid border-orange"
        />

        <div
          className="absolute right-28 top-16 h-[19rem] w-[17rem]
          bg-plan-card"
        />

        <Image
          src={tImage3}
          alt=""
          width={272}
          height={320}
          className="relative right-0 top-0 h-80 w-[17rem] self-center
          object-cover md:absolute md:right-32 md:top-8 md:self-auto"
        />

        {/* Arrows */}
        <div
          className="relative bottom-0 left-0 top-10 flex gap-4
          md:absolute md:bottom-4 md:left-12 md:top-auto"
        >
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAYAAADoSujCAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALWSURBVHgB1ZrbbepAEIbHRiDEk0uAB24SD6GD0EFOBQkVkFQQTgUhFUAqOJwKQgfkAYmrhEvwCzyAgPwTmSgXCLNhbMMnRbbCCs2/u7P77ywWBcBoNLrA42Gz2fDTsSyrs1qtqsVi0SVlLFJmMplcI9gGXp0vH3nL5bJSKpVeSBGbFPGDb9H34BknkUg8kDJqAsbj8b0f/F4wpS5JGRUBHPx6va4LmrqkzNECDILnEfhPyhyVxFhteKW5FTZv5/P5P6TMr0cAwTelwWOEnoIInjEegW6366RSqSZeryTtIfKxUChIR8kYIwF+8M94vZC0R8//xeZVpwARC+j3+2nbtv/RCQXPiAT4wXPPpyXtMW3uMG0aFAIHBZgGj55nz9OikPhRgGHwHv6qWG3aFCJ7BbCjxFTg4B06jAfHWcnlcqpGTcLOfQA9f2kQvBtV8Ezs6z/YUeLB0yBJh3Ex5ytI2AFFxKcRwLSpHXKUH3gLPohDignvOWBiyoCHtncUgLuUgE7rbN/fBBgGfwq4vkVpWEjYGyyVTTpDeMNE7HaNzhSsfjVOYpG3OVHSLMCl8+XF5mSgMwULz6PNmczWl84LjxOYTeP7PoDVqI6Evpd+A7tOimD6xWIxbzabueVymc3jZzM3GAxukdnS4tNp7cRbDPeFyEXstNOGVjpSETvtNFtjtsgkm+N86On2er1I9pO9dSEWwT1LMhFOPB5/Hg6HolKLJupnYnCDY+UThcTByhzPbYORYFrsbikkTOtC4pFA23o2mw18gzSqzE2nU2exWIgrc2GIMCruZjIZD7csPJ1EpRM+JAU9nX5dXseK08LjWtIWS3ILq1qVAuCo+wFD/9Sez+fVrYfR4qgbGi7eGjjZq2QyqV5mP/qKyUREEMdXlUs+AxESb2WE2jWrL+LHROUbe1JG9aKbT0i+iF2J6vHPDUgZVQGML6L8obe5ct1hdxuE5X4FLihqMNKrIDAAAAAASUVORK5CYII="
            alt=""
            width={24}
            height={24}
            className="w-6 cursor-pointer"
          />
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAbCAYAAABr/T8RAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADxSURBVHgB5ZfhDYIwEIWfTsAGOoIj6AY4gWwAG8AIbAAb6AhsoBswAiOcd1KiiaUEci0/+JKXNJD0I7m2R4EFEFHK6UxyhIBFCf1TYSZ7zCeyPJOPeXKO8IVMzmnJTrtp+Qm+4MkjU1sbsuJv8AkLahrH73ZjQbFZeeaQV5zPObAzg5Rzhh6yoqORdy/OVcR3HsQISyNiwgrIWd0gPI+hxiXnAD2manyBNtT36jHqYVVrS3OHtIQPJqQFtKG+UVQOaQZtaLo7JdCG3P1YpPr9mNb4AzHSLqjUiMdan9Raf4/+iGOL1M/BYJEX9L1JFFjAG4XRmJQfpPVeAAAAAElFTkSuQmCC"
            alt=""
            width={24}
            height={24}
            className="w-6 cursor-pointer"
          />
        </div>
      </div>
    </section>
  )
}
