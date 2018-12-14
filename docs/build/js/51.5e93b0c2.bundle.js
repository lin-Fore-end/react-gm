(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{276:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var obj,_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(7);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}window.Storage=_index.Storage;var StorageWrap=function(_React$Component){function StorageWrap(props){_classCallCheck(this,StorageWrap);var _this=_possibleConstructorReturn(this,(StorageWrap.__proto__||Object.getPrototypeOf(StorageWrap)).call(this,props));return _this.state={value:_index.Storage.get("testValue")||""},_this}return _inherits(StorageWrap,_react2.default.Component),_createClass(StorageWrap,[{key:"render",value:function(){var _this2=this;return _react2.default.createElement("div",null,"刷新后看到存储的数据",_react2.default.createElement("input",{type:"text",value:this.state.value,onChange:function(event){return _this2.setState({value:event.target.value})}}),_react2.default.createElement(_index.Storage,{name:"testValue",value:this.state.value}))}}]),StorageWrap}(),MarkdownItReactComponent=function(_React$Component2){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this3=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this3.state={},_this3}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"storage"},_react2.default.createElement("a",{className:"header-anchor",href:"#storage","aria-hidden":"true"},"¶")," Storage"),_react2.default.createElement("p",null,"存储用，基于localStorage。没啥特别，只是简单的封装了下接口。 且添加前缀 ",_react2.default.createElement("code",null,"_react-gm_"),"避免冲突"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(StorageWrap,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-built_in"},"window"),".Storage = Storage;",_react2.default.createElement("br",null),_react2.default.createElement("span",{className:"hljs-keyword"},"const")," key = ",_react2.default.createElement("span",{className:"hljs-string"},"'testValue'"),";",_react2.default.createElement("br",null),_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"StorageWrap")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),": Storage.get(key) || ",_react2.default.createElement("span",{className:"hljs-string"},"''"),_react2.default.createElement("br",null),"        ","}",";",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    render() ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            <div>",_react2.default.createElement("br",null),"                刷新后看到存储的数据",_react2.default.createElement("br",null),'                <input type="text" value=',"{","this.state.value","}",_react2.default.createElement("br",null),"                       onChange=","{","event => this.setState(","{","value: event.target.value","}",")","}","/>",_react2.default.createElement("br",null),"                <Storage name=","{","key","}"," value=","{","this.state.value","}","/>",_react2.default.createElement("br",null),"            </div>",_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<StorageWrap/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"name (string|isRequire)")," 存储的key"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"value (string, object, array)")," 存储的数据，不适合存储非常复杂的东西，实际上存的是",_react2.default.createElement("code",null,"JSON.stringify(value)"),"，只要符合JSON就可以存储。"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"autoSave (bool)")," 默认",_react2.default.createElement("code",null,"true"),"，value变化会自动更新保存")),_react2.default.createElement("h3",{id:"static"},_react2.default.createElement("a",{className:"header-anchor",href:"#static","aria-hidden":"true"},"¶")," Static"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"set(key, value)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"get(key)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"remove(key)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"clear")," 慎用，清除本域名全部存储"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"getAll")," 拿到全部存储，以Obj形式返回")))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);