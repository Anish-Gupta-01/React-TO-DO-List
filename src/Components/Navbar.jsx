import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex space-x-4">
          <a href="#" className="rounded-md px-3 py-2 text-xl font-medium text-white 
          hover:bg-gray-700 hover:text-white">TO-DO Lists</a>
          <a href="#" className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 
          hover:bg-gray-700 hover:text-white">Projects</a>
          </div>
        </div>
      </div>
</nav>
)  
}
