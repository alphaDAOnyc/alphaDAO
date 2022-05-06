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
      <RightContainer width={isSm ? '85%' : undefined} sxStyle={{ marginTop: isSm ? '-60px' : '-140px' }}>
        <CommonWidth
          sx={{
            padding: { xs: '65px 30px 100px', sm: '110px 0 113px 185px' },
          }}
        >
          <Typography variant="h2" color={'#3A88F5'} fontSize={isSm ? 28 : 100} lineHeight={isSm ? '34px' : '120px'}>
            Sponsors
          </Typography>
          <Box
            display={'flex'}
            mt={isSm ? '51px' : '166px'}
            justifyContent={isSm ? 'center' : 'space-between'}
            alignItems={'center'}
            flexWrap={isSm ? 'wrap' : 'unset'}
            gap="10px"
            sx={{
              '&>*': {
                background: '#FFFFFF',
                border: '1px solid #9881FF',
                borderRadius: '30px',
                width: isSm ? 120 : 200,
                height: isSm ? 120 : 192,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
            }}
          >
            <Link underline="none" href="https://www.galaxydigital.io" target="_blank">
              <img src={GalaxyLogo.src} alt="" style={{ height: isSm ? 24 : 37 }} />
            </Link>
            <Link underline="none" href="https://polygon.technology/" target="_blank">
              <img src={PolygonLogo.src} alt="" style={{ height: isSm ? 24 : 37 }} />
            </Link>
            <Link
              underline="none"
              href="https://www.meetalpha.org/"
              target="_blank"
              sx={{ marginTop: isSm ? '-30px' : 0 }}
            >
              <img src={AlphaLogo.src} alt="" style={{ width: isSm ? 40 : 70 }} />
            </Link>
          </Box>
        </CommonWidth>
      </RightContainer>
    </Box>
  )
}
