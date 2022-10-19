"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[37516],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=s(r),d=a,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||u;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,l=new Array(u);l[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<u;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},43726:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=r(83117),a=r(80102),u=(r(67294),r(3905)),l=["components"],o={},i="ubuntu-xrdp",s={unversionedId:"charts/incubator/ubuntu-xrdp/index",id:"charts/incubator/ubuntu-xrdp/index",title:"ubuntu-xrdp",description:"LXDE desktop ubuntu (use remote desktop client to connect)",source:"@site/docs/charts/incubator/ubuntu-xrdp/index.md",sourceDirName:"charts/incubator/ubuntu-xrdp",slug:"/charts/incubator/ubuntu-xrdp/",permalink:"/docs/charts/incubator/ubuntu-xrdp/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/incubator/ubuntu-xrdp/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/incubator/twonky-server/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/incubator/ubuntu-xrdp/CHANGELOG"}},c={},p=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Helm",id:"helm",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"TrueNAS SCALE",id:"truenas-scale-1",level:3},{value:"Helm",id:"helm-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Helm",id:"helm-2",level:3},{value:"Available Settings",id:"available-settings",level:4},{value:"Configure using the command line",id:"configure-using-the-command-line",level:4},{value:"Configure using a yaml file",id:"configure-using-a-yaml-file",level:4},{value:"Connecting to other charts",id:"connecting-to-other-charts",level:4},{value:"Support",id:"support",level:2},{value:"Sponsor TrueCharts",id:"sponsor-truecharts",level:2}],h={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,u.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"ubuntu-xrdp"},"ubuntu-xrdp"),(0,u.kt)("p",null,"LXDE desktop ubuntu (use remote desktop client to connect)"),(0,u.kt)("p",null,"TrueCharts can be installed as both ",(0,u.kt)("em",{parentName:"p"},"normal")," Helm Charts or as Apps on TrueNAS SCALE."),(0,u.kt)("p",null,"This readme is just an automatically generated general guide on installing our Helm Charts and Apps.\nFor more information, please click here: ",(0,u.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/charts/incubator/ubuntu-xrdp"},"ubuntu-xrdp")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,u.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/charts/issues/new/choose"},"here"))),(0,u.kt)("h2",{id:"source-code"},"Source Code"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/truecharts/charts/tree/master/charts/incubator/ubuntu-xrdp"},"https://github.com/truecharts/charts/tree/master/charts/incubator/ubuntu-xrdp")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://registry.hub.docker.com/r/snoopy86/desktop-dockers/"},"https://registry.hub.docker.com/r/snoopy86/desktop-dockers/"))),(0,u.kt)("h2",{id:"requirements"},"Requirements"),(0,u.kt)("p",null,"Kubernetes: ",(0,u.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,u.kt)("h2",{id:"dependencies"},"Dependencies"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Repository"),(0,u.kt)("th",{parentName:"tr",align:null},"Name"),(0,u.kt)("th",{parentName:"tr",align:null},"Version"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,u.kt)("td",{parentName:"tr",align:null},"common"),(0,u.kt)("td",{parentName:"tr",align:null},"10.7.1")))),(0,u.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,u.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,u.kt)("p",null,"To install this Chart on TrueNAS SCALE check our ",(0,u.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Installing-an-App"},"Quick-Start Guide"),"."),(0,u.kt)("h3",{id:"helm"},"Helm"),(0,u.kt)("p",null,"To install the chart with the release name ",(0,u.kt)("inlineCode",{parentName:"p"},"ubuntu-xrdp")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add TrueCharts https://charts.truecharts.org\nhelm repo update\nhelm install ubuntu-xrdp TrueCharts/ubuntu-xrdp\n")),(0,u.kt)("h2",{id:"uninstall"},"Uninstall"),(0,u.kt)("h3",{id:"truenas-scale-1"},"TrueNAS SCALE"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Upgrading, Rolling Back and Uninstalling the Chart")),(0,u.kt)("p",null,"To upgrade, rollback or delete this Chart from TrueNAS SCALE check our ",(0,u.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Upgrade-rollback-delete-an-App"},"Quick-Start Guide"),"."),(0,u.kt)("h3",{id:"helm-1"},"Helm"),(0,u.kt)("p",null,"To uninstall the ",(0,u.kt)("inlineCode",{parentName:"p"},"ubuntu-xrdp")," deployment"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall ubuntu-xrdp\n")),(0,u.kt)("h2",{id:"configuration"},"Configuration"),(0,u.kt)("h3",{id:"helm-2"},"Helm"),(0,u.kt)("h4",{id:"available-settings"},"Available Settings"),(0,u.kt)("p",null,"Read through the values.yaml file. It has several commented out suggested values.\nOther values may be used from the ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml"},"values.yaml")," from the ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/k8s-at-home/library-charts/tree/main/charts/stable/common"},"common library"),"."),(0,u.kt)("h4",{id:"configure-using-the-command-line"},"Configure using the command line"),(0,u.kt)("p",null,"Specify each parameter using the ",(0,u.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,u.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},'helm install ubuntu-xrdp \\\n  --set env.TZ="America/New York" \\\n    TrueCharts/ubuntu-xrdp\n')),(0,u.kt)("h4",{id:"configure-using-a-yaml-file"},"Configure using a yaml file"),(0,u.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-console"},"helm install ubuntu-xrdp TrueCharts/ubuntu-xrdp -f values.yaml\n")),(0,u.kt)("h4",{id:"connecting-to-other-charts"},"Connecting to other charts"),(0,u.kt)("p",null,"If you need to connect this Chart to other Charts on TrueNAS SCALE, please refer to our ",(0,u.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/linking-apps"},"Linking Charts Internally")," quick-start guide."),(0,u.kt)("h2",{id:"support"},"Support"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Please check our ",(0,u.kt)("a",{parentName:"li",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Important-MUST-READ"},"quick-start guides for TrueNAS SCALE"),"."),(0,u.kt)("li",{parentName:"ul"},"See the ",(0,u.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Website")),(0,u.kt)("li",{parentName:"ul"},"Check our ",(0,u.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,u.kt)("li",{parentName:"ul"},"Open a ",(0,u.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,u.kt)("hr",null),(0,u.kt)("h2",{id:"sponsor-truecharts"},"Sponsor TrueCharts"),(0,u.kt)("p",null,"TrueCharts can only exist due to the incredible effort of our staff.\nPlease consider making a ",(0,u.kt)("a",{parentName:"p",href:"https://truecharts.org/sponsor"},"donation")," or contributing back to the project any way you can!"),(0,u.kt)("hr",null),(0,u.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}d.isMDXComponent=!0}}]);