webpackJsonp([17],{381:function(e,l,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function r(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!=typeof l&&"function"!=typeof l?e:l}function c(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}Object.defineProperty(l,"__esModule",{value:!0});var u=function(){function e(e,l){for(var t=0;t<l.length;t++){var a=l[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(l,t,a){return t&&e(l.prototype,t),a&&e(l,a),l}}(),m=t(1),s=a(m),d=t(8),f=t(3),o=a(f),i=function(e){function l(){return n(this,l),r(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return c(l,e),u(l,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(d.QuickPanel,{title:"运营时间设置",right:s.default.createElement("button",{disabled:!0},"adfasf")},s.default.createElement("div",null,"内容")),s.default.createElement("hr",null),s.default.createElement("div",null,"quick panel 一起会相连"),s.default.createElement(d.QuickPanel,{title:"运营时间设置",collapse:!0},s.default.createElement("div",null,"内容")),s.default.createElement(d.QuickPanel,{title:"运营时间设置",collapse:!0,in:!1},s.default.createElement("div",null,"内容")))}}]),l}(s.default.Component),E=function(e){function l(){return n(this,l),r(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return c(l,e),u(l,[{key:"renderCollapseFilter",value:function(){return s.default.createElement("div",null,s.default.createElement("form",{className:"form-horizontal"},s.default.createElement(d.Flex,{alignCenter:!0,className:"form-group"},s.default.createElement(d.Flex,{alignCenter:!0,className:"col-md-2"},s.default.createElement("div",{className:"gm-inline-block"},s.default.createElement("select",{className:"form-control",style:{border:"none"}},s.default.createElement("option",{value:"1"},"按日期"),s.default.createElement("option",{value:"1"},"按周期")))),s.default.createElement("div",{className:"col-md-10"},s.default.createElement(d.DateRangePicker,{begin:new Date,end:new Date,onChange:o.default.noop,inputClassName:"form-control"}))),s.default.createElement(d.Flex,{alignCenter:!0,className:"form-group"},s.default.createElement(d.Flex,{alignCenter:!0,className:"col-md-2"},"商品筛选："),s.default.createElement("div",{className:"col-md-10"},s.default.createElement("div",{className:"gm-inline-block"},s.default.createElement("input",{type:"text",style:{width:"120px"},placeholder:"全部一级分类",className:"form-control gm-inline-block gm-margin-right-5"})),s.default.createElement("div",{className:"gm-inline-block"},s.default.createElement("input",{type:"text",style:{width:"120px"},placeholder:"全部二级分类",className:"form-control gm-inline-block gm-margin-right-5"})),s.default.createElement("div",{className:"gm-inline-block"},s.default.createElement("input",{type:"text",style:{width:"120px"},placeholder:"全部三级分类",className:"form-control gm-inline-block"})))),s.default.createElement(d.Flex,{alignCenter:!0,className:"form-group"},s.default.createElement(d.Flex,{alignCenter:!0,className:"col-md-2"},"任务筛选："),s.default.createElement("div",{className:"col-md-10"},s.default.createElement("div",{className:"gm-inline-block gm-margin-right-5"},s.default.createElement("select",{className:"form-control"},s.default.createElement("option",{value:"1"},"全部分拣备注"),s.default.createElement("option",{value:"2"},"全部分拣备注"))),s.default.createElement("div",{className:"gm-inline-block gm-margin-right-5"},s.default.createElement("select",{className:"form-control"},s.default.createElement("option",{value:"1"},"全部任务类型"),s.default.createElement("option",{value:"1"},"全部任务类型"))),s.default.createElement("div",{className:"gm-inline-block"},s.default.createElement("select",{className:"form-control"},s.default.createElement("option",{value:"1"},"全部任务状态"),s.default.createElement("option",{value:"1"},"全部任务状态"))))),s.default.createElement("div",{className:"form-group"},s.default.createElement(d.Flex,{alignCenter:!0,className:"col-md-2"},"订单筛选："),s.default.createElement("div",{className:"col-md-10"},s.default.createElement("div",{className:"gm-inline-block"},s.default.createElement("select",{className:"form-control"},s.default.createElement("option",{value:"1"},"选择运营配置"),s.default.createElement("option",{value:"1"},"选择XX配置"))))),s.default.createElement(d.Flex,{alignCenter:!0,className:"form-group"},s.default.createElement(d.Flex,{alignCenter:!0,className:"col-md-2"},"搜索："),s.default.createElement("div",{className:"col-md-10"},s.default.createElement("input",{style:{width:"350px"},className:"form-control",placeholder:"输入订单号、分拣号、商户信息、商品信息搜索等"}))),s.default.createElement(d.Flex,{alignCenter:!0,className:"form-group gm-padding-left-15"},s.default.createElement("button",{type:"submit",className:"btn btn-primary"},"搜索"),s.default.createElement("div",{className:"gm-gap-10"}),s.default.createElement("a",{href:"",className:"btn btn-default"},"导出"))))}},{key:"render",value:function(){return s.default.createElement(d.QuickTab,{tabs:["按订单查看","按商品查看"],className:"gm-padding-15",isStatic:!0},s.default.createElement(d.QuickTab.QuickTabItem,null,s.default.createElement(d.QuickFilter,{className:"gm-border-top-0",collapseRender:this.renderCollapseFilter},s.default.createElement("form",{className:"form-inline"},s.default.createElement("select",{className:"form-control gm-margin-right-10 gm-border-0"},s.default.createElement("option",{value:"1"},"按周期"),s.default.createElement("option",{value:"1"},"按日期")),s.default.createElement("select",{className:"form-control gm-margin-right-10"},s.default.createElement("option",{value:"1"},"选择运营配置"),s.default.createElement("option",{value:"1"},"选择XX配置")),s.default.createElement("div",{className:"input-group gm-margin-right-10"},s.default.createElement("input",{type:"text",className:"form-control",placeholder:"请输入订单号",style:{minWidth:"250px"}})),s.default.createElement("button",{type:"submit",className:"btn btn-primary"},"搜索"),s.default.createElement("div",{className:"gm-gap-10"}),s.default.createElement("a",{href:"",className:"btn btn-default"},"导出")))),s.default.createElement(d.QuickTab.QuickTabItem,null,s.default.createElement(d.QuickFilter,{className:"gm-border-top-0"},s.default.createElement("form",{className:"form-inline"},s.default.createElement("div",{className:"input-group gm-margin-right-10"},s.default.createElement("input",{type:"text",className:"form-control",placeholder:"请输入商户名称",style:{minWidth:"250px"}})),s.default.createElement("button",{type:"submit",className:"btn btn-primary"},"搜索"),s.default.createElement("div",{className:"gm-gap-10"}),s.default.createElement("a",{href:"",className:"btn btn-default"},"导出")))))}}]),l}(s.default.Component),b=function(e){function l(e){n(this,l);var t=r(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={},t}return c(l,e),u(l,[{key:"handleToggleCode",value:function(e){var l={};l["showCode"+e]=!this.state["showCode"+e],this.setState(l)}},{key:"render",value:function(){return s.default.createElement("div",{className:"doc"},s.default.createElement("h2",{id:"quick"},s.default.createElement("a",{className:"header-anchor",href:"#quick","aria-hidden":"true"},"¶")," Quick"),s.default.createElement("p",null,"各种Panel面板"),s.default.createElement("h2",{id:"quickpanel"},s.default.createElement("a",{className:"header-anchor",href:"#quickpanel","aria-hidden":"true"},"¶")," QuickPanel"),s.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},s.default.createElement("div",{className:"doc-demo-instance"},s.default.createElement("h4",null,"Example"),s.default.createElement(i,null)),s.default.createElement("div",{className:"doc-demo-meta"},s.default.createElement("div",{className:"doc-demo-code"},s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},s.default.createElement("span",{className:"hljs-class"},s.default.createElement("span",{className:"hljs-keyword"},"class")," ",s.default.createElement("span",{className:"hljs-title"},"QuickPanelDemo")," ",s.default.createElement("span",{className:"hljs-keyword"},"extends")," ",s.default.createElement("span",{className:"hljs-title"},"React"),".",s.default.createElement("span",{className:"hljs-title"},"Component")),"{",s.default.createElement("br",null),"    render()","{",s.default.createElement("br",null),"        ",s.default.createElement("span",{className:"hljs-keyword"},"return")," (",s.default.createElement("br",null),"            ",s.default.createElement("span",{className:"xml"},s.default.createElement("span",{className:"hljs-tag"},"<",s.default.createElement("span",{className:"hljs-name"},"div"),">"),s.default.createElement("br",null),"                ",s.default.createElement("span",{className:"hljs-tag"},"<",s.default.createElement("span",{className:"hljs-name"},"QuickPanel")," ",s.default.createElement("span",{className:"hljs-attr"},"title"),"=",s.default.createElement("span",{className:"hljs-string"},"{"),'"运营时间设置"',"}"," ",s.default.createElement("span",{className:"hljs-attr"},"right"),"=",s.default.createElement("span",{className:"hljs-string"},"{","("),s.default.createElement("br",null),"                    <",s.default.createElement("span",{className:"hljs-attr"},"button")," ",s.default.createElement("span",{className:"hljs-attr"},"disabled"),">"),"adfasf",s.default.createElement("span",{className:"hljs-tag"},"</",s.default.createElement("span",{className:"hljs-name"},"button"),">"),s.default.createElement("br",null),"                )","}",">",s.default.createElement("br",null),"                    ",s.default.createElement("span",{className:"hljs-tag"},"<",s.default.createElement("span",{className:"hljs-name"},"div"),">"),"内容",s.default.createElement("span",{className:"hljs-tag"},"</",s.default.createElement("span",{className:"hljs-name"},"div"),">"),s.default.createElement("br",null),"                ",s.default.createElement("span",{className:"hljs-tag"},"</",s.default.createElement("span",{className:"hljs-name"},"QuickPanel"),">"),s.default.createElement("br",null),"                ",s.default.createElement("span",{className:"hljs-tag"},"<",s.default.createElement("span",{className:"hljs-name"},"hr"),"/>"),s.default.createElement("br",null),"                ",s.default.createElement("span",{className:"hljs-tag"},"<",s.default.createElement("span",{className:"hljs-name"},"div"),">"),"quick panel 一起会相连",s.default.createElement("span",{className:"hljs-tag"},"</",s.default.createElement("span",{className:"hljs-name"},"div"),">"),s.default.createElement("br",null),"                ",s.default.createElement("span",{className:"hljs-tag"},"<",s.default.createElement("span",{className:"hljs-name"},"QuickPanel")," ",s.default.createElement("span",{className:"hljs-attr"},"title"),"=",s.default.createElement("span",{className:"hljs-string"},"{"),'"运营时间设置"',"}"," ",s.default.createElement("span",{className:"hljs-attr"},"collapse"),">"),s.default.createElement("br",null),"                    ",s.default.createElement("span",{className:"hljs-tag"},"<",s.default.createElement("span",{className:"hljs-name"},"div"),">"),"内容",s.default.createElement("span",{className:"hljs-tag"},"</",s.default.createElement("span",{className:"hljs-name"},"div"),">"),s.default.createElement("br",null),"                ",s.default.createElement("span",{className:"hljs-tag"},"</",s.default.createElement("span",{className:"hljs-name"},"QuickPanel"),">"),s.default.createElement("br",null),"                ",s.default.createElement("span",{className:"hljs-tag"},"<",s.default.createElement("span",{className:"hljs-name"},"QuickPanel")," ",s.default.createElement("span",{className:"hljs-attr"},"title"),"=",s.default.createElement("span",{className:"hljs-string"},"{"),'"运营时间设置"',"}"," ",s.default.createElement("span",{className:"hljs-attr"},"collapse")," ",s.default.createElement("span",{className:"hljs-attr"},"in"),"=",s.default.createElement("span",{className:"hljs-string"},"{","false","}"),">"),s.default.createElement("br",null),"                    ",s.default.createElement("span",{className:"hljs-tag"},"<",s.default.createElement("span",{className:"hljs-name"},"div"),">"),"内容",s.default.createElement("span",{className:"hljs-tag"},"</",s.default.createElement("span",{className:"hljs-name"},"div"),">"),s.default.createElement("br",null),"                ",s.default.createElement("span",{className:"hljs-tag"},"</",s.default.createElement("span",{className:"hljs-name"},"QuickPanel"),">"),s.default.createElement("br",null),"            ",s.default.createElement("span",{className:"hljs-tag"},"</",s.default.createElement("span",{className:"hljs-name"},"div"),">")),s.default.createElement("br",null),"        );",s.default.createElement("br",null),"    ","}",s.default.createElement("br",null),"}",s.default.createElement("br",null))),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-jsx"},"<QuickPanelDemo/>",s.default.createElement("br",null)))),s.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},s.default.createElement("i",null)))),s.default.createElement("h3",{id:"props"},s.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),s.default.createElement("ul",null,s.default.createElement("li",null,s.default.createElement("code",null,"title (string|element|isRequired)")," 标题"),s.default.createElement("li",null,s.default.createElement("code",null,"collapse (bool)")," 是否具有明细收拢展开功能"),s.default.createElement("li",null,s.default.createElement("code",null,"right (element)")," 头部右边内容"),s.default.createElement("li",null,s.default.createElement("code",null,"in (bool)")," true 默认展开"),s.default.createElement("li",null,s.default.createElement("code",null,"icon (string)")," 标题左边icon"),s.default.createElement("li",null,s.default.createElement("code",null,"iconColor (string)")," icon颜色，默认 #fd5271")),s.default.createElement("h2",{id:"quicktab"},s.default.createElement("a",{className:"header-anchor",href:"#quicktab","aria-hidden":"true"},"¶")," QuickTab"),s.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode51?"doc-demo-code-active":"")},s.default.createElement("div",{className:"doc-demo-instance"},s.default.createElement("h4",null,"Example"),s.default.createElement(E,null)),s.default.createElement("div",{className:"doc-demo-meta"},s.default.createElement("div",{className:"doc-demo-code"},s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},s.default.createElement("span",{className:"hljs-class"},s.default.createElement("span",{className:"hljs-keyword"},"class")," ",s.default.createElement("span",{className:"hljs-title"},"Tab")," ",s.default.createElement("span",{className:"hljs-keyword"},"extends")," ",s.default.createElement("span",{className:"hljs-title"},"React"),".",s.default.createElement("span",{className:"hljs-title"},"Component")),"{",s.default.createElement("br",null),"    renderCollapseFilter()","{",s.default.createElement("br",null),"        ",s.default.createElement("span",{className:"hljs-keyword"},"return")," <div>",s.default.createElement("br",null),'                   <form className="form-horizontal">',s.default.createElement("br",null),'                       <Flex alignCenter className="form-group">',s.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">',s.default.createElement("br",null),'                               <div className="gm-inline-block">',s.default.createElement("br",null),'                                   <select className="form-control" style=',"{","{","border: 'none'","}","}",">",s.default.createElement("br",null),'                                       <option value="1">按日期</option>',s.default.createElement("br",null),'                                       <option value="1">按周期</option>',s.default.createElement("br",null),"                                   </select>",s.default.createElement("br",null),"                               </div>",s.default.createElement("br",null),"                           </Flex>",s.default.createElement("br",null),'                           <div className="col-md-10">',s.default.createElement("br",null),"                               <DateRangePicker",s.default.createElement("br",null),"                                   begin=","{","new Date()","}",s.default.createElement("br",null),"                                   end=","{","new Date()","}",s.default.createElement("br",null),"                                   onChange=","{","_.noop","}",s.default.createElement("br",null),'                                   inputClassName="form-control"',s.default.createElement("br",null),"                               />",s.default.createElement("br",null),"                           </div>",s.default.createElement("br",null),"                       </Flex>",s.default.createElement("br",null),'                       <Flex alignCenter className="form-group">',s.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">商品筛选：</Flex>',s.default.createElement("br",null),'                           <div className="col-md-10">',s.default.createElement("br",null),'                               <div className="gm-inline-block">',s.default.createElement("br",null),'                                   <input type="text" style=',"{","{","width: '120px'","}","}",' placeholder="全部一级分类" className="form-control gm-inline-block gm-margin-right-5"/>',s.default.createElement("br",null),"                               </div>",s.default.createElement("br",null),'                               <div className="gm-inline-block">',s.default.createElement("br",null),'                                   <input type="text" style=',"{","{","width: '120px'","}","}",' placeholder="全部二级分类" className="form-control gm-inline-block gm-margin-right-5"/>',s.default.createElement("br",null),"                               </div>",s.default.createElement("br",null),'                               <div className="gm-inline-block">',s.default.createElement("br",null),'                                   <input type="text" style=',"{","{","width: '120px'","}","}",' placeholder="全部三级分类" className="form-control gm-inline-block"/>',s.default.createElement("br",null),"                               </div>",s.default.createElement("br",null),"                           </div>",s.default.createElement("br",null),"                       </Flex>",s.default.createElement("br",null),'                       <Flex alignCenter className="form-group">',s.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">任务筛选：</Flex>',s.default.createElement("br",null),'                           <div className="col-md-10">',s.default.createElement("br",null),'                               <div className="gm-inline-block gm-margin-right-5">',s.default.createElement("br",null),'                                   <select className="form-control">',s.default.createElement("br",null),'                                       <option value="1">全部分拣备注</option>',s.default.createElement("br",null),'                                       <option value="2">全部分拣备注</option>',s.default.createElement("br",null),"                                   </select>",s.default.createElement("br",null),"                               </div>",s.default.createElement("br",null),'                               <div className="gm-inline-block gm-margin-right-5">',s.default.createElement("br",null),'                                   <select className="form-control">',s.default.createElement("br",null),'                                       <option value="1">全部任务类型</option>',s.default.createElement("br",null),'                                       <option value="1">全部任务类型</option>',s.default.createElement("br",null),"                                   </select>",s.default.createElement("br",null),"                               </div>",s.default.createElement("br",null),'                               <div className="gm-inline-block">',s.default.createElement("br",null),'                                   <select className="form-control">',s.default.createElement("br",null),'                                       <option value="1">全部任务状态</option>',s.default.createElement("br",null),'                                       <option value="1">全部任务状态</option>',s.default.createElement("br",null),"                                   </select>",s.default.createElement("br",null),"                               </div>",s.default.createElement("br",null),"                           </div>",s.default.createElement("br",null),"                       </Flex>",s.default.createElement("br",null),'                       <div className="form-group">',s.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">订单筛选：</Flex>',s.default.createElement("br",null),'                           <div className="col-md-10">',s.default.createElement("br",null),'                               <div className="gm-inline-block">',s.default.createElement("br",null),'                                   <select className="form-control">',s.default.createElement("br",null),'                                       <option value="1">选择运营配置</option>',s.default.createElement("br",null),'                                       <option value="1">选择XX配置</option>',s.default.createElement("br",null),"                                   </select>",s.default.createElement("br",null),"                               </div>",s.default.createElement("br",null),"                           </div>",s.default.createElement("br",null),"                       </div>",s.default.createElement("br",null),'                       <Flex alignCenter className="form-group">',s.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">搜索：</Flex>',s.default.createElement("br",null),'                           <div className="col-md-10">',s.default.createElement("br",null),"                               <input style=","{","{","width: '350px'","}","}",' className="form-control" placeholder="输入订单号、分拣号、商户信息、商品信息搜索等"/>',s.default.createElement("br",null),"                           </div>",s.default.createElement("br",null),"                       </Flex>",s.default.createElement("br",null),'                       <Flex alignCenter className="form-group gm-padding-left-15">',s.default.createElement("br",null),'                           <button type="submit" className="btn btn-primary">搜索</button>',s.default.createElement("br",null),'                           <div className="gm-gap-10"></div>',s.default.createElement("br",null),'                           <a href="" className="btn btn-default">导出</a>',s.default.createElement("br",null),"                       </Flex>",s.default.createElement("br",null),"                   </form>",s.default.createElement("br",null),"               </div>;",s.default.createElement("br",null),"    ","}",s.default.createElement("br",null),"render() ","{",s.default.createElement("br",null),"        return (",s.default.createElement("br",null),"            <QuickTab tabs=","{","['按订单查看', '按商品查看']","}",' className="gm-padding-15" isStatic=',"{","true","}",">",s.default.createElement("br",null),"                <QuickTab.QuickTabItem>",s.default.createElement("br",null),'                    <QuickFilter className="gm-border-top-0" collapseRender=',"{","this.renderCollapseFilter","}",">",s.default.createElement("br",null),'                        <form className="form-inline">',s.default.createElement("br",null),'                            <select className="form-control gm-margin-right-10 gm-border-0">',s.default.createElement("br",null),'                                <option value="1">按周期</option>',s.default.createElement("br",null),'                                <option value="1">按日期</option>',s.default.createElement("br",null),"                            </select>",s.default.createElement("br",null),'                            <select className="form-control gm-margin-right-10">',s.default.createElement("br",null),'                                <option value="1">选择运营配置</option>',s.default.createElement("br",null),'                                <option value="1">选择XX配置</option>',s.default.createElement("br",null),"                            </select>",s.default.createElement("br",null),'                            <div className="input-group gm-margin-right-10">',s.default.createElement("br",null),"                                <input",s.default.createElement("br",null),'                                    type="text"',s.default.createElement("br",null),'                                    className="form-control"',s.default.createElement("br",null),'                                    placeholder="请输入订单号"',s.default.createElement("br",null),"                                    style=","{","{","minWidth: '250px'","}","}",s.default.createElement("br",null),"                                />",s.default.createElement("br",null),"                            </div>",s.default.createElement("br",null),'                            <button type="submit" className="btn btn-primary">搜索</button>',s.default.createElement("br",null),'                            <div className="gm-gap-10"></div>',s.default.createElement("br",null),'                            <a href="" className="btn btn-default">导出</a>',s.default.createElement("br",null),"                        </form>",s.default.createElement("br",null),"                    </QuickFilter>",s.default.createElement("br",null),"                </QuickTab.QuickTabItem>",s.default.createElement("br",null),"                <QuickTab.QuickTabItem>",s.default.createElement("br",null),'                    <QuickFilter className="gm-border-top-0">',s.default.createElement("br",null),'                        <form className="form-inline">',s.default.createElement("br",null),'                            <div className="input-group gm-margin-right-10">',s.default.createElement("br",null),"                                <input",s.default.createElement("br",null),'                                    type="text"',s.default.createElement("br",null),'                                    className="form-control"',s.default.createElement("br",null),'                                    placeholder="请输入商户名称"',s.default.createElement("br",null),"                                    style=","{","{","minWidth: '250px'","}","}",s.default.createElement("br",null),"                                />",s.default.createElement("br",null),"                            </div>",s.default.createElement("br",null),'                            <button type="submit" className="btn btn-primary">搜索</button>',s.default.createElement("br",null),'                            <div className="gm-gap-10"></div>',s.default.createElement("br",null),'                            <a href="" className="btn btn-default">导出</a>',s.default.createElement("br",null),"                        </form>",s.default.createElement("br",null),"                    </QuickFilter>",s.default.createElement("br",null),"                </QuickTab.QuickTabItem>",s.default.createElement("br",null),"            </QuickTab>",s.default.createElement("br",null),"         )",s.default.createElement("br",null),"    ","}",";",s.default.createElement("br",null)," ","}",s.default.createElement("br",null))),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-jsx"},"<Tab/>",s.default.createElement("br",null)))),s.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,51)},s.default.createElement("i",null)))),s.default.createElement("h3",{id:"props-2"},s.default.createElement("a",{className:"header-anchor",href:"#props-2","aria-hidden":"true"},"¶")," Props"),s.default.createElement("ul",null,s.default.createElement("li",null,s.default.createElement("code",null,"tabs (array)")," tab 名称数组"),s.default.createElement("li",null,s.default.createElement("code",null,"onChange (func)")),s.default.createElement("li",null,s.default.createElement("code",null,"active (number)")," 当前激活的tab"),s.default.createElement("li",null,s.default.createElement("code",null,"right (element)")," 头部右边内容"),s.default.createElement("li",null,s.default.createElement("code",null,"justified (bool)")," 平分"),s.default.createElement("li",null,s.default.createElement("code",null,"isStatic (bool)")," tab 内容切换的时候是否不被卸载"),s.default.createElement("li",null,s.default.createElement("code",null,"children")," 尽量提供",s.default.createElement("code",null,"QuickTabItem"),"组件数组，这样语义化好点")),s.default.createElement("h3",{id:"component"},s.default.createElement("a",{className:"header-anchor",href:"#component","aria-hidden":"true"},"¶")," Component"),s.default.createElement("ul",null,s.default.createElement("li",null,s.default.createElement("code",null,"QuickTabItem")," 语义化，为children每个实例增加的一个wrap")))}}]),l}(s.default.Component);l.default=b}});
//# sourceMappingURL=17.85474d1a.bundle.js.map