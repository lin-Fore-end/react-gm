(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{251:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var obj,_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(7);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var FlipNumberWrap=function(_React$Component){function FlipNumberWrap(props){_classCallCheck(this,FlipNumberWrap);var _this=_possibleConstructorReturn(this,(FlipNumberWrap.__proto__||Object.getPrototypeOf(FlipNumberWrap)).call(this,props));return _this.state={to:0,from:0},_this}return _inherits(FlipNumberWrap,_react2.default.Component),_createClass(FlipNumberWrap,[{key:"componentDidMount",value:function(){var _this2=this;setTimeout(function(){return _this2.setState({to:709394,from:234.2343})},1300)}},{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement(_index.FlipNumber,{useGroup:!0,delay:1e3,decimal:2,from:this.state.from,to:this.state.to,className:"gm-text-red gm-font-20"}))}}]),FlipNumberWrap}(),MarkdownItReactComponent=function(_React$Component2){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this3=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this3.state={},_this3}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"flipnumber"},_react2.default.createElement("a",{className:"header-anchor",href:"#flipnumber","aria-hidden":"true"},"¶")," FlipNumber"),_react2.default.createElement("p",null,"FlipNumber"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(FlipNumberWrap,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"FlipNumberWrap")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor")," (props) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props)",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state= ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"to"),": ",_react2.default.createElement("span",{className:"hljs-number"},"0"),",",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"from"),": ",_react2.default.createElement("span",{className:"hljs-number"},"0"),_react2.default.createElement("br",null),"        ","}",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    componentDidMount() ","{",_react2.default.createElement("br",null),"        setTimeout(",_react2.default.createElement("span",{className:"hljs-function"},_react2.default.createElement("span",{className:"hljs-params"},"()")," =>")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("span",{className:"hljs-attr"},"to"),": ",_react2.default.createElement("span",{className:"hljs-number"},"709394"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"from"),": ",_react2.default.createElement("span",{className:"hljs-number"},"234.2343"),"}","), ",_react2.default.createElement("span",{className:"hljs-number"},"1300"),")",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    render() ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"FlipNumber")," ",_react2.default.createElement("span",{className:"hljs-attr"},"useGroup")," ",_react2.default.createElement("span",{className:"hljs-attr"},"delay"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","1000","}")," ",_react2.default.createElement("span",{className:"hljs-attr"},"decimal"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","2","}")," ",_react2.default.createElement("span",{className:"hljs-attr"},"from"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.state.from","}")," ",_react2.default.createElement("span",{className:"hljs-attr"},"to"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.state.to","}")," ",_react2.default.createElement("span",{className:"hljs-attr"},"className"),"=",_react2.default.createElement("span",{className:"hljs-string"},"'gm-text-red gm-font-20'"),"/>"),_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null)))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<FlipNumberWrap/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"to(number | isRequired)"),": 最后要显示的数字"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"from(number)"),": 滚动的起始数，默认为 0"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"delay(number)"),": 延迟，默认为 0"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"duration(number)"),": 滚动时长，默认为 1500 毫秒"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"easeFn(func)"),": 缓动函数，控制滚动的加速度，默认起末慢，中间快"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"individually(bool)"),": 是否逐个数字滚动, 默认 true"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"decimal(number)"),": 小数点个数，默认无小数点"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"useGroup(bool)"),": 是否启用大数逗号分组")))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);