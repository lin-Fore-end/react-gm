(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{197:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor};function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var obj,_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(12);function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var SheetWrap=function(){function SheetWrap(props){_classCallCheck(this,SheetWrap);var _this=_possibleConstructorReturn(this,(SheetWrap.__proto__||Object.getPrototypeOf(SheetWrap)).call(this,props));return _this.state={list:[{id:3,name:"小明",age:"10"},{id:4,name:"小红",age:"15",_gm_select:!0},{id:5,name:"小蓝",age:"20"}]},_this.handleSelect=_this.handleSelect.bind(_this),_this.handleSelectAll=_this.handleSelectAll.bind(_this),_this.isDisabled=_this.isDisabled.bind(_this),_this}return _inherits(SheetWrap,_react2.default.Component),_createClass(SheetWrap,[{key:"handleSelect",value:function(checked,index){console.log("onSelect",checked,index);var list=[].concat(_toConsumableArray(this.state.list));list[index]._gm_select=checked,this.setState({list:list})}},{key:"handleSelectAll",value:function(checked,index){var _this2=this,list=[].concat(_toConsumableArray(this.state.list));list.map(function(line){_this2.isDisabled(line)||(line._gm_select=checked)}),this.setState({list:list})}},{key:"isDisabled",value:function(line){return 18<line.age}},{key:"render",value:function(){return _react2.default.createElement(_index.Sheet,{list:this.state.list},_react2.default.createElement(_index.SheetColumn,{field:"id",name:"id"}),_react2.default.createElement(_index.SheetColumn,{field:"name",name:"名字"}),_react2.default.createElement(_index.SheetColumn,{field:"age",name:"年龄"}),_react2.default.createElement(_index.SheetSelect,{onSelect:this.handleSelect,onSelectAll:this.handleSelectAll,isDisabled:this.isDisabled,hasSelectTip:!0,selectAllTip:_react2.default.createElement("div",null,"全选是否勾上,可能代表",_react2.default.createElement("span",{className:"gm-text-red"},"当前可见列表"),"勾上，也可能代表",_react2.default.createElement("span",{className:"gm-text-red"},"所有页面数据"),"勾上，具体由调用方确定。")}))}}]),SheetWrap}(),SheetWrap2=function(){function SheetWrap2(props){_classCallCheck(this,SheetWrap2);var _this3=_possibleConstructorReturn(this,(SheetWrap2.__proto__||Object.getPrototypeOf(SheetWrap2)).call(this,props));return _this3.handleChange=function(list){_this3.setState({list:list})},_this3.state={list:[{id:3,name:"小明",age:"10"},{id:4,name:"小红",age:"15",_gm_select:!0},{id:5,name:"小蓝",age:"20"}]},_this3.isDisabled=_this3.isDisabled.bind(_this3),_this3}return _inherits(SheetWrap2,_react2.default.Component),_createClass(SheetWrap2,[{key:"isDisabled",value:function(line){return 18<line.age}},{key:"render",value:function(){return _react2.default.createElement(_index.Sheet,{list:this.state.list},_react2.default.createElement(_index.SheetColumn,{field:"id",name:"id"}),_react2.default.createElement(_index.SheetColumn,{field:"name",name:"名字"}),_react2.default.createElement(_index.SheetColumn,{field:"age",name:"年龄"}),_react2.default.createElement(_index.SheetSelect,{onChange:this.handleChange,isDisabled:this.isDisabled,isRadio:!0}))}}]),SheetWrap2}(),MarkdownItReactComponent=function(){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this4=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this4.state={},_this4}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"sheetselect-zhu-yi-selectalltip-zhi-yao__gm_select-du-weitrue-jiu-hui-chu-xian"},_react2.default.createElement("a",{className:"header-anchor",href:"#sheetselect-zhu-yi-selectalltip-zhi-yao__gm_select-du-weitrue-jiu-hui-chu-xian","aria-hidden":"true"},"¶")," SheetSelect ",_react2.default.createElement("code",null,"(注意: selectAllTip只要__gm_select都为true就会出现)")),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode3?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(SheetWrap,null),_react2.default.createElement(SheetWrap2,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"操作行为")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"SheetWrap")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"list"),": [","{",_react2.default.createElement("br",null),"                      ",_react2.default.createElement("span",{className:"hljs-attr"},"id"),": ",_react2.default.createElement("span",{className:"hljs-number"},"3"),",",_react2.default.createElement("br",null),"                      ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'小明'"),",",_react2.default.createElement("br",null),"                      ",_react2.default.createElement("span",{className:"hljs-attr"},"age"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'10'"),_react2.default.createElement("br",null),"                  ","}",", ","{",_react2.default.createElement("br",null),"                      ",_react2.default.createElement("span",{className:"hljs-attr"},"id"),": ",_react2.default.createElement("span",{className:"hljs-number"},"4"),",",_react2.default.createElement("br",null),"                      ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'小红'"),",",_react2.default.createElement("br",null),"                      ",_react2.default.createElement("span",{className:"hljs-attr"},"age"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'15'"),",",_react2.default.createElement("br",null),"                      ",_react2.default.createElement("span",{className:"hljs-attr"},"_gm_select"),": ",_react2.default.createElement("span",{className:"hljs-literal"},"true"),_react2.default.createElement("br",null),"                  ","}",", ","{",_react2.default.createElement("br",null),"                     ",_react2.default.createElement("span",{className:"hljs-attr"},"id"),": ",_react2.default.createElement("span",{className:"hljs-number"},"5"),",",_react2.default.createElement("br",null),"                     ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'小蓝'"),",",_react2.default.createElement("br",null),"                     ",_react2.default.createElement("span",{className:"hljs-attr"},"age"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'20'"),_react2.default.createElement("br",null),"                  ","}","]",_react2.default.createElement("br",null),"        ","}",";",_react2.default.createElement("br",null),_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect = ::",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect;",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelectAll = ::",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelectAll;",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".isDisabled = ::",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".isDisabled;",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"handleSelect(checked, index)","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-built_in"},"console"),".log(",_react2.default.createElement("span",{className:"hljs-string"},"'onSelect'"),", checked, index);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"const")," list = [...this.state.list];",_react2.default.createElement("br",null),"list[index]._gm_select = checked;",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"            list",_react2.default.createElement("br",null),"        ","}",");",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"handleSelectAll(checked, index)","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"const")," list = [...this.state.list];",_react2.default.createElement("br",null),"        list.map(",_react2.default.createElement("span",{className:"hljs-function"},_react2.default.createElement("span",{className:"hljs-params"},"line")," =>")," ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-keyword"},"if"),"(!",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".isDisabled(line))",_react2.default.createElement("br",null),"                line._gm_select = checked;",_react2.default.createElement("br",null),"        ","}",");",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"            list",_react2.default.createElement("br",null),"        ","}",");",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"isDisabled(line)","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," line.age > ",_react2.default.createElement("span",{className:"hljs-number"},"18"),";",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"render() ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"           <Sheet list=","{","this.state.list","}",">",_react2.default.createElement("br",null),'               <SheetColumn field="id" name="id"/>',_react2.default.createElement("br",null),'               <SheetColumn field="name" name="名字"/>',_react2.default.createElement("br",null),'               <SheetColumn field="age" name="年龄"/>',_react2.default.createElement("br",null),"               <SheetSelect",_react2.default.createElement("br",null),"                   onSelect=","{","this.handleSelect","}",_react2.default.createElement("br",null),"                   onSelectAll=","{","this.handleSelectAll","}",_react2.default.createElement("br",null),"                   isDisabled=","{","this.isDisabled","}",_react2.default.createElement("br",null),"                   hasSelectTip=","{","true","}",_react2.default.createElement("br",null),"                   selectAllTip=","{",'<div>全选是否勾上,可能代表<span className="gm-text-red">当前可见列表</span>勾上，也可能代表<span className="gm-text-red">所有页面数据</span>勾上，具体由调用方确定。</div>',"}",_react2.default.createElement("br",null),"               />",_react2.default.createElement("br",null),"           </Sheet>",_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null),"class SheetWrap2 extends React.Component ","{",_react2.default.createElement("br",null),"    constructor(props) ","{",_react2.default.createElement("br",null),"        super(props);",_react2.default.createElement("br",null),"this.state = ","{",_react2.default.createElement("br",null),"            list: [","{",_react2.default.createElement("br",null),"                      id: 3,",_react2.default.createElement("br",null),"                      name: '小明',",_react2.default.createElement("br",null),"                      age: '10'",_react2.default.createElement("br",null),"                  ","}",", ","{",_react2.default.createElement("br",null),"                      id: 4,",_react2.default.createElement("br",null),"                      name: '小红',",_react2.default.createElement("br",null),"                      age: '15',",_react2.default.createElement("br",null),"                      _gm_select: true",_react2.default.createElement("br",null),"                  ","}",", ","{",_react2.default.createElement("br",null),"                     id: 5,",_react2.default.createElement("br",null),"                     name: '小蓝',",_react2.default.createElement("br",null),"                     age: '20'",_react2.default.createElement("br",null),"                  ","}","]",_react2.default.createElement("br",null),"        ","}",";",_react2.default.createElement("br",null),"this.isDisabled = ::this.isDisabled;",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"handleChange = (list) => ","{",_react2.default.createElement("br",null),"          this.setState(","{","list","}",");",_react2.default.createElement("br",null),"    ","}",";",_react2.default.createElement("br",null),"isDisabled(line)","{",_react2.default.createElement("br",null),"        return line.age > 18;",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"render() ","{",_react2.default.createElement("br",null),"        return (",_react2.default.createElement("br",null),"           <Sheet list=","{","this.state.list","}",">",_react2.default.createElement("br",null),'               <SheetColumn field="id" name="id"/>',_react2.default.createElement("br",null),'               <SheetColumn field="name" name="名字"/>',_react2.default.createElement("br",null),'               <SheetColumn field="age" name="年龄"/>',_react2.default.createElement("br",null),"               <SheetSelect",_react2.default.createElement("br",null),"                   onChange=","{","this.handleChange","}",_react2.default.createElement("br",null),"                   isDisabled=","{","this.isDisabled","}",_react2.default.createElement("br",null),"                   isRadio",_react2.default.createElement("br",null),"               />",_react2.default.createElement("br",null),"           </Sheet>",_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<SheetWrap/>",_react2.default.createElement("br",null),_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"SheetWrap2"),"/>")),_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,3)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onSelect (func|isRequired)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onSelectAll (func)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onChange (func)")," 如果提供，则 onSelect onSelectAll 无效。 参数是设置好gm_select的列表数据，直接用重新 render 即可。相对 onSelect onSelectAll 简单很多"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"isDisabled (func)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"isRadio (bool)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"hasSelectTip (bool)")," 是否显示选择所有后的tip"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"selectAllTip (node)")," 选择所有后的tip文案")),_react2.default.createElement("p",null,"一但用到",_react2.default.createElement("code",null,"SheetSelect"),"，就约定了数据eList中的",_react2.default.createElement("code",null,"_gm_select"),"字段，",_react2.default.createElement("code",null,"_gm_select"),"为bool是选中。",_react2.default.createElement("code",null,"onSelect"),"当选择一行时触发，参数为是否选中",_react2.default.createElement("code",null,"checked"),"，和当前索引",_react2.default.createElement("code",null,"index"),"。",_react2.default.createElement("code",null,"onSelectAll"),"当选择所有的时候触发，参数为是否选择",_react2.default.createElement("code",null,"checked"),"。 需要根据select事件自动修改_gm_select属性。",_react2.default.createElement("code",null,"isDisabled"),"参数为当前行数据，返回",_react2.default.createElement("code",null,"true"),"or",_react2.default.createElement("code",null,"false"),"，表示是当前行是否可被选中"))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);