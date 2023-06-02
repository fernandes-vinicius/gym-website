import Image from 'next/image'

import clsx from 'clsx'

import { Button } from '~/components/Button'

interface PlanProps {
  title: string
  price: number
  features: string[]
  isFeatured?: boolean
  className?: string
}

export function Plan(props: PlanProps) {
  const { title, price, features, isFeatured, className } = props

  return (
    <div
      className={clsx(
        'flex min-w-[15rem] flex-col gap-8 bg-caloryCard p-6 text-white',
        [isFeatured && 'bg-plan-card md:scale-110'],
        className,
      )}
    >
      {/* <span>hearth icon</span> */}

      <span className="text-base font-bold">{title}</span>
      <span className="text-5xl font-bold">$ {price}</span>

      {/* Features */}
      <div className="flex flex-col gap-4">
        {features.map((feature, index) => (
          <div key={feature + index} className="flex items-center gap-4">
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgBxZiNcYMwDIVFJ8gGZQQ2KBuUETxCNoANQieATtARkkyQdgJ3g4ygykFcdY4NNpjk3ekS4Fn+bHz+IYMIIWJJP28UBUcuHv9ynClOWZadIJWo4h1FTXHFOGkKBWtFSSpOtkY7WCJu/cGR0PRGa1pIkVtlCobuBbieqKNmT+0DuDgq38e0irylzy8AbnIZbIAWl3ZpAACpsQ2HScMDANRTAdikhaGDhAoFkL1gYHJIpCAANmphUpBIDoDWZyxlL0AiOQD6KXOTeixEAXCBozBXM14197pCAXCYFKvb+LPGQzEDMKpeA8Desd4LyBIw3cK9VUG9FID9//WGQnDB3gUSCzAJgQFrhAPkGAvggtDi+jUwgQ0SC1CIMtrc+BI3FATKAdJHlK1kT77QvR/xvAhNRHtIRT8ffPnJ16F6F//P9ox5xYR7B5+sIVCON+UmtoENhdZiKR80j+gNypujb7HEYQqVDw+wgShv5+wFYZAj1qiGhML7CU35jO0WIBi6r2Cza7vf4cKdFrrPL5fQgjaIxriJzHd0NHnDB73j1YwwHQ7jp7AqNSNfcctd59Zl5xdOqnGdNM5slraEMb3RhLQ+gwjhMMWaMN8ocrj/PvENw1oU9X3iD5Siz1H9lZMJAAAAAElFTkSuQmCC"
              alt=""
              width={16}
              height={16}
              className="w-4"
            />
            <span>{feature}</span>
          </div>
        ))}

        <div className="text-[0.8rem]">
          <span>See more benefits {'->'}</span>
        </div>

        <Button
          className={clsx('w-full !bg-white !text-black', [
            isFeatured && '!text-orange',
          ])}
        >
          Join now
        </Button>
      </div>
    </div>
  )
}
