import Image from 'next/image'
import React from 'react'

export default function SignIn() {
  return (
    <section className='container mx-auto flex items-center mt-10 h-full'>
      <div className='w-1/2 flex justify-center'>
        <Image
          src='/images/signUp1.svg'
          alt='This is sign In symbol'
          width={500}
          height={400}
          className=' '
        />
      </div>
      <div className='border bg-[#1d242e] h-1/2 p-10 text-center place-content-center place-items-center space-y-5'>
            <h1 className='text-4xl font-semibold'>Log In you account...</h1>
          <button className='border  px-3 py-1 flex items-center gap-4 bg-[#0b3d1a] text-white font-semibold rounded-md cursor-pointer'>
          <img className='w-10 h-10' src="/images/google.png" alt="" />  
         <span> Sign-In with Google</span></button>
      </div>
    </section>
  )
}
