(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react2=_interopRequireDefault(__webpack_require__(0)),_more_select2=_interopRequireDefault(__webpack_require__(45));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var data=[{value:1,text:"南山"},{value:2,text:"福田"},{value:3,text:"罗湖"},{value:4,text:"宝安"},{value:5,text:"福永"},{value:6,text:"坪洲"},{value:7,text:"西乡"},{value:8,text:"西乡8"},{value:9,text:"西乡9"},{value:10,text:"西乡10"},{value:11,text:"西乡11"}],Component=function(_React$Component){function Component(props){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Component);var _this=function(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(Component.__proto__||Object.getPrototypeOf(Component)).call(this,props));return _this.state={selected:{value:1,text:"科技园"},data:data,multipleSelected:[{value:3,text:"大新"},{value:2,text:"大冲"}],isFocus:!1},_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(Component,_react2.default.Component),_createClass(Component,[{key:"render",value:function(){var _this2=this;return _react2.default.createElement("div",null,_react2.default.createElement("div",null,"默认"),_react2.default.createElement("div",{tabIndex:"0"},"afaf"),_react2.default.createElement(_more_select2.default,{popoverType:"realFocus",data:data,selected:this.state.selected,onSelect:function(selected){_this2.setState({selected:selected})}},_react2.default.createElement("div",null,_react2.default.createElement("div",{tabIndex:0},"moreselect"),_react2.default.createElement("input",{type:"text"}))))}}]),Component}();exports.default=Component}}]);