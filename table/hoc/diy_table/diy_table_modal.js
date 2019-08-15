import React, { useState } from 'react'
import { Flex, Modal } from '../../../src'
import _ from 'lodash'
import Selector from './selector'
import SortList from './sort_list'
import PropTypes from 'prop-types'

const DiyTableModal = ({ columns, onSave, diyGroupSorting }) => {
  const [diyCols, setDiyCols] = useState(columns)
  const [showCols, setShowCols] = useState(_.filter(columns, 'show'))

  const onColsChange = cols => {
    setDiyCols(cols)
    setShowCols(_.filter(cols, 'show'))
  }

  const onSortColsChange = cols => {
    setShowCols(cols)
  }

  const onColsRemove = key => {
    const showColsCopy = _.cloneDeep(showCols)
    _.remove(showColsCopy, o => o.key === key)
    setShowCols(showColsCopy)

    const index = _.findIndex(diyCols, o => o.key === key)
    const colsCopy = _.cloneDeep(diyCols)
    colsCopy[index].show = false
    setDiyCols(colsCopy)
  }

  return (
    <div className='gm-react-table-diy-modal'>
      <Flex>
        <div className='gm-react-table-diy-modal-selector'>
          <div className='gm-border-bottom gm-react-table-diy-modal-title'>
            可选字段
          </div>
          <Selector
            diyGroupSorting={diyGroupSorting}
            cols={diyCols}
            onColsChange={onColsChange}
          />
        </div>
        <div className='gm-react-table-diy-modal-sort-list'>
          <div className='gm-border-bottom gm-react-table-diy-modal-title'>
            当前选定的字段
          </div>
          <SortList
            cols={showCols}
            onColsChange={onSortColsChange}
            onColsRemove={onColsRemove}
          />
        </div>
      </Flex>
      <Flex justifyEnd className='gm-padding-10'>
        <button
          className='btn btn-primary btn-sm'
          onClick={() => {
            onSave(diyCols)
            Modal.hide()
          }}
        >
          保存
        </button>
        <div className='gm-gap-10' />
        <button className='btn btn-default btn-sm' onClick={Modal.hide}>
          取消
        </button>
      </Flex>
    </div>
  )
}

DiyTableModal.propTypes = {
  columns: PropTypes.array.isRequired,
  diyGroupSorting: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired
}

export default DiyTableModal
