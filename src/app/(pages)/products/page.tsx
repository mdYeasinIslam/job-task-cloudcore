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
    <div>
      <h1>This product page</h1>
      <div className='grid grid-cols-3 gap-5'>
        {
          products?.map(product => <ProductDetails key={product.id} product={product} />)
        }
      </div>
    </div>
  )
}
