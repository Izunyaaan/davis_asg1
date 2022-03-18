(function(){"use strict";var t={5276:function(t,e,a){var i=a(144),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("div",{staticClass:"text-center ma-3"},[a("v-avatar",{attrs:{size:"60%"}},[a("img",{attrs:{src:"https://i.pinimg.com/originals/a5/d7/c4/a5d7c4d626d7aa643912f2d24f8cc8c1.png",alt:"Picture of Rimuru Tempest"}})]),a("h1",[t._v("Faiz 'Izunyan' Sufrikhan")])],1),a("v-divider"),a("v-list",t._l(t.links,(function(e,i){return a("v-list-item",{key:i,attrs:{to:e.route}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v(" "+t._s(this.$route.name)+" ")]),a("v-spacer"),a("theme-toggle")],1),a("v-main",[a("router-view",{staticClass:"pa-3"})],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$vuetify.theme.dark?a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{color:"info",small:"",fab:""},on:{click:t.darkMode}},i),[a("v-icon",{attrs:{color:"yellow"}},[t._v("mdi-white-balance-sunny")])],1)]}}])},[a("span",[t._v("Dark Mode Off")])]):a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{color:"info",small:"",fab:""},on:{click:t.darkMode}},i),[a("v-icon",{staticClass:"mr-1"},[t._v("mdi-moon-waxing-crescent")])],1)]}}],null,!1,3513394316)},[a("span",[t._v("Dark Mode On")])])],1)},l=[],o={methods:{darkMode(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},c=o,d=a(1001),u=a(3453),h=a.n(u),p=a(3150),v=a(6428),f=a(9330),m=(0,d.Z)(c,n,l,!1,null,null,null),g=m.exports;h()(m,{VBtn:p.Z,VIcon:v.Z,VTooltip:f.Z});var b={components:{ThemeToggle:g},mounted:()=>{document.title="Faiz DAVIS Asg 1"},data:()=>({drawer:null,links:[{name:"Loaded from CSV",icon:"mdi-file-delimited",route:"/"},{name:"Loaded from API",icon:"mdi-cloud-download",route:"/api"},{name:"Load a CSV",icon:"mdi-upload",route:"/loadCSV"}]}),methods:{}},y=b,x=a(7524),C=a(8320),w=a(5206),_=a(6370),k=a(1418),S=a(6816),D=a(7620),V=a(459),Z=a(2059),L=a(7877),I=a(8903),E=a(9762),O=a(7921),T=(0,d.Z)(y,r,s,!1,null,null,null),P=T.exports;h()(T,{VApp:x.Z,VAppBar:C.Z,VAppBarNavIcon:w.Z,VAvatar:_.Z,VDivider:k.Z,VIcon:v.Z,VList:S.Z,VListItem:D.Z,VListItemIcon:V.Z,VListItemTitle:Z.V9,VMain:L.Z,VNavigationDrawer:I.Z,VSpacer:E.Z,VToolbarTitle:O.qW});var A=a(8345),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{attrs:{width:""}},[t._v("Charts of Iris Dataset")]),a("div",{staticClass:"d-flex flex-wrap"},[a("LoadingScreen",{attrs:{isLoading:t.isLoading}}),a("v-card",{staticClass:"ma-1",attrs:{outlined:"",tile:"",elevation:"5",width:"30%","min-width":"350px"}},[a("v-card-title",[t._v("Controls")]),a("v-card",{attrs:{outlined:"",tile:"",elevation:"3"}},[a("v-card-subtitle",[t._v(" Display Charts ")]),a("v-card-actions",{staticClass:"d-flex align-start"},t._l(t.renderChart,(function(e,i){return a("v-checkbox",{key:i,staticClass:"ma-0",attrs:{label:e.chart},model:{value:e.visible,callback:function(a){t.$set(e,"visible",a)},expression:"chart.visible"}})})),1)],1),a("v-card",{attrs:{outlined:"",tile:"",elevation:"3"}},[a("v-card-title",[t._v(" Select Class ")]),a("v-card-actions",{staticClass:"d-flex align-start"},[a("v-select",{attrs:{items:t.labels,"item-text":"name"},on:{change:t.redrawCharts},model:{value:t.selectedClass,callback:function(e){t.selectedClass=e},expression:"selectedClass"}})],1)],1),a("v-card",{attrs:{outlined:"",tile:"",elevation:"3"}},[a("v-card-title",[t._v(" Select Axis ")]),a("v-card-actions",{staticClass:"d-flex align-start"},[t._v(" X:"),a("v-select",{attrs:{items:t.labels},on:{change:t.redrawCharts},model:{value:t.selectedX,callback:function(e){t.selectedX=e},expression:"selectedX"}}),t._v(" Y:"),a("v-select",{attrs:{items:t.labels},on:{change:t.redrawCharts},model:{value:t.selectedY,callback:function(e){t.selectedY=e},expression:"selectedY"}})],1)],1)],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.renderChart[0].visible,expression:"renderChart[0].visible"}],staticClass:"ma-1",staticStyle:{overflow:"auto"},attrs:{outlined:"",tile:"",elevation:"5",width:"30%","min-width":"350px"}},[a("v-card-title",[t._v("Table")]),a("div",{attrs:{id:"table"}})],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.renderChart[1].visible,expression:"renderChart[1].visible"}],staticClass:"ma-1",attrs:{outlined:"",tile:"",elevation:"5",width:"30%","min-width":"350px"}},[a("v-card-title",[t._v("Scatter")]),a("div",{staticStyle:{width:"100%"},attrs:{id:"scatter"}})],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.renderChart[2].visible,expression:"renderChart[2].visible"}],staticClass:"ma-1",attrs:{outlined:"",tile:"",elevation:"5",width:"30%","min-width":"350px"}},[a("v-card-title",[t._v("Histogram")]),a("div",{staticStyle:{width:"100%"},attrs:{id:"bar"}})],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.renderChart[3].visible,expression:"renderChart[3].visible"}],staticClass:"ma-1",attrs:{outlined:"",tile:"",elevation:"5",width:"30%","min-width":"350px"}},[a("v-card-title",[t._v("Pie")]),a("div",{staticStyle:{width:"100%"},attrs:{id:"pie"}})],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.renderChart[4].visible,expression:"renderChart[4].visible"}],staticClass:"ma-1",attrs:{outlined:"",tile:"",elevation:"5",width:"30%","min-width":"350px"}},[a("v-card-title",[t._v("Line")]),a("div",{staticStyle:{width:"100%"},attrs:{id:"line"}})],1)],1)])},j=[],z=a(2479),B=a.n(z),$=a(8399),M={components:{LoadingScreen:$.Z},created(){this.loadCSVData("https://raw.githubusercontent.com/Izunyaaan/davis_asg1/main/src/assets/iris.csv").then((t=>{this.parseIntoTable(t),this.parseIntoPie(t),this.parseIntoScatter(t),this.parseIntoLine(t),this.parseIntoBar(t),this.plotCharts(),this.isLoading=!1}))},mounted(){this.plotCharts()},data:()=>({isLoading:!0,renderChart:[{chart:"Table",visible:!0},{chart:"Scatter",visible:!0},{chart:"Bar",visible:!0},{chart:"Pie",visible:!0},{chart:"Line",visible:!0}],labels:[],selectedClass:"",selectedX:"",selectedY:"",graphData:{table:{data:[{type:"table",header:{values:[],align:"center",fill:{color:"grey"},font:{color:"white"}},cells:{values:[],align:"center"}}],layout:{autosize:!1}},scatter:{data:[{x:[],y:[],type:"scatter",mode:"markers"}],layout:{autosize:!0,xaxis:{title:{text:""}},yaxis:{title:{text:""}}}},bar:{data:[],layout:{autosize:!0,xaxis:{title:{text:"Class"}},yaxis:{title:{text:"Dimensions"}}}},pie:{data:[{values:[],labels:[],type:"pie"}],layout:{}},line:{data:[],layout:{autosize:!0,xaxis:{title:{text:""}},yaxis:{title:{text:""}}}}}}),methods:{loadCSVData(t){const e={method:"GET"};return fetch(t,e).then((t=>t.text()))},parseIntoTable(t){let e=t.split(/\r?\n/);e.forEach(((t,a)=>{if(0===a){let e=t.split(",");this.graphData.table.data[0].header.values=e;for(let t=0;t<e.length;t++)this.graphData.table.data[0].cells.values.push([]),this.labels.push(e[t]);this.selectedX=e[1],this.selectedY=e[2],this.selectedClass=e[e.length-1]}else if(a<e.length-1){let e=t.split(",");e.forEach(((t,e)=>{this.graphData.table.data[0].cells.values[e].push(t)}))}}))},parseIntoScatter(t){let e,a,i,r=t.split(/\r?\n/),s=r[0].split(","),n=[],l=[];s.forEach(((t,r)=>{t==this.selectedClass&&(e=r),t==this.selectedX&&(a=r,this.graphData.scatter.layout.xaxis.title.text=t),t==this.selectedY&&(i=r,this.graphData.scatter.layout.yaxis.title.text=t)}));for(let o=1;o<r.length-1;o++){let t=r[o].split(",");n.includes(t[e])||(n.push(t[e]),l.push({name:t[e],x:[],y:[],mode:"markers",type:"scatter"}))}for(let o=1;o<r.length-1;o++){let t=r[o].split(",");l[n.indexOf(t[e])].x.push(t[a]),l[n.indexOf(t[e])].y.push(t[i])}this.graphData.scatter.data=l},parseIntoBar(t){let e,a,i,r=t.split(/\r?\n/),s=r[0].split(","),n=[],l=[];s.forEach(((t,r)=>{t==this.selectedClass&&(e=r),t==this.selectedX&&(a=r,this.graphData.bar.layout.xaxis.title.text=t),t==this.selectedY&&(i=r,this.graphData.bar.layout.yaxis.title.text=t)}));for(let o=1;o<r.length-1;o++){let t=r[o].split(",");n.includes(t[e])||(n.push(t[e]),l.push({name:t[e],x:[],y:[],type:"bar"}))}for(let o=1;o<r.length-1;o++){let t=r[o].split(",");l[n.indexOf(t[e])].x.push(t[a]),l[n.indexOf(t[e])].y.push(t[i])}this.graphData.bar.data=l},parseIntoPie(t){let e,a=t.split(/\r?\n/),i=a[0].split(","),r=[],s=[];i.forEach(((t,a)=>{t==this.selectedClass&&(e=a)}));for(let n=1;n<a.length-1;n++){let t=a[n].split(",");if(r.includes(t[e])){let a=r.indexOf(t[e]);s[a]+=1}else r.push(t[e]),s.push(1)}this.graphData.pie.data[0].values=s,this.graphData.pie.data[0].labels=r},parseIntoLine(t){let e,a,i,r=t.split(/\r?\n/),s=r[0].split(","),n=[],l=[];s.forEach(((t,r)=>{t==this.selectedClass&&(e=r),t==this.selectedX&&(a=r,this.graphData.line.layout.xaxis.title.text=t),t==this.selectedY&&(i=r,this.graphData.line.layout.yaxis.title.text=t)}));for(let o=1;o<r.length-1;o++){let t=r[o].split(",");n.includes(t[e])||(n.push(t[e]),l.push({name:t[e],x:[],y:[],type:"scatter"}))}for(let o=1;o<r.length-1;o++){let t=r[o].split(",");l[n.indexOf(t[e])].x.push(t[a]),l[n.indexOf(t[e])].y.push(t[i])}this.graphData.line.data=l},redrawCharts(){this.isLoading=!0,this.loadCSVData("https://raw.githubusercontent.com/Izunyaaan/davis_asg1/main/src/assets/iris.csv").then((t=>{this.parseIntoPie(t),this.parseIntoScatter(t),this.parseIntoLine(t),this.parseIntoBar(t),this.plotCharts(),this.isLoading=!1}))},plotCharts(){B().newPlot("table",this.graphData.table.data,this.graphData.table.layout),B().newPlot("pie",this.graphData.pie.data,this.graphData.pie.layout),B().newPlot("scatter",this.graphData.scatter.data,this.graphData.scatter.layout),B().newPlot("line",this.graphData.line.data,this.graphData.line.layout),B().newPlot("bar",this.graphData.bar.data,this.graphData.bar.layout)}}},X=M,Y=a(3237),F=a(7118),q=a(9362),H=a(9043),G=(0,d.Z)(X,N,j,!1,null,null,null),K=G.exports;h()(G,{VCard:Y.Z,VCardActions:F.h7,VCardSubtitle:F.Qq,VCardTitle:F.EB,VCheckbox:q.Z,VSelect:H.Z}),i.Z.use(A.Z);const Q=[{path:"/",name:"Loaded from CSV",component:K},{path:"/api",name:"Loaded from API",component:()=>a.e(443).then(a.bind(a,2278))},{path:"/loadCSV",name:"Load a CSV",component:()=>a.e(443).then(a.bind(a,7882))}],R=new A.Z({mode:"history",base:"/",routes:Q});var U=R,W=a(9132);i.Z.use(W.Z);var J=new W.Z({theme:{dark:!0,themes:{light:{background:"#E8EAF6"},dark:{background:"#212121"}}}});i.Z.config.productionTip=!1,new i.Z({router:U,vuetify:J,render:t=>t(P)}).$mount("#app")},8399:function(t,e,a){a.d(e,{Z:function(){return p}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isLoading?a("div",{staticClass:"background d-flex justify-start flex-column text-center",staticStyle:{position:"absolute",top:"0",right:"0",width:"100%",height:"100%","z-index":"3"}},[a("p",{staticClass:"text-h1 pa-3"},[t._v("Loading")]),a("v-spacer",[a("v-progress-circular",{staticClass:"pa-3",attrs:{indeterminate:"",size:"75"}})],1)],1):t._e()},r=[],s={props:["isLoading"]},n=s,l=a(1001),o=a(3453),c=a.n(o),d=a(624),u=a(9762),h=(0,l.Z)(n,i,r,!1,null,null,null),p=h.exports;c()(h,{VProgressCircular:d.Z,VSpacer:u.Z})}},e={};function a(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,i,r,s){if(!i){var n=1/0;for(d=0;d<t.length;d++){i=t[d][0],r=t[d][1],s=t[d][2];for(var l=!0,o=0;o<i.length;o++)(!1&s||n>=s)&&Object.keys(a.O).every((function(t){return a.O[t](i[o])}))?i.splice(o--,1):(l=!1,s<n&&(n=s));if(l){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[i,r,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,i){return a.f[i](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.0eeb8e9d.js"}}(),function(){a.miniCssF=function(t){return"css/about.01b58523.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="asg1:";a.l=function(i,r,s,n){if(t[i])t[i].push(r);else{var l,o;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==e+s){l=u;break}}l||(o=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",e+s),l.src=i),t[i]=[r];var h=function(e,a){l.onerror=l.onload=null,clearTimeout(p);var r=t[i];if(delete t[i],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(t){return t(a)})),e)return e(a)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),o&&document.head.appendChild(l)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t=function(t,e,a,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(s){if(r.onerror=r.onload=null,"load"===s.type)a();else{var n=s&&("load"===s.type?"missing":s.type),l=s&&s.target&&s.target.href||e,o=new Error("Loading CSS chunk "+t+" failed.\n("+l+")");o.code="CSS_CHUNK_LOAD_FAILED",o.type=n,o.request=l,r.parentNode.removeChild(r),i(o)}};return r.onerror=r.onload=s,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var r=a[i],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===t||s===e))return r}var n=document.getElementsByTagName("style");for(i=0;i<n.length;i++){r=n[i],s=r.getAttribute("data-href");if(s===t||s===e)return r}},i=function(i){return new Promise((function(r,s){var n=a.miniCssF(i),l=a.p+n;if(e(n,l))return r();t(i,l,r,s)}))},r={143:0};a.f.miniCss=function(t,e){var a={443:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=i(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,i){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)i.push(r[2]);else{var s=new Promise((function(a,i){r=t[e]=[a,i]}));i.push(r[2]=s);var n=a.p+a.u(e),l=new Error,o=function(i){if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var s=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;l.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",l.name="ChunkLoadError",l.type=s,l.request=n,r[1](l)}};a.l(n,o,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,s,n=i[0],l=i[1],o=i[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(o)var d=o(a)}for(e&&e(i);c<n.length;c++)s=n[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(d)},i=self["webpackChunkasg1"]=self["webpackChunkasg1"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(5276)}));i=a.O(i)})();
//# sourceMappingURL=app.00b77e90.js.map