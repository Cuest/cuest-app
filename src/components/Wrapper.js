import React from 'react'
import { View, Text, StatusBar, Platform } from 'react-native'
import styled from 'styled-components'

import ReloadButton from './ReloadButton'

const statusBarHeight = (
  Platform.OS === 'android'
  ? StatusBar.currentHeight
  : 18
)

const Background = styled.View`
  background-color: ${p => p.theme.colors.bg};
  flex: 1;
`

const Inner = styled.View`
  margin-top: ${statusBarHeight};
  flex: 1;
  position: relative;
`

const Wrapper = (props) => {
  const { children } = props
  return <Background>
    <Inner>
      <ReloadButton />
      {children}
    </Inner>
  </Background>
}

export default Wrapper

