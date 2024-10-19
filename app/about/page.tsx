import React from 'react'
import Link from 'next/link'
import {
  FaInstagram,
  FaRegEnvelope,
  FaRegIdBadge,
  FaGithub,
} from 'react-icons/fa6'
import Image from 'next/image'

export default function About() {
  return (
    <div>
      <div className="container mx-auto p-8 flex items-start border border-green-600 rounded-lg shadow-lg bg-white">
        <div className="w-40 h-40 mr-4">
          <Image
            src="/[[...image]]/profileImage.jpg"
            alt="내프로필"
            className="rounded-full mb-4 object-cover"
            width={200}
            height={200}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">About Me</h1>
          <div className="mt-4">
            <h2 className="font-semibold">
              <span className="flex items-center gap-1">
                <FaRegIdBadge className="text-blue-500" /> : 정은미, 2학년
              </span>
            </h2>
            <h2 className="font-semibold">
              <span className="flex items-center gap-1">
                <FaInstagram className="text-pink-500" />
                <Link
                  href="https://www.instagram.com/wjd0419___/"
                  target="_blank"
                >
                  <div className="text-black hover:text-gray-500">
                    : wjd0419___
                  </div>
                </Link>
              </span>
            </h2>
            <h2 className="font-semibold">
              <span className="flex items-center gap-1">
                <FaRegEnvelope className="text-red-500" /> :
                eunmi041119@gmail.com
              </span>
            </h2>
            <h2 className="font-semibold">
              <span className="flex items-center gap-1">
                <FaGithub />
                <Link href="https://github.com/Eunmi04" target="_blank">
                  <div className="text-black hover:text-gray-500">
                    : Eunmi04
                  </div>
                </Link>
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">소개</h2>
        <p className="mt-2">
          <strong>생일:</strong> 2004년 11월 19일
        </p>
        <p className="mt-2">
          <strong>학과:</strong> 정보보호학과 23학번
        </p>
        <p className="mt-2">
          <strong>관심 분야:</strong> 정보 보안, 웹 개발
        </p>
        <p className="mt-2">
          <strong>진로:</strong> 아직 구체적으로 정하지는 못하였지만 웹 개발자에
          흥미가 있음
        </p>
      </div>
    </div>
  )
}
