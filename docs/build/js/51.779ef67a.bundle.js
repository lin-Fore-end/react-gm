(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{191:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react2=_interopRequireDefault(__webpack_require__(0)),_index=__webpack_require__(12),_lodash2=_interopRequireDefault(__webpack_require__(3));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var QuickPanelDemo=function(_React$Component){function QuickPanelDemo(){return _classCallCheck(this,QuickPanelDemo),_possibleConstructorReturn(this,(QuickPanelDemo.__proto__||Object.getPrototypeOf(QuickPanelDemo)).apply(this,arguments))}return _inherits(QuickPanelDemo,_react2.default.Component),_createClass(QuickPanelDemo,[{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement(_index.QuickPanel,{title:"运营时间设置",right:_react2.default.createElement("button",{disabled:!0},"adfasf")},_react2.default.createElement("div",null,"内容")),_react2.default.createElement("hr",null),_react2.default.createElement("div",null,"quick panel 一起会相连"),_react2.default.createElement(_index.QuickPanel,{title:"运营时间设置",collapse:!0},_react2.default.createElement("div",null,"内容")),_react2.default.createElement(_index.QuickPanel,{title:"运营时间设置",collapse:!0,in:!1},_react2.default.createElement("div",null,"内容")))}}]),QuickPanelDemo}(),Tab=function(_React$Component2){function Tab(){return _classCallCheck(this,Tab),_possibleConstructorReturn(this,(Tab.__proto__||Object.getPrototypeOf(Tab)).apply(this,arguments))}return _inherits(Tab,_react2.default.Component),_createClass(Tab,[{key:"renderCollapseFilter",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement("form",{className:"form-horizontal"},_react2.default.createElement(_index.Flex,{alignCenter:!0,className:"form-group"},_react2.default.createElement(_index.Flex,{alignCenter:!0,className:"col-md-2"},_react2.default.createElement("div",{className:"gm-inline-block"},_react2.default.createElement("select",{className:"form-control",style:{border:"none"}},_react2.default.createElement("option",{value:"1"},"按日期"),_react2.default.createElement("option",{value:"1"},"按周期")))),_react2.default.createElement("div",{className:"col-md-10"},_react2.default.createElement(_index.DateRangePicker,{begin:new Date,end:new Date,onChange:_lodash2.default.noop,inputClassName:"form-control"}))),_react2.default.createElement(_index.Flex,{alignCenter:!0,className:"form-group"},_react2.default.createElement(_index.Flex,{alignCenter:!0,className:"col-md-2"},"商品筛选："),_react2.default.createElement("div",{className:"col-md-10"},_react2.default.createElement("div",{className:"gm-inline-block"},_react2.default.createElement("input",{type:"text",style:{width:"120px"},placeholder:"全部一级分类",className:"form-control gm-inline-block gm-margin-right-5"})),_react2.default.createElement("div",{className:"gm-inline-block"},_react2.default.createElement("input",{type:"text",style:{width:"120px"},placeholder:"全部二级分类",className:"form-control gm-inline-block gm-margin-right-5"})),_react2.default.createElement("div",{className:"gm-inline-block"},_react2.default.createElement("input",{type:"text",style:{width:"120px"},placeholder:"全部三级分类",className:"form-control gm-inline-block"})))),_react2.default.createElement(_index.Flex,{alignCenter:!0,className:"form-group"},_react2.default.createElement(_index.Flex,{alignCenter:!0,className:"col-md-2"},"任务筛选："),_react2.default.createElement("div",{className:"col-md-10"},_react2.default.createElement("div",{className:"gm-inline-block gm-margin-right-5"},_react2.default.createElement("select",{className:"form-control"},_react2.default.createElement("option",{value:"1"},"全部分拣备注"),_react2.default.createElement("option",{value:"2"},"全部分拣备注"))),_react2.default.createElement("div",{className:"gm-inline-block gm-margin-right-5"},_react2.default.createElement("select",{className:"form-control"},_react2.default.createElement("option",{value:"1"},"全部任务类型"),_react2.default.createElement("option",{value:"1"},"全部任务类型"))),_react2.default.createElement("div",{className:"gm-inline-block"},_react2.default.createElement("select",{className:"form-control"},_react2.default.createElement("option",{value:"1"},"全部任务状态"),_react2.default.createElement("option",{value:"1"},"全部任务状态"))))),_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement(_index.Flex,{alignCenter:!0,className:"col-md-2"},"订单筛选："),_react2.default.createElement("div",{className:"col-md-10"},_react2.default.createElement("div",{className:"gm-inline-block"},_react2.default.createElement("select",{className:"form-control"},_react2.default.createElement("option",{value:"1"},"选择运营配置"),_react2.default.createElement("option",{value:"1"},"选择XX配置"))))),_react2.default.createElement(_index.Flex,{alignCenter:!0,className:"form-group"},_react2.default.createElement(_index.Flex,{alignCenter:!0,className:"col-md-2"},"搜索："),_react2.default.createElement("div",{className:"col-md-10"},_react2.default.createElement("input",{style:{width:"350px"},className:"form-control",placeholder:"输入订单号、分拣号、商户信息、商品信息搜索等"}))),_react2.default.createElement(_index.Flex,{alignCenter:!0,className:"form-group gm-padding-left-15"},_react2.default.createElement("button",{type:"submit",className:"btn btn-primary"},"搜索"),_react2.default.createElement("div",{className:"gm-gap-10"}),_react2.default.createElement("a",{href:"",className:"btn btn-default"},"导出"))))}},{key:"render",value:function(){return _react2.default.createElement(_index.QuickTab,{tabs:["按订单查看","按商品查看"],className:"gm-padding-15",isStatic:!0},_react2.default.createElement(_index.QuickTab.QuickTabItem,null,_react2.default.createElement(_index.QuickFilter,{className:"gm-border-top-0",expand:!0,collapseRender:this.renderCollapseFilter},_react2.default.createElement("form",{className:"form-inline"},_react2.default.createElement("select",{className:"form-control gm-margin-right-10 gm-border-0"},_react2.default.createElement("option",{value:"1"},"按周期"),_react2.default.createElement("option",{value:"1"},"按日期")),_react2.default.createElement("select",{className:"form-control gm-margin-right-10"},_react2.default.createElement("option",{value:"1"},"选择运营配置"),_react2.default.createElement("option",{value:"1"},"选择XX配置")),_react2.default.createElement("div",{className:"input-group gm-margin-right-10"},_react2.default.createElement("input",{type:"text",className:"form-control",placeholder:"请输入订单号",style:{minWidth:"250px"}})),_react2.default.createElement("button",{type:"submit",className:"btn btn-primary"},"搜索"),_react2.default.createElement("div",{className:"gm-gap-10"}),_react2.default.createElement("a",{href:"",className:"btn btn-default"},"导出")))),_react2.default.createElement(_index.QuickTab.QuickTabItem,null,_react2.default.createElement(_index.QuickFilter,{className:"gm-border-top-0"},_react2.default.createElement("form",{className:"form-inline"},_react2.default.createElement("div",{className:"input-group gm-margin-right-10"},_react2.default.createElement("input",{type:"text",className:"form-control",placeholder:"请输入商户名称",style:{minWidth:"250px"}})),_react2.default.createElement("button",{type:"submit",className:"btn btn-primary"},"搜索"),_react2.default.createElement("div",{className:"gm-gap-10"}),_react2.default.createElement("a",{href:"",className:"btn btn-default"},"导出")))))}}]),Tab}(),MarkdownItReactComponent=function(_React$Component3){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this3=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this3.state={},_this3}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"quick"},_react2.default.createElement("a",{className:"header-anchor",href:"#quick","aria-hidden":"true"},"¶")," Quick"),_react2.default.createElement("p",null,"各种Panel面板"),_react2.default.createElement("h2",{id:"quickpanel"},_react2.default.createElement("a",{className:"header-anchor",href:"#quickpanel","aria-hidden":"true"},"¶")," QuickPanel"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(QuickPanelDemo,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"QuickPanelDemo")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")),"{",_react2.default.createElement("br",null),"    render()","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"QuickPanel")," ",_react2.default.createElement("span",{className:"hljs-attr"},"title"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{"),'"运营时间设置"',"}"," ",_react2.default.createElement("span",{className:"hljs-attr"},"right"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","("),_react2.default.createElement("br",null),"                    <",_react2.default.createElement("span",{className:"hljs-attr"},"button")," ",_react2.default.createElement("span",{className:"hljs-attr"},"disabled"),">"),"adfasf",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"button"),">"),_react2.default.createElement("br",null),"                )","}",">",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),"内容",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"QuickPanel"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"hr"),"/>"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),"quick panel 一起会相连",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"QuickPanel")," ",_react2.default.createElement("span",{className:"hljs-attr"},"title"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{"),'"运营时间设置"',"}"," ",_react2.default.createElement("span",{className:"hljs-attr"},"collapse"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),"内容",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"QuickPanel"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"QuickPanel")," ",_react2.default.createElement("span",{className:"hljs-attr"},"title"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{"),'"运营时间设置"',"}"," ",_react2.default.createElement("span",{className:"hljs-attr"},"collapse")," ",_react2.default.createElement("span",{className:"hljs-attr"},"in"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","false","}"),">"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),"内容",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"QuickPanel"),">"),_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">")),_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<QuickPanelDemo/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"title (string|element|isRequired)")," 标题"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"collapse (bool)")," 是否具有明细收拢展开功能"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"right (element)")," 头部右边内容"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"in (bool)")," true 默认展开"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"icon (string)")," 标题左边icon"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"iconColor (string)")," icon颜色，默认 #fd5271")),_react2.default.createElement("h2",{id:"quicktab"},_react2.default.createElement("a",{className:"header-anchor",href:"#quicktab","aria-hidden":"true"},"¶")," QuickTab"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode51?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(Tab,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"Tab")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")),"{",_react2.default.createElement("br",null),"    renderCollapseFilter()","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," <div>",_react2.default.createElement("br",null),'                   <form className="form-horizontal">',_react2.default.createElement("br",null),'                       <Flex alignCenter className="form-group">',_react2.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">',_react2.default.createElement("br",null),'                               <div className="gm-inline-block">',_react2.default.createElement("br",null),'                                   <select className="form-control" style=',"{","{","border: 'none'","}","}",">",_react2.default.createElement("br",null),'                                       <option value="1">按日期</option>',_react2.default.createElement("br",null),'                                       <option value="1">按周期</option>',_react2.default.createElement("br",null),"                                   </select>",_react2.default.createElement("br",null),"                               </div>",_react2.default.createElement("br",null),"                           </Flex>",_react2.default.createElement("br",null),'                           <div className="col-md-10">',_react2.default.createElement("br",null),"                               <DateRangePicker",_react2.default.createElement("br",null),"                                   begin=","{","new Date()","}",_react2.default.createElement("br",null),"                                   end=","{","new Date()","}",_react2.default.createElement("br",null),"                                   onChange=","{","_.noop","}",_react2.default.createElement("br",null),'                                   inputClassName="form-control"',_react2.default.createElement("br",null),"                               />",_react2.default.createElement("br",null),"                           </div>",_react2.default.createElement("br",null),"                       </Flex>",_react2.default.createElement("br",null),'                       <Flex alignCenter className="form-group">',_react2.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">商品筛选：</Flex>',_react2.default.createElement("br",null),'                           <div className="col-md-10">',_react2.default.createElement("br",null),'                               <div className="gm-inline-block">',_react2.default.createElement("br",null),'                                   <input type="text" style=',"{","{","width: '120px'","}","}",' placeholder="全部一级分类" className="form-control gm-inline-block gm-margin-right-5"/>',_react2.default.createElement("br",null),"                               </div>",_react2.default.createElement("br",null),'                               <div className="gm-inline-block">',_react2.default.createElement("br",null),'                                   <input type="text" style=',"{","{","width: '120px'","}","}",' placeholder="全部二级分类" className="form-control gm-inline-block gm-margin-right-5"/>',_react2.default.createElement("br",null),"                               </div>",_react2.default.createElement("br",null),'                               <div className="gm-inline-block">',_react2.default.createElement("br",null),'                                   <input type="text" style=',"{","{","width: '120px'","}","}",' placeholder="全部三级分类" className="form-control gm-inline-block"/>',_react2.default.createElement("br",null),"                               </div>",_react2.default.createElement("br",null),"                           </div>",_react2.default.createElement("br",null),"                       </Flex>",_react2.default.createElement("br",null),'                       <Flex alignCenter className="form-group">',_react2.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">任务筛选：</Flex>',_react2.default.createElement("br",null),'                           <div className="col-md-10">',_react2.default.createElement("br",null),'                               <div className="gm-inline-block gm-margin-right-5">',_react2.default.createElement("br",null),'                                   <select className="form-control">',_react2.default.createElement("br",null),'                                       <option value="1">全部分拣备注</option>',_react2.default.createElement("br",null),'                                       <option value="2">全部分拣备注</option>',_react2.default.createElement("br",null),"                                   </select>",_react2.default.createElement("br",null),"                               </div>",_react2.default.createElement("br",null),'                               <div className="gm-inline-block gm-margin-right-5">',_react2.default.createElement("br",null),'                                   <select className="form-control">',_react2.default.createElement("br",null),'                                       <option value="1">全部任务类型</option>',_react2.default.createElement("br",null),'                                       <option value="1">全部任务类型</option>',_react2.default.createElement("br",null),"                                   </select>",_react2.default.createElement("br",null),"                               </div>",_react2.default.createElement("br",null),'                               <div className="gm-inline-block">',_react2.default.createElement("br",null),'                                   <select className="form-control">',_react2.default.createElement("br",null),'                                       <option value="1">全部任务状态</option>',_react2.default.createElement("br",null),'                                       <option value="1">全部任务状态</option>',_react2.default.createElement("br",null),"                                   </select>",_react2.default.createElement("br",null),"                               </div>",_react2.default.createElement("br",null),"                           </div>",_react2.default.createElement("br",null),"                       </Flex>",_react2.default.createElement("br",null),'                       <div className="form-group">',_react2.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">订单筛选：</Flex>',_react2.default.createElement("br",null),'                           <div className="col-md-10">',_react2.default.createElement("br",null),'                               <div className="gm-inline-block">',_react2.default.createElement("br",null),'                                   <select className="form-control">',_react2.default.createElement("br",null),'                                       <option value="1">选择运营配置</option>',_react2.default.createElement("br",null),'                                       <option value="1">选择XX配置</option>',_react2.default.createElement("br",null),"                                   </select>",_react2.default.createElement("br",null),"                               </div>",_react2.default.createElement("br",null),"                           </div>",_react2.default.createElement("br",null),"                       </div>",_react2.default.createElement("br",null),'                       <Flex alignCenter className="form-group">',_react2.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">搜索：</Flex>',_react2.default.createElement("br",null),'                           <div className="col-md-10">',_react2.default.createElement("br",null),"                               <input style=","{","{","width: '350px'","}","}",' className="form-control" placeholder="输入订单号、分拣号、商户信息、商品信息搜索等"/>',_react2.default.createElement("br",null),"                           </div>",_react2.default.createElement("br",null),"                       </Flex>",_react2.default.createElement("br",null),'                       <Flex alignCenter className="form-group gm-padding-left-15">',_react2.default.createElement("br",null),'                           <button type="submit" className="btn btn-primary">搜索</button>',_react2.default.createElement("br",null),'                           <div className="gm-gap-10"></div>',_react2.default.createElement("br",null),'                           <a href="" className="btn btn-default">导出</a>',_react2.default.createElement("br",null),"                       </Flex>",_react2.default.createElement("br",null),"                   </form>",_react2.default.createElement("br",null),"               </div>;",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"render() ","{",_react2.default.createElement("br",null),"        return (",_react2.default.createElement("br",null),"            <QuickTab tabs=","{","['按订单查看', '按商品查看']","}",' className="gm-padding-15" isStatic=',"{","true","}",">",_react2.default.createElement("br",null),"                <QuickTab.QuickTabItem>",_react2.default.createElement("br",null),'                    <QuickFilter className="gm-border-top-0" expand collapseRender=',"{","this.renderCollapseFilter","}",">",_react2.default.createElement("br",null),'                        <form className="form-inline">',_react2.default.createElement("br",null),'                            <select className="form-control gm-margin-right-10 gm-border-0">',_react2.default.createElement("br",null),'                                <option value="1">按周期</option>',_react2.default.createElement("br",null),'                                <option value="1">按日期</option>',_react2.default.createElement("br",null),"                            </select>",_react2.default.createElement("br",null),'                            <select className="form-control gm-margin-right-10">',_react2.default.createElement("br",null),'                                <option value="1">选择运营配置</option>',_react2.default.createElement("br",null),'                                <option value="1">选择XX配置</option>',_react2.default.createElement("br",null),"                            </select>",_react2.default.createElement("br",null),'                            <div className="input-group gm-margin-right-10">',_react2.default.createElement("br",null),"                                <input",_react2.default.createElement("br",null),'                                    type="text"',_react2.default.createElement("br",null),'                                    className="form-control"',_react2.default.createElement("br",null),'                                    placeholder="请输入订单号"',_react2.default.createElement("br",null),"                                    style=","{","{","minWidth: '250px'","}","}",_react2.default.createElement("br",null),"                                />",_react2.default.createElement("br",null),"                            </div>",_react2.default.createElement("br",null),'                            <button type="submit" className="btn btn-primary">搜索</button>',_react2.default.createElement("br",null),'                            <div className="gm-gap-10"></div>',_react2.default.createElement("br",null),'                            <a href="" className="btn btn-default">导出</a>',_react2.default.createElement("br",null),"                        </form>",_react2.default.createElement("br",null),"                    </QuickFilter>",_react2.default.createElement("br",null),"                </QuickTab.QuickTabItem>",_react2.default.createElement("br",null),"                <QuickTab.QuickTabItem>",_react2.default.createElement("br",null),'                    <QuickFilter className="gm-border-top-0">',_react2.default.createElement("br",null),'                        <form className="form-inline">',_react2.default.createElement("br",null),'                            <div className="input-group gm-margin-right-10">',_react2.default.createElement("br",null),"                                <input",_react2.default.createElement("br",null),'                                    type="text"',_react2.default.createElement("br",null),'                                    className="form-control"',_react2.default.createElement("br",null),'                                    placeholder="请输入商户名称"',_react2.default.createElement("br",null),"                                    style=","{","{","minWidth: '250px'","}","}",_react2.default.createElement("br",null),"                                />",_react2.default.createElement("br",null),"                            </div>",_react2.default.createElement("br",null),'                            <button type="submit" className="btn btn-primary">搜索</button>',_react2.default.createElement("br",null),'                            <div className="gm-gap-10"></div>',_react2.default.createElement("br",null),'                            <a href="" className="btn btn-default">导出</a>',_react2.default.createElement("br",null),"                        </form>",_react2.default.createElement("br",null),"                    </QuickFilter>",_react2.default.createElement("br",null),"                </QuickTab.QuickTabItem>",_react2.default.createElement("br",null),"            </QuickTab>",_react2.default.createElement("br",null),"         )",_react2.default.createElement("br",null),"    ","}",";",_react2.default.createElement("br",null)," ","}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<Tab/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,51)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props-2"},_react2.default.createElement("a",{className:"header-anchor",href:"#props-2","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"tabs (array)")," tab 名称数组"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onChange (func)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"active (number)")," 当前激活的tab"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"right (element)")," 头部右边内容"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"justified (bool)")," 平分"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"isStatic (bool)")," tab 内容切换的时候是否不被卸载"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"children")," 尽量提供",_react2.default.createElement("code",null,"QuickTabItem"),"组件数组，这样语义化好点")),_react2.default.createElement("h3",{id:"component"},_react2.default.createElement("a",{className:"header-anchor",href:"#component","aria-hidden":"true"},"¶")," Component"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"QuickTabItem")," 语义化，为children每个实例增加的一个wrap")))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);