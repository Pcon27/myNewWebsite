(this["webpackJsonp00-reactpractice"]=this["webpackJsonp00-reactpractice"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(6),s=c.n(r),i=c(2),n=c.p+"static/media/NewResume.bb0cd88b.pdf",l=(c(5),c(0));var j=function(e){var t=e.currentPage,c=e.handlePageChange;return Object(l.jsx)("div",{children:Object(l.jsx)("section",{className:"wtf",children:Object(l.jsxs)("ul",{className:"nav nav-tabs",children:[Object(l.jsx)("h1",{className:"name",children:"Peter Consagra"}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"#about",onClick:function(){return c("About")},className:"About"===t?"nav-link active":"nav-link",children:"About Me"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"#portfolio",onClick:function(){return c("Portfolio")},className:"Portfolio"===t?"nav-link active":"nav-link",children:"Portfolio"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:n,onClick:function(){return c("Resume")},className:"Resume"===t?"nav-link active":"nav-link",children:"Resume"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"#contact",onClick:function(){return c("Contact")},className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})})]})})})},o=c.p+"static/media/Jam-Map.75d9a472.png",d=c.p+"static/media/Weather-Tracker.1a1675b1.png",h=c.p+"static/media/Reciplease.cdc0d139.png",b=c.p+"static/media/budgetTracker.4684ea03.png",u=c.p+"static/media/WorkoutTracker.4c0c5d42.png",m=c.p+"static/media/passwordGenerator.0ebce15e.png";c(13);function p(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{id:"title",children:"Portfolio"}),Object(l.jsxs)("section",{id:"otherProjects",className:"SMLPJ",children:[Object(l.jsxs)("div",{id:"project1",className:"SMLPJ",children:[Object(l.jsxs)("label",{children:["Jam Map Project ",Object(l.jsx)("a",{href:"https://github.com/PDPco/jam-map",children:"Repository"})]}),Object(l.jsx)("a",{href:"https://pdpco.github.io/jam-map/",children:Object(l.jsx)("img",{className:"SMLIMG",src:o,atl:"JamMap"})})]}),Object(l.jsxs)("div",{id:"weatherTracker",className:"SMLPJ",children:[Object(l.jsxs)("label",{children:["Weather Tracker Project ",Object(l.jsx)("a",{href:"https://github.com/Pcon27/Weather_Tracker_Repo",children:"Repository"})]}),Object(l.jsx)("a",{href:"https://pcon27.github.io/Weather_Tracker_Repo/",children:Object(l.jsx)("img",{className:"SMLIMG",src:d,atl:"Weather Tracker Project"})})]}),Object(l.jsxs)("div",{id:"Reciplease",className:"SMLPJ",children:[Object(l.jsxs)("label",{children:["Reciplease ",Object(l.jsx)("a",{href:"https://github.com/Pcon27/Reciplease#deployed",children:"Repository"})]}),Object(l.jsx)("a",{href:"https://pacific-caverns-03345.herokuapp.com",children:Object(l.jsx)("img",{className:"SMLIMG",src:h,atl:"Password-Generator Project"})})]}),Object(l.jsxs)("div",{id:"BudgetTracker",className:"SMLPJ",children:[Object(l.jsxs)("label",{children:["Budget Tracker Project ",Object(l.jsx)("a",{href:"https://github.com/Pcon27/BudgetTracker",children:"Repository"})]}),Object(l.jsx)("a",{href:"https://quiet-wildwood-99872.herokuapp.com/",children:Object(l.jsx)("img",{className:"SMLIMG",src:b,atl:"Weather Tracker Project"})})]}),Object(l.jsxs)("div",{id:"PWGen",className:"SMLPJ",children:[Object(l.jsxs)("label",{children:["Password Generator Project ",Object(l.jsx)("a",{href:"https://github.com/Pcon27/Generate-a-password-repo",children:"Repository"})]}),Object(l.jsx)("a",{href:"https://pcon27.github.io/Generate-a-password-repo/",children:Object(l.jsx)("img",{className:"SMLIMG",src:m,atl:"Weather Tracker Project"})})]}),Object(l.jsxs)("div",{id:"workoutTracker",className:"SMLPJ",children:[Object(l.jsxs)("label",{children:["Workout Tracker Project ",Object(l.jsx)("a",{href:"https://github.com/Pcon27/Fitness_Tracker",children:"Repository"})]}),Object(l.jsx)("a",{href:"https://quiet-bayou-47430.herokuapp.com",children:Object(l.jsx)("img",{className:"SMLIMG",src:u,atl:"Weather Tracker Project"})})]})]})]})}var O=c.p+"static/media/me.5afecc4b.jpg";c(14);function x(){return Object(l.jsxs)("div",{className:"div",children:[Object(l.jsx)("h1",{id:"title",children:"About Me"}),Object(l.jsxs)("section",{className:"info",children:[Object(l.jsx)("img",{id:"peteImage",src:O,alt:"peteImage"}),Object(l.jsx)("p",{children:"Full Stack Web Developer and Senior at University of California, Los Angeles (UCLA) persuing a BS in Political Science. Effective at combining creativity and problem solving to develop user-friendly applications. Known to have a strong interest in intuitive user stories and product UX."})]})]})}function f(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Blog Page"}),Object(l.jsx)("p",{})]})}var v=c(4),g=c.n(v),k=c(7),P=function(){var e=Object(a.useState)("Submit"),t=Object(i.a)(e,2),c=t[0],r=t[1],s=function(){var e=Object(k.a)(g.a.mark((function e(t){var c,a,s,i,n,l,j;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r("Sending..."),c=t.target.elements,a=c.name,s=c.email,i=c.message,n={name:a.value,email:s.value,message:i.value},e.next=6,fetch("http://localhost:5000/contact",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)});case 6:return l=e.sent,r("Submit"),e.next=10,l.json();case 10:j=e.sent,alert(j.status);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("form",{onSubmit:s,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",id:"name",required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(l.jsx)("input",{type:"email",id:"email",required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{id:"message",required:!0})]}),Object(l.jsx)("button",{type:"submit",children:c})]})};function N(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(P,{})})}function M(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("ul",{className:"footer",children:[Object(l.jsx)("li",{className:"Footerlink",children:Object(l.jsx)("a",{href:"https://github.com/Pcon27",children:"GitHub"})}),Object(l.jsx)("li",{className:"Footerlink",children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/peter-consagra-4952401a8/",children:"LinkedIn"})})]})})}function S(){var e=Object(a.useState)("About"),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{currentPage:c,handlePageChange:function(e){return r(e)}}),"Portfolio"===c?Object(l.jsx)(p,{}):"About"===c?Object(l.jsx)(x,{}):"Resume"===c?Object(l.jsx)(f,{}):Object(l.jsx)(N,{}),Object(l.jsx)(M,{})]})}var w=function(){return Object(l.jsx)(S,{})};s.a.render(Object(l.jsx)(w,{}),document.getElementById("root"))},5:function(e,t,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.d4b25fcb.chunk.js.map