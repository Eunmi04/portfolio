import React from 'react'

const VideoPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen gap-6 p-6">
      <div className="w-full lg:w-1/2 max-w-md">
        <video controls className="w-full h-auto rounded-lg shadow-lg">
          <source src="/selfvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full lg:w-1/2 max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4">느낀 점</h2>
        <p className="text-gray-800 leading-relaxed">
          웹서버보안프로그래밍 수업을 들으면서 Next.js에 대해 처음 써보았는데 이번 개인 포트폴리오를
          만들어보며 여러 실패와 오류를 겪었지만 만들면서 오류없이 성공하면 뿌듯함을 느끼게 되는 등
          얻는 것이 많은 과제였습니다.
        </p>
      </div>
    </div>
  )
}

export default VideoPage
