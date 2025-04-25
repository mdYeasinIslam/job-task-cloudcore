import { ProductType } from '@/types/Type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    product:ProductType
}

export default function ProductDetails({ product }:Props) {
  const img =`https://admin.refabry.com/storage/product/${product?.image}`
  return (
    <>
      
      <div className="group w-full relative overflow-hidden rounded-lg shadow-lg bg-black text-white cursor-pointer">
        <Image
       src={`https://admin.refabry.com/storage/product/${product?.image}`} 
        alt=" Winter Jacket"
          width={250}
          height={100}
        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
      />
        {/* Overlay container */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">
          <h3 className="text-lg font-semibold">Premium Winter Jacket</h3>
          <p className="text-sm">1499 BDT.</p>

          {/* Hidden content that appears on hover */}
          <div className="opacity-0 mt-2 transition-opacity duration-500 group-hover:opacity-100">
            <p className="text-xs">• Windproof & warm</p>
            <p className="text-xs">• Available in all sizes</p>
            <Link href={`/products/${product?.id}`}>
               <button className="mt-2 px-3 py-1 bg-red-600 rounded text-sm hover:bg-red-700">View Details</button>
            </Link>
          </div>
        </div>
</div>

    </>
  )
}
