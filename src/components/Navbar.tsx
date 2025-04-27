'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { User } from 'firebase/auth'
import toast from 'react-hot-toast'

type ContextType = {
  signOutAuth: () => Promise<void>
  user: User
}

export default function Navbar() {
  const {user, signOutAuth } = (useAuth() as any) as ContextType
  const path = usePathname()
  const [open, setOpen] = useState(false)
  
  const handleSignOut = () => {
    signOutAuth()
      .then(() => {
          toast.success('Successfully sign-out!');

    }).catch(e=>console.error(e))
  }
  const navElement = (pathName:string, name:string):React.JSX.Element => {
    return <>
     <Link className={` px-2 py-1 ${path==pathName && 'border bg-[#0c2a53] rounded-md font-semibold'}`} href={pathName}><li>{name}</li></Link>
    </>
  }
  const authElement = (pathName:string, name:string):React.JSX.Element => {
    return <>
      <Link className={`px-2 py-1 border hover:bg-[#6e7b96] hover:text-black duration-700 ${path==pathName && ' bg-[#0c2a53] rounded-md font-semibold'}`} href={pathName}>{name}</Link>
    </>
  }
  return (
      <nav className='  bg-[#161B22] py-2 px-2 xl:px-5'>
          <div className='  flex items-center justify-between'>
              
            <div className=' flex items-center gap-2'>
                <div onClick={()=>setOpen(!open)} className={`md:hidden flex`}>
                  {
                    open?
                  
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                        :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    
                  }
                  <ul onClick={()=>setOpen(false)} className={`absolute top-14 left-0 flex flex-col gap-4 bg-[#161B22] text-white w-1/2 pl-2 py-1 duration-700 ease-linear ${open?'left-0':'left-[-600px]'}`} >
                  {navElement('/','Home')}
                  {navElement('/products','Product')}
                  {navElement('/about','About')}
                 {
                    !user ?
                      <>
                      {authElement('/signIn', 'SignIn')}
                      </>
                      :
                      <button onClick={handleSignOut} className={`px-2 py-1 border hover:text-black hover:bg-[#777cbe]  duration-700 cursor-pointer`} >Sign-Out</button>
                  }
              </ul>  
                     
                  </div>
                  <Image
                      src={'/images/cloths.png'}
                      alt='This is a  cloth store logo'
                      width={50}
                      height={50}
                  />
                  <h4 className='font-semibold'>FashionEra</h4>
              </div>
              <ul className='hidden md:flex gap-5 font-medium items-center'>
                  {navElement('/','Home')}
                  {navElement('/products','Product')}
                  {navElement('/about','About')}
                  {
                    !user ?
                      <>
                      {authElement('/signIn', 'SignIn')}
                      </>
                      :
                      <button onClick={handleSignOut} className={`px-2 py-1 border hover:text-black hover:bg-[#777cbe]  duration-700 cursor-pointer`} >Sign-Out</button>
                  }
                 
              </ul>
         </div>
   </nav>
  )
}
