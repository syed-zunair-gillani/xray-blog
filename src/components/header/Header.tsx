import React from 'react'
import Container from '../Container'
import { Logo } from '../importer'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='border-b-[1px] border-gray-100 py-4'>
      <Container className="flex items-center justify-between">
          <Logo/>
          <nav className='flex space-x-6 uppercase font-opensans items-center'>
            <Link href="/" className='hover:text-primary'>Home</Link>
            <Link className='hover:text-primary' href="/blogs">Blog</Link>
          </nav>
      </Container>
    </header>
  )
}

export default Header