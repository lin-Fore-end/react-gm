import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'

/**
 * Checkbox -- 多选框
 *
 * 主要配合 CheckboxGroup 一起使用，进行多项选择
 */

const Checkbox = props => {
  const {
    value,
    checked,
    onChange,
    children,
    name,
    inline,
    block,
    disabled,
    col,
    style,
    className,
    ...rest
  } = props

  const inner = (
    <label
      {...rest}
      style={{
        width: col ? `${100 / col}%` : 'auto',
        ...style
      }}
      className={classNames(
        'gm-checkbox',
        {
          'checkbox-inline': inline,
          'gm-block': block,
          disabled
        },
        className
      )}
    >
      <input
        type='checkbox'
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span />
      {children}
    </label>
  )

  if (!inline) {
    return <div>{inner}</div>
  }

  return inner
}

Checkbox.propTypes = {
  /** 表单值 */
  value: PropTypes.any,
  /** 选择变化时的回调函数，传入参数为 Checkbox value */
  onChange: PropTypes.func,

  /** 定义多选框是否单独成行 */
  block: PropTypes.bool,
  /** 定义每行的列数 */
  col: PropTypes.number,

  /** 由CheckboxGroup 传下来，表单名 */
  name: PropTypes.string,
  /** 由CheckboxGroup 传下来，指定当前是否选中, 由 CheckboxGroup value 是否包含 Checkbox value 进行判断 */
  checked: PropTypes.bool,
  /** 由CheckboxGroup 传下来，定义行内排列 */
  inline: PropTypes.bool,

  /** 定义不可选状态 */
  disabled: PropTypes.bool,

  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

Checkbox.defaultProps = {
  checked: false,
  onChange: _.noop
}

export default Checkbox
