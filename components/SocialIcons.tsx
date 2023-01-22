import siteMetadata from '@/data/siteMetadata'
import SocialIcon from './social-icons'

interface SocialIconsPropsInterface {
  socialIcons: string[]
  size?: number
}

export const SocialIcons = ({ socialIcons, size = 8 }: SocialIconsPropsInterface) => {
  return (
    <>
      {socialIcons.map((socialIcon) => {
        const href =
          socialIcon === 'email' ? `mailto:${siteMetadata[socialIcon]}` : siteMetadata[socialIcon]

        return <SocialIcon kind={socialIcon} href={href} size={size} key={href} />
      })}
    </>
  )
}
