import React from 'react'
import _ from 'lodash'
import { Checkbox, Flex } from '../../../src'
import PropTypes from 'prop-types'

const Selector = props => {
  const { cols, onColsChange, diyGroupSorting } = props

  const colGroup = _.groupBy(cols, 'diyGroupName')

  return (
    <div>
      {_.map(diyGroupSorting, groupName => {
        const cols = colGroup[groupName]
        return (
          <div key={groupName}>
            <div>{groupName}</div>
            <Flex>
              {_.map(cols, item => {
                const { show, Header, diyItemText, diyEnable, key } = item
                const text = diyItemText || Header

                return (
                  _.isString(text) && (
                    <div style={{ width: '25%' }} key={key}>
                      <Checkbox
                        value={key}
                        disabled={!diyEnable} // 不能编辑的字段,disable
                        checked={show}
                        onChange={() => {
                          onColsChange(key, show)
                        }}
                      >
                        {text}
                      </Checkbox>
                    </div>
                  )
                )
              })}
            </Flex>
          </div>
        )
      })}
    </div>
  )
}

Selector.propTypes = {
  cols: PropTypes.array.isRequired,
  diyGroupSorting: PropTypes.array.isRequired,
  onColsChange: PropTypes.func.isRequired
}

export default Selector
