jQuery(document).ready(function(a){a(".house_toggle").on("click",function(c){c.preventDefault();b()});a(".cd-dropdown .cd-close").on("click",function(c){c.preventDefault();b()});a(".has-children").children("a").on("click",function(c){c.preventDefault();var d=a(this);d.next("ul").removeClass("is-hidden").end().parent(".has-children").parent("ul").addClass("move-out")});a(".go-back").on("click",function(){var c=a(this),d=a(this).parent("ul").parent(".has-children").parent("ul");c.parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("move-out")});function b(){var c=(!a(".cd-dropdown").hasClass("dropdown-is-active"))?true:false;a(".cd-dropdown").toggleClass("dropdown-is-active",c);a(".house_toggle").toggleClass("dropdown-is-active",c);if(!c){a(".cd-dropdown").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){a(".has-children ul").addClass("is-hidden");a(".move-out").removeClass("move-out");a(".is-active").removeClass("is-active")})}}});(function(a){a.fn.menuAim=function(c){this.each(function(){b.call(this,c)});return this};function b(q){var c=a(this),f=null,n=[],i=null,s=null,p=a.extend({rowSelector:"> li",submenuSelector:"*",submenuDirection:"right",tolerance:75,enter:a.noop,exit:a.noop,activate:a.noop,deactivate:a.noop,exitMenu:a.noop},q);var j=3,h=300;var o=function(t){n.push({x:t.pageX,y:t.pageY});if(n.length>j){n.shift()}};var l=function(){if(s){clearTimeout(s)}if(p.exitMenu(this)){if(f){p.deactivate(f)}f=null}};var k=function(){if(s){clearTimeout(s)}p.enter(this);r(this)},m=function(){p.exit(this)};var g=function(){d(this)};var d=function(t){if(t==f){return}if(f){p.deactivate(f)}p.activate(t);f=t};var r=function(u){var t=e();if(t){s=setTimeout(function(){r(u)},t)}else{d(u)}};var e=function(){if(!f||!a(f).is(p.submenuSelector)){return 0}var A=c.offset(),F={x:A.left,y:A.top-p.tolerance},G={x:A.left+c.outerWidth(),y:F.y},y={x:A.left,y:A.top+c.outerHeight()+p.tolerance},z={x:A.left+c.outerWidth(),y:y.y},x=n[n.length-1],D=n[0];if(!x){return 0}if(!D){D=x}if(D.x<A.left||D.x>z.x||D.y<A.top||D.y>z.y){return 0}if(i&&x.x==i.x&&x.y==i.y){return 0}function E(H,I){return(I.y-H.y)/(I.x-H.x)}var t=G,v=z;if(p.submenuDirection=="left"){t=y;v=F}else{if(p.submenuDirection=="below"){t=z;v=y}else{if(p.submenuDirection=="above"){t=F;v=G}}}var u=E(x,t),w=E(x,v),B=E(D,t),C=E(D,v);if(u<B&&w>C){i=x;return h}i=null;return 0};c.mouseleave(l).find(p.rowSelector).mouseenter(k).mouseleave(m).click(g);a(document).mousemove(o)}})(jQuery);