webpackJsonp([36],{362:function(e,t,l){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),c=l(1),m=function(e){return e&&e.__esModule?e:{default:e}}(c),d=l(8),s=function(e){function t(){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"handleClick",value:function(){console.log("click")}},{key:"render",value:function(){return m.default.createElement("div",null,m.default.createElement("div",null,"普通，要自己加caret"),"默认",m.default.createElement(d.DropDown,{popup:m.default.createElement(d.DropDownItems,null,m.default.createElement(d.DropDownItem,{onClick:this.handleClick},"aaa"),m.default.createElement(d.DropDownItem,null,"aaa"))},m.default.createElement("button",{className:"btn btn-default"},"drop down ",m.default.createElement("span",{className:"caret"}))),"主色",m.default.createElement(d.DropDown,{popup:m.default.createElement(d.DropDownItems,null,m.default.createElement(d.DropDownItem,{onClick:this.handleClick},"aaa"),m.default.createElement(d.DropDownItem,null,"aaa"))},m.default.createElement("button",{className:"btn btn-primary"},"drop down ",m.default.createElement("span",{className:"caret"}))),m.default.createElement("div",null,"分裂式按钮"),"默认",m.default.createElement(d.DropDown,{split:!0,cartClassName:"btn-default",popup:m.default.createElement(d.DropDownItems,null,m.default.createElement(d.DropDownItem,{onClick:this.handleClick},"aaa"),m.default.createElement(d.DropDownItem,null,"aaa"))},m.default.createElement("button",{className:"btn btn-default"},"drop down")),"主色",m.default.createElement(d.DropDown,{split:!0,cartClassName:"btn-primary",popup:m.default.createElement(d.DropDownItems,null,m.default.createElement(d.DropDownItem,{onClick:this.handleClick},"aaa"),m.default.createElement(d.DropDownItem,null,"aaa"))},m.default.createElement("button",{className:"btn btn-primary"},"drop down")))}}]),t}(m.default.Component),o=function(e){function t(){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"handleClick",value:function(){console.log("click")}},{key:"render",value:function(){return m.default.createElement("div",null,"大 lg",m.default.createElement(d.DropDown,{popup:m.default.createElement(d.DropDownItems,null,m.default.createElement(d.DropDownItem,{onClick:this.handleClick},"aaa"),m.default.createElement(d.DropDownItem,null,"aaa"))},m.default.createElement("button",{className:"btn btn-primary btn-lg"},"drop down ",m.default.createElement("span",{className:"caret"}))),"小 sm",m.default.createElement(d.DropDown,{popup:m.default.createElement(d.DropDownItems,null,m.default.createElement(d.DropDownItem,{onClick:this.handleClick},"aaa"),m.default.createElement(d.DropDownItem,null,"aaa"))},m.default.createElement("button",{className:"btn btn-primary btn-sm"},"drop down ",m.default.createElement("span",{className:"caret"}))),"超小 xs",m.default.createElement(d.DropDown,{split:!0,cartClassName:"btn-xs",popup:m.default.createElement(d.DropDownItems,null,m.default.createElement(d.DropDownItem,{onClick:this.handleClick},"aaa"),m.default.createElement(d.DropDownItem,null,"aaa"))},m.default.createElement("button",{className:"btn btn-default btn-xs"},"drop down")))}}]),t}(m.default.Component),f=function(e){function t(){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"handleClick",value:function(){console.log("click")}},{key:"render",value:function(){return m.default.createElement("div",null,"右边对齐",m.default.createElement(d.DropDown,{right:!0,popup:m.default.createElement(d.DropDownItems,null,m.default.createElement(d.DropDownItem,{onClick:this.handleClick},"aaa"),m.default.createElement(d.DropDownItem,null,"aaa"))},m.default.createElement("button",{className:"btn btn-primary"},"drop down ",m.default.createElement("span",{className:"caret"}))),m.default.createElement(d.DropDown,{split:!0,right:!0,popup:m.default.createElement(d.DropDownItems,null,m.default.createElement(d.DropDownItem,{onClick:this.handleClick},"aaa"),m.default.createElement(d.DropDownItem,null,"aaa"))},m.default.createElement("button",{className:"btn btn-default"},"drop down")))}}]),t}(m.default.Component),p=function(e){function t(){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"handleClick",value:function(){console.log("click")}},{key:"render",value:function(){return m.default.createElement("div",null,"选项分割",m.default.createElement(d.DropDown,{popup:m.default.createElement(d.DropDownItems,null,m.default.createElement(d.DropDownItem,{onClick:this.handleClick},"aaa"),m.default.createElement(d.DropDownItem,null,"aaa"),m.default.createElement(d.DropDownItem,{className:"divider"}),m.default.createElement(d.DropDownItem,null,"aaa"))},m.default.createElement("button",{className:"btn btn-default"},"drop down ",m.default.createElement("span",{className:"caret"}))),"第二个选项disabled",m.default.createElement(d.DropDown,{popup:m.default.createElement(d.DropDownItems,null,m.default.createElement(d.DropDownItem,{onClick:this.handleClick},"aaa"),m.default.createElement(d.DropDownItem,{className:"disabled"},"aaa"),m.default.createElement(d.DropDownItem,null,"aaa"),m.default.createElement(d.DropDownItem,null),m.default.createElement(d.DropDownItem,null,"aaa"))},m.default.createElement("button",{className:"btn btn-default"},"drop down ",m.default.createElement("span",{className:"caret"}))),"选项header",m.default.createElement(d.DropDown,{popup:m.default.createElement(d.DropDownItems,null,m.default.createElement(d.DropDownItem,{className:"dropdown-header"},"我是header"),m.default.createElement(d.DropDownItem,{onClick:this.handleClick},"aaa"),m.default.createElement(d.DropDownItem,{className:"disabled"},"aaa"),m.default.createElement(d.DropDownItem,null,"aaa"),m.default.createElement(d.DropDownItem,{className:"dropdown-header"},"我是header"),m.default.createElement(d.DropDownItem,null,"aaa"))},m.default.createElement("button",{className:"btn btn-default"},"drop down ",m.default.createElement("span",{className:"caret"}))))}}]),t}(m.default.Component),E=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return r(t,e),u(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return m.default.createElement("div",{className:"doc"},m.default.createElement("h2",{id:"dropdown"},m.default.createElement("a",{className:"header-anchor",href:"#dropdown","aria-hidden":"true"},"¶")," DropDown"),m.default.createElement("p",null,"下拉框"),m.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},m.default.createElement("div",{className:"doc-demo-instance"},m.default.createElement("h4",null,"Example"),m.default.createElement(s,null)),m.default.createElement("div",{className:"doc-demo-meta"},m.default.createElement("div",{className:"doc-demo-description"},m.default.createElement("p",null,"DropDown 色系 default primary success info warning danger")),m.default.createElement("div",{className:"doc-demo-code"},m.default.createElement("pre",null,m.default.createElement("code",{className:"language-js"},m.default.createElement("span",{className:"hljs-class"},m.default.createElement("span",{className:"hljs-keyword"},"class")," ",m.default.createElement("span",{className:"hljs-title"},"DropDownWrap")," ",m.default.createElement("span",{className:"hljs-keyword"},"extends")," ",m.default.createElement("span",{className:"hljs-title"},"React"),".",m.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",m.default.createElement("br",null),"    handleClick() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-built_in"},"console"),".log(",m.default.createElement("span",{className:"hljs-string"},"'click'"),");",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    render() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"return")," (",m.default.createElement("br",null),"            <div>",m.default.createElement("br",null),"                <div>普通，要自己加caret</div>",m.default.createElement("br",null),"                默认",m.default.createElement("br",null),"                <DropDown",m.default.createElement("br",null),"                    popup=","{","(",m.default.createElement("br",null),"                        <DropDownItems>",m.default.createElement("br",null),"                            <DropDownItem onClick=","{","this.handleClick","}",">aaa</DropDownItem>",m.default.createElement("br",null),"                            <DropDownItem>aaa</DropDownItem>",m.default.createElement("br",null),"                        </DropDownItems>",m.default.createElement("br",null),"                    )","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),'                    <button className="btn btn-default">drop down <span className="caret"/></button>',m.default.createElement("br",null),"                </DropDown>",m.default.createElement("br",null),"                主色",m.default.createElement("br",null),"                <DropDown",m.default.createElement("br",null),"                    popup=","{","(",m.default.createElement("br",null),"                        <DropDownItems>",m.default.createElement("br",null),"                            <DropDownItem onClick=","{","this.handleClick","}",">aaa</DropDownItem>",m.default.createElement("br",null),"                            <DropDownItem>aaa</DropDownItem>",m.default.createElement("br",null),"                        </DropDownItems>",m.default.createElement("br",null),"                    )","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),'                    <button className="btn btn-primary">drop down <span className="caret"/></button>',m.default.createElement("br",null),"                </DropDown>",m.default.createElement("br",null),"                ",m.default.createElement("br",null),"                <div>分裂式按钮</div>",m.default.createElement("br",null),"                默认",m.default.createElement("br",null),"                <DropDown",m.default.createElement("br",null),"                    split",m.default.createElement("br",null),'                    cartClassName="btn-default"',m.default.createElement("br",null),"                    popup=","{","(",m.default.createElement("br",null),"                        <DropDownItems>",m.default.createElement("br",null),"                            <DropDownItem onClick=","{","this.handleClick","}",">aaa</DropDownItem>",m.default.createElement("br",null),"                            <DropDownItem>aaa</DropDownItem>",m.default.createElement("br",null),"                        </DropDownItems>",m.default.createElement("br",null),"                    )","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),'                    <button className="btn btn-default">drop down</button>',m.default.createElement("br",null),"                </DropDown>",m.default.createElement("br",null),"                主色",m.default.createElement("br",null),"                <DropDown",m.default.createElement("br",null),"                    split",m.default.createElement("br",null),'                    cartClassName="btn-primary"',m.default.createElement("br",null),"                    popup=","{","(",m.default.createElement("br",null),"                        <DropDownItems>",m.default.createElement("br",null),"                            <DropDownItem onClick=","{","this.handleClick","}",">aaa</DropDownItem>",m.default.createElement("br",null),"                            <DropDownItem>aaa</DropDownItem>",m.default.createElement("br",null),"                        </DropDownItems>",m.default.createElement("br",null),"                    )","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),'                    <button className="btn btn-primary">drop down</button>',m.default.createElement("br",null),"                </DropDown>",m.default.createElement("br",null),"            </div>",m.default.createElement("br",null),"        );",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"}",m.default.createElement("br",null))),m.default.createElement("pre",null,m.default.createElement("code",{className:"language-jsx"},"<DropDownWrap/>",m.default.createElement("br",null)))),m.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},m.default.createElement("i",null)))),m.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode10?"doc-demo-code-active":"")},m.default.createElement("div",{className:"doc-demo-instance"},m.default.createElement("h4",null,"Example"),m.default.createElement(o,null)),m.default.createElement("div",{className:"doc-demo-meta"},m.default.createElement("div",{className:"doc-demo-description"},m.default.createElement("p",null,"分裂式")),m.default.createElement("div",{className:"doc-demo-code"},m.default.createElement("pre",null,m.default.createElement("code",{className:"language-js"},m.default.createElement("span",{className:"hljs-class"},m.default.createElement("span",{className:"hljs-keyword"},"class")," ",m.default.createElement("span",{className:"hljs-title"},"DropDownWrap1")," ",m.default.createElement("span",{className:"hljs-keyword"},"extends")," ",m.default.createElement("span",{className:"hljs-title"},"React"),".",m.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",m.default.createElement("br",null),"    handleClick() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-built_in"},"console"),".log(",m.default.createElement("span",{className:"hljs-string"},"'click'"),");",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    render() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"return")," (",m.default.createElement("br",null),"            <div>           ",m.default.createElement("br",null),"                大 lg",m.default.createElement("br",null),"                <DropDown",m.default.createElement("br",null),"                    popup=","{","(",m.default.createElement("br",null),"                        <DropDownItems>",m.default.createElement("br",null),"                            <DropDownItem onClick=","{","this.handleClick","}",">aaa</DropDownItem>",m.default.createElement("br",null),"                            <DropDownItem>aaa</DropDownItem>",m.default.createElement("br",null),"                        </DropDownItems>",m.default.createElement("br",null),"                    )","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),'                    <button className="btn btn-primary btn-lg">drop down <span className="caret"/></button>',m.default.createElement("br",null),"                </DropDown>",m.default.createElement("br",null),"                小 sm",m.default.createElement("br",null),"                <DropDown",m.default.createElement("br",null),"                    popup=","{","(",m.default.createElement("br",null),"                        <DropDownItems>",m.default.createElement("br",null),"                            <DropDownItem onClick=","{","this.handleClick","}",">aaa</DropDownItem>",m.default.createElement("br",null),"                            <DropDownItem>aaa</DropDownItem>",m.default.createElement("br",null),"                        </DropDownItems>",m.default.createElement("br",null),"                    )","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),'                    <button className="btn btn-primary btn-sm">drop down <span className="caret"/></button>',m.default.createElement("br",null),"                </DropDown>",m.default.createElement("br",null),"                超小 xs",m.default.createElement("br",null),"                <DropDown",m.default.createElement("br",null),"                    split",m.default.createElement("br",null),'                    cartClassName="btn-xs"',m.default.createElement("br",null),"                    popup=","{","(",m.default.createElement("br",null),"                        <DropDownItems>",m.default.createElement("br",null),"                            <DropDownItem onClick=","{","this.handleClick","}",">aaa</DropDownItem>",m.default.createElement("br",null),"                            <DropDownItem>aaa</DropDownItem>",m.default.createElement("br",null),"                        </DropDownItems>",m.default.createElement("br",null),"                    )","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),'                    <button className="btn btn-default btn-xs">drop down</button>',m.default.createElement("br",null),"                </DropDown>",m.default.createElement("br",null),"            </div>",m.default.createElement("br",null),"        );",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"}",m.default.createElement("br",null))),m.default.createElement("pre",null,m.default.createElement("code",{className:"language-jsx"},"<DropDownWrap1/>",m.default.createElement("br",null)))),m.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,10)},m.default.createElement("i",null)))),m.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode14?"doc-demo-code-active":"")},m.default.createElement("div",{className:"doc-demo-instance"},m.default.createElement("h4",null,"Example"),m.default.createElement(f,null)),m.default.createElement("div",{className:"doc-demo-meta"},m.default.createElement("div",{className:"doc-demo-description"},m.default.createElement("p",null,"对齐")),m.default.createElement("div",{className:"doc-demo-code"},m.default.createElement("pre",null,m.default.createElement("code",{className:"language-js"},m.default.createElement("span",{className:"hljs-class"},m.default.createElement("span",{className:"hljs-keyword"},"class")," ",m.default.createElement("span",{className:"hljs-title"},"DropDownWrap2")," ",m.default.createElement("span",{className:"hljs-keyword"},"extends")," ",m.default.createElement("span",{className:"hljs-title"},"React"),".",m.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",m.default.createElement("br",null),"    handleClick() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-built_in"},"console"),".log(",m.default.createElement("span",{className:"hljs-string"},"'click'"),");",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    render() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"return")," (",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"xml"},m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"div"),">"),m.default.createElement("br",null),"                右边对齐",m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"DropDown"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"right"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"popup"),"=",m.default.createElement("span",{className:"hljs-string"},"{","("),m.default.createElement("br",null),"                        <",m.default.createElement("span",{className:"hljs-attr"},"DropDownItems"),">"),m.default.createElement("br",null),"                            ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"DropDownItem")," ",m.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",m.default.createElement("span",{className:"hljs-string"},"{","this.handleClick","}"),">"),"aaa",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"DropDownItem"),">"),m.default.createElement("br",null),"                            ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"DropDownItem"),">"),"aaa",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"DropDownItem"),">"),m.default.createElement("br",null),"                        ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"DropDownItems"),">"),m.default.createElement("br",null),"                    )","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"button")," ",m.default.createElement("span",{className:"hljs-attr"},"className"),"=",m.default.createElement("span",{className:"hljs-string"},'"btn btn-primary"'),">"),"drop down ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"span")," ",m.default.createElement("span",{className:"hljs-attr"},"className"),"=",m.default.createElement("span",{className:"hljs-string"},'"caret"'),"/>"),m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"button"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"DropDown"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"DropDown"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"split"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"right"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"popup"),"=",m.default.createElement("span",{className:"hljs-string"},"{","("),m.default.createElement("br",null),"                        <",m.default.createElement("span",{className:"hljs-attr"},"DropDownItems"),">"),m.default.createElement("br",null),"                            ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"DropDownItem")," ",m.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",m.default.createElement("span",{className:"hljs-string"},"{","this.handleClick","}"),">"),"aaa",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"DropDownItem"),">"),m.default.createElement("br",null),"                            ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"DropDownItem"),">"),"aaa",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"DropDownItem"),">"),m.default.createElement("br",null),"                        ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"DropDownItems"),">"),m.default.createElement("br",null),"                    )","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"button")," ",m.default.createElement("span",{className:"hljs-attr"},"className"),"=",m.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"drop down",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"button"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"DropDown"),">"),m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"div"),">"),m.default.createElement("br",null),"        );",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"}",m.default.createElement("br",null)))),m.default.createElement("pre",null,m.default.createElement("code",{className:"language-jsx"},"<DropDownWrap2/>",m.default.createElement("br",null)))),m.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,14)},m.default.createElement("i",null)))),m.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode18?"doc-demo-code-active":"")},m.default.createElement("div",{className:"doc-demo-instance"},m.default.createElement("h4",null,"Example"),m.default.createElement(p,null)),m.default.createElement("div",{className:"doc-demo-meta"},m.default.createElement("div",{className:"doc-demo-description"},m.default.createElement("p",null,"其他")),m.default.createElement("div",{className:"doc-demo-code"},m.default.createElement("pre",null,m.default.createElement("code",{className:"language-js"},m.default.createElement("span",{className:"hljs-class"},m.default.createElement("span",{className:"hljs-keyword"},"class")," ",m.default.createElement("span",{className:"hljs-title"},"DropDownWrap3")," ",m.default.createElement("span",{className:"hljs-keyword"},"extends")," ",m.default.createElement("span",{className:"hljs-title"},"React"),".",m.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",m.default.createElement("br",null),"    handleClick() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-built_in"},"console"),".log(",m.default.createElement("span",{className:"hljs-string"},"'click'"),");",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    render() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"return")," (",m.default.createElement("br",null),"            <div>",m.default.createElement("br",null),"                选项分割",m.default.createElement("br",null),"                <DropDown",m.default.createElement("br",null),"                    popup=","{","(",m.default.createElement("br",null),"                        <DropDownItems>",m.default.createElement("br",null),"                            <DropDownItem onClick=","{","this.handleClick","}",">aaa</DropDownItem>",m.default.createElement("br",null),"                            <DropDownItem>aaa</DropDownItem>",m.default.createElement("br",null),'                            <DropDownItem className="divider"/>',m.default.createElement("br",null),"                            <DropDownItem>aaa</DropDownItem>",m.default.createElement("br",null),"                        </DropDownItems>",m.default.createElement("br",null),"                    )","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),'                    <button className="btn btn-default">drop down <span className="caret"/></button>',m.default.createElement("br",null),"                </DropDown>",m.default.createElement("br",null),"                第二个选项disabled",m.default.createElement("br",null),"                <DropDown",m.default.createElement("br",null),"                    popup=","{","(",m.default.createElement("br",null),"                        <DropDownItems>",m.default.createElement("br",null),"                            <DropDownItem onClick=","{","this.handleClick","}",">aaa</DropDownItem>",m.default.createElement("br",null),'                            <DropDownItem className="disabled">aaa</DropDownItem>',m.default.createElement("br",null),"                            <DropDownItem>aaa</DropDownItem>",m.default.createElement("br",null),"                            <DropDownItem/>",m.default.createElement("br",null),"                            <DropDownItem>aaa</DropDownItem>",m.default.createElement("br",null),"                        </DropDownItems>",m.default.createElement("br",null),"                    )","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),'                    <button className="btn btn-default">drop down <span className="caret"/></button>',m.default.createElement("br",null),"                </DropDown>",m.default.createElement("br",null),"                选项header",m.default.createElement("br",null),"                <DropDown",m.default.createElement("br",null),"                    popup=","{","(",m.default.createElement("br",null),"                        <DropDownItems>",m.default.createElement("br",null),'                            <DropDownItem className="dropdown-header">我是header</DropDownItem>',m.default.createElement("br",null),"                            <DropDownItem onClick=","{","this.handleClick","}",">aaa</DropDownItem>",m.default.createElement("br",null),'                            <DropDownItem className="disabled">aaa</DropDownItem>',m.default.createElement("br",null),"                            <DropDownItem>aaa</DropDownItem>",m.default.createElement("br",null),'                            <DropDownItem className="dropdown-header">我是header</DropDownItem>',m.default.createElement("br",null),"                            <DropDownItem>aaa</DropDownItem>",m.default.createElement("br",null),"                        </DropDownItems>",m.default.createElement("br",null),"                    )","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),'                    <button className="btn btn-default">drop down <span className="caret"/></button>',m.default.createElement("br",null),"                </DropDown>",m.default.createElement("br",null),"            </div>",m.default.createElement("br",null),"        );",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"}",m.default.createElement("br",null))),m.default.createElement("pre",null,m.default.createElement("code",{className:"language-jsx"},"<DropDownWrap3/>",m.default.createElement("br",null)))),m.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,18)},m.default.createElement("i",null)))),m.default.createElement("h3",{id:"props"},m.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),m.default.createElement("ul",null,m.default.createElement("li",null,m.default.createElement("code",null,"popup (element|isRequired)")," 对应的浮层"),m.default.createElement("li",null,m.default.createElement("code",null,"split (bool)")," 是否分裂式按钮"),m.default.createElement("li",null,m.default.createElement("code",null,"cartClassName (string)")," split true时有效，设置cart的样式"),m.default.createElement("li",null,m.default.createElement("code",null,"...rest"))),m.default.createElement("h3",{id:"dropdownitems"},m.default.createElement("a",{className:"header-anchor",href:"#dropdownitems","aria-hidden":"true"},"¶")," DropDownItems"),m.default.createElement("ul",null,m.default.createElement("li",null,m.default.createElement("code",null,"...rest"))),m.default.createElement("p",null,"用来包裹 DropDownItem"),m.default.createElement("h3",{id:"dropdownitem"},m.default.createElement("a",{className:"header-anchor",href:"#dropdownitem","aria-hidden":"true"},"¶")," DropDownItem"),m.default.createElement("ul",null,m.default.createElement("li",null,m.default.createElement("code",null,"...rest"))))}}]),t}(m.default.Component);t.default=E}});
//# sourceMappingURL=36.0f5a67de.bundle.js.map