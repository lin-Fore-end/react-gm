(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{155:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor};function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var obj,_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(12);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var CollapseWrap=function(){function CollapseWrap(props){_classCallCheck(this,CollapseWrap);var _this=_possibleConstructorReturn(this,(CollapseWrap.__proto__||Object.getPrototypeOf(CollapseWrap)).call(this,props));return _this.state={show:!1},_this}return _inherits(CollapseWrap,_react2.default.Component),_createClass(CollapseWrap,[{key:"handleCollapse",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement("button",{onClick:this.handleCollapse.bind(this),id:"intro4"},"Collapse toggle"),_react2.default.createElement(_index.Collapse,{in:this.state.show},_react2.default.createElement("div",{style:{background:"red"}},"啦啦啦啦",_react2.default.createElement("br",null),"lalala",_react2.default.createElement("br",null),"666666"),_react2.default.createElement("div",{style:{background:"red"}},"啦啦啦啦",_react2.default.createElement("br",null),"lalala",_react2.default.createElement("br",null),"666666"),_react2.default.createElement("div",{style:{background:"red"}},"啦啦啦啦",_react2.default.createElement("br",null),"lalala",_react2.default.createElement("br",null),"666666")))}}]),CollapseWrap}(),MarkdownItReactComponent=function(){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this2=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this2.state={},_this2}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"collapse"},_react2.default.createElement("a",{className:"header-anchor",href:"#collapse","aria-hidden":"true"},"¶")," Collapse"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode3?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(CollapseWrap,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"CollapseWrap")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"show"),": ",_react2.default.createElement("span",{className:"hljs-literal"},"false"),_react2.default.createElement("br",null),"        ","}",";",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    handleCollapse() ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"show"),": !",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state.show",_react2.default.createElement("br",null),"        ","}",");",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    render() ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"button")," ",_react2.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","::this.handleCollapse","}")," ",_react2.default.createElement("span",{className:"hljs-attr"},"id"),"=",_react2.default.createElement("span",{className:"hljs-string"},'"intro4"'),">"),"Collapse toggle",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"button"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Collapse")," ",_react2.default.createElement("span",{className:"hljs-attr"},"in"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.state.show","}"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div")," ",_react2.default.createElement("span",{className:"hljs-attr"},"style"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","{","background:")," '",_react2.default.createElement("span",{className:"hljs-attr"},"red"),"'","}","}",">"),_react2.default.createElement("br",null),"                        啦啦啦啦",_react2.default.createElement("br",null),"                        ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"br"),"/>"),_react2.default.createElement("br",null),"                        lalala",_react2.default.createElement("br",null),"                        ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"br"),"/>"),_react2.default.createElement("br",null),"                        666666",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div")," ",_react2.default.createElement("span",{className:"hljs-attr"},"style"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","{","background:")," '",_react2.default.createElement("span",{className:"hljs-attr"},"red"),"'","}","}",">"),_react2.default.createElement("br",null),"                        啦啦啦啦",_react2.default.createElement("br",null),"                        ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"br"),"/>"),_react2.default.createElement("br",null),"                        lalala",_react2.default.createElement("br",null),"                        ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"br"),"/>"),_react2.default.createElement("br",null),"                        666666",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div")," ",_react2.default.createElement("span",{className:"hljs-attr"},"style"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","{","background:")," '",_react2.default.createElement("span",{className:"hljs-attr"},"red"),"'","}","}",">"),_react2.default.createElement("br",null),"                        啦啦啦啦",_react2.default.createElement("br",null),"                        ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"br"),"/>"),_react2.default.createElement("br",null),"                        lalala",_react2.default.createElement("br",null),"                        ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"br"),"/>"),_react2.default.createElement("br",null),"                        666666",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Collapse"),">"),_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">")),_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<CollapseWrap/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,3)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"in (bool|isRequired)")," 是否显示"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"...rest"))))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);