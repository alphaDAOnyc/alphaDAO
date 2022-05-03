import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Banner from '../components/Banner'
import RightContainer from '../components/RightContainer'
import { CommonContainer, CommonWidth } from '../components/Styled'
import DayImg from '../assets/img/about_one.jpg'
import PolygonLogo from '../assets/svg/polygon_logo.svg'
import GalaxyLogo from '../assets/svg/galaxy_logo.svg'

export default function About() {
  return (
    <Box>
      <Banner home />
      <RightContainer sxStyle={{ marginTop: '-140px', background: '#fff' }}>
        <CommonWidth>
          <Box
            sx={{
              padding: '131px 116px 198px 194px',
            }}
          >
            <Typography mb={'48px'} variant="h2" color={'#3A88F5'} fontSize="120px" lineHeight={'144px'}>
              Builder's Day
            </Typography>
            <Typography variant="h4" color={'#244B6F'} fontSize={42} lineHeight="50px">
              Polygon/Galaxy-generated connectivity, ideation, development, and creation alongside leading web3 builders
            </Typography>
          </Box>
          <Box
            textAlign={'right'}
            sx={{
              '& img': {
                maxWidth: 760,
              },
            }}
          >
            <img src={DayImg.src} alt="" />
          </Box>

          <Typography mt={'67px'} variant="h4" maxWidth="743px" color={'#9482FE'} fontSize={32} lineHeight="38px">
            Our goal is to leverage this scalable framework and create an interconnected space where Web 3.0 builders
            can share, learn and connect with each other.{' '}
          </Typography>

          <Box display={'flex'} mt="58px" justifyContent="right" pb={'122px'}>
            <Typography variant="body1" fontSize={21} lineHeight="32px" maxWidth={661} color="#595656">
              From initial conversations about a Galaxy Interactive/Polygon-developed web3 community innovation space,
              Builders’ Day will act as an MVP forum for our teams to engage directly with the best web3 developers,
              designers, and creators in NYC (and beyond), providing valuable connectivity and setting the stage (with a
              scalable template) for expansion into other cities as well as planting the seeds for more hands-on,
              comprehensive incubation in the future.
            </Typography>
          </Box>
        </CommonWidth>
      </RightContainer>
      <Box
        sx={{
          background: 'radial-gradient(100% 100% at 100% 0%, #F3F3FF 0%, #E9F2FE 60.81%, #E0D7FE 100%)',
        }}
      >
        <CommonContainer
          sx={{
            padding: '73px 0 134px',
          }}
        >
          <Typography variant="h3" fontSize={'72px'} lineHeight="86px" color="#2E4A6B">
            About
          </Typography>
          <Box
            sx={{
              display: 'grid',
              mt: '57px',
              gridTemplateColumns: '1fr 1fr',
              gridGap: '125px',
            }}
          >
            <Box>
              <img src={PolygonLogo.src} alt="" style={{ height: 43 }} />
              <Typography mt="47px" pl={'80px'} variant="h4" fontSize={21} lineHeight="25px" color="#595656">
                <span style={{ color: '#9881FF', fontSize: 32, lineHeight: '38px' }}>Polygon</span> was formerly called
                Matic Network. Polygon (MATIC) is an Ethereum token that powers the Polygon Network, a scaling solution
                for Ethereum. Polygon aims to provide faster and cheaper transactions on Ethereum using Layer 2
                sidechains, which are blockchains that run alongside the Ethereum main chain. Users can deposit Ethereum
                tokens to a Polygon smart contract, interact with them within Polygon, and then later withdraw them back
                to the Ethereum main chain. The MATIC token is used to pay transaction fees and participate in
                proof-of-stake consensus.
              </Typography>
            </Box>
            <Box>
              <img src={GalaxyLogo.src} alt="" style={{ height: 43 }} />
              <Typography mt="47px" pl={'80px'} variant="h4" fontSize={21} lineHeight="25px" color="#595656">
                <span style={{ color: '#9881FF', fontSize: 32, lineHeight: '38px' }}>Galaxy Digital</span> is a
                technology-driven financial services and investment management firm that provides institutions and
                direct clients with a full suite of financial solutions spanning the digital assets ecosystem. Galaxy
                Digital operates five synergistic business lines: Trading, Asset Management, Principal Investments,
                Investment Banking, and Mining. Galaxy Digital's CEO and Founder is Mike Novogratz. The Company is
                headquartered in New York City, with offices in Chicago, San Francisco, London, Amsterdam, Tokyo, Hong
                Kong, the Cayman Islands (registered office), and New Jersey.
              </Typography>
            </Box>
          </Box>
        </CommonContainer>
      </Box>
    </Box>
  )
}
