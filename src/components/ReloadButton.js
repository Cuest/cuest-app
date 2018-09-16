import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

import Text from '../components/Text'
import Button from './Button'

const onPress = () => {
  throw new Error('Want to reload?')
}

const TheButton = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: white;
  opacity: 0.2;
`

const ReloadButton = () => {
  return <Button onPress={onPress}>
    <TheButton />
  </Button>
}

export default ReloadButton
