import{S as Q,i as P,s as w,a as u,y as d,a9 as E,h as l,c,z as $,b as _,A as g,g as y,d as v,B as h}from"../chunks/index.2ec30732.js";import{F,Q as S}from"../chunks/FieldDetails.37104e94.js";import{P as b}from"../chunks/PreviousNextPage.ec1ca725.js";function q(r){let s,f,t,i,n,o;return document.title=s="Query - "+r[0].field.name,t=new F({props:{field:r[0].field,type:S.QUERY}}),n=new b({props:{page:r[0].page}}),{c(){f=u(),d(t.$$.fragment),i=u(),d(n.$$.fragment)},l(e){E("svelte-19yffit",document.head).forEach(l),f=c(e),$(t.$$.fragment,e),i=c(e),$(n.$$.fragment,e)},m(e,a){_(e,f,a),g(t,e,a),_(e,i,a),g(n,e,a),o=!0},p(e,[a]){(!o||a&1)&&s!==(s="Query - "+e[0].field.name)&&(document.title=s);const m={};a&1&&(m.field=e[0].field),t.$set(m);const p={};a&1&&(p.page=e[0].page),n.$set(p)},i(e){o||(y(t.$$.fragment,e),y(n.$$.fragment,e),o=!0)},o(e){v(t.$$.fragment,e),v(n.$$.fragment,e),o=!1},d(e){e&&l(f),h(t,e),e&&l(i),h(n,e)}}}function x(r,s,f){let{data:t}=s;return r.$$set=i=>{"data"in i&&f(0,t=i.data)},[t]}class C extends Q{constructor(s){super(),P(this,s,x,q,w,{data:0})}}export{C as default};
