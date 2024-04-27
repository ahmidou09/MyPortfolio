import{u as t,m as g,r as l,a as re,j as e,b as L,c as ue,d as B,e as G,F as fe,T as be,L as z,D as je,f as ve,g as we,h as ye,i as ne,S as ie,k as ke,l as Se,n as Ce,o as ze,p as Me,q as Le,s as Ie,t as Re,v as De,I as Fe,w as Te,x as Pe,y as Ee,z as Ae,A as S,B as $e,R as oe,C as Ne,E as Be,G as He,H as Oe,J as We,K as Ge,M as qe,N as H,O as Ye,P as Je,Q as _e,U as I,V as Ve,W as se,X as ae,Y as Xe,Z as Ue,_ as Ke,$ as Qe,a0 as M,a1 as Ze,a2 as et}from"./vendor-UlusDy0q.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const tt="/assets/hero-CjQ4DZu-.png",rt="/assets/bg-Dqh5Kssl.png",nt=t(g.p)`
  display: flex;
  justify-content: center;
  font-size: 6rem;
  line-height: 1;
  padding: 4rem;
  max-width: 120rem;
  color: var(--color-white);
  flex-wrap: wrap;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    font-size: 3rem;
  }
`,it=t.span`
  position: relative;
  margin-right: 12px;
  margin-top: 12px;
`,ot=t.span`
  position: absolute;
  opacity: 20%;
`;function st({paragraph:r}){const n=l.useRef(null),{scrollYProgress:i}=re({target:n,offset:["start 0.9","start 0.25"]}),a=r.split(" ");return e.jsx(nt,{ref:n,children:a.map((o,s)=>{const c=s/a.length,d=c+1/a.length;return e.jsx(at,{progress:i,range:[c,d],children:o},s)})})}const at=({children:r,progress:n,range:i})=>{const o=(i[1]-i[0])/r.length;return e.jsx(it,{children:r.split("").map((s,c)=>{const d=i[0]+c*o,p=i[0]+(c+1)*o;return e.jsx(ct,{progress:n,range:[d,p],children:s},`c_${c}`)})})},ct=({children:r,progress:n,range:i})=>{const a=L(n,i,[0,1]);return e.jsxs("span",{children:[e.jsx(ot,{children:r}),e.jsx(g.span,{style:{opacity:a},children:r})]})},C=[{id:1,heading:"AdminDashboard",subheading:"Admin Dashboard is a robust interface designed for effective data management and analytics.",imgSrc:"https://i.ibb.co/chjJv4D/10.png",Overview:"Admin Dashboard is a robust interface designed for effective data management and analytics. It is the central hub for monitoring user activities, sales, orders, and revenue analytics in real-time.",imgs:["https://i.ibb.co/ccMpKRy/1.jpg","https://i.ibb.co/QMt9P2H/2.jpg","https://i.ibb.co/JdWKTCp/3.jpg","https://i.ibb.co/xY5PRTj/4.jpg","https://i.ibb.co/1sQsVY6/5.jpg","https://i.ibb.co/SVGF97p/6.jpg"],techonlogy:["React","JavaScript","HTML","CSS","Github"],features:["User activity tracking","Real-time data analytics","Interactive charts and graphs","Multi-user management"],githubLink:"https://github.com/ahmidou09/admin-Dashboard",liveLink:"https://662ac61d11706911871f2ef9--admin-dashboard-mehdi.netlify.app/"},{id:2,heading:"Cruise Fleet",subheading:"Rent A Car Website Template for Mobile Devices",imgSrc:"https://i.ibb.co/pLrqT2x/rent-car-9.png",Overview:"Cruise-fleet is a mobile web application where you can manage car reservations: you have a list of cars ready for rent, and you can see how much money you spent daily based on your choice.",imgs:["https://i.ibb.co/p1KxGqJ/rent-car-1.jpg","https://i.ibb.co/myj86gh/rent-car-2.jpg","https://i.ibb.co/1fwLf67/rent-car-3.jpg","https://i.ibb.co/BTwkkmj/rent-car-4.jpg","https://i.ibb.co/hdrsryt/rent-car-5.jpg"],techonlogy:["React","Ruby on Rails","Ruby","JavaScript","PostgreSQL","HTML","CSS","Github"],features:["See a list of cars","See the details of each car","Make a reservation to the car","Add a car Item","Delete a car Item","List all reservations for a given car"],githubLink:"https://github.com/ahmidou09/cruise-fleet-frontend",liveLink:"https://cruisefleet.onrender.com/"},{id:3,heading:"Air Pollution",subheading:"Air pollution web application ",imgSrc:"https://i.ibb.co/F6whqNC/air-pullution-1.png",Overview:"The Air Pollution App is a simple web application that allows users to stay informed about the air quality conditions in countries worldwide. It provides a user-friendly experience with precise regional search capabilities.",imgs:["https://i.ibb.co/F0sgGpC/air-pullution-2.png","https://i.ibb.co/RNTW3M3/air-pullution-3.png","https://i.ibb.co/vjR1qr5/air-pullution-4.png","https://i.ibb.co/X7xTdrz/air-pullution-5.png"],techonlogy:["React","JavaScript","HTML","CSS","Github"],features:["User-friendly interface with basic HTML layout.","Display different countries by region","Display detailed information about the pollution in the area.","Air quality index bar that changes of color depending on the level of pollution."],githubLink:"https://github.com/ahmidou09/capstone-air-pollution-app?tab=readme-ov-file",liveLink:"https://air-pollution-4yaz.onrender.com/"},{id:4,heading:"Creative Studio",subheading:"Creative Studio Capston communication agency",imgSrc:"https://i.ibb.co/Fgq6RGq/poster.png",Overview:"Creative_Studio_Capstone It's a creative communication agency, responsive web site! This is a Capstone Project to include all learning topics of Microverse Program's Module 1.",imgs:["https://i.ibb.co/vLZ4tDL/1.png","https://i.ibb.co/K69LVWW/2.png","https://i.ibb.co/0s29YPg/3.png","https://i.ibb.co/74MgCWD/4.png","https://i.ibb.co/rcMy522/5.png"],techonlogy:["JavaScript","HTML","CSS","Github"],features:["Good HTML and CSS practices","A webpage with the use of linters","Flexbox & Grid","Responsive Web Design","Basic interactivity with JavaScript"],githubLink:"https://github.com/ahmidou09/CreativeStudioCapstone",liveLink:"https://ahmidou09.github.io/CreativeStudioCapstone/index.html"}],lt=({projectData:r,color:n})=>{const{imgSrc:i,heading:a,subheading:o}=r,s=ue(),c=l.useRef(null),d=B(0),p=B(0),h=G(d),m=G(p),u=L(m,[.5,-.5],["40%","60%"]),x=L(h,[.5,-.5],["80%","70%"]),y=f=>{const k=c.current.getBoundingClientRect(),D=k.width,W=k.height,me=f.clientX-k.left,pe=f.clientY-k.top,ge=me/D-.5,xe=pe/W-.5;d.set(ge),p.set(xe)};return e.jsxs(dt,{onClick:()=>{s(`/projects/${r.id}`),window.scrollTo(0,0)},ref:c,onMouseMove:y,initial:"initial",whileHover:"whileHover",color:n,children:[e.jsxs("div",{children:[e.jsx(ht,{variants:{initial:{x:0},whileHover:{x:-16}},transition:{type:"spring",staggerChildren:.075,delayChildren:.25},color:n,children:a.split("").map((f,k)=>e.jsx(g.span,{variants:{initial:{x:0},whileHover:{x:16}},transition:{type:"spring"},className:"inline-block",children:f},k))}),e.jsx(mt,{color:n,children:o})]}),e.jsx(pt,{style:{top:u,left:x,translateX:"-50%",translateY:"-50%"},variants:{initial:{scale:0,rotate:"-6.5deg"},whileHover:{scale:.8,rotate:"6.5deg"}},transition:{type:"spring"},src:i,alt:`Image representing a link for ${a}`}),e.jsx(gt,{variants:{initial:{x:"25%",opacity:0},whileHover:{x:"0%",opacity:1}},transition:{type:"spring"},children:e.jsx(fe,{style:{fontSize:"4rem",color:"#fafafa"}})})]})},dt=t(g.a)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3rem;
  transition: border-color 0.5s;

  &:not(:last-child) {
    border-bottom: 2px solid
      ${r=>r.color?r.color:"var(--color-grey-0)"};
  }

  &:hover span {
    color: var(--color-white-2);
  }

  &:hover {
    border-color: var(--color-white-2);
  }
`,ht=t(g.div)`
  position: relative;
  z-index: 10;
  font-size: 4.5rem;
  font-weight: bold;
  color: ${r=>r.color?r.color:"var(--color-grey-0)"};
  transition: color 0.5s;

  .inline-block {
    display: inline-block;
  }
`,mt=t.span`
  position: relative;
  z-index: 10;
  margin-top: 0.5rem;
  font-size: 2rem;
  color: ${r=>r.color?r.color:"var(--color-grey-0)"};
  transition: color 0.5s;
`,pt=t(g.img)`
  position: absolute;
  z-index: 99999;
  height: auto;
  width: 40rem;
  border-radius: 0.5rem;
  object-fit: cover;
`,gt=t(g.div)`
  position: relative;
  z-index: 10;
  padding: 1rem;
`,xt={reverse:!1,max:35,perspective:1e3,scale:1,speed:1e3,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"},ut=t.div`
  border-radius: 1rem;
  box-shadow: 2px -2px 10px 2px rgb(109 94 94 / 31%);
  transition: transform 0.5s, box-shadow 0.3s;
  transform-style: preserve-3d;
  position: relative;
  cursor: pointer;
  transform-origin: center center;
  min-height: 60rem;

  &:hover {
    box-shadow: 3px -1px 20px 7px #59595978;
  }

  &:hover p span {
    margin-left: 1.2rem;
  }

  &:hover img {
    opacity: 1;
  }
`,ft=t.div`
  overflow: hidden;
  height: 40rem;
  border-radius: 10px 10px 0 0;
`,bt=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 10px 10px 0 0;
  pointer-events: none;
  opacity: 0.7;
  transition: opacity 0.2s;
`,jt=t.h2`
  font-size: 4.2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  color: var(--color-white);
  border-bottom: 2px solid var(--color-white);
  width: 80%;
`,vt=t.p`
  font-size: 1.6rem;
  color: var(--color-white);
  padding: 0 2rem 2rem;
  transition: font-size 0.5s;

  span {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    display: block;
    transition: margin-left 0.3s;
  }
`,wt=({projectData:r})=>{const{imgSrc:n,heading:i,subheading:a}=r;return e.jsx(be,{options:xt,children:e.jsx(z,{to:`/projects/${r.id}`,onClick:()=>window.scrollTo(0,0),children:e.jsxs(ut,{children:[e.jsx(ft,{children:e.jsx(bt,{src:n,alt:i})}),e.jsx(jt,{children:i}),e.jsxs(vt,{children:[a," ",e.jsx("span",{children:"→"})]})]})})})},yt=t.section`
  background-color: var(--color-primary-3);
  padding: 3rem;
`,kt=t.div`
  margin: 0 auto;
  max-width: 120rem;
`,St=t.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Ct=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 4rem;
`,ce=({style:r,element:n,color:i,displayMode:a="list"})=>{const o=n&&n>=0&&n<=C.length?n:C.length;return e.jsx(yt,{style:r,children:e.jsx(kt,{children:a==="list"?e.jsx(St,{children:C.slice(0,o).map((s,c)=>e.jsx(lt,{projectData:s,color:i},s.id))}):e.jsx(Ct,{children:C.slice(0,o).map((s,c)=>e.jsx(wt,{projectData:s,color:i},s.id))})})})};function le(){const[r,n]=l.useState(window.innerWidth<720);return l.useEffect(()=>{const i=()=>{n(window.innerWidth<720)};return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[r]),r}const zt=t.section`
  color: var(--color-white-2);
  background-color: var(--color-primary-3);
  padding: 3rem;

  h2 {
    color: var(--color-white);
    text-align: center;
    padding: 3rem;
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`,Mt=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`,b=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
`,j=t.div`
  font-size: 7rem;
  margin-bottom: 1rem;
`,v=t.span`
  font-size: 1.6rem;
  text-align: center;
`,Lt=()=>e.jsxs(zt,{children:[e.jsx("h2",{children:"My Skills"}),e.jsxs(Mt,{children:[e.jsxs(b,{children:[e.jsx(j,{children:e.jsx(je,{})}),e.jsx(v,{children:"JavaScript"})]}),e.jsxs(b,{children:[e.jsx(j,{children:e.jsx(ve,{})}),e.jsx(v,{children:"React"})]}),e.jsxs(b,{children:[e.jsx(j,{children:e.jsx(we,{})}),e.jsx(v,{children:"HTML"})]}),e.jsxs(b,{children:[e.jsx(j,{children:e.jsx(ye,{})}),e.jsx(v,{children:"CSS"})]}),e.jsxs(b,{children:[e.jsx(j,{children:e.jsx(ne,{})}),e.jsx(v,{children:"Ruby"})]}),e.jsxs(b,{children:[e.jsx(j,{children:e.jsx(ie,{})}),e.jsx(v,{children:"Ruby on Rails"})]}),e.jsxs(b,{children:[e.jsx(j,{children:e.jsx(ke,{})}),e.jsx(v,{children:"Bootstrap"})]}),e.jsxs(b,{children:[e.jsx(j,{children:e.jsx(Se,{})}),e.jsx(v,{children:" Git"})]}),e.jsxs(b,{children:[e.jsx(j,{children:e.jsx(Ce,{})}),e.jsx(v,{children:"GitHub"})]}),e.jsxs(b,{children:[e.jsx(j,{children:e.jsx(ze,{})}),e.jsx(v,{children:"SASS"})]}),e.jsxs(b,{children:[e.jsx(j,{children:e.jsx(Me,{})}),e.jsx(v,{children:" PostgreSQL"})]})]})]}),It="/assets/skills-bg_1-CORP55um.png",Rt=t.div`
  position: relative;
  overflow: hidden;
`,Dt=t.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #011627f9, #01080ef8),
    url(${It});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  h2 {
    color: var(--color-white);
    font-size: 12rem;
    font-weight: 300;
    transition: opacity 0.2s ease-in;
  }

  &:hover h2 {
    opacity: 0;
  }
`,Ft=t.div`
  pointer-events: none;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;

  svg {
    width: 10rem;
    height: 10rem;
  }
`,Tt=()=>e.jsx(Pt,{renderImageBuffer:100,rotationRange:25,icons:[e.jsx(Le,{color:"#61DBFB"}),e.jsx(ne,{color:"#E74C3C"}),e.jsx(ie,{color:"#C60000"}),e.jsx(Ie,{color:"#3498DB"}),e.jsx(Re,{color:"#F4470B"}),e.jsx(De,{color:"#7811F2"}),e.jsx(Fe,{color:"#EFD81D"}),e.jsx(Te,{color:"#C66394"}),e.jsx(Pe,{color:"#36B7F0"}),e.jsx(Ee,{color:"#E84E31"})],children:e.jsx(Dt,{children:e.jsx("h2",{children:"My Skills"})})}),Pt=({children:r,icons:n,renderImageBuffer:i,rotationRange:a})=>{const[o,s]=Ae(),c=l.useRef({x:0,y:0}),d=l.useRef(0),p=u=>{const{clientX:x,clientY:y}=u;h(x,y,c.current.x,c.current.y)>=i&&(c.current.x=x,c.current.y=y,m())},h=(u,x,y,f)=>{const k=y-u,D=f-x;return Math.sqrt(k*k+D*D)},m=()=>{const u=d.current%n.length,x=`[data-mouse-move-index="${u}"]`,y=document.querySelector(x);y.style.top=`${c.current.y}px`,y.style.left=`${c.current.x}px`,y.style.zIndex=d.current.toString();const f=Math.random()*a;s(x,{opacity:[0,1],transform:[`translate(-50%, -25%) scale(0) ${u%2?`rotate(${f}deg)`:`rotate(-${f}deg)`}`,`translate(-50%, -50%) scale(1) ${u%2?`rotate(-${f}deg)`:`rotate(${f}deg)`}`]},{type:"spring",damping:15,stiffness:200}),s(x,{opacity:[1,0]},{ease:"linear",duration:.5,delay:2}),d.current=d.current+1};return e.jsxs(Rt,{ref:o,className:"relative overflow-hidden",onMouseMove:p,children:[r,n.map((u,x)=>e.jsx(Ft,{"data-mouse-move-index":x,children:u},x))]})},Et=()=>{const r=le();return e.jsx(e.Fragment,{children:r?e.jsx(Lt,{}):e.jsx(Tt,{})})};function At({name:r}){const n=l.useRef(null),i=l.useRef(null),a=l.useRef(null),o=l.useRef(0);let s=-1;return l.useEffect(()=>{S.registerPlugin($e);const c=n.current,d=i.current,p=a.current;S.to(p,{scrollTrigger:{trigger:document.documentElement,scrub:.25,start:0,end:window.innerHeight},x:"-500px"});const h=()=>{o.current<-100?o.current=0:o.current>0&&(o.current=-100),S.set(c,{xPercent:o.current}),S.set(d,{xPercent:o.current}),requestAnimationFrame(h),o.current+=.1*s};return requestAnimationFrame(h),()=>{S.killTweensOf(c),S.killTweensOf(d),S.killTweensOf(p)}},[s]),e.jsxs($t,{ref:a,children:[e.jsx("p",{ref:n,children:r}),e.jsx("p",{ref:i,children:r})]})}const $t=t.div`
  position: relative;
  white-space: nowrap;

  p {
    position: relative;
    margin: 0;
    color: var(--color-white);
    font-size: 23rem;
    font-weight: 500;
    padding-right: 5rem;

    @media screen and (max-width: 720px) {
      font-size: 12rem;
    }
  }

  p:nth-of-type(2) {
    position: absolute;
    left: 100%;
    top: 0;
  }
`,w=({children:r})=>{const n=l.useRef(null);return l.useEffect(()=>{const i=S.quickTo(n.current,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),a=S.quickTo(n.current,"y",{duration:1,ease:"elastic.out(1, 0.3)"});n.current.addEventListener("mousemove",o=>{const{clientX:s,clientY:c}=o,{height:d,width:p,left:h,top:m}=n.current.getBoundingClientRect(),u=s-(h+p/2),x=c-(m+d/2);i(u*.35),a(x*.35)}),n.current.addEventListener("mouseleave",o=>{i(0),a(0)})},[]),oe.cloneElement(r,{ref:n})};function O({style:r}){return e.jsxs(Nt,{style:r,children:[e.jsx(w,{children:e.jsx(F,{children:e.jsx("a",{href:"https://www.linkedin.com/in/el-mehdi-ahmidou-312590125/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(Ne,{})})})}),e.jsx(w,{children:e.jsx(F,{children:e.jsx("a",{href:"https://github.com/ahmidou09/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(Be,{})})})}),e.jsx(w,{children:e.jsx(F,{children:e.jsx("a",{href:"https://www.facebook.com/mehdi.ahmidou",target:"_blank",rel:"noopener noreferrer",children:e.jsx(He,{})})})}),e.jsx(w,{children:e.jsx(F,{children:e.jsx("a",{href:"https://twitter.com/el_ahmidou",target:"_blank",rel:"noopener noreferrer",children:e.jsx(Oe,{})})})})]})}const Nt=t.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`,F=t.li`
  list-style: none;

  a {
    position: relative;
    display: block;
    width: 6rem;
    height: 6rem;
    text-align: center;
    line-height: 6.3rem;
    background: transparent;
    border-radius: 50%;
    font-size: 3rem;
    color: var(--color-white);
    transition: 0.5s;

    @media screen and (max-width: 900px) {
      width: 5rem;
      height: 5rem;
      line-height: 5.3rem;
    }

    @media screen and (max-width: 720px) {
      width: 4rem;
      height: 4rem;
      line-height: 4.3rem;
    }
  }

  a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: transparent;
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }

  a:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 1.5rem var(--color-white);
  }

  a:hover {
    color: var(--color-white);
    box-shadow: 0 0 0.5rem var(--color-white);
    text-shadow: 0 0 0.5rem var(--color-white);
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;

    @media screen and (max-width: 900px) {
      width: 2.25rem;
      height: 2.25rem;
    }

    @media screen and (max-width: 720px) {
      width: 2rem;
      height: 2rem;
    }
  }
`,Bt=t.footer`
  padding: 12rem 0 0 0;
  height: 100vh;
  position: relative;
`,Ht=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 3rem;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 3rem;
  }
`,q=t.div`
  font-size: 3.5rem;

  @media only screen and (max-width: 720px) {
    font-size: 3rem;
  }
`,Ot=t.section`
  background-color: var(--color-balck);
  color: var(--color-white);
`,Wt=t.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 5rem 0;

  h2 {
    font-size: 8rem;
    font-weight: 500;
    margin-bottom: 6rem;

    @media only screen and (max-width: 720px) {
      font-size: 4rem;
      text-align: center;
    }
  }
`,Y=t.hr`
  width: 100%;
  height: 0.2rem;
  font-size: 4rem;
  background-color: var(--color-white);
  border: none;
  border-radius: 5rem;
`,Gt=t.button`
  background-color: transparent;
  font-size: 2.5rem;
  font-weight: 500;
  border: 0.2rem solid var(--color-white);
  border-radius: 5rem;
  padding: 1.5rem 3rem;

  @media only screen and (max-width: 720px) {
    font-size: 2rem;
  }
`,qt=t.div`
  background-color: var(--color-balck);
  color: var(--color-white);
  padding: 3rem 0;
  text-align: center;
`,Yt=t.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 12rem;

  @media only screen and (max-width: 820px) {
    flex-direction: column;
    padding: 2rem;
  }
`;function P({style:r}){return e.jsx(Bt,{style:r,children:e.jsxs(Ot,{style:r,children:[e.jsxs(Wt,{children:[e.jsx("h2",{children:"Let’s work together"}),e.jsx(Y,{}),e.jsxs(Ht,{children:[e.jsx(q,{children:e.jsx("span",{children:"ahmidouem@gmail.com"})}),e.jsx(w,{children:e.jsx(Gt,{children:e.jsx(z,{to:"/contact",children:"Get in touch"})})}),e.jsx(q,{children:e.jsx("span",{children:"+212673235339"})})]}),e.jsx(Y,{})]}),e.jsxs(Yt,{children:[e.jsx(O,{}),e.jsx(qt,{children:e.jsxs("p",{children:["© ",new Date().getFullYear()," El Mehdi Ahmidou. All rights reserved."]})})]})]})})}const Jt={initial:{top:0},enter:r=>({top:"100vh",transition:{duration:.4,delay:.05*r,ease:[.215,.61,.355,1]},transitionEnd:{height:"0",top:"0"}}),exit:r=>({height:"100vh",transition:{duration:.4,delay:.05*r,ease:[.215,.61,.355,1]}})},_t={initial:{opacity:.5},enter:{opacity:0},exit:{opacity:.5}},Vt=t.div`
  .transition-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 2;
    div {
      position: relative;
      height: 100%;
      width: 100%;
      background-color: black;
    }
  }
  .transition-background {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: black;
    z-index: 1;
    pointer-events: none;
    top: 0;
    left: 0;
  }
`;function R({children:r}){const n=(a,o=null)=>({initial:"initial",animate:"enter",exit:"exit",custom:o,variants:a});return e.jsxs(Vt,{children:[e.jsx(g.div,{...n(_t),className:"transition-background"}),e.jsx("div",{className:"transition-container",children:[...Array(10)].map((a,o)=>e.jsx(g.div,{...n(Jt,10-o)},o))}),r]})}const Xt=t.button`
  letter-spacing: 1px;
  background: none;
  color: var(--color-white);
  position: relative;
  outline: none;
  border: none;
  height: 5rem;
  width: 19rem;
  font-size: 1.4rem;
  z-index: 2;
  transition: 0.01s 0.23s ease-out all;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 55%;
    background: var(--color-purple-1);
    z-index: -1;
    transition: 0.3s ease-in all;
  }

  &:after {
    content: "";
    position: absolute;
    left: -5%;
    top: 0;
    height: 100%;
    width: 5%;
    background: var(--color-white);
    z-index: -1;
    transition: 0.4s 0.02s ease-in all;
  }

  &:hover {
    cursor: pointer;
    color: transparent;

    &:before {
      left: 100%;
      width: 25%;
    }

    &:after {
      left: 100%;
      width: 70%;
    }

    .icon-right.after:after {
      left: -8rem;
      color: var(--color-white);
      transition: 0.2s 0.2s ease all;
    }

    .icon-right.after:before {
      left: -10.4rem;
      top: 1.4rem;
      opacity: 0.2;
      color: var(--color-white);
      transition: 0.2s ease-in all;
    }
  }
`,J=t.span`
  position: absolute;
  top: 0;
  right: 0;

  &:after {
    content: "→";
    font-size: 3rem;
    display: inline-block;
    position: relative;
    top: 2.6rem;
    transform: translate3D(0, -50%, 0);
  }

  &.after:after {
    left: -25rem;
    color: var(--color-white);
    transition: 0.15s 0.25s ease left, 0.5s 0.05s ease color;
  }

  &.after:before {
    content: "Show more";
    position: absolute;
    left: -23rem;
    top: 3rem;
    opacity: 0;
    transition: 0.2s ease-in all;
  }
`,Ut=({children:r})=>e.jsxs(Xt,{children:[r,e.jsx(J,{className:"icon-right"}),e.jsx(J,{className:"icon-right after"})]}),_=[{src:"https://i.ibb.co/vLZ4tDL/1.png"},{src:"https://i.ibb.co/74MgCWD/4.png"},{src:"https://i.ibb.co/0s29YPg/3.png"},{src:"https://i.ibb.co/rcMy522/5.png"}],Kt=[{src:"https://i.ibb.co/vLZ4tDL/1.png"},{src:"https://i.ibb.co/74MgCWD/4.png"},{src:"https://i.ibb.co/0s29YPg/3.png"},{src:"https://i.ibb.co/rcMy522/5.png"}],V=()=>{const r="0123456789ABCDEF";let n="#";for(let i=0;i<6;i++)n+=r[Math.floor(Math.random()*16)];return n},Qt=()=>{const r=l.useRef(null),{scrollYProgress:n}=re({target:r,offset:["start end","end start"]}),i=L(n,[0,1],[0,150]),a=L(n,[0,1],[0,-150]);return e.jsxs(Zt,{ref:r,children:[e.jsx(X,{style:{x:i},children:_.map((o,s)=>e.jsx(U,{style:{backgroundColor:V()},children:e.jsx(K,{children:e.jsx("img",{src:o.src,alt:`Slide ${s+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}})})},s))}),e.jsx(X,{style:{x:a},children:Kt.map((o,s)=>e.jsx(U,{style:{backgroundColor:V()},children:e.jsx(K,{children:e.jsx("img",{src:o.src,alt:`Slide ${s+1+_.length}`,style:{width:"100%",height:"100%",objectFit:"cover"}})})},s))})]})},Zt=t.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
  position: relative;
  z-index: 1;
`,X=t(g.div)`
  display: flex;
  position: relative;
  gap: 3vw;
  width: 120vw;
  left: -10vw;
`,U=t.div`
  padding: 1rem;
  width: 25%;
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
`,K=t.div`
  position: relative;
  width: 100%;
  height: 100%;
`;function er(){return e.jsx(R,{children:e.jsxs("div",{children:[e.jsxs(tr,{children:[e.jsxs(rr,{children:[e.jsx("span",{children:"hello"}),e.jsx("h1",{children:"I'm mehdi"}),e.jsx("h3",{children:"Front-End Software Developer"}),e.jsx("p",{children:"I Devlop Attractive, user Interface and web applications"})]}),e.jsx(nr,{children:e.jsx("img",{src:tt,alt:"hero"})}),e.jsx(ir,{children:e.jsx(At,{name:"El Mehdi Ahmidou -"})})]}),e.jsxs(or,{children:[e.jsx(st,{paragraph:lr}),e.jsx(Et,{})]}),e.jsxs(sr,{children:[e.jsx("h3",{children:"My Recent Work"}),e.jsx(ce,{element:6,displayMode:"grid"}),e.jsx(cr,{children:e.jsx(z,{to:"/projects",onClick:()=>window.scrollTo(0,0),children:e.jsx(Ut,{children:e.jsx("span",{children:"Show more"})})})})]}),e.jsx(ar,{children:e.jsx(Qt,{})}),e.jsx(P,{})]})})}const tr=t.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: calc(100vh - 7rem);

  h4 {
    text-shadow: 0 0 10px var(--color-purple-1), 0 0 20px var(--color-purple-1);

    @media screen and (max-width: 720px) {
      font-size: 4rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    height: 70vh;
  }
`,rr=t.div`
  color: var(--color-white);
  padding: 2rem 0 2rem 3rem;
  font-size: 5rem;
  margin-top: -30rem;
  width: 50%;

  span {
    color: var(--color-purple-1);
    font-size: 12rem;

    @media screen and (max-width: 720px) {
      display: none;
    }
  }

  h1 {
    font-size: clamp(6rem, 8vw, 12rem);

    @media screen and (max-width: 720px) {
      display: none;
    }
  }

  h3 {
    font-size: clamp(3rem, 3.5vw, 6rem);
    color: var(--color-purple-1);
  }

  p {
    font-size: clamp(1.5rem, 2vw, 3rem);
  }

  @media screen and (max-width: 720px) {
    position: absolute;
    padding: 2rem 3rem;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }
`,nr=t.div`
  background-image: url(${rt});
  background-size: cover;
  background-position: end;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media screen and (max-width: 720px) {
    align-items: end;
    width: 100%;
    height: 100%;
    background-position: center;
  }

  img {
    height: 100vh;

    @media screen and (max-width: 900px) {
      height: 80vh;
    }

    @media screen and (max-width: 720px) {
      height: 60vh;
    }
  }
`,ir=t.div`
  position: absolute;
  top: calc(100vh - 35rem);

  @media screen and (max-width: 720px) {
    top: calc(100vh - 55rem);
  }
`,or=t.div`
  background-color: var(--color-primary-2);
`,sr=t.div`
  background-color: var(--color-primary-3);
  padding: 10rem 0;

  h3 {
    color: var(--color-white);
    text-align: center;
    padding: 3rem;
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`,ar=t.div`
  padding: 10rem 0;
  background-color: var(--color-primary-2);
  overflow: hidden;
`,cr=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`,lr="Developing secure, efficient, and scalable web applications and web-based management systems by writing standard, well-documented, and efficient codes.",dr=t.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`,hr=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 1rem;
  margin: 1rem;
  color: var(--color-white);
  background: linear-gradient(
    to right,
    var(--color-primary-1),
    var(--color-primary-2)
  );
`,mr=t.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`,pr=t.div`
  font-size: 1rem;
`,gr=t.div`
  font-size: 2.5rem;
`,E=({icon:r,endValue:n,duration:i,description:a})=>{const[o,s]=l.useState(0);return l.useEffect(()=>{let c;const d=p=>{c||(c=p);const h=p-c,m=Math.min(h/i,1);s(Math.floor(m*n)),h<i&&requestAnimationFrame(d)};return requestAnimationFrame(d),()=>{s(0)}},[n,i]),e.jsxs(hr,{children:[e.jsx(mr,{children:r}),e.jsx(gr,{children:o}),e.jsx(pr,{children:a})]})},xr=()=>e.jsxs(dr,{children:[e.jsx(E,{icon:e.jsx(We,{}),endValue:50,duration:2500,description:"Number of projects done"}),e.jsx(E,{icon:e.jsx(Ge,{}),endValue:23,duration:2500,description:"Number of happy clients"}),e.jsx(E,{icon:e.jsx(qe,{}),endValue:1e3,duration:2500,description:"Cups of coffee consumed"})]}),ur=({children:r})=>e.jsx("div",{children:r}),fr=t.div`
  background-color: transparent;
  color: var(--color-white);
  margin-bottom: 3px;

  &:last-child {
    margin-bottom: 0;
  }
`,br=t.button`
  position: relative;
  display: block;
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  padding: 2.5rem 6rem 2.5rem 2.5rem;
  font-weight: 500;
  font-size: 1.8rem;
  color: var(--color-white-2);
  background-color: var(--color-primary-2);
  font-family: inherit;
  transition: color 0.2s linear;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:after,
  &:before {
    content: "";
    position: absolute;
    right: 2.5rem;
    top: 50%;
    width: 2.2rem;
    height: 0.2rem;
    margin-top: -1px;
    background-color: var(--color-white-2);
  }

  &:before {
    transform: rotate(-90deg);
    transition: transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  ${r=>r.$expanded==="true"&&H`
      color: var(--color-white);

      &:before {
        transform: rotate(0deg);
      }
    `}
`,jr=t.div`
  overflow: hidden;
  will-change: height;
  transition: height 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
  background-color: var(--color-primary-2);
`,vr=t.div`
  font-size: 2rem;
  color: var(--color-white-2);
  opacity: 1;
  transition: opacity 0.3s linear 0.18s;
  padding: 3rem 6rem;
  line-height: 1.5;

  p {
    margin-bottom: 2rem;
    margin-left: 3rem;
  }

  h5 {
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--color-white-2);
  }

  li {
    position: relative;
  }

  li::before {
    content: "✓";
    position: absolute;
    left: -3rem;
    top: 0;
    width: 2rem;
    height: 2rem;
    color: var(--color-primary-3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 720px) {
    padding: 2rem 4rem;
  }
`,wr=({label:r,content:n,isActive:i,onClick:a})=>{const[o,s]=l.useState(0),c=l.useRef(null);return l.useEffect(()=>{c.current&&s(c.current.clientHeight)},[n]),e.jsxs(fr,{children:[e.jsx(br,{onClick:a,$expanded:i.toString(),children:r}),e.jsx(jr,{style:{height:i?o+"px":0},children:e.jsx(vr,{ref:c,children:n})})]})},yr=({panels:r})=>{const[n,i]=l.useState(0),a=o=>{i(s=>s===o?-1:o)};return e.jsx("div",{className:"accordion",role:"tablist",children:r.map((o,s)=>e.jsx(wr,{label:o.label,content:o.content,isActive:n===s,onClick:()=>a(s)},s))})},kr="/assets/profile-B5zpe5m5.jpg",Sr=[{label:e.jsx("h2",{children:"ABOUT ME"}),content:e.jsx("p",{children:"As a Front End Developer, I am passionate about crafting clean code, ensuring accessible design, and developing user interfaces and web applications. I thrive in environments that embrace pair-programming and remote work, With fluency in a variety of programming languages, frameworks, and technologies, I can adapt and scale my skills rapidly and effectively."})},{label:e.jsx("h2",{children:"EXPERIENCE"}),content:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("h3",{children:"Front-End Developer | Freelance | Remote "}),e.jsx("h5",{children:"Jan 2022 - current"}),e.jsx("p",{children:"● Designed, and developed responsive UI for web applications using React.js."}),e.jsx("p",{children:"● Interacted with third-party APIs using Redux Toolkit and React Hooks."}),e.jsx("p",{children:"● Collaborated with back-end developers to integrate APIs and ensure seamless data exchange."}),e.jsx("p",{children:"● Worked closely with designers and product managers to ensure high-quality user experiences."}),e.jsxs("p",{children:[" ","● Tested web applications using Jest and React Testing Library."]})]}),e.jsxs("li",{children:[e.jsx("h3",{children:"Math Teacher | Ministry of National Education | Morocco "}),e.jsx("h5",{children:"Jan 2018 - Jan 2022"}),e.jsx("p",{children:"Delivered tailored instruction, fostered personalized learning experiences, and collaborated with peers on interdisciplinary projects."})]})]})},{label:e.jsx("h2",{children:"EDUCATION"}),content:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("h6",{children:"MICROVERSE | Remote"}),e.jsx("h3",{children:"Remote Full-stack Web Development Program, Full Time"}),e.jsx("h5",{children:"May 2023 - April 2024"}),e.jsx("p",{children:"- Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux"}),e.jsx("p",{children:"- Developed skills in remote pair-programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers"})]}),e.jsxs("li",{children:[e.jsx("h6",{children:"University of Mohamed V, Rabat, Morocco"}),e.jsx("h3",{children:"Bachelor's Degree in Physics"}),e.jsx("h5",{children:"Sep 2012 - Sep 2015"}),e.jsx("p",{children:"- Gained expertise in mathematics, physics, and programming."})]})]})},{label:e.jsx("h2",{children:"SKILLS"}),content:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Front-End :"})," JavaScript, React.js, Redux, HTML, CSS3, Sass(SCSS), Tailwind CSS, Bootstrap"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Back-End:"})," Ruby, Ruby on Rails, PostgreSQL"," "]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tools & Methods:"})," Git, GitHub, Mobile/Responsive Development, RSpec, TDD, Jest, Chrome Dev Tools, Webpack"," "]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Professional:"})," Remote Pair-Programming, Teamwork, Mentoring, User experience design, Strong problem-solving."," "]})]})}],Cr=t.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 12rem 0 0 0;
`,zr=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  gap: 6rem;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 3rem;
  }
`,Mr=t.div`
  margin-right: 2rem;

  @media screen and (max-width: 720px) {
    margin-right: 0;
  }
`,Lr=t.img`
  border-radius: 50%;
  max-width: 30rem;
  height: auto;
`,Ir=t.div`
  color: var(--color-white);
  h1 {
    font-size: 3.4rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 720px) {
      font-size: 3rem;
      text-align: center;
    }
  }

  p {
    font-weight: 400;
    line-height: 1.5;
    font-size: 2.2rem;

    @media screen and (max-width: 720px) {
      font-size: 1.8rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 720px) {
    padding: 0 3rem;
  }
`;function Rr(){return e.jsx(R,{children:e.jsxs(Cr,{children:[e.jsxs(zr,{children:[e.jsx(Mr,{children:e.jsx(Lr,{src:kr,alt:"EL MEHDI AHMIDOU"})}),e.jsxs(Ir,{children:[e.jsx("h1",{children:"Hello, I'm EL MEHDI AHMIDOU 🙂"}),e.jsx("p",{children:" I'm a Front End Developer from Morocco."}),e.jsx(xr,{})]})]}),e.jsx(ur,{children:e.jsx(yr,{panels:Sr})}),e.jsx(P,{})]})})}const Dr=t.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 12rem 0 0 0;
  h1 {
    font-size: 8rem;
    color: var(--color-white);
    padding: 0 3rem;
    @media screen and (max-width: 720px) {
      font-size: 6rem;
      text-align: center;
      margin-bottom: 4rem;
      padding: 1rem;
    }
  }
`,Fr=t.div`
  margin-top: 2rem;
  padding: 0 3rem;
  display: flex;
  justify-content: end;
  @media screen and (max-width: 720px) {
    justify-content: center;
  }
`,Tr=t.button`
  margin: 0 1rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    background-color: var(--color-primary-3);
    color: var(--color-white);
  }
`;function Pr(){const[r,n]=Ye(),i=r.get("view")||"list",[a,o]=l.useState(i),s=()=>{const c=a==="list"?"grid":"list";o(c),r.set("view",c),n(r)};return e.jsxs(R,{children:[e.jsxs(Dr,{children:[e.jsx("h1",{children:"My Projects"}),e.jsx(Fr,{children:e.jsx(w,{children:e.jsxs(Tr,{onClick:s,children:[a==="list"?e.jsx(Je,{}):e.jsx(_e,{}),a==="list"?"Grid View":"List View"]})})}),e.jsx(ce,{style:{marginTop:"5rem",backgroundColor:"transparent"},displayMode:a})]}),e.jsx(P,{style:{backgroundColor:"var(--color-primary-2)"}})]})}const Er=t.form``,T=t.div`
  position: relative;
  width: 40rem;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`,Ar=t.div`
  color: red;
  margin: 10px 0;
  font-weight: bold;
`,A=t.label`
  transition: 0.5s;
  position: absolute;
  top: ${({$hasContent:r})=>r?"-30px":"0"};
  left: 0;
  font-size: ${({$hasContent:r})=>r?"12px":"16px"};
  color: ${({$hasContent:r})=>r?"var(--color-grey-0)":"var(--color-white)"};
  padding: 10px 0;
  pointer-events: none;
  transition: 0.5s;
`,de=H`
  width: 100%;
  padding: 1rem 0;
  font-size: 1.6rem;
  color: var(--color-white);
  margin-bottom: 6rem;
  border: none;
  border-bottom: 1px solid var(--color-white);
  outline: none;
  background: transparent;

  &:focus ~ label {
    top: -30px;
    left: 0;
    color: var(--color-grey-0);
    font-size: 12px;
  }
`,Q=t.input`
  ${de}
`,$r=t.textarea`
  ${de}
`,Nr=I`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`,Br=I`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`,Hr=I`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`,Or=I`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`,Wr=t.button`
  position: relative;
  display: inline-block;
  border: none;
  padding: 10px 20px;
  color: var(--color-purple-1);
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 4rem;
  letter-spacing: 4px;

  @media screen and (max-width: 720px) {
    margin-top: 0;
  }

  &:hover {
    background: var(--color-purple-1);
    color: var(--color-white);
    border-radius: 5px;
    box-shadow: 0 0 5px var(--color-purple-1), 0 0 25px var(--color-purple-1),
      0 0 50px var(--color-purple-1), 0 0 100px var(--color-purple-1);
  }

  span {
    position: absolute;
    display: block;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--color-purple-1));
    animation: ${Nr} 1s linear infinite;
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, var(--color-purple-1));
    animation: ${Br} 1s linear infinite;
    animation-delay: 0.25s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, var(--color-purple-1));
    animation: ${Hr} 1s linear infinite;
    animation-delay: 0.5s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, var(--color-purple-1));
    animation: ${Or} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;function Gr(){const[r,n]=l.useState(""),[i,a]=l.useState(""),[o,s]=l.useState(""),[c,d]=l.useState("");function p(h){h.preventDefault(),h.stopPropagation(),fetch("https://formcarry.com/s/uVqNaFy0niZ",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:r,email:i,message:o})}).then(m=>m.json()).then(m=>{m.code===200?alert("We received your submission, thank you!"):(m.code,d(m.message))}).catch(m=>{d(m.message?m.message:m)})}return e.jsxs(Er,{onSubmit:h=>p(h),children:[c&&e.jsx(Ar,{children:c}),e.jsxs(T,{children:[e.jsx(Q,{type:"text",value:r,onChange:h=>n(h.target.value),id:"name",required:!0}),e.jsx(A,{htmlFor:"name",$hasContent:r.length>0,children:"Full Name"})]}),e.jsxs(T,{children:[e.jsx(Q,{type:"email",value:i,onChange:h=>a(h.target.value),id:"email",required:!0}),e.jsx(A,{htmlFor:"email",$hasContent:i.length>0,children:"Your Email Address"})]}),e.jsxs(T,{children:[e.jsx($r,{value:o,onChange:h=>s(h.target.value),id:"message",required:!0}),e.jsx(A,{htmlFor:"message",$hasContent:o.length>0,children:"Your message"})]}),e.jsx(T,{children:e.jsxs(Wr,{type:"submit",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),"Send"]})})]})}const qr=t.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 6rem 0 0 0;
  color: var(--color-white);

  h1 {
    font-size: 8rem;
    margin-bottom: 2rem;
    padding: 0 3rem;

    @media screen and (max-width: 900px) {
      font-size: 6rem;
      text-align: center;
    }
  }
`,Yr=t.p`
  margin-bottom: 8rem;
  font-size: 1.9rem;
  padding: 0 3rem;

  @media screen and (max-width: 900px) {
    text-align: center;
  }
`,Jr=t.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  padding: 0 3rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  @media screen and (max-width: 720px) {
    gap: 5rem;
    padding: 0 5rem;
  }
`,_r=t.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h2 {
    font-size: 5rem;
    font-weight: 300;

    @media screen and (max-width: 900px) {
      text-align: center;
      font-size: 4rem;
    }
  }

  span {
    font-size: 3.2rem;
    font-weight: 500;
    display: block;
  }

  @media screen and (max-width: 900px) {
    align-items: center;
  }
`,Vr=t.div`
  font-size: 1.6rem;
  color: var(--color-white);
  padding: 6rem 3rem;
  text-align: center;
`;function Xr(){return e.jsx(R,{children:e.jsxs(qr,{children:[e.jsx("h1",{children:"Let's work together"}),e.jsx(Yr,{children:"I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!"}),e.jsx("div",{children:e.jsxs(Jr,{children:[e.jsx(Gr,{}),e.jsxs(_r,{children:[e.jsx("h2",{children:"Contact Details"}),e.jsx("span",{children:"ahmidouem@gmail.com"}),e.jsx("span",{children:"+2126 73 23 53 39"}),e.jsx(O,{})]})]})}),e.jsx(Vr,{children:e.jsxs("p",{children:["© ",new Date().getFullYear()," El Mehdi Ahmidou. All rights reserved."]})})]})})}const Ur=t.header`
  display: flex;
  padding: 2rem 5rem;
  justify-content: space-between;
  align-items: center;
  color: var(--color-white);
  font-weight: 400;
  letter-spacing: 0.1rem;
  ${r=>r.$isProjectPage&&H`
      background-color: var(--color-primary-3);
    `}
`,Kr=t.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: relative;
  transform: rotate(0deg);
  font-size: 1.7rem;

  .copy span {
    position: relative;
    display: block;
    transition: transform 0.8s ease;
    transform-origin: center;
    font-size: 2.5rem;
  }

  &:hover .copy span {
    transform: rotate(360deg);
  }

  &:hover .credit .codeBy,
  &:hover .credit .mehdi,
  &:hover .credit .ahmidou {
    transform: translateX(-6rem);
  }

  .credit {
    display: flex;
    align-items: center;
    transition: transform 0.6s ease;
    overflow: hidden;
    width: max-content;

    .codeBy {
      display: block;
      transform: translateX(0);
      transition: transform 0.6s ease;
    }

    .mehdi {
      transition: transform 0.6s ease;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    .ahmidou {
      display: block;
      transform: translateX(5.5rem);
      transition: transform 0.6s ease;
      width: 0;
      padding-right: 1rem;
    }
  }
`,Qr=t.nav`
  ul {
    display: flex;
    gap: 3rem;
  }

  li {
    font-size: 1.7rem;
  }
`,$=t(Ve)`
  position: relative;
  color: inherit;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: var(--color-white);
    transition: all 0.2s ease-in-out;
  }

  &:hover::before {
    top: 150%;
    width: 0.75rem;
    height: 0.75rem;
  }
`;function Zr(){const n=se().pathname.match(/^\/projects\/\d+/);return e.jsxs(Ur,{$isProjectPage:!!n,children:[e.jsx(w,{children:e.jsx(z,{to:"/",children:e.jsxs(Kr,{children:[e.jsx("div",{className:"copy",children:e.jsx("span",{children:"©"})}),e.jsxs("div",{className:"credit",children:[e.jsx("span",{className:"codeBy",children:"Code by "})," ",e.jsx("span",{className:"mehdi",children:"El Mehdi"}),e.jsx("span",{className:"ahmidou",children:"Ahmidou"})]})]})})}),e.jsx(Qr,{children:e.jsxs("ul",{children:[e.jsx(w,{children:e.jsx("li",{children:e.jsx($,{to:"/projects",children:"Projects"})})}),e.jsx(w,{children:e.jsx("li",{children:e.jsx($,{to:"/about",children:"About-me"})})}),e.jsx(w,{children:e.jsx("li",{children:e.jsx($,{to:"/contact",children:"Contact"})})})]})})]})}const en={initial:{x:80},enter:r=>({x:0,transition:{duration:.8,ease:[.76,0,.24,1],delay:.05*r}}),exit:r=>({x:80,transition:{duration:.8,ease:[.76,0,.24,1],delay:.05*r}})},tn={open:{scale:1,transition:{duration:.3}},closed:{scale:0,transition:{duration:.4}}},rn=t(g.div)`
  position: relative;
  display: flex;
  align-items: center;
`,nn=t(g.div)`
  width: 1rem;
  height: 1rem;
  background-color: var(--color-white);
  border-radius: 50%;
  position: absolute;
  left: -3rem;
`;function on({data:{title:r,href:n,index:i},isActive:a,setSelectedIndicator:o,setIsActive:s}){return e.jsxs(rn,{onMouseEnter:()=>o(n),custom:i,variants:en,initial:"initial",animate:"enter",exit:"exit",onClick:()=>{s(!1),window.scrollTo(0,0)},children:[e.jsx(nn,{variants:tn,animate:a?"open":"closed"}),e.jsx(z,{to:n,"aria-label":r,children:r})]})}const sn=t.svg`
  position: absolute;
  top: 0;
  left: -10rem;
  width: 10rem;
  height: 100%;
  fill: var(--color-purple-1);
  stroke: none;
`;function an(){const r=`M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`,n=`M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`,i={initial:{d:r},enter:{d:n,transition:{duration:1,ease:[.76,0,.24,1]}},exit:{d:r,transition:{duration:.8,ease:[.76,0,.24,1]}}};return e.jsx(sn,{children:e.jsx(g.path,{variants:i,initial:"initial",animate:"enter",exit:"exit"})})}const cn={initial:{x:"calc(100% + 10rem)"},enter:{x:"0",transition:{duration:.8,ease:[.76,0,.24,1]}},exit:{x:"calc(100% + 10rem)",transition:{duration:.8,ease:[.76,0,.24,1]}}},ln=[{title:"Home",href:"/"},{title:"Work",href:"/projects"},{title:"About",href:"/about"},{title:"Contact",href:"/contact"}],dn=t(g.div)`
  height: 100vh;
  background-color: var(--color-purple-1);
  position: fixed;
  right: 0;
  top: 0;
  color: var(--color-white);
  z-index: 999;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`,hn=t.div`
  box-sizing: border-box;
  height: 100%;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,mn=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  font-size: 4.6rem;

  @media screen and (max-width: 720px) {
    font-size: 3.8rem;
  }
`;function pn({setIsActive:r}){const i=se().pathname,[a,o]=l.useState(i);return e.jsxs(dn,{variants:cn,initial:"initial",animate:"enter",exit:"exit",children:[e.jsxs(hn,{children:[e.jsx(mn,{onMouseLeave:()=>o(i),children:ln.map((s,c)=>e.jsx(on,{data:{...s,index:c},isActive:a===s.href,setSelectedIndicator:o,setIsActive:r},c))}),e.jsx(O,{})]}),e.jsx(an,{})]})}const gn=t.div`
  .header {
    padding: 3rem;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9999;

    .button {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      background-color: var(--color-purple-1);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 720px) {
        width: 5.2rem;
        height: 5.2rem;
      }

      .burger {
        content: "";
        display: block;
        height: 0.15rem;
        margin: auto;
        background-color: var(--color-white);
        transition: transform 0.3s;
        width: 4.2rem;

        @media screen and (max-width: 720px) {
          width: 3.6rem;
        }

        &::after,
        &::before {
          content: "";
          display: block;
          height: 0.15rem;
          width: 100%;
          margin: auto;
          background-color: var(--color-white);
          position: relative;
          transition: transform 0.3s;
        }

        &::after {
          top: -0.9rem;
          height: 0.1rem;
        }

        &::before {
          top: 0.8rem;
        }
      }

      .burgerActive {
        background-color: transparent;

        &::after {
          transform: rotate(135deg);
          top: -0.1rem;
        }

        &::before {
          transform: rotate(-135deg);
          top: 0;
        }
      }
    }
  }
`;function Z(){const[r,n]=l.useState(!1),[i,a]=l.useState(window.location.pathname);return l.useEffect(()=>{r&&n(!0)},[i,r]),l.useEffect(()=>{const o=()=>a(window.location.pathname);return window.addEventListener("popstate",o),()=>window.removeEventListener("popstate",o)},[]),e.jsxs(gn,{children:[e.jsx("div",{className:"header",children:e.jsx(w,{children:e.jsx("div",{onClick:()=>{n(!r)},className:"button",children:e.jsx("div",{className:`burger ${r?"burgerActive":""}`})})})}),e.jsx(ae,{mode:"wait",children:r&&e.jsx(pn,{isActive:r,setIsActive:n})})]})}function xn(){const r=le(),[n,i]=l.useState(!1);return l.useEffect(()=>{const a=()=>{window.scrollY>100?i(!0):i(!1)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),e.jsx(e.Fragment,{children:r?e.jsx(Z,{}):e.jsxs(e.Fragment,{children:[e.jsx(Zr,{}),n&&e.jsx(Z,{})]})})}const un=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,fn=I`
  to {
    transform: rotate(1turn)
  }
`,bn=t.div`
  margin: 4.8rem auto;

  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #4d5bce 94%, #0000) top/10px 10px
      no-repeat,
    conic-gradient(#0000 30%, #4d5bce);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${fn} 1.5s infinite linear;
`;function jn(){return e.jsx(un,{children:e.jsx(bn,{})})}const vn=t.div`
  width: 100%;
  background-color: var(--color-primary-3);
`;function wn(){const[r,n]=l.useState(!0);return l.useEffect(()=>{const i=setTimeout(()=>n(!1),1e3);return()=>clearTimeout(i)},[]),e.jsxs(vn,{children:[e.jsx(xn,{}),e.jsx("main",{children:r?e.jsx(jn,{}):e.jsx(Xe,{})})]})}const yn=500,kn=yn*10,ee=50,he={type:"spring",mass:3,stiffness:400,damping:50},Sn=t.div`
  position: relative;
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5rem;
`,Cn=t(g.div)`
  display: flex;
  cursor: grab;
  align-items: top;

  &:active {
    cursor: grabbing;
  }
`,zn=t(g.div)`
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 18 / 9;
  border-radius: 1rem;
  background-position: top;
  background-size: 100%;
`,Mn=t.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 8px;
`,Ln=t.button`
  height: 12px;
  width: 12px;
  border-radius: 9999px;
  transition: background-color 0.2s;
`,te=t.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  top: 0;
  width: 10vw;
  max-width: 100px;
`,In=({imgs:r})=>{const[n,i]=l.useState(0),a=B(0);l.useEffect(()=>{const s=setInterval(()=>{a.get()===0&&i(d=>d===r.length-1?0:d+1)},kn);return()=>clearInterval(s)},[a,r.length]);const o=()=>{const s=a.get();s<=-ee&&n<r.length-1?i(c=>c+1):s>=ee&&n>0&&i(c=>c-1)};return e.jsxs(Sn,{children:[e.jsxs(Cn,{drag:"x",dragConstraints:{left:0,right:0},style:{x:a},animate:{translateX:`-${n*100}%`},transition:he,onDragEnd:o,children:[e.jsx(Rn,{imgIndex:n,imgs:r})," "]}),e.jsx(Dn,{imgIndex:n,setImgIndex:i,imgs:r})," ",e.jsx(Fn,{})]})},Rn=({imgIndex:r,imgs:n})=>e.jsx(e.Fragment,{children:n.map((i,a)=>e.jsx(zn,{style:{backgroundImage:`url(${i})`},animate:{scale:r===a?.95:.85},transition:he},a))}),Dn=({imgIndex:r,setImgIndex:n,imgs:i})=>e.jsx(Mn,{children:i.map((a,o)=>e.jsx(Ln,{onClick:()=>n(o),style:{backgroundColor:o===r?"var(--color-purple-1)":"var(--color-white-2)",border:"none"}},o))}),Fn=()=>e.jsxs(e.Fragment,{children:[e.jsx(te,{style:{left:0}}),e.jsx(te,{style:{right:0}})]}),Tn=t.div`
  background-color: var(--color-primary-3);
  position: relative;
`,Pn=t.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 6rem 2rem 5rem 2rem;
`,En=t.section`
  text-align: center;
  color: var(--color-white-2);
  padding: 4rem 0;
  margin-bottom: 4rem;
  background-color: var(--color-primary-3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 720px) {
    height: 40vh;
  }
`,An=t.h1`
  font-size: 6.5rem;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 720px) {
    font-size: 5rem;
  }
`,$n=t.h2`
  font-size: 3.2rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 720px) {
    font-size: 2.5rem;
  }
`,Nn=t.section`
  font-size: 1.8rem;
  color: var(--color-white-2);
  line-height: 1.5;
  margin-bottom: 2rem;
  text-align: center;
`,Bn=t.section`
  margin: 2rem 0;
`,Hn=t.h3`
  font-size: 2.4rem;
  color: var(--color-white-2);
  margin-bottom: 1rem;
`,On=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,Wn=t.section`
  margin: 2rem 0;
`,Gn=t.h3`
  font-size: 2.4rem;
  color: var(--color-white-2);
  margin-bottom: 1rem;
`,qn=t.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Yn=t.li`
  font-size: 1.7rem;
  color: var(--color-white-2);
  margin-bottom: 0.5rem;
  position: relative;
  margin-left: 2rem;

  &:before {
    content: "✓";
    margin-left: 2rem;
    color: var(--color-purple-1);
    position: absolute;
    left: -4rem;
    top: 0;
  }
`,Jn=t.span`
  background-color: var(--color-white-2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.8rem;
  color: var(--color-grey-1);
  margin: 0.5rem;
`,_n=t.section`
  position: relative;
  text-align: center;
  margin-top: 2rem;
`,N=t(z)`
  padding: 10px 20px;
  margin: 5px;
  border-radius: 4px;
  background-color: var(--color-purple-1);
  color: var(--color-white-2);
  text-align: center;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: var(--color-button-p-1);
  }
`,Vn=t.div`
  color: var(--color-white-2);
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary-2);

  @media only screen and (max-width: 720px) {
    height: 30vh;
  }

  h3 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    text-align: center;
    justify-self: flex-start;
  }
`,Xn=t(z)`
  background-color: var(--color-blue-1);
  color: var(--color-white-2);
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: max-content;

  h2 {
    font-size: 12rem;
    transition: all 0.5s ease-in-out;
    font-weight: 300;
    text-decoration: underline var(--color-purple-1) 4px;

    @media screen and (max-width: 720px) {
      font-size: 6rem;
    }
  }

  &:hover > span {
    transform: translateY(-10%);
    opacity: 1;
    width: 30rem;
    height: 35rem;
  }

  &:hover h2 {
    opacity: 0.3;
  }
`,Un=t.span`
  transform: translateY(0%);
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  background-size: cover;
  background-position: top;
  border-radius: 4px;
  transition: all 0.5s ease-in-out;
`,Kn=()=>{const{id:r}=Ue(),n=C.findIndex(o=>o.id.toString()===r),i=C[n],a=C[(n+1)%C.length];return i?e.jsx(R,{children:e.jsxs(Tn,{children:[e.jsxs(En,{children:[e.jsx(An,{children:i.heading}),e.jsx($n,{children:i.subheading}),e.jsx(N,{to:i.liveLink,target:"_blank",children:"LIVE LINK"})]}),e.jsx(In,{imgs:i.imgs}),e.jsxs(Pn,{children:[e.jsx(Nn,{children:i.Overview}),e.jsxs(Bn,{children:[e.jsx(Hn,{children:"Tools Used"}),e.jsx(On,{children:i.techonlogy.map((o,s)=>e.jsx(Jn,{children:o},s))})]}),e.jsxs(Wn,{children:[e.jsx(Gn,{children:"Features"}),e.jsx(qn,{children:i.features.map((o,s)=>e.jsx(Yn,{children:o},s))})]}),e.jsxs(_n,{children:[e.jsx(N,{to:i.liveLink,target:"_blank",children:"LIVE LINK"}),e.jsx(N,{to:i.githubLink,target:"_blank",children:"GITHUB"})]})]}),e.jsxs(Vn,{children:[e.jsx("h3",{children:"Next Case"}),a&&e.jsxs(Xn,{to:`/projects/${a.id}`,onClick:()=>window.scrollTo(0,0),children:[e.jsxs("h2",{children:[" ",a.heading]}),e.jsx(Un,{style:{backgroundImage:`url(${a.imgSrc}) `}})]})]}),e.jsx(P,{})]})}):e.jsx("div",{children:"Project not found!"})};function Qn(){return e.jsx(e.Fragment,{children:e.jsx(Ke,{children:e.jsx(ae,{mode:"wait",children:e.jsx(Qe,{children:e.jsxs(M,{path:"/",element:e.jsx(wn,{}),children:[e.jsx(M,{index:!0,element:e.jsx(er,{})}),e.jsx(M,{path:"about",element:e.jsx(Rr,{})}),e.jsx(M,{path:"projects",element:e.jsx(Pr,{})}),e.jsx(M,{path:"projects/:id",element:e.jsx(Kn,{})}),e.jsx(M,{path:"contact",element:e.jsx(Xr,{})})]})})})})})}const Zn=Ze`
:root {
  /* color primary */
  --color-primary-1: #01080E;
  --color-primary-2: #011221;
  --color-primary-3: #011627;
  /* color secondary */
  --color-grey-0: #999D9E;
  --color-grey-1: #607B96;
  --color-teal-1: #3C9D93;
  --color-purple-1 : #263B50;
  --color-purple-2 : #5565E8;

  /* color accent */
  --color-accent-1: #C98BDF;
  --color-accent-2: #E99287;
  --color-accent-3: #43D9AD;
  --color-accent-4: #FEA55F;
  /* color lines */
  --color-black: #000;
  --color-lines : #1E2D3D;
  --color-white : #FFFFFF;
  --color-white-2 : #e5e9f0;

  /*color button */
  --color-button-red-1 : #F44336;
  --color-button-red-2 : #f44336b3;
  --color-button-d-1: #FEA55F;
  --color-button-d-2: #FFAC6B;
  --color-button-p-1: #1C2B3A;
  --color-button-p-2: #263B50;
  --color-button-p-3: #ffee10;

  --break-point-mob: 768px;
  --break-point-tab: 1024px;
  --break-point-desk: 1440px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;

 @media screen and (max-width: 720px) {
    font-size: 50%;
  } 
}

body {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.6rem;
}


input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}


/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
`;et.createRoot(document.getElementById("root")).render(e.jsxs(oe.StrictMode,{children:[e.jsx(Zn,{}),e.jsx(Qn,{})]}));
