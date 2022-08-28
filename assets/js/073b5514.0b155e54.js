"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[23538],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67781:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],i={},s="Installation Notes",c={unversionedId:"charts/stable/plex-auto-languages/installation_notes",id:"charts/stable/plex-auto-languages/installation_notes",title:"Installation Notes",description:"- Set PLEX_URL with httpPORT or cluster//plex.ix-plex.svc.cluster.local:32400. this cluster URL assumes you named it plex.",source:"@site/docs/charts/stable/plex-auto-languages/installation_notes.md",sourceDirName:"charts/stable/plex-auto-languages",slug:"/charts/stable/plex-auto-languages/installation_notes",permalink:"/docs/charts/stable/plex-auto-languages/installation_notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/plex-auto-languages/installation_notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/plex-auto-languages/CHANGELOG"},next:{title:"podgrab",permalink:"/docs/charts/stable/podgrab/"}},u={},p=[],f={toc:p};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-notes"},"Installation Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"PLEX_URL")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"http://IP:PORT")," or cluster: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://plex.ix-plex.svc.cluster.local:32400"),". this cluster URL assumes you named it ",(0,o.kt)("inlineCode",{parentName:"p"},"plex"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To set ",(0,o.kt)("inlineCode",{parentName:"p"},"PLEX_TOKEN")," you need to Browse to a library item and view the XML for it in plex as the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," user in the browser, the url will end with ",(0,o.kt)("inlineCode",{parentName:"p"},"...Plex-Token=")," so ",(0,o.kt)("strong",{parentName:"p"},"ONLY")," copy after the ",(0,o.kt)("inlineCode",{parentName:"p"},"=")," for the token."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"xml_info_token.png",src:n(46815).Z,width:"500",height:"144"})))}m.isMDXComponent=!0},46815:function(e,t,n){t.Z=n.p+"assets/images/xml_info_token-0d4b92cc743e595015358fac74d506e2.png"}}]);