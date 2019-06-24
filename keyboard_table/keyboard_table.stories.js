import React from 'react'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'
import _ from 'lodash'
import KeyboardTableWrap from './wrap'
import KeyboardTableCellInput from './cell_input'

const store = observable({
  list: [{ name: '', age: '' }, { name: '', age: '' }],
  setList() {
    this.list.push({ name: '', age: '' })
  },
  setName(index, name) {
    this.list[index].name = name
  },
  setAge(index, age) {
    this.list[index].age = age
  }
})

storiesOf('快速录入|KeyboardTable', module).add('default', () => (
  <KeyboardTableWrap
    id='test'
    columnKeys={['name', 'age']}
    listLength={store.list.length}
    onAddRow={() => store.setList()}
  >
    {_.map(store.list.slice(), (v, index) => (
      <div key={index}>
        <KeyboardTableCellInput
          cellKey={`${index}_name`}
          type='text'
          value={v.name}
          onChange={e => store.setName(index, e.target.value)}
          onChangeValue={value => store.setName(index, value)}
        />
        <span>啦啦啦</span>
        <KeyboardTableCellInput
          cellKey={`${index}_age`}
          value={v.age}
          onChange={e => store.setAge(index, e.target.value)}
          onChangeValue={value => store.setName(index, value)}
        />
      </div>
    ))}
  </KeyboardTableWrap>
))
