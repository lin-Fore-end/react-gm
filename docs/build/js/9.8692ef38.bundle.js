webpackJsonp([9],{389:function(e,l,t){"use strict";function a(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function n(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!=typeof l&&"function"!=typeof l?e:l}function r(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}Object.defineProperty(l,"__esModule",{value:!0});var u=function(){function e(e,l){for(var t=0;t<l.length;t++){var a=l[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(l,t,a){return t&&e(l.prototype,t),a&&e(l,a),l}}(),d=t(1),m=function(e){return e&&e.__esModule?e:{default:e}}(d),c=t(8),s=[{id:3,name:"小明",age:"10"},{id:4,name:"小红",age:"15",_gm_select:!0},{id:5,name:"小蓝",age:"20"}],f=function(e){function l(e){a(this,l);var t=n(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={},t}return r(l,e),u(l,[{key:"handleToggleCode",value:function(e){var l={};l["showCode"+e]=!this.state["showCode"+e],this.setState(l)}},{key:"render",value:function(){return m.default.createElement("div",{className:"doc"},m.default.createElement("h2",{id:"sheetcolumn"},m.default.createElement("a",{className:"header-anchor",href:"#sheetcolumn","aria-hidden":"true"},"¶")," SheetColumn"),m.default.createElement("p",null,"SheetColumn的顺序决定table列的顺序"),m.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},m.default.createElement("div",{className:"doc-demo-instance"},m.default.createElement("h4",null,"Example"),m.default.createElement(c.Sheet,{list:s},m.default.createElement(c.SheetColumn,{field:"id",name:"id"}),m.default.createElement(c.SheetColumn,{field:"name",name:m.default.createElement("div",null,"1换行",m.default.createElement("br",null),"2")}),m.default.createElement(c.SheetColumn,{field:"age",name:"年龄",style:{width:"100px",backgroundColor:"red"}}),m.default.createElement(c.SheetColumn,{field:"name",name:"name"},function(e){return"你好 "+e}),m.default.createElement(c.SheetColumn,{field:"name",name:"name",render:function(e){return"你好 "+e}}),m.default.createElement(c.SheetColumn,{field:"name",name:"name"},function(e){return m.default.createElement("strong",null,"你好 ",e)}),m.default.createElement(c.SheetColumn,{field:"name",name:"name"},function(e,l){return m.default.createElement("strong",null,"你好 ",e,"，你的id是 ",s[l].id)}),m.default.createElement(c.SheetColumn,{field:"asfafasfas",name:"field乱来"},function(e,l){return m.default.createElement("strong",null,"你好 ",s[l].name,"，你的id是 ",s[l].id)}))),m.default.createElement("div",{className:"doc-demo-meta"},m.default.createElement("div",{className:"doc-demo-description"},m.default.createElement("p",null,"自定义")),m.default.createElement("div",{className:"doc-demo-code"},m.default.createElement("pre",null,m.default.createElement("code",{className:"language-js"},m.default.createElement("span",{className:"hljs-keyword"},"const")," list= [","{",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-attr"},"id"),": ",m.default.createElement("span",{className:"hljs-number"},"3"),",",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-attr"},"name"),": ",m.default.createElement("span",{className:"hljs-string"},"'小明'"),",",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-attr"},"age"),": ",m.default.createElement("span",{className:"hljs-string"},"'10'"),m.default.createElement("br",null),"}",", ","{",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-attr"},"id"),": ",m.default.createElement("span",{className:"hljs-number"},"4"),",",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-attr"},"name"),": ",m.default.createElement("span",{className:"hljs-string"},"'小红'"),",",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-attr"},"age"),": ",m.default.createElement("span",{className:"hljs-string"},"'15'"),",",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-attr"},"_gm_select"),": ",m.default.createElement("span",{className:"hljs-literal"},"true"),m.default.createElement("br",null),"}",", ","{",m.default.createElement("br",null),"   ",m.default.createElement("span",{className:"hljs-attr"},"id"),": ",m.default.createElement("span",{className:"hljs-number"},"5"),",",m.default.createElement("br",null),"   ",m.default.createElement("span",{className:"hljs-attr"},"name"),": ",m.default.createElement("span",{className:"hljs-string"},"'小蓝'"),",",m.default.createElement("br",null),"   ",m.default.createElement("span",{className:"hljs-attr"},"age"),": ",m.default.createElement("span",{className:"hljs-string"},"'20'"),m.default.createElement("br",null),"}","];",m.default.createElement("br",null))),m.default.createElement("pre",null,m.default.createElement("code",{className:"language-jsx"},"<Sheet list=","{","list","}",">",m.default.createElement("br",null),'    <SheetColumn field="id" name="id"/>',m.default.createElement("br",null),"    ",m.default.createElement("br",null),'    <SheetColumn field="name" name=',"{","<div>1换行<br/>2</div>","}","/>",m.default.createElement("br",null),"    ",m.default.createElement("br",null),'    <SheetColumn field="age" name="年龄" style=',"{","{","width: '100px', backgroundColor: 'red'","}","}","/>",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    ","{","/*可以自定义显示，children传入一个func，func提供当前数据值，返回要显示的结果*/","}",m.default.createElement("br",null),'    <SheetColumn field="name" name="name">',m.default.createElement("br",null),"        ","{","value => '你好 ' + value","}",m.default.createElement("br",null),"    </SheetColumn>",m.default.createElement("br",null),"{","/*可以自定义显示，children传入一个func，func提供当前数据值，返回要显示的结果*/","}",m.default.createElement("br",null),'    <SheetColumn field="name" name="name" render=',"{","value => ('你好 ' + value)","}","/>",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    ","{","/*不止文本，可以返回任何东西。 可交互的input啊，button啊等*/","}",m.default.createElement("br",null),'    <SheetColumn field="name" name="name">',m.default.createElement("br",null),"        ","{","value => <strong>你好 ","{","value","}","</strong>","}",m.default.createElement("br",null),"    </SheetColumn>",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    ","{","/*func第二个参数提供当前数据的索引，通过索引你可以找到当前的数据*/","}",m.default.createElement("br",null),'    <SheetColumn field="name" name="name">',m.default.createElement("br",null),"        ","{","(value, i) => <strong>你好 ","{","value","}","，你的id是 ","{","list[i].id","}","</strong>","}",m.default.createElement("br",null),"    </SheetColumn>",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    ","{","/*field你也可以乱来，你喜欢*/","}",m.default.createElement("br",null),'    <SheetColumn field="asfafasfas" name="field乱来">',m.default.createElement("br",null),"        ","{","(value, i) => <strong>你好 ","{","list[i].name","}","，你的id是 ","{","list[i].id","}","</strong>","}",m.default.createElement("br",null),"    </SheetColumn>",m.default.createElement("br",null),"</Sheet>",m.default.createElement("br",null)))),m.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},m.default.createElement("i",null)))),m.default.createElement("h3",{id:"props"},m.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),m.default.createElement("ul",null,m.default.createElement("li",null,m.default.createElement("code",null,"field (string|isRequired)")," 某列读取数据的字段名"),m.default.createElement("li",null,m.default.createElement("code",null,"name (string|element|isRequired)")," 某列表头的名字"),m.default.createElement("li",null,m.default.createElement("code",null,"placeholder (any)")," 默认值， 值为 undefined 和 null 时就显示placeholder的值"),m.default.createElement("li",null,m.default.createElement("code",null,"render (func)")," 返回任意东西，自定义单元格展现"),m.default.createElement("li",null,m.default.createElement("code",null,"children (func)")," 返回任意东西，自定义单元格展现"),m.default.createElement("li",null,"...rest")))}}]),l}(m.default.Component);l.default=f}});
//# sourceMappingURL=9.8692ef38.bundle.js.map