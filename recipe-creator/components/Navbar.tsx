import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold text-gray-800">
          Recipe Creator
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/cookbook" className="text-gray-600 hover:text-gray-900">
            Cookbook
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
