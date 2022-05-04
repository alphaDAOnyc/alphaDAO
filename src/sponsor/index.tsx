import { Typography, Box, Link } from '@mui/material'
import React from 'react'
import Banner from '../components/Banner'
import RightContainer from '../components/RightContainer'
import { CommonWidth } from '../components/Styled'
import PolygonLogo from '../assets/svg/polygon_logo.svg'
import GalaxyLogo from '../assets/svg/galaxy_logo.svg'
import AlphaLogo from '../assets/svg/alpha_logo.svg'
import { useIsSMDown } from '../theme'

export default function Sponsor() {
  const isSm = useIsSMDown()

  return (
    <Box>
      <Banner />
      <Box sx={{ marginTop: '-80px', display: 'flex', flexDirection: 'row-reverse' }}>
        <Box
          width={isSm ? '85%' : undefined}
          height={isSm ? '80px' : 0}
          sx={{
            background: '#fff',
          }}
        ></Box>
      </Box>
      <RightContainer sxStyle={{ marginTop: isSm ? '-15px' : '-140px' }}>
        <CommonWidth
          sx={{
            padding: { xs: '0 30px 150px', sm: '131px 0 412px 191px' },
          }}
        >
          <Typography
            variant="h2"
            ml={isSm ? '15%' : 0}
            color={'#3A88F5'}
            fontSize={isSm ? 50 : 120}
            lineHeight={isSm ? '66px' : '144px'}
          >
            Sponsor
          </Typography>
          <Box display={'flex'} mt={isSm ? '150px' : '218px'} justifyContent="space-between" alignItems={'center'}>
            <Link underline="none" href="https://www.galaxydigital.io" target="_blank">
              <img src={GalaxyLogo.src} alt="" style={{ height: isSm ? 24 : 50 }} />
            </Link>
            <Link underline="none" href="https://polygon.technology/" target="_blank">
              <img src={PolygonLogo.src} alt="" style={{ height: isSm ? 24 : 50 }} />
            </Link>
            <Link underline="none" href="https://www.meetalpha.org/" target="_blank">
              <img src={AlphaLogo.src} alt="" style={{ width: isSm ? 36 : 70 }} />
            </Link>
          </Box>
        </CommonWidth>
      </RightContainer>
    </Box>
  )
}
