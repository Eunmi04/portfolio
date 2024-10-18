import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-green-300 to-blue-300 py-4 px-8 shadow-lg">
        <div className="flex items-center justify-between container mx-auto">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-white text-2xl ml-4 hover:underline transition duration-300">
                My Portfolio
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/about"
              className="text-white hover:underline transition duration-300"
            >
              About Me
            </Link>
            <Link
              href="/skills"
              className="text-white hover:underline transition duration-300"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="text-white hover:underline transition duration-300"
            >
              Projects
            </Link>
            <Link
              href="/hobby"
              className="text-white hover:underline transition duration-300"
            >
              Hobby
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
