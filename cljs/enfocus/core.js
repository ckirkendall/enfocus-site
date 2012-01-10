goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.debug.Logger');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.net.XhrIo');
goog.require('goog.debug');
enfocus.core.debug = true;
enfocus.core.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____2948 = enfocus.core.debug;

if(cljs.core.truth_(and__3546__auto____2948))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____2948;
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
{if(cljs.core.truth_((function (){var or__3548__auto____2950 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3548__auto____2950))
{return or__3548__auto____2950;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__385__auto____2955 = (function iter__2951(s__2952){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2952__2953 = s__2952;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2952__2953)))
{var x__2954 = cljs.core.first.call(null,s__2952__2953);

return cljs.core.cons.call(null,(nl[x__2954]),iter__2951.call(null,cljs.core.rest.call(null,s__2952__2953)));
} else
{return null;
}
break;
}
})));
});

return iter__385__auto____2955.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__2949_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__2949_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__2949_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__2949_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a javascript object
* Returns the original object (js-set obj :attr value)
*/
enfocus.core.style_set = (function style_set(obj,values){
var G__2956__2957 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

if(cljs.core.truth_(G__2956__2957))
{var G__2959__2961 = cljs.core.first.call(null,G__2956__2957);
var vec__2960__2962 = G__2959__2961;
var attr__2963 = cljs.core.nth.call(null,vec__2960__2962,0,null);
var value__2964 = cljs.core.nth.call(null,vec__2960__2962,1,null);
var G__2956__2965 = G__2956__2957;

var G__2959__2966 = G__2959__2961;
var G__2956__2967 = G__2956__2965;

while(true){
var vec__2968__2969 = G__2959__2966;
var attr__2970 = cljs.core.nth.call(null,vec__2968__2969,0,null);
var value__2971 = cljs.core.nth.call(null,vec__2968__2969,1,null);
var G__2956__2972 = G__2956__2967;

goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__2970),value__2971);
var temp__3698__auto____2973 = cljs.core.next.call(null,G__2956__2972);

if(cljs.core.truth_(temp__3698__auto____2973))
{var G__2956__2974 = temp__3698__auto____2973;

{
var G__2975 = cljs.core.first.call(null,G__2956__2974);
var G__2976 = G__2956__2974;
G__2959__2966 = G__2975;
G__2956__2967 = G__2976;
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
var G__2977__2978 = cljs.core.seq.call(null,values);

if(cljs.core.truth_(G__2977__2978))
{var attr__2979 = cljs.core.first.call(null,G__2977__2978);
var G__2977__2980 = G__2977__2978;

while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__2979),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__2979));
}
var temp__3698__auto____2981 = cljs.core.next.call(null,G__2977__2980);

if(cljs.core.truth_(temp__3698__auto____2981))
{var G__2977__2982 = temp__3698__auto____2981;

{
var G__2983 = cljs.core.first.call(null,G__2977__2982);
var G__2984 = G__2977__2982;
attr__2979 = G__2983;
G__2977__2980 = G__2984;
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
var G__2985 = parent;
var G__2986 = child.parentNode;
parent = G__2985;
child = G__2986;
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
* this is used to build cross browser versions of
* :mouseenter and :mouseleave events
*/
enfocus.core.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re__2987 = e.relatedTarget;
var this$__2988 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____2989 = cljs.core.not.call(null,(re__2987 === this$__2988));

if(cljs.core.truth_(and__3546__auto____2989))
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this$__2988,re__2987));
} else
{return and__3546__auto____2989;
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
var add_map_attrs__3009 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,ats)))
{var G__2990__2991 = cljs.core.seq.call(null,ats);

if(cljs.core.truth_(G__2990__2991))
{var G__2993__2995 = cljs.core.first.call(null,G__2990__2991);
var vec__2994__2996 = G__2993__2995;
var k__2997 = cljs.core.nth.call(null,vec__2994__2996,0,null);
var v__2998 = cljs.core.nth.call(null,vec__2994__2996,1,null);
var G__2990__2999 = G__2990__2991;

var G__2993__3000 = G__2993__2995;
var G__2990__3001 = G__2990__2999;

while(true){
var vec__3002__3003 = G__2993__3000;
var k__3004 = cljs.core.nth.call(null,vec__3002__3003,0,null);
var v__3005 = cljs.core.nth.call(null,vec__3002__3003,1,null);
var G__2990__3006 = G__2990__3001;

add_map_attrs.call(null,elem,k__3004,v__3005);
var temp__3698__auto____3007 = cljs.core.next.call(null,G__2990__3006);

if(cljs.core.truth_(temp__3698__auto____3007))
{var G__2990__3008 = temp__3698__auto____3007;

{
var G__3012 = cljs.core.first.call(null,G__2990__3008);
var G__3013 = G__2990__3008;
G__2993__3000 = G__3012;
G__2990__3001 = G__3013;
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
var add_map_attrs__3010 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case  2 :
return add_map_attrs__3009.call(this,elem,k);
case  3 :
return add_map_attrs__3010.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is
* loaded and decremented when it is added to the dom
* cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.hide_style = cljs.core.ObjMap.fromObject(["style"],{"style":"display: none; width: 0px; height: 0px"}).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this
* has to be done because css selectors do not work unless we have
* it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__3014 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__3014.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__3014);
return div__3014;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__3015 = div.childNodes;
var frag__3016 = document.createDocumentFragment();

goog.dom.append.call(null,frag__3016,child__3015);
goog.dom.removeNode.call(null,div);
return frag__3016;
});
/**
* replaces all the ids in a string html fragement/template
* with a generated symbol appended on to a existing id
* this is done to make sure we don't have id colisions
* during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__3018 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__3019 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__3019),text.replace(re__3018,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__3019,c,d);
}))]);
});
/**
* before adding the transformed dom back into the live dom we
* reset the ids back to their original values
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__3020 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__3021 = enfocus.core.nodes__GT_coll.call(null,id_nodes__3020);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3017_SHARP_){
var id__3022 = p1__3017_SHARP_.getAttribute("id");
var rid__3023 = id__3022.replace(sym,"");

return p1__3017_SHARP_.setAttribute("id",rid__3023);
}),nod_col__3021));
});
/**
* loads a remote file into the cache, before adding to the
* cache we replace the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__3024 = (new goog.net.XhrIo());
var callback__3034 = (function (req){
var text__3026 = req.getResponseText();
var vec__3025__3027 = enfocus.core.replace_ids.call(null,text__3026);
var sym__3028 = cljs.core.nth.call(null,vec__3025__3027,0,null);
var txt__3029 = cljs.core.nth.call(null,vec__3025__3027,1,null);
var data__3030 = goog.dom.htmlToDocumentFragment.call(null,txt__3029);
var body__3031 = cljs.core.first.call(null,enfocus.core.nodes__GT_coll.call(null,enfocus.core.css_select.call(null,data__3030,"body")));

if(cljs.core.truth_(body__3031))
{var frag__3032 = document.createDocumentFragment();
var childs__3033 = frag__3032.childNodes;

goog.dom.append.call(null,frag__3032,childs__3033);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__3028,frag__3032]));
} else
{return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__3028,data__3030]));
}
});

goog.events.listen.call(null,req__3024,goog.net.EventType.COMPLETE,(function (){
callback__3034.call(null,req__3024);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__3024.send(uri,"GET");
} else
{return null;
}
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__3035 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__3035))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__3035),cljs.core.second.call(null,nod__3035).cloneNode(true)]);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the
* cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__3036 = enfocus.core.create_sel_str.call(null,sel);
var cache__3037 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__3036)));

if(cljs.core.truth_(cache__3037))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__3037),cljs.core.second.call(null,cache__3037).cloneNode(true)]);
} else
{var vec__3038__3039 = enfocus.core.get_cached_dom.call(null,uri);
var sym__3040 = cljs.core.nth.call(null,vec__3038__3039,0,null);
var tdom__3041 = cljs.core.nth.call(null,vec__3038__3039,1,null);
var dom__3042 = enfocus.core.create_hidden_dom.call(null,tdom__3041);
var tsnip__3043 = enfocus.core.css_select.call(null,dom__3042,sel_str__3036);
var snip__3044 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__3043))?cljs.core.first.call(null,tsnip__3043):tsnip__3043);

enfocus.core.remove_node_return_child.call(null,dom__3042);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__3036),cljs.core.Vector.fromArray([sym__3040,snip__3044]));
return cljs.core.Vector.fromArray([sym__3040,snip__3044]);
}
});
/**
* takes a function an returns a function that
* applys a given function on all nodes returned
* by a given selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){
return (function trans(pnodes){
var pnod_col__3045 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result__3046 = cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__3045));

if(cljs.core.truth_((cljs.core.count.call(null,result__3046) <= 1)))
{return cljs.core.first.call(null,result__3046);
} else
{return result__3046;
}
});
});
/**
* takes a function an returns a function that
* applys a given function on all nodes returned
* by a given selector
*/
enfocus.core.chainable_standard = (function chainable_standard(func){
return (function() {
var trans = null;
var trans__3049 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__3050 = (function (pnodes,chain){
var pnod_col__3048 = enfocus.core.nodes__GT_coll.call(null,pnodes);

cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__3048));
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__3049.call(this,pnodes);
case  2 :
return trans__3050.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
return trans;
})()
});
/**
* takes a function an returns a function that
* applys a given function on all nodes returned
* by a given selector
*/
enfocus.core.chainable_effect = (function chainable_effect(func,callback){
return (function() {
var trans = null;
var trans__3056 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__3057 = (function (pnodes,chain){
var pnod_col__3053 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__3054 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__3053));
var partial_cback__3055 = (function (){
cljs.core.swap_BANG_.call(null,cnt__3054,cljs.core.dec);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__3054))))
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

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3047_SHARP_){
return func.call(null,p1__3047_SHARP_,partial_cback__3055);
}),pnod_col__3053));
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__3056.call(this,pnodes);
case  2 :
return trans__3057.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
return trans;
})()
});
/**
* HOF to remove the duplicate code in transformation that
* handle creating a fragment and applying it in some way
* to the selected node
*/
enfocus.core.content_based_trans = (function content_based_trans(values,func){
var fnodes__3059 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__3060 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3052_SHARP_){
return goog.dom.appendChild.call(null,frag__3060,p1__3052_SHARP_.cloneNode(true));
}),fnodes__3059));
return func.call(null,pnod,frag__3060);
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
en_content.cljs$lang$applyTo = (function (arglist__3061){
var values = cljs.core.seq( arglist__3061 );;
return en_content__delegate.call(this, values);
});
return en_content;
})()
;
/**
* Replaces the content of the element with the dom structure
* represented by the html string passed
*/
enfocus.core.en_html_content = (function en_html_content(txt){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__3062 = goog.dom.htmlToDocumentFragment.call(null,txt);

goog.dom.removeChildren.call(null,pnod);
return goog.dom.append.call(null,pnod,frag__3062);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var at_lst__3064 = cljs.core.partition.call(null,2,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__3065){
var vec__3066__3067 = p__3065;
var a__3068 = cljs.core.nth.call(null,vec__3066__3067,0,null);
var v__3069 = cljs.core.nth.call(null,vec__3066__3067,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__3068),v__3069);
}),at_lst__3064));
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
en_set_attr.cljs$lang$applyTo = (function (arglist__3070){
var values = cljs.core.seq( arglist__3070 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3063_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__3063_SHARP_));
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
en_remove_attr.cljs$lang$applyTo = (function (arglist__3071){
var values = cljs.core.seq( arglist__3071 );;
return en_remove_attr__delegate.call(this, values);
});
return en_remove_attr;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
var regex__3073 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",cls,"(\\s|$)")));
var cur_cls__3074 = el.className;

return cur_cls__3074.match(regex__3073);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.en_add_class = (function() { 
var en_add_class__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var cur_cls__3076 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3072_SHARP_){
if(cljs.core.truth_(cljs.core.not.call(null,enfocus.core.has_class.call(null,pnod,p1__3072_SHARP_))))
{return pnod.className = cljs.core.str.call(null,cur_cls__3076," ",p1__3072_SHARP_);
} else
{return null;
}
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
en_add_class.cljs$lang$applyTo = (function (arglist__3077){
var values = cljs.core.seq( arglist__3077 );;
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
var cur__3079 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3075_SHARP_){
if(cljs.core.truth_(enfocus.core.has_class.call(null,pnod,p1__3075_SHARP_)))
{var regex__3080 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",p1__3075_SHARP_,"(\\s|$)")));

return pnod.className = cur__3079.replace(regex__3080," ");
} else
{return null;
}
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
en_remove_class.cljs$lang$applyTo = (function (arglist__3081){
var values = cljs.core.seq( arglist__3081 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3078_SHARP_){
return p1__3078_SHARP_.call(null,pnod);
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
en_do__GT_.cljs$lang$applyTo = (function (arglist__3082){
var forms = cljs.core.seq( arglist__3082 );;
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
en_append.cljs$lang$applyTo = (function (arglist__3083){
var values = cljs.core.seq( arglist__3083 );;
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
var nod__3084 = pnod.firstChild;

return pnod.insertBefore(frag,nod__3084);
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
en_prepend.cljs$lang$applyTo = (function (arglist__3085){
var values = cljs.core.seq( arglist__3085 );;
return en_prepend__delegate.call(this, values);
});
return en_prepend;
})()
;
/**
* inserts the content before the selected node.  Values can be nodes or collection of nodes
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
en_before.cljs$lang$applyTo = (function (arglist__3086){
var values = cljs.core.seq( arglist__3086 );;
return en_before__delegate.call(this, values);
});
return en_before;
})()
;
/**
* inserts the content after the selected node.  Values can be nodes or collection of nodes
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
en_after.cljs$lang$applyTo = (function (arglist__3087){
var values = cljs.core.seq( arglist__3087 );;
return en_after__delegate.call(this, values);
});
return en_after;
})()
;
/**
* substitutes the content for the selected node.  Values can be nodes or collection of nodes
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
en_substitute.cljs$lang$applyTo = (function (arglist__3088){
var values = cljs.core.seq( arglist__3088 );;
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
en_remove_node.cljs$lang$applyTo = (function (arglist__3089){
var values = cljs.core.seq( arglist__3089 );;
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
var elem__3090 = goog.dom.createElement.call(null,cljs.core.name.call(null,elm));

enfocus.core.add_map_attrs.call(null,elem__3090,mattr);
enfocus.core.en_content.call(null,pnod.cloneNode(true)).call(null,elem__3090);
elem__3090;
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__3090),enfocus.core.en_remove_node.call(null)).call(null,pnod);
return pnod;
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__3091 = document.createDocumentFragment();

enfocus.core.en_append.call(null,pnod.childNodes).call(null,frag__3091);
frag__3091;
enfocus.core.log_debug.call(null,frag__3091);
enfocus.core.log_debug.call(null,pnod);
enfocus.core.log_debug.call(null,pnod.childNodes);
return goog.dom.replaceNode.call(null,frag__3091,pnod);
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
en_set_style.cljs$lang$applyTo = (function (arglist__3092){
var values = cljs.core.seq( arglist__3092 );;
return en_set_style__delegate.call(this, values);
});
return en_set_style;
})()
;
/**
* remove a list style elements from the selected nodes
* note: you can only remove styles that are inline styles
* set in css need to overridden through set-style
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
en_remove_style.cljs$lang$applyTo = (function (arglist__3093){
var values = cljs.core.seq( arglist__3093 );;
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
if(cljs.core.truth_((function (){var and__3546__auto____3096 = cljs.core._EQ_.call(null,"﷐'resize",event);

if(cljs.core.truth_(and__3546__auto____3096))
{return (window === pnod);
} else
{return and__3546__auto____3096;
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
var get_name__3097 = (function (p1__3094_SHARP_){
return cljs.core.name.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,p1__3094_SHARP_,"﷐'mouseenter"))?"﷐'mouseover":(cljs.core.truth_(cljs.core._EQ_.call(null,p1__3094_SHARP_,"﷐'mouseleave"))?"﷐'mouseout":(cljs.core.truth_("﷐'else")?p1__3094_SHARP_:null))));
});

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3095_SHARP_){
return goog.events.removeAll.call(null,pnod,get_name__3097.call(null,p1__3095_SHARP_));
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
en_remove_listener.cljs$lang$applyTo = (function (arglist__3098){
var event_list = cljs.core.seq( arglist__3098 );;
return en_remove_listener__delegate.call(this, event_list);
});
return en_remove_listener;
})()
;
enfocus.core.start_effect = (function start_effect(pnod,etype){
enfocus.core.log_debug.call(null,cljs.core.str.call(null,"start-effect",pnod,":",etype));
var effs__3099 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);
var eff_id__3100 = cljs.core.gensym.call(null,"efid_");

if(cljs.core.truth_(effs__3099))
{cljs.core.swap_BANG_.call(null,effs__3099,cljs.core.conj,eff_id__3100);
return eff_id__3100;
} else
{(pnod[enfocus.core.get_eff_prop_name.call(null,etype)] = cljs.core.atom.call(null,cljs.core.set([eff_id__3100])));
return eff_id__3100;
}
});
enfocus.core.check_effect = (function check_effect(pnod,etype,sym){
var effs__3101 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);

if(cljs.core.truth_((function (){var and__3546__auto____3102 = effs__3101;

if(cljs.core.truth_(and__3546__auto____3102))
{return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,effs__3101),sym);
} else
{return and__3546__auto____3102;
}
})()))
{return true;
} else
{return false;
}
});
enfocus.core.finish_effect = (function finish_effect(pnod,etype,sym){
enfocus.core.log_debug.call(null,cljs.core.str.call(null,"finish-effect",pnod,":",etype,":",sym));
var effs__3104 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);

if(cljs.core.truth_(effs__3104))
{return cljs.core.swap_BANG_.call(null,effs__3104,cljs.core.disj,sym);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.en_stop_effect = (function() { 
var en_stop_effect__delegate = function (etypes){
return (function (pnod){
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,"stop-effect",pnod,":",etypes));
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3103_SHARP_){
return (pnod[enfocus.core.get_eff_prop_name.call(null,p1__3103_SHARP_)] = cljs.core.atom.call(null,cljs.core.set([])));
}),etypes));
});
};
var en_stop_effect = function (var_args){
var etypes = null;
if (goog.isDef(var_args)) {
  etypes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_stop_effect__delegate.call(this, etypes);
};
en_stop_effect.cljs$lang$maxFixedArity = 0;
en_stop_effect.cljs$lang$applyTo = (function (arglist__3105){
var etypes = cljs.core.seq( arglist__3105 );;
return en_stop_effect__delegate.call(this, etypes);
});
return en_stop_effect;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_out = (function en_fade_out(ttime,step,callback){
var incr__3106 = (1 / (ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2608__auto__,pcallback__2609__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'fade-in").call(null,pnod__2608__auto__);
var start__2610__auto____3107 = enfocus.core.get_mills.call(null);
var eff_id__2611__auto____3108 = enfocus.core.start_effect.call(null,pnod__2608__auto__,"﷐'fade-out");
var eff__2612__auto____3119 = (function run__2613__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____3109 = enfocus.core.check_effect.call(null,pnod__2608__auto__,"﷐'fade-out",eff_id__2611__auto____3108);

if(cljs.core.truth_(and__3546__auto____3109))
{return cljs.core.not.call(null,(function (pnod,etime){
var op__3110 = goog.style.getOpacity.call(null,pnod);
var op__3112 = (cljs.core.truth_((function (){var or__3548__auto____3111 = cljs.core._EQ_.call(null,op__3110,undefined);

if(cljs.core.truth_(or__3548__auto____3111))
{return or__3548__auto____3111;
} else
{return cljs.core._EQ_.call(null,"",op__3110);
}
})())?1:op__3110);

if(cljs.core.truth_(((op__3112 - incr__3106) <= 0)))
{goog.style.setOpacity.call(null,pnod,0);
return true;
} else
{return false;
}
}).call(null,pnod__2608__auto__,(enfocus.core.get_mills.call(null) - start__2610__auto____3107)));
} else
{return and__3546__auto____3109;
}
})()))
{(function (){var nods__2470__auto____3116 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var op__3114 = goog.style.getOpacity.call(null,pnod);
var op__3115 = (cljs.core.truth_(cljs.core._EQ_.call(null,op__3114,undefined))?1:op__3114);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__3115)))
{return goog.style.setOpacity.call(null,pnod,(1 - incr__3106));
} else
{if(cljs.core.truth_((0 < op__3115)))
{return goog.style.setOpacity.call(null,pnod,(op__3115 - incr__3106));
} else
{return null;
}
}
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3113){
return pnod3113;
}),nods__2470__auto____3116));
return (function (pnod){
var op__3117 = goog.style.getOpacity.call(null,pnod);
var op__3118 = (cljs.core.truth_(cljs.core._EQ_.call(null,op__3117,undefined))?1:op__3117);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__3118)))
{return goog.style.setOpacity.call(null,pnod,(1 - incr__3106));
} else
{if(cljs.core.truth_((0 < op__3118)))
{return goog.style.setOpacity.call(null,pnod,(op__3118 - incr__3106));
} else
{return null;
}
}
});
})().call(null,pnod__2608__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2613__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2608__auto__,"﷐'fade-out",eff_id__2611__auto____3108);
return pcallback__2609__auto__.call(null);
}
});

return eff__2612__auto____3119.call(null,0);
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,step,callback){
var incr__3120 = (1 / (ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2608__auto__,pcallback__2609__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'fade-out").call(null,pnod__2608__auto__);
var start__2610__auto____3121 = enfocus.core.get_mills.call(null);
var eff_id__2611__auto____3122 = enfocus.core.start_effect.call(null,pnod__2608__auto__,"﷐'fade-in");
var eff__2612__auto____3129 = (function run__2613__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____3123 = enfocus.core.check_effect.call(null,pnod__2608__auto__,"﷐'fade-in",eff_id__2611__auto____3122);

if(cljs.core.truth_(and__3546__auto____3123))
{return cljs.core.not.call(null,(function (pnod,etime){
var op__3124 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(((op__3124 + incr__3120) >= 1)))
{goog.style.setOpacity.call(null,pnod,1);
return true;
} else
{return false;
}
}).call(null,pnod__2608__auto__,(enfocus.core.get_mills.call(null) - start__2610__auto____3121)));
} else
{return and__3546__auto____3123;
}
})()))
{(function (){var nods__2470__auto____3127 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var op__3126 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__3126)))
{return goog.style.setOpacity.call(null,pnod,incr__3120);
} else
{if(cljs.core.truth_((1 > op__3126)))
{return goog.style.setOpacity.call(null,pnod,(op__3126 + incr__3120));
} else
{return null;
}
}
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3125){
return pnod3125;
}),nods__2470__auto____3127));
return (function (pnod){
var op__3128 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__3128)))
{return goog.style.setOpacity.call(null,pnod,incr__3120);
} else
{if(cljs.core.truth_((1 > op__3128)))
{return goog.style.setOpacity.call(null,pnod,(op__3128 + incr__3120));
} else
{return null;
}
}
});
})().call(null,pnod__2608__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2613__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2608__auto__,"﷐'fade-in",eff_id__2611__auto____3122);
return pcallback__2609__auto__.call(null);
}
});

return eff__2612__auto____3129.call(null,0);
}),callback);
});
/**
* resizes the selected elements to a width and height in px
* optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,step,callback){
var orig_sym__3130 = cljs.core.gensym.call(null,"orig-size");
var steps__3133 = (cljs.core.truth_((function (){var or__3548__auto____3131 = (ttime === 0);

if(cljs.core.truth_(or__3548__auto____3131))
{return or__3548__auto____3131;
} else
{var or__3548__auto____3132 = (step === 0);

if(cljs.core.truth_(or__3548__auto____3132))
{return or__3548__auto____3132;
} else
{return (ttime <= step);
}
}
})())?1:(ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2608__auto__,pcallback__2609__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'resize").call(null,pnod__2608__auto__);
var start__2610__auto____3134 = enfocus.core.get_mills.call(null);
var eff_id__2611__auto____3135 = enfocus.core.start_effect.call(null,pnod__2608__auto__,"﷐'resize");
var eff__2612__auto____3181 = (function run__2613__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____3136 = enfocus.core.check_effect.call(null,pnod__2608__auto__,"﷐'resize",eff_id__2611__auto____3135);

if(cljs.core.truth_(and__3546__auto____3136))
{return cljs.core.not.call(null,(function (pnod,etime){
var csize__3137 = goog.style.getSize.call(null,pnod);
var osize__3138 = (pnod[cljs.core.name.call(null,orig_sym__3130)]);
var osize__3139 = (cljs.core.truth_(osize__3138)?osize__3138:(pnod[cljs.core.name.call(null,orig_sym__3130)] = csize__3137));
var wth__3140 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__3139.width:wth);
var hgt__3141 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__3139.height:hgt);
var wstep__3142 = enfocus.core.pix_round.call(null,((wth__3140 - osize__3139.width) / steps__3133));
var hstep__3143 = enfocus.core.pix_round.call(null,((hgt__3141 - osize__3139.height) / steps__3133));

if(cljs.core.truth_((function (){var and__3546__auto____3148 = (function (){var or__3548__auto____3144 = (wstep__3142 === 0);

if(cljs.core.truth_(or__3548__auto____3144))
{return or__3548__auto____3144;
} else
{var or__3548__auto____3146 = (function (){var and__3546__auto____3145 = (wstep__3142 < 0);

if(cljs.core.truth_(and__3546__auto____3145))
{return (wth__3140 >= csize__3137.width);
} else
{return and__3546__auto____3145;
}
})();

if(cljs.core.truth_(or__3548__auto____3146))
{return or__3548__auto____3146;
} else
{var and__3546__auto____3147 = (wstep__3142 > 0);

if(cljs.core.truth_(and__3546__auto____3147))
{return (wth__3140 <= csize__3137.width);
} else
{return and__3546__auto____3147;
}
}
}
})();

if(cljs.core.truth_(and__3546__auto____3148))
{var or__3548__auto____3149 = (hstep__3143 === 0);

if(cljs.core.truth_(or__3548__auto____3149))
{return or__3548__auto____3149;
} else
{var or__3548__auto____3151 = (function (){var and__3546__auto____3150 = (hstep__3143 < 0);

if(cljs.core.truth_(and__3546__auto____3150))
{return (hgt__3141 >= csize__3137.height);
} else
{return and__3546__auto____3150;
}
})();

if(cljs.core.truth_(or__3548__auto____3151))
{return or__3548__auto____3151;
} else
{var and__3546__auto____3152 = (hstep__3143 > 0);

if(cljs.core.truth_(and__3546__auto____3152))
{return (hgt__3141 <= csize__3137.height);
} else
{return and__3546__auto____3152;
}
}
}
} else
{return and__3546__auto____3148;
}
})()))
{(pnod[cljs.core.name.call(null,orig_sym__3130)] = null);
goog.style.setWidth.call(null,pnod,wth__3140);
goog.style.setHeight.call(null,pnod,hgt__3141);
return true;
} else
{return false;
}
}).call(null,pnod__2608__auto__,(enfocus.core.get_mills.call(null) - start__2610__auto____3134)));
} else
{return and__3546__auto____3136;
}
})()))
{(function (){var nods__2470__auto____3167 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var csize__3154 = goog.style.getSize.call(null,pnod);
var osize__3155 = (pnod[cljs.core.name.call(null,orig_sym__3130)]);
var osize__3156 = (cljs.core.truth_(osize__3155)?osize__3155:(pnod[cljs.core.name.call(null,orig_sym__3130)] = csize__3154));
var wth__3157 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__3156.width:wth);
var hgt__3158 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__3156.height:hgt);
var wstep__3159 = enfocus.core.pix_round.call(null,((wth__3157 - osize__3156.width) / steps__3133));
var hstep__3160 = enfocus.core.pix_round.call(null,((hgt__3158 - osize__3156.height) / steps__3133));

if(cljs.core.truth_((function (){var or__3548__auto____3162 = (function (){var and__3546__auto____3161 = (wstep__3159 < 0);

if(cljs.core.truth_(and__3546__auto____3161))
{return (wth__3157 < csize__3154.width);
} else
{return and__3546__auto____3161;
}
})();

if(cljs.core.truth_(or__3548__auto____3162))
{return or__3548__auto____3162;
} else
{var and__3546__auto____3163 = (wstep__3159 > 0);

if(cljs.core.truth_(and__3546__auto____3163))
{return (wth__3157 > csize__3154.width);
} else
{return and__3546__auto____3163;
}
}
})()))
{goog.style.setWidth.call(null,pnod,(csize__3154.width + wstep__3159));
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____3165 = (function (){var and__3546__auto____3164 = (hstep__3160 < 0);

if(cljs.core.truth_(and__3546__auto____3164))
{return (hgt__3158 < csize__3154.height);
} else
{return and__3546__auto____3164;
}
})();

if(cljs.core.truth_(or__3548__auto____3165))
{return or__3548__auto____3165;
} else
{var and__3546__auto____3166 = (hstep__3160 > 0);

if(cljs.core.truth_(and__3546__auto____3166))
{return (hgt__3158 > csize__3154.height);
} else
{return and__3546__auto____3166;
}
}
})()))
{return goog.style.setHeight.call(null,pnod,(csize__3154.height + hstep__3160));
} else
{return null;
}
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3153){
return pnod3153;
}),nods__2470__auto____3167));
return (function (pnod){
var csize__3168 = goog.style.getSize.call(null,pnod);
var osize__3169 = (pnod[cljs.core.name.call(null,orig_sym__3130)]);
var osize__3170 = (cljs.core.truth_(osize__3169)?osize__3169:(pnod[cljs.core.name.call(null,orig_sym__3130)] = csize__3168));
var wth__3171 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__3170.width:wth);
var hgt__3172 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__3170.height:hgt);
var wstep__3173 = enfocus.core.pix_round.call(null,((wth__3171 - osize__3170.width) / steps__3133));
var hstep__3174 = enfocus.core.pix_round.call(null,((hgt__3172 - osize__3170.height) / steps__3133));

if(cljs.core.truth_((function (){var or__3548__auto____3176 = (function (){var and__3546__auto____3175 = (wstep__3173 < 0);

if(cljs.core.truth_(and__3546__auto____3175))
{return (wth__3171 < csize__3168.width);
} else
{return and__3546__auto____3175;
}
})();

if(cljs.core.truth_(or__3548__auto____3176))
{return or__3548__auto____3176;
} else
{var and__3546__auto____3177 = (wstep__3173 > 0);

if(cljs.core.truth_(and__3546__auto____3177))
{return (wth__3171 > csize__3168.width);
} else
{return and__3546__auto____3177;
}
}
})()))
{goog.style.setWidth.call(null,pnod,(csize__3168.width + wstep__3173));
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____3179 = (function (){var and__3546__auto____3178 = (hstep__3174 < 0);

if(cljs.core.truth_(and__3546__auto____3178))
{return (hgt__3172 < csize__3168.height);
} else
{return and__3546__auto____3178;
}
})();

if(cljs.core.truth_(or__3548__auto____3179))
{return or__3548__auto____3179;
} else
{var and__3546__auto____3180 = (hstep__3174 > 0);

if(cljs.core.truth_(and__3546__auto____3180))
{return (hgt__3172 > csize__3168.height);
} else
{return and__3546__auto____3180;
}
}
})()))
{return goog.style.setHeight.call(null,pnod,(csize__3168.height + hstep__3174));
} else
{return null;
}
});
})().call(null,pnod__2608__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2613__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2608__auto__,"﷐'resize",eff_id__2611__auto____3135);
return pcallback__2609__auto__.call(null);
}
});

return eff__2612__auto____3181.call(null,0);
}),callback);
});
/**
* moves the selected elements to a x and y in px
* optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,step,callback){
var orig_sym__3182 = cljs.core.gensym.call(null,"orig-pos");
var steps__3185 = (cljs.core.truth_((function (){var or__3548__auto____3183 = (ttime === 0);

if(cljs.core.truth_(or__3548__auto____3183))
{return or__3548__auto____3183;
} else
{var or__3548__auto____3184 = (step === 0);

if(cljs.core.truth_(or__3548__auto____3184))
{return or__3548__auto____3184;
} else
{return (ttime <= step);
}
}
})())?1:(ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2608__auto__,pcallback__2609__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'move").call(null,pnod__2608__auto__);
var start__2610__auto____3186 = enfocus.core.get_mills.call(null);
var eff_id__2611__auto____3187 = enfocus.core.start_effect.call(null,pnod__2608__auto__,"﷐'move");
var eff__2612__auto____3236 = (function run__2613__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____3188 = enfocus.core.check_effect.call(null,pnod__2608__auto__,"﷐'move",eff_id__2611__auto____3187);

if(cljs.core.truth_(and__3546__auto____3188))
{return cljs.core.not.call(null,(function (pnod,etime){
var cpos__3189 = goog.style.getPosition.call(null,pnod);
var opos__3190 = (pnod[cljs.core.name.call(null,orig_sym__3182)]);
var opos__3191 = (cljs.core.truth_(opos__3190)?opos__3190:(pnod[cljs.core.name.call(null,orig_sym__3182)] = cpos__3189));
var xpos__3192 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__3191.x:xpos);
var ypos__3193 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__3191.y:ypos);
var xstep__3194 = enfocus.core.pix_round.call(null,((xpos__3192 - opos__3191.x) / steps__3185));
var ystep__3195 = enfocus.core.pix_round.call(null,((ypos__3193 - opos__3191.y) / steps__3185));
var clone__3196 = cpos__3189.clone;

if(cljs.core.truth_((function (){var and__3546__auto____3201 = (function (){var or__3548__auto____3197 = (xstep__3194 === 0);

if(cljs.core.truth_(or__3548__auto____3197))
{return or__3548__auto____3197;
} else
{var or__3548__auto____3199 = (function (){var and__3546__auto____3198 = (xstep__3194 < 0);

if(cljs.core.truth_(and__3546__auto____3198))
{return (xpos__3192 >= cpos__3189.x);
} else
{return and__3546__auto____3198;
}
})();

if(cljs.core.truth_(or__3548__auto____3199))
{return or__3548__auto____3199;
} else
{var and__3546__auto____3200 = (xstep__3194 > 0);

if(cljs.core.truth_(and__3546__auto____3200))
{return (xpos__3192 <= cpos__3189.x);
} else
{return and__3546__auto____3200;
}
}
}
})();

if(cljs.core.truth_(and__3546__auto____3201))
{var or__3548__auto____3202 = (ystep__3195 === 0);

if(cljs.core.truth_(or__3548__auto____3202))
{return or__3548__auto____3202;
} else
{var or__3548__auto____3204 = (function (){var and__3546__auto____3203 = (ystep__3195 < 0);

if(cljs.core.truth_(and__3546__auto____3203))
{return (ypos__3193 >= cpos__3189.y);
} else
{return and__3546__auto____3203;
}
})();

if(cljs.core.truth_(or__3548__auto____3204))
{return or__3548__auto____3204;
} else
{var and__3546__auto____3205 = (ystep__3195 > 0);

if(cljs.core.truth_(and__3546__auto____3205))
{return (ypos__3193 <= cpos__3189.y);
} else
{return and__3546__auto____3205;
}
}
}
} else
{return and__3546__auto____3201;
}
})()))
{(pnod[cljs.core.name.call(null,orig_sym__3182)] = null);
clone__3196.x = xpos__3192;
clone__3196.y = ypos__3193;
goog.style.setPosition.call(null,pnod,clone__3196.x,clone__3196.y);
return true;
} else
{return false;
}
}).call(null,pnod__2608__auto__,(enfocus.core.get_mills.call(null) - start__2610__auto____3186)));
} else
{return and__3546__auto____3188;
}
})()))
{(function (){var nods__2470__auto____3221 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var cpos__3207 = goog.style.getPosition.call(null,pnod);
var opos__3208 = (pnod[cljs.core.name.call(null,orig_sym__3182)]);
var opos__3209 = (cljs.core.truth_(opos__3208)?opos__3208:(pnod[cljs.core.name.call(null,orig_sym__3182)] = cpos__3207));
var xpos__3210 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__3209.x:xpos);
var ypos__3211 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__3209.y:ypos);
var xstep__3212 = enfocus.core.pix_round.call(null,((xpos__3210 - opos__3209.x) / steps__3185));
var ystep__3213 = enfocus.core.pix_round.call(null,((ypos__3211 - opos__3209.y) / steps__3185));
var clone__3214 = cpos__3207.clone;

if(cljs.core.truth_((function (){var or__3548__auto____3216 = (function (){var and__3546__auto____3215 = (xstep__3212 < 0);

if(cljs.core.truth_(and__3546__auto____3215))
{return (xpos__3210 < cpos__3207.x);
} else
{return and__3546__auto____3215;
}
})();

if(cljs.core.truth_(or__3548__auto____3216))
{return or__3548__auto____3216;
} else
{var and__3546__auto____3217 = (xstep__3212 > 0);

if(cljs.core.truth_(and__3546__auto____3217))
{return (xpos__3210 > cpos__3207.x);
} else
{return and__3546__auto____3217;
}
}
})()))
{clone__3214.x = (cpos__3207.x + xstep__3212);
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____3219 = (function (){var and__3546__auto____3218 = (ystep__3213 < 0);

if(cljs.core.truth_(and__3546__auto____3218))
{return (ypos__3211 < cpos__3207.y);
} else
{return and__3546__auto____3218;
}
})();

if(cljs.core.truth_(or__3548__auto____3219))
{return or__3548__auto____3219;
} else
{var and__3546__auto____3220 = (ystep__3213 > 0);

if(cljs.core.truth_(and__3546__auto____3220))
{return (ypos__3211 > cpos__3207.y);
} else
{return and__3546__auto____3220;
}
}
})()))
{clone__3214.y = (cpos__3207.y + ystep__3213);
} else
{}
return goog.style.setPosition.call(null,pnod,clone__3214.x,clone__3214.y);
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3206){
return pnod3206;
}),nods__2470__auto____3221));
return (function (pnod){
var cpos__3222 = goog.style.getPosition.call(null,pnod);
var opos__3223 = (pnod[cljs.core.name.call(null,orig_sym__3182)]);
var opos__3224 = (cljs.core.truth_(opos__3223)?opos__3223:(pnod[cljs.core.name.call(null,orig_sym__3182)] = cpos__3222));
var xpos__3225 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__3224.x:xpos);
var ypos__3226 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__3224.y:ypos);
var xstep__3227 = enfocus.core.pix_round.call(null,((xpos__3225 - opos__3224.x) / steps__3185));
var ystep__3228 = enfocus.core.pix_round.call(null,((ypos__3226 - opos__3224.y) / steps__3185));
var clone__3229 = cpos__3222.clone;

if(cljs.core.truth_((function (){var or__3548__auto____3231 = (function (){var and__3546__auto____3230 = (xstep__3227 < 0);

if(cljs.core.truth_(and__3546__auto____3230))
{return (xpos__3225 < cpos__3222.x);
} else
{return and__3546__auto____3230;
}
})();

if(cljs.core.truth_(or__3548__auto____3231))
{return or__3548__auto____3231;
} else
{var and__3546__auto____3232 = (xstep__3227 > 0);

if(cljs.core.truth_(and__3546__auto____3232))
{return (xpos__3225 > cpos__3222.x);
} else
{return and__3546__auto____3232;
}
}
})()))
{clone__3229.x = (cpos__3222.x + xstep__3227);
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____3234 = (function (){var and__3546__auto____3233 = (ystep__3228 < 0);

if(cljs.core.truth_(and__3546__auto____3233))
{return (ypos__3226 < cpos__3222.y);
} else
{return and__3546__auto____3233;
}
})();

if(cljs.core.truth_(or__3548__auto____3234))
{return or__3548__auto____3234;
} else
{var and__3546__auto____3235 = (ystep__3228 > 0);

if(cljs.core.truth_(and__3546__auto____3235))
{return (ypos__3226 > cpos__3222.y);
} else
{return and__3546__auto____3235;
}
}
})()))
{clone__3229.y = (cpos__3222.y + ystep__3228);
} else
{}
return goog.style.setPosition.call(null,pnod,clone__3229.x,clone__3229.y);
});
})().call(null,pnod__2608__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2613__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2608__auto__,"﷐'move",eff_id__2611__auto____3187);
return pcallback__2609__auto__.call(null);
}
});

return eff__2612__auto____3236.call(null,0);
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
* filter allows you to apply function to futhur scope
* down what is returned by a selector
*/
enfocus.core.en_filter = (function en_filter(tst,trans){
return (function() {
var filt = null;
var filt__3240 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__3241 = (function (pnodes,chain){
var pnod_col__3237 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest__3238 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,tst))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res__3239 = cljs.core.filter.call(null,ttest__3238,pnod_col__3237);

enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,res__3239));
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,chain)))
{return trans.call(null,res__3239);
} else
{return trans.call(null,res__3239,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case  1 :
return filt__3240.call(this,pnodes);
case  2 :
return filt__3241.call(this,pnodes,chain);
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
* takes a list of options and returns the selected ones
* will return an empty list if passed nodes that are
* no options
*/
enfocus.core.selected_options = (function selected_options(pnod){
return pnod.selected;
});
/**
* takes a list of options and returns the selected ones
* will return an empty list if passed nodes that are
* no options
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter.call(null,"﷐'selected",enfocus.core.selected_options);
enfocus.core.register_filter.call(null,"﷐'checked",enfocus.core.checked_radio_checkbox);
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* takes a string to append to all ids so they do not conflict with
* existing ids in the live dom
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__3244 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__3245 = (function (id_scope_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__3243_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__3243_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__3243_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__3243_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__3243_SHARP_).replace("#",cljs.core.str.call(null,"#",id_scope_sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__3243_SHARP_)))
{return create_sel_str.call(null,p1__3243_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__3243_SHARP_)))
{return p1__3243_SHARP_.replace("#",cljs.core.str.call(null,"#",id_scope_sym));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_scope_sym,css_sel){
switch(arguments.length){
case  1 :
return create_sel_str__3244.call(this,id_scope_sym);
case  2 :
return create_sel_str__3245.call(this,id_scope_sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and
* returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__3249 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__3250 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3251 = (function (id_scope_sym,dom_node,css_sel){
var sel__3247 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,id_scope_sym,css_sel)," :",":"));
var ret__3248 = goog.dom.query.call(null,sel__3247,dom_node);

return ret__3248;
});
css_select = function(id_scope_sym,dom_node,css_sel){
switch(arguments.length){
case  1 :
return css_select__3249.call(this,id_scope_sym);
case  2 :
return css_select__3250.call(this,id_scope_sym,dom_node);
case  3 :
return css_select__3251.call(this,id_scope_sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return css_select;
})()
;
enfocus.core.css_syms = cljs.core.HashMap.fromArrays(["﷑'first-child","﷑'last-child"],[" *:first-child"," *:last-child"]);
/**
* Matches any E element that contains att attribute:
* css -> E[att][att2]...
* @param {...*} var_args
*/
enfocus.core.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (kys){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__3253_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__3253_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__3254){
var kys = cljs.core.seq( arglist__3254 );;
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
var attr_EQ___3255 = (function (){
return "";
});
var attr_EQ___3256 = (function() { 
var G__3258__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__3258 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3258__delegate.call(this, ky, txt, forms);
};
G__3258.cljs$lang$maxFixedArity = 2;
G__3258.cljs$lang$applyTo = (function (arglist__3259){
var ky = cljs.core.first(arglist__3259);
var txt = cljs.core.first(cljs.core.next(arglist__3259));
var forms = cljs.core.rest(cljs.core.next(arglist__3259));
return G__3258__delegate.call(this, ky, txt, forms);
});
return G__3258;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___3255.call(this);
default:
return attr_EQ___3256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___3256.cljs$lang$applyTo;
return attr_EQ_;
})()
;
/**
* Matches any E element that is the n-th child of its parent:
* css -> E:nth-child(x) or E:nth-child(xn+y)
*/
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__3260 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__3261 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__3260.call(this,x);
case  2 :
return nth_child__3261.call(this,x,y);
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
var nth_of_type__3263 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__3264 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__3263.call(this,x);
case  2 :
return nth_of_type__3264.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_of_type;
})()
;
/**
* Matches any E element that is the n-th child of its parent,
* counting from the last child.
* css -> E:nth-last-child(x) or E:nth-last-child(xn+y)
*/
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__3266 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__3267 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__3266.call(this,x);
case  2 :
return nth_last_child__3267.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_child;
})()
;
/**
* Matches any E element that is the n-th sibling of its type
* counting from the last child:
* css -> E:nth-last-of-type(x) or E:nth-last-of-type(xn+y)
*/
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__3269 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__3270 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__3269.call(this,x);
case  2 :
return nth_last_of_type__3270.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
