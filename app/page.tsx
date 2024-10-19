'use client'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-800 p-10">
      <h1
        className={`text-5xl font-bold text-center transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        Welcome to My Portfolio
      </h1>
      <p className="text-center text-xl mt-4 opacity-80 transition-opacity duration-500 hover:opacity-100">
        웹서버보안프로그래밍 개인 포트폴리오입니다.
      </p>
      <div className="flex flex-col items-center mt-6 space-y-4">
        <a
          href="https://github.com/Eunmi04"
          target="_blank"
          className="px-6 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
        >
          GitHub
        </a>

        <a
          href="https://www.instagram.com/wjd0419___"
          target="_blank"
          className="px-6 py-2 text-lg font-semibold text-white bg-pink-500 rounded-lg shadow-md hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
        >
          Instagram
        </a>
      </div>
    </div>
  )
}
