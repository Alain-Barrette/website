"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7617],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||l;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},94317:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return h}});var r=a(83117),n=a(80102),l=(a(67294),a(3905)),o=["components"],i={},s="apache-webdav",u={unversionedId:"charts/incubator/apache-webdav/index",id:"charts/incubator/apache-webdav/index",title:"apache-webdav",description:"Very simple WebDAV server based on Apache. You need a WebDAV client to transfer files. It does not include a WebUI to upload files through your browser.",source:"@site/docs/charts/incubator/apache-webdav/index.md",sourceDirName:"charts/incubator/apache-webdav",slug:"/charts/incubator/apache-webdav/",permalink:"/docs/charts/incubator/apache-webdav/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/incubator/apache-webdav/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/incubator/anope/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/incubator/apache-webdav/CHANGELOG"}},c={},h=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Helm",id:"helm",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"TrueNAS SCALE",id:"truenas-scale-1",level:3},{value:"Helm",id:"helm-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Helm",id:"helm-2",level:3},{value:"Available Settings",id:"available-settings",level:4},{value:"Configure using the command line",id:"configure-using-the-command-line",level:4},{value:"Configure using a yaml file",id:"configure-using-a-yaml-file",level:4},{value:"Connecting to other charts",id:"connecting-to-other-charts",level:4},{value:"Support",id:"support",level:2},{value:"Sponsor TrueCharts",id:"sponsor-truecharts",level:2}],p={toc:h};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"apache-webdav"},"apache-webdav"),(0,l.kt)("p",null,"Very simple WebDAV server based on Apache. You need a WebDAV client to transfer files. It does not include a WebUI to upload files through your browser."),(0,l.kt)("p",null,"TrueCharts can be installed as both ",(0,l.kt)("em",{parentName:"p"},"normal")," Helm Charts or as Apps on TrueNAS SCALE."),(0,l.kt)("p",null,"This readme is just an automatically generated general guide on installing our Helm Charts and Apps.\nFor more information, please click here: ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/charts/incubator/apache-webdav"},"apache-webdav")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/charts/issues/new/choose"},"here"))),(0,l.kt)("h2",{id:"source-code"},"Source Code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/truecharts/charts/tree/master/charts/incubator/apache-webdav"},"https://github.com/truecharts/charts/tree/master/charts/incubator/apache-webdav")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://httpd.apache.org/docs/2.4/mod/mod_dav.html"},"https://httpd.apache.org/docs/2.4/mod/mod_dav.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mgutt/docker-apachewebdav"},"https://github.com/mgutt/docker-apachewebdav"))),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Kubernetes: ",(0,l.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Repository"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"10.8.1")))),(0,l.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,l.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,l.kt)("p",null,"To install this Chart on TrueNAS SCALE check our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Installing-an-App"},"Quick-Start Guide"),"."),(0,l.kt)("h3",{id:"helm"},"Helm"),(0,l.kt)("p",null,"To install the chart with the release name ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-webdav")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add TrueCharts https://charts.truecharts.org\nhelm repo update\nhelm install apache-webdav TrueCharts/apache-webdav\n")),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("h3",{id:"truenas-scale-1"},"TrueNAS SCALE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Upgrading, Rolling Back and Uninstalling the Chart")),(0,l.kt)("p",null,"To upgrade, rollback or delete this Chart from TrueNAS SCALE check our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Upgrade-rollback-delete-an-App"},"Quick-Start Guide"),"."),(0,l.kt)("h3",{id:"helm-1"},"Helm"),(0,l.kt)("p",null,"To uninstall the ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-webdav")," deployment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall apache-webdav\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h3",{id:"helm-2"},"Helm"),(0,l.kt)("h4",{id:"available-settings"},"Available Settings"),(0,l.kt)("p",null,"Read through the values.yaml file. It has several commented out suggested values.\nOther values may be used from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml"},"values.yaml")," from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/common"},"common library"),"."),(0,l.kt)("h4",{id:"configure-using-the-command-line"},"Configure using the command line"),(0,l.kt)("p",null,"Specify each parameter using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'helm install apache-webdav \\\n  --set env.TZ="America/New York" \\\n    TrueCharts/apache-webdav\n')),(0,l.kt)("h4",{id:"configure-using-a-yaml-file"},"Configure using a yaml file"),(0,l.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm install apache-webdav TrueCharts/apache-webdav -f values.yaml\n")),(0,l.kt)("h4",{id:"connecting-to-other-charts"},"Connecting to other charts"),(0,l.kt)("p",null,"If you need to connect this Chart to other Charts on TrueNAS SCALE, please refer to our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/linking-apps"},"Linking Charts Internally")," quick-start guide."),(0,l.kt)("h2",{id:"support"},"Support"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Please check our ",(0,l.kt)("a",{parentName:"li",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Important-MUST-READ"},"quick-start guides for TrueNAS SCALE"),"."),(0,l.kt)("li",{parentName:"ul"},"See the ",(0,l.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Website")),(0,l.kt)("li",{parentName:"ul"},"Check our ",(0,l.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,l.kt)("li",{parentName:"ul"},"Open a ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sponsor-truecharts"},"Sponsor TrueCharts"),(0,l.kt)("p",null,"TrueCharts can only exist due to the incredible effort of our staff.\nPlease consider making a ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/sponsor"},"donation")," or contributing back to the project any way you can!"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}d.isMDXComponent=!0}}]);