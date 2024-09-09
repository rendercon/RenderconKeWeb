import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <ul className="w-full lg:w-[600px] flex flex-col h-[120px] lg:h-auto lg:flex-row font-mono justify-between lg:items-center">
        <li><Link href="/about">About</Link></li>
        <li><Link href="#speakers">Speakers</Link></li>
        <li><Link href="#sponsors">Sponsors</Link></li>
        <li><Link href="#contacts">Contacts</Link></li>
    </ul>
  )
}

export default Navbar