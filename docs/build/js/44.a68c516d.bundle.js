(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{269:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react2=_interopRequireDefault(__webpack_require__(0)),_index=__webpack_require__(7),_lodash2=_interopRequireDefault(__webpack_require__(2));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var searchSelectData=[{name:"华侨城"},{name:"世界之窗"},{name:"南山"},{name:"梧桐山"},{name:"欢乐海岸"},{name:"东部华侨城"},{name:"深圳湾"},{name:"华中科技大学"}],searchSelectGroupData=[{label:"一组",children:[{name:"华侨城"},{name:"世界之窗"},{name:"南山"},{name:"梧桐山"},{name:"欢乐海岸"}]},{label:"二组",children:[{name:"东部华侨城"},{name:"深圳湾"},{name:"华中科技大学"}]}],SearchSelect1=function(_React$Component){function SearchSelect1(props){_classCallCheck(this,SearchSelect1);var _this=_possibleConstructorReturn(this,(SearchSelect1.__proto__||Object.getPrototypeOf(SearchSelect1)).call(this,props));return _this.state={selected:searchSelectData[2],list:searchSelectData},_this.handleSelect=_this.handleSelect.bind(_this),_this.handleSearch=_this.handleSearch.bind(_this),_this}return _inherits(SearchSelect1,_react2.default.Component),_createClass(SearchSelect1,[{key:"handleSelect",value:function(selected){console.log(selected),this.setState({selected:selected})}},{key:"handleSearch",value:function(value){this.state.selected&&value===this.state.selected.name?this.setState({list:searchSelectData}):this.setState({list:_lodash2.default.filter(searchSelectData,function(v){return-1<v.name.indexOf(value)})})}},{key:"render",value:function(){return _react2.default.createElement("div",{style:{width:"300px"}},_react2.default.createElement(_index.SearchSelect,{list:this.state.list,selected:this.state.selected,onSearch:this.handleSearch,onSelect:this.handleSelect,placeholder:"搜索"}),_react2.default.createElement(_index.SearchSelect,{list:this.state.list,renderListCell:function(v){return _react2.default.createElement("strong",null,v.name," balabala")},selected:this.state.selected,onSearch:this.handleSearch,onSelect:this.handleSelect,placeholder:"搜索"}),_react2.default.createElement(_index.SearchSelect,{disabled:!0,list:this.state.list,selected:this.state.selected,onSearch:this.handleSearch,onSelect:this.handleSelect,placeholder:"搜索"}))}}]),SearchSelect1}(),SearchSelect2=function(_React$Component2){function SearchSelect2(props){_classCallCheck(this,SearchSelect2);var _this2=_possibleConstructorReturn(this,(SearchSelect2.__proto__||Object.getPrototypeOf(SearchSelect2)).call(this,props));return _this2.state={selected:searchSelectData,list:searchSelectData},_this2.handleSelect=_this2.handleSelect.bind(_this2),_this2.handleSearch=_this2.handleSearch.bind(_this2),_this2}return _inherits(SearchSelect2,_react2.default.Component),_createClass(SearchSelect2,[{key:"handleSelect",value:function(selected){console.log(selected),this.setState({selected:selected})}},{key:"handleSearch",value:function(value){this.state.selected&&value===this.state.selected?this.setState({list:searchSelectData}):this.setState({list:_lodash2.default.filter(searchSelectData,function(v){return-1<v.name.indexOf(value)})})}},{key:"render",value:function(){return _react2.default.createElement("div",{style:{width:"500px"}},_react2.default.createElement(_index.SearchSelect,{list:this.state.list,selected:this.state.selected,onSearch:this.handleSearch,onSelect:this.handleSelect,multiple:!0,placeholder:"搜索"}),_react2.default.createElement(_index.SearchSelect,{disabled:!0,list:this.state.list,selected:this.state.selected,onSearch:this.handleSearch,onSelect:this.handleSelect,multiple:!0,placeholder:"搜索"}))}}]),SearchSelect2}(),SearchSelect3=function(_React$Component3){function SearchSelect3(props){_classCallCheck(this,SearchSelect3);var _this3=_possibleConstructorReturn(this,(SearchSelect3.__proto__||Object.getPrototypeOf(SearchSelect3)).call(this,props));return _this3.state={selected:null,list:[].concat(searchSelectGroupData)},_this3.handleSelect=_this3.handleSelect.bind(_this3),_this3.handleSearch=_this3.handleSearch.bind(_this3),_this3}return _inherits(SearchSelect3,_react2.default.Component),_createClass(SearchSelect3,[{key:"handleSelect",value:function(selected){console.log(selected),this.setState({selected:selected})}},{key:"handleSearch",value:function(value){var list=JSON.parse(JSON.stringify(searchSelectGroupData));this.state.selected&&this.state.selected.name===value?this.setState({list:[].concat(searchSelectGroupData)}):this.setState({list:_lodash2.default.filter(list,function(v){return v.children=_lodash2.default.filter(v.children,function(item){return console.log("item",-1<item.name.indexOf(value)),-1<item.name.indexOf(value)}),v.children.length})})}},{key:"render",value:function(){return _react2.default.createElement("div",{style:{width:"300px"}},_react2.default.createElement(_index.SearchSelect,{list:this.state.list,isGroupList:!0,selected:this.state.selected,onSearch:this.handleSearch,onSelect:this.handleSelect,placeholder:"搜索"}))}}]),SearchSelect3}(),MarkdownItReactComponent=function(_React$Component4){function MarkdownItReactComponent(props){_classCallCheck(this,MarkdownItReactComponent);var _this4=_possibleConstructorReturn(this,(MarkdownItReactComponent.__proto__||Object.getPrototypeOf(MarkdownItReactComponent)).call(this,props));return _this4.state={},_this4}return _inherits(MarkdownItReactComponent,_react2.default.Component),_createClass(MarkdownItReactComponent,[{key:"handleToggleCode",value:function(flag){var state={};state["showCode"+flag]=!this.state["showCode"+flag],this.setState(state)}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"doc"},_react2.default.createElement("h2",{id:"searchselect"},_react2.default.createElement("a",{className:"header-anchor",href:"#searchselect","aria-hidden":"true"},"¶")," SearchSelect"),_react2.default.createElement("p",null,"搜索选择组件，请优先考虑选择更便捷的",_react2.default.createElement("a",{href:"#/doc/FilterSearchSelect"},"FilterSearchSelect"),"。"),_react2.default.createElement("p",null,"SearchSelect  和 FilterSearchSelect 如果用起来发现二次进入的时候会有奇怪现象（输入框的默认值存在），就试试给个key吧，设计的略复杂，不知道怎么处理了。"),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example")),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"以下example依赖的数据")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-keyword"},"const")," searchSelectData = [",_react2.default.createElement("br",null),"    ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'华侨城'"),"}",",",_react2.default.createElement("br",null),"    ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'世界之窗'"),"}",",",_react2.default.createElement("br",null),"    ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'南山'"),"}",",",_react2.default.createElement("br",null),"    ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'梧桐山'"),"}",",",_react2.default.createElement("br",null),"    ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'欢乐海岸'"),"}",",",_react2.default.createElement("br",null),"    ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'东部华侨城'"),"}",",",_react2.default.createElement("br",null),"    ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'深圳湾'"),"}",",",_react2.default.createElement("br",null),"    ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'华中科技大学'"),"}",_react2.default.createElement("br",null),"];",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),_react2.default.createElement("span",{className:"hljs-keyword"},"const")," searchSelectGroupData = [","{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attr"},"label"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'一组'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attr"},"children"),": [",_react2.default.createElement("br",null),"        ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'华侨城'"),"}",",",_react2.default.createElement("br",null),"        ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'世界之窗'"),"}",",",_react2.default.createElement("br",null),"        ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'南山'"),"}",",",_react2.default.createElement("br",null),"        ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'梧桐山'"),"}",",",_react2.default.createElement("br",null),"        ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'欢乐海岸'"),"}",_react2.default.createElement("br",null),"    ]",_react2.default.createElement("br",null),"}",",","{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attr"},"label"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'二组'"),",",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-attr"},"children"),": [",_react2.default.createElement("br",null),"        ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'东部华侨城'"),"}",",",_react2.default.createElement("br",null),"        ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'深圳湾'"),"}",",",_react2.default.createElement("br",null),"        ","{",_react2.default.createElement("span",{className:"hljs-attr"},"name"),": ",_react2.default.createElement("span",{className:"hljs-string"},"'华中科技大学'"),"}",_react2.default.createElement("br",null),"    ]",_react2.default.createElement("br",null),"}","];",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},_react2.default.createElement("i",null)))),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode12?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(SearchSelect1,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"单选。如果把搜索条件清空，则代表没有选择。")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"SearchSelect1")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"selected"),": searchSelectData[",_react2.default.createElement("span",{className:"hljs-number"},"2"),"],",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"list"),": searchSelectData",_react2.default.createElement("br",null),"        ","}",";",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect = ::",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect;",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSearch = ::",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSearch;",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    handleSelect(selected) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-built_in"},"console"),".log(selected);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"            selected",_react2.default.createElement("br",null),"        ","}",");",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    handleSearch(value) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"if"),"(",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state.selected && value === ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state.selected.name)","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-attr"},"list"),": searchSelectData",_react2.default.createElement("br",null),"            ","}",");",_react2.default.createElement("br",null),"        ","}",_react2.default.createElement("span",{className:"hljs-keyword"},"else"),"{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-attr"},"list"),": _.filter(searchSelectData, v => ","{",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," v.name.indexOf(value) > ",_react2.default.createElement("span",{className:"hljs-number"},"-1"),";",_react2.default.createElement("br",null),"                ","}",")",_react2.default.createElement("br",null),"            ","}",");",_react2.default.createElement("br",null),"        ","}",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    render() ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            <div style=","{","{","width: '300px'","}","}",">",_react2.default.createElement("br",null),"                <SearchSelect",_react2.default.createElement("br",null),"                    list=","{","this.state.list","}",_react2.default.createElement("br",null),"                    selected=","{","this.state.selected","}",_react2.default.createElement("br",null),"                    onSearch=","{","this.handleSearch","}",_react2.default.createElement("br",null),"                    onSelect=","{","this.handleSelect","}",_react2.default.createElement("br",null),'                    placeholder="搜索"',_react2.default.createElement("br",null),"                />",_react2.default.createElement("br",null),"<SearchSelect",_react2.default.createElement("br",null),"                    list=","{","this.state.list","}",_react2.default.createElement("br",null),"                    renderListCell=","{","v => (<strong>","{","v.name","}"," balabala</strong>)","}",_react2.default.createElement("br",null),"                    selected=","{","this.state.selected","}",_react2.default.createElement("br",null),"                    onSearch=","{","this.handleSearch","}",_react2.default.createElement("br",null),"                    onSelect=","{","this.handleSelect","}",_react2.default.createElement("br",null),'                    placeholder="搜索"',_react2.default.createElement("br",null),"                />",_react2.default.createElement("br",null),"                ",_react2.default.createElement("br",null),"                <SearchSelect",_react2.default.createElement("br",null),"                    disabled",_react2.default.createElement("br",null),"                    list=","{","this.state.list","}",_react2.default.createElement("br",null),"                    selected=","{","this.state.selected","}",_react2.default.createElement("br",null),"                    onSearch=","{","this.handleSearch","}",_react2.default.createElement("br",null),"                    onSelect=","{","this.handleSelect","}",_react2.default.createElement("br",null),'                    placeholder="搜索"',_react2.default.createElement("br",null),"                />",_react2.default.createElement("br",null),"            </div>",_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<SearchSelect1/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,12)},_react2.default.createElement("i",null)))),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode16?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(SearchSelect2,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"多选。 按delete可删除。")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"SearchSelect2")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"selected"),": searchSelectData,",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"list"),": searchSelectData",_react2.default.createElement("br",null),"        ","}",";",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect = ::",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect;",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSearch = ::",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSearch;",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    handleSelect(selected) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-built_in"},"console"),".log(selected);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"            selected",_react2.default.createElement("br",null),"        ","}",");",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    handleSearch(value) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-comment"},"// 字符串匹配过滤，如果和选中的一样，则返回全部"),_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"if"),"(",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state.selected && value === ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state.selected)","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-attr"},"list"),": searchSelectData",_react2.default.createElement("br",null),"            ","}",");",_react2.default.createElement("br",null),"        ","}",_react2.default.createElement("span",{className:"hljs-keyword"},"else"),"{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"                 ",_react2.default.createElement("span",{className:"hljs-attr"},"list"),": _.filter(searchSelectData, v => v.name.indexOf(value) > ",_react2.default.createElement("span",{className:"hljs-number"},"-1"),")",_react2.default.createElement("br",null),"            ","}",");",_react2.default.createElement("br",null),"        ","}",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    render() ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            <div style=","{","{","width: '500px'","}","}",">",_react2.default.createElement("br",null),"                <SearchSelect",_react2.default.createElement("br",null),"                    list=","{","this.state.list","}",_react2.default.createElement("br",null),"                    selected=","{","this.state.selected","}",_react2.default.createElement("br",null),"                    onSearch=","{","this.handleSearch","}",_react2.default.createElement("br",null),"                    onSelect=","{","this.handleSelect","}",_react2.default.createElement("br",null),"                    multiple",_react2.default.createElement("br",null),'                    placeholder="搜索"',_react2.default.createElement("br",null),"                />",_react2.default.createElement("br",null),"                ",_react2.default.createElement("br",null),"                <SearchSelect",_react2.default.createElement("br",null),"                    disabled",_react2.default.createElement("br",null),"                    list=","{","this.state.list","}",_react2.default.createElement("br",null),"                    selected=","{","this.state.selected","}",_react2.default.createElement("br",null),"                    onSearch=","{","this.handleSearch","}",_react2.default.createElement("br",null),"                    onSelect=","{","this.handleSelect","}",_react2.default.createElement("br",null),"                    multiple",_react2.default.createElement("br",null),'                    placeholder="搜索"',_react2.default.createElement("br",null),"                />",_react2.default.createElement("br",null),"            </div>",_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<SearchSelect2/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,16)},_react2.default.createElement("i",null)))),_react2.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode20?"doc-demo-code-active":"")},_react2.default.createElement("div",{className:"doc-demo-instance"},_react2.default.createElement("h4",null,"Example"),_react2.default.createElement(SearchSelect3,null)),_react2.default.createElement("div",{className:"doc-demo-meta"},_react2.default.createElement("div",{className:"doc-demo-description"},_react2.default.createElement("p",null,"按组分")),_react2.default.createElement("div",{className:"doc-demo-code"},_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-js"},_react2.default.createElement("span",{className:"hljs-class"},_react2.default.createElement("span",{className:"hljs-keyword"},"class")," ",_react2.default.createElement("span",{className:"hljs-title"},"SearchSelect3")," ",_react2.default.createElement("span",{className:"hljs-keyword"},"extends")," ",_react2.default.createElement("span",{className:"hljs-title"},"React"),".",_react2.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",_react2.default.createElement("br",null),"    ",_react2.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"selected"),": ",_react2.default.createElement("span",{className:"hljs-literal"},"null"),",",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-attr"},"list"),": [...searchSelectGroupData]",_react2.default.createElement("br",null),"        ","}",";",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect = ::",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect;",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSearch = ::",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSearch;",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    handleSelect(selected) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-built_in"},"console"),".log(selected);",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"            selected",_react2.default.createElement("br",null),"        ","}",");",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    handleSearch(value) ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"const")," list = ",_react2.default.createElement("span",{className:"hljs-built_in"},"JSON"),".parse(",_react2.default.createElement("span",{className:"hljs-built_in"},"JSON"),".stringify(searchSelectGroupData));",_react2.default.createElement("br",null),"        ",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"if"),"(",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state.selected && ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".state.selected.name === value)","{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-attr"},"list"),": [...searchSelectGroupData]",_react2.default.createElement("br",null),"            ","}",");",_react2.default.createElement("br",null),"        ","}",_react2.default.createElement("span",{className:"hljs-keyword"},"else"),"{",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-attr"},"list"),": _.filter(list, v => ","{",_react2.default.createElement("br",null),"                    v.children = _.filter(v.children, item => ","{",_react2.default.createElement("br",null),"                        ",_react2.default.createElement("span",{className:"hljs-built_in"},"console"),".log(",_react2.default.createElement("span",{className:"hljs-string"},"'item'"),", item.name.indexOf(value) > ",_react2.default.createElement("span",{className:"hljs-number"},"-1"),");",_react2.default.createElement("br",null),"                        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," item.name.indexOf(value) > ",_react2.default.createElement("span",{className:"hljs-number"},"-1"),";",_react2.default.createElement("br",null),"                    ","}",");",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," v.children.length;",_react2.default.createElement("br",null),"                ","}",")",_react2.default.createElement("br",null),"            ","}",");",_react2.default.createElement("br",null),"        ","}",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"    ",_react2.default.createElement("br",null),"    render() ","{",_react2.default.createElement("br",null),"        ",_react2.default.createElement("span",{className:"hljs-keyword"},"return")," (",_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"xml"},_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"div")," ",_react2.default.createElement("span",{className:"hljs-attr"},"style"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","{","width:")," '",_react2.default.createElement("span",{className:"hljs-attr"},"300px"),"'","}","}",">"),_react2.default.createElement("br",null),"                ",_react2.default.createElement("span",{className:"hljs-tag"},"<",_react2.default.createElement("span",{className:"hljs-name"},"SearchSelect"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"list"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.state.list","}"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"isGroupList"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"selected"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.state.selected","}"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"onSearch"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.handleSearch","}"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"onSelect"),"=",_react2.default.createElement("span",{className:"hljs-string"},"{","this.handleSelect","}"),_react2.default.createElement("br",null),"                    ",_react2.default.createElement("span",{className:"hljs-attr"},"placeholder"),"=",_react2.default.createElement("span",{className:"hljs-string"},'"搜索"'),_react2.default.createElement("br",null),"                />"),_react2.default.createElement("br",null),"            ",_react2.default.createElement("span",{className:"hljs-tag"},"</",_react2.default.createElement("span",{className:"hljs-name"},"div"),">"),_react2.default.createElement("br",null),"        );",_react2.default.createElement("br",null),"    ","}",_react2.default.createElement("br",null),"}",_react2.default.createElement("br",null)))),_react2.default.createElement("pre",null,_react2.default.createElement("code",{className:"language-jsx"},"<SearchSelect3/>",_react2.default.createElement("br",null)))),_react2.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,20)},_react2.default.createElement("i",null)))),_react2.default.createElement("h3",{id:"props"},_react2.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),_react2.default.createElement("p",null,_react2.default.createElement("strong",null,"注意，请尽量提供key")),_react2.default.createElement("ul",null,_react2.default.createElement("li",null,_react2.default.createElement("code",null,"list (array|isRequired)")," 搜索待选数据，是过滤后的数据。结构",_react2.default.createElement("code",null,"[{name: &quot;aaaaa&quot;}]")," ，name用来显示"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"renderListCell")," 有时候需要改变列表的样式，通过此方法自定义"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"isGroupList (bool)")," list数据是否分组数据，此时list的结构为",_react2.default.createElement("code",null,"[{label: &quot;一组&quot;, children: [{name: &quot;aaaaa&quot;}]}]")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"selected (any)")," 选中了什么，",_react2.default.createElement("code",null,"list"),"中某条数据(引用！)"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onSelect (func|isRequired)")," 选中后触发，提供和",_react2.default.createElement("code",null,"selected"),"一样的数据结构，一般直接设置",_react2.default.createElement("code",null,"selected"),"即可"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"onSearch (func|isRequired)")," 搜索触发函数，以便过滤重新得出",_react2.default.createElement("code",null,"list"),"数据。"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"delay (number)")," 搜索过程中延迟多少ms才出触发",_react2.default.createElement("code",null,"onSearch"),"， 默认500"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"listMaxHeight (string)")," 搜索待选数据的高度，默认250px"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"multiple (bool)")," 是否多选，默认false。 如果多选，则selected是数组"),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"placeholder (string)")),_react2.default.createElement("li",null,_react2.default.createElement("code",null,"isScrollToSelected (bool)")," focus后列表是否滚动到选择的位置")))}}]),MarkdownItReactComponent}();exports.default=MarkdownItReactComponent}}]);