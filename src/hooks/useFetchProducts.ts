import { ProductType } from '@/types/Type'
import axios from 'axios'

export const useFetchProducts = async() => {
   const res = await axios.get('https://admin.refabry.com/api/all/product/get')
  const products = res?.data?.data?.data as ProductType[]
    return products
}

