import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-600 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Vyone's Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
