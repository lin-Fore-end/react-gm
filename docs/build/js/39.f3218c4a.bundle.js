(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{176:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor};function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var obj,_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(12);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var Component=function(){function Component(){var _ref,_temp,_this;_classCallCheck(this,Component);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_temp=_this=_possibleConstructorReturn(this,(_ref=Component.__proto__||Object.getPrototypeOf(Component)).call.apply(_ref,[this].concat(args)))).state={selected:"南山",multipleSelected:["南山","罗湖"]},_possibleConstructorReturn(_this,_temp)}return _inherits(Component,_react2.default.Component),_createClass(Component,[{key:"render",value:function(){var _this2=this;return _react2.default.createElement("div",null,_react2.default.createElement(_index.List,{data:[{value:"南山",text:"南山"},{value:"福田",text:"福田"},{value:"龙岗",text:"龙岗"},{value:"罗湖",text:"罗湖"}],selected:this.state.selected,onSelect:function(selected){return _this2.setState({selected:selected})}}),_react2.default.createElement(_index.List,{multiple:!0,data:[{value:"南山",text:"南山"},{value:"福田",text:"福田"},{value:"龙岗",text:"龙岗"},{value:"罗湖",text:"罗湖"}],selected:this.state.multipleSelected,onSelect:function(selected){return _this2.setState({multipleSelected:selected})}}),_react2.default.createElement("div",{className:"gm-padding-10"}),_react2.default.createElement(_index.List,{data:[{label:"分组二",children:[{value:"南山",text:"南山"},{value:"福田",text:"福田"}]},{label:"分组一",children:[{value:"龙岗",text:"龙岗"},{value:"罗湖",text:"罗湖"}]}],selected:this.state.selected,onSelect:function(selected){return _this2.setState({selected:selected})},isGroupList:!0}),_react2.default.createElement(_index.List,{multiple:!0,data:[{label:"分组二",children:[{value:"南山",text:"南山"},{value:"福田",text:"福田"}]},{label:"分组一",children:[{value:"龙岗",text:"龙岗"},{value:"罗湖",text:"罗湖"}]}],isGroupList:!0,selected:this.state.multipleSelected,onSelect:function(selected){return _this2.setState({multipleSelected:selected})}}))}}]),Component}(),MarkdownItReactComponent=function(){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this3=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this3.state={},_this3}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"list"},_react2.default.createElement("a",{className:"header-anchor",href:"#list","aria-hidden":"true"},"¶")," List"),_react2.default.createElement("p",null,"现在列表各自实现，有点冗余，UI也不统一，估统一下"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(Component,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"Component")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"  state = ","{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attr"},"selected"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'南山'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attr"},"multipleSelected"),": [",_react2.default.createElement("span",{className:"hljs-string"},"'南山'"),", ",_react2.default.createElement("span",{className:"hljs-string"},"'罗湖'"),"]",_react2.default.createElement("br",null),"  ","}",_react2.default.createElement("br",null),"render () ","{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"      <div>",_react2.default.createElement("br",null),"        <List",_react2.default.createElement("br",null),"          data=","{","[",_react2.default.createElement("br",null),"            ","{"," value: '南山', text: '南山' ","}",",",_react2.default.createElement("br",null),"            ","{"," value: '福田', text: '福田' ","}",",",_react2.default.createElement("br",null),"            ","{"," value: '龙岗', text: '龙岗' ","}",",",_react2.default.createElement("br",null),"            ","{"," value: '罗湖', text: '罗湖' ","}",_react2.default.createElement("br",null),"          ]","}",_react2.default.createElement("br",null),"          selected=","{","this.state.selected","}",_react2.default.createElement("br",null),"          onSelect=","{","selected => this.setState(","{"," selected ","}",")","}",_react2.default.createElement("br",null),"        />",_react2.default.createElement("br",null),"<List",_react2.default.createElement("br",null),"          multiple",_react2.default.createElement("br",null),"          data=","{","[",_react2.default.createElement("br",null),"            ","{"," value: '南山', text: '南山' ","}",",",_react2.default.createElement("br",null),"            ","{"," value: '福田', text: '福田' ","}",",",_react2.default.createElement("br",null),"            ","{"," value: '龙岗', text: '龙岗' ","}",",",_react2.default.createElement("br",null),"            ","{"," value: '罗湖', text: '罗湖' ","}",_react2.default.createElement("br",null),"          ]","}",_react2.default.createElement("br",null),"          selected=","{","this.state.multipleSelected","}",_react2.default.createElement("br",null),"          onSelect=","{","selected => this.setState(","{"," multipleSelected: selected ","}",")","}",_react2.default.createElement("br",null),"        />",_react2.default.createElement("br",null),"<div className='gm-padding-10'/>",_react2.default.createElement("br",null),"<List",_react2.default.createElement("br",null),"          data=","{","[",_react2.default.createElement("br",null),"            ","{",_react2.default.createElement("br",null),"              label: '分组二',",_react2.default.createElement("br",null),"              children: [",_react2.default.createElement("br",null),"                ","{"," value: '南山', text: '南山' ","}",",",_react2.default.createElement("br",null),"                ","{"," value: '福田', text: '福田' ","}",_react2.default.createElement("br",null),"              ]",_react2.default.createElement("br",null),"            ","}",",",_react2.default.createElement("br",null),"            ","{",_react2.default.createElement("br",null),"              label: '分组一',",_react2.default.createElement("br",null),"              children: [",_react2.default.createElement("br",null),"                ","{"," value: '龙岗', text: '龙岗' ","}",",",_react2.default.createElement("br",null),"                ","{"," value: '罗湖', text: '罗湖' ","}",_react2.default.createElement("br",null),"              ]",_react2.default.createElement("br",null),"            ","}",_react2.default.createElement("br",null),"          ]","}",_react2.default.createElement("br",null),"          selected=","{","this.state.selected","}",_react2.default.createElement("br",null),"          onSelect=","{","selected => this.setState(","{"," selected ","}",")","}",_react2.default.createElement("br",null),"          isGroupList",_react2.default.createElement("br",null),"        />",_react2.default.createElement("br",null),"<List",_react2.default.createElement("br",null),"          multiple",_react2.default.createElement("br",null),"          data=","{","[",_react2.default.createElement("br",null),"            ","{",_react2.default.createElement("br",null),"              label: '分组二',",_react2.default.createElement("br",null),"              children: [",_react2.default.createElement("br",null),"                ","{"," value: '南山', text: '南山' ","}",",",_react2.default.createElement("br",null),"                ","{"," value: '福田', text: '福田' ","}",_react2.default.createElement("br",null),"              ]",_react2.default.createElement("br",null),"            ","}",",",_react2.default.createElement("br",null),"            ","{",_react2.default.createElement("br",null),"              label: '分组一',",_react2.default.createElement("br",null),"              children: [",_react2.default.createElement("br",null),"                ","{"," value: '龙岗', text: '龙岗' ","}",",",_react2.default.createElement("br",null),"                ","{"," value: '罗湖', text: '罗湖' ","}",_react2.default.createElement("br",null),"              ]",_react2.default.createElement("br",null),"            ","}",_react2.default.createElement("br",null),"          ]","}",_react2.default.createElement("br",null),"          isGroupList",_react2.default.createElement("br",null),"          selected=","{","this.state.multipleSelected","}",_react2.default.createElement("br",null),"          onSelect=","{","selected => this.setState(","{"," multipleSelected: selected ","}",")","}",_react2.default.createElement("br",null),"        />",_react2.default.createElement("br",null),"      </div>",_react2.default.createElement("br",null),"    )",_react2.default.createElement("br",null),"  ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<Component/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"data (array|isRequired)")," value text"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"selected (any)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onSelected (func)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"multiple (bool)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"renderItem (func)")," 自定义渲染Item"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"isScrollTo (bool)")," 是否滚动到已选项"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"isGroupList (bool)")," true 则 data 的格式是 ","[{label, children: [{value, text}]}]"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"...rest"))))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);