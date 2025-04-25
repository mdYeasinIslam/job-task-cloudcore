import React from 'react'
import { useFetchProducts } from '@/hooks/useFetchProducts'
import Image from 'next/image'

export default async function page({ params }: {params: Promise<{ id: string }>}){
    const { id } = await params
    const products = await useFetchProducts()
    const findProduct= products.find(product=>product.id===parseInt(id))
  return (
    <section>
        <div className="max-w-6xl mx-auto my-10 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8">
        
        {/* Left Side - Product Details */}
        <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {findProduct?.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            {findProduct?.short_desc}
            </p>
            <p className="text-2xl font-semibold text-red-500 mb-6">
            {findProduct?.price} BDT
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-black text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            Buy Now
            </button>
        </div>

        {/* Right Side - findProduct Image */}
        <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full h-80 md:h-full rounded-2xl overflow-hidden">
            <Image
                src={`https://admin.refabry.com/storage/product/${findProduct?.image}`}
                alt={`${findProduct?.name}`}
                fill
                className="object-cover"
                sizes="100vw, 100vw"
            />
            </div>
        </div>

        </div>

    </section>
  )
}
