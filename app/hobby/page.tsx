import React from 'react'

export default function Hobby() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Hobbies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 text-center">
          <h2 className="text-2xl font-semibold mb-2">노래 듣기</h2>
          <p>
            장르를 가리지 않고 여러 노래를 다양하게 듣는 것을 좋아하고, 무대
            영상을 보는 것도 좋아합니다.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 text-center">
          <h2 className="text-2xl font-semibold mb-2">산책하기</h2>
          <p>
            혼자 혹은 지인들과 산책하며 수다 떨거나 머리를 비우는 것이
            취미입니다.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 text-center">
          <h2 className="text-2xl font-semibold mb-2">애니메이션 보기</h2>
          <p>OTT를 통해 여러 가지 애니메이션을 정주행하는 것이 취미입니다.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 text-center">
          <h2 className="text-2xl font-semibold mb-2">릴스 보기</h2>
          <p>
            짧은 영상이지만 여러 내용과 유머 등이 담겨있는 릴스를 보는 것을
            좋아합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
