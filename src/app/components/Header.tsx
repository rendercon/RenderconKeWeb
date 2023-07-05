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
              <time dateTime="2023-09-29">29</time>-
              <time dateTime="2023-09-30">30 of September, 2023</time>
            </p>
            <p>•</p>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
        <div className="mt-5 sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="">Ticket info coming soon</Button>
        </div>
      </Container>
    </header>
  )
}
