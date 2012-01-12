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
var nods__2470__auto____2658 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2657){
enfocus.core.chainable_standard.call(null,(function (pnod__2613__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2470__auto____2660 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"),enfocus.core.en_fade_in.call(null,1000,null,null)));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2659){
return pnod2659;
}),nods__2470__auto____2660));
return enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"),enfocus.core.en_fade_in.call(null,1000,null,null));
})().call(null,pnod__2613__auto__);
}),1000);
})).call(null,enfocus.core.css_select.call(null,"",pnod2657,cljs.core.Vector.fromArray(["#menu"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.home_page).call(null,enfocus.core.css_select.call(null,"",pnod2657,cljs.core.Vector.fromArray(["#home-button"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.gstarted_page).call(null,enfocus.core.css_select.call(null,"",pnod2657,cljs.core.Vector.fromArray(["#gstarted-button"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_trans_page).call(null,enfocus.core.css_select.call(null,"",pnod2657,cljs.core.Vector.fromArray(["#doc-trans"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_events_page).call(null,enfocus.core.css_select.call(null,"",pnod2657,cljs.core.Vector.fromArray(["#doc-events"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_effects_page).call(null,enfocus.core.css_select.call(null,"",pnod2657,cljs.core.Vector.fromArray(["#doc-effects"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_template_page).call(null,enfocus.core.css_select.call(null,"",pnod2657,cljs.core.Vector.fromArray(["#doc-remote"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_from_page).call(null,enfocus.core.css_select.call(null,"",pnod2657,cljs.core.Vector.fromArray(["#doc-extract"])));
(function (pnod__2635__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__2635__auto__,(function (pnod__2635__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__2635__auto__,(function (pnod__2634__auto__){
return enfocus.core.en_content.call(null,enfocus.demo.site.home.call(null)).call(null,pnod__2634__auto__);
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2657,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2657;
}),nods__2470__auto____2658));
return document;
});
enfocus.demo.site.resize_pane = (function resize_pane(width,height){
var nods__2470__auto____2662 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2661){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_resize.call(null,width,height,200,null,null)).call(null,enfocus.core.css_select.call(null,"",pnod2661,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2661;
}),nods__2470__auto____2662));
return document;
});
enfocus.demo.site.resize_content_pane = (function resize_content_pane(){
var size__2663 = goog.dom.getViewportSize.call(null);
var width__2664 = (size__2663.width - 40);
var height__2665 = (size__2663.height - 70);

return enfocus.demo.site.resize_pane.call(null,width__2664,height__2665);
});
enfocus.demo.site.init_content_pane = (function init_content_pane(){
var size__2668 = goog.dom.getViewportSize.call(null);
var width__2669 = (size__2668.width - 40);
var height__2670 = (size__2668.height - 70);

enfocus.demo.site.setup_pane.call(null,width__2669,height__2670);
enfocus.core.en_listen.call(null,"﷐'resize",enfocus.demo.site.resize_content_pane).call(null,window);
return window;
});
enfocus.demo.site.start = (function start(){
var nods__2470__auto____2672 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2671){
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod2671,cljs.core.Vector.fromArray(["#inner-circle"])));
enfocus.core.en_listen.call(null,"﷐'mouseenter",(function (p1__2666_SHARP_){
var nods__2470__auto____2674 = enfocus.core.nodes__GT_coll.call(null,p1__2666_SHARP_.currentTarget);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2673){
enfocus.core.en_resize.call(null,"﷐'curwidth",145,500,null,null).call(null,enfocus.core.css_select.call(null,"",pnod2673,cljs.core.Vector.fromArray([".sub"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_add_class.call(null,"blur-highlight"),enfocus.core.chainable_standard.call(null,(function (pnod__2613__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2470__auto____2676 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_remove_class.call(null,"blur-highlight"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2675){
return pnod2675;
}),nods__2470__auto____2676));
return enfocus.core.en_remove_class.call(null,"blur-highlight");
})().call(null,pnod__2613__auto__);
}),200);
}))).call(null,enfocus.core.css_select.call(null,"",pnod2673,cljs.core.Vector.fromArray(["h3"])));
return pnod2673;
}),nods__2470__auto____2674));
return p1__2666_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2671,cljs.core.Vector.fromArray([".marea"])));
enfocus.core.en_listen.call(null,"﷐'mouseleave",(function (p1__2667_SHARP_){
var nods__2470__auto____2678 = enfocus.core.nodes__GT_coll.call(null,p1__2667_SHARP_.currentTarget);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2677){
enfocus.core.en_resize.call(null,"﷐'curwidth",0,500,null,null).call(null,enfocus.core.css_select.call(null,"",pnod2677,cljs.core.Vector.fromArray([".sub"])));
return pnod2677;
}),nods__2470__auto____2678));
return p1__2667_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2671,cljs.core.Vector.fromArray([".marea"])));
return pnod2671;
}),nods__2470__auto____2672));
return document;
});
window.onload = enfocus.demo.site.start;
enfocus.core.load_remote_dom.call(null,"templates/home.html");
enfocus.demo.site.home = (function home(){
var vec__2681__2682 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
})]));
var id_sym2679__2683 = cljs.core.nth.call(null,vec__2681__2682,0,null);
var pnod2680__2684 = cljs.core.nth.call(null,vec__2681__2682,1,null);
var pnod2680__2685 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2680__2684):pnod2680__2684);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2679__2683,pnod2680__2685);
return enfocus.core.remove_node_return_child.call(null,pnod2680__2685);
} else
{return pnod2680__2685;
}
});
enfocus.demo.site.home_page = (function home_page(){
var nods__2470__auto____2687 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2686){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.home.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2686,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2686;
}),nods__2470__auto____2687));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/getting-started.html");
enfocus.demo.site.gstarted = (function gstarted(){
var vec__2691__2692 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
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
enfocus.demo.site.gstarted_page = (function gstarted_page(){
var nods__2470__auto____2697 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2696){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.gstarted.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2696,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (p1__2688_SHARP_){
enfocus.core.en_content.call(null,"I have been clicked").call(null,p1__2688_SHARP_.currentTarget);
return p1__2688_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2696,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2699 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2698){
(function (pnod__2635__auto__){
return enfocus.core.en_resize.call(null,200,"﷐'curheight",500,null,null).call(null,pnod__2635__auto__,(function (pnod__2634__auto__){
return enfocus.core.en_resize.call(null,5,"﷐'curheight",500,null,null).call(null,pnod__2634__auto__);
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2698,cljs.core.Vector.fromArray(["#rz-demo"])));
return pnod2698;
}),nods__2470__auto____2699));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2696,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.clone_for_demo).call(null,enfocus.core.css_select.call(null,"",pnod2696,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_prop_demo).call(null,enfocus.core.css_select.call(null,"",pnod2696,cljs.core.Vector.fromArray(["#button4"])));
return pnod2696;
}),nods__2470__auto____2697));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/standard-transforms.html");
enfocus.demo.site.doc_trans = (function doc_trans(){
var vec__2702__2703 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
})]));
var id_sym2700__2704 = cljs.core.nth.call(null,vec__2702__2703,0,null);
var pnod2701__2705 = cljs.core.nth.call(null,vec__2702__2703,1,null);
var pnod2701__2706 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2701__2705):pnod2701__2705);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2700__2704,pnod2701__2706);
return enfocus.core.remove_node_return_child.call(null,pnod2701__2706);
} else
{return pnod2701__2706;
}
});
enfocus.demo.site.content_demo = (function content_demo(){
var nods__2470__auto____2708 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2707){
enfocus.core.en_content.call(null,"I have been clicked").call(null,enfocus.core.css_select.call(null,"",pnod2707,cljs.core.Vector.fromArray(["#button1"])));
return pnod2707;
}),nods__2470__auto____2708));
return document;
});
enfocus.demo.site.html_content_demo = (function html_content_demo(){
var nods__2470__auto____2710 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2709){
enfocus.core.en_html_content.call(null,"<span style='color: #ff3333'>I replaced the text</span>").call(null,enfocus.core.css_select.call(null,"",pnod2709,cljs.core.Vector.fromArray(["#html-content-demo"])));
return pnod2709;
}),nods__2470__auto____2710));
return document;
});
enfocus.demo.site.set_attr_demo = (function set_attr_demo(){
var nods__2470__auto____2712 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2711){
enfocus.core.en_set_attr.call(null,"﷐'foo","bar").call(null,enfocus.core.css_select.call(null,"",pnod2711,cljs.core.Vector.fromArray(["#button3"])));
return pnod2711;
}),nods__2470__auto____2712));
return document;
});
enfocus.demo.site.remove_attr_demo = (function remove_attr_demo(){
var nods__2470__auto____2714 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2713){
enfocus.core.en_remove_attr.call(null,"﷐'foo").call(null,enfocus.core.css_select.call(null,"",pnod2713,cljs.core.Vector.fromArray(["#button4"])));
return pnod2713;
}),nods__2470__auto____2714));
return document;
});
enfocus.demo.site.add_class_demo = (function add_class_demo(){
var nods__2470__auto____2716 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2715){
enfocus.core.en_add_class.call(null,"highlight").call(null,enfocus.core.css_select.call(null,"",pnod2715,cljs.core.Vector.fromArray(["#button5"])));
return pnod2715;
}),nods__2470__auto____2716));
return document;
});
enfocus.demo.site.remove_class_demo = (function remove_class_demo(){
var nods__2470__auto____2718 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2717){
enfocus.core.en_remove_class.call(null,"highlight").call(null,enfocus.core.css_select.call(null,"",pnod2717,cljs.core.Vector.fromArray(["#button6"])));
return pnod2717;
}),nods__2470__auto____2718));
return document;
});
enfocus.demo.site.do_demo = (function do_demo(){
var nods__2470__auto____2720 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2719){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_attr.call(null,"﷐'foo","bar"),enfocus.core.en_add_class.call(null,"highlight")).call(null,enfocus.core.css_select.call(null,"",pnod2719,cljs.core.Vector.fromArray(["#button7"])));
return pnod2719;
}),nods__2470__auto____2720));
return document;
});
enfocus.demo.site.append_demo = (function append_demo(){
var nods__2470__auto____2722 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2721){
enfocus.core.en_append.call(null,":append").call(null,enfocus.core.css_select.call(null,"",pnod2721,cljs.core.Vector.fromArray(["#button8"])));
return pnod2721;
}),nods__2470__auto____2722));
return document;
});
enfocus.demo.site.prepend_demo = (function prepend_demo(){
var nods__2470__auto____2724 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2723){
enfocus.core.en_prepend.call(null,"prepend:").call(null,enfocus.core.css_select.call(null,"",pnod2723,cljs.core.Vector.fromArray(["#button9"])));
return pnod2723;
}),nods__2470__auto____2724));
return document;
});
enfocus.demo.site.after_demo = (function after_demo(){
var nods__2470__auto____2726 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2725){
enfocus.core.en_after.call(null,":after").call(null,enfocus.core.css_select.call(null,"",pnod2725,cljs.core.Vector.fromArray(["#button10"])));
return pnod2725;
}),nods__2470__auto____2726));
return document;
});
enfocus.demo.site.before_demo = (function before_demo(){
var nods__2470__auto____2728 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2727){
enfocus.core.en_before.call(null,"before:").call(null,enfocus.core.css_select.call(null,"",pnod2727,cljs.core.Vector.fromArray(["#button11"])));
return pnod2727;
}),nods__2470__auto____2728));
return document;
});
enfocus.demo.site.sub_demo = (function sub_demo(){
var nods__2470__auto____2730 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2729){
enfocus.core.en_substitute.call(null,"I replaced the button").call(null,enfocus.core.css_select.call(null,"",pnod2729,cljs.core.Vector.fromArray(["#button12"])));
return pnod2729;
}),nods__2470__auto____2730));
return document;
});
enfocus.demo.site.clone_for_demo = (function clone_for_demo(){
var fruit_data__2731 = cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":5,"pear":6});

var nods__2470__auto____2733 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2732){
enfocus.core.chainable_standard.call(null,(function (pnod__2579__auto__){
var div__2580__auto____2734 = enfocus.core.create_hidden_dom.call(null,document.createDocumentFragment());

enfocus.core.log_debug.call(null,pnod__2579__auto__);
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,cljs.core.vec.call(null,fruit_data__2731)));
var G__2735__2736 = cljs.core.seq.call(null,cljs.core.vec.call(null,fruit_data__2731));

if(cljs.core.truth_(G__2735__2736))
{var fr__2737 = cljs.core.first.call(null,G__2735__2736);
var G__2735__2738 = G__2735__2736;

while(true){
enfocus.core.en_append.call(null,pnod__2579__auto__.cloneNode(true)).call(null,div__2580__auto____2734);
div__2580__auto____2734;
var nods__2470__auto____2740 = enfocus.core.nodes__GT_coll.call(null,goog.dom.getLastElementChild.call(null,div__2580__auto____2734));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fr__2737,G__2735__2738){
return (function (pnod2739){
enfocus.core.en_content.call(null,cljs.core.first.call(null,fr__2737)).call(null,enfocus.core.css_select.call(null,"",pnod2739,cljs.core.Vector.fromArray(["*:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.second.call(null,fr__2737))).call(null,enfocus.core.css_select.call(null,"",pnod2739,cljs.core.Vector.fromArray(["*:last-child"])));
return pnod2739;
});})(fr__2737,G__2735__2738))
,nods__2470__auto____2740));
goog.dom.getLastElementChild.call(null,div__2580__auto____2734);
var temp__3698__auto____2741 = cljs.core.next.call(null,G__2735__2738);

if(cljs.core.truth_(temp__3698__auto____2741))
{var G__2735__2742 = temp__3698__auto____2741;

{
var G__2743 = cljs.core.first.call(null,G__2735__2742);
var G__2744 = G__2735__2742;
fr__2737 = G__2743;
G__2735__2738 = G__2744;
continue;
}
} else
{}
break;
}
} else
{}
enfocus.core.log_debug.call(null,div__2580__auto____2734);
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,enfocus.core.remove_node_return_child.call(null,div__2580__auto____2734)),enfocus.core.en_remove_node.call(null)).call(null,pnod__2579__auto__);
return pnod__2579__auto__;
})).call(null,enfocus.core.css_select.call(null,"",pnod2732,cljs.core.Vector.fromArray(["#clone-for-demo tbody > tr:first-child"])));
return pnod2732;
}),nods__2470__auto____2733));
return document;
});
enfocus.demo.site.wrap_demo = (function wrap_demo(){
var nods__2470__auto____2746 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2745){
enfocus.core.en_wrap.call(null,"﷐'span",cljs.core.ObjMap.fromObject(["﷐'class"],{"﷐'class":"highlight"})).call(null,enfocus.core.css_select.call(null,"",pnod2745,cljs.core.Vector.fromArray(["#button14"])));
return pnod2745;
}),nods__2470__auto____2746));
return document;
});
enfocus.demo.site.unwrap_demo = (function unwrap_demo(){
var nods__2470__auto____2748 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2747){
enfocus.core.en_unwrap.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2747,cljs.core.Vector.fromArray(["#button15"])));
return pnod2747;
}),nods__2470__auto____2748));
return document;
});
enfocus.demo.site.set_style_demo = (function set_style_demo(){
var nods__2470__auto____2750 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2749){
enfocus.core.en_set_style.call(null,"﷐'border","2px solid blue").call(null,enfocus.core.css_select.call(null,"",pnod2749,cljs.core.Vector.fromArray(["#button16"])));
return pnod2749;
}),nods__2470__auto____2750));
return document;
});
enfocus.demo.site.remove_style_demo = (function remove_style_demo(){
var nods__2470__auto____2754 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2753){
enfocus.core.en_remove_style.call(null,"﷐'border").call(null,enfocus.core.css_select.call(null,"",pnod2753,cljs.core.Vector.fromArray(["#button17"])));
return pnod2753;
}),nods__2470__auto____2754));
return document;
});
enfocus.demo.site.filter_demo = (function filter_demo(){
var nods__2470__auto____2756 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2755){
enfocus.core.en_filter.call(null,(function (p1__2751_SHARP_){
return (0 > p1__2751_SHARP_.value.indexOf("@"));
}),enfocus.core.en_set_style.call(null,"﷐'background-color","red")).call(null,enfocus.core.css_select.call(null,"",pnod2755,cljs.core.Vector.fromArray(["#email-field"])));
enfocus.core.en_filter.call(null,(function (p1__2752_SHARP_){
return (0 <= p1__2752_SHARP_.value.indexOf("@"));
}),enfocus.core.en_set_style.call(null,"﷐'background-color","green")).call(null,enfocus.core.css_select.call(null,"",pnod2755,cljs.core.Vector.fromArray(["#email-field"])));
return pnod2755;
}),nods__2470__auto____2756));
return document;
});
enfocus.demo.site.doc_trans_page = (function doc_trans_page(){
var nods__2470__auto____2758 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2757){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_trans.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2760 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2759){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2759,cljs.core.Vector.fromArray(["#doc-at"])));
return pnod2759;
}),nods__2470__auto____2760));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#at-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2762 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2761){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2761,cljs.core.Vector.fromArray(["#doc-content"])));
return pnod2761;
}),nods__2470__auto____2762));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#content-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2764 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2763){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2763,cljs.core.Vector.fromArray(["#doc-html-content"])));
return pnod2763;
}),nods__2470__auto____2764));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#html-content-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2766 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2765){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2765,cljs.core.Vector.fromArray(["#doc-set-attr"])));
return pnod2765;
}),nods__2470__auto____2766));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#set-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2768 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2767){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2767,cljs.core.Vector.fromArray(["#doc-remove-attr"])));
return pnod2767;
}),nods__2470__auto____2768));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#remove-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2770 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2769){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2769,cljs.core.Vector.fromArray(["#doc-add-class"])));
return pnod2769;
}),nods__2470__auto____2770));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#add-class-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2772 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2771){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2771,cljs.core.Vector.fromArray(["#doc-remove-class"])));
return pnod2771;
}),nods__2470__auto____2772));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#remove-class-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2774 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2773){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2773,cljs.core.Vector.fromArray(["#doc-do"])));
return pnod2773;
}),nods__2470__auto____2774));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#do-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2776 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2775){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2775,cljs.core.Vector.fromArray(["#doc-append"])));
return pnod2775;
}),nods__2470__auto____2776));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#append-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2778 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2777){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2777,cljs.core.Vector.fromArray(["#doc-prepend"])));
return pnod2777;
}),nods__2470__auto____2778));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#prepend-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2780 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2779){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2779,cljs.core.Vector.fromArray(["#doc-after"])));
return pnod2779;
}),nods__2470__auto____2780));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#after-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2782 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2781){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2781,cljs.core.Vector.fromArray(["#doc-before"])));
return pnod2781;
}),nods__2470__auto____2782));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#before-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2784 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2783){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2783,cljs.core.Vector.fromArray(["#doc-sub"])));
return pnod2783;
}),nods__2470__auto____2784));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#substitute-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2786 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2785){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2785,cljs.core.Vector.fromArray(["#doc-clone-for"])));
return pnod2785;
}),nods__2470__auto____2786));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#clone-for-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2788 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2787){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2787,cljs.core.Vector.fromArray(["#doc-wrap"])));
return pnod2787;
}),nods__2470__auto____2788));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#wrap-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2790 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2789){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2789,cljs.core.Vector.fromArray(["#doc-unwrap"])));
return pnod2789;
}),nods__2470__auto____2790));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#unwrap-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2792 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2791){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2791,cljs.core.Vector.fromArray(["#doc-set-style"])));
return pnod2791;
}),nods__2470__auto____2792));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#set-style-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2794 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2793){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2793,cljs.core.Vector.fromArray(["#doc-remove-style"])));
return pnod2793;
}),nods__2470__auto____2794));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#remove-style-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2796 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2795){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2795,cljs.core.Vector.fromArray(["#doc-filter"])));
return pnod2795;
}),nods__2470__auto____2796));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#filter-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.content_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.html_content_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.set_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button4"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.add_class_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button5"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_class_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button6"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.do_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button7"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.append_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button8"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.prepend_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button9"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.after_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button10"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.before_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button11"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.sub_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button12"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.clone_for_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button13"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.wrap_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button14"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.unwrap_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button15"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.set_style_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button16"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_style_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button17"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.filter_demo).call(null,enfocus.core.css_select.call(null,"",pnod2757,cljs.core.Vector.fromArray(["#button18"])));
return pnod2757;
}),nods__2470__auto____2758));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/handling-events.html");
enfocus.demo.site.doc_event = (function doc_event(){
var vec__2799__2800 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
})]));
var id_sym2797__2801 = cljs.core.nth.call(null,vec__2799__2800,0,null);
var pnod2798__2802 = cljs.core.nth.call(null,vec__2799__2800,1,null);
var pnod2798__2803 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2798__2802):pnod2798__2802);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2797__2801,pnod2798__2803);
return enfocus.core.remove_node_return_child.call(null,pnod2798__2803);
} else
{return pnod2798__2803;
}
});
enfocus.demo.site.remove_demo = (function remove_demo(){
var nods__2470__auto____2808 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2807){
enfocus.core.en_remove_listener.call(null,"﷐'mouseenter","﷐'mouseleave").call(null,enfocus.core.css_select.call(null,"",pnod2807,cljs.core.Vector.fromArray(["#remove-demo"])));
return pnod2807;
}),nods__2470__auto____2808));
return document;
});
enfocus.demo.site.doc_events_page = (function doc_events_page(){
var nods__2470__auto____2810 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2809){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_event.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2809,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2812 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2811){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2811,cljs.core.Vector.fromArray(["#doc-listen"])));
return pnod2811;
}),nods__2470__auto____2812));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2809,cljs.core.Vector.fromArray(["#listen-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2814 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2813){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2813,cljs.core.Vector.fromArray(["#doc-remove"])));
return pnod2813;
}),nods__2470__auto____2814));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2809,cljs.core.Vector.fromArray(["#remove-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2816 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2815){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2815,cljs.core.Vector.fromArray(["#doc-support"])));
return pnod2815;
}),nods__2470__auto____2816));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2809,cljs.core.Vector.fromArray(["#support-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (p1__2804_SHARP_){
enfocus.core.en_content.call(null,"I have been replaced").call(null,p1__2804_SHARP_.currentTarget);
return p1__2804_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2809,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'mouseenter",(function (p1__2805_SHARP_){
enfocus.core.en_add_class.call(null,"highlight").call(null,p1__2805_SHARP_.currentTarget);
return p1__2805_SHARP_.currentTarget;
})),enfocus.core.en_listen.call(null,"﷐'mouseleave",(function (p1__2806_SHARP_){
enfocus.core.en_remove_class.call(null,"highlight").call(null,p1__2806_SHARP_.currentTarget);
return p1__2806_SHARP_.currentTarget;
}))).call(null,enfocus.core.css_select.call(null,"",pnod2809,cljs.core.Vector.fromArray(["#remove-demo"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_demo).call(null,enfocus.core.css_select.call(null,"",pnod2809,cljs.core.Vector.fromArray(["#button2"])));
return pnod2809;
}),nods__2470__auto____2810));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/effects-timing.html");
enfocus.demo.site.doc_effect = (function doc_effect(){
var vec__2819__2820 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
})]));
var id_sym2817__2821 = cljs.core.nth.call(null,vec__2819__2820,0,null);
var pnod2818__2822 = cljs.core.nth.call(null,vec__2819__2820,1,null);
var pnod2818__2823 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2818__2822):pnod2818__2822);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2817__2821,pnod2818__2823);
return enfocus.core.remove_node_return_child.call(null,pnod2818__2823);
} else
{return pnod2818__2823;
}
});
enfocus.demo.site.resize_demo = (function resize_demo(){
var nods__2470__auto____2825 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2824){
enfocus.core.en_resize.call(null,200,"﷐'curheight",500,enfocus.core.en_resize.call(null,5,"﷐'curheight",500,null,null),null).call(null,enfocus.core.css_select.call(null,"",pnod2824,cljs.core.Vector.fromArray(["#rz-demo"])));
return pnod2824;
}),nods__2470__auto____2825));
return document;
});
enfocus.demo.site.move_demo = (function move_demo(){
var nods__2470__auto____2827 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2826){
enfocus.core.en_move.call(null,300,"﷐'cury",500,enfocus.core.en_move.call(null,-20,"﷐'cury",500,null,null),null).call(null,enfocus.core.css_select.call(null,"",pnod2826,cljs.core.Vector.fromArray(["#mv-demo"])));
return pnod2826;
}),nods__2470__auto____2827));
return document;
});
enfocus.demo.site.fade_demo = (function fade_demo(){
var nods__2470__auto____2829 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2828){
enfocus.core.en_fade_out.call(null,500,enfocus.core.en_fade_in.call(null,500,null,null),null).call(null,enfocus.core.css_select.call(null,"",pnod2828,cljs.core.Vector.fromArray(["#fade-demo"])));
return pnod2828;
}),nods__2470__auto____2829));
return document;
});
enfocus.demo.site.delay_demo = (function delay_demo(){
var nods__2470__auto____2831 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2830){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_resize.call(null,200,"﷐'curheight",500,null,null),enfocus.core.chainable_standard.call(null,(function (pnod__2613__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2470__auto____2833 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_resize.call(null,50,"﷐'curheight",500,null,null));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2832){
return pnod2832;
}),nods__2470__auto____2833));
return enfocus.core.en_resize.call(null,50,"﷐'curheight",500,null,null);
})().call(null,pnod__2613__auto__);
}),2000);
}))).call(null,enfocus.core.css_select.call(null,"",pnod2830,cljs.core.Vector.fromArray(["#delay-demo"])));
return pnod2830;
}),nods__2470__auto____2831));
return document;
});
enfocus.demo.site.chain_demo = (function chain_demo(){
var nods__2470__auto____2835 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2834){
(function (pnod__2635__auto__){
return enfocus.core.en_resize.call(null,200,"﷐'curheight",500,null,null).call(null,pnod__2635__auto__,(function (pnod__2634__auto__){
return enfocus.core.en_resize.call(null,5,"﷐'curheight",500,null,null).call(null,pnod__2634__auto__);
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2834,cljs.core.Vector.fromArray(["#chain-demo"])));
return pnod2834;
}),nods__2470__auto____2835));
return document;
});
enfocus.demo.site.doc_effects_page = (function doc_effects_page(){
var nods__2470__auto____2837 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2836){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_effect.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2836,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2839 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2838){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2838,cljs.core.Vector.fromArray(["#doc-resize"])));
return pnod2838;
}),nods__2470__auto____2839));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2836,cljs.core.Vector.fromArray(["#resize-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2841 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2840){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2840,cljs.core.Vector.fromArray(["#doc-move"])));
return pnod2840;
}),nods__2470__auto____2841));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2836,cljs.core.Vector.fromArray(["#move-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2843 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2842){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2842,cljs.core.Vector.fromArray(["#doc-fade"])));
return pnod2842;
}),nods__2470__auto____2843));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2836,cljs.core.Vector.fromArray(["#fade-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2845 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2844){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2844,cljs.core.Vector.fromArray(["#doc-delay"])));
return pnod2844;
}),nods__2470__auto____2845));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2836,cljs.core.Vector.fromArray(["#delay-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2847 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2846){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#doc-chain"])));
return pnod2846;
}),nods__2470__auto____2847));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2836,cljs.core.Vector.fromArray(["#chain-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.resize_demo).call(null,enfocus.core.css_select.call(null,"",pnod2836,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.move_demo).call(null,enfocus.core.css_select.call(null,"",pnod2836,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.fade_demo).call(null,enfocus.core.css_select.call(null,"",pnod2836,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.delay_demo).call(null,enfocus.core.css_select.call(null,"",pnod2836,cljs.core.Vector.fromArray(["#button4"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.chain_demo).call(null,enfocus.core.css_select.call(null,"",pnod2836,cljs.core.Vector.fromArray(["#button5"])));
return pnod2836;
}),nods__2470__auto____2837));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/templates-snippets.html");
enfocus.demo.site.doc_template = (function doc_template(){
var vec__2850__2851 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
})]));
var id_sym2848__2852 = cljs.core.nth.call(null,vec__2850__2851,0,null);
var pnod2849__2853 = cljs.core.nth.call(null,vec__2850__2851,1,null);
var pnod2849__2854 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2849__2853):pnod2849__2853);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2848__2852,pnod2849__2854);
return enfocus.core.remove_node_return_child.call(null,pnod2849__2854);
} else
{return pnod2849__2854;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.template_demo = (function template_demo(fruit_data){
var vec__2857__2858 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})]));
var id_sym2855__2859 = cljs.core.nth.call(null,vec__2857__2858,0,null);
var pnod2856__2860 = cljs.core.nth.call(null,vec__2857__2858,1,null);
var pnod2856__2861 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2856__2860):pnod2856__2860);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2855__2859,pnod2856__2861,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2855__2859,pnod2856__2861,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.en_remove_node.call(null).call(null,enfocus.core.css_select.call(null,id_sym2855__2859,pnod2856__2861,cljs.core.Vector.fromArray(["tbody > tr:not(:first-child)"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,fruit_data)))).call(null,enfocus.core.css_select.call(null,id_sym2855__2859,pnod2856__2861,cljs.core.Vector.fromArray(["tfoot tr > *:last-child"])));
enfocus.core.chainable_standard.call(null,(function (pnod__2579__auto__){
var div__2580__auto____2862 = enfocus.core.create_hidden_dom.call(null,document.createDocumentFragment());

enfocus.core.log_debug.call(null,pnod__2579__auto__);
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,cljs.core.vec.call(null,fruit_data)));
var G__2863__2864 = cljs.core.seq.call(null,cljs.core.vec.call(null,fruit_data));

if(cljs.core.truth_(G__2863__2864))
{var fr__2865 = cljs.core.first.call(null,G__2863__2864);
var G__2863__2866 = G__2863__2864;

while(true){
enfocus.core.en_append.call(null,pnod__2579__auto__.cloneNode(true)).call(null,div__2580__auto____2862);
div__2580__auto____2862;
var nods__2470__auto____2868 = enfocus.core.nodes__GT_coll.call(null,goog.dom.getLastElementChild.call(null,div__2580__auto____2862));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fr__2865,G__2863__2866){
return (function (pnod2867){
enfocus.core.en_content.call(null,cljs.core.first.call(null,fr__2865)).call(null,enfocus.core.css_select.call(null,"",pnod2867,cljs.core.Vector.fromArray(["*:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.second.call(null,fr__2865))).call(null,enfocus.core.css_select.call(null,"",pnod2867,cljs.core.Vector.fromArray(["*:last-child"])));
return pnod2867;
});})(fr__2865,G__2863__2866))
,nods__2470__auto____2868));
goog.dom.getLastElementChild.call(null,div__2580__auto____2862);
var temp__3698__auto____2869 = cljs.core.next.call(null,G__2863__2866);

if(cljs.core.truth_(temp__3698__auto____2869))
{var G__2863__2870 = temp__3698__auto____2869;

{
var G__2871 = cljs.core.first.call(null,G__2863__2870);
var G__2872 = G__2863__2870;
fr__2865 = G__2871;
G__2863__2866 = G__2872;
continue;
}
} else
{}
break;
}
} else
{}
enfocus.core.log_debug.call(null,div__2580__auto____2862);
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,enfocus.core.remove_node_return_child.call(null,div__2580__auto____2862)),enfocus.core.en_remove_node.call(null)).call(null,pnod__2579__auto__);
return pnod__2579__auto__;
})).call(null,enfocus.core.css_select.call(null,id_sym2855__2859,pnod2856__2861,cljs.core.Vector.fromArray(["tbody > tr:first-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2855__2859,pnod2856__2861);
return enfocus.core.remove_node_return_child.call(null,pnod2856__2861);
} else
{return pnod2856__2861;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.snippet2 = (function snippet2(fruit,quantity){
var vec__2876__2877 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})]));
var id_sym2874__2878 = cljs.core.nth.call(null,vec__2876__2877,0,null);
var pnod2875__2879 = cljs.core.nth.call(null,vec__2876__2877,1,null);
var pnod2875__2880 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2875__2879):pnod2875__2879);

enfocus.core.en_content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2874__2878,pnod2875__2880,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2874__2878,pnod2875__2880,cljs.core.Vector.fromArray(["tr > *:last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2874__2878,pnod2875__2880);
return enfocus.core.remove_node_return_child.call(null,pnod2875__2880);
} else
{return pnod2875__2880;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.template_demo2 = (function template_demo2(fruit_data){
var vec__2883__2884 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})]));
var id_sym2881__2885 = cljs.core.nth.call(null,vec__2883__2884,0,null);
var pnod2882__2886 = cljs.core.nth.call(null,vec__2883__2884,1,null);
var pnod2882__2887 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2882__2886):pnod2882__2886);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2881__2885,pnod2882__2887,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2881__2885,pnod2882__2887,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,fruit_data)))).call(null,enfocus.core.css_select.call(null,id_sym2881__2885,pnod2882__2887,cljs.core.Vector.fromArray(["tfoot tr > *:last-child"])));
enfocus.core.en_content.call(null,cljs.core.map.call(null,(function (p1__2873_SHARP_){
return enfocus.demo.site.snippet2.call(null,p1__2873_SHARP_,fruit_data.call(null,p1__2873_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym2881__2885,pnod2882__2887,cljs.core.Vector.fromArray(["tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2881__2885,pnod2882__2887);
return enfocus.core.remove_node_return_child.call(null,pnod2882__2887);
} else
{return pnod2882__2887;
}
});
enfocus.demo.site.doc_template_page = (function doc_template_page(){
var nods__2470__auto____2889 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2888){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_template.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2888,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2891 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2890){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2890,cljs.core.Vector.fromArray(["#doc-template"])));
return pnod2890;
}),nods__2470__auto____2891));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2888,cljs.core.Vector.fromArray(["#template-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2893 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2892){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2892,cljs.core.Vector.fromArray(["#doc-snippet"])));
return pnod2892;
}),nods__2470__auto____2893));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2888,cljs.core.Vector.fromArray(["#snippet-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2895 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2894){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2894,cljs.core.Vector.fromArray(["#doc-load"])));
return pnod2894;
}),nods__2470__auto____2895));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2888,cljs.core.Vector.fromArray(["#load-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2897 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2896){
enfocus.core.en_content.call(null,enfocus.demo.site.template_demo.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":8,"pear":9}))).call(null,enfocus.core.css_select.call(null,"",pnod2896,cljs.core.Vector.fromArray(["#template-demo"])));
return pnod2896;
}),nods__2470__auto____2897));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2888,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2899 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2898){
enfocus.core.en_content.call(null,enfocus.demo.site.template_demo2.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":6,"pear":5}))).call(null,enfocus.core.css_select.call(null,"",pnod2898,cljs.core.Vector.fromArray(["#snippet-demo"])));
return pnod2898;
}),nods__2470__auto____2899));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2888,cljs.core.Vector.fromArray(["#button2"])));
return pnod2888;
}),nods__2470__auto____2889));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/data-extraction.html");
enfocus.demo.site.doc_from = (function doc_from(){
var vec__2903__2904 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/data-extraction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/data-extraction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/data-extraction.html");
})]));
var id_sym2901__2905 = cljs.core.nth.call(null,vec__2903__2904,0,null);
var pnod2902__2906 = cljs.core.nth.call(null,vec__2903__2904,1,null);
var pnod2902__2907 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2902__2906):pnod2902__2906);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2901__2905,pnod2902__2907);
return enfocus.core.remove_node_return_child.call(null,pnod2902__2907);
} else
{return pnod2902__2907;
}
});
enfocus.demo.site.get_prop_demo = (function get_prop_demo(){
var values__2913 = (function (){var nods__2481__auto____2910 = enfocus.core.nodes__GT_coll.call(null,document);
var map2909__2911 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var map_list__2482__auto____2912 = cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2908){
cljs.core.swap_BANG_.call(null,map2909__2911,cljs.core.assoc,"﷐'field1",enfocus.core.extr_multi_node.call(null,(function (pnod__2651__auto__){
return pnod__2651__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod2908,cljs.core.Vector.fromArray(["#get-prop-field1"]))));
cljs.core.swap_BANG_.call(null,map2909__2911,cljs.core.assoc,"﷐'field2",enfocus.core.extr_multi_node.call(null,(function (pnod__2651__auto__){
return pnod__2651__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod2908,cljs.core.Vector.fromArray(["#get-prop-field2"]))));
cljs.core.swap_BANG_.call(null,map2909__2911,cljs.core.assoc,"﷐'field3",enfocus.core.en_filter.call(null,(function (p1__2900_SHARP_){
return p1__2900_SHARP_.checked;
}),enfocus.core.extr_multi_node.call(null,(function (pnod__2651__auto__){
return pnod__2651__auto__.value;
}))).call(null,enfocus.core.css_select.call(null,"",pnod2908,cljs.core.Vector.fromArray(["input[name='get-prop-field3']"]))));
return pnod2908;
}),nods__2481__auto____2910));

return cljs.core.deref.call(null,map2909__2911);
})();

var nods__2470__auto____2915 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2914){
enfocus.core.en_content.call(null,cljs.core.pr_str.call(null,values__2913)).call(null,enfocus.core.css_select.call(null,"",pnod2914,cljs.core.Vector.fromArray(["#get-prop-demo"])));
return pnod2914;
}),nods__2470__auto____2915));
return document;
});
enfocus.demo.site.get_attr_demo = (function get_attr_demo(){
var value__2916 = enfocus.core.en_get_attr.call(null,"﷐'src").call(null,enfocus.core.css_select.call(null,cljs.core.Vector.fromArray(["#get-attr-img"])));

var nods__2470__auto____2918 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2917){
enfocus.core.en_content.call(null,cljs.core.pr_str.call(null,value__2916)).call(null,enfocus.core.css_select.call(null,"",pnod2917,cljs.core.Vector.fromArray(["#get-attr-demo"])));
return pnod2917;
}),nods__2470__auto____2918));
return document;
});
enfocus.demo.site.get_text_demo = (function get_text_demo(){
var txt__2919 = enfocus.core.en_get_text.call(null).call(null,enfocus.core.css_select.call(null,cljs.core.Vector.fromArray(["#button3"])));

var nods__2470__auto____2921 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2920){
enfocus.core.en_content.call(null,txt__2919).call(null,enfocus.core.css_select.call(null,"",pnod2920,cljs.core.Vector.fromArray(["#get-text-demo"])));
return pnod2920;
}),nods__2470__auto____2921));
return document;
});
enfocus.demo.site.doc_from_page = (function doc_from_page(){
var nods__2470__auto____2923 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2922){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_from.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2922,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2925 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2924){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2924,cljs.core.Vector.fromArray(["#doc-from"])));
return pnod2924;
}),nods__2470__auto____2925));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2922,cljs.core.Vector.fromArray(["#from-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2927 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2926){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2926,cljs.core.Vector.fromArray(["#doc-get-prop"])));
return pnod2926;
}),nods__2470__auto____2927));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2922,cljs.core.Vector.fromArray(["#get-prop-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2929 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2928){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2928,cljs.core.Vector.fromArray(["#doc-get-attr"])));
return pnod2928;
}),nods__2470__auto____2929));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2922,cljs.core.Vector.fromArray(["#get-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2470__auto____2931 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2930){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2930,cljs.core.Vector.fromArray(["#doc-get-text"])));
return pnod2930;
}),nods__2470__auto____2931));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2922,cljs.core.Vector.fromArray(["#get-text-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_prop_demo).call(null,enfocus.core.css_select.call(null,"",pnod2922,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2922,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_text_demo).call(null,enfocus.core.css_select.call(null,"",pnod2922,cljs.core.Vector.fromArray(["#button3"])));
return pnod2922;
}),nods__2470__auto____2923));
return document;
});
