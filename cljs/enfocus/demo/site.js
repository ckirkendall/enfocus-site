goog.provide('enfocus.demo.site');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('goog.dom');
enfocus.demo.site.scroll_to = (function scroll_to(){
return enfocus.core.chainable_standard.call(null,(function (nod){
return nod.scrollIntoView();
}));
});
enfocus.demo.site.reset_scroll = (function reset_scroll(){
return enfocus.core.chainable_standard.call(null,(function (nod){
return nod.scrollTop = 0;
}));
});
enfocus.demo.site.setup_pane = (function setup_pane(width,height){
var nods__2465__auto____2641 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2640){
enfocus.core.chainable_standard.call(null,(function (pnod__2612__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2465__auto____2643 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"),enfocus.core.en_fade_in.call(null,1000,20,null)));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2642){
return pnod2642;
}),nods__2465__auto____2643));
return enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"),enfocus.core.en_fade_in.call(null,1000,20,null));
})().call(null,pnod__2612__auto__);
}),1000);
})).call(null,enfocus.core.css_select.call(null,"",pnod2640,cljs.core.Vector.fromArray(["#menu"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.home_page).call(null,enfocus.core.css_select.call(null,"",pnod2640,cljs.core.Vector.fromArray(["#home-button"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.gstarted_page).call(null,enfocus.core.css_select.call(null,"",pnod2640,cljs.core.Vector.fromArray(["#gstarted-button"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_trans_page).call(null,enfocus.core.css_select.call(null,"",pnod2640,cljs.core.Vector.fromArray(["#doc-trans"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_events_page).call(null,enfocus.core.css_select.call(null,"",pnod2640,cljs.core.Vector.fromArray(["#doc-events"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_effects_page).call(null,enfocus.core.css_select.call(null,"",pnod2640,cljs.core.Vector.fromArray(["#doc-effects"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_template_page).call(null,enfocus.core.css_select.call(null,"",pnod2640,cljs.core.Vector.fromArray(["#doc-remote"])));
(function (pnod__2634__auto__){
return enfocus.core.en_resize.call(null,5,height,500,20,null).call(null,pnod__2634__auto__,(function (pnod__2634__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,20,null).call(null,pnod__2634__auto__,(function (pnod__2633__auto__){
return enfocus.core.en_content.call(null,enfocus.demo.site.home.call(null)).call(null,pnod__2633__auto__);
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2640,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2640;
}),nods__2465__auto____2641));
return document;
});
enfocus.demo.site.resize_pane = (function resize_pane(width,height){
var nods__2465__auto____2645 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2644){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_resize.call(null,width,height,200,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod2644,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2644;
}),nods__2465__auto____2645));
return document;
});
enfocus.demo.site.resize_content_pane = (function resize_content_pane(){
var size__2646 = goog.dom.getViewportSize.call(null);
var width__2647 = (size__2646.width - 40);
var height__2648 = (size__2646.height - 70);

return enfocus.demo.site.resize_pane.call(null,width__2647,height__2648);
});
enfocus.demo.site.init_content_pane = (function init_content_pane(){
var size__2651 = goog.dom.getViewportSize.call(null);
var width__2652 = (size__2651.width - 40);
var height__2653 = (size__2651.height - 70);

enfocus.demo.site.setup_pane.call(null,width__2652,height__2653);
enfocus.core.en_listen.call(null,"﷐'resize",enfocus.demo.site.resize_content_pane).call(null,window);
return window;
});
enfocus.demo.site.start = (function start(){
var nods__2465__auto____2655 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2654){
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod2654,cljs.core.Vector.fromArray(["#inner-circle"])));
enfocus.core.en_listen.call(null,"﷐'mouseenter",(function (p1__2649_SHARP_){
var nods__2465__auto____2657 = enfocus.core.nodes__GT_coll.call(null,p1__2649_SHARP_.currentTarget);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2656){
enfocus.core.en_resize.call(null,"﷐'curwidth",115,500,20,null).call(null,enfocus.core.css_select.call(null,"",pnod2656,cljs.core.Vector.fromArray([".sub"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_add_class.call(null,"blur-highlight"),enfocus.core.chainable_standard.call(null,(function (pnod__2612__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2465__auto____2659 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_remove_class.call(null,"blur-highlight"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2658){
return pnod2658;
}),nods__2465__auto____2659));
return enfocus.core.en_remove_class.call(null,"blur-highlight");
})().call(null,pnod__2612__auto__);
}),200);
}))).call(null,enfocus.core.css_select.call(null,"",pnod2656,cljs.core.Vector.fromArray(["h3"])));
return pnod2656;
}),nods__2465__auto____2657));
return p1__2649_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2654,cljs.core.Vector.fromArray([".marea"])));
enfocus.core.en_listen.call(null,"﷐'mouseleave",(function (p1__2650_SHARP_){
var nods__2465__auto____2661 = enfocus.core.nodes__GT_coll.call(null,p1__2650_SHARP_.currentTarget);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2660){
enfocus.core.en_resize.call(null,"﷐'curwidth",0,500,20,null).call(null,enfocus.core.css_select.call(null,"",pnod2660,cljs.core.Vector.fromArray([".sub"])));
return pnod2660;
}),nods__2465__auto____2661));
return p1__2650_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2654,cljs.core.Vector.fromArray([".marea"])));
return pnod2654;
}),nods__2465__auto____2655));
return document;
});
window.onload = enfocus.demo.site.start;
enfocus.core.load_remote_dom.call(null,"templates/home.html");
enfocus.demo.site.home = (function home(){
var vec__2664__2665 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
})]));
var id_sym2662__2666 = cljs.core.nth.call(null,vec__2664__2665,0,null);
var pnod2663__2667 = cljs.core.nth.call(null,vec__2664__2665,1,null);
var pnod2663__2668 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2663__2667):pnod2663__2667);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2662__2666,pnod2663__2668);
return enfocus.core.remove_node_return_child.call(null,pnod2663__2668);
} else
{return pnod2663__2668;
}
});
enfocus.demo.site.home_page = (function home_page(){
var nods__2465__auto____2670 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2669){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.home.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2669,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2669;
}),nods__2465__auto____2670));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/getting-started.html");
enfocus.demo.site.gstarted = (function gstarted(){
var vec__2674__2675 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
})]));
var id_sym2672__2676 = cljs.core.nth.call(null,vec__2674__2675,0,null);
var pnod2673__2677 = cljs.core.nth.call(null,vec__2674__2675,1,null);
var pnod2673__2678 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2673__2677):pnod2673__2677);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2672__2676,pnod2673__2678);
return enfocus.core.remove_node_return_child.call(null,pnod2673__2678);
} else
{return pnod2673__2678;
}
});
enfocus.demo.site.gstarted_page = (function gstarted_page(){
var nods__2465__auto____2680 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2679){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.gstarted.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2679,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (p1__2671_SHARP_){
enfocus.core.en_content.call(null,"I have been clicked").call(null,p1__2671_SHARP_.currentTarget);
return p1__2671_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2679,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2682 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2681){
(function (pnod__2634__auto__){
return enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,null).call(null,pnod__2634__auto__,(function (pnod__2633__auto__){
return enfocus.core.en_resize.call(null,5,"﷐'curheight",500,20,null).call(null,pnod__2633__auto__);
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2681,cljs.core.Vector.fromArray(["#rz-demo"])));
return pnod2681;
}),nods__2465__auto____2682));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2679,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.clone_for_demo).call(null,enfocus.core.css_select.call(null,"",pnod2679,cljs.core.Vector.fromArray(["#button3"])));
return pnod2679;
}),nods__2465__auto____2680));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/standard-transforms.html");
enfocus.demo.site.doc_trans = (function doc_trans(){
var vec__2685__2686 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
})]));
var id_sym2683__2687 = cljs.core.nth.call(null,vec__2685__2686,0,null);
var pnod2684__2688 = cljs.core.nth.call(null,vec__2685__2686,1,null);
var pnod2684__2689 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2684__2688):pnod2684__2688);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2683__2687,pnod2684__2689);
return enfocus.core.remove_node_return_child.call(null,pnod2684__2689);
} else
{return pnod2684__2689;
}
});
enfocus.demo.site.content_demo = (function content_demo(){
var nods__2465__auto____2691 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2690){
enfocus.core.en_content.call(null,"I have been clicked").call(null,enfocus.core.css_select.call(null,"",pnod2690,cljs.core.Vector.fromArray(["#button1"])));
return pnod2690;
}),nods__2465__auto____2691));
return document;
});
enfocus.demo.site.html_content_demo = (function html_content_demo(){
var nods__2465__auto____2693 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2692){
enfocus.core.en_html_content.call(null,"<span style='color: #ff3333'>I replaced the text</span>").call(null,enfocus.core.css_select.call(null,"",pnod2692,cljs.core.Vector.fromArray(["#html-content-demo"])));
return pnod2692;
}),nods__2465__auto____2693));
return document;
});
enfocus.demo.site.set_attr_demo = (function set_attr_demo(){
var nods__2465__auto____2695 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2694){
enfocus.core.en_set_attr.call(null,"﷐'foo","bar").call(null,enfocus.core.css_select.call(null,"",pnod2694,cljs.core.Vector.fromArray(["#button3"])));
return pnod2694;
}),nods__2465__auto____2695));
return document;
});
enfocus.demo.site.remove_attr_demo = (function remove_attr_demo(){
var nods__2465__auto____2697 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2696){
enfocus.core.en_remove_attr.call(null,"﷐'foo").call(null,enfocus.core.css_select.call(null,"",pnod2696,cljs.core.Vector.fromArray(["#button4"])));
return pnod2696;
}),nods__2465__auto____2697));
return document;
});
enfocus.demo.site.add_class_demo = (function add_class_demo(){
var nods__2465__auto____2699 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2698){
enfocus.core.en_add_class.call(null,"highlight").call(null,enfocus.core.css_select.call(null,"",pnod2698,cljs.core.Vector.fromArray(["#button5"])));
return pnod2698;
}),nods__2465__auto____2699));
return document;
});
enfocus.demo.site.remove_class_demo = (function remove_class_demo(){
var nods__2465__auto____2701 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2700){
enfocus.core.en_remove_class.call(null,"highlight").call(null,enfocus.core.css_select.call(null,"",pnod2700,cljs.core.Vector.fromArray(["#button6"])));
return pnod2700;
}),nods__2465__auto____2701));
return document;
});
enfocus.demo.site.do_demo = (function do_demo(){
var nods__2465__auto____2703 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2702){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_attr.call(null,"﷐'foo","bar"),enfocus.core.en_add_class.call(null,"highlight")).call(null,enfocus.core.css_select.call(null,"",pnod2702,cljs.core.Vector.fromArray(["#button7"])));
return pnod2702;
}),nods__2465__auto____2703));
return document;
});
enfocus.demo.site.append_demo = (function append_demo(){
var nods__2465__auto____2705 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2704){
enfocus.core.en_append.call(null,":append").call(null,enfocus.core.css_select.call(null,"",pnod2704,cljs.core.Vector.fromArray(["#button8"])));
return pnod2704;
}),nods__2465__auto____2705));
return document;
});
enfocus.demo.site.prepend_demo = (function prepend_demo(){
var nods__2465__auto____2707 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2706){
enfocus.core.en_prepend.call(null,"prepend:").call(null,enfocus.core.css_select.call(null,"",pnod2706,cljs.core.Vector.fromArray(["#button9"])));
return pnod2706;
}),nods__2465__auto____2707));
return document;
});
enfocus.demo.site.after_demo = (function after_demo(){
var nods__2465__auto____2709 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2708){
enfocus.core.en_after.call(null,":after").call(null,enfocus.core.css_select.call(null,"",pnod2708,cljs.core.Vector.fromArray(["#button10"])));
return pnod2708;
}),nods__2465__auto____2709));
return document;
});
enfocus.demo.site.before_demo = (function before_demo(){
var nods__2465__auto____2711 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2710){
enfocus.core.en_before.call(null,"before:").call(null,enfocus.core.css_select.call(null,"",pnod2710,cljs.core.Vector.fromArray(["#button11"])));
return pnod2710;
}),nods__2465__auto____2711));
return document;
});
enfocus.demo.site.sub_demo = (function sub_demo(){
var nods__2465__auto____2713 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2712){
enfocus.core.en_substitute.call(null,"I replaced the button").call(null,enfocus.core.css_select.call(null,"",pnod2712,cljs.core.Vector.fromArray(["#button12"])));
return pnod2712;
}),nods__2465__auto____2713));
return document;
});
enfocus.demo.site.clone_for_demo = (function clone_for_demo(){
var fruit_data__2714 = cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":5,"pear":6});

var nods__2465__auto____2716 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2715){
enfocus.core.chainable_standard.call(null,(function (pnod__2562__auto__){
var div__2563__auto____2717 = enfocus.core.create_hidden_dom.call(null,document.createDocumentFragment());

enfocus.core.log_debug.call(null,pnod__2562__auto__);
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,cljs.core.vec.call(null,fruit_data__2714)));
var G__2718__2719 = cljs.core.seq.call(null,cljs.core.vec.call(null,fruit_data__2714));

if(cljs.core.truth_(G__2718__2719))
{var fr__2720 = cljs.core.first.call(null,G__2718__2719);
var G__2718__2721 = G__2718__2719;

while(true){
enfocus.core.en_append.call(null,pnod__2562__auto__.cloneNode(true)).call(null,div__2563__auto____2717);
div__2563__auto____2717;
var nods__2465__auto____2723 = enfocus.core.nodes__GT_coll.call(null,goog.dom.getLastElementChild.call(null,div__2563__auto____2717));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fr__2720,G__2718__2721){
return (function (pnod2722){
enfocus.core.en_content.call(null,cljs.core.first.call(null,fr__2720)).call(null,enfocus.core.css_select.call(null,"",pnod2722,cljs.core.Vector.fromArray(["*:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.second.call(null,fr__2720))).call(null,enfocus.core.css_select.call(null,"",pnod2722,cljs.core.Vector.fromArray(["*:last-child"])));
return pnod2722;
});})(fr__2720,G__2718__2721))
,nods__2465__auto____2723));
goog.dom.getLastElementChild.call(null,div__2563__auto____2717);
var temp__3698__auto____2724 = cljs.core.next.call(null,G__2718__2721);

if(cljs.core.truth_(temp__3698__auto____2724))
{var G__2718__2725 = temp__3698__auto____2724;

{
var G__2726 = cljs.core.first.call(null,G__2718__2725);
var G__2727 = G__2718__2725;
fr__2720 = G__2726;
G__2718__2721 = G__2727;
continue;
}
} else
{}
break;
}
} else
{}
enfocus.core.log_debug.call(null,div__2563__auto____2717);
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,enfocus.core.remove_node_return_child.call(null,div__2563__auto____2717)),enfocus.core.en_remove_node.call(null)).call(null,pnod__2562__auto__);
return pnod__2562__auto__;
})).call(null,enfocus.core.css_select.call(null,"",pnod2715,cljs.core.Vector.fromArray(["#clone-for-demo tbody > tr:first-child"])));
return pnod2715;
}),nods__2465__auto____2716));
return document;
});
enfocus.demo.site.wrap_demo = (function wrap_demo(){
var nods__2465__auto____2729 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2728){
enfocus.core.en_wrap.call(null,"﷐'span",cljs.core.ObjMap.fromObject(["﷐'class"],{"﷐'class":"highlight"})).call(null,enfocus.core.css_select.call(null,"",pnod2728,cljs.core.Vector.fromArray(["#button14"])));
return pnod2728;
}),nods__2465__auto____2729));
return document;
});
enfocus.demo.site.unwrap_demo = (function unwrap_demo(){
var nods__2465__auto____2731 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2730){
enfocus.core.en_unwrap.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2730,cljs.core.Vector.fromArray(["#button15"])));
return pnod2730;
}),nods__2465__auto____2731));
return document;
});
enfocus.demo.site.set_style_demo = (function set_style_demo(){
var nods__2465__auto____2733 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2732){
enfocus.core.en_set_style.call(null,"﷐'border","2px solid blue").call(null,enfocus.core.css_select.call(null,"",pnod2732,cljs.core.Vector.fromArray(["#button16"])));
return pnod2732;
}),nods__2465__auto____2733));
return document;
});
enfocus.demo.site.remove_style_demo = (function remove_style_demo(){
var nods__2465__auto____2735 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2734){
enfocus.core.en_remove_style.call(null,"﷐'border").call(null,enfocus.core.css_select.call(null,"",pnod2734,cljs.core.Vector.fromArray(["#button17"])));
return pnod2734;
}),nods__2465__auto____2735));
return document;
});
enfocus.demo.site.doc_trans_page = (function doc_trans_page(){
var nods__2465__auto____2737 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2736){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_trans.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2739 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2738){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2738,cljs.core.Vector.fromArray(["#doc-at"])));
return pnod2738;
}),nods__2465__auto____2739));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#at-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2741 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2740){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2740,cljs.core.Vector.fromArray(["#doc-content"])));
return pnod2740;
}),nods__2465__auto____2741));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#content-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2743 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2742){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2742,cljs.core.Vector.fromArray(["#doc-html-content"])));
return pnod2742;
}),nods__2465__auto____2743));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#html-content-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2745 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2744){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2744,cljs.core.Vector.fromArray(["#doc-set-attr"])));
return pnod2744;
}),nods__2465__auto____2745));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#set-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2747 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2746){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2746,cljs.core.Vector.fromArray(["#doc-remove-attr"])));
return pnod2746;
}),nods__2465__auto____2747));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#remove-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2749 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2748){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2748,cljs.core.Vector.fromArray(["#doc-add-class"])));
return pnod2748;
}),nods__2465__auto____2749));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#add-class-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2751 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2750){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2750,cljs.core.Vector.fromArray(["#doc-remove-class"])));
return pnod2750;
}),nods__2465__auto____2751));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#remove-class-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2753 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2752){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2752,cljs.core.Vector.fromArray(["#doc-do"])));
return pnod2752;
}),nods__2465__auto____2753));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#do-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2755 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2754){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2754,cljs.core.Vector.fromArray(["#doc-append"])));
return pnod2754;
}),nods__2465__auto____2755));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#append-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2757 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2756){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2756,cljs.core.Vector.fromArray(["#doc-prepend"])));
return pnod2756;
}),nods__2465__auto____2757));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#prepend-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2759 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2758){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2758,cljs.core.Vector.fromArray(["#doc-after"])));
return pnod2758;
}),nods__2465__auto____2759));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#after-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2761 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2760){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2760,cljs.core.Vector.fromArray(["#doc-before"])));
return pnod2760;
}),nods__2465__auto____2761));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#before-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2763 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2762){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2762,cljs.core.Vector.fromArray(["#doc-sub"])));
return pnod2762;
}),nods__2465__auto____2763));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#substitute-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2765 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2764){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2764,cljs.core.Vector.fromArray(["#doc-clone-for"])));
return pnod2764;
}),nods__2465__auto____2765));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#clone-for-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2767 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2766){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2766,cljs.core.Vector.fromArray(["#doc-wrap"])));
return pnod2766;
}),nods__2465__auto____2767));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#wrap-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2769 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2768){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2768,cljs.core.Vector.fromArray(["#doc-unwrap"])));
return pnod2768;
}),nods__2465__auto____2769));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#unwrap-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2771 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2770){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2770,cljs.core.Vector.fromArray(["#doc-set-style"])));
return pnod2770;
}),nods__2465__auto____2771));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#set-style-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2773 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2772){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2772,cljs.core.Vector.fromArray(["#doc-remove-style"])));
return pnod2772;
}),nods__2465__auto____2773));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#remove-style-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.content_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.html_content_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.set_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button4"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.add_class_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button5"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_class_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button6"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.do_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button7"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.append_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button8"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.prepend_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button9"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.after_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button10"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.before_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button11"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.sub_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button12"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.clone_for_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button13"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.wrap_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button14"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.unwrap_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button15"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.set_style_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button16"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_style_demo).call(null,enfocus.core.css_select.call(null,"",pnod2736,cljs.core.Vector.fromArray(["#button17"])));
return pnod2736;
}),nods__2465__auto____2737));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/handling-events.html");
enfocus.demo.site.doc_event = (function doc_event(){
var vec__2776__2777 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
})]));
var id_sym2774__2778 = cljs.core.nth.call(null,vec__2776__2777,0,null);
var pnod2775__2779 = cljs.core.nth.call(null,vec__2776__2777,1,null);
var pnod2775__2780 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2775__2779):pnod2775__2779);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2774__2778,pnod2775__2780);
return enfocus.core.remove_node_return_child.call(null,pnod2775__2780);
} else
{return pnod2775__2780;
}
});
enfocus.demo.site.remove_demo = (function remove_demo(){
var nods__2465__auto____2785 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2784){
enfocus.core.en_remove_listener.call(null,"﷐'mouseenter","﷐'mouseleave").call(null,enfocus.core.css_select.call(null,"",pnod2784,cljs.core.Vector.fromArray(["#remove-demo"])));
return pnod2784;
}),nods__2465__auto____2785));
return document;
});
enfocus.demo.site.doc_events_page = (function doc_events_page(){
var nods__2465__auto____2787 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2786){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_event.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2786,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2789 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2788){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2788,cljs.core.Vector.fromArray(["#doc-listen"])));
return pnod2788;
}),nods__2465__auto____2789));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2786,cljs.core.Vector.fromArray(["#listen-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2791 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2790){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2790,cljs.core.Vector.fromArray(["#doc-remove"])));
return pnod2790;
}),nods__2465__auto____2791));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2786,cljs.core.Vector.fromArray(["#remove-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2793 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2792){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2792,cljs.core.Vector.fromArray(["#doc-support"])));
return pnod2792;
}),nods__2465__auto____2793));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2786,cljs.core.Vector.fromArray(["#support-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (p1__2781_SHARP_){
enfocus.core.en_content.call(null,"I have been replaced").call(null,p1__2781_SHARP_.currentTarget);
return p1__2781_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2786,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'mouseenter",(function (p1__2782_SHARP_){
enfocus.core.en_add_class.call(null,"highlight").call(null,p1__2782_SHARP_.currentTarget);
return p1__2782_SHARP_.currentTarget;
})),enfocus.core.en_listen.call(null,"﷐'mouseleave",(function (p1__2783_SHARP_){
enfocus.core.en_remove_class.call(null,"highlight").call(null,p1__2783_SHARP_.currentTarget);
return p1__2783_SHARP_.currentTarget;
}))).call(null,enfocus.core.css_select.call(null,"",pnod2786,cljs.core.Vector.fromArray(["#remove-demo"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_demo).call(null,enfocus.core.css_select.call(null,"",pnod2786,cljs.core.Vector.fromArray(["#button2"])));
return pnod2786;
}),nods__2465__auto____2787));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/effects-timing.html");
enfocus.demo.site.doc_effect = (function doc_effect(){
var vec__2796__2797 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
})]));
var id_sym2794__2798 = cljs.core.nth.call(null,vec__2796__2797,0,null);
var pnod2795__2799 = cljs.core.nth.call(null,vec__2796__2797,1,null);
var pnod2795__2800 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2795__2799):pnod2795__2799);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2794__2798,pnod2795__2800);
return enfocus.core.remove_node_return_child.call(null,pnod2795__2800);
} else
{return pnod2795__2800;
}
});
enfocus.demo.site.resize_demo = (function resize_demo(){
var nods__2465__auto____2802 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2801){
enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,enfocus.core.en_resize.call(null,5,"﷐'curheight",500,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod2801,cljs.core.Vector.fromArray(["#rz-demo"])));
return pnod2801;
}),nods__2465__auto____2802));
return document;
});
enfocus.demo.site.move_demo = (function move_demo(){
var nods__2465__auto____2804 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2803){
enfocus.core.en_move.call(null,300,"﷐'cury",500,20,enfocus.core.en_move.call(null,-20,"﷐'cury",500,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod2803,cljs.core.Vector.fromArray(["#mv-demo"])));
return pnod2803;
}),nods__2465__auto____2804));
return document;
});
enfocus.demo.site.fade_demo = (function fade_demo(){
var nods__2465__auto____2806 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2805){
enfocus.core.en_fade_out.call(null,500,20,enfocus.core.en_fade_in.call(null,500,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod2805,cljs.core.Vector.fromArray(["#fade-demo"])));
return pnod2805;
}),nods__2465__auto____2806));
return document;
});
enfocus.demo.site.delay_demo = (function delay_demo(){
var nods__2465__auto____2808 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2807){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,null),enfocus.core.chainable_standard.call(null,(function (pnod__2612__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2465__auto____2810 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_resize.call(null,50,"﷐'curheight",500,20,null));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2809){
return pnod2809;
}),nods__2465__auto____2810));
return enfocus.core.en_resize.call(null,50,"﷐'curheight",500,20,null);
})().call(null,pnod__2612__auto__);
}),2000);
}))).call(null,enfocus.core.css_select.call(null,"",pnod2807,cljs.core.Vector.fromArray(["#delay-demo"])));
return pnod2807;
}),nods__2465__auto____2808));
return document;
});
enfocus.demo.site.chain_demo = (function chain_demo(){
var nods__2465__auto____2812 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2811){
(function (pnod__2634__auto__){
return enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,null).call(null,pnod__2634__auto__,(function (pnod__2633__auto__){
return enfocus.core.en_resize.call(null,5,"﷐'curheight",500,20,null).call(null,pnod__2633__auto__);
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2811,cljs.core.Vector.fromArray(["#chain-demo"])));
return pnod2811;
}),nods__2465__auto____2812));
return document;
});
enfocus.demo.site.doc_effects_page = (function doc_effects_page(){
var nods__2465__auto____2814 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2813){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_effect.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2813,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2816 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2815){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2815,cljs.core.Vector.fromArray(["#doc-resize"])));
return pnod2815;
}),nods__2465__auto____2816));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2813,cljs.core.Vector.fromArray(["#resize-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2818 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2817){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2817,cljs.core.Vector.fromArray(["#doc-move"])));
return pnod2817;
}),nods__2465__auto____2818));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2813,cljs.core.Vector.fromArray(["#move-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2820 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2819){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2819,cljs.core.Vector.fromArray(["#doc-fade"])));
return pnod2819;
}),nods__2465__auto____2820));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2813,cljs.core.Vector.fromArray(["#fade-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2822 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2821){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2821,cljs.core.Vector.fromArray(["#doc-delay"])));
return pnod2821;
}),nods__2465__auto____2822));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2813,cljs.core.Vector.fromArray(["#delay-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2824 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2823){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2823,cljs.core.Vector.fromArray(["#doc-chain"])));
return pnod2823;
}),nods__2465__auto____2824));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2813,cljs.core.Vector.fromArray(["#chain-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.resize_demo).call(null,enfocus.core.css_select.call(null,"",pnod2813,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.move_demo).call(null,enfocus.core.css_select.call(null,"",pnod2813,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.fade_demo).call(null,enfocus.core.css_select.call(null,"",pnod2813,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.delay_demo).call(null,enfocus.core.css_select.call(null,"",pnod2813,cljs.core.Vector.fromArray(["#button4"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.chain_demo).call(null,enfocus.core.css_select.call(null,"",pnod2813,cljs.core.Vector.fromArray(["#button5"])));
return pnod2813;
}),nods__2465__auto____2814));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/templates-snippets.html");
enfocus.demo.site.doc_template = (function doc_template(){
var vec__2827__2828 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
})]));
var id_sym2825__2829 = cljs.core.nth.call(null,vec__2827__2828,0,null);
var pnod2826__2830 = cljs.core.nth.call(null,vec__2827__2828,1,null);
var pnod2826__2831 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2826__2830):pnod2826__2830);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2825__2829,pnod2826__2831);
return enfocus.core.remove_node_return_child.call(null,pnod2826__2831);
} else
{return pnod2826__2831;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.template_demo = (function template_demo(fruit_data){
var vec__2834__2835 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})]));
var id_sym2832__2836 = cljs.core.nth.call(null,vec__2834__2835,0,null);
var pnod2833__2837 = cljs.core.nth.call(null,vec__2834__2835,1,null);
var pnod2833__2838 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2833__2837):pnod2833__2837);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2832__2836,pnod2833__2838,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2832__2836,pnod2833__2838,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.en_remove_node.call(null).call(null,enfocus.core.css_select.call(null,id_sym2832__2836,pnod2833__2838,cljs.core.Vector.fromArray(["tbody > tr:not(:first-child)"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,fruit_data)))).call(null,enfocus.core.css_select.call(null,id_sym2832__2836,pnod2833__2838,cljs.core.Vector.fromArray(["tfoot tr > *:last-child"])));
enfocus.core.chainable_standard.call(null,(function (pnod__2562__auto__){
var div__2563__auto____2839 = enfocus.core.create_hidden_dom.call(null,document.createDocumentFragment());

enfocus.core.log_debug.call(null,pnod__2562__auto__);
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,cljs.core.vec.call(null,fruit_data)));
var G__2840__2841 = cljs.core.seq.call(null,cljs.core.vec.call(null,fruit_data));

if(cljs.core.truth_(G__2840__2841))
{var fr__2842 = cljs.core.first.call(null,G__2840__2841);
var G__2840__2843 = G__2840__2841;

while(true){
enfocus.core.en_append.call(null,pnod__2562__auto__.cloneNode(true)).call(null,div__2563__auto____2839);
div__2563__auto____2839;
var nods__2465__auto____2845 = enfocus.core.nodes__GT_coll.call(null,goog.dom.getLastElementChild.call(null,div__2563__auto____2839));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fr__2842,G__2840__2843){
return (function (pnod2844){
enfocus.core.en_content.call(null,cljs.core.first.call(null,fr__2842)).call(null,enfocus.core.css_select.call(null,"",pnod2844,cljs.core.Vector.fromArray(["*:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.second.call(null,fr__2842))).call(null,enfocus.core.css_select.call(null,"",pnod2844,cljs.core.Vector.fromArray(["*:last-child"])));
return pnod2844;
});})(fr__2842,G__2840__2843))
,nods__2465__auto____2845));
goog.dom.getLastElementChild.call(null,div__2563__auto____2839);
var temp__3698__auto____2846 = cljs.core.next.call(null,G__2840__2843);

if(cljs.core.truth_(temp__3698__auto____2846))
{var G__2840__2847 = temp__3698__auto____2846;

{
var G__2848 = cljs.core.first.call(null,G__2840__2847);
var G__2849 = G__2840__2847;
fr__2842 = G__2848;
G__2840__2843 = G__2849;
continue;
}
} else
{}
break;
}
} else
{}
enfocus.core.log_debug.call(null,div__2563__auto____2839);
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,enfocus.core.remove_node_return_child.call(null,div__2563__auto____2839)),enfocus.core.en_remove_node.call(null)).call(null,pnod__2562__auto__);
return pnod__2562__auto__;
})).call(null,enfocus.core.css_select.call(null,id_sym2832__2836,pnod2833__2838,cljs.core.Vector.fromArray(["tbody > tr:first-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2832__2836,pnod2833__2838);
return enfocus.core.remove_node_return_child.call(null,pnod2833__2838);
} else
{return pnod2833__2838;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.snippet2 = (function snippet2(fruit,quantity){
var vec__2853__2854 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})]));
var id_sym2851__2855 = cljs.core.nth.call(null,vec__2853__2854,0,null);
var pnod2852__2856 = cljs.core.nth.call(null,vec__2853__2854,1,null);
var pnod2852__2857 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2852__2856):pnod2852__2856);

enfocus.core.en_content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2851__2855,pnod2852__2857,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2851__2855,pnod2852__2857,cljs.core.Vector.fromArray(["tr > *:last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2851__2855,pnod2852__2857);
return enfocus.core.remove_node_return_child.call(null,pnod2852__2857);
} else
{return pnod2852__2857;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.template_demo2 = (function template_demo2(fruit_data){
var vec__2860__2861 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})]));
var id_sym2858__2862 = cljs.core.nth.call(null,vec__2860__2861,0,null);
var pnod2859__2863 = cljs.core.nth.call(null,vec__2860__2861,1,null);
var pnod2859__2864 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2859__2863):pnod2859__2863);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2858__2862,pnod2859__2864,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2858__2862,pnod2859__2864,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,fruit_data)))).call(null,enfocus.core.css_select.call(null,id_sym2858__2862,pnod2859__2864,cljs.core.Vector.fromArray(["tfoot tr > *:last-child"])));
enfocus.core.en_content.call(null,cljs.core.map.call(null,(function (p1__2850_SHARP_){
return enfocus.demo.site.snippet2.call(null,p1__2850_SHARP_,fruit_data.call(null,p1__2850_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym2858__2862,pnod2859__2864,cljs.core.Vector.fromArray(["tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2858__2862,pnod2859__2864);
return enfocus.core.remove_node_return_child.call(null,pnod2859__2864);
} else
{return pnod2859__2864;
}
});
enfocus.demo.site.doc_template_page = (function doc_template_page(){
var nods__2465__auto____2866 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2865){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_template.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2865,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2868 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2867){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2867,cljs.core.Vector.fromArray(["#doc-template"])));
return pnod2867;
}),nods__2465__auto____2868));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2865,cljs.core.Vector.fromArray(["#template-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2870 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2869){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2869,cljs.core.Vector.fromArray(["#doc-snippet"])));
return pnod2869;
}),nods__2465__auto____2870));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2865,cljs.core.Vector.fromArray(["#snippet-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2872 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2871){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2871,cljs.core.Vector.fromArray(["#doc-load"])));
return pnod2871;
}),nods__2465__auto____2872));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2865,cljs.core.Vector.fromArray(["#load-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2874 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2873){
enfocus.core.en_content.call(null,enfocus.demo.site.template_demo.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":8,"pear":9}))).call(null,enfocus.core.css_select.call(null,"",pnod2873,cljs.core.Vector.fromArray(["#template-demo"])));
return pnod2873;
}),nods__2465__auto____2874));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2865,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____2876 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2875){
enfocus.core.en_content.call(null,enfocus.demo.site.template_demo2.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":6,"pear":5}))).call(null,enfocus.core.css_select.call(null,"",pnod2875,cljs.core.Vector.fromArray(["#snippet-demo"])));
return pnod2875;
}),nods__2465__auto____2876));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2865,cljs.core.Vector.fromArray(["#button2"])));
return pnod2865;
}),nods__2465__auto____2866));
return document;
});
