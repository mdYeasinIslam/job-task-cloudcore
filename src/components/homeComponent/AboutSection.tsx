import Link from 'next/link'
import React from 'react'

export default function AboutSection() {
  return (
    <section className="bg-[#111827] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            About Fashion Era
          </h2>
          <p className="text-gray-400 mb-8">
            At Fashion Era, we believe that winter fashion should never mean sacrificing style for warmth.
            Our premium collection ensures that you stay cozy and stylish all season long.
          </p>
          <Link
            href="/about"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            Learn More
          </Link>
        </div>
      </section>
  )
}
