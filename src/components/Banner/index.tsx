import { Box } from '@mui/system'
import React from 'react'
import BannerHomeImg from '../../assets/img/banner_home.png'
import BannerImg from '../../assets/img/banner.png'

export default function Banner({ home }: { home?: boolean }) {
  return (
    <Box
      sx={{
        '& img': {
          width: '100vw',
        },
      }}
    >
      <img src={home ? BannerHomeImg.src : BannerImg.src} alt="" />
    </Box>
  )
}
