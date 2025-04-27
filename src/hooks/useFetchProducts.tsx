'use client'
import { useEffect, useState } from 'react';
import { ProductType } from '@/types/Type';
import axios from 'axios';

export const useFetchProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://admin.refabry.com/api/all/product/get');
        const productsData = res?.data?.data?.data || [];
        setProducts(productsData);
      }catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading, error };
};
