import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

const PaddedView = styled.View`
  padding: ${p => (p.padding || `${p.theme.dim.screenPadding}px`)};
`

export default PaddedView
