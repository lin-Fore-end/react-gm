(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{193:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var obj,_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(12);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var ModalWrap4=function(_React$Component){function ModalWrap4(){return _classCallCheck(this,ModalWrap4),_possibleConstructorReturn(this,(ModalWrap4.__proto__||Object.getPrototypeOf(ModalWrap4)).apply(this,arguments))}return _inherits(ModalWrap4,_react2.default.Component),_createClass(ModalWrap4,[{key:"handleModal",value:function(){_index.CleanModal.render({children:_react2.default.createElement("div",null,"啦啦啦啦阿里",_react2.default.createElement("br",null),"干净的modal"),onHide:_index.CleanModal.hide,style:{width:"auto",background:"#fff",margin:"50px",height:"calc(100% - 100px)"}})}},{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement("button",{className:"btn btn-default",onClick:this.handleModal},"clean Modal"))}}]),ModalWrap4}(),ModalWrap5=function(_React$Component2){function ModalWrap5(){return _classCallCheck(this,ModalWrap5),_possibleConstructorReturn(this,(ModalWrap5.__proto__||Object.getPrototypeOf(ModalWrap5)).apply(this,arguments))}return _inherits(ModalWrap5,_react2.default.Component),_createClass(ModalWrap5,[{key:"handleModal",value:function(){_index.RightSideModal.render({children:_react2.default.createElement("div",null,Array(100).fill(_react2.default.createElement("div",null,"这是一行"))),title:"右侧弹出modal",onHide:_index.RightSideModal.hide,opacityMask:!0,style:{width:"600px"}})}},{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement("button",{className:"btn btn-default",onClick:this.handleModal},"right-side Modal"))}}]),ModalWrap5}(),MarkdownItReactComponent=function(_React$Component3){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this3=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this3.state={},_this3}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"modal"},_react2.default.createElement("a",{className:"header-anchor",href:"#modal","aria-hidden":"true"},"¶")," Modal"),_react2.default.createElement("p",null,"干净模态框 & 右侧模态框.(modal的高阶组件)"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(ModalWrap4,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"干净的Modal")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"ModalWrap4")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    handleModal()","{",_react2.default.createElement("br",null),"        CleanModal.render(","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"children"),": ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),"啦啦啦啦阿里",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"干净的modal",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">")),",",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"onHide"),": CleanModal.hide,",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"style"),": ","{",_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-attr"},"width"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'auto'"),",",_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-attr"},"background"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'#fff'"),",",_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-attr"},"margin"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'50px'"),",",_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-attr"},"height"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'calc(100% - 100px)'"),_react2.default.createElement("br",null),"            ","}",_react2.default.createElement("br",null),"        ","}",");",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"render() ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"button"),_react2.default.createElement("br",null),"                        ",_react2.default.createElement("span",{className:"hljs-attr"},"className"),"=",_react2.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),_react2.default.createElement("br",null),"                        ",_react2.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.handleModal","}"),_react2.default.createElement("br",null),"                    >"),"clean Modal",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"button"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">")),_react2.default.createElement("br",null),"            );",_react2.default.createElement("br",null),"        ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<ModalWrap4/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},_react2.default.createElement("i",null)))),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode10?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(ModalWrap5,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"右侧的modal")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"ModalWrap5")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    handleModal()","{",_react2.default.createElement("br",null),"        RightSideModal.render(","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"children"),":",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ","{","Array(100).fill(",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),"这是一行",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),")","}",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">")),",",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"title"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'右侧弹出modal'"),",",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"onHide"),": RightSideModal.hide,",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"opacityMask"),": ",_react2.default.createElement("span",{className:"hljs-literal"},"true"),",",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"style"),": ","{",_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-attr"},"width"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'600px'"),_react2.default.createElement("br",null),"            ","}",_react2.default.createElement("br",null),"        ","}",");",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"render() ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"button"),_react2.default.createElement("br",null),"                        ",_react2.default.createElement("span",{className:"hljs-attr"},"className"),"=",_react2.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),_react2.default.createElement("br",null),"                        ",_react2.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.handleModal","}"),_react2.default.createElement("br",null),"                    >"),"right-side Modal",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"button"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">")),_react2.default.createElement("br",null),"            );",_react2.default.createElement("br",null),"        ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<ModalWrap5/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,10)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("p",null,"基于modal二次封装,用法上和modal保持一致"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"show (bool|isRequired)")," 是否显示"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"disableMaskClose (bool)")," 是否启用点击mask关闭modal"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onHide (func)")," 隐藏触发回调"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"size (string ['lg', 'md', 'sm'])")," modal尺寸，默认md"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"title (string|element)")," 标题"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"children")," 模态框里面的内容"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"noContentPadding")," 内容没有padding")),_react2.default.createElement("h3",{id:"static"},_react2.default.createElement("a",{className:"header-anchor",href:"#static","aria-hidden":"true"},"¶")," Static"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"render")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"hide"))))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);