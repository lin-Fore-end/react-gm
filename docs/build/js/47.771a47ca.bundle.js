webpackJsonp([47],{351:function(e,t,l){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),r=l(1),u=function(e){return e&&e.__esModule?e:{default:e}}(r),m=l(8),d=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.handleClick=l.handleClick.bind(l),l.handleClick1=l.handleClick1.bind(l),l}return s(t,e),c(t,[{key:"handleClick",value:function(){return console.log("click"),!1}},{key:"handleClick1",value:function(){return console.log("click"),new Promise(function(e){return setTimeout(function(){return e("12")},2e4)})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("h2",null,"Button 没有 loading, 回调函数返回 false"),u.default.createElement(m.Button,{onClick:this.handleClick,className:"btn btn-default"},"加载更多"),u.default.createElement("h2",null,"Button loading ，回调函数返回一个 Promise"),u.default.createElement(m.Button,{onClick:this.handleClick1,className:"btn btn-default"},"加载更多"))}}]),t}(u.default.Component),o=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return s(t,e),c(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return u.default.createElement("div",{className:"doc"},u.default.createElement("h2",{id:"button"},u.default.createElement("a",{className:"header-anchor",href:"#button","aria-hidden":"true"},"¶")," Button"),u.default.createElement("p",null,"Button Loading"),u.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},u.default.createElement("div",{className:"doc-demo-instance"},u.default.createElement("h4",null,"Example"),u.default.createElement(d,null)),u.default.createElement("div",{className:"doc-demo-meta"},u.default.createElement("div",{className:"doc-demo-description"},u.default.createElement("p",null,"Button")),u.default.createElement("div",{className:"doc-demo-code"},u.default.createElement("pre",null,u.default.createElement("code",{className:"language-js"},u.default.createElement("span",{className:"hljs-class"},u.default.createElement("span",{className:"hljs-keyword"},"class")," ",u.default.createElement("span",{className:"hljs-title"},"ButtonWrap")," ",u.default.createElement("span",{className:"hljs-keyword"},"extends")," ",u.default.createElement("span",{className:"hljs-title"},"React"),".",u.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",u.default.createElement("br",null),"    ",u.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"this"),".handleClick = ::",u.default.createElement("span",{className:"hljs-keyword"},"this"),".handleClick;",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"this"),".handleClick1 = ::",u.default.createElement("span",{className:"hljs-keyword"},"this"),".handleClick1;",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"    ",u.default.createElement("br",null),"    handleClick() ","{",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-built_in"},"console"),".log(",u.default.createElement("span",{className:"hljs-string"},"'click'"),");",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"return")," ",u.default.createElement("span",{className:"hljs-literal"},"false"),";",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"    ",u.default.createElement("br",null),"    handleClick1() ","{",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-built_in"},"console"),".log(",u.default.createElement("span",{className:"hljs-string"},"'click'"),");",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"return")," ",u.default.createElement("span",{className:"hljs-keyword"},"new")," ",u.default.createElement("span",{className:"hljs-built_in"},"Promise"),"(",u.default.createElement("span",{className:"hljs-function"},u.default.createElement("span",{className:"hljs-params"},"resolve")," =>")," setTimeout(",u.default.createElement("span",{className:"hljs-function"},u.default.createElement("span",{className:"hljs-params"},"()")," =>")," resolve(",u.default.createElement("span",{className:"hljs-string"},"'12'"),"),",u.default.createElement("span",{className:"hljs-number"},"20000"),"));",u.default.createElement("br",null),"    ","}","     ",u.default.createElement("br",null),"    ",u.default.createElement("br",null),"    render() ","{",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"return")," (",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"xml"},u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"div"),">"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"h2"),">"),"Button 没有 loading, 回调函数返回 false",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"h2"),">"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"Button")," ",u.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",u.default.createElement("span",{className:"hljs-string"},"{","this.handleClick","}")," ",u.default.createElement("span",{className:"hljs-attr"},"className"),"=",u.default.createElement("span",{className:"hljs-string"},"'btn btn-default'"),">"),"加载更多",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"Button"),">"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"h2"),">"),"Button loading ，回调函数返回一个 Promise",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"h2"),">"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"Button")," ",u.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",u.default.createElement("span",{className:"hljs-string"},"{","this.handleClick1","}")," ",u.default.createElement("span",{className:"hljs-attr"},"className"),"=",u.default.createElement("span",{className:"hljs-string"},"'btn btn-default'"),">"),"加载更多",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"Button"),">"),u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"div"),">")),u.default.createElement("br",null),"        );",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"}",u.default.createElement("br",null))),u.default.createElement("pre",null,u.default.createElement("code",{className:"language-jsx"},"<ButtonWrap/>",u.default.createElement("br",null)))),u.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},u.default.createElement("i",null)))),u.default.createElement("h3",{id:"props"},u.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("code",null,"onClick(func)")," 点击回调函数"),u.default.createElement("li",null,u.default.createElement("code",null,"...rest"))))}}]),t}(u.default.Component);t.default=o}});
//# sourceMappingURL=47.771a47ca.bundle.js.map