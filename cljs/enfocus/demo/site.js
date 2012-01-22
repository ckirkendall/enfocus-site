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
var nods__2581__auto____2779 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2778){
enfocus.core.chainable_standard.call(null,(function (pnod__2734__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2581__auto____2781 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"),enfocus.core.en_fade_in.call(null,1000,null,null)));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2780){
return pnod2780;
}),nods__2581__auto____2781));
return enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"),enfocus.core.en_fade_in.call(null,1000,null,null));
})().call(null,pnod__2734__auto__);
}),1000);
})).call(null,enfocus.core.css_select.call(null,"",pnod2778,cljs.core.Vector.fromArray(["#menu"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.home_page).call(null,enfocus.core.css_select.call(null,"",pnod2778,cljs.core.Vector.fromArray(["#home-button"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.gstarted_page).call(null,enfocus.core.css_select.call(null,"",pnod2778,cljs.core.Vector.fromArray(["#gstarted-button"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_trans_page).call(null,enfocus.core.css_select.call(null,"",pnod2778,cljs.core.Vector.fromArray(["#doc-trans"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_events_page).call(null,enfocus.core.css_select.call(null,"",pnod2778,cljs.core.Vector.fromArray(["#doc-events"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_effects_page).call(null,enfocus.core.css_select.call(null,"",pnod2778,cljs.core.Vector.fromArray(["#doc-effects"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_template_page).call(null,enfocus.core.css_select.call(null,"",pnod2778,cljs.core.Vector.fromArray(["#doc-remote"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_from_page).call(null,enfocus.core.css_select.call(null,"",pnod2778,cljs.core.Vector.fromArray(["#doc-extract"])));
(function (pnod__2756__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__2756__auto__,(function (pnod__2756__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__2756__auto__,(function (pnod__2755__auto__){
return enfocus.core.en_content.call(null,enfocus.demo.site.home.call(null)).call(null,pnod__2755__auto__);
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2778,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2778;
}),nods__2581__auto____2779));
return document;
});
enfocus.demo.site.resize_pane = (function resize_pane(width,height){
var nods__2581__auto____2783 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2782){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_resize.call(null,width,height,200,null,null)).call(null,enfocus.core.css_select.call(null,"",pnod2782,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2782;
}),nods__2581__auto____2783));
return document;
});
enfocus.demo.site.resize_content_pane = (function resize_content_pane(){
var size__2784 = goog.dom.getViewportSize.call(null);
var width__2785 = (size__2784.width - 40);
var height__2786 = (size__2784.height - 70);

return enfocus.demo.site.resize_pane.call(null,width__2785,height__2786);
});
enfocus.demo.site.init_content_pane = (function init_content_pane(){
var size__2789 = goog.dom.getViewportSize.call(null);
var width__2790 = (size__2789.width - 40);
var height__2791 = (size__2789.height - 70);

enfocus.demo.site.setup_pane.call(null,width__2790,height__2791);
enfocus.core.en_listen.call(null,"﷐'resize",enfocus.demo.site.resize_content_pane).call(null,window);
return window;
});
enfocus.demo.site.start = (function start(){
var nods__2581__auto____2793 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2792){
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod2792,cljs.core.Vector.fromArray(["#inner-circle"])));
enfocus.core.en_listen.call(null,"﷐'mouseenter",(function (p1__2787_SHARP_){
var nods__2581__auto____2795 = enfocus.core.nodes__GT_coll.call(null,p1__2787_SHARP_.currentTarget);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2794){
enfocus.core.en_resize.call(null,"﷐'curwidth",145,500,null,null).call(null,enfocus.core.css_select.call(null,"",pnod2794,cljs.core.Vector.fromArray([".sub"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_add_class.call(null,"blur-highlight"),enfocus.core.chainable_standard.call(null,(function (pnod__2734__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2581__auto____2797 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_remove_class.call(null,"blur-highlight"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2796){
return pnod2796;
}),nods__2581__auto____2797));
return enfocus.core.en_remove_class.call(null,"blur-highlight");
})().call(null,pnod__2734__auto__);
}),200);
}))).call(null,enfocus.core.css_select.call(null,"",pnod2794,cljs.core.Vector.fromArray(["h3"])));
return pnod2794;
}),nods__2581__auto____2795));
return p1__2787_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2792,cljs.core.Vector.fromArray([".marea"])));
enfocus.core.en_listen.call(null,"﷐'mouseleave",(function (p1__2788_SHARP_){
var nods__2581__auto____2799 = enfocus.core.nodes__GT_coll.call(null,p1__2788_SHARP_.currentTarget);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2798){
enfocus.core.en_resize.call(null,"﷐'curwidth",0,500,null,null).call(null,enfocus.core.css_select.call(null,"",pnod2798,cljs.core.Vector.fromArray([".sub"])));
return pnod2798;
}),nods__2581__auto____2799));
return p1__2788_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2792,cljs.core.Vector.fromArray([".marea"])));
return pnod2792;
}),nods__2581__auto____2793));
return document;
});
window.onload = enfocus.demo.site.start;
enfocus.core.load_remote_dom.call(null,"templates/home.html");
enfocus.demo.site.home = (function home(){
var vec__2802__2803 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
})]));
var id_sym2800__2804 = cljs.core.nth.call(null,vec__2802__2803,0,null);
var pnod2801__2805 = cljs.core.nth.call(null,vec__2802__2803,1,null);
var pnod2801__2806 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2801__2805):pnod2801__2805);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2800__2804,pnod2801__2806);
return enfocus.core.remove_node_return_child.call(null,pnod2801__2806);
} else
{return pnod2801__2806;
}
});
enfocus.demo.site.home_page = (function home_page(){
var nods__2581__auto____2808 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2807){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.home.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2807,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2807;
}),nods__2581__auto____2808));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/getting-started.html");
enfocus.demo.site.gstarted = (function gstarted(){
var vec__2812__2813 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
})]));
var id_sym2810__2814 = cljs.core.nth.call(null,vec__2812__2813,0,null);
var pnod2811__2815 = cljs.core.nth.call(null,vec__2812__2813,1,null);
var pnod2811__2816 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2811__2815):pnod2811__2815);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2810__2814,pnod2811__2816);
return enfocus.core.remove_node_return_child.call(null,pnod2811__2816);
} else
{return pnod2811__2816;
}
});
enfocus.demo.site.gstarted_page = (function gstarted_page(){
var nods__2581__auto____2818 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2817){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.gstarted.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2817,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (p1__2809_SHARP_){
enfocus.core.en_content.call(null,"I have been clicked").call(null,p1__2809_SHARP_.currentTarget);
return p1__2809_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2817,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2820 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2819){
(function (pnod__2756__auto__){
return enfocus.core.en_resize.call(null,200,"﷐'curheight",500,null,null).call(null,pnod__2756__auto__,(function (pnod__2755__auto__){
return enfocus.core.en_resize.call(null,5,"﷐'curheight",500,null,null).call(null,pnod__2755__auto__);
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2819,cljs.core.Vector.fromArray(["#rz-demo"])));
return pnod2819;
}),nods__2581__auto____2820));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2817,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.clone_for_demo).call(null,enfocus.core.css_select.call(null,"",pnod2817,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_prop_demo).call(null,enfocus.core.css_select.call(null,"",pnod2817,cljs.core.Vector.fromArray(["#button4"])));
return pnod2817;
}),nods__2581__auto____2818));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/standard-transforms.html");
enfocus.demo.site.doc_trans = (function doc_trans(){
var vec__2823__2824 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
})]));
var id_sym2821__2825 = cljs.core.nth.call(null,vec__2823__2824,0,null);
var pnod2822__2826 = cljs.core.nth.call(null,vec__2823__2824,1,null);
var pnod2822__2827 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2822__2826):pnod2822__2826);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2821__2825,pnod2822__2827);
return enfocus.core.remove_node_return_child.call(null,pnod2822__2827);
} else
{return pnod2822__2827;
}
});
enfocus.demo.site.content_demo = (function content_demo(){
var nods__2581__auto____2829 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2828){
enfocus.core.en_content.call(null,"I have been clicked").call(null,enfocus.core.css_select.call(null,"",pnod2828,cljs.core.Vector.fromArray(["#button1"])));
return pnod2828;
}),nods__2581__auto____2829));
return document;
});
enfocus.demo.site.html_content_demo = (function html_content_demo(){
var nods__2581__auto____2831 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2830){
enfocus.core.en_html_content.call(null,"<span style='color: #ff3333'>I replaced the text</span>").call(null,enfocus.core.css_select.call(null,"",pnod2830,cljs.core.Vector.fromArray(["#html-content-demo"])));
return pnod2830;
}),nods__2581__auto____2831));
return document;
});
enfocus.demo.site.set_attr_demo = (function set_attr_demo(){
var nods__2581__auto____2833 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2832){
enfocus.core.en_set_attr.call(null,"﷐'foo","bar").call(null,enfocus.core.css_select.call(null,"",pnod2832,cljs.core.Vector.fromArray(["#button3"])));
return pnod2832;
}),nods__2581__auto____2833));
return document;
});
enfocus.demo.site.remove_attr_demo = (function remove_attr_demo(){
var nods__2581__auto____2835 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2834){
enfocus.core.en_remove_attr.call(null,"﷐'foo").call(null,enfocus.core.css_select.call(null,"",pnod2834,cljs.core.Vector.fromArray(["#button4"])));
return pnod2834;
}),nods__2581__auto____2835));
return document;
});
enfocus.demo.site.add_class_demo = (function add_class_demo(){
var nods__2581__auto____2837 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2836){
enfocus.core.en_add_class.call(null,"highlight").call(null,enfocus.core.css_select.call(null,"",pnod2836,cljs.core.Vector.fromArray(["#button5"])));
return pnod2836;
}),nods__2581__auto____2837));
return document;
});
enfocus.demo.site.remove_class_demo = (function remove_class_demo(){
var nods__2581__auto____2839 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2838){
enfocus.core.en_remove_class.call(null,"highlight").call(null,enfocus.core.css_select.call(null,"",pnod2838,cljs.core.Vector.fromArray(["#button6"])));
return pnod2838;
}),nods__2581__auto____2839));
return document;
});
enfocus.demo.site.do_demo = (function do_demo(){
var nods__2581__auto____2841 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2840){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_attr.call(null,"﷐'foo","bar"),enfocus.core.en_add_class.call(null,"highlight")).call(null,enfocus.core.css_select.call(null,"",pnod2840,cljs.core.Vector.fromArray(["#button7"])));
return pnod2840;
}),nods__2581__auto____2841));
return document;
});
enfocus.demo.site.append_demo = (function append_demo(){
var nods__2581__auto____2843 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2842){
enfocus.core.en_append.call(null,":append").call(null,enfocus.core.css_select.call(null,"",pnod2842,cljs.core.Vector.fromArray(["#button8"])));
return pnod2842;
}),nods__2581__auto____2843));
return document;
});
enfocus.demo.site.prepend_demo = (function prepend_demo(){
var nods__2581__auto____2845 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2844){
enfocus.core.en_prepend.call(null,"prepend:").call(null,enfocus.core.css_select.call(null,"",pnod2844,cljs.core.Vector.fromArray(["#button9"])));
return pnod2844;
}),nods__2581__auto____2845));
return document;
});
enfocus.demo.site.after_demo = (function after_demo(){
var nods__2581__auto____2847 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2846){
enfocus.core.en_after.call(null,":after").call(null,enfocus.core.css_select.call(null,"",pnod2846,cljs.core.Vector.fromArray(["#button10"])));
return pnod2846;
}),nods__2581__auto____2847));
return document;
});
enfocus.demo.site.before_demo = (function before_demo(){
var nods__2581__auto____2849 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2848){
enfocus.core.en_before.call(null,"before:").call(null,enfocus.core.css_select.call(null,"",pnod2848,cljs.core.Vector.fromArray(["#button11"])));
return pnod2848;
}),nods__2581__auto____2849));
return document;
});
enfocus.demo.site.sub_demo = (function sub_demo(){
var nods__2581__auto____2851 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2850){
enfocus.core.en_substitute.call(null,"I replaced the button").call(null,enfocus.core.css_select.call(null,"",pnod2850,cljs.core.Vector.fromArray(["#button12"])));
return pnod2850;
}),nods__2581__auto____2851));
return document;
});
enfocus.demo.site.clone_for_demo = (function clone_for_demo(){
var fruit_data__2852 = cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":5,"pear":6});

var nods__2581__auto____2854 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2853){
enfocus.core.chainable_standard.call(null,(function (pnod__2690__auto__){
var div__2691__auto____2855 = enfocus.core.create_hidden_dom.call(null,document.createDocumentFragment());

enfocus.core.log_debug.call(null,pnod__2690__auto__);
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,cljs.core.vec.call(null,fruit_data__2852)));
var G__2856__2857 = cljs.core.seq.call(null,cljs.core.vec.call(null,fruit_data__2852));

if(cljs.core.truth_(G__2856__2857))
{var fr__2858 = cljs.core.first.call(null,G__2856__2857);
var G__2856__2859 = G__2856__2857;

while(true){
enfocus.core.en_append.call(null,pnod__2690__auto__.cloneNode(true)).call(null,div__2691__auto____2855);
div__2691__auto____2855;
var nods__2581__auto____2861 = enfocus.core.nodes__GT_coll.call(null,goog.dom.getLastElementChild.call(null,div__2691__auto____2855));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fr__2858,G__2856__2859){
return (function (pnod2860){
enfocus.core.en_content.call(null,cljs.core.first.call(null,fr__2858)).call(null,enfocus.core.css_select.call(null,"",pnod2860,cljs.core.Vector.fromArray(["*:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.second.call(null,fr__2858))).call(null,enfocus.core.css_select.call(null,"",pnod2860,cljs.core.Vector.fromArray(["*:last-child"])));
return pnod2860;
});})(fr__2858,G__2856__2859))
,nods__2581__auto____2861));
goog.dom.getLastElementChild.call(null,div__2691__auto____2855);
var temp__3698__auto____2862 = cljs.core.next.call(null,G__2856__2859);

if(cljs.core.truth_(temp__3698__auto____2862))
{var G__2856__2863 = temp__3698__auto____2862;

{
var G__2864 = cljs.core.first.call(null,G__2856__2863);
var G__2865 = G__2856__2863;
fr__2858 = G__2864;
G__2856__2859 = G__2865;
continue;
}
} else
{}
break;
}
} else
{}
enfocus.core.log_debug.call(null,div__2691__auto____2855);
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,enfocus.core.remove_node_return_child.call(null,div__2691__auto____2855)),enfocus.core.en_remove_node.call(null)).call(null,pnod__2690__auto__);
return pnod__2690__auto__;
})).call(null,enfocus.core.css_select.call(null,"",pnod2853,cljs.core.Vector.fromArray(["#clone-for-demo tbody > tr:first-child"])));
return pnod2853;
}),nods__2581__auto____2854));
return document;
});
enfocus.demo.site.wrap_demo = (function wrap_demo(){
var nods__2581__auto____2867 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2866){
enfocus.core.en_wrap.call(null,"﷐'span",cljs.core.ObjMap.fromObject(["﷐'class"],{"﷐'class":"highlight"})).call(null,enfocus.core.css_select.call(null,"",pnod2866,cljs.core.Vector.fromArray(["#button14"])));
return pnod2866;
}),nods__2581__auto____2867));
return document;
});
enfocus.demo.site.unwrap_demo = (function unwrap_demo(){
var nods__2581__auto____2869 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2868){
enfocus.core.en_unwrap.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2868,cljs.core.Vector.fromArray(["#button15"])));
return pnod2868;
}),nods__2581__auto____2869));
return document;
});
enfocus.demo.site.set_style_demo = (function set_style_demo(){
var nods__2581__auto____2871 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2870){
enfocus.core.en_set_style.call(null,"﷐'border","2px solid blue").call(null,enfocus.core.css_select.call(null,"",pnod2870,cljs.core.Vector.fromArray(["#button16"])));
return pnod2870;
}),nods__2581__auto____2871));
return document;
});
enfocus.demo.site.remove_style_demo = (function remove_style_demo(){
var nods__2581__auto____2875 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2874){
enfocus.core.en_remove_style.call(null,"﷐'border").call(null,enfocus.core.css_select.call(null,"",pnod2874,cljs.core.Vector.fromArray(["#button17"])));
return pnod2874;
}),nods__2581__auto____2875));
return document;
});
enfocus.demo.site.filter_demo = (function filter_demo(){
var nods__2581__auto____2877 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2876){
enfocus.core.en_filter.call(null,(function (p1__2872_SHARP_){
return (0 > p1__2872_SHARP_.value.indexOf("@"));
}),enfocus.core.en_set_style.call(null,"﷐'background-color","red")).call(null,enfocus.core.css_select.call(null,"",pnod2876,cljs.core.Vector.fromArray(["#email-field"])));
enfocus.core.en_filter.call(null,(function (p1__2873_SHARP_){
return (0 <= p1__2873_SHARP_.value.indexOf("@"));
}),enfocus.core.en_set_style.call(null,"﷐'background-color","green")).call(null,enfocus.core.css_select.call(null,"",pnod2876,cljs.core.Vector.fromArray(["#email-field"])));
return pnod2876;
}),nods__2581__auto____2877));
return document;
});
enfocus.demo.site.doc_trans_page = (function doc_trans_page(){
var nods__2581__auto____2879 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2878){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_trans.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2881 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2880){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2880,cljs.core.Vector.fromArray(["#doc-at"])));
return pnod2880;
}),nods__2581__auto____2881));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#at-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2883 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2882){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2882,cljs.core.Vector.fromArray(["#doc-content"])));
return pnod2882;
}),nods__2581__auto____2883));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#content-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2885 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2884){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2884,cljs.core.Vector.fromArray(["#doc-html-content"])));
return pnod2884;
}),nods__2581__auto____2885));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#html-content-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2887 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2886){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2886,cljs.core.Vector.fromArray(["#doc-set-attr"])));
return pnod2886;
}),nods__2581__auto____2887));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#set-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2889 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2888){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2888,cljs.core.Vector.fromArray(["#doc-remove-attr"])));
return pnod2888;
}),nods__2581__auto____2889));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#remove-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2891 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2890){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2890,cljs.core.Vector.fromArray(["#doc-add-class"])));
return pnod2890;
}),nods__2581__auto____2891));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#add-class-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2893 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2892){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2892,cljs.core.Vector.fromArray(["#doc-remove-class"])));
return pnod2892;
}),nods__2581__auto____2893));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#remove-class-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2895 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2894){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2894,cljs.core.Vector.fromArray(["#doc-do"])));
return pnod2894;
}),nods__2581__auto____2895));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#do-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2897 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2896){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2896,cljs.core.Vector.fromArray(["#doc-append"])));
return pnod2896;
}),nods__2581__auto____2897));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#append-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2899 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2898){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2898,cljs.core.Vector.fromArray(["#doc-prepend"])));
return pnod2898;
}),nods__2581__auto____2899));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#prepend-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2901 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2900){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2900,cljs.core.Vector.fromArray(["#doc-after"])));
return pnod2900;
}),nods__2581__auto____2901));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#after-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2903 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2902){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2902,cljs.core.Vector.fromArray(["#doc-before"])));
return pnod2902;
}),nods__2581__auto____2903));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#before-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2905 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2904){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2904,cljs.core.Vector.fromArray(["#doc-sub"])));
return pnod2904;
}),nods__2581__auto____2905));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#substitute-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2907 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2906){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2906,cljs.core.Vector.fromArray(["#doc-clone-for"])));
return pnod2906;
}),nods__2581__auto____2907));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#clone-for-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2909 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2908){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2908,cljs.core.Vector.fromArray(["#doc-wrap"])));
return pnod2908;
}),nods__2581__auto____2909));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#wrap-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2911 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2910){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2910,cljs.core.Vector.fromArray(["#doc-unwrap"])));
return pnod2910;
}),nods__2581__auto____2911));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#unwrap-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2913 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2912){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2912,cljs.core.Vector.fromArray(["#doc-set-style"])));
return pnod2912;
}),nods__2581__auto____2913));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#set-style-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2915 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2914){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2914,cljs.core.Vector.fromArray(["#doc-remove-style"])));
return pnod2914;
}),nods__2581__auto____2915));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#remove-style-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2917 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2916){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2916,cljs.core.Vector.fromArray(["#doc-filter"])));
return pnod2916;
}),nods__2581__auto____2917));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#filter-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.content_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.html_content_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.set_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button4"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.add_class_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button5"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_class_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button6"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.do_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button7"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.append_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button8"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.prepend_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button9"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.after_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button10"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.before_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button11"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.sub_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button12"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.clone_for_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button13"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.wrap_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button14"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.unwrap_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button15"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.set_style_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button16"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_style_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button17"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.filter_demo).call(null,enfocus.core.css_select.call(null,"",pnod2878,cljs.core.Vector.fromArray(["#button18"])));
return pnod2878;
}),nods__2581__auto____2879));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/handling-events.html");
enfocus.demo.site.doc_event = (function doc_event(){
var vec__2920__2921 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
})]));
var id_sym2918__2922 = cljs.core.nth.call(null,vec__2920__2921,0,null);
var pnod2919__2923 = cljs.core.nth.call(null,vec__2920__2921,1,null);
var pnod2919__2924 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2919__2923):pnod2919__2923);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2918__2922,pnod2919__2924);
return enfocus.core.remove_node_return_child.call(null,pnod2919__2924);
} else
{return pnod2919__2924;
}
});
enfocus.demo.site.remove_demo = (function remove_demo(){
var nods__2581__auto____2929 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2928){
(function (){enfocus.core.log_debug.call(null,"this method is deprecated should use remove-listeners");
return enfocus.core.en_remove_listeners.call(null,"﷐'mouseenter","﷐'mouseleave");
})().call(null,enfocus.core.css_select.call(null,"",pnod2928,cljs.core.Vector.fromArray(["#remove-demo"])));
return pnod2928;
}),nods__2581__auto____2929));
return document;
});
enfocus.demo.site.doc_events_page = (function doc_events_page(){
var nods__2581__auto____2931 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2930){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_event.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2930,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2933 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2932){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2932,cljs.core.Vector.fromArray(["#doc-listen"])));
return pnod2932;
}),nods__2581__auto____2933));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2930,cljs.core.Vector.fromArray(["#listen-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2935 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2934){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2934,cljs.core.Vector.fromArray(["#doc-remove"])));
return pnod2934;
}),nods__2581__auto____2935));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2930,cljs.core.Vector.fromArray(["#remove-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2937 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2936){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2936,cljs.core.Vector.fromArray(["#doc-support"])));
return pnod2936;
}),nods__2581__auto____2937));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2930,cljs.core.Vector.fromArray(["#support-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (p1__2925_SHARP_){
enfocus.core.en_content.call(null,"I have been replaced").call(null,p1__2925_SHARP_.currentTarget);
return p1__2925_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod2930,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'mouseenter",(function (p1__2926_SHARP_){
enfocus.core.en_add_class.call(null,"highlight").call(null,p1__2926_SHARP_.currentTarget);
return p1__2926_SHARP_.currentTarget;
})),enfocus.core.en_listen.call(null,"﷐'mouseleave",(function (p1__2927_SHARP_){
enfocus.core.en_remove_class.call(null,"highlight").call(null,p1__2927_SHARP_.currentTarget);
return p1__2927_SHARP_.currentTarget;
}))).call(null,enfocus.core.css_select.call(null,"",pnod2930,cljs.core.Vector.fromArray(["#remove-demo"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_demo).call(null,enfocus.core.css_select.call(null,"",pnod2930,cljs.core.Vector.fromArray(["#button2"])));
return pnod2930;
}),nods__2581__auto____2931));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/effects-timing.html");
enfocus.demo.site.doc_effect = (function doc_effect(){
var vec__2940__2941 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
})]));
var id_sym2938__2942 = cljs.core.nth.call(null,vec__2940__2941,0,null);
var pnod2939__2943 = cljs.core.nth.call(null,vec__2940__2941,1,null);
var pnod2939__2944 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2939__2943):pnod2939__2943);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2938__2942,pnod2939__2944);
return enfocus.core.remove_node_return_child.call(null,pnod2939__2944);
} else
{return pnod2939__2944;
}
});
enfocus.demo.site.resize_demo = (function resize_demo(){
var nods__2581__auto____2946 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2945){
enfocus.core.en_resize.call(null,200,"﷐'curheight",500,enfocus.core.en_resize.call(null,5,"﷐'curheight",500,null,null),null).call(null,enfocus.core.css_select.call(null,"",pnod2945,cljs.core.Vector.fromArray(["#rz-demo"])));
return pnod2945;
}),nods__2581__auto____2946));
return document;
});
enfocus.demo.site.move_demo = (function move_demo(){
var nods__2581__auto____2948 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2947){
enfocus.core.en_move.call(null,300,"﷐'cury",500,enfocus.core.en_move.call(null,-20,"﷐'cury",500,null,null),null).call(null,enfocus.core.css_select.call(null,"",pnod2947,cljs.core.Vector.fromArray(["#mv-demo"])));
return pnod2947;
}),nods__2581__auto____2948));
return document;
});
enfocus.demo.site.fade_demo = (function fade_demo(){
var nods__2581__auto____2950 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2949){
enfocus.core.en_fade_out.call(null,500,enfocus.core.en_fade_in.call(null,500,null,null),null).call(null,enfocus.core.css_select.call(null,"",pnod2949,cljs.core.Vector.fromArray(["#fade-demo"])));
return pnod2949;
}),nods__2581__auto____2950));
return document;
});
enfocus.demo.site.delay_demo = (function delay_demo(){
var nods__2581__auto____2952 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2951){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_resize.call(null,200,"﷐'curheight",500,null,null),enfocus.core.chainable_standard.call(null,(function (pnod__2734__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2581__auto____2954 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_resize.call(null,50,"﷐'curheight",500,null,null));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2953){
return pnod2953;
}),nods__2581__auto____2954));
return enfocus.core.en_resize.call(null,50,"﷐'curheight",500,null,null);
})().call(null,pnod__2734__auto__);
}),2000);
}))).call(null,enfocus.core.css_select.call(null,"",pnod2951,cljs.core.Vector.fromArray(["#delay-demo"])));
return pnod2951;
}),nods__2581__auto____2952));
return document;
});
enfocus.demo.site.chain_demo = (function chain_demo(){
var nods__2581__auto____2956 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2955){
(function (pnod__2756__auto__){
return enfocus.core.en_resize.call(null,200,"﷐'curheight",500,null,null).call(null,pnod__2756__auto__,(function (pnod__2755__auto__){
return enfocus.core.en_resize.call(null,5,"﷐'curheight",500,null,null).call(null,pnod__2755__auto__);
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2955,cljs.core.Vector.fromArray(["#chain-demo"])));
return pnod2955;
}),nods__2581__auto____2956));
return document;
});
enfocus.demo.site.doc_effects_page = (function doc_effects_page(){
var nods__2581__auto____2958 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2957){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_effect.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2957,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2960 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2959){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2959,cljs.core.Vector.fromArray(["#doc-resize"])));
return pnod2959;
}),nods__2581__auto____2960));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2957,cljs.core.Vector.fromArray(["#resize-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2962 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2961){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2961,cljs.core.Vector.fromArray(["#doc-move"])));
return pnod2961;
}),nods__2581__auto____2962));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2957,cljs.core.Vector.fromArray(["#move-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2964 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2963){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2963,cljs.core.Vector.fromArray(["#doc-fade"])));
return pnod2963;
}),nods__2581__auto____2964));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2957,cljs.core.Vector.fromArray(["#fade-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2966 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2965){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2965,cljs.core.Vector.fromArray(["#doc-delay"])));
return pnod2965;
}),nods__2581__auto____2966));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2957,cljs.core.Vector.fromArray(["#delay-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____2968 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2967){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod2967,cljs.core.Vector.fromArray(["#doc-chain"])));
return pnod2967;
}),nods__2581__auto____2968));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod2957,cljs.core.Vector.fromArray(["#chain-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.resize_demo).call(null,enfocus.core.css_select.call(null,"",pnod2957,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.move_demo).call(null,enfocus.core.css_select.call(null,"",pnod2957,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.fade_demo).call(null,enfocus.core.css_select.call(null,"",pnod2957,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.delay_demo).call(null,enfocus.core.css_select.call(null,"",pnod2957,cljs.core.Vector.fromArray(["#button4"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.chain_demo).call(null,enfocus.core.css_select.call(null,"",pnod2957,cljs.core.Vector.fromArray(["#button5"])));
return pnod2957;
}),nods__2581__auto____2958));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/templates-snippets.html");
enfocus.demo.site.doc_template = (function doc_template(){
var vec__2971__2972 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
})]));
var id_sym2969__2973 = cljs.core.nth.call(null,vec__2971__2972,0,null);
var pnod2970__2974 = cljs.core.nth.call(null,vec__2971__2972,1,null);
var pnod2970__2975 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2970__2974):pnod2970__2974);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2969__2973,pnod2970__2975);
return enfocus.core.remove_node_return_child.call(null,pnod2970__2975);
} else
{return pnod2970__2975;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.template_demo = (function template_demo(fruit_data){
var vec__2978__2979 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})]));
var id_sym2976__2980 = cljs.core.nth.call(null,vec__2978__2979,0,null);
var pnod2977__2981 = cljs.core.nth.call(null,vec__2978__2979,1,null);
var pnod2977__2982 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2977__2981):pnod2977__2981);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2976__2980,pnod2977__2982,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2976__2980,pnod2977__2982,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.en_remove_node.call(null).call(null,enfocus.core.css_select.call(null,id_sym2976__2980,pnod2977__2982,cljs.core.Vector.fromArray(["tbody > tr:not(:first-child)"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,fruit_data)))).call(null,enfocus.core.css_select.call(null,id_sym2976__2980,pnod2977__2982,cljs.core.Vector.fromArray(["tfoot tr > *:last-child"])));
enfocus.core.chainable_standard.call(null,(function (pnod__2690__auto__){
var div__2691__auto____2983 = enfocus.core.create_hidden_dom.call(null,document.createDocumentFragment());

enfocus.core.log_debug.call(null,pnod__2690__auto__);
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,cljs.core.vec.call(null,fruit_data)));
var G__2984__2985 = cljs.core.seq.call(null,cljs.core.vec.call(null,fruit_data));

if(cljs.core.truth_(G__2984__2985))
{var fr__2986 = cljs.core.first.call(null,G__2984__2985);
var G__2984__2987 = G__2984__2985;

while(true){
enfocus.core.en_append.call(null,pnod__2690__auto__.cloneNode(true)).call(null,div__2691__auto____2983);
div__2691__auto____2983;
var nods__2581__auto____2989 = enfocus.core.nodes__GT_coll.call(null,goog.dom.getLastElementChild.call(null,div__2691__auto____2983));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fr__2986,G__2984__2987){
return (function (pnod2988){
enfocus.core.en_content.call(null,cljs.core.first.call(null,fr__2986)).call(null,enfocus.core.css_select.call(null,"",pnod2988,cljs.core.Vector.fromArray(["*:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.second.call(null,fr__2986))).call(null,enfocus.core.css_select.call(null,"",pnod2988,cljs.core.Vector.fromArray(["*:last-child"])));
return pnod2988;
});})(fr__2986,G__2984__2987))
,nods__2581__auto____2989));
goog.dom.getLastElementChild.call(null,div__2691__auto____2983);
var temp__3698__auto____2990 = cljs.core.next.call(null,G__2984__2987);

if(cljs.core.truth_(temp__3698__auto____2990))
{var G__2984__2991 = temp__3698__auto____2990;

{
var G__2992 = cljs.core.first.call(null,G__2984__2991);
var G__2993 = G__2984__2991;
fr__2986 = G__2992;
G__2984__2987 = G__2993;
continue;
}
} else
{}
break;
}
} else
{}
enfocus.core.log_debug.call(null,div__2691__auto____2983);
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,enfocus.core.remove_node_return_child.call(null,div__2691__auto____2983)),enfocus.core.en_remove_node.call(null)).call(null,pnod__2690__auto__);
return pnod__2690__auto__;
})).call(null,enfocus.core.css_select.call(null,id_sym2976__2980,pnod2977__2982,cljs.core.Vector.fromArray(["tbody > tr:first-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2976__2980,pnod2977__2982);
return enfocus.core.remove_node_return_child.call(null,pnod2977__2982);
} else
{return pnod2977__2982;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.snippet2 = (function snippet2(fruit,quantity){
var vec__2997__2998 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})]));
var id_sym2995__2999 = cljs.core.nth.call(null,vec__2997__2998,0,null);
var pnod2996__3000 = cljs.core.nth.call(null,vec__2997__2998,1,null);
var pnod2996__3001 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2996__3000):pnod2996__3000);

enfocus.core.en_content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2995__2999,pnod2996__3001,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2995__2999,pnod2996__3001,cljs.core.Vector.fromArray(["tr > *:last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2995__2999,pnod2996__3001);
return enfocus.core.remove_node_return_child.call(null,pnod2996__3001);
} else
{return pnod2996__3001;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.template_demo2 = (function template_demo2(fruit_data){
var vec__3004__3005 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/template-demo.html");
})]));
var id_sym3002__3006 = cljs.core.nth.call(null,vec__3004__3005,0,null);
var pnod3003__3007 = cljs.core.nth.call(null,vec__3004__3005,1,null);
var pnod3003__3008 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3003__3007):pnod3003__3007);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym3002__3006,pnod3003__3008,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym3002__3006,pnod3003__3008,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,fruit_data)))).call(null,enfocus.core.css_select.call(null,id_sym3002__3006,pnod3003__3008,cljs.core.Vector.fromArray(["tfoot tr > *:last-child"])));
enfocus.core.en_content.call(null,cljs.core.map.call(null,(function (p1__2994_SHARP_){
return enfocus.demo.site.snippet2.call(null,p1__2994_SHARP_,fruit_data.call(null,p1__2994_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym3002__3006,pnod3003__3008,cljs.core.Vector.fromArray(["tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym3002__3006,pnod3003__3008);
return enfocus.core.remove_node_return_child.call(null,pnod3003__3008);
} else
{return pnod3003__3008;
}
});
enfocus.demo.site.doc_template_page = (function doc_template_page(){
var nods__2581__auto____3010 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3009){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_template.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod3009,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____3012 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3011){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod3011,cljs.core.Vector.fromArray(["#doc-template"])));
return pnod3011;
}),nods__2581__auto____3012));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod3009,cljs.core.Vector.fromArray(["#template-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____3014 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3013){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod3013,cljs.core.Vector.fromArray(["#doc-snippet"])));
return pnod3013;
}),nods__2581__auto____3014));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod3009,cljs.core.Vector.fromArray(["#snippet-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____3016 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3015){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod3015,cljs.core.Vector.fromArray(["#doc-load"])));
return pnod3015;
}),nods__2581__auto____3016));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod3009,cljs.core.Vector.fromArray(["#load-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____3018 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3017){
enfocus.core.en_content.call(null,enfocus.demo.site.template_demo.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":8,"pear":9}))).call(null,enfocus.core.css_select.call(null,"",pnod3017,cljs.core.Vector.fromArray(["#template-demo"])));
return pnod3017;
}),nods__2581__auto____3018));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod3009,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____3020 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3019){
enfocus.core.en_content.call(null,enfocus.demo.site.template_demo2.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":6,"pear":5}))).call(null,enfocus.core.css_select.call(null,"",pnod3019,cljs.core.Vector.fromArray(["#snippet-demo"])));
return pnod3019;
}),nods__2581__auto____3020));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod3009,cljs.core.Vector.fromArray(["#button2"])));
return pnod3009;
}),nods__2581__auto____3010));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/data-extraction.html");
enfocus.demo.site.doc_from = (function doc_from(){
var vec__3024__3025 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/data-extraction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/data-extraction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/data-extraction.html");
})]));
var id_sym3022__3026 = cljs.core.nth.call(null,vec__3024__3025,0,null);
var pnod3023__3027 = cljs.core.nth.call(null,vec__3024__3025,1,null);
var pnod3023__3028 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3023__3027):pnod3023__3027);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym3022__3026,pnod3023__3028);
return enfocus.core.remove_node_return_child.call(null,pnod3023__3028);
} else
{return pnod3023__3028;
}
});
enfocus.demo.site.get_prop_demo = (function get_prop_demo(){
var values__3034 = (function (){var nods__2592__auto____3031 = enfocus.core.nodes__GT_coll.call(null,document);
var map3030__3032 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var map_list__2593__auto____3033 = cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3029){
cljs.core.swap_BANG_.call(null,map3030__3032,cljs.core.assoc,"﷐'field1",enfocus.core.extr_multi_node.call(null,(function (pnod__2772__auto__){
return pnod__2772__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod3029,cljs.core.Vector.fromArray(["#get-prop-field1"]))));
cljs.core.swap_BANG_.call(null,map3030__3032,cljs.core.assoc,"﷐'field2",enfocus.core.extr_multi_node.call(null,(function (pnod__2772__auto__){
return pnod__2772__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod3029,cljs.core.Vector.fromArray(["#get-prop-field2"]))));
cljs.core.swap_BANG_.call(null,map3030__3032,cljs.core.assoc,"﷐'field3",enfocus.core.en_filter.call(null,(function (p1__3021_SHARP_){
return p1__3021_SHARP_.checked;
}),enfocus.core.extr_multi_node.call(null,(function (pnod__2772__auto__){
return pnod__2772__auto__.value;
}))).call(null,enfocus.core.css_select.call(null,"",pnod3029,cljs.core.Vector.fromArray(["input[name='get-prop-field3']"]))));
return pnod3029;
}),nods__2592__auto____3031));

return cljs.core.deref.call(null,map3030__3032);
})();

var nods__2581__auto____3036 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3035){
enfocus.core.en_content.call(null,cljs.core.pr_str.call(null,values__3034)).call(null,enfocus.core.css_select.call(null,"",pnod3035,cljs.core.Vector.fromArray(["#get-prop-demo"])));
return pnod3035;
}),nods__2581__auto____3036));
return document;
});
enfocus.demo.site.get_attr_demo = (function get_attr_demo(){
var value__3037 = enfocus.core.en_get_attr.call(null,"﷐'src").call(null,enfocus.core.css_select.call(null,cljs.core.Vector.fromArray(["#get-attr-img"])));

var nods__2581__auto____3039 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3038){
enfocus.core.en_content.call(null,cljs.core.pr_str.call(null,value__3037)).call(null,enfocus.core.css_select.call(null,"",pnod3038,cljs.core.Vector.fromArray(["#get-attr-demo"])));
return pnod3038;
}),nods__2581__auto____3039));
return document;
});
enfocus.demo.site.get_text_demo = (function get_text_demo(){
var txt__3040 = enfocus.core.en_get_text.call(null).call(null,enfocus.core.css_select.call(null,cljs.core.Vector.fromArray(["#button3"])));

var nods__2581__auto____3042 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3041){
enfocus.core.en_content.call(null,txt__3040).call(null,enfocus.core.css_select.call(null,"",pnod3041,cljs.core.Vector.fromArray(["#get-text-demo"])));
return pnod3041;
}),nods__2581__auto____3042));
return document;
});
enfocus.demo.site.doc_from_page = (function doc_from_page(){
var nods__2581__auto____3044 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3043){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_from.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod3043,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____3046 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3045){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod3045,cljs.core.Vector.fromArray(["#doc-from"])));
return pnod3045;
}),nods__2581__auto____3046));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod3043,cljs.core.Vector.fromArray(["#from-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____3048 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3047){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod3047,cljs.core.Vector.fromArray(["#doc-get-prop"])));
return pnod3047;
}),nods__2581__auto____3048));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod3043,cljs.core.Vector.fromArray(["#get-prop-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____3050 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3049){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod3049,cljs.core.Vector.fromArray(["#doc-get-attr"])));
return pnod3049;
}),nods__2581__auto____3050));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod3043,cljs.core.Vector.fromArray(["#get-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2581__auto____3052 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3051){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod3051,cljs.core.Vector.fromArray(["#doc-get-text"])));
return pnod3051;
}),nods__2581__auto____3052));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod3043,cljs.core.Vector.fromArray(["#get-text-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_prop_demo).call(null,enfocus.core.css_select.call(null,"",pnod3043,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod3043,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.get_text_demo).call(null,enfocus.core.css_select.call(null,"",pnod3043,cljs.core.Vector.fromArray(["#button3"])));
return pnod3043;
}),nods__2581__auto____3044));
return document;
});
