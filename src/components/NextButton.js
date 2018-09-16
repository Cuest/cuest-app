import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

import Button from './Button'
import Text from './Text'

const Container = styled.View`
  padding: ${p => p.theme.dim.screenPadding}px;
  margin-top: auto;
`

const TheButton = styled.View`
  background-color: ${p => p.theme.colors.primary};
  padding: 15px;
  border-radius: 2px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`

const TheText = styled(Text)`
  font-weight: bold;
  line-height: ${p => p.theme.text.size};
  margin-top: 1px;
  letter-spacing: 1px;
`

const NextButton = (props) => {
  const { children, onPress, ...rest } = props
  
  return <Container>
    <Button onPress={onPress}>
      <TheButton>
        <TheText>{children.toUpperCase()}</TheText>
      </TheButton>
    </Button>
  </Container>
}

export default NextButton
