import Container from '@material-ui/core/Container'
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles } from '@material-ui/core/styles'
import { useNProgress } from '@tanem/react-nprogress'
import React from 'react'

const useStyles = makeStyles(() => ({
  bar: ({ animationDuration }) => ({
    transitionDuration: `${animationDuration}ms`
  }),
  container: ({ animationDuration, isFinished }) => ({
    opacity: isFinished ? 0 : 1,
    pointerEvents: 'none',
    transition: `opacity ${animationDuration}ms linear`,
    maxWidth: 'none'
  })
}))

const ProgressBar = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating
  })
  const classes = useStyles({ animationDuration, isFinished })

  return (
    <Container classes={{ root: classes.container }} disableGutters={true}>
      <LinearProgress
        classes={{ bar1Determinate: classes.bar }}
        value={progress * 100}
        variant="determinate"
        color="secondary"
        // style={{ minHeight: 20 }}
      />
    </Container>
  )
}

export default ProgressBar
