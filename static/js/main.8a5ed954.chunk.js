(this["webpackJsonpmy-second-project"]=this["webpackJsonpmy-second-project"]||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/error.2b92258f.jpg"},24:function(e,t,n){e.exports=n(41)},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),c=n.n(l),s=n(3),u=n(4),o=n(8),i=n(9),m=n(43),f=n(44),h=n(45),d=n(12),p=n(13);function v(){var e=Object(d.a)(["\n    display: flex;\n    margin: 0;\n    align-items: center;\n    color: #fff;\n    list-style-type: none;\n    li {\n        margin-right: 20px;\n        font-size: 18px;\n    }\n"]);return v=function(){return e},e}function E(){var e=Object(d.a)(["\n    font-size: 24px;\n    color: #fff;\n    margin: 0;\n"]);return E=function(){return e},e}function g(){var e=Object(d.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n"]);return g=function(){return e},e}var b=p.a.div(g()),y=p.a.h3(E()),k=p.a.ul(v()),j=function(){return r.a.createElement(b,null,r.a.createElement(y,null,r.a.createElement("a",{href:"#"},"Game of Thrones DB")),r.a.createElement(k,null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Characters")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Houses")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Books"))))},C=(n(31),n(10)),w=n.n(C),O=n(14),x=function(){function e(){Object(s.a)(this,e),this._apiBase="https://www.anapioficeandfire.com/api/"}return Object(u.a)(e,[{key:"getResourse",value:function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t)+", received ".concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllCharacters",value:function(){var e=Object(O.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResourse("/characters?page=5&pageSize=10");case 2:return t=e.sent,e.abrupt("return",t.map(this._transformCharacter));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCharacter",value:function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResourse("/characters/".concat(t));case 2:return n=e.sent,e.abrupt("return",this._transformCharacter(n));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllHouses",value:function(){return this.getResourse("/houses/")}},{key:"getHouse",value:function(e){return this.getResourse("/characters/".concat(e))}},{key:"getAllBooks",value:function(){return this.getResourse("/books/")}},{key:"getBook",value:function(e){return this.getResourse("/books/".concat(e))}},{key:"_transformCharacter",value:function(e){return{name:e.name,gender:e.gender,born:e.born,died:e.died,culture:e.culture}}},{key:"_transformHouse",value:function(e){return{name:e.name,region:e.region,words:e.words,titles:e.titles,overload:e.overload,ancestralWeapons:e.ancestralWeapons}}},{key:"_transformBook",value:function(e){return{name:e.name,numberOfPages:e.numberOfPages,publisher:e.publisher,released:e.released}}}]),e}(),N=(n(33),function(){return r.a.createElement("div",{className:"loadingio-spinner-bean-eater-gfsba5zc3w6"},r.a.createElement("div",{class:"ldio-lexdw46yiy"},r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))))}),S=(n(34),n(22)),I=n.n(S),B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:I.a,alt:"error"}),r.a.createElement("span",null,"Something goes wrong!"))},R=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).gotService=new x,e.state={char:{},loading:!0},e.onCharLoaded=function(t){e.setState({char:t,loading:!1,error:!1})},e.updateChar=function(){var t=Math.floor(140*Math.random()+25);e.gotService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e.onError=function(t){e.setState({error:!0,loading:!1})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.updateChar(),this.timerId=setInterval(this.updateChar,1500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.char,n=e.loading,a=e.error,l=a?r.a.createElement(B,null):null,c=n?r.a.createElement(N,null):null,s=n||a?null:r.a.createElement(A,{char:t});return r.a.createElement("div",{className:"random-block rounded"},l,c,s)}}]),n}(a.Component),A=function(e){var t=e.char,n=t.name,a=t.gender,l=t.born,c=t.died,s=t.culture;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Random Character: ",n),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Gender "),r.a.createElement("span",null,a)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Born "),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Died "),r.a.createElement("span",null,c)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Culture "),r.a.createElement("span",null,s))))},D=R,_=(n(35),n(42)),z=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).gotService=new x,e.state={charList:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.gotService.getAllCharacters().then((function(t){return e.setState({charList:t})}))}},{key:"renderItems",value:function(e){var t=this;return e.map((function(e,n){return r.a.createElement("li",{key:n,className:"list-group-item",onClick:function(){return t.props.onCharSelected(41+n)}},e.name)}))}},{key:"render",value:function(){var e=this.state.charList;if(!e)return r.a.createElement(_.a,null);var t=this.renderItems(e);return r.a.createElement("ul",{className:"item-list list-group"},t)}}]),n}(a.Component),L=(n(38),function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).gotService=new x,e.state={char:null},e.updateChar=function(){var t=e.props.charId;t&&(e.gotService.getCharacter(t).then((function(t){e.setState({char:t})})),e.foo.bar=0)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){if(!this.state.char)return r.a.createElement("span",{className:"select-error"},"Please select a character");var e=this.state.char,t=e.name,n=e.gender,a=e.born,l=e.died,c=e.culture;return r.a.createElement("div",{className:"char-details rounded"},r.a.createElement("h4",null,t),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Gender"),r.a.createElement("span",null,n)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Born"),r.a.createElement("span",null,a)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Died"),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Culture"),r.a.createElement("span",null,c))))}}]),n}(a.Component)),M=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onCharSelected=function(e){a.setState({selectedChar:e})},a.onRandomChar=function(){a.state.clicked?a.setState({clicked:!1}):a.setState({clicked:!0})},a.state={clicked:!1,selectedChar:null},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(j,null)),r.a.createElement(m.a,null,this.state.clicked?r.a.createElement(f.a,null,r.a.createElement(h.a,{lg:{size:5,offset:0}},r.a.createElement(D,null))):null,r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.onRandomChar()}},"Toggle")),r.a.createElement(f.a,null,r.a.createElement(h.a,{md:"6"},r.a.createElement(z,{onCharSelected:this.onCharSelected})),r.a.createElement(h.a,{md:"6"},r.a.createElement(L,{charId:this.state.selectedChar})))))}}]),n}(r.a.Component);n(39),n(40);c.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8a5ed954.chunk.js.map