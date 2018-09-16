import React, { Fragment } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

import Text from '../components/Text'
import PaddedView from '../components/PaddedView'
import NextButton from '../components/NextButton'

const Intro = (props) => {
  return <Fragment>
    <PaddedView><Text>Intro</Text></PaddedView>
    <NextButton
      onPress={props.next}
      children='Next'
    />
  </Fragment>
}

export default Intro