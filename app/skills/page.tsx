import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

export default function Skills() {
  const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 className="text-orange-500 text-6xl" />,
      description: 'HTML은 웹 페이지를 구성하는 표준 마크업 언어입니다.',
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt className="text-blue-500 text-6xl" />,
      description: 'CSS는 웹 페이지의 스타일과 레이아웃을 지정합니다.',
    },
    {
      name: 'JavaScript',
      icon: <FaJs className="text-yellow-500 text-6xl" />,
      description: 'JavaScript는 웹 페이지를 동적으로 만들어줍니다.',
    },
    {
      name: 'React',
      icon: <FaReact className="text-blue-600 text-6xl" />,
      description:
        'React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다.',
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs className="text-black text-6xl" />,
      description:
        'Next.js는 서버 사이드 렌더링과 정적 사이트 생성을 지원하는 React 프레임워크입니다.',
    },
    {
      name: 'Git & GitHub',
      icon: <FaGitAlt className="text-red-500 text-6xl" />,
      description:
        'Git은 버전 관리 시스템이며, GitHub는 리포지토리를 호스팅하는 플랫폼입니다.',
    },
  ]

  return (
    <div className="container mx-auto p-12">
      <h1 className="text-4xl text-center font-bold mb-10">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-8 border border-gray-300 rounded-lg relative group min-h-[300px]" // 카드 높이 증가
          >
            {skill.icon}
            <h2 className="text-2xl font-semibold mt-4">{skill.name}</h2>
            <p className="mt-6 text-center text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
