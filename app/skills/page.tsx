import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

export default function Skills() {
  const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 className="text-orange-500 text-4xl" />,
      description: 'HTML은 웹 페이지를 구성하는 표준 마크업 언어입니다.',
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
      description: 'CSS는 웹 페이지의 스타일과 레이아웃을 지정합니다.',
    },
    {
      name: 'JavaScript',
      icon: <FaJs className="text-yellow-500 text-4xl" />,
      description: 'JavaScript는 웹 페이지를 동적으로 만들어줍니다.',
    },
    {
      name: 'React',
      icon: <FaReact className="text-blue-600 text-4xl" />,
      description:
        'React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다.',
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs className="text-black text-4xl" />,
      description:
        'Next.js는 서버 사이드 렌더링과 정적 사이트 생성을 지원하는 React 프레임워크입니다.',
    },
    {
      name: 'Git & GitHub',
      icon: <FaGitAlt className="text-red-500 text-4xl" />,
      description:
        'Git은 버전 관리 시스템이며, GitHub는 리포지토리를 호스팅하는 플랫폼입니다.',
    },
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl text-center font-bold mb-6">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="relative flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {skill.icon}
            <h2 className="text-xl font-semibold mt-2">{skill.name}</h2>
            <div className="absolute bottom-0 left-0 right-0 bg-gray-100 text-sm p-2 rounded-b-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              {skill.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
