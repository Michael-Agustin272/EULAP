'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden flex flex-col items-center justify-center text-center px-6 py-16">
      {/* Animated Background Circles */}
<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
  {/* Top Left Circle */}
  <div className="absolute bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse-slow
                  w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96
                  top-10 -left-20 sm:-left-10" />

  {/* Top Right Circle */}
  <div className="absolute bg-blue-200 opacity-20 rounded-full blur-2xl animate-pulse-slow
                  w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72
                  top-60 right-0 sm:top-40 sm:right-10" />

  {/* Bottom Center Circle */}
  <div className="absolute bg-blue-400 opacity-10 rounded-full blur-2xl animate-pulse-slow
                  w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96
                  bottom-0 left-1/2 transform -translate-x-1/2" />
</div>

      {/* Logo */}
<div className="absolute top-10 left-10 z-20 w-32 sm:w-40 md:w-48">
  <Image
    src="/logo.png"
    alt="EULAP Logo"
    width={0}
    height={0}
    sizes="100vw"
    className="w-full h-auto"
  />
</div>

<div className="absolute top-10 right-10 z-20 w-32 sm:w-40 md:w-48">
  <Image
    src="/MINDACON.png"
    alt="MINDACON Logo"
    width={0}
    height={0}
    sizes="100vw"
    className="w-full h-auto"
  />
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
