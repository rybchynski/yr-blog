import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const Logo = () => {
  const blackColor = '#000000'
  const blackBgColor = '#171717'
  const whiteColor = '#ffffff'
  const { theme, resolvedTheme } = useTheme()
  const [fillColor, setFillColor] = useState<String>(blackColor)
  const [fillBgColor, setFillBgColor] = useState<String>(blackColor)

  useEffect(() => {
    setFillColor(theme === 'dark' || resolvedTheme === 'dark' ? whiteColor : blackColor)
    setFillBgColor(theme === 'dark' || resolvedTheme === 'dark' ? blackBgColor : whiteColor)
  }, [theme])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.999991"
      height="70"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <g />
        <clipPath id="57b0ea449d">
          <path
            d="M 163.257812 95.253906 L 209 95.253906 L 209 233.964844 L 163.257812 233.964844 Z M 163.257812 95.253906 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g fill={fillColor} fillOpacity="1">
        <g transform="translate(169.279388, 228.969873)">
          <g>
            <path d="M 9.613281 0 L 19.230469 0 C 19.230469 0 19.109375 -106.605469 19.109375 -110.210938 C 19.109375 -116.703125 21.152344 -117.785156 25.480469 -117.785156 L 54.324219 -117.785156 C 78.363281 -117.785156 90.980469 -105.523438 90.980469 -85.933594 C 90.980469 -66.34375 78.363281 -54.085938 54.324219 -54.085938 L 30.769531 -54.085938 L 30.769531 -51.679688 L 41.464844 -51.679688 C 55.886719 -51.679688 75.117188 -10.214844 92.183594 0 L 105.765625 0 C 100.355469 -3.605469 90.980469 -12.257812 83.53125 -22.234375 C 74.757812 -34.011719 68.144531 -43.027344 61.414062 -48.316406 C 58.53125 -50.597656 57.808594 -51.679688 61.414062 -51.679688 L 64.902344 -51.679688 C 95.550781 -52.042969 102.398438 -73.914062 102.398438 -85.933594 C 102.398438 -97.953125 95.550781 -120.1875 64.902344 -120.1875 L 9.613281 -120.1875 Z M 9.613281 0 " />
          </g>
        </g>
      </g>
      <g clipPath="url(#57b0ea449d)">
        <path
          fill={fillBgColor}
          d="M 163.257812 95.253906 L 208.960938 95.253906 L 208.960938 234.121094 L 163.257812 234.121094 Z M 163.257812 95.253906 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g fill={fillColor} fillOpacity="1">
        <g transform="translate(99.000905, 228.969873)">
          <g>
            <path d="M 41.703125 -60.933594 C 43.75 -58.050781 44.949219 -53.484375 44.949219 -49.878906 L 44.949219 0 L 54.566406 0 L 54.566406 -49.878906 C 54.566406 -53.484375 55.765625 -58.050781 57.808594 -60.933594 L 99.15625 -120.1875 L 88.820312 -120.1875 L 56.128906 -62.976562 C 55.167969 -61.296875 54.085938 -60.574219 53.003906 -60.574219 C 52.042969 -60.574219 51.078125 -61.296875 50.117188 -62.738281 L 10.578125 -120.1875 L 0.359375 -120.1875 Z M 41.703125 -60.933594 " />
          </g>
        </g>
      </g>
    </svg>
  )
}
