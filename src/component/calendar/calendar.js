import { getLocale } from '../../locales'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'
import _ from 'lodash'
import Flex from '../flex'
import SVGLeftSmall from '../../../svg/left-small.svg'
import SVGRightSmall from '../../../svg/right-small.svg'
import Week from './calendar_week'
import Content from './calendar_content'

const Day = props => {
  const {
    disabled,
    onClick,
    value,
    will,
    selected,
    selectDates,
    beSelected
  } = props

  const nowMountStart = +moment().startOf('day')
  const handleClick = () => {
    if (disabled) {
      return
    }
    onClick(value)
  }

  const isDayActive = () => {
    if (selectDates && selectDates.length) {
      const res = _.filter(
        selectDates,
        item => +moment(item).startOf('day') === +value.startOf('day')
      )
      return Boolean(res.length)
    } else {
      return +moment(selected).startOf('day') === +value.startOf('day')
    }
  }

  const cn = classNames('gm-calendar-day', {
    'gm-calendar-day-will':
      !selectDates && +moment(will).startOf('day') === +value.startOf('day'),
    'gm-calendar-day-now': nowMountStart === +value.startOf('day'),
    'gm-calendar-day-old': moment(will).month() > value.month(),
    'gm-calendar-day-new': moment(will).month() < value.month(),
    'gm-calendar-day-disabled': disabled,
    'gm-calendar-active': isDayActive(),
    // 新组件添加
    'gm-calendar-day-select': beSelected
  })

  return (
    <span className={cn} onClick={handleClick}>
      {value.date()}
    </span>
  )
}

Day.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
  will: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
  selectDates: PropTypes.array,
  beSelected: PropTypes.bool
}

const months = [
  getLocale('1月'),
  getLocale('2月'),
  getLocale('3月'),
  getLocale('4月'),
  getLocale('5月'),
  getLocale('6月'),
  getLocale('7月'),
  getLocale('8月'),
  getLocale('9月'),
  getLocale('10月'),
  getLocale('11月'),
  getLocale('12月')
]

const Head = props => {
  const { will, onChange } = props
  const [isShow, setShow] = useState(false)
  const month = will.month()

  const handleChangeMonth = month => {
    setShow(false)
    onChange(month)
  }

  const handleShowMonth = () => {
    setShow(true)
  }

  return (
    <React.Fragment>
      <Flex alignCenter className='gm-calendar-head text-center clearfix'>
        <a
          href='javascript:;'
          className='gm-calendar-head-pre gm-decoration-none'
          onClick={() => handleChangeMonth(month - 1)}
        >
          <SVGLeftSmall />
        </a>
        <Flex flex justifyCenter className='gm-calendar-head-title text-center'>
          <span className='gm-calendar-head-month' onClick={handleShowMonth}>
            {months[month]}
          </span>
          <span>&nbsp;&nbsp;{will.year()}</span>
        </Flex>
        <a
          href='javascript:;'
          className='gm-calendar-head-next gm-decoration-none'
          onClick={() => handleChangeMonth(month + 1)}
        >
          <SVGRightSmall />
        </a>
      </Flex>
      {isShow && (
        <div className='gm-calendar-months'>
          {_.map(_.range(12), i => (
            <span
              key={i}
              className={classNames('gm-calendar-month', {
                'gm-calendar-active': i === month
              })}
              onClick={() => handleChangeMonth(i)}
            >
              {months[i]}
            </span>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

Head.propTypes = {
  will: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

const Calendar = props => {
  const {
    selected,
    onSelect,
    willActiveSelected,
    min,
    max,
    disabledDate,
    className,
    ...rest
  } = props

  const _will = willActiveSelected
    ? moment(willActiveSelected)
    : selected
    ? moment(selected)
    : moment()

  // daySelect: Date对象，用于处理选择哪一天
  // oldselect: Date对象，用于处理选择哪个月
  const [daySelect, setDaySelect] = useState(selected || null)
  const [will, setWill] = useState(_will)

  useEffect(() => {
    setDaySelect(props.selected)
  }, [selected])
  useEffect(() => {
    setWill(_will)
  }, [willActiveSelected])

  const handleSelectDay = m => {
    props.onSelect(m.toDate())
  }

  const handleChangeWill = month => {
    setWill(moment(will.month(month)))
  }

  const getDisabled = m => {
    let { min, max, disabledDate } = props
    min = min ? moment(min).startOf('day') : null
    max = max ? moment(max).startOf('day') : null

    let disabled = false

    if (disabledDate) {
      disabled = disabledDate(m.toDate())
    } else {
      if (min && m < min) {
        disabled = true
      }
      if (max && m > max) {
        disabled = true
      }
    }
    return disabled
  }

  return (
    <div {...rest} className={classNames('gm-calendar', className)}>
      <Head will={will} onChange={e => handleChangeWill(e)} />
      <Week />
      <Content
        selected={daySelect}
        will={will}
        onSelectDay={e => handleSelectDay(e)}
        getDisabled={e => getDisabled(e)}
      />
    </div>
  )
}

Calendar.propTypes = {
  /** Date对象，表示所选的日期 */
  selected: PropTypes.object,
  /** 点击选择日期回调，传入参数为Date对象 */
  onSelect: PropTypes.func,
  willActiveSelected: PropTypes.object,
  /** Date对象，表示可选的最小日期 */
  min: PropTypes.object,
  /** Date对象，表示可选的最大日期 */
  max: PropTypes.object,
  /** 自定义日期是否可选。传入参数为Date对象，返回true or false。 有此属性则min max无效。 */
  disabledDate: PropTypes.func,
  /** 定义样式 */
  className: PropTypes.string,
  /** 定义样式 */
  style: PropTypes.object,

  /** 目前全键盘用 */
  onKeyDown: PropTypes.func
}

Calendar.defaultProps = {
  onSelect: _.noop,
  onKeyDown: _.noop
}

export default Calendar
