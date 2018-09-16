import React from 'react'
import { View, TouchableHighlight, TouchableNativeFeedback, Platform } from 'react-native'
import styled from 'styled-components'

import Text from '../components/Text'

const BaseComp = (
  Platform.OS == 'android'
  ? TouchableNativeFeedback
  : TouchableHighlight
)

const Button = (props) => {
  return <BaseComp {...props} />
}

export default Button