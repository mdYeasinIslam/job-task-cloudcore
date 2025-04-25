import { ProductType } from '@/types/Type'
import Image from 'next/image'
import React from 'react'

interface Props {
    product:ProductType
}

export default function ProductDetails({ product }:Props) {
    console.log(product)
  return (
    <div className='border bg-[#161B22] relative'>
      <figure className=' mx-auto h-88     rounded-xl'>
            <img
             src={`https://admin.refabry.com/storage/product/${product?.image}`} 
            alt="This is product image" 
            className='w-full h-full brightness-50'
            />
             
      </figure>
      <div className='absolute top-0 '>

          <h2>{ product.name}</h2>
      </div>
    </div>
  )
}
