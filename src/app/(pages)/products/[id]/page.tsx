'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ProductType } from '@/types/Type'
import axios from 'axios'
import { useParams } from 'next/navigation'

export default function SingleProduct() {
    const { id } = useParams();

    const [products, setProducts] = useState<ProductType[] | []>([])
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://admin.refabry.com/api/all/product/get')
            const productsData = res?.data?.data?.data || [];
            setProducts(productsData)
        }
        fetchData()
    },[])
    const findProduct = products.find((product: ProductType) => product.id === parseInt(Array.isArray(id) ? id[0] : id ?? '0'));
  return (
    <section className='h-full w-full'>
        <div className="max-w-6xl mx-auto mt-10 p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8">
        
        {/* Left Side - Product Details */}
        <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {findProduct?.name}
            </h1>
            <h1 className="text-xl md:text-2xl semibold text-gray-800 dark:text-white mb-4"> <strong>Category : </strong>
            {findProduct?.category.name}
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            <strong>Description: </strong>{findProduct?.short_desc}
            </p>
           
            <p className="text-xl ">
           <strong>Stock :</strong> {findProduct?.stock} piece
            </p>
            <p className="text-2xl font-semibold text-red-500 mb-6">
            {findProduct?.price} BDT.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-black text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            Buy Now
            </button>
        </div>

        {/* Right Side - findProduct Image */}
        <div className=" flex-1 flex items-center justify-center">
            <div className="relative w-full h-[36rem] md:h-[36rem] rounded-2xl overflow-hidden">
            <Image
                src={`https://admin.refabry.com/storage/product/${findProduct?.image}`}
                alt={`${findProduct?.name}`}
                fill
                className="h-full"
                
            />
            </div>
        </div>

        </div>

    </section>
  )
}
