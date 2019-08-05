import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import Popover from '../popover'
import Selection from '../selection'
import List from '../list'

const findItemByValFromChildren = (children, val) => {
  children = React.Children.toArray(children)
  return _.find(children, el => el.props.value === val)
}

class Select extends React.Component {
  refPopup = React.createRef()

  handleChange = value => {
    const { onChange } = this.props

    this.refPopup.current.apiDoSetActive(false)

    onChange(value)
  }

  render() {
    const {
      data,
      value,
      onChange,
      children,
      disabled,
      className,
      clean,
      ...rest
    } = this.props

    let selected
    let newData

    // 兼容之前的用法
    if (children) {
      const option = findItemByValFromChildren(children, value)
      if (option) {
        selected = {
          value: option.props.value,
          text: option.props.children
        }
      }

      newData = React.Children.map(children, child => ({
        value: child.props.value,
        text: child.props.children,
        disabled: child.props.disabled
      }))
    } else {
      newData = data
      selected = _.find(newData, v => v.value === value)
    }

    const popup = (
      <List
        data={newData}
        selected={value}
        onSelect={this.handleChange}
        style={{
          maxHeight: '250px'
        }}
      />
    )

    const style = {}
    if (clean) {
      style.border = '1px solid transparent'
    }

    return (
      <Popover
        ref={this.refPopup}
        type='click'
        popup={popup}
        disabled={disabled}
      >
        <Selection
          {...rest}
          selected={selected}
          onSelect={onChange}
          disabled={disabled}
          className={classNames(`gm-select`, className)}
          style={style}
        />
      </Popover>
    )
  }
}

Select.displayName = 'Select'

Select.propTypes = {
  /** [{text, value, disabled}, {text, value}] */
  data: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  clean: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Select
