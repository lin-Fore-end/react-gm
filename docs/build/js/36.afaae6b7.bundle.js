(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{261:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var obj,_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(7);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var data=[{link:"/customer_manage",name:"商户管理",sub:[{name:"商户管理",sub:[{link:"/customer_manage/customer/manage",name:"商户信息",auth:"view_customer"},{link:"/customer_manage/customer/report",name:"商户报表",auth:"view_customerreport"},{link:"/customer_manage/customer/bill",name:"商户对账单",auth:"view_customeraccount"},{link:"/customer_manage/customer/invitation_code",name:"新商户邀请",auth:"edit_invitation"}],link:"/customer_manage/customer"}]},{link:"/operational_data",name:"运营数据",sub:[{name:"利润分析",sub:[{link:"/operational_data/profit/profit_report",name:"销售利润",auth:"view_saleprofit"},{link:"/operational_data/profit/order_report",name:"订单分析",auth:"view_customerorder"},{link:"/operational_data/profit/product_report",name:"商品分析",auth:"view_orderskus"}],link:"/operational_data/profit"},{name:"异常分析",sub:[{link:"/operational_data/abnormal/order_abnormal",name:"订单异常",auth:"view_abnormal_customer_order"},{link:"/operational_data/abnormal/product_abnormal",name:"商品异常",auth:"view_abnormal_skus"}],link:"/operational_data/abnormal"}]}],NavLeft=function(_React$Component){function NavLeft(props){_classCallCheck(this,NavLeft);var _this=_possibleConstructorReturn(this,(NavLeft.__proto__||Object.getPrototypeOf(NavLeft)).call(this,props));return _this.handleClick=_this.handleClick.bind(_this),_this.state={selected:""},_this}return _inherits(NavLeft,_react2.default.Component),_createClass(NavLeft,[{key:"handleClick",value:function(selected){this.setState({selected:selected.link})}},{key:"render",value:function(){var selected=this.state.selected;return _react2.default.createElement("div",{className:"b-app-nav-left",style:{width:200}},_react2.default.createElement(_index.Nav,{data:data,onSelect:this.handleClick,selected:selected,widths:["100px","100px"]}))}}]),NavLeft}(),MarkdownItReactComponent=function(_React$Component2){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this2=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this2.state={},_this2}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"menu"},_react2.default.createElement("a",{className:"header-anchor",href:"#menu","aria-hidden":"true"},"¶")," Menu"),_react2.default.createElement("p",null,"导航菜单组件。"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example")),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"以下 example 依赖的数据")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-keyword"},"const")," data = [","{",_react2.default.createElement("br",null),"      ",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/customer_manage'"),",",_react2.default.createElement("br",null),"      ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'商户管理'"),",",_react2.default.createElement("br",null),"      ",_react2.default.createElement("span",{className:"hljs-attr"},"sub"),": [","{",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'商户管理'"),",",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-attr"},"sub"),": [",_react2.default.createElement("br",null),"              ","{",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/customer_manage/customer/manage'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'商户信息'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"auth"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'view_customer'"),"}",",",_react2.default.createElement("br",null),"              ","{",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/customer_manage/customer/report'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'商户报表'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"auth"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'view_customerreport'"),"}",",",_react2.default.createElement("br",null),"              ","{",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/customer_manage/customer/bill'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'商户对账单'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"auth"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'view_customeraccount'"),"}",",",_react2.default.createElement("br",null),"              ","{",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/customer_manage/customer/invitation_code'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'新商户邀请'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"auth"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'edit_invitation'"),"}",_react2.default.createElement("br",null),"          ],",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/customer_manage/customer'"),_react2.default.createElement("br",null),"      ","}","]",_react2.default.createElement("br",null),"  ","}",",","{",_react2.default.createElement("br",null),"      ",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/operational_data'"),",",_react2.default.createElement("br",null),"      ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'运营数据'"),",",_react2.default.createElement("br",null),"      ",_react2.default.createElement("span",{className:"hljs-attr"},"sub"),": [","{",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'利润分析'"),",",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-attr"},"sub"),": [",_react2.default.createElement("br",null),"              ","{",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/operational_data/profit/profit_report'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'销售利润'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"auth"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'view_saleprofit'"),"}",",",_react2.default.createElement("br",null),"              ","{",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/operational_data/profit/order_report'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'订单分析'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"auth"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'view_customerorder'"),"}",",",_react2.default.createElement("br",null),"              ","{",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/operational_data/profit/product_report'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'商品分析'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"auth"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'view_orderskus'"),"}",_react2.default.createElement("br",null),"          ],",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/operational_data/profit'"),_react2.default.createElement("br",null),"      ","}",", ","{",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'异常分析'"),",",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-attr"},"sub"),": [",_react2.default.createElement("br",null),"              ","{",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/operational_data/abnormal/order_abnormal'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'订单异常'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"auth"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'view_abnormal_customer_order'"),"}",",",_react2.default.createElement("br",null),"              ","{",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/operational_data/abnormal/product_abnormal'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'商品异常'"),", ",_react2.default.createElement("span",{className:"hljs-attr"},"auth"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'view_abnormal_skus'"),"}",_react2.default.createElement("br",null),"          ],",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-attr"},"link"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'/operational_data/abnormal'"),_react2.default.createElement("br",null),"      ","}","]",_react2.default.createElement("br",null),"  ","}","];",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},_react2.default.createElement("i",null)))),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(NavLeft,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"导航菜单")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"NavLeft")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleClick = ::",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleClick;",_react2.default.createElement("br",null),"        ",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-comment"},"// selected: '/customer_manage/customer/report'"),_react2.default.createElement("br",null),"            selected: ",_react2.default.createElement("span",{className:"hljs-string"},"''"),_react2.default.createElement("br",null),"        ","}",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    handleClick(selected) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"selected"),": selected.link",_react2.default.createElement("br",null),"        ","}",");",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    render() ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"const")," ","{","selected","}"," = ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state;",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div")," ",_react2.default.createElement("span",{className:"hljs-attr"},"className"),"=",_react2.default.createElement("span",{className:"hljs-string"},'"b-app-nav-left"')," ",_react2.default.createElement("span",{className:"hljs-attr"},"style"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","{","width:")," ",_react2.default.createElement("span",{className:"hljs-attr"},"200"),"}","}",">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"Nav"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"data"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","data","}"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"onSelect"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.handleClick","}"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"selected"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","selected","}"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"widths"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","["),"'",_react2.default.createElement("span",{className:"hljs-attr"},"100px"),"', '",_react2.default.createElement("span",{className:"hljs-attr"},"100px"),"']","}",_react2.default.createElement("br",null),"                />"),_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null)))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<NavLeft/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"logo (element)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"data (array|isRequired)")," 菜单数据。结构 ",_react2.default.createElement("code",null,"[{link, name, sub: [{...}]}]")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onSelect (func|isRequired)")," 返回节点数据"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"selected (object)")," 选中的数据"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"...rest"))))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);