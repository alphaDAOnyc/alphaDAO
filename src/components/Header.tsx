import { Box, Drawer, Link as MuiLink, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { CommonContainer } from './Styled'
import { useIsSMDown } from '../theme'
import Link from 'next/link'
// import Image from 'next/image'
import PolygonLogo from '../assets/svg/polygon_logo.svg'
import GalaxyLogo from '../assets/svg/galaxy_logo.svg'
import { useRouter } from 'next/router'

export default function Header() {
  const [open, setOpen] = useState(false)
  const isSm = useIsSMDown()
  const theme = useTheme()
  // const [bgOpacity, setBgOpacity] = useState<number>(0)

  // const calcBgOpacity = useCallback(() => {
  //   const top = document.documentElement.scrollTop
  //   if (top < 250) {
  //     const _op = top / 250
  //     setBgOpacity(_op)
  //   }
  //   if (top >= 250 && bgOpacity !== 1) {
  //     setBgOpacity(1)
  //   }
  // }, [bgOpacity])
  // useEffect(() => {
  //   document.addEventListener('scroll', calcBgOpacity)
  //   return () => {
  //     document.removeEventListener('scroll', calcBgOpacity)
  //   }
  // }, [calcBgOpacity])

  return (
    <Box height={isSm ? 82 : '165px'}>
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: isSm ? 82 : '165px',
          width: '100vw',
          zIndex: 10,
          backgroundColor: '#fff',
        }}
      >
        <CommonContainer
          maxWidth={isSm ? 'unset' : '1180px'}
          height={'100%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent="space-between"
          sx={{
            '&>*': {
              marginTop: '20px',
            },
          }}
        >
          <Link href="/" passHref>
            <Box display={'flex'} gap="19px" alignItems={'center'}>
              <Box display="flex" sx={{ cursor: 'pointer', '& img': { height: isSm ? 26 : 'unset' } }}>
                <img src={PolygonLogo.src} alt="" />
              </Box>

              <Box sx={{ borderRight: `2px solid #9881FF`, height: 47 }}></Box>

              <Box display="flex" sx={{ cursor: 'pointer', '& img': { height: isSm ? 26 : 'unset' } }}>
                <img src={GalaxyLogo.src} alt="" />
              </Box>
            </Box>
          </Link>

          {isSm ? (
            <svg
              onClick={() => setOpen(true)}
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="1" y1="1" x2="23" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="1" y1="7" x2="23" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="1" y1="13" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <Box
              display={'flex'}
              gap="20px"
              sx={{
                '&>a p, & .link-span': {
                  display: 'inline-block',
                  padding: '2px 8px',
                  color: theme.textColor.text1,
                },
                '& .default a': {
                  color: theme.textColor.text1,
                },
                '& .active': {
                  background: 'linear-gradient(226.72deg, #9482FE -5.64%, #21549B 97.55%)',
                  borderRadius: '17px',
                  color: '#fff',
                },
              }}
            >
              <Menus />
            </Box>
          )}
          <Drawer
            anchor={'right'}
            className={'myDrawer'}
            open={open}
            onClose={() => setOpen(false)}
            sx={{
              '& .MuiPaper-root': {
                width: '50%',
                height: '100vh',
                background: theme.bgColor.bg2,
              },
            }}
          >
            <Box display={'grid'} gap="24px" justifyContent={'center'} mt="24px">
              <Menus />
            </Box>
          </Drawer>
        </CommonContainer>
      </Box>
    </Box>
  )
}

function Menus() {
  const router = useRouter()

  const list = [
    {
      name: 'About',
      link: '/',
      externalLink: '',
    },
    {
      name: 'Speakers',
      link: '/speakers',
      externalLink: '',
    },
    {
      name: 'Sponsors',
      link: '/sponsor',
      externalLink: '',
    },
    {
      name: 'Agenda',
      link: '/agenda',
      externalLink: '',
    },
    {
      name: 'Ticket',
      link: '/ticket',
      externalLink: 'https://www.google.com/',
    },
  ]

  // const toTag = useCallback(
  //   (tag: string) => {
  //     onClose && onClose()
  //     setTimeout(() => (location.hash = tag), 100)
  //   },
  //   [onClose]
  // )

  return (
    <>
      {list.map((item, index) =>
        item.externalLink ? (
          <MuiLink key={index} target="_blank" className="hover6" underline="none" href={item.externalLink}>
            <Typography sx={{ cursor: 'pointer' }} fontSize="16px" fontWeight={500}>
              {item.name}
            </Typography>
          </MuiLink>
        ) : (
          <span key={index} className={`link-span hover6 ${router.asPath === item.link ? 'active' : 'default'}`}>
            <Link href={item.link}>{item.name}</Link>
          </span>
        )
      )}
    </>
  )
}
