(this["webpackJsonpgithub-api"]=this["webpackJsonpgithub-api"]||[]).push([[0],{22:function(e,t,r){},24:function(e,t,r){},43:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(2),s=r.n(n),c=r(14),i=r.n(c),o=(r(22),r(5)),l=r.n(o),u=r(15),p=r(3),j=(r(24),r(16)),f=r.n(j),b="Not found",d=function(e){var t=e.profileData,r=e.profileName,n=e.setProfileName,s=e.profileError;return Object(a.jsxs)("div",{className:"profile-container",children:[Object(a.jsx)("img",{className:"profile-image",src:t.avatar_url||"https://st2.depositphotos.com/1502311/12020/v/600/depositphotos_120206862-stock-illustration-profile-picture-vector.jpg",alt:"profile"}),Object(a.jsx)("input",{type:"text",className:"input-field",value:r,onChange:function(e){return n(e.target.value)},placeholder:"Enter github user name"}),s&&Object(a.jsxs)("p",{children:["Profile ",s]}),t&&!s&&Object(a.jsxs)("div",{className:"data-section",children:[Object(a.jsxs)("p",{children:["Username: ",t.login||b]}),Object(a.jsxs)("p",{children:["Name: ",t.name||b]}),Object(a.jsxs)("p",{children:["Number of Repos: ",t.public_repos||b]})]})]})};var h=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)(""),i=Object(p.a)(c,2),o=i[0],j=i[1],b=Object(n.useState)(""),h=Object(p.a)(b,2),O=h[0],m=h[1],x=Object(n.useState)(""),v=Object(p.a)(x,2),g=v[0],N=v[1],P=Object(n.useState)(""),w=Object(p.a)(P,2),S=w[0],C=w[1],E=Object(n.useState)(""),k=Object(p.a)(E,2),D=k[0],F=k[1],L=function(){var e=Object(u.a)(l.a.mark((function e(t,r,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.github.com/users/"+t).then((function(e){var t=e.data;r(t),console.log("Profile data: ",o),m(""),F(""),a("")})).catch((function(e){r(""),e.response?a(e.response.statusText):e.request?a(e.request.XMLHttpRequest.statusText):a("Unknown Error")}));case 2:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)("h2",{children:"Fetch GitHub Profiles"}),Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(d,{profileData:o,profileName:O,setProfileName:m,profileError:r}),Object(a.jsx)("button",{onClick:function(){var e=O.trim().toLowerCase();m(e);var t=D.trim().toLowerCase();F(t),e.includes(" ")||t.includes(" ")?alert("Username should not contain space"):e&&t?(L(e,j,s),L(t,C,N)):alert("Please Enter All fields")},children:"Get Profile Details"}),Object(a.jsx)(d,{profileData:S,profileName:D,setProfileName:F,profileError:g})]})]})},O=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,44)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.68306622.chunk.js.map