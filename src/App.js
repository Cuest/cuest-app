import React from 'react'
import { View, Text } from 'react-native'
import styled, { ThemeProvider } from 'styled-components'
import { withState, withHandlers, compose } from 'recompose'

import theme from './theme'
import Wrapper from './components/Wrapper'
import Intro from './screens/Intro'
import BikeLocation from './screens/BikeLocation'

const screens = [
  BikeLocation,
  Intro,
]

const enhance = compose(
  withState('screenIndex', 'setScreenIndex', 0),
  withHandlers({
    next: ({ setScreenIndex, screenIndex }) => () => {
      if ((screenIndex) < screens.length - 1) {
        setScreenIndex(screenIndex + 1)
      }
    },
    prev: ({ setScreenIndex, screenIndex }) => () => {
      if ((screenIndex) > 0) {
        setScreenIndex(screenIndex - 1)
      }
    }
  })
)

const App = (props) => {
  const { screenIndex, next, prev } = props
  const Comp = screens[screenIndex]
  const compProps = { next, prev }

  return <ThemeProvider theme={theme}>
    <Wrapper>
      <Comp {...compProps} />
    </Wrapper>
  </ThemeProvider>
}

export default enhance(App)
