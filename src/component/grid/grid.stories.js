import React from 'react'
import { storiesOf } from '@storybook/react'
import Row from './row'
import Col from './col'

storiesOf('grid', module).add('default', () => (
  <div>
    <Row>
      <Col span={24}>Col 24</Col>
    </Row>

    <Row>
      <Col span={8}>Col 8</Col>
      <Col span={8}>Col 8</Col>
      <Col span={8}>Col 8</Col>
    </Row>

    <Row>
      <Col span={8}>Col 8</Col>
      <Col span={8} offset={8}>
        Col 8, Offset 8
      </Col>
    </Row>

    <Row>
      <Col span={4}>Col 4</Col>
      <Col span={4} offset={4}>
        Col 4, Offset 4
      </Col>
      <Col span={4} offset={4}>
        Col 4, Offset 4
      </Col>
    </Row>
  </div>
))
