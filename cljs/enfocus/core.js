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
if(cljs.core.truth_((function (){var and__3546__auto____4408 = enfocus.core.debug;

if(cljs.core.truth_(and__3546__auto____4408))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____4408;
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
{if(cljs.core.truth_((function (){var or__3548__auto____4410 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3548__auto____4410))
{return or__3548__auto____4410;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__385__auto____4415 = (function iter__4411(s__4412){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4412__4413 = s__4412;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4412__4413)))
{var x__4414 = cljs.core.first.call(null,s__4412__4413);

return cljs.core.cons.call(null,(nl[x__4414]),iter__4411.call(null,cljs.core.rest.call(null,s__4412__4413)));
} else
{return null;
}
break;
}
})));
});

return iter__385__auto____4415.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__4409_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__4409_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__4409_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__4409_SHARP_);
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
var G__4416__4417 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

if(cljs.core.truth_(G__4416__4417))
{var G__4419__4421 = cljs.core.first.call(null,G__4416__4417);
var vec__4420__4422 = G__4419__4421;
var attr__4423 = cljs.core.nth.call(null,vec__4420__4422,0,null);
var value__4424 = cljs.core.nth.call(null,vec__4420__4422,1,null);
var G__4416__4425 = G__4416__4417;

var G__4419__4426 = G__4419__4421;
var G__4416__4427 = G__4416__4425;

while(true){
var vec__4428__4429 = G__4419__4426;
var attr__4430 = cljs.core.nth.call(null,vec__4428__4429,0,null);
var value__4431 = cljs.core.nth.call(null,vec__4428__4429,1,null);
var G__4416__4432 = G__4416__4427;

goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__4430),value__4431);
var temp__3698__auto____4433 = cljs.core.next.call(null,G__4416__4432);

if(cljs.core.truth_(temp__3698__auto____4433))
{var G__4416__4434 = temp__3698__auto____4433;

{
var G__4435 = cljs.core.first.call(null,G__4416__4434);
var G__4436 = G__4416__4434;
G__4419__4426 = G__4435;
G__4416__4427 = G__4436;
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
var G__4437__4438 = cljs.core.seq.call(null,values);

if(cljs.core.truth_(G__4437__4438))
{var attr__4439 = cljs.core.first.call(null,G__4437__4438);
var G__4437__4440 = G__4437__4438;

while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__4439),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__4439));
}
var temp__3698__auto____4441 = cljs.core.next.call(null,G__4437__4440);

if(cljs.core.truth_(temp__3698__auto____4441))
{var G__4437__4442 = temp__3698__auto____4441;

{
var G__4443 = cljs.core.first.call(null,G__4437__4442);
var G__4444 = G__4437__4442;
attr__4439 = G__4443;
G__4437__4440 = G__4444;
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
var G__4445 = parent;
var G__4446 = child.parentNode;
parent = G__4445;
child = G__4446;
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
var re__4447 = e.relatedTarget;
var this$__4448 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____4449 = cljs.core.not.call(null,(re__4447 === this$__4448));

if(cljs.core.truth_(and__3546__auto____4449))
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this$__4448,re__4447));
} else
{return and__3546__auto____4449;
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
var add_map_attrs__4469 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,ats)))
{var G__4450__4451 = cljs.core.seq.call(null,ats);

if(cljs.core.truth_(G__4450__4451))
{var G__4453__4455 = cljs.core.first.call(null,G__4450__4451);
var vec__4454__4456 = G__4453__4455;
var k__4457 = cljs.core.nth.call(null,vec__4454__4456,0,null);
var v__4458 = cljs.core.nth.call(null,vec__4454__4456,1,null);
var G__4450__4459 = G__4450__4451;

var G__4453__4460 = G__4453__4455;
var G__4450__4461 = G__4450__4459;

while(true){
var vec__4462__4463 = G__4453__4460;
var k__4464 = cljs.core.nth.call(null,vec__4462__4463,0,null);
var v__4465 = cljs.core.nth.call(null,vec__4462__4463,1,null);
var G__4450__4466 = G__4450__4461;

add_map_attrs.call(null,elem,k__4464,v__4465);
var temp__3698__auto____4467 = cljs.core.next.call(null,G__4450__4466);

if(cljs.core.truth_(temp__3698__auto____4467))
{var G__4450__4468 = temp__3698__auto____4467;

{
var G__4472 = cljs.core.first.call(null,G__4450__4468);
var G__4473 = G__4450__4468;
G__4453__4460 = G__4472;
G__4450__4461 = G__4473;
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
var add_map_attrs__4470 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case  2 :
return add_map_attrs__4469.call(this,elem,k);
case  3 :
return add_map_attrs__4470.call(this,elem,k,v);
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
var div__4474 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__4474.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__4474);
return div__4474;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__4475 = div.childNodes;
var frag__4476 = document.createDocumentFragment();

goog.dom.append.call(null,frag__4476,child__4475);
goog.dom.removeNode.call(null,div);
return frag__4476;
});
/**
* replaces all the ids in a string html fragement/template
* with a generated symbol appended on to a existing id
* this is done to make sure we don't have id colisions
* during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__4478 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__4479 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__4479),text.replace(re__4478,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__4479,c,d);
}))]);
});
/**
* before adding the transformed dom back into the live dom we
* reset the ids back to their original values
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__4480 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__4481 = enfocus.core.nodes__GT_coll.call(null,id_nodes__4480);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4477_SHARP_){
var id__4482 = p1__4477_SHARP_.getAttribute("id");
var rid__4483 = id__4482.replace(sym,"");

return p1__4477_SHARP_.setAttribute("id",rid__4483);
}),nod_col__4481));
});
/**
* loads a remote file into the cache, before adding to the
* cache we replace the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__4484 = (new goog.net.XhrIo());
var callback__4494 = (function (req){
var text__4486 = req.getResponseText();
var vec__4485__4487 = enfocus.core.replace_ids.call(null,text__4486);
var sym__4488 = cljs.core.nth.call(null,vec__4485__4487,0,null);
var txt__4489 = cljs.core.nth.call(null,vec__4485__4487,1,null);
var data__4490 = goog.dom.htmlToDocumentFragment.call(null,txt__4489);
var body__4491 = cljs.core.first.call(null,enfocus.core.nodes__GT_coll.call(null,enfocus.core.css_select.call(null,data__4490,"body")));

if(cljs.core.truth_(body__4491))
{var frag__4492 = document.createDocumentFragment();
var childs__4493 = frag__4492.childNodes;

goog.dom.append.call(null,frag__4492,childs__4493);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__4488,frag__4492]));
} else
{return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__4488,data__4490]));
}
});

goog.events.listen.call(null,req__4484,goog.net.EventType.COMPLETE,(function (){
callback__4494.call(null,req__4484);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__4484.send(uri,"GET");
} else
{return null;
}
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__4495 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__4495))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__4495),cljs.core.second.call(null,nod__4495).cloneNode(true)]);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the
* cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__4496 = enfocus.core.create_sel_str.call(null,sel);
var cache__4497 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__4496)));

if(cljs.core.truth_(cache__4497))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__4497),cljs.core.second.call(null,cache__4497).cloneNode(true)]);
} else
{var vec__4498__4499 = enfocus.core.get_cached_dom.call(null,uri);
var sym__4500 = cljs.core.nth.call(null,vec__4498__4499,0,null);
var tdom__4501 = cljs.core.nth.call(null,vec__4498__4499,1,null);
var dom__4502 = enfocus.core.create_hidden_dom.call(null,tdom__4501);
var tsnip__4503 = enfocus.core.css_select.call(null,dom__4502,sel_str__4496);
var snip__4504 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__4503))?cljs.core.first.call(null,tsnip__4503):tsnip__4503);

enfocus.core.remove_node_return_child.call(null,dom__4502);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__4496),cljs.core.Vector.fromArray([sym__4500,snip__4504]));
return cljs.core.Vector.fromArray([sym__4500,snip__4504]);
}
});
/**
* takes a function an returns a function that
* applys a given function on all nodes returned
* by a given selector
*/
enfocus.core.multi_node_proc = (function() {
var multi_node_proc = null;
var multi_node_proc__4507 = (function (func){
return multi_node_proc.call(null,func,null);
});
var multi_node_proc__4508 = (function (func,callback1){
return (function() {
var trans = null;
var trans__4510 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__4511 = (function (pnodes,callback2){
var pnod_col__4505 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__4506 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__4505));

return cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__4505));
});
trans = function(pnodes,callback2){
switch(arguments.length){
case  1 :
return trans__4510.call(this,pnodes);
case  2 :
return trans__4511.call(this,pnodes,callback2);
}
throw('Invalid arity: ' + arguments.length);
};
return trans;
})()
});
multi_node_proc = function(func,callback1){
switch(arguments.length){
case  1 :
return multi_node_proc__4507.call(this,func);
case  2 :
return multi_node_proc__4508.call(this,func,callback1);
}
throw('Invalid arity: ' + arguments.length);
};
return multi_node_proc;
})()
;
/**
* takes a function an returns a function that
* applys a given function on all nodes returned
* by a given selector
*/
enfocus.core.chainable_standard = (function chainable_standard(func){
return (function() {
var trans = null;
var trans__4515 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__4516 = (function (pnodes,chain){
var pnod_col__4514 = enfocus.core.nodes__GT_coll.call(null,pnodes);

cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__4514));
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__4515.call(this,pnodes);
case  2 :
return trans__4516.call(this,pnodes,chain);
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
var trans__4522 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__4523 = (function (pnodes,chain){
var pnod_col__4519 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__4520 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__4519));
var partial_cback__4521 = (function (){
cljs.core.swap_BANG_.call(null,cnt__4520,cljs.core.dec);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__4520))))
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

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4513_SHARP_){
return func.call(null,p1__4513_SHARP_,partial_cback__4521);
}),pnod_col__4519));
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__4522.call(this,pnodes);
case  2 :
return trans__4523.call(this,pnodes,chain);
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
var fnodes__4525 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__4526 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4518_SHARP_){
return goog.dom.appendChild.call(null,frag__4526,p1__4518_SHARP_.cloneNode(true));
}),fnodes__4525));
return func.call(null,pnod,frag__4526);
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
en_content.cljs$lang$applyTo = (function (arglist__4527){
var values = cljs.core.seq( arglist__4527 );;
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
var frag__4528 = goog.dom.htmlToDocumentFragment.call(null,txt);

goog.dom.removeChildren.call(null,pnod);
return goog.dom.append.call(null,pnod,frag__4528);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var at_lst__4530 = cljs.core.partition.call(null,2,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__4531){
var vec__4532__4533 = p__4531;
var a__4534 = cljs.core.nth.call(null,vec__4532__4533,0,null);
var v__4535 = cljs.core.nth.call(null,vec__4532__4533,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__4534),v__4535);
}),at_lst__4530));
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
en_set_attr.cljs$lang$applyTo = (function (arglist__4536){
var values = cljs.core.seq( arglist__4536 );;
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
return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4529_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__4529_SHARP_));
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
en_remove_attr.cljs$lang$applyTo = (function (arglist__4537){
var values = cljs.core.seq( arglist__4537 );;
return en_remove_attr__delegate.call(this, values);
});
return en_remove_attr;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
var regex__4539 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",cls,"(\\s|$)")));
var cur_cls__4540 = el.className;

return cur_cls__4540.match(regex__4539);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.en_add_class = (function() { 
var en_add_class__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var cur_cls__4542 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4538_SHARP_){
if(cljs.core.truth_(cljs.core.not.call(null,enfocus.core.has_class.call(null,pnod,p1__4538_SHARP_))))
{return pnod.className = cljs.core.str.call(null,cur_cls__4542," ",p1__4538_SHARP_);
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
en_add_class.cljs$lang$applyTo = (function (arglist__4543){
var values = cljs.core.seq( arglist__4543 );;
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
var cur__4545 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4541_SHARP_){
if(cljs.core.truth_(enfocus.core.has_class.call(null,pnod,p1__4541_SHARP_)))
{var regex__4546 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",p1__4541_SHARP_,"(\\s|$)")));

return pnod.className = cur__4545.replace(regex__4546," ");
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
en_remove_class.cljs$lang$applyTo = (function (arglist__4547){
var values = cljs.core.seq( arglist__4547 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4544_SHARP_){
return p1__4544_SHARP_.call(null,pnod);
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
en_do__GT_.cljs$lang$applyTo = (function (arglist__4548){
var forms = cljs.core.seq( arglist__4548 );;
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
en_append.cljs$lang$applyTo = (function (arglist__4549){
var values = cljs.core.seq( arglist__4549 );;
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
var nod__4550 = pnod.firstChild;

return pnod.insertBefore(frag,nod__4550);
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
en_prepend.cljs$lang$applyTo = (function (arglist__4551){
var values = cljs.core.seq( arglist__4551 );;
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
en_before.cljs$lang$applyTo = (function (arglist__4552){
var values = cljs.core.seq( arglist__4552 );;
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
en_after.cljs$lang$applyTo = (function (arglist__4553){
var values = cljs.core.seq( arglist__4553 );;
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
en_substitute.cljs$lang$applyTo = (function (arglist__4554){
var values = cljs.core.seq( arglist__4554 );;
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
en_remove_node.cljs$lang$applyTo = (function (arglist__4555){
var values = cljs.core.seq( arglist__4555 );;
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
var elem__4556 = goog.dom.createElement.call(null,cljs.core.name.call(null,elm));

enfocus.core.add_map_attrs.call(null,elem__4556,mattr);
enfocus.core.en_content.call(null,pnod.cloneNode(true)).call(null,elem__4556);
elem__4556;
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__4556),enfocus.core.en_remove_node.call(null)).call(null,pnod);
return pnod;
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__4557 = document.createDocumentFragment();

enfocus.core.en_append.call(null,pnod.childNodes).call(null,frag__4557);
frag__4557;
enfocus.core.log_debug.call(null,frag__4557);
enfocus.core.log_debug.call(null,pnod);
enfocus.core.log_debug.call(null,pnod.childNodes);
return goog.dom.replaceNode.call(null,frag__4557,pnod);
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
en_set_style.cljs$lang$applyTo = (function (arglist__4558){
var values = cljs.core.seq( arglist__4558 );;
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
en_remove_style.cljs$lang$applyTo = (function (arglist__4559){
var values = cljs.core.seq( arglist__4559 );;
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
if(cljs.core.truth_((function (){var and__3546__auto____4562 = cljs.core._EQ_.call(null,"﷐'resize",event);

if(cljs.core.truth_(and__3546__auto____4562))
{return (window === pnod);
} else
{return and__3546__auto____4562;
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
var get_name__4563 = (function (p1__4560_SHARP_){
return cljs.core.name.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,p1__4560_SHARP_,"﷐'mouseenter"))?"﷐'mouseover":(cljs.core.truth_(cljs.core._EQ_.call(null,p1__4560_SHARP_,"﷐'mouseleave"))?"﷐'mouseout":(cljs.core.truth_("﷐'else")?p1__4560_SHARP_:null))));
});

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4561_SHARP_){
return goog.events.removeAll.call(null,pnod,get_name__4563.call(null,p1__4561_SHARP_));
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
en_remove_listener.cljs$lang$applyTo = (function (arglist__4564){
var event_list = cljs.core.seq( arglist__4564 );;
return en_remove_listener__delegate.call(this, event_list);
});
return en_remove_listener;
})()
;
enfocus.core.start_effect = (function start_effect(pnod,etype){
enfocus.core.log_debug.call(null,cljs.core.str.call(null,"start-effect",pnod,":",etype));
var effs__4565 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);
var eff_id__4566 = cljs.core.gensym.call(null,"efid_");

if(cljs.core.truth_(effs__4565))
{cljs.core.swap_BANG_.call(null,effs__4565,cljs.core.conj,eff_id__4566);
return eff_id__4566;
} else
{(pnod[enfocus.core.get_eff_prop_name.call(null,etype)] = cljs.core.atom.call(null,cljs.core.set([eff_id__4566])));
return eff_id__4566;
}
});
enfocus.core.check_effect = (function check_effect(pnod,etype,sym){
var effs__4567 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);

if(cljs.core.truth_((function (){var and__3546__auto____4568 = effs__4567;

if(cljs.core.truth_(and__3546__auto____4568))
{return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,effs__4567),sym);
} else
{return and__3546__auto____4568;
}
})()))
{return true;
} else
{return false;
}
});
enfocus.core.finish_effect = (function finish_effect(pnod,etype,sym){
enfocus.core.log_debug.call(null,cljs.core.str.call(null,"finish-effect",pnod,":",etype,":",sym));
var effs__4570 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);

if(cljs.core.truth_(effs__4570))
{return cljs.core.swap_BANG_.call(null,effs__4570,cljs.core.disj,sym);
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4569_SHARP_){
return (pnod[enfocus.core.get_eff_prop_name.call(null,p1__4569_SHARP_)] = cljs.core.atom.call(null,cljs.core.set([])));
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
en_stop_effect.cljs$lang$applyTo = (function (arglist__4571){
var etypes = cljs.core.seq( arglist__4571 );;
return en_stop_effect__delegate.call(this, etypes);
});
return en_stop_effect;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_out = (function en_fade_out(ttime,step,callback){
var incr__4572 = (1 / (ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2591__auto__,pcallback__2592__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'fade-in").call(null,pnod__2591__auto__);
var start__2593__auto____4573 = enfocus.core.get_mills.call(null);
var eff_id__2594__auto____4574 = enfocus.core.start_effect.call(null,pnod__2591__auto__,"﷐'fade-out");
var eff__2595__auto____4581 = (function run__2596__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____4575 = enfocus.core.check_effect.call(null,pnod__2591__auto__,"﷐'fade-out",eff_id__2594__auto____4574);

if(cljs.core.truth_(and__3546__auto____4575))
{return cljs.core.not.call(null,(function (pnod,etime){
var op__4576 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(((op__4576 - incr__4572) <= 0)))
{goog.style.setOpacity.call(null,pnod,0);
return true;
} else
{return false;
}
}).call(null,pnod__2591__auto__,(enfocus.core.get_mills.call(null) - start__2593__auto____4573)));
} else
{return and__3546__auto____4575;
}
})()))
{(function (){var nods__2465__auto____4579 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var op__4578 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__4578)))
{return goog.style.setOpacity.call(null,pnod,(1 - incr__4572));
} else
{if(cljs.core.truth_((0 < op__4578)))
{return goog.style.setOpacity.call(null,pnod,(op__4578 - incr__4572));
} else
{return null;
}
}
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod4577){
return pnod4577;
}),nods__2465__auto____4579));
return (function (pnod){
var op__4580 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__4580)))
{return goog.style.setOpacity.call(null,pnod,(1 - incr__4572));
} else
{if(cljs.core.truth_((0 < op__4580)))
{return goog.style.setOpacity.call(null,pnod,(op__4580 - incr__4572));
} else
{return null;
}
}
});
})().call(null,pnod__2591__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2596__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2591__auto__,"﷐'fade-out",eff_id__2594__auto____4574);
return pcallback__2592__auto__.call(null);
}
});

return eff__2595__auto____4581.call(null,0);
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,step,callback){
var incr__4582 = (1 / (ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2591__auto__,pcallback__2592__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'fade-out").call(null,pnod__2591__auto__);
var start__2593__auto____4583 = enfocus.core.get_mills.call(null);
var eff_id__2594__auto____4584 = enfocus.core.start_effect.call(null,pnod__2591__auto__,"﷐'fade-in");
var eff__2595__auto____4591 = (function run__2596__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____4585 = enfocus.core.check_effect.call(null,pnod__2591__auto__,"﷐'fade-in",eff_id__2594__auto____4584);

if(cljs.core.truth_(and__3546__auto____4585))
{return cljs.core.not.call(null,(function (pnod,etime){
var op__4586 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(((op__4586 + incr__4582) >= 1)))
{goog.style.setOpacity.call(null,pnod,1);
return true;
} else
{return false;
}
}).call(null,pnod__2591__auto__,(enfocus.core.get_mills.call(null) - start__2593__auto____4583)));
} else
{return and__3546__auto____4585;
}
})()))
{(function (){var nods__2465__auto____4589 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var op__4588 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__4588)))
{return goog.style.setOpacity.call(null,pnod,incr__4582);
} else
{if(cljs.core.truth_((1 > op__4588)))
{return goog.style.setOpacity.call(null,pnod,(op__4588 + incr__4582));
} else
{return null;
}
}
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod4587){
return pnod4587;
}),nods__2465__auto____4589));
return (function (pnod){
var op__4590 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__4590)))
{return goog.style.setOpacity.call(null,pnod,incr__4582);
} else
{if(cljs.core.truth_((1 > op__4590)))
{return goog.style.setOpacity.call(null,pnod,(op__4590 + incr__4582));
} else
{return null;
}
}
});
})().call(null,pnod__2591__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2596__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2591__auto__,"﷐'fade-in",eff_id__2594__auto____4584);
return pcallback__2592__auto__.call(null);
}
});

return eff__2595__auto____4591.call(null,0);
}),callback);
});
/**
* resizes the selected elements to a width and height in px
* optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,step,callback){
var orig_sym__4592 = cljs.core.gensym.call(null,"orig-size");
var steps__4595 = (cljs.core.truth_((function (){var or__3548__auto____4593 = (ttime === 0);

if(cljs.core.truth_(or__3548__auto____4593))
{return or__3548__auto____4593;
} else
{var or__3548__auto____4594 = (step === 0);

if(cljs.core.truth_(or__3548__auto____4594))
{return or__3548__auto____4594;
} else
{return (ttime <= step);
}
}
})())?1:(ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2591__auto__,pcallback__2592__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'resize").call(null,pnod__2591__auto__);
var start__2593__auto____4596 = enfocus.core.get_mills.call(null);
var eff_id__2594__auto____4597 = enfocus.core.start_effect.call(null,pnod__2591__auto__,"﷐'resize");
var eff__2595__auto____4643 = (function run__2596__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____4598 = enfocus.core.check_effect.call(null,pnod__2591__auto__,"﷐'resize",eff_id__2594__auto____4597);

if(cljs.core.truth_(and__3546__auto____4598))
{return cljs.core.not.call(null,(function (pnod,etime){
var csize__4599 = goog.style.getSize.call(null,pnod);
var osize__4600 = (pnod[cljs.core.name.call(null,orig_sym__4592)]);
var osize__4601 = (cljs.core.truth_(osize__4600)?osize__4600:(pnod[cljs.core.name.call(null,orig_sym__4592)] = csize__4599));
var wth__4602 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__4601.width:wth);
var hgt__4603 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__4601.height:hgt);
var wstep__4604 = enfocus.core.pix_round.call(null,((wth__4602 - osize__4601.width) / steps__4595));
var hstep__4605 = enfocus.core.pix_round.call(null,((hgt__4603 - osize__4601.height) / steps__4595));

if(cljs.core.truth_((function (){var and__3546__auto____4610 = (function (){var or__3548__auto____4606 = (wstep__4604 === 0);

if(cljs.core.truth_(or__3548__auto____4606))
{return or__3548__auto____4606;
} else
{var or__3548__auto____4608 = (function (){var and__3546__auto____4607 = (wstep__4604 < 0);

if(cljs.core.truth_(and__3546__auto____4607))
{return (wth__4602 >= csize__4599.width);
} else
{return and__3546__auto____4607;
}
})();

if(cljs.core.truth_(or__3548__auto____4608))
{return or__3548__auto____4608;
} else
{var and__3546__auto____4609 = (wstep__4604 > 0);

if(cljs.core.truth_(and__3546__auto____4609))
{return (wth__4602 <= csize__4599.width);
} else
{return and__3546__auto____4609;
}
}
}
})();

if(cljs.core.truth_(and__3546__auto____4610))
{var or__3548__auto____4611 = (hstep__4605 === 0);

if(cljs.core.truth_(or__3548__auto____4611))
{return or__3548__auto____4611;
} else
{var or__3548__auto____4613 = (function (){var and__3546__auto____4612 = (hstep__4605 < 0);

if(cljs.core.truth_(and__3546__auto____4612))
{return (hgt__4603 >= csize__4599.height);
} else
{return and__3546__auto____4612;
}
})();

if(cljs.core.truth_(or__3548__auto____4613))
{return or__3548__auto____4613;
} else
{var and__3546__auto____4614 = (hstep__4605 > 0);

if(cljs.core.truth_(and__3546__auto____4614))
{return (hgt__4603 <= csize__4599.height);
} else
{return and__3546__auto____4614;
}
}
}
} else
{return and__3546__auto____4610;
}
})()))
{(pnod[cljs.core.name.call(null,orig_sym__4592)] = null);
goog.style.setWidth.call(null,pnod,wth__4602);
goog.style.setHeight.call(null,pnod,hgt__4603);
return true;
} else
{return false;
}
}).call(null,pnod__2591__auto__,(enfocus.core.get_mills.call(null) - start__2593__auto____4596)));
} else
{return and__3546__auto____4598;
}
})()))
{(function (){var nods__2465__auto____4629 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var csize__4616 = goog.style.getSize.call(null,pnod);
var osize__4617 = (pnod[cljs.core.name.call(null,orig_sym__4592)]);
var osize__4618 = (cljs.core.truth_(osize__4617)?osize__4617:(pnod[cljs.core.name.call(null,orig_sym__4592)] = csize__4616));
var wth__4619 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__4618.width:wth);
var hgt__4620 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__4618.height:hgt);
var wstep__4621 = enfocus.core.pix_round.call(null,((wth__4619 - osize__4618.width) / steps__4595));
var hstep__4622 = enfocus.core.pix_round.call(null,((hgt__4620 - osize__4618.height) / steps__4595));

if(cljs.core.truth_((function (){var or__3548__auto____4624 = (function (){var and__3546__auto____4623 = (wstep__4621 < 0);

if(cljs.core.truth_(and__3546__auto____4623))
{return (wth__4619 < csize__4616.width);
} else
{return and__3546__auto____4623;
}
})();

if(cljs.core.truth_(or__3548__auto____4624))
{return or__3548__auto____4624;
} else
{var and__3546__auto____4625 = (wstep__4621 > 0);

if(cljs.core.truth_(and__3546__auto____4625))
{return (wth__4619 > csize__4616.width);
} else
{return and__3546__auto____4625;
}
}
})()))
{goog.style.setWidth.call(null,pnod,(csize__4616.width + wstep__4621));
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____4627 = (function (){var and__3546__auto____4626 = (hstep__4622 < 0);

if(cljs.core.truth_(and__3546__auto____4626))
{return (hgt__4620 < csize__4616.height);
} else
{return and__3546__auto____4626;
}
})();

if(cljs.core.truth_(or__3548__auto____4627))
{return or__3548__auto____4627;
} else
{var and__3546__auto____4628 = (hstep__4622 > 0);

if(cljs.core.truth_(and__3546__auto____4628))
{return (hgt__4620 > csize__4616.height);
} else
{return and__3546__auto____4628;
}
}
})()))
{return goog.style.setHeight.call(null,pnod,(csize__4616.height + hstep__4622));
} else
{return null;
}
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod4615){
return pnod4615;
}),nods__2465__auto____4629));
return (function (pnod){
var csize__4630 = goog.style.getSize.call(null,pnod);
var osize__4631 = (pnod[cljs.core.name.call(null,orig_sym__4592)]);
var osize__4632 = (cljs.core.truth_(osize__4631)?osize__4631:(pnod[cljs.core.name.call(null,orig_sym__4592)] = csize__4630));
var wth__4633 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__4632.width:wth);
var hgt__4634 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__4632.height:hgt);
var wstep__4635 = enfocus.core.pix_round.call(null,((wth__4633 - osize__4632.width) / steps__4595));
var hstep__4636 = enfocus.core.pix_round.call(null,((hgt__4634 - osize__4632.height) / steps__4595));

if(cljs.core.truth_((function (){var or__3548__auto____4638 = (function (){var and__3546__auto____4637 = (wstep__4635 < 0);

if(cljs.core.truth_(and__3546__auto____4637))
{return (wth__4633 < csize__4630.width);
} else
{return and__3546__auto____4637;
}
})();

if(cljs.core.truth_(or__3548__auto____4638))
{return or__3548__auto____4638;
} else
{var and__3546__auto____4639 = (wstep__4635 > 0);

if(cljs.core.truth_(and__3546__auto____4639))
{return (wth__4633 > csize__4630.width);
} else
{return and__3546__auto____4639;
}
}
})()))
{goog.style.setWidth.call(null,pnod,(csize__4630.width + wstep__4635));
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____4641 = (function (){var and__3546__auto____4640 = (hstep__4636 < 0);

if(cljs.core.truth_(and__3546__auto____4640))
{return (hgt__4634 < csize__4630.height);
} else
{return and__3546__auto____4640;
}
})();

if(cljs.core.truth_(or__3548__auto____4641))
{return or__3548__auto____4641;
} else
{var and__3546__auto____4642 = (hstep__4636 > 0);

if(cljs.core.truth_(and__3546__auto____4642))
{return (hgt__4634 > csize__4630.height);
} else
{return and__3546__auto____4642;
}
}
})()))
{return goog.style.setHeight.call(null,pnod,(csize__4630.height + hstep__4636));
} else
{return null;
}
});
})().call(null,pnod__2591__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2596__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2591__auto__,"﷐'resize",eff_id__2594__auto____4597);
return pcallback__2592__auto__.call(null);
}
});

return eff__2595__auto____4643.call(null,0);
}),callback);
});
/**
* moves the selected elements to a x and y in px
* optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,step,callback){
var orig_sym__4645 = cljs.core.gensym.call(null,"orig-pos");
var steps__4648 = (cljs.core.truth_((function (){var or__3548__auto____4646 = (ttime === 0);

if(cljs.core.truth_(or__3548__auto____4646))
{return or__3548__auto____4646;
} else
{var or__3548__auto____4647 = (step === 0);

if(cljs.core.truth_(or__3548__auto____4647))
{return or__3548__auto____4647;
} else
{return (ttime <= step);
}
}
})())?1:(ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2591__auto__,pcallback__2592__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'move").call(null,pnod__2591__auto__);
var start__2593__auto____4649 = enfocus.core.get_mills.call(null);
var eff_id__2594__auto____4650 = enfocus.core.start_effect.call(null,pnod__2591__auto__,"﷐'move");
var eff__2595__auto____4699 = (function run__2596__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____4651 = enfocus.core.check_effect.call(null,pnod__2591__auto__,"﷐'move",eff_id__2594__auto____4650);

if(cljs.core.truth_(and__3546__auto____4651))
{return cljs.core.not.call(null,(function (pnod,etime){
var cpos__4652 = goog.style.getPosition.call(null,pnod);
var opos__4653 = (pnod[cljs.core.name.call(null,orig_sym__4645)]);
var opos__4654 = (cljs.core.truth_(opos__4653)?opos__4653:(pnod[cljs.core.name.call(null,orig_sym__4645)] = cpos__4652));
var xpos__4655 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__4654.x:xpos);
var ypos__4656 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__4654.y:ypos);
var xstep__4657 = enfocus.core.pix_round.call(null,((xpos__4655 - opos__4654.x) / steps__4648));
var ystep__4658 = enfocus.core.pix_round.call(null,((ypos__4656 - opos__4654.y) / steps__4648));
var clone__4659 = cpos__4652.clone;

if(cljs.core.truth_((function (){var and__3546__auto____4664 = (function (){var or__3548__auto____4660 = (xstep__4657 === 0);

if(cljs.core.truth_(or__3548__auto____4660))
{return or__3548__auto____4660;
} else
{var or__3548__auto____4662 = (function (){var and__3546__auto____4661 = (xstep__4657 < 0);

if(cljs.core.truth_(and__3546__auto____4661))
{return (xpos__4655 >= cpos__4652.x);
} else
{return and__3546__auto____4661;
}
})();

if(cljs.core.truth_(or__3548__auto____4662))
{return or__3548__auto____4662;
} else
{var and__3546__auto____4663 = (xstep__4657 > 0);

if(cljs.core.truth_(and__3546__auto____4663))
{return (xpos__4655 <= cpos__4652.x);
} else
{return and__3546__auto____4663;
}
}
}
})();

if(cljs.core.truth_(and__3546__auto____4664))
{var or__3548__auto____4665 = (ystep__4658 === 0);

if(cljs.core.truth_(or__3548__auto____4665))
{return or__3548__auto____4665;
} else
{var or__3548__auto____4667 = (function (){var and__3546__auto____4666 = (ystep__4658 < 0);

if(cljs.core.truth_(and__3546__auto____4666))
{return (ypos__4656 >= cpos__4652.y);
} else
{return and__3546__auto____4666;
}
})();

if(cljs.core.truth_(or__3548__auto____4667))
{return or__3548__auto____4667;
} else
{var and__3546__auto____4668 = (ystep__4658 > 0);

if(cljs.core.truth_(and__3546__auto____4668))
{return (ypos__4656 <= cpos__4652.y);
} else
{return and__3546__auto____4668;
}
}
}
} else
{return and__3546__auto____4664;
}
})()))
{(pnod[cljs.core.name.call(null,orig_sym__4645)] = null);
clone__4659.x = xpos__4655;
clone__4659.y = ypos__4656;
goog.style.setPosition.call(null,pnod,clone__4659.x,clone__4659.y);
return true;
} else
{return false;
}
}).call(null,pnod__2591__auto__,(enfocus.core.get_mills.call(null) - start__2593__auto____4649)));
} else
{return and__3546__auto____4651;
}
})()))
{(function (){var nods__2465__auto____4684 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var cpos__4670 = goog.style.getPosition.call(null,pnod);
var opos__4671 = (pnod[cljs.core.name.call(null,orig_sym__4645)]);
var opos__4672 = (cljs.core.truth_(opos__4671)?opos__4671:(pnod[cljs.core.name.call(null,orig_sym__4645)] = cpos__4670));
var xpos__4673 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__4672.x:xpos);
var ypos__4674 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__4672.y:ypos);
var xstep__4675 = enfocus.core.pix_round.call(null,((xpos__4673 - opos__4672.x) / steps__4648));
var ystep__4676 = enfocus.core.pix_round.call(null,((ypos__4674 - opos__4672.y) / steps__4648));
var clone__4677 = cpos__4670.clone;

if(cljs.core.truth_((function (){var or__3548__auto____4679 = (function (){var and__3546__auto____4678 = (xstep__4675 < 0);

if(cljs.core.truth_(and__3546__auto____4678))
{return (xpos__4673 < cpos__4670.x);
} else
{return and__3546__auto____4678;
}
})();

if(cljs.core.truth_(or__3548__auto____4679))
{return or__3548__auto____4679;
} else
{var and__3546__auto____4680 = (xstep__4675 > 0);

if(cljs.core.truth_(and__3546__auto____4680))
{return (xpos__4673 > cpos__4670.x);
} else
{return and__3546__auto____4680;
}
}
})()))
{clone__4677.x = (cpos__4670.x + xstep__4675);
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____4682 = (function (){var and__3546__auto____4681 = (ystep__4676 < 0);

if(cljs.core.truth_(and__3546__auto____4681))
{return (ypos__4674 < cpos__4670.y);
} else
{return and__3546__auto____4681;
}
})();

if(cljs.core.truth_(or__3548__auto____4682))
{return or__3548__auto____4682;
} else
{var and__3546__auto____4683 = (ystep__4676 > 0);

if(cljs.core.truth_(and__3546__auto____4683))
{return (ypos__4674 > cpos__4670.y);
} else
{return and__3546__auto____4683;
}
}
})()))
{clone__4677.y = (cpos__4670.y + ystep__4676);
} else
{}
return goog.style.setPosition.call(null,pnod,clone__4677.x,clone__4677.y);
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod4669){
return pnod4669;
}),nods__2465__auto____4684));
return (function (pnod){
var cpos__4685 = goog.style.getPosition.call(null,pnod);
var opos__4686 = (pnod[cljs.core.name.call(null,orig_sym__4645)]);
var opos__4687 = (cljs.core.truth_(opos__4686)?opos__4686:(pnod[cljs.core.name.call(null,orig_sym__4645)] = cpos__4685));
var xpos__4688 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__4687.x:xpos);
var ypos__4689 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__4687.y:ypos);
var xstep__4690 = enfocus.core.pix_round.call(null,((xpos__4688 - opos__4687.x) / steps__4648));
var ystep__4691 = enfocus.core.pix_round.call(null,((ypos__4689 - opos__4687.y) / steps__4648));
var clone__4692 = cpos__4685.clone;

if(cljs.core.truth_((function (){var or__3548__auto____4694 = (function (){var and__3546__auto____4693 = (xstep__4690 < 0);

if(cljs.core.truth_(and__3546__auto____4693))
{return (xpos__4688 < cpos__4685.x);
} else
{return and__3546__auto____4693;
}
})();

if(cljs.core.truth_(or__3548__auto____4694))
{return or__3548__auto____4694;
} else
{var and__3546__auto____4695 = (xstep__4690 > 0);

if(cljs.core.truth_(and__3546__auto____4695))
{return (xpos__4688 > cpos__4685.x);
} else
{return and__3546__auto____4695;
}
}
})()))
{clone__4692.x = (cpos__4685.x + xstep__4690);
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____4697 = (function (){var and__3546__auto____4696 = (ystep__4691 < 0);

if(cljs.core.truth_(and__3546__auto____4696))
{return (ypos__4689 < cpos__4685.y);
} else
{return and__3546__auto____4696;
}
})();

if(cljs.core.truth_(or__3548__auto____4697))
{return or__3548__auto____4697;
} else
{var and__3546__auto____4698 = (ystep__4691 > 0);

if(cljs.core.truth_(and__3546__auto____4698))
{return (ypos__4689 > cpos__4685.y);
} else
{return and__3546__auto____4698;
}
}
})()))
{clone__4692.y = (cpos__4685.y + ystep__4691);
} else
{}
return goog.style.setPosition.call(null,pnod,clone__4692.x,clone__4692.y);
});
})().call(null,pnod__2591__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2596__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2591__auto__,"﷐'move",eff_id__2594__auto____4650);
return pcallback__2592__auto__.call(null);
}
});

return eff__2595__auto____4699.call(null,0);
}),callback);
});
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* takes a string to append to all ids so they do not conflict with
* existing ids in the live dom
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__4700 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__4701 = (function (id_scope_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__4644_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__4644_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__4644_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__4644_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__4644_SHARP_).replace("#",cljs.core.str.call(null,"#",id_scope_sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__4644_SHARP_)))
{return create_sel_str.call(null,p1__4644_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__4644_SHARP_)))
{return p1__4644_SHARP_.replace("#",cljs.core.str.call(null,"#",id_scope_sym));
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
return create_sel_str__4700.call(this,id_scope_sym);
case  2 :
return create_sel_str__4701.call(this,id_scope_sym,css_sel);
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
var css_select__4705 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__4706 = (function (id_scope_sym,dom_node,css_sel){
var sel__4703 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,id_scope_sym,css_sel)," :",":"));
var ret__4704 = goog.dom.query.call(null,sel__4703,dom_node);

return ret__4704;
});
css_select = function(id_scope_sym,dom_node,css_sel){
switch(arguments.length){
case  2 :
return css_select__4705.call(this,id_scope_sym,dom_node);
case  3 :
return css_select__4706.call(this,id_scope_sym,dom_node,css_sel);
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__4708_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__4708_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__4709){
var kys = cljs.core.seq( arglist__4709 );;
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
var attr_EQ___4710 = (function (){
return "";
});
var attr_EQ___4711 = (function() { 
var G__4713__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__4713 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4713__delegate.call(this, ky, txt, forms);
};
G__4713.cljs$lang$maxFixedArity = 2;
G__4713.cljs$lang$applyTo = (function (arglist__4714){
var ky = cljs.core.first(arglist__4714);
var txt = cljs.core.first(cljs.core.next(arglist__4714));
var forms = cljs.core.rest(cljs.core.next(arglist__4714));
return G__4713__delegate.call(this, ky, txt, forms);
});
return G__4713;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___4710.call(this);
default:
return attr_EQ___4711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___4711.cljs$lang$applyTo;
return attr_EQ_;
})()
;
/**
* Matches any E element that is the n-th child of its parent:
* css -> E:nth-child(x) or E:nth-child(xn+y)
*/
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__4715 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__4716 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__4715.call(this,x);
case  2 :
return nth_child__4716.call(this,x,y);
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
var nth_of_type__4718 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__4719 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__4718.call(this,x);
case  2 :
return nth_of_type__4719.call(this,x,y);
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
var nth_last_child__4721 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__4722 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__4721.call(this,x);
case  2 :
return nth_last_child__4722.call(this,x,y);
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
var nth_last_of_type__4724 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__4725 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__4724.call(this,x);
case  2 :
return nth_last_of_type__4725.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
