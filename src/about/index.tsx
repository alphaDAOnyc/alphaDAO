import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Banner from '../components/Banner'
import RightContainer from '../components/RightContainer'
import { CommonContainer, CommonWidth } from '../components/Styled'
import DayImg from '../assets/img/about_one.jpg'
import PolygonLogo from '../assets/svg/polygon_logo.svg'
import GalaxyLogo from '../assets/svg/galaxy_logo.svg'
import { useIsSMDown } from '../theme'

export default function About() {
  const isSm = useIsSMDown()

  return (
    <Box sx={{ background: '#fff' }}>
      <Banner home />
      <RightContainer
        sxStyle={{ marginTop: { xs: '0px', sm: '-140px' }, background: '#fff', padding: isSm ? '0 30px' : 0 }}
      >
        <CommonWidth>
          <Box
            sx={{
              padding: { xs: '49px 0 40px', sm: '131px 116px 165px 196px' },
            }}
          >
            <Typography
              mb={isSm ? 0 : '40px'}
              variant="h2"
              color={'#3A88F5'}
              fontSize={{ xs: 42, sm: 100 }}
              lineHeight={{ xs: '50px', sm: '120px' }}
            >
              Builder's Day
            </Typography>
            {!isSm && (
              <Typography
                maxWidth={'650px'}
                variant="h4"
                color={'#244B6F'}
                fontSize={isSm ? 28 : 36}
                lineHeight={isSm ? '33px' : '43px'}
              >
                Connect, idealize, create & develop! Bringing leading web3 builders together.
              </Typography>
            )}
          </Box>
          <Box
            textAlign={'right'}
            sx={{
              '& img': {
                maxWidth: { xs: '100%', sm: '720px' },
              },
            }}
          >
            <img src={DayImg.src} alt="" />
          </Box>

          {isSm && (
            <Typography
              maxWidth={'70%'}
              mt={'35px'}
              mb="41px"
              variant="h4"
              color={'#9482FE'}
              fontSize={16}
              lineHeight={'22px'}
            >
              Connect, idealize, create & develop! Bringing leading web3 builders together.
            </Typography>
          )}

          {!isSm && (
            <Typography
              mt={'57px'}
              variant="h4"
              maxWidth="600px"
              color={'#9482FE'}
              fontSize={isSm ? 12 : 26}
              lineHeight={isSm ? '16px' : '31px'}
            >
              Our goal is to leverage this scalable framework and create an interconnected space where Web 3.0 builders
              can share, learn and connect with each other.
            </Typography>
          )}

          <Box display={'flex'} mt={isSm ? 0 : '48px'} flexDirection="row-reverse" pb={isSm ? '0' : '122px'}>
            <Typography
              variant="body1"
              fontSize={isSm ? 12 : 18}
              lineHeight={isSm ? '16px' : '26px'}
              maxWidth={isSm ? '80%' : 661}
              color="#595656"
            >
              From initial conversations about a Galaxy Interactive/Polygon-developed web3 community innovation space,
              Builders' Day will act as an MVP forum for our teams to engage directly with the best web3 developers,
              designers, and creators in NYC (and beyond), providing valuable connectivity and setting the stage (with a
              scalable template) for expansion into other cities as well as planting the seeds for more hands-on,
              comprehensive incubation in the future.
            </Typography>
          </Box>

          {isSm && (
            <Box display={'flex'} mt="28px" flexDirection={'row-reverse'} pb={'67px'}>
              <Typography
                variant="h4"
                maxWidth="80%"
                color={'#244B6F'}
                fontSize={isSm ? 14 : 26}
                lineHeight={isSm ? '18px' : '31px'}
              >
                Our goal is to leverage this scalable framework and create an interconnected space where Web 3.0
                builders can share, learn and connect with each other.
              </Typography>
            </Box>
          )}
        </CommonWidth>
      </RightContainer>
      <Box
        sx={{
          background: isSm
            ? '#F2F2F2'
            : 'radial-gradient(100% 100% at 100% 0%, #F3F3FF 0%, #E9F2FE 60.81%, #E0D7FE 100%)',
        }}
      >
        <CommonContainer
          padding="53px 30px"
          sx={{
            padding: '62px 0 110px',
          }}
        >
          <Typography variant="h3" fontSize={isSm ? 32 : 64} lineHeight={isSm ? '38px' : '77px'} color="#2E4A6B">
            About
          </Typography>
          <Box
            sx={{
              display: { xs: 'unset', sm: 'grid' },
              mt: '43px',
              gridTemplateColumns: '1fr 1fr',
              gridGap: '125px',
            }}
          >
            <Box mt={isSm ? '30px' : 0}>
              <img src={PolygonLogo.src} alt="" style={{ height: isSm ? 22 : 36 }} />
              <Typography
                mt={isSm ? '15px' : '43px'}
                pl={isSm ? 0 : '80px'}
                variant="h4"
                fontSize={isSm ? 12 : 18}
                lineHeight={isSm ? '16px' : '21px'}
                color="#595656"
              >
                <span style={{ color: '#9881FF', fontSize: isSm ? 14 : 26, lineHeight: isSm ? '16px' : '21px' }}>
                  Polygon
                </span>{' '}
                was formerly called Matic Network. Polygon (MATIC) is an Ethereum token that powers the Polygon Network,
                a scaling solution for Ethereum. Polygon aims to provide faster and cheaper transactions on Ethereum
                using Layer 2 sidechains, which are blockchains that run alongside the Ethereum main chain. Users can
                deposit Ethereum tokens to a Polygon smart contract, interact with them within Polygon, and then later
                withdraw them back to the Ethereum main chain. The MATIC token is used to pay transaction fees and
                participate in proof-of-stake consensus.
              </Typography>
            </Box>
            <Box mt={isSm ? '60px' : 0}>
              <img src={GalaxyLogo.src} alt="" style={{ height: isSm ? 22 : 36 }} />
              <Typography
                mt={isSm ? '15px' : '43px'}
                pl={isSm ? 0 : '80px'}
                variant="h4"
                fontSize={isSm ? 12 : 18}
                lineHeight={isSm ? '16px' : '21px'}
                color="#595656"
              >
                <span style={{ color: '#9881FF', fontSize: isSm ? 14 : 26, lineHeight: isSm ? '16px' : '21px' }}>
                  Galaxy Digital
                </span>{' '}
                is a technology-driven financial services and investment management firm that provides institutions and
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
