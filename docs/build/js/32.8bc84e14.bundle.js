(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{257:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var obj,_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(0),_react2=(obj=_react)&&obj.__esModule?obj:{default:obj},_index=__webpack_require__(7);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var LoadingWrap=function(_React$Component){function LoadingWrap(props){_classCallCheck(this,LoadingWrap);var _this=_possibleConstructorReturn(this,(LoadingWrap.__proto__||Object.getPrototypeOf(LoadingWrap)).call(this,props));return _this.state={fullscreen:!1,loading:!0},_this.onClick=_this.onClick.bind(_this),setTimeout(function(){_this.setState({loading:!1})},3e3),_this}return _inherits(LoadingWrap,_react2.default.Component),_createClass(LoadingWrap,[{key:"onClick",value:function(){_index.LoadingFullScreen.render({text:"玩命加载中..."}),setTimeout(function(){_index.LoadingFullScreen.hide()},3e3)}},{key:"render",value:function(){var list=[{id:3,name:"小明",age:"10"},{id:4,name:"小红",age:"15",_gm_select:!0},{id:5,name:"小蓝",age:"20"}];return _react2.default.createElement("div",null,_react2.default.createElement("h2",null,"加载"),_react2.default.createElement("div",null,_react2.default.createElement(_index.Loading,{size:30}),_react2.default.createElement(_index.Loading,null)),_react2.default.createElement("h2",null,"区域加载 size 60"),_react2.default.createElement(_index.LoadingChunk,{loading:!0,size:60},_react2.default.createElement(_index.Sheet,{list:list},_react2.default.createElement(_index.SheetColumn,{field:"id",name:"id"}),_react2.default.createElement(_index.SheetColumn,{field:"name",name:"名字"}),_react2.default.createElement(_index.SheetColumn,{field:"age",name:"年龄"}))),_react2.default.createElement("h2",null,"区域加载,自定义文案,3秒后关闭"),_react2.default.createElement(_index.LoadingChunk,{text:"拼命加载中...",loading:this.state.loading},_react2.default.createElement(_index.Sheet,{list:list},_react2.default.createElement(_index.SheetColumn,{field:"id",name:"id"}),_react2.default.createElement(_index.SheetColumn,{field:"name",name:"名字"}),_react2.default.createElement(_index.SheetColumn,{field:"age",name:"年龄"}))),_react2.default.createElement("h2",null,"全屏加载,自定义文案, 静态方法，3秒后关闭"),_react2.default.createElement("button",{className:"btn btn-default",onClick:this.onClick},"整页加载"))}}]),LoadingWrap}(),MarkdownItReactComponent=function(_React$Component2){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this2=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this2.state={},_this2}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"loading"},_react2.default.createElement("a",{className:"header-anchor",href:"#loading","aria-hidden":"true"},"¶")," Loading"),_react2.default.createElement("p",null,"Loading组件使用场景：  当页面进入某一个业务时，向后台请求数据，同时前端UI渲染需要依赖的数据还没有完全从后台返回，这时需要呈现一个Loading来告知用户需要等待一小会。"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(LoadingWrap,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"默认形态")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"LoadingWrap")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",_react2.default.createElement("br",null),"      ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"      ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-attr"},"fullscreen"),": ",_react2.default.createElement("span",{className:"hljs-literal"},"false"),",",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-attr"},"loading"),": ",_react2.default.createElement("span",{className:"hljs-literal"},"true"),_react2.default.createElement("br",null),"      ","}",";",_react2.default.createElement("br",null),"      ",_react2.default.createElement("br",null),"      ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".onClick = ::",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".onClick;",_react2.default.createElement("br",null),"      ",_react2.default.createElement("br",null),"      setTimeout(",_react2.default.createElement("span",{className:"hljs-function"},_react2.default.createElement("span",{className:"hljs-params"},"()"),"=>"),"{",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"loading"),": ",_react2.default.createElement("span",{className:"hljs-literal"},"false"),_react2.default.createElement("br",null),"          ","}",")",_react2.default.createElement("br",null),"      ","}",", ",_react2.default.createElement("span",{className:"hljs-number"},"3000"),");",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    onClick() ","{","      ",_react2.default.createElement("br",null),"      LoadingFullScreen.render(","{",_react2.default.createElement("br",null),"          ",_react2.default.createElement("span",{className:"hljs-attr"},"text"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'玩命加载中...'"),_react2.default.createElement("br",null),"      ","}",");",_react2.default.createElement("br",null),"      setTimeout(",_react2.default.createElement("span",{className:"hljs-function"},_react2.default.createElement("span",{className:"hljs-params"},"()")," =>")," ","{","LoadingFullScreen.hide()","}",", ",_react2.default.createElement("span",{className:"hljs-number"},"3000"),"); ",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),_react2.default.createElement("br",null),"    render() ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"const")," list= [","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"id"),": ",_react2.default.createElement("span",{className:"hljs-number"},"3"),",",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'小明'"),",",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"age"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'10'"),_react2.default.createElement("br",null),"        ","}",", ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"id"),": ",_react2.default.createElement("span",{className:"hljs-number"},"4"),",",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'小红'"),",",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"age"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'15'"),",",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"_gm_select"),": ",_react2.default.createElement("span",{className:"hljs-literal"},"true"),_react2.default.createElement("br",null),"        ","}",", ","{",_react2.default.createElement("br",null),"           ",_react2.default.createElement("span",{className:"hljs-attr"},"id"),": ",_react2.default.createElement("span",{className:"hljs-number"},"5"),",",_react2.default.createElement("br",null),"           ",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'小蓝'"),",",_react2.default.createElement("br",null),"           ",_react2.default.createElement("span",{className:"hljs-attr"},"age"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'20'"),_react2.default.createElement("br",null),"        ","}","];",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            <div>",_react2.default.createElement("br",null),"                <h2>加载</h2>",_react2.default.createElement("br",null),"                <div>",_react2.default.createElement("br",null),"                    <Loading size=","{","30","}"," />",_react2.default.createElement("br",null),"                    <Loading/>",_react2.default.createElement("br",null),"                </div> ",_react2.default.createElement("br",null),"                ",_react2.default.createElement("br",null),"<h2>区域加载 size 60</h2>",_react2.default.createElement("br",null),"                <LoadingChunk loading=","{","true","}"," size=","{","60","}",">",_react2.default.createElement("br",null),"                    <Sheet list=","{","list","}",">",_react2.default.createElement("br",null),'                        <SheetColumn field="id" name="id"/>',_react2.default.createElement("br",null),'                        <SheetColumn field="name" name="名字"/>',_react2.default.createElement("br",null),'                        <SheetColumn field="age" name="年龄"/>',_react2.default.createElement("br",null),"                    </Sheet>",_react2.default.createElement("br",null),"                </LoadingChunk>",_react2.default.createElement("br",null),"                ",_react2.default.createElement("br",null),"                <h2>区域加载,自定义文案,3秒后关闭</h2>",_react2.default.createElement("br",null),"                <LoadingChunk text='拼命加载中...' loading=","{","this.state.loading","}",">",_react2.default.createElement("br",null),"                    <Sheet list=","{","list","}",">",_react2.default.createElement("br",null),'                        <SheetColumn field="id" name="id"/>',_react2.default.createElement("br",null),'                        <SheetColumn field="name" name="名字"/>',_react2.default.createElement("br",null),'                        <SheetColumn field="age" name="年龄"/>',_react2.default.createElement("br",null),"                    </Sheet>",_react2.default.createElement("br",null),"                </LoadingChunk>",_react2.default.createElement("br",null),"                ",_react2.default.createElement("br",null),"                <h2>全屏加载,自定义文案, 静态方法，3秒后关闭</h2>",_react2.default.createElement("br",null),'                <button className="btn btn-default"  onClick=',"{","this.onClick","}",">整页加载</button>",_react2.default.createElement("br",null),"            </div>       ",_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<LoadingWrap/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("h4",{id:"loading-2"},_react2.default.createElement("a",{className:"header-anchor",href:"#loading-2","aria-hidden":"true"},"¶")," Loading"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"size (number)")," 默认 50"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"text (string)")," loading 文案"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"...rest"))),_react2.default.createElement("h4",{id:"loadingfullscreen-jing-tai-fang-fa"},_react2.default.createElement("a",{className:"header-anchor",href:"#loadingfullscreen-jing-tai-fang-fa","aria-hidden":"true"},"¶")," LoadingFullScreen (静态方法)"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"size (number)")," 默认 50"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"text (string)")," loading 文案"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"...rest"))),_react2.default.createElement("h4",{id:"loadingchunk"},_react2.default.createElement("a",{className:"header-anchor",href:"#loadingchunk","aria-hidden":"true"},"¶")," LoadingChunk"),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"loading (bool)")," 默认 ",_react2.default.createElement("code",null,"false"),","),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"size (number)")," 默认 50"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"text (string)")," loading 文案"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"...rest"))))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);