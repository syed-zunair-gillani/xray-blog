import Link from 'next/link'
import React from 'react'
import Container from '../Container'

const Main = () => {
  return (
    <main className='my-12 md:my-20'>
      <Container>
        <p className='text-center text-lg font-semibold text-primary '>Out blog</p>
        <h1 className='mt-3 font-roboto text-3xl md:text-4xl text-center text-gray-800 font-medium'>Stories and interviews</h1>
        <p className='max-w-[550px] text-center mx-auto mt-3 text-gray-500 font-roboto text-lg font-light'>Subscribe to learn new product features, and latest in technology, solution and updates</p>
        <form className='max-w-[450px] mx-auto mt-6'>
          <div className='flex items-center gap-2'>
            <input type="text" placeholder='Enter your email' className='outline-none border placeholder:font-light border-gray-200 p-2.5 rounded-md w-full' />
            <input type="Submit" value="Subscribe" className='bg-primary text-white h-full p-2.5 px-4 active:scale-105 hover:bg-gray-800 rounded-md' />
          </div>
          <label className='mt-2 text-xs text-gray-400 font-light'>We care about your data in our <Link href="#" className='underline hover:text-primary'>privacy policy</Link></label>
        </form>
      </Container>
    </main>
  )
}

export default Main