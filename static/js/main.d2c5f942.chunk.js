(this["webpackJsonpgithub-api"]=this["webpackJsonpgithub-api"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n(2),r=n.n(s),a=n(15),c=n.n(a),i=(n(22),n(6)),l=n.n(i),u=n(16),p=n(4),f=(n(24),n(3)),j=n.n(f),b="Not found",d="",h="",m=function(e){var t=e.profileData,n=e.profileName,s=e.setProfileName,r=e.profileError,a=e.handleSubmit;return Object(o.jsxs)("div",{className:"profile-container",children:[Object(o.jsx)("img",{className:"profile-image",src:t.avatar_url||"https://st2.depositphotos.com/1502311/12020/v/600/depositphotos_120206862-stock-illustration-profile-picture-vector.jpg",alt:"profile"}),Object(o.jsx)("input",{type:"text",className:"input-field",value:n,onChange:function(e){return function(e){d=e.target.value.trim(),s(d)}(e)},onKeyUp:function(){return clearTimeout(h),void(h=setTimeout((function(){console.log(d),a(d)}),1500))},placeholder:"Enter github user name"}),d&&r&&Object(o.jsxs)("p",{children:["Profile ",r]}),t&&!r&&Object(o.jsxs)("div",{className:"data-section",children:[Object(o.jsxs)("p",{children:["Username: ",t.login||b]}),Object(o.jsxs)("p",{children:["Name: ",t.name||b]}),Object(o.jsxs)("p",{children:["Number of Repos: ",t.public_repos||b]})]})]})};var g=function(){var e=Object(s.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(""),c=Object(p.a)(a,2),i=c[0],f=c[1],b=Object(s.useState)(""),d=Object(p.a)(b,2),h=d[0],g=d[1],O=function(){var e=Object(u.a)(l.a.mark((function e(t,n,o){var s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=j.a.CancelToken,r=s.source(),e.next=4,j.a.get("https://api.github.com/users/"+t,{cancelToken:r.token}).then((function(e){if(t===e.data.login){var s=e.data;n(s),console.log("Profile data: ",i),o("")}})).catch((function(e){n(""),e.response?o(e.response.statusText):e.request?(o(e.request.XMLHttpRequest.statusText),console.log(e)):j.a.isCancel(e)?(o(e.message),console.log("Axios cancelled: ",e.message)):o("Unknown Error")}));case 4:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("h2",{children:"Fetch GitHub Profiles"}),Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)(m,{profileData:i,profileName:h,setProfileName:g,profileError:n,handleSubmit:function(e){g(e),console.log("submitted"),O(e,f,r)}})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),s(e),r(e),a(e)}))};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.d2c5f942.chunk.js.map