// pages/about.tsx

import React from "react";

export default function About() {
  return (
    <div className="  text-white px-6 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">About Fashion Era</h1>
        <p className="text-lg  max-w-2xl mx-auto">
          Where warmth meets style. Stay cozy and stylish this winter with Fashion Era.
        </p>
      </div>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Our Story</h2>
        <p className=" leading-relaxed">
          Fashion Era was born out of a passion for two things: <strong>fashion</strong> and <strong>functionality</strong>. 
          We noticed a gap — too often, winter clothing meant sacrificing style for warmth, or vice versa. 
          We decided to change that. Since our first collection, we've been committed to creating beautiful, durable, 
          and innovative winterwear that celebrates individuality and empowers confidence, no matter the temperature.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2 ">
          <li>🧥 <strong>Stylish Winter Jackets</strong> — From casual to luxurious looks</li>
          <li>🧣 <strong>Cozy Scarves and Accessories</strong> — Complete your outfit with elegance</li>
          <li>👢 <strong>Premium Boots</strong> — Because your style starts from the ground up</li>
          <li>🧤 <strong>Gloves, Hats & More</strong> — Perfect blends of warmth and trendiness</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Why Choose Fashion Era?</h2>
        <ul className="list-disc list-inside space-y-2 ">
          <li>✔️ <strong>Quality First</strong>: Handpicked fabrics, expert tailoring, and attention to detail.</li>
          <li>✔️ <strong>Trendy & Timeless</strong>: Stay on-trend while investing in pieces that last.</li>
          <li>✔️ <strong>Customer-Focused</strong>: Your satisfaction, comfort, and happiness are our top priorities.</li>
          <li>✔️ <strong>Affordable Luxury</strong>: Look your best without breaking the bank.</li>
        </ul>
      </section>

      {/* Closing Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Join the Fashion Era Family</h2>
        <p className=" leading-relaxed mb-8">
          Be bold. Be beautiful. <strong>Own your winter style.</strong> 
          <br />
          Thank you for being a part of Fashion Era. Together, let’s make this winter unforgettable! ❄️❤️
        </p>
        <a
          href="/"
          className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Explore Our Collection
        </a>
      </section>
    </div>
  );
}
