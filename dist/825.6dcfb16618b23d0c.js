"use strict";(self.webpackChunkfree_version=self.webpackChunkfree_version||[]).push([[825],{1825:(D,g,a)=>{a.r(g),a.d(g,{default:()=>U});var d=a(6895),T=a(2876),_=a(433),p=a(5609),f=a(3189),e=a(1571),Z=a(7556),P=a(4295),h=a(9569),v=a(4631);function C(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",10)(1,"strong"),e._uU(2,"Validation du paiement r\xe9ussie!"),e.qZA(),e.TgZ(3,"button",11),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.removeMessage)}),e.qZA()()}}function E(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,o=e.oxw();return e.KtG(o.onclick(s.Car._id,s._id))}),e._uU(1," Valider "),e.qZA()}}function A(i,r){1&i&&(e.TgZ(0,"span",16),e._uU(1,"Payement valid\xe9 et r\xe9ussie"),e.qZA())}function M(i,r){if(1&i&&(e.TgZ(0,"tr")(1,"td"),e._UZ(2,"img",12),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e.YNc(12,E,2,0,"button",13),e.YNc(13,A,2,0,"span",14),e.qZA()()),2&i){const t=r.$implicit;e.xp6(2),e.s9C("src",t.Car.image,e.LSH),e.xp6(2),e.Oqu(t.Car.marque+" "+t.Car.type),e.xp6(2),e.Oqu(t.Car.immatriculation),e.xp6(2),e.hij(" ",t.Piece.piece_name," "),e.xp6(2),e.hij(" $",t.Piece.prix*t.quantite+t.Piece.main_oeuvre," "),e.xp6(2),e.Q6J("ngIf","1"==t.Car.etat),e.xp6(1),e.Q6J("ngIf","2"==t.Car.etat)}}function O(i,r){1&i&&(e.TgZ(0,"div",17)(1,"h3"),e._uU(2," Loading... "),e.qZA()())}const L=function(){return{backdropBorderRadius:"3px"}};let U=(()=>{class i{constructor(t,n,s,o){this.authService=t,this.receptionService=n,this.router=s,this.route=o,this.loading=!1,this.message=!1,this.id_user=sessionStorage.getItem("id"),this.authService.isFinancier()}ngOnInit(){this.getAllPaiement()}getAllPaiement(){this.loading=!0,this.receptionService.getAllpaiementFinancier().subscribe(s=>{this.loading=!1,this.detail=s.paie,this.rep=s.reparation,console.log(this.rep)},s=>{this.loading=!1,this.message=s.message})}calculateDiff(t){const n=[" jours"," heures"," minutes"];var s=new Date(t),o=new Date,l="",c=Math.floor((o-s)/864e5),u=Math.floor(Math.abs(s-o)/36e5),m=Math.floor((o-s)/6e4);return c<1&&u<1&&m>=1&&(l=m+n[2]),c<1&&u>=1&&m>=1&&(l=u+n[1]),c>=1&&u>=1&&m>=1&&(l=c+n[0]),l}onclick(t,n){this.loading=!0,this.receptionService.ValidePaiement({idcar:t,idrep:n}).subscribe(c=>{200==c.status&&(this.loading=!1,this.show_message_success())},c=>{this.loading=!1})}show_message_success(){this.message=!0,setTimeout(()=>{this.message=!1},4e3),window.location.reload()}removeMessage(){this.message=!1}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(Z.e),e.Y36(P.G),e.Y36(h.F0),e.Y36(h.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-liste-paiement"]],standalone:!0,features:[e.jDz],decls:27,vars:10,consts:[["class","alert alert-success alert-dismissible fade show","role","alert",4,"ngIf"],[1,"row"],["cardTitle","Listes des paiements"],[1,"form-group"],["type","text","placeholder","Search...",1,"form-control",3,"ngModel","ngModelChange"],[1,"table","datatable-table"],[4,"ngFor","ngForOf"],[1,"my-container"],["customLoadingTemplate",""],[3,"show","config","template"],["role","alert",1,"alert","alert-success","alert-dismissible","fade","show"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close",3,"click"],["alt","",2,"width","100px","border-radius","5px",3,"src"],["class","btn btn-secondary",3,"click",4,"ngIf"],["class","badge text-bg-success",4,"ngIf"],[1,"btn","btn-secondary",3,"click"],[1,"badge","text-bg-success"],[1,"custom-class"]],template:function(t,n){if(1&t&&(e.YNc(0,C,4,0,"div",0),e.TgZ(1,"div",1)(2,"app-card",2)(3,"div",3)(4,"input",4),e.NdJ("ngModelChange",function(o){return n.filterTerm=o}),e.qZA()(),e.TgZ(5,"table",5)(6,"thead")(7,"tr")(8,"th"),e._uU(9,"Images"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Voitures"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Immatricules"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Pi\xe8ces"),e.qZA(),e.TgZ(16,"th"),e._uU(17,"Prix"),e.qZA(),e.TgZ(18,"th"),e._uU(19,"Actions"),e.qZA()()(),e.TgZ(20,"tbody"),e.YNc(21,M,14,7,"tr",6),e.ALo(22,"filter"),e.qZA()()(),e.TgZ(23,"div",7),e.YNc(24,O,3,0,"ng-template",null,8,e.W1O),e._UZ(26,"ngx-loading",9),e.qZA()()),2&t){const s=e.MAs(25);e.Q6J("ngIf",n.message),e.xp6(4),e.Q6J("ngModel",n.filterTerm),e.xp6(17),e.Q6J("ngForOf",e.xi3(22,6,n.rep,n.filterTerm)),e.xp6(5),e.Q6J("show",n.loading)("config",e.DdM(9,L))("template",s)}},dependencies:[d.ez,d.sg,d.O5,T.m,_.Fj,_.JJ,_.On,v.A,_.UX,p.q,p.RJ,f.h,f.Z]}),i})()}}]);