import React from 'react'
import { Flex } from '../../../src'
import PropTypes from 'prop-types'

const BatchActionBar = props => {
  const { isSelectAll, count, batchActions, toggleSelectAll } = props
  return (
    <Flex alignCenter>
      {isSelectAll ? (
        <button
          className='btn btn-primary gm-margin-left-20'
          onClick={() => toggleSelectAll(false)}
        >
          勾选当前页内容
        </button>
      ) : (
        <button
          className='btn btn-primary gm-margin-left-20'
          onClick={() => toggleSelectAll(true)}
        >
          勾选所有页内容
        </button>
      )}
      {count && (
        <div className='gm-text-bold gm-margin-left-20'>
          已选择<span className='text-primary'>{count}</span>项
        </div>
      )}
      {batchActions.length && <div className='gm-margin-left-20'>|</div>}
      {batchActions.map(o => (
        <div
          onClick={o.onClick}
          className='gm-text-hover-primary gm-cursor gm-text-bold'
          style={{ marginLeft: '30px' }}
          key={o.name}
        >
          {o.name}
        </div>
      ))}
    </Flex>
  )
}

BatchActionBar.propTypes = {
  isSelectAll: PropTypes.bool.isRequired,
  count: PropTypes.number,
  batchActions: PropTypes.array,
  toggleSelectAll: PropTypes.func
}

BatchActionBar.defaultProps = {
  toggleSelectAll: () => {}
}

export default BatchActionBar
