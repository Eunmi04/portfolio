import React from 'react'

export default function Hobby() {
  const hobbies = [
    {
      title: '노래 듣기',
      description:
        '장르를 가리지 않고 여러 노래를 다양하게 듣는 것을 좋아하고, 무대 영상을 보는 것도 좋아합니다.',
    },
    {
      title: '산책하기',
      description:
        '혼자 혹은 지인들과 산책하며 수다 떨거나 머리를 비우는 것이 취미입니다.',
    },
    {
      title: '애니메이션 보기',
      description:
        'OTT를 통해 여러 가지 애니메이션을 정주행하는 것이 취미입니다.',
    },
    {
      title: '릴스 보기',
      description:
        '짧은 영상이지만 여러 내용과 유머 등이 담겨있는 릴스를 보는 것을 좋아합니다.',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-6">My Hobbies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-md text-center min-h-5 hover:bg-slate-100"
          >
            <h2 className="text-2xl font-semibold mb-2">{hobby.title}</h2>
            <p className="mt-4">{hobby.description}</p> {/* 위쪽 여백 추가 */}
          </div>
        ))}
      </div>
    </div>
  )
}
