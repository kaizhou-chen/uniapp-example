import{d as s,A as e,r as a,v as t,o as l,b as o,f as u,a as i,w as r,F as n,e as c,g as p,i as d,c as g,n as m,m as v,t as f,B as y,C as _,s as h,k as b,h as I,x as w}from"./index-49aa9fa8.js";import{d as k}from"./apiFactory.93d7a0a6.js";import{_ as x}from"./plugin-vueexport-helper.1b428a4d.js";import"./http.abbde6b3.js";const j=x(s({__name:"hot",props:{type:null},setup(s){const x=s,j=[{type:"1",title:"特惠推荐",url:"/hot/preference"},{type:"2",title:"爆款推荐",url:"/hot/inVogue"},{type:"3",title:"一站买全",url:"/hot/oneStop"},{type:"4",title:"新鲜好物",url:"/hot/new"}].find((s=>s.type===x.type));e({title:j.title});const S=a(""),C=a([]),T=a(0);t((()=>{(async()=>{const s=await k(j.url);S.value=s.result.bannerPicture,C.value=s.result.subTypes})()}));const z=async()=>{const s=C.value[T.value];if(!(s.goodsItems.page<s.goodsItems.pages))return s.finish=!0,void h({icon:"none",title:"没有更多数据~"});s.goodsItems.page++;const e=(await k(j.url,{subType:s.id,page:s.goodsItems.page,pageSize:s.goodsItems.pageSize})).result.subTypes[T.value];s.goodsItems.items.push(...e.goodsItems.items)};return(s,e)=>{const a=p,t=d,h=b,k=I,x=w;return l(),o(n,null,[u(" viewport 设置 padding-top 撑起高度，封面图使用绝对定位"),i(t,{class:"viewport"},{default:r((()=>[u(" 推荐封面图 "),i(t,{class:"cover"},{default:r((()=>[i(a,{src:S.value},null,8,["src"])])),_:1}),u(" 推荐选项 "),i(t,{class:"tabs"},{default:r((()=>[(l(!0),o(n,null,c(C.value,((s,e)=>(l(),g(h,{key:s.id,class:m(["text",{active:e===T.value}]),onClick:s=>T.value=e},{default:r((()=>[v(f(s.title),1)])),_:2},1032,["class","onClick"])))),128))])),_:1}),u(" 推荐列表 "),(l(!0),o(n,null,c(C.value,((s,e)=>y((l(),g(x,{"scroll-y":"",key:s.id,class:"scroll-view",onScrolltolower:z},{default:r((()=>[i(t,{class:"goods"},{default:r((()=>[(l(!0),o(n,null,c(s.goodsItems.items,(s=>(l(),g(k,{key:s.id,url:`/pages/goods/goods?id=${s.id}`,"hover-class":"none",class:"navigator"},{default:r((()=>[i(a,{src:s.picture,class:"thumb"},null,8,["src"]),i(t,{class:"name ellipsis"},{default:r((()=>[v(f(s.name),1)])),_:2},1024),i(t,{class:"price"},{default:r((()=>[i(h,{class:"symbol"},{default:r((()=>[v("¥")])),_:1}),i(h,{class:"number"},{default:r((()=>[v(f(s.price),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"])))),128))])),_:2},1024),i(t,{class:"loading-text"},{default:r((()=>[v(f(C.value[T.value].finish?"没有更多数据~":"正在加载..."),1)])),_:1})])),_:2},1024)),[[_,T.value===e]]))),128))])),_:1})],2112)}}}),[["__scopeId","data-v-3844086e"]]);export{j as default};
