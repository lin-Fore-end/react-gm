import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Validator from '../../validator'

class FormGroup extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = ::this.handleSubmit
    this.state = {
      canValidate: false
    }
  }

  validateAll () {
    const { children } = this.props
    const helpList = []
    const formItems = []
    _.each(React.Children.toArray(children), child => {
      if (child.type.displayName === 'FormItem') {
        formItems.push(child)
      } else if (child.type.displayName === 'FormBlock') {
        _.each(React.Children.toArray(child.props.children), cChild => {
          if (cChild.type.displayName === 'FormItem') {
            formItems.push(cChild)
          }
        })
      }
    })

    _.each(formItems, item => {
      if (item.props.error) {
        helpList.push({
          label: item.props.label,
          help: item.props.error
        })
      } else if (item.props.validate) {
        let help = ''
        if (item.props.required) {
          help = item.props.validate(function (value) {
            return Validator.validate(Validator.TYPE.required, value)
          })
        } else {
          help = item.props.validate()
        }
        if (help) {
          helpList.push({
            label: item.props.label,
            help
          })
        }
      }
    })

    return helpList.length === 0 ? null : helpList
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(e)

    const err = this.validateAll()
    if (!err) {
      this.props.onSubmitValidated()
    }

    // 有错误才打开错误提示，没有错误则不打开
    this.setState({
      canValidate: !!err
    })
  }
  render () {
    const {
      className,
      children,
      onSubmitValidated, //eslint-disable-line
      ...rest
    } = this.props

    return (
      <form
        {...rest}
        className={className}
        onSubmit={this.handleSubmit}
      >
        {children}
      </form>
    )
  }
}

FormGroup.propTypes = {
  onSubmit: PropTypes.func, // 默认处理了 preventDefault,
  onSubmitValidated: PropTypes.func
}

FormGroup.defaultProps = {
  onSubmit: _.noop,
  onSubmitValidated: _.noop
}

export default FormGroup
