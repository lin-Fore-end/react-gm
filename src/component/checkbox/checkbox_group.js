import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'

/**
 * CheckboxGroup -- 多选框组合
 *
 * 主要配合 Checkbox 一起使用
 */
const CheckboxGroup = props => {
  const {
    onChange,
    value,
    inline,
    className,
    children,
    name,
    col,
    ...rest
  } = props

  const handleChange = checkboxValue => {
    if (value.indexOf(checkboxValue) > -1) {
      onChange(_.without(value, checkboxValue))
    } else {
      onChange([...value, checkboxValue])
    }
  }

  // 获取 checkbox 列表
  const childList = React.Children.toArray(children)

  return (
    <div
      {...rest}
      className={classNames('gm-checkbox-group checkbox', className)}
    >
      {_.map(childList, (child, i) => {
        return React.cloneElement(child, {
          index: i,
          key: i,
          checked: value.indexOf(child.props.value) > -1,
          inline,
          onChange: () => handleChange(child.props.value),
          name,
          col
        })
      })}
    </div>
  )
}

CheckboxGroup.propTypes = {
  /** 表单名 */
  name: PropTypes.string.isRequired,
  /** 当前选择的值数组 */
  value: PropTypes.array.isRequired,
  /** 选择函数，传入参数为 CheckBox value 数组 */
  onChange: PropTypes.func,
  /** 定义行内排列 */
  inline: PropTypes.bool,
  /** 定义多选框的间隔大小，以列数的大小进行定义 */
  col: PropTypes.number,

  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

CheckboxGroup.defaultProps = {
  inline: false,
  value: [],
  onChange: _.noop
}

export default CheckboxGroup
