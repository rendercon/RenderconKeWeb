import Link from 'next/link'
import { Button } from './Button'
import { Container } from './Container'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
      <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <span className='text-slate-200 text-2xl font-semibold'>RenderCon</span>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-gray-50 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2024-10-04">04</time> - 
              <time dateTime="2024-10-05"> 05 of October, 2024</time>
            </p>
            <p>•</p>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
        {/* <div className="mt-5 sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#">Ticket info coming soon</Button>
        </div> */}
        <div className="mt-5 pl-10  sm:mt-10 sm:flex md:pl-0 lg:pl-0 lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button>
          <Link 
            href="https://bit.ly/rcke24wv1" target="_blank" rel="noopener noreferrer">Get Ticket</Link>
          </Button>
        </div>
      </Container>
    </header>
  )
}
