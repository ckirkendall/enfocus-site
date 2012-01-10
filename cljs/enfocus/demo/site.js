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
var nods__2470__auto____2674 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2673){
enfocus.core.chainable_standard.call(null,(function (pnod__2629__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2470__auto____2676 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"),enfocus.core.en_fade_in.call(null,1000,20,null)));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2675){
return pnod2675;
}),nods__2470__auto____2676));
return enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"),enfocus.core.en_fade_in.call(null,1000,20,null));
})().call(null,pnod__2629__auto__);
}),1000);
})).call(null,enfocus.core.css_select.call(null,"",pnod2673,cljs.core.Vector.fromArray(["#menu"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.home_page).call(null,enfocus.core.css_select.call(null,"",pnod2673,cljs.core.Vector.fromArray(["#home-button"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.gstarted_page).call(null,enfocus.core.css_select.call(null,"",pnod2673,cljs.core.Vector.fromArray(["#gstarted-button"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_trans_page).call(null,enfocus.core.css_select.call(null,"",pnod2673,cljs.core.Vector.fromArray(["#doc-trans"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_events_page).call(null,enfocus.core.css_select.call(null,"",pnod2673,cljs.core.Vector.fromArray(["#doc-events"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_effects_page).call(null,enfocus.core.css_select.call(null,"",pnod2673,cljs.core.Vector.fromArray(["#doc-effects"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_template_page).call(null,enfocus.core.css_select.call(null,"",pnod2673,cljs.core.Vector.fromArray(["#doc-remote"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_from_page).call(null,enfocus.core.css_select.call(null,"",pnod2673,cljs.core.Vector.fromArray(["#doc-extract"])));
(function (pnod__2651__auto__){
return enfocus.core.en_resize.call(null,5,height,500,20,null).call(null,pnod__2651__auto__,(function (pnod__2651__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,20,null).call(null,pnod__2651__auto__,(function (pnod__2650__auto__){
return enfocus.core.en_content.call(null,enfocus.demo.site.home.call(null)).call(null,pnod__2650__auto__);
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2673,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2673;
}),nods__2470__auto____2674));
return document;
});
enfocus.demo.site.resize_pane = (function resize_pane(width,height){
var nods__2470__auto____2678 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2677){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_resize.call(null,width,height,200,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod2677,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2677;
}),nods__2470__auto____2678));
return document;
});
enfocus.demo.site.resize_content_pane = (function resize_content_pane(){
var size__2679 = goog.dom.getViewportSize.call(null);
var width__2680 = (size__2679.width - 40);
var height__2681 = (size__2679.height - 70);

return enfocus.demo.site.resize_pane.call(null,width__2680,height__2681);
});
enfocus.demo.site.init_content_pane = (function init_content_pane(){
var size__2684 = goog.dom.getViewportSize.call(null);
var width__2685 = (size__2684.width - 40);
var height__2686 = (size__2684.height - 70);

enfocus.demo.site.setup_pane.call(null,width__2685,height__2686);
enfocus.core.en_listen.call(null,"﷐'resize",enfocus.demo.site.resize_content_pane).call(null,window);
return window;
});
enfocus.demo.site.start = (function start(){
var nods__2470__auto____2688 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2687){
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod2687,cljs.core.Vector.fromArray(["#inner-circle"])));
enfocus.core.en_listen.call(null,"﷐'mouseenter",(function (p1__2682_SHARP_){
var nods__2470__auto____2690 = enfocus.core.nodes__GT_coll.call(null,p1__2682_SHARP_.currentTarget);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2689){
enfocus.core.en_resize.call(null,"﷐'curwidth",145,500,20,null).call(null,enfocus.core.css_select.call(null,"",pnod2689,cljs.core.Vector.fromArray([".sub"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_add_class.call(null,"blur-highlight"),enfocus.core.chainable_standard.call(null,(function (pnod__2629__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2470__auto____2692 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_remove_class.call(null,"blur-highlight"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2691){
return pnod2691;
}),nods__2470__auto____2692));
return enfocus.core.en_remove_class.call(null,"blur-highlight");
})().call(null,pnod__2629__auto__);
}),200);
}))).call(null,enfocus.core.css_select.call(null,"",pnod2689,cljs.core.Vector.fromArray(["h3"])));
return pnod2689;
}),nods__2470__auto____2690));
return p1__2682_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2687,cljs.core.Vector.fromArray([".marea"])));
enfocus.core.en_listen.call(null,"﷐'mouseleave",(function (p1__2683_SHARP_){
var nods__2470__auto____2694 = enfocus.core.nodes__GT_coll.call(null,p1__2683_SHARP_.currentTarget);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2693){
enfocus.core.en_resize.call(null,"﷐'curwidth",0,500,20,null).call(null,enfocus.core.css_select.call(null,"",pnod2693,cljs.core.Vector.fromArray([".sub"])));
return pnod2693;
}),nods__2470__auto____2694));
return p1__2683_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2687,cljs.core.Vector.fromArray([".marea"])));
return pnod2687;
}),nods__2470__auto____2688));
return document;
});
window.onload = enfocus.demo.site.start;
enfocus.core.load_remote_dom.call(null,"templates/home.html");
enfocus.demo.site.home = (function home(){
var vec__2697__2698 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
})]));
var id_sym2695__2699 = cljs.core.nth.call(null,vec__2697__2698,0,null);
var pnod2696__2700 = cljs.core.nth.call(null,vec__2697__2698,1,null);
var pnod2696__2701 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2696__2700):pnod2696__2700);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2695__2699,pnod2696__2701);
return enfocus.core.remove_node_return_child.call(null,pnod2696__2701);
} else
{return pnod2696__2701;
}
});
enfocus.demo.site.home_page = (function home_page(){
var nods__2470__auto____2703 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2702){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.home.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2702,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2702;
}),nods__2470__auto____2703));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/getting-started.html");
enfocus.demo.site.gstarted = (function gstarted(){
var vec__2707__2708 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
})]));
var id_sym2705__2709 = cljs.core.nth.call(null,vec__2707__2708,0,null);
var pnod2706__2710 = cljs.core.nth.call(null,vec__2707__2708,1,null);
var pnod2706__2711 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2706__2710):pnod2706__2710);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2705__2709,pnod2706__2711);
return enfocus.core.remove_node_return_child.call(null,pnod2706__2711);
} else
{return pnod2706__2711;
}
});
enfocus.demo.site.gstarted_page = (function gstarted_page(){
var nods__2470__auto____2713 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2712){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.gstarted.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2712,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (p1__2704_SHARP_){
enfocus.core.en_content.call(null,"I have been clicked").call(null,p1__2704_SHARP_.currentTarget);
return p1__2704_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2712,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2715 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2714){
(function (pnod__2651__auto__){
return enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,null).call(null,pnod__2651__auto__,(function (pnod__2650__auto__){
return enfocus.core.en_resize.call(null,5,"﷐'curheight",500,20,null).call(null,pnod__2650__auto__);
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2714,cljs.core.Vector.fromArray(["#rz-demo"])));
return pnod2714;
}),nods__2470__auto____2715));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2712,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.clone_for_demo).call(null,enfocus.core.css_select.call(null,"",pnod2712,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_prop_demo).call(null,enfocus.core.css_select.call(null,"",pnod2712,cljs.core.Vector.fromArray(["#button4"])));
return pnod2712;
}),nods__2470__auto____2713));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/standard-transforms.html");
enfocus.demo.site.doc_trans = (function doc_trans(){
var vec__2718__2719 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
})]));
var id_sym2716__2720 = cljs.core.nth.call(null,vec__2718__2719,0,null);
var pnod2717__2721 = cljs.core.nth.call(null,vec__2718__2719,1,null);
var pnod2717__2722 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2717__2721):pnod2717__2721);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2716__2720,pnod2717__2722);
return enfocus.core.remove_node_return_child.call(null,pnod2717__2722);
} else
{return pnod2717__2722;
}
});
enfocus.demo.site.content_demo = (function content_demo(){
var nods__2470__auto____2724 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2723){
enfocus.core.en_content.call(null,"I have been clicked").call(null,enfocus.core.css_select.call(null,"",pnod2723,cljs.core.Vector.fromArray(["#button1"])));
return pnod2723;
}),nods__2470__auto____2724));
return document;
});
enfocus.demo.site.html_content_demo = (function html_content_demo(){
var nods__2470__auto____2726 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2725){
enfocus.core.en_html_content.call(null,"<span style='color: #ff3333'>I replaced the text</span>").call(null,enfocus.core.css_select.call(null,"",pnod2725,cljs.core.Vector.fromArray(["#html-content-demo"])));
return pnod2725;
}),nods__2470__auto____2726));
return document;
});
enfocus.demo.site.set_attr_demo = (function set_attr_demo(){
var nods__2470__auto____2728 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2727){
enfocus.core.en_set_attr.call(null,"﷐'foo","bar").call(null,enfocus.core.css_select.call(null,"",pnod2727,cljs.core.Vector.fromArray(["#button3"])));
return pnod2727;
}),nods__2470__auto____2728));
return document;
});
enfocus.demo.site.remove_attr_demo = (function remove_attr_demo(){
var nods__2470__auto____2730 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2729){
enfocus.core.en_remove_attr.call(null,"﷐'foo").call(null,enfocus.core.css_select.call(null,"",pnod2729,cljs.core.Vector.fromArray(["#button4"])));
return pnod2729;
}),nods__2470__auto____2730));
return document;
});
enfocus.demo.site.add_class_demo = (function add_class_demo(){
var nods__2470__auto____2732 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2731){
enfocus.core.en_add_class.call(null,"highlight").call(null,enfocus.core.css_select.call(null,"",pnod2731,cljs.core.Vector.fromArray(["#button5"])));
return pnod2731;
}),nods__2470__auto____2732));
return document;
});
enfocus.demo.site.remove_class_demo = (function remove_class_demo(){
var nods__2470__auto____2734 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2733){
enfocus.core.en_remove_class.call(null,"highlight").call(null,enfocus.core.css_select.call(null,"",pnod2733,cljs.core.Vector.fromArray(["#button6"])));
return pnod2733;
}),nods__2470__auto____2734));
return document;
});
enfocus.demo.site.do_demo = (function do_demo(){
var nods__2470__auto____2736 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2735){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_attr.call(null,"﷐'foo","bar"),enfocus.core.en_add_class.call(null,"highlight")).call(null,enfocus.core.css_select.call(null,"",pnod2735,cljs.core.Vector.fromArray(["#button7"])));
return pnod2735;
}),nods__2470__auto____2736));
return document;
});
enfocus.demo.site.append_demo = (function append_demo(){
var nods__2470__auto____2738 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2737){
enfocus.core.en_append.call(null,":append").call(null,enfocus.core.css_select.call(null,"",pnod2737,cljs.core.Vector.fromArray(["#button8"])));
return pnod2737;
}),nods__2470__auto____2738));
return document;
});
enfocus.demo.site.prepend_demo = (function prepend_demo(){
var nods__2470__auto____2740 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2739){
enfocus.core.en_prepend.call(null,"prepend:").call(null,enfocus.core.css_select.call(null,"",pnod2739,cljs.core.Vector.fromArray(["#button9"])));
return pnod2739;
}),nods__2470__auto____2740));
return document;
});
enfocus.demo.site.after_demo = (function after_demo(){
var nods__2470__auto____2742 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2741){
enfocus.core.en_after.call(null,":after").call(null,enfocus.core.css_select.call(null,"",pnod2741,cljs.core.Vector.fromArray(["#button10"])));
return pnod2741;
}),nods__2470__auto____2742));
return document;
});
enfocus.demo.site.before_demo = (function before_demo(){
var nods__2470__auto____2744 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2743){
enfocus.core.en_before.call(null,"before:").call(null,enfocus.core.css_select.call(null,"",pnod2743,cljs.core.Vector.fromArray(["#button11"])));
return pnod2743;
}),nods__2470__auto____2744));
return document;
});
enfocus.demo.site.sub_demo = (function sub_demo(){
var nods__2470__auto____2746 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2745){
enfocus.core.en_substitute.call(null,"I replaced the button").call(null,enfocus.core.css_select.call(null,"",pnod2745,cljs.core.Vector.fromArray(["#button12"])));
return pnod2745;
}),nods__2470__auto____2746));
return document;
});
enfocus.demo.site.clone_for_demo = (function clone_for_demo(){
var fruit_data__2747 = cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":5,"pear":6});

var nods__2470__auto____2749 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2748){
enfocus.core.chainable_standard.call(null,(function (pnod__2579__auto__){
var div__2580__auto____2750 = enfocus.core.create_hidden_dom.call(null,document.createDocumentFragment());

enfocus.core.log_debug.call(null,pnod__2579__auto__);
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,cljs.core.vec.call(null,fruit_data__2747)));
var G__2751__2752 = cljs.core.seq.call(null,cljs.core.vec.call(null,fruit_data__2747));

if(cljs.core.truth_(G__2751__2752))
{var fr__2753 = cljs.core.first.call(null,G__2751__2752);
var G__2751__2754 = G__2751__2752;

while(true){
enfocus.core.en_append.call(null,pnod__2579__auto__.cloneNode(true)).call(null,div__2580__auto____2750);
div__2580__auto____2750;
var nods__2470__auto____2756 = enfocus.core.nodes__GT_coll.call(null,goog.dom.getLastElementChild.call(null,div__2580__auto____2750));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fr__2753,G__2751__2754){
return (function (pnod2755){
enfocus.core.en_content.call(null,cljs.core.first.call(null,fr__2753)).call(null,enfocus.core.css_select.call(null,"",pnod2755,cljs.core.Vector.fromArray(["*:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.second.call(null,fr__2753))).call(null,enfocus.core.css_select.call(null,"",pnod2755,cljs.core.Vector.fromArray(["*:last-child"])));
return pnod2755;
});})(fr__2753,G__2751__2754))
,nods__2470__auto____2756));
goog.dom.getLastElementChild.call(null,div__2580__auto____2750);
var temp__3698__auto____2757 = cljs.core.next.call(null,G__2751__2754);

if(cljs.core.truth_(temp__3698__auto____2757))
{var G__2751__2758 = temp__3698__auto____2757;

{
var G__2759 = cljs.core.first.call(null,G__2751__2758);
var G__2760 = G__2751__2758;
fr__2753 = G__2759;
G__2751__2754 = G__2760;
continue;
}
} else
{}
break;
}
} else
{}
enfocus.core.log_debug.call(null,div__2580__auto____2750);
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,enfocus.core.remove_node_return_child.call(null,div__2580__auto____2750)),enfocus.core.en_remove_node.call(null)).call(null,pnod__2579__auto__);
return pnod__2579__auto__;
})).call(null,enfocus.core.css_select.call(null,"",pnod2748,cljs.core.Vector.fromArray(["#clone-for-demo tbody > tr:first-child"])));
return pnod2748;
}),nods__2470__auto____2749));
return document;
});
enfocus.demo.site.wrap_demo = (function wrap_demo(){
var nods__2470__auto____2762 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2761){
enfocus.core.en_wrap.call(null,"﷐'span",cljs.core.ObjMap.fromObject(["﷐'class"],{"﷐'class":"highlight"})).call(null,enfocus.core.css_select.call(null,"",pnod2761,cljs.core.Vector.fromArray(["#button14"])));
return pnod2761;
}),nods__2470__auto____2762));
return document;
});
enfocus.demo.site.unwrap_demo = (function unwrap_demo(){
var nods__2470__auto____2764 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2763){
enfocus.core.en_unwrap.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2763,cljs.core.Vector.fromArray(["#button15"])));
return pnod2763;
}),nods__2470__auto____2764));
return document;
});
enfocus.demo.site.set_style_demo = (function set_style_demo(){
var nods__2470__auto____2766 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2765){
enfocus.core.en_set_style.call(null,"﷐'border","2px solid blue").call(null,enfocus.core.css_select.call(null,"",pnod2765,cljs.core.Vector.fromArray(["#button16"])));
return pnod2765;
}),nods__2470__auto____2766));
return document;
});
enfocus.demo.site.remove_style_demo = (function remove_style_demo(){
var nods__2470__auto____2770 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2769){
enfocus.core.en_remove_style.call(null,"﷐'border").call(null,enfocus.core.css_select.call(null,"",pnod2769,cljs.core.Vector.fromArray(["#button17"])));
return pnod2769;
}),nods__2470__auto____2770));
return document;
});
enfocus.demo.site.filter_demo = (function filter_demo(){
var nods__2470__auto____2772 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2771){
enfocus.core.en_filter.call(null,(function (p1__2767_SHARP_){
return (0 > p1__2767_SHARP_.value.indexOf("@"));
}),enfocus.core.en_set_style.call(null,"﷐'background-color","red")).call(null,enfocus.core.css_select.call(null,"",pnod2771,cljs.core.Vector.fromArray(["#email-field"])));
enfocus.core.en_filter.call(null,(function (p1__2768_SHARP_){
return (0 <= p1__2768_SHARP_.value.indexOf("@"));
}),enfocus.core.en_set_style.call(null,"﷐'background-color","green")).call(null,enfocus.core.css_select.call(null,"",pnod2771,cljs.core.Vector.fromArray(["#email-field"])));
return pnod2771;
}),nods__2470__auto____2772));
return document;
});
enfocus.demo.site.doc_trans_page = (function doc_trans_page(){
var nods__2470__auto____2774 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2773){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_trans.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2776 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2775){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2775,cljs.core.Vector.fromArray(["#doc-at"])));
return pnod2775;
}),nods__2470__auto____2776));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#at-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2778 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2777){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2777,cljs.core.Vector.fromArray(["#doc-content"])));
return pnod2777;
}),nods__2470__auto____2778));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#content-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2780 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2779){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2779,cljs.core.Vector.fromArray(["#doc-html-content"])));
return pnod2779;
}),nods__2470__auto____2780));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#html-content-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2782 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2781){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2781,cljs.core.Vector.fromArray(["#doc-set-attr"])));
return pnod2781;
}),nods__2470__auto____2782));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#set-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2784 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2783){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2783,cljs.core.Vector.fromArray(["#doc-remove-attr"])));
return pnod2783;
}),nods__2470__auto____2784));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#remove-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2786 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2785){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2785,cljs.core.Vector.fromArray(["#doc-add-class"])));
return pnod2785;
}),nods__2470__auto____2786));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#add-class-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2788 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2787){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2787,cljs.core.Vector.fromArray(["#doc-remove-class"])));
return pnod2787;
}),nods__2470__auto____2788));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#remove-class-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2790 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2789){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2789,cljs.core.Vector.fromArray(["#doc-do"])));
return pnod2789;
}),nods__2470__auto____2790));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#do-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2792 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2791){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2791,cljs.core.Vector.fromArray(["#doc-append"])));
return pnod2791;
}),nods__2470__auto____2792));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#append-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2794 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2793){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2793,cljs.core.Vector.fromArray(["#doc-prepend"])));
return pnod2793;
}),nods__2470__auto____2794));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#prepend-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2796 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2795){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2795,cljs.core.Vector.fromArray(["#doc-after"])));
return pnod2795;
}),nods__2470__auto____2796));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#after-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2798 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2797){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2797,cljs.core.Vector.fromArray(["#doc-before"])));
return pnod2797;
}),nods__2470__auto____2798));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#before-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2800 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2799){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2799,cljs.core.Vector.fromArray(["#doc-sub"])));
return pnod2799;
}),nods__2470__auto____2800));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#substitute-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2802 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2801){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2801,cljs.core.Vector.fromArray(["#doc-clone-for"])));
return pnod2801;
}),nods__2470__auto____2802));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#clone-for-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2804 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2803){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2803,cljs.core.Vector.fromArray(["#doc-wrap"])));
return pnod2803;
}),nods__2470__auto____2804));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#wrap-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2806 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2805){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2805,cljs.core.Vector.fromArray(["#doc-unwrap"])));
return pnod2805;
}),nods__2470__auto____2806));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#unwrap-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2808 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2807){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2807,cljs.core.Vector.fromArray(["#doc-set-style"])));
return pnod2807;
}),nods__2470__auto____2808));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#set-style-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2810 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2809){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2809,cljs.core.Vector.fromArray(["#doc-remove-style"])));
return pnod2809;
}),nods__2470__auto____2810));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#remove-style-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2812 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2811){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2811,cljs.core.Vector.fromArray(["#doc-filter"])));
return pnod2811;
}),nods__2470__auto____2812));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#filter-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.content_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.html_content_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.set_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button4"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.add_class_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button5"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_class_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button6"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.do_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button7"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.append_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button8"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.prepend_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button9"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.after_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button10"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.before_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button11"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.sub_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button12"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.clone_for_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button13"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.wrap_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button14"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.unwrap_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button15"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.set_style_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button16"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_style_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button17"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.filter_demo).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#button18"])));
return pnod2773;
}),nods__2470__auto____2774));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/handling-events.html");
enfocus.demo.site.doc_event = (function doc_event(){
var vec__2815__2816 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
})]));
var id_sym2813__2817 = cljs.core.nth.call(null,vec__2815__2816,0,null);
var pnod2814__2818 = cljs.core.nth.call(null,vec__2815__2816,1,null);
var pnod2814__2819 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2814__2818):pnod2814__2818);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2813__2817,pnod2814__2819);
return enfocus.core.remove_node_return_child.call(null,pnod2814__2819);
} else
{return pnod2814__2819;
}
});
enfocus.demo.site.remove_demo = (function remove_demo(){
var nods__2470__auto____2824 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2823){
enfocus.core.en_remove_listener.call(null,"﷐'mouseenter","﷐'mouseleave").call(null,enfocus.core.css_select.call(null,"",pnod2823,cljs.core.Vector.fromArray(["#remove-demo"])));
return pnod2823;
}),nods__2470__auto____2824));
return document;
});
enfocus.demo.site.doc_events_page = (function doc_events_page(){
var nods__2470__auto____2826 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2825){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_event.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2825,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2828 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2827){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2827,cljs.core.Vector.fromArray(["#doc-listen"])));
return pnod2827;
}),nods__2470__auto____2828));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2825,cljs.core.Vector.fromArray(["#listen-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2830 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2829){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2829,cljs.core.Vector.fromArray(["#doc-remove"])));
return pnod2829;
}),nods__2470__auto____2830));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2825,cljs.core.Vector.fromArray(["#remove-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2832 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2831){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2831,cljs.core.Vector.fromArray(["#doc-support"])));
return pnod2831;
}),nods__2470__auto____2832));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2825,cljs.core.Vector.fromArray(["#support-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (p1__2820_SHARP_){
enfocus.core.en_content.call(null,"I have been replaced").call(null,p1__2820_SHARP_.currentTarget);
return p1__2820_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2825,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'mouseenter",(function (p1__2821_SHARP_){
enfocus.core.en_add_class.call(null,"highlight").call(null,p1__2821_SHARP_.currentTarget);
return p1__2821_SHARP_.currentTarget;
})),enfocus.core.en_listen.call(null,"﷐'mouseleave",(function (p1__2822_SHARP_){
enfocus.core.en_remove_class.call(null,"highlight").call(null,p1__2822_SHARP_.currentTarget);
return p1__2822_SHARP_.currentTarget;
}))).call(null,enfocus.core.css_select.call(null,"",pnod2825,cljs.core.Vector.fromArray(["#remove-demo"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_demo).call(null,enfocus.core.css_select.call(null,"",pnod2825,cljs.core.Vector.fromArray(["#button2"])));
return pnod2825;
}),nods__2470__auto____2826));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/effects-timing.html");
enfocus.demo.site.doc_effect = (function doc_effect(){
var vec__2835__2836 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
})]));
var id_sym2833__2837 = cljs.core.nth.call(null,vec__2835__2836,0,null);
var pnod2834__2838 = cljs.core.nth.call(null,vec__2835__2836,1,null);
var pnod2834__2839 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2834__2838):pnod2834__2838);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2833__2837,pnod2834__2839);
return enfocus.core.remove_node_return_child.call(null,pnod2834__2839);
} else
{return pnod2834__2839;
}
});
enfocus.demo.site.resize_demo = (function resize_demo(){
var nods__2470__auto____2841 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2840){
enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,enfocus.core.en_resize.call(null,5,"﷐'curheight",500,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod2840,cljs.core.Vector.fromArray(["#rz-demo"])));
return pnod2840;
}),nods__2470__auto____2841));
return document;
});
enfocus.demo.site.move_demo = (function move_demo(){
var nods__2470__auto____2843 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2842){
enfocus.core.en_move.call(null,300,"﷐'cury",500,20,enfocus.core.en_move.call(null,-20,"﷐'cury",500,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod2842,cljs.core.Vector.fromArray(["#mv-demo"])));
return pnod2842;
}),nods__2470__auto____2843));
return document;
});
enfocus.demo.site.fade_demo = (function fade_demo(){
var nods__2470__auto____2845 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2844){
enfocus.core.en_fade_out.call(null,500,20,enfocus.core.en_fade_in.call(null,500,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod2844,cljs.core.Vector.fromArray(["#fade-demo"])));
return pnod2844;
}),nods__2470__auto____2845));
return document;
});
enfocus.demo.site.delay_demo = (function delay_demo(){
var nods__2470__auto____2847 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2846){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,null),enfocus.core.chainable_standard.call(null,(function (pnod__2629__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2470__auto____2849 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_resize.call(null,50,"﷐'curheight",500,20,null));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2848){
return pnod2848;
}),nods__2470__auto____2849));
return enfocus.core.en_resize.call(null,50,"﷐'curheight",500,20,null);
})().call(null,pnod__2629__auto__);
}),2000);
}))).call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#delay-demo"])));
return pnod2846;
}),nods__2470__auto____2847));
return document;
});
enfocus.demo.site.chain_demo = (function chain_demo(){
var nods__2470__auto____2851 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2850){
(function (pnod__2651__auto__){
return enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,null).call(null,pnod__2651__auto__,(function (pnod__2650__auto__){
return enfocus.core.en_resize.call(null,5,"﷐'curheight",500,20,null).call(null,pnod__2650__auto__);
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2850,cljs.core.Vector.fromArray(["#chain-demo"])));
return pnod2850;
}),nods__2470__auto____2851));
return document;
});
enfocus.demo.site.doc_effects_page = (function doc_effects_page(){
var nods__2470__auto____2853 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2852){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_effect.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2852,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2855 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2854){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2854,cljs.core.Vector.fromArray(["#doc-resize"])));
return pnod2854;
}),nods__2470__auto____2855));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2852,cljs.core.Vector.fromArray(["#resize-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2857 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2856){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2856,cljs.core.Vector.fromArray(["#doc-move"])));
return pnod2856;
}),nods__2470__auto____2857));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2852,cljs.core.Vector.fromArray(["#move-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2859 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2858){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2858,cljs.core.Vector.fromArray(["#doc-fade"])));
return pnod2858;
}),nods__2470__auto____2859));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2852,cljs.core.Vector.fromArray(["#fade-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2861 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2860){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2860,cljs.core.Vector.fromArray(["#doc-delay"])));
return pnod2860;
}),nods__2470__auto____2861));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2852,cljs.core.Vector.fromArray(["#delay-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2863 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2862){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2862,cljs.core.Vector.fromArray(["#doc-chain"])));
return pnod2862;
}),nods__2470__auto____2863));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2852,cljs.core.Vector.fromArray(["#chain-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.resize_demo).call(null,enfocus.core.css_select.call(null,"",pnod2852,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.move_demo).call(null,enfocus.core.css_select.call(null,"",pnod2852,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.fade_demo).call(null,enfocus.core.css_select.call(null,"",pnod2852,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.delay_demo).call(null,enfocus.core.css_select.call(null,"",pnod2852,cljs.core.Vector.fromArray(["#button4"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.chain_demo).call(null,enfocus.core.css_select.call(null,"",pnod2852,cljs.core.Vector.fromArray(["#button5"])));
return pnod2852;
}),nods__2470__auto____2853));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/templates-snippets.html");
enfocus.demo.site.doc_template = (function doc_template(){
var vec__2866__2867 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
})]));
var id_sym2864__2868 = cljs.core.nth.call(null,vec__2866__2867,0,null);
var pnod2865__2869 = cljs.core.nth.call(null,vec__2866__2867,1,null);
var pnod2865__2870 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2865__2869):pnod2865__2869);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2864__2868,pnod2865__2870);
return enfocus.core.remove_node_return_child.call(null,pnod2865__2870);
} else
{return pnod2865__2870;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.template_demo = (function template_demo(fruit_data){
var vec__2873__2874 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})]));
var id_sym2871__2875 = cljs.core.nth.call(null,vec__2873__2874,0,null);
var pnod2872__2876 = cljs.core.nth.call(null,vec__2873__2874,1,null);
var pnod2872__2877 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2872__2876):pnod2872__2876);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2871__2875,pnod2872__2877,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2871__2875,pnod2872__2877,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.en_remove_node.call(null).call(null,enfocus.core.css_select.call(null,id_sym2871__2875,pnod2872__2877,cljs.core.Vector.fromArray(["tbody > tr:not(:first-child)"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,fruit_data)))).call(null,enfocus.core.css_select.call(null,id_sym2871__2875,pnod2872__2877,cljs.core.Vector.fromArray(["tfoot tr > *:last-child"])));
enfocus.core.chainable_standard.call(null,(function (pnod__2579__auto__){
var div__2580__auto____2878 = enfocus.core.create_hidden_dom.call(null,document.createDocumentFragment());

enfocus.core.log_debug.call(null,pnod__2579__auto__);
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,cljs.core.vec.call(null,fruit_data)));
var G__2879__2880 = cljs.core.seq.call(null,cljs.core.vec.call(null,fruit_data));

if(cljs.core.truth_(G__2879__2880))
{var fr__2881 = cljs.core.first.call(null,G__2879__2880);
var G__2879__2882 = G__2879__2880;

while(true){
enfocus.core.en_append.call(null,pnod__2579__auto__.cloneNode(true)).call(null,div__2580__auto____2878);
div__2580__auto____2878;
var nods__2470__auto____2884 = enfocus.core.nodes__GT_coll.call(null,goog.dom.getLastElementChild.call(null,div__2580__auto____2878));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fr__2881,G__2879__2882){
return (function (pnod2883){
enfocus.core.en_content.call(null,cljs.core.first.call(null,fr__2881)).call(null,enfocus.core.css_select.call(null,"",pnod2883,cljs.core.Vector.fromArray(["*:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.second.call(null,fr__2881))).call(null,enfocus.core.css_select.call(null,"",pnod2883,cljs.core.Vector.fromArray(["*:last-child"])));
return pnod2883;
});})(fr__2881,G__2879__2882))
,nods__2470__auto____2884));
goog.dom.getLastElementChild.call(null,div__2580__auto____2878);
var temp__3698__auto____2885 = cljs.core.next.call(null,G__2879__2882);

if(cljs.core.truth_(temp__3698__auto____2885))
{var G__2879__2886 = temp__3698__auto____2885;

{
var G__2887 = cljs.core.first.call(null,G__2879__2886);
var G__2888 = G__2879__2886;
fr__2881 = G__2887;
G__2879__2882 = G__2888;
continue;
}
} else
{}
break;
}
} else
{}
enfocus.core.log_debug.call(null,div__2580__auto____2878);
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,enfocus.core.remove_node_return_child.call(null,div__2580__auto____2878)),enfocus.core.en_remove_node.call(null)).call(null,pnod__2579__auto__);
return pnod__2579__auto__;
})).call(null,enfocus.core.css_select.call(null,id_sym2871__2875,pnod2872__2877,cljs.core.Vector.fromArray(["tbody > tr:first-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2871__2875,pnod2872__2877);
return enfocus.core.remove_node_return_child.call(null,pnod2872__2877);
} else
{return pnod2872__2877;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.snippet2 = (function snippet2(fruit,quantity){
var vec__2892__2893 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})]));
var id_sym2890__2894 = cljs.core.nth.call(null,vec__2892__2893,0,null);
var pnod2891__2895 = cljs.core.nth.call(null,vec__2892__2893,1,null);
var pnod2891__2896 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2891__2895):pnod2891__2895);

enfocus.core.en_content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2890__2894,pnod2891__2896,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2890__2894,pnod2891__2896,cljs.core.Vector.fromArray(["tr > *:last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2890__2894,pnod2891__2896);
return enfocus.core.remove_node_return_child.call(null,pnod2891__2896);
} else
{return pnod2891__2896;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.template_demo2 = (function template_demo2(fruit_data){
var vec__2899__2900 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})]));
var id_sym2897__2901 = cljs.core.nth.call(null,vec__2899__2900,0,null);
var pnod2898__2902 = cljs.core.nth.call(null,vec__2899__2900,1,null);
var pnod2898__2903 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2898__2902):pnod2898__2902);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2897__2901,pnod2898__2903,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2897__2901,pnod2898__2903,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,fruit_data)))).call(null,enfocus.core.css_select.call(null,id_sym2897__2901,pnod2898__2903,cljs.core.Vector.fromArray(["tfoot tr > *:last-child"])));
enfocus.core.en_content.call(null,cljs.core.map.call(null,(function (p1__2889_SHARP_){
return enfocus.demo.site.snippet2.call(null,p1__2889_SHARP_,fruit_data.call(null,p1__2889_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym2897__2901,pnod2898__2903,cljs.core.Vector.fromArray(["tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2897__2901,pnod2898__2903);
return enfocus.core.remove_node_return_child.call(null,pnod2898__2903);
} else
{return pnod2898__2903;
}
});
enfocus.demo.site.doc_template_page = (function doc_template_page(){
var nods__2470__auto____2905 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2904){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_template.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2904,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2907 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2906){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2906,cljs.core.Vector.fromArray(["#doc-template"])));
return pnod2906;
}),nods__2470__auto____2907));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2904,cljs.core.Vector.fromArray(["#template-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2909 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2908){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2908,cljs.core.Vector.fromArray(["#doc-snippet"])));
return pnod2908;
}),nods__2470__auto____2909));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2904,cljs.core.Vector.fromArray(["#snippet-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2911 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2910){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2910,cljs.core.Vector.fromArray(["#doc-load"])));
return pnod2910;
}),nods__2470__auto____2911));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2904,cljs.core.Vector.fromArray(["#load-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2913 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2912){
enfocus.core.en_content.call(null,enfocus.demo.site.template_demo.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":8,"pear":9}))).call(null,enfocus.core.css_select.call(null,"",pnod2912,cljs.core.Vector.fromArray(["#template-demo"])));
return pnod2912;
}),nods__2470__auto____2913));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2904,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2915 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2914){
enfocus.core.en_content.call(null,enfocus.demo.site.template_demo2.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":6,"pear":5}))).call(null,enfocus.core.css_select.call(null,"",pnod2914,cljs.core.Vector.fromArray(["#snippet-demo"])));
return pnod2914;
}),nods__2470__auto____2915));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2904,cljs.core.Vector.fromArray(["#button2"])));
return pnod2904;
}),nods__2470__auto____2905));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/data-extraction.html");
enfocus.demo.site.doc_from = (function doc_from(){
var vec__2919__2920 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/data-extraction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/data-extraction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/data-extraction.html");
})]));
var id_sym2917__2921 = cljs.core.nth.call(null,vec__2919__2920,0,null);
var pnod2918__2922 = cljs.core.nth.call(null,vec__2919__2920,1,null);
var pnod2918__2923 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2918__2922):pnod2918__2922);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2917__2921,pnod2918__2923);
return enfocus.core.remove_node_return_child.call(null,pnod2918__2923);
} else
{return pnod2918__2923;
}
});
enfocus.demo.site.get_prop_demo = (function get_prop_demo(){
var values__2929 = (function (){var nods__2481__auto____2926 = enfocus.core.nodes__GT_coll.call(null,document);
var map2925__2927 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var map_list__2482__auto____2928 = cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2924){
cljs.core.swap_BANG_.call(null,map2925__2927,cljs.core.assoc,"﷐'field1",enfocus.core.extr_multi_node.call(null,(function (pnod__2667__auto__){
return pnod__2667__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod2924,cljs.core.Vector.fromArray(["#get-prop-field1"]))));
cljs.core.swap_BANG_.call(null,map2925__2927,cljs.core.assoc,"﷐'field2",enfocus.core.extr_multi_node.call(null,(function (pnod__2667__auto__){
return pnod__2667__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod2924,cljs.core.Vector.fromArray(["#get-prop-field2"]))));
cljs.core.swap_BANG_.call(null,map2925__2927,cljs.core.assoc,"﷐'field3",enfocus.core.en_filter.call(null,(function (p1__2916_SHARP_){
return p1__2916_SHARP_.checked;
}),enfocus.core.extr_multi_node.call(null,(function (pnod__2667__auto__){
return pnod__2667__auto__.value;
}))).call(null,enfocus.core.css_select.call(null,"",pnod2924,cljs.core.Vector.fromArray(["input[name='get-prop-field3']"]))));
return pnod2924;
}),nods__2481__auto____2926));

return cljs.core.deref.call(null,map2925__2927);
})();

var nods__2470__auto____2931 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2930){
enfocus.core.en_content.call(null,cljs.core.pr_str.call(null,values__2929)).call(null,enfocus.core.css_select.call(null,"",pnod2930,cljs.core.Vector.fromArray(["#get-prop-demo"])));
return pnod2930;
}),nods__2470__auto____2931));
return document;
});
enfocus.demo.site.get_attr_demo = (function get_attr_demo(){
var value__2932 = enfocus.core.en_get_attr.call(null,"﷐'src").call(null,enfocus.core.css_select.call(null,cljs.core.Vector.fromArray(["#get-attr-img"])));

var nods__2470__auto____2934 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2933){
enfocus.core.en_content.call(null,cljs.core.pr_str.call(null,value__2932)).call(null,enfocus.core.css_select.call(null,"",pnod2933,cljs.core.Vector.fromArray(["#get-attr-demo"])));
return pnod2933;
}),nods__2470__auto____2934));
return document;
});
enfocus.demo.site.get_text_demo = (function get_text_demo(){
var txt__2935 = enfocus.core.en_get_text.call(null).call(null,enfocus.core.css_select.call(null,cljs.core.Vector.fromArray(["#button3"])));

var nods__2470__auto____2937 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2936){
enfocus.core.en_content.call(null,txt__2935).call(null,enfocus.core.css_select.call(null,"",pnod2936,cljs.core.Vector.fromArray(["#get-text-demo"])));
return pnod2936;
}),nods__2470__auto____2937));
return document;
});
enfocus.demo.site.doc_from_page = (function doc_from_page(){
var nods__2470__auto____2939 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2938){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_from.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2938,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2941 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2940){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2940,cljs.core.Vector.fromArray(["#doc-from"])));
return pnod2940;
}),nods__2470__auto____2941));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2938,cljs.core.Vector.fromArray(["#from-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2943 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2942){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2942,cljs.core.Vector.fromArray(["#doc-get-prop"])));
return pnod2942;
}),nods__2470__auto____2943));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2938,cljs.core.Vector.fromArray(["#get-prop-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2945 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2944){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2944,cljs.core.Vector.fromArray(["#doc-get-attr"])));
return pnod2944;
}),nods__2470__auto____2945));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2938,cljs.core.Vector.fromArray(["#get-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2947 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2946){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2946,cljs.core.Vector.fromArray(["#doc-get-text"])));
return pnod2946;
}),nods__2470__auto____2947));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2938,cljs.core.Vector.fromArray(["#get-text-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_prop_demo).call(null,enfocus.core.css_select.call(null,"",pnod2938,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2938,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_text_demo).call(null,enfocus.core.css_select.call(null,"",pnod2938,cljs.core.Vector.fromArray(["#button3"])));
return pnod2938;
}),nods__2470__auto____2939));
return document;
});
