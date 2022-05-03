import { Typography, Box } from '@mui/material'
import React from 'react'
import Banner from '../components/Banner'
import RightContainer from '../components/RightContainer'
import { CommonWidth } from '../components/Styled'
import PolygonLogo from '../assets/svg/polygon_logo.svg'
import GalaxyLogo from '../assets/svg/galaxy_logo.svg'
import AlphaLogo from '../assets/svg/alpha_logo.svg'

export default function Sponsor() {
  return (
    <Box>
      <Banner />
      <RightContainer sxStyle={{ marginTop: '-140px' }}>
        <CommonWidth
          sx={{
            padding: '131px 0 412px 191px',
          }}
        >
          <Typography variant="h2" color={'#3A88F5'} fontSize="120px" lineHeight={'144px'}>
            Sponsor
          </Typography>
          <Box display={'flex'} mt="218px" justifyContent="space-between" alignItems={'center'}>
            <img src={GalaxyLogo.src} alt="" style={{ height: 50 }} />
            <img src={PolygonLogo.src} alt="" style={{ height: 50 }} />
            <img src={AlphaLogo.src} alt="" />
          </Box>
        </CommonWidth>
      </RightContainer>
    </Box>
  )
}
