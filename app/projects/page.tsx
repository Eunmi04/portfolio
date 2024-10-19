import React from 'react'
import Image from 'next/image'

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center">
            <Image
              src="/[[...image]]/project1.jpg"
              alt="Project1 Picture"
              className="w-32 h-32 mr-4 rounded-lg shadow-md"
              width={200}
              height={200}
            />
            <div>
              <h2 className="text-2xl font-semibold">가위바위보</h2>
              <p className="text-lg text-gray-600">
                컴퓨터와 가위바위보 대결하는 게임
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center">
            <Image
              src="/[[...image]]/2048.jpg"
              alt="Project2 Picture"
              className="w-32 h-32 mr-4 rounded-lg shadow-md"
              width={200}
              height={200}
            />
            <div>
              <h2 className="text-2xl font-semibold">2048</h2>
              <p className="text-lg text-gray-600">
                같은 숫자의 타일을 결합하며 2048 타일에 도달하는 것이 목표인
                게임
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center">
            <Image
              src="/[[...image]]/dream.png"
              alt="Project3 Picture"
              className="w-32 h-32 mr-4 rounded-lg shadow-md"
              width={200}
              height={200}
            />
            <div>
              <h2 className="text-2xl font-semibold">드림핵</h2>
              <p className="text-lg text-gray-600">
                드림핵에 있는 여러가지 워게임을 도전해봄
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
