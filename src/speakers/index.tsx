import { Typography, Box } from '@mui/material'
import React from 'react'
import Banner from '../components/Banner'
import RightContainer from '../components/RightContainer'
import { CommonWidth } from '../components/Styled'
import Avatar from '@mui/material/Avatar'
import { speakerList, SpeakerInfo } from '../data/speakers'
import { useRouter } from 'next/router'
import { useIsSMDown } from '../theme'

export default function Speakers() {
  const isSm = useIsSMDown()

  return (
    <Box>
      <Banner />
      <RightContainer width={isSm ? '85%' : undefined} sxStyle={{ marginTop: isSm ? '-80px' : '-140px' }}>
        <CommonWidth
          sx={{
            padding: { xs: '50px 30px', sm: '131px 0 286px 185px' },
          }}
        >
          <Typography variant="h2" color={'#3A88F5'} fontSize={isSm ? 50 : 120} lineHeight={isSm ? '66px' : '144px'}>
            Speakers
          </Typography>
          <Typography
            mt={isSm ? '20px' : '47px'}
            variant="h4"
            color={'#244B6F'}
            fontSize={isSm ? 24 : 42}
            lineHeight={isSm ? '30px' : '50px'}
            maxWidth="830px"
          >
            Meet our renowned speakers and panelists
          </Typography>
          <Box
            mt="110px"
            sx={{
              display: 'grid',
              gridTemplateColumns: isSm ? 'repeat(auto-fill, 80%)' : 'repeat(auto-fill, 180px)',
              gridGap: isSm ? '70px 118px' : '107px 118px',
            }}
          >
            {speakerList.map((item) => (
              <SpeakerItem key={item.name} speakerInfo={item}></SpeakerItem>
            ))}
          </Box>
        </CommonWidth>
      </RightContainer>
    </Box>
  )
}

function SpeakerItem({ speakerInfo }: { speakerInfo: SpeakerInfo }) {
  const router = useRouter()
  const isSm = useIsSMDown()

  return (
    <Box sx={{ cursor: 'pointer' }} onClick={() => router.push('/speakers/' + speakerInfo.name)}>
      <Avatar variant="square" sx={{ width: 173, height: 173, margin: isSm ? 'auto' : 0 }} src={speakerInfo.avatar}>
        no image
      </Avatar>
      <Typography
        mt="26px"
        textAlign={isSm ? 'center' : 'unset'}
        sx={{ whiteSpace: 'nowrap' }}
        // letterSpacing="-1.47851px"
        variant="h4"
        color="#9881FF"
        fontSize={isSm ? 24 : 28}
        lineHeight="34px"
      >
        {speakerInfo.name}
      </Typography>
      <Typography textAlign={isSm ? 'center' : 'unset'} variant="body1" color="#595656" fontSize={15} lineHeight="20px">
        {speakerInfo.desc}
      </Typography>
    </Box>
  )
}
