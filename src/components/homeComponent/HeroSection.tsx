import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
  return (
     <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#0F172A] to-[#6b7da7]">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Welcome to Fashion Era
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
          Elevate your winter style with premium jackets, cozy scarves, and more. Stay warm, stay fashionable.
        </p>
        <Link
          href="/products"
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-full transition"
        >
          Shop Now
        </Link>
      </section>
  )
}
