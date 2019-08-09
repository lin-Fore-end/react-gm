import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../flex'
import _ from 'lodash'
import Validator from '../../validator'
import { withWrapContext, colWidth } from './util'

const FormControl = ({ children }) => {
  const { className } = children.props

  // 文件类型特殊
  if (
    (children.type === 'input' && children.props.type !== 'file') ||
    children.type === 'textarea' ||
    children.type.displayName === 'select' ||
    children.type.displayName === 'InputNumber' ||
    children.type.displayName === 'InputNumberV2'
  ) {
    return React.cloneElement(children, {
      className: classNames('form-control', className)
    })
  }

  return children
}

// 这种方式才会 storybook 才会显示 props 文档
const FormItem = withWrapContext(
  ({
    label,
    labelWidth,
    required,
    canValidate,
    validate,
    error,
    help,
    unLabelTop,
    className,
    children,
    col,
    style,
    ...rest
  }) => {
    let hasLabelSwitchPaddingTop = false
    const _style = Object.assign(
      {},
      style,
      col ? { width: colWidth * col } : {}
    )
    if (canValidate && validate !== undefined) {
      if (required) {
        help = validate(function(value) {
          return Validator.validate(Validator.TYPE.required, value)
        })
      } else {
        help = validate()
      }
      error = !!help
    }

    if (!_.isArray(children)) {
      if (children.type.displayName === 'Switch') {
        hasLabelSwitchPaddingTop = true
      }
    }

    return (
      <Flex
        {...rest}
        style={_style}
        className={classNames('gm-form-group', className, {
          'has-error': error,
          'gm-has-error': error
        })}
      >
        {label && (
          <Flex
            justifyEnd
            width={labelWidth}
            className={classNames(
              'gm-form-label control-label',
              {
                'gm-form-label-un-top': unLabelTop
              },
              {
                'gm-form-label-switch-padding-top': hasLabelSwitchPaddingTop
              }
            )}
          >
            {required ? <span style={{ color: 'red' }}>*</span> : ''}
            {label}
            {label && '：'}
          </Flex>
        )}
        <Flex flex column>
          <div className='gm-form-field'>
            <FormControl>{children}</FormControl>
            {!!(error && help) && (
              <div className={classNames({ 'help-block': error })}>{help}</div>
            )}
          </div>
        </Flex>
      </Flex>
    )
  }
)

FormItem.propTypes = {
  col: PropTypes.oneOf([1, 2, 3]),
  label: PropTypes.string,
  required: PropTypes.bool,
  unLabelTop: PropTypes.bool,

  validate: PropTypes.func, // 有 validate, 则 error help无效
  error: PropTypes.bool,
  help: PropTypes.string,

  // 以下不要用， 由context传过来的
  labelWidth: PropTypes.string,
  canValidate: PropTypes.bool,
  // 以上 由context传过来的

  className: PropTypes.string,
  style: PropTypes.object
}

FormItem.displayName = 'FormItem'

export default FormItem
