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
      <RightContainer width={isSm ? '85%' : undefined} sxStyle={{ marginTop: isSm ? '-60px' : '-140px' }}>
        <CommonWidth
          sx={{
            padding: { xs: '55px 0 80px 30px ', sm: '110px 0 180px 190px' },
          }}
        >
          <Typography variant="h2" color={'#3A88F5'} fontSize={isSm ? 28 : 100} lineHeight={isSm ? '34px' : '120px'}>
            Agenda
          </Typography>
          <Typography
            variant="h4"
            mt={isSm ? '10px' : '20px'}
            color={'#244B6F'}
            fontSize={isSm ? 14 : 36}
            lineHeight={isSm ? '18px' : '43px'}
            maxWidth="830px"
          >
            All core events will be held onsite at the Alpha House unless otherwise noted
          </Typography>
          <Line margin={isSm ? '43px 0 35px' : '169px 0 101px'} />
          <Box display={isSm ? 'unset' : 'flex'} justifyContent="space-between">
            <Typography
              variant="h3"
              fontWeight={600}
              fontSize={isSm ? 20 : 42}
              lineHeight={isSm ? '28px' : '50px'}
              color={'#9D80FF'}
            >
              Fri,May 13th
            </Typography>
            <Box>
              <Typography
                variant="body1"
                pt={isSm ? '10px' : '20px'}
                textAlign={isSm ? 'left' : 'right'}
                color={'#595656'}
                fontSize={isSm ? 12 : 18}
                lineHeight={isSm ? '18px' : '32px'}
              >
                Galaxy Interactive x Polygon Builders’ Day
              </Typography>
              <Typography
                variant="body1"
                textAlign={isSm ? 'left' : 'right'}
                color={'#595656'}
                fontSize={isSm ? 12 : 18}
                lineHeight={isSm ? '18px' : '32px'}
              >
                10am -8 pm EST
              </Typography>
            </Box>
          </Box>
          <Box display={isSm ? 'block' : 'flex'} mt={isSm ? '53px' : '107px'} justifyContent="space-between">
            <Typography
              variant="h3"
              fontWeight={600}
              fontSize={isSm ? 20 : 42}
              lineHeight={isSm ? '28px' : '50px'}
              color={'#9D80FF'}
            >
              Location
            </Typography>
            <Box>
              <Typography
                variant="body1"
                pt={isSm ? '10px' : '20px'}
                textAlign={isSm ? 'left' : 'right'}
                color={'#595656'}
                fontSize={isSm ? 12 : 18}
                lineHeight={isSm ? '18px' : '32px'}
              >
                Alpha House NYC | Manhattan
              </Typography>
            </Box>
          </Box>
          <Line margin={isSm ? '60px 0' : '69px 0 120px'} />
          <Box display={'flex'} mt={isSm ? '60px' : '112px'} flexDirection="row-reverse">
            <Button
              style={{ marginRight: isSm ? '30px' : '0' }}
              width={isSm ? 180 : 220}
              height={isSm ? 24 : 35}
              color="#fff"
              fontSize={isSm ? 12 : 16}
              onClick={() =>
                window.open('https://drive.google.com/file/d/1mYixXiFsYKgpmZme5iTU5zN8axHOZ8OZ/view?usp=sharing')
              }
            >
              Download Program Outline
            </Button>
          </Box>
        </CommonWidth>
      </RightContainer>
    </Box>
  )
}
