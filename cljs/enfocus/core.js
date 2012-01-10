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
if(cljs.core.truth_((function (){var and__3546__auto____2937 = enfocus.core.debug;

if(cljs.core.truth_(and__3546__auto____2937))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____2937;
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
{if(cljs.core.truth_((function (){var or__3548__auto____2939 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3548__auto____2939))
{return or__3548__auto____2939;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__385__auto____2944 = (function iter__2940(s__2941){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2941__2942 = s__2941;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2941__2942)))
{var x__2943 = cljs.core.first.call(null,s__2941__2942);

return cljs.core.cons.call(null,(nl[x__2943]),iter__2940.call(null,cljs.core.rest.call(null,s__2941__2942)));
} else
{return null;
}
break;
}
})));
});

return iter__385__auto____2944.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__2938_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__2938_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__2938_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__2938_SHARP_);
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
var G__2945__2946 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

if(cljs.core.truth_(G__2945__2946))
{var G__2948__2950 = cljs.core.first.call(null,G__2945__2946);
var vec__2949__2951 = G__2948__2950;
var attr__2952 = cljs.core.nth.call(null,vec__2949__2951,0,null);
var value__2953 = cljs.core.nth.call(null,vec__2949__2951,1,null);
var G__2945__2954 = G__2945__2946;

var G__2948__2955 = G__2948__2950;
var G__2945__2956 = G__2945__2954;

while(true){
var vec__2957__2958 = G__2948__2955;
var attr__2959 = cljs.core.nth.call(null,vec__2957__2958,0,null);
var value__2960 = cljs.core.nth.call(null,vec__2957__2958,1,null);
var G__2945__2961 = G__2945__2956;

goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__2959),value__2960);
var temp__3698__auto____2962 = cljs.core.next.call(null,G__2945__2961);

if(cljs.core.truth_(temp__3698__auto____2962))
{var G__2945__2963 = temp__3698__auto____2962;

{
var G__2964 = cljs.core.first.call(null,G__2945__2963);
var G__2965 = G__2945__2963;
G__2948__2955 = G__2964;
G__2945__2956 = G__2965;
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
var G__2966__2967 = cljs.core.seq.call(null,values);

if(cljs.core.truth_(G__2966__2967))
{var attr__2968 = cljs.core.first.call(null,G__2966__2967);
var G__2966__2969 = G__2966__2967;

while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__2968),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__2968));
}
var temp__3698__auto____2970 = cljs.core.next.call(null,G__2966__2969);

if(cljs.core.truth_(temp__3698__auto____2970))
{var G__2966__2971 = temp__3698__auto____2970;

{
var G__2972 = cljs.core.first.call(null,G__2966__2971);
var G__2973 = G__2966__2971;
attr__2968 = G__2972;
G__2966__2969 = G__2973;
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
var G__2974 = parent;
var G__2975 = child.parentNode;
parent = G__2974;
child = G__2975;
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
var re__2976 = e.relatedTarget;
var this$__2977 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____2978 = cljs.core.not.call(null,(re__2976 === this$__2977));

if(cljs.core.truth_(and__3546__auto____2978))
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this$__2977,re__2976));
} else
{return and__3546__auto____2978;
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
var add_map_attrs__2998 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,ats)))
{var G__2979__2980 = cljs.core.seq.call(null,ats);

if(cljs.core.truth_(G__2979__2980))
{var G__2982__2984 = cljs.core.first.call(null,G__2979__2980);
var vec__2983__2985 = G__2982__2984;
var k__2986 = cljs.core.nth.call(null,vec__2983__2985,0,null);
var v__2987 = cljs.core.nth.call(null,vec__2983__2985,1,null);
var G__2979__2988 = G__2979__2980;

var G__2982__2989 = G__2982__2984;
var G__2979__2990 = G__2979__2988;

while(true){
var vec__2991__2992 = G__2982__2989;
var k__2993 = cljs.core.nth.call(null,vec__2991__2992,0,null);
var v__2994 = cljs.core.nth.call(null,vec__2991__2992,1,null);
var G__2979__2995 = G__2979__2990;

add_map_attrs.call(null,elem,k__2993,v__2994);
var temp__3698__auto____2996 = cljs.core.next.call(null,G__2979__2995);

if(cljs.core.truth_(temp__3698__auto____2996))
{var G__2979__2997 = temp__3698__auto____2996;

{
var G__3001 = cljs.core.first.call(null,G__2979__2997);
var G__3002 = G__2979__2997;
G__2982__2989 = G__3001;
G__2979__2990 = G__3002;
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
var add_map_attrs__2999 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case  2 :
return add_map_attrs__2998.call(this,elem,k);
case  3 :
return add_map_attrs__2999.call(this,elem,k,v);
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
var div__3003 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__3003.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__3003);
return div__3003;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__3004 = div.childNodes;
var frag__3005 = document.createDocumentFragment();

goog.dom.append.call(null,frag__3005,child__3004);
goog.dom.removeNode.call(null,div);
return frag__3005;
});
/**
* replaces all the ids in a string html fragement/template
* with a generated symbol appended on to a existing id
* this is done to make sure we don't have id colisions
* during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__3007 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__3008 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__3008),text.replace(re__3007,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__3008,c,d);
}))]);
});
/**
* before adding the transformed dom back into the live dom we
* reset the ids back to their original values
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__3009 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__3010 = enfocus.core.nodes__GT_coll.call(null,id_nodes__3009);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3006_SHARP_){
var id__3011 = p1__3006_SHARP_.getAttribute("id");
var rid__3012 = id__3011.replace(sym,"");

return p1__3006_SHARP_.setAttribute("id",rid__3012);
}),nod_col__3010));
});
/**
* loads a remote file into the cache, before adding to the
* cache we replace the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__3013 = (new goog.net.XhrIo());
var callback__3023 = (function (req){
var text__3015 = req.getResponseText();
var vec__3014__3016 = enfocus.core.replace_ids.call(null,text__3015);
var sym__3017 = cljs.core.nth.call(null,vec__3014__3016,0,null);
var txt__3018 = cljs.core.nth.call(null,vec__3014__3016,1,null);
var data__3019 = goog.dom.htmlToDocumentFragment.call(null,txt__3018);
var body__3020 = cljs.core.first.call(null,enfocus.core.nodes__GT_coll.call(null,enfocus.core.css_select.call(null,data__3019,"body")));

if(cljs.core.truth_(body__3020))
{var frag__3021 = document.createDocumentFragment();
var childs__3022 = frag__3021.childNodes;

goog.dom.append.call(null,frag__3021,childs__3022);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__3017,frag__3021]));
} else
{return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__3017,data__3019]));
}
});

goog.events.listen.call(null,req__3013,goog.net.EventType.COMPLETE,(function (){
callback__3023.call(null,req__3013);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__3013.send(uri,"GET");
} else
{return null;
}
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__3024 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__3024))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__3024),cljs.core.second.call(null,nod__3024).cloneNode(true)]);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the
* cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__3025 = enfocus.core.create_sel_str.call(null,sel);
var cache__3026 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__3025)));

if(cljs.core.truth_(cache__3026))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__3026),cljs.core.second.call(null,cache__3026).cloneNode(true)]);
} else
{var vec__3027__3028 = enfocus.core.get_cached_dom.call(null,uri);
var sym__3029 = cljs.core.nth.call(null,vec__3027__3028,0,null);
var tdom__3030 = cljs.core.nth.call(null,vec__3027__3028,1,null);
var dom__3031 = enfocus.core.create_hidden_dom.call(null,tdom__3030);
var tsnip__3032 = enfocus.core.css_select.call(null,dom__3031,sel_str__3025);
var snip__3033 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__3032))?cljs.core.first.call(null,tsnip__3032):tsnip__3032);

enfocus.core.remove_node_return_child.call(null,dom__3031);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__3025),cljs.core.Vector.fromArray([sym__3029,snip__3033]));
return cljs.core.Vector.fromArray([sym__3029,snip__3033]);
}
});
/**
* takes a function an returns a function that
* applys a given function on all nodes returned
* by a given selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){
return (function trans(pnodes){
var pnod_col__3034 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result__3035 = cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__3034));

if(cljs.core.truth_((cljs.core.count.call(null,result__3035) <= 1)))
{return cljs.core.first.call(null,result__3035);
} else
{return result__3035;
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
var trans__3038 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__3039 = (function (pnodes,chain){
var pnod_col__3037 = enfocus.core.nodes__GT_coll.call(null,pnodes);

cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__3037));
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__3038.call(this,pnodes);
case  2 :
return trans__3039.call(this,pnodes,chain);
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
var trans__3045 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__3046 = (function (pnodes,chain){
var pnod_col__3042 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__3043 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__3042));
var partial_cback__3044 = (function (){
cljs.core.swap_BANG_.call(null,cnt__3043,cljs.core.dec);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__3043))))
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

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3036_SHARP_){
return func.call(null,p1__3036_SHARP_,partial_cback__3044);
}),pnod_col__3042));
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__3045.call(this,pnodes);
case  2 :
return trans__3046.call(this,pnodes,chain);
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
var fnodes__3048 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__3049 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3041_SHARP_){
return goog.dom.appendChild.call(null,frag__3049,p1__3041_SHARP_.cloneNode(true));
}),fnodes__3048));
return func.call(null,pnod,frag__3049);
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
en_content.cljs$lang$applyTo = (function (arglist__3050){
var values = cljs.core.seq( arglist__3050 );;
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
var frag__3051 = goog.dom.htmlToDocumentFragment.call(null,txt);

goog.dom.removeChildren.call(null,pnod);
return goog.dom.append.call(null,pnod,frag__3051);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var at_lst__3053 = cljs.core.partition.call(null,2,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__3054){
var vec__3055__3056 = p__3054;
var a__3057 = cljs.core.nth.call(null,vec__3055__3056,0,null);
var v__3058 = cljs.core.nth.call(null,vec__3055__3056,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__3057),v__3058);
}),at_lst__3053));
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
en_set_attr.cljs$lang$applyTo = (function (arglist__3059){
var values = cljs.core.seq( arglist__3059 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3052_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__3052_SHARP_));
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
en_remove_attr.cljs$lang$applyTo = (function (arglist__3060){
var values = cljs.core.seq( arglist__3060 );;
return en_remove_attr__delegate.call(this, values);
});
return en_remove_attr;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
var regex__3062 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",cls,"(\\s|$)")));
var cur_cls__3063 = el.className;

return cur_cls__3063.match(regex__3062);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.en_add_class = (function() { 
var en_add_class__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var cur_cls__3065 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3061_SHARP_){
if(cljs.core.truth_(cljs.core.not.call(null,enfocus.core.has_class.call(null,pnod,p1__3061_SHARP_))))
{return pnod.className = cljs.core.str.call(null,cur_cls__3065," ",p1__3061_SHARP_);
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
en_add_class.cljs$lang$applyTo = (function (arglist__3066){
var values = cljs.core.seq( arglist__3066 );;
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
var cur__3068 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3064_SHARP_){
if(cljs.core.truth_(enfocus.core.has_class.call(null,pnod,p1__3064_SHARP_)))
{var regex__3069 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",p1__3064_SHARP_,"(\\s|$)")));

return pnod.className = cur__3068.replace(regex__3069," ");
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
en_remove_class.cljs$lang$applyTo = (function (arglist__3070){
var values = cljs.core.seq( arglist__3070 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3067_SHARP_){
return p1__3067_SHARP_.call(null,pnod);
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
en_do__GT_.cljs$lang$applyTo = (function (arglist__3071){
var forms = cljs.core.seq( arglist__3071 );;
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
en_append.cljs$lang$applyTo = (function (arglist__3072){
var values = cljs.core.seq( arglist__3072 );;
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
var nod__3073 = pnod.firstChild;

return pnod.insertBefore(frag,nod__3073);
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
en_prepend.cljs$lang$applyTo = (function (arglist__3074){
var values = cljs.core.seq( arglist__3074 );;
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
en_before.cljs$lang$applyTo = (function (arglist__3075){
var values = cljs.core.seq( arglist__3075 );;
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
en_after.cljs$lang$applyTo = (function (arglist__3076){
var values = cljs.core.seq( arglist__3076 );;
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
en_substitute.cljs$lang$applyTo = (function (arglist__3077){
var values = cljs.core.seq( arglist__3077 );;
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
en_remove_node.cljs$lang$applyTo = (function (arglist__3078){
var values = cljs.core.seq( arglist__3078 );;
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
var elem__3079 = goog.dom.createElement.call(null,cljs.core.name.call(null,elm));

enfocus.core.add_map_attrs.call(null,elem__3079,mattr);
enfocus.core.en_content.call(null,pnod.cloneNode(true)).call(null,elem__3079);
elem__3079;
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__3079),enfocus.core.en_remove_node.call(null)).call(null,pnod);
return pnod;
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__3080 = document.createDocumentFragment();

enfocus.core.en_append.call(null,pnod.childNodes).call(null,frag__3080);
frag__3080;
enfocus.core.log_debug.call(null,frag__3080);
enfocus.core.log_debug.call(null,pnod);
enfocus.core.log_debug.call(null,pnod.childNodes);
return goog.dom.replaceNode.call(null,frag__3080,pnod);
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
en_set_style.cljs$lang$applyTo = (function (arglist__3081){
var values = cljs.core.seq( arglist__3081 );;
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
en_remove_style.cljs$lang$applyTo = (function (arglist__3082){
var values = cljs.core.seq( arglist__3082 );;
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
if(cljs.core.truth_((function (){var and__3546__auto____3085 = cljs.core._EQ_.call(null,"﷐'resize",event);

if(cljs.core.truth_(and__3546__auto____3085))
{return (window === pnod);
} else
{return and__3546__auto____3085;
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
var get_name__3086 = (function (p1__3083_SHARP_){
return cljs.core.name.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,p1__3083_SHARP_,"﷐'mouseenter"))?"﷐'mouseover":(cljs.core.truth_(cljs.core._EQ_.call(null,p1__3083_SHARP_,"﷐'mouseleave"))?"﷐'mouseout":(cljs.core.truth_("﷐'else")?p1__3083_SHARP_:null))));
});

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3084_SHARP_){
return goog.events.removeAll.call(null,pnod,get_name__3086.call(null,p1__3084_SHARP_));
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
en_remove_listener.cljs$lang$applyTo = (function (arglist__3087){
var event_list = cljs.core.seq( arglist__3087 );;
return en_remove_listener__delegate.call(this, event_list);
});
return en_remove_listener;
})()
;
enfocus.core.start_effect = (function start_effect(pnod,etype){
enfocus.core.log_debug.call(null,cljs.core.str.call(null,"start-effect",pnod,":",etype));
var effs__3088 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);
var eff_id__3089 = cljs.core.gensym.call(null,"efid_");

if(cljs.core.truth_(effs__3088))
{cljs.core.swap_BANG_.call(null,effs__3088,cljs.core.conj,eff_id__3089);
return eff_id__3089;
} else
{(pnod[enfocus.core.get_eff_prop_name.call(null,etype)] = cljs.core.atom.call(null,cljs.core.set([eff_id__3089])));
return eff_id__3089;
}
});
enfocus.core.check_effect = (function check_effect(pnod,etype,sym){
var effs__3090 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);

if(cljs.core.truth_((function (){var and__3546__auto____3091 = effs__3090;

if(cljs.core.truth_(and__3546__auto____3091))
{return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,effs__3090),sym);
} else
{return and__3546__auto____3091;
}
})()))
{return true;
} else
{return false;
}
});
enfocus.core.finish_effect = (function finish_effect(pnod,etype,sym){
enfocus.core.log_debug.call(null,cljs.core.str.call(null,"finish-effect",pnod,":",etype,":",sym));
var effs__3093 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);

if(cljs.core.truth_(effs__3093))
{return cljs.core.swap_BANG_.call(null,effs__3093,cljs.core.disj,sym);
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3092_SHARP_){
return (pnod[enfocus.core.get_eff_prop_name.call(null,p1__3092_SHARP_)] = cljs.core.atom.call(null,cljs.core.set([])));
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
en_stop_effect.cljs$lang$applyTo = (function (arglist__3094){
var etypes = cljs.core.seq( arglist__3094 );;
return en_stop_effect__delegate.call(this, etypes);
});
return en_stop_effect;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_out = (function en_fade_out(ttime,step,callback){
var incr__3095 = (1 / (ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2608__auto__,pcallback__2609__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'fade-in").call(null,pnod__2608__auto__);
var start__2610__auto____3096 = enfocus.core.get_mills.call(null);
var eff_id__2611__auto____3097 = enfocus.core.start_effect.call(null,pnod__2608__auto__,"﷐'fade-out");
var eff__2612__auto____3108 = (function run__2613__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____3098 = enfocus.core.check_effect.call(null,pnod__2608__auto__,"﷐'fade-out",eff_id__2611__auto____3097);

if(cljs.core.truth_(and__3546__auto____3098))
{return cljs.core.not.call(null,(function (pnod,etime){
var op__3099 = goog.style.getOpacity.call(null,pnod);
var op__3101 = (cljs.core.truth_((function (){var or__3548__auto____3100 = cljs.core._EQ_.call(null,op__3099,undefined);

if(cljs.core.truth_(or__3548__auto____3100))
{return or__3548__auto____3100;
} else
{return cljs.core._EQ_.call(null,"",op__3099);
}
})())?1:op__3099);

if(cljs.core.truth_(((op__3101 - incr__3095) <= 0)))
{goog.style.setOpacity.call(null,pnod,0);
return true;
} else
{return false;
}
}).call(null,pnod__2608__auto__,(enfocus.core.get_mills.call(null) - start__2610__auto____3096)));
} else
{return and__3546__auto____3098;
}
})()))
{(function (){var nods__2470__auto____3105 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var op__3103 = goog.style.getOpacity.call(null,pnod);
var op__3104 = (cljs.core.truth_(cljs.core._EQ_.call(null,op__3103,undefined))?1:op__3103);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__3104)))
{return goog.style.setOpacity.call(null,pnod,(1 - incr__3095));
} else
{if(cljs.core.truth_((0 < op__3104)))
{return goog.style.setOpacity.call(null,pnod,(op__3104 - incr__3095));
} else
{return null;
}
}
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3102){
return pnod3102;
}),nods__2470__auto____3105));
return (function (pnod){
var op__3106 = goog.style.getOpacity.call(null,pnod);
var op__3107 = (cljs.core.truth_(cljs.core._EQ_.call(null,op__3106,undefined))?1:op__3106);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__3107)))
{return goog.style.setOpacity.call(null,pnod,(1 - incr__3095));
} else
{if(cljs.core.truth_((0 < op__3107)))
{return goog.style.setOpacity.call(null,pnod,(op__3107 - incr__3095));
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
{enfocus.core.finish_effect.call(null,pnod__2608__auto__,"﷐'fade-out",eff_id__2611__auto____3097);
return pcallback__2609__auto__.call(null);
}
});

return eff__2612__auto____3108.call(null,0);
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,step,callback){
var incr__3109 = (1 / (ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2608__auto__,pcallback__2609__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'fade-out").call(null,pnod__2608__auto__);
var start__2610__auto____3110 = enfocus.core.get_mills.call(null);
var eff_id__2611__auto____3111 = enfocus.core.start_effect.call(null,pnod__2608__auto__,"﷐'fade-in");
var eff__2612__auto____3118 = (function run__2613__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____3112 = enfocus.core.check_effect.call(null,pnod__2608__auto__,"﷐'fade-in",eff_id__2611__auto____3111);

if(cljs.core.truth_(and__3546__auto____3112))
{return cljs.core.not.call(null,(function (pnod,etime){
var op__3113 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(((op__3113 + incr__3109) >= 1)))
{goog.style.setOpacity.call(null,pnod,1);
return true;
} else
{return false;
}
}).call(null,pnod__2608__auto__,(enfocus.core.get_mills.call(null) - start__2610__auto____3110)));
} else
{return and__3546__auto____3112;
}
})()))
{(function (){var nods__2470__auto____3116 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var op__3115 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__3115)))
{return goog.style.setOpacity.call(null,pnod,incr__3109);
} else
{if(cljs.core.truth_((1 > op__3115)))
{return goog.style.setOpacity.call(null,pnod,(op__3115 + incr__3109));
} else
{return null;
}
}
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3114){
return pnod3114;
}),nods__2470__auto____3116));
return (function (pnod){
var op__3117 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__3117)))
{return goog.style.setOpacity.call(null,pnod,incr__3109);
} else
{if(cljs.core.truth_((1 > op__3117)))
{return goog.style.setOpacity.call(null,pnod,(op__3117 + incr__3109));
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
{enfocus.core.finish_effect.call(null,pnod__2608__auto__,"﷐'fade-in",eff_id__2611__auto____3111);
return pcallback__2609__auto__.call(null);
}
});

return eff__2612__auto____3118.call(null,0);
}),callback);
});
/**
* resizes the selected elements to a width and height in px
* optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,step,callback){
var orig_sym__3119 = cljs.core.gensym.call(null,"orig-size");
var steps__3122 = (cljs.core.truth_((function (){var or__3548__auto____3120 = (ttime === 0);

if(cljs.core.truth_(or__3548__auto____3120))
{return or__3548__auto____3120;
} else
{var or__3548__auto____3121 = (step === 0);

if(cljs.core.truth_(or__3548__auto____3121))
{return or__3548__auto____3121;
} else
{return (ttime <= step);
}
}
})())?1:(ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2608__auto__,pcallback__2609__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'resize").call(null,pnod__2608__auto__);
var start__2610__auto____3123 = enfocus.core.get_mills.call(null);
var eff_id__2611__auto____3124 = enfocus.core.start_effect.call(null,pnod__2608__auto__,"﷐'resize");
var eff__2612__auto____3170 = (function run__2613__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____3125 = enfocus.core.check_effect.call(null,pnod__2608__auto__,"﷐'resize",eff_id__2611__auto____3124);

if(cljs.core.truth_(and__3546__auto____3125))
{return cljs.core.not.call(null,(function (pnod,etime){
var csize__3126 = goog.style.getSize.call(null,pnod);
var osize__3127 = (pnod[cljs.core.name.call(null,orig_sym__3119)]);
var osize__3128 = (cljs.core.truth_(osize__3127)?osize__3127:(pnod[cljs.core.name.call(null,orig_sym__3119)] = csize__3126));
var wth__3129 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__3128.width:wth);
var hgt__3130 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__3128.height:hgt);
var wstep__3131 = enfocus.core.pix_round.call(null,((wth__3129 - osize__3128.width) / steps__3122));
var hstep__3132 = enfocus.core.pix_round.call(null,((hgt__3130 - osize__3128.height) / steps__3122));

if(cljs.core.truth_((function (){var and__3546__auto____3137 = (function (){var or__3548__auto____3133 = (wstep__3131 === 0);

if(cljs.core.truth_(or__3548__auto____3133))
{return or__3548__auto____3133;
} else
{var or__3548__auto____3135 = (function (){var and__3546__auto____3134 = (wstep__3131 < 0);

if(cljs.core.truth_(and__3546__auto____3134))
{return (wth__3129 >= csize__3126.width);
} else
{return and__3546__auto____3134;
}
})();

if(cljs.core.truth_(or__3548__auto____3135))
{return or__3548__auto____3135;
} else
{var and__3546__auto____3136 = (wstep__3131 > 0);

if(cljs.core.truth_(and__3546__auto____3136))
{return (wth__3129 <= csize__3126.width);
} else
{return and__3546__auto____3136;
}
}
}
})();

if(cljs.core.truth_(and__3546__auto____3137))
{var or__3548__auto____3138 = (hstep__3132 === 0);

if(cljs.core.truth_(or__3548__auto____3138))
{return or__3548__auto____3138;
} else
{var or__3548__auto____3140 = (function (){var and__3546__auto____3139 = (hstep__3132 < 0);

if(cljs.core.truth_(and__3546__auto____3139))
{return (hgt__3130 >= csize__3126.height);
} else
{return and__3546__auto____3139;
}
})();

if(cljs.core.truth_(or__3548__auto____3140))
{return or__3548__auto____3140;
} else
{var and__3546__auto____3141 = (hstep__3132 > 0);

if(cljs.core.truth_(and__3546__auto____3141))
{return (hgt__3130 <= csize__3126.height);
} else
{return and__3546__auto____3141;
}
}
}
} else
{return and__3546__auto____3137;
}
})()))
{(pnod[cljs.core.name.call(null,orig_sym__3119)] = null);
goog.style.setWidth.call(null,pnod,wth__3129);
goog.style.setHeight.call(null,pnod,hgt__3130);
return true;
} else
{return false;
}
}).call(null,pnod__2608__auto__,(enfocus.core.get_mills.call(null) - start__2610__auto____3123)));
} else
{return and__3546__auto____3125;
}
})()))
{(function (){var nods__2470__auto____3156 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var csize__3143 = goog.style.getSize.call(null,pnod);
var osize__3144 = (pnod[cljs.core.name.call(null,orig_sym__3119)]);
var osize__3145 = (cljs.core.truth_(osize__3144)?osize__3144:(pnod[cljs.core.name.call(null,orig_sym__3119)] = csize__3143));
var wth__3146 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__3145.width:wth);
var hgt__3147 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__3145.height:hgt);
var wstep__3148 = enfocus.core.pix_round.call(null,((wth__3146 - osize__3145.width) / steps__3122));
var hstep__3149 = enfocus.core.pix_round.call(null,((hgt__3147 - osize__3145.height) / steps__3122));

if(cljs.core.truth_((function (){var or__3548__auto____3151 = (function (){var and__3546__auto____3150 = (wstep__3148 < 0);

if(cljs.core.truth_(and__3546__auto____3150))
{return (wth__3146 < csize__3143.width);
} else
{return and__3546__auto____3150;
}
})();

if(cljs.core.truth_(or__3548__auto____3151))
{return or__3548__auto____3151;
} else
{var and__3546__auto____3152 = (wstep__3148 > 0);

if(cljs.core.truth_(and__3546__auto____3152))
{return (wth__3146 > csize__3143.width);
} else
{return and__3546__auto____3152;
}
}
})()))
{goog.style.setWidth.call(null,pnod,(csize__3143.width + wstep__3148));
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____3154 = (function (){var and__3546__auto____3153 = (hstep__3149 < 0);

if(cljs.core.truth_(and__3546__auto____3153))
{return (hgt__3147 < csize__3143.height);
} else
{return and__3546__auto____3153;
}
})();

if(cljs.core.truth_(or__3548__auto____3154))
{return or__3548__auto____3154;
} else
{var and__3546__auto____3155 = (hstep__3149 > 0);

if(cljs.core.truth_(and__3546__auto____3155))
{return (hgt__3147 > csize__3143.height);
} else
{return and__3546__auto____3155;
}
}
})()))
{return goog.style.setHeight.call(null,pnod,(csize__3143.height + hstep__3149));
} else
{return null;
}
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3142){
return pnod3142;
}),nods__2470__auto____3156));
return (function (pnod){
var csize__3157 = goog.style.getSize.call(null,pnod);
var osize__3158 = (pnod[cljs.core.name.call(null,orig_sym__3119)]);
var osize__3159 = (cljs.core.truth_(osize__3158)?osize__3158:(pnod[cljs.core.name.call(null,orig_sym__3119)] = csize__3157));
var wth__3160 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__3159.width:wth);
var hgt__3161 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__3159.height:hgt);
var wstep__3162 = enfocus.core.pix_round.call(null,((wth__3160 - osize__3159.width) / steps__3122));
var hstep__3163 = enfocus.core.pix_round.call(null,((hgt__3161 - osize__3159.height) / steps__3122));

if(cljs.core.truth_((function (){var or__3548__auto____3165 = (function (){var and__3546__auto____3164 = (wstep__3162 < 0);

if(cljs.core.truth_(and__3546__auto____3164))
{return (wth__3160 < csize__3157.width);
} else
{return and__3546__auto____3164;
}
})();

if(cljs.core.truth_(or__3548__auto____3165))
{return or__3548__auto____3165;
} else
{var and__3546__auto____3166 = (wstep__3162 > 0);

if(cljs.core.truth_(and__3546__auto____3166))
{return (wth__3160 > csize__3157.width);
} else
{return and__3546__auto____3166;
}
}
})()))
{goog.style.setWidth.call(null,pnod,(csize__3157.width + wstep__3162));
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____3168 = (function (){var and__3546__auto____3167 = (hstep__3163 < 0);

if(cljs.core.truth_(and__3546__auto____3167))
{return (hgt__3161 < csize__3157.height);
} else
{return and__3546__auto____3167;
}
})();

if(cljs.core.truth_(or__3548__auto____3168))
{return or__3548__auto____3168;
} else
{var and__3546__auto____3169 = (hstep__3163 > 0);

if(cljs.core.truth_(and__3546__auto____3169))
{return (hgt__3161 > csize__3157.height);
} else
{return and__3546__auto____3169;
}
}
})()))
{return goog.style.setHeight.call(null,pnod,(csize__3157.height + hstep__3163));
} else
{return null;
}
});
})().call(null,pnod__2608__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2613__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2608__auto__,"﷐'resize",eff_id__2611__auto____3124);
return pcallback__2609__auto__.call(null);
}
});

return eff__2612__auto____3170.call(null,0);
}),callback);
});
/**
* moves the selected elements to a x and y in px
* optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,step,callback){
var orig_sym__3171 = cljs.core.gensym.call(null,"orig-pos");
var steps__3174 = (cljs.core.truth_((function (){var or__3548__auto____3172 = (ttime === 0);

if(cljs.core.truth_(or__3548__auto____3172))
{return or__3548__auto____3172;
} else
{var or__3548__auto____3173 = (step === 0);

if(cljs.core.truth_(or__3548__auto____3173))
{return or__3548__auto____3173;
} else
{return (ttime <= step);
}
}
})())?1:(ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2608__auto__,pcallback__2609__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'move").call(null,pnod__2608__auto__);
var start__2610__auto____3175 = enfocus.core.get_mills.call(null);
var eff_id__2611__auto____3176 = enfocus.core.start_effect.call(null,pnod__2608__auto__,"﷐'move");
var eff__2612__auto____3225 = (function run__2613__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____3177 = enfocus.core.check_effect.call(null,pnod__2608__auto__,"﷐'move",eff_id__2611__auto____3176);

if(cljs.core.truth_(and__3546__auto____3177))
{return cljs.core.not.call(null,(function (pnod,etime){
var cpos__3178 = goog.style.getPosition.call(null,pnod);
var opos__3179 = (pnod[cljs.core.name.call(null,orig_sym__3171)]);
var opos__3180 = (cljs.core.truth_(opos__3179)?opos__3179:(pnod[cljs.core.name.call(null,orig_sym__3171)] = cpos__3178));
var xpos__3181 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__3180.x:xpos);
var ypos__3182 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__3180.y:ypos);
var xstep__3183 = enfocus.core.pix_round.call(null,((xpos__3181 - opos__3180.x) / steps__3174));
var ystep__3184 = enfocus.core.pix_round.call(null,((ypos__3182 - opos__3180.y) / steps__3174));
var clone__3185 = cpos__3178.clone;

if(cljs.core.truth_((function (){var and__3546__auto____3190 = (function (){var or__3548__auto____3186 = (xstep__3183 === 0);

if(cljs.core.truth_(or__3548__auto____3186))
{return or__3548__auto____3186;
} else
{var or__3548__auto____3188 = (function (){var and__3546__auto____3187 = (xstep__3183 < 0);

if(cljs.core.truth_(and__3546__auto____3187))
{return (xpos__3181 >= cpos__3178.x);
} else
{return and__3546__auto____3187;
}
})();

if(cljs.core.truth_(or__3548__auto____3188))
{return or__3548__auto____3188;
} else
{var and__3546__auto____3189 = (xstep__3183 > 0);

if(cljs.core.truth_(and__3546__auto____3189))
{return (xpos__3181 <= cpos__3178.x);
} else
{return and__3546__auto____3189;
}
}
}
})();

if(cljs.core.truth_(and__3546__auto____3190))
{var or__3548__auto____3191 = (ystep__3184 === 0);

if(cljs.core.truth_(or__3548__auto____3191))
{return or__3548__auto____3191;
} else
{var or__3548__auto____3193 = (function (){var and__3546__auto____3192 = (ystep__3184 < 0);

if(cljs.core.truth_(and__3546__auto____3192))
{return (ypos__3182 >= cpos__3178.y);
} else
{return and__3546__auto____3192;
}
})();

if(cljs.core.truth_(or__3548__auto____3193))
{return or__3548__auto____3193;
} else
{var and__3546__auto____3194 = (ystep__3184 > 0);

if(cljs.core.truth_(and__3546__auto____3194))
{return (ypos__3182 <= cpos__3178.y);
} else
{return and__3546__auto____3194;
}
}
}
} else
{return and__3546__auto____3190;
}
})()))
{(pnod[cljs.core.name.call(null,orig_sym__3171)] = null);
clone__3185.x = xpos__3181;
clone__3185.y = ypos__3182;
goog.style.setPosition.call(null,pnod,clone__3185.x,clone__3185.y);
return true;
} else
{return false;
}
}).call(null,pnod__2608__auto__,(enfocus.core.get_mills.call(null) - start__2610__auto____3175)));
} else
{return and__3546__auto____3177;
}
})()))
{(function (){var nods__2470__auto____3210 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var cpos__3196 = goog.style.getPosition.call(null,pnod);
var opos__3197 = (pnod[cljs.core.name.call(null,orig_sym__3171)]);
var opos__3198 = (cljs.core.truth_(opos__3197)?opos__3197:(pnod[cljs.core.name.call(null,orig_sym__3171)] = cpos__3196));
var xpos__3199 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__3198.x:xpos);
var ypos__3200 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__3198.y:ypos);
var xstep__3201 = enfocus.core.pix_round.call(null,((xpos__3199 - opos__3198.x) / steps__3174));
var ystep__3202 = enfocus.core.pix_round.call(null,((ypos__3200 - opos__3198.y) / steps__3174));
var clone__3203 = cpos__3196.clone;

if(cljs.core.truth_((function (){var or__3548__auto____3205 = (function (){var and__3546__auto____3204 = (xstep__3201 < 0);

if(cljs.core.truth_(and__3546__auto____3204))
{return (xpos__3199 < cpos__3196.x);
} else
{return and__3546__auto____3204;
}
})();

if(cljs.core.truth_(or__3548__auto____3205))
{return or__3548__auto____3205;
} else
{var and__3546__auto____3206 = (xstep__3201 > 0);

if(cljs.core.truth_(and__3546__auto____3206))
{return (xpos__3199 > cpos__3196.x);
} else
{return and__3546__auto____3206;
}
}
})()))
{clone__3203.x = (cpos__3196.x + xstep__3201);
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____3208 = (function (){var and__3546__auto____3207 = (ystep__3202 < 0);

if(cljs.core.truth_(and__3546__auto____3207))
{return (ypos__3200 < cpos__3196.y);
} else
{return and__3546__auto____3207;
}
})();

if(cljs.core.truth_(or__3548__auto____3208))
{return or__3548__auto____3208;
} else
{var and__3546__auto____3209 = (ystep__3202 > 0);

if(cljs.core.truth_(and__3546__auto____3209))
{return (ypos__3200 > cpos__3196.y);
} else
{return and__3546__auto____3209;
}
}
})()))
{clone__3203.y = (cpos__3196.y + ystep__3202);
} else
{}
return goog.style.setPosition.call(null,pnod,clone__3203.x,clone__3203.y);
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3195){
return pnod3195;
}),nods__2470__auto____3210));
return (function (pnod){
var cpos__3211 = goog.style.getPosition.call(null,pnod);
var opos__3212 = (pnod[cljs.core.name.call(null,orig_sym__3171)]);
var opos__3213 = (cljs.core.truth_(opos__3212)?opos__3212:(pnod[cljs.core.name.call(null,orig_sym__3171)] = cpos__3211));
var xpos__3214 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__3213.x:xpos);
var ypos__3215 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__3213.y:ypos);
var xstep__3216 = enfocus.core.pix_round.call(null,((xpos__3214 - opos__3213.x) / steps__3174));
var ystep__3217 = enfocus.core.pix_round.call(null,((ypos__3215 - opos__3213.y) / steps__3174));
var clone__3218 = cpos__3211.clone;

if(cljs.core.truth_((function (){var or__3548__auto____3220 = (function (){var and__3546__auto____3219 = (xstep__3216 < 0);

if(cljs.core.truth_(and__3546__auto____3219))
{return (xpos__3214 < cpos__3211.x);
} else
{return and__3546__auto____3219;
}
})();

if(cljs.core.truth_(or__3548__auto____3220))
{return or__3548__auto____3220;
} else
{var and__3546__auto____3221 = (xstep__3216 > 0);

if(cljs.core.truth_(and__3546__auto____3221))
{return (xpos__3214 > cpos__3211.x);
} else
{return and__3546__auto____3221;
}
}
})()))
{clone__3218.x = (cpos__3211.x + xstep__3216);
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____3223 = (function (){var and__3546__auto____3222 = (ystep__3217 < 0);

if(cljs.core.truth_(and__3546__auto____3222))
{return (ypos__3215 < cpos__3211.y);
} else
{return and__3546__auto____3222;
}
})();

if(cljs.core.truth_(or__3548__auto____3223))
{return or__3548__auto____3223;
} else
{var and__3546__auto____3224 = (ystep__3217 > 0);

if(cljs.core.truth_(and__3546__auto____3224))
{return (ypos__3215 > cpos__3211.y);
} else
{return and__3546__auto____3224;
}
}
})()))
{clone__3218.y = (cpos__3211.y + ystep__3217);
} else
{}
return goog.style.setPosition.call(null,pnod,clone__3218.x,clone__3218.y);
});
})().call(null,pnod__2608__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2613__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2608__auto__,"﷐'move",eff_id__2611__auto____3176);
return pcallback__2609__auto__.call(null);
}
});

return eff__2612__auto____3225.call(null,0);
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
var filt__3229 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__3230 = (function (pnodes,chain){
var pnod_col__3226 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest__3227 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,tst))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res__3228 = cljs.core.filter.call(null,ttest__3227,pnod_col__3226);

enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,res__3228));
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,chain)))
{return trans.call(null,res__3228);
} else
{return trans.call(null,res__3228,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case  1 :
return filt__3229.call(this,pnodes);
case  2 :
return filt__3230.call(this,pnodes,chain);
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
var create_sel_str__3233 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__3234 = (function (id_scope_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__3232_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__3232_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__3232_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__3232_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__3232_SHARP_).replace("#",cljs.core.str.call(null,"#",id_scope_sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__3232_SHARP_)))
{return create_sel_str.call(null,p1__3232_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__3232_SHARP_)))
{return p1__3232_SHARP_.replace("#",cljs.core.str.call(null,"#",id_scope_sym));
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
return create_sel_str__3233.call(this,id_scope_sym);
case  2 :
return create_sel_str__3234.call(this,id_scope_sym,css_sel);
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
var css_select__3238 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__3239 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3240 = (function (id_scope_sym,dom_node,css_sel){
var sel__3236 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,id_scope_sym,css_sel)," :",":"));
var ret__3237 = goog.dom.query.call(null,sel__3236,dom_node);

return ret__3237;
});
css_select = function(id_scope_sym,dom_node,css_sel){
switch(arguments.length){
case  1 :
return css_select__3238.call(this,id_scope_sym);
case  2 :
return css_select__3239.call(this,id_scope_sym,dom_node);
case  3 :
return css_select__3240.call(this,id_scope_sym,dom_node,css_sel);
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__3242_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__3242_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__3243){
var kys = cljs.core.seq( arglist__3243 );;
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
var attr_EQ___3244 = (function (){
return "";
});
var attr_EQ___3245 = (function() { 
var G__3247__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__3247 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3247__delegate.call(this, ky, txt, forms);
};
G__3247.cljs$lang$maxFixedArity = 2;
G__3247.cljs$lang$applyTo = (function (arglist__3248){
var ky = cljs.core.first(arglist__3248);
var txt = cljs.core.first(cljs.core.next(arglist__3248));
var forms = cljs.core.rest(cljs.core.next(arglist__3248));
return G__3247__delegate.call(this, ky, txt, forms);
});
return G__3247;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___3244.call(this);
default:
return attr_EQ___3245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___3245.cljs$lang$applyTo;
return attr_EQ_;
})()
;
/**
* Matches any E element that is the n-th child of its parent:
* css -> E:nth-child(x) or E:nth-child(xn+y)
*/
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__3249 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__3250 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__3249.call(this,x);
case  2 :
return nth_child__3250.call(this,x,y);
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
var nth_of_type__3252 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__3253 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__3252.call(this,x);
case  2 :
return nth_of_type__3253.call(this,x,y);
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
var nth_last_child__3255 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__3256 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__3255.call(this,x);
case  2 :
return nth_last_child__3256.call(this,x,y);
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
var nth_last_of_type__3258 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__3259 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__3258.call(this,x);
case  2 :
return nth_last_of_type__3259.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
