webpackJsonp([10],{349:function(e,t,l){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),u=l(1),s=function(e){return e&&e.__esModule?e:{default:e}}(u),m=l(10),d=[{id:3,name:"小明",age:"10"},{id:4,name:"小红",age:"15",_gm_select:!0},{id:5,name:"小蓝",age:"20"}],o=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return c(t,e),r(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return s.default.createElement("div",{className:"doc"},s.default.createElement("h2",{id:"sheetbatchaction"},s.default.createElement("a",{className:"header-anchor",href:"#sheetbatchaction","aria-hidden":"true"},"¶")," SheetBatchAction"),s.default.createElement("p",null,"批量操作按钮，Sheet会自动放到table的上面。"),s.default.createElement("p",null,"当存在",s.default.createElement("code",null,"SheetSelect"),"才有效。没啥功能，纯粹一个位置约定而已。 在",s.default.createElement("code",null,"handleBatchAction"),"中要自己判断哪些被选中，做想要的操作（哪些被选中其实也可以交给组件做，犹豫)"),s.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},s.default.createElement("div",{className:"doc-demo-instance"},s.default.createElement("h4",null,"Example"),s.default.createElement(m.Sheet,{list:d},s.default.createElement(m.SheetColumn,{field:"id",name:"id"}),s.default.createElement(m.SheetColumn,{field:"name",name:"名字"}),s.default.createElement(m.SheetColumn,{field:"age",name:"年龄"}),s.default.createElement(m.SheetSelect,{onSelect:function(e,t){return console.log("onSelect",e,t)},onSelectAll:function(e,t){return console.log("onSelectAll",e,t)}}),s.default.createElement(m.SheetBatchAction,null,s.default.createElement("button",{className:"btn btn-primary btn-sm gm-marginRight5",onClick:function(){return console.log("batch action")}},"批量操作"),s.default.createElement("button",{className:"btn btn-default btn-sm",onClick:function(){return console.log("batch action")}},"批量操作2")))),s.default.createElement("div",{className:"doc-demo-meta"},s.default.createElement("div",{className:"doc-demo-description"},s.default.createElement("p",null,"操作行为")),s.default.createElement("div",{className:"doc-demo-code"},s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},s.default.createElement("span",{className:"hljs-keyword"},"const")," list= [","{",s.default.createElement("br",null),"    ",s.default.createElement("span",{className:"hljs-attr"},"id"),": ",s.default.createElement("span",{className:"hljs-number"},"3"),",",s.default.createElement("br",null),"    ",s.default.createElement("span",{className:"hljs-attr"},"name"),": ",s.default.createElement("span",{className:"hljs-string"},"'小明'"),",",s.default.createElement("br",null),"    ",s.default.createElement("span",{className:"hljs-attr"},"age"),": ",s.default.createElement("span",{className:"hljs-string"},"'10'"),s.default.createElement("br",null),"}",", ","{",s.default.createElement("br",null),"    ",s.default.createElement("span",{className:"hljs-attr"},"id"),": ",s.default.createElement("span",{className:"hljs-number"},"4"),",",s.default.createElement("br",null),"    ",s.default.createElement("span",{className:"hljs-attr"},"name"),": ",s.default.createElement("span",{className:"hljs-string"},"'小红'"),",",s.default.createElement("br",null),"    ",s.default.createElement("span",{className:"hljs-attr"},"age"),": ",s.default.createElement("span",{className:"hljs-string"},"'15'"),",",s.default.createElement("br",null),"    ",s.default.createElement("span",{className:"hljs-attr"},"_gm_select"),": ",s.default.createElement("span",{className:"hljs-literal"},"true"),s.default.createElement("br",null),"}",", ","{",s.default.createElement("br",null),"   ",s.default.createElement("span",{className:"hljs-attr"},"id"),": ",s.default.createElement("span",{className:"hljs-number"},"5"),",",s.default.createElement("br",null),"   ",s.default.createElement("span",{className:"hljs-attr"},"name"),": ",s.default.createElement("span",{className:"hljs-string"},"'小蓝'"),",",s.default.createElement("br",null),"   ",s.default.createElement("span",{className:"hljs-attr"},"age"),": ",s.default.createElement("span",{className:"hljs-string"},"'20'"),s.default.createElement("br",null),"}","];",s.default.createElement("br",null))),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-jsx"},"<Sheet list=","{","list","}",">",s.default.createElement("br",null),'    <SheetColumn field="id" name="id"/>',s.default.createElement("br",null),'    <SheetColumn field="name" name="名字"/>',s.default.createElement("br",null),'    <SheetColumn field="age" name="年龄"/>',s.default.createElement("br",null),"    <SheetSelect ",s.default.createElement("br",null),"        onSelect=","{","(checked, index) => console.log('onSelect', checked, index)","}"," ",s.default.createElement("br",null),"        onSelectAll=","{","(checked, index) => console.log('onSelectAll', checked, index)","}",s.default.createElement("br",null),"    />",s.default.createElement("br",null),"    <SheetBatchAction>",s.default.createElement("br",null),"        <button ",s.default.createElement("br",null),'            className="btn btn-primary btn-sm gm-marginRight5" ',s.default.createElement("br",null),"            onClick=","{","() => console.log('batch action')","}",s.default.createElement("br",null),"        >批量操作</button>",s.default.createElement("br",null),"        <button ",s.default.createElement("br",null),'            className="btn btn-default btn-sm" ',s.default.createElement("br",null),"            onClick=","{","() => console.log('batch action')","}",s.default.createElement("br",null),"        >批量操作2</button>",s.default.createElement("br",null),"    </SheetBatchAction>",s.default.createElement("br",null),"</Sheet>",s.default.createElement("br",null)))),s.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},s.default.createElement("i",null)))))}}]),t}(s.default.Component);t.default=o}});
//# sourceMappingURL=10.ed17ff29.bundle.js.map