import Image from 'next/image'

interface CategoryProps {
  name: string
  description: string
  icon: string
}

export function Category({ icon, name, description }: CategoryProps) {
  return (
    <div
      className="bg-[none 0% 0% / auto repeat scroll padding-box border-box
      rgb(128, 128, 128)] flex flex-1 cursor-auto flex-col justify-between
      gap-4 bg-[gray] p-8 text-white hover:cursor-pointer hover:bg-plan-card"
    >
      <span>{icon}</span>
      <span className="text-base font-bold">{name}</span>
      <span className="text-[0.9rem] leading-[25px]">{description}</span>
      <div className="flex items-center gap-8">
        <span>Join Now</span>
        <Image
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAbCAYAAABr/T8RAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADxSURBVHgB5ZfhDYIwEIWfTsAGOoIj6AY4gWwAG8AIbAAb6AhsoBswAiOcd1KiiaUEci0/+JKXNJD0I7m2R4EFEFHK6UxyhIBFCf1TYSZ7zCeyPJOPeXKO8IVMzmnJTrtp+Qm+4MkjU1sbsuJv8AkLahrH73ZjQbFZeeaQV5zPObAzg5Rzhh6yoqORdy/OVcR3HsQISyNiwgrIWd0gPI+hxiXnAD2manyBNtT36jHqYVVrS3OHtIQPJqQFtKG+UVQOaQZtaLo7JdCG3P1YpPr9mNb4AzHSLqjUiMdan9Raf4/+iGOL1M/BYJEX9L1JFFjAG4XRmJQfpPVeAAAAAElFTkSuQmCC"
          width={16}
          height={16}
          className="w-4"
        />
      </div>
    </div>
  )
}
