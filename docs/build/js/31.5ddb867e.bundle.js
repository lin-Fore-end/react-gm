(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{256:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var obj,_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(7);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var Component=function(_React$Component){function Component(props){_classCallCheck(this,Component);var _this=_possibleConstructorReturn(this,(Component.__proto__||Object.getPrototypeOf(Component)).call(this,props));return _this.state={value:""},_this.handleChange=_this.handleChange.bind(_this),_this}return _inherits(Component,_react2.default.Component),_createClass(Component,[{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement(_index.InputNumber,{value:this.state.value,onChange:this.handleChange,placeholder:"最大1000，最小0，可保留4为小数，默认2位",max:1e3,min:0,precision:4,className:"form-control",minus:!0}),_react2.default.createElement("br",null),_react2.default.createElement(_index.InputNumber,{value:this.state.value,onChange:this.handleChange,placeholder:"最大0，最小0",max:0,min:0,precision:0,className:"form-control",minus:!0}))}},{key:"handleChange",value:function(value){this.setState({value:value})}}]),Component}(),MarkdownItReactComponent=function(_React$Component2){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this2=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this2.state={},_this2}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"inputnumber"},_react2.default.createElement("a",{className:"header-anchor",href:"#inputnumber","aria-hidden":"true"},"¶")," InputNumber"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode3?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(Component,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"数字输入框")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"Component")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props)","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),": ",_react2.default.createElement("span",{className:"hljs-string"},"''"),_react2.default.createElement("br",null),"        ","}",";",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange = ::",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleChange;",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    render()","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            <div>",_react2.default.createElement("br",null),"                <InputNumber",_react2.default.createElement("br",null),"                    value=","{","this.state.value","}",_react2.default.createElement("br",null),"                    onChange=","{","this.handleChange","}",_react2.default.createElement("br",null),'                    placeholder="最大1000，最小0，可保留4为小数，默认2位"',_react2.default.createElement("br",null),"                    max=","{","1000","}",_react2.default.createElement("br",null),"                    min=","{","0","}",_react2.default.createElement("br",null),"                    precision=","{","4","}",_react2.default.createElement("br",null),'                    className="form-control"',_react2.default.createElement("br",null),"                    minus",_react2.default.createElement("br",null),"                />",_react2.default.createElement("br",null),"                <br/>",_react2.default.createElement("br",null),"                <InputNumber",_react2.default.createElement("br",null),"                    value=","{","this.state.value","}",_react2.default.createElement("br",null),"                    onChange=","{","this.handleChange","}",_react2.default.createElement("br",null),'                    placeholder="最大0，最小0"',_react2.default.createElement("br",null),"                    max=","{","0","}",_react2.default.createElement("br",null),"                    min=","{","0","}",_react2.default.createElement("br",null),"                    precision=","{","0","}",_react2.default.createElement("br",null),'                    className="form-control"',_react2.default.createElement("br",null),"                    minus",_react2.default.createElement("br",null),"                />",_react2.default.createElement("br",null),"            </div>",_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    handleChange(value)","{",_react2.default.createElement("br",null),"        this.setState(","{",_react2.default.createElement("br",null),"            value",_react2.default.createElement("br",null),"        ","}",");",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<Component/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,3)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"value (number|string)")," 当前值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"max (number)")," 最大值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"min (number)")," 最小值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"precision (number)")," 精确度，保留几位小数"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onChange (func|isRequired)")," 数值变化回调"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"placeholder (string)"),": 默认值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"className (string)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"minus (bool)")," 是否支持输入负数"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"...rest"))))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);