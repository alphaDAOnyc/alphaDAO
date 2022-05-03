import React, { ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useWithAnimationStyles, useWithDefaultAnimationStyles } from './useWithAnimationStyles'
import classNames from 'classnames'
import Typed from 'typed.js'

interface IAnimateInViewWrapProps {
  children?: ReactNode
  Component?: any
  triggerOnce?: boolean
  className?: any
  defaultAnimation?: boolean
  addClassInView?: any
  rootMargin?: string
  transitionDelay?: number
  [otherProp: string]: any
}

export const WithTypingAnimation = ({
  children,
  triggerOnce = true,
  Component = 'div',
  className,
  tagClassName,
  defaultAnimation = true,
  addClassInView,
  rootMargin = '-50px',
  string,
  transitionDelay = 0,
  ...props
}: IAnimateInViewWrapProps & { tagClassName: string; string: string }) => {
  const classes = useWithAnimationStyles()
  const [typTag, setTypTag] = useState(false)

  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce,
    delay: 500,
  })
  useEffect(() => {
    if (typTag || !inView) return
    new Typed(`.${tagClassName}`, {
      strings: [string],
      typeSpeed: 60,
      startDelay: 0,
      showCursor: false,
    })
    setTypTag(true)
  }, [typTag, inView, tagClassName, string])

  return (
    <Component
      ref={ref}
      className={classNames(
        className,
        tagClassName,
        defaultAnimation && classes.awaitInView,
        defaultAnimation && inView && classes.inView,
        addClassInView && inView && addClassInView
      )}
      {...props}
      style={{ transitionDelay: (transitionDelay || 0) + 's' }}
    >
      {children}
    </Component>
  )
}

export const WithDefaultAnimation = ({
  children,
  triggerOnce = true,
  Component = 'div',
  className,
  defaultAnimation = true,
  addClassInView,
  rootMargin = '0%',
  transitionDelay = 0,
  ...props
}: IAnimateInViewWrapProps) => {
  const classes = useWithDefaultAnimationStyles()

  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce,
    delay: 600,
  })

  return (
    <Component
      ref={ref}
      className={classNames(
        className,
        defaultAnimation && classes.awaitInView,
        defaultAnimation && inView && classes.inView,
        addClassInView && inView && addClassInView
      )}
      {...props}
      style={{ transitionDelay: (transitionDelay || 0) + 's' }}
    >
      {children && children}
    </Component>
  )
}
