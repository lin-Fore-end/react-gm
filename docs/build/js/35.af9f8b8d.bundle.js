(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{260:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var obj,_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(7);var MarkdownItReactComponent=function(_React$Component){function MarkdownItReactComponent(props){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MarkdownItReactComponent);var _this=function(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this.state={},_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"nprogress"},_react2.default.createElement("a",{className:"header-anchor",href:"#nprogress","aria-hidden":"true"},"¶")," NProgress"),_react2.default.createElement("p",null,"顶部进度条"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement("div",null,_react2.default.createElement("button",{className:"btn btn-primary",onClick:function(){return _index.NProgress.start()}},"start"),_react2.default.createElement("button",{className:"btn btn-primary",onClick:function(){return _index.NProgress.done()}},"end"))),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"一般用其静态方法，",_react2.default.createElement("code",null,"start")," ",_react2.default.createElement("code",null,"done"),"。")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<div>",_react2.default.createElement("br",null),'    <button className="btn btn-primary" onClick=',"{","() => NProgress.start()","}",">start</button>",_react2.default.createElement("br",null),'    <button className="btn btn-primary" onClick=',"{","() => NProgress.done()","}",">end</button>",_react2.default.createElement("br",null),"</div>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},_react2.default.createElement("i",null)))),_react2.default.createElement("p",null,"如果想改变样式，覆盖css。"),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-css"},_react2.default.createElement("span",{className:"hljs-selector-class"},".gm-nprogress")," ","{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attribute"},"background"),": green;",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null),_react2.default.createElement("span",{className:"hljs-selector-class"},".gm-nprogress-head")," ","{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attribute"},"box-shadow"),": ",_react2.default.createElement("span",{className:"hljs-number"},"0")," ",_react2.default.createElement("span",{className:"hljs-number"},"0")," ",_react2.default.createElement("span",{className:"hljs-number"},"10px")," green, ",_react2.default.createElement("span",{className:"hljs-number"},"0")," ",_react2.default.createElement("span",{className:"hljs-number"},"0")," ",_react2.default.createElement("span",{className:"hljs-number"},"5px")," green;",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"percent (number)")," 进度")),_react2.default.createElement("h3",{id:"static"},_react2.default.createElement("a",{className:"header-anchor",href:"#static","aria-hidden":"true"},"¶")," Static"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"start()")," 开始跑进度条"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"done()")," 结束进度条")))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);