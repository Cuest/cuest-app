import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const CustomText = styled.Text`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.text.size};
`

export default CustomText
