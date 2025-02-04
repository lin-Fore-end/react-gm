---
imports:
    import {Select, Option} from '../../src/index';
    import _ from 'lodash';
---
## Select

背景: 原生select在onChange的时候是字符串，经常要转换，所以有了此组件,无须转换。
同时原生select在 `window` 和 `mac` 的表现不一样,此组件在两个平台变现完全一致.


同时隐藏了多选的特别处理逻辑

一定要配合`Option`使用

::: demo 单选，提供value的原始值出来，而非原生的字符串。 
```js
const list = _.map(_.range(8), v => ({
    value: 'a_' + v,
    name: 'd发' + v
}));
list.push({
value: 21312,
name: '你好啊'
});
class Component extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: list,
            value_1: list[list.length - 1].value, 
            value_2: list[0].value
        };
    }
    
    handleChange(name, value){
        console.log(value);
        this.setState({
            [name]: value
        });
    }
    
    render() {
        const {list, value_1, value_2} = this.state;

        return (
            <div>
                <div>default</div>
                <Select value={value_1} onChange={this.handleChange.bind(this, 'value_1')}>
                    {_.map(list, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>
                <div>disabled</div>
                <Select value={value_2} onChange={this.handleChange.bind(this, 'value_2')} disabled>
                    {_.map(list, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>
                <div>option disabled</div>
                <Select value={value_2} onChange={this.handleChange.bind(this, 'value_2')}>
                    <Option value="option disabled" disabled>Option Disabled</Option>
                    {_.map(list, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>
                <div>clean</div>
                <Select value={value_2} onChange={this.handleChange.bind(this, 'value_2')} clean>
                    {_.map(list, v => <Option key={v.value} value={v.value}>{v.name}</Option>)}
                </Select>
            </div>
        );
    }
}
```
```jsx
<Component/>
```
:::

### Props
- `multiple (bool)`
- `value (any|isRequired)`
- `onChange (func)`
- `clean (bool)` 感觉模式
- `...rest`
