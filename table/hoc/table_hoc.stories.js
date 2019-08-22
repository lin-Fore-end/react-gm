import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Table,
  fixedColumnsTableHOC,
  diyTableHOC,
  selectTableHOC,
  expandTableHOC,
  SubTable,
  TableUtil
} from '../index'
import { observable } from 'mobx/lib/mobx'
import _ from 'lodash'

const FixedColumnsTable = fixedColumnsTableHOC(Table)
const DiyTable = diyTableHOC(Table)
const SelectTable = selectTableHOC(Table)
const ExpandTable = expandTableHOC(Table)

const isDisable = ({ total_money }) => total_money === 111 // 不能选的行

const store = observable({
  data: [
    {
      total_money: 111,
      id: 'T5991-JHD-2018-07-25-00027',
      sku_money: '2390.00',
      supplier_customer_id: 'LDP20180117',
      submit_time: '2018-07-25',
      status: 2,
      supplier_name: '222xxx',
      date_time: '2018-07-25',
      delta_money: 0,
      settle_supplier_id: 'T10953',
      address: null,
      subTable: [{ id: 1, name: 'a' }, { id: 2, name: 2 }]
    },
    {
      total_money: 176,
      id: 'T5991-JHD-2018-07-25-00026',
      sku_money: '176.00',
      supplier_customer_id: 'A2926',
      submit_time: '2018-07-26',
      status: 2,
      supplier_name: '段虎',
      date_time: '2018-07-25',
      delta_money: 0,
      settle_supplier_id: 'T14319',
      address: {
        value: 9,
        text: '西乡9'
      },
      subTable: [{ id: 1, name: 'a' }, { id: 2, name: 2 }]
    },
    {
      total_money: 279,
      id: 'T5991-JHD-2018-07-25-00025',
      sku_money: '279.02',
      supplier_customer_id: 'sc215',
      submit_time: '2018-07-27',
      status: 2,
      supplier_name: '黑市桥蔬菜批发',
      date_time: '2018-07-25',
      delta_money: -2.0,
      settle_supplier_id: 'T13324',
      address: {
        value: 4,
        text: '宝安'
      },
      subTable: [{ id: 1, name: 'a' }, { id: 2, name: 2 }]
    }
  ],
  sortTimeType: 'asc',
  isSelectAllPage: false,
  selected: [],
  sortTime() {
    this.data = _.sortBy(this.data, 'submit_time')
    if (this.sortTimeType === 'asc') {
      this.data = this.data.reverse()
      this.sortTimeType = 'desc'
    } else {
      this.sortTimeType = 'asc'
    }
  },
  toggleIsSelectAllPage(bool) {
    this.isSelectAllPage = bool
  },
  setSelect(selected) {
    if (this.isSelectAllPage && selected.length !== this.data.length) {
      this.isSelectAllPage = false
    }

    this.selected = selected
  },
  toggleSelectAll(isSelectedAll) {
    if (isSelectedAll) {
      this.selected = this.data.filter(v => !isDisable(v)).map(v => v.id)
    } else {
      this.selected.clear()
    }
  }
})

storiesOf('表格|Table HOC', module)
  .add('优先级', () => null, {
    info: {
      text: `
HOC 可以相互组合使用，但是请注意使用顺序
- fixed columns。可能会改变 columns 的顺序。
- diy。会改变原有 columns 的 show 熟悉，影响在 页面上的展现。一般最后才 hoc。
- expand。会在最前面增加一个 column 用户 expand.
`
    }
  })
  .add(
    'fixed columns',
    () => (
      <FixedColumnsTable
        data={store.data}
        columns={[
          {
            Header: '建单时间',
            accessor: 'submit_time',
            // 提供 fixed and width
            fixed: 'left',
            width: 100
          },
          {
            Header: '入库单号',
            accessor: 'id',
            fixed: 'left',
            // 其他任意，一般都提供 width or minWidth，否则没法滚动。 没意义
            width: 120
          },
          {
            Header: '供应商信息',
            accessor: 'supplier_name',
            minWidth: 200
          },
          {
            Header: '入库金额',
            accessor: 'total_money',
            minWidth: 200
          },
          {
            Header: '单据状态',
            accessor: 'status',
            minWidth: 200
          },
          {
            Header: 'sku_money',
            accessor: 'sku_money',
            minWidth: 200
          },
          {
            Header: 'supplier_customer_id',
            accessor: 'supplier_customer_id',
            minWidth: 200
          },
          {
            Header: 'date_time',
            accessor: 'date_time',
            width: 120,
            fixed: 'right'
          }
        ]}
      />
    ),
    {
      info: {
        text: `
使用
\`const FixedColumnsTable = fixedColumnsTableHOC(Table)\`

在需要 fixed 的 column 提供 fixed 和 width，其中 fixed 两个值 
\`left\` \`right\`

其他 column 最好提供 width or minWidth，否则会出现很诡异的被压缩问题或者没法滚动问题

具体用法请查看 story 源码
`
      }
    }
  )
  .add('diy', () => {
    return (
      <div>
        <DiyTable
          id='diy-table'
          data={store.data}
          diyGroupSorting={['基础字段', '时间和人员', '操作']} // 组的排序,必须diyGroupName一一对应
          columns={[
            {
              Header: '入库单号',
              accessor: 'id',
              diyEnable: false, // 是否可以自定义,不写的话默认为true
              show: false, // 是否展示当前列,不写的话默认为true
              diyGroupName: '基础字段', // 组名
              __sort_number: 400 // 列初始顺序,序号约定从100开始, 100, 200, 300, ...如此类推
            },
            {
              Header: '价格',
              accessor: 'sku_money',
              diyEnable: false,
              diyGroupName: '基础字段',
              __sort_number: 100
            },
            {
              Header: '状态',
              accessor: 'status',
              diyGroupName: '基础字段',
              __sort_number: 300
            },
            {
              Header: '供应商户ID',
              accessor: 'supplier_customer_id',
              diyGroupName: '基础字段',
              __sort_number: 200
            },
            {
              Header: '供应商信息',
              accessor: 'supplier_name',
              diyGroupName: '基础字段'
            },
            ..._.map(Array(5), (e, i) => ({
              Header: '删除项目' + i,
              accessor: 'date_time' + i,
              diyEnable: true,
              show: true,
              diyGroupName: '时间和人员'
            })),
            {
              Header: '建单时间',
              accessor: 'settle_supplier_id',
              diyEnable: true,
              diyGroupName: '时间和人员'
            },
            {
              Header: TableUtil.OperationHeader,
              diyItemText: '操作', // 操作栏要提供diyItemName
              id: 'action', // id作为唯一标识
              diyGroupName: '操作',
              diyEnable: false,
              Cell: () => (
                <TableUtil.OperationCell>
                  <a href='#'>删除</a>
                </TableUtil.OperationCell>
              )
            }
          ]}
        />
      </div>
    )
  })
  .add('select', () => (
    <SelectTable
      style={{ marginTop: '100px' }}
      data={store.data}
      columns={[
        {
          Header: '建单时间',
          accessor: 'submit_time'
        },
        {
          Header: '入库单号',
          accessor: 'id'
        },
        {
          Header: '供应商信息',
          accessor: 'supplier_name'
        }
      ]}
      keyField='id'
      isSelectorDisable={row => console.log(row) || isDisable(row)}
      onSelectAll={isSelectedAll => store.toggleSelectAll(isSelectedAll)}
      batchActionBar={
        <TableUtil.BatchActionBar
          toggleSelectAll={bool => store.toggleIsSelectAllPage(bool)}
          batchActions={[
            {
              name: '批量删除',
              onClick: () => window.alert('批量删除' + store.selected.join(','))
            },
            {
              name: '批量修改单价',
              onClick: () =>
                window.alert('批量修改这些' + store.selected.join(','))
            }
          ]}
          count={store.isSelectAllPage ? 100 : store.selected.length}
          isSelectAll={store.isSelectAllPage}
        />
      }
      selected={store.selected}
      onSelect={(selected, curKey) =>
        console.log(curKey) || store.setSelect(selected)
      }
    />
  ))
  .add('expand', () => (
    <ExpandTable
      data={store.data}
      columns={[
        {
          Header: '建单时间',
          accessor: 'submit_time'
        },
        {
          Header: '入库单号',
          accessor: 'id'
        },
        {
          Header: '供应商信息',
          accessor: 'supplier_name'
        }
      ]}
      SubComponent={item => (
        <SubTable
          data={item.original.subTable}
          columns={[
            { Header: '序号', accessor: 'id' },
            { Header: '名字', accessor: 'name' }
          ]}
        />
      )}
    />
  ))
