'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden flex flex-col items-center justify-center text-center px-6 py-16">
      {/* Animated Background Circles */}
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute bg-blue-300 opacity-30 rounded-full w-96 h-96 animate-pulse-slow top-10 -left-20 blur-3xl" />
        <div className="absolute bg-blue-200 opacity-20 rounded-full w-72 h-72 animate-pulse-slow top-60 right-0 blur-2xl" />
        <div className="absolute bg-blue-400 opacity-10 rounded-full w-80 h-80 animate-pulse-slow bottom-0 left-1/2 blur-2xl transform -translate-x-1/2" />
      </div>

      {/* Logo */}
      <div className="absolute top-10 left-10 z-10">
        <Image src="/logo.png" alt="EULAP Logo" width={200} height={200} />
      </div>

                  {/* MINDACON Logo */}
            <div className="absolute top-10 right-10 z-10">
              <Image src="/MINDACON.png" alt="MINDACON Logo" width={200} height={200} />
            </div>

      {/* Hero Content */}
      <div className="max-w-4xl z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Welcome to EULAP Digital Solutions
        </h1>
        <p className="text-lg md:text-xl text-customGrey mb-8">
          Transforming ideas into powerful systems. Discover our range of digital products built to elevate your business.
        </p>
        <button
          onClick={() => router.push('/digital-solutions')}
          className="px-8 py-3 bg-blue-600 text-white text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration- cursor-pointer"
        >
          Discover Our Products
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-sm text-blue-400 z-10">
        © 2025 EULAP. All rights reserved.
      </div>
    </main>
  );
}
