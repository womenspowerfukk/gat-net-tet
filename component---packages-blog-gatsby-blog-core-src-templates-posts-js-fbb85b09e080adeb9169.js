(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_science=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_science||[]).push([[142],{7135:function(t,e,r){t.exports=r(6248)},8676:function(t){"use strict";t.exports=function(t,e){e=e||JSON.stringify;for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e(i);n[a]||(r.push(i),n[a]=!0)}return r}},3033:function(t,e){"use strict";var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;e.validate=function(t){if(!t)return!1;if(t.length>254)return!1;if(!r.test(t))return!1;var e=t.split("@");return!(e[0].length>64)&&!e[1].split(".").some((function(t){return t.length>63}))}},617:function(t,e,r){var n=r(4916)("jsonp");t.exports=function(t,e,r){"function"==typeof e&&(r=e,e={});e||(e={});var a,s,l=e.prefix||"__jp",c=e.name||l+o++,u=e.param||"callback",f=null!=e.timeout?e.timeout:6e4,d=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;f&&(s=setTimeout((function(){h(),r&&r(new Error("Timeout"))}),f));function h(){a.parentNode&&a.parentNode.removeChild(a),window[c]=i,s&&clearTimeout(s)}return window[c]=function(t){n("jsonp got",t),h(),r&&r(null,t)},t=(t+=(~t.indexOf("?")?"&":"?")+u+"="+d(c)).replace("?&","?"),n('jsonp req "%s"',t),(a=document.createElement("script")).src=t,p.parentNode.insertBefore(a,p),function(){window[c]&&h()}};var o=0;function i(){}},4916:function(t,e,r){function n(){var t;try{t=e.storage.debug}catch(r){}return!t&&"undefined"!=typeof process&&"env"in process&&(t={}.DEBUG),t}(e=t.exports=r(3157)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},e.formatArgs=function(t){var r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return;var n="color: "+this.color;t.splice(1,0,n,"color: inherit");var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))})),t.splice(i,0,n)},e.save=function(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(r){}},e.load=n,e.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(n())},3157:function(t,e,r){var n;function o(t){function r(){if(r.enabled){var t=r,o=+new Date,i=o-(n||o);t.diff=i,t.prev=n,t.curr=o,n=o;for(var a=new Array(arguments.length),s=0;s<a.length;s++)a[s]=arguments[s];a[0]=e.coerce(a[0]),"string"!=typeof a[0]&&a.unshift("%O");var l=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;l++;var o=e.formatters[n];if("function"==typeof o){var i=a[l];r=o.call(t,i),a.splice(l,1),l--}return r})),e.formatArgs.call(t,a);var c=r.log||e.log||console.log.bind(console);c.apply(t,a)}}return r.namespace=t,r.enabled=e.enabled(t),r.useColors=e.useColors(),r.color=function(t){var r,n=0;for(r in t)n=(n<<5)-n+t.charCodeAt(r),n|=0;return e.colors[Math.abs(n)%e.colors.length]}(t),"function"==typeof e.init&&e.init(r),r}(e=t.exports=o.debug=o.default=o).coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){e.enable("")},e.enable=function(t){e.save(t),e.names=[],e.skips=[];for(var r=("string"==typeof t?t:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&("-"===(t=r[o].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))},e.enabled=function(t){var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1},e.humanize=r(4207),e.names=[],e.skips=[],e.formatters={}},4207:function(t){var e=1e3,r=60*e,n=60*r,o=24*n,i=365.25*o;function a(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}t.exports=function(t,s){s=s||{};var l,c=typeof t;if("string"===c&&t.length>0)return function(t){if((t=String(t)).length>100)return;var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(!a)return;var s=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*i;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*n;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(t);if("number"===c&&!1===isNaN(t))return s.long?a(l=t,o,"day")||a(l,n,"hour")||a(l,r,"minute")||a(l,e,"second")||l+" ms":function(t){if(t>=o)return Math.round(t/o)+"d";if(t>=n)return Math.round(t/n)+"h";if(t>=r)return Math.round(t/r)+"m";if(t>=e)return Math.round(t/e)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},7954:function(t,e,r){"use strict";e.Z=void 0;var n,o=(n=r(617))&&n.__esModule?n:{default:n},i=r(3033);var a=function(t){var e=t.url,r=t.timeout;return new Promise((function(t,n){return(0,o.default)(e,{param:"c",timeout:r},(function(e,r){e&&n(e),r&&t(r)}))}))},s=function(t){var e="";for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n="group["===r.substring(0,6)?r:r.toUpperCase();e=e.concat("&".concat(n,"=").concat(t[r]))}return e},l=function(t,e,r){var n=(0,i.validate)(t),o=encodeURIComponent(t);if(!n)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var l=__GATSBY_PLUGIN_MAILCHIMP_ADDRESS__,c=__GATSBY_PLUGIN_MAILCHIMP_TIMEOUT__;arguments.length<3&&"string"==typeof e?l=e:"string"==typeof r&&(l=r),l=l.replace(/\/post/g,"/post-json");var u="&EMAIL=".concat(o).concat(s(e)),f="".concat(l).concat(u);return a({url:f,timeout:c})};e.Z=l},9828:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return M}});var n=r(808),o=r(7378),i=r(8945),a=r(9321),s=r(5446),l=r(9835),c=r(8692),u=r(5773),f=r(7566),d=r(8391),p=r(6030),h=r(6495),m={button:{vertical:{variant:"cards.primary",display:"flex",alignItems:"center",textAlign:"initial",overflow:"hidden",mb:3,p:0,pr:2,svg:{color:"omegaDark",verticalAlign:"middle",size:"icon.xs"},":hover":{svg:{color:"white"},"div:first-of-type":{bg:"alpha"}}},horizontal:{variant:"cards.interactive",p:0,svg:{color:"alpha",size:"icon.sm"},":hover":{svg:{color:"omegaDark"}}}},icon:{vertical:{display:["flex","none","flex"],transition:"all 250ms ease",alignItems:"center",justifyContent:"center",alignSelf:"stretch",bg:"omegaLight",width:70},horizontal:{display:["block","none","block"],boxSizing:"content-box",transition:"all 250ms ease",borderRadius:"bottom",width:"1/3",height:"icon.sm",mx:"auto",pt:3}},text:{flex:"auto",color:"omegaDark",whiteSpace:"nowrap",p:3,m:0}},g=function(t){var e=t.variant,r=t.name,n=t.Icon,o=t.iconPath,a=t.iconColor,s=t.to;return(0,h.tZ)(i.zx,{variant:"none",as:s&&d.Link,to:s,sx:m.button[e]},(n||o)&&(0,h.tZ)(i.xu,{sx:m.icon[e]},o&&(0,h.tZ)(p.Z,{src:o}),n&&(0,h.tZ)(n,{color:a})),(0,h.tZ)(i.X6,{variant:"h4",as:"span",sx:m.text},r))},v=g;g.defaultProps={variant:"horizontal",number:void 0};var y=r(7375),b=["variant","categories"],w={horizontal:{display:"flex",flexWrap:"nowrap",overflowX:"auto",width:"auto",scrollBehavior:"smooth",m:-2,a:{flex:1,minWidth:["1/3","auto"],m:2}}},Z=function(t){var e=t.variant,r=t.categories,o=(0,n.Z)(t,b);return(0,h.tZ)(y.Z,(0,u.Z)({aside:"vertical"===e,title:"Topics"},o),(0,h.tZ)(i.xu,{sx:w[e]},r&&r.map((function(t){var r=t.id,n=t.name,o=t.slug,i=t.totalCount,a=t.icon,s={key:r,name:n,number:i,to:o,iconPath:a,Icon:!a&&f.ALl,variant:e};return 0!==i&&(0,h.tZ)(v,s)}))))},x=Z;Z.defaultProps={variant:"vertical"};var k=r(1025),S={msg:{mb:0},button:{display:"block",mx:"auto"}},P=function(t){var e=t.handleSubmit,r=t.canSubmit,n=t.submitting,a=t.message,s=t.success;return(0,h.tZ)("form",{onSubmit:e},a&&(0,h.tZ)(i.v0,{variant:s?"success":"error",sx:S.msg,dangerouslySetInnerHTML:{__html:a}}),r&&(0,h.tZ)(o.Fragment,null,(0,h.tZ)(i.xu,{variant:"forms.row"},(0,h.tZ)(i.II,{name:"email",type:"email",placeholder:"Email Address","aria-label":"Email Address",required:!0})),(0,h.tZ)(i.zx,{type:"submit",variant:s||n?"disabled":"primary",disabled:s||n,sx:S.button},"Subscribe ",n&&(0,h.tZ)(i.$j,{size:"20"}))))};function L(t,e,r,n,o,i,a){try{var s=t[i](a),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(n,o)}var _=r(7135),E=r.n(_),A=r(7954),z=function(){var t=(0,o.useState)(),e=t[0],r=t[1],n=(0,o.useState)(!1),i=n[0],a=n[1],s=function(){var t,e=(t=E().mark((function t(e){var n,o,i;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a(!0),n=new FormData(e.target),o=n.get("email"),t.next=6,(0,A.Z)(o);case 6:i=t.sent,r(i),a(!1);case 9:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){L(i,n,o,a,s,"next",t)}function s(t){L(i,n,o,a,s,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}(),l=e&&"success"===e.result,c=e&&"success"!==e.result;return{handleSubmit:s,canSubmit:!e||c,submitting:i,message:e&&e.msg,success:l,error:c}},O={card:{position:"relative"},wrapper:{maxWidth:500,textAlign:"center",mx:"auto",py:3},icons:{display:["none",null,"block"],position:"absolute",top:"-3rem",left:"5rem",svg:{display:"block"}},plane:{fontSize:"9rem",color:"beta"},wind:{fontSize:"7rem",color:"omegaLight",transform:"rotate(120deg)",mt:"0.5rem",ml:"-3rem"},form:{maxWidth:300,mx:"auto",mt:4}},j=function(t){var e=t.simple,r=z(),n=r.handleSubmit,o=r.canSubmit,a=r.submitting,s=r.message,l=r.success;return(0,h.tZ)(i.Zb,{variant:"paper",sx:O.card},(0,h.tZ)(i.xu,{sx:O.wrapper},!e&&(0,h.tZ)(i.xu,{sx:O.icons},(0,h.tZ)(f.P58,{css:(0,k.i)(O.plane)}),(0,h.tZ)(f.J00,{css:(0,k.i)(O.wind)})),(0,h.tZ)(i.X6,{variant:"h2"},"Subscribe to our newsletter!"),(0,h.tZ)(i.xv,{variant:"p"},"We'll send you the best of our blog just once a month. We promise."),(0,h.tZ)(i.xu,{sx:O.form},(0,h.tZ)(P,{handleSubmit:n,canSubmit:o,submitting:a,message:s,success:l}))))};j.defaultProps={simple:!1};var T=j,N=r(2463),C=["data"],I=function(t){var e=t.data,r=e.posts,u=void 0===r?{}:r,f=e.featuredPosts,d=void 0===f?{}:f,p=e.recentPosts,m=void 0===p?{}:p,g=(0,n.Z)(t,C),v=g.pageContext,y=(v=void 0===v?{}:v).services,b=void 0===y?{}:y,w=(0,N.q6)(),Z=o.useRef();return(0,h.tZ)(a.Ar,g,(0,h.tZ)(c.Z,{title:"Home"}),(0,h.tZ)(a.VM,{pt:4,pb:5,sx:{background:function(t){return"linear-gradient(\n              0deg,\n              "+t.colors.omegaLighter+",\n              "+t.colors.background+"\n            )"}}},(0,h.tZ)(l.Z,{space:3}),(0,h.tZ)(i.xu,{sx:{position:"relative",zIndex:3}},(0,h.tZ)(i.xu,{sx:{display:["none","block"]}},(0,h.tZ)(x,{categories:w,variant:"horizontal",omitTitle:!0}),(0,h.tZ)(l.Z,null)),(0,h.tZ)(s.Z,{nodes:d.nodes,variant:["horizontal-hero"],limit:3,omitFooter:!0,slider:!0,autoPlay:!0,fade:!0,arrows:!1,controlPosition:"bottom",ref:Z,loading:"eager"}),(0,h.tZ)(i.xu,{sx:{display:["none",null,"block"]}},(0,h.tZ)(l.Z,null),(0,h.tZ)(s.Z,{nodes:d.nodes,variant:["horizontal-md","horizontal-aside"],limit:3,columns:[1,0,3],omitCategory:!0,asNavFor:Z,loading:"eager"})))),(0,h.tZ)(l.Z,null),(0,h.tZ)(a.Kq,null,(0,h.tZ)(a.or,null,(0,h.tZ)(s.Z,{nodes:d.nodes,variant:["horizontal-md","horizontal","horizontal","vertical"],limit:3,skip:3,columns:[1,2,3],omitMedia:!0,title:"Editor's Pick"}))),(0,h.tZ)(l.Z,null),(0,h.tZ)(a.Kq,{effectProps:{effect:!1},title:"Whats New?",direction:["column",null,null,"row"]},(0,h.tZ)(a.or,{sx:{display:["block",null,null,"flex"]}},(0,h.tZ)(s.Z,{nodes:m.nodes,variant:["vertical-cover"],limit:2})),(0,h.tZ)(l.Z,{space:2}),(0,h.tZ)(a.or,{sx:{mx:[0,null,null,3],display:["block",null,null,"flex"]}},(0,h.tZ)(s.Z,{nodes:m.nodes,variant:["horizontal-md","horizontal","horizontal","vertical"],limit:1,skip:2})),(0,h.tZ)(l.Z,{space:2}),(0,h.tZ)(a.or,null,(0,h.tZ)(s.Z,{nodes:m.nodes,variant:["horizontal-md","horizontal-md","horizontal","horizontal-aside"],limit:3,skip:3,columns:[1,2,1,1]}))),(0,h.tZ)(l.Z,null),(0,h.tZ)(a.VM,{wide:!0},(0,h.tZ)(s.Z,{nodes:d.nodes,variant:"horizontal-cover-wide",limit:4,skip:6,slider:!0,autoPlay:!0,fade:!0,dots:!1,controlPosition:"bottom"})),(0,h.tZ)(l.Z,null),u.group.length&&u.group.map((function(t,e){return(0,h.tZ)(o.Fragment,{key:t.categoryName+".list"},e%2==0?(0,h.tZ)(a.Kq,{title:t.categoryName,titleLink:t.nodes[0].category.slug},(0,h.tZ)(a.or,null,(0,h.tZ)(s.Z,{nodes:t.nodes,variant:["horizontal-md","vertical"],limit:6,columns:[1,2,3,3],omitCategory:!0}))):(0,h.tZ)(a.Kq,{title:t.categoryName,titleLink:t.nodes[0].category.slug},(0,h.tZ)(a.or,null,(0,h.tZ)(s.Z,{nodes:t.nodes,variant:["horizontal-md","horizontal"],limit:6,columns:[1,1,2],omitCategory:!0}))),e!==u.group.length-1&&(0,h.tZ)(l.Z,null))})),(0,h.tZ)(l.Z,{space:5}),(0,h.tZ)(a.Kq,null,(0,h.tZ)(a.or,null,b.mailchimp&&(0,h.tZ)(T,null))))},M=I},2463:function(t,e,r){"use strict";r.d(e,{gN:function(){return l},q6:function(){return a}});var n=r(8391),o=r(8676),i=r.n(o),a=function(){var t=(0,n.useStaticQuery)(s).allArticleCategory;return t.nodes?i()(t.nodes,(function(t){return t.slug})):null},s="4235339838",l=function(){var t=(0,n.useStaticQuery)(c).allArticleAuthor;return t.nodes?i()(t.nodes,(function(t){return t.slug})):null},c="4240507859"},5446:function(t,e,r){"use strict";r.d(e,{Z:function(){return _}});var n=r(5773),o=r(808),i=r(7378),a=r(8945),s=r(2923),l=r(5302),c=r(8676),u=r.n(c),f=r(7375),d=r(4649),p=r(5987),h=r(1025),m=r(7566),g={slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]},".slick-track":{left:"0 !important"}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center",left:"0 !important"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:"auto",top:["auto",5],bottom:[3,"auto"],left:[2,4],p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}},v=r(72),y=r(6495);function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){(0,d.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Z=(0,v.ZP)((function(){return r.e(636).then(r.bind(r,2324))})),x=i.forwardRef((function(t,e){var r=t.columns,o=t.slidesToScroll,i=t.smoothAutoScroll,s=t.autoPlay,l=t.autoplaySpeed,c=t.fade,u=t.dots,f=t.arrows,d=t.centerMode,v=t.centerPadding,b=t.controlPosition,x=t.beforeChange,k=t.children,S=(0,p.B7)(),P={slidesToScroll:1,autoplay:!0,cssEase:"linear"},L={centerMode:!c,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!u||!c)},_=S.theme.breakpoints.map((function(t,e){var n=r[e>=r.length?r.length-1:e],i=o[e>=o.length?o.length-1:e];return{breakpoint:parseInt(t),settings:w({slidesToShow:n,slidesToScroll:i},0===e?L:{})}})),E={ref:e,beforeChange:x,slidesToShow:r[r.length-1],slidesToScroll:o[o.length-1],speed:800,dots:u,arrows:f,centerMode:d,centerPadding:v,infinite:!0,cssEase:c?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:c,responsive:_,css:(0,h.i)(w(w(w(w({},c?g.fade:g.slide),"bottom"===b&&g.controlBottom),"center"===b&&g.controlCenter),"over"===b&&g.controlOver)),prevArrow:(0,y.tZ)(a.hU,{sx:g.arrowPrev},(0,y.tZ)(m.bUI,null)),nextArrow:(0,y.tZ)(a.hU,{sx:g.arrowNext},(0,y.tZ)(m.Dli,null))};i&&(E=w(w(w({},E),P),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!i&&s&&(E=w(w(w({},E),P),{},{speed:300,autoplaySpeed:l}));var A=k.slice(0,r[r.length-1]);return(0,y.tZ)(Z,(0,n.Z)({},E,{fallback:A}),k)})),k=x;x.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var S=r(8229),P=["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"],L=i.forwardRef((function(t,e){var r=t.nodes,i=t.variant,c=t.title,d=t.withTitleLink,p=t.limit,h=t.skip,m=t.distinct,g=t.slider,v=t.aside,b=t.asNavFor,w=t.loading,Z=(0,o.Z)(t,P),x=function(t,e){var r=e.limit,n=e.skip,o=e.distinct;if(!t)return null;if(!r&&!n&&!o)return t;var i=t;return o&&(i=u()(i,(function(t){return t.id}))),n&&(i=i.slice(n)),r&&(i=i.slice(0,r)),i}(r,{distinct:m,limit:p,skip:h});if(!x||!x.length)return null;var L=d?x[0].category&&x[0].category.slug:"",_=c&&""+(0,l.Z)(x.map((function(t){return t.id})).join()),E=(0,s.Z)(g?"lists.cards.slider":"lists.cards.fixed",i),A=function(t){b&&b.current&&(b.current.slickPause(),b.current.slickGoTo(t))},z=x.map((function(e,r){return(0,y.tZ)(S.Z,(0,n.Z)({key:e.id,variant:i,onMouseOver:function(){return A(r)},onFocus:function(){return A(r)},loading:t.fade?0===r?w:void 0:w},e,Z))})),O=function(){return(0,y.tZ)(a.xu,{sx:{variant:E}},g?(0,y.tZ)(k,(0,n.Z)({ref:e},Z),z):z)};return c?(0,y.tZ)(f.Z,{title:c,titleLink:L,key:_,aside:v},(0,y.tZ)(O,null)):(0,y.tZ)(O,null)})),_=L;L.defaultProps={variant:"vertical",columns:[1],aside:!1}},6248:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return z()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=P(a,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=u(t,e,r);if("normal"===l.type){if(n=r.done?h:d,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=h,r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=c;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",m={};function g(){}function v(){}function y(){}var b={};l(b,i,(function(){return this}));var w=Object.getPrototypeOf,Z=w&&w(w(A([])));Z&&Z!==r&&n.call(Z,i)&&(b=Z);var x=y.prototype=g.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,s){var l=u(t[o],t,i);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,s)}))}s(l.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function A(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:z}}function z(){return{value:e,done:!0}}return v.prototype=y,l(x,"constructor",y),l(y,"constructor",v),v.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(S.prototype),l(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),l(x,s,"Generator"),l(x,i,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-core-src-templates-posts-js-fbb85b09e080adeb9169.js.map