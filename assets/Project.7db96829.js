import{b as u,s as m}from"./tooltip.96d5c9eb.js";import{_ as g,o as l,c as i,b as s,t as a,F as b,g as x,u as f,p as v,h as y}from"./index.34aae189.js";const j={name:"BillingPage",components:{},data(){return{salary:{classIcon:"text-white fas fa-landmark",title:"Salary",desc:"Belong Interactive",price:"HTML"},bgImg:u,proyect:{},technologies:[]}},mounted(){m(),this.project()},methods:{async project(){const d=f().params.id,e=await(await fetch("src/assets/json/"+d+".json",{method:"GET"})).json();this.proyect=e,this.technologies=e==null?void 0:e.technologies.split(";")}}},t=o=>(v("data-v-e647490e"),o=o(),y(),o),k={class:"container-fluid mt-4"},w={class:"row mt-4"},I={class:"col-md-12"},S={class:"card"},B=t(()=>s("div",{class:"card-header pb-0 px-3"},[s("h6",{class:"mb-0"},"Informaci\xF3n del proyecto")],-1)),T={class:"card-body pt-4 p-3"},L={class:"list-group"},P={class:"list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg"},D={class:"position-relative"},E={class:"shadow-xl d-block border-radius-xl"},F=["src"],R=t(()=>s("div",{class:"md:flex"},null,-1)),G={class:"list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg"},H={class:"d-flex flex-column"},M=t(()=>s("div",{class:"block-title"},[s("h3",null,"Descripci\xF3n")],-1)),N={class:"mb-2 text-sm"},U={class:"list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg"},V={class:"d-flex flex-column"},q=t(()=>s("h6",{class:"mb-3 text-sm"},null,-1)),z={class:"mb-2 text-xs"},A=t(()=>s("div",{class:"block-title"},[s("h3",null,"Tecnolog\xEDas")],-1)),C=t(()=>s("ul",{class:"tags"},null,-1)),J={class:"tags"},K={class:"list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg"},O={class:"d-flex flex-column"},Q=t(()=>s("h6",{class:"mb-3 text-sm"},null,-1)),W={class:"mb-2 text-xs"},X=t(()=>s("div",{class:"block-title"},[s("h3",null,"URL")],-1)),Y={href:"https://registrollamadas.com"};function Z(o,d,p,e,c,$){var r,n,_;return l(),i("div",k,[s("div",w,[s("div",I,[s("div",S,[B,s("div",T,[s("ul",L,[s("li",P,[s("div",D,[s("a",E,[s("img",{src:"src/assets/img/projects/"+((r=c.proyect)==null?void 0:r.img),alt:"img-blur-shadow",class:"shadow img-fluid border-radius-xl"},null,8,F)])]),R]),s("li",G,[s("div",H,[M,s("span",N,a((n=c.proyect)==null?void 0:n.description),1)])]),s("li",U,[s("div",V,[q,s("span",z,[s("div",null,[A,C,s("ul",J,[(l(!0),i(b,null,x(c.technologies,h=>(l(),i("li",{key:h},[s("a",null,a(h),1)]))),128))])])])])]),s("li",K,[s("div",O,[Q,s("span",W,[s("div",null,[X,s("a",Y,a((_=c.proyect)==null?void 0:_.url),1)])])])])])])])])])])}var os=g(j,[["render",Z],["__scopeId","data-v-e647490e"]]);export{os as default};
