(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{278:function(e,t,a){e.exports=a(47)},287:function(e,t,a){},371:function(e,t,a){},376:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(78),c=a.n(o),s=a(18),l=a(19),i=a(32),u=a(20),m=a(33),p=a(17),d=a(485),h=a(34),g=a(494),b=(a(287),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.poster,t=e.image;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"preview-vertical"},r.a.createElement("div",{className:"image-half",style:{backgroundImage:"url( "+t+" )",backgroundSize:"1"===e.scale||1===e.scale?"cover":20*e.scale+150+"%"}},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo-holder"},r.a.createElement("span",null,"Moments Matter"),r.a.createElement("img",{src:"/pancan-logo.png",alt:""})))),r.a.createElement("div",{className:"body-copy"},r.a.createElement(g.a,{as:"h2",className:"title",textAlign:"center",content:e.title}),r.a.createElement("p",{className:"content"},e.message))),r.a.createElement("div",{className:"final-vertical",id:"final-vertical"},r.a.createElement("div",{className:"image-half",style:{backgroundImage:"url( "+t+" )",backgroundSize:"1"===e.scale||1===e.scale?"cover":20*e.scale+150+"%"}},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo-holder"},r.a.createElement("div",{className:"white-drop"}),r.a.createElement("span",null,"Moments Matter"),r.a.createElement("img",{src:"/pancan-logo.png",alt:""})))),r.a.createElement("div",{className:"body-copy"},r.a.createElement(g.a,{as:"h2",className:"title",textAlign:"center",content:e.title}),r.a.createElement("p",{className:"content"},e.message))))}}]),t}(n.Component)),f=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},null)(b),E=a(495),v=(a(371),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.poster,t=e.image;return r.a.createElement("div",null,r.a.createElement(E.a,{columns:2,className:"preview-horizontal"},r.a.createElement(E.a.Column,{className:"image-half",style:{backgroundImage:"url( "+t+" )",backgroundSize:"1"===e.scale||1===e.scale?"cover":20*e.scale+150+"%"}}),r.a.createElement(E.a.Column,{className:"text-half"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo-holder"},r.a.createElement("span",null,"Moments Matter"),r.a.createElement("img",{src:"/pancan-logo.png",alt:""}))),r.a.createElement(g.a,{as:"h2",className:"title",textAlign:"left",content:e.title}),r.a.createElement("p",{className:"content"},e.message))),r.a.createElement(E.a,{columns:2,id:"final-horizontal"},r.a.createElement(E.a.Column,{className:"image",style:{backgroundImage:"url( "+t+" )",backgroundSize:"1"===e.scale||1===e.scale?"cover":20*e.scale+150+"%"}}),r.a.createElement(E.a.Column,{className:"body-text"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo-holder"},r.a.createElement("span",null,"Moments Matter"),r.a.createElement("img",{src:"/pancan-logo.png",alt:""}))),r.a.createElement(g.a,{as:"h2",className:"title",content:e.title}),r.a.createElement("p",{className:"content"},e.message))))}}]),t}(n.Component)),y=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},null)(v),w=(a(376),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.poster,t=e.image;return r.a.createElement("div",{id:"preview-square",className:"preview-square poster-preview-holder",style:{backgroundImage:"url( "+t+" )",backgroundSize:"1"===e.scale||1===e.scale?"cover":20*e.scale+150+"%"}},r.a.createElement("p",{className:"message-holder"},e.message),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"logo-holder"},r.a.createElement("span",null,"Moments Matter"),r.a.createElement("img",{src:"/pancan-logo.png",alt:""}))))}}]),t}(n.Component)),O=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},null)(w),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).renderPreview=a.renderPreview.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderPreview",value:function(){switch(this.props.poster.layoutType){case 1:return r.a.createElement(O,null);case 2:return r.a.createElement(y,null);case 3:return r.a.createElement(f,null);default:return console.log("invalid layout type")}}},{key:"render",value:function(){return r.a.createElement(d.a,{className:"preview-container"},r.a.createElement("div",{id:"final-poster"},this.renderPreview()))}}]),t}(n.Component),k=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},null)(j),S=a(492),C=a(43),T=a(493),x=a(496),N=a(491),I="SET_LAYOUT",A="SET_LANGUAGE",L="SET_IMAGE",H="SET_LOGO",M="SET_MESSAGE",R="SET_TITLE",U="SET_STEP",P="SET_THEME",_="POSTER_CREATE",B="POSTER_SCALE",z=function(e){return{type:"LAYOUT_SET",payload:e}},G=function(e){return{type:"LANGUAGE_SET",payload:{language:e}}},W=function(e){return{type:"STEP_SET",payload:{step:e}}},D=function(e){return{type:"THEME_SET",payload:{theme:e}}},F=function(e){return{type:"IMAGE_SET",payload:{image:e}}},q=function(e){return{type:"LOGO_SET",payload:{logo:e}}},Y=function(e){return{type:"MESSAGE_SET",payload:{message:e}}},J=function(e){return{type:"POSTER_CREATE_SUCCESS",payload:{posterImage:e}}},V=function(e){return{type:"SCALE_SET",payload:{scale:e}}},X=function(e){return{type:"TITLE_SET",payload:{title:e}}},$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).layoutHandler=a.layoutHandler.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"layoutHandler",value:function(e){(0,this.props.setLayout)(e)}},{key:"render",value:function(){var e=this,t=this.props.poster;return r.a.createElement("div",{className:"step-card paddingTop"},r.a.createElement(g.a,{as:"h2",className:"text-center poster-h2"},"Choose your layout"),r.a.createElement(E.a,{centered:!0,divided:!0,columns:3},r.a.createElement(E.a.Column,{computer:5,mobile:16,tablet:5,textAlign:"center",className:"poster message only"===t.type?"active layout-selector":"layout-selector ",onClick:function(){return e.layoutHandler("poster message only")}},r.a.createElement(x.a,{raised:!0},r.a.createElement(N.a,null,r.a.createElement(N.a.Paragraph,null,r.a.createElement(N.a.Line,{length:"short"}),r.a.createElement(N.a.Line,{length:"medium"}),r.a.createElement(N.a.Line,{length:"short"}),r.a.createElement(N.a.Line,{length:"medium"}),r.a.createElement(N.a.Line,{length:"short"})))),r.a.createElement("p",{className:"center"},"Square\xa0",r.a.createElement("br",null),"(Short message only)")),r.a.createElement(E.a.Column,{computer:7,mobile:16,tablet:7,textAlign:"center",className:"poster message and image"===t.type?"active layout-selector":"layout-selector",onClick:function(){return e.layoutHandler("poster message and image")}},r.a.createElement(x.a,{raised:!0},r.a.createElement(N.a,null,r.a.createElement(N.a.Header,{image:!0},r.a.createElement(N.a.Line,null),r.a.createElement(N.a.Line,null)),r.a.createElement(N.a.Paragraph,null,r.a.createElement(N.a.Line,{length:"medium"}),r.a.createElement(N.a.Line,{length:"short"}),r.a.createElement(N.a.Line,{length:"medium"})))),r.a.createElement("p",{className:"center"},"Horizontal\xa0",r.a.createElement("br",null),"(Share your story)")),r.a.createElement(E.a.Column,{computer:4,mobile:16,tablet:4,textAlign:"center",className:"post message only"===t.type?"active layout-selector":"layout-selector",onClick:function(){return e.layoutHandler("post message only")}},r.a.createElement(x.a,{raised:!0},r.a.createElement(N.a,null,r.a.createElement(N.a.Paragraph,null,r.a.createElement(N.a.Line,{length:"medium"}),r.a.createElement(N.a.Line,{length:"short"}),r.a.createElement(N.a.Line,{length:"medium"}),r.a.createElement(N.a.Line,{length:"short"}),r.a.createElement(N.a.Line,{length:"medium"}),r.a.createElement(N.a.Line,{length:"short"}),r.a.createElement(N.a.Line,{length:"medium"})))),r.a.createElement("p",{className:"center"},"Vertical\xa0",r.a.createElement("br",null),"(Share your story)"))))}}]),t}(n.Component),K=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},function(e){return{setLayout:function(t){return e({type:I,payload:t})}}})($),Q=a(487),Z=a(489),ee=a(488),te=a(29),ae=a.n(te),ne=a(69),re=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={width:400,height:0,streaming:!1,video:null,canvas:null,startbutton:null,ready:!1,stream:null,isMobile:!1},a.startup=a.startup.bind(Object(p.a)(a)),a.clearPhoto=a.clearPhoto.bind(Object(p.a)(a)),a.startStream=a.startStream.bind(Object(p.a)(a)),a.makeBlob=a.makeBlob.bind(Object(p.a)(a)),a.stopStream=a.stopStream.bind(Object(p.a)(a)),a.isMobile=a.isMobile.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.startup(),this.isMobile()}},{key:"isMobile",value:function(){navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?this.setState({isMobile:!0}):this.setState({isMobile:!1})}},{key:"startup",value:function(){var e=Object(ne.a)(ae.a.mark(function e(){var t=this;return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({video:document.getElementById("video-stream"),canvas:document.getElementById("image-canvas"),startbutton:document.getElementById("takepicture")});case 2:this.state.video.addEventListener("canplay",function(e){t.state.streaming||(t.state.height=t.state.video.videoHeight/(t.state.video.videoWidth/t.state.width),t.state.video.setAttribute("width",t.state.width),t.state.video.setAttribute("height",t.state.height),t.state.canvas.setAttribute("width",t.state.width),t.state.canvas.setAttribute("height",t.state.height),t.state.streaming=!0,t.forceUpdate())},!1);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"startStream",value:function(){var e=this;if(this.state.ready){var t=this.props.setImage,a=this.state.canvas.getContext("2d");if(this.state.width&&this.state.height){this.state.canvas.width=this.state.width,this.state.canvas.height=this.state.height,a.drawImage(this.state.video,0,0,this.state.width,this.state.height);var n=this.state.canvas.toDataURL("image/jpeg");t(this.makeBlob(n)),this.forceUpdate(),this.stopStream()}}else{document.getElementById("camera-stream").style.display="block",navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(function(t){e.state.video.srcObject=t,e.state.video.play(),e.setState({ready:!0,stream:t})}).catch(function(e){return console.log("cannot open stream: ",e)})}}},{key:"clearPhoto",value:function(){(0,this.props.setImage)(null)}},{key:"stopStream",value:function(){document.getElementById("camera-stream").style.display="none",this.state.stream.getTracks().forEach(function(e){return e.stop()}),this.setState({ready:!1,stream:null})}},{key:"makeBlob",value:function(e){var t="";t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var a=e.split(",")[0].split(":")[1].split(";")[0],n=new Uint8Array(t.length),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return URL.createObjectURL(new Blob([n],{type:a}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"camera",id:"camera-stream",style:{display:"none"}},r.a.createElement("video",{id:"video-stream"})),r.a.createElement(T.a,{disabled:this.state.isMobile,color:"green",onClick:this.startStream},"Take photo"),this.state.ready?r.a.createElement("span",null,r.a.createElement(T.a,{color:"orange",onClick:this.clearPhoto},"Clear photo"),r.a.createElement(T.a,{color:"red",onClick:this.stopStream},"Cancel")):"",r.a.createElement("canvas",{id:"image-canvas",style:{display:"none"}}))}}]),t}(n.Component),oe=Object(h.b)(function(e){return{poster:e.rootReducer}},function(e){return{setImage:function(t){return e({type:L,path:t})}}})(re),ce=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={messageType:1,error:{message:"",active:!1},zoom:1},a.themeImage=a.themeImage.bind(Object(p.a)(a)),a.selectorHandler=a.selectorHandler.bind(Object(p.a)(a)),a.changeHandler=a.changeHandler.bind(Object(p.a)(a)),a.logoHandler=a.logoHandler.bind(Object(p.a)(a)),a.zoomChange=a.zoomChange.bind(Object(p.a)(a)),a.startStream=a.startStream.bind(Object(p.a)(a)),a.titleChangeHandler=a.titleChangeHandler.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"themeImage",value:function(e){var t=this.props.setImage,a=e.target.files[0],n=URL.createObjectURL(a);if(a.size>5242880)return this.setState({error:{message:"File is way to big...",active:!0}});t(a,n)}},{key:"selectorHandler",value:function(e){(0,this.props.setMessage)(e)}},{key:"titleChangeHandler",value:function(e){(0,this.props.setTitle)(e.target.value)}},{key:"changeHandler",value:function(e){(0,this.props.setMessage)(e.target.value)}},{key:"logoHandler",value:function(e){var t=this.props.setLogo,a=e.target.files[0],n=URL.createObjectURL(a);if(a.size>5242880)return this.setState({error:{message:"File is way to big...",active:!0}});t(a,n)}},{key:"zoomChange",value:function(e,t){t.name;var a=t.value,n=this.props.setSize;this.setState({zoom:a}),n(a)}},{key:"startStream",value:function(){console.log("will start camera streaming here")}},{key:"render",value:function(){var e=this.props.poster;return r.a.createElement(d.a,{textAlign:"center"},r.a.createElement(g.a,{as:"h2",className:"text-center poster-h2"},"Upload your image"),r.a.createElement(Q.a,{icon:"file",iconPosition:"left",placeholder:"Upload Image",accept:"image/*",type:"file",onChange:this.themeImage}),r.a.createElement("p",null,"10 MB limit. Allowed types: gif png jpg jpeg."),r.a.createElement(g.a,{as:"h2",className:"text-center poster-h2"},"Take a picture"),r.a.createElement(oe,null),r.a.createElement(Z.a.Input,{label:"Scale image: ",min:1,max:10,name:"zoom",onChange:this.zoomChange,type:"range",value:this.state.zoom,className:"scale-controller"}),r.a.createElement(g.a,{as:"h2",textAlign:"center",className:"text-center poster-h2"},"Share Your Moment"),r.a.createElement(Z.a,null,r.a.createElement(Q.a,{className:1===e.layoutType?"hide":"show paddingBottom",placeholder:"Poster title",type:"text",onChange:this.titleChangeHandler,defaultValue:e.title}),r.a.createElement(ee.a,{placeholder:"Write 'I am and will' message here. eg. 'I am a student and I will spread the word'.",maxLength:"150",onChange:this.changeHandler,defaultValue:e.message}),r.a.createElement("p",null,"Maximum 150 characters")))}}]),t}(n.Component),se=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},function(e){return{setImage:function(t,a){return e({type:L,payload:t,path:a})},setLogo:function(t,a){return e({type:H,payload:t,path:a})},setMessage:function(t){return e({type:M,payload:t})},setSize:function(t){return e({type:B,payload:t})},setTitle:function(t){return e({type:R,payload:t})}}})(ce),le=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).renderStep=a.renderStep.bind(Object(p.a)(a)),a.langHandler=a.langHandler.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"langHandler",value:function(e){(0,this.props.setLanguage)(e)}},{key:"renderStep",value:function(e){return r.a.createElement(se,null)}},{key:"render",value:function(){var e=this.props.poster;return r.a.createElement("div",{className:"step-card"},this.renderStep(e.layoutType))}}]),t}(n.Component),ie=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},function(e){return{setLanguage:function(t){return e({type:A,payload:t})}}})(le),ue=a(490),me=a(91),pe=a.n(me),de=a(258),he=a.n(de),ge=function(){function e(){return Object(s.a)(this,e),this.screenLeft=void 0,this.screenTop=void 0,this.screenWidth=void 0,this.screenHeight=void 0,this.zoom=void 0,this.screenLeft=window.screenLeft||window.screenX,this.screenTop=window.screenTop||window.screenY,this.screenWidth=window.innerWidth||document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,this.screenHeight=window.innerHeight||document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,this.zoom=this.screenWidth/window.screen.availWidth,this}return Object(l.a)(e,[{key:"getWindow",value:function(e,t,a,n){var r=(this.screenWidth-a)/2/this.zoom+this.screenLeft,o=(this.screenHeight-n)/2/this.zoom+this.screenTop,c="scrollbars=yes, width="+a/this.zoom+", height="+n/this.zoom+", top="+o+", left="+r,s=window.open(e,t,c);window.focus&&s.focus()}}]),e}(),be=function(e){return fetch("https://core.pancan.org/api/poster/email",{method:"post",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:e}).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return e})},fe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={facebook:"https://www.facebook.com/sharer/sharer.php?u=https://www.pancan.org/get-involved/moments-matter/",twitter:"https://twitter.com/intent/tweet/?text="+encodeURIComponent("#MomentsMatter. Join me & @PanCAN in sharing our stories & raising #pancreaticcancer awareness so more patients can have more moments with their loved ones. http://pcan.at/MnM"),instagram:"https://www.instagram.com/pancan/"},a.socialHandler=a.socialHandler.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"socialHandler",value:function(e){(new ge).getWindow(e,"Share Poster Creator",530,400)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"social-button-container"},r.a.createElement(T.a,{circular:!0,color:"facebook",icon:"facebook",onClick:function(){return e.socialHandler(e.state.facebook)}}),r.a.createElement(T.a,{circular:!0,color:"twitter",icon:"twitter",onClick:function(){return e.socialHandler(e.state.twitter)}}),r.a.createElement(T.a,{circular:!0,color:"instagram",icon:"instagram",onClick:function(){return e.socialHandler(e.state.instagram)}}))}}]),t}(n.Component),Ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={isUploaded:!1,posterId:-1,emailInfo:!1,user:{fname:"",lname:"",email:""},error:{error:!1,det:""},elementIds:{1:"preview-square",2:"final-horizontal",3:"final-vertical"}},a.controllers=a.controllers.bind(Object(p.a)(a)),a.downloadPosterImage=a.downloadPosterImage.bind(Object(p.a)(a)),a.shareTwitter=a.shareTwitter.bind(Object(p.a)(a)),a.shareFacebook=a.shareFacebook.bind(Object(p.a)(a)),a.dataURItoBlob=a.dataURItoBlob.bind(Object(p.a)(a)),a.base64ToBlob=a.base64ToBlob.bind(Object(p.a)(a)),a.emailModal=a.emailModal.bind(Object(p.a)(a)),a.formChange=a.formChange.bind(Object(p.a)(a)),a.error=a.error.bind(Object(p.a)(a)),a.sendToEmail=a.sendToEmail.bind(Object(p.a)(a)),a.checkErrors=a.checkErrors.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"downloadPosterImage",value:function(e){var t=this.props.poster,a=this.state.elementIds,n=document.getElementById(a[t.layoutType]);n.style.visibility="visible",pe()(n).then(function(t){var a=t.toDataURL("image/jpeg",1);if("pdf"===e){var r=new he.a("p","mm");return r.addImage(a,"JPEG",10,10),void r.save("poster.pdf")}var o=document.createElement("a");o.href=a,o.download="poster.jpeg",o.click(),n.style.visibility="hidden"})}},{key:"sendToEmail",value:function(){var e=Object(ne.a)(ae.a.mark(function e(){var t,a,n,r,o=this;return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.poster,a=this.state.elementIds,n=document.getElementById(a[t.layoutType]),r=this.state.isUploaded,this.checkErrors()){e.next=7;break}return e.next=7,pe()(n).then(function(){var e=Object(ne.a)(ae.a.mark(function e(t){var a,n,c,s;return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.toDataURL("image/jpeg",1),n={key:"5994766c58613900370b6153",image:a,lname:o.state.user.lname,email:o.state.user.email,fname:o.state.user.fname},c=Object.keys(n).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])}).join("&"),r){e.next=8;break}return e.next=6,be(c);case 6:s=e.sent,o.setState({isUploaded:!0,posterId:s.id,error:{error:!1},emailInfo:!1});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"formChange",value:function(e,t){var a=t.name,n=t.value,r=this.state.user,o=r.fname,c=r.lname,s=r.email;switch(a){case"lname":this.setState({user:{lname:n,fname:o,email:s}});break;case"fname":this.setState({user:{lname:c,fname:n,email:s}});break;case"email":this.setState({user:{lname:c,fname:o,email:n}});break;default:console.log(this.state.user)}}},{key:"error",value:function(){return r.a.createElement("b",{style:{color:"red"}},"Error! make sure to have vaild form values.")}},{key:"checkErrors",value:function(){var e=this.state.user,t=e.lname,a=e.fname,n=e.email;return(""===t||""===a||""===n)&&(this.setState({error:{error:!0}}),!0)}},{key:"emailModal",value:function(){var e=this,t=this.state,a=t.emailInfo,n=t.isUploaded;return r.a.createElement(ue.a,{open:a,trigger:r.a.createElement(T.a,{color:"purple",disabled:!!n,content:n?"Email sent!":"Send via Email",onClick:function(){return e.setState(function(e){return{emailInfo:!e.emailInfo}})}}),basic:!0,size:"small"},r.a.createElement(g.a,{icon:"send",content:"Send me my poster"}),r.a.createElement(ue.a.Content,null,r.a.createElement("strong",{className:"over-image"},"Your email information:"),r.a.createElement(Z.a,null,r.a.createElement(Z.a.Field,{required:!0},r.a.createElement("label",{style:{color:"#ffffff"}},"First name:"),r.a.createElement(Q.a,{iconPosition:"left",placeholder:"First Name",name:"fname",type:"text",onChange:this.formChange})),r.a.createElement(Z.a.Field,{required:!0},r.a.createElement("label",{style:{color:"#ffffff"}},"Last name:"),r.a.createElement(Q.a,{iconPosition:"left",placeholder:"Last Name",name:"lname",type:"text",onChange:this.formChange})),r.a.createElement(Z.a.Field,{required:!0},r.a.createElement("label",{style:{color:"#ffffff"}},"Email:"),r.a.createElement(Q.a,{name:"email",iconPosition:"left",placeholder:"Email address",type:"email",onChange:this.formChange})))),r.a.createElement(ue.a.Actions,null,r.a.createElement(T.a,{color:"red",inverted:!0,onClick:function(){return e.setState(function(e){return{emailInfo:!e.emailInfo}})}},r.a.createElement(C.a,{name:"remove"}),"No"),r.a.createElement(T.a,{color:"green",inverted:!0,onClick:this.sendToEmail},r.a.createElement(C.a,{name:"mail"}),"Send"),this.state.error.error?this.error():""))}},{key:"shareTwitter",value:function(){var e=this,t=document.getElementById("final-poster"),a=this.state,n=a.isUploaded,r=a.posterId;pe()(t,{scale:2}).then(function(){var t=Object(ne.a)(ae.a.mark(function t(a){var o,c,s,l;return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=a.toDataURL("image/png"),c={key:"5994766c58613900370b6153",image:o},n){t.next=10;break}return t.next=5,be(c);case 5:l=t.sent,e.setState({isUploaded:!0,posterId:l.id}),s="https://twitter.com/intent/tweet/?text="+encodeURIComponent("PanCAN Poster #demandbetter #advocate at http://www.worldpancreaticcancercoalition.org/poster/"+l.id),t.next=11;break;case 10:s="https://twitter.com/intent/tweet/?text="+encodeURIComponent("PanCAN Poster #demandbetter #advocate at http://www.worldpancreaticcancercoalition.org/poster/"+r);case 11:(new ge).getWindow(s,"Share Poster",530,400);case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"shareFacebook",value:function(){var e=this,t=document.getElementById("final-poster"),a=this.state,n=a.isUploaded,r=a.posterId;pe()(t,{scale:2}).then(function(){var t=Object(ne.a)(ae.a.mark(function t(a){var o,c,s,l;return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=a.toDataURL("image/png"),s={key:"5994766c58613900370b6153",image:o},n){t.next=10;break}return t.next=5,be(s);case 5:l=t.sent,e.setState({isUploaded:!0,posterId:l.id}),c="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent("http://www.worldpancreaticcancercoalition.org/poster/"+l.id),t.next=11;break;case 10:c="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent("http://www.worldpancreaticcancercoalition.org/poster/"+r);case 11:(new ge).getWindow(c,"Share Poster",530,200);case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"dataURItoBlob",value:function(e){for(var t=atob(e.split(",")[1]),a=new ArrayBuffer(t.length),n=new Uint8Array(a),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return new Blob([a],{type:"image/png"})}},{key:"base64ToBlob",value:function(e){var t="";t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var a=e.split(",")[0].split(":")[1].split(";")[0],n=new Uint8Array(t.length),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return new Blob([n],{type:a})}},{key:"controllers",value:function(e){var t=this;switch(e){case 1:case 2:case 3:case 4:return r.a.createElement(E.a,{container:!0,columns:2,stackable:!0},r.a.createElement(E.a.Column,{textAlign:"center"},r.a.createElement(T.a,{content:"Download JPG",color:"purple",onClick:function(){return t.downloadPosterImage("image")}})),r.a.createElement(E.a.Column,{textAlign:"center"},this.emailModal()));default:return r.a.createElement("div",null)}}},{key:"render",value:function(){var e=this.props.poster;return r.a.createElement(d.a,{className:"step paddingTop"},r.a.createElement(g.a,{as:"h2",content:"#MomentsMatter",textAlign:"center",className:"poster-h2"}),r.a.createElement("p",{style:{textAlign:"center"},className:"paddingBottom over-solid leadin-copy"},"Share your Moment with the world by downloading your image and sharing it to social media with #MomentsMatter and tagging us @PanCAN."),r.a.createElement(fe,null),r.a.createElement("br",null),this.controllers(e.layoutType))}}]),t}(n.Component),ve=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},function(e){return{setPoster:function(t){return e({type:_,payload:t})}}})(Ee),ye=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).stepHandler=a.stepHandler.bind(Object(p.a)(a)),a.stepRender=a.stepRender.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"stepHandler",value:function(e){(0,this.props.setStep)(e)}},{key:"stepRender",value:function(){switch(this.props.poster.step){case 1:return r.a.createElement(K,null);case 2:return r.a.createElement(ie,null);case 3:return r.a.createElement(ve,null)}}},{key:"render",value:function(){var e=this,t=this.props.poster;return r.a.createElement("div",{className:"controller-container"},r.a.createElement(d.a,null,r.a.createElement(S.a.Group,{fluid:!0},r.a.createElement(S.a,{active:1===t.step,onClick:function(){return e.stepHandler(1)},className:"step-button"},r.a.createElement(C.a,{name:"vcard"}),r.a.createElement(S.a.Content,null,r.a.createElement(S.a.Title,null,"Start"))),r.a.createElement(S.a,{active:2===t.step,onClick:function(){return e.stepHandler(2)},className:"step-button"},r.a.createElement(C.a,{name:"connectdevelop"}),r.a.createElement(S.a.Content,null,r.a.createElement(S.a.Title,null,"Customize"))),r.a.createElement(S.a,{active:3===t.step,onClick:function(){return e.stepHandler(3)},className:"step-button"},r.a.createElement(C.a,{name:"share alternate square"}),r.a.createElement(S.a.Content,null,r.a.createElement(S.a.Title,null,"Save & Share")))),this.stepRender(),r.a.createElement(T.a,{onClick:function(){return e.stepHandler(t.step-1)},className:t.step>1?"back-button show":" hide"},r.a.createElement(C.a,{name:"arrow left"}),"\xa0Back"),r.a.createElement(T.a,{className:t.step<3?"next-button show":" hide",onClick:function(){return e.stepHandler(t.step+1)}},"Next\xa0",r.a.createElement(C.a,{name:"arrow right"}))))}}]),t}(n.Component),we=Object(h.b)(function(e){return{poster:e.rootReducer.poster}},function(e){return{setStep:function(t){return e({type:U,payload:t})}}})(ye),Oe=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{container:!0,columns:"equal",divided:!0,stackable:!0},r.a.createElement(E.a.Column,{mobile:16,tablet:16,computer:16,largeScreen:10},r.a.createElement(we,null)),r.a.createElement(E.a.Column,{mobile:16,tablet:16,computer:16,largeScreen:6,className:"purple-gradient-bck",style:{paddingTop:25,display:"flex",alignItems:"center",minHeight:600}},r.a.createElement(k,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=a(267),ke=a(40),Se=a(45),Ce=a(49),Te=Object(ke.combineReducers)({poster:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{step:1,type:"poster message only",layoutType:1,language:"english",message:"",createdDate:Date(),shareNetwork:"",theme:"pancan-purple",image:"",logo:"https://www.pancan.org//wp-content/uploads/2018/05/pancan-logo.png",posterImage:{},scale:1,title:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LAYOUT_SET":case"STEP_SET":case"LANGUAGE_SET":case"THEME_SET":case"MESSAGE_SET":case"LOGO_SET":case"IMAGE_SET":case"POSTER_CREATE_SUCCESS":case"SCALE_SET":case"TITLE_SET":return Object(Ce.a)({},e,t.payload);default:return e}}}),xe=a(44),Ne=ae.a.mark(Ge),Ie=ae.a.mark(We),Ae=ae.a.mark(De),Le=ae.a.mark(Fe),He=ae.a.mark(qe),Me=ae.a.mark(Ye),Re=ae.a.mark(Je),Ue=ae.a.mark(Ve),Pe=ae.a.mark(Xe),_e=ae.a.mark($e),Be=ae.a.mark(Ke),ze=ae.a.mark(Qe);function Ge(){return ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.c)(I,We);case 2:return e.next=4,Object(xe.c)(A,De);case 4:return e.next=6,Object(xe.c)(U,Fe);case 6:return e.next=8,Object(xe.c)(P,qe);case 8:return e.next=10,Object(xe.c)(M,Ye);case 10:return e.next=12,Object(xe.c)(L,Je);case 12:return e.next=14,Object(xe.c)(H,Ve);case 14:return e.next=16,Object(xe.c)(_,Xe);case 16:return e.next=18,Object(xe.c)(B,$e);case 18:return e.next=20,Object(xe.c)(R,Ke);case 20:case"end":return e.stop()}},Ne)}function We(e){var t;return ae.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:a.t0=e.payload,a.next="poster message only"===a.t0?3:"poster message and image"===a.t0?5:"post message only"===a.t0?7:"post image"===a.t0?9:11;break;case 3:return t={type:"poster message only",layoutType:1},a.abrupt("break",11);case 5:return t={type:"poster message and image",layoutType:2},a.abrupt("break",11);case 7:return t={type:"post message only",layoutType:3},a.abrupt("break",11);case 9:return t={type:"post image",layoutType:4},a.abrupt("break",11);case 11:return a.next=13,Object(xe.b)(z(t));case 13:case"end":return a.stop()}},Ie)}function De(e){return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(xe.b)(G(e.payload));case 2:case"end":return t.stop()}},Ae)}function Fe(e){return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(xe.b)(W(e.payload));case 2:case"end":return t.stop()}},Le)}function qe(e){return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(xe.b)(D(e.payload));case 2:case"end":return t.stop()}},He)}function Ye(e){return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(xe.b)(Y(e.payload));case 2:case"end":return t.stop()}},Me)}function Je(e){return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(xe.b)(F(e.path));case 2:case"end":return t.stop()}},Re)}function Ve(e){return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(xe.b)(q(e.path));case 2:case"end":return t.stop()}},Ue)}function Xe(e){return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(xe.b)(J(e.payload));case 2:case"end":return t.stop()}},Pe)}function $e(e){return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(xe.b)(V(e.payload));case 2:case"end":return t.stop()}},_e)}function Ke(e){return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(xe.b)(X(e.payload));case 2:case"end":return t.stop()}},Be)}function Qe(){var e;return ae.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=[Ge()],t.next=3,Object(xe.a)(e);case 3:case"end":return t.stop()}},ze)}var Ze=Object(je.composeWithDevTools)({}),et=Object(Se.a)(),tt=[et],at=Ze(ke.applyMiddleware.apply(void 0,tt)),nt=Object(ke.combineReducers)({rootReducer:Te}),rt=Object(ke.createStore)(nt,at);et.run(Qe);a(476);c.a.render(r.a.createElement(h.a,{store:rt},r.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},476:function(e,t,a){}},[[278,2,1]]]);
//# sourceMappingURL=main.a01b7f4c.chunk.js.map