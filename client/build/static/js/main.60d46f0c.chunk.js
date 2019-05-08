(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t){e.exports="AIzaSyAwSXsSa6GrLDO2VRl37azzYfXI8Ck59Ls"},41:function(e,t,a){e.exports=a(82)},46:function(e,t,a){},47:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(12),r=a.n(l),c=(a(46),a(47),a(9)),s=a(7),i=a(14),m=a(15),d=a(18),u=a(16),v=a(19),h=a(8),p=a.n(h);var g=function(e){return n.a.createElement("div",null,n.a.createElement("a",{className:"btn btn-primary float-right ml-2",href:e.link,role:"button"},"View"),n.a.createElement("button",{className:"btn btn-primary float-right ml-2 saveBtn",onClick:function(){return e.addBook(e.arrayIndex)}},"Save"))};var f=function(e){return n.a.createElement("div",null,n.a.createElement("button",{className:"btn btn-danger float-right ml-2 deleteBtn",onClick:function(){return e.deleteBook(e.Id)}},"Delete"),n.a.createElement("a",{className:"btn btn-primary float-right ml-2",href:e.link,role:"button"},"View"))};var E=function(e){return n.a.createElement("div",{className:"container mt-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 border p-3"},e.search?n.a.createElement(g,{link:e.link,arrayIndex:e.arrayIndex,addBook:e.addBook}):n.a.createElement(f,{link:e.link,Id:e.Id,deleteBook:e.deleteBook}),n.a.createElement("h3",null,e.title),n.a.createElement("h5",null,e.snippet),n.a.createElement("p",null,"Written by ",e.author),n.a.createElement("img",{src:e.image,className:"float-left mr-3 mb-3",alt:e.title}),n.a.createElement("p",null,e.synopsis))))};var k=function(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-md bg-primary"},n.a.createElement(c.b,{to:"/",className:"navbar-brand text-white"},"RGBS"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{to:"/",className:"nav-link text-white"},"Search Books")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{to:"saved",className:"nav-link text-white"},"Saved Books"))))),n.a.createElement("div",{className:"row mt-4"},n.a.createElement("div",{className:"col-md-1"}),n.a.createElement("div",{className:"col-md-10 text-center bg-light p-5"},n.a.createElement("h1",{className:"text-primary"},"React Google Books Search"),n.a.createElement("p",null,"Search for and Save Books of Interest")),n.a.createElement("div",{className:"col-md-1"})))},b=a(17),N=a(40),y=a.n(N),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={searchTerm:"",googleResults:[]},a.searchBooks=function(e,t){t.preventDefault(),console.log("search term:"),console.log(e);var o=[];p.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&key="+y.a).then(function(e){console.log(e.data),e.data.items.forEach(function(e){var t={title:e.volumeInfo.title||"No Title Provided",snippet:e.searchInfo&&e.searchInfo.textSnippet||"No Snippet Provided",author:e.volumeInfo.authors&&e.volumeInfo.authors[0]||"No Author Provided",image:e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.thumbnail||"https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png",link:e.volumeInfo.infoLink||"https://www.google.com/search?tbm=bks&q="+e.searchInfo.title,synopsis:e.volumeInfo.description||"No Synopsis Provided"};o.push(t)}),a.setState({googleResults:o},function(e){console.log(a.state.googleResults)})}).catch(function(e){console.log(e)})},a.getSearchTerm=function(e){console.log("getSearchTerm() triggered");var t=e.target.value;a.setState({searchTerm:t},function(){console.log("this.state.searchTerm:"),console.log(this.state.searchTerm)})},a.addBook=function(e){console.log("addBook() for arrayIndex["+e+"] called");var t=a.state.googleResults[e];console.log(t),p.a.post("/api/books",{book:t}).then(function(e){console.log("response.data:"),console.log(e.data)})},a.scrollToRef=function(){b.scroller.scrollTo("myScrollToElement",{duration:1500,delay:100,smooth:!0,containerId:"ContainerElementID",offset:50})},a.myRef=n.a.createRef(),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement(k,null),n.a.createElement("div",{className:"row mt-4"},n.a.createElement("div",{className:"col-md-1"}),n.a.createElement("div",{className:"col-md-10 border p-4"},n.a.createElement("h2",null,"Book Search"),n.a.createElement("form",{onSubmit:function(t){return e.searchBooks(e.state.searchTerm,t)}},n.a.createElement("input",{type:"text",className:"form-control",onChange:this.getSearchTerm}),n.a.createElement("button",{type:"submit",className:"btn btn-success mt-3 float-right"},"Search"))),n.a.createElement("div",{className:"col-md-1"})),n.a.createElement("div",{className:"row mt-4"},n.a.createElement("div",{className:"col-md-1"}),n.a.createElement("div",{className:"col-md-10 border p-4"},n.a.createElement(b.Element,{name:"myScrollToElement"}),n.a.createElement("h2",{ref:this.myRef},"Results"),this.state.googleResults.map(function(t,a){return n.a.createElement(E,{key:a,title:t.title,link:t.link,snippet:t.snippet,author:t.author,image:t.image,synopsis:t.synopsis,search:"true",arrayIndex:a,addBook:e.addBook})})),n.a.createElement("div",{className:"col-md-1"})))}}]),t}(o.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={savedBooksPull:[]},a.pullBooks2=function(){console.log("pullBooks() called"),p.a.get("/api/books").then(function(e){console.log("response.data:"),console.log(e.data),a.setState({savedBooksPull:e.data},function(e){console.log("this.state.savedBooksPull:"),console.log(a.state.savedBooksPull)})}).catch(function(e){console.log(e)})},a.deleteBook=function(e){console.log("deleteBook() for _id: "+e+" called");var t=e;console.log({id:t}),p.a.post("/api/books/delete",{id:t}).then(function(e){console.log("response.data:"),console.log(e.data),a.pullBooks2()})},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.pullBooks2()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement(k,null),n.a.createElement("div",{className:"row mt-4"},n.a.createElement("div",{className:"col-md-1"}),n.a.createElement("div",{className:"col-md-10 border p-4"},n.a.createElement("h2",null,"Saved Books"),this.state.savedBooksPull.map(function(t,a){return n.a.createElement(E,{key:a,title:t.title,link:t.link,snippet:t.snippet,author:t.author,image:t.image,synopsis:t.synopsis,Id:t._id,deleteBook:e.deleteBook})})),n.a.createElement("div",{className:"col-md-1"})))}}]),t}(o.Component);var I=function(){return n.a.createElement(c.a,null,n.a.createElement("div",null,n.a.createElement(s.a,{exact:!0,path:"/",component:B}),n.a.createElement(s.a,{exact:!0,path:"/saved",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.60d46f0c.chunk.js.map