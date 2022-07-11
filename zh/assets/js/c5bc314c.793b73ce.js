"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[51452],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],l={},u="07 - Adding Lets-Encrypt Certificates",s={unversionedId:"manual/SCALE Apps/Quick-Start Guides/adding-letsencrypt",id:"manual/SCALE Apps/Quick-Start Guides/adding-letsencrypt",title:"07 - Adding Lets-Encrypt Certificates",description:"With TrueNAS SCALE, it's possible to automatically generate certificates for your domain(s) using letsencrypt. However, this process is not very self-explanatory.",source:"@site/docs/manual/SCALE Apps/Quick-Start Guides/07-adding-letsencrypt.md",sourceDirName:"manual/SCALE Apps/Quick-Start Guides",slug:"/manual/SCALE Apps/Quick-Start Guides/adding-letsencrypt",permalink:"/zh/docs/manual/SCALE Apps/Quick-Start Guides/adding-letsencrypt",draft:!1,editUrl:"https://github.com/truecharts/pub/docs/manual/SCALE Apps/Quick-Start Guides/07-adding-letsencrypt.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"manualSidebar",previous:{title:"06 - Linking Apps Internally",permalink:"/zh/docs/manual/SCALE Apps/Quick-Start Guides/linking-apps"},next:{title:"08 - Installing Traefik",permalink:"/zh/docs/manual/SCALE Apps/Quick-Start Guides/installing-Traefik"}},c={},p=[{value:"Requirements",id:"requirements",level:5},{value:"How-To",id:"how-to",level:5},{value:"Video Guide",id:"video-guide",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"07---adding-lets-encrypt-certificates"},"07 - Adding Lets-Encrypt Certificates"),(0,a.kt)("p",null,'With TrueNAS SCALE, it\'s possible to automatically generate certificates for your domain(s) using letsencrypt. However, this process is not very self-explanatory.\nAfter you managed to complete this how-to, you should be able to select "iX Certificate" as certificate option and your personal certificate in the other drop-down box!'),(0,a.kt)("h5",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To use iX Certificates with letsencrypt there are a few requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Preferably use a DNS server that doesn't have any caching (no local DNS server) for your TrueNAS system."),(0,a.kt)("li",{parentName:"ul"},"Have an email address entered for your TrueNAS SCALE ",(0,a.kt)("inlineCode",{parentName:"li"},"root")," user. (this email will also be used for letsencrypt reminder!)"),(0,a.kt)("li",{parentName:"ul"},"Own a domain name"),(0,a.kt)("li",{parentName:"ul"},"Use either Cloudflare or AWS Route53 for your domain. (In case you wonder: Using Cloudflare as DNS provider is free)"),(0,a.kt)("li",{parentName:"ul"},"Have an active internet connection so TrueNAS SCALE can contact Cloudflare or AWS to verify your domain ownership")),(0,a.kt)("h5",{id:"how-to"},"How-To"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Credentials")," in the Left side menu and go the ",(0,a.kt)("inlineCode",{parentName:"li"},"Certificates")," page.")),(0,a.kt)("a",{href:"/img/LE/LE2.png"},(0,a.kt)("img",{src:"/img/LE/LE2.png",width:"100%"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Notice ",(0,a.kt)("inlineCode",{parentName:"li"},"ACME DNS-Authenticators"),", select ",(0,a.kt)("inlineCode",{parentName:"li"},"Add")," besides ",(0,a.kt)("inlineCode",{parentName:"li"},"ACME DNS-Authenticators")," to open the menu for adding your DNS provider for domain verification.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter the required information and click ",(0,a.kt)("inlineCode",{parentName:"li"},"save"),".\nFor Cloudflare you need either a global API-Key or a limited-scope API token. Please refer to cloudflare and/or AWS on how to get the required credentials.")),(0,a.kt)("a",{href:"/img/LE/LE1.png"},(0,a.kt)("img",{src:"/img/LE/LE1.png",width:"100%"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Notice ",(0,a.kt)("inlineCode",{parentName:"li"},"Certificate Signing Requests"),", select ",(0,a.kt)("inlineCode",{parentName:"li"},"Add")," besides ",(0,a.kt)("inlineCode",{parentName:"li"},"Certificate Signing Requests")," to open the menu for adding the domain information you want a certificate for.")),(0,a.kt)("a",{href:"/img/LE/LE3.png"},(0,a.kt)("img",{src:"/img/LE/LE3.png",width:"100%"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Enter all information required in the wizard and save it.\nIf you are not sure, the defaults are almost always "alright", because most of what you enter here is completely ignored by Letsencrypt.\n',(0,a.kt)("inlineCode",{parentName:"li"},"Common Name")," in this case means ",(0,a.kt)("inlineCode",{parentName:"li"},"Primary domain name"),", whereas ",(0,a.kt)("inlineCode",{parentName:"li"},"Subject Alternate Names")," means ",(0,a.kt)("inlineCode",{parentName:"li"},"Extra domain names"),".")),(0,a.kt)("a",{href:"/img/LE/LE5.PNG"},(0,a.kt)("img",{src:"/img/LE/LE5.PNG",width:"100%"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Notice your new ",(0,a.kt)("inlineCode",{parentName:"li"},"Certificate Signing Request")," showing up in the box below ",(0,a.kt)("inlineCode",{parentName:"li"},"Certificate Signing Requests"),". Also notice the small ",(0,a.kt)("inlineCode",{parentName:"li"},"wrench")," icon to the right of your ",(0,a.kt)("inlineCode",{parentName:"li"},"Certificate Signing Request"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click the small ",(0,a.kt)("inlineCode",{parentName:"p"},"wrench")," icon, this will open the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create ACME Certificate")," menu. In this menu we can actually request either a real (Production) certificate or a testing (staging) certificate from Letsencrypt.\nFor clarity, it's advisable to use the same Authenticator for all domain names. However: It's okay to generate both a testing and a staging certificate for the same domain.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"After saving and awaiting the generation process, you should end up with another ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificate Signing Request")," and a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificate")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificates"),", this new ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificate Signing Request")," is used to renew your ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificate")," in the future and should not be deleted!"))),(0,a.kt)("h4",{id:"video-guide"},"Video Guide"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.youtube.com/embed/TJ5fDiDRcbU",alt:"type:video"})))}m.isMDXComponent=!0}}]);