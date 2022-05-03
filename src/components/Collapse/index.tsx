import { Box, Collapse, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useIsSMDown } from '../../theme'

export default function Index({ children, title }: { children: any; title: string | JSX.Element }) {
  const [isOpen, setIsOpen] = useState(false)
  const isSm = useIsSMDown()
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: theme.bgColor.bg1,
        borderRadius: '8px',
      }}
    >
      <Box
        sx={{
          height: isSm ? 40 : 90,
          padding: isSm ? '15px' : '0 30px 0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography color={theme.textColor.text6} fontSize={isSm ? 12 : 18} variant="body1">
          {title}
        </Typography>
        {isOpen ? (
          <svg
            width={isSm ? '12' : '28'}
            height={isSm ? '12' : '28'}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 11L11 17M11 11L17 17M24 14C24 19.5228 19.5228 24 14 24C8.47715 24 4 19.5228 4 14C4 8.47715 8.47715 4 14 4C19.5228 4 24 8.47715 24 14Z"
              stroke="#B1B1B5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width={isSm ? '12' : '28'}
            height={isSm ? '12' : '28'}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 10V18M10 14H18M24 14C24 19.5228 19.5228 24 14 24C8.47715 24 4 19.5228 4 14C4 8.47715 8.47715 4 14 4C19.5228 4 24 8.47715 24 14Z"
              stroke="#B1B1B5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Box>
      <Collapse in={isOpen}>{children}</Collapse>
    </Box>
  )
}
