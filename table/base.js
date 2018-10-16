import React from 'react'
import classNames from 'classnames'
import { getLocale } from '../src/locales'
import _ from 'lodash'
import { SortHeader } from './util'
import ReactTable from 'react-table'
import { findDOMNode } from 'react-dom'
import Emitter from '../src/emitter'

class BaseTable extends React.Component {
  constructor () {
    super()
    this.throttleDoScroll = _.throttle(this.doScroll, 200)
  }

  doScroll = () => {
    Emitter.emit(Emitter.TYPE.TABLE_SCROLL)
  }

  componentDidMount () {
    findDOMNode(this).getElementsByClassName('rt-table')[0].addEventListener('scroll', this.throttleDoScroll)
  }

  componentWillUnmount () {
    findDOMNode(this).getElementsByClassName('rt-table')[0].removeEventListener('scroll', this.throttleDoScroll)
  }

  processItem = item => {
    let Cell = item.Cell
    if (!Cell) {
      Cell = row => {
        if (row.value === undefined || row.value === null || row.value === '') {
          return <span className='gm-text-desc'>-</span>
        }
        return row.value
      }
    }

    let Header = item.Header
    if (_.isString(Header) && item.sortable) {
      Header = <SortHeader>{Header}</SortHeader>
    }

    return {
      ...item,
      Header,
      sortable: !!item.sortable,
      // 有意义，如果是 undefined, 则赋值 undefined，覆盖默认值 100
      minWidth: item.minWidth,
      Cell
    }
  }

  render () {
    let {
      data,
      columns,
      defaultPageSize,
      showPagination,
      className,
      style,
      ...rest
    } = this.props

    const newColumns = _.map(columns, v => {
      // groups 的形式
      if (v.columns) {
        const columns = _.map(v.columns, vv => this.processItem(vv))

        return {
          ...v,
          columns
        }
      } else {
        return this.processItem(v)
      }
    })

    const newStyle = Object.assign({}, style)

    if (newStyle.height) {
      newStyle.overflow = 'auto'
    }

    return (
      <ReactTable
        {...rest}
        columns={newColumns}
        data={data}
        defaultPageSize={defaultPageSize}
        pageSize={Math.max(data.length, 1)}
        className={classNames('gm-react-table -striped -highlight', className)}
        style={newStyle}
        showPagination={showPagination}
        ref={ref => (this.baseTable = ref)}
      />
    )
  }
}

BaseTable.defaultProps = {
  showPagination: false,
  keyField: 'value',
  defaultPageSize: 10,
  noDataText: getLocale('table', 'noDataText'),
  loadingText: getLocale('table', 'loadingText')
}

export default BaseTable
