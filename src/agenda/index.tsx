import { Typography, styled, Box } from '@mui/material'
import React from 'react'
import Banner from '../components/Banner'
import Button from '../components/Button/Button'
import RightContainer from '../components/RightContainer'
import { CommonWidth } from '../components/Styled'
import { useIsSMDown } from '../theme'

const Line = styled(Box)({
  height: '2px',
  background: '#9D80FF',
})

export default function Agenda() {
  const isSm = useIsSMDown()

  return (
    <Box>
      <Banner />
      <RightContainer width={isSm ? '85%' : undefined} sxStyle={{ marginTop: isSm ? '-80px' : '-140px' }}>
        <CommonWidth
          sx={{
            padding: { xs: '50px 0 50px 30px ', sm: '131px 0 197px 196px' },
          }}
        >
          <Typography variant="h2" color={'#3A88F5'} fontSize={isSm ? 50 : 120} lineHeight={isSm ? '66px' : '144px'}>
            Agenda
          </Typography>
          <Typography
            variant="h4"
            color={'#244B6F'}
            fontSize={isSm ? 22 : 42}
            lineHeight={isSm ? '30px' : '50px'}
            maxWidth="830px"
          >
            All core events will be held onsite at the Alpha House unless otherwise noted
          </Typography>
          <Line margin={isSm ? '60px 0' : '89px 0 86px'} />
          <Box display={isSm ? 'unset' : 'flex'} justifyContent="space-between">
            <Typography
              variant="h3"
              fontWeight={700}
              fontSize={isSm ? 30 : 56}
              lineHeight={isSm ? '40px' : '67px'}
              color={'#9D80FF'}
            >
              Thu,May 12th
            </Typography>
            <Box>
              <Typography
                variant="body1"
                pt={'20px'}
                textAlign={isSm ? 'left' : 'right'}
                color={'#595656'}
                fontSize={isSm ? 18 : 21}
                lineHeight={isSm ? '24px' : '32px'}
              >
                VIP Launch Dinner
              </Typography>
              <Typography
                variant="body1"
                textAlign={isSm ? 'left' : 'right'}
                color={'#595656'}
                fontSize={isSm ? 18 : 21}
                lineHeight={isSm ? '24px' : '32px'}
              >
                7 pm EST
              </Typography>
            </Box>
          </Box>
          <Box display={isSm ? 'inherit' : 'flex'} mt={isSm ? '60px' : '107px'} justifyContent="space-between">
            <Typography
              variant="h3"
              fontWeight={700}
              fontSize={isSm ? 30 : 56}
              lineHeight={isSm ? '40px' : '67px'}
              color={'#9D80FF'}
            >
              Fri,May 13th
            </Typography>
            <Box>
              <Typography
                variant="body1"
                pt={'20px'}
                textAlign={isSm ? 'left' : 'right'}
                color={'#595656'}
                fontSize={isSm ? 18 : 21}
                lineHeight={isSm ? '24px' : '32px'}
              >
                Galaxy Interactive x Polygon Builders’ Day
              </Typography>
              <Typography
                variant="body1"
                textAlign={isSm ? 'left' : 'right'}
                color={'#595656'}
                fontSize={isSm ? 18 : 21}
                lineHeight={isSm ? '24px' : '32px'}
              >
                10-8 pm EST
              </Typography>
            </Box>
          </Box>
          <Box display={'flex'} mt={isSm ? '60px' : '112px'} flexDirection="row-reverse">
            <Button
              width={280}
              height={39}
              color="#fff"
              onClick={() =>
                window.open('https://drive.google.com/file/d/1mYixXiFsYKgpmZme5iTU5zN8axHOZ8OZ/view?usp=sharing')
              }
            >
              Download Program Outline
            </Button>
          </Box>
          <Line margin={isSm ? '60px 0' : '89px 0 86px'} />
          <Box display={isSm ? 'unset' : 'flex'} mt="107px" justifyContent="space-between">
            <Typography
              variant="h3"
              fontWeight={700}
              fontSize={isSm ? 30 : 56}
              lineHeight={isSm ? '40px' : '67px'}
              color={'#9D80FF'}
            >
              Location
            </Typography>
            <Box>
              <Typography
                variant="body1"
                pt={'20px'}
                textAlign={isSm ? 'left' : 'right'}
                color={'#595656'}
                fontSize={isSm ? 18 : 21}
                lineHeight={isSm ? '24px' : '32px'}
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
