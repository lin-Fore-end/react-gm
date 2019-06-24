import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  IdContext,
  KEYBOARD_TABLE_DIRECTION,
  KEYBOARD_TABLE_ONFOCUS,
  KEYBOARD_TABLE_ENTER,
  KEYBOARD_TABLE_TAB,
  undoManager
} from './util'

const getKey = cellKey => {
  const index = cellKey.indexOf('_')
  const rowKey = parseInt(cellKey.slice(0, index), 10)
  const columnKey = cellKey.slice(index + 1)
  return { columnKey, rowKey }
}

/**
 * 包裹 Table，使 Table 具有键盘响应能力
 *
 * Wrap 负责调度，接收来自 Cell 的操作反馈，然后做出后续动作
 * Cell 监听键盘事件，把 方向、Enter、Tab 反馈给 Wrap
 * Wrap 做出动作，其中包括 focus 到 Cell
 * */
const KeyboardTableWrap = props => {
  const { id, children, onAddRow, columnKeys, listLength } = props

  // 处理 focus
  const doFocusWithColumnRowKey = (rowKey, columnKey) => {
    doFocus(`${rowKey}_${columnKey}`)
  }
  const doFocus = key => {
    window.dispatchEvent(
      new window.CustomEvent(KEYBOARD_TABLE_ONFOCUS + id, {
        detail: {
          cellKey: key
        }
      })
    )
  }

  // 处理方向
  const toDirectionRight = (rowKey, columnKey) => {
    const columnIndex = columnKeys.indexOf(columnKey)
    // 如果不是最后一列
    if (columnIndex < columnKeys.length - 1) {
      doFocusWithColumnRowKey(rowKey, columnKeys[columnIndex + 1])
    }
  }
  const doDirectionDown = (rowKey, columnKey) => {
    // 往下一个
    if (rowKey < listLength - 1) {
      doFocusWithColumnRowKey(rowKey + 1, columnKey)
    }
    // 最后一行
    else if (rowKey === listLength - 1) {
      onAddRow()
      // TODO 界面 render 后要 focus，不知道怎么搞，先 setTimeout
      setTimeout(() => {
        // 去到第一列
        doFocusWithColumnRowKey(rowKey + 1, columnKeys[0])
      }, 10)
    }
  }
  const doDirectionLeft = (rowKey, columnKey) => {
    const columnIndex = columnKeys.indexOf(columnKey)
    // 如果不是第一列
    if (columnIndex > 0) {
      doFocusWithColumnRowKey(rowKey, columnKeys[columnIndex - 1])
    }
  }
  const doDirectionUp = (rowKey, columnKey) => {
    // 往上一个
    if (rowKey > 0) {
      doFocusWithColumnRowKey(rowKey - 1, columnKey)
    }
    // 循环到最后一个
    else if (rowKey === 0) {
      doFocusWithColumnRowKey(listLength - 1, columnKey)
    }
  }

  // 处理方向事件, 依赖 listLength 的变动
  useEffect(() => {
    const handleDirection = event => {
      console.log('KeyboardTableWrap handleDirection', event.detail)
      const { cellKey, direction } = event.detail
      const { rowKey, columnKey } = getKey(cellKey)

      if (direction === 'right') {
        toDirectionRight(rowKey, columnKey)
      } else if (direction === 'down') {
        doDirectionDown(rowKey, columnKey)
      } else if (direction === 'left') {
        doDirectionLeft(rowKey, columnKey)
      } else if (direction === 'up') {
        doDirectionUp(rowKey, columnKey)
      }
    }

    window.addEventListener(KEYBOARD_TABLE_DIRECTION + id, handleDirection)

    return () => {
      window.removeEventListener(KEYBOARD_TABLE_DIRECTION + id, handleDirection)
    }
  }, [listLength])

  // 处理 Enter 依赖 listLength 的变动
  useEffect(() => {
    const handleEnter = event => {
      console.log('KeyboardTableWrap handleEnter', event.detail)
      const { cellKey } = event.detail
      const { rowKey, columnKey } = getKey(cellKey)
      const columnIndex = columnKeys.indexOf(columnKey)

      // 如果不是最后一列
      if (columnIndex < columnKeys.length - 1) {
        doFocusWithColumnRowKey(rowKey, columnKeys[columnIndex + 1])
      }
      // 最后一列了
      else if (columnIndex === columnKeys.length - 1) {
        // 如果不是最后一行
        if (rowKey < listLength - 1) {
          doFocusWithColumnRowKey(rowKey + 1, columnKeys[0])
        }
        // 最后一行了
        else if (rowKey === listLength - 1) {
          onAddRow()
          // TODO 界面 render 后要 focus，不知道怎么搞，先 setTimeout
          setTimeout(() => {
            // 去到第一列
            doFocusWithColumnRowKey(rowKey + 1, columnKeys[0])
          }, 10)
        }
      }
    }

    window.addEventListener(KEYBOARD_TABLE_ENTER + id, handleEnter)

    return () => {
      window.removeEventListener(KEYBOARD_TABLE_ENTER + id, handleEnter)
    }
  }, [listLength])

  // 处理 Tab 依赖 listLiength 的变动
  useEffect(() => {
    const handleTab = event => {
      console.log('KeyboardTableWrap handleTab', event.detail)
      const { cellKey } = event.detail
      const { rowKey, columnKey } = getKey(cellKey)

      // 目前和右一样，可这样简单处理
      toDirectionRight(rowKey, columnKey)
    }

    window.addEventListener(KEYBOARD_TABLE_TAB + id, handleTab)

    return () => {
      window.removeEventListener(KEYBOARD_TABLE_TAB + id, handleTab)
    }
  }, [listLength])

  return (
    <IdContext.Provider value={id}>
      <button onClick={() => undoManager.undo()}>undo</button>
      <button onClick={() => undoManager.redo()}>redo</button>
    {children}
  </IdContext.Provider>
  )
}

KeyboardTableWrap.propTypes = {
  /** 通过 id 来确定本单元格内通信，避免多表格时候混了。请确保 id 唯一 */
  id: PropTypes.string.isRequired,
  /** Wrap 需要知道字段集合，以便能找到相应的单元格。请确保表格的顺序一样 */
  columnKeys: PropTypes.array.isRequired,
  /** Wrap 需要知道有多少行，以便能找到相应的单元格，同时必要时会触发 onAddRow 告知调用方需要增加一行数据 */
  listLength: PropTypes.number.isRequired,
  /** 增加一行数据 */
  onAddRow: PropTypes.func.isRequired
}

export default KeyboardTableWrap
