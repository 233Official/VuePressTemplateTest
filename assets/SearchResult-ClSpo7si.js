import{u as j,g as se,h as le,i as U,j as te,k as ae,t as ie,l as ue,m as q,n as f,p as re,w as W,q as l,v as ne,R as b,x as oe,y as ce,z as ve,A as he,B as me,C as de,D as ye,E as pe,F as Ee,G as Ae,H as ge,I as M,J as I,K as Le,L as F,M as xe}from"./app-D0TqJp38.js";const He=["/","/NoteTools/Markdown.html","/NoteTools/Mermaid.html","/NoteTools/Notion.html","/NoteTools/PlantUML.html","/NoteTools/VitePress.html","/NoteTools/VuePress.html","/NoteTools/Word.html","/%E9%80%9A%E8%AF%86/%E9%80%9A%E8%AF%86.html","/NoteTools/LaTex/","/%E9%80%9A%E8%AF%86/Linux/Linux%E6%9C%8D%E5%8A%A1%E5%99%A8.html","/%E9%80%9A%E8%AF%86/Linux/Linux%E8%BD%AF%E4%BB%B6%E7%AE%A1%E7%90%86.html","/%E9%80%9A%E8%AF%86/Linux/SSH.html","/%E9%80%9A%E8%AF%86/Linux/Shell.html","/%E9%80%9A%E8%AF%86/Linux/","/%E9%80%9A%E8%AF%86/Linux/%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7.html","/%E9%80%9A%E8%AF%86/Linux/%E7%BD%91%E7%BB%9C%E9%85%8D%E7%BD%AE.html","/%E9%80%9A%E8%AF%86/Linux/WSL/WSL2.html","/404.html","/NoteTools/","/%E9%80%9A%E8%AF%86/","/%E9%80%9A%E8%AF%86/Linux/WSL/","/category/","/tag/","/article/","/star/","/timeline/"],fe="SLIMSEARCH_QUERY_HISTORY",p=j(fe,[]),Fe=()=>{const{queryHistoryCount:t}=F,a=t>0;return{enabled:a,queryHistories:p,addQueryHistory:i=>{a&&(p.value=Array.from(new Set([i,...p.value.slice(0,t-1)])))},removeQueryHistory:i=>{p.value=[...p.value.slice(0,i),...p.value.slice(i+1)]}}},D=t=>He[t.id]+("anchor"in t?`#${t.anchor}`:""),Se="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:P}=F,E=j(Se,[]),Re=()=>{const t=P>0;return{enabled:t,resultHistories:E,addResultHistory:a=>{if(t){const i={link:D(a),display:a.display};"header"in a&&(i.header=a.header),E.value=[i,...E.value.slice(0,P-1)]}},removeResultHistory:a=>{E.value=[...E.value.slice(0,a),...E.value.slice(a+1)]}}},ke=t=>{const a=he(),i=U(),S=me(),r=q(0),g=f(()=>r.value>0),d=de([]);return ye(()=>{const{search:y,terminate:R}=pe(),A=Le(o=>{const{resultsFilter:L=n=>n,querySplitter:B,suggestionsFilter:k,...w}=a.value;o?(r.value+=1,y(o,i.value,w).then(n=>L(n,o,i.value,S.value)).then(n=>{r.value-=1,d.value=n}).catch(n=>{console.warn(n),r.value-=1,r.value||(d.value=[])})):d.value=[]},F.searchDelay-F.suggestDelay,{maxWait:5e3});W([t,i],([o])=>{A(o.join(" "))},{immediate:!0}),Ee(()=>{R()})}),{isSearching:g,results:d}};var Ce=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:a}){const i=le(),S=U(),r=te(ae),{enabled:g,addQueryHistory:d,queryHistories:y,removeQueryHistory:R}=Fe(),{enabled:A,resultHistories:o,addResultHistory:L,removeResultHistory:B}=Re(),k=g||A,w=ie(t,"queries"),{results:n,isSearching:O}=ke(w),u=ue({isQuery:!0,index:0}),h=q(0),m=q(0),N=f(()=>k&&(y.value.length>0||o.value.length>0)),C=f(()=>n.value.length>0),Q=f(()=>n.value[h.value]||null),V=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?o.value.length-1:y.value.length-1):u.index=s-1},Y=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:o.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},_=()=>{h.value=h.value>0?h.value-1:n.value.length-1,m.value=Q.value.contents.length-1},z=()=>{h.value=h.value<n.value.length-1?h.value+1:0,m.value=0},G=()=>{m.value<Q.value.contents.length-1?m.value+=1:z()},J=()=>{m.value>0?m.value-=1:_()},T=e=>e.map(s=>xe(s)?s:l(s[0],s[1])),K=e=>{if(e.type==="customField"){const s=Ae[e.index]||"$content",[c,H=""]=ge(s)?s[S.value].split("$content"):s.split("$content");return e.display.map(v=>l("div",T([c,...v,H])))}return e.display.map(s=>l("div",T(s)))},x=()=>{h.value=0,m.value=0,a("updateQuery",""),a("close")},X=()=>g?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},r.value.queryHistory),y.value.map((e,s)=>l("div",{class:["slimsearch-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{a("updateQuery",e)}},[l(M,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},e),l("button",{class:"slimsearch-remove-icon",innerHTML:I,onClick:c=>{c.preventDefault(),c.stopPropagation(),R(s)}})]))])):null,Z=()=>A?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},r.value.resultHistory),o.value.map((e,s)=>l(b,{to:e.link,class:["slimsearch-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{x()}},()=>[l(M,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(c=>T(c)).flat())]),l("button",{class:"slimsearch-remove-icon",innerHTML:I,onClick:c=>{c.preventDefault(),c.stopPropagation(),B(s)}})]))])):null;return re("keydown",e=>{if(t.isFocusing){if(C.value){if(e.key==="ArrowUp")J();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const s=Q.value.contents[m.value];d(t.queries.join(" ")),L(s),i.push(D(s)),x()}}else if(A){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")Y();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(a("updateQuery",y.value[s]),e.preventDefault()):(i.push(o.value[s].link),x())}}}}),W([h,m],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["slimsearch-result-wrapper",{empty:t.queries.length?!C.value:!N.value}],id:"slimsearch-results"},t.queries.length?O.value?l(ne,{hint:r.value.searching}):C.value?l("ul",{class:"slimsearch-result-list"},n.value.map(({title:e,contents:s},c)=>{const H=h.value===c;return l("li",{class:["slimsearch-result-list-item",{active:H}]},[l("div",{class:"slimsearch-result-title"},e||r.value.defaultTitle),s.map((v,ee)=>{const $=H&&m.value===ee;return l(b,{to:D(v),class:["slimsearch-result-item",{active:$,"aria-selected":$}],onClick:()=>{d(t.queries.join(" ")),L(v),x()}},()=>[v.type==="text"?null:l(v.type==="title"?oe:v.type==="heading"?ce:ve,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[v.type==="text"&&v.header?l("div",{class:"content-header"},v.header):null,l("div",K(v))])])})])})):r.value.emptyResult:k?N.value?[X(),Z()]:r.value.emptyHistory:r.value.emptyResult)}});export{Ce as default};
