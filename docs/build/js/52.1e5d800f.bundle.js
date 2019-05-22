(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{189:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor};function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var obj,_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(12);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var RadioWrap=function(){function RadioWrap(props){_classCallCheck(this,RadioWrap);var _this=_possibleConstructorReturn(this,(RadioWrap.__proto__||Object.getPrototypeOf(RadioWrap)).call(this,props));return _this.state={city:null,city2:null},_this}return _inherits(RadioWrap,_react2.default.Component),_createClass(RadioWrap,[{key:"render",value:function(){var _this2=this;return _react2.default.createElement("div",null,_react2.default.createElement(_index.RadioGroup,{name:"city",value:this.state.city,onChange:function(v){return _this2.setState({city:v})}},_react2.default.createElement(_index.Radio,{value:1,disabled:!0},"广州"),_react2.default.createElement(_index.Radio,{value:2},"深圳"),_react2.default.createElement(_index.Radio,{value:3},"成都")),_react2.default.createElement("hr",null),_react2.default.createElement(_index.RadioGroup,{name:"city2",inline:!0,value:this.state.city2,onChange:function(v){return _this2.setState({city2:v})}},_react2.default.createElement(_index.Radio,{value:1,disabled:!0},"广州"),_react2.default.createElement(_index.Radio,{value:2},"深圳"),_react2.default.createElement(_index.Radio,{value:3},"成都")))}}]),RadioWrap}(),CheckBoxWrap=function(){function CheckBoxWrap(props){_classCallCheck(this,CheckBoxWrap);var _this3=_possibleConstructorReturn(this,(CheckBoxWrap.__proto__||Object.getPrototypeOf(CheckBoxWrap)).call(this,props));return _this3.state={city3:[],city4:[],city5:[]},_this3}return _inherits(CheckBoxWrap,_react2.default.Component),_createClass(CheckBoxWrap,[{key:"render",value:function(){var _this4=this;return _react2.default.createElement("div",null,_react2.default.createElement(_index.CheckboxGroup,{name:"city3",value:this.state.city3,onChange:function(v){return _this4.setState({city3:v})}},_react2.default.createElement(_index.Checkbox,{value:1,disabled:!0},"广州"),_react2.default.createElement(_index.Checkbox,{value:2},"深圳"),_react2.default.createElement(_index.Checkbox,{value:3},"成都")),_react2.default.createElement("hr",null),_react2.default.createElement(_index.CheckboxGroup,{name:"city4",inline:!0,value:this.state.city4,onChange:function(v){return _this4.setState({city4:v})}},_react2.default.createElement(_index.Checkbox,{value:1,disabled:!0},"广州"),_react2.default.createElement(_index.Checkbox,{value:2},"深圳"),_react2.default.createElement(_index.Checkbox,{value:3},"成都")),_react2.default.createElement("hr",null),_react2.default.createElement(_index.CheckboxGroup,{name:"city5",inline:!0,value:this.state.city5,col:3,onChange:function(v){return _this4.setState({city5:v})}},_react2.default.createElement(_index.Checkbox,{value:1,disabled:!0},"1"),_react2.default.createElement(_index.Checkbox,{value:2},"2"),_react2.default.createElement(_index.Checkbox,{value:3},"3"),_react2.default.createElement(_index.Checkbox,{value:4},"4"),_react2.default.createElement(_index.Checkbox,{value:5},"5"),_react2.default.createElement(_index.Checkbox,{value:6},"6")))}}]),CheckBoxWrap}(),MarkdownItReactComponent=function(){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this5=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this5.state={},_this5}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"radio-checkbox"},_react2.default.createElement("a",{className:"header-anchor",href:"#radio-checkbox","aria-hidden":"true"},"¶")," Radio & Checkbox"),_react2.default.createElement("p",null,"配合 ",_react2.default.createElement("code",null,"RadioGroup")," 一起用，onChange 返回的是原始值，非原始 radio 组件的字符串值"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(RadioWrap,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"RadioWrap")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props)","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"city"),": ",_react2.default.createElement("span",{className:"hljs-literal"},"null"),",",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"city2"),": ",_react2.default.createElement("span",{className:"hljs-literal"},"null"),",",_react2.default.createElement("br",null),"        ","}",";",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"render() ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"RadioGroup"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),"=",_react2.default.createElement("span",{className:"hljs-string"},'"city"')," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.state.city","}"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","v")," =>")," this.setState(","{","city: v","}",")","}",_react2.default.createElement("br",null),"                >",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Radio")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","1","}")," ",_react2.default.createElement("span",{className:"hljs-attr"},"disabled"),">"),"广州",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Radio"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Radio")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","2","}"),">"),"深圳",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Radio"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Radio")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","3","}"),">"),"成都",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Radio"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"RadioGroup"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"hr"),"/>"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"RadioGroup"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),"=",_react2.default.createElement("span",{className:"hljs-string"},'"city2"'),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"inline"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.state.city2","}"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","v")," =>")," this.setState(","{","city2: v","}",")","}",_react2.default.createElement("br",null),"                >",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Radio")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","1","}")," ",_react2.default.createElement("span",{className:"hljs-attr"},"disabled"),">"),"广州",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Radio"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Radio")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","2","}"),">"),"深圳",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Radio"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Radio")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","3","}"),">"),"成都",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Radio"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"RadioGroup"),">"),_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">")),_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<RadioWrap />",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},_react2.default.createElement("i",null)))),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode10?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(CheckBoxWrap,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"CheckBoxWrap")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props)","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"city3"),": [],",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"city4"),": [],",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"city5"),": []",_react2.default.createElement("br",null),"        ","}",";",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    render() ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"CheckboxGroup"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),"=",_react2.default.createElement("span",{className:"hljs-string"},'"city3"'),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.state.city3","}"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","v")," =>")," this.setState(","{","city3: v","}",")","}",_react2.default.createElement("br",null),"                >",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","1","}")," ",_react2.default.createElement("span",{className:"hljs-attr"},"disabled"),">"),"广州",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","2","}"),">"),"深圳",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","3","}"),">"),"成都",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"CheckboxGroup"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"hr"),"/>"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"CheckboxGroup"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),"=",_react2.default.createElement("span",{className:"hljs-string"},'"city4"'),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"inline"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.state.city4","}"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","v")," =>")," this.setState(","{","city4: v","}",")","}",_react2.default.createElement("br",null),"                >",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","1","}")," ",_react2.default.createElement("span",{className:"hljs-attr"},"disabled"),">"),"广州",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","2","}"),">"),"深圳",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","3","}"),">"),"成都",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"CheckboxGroup"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"hr"),"/>"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"CheckboxGroup"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),"=",_react2.default.createElement("span",{className:"hljs-string"},'"city5"'),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"inline"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.state.city5","}"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"col"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","3","}"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","v")," =>")," this.setState(","{","city5: v","}",")","}",_react2.default.createElement("br",null),"                >",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","1","}")," ",_react2.default.createElement("span",{className:"hljs-attr"},"disabled"),">"),"1",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","2","}"),">"),"2",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","3","}"),">"),"3",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","4","}"),">"),"4",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","5","}"),">"),"5",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",_react2.default.createElement("span",{className:"hljs-attr"},"value"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","6","}"),">"),"6",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"CheckboxGroup"),">"),_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">")),_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<CheckBoxWrap />",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,10)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"radio-props"},_react2.default.createElement("a",{className:"header-anchor",href:"#radio-props","aria-hidden":"true"},"¶")," Radio Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"value (any)")," 表单值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onChange (func)"))),_react2.default.createElement("h3",{id:"radiogroup-props"},_react2.default.createElement("a",{className:"header-anchor",href:"#radiogroup-props","aria-hidden":"true"},"¶")," RadioGroup Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"name (string|isRequired)")," 表单名"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"value (any)")," 选择值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onChange (func(value))")," value 是选择值 Radio value 值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"inline (bool)")," 是否行内排列")),_react2.default.createElement("h3",{id:"checkbox"},_react2.default.createElement("a",{className:"header-anchor",href:"#checkbox","aria-hidden":"true"},"¶")," Checkbox"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"value (any)")," 表单值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onChange (func)"))),_react2.default.createElement("h3",{id:"checkboxgroup"},_react2.default.createElement("a",{className:"header-anchor",href:"#checkboxgroup","aria-hidden":"true"},"¶")," CheckboxGroup"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"name (string|isRequired)")," 表单名"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"value (array)")," 选择值"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onChange (func(value))")," value 是选择值的 CheckBox value 数组"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"inline (bool)")," 是否行内排列"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"col (number)")," 列数")))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);