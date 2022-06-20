"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[993],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),i="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),i=n(2389),o=n(7392),s=n(7094),l=n(2466),u=n(6010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var t,n,i,p=e.lazy,m=e.block,h=e.defaultValue,f=e.values,k=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(t=null!=h?h:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==w&&!N.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),T=y.tabGroupChoices,I=y.setTabGroupChoices,C=(0,r.useState)(w),O=C[0],E=C[1],x=[],j=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var P=T[k];null!=P&&P!==O&&N.some((function(e){return e.value===P}))&&E(P)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),a=N[n].value;a!==O&&(j(t),E(a),null!=k&&I(k,a))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},g)},N.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:q,onFocus:D,onClick:D},i,{className:(0,u.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},2347:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(9877),s=n(2360),l=["components"],u={},c="Issue a credential",d={unversionedId:"tutorials/issue-a-credential",id:"tutorials/issue-a-credential",title:"Issue a credential",description:"Using AnonCreds and the",source:"@site/guides/tutorials/issue-a-credential.md",sourceDirName:"tutorials",slug:"/tutorials/issue-a-credential",permalink:"/aries-javascript-docs/guides/tutorials/issue-a-credential",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a connection",permalink:"/aries-javascript-docs/guides/tutorials/create-a-connection"},next:{title:"Updating AFJ",permalink:"/aries-javascript-docs/guides/updating/"}},p={},m=[{value:"1. Setting up the agents",id:"1-setting-up-the-agents",level:3},{value:"Holder",id:"holder",level:4},{value:"Issuer",id:"issuer",level:4},{value:"2. Registering the schema and credential definition",id:"2-registering-the-schema-and-credential-definition",level:3},{value:"3. Listening for incoming credentials",id:"3-listening-for-incoming-credentials",level:3},{value:"4. Issuing a credential",id:"4-issuing-a-credential",level:3},{value:"5. Full code snippets",id:"5-full-code-snippets",level:3},{value:"Useful resources",id:"useful-resources",level:3}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"issue-a-credential"},"Issue a credential"),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"https://anoncreds-wg.github.io/anoncreds-spec/"},"AnonCreds")," and the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0453-issue-credential-v2/README.md"},"Issue Credential V2\nProtocol"),"\nor the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0036-issue-credential/README.md"},"Issue Credential V1\nProtocol"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This section assumes the following items:"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("a",{parentName:"p",href:"../getting-started/prerequisites"},"valid environment")," for development")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Basic knowledge of the required fields in the ",(0,i.kt)("a",{parentName:"p",href:"./agent-config"},"agent\nconfig"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("a",{parentName:"p",href:"./create-a-connection"},"connection between the ",(0,i.kt)("em",{parentName:"a"},"Holder")," and ",(0,i.kt)("em",{parentName:"a"},"Issuer")))))),(0,i.kt)("p",null,"In this tutorial we will issue a credential from the ",(0,i.kt)("em",{parentName:"p"},"Issuer")," to a ",(0,i.kt)("em",{parentName:"p"},"Holder"),". We\nwill start with setting up both their agents with the minimal configuration\nrequired to follow this tutorial. After the initialization we will then create\na schema, credential definition and a credential as the ",(0,i.kt)("em",{parentName:"p"},"Issuer")," and send the\ncredential over to the ",(0,i.kt)("em",{parentName:"p"},"Holder"),". The ",(0,i.kt)("em",{parentName:"p"},"holder")," will then accept this credential\nand automatically store it in their wallet."),(0,i.kt)("h3",{id:"1-setting-up-the-agents"},"1. Setting up the agents"),(0,i.kt)("p",null,"First for both agents we must setup and initialize an agent to work with.\nDepending on your target, ",(0,i.kt)("a",{parentName:"p",href:"../getting-started/prerequisites/react-native"},"React\nNative")," or\n",(0,i.kt)("a",{parentName:"p",href:"../getting-started/prerequisites/react-native"},"Node.js"),", it might vary."),(0,i.kt)("p",null,"In this tutorial the ",(0,i.kt)("em",{parentName:"p"},"Holder")," will be in a ",(0,i.kt)("a",{parentName:"p",href:"../getting-started/prerequisites/nodejs"},"Node.js\nenvironment")," and the ",(0,i.kt)("em",{parentName:"p"},"Issuer"),"\nalso in a ",(0,i.kt)("a",{parentName:"p",href:"../getting-started/prerequisites/nodejs"},"Node.js environment"),"."),(0,i.kt)("h4",{id:"holder"},"Holder"),(0,i.kt)("p",null,"For the ",(0,i.kt)("em",{parentName:"p"},"Holder")," we need to setup a basic agent with a wallet, mediator,\noutbound transport and a ledger."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you want to follow this tutorial in a mobile environment:"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"agentDependencies")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"@aries-framework/react-native")),(0,i.kt)("li",{parentName:"ol"},"It is very important to note that mobile agents do not support HTTP by default.\nIt is recommended to do everything over HTTPS, but for development HTTP can be\nenabled for\n",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/30731785/how-do-i-load-an-http-url-with-app-transport-security-enabled-in-ios-9"},"iOS"),"\nand\n",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/51902629/how-to-allow-all-network-connection-types-http-and-https-in-android-9-pie"},"Android"),"."))),(0,i.kt)("div",{className:"admonition admonition-holder alert alert--alert alert--holder"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\uddc4"),"holder")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts section-1",showLineNumbers:!0,"issue-a-credential.ts":!0,"section-1":!0},"")))),(0,i.kt)("h4",{id:"issuer"},"Issuer"),(0,i.kt)("p",null,"For the ",(0,i.kt)("em",{parentName:"p"},"Issuer")," the setup is almost the same as the ",(0,i.kt)("em",{parentName:"p"},"Holder"),". The difference\nis, is that the ",(0,i.kt)("em",{parentName:"p"},"Issuer")," does not need a mediator but an\n",(0,i.kt)("inlineCode",{parentName:"p"},"HttpInboundTransport"),"."),(0,i.kt)("p",null,"It is also very important for the ",(0,i.kt)("em",{parentName:"p"},"Issuer")," to have a public DID, for the\nbinding with a credential definition, amongst other things. For this demo we\nwill use ",(0,i.kt)("a",{parentName:"p",href:"http://test.bcovrin.vonx.io"},"BCovrin Test"),". If you want to follow\nthis tutorial, you have to register a public DID\n",(0,i.kt)("a",{parentName:"p",href:"http://test.bcovrin.vonx.io"},"here")," via the Wallet seed field (this must be the\nsame as the seed inside the config under the key\n",(0,i.kt)("a",{parentName:"p",href:"./agent-config#publicdidseed"},(0,i.kt)("inlineCode",{parentName:"a"},"publicDidSeed")),")."),(0,i.kt)("p",null,"In order to reach the ",(0,i.kt)("em",{parentName:"p"},"Issuer")," we have to add a list of\n",(0,i.kt)("a",{parentName:"p",href:"./agent-config#endpoints"},(0,i.kt)("inlineCode",{parentName:"a"},"endpoints"))," of the agent that exposes the\n",(0,i.kt)("inlineCode",{parentName:"p"},"inboundTransport")," to the public. In the example below we add an\n",(0,i.kt)("inlineCode",{parentName:"p"},"inboundTransport")," and use port ",(0,i.kt)("inlineCode",{parentName:"p"},"3000"),". For development purposes it is\nrecommended to use a tunneling service for this, like\n",(0,i.kt)("a",{parentName:"p",href:"https://ngrok.com"},"Ngrok"),". Ngrok will allow you to reach your locally exposed\nendpoint from the public. If a tunneling service is used, make sure to use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS")," variant as mobile environments, by default, do not accept ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP"),"\nanymore."),(0,i.kt)("p",null,"To install ",(0,i.kt)("a",{parentName:"p",href:"https://ngrok.com"},"Ngrok")," and expose the port to the public the\nfollowing commands can be used:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{label:"yarn",value:"tab1",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"yarn global add ngrok\n\nngrok http <PORT>\n"))),(0,i.kt)(s.Z,{label:"npm",value:"tab2",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"npm install --global ngrok\n\nngrok http <PORT>\n")))),(0,i.kt)("div",{className:"admonition admonition-issuer alert alert--alert alert--issuer"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udcc4"),"issuer")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts section-2",showLineNumbers:!0,"issue-a-credential.ts":!0,"section-2":!0},"")))),(0,i.kt)("h3",{id:"2-registering-the-schema-and-credential-definition"},"2. Registering the schema and credential definition"),(0,i.kt)("p",null,"When we want to issue a credential we must first create a blueprint, the\nschema, of the credential and bind it to a specific issuer, the credential\ndefinition. This binding makes sure that when you want to verify the\ncredential, you can request that it must be issued from a specific party."),(0,i.kt)("div",{className:"admonition admonition-issuer alert alert--alert alert--issuer"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udcc4"),"issuer")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts section-3",showLineNumbers:!0,"issue-a-credential.ts":!0,"section-3":!0},"")),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts section-4",showLineNumbers:!0,"issue-a-credential.ts":!0,"section-4":!0},"")))),(0,i.kt)("h3",{id:"3-listening-for-incoming-credentials"},"3. Listening for incoming credentials"),(0,i.kt)("p",null,"When we want to accept a credential, we have to listen to incoming credentials\nand handle accordingly. In this example we do not have any user interaction,\nbut is likely that your application would have a user-interface which would\ndisplay the credential. When receiving a credential offer you can get the\nvalues from ",(0,i.kt)("inlineCode",{parentName:"p"},"credentialExchangeRecord.credentialAttributes"),"."),(0,i.kt)("div",{className:"admonition admonition-holder alert alert--alert alert--holder"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\uddc4"),"holder")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts section-5",showLineNumbers:!0,"issue-a-credential.ts":!0,"section-5":!0},"")))),(0,i.kt)("h3",{id:"4-issuing-a-credential"},"4. Issuing a credential"),(0,i.kt)("p",null,"Now that everything is setup on both sides, the ",(0,i.kt)("em",{parentName:"p"},"Issuer")," can now offer a\ncredential to the ",(0,i.kt)("em",{parentName:"p"},"Holder"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In this example we do not instantiate a connection and assume that there is\none. Please refer to this guide ",(0,i.kt)("a",{parentName:"p",href:"./create-a-connection"},"Create a connection"),"\nto get a connection and connectionId")),(0,i.kt)("div",{className:"admonition admonition-issuer alert alert--alert alert--issuer"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udcc4"),"issuer")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts section-6",showLineNumbers:!0,"issue-a-credential.ts":!0,"section-6":!0},"")))),(0,i.kt)("h3",{id:"5-full-code-snippets"},"5. Full code snippets"),(0,i.kt)("p",null,"Below are both code snippets for each agent. These can be used as base but\nshould be editted to fit your use case. The\n",(0,i.kt)("a",{parentName:"p",href:"./agent-config#walletconfigkey"},(0,i.kt)("inlineCode",{parentName:"a"},"walletConfig.key")),' must be changed as it can\nlead to other people knowing your "password" to your wallet.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts",showLineNumbers:!0,"issue-a-credential.ts":!0},"")),(0,i.kt)("h3",{id:"useful-resources"},"Useful resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://anoncreds-wg.github.io/anoncreds-spec/"},"AnonCreds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0036-issue-credential/README.md"},"Issue Credential V1\nProtocol")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0453-issue-credential-v2/README.md"},"Issue Credential V2\nProtocol"))))}f.isMDXComponent=!0}}]);