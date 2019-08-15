import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Storage, Modal } from '../../../src'
import SVGSetting from '../../../svg/success-circle-o.svg'
import { getColumnKey } from '../../util'
import Table from '../../table'
import { devWarn } from '../../../src/util'
import DiyTableModal from './diy_table_modal'

function generateDiyColumns(propsColumns, mixColumns) {
  return _.map(propsColumns, column => {
    const key = getColumnKey(column)
    // 能获取 key 才可能使用 diy
    if (key === null) {
      return column
    }

    // 默认显示和打开 diyEnable
    const { show = true, diyEnable = true } = column
    const newColumn = {
      ...column,
      key, // 把key记录下来,作为这个列的唯一标识
      show,
      diyEnable
    }

    // localstorage中储存的列
    const localItem = _.find(mixColumns, v => v.key === key)
    // 只有diyEnable = true 的列才使用 本地存储的show值
    if (diyEnable && localItem) {
      newColumn.show = localItem.show
    }
    return newColumn
  })
}

function getStorageColumns(columns) {
  // 过滤多余数据，避免复杂数据出现JSON循环引用报错问题
  return _.map(columns, col => {
    const { key, show, diyEnable } = col
    return { key, show, diyEnable }
  })
}

function diyTableHOC(Component) {
  class DiyTable extends React.Component {
    constructor(props) {
      super(props)
      // 从localStorage拿到columns
      const localColumns = Storage.get(props.id) || []

      this.state = {
        columns: generateDiyColumns(props.columns, localColumns)
      }

      // 检测
      devWarn(() => {
        _.each(props.columns, column => {
          const key = getColumnKey(column)
          if (key && column.diyEnable !== false) {
            if (!_.isString(column.Header) && !column.diyItemText) {
              console.error('column need diyItemText', column)
            }
            if (!column.diyGroupName) {
              console.error('column need diyGroupName', column)
            }
          }
        })
      })
    }

    handleColumnsSave = newColumns => {
      this.setState({ columns: newColumns })
      Storage.set(this.props.id, getStorageColumns(newColumns))
    }

    // 显示diy选择框  注:暴露给外部使用
    handleModalShow = () => {
      Modal.render({
        disableMaskClose: true,
        title: '表头设置',
        noContentPadding: true,
        size: 'lg',
        onHide: Modal.hide,
        children: (
          <DiyTableModal
            diyGroupSorting={this.props.diyGroupSorting}
            columns={this.state.columns}
            onSave={this.handleColumnsSave}
          />
        )
      })
    }

    render() {
      const { columns } = this.state
      return (
        <>
          <Component
            {...this.props}
            columns={[
              {
                Header: () => (
                  <SVGSetting
                    style={{ cursor: 'pointer' }}
                    onClick={this.handleModalShow}
                  />
                ),
                maxWidth: 30,
                accessor: '_setting', // 不重要,随便写
                Cell: () => null
              },
              ...columns
            ]}
          />
        </>
      )
    }
  }

  DiyTable.propTypes = {
    id: PropTypes.string.isRequired,
    diyGroupSorting: PropTypes.array.isRequired,
    ...Table.propTypes
  }

  return DiyTable
}

export default diyTableHOC
