import React from 'react'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: '가위바위보',
      description: '컴퓨터와 가위바위보 대결하는 게임',
      image: '/[[...image]]/project1.jpg',
    },
    {
      title: '2048',
      description:
        '같은 숫자의 타일을 결합하며 2048 타일에 도달하는 것이 목표인 게임',
      image: '/[[...image]]/2048.jpg',
    },
    {
      title: '드림핵',
      description: '드림핵에 있는 여러가지 워게임을 도전해봄',
      image: '/[[...image]]/dream.png',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:bg-slate-200"
          >
            <div className="flex items-center">
              <Image
                src={project.image}
                alt={`${project.title} Picture`}
                className="w-32 h-32 mr-4 rounded-lg shadow-md"
                width={200}
                height={200}
              />
              <div>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-lg text-gray-600">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
