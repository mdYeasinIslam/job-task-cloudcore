import Footer from '@/components/Footer'
import PrivatePage from '@/components/PrivatePage'
import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <PrivatePage>

      <div className='space-y-5'>
        {children}
        <Footer/>
        </div>
    </PrivatePage>
  )
}
