import React from 'react'
import classnames from 'classnames'
import Table from './base'

const SubTable = props => {
  const { columns, className, ...rest } = props
  return (
    <Table
      {...rest}
      columns={[
        {
          Header: '',
          maxWidth: 30,
          accessor: '__null', // 不重要,随便写
          Cell: () => null // 只是用来占据空间
        },
        ...columns
      ]}
      className={classnames('gm-react-sub-table', className)}
    />
  )
}

SubTable.propTypes = Table.propTypes

export default SubTable
