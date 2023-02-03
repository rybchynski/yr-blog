import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SocialIcons } from './SocialIcons'
import siteMetadata from '@/data/siteMetadata'
import { ProfileAvailability } from './ProfileAvailability'

export const ProfileCard = (): JSX.Element => {
  const ref = useRef(null)
  const [style, setStyle] = useState<React.CSSProperties>({})
  const { author, location, available } = siteMetadata

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || window.innerWidth < 1280) return

    const { clientX, clientY } = e
    const { width, height, x, y } = ref.current.getBoundingClientRect()
    const mouseX = Math.abs(clientX - x)
    const mouseY = Math.abs(clientY - y)
    const rotateMin = -15
    const rotateMax = 15
    const rotateRange = rotateMax - rotateMin

    const rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    }

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    })
  }, [])

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
  }, [])

  useEffect(() => {
    const { current } = ref
    if (!current) return
    current.addEventListener('mousemove', onMouseMove)
    current.addEventListener('mouseleave', onMouseLeave)
    return () => {
      if (!current) return
      current.removeEventListener('mousemove', onMouseMove)
      current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseLeave, onMouseMove])

  return (
    <div
      className="z-10 mb-8 scale-100 transition-all duration-200 ease-out hover:z-50 xl:mb-0 xl:hover:scale-[1.05]"
      style={{ perspective: '600px' }}
      ref={ref}
    >
      <div
        style={style}
        className="flex items-center flex-col overflow-hidden shadow-cyan-100/50 transition-all duration-200 ease-out dark:bg-dark dark:shadow-cyan-700/50 xl:rounded-lg xl:shadow-lg"
      >
        <Image
          src={'/static/images/avatar.png'}
          alt="avatar"
          width={250}
          height={250}
          className="object-cover"
          style={{ objectPosition: '50% 16%' }}
        />
        <div className="profile__info mt-4 flex items-start min-w-[300px]">
          <div className="py-4">
            <h3 className="text-xl px-1 font-semibold text-gray-800 dark:text-white">{author}</h3>
            <h5 className="py-2 px-1 text-gray-700 dark:text-gray-400">
              Drupal Full Stack | Vue | React Developer
            </h5>
            <div className="mt-4 flex items-center text-gray-700 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p className="px-2">{location}</p>
            </div>
            <ProfileAvailability available={available} />

            <div className="mt-8 flex items-center justify-center gap-3">
              <SocialIcons
                socialIcons={['email', 'github', 'drupal', 'linkedin', 'facebook', 'twitter']}
                size={6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
