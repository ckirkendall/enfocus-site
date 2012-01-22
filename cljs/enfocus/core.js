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
goog.require('goog.Timer');
goog.require('goog.style');
goog.require('goog.net.XhrIo');
goog.require('goog.fx');
enfocus.core.debug = true;
enfocus.core.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____3053 = enfocus.core.debug;

if(cljs.core.truth_(and__3546__auto____3053))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____3053;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){
return goog.Timer.callOnce.call(null,func,ttime);
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
{if(cljs.core.truth_((function (){var or__3548__auto____3055 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3548__auto____3055))
{return or__3548__auto____3055;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__385__auto____3060 = (function iter__3056(s__3057){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3057__3058 = s__3057;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3057__3058)))
{var x__3059 = cljs.core.first.call(null,s__3057__3058);

return cljs.core.cons.call(null,(nl[x__3059]),iter__3056.call(null,cljs.core.rest.call(null,s__3057__3058)));
} else
{return null;
}
break;
}
})));
});

return iter__385__auto____3060.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__3054_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__3054_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__3054_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__3054_SHARP_);
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
var G__3061__3062 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

if(cljs.core.truth_(G__3061__3062))
{var G__3064__3066 = cljs.core.first.call(null,G__3061__3062);
var vec__3065__3067 = G__3064__3066;
var attr__3068 = cljs.core.nth.call(null,vec__3065__3067,0,null);
var value__3069 = cljs.core.nth.call(null,vec__3065__3067,1,null);
var G__3061__3070 = G__3061__3062;

var G__3064__3071 = G__3064__3066;
var G__3061__3072 = G__3061__3070;

while(true){
var vec__3073__3074 = G__3064__3071;
var attr__3075 = cljs.core.nth.call(null,vec__3073__3074,0,null);
var value__3076 = cljs.core.nth.call(null,vec__3073__3074,1,null);
var G__3061__3077 = G__3061__3072;

goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__3075),value__3076);
var temp__3698__auto____3078 = cljs.core.next.call(null,G__3061__3077);

if(cljs.core.truth_(temp__3698__auto____3078))
{var G__3061__3079 = temp__3698__auto____3078;

{
var G__3080 = cljs.core.first.call(null,G__3061__3079);
var G__3081 = G__3061__3079;
G__3064__3071 = G__3080;
G__3061__3072 = G__3081;
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
var G__3082__3083 = cljs.core.seq.call(null,values);

if(cljs.core.truth_(G__3082__3083))
{var attr__3084 = cljs.core.first.call(null,G__3082__3083);
var G__3082__3085 = G__3082__3083;

while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__3084),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__3084));
}
var temp__3698__auto____3086 = cljs.core.next.call(null,G__3082__3085);

if(cljs.core.truth_(temp__3698__auto____3086))
{var G__3082__3087 = temp__3698__auto____3086;

{
var G__3088 = cljs.core.first.call(null,G__3082__3087);
var G__3089 = G__3082__3087;
attr__3084 = G__3088;
G__3082__3085 = G__3089;
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
var G__3090 = parent;
var G__3091 = child.parentNode;
parent = G__3090;
child = G__3091;
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
var re__3092 = e.relatedTarget;
var this$__3093 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____3094 = cljs.core.not.call(null,(re__3092 === this$__3093));

if(cljs.core.truth_(and__3546__auto____3094))
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this$__3093,re__3092));
} else
{return and__3546__auto____3094;
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
var add_map_attrs__3114 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,ats)))
{var G__3095__3096 = cljs.core.seq.call(null,ats);

if(cljs.core.truth_(G__3095__3096))
{var G__3098__3100 = cljs.core.first.call(null,G__3095__3096);
var vec__3099__3101 = G__3098__3100;
var k__3102 = cljs.core.nth.call(null,vec__3099__3101,0,null);
var v__3103 = cljs.core.nth.call(null,vec__3099__3101,1,null);
var G__3095__3104 = G__3095__3096;

var G__3098__3105 = G__3098__3100;
var G__3095__3106 = G__3095__3104;

while(true){
var vec__3107__3108 = G__3098__3105;
var k__3109 = cljs.core.nth.call(null,vec__3107__3108,0,null);
var v__3110 = cljs.core.nth.call(null,vec__3107__3108,1,null);
var G__3095__3111 = G__3095__3106;

add_map_attrs.call(null,elem,k__3109,v__3110);
var temp__3698__auto____3112 = cljs.core.next.call(null,G__3095__3111);

if(cljs.core.truth_(temp__3698__auto____3112))
{var G__3095__3113 = temp__3698__auto____3112;

{
var G__3117 = cljs.core.first.call(null,G__3095__3113);
var G__3118 = G__3095__3113;
G__3098__3105 = G__3117;
G__3095__3106 = G__3118;
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
var add_map_attrs__3115 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case  2 :
return add_map_attrs__3114.call(this,elem,k);
case  3 :
return add_map_attrs__3115.call(this,elem,k,v);
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
var div__3119 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__3119.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__3119);
return div__3119;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__3120 = div.childNodes;
var frag__3121 = document.createDocumentFragment();

goog.dom.append.call(null,frag__3121,child__3120);
goog.dom.removeNode.call(null,div);
return frag__3121;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__3123 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__3124 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__3124),text.replace(re__3123,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__3124,c,d);
}))]);
});
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__3125 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__3126 = enfocus.core.nodes__GT_coll.call(null,id_nodes__3125);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3122_SHARP_){
var id__3127 = p1__3122_SHARP_.getAttribute("id");
var rid__3128 = id__3127.replace(sym,"");

return p1__3122_SHARP_.setAttribute("id",rid__3128);
}),nod_col__3126));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__3129 = (new goog.net.XhrIo());
var callback__3139 = (function (req){
var text__3131 = req.getResponseText();
var vec__3130__3132 = enfocus.core.replace_ids.call(null,text__3131);
var sym__3133 = cljs.core.nth.call(null,vec__3130__3132,0,null);
var txt__3134 = cljs.core.nth.call(null,vec__3130__3132,1,null);
var data__3135 = goog.dom.htmlToDocumentFragment.call(null,txt__3134);
var body__3136 = cljs.core.first.call(null,enfocus.core.nodes__GT_coll.call(null,enfocus.core.css_select.call(null,data__3135,"body")));

if(cljs.core.truth_(body__3136))
{var frag__3137 = document.createDocumentFragment();
var childs__3138 = frag__3137.childNodes;

goog.dom.append.call(null,frag__3137,childs__3138);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__3133,frag__3137]));
} else
{return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__3133,data__3135]));
}
});

goog.events.listen.call(null,req__3129,goog.net.EventType.COMPLETE,(function (){
callback__3139.call(null,req__3129);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__3129.send(uri,"GET");
} else
{return null;
}
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__3140 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__3140))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__3140),cljs.core.second.call(null,nod__3140).cloneNode(true)]);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__3141 = enfocus.core.create_sel_str.call(null,sel);
var cache__3142 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__3141)));

if(cljs.core.truth_(cache__3142))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__3142),cljs.core.second.call(null,cache__3142).cloneNode(true)]);
} else
{var vec__3143__3144 = enfocus.core.get_cached_dom.call(null,uri);
var sym__3145 = cljs.core.nth.call(null,vec__3143__3144,0,null);
var tdom__3146 = cljs.core.nth.call(null,vec__3143__3144,1,null);
var dom__3147 = enfocus.core.create_hidden_dom.call(null,tdom__3146);
var tsnip__3148 = enfocus.core.css_select.call(null,dom__3147,sel_str__3141);
var snip__3149 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__3148))?cljs.core.first.call(null,tsnip__3148):tsnip__3148);

enfocus.core.remove_node_return_child.call(null,dom__3147);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__3141),cljs.core.Vector.fromArray([sym__3145,snip__3149]));
return cljs.core.Vector.fromArray([sym__3145,snip__3149]);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){
return (function trans(pnodes){
var pnod_col__3150 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result__3151 = cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__3150));

if(cljs.core.truth_((cljs.core.count.call(null,result__3151) <= 1)))
{return cljs.core.first.call(null,result__3151);
} else
{return result__3151;
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
var trans__3154 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__3155 = (function (pnodes,chain){
var pnod_col__3153 = enfocus.core.nodes__GT_coll.call(null,pnodes);

cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__3153));
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__3154.call(this,pnodes);
case  2 :
return trans__3155.call(this,pnodes,chain);
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
var trans__3161 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__3162 = (function (pnodes,chain){
var pnod_col__3158 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__3159 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__3158));
var partial_cback__3160 = (function (){
cljs.core.swap_BANG_.call(null,cnt__3159,cljs.core.dec);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__3159))))
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

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3152_SHARP_){
return func.call(null,p1__3152_SHARP_,partial_cback__3160);
}),pnod_col__3158));
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__3161.call(this,pnodes);
case  2 :
return trans__3162.call(this,pnodes,chain);
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
var fnodes__3164 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__3165 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3157_SHARP_){
return goog.dom.appendChild.call(null,frag__3165,p1__3157_SHARP_.cloneNode(true));
}),fnodes__3164));
return func.call(null,pnod,frag__3165);
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
en_content.cljs$lang$applyTo = (function (arglist__3166){
var values = cljs.core.seq( arglist__3166 );;
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
var frag__3167 = goog.dom.htmlToDocumentFragment.call(null,txt);

goog.dom.removeChildren.call(null,pnod);
return goog.dom.append.call(null,pnod,frag__3167);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var at_lst__3169 = cljs.core.partition.call(null,2,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__3170){
var vec__3171__3172 = p__3170;
var a__3173 = cljs.core.nth.call(null,vec__3171__3172,0,null);
var v__3174 = cljs.core.nth.call(null,vec__3171__3172,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__3173),v__3174);
}),at_lst__3169));
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
en_set_attr.cljs$lang$applyTo = (function (arglist__3175){
var values = cljs.core.seq( arglist__3175 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3168_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__3168_SHARP_));
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
en_remove_attr.cljs$lang$applyTo = (function (arglist__3176){
var values = cljs.core.seq( arglist__3176 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3177_SHARP_){
return goog.dom.classes.add.call(null,pnod,p1__3177_SHARP_);
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
en_add_class.cljs$lang$applyTo = (function (arglist__3179){
var values = cljs.core.seq( arglist__3179 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3178_SHARP_){
return goog.dom.classes.remove.call(null,pnod,p1__3178_SHARP_);
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
en_remove_class.cljs$lang$applyTo = (function (arglist__3181){
var values = cljs.core.seq( arglist__3181 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3180_SHARP_){
return p1__3180_SHARP_.call(null,pnod);
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
en_do__GT_.cljs$lang$applyTo = (function (arglist__3182){
var forms = cljs.core.seq( arglist__3182 );;
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
en_append.cljs$lang$applyTo = (function (arglist__3183){
var values = cljs.core.seq( arglist__3183 );;
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
var nod__3184 = pnod.firstChild;

return pnod.insertBefore(frag,nod__3184);
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
en_prepend.cljs$lang$applyTo = (function (arglist__3185){
var values = cljs.core.seq( arglist__3185 );;
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
en_before.cljs$lang$applyTo = (function (arglist__3186){
var values = cljs.core.seq( arglist__3186 );;
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
en_after.cljs$lang$applyTo = (function (arglist__3187){
var values = cljs.core.seq( arglist__3187 );;
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
en_substitute.cljs$lang$applyTo = (function (arglist__3188){
var values = cljs.core.seq( arglist__3188 );;
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
en_remove_node.cljs$lang$applyTo = (function (arglist__3189){
var values = cljs.core.seq( arglist__3189 );;
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
var elem__3190 = goog.dom.createElement.call(null,cljs.core.name.call(null,elm));

enfocus.core.add_map_attrs.call(null,elem__3190,mattr);
enfocus.core.en_content.call(null,pnod.cloneNode(true)).call(null,elem__3190);
elem__3190;
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__3190),enfocus.core.en_remove_node.call(null)).call(null,pnod);
return pnod;
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__3191 = document.createDocumentFragment();

enfocus.core.en_append.call(null,pnod.childNodes).call(null,frag__3191);
frag__3191;
return goog.dom.replaceNode.call(null,frag__3191,pnod);
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
en_set_style.cljs$lang$applyTo = (function (arglist__3192){
var values = cljs.core.seq( arglist__3192 );;
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
en_remove_style.cljs$lang$applyTo = (function (arglist__3193){
var values = cljs.core.seq( arglist__3193 );;
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
enfocus.core.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){
var obj__3194 = (new Object());

obj__3194.listen = (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback__3195 = enfocus.core.mouse_enter_leave.call(null,func);

callback__3195.listen = func;
callback__3195.scope = opt_scope;
if(cljs.core.truth_(enfocus.core.op_handler))
{return opt_handler.listen(elm,cljs.core.name.call(null,event),callback__3195);
} else
{return goog.events.listen.call(null,elm,cljs.core.name.call(null,event),callback__3195);
}
});
obj__3194.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners__3196 = goog.events.getListeners.call(null,elm,cljs.core.name.call(null,event),false);

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__3197 = obj.listener;

if(cljs.core.truth_((function (){var and__3546__auto____3199 = (function (){var or__3548__auto____3198 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____3198))
{return or__3548__auto____3198;
} else
{return cljs.core._EQ_.call(null,listener__3197.listen,func);
}
})();

if(cljs.core.truth_(and__3546__auto____3199))
{var or__3548__auto____3200 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____3200))
{return or__3548__auto____3200;
} else
{return cljs.core._EQ_.call(null,listener__3197.scope,opt_scope);
}
} else
{return and__3546__auto____3199;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener__3197);
} else
{return goog.events.unlisten.call(null,elm,cljs.core.name.call(null,event),listener__3197);
}
} else
{return null;
}
}),listeners__3196));
});
return obj__3194;
});
enfocus.core.wrapper_register = cljs.core.ObjMap.fromObject(["﷐'mouseenter","﷐'mouseleave"],{"﷐'mouseenter":enfocus.core.gen_enter_leave_wrapper.call(null,"﷐'mouseover"),"﷐'mouseleave":enfocus.core.gen_enter_leave_wrapper.call(null,"﷐'mouseout")});
/**
* adding an event to the selected nodes
*/
enfocus.core.en_listen = (function en_listen(event,func){
var wrapper__3201 = enfocus.core.wrapper_register.call(null,event);

return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_((function (){var and__3546__auto____3202 = cljs.core._EQ_.call(null,"﷐'resize",event);

if(cljs.core.truth_(and__3546__auto____3202))
{return (window === pnod);
} else
{return and__3546__auto____3202;
}
})()))
{return goog.events.listen.call(null,enfocus.core.get_vp_monitor.call(null),"resize",func);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__3201)))
{return goog.events.listen.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.listenWithWrapper.call(null,pnod,wrapper__3201,func);
}
}
}));
});
/**
* removing a specific event from the selected nodes
*/
enfocus.core.en_unlisten = (function en_unlisten(event,func){
var wrapper__3205 = enfocus.core.wrapper_register.call(null,event);

return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__3205)))
{return goog.events.unlisten.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.unlistenWithWrapper.call(null,pnod,wrapper__3205,func);
}
}));
});
/**
* adding an event to the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_remove_listeners = (function() { 
var en_remove_listeners__delegate = function (event_list){
var get_name__3206 = (function (p1__3203_SHARP_){
return cljs.core.name.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,p1__3203_SHARP_,"﷐'mouseenter"))?"﷐'mouseover":(cljs.core.truth_(cljs.core._EQ_.call(null,p1__3203_SHARP_,"﷐'mouseleave"))?"﷐'mouseout":(cljs.core.truth_("﷐'else")?p1__3203_SHARP_:null))));
});

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3204_SHARP_){
return goog.events.removeAll.call(null,pnod,get_name__3206.call(null,p1__3204_SHARP_));
}),event_list));
}));
};
var en_remove_listeners = function (var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_listeners__delegate.call(this, event_list);
};
en_remove_listeners.cljs$lang$maxFixedArity = 0;
en_remove_listeners.cljs$lang$applyTo = (function (arglist__3207){
var event_list = cljs.core.seq( arglist__3207 );;
return en_remove_listeners__delegate.call(this, event_list);
});
return en_remove_listeners;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_out = (function en_fade_out(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__3208 = (new goog.fx.dom.FadeOut(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__3208,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__3208.play();
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__3209 = (new goog.fx.dom.FadeIn(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__3209,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__3209.play();
}),callback);
});
/**
* resizes the selected elements to a width and height in px optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var csize__3210 = goog.style.getSize.call(null,pnod);
var start__3211 = cljs.core.array.call(null,csize__3210.width,csize__3210.height);
var wth__3212 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?csize__3210.width:wth);
var hgt__3213 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?csize__3210.height:hgt);
var end__3214 = cljs.core.array.call(null,wth__3212,hgt__3213);
var anim__3215 = (new goog.fx.dom.Resize(pnod,start__3211,end__3214,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__3215,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__3215.play();
}),callback);
});
/**
* moves the selected elements to a x and y in px optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var cpos__3216 = goog.style.getPosition.call(null,pnod);
var start__3217 = cljs.core.array.call(null,cpos__3216.x,cpos__3216.y);
var xpos__3218 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx"))?cpos__3216.x:xpos);
var ypos__3219 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury"))?cpos__3216.y:ypos);
var end__3220 = cljs.core.array.call(null,xpos__3218,ypos__3219);
var anim__3221 = (new goog.fx.dom.Slide(pnod,start__3217,end__3220,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__3221,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__3221.play();
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
var filt__3225 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__3226 = (function (pnodes,chain){
var pnod_col__3222 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest__3223 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,tst))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res__3224 = cljs.core.filter.call(null,ttest__3223,pnod_col__3222);

enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,res__3224));
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,chain)))
{return trans.call(null,res__3224);
} else
{return trans.call(null,res__3224,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case  1 :
return filt__3225.call(this,pnodes);
case  2 :
return filt__3226.call(this,pnodes,chain);
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
var create_sel_str__3229 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__3230 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__3228_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__3228_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__3228_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__3228_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__3228_SHARP_).replace("#",cljs.core.str.call(null,"#",id_mask_sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__3228_SHARP_)))
{return create_sel_str.call(null,p1__3228_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__3228_SHARP_)))
{return p1__3228_SHARP_.replace("#",cljs.core.str.call(null,"#",id_mask_sym));
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
return create_sel_str__3229.call(this,id_mask_sym);
case  2 :
return create_sel_str__3230.call(this,id_mask_sym,css_sel);
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
var css_select__3234 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__3235 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3236 = (function (id_mask_sym,dom_node,css_sel){
var sel__3232 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)," :",":"));
var ret__3233 = goog.dom.query.call(null,sel__3232,dom_node);

return ret__3233;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case  1 :
return css_select__3234.call(this,id_mask_sym);
case  2 :
return css_select__3235.call(this,id_mask_sym,dom_node);
case  3 :
return css_select__3236.call(this,id_mask_sym,dom_node,css_sel);
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__3238_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__3238_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__3239){
var kys = cljs.core.seq( arglist__3239 );;
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
var attr_EQ___3240 = (function (){
return "";
});
var attr_EQ___3241 = (function() { 
var G__3243__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__3243 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3243__delegate.call(this, ky, txt, forms);
};
G__3243.cljs$lang$maxFixedArity = 2;
G__3243.cljs$lang$applyTo = (function (arglist__3244){
var ky = cljs.core.first(arglist__3244);
var txt = cljs.core.first(cljs.core.next(arglist__3244));
var forms = cljs.core.rest(cljs.core.next(arglist__3244));
return G__3243__delegate.call(this, ky, txt, forms);
});
return G__3243;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___3240.call(this);
default:
return attr_EQ___3241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___3241.cljs$lang$applyTo;
return attr_EQ_;
})()
;
/**
* Matches any E element that is the n-th child of its parent:
* css -> E:nth-child(x) or E:nth-child(xn+y)
*/
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__3245 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__3246 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__3245.call(this,x);
case  2 :
return nth_child__3246.call(this,x,y);
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
var nth_of_type__3248 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__3249 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__3248.call(this,x);
case  2 :
return nth_of_type__3249.call(this,x,y);
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
var nth_last_child__3251 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__3252 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__3251.call(this,x);
case  2 :
return nth_last_child__3252.call(this,x,y);
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
var nth_last_of_type__3254 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__3255 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__3254.call(this,x);
case  2 :
return nth_last_of_type__3255.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
