import { ProductType } from '@/types/Type'
import axios from 'axios'
import React from 'react'
import ProductDetails from './ProductDetails'

export const fetchProducts =async () => {
  const res = await axios.get('https://admin.refabry.com/api/all/product/get')
  return res.data
}

export default async function Products() {
  const data =await fetchProducts()
  const products = data?.data?.data as ProductType[]
  return (
    <section className='space-y-5'>
       <div className="text-center py-10 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        Explore Our Premium Collection
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
        Handpicked products designed for comfort, style, and performance
      </p>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-red-500 to-black rounded-full"></div>
    </div>
      <div className='grid grid-cols-5 gap-5'>
        {
          products?.map(product => <ProductDetails key={product.id} product={product} />)
        }
      </div>
    </section>
  )
}
