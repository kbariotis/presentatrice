(this.webpackJsonppresentit=this.webpackJsonppresentit||[]).push([[0],{29:function(e,n,t){"use strict";t.r(n);var i=t(3),r=t.n(i),a=t(15),c=t.n(a),l=t(2),o=t(1),d=t(16),u=t(8),s=t(5),m=t(7),h=t.n(m),f=t(13),b=t(4),g=t(20),p=t.n(g),j={normal:{add:function(e){return"heading"===e?"singleHeader":"image"===e?"image":"blockquote"===e?"blockquote":void 0},remove:function(e){return"normal"}},blockquote:{add:function(e){if("paragraph"===e)return"blockquote"},remove:function(e){return"normal"}},image:{add:function(e){if("image"===e)return"manyImages"},remove:function(e){return"normal"}},manyImages:{add:function(e){if("image"===e)return"manyImages"},remove:function(e){return"normal"}},singleHeader:{add:function(e){return"heading"===e?"twoHeaders":"paragraph"===e?"headerSingleParagraph":"list"===e?"headerList":"image"===e?"headerImage":"code_block"===e?"headerCodeblock":void 0},remove:function(e){return"normal"}},twoHeaders:{add:function(e){return"normal"},remove:function(e){return"singleHeader"}},headerList:{add:function(e){return"normal"},remove:function(e){return"singleHeader"}},headerImage:{add:function(e){return"normal"},remove:function(e){return"image"===e?"singleHeader":"heading"===e?"image":void 0}},headerSingleParagraph:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerParagraphImage":void 0},remove:function(e){return"heading"===e?"normal":"paragraph"===e?"singleHeader":void 0}},headerManyParagraphs:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerManyParagraphsImage":void 0},remove:function(e){return"normal"}},headerCodeblock:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerManyParagraphsImage":void 0},remove:function(e){return"normal"}},headerManyParagraphsImage:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerManyParagraphsImage":void 0},remove:function(e){return"normal"}},headerParagraphImage:{add:function(e){return"paragraph"===e?"headerManyParagraphs":"image"===e?"headerManyParagraphsImage":void 0},remove:function(e){return"normal"}}};var x=r.a.createContext({getNumbersOfSlide:function(){return 1},getCurrentSlide:function(){return{number:0,state:"normal"}},getThumbnails:function(){return[]},addSlide:function(){},removeSlide:function(){},changeCurrentSlide:function(){},getElementsForSlide:function(){return[]},addElement:function(){},removeElement:function(){},changeElementValue:function(){}}),v=t(0);var O,y,w,k,S=function(){var e=Object(i.useContext)(x),n=e.addElement,t=(0,e.getCurrentSlide)();return Object(v.jsxs)("div",{style:{},children:[Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:1,value:"Heading 1"})},style:{padding:"10px",marginRight:"5px"},children:"H1"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:2,value:"Heading 2"})},style:{padding:"10px",marginRight:"5px"},children:"H2"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:3,value:"Heading 3"})},style:{padding:"10px",marginRight:"5px"},children:"H3"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:4,value:"Heading 4"})},style:{padding:"10px",marginRight:"5px"},children:"H4"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:5,value:"Heading 5"})},style:{padding:"10px",marginRight:"5px"},children:"H5"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"heading",level:6,value:"Heading 6"})},style:{padding:"10px",marginRight:"5px"},children:"H6"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"paragraph",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})},style:{padding:"10px",marginRight:"5px"},children:"P"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"image",value:"https://via.placeholder.com/500x500"})},style:{padding:"10px",marginRight:"5px"},children:"Img"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"list",value:"Point one to make"})},style:{padding:"10px",marginRight:"5px"},children:"Li"}),Object(v.jsx)("button",{onClick:function(){return n({id:(new Date).getTime(),slide:t.number,type:"blockquote",value:"A wise man once said..."})},style:{padding:"10px",marginRight:"5px"},children:"Q"})]})},E=o.c.div(O||(O=Object(l.a)(["\n  position: relative;\n  display: inline-block;\n"]))),N=o.c.button(y||(y=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),C=o.c.img(w||(w=Object(l.a)(["\n  display: inline-block;\n  width: 150px;\n  height: 100px;\n  vertical-align: middle;\n  border: ",";\n"])),(function(e){return e.active?"1px solid red":"none"})),H=o.c.div(k||(k=Object(l.a)(["\n  display: inline-block;\n  width: 150px;\n  height: 100px;\n  vertical-align: middle;\n  border: ",";\n"])),(function(e){return e.active?"1px solid red":"none"}));var I=function(e){var n=e.src,t=e.active,r=e.number,a=Object(i.useContext)(x),c=a.removeSlide,l=a.getThumbnails,o=Object(i.useState)(!1),d=Object(b.a)(o,2),u=d[0],s=d[1],m=""!==n?Object(v.jsx)(C,{active:t,src:n,alt:"Slide"}):Object(v.jsx)(H,{active:t,children:"Loading"});return Object(v.jsxs)(E,{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:[m,u&&l().length>1&&Object(v.jsx)(N,{onMouseDown:function(){c(r)},children:"X"})]})};var P,T,F,D=function(){var e=Object(i.useContext)(x),n=e.changeCurrentSlide,t=e.getCurrentSlide,r=e.addSlide,a=e.getThumbnails,c=e.getNumbersOfSlide,l=t();return Object(v.jsxs)("div",{style:{},children:[Object(v.jsx)("button",{onClick:function(){n(l.number-1)},disabled:0===l.number,style:{height:"100px"},children:"<"}),a().map((function(e,n){return Object(v.jsx)(I,{src:e,number:n,active:l.number===n},n)})),Object(v.jsx)("button",{style:{height:"100px"},onClick:function(){l.number===c()-1?r():n(l.number+1)},children:l.number===c()-1?"+":">"})]})},M=o.c.div(P||(P=Object(l.a)(["\n  position: relative;\n  display: inline-block;\n"]))),R=o.c.button(T||(T=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),q=o.c.div(F||(F=Object(l.a)(["\n  font-size: ",";\n  border: ",";\n"])),(function(e){var n=e.level;return 1===n?"4em":2===n?"4.5em":3===n?"4em":4===n?"3.5em":5===n?"3em":"2.5em"}),(function(e){return e.selected?"1px solid red":"none"}));function L(e){var n=e.level,t=e.item,r=e.removeElement,a=e.changeElementValue,c=Object(i.useRef)(null),l=Object(i.useState)(!1),o=Object(b.a)(l,2),d=o[0],u=o[1];var s="h".concat(n);return Object(v.jsxs)(M,{children:[Object(v.jsx)(q,{as:s,level:n,selected:d,ref:c,onKeyDown:function(e){"Enter"===e.code&&(e.preventDefault(),c.current&&c.current.blur())},onInput:function(e){},onBlur:function(e){c.current&&c.current.setAttribute("contenteditable","false"),u(!1),""===e.target.innerText?r(t.id):a(t.id,e.target.innerText)},onFocus:function(e){c.current&&c.current.setAttribute("contenteditable","true"),u(!0)},"data-id":t.id,tabIndex:-1,children:t.value}),d&&Object(v.jsx)(R,{onMouseDown:function(){r(t.id)},children:"X"})]})}L.displayName="Header";var V,B,z,A=L,X=o.c.div(V||(V=Object(l.a)(["\n  position: relative;\n  display: inline-block;\n"]))),K=o.c.button(B||(B=Object(l.a)(["\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),_=o.c.p(z||(z=Object(l.a)(["\n  font-size: 1.3em;\n  padding: 5px;\n  border: ",";\n"])),(function(e){return e.selected?"1px solid red":"none"}));function J(e){var n=e.item,t=e.removeElement,r=e.changeElementValue,a=Object(i.useState)(!1),c=Object(b.a)(a,2),l=c[0],o=c[1],d=Object(i.useRef)(null);return Object(v.jsxs)(X,{children:[Object(v.jsx)(_,{selected:l,onKeyDown:function(e){"Enter"===e.code&&(e.preventDefault(),d.current&&d.current.blur())},ref:d,onInput:function(e){},onBlur:function(e){d.current&&d.current.setAttribute("contenteditable","false"),o(!1),""===e.target.innerText?t(n.id):r(n.id,e.target.innerText)},onFocus:function(e){d.current&&d.current.setAttribute("contenteditable","true"),o(!0)},tabIndex:-1,"data-id":n.id,children:n.value}),l&&Object(v.jsx)(K,{onMouseDown:function(){t(n.id)},children:"X"})]})}J.displayName="Paragraph";var U,Q=J,G=o.c.img(U||(U=Object(l.a)(["\n  font-size: 1.3em;\n  border: ",";\n"])),(function(e){return e.selected?"1px solid red":"none"}));function W(e){var n=e.item,t=e.removeElement,r=Object(i.useState)(!1),a=Object(b.a)(r,2),c=a[0],l=a[1];return Object(v.jsx)(G,{selected:c,src:n.value,alt:n.value,onBlur:function(e){l(!1)},onKeyDown:function(e){"Backspace"===e.key&&t(n.id)},onFocus:function(e){l(!0)},tabIndex:-1,"data-id":n.id})}W.displayName="Image";var Y,Z,$,ee=W,ne=o.c.div(Y||(Y=Object(l.a)(["\n  position: relative;\n  display: inline-block;\n"]))),te=o.c.button(Z||(Z=Object(l.a)(["\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),ie=o.c.ul($||($=Object(l.a)(["\n  white-space: pre-wrap;\n  font-size: 1.3em;\n  padding-left: 1em; // fix lists' left padding\n  border: ",";\n"])),(function(e){return e.selected?"1px solid red":"none"}));function re(e){var n=e.item,t=e.removeElement,r=e.changeElementValue,a=Object(i.useState)(!1),c=Object(b.a)(a,2),l=c[0],o=c[1],d=Object(i.useRef)(null);return Object(v.jsxs)(ne,{children:[Object(v.jsx)(ie,{selected:l,ref:d,onInput:function(e){},onBlur:function(e){d.current&&d.current.setAttribute("contenteditable","false"),o(!1),""===e.target.innerText?t(n.id):(console.log(2,e.target.innerText),r(n.id,e.target.innerText))},onFocus:function(){d.current&&d.current.setAttribute("contenteditable","true"),o(!0)},tabIndex:-1,"data-id":n.id,dangerouslySetInnerHTML:{__html:n.value.split("\n").map((function(e){return"<li>".concat(function(e){var n=document.createElement("div");return n.innerText=e,n.innerHTML}(e),"</li>")})).join("")}}),l&&Object(v.jsx)(te,{onMouseDown:function(){t(n.id)},children:"X"})]})}re.displayName="List";var ae,ce,le,oe=re,de=o.c.div(ae||(ae=Object(l.a)(["\n  position: relative;\n  display: inline-block;\n"]))),ue=o.c.button(ce||(ce=Object(l.a)(["\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),se=o.c.blockquote(le||(le=Object(l.a)(["\n  font-size: 1.3em;\n  padding: 50px;\n  border: ",';\n  quotes: "\u201c" "\u201d" "\u2018" "\u2019";\n\n  background: #f9f9f9;\n\n  &:before {\n    color: #ccc;\n    content: open-quote;\n    font-size: 4em;\n    line-height: 0.1em;\n    margin-right: 0.25em;\n    vertical-align: -0.4em;\n  }\n\n  p {\n    display: inline;\n  }\n'])),(function(e){return e.selected?"1px solid red":"none"}));function me(e){var n=e.item,t=e.removeElement,r=e.changeElementValue,a=Object(i.useState)(!1),c=Object(b.a)(a,2),l=c[0],o=c[1],d=Object(i.useRef)(null);return Object(v.jsxs)(de,{children:[Object(v.jsx)(se,{selected:l,onKeyDown:function(e){"Enter"===e.code&&(e.preventDefault(),d.current&&d.current.blur())},ref:d,onInput:function(e){},onBlur:function(e){d.current&&d.current.setAttribute("contenteditable","false"),o(!1),""===e.target.innerText?t(n.id):r(n.id,e.target.innerText)},onFocus:function(e){d.current&&d.current.setAttribute("contenteditable","true"),o(!0)},tabIndex:-1,"data-id":n.id,children:Object(v.jsx)("p",{children:n.value})}),l&&Object(v.jsx)(ue,{onMouseDown:function(){t(n.id)},children:"X"})]})}me.displayName="Blockquote";var he,fe,be,ge,pe=me,je="#424242",xe="#737373",ve="#4285f4",Oe=o.c.div(he||(he=Object(l.a)(["\n  height: 100%;\n  background-color: ",";\n  color: white;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  padding: 2em;\n"])),ve);var ye,we=o.c.div(fe||(fe=Object(l.a)(["\n  height: 100%;\n  background-color: ",";\n  color: white;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])),ve),ke=o.c.div(be||(be=Object(l.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n  padding: 1.5em;\n"]))),Se=o.c.div(ge||(ge=Object(l.a)(["\n  padding: 1.5em;\n"])));var Ee,Ne,Ce,He=o.c.div(ye||(ye=Object(l.a)(["\n  height: 100%;\n  background-color: ",";\n  color: white;\n  padding: 1.5em;\n"])),ve);var Ie,Pe=o.c.div(Ee||(Ee=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Te=o.c.div(Ne||(Ne=Object(l.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n\n  padding: 1.5em;\n  background-color: ",";\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: white;\n  }\n"])),ve),Fe=o.c.div(Ce||(Ce=Object(l.a)(["\n  flex: 2;\n  padding: 1.5em;\n\n  p {\n    color: ",";\n  }\n"])),xe);var De,Me,Re,qe=o.c.div(Ie||(Ie=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  color: ",";\n"])),xe);var Le,Ve=o.c.div(De||(De=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Be=o.c.div(Me||(Me=Object(l.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n  padding: 1.5em;\n  background-color: ",";\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: white;\n  }\n"])),ve),ze=o.c.div(Re||(Re=Object(l.a)(["\n  flex: 2;\n  padding: 1.5em;\n  p {\n    color: ",";\n    padding-bottom: 0.5em;\n  }\n"])),xe);var Ae,Xe,Ke,_e,Je=o.c.div(Le||(Le=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  .top {\n    background-color: ",";\n    flex: 1;\n    display: flex;\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5 {\n      display: flex;\n      align-items: flex-end;\n      color: white;\n    }\n  }\n  .bottom {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    flex: 2;\n\n    pre {\n      display: block;\n      width: 100%;\n      height: 100%;\n\n      code {\n        height: 100%;\n      }\n    }\n  }\n"])),ve);var Ue,Qe,Ge,We,Ye=o.c.div(Ae||(Ae=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]))),Ze=o.c.div(Xe||(Xe=Object(l.a)(["\n  padding: 1em;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: ",";\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    flex: 1;\n  }\n\n  .paragraphs {\n    flex: 2;\n\n    p {\n    }\n  }\n"])),ve),$e=o.c.div(Ke||(Ke=Object(l.a)(["\n  flex: 2;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 1.5em;\n"]))),en=o.c.div(_e||(_e=Object(l.a)(["\n  flex: 1 1 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  height: 100%;\n\n  img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: auto;\n    height: auto;\n    max-width: 100%;\n    max-height: 100%;\n  }\n"])));var nn,tn,rn=o.c.div(Ue||(Ue=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]))),an=o.c.div(Qe||(Qe=Object(l.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1em;\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    flex: 1;\n    color: ",";\n  }\n\n  p {\n    color: ",";\n    flex: 1;\n  }\n"])),je,xe),cn=o.c.div(Ge||(Ge=Object(l.a)(["\n  flex: 2;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 1.5em;\n"]))),ln=o.c.div(We||(We=Object(l.a)(["\n  flex: 1 1 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  height: 100%;\n\n  img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: auto;\n    height: auto;\n    max-width: 100%;\n    max-height: 100%;\n  }\n"])));var on,dn=o.c.div(nn||(nn=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 1.5em;\n"]))),un=o.c.div(tn||(tn=Object(l.a)(["\n  flex: 1 1 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: auto;\n    height: auto;\n    max-width: 100%;\n    max-height: 100%;\n  }\n"])));var sn,mn,hn,fn,bn=o.c.div(on||(on=Object(l.a)(["\n  height: 100%;\n  background-color: ",";\n  color: white;\n  padding: 1.5em;\n\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  .image {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    padding: 0.5em;\n\n    img {\n      max-width: 100%;\n      height: auto;\n    }\n  }\n"])),ve);var gn,pn,jn,xn=o.c.div(sn||(sn=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),vn=o.c.div(mn||(mn=Object(l.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n  padding: 1.5em;\n  background-color: ",";\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: white;\n  }\n"])),ve),On=o.c.div(hn||(hn=Object(l.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex: 2;\n  padding: 1.5em;\n"]))),yn=o.c.div(fn||(fn=Object(l.a)(["\n  flex: 1 1 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  height: 100%;\n\n  img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: auto;\n    height: auto;\n    max-width: 100%;\n    max-height: 100%;\n  }\n"])));var wn=o.c.div(gn||(gn=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),kn=o.c.div(pn||(pn=Object(l.a)(["\n  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3);\n  padding: 1.5em;\n  background-color: ",";\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: white;\n  }\n"])),ve),Sn=o.c.div(jn||(jn=Object(l.a)(["\n  flex: 2;\n  padding: 1.5em;\n  font-size: 1.1em;\n\n  line-height: 2em;\n  color: ",";\n\n  ul,\n  li {\n    color: ",";\n    list-style-type: circle;\n\n    li {\n    }\n  }\n"])),xe,xe);var En,Nn,Cn,Hn={singleHeader:function(e){var n=e.children;return n.find((function(e){return"Header"===e.type.displayName}))?Object(v.jsx)(Oe,{children:Object(v.jsx)("div",{className:"container",children:n})}):Object(v.jsx)(v.Fragment,{})},twoHeaders:function(e){var n=e.children.filter((function(e){return"Header"===e.type.displayName})),t=Object(b.a)(n,2),i=t[0],r=t[1];return i?Object(v.jsxs)(we,{children:[Object(v.jsx)(ke,{children:i}),Object(v.jsx)(Se,{children:r})]}):Object(v.jsx)(v.Fragment,{})},normal:function(e){var n=e.children;return Object(v.jsx)(He,{children:n})},headerSingleParagraph:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Paragraph"===e.type.displayName}));return t?Object(v.jsxs)(Pe,{children:[Object(v.jsx)(Te,{children:t}),Object(v.jsx)(Fe,{children:i})]}):Object(v.jsx)(v.Fragment,{})},headerCodeblock:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Paragraph"===e.type.displayName}));return t?Object(v.jsxs)(Je,{children:[Object(v.jsx)("div",{className:"top",children:t}),Object(v.jsx)("div",{className:"bottom",children:i})]}):Object(v.jsx)(v.Fragment,{})},headerManyParagraphsImage:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Image"===e.type.displayName})),r=n.filter((function(e){return"Paragraph"===e.type.displayName}));return t?Object(v.jsxs)(Ye,{children:[Object(v.jsxs)(Ze,{children:[t,Object(v.jsx)("div",{className:"paragraphs",children:r})]}),Object(v.jsx)($e,{children:Object(v.jsx)(en,{children:i})})]}):Object(v.jsx)(v.Fragment,{})},headerParagraphImage:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Image"===e.type.displayName})),r=n.find((function(e){return"Paragraph"===e.type.displayName}));return t?Object(v.jsxs)(rn,{children:[Object(v.jsxs)(an,{children:[t,r]}),Object(v.jsx)(cn,{children:Object(v.jsx)(ln,{children:i})})]}):Object(v.jsx)(v.Fragment,{})},image:function(e){var n=e.children.find((function(e){return"Image"===e.type.displayName}));return n?Object(v.jsx)(dn,{children:Object(v.jsx)(un,{children:n})}):Object(v.jsx)(v.Fragment,{})},manyImages:function(e){var n=e.children,t=n.length>=2&&n.length<=4?"50%":n.length>=5&&n.length<=7?"33.3%":n.length>7?"25%":0;return Object(v.jsx)(bn,{children:n.map((function(e,n){return Object(v.jsx)("div",{className:"image",style:{flex:"".concat(t)},children:e},n)}))})},headerImage:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"Image"===e.type.displayName}));return t?Object(v.jsxs)(xn,{children:[Object(v.jsx)(vn,{children:t}),Object(v.jsx)(On,{children:Object(v.jsx)(yn,{children:i})})]}):Object(v.jsx)(v.Fragment,{})},headerList:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.find((function(e){return"List"===e.type.displayName}));return t?Object(v.jsxs)(wn,{children:[Object(v.jsx)(kn,{children:t}),Object(v.jsx)(Sn,{children:i})]}):Object(v.jsx)(v.Fragment,{})},blockquote:function(e){var n=e.children.find((function(e){return"Blockquote"===e.type.displayName}));return n?Object(v.jsx)(qe,{children:n}):Object(v.jsx)(v.Fragment,{})},headerManyParagraphs:function(e){var n=e.children,t=n.find((function(e){return"Header"===e.type.displayName})),i=n.filter((function(e){return"Paragraph"===e.type.displayName}));return t?Object(v.jsxs)(Ve,{children:[Object(v.jsx)(Be,{children:t}),Object(v.jsx)(ze,{children:i})]}):Object(v.jsx)(v.Fragment,{})}},In=o.c.div(En||(En=Object(l.a)(["\n  width: 80vw;\n"]))),Pn=o.c.div(Nn||(Nn=Object(l.a)(["\n  width: 100%;\n  padding-bottom: 56.25%; /* 16:9 */\n  position: relative;\n"]))),Tn=o.c.div(Cn||(Cn=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  background: white;\n\n  a {\n    color: #51c2f7;\n  }\n\n  :root {\n    // taken from https://websemantics.uk/tools/responsive-font-calculator/\n    font-size: calc(1rem + ((1vw - 0.48rem) * 0.6944));\n    padding: calc(1rem + ((1vw - 0.48rem) * 0.6944));\n    min-height: 0vw;\n  }\n"])));function Fn(e,n){var t=Object(i.useContext)(x),r=t.getCurrentSlide,a=t.getElementsForSlide,c=t.removeElement,l=t.changeElementValue,o=Hn[r().state];return Object(v.jsx)(In,{children:Object(v.jsx)(Pn,{children:Object(v.jsx)(Tn,{className:r().state,ref:n,children:Object(v.jsx)(o,{children:a(r().number).map((function(e){switch(e.type){case"heading":return Object(v.jsx)(A,{removeElement:c,changeElementValue:l,level:e.level,item:e},e.id);case"paragraph":return Object(v.jsx)(Q,{item:e,removeElement:c,changeElementValue:l},e.id);case"image":return Object(v.jsx)(ee,{item:e,removeElement:c},e.id);case"list":return Object(v.jsx)(oe,{item:e,removeElement:c,changeElementValue:l},e.id);case"blockquote":return Object(v.jsx)(pe,{item:e,removeElement:c,changeElementValue:l},e.id);default:return Object(v.jsx)(v.Fragment,{})}}))})})})})}var Dn,Mn,Rn,qn,Ln,Vn=Object(i.forwardRef)(Fn),Bn=Object(o.a)(Dn||(Dn=Object(l.a)(["\n  ",'\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html,\n  body {\n    height: 100%;\n  }\n\n  body {\n    font-family: "Roboto", sans-serif;\n  }\n'])),d.a),zn=o.c.div(Mn||(Mn=Object(l.a)([""]))),An=o.c.div(Rn||(Rn=Object(l.a)(["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n"]))),Xn=o.c.div(qn||(qn=Object(l.a)([""]))),Kn=o.c.div(Ln||(Ln=Object(l.a)(["\n  background: #eee;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"])));var _n=function(){var e=function(){var e=Object(i.useRef)(null),n=Object(i.useState)(0),t=Object(b.a)(n,2),r=t[0],a=t[1],c=Object(i.useState)([""]),l=Object(b.a)(c,2),o=l[0],d=l[1],m=Object(i.useState)([]),g=Object(b.a)(m,2),x=g[0],v=g[1],O=Object(i.useState)(["normal"]),y=Object(b.a)(O,2),w=y[0],k=y[1];function S(){return(S=Object(f.a)(h.a.mark((function e(n){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v([].concat(Object(s.a)(x),[n])),j[w[n.slide]]?(t=j[w[n.slide]].add(n.type))&&k(w.map((function(e,i){return i===n.slide?t:e}))):k(w.map((function(e,t){return t===n.slide?"normal":e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){function n(){return(n=Object(f.a)(h.a.mark((function n(){var t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.current){n.next=5;break}return n.next=3,p()(e.current);case 3:t=n.sent,d(o.map((function(e,n){return n===r?t.toDataURL():e})));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[r,x]),{getNumbersOfSlide:function(){return w.length},getThumbnails:function(){return o},getCurrentSlide:function(){return{number:r,state:w[r]}},ref:e,addElement:function(e){return S.apply(this,arguments)},removeElement:function(e){var n=x.find((function(n){return n.id===e}));if(n)if(v(Object(s.a)(x.filter((function(n){return n.id!==e})))),j[w[n.slide]]){var t=j[w[n.slide]].remove(n&&n.type);t&&k(w.map((function(e,i){return i===n.slide?t:e})))}else k(w.map((function(e,t){return t===n.slide?"normal":e})))},changeElementValue:function(e,n){v(x.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{value:n}):t})))},changeCurrentSlide:function(e){a(e)},getElementsForSlide:function(e){return x.filter((function(n){return n.slide===e}))},addSlide:function(){k([].concat(Object(s.a)(w),["normal"])),a(r+1),d([].concat(Object(s.a)(o),[""]))},removeSlide:function(e){v(Object(s.a)(x.filter((function(n){return n.slide!==e})).map((function(n){return n.slide>e?Object(u.a)(Object(u.a)({},n),{},{slide:n.slide-1}):n})))),k(Object(s.a)(w.filter((function(n,t){return t!==e})))),a(r===o.length-1?r-1:r),d(o.filter((function(e,n){return n!==r})))}}}(),n=e.ref,t=e.getCurrentSlide,r=e.addElement,a=e.changeCurrentSlide,c=e.removeSlide,l=e.removeElement,o=e.changeElementValue,d=e.getElementsForSlide,m=e.addSlide,g=e.getThumbnails,O=e.getNumbersOfSlide;return Object(v.jsxs)(x.Provider,{value:{getNumbersOfSlide:O,getCurrentSlide:t,getThumbnails:g,addElement:r,removeElement:l,changeElementValue:o,removeSlide:c,addSlide:m,getElementsForSlide:d,changeCurrentSlide:a},children:[Object(v.jsx)(Bn,{}),Object(v.jsxs)(Kn,{children:[Object(v.jsx)(Xn,{children:Object(v.jsx)(S,{})}),Object(v.jsx)(An,{children:Object(v.jsx)(Vn,{ref:n})}),Object(v.jsx)(zn,{children:Object(v.jsx)(D,{})})]})]})},Jn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),a(e),c(e)}))};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(_n,{})}),document.getElementById("root")),Jn()}},[[29,1,2]]]);
//# sourceMappingURL=main.bfb1e4a1.chunk.js.map