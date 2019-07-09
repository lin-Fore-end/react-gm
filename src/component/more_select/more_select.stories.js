import React from 'react'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'

import MoreSelect from './index'

const data = [
  {
    value: 1,
    text: '南山'
  },
  {
    value: 2,
    text: '福田'
  },
  {
    value: 3,
    text: '罗湖'
  },
  {
    value: 4,
    text: '宝安'
  },
  {
    value: 5,
    text: '福永'
  },
  {
    value: 6,
    text: '坪洲'
  },
  {
    value: 7,
    text: '西乡'
  },
  {
    value: 8,
    text: '西乡8'
  },
  {
    value: 9,
    text: '西乡9'
  },
  {
    value: 10,
    text: '西乡10'
  },
  {
    value: 11,
    text: '西乡11'
  }
]

const dataGroup = [
  {
    label: '南山',
    children: [
      {
        value: 1,
        text: '科技园'
      },
      {
        value: 2,
        text: '大冲'
      },
      {
        value: 3,
        text: '大新'
      }
    ]
  },
  {
    label: '宝安',
    children: [
      {
        value: 22,
        text: '西乡'
      },
      {
        value: 21,
        text: '固戍'
      }
    ]
  }
]

const moreselectStatus = {
  selected: {
    value: 1,
    text: '科技园'
  },
  selectValue(selected) {
    this.selected = selected
  }
}

const multipleSelectedStatus = {
  multipleSelected: [
    {
      value: 3,
      text: '大新'
    },
    {
      value: 2,
      text: '大冲'
    }
  ],
  selectValue(selected) {
    this.multipleSelected = selected
  }
}

const moreselectV1 = observable(moreselectStatus)
const moreselectV2 = observable(moreselectStatus)
const multipleSelectedV1 = observable(multipleSelectedStatus)

storiesOf('MoreSelect', module)
  .add('default', () => (
    <MoreSelect
      data={data}
      selected={moreselectV1.selected}
      onSelect={selected => moreselectV1.selectValue(selected)}
    />
  ))
  .add('group select', () => (
    <MoreSelect
      data={dataGroup}
      isGroupList
      selected={moreselectV2.selected}
      onSelect={selected => moreselectV2.selectValue(selected)}
    />
  ))
  .add('multipleSelected', () => (
    <MoreSelect
      data={data}
      selected={multipleSelectedV1.multipleSelected}
      onSelect={selected => multipleSelectedV1.selectValue(selected)}
      multiple
    />
  ))
