import { Box, SxProps } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function RightContainer({ sxStyle, children }: { sxStyle?: SxProps; children?: any }) {
  const [bodyWidth, setBodyWidth] = useState(1140)

  useEffect(() => {
    function calcBodyWidth() {
      const commonWidth = 1140
      const _w =
        window.innerWidth < commonWidth ? window.innerWidth : (window.innerWidth - commonWidth) / 2 + commonWidth
      setBodyWidth(_w)
    }
    calcBodyWidth()
    window.addEventListener('resize', calcBodyWidth)
    return () => {
      window.removeEventListener('resize', calcBodyWidth)
    }
  }, [])

  return (
    <Box display={'flex'} justifyContent="right" sx={{ ...sxStyle }}>
      <Box
        width={bodyWidth}
        sx={{
          background: '#fff',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
