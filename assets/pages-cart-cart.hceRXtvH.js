import{d as s,l as a,y as e,z as l,A as t,B as c,C as u,o,c as n,w as d,p as i,u as r,f,a as p,b as _,F as m,r as g,s as k,e as b,i as v,h as x,j as h,q as y,t as w,D as j}from"./index-q-8h2hxO.js";import{g as C,_ as I,p as V,d as T,a as F}from"./cart.CTaXDqZL.js";import{_ as U,a as q}from"./uni-swipe-action.9trtBRhx.js";import{u as z,_ as A}from"./plugin-vueexport-helper.BZjA32pB.js";import"./http.dxpK3A_g.js";const B=A(s({__name:"cart",setup(s){const A=z(),B=a([]),D=async()=>{const s=await C();B.value=s.result};e((()=>{D()}));const E=s=>{F(s.index,{count:s.value})},G=l((()=>B.value.every((s=>s.selected)))),P=()=>{const s=!G.value;B.value.forEach((a=>{a.selected=s})),V({selected:s})};return(s,a)=>{const e=b,l=v,C=x,V=h,z=t(c("vk-data-input-number-box"),I),R=y,X=t(c("uni-swipe-action-item"),U),$=t(c("uni-swipe-action"),q),H=u("XtxGuess"),J=i;return o(),n(J,{"scroll-y":"",class:"scroll-view"},{default:d((()=>[r(A).profile?(o(),f(m,{key:0},[B.value.length?(o(),n(l,{key:0,class:"cart-list"},{default:d((()=>[p(l,{class:"tips"},{default:d((()=>[p(e,{class:"label"},{default:d((()=>[_("满减")])),_:1}),p(e,{class:"desc"},{default:d((()=>[_("满1件, 即可享受9折优惠")])),_:1})])),_:1}),p($,null,{default:d((()=>[(o(!0),f(m,null,g(B.value,(s=>(o(),n(X,{key:s.skuId,class:"cart-swipe"},{right:d((()=>[p(l,{class:"cart-swipe-right"},{default:d((()=>[p(R,{class:"button delete-button",onClick:a=>{return e=s.skuId,void j({content:"是否删除",success:s=>{s.confirm&&(T({ids:[e]}),D())}});var e}},{default:d((()=>[_("删除")])),_:2},1032,["onClick"])])),_:2},1024)])),default:d((()=>[p(l,{class:"goods"},{default:d((()=>[p(e,{onClick:a=>(s=>{s.selected=!s.selected,F(s.skuId,{selected:s.selected})})(s),class:k(["checkbox",{checked:s.selected}])},null,8,["onClick","class"]),p(V,{url:`/pages/goods/goods?id=${s.id}`,"hover-class":"none",class:"navigator"},{default:d((()=>[p(C,{mode:"aspectFill",class:"picture",src:s.picture},null,8,["src"]),p(l,{class:"meta"},{default:d((()=>[p(l,{class:"name ellipsis"},{default:d((()=>[_(w(s.name),1)])),_:2},1024),p(l,{class:"attrsText ellipsis"},{default:d((()=>[_(w(s.attrsText),1)])),_:2},1024),p(l,{class:"price"},{default:d((()=>[_(w(s.nowPrice),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"]),p(l,{class:"count"},{default:d((()=>[p(z,{modelValue:s.count,"onUpdate:modelValue":a=>s.count=a,min:1,max:s.stock,index:s.skuId,onChange:E},null,8,["modelValue","onUpdate:modelValue","max","index"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})):(o(),n(l,{key:1,class:"cart-blank"},{default:d((()=>[p(C,{src:"/uniapp-example/static/images/blank_cart.png",class:"image"}),p(e,{class:"text"},{default:d((()=>[_("购物车还是空的，快来挑选好货吧")])),_:1}),p(V,{"open-type":"switchTab",url:"/pages/index/index","hover-class":"none"},{default:d((()=>[p(R,{class:"button"},{default:d((()=>[_("去首页看看")])),_:1})])),_:1})])),_:1})),p(l,{class:"toolbar"},{default:d((()=>[p(e,{onClick:P,class:k(["all",{checked:G.value}])},{default:d((()=>[_("全选")])),_:1},8,["class"]),p(e,{class:"text"},{default:d((()=>[_("合计:")])),_:1}),p(e,{class:"amount"},{default:d((()=>[_("100")])),_:1}),p(l,{class:"button-grounp"},{default:d((()=>[p(l,{class:k(["button payment-button",{disabled:!0}])},{default:d((()=>[_(" 去结算(10) ")])),_:1})])),_:1})])),_:1})],64)):(o(),n(l,{key:1,class:"login-blank"},{default:d((()=>[p(e,{class:"text"},{default:d((()=>[_("登录后可查看购物车中的商品")])),_:1}),p(V,{url:"/pages/login/login","hover-class":"none"},{default:d((()=>[p(R,{class:"button"},{default:d((()=>[_("去登录")])),_:1})])),_:1})])),_:1})),p(H,{ref:"guessRef"},null,512),p(l,{class:"toolbar-height"})])),_:1})}}}),[["__scopeId","data-v-0769b8bd"]]);export{B as default};
