"use strict";(self["webpackChunkasg1"]=self["webpackChunkasg1"]||[]).push([[443],{7882:function(t,e,a){a.r(e),a.d(e,{default:function(){return V}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.parsedCSVFile,expression:"parsedCSVFile"}]},[a("h1",{attrs:{width:""}},[t._v("Generate some charts")]),a("div",{staticClass:"d-flex flex-wrap"},[a("LoadingScreen",{attrs:{isLoading:t.isLoading}}),a("v-card",{staticClass:"ma-1",attrs:{outlined:"",tile:"",elevation:"5",width:"30%","min-width":"350px"}},[a("v-card-title",[t._v("Controls")]),a("v-card",{attrs:{outlined:"",tile:"",elevation:"3"}},[a("v-card-subtitle",[t._v(" Display Charts ")]),a("v-card-actions",{staticClass:"d-flex align-start"},t._l(t.renderChart,(function(e,s){return a("v-checkbox",{key:s,staticClass:"ma-0",attrs:{label:e.chart},model:{value:e.visible,callback:function(a){t.$set(e,"visible",a)},expression:"chart.visible"}})})),1)],1),a("v-card",{attrs:{outlined:"",tile:"",elevation:"3"}},[a("v-card-title",[t._v(" Select Class ")]),a("v-card-actions",{staticClass:"d-flex align-start"},[a("v-select",{attrs:{items:t.labels,"item-text":"name"},on:{change:t.redrawCharts2},model:{value:t.selectedClass,callback:function(e){t.selectedClass=e},expression:"selectedClass"}})],1)],1),a("v-card",{attrs:{outlined:"",tile:"",elevation:"3"}},[a("v-card-title",[t._v(" Select Axis ")]),a("v-card-actions",{staticClass:"d-flex align-start"},[t._v(" X:"),a("v-select",{attrs:{items:t.labels},on:{change:t.redrawCharts2},model:{value:t.selectedX,callback:function(e){t.selectedX=e},expression:"selectedX"}}),t._v(" Y:"),a("v-select",{attrs:{items:t.labels},on:{change:t.redrawCharts2},model:{value:t.selectedY,callback:function(e){t.selectedY=e},expression:"selectedY"}})],1)],1)],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.renderChart[0].visible,expression:"renderChart[0].visible"}],staticClass:"ma-1",staticStyle:{overflow:"auto"},attrs:{outlined:"",tile:"",elevation:"5",width:"30%","min-width":"350px"}},[a("v-card-title",[t._v("Table")]),a("div",{attrs:{id:"table"}})],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.renderChart[1].visible,expression:"renderChart[1].visible"}],staticClass:"ma-1",staticStyle:{overflow:"auto"},attrs:{outlined:"",tile:"",elevation:"5",width:"30%","min-width":"350px"}},[a("v-card-title",[t._v("Scatter")]),a("div",{staticStyle:{width:"100%"},attrs:{id:"scatter"}})],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.renderChart[2].visible,expression:"renderChart[2].visible"}],staticClass:"ma-1",staticStyle:{overflow:"auto"},attrs:{outlined:"",tile:"",elevation:"5",width:"30%","min-width":"350px"}},[a("v-card-title",[t._v("Histogram")]),a("div",{staticStyle:{width:"100%"},attrs:{id:"bar"}})],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.renderChart[3].visible,expression:"renderChart[3].visible"}],staticClass:"ma-1",staticStyle:{overflow:"auto"},attrs:{outlined:"",tile:"",elevation:"5",width:"30%","min-width":"350px"}},[a("v-card-title",[t._v("Pie")]),a("div",{staticStyle:{width:"100%"},attrs:{id:"pie"}})],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.renderChart[4].visible,expression:"renderChart[4].visible"}],staticClass:"ma-1",staticStyle:{overflow:"auto"},attrs:{outlined:"",tile:"",elevation:"5",width:"30%","min-width":"350px"}},[a("v-card-title",[t._v("Line")]),a("div",{staticStyle:{width:"100%"},attrs:{id:"line"}})],1)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.parsedCSVFile,expression:"!parsedCSVFile"}]},[a("v-file-input",{attrs:{accept:"text/csv",label:"Choose a file..."},on:{change:t.parseInput}})],1)])},i=[],l=a(2479),r=a.n(l),n=a(8399),h={components:{LoadingScreen:n.Z},data:()=>({isLoading:!0,dataFile:null,renderChart:[{chart:"Table",visible:!0},{chart:"Scatter",visible:!0},{chart:"Bar",visible:!0},{chart:"Pie",visible:!0},{chart:"Line",visible:!0}],labels:[],selectedClass:"",selectedX:"",selectedY:"",parsedCSVFile:"",graphData:{table:{data:[{type:"table",header:{values:[],align:"center",fill:{color:"grey"},font:{color:"white"}},cells:{values:[],align:"center"}}],layout:{autosize:!1}},scatter:{data:[{x:[],y:[],type:"scatter",mode:"markers"}],layout:{autosize:!0,xaxis:{title:{text:""}},yaxis:{title:{text:""}}}},bar:{data:[],layout:{autosize:!0,xaxis:{title:{text:"Class"}},yaxis:{title:{text:"Dimensions"}}}},pie:{data:[{values:[],labels:[],type:"pie"}],layout:{autosize:!0}},line:{data:[],layout:{autosize:!0,xaxis:{title:{text:""}},yaxis:{title:{text:""}}}}}}),methods:{parseInput(t){const e=new FileReader;this.isLoading=!0,e.readAsText(t),e.onload=t=>{this.parsedCSVFile=t.target.result,this.parseIntoTable(this.parsedCSVFile),this.redrawCharts(this.parsedCSVFile),setTimeout((()=>this.redrawCharts2()),500)}},loadCSVData(t){const e={method:"GET"};return fetch(t,e).then((t=>t.text()))},parseIntoTable(t){let e=t.split(/\r?\n/);e.forEach(((t,a)=>{if(0===a){let e=t.split(",");this.graphData.table.data[0].header.values=e;for(let t=0;t<e.length;t++)this.graphData.table.data[0].cells.values.push([]),this.labels.push(e[t]);this.selectedX=e[1],this.selectedY=e[2],this.selectedClass=e[e.length-1]}else if(a<e.length-1){let e=t.split(",");e.forEach(((t,e)=>{this.graphData.table.data[0].cells.values[e].push(t)}))}}))},parseIntoScatter(t){let e,a,s,i=t.split(/\r?\n/),l=i[0].split(","),r=[],n=[];l.forEach(((t,i)=>{t==this.selectedClass&&(e=i),t==this.selectedX&&(a=i,this.graphData.scatter.layout.xaxis.title.text=t),t==this.selectedY&&(s=i,this.graphData.scatter.layout.yaxis.title.text=t)}));for(let h=1;h<i.length-1;h++){let t=i[h].split(",");r.includes(t[e])||(r.push(t[e]),n.push({name:t[e],x:[],y:[],mode:"markers",type:"scatter"}))}for(let h=1;h<i.length-1;h++){let t=i[h].split(",");n[r.indexOf(t[e])].x.push(t[a]),n[r.indexOf(t[e])].y.push(t[s])}this.graphData.scatter.data=n},parseIntoBar(t){let e,a,s,i=t.split(/\r?\n/),l=i[0].split(","),r=[],n=[];l.forEach(((t,i)=>{t==this.selectedClass&&(e=i),t==this.selectedX&&(a=i,this.graphData.bar.layout.xaxis.title.text=t),t==this.selectedY&&(s=i,this.graphData.bar.layout.yaxis.title.text=t)}));for(let h=1;h<i.length-1;h++){let t=i[h].split(",");r.includes(t[e])||(r.push(t[e]),n.push({name:t[e],x:[],y:[],type:"bar"}))}for(let h=1;h<i.length-1;h++){let t=i[h].split(",");n[r.indexOf(t[e])].x.push(t[a]),n[r.indexOf(t[e])].y.push(t[s])}this.graphData.bar.data=n},parseIntoPie(t){let e,a=t.split(/\r?\n/),s=a[0].split(","),i=[],l=[];s.forEach(((t,a)=>{t==this.selectedClass&&(e=a)}));for(let r=1;r<a.length-1;r++){let t=a[r].split(",");if(i.includes(t[e])){let a=i.indexOf(t[e]);l[a]+=1}else i.push(t[e]),l.push(1)}this.graphData.pie.data[0].values=l,this.graphData.pie.data[0].labels=i},parseIntoLine(t){let e,a,s,i=t.split(/\r?\n/),l=i[0].split(","),r=[],n=[];l.forEach(((t,i)=>{t==this.selectedClass&&(e=i),t==this.selectedX&&(a=i,this.graphData.line.layout.xaxis.title.text=t),t==this.selectedY&&(s=i,this.graphData.line.layout.yaxis.title.text=t)}));for(let h=1;h<i.length-1;h++){let t=i[h].split(",");r.includes(t[e])||(r.push(t[e]),n.push({name:t[e],x:[],y:[],type:"scatter"}))}for(let h=1;h<i.length-1;h++){let t=i[h].split(",");n[r.indexOf(t[e])].x.push(t[a]),n[r.indexOf(t[e])].y.push(t[s])}this.graphData.line.data=n},redrawCharts(t){this.isLoading=!0,this.parseIntoPie(t),this.parseIntoScatter(t),this.parseIntoLine(t),this.parseIntoBar(t),this.plotCharts(),this.isLoading=!1},redrawCharts2(){this.isLoading=!0,this.parseIntoPie(this.parsedCSVFile),this.parseIntoScatter(this.parsedCSVFile),this.parseIntoLine(this.parsedCSVFile),this.parseIntoBar(this.parsedCSVFile),this.plotCharts(),this.isLoading=!1},plotCharts(){r().newPlot("table",this.graphData.table.data,this.graphData.table.layout),r().newPlot("pie",this.graphData.pie.data,this.graphData.pie.layout),r().newPlot("scatter",this.graphData.scatter.data,this.graphData.scatter.layout),r().newPlot("line",this.graphData.line.data,this.graphData.line.layout),r().newPlot("bar",this.graphData.bar.data,this.graphData.bar.layout)}}},o=h,d=a(1001),c=a(3453),p=a.n(c),u=a(3237),v=a(7118),y=a(9362),g=a(5978),m=g.Z,f=a(5424),b=a(4589),x=a(1824),C=a(6290),w=m.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>(0,b.TI)(t).every((t=>null!=t&&"object"===typeof t))}},computed:{classes(){return{...m.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce(((t,{size:e=0})=>t+e),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,b.XE)(e,1024===this.base))},internalArrayValue(){return(0,b.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((t=>{const{name:e="",size:a=0}=t,s=this.truncateText(e);return this.showSize?`${s} (${(0,b.XE)(a,1024===this.base)})`:s})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&(0,x.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];(0,b.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((t,e)=>this.$createElement(f.Z,{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t]))):[]},genControl(){const t=m.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,C.y0)(t.data.style,{display:"none"})),t},genInput(){const t=m.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((e,a)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[a],file:e,index:a}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=m.options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:()=>this.$refs.input.click()},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}}),S=a(9043),D=(0,d.Z)(o,s,i,!1,null,null,null),V=D.exports;p()(D,{VCard:u.Z,VCardActions:v.h7,VCardSubtitle:v.Qq,VCardTitle:v.EB,VCheckbox:y.Z,VFileInput:w,VSelect:S.Z})},2278:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("COVID-19 In Brunei")]),a("h2",[t._v("For the past 30 Days")]),a("LoadingScreen",{attrs:{isLoading:t.isLoading}}),a("v-container",{staticClass:"d-flex flex-wrap",attrs:{fluid:""}},[a("v-card",{staticClass:"ma-1",staticStyle:{overflow:"auto"},attrs:{"min-width":"350px",width:"30%"}},[a("v-card-title",[t._v("Table Of Cases For Past 30 Days")]),a("div",{attrs:{id:"table"}})],1),a("v-card",{staticClass:"ma-1",staticStyle:{overflow:"auto"},attrs:{"min-width":"350px",width:"30%"}},[a("v-card-title",[t._v("Average Cases, Deaths and Recoveries for Past 30 Days")]),a("div",{staticStyle:{width:"100%"},attrs:{id:"pie"}})],1),a("v-card",{staticClass:"ma-1",staticStyle:{overflow:"auto"},attrs:{"min-width":"350px",width:"30%"}},[a("v-card-title",[t._v("Line Chart of Cases For Past 30 Days")]),a("div",{staticStyle:{width:"100%"},attrs:{id:"line"}})],1),a("v-card",{staticClass:"ma-1",staticStyle:{overflow:"auto"},attrs:{"min-width":"350px",width:"30%"}},[a("v-card-title",[t._v("Histogram of Cases for Past 30 Days")]),a("div",{staticStyle:{width:"100%"},attrs:{id:"bar"}})],1),a("v-card",{staticClass:"ma-1",staticStyle:{overflow:"auto"},attrs:{"min-width":"350px",width:"30%"}},[a("v-card-title",[t._v("Scatter Chart of Cases for Past 30 Days")]),a("div",{staticStyle:{width:"100%"},attrs:{id:"scatter"}})],1)],1)],1)},i=[],l=a(2479),r=a.n(l),n=a(8399),h={components:{LoadingScreen:n.Z},data:()=>({isLoading:!0,graphData:{table:{data:[{type:"table",header:{values:[["<b>Date</b>"],["<b>Cases</b>"],["<b>Deaths</b>"],["<b>Recovered</b>"]],align:"center",fill:{color:"aqua"}},cells:{values:[]}}],layout:{autosize:!1}},pie:{data:[{values:[],labels:["Cases","Deaths","Recovered"],type:"pie"}],layout:{}},line:{data:[],layout:{}},scatter:{data:[],layout:{}},bar:{data:[],layout:{}}}}),created(){fetch("https://corona.lmao.ninja/v2/historical/Brunei?lastdays=30").then((t=>t.json())).then((t=>{this.isLoading=!0,this.renderTable(t),this.renderPie(t),this.renderLine(t),this.renderBar(t),this.renderScatter(t),this.drawCharts(),this.isLoading=!1}))},methods:{renderTable(t){const e=Object.keys(t.timeline.cases),a=Object.values(t.timeline.cases),s=Object.values(t.timeline.deaths),i=Object.values(t.timeline.recovered);this.graphData.table.data[0].cells.values.push(e),this.graphData.table.data[0].cells.values.push(a),this.graphData.table.data[0].cells.values.push(s),this.graphData.table.data[0].cells.values.push(i)},renderPie(t){const e=Math.ceil(Object.values(t.timeline.cases).reduce(((t,e)=>t+e),0)/30);this.graphData.pie.data[0].values.push(e);const a=Math.ceil(Object.values(t.timeline.deaths).reduce(((t,e)=>t+e),0)/30);this.graphData.pie.data[0].values.push(a);const s=Math.ceil(Object.values(t.timeline.recovered).reduce(((t,e)=>t+e),0)/30);this.graphData.pie.data[0].values.push(s)},renderScatter(t){const e=Object.keys(t.timeline.cases),a=Object.values(t.timeline.cases),s=Object.values(t.timeline.deaths),i=Object.values(t.timeline.recovered);this.graphData.scatter.data[0]={x:e,y:a,type:"scatter",mode:"markers",name:"Cases"},this.graphData.scatter.data[1]={x:e,y:s,type:"scatter",mode:"markers",name:"Deaths"},this.graphData.scatter.data[2]={x:e,y:i,type:"scatter",mode:"markers",name:"Recoveries"}},renderLine(t){const e=Object.keys(t.timeline.cases),a=Object.values(t.timeline.cases),s=Object.values(t.timeline.deaths),i=Object.values(t.timeline.recovered);this.graphData.line.data[0]={x:e,y:a,type:"scatter",name:"Cases"},this.graphData.line.data[1]={x:e,y:s,type:"scatter",name:"Deaths"},this.graphData.line.data[2]={x:e,y:i,type:"scatter",name:"Recoveries"}},renderBar(t){const e=Object.keys(t.timeline.cases),a=Object.values(t.timeline.cases),s=Object.values(t.timeline.deaths),i=Object.values(t.timeline.recovered);this.graphData.bar.data[0]={x:e,y:a,type:"bar",name:"Cases"},this.graphData.bar.data[1]={x:e,y:s,type:"bar",name:"Deaths"},this.graphData.bar.data[2]={x:e,y:i,type:"bar",name:"Recoveries"}},drawCharts(){r().newPlot("table",this.graphData.table.data,this.graphData.table.layout),r().newPlot("pie",this.graphData.pie.data,this.graphData.pie.layout),r().newPlot("scatter",this.graphData.scatter.data,this.graphData.scatter.layout),r().newPlot("line",this.graphData.line.data,this.graphData.line.layout),r().newPlot("bar",this.graphData.bar.data,this.graphData.bar.layout)}}},o=h,d=a(1001),c=a(3453),p=a.n(c),u=a(3237),v=a(7118),y=(a(8582),a(144));function g(t){return y.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:s,children:i}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:l}=s;if(l){s.attrs={};const t=Object.keys(l).filter((t=>{if("slot"===t)return!1;const e=l[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),e(a.tag,s,i)}})}var m=a(6290),f=g("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:s}){let i;const{attrs:l}=a;return l&&(a.attrs={},i=Object.keys(l).filter((t=>{if("slot"===t)return!1;const e=l[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,(0,m.ZP)(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),s)}}),b=(0,d.Z)(o,s,i,!1,null,null,null),x=b.exports;p()(b,{VCard:u.Z,VCardTitle:v.EB,VContainer:f})}}]);
//# sourceMappingURL=about.0eeb8e9d.js.map