import { Box } from '@mui/system'
import React from 'react'
import BannerHomeImg from '../../assets/img/banner_home.png'
import BannerHomeMobileImg from '../../assets/img/banner_home_mobile.png'
import BannerMobileImg from '../../assets/img/banner.png'
import BannerImg from '../../assets/img/banner.png'
import { useIsSMDown } from '../../theme'

export default function Banner({ home }: { home?: boolean }) {
  const isSm = useIsSMDown()

  return (
    <Box
      sx={{
        '& img': {
          width: '100vw',
          objectFit: 'cover',
          minHeight: isSm ? '180px' : '320px',
        },
      }}
    >
      {isSm ? (
        <img src={home ? BannerHomeMobileImg.src : BannerMobileImg.src} alt="" />
      ) : (
        <img src={home ? BannerHomeImg.src : BannerImg.src} alt="" />
      )}
    </Box>
  )
}
