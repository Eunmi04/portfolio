'use client'
import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold text-center">
        Welcome to My Portfolio
      </h1>
      <p className="text-center text-lg mt-4">
        웹서버보안프로그래밍 개인 포트폴리오입니다.
      </p>
      <div className="flex flex-col items-center mt-6 space-y-4">
        <a
          href="https://github.com/Eunmi04"
          target="_blank"
          className="px-4 py-2 text-lg font-medium text-white bg-gray-800 rounded hover:bg-gray-700"
        >
          GitHub
        </a>

        <a
          href="https://www.instagram.com/wjd0419___"
          target="_blank"
          className="px-4 py-2 text-lg font-medium text-white bg-pink-500 rounded hover:bg-pink-600"
        >
          Instagram
        </a>
      </div>
    </div>
  )
}
