(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},4870:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});var r=function(e){return e.image?e.image.url:"/images/defaultuser.png"}},1133:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(5893),s=(n(7294),n(8341)),a=n.n(s),c=n(381),o=n.n(c),i=n(5692),l=function(e){var t=e.url;return(0,r.jsx)("div",{style:{backgroundImage:"url(".concat(t,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",height:"300px"}})},u=n(4447),m=n(9647),d=n(1255),p=n(6548),f=n(2714),x=n(5144),h=n(1163),v=n(4870),g=n(1664),j=function(e){var t=e.post,n=(e.handleDelete,e.handleLike),s=e.handleDislike,c=e.handleComment,j=e.commentsCount,k=void 0===j?2:j,y=e.removeComment,N=e.Deleting,b=(0,h.useRouter)(),w=(0,x.a)().state;return(0,r.jsx)(r.Fragment,{children:t&&t.postedBy&&(0,r.jsxs)("div",{className:"card mb-5",children:[(0,r.jsx)("div",{className:"card-header",children:(0,r.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,r.jsxs)("div",{className:"d-flex align-items-center",children:[(0,r.jsx)(i.C,{size:40,src:(0,v.d)(t.postedBy)}),(0,r.jsxs)("span",{className:"text-primary",style:{marginLeft:"1rem",fontWeight:"bold",fontSize:"1.1rem"},children:[" ",(0,r.jsx)(g.default,{href:"/user/".concat(t.postedBy.username),children:t.postedBy.name})," "]})]}),(0,r.jsx)("span",{className:"",style:{marginLeft:"1rem"},children:o()(t.createdAt).fromNow()})]})}),(0,r.jsx)("div",{className:"card-body",children:a()(t.content)}),(0,r.jsxs)("div",{className:"card-footer",children:[t.image&&(0,r.jsx)(l,{url:t.image.url}),(0,r.jsxs)("div",{className:"d-flex pt-2",children:[w&&w.user&&t.likes&&t.likes.includes(w.user._id)?(0,r.jsx)(u.Z,{onClick:function(){return s(t._id)},className:"text-danger pt-2 h5"}):(0,r.jsx)(m.Z,{onClick:function(){return n(t._id)},className:"text-danger pt-2 h5"}),(0,r.jsxs)("div",{className:"pt-2",style:{marginLeft:"0.3rem",marginRight:"1rem"},children:[t.likes&&t.likes.length," ",1==t.likes.length?"like":"likes"]}),(0,r.jsx)(d.Z,{onClick:function(){return c(t)},className:"text-danger pt-2 h5"}),(0,r.jsx)("div",{className:"pt-2",style:{marginLeft:"0.3rem"},children:(0,r.jsx)(g.default,{href:"/post/".concat(t._id),children:(0,r.jsxs)("a",{children:[t.comments&&t.comments.length," ",1==t.comments.length?"comment":"comments"]})})}),w&&w.user&&w.user._id===t.postedBy._id&&(0,r.jsxs)("div",{className:"ms-auto",children:[(0,r.jsx)(p.Z,{onClick:function(){return b.push("/user/post/".concat(t._id))},className:"text-danger pt-2 h5 px-4"}),(0,r.jsx)(f.Z,{onClick:function(){return N(t)},className:"text-danger pt-2 h5"})]})]})]}),t.comments&&t.comments.length>0&&(0,r.jsx)("ol",{className:"list-group",children:t.comments.slice(0,k).map((function(e){return(0,r.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-start",children:[(0,r.jsxs)("div",{className:"ms-2 me-auto",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(i.C,{size:20,className:"mb-1 mr-3",src:(0,v.d)(e.postedBy[0])}),(0,r.jsx)("span",{className:"mx-2 text-primary",children:e.postedBy[0].name})]}),(0,r.jsx)("div",{className:"mt-2",children:e.text})]}),(0,r.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[(0,r.jsx)("span",{className:"badge bg-primary rounded-pill",children:o()(e.created).fromNow()}),w&&w.user&&w.user._id===e.postedBy[0]._id&&(0,r.jsx)("div",{children:(0,r.jsx)(f.Z,{onClick:function(){return y(t._id,e._id)},className:"mt-2 text-danger"})})]})]},e._id)}))})]},t._id)})}},6723:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.addComment,n=e.comment,s=e.setComment;return(0,r.jsxs)("form",{onSubmit:t,children:[(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Write your comment here",value:n,onChange:function(e){return s(e.target.value)}}),(0,r.jsx)("button",{className:"btn btn-primary btn-sm btn-block mt-3",children:"Add Comment"})]})}},3678:function(e,t,n){"use strict";n.r(t);var r=n(5666),s=n.n(r),a=n(5893),c=n(9669),o=n.n(c),i=n(7294),l=n(1133),u=n(9008),m=n(5538),d=n(9848),p=n(6723),f=n(5144),x=n(1163),h=n(8158),v=n(8165);function g(e,t,n,r,s,a,c){try{var o=e[a](c),i=o.value}catch(l){return void n(l)}o.done?t(i):Promise.resolve(i).then(r,s)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function c(e){g(a,r,s,c,o,"next",e)}function o(e){g(a,r,s,c,o,"throw",e)}c(void 0)}))}}function k(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=(0,h.ZP)("http://localhost:5000",{path:"/socket.io"},{reconnection:!0});t.default=function(){var e=(0,x.useRouter)(),t=(0,i.useState)([]),n=t[0],r=t[1],c=(0,i.useState)(!1),h=c[0],g=c[1],N=(0,f.a)(),b=N.state,w=N.comment,_=N.setComment,C=N.visible,A=N.setVisible,S=N.currentPost,Z=N.setCurrentPost,P=N.deleting,D=N.setDeleting,E=N.dltPost,B=N.setDltPost;(0,i.useEffect)((function(){j(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,o().get("/posts");case 4:t=e.sent.data,r(t),g(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),m.Am.error("Couldn't get posts feed."),g(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}),[]),(0,i.useEffect)((function(){y.on("new-post",(function(e){r([e].concat(k(n)))}))}),[]);var L=j(s().mark((function t(n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,null!==b){t.next=5;break}e.push("/login"),t.next=7;break;case 5:return t.next=7,o().put("/like-post",{_id:n});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),m.Am.error(t.t0.response.data.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),R=j(s().mark((function t(n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,null!==b){t.next=5;break}e.push("/login"),t.next=7;break;case 5:return t.next=7,o().put("/dislike-post",{_id:n});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),m.Am.error(t.t0.response.data.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),O=function(t){null===b?e.push("/login"):(Z(t),A(!0))},z=j(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,o().put("/add-comment",{postId:S._id,comment:w});case 4:_(""),A(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),m.Am.error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),G=j(s().mark((function e(t,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().put("/remove-comment",{postId:t,comment:n});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),m.Am.error(e.t0.response.data.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])}))),I=function(e){D(!0),B(e)},M=j(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().delete("/delete-post/".concat(t._id));case 3:m.Am.success("Post Deleted"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),m.Am.error(e.t0.response.data.message);case 9:D(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return(0,i.useEffect)(j(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/posts");case 2:t=e.sent.data,r(t);case 4:case"end":return e.stop()}}),e)}))),[L,R,z,G]),h?(0,a.jsx)(v.Z,{spin:!0,className:"d-flex justify-content-center align-items-center display-1 text-primary p-5"}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(u.default,{children:[(0,a.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}),(0,a.jsx)("title",{children:"Share Gram, Social Media Network"}),(0,a.jsx)("meta",{name:"description",content:"Share Gram, Social Media Network for free"}),(0,a.jsx)("meta",{property:"og:description",content:"Share Gram, Social Media Network for free"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:site_name",content:"SHAREGRAM"}),(0,a.jsx)("meta",{property:"og:url",content:"localhost:3000"}),(0,a.jsx)("meta",{property:"og:image:secure_url",content:"localhost:/3000/image.jpg"})]}),(0,a.jsxs)("div",{className:"container pt-5",children:[(0,a.jsx)("div",{className:"row",children:null===n||void 0===n?void 0:n.map((function(e){return(0,a.jsx)("div",{className:"col-lg-6 col-sm-12",children:(0,a.jsx)(l.Z,{commentsCount:1,post:e,Deleting:I,handleLike:L,handleDislike:R,handleComment:O,removeComment:G})},e._id)}))}),(0,a.jsx)(d.Z,{visible:C,onCancel:function(){return A(!1)},title:"Comment",footer:null,children:(0,a.jsx)(p.Z,{comment:w,setComment:_,addComment:z})}),(0,a.jsx)(d.Z,{visible:P,onCancel:function(){return D(!1)},title:"Delete",onOk:function(){return M(E)},children:"Are you sure you want to delete the post?"})]})]})}},2361:function(){},4616:function(){}},function(e){e.O(0,[885,844,848,199,692,764,506,719,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);