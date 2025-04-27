import Footer from '@/components/Footer'
import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>{children}
    <Footer/>
    </div>
  )
}
