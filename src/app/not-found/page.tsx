
'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6 text-center">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      <Link href="/">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg transition duration-300">
          Go Home
        </button>
      </Link>
      <div className="mt-10 text-sm text-gray-500">
        Lost in space? 🚀 Let’s get you back on track.
      </div>
    </div>  
    
  );
}
