goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.classes');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('goog.style');
goog.require('goog.net.XhrIo');
goog.require('goog.fx');
enfocus.core.debug = true;
enfocus.core.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____2932 = enfocus.core.debug;

if(cljs.core.truth_(and__3546__auto____2932))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____2932;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){
return (new goog.async.Delay(func,ttime)).start();
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
return goog.dom.isNodeLike.call(null,tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){
return cljs.core.instance_QMARK_.call(null,NodeList,tst);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,nl)))
{return cljs.core.Vector.fromArray([]);
} else
{if(cljs.core.truth_(enfocus.core.node_QMARK_.call(null,nl)))
{return cljs.core.Vector.fromArray([nl]);
} else
{if(cljs.core.truth_((window === nl)))
{return cljs.core.Vector.fromArray([nl]);
} else
{if(cljs.core.truth_((function (){var or__3548__auto____2934 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3548__auto____2934))
{return or__3548__auto____2934;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__385__auto____2939 = (function iter__2935(s__2936){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2936__2937 = s__2936;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2936__2937)))
{var x__2938 = cljs.core.first.call(null,s__2936__2937);

return cljs.core.cons.call(null,(nl[x__2938]),iter__2935.call(null,cljs.core.rest.call(null,s__2936__2937)));
} else
{return null;
}
break;
}
})));
});

return iter__385__auto____2939.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__2933_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__2933_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__2933_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__2933_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var G__2940__2941 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

if(cljs.core.truth_(G__2940__2941))
{var G__2943__2945 = cljs.core.first.call(null,G__2940__2941);
var vec__2944__2946 = G__2943__2945;
var attr__2947 = cljs.core.nth.call(null,vec__2944__2946,0,null);
var value__2948 = cljs.core.nth.call(null,vec__2944__2946,1,null);
var G__2940__2949 = G__2940__2941;

var G__2943__2950 = G__2943__2945;
var G__2940__2951 = G__2940__2949;

while(true){
var vec__2952__2953 = G__2943__2950;
var attr__2954 = cljs.core.nth.call(null,vec__2952__2953,0,null);
var value__2955 = cljs.core.nth.call(null,vec__2952__2953,1,null);
var G__2940__2956 = G__2940__2951;

goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__2954),value__2955);
var temp__3698__auto____2957 = cljs.core.next.call(null,G__2940__2956);

if(cljs.core.truth_(temp__3698__auto____2957))
{var G__2940__2958 = temp__3698__auto____2957;

{
var G__2959 = cljs.core.first.call(null,G__2940__2958);
var G__2960 = G__2940__2958;
G__2943__2950 = G__2959;
G__2940__2951 = G__2960;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){
var G__2961__2962 = cljs.core.seq.call(null,values);

if(cljs.core.truth_(G__2961__2962))
{var attr__2963 = cljs.core.first.call(null,G__2961__2962);
var G__2961__2964 = G__2961__2962;

while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__2963),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__2963));
}
var temp__3698__auto____2965 = cljs.core.next.call(null,G__2961__2964);

if(cljs.core.truth_(temp__3698__auto____2965))
{var G__2961__2966 = temp__3698__auto____2965;

{
var G__2967 = cljs.core.first.call(null,G__2961__2966);
var G__2968 = G__2961__2966;
attr__2963 = G__2967;
G__2961__2964 = G__2968;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){
return cljs.core.str.call(null,"__ef_effect_",etype);
});
enfocus.core.get_mills = (function get_mills(){
return (new Date()).getMilliseconds();
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.core.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.truth_(cljs.core.not.call(null,child)))
{return false;
} else
{if(cljs.core.truth_((parent === child)))
{return false;
} else
{if(cljs.core.truth_((child.parentNode === parent)))
{return true;
} else
{if(cljs.core.truth_("﷐'else"))
{{
var G__2969 = parent;
var G__2970 = child.parentNode;
parent = G__2969;
child = G__2970;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
enfocus.core.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re__2971 = e.relatedTarget;
var this$__2972 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____2973 = cljs.core.not.call(null,(re__2971 === this$__2972));

if(cljs.core.truth_(and__3546__auto____2973))
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this$__2972,re__2971));
} else
{return and__3546__auto____2973;
}
})()))
{return func.call(null,e);
} else
{return null;
}
});
});
enfocus.core.pix_round = (function pix_round(step){
if(cljs.core.truth_((step < 0)))
{return Math.floor.call(null,step);
} else
{return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2993 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,ats)))
{var G__2974__2975 = cljs.core.seq.call(null,ats);

if(cljs.core.truth_(G__2974__2975))
{var G__2977__2979 = cljs.core.first.call(null,G__2974__2975);
var vec__2978__2980 = G__2977__2979;
var k__2981 = cljs.core.nth.call(null,vec__2978__2980,0,null);
var v__2982 = cljs.core.nth.call(null,vec__2978__2980,1,null);
var G__2974__2983 = G__2974__2975;

var G__2977__2984 = G__2977__2979;
var G__2974__2985 = G__2974__2983;

while(true){
var vec__2986__2987 = G__2977__2984;
var k__2988 = cljs.core.nth.call(null,vec__2986__2987,0,null);
var v__2989 = cljs.core.nth.call(null,vec__2986__2987,1,null);
var G__2974__2990 = G__2974__2985;

add_map_attrs.call(null,elem,k__2988,v__2989);
var temp__3698__auto____2991 = cljs.core.next.call(null,G__2974__2990);

if(cljs.core.truth_(temp__3698__auto____2991))
{var G__2974__2992 = temp__3698__auto____2991;

{
var G__2996 = cljs.core.first.call(null,G__2974__2992);
var G__2997 = G__2974__2992;
G__2977__2984 = G__2996;
G__2974__2985 = G__2997;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__2994 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case  2 :
return add_map_attrs__2993.call(this,elem,k);
case  3 :
return add_map_attrs__2994.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.hide_style = cljs.core.ObjMap.fromObject(["style"],{"style":"display: none; width: 0px; height: 0px"}).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__2998 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__2998.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__2998);
return div__2998;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__2999 = div.childNodes;
var frag__3000 = document.createDocumentFragment();

goog.dom.append.call(null,frag__3000,child__2999);
goog.dom.removeNode.call(null,div);
return frag__3000;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__3002 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__3003 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__3003),text.replace(re__3002,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__3003,c,d);
}))]);
});
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__3004 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__3005 = enfocus.core.nodes__GT_coll.call(null,id_nodes__3004);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3001_SHARP_){
var id__3006 = p1__3001_SHARP_.getAttribute("id");
var rid__3007 = id__3006.replace(sym,"");

return p1__3001_SHARP_.setAttribute("id",rid__3007);
}),nod_col__3005));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__3008 = (new goog.net.XhrIo());
var callback__3018 = (function (req){
var text__3010 = req.getResponseText();
var vec__3009__3011 = enfocus.core.replace_ids.call(null,text__3010);
var sym__3012 = cljs.core.nth.call(null,vec__3009__3011,0,null);
var txt__3013 = cljs.core.nth.call(null,vec__3009__3011,1,null);
var data__3014 = goog.dom.htmlToDocumentFragment.call(null,txt__3013);
var body__3015 = cljs.core.first.call(null,enfocus.core.nodes__GT_coll.call(null,enfocus.core.css_select.call(null,data__3014,"body")));

if(cljs.core.truth_(body__3015))
{var frag__3016 = document.createDocumentFragment();
var childs__3017 = frag__3016.childNodes;

goog.dom.append.call(null,frag__3016,childs__3017);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__3012,frag__3016]));
} else
{return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__3012,data__3014]));
}
});

goog.events.listen.call(null,req__3008,goog.net.EventType.COMPLETE,(function (){
callback__3018.call(null,req__3008);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__3008.send(uri,"GET");
} else
{return null;
}
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__3019 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__3019))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__3019),cljs.core.second.call(null,nod__3019).cloneNode(true)]);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__3020 = enfocus.core.create_sel_str.call(null,sel);
var cache__3021 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__3020)));

if(cljs.core.truth_(cache__3021))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__3021),cljs.core.second.call(null,cache__3021).cloneNode(true)]);
} else
{var vec__3022__3023 = enfocus.core.get_cached_dom.call(null,uri);
var sym__3024 = cljs.core.nth.call(null,vec__3022__3023,0,null);
var tdom__3025 = cljs.core.nth.call(null,vec__3022__3023,1,null);
var dom__3026 = enfocus.core.create_hidden_dom.call(null,tdom__3025);
var tsnip__3027 = enfocus.core.css_select.call(null,dom__3026,sel_str__3020);
var snip__3028 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__3027))?cljs.core.first.call(null,tsnip__3027):tsnip__3027);

enfocus.core.remove_node_return_child.call(null,dom__3026);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__3020),cljs.core.Vector.fromArray([sym__3024,snip__3028]));
return cljs.core.Vector.fromArray([sym__3024,snip__3028]);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){
return (function trans(pnodes){
var pnod_col__3029 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result__3030 = cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__3029));

if(cljs.core.truth_((cljs.core.count.call(null,result__3030) <= 1)))
{return cljs.core.first.call(null,result__3030);
} else
{return result__3030;
}
});
});
/**
* wrapper function for transforms, maps the transform to all nodes returned
* by the selector and provides the ability to chain transforms with the chain command.
*/
enfocus.core.chainable_standard = (function chainable_standard(func){
return (function() {
var trans = null;
var trans__3033 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__3034 = (function (pnodes,chain){
var pnod_col__3032 = enfocus.core.nodes__GT_coll.call(null,pnodes);

cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__3032));
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__3033.call(this,pnodes);
case  2 :
return trans__3034.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
return trans;
})()
});
/**
* wrapper function for effects, maps the effect to all nodes returned by the
* selector and provides chaining and callback functionality
*/
enfocus.core.chainable_effect = (function chainable_effect(func,callback){
return (function() {
var trans = null;
var trans__3040 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__3041 = (function (pnodes,chain){
var pnod_col__3037 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__3038 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__3037));
var partial_cback__3039 = (function (){
cljs.core.swap_BANG_.call(null,cnt__3038,cljs.core.dec);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__3038))))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,callback))))
{callback.call(null,pnodes);
} else
{}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
} else
{return null;
}
});

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3031_SHARP_){
return func.call(null,p1__3031_SHARP_,partial_cback__3039);
}),pnod_col__3037));
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__3040.call(this,pnodes);
case  2 :
return trans__3041.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
return trans;
})()
});
/**
* HOF to remove the duplicate code in transformation that handle creating a
* fragment and applying it in some way to the selected node
*/
enfocus.core.content_based_trans = (function content_based_trans(values,func){
var fnodes__3043 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__3044 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3036_SHARP_){
return goog.dom.appendChild.call(null,frag__3044,p1__3036_SHARP_.cloneNode(true));
}),fnodes__3043));
return func.call(null,pnod,frag__3044);
}));
});
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_content = (function() { 
var en_content__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
goog.dom.removeChildren.call(null,pnod);
return goog.dom.appendChild.call(null,pnod,frag);
}));
};
var en_content = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_content__delegate.call(this, values);
};
en_content.cljs$lang$maxFixedArity = 0;
en_content.cljs$lang$applyTo = (function (arglist__3045){
var values = cljs.core.seq( arglist__3045 );;
return en_content__delegate.call(this, values);
});
return en_content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.en_html_content = (function en_html_content(txt){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__3046 = goog.dom.htmlToDocumentFragment.call(null,txt);

goog.dom.removeChildren.call(null,pnod);
return goog.dom.append.call(null,pnod,frag__3046);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var at_lst__3048 = cljs.core.partition.call(null,2,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__3049){
var vec__3050__3051 = p__3049;
var a__3052 = cljs.core.nth.call(null,vec__3050__3051,0,null);
var v__3053 = cljs.core.nth.call(null,vec__3050__3051,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__3052),v__3053);
}),at_lst__3048));
}));
};
var en_set_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_attr__delegate.call(this, values);
};
en_set_attr.cljs$lang$maxFixedArity = 0;
en_set_attr.cljs$lang$applyTo = (function (arglist__3054){
var values = cljs.core.seq( arglist__3054 );;
return en_set_attr__delegate.call(this, values);
});
return en_set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_attr = (function() { 
var en_remove_attr__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3047_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__3047_SHARP_));
}),values));
}));
};
var en_remove_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_attr__delegate.call(this, values);
};
en_remove_attr.cljs$lang$maxFixedArity = 0;
en_remove_attr.cljs$lang$applyTo = (function (arglist__3055){
var values = cljs.core.seq( arglist__3055 );;
return en_remove_attr__delegate.call(this, values);
});
return en_remove_attr;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
return goog.dom.classes.hasClass.call(null,el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.en_add_class = (function() { 
var en_add_class__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3056_SHARP_){
return goog.dom.classes.add.call(null,pnod,p1__3056_SHARP_);
}),values));
}));
};
var en_add_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_add_class__delegate.call(this, values);
};
en_add_class.cljs$lang$maxFixedArity = 0;
en_add_class.cljs$lang$applyTo = (function (arglist__3058){
var values = cljs.core.seq( arglist__3058 );;
return en_add_class__delegate.call(this, values);
});
return en_add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_class = (function() { 
var en_remove_class__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3057_SHARP_){
return goog.dom.classes.remove.call(null,pnod,p1__3057_SHARP_);
}),values));
}));
};
var en_remove_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_class__delegate.call(this, values);
};
en_remove_class.cljs$lang$maxFixedArity = 0;
en_remove_class.cljs$lang$applyTo = (function (arglist__3060){
var values = cljs.core.seq( arglist__3060 );;
return en_remove_class__delegate.call(this, values);
});
return en_remove_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.en_do__GT_ = (function() { 
var en_do__GT___delegate = function (forms){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3059_SHARP_){
return p1__3059_SHARP_.call(null,pnod);
}),forms));
}));
};
var en_do__GT_ = function (var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_do__GT___delegate.call(this, forms);
};
en_do__GT_.cljs$lang$maxFixedArity = 0;
en_do__GT_.cljs$lang$applyTo = (function (arglist__3061){
var forms = cljs.core.seq( arglist__3061 );;
return en_do__GT___delegate.call(this, forms);
});
return en_do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_append = (function() { 
var en_append__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.appendChild.call(null,pnod,frag);
}));
};
var en_append = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_append__delegate.call(this, values);
};
en_append.cljs$lang$maxFixedArity = 0;
en_append.cljs$lang$applyTo = (function (arglist__3062){
var values = cljs.core.seq( arglist__3062 );;
return en_append__delegate.call(this, values);
});
return en_append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_prepend = (function() { 
var en_prepend__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
var nod__3063 = pnod.firstChild;

return pnod.insertBefore(frag,nod__3063);
}));
};
var en_prepend = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_prepend__delegate.call(this, values);
};
en_prepend.cljs$lang$maxFixedArity = 0;
en_prepend.cljs$lang$applyTo = (function (arglist__3064){
var values = cljs.core.seq( arglist__3064 );;
return en_prepend__delegate.call(this, values);
});
return en_prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_before = (function() { 
var en_before__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.insertSiblingBefore.call(null,frag,pnod);
}));
};
var en_before = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_before__delegate.call(this, values);
};
en_before.cljs$lang$maxFixedArity = 0;
en_before.cljs$lang$applyTo = (function (arglist__3065){
var values = cljs.core.seq( arglist__3065 );;
return en_before__delegate.call(this, values);
});
return en_before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_after = (function() { 
var en_after__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.insertSiblingAfter.call(null,frag,pnod);
}));
};
var en_after = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_after__delegate.call(this, values);
};
en_after.cljs$lang$maxFixedArity = 0;
en_after.cljs$lang$applyTo = (function (arglist__3066){
var values = cljs.core.seq( arglist__3066 );;
return en_after__delegate.call(this, values);
});
return en_after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_substitute = (function() { 
var en_substitute__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.replaceNode.call(null,frag,pnod);
}));
};
var en_substitute = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_substitute__delegate.call(this, values);
};
en_substitute.cljs$lang$maxFixedArity = 0;
en_substitute.cljs$lang$applyTo = (function (arglist__3067){
var values = cljs.core.seq( arglist__3067 );;
return en_substitute__delegate.call(this, values);
});
return en_substitute;
})()
;
/**
* removes the selected nodes from the dom
* @param {...*} var_args
*/
enfocus.core.en_remove_node = (function() { 
var en_remove_node__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return goog.dom.removeNode.call(null,pnod);
}));
};
var en_remove_node = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_node__delegate.call(this, values);
};
en_remove_node.cljs$lang$maxFixedArity = 0;
en_remove_node.cljs$lang$applyTo = (function (arglist__3068){
var values = cljs.core.seq( arglist__3068 );;
return en_remove_node__delegate.call(this, values);
});
return en_remove_node;
})()
;
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.en_wrap = (function en_wrap(elm,mattr){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var elem__3069 = goog.dom.createElement.call(null,cljs.core.name.call(null,elm));

enfocus.core.add_map_attrs.call(null,elem__3069,mattr);
enfocus.core.en_content.call(null,pnod.cloneNode(true)).call(null,elem__3069);
elem__3069;
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__3069),enfocus.core.en_remove_node.call(null)).call(null,pnod);
return pnod;
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__3070 = document.createDocumentFragment();

enfocus.core.en_append.call(null,pnod.childNodes).call(null,frag__3070);
frag__3070;
return goog.dom.replaceNode.call(null,frag__3070,pnod);
}));
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_set_style = (function() { 
var en_set_style__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return enfocus.core.style_set.call(null,pnod,values);
}));
};
var en_set_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_style__delegate.call(this, values);
};
en_set_style.cljs$lang$maxFixedArity = 0;
en_set_style.cljs$lang$applyTo = (function (arglist__3071){
var values = cljs.core.seq( arglist__3071 );;
return en_set_style__delegate.call(this, values);
});
return en_set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.en_remove_style = (function() { 
var en_remove_style__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return enfocus.core.style_remove.call(null,pnod,values);
}));
};
var en_remove_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_style__delegate.call(this, values);
};
en_remove_style.cljs$lang$maxFixedArity = 0;
en_remove_style.cljs$lang$applyTo = (function (arglist__3072){
var values = cljs.core.seq( arglist__3072 );;
return en_remove_style__delegate.call(this, values);
});
return en_remove_style;
})()
;
enfocus.core.view_port_monitor = cljs.core.atom.call(null,null);
/**
* needed to support window :resize
*/
enfocus.core.get_vp_monitor = (function get_vp_monitor(){
if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.core.view_port_monitor)))
{return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
} else
{cljs.core.swap_BANG_.call(null,enfocus.core.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));
return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
}
});
/**
* adding an event to the selected nodes
*/
enfocus.core.en_listen = (function en_listen(event,func){
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'mouseenter",event)))
{return en_listen.call(null,"﷐'mouseover",enfocus.core.mouse_enter_leave.call(null,func));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'mouseleave",event)))
{return en_listen.call(null,"﷐'mouseout",enfocus.core.mouse_enter_leave.call(null,func));
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_((function (){var and__3546__auto____3075 = cljs.core._EQ_.call(null,"﷐'resize",event);

if(cljs.core.truth_(and__3546__auto____3075))
{return (window === pnod);
} else
{return and__3546__auto____3075;
}
})()))
{return goog.events.listen.call(null,enfocus.core.get_vp_monitor.call(null),"resize",func);
} else
{return goog.events.listen.call(null,pnod,cljs.core.name.call(null,event),func);
}
}));
} else
{return null;
}
}
}
});
/**
* adding an event to the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_remove_listener = (function() { 
var en_remove_listener__delegate = function (event_list){
var get_name__3076 = (function (p1__3073_SHARP_){
return cljs.core.name.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,p1__3073_SHARP_,"﷐'mouseenter"))?"﷐'mouseover":(cljs.core.truth_(cljs.core._EQ_.call(null,p1__3073_SHARP_,"﷐'mouseleave"))?"﷐'mouseout":(cljs.core.truth_("﷐'else")?p1__3073_SHARP_:null))));
});

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3074_SHARP_){
return goog.events.removeAll.call(null,pnod,get_name__3076.call(null,p1__3074_SHARP_));
}),event_list));
}));
};
var en_remove_listener = function (var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_listener__delegate.call(this, event_list);
};
en_remove_listener.cljs$lang$maxFixedArity = 0;
en_remove_listener.cljs$lang$applyTo = (function (arglist__3077){
var event_list = cljs.core.seq( arglist__3077 );;
return en_remove_listener__delegate.call(this, event_list);
});
return en_remove_listener;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_out = (function en_fade_out(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__3078 = (new goog.fx.dom.FadeOut(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__3078,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__3078.play();
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__3079 = (new goog.fx.dom.FadeIn(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__3079,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__3079.play();
}),callback);
});
/**
* resizes the selected elements to a width and height in px optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var csize__3080 = goog.style.getSize.call(null,pnod);
var start__3081 = cljs.core.array.call(null,csize__3080.width,csize__3080.height);
var wth__3082 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?csize__3080.width:wth);
var hgt__3083 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?csize__3080.height:hgt);
var end__3084 = cljs.core.array.call(null,wth__3082,hgt__3083);
var anim__3085 = (new goog.fx.dom.Resize(pnod,start__3081,end__3084,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__3085,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__3085.play();
}),callback);
});
/**
* moves the selected elements to a x and y in px optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var cpos__3086 = goog.style.getPosition.call(null,pnod);
var start__3087 = cljs.core.array.call(null,cpos__3086.x,cpos__3086.y);
var xpos__3088 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx"))?cpos__3086.x:xpos);
var ypos__3089 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury"))?cpos__3086.y:ypos);
var end__3090 = cljs.core.array.call(null,xpos__3088,ypos__3089);
var anim__3091 = (new goog.fx.dom.Slide(pnod,start__3087,end__3090,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__3091,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__3091.play();
}),callback);
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_attr = (function en_get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_attr = (function en_get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_text = (function en_get_text(){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return goog.dom.getTextContent.call(null,pnod);
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.en_filter = (function en_filter(tst,trans){
return (function() {
var filt = null;
var filt__3095 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__3096 = (function (pnodes,chain){
var pnod_col__3092 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest__3093 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,tst))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res__3094 = cljs.core.filter.call(null,ttest__3093,pnod_col__3092);

enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,res__3094));
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,chain)))
{return trans.call(null,res__3094);
} else
{return trans.call(null,res__3094,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case  1 :
return filt__3095.call(this,pnodes);
case  2 :
return filt__3096.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
return filt;
})()
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){
return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){
return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter.call(null,"﷐'selected",enfocus.core.selected_options);
enfocus.core.register_filter.call(null,"﷐'checked",enfocus.core.checked_radio_checkbox);
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__3099 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__3100 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__3098_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__3098_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__3098_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__3098_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__3098_SHARP_).replace("#",cljs.core.str.call(null,"#",id_mask_sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__3098_SHARP_)))
{return create_sel_str.call(null,p1__3098_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__3098_SHARP_)))
{return p1__3098_SHARP_.replace("#",cljs.core.str.call(null,"#",id_mask_sym));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case  1 :
return create_sel_str__3099.call(this,id_mask_sym);
case  2 :
return create_sel_str__3100.call(this,id_mask_sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__3104 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__3105 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3106 = (function (id_mask_sym,dom_node,css_sel){
var sel__3102 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)," :",":"));
var ret__3103 = goog.dom.query.call(null,sel__3102,dom_node);

return ret__3103;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case  1 :
return css_select__3104.call(this,id_mask_sym);
case  2 :
return css_select__3105.call(this,id_mask_sym,dom_node);
case  3 :
return css_select__3106.call(this,id_mask_sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return css_select;
})()
;
enfocus.core.css_syms = cljs.core.HashMap.fromArrays(["﷑'first-child","﷑'last-child"],[" *:first-child"," *:last-child"]);
/**
* Matches any E element that contains att attribute: css -> E[att][att2]...
* @param {...*} var_args
*/
enfocus.core.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (kys){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__3108_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__3108_SHARP_),"]");
}),kys));
};
var attr_QMARK_ = function (var_args){
var kys = null;
if (goog.isDef(var_args)) {
  kys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return attr_QMARK___delegate.call(this, kys);
};
attr_QMARK_.cljs$lang$maxFixedArity = 0;
attr_QMARK_.cljs$lang$applyTo = (function (arglist__3109){
var kys = cljs.core.seq( arglist__3109 );;
return attr_QMARK___delegate.call(this, kys);
});
return attr_QMARK_;
})()
;
/**
* Matches any E element whose att attribute value equals 'val':
* css -> E[att=val][att2=val2]...
* @param {...*} var_args
*/
enfocus.core.attr_EQ_ = (function() {
var attr_EQ_ = null;
var attr_EQ___3110 = (function (){
return "";
});
var attr_EQ___3111 = (function() { 
var G__3113__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__3113 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3113__delegate.call(this, ky, txt, forms);
};
G__3113.cljs$lang$maxFixedArity = 2;
G__3113.cljs$lang$applyTo = (function (arglist__3114){
var ky = cljs.core.first(arglist__3114);
var txt = cljs.core.first(cljs.core.next(arglist__3114));
var forms = cljs.core.rest(cljs.core.next(arglist__3114));
return G__3113__delegate.call(this, ky, txt, forms);
});
return G__3113;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___3110.call(this);
default:
return attr_EQ___3111.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___3111.cljs$lang$applyTo;
return attr_EQ_;
})()
;
/**
* Matches any E element that is the n-th child of its parent:
* css -> E:nth-child(x) or E:nth-child(xn+y)
*/
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__3115 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__3116 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__3115.call(this,x);
case  2 :
return nth_child__3116.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_child;
})()
;
/**
* Matches any E element that is the n-th sibling of its type:
* css -> E:nth-of-type(x) or E:nth-of-type(xn+y)
*/
enfocus.core.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__3118 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__3119 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__3118.call(this,x);
case  2 :
return nth_of_type__3119.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_of_type;
})()
;
/**
* Matches any E element that is the n-th child of its parent, counting from the last child
* css -> E:nth-last-child(x) or E:nth-last-child(xn+y)
*/
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__3121 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__3122 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__3121.call(this,x);
case  2 :
return nth_last_child__3122.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_child;
})()
;
/**
* Matches any E element that is the n-th sibling of its type counting from the last child:
* css -> E:nth-last-of-type(x) or E:nth-last-of-type(xn+y)
*/
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__3124 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__3125 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__3124.call(this,x);
case  2 :
return nth_last_of_type__3125.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
