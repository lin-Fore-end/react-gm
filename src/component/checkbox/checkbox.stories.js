import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox_group'
import { observable } from 'mobx'

const status = {
  citys: [],
  setCitys(_citys) {
    this.citys = _citys
  }
}

const status1 = {
  citys: [1],
  setCitys(_citys) {
    this.citys = _citys
  }
}

const example1 = observable(status)
const example2 = observable(status)
const example3 = observable(status)
const example4 = observable(status1)

storiesOf('Checkbox', module)
  .add('多行排列', () => (
    <CheckboxGroup
      name='citys'
      value={example1.citys}
      onChange={v => example1.setCitys(v)}
    >
      <Checkbox value={1} disabled>
        广州（设置disabled属性，不可选）
      </Checkbox>
      <Checkbox value={2} checked>
        深圳
      </Checkbox>
      <Checkbox value={3}>成都</Checkbox>
    </CheckboxGroup>
  ))

  .add('单行排列', () => (
    <CheckboxGroup
      name='citys'
      inline
      value={example2.citys}
      onChange={v => example2.setCitys(v)}
    >
      <Checkbox value={1} disabled>
        广州（设置disabled属性，不可选）
      </Checkbox>
      <Checkbox value={2}>深圳</Checkbox>
      <Checkbox value={3}>成都</Checkbox>
    </CheckboxGroup>
  ))

  .add('自定义每一行的列数，如定义 col = 3', () => (
    <CheckboxGroup
      name='citys'
      inline
      col={3}
      value={example3.citys}
      onChange={v => example3.setCitys(v)}
    >
      <Checkbox value={1} block>
        1(设置block属性单独成行)
      </Checkbox>
      <Checkbox value={2}>2</Checkbox>
      <Checkbox value={3}>3</Checkbox>
      <Checkbox value={4}>4</Checkbox>
      <Checkbox value={5}>5</Checkbox>
      <Checkbox value={6}>6</Checkbox>
      <Checkbox value={7}>7</Checkbox>
    </CheckboxGroup>
  ))

  .add('定义CheckboxGroup value，先指定选中多选框', () => (
    <CheckboxGroup
      name='citys'
      inline
      value={example4.citys}
      onChange={v => example4.setCitys(v)}
    >
      <Checkbox value={1}>广州</Checkbox>
      <Checkbox value={2}>深圳</Checkbox>
      <Checkbox value={3}>成都</Checkbox>
    </CheckboxGroup>
  ))
