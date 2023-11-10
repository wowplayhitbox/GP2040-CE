"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={title:"Macro Settings",description:"Macro settings and how to create input macros"},o="Macro Settings",l={unversionedId:"web-configurator/menu-pages/macros",id:"web-configurator/menu-pages/macros",title:"Macro Settings",description:"Macro settings and how to create input macros",source:"@site/docs/web-configurator/menu-pages/09-macros.mdx",sourceDirName:"web-configurator/menu-pages",slug:"/web-configurator/menu-pages/macros",permalink:"/web-configurator/menu-pages/macros",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Macro Settings",description:"Macro settings and how to create input macros"},sidebar:"webConfigSidebar",previous:{title:"Add-Ons Configuration",permalink:"/web-configurator/menu-pages/add-ons-configuration"},next:{title:"Data Backup and Restoration",permalink:"/web-configurator/menu-pages/data-backup-restoration"}},s={},u=[{value:"Macro Options",id:"macro-options",level:2},{value:"Label",id:"label",level:3},{value:"Activate",id:"activate",level:3},{value:"Interruptible",id:"interruptible",level:3},{value:"Exclusive",id:"exclusive",level:3},{value:"Show Frames",id:"show-frames",level:3},{value:"Uses Button",id:"uses-button",level:3},{value:"Trigger Mode",id:"trigger-mode",level:3},{value:"Macro Input Line Editor",id:"macro-input-line-editor",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"macro-settings"},"Macro Settings"),(0,i.kt)("p",null,"Macros are a series or combination of gamepad inputs triggered with a single button or a combination of buttons."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GP2040-CE Configurator - Macros",src:n(8182).Z,width:"1080",height:"1081"})),(0,i.kt)("h2",{id:"macro-options"},"Macro Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Macro Button Pin")," - The GPIO Pin used to activate macros in combination with other inputs when ",(0,i.kt)("inlineCode",{parentName:"p"},"Uses Button")," is enabled and set."),(0,i.kt)("h3",{id:"label"},"Label"),(0,i.kt)("p",null,"This is the name of the macro and is optional."),(0,i.kt)("h3",{id:"activate"},"Activate"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Off")," - The macro is not available for use."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"On")," - The macro is available for use when triggered by either the GPIO pin or the combination set in ",(0,i.kt)("a",{parentName:"li",href:"#uses-button"},(0,i.kt)("inlineCode",{parentName:"a"},"Uses Button")),".")),(0,i.kt)("h3",{id:"interruptible"},"Interruptible"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Off")," - The macro cannot be stopped and will execute all lines until the macro is completed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"On")," - Any input will stop the current ongoing macro or, if the input is another macro, the interrupting macro trigger will start executing instead.")),(0,i.kt)("admonition",{title:"Interrupting Macros",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When a macro stops for any reason and are triggered. again, the macro starts again from the beginning.")),(0,i.kt)("h3",{id:"exclusive"},"Exclusive"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Off")," - Additional inputs from user will be sent as the macro continues to execute, resulting in a blend of macro and user inputs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"On")," - Filters only the macro inputs through and excludes any additional user gamepad inputs")),(0,i.kt)("p",null,"?> This option is ",(0,i.kt)("strong",{parentName:"p"},"only")," available when ",(0,i.kt)("inlineCode",{parentName:"p"},"Interruptible")," is enabled."),(0,i.kt)("h3",{id:"show-frames"},"Show Frames"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Off")," - The duration in the macro input line editor will appear in milliseconds (ms)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"On")," - The duration in the macro input line editor will appear as a number of frames, assuming 60 frames per second.")),(0,i.kt)("h3",{id:"uses-button"},"Uses Button"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Off")," - This macro is assigned to a GPIO pin on the board and when pressed, the macro will be triggered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"On")," - This macro is assigned to a button combination of ",(0,i.kt)("inlineCode",{parentName:"li"},"Macro Button Pin + Input")," where the input can be any of the standard gamepad inputs.")),(0,i.kt)("h3",{id:"trigger-mode"},"Trigger Mode"),(0,i.kt)("p",null,"This describes is how the GPIO pin or the combination set in ",(0,i.kt)("a",{parentName:"p",href:"#uses-button"},(0,i.kt)("inlineCode",{parentName:"a"},"Uses Button"))," triggers and repeats the macro."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Press - Full press of button triggers the macro once"),(0,i.kt)("li",{parentName:"ul"},"Hold Repeat - Holding button to repeatedly triggers macro"),(0,i.kt)("li",{parentName:"ul"},"Toggle - Full press of button causes the macro to repeatedly trigger, another full press of the button will stop the macro from repeatedly triggering.")),(0,i.kt)("h2",{id:"macro-input-line-editor"},"Macro Input Line Editor"),(0,i.kt)("p",null,"Each individual macro has a maximum of 50 lines where each input line has a maximum of 18 gamepad inputs (using all available gamepad inputs)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GP2040-CE Configurator - Macro Input Line",src:n(8252).Z,width:"775",height:"264"})),(0,i.kt)("p",null,"Each input line is composed of the following elements from left to right."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Input Line Duration")," ms ",(0,i.kt)("inlineCode",{parentName:"p"},"Inputs")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"Post Input Wait Duration")," ms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Input Line Duration - The duration that the inputs are held for. (Maximum 4,294,967ms or 268,435 frames)"),(0,i.kt)("li",{parentName:"ul"},"Inputs - The inputs to be held during the execution of the input line."),(0,i.kt)("li",{parentName:"ul"},"Post Input Wait Duration - The duration in-between when that input line finishes executing and when the next line will start executing. (Maximum 4,294,967ms or 268,435 frames)")),(0,i.kt)("admonition",{title:"Deleting Input Lines",type:"note"},(0,i.kt)("p",{parentName:"admonition"},'To delete an input line, double-click the "x" button.')))}m.isMDXComponent=!0},8252:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gpc-macros-input-line-0e60c250e8fafbcda2bc1f290998b1d8.png"},8182:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gpc-macros-cde533afc5e9c5819b6b792a4b131486.png"}}]);