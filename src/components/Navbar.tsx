'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Navbar() {
  const path = usePathname()
  
  return (
      <nav className='  bg-[#161B22] py-2'>
          <div className=' container mx-auto flex items-center justify-between'>
              
            <div className='flex items-center gap-2'>
                <Image
                    src={'/images/cloths.png'}
                    alt='This is a  cloth store logo'
                    width={50}
                    height={50}
                />
                <h4 className='font-semibold'>FashionEra</h4>
            </div>
            <ul className='flex gap-5 font-medium items-center'>
                <Link className={` px-2 py-1 ${path=='/' && 'border bg-[#0c2a53] rounded-md font-semibold'}`} href='/'><li>Home</li></Link>
                <Link className={` px-2 py-1 ${path=='/products' && 'border bg-[#0c2a53] rounded-md font-semibold'}`} href='/products'><li>Product</li></Link>
                <Link className={` px-2 py-1 ${path=='/about' && 'border bg-[#0c2a53] rounded-md font-semibold'}`} href='/about'><li>About</li></Link>
              <Link className={`px-2 py-1 border hover:bg-[#6e7b96] hover:text-black duration-700 ${path=='/signIn' && ' bg-[#0c2a53] rounded-md font-semibold'}`} href='/signIn'>Sign In</Link>
              <Link className={` px-2 py-1 border  hover:bg-[#6e7b96] hover:text-black duration-700 ${path=='/signUp' && ' bg-[#0c2a53] rounded-md font-semibold'}`} href='/signUp'>Register</Link>
            </ul>
              
         </div>
   </nav>
  )
}
