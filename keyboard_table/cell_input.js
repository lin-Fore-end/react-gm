import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import KeyboardTableCell from './cell'

// TODO number 类型

/** 见组件名 */
const KeyboardTableCellInput = props => {
  const {
    cellKey,
    value,
    onChange,
    onChangeValue,
    className,
    onKeyDown,
    ...rest
  } = props

  const cellRef = useRef(null)
  const inputRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.focus()
  }

  const handleKeyDown = event => {
    console.log('handleKeyDown', event.key)

    if (onKeyDown) {
      onKeyDown(event)
    }

    if (KeyboardTableCell.isDirection(event)) {
      // TODO 文本内
      cellRef.current.apiDoDirectionByEventKey(event.key)
    } else if (KeyboardTableCell.isTab(event)) {
      // 要阻止默认的
      event.preventDefault()
      cellRef.current.apiDoTab()
    } else if (KeyboardTableCell.isEnter(event)) {
      // 要阻止默认的?
      // event.preventDefault()
      cellRef.current.apiDoEnter()
    }
  }

  const handleChange = event => {
    const oldValue = value
    const nowValue = event.target.value
    cellRef.current.apiAddUndo({
      undo: () => {
        onChangeValue(oldValue)
      },
      redo: () => {
        onChangeValue(nowValue)
      }
    })

    onChange(event)
  }

  return (
    <KeyboardTableCell ref={cellRef} cellKey={cellKey} onFocus={handleFocus}>
      <input
        {...rest}
        ref={inputRef}
        value={value}
        onChange={handleChange}
        className={classNames('gm-keyboard-table-cell', className)}
        onKeyDown={handleKeyDown}
      />
    </KeyboardTableCell>
  )
}

KeyboardTableCellInput.propTypes = {
  cellKey: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  onChangeValue: PropTypes.string.isRequired,
  className: PropTypes.string,
  onKeyDown: PropTypes.func
}

export default KeyboardTableCellInput
