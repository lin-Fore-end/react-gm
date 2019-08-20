import React from 'react'
import PropTypes from 'prop-types'
import baseSelectTableHoc from './select_table_base'
import Table from '../table'
import SVGRemove from '../../svg/remove.svg'

function selectTableHOC(Component) {
  // 先包一层 hocSelectTable
  const SelectComponent = baseSelectTableHoc(Component)

  class SelectTable extends React.Component {
    state = {
      isBarShow: false
    }

    handleSelect = selected => {
      this.setState({ isBarShow: selected.length > 0 })

      this.props.onSelect(selected)
    }

    handleSelectAll = isSelectedAll => {
      this.setState({ isBarShow: isSelectedAll })

      this.props.onSelectAll(isSelectedAll)
    }

    render() {
      const { batchActionBar, selectType, keyField, ...rest } = this.props

      const { isBarShow } = this.state

      return (
        <div className='gm-react-table-select'>
          <SelectComponent
            {...rest}
            onSelect={this.handleSelect}
            onSelectAll={this.handleSelectAll}
            keyField={keyField}
          />
          {isBarShow && batchActionBar && (
            <div className='gm-react-table-select-all-tip'>
              <SVGRemove onClick={() => this.setState({ isBarShow: false })} />
              {batchActionBar}
            </div>
          )}
        </div>
      )
    }
  }

  SelectTable.propTypes = {
    ...Table.propTypes,

    // select 专有
    keyField: PropTypes.string,
    selected: PropTypes.array.isRequired,

    onSelect: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,

    batchActionBar: PropTypes.node
  }

  SelectTable.defaultProps = {
    keyField: 'value'
  }

  return SelectTable
}

export default selectTableHOC
