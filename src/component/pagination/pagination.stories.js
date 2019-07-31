import React from 'react'
import { storiesOf } from '@storybook/react'
import Pagination from './pagination'
import { withKnobs } from '@storybook/addon-knobs'
import { observable } from 'mobx'
import PaginationFuck from '../../deprecated/pagination_fuck/pagination_fuck'

const store = observable({
  data: {
    count: 159,
    offset: 0,
    limit: 10
  },
  setData(data) {
    console.log(data)
    this.data = {
      ...this.data,
      ...data
    }
  },
  noCountData: {
    offset: 0,
    limit: 10
  },
  setNoCountData(data) {
    console.log(data)
    this.noCountData = {
      ...this.noCountData,
      ...data
    }
  }
})

const fuckStore = observable({
  data: {},
  count: 0,
  setData(data) {
    console.log(data)
    this.data = {
      ...this.data,
      ...data
    }
  }
})

// setTimeout(() => {
//   fuckStore.setData({
//     page_obj: 'page_obj',
//     peek: 55,
//     more: true
//   })
// }, 200)

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .add('分页规范', () => (
    <a href='https://www.yuque.com/iyum9i/cudrs0/etfogz'>此分页规范详情</a>
  ))
  .add('default', () => (
    <Pagination data={store.data} onChange={data => store.setData(data)} />
  ))
  .add('disabledCount', () => (
    <Pagination
      data={store.data}
      onChange={data => store.setData(data)}
      disabledCount
    />
  ))
  .add('旧用法 with count', () => (
    <Pagination data={store.data} toPage={data => store.setData(data)} />
  ))
  .add('旧用法 without count', () => (
    <Pagination
      data={store.noCountData}
      toPage={data => store.setNoCountData(data)}
    />
  ))
  .add('废弃 PaginationFuck', () => {
    return (
      <div>
        {/* 带分页 */}
        <PaginationFuck
          pagination={fuckStore.data}
          onChange={data => fuckStore.setData(data)}
        />
        {/* 不带分页 */}
        <PaginationFuck
          pagination={fuckStore.data}
          onChange={data => fuckStore.setData(data)}
          showCount={false}
        />
      </div>
    )
  })
