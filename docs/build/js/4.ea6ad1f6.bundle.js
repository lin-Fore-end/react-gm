(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{230:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react2=_interopRequireDefault(__webpack_require__(0)),_receive_time=__webpack_require__(290),_lodash2=_interopRequireDefault(__webpack_require__(2)),_index=__webpack_require__(7),_moment2=_interopRequireDefault(__webpack_require__(17));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var testDatas=[{e_span_time:2,r_end:"02:00",r_start:"22:00",receiveEndSpan:1,receiveTimeSpan:"30",s_span_time:0,time_config_id:"ST997"},{e_span_time:0,r_end:"02:00",r_start:"02:00",receiveEndSpan:1,receiveTimeSpan:"30",s_span_time:0,time_config_id:"ST997"},{e_span_time:0,r_end:"23:00",r_start:"22:00",receiveEndSpan:null,receiveTimeSpan:"30",s_span_time:0,time_config_id:"ST997"},{e_span_time:2,r_end:"02:00",r_start:"22:00",receiveEndSpan:1,receiveTimeSpan:"30",s_span_time:0,time_config_id:"ST997"}],ReceiveTime=function(_React$Component){function ReceiveTime(props){_classCallCheck(this,ReceiveTime);var _this=_possibleConstructorReturn(this,(ReceiveTime.__proto__||Object.getPrototypeOf(ReceiveTime)).call(this,props));return _this.handleStart=function(date){_this.setState({values:[+date,null]})},_this.state={values:[null,null]},_this}return _inherits(ReceiveTime,_react2.default.Component),_createClass(ReceiveTime,[{key:"render",value:function(){var _this2=this,receive_time_limit=this.props.limit,cycleList=(0,_receive_time.getCycleList)(receive_time_limit),sV=this.state.values[0],eV=this.state.values[1],startCycleList=(0,_receive_time.getStartCycleList)(cycleList),endCycleList=[];return sV&&(endCycleList=(0,_receive_time.getEndCycleList)((0,_moment2.default)(sV),cycleList)),_react2.default.createElement("div",null,_react2.default.createElement("pre",null,JSON.stringify(receive_time_limit,null,2)),_react2.default.createElement(_index.Flex,null,_react2.default.createElement("div",null,_react2.default.createElement("div",null,"开始 ",sV&&(0,_moment2.default)(sV).format("DD HH:mm")),_lodash2.default.map(startCycleList,function(c,i){return _react2.default.createElement("div",{key:i},_react2.default.createElement("hr",null),_lodash2.default.map(c,function(d,j){return _react2.default.createElement("div",{key:j,onClick:_this2.handleStart.bind(_this2,d)},d.format("DD HH:mm"))}))})),_react2.default.createElement("div",null,_react2.default.createElement("div",null,"结算 ",eV&&(0,_moment2.default)(eV).format("DD HH:mm")),_lodash2.default.map(endCycleList,function(c,i){return _react2.default.createElement("div",{key:i},_react2.default.createElement("hr",null),_lodash2.default.map(c,function(d,j){return _react2.default.createElement("div",{key:j,onClick:_this2.handleStart.bind(_this2,d)},d.format("DD HH:mm"))}))})),_react2.default.createElement("div",null,_react2.default.createElement("div",null,"转换成dayList"),_lodash2.default.map((0,_receive_time.cycleListToDayList)(startCycleList),function(c,i){return _react2.default.createElement("div",{key:i},_react2.default.createElement("hr",null),_lodash2.default.map(c,function(d,j){return _react2.default.createElement("div",{key:j,onClick:_this2.handleStart.bind(_this2,d)},d.format("DD HH:mm"))}))}))))}}]),ReceiveTime}(),Component=function(_React$Component2){function Component(){return _classCallCheck(this,Component),_possibleConstructorReturn(this,(Component.__proto__||Object.getPrototypeOf(Component)).apply(this,arguments))}return _inherits(Component,_react2.default.Component),_createClass(Component,[{key:"render",value:function(){return _react2.default.createElement("div",null,_lodash2.default.map(testDatas,function(limit,i){return _react2.default.createElement(ReceiveTime,{key:i,limit:(0,_receive_time.processReceiveTimeLimit)(limit)})}))}}]),Component}();exports.default=Component},290:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cycleListToDayList=exports.getEndCycleList=exports.getStartCycleList=exports.getCycleList=exports.processStartEndValues=exports.processReceiveTimeLimit=void 0;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_lodash2=_interopRequireDefault(__webpack_require__(2)),_moment2=_interopRequireDefault(__webpack_require__(17));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function getTime(spanTime,timeStr){return(0,_moment2.default)().add(spanTime,"days").set({hours:timeStr.split(":")[0],minute:timeStr.split(":")[1]}).startOf("minute")}exports.processReceiveTimeLimit=function(receive_time_limit){var receiveEndSpan=receive_time_limit.receiveEndSpan,s_span_time=receive_time_limit.s_span_time,e_span_time=receive_time_limit.e_span_time;return _extends({},receive_time_limit,{receiveEndSpan:null!==receiveEndSpan?receiveEndSpan:e_span_time-s_span_time})},exports.processStartEndValues=function(receiveTime){return receiveTime?0===receiveTime.defaultSpanStartFlag&&(0,_moment2.default)().set({hours:receiveTime.defaultStart.split(":")[0],minute:receiveTime.defaultStart.split(":")[1]}).startOf("minute")<(0,_moment2.default)()?{startValues:[],endValues:[]}:{startValues:[receiveTime.defaultSpanStartFlag,receiveTime.defaultStart],endValues:[receiveTime.defaultSpanEndFlag,receiveTime.defaultEnd]}:{startValues:[],endValues:[]}},exports.getCycleList=function(receive_time_limit){var s_span_time=receive_time_limit.s_span_time,e_span_time=receive_time_limit.e_span_time,cycleList=_lodash2.default.range(s_span_time,e_span_time+1);return _lodash2.default.map(cycleList,function(cycle){return function(spanTime,receive_time_limit){for(var receiveEndSpan=receive_time_limit.receiveEndSpan,r_start=receive_time_limit.r_start,r_end=receive_time_limit.r_end,receiveTimeSpan=receive_time_limit.receiveTimeSpan,now=(0,_moment2.default)(),flag=getTime(spanTime,r_start),end=getTime(spanTime+receiveEndSpan,r_end),result=[];flag<=end;)now<flag&&result.push((0,_moment2.default)(flag)),flag=flag.add(~~receiveTimeSpan,"minutes");return result}(cycle,receive_time_limit)})},exports.getStartCycleList=function(cycleList){var result=_lodash2.default.map(cycleList,function(list){return list.slice(0,-1)});return _lodash2.default.filter(result,function(v){return 1<v.length})},exports.getEndCycleList=function(startDate,cycleList){var cycleIndex=0;return _lodash2.default.each(cycleList,function(list,i){startDate>list[0]&&(cycleIndex=i)}),[_lodash2.default.filter(cycleList[cycleIndex],function(v){return startDate<v})]},exports.cycleListToDayList=function(cycleList){var result=[],list=_lodash2.default.flatten(cycleList),dayEnd=null,temp=[];return _lodash2.default.each(list,function(d){dayEnd||(dayEnd=(0,_moment2.default)(d).endOf("day")),dayEnd<d?(result.push(temp),dayEnd=null,temp=[d]):temp.push(d)}),result.push(temp),result}}}]);