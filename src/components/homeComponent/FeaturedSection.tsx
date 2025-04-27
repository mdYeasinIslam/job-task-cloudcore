'use client'
import { useFetchProducts } from '@/hooks/useFetchProducts'
import React from 'react'
import ProductDetails from '../ProductDetails'
import Link from 'next/link'
import { ProductType } from '@/types/Type'

export default  function FeaturedSection() {
    const {products} = useFetchProducts() 

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Featured Winter Collection
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {
            products?.slice(0,4).map((product:ProductType)=> <ProductDetails key={product.id} product={product}/>)
          }
        </div>
        <div className="flex justify-center mt-10">
           <Link
            href="/products"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition"
          >
           View more
        </Link>
         </div>
      </section>
  )
}
