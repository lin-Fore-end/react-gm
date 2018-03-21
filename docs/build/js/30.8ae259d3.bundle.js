webpackJsonp([30],{335:function(e,l,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function u(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!=typeof l&&"function"!=typeof l?e:l}function r(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}Object.defineProperty(l,"__esModule",{value:!0});var c=function(){function e(e,l){for(var t=0;t<l.length;t++){var a=l[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(l,t,a){return t&&e(l.prototype,t),a&&e(l,a),l}}(),o=t(1),f=a(o),d=(t(10),t(3)),m=(a(d),function(e){function l(e){n(this,l);var t=u(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={},t}return r(l,e),c(l,[{key:"handleToggleCode",value:function(e){var l={};l["showCode"+e]=!this.state["showCode"+e],this.setState(l)}},{key:"render",value:function(){return f.default.createElement("div",{className:"doc"},f.default.createElement("h2",{id:"flex"},f.default.createElement("a",{className:"header-anchor",href:"#flex","aria-hidden":"true"},"¶")," Flex"),f.default.createElement("p",null,"语法见 ",f.default.createElement("a",{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"},"Flex")),f.default.createElement("p",null,"本组件只是个简单的封装，只提供兼容的属性"),f.default.createElement("h3",{id:"props"},f.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),f.default.createElement("ul",null,f.default.createElement("li",null,f.default.createElement("code",null,"flex (number|bool)")," 项目放大比例，默认",f.default.createElement("code",null,"true"),"，也即flex等于1。"),f.default.createElement("li",null,f.default.createElement("code",null,"auto (bool)")," 即 ",f.default.createElement("code",null,"flex: 1 1 auto")),f.default.createElement("li",null,f.default.createElement("code",null,"none (bool)")," 即 ",f.default.createElement("code",null,"flex: 0 0 auto")," 当不希望剩余空间不足时不被压缩用"),f.default.createElement("li",null,f.default.createElement("code",null,"width (string)")," 如果定义了width，额外使用了",f.default.createElement("code",null,"none"),"(不会被放大和缩小)"),f.default.createElement("li",null,f.default.createElement("code",null,"height (string)")," 同上"),f.default.createElement("li",null,f.default.createElement("code",null,"row (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"column (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"wrap (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"nowrap (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"justifyStart (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"justifyEnd (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"justifyCenter (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"justifyBetween (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"justifyAround (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"alignStart (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"alignEnd (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"alignCenter (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"alignBaseline (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"alignStretch (bool)")),f.default.createElement("li",null,f.default.createElement("code",null,"...rest"))),f.default.createElement("p",null,"以上只列了写常用的特性，还有些很有用的特性，不妨直接用style来处理。"),f.default.createElement("p",null,"比如 ",f.default.createElement("code",null,"flex: 1 0 auto")," ，如果空间足够则撑满，如果空间不足也不会被压缩，特别适合用在内滚动容器（然而经试验当内容多的适合在pc会出现滚动条(设置了",f.default.createElement("code",null,"overflow:auto"),")，在移动端却没有，神了个奇）。"),f.default.createElement("p",null,"Flex 组件默认是"),f.default.createElement("pre",null,f.default.createElement("code",{className:"language-less"},f.default.createElement("span",{className:"hljs-selector-class"},".gm-flex")," ","{",f.default.createElement("br",null),"  ",f.default.createElement("span",{className:"hljs-attribute"},"display"),": flex;",f.default.createElement("br",null),"  ",f.default.createElement("span",{className:"hljs-attribute"},"flex-direction"),": row;",f.default.createElement("br",null),"  ",f.default.createElement("span",{className:"hljs-attribute"},"flex-wrap"),": nowrap;",f.default.createElement("br",null),"  ",f.default.createElement("span",{className:"hljs-attribute"},"justify-content"),": flex-start;",f.default.createElement("br",null),"  ",f.default.createElement("span",{className:"hljs-attribute"},"align-content"),": stretch;",f.default.createElement("br",null),"  ",f.default.createElement("span",{className:"hljs-attribute"},"align-items"),": stretch;",f.default.createElement("br",null),"  ",f.default.createElement("span",{className:"hljs-attribute"},"box-sizing"),": border-box;",f.default.createElement("br",null),"}",f.default.createElement("br",null))))}}]),l}(f.default.Component));l.default=m}});
//# sourceMappingURL=30.8ae259d3.bundle.js.map