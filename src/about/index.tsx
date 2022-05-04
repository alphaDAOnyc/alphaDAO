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
    <Box>
      <Banner home />
      {isSm && (
        <Box sx={{ marginTop: '-80px', display: 'flex', flexDirection: 'row-reverse', position: 'relative' }}>
          <Box
            width={isSm ? '85%' : undefined}
            sx={{
              background: '#fff',
              minHeight: isSm ? '80px' : 0,
              padding: '20px 10px 15px 36vw',
            }}
          >
            <Typography variant="h4" color={'#244B6F'} fontSize={16}>
              Polygon/Galaxy-generated connectivity, ideation, development, and creation alongside leading web3 builders
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '48vw',
              background: 'linear-gradient(226.72deg, #9482FE -5.64%, #21549B 97.55%)',
              padding: '15px 15px 15px 30px',
            }}
          >
            <Typography color={'#fff'} fontSize={14}>
              Thursday, May 12th 7 pm EST | VIP Launch Dinner Friday, May 13th 10-8 pm EST | Builders’ Day
            </Typography>
          </Box>
        </Box>
      )}
      <RightContainer sxStyle={{ marginTop: { xs: '0px', sm: '-140px' }, background: '#fff', padding: '0 30px' }}>
        <CommonWidth>
          <Box
            sx={{
              padding: { xs: '40px 0', sm: '131px 116px 198px 194px' },
            }}
          >
            <Typography
              mb={isSm ? 0 : '48px'}
              variant="h2"
              color={'#3A88F5'}
              fontSize={{ xs: 50, sm: 120 }}
              lineHeight={{ xs: '72px', sm: '144px' }}
            >
              Builder's Day
            </Typography>
            {!isSm && (
              <Typography variant="h4" color={'#244B6F'} fontSize={isSm ? 28 : 42} lineHeight={isSm ? '33px' : '50px'}>
                Polygon/Galaxy-generated connectivity, ideation, development, and creation alongside leading web3
                builders
              </Typography>
            )}
          </Box>
          <Box
            textAlign={'right'}
            sx={{
              '& img': {
                maxWidth: { xs: '100%', sm: '760px' },
              },
            }}
          >
            <img src={DayImg.src} alt="" />
          </Box>

          <Typography
            mt={'67px'}
            variant="h4"
            maxWidth="743px"
            color={'#9482FE'}
            fontSize={isSm ? 22 : 32}
            lineHeight={isSm ? '24px' : '38px'}
          >
            Our goal is to leverage this scalable framework and create an interconnected space where Web 3.0 builders
            can share, learn and connect with each other.{' '}
          </Typography>

          <Box display={'flex'} mt="58px" justifyContent="right" pb={'122px'}>
            <Typography
              variant="body1"
              fontSize={isSm ? 18 : 21}
              lineHeight={isSm ? '27px' : '32px'}
              maxWidth={661}
              color="#595656"
            >
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
          background: isSm
            ? '#F2F2F2'
            : 'radial-gradient(100% 100% at 100% 0%, #F3F3FF 0%, #E9F2FE 60.81%, #E0D7FE 100%)',
        }}
      >
        <CommonContainer
          padding="53px 30px"
          sx={{
            padding: '73px 0 134px',
          }}
        >
          <Typography variant="h3" fontSize={isSm ? 50 : '72px'} lineHeight="86px" color="#2E4A6B">
            About
          </Typography>
          <Box
            sx={{
              display: { xs: 'unset', sm: 'grid' },
              mt: '57px',
              gridTemplateColumns: '1fr 1fr',
              gridGap: '125px',
            }}
          >
            <Box mt={isSm ? '30px' : 0}>
              <img src={PolygonLogo.src} alt="" style={{ height: 43 }} />
              <Typography
                mt={isSm ? '15px' : '47px'}
                pl={isSm ? 0 : '80px'}
                variant="h4"
                fontSize={isSm ? 18 : 21}
                lineHeight="25px"
                color="#595656"
              >
                <span style={{ color: '#9881FF', fontSize: isSm ? 24 : 32, lineHeight: '38px' }}>Polygon</span> was
                formerly called Matic Network. Polygon (MATIC) is an Ethereum token that powers the Polygon Network, a
                scaling solution for Ethereum. Polygon aims to provide faster and cheaper transactions on Ethereum using
                Layer 2 sidechains, which are blockchains that run alongside the Ethereum main chain. Users can deposit
                Ethereum tokens to a Polygon smart contract, interact with them within Polygon, and then later withdraw
                them back to the Ethereum main chain. The MATIC token is used to pay transaction fees and participate in
                proof-of-stake consensus.
              </Typography>
            </Box>
            <Box mt={isSm ? '30px' : 0}>
              <img src={GalaxyLogo.src} alt="" style={{ height: 43 }} />
              <Typography
                mt={isSm ? '15px' : '47px'}
                pl={isSm ? 0 : '80px'}
                variant="h4"
                fontSize={isSm ? 18 : 21}
                lineHeight="25px"
                color="#595656"
              >
                <span style={{ color: '#9881FF', fontSize: isSm ? 24 : 32, lineHeight: '38px' }}>Galaxy Digital</span>{' '}
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
