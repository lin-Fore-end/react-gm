(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{198:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var obj,_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(12);var list=[{id:3,name:"小明",age:"10"},{id:4,name:"小红",age:"15",_gm_select:!0},{id:5,name:"小蓝",age:"20"}],MarkdownItReactComponent=function(_React$Component){function MarkdownItReactComponent(props){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MarkdownItReactComponent);var _this=function(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this.state={},_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"sheetbatchaction"},_react2.default.createElement("a",{className:"header-anchor",href:"#sheetbatchaction","aria-hidden":"true"},"¶")," SheetBatchAction"),_react2.default.createElement("p",null,"批量操作按钮，Sheet会自动放到table的上面。"),_react2.default.createElement("p",null,"当存在",_react2.default.createElement("code",null,"SheetSelect"),"才有效。没啥功能，纯粹一个位置约定而已。 在",_react2.default.createElement("code",null,"handleBatchAction"),"中要自己判断哪些被选中，做想要的操作（哪些被选中其实也可以交给组件做，犹豫)"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(_index.Sheet,{list:list},_react2.default.createElement(_index.SheetColumn,{field:"id",name:"id"}),_react2.default.createElement(_index.SheetColumn,{field:"name",name:"名字"}),_react2.default.createElement(_index.SheetColumn,{field:"age",name:"年龄"}),_react2.default.createElement(_index.SheetSelect,{onSelect:function(checked,index){return console.log("onSelect",checked,index)},onSelectAll:function(checked,index){return console.log("onSelectAll",checked,index)}}),_react2.default.createElement(_index.SheetBatchAction,null,_react2.default.createElement("button",{className:"btn btn-primary btn-sm gm-marginRight5",onClick:function(){return console.log("batch action")}},"批量操作"),_react2.default.createElement("button",{className:"btn btn-default btn-sm",onClick:function(){return console.log("batch action")}},"批量操作2")))),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"操作行为")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-keyword"},"const")," list= [","{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attr"},"id"),": ",_react2.default.createElement("span",{className:"hljs-number"},"3"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'小明'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attr"},"age"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'10'"),_react2.default.createElement("br",null),"}",", ","{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attr"},"id"),": ",_react2.default.createElement("span",{className:"hljs-number"},"4"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'小红'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attr"},"age"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'15'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attr"},"_gm_select"),": ",_react2.default.createElement("span",{className:"hljs-literal"},"true"),_react2.default.createElement("br",null),"}",", ","{",_react2.default.createElement("br",null),"   ",_react2.default.createElement("span",{className:"hljs-attr"},"id"),": ",_react2.default.createElement("span",{className:"hljs-number"},"5"),",",_react2.default.createElement("br",null),"   ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'小蓝'"),",",_react2.default.createElement("br",null),"   ",_react2.default.createElement("span",{className:"hljs-attr"},"age"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'20'"),_react2.default.createElement("br",null),"}","];",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<Sheet list=","{","list","}",">",_react2.default.createElement("br",null),'    <SheetColumn field="id" name="id"/>',_react2.default.createElement("br",null),'    <SheetColumn field="name" name="名字"/>',_react2.default.createElement("br",null),'    <SheetColumn field="age" name="年龄"/>',_react2.default.createElement("br",null),"    <SheetSelect ",_react2.default.createElement("br",null),"        onSelect=","{","(checked, index) => console.log('onSelect', checked, index)","}"," ",_react2.default.createElement("br",null),"        onSelectAll=","{","(checked, index) => console.log('onSelectAll', checked, index)","}",_react2.default.createElement("br",null),"    />",_react2.default.createElement("br",null),"    <SheetBatchAction>",_react2.default.createElement("br",null),"        <button ",_react2.default.createElement("br",null),'            className="btn btn-primary btn-sm gm-marginRight5" ',_react2.default.createElement("br",null),"            onClick=","{","() => console.log('batch action')","}",_react2.default.createElement("br",null),"        >批量操作</button>",_react2.default.createElement("br",null),"        <button ",_react2.default.createElement("br",null),'            className="btn btn-default btn-sm" ',_react2.default.createElement("br",null),"            onClick=","{","() => console.log('batch action')","}",_react2.default.createElement("br",null),"        >批量操作2</button>",_react2.default.createElement("br",null),"    </SheetBatchAction>",_react2.default.createElement("br",null),"</Sheet>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},_react2.default.createElement("i",null)))))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);