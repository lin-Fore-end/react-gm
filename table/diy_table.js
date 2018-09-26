import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Checkbox } from '../src/component/checkbox'
import Storage from '../src/component/storage'
import Flex from '../src/component/flex'
import { contains } from 'gm-util'
import { findDOMNode } from 'react-dom'

function diyTableHOC (Component) {
  class DiyTable extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        // 把没有查看权限的列去掉,查看权限默认为true
        columns: _.filter(props.columns, ({diyDisable = false}) => !diyDisable),
        isShow: false,
        diyHeaderObj: {}
      }
    }

    componentDidMount () {
      window.document.body.addEventListener('click', this.handleCloseDiySelector)
      const {id: diyID} = this.props
      const {columns} = this.state

      // 组件挂载的时候,读取本地保存的diy配置
      if (diyID) {
        const diyHeaderObj = Storage.get(diyID) || {}

        const newColumns = _.map(columns, item => {
          const {id, accessor, show = true} = item
          const key = id || accessor
          // 优先使用localStorage的值,没有则使用column上的值
          const itemShow = _.isBoolean(diyHeaderObj[key]) ? diyHeaderObj[key] : show

          return {
            ...item, show: itemShow
          }
        })

        this.setState({columns: newColumns, diyHeaderObj})
      }
    }

    componentWillUnmount () {
      window.document.body.removeEventListener('click', this.handleCloseDiySelector)
      this.__isUnmounted = true
    }

    // 显示diy选择框  注:暴露给外部使用
    apiToggleDiy = () => {
      if (!this.__isUnmounted) {
        const {isShow} = this.state
        this.setState({isShow: !isShow})
      }
    }

    handleCloseDiySelector = ({target}) => {
      const {isShow} = this.state

      if (isShow && this.diySelectorRef && !contains(findDOMNode(this.diySelectorRef), target)) {
        // 延后执行,使得再次点击按钮关闭diy
        setTimeout(() => this.setState({isShow: false}), 0)
      }
    }

    handleCheck (index) {
      const columns = this.state.columns.slice()
      const {show = true} = columns[index]
      columns[index].show = !show
      this.setState({columns})

      const {id: diyID} = this.props
      // 记录配置
      if (diyID) {
        const obj = _.clone(this.state.diyHeaderObj)
        const {id, accessor} = columns[index]
        const key = id || accessor
        obj[key] = !show

        this.setState({diyHeaderObj: obj})
        Storage.set(diyID, obj)
      }
    }

    render () {
      const {columns, isShow} = this.state
      const props = {
        ...this.props, columns
      }

      return (<div className='gm-react-table-diy'>
        <Component {...props}/>
        {isShow && <Flex className='gm-react-table-diy-selector gm-box-shadow-bottom' wrap ref={ref => (this.diySelectorRef = ref)}>
          {_.map(columns, (item, index) => {
            const {id, accessor, show: checked = true, Header, diyCheckboxText} = item
            const key = id || accessor
            const text = diyCheckboxText || Header

            // Header是字符串才展示自定义选择项
            return _.isString(text) ? <div style={{width: '50%'}} key={key}>
              <Checkbox
                value={key}
                checked={checked}
                onChange={this.handleCheck.bind(this, index)}
              >
                {text}
              </Checkbox>
            </div> : null
          })}
        </Flex>}
      </div>)
    }
  }

  DiyTable.propTypes = {
    id: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
  }
  return DiyTable
}

export default diyTableHOC
