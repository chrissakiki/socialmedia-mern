(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{4665:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/dashboard",function(){return n(6031)}])},4870:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});var r=function(e){return e.image?e.image.url:"/images/defaultuser.png"}},1133:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(5893),s=(n(7294),n(8341)),a=n.n(s),c=n(381),o=n.n(c),i=n(5692),l=function(e){var t=e.url;return(0,r.jsx)("div",{style:{backgroundImage:"url(".concat(t,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",height:"300px"}})},u=n(4447),d=n(9647),m=n(1255),p=n(6548),f=n(2714),h=n(5144),x=n(1163),v=n(4870),g=n(1664),j=function(e){var t=e.post,n=(e.handleDelete,e.handleLike),s=e.handleDislike,c=e.handleComment,j=e.commentsCount,w=void 0===j?2:j,b=e.removeComment,y=e.Deleting,k=(0,x.useRouter)(),N=(0,h.a)().state;return(0,r.jsx)(r.Fragment,{children:t&&t.postedBy&&(0,r.jsxs)("div",{className:"card mb-5",children:[(0,r.jsx)("div",{className:"card-header",children:(0,r.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,r.jsxs)("div",{className:"d-flex align-items-center",children:[(0,r.jsx)(i.C,{size:40,src:(0,v.d)(t.postedBy)}),(0,r.jsxs)("span",{className:"text-primary",style:{marginLeft:"1rem",fontWeight:"bold",fontSize:"1.1rem"},children:[" ",(0,r.jsx)(g.default,{href:"/user/".concat(t.postedBy.username),children:t.postedBy.name})," "]})]}),(0,r.jsx)("span",{className:"",style:{marginLeft:"1rem"},children:o()(t.createdAt).fromNow()})]})}),(0,r.jsx)("div",{className:"card-body",children:a()(t.content)}),(0,r.jsxs)("div",{className:"card-footer",children:[t.image&&(0,r.jsx)(l,{url:t.image.url}),(0,r.jsxs)("div",{className:"d-flex pt-2",children:[N&&N.user&&t.likes&&t.likes.includes(N.user._id)?(0,r.jsx)(u.Z,{onClick:function(){return s(t._id)},className:"text-danger pt-2 h5"}):(0,r.jsx)(d.Z,{onClick:function(){return n(t._id)},className:"text-danger pt-2 h5"}),(0,r.jsxs)("div",{className:"pt-2",style:{marginLeft:"0.3rem",marginRight:"1rem"},children:[t.likes&&t.likes.length," ",1==t.likes.length?"like":"likes"]}),(0,r.jsx)(m.Z,{onClick:function(){return c(t)},className:"text-danger pt-2 h5"}),(0,r.jsx)("div",{className:"pt-2",style:{marginLeft:"0.3rem"},children:(0,r.jsx)(g.default,{href:"/post/".concat(t._id),children:(0,r.jsxs)("a",{children:[t.comments&&t.comments.length," ",1==t.comments.length?"comment":"comments"]})})}),N&&N.user&&N.user._id===t.postedBy._id&&(0,r.jsxs)("div",{className:"ms-auto",children:[(0,r.jsx)(p.Z,{onClick:function(){return k.push("/user/post/".concat(t._id))},className:"text-danger pt-2 h5 px-4"}),(0,r.jsx)(f.Z,{onClick:function(){return y(t)},className:"text-danger pt-2 h5"})]})]})]}),t.comments&&t.comments.length>0&&(0,r.jsx)("ol",{className:"list-group",children:t.comments.slice(0,w).map((function(e){return(0,r.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-start",children:[(0,r.jsxs)("div",{className:"ms-2 me-auto",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(i.C,{size:20,className:"mb-1 mr-3",src:(0,v.d)(e.postedBy[0])}),(0,r.jsx)("span",{className:"mx-2 text-primary",children:e.postedBy[0].name})]}),(0,r.jsx)("div",{className:"mt-2",children:e.text})]}),(0,r.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[(0,r.jsx)("span",{className:"badge bg-primary rounded-pill",children:o()(e.created).fromNow()}),N&&N.user&&N.user._id===e.postedBy[0]._id&&(0,r.jsx)("div",{children:(0,r.jsx)(f.Z,{onClick:function(){return b(t._id,e._id)},className:"mt-2 text-danger"})})]})]},e._id)}))})]},t._id)})}},6723:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.addComment,n=e.comment,s=e.setComment;return(0,r.jsxs)("form",{onSubmit:t,children:[(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Write your comment here",value:n,onChange:function(e){return s(e.target.value)}}),(0,r.jsx)("button",{className:"btn btn-primary btn-sm btn-block mt-3",children:"Add Comment"})]})}},6031:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(5666),s=n.n(r),a=n(5893),c=n(7294),o=n(5929),i=n(1080),l=n(5144),u=n(1163),d=n(9669),m=n.n(d),p=n(5538),f=(n(381),n(3697)),h=n(5692),x=n(4870),v=n(1664),g=function(e){var t=e.people,n=e.handleFollow,r=e.handleUnfollow,s=(0,l.a)().state;(0,u.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(f.ZP,{itemLayout:"horizontal",dataSource:t,renderItem:function(e){return(0,a.jsx)(a.Fragment,{children:s&&s.user&&e._id==s.user._id?"":(0,a.jsx)(f.ZP.Item,{children:(0,a.jsx)(f.ZP.Item.Meta,{avatar:(0,a.jsx)(h.C,{src:(0,x.d)(e)}),title:(0,a.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,a.jsx)(v.default,{href:"/user/".concat(e.username),children:(0,a.jsx)("a",{children:e.username})}),s&&s.user&&e.followers&&e.followers.includes(s.user._id)?(0,a.jsx)("span",{onClick:function(){return r(e)},className:"text-primary pointer",children:"Unfollow"}):(0,a.jsx)("span",{onClick:function(){return n(e)},className:"text-primary pointer",children:"Follow"})]})})})})}})})},j=n(2638),w=n(9848),b=n(6723);function y(e,t,n,r,s,a,c){try{var o=e[a](c),i=o.value}catch(l){return void n(l)}o.done?t(i):Promise.resolve(i).then(r,s)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function c(e){y(a,r,s,c,o,"next",e)}function o(e){y(a,r,s,c,o,"throw",e)}c(void 0)}))}}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){N(e,t,n[t])}))}return e}var C=function(){var e=(0,l.a)(),t=e.state,n=e.setState,r=(0,c.useState)(""),o=r[0],i=r[1],u=(0,c.useState)([]),d=u[0],f=u[1],h=(0,c.useState)(!1),x=h[0],v=h[1],j=k(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m().get("/search-user/".concat(o));case 4:n=e.sent.data,f(n),v(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),p.Am.error(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),w=k(s().mark((function e(r){var a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().put("/user-follow",{_id:r._id});case 3:a=e.sent.data,(c=JSON.parse(localStorage.getItem("auth"))).user=a,localStorage.setItem("auth",JSON.stringify(c)),n(_({},t,{user:a})),f(d.filter((function(e){return e._id!==r._id}))),p.Am.success("Following ".concat(r.name)),v(!1),i(""),f([]),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),p.Am.error("Couldn't follow this user, please try again");case 18:case"end":return e.stop()}}),e,null,[[0,15]])}))),b=k(s().mark((function e(r){var a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().put("/user-unfollow",{_id:r._id});case 3:a=e.sent.data,(c=JSON.parse(localStorage.getItem("auth"))).user=a,localStorage.setItem("auth",JSON.stringify(c)),n(_({},t,{user:a})),f(d.filter((function(e){return e._id!==r._id}))),p.Am.success("Unfollowed ".concat(r.name)),v(!1),i(""),f([]),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),p.Am.error("Couldn't unfollow user, please try again");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("form",{className:"form-inline row pt-4 py-md-0",onSubmit:j,children:[(0,a.jsx)("div",{className:"col-8",children:(0,a.jsx)("input",{onChange:function(e){i(e.target.value),f([]),v(!1)},value:o,className:"form-control",type:"search",placeholder:"Search"})}),(0,a.jsx)("div",{className:"col-4",children:(0,a.jsx)("button",{className:"btn btn-outline-primary col-12",type:"submit",children:"Search"})})]}),x?(0,a.jsx)(g,{people:d,handleFollow:w,handleUnfollow:b}):""]})},S=n(1133);function O(e,t,n,r,s,a,c){try{var o=e[a](c),i=o.value}catch(l){return void n(l)}o.done?t(i):Promise.resolve(i).then(r,s)}function P(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function c(e){O(a,r,s,c,o,"next",e)}function o(e){O(a,r,s,c,o,"throw",e)}c(void 0)}))}}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){A(e,t,n[t])}))}return e}var D=(0,n(8158).ZP)("http://localhost:5000",{path:"/socket.io"},{reconnection:!0}),I=function(){var e=(0,l.a)(),t=e.state,n=e.setState,r=e.comment,d=e.setComment,f=e.visible,h=e.setVisible,x=e.currentPost,y=e.setCurrentPost,k=e.deleting,N=e.setDeleting,_=e.dltPost,O=e.setDltPost,A=(0,c.useState)(""),I=A[0],F=A[1],E=(0,c.useState)({}),B=E[0],L=E[1],J=(0,c.useState)([]),U=J[0],z=J[1],R=(0,c.useState)(!1),T=R[0],W=R[1],X=(0,c.useState)([]),M=X[0],V=X[1],Y=(0,c.useState)(0),q=Y[0],G=Y[1],H=(0,c.useState)(1),K=H[0],Q=H[1];(0,u.useRouter)();(0,c.useEffect)((function(){t&&t.token&&($(),ee())}),[t&&t.token,K]),(0,c.useEffect)(P(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().get("/total-posts");case 3:t=e.sent.data,G(t.total),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);var $=P(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().get("/news-feed/".concat(K));case 3:t=e.sent.data,V(t.posts),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),ee=P(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().get("/find-people");case 3:t=e.sent.data,z(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p.Am.error("Couldn't search atm! please try again");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),te=P(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m().post("/create-post",{content:I,image:B});case 4:n=e.sent.data,Q(1),$(),p.Am.success("Post submited."),F(""),L({}),D.emit("new-post",n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),p.Am.error("Couldn't create post! please try again");case 16:case"end":return e.stop()}}),e,null,[[1,13]])}))),ne=P(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],(r=new FormData).append("image",n),W(!0),e.prev=4,e.next=7,m().post("/upload-image",r);case 7:a=e.sent.data,L({url:a.url,public_id:a.public_id}),W(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),p.Am.error("Couldn't upload image! please try again"),W(!1);case 16:case"end":return e.stop()}}),e,null,[[4,12]])}))),re=function(e){N(!0),O(e)},se=P(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().delete("/delete-post/".concat(t._id));case 3:e.sent.data,p.Am.success("Post Deleted"),$(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),p.Am.error("Couldn't delete post! please try again");case 11:N(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),ae=P(s().mark((function e(r){var a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().put("/user-follow",{_id:r._id});case 3:a=e.sent.data,(c=JSON.parse(localStorage.getItem("auth"))).user=a,localStorage.setItem("auth",JSON.stringify(c)),n(Z({},t,{user:a})),z(U.filter((function(e){return e._id!==r._id}))),$(),p.Am.success("Following ".concat(r.name)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),p.Am.error("Couldn't follow this user! please try again");case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),ce=P(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().put("/like-post",{_id:t});case 3:e.sent.data,$(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p.Am.error("Couldn't like this post! please try again");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),oe=P(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().put("/dislike-post",{_id:t});case 3:e.sent.data,$(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p.Am.error("Couldn't dislike this post! please try again");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),ie=function(e){y(e),h(!0)},le=P(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m().put("/add-comment",{postId:x._id,comment:r});case 4:e.sent.data,d(""),h(!1),$(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),p.Am.error("Couldn't add a comment! please try again");case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),ue=P(s().mark((function e(t,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().put("/remove-comment",{postId:t,comment:n});case 3:e.sent.data,$(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p.Am.error("Couldn't remove comment! please try again");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return(0,a.jsx)(i.Z,{children:(0,a.jsxs)("div",{className:"container-fluid py-3",children:[(0,a.jsxs)("div",{className:"row py-3",children:[(0,a.jsxs)("div",{className:"col-md-8",children:[(0,a.jsx)(o.Z,{content:I,setContent:F,postSubmit:te,handleImage:ne,uploading:T,image:B}),(0,a.jsx)("br",{}),M.length>=1&&M.map((function(e){return(0,a.jsx)(S.Z,{post:e,handleLike:ce,handleDislike:oe,handleComment:ie,removeComment:ue,Deleting:re},e._id)})),(0,a.jsx)(j.Z,{current:K,total:q,onChange:function(e){return Q(e)}})]}),(0,a.jsxs)("div",{className:"col-md-4 my-2",children:[(0,a.jsx)(C,{}),(0,a.jsx)("br",{}),t&&t.user&&t.user.following&&(0,a.jsx)(v.default,{href:"/user/following",children:(0,a.jsxs)("a",{className:"h6 my-5",children:["You are Following"," ",t&&t.user&&t.user.following&&t.user.following.length," ",t&&t.user&&t.user.following&&1==t.user.following.length?"User":"Users"]})}),(0,a.jsx)("br",{}),(0,a.jsx)(g,{people:U,handleFollow:ae})]})]}),(0,a.jsx)(w.Z,{visible:f,onCancel:function(){return h(!1)},title:"Comment",footer:null,children:(0,a.jsx)(b.Z,{comment:r,setComment:d,addComment:le})}),(0,a.jsx)(w.Z,{visible:k,onCancel:function(){return N(!1)},title:"Delete",onOk:function(){return se(_)},children:"Are you sure you want to delete the post?"})]})})}},2361:function(){},4616:function(){}},function(e){e.O(0,[774,885,844,848,199,692,764,506,216,697,719,808,162,888,179],(function(){return t=4665,e(e.s=t);var t}));var t=e.O();_N_E=t}]);