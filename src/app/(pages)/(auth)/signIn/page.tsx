'use client'
import { useAuth } from '@/context/AuthContext'
import { UserCredential } from 'firebase/auth'
import Image from 'next/image'
import {  useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

type ContextType= {
  googleAuth: () => Promise<UserCredential>
}

export default function SignIn() {
  const { googleAuth } = (useAuth() as unknown) as ContextType
  const router = useRouter()
  const handleAuth = () => {
    googleAuth()
      .then(() => {
        toast.success('Successfully sign-In!');
        router.push('/')
      })
      .catch(e => {
        toast.error(e.message);
        console.error(e)
      })
  }
  return (
    <section className='container mx-auto flex flex-col md:flex-row items-center mt-10 h-full gap-5 px-5 lg:px-0'>
      <div className='w-1/2 flex justify-center'>
        <Image
          src='/images/signUp1.svg'
          alt='This is sign In symbol'
          width={500}
          height={400}
          className=' '
        />
      </div>
      <div className=' border bg-[#1d242e] md:h-1/2 p-10 text-center place-content-center place-items-center space-y-5 rounded-md'>
            <h1 className='text-4xl font-semibold'>Log In you account...</h1>
          <button onClick={handleAuth} className='border px-3 py-1 flex items-center gap-4 bg-[#0b3d1a] text-white font-semibold rounded-md cursor-pointer '>
          <Image
            className='w-7 h-7 md:w-10 md:h-10'
            src="/images/google.png"
            width={500}
            height={500}
            alt="" />  
         <span> Sign-In with Google</span></button>
      </div>
    </section>
  )
}
