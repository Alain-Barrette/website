"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[71864],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(r),d=a,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},79781:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),l=["components"],i={},s="projectzomboidreporter-frontend",p={unversionedId:"charts/incubator/projectzomboidreporter-frontend/index",id:"charts/incubator/projectzomboidreporter-frontend/index",title:"projectzomboidreporter-frontend",description:"Version application AppVersion: latest",source:"@site/docs/charts/incubator/projectzomboidreporter-frontend/index.md",sourceDirName:"charts/incubator/projectzomboidreporter-frontend",slug:"/charts/incubator/projectzomboidreporter-frontend/",permalink:"/docs/charts/incubator/projectzomboidreporter-frontend/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/incubator/projectzomboidreporter-frontend/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/incubator/privatebin/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/incubator/projectzomboidreporter-frontend/CHANGELOG"}},u={},c=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Helm",id:"helm",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"TrueNAS SCALE",id:"truenas-scale-1",level:3},{value:"Helm",id:"helm-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Helm",id:"helm-2",level:3},{value:"Available Settings",id:"available-settings",level:4},{value:"Configure using the Commandline",id:"configure-using-the-commandline",level:4},{value:"Configure using a yaml file",id:"configure-using-a-yaml-file",level:4},{value:"Connecting to other apps",id:"connecting-to-other-apps",level:4},{value:"Support",id:"support",level:2},{value:"Sponsor TrueCharts",id:"sponsor-truecharts",level:2}],h={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"projectzomboidreporter-frontend"},"projectzomboidreporter-frontend"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Version-0.0.14-informational?style=flat-square",alt:"Version: 0.0.14"})," ",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Type-application-informational?style=flat-square",alt:"Type: application"})," ",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/AppVersion-latest-informational?style=flat-square",alt:"AppVersion: latest"})),(0,o.kt)("p",null,"This is the frontend template used in the Project Zomboid Reporter. All visuals used in the final Reporter are pulled from here."),(0,o.kt)("p",null,"TrueCharts can be installed as both ",(0,o.kt)("em",{parentName:"p"},"normal")," Helm Charts or as Apps on TrueNAS SCALE."),(0,o.kt)("p",null,"This readme is just an automatically generated general guide on installing our Helm Charts and Apps.\nFor more information, please click here: ",(0,o.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/charts/stable/projectzomboidreporter-frontend"},"projectzomboidreporter-frontend")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/charts/issues/new/choose"},"here"))),(0,o.kt)("h2",{id:"source-code"},"Source Code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ChrisAshtear/Zomboid-Server-Stats-Reporter/"},"https://github.com/ChrisAshtear/Zomboid-Server-Stats-Reporter/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/chrisashtear/zomboid-reporter-frontend/"},"https://hub.docker.com/r/chrisashtear/zomboid-reporter-frontend/"))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Kubernetes: ",(0,o.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Repository"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,o.kt)("td",{parentName:"tr",align:null},"common"),(0,o.kt)("td",{parentName:"tr",align:null},"10.4.8")))),(0,o.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,o.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,o.kt)("p",null,"To install this App on TrueNAS SCALE check our ",(0,o.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/Quick-Start%20Guides/02-Installing-an-App/"},"Quick-Start Guide"),"."),(0,o.kt)("h3",{id:"helm"},"Helm"),(0,o.kt)("p",null,"To install the chart with the release name ",(0,o.kt)("inlineCode",{parentName:"p"},"projectzomboidreporter-frontend")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add TrueCharts https://helm.truecharts.org\nhelm repo update\nhelm install projectzomboidreporter-frontend TrueCharts/projectzomboidreporter-frontend\n")),(0,o.kt)("h2",{id:"uninstall"},"Uninstall"),(0,o.kt)("h3",{id:"truenas-scale-1"},"TrueNAS SCALE"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Upgrading, Rolling Back and Uninstalling the Chart")),(0,o.kt)("p",null,"To upgrade, rollback or delete this App from TrueNAS SCALE check our ",(0,o.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/Quick-Start%20Guides/04-Upgrade-rollback-delete-an-App/"},"Quick-Start Guide"),"."),(0,o.kt)("h3",{id:"helm-1"},"Helm"),(0,o.kt)("p",null,"To uninstall the ",(0,o.kt)("inlineCode",{parentName:"p"},"projectzomboidreporter-frontend")," deployment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall projectzomboidreporter-frontend\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"helm-2"},"Helm"),(0,o.kt)("h4",{id:"available-settings"},"Available Settings"),(0,o.kt)("p",null,"Read through the ",(0,o.kt)("a",{parentName:"p",href:"./values.yaml"},"values.yaml")," file. It has several commented out suggested values.\nOther values may be used from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml"},"values.yaml")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/k8s-at-home/library-charts/tree/main/charts/stable/common"},"common library"),"."),(0,o.kt)("h4",{id:"configure-using-the-commandline"},"Configure using the Commandline"),(0,o.kt)("p",null,"Specify each parameter using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'helm install projectzomboidreporter-frontend \\\n  --set env.TZ="America/New York" \\\n    TrueCharts/projectzomboidreporter-frontend\n')),(0,o.kt)("h4",{id:"configure-using-a-yaml-file"},"Configure using a yaml file"),(0,o.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install projectzomboidreporter-frontend TrueCharts/projectzomboidreporter-frontend -f values.yaml\n")),(0,o.kt)("h4",{id:"connecting-to-other-apps"},"Connecting to other apps"),(0,o.kt)("p",null,"If you need to connect this App to other Apps on TrueNAS SCALE, please refer to our ",(0,o.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/Quick-Start%20Guides/06-linking-apps/"},"Linking Apps Internally")," quick-start guide."),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please check our ",(0,o.kt)("a",{parentName:"li",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Important-MUST-READ"},"quick-start guides for TrueNAS SCALE"),"."),(0,o.kt)("li",{parentName:"ul"},"See the ",(0,o.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Website")),(0,o.kt)("li",{parentName:"ul"},"Check our ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,o.kt)("li",{parentName:"ul"},"Open a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"sponsor-truecharts"},"Sponsor TrueCharts"),(0,o.kt)("p",null,"TrueCharts can only exist due to the incredible effort of our staff.\nPlease consider making a ",(0,o.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/about/sponsor"},"donation")," or contributing back to the project any way you can!"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}d.isMDXComponent=!0}}]);