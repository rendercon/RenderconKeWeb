import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <ul className="w-[400px] md:w-[500px] lg:w-[600px] flex font-mono justify-between items-center">
        <li><Link href="#">Agenda</Link></li>
        <li><Link href="#speakers">Speakers</Link></li>
        <li><Link href="#sponsors">Sponsors</Link></li>
        <li><Link href="#contacts">Contacts</Link></li>
    </ul>
  )
}

export default Navbar