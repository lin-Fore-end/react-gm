import React from 'react'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'

import InputNumber from './index'
import InputNumberV2 from './number'

const inputNumberStatus = {
  value: null,
  setNumber(num) {
    this.value = num
  }
}

const oldStore = observable(inputNumberStatus)
const newStore = observable(inputNumberStatus)

storiesOf('InputNumber', module)
  .add('old', () => (
    <InputNumber
      value={oldStore.value}
      onChange={value => {
        // console.log('onChange', value)
        oldStore.setNumber(value)
      }}
      placeholder='最大0，最小0'
      minus
    />
  ))
  .add('new', () => (
    <InputNumberV2
      value={newStore.value}
      onChange={value => {
        // console.log('onChange', value)
        newStore.setNumber(value)
      }}
    />
  ))
