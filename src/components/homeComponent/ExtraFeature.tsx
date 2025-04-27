import Link from 'next/link'
import React from 'react'

export default function ExtraFeature() {
  return (
    <section className="bg-[#0F172A] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Refresh Your Winter Wardrobe?
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Discover new arrivals and exclusive winter collections today.
        </p>
        <Link
          href="/products"
          className="inline-block bg-white text-[#0F172A] font-semibold py-4 px-8 rounded-full transition hover:bg-gray-200"
        >
          Shop Now
        </Link>
      </section>
  )
}
