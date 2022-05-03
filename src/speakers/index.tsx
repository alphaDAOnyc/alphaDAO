import { Typography, Box } from '@mui/material'
import React from 'react'
import Banner from '../components/Banner'
import RightContainer from '../components/RightContainer'
import { CommonWidth } from '../components/Styled'
import Avatar from '@mui/material/Avatar'
import { speakerList, SpeakerInfo } from '../data/speakers'

export default function Speakers() {
  return (
    <Box>
      <Banner />
      <RightContainer sxStyle={{ marginTop: '-140px' }}>
        <CommonWidth
          sx={{
            padding: '131px 0 286px 185px',
          }}
        >
          <Typography variant="h2" color={'#3A88F5'} fontSize="120px" lineHeight={'144px'}>
            Speakers
          </Typography>
          <Typography mt="47px" variant="h4" color={'#244B6F'} fontSize="42px" lineHeight={'50px'} maxWidth="830px">
            Meet our renowned speakers and panelists
          </Typography>
          <Box
            mt="110px"
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, 180px)',
              gridGap: '107px 118px',
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
  return (
    <Box>
      <Avatar variant="square" sx={{ width: 173, height: 173 }} src={speakerInfo.avatar}>
        no image
      </Avatar>
      <Typography
        mt="26px"
        sx={{ whiteSpace: 'nowrap' }}
        // letterSpacing="-1.47851px"
        variant="h4"
        color="#9881FF"
        fontSize={28}
        lineHeight="34px"
      >
        {speakerInfo.name}
      </Typography>
      <Typography variant="body1" color="#595656" fontSize={15} lineHeight="20px">
        {speakerInfo.desc}
      </Typography>
    </Box>
  )
}
