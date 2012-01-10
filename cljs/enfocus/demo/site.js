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
var nods__2470__auto____2668 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2667){
enfocus.core.chainable_standard.call(null,(function (pnod__2629__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2470__auto____2670 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"),enfocus.core.en_fade_in.call(null,1000,20,null)));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2669){
return pnod2669;
}),nods__2470__auto____2670));
return enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"),enfocus.core.en_fade_in.call(null,1000,20,null));
})().call(null,pnod__2629__auto__);
}),1000);
})).call(null,enfocus.core.css_select.call(null,"",pnod2667,cljs.core.Vector.fromArray(["#menu"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.home_page).call(null,enfocus.core.css_select.call(null,"",pnod2667,cljs.core.Vector.fromArray(["#home-button"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.gstarted_page).call(null,enfocus.core.css_select.call(null,"",pnod2667,cljs.core.Vector.fromArray(["#gstarted-button"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_trans_page).call(null,enfocus.core.css_select.call(null,"",pnod2667,cljs.core.Vector.fromArray(["#doc-trans"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_events_page).call(null,enfocus.core.css_select.call(null,"",pnod2667,cljs.core.Vector.fromArray(["#doc-events"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_effects_page).call(null,enfocus.core.css_select.call(null,"",pnod2667,cljs.core.Vector.fromArray(["#doc-effects"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_template_page).call(null,enfocus.core.css_select.call(null,"",pnod2667,cljs.core.Vector.fromArray(["#doc-remote"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_from_page).call(null,enfocus.core.css_select.call(null,"",pnod2667,cljs.core.Vector.fromArray(["#doc-extract"])));
(function (pnod__2651__auto__){
return enfocus.core.en_resize.call(null,5,height,500,20,null).call(null,pnod__2651__auto__,(function (pnod__2651__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,20,null).call(null,pnod__2651__auto__,(function (pnod__2650__auto__){
return enfocus.core.en_content.call(null,enfocus.demo.site.home.call(null)).call(null,pnod__2650__auto__);
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2667,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2667;
}),nods__2470__auto____2668));
return document;
});
enfocus.demo.site.resize_pane = (function resize_pane(width,height){
var nods__2470__auto____2672 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2671){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_resize.call(null,width,height,200,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod2671,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2671;
}),nods__2470__auto____2672));
return document;
});
enfocus.demo.site.resize_content_pane = (function resize_content_pane(){
var size__2673 = goog.dom.getViewportSize.call(null);
var width__2674 = (size__2673.width - 40);
var height__2675 = (size__2673.height - 70);

return enfocus.demo.site.resize_pane.call(null,width__2674,height__2675);
});
enfocus.demo.site.init_content_pane = (function init_content_pane(){
var size__2678 = goog.dom.getViewportSize.call(null);
var width__2679 = (size__2678.width - 40);
var height__2680 = (size__2678.height - 70);

enfocus.demo.site.setup_pane.call(null,width__2679,height__2680);
enfocus.core.en_listen.call(null,"﷐'resize",enfocus.demo.site.resize_content_pane).call(null,window);
return window;
});
enfocus.demo.site.start = (function start(){
var nods__2470__auto____2682 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2681){
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod2681,cljs.core.Vector.fromArray(["#inner-circle"])));
enfocus.core.en_listen.call(null,"﷐'mouseenter",(function (p1__2676_SHARP_){
var nods__2470__auto____2684 = enfocus.core.nodes__GT_coll.call(null,p1__2676_SHARP_.currentTarget);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2683){
enfocus.core.en_resize.call(null,"﷐'curwidth",145,500,20,null).call(null,enfocus.core.css_select.call(null,"",pnod2683,cljs.core.Vector.fromArray([".sub"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_add_class.call(null,"blur-highlight"),enfocus.core.chainable_standard.call(null,(function (pnod__2629__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2470__auto____2686 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_remove_class.call(null,"blur-highlight"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2685){
return pnod2685;
}),nods__2470__auto____2686));
return enfocus.core.en_remove_class.call(null,"blur-highlight");
})().call(null,pnod__2629__auto__);
}),200);
}))).call(null,enfocus.core.css_select.call(null,"",pnod2683,cljs.core.Vector.fromArray(["h3"])));
return pnod2683;
}),nods__2470__auto____2684));
return p1__2676_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2681,cljs.core.Vector.fromArray([".marea"])));
enfocus.core.en_listen.call(null,"﷐'mouseleave",(function (p1__2677_SHARP_){
var nods__2470__auto____2688 = enfocus.core.nodes__GT_coll.call(null,p1__2677_SHARP_.currentTarget);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2687){
enfocus.core.en_resize.call(null,"﷐'curwidth",0,500,20,null).call(null,enfocus.core.css_select.call(null,"",pnod2687,cljs.core.Vector.fromArray([".sub"])));
return pnod2687;
}),nods__2470__auto____2688));
return p1__2677_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2681,cljs.core.Vector.fromArray([".marea"])));
return pnod2681;
}),nods__2470__auto____2682));
return document;
});
window.onload = enfocus.demo.site.start;
enfocus.core.load_remote_dom.call(null,"templates/home.html");
enfocus.demo.site.home = (function home(){
var vec__2691__2692 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
})]));
var id_sym2689__2693 = cljs.core.nth.call(null,vec__2691__2692,0,null);
var pnod2690__2694 = cljs.core.nth.call(null,vec__2691__2692,1,null);
var pnod2690__2695 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2690__2694):pnod2690__2694);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2689__2693,pnod2690__2695);
return enfocus.core.remove_node_return_child.call(null,pnod2690__2695);
} else
{return pnod2690__2695;
}
});
enfocus.demo.site.home_page = (function home_page(){
var nods__2470__auto____2697 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2696){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.home.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2696,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2696;
}),nods__2470__auto____2697));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/getting-started.html");
enfocus.demo.site.gstarted = (function gstarted(){
var vec__2701__2702 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
})]));
var id_sym2699__2703 = cljs.core.nth.call(null,vec__2701__2702,0,null);
var pnod2700__2704 = cljs.core.nth.call(null,vec__2701__2702,1,null);
var pnod2700__2705 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2700__2704):pnod2700__2704);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2699__2703,pnod2700__2705);
return enfocus.core.remove_node_return_child.call(null,pnod2700__2705);
} else
{return pnod2700__2705;
}
});
enfocus.demo.site.gstarted_page = (function gstarted_page(){
var nods__2470__auto____2707 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2706){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.gstarted.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2706,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (p1__2698_SHARP_){
enfocus.core.en_content.call(null,"I have been clicked").call(null,p1__2698_SHARP_.currentTarget);
return p1__2698_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2706,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2709 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2708){
(function (pnod__2651__auto__){
return enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,null).call(null,pnod__2651__auto__,(function (pnod__2650__auto__){
return enfocus.core.en_resize.call(null,5,"﷐'curheight",500,20,null).call(null,pnod__2650__auto__);
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2708,cljs.core.Vector.fromArray(["#rz-demo"])));
return pnod2708;
}),nods__2470__auto____2709));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2706,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.clone_for_demo).call(null,enfocus.core.css_select.call(null,"",pnod2706,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2706,cljs.core.Vector.fromArray(["#button4"])));
return pnod2706;
}),nods__2470__auto____2707));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/standard-transforms.html");
enfocus.demo.site.doc_trans = (function doc_trans(){
var vec__2712__2713 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
})]));
var id_sym2710__2714 = cljs.core.nth.call(null,vec__2712__2713,0,null);
var pnod2711__2715 = cljs.core.nth.call(null,vec__2712__2713,1,null);
var pnod2711__2716 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2711__2715):pnod2711__2715);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2710__2714,pnod2711__2716);
return enfocus.core.remove_node_return_child.call(null,pnod2711__2716);
} else
{return pnod2711__2716;
}
});
enfocus.demo.site.content_demo = (function content_demo(){
var nods__2470__auto____2718 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2717){
enfocus.core.en_content.call(null,"I have been clicked").call(null,enfocus.core.css_select.call(null,"",pnod2717,cljs.core.Vector.fromArray(["#button1"])));
return pnod2717;
}),nods__2470__auto____2718));
return document;
});
enfocus.demo.site.html_content_demo = (function html_content_demo(){
var nods__2470__auto____2720 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2719){
enfocus.core.en_html_content.call(null,"<span style='color: #ff3333'>I replaced the text</span>").call(null,enfocus.core.css_select.call(null,"",pnod2719,cljs.core.Vector.fromArray(["#html-content-demo"])));
return pnod2719;
}),nods__2470__auto____2720));
return document;
});
enfocus.demo.site.set_attr_demo = (function set_attr_demo(){
var nods__2470__auto____2722 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2721){
enfocus.core.en_set_attr.call(null,"﷐'foo","bar").call(null,enfocus.core.css_select.call(null,"",pnod2721,cljs.core.Vector.fromArray(["#button3"])));
return pnod2721;
}),nods__2470__auto____2722));
return document;
});
enfocus.demo.site.remove_attr_demo = (function remove_attr_demo(){
var nods__2470__auto____2724 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2723){
enfocus.core.en_remove_attr.call(null,"﷐'foo").call(null,enfocus.core.css_select.call(null,"",pnod2723,cljs.core.Vector.fromArray(["#button4"])));
return pnod2723;
}),nods__2470__auto____2724));
return document;
});
enfocus.demo.site.add_class_demo = (function add_class_demo(){
var nods__2470__auto____2726 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2725){
enfocus.core.en_add_class.call(null,"highlight").call(null,enfocus.core.css_select.call(null,"",pnod2725,cljs.core.Vector.fromArray(["#button5"])));
return pnod2725;
}),nods__2470__auto____2726));
return document;
});
enfocus.demo.site.remove_class_demo = (function remove_class_demo(){
var nods__2470__auto____2728 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2727){
enfocus.core.en_remove_class.call(null,"highlight").call(null,enfocus.core.css_select.call(null,"",pnod2727,cljs.core.Vector.fromArray(["#button6"])));
return pnod2727;
}),nods__2470__auto____2728));
return document;
});
enfocus.demo.site.do_demo = (function do_demo(){
var nods__2470__auto____2730 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2729){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_attr.call(null,"﷐'foo","bar"),enfocus.core.en_add_class.call(null,"highlight")).call(null,enfocus.core.css_select.call(null,"",pnod2729,cljs.core.Vector.fromArray(["#button7"])));
return pnod2729;
}),nods__2470__auto____2730));
return document;
});
enfocus.demo.site.append_demo = (function append_demo(){
var nods__2470__auto____2732 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2731){
enfocus.core.en_append.call(null,":append").call(null,enfocus.core.css_select.call(null,"",pnod2731,cljs.core.Vector.fromArray(["#button8"])));
return pnod2731;
}),nods__2470__auto____2732));
return document;
});
enfocus.demo.site.prepend_demo = (function prepend_demo(){
var nods__2470__auto____2734 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2733){
enfocus.core.en_prepend.call(null,"prepend:").call(null,enfocus.core.css_select.call(null,"",pnod2733,cljs.core.Vector.fromArray(["#button9"])));
return pnod2733;
}),nods__2470__auto____2734));
return document;
});
enfocus.demo.site.after_demo = (function after_demo(){
var nods__2470__auto____2736 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2735){
enfocus.core.en_after.call(null,":after").call(null,enfocus.core.css_select.call(null,"",pnod2735,cljs.core.Vector.fromArray(["#button10"])));
return pnod2735;
}),nods__2470__auto____2736));
return document;
});
enfocus.demo.site.before_demo = (function before_demo(){
var nods__2470__auto____2738 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2737){
enfocus.core.en_before.call(null,"before:").call(null,enfocus.core.css_select.call(null,"",pnod2737,cljs.core.Vector.fromArray(["#button11"])));
return pnod2737;
}),nods__2470__auto____2738));
return document;
});
enfocus.demo.site.sub_demo = (function sub_demo(){
var nods__2470__auto____2740 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2739){
enfocus.core.en_substitute.call(null,"I replaced the button").call(null,enfocus.core.css_select.call(null,"",pnod2739,cljs.core.Vector.fromArray(["#button12"])));
return pnod2739;
}),nods__2470__auto____2740));
return document;
});
enfocus.demo.site.clone_for_demo = (function clone_for_demo(){
var fruit_data__2741 = cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":5,"pear":6});

var nods__2470__auto____2743 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2742){
enfocus.core.chainable_standard.call(null,(function (pnod__2579__auto__){
var div__2580__auto____2744 = enfocus.core.create_hidden_dom.call(null,document.createDocumentFragment());

enfocus.core.log_debug.call(null,pnod__2579__auto__);
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,cljs.core.vec.call(null,fruit_data__2741)));
var G__2745__2746 = cljs.core.seq.call(null,cljs.core.vec.call(null,fruit_data__2741));

if(cljs.core.truth_(G__2745__2746))
{var fr__2747 = cljs.core.first.call(null,G__2745__2746);
var G__2745__2748 = G__2745__2746;

while(true){
enfocus.core.en_append.call(null,pnod__2579__auto__.cloneNode(true)).call(null,div__2580__auto____2744);
div__2580__auto____2744;
var nods__2470__auto____2750 = enfocus.core.nodes__GT_coll.call(null,goog.dom.getLastElementChild.call(null,div__2580__auto____2744));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fr__2747,G__2745__2748){
return (function (pnod2749){
enfocus.core.en_content.call(null,cljs.core.first.call(null,fr__2747)).call(null,enfocus.core.css_select.call(null,"",pnod2749,cljs.core.Vector.fromArray(["*:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.second.call(null,fr__2747))).call(null,enfocus.core.css_select.call(null,"",pnod2749,cljs.core.Vector.fromArray(["*:last-child"])));
return pnod2749;
});})(fr__2747,G__2745__2748))
,nods__2470__auto____2750));
goog.dom.getLastElementChild.call(null,div__2580__auto____2744);
var temp__3698__auto____2751 = cljs.core.next.call(null,G__2745__2748);

if(cljs.core.truth_(temp__3698__auto____2751))
{var G__2745__2752 = temp__3698__auto____2751;

{
var G__2753 = cljs.core.first.call(null,G__2745__2752);
var G__2754 = G__2745__2752;
fr__2747 = G__2753;
G__2745__2748 = G__2754;
continue;
}
} else
{}
break;
}
} else
{}
enfocus.core.log_debug.call(null,div__2580__auto____2744);
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,enfocus.core.remove_node_return_child.call(null,div__2580__auto____2744)),enfocus.core.en_remove_node.call(null)).call(null,pnod__2579__auto__);
return pnod__2579__auto__;
})).call(null,enfocus.core.css_select.call(null,"",pnod2742,cljs.core.Vector.fromArray(["#clone-for-demo tbody > tr:first-child"])));
return pnod2742;
}),nods__2470__auto____2743));
return document;
});
enfocus.demo.site.wrap_demo = (function wrap_demo(){
var nods__2470__auto____2756 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2755){
enfocus.core.en_wrap.call(null,"﷐'span",cljs.core.ObjMap.fromObject(["﷐'class"],{"﷐'class":"highlight"})).call(null,enfocus.core.css_select.call(null,"",pnod2755,cljs.core.Vector.fromArray(["#button14"])));
return pnod2755;
}),nods__2470__auto____2756));
return document;
});
enfocus.demo.site.unwrap_demo = (function unwrap_demo(){
var nods__2470__auto____2758 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2757){
enfocus.core.en_unwrap.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button15"])));
return pnod2757;
}),nods__2470__auto____2758));
return document;
});
enfocus.demo.site.set_style_demo = (function set_style_demo(){
var nods__2470__auto____2760 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2759){
enfocus.core.en_set_style.call(null,"﷐'border","2px solid blue").call(null,enfocus.core.css_select.call(null,"",pnod2759,cljs.core.Vector.fromArray(["#button16"])));
return pnod2759;
}),nods__2470__auto____2760));
return document;
});
enfocus.demo.site.remove_style_demo = (function remove_style_demo(){
var nods__2470__auto____2764 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2763){
enfocus.core.en_remove_style.call(null,"﷐'border").call(null,enfocus.core.css_select.call(null,"",pnod2763,cljs.core.Vector.fromArray(["#button17"])));
return pnod2763;
}),nods__2470__auto____2764));
return document;
});
enfocus.demo.site.filter_demo = (function filter_demo(){
var nods__2470__auto____2766 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2765){
enfocus.core.en_filter.call(null,(function (p1__2761_SHARP_){
return (0 > p1__2761_SHARP_.value.indexOf("@"));
}),enfocus.core.en_set_style.call(null,"﷐'background-color","red")).call(null,enfocus.core.css_select.call(null,"",pnod2765,cljs.core.Vector.fromArray(["#email-field"])));
enfocus.core.en_filter.call(null,(function (p1__2762_SHARP_){
return (0 <= p1__2762_SHARP_.value.indexOf("@"));
}),enfocus.core.en_set_style.call(null,"﷐'background-color","green")).call(null,enfocus.core.css_select.call(null,"",pnod2765,cljs.core.Vector.fromArray(["#email-field"])));
return pnod2765;
}),nods__2470__auto____2766));
return document;
});
enfocus.demo.site.doc_trans_page = (function doc_trans_page(){
var nods__2470__auto____2768 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2767){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_trans.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2770 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2769){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2769,cljs.core.Vector.fromArray(["#doc-at"])));
return pnod2769;
}),nods__2470__auto____2770));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#at-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2772 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2771){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2771,cljs.core.Vector.fromArray(["#doc-content"])));
return pnod2771;
}),nods__2470__auto____2772));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#content-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2774 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2773){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#doc-html-content"])));
return pnod2773;
}),nods__2470__auto____2774));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#html-content-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2776 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2775){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2775,cljs.core.Vector.fromArray(["#doc-set-attr"])));
return pnod2775;
}),nods__2470__auto____2776));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#set-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2778 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2777){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2777,cljs.core.Vector.fromArray(["#doc-remove-attr"])));
return pnod2777;
}),nods__2470__auto____2778));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#remove-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2780 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2779){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2779,cljs.core.Vector.fromArray(["#doc-add-class"])));
return pnod2779;
}),nods__2470__auto____2780));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#add-class-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2782 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2781){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2781,cljs.core.Vector.fromArray(["#doc-remove-class"])));
return pnod2781;
}),nods__2470__auto____2782));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#remove-class-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2784 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2783){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2783,cljs.core.Vector.fromArray(["#doc-do"])));
return pnod2783;
}),nods__2470__auto____2784));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#do-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2786 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2785){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2785,cljs.core.Vector.fromArray(["#doc-append"])));
return pnod2785;
}),nods__2470__auto____2786));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#append-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2788 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2787){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2787,cljs.core.Vector.fromArray(["#doc-prepend"])));
return pnod2787;
}),nods__2470__auto____2788));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#prepend-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2790 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2789){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2789,cljs.core.Vector.fromArray(["#doc-after"])));
return pnod2789;
}),nods__2470__auto____2790));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#after-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2792 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2791){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2791,cljs.core.Vector.fromArray(["#doc-before"])));
return pnod2791;
}),nods__2470__auto____2792));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#before-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2794 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2793){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2793,cljs.core.Vector.fromArray(["#doc-sub"])));
return pnod2793;
}),nods__2470__auto____2794));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#substitute-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2796 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2795){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2795,cljs.core.Vector.fromArray(["#doc-clone-for"])));
return pnod2795;
}),nods__2470__auto____2796));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#clone-for-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2798 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2797){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2797,cljs.core.Vector.fromArray(["#doc-wrap"])));
return pnod2797;
}),nods__2470__auto____2798));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#wrap-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2800 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2799){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2799,cljs.core.Vector.fromArray(["#doc-unwrap"])));
return pnod2799;
}),nods__2470__auto____2800));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#unwrap-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2802 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2801){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2801,cljs.core.Vector.fromArray(["#doc-set-style"])));
return pnod2801;
}),nods__2470__auto____2802));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#set-style-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2804 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2803){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2803,cljs.core.Vector.fromArray(["#doc-remove-style"])));
return pnod2803;
}),nods__2470__auto____2804));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#remove-style-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2806 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2805){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2805,cljs.core.Vector.fromArray(["#doc-filter"])));
return pnod2805;
}),nods__2470__auto____2806));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#filter-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.content_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.html_content_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.set_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button4"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.add_class_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button5"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_class_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button6"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.do_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button7"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.append_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button8"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.prepend_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button9"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.after_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button10"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.before_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button11"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.sub_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button12"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.clone_for_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button13"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.wrap_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button14"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.unwrap_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button15"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.set_style_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button16"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_style_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button17"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.filter_demo).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#button18"])));
return pnod2767;
}),nods__2470__auto____2768));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/handling-events.html");
enfocus.demo.site.doc_event = (function doc_event(){
var vec__2809__2810 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
})]));
var id_sym2807__2811 = cljs.core.nth.call(null,vec__2809__2810,0,null);
var pnod2808__2812 = cljs.core.nth.call(null,vec__2809__2810,1,null);
var pnod2808__2813 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2808__2812):pnod2808__2812);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2807__2811,pnod2808__2813);
return enfocus.core.remove_node_return_child.call(null,pnod2808__2813);
} else
{return pnod2808__2813;
}
});
enfocus.demo.site.remove_demo = (function remove_demo(){
var nods__2470__auto____2818 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2817){
enfocus.core.en_remove_listener.call(null,"﷐'mouseenter","﷐'mouseleave").call(null,enfocus.core.css_select.call(null,"",pnod2817,cljs.core.Vector.fromArray(["#remove-demo"])));
return pnod2817;
}),nods__2470__auto____2818));
return document;
});
enfocus.demo.site.doc_events_page = (function doc_events_page(){
var nods__2470__auto____2820 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2819){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_event.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2819,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2822 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2821){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2821,cljs.core.Vector.fromArray(["#doc-listen"])));
return pnod2821;
}),nods__2470__auto____2822));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2819,cljs.core.Vector.fromArray(["#listen-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2824 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2823){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2823,cljs.core.Vector.fromArray(["#doc-remove"])));
return pnod2823;
}),nods__2470__auto____2824));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2819,cljs.core.Vector.fromArray(["#remove-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2826 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2825){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2825,cljs.core.Vector.fromArray(["#doc-support"])));
return pnod2825;
}),nods__2470__auto____2826));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2819,cljs.core.Vector.fromArray(["#support-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (p1__2814_SHARP_){
enfocus.core.en_content.call(null,"I have been replaced").call(null,p1__2814_SHARP_.currentTarget);
return p1__2814_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2819,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'mouseenter",(function (p1__2815_SHARP_){
enfocus.core.en_add_class.call(null,"highlight").call(null,p1__2815_SHARP_.currentTarget);
return p1__2815_SHARP_.currentTarget;
})),enfocus.core.en_listen.call(null,"﷐'mouseleave",(function (p1__2816_SHARP_){
enfocus.core.en_remove_class.call(null,"highlight").call(null,p1__2816_SHARP_.currentTarget);
return p1__2816_SHARP_.currentTarget;
}))).call(null,enfocus.core.css_select.call(null,"",pnod2819,cljs.core.Vector.fromArray(["#remove-demo"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_demo).call(null,enfocus.core.css_select.call(null,"",pnod2819,cljs.core.Vector.fromArray(["#button2"])));
return pnod2819;
}),nods__2470__auto____2820));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/effects-timing.html");
enfocus.demo.site.doc_effect = (function doc_effect(){
var vec__2829__2830 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
})]));
var id_sym2827__2831 = cljs.core.nth.call(null,vec__2829__2830,0,null);
var pnod2828__2832 = cljs.core.nth.call(null,vec__2829__2830,1,null);
var pnod2828__2833 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2828__2832):pnod2828__2832);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2827__2831,pnod2828__2833);
return enfocus.core.remove_node_return_child.call(null,pnod2828__2833);
} else
{return pnod2828__2833;
}
});
enfocus.demo.site.resize_demo = (function resize_demo(){
var nods__2470__auto____2835 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2834){
enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,enfocus.core.en_resize.call(null,5,"﷐'curheight",500,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod2834,cljs.core.Vector.fromArray(["#rz-demo"])));
return pnod2834;
}),nods__2470__auto____2835));
return document;
});
enfocus.demo.site.move_demo = (function move_demo(){
var nods__2470__auto____2837 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2836){
enfocus.core.en_move.call(null,300,"﷐'cury",500,20,enfocus.core.en_move.call(null,-20,"﷐'cury",500,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod2836,cljs.core.Vector.fromArray(["#mv-demo"])));
return pnod2836;
}),nods__2470__auto____2837));
return document;
});
enfocus.demo.site.fade_demo = (function fade_demo(){
var nods__2470__auto____2839 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2838){
enfocus.core.en_fade_out.call(null,500,20,enfocus.core.en_fade_in.call(null,500,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod2838,cljs.core.Vector.fromArray(["#fade-demo"])));
return pnod2838;
}),nods__2470__auto____2839));
return document;
});
enfocus.demo.site.delay_demo = (function delay_demo(){
var nods__2470__auto____2841 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2840){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,null),enfocus.core.chainable_standard.call(null,(function (pnod__2629__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2470__auto____2843 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_resize.call(null,50,"﷐'curheight",500,20,null));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2842){
return pnod2842;
}),nods__2470__auto____2843));
return enfocus.core.en_resize.call(null,50,"﷐'curheight",500,20,null);
})().call(null,pnod__2629__auto__);
}),2000);
}))).call(null,enfocus.core.css_select.call(null,"",pnod2840,cljs.core.Vector.fromArray(["#delay-demo"])));
return pnod2840;
}),nods__2470__auto____2841));
return document;
});
enfocus.demo.site.chain_demo = (function chain_demo(){
var nods__2470__auto____2845 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2844){
(function (pnod__2651__auto__){
return enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,null).call(null,pnod__2651__auto__,(function (pnod__2650__auto__){
return enfocus.core.en_resize.call(null,5,"﷐'curheight",500,20,null).call(null,pnod__2650__auto__);
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2844,cljs.core.Vector.fromArray(["#chain-demo"])));
return pnod2844;
}),nods__2470__auto____2845));
return document;
});
enfocus.demo.site.doc_effects_page = (function doc_effects_page(){
var nods__2470__auto____2847 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2846){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_effect.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2849 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2848){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2848,cljs.core.Vector.fromArray(["#doc-resize"])));
return pnod2848;
}),nods__2470__auto____2849));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#resize-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2851 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2850){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2850,cljs.core.Vector.fromArray(["#doc-move"])));
return pnod2850;
}),nods__2470__auto____2851));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#move-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2853 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2852){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2852,cljs.core.Vector.fromArray(["#doc-fade"])));
return pnod2852;
}),nods__2470__auto____2853));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#fade-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2855 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2854){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2854,cljs.core.Vector.fromArray(["#doc-delay"])));
return pnod2854;
}),nods__2470__auto____2855));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#delay-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2857 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2856){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2856,cljs.core.Vector.fromArray(["#doc-chain"])));
return pnod2856;
}),nods__2470__auto____2857));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#chain-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.resize_demo).call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.move_demo).call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.fade_demo).call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.delay_demo).call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#button4"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.chain_demo).call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#button5"])));
return pnod2846;
}),nods__2470__auto____2847));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/templates-snippets.html");
enfocus.demo.site.doc_template = (function doc_template(){
var vec__2860__2861 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
})]));
var id_sym2858__2862 = cljs.core.nth.call(null,vec__2860__2861,0,null);
var pnod2859__2863 = cljs.core.nth.call(null,vec__2860__2861,1,null);
var pnod2859__2864 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2859__2863):pnod2859__2863);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2858__2862,pnod2859__2864);
return enfocus.core.remove_node_return_child.call(null,pnod2859__2864);
} else
{return pnod2859__2864;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.template_demo = (function template_demo(fruit_data){
var vec__2867__2868 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})]));
var id_sym2865__2869 = cljs.core.nth.call(null,vec__2867__2868,0,null);
var pnod2866__2870 = cljs.core.nth.call(null,vec__2867__2868,1,null);
var pnod2866__2871 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2866__2870):pnod2866__2870);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2865__2869,pnod2866__2871,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2865__2869,pnod2866__2871,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.en_remove_node.call(null).call(null,enfocus.core.css_select.call(null,id_sym2865__2869,pnod2866__2871,cljs.core.Vector.fromArray(["tbody > tr:not(:first-child)"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,fruit_data)))).call(null,enfocus.core.css_select.call(null,id_sym2865__2869,pnod2866__2871,cljs.core.Vector.fromArray(["tfoot tr > *:last-child"])));
enfocus.core.chainable_standard.call(null,(function (pnod__2579__auto__){
var div__2580__auto____2872 = enfocus.core.create_hidden_dom.call(null,document.createDocumentFragment());

enfocus.core.log_debug.call(null,pnod__2579__auto__);
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,cljs.core.vec.call(null,fruit_data)));
var G__2873__2874 = cljs.core.seq.call(null,cljs.core.vec.call(null,fruit_data));

if(cljs.core.truth_(G__2873__2874))
{var fr__2875 = cljs.core.first.call(null,G__2873__2874);
var G__2873__2876 = G__2873__2874;

while(true){
enfocus.core.en_append.call(null,pnod__2579__auto__.cloneNode(true)).call(null,div__2580__auto____2872);
div__2580__auto____2872;
var nods__2470__auto____2878 = enfocus.core.nodes__GT_coll.call(null,goog.dom.getLastElementChild.call(null,div__2580__auto____2872));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fr__2875,G__2873__2876){
return (function (pnod2877){
enfocus.core.en_content.call(null,cljs.core.first.call(null,fr__2875)).call(null,enfocus.core.css_select.call(null,"",pnod2877,cljs.core.Vector.fromArray(["*:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.second.call(null,fr__2875))).call(null,enfocus.core.css_select.call(null,"",pnod2877,cljs.core.Vector.fromArray(["*:last-child"])));
return pnod2877;
});})(fr__2875,G__2873__2876))
,nods__2470__auto____2878));
goog.dom.getLastElementChild.call(null,div__2580__auto____2872);
var temp__3698__auto____2879 = cljs.core.next.call(null,G__2873__2876);

if(cljs.core.truth_(temp__3698__auto____2879))
{var G__2873__2880 = temp__3698__auto____2879;

{
var G__2881 = cljs.core.first.call(null,G__2873__2880);
var G__2882 = G__2873__2880;
fr__2875 = G__2881;
G__2873__2876 = G__2882;
continue;
}
} else
{}
break;
}
} else
{}
enfocus.core.log_debug.call(null,div__2580__auto____2872);
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,enfocus.core.remove_node_return_child.call(null,div__2580__auto____2872)),enfocus.core.en_remove_node.call(null)).call(null,pnod__2579__auto__);
return pnod__2579__auto__;
})).call(null,enfocus.core.css_select.call(null,id_sym2865__2869,pnod2866__2871,cljs.core.Vector.fromArray(["tbody > tr:first-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2865__2869,pnod2866__2871);
return enfocus.core.remove_node_return_child.call(null,pnod2866__2871);
} else
{return pnod2866__2871;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.snippet2 = (function snippet2(fruit,quantity){
var vec__2886__2887 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})]));
var id_sym2884__2888 = cljs.core.nth.call(null,vec__2886__2887,0,null);
var pnod2885__2889 = cljs.core.nth.call(null,vec__2886__2887,1,null);
var pnod2885__2890 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2885__2889):pnod2885__2889);

enfocus.core.en_content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2884__2888,pnod2885__2890,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2884__2888,pnod2885__2890,cljs.core.Vector.fromArray(["tr > *:last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2884__2888,pnod2885__2890);
return enfocus.core.remove_node_return_child.call(null,pnod2885__2890);
} else
{return pnod2885__2890;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.template_demo2 = (function template_demo2(fruit_data){
var vec__2893__2894 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})]));
var id_sym2891__2895 = cljs.core.nth.call(null,vec__2893__2894,0,null);
var pnod2892__2896 = cljs.core.nth.call(null,vec__2893__2894,1,null);
var pnod2892__2897 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2892__2896):pnod2892__2896);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2891__2895,pnod2892__2897,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2891__2895,pnod2892__2897,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,fruit_data)))).call(null,enfocus.core.css_select.call(null,id_sym2891__2895,pnod2892__2897,cljs.core.Vector.fromArray(["tfoot tr > *:last-child"])));
enfocus.core.en_content.call(null,cljs.core.map.call(null,(function (p1__2883_SHARP_){
return enfocus.demo.site.snippet2.call(null,p1__2883_SHARP_,fruit_data.call(null,p1__2883_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym2891__2895,pnod2892__2897,cljs.core.Vector.fromArray(["tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2891__2895,pnod2892__2897);
return enfocus.core.remove_node_return_child.call(null,pnod2892__2897);
} else
{return pnod2892__2897;
}
});
enfocus.demo.site.doc_template_page = (function doc_template_page(){
var nods__2470__auto____2899 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2898){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_template.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2898,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2901 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2900){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2900,cljs.core.Vector.fromArray(["#doc-template"])));
return pnod2900;
}),nods__2470__auto____2901));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2898,cljs.core.Vector.fromArray(["#template-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2903 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2902){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2902,cljs.core.Vector.fromArray(["#doc-snippet"])));
return pnod2902;
}),nods__2470__auto____2903));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2898,cljs.core.Vector.fromArray(["#snippet-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2905 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2904){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2904,cljs.core.Vector.fromArray(["#doc-load"])));
return pnod2904;
}),nods__2470__auto____2905));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2898,cljs.core.Vector.fromArray(["#load-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2907 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2906){
enfocus.core.en_content.call(null,enfocus.demo.site.template_demo.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":8,"pear":9}))).call(null,enfocus.core.css_select.call(null,"",pnod2906,cljs.core.Vector.fromArray(["#template-demo"])));
return pnod2906;
}),nods__2470__auto____2907));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2898,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2909 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2908){
enfocus.core.en_content.call(null,enfocus.demo.site.template_demo2.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":6,"pear":5}))).call(null,enfocus.core.css_select.call(null,"",pnod2908,cljs.core.Vector.fromArray(["#snippet-demo"])));
return pnod2908;
}),nods__2470__auto____2909));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2898,cljs.core.Vector.fromArray(["#button2"])));
return pnod2898;
}),nods__2470__auto____2899));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/data-extraction.html");
enfocus.demo.site.doc_from = (function doc_from(){
var vec__2913__2914 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/data-extraction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/data-extraction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/data-extraction.html");
})]));
var id_sym2911__2915 = cljs.core.nth.call(null,vec__2913__2914,0,null);
var pnod2912__2916 = cljs.core.nth.call(null,vec__2913__2914,1,null);
var pnod2912__2917 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2912__2916):pnod2912__2916);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2911__2915,pnod2912__2917);
return enfocus.core.remove_node_return_child.call(null,pnod2912__2917);
} else
{return pnod2912__2917;
}
});
enfocus.demo.site.get_attr_demo = (function get_attr_demo(){
var values__2923 = (function (){var nods__2481__auto____2920 = enfocus.core.nodes__GT_coll.call(null,document);
var map2919__2921 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var map_list__2482__auto____2922 = cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2918){
cljs.core.swap_BANG_.call(null,map2919__2921,cljs.core.assoc,"﷐'field1",enfocus.core.en_get_attr.call(null,"﷐'value").call(null,enfocus.core.css_select.call(null,"",pnod2918,cljs.core.Vector.fromArray(["#get-attr-field1"]))));
cljs.core.swap_BANG_.call(null,map2919__2921,cljs.core.assoc,"﷐'field2",enfocus.core.en_get_attr.call(null,"﷐'value").call(null,enfocus.core.css_select.call(null,"",pnod2918,cljs.core.Vector.fromArray(["#get-attr-field2"]))));
cljs.core.swap_BANG_.call(null,map2919__2921,cljs.core.assoc,"﷐'field3",enfocus.core.en_filter.call(null,(function (p1__2910_SHARP_){
return p1__2910_SHARP_.checked;
}),enfocus.core.en_get_attr.call(null,"﷐'value")).call(null,enfocus.core.css_select.call(null,"",pnod2918,cljs.core.Vector.fromArray(["input[name='get-attr-field3']"]))));
return pnod2918;
}),nods__2481__auto____2920));

return cljs.core.deref.call(null,map2919__2921);
})();

var nods__2470__auto____2925 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2924){
enfocus.core.en_content.call(null,cljs.core.pr_str.call(null,values__2923)).call(null,enfocus.core.css_select.call(null,"",pnod2924,cljs.core.Vector.fromArray(["#get-attr-demo"])));
return pnod2924;
}),nods__2470__auto____2925));
return document;
});
enfocus.demo.site.get_text_demo = (function get_text_demo(){
var txt__2926 = enfocus.core.en_get_text.call(null).call(null,enfocus.core.css_select.call(null,cljs.core.Vector.fromArray(["#button2"])));

var nods__2470__auto____2928 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2927){
enfocus.core.en_content.call(null,txt__2926).call(null,enfocus.core.css_select.call(null,"",pnod2927,cljs.core.Vector.fromArray(["#get-text-demo"])));
return pnod2927;
}),nods__2470__auto____2928));
return document;
});
enfocus.demo.site.doc_from_page = (function doc_from_page(){
var nods__2470__auto____2930 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2929){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_from.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2929,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2932 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2931){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2931,cljs.core.Vector.fromArray(["#doc-from"])));
return pnod2931;
}),nods__2470__auto____2932));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2929,cljs.core.Vector.fromArray(["#from-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2934 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2933){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2933,cljs.core.Vector.fromArray(["#doc-get-attr"])));
return pnod2933;
}),nods__2470__auto____2934));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2929,cljs.core.Vector.fromArray(["#get-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2936 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2935){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2935,cljs.core.Vector.fromArray(["#doc-get-text"])));
return pnod2935;
}),nods__2470__auto____2936));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2929,cljs.core.Vector.fromArray(["#get-text-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2929,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_text_demo).call(null,enfocus.core.css_select.call(null,"",pnod2929,cljs.core.Vector.fromArray(["#button2"])));
return pnod2929;
}),nods__2470__auto____2930));
return document;
});
