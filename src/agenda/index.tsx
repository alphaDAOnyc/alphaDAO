import { Typography, styled, Box } from '@mui/material'
import React from 'react'
import Banner from '../components/Banner'
import Button from '../components/Button/Button'
import RightContainer from '../components/RightContainer'
import { CommonWidth } from '../components/Styled'

const Line = styled(Box)({
  height: '2px',
  background: '#9D80FF',
})

export default function Agenda() {
  return (
    <Box>
      <Banner />
      <RightContainer sxStyle={{ marginTop: '-140px' }}>
        <CommonWidth
          sx={{
            padding: '131px 0 197px 196px',
          }}
        >
          <Typography variant="h2" color={'#3A88F5'} fontSize="120px" lineHeight={'144px'}>
            Agenda
          </Typography>
          <Typography variant="h4" color={'#244B6F'} fontSize="42px" lineHeight={'50px'} maxWidth="830px">
            All core events will be held onsite at the Alpha House unless otherwise noted
          </Typography>
          <Line margin="89px 0 86px" />
          <Box display={'flex'} justifyContent="space-between">
            <Typography variant="h3" fontWeight={700} fontSize={56} lineHeight="67px" color={'#9D80FF'}>
              Thu,May 12th
            </Typography>
            <Box>
              <Typography
                variant="body1"
                pt={'20px'}
                textAlign={'right'}
                color={'#595656'}
                fontSize={21}
                lineHeight="32px"
              >
                VIP Launch Dinner
              </Typography>
              <Typography variant="body1" textAlign={'right'} color={'#595656'} fontSize={21} lineHeight="32px">
                7 pm EST
              </Typography>
            </Box>
          </Box>
          <Box display={'flex'} mt="107px" justifyContent="space-between">
            <Typography variant="h3" fontWeight={700} fontSize={56} lineHeight="67px" color={'#9D80FF'}>
              Fri,May 13th
            </Typography>
            <Box>
              <Typography
                variant="body1"
                pt={'20px'}
                textAlign={'right'}
                color={'#595656'}
                fontSize={21}
                lineHeight="32px"
              >
                Galaxy Interactive x Polygon Builders’ Day
              </Typography>
              <Typography variant="body1" textAlign={'right'} color={'#595656'} fontSize={21} lineHeight="32px">
                10-8 pm EST
              </Typography>
            </Box>
          </Box>
          <Box display={'flex'} mt="112px" justifyContent="right">
            <Button width={238} height={39} color="#fff">
              Download Program Outline
            </Button>
          </Box>
          <Line margin="86px 0 147px" />
          <Box display={'flex'} mt="107px" justifyContent="space-between">
            <Typography variant="h3" fontWeight={700} fontSize={56} lineHeight="67px" color={'#9D80FF'}>
              Location
            </Typography>
            <Box>
              <Typography
                variant="body1"
                pt={'20px'}
                textAlign={'right'}
                color={'#595656'}
                fontSize={21}
                lineHeight="32px"
              >
                Alpha House NYC | 213 W 23rd Street, New York, NY 10011
              </Typography>
            </Box>
          </Box>
        </CommonWidth>
      </RightContainer>
    </Box>
  )
}
