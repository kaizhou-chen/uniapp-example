import{d as a,g as e,m as l,s,p as t,o as u,c as o,w as n,a as c,b as r,e as d,n as i,u as v,t as f,U as m,z as p,T as _,k as b,f as h,j as k,i as y,Q as g,V as C,W as x,X as V,Y as j,v as L}from"./index-91a9b3b3.js";import{j as w,k as T,l as F}from"./demoApi.eb029da1.js";import{_ as U}from"./plugin-vueexport-helper.1b428a4d.js";const A=U(a({__name:"profile",setup(a){const{safeAreaInsets:U}=e(),A=l({}),I=s();t((()=>{(async()=>{const a=await w();A.value=a.result})()}));const P=()=>{uni.chooseMedia({count:1,mediaType:["image"],success:a=>{const{tempFilePath:e}=a.tempFiles[0];I.profile.avatar=e,F.avatar=e,m({url:"/member/profile/avatar",name:"file",filePath:e,success:a=>{if(200===a.statusCode){const e=JSON.parse(a.data);A.value.avatar=e.avatar,p({icon:"success",title:"更新成功"})}else p({icon:"error",title:"更新失败"})}})}})},z=a=>{A.value.gender=a.detail.value},B=a=>{A.value.birthday=a.detail.value};let D=["","",""];const J=a=>{A.value.fullLocation=a.detail.value.join(" "),D=a.detail.code},M=async()=>{const{nickname:a,gender:e,birthday:l,fullLocation:s,profession:t}=A.value,[u,o,n]=D;await T({nickname:a,gender:e,birthday:l,fullLocation:s,provinceCode:u,cityCode:o,countyCode:n,profession:t}),I.profile.nickname=A.value.nickname,p({icon:"success",title:"更新成功"}),setTimeout((()=>{_()}),500)};return(a,e)=>{const l=b,s=h,t=k,m=y,p=g,_=C,w=x,T=V,F=j,I=L;return u(),o(s,{class:"viewport"},{default:n((()=>{var a;return[c(" 导航栏 "),r(s,{class:"navbar",style:i({paddingTop:(null==(a=v(U))?void 0:a.top)+"px"})},{default:n((()=>[r(l,{"open-type":"navigateBack",class:"back icon-left","hover-class":"none"}),r(s,{class:"title"},{default:n((()=>[d("个人信息")])),_:1})])),_:1},8,["style"]),c(" 头像 "),r(s,{class:"avatar"},{default:n((()=>[r(s,{onClick:P,class:"avatar-content"},{default:n((()=>{var a;return[r(t,{class:"image",src:null==(a=A.value)?void 0:a.avatar,mode:"aspectFill"},null,8,["src"]),r(m,{class:"text"},{default:n((()=>[d("点击修改头像")])),_:1})]})),_:1})])),_:1}),c(" 表单 "),r(s,{class:"form"},{default:n((()=>[c(" 表单内容 "),r(s,{class:"form-content"},{default:n((()=>[r(s,{class:"form-item"},{default:n((()=>[r(m,{class:"label"},{default:n((()=>[d("账号")])),_:1}),r(m,{class:"account"},{default:n((()=>{var a;return[d(f(null==(a=A.value)?void 0:a.account),1)]})),_:1})])),_:1}),r(s,{class:"form-item"},{default:n((()=>[r(m,{class:"label"},{default:n((()=>[d("昵称")])),_:1}),r(p,{class:"input",type:"text",placeholder:"请填写昵称",modelValue:A.value.nickname,"onUpdate:modelValue":e[0]||(e[0]=a=>A.value.nickname=a)},null,8,["modelValue"])])),_:1}),r(s,{class:"form-item"},{default:n((()=>[r(m,{class:"label"},{default:n((()=>[d("性别")])),_:1}),r(T,{onChange:z},{default:n((()=>[r(w,{class:"radio"},{default:n((()=>{var a;return[r(_,{value:"男",color:"#27ba9b",checked:"男"===(null==(a=A.value)?void 0:a.gender)},null,8,["checked"]),d(" 男 ")]})),_:1}),r(w,{class:"radio"},{default:n((()=>{var a;return[r(_,{value:"女",color:"#27ba9b",checked:"女"===(null==(a=A.value)?void 0:a.gender)},null,8,["checked"]),d(" 女 ")]})),_:1})])),_:1})])),_:1}),r(s,{class:"form-item"},{default:n((()=>{var a;return[r(m,{class:"label"},{default:n((()=>[d("生日")])),_:1}),r(F,{class:"picker",mode:"date",start:"1900-01-01",end:new Date,value:null==(a=A.value)?void 0:a.birthday,onChange:B},{default:n((()=>{var a;return[(null==(a=A.value)?void 0:a.birthday)?(u(),o(s,{key:0},{default:n((()=>[d(f(A.value.birthday),1)])),_:1})):(u(),o(s,{key:1,class:"placeholder"},{default:n((()=>[d("请选择日期")])),_:1}))]})),_:1},8,["end","value"])]})),_:1}),r(s,{class:"form-item"},{default:n((()=>{var a,e;return[r(m,{class:"label"},{default:n((()=>[d("城市")])),_:1}),r(F,{class:"picker",mode:"region",value:null==(e=null==(a=A.value)?void 0:a.fullLocation)?void 0:e.split(" "),onChange:J},{default:n((()=>{var a;return[(null==(a=A.value)?void 0:a.fullLocation)?(u(),o(s,{key:0},{default:n((()=>[d(f(A.value.fullLocation),1)])),_:1})):(u(),o(s,{key:1,class:"placeholder"},{default:n((()=>[d("请选择城市")])),_:1}))]})),_:1},8,["value"])]})),_:1}),r(s,{class:"form-item"},{default:n((()=>[r(m,{class:"label"},{default:n((()=>[d("职业")])),_:1}),r(p,{class:"input",type:"text",placeholder:"请填写职业",modelValue:A.value.profession,"onUpdate:modelValue":e[1]||(e[1]=a=>A.value.profession=a)},null,8,["modelValue"])])),_:1})])),_:1}),c(" 提交按钮 "),r(I,{class:"form-button",onClick:M},{default:n((()=>[d("保 存")])),_:1})])),_:1})]})),_:1})}}}),[["__scopeId","data-v-721b8b38"]]);export{A as default};
