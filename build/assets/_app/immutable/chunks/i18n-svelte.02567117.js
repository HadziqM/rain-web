import{w as m,d as y}from"./index.58d4b228.js";import{l as E,a as O}from"./i18n-util.b0b8c982.js";var g=()=>new Proxy(Object.assign(()=>"",{}),{get:(t,e)=>e==="length"?0:g()}),_=t=>Object.fromEntries(Object.entries(t).map(([e,r])=>e!=="i"&&r&&r!="0"&&[e,r]).filter(Boolean)),k=t=>Object.fromEntries(Object.keys(t).map(e=>{const r=t[e];return[e,Array.isArray(r)?r.map(s=>s==null?void 0:s.trim()):r===!!r?r:r==null?void 0:r.trim()]})),h=t=>{const[e="",...r]=t.split("|"),[s="",n]=e.split(":"),[o,i]=s.split("?");return{k:o,i:n,n:i==="",f:r}},j=t=>!!(t.o||t.r),L=(t,e)=>{let[r,s]=t.split(":");s||(s=r,r=e);const n=s.split("|"),[o,i,a,l,b,d]=n,c=n.filter(P=>P!==void 0).length;return c===1?{k:r,r:o}:c===2?{k:r,o,r:i}:c===3?{k:r,z:o,o:i,r:a}:{k:r,z:o,o:i,t:a,f:l,m:b,r:d}},w=/^\{.*\}$/,A=t=>Object.fromEntries(u(t).split(",").map(e=>e.split(":")).reduce((e,r)=>r.length===2?[...e,r.map(s=>s.trim())]:(e[e.length-1][1]+=","+r[0],e),[])),f=/(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g,u=t=>t.substring(1,t.length-1),R=(t,e=!0,r="",s="")=>t.split(f).map(n=>{if(!n.match(f))return n;const o=u(n);if(o.startsWith("{"))return L(u(o),s);const i=h(o);return s=i.k||s,!r&&(r=s),i}).map(n=>{if(typeof n=="string")return n;n.k||(n.k=r||"0");const o=k(n);return e?_(o):o}),S=(t,e,r)=>e.reduce((s,n)=>{var o,i;return(i=n.match(w)?(a=>{var l;return(l=a[s])!=null?l:a["*"]})(A(n)):(o=t[n])==null?void 0:o.call(t,s))!=null?i:s},r),I=(t,{z:e,o:r,t:s,f:n,m:o,r:i},a)=>{switch(e&&a==0?"zero":t.select(a)){case"zero":return e;case"one":return r;case"two":return s;case"few":return n;case"many":return o;default:return i}},T=/\?\?/g,C=(t,e,r,s)=>t.map(n=>{if(typeof n=="string")return n;const{k:o="0",f:i=[]}=n,a=s[o];if(j(n))return((typeof a=="boolean"?a?n.o:n.r:I(e,n,a))||"").replace(T,a);const l=i.length?S(r,i,a):a;return(""+(l??"")).trim()}).join(""),z=(t,e,r,s)=>{const n=s[0],o=n&&typeof n=="object"&&n.constructor===Object,i=s.length===1&&o?n:s;return C(t,e,r,i)},B=(t,e)=>t[e]||(t[e]=R(e)),V=(t,e)=>{const r={},s=new Intl.PluralRules(t);return(n,...o)=>z(B(r,n),s,e,o)};function G(t,e,r={}){return p(e,V(t,r))}var v=(t={},e)=>typeof t=="string"?e.bind(null,t):Object.assign(Object.defineProperty(()=>"","name",{writable:!0}),t),p=(t,e)=>new Proxy(v(t,e),{get:(r,s)=>s===Symbol.iterator?[][Symbol.iterator].bind(Object.values(r).map(n=>v(n,e))):p(r[s],e)}),W=(t,e={})=>{const r=m(),s=m(g()),n=y(r,(a,l)=>l(a)),o=new Proxy({},{get:(a,l)=>l==="subscribe"?s.subscribe:s[l]});return{locale:n,LL:o,setLocale:a=>{r.set(a),s.set(G(a,t[a],e[a]))}}};const{locale:F,LL:N,setLocale:U}=W(O,E);export{N as L,F as l,U as s};
