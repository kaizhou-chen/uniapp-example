import{d as a,y as e,o as s,c as i,w as t,a as l,m as n,t as o,u as r,i as p,z as m}from"./index-f8d96865.js";import{h as c}from"./http.5268305f.js";import{_ as u}from"./_plugin-vue_export-helper.1b428a4d.js";const f=u(a({__name:"my",setup(a){const u=e(),f=async()=>{const a=await c({method:"GET",url:""});console.log("请求成功",a)};return(a,e)=>{const c=p,_=m;return s(),i(c,{class:"my"},{default:t((()=>[l(c,null,{default:t((()=>[n("会员信息："+o(r(u).profile),1)])),_:1}),l(_,{onClick:e[0]||(e[0]=a=>r(u).setProfile({nickname:"黑马先锋"})),size:"mini",plain:"",type:"primary"},{default:t((()=>[n(" 保存用户信息 ")])),_:1}),l(_,{onClick:e[1]||(e[1]=a=>r(u).clearProfile()),size:"mini",plain:"",type:"warn"},{default:t((()=>[n("清理用户信息")])),_:1}),l(_,{onClick:f,size:"mini",plain:"",type:"primary"},{default:t((()=>[n("测试请求")])),_:1})])),_:1})}}}),[["__scopeId","data-v-1e0a4f55"]]);export{f as default};
