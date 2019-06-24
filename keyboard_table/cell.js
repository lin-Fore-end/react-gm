import React from 'react'
import PropTypes from 'prop-types'
import {
  IdContext,
  KEYBOARD_TABLE_ONFOCUS,
  KEYBOARD_TABLE_DIRECTION,
  KEYBOARD_TABLE_ENTER,
  KEYBOARD_TABLE_TAB,
  undoManager
} from './util'

/**
 * Cell 和 Wrap 配合使用，使单元格具有响应键盘能力
 *
 * 使用：
 * - 实现 onFocus
 * - 监听 keydown，并根据自身需要处理 keydown 事件，每个组件都会不太一样
 * - 把动作 方向、Tab、Enter 通过 Cell 提供的方法 refCell.current.apiDoXXX 反馈给 Cell。具体方法见代码
 * */
class KeyboardTableCell extends React.Component {
  dispatch = (eventName, detail) => {
    const { cellKey } = this.props
    const id = this.context

    window.dispatchEvent(
      new window.CustomEvent(eventName + id, {
        detail: {
          ...detail,
          cellKey
        }
      })
    )
  }

  apiDoDirection = direction => {
    this.dispatch(KEYBOARD_TABLE_DIRECTION, { direction })
  }

  apiDoDirectionByEventKey = eventKey => {
    this.apiDoDirection(eventKey.slice(5).toLowerCase())
  }

  apiDoTab = () => {
    this.dispatch(KEYBOARD_TABLE_TAB)
  }

  apiDoEnter = () => {
    this.dispatch(KEYBOARD_TABLE_ENTER)
  }

  apiAddUndo = actions => {
    undoManager.add(actions)
  }

  handleFocus = event => {
    const { onFocus, cellKey } = this.props

    if (event.detail.cellKey !== cellKey) {
      return
    }

    console.log('KeyboardTableCell handleFocus', event.detail)

    onFocus()
  }

  componentDidMount() {
    const id = this.context
    window.addEventListener(KEYBOARD_TABLE_ONFOCUS + id, this.handleFocus)
  }

  componentWillUnmount() {
    const id = this.context
    window.removeEventListener(KEYBOARD_TABLE_ONFOCUS + id, this.handleFocus)
  }

  render() {
    const { children, cellKey } = this.props
    return React.cloneElement(children, {
      'data-cell-key': cellKey
    })
  }
}

// 提供些便捷方法
KeyboardTableCell.isDirection = event => {
  return (
    event.key === 'ArrowUp' ||
    event.key === 'ArrowRight' ||
    event.key === 'ArrowDown' ||
    event.key === 'ArrowLeft'
  )
}

KeyboardTableCell.isTab = event => {
  return event.key === 'Tab'
}

KeyboardTableCell.isEnter = event => {
  return event.key === 'Enter'
}

KeyboardTableCell.contextType = IdContext
KeyboardTableCell.propTypes = {
  /** Cell 的身份表示，让 Wrap 方便找到 */
  cellKey: PropTypes.string.isRequired,
  /** Wrap 要 focus 到单元格的时候会触发 onFocus，请实现此功能 */
  onFocus: PropTypes.func.isRequired
}

export default KeyboardTableCell
