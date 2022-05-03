import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

function getMousePos(event?: any): {
  x: number | undefined
  y: number | undefined
} {
  const e = event || window.event
  const ret = { x: e?.clientX || undefined, y: e?.clientY || undefined }
  return ret
}
export default function Index({ children }: { children: JSX.Element | string }) {
  const [elPos, setElPos] = useState({
    translateX: '0',
    translateY: '0',
    rotateX: '0deg',
    rotateY: '0deg',
  })

  useEffect(() => {
    function transformData() {
      const _pos = {
        translateX: '0',
        translateY: '0',
        rotateX: '0deg',
        rotateY: '0deg',
      }
      const mousePos = getMousePos()
      const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      const max = {
        xy: 60,
        rotate: 20,
      }
      if (!mousePos.x || !mousePos.y) return
      if (mousePos.x < center.x) {
        _pos.translateX = '-' + (1 - (mousePos.x % center.x) / center.x) * max.xy + 'px'
        _pos.rotateY = '-' + (1 - (mousePos.x % center.x) / center.x) * max.rotate + 'deg'
      } else {
        _pos.translateX = ((mousePos.x % center.x) / center.x) * max.xy + 'px'
        _pos.rotateY = ((mousePos.x % center.x) / center.x) * max.rotate + 'deg'
      }

      if (mousePos.y < center.y) {
        _pos.translateY = '-' + (1 - (mousePos.y % center.y) / center.y) * max.xy + 'px'
        _pos.rotateX = (1 - (mousePos.y % center.y) / center.y) * max.rotate + 'deg'
      } else {
        _pos.translateY = ((mousePos.y % center.y) / center.y) * max.xy + 'px'
        _pos.rotateX = '-' + ((mousePos.y % center.y) / center.y) * max.rotate + 'deg'
      }
      setElPos(_pos)
    }
    window.addEventListener('mousemove', transformData)
    return () => {
      window.removeEventListener('mousemove', transformData)
    }
  }, [])

  return (
    <Box
      sx={{
        // transition: 'all 0.1s',
        transform: `translateX(${elPos.translateX})translateY(${elPos.translateY})rotateX(${elPos.rotateX})rotateY(${elPos.rotateY});`,
      }}
    >
      {children}
    </Box>
  )
}
