(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{210:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var obj,_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(12);var MarkdownItReactComponent=function(_React$Component){function MarkdownItReactComponent(props){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MarkdownItReactComponent);var _this=function(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this.state={},_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"uploader"},_react2.default.createElement("a",{className:"header-anchor",href:"#uploader","aria-hidden":"true"},"¶")," Uploader"),_react2.default.createElement("p",null,"上传文件"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement("div",null,_react2.default.createElement(_index.Uploader,{onUpload:function(datas,e){return console.log(datas,e)},accept:"image/*"}))),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"默认样式")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<div>",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Uploader")," ",_react2.default.createElement("span",{className:"hljs-attr"},"onUpload"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","(datas,")," ",_react2.default.createElement("span",{className:"hljs-attr"},"e"),") =>")," console.log(datas, e)","}",' accept="image/*" />',_react2.default.createElement("br",null),_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">")),_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},_react2.default.createElement("i",null)))),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement("div",null,_react2.default.createElement(_index.Uploader,{onUpload:function(datas,e){return console.log(datas,e)},accept:".xlsx"},_react2.default.createElement("button",{className:"btn"},"自定义")))),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"自定义样式")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<div>",_react2.default.createElement("br",null),"    <Uploader onUpload=","{","(datas, e) => console.log(datas, e)","}",'  accept=".xlsx">',_react2.default.createElement("br",null),'        <button className="btn">自定义</button>',_react2.default.createElement("br",null),"    </Uploader>",_react2.default.createElement("br",null),"</div>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"multiple (bool)")," 是否多选，默认false。 ",_react2.default.createElement("strong",null,"Android微信"),"不支持多选，内部已经判断是微信就不开放多选功能"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"accept (string)")," 选择的类型，比如图片 ",_react2.default.createElement("code",null,"image/*"),"，excel ",_react2.default.createElement("code",null,".xlsx"),"，具体见HTML5规范"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onUpload (func|isRequired)")," 选择图片后触发函数"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"children")," 提供自定义选择图片的触发区域")))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);