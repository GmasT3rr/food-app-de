import{a as I3}from"./chunk-7SS5IIXQ.js";import{$ as J3,B as Z3,C as j3,E as D2,H as Y3,J as V1,Q as X3,R as K3,T as Q3,Z as $3,a as F3,b as T3,c as D3,d as B3,da as c4,e as R3,f as _3,h as q3,ha as T1,ia as a4,l as E3,n as O3,o as U3,q as G3,x as W3}from"./chunk-XSFGOYPC.js";import{$a as M,$c as R2,Bc as M1,Cb as p,Db as V,E as K1,Ea as Y,Eb as b,F as N1,Fa as a2,Ga as V3,Ib as k3,Jb as w3,L as Q1,La as C3,Lb as i2,N as y2,Nb as h1,Ob as r1,Oc as p1,Pb as O,Qb as H1,Rb as y3,Sb as s1,Tb as n1,Ub as A3,Wb as L,Wc as B2,X as $1,Xa as u3,Xc as r2,Y as A2,Z as J1,_a as q,_c as C1,a as j1,aa as H3,ab as d3,b as h3,bb as P2,bd as s2,ca as e1,cb as L3,cc as P3,da as m1,dc as k,eb as g3,fa as S1,fb as x3,gb as b3,h as Y1,hb as y1,ia as D,jb as N3,m as X1,ma as A,mb as F2,na as S,oa as z1,p as k2,pa as v1,qb as T2,ra as M3,rb as i1,s as w2,sb as E,sc as P1,ub as A1,uc as F1,va as c2,vb as e2,wa as k1,xa as w1,xb as S3,ya as p3}from"./chunk-H5MRGXXC.js";var e4=[{path:"api/foods/search",loadChildren:()=>import("./chunk-QTDW2AJM.js").then(c=>c.FoodListModule)},{path:"api/foods/search/:id",loadChildren:()=>import("./chunk-VNTG7A3T.js").then(c=>c.FoodModule)},{path:"api/foods/plan",loadChildren:()=>import("./chunk-K3FXLZW4.js").then(c=>c.PlanModule)},{path:"api/foods/plan/settings",loadChildren:()=>import("./chunk-OBQV2U33.js").then(c=>c.SettingsModule)},{path:"**",pathMatch:"full",redirectTo:"api/foods/search"}];var b6="@",N6=(()=>{let a=class a{constructor(e,i,s,n,l){this.doc=e,this.delegate=i,this.zone=s,this.animationType=n,this.moduleImpl=l,this._rendererFactoryPromise=null,this.scheduler=D(L3,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-SR3C3XRB.js")).catch(i=>{throw new H3(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let n=new s(this.delegate,this._engine,this.zone);return this.delegate=n,n})}createRenderer(e,i){let s=this.delegate.createRenderer(e,i);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let n=new _2(s);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let f=l.createRenderer(e,i);n.use(f)}).catch(l=>{n.use(s)}),n}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};a.\u0275fac=function(i){d3()},a.\u0275prov=e1({token:a,factory:a.\u0275fac});let c=a;return c})(),_2=class{constructor(a){this.delegate=a,this.replay=[],this.\u0275type=1}use(a){if(this.delegate=a,this.replay!==null){for(let r of this.replay)r(a);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(a,r){return this.delegate.createElement(a,r)}createComment(a){return this.delegate.createComment(a)}createText(a){return this.delegate.createText(a)}get destroyNode(){return this.delegate.destroyNode}appendChild(a,r){this.delegate.appendChild(a,r)}insertBefore(a,r,e,i){this.delegate.insertBefore(a,r,e,i)}removeChild(a,r,e){this.delegate.removeChild(a,r,e)}selectRootElement(a,r){return this.delegate.selectRootElement(a,r)}parentNode(a){return this.delegate.parentNode(a)}nextSibling(a){return this.delegate.nextSibling(a)}setAttribute(a,r,e,i){this.delegate.setAttribute(a,r,e,i)}removeAttribute(a,r,e){this.delegate.removeAttribute(a,r,e)}addClass(a,r){this.delegate.addClass(a,r)}removeClass(a,r){this.delegate.removeClass(a,r)}setStyle(a,r,e,i){this.delegate.setStyle(a,r,e,i)}removeStyle(a,r,e){this.delegate.removeStyle(a,r,e)}setProperty(a,r,e){this.shouldReplay(r)&&this.replay.push(i=>i.setProperty(a,r,e)),this.delegate.setProperty(a,r,e)}setValue(a,r){this.delegate.setValue(a,r)}listen(a,r,e){return this.shouldReplay(r)&&this.replay.push(i=>i.listen(a,r,e)),this.delegate.listen(a,r,e)}shouldReplay(a){return this.replay!==null&&a.startsWith(b6)}};function n2(c="animations"){return b3("NgAsyncAnimations"),M3([{provide:g3,useFactory:(a,r,e)=>new N6(a,r,e,c),deps:[M1,B3,y1]},{provide:C3,useValue:c==="noop"?"NoopAnimations":"BrowserAnimations"}])}var l2=(()=>{let a=class a{constructor(){this._http=D(F3),this.baseUrl=I3.apiUrl}getToken(){this._http.get(`${this.baseUrl}/token`).subscribe(i=>{let s=i.expires_in,n=new Date(new Date().getTime()+s*1e3);localStorage.setItem("token",i.access_token),localStorage.setItem("token_expiration",n.toString()),console.log("Done")})}token(){let e=localStorage.getItem("token"),i=localStorage.getItem("token_expiration");return e&&i?new Date(i)>new Date?e:(this.clearToken(),null):null}clearToken(){localStorage.removeItem("token"),localStorage.removeItem("token_expiration")}isTokenExpired(){let e=localStorage.getItem("token_expiration");return e?new Date(e)<=new Date:!0}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=e1({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var i4=(c,a)=>{let e=D(l2).token();if(e){let i=c.clone({setHeaders:{Authorization:`Bearer ${e}`}});return a(i)}return a(c)};var r4={providers:[E3(e4),n2(),n2(),n2(),T3(D3([i4]))]};var S6=["*",[["mat-toolbar-row"]]],k6=["*","mat-toolbar-row"],w6=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275dir=v1({type:a,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0});let c=a;return c})(),s4=(()=>{let a=class a{constructor(e,i,s){this._elementRef=e,this._platform=i,this._document=s}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};a.\u0275fac=function(i){return new(i||a)(M(Y),M(O3),M(M1))},a.\u0275cmp=S({type:a,selectors:[["mat-toolbar"]],contentQueries:function(i,s,n){if(i&1&&H1(n,w6,5),i&2){let l;s1(l=n1())&&(s._toolbarRows=l)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,s){i&2&&(e2(s.color?"mat-"+s.color:""),A1("mat-toolbar-multiple-rows",s._toolbarRows.length>0)("mat-toolbar-single-row",s._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[k],ngContentSelectors:k6,decls:2,vars:0,template:function(i,s){i&1&&(r1(S6),O(0),O(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let c=a;return c})();var n4=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=z1({type:a}),a.\u0275inj=m1({imports:[V1,V1]});let c=a;return c})();var B6=["mat-menu-item",""],R6=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],_6=["mat-icon, [matMenuItemIcon]","*"];function q6(c,a){c&1&&(p3(),p(0,"svg",2),b(1,"polygon",3),V())}var E6=["*"];function I6(c,a){if(c&1){let r=k3();p(0,"div",0),i2("keydown",function(i){k1(r);let s=h1();return w1(s._handleKeydown(i))})("click",function(){k1(r);let i=h1();return w1(i.closed.emit("click"))})("@transformMenu.start",function(i){k1(r);let s=h1();return w1(s._onAnimationStart(i))})("@transformMenu.done",function(i){k1(r);let s=h1();return w1(s._onAnimationDone(i))}),p(1,"div",1),O(2),V()()}if(c&2){let r=h1();e2(r._classList),E("id",r.panelId)("@transformMenu",r._panelAnimationState),i1("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null)("aria-describedby",r.ariaDescribedby||null)}}var q2=new S1("MAT_MENU_PANEL"),D1=(()=>{let a=class a{constructor(e,i,s,n,l){this._elementRef=e,this._document=i,this._focusMonitor=s,this._parentMenu=n,this._changeDetectorRef=l,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new X1,this._focused=new X1,this._highlighted=!1,this._triggersSubmenu=!1,n?.addItem?.(this)}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,i):this._getHostElement().focus(i),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),i=e.querySelectorAll("mat-icon, .material-icons");for(let s=0;s<i.length;s++)i[s].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}};a.\u0275fac=function(i){return new(i||a)(M(Y),M(M1),M(D2),M(q2,8),M(P1))},a.\u0275cmp=S({type:a,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(i,s){i&1&&i2("click",function(l){return s._checkDisabled(l)})("mouseenter",function(){return s._handleMouseEnter()}),i&2&&(i1("role",s.role)("tabindex",s._getTabIndex())("aria-disabled",s.disabled)("disabled",s.disabled||null),A1("mat-mdc-menu-item-highlighted",s._highlighted)("mat-mdc-menu-item-submenu-trigger",s._triggersSubmenu))},inputs:{role:"role",disabled:[A.HasDecoratorInputTransform,"disabled","disabled",F1],disableRipple:[A.HasDecoratorInputTransform,"disableRipple","disableRipple",F1]},exportAs:["matMenuItem"],standalone:!0,features:[F2,k],attrs:B6,ngContentSelectors:_6,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(i,s){i&1&&(r1(R6),O(0),p(1,"span",0),O(2,1),V(),b(3,"div",1),T2(4,q6,2,0,":svg:svg",2)),i&2&&(q(3),E("matRippleDisabled",s.disableRipple||s.disabled)("matRippleTrigger",s._getHostElement()),q(),S3(4,s._triggersSubmenu?4:-1))},dependencies:[X3],encapsulation:2,changeDetection:0});let c=a;return c})();var O6=new S1("MatMenuContent");var f2={transformMenu:B2("transformMenu",[R2("void",C1({opacity:0,transform:"scale(0.8)"})),s2("void => enter",r2("120ms cubic-bezier(0, 0, 0.2, 1)",C1({opacity:1,transform:"scale(1)"}))),s2("* => void",r2("100ms 25ms linear",C1({opacity:0})))]),fadeInItems:B2("fadeInItems",[R2("showing",C1({opacity:1})),s2("void => *",[C1({opacity:0}),r2("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},E5=f2.fadeInItems,I5=f2.transformMenu,U6=0,G6=new S1("mat-menu-default-options",{providedIn:"root",factory:W6});function W6(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var u1=(()=>{let a=class a{get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}set panelClass(e){let i=this._previousPanelClass,s=j1({},this._classList);i&&i.length&&i.split(" ").forEach(n=>{s[n]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(n=>{s[n]=!0}),this._elementRef.nativeElement.className=""),this._classList=s}get classList(){return this.panelClass}set classList(e){this.panelClass=e}constructor(e,i,s,n){this._elementRef=e,this._ngZone=i,this._changeDetectorRef=n,this._elevationPrefix="mat-elevation-z",this._baseElevation=8,this._directDescendantItems=new V3,this._classList={},this._panelAnimationState="void",this._animationDone=new X1,this.closed=new a2,this.close=this.closed,this.panelId=`mat-menu-panel-${U6++}`,this.overlayPanelClass=s.overlayPanelClass||"",this._xPosition=s.xPosition,this._yPosition=s.yPosition,this.backdropClass=s.backdropClass,this.overlapTrigger=s.overlapTrigger,this.hasBackdrop=s.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new W3(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe($1(this._directDescendantItems),A2(e=>K1(...e.map(i=>i._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let i=this._keyManager;if(this._panelAnimationState==="enter"&&i.activeItem?._hasFocus()){let s=e.toArray(),n=Math.max(0,Math.min(s.length-1,i.activeItemIndex||0));s[n]&&!s[n].disabled?i.setActiveItem(n):i.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe($1(this._directDescendantItems),A2(i=>K1(...i.map(s=>s._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let i=e.keyCode,s=this._keyManager;switch(i){case 27:G3(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(i===38||i===40)&&s.setFocusOrigin("keyboard"),s.onKeydown(e);return}e.stopPropagation()}focusFirstItem(e="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe(Q1(1)).subscribe(()=>{let i=null;if(this._directDescendantItems.length&&(i=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!i||!i.contains(document.activeElement)){let s=this._keyManager;s.setFocusOrigin(e).setFirstItemActive(),!s.activeItem&&i&&i.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){let i=Math.min(this._baseElevation+e,24),s=`${this._elevationPrefix}${i}`,n=Object.keys(this._classList).find(l=>l.startsWith(this._elevationPrefix));if(!n||n===this._previousElevation){let l=j1({},this._classList);this._previousElevation&&(l[this._previousElevation]=!1),l[s]=!0,this._previousElevation=s,this._classList=l}}setPositionClasses(e=this.xPosition,i=this.yPosition){this._classList=h3(j1({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":i==="above","mat-menu-below":i==="below"}),this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,e.toState==="enter"&&this._keyManager.activeItemIndex===0&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe($1(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(i=>i._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}};a.\u0275fac=function(i){return new(i||a)(M(Y),M(y1),M(G6),M(P1))},a.\u0275cmp=S({type:a,selectors:[["mat-menu"]],contentQueries:function(i,s,n){if(i&1&&(H1(n,O6,5),H1(n,D1,5),H1(n,D1,4)),i&2){let l;s1(l=n1())&&(s.lazyContent=l.first),s1(l=n1())&&(s._allItems=l),s1(l=n1())&&(s.items=l)}},viewQuery:function(i,s){if(i&1&&y3(P2,5),i&2){let n;s1(n=n1())&&(s.templateRef=n.first)}},hostVars:3,hostBindings:function(i,s){i&2&&i1("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[A.None,"aria-label","ariaLabel"],ariaLabelledby:[A.None,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[A.None,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[A.HasDecoratorInputTransform,"overlapTrigger","overlapTrigger",F1],hasBackdrop:[A.HasDecoratorInputTransform,"hasBackdrop","hasBackdrop",e=>e==null?null:F1(e)],panelClass:[A.None,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[P3([{provide:q2,useExisting:a}]),F2,k],ngContentSelectors:E6,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"keydown","click","id"],[1,"mat-mdc-menu-content"]],template:function(i,s){i&1&&(r1(),T2(0,I6,3,7,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:var(--mat-menu-item-trailing-spacing);padding-right:var(--mat-menu-item-leading-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]),.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon])[dir=rtl]{padding-left:var(--mat-menu-item-with-icon-trailing-spacing);padding-right:var(--mat-menu-item-with-icon-leading-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[f2.transformMenu,f2.fadeInItems]},changeDetection:0});let c=a;return c})(),t4=new S1("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let c=D(T1);return()=>c.scrollStrategies.reposition()}});function Z6(c){return()=>c.scrollStrategies.reposition()}var j6={provide:t4,deps:[T1],useFactory:Z6},l4=U3({passive:!0});var m4=(()=>{let a=class a{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(i=>{this._destroyMenu(i),(i==="click"||i==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(i)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(e,i,s,n,l,f,t,o,z){this._overlay=e,this._element=i,this._viewContainerRef=s,this._menuItemInstance=f,this._dir=t,this._focusMonitor=o,this._ngZone=z,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=Y1.EMPTY,this._hoverSubscription=Y1.EMPTY,this._menuCloseSubscription=Y1.EMPTY,this._changeDetectorRef=D(P1),this._handleTouchStart=h=>{j3(h)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new a2,this.onMenuOpen=this.menuOpened,this.menuClosed=new a2,this.onMenuClose=this.menuClosed,this._scrollStrategy=n,this._parentMaterialMenu=l instanceof u1?l:void 0,i.nativeElement.addEventListener("touchstart",this._handleTouchStart,l4)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,l4),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let e=this.menu;if(this._menuOpen||!e)return;let i=this._createOverlay(e),s=i.getConfig(),n=s.positionStrategy;this._setPosition(e,n),s.hasBackdrop=e.hasBackdrop==null?!this.triggersSubmenu():e.hasBackdrop,i.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof u1&&(e._startAnimation(),e._directDescendantItems.changes.pipe(J1(e.close)).subscribe(()=>{n.withLockedPosition(!1).reapplyLastPosition(),n.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;let i=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,i instanceof u1?(i._resetAnimation(),i.lazyContent?i._animationDone.pipe(N1(s=>s.toState==="void"),Q1(1),J1(i.lazyContent._attached)).subscribe({next:()=>i.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),i?.lazyContent?.detach())}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(e){if(e.setElevation){let i=0,s=e.parentMenu;for(;s;)i++,s=s.parentMenu;e.setElevation(i)}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let i=this._getOverlayConfig(e);this._subscribeToPositions(e,i.positionStrategy),this._overlayRef=this._overlay.create(i),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(e){return new c4({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e,i){e.setPositionClasses&&i.positionChanges.subscribe(s=>{let n=s.connectionPair.overlayX==="start"?"after":"before",l=s.connectionPair.overlayY==="top"?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(n,l)):e.setPositionClasses(n,l)})}_setPosition(e,i){let[s,n]=e.xPosition==="before"?["end","start"]:["start","end"],[l,f]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[t,o]=[l,f],[z,h]=[s,n],H=0;if(this.triggersSubmenu()){if(h=s=e.xPosition==="before"?"start":"end",n=z=s==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let x=this._parentMaterialMenu.items.first;this._parentInnerPadding=x?x._getHostElement().offsetTop:0}H=l==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(t=l==="top"?"bottom":"top",o=f==="top"?"bottom":"top");i.withPositions([{originX:s,originY:t,overlayX:z,overlayY:l,offsetY:H},{originX:n,originY:t,overlayX:h,overlayY:l,offsetY:H},{originX:s,originY:o,overlayX:z,overlayY:f,offsetY:-H},{originX:n,originY:o,overlayX:h,overlayY:f,offsetY:-H}])}_menuClosingActions(){let e=this._overlayRef.backdropClick(),i=this._overlayRef.detachments(),s=this._parentMaterialMenu?this._parentMaterialMenu.closed:w2(),n=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(N1(l=>l!==this._menuItemInstance),N1(()=>this._menuOpen)):w2();return K1(e,s,n,i)}_handleMousedown(e){Z3(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let i=e.keyCode;(i===13||i===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(i===39&&this.dir==="ltr"||i===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(N1(e=>e===this._menuItemInstance&&!e.disabled),y2(0,k2)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof u1&&this.menu._isAnimating?this.menu._animationDone.pipe(Q1(1),y2(0,k2),J1(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new J3(e.templateRef,this._viewContainerRef)),this._portal}};a.\u0275fac=function(i){return new(i||a)(M(T1),M(Y),M(N3),M(t4),M(q2,8),M(D1,10),M(Y3,8),M(D2),M(y1))},a.\u0275dir=v1({type:a,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(i,s){i&1&&i2("click",function(l){return s._handleClick(l)})("mousedown",function(l){return s._handleMousedown(l)})("keydown",function(l){return s._handleKeydown(l)}),i&2&&i1("aria-haspopup",s.menu?"menu":null)("aria-expanded",s.menuOpen)("aria-controls",s.menuOpen?s.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[A.None,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[A.None,"matMenuTriggerFor","menu"],menuData:[A.None,"matMenuTriggerData","menuData"],restoreFocus:[A.None,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0});let c=a;return c})(),z4=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=z1({type:a}),a.\u0275inj=m1({providers:[j6],imports:[p1,K3,V1,a4,$3,V1]});let c=a;return c})();var v4=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=S({type:a,selectors:[["app-navbar"]],standalone:!0,features:[k],decls:42,vars:1,consts:[["beforeMenu","matMenu","menu","matMenu"],["color","primary",1,"navbar"],["color","primary"],[1,"logo-container"],[1,"logo"],["href","api/foods/search"],["src","favicon.ico","alt","logo"],["href","https://www.fatsecret.com"],["src","https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.png","srcset",`
            https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_2x.png 2x,
            https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_3x.png 3x
          `,"border","0"],[1,"links"],["href","api/foods/plan"],["href","api/foods/plan/settings"],[1,"mobile"],["mat-icon-button","",3,"matMenuTriggerFor"],["xPosition","before"],["mat-menu-item","","href","api/foods/search"],["mat-menu-item","","href","api/foods/plan"],["mat-menu-item","","href","api/foods/plan/settings"]],template:function(i,s){if(i&1&&(p(0,"mat-toolbar",1)(1,"mat-toolbar",2)(2,"div",3)(3,"div",4)(4,"a",5),b(5,"img",6),p(6,"Strong"),L(7,"FoodApp"),V()()(),p(8,"a",7),b(9,"img",8),V()(),p(10,"div",9)(11,"a",5),L(12,"Search "),p(13,"mat-icon"),L(14,"search"),V()(),p(15,"a",10),L(16,"Plan "),p(17,"mat-icon"),L(18,"assignment"),V()(),p(19,"a",11),L(20,"Settings "),p(21,"mat-icon"),L(22,"settings"),V()()(),p(23,"div",12)(24,"button",13)(25,"mat-icon"),L(26,"menu"),V()(),p(27,"mat-menu",14,0)(30,"a",15)(31,"mat-icon"),L(32,"search"),V(),L(33," Search "),V(),p(34,"a",16)(35,"mat-icon"),L(36,"assignment"),V(),L(37," Plan "),V(),p(38,"a",17)(39,"mat-icon"),L(40,"settings"),V(),L(41," Settings "),V()()()()()),i&2){let n=A3(29);q(24),E("matMenuTriggerFor",n)}},dependencies:[p1,n4,s4,Q3,m4,z4,u1,D1],styles:['.navbar[_ngcontent-%COMP%]{justify-content:center;display:flex;min-height:5rem;position:fixed;top:0;z-index:3}.navbar[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column}.navbar[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;text-decoration:none;color:var(--text)}.navbar[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.75rem;padding-right:.75rem}.navbar[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.2rem}.navbar[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{transition:all .3s;width:50%;justify-content:space-between}.navbar[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:row}.navbar[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;margin:0 .5rem;text-decoration:none;color:var(--text);border-radius:.5rem;padding:.5rem 0;font-size:1rem}.navbar[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-left:.5rem}.navbar[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{width:100%}.navbar[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{transition:all .3s;position:absolute;content:"";width:0;height:1px;background-color:var(--text);left:0;bottom:0;margin:.5rem 0}.navbar[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]{display:none}.navbar[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:inherit;cursor:pointer;color:var(--text)}@media (max-width: 768px){.links[_ngcontent-%COMP%]{display:none!important}.mobile[_ngcontent-%COMP%]{display:flex!important}}']});let c=a;return c})();function h4(c,a){var r=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),r.push.apply(r,e)}return r}function m(c){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?h4(Object(r),!0).forEach(function(e){g(c,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(r)):h4(Object(r)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(r,e))})}return c}function u2(c){"@babel/helpers - typeof";return u2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},u2(c)}function X6(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function H4(c,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function K6(c,a,r){return a&&H4(c.prototype,a),r&&H4(c,r),Object.defineProperty(c,"prototype",{writable:!1}),c}function g(c,a,r){return a in c?Object.defineProperty(c,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[a]=r,c}function a3(c,a){return $6(c)||c8(c,a)||E4(c,a)||e8()}function G1(c){return Q6(c)||J6(c)||E4(c)||a8()}function Q6(c){if(Array.isArray(c))return G2(c)}function $6(c){if(Array.isArray(c))return c}function J6(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function c8(c,a){var r=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(r!=null){var e=[],i=!0,s=!1,n,l;try{for(r=r.call(c);!(i=(n=r.next()).done)&&(e.push(n.value),!(a&&e.length===a));i=!0);}catch(f){s=!0,l=f}finally{try{!i&&r.return!=null&&r.return()}finally{if(s)throw l}}return e}}function E4(c,a){if(c){if(typeof c=="string")return G2(c,a);var r=Object.prototype.toString.call(c).slice(8,-1);if(r==="Object"&&c.constructor&&(r=c.constructor.name),r==="Map"||r==="Set")return Array.from(c);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G2(c,a)}}function G2(c,a){(a==null||a>c.length)&&(a=c.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=c[r];return e}function a8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var M4=function(){},e3={},I4={},O4=null,U4={mark:M4,measure:M4};try{typeof window<"u"&&(e3=window),typeof document<"u"&&(I4=document),typeof MutationObserver<"u"&&(O4=MutationObserver),typeof performance<"u"&&(U4=performance)}catch{}var i8=e3.navigator||{},p4=i8.userAgent,V4=p4===void 0?"":p4,Q=e3,u=I4,C4=O4,o2=U4,X5=!!Q.document,Z=!!u.documentElement&&!!u.head&&typeof u.addEventListener=="function"&&typeof u.createElement=="function",G4=~V4.indexOf("MSIE")||~V4.indexOf("Trident/"),t2,m2,z2,v2,h2,U="___FONT_AWESOME___",W2=16,W4="fa",Z4="svg-inline--fa",o1="data-fa-i2svg",Z2="data-fa-pseudo-element",r8="data-fa-pseudo-element-pending",i3="data-prefix",r3="data-icon",u4="fontawesome-i2svg",s8="async",n8=["HTML","HEAD","STYLE","SCRIPT"],j4=function(){try{return!0}catch{return!1}}(),C="classic",d="sharp",s3=[C,d];function W1(c){return new Proxy(c,{get:function(r,e){return e in r?r[e]:r[C]}})}var q1=W1((t2={},g(t2,C,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),g(t2,d,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),t2)),E1=W1((m2={},g(m2,C,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),g(m2,d,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),m2)),I1=W1((z2={},g(z2,C,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),g(z2,d,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),z2)),l8=W1((v2={},g(v2,C,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),g(v2,d,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),v2)),f8=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Y4="fa-layers-text",o8=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,t8=W1((h2={},g(h2,C,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),g(h2,d,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),h2)),X4=[1,2,3,4,5,6,7,8,9,10],m8=X4.concat([11,12,13,14,15,16,17,18,19,20]),z8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],l1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},O1=new Set;Object.keys(E1[C]).map(O1.add.bind(O1));Object.keys(E1[d]).map(O1.add.bind(O1));var v8=[].concat(s3,G1(O1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",l1.GROUP,l1.SWAP_OPACITY,l1.PRIMARY,l1.SECONDARY]).concat(X4.map(function(c){return"".concat(c,"x")})).concat(m8.map(function(c){return"w-".concat(c)})),R1=Q.FontAwesomeConfig||{};function h8(c){var a=u.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function H8(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}u&&typeof u.querySelector=="function"&&(d4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],d4.forEach(function(c){var a=a3(c,2),r=a[0],e=a[1],i=H8(h8(r));i!=null&&(R1[e]=i)}));var d4,K4={styleDefault:"solid",familyDefault:"classic",cssPrefix:W4,replacementClass:Z4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};R1.familyPrefix&&(R1.cssPrefix=R1.familyPrefix);var x1=m(m({},K4),R1);x1.autoReplaceSvg||(x1.observeMutations=!1);var v={};Object.keys(K4).forEach(function(c){Object.defineProperty(v,c,{enumerable:!0,set:function(r){x1[c]=r,_1.forEach(function(e){return e(v)})},get:function(){return x1[c]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(a){x1.cssPrefix=a,_1.forEach(function(r){return r(v)})},get:function(){return x1.cssPrefix}});Q.FontAwesomeConfig=v;var _1=[];function M8(c){return _1.push(c),function(){_1.splice(_1.indexOf(c),1)}}var K=W2,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function p8(c){if(!(!c||!Z)){var a=u.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var r=u.head.childNodes,e=null,i=r.length-1;i>-1;i--){var s=r[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return u.head.insertBefore(a,e),c}}var V8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U1(){for(var c=12,a="";c-- >0;)a+=V8[Math.random()*62|0];return a}function b1(c){for(var a=[],r=(c||[]).length>>>0;r--;)a[r]=c[r];return a}function n3(c){return c.classList?b1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Q4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function C8(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(Q4(c[r]),'" ')},"").trim()}function g2(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(c[r].trim(),";")},"")}function l3(c){return c.size!==I.size||c.x!==I.x||c.y!==I.y||c.rotate!==I.rotate||c.flipX||c.flipY}function u8(c){var a=c.transform,r=c.containerWidth,e=c.iconWidth,i={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(n," ").concat(l)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:i,inner:f,path:t}}function d8(c){var a=c.transform,r=c.width,e=r===void 0?W2:r,i=c.height,s=i===void 0?W2:i,n=c.startCentered,l=n===void 0?!1:n,f="";return l&&G4?f+="translate(".concat(a.x/K-e/2,"em, ").concat(a.y/K-s/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/K,"em), calc(-50% + ").concat(a.y/K,"em)) "):f+="translate(".concat(a.x/K,"em, ").concat(a.y/K,"em) "),f+="scale(".concat(a.size/K*(a.flipX?-1:1),", ").concat(a.size/K*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var L8=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $4(){var c=W4,a=Z4,r=v.cssPrefix,e=v.replacementClass,i=L8;if(r!==c||e!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(r,"-")).replace(n,"--".concat(r,"-")).replace(l,".".concat(e))}return i}var L4=!1;function E2(){v.autoAddCss&&!L4&&(p8($4()),L4=!0)}var g8={mixout:function(){return{dom:{css:$4,insertCss:E2}}},hooks:function(){return{beforeDOMElementCreation:function(){E2()},beforeI2svg:function(){E2()}}}},G=Q||{};G[U]||(G[U]={});G[U].styles||(G[U].styles={});G[U].hooks||(G[U].hooks={});G[U].shims||(G[U].shims=[]);var B=G[U],J4=[],x8=function c(){u.removeEventListener("DOMContentLoaded",c),d2=1,J4.map(function(a){return a()})},d2=!1;Z&&(d2=(u.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(u.readyState),d2||u.addEventListener("DOMContentLoaded",x8));function b8(c){Z&&(d2?setTimeout(c,0):J4.push(c))}function Z1(c){var a=c.tag,r=c.attributes,e=r===void 0?{}:r,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?Q4(c):"<".concat(a," ").concat(C8(e),">").concat(s.map(Z1).join(""),"</").concat(a,">")}function g4(c,a,r){if(c&&c[a]&&c[a][r])return{prefix:a,iconName:r,icon:c[a][r]}}var N8=function(a,r){return function(e,i,s,n){return a.call(r,e,i,s,n)}},I2=function(a,r,e,i){var s=Object.keys(a),n=s.length,l=i!==void 0?N8(r,i):r,f,t,o;for(e===void 0?(f=1,o=a[s[0]]):(f=0,o=e);f<n;f++)t=s[f],o=l(o,a[t],t,a);return o};function S8(c){for(var a=[],r=0,e=c.length;r<e;){var i=c.charCodeAt(r++);if(i>=55296&&i<=56319&&r<e){var s=c.charCodeAt(r++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),r--)}else a.push(i)}return a}function j2(c){var a=S8(c);return a.length===1?a[0].toString(16):null}function k8(c,a){var r=c.length,e=c.charCodeAt(a),i;return e>=55296&&e<=56319&&r>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(e-55296)*1024+i-56320+65536:e}function x4(c){return Object.keys(c).reduce(function(a,r){var e=c[r],i=!!e.icon;return i?a[e.iconName]=e.icon:a[r]=e,a},{})}function Y2(c,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,i=e===void 0?!1:e,s=x4(a);typeof B.hooks.addPack=="function"&&!i?B.hooks.addPack(c,x4(a)):B.styles[c]=m(m({},B.styles[c]||{}),s),c==="fas"&&Y2("fa",a)}var H2,M2,p2,d1=B.styles,w8=B.shims,y8=(H2={},g(H2,C,Object.values(I1[C])),g(H2,d,Object.values(I1[d])),H2),f3=null,c6={},a6={},e6={},i6={},r6={},A8=(M2={},g(M2,C,Object.keys(q1[C])),g(M2,d,Object.keys(q1[d])),M2);function P8(c){return~v8.indexOf(c)}function F8(c,a){var r=a.split("-"),e=r[0],i=r.slice(1).join("-");return e===c&&i!==""&&!P8(i)?i:null}var s6=function(){var a=function(s){return I2(d1,function(n,l,f){return n[f]=I2(l,s,{}),n},{})};c6=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var l=s[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){i[f.toString(16)]=n})}return i}),a6=a(function(i,s,n){if(i[n]=n,s[2]){var l=s[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){i[f]=n})}return i}),r6=a(function(i,s,n){var l=s[2];return i[n]=n,l.forEach(function(f){i[f]=n}),i});var r="far"in d1||v.autoFetchSvg,e=I2(w8,function(i,s){var n=s[0],l=s[1],f=s[2];return l==="far"&&!r&&(l="fas"),typeof n=="string"&&(i.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:l,iconName:f}),i},{names:{},unicodes:{}});e6=e.names,i6=e.unicodes,f3=x2(v.styleDefault,{family:v.familyDefault})};M8(function(c){f3=x2(c.styleDefault,{family:v.familyDefault})});s6();function o3(c,a){return(c6[c]||{})[a]}function T8(c,a){return(a6[c]||{})[a]}function f1(c,a){return(r6[c]||{})[a]}function n6(c){return e6[c]||{prefix:null,iconName:null}}function D8(c){var a=i6[c],r=o3("fas",c);return a||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function $(){return f3}var t3=function(){return{prefix:null,iconName:null,rest:[]}};function x2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.family,e=r===void 0?C:r,i=q1[e][c],s=E1[e][c]||E1[e][i],n=c in B.styles?c:null;return s||n||null}var b4=(p2={},g(p2,C,Object.keys(I1[C])),g(p2,d,Object.keys(I1[d])),p2);function b2(c){var a,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,i=e===void 0?!1:e,s=(a={},g(a,C,"".concat(v.cssPrefix,"-").concat(C)),g(a,d,"".concat(v.cssPrefix,"-").concat(d)),a),n=null,l=C;(c.includes(s[C])||c.some(function(t){return b4[C].includes(t)}))&&(l=C),(c.includes(s[d])||c.some(function(t){return b4[d].includes(t)}))&&(l=d);var f=c.reduce(function(t,o){var z=F8(v.cssPrefix,o);if(d1[o]?(o=y8[l].includes(o)?l8[l][o]:o,n=o,t.prefix=o):A8[l].indexOf(o)>-1?(n=o,t.prefix=x2(o,{family:l})):z?t.iconName=z:o!==v.replacementClass&&o!==s[C]&&o!==s[d]&&t.rest.push(o),!i&&t.prefix&&t.iconName){var h=n==="fa"?n6(t.iconName):{},H=f1(t.prefix,t.iconName);h.prefix&&(n=null),t.iconName=h.iconName||H||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!d1.far&&d1.fas&&!v.autoFetchSvg&&(t.prefix="fas")}return t},t3());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===d&&(d1.fass||v.autoFetchSvg)&&(f.prefix="fass",f.iconName=f1(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=$()||"fas"),f}var B8=function(){function c(){X6(this,c),this.definitions={}}return K6(c,[{key:"add",value:function(){for(var r=this,e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){r.definitions[l]=m(m({},r.definitions[l]||{}),n[l]),Y2(l,n[l]);var f=I1[C][l];f&&Y2(f,n[l]),s6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(function(s){var n=i[s],l=n.prefix,f=n.iconName,t=n.icon,o=t[2];r[l]||(r[l]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(r[l][z]=t)}),r[l][f]=t}),r}}]),c}(),N4=[],L1={},g1={},R8=Object.keys(g1);function _8(c,a){var r=a.mixoutsTo;return N4=c,L1={},Object.keys(g1).forEach(function(e){R8.indexOf(e)===-1&&delete g1[e]}),N4.forEach(function(e){var i=e.mixout?e.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(r[n]=i[n]),u2(i[n])==="object"&&Object.keys(i[n]).forEach(function(l){r[n]||(r[n]={}),r[n][l]=i[n][l]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){L1[n]||(L1[n]=[]),L1[n].push(s[n])})}e.provides&&e.provides(g1)}),r}function X2(c,a){for(var r=arguments.length,e=new Array(r>2?r-2:0),i=2;i<r;i++)e[i-2]=arguments[i];var s=L1[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function t1(c){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];var i=L1[c]||[];i.forEach(function(s){s.apply(null,r)})}function W(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return g1[c]?g1[c].apply(null,a):void 0}function K2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,r=c.prefix||$();if(a)return a=f1(r,a)||a,g4(l6.definitions,r,a)||g4(B.styles,r,a)}var l6=new B8,q8=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,t1("noAuto")},E8={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(t1("beforeI2svg",a),W("pseudoElements2svg",a),W("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,b8(function(){O8({autoReplaceSvgRoot:r}),t1("watch",a)})}},I8={icon:function(a){if(a===null)return null;if(u2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:f1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var r=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=x2(a[0]);return{prefix:e,iconName:f1(e,r)||r}}if(typeof a=="string"&&(a.indexOf("".concat(v.cssPrefix,"-"))>-1||a.match(f8))){var i=b2(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||$(),iconName:f1(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=$();return{prefix:s,iconName:f1(s,a)||a}}}},P={noAuto:q8,config:v,dom:E8,parse:I8,library:l6,findIconDefinition:K2,toHtml:Z1},O8=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot,e=r===void 0?u:r;(Object.keys(B.styles).length>0||v.autoFetchSvg)&&Z&&v.autoReplaceSvg&&P.dom.i2svg({node:e})};function N2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return Z1(e)})}}),Object.defineProperty(c,"node",{get:function(){if(Z){var e=u.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function U8(c){var a=c.children,r=c.main,e=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(l3(n)&&r.found&&!e.found){var l=r.width,f=r.height,t={x:l/f/2,y:.5};i.style=g2(m(m({},s),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function G8(c){var a=c.prefix,r=c.iconName,e=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(v.cssPrefix,"-").concat(r):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},i),{},{id:n}),children:e}]}]}function m3(c){var a=c.icons,r=a.main,e=a.mask,i=c.prefix,s=c.iconName,n=c.transform,l=c.symbol,f=c.title,t=c.maskId,o=c.titleId,z=c.extra,h=c.watchable,H=h===void 0?!1:h,x=e.found?e:r,F=x.width,T=x.height,R=i==="fak",N=[v.replacementClass,s?"".concat(v.cssPrefix,"-").concat(s):""].filter(function(j){return z.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(z.classes).join(" "),w={children:[],attributes:m(m({},z.attributes),{},{"data-prefix":i,"data-icon":s,class:N,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(F," ").concat(T)})},_=R&&!~z.classes.indexOf("fa-fw")?{width:"".concat(F/T*16*.0625,"em")}:{};H&&(w.attributes[o1]=""),f&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(o||U1())},children:[f]}),delete w.attributes.title);var y=m(m({},w),{},{prefix:i,iconName:s,main:r,mask:e,maskId:t,transform:n,symbol:l,styles:m(m({},_),z.styles)}),c1=e.found&&r.found?W("generateAbstractMask",y)||{children:[],attributes:{}}:W("generateAbstractIcon",y)||{children:[],attributes:{}},a1=c1.children,S2=c1.attributes;return y.children=a1,y.attributes=S2,l?G8(y):U8(y)}function S4(c){var a=c.content,r=c.width,e=c.height,i=c.transform,s=c.title,n=c.extra,l=c.watchable,f=l===void 0?!1:l,t=m(m(m({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});f&&(t[o1]="");var o=m({},n.styles);l3(i)&&(o.transform=d8({transform:i,startCentered:!0,width:r,height:e}),o["-webkit-transform"]=o.transform);var z=g2(o);z.length>0&&(t.style=z);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function W8(c){var a=c.content,r=c.title,e=c.extra,i=m(m(m({},e.attributes),r?{title:r}:{}),{},{class:e.classes.join(" ")}),s=g2(e.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),r&&n.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),n}var O2=B.styles;function Q2(c){var a=c[0],r=c[1],e=c.slice(4),i=a3(e,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(l1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(l1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(l1.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:r,icon:n}}var Z8={found:!1,width:512,height:512};function j8(c,a){!j4&&!v.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function $2(c,a){var r=a;return a==="fa"&&v.styleDefault!==null&&(a=$()),new Promise(function(e,i){var s={found:!1,width:512,height:512,icon:W("missingIconAbstract")||{}};if(r==="fa"){var n=n6(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&O2[a]&&O2[a][c]){var l=O2[a][c];return e(Q2(l))}j8(c,a),e(m(m({},Z8),{},{icon:v.showMissingIcons&&c?W("missingIconAbstract")||{}:{}}))})}var k4=function(){},J2=v.measurePerformance&&o2&&o2.mark&&o2.measure?o2:{mark:k4,measure:k4},B1='FA "6.5.2"',Y8=function(a){return J2.mark("".concat(B1," ").concat(a," begins")),function(){return f6(a)}},f6=function(a){J2.mark("".concat(B1," ").concat(a," ends")),J2.measure("".concat(B1," ").concat(a),"".concat(B1," ").concat(a," begins"),"".concat(B1," ").concat(a," ends"))},z3={begin:Y8,end:f6},V2=function(){};function w4(c){var a=c.getAttribute?c.getAttribute(o1):null;return typeof a=="string"}function X8(c){var a=c.getAttribute?c.getAttribute(i3):null,r=c.getAttribute?c.getAttribute(r3):null;return a&&r}function K8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(v.replacementClass)}function Q8(){if(v.autoReplaceSvg===!0)return C2.replace;var c=C2[v.autoReplaceSvg];return c||C2.replace}function $8(c){return u.createElementNS("http://www.w3.org/2000/svg",c)}function J8(c){return u.createElement(c)}function o6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.ceFn,e=r===void 0?c.tag==="svg"?$8:J8:r;if(typeof c=="string")return u.createTextNode(c);var i=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(o6(n,{ceFn:e}))}),i}function c0(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var C2={replace:function(a){var r=a[0];if(r.parentNode)if(a[1].forEach(function(i){r.parentNode.insertBefore(o6(i),r)}),r.getAttribute(o1)===null&&v.keepOriginalSource){var e=u.createComment(c0(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(a){var r=a[0],e=a[1];if(~n3(r).indexOf(v.replacementClass))return C2.replace(a);var i=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(l,f){return f===v.replacementClass||f.match(i)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(l){return Z1(l)}).join(`
`);r.setAttribute(o1,""),r.innerHTML=n}};function y4(c){c()}function t6(c,a){var r=typeof a=="function"?a:V2;if(c.length===0)r();else{var e=y4;v.mutateApproach===s8&&(e=Q.requestAnimationFrame||y4),e(function(){var i=Q8(),s=z3.begin("mutate");c.map(i),s(),r()})}}var v3=!1;function m6(){v3=!0}function c3(){v3=!1}var L2=null;function A4(c){if(C4&&v.observeMutations){var a=c.treeCallback,r=a===void 0?V2:a,e=c.nodeCallback,i=e===void 0?V2:e,s=c.pseudoElementsCallback,n=s===void 0?V2:s,l=c.observeMutationsRoot,f=l===void 0?u:l;L2=new C4(function(t){if(!v3){var o=$();b1(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!w4(z.addedNodes[0])&&(v.searchPseudoElements&&n(z.target),r(z.target)),z.type==="attributes"&&z.target.parentNode&&v.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&w4(z.target)&&~z8.indexOf(z.attributeName))if(z.attributeName==="class"&&X8(z.target)){var h=b2(n3(z.target)),H=h.prefix,x=h.iconName;z.target.setAttribute(i3,H||o),x&&z.target.setAttribute(r3,x)}else K8(z.target)&&i(z.target)})}}),Z&&L2.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function a0(){L2&&L2.disconnect()}function e0(c){var a=c.getAttribute("style"),r=[];return a&&(r=a.split(";").reduce(function(e,i){var s=i.split(":"),n=s[0],l=s.slice(1);return n&&l.length>0&&(e[n]=l.join(":").trim()),e},{})),r}function i0(c){var a=c.getAttribute("data-prefix"),r=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",i=b2(n3(c));return i.prefix||(i.prefix=$()),a&&r&&(i.prefix=a,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&e.length>0&&(i.iconName=T8(i.prefix,c.innerText)||o3(i.prefix,j2(c.innerText))),!i.iconName&&v.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function r0(c){var a=b1(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),r=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return v.autoA11y&&(r?a["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(e||U1()):(a["aria-hidden"]="true",a.focusable="false")),a}function s0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function P4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=i0(c),e=r.iconName,i=r.prefix,s=r.rest,n=r0(c),l=X2("parseNodeAttributes",{},c),f=a.styleParser?e0(c):[];return m({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:n}},l)}var n0=B.styles;function z6(c){var a=v.autoReplaceSvg==="nest"?P4(c,{styleParser:!1}):P4(c);return~a.extra.classes.indexOf(Y4)?W("generateLayersText",c,a):W("generateSvgReplacementMutation",c,a)}var J=new Set;s3.map(function(c){J.add("fa-".concat(c))});Object.keys(q1[C]).map(J.add.bind(J));Object.keys(q1[d]).map(J.add.bind(J));J=G1(J);function F4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();var r=u.documentElement.classList,e=function(z){return r.add("".concat(u4,"-").concat(z))},i=function(z){return r.remove("".concat(u4,"-").concat(z))},s=v.autoFetchSvg?J:s3.map(function(o){return"fa-".concat(o)}).concat(Object.keys(n0));s.includes("fa")||s.push("fa");var n=[".".concat(Y4,":not([").concat(o1,"])")].concat(s.map(function(o){return".".concat(o,":not([").concat(o1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=b1(c.querySelectorAll(n))}catch{}if(l.length>0)e("pending"),i("complete");else return Promise.resolve();var f=z3.begin("onTree"),t=l.reduce(function(o,z){try{var h=z6(z);h&&o.push(h)}catch(H){j4||H.name==="MissingIcon"&&console.error(H)}return o},[]);return new Promise(function(o,z){Promise.all(t).then(function(h){t6(h,function(){e("active"),e("complete"),i("pending"),typeof a=="function"&&a(),f(),o()})}).catch(function(h){f(),z(h)})})}function l0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;z6(c).then(function(r){r&&t6([r],a)})}function f0(c){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:K2(a||{}),i=r.mask;return i&&(i=(i||{}).icon?i:K2(i||{})),c(e,m(m({},r),{},{mask:i}))}}var o0=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.transform,i=e===void 0?I:e,s=r.symbol,n=s===void 0?!1:s,l=r.mask,f=l===void 0?null:l,t=r.maskId,o=t===void 0?null:t,z=r.title,h=z===void 0?null:z,H=r.titleId,x=H===void 0?null:H,F=r.classes,T=F===void 0?[]:F,R=r.attributes,N=R===void 0?{}:R,w=r.styles,_=w===void 0?{}:w;if(a){var y=a.prefix,c1=a.iconName,a1=a.icon;return N2(m({type:"icon"},a),function(){return t1("beforeDOMElementCreation",{iconDefinition:a,params:r}),v.autoA11y&&(h?N["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(x||U1()):(N["aria-hidden"]="true",N.focusable="false")),m3({icons:{main:Q2(a1),mask:f?Q2(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:c1,transform:m(m({},I),i),symbol:n,title:h,maskId:o,titleId:x,extra:{attributes:N,styles:_,classes:T}})})}},t0={mixout:function(){return{icon:f0(o0)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=F4,r.nodeCallback=l0,r}}},provides:function(a){a.i2svg=function(r){var e=r.node,i=e===void 0?u:e,s=r.callback,n=s===void 0?function(){}:s;return F4(i,n)},a.generateSvgReplacementMutation=function(r,e){var i=e.iconName,s=e.title,n=e.titleId,l=e.prefix,f=e.transform,t=e.symbol,o=e.mask,z=e.maskId,h=e.extra;return new Promise(function(H,x){Promise.all([$2(i,l),o.iconName?$2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(F){var T=a3(F,2),R=T[0],N=T[1];H([r,m3({icons:{main:R,mask:N},prefix:l,iconName:i,transform:f,symbol:t,maskId:z,title:s,titleId:n,extra:h,watchable:!0})])}).catch(x)})},a.generateAbstractIcon=function(r){var e=r.children,i=r.attributes,s=r.main,n=r.transform,l=r.styles,f=g2(l);f.length>0&&(i.style=f);var t;return l3(n)&&(t=W("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(t||s.icon),{children:e,attributes:i}}}},m0={mixout:function(){return{layer:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.classes,s=i===void 0?[]:i;return N2({type:"layer"},function(){t1("beforeDOMElementCreation",{assembler:r,params:e});var n=[];return r(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(G1(s)).join(" ")},children:n}]})}}}},z0={mixout:function(){return{counter:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.title,s=i===void 0?null:i,n=e.classes,l=n===void 0?[]:n,f=e.attributes,t=f===void 0?{}:f,o=e.styles,z=o===void 0?{}:o;return N2({type:"counter",content:r},function(){return t1("beforeDOMElementCreation",{content:r,params:e}),W8({content:r.toString(),title:s,extra:{attributes:t,styles:z,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(G1(l))}})})}}}},v0={mixout:function(){return{text:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,s=i===void 0?I:i,n=e.title,l=n===void 0?null:n,f=e.classes,t=f===void 0?[]:f,o=e.attributes,z=o===void 0?{}:o,h=e.styles,H=h===void 0?{}:h;return N2({type:"text",content:r},function(){return t1("beforeDOMElementCreation",{content:r,params:e}),S4({content:r,transform:m(m({},I),s),title:l,extra:{attributes:z,styles:H,classes:["".concat(v.cssPrefix,"-layers-text")].concat(G1(t))}})})}}},provides:function(a){a.generateLayersText=function(r,e){var i=e.title,s=e.transform,n=e.extra,l=null,f=null;if(G4){var t=parseInt(getComputedStyle(r).fontSize,10),o=r.getBoundingClientRect();l=o.width/t,f=o.height/t}return v.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([r,S4({content:r.innerHTML,width:l,height:f,transform:s,title:i,extra:n,watchable:!0})])}}},h0=new RegExp('"',"ug"),T4=[1105920,1112319];function H0(c){var a=c.replace(h0,""),r=k8(a,0),e=r>=T4[0]&&r<=T4[1],i=a.length===2?a[0]===a[1]:!1;return{value:j2(i?a[0]:a),isSecondary:e||i}}function D4(c,a){var r="".concat(r8).concat(a.replace(":","-"));return new Promise(function(e,i){if(c.getAttribute(r)!==null)return e();var s=b1(c.children),n=s.filter(function(a1){return a1.getAttribute(Z2)===a})[0],l=Q.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match(o8),t=l.getPropertyValue("font-weight"),o=l.getPropertyValue("content");if(n&&!f)return c.removeChild(n),e();if(f&&o!=="none"&&o!==""){var z=l.getPropertyValue("content"),h=~["Sharp"].indexOf(f[2])?d:C,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?E1[h][f[2].toLowerCase()]:t8[h][t],x=H0(z),F=x.value,T=x.isSecondary,R=f[0].startsWith("FontAwesome"),N=o3(H,F),w=N;if(R){var _=D8(F);_.iconName&&_.prefix&&(N=_.iconName,H=_.prefix)}if(N&&!T&&(!n||n.getAttribute(i3)!==H||n.getAttribute(r3)!==w)){c.setAttribute(r,w),n&&c.removeChild(n);var y=s0(),c1=y.extra;c1.attributes[Z2]=a,$2(N,H).then(function(a1){var S2=m3(m(m({},y),{},{icons:{main:a1,mask:t3()},prefix:H,iconName:w,extra:c1,watchable:!0})),j=u.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(j,c.firstChild):c.appendChild(j),j.outerHTML=S2.map(function(x6){return Z1(x6)}).join(`
`),c.removeAttribute(r),e()}).catch(i)}else e()}else e()})}function M0(c){return Promise.all([D4(c,"::before"),D4(c,"::after")])}function p0(c){return c.parentNode!==document.head&&!~n8.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(Z2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function B4(c){if(Z)return new Promise(function(a,r){var e=b1(c.querySelectorAll("*")).filter(p0).map(M0),i=z3.begin("searchPseudoElements");m6(),Promise.all(e).then(function(){i(),c3(),a()}).catch(function(){i(),c3(),r()})})}var V0={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=B4,r}}},provides:function(a){a.pseudoElements2svg=function(r){var e=r.node,i=e===void 0?u:e;v.searchPseudoElements&&B4(i)}}},R4=!1,C0={mixout:function(){return{dom:{unwatch:function(){m6(),R4=!0}}}},hooks:function(){return{bootstrap:function(){A4(X2("mutationObserverCallbacks",{}))},noAuto:function(){a0()},watch:function(r){var e=r.observeMutationsRoot;R4?c3():A4(X2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},_4=function(a){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,i){var s=i.toLowerCase().split("-"),n=s[0],l=s.slice(1).join("-");if(n&&l==="h")return e.flipX=!0,e;if(n&&l==="v")return e.flipY=!0,e;if(l=parseFloat(l),isNaN(l))return e;switch(n){case"grow":e.size=e.size+l;break;case"shrink":e.size=e.size-l;break;case"left":e.x=e.x-l;break;case"right":e.x=e.x+l;break;case"up":e.y=e.y-l;break;case"down":e.y=e.y+l;break;case"rotate":e.rotate=e.rotate+l;break}return e},r)},u0={mixout:function(){return{parse:{transform:function(r){return _4(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-transform");return i&&(r.transform=_4(i)),r}}},provides:function(a){a.generateAbstractTransformGrouping=function(r){var e=r.main,i=r.transform,s=r.containerWidth,n=r.iconWidth,l={transform:"translate(".concat(s/2," 256)")},f="translate(".concat(i.x*32,", ").concat(i.y*32,") "),t="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),o="rotate(".concat(i.rotate," 0 0)"),z={transform:"".concat(f," ").concat(t," ").concat(o)},h={transform:"translate(".concat(n/2*-1," -256)")},H={outer:l,inner:z,path:h};return{tag:"g",attributes:m({},H.outer),children:[{tag:"g",attributes:m({},H.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:m(m({},e.icon.attributes),H.path)}]}]}}}},U2={x:0,y:0,width:"100%",height:"100%"};function q4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function d0(c){return c.tag==="g"?c.children:[c]}var L0={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-mask"),s=i?b2(i.split(" ").map(function(n){return n.trim()})):t3();return s.prefix||(s.prefix=$()),r.mask=s,r.maskId=e.getAttribute("data-fa-mask-id"),r}}},provides:function(a){a.generateAbstractMask=function(r){var e=r.children,i=r.attributes,s=r.main,n=r.mask,l=r.maskId,f=r.transform,t=s.width,o=s.icon,z=n.width,h=n.icon,H=u8({transform:f,containerWidth:z,iconWidth:t}),x={tag:"rect",attributes:m(m({},U2),{},{fill:"white"})},F=o.children?{children:o.children.map(q4)}:{},T={tag:"g",attributes:m({},H.inner),children:[q4(m({tag:o.tag,attributes:m(m({},o.attributes),H.path)},F))]},R={tag:"g",attributes:m({},H.outer),children:[T]},N="mask-".concat(l||U1()),w="clip-".concat(l||U1()),_={tag:"mask",attributes:m(m({},U2),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,R]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:d0(h)},_]};return e.push(y,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(N,")")},U2)}),{children:e,attributes:i}}}},g0={provides:function(a){var r=!1;Q.matchMedia&&(r=Q.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:m(m({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=m(m({},s),{},{attributeName:"opacity"}),l={tag:"circle",attributes:m(m({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||l.children.push({tag:"animate",attributes:m(m({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(l),e.push({tag:"path",attributes:m(m({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:m(m({},n),{},{values:"1;0;0;0;0;1;"})}]}),r||e.push({tag:"path",attributes:m(m({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},x0={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return r.symbol=s,r}}}},b0=[g8,t0,m0,z0,v0,V0,C0,u0,L0,g0,x0];_8(b0,{mixoutsTo:P});var K5=P.noAuto,Q5=P.config,$5=P.library,J5=P.dom,v6=P.parse,c7=P.findIconDefinition,a7=P.toHtml,h6=P.icon,e7=P.layer,N0=P.text,S0=P.counter;var k0=["*"],w0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},y0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},A0=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(r=>a[r]?r:null).filter(r=>r)},P0=c=>c.prefix!==void 0&&c.iconName!==void 0,F0=(c,a)=>P0(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},T0=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=e1({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),D0=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let i of e){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let s of i.icon[2])typeof s=="string"&&(this.definitions[i.prefix][s]=i)}}addIconPacks(...e){for(let i of e){let s=Object.keys(i).map(n=>i[n]);this.addIcons(...s)}}getIconDefinition(e,i){return e in this.definitions&&i in this.definitions[e]?this.definitions[e][i]:null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=e1({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),B0=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(i){return new(i||a)},a.\u0275dir=v1({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[c2]});let c=a;return c})(),R0=(()=>{let a=class a{constructor(e,i){this.renderer=e,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(i){return new(i||a)(M(x3),M(Y))},a.\u0275cmp=S({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[c2,k],ngContentSelectors:k0,decls:1,vars:0,template:function(i,s){i&1&&(r1(),O(0))},encapsulation:2});let c=a;return c})(),H6=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,i,s,n,l){this.sanitizer=e,this.config=i,this.iconLibrary=s,this.stackItem=n,this.classes=[],l!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){y0();return}if(e){let i=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(i);if(s!=null){let n=this.buildParams();this.renderIcon(s,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let i=F0(e,this.config.defaultPrefix);if("icon"in i)return i;let s=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return s??(w0(i),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?v6.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...A0(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,i){let s=h6(e,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};a.\u0275fac=function(i){return new(i||a)(M(_3),M(T0),M(D0),M(B0,8),M(R0,8))},a.\u0275cmp=S({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,s){i&2&&(w3("innerHTML",s.renderedIconHTML,u3),i1("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[c2,k],decls:0,vars:0,template:function(i,s){},encapsulation:2});let c=a;return c})();var M6=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=z1({type:a}),a.\u0275inj=m1({});let c=a;return c})();var p6={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var V6={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var C6={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]};var u6={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"]};var d6=(()=>{let a=class a{constructor(){this.faEnvelope=C6,this.faLinkedin=p6,this.faGithub=V6,this.faBriefcase=u6}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=S({type:a,selectors:[["app-footer"]],standalone:!0,features:[k],decls:15,vars:4,consts:[["href","https://gmast3rr.github.io/portfolio/",1,"contact"],[3,"icon"],["href","https://www.linkedin.com/in/lucas-ramallo-ab24a2218/",1,"contact"],["href","https://github.com/GmasT3rr",1,"contact"],["href","mailto:lucramallo14@gmail.com",1,"contact"],["href","https://www.fatsecret.com",2,"margin-top","0.5rem"],["src","https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.png","srcset",`
        https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_2x.png 2x,
        https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_3x.png 3x
      `,"border","0"]],template:function(i,s){i&1&&(p(0,"footer")(1,"a",0),b(2,"fa-icon",1),L(3,"Portfolio"),V(),p(4,"a",2),b(5,"fa-icon",1),L(6,"Lucas Ramallo"),V(),p(7,"a",3),b(8,"fa-icon",1),L(9,"GmasT3rr "),V(),p(10,"a",4),b(11,"fa-icon",1),L(12,"lucramallo14@gmail.com"),V(),p(13,"a",5),b(14,"img",6),V()()),i&2&&(q(2),E("icon",s.faBriefcase),q(3),E("icon",s.faLinkedin),q(3),E("icon",s.faGithub),q(3),E("icon",s.faEnvelope))},dependencies:[M6,H6],styles:["footer[_ngcontent-%COMP%]{width:100%;background-color:var(--default-lighten);display:flex;justify-content:center;align-items:center;flex-direction:column}footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{padding:.5rem;text-decoration:none;font-size:1.1rem;color:var(--text);transition:all .3s}footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-right:.35rem}footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]:hover{color:var(--proteins)}"]});let c=a;return c})();var L6=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=S({type:a,selectors:[["app-layout"]],standalone:!0,features:[k],decls:4,vars:0,consts:[[1,"container"]],template:function(i,s){i&1&&(b(0,"app-navbar"),p(1,"div",0),b(2,"router-outlet"),V(),b(3,"app-footer"))},dependencies:[v4,q3,d6],styles:[".container[_ngcontent-%COMP%]{margin:auto;padding:5rem 0;transition:all .3s;z-index:1}@media (min-width: 1440px){.container[_ngcontent-%COMP%]{width:42.5%}}@media (max-width: 1439px){.container[_ngcontent-%COMP%]{width:50%}app-navbar[_ngcontent-%COMP%]  .navbar mat-toolbar{width:66.6666%!important}}@media (max-width: 1250px){.container[_ngcontent-%COMP%]{width:66.6666%}app-navbar[_ngcontent-%COMP%]  .navbar mat-toolbar{width:75%!important}}@media (max-width: 1024px){.container[_ngcontent-%COMP%]{width:75%}app-navbar[_ngcontent-%COMP%]  .navbar mat-toolbar{width:83.3333%!important}}@media (max-width: 768px){.container[_ngcontent-%COMP%]{width:83.3333%}app-navbar[_ngcontent-%COMP%]  .navbar mat-toolbar{width:100%!important}}"]});let c=a;return c})();var g6=(()=>{let a=class a{constructor(){this._authService=D(l2)}ngOnInit(){this.startTokenCheck()}startTokenCheck(){this._authService.getToken(),setInterval(()=>{this._authService.isTokenExpired()&&(console.log("Token expired, fetching new token..."),this._authService.getToken())},5e3)}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=S({type:a,selectors:[["app-root"]],standalone:!0,features:[k],decls:1,vars:0,template:function(i,s){i&1&&b(0,"app-layout")},dependencies:[p1,L6]});let c=a;return c})();R3(g6,r4).catch(c=>console.error(c));
