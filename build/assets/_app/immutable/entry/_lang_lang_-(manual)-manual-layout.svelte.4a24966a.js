import{S as oe,b as ie,a as ce,m as _,p as h,q as b,k as u,u as r,f as M,n as Z,P as we,Q as x,o as Me,w as he,c as E,x as de,d as L,R as ve,N as c,O as pe,y as ge,C as ae,D as re,E as ne,j as te,g as le,F as se,r as Ae,T as Oe,U as Se,V as Ge,M as J,G as Pe,e as be,L as je,H as He,I as Be,J as Ue}from"../chunks/index.1abc9ca4.js";import{L as ue,l as Ne,s as De}from"../chunks/i18n-svelte.02567117.js";import{l as Te,t as Ke,s as Re}from"../chunks/main.6ab22d63.js";import{A as Ve}from"../chunks/Alternate.5c066878.js";function $e(s,e,t){const a=s.slice();return a[5]=e[t][0],a[6]=e[t][1].main_name,a[7]=e[t][1].sub_name,a}function ke(s){let e,t,a=s[6]()+"",l,i,n,p=s[7]()+"",f,o,d,g;function w(){return s[4](s[5])}return{c(){e=_("button"),t=_("span"),l=he(a),i=E(),n=_("span"),f=he(p),o=E(),this.h()},l(v){e=h(v,"BUTTON",{class:!0});var $=b(e);t=h($,"SPAN",{class:!0});var N=b(t);l=de(N,a),N.forEach(u),i=L($),n=h($,"SPAN",{class:!0});var y=b(n);f=de(y,p),y.forEach(u),o=L($),$.forEach(u),this.h()},h(){r(t,"class","language_mainName"),r(n,"class","language_subName"),r(e,"class","LANG language_names"),ve(e,"lang_selected",s[5]===s[3])},m(v,$){M(v,e,$),c(e,t),c(t,l),c(e,i),c(e,n),c(n,f),c(e,o),d||(g=pe(e,"click",w),d=!0)},p(v,$){s=v,$&4&&a!==(a=s[6]()+"")&&ge(l,a),$&4&&p!==(p=s[7]()+"")&&ge(f,p),$&12&&ve(e,"lang_selected",s[5]===s[3])},d(v){v&&u(e),d=!1,g()}}}function We(s){let e,t=Object.entries(s[2].header.lang_sel),a=[];for(let l=0;l<t.length;l+=1)a[l]=ke($e(s,t,l));return{c(){e=_("dl");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=h(l,"DL",{class:!0});var i=b(e);for(let n=0;n<a.length;n+=1)a[n].l(i);i.forEach(u),this.h()},h(){r(e,"class","language_selectArea_list")},m(l,i){M(l,e,i);for(let n=0;n<a.length;n+=1)a[n].m(e,null)},p(l,[i]){if(i&15){t=Object.entries(l[2].header.lang_sel);let n;for(n=0;n<t.length;n+=1){const p=$e(l,t,n);a[n]?a[n].p(p,i):(a[n]=ke(p),a[n].c(),a[n].m(e,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=t.length}},i:Z,o:Z,d(l){l&&u(e),we(a,l)}}}function Je(s,e,t){let a,l;x(s,ue,f=>t(2,a=f)),x(s,Ne,f=>t(3,l=f));let i="",n="";return Me(()=>{const f=location.pathname;let o,d;([,,o="",d=""]=f.split("/").filter(Boolean)).length>2&&(t(0,i=o.concat("/")),t(1,n=d.concat("/")))}),[i,n,a,l,f=>Te(f,i,n)]}class qe extends oe{constructor(e){super(),ie(this,e,Je,We,ce,{})}}function ze(s){let e,t,a,l,i,n,p,f,o,d,g,w=s[1].header.now_lang()+"",v,$,N,y,S,B,j,q;return S=new qe({}),{c(){e=_("div"),t=_("label"),a=E(),l=_("p"),i=_("button"),n=E(),p=_("aside"),f=_("ul"),o=_("button"),d=_("p"),g=_("span"),v=he(w),$=E(),N=_("li"),y=_("ul"),ae(S.$$.fragment),this.h()},l(A){e=h(A,"DIV",{class:!0});var I=b(e);t=h(I,"LABEL",{class:!0}),b(t).forEach(u),a=L(I),l=h(I,"P",{class:!0});var K=b(l);i=h(K,"BUTTON",{class:!0}),b(i).forEach(u),K.forEach(u),n=L(I),p=h(I,"ASIDE",{class:!0});var R=b(p);f=h(R,"UL",{});var G=b(f);o=h(G,"BUTTON",{class:!0});var z=b(o);d=h(z,"P",{});var V=b(d);g=h(V,"SPAN",{class:!0});var H=b(g);v=de(H,w),H.forEach(u),V.forEach(u),z.forEach(u),$=L(G),N=h(G,"LI",{class:!0});var W=b(N);y=h(W,"UL",{class:!0});var U=b(y);re(S.$$.fragment,U),U.forEach(u),W.forEach(u),G.forEach(u),R.forEach(u),I.forEach(u),this.h()},h(){r(t,"class","header_platform"),r(i,"class","header_logo_button"),r(l,"class","header_logo"),r(g,"class","current_language"),r(o,"class","header_language_selector"),r(y,"class","language_selectArea slidable_on_mobile"),r(N,"class","lang_sel_judge"),r(p,"class","header_language"),r(e,"class","header_inner")},m(A,I){M(A,e,I),c(e,t),c(e,a),c(e,l),c(l,i),c(e,n),c(e,p),c(p,f),c(f,o),c(o,d),c(d,g),c(g,v),c(f,$),c(f,N),c(N,y),ne(S,y,null),B=!0,j||(q=[pe(i,"click",s[2]),pe(o,"click",Ke)],j=!0)},p(A,[I]){(!B||I&2)&&w!==(w=A[1].header.now_lang()+"")&&ge(v,w)},i(A){B||(te(S.$$.fragment,A),B=!0)},o(A){le(S.$$.fragment,A),B=!1},d(A){A&&u(e),se(S),j=!1,Ae(q)}}}function Ce(s,e,t){let a,l;return x(s,Ne,n=>t(0,a=n)),x(s,ue,n=>t(1,l=n)),[a,l,()=>Te(a)]}class Fe extends oe{constructor(e){super(),ie(this,e,Ce,ze,ce,{})}}function Ee(s,e,t){const a=s.slice();return a[3]=e[t][0],a[4]=e[t][1].svg_path,a[5]=e[t][1].text,a}function Le(s){let e,t,a=s[4]()+"",l,i=s[5]()+"",n,p,f;return{c(){e=_("li"),t=Oe("svg"),l=E(),n=he(i),p=E(),this.h()},l(o){e=h(o,"LI",{id:!0,class:!0});var d=b(e);t=Se(d,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var g=b(t);g.forEach(u),l=L(d),n=de(d,i),p=L(d),d.forEach(u),this.h()},h(){r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"class","icon icon-tabler icon-tabler-category"),r(t,"width","24"),r(t,"height","24"),r(t,"viewBox","0 0 24 24"),r(t,"stroke-width","2"),r(t,"stroke","currentColor"),r(t,"fill","none"),r(t,"stroke-linecap","round"),r(t,"stroke-linejoin","round"),r(e,"id",f=s[3]),r(e,"class","btm_nav_item")},m(o,d){M(o,e,d),c(e,t),t.innerHTML=a,c(e,l),c(e,n),c(e,p)},p(o,d){d&1&&a!==(a=o[4]()+"")&&(t.innerHTML=a),d&1&&i!==(i=o[5]()+"")&&ge(n,i),d&1&&f!==(f=o[3])&&r(e,"id",f)},d(o){o&&u(e)}}}function Qe(s){let e,t=Object.entries(s[0].bottom_nav),a=[];for(let l=0;l<t.length;l+=1)a[l]=Le(Ee(s,t,l));return{c(){e=_("ul");for(let l=0;l<a.length;l+=1)a[l].c()},l(l){e=h(l,"UL",{});var i=b(e);for(let n=0;n<a.length;n+=1)a[n].l(i);i.forEach(u)},m(l,i){M(l,e,i);for(let n=0;n<a.length;n+=1)a[n].m(e,null)},p(l,[i]){if(i&1){t=Object.entries(l[0].bottom_nav);let n;for(n=0;n<t.length;n+=1){const p=Ee(l,t,n);a[n]?a[n].p(p,i):(a[n]=Le(p),a[n].c(),a[n].m(e,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=t.length}},i:Z,o:Z,d(l){l&&u(e),we(a,l)}}}function Ye(s,e,t){let a;x(s,ue,n=>t(0,a=n));let l=!1;const i=()=>{const n=window.pageYOffset>150;n!==l&&t(1,l=n)};return Me(()=>{window.addEventListener("scroll",i)}),s.$$.update=()=>{s.$$.dirty&2&&document.querySelector(".bottom_navigations").classList.toggle("nav_hide",l)},[a,l]}class Xe extends oe{constructor(e){super(),ie(this,e,Ye,Qe,ce,{})}}function Ze(s){let e,t,a=s[3].landscape_mode()+"",l,i,n,p,f,o,d,g,w,v,$,N,y,S,B,j,q,A,I,K,R,G,z,V,H,W,U,D,Y,F,Q,me,ee,O,fe,X,C;return Ge(s[4]),{c(){e=_("div"),t=_("span"),l=he(a),i=E(),n=_("img"),f=E(),o=_("div"),d=_("img"),w=E(),v=_("img"),N=E(),y=_("img"),B=E(),j=_("img"),A=E(),I=_("img"),R=E(),G=_("img"),V=E(),H=_("img"),U=E(),D=_("img"),F=E(),Q=_("img"),ee=E(),O=_("img"),this.h()},l(m){e=h(m,"DIV",{class:!0});var k=b(e);t=h(k,"SPAN",{class:!0});var _e=b(t);l=de(_e,a),_e.forEach(u),i=L(k),n=h(k,"IMG",{src:!0,alt:!0,class:!0}),f=L(k),o=h(k,"DIV",{class:!0});var T=b(o);d=h(T,"IMG",{src:!0,alt:!0}),w=L(T),v=h(T,"IMG",{src:!0,alt:!0}),N=L(T),y=h(T,"IMG",{src:!0,alt:!0}),B=L(T),j=h(T,"IMG",{src:!0,alt:!0}),A=L(T),I=h(T,"IMG",{src:!0,alt:!0}),R=L(T),G=h(T,"IMG",{src:!0,alt:!0}),V=L(T),H=h(T,"IMG",{src:!0,alt:!0}),U=L(T),D=h(T,"IMG",{src:!0,alt:!0}),F=L(T),Q=h(T,"IMG",{src:!0,alt:!0}),ee=L(T),O=h(T,"IMG",{src:!0,alt:!0}),T.forEach(u),k.forEach(u),this.h()},h(){r(t,"class","rotate_text"),J(n.src,p="/img/common/landscape/rotate_device.webp")||r(n,"src",p),r(n,"alt","rotate"),r(n,"class","rotate_device"),J(d.src,g="/img/common/landscape/now_waiting_N1.webp")||r(d,"src",g),r(d,"alt","N"),J(v.src,$="/img/common/landscape/now_waiting_O.webp")||r(v,"src",$),r(v,"alt","O"),J(y.src,S="/img/common/landscape/now_waiting_W1.webp")||r(y,"src",S),r(y,"alt","W"),J(j.src,q="/img/common/landscape/now_waiting_W2.webp")||r(j,"src",q),r(j,"alt","W"),J(I.src,K="/img/common/landscape/now_waiting_A.webp")||r(I,"src",K),r(I,"alt","A"),J(G.src,z="/img/common/landscape/now_waiting_I1.webp")||r(G,"src",z),r(G,"alt","I"),J(H.src,W="/img/common/landscape/now_waiting_T.webp")||r(H,"src",W),r(H,"alt","T"),J(D.src,Y="/img/common/landscape/now_waiting_I2.webp")||r(D,"src",Y),r(D,"alt","I"),J(Q.src,me="/img/common/landscape/now_waiting_N2.webp")||r(Q,"src",me),r(Q,"alt","N"),J(O.src,fe="/img/common/landscape/now_waiting_G.webp")||r(O,"src",fe),r(O,"alt","G"),r(o,"class","now_waiting"),r(e,"class","landscape_mode"),ve(e,"detected",s[2])},m(m,k){M(m,e,k),c(e,t),c(t,l),c(e,i),c(e,n),c(e,f),c(e,o),c(o,d),c(o,w),c(o,v),c(o,N),c(o,y),c(o,B),c(o,j),c(o,A),c(o,I),c(o,R),c(o,G),c(o,V),c(o,H),c(o,U),c(o,D),c(o,F),c(o,Q),c(o,ee),c(o,O),X||(C=pe(window,"resize",s[4]),X=!0)},p(m,[k]){k&8&&a!==(a=m[3].landscape_mode()+"")&&ge(l,a),k&4&&ve(e,"detected",m[2])},i:Z,o:Z,d(m){m&&u(e),X=!1,C()}}}const xe=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;function et(s,e,t){let a,l;x(s,ue,f=>t(3,l=f));let i=0,n=0;function p(){t(0,i=window.innerWidth),t(1,n=window.innerHeight)}return s.$$.update=()=>{s.$$.dirty&3&&t(2,a=i>n&&xe.test(navigator.userAgent)),s.$$.dirty&4&&document.body.classList.toggle("noscroll",a)},[i,n,a,l,p]}class tt extends oe{constructor(e){super(),ie(this,e,et,Ze,ce,{})}}function ye(s,e,t){const a=s.slice();return a[1]=e[t][0],a[2]=e[t][1].title,a[3]=e[t][1].href,a[4]=e[t][1].alt,a}function Ie(s){let e,t,a,l,i,n,p,f,o=s[2]()+"",d,g;return{c(){e=_("li"),t=_("a"),a=_("figure"),l=_("img"),p=E(),f=_("p"),g=E(),this.h()},l(w){e=h(w,"LI",{});var v=b(e);t=h(v,"A",{href:!0,class:!0});var $=b(t);a=h($,"FIGURE",{class:!0});var N=b(a);l=h(N,"IMG",{src:!0,alt:!0}),N.forEach(u),p=L($),f=h($,"P",{class:!0});var y=b(f);y.forEach(u),$.forEach(u),g=L(v),v.forEach(u),this.h()},h(){J(l.src,i="/img/common/footer/"+s[1]+"_icon.webp")||r(l,"src",i),r(l,"alt",n=s[4]()),r(a,"class","footer_list_img"),r(f,"class","footer_list_title"),r(t,"href",d=s[3]()),r(t,"class","footer_list_items")},m(w,v){M(w,e,v),c(e,t),c(t,a),c(a,l),c(t,p),c(t,f),f.innerHTML=o,c(e,g)},p(w,v){v&1&&!J(l.src,i="/img/common/footer/"+w[1]+"_icon.webp")&&r(l,"src",i),v&1&&n!==(n=w[4]())&&r(l,"alt",n),v&1&&o!==(o=w[2]()+"")&&(f.innerHTML=o),v&1&&d!==(d=w[3]())&&r(t,"href",d)},d(w){w&&u(e)}}}function lt(s){let e,t,a,l,i,n=s[0].footer_note()+"",p=Object.entries(s[0].footer),f=[];for(let o=0;o<p.length;o+=1)f[o]=Ie(ye(s,p,o));return{c(){e=_("section"),t=_("ul");for(let o=0;o<f.length;o+=1)f[o].c();a=E(),l=_("div"),i=_("p"),this.h()},l(o){e=h(o,"SECTION",{class:!0});var d=b(e);t=h(d,"UL",{class:!0});var g=b(t);for(let $=0;$<f.length;$+=1)f[$].l(g);g.forEach(u),a=L(d),l=h(d,"DIV",{class:!0});var w=b(l);i=h(w,"P",{});var v=b(i);v.forEach(u),w.forEach(u),d.forEach(u),this.h()},h(){r(t,"class","footer_link_list"),r(l,"class","footer_note"),r(e,"class","footer_link")},m(o,d){M(o,e,d),c(e,t);for(let g=0;g<f.length;g+=1)f[g].m(t,null);c(e,a),c(e,l),c(l,i),i.innerHTML=n},p(o,[d]){if(d&1){p=Object.entries(o[0].footer);let g;for(g=0;g<p.length;g+=1){const w=ye(o,p,g);f[g]?f[g].p(w,d):(f[g]=Ie(w),f[g].c(),f[g].m(t,null))}for(;g<f.length;g+=1)f[g].d(1);f.length=p.length}d&1&&n!==(n=o[0].footer_note()+"")&&(i.innerHTML=n)},i:Z,o:Z,d(o){o&&u(e),we(f,o)}}}function at(s,e,t){let a;return x(s,ue,l=>t(0,a=l)),[a]}class rt extends oe{constructor(e){super(),ie(this,e,at,lt,ce,{})}}function nt(s){let e,t,a;return{c(){e=_("link"),t=E(),a=_("link"),this.h()},l(l){e=h(l,"LINK",{rel:!0,as:!0,href:!0}),t=L(l),a=h(l,"LINK",{rel:!0,href:!0}),this.h()},h(){r(e,"rel","preload"),r(e,"as","style"),r(e,"href","https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Open+Sans:wght@400;700;800&family=Roboto:wght@400;700;900&display=swap"),r(a,"rel","stylesheet"),r(a,"href","https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Open+Sans:wght@400;700;800&family=Roboto:wght@400;700;900&display=swap")},m(l,i){M(l,e,i),M(l,t,i),M(l,a,i)},d(l){l&&u(e),l&&u(t),l&&u(a)}}}function st(s){let e,t,a;return{c(){e=_("link"),t=E(),a=_("link"),this.h()},l(l){e=h(l,"LINK",{rel:!0,as:!0,href:!0}),t=L(l),a=h(l,"LINK",{rel:!0,href:!0}),this.h()},h(){r(e,"rel","preload"),r(e,"as","style"),r(e,"href","https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Noto+Serif+JP:wght@400;500;700&display=swap"),r(a,"rel","stylesheet"),r(a,"href","https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Noto+Serif+JP:wght@400;500;700&display=swap")},m(l,i){M(l,e,i),M(l,t,i),M(l,a,i)},d(l){l&&u(e),l&&u(t),l&&u(a)}}}function ot(s){let e,t,a,l,i,n,p,f,o,d,g,w,v,$,N,y,S,B,j,q,A,I,K,R,G,z,V,H,W,U,D,Y,F,Q,me;t=new Fe({});const ee=s[3].default,O=Pe(ee,s,s[2],null);f=new Xe({}),d=new tt({}),v=new rt({}),W=new Ve({});function fe(m,k){return m[0].locale==="ja"?st:nt}let X=fe(s),C=X(s);return{c(){e=_("header"),ae(t.$$.fragment),a=E(),O&&O.c(),l=E(),i=_("button"),n=E(),p=_("nav"),ae(f.$$.fragment),o=E(),ae(d.$$.fragment),g=E(),w=_("footer"),ae(v.$$.fragment),$=E(),N=_("meta"),y=_("meta"),S=_("meta"),j=_("meta"),q=_("meta"),A=_("meta"),I=_("link"),K=_("link"),R=_("link"),G=_("meta"),z=_("meta"),V=_("meta"),H=_("meta"),ae(W.$$.fragment),U=_("link"),D=_("link"),C.c(),Y=be(),this.h()},l(m){e=h(m,"HEADER",{});var k=b(e);re(t.$$.fragment,k),k.forEach(u),a=L(m),O&&O.l(m),l=L(m),i=h(m,"BUTTON",{id:!0}),b(i).forEach(u),n=L(m),p=h(m,"NAV",{class:!0});var _e=b(p);re(f.$$.fragment,_e),_e.forEach(u),o=L(m),re(d.$$.fragment,m),g=L(m),w=h(m,"FOOTER",{});var T=b(w);re(v.$$.fragment,T),T.forEach(u),$=L(m);const P=je("svelte-1vtljo0",document.head);N=h(P,"META",{property:!0,content:!0}),y=h(P,"META",{property:!0,content:!0}),S=h(P,"META",{property:!0,content:!0}),j=h(P,"META",{property:!0,content:!0}),q=h(P,"META",{property:!0,content:!0}),A=h(P,"META",{name:!0,content:!0}),I=h(P,"LINK",{rel:!0,href:!0}),K=h(P,"LINK",{rel:!0,sizes:!0,href:!0}),R=h(P,"LINK",{rel:!0,href:!0}),G=h(P,"META",{name:!0,content:!0}),z=h(P,"META",{name:!0,content:!0}),V=h(P,"META",{name:!0,content:!0}),H=h(P,"META",{name:!0,content:!0}),re(W.$$.fragment,P),U=h(P,"LINK",{rel:!0,href:!0,crossorigin:!0}),D=h(P,"LINK",{rel:!0,href:!0,crossorigin:!0}),C.l(P),Y=be(),P.forEach(u),this.h()},h(){r(i,"id","scroll_to_top"),r(p,"class","bottom_navigations"),r(N,"property","og:url"),r(N,"content","https://online-manual.rain-server.workers.dev/"),r(y,"property","og:type"),r(y,"content","website"),r(S,"property","og:description"),r(S,"content",B=s[1].articles.description()),r(j,"property","og:site_name"),r(j,"content","Rain Server"),r(q,"property","og:image"),r(q,"content","https://online-manual.rain-server.workers.dev/img/common/sns_share.webp"),r(A,"name","twitter:card"),r(A,"content","summary_large_image"),r(I,"rel","icon"),r(I,"href","/img/common/rain_favicon.ico?v=1"),r(K,"rel","apple-touch-icon"),r(K,"sizes","180x180"),r(K,"href","/img/common/rain_apple_icon.png?v=1"),r(R,"rel","manifest"),r(R,"href","/manifest.webmanifest?v=1"),r(G,"name","viewport"),r(G,"content","width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"),r(z,"name","format-detection"),r(z,"content","telephone=no"),r(V,"name","apple-mobile-web-app-status-bar-style"),r(V,"content","black"),r(H,"name","apple-mobile-web-app-capable"),r(H,"content","yes"),r(U,"rel","preconnect"),r(U,"href","https://fonts.googleapis.com"),r(U,"crossorigin","true"),r(D,"rel","preconnect"),r(D,"href","https://fonts.gstatic.com"),r(D,"crossorigin","true")},m(m,k){M(m,e,k),ne(t,e,null),M(m,a,k),O&&O.m(m,k),M(m,l,k),M(m,i,k),M(m,n,k),M(m,p,k),ne(f,p,null),M(m,o,k),ne(d,m,k),M(m,g,k),M(m,w,k),ne(v,w,null),M(m,$,k),c(document.head,N),c(document.head,y),c(document.head,S),c(document.head,j),c(document.head,q),c(document.head,A),c(document.head,I),c(document.head,K),c(document.head,R),c(document.head,G),c(document.head,z),c(document.head,V),c(document.head,H),ne(W,document.head,null),c(document.head,U),c(document.head,D),C.m(document.head,null),c(document.head,Y),F=!0,Q||(me=pe(i,"click",Re),Q=!0)},p(m,[k]){O&&O.p&&(!F||k&4)&&He(O,ee,m,m[2],F?Ue(ee,m[2],k,null):Be(m[2]),null),(!F||k&2&&B!==(B=m[1].articles.description()))&&r(S,"content",B),X!==(X=fe(m))&&(C.d(1),C=X(m),C&&(C.c(),C.m(Y.parentNode,Y)))},i(m){F||(te(t.$$.fragment,m),te(O,m),te(f.$$.fragment,m),te(d.$$.fragment,m),te(v.$$.fragment,m),te(W.$$.fragment,m),F=!0)},o(m){le(t.$$.fragment,m),le(O,m),le(f.$$.fragment,m),le(d.$$.fragment,m),le(v.$$.fragment,m),le(W.$$.fragment,m),F=!1},d(m){m&&u(e),se(t),m&&u(a),O&&O.d(m),m&&u(l),m&&u(i),m&&u(n),m&&u(p),se(f),m&&u(o),se(d,m),m&&u(g),m&&u(w),se(v),m&&u($),u(N),u(y),u(S),u(j),u(q),u(A),u(I),u(K),u(R),u(G),u(z),u(V),u(H),se(W),u(U),u(D),C.d(m),u(Y),Q=!1,me()}}}function it(s,e,t){let a;x(s,ue,p=>t(1,a=p));let{$$slots:l={},$$scope:i}=e,{data:n}=e;return De(n.locale),s.$$set=p=>{"data"in p&&t(0,n=p.data),"$$scope"in p&&t(2,i=p.$$scope)},[n,a,i,l]}class _t extends oe{constructor(e){super(),ie(this,e,it,ot,ce,{data:0})}}export{_t as default};