(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{253:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var obj,_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj};__webpack_require__(5);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var glyphions=["ifont-image","ifont-14052218","ifont-weixin","ifont-iconfontquestion","ifont-star-half","ifont-warning","ifont-star","ifont-location","ifont-bar-chart","ifont-card","ifont-info","ifont-left","ifont-comment","ifont-calendar-1","ifont-info-circle","ifont-bu","ifont-success","ifont-report","ifont-lab","ifont-close","ifont-unstar","ifont-zan","ifont-calendar","ifont-project","ifont-pi-liang","ifont-qian","ifont-hcd","ifont-jian","ifont-jia","ifont-up","ifont-down","ifont-xinhao5","ifont-xinhao1","ifont-xinhao3","ifont-xinhao2","ifont-xinhao4"],Component=function(_React$Component){function Component(){return _classCallCheck(this,Component),_possibleConstructorReturn(this,(Component.__proto__||Object.getPrototypeOf(Component)).apply(this,arguments))}return _inherits(Component,_react2.default.Component),_createClass(Component,[{key:"render",value:function(){return _react2.default.createElement("div",null,_.map(glyphions,function(v){return _react2.default.createElement("div",{key:v},_react2.default.createElement("i",{style:{fontSize:"30px",padding:"10px"},className:"ifont "+v}),v)}))}}]),Component}(),MarkdownItReactComponent=function(_React$Component2){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this2=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this2.state={},_this2}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"iconfont"},_react2.default.createElement("a",{className:"header-anchor",href:"#iconfont","aria-hidden":"true"},"¶")," Iconfont"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode3?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(Component,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"图标")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-keyword"},"const")," glyphions = [",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-image'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-14052218'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-weixin'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-iconfontquestion'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-star-half'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-warning'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-star'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-location'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-bar-chart'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-card'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-info'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-left'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-comment'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-calendar-1'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-info-circle'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-bu'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-success'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-report'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-lab'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-close'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-unstar'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-zan'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-calendar'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-project'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-pi-liang'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-qian'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-hcd'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-jian'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-jia'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-up'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-down'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-xinhao5'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-xinhao1'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-xinhao3'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-xinhao2'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-string"},"'ifont-xinhao4'"),_react2.default.createElement("br",null),"];",_react2.default.createElement("br",null),_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"Component")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    render() ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ","{","_.map(glyphions, v => (",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div")," ",_react2.default.createElement("span",{className:"hljs-attr"},"key"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","v","}"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"i")," ",_react2.default.createElement("span",{className:"hljs-attr"},"style"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","{","fontSize:")," '",_react2.default.createElement("span",{className:"hljs-attr"},"30px"),"', ",_react2.default.createElement("span",{className:"hljs-attr"},"padding:")," '",_react2.default.createElement("span",{className:"hljs-attr"},"10px"),"'","}","}"," ",_react2.default.createElement("span",{className:"hljs-attr"},"className"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{"),'"',_react2.default.createElement("span",{className:"hljs-attr"},"ifont"),' " + ',_react2.default.createElement("span",{className:"hljs-attr"},"v"),"}","/>"),_react2.default.createElement("br",null),"                    ","{","v","}",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ))","}",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null)))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<Component/>",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",null))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,3)},_react2.default.createElement("i",null)))))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);