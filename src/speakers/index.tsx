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
      <RightContainer width={isSm ? '85%' : undefined} sxStyle={{ marginTop: isSm ? '-60px' : '-140px' }}>
        <CommonWidth
          sx={{
            padding: { xs: '65px 30px', sm: '110px 0 113px 185px' },
          }}
        >
          <Typography variant="h2" color={'#3A88F5'} fontSize={isSm ? 28 : 100} lineHeight={isSm ? '33px' : '120px'}>
            Speakers
          </Typography>
          <Typography
            mt={isSm ? '10px' : '39px'}
            variant="h4"
            color={'#244B6F'}
            fontSize={isSm ? 14 : 36}
            lineHeight={isSm ? '18px' : '43px'}
            maxWidth="830px"
          >
            Meet our renowned speakers and panelists
          </Typography>
          <Box
            mt={isSm ? '38px' : '165px'}
            sx={{
              display: 'grid',
              gridTemplateColumns: isSm ? 'repeat(auto-fill, 60%)' : 'repeat(auto-fill, 180px)',
              gridGap: isSm ? '50px 118px' : '107px 118px',
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
      <Avatar
        variant="square"
        sx={{ width: isSm ? 90 : 173, height: isSm ? 90 : 173, margin: isSm ? 'auto' : 0 }}
        src={speakerInfo.avatar}
      >
        no image
      </Avatar>
      <Typography
        mt={isSm ? '13px' : '26px'}
        textAlign={isSm ? 'center' : 'unset'}
        sx={{ whiteSpace: 'nowrap' }}
        // letterSpacing="-1.47851px"
        variant="h4"
        color="#9881FF"
        fontSize={isSm ? 16 : 28}
        lineHeight={isSm ? '24px' : '34px'}
      >
        {speakerInfo.name}
      </Typography>
      <Typography
        textAlign={isSm ? 'center' : 'unset'}
        variant="body1"
        color="#595656"
        fontSize={isSm ? 12 : 15}
        lineHeight={isSm ? '16px' : '20px'}
      >
        {speakerInfo.desc}
      </Typography>
    </Box>
  )
}
