import { useCallback, useEffect, useMemo, useState } from 'react'

export default function useWithScrollTransform(isSmDown: boolean) {
  const [scrollTop, setScrollTop] = useState(0)
  const [maxTop, setMaxTop] = useState(0)

  const updateCall = useCallback(() => {
    setScrollTop(window.scrollY)
    setMaxTop(window.innerHeight)
  }, [])

  const styles = useMemo(() => {
    if (scrollTop >= maxTop)
      return {
        img: {
          opacity: 0,
          transform: 'scale(2)',
        },
        font: {
          opacity: 0,
          transform: isSmDown ? 'scale(2)' : 'scale(4)',
        },
        btn: {
          opacity: 0,
          transform: 'scale(2)',
        },
      }
    else {
      const per = scrollTop / maxTop
      return {
        img: {
          opacity: (1 - per) * (isSmDown ? 2 : 1.5),
          transform: `scale(${1 + per})`,
        },
        font: {
          opacity: (1 - per) * (isSmDown ? 2 : 1.5),
          transform: isSmDown ? `scale(${1 + per})` : `scale(${1 + per * 3})`,
        },
        btn: {
          opacity: 1.2 - per * 2,
        },
      }
    }
  }, [isSmDown, maxTop, scrollTop])

  useEffect(() => {
    updateCall()
    window.addEventListener('ready', updateCall)
    window.addEventListener('resize', updateCall)
    window.addEventListener('scroll', updateCall)
    return () => {
      window.removeEventListener('ready', updateCall)
      window.removeEventListener('resize', updateCall)
      window.removeEventListener('scroll', updateCall)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return styles
}
