"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[47839],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(m,u(u({ref:t},p),{},{components:r})):n.createElement(m,u({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69207:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),u=["components"],i={},c="PCI(-E) Devices Passthrough",s={unversionedId:"manual/SCALE Apps/pci-passthrough",id:"manual/SCALE Apps/pci-passthrough",title:"PCI(-E) Devices Passthrough",description:"To Passthrough your PCI(-E) cards you need to:",source:"@site/docs/manual/SCALE Apps/pci-passthrough.md",sourceDirName:"manual/SCALE Apps",slug:"/manual/SCALE Apps/pci-passthrough",permalink:"/docs/manual/SCALE Apps/pci-passthrough",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/SCALE Apps/pci-passthrough.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"App Network Options",permalink:"/docs/manual/SCALE Apps/networking"},next:{title:"TrueNAS Web GUI via Traefik on port 443",permalink:"/docs/manual/SCALE Apps/truenas-web-gui-via-traefik"}},p={},l=[],f={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pci-e-devices-passthrough"},"PCI(-E) Devices Passthrough"),(0,a.kt)("p",null,"To Passthrough your PCI(-E) cards you need to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to Installed Applications"),(0,a.kt)("li",{parentName:"ul"},"Click the menu button on the right side of the App card"),(0,a.kt)("li",{parentName:"ul"},"Select Edit"),(0,a.kt)("li",{parentName:"ul"},'Scroll down to "Resources and Devices" Section'),(0,a.kt)("li",{parentName:"ul"},"Under Configure Mount USB devices Click the Add button on the right (This will work for PCI devices too*)"),(0,a.kt)("li",{parentName:"ul"},'In "Host Device Path" & "Container Device Path" enter the /dev/path for your card (ex: for dvb devices it will be: /dev/dvb)'),(0,a.kt)("li",{parentName:"ul"},"Submit your changes")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"*This method is not guaranteed to work, and we officially offer no support for PCI(-E) devices Passthrough at the moment.")))}d.isMDXComponent=!0}}]);