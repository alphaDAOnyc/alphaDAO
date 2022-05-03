import disSVG from '../assets/svg/dis.svg'
import twitterSVG from '../assets/svg/twitter.svg'
import tgSVG from '../assets/svg/tg.svg'
import midSVG from '../assets/svg/mid.svg'
import youtubeSVG from '../assets/svg/youtube.svg'
import { Box, Link as MuiLink } from '@mui/material'

export default function Social({
  justifyContent,
  scale,
  gap,
}: {
  justifyContent?: string
  scale?: number
  gap?: string
}) {
  return (
    <Box
      display="flex"
      alignItems={'center'}
      justifyContent={justifyContent}
      gap={gap || '25px'}
      sx={{
        fontSize: 16,
        '& img': {
          transform: scale ? `scale(${scale})` : 'inherit',
        },
      }}
    >
      <MuiLink
        underline="none"
        className="hover6"
        target="_blank"
        height={'15px'}
        href="https://discord.gg/soda-by-sonet"
      >
        <img src={disSVG.src} alt="" />
      </MuiLink>
      <MuiLink
        className="hover6"
        underline="none"
        target="_blank"
        height={'15px'}
        href="https://mobile.twitter.com/SodaExtension"
      >
        <img src={twitterSVG.src} alt="" />
      </MuiLink>
      <MuiLink underline="none" className="hover6" target="_blank" height={'15px'} href="https://t.me/soda_community">
        <img src={tgSVG.src} alt="" />
      </MuiLink>
      <MuiLink
        underline="none"
        className="hover6"
        target="_blank"
        height={'15px'}
        href="https://soda-extension.medium.com/"
      >
        <img src={midSVG.src} alt="" />
      </MuiLink>
      <MuiLink
        underline="none"
        className="hover6"
        target="_blank"
        height={'15px'}
        href="https://www.youtube.com/channel/UC01cNc3KuVTDUI_KFjunNNA/featured"
      >
        <img src={youtubeSVG.src} alt="" />
      </MuiLink>
    </Box>
  )
}
