import { makeStyles } from '@material-ui/styles'

export const useWithAnimationStyles = makeStyles(() => ({
  awaitInView: {
    // position: 'absolute',
    // height: '70vh',
    // width: '100%',
    // transformOrigin: '0 100%',
    transitionProperty: 'transform, opacity',
    transitionDuration: '0.6s',
    opacity: 0,
    // transform: 'translateY(20px) rotateZ(3deg)',
    transform: 'scale(0)',
  },
  inView: {
    '&&': {
      opacity: 1,
      // transform: 'translateY(0) rotateZ(0)',
      transform: 'scale(1)',
    },
  },
}))

export const useWithDefaultAnimationStyles = makeStyles(() => ({
  awaitInView: {
    transformOrigin: '0 100%',
    transitionProperty: 'transform, opacity',
    transitionDuration: '0.8s',
    opacity: 0,
    transform: 'translateY(20px) rotateZ(3deg)',
  },
  inView: {
    '&&': {
      opacity: 1,
      transform: 'translateY(0) rotateZ(0)',
    },
  },
}))
