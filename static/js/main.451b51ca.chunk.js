(this["webpackJsonpcampaign-editor"]=this["webpackJsonpcampaign-editor"]||[]).push([[0],{141:function(e,a,t){e.exports=t(199)},146:function(e,a,t){},147:function(e,a,t){},199:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(146),t(147),t(28)),i=t(29),s=t(32),m=t(34),d=t(26),u=t(12),E=t(255),h=t(234),p=t(127),v=t(258),g=t(256),f=t(241),C=t(242),b=t(131),w=t(243),S=t(235),N=t(236),y=t(237),k=t(238),O=t(239),M=t(240),T=t(119),B=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={showCancelModal:!1,showSaveModal:!1,copied:!1,reorder:!1,anchorEl:null},e.handleClick=function(a){e.setState({anchorEl:a.currentTarget})},e.handleClose=function(){e.setState({anchorEl:null})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.hideSearch?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:"marginRight noBorder",placeholder:"enter",id:"outlined-basic",variant:"outlined",size:"small"}),r.a.createElement(h.a,{className:"noBorder",variant:"contained"},"Search")),this.props.showSave?r.a.createElement("div",{style:{float:"right"}},r.a.createElement(h.a,{variant:"contained",className:"marginRight noBorder",color:"secondary",onClick:function(){return e.setState({showCancelModal:!0})}},r.a.createElement(S.a,{className:"marginRight"})," Cancel"),r.a.createElement(h.a,{className:"noBorder",onClick:function(){return e.setState({showSaveModal:!0})},variant:"contained"},r.a.createElement(N.a,{className:"marginRight"})," Save")):this.state.reorder?r.a.createElement("div",{style:{float:"right"}},r.a.createElement(d.b,{to:"/"},r.a.createElement(h.a,{variant:"contained",className:"marginRight noBorder",onClick:function(){e.props.reorder(!1),e.setState({reorder:!1})},color:"secondary"},r.a.createElement(S.a,{className:"marginRight"})," Cancel")),r.a.createElement(d.b,{to:"/"},r.a.createElement(h.a,{className:"noBorder",onClick:function(){e.props.reorder(!1),e.setState({reorder:!1})},variant:"contained"},r.a.createElement(N.a,{className:"marginRight"})," Save"))):r.a.createElement("div",{style:{float:"right"}},r.a.createElement(d.b,{to:"/addCampaign"},r.a.createElement(h.a,{className:"noBorder marginRight",variant:"contained"},r.a.createElement(y.a,{className:"marginRight"}),"Add")),r.a.createElement(h.a,{disabled:this.props.hideOptions,variant:"contained",className:"marginRight noBorder"},r.a.createElement(k.a,{className:"marginRight"})," Edit"),r.a.createElement(h.a,{disabled:this.props.hideOptions,variant:"contained",className:"marginRight noBorder","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(a){return e.handleClick(a)}},r.a.createElement(O.a,{className:"marginRight"}),"Actions"),r.a.createElement(p.a,{id:"simple-menu",anchorEl:this.state.anchorEl,keepMounted:!0,open:Boolean(this.state.anchorEl),onClose:function(){return e.handleClose()}},r.a.createElement(v.a,{onClick:function(){return e.handleClose()}},"Profile"),r.a.createElement(v.a,{onClick:function(){return e.handleClose()}},"My account"),r.a.createElement(v.a,{onClick:function(){return e.handleClose()}},"Logout")),r.a.createElement(h.a,{onClick:function(){e.props.reorder(!0),e.setState({reorder:!0})},className:"noBorder",variant:"contained"},r.a.createElement(M.a,{className:"marginRight"})," Reorder")),r.a.createElement(g.a,{open:this.state.showCancelModal},r.a.createElement(f.a,null,"Cancel"),r.a.createElement(C.a,{dividers:!0},r.a.createElement(b.a,{gutterBottom:!0},"Are you sure you want to cancel? Your changes will not be saved.")),r.a.createElement(w.a,null,r.a.createElement(d.b,{to:"/"},r.a.createElement(h.a,{className:"noBorder marginRight",onClick:function(){return e.setState({showCancelModal:!1})},variant:"contained",color:"secondary"},"Cancel")),r.a.createElement(d.b,{to:"/"},r.a.createElement(h.a,{className:"noBorder",onClick:function(){return e.setState({showCancelModal:!1})},variant:"contained"},"Stay")))),r.a.createElement(g.a,{open:this.state.showSaveModal},r.a.createElement(f.a,null,"Discount Code Saved"),r.a.createElement(C.a,{dividers:!0},r.a.createElement(b.a,{gutterBottom:!0},"Your disount code is now saved and activated.",r.a.createElement("br",null),"From: ",r.a.createElement("span",{className:"boldText"},"2020-09-15 - 2020-10-15"),r.a.createElement("br",null),"Countries: ",r.a.createElement("span",{className:"boldText"},"SE, DK, US, CA"),r.a.createElement("br",null),"Currencies: ",r.a.createElement("span",{className:"boldText"},"SEK, DKK, SEK, CAD"),r.a.createElement("br",null)),r.a.createElement("div",null,r.a.createElement(T.CopyToClipboard,{className:"marginTop",text:"PROMO80",onCopy:function(){return e.setState({copied:!0})}},r.a.createElement(h.a,{variant:"outlined"},"PROMO80"," ",r.a.createElement("svg",{style:{marginLeft:30},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})))),this.state.copied?r.a.createElement("span",null,"Copied."):null)),r.a.createElement(w.a,null,r.a.createElement(d.b,{to:"/"},r.a.createElement(h.a,{className:"noBorder",onClick:function(){return e.setState({showSaveModal:!1})},variant:"contained"},"Ok")))))}}]),t}(n.Component),j=t(244),R=t(253),A=t(257),x=t(245),D=t(246),I=t(77),V=t.n(I),K=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={showDiscountModal:!1,showCodeModal:!1,showNumberModal:!1},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(B,{showSave:!0,hideSearch:!0}),r.a.createElement(j.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start"},r.a.createElement("div",{className:"marginRight"},r.a.createElement("h4",null,"Information"),r.a.createElement("div",null,r.a.createElement(E.a,{placeholder:"Name",id:"outlined-basic",variant:"outlined"})),r.a.createElement("div",null,r.a.createElement(E.a,{fullWidth:!0,variant:"outlined",className:"marginTop",type:"date",defaultValue:"2017-05-24"})),r.a.createElement("div",null,r.a.createElement(E.a,{fullWidth:!0,variant:"outlined",className:"marginTop",type:"date",defaultValue:"2017-05-24"})),r.a.createElement("div",null,r.a.createElement(E.a,{className:"marginTop",placeholder:"Country",variant:"outlined"})),r.a.createElement("div",null,r.a.createElement(E.a,{className:"marginTop",placeholder:"Currency",variant:"outlined"}))),r.a.createElement("div",{className:"marginRight"},r.a.createElement("h4",null,"Action"),r.a.createElement("div",null,r.a.createElement(R.a,{variant:"outlined",fullWidth:!0,value:"20"},r.a.createElement(v.a,{value:"10"},"Ten"),r.a.createElement(v.a,{value:"20"},"Twenty"))),r.a.createElement("div",null,r.a.createElement(A.a,{className:"marginTop",placeholder:"Order Discount %",endAdornment:r.a.createElement(x.a,{onClick:function(){return e.setState({showDiscountModal:!0})},position:"end"},r.a.createElement(D.a,{edge:"end"},r.a.createElement(V.a,null)))}))),r.a.createElement("div",null,r.a.createElement("h4",null,"Condition"),r.a.createElement("div",null,r.a.createElement(R.a,{variant:"outlined",fullWidth:!0,value:"20"},r.a.createElement(v.a,{value:"10"},"Ten"),r.a.createElement(v.a,{value:"20"},"Twenty"))),r.a.createElement("div",null,r.a.createElement(A.a,{className:"marginTop",placeholder:"Code",endAdornment:r.a.createElement(x.a,{onClick:function(){return e.setState({showCodeModal:!0})},position:"end"},r.a.createElement(D.a,{edge:"end"},r.a.createElement(V.a,null)))})),r.a.createElement("div",null,r.a.createElement(A.a,{className:"marginTop",placeholder:"Number of usages",endAdornment:r.a.createElement(x.a,{onClick:function(){return e.setState({showNumberModal:!0})},position:"end"},r.a.createElement(D.a,{edge:"end"},r.a.createElement(V.a,null)))})))),r.a.createElement(g.a,{open:this.state.showDiscountModal},r.a.createElement(f.a,null,"Order Discount %"),r.a.createElement(C.a,{dividers:!0},r.a.createElement(b.a,{gutterBottom:!0},"This discount will be apply to the order total excluding VAT and Shipment.")),r.a.createElement(w.a,null,r.a.createElement(h.a,{onClick:function(){return e.setState({showDiscountModal:!1})},variant:"contained",color:"primary"},"Ok"))),r.a.createElement(g.a,{open:this.state.showCodeModal},r.a.createElement(f.a,null,"Campaign Code"),r.a.createElement(C.a,{dividers:!0},r.a.createElement(b.a,{gutterBottom:!0},"The user needs to fill in the campaigncode to get the discount. The code is CASE SENSITIVE.")),r.a.createElement(w.a,null,r.a.createElement(h.a,{onClick:function(){return e.setState({showCodeModal:!1})},variant:"contained",color:"primary"},"Ok"))),r.a.createElement(g.a,{open:this.state.showNumberModal},r.a.createElement(f.a,null,"Number of Usages"),r.a.createElement(C.a,{dividers:!0},r.a.createElement(b.a,{gutterBottom:!0},"How many times this campaign code can be used before it is consumed.")),r.a.createElement(w.a,null,r.a.createElement(h.a,{onClick:function(){return e.setState({showNumberModal:!1})},variant:"contained",color:"primary"},"Ok"))))}}]),t}(n.Component),W=t(126),z=t(247),P=t(233),H=t(248),U=t(249),F=t(250),J=t(251),L=t(252),Y=t(259),G=t(128),$=t(125),_=t.n($),q=t(75),Q="UPDATE_CAMPAIGNS",X=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;Object(o.a)(this,t),n=a.call(this,e);for(var r=[],l=1;l<6;l++)r.push({title:"rows".concat(l)});return n.state={data:r,reorder:!1,hideOptions:!0,selectedIndex:-1},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.updateCampaigns(this.state.data)}},{key:"render",value:function(){var e=this;console.log(this.props);var a=this,t={onDragEnd:function(e,t){var n=Object(W.a)(a.state.data),r=n.splice(e,1)[0];n.splice(t,0,r),a.setState({data:n})},nodeSelector:"tr",handleSelector:"section"};return r.a.createElement("div",null,r.a.createElement(B,{reorder:function(a){return e.setState({reorder:a})},hideOptions:this.state.hideOptions}),r.a.createElement(z.a,{className:"marginTop",component:P.a},r.a.createElement(G.a,t,r.a.createElement(H.a,null,r.a.createElement(U.a,null,r.a.createElement(F.a,null,r.a.createElement(J.a,null,"Name"),r.a.createElement(J.a,null,"Country"),r.a.createElement(J.a,null,"Currency"),r.a.createElement(J.a,null,"StartDate"),r.a.createElement(J.a,null,"StartDate"),r.a.createElement(J.a,{align:"right"},"Active"))),r.a.createElement(L.a,null,this.state.data.map((function(a,t){return r.a.createElement(F.a,{key:t,onClick:function(){return e.setState({hideOptions:!1,selectedIndex:t})},className:e.state.selectedIndex===t&&"blueBg"},r.a.createElement(J.a,null,a.title),r.a.createElement(J.a,null,"SE"),r.a.createElement(J.a,null,"SEK"),r.a.createElement(J.a,null,"2020-04-04"),r.a.createElement(J.a,null,"2021-04-04"),r.a.createElement(J.a,{align:"right"},e.state.reorder?r.a.createElement("section",null,r.a.createElement(_.a,null)):r.a.createElement(Y.a,{size:"medium",color:"primary"})))})))))))}}]),t}(n.Component),Z=Object(q.b)((function(e){return{campaigns:e.campaigns}}),(function(e){return{updateCampaigns:function(a){return e(function(e){return{type:Q,payload:e}}(a))}}}))(X),ee=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:Z,exact:!0}),r.a.createElement(u.a,{path:"/addCampaign",component:K,exact:!0})))}}]),t}(n.Component),ae=t(73),te=t(129),ne={campaigns:[]},re=Object(ae.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case Q:return Object(te.a)({},e,{campaigns:n});default:return e}}));var le=function(){return r.a.createElement(q.a,{store:re},r.a.createElement("div",{className:"App"},r.a.createElement(ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[141,1,2]]]);
//# sourceMappingURL=main.451b51ca.chunk.js.map