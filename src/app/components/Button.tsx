import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
    href?: string
    className?: string
    children: React.ReactNode
}

export function Button({ href, className, children, ...props }: ButtonProps) {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-slate-600 px-4 py-2 text-base font-semibold font-mono text-white cursor-pointer hover:bg-slate-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 active:text-white/70',
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} >
        {children}
    </Link>
  ) : (
    <button className={className} {...props} disabled>
        {children}
    </button>
  )
}