(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Ls3e:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=u("QNcV"),c=u("TVUz"),i=function(){function n(n,l){this.authService=n,this.dataService=l,this.isAuthenticated=!1,this.isLoading=!1}return n.prototype.ngOnInit=function(){var n=this;this.isAuthenticated=this.authService.getAuth(),this.authSubs=this.authService.getAuthListener().subscribe(function(l){n.isAuthenticated=l}),this.isLoading=!0,this.dataService.getAccounts().subscribe(function(l){l&&(n.accounts=l,n.totalBalace=l.reduce(function(n,l){return n+l.balance},0).toFixed(2),n.isLoading=!1)})},n.prototype.ngOnDestroy=function(){this.authSubs.unsubscribe()},n}(),a=u("mrSG"),e=u("ZKU/"),b=function(){function n(n,l,u,t){this.authService=n,this.dataService=l,this.route=u,this.router=t,this.isAuthenticated=!1,this.isLoading=!1}return n.prototype.ngOnInit=function(){var n=this;this.account=new e.a,this.isAuthenticated=this.authService.getAuth(),this.authSubs=this.authService.getAuthListener().subscribe(function(l){n.isAuthenticated=l}),this.accountId=this.route.snapshot.params.id,this.accountId&&this.getAccountDetails(),this.route.params.subscribe(function(l){n.accountId=l.id,n.accountId&&n.getAccountDetails()}),this.backRef=this.route.snapshot.queryParams.ref||"accounts",this.route.queryParams.subscribe(function(l){n.backRef="/cards/"+l.ref})},n.prototype.ngOnDestroy=function(){this.authSubs.unsubscribe(),this.accountId=null},n.prototype.getAccountDetails=function(){var n=this;this.isLoading=!0,this.dataService.getAccountDetails(this.accountId).subscribe(function(l){if(l){var u=l.startDate,t=a.i(l,["startDate"]),o=new Date(u);n.account=a.a({startDate:o.getDate()+" / "+(o.getMonth()+1)+" / "+o.getFullYear()},t),n.isLoading=!1}})},n.prototype.viewCard=function(n){return a.b(this,void 0,void 0,function(){return a.e(this,function(l){switch(l.label){case 0:return[4,this.router.navigate(["cards",n],{queryParams:{ref:""+this.accountId}})];case 1:return l.sent(),[2]}})})},n}(),r=function(){return function(){}}(),s=u("pMnS"),p=u("oBZk"),h=u("ZZ/e"),d=u("ZYCi"),f=u("Ip0R"),g=u("QoAl"),m=u("320Y"),k=t.nb({encapsulation:0,styles:[[".content[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.summary[_ngcontent-%COMP%]{padding:0}"]],data:{}});function v(n){return t.Db(0,[(n()(),t.pb(0,0,null,null,1,"ion-spinner",[["class","spinner"],["name","bubbles"]],null,null,null,p.Q,p.s)),t.ob(1,49152,null,0,h.qb,[t.h,t.k],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"bubbles")},null)}function w(n){return t.Db(0,[(n()(),t.pb(0,0,null,null,7,"ion-toolbar",[],null,null,null,p.V,p.x)),t.ob(1,49152,null,0,h.Ab,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,5,"ion-title",[["class","summary"]],null,null,null,p.U,p.w)),t.ob(3,49152,null,0,h.yb,[t.h,t.k],null,null),(n()(),t.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),t.Cb(5,null,[" "," "," "])),(n()(),t.pb(6,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),t.Cb(7,null,[" Total: "," EGP "]))],null,function(n,l){var u=l.component;n(l,5,0,u.accounts.length,1==u.accounts.length?"Account":"Accounts"),n(l,7,0,u.totalBalace)})}function A(n){return t.Db(0,[(n()(),t.pb(0,0,null,null,19,"ion-card",[],null,null,null,p.F,p.e)),t.ob(1,49152,null,0,h.l,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,4,"ion-card-header",[],null,null,null,p.D,p.g)),t.ob(3,49152,null,0,h.n,[t.h,t.k],null,null),(n()(),t.pb(4,0,null,0,2,"ion-card-subtitle",[],null,null,null,p.E,p.h)),t.ob(5,49152,null,0,h.o,[t.h,t.k],null,null),(n()(),t.Cb(6,0,[" "," "])),(n()(),t.pb(7,0,null,0,12,"ion-card-content",[["class","content"]],null,null,null,p.C,p.f)),t.ob(8,49152,null,0,h.m,[t.h,t.k],null,null),(n()(),t.pb(9,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),t.Cb(10,null,[" "," EGP "])),(n()(),t.pb(11,0,null,0,8,"span",[],null,null,null,null,null)),(n()(),t.pb(12,0,null,null,7,"ion-buttons",[["slot","end"]],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.yb(n,14).onClick()&&o),"click"===l&&(o=!1!==t.yb(n,15).onClick(u)&&o),o},p.B,p.d)),t.ob(13,49152,null,0,h.k,[t.h,t.k],null,null),t.ob(14,16384,null,0,d.n,[d.m,d.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.ob(15,737280,null,0,h.Ib,[f.g,h.Fb,t.k,d.m,[2,d.n]],null,null),(n()(),t.pb(16,0,null,0,3,"ion-button",[],null,null,null,p.A,p.c)),t.ob(17,49152,null,0,h.j,[t.h,t.k],null,null),(n()(),t.pb(18,0,null,0,1,"ion-icon",[["name","arrow-round-forward"]],null,null,null,p.L,p.n)),t.ob(19,49152,null,0,h.B,[t.h,t.k],{name:[0,"name"]},null)],function(n,l){n(l,14,0,"/accounts/"+l.context.$implicit.id),n(l,15,0),n(l,19,0,"arrow-round-forward")},function(n,l){n(l,6,0,l.context.$implicit.plan),n(l,10,0,l.context.$implicit.balance)})}function C(n){return t.Db(0,[(n()(),t.pb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,w)),t.ob(2,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,A)),t.ob(4,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var u=l.component;n(l,2,0,u.accounts&&u.accounts.length),n(l,4,0,u.accounts)},null)}function I(n){return t.Db(0,[(n()(),t.pb(0,0,null,null,3,"ion-header",[],null,null,null,p.K,p.m)),t.ob(1,49152,null,0,h.A,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,1,"app-header",[],null,null,null,g.b,g.a)),t.ob(3,114688,null,0,m.a,[o.a],{title:[0,"title"]},null),(n()(),t.pb(4,0,null,null,5,"ion-content",[["padding",""]],null,null,null,p.I,p.k)),t.ob(5,49152,null,0,h.t,[t.h,t.k],null,null),(n()(),t.gb(16777216,null,0,1,null,v)),t.ob(7,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,0,1,null,C)),t.ob(9,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,3,0,"Accounts"),n(l,7,0,u.isLoading),n(l,9,0,!u.isLoading&&u.isAuthenticated)},null)}function D(n){return t.Db(0,[(n()(),t.pb(0,0,null,null,1,"app-accounts",[],null,null,null,I,k)),t.ob(1,245760,null,0,i,[o.a,c.a],null,null)],function(n,l){n(l,1,0)},null)}var y=t.lb("app-accounts",i,D,{},{},[]),L=t.nb({encapsulation:0,styles:[[".account[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%]{text-transform:uppercase}.account[_ngcontent-%COMP%]   .branch[_ngcontent-%COMP%]{text-transform:capitalize}"]],data:{}});function O(n){return t.Db(0,[(n()(),t.pb(0,0,null,null,1,"ion-spinner",[["class","spinner"],["name","bubbles"]],null,null,null,p.Q,p.s)),t.ob(1,49152,null,0,h.qb,[t.h,t.k],{name:[0,"name"]},null)],function(n,l){n(l,1,0,"bubbles")},null)}function S(n){return t.Db(0,[(n()(),t.pb(0,0,null,null,6,"ion-item",[],null,null,null,p.N,p.p)),t.ob(1,49152,null,0,h.G,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,4,"ion-buttons",[],null,null,null,p.B,p.d)),t.ob(3,49152,null,0,h.k,[t.h,t.k],null,null),(n()(),t.pb(4,0,null,0,2,"ion-button",[["color","primary"]],null,[[null,"click"]],function(n,l,u){var t=!0,o=n.component;return"click"===l&&(t=!1!==o.viewCard(o.account.card)&&t),t},p.A,p.c)),t.ob(5,49152,null,0,h.j,[t.h,t.k],{color:[0,"color"]},null),(n()(),t.Cb(-1,0,["View Attached Card"]))],function(n,l){n(l,5,0,"primary")},null)}function P(n){return t.Db(0,[(n()(),t.pb(0,0,null,null,17,"div",[["class","account"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,2,"ion-item",[],null,null,null,p.N,p.p)),t.ob(2,49152,null,0,h.G,[t.h,t.k],null,null),(n()(),t.Cb(3,0,[" Account Id: "," "])),(n()(),t.pb(4,0,null,null,2,"ion-item",[["class","plan"]],null,null,null,p.N,p.p)),t.ob(5,49152,null,0,h.G,[t.h,t.k],null,null),(n()(),t.Cb(6,0,[" "," "])),(n()(),t.pb(7,0,null,null,2,"ion-item",[["class","branch"]],null,null,null,p.N,p.p)),t.ob(8,49152,null,0,h.G,[t.h,t.k],null,null),(n()(),t.Cb(9,0,[" Branch: "," "])),(n()(),t.pb(10,0,null,null,2,"ion-item",[],null,null,null,p.N,p.p)),t.ob(11,49152,null,0,h.G,[t.h,t.k],null,null),(n()(),t.Cb(12,0,[" Created At: "," "])),(n()(),t.pb(13,0,null,null,2,"ion-item",[],null,null,null,p.N,p.p)),t.ob(14,49152,null,0,h.G,[t.h,t.k],null,null),(n()(),t.Cb(15,0,[" Current Balance: "," "])),(n()(),t.gb(16777216,null,null,1,null,S)),t.ob(17,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,17,0,l.component.account.card)},function(n,l){var u=l.component;n(l,3,0,u.accountId),n(l,6,0,u.account.plan),n(l,9,0,u.account.branch),n(l,12,0,u.account.startDate),n(l,15,0,u.account.balance)})}function G(n){return t.Db(0,[(n()(),t.pb(0,0,null,null,3,"ion-header",[],null,null,null,p.K,p.m)),t.ob(1,49152,null,0,h.A,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,1,"app-header",[],null,null,null,g.b,g.a)),t.ob(3,114688,null,0,m.a,[o.a],{title:[0,"title"],baseHref:[1,"baseHref"]},null),(n()(),t.pb(4,0,null,null,5,"ion-content",[["padding",""]],null,null,null,p.I,p.k)),t.ob(5,49152,null,0,h.t,[t.h,t.k],null,null),(n()(),t.gb(16777216,null,0,1,null,O)),t.ob(7,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,0,1,null,P)),t.ob(9,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,3,0,"Accounts",u.backRef),n(l,7,0,u.isLoading),n(l,9,0,!u.isLoading&&u.isAuthenticated&&u.account)},null)}function N(n){return t.Db(0,[(n()(),t.pb(0,0,null,null,1,"app-account-details",[],null,null,null,G,L)),t.ob(1,245760,null,0,b,[o.a,c.a,d.a,d.m],null,null)],function(n,l){n(l,1,0)},null)}var x=t.lb("app-account-details",b,N,{},{},[]),M=u("gIcY"),j=u("t/Na"),q=u("bJgF"),B=u("PCNd");u.d(l,"AccountsPageModuleNgFactory",function(){return F});var F=t.mb(r,[],function(n){return t.vb([t.wb(512,t.j,t.bb,[[8,[s.a,y,x]],[3,t.j],t.x]),t.wb(4608,f.k,f.j,[t.u,[2,f.q]]),t.wb(4608,M.t,M.t,[]),t.wb(4608,h.a,h.a,[t.z,t.g]),t.wb(4608,h.Eb,h.Eb,[h.a,t.j,t.q,f.c]),t.wb(4608,h.Hb,h.Hb,[h.a,t.j,t.q,f.c]),t.wb(5120,j.a,function(n){return[new q.a(n)]},[o.a]),t.wb(1073742336,f.b,f.b,[]),t.wb(1073742336,M.r,M.r,[]),t.wb(1073742336,M.g,M.g,[]),t.wb(1073742336,h.Cb,h.Cb,[]),t.wb(1073742336,B.a,B.a,[]),t.wb(1073742336,d.o,d.o,[[2,d.u],[2,d.m]]),t.wb(1073742336,r,r,[]),t.wb(1024,d.k,function(){return[[{path:"",component:i},{path:":id",component:b}]]},[])])})}}]);