"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{5692:function(e,t,o){o.d(t,{C:function(){return J}});var n=o(7462),r=o(4942),a=o(1002),i=o(7685),l=o(7294),s=o(4184),c=o.n(s),f=o(8555),p=o(2550),u=o(1975),m=o(1687),v=o(4308),d=o(5378),g=l.createContext("default"),y=function(e){var t=e.children,o=e.size;return l.createElement(g.Consumer,null,(function(e){return l.createElement(g.Provider,{value:o||e},t)}))},b=g,h=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o},O=function(e,t){var o,s,g=l.useContext(b),y=l.useState(1),O=(0,i.Z)(y,2),C=O[0],w=O[1],E=l.useState(!1),x=(0,i.Z)(E,2),Z=x[0],N=x[1],P=l.useState(!0),S=(0,i.Z)(P,2),j=S[0],k=S[1],T=l.useRef(),A=l.useRef(),_=(0,p.sQ)(t,T),R=l.useContext(u.E_).getPrefixCls,V=function(){if(A.current&&T.current){var t=A.current.offsetWidth,o=T.current.offsetWidth;if(0!==t&&0!==o){var n=e.gap,r=void 0===n?4:n;2*r<o&&w(o-2*r<t?(o-2*r)/t:1)}}};l.useEffect((function(){N(!0)}),[]),l.useEffect((function(){k(!0),w(1)}),[e.src]),l.useEffect((function(){V()}),[e.gap]);var z=e.prefixCls,D=e.shape,I=e.size,L=e.src,H=e.srcSet,B=e.icon,W=e.className,X=e.alt,Y=e.draggable,M=e.children,$=e.crossOrigin,F=h(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),G="default"===I?g:I,K=(0,d.Z)(),Q=l.useMemo((function(){if("object"!==(0,a.Z)(G))return{};var e=v.c4.find((function(e){return K[e]})),t=G[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:B?t/2:18}:{}}),[K,G]);(0,m.Z)(!("string"===typeof B&&B.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(B,"` at https://ant.design/components/icon"));var U,q=R("avatar",z),J=c()((o={},(0,r.Z)(o,"".concat(q,"-lg"),"large"===G),(0,r.Z)(o,"".concat(q,"-sm"),"small"===G),o)),ee=l.isValidElement(L),te=c()(q,J,(s={},(0,r.Z)(s,"".concat(q,"-").concat(D),!!D),(0,r.Z)(s,"".concat(q,"-image"),ee||L&&j),(0,r.Z)(s,"".concat(q,"-icon"),!!B),s),W),oe="number"===typeof G?{width:G,height:G,lineHeight:"".concat(G,"px"),fontSize:B?G/2:18}:{};if("string"===typeof L&&j)U=l.createElement("img",{src:L,draggable:Y,srcSet:H,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&k(!1)},alt:X,crossOrigin:$});else if(ee)U=L;else if(B)U=B;else if(Z||1!==C){var ne="scale(".concat(C,") translateX(-50%)"),re={msTransform:ne,WebkitTransform:ne,transform:ne},ae="number"===typeof G?{lineHeight:"".concat(G,"px")}:{};U=l.createElement(f.Z,{onResize:V},l.createElement("span",{className:"".concat(q,"-string"),ref:function(e){A.current=e},style:(0,n.Z)((0,n.Z)({},ae),re)},M))}else U=l.createElement("span",{className:"".concat(q,"-string"),style:{opacity:0},ref:function(e){A.current=e}},M);return delete F.onError,delete F.gap,l.createElement("span",(0,n.Z)({},F,{style:(0,n.Z)((0,n.Z)((0,n.Z)({},oe),Q),F.style),className:te,ref:_}),U)},C=l.forwardRef(O);C.displayName="Avatar",C.defaultProps={shape:"circle",size:"default"};var w=C,E=o(344),x=o(6159),Z=o(1413),N=o(91),P=o(6609),S={adjustX:1,adjustY:1},j=[0,0],k={left:{points:["cr","cl"],overflow:S,offset:[-4,0],targetOffset:j},right:{points:["cl","cr"],overflow:S,offset:[4,0],targetOffset:j},top:{points:["bc","tc"],overflow:S,offset:[0,-4],targetOffset:j},bottom:{points:["tc","bc"],overflow:S,offset:[0,4],targetOffset:j},topLeft:{points:["bl","tl"],overflow:S,offset:[0,-4],targetOffset:j},leftTop:{points:["tr","tl"],overflow:S,offset:[-4,0],targetOffset:j},topRight:{points:["br","tr"],overflow:S,offset:[0,-4],targetOffset:j},rightTop:{points:["tl","tr"],overflow:S,offset:[4,0],targetOffset:j},bottomRight:{points:["tr","br"],overflow:S,offset:[0,4],targetOffset:j},rightBottom:{points:["bl","br"],overflow:S,offset:[4,0],targetOffset:j},bottomLeft:{points:["tl","bl"],overflow:S,offset:[0,4],targetOffset:j},leftBottom:{points:["br","bl"],overflow:S,offset:[-4,0],targetOffset:j}},T=function(e){var t=e.overlay,o=e.prefixCls,n=e.id,r=e.overlayInnerStyle;return l.createElement("div",{className:"".concat(o,"-inner"),id:n,role:"tooltip",style:r},"function"===typeof t?t():t)},A=function(e,t){var o=e.overlayClassName,r=e.trigger,i=void 0===r?["hover"]:r,s=e.mouseEnterDelay,c=void 0===s?0:s,f=e.mouseLeaveDelay,p=void 0===f?.1:f,u=e.overlayStyle,m=e.prefixCls,v=void 0===m?"rc-tooltip":m,d=e.children,g=e.onVisibleChange,y=e.afterVisibleChange,b=e.transitionName,h=e.animation,O=e.motion,C=e.placement,w=void 0===C?"right":C,E=e.align,x=void 0===E?{}:E,S=e.destroyTooltipOnHide,j=void 0!==S&&S,A=e.defaultVisible,_=e.getTooltipContainer,R=e.overlayInnerStyle,V=(0,N.Z)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),z=(0,l.useRef)(null);(0,l.useImperativeHandle)(t,(function(){return z.current}));var D=(0,Z.Z)({},V);"visible"in e&&(D.popupVisible=e.visible);var I=!1,L=!1;if("boolean"===typeof j)I=j;else if(j&&"object"===(0,a.Z)(j)){var H=j.keepParent;I=!0===H,L=!1===H}return l.createElement(P.Z,(0,n.Z)({popupClassName:o,prefixCls:v,popup:function(){var t=e.arrowContent,o=void 0===t?null:t,n=e.overlay,r=e.id;return[l.createElement("div",{className:"".concat(v,"-arrow"),key:"arrow"},o),l.createElement(T,{key:"content",prefixCls:v,id:r,overlay:n,overlayInnerStyle:R})]},action:i,builtinPlacements:k,popupPlacement:w,ref:z,popupAlign:x,getPopupContainer:_,onPopupVisibleChange:g,afterPopupVisibleChange:y,popupTransitionName:b,popupAnimation:h,popupMotion:O,defaultPopupVisible:A,destroyPopupOnHide:I,autoDestroy:L,mouseLeaveDelay:p,popupStyle:u,mouseEnterDelay:c},D),d)},_=(0,l.forwardRef)(A),R=o(1770),V={adjustX:1,adjustY:1},z={adjustX:0,adjustY:0},D=[0,0];function I(e){return"boolean"===typeof e?e?V:z:(0,n.Z)((0,n.Z)({},z),e)}var L=o(3355),H=((0,L.b)("success","processing","error","default","warning"),(0,L.b)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")),B=o(3603),W=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o},X=new RegExp("^(".concat(H.join("|"),")(-inverse)?$"));function Y(e,t){var o=e.type;if((!0===o.__ANT_BUTTON||!0===o.__ANT_SWITCH||!0===o.__ANT_CHECKBOX||"button"===e.type)&&e.props.disabled){var r=function(e,t){var o={},r=(0,n.Z)({},e);return t.forEach((function(t){e&&t in e&&(o[t]=e[t],delete r[t])})),{picked:o,omitted:r}}(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),a=r.picked,i=r.omitted,s=(0,n.Z)((0,n.Z)({display:"inline-block"},a),{cursor:"not-allowed",width:e.props.block?"100%":null}),f=(0,n.Z)((0,n.Z)({},i),{pointerEvents:"none"}),p=(0,x.Tm)(e,{style:f,className:null});return l.createElement("span",{style:s,className:c()(e.props.className,"".concat(t,"-disabled-compatible-wrapper"))},p)}return e}var M=l.forwardRef((function(e,t){var o,a=l.useContext(u.E_),s=a.getPopupContainer,f=a.getPrefixCls,p=a.direction,m=(0,R.Z)(!1,{value:e.visible,defaultValue:e.defaultVisible}),v=(0,i.Z)(m,2),d=v[0],g=v[1],y=function(){var t=e.title,o=e.overlay;return!t&&!o&&0!==t},b=function(){var t=e.builtinPlacements,o=e.arrowPointAtCenter,r=e.autoAdjustOverflow;return t||function(e){var t=e.arrowWidth,o=void 0===t?4:t,r=e.horizontalArrowShift,a=void 0===r?16:r,i=e.verticalArrowShift,l=void 0===i?8:i,s=e.autoAdjustOverflow,c={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(a+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(l+o)]},topRight:{points:["br","tc"],offset:[a+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(l+o)]},bottomRight:{points:["tr","bc"],offset:[a+o,4]},rightBottom:{points:["bl","cr"],offset:[4,l+o]},bottomLeft:{points:["tl","bc"],offset:[-(a+o),4]},leftBottom:{points:["br","cl"],offset:[-4,l+o]}};return Object.keys(c).forEach((function(t){c[t]=e.arrowPointAtCenter?(0,n.Z)((0,n.Z)({},c[t]),{overflow:I(s),targetOffset:D}):(0,n.Z)((0,n.Z)({},k[t]),{overflow:I(s)}),c[t].ignoreShake=!0})),c}({arrowPointAtCenter:o,autoAdjustOverflow:r})},h=e.getPopupContainer,O=W(e,["getPopupContainer"]),C=e.prefixCls,w=e.openClassName,E=e.getTooltipContainer,Z=e.overlayClassName,N=e.color,P=e.overlayInnerStyle,S=e.children,j=f("tooltip",C),T=f(),A=d;!("visible"in e)&&y()&&(A=!1);var V,z=Y((0,x.l$)(S)?S:l.createElement("span",null,S),j),L=z.props,H=c()(L.className,(0,r.Z)({},w||"".concat(j,"-open"),!0)),M=c()(Z,(o={},(0,r.Z)(o,"".concat(j,"-rtl"),"rtl"===p),(0,r.Z)(o,"".concat(j,"-").concat(N),N&&X.test(N)),o)),$=P;return N&&!X.test(N)&&($=(0,n.Z)((0,n.Z)({},P),{background:N}),V={background:N}),l.createElement(_,(0,n.Z)({},O,{prefixCls:j,overlayClassName:M,getTooltipContainer:h||E||s,ref:t,builtinPlacements:b(),overlay:function(){var t=e.title,o=e.overlay;return 0===t?t:o||t||""}(),visible:A,onVisibleChange:function(t){var o;g(!y()&&t),y()||null===(o=e.onVisibleChange)||void 0===o||o.call(e,t)},onPopupAlign:function(e,t){var o=b(),n=Object.keys(o).filter((function(e){return o[e].points[0]===t.points[0]&&o[e].points[1]===t.points[1]}))[0];if(n){var r=e.getBoundingClientRect(),a={top:"50%",left:"50%"};n.indexOf("top")>=0||n.indexOf("Bottom")>=0?a.top="".concat(r.height-t.offset[1],"px"):(n.indexOf("Top")>=0||n.indexOf("bottom")>=0)&&(a.top="".concat(-t.offset[1],"px")),n.indexOf("left")>=0||n.indexOf("Right")>=0?a.left="".concat(r.width-t.offset[0],"px"):(n.indexOf("right")>=0||n.indexOf("Left")>=0)&&(a.left="".concat(-t.offset[0],"px")),e.style.transformOrigin="".concat(a.left," ").concat(a.top)}},overlayInnerStyle:$,arrowContent:l.createElement("span",{className:"".concat(j,"-arrow-content"),style:V}),motion:{motionName:(0,B.m)(T,"zoom-big-fast",e.transitionName),motionDeadline:1e3}}),A?(0,x.Tm)(z,{className:H}):z)}));M.displayName="Tooltip",M.defaultProps={placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0};var $=M,F=function(e){return e?"function"===typeof e?e():e:null},G=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o},K=l.forwardRef((function(e,t){var o=e.prefixCls,r=e.title,a=e.content,i=G(e,["prefixCls","title","content"]),s=l.useContext(u.E_).getPrefixCls,c=s("popover",o),f=s();return l.createElement($,(0,n.Z)({},i,{prefixCls:c,ref:t,overlay:function(e){return l.createElement(l.Fragment,null,r&&l.createElement("div",{className:"".concat(e,"-title")},F(r)),l.createElement("div",{className:"".concat(e,"-inner-content")},F(a)))}(c),transitionName:(0,B.m)(f,"zoom-big",i.transitionName)}))}));K.displayName="Popover",K.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var Q=K,U=function(e){var t=l.useContext(u.E_),o=t.getPrefixCls,n=t.direction,a=e.prefixCls,i=e.className,s=void 0===i?"":i,f=e.maxCount,p=e.maxStyle,m=e.size,v=o("avatar-group",a),d=c()(v,(0,r.Z)({},"".concat(v,"-rtl"),"rtl"===n),s),g=e.children,b=e.maxPopoverPlacement,h=void 0===b?"top":b,O=(0,E.Z)(g).map((function(e,t){return(0,x.Tm)(e,{key:"avatar-key-".concat(t)})})),C=O.length;if(f&&f<C){var Z=O.slice(0,f),N=O.slice(f,C);return Z.push(l.createElement(Q,{key:"avatar-popover-key",content:N,trigger:"hover",placement:h,overlayClassName:"".concat(v,"-popover")},l.createElement(w,{style:p},"+".concat(C-f)))),l.createElement(y,{size:m},l.createElement("div",{className:d,style:e.style},Z))}return l.createElement(y,{size:m},l.createElement("div",{className:d,style:e.style},O))},q=w;q.Group=U;var J=q},5378:function(e,t,o){var n=o(7685),r=o(7294),a=o(4308);t.Z=function(){var e=(0,r.useState)({}),t=(0,n.Z)(e,2),o=t[0],i=t[1];return(0,r.useEffect)((function(){var e=a.ZP.subscribe((function(e){i(e)}));return function(){return a.ZP.unsubscribe(e)}}),[]),o}}}]);