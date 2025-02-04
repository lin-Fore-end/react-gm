import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../flex'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitState()
  }
  // 匹配域名处理导航栏 active 显示
  getInitState = () => {
    const { data, selected } = this.props
    return {
      oneSelected: _.find(data, one => selected.includes(one.link)),
      isJump: false
    }
  }

  handleOne = (one, e) => {
    e.preventDefault()
    clearTimeout(this.timer)
    this.setState({
      oneSelected: one,
      isJump: false
    })
  }

  handleJumpOne = (one, e) => {
    e.preventDefault()
    this.setState({
      oneSelected: one,
      isJump: true
    })
  }

  handleMouseLeave = () => {
    this.timer = setTimeout(() => {
      this.setState(this.getInitState())
    }, 200)
  }

  render() {
    const {
      onSelect,
      selected,
      data,
      jump,
      className,
      logo, // eslint-disable-line
      widths,
      isBrowserRouter,
      renderExceptionNav,
      ...rest
    } = this.props

    const { oneSelected, isJump } = this.state
    return (
      <Flex
        {...rest}
        className={classNames('gm-nav', className)}
        onMouseLeave={this.handleMouseLeave}
      >
        <div style={{ width: widths[0] }}>
          <Flex alignCenter justifyCenter className='gm-nav-logo'>
            {logo}
          </Flex>
          <div className='gm-margin-top-5 gm-nav-one'>
            {_.map(data, (one, oneI) => {
              let link = !isBrowserRouter && /^\/[^#\/].*/.test(one.link) ? `#${one.link}` : one.link // eslint-disable-line
              return (
                <div
                  key={oneI + one.link}
                  className={classNames({
                    active: oneSelected && oneSelected.link === one.link
                  })}
                >
                  <a href={link} onClick={this.handleOne.bind(this, one)}>
                    {one.name}
                  </a>
                </div>
              )
            })}
            <div
              style={{
                margin: '30px 10px'
              }}
            />
            {_.map(jump, (one, oneI) => (
              <div
                key={oneI + one.link}
                className={classNames({
                  active: oneSelected && oneSelected.link === one.link
                })}
              >
                <a href={one.link} onClick={this.handleJumpOne.bind(this, one)}>
                  {one.name}
                </a>
              </div>
            ))}
            {renderExceptionNav && renderExceptionNav(oneSelected)}{' '}
            {/* 传递当前选中项数据以外部判断是否点击态 */}
          </div>
        </div>
        {/* 显示二级导航栏逻辑 */}
        {oneSelected && oneSelected.sub && (
          <div
            className='gm-border-right gm-bg-white gm-overflow-y'
            style={{
              width: widths[1],
              paddingTop: '52px',
              height: '100vh'
            }}
          >
            {isJump ? (
              <div className='gm-nav-jump'>
                {_.map(oneSelected.sub, (two, twoI) => (
                  <div key={two.link}>
                    <a
                      key={twoI + two.link}
                      href={two.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {two.name}
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className='gm-nav-two'>
                {_.map(oneSelected.sub, (two, twoI) => (
                  <div key={two.link}>
                    <a
                      key={twoI + two.link}
                      className={classNames({
                        active: selected.includes(two.link)
                      })}
                      href={two.link}
                      onClick={e => e.preventDefault()}
                    >
                      {two.name}
                    </a>
                    <div className='gm-nav-there'>
                      {_.map(two.sub, (v, i) => {
                        let link = !isBrowserRouter && /^\/[^#\/].*/.test(v.link) ? `#${v.link}` : v.link // eslint-disable-line
                        return (
                          <a
                            href={link}
                            key={i + v.link}
                            className={classNames({
                              active: selected.includes(v.link.split('?')[0])
                            })}
                            onClick={e => {
                              e.preventDefault()
                              onSelect(v)
                            }}
                          >
                            {v.name}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Flex>
    )
  }
}

Nav.propTypes = {
  logo: PropTypes.element,
  // 三级菜单 [{link, name, sub: [{link, name, sub: [{link, name}]}]}]
  data: PropTypes.array.isRequired,
  jump: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  isBrowserRouter: PropTypes.bool,
  widths: PropTypes.array.isRequired, // ["120px", "150px"]
  renderExceptionNav: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
}

Nav.defaultProps = {
  isBrowserRouter: false
}

export default Nav
