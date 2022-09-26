"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[96545],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?i.createElement(m,l(l({ref:t},c),{},{components:n})):i.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var u=2;u<o;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return d}});var i=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],r={},s="Installation notes",u={unversionedId:"charts/enterprise/blocky/installation-notes",id:"charts/enterprise/blocky/installation-notes",title:"Installation notes",description:"Default Configuration",source:"@site/docs/charts/enterprise/blocky/installation-notes.md",sourceDirName:"charts/enterprise/blocky",slug:"/charts/enterprise/blocky/installation-notes",permalink:"/docs/charts/enterprise/blocky/installation-notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/enterprise/blocky/installation-notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"FAQ",permalink:"/docs/charts/enterprise/blocky/FAQ"},next:{title:"metallb",permalink:"/docs/charts/enterprise/metallb/"}},c={},d=[{value:"Default Configuration",id:"default-configuration",level:2},{value:"Configuration Instructions",id:"configuration-instructions",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Native Helm",id:"native-helm",level:3},{value:"Adding config by mounting files",id:"adding-config-by-mounting-files",level:3},{value:"k8s-gateway",id:"k8s-gateway",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-notes"},"Installation notes"),(0,o.kt)("h2",{id:"default-configuration"},"Default Configuration"),(0,o.kt)("p",null,"The following config will be pre-configured and merged with any config you manually add to ",(0,o.kt)("inlineCode",{parentName:"p"},"blockyConfig")," option in ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,o.kt)("p",null,"Redis (always present):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"redis:\n  address: $redis_host:6379\n  password: $redis_pass\n  database: 0\n  required: true\n  connectionAttempts: 10\n  connectionCooldown: 3s\n")),(0,o.kt)("p",null,"Prometheus (Only present if enabled):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"prometheus:\n  enable: true\n  path: /metrics\n")),(0,o.kt)("h2",{id:"configuration-instructions"},"Configuration Instructions"),(0,o.kt)("p",null,"We offer two styles of configuration, both can be directly applied in values.yaml, without the need of persistence or editing configmaps.\nBesides this, the TrueNAS SCALE App exposes all config options directly in the GUI, except the Redis and Prometheus settings which are automatically configured."),(0,o.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,o.kt)("p",null,"All configuration options are directly reflected in the TrueNAS SCALE App GUI and can be edited as you see fit.\nThe App is, by default, configured to be high available so editing and updates should not cause needless downtime."),(0,o.kt)("h3",{id:"native-helm"},"Native Helm"),(0,o.kt)("p",null,"There are two ways of editing configuration, we will call them ",(0,o.kt)("inlineCode",{parentName:"p"},"List Style")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Blocky Style"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"List Style")," configuration has been developed by us to optimise for display in the TrueNAS SCALE WebUI. However: It can also be completely edited in ",(0,o.kt)("inlineCode",{parentName:"li"},"values.yaml"),". In this case each setting has been pre-configured and is documented in ",(0,o.kt)("inlineCode",{parentName:"li"},"values.yaml")," (available on github)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Blocky Style")," configuration, can be directly added below the ",(0,o.kt)("inlineCode",{parentName:"li"},"blockyConfig")," object in ",(0,o.kt)("inlineCode",{parentName:"li"},"values.yaml"),", please make sure the config is correctly indented")),(0,o.kt)("p",null,"We would advice using ",(0,o.kt)("inlineCode",{parentName:"p"},"List Style")," when possible as that is the most tested configuration style. But for things like migration some users might prefer to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Blocky Style")," instead"),(0,o.kt)("h3",{id:"adding-config-by-mounting-files"},"Adding config by mounting files"),(0,o.kt)("p",null,"Adding additional configuration files is not possible, as this feature has not been released yet."),(0,o.kt)("p",null,"However: We have verified if this would work and we will have to conclude that when 0.20 is released, we will not support multiple config files, as those will inherently conflict with our design. Due to duplicate keys breaking blocky.\nWith all the config already available in values.yaml, we do not really see a usecase for this on kubernetes. Apart from this, manually mounting configfiles might negatively affect High Availability and Rollback on kubernetes."),(0,o.kt)("p",null,"You can also mount custom Whitelist/Blacklist files, using ",(0,o.kt)("inlineCode",{parentName:"p"},"persistence")," or, in SCALE GUI, ",(0,o.kt)("inlineCode",{parentName:"p"},"Additional Storage")," and enter the path in your whitelist or blacklist settings manually\nHowever: this negatively affects rollback and high availability, so we ",(0,o.kt)("em",{parentName:"p"},"highly")," advice against doing this."),(0,o.kt)("h2",{id:"k8s-gateway"},"k8s-gateway"),(0,o.kt)("p",null,"Our blocky Chart/App, includes build-in compatibility for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ori-edge/k8s_gateway"},"k8s_gateway"),", this tool can be used to ensure devices on your local network, connect directly to the LAN IP of any Charts/Apps using Ingress, instead of via the outside world or, in a lot of cases, having a bunch of connectivity issues."),(0,o.kt)("p",null,"The setup of k8s_gateway is simple:\nJust add the domain(s), which will include and subdomains(!), to the k8s_gateway domains list.\nFrom that point onwards we will take care to automatically apply the required ",(0,o.kt)("inlineCode",{parentName:"p"},"conditional")," settings in ",(0,o.kt)("inlineCode",{parentName:"p"},"blocky")," as well."),(0,o.kt)("p",null,"Please be mindfull that using ",(0,o.kt)("inlineCode",{parentName:"p"},"Blocky Style")," configuration using the ",(0,o.kt)("inlineCode",{parentName:"p"},"blockyConfig")," object in ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),", might override this automatic setup."))}f.isMDXComponent=!0}}]);