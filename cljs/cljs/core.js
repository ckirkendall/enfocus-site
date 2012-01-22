goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2546 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2546))
{return or__3548__auto____2546;
} else
{var or__3548__auto____2547 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2547))
{return or__3548__auto____2547;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2548 = coll;

if(cljs.core.truth_(and__3546__auto____2548))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2548;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2549 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2549))
{return or__3548__auto____2549;
} else
{var or__3548__auto____2550 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2550))
{return or__3548__auto____2550;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2551 = coll;

if(cljs.core.truth_(and__3546__auto____2551))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2551;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2552 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2552))
{return or__3548__auto____2552;
} else
{var or__3548__auto____2553 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2553))
{return or__3548__auto____2553;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2554 = coll;

if(cljs.core.truth_(and__3546__auto____2554))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2554;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2555 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2555))
{return or__3548__auto____2555;
} else
{var or__3548__auto____2556 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2556))
{return or__3548__auto____2556;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2563 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2557 = coll;

if(cljs.core.truth_(and__3546__auto____2557))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2557;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2558 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2558))
{return or__3548__auto____2558;
} else
{var or__3548__auto____2559 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2559))
{return or__3548__auto____2559;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2564 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2560 = coll;

if(cljs.core.truth_(and__3546__auto____2560))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2560;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2561 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2561))
{return or__3548__auto____2561;
} else
{var or__3548__auto____2562 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2562))
{return or__3548__auto____2562;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2563.call(this,coll,n);
case  3 :
return _nth__2564.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2566 = coll;

if(cljs.core.truth_(and__3546__auto____2566))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2566;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2567 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2567))
{return or__3548__auto____2567;
} else
{var or__3548__auto____2568 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2568))
{return or__3548__auto____2568;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2569 = coll;

if(cljs.core.truth_(and__3546__auto____2569))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2569;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2570 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2570))
{return or__3548__auto____2570;
} else
{var or__3548__auto____2571 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2571))
{return or__3548__auto____2571;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2578 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2572 = o;

if(cljs.core.truth_(and__3546__auto____2572))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2572;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2573 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2573))
{return or__3548__auto____2573;
} else
{var or__3548__auto____2574 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2574))
{return or__3548__auto____2574;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2579 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2575 = o;

if(cljs.core.truth_(and__3546__auto____2575))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2575;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2576 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2576))
{return or__3548__auto____2576;
} else
{var or__3548__auto____2577 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2577))
{return or__3548__auto____2577;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2578.call(this,o,k);
case  3 :
return _lookup__2579.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2581 = coll;

if(cljs.core.truth_(and__3546__auto____2581))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2581;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2582 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2582))
{return or__3548__auto____2582;
} else
{var or__3548__auto____2583 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2583))
{return or__3548__auto____2583;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2584 = coll;

if(cljs.core.truth_(and__3546__auto____2584))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2584;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2585 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2585))
{return or__3548__auto____2585;
} else
{var or__3548__auto____2586 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2586))
{return or__3548__auto____2586;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2587 = coll;

if(cljs.core.truth_(and__3546__auto____2587))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2587;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2588 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2588))
{return or__3548__auto____2588;
} else
{var or__3548__auto____2589 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2589))
{return or__3548__auto____2589;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2590 = coll;

if(cljs.core.truth_(and__3546__auto____2590))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2590;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2591 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2591))
{return or__3548__auto____2591;
} else
{var or__3548__auto____2592 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2592))
{return or__3548__auto____2592;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2593 = coll;

if(cljs.core.truth_(and__3546__auto____2593))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2593;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2594 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2594))
{return or__3548__auto____2594;
} else
{var or__3548__auto____2595 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2595))
{return or__3548__auto____2595;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2596 = coll;

if(cljs.core.truth_(and__3546__auto____2596))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2596;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2597 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2597))
{return or__3548__auto____2597;
} else
{var or__3548__auto____2598 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2598))
{return or__3548__auto____2598;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2599 = coll;

if(cljs.core.truth_(and__3546__auto____2599))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2599;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2600 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2600))
{return or__3548__auto____2600;
} else
{var or__3548__auto____2601 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2601))
{return or__3548__auto____2601;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2602 = o;

if(cljs.core.truth_(and__3546__auto____2602))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2602;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2603 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2603))
{return or__3548__auto____2603;
} else
{var or__3548__auto____2604 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2604))
{return or__3548__auto____2604;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2605 = o;

if(cljs.core.truth_(and__3546__auto____2605))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2605;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2606 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2606))
{return or__3548__auto____2606;
} else
{var or__3548__auto____2607 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2607))
{return or__3548__auto____2607;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2608 = o;

if(cljs.core.truth_(and__3546__auto____2608))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2608;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2609 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2609))
{return or__3548__auto____2609;
} else
{var or__3548__auto____2610 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2610))
{return or__3548__auto____2610;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2611 = o;

if(cljs.core.truth_(and__3546__auto____2611))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2611;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2612 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2612))
{return or__3548__auto____2612;
} else
{var or__3548__auto____2613 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2613))
{return or__3548__auto____2613;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2620 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2614 = coll;

if(cljs.core.truth_(and__3546__auto____2614))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2614;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2615 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2615))
{return or__3548__auto____2615;
} else
{var or__3548__auto____2616 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2616))
{return or__3548__auto____2616;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2621 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2617 = coll;

if(cljs.core.truth_(and__3546__auto____2617))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2617;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2618 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2618))
{return or__3548__auto____2618;
} else
{var or__3548__auto____2619 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2619))
{return or__3548__auto____2619;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2620.call(this,coll,f);
case  3 :
return _reduce__2621.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2623 = o;

if(cljs.core.truth_(and__3546__auto____2623))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2623;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2624 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2624))
{return or__3548__auto____2624;
} else
{var or__3548__auto____2625 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2625))
{return or__3548__auto____2625;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2626 = o;

if(cljs.core.truth_(and__3546__auto____2626))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2626;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2627 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2627))
{return or__3548__auto____2627;
} else
{var or__3548__auto____2628 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2628))
{return or__3548__auto____2628;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2629 = o;

if(cljs.core.truth_(and__3546__auto____2629))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2629;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2630 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2630))
{return or__3548__auto____2630;
} else
{var or__3548__auto____2631 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2631))
{return or__3548__auto____2631;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2632 = o;

if(cljs.core.truth_(and__3546__auto____2632))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2632;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2633 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2633))
{return or__3548__auto____2633;
} else
{var or__3548__auto____2634 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2634))
{return or__3548__auto____2634;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2635 = d;

if(cljs.core.truth_(and__3546__auto____2635))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2635;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2636 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2636))
{return or__3548__auto____2636;
} else
{var or__3548__auto____2637 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2637))
{return or__3548__auto____2637;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2638 = this$;

if(cljs.core.truth_(and__3546__auto____2638))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2638;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2639 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2639))
{return or__3548__auto____2639;
} else
{var or__3548__auto____2640 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2640))
{return or__3548__auto____2640;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2641 = this$;

if(cljs.core.truth_(and__3546__auto____2641))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2641;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2642 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2642))
{return or__3548__auto____2642;
} else
{var or__3548__auto____2643 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2643))
{return or__3548__auto____2643;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2644 = this$;

if(cljs.core.truth_(and__3546__auto____2644))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2644;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2645 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2645))
{return or__3548__auto____2645;
} else
{var or__3548__auto____2646 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2646))
{return or__3548__auto____2646;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2647 = null;
var G__2647__2648 = (function (o,k){
return null;
});
var G__2647__2649 = (function (o,k,not_found){
return not_found;
});
G__2647 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2647__2648.call(this,o,k);
case  3 :
return G__2647__2649.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2647;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2651 = null;
var G__2651__2652 = (function (_,f){
return f.call(null);
});
var G__2651__2653 = (function (_,f,start){
return start;
});
G__2651 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2651__2652.call(this,_,f);
case  3 :
return G__2651__2653.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2651;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2655 = null;
var G__2655__2656 = (function (_,n){
return null;
});
var G__2655__2657 = (function (_,n,not_found){
return not_found;
});
G__2655 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2655__2656.call(this,_,n);
case  3 :
return G__2655__2657.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2655;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2665 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2659 = cljs.core._nth.call(null,cicoll,0);
var n__2660 = 1;

while(true){
if(cljs.core.truth_((n__2660 < cljs.core._count.call(null,cicoll))))
{{
var G__2669 = f.call(null,val__2659,cljs.core._nth.call(null,cicoll,n__2660));
var G__2670 = (n__2660 + 1);
val__2659 = G__2669;
n__2660 = G__2670;
continue;
}
} else
{return val__2659;
}
break;
}
}
});
var ci_reduce__2666 = (function (cicoll,f,val){
var val__2661 = val;
var n__2662 = 0;

while(true){
if(cljs.core.truth_((n__2662 < cljs.core._count.call(null,cicoll))))
{{
var G__2671 = f.call(null,val__2661,cljs.core._nth.call(null,cicoll,n__2662));
var G__2672 = (n__2662 + 1);
val__2661 = G__2671;
n__2662 = G__2672;
continue;
}
} else
{return val__2661;
}
break;
}
});
var ci_reduce__2667 = (function (cicoll,f,val,idx){
var val__2663 = val;
var n__2664 = idx;

while(true){
if(cljs.core.truth_((n__2664 < cljs.core._count.call(null,cicoll))))
{{
var G__2673 = f.call(null,val__2663,cljs.core._nth.call(null,cicoll,n__2664));
var G__2674 = (n__2664 + 1);
val__2663 = G__2673;
n__2664 = G__2674;
continue;
}
} else
{return val__2663;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2665.call(this,cicoll,f);
case  3 :
return ci_reduce__2666.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2667.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2675 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2688 = null;
var G__2688__2689 = (function (coll,f){
var this__2676 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2676.a[this__2676.i]),(this__2676.i + 1));
});
var G__2688__2690 = (function (coll,f,start){
var this__2677 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2677.i);
});
G__2688 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2688__2689.call(this,coll,f);
case  3 :
return G__2688__2690.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2688;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2678 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2679 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2692 = null;
var G__2692__2693 = (function (coll,n){
var this__2680 = this;
var i__2681 = (n + this__2680.i);

if(cljs.core.truth_((i__2681 < this__2680.a.length)))
{return (this__2680.a[i__2681]);
} else
{return null;
}
});
var G__2692__2694 = (function (coll,n,not_found){
var this__2682 = this;
var i__2683 = (n + this__2682.i);

if(cljs.core.truth_((i__2683 < this__2682.a.length)))
{return (this__2682.a[i__2683]);
} else
{return not_found;
}
});
G__2692 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2692__2693.call(this,coll,n);
case  3 :
return G__2692__2694.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2692;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2684 = this;
return (this__2684.a.length - this__2684.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2685 = this;
return (this__2685.a[this__2685.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2686 = this;
if(cljs.core.truth_(((this__2686.i + 1) < this__2686.a.length)))
{return (new cljs.core.IndexedSeq(this__2686.a,(this__2686.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2687 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2696 = null;
var G__2696__2697 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2696__2698 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2696 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2696__2697.call(this,array,f);
case  3 :
return G__2696__2698.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2696;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2700 = null;
var G__2700__2701 = (function (array,k){
return (array[k]);
});
var G__2700__2702 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2700 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2700__2701.call(this,array,k);
case  3 :
return G__2700__2702.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2700;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2704 = null;
var G__2704__2705 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2704__2706 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2704 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2704__2705.call(this,array,n);
case  3 :
return G__2704__2706.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2704;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____2708 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2708))
{var s__2709 = temp__3698__auto____2708;

return cljs.core._first.call(null,s__2709);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2710 = cljs.core.next.call(null,s);
s = G__2710;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2711 = cljs.core.seq.call(null,x);
var n__2712 = 0;

while(true){
if(cljs.core.truth_(s__2711))
{{
var G__2713 = cljs.core.next.call(null,s__2711);
var G__2714 = (n__2712 + 1);
s__2711 = G__2713;
n__2712 = G__2714;
continue;
}
} else
{return n__2712;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2715 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2716 = (function() { 
var G__2718__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2719 = conj.call(null,coll,x);
var G__2720 = cljs.core.first.call(null,xs);
var G__2721 = cljs.core.next.call(null,xs);
coll = G__2719;
x = G__2720;
xs = G__2721;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2718 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2718__delegate.call(this, coll, x, xs);
};
G__2718.cljs$lang$maxFixedArity = 2;
G__2718.cljs$lang$applyTo = (function (arglist__2722){
var coll = cljs.core.first(arglist__2722);
var x = cljs.core.first(cljs.core.next(arglist__2722));
var xs = cljs.core.rest(cljs.core.next(arglist__2722));
return G__2718__delegate.call(this, coll, x, xs);
});
return G__2718;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2715.call(this,coll,x);
default:
return conj__2716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2716.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2723 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__2724 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2723.call(this,coll,n);
case  3 :
return nth__2724.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2726 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2727 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2726.call(this,o,k);
case  3 :
return get__2727.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2730 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2731 = (function() { 
var G__2733__delegate = function (coll,k,v,kvs){
while(true){
var ret__2729 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2734 = ret__2729;
var G__2735 = cljs.core.first.call(null,kvs);
var G__2736 = cljs.core.second.call(null,kvs);
var G__2737 = cljs.core.nnext.call(null,kvs);
coll = G__2734;
k = G__2735;
v = G__2736;
kvs = G__2737;
continue;
}
} else
{return ret__2729;
}
break;
}
};
var G__2733 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2733__delegate.call(this, coll, k, v, kvs);
};
G__2733.cljs$lang$maxFixedArity = 3;
G__2733.cljs$lang$applyTo = (function (arglist__2738){
var coll = cljs.core.first(arglist__2738);
var k = cljs.core.first(cljs.core.next(arglist__2738));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2738)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2738)));
return G__2733__delegate.call(this, coll, k, v, kvs);
});
return G__2733;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2730.call(this,coll,k,v);
default:
return assoc__2731.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2731.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2740 = (function (coll){
return coll;
});
var dissoc__2741 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2742 = (function() { 
var G__2744__delegate = function (coll,k,ks){
while(true){
var ret__2739 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2745 = ret__2739;
var G__2746 = cljs.core.first.call(null,ks);
var G__2747 = cljs.core.next.call(null,ks);
coll = G__2745;
k = G__2746;
ks = G__2747;
continue;
}
} else
{return ret__2739;
}
break;
}
};
var G__2744 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2744__delegate.call(this, coll, k, ks);
};
G__2744.cljs$lang$maxFixedArity = 2;
G__2744.cljs$lang$applyTo = (function (arglist__2748){
var coll = cljs.core.first(arglist__2748);
var k = cljs.core.first(cljs.core.next(arglist__2748));
var ks = cljs.core.rest(cljs.core.next(arglist__2748));
return G__2744__delegate.call(this, coll, k, ks);
});
return G__2744;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2740.call(this,coll);
case  2 :
return dissoc__2741.call(this,coll,k);
default:
return dissoc__2742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2742.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__321__auto____2749 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2750 = x__321__auto____2749;

if(cljs.core.truth_(and__3546__auto____2750))
{var and__3546__auto____2751 = x__321__auto____2749.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2751))
{return cljs.core.not.call(null,x__321__auto____2749.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____2751;
}
} else
{return and__3546__auto____2750;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__321__auto____2749);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2753 = (function (coll){
return coll;
});
var disj__2754 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2755 = (function() { 
var G__2757__delegate = function (coll,k,ks){
while(true){
var ret__2752 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2758 = ret__2752;
var G__2759 = cljs.core.first.call(null,ks);
var G__2760 = cljs.core.next.call(null,ks);
coll = G__2758;
k = G__2759;
ks = G__2760;
continue;
}
} else
{return ret__2752;
}
break;
}
};
var G__2757 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2757__delegate.call(this, coll, k, ks);
};
G__2757.cljs$lang$maxFixedArity = 2;
G__2757.cljs$lang$applyTo = (function (arglist__2761){
var coll = cljs.core.first(arglist__2761);
var k = cljs.core.first(cljs.core.next(arglist__2761));
var ks = cljs.core.rest(cljs.core.next(arglist__2761));
return G__2757__delegate.call(this, coll, k, ks);
});
return G__2757;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2753.call(this,coll);
case  2 :
return disj__2754.call(this,coll,k);
default:
return disj__2755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2755.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__321__auto____2762 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2763 = x__321__auto____2762;

if(cljs.core.truth_(and__3546__auto____2763))
{var and__3546__auto____2764 = x__321__auto____2762.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2764))
{return cljs.core.not.call(null,x__321__auto____2762.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____2764;
}
} else
{return and__3546__auto____2763;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__321__auto____2762);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__321__auto____2765 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2766 = x__321__auto____2765;

if(cljs.core.truth_(and__3546__auto____2766))
{var and__3546__auto____2767 = x__321__auto____2765.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2767))
{return cljs.core.not.call(null,x__321__auto____2765.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____2767;
}
} else
{return and__3546__auto____2766;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__321__auto____2765);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__321__auto____2768 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2769 = x__321__auto____2768;

if(cljs.core.truth_(and__3546__auto____2769))
{var and__3546__auto____2770 = x__321__auto____2768.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2770))
{return cljs.core.not.call(null,x__321__auto____2768.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____2770;
}
} else
{return and__3546__auto____2769;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__321__auto____2768);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__321__auto____2771 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2772 = x__321__auto____2771;

if(cljs.core.truth_(and__3546__auto____2772))
{var and__3546__auto____2773 = x__321__auto____2771.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2773))
{return cljs.core.not.call(null,x__321__auto____2771.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____2773;
}
} else
{return and__3546__auto____2772;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__321__auto____2771);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__321__auto____2774 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2775 = x__321__auto____2774;

if(cljs.core.truth_(and__3546__auto____2775))
{var and__3546__auto____2776 = x__321__auto____2774.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2776))
{return cljs.core.not.call(null,x__321__auto____2774.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____2776;
}
} else
{return and__3546__auto____2775;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__321__auto____2774);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__321__auto____2777 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2778 = x__321__auto____2777;

if(cljs.core.truth_(and__3546__auto____2778))
{var and__3546__auto____2779 = x__321__auto____2777.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2779))
{return cljs.core.not.call(null,x__321__auto____2777.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____2779;
}
} else
{return and__3546__auto____2778;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__321__auto____2777);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__321__auto____2780 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2781 = x__321__auto____2780;

if(cljs.core.truth_(and__3546__auto____2781))
{var and__3546__auto____2782 = x__321__auto____2780.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2782))
{return cljs.core.not.call(null,x__321__auto____2780.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____2782;
}
} else
{return and__3546__auto____2781;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__321__auto____2780);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2783 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2783.push(key);
}));
return keys__2783;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__321__auto____2784 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2785 = x__321__auto____2784;

if(cljs.core.truth_(and__3546__auto____2785))
{var and__3546__auto____2786 = x__321__auto____2784.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2786))
{return cljs.core.not.call(null,x__321__auto____2784.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____2786;
}
} else
{return and__3546__auto____2785;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__321__auto____2784);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____2787 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2787))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2788 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2788))
{return or__3548__auto____2788;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2787;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2789 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2789))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2789;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2790 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2790))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2790;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____2791 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2791))
{return (n == n.toFixed());
} else
{return and__3546__auto____2791;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2792 = coll;

if(cljs.core.truth_(and__3546__auto____2792))
{var and__3546__auto____2793 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2793))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2793;
}
} else
{return and__3546__auto____2792;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2798 = (function (x){
return true;
});
var distinct_QMARK___2799 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2800 = (function() { 
var G__2802__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2794 = cljs.core.set([y,x]);
var xs__2795 = more;

while(true){
var x__2796 = cljs.core.first.call(null,xs__2795);
var etc__2797 = cljs.core.next.call(null,xs__2795);

if(cljs.core.truth_(xs__2795))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2794,x__2796)))
{return false;
} else
{{
var G__2803 = cljs.core.conj.call(null,s__2794,x__2796);
var G__2804 = etc__2797;
s__2794 = G__2803;
xs__2795 = G__2804;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2802 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2802__delegate.call(this, x, y, more);
};
G__2802.cljs$lang$maxFixedArity = 2;
G__2802.cljs$lang$applyTo = (function (arglist__2805){
var x = cljs.core.first(arglist__2805);
var y = cljs.core.first(cljs.core.next(arglist__2805));
var more = cljs.core.rest(cljs.core.next(arglist__2805));
return G__2802__delegate.call(this, x, y, more);
});
return G__2802;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2798.call(this,x);
case  2 :
return distinct_QMARK___2799.call(this,x,y);
default:
return distinct_QMARK___2800.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2800.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2806 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2806)))
{return r__2806;
} else
{if(cljs.core.truth_(r__2806))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2808 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2809 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2807 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2807,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2807);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2808.call(this,comp);
case  2 :
return sort__2809.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2811 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2812 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2811.call(this,keyfn,comp);
case  3 :
return sort_by__2812.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2814 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2815 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2814.call(this,f,val);
case  3 :
return reduce__2815.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2821 = (function (f,coll){
var temp__3695__auto____2817 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2817))
{var s__2818 = temp__3695__auto____2817;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2818),cljs.core.next.call(null,s__2818));
} else
{return f.call(null);
}
});
var seq_reduce__2822 = (function (f,val,coll){
var val__2819 = val;
var coll__2820 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2820))
{{
var G__2824 = f.call(null,val__2819,cljs.core.first.call(null,coll__2820));
var G__2825 = cljs.core.next.call(null,coll__2820);
val__2819 = G__2824;
coll__2820 = G__2825;
continue;
}
} else
{return val__2819;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2821.call(this,f,val);
case  3 :
return seq_reduce__2822.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2826 = null;
var G__2826__2827 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2826__2828 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2826 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2826__2827.call(this,coll,f);
case  3 :
return G__2826__2828.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2826;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2830 = (function (){
return 0;
});
var _PLUS___2831 = (function (x){
return x;
});
var _PLUS___2832 = (function (x,y){
return (x + y);
});
var _PLUS___2833 = (function() { 
var G__2835__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2835 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2835__delegate.call(this, x, y, more);
};
G__2835.cljs$lang$maxFixedArity = 2;
G__2835.cljs$lang$applyTo = (function (arglist__2836){
var x = cljs.core.first(arglist__2836);
var y = cljs.core.first(cljs.core.next(arglist__2836));
var more = cljs.core.rest(cljs.core.next(arglist__2836));
return G__2835__delegate.call(this, x, y, more);
});
return G__2835;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2830.call(this);
case  1 :
return _PLUS___2831.call(this,x);
case  2 :
return _PLUS___2832.call(this,x,y);
default:
return _PLUS___2833.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2833.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2837 = (function (x){
return (- x);
});
var ___2838 = (function (x,y){
return (x - y);
});
var ___2839 = (function() { 
var G__2841__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2841 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2841__delegate.call(this, x, y, more);
};
G__2841.cljs$lang$maxFixedArity = 2;
G__2841.cljs$lang$applyTo = (function (arglist__2842){
var x = cljs.core.first(arglist__2842);
var y = cljs.core.first(cljs.core.next(arglist__2842));
var more = cljs.core.rest(cljs.core.next(arglist__2842));
return G__2841__delegate.call(this, x, y, more);
});
return G__2841;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2837.call(this,x);
case  2 :
return ___2838.call(this,x,y);
default:
return ___2839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2839.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2843 = (function (){
return 1;
});
var _STAR___2844 = (function (x){
return x;
});
var _STAR___2845 = (function (x,y){
return (x * y);
});
var _STAR___2846 = (function() { 
var G__2848__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2848 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2848__delegate.call(this, x, y, more);
};
G__2848.cljs$lang$maxFixedArity = 2;
G__2848.cljs$lang$applyTo = (function (arglist__2849){
var x = cljs.core.first(arglist__2849);
var y = cljs.core.first(cljs.core.next(arglist__2849));
var more = cljs.core.rest(cljs.core.next(arglist__2849));
return G__2848__delegate.call(this, x, y, more);
});
return G__2848;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2843.call(this);
case  1 :
return _STAR___2844.call(this,x);
case  2 :
return _STAR___2845.call(this,x,y);
default:
return _STAR___2846.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2846.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2850 = (function (x){
return (1 / x);
});
var _SLASH___2851 = (function (x,y){
return (x / y);
});
var _SLASH___2852 = (function() { 
var G__2854__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2854 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2854__delegate.call(this, x, y, more);
};
G__2854.cljs$lang$maxFixedArity = 2;
G__2854.cljs$lang$applyTo = (function (arglist__2855){
var x = cljs.core.first(arglist__2855);
var y = cljs.core.first(cljs.core.next(arglist__2855));
var more = cljs.core.rest(cljs.core.next(arglist__2855));
return G__2854__delegate.call(this, x, y, more);
});
return G__2854;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2850.call(this,x);
case  2 :
return _SLASH___2851.call(this,x,y);
default:
return _SLASH___2852.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2852.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2856 = (function (x){
return true;
});
var _LT___2857 = (function (x,y){
return (x < y);
});
var _LT___2858 = (function() { 
var G__2860__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2861 = y;
var G__2862 = cljs.core.first.call(null,more);
var G__2863 = cljs.core.next.call(null,more);
x = G__2861;
y = G__2862;
more = G__2863;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2860 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2860__delegate.call(this, x, y, more);
};
G__2860.cljs$lang$maxFixedArity = 2;
G__2860.cljs$lang$applyTo = (function (arglist__2864){
var x = cljs.core.first(arglist__2864);
var y = cljs.core.first(cljs.core.next(arglist__2864));
var more = cljs.core.rest(cljs.core.next(arglist__2864));
return G__2860__delegate.call(this, x, y, more);
});
return G__2860;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2856.call(this,x);
case  2 :
return _LT___2857.call(this,x,y);
default:
return _LT___2858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2858.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2865 = (function (x){
return true;
});
var _LT__EQ___2866 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2867 = (function() { 
var G__2869__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2870 = y;
var G__2871 = cljs.core.first.call(null,more);
var G__2872 = cljs.core.next.call(null,more);
x = G__2870;
y = G__2871;
more = G__2872;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2869 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2869__delegate.call(this, x, y, more);
};
G__2869.cljs$lang$maxFixedArity = 2;
G__2869.cljs$lang$applyTo = (function (arglist__2873){
var x = cljs.core.first(arglist__2873);
var y = cljs.core.first(cljs.core.next(arglist__2873));
var more = cljs.core.rest(cljs.core.next(arglist__2873));
return G__2869__delegate.call(this, x, y, more);
});
return G__2869;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2865.call(this,x);
case  2 :
return _LT__EQ___2866.call(this,x,y);
default:
return _LT__EQ___2867.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2867.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2874 = (function (x){
return true;
});
var _GT___2875 = (function (x,y){
return (x > y);
});
var _GT___2876 = (function() { 
var G__2878__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2879 = y;
var G__2880 = cljs.core.first.call(null,more);
var G__2881 = cljs.core.next.call(null,more);
x = G__2879;
y = G__2880;
more = G__2881;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2878 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2878__delegate.call(this, x, y, more);
};
G__2878.cljs$lang$maxFixedArity = 2;
G__2878.cljs$lang$applyTo = (function (arglist__2882){
var x = cljs.core.first(arglist__2882);
var y = cljs.core.first(cljs.core.next(arglist__2882));
var more = cljs.core.rest(cljs.core.next(arglist__2882));
return G__2878__delegate.call(this, x, y, more);
});
return G__2878;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2874.call(this,x);
case  2 :
return _GT___2875.call(this,x,y);
default:
return _GT___2876.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2876.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2883 = (function (x){
return true;
});
var _GT__EQ___2884 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2885 = (function() { 
var G__2887__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2888 = y;
var G__2889 = cljs.core.first.call(null,more);
var G__2890 = cljs.core.next.call(null,more);
x = G__2888;
y = G__2889;
more = G__2890;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2887 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2887__delegate.call(this, x, y, more);
};
G__2887.cljs$lang$maxFixedArity = 2;
G__2887.cljs$lang$applyTo = (function (arglist__2891){
var x = cljs.core.first(arglist__2891);
var y = cljs.core.first(cljs.core.next(arglist__2891));
var more = cljs.core.rest(cljs.core.next(arglist__2891));
return G__2887__delegate.call(this, x, y, more);
});
return G__2887;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2883.call(this,x);
case  2 :
return _GT__EQ___2884.call(this,x,y);
default:
return _GT__EQ___2885.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2885.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2892 = (function (x){
return x;
});
var max__2893 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2894 = (function() { 
var G__2896__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2896 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2896__delegate.call(this, x, y, more);
};
G__2896.cljs$lang$maxFixedArity = 2;
G__2896.cljs$lang$applyTo = (function (arglist__2897){
var x = cljs.core.first(arglist__2897);
var y = cljs.core.first(cljs.core.next(arglist__2897));
var more = cljs.core.rest(cljs.core.next(arglist__2897));
return G__2896__delegate.call(this, x, y, more);
});
return G__2896;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2892.call(this,x);
case  2 :
return max__2893.call(this,x,y);
default:
return max__2894.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2894.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2898 = (function (x){
return x;
});
var min__2899 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2900 = (function() { 
var G__2902__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2902 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2902__delegate.call(this, x, y, more);
};
G__2902.cljs$lang$maxFixedArity = 2;
G__2902.cljs$lang$applyTo = (function (arglist__2903){
var x = cljs.core.first(arglist__2903);
var y = cljs.core.first(cljs.core.next(arglist__2903));
var more = cljs.core.rest(cljs.core.next(arglist__2903));
return G__2902__delegate.call(this, x, y, more);
});
return G__2902;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2898.call(this,x);
case  2 :
return min__2899.call(this,x,y);
default:
return min__2900.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2900.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2904 = (n % d);

return cljs.core.fix.call(null,((n - rem__2904) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2905 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2905));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2906 = (function (){
return Math.random.call(null);
});
var rand__2907 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2906.call(this);
case  1 :
return rand__2907.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2909 = (function (x){
return true;
});
var _EQ__EQ___2910 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2911 = (function() { 
var G__2913__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2914 = y;
var G__2915 = cljs.core.first.call(null,more);
var G__2916 = cljs.core.next.call(null,more);
x = G__2914;
y = G__2915;
more = G__2916;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2913 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2913__delegate.call(this, x, y, more);
};
G__2913.cljs$lang$maxFixedArity = 2;
G__2913.cljs$lang$applyTo = (function (arglist__2917){
var x = cljs.core.first(arglist__2917);
var y = cljs.core.first(cljs.core.next(arglist__2917));
var more = cljs.core.rest(cljs.core.next(arglist__2917));
return G__2913__delegate.call(this, x, y, more);
});
return G__2913;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2909.call(this,x);
case  2 :
return _EQ__EQ___2910.call(this,x,y);
default:
return _EQ__EQ___2911.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2911.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2918 = n;
var xs__2919 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2920 = xs__2919;

if(cljs.core.truth_(and__3546__auto____2920))
{return (n__2918 > 0);
} else
{return and__3546__auto____2920;
}
})()))
{{
var G__2921 = (n__2918 - 1);
var G__2922 = cljs.core.next.call(null,xs__2919);
n__2918 = G__2921;
xs__2919 = G__2922;
continue;
}
} else
{return xs__2919;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2927 = null;
var G__2927__2928 = (function (coll,n){
var temp__3695__auto____2923 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2923))
{var xs__2924 = temp__3695__auto____2923;

return cljs.core.first.call(null,xs__2924);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2927__2929 = (function (coll,n,not_found){
var temp__3695__auto____2925 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2925))
{var xs__2926 = temp__3695__auto____2925;

return cljs.core.first.call(null,xs__2926);
} else
{return not_found;
}
});
G__2927 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2927__2928.call(this,coll,n);
case  3 :
return G__2927__2929.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2927;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___2931 = (function (){
return "";
});
var str_STAR___2932 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2933 = (function() { 
var G__2935__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2936 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__2937 = cljs.core.next.call(null,more);
sb = G__2936;
more = G__2937;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__2935 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2935__delegate.call(this, x, ys);
};
G__2935.cljs$lang$maxFixedArity = 1;
G__2935.cljs$lang$applyTo = (function (arglist__2938){
var x = cljs.core.first(arglist__2938);
var ys = cljs.core.rest(arglist__2938);
return G__2935__delegate.call(this, x, ys);
});
return G__2935;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___2931.call(this);
case  1 :
return str_STAR___2932.call(this,x);
default:
return str_STAR___2933.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2933.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2939 = (function (){
return "";
});
var str__2940 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2941 = (function() { 
var G__2943__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__2943 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2943__delegate.call(this, x, ys);
};
G__2943.cljs$lang$maxFixedArity = 1;
G__2943.cljs$lang$applyTo = (function (arglist__2944){
var x = cljs.core.first(arglist__2944);
var ys = cljs.core.rest(arglist__2944);
return G__2943__delegate.call(this, x, ys);
});
return G__2943;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2939.call(this);
case  1 :
return str__2940.call(this,x);
default:
return str__2941.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2941.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2945 = (function (s,start){
return s.substring(start);
});
var subs__2946 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2945.call(this,s,start);
case  3 :
return subs__2946.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2948 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__2949 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2948.call(this,ns);
case  2 :
return symbol__2949.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2951 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2952 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2951.call(this,ns);
case  2 :
return keyword__2952.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2954 = cljs.core.seq.call(null,x);
var ys__2955 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2954)))
{return cljs.core.nil_QMARK_.call(null,ys__2955);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2955)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2954),cljs.core.first.call(null,ys__2955))))
{{
var G__2956 = cljs.core.next.call(null,xs__2954);
var G__2957 = cljs.core.next.call(null,ys__2955);
xs__2954 = G__2956;
ys__2955 = G__2957;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2958_SHARP_,p2__2959_SHARP_){
return cljs.core.hash_combine.call(null,p1__2958_SHARP_,cljs.core.hash.call(null,p2__2959_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__2960__2961 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__2960__2961))
{var G__2963__2965 = cljs.core.first.call(null,G__2960__2961);
var vec__2964__2966 = G__2963__2965;
var key_name__2967 = cljs.core.nth.call(null,vec__2964__2966,0,null);
var f__2968 = cljs.core.nth.call(null,vec__2964__2966,1,null);
var G__2960__2969 = G__2960__2961;

var G__2963__2970 = G__2963__2965;
var G__2960__2971 = G__2960__2969;

while(true){
var vec__2972__2973 = G__2963__2970;
var key_name__2974 = cljs.core.nth.call(null,vec__2972__2973,0,null);
var f__2975 = cljs.core.nth.call(null,vec__2972__2973,1,null);
var G__2960__2976 = G__2960__2971;

var str_name__2977 = cljs.core.name.call(null,key_name__2974);

obj[str_name__2977] = f__2975;
var temp__3698__auto____2978 = cljs.core.next.call(null,G__2960__2976);

if(cljs.core.truth_(temp__3698__auto____2978))
{var G__2960__2979 = temp__3698__auto____2978;

{
var G__2980 = cljs.core.first.call(null,G__2960__2979);
var G__2981 = G__2960__2979;
G__2963__2970 = G__2980;
G__2960__2971 = G__2981;
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
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2982 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2983 = this;
return (new cljs.core.List(this__2983.meta,o,coll,(this__2983.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2984 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2985 = this;
return this__2985.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2986 = this;
return this__2986.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2987 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2988 = this;
return this__2988.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2989 = this;
return this__2989.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2990 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2991 = this;
return (new cljs.core.List(meta,this__2991.first,this__2991.rest,this__2991.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2992 = this;
return this__2992.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2993 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2994 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2995 = this;
return (new cljs.core.List(this__2995.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2996 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2997 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2998 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2999 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3000 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3001 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3002 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3003 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3004 = this;
return this__3004.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3005 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__3006){
var items = cljs.core.seq( arglist__3006 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3007 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3008 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3009 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3010 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3010.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3011 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3012 = this;
return this__3012.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3013 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__3013.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__3013.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3014 = this;
return this__3014.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3015 = this;
return (new cljs.core.Cons(meta,this__3015.first,this__3015.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3016 = null;
var G__3016__3017 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3016__3018 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3016 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3016__3017.call(this,string,f);
case  3 :
return G__3016__3018.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3016;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3020 = null;
var G__3020__3021 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3020__3022 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3020 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3020__3021.call(this,string,k);
case  3 :
return G__3020__3022.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3020;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3024 = null;
var G__3024__3025 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3024__3026 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3024 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3024__3025.call(this,string,n);
case  3 :
return G__3024__3026.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3024;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__3028 = null;
var G__3028__3029 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__3028__3030 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__3028 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__3028__3029.call(this,_,coll);
case  3 :
return G__3028__3030.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3028;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__3032 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3032;
} else
{lazy_seq.x = x__3032.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3033 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3034 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3035 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3036 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3036.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3037 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3038 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3039 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3040 = this;
return this__3040.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3041 = this;
return (new cljs.core.LazySeq(meta,this__3041.realized,this__3041.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3042 = cljs.core.array.call(null);

var s__3043 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3043)))
{ary__3042.push(cljs.core.first.call(null,s__3043));
{
var G__3044 = cljs.core.next.call(null,s__3043);
s__3043 = G__3044;
continue;
}
} else
{return ary__3042;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3045 = s;
var i__3046 = n;
var sum__3047 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3048 = (i__3046 > 0);

if(cljs.core.truth_(and__3546__auto____3048))
{return cljs.core.seq.call(null,s__3045);
} else
{return and__3546__auto____3048;
}
})()))
{{
var G__3049 = cljs.core.next.call(null,s__3045);
var G__3050 = (i__3046 - 1);
var G__3051 = (sum__3047 + 1);
s__3045 = G__3049;
i__3046 = G__3050;
sum__3047 = G__3051;
continue;
}
} else
{return sum__3047;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__3055 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3056 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3057 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3052 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3052))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3052),concat.call(null,cljs.core.rest.call(null,s__3052),y));
} else
{return y;
}
})));
});
var concat__3058 = (function() { 
var G__3060__delegate = function (x,y,zs){
var cat__3054 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3053 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3053))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3053),cat.call(null,cljs.core.rest.call(null,xys__3053),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3054.call(null,concat.call(null,x,y),zs);
};
var G__3060 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3060__delegate.call(this, x, y, zs);
};
G__3060.cljs$lang$maxFixedArity = 2;
G__3060.cljs$lang$applyTo = (function (arglist__3061){
var x = cljs.core.first(arglist__3061);
var y = cljs.core.first(cljs.core.next(arglist__3061));
var zs = cljs.core.rest(cljs.core.next(arglist__3061));
return G__3060__delegate.call(this, x, y, zs);
});
return G__3060;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3055.call(this);
case  1 :
return concat__3056.call(this,x);
case  2 :
return concat__3057.call(this,x,y);
default:
return concat__3058.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3058.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___3062 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3063 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3064 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3065 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3066 = (function() { 
var G__3068__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3068 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3068__delegate.call(this, a, b, c, d, more);
};
G__3068.cljs$lang$maxFixedArity = 4;
G__3068.cljs$lang$applyTo = (function (arglist__3069){
var a = cljs.core.first(arglist__3069);
var b = cljs.core.first(cljs.core.next(arglist__3069));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3069)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3069))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3069))));
return G__3068__delegate.call(this, a, b, c, d, more);
});
return G__3068;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3062.call(this,a);
case  2 :
return list_STAR___3063.call(this,a,b);
case  3 :
return list_STAR___3064.call(this,a,b,c);
case  4 :
return list_STAR___3065.call(this,a,b,c,d);
default:
return list_STAR___3066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3066.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__3079 = (function (f,args){
var fixed_arity__3070 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3070 + 1)) <= fixed_arity__3070)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3080 = (function (f,x,args){
var arglist__3071 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3072 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3071,fixed_arity__3072) <= fixed_arity__3072)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3071));
} else
{return f.cljs$lang$applyTo(arglist__3071);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3071));
}
});
var apply__3081 = (function (f,x,y,args){
var arglist__3073 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3074 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3073,fixed_arity__3074) <= fixed_arity__3074)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3073));
} else
{return f.cljs$lang$applyTo(arglist__3073);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3073));
}
});
var apply__3082 = (function (f,x,y,z,args){
var arglist__3075 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3076 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3075,fixed_arity__3076) <= fixed_arity__3076)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3075));
} else
{return f.cljs$lang$applyTo(arglist__3075);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3075));
}
});
var apply__3083 = (function() { 
var G__3085__delegate = function (f,a,b,c,d,args){
var arglist__3077 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3078 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3077,fixed_arity__3078) <= fixed_arity__3078)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3077));
} else
{return f.cljs$lang$applyTo(arglist__3077);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3077));
}
};
var G__3085 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3085__delegate.call(this, f, a, b, c, d, args);
};
G__3085.cljs$lang$maxFixedArity = 5;
G__3085.cljs$lang$applyTo = (function (arglist__3086){
var f = cljs.core.first(arglist__3086);
var a = cljs.core.first(cljs.core.next(arglist__3086));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3086)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3086))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3086)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3086)))));
return G__3085__delegate.call(this, f, a, b, c, d, args);
});
return G__3085;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3079.call(this,f,a);
case  3 :
return apply__3080.call(this,f,a,b);
case  4 :
return apply__3081.call(this,f,a,b,c);
case  5 :
return apply__3082.call(this,f,a,b,c,d);
default:
return apply__3083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3083.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3087){
var obj = cljs.core.first(arglist__3087);
var f = cljs.core.first(cljs.core.next(arglist__3087));
var args = cljs.core.rest(cljs.core.next(arglist__3087));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___3088 = (function (x){
return false;
});
var not_EQ___3089 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3090 = (function() { 
var G__3092__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3092 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3092__delegate.call(this, x, y, more);
};
G__3092.cljs$lang$maxFixedArity = 2;
G__3092.cljs$lang$applyTo = (function (arglist__3093){
var x = cljs.core.first(arglist__3093);
var y = cljs.core.first(cljs.core.next(arglist__3093));
var more = cljs.core.rest(cljs.core.next(arglist__3093));
return G__3092__delegate.call(this, x, y, more);
});
return G__3092;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3088.call(this,x);
case  2 :
return not_EQ___3089.call(this,x,y);
default:
return not_EQ___3090.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3090.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3094 = pred;
var G__3095 = cljs.core.next.call(null,coll);
pred = G__3094;
coll = G__3095;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____3096 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3096))
{return or__3548__auto____3096;
} else
{{
var G__3097 = pred;
var G__3098 = cljs.core.next.call(null,coll);
pred = G__3097;
coll = G__3098;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__3099 = null;
var G__3099__3100 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3099__3101 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3099__3102 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3099__3103 = (function() { 
var G__3105__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3105 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3105__delegate.call(this, x, y, zs);
};
G__3105.cljs$lang$maxFixedArity = 2;
G__3105.cljs$lang$applyTo = (function (arglist__3106){
var x = cljs.core.first(arglist__3106);
var y = cljs.core.first(cljs.core.next(arglist__3106));
var zs = cljs.core.rest(cljs.core.next(arglist__3106));
return G__3105__delegate.call(this, x, y, zs);
});
return G__3105;
})()
;
G__3099 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3099__3100.call(this);
case  1 :
return G__3099__3101.call(this,x);
case  2 :
return G__3099__3102.call(this,x,y);
default:
return G__3099__3103.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3099.cljs$lang$maxFixedArity = 2;
G__3099.cljs$lang$applyTo = G__3099__3103.cljs$lang$applyTo;
return G__3099;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3107__delegate = function (args){
return x;
};
var G__3107 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3107__delegate.call(this, args);
};
G__3107.cljs$lang$maxFixedArity = 0;
G__3107.cljs$lang$applyTo = (function (arglist__3108){
var args = cljs.core.seq( arglist__3108 );;
return G__3107__delegate.call(this, args);
});
return G__3107;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3112 = (function (){
return cljs.core.identity;
});
var comp__3113 = (function (f){
return f;
});
var comp__3114 = (function (f,g){
return (function() {
var G__3118 = null;
var G__3118__3119 = (function (){
return f.call(null,g.call(null));
});
var G__3118__3120 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3118__3121 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3118__3122 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3118__3123 = (function() { 
var G__3125__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3125 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3125__delegate.call(this, x, y, z, args);
};
G__3125.cljs$lang$maxFixedArity = 3;
G__3125.cljs$lang$applyTo = (function (arglist__3126){
var x = cljs.core.first(arglist__3126);
var y = cljs.core.first(cljs.core.next(arglist__3126));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3126)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3126)));
return G__3125__delegate.call(this, x, y, z, args);
});
return G__3125;
})()
;
G__3118 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3118__3119.call(this);
case  1 :
return G__3118__3120.call(this,x);
case  2 :
return G__3118__3121.call(this,x,y);
case  3 :
return G__3118__3122.call(this,x,y,z);
default:
return G__3118__3123.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3118.cljs$lang$maxFixedArity = 3;
G__3118.cljs$lang$applyTo = G__3118__3123.cljs$lang$applyTo;
return G__3118;
})()
});
var comp__3115 = (function (f,g,h){
return (function() {
var G__3127 = null;
var G__3127__3128 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3127__3129 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3127__3130 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3127__3131 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3127__3132 = (function() { 
var G__3134__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3134 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3134__delegate.call(this, x, y, z, args);
};
G__3134.cljs$lang$maxFixedArity = 3;
G__3134.cljs$lang$applyTo = (function (arglist__3135){
var x = cljs.core.first(arglist__3135);
var y = cljs.core.first(cljs.core.next(arglist__3135));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3135)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3135)));
return G__3134__delegate.call(this, x, y, z, args);
});
return G__3134;
})()
;
G__3127 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3127__3128.call(this);
case  1 :
return G__3127__3129.call(this,x);
case  2 :
return G__3127__3130.call(this,x,y);
case  3 :
return G__3127__3131.call(this,x,y,z);
default:
return G__3127__3132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3127.cljs$lang$maxFixedArity = 3;
G__3127.cljs$lang$applyTo = G__3127__3132.cljs$lang$applyTo;
return G__3127;
})()
});
var comp__3116 = (function() { 
var G__3136__delegate = function (f1,f2,f3,fs){
var fs__3109 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3137__delegate = function (args){
var ret__3110 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3109),args);
var fs__3111 = cljs.core.next.call(null,fs__3109);

while(true){
if(cljs.core.truth_(fs__3111))
{{
var G__3138 = cljs.core.first.call(null,fs__3111).call(null,ret__3110);
var G__3139 = cljs.core.next.call(null,fs__3111);
ret__3110 = G__3138;
fs__3111 = G__3139;
continue;
}
} else
{return ret__3110;
}
break;
}
};
var G__3137 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3137__delegate.call(this, args);
};
G__3137.cljs$lang$maxFixedArity = 0;
G__3137.cljs$lang$applyTo = (function (arglist__3140){
var args = cljs.core.seq( arglist__3140 );;
return G__3137__delegate.call(this, args);
});
return G__3137;
})()
;
};
var G__3136 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3136__delegate.call(this, f1, f2, f3, fs);
};
G__3136.cljs$lang$maxFixedArity = 3;
G__3136.cljs$lang$applyTo = (function (arglist__3141){
var f1 = cljs.core.first(arglist__3141);
var f2 = cljs.core.first(cljs.core.next(arglist__3141));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3141)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3141)));
return G__3136__delegate.call(this, f1, f2, f3, fs);
});
return G__3136;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3112.call(this);
case  1 :
return comp__3113.call(this,f1);
case  2 :
return comp__3114.call(this,f1,f2);
case  3 :
return comp__3115.call(this,f1,f2,f3);
default:
return comp__3116.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3116.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3142 = (function (f,arg1){
return (function() { 
var G__3147__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3147 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3147__delegate.call(this, args);
};
G__3147.cljs$lang$maxFixedArity = 0;
G__3147.cljs$lang$applyTo = (function (arglist__3148){
var args = cljs.core.seq( arglist__3148 );;
return G__3147__delegate.call(this, args);
});
return G__3147;
})()
;
});
var partial__3143 = (function (f,arg1,arg2){
return (function() { 
var G__3149__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3149 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3149__delegate.call(this, args);
};
G__3149.cljs$lang$maxFixedArity = 0;
G__3149.cljs$lang$applyTo = (function (arglist__3150){
var args = cljs.core.seq( arglist__3150 );;
return G__3149__delegate.call(this, args);
});
return G__3149;
})()
;
});
var partial__3144 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3151__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3151 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3151__delegate.call(this, args);
};
G__3151.cljs$lang$maxFixedArity = 0;
G__3151.cljs$lang$applyTo = (function (arglist__3152){
var args = cljs.core.seq( arglist__3152 );;
return G__3151__delegate.call(this, args);
});
return G__3151;
})()
;
});
var partial__3145 = (function() { 
var G__3153__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3154__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3154 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3154__delegate.call(this, args);
};
G__3154.cljs$lang$maxFixedArity = 0;
G__3154.cljs$lang$applyTo = (function (arglist__3155){
var args = cljs.core.seq( arglist__3155 );;
return G__3154__delegate.call(this, args);
});
return G__3154;
})()
;
};
var G__3153 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3153__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3153.cljs$lang$maxFixedArity = 4;
G__3153.cljs$lang$applyTo = (function (arglist__3156){
var f = cljs.core.first(arglist__3156);
var arg1 = cljs.core.first(cljs.core.next(arglist__3156));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3156)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3156))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3156))));
return G__3153__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3153;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3142.call(this,f,arg1);
case  3 :
return partial__3143.call(this,f,arg1,arg2);
case  4 :
return partial__3144.call(this,f,arg1,arg2,arg3);
default:
return partial__3145.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3145.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3157 = (function (f,x){
return (function() {
var G__3161 = null;
var G__3161__3162 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3161__3163 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3161__3164 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3161__3165 = (function() { 
var G__3167__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3167 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3167__delegate.call(this, a, b, c, ds);
};
G__3167.cljs$lang$maxFixedArity = 3;
G__3167.cljs$lang$applyTo = (function (arglist__3168){
var a = cljs.core.first(arglist__3168);
var b = cljs.core.first(cljs.core.next(arglist__3168));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3168)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3168)));
return G__3167__delegate.call(this, a, b, c, ds);
});
return G__3167;
})()
;
G__3161 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3161__3162.call(this,a);
case  2 :
return G__3161__3163.call(this,a,b);
case  3 :
return G__3161__3164.call(this,a,b,c);
default:
return G__3161__3165.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3161.cljs$lang$maxFixedArity = 3;
G__3161.cljs$lang$applyTo = G__3161__3165.cljs$lang$applyTo;
return G__3161;
})()
});
var fnil__3158 = (function (f,x,y){
return (function() {
var G__3169 = null;
var G__3169__3170 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3169__3171 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3169__3172 = (function() { 
var G__3174__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3174 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3174__delegate.call(this, a, b, c, ds);
};
G__3174.cljs$lang$maxFixedArity = 3;
G__3174.cljs$lang$applyTo = (function (arglist__3175){
var a = cljs.core.first(arglist__3175);
var b = cljs.core.first(cljs.core.next(arglist__3175));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3175)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3175)));
return G__3174__delegate.call(this, a, b, c, ds);
});
return G__3174;
})()
;
G__3169 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3169__3170.call(this,a,b);
case  3 :
return G__3169__3171.call(this,a,b,c);
default:
return G__3169__3172.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3169.cljs$lang$maxFixedArity = 3;
G__3169.cljs$lang$applyTo = G__3169__3172.cljs$lang$applyTo;
return G__3169;
})()
});
var fnil__3159 = (function (f,x,y,z){
return (function() {
var G__3176 = null;
var G__3176__3177 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3176__3178 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3176__3179 = (function() { 
var G__3181__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3181 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3181__delegate.call(this, a, b, c, ds);
};
G__3181.cljs$lang$maxFixedArity = 3;
G__3181.cljs$lang$applyTo = (function (arglist__3182){
var a = cljs.core.first(arglist__3182);
var b = cljs.core.first(cljs.core.next(arglist__3182));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3182)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3182)));
return G__3181__delegate.call(this, a, b, c, ds);
});
return G__3181;
})()
;
G__3176 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3176__3177.call(this,a,b);
case  3 :
return G__3176__3178.call(this,a,b,c);
default:
return G__3176__3179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3176.cljs$lang$maxFixedArity = 3;
G__3176.cljs$lang$applyTo = G__3176__3179.cljs$lang$applyTo;
return G__3176;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3157.call(this,f,x);
case  3 :
return fnil__3158.call(this,f,x,y);
case  4 :
return fnil__3159.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3185 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3183 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3183))
{var s__3184 = temp__3698__auto____3183;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3184)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3184)));
} else
{return null;
}
})));
});

return mapi__3185.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3186 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3186))
{var s__3187 = temp__3698__auto____3186;

var x__3188 = f.call(null,cljs.core.first.call(null,s__3187));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3188)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3187));
} else
{return cljs.core.cons.call(null,x__3188,keep.call(null,f,cljs.core.rest.call(null,s__3187)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3198 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3195 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3195))
{var s__3196 = temp__3698__auto____3195;

var x__3197 = f.call(null,idx,cljs.core.first.call(null,s__3196));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3197)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3196));
} else
{return cljs.core.cons.call(null,x__3197,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3196)));
}
} else
{return null;
}
})));
});

return keepi__3198.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3243 = (function (p){
return (function() {
var ep1 = null;
var ep1__3248 = (function (){
return true;
});
var ep1__3249 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3250 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3205 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3205))
{return p.call(null,y);
} else
{return and__3546__auto____3205;
}
})());
});
var ep1__3251 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3206 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3206))
{var and__3546__auto____3207 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3207))
{return p.call(null,z);
} else
{return and__3546__auto____3207;
}
} else
{return and__3546__auto____3206;
}
})());
});
var ep1__3252 = (function() { 
var G__3254__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3208 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3208))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3208;
}
})());
};
var G__3254 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3254__delegate.call(this, x, y, z, args);
};
G__3254.cljs$lang$maxFixedArity = 3;
G__3254.cljs$lang$applyTo = (function (arglist__3255){
var x = cljs.core.first(arglist__3255);
var y = cljs.core.first(cljs.core.next(arglist__3255));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3255)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3255)));
return G__3254__delegate.call(this, x, y, z, args);
});
return G__3254;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3248.call(this);
case  1 :
return ep1__3249.call(this,x);
case  2 :
return ep1__3250.call(this,x,y);
case  3 :
return ep1__3251.call(this,x,y,z);
default:
return ep1__3252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3252.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3244 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3256 = (function (){
return true;
});
var ep2__3257 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3209 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3209))
{return p2.call(null,x);
} else
{return and__3546__auto____3209;
}
})());
});
var ep2__3258 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3210 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3210))
{var and__3546__auto____3211 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3211))
{var and__3546__auto____3212 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3212))
{return p2.call(null,y);
} else
{return and__3546__auto____3212;
}
} else
{return and__3546__auto____3211;
}
} else
{return and__3546__auto____3210;
}
})());
});
var ep2__3259 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3213 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3213))
{var and__3546__auto____3214 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3214))
{var and__3546__auto____3215 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3215))
{var and__3546__auto____3216 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3216))
{var and__3546__auto____3217 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3217))
{return p2.call(null,z);
} else
{return and__3546__auto____3217;
}
} else
{return and__3546__auto____3216;
}
} else
{return and__3546__auto____3215;
}
} else
{return and__3546__auto____3214;
}
} else
{return and__3546__auto____3213;
}
})());
});
var ep2__3260 = (function() { 
var G__3262__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3218 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3218))
{return cljs.core.every_QMARK_.call(null,(function (p1__3189_SHARP_){
var and__3546__auto____3219 = p1.call(null,p1__3189_SHARP_);

if(cljs.core.truth_(and__3546__auto____3219))
{return p2.call(null,p1__3189_SHARP_);
} else
{return and__3546__auto____3219;
}
}),args);
} else
{return and__3546__auto____3218;
}
})());
};
var G__3262 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3262__delegate.call(this, x, y, z, args);
};
G__3262.cljs$lang$maxFixedArity = 3;
G__3262.cljs$lang$applyTo = (function (arglist__3263){
var x = cljs.core.first(arglist__3263);
var y = cljs.core.first(cljs.core.next(arglist__3263));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3263)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3263)));
return G__3262__delegate.call(this, x, y, z, args);
});
return G__3262;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3256.call(this);
case  1 :
return ep2__3257.call(this,x);
case  2 :
return ep2__3258.call(this,x,y);
case  3 :
return ep2__3259.call(this,x,y,z);
default:
return ep2__3260.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3260.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3245 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3264 = (function (){
return true;
});
var ep3__3265 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3220 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3220))
{var and__3546__auto____3221 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3221))
{return p3.call(null,x);
} else
{return and__3546__auto____3221;
}
} else
{return and__3546__auto____3220;
}
})());
});
var ep3__3266 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3222 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3222))
{var and__3546__auto____3223 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3223))
{var and__3546__auto____3224 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3224))
{var and__3546__auto____3225 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3225))
{var and__3546__auto____3226 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3226))
{return p3.call(null,y);
} else
{return and__3546__auto____3226;
}
} else
{return and__3546__auto____3225;
}
} else
{return and__3546__auto____3224;
}
} else
{return and__3546__auto____3223;
}
} else
{return and__3546__auto____3222;
}
})());
});
var ep3__3267 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3227 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3227))
{var and__3546__auto____3228 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3228))
{var and__3546__auto____3229 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3229))
{var and__3546__auto____3230 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3230))
{var and__3546__auto____3231 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3231))
{var and__3546__auto____3232 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3232))
{var and__3546__auto____3233 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3233))
{var and__3546__auto____3234 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3234))
{return p3.call(null,z);
} else
{return and__3546__auto____3234;
}
} else
{return and__3546__auto____3233;
}
} else
{return and__3546__auto____3232;
}
} else
{return and__3546__auto____3231;
}
} else
{return and__3546__auto____3230;
}
} else
{return and__3546__auto____3229;
}
} else
{return and__3546__auto____3228;
}
} else
{return and__3546__auto____3227;
}
})());
});
var ep3__3268 = (function() { 
var G__3270__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3235 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3235))
{return cljs.core.every_QMARK_.call(null,(function (p1__3190_SHARP_){
var and__3546__auto____3236 = p1.call(null,p1__3190_SHARP_);

if(cljs.core.truth_(and__3546__auto____3236))
{var and__3546__auto____3237 = p2.call(null,p1__3190_SHARP_);

if(cljs.core.truth_(and__3546__auto____3237))
{return p3.call(null,p1__3190_SHARP_);
} else
{return and__3546__auto____3237;
}
} else
{return and__3546__auto____3236;
}
}),args);
} else
{return and__3546__auto____3235;
}
})());
};
var G__3270 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3270__delegate.call(this, x, y, z, args);
};
G__3270.cljs$lang$maxFixedArity = 3;
G__3270.cljs$lang$applyTo = (function (arglist__3271){
var x = cljs.core.first(arglist__3271);
var y = cljs.core.first(cljs.core.next(arglist__3271));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3271)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3271)));
return G__3270__delegate.call(this, x, y, z, args);
});
return G__3270;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3264.call(this);
case  1 :
return ep3__3265.call(this,x);
case  2 :
return ep3__3266.call(this,x,y);
case  3 :
return ep3__3267.call(this,x,y,z);
default:
return ep3__3268.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3268.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3246 = (function() { 
var G__3272__delegate = function (p1,p2,p3,ps){
var ps__3238 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3273 = (function (){
return true;
});
var epn__3274 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3191_SHARP_){
return p1__3191_SHARP_.call(null,x);
}),ps__3238);
});
var epn__3275 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3192_SHARP_){
var and__3546__auto____3239 = p1__3192_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3239))
{return p1__3192_SHARP_.call(null,y);
} else
{return and__3546__auto____3239;
}
}),ps__3238);
});
var epn__3276 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3193_SHARP_){
var and__3546__auto____3240 = p1__3193_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3240))
{var and__3546__auto____3241 = p1__3193_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3241))
{return p1__3193_SHARP_.call(null,z);
} else
{return and__3546__auto____3241;
}
} else
{return and__3546__auto____3240;
}
}),ps__3238);
});
var epn__3277 = (function() { 
var G__3279__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3242 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3242))
{return cljs.core.every_QMARK_.call(null,(function (p1__3194_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3194_SHARP_,args);
}),ps__3238);
} else
{return and__3546__auto____3242;
}
})());
};
var G__3279 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3279__delegate.call(this, x, y, z, args);
};
G__3279.cljs$lang$maxFixedArity = 3;
G__3279.cljs$lang$applyTo = (function (arglist__3280){
var x = cljs.core.first(arglist__3280);
var y = cljs.core.first(cljs.core.next(arglist__3280));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3280)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3280)));
return G__3279__delegate.call(this, x, y, z, args);
});
return G__3279;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3273.call(this);
case  1 :
return epn__3274.call(this,x);
case  2 :
return epn__3275.call(this,x,y);
case  3 :
return epn__3276.call(this,x,y,z);
default:
return epn__3277.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3277.cljs$lang$applyTo;
return epn;
})()
};
var G__3272 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3272__delegate.call(this, p1, p2, p3, ps);
};
G__3272.cljs$lang$maxFixedArity = 3;
G__3272.cljs$lang$applyTo = (function (arglist__3281){
var p1 = cljs.core.first(arglist__3281);
var p2 = cljs.core.first(cljs.core.next(arglist__3281));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3281)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3281)));
return G__3272__delegate.call(this, p1, p2, p3, ps);
});
return G__3272;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3243.call(this,p1);
case  2 :
return every_pred__3244.call(this,p1,p2);
case  3 :
return every_pred__3245.call(this,p1,p2,p3);
default:
return every_pred__3246.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3246.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3321 = (function (p){
return (function() {
var sp1 = null;
var sp1__3326 = (function (){
return null;
});
var sp1__3327 = (function (x){
return p.call(null,x);
});
var sp1__3328 = (function (x,y){
var or__3548__auto____3283 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3283))
{return or__3548__auto____3283;
} else
{return p.call(null,y);
}
});
var sp1__3329 = (function (x,y,z){
var or__3548__auto____3284 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3284))
{return or__3548__auto____3284;
} else
{var or__3548__auto____3285 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3285))
{return or__3548__auto____3285;
} else
{return p.call(null,z);
}
}
});
var sp1__3330 = (function() { 
var G__3332__delegate = function (x,y,z,args){
var or__3548__auto____3286 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3286))
{return or__3548__auto____3286;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3332 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3332__delegate.call(this, x, y, z, args);
};
G__3332.cljs$lang$maxFixedArity = 3;
G__3332.cljs$lang$applyTo = (function (arglist__3333){
var x = cljs.core.first(arglist__3333);
var y = cljs.core.first(cljs.core.next(arglist__3333));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3333)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3333)));
return G__3332__delegate.call(this, x, y, z, args);
});
return G__3332;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3326.call(this);
case  1 :
return sp1__3327.call(this,x);
case  2 :
return sp1__3328.call(this,x,y);
case  3 :
return sp1__3329.call(this,x,y,z);
default:
return sp1__3330.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3330.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3322 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3334 = (function (){
return null;
});
var sp2__3335 = (function (x){
var or__3548__auto____3287 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3287))
{return or__3548__auto____3287;
} else
{return p2.call(null,x);
}
});
var sp2__3336 = (function (x,y){
var or__3548__auto____3288 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3288))
{return or__3548__auto____3288;
} else
{var or__3548__auto____3289 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3289))
{return or__3548__auto____3289;
} else
{var or__3548__auto____3290 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3290))
{return or__3548__auto____3290;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3337 = (function (x,y,z){
var or__3548__auto____3291 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3291))
{return or__3548__auto____3291;
} else
{var or__3548__auto____3292 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3292))
{return or__3548__auto____3292;
} else
{var or__3548__auto____3293 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3293))
{return or__3548__auto____3293;
} else
{var or__3548__auto____3294 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3294))
{return or__3548__auto____3294;
} else
{var or__3548__auto____3295 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3295))
{return or__3548__auto____3295;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3338 = (function() { 
var G__3340__delegate = function (x,y,z,args){
var or__3548__auto____3296 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3296))
{return or__3548__auto____3296;
} else
{return cljs.core.some.call(null,(function (p1__3199_SHARP_){
var or__3548__auto____3297 = p1.call(null,p1__3199_SHARP_);

if(cljs.core.truth_(or__3548__auto____3297))
{return or__3548__auto____3297;
} else
{return p2.call(null,p1__3199_SHARP_);
}
}),args);
}
};
var G__3340 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3340__delegate.call(this, x, y, z, args);
};
G__3340.cljs$lang$maxFixedArity = 3;
G__3340.cljs$lang$applyTo = (function (arglist__3341){
var x = cljs.core.first(arglist__3341);
var y = cljs.core.first(cljs.core.next(arglist__3341));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3341)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3341)));
return G__3340__delegate.call(this, x, y, z, args);
});
return G__3340;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3334.call(this);
case  1 :
return sp2__3335.call(this,x);
case  2 :
return sp2__3336.call(this,x,y);
case  3 :
return sp2__3337.call(this,x,y,z);
default:
return sp2__3338.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3338.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3323 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3342 = (function (){
return null;
});
var sp3__3343 = (function (x){
var or__3548__auto____3298 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3298))
{return or__3548__auto____3298;
} else
{var or__3548__auto____3299 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3299))
{return or__3548__auto____3299;
} else
{return p3.call(null,x);
}
}
});
var sp3__3344 = (function (x,y){
var or__3548__auto____3300 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3300))
{return or__3548__auto____3300;
} else
{var or__3548__auto____3301 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3301))
{return or__3548__auto____3301;
} else
{var or__3548__auto____3302 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3302))
{return or__3548__auto____3302;
} else
{var or__3548__auto____3303 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3303))
{return or__3548__auto____3303;
} else
{var or__3548__auto____3304 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3304))
{return or__3548__auto____3304;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3345 = (function (x,y,z){
var or__3548__auto____3305 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3305))
{return or__3548__auto____3305;
} else
{var or__3548__auto____3306 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3306))
{return or__3548__auto____3306;
} else
{var or__3548__auto____3307 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3307))
{return or__3548__auto____3307;
} else
{var or__3548__auto____3308 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3308))
{return or__3548__auto____3308;
} else
{var or__3548__auto____3309 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3309))
{return or__3548__auto____3309;
} else
{var or__3548__auto____3310 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3310))
{return or__3548__auto____3310;
} else
{var or__3548__auto____3311 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3311))
{return or__3548__auto____3311;
} else
{var or__3548__auto____3312 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3312))
{return or__3548__auto____3312;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3346 = (function() { 
var G__3348__delegate = function (x,y,z,args){
var or__3548__auto____3313 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3313))
{return or__3548__auto____3313;
} else
{return cljs.core.some.call(null,(function (p1__3200_SHARP_){
var or__3548__auto____3314 = p1.call(null,p1__3200_SHARP_);

if(cljs.core.truth_(or__3548__auto____3314))
{return or__3548__auto____3314;
} else
{var or__3548__auto____3315 = p2.call(null,p1__3200_SHARP_);

if(cljs.core.truth_(or__3548__auto____3315))
{return or__3548__auto____3315;
} else
{return p3.call(null,p1__3200_SHARP_);
}
}
}),args);
}
};
var G__3348 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3348__delegate.call(this, x, y, z, args);
};
G__3348.cljs$lang$maxFixedArity = 3;
G__3348.cljs$lang$applyTo = (function (arglist__3349){
var x = cljs.core.first(arglist__3349);
var y = cljs.core.first(cljs.core.next(arglist__3349));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3349)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3349)));
return G__3348__delegate.call(this, x, y, z, args);
});
return G__3348;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3342.call(this);
case  1 :
return sp3__3343.call(this,x);
case  2 :
return sp3__3344.call(this,x,y);
case  3 :
return sp3__3345.call(this,x,y,z);
default:
return sp3__3346.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3346.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3324 = (function() { 
var G__3350__delegate = function (p1,p2,p3,ps){
var ps__3316 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3351 = (function (){
return null;
});
var spn__3352 = (function (x){
return cljs.core.some.call(null,(function (p1__3201_SHARP_){
return p1__3201_SHARP_.call(null,x);
}),ps__3316);
});
var spn__3353 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3202_SHARP_){
var or__3548__auto____3317 = p1__3202_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3317))
{return or__3548__auto____3317;
} else
{return p1__3202_SHARP_.call(null,y);
}
}),ps__3316);
});
var spn__3354 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3203_SHARP_){
var or__3548__auto____3318 = p1__3203_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3318))
{return or__3548__auto____3318;
} else
{var or__3548__auto____3319 = p1__3203_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3319))
{return or__3548__auto____3319;
} else
{return p1__3203_SHARP_.call(null,z);
}
}
}),ps__3316);
});
var spn__3355 = (function() { 
var G__3357__delegate = function (x,y,z,args){
var or__3548__auto____3320 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3320))
{return or__3548__auto____3320;
} else
{return cljs.core.some.call(null,(function (p1__3204_SHARP_){
return cljs.core.some.call(null,p1__3204_SHARP_,args);
}),ps__3316);
}
};
var G__3357 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3357__delegate.call(this, x, y, z, args);
};
G__3357.cljs$lang$maxFixedArity = 3;
G__3357.cljs$lang$applyTo = (function (arglist__3358){
var x = cljs.core.first(arglist__3358);
var y = cljs.core.first(cljs.core.next(arglist__3358));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3358)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3358)));
return G__3357__delegate.call(this, x, y, z, args);
});
return G__3357;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3351.call(this);
case  1 :
return spn__3352.call(this,x);
case  2 :
return spn__3353.call(this,x,y);
case  3 :
return spn__3354.call(this,x,y,z);
default:
return spn__3355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3355.cljs$lang$applyTo;
return spn;
})()
};
var G__3350 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3350__delegate.call(this, p1, p2, p3, ps);
};
G__3350.cljs$lang$maxFixedArity = 3;
G__3350.cljs$lang$applyTo = (function (arglist__3359){
var p1 = cljs.core.first(arglist__3359);
var p2 = cljs.core.first(cljs.core.next(arglist__3359));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3359)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3359)));
return G__3350__delegate.call(this, p1, p2, p3, ps);
});
return G__3350;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3321.call(this,p1);
case  2 :
return some_fn__3322.call(this,p1,p2);
case  3 :
return some_fn__3323.call(this,p1,p2,p3);
default:
return some_fn__3324.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3324.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3372 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3360 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3360))
{var s__3361 = temp__3698__auto____3360;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3361)),map.call(null,f,cljs.core.rest.call(null,s__3361)));
} else
{return null;
}
})));
});
var map__3373 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3362 = cljs.core.seq.call(null,c1);
var s2__3363 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3364 = s1__3362;

if(cljs.core.truth_(and__3546__auto____3364))
{return s2__3363;
} else
{return and__3546__auto____3364;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3362),cljs.core.first.call(null,s2__3363)),map.call(null,f,cljs.core.rest.call(null,s1__3362),cljs.core.rest.call(null,s2__3363)));
} else
{return null;
}
})));
});
var map__3374 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3365 = cljs.core.seq.call(null,c1);
var s2__3366 = cljs.core.seq.call(null,c2);
var s3__3367 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3368 = s1__3365;

if(cljs.core.truth_(and__3546__auto____3368))
{var and__3546__auto____3369 = s2__3366;

if(cljs.core.truth_(and__3546__auto____3369))
{return s3__3367;
} else
{return and__3546__auto____3369;
}
} else
{return and__3546__auto____3368;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3365),cljs.core.first.call(null,s2__3366),cljs.core.first.call(null,s3__3367)),map.call(null,f,cljs.core.rest.call(null,s1__3365),cljs.core.rest.call(null,s2__3366),cljs.core.rest.call(null,s3__3367)));
} else
{return null;
}
})));
});
var map__3375 = (function() { 
var G__3377__delegate = function (f,c1,c2,c3,colls){
var step__3371 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3370 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3370)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3370),step.call(null,map.call(null,cljs.core.rest,ss__3370)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3282_SHARP_){
return cljs.core.apply.call(null,f,p1__3282_SHARP_);
}),step__3371.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3377 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3377__delegate.call(this, f, c1, c2, c3, colls);
};
G__3377.cljs$lang$maxFixedArity = 4;
G__3377.cljs$lang$applyTo = (function (arglist__3378){
var f = cljs.core.first(arglist__3378);
var c1 = cljs.core.first(cljs.core.next(arglist__3378));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3378)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3378))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3378))));
return G__3377__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3377;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3372.call(this,f,c1);
case  3 :
return map__3373.call(this,f,c1,c2);
case  4 :
return map__3374.call(this,f,c1,c2,c3);
default:
return map__3375.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3375.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3379 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3379))
{var s__3380 = temp__3698__auto____3379;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3380),take.call(null,(n - 1),cljs.core.rest.call(null,s__3380)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3383 = (function (n,coll){
while(true){
var s__3381 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3382 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3382))
{return s__3381;
} else
{return and__3546__auto____3382;
}
})()))
{{
var G__3384 = (n - 1);
var G__3385 = cljs.core.rest.call(null,s__3381);
n = G__3384;
coll = G__3385;
continue;
}
} else
{return s__3381;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3383.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3386 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3387 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3386.call(this,n);
case  2 :
return drop_last__3387.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3389 = cljs.core.seq.call(null,coll);
var lead__3390 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3390))
{{
var G__3391 = cljs.core.next.call(null,s__3389);
var G__3392 = cljs.core.next.call(null,lead__3390);
s__3389 = G__3391;
lead__3390 = G__3392;
continue;
}
} else
{return s__3389;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3395 = (function (pred,coll){
while(true){
var s__3393 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3394 = s__3393;

if(cljs.core.truth_(and__3546__auto____3394))
{return pred.call(null,cljs.core.first.call(null,s__3393));
} else
{return and__3546__auto____3394;
}
})()))
{{
var G__3396 = pred;
var G__3397 = cljs.core.rest.call(null,s__3393);
pred = G__3396;
coll = G__3397;
continue;
}
} else
{return s__3393;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3395.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3398 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3398))
{var s__3399 = temp__3698__auto____3398;

return cljs.core.concat.call(null,s__3399,cycle.call(null,s__3399));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3400 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3401 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3400.call(this,n);
case  2 :
return repeat__3401.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3403 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3404 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3403.call(this,n);
case  2 :
return repeatedly__3404.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3410 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3406 = cljs.core.seq.call(null,c1);
var s2__3407 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3408 = s1__3406;

if(cljs.core.truth_(and__3546__auto____3408))
{return s2__3407;
} else
{return and__3546__auto____3408;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3406),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3407),interleave.call(null,cljs.core.rest.call(null,s1__3406),cljs.core.rest.call(null,s2__3407))));
} else
{return null;
}
})));
});
var interleave__3411 = (function() { 
var G__3413__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3409 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3409)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3409),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3409)));
} else
{return null;
}
})));
};
var G__3413 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3413__delegate.call(this, c1, c2, colls);
};
G__3413.cljs$lang$maxFixedArity = 2;
G__3413.cljs$lang$applyTo = (function (arglist__3414){
var c1 = cljs.core.first(arglist__3414);
var c2 = cljs.core.first(cljs.core.next(arglist__3414));
var colls = cljs.core.rest(cljs.core.next(arglist__3414));
return G__3413__delegate.call(this, c1, c2, colls);
});
return G__3413;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3410.call(this,c1,c2);
default:
return interleave__3411.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3411.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3417 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3415 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3415))
{var coll__3416 = temp__3695__auto____3415;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3416),cat.call(null,cljs.core.rest.call(null,coll__3416),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3417.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3418 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3419 = (function() { 
var G__3421__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3421 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3421__delegate.call(this, f, coll, colls);
};
G__3421.cljs$lang$maxFixedArity = 2;
G__3421.cljs$lang$applyTo = (function (arglist__3422){
var f = cljs.core.first(arglist__3422);
var coll = cljs.core.first(cljs.core.next(arglist__3422));
var colls = cljs.core.rest(cljs.core.next(arglist__3422));
return G__3421__delegate.call(this, f, coll, colls);
});
return G__3421;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3418.call(this,f,coll);
default:
return mapcat__3419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3419.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3423 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3423))
{var s__3424 = temp__3698__auto____3423;

var f__3425 = cljs.core.first.call(null,s__3424);
var r__3426 = cljs.core.rest.call(null,s__3424);

if(cljs.core.truth_(pred.call(null,f__3425)))
{return cljs.core.cons.call(null,f__3425,filter.call(null,pred,r__3426));
} else
{return filter.call(null,pred,r__3426);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3428 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3428.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3427_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3427_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3435 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3436 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3429 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3429))
{var s__3430 = temp__3698__auto____3429;

var p__3431 = cljs.core.take.call(null,n,s__3430);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3431))))
{return cljs.core.cons.call(null,p__3431,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3430)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3437 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3432 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3432))
{var s__3433 = temp__3698__auto____3432;

var p__3434 = cljs.core.take.call(null,n,s__3433);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3434))))
{return cljs.core.cons.call(null,p__3434,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3433)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3434,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3435.call(this,n,step);
case  3 :
return partition__3436.call(this,n,step,pad);
case  4 :
return partition__3437.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3443 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3444 = (function (m,ks,not_found){
var sentinel__3439 = cljs.core.lookup_sentinel;
var m__3440 = m;
var ks__3441 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3441))
{var m__3442 = cljs.core.get.call(null,m__3440,cljs.core.first.call(null,ks__3441),sentinel__3439);

if(cljs.core.truth_((sentinel__3439 === m__3442)))
{return not_found;
} else
{{
var G__3446 = sentinel__3439;
var G__3447 = m__3442;
var G__3448 = cljs.core.next.call(null,ks__3441);
sentinel__3439 = G__3446;
m__3440 = G__3447;
ks__3441 = G__3448;
continue;
}
}
} else
{return m__3440;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3443.call(this,m,ks);
case  3 :
return get_in__3444.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3449,v){
var vec__3450__3451 = p__3449;
var k__3452 = cljs.core.nth.call(null,vec__3450__3451,0,null);
var ks__3453 = cljs.core.nthnext.call(null,vec__3450__3451,1);

if(cljs.core.truth_(ks__3453))
{return cljs.core.assoc.call(null,m,k__3452,assoc_in.call(null,cljs.core.get.call(null,m,k__3452),ks__3453,v));
} else
{return cljs.core.assoc.call(null,m,k__3452,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3454,f,args){
var vec__3455__3456 = p__3454;
var k__3457 = cljs.core.nth.call(null,vec__3455__3456,0,null);
var ks__3458 = cljs.core.nthnext.call(null,vec__3455__3456,1);

if(cljs.core.truth_(ks__3458))
{return cljs.core.assoc.call(null,m,k__3457,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3457),ks__3458,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3457,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3457),args));
}
};
var update_in = function (m,p__3454,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3454, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3459){
var m = cljs.core.first(arglist__3459);
var p__3454 = cljs.core.first(cljs.core.next(arglist__3459));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3459)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3459)));
return update_in__delegate.call(this, m, p__3454, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3460 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3485 = null;
var G__3485__3486 = (function (coll,k){
var this__3461 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3485__3487 = (function (coll,k,not_found){
var this__3462 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3485 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3485__3486.call(this,coll,k);
case  3 :
return G__3485__3487.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3485;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3463 = this;
var new_array__3464 = cljs.core.aclone.call(null,this__3463.array);

(new_array__3464[k] = v);
return (new cljs.core.Vector(this__3463.meta,new_array__3464));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3465 = this;
var new_array__3466 = cljs.core.aclone.call(null,this__3465.array);

new_array__3466.push(o);
return (new cljs.core.Vector(this__3465.meta,new_array__3466));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3489 = null;
var G__3489__3490 = (function (v,f){
var this__3467 = this;
return cljs.core.ci_reduce.call(null,this__3467.array,f);
});
var G__3489__3491 = (function (v,f,start){
var this__3468 = this;
return cljs.core.ci_reduce.call(null,this__3468.array,f,start);
});
G__3489 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3489__3490.call(this,v,f);
case  3 :
return G__3489__3491.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3489;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3469 = this;
if(cljs.core.truth_((this__3469.array.length > 0)))
{var vector_seq__3470 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3469.array.length)))
{return cljs.core.cons.call(null,(this__3469.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3470.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3471 = this;
return this__3471.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3472 = this;
var count__3473 = this__3472.array.length;

if(cljs.core.truth_((count__3473 > 0)))
{return (this__3472.array[(count__3473 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3474 = this;
if(cljs.core.truth_((this__3474.array.length > 0)))
{var new_array__3475 = cljs.core.aclone.call(null,this__3474.array);

new_array__3475.pop();
return (new cljs.core.Vector(this__3474.meta,new_array__3475));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3476 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3477 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3478 = this;
return (new cljs.core.Vector(meta,this__3478.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3479 = this;
return this__3479.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3493 = null;
var G__3493__3494 = (function (coll,n){
var this__3480 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3481 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3481))
{return (n < this__3480.array.length);
} else
{return and__3546__auto____3481;
}
})()))
{return (this__3480.array[n]);
} else
{return null;
}
});
var G__3493__3495 = (function (coll,n,not_found){
var this__3482 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3483 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3483))
{return (n < this__3482.array.length);
} else
{return and__3546__auto____3483;
}
})()))
{return (this__3482.array[n]);
} else
{return not_found;
}
});
G__3493 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3493__3494.call(this,coll,n);
case  3 :
return G__3493__3495.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3493;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3484 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3484.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3497 = null;
var G__3497__3498 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3497__3499 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3497 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3497__3498.call(this,_,k);
case  3 :
return G__3497__3499.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3497;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3501){
var args = cljs.core.seq( arglist__3501 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3502 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3522 = null;
var G__3522__3523 = (function (coll,k){
var this__3503 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3522__3524 = (function (coll,k,not_found){
var this__3504 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3522 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3522__3523.call(this,coll,k);
case  3 :
return G__3522__3524.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3522;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__3505 = this;
var v_pos__3506 = (this__3505.start + key);

return (new cljs.core.Subvec(this__3505.meta,cljs.core._assoc.call(null,this__3505.v,v_pos__3506,val),this__3505.start,((this__3505.end > (v_pos__3506 + 1)) ? this__3505.end : (v_pos__3506 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3507 = this;
return (new cljs.core.Subvec(this__3507.meta,cljs.core._assoc_n.call(null,this__3507.v,this__3507.end,o),this__3507.start,(this__3507.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3526 = null;
var G__3526__3527 = (function (coll,f){
var this__3508 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__3526__3528 = (function (coll,f,start){
var this__3509 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__3526 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3526__3527.call(this,coll,f);
case  3 :
return G__3526__3528.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3526;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3510 = this;
var subvec_seq__3511 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__3510.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__3510.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__3511.call(null,this__3510.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3512 = this;
return (this__3512.end - this__3512.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3513 = this;
return cljs.core._nth.call(null,this__3513.v,(this__3513.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3514 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__3514.start,this__3514.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__3514.meta,this__3514.v,this__3514.start,(this__3514.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3515 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3516 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3517 = this;
return (new cljs.core.Subvec(meta,this__3517.v,this__3517.start,this__3517.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3518 = this;
return this__3518.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3530 = null;
var G__3530__3531 = (function (coll,n){
var this__3519 = this;
return cljs.core._nth.call(null,this__3519.v,(this__3519.start + n));
});
var G__3530__3532 = (function (coll,n,not_found){
var this__3520 = this;
return cljs.core._nth.call(null,this__3520.v,(this__3520.start + n),not_found);
});
G__3530 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3530__3531.call(this,coll,n);
case  3 :
return G__3530__3532.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3530;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3521 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3521.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__3534 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3535 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__3534.call(this,v,start);
case  3 :
return subvec__3535.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__3537 = null;
var G__3537__3538 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3537__3539 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3537 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3537__3538.call(this,_,k);
case  3 :
return G__3537__3539.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3537;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3541 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3542 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3543 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3544 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3544.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3545 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3546 = this;
return cljs.core._first.call(null,this__3546.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3547 = this;
var temp__3695__auto____3548 = cljs.core.next.call(null,this__3547.front);

if(cljs.core.truth_(temp__3695__auto____3548))
{var f1__3549 = temp__3695__auto____3548;

return (new cljs.core.PersistentQueueSeq(this__3547.meta,f1__3549,this__3547.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__3547.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__3547.meta,this__3547.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3550 = this;
return this__3550.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3551 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__3551.front,this__3551.rear));
});

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3552 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3553 = this;
if(cljs.core.truth_(this__3553.front))
{return (new cljs.core.PersistentQueue(this__3553.meta,(this__3553.count + 1),this__3553.front,cljs.core.conj.call(null,(function (){var or__3548__auto____3554 = this__3553.rear;

if(cljs.core.truth_(or__3548__auto____3554))
{return or__3548__auto____3554;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__3553.meta,(this__3553.count + 1),cljs.core.conj.call(null,this__3553.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3555 = this;
var rear__3556 = cljs.core.seq.call(null,this__3555.rear);

if(cljs.core.truth_((function (){var or__3548__auto____3557 = this__3555.front;

if(cljs.core.truth_(or__3548__auto____3557))
{return or__3548__auto____3557;
} else
{return rear__3556;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__3555.front,cljs.core.seq.call(null,rear__3556)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3558 = this;
return this__3558.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3559 = this;
return cljs.core._first.call(null,this__3559.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3560 = this;
if(cljs.core.truth_(this__3560.front))
{var temp__3695__auto____3561 = cljs.core.next.call(null,this__3560.front);

if(cljs.core.truth_(temp__3695__auto____3561))
{var f1__3562 = temp__3695__auto____3561;

return (new cljs.core.PersistentQueue(this__3560.meta,(this__3560.count - 1),f1__3562,this__3560.rear));
} else
{return (new cljs.core.PersistentQueue(this__3560.meta,(this__3560.count - 1),cljs.core.seq.call(null,this__3560.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3563 = this;
return cljs.core.first.call(null,this__3563.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3564 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3565 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3566 = this;
return (new cljs.core.PersistentQueue(meta,this__3566.count,this__3566.front,this__3566.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3567 = this;
return this__3567.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3568 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3569 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3570 = array.length;

var i__3571 = 0;

while(true){
if(cljs.core.truth_((i__3571 < len__3570)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3571]))))
{return i__3571;
} else
{{
var G__3572 = (i__3571 + incr);
i__3571 = G__3572;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3574 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3575 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3573 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3573))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3573;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3574.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3575.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3578 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3597 = null;
var G__3597__3598 = (function (coll,k){
var this__3579 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3597__3599 = (function (coll,k,not_found){
var this__3580 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3580.strobj,(this__3580.strobj[k]),not_found);
});
G__3597 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3597__3598.call(this,coll,k);
case  3 :
return G__3597__3599.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3597;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3581 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3582 = goog.object.clone.call(null,this__3581.strobj);
var overwrite_QMARK___3583 = new_strobj__3582.hasOwnProperty(k);

(new_strobj__3582[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3583))
{return (new cljs.core.ObjMap(this__3581.meta,this__3581.keys,new_strobj__3582));
} else
{var new_keys__3584 = cljs.core.aclone.call(null,this__3581.keys);

new_keys__3584.push(k);
return (new cljs.core.ObjMap(this__3581.meta,new_keys__3584,new_strobj__3582));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3581.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3585 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3585.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3586 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3587 = this;
if(cljs.core.truth_((this__3587.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3577_SHARP_){
return cljs.core.vector.call(null,p1__3577_SHARP_,(this__3587.strobj[p1__3577_SHARP_]));
}),this__3587.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3588 = this;
return this__3588.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3589 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3590 = this;
return (new cljs.core.ObjMap(meta,this__3590.keys,this__3590.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3591 = this;
return this__3591.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3592 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3592.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3593 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3594 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3594))
{return this__3593.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3594;
}
})()))
{var new_keys__3595 = cljs.core.aclone.call(null,this__3593.keys);
var new_strobj__3596 = goog.object.clone.call(null,this__3593.strobj);

new_keys__3595.splice(cljs.core.scan_array.call(null,1,k,new_keys__3595),1);
cljs.core.js_delete.call(null,new_strobj__3596,k);
return (new cljs.core.ObjMap(this__3593.meta,new_keys__3595,new_strobj__3596));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3602 = null;
var G__3602__3603 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3602__3604 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3602 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3602__3603.call(this,_,k);
case  3 :
return G__3602__3604.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3602;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3606 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3636 = null;
var G__3636__3637 = (function (coll,k){
var this__3607 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3636__3638 = (function (coll,k,not_found){
var this__3608 = this;
var bucket__3609 = (this__3608.hashobj[cljs.core.hash.call(null,k)]);
var i__3610 = (cljs.core.truth_(bucket__3609)?cljs.core.scan_array.call(null,2,k,bucket__3609):null);

if(cljs.core.truth_(i__3610))
{return (bucket__3609[(i__3610 + 1)]);
} else
{return not_found;
}
});
G__3636 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3636__3637.call(this,coll,k);
case  3 :
return G__3636__3638.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3636;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3611 = this;
var h__3612 = cljs.core.hash.call(null,k);
var bucket__3613 = (this__3611.hashobj[h__3612]);

if(cljs.core.truth_(bucket__3613))
{var new_bucket__3614 = cljs.core.aclone.call(null,bucket__3613);
var new_hashobj__3615 = goog.object.clone.call(null,this__3611.hashobj);

(new_hashobj__3615[h__3612] = new_bucket__3614);
var temp__3695__auto____3616 = cljs.core.scan_array.call(null,2,k,new_bucket__3614);

if(cljs.core.truth_(temp__3695__auto____3616))
{var i__3617 = temp__3695__auto____3616;

(new_bucket__3614[(i__3617 + 1)] = v);
return (new cljs.core.HashMap(this__3611.meta,this__3611.count,new_hashobj__3615));
} else
{new_bucket__3614.push(k,v);
return (new cljs.core.HashMap(this__3611.meta,(this__3611.count + 1),new_hashobj__3615));
}
} else
{var new_hashobj__3618 = goog.object.clone.call(null,this__3611.hashobj);

(new_hashobj__3618[h__3612] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3611.meta,(this__3611.count + 1),new_hashobj__3618));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3619 = this;
var bucket__3620 = (this__3619.hashobj[cljs.core.hash.call(null,k)]);
var i__3621 = (cljs.core.truth_(bucket__3620)?cljs.core.scan_array.call(null,2,k,bucket__3620):null);

if(cljs.core.truth_(i__3621))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3622 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3623 = this;
if(cljs.core.truth_((this__3623.count > 0)))
{var hashes__3624 = cljs.core.js_keys.call(null,this__3623.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3601_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3623.hashobj[p1__3601_SHARP_])));
}),hashes__3624);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3625 = this;
return this__3625.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3626 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3627 = this;
return (new cljs.core.HashMap(meta,this__3627.count,this__3627.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3628 = this;
return this__3628.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3629 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3629.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3630 = this;
var h__3631 = cljs.core.hash.call(null,k);
var bucket__3632 = (this__3630.hashobj[h__3631]);
var i__3633 = (cljs.core.truth_(bucket__3632)?cljs.core.scan_array.call(null,2,k,bucket__3632):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3633)))
{return coll;
} else
{var new_hashobj__3634 = goog.object.clone.call(null,this__3630.hashobj);

if(cljs.core.truth_((3 > bucket__3632.length)))
{cljs.core.js_delete.call(null,new_hashobj__3634,h__3631);
} else
{var new_bucket__3635 = cljs.core.aclone.call(null,bucket__3632);

new_bucket__3635.splice(i__3633,2);
(new_hashobj__3634[h__3631] = new_bucket__3635);
}
return (new cljs.core.HashMap(this__3630.meta,(this__3630.count - 1),new_hashobj__3634));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3640 = ks.length;

var i__3641 = 0;
var out__3642 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3641 < len__3640)))
{{
var G__3643 = (i__3641 + 1);
var G__3644 = cljs.core.assoc.call(null,out__3642,(ks[i__3641]),(vs[i__3641]));
i__3641 = G__3643;
out__3642 = G__3644;
continue;
}
} else
{return out__3642;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3645 = null;
var G__3645__3646 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3645__3647 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3645 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3645__3646.call(this,_,k);
case  3 :
return G__3645__3647.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3645;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3649 = cljs.core.seq.call(null,keyvals);
var out__3650 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3649))
{{
var G__3651 = cljs.core.nnext.call(null,in$__3649);
var G__3652 = cljs.core.assoc.call(null,out__3650,cljs.core.first.call(null,in$__3649),cljs.core.second.call(null,in$__3649));
in$__3649 = G__3651;
out__3650 = G__3652;
continue;
}
} else
{return out__3650;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3653){
var keyvals = cljs.core.seq( arglist__3653 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3654_SHARP_,p2__3655_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3656 = p1__3654_SHARP_;

if(cljs.core.truth_(or__3548__auto____3656))
{return or__3548__auto____3656;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3655_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3657){
var maps = cljs.core.seq( arglist__3657 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3660 = (function (m,e){
var k__3658 = cljs.core.first.call(null,e);
var v__3659 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3658)))
{return cljs.core.assoc.call(null,m,k__3658,f.call(null,cljs.core.get.call(null,m,k__3658),v__3659));
} else
{return cljs.core.assoc.call(null,m,k__3658,v__3659);
}
});
var merge2__3662 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3660,(function (){var or__3548__auto____3661 = m1;

if(cljs.core.truth_(or__3548__auto____3661))
{return or__3548__auto____3661;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3662,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3663){
var f = cljs.core.first(arglist__3663);
var maps = cljs.core.rest(arglist__3663);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3665 = cljs.core.ObjMap.fromObject([],{});
var keys__3666 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3666))
{var key__3667 = cljs.core.first.call(null,keys__3666);
var entry__3668 = cljs.core.get.call(null,map,key__3667,"﷐'user/not-found");

{
var G__3669 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3668,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3665,key__3667,entry__3668):ret__3665);
var G__3670 = cljs.core.next.call(null,keys__3666);
ret__3665 = G__3669;
keys__3666 = G__3670;
continue;
}
} else
{return ret__3665;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3671 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3684 = null;
var G__3684__3685 = (function (coll,v){
var this__3672 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3684__3686 = (function (coll,v,not_found){
var this__3673 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3673.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3684 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3684__3685.call(this,coll,v);
case  3 :
return G__3684__3686.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3684;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3674 = this;
return (new cljs.core.Set(this__3674.meta,cljs.core.assoc.call(null,this__3674.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3675 = this;
return cljs.core.keys.call(null,this__3675.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3676 = this;
return (new cljs.core.Set(this__3676.meta,cljs.core.dissoc.call(null,this__3676.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3677 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3678 = this;
var and__3546__auto____3679 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3679))
{var and__3546__auto____3680 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3680))
{return cljs.core.every_QMARK_.call(null,(function (p1__3664_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3664_SHARP_);
}),other);
} else
{return and__3546__auto____3680;
}
} else
{return and__3546__auto____3679;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3681 = this;
return (new cljs.core.Set(meta,this__3681.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3682 = this;
return this__3682.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3683 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3683.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3688 = null;
var G__3688__3689 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3688__3690 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3688 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3688__3689.call(this,_,k);
case  3 :
return G__3688__3690.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3688;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3693 = cljs.core.seq.call(null,coll);
var out__3694 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3693))))
{{
var G__3695 = cljs.core.rest.call(null,in$__3693);
var G__3696 = cljs.core.conj.call(null,out__3694,cljs.core.first.call(null,in$__3693));
in$__3693 = G__3695;
out__3694 = G__3696;
continue;
}
} else
{return out__3694;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3697 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3698 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3698))
{var e__3699 = temp__3695__auto____3698;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3699));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3697,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3692_SHARP_){
var temp__3695__auto____3700 = cljs.core.find.call(null,smap,p1__3692_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3700))
{var e__3701 = temp__3695__auto____3700;

return cljs.core.second.call(null,e__3701);
} else
{return p1__3692_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3709 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3702,seen){
while(true){
var vec__3703__3704 = p__3702;
var f__3705 = cljs.core.nth.call(null,vec__3703__3704,0,null);
var xs__3706 = vec__3703__3704;

var temp__3698__auto____3707 = cljs.core.seq.call(null,xs__3706);

if(cljs.core.truth_(temp__3698__auto____3707))
{var s__3708 = temp__3698__auto____3707;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3705)))
{{
var G__3710 = cljs.core.rest.call(null,s__3708);
var G__3711 = seen;
p__3702 = G__3710;
seen = G__3711;
continue;
}
} else
{return cljs.core.cons.call(null,f__3705,step.call(null,cljs.core.rest.call(null,s__3708),cljs.core.conj.call(null,seen,f__3705)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3709.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3712 = cljs.core.Vector.fromArray([]);
var s__3713 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3713)))
{{
var G__3714 = cljs.core.conj.call(null,ret__3712,cljs.core.first.call(null,s__3713));
var G__3715 = cljs.core.next.call(null,s__3713);
ret__3712 = G__3714;
s__3713 = G__3715;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3712);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3716 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3716))
{return or__3548__auto____3716;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3717 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3717 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3717 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3718 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3718))
{return or__3548__auto____3718;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3719 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3719 > -1)))
{return cljs.core.subs.call(null,x,2,i__3719);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3722 = cljs.core.ObjMap.fromObject([],{});
var ks__3723 = cljs.core.seq.call(null,keys);
var vs__3724 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3725 = ks__3723;

if(cljs.core.truth_(and__3546__auto____3725))
{return vs__3724;
} else
{return and__3546__auto____3725;
}
})()))
{{
var G__3726 = cljs.core.assoc.call(null,map__3722,cljs.core.first.call(null,ks__3723),cljs.core.first.call(null,vs__3724));
var G__3727 = cljs.core.next.call(null,ks__3723);
var G__3728 = cljs.core.next.call(null,vs__3724);
map__3722 = G__3726;
ks__3723 = G__3727;
vs__3724 = G__3728;
continue;
}
} else
{return map__3722;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3731 = (function (k,x){
return x;
});
var max_key__3732 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3733 = (function() { 
var G__3735__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3720_SHARP_,p2__3721_SHARP_){
return max_key.call(null,k,p1__3720_SHARP_,p2__3721_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3735 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3735__delegate.call(this, k, x, y, more);
};
G__3735.cljs$lang$maxFixedArity = 3;
G__3735.cljs$lang$applyTo = (function (arglist__3736){
var k = cljs.core.first(arglist__3736);
var x = cljs.core.first(cljs.core.next(arglist__3736));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3736)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3736)));
return G__3735__delegate.call(this, k, x, y, more);
});
return G__3735;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3731.call(this,k,x);
case  3 :
return max_key__3732.call(this,k,x,y);
default:
return max_key__3733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3733.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3737 = (function (k,x){
return x;
});
var min_key__3738 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3739 = (function() { 
var G__3741__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3729_SHARP_,p2__3730_SHARP_){
return min_key.call(null,k,p1__3729_SHARP_,p2__3730_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3741 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3741__delegate.call(this, k, x, y, more);
};
G__3741.cljs$lang$maxFixedArity = 3;
G__3741.cljs$lang$applyTo = (function (arglist__3742){
var k = cljs.core.first(arglist__3742);
var x = cljs.core.first(cljs.core.next(arglist__3742));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3742)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3742)));
return G__3741__delegate.call(this, k, x, y, more);
});
return G__3741;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3737.call(this,k,x);
case  3 :
return min_key__3738.call(this,k,x,y);
default:
return min_key__3739.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3739.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3745 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3746 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3743 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3743))
{var s__3744 = temp__3698__auto____3743;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3744),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3744)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3745.call(this,n,step);
case  3 :
return partition_all__3746.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3748 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3748))
{var s__3749 = temp__3698__auto____3748;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3749))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3749),take_while.call(null,pred,cljs.core.rest.call(null,s__3749)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3750 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3751 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3767 = null;
var G__3767__3768 = (function (rng,f){
var this__3752 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3767__3769 = (function (rng,f,s){
var this__3753 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3767 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3767__3768.call(this,rng,f);
case  3 :
return G__3767__3769.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3767;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3754 = this;
var comp__3755 = (cljs.core.truth_((this__3754.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3755.call(null,this__3754.start,this__3754.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3756 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3756.end - this__3756.start) / this__3756.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3757 = this;
return this__3757.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3758 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3758.meta,(this__3758.start + this__3758.step),this__3758.end,this__3758.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3759 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3760 = this;
return (new cljs.core.Range(meta,this__3760.start,this__3760.end,this__3760.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3761 = this;
return this__3761.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3771 = null;
var G__3771__3772 = (function (rng,n){
var this__3762 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3762.start + (n * this__3762.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3763 = (this__3762.start > this__3762.end);

if(cljs.core.truth_(and__3546__auto____3763))
{return cljs.core._EQ_.call(null,this__3762.step,0);
} else
{return and__3546__auto____3763;
}
})()))
{return this__3762.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3771__3773 = (function (rng,n,not_found){
var this__3764 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3764.start + (n * this__3764.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3765 = (this__3764.start > this__3764.end);

if(cljs.core.truth_(and__3546__auto____3765))
{return cljs.core._EQ_.call(null,this__3764.step,0);
} else
{return and__3546__auto____3765;
}
})()))
{return this__3764.start;
} else
{return not_found;
}
}
});
G__3771 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3771__3772.call(this,rng,n);
case  3 :
return G__3771__3773.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3771;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3766 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3766.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3775 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3776 = (function (end){
return range.call(null,0,end,1);
});
var range__3777 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3778 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3775.call(this);
case  1 :
return range__3776.call(this,start);
case  2 :
return range__3777.call(this,start,end);
case  3 :
return range__3778.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3780 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3780))
{var s__3781 = temp__3698__auto____3780;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3781),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3781)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3783 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3783))
{var s__3784 = temp__3698__auto____3783;

var fst__3785 = cljs.core.first.call(null,s__3784);
var fv__3786 = f.call(null,fst__3785);
var run__3787 = cljs.core.cons.call(null,fst__3785,cljs.core.take_while.call(null,(function (p1__3782_SHARP_){
return cljs.core._EQ_.call(null,fv__3786,f.call(null,p1__3782_SHARP_));
}),cljs.core.next.call(null,s__3784)));

return cljs.core.cons.call(null,run__3787,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3787),s__3784))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3802 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3798 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3798))
{var s__3799 = temp__3695__auto____3798;

return reductions.call(null,f,cljs.core.first.call(null,s__3799),cljs.core.rest.call(null,s__3799));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3803 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3800 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3800))
{var s__3801 = temp__3698__auto____3800;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3801)),cljs.core.rest.call(null,s__3801));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3802.call(this,f,init);
case  3 :
return reductions__3803.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3806 = (function (f){
return (function() {
var G__3811 = null;
var G__3811__3812 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3811__3813 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3811__3814 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3811__3815 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3811__3816 = (function() { 
var G__3818__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3818 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3818__delegate.call(this, x, y, z, args);
};
G__3818.cljs$lang$maxFixedArity = 3;
G__3818.cljs$lang$applyTo = (function (arglist__3819){
var x = cljs.core.first(arglist__3819);
var y = cljs.core.first(cljs.core.next(arglist__3819));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3819)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3819)));
return G__3818__delegate.call(this, x, y, z, args);
});
return G__3818;
})()
;
G__3811 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3811__3812.call(this);
case  1 :
return G__3811__3813.call(this,x);
case  2 :
return G__3811__3814.call(this,x,y);
case  3 :
return G__3811__3815.call(this,x,y,z);
default:
return G__3811__3816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3811.cljs$lang$maxFixedArity = 3;
G__3811.cljs$lang$applyTo = G__3811__3816.cljs$lang$applyTo;
return G__3811;
})()
});
var juxt__3807 = (function (f,g){
return (function() {
var G__3820 = null;
var G__3820__3821 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3820__3822 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3820__3823 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3820__3824 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3820__3825 = (function() { 
var G__3827__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3827 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3827__delegate.call(this, x, y, z, args);
};
G__3827.cljs$lang$maxFixedArity = 3;
G__3827.cljs$lang$applyTo = (function (arglist__3828){
var x = cljs.core.first(arglist__3828);
var y = cljs.core.first(cljs.core.next(arglist__3828));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3828)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3828)));
return G__3827__delegate.call(this, x, y, z, args);
});
return G__3827;
})()
;
G__3820 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3820__3821.call(this);
case  1 :
return G__3820__3822.call(this,x);
case  2 :
return G__3820__3823.call(this,x,y);
case  3 :
return G__3820__3824.call(this,x,y,z);
default:
return G__3820__3825.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3820.cljs$lang$maxFixedArity = 3;
G__3820.cljs$lang$applyTo = G__3820__3825.cljs$lang$applyTo;
return G__3820;
})()
});
var juxt__3808 = (function (f,g,h){
return (function() {
var G__3829 = null;
var G__3829__3830 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3829__3831 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3829__3832 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3829__3833 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3829__3834 = (function() { 
var G__3836__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3836 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3836__delegate.call(this, x, y, z, args);
};
G__3836.cljs$lang$maxFixedArity = 3;
G__3836.cljs$lang$applyTo = (function (arglist__3837){
var x = cljs.core.first(arglist__3837);
var y = cljs.core.first(cljs.core.next(arglist__3837));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3837)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3837)));
return G__3836__delegate.call(this, x, y, z, args);
});
return G__3836;
})()
;
G__3829 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3829__3830.call(this);
case  1 :
return G__3829__3831.call(this,x);
case  2 :
return G__3829__3832.call(this,x,y);
case  3 :
return G__3829__3833.call(this,x,y,z);
default:
return G__3829__3834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3829.cljs$lang$maxFixedArity = 3;
G__3829.cljs$lang$applyTo = G__3829__3834.cljs$lang$applyTo;
return G__3829;
})()
});
var juxt__3809 = (function() { 
var G__3838__delegate = function (f,g,h,fs){
var fs__3805 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3839 = null;
var G__3839__3840 = (function (){
return cljs.core.reduce.call(null,(function (p1__3788_SHARP_,p2__3789_SHARP_){
return cljs.core.conj.call(null,p1__3788_SHARP_,p2__3789_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3805);
});
var G__3839__3841 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3790_SHARP_,p2__3791_SHARP_){
return cljs.core.conj.call(null,p1__3790_SHARP_,p2__3791_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3805);
});
var G__3839__3842 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3792_SHARP_,p2__3793_SHARP_){
return cljs.core.conj.call(null,p1__3792_SHARP_,p2__3793_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3805);
});
var G__3839__3843 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3794_SHARP_,p2__3795_SHARP_){
return cljs.core.conj.call(null,p1__3794_SHARP_,p2__3795_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3805);
});
var G__3839__3844 = (function() { 
var G__3846__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3796_SHARP_,p2__3797_SHARP_){
return cljs.core.conj.call(null,p1__3796_SHARP_,cljs.core.apply.call(null,p2__3797_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3805);
};
var G__3846 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3846__delegate.call(this, x, y, z, args);
};
G__3846.cljs$lang$maxFixedArity = 3;
G__3846.cljs$lang$applyTo = (function (arglist__3847){
var x = cljs.core.first(arglist__3847);
var y = cljs.core.first(cljs.core.next(arglist__3847));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3847)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3847)));
return G__3846__delegate.call(this, x, y, z, args);
});
return G__3846;
})()
;
G__3839 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3839__3840.call(this);
case  1 :
return G__3839__3841.call(this,x);
case  2 :
return G__3839__3842.call(this,x,y);
case  3 :
return G__3839__3843.call(this,x,y,z);
default:
return G__3839__3844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3839.cljs$lang$maxFixedArity = 3;
G__3839.cljs$lang$applyTo = G__3839__3844.cljs$lang$applyTo;
return G__3839;
})()
};
var G__3838 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3838__delegate.call(this, f, g, h, fs);
};
G__3838.cljs$lang$maxFixedArity = 3;
G__3838.cljs$lang$applyTo = (function (arglist__3848){
var f = cljs.core.first(arglist__3848);
var g = cljs.core.first(cljs.core.next(arglist__3848));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3848)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3848)));
return G__3838__delegate.call(this, f, g, h, fs);
});
return G__3838;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3806.call(this,f);
case  2 :
return juxt__3807.call(this,f,g);
case  3 :
return juxt__3808.call(this,f,g,h);
default:
return juxt__3809.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3809.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3850 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3853 = cljs.core.next.call(null,coll);
coll = G__3853;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3851 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3849 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3849))
{return (n > 0);
} else
{return and__3546__auto____3849;
}
})()))
{{
var G__3854 = (n - 1);
var G__3855 = cljs.core.next.call(null,coll);
n = G__3854;
coll = G__3855;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3850.call(this,n);
case  2 :
return dorun__3851.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3856 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3857 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3856.call(this,n);
case  2 :
return doall__3857.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3859 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3859),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3859),1)))
{return cljs.core.first.call(null,matches__3859);
} else
{return cljs.core.vec.call(null,matches__3859);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3860 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3860)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3860),1)))
{return cljs.core.first.call(null,matches__3860);
} else
{return cljs.core.vec.call(null,matches__3860);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3861 = cljs.core.re_find.call(null,re,s);
var match_idx__3862 = s.search(re);
var match_str__3863 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3861))?cljs.core.first.call(null,match_data__3861):match_data__3861);
var post_match__3864 = cljs.core.subs.call(null,s,(match_idx__3862 + cljs.core.count.call(null,match_str__3863)));

if(cljs.core.truth_(match_data__3861))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3861,re_seq.call(null,re,post_match__3864));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3865_SHARP_){
return print_one.call(null,p1__3865_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3866 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3866))
{var and__3546__auto____3870 = (function (){var x__321__auto____3867 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3868 = x__321__auto____3867;

if(cljs.core.truth_(and__3546__auto____3868))
{var and__3546__auto____3869 = x__321__auto____3867.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3869))
{return cljs.core.not.call(null,x__321__auto____3867.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3869;
}
} else
{return and__3546__auto____3868;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__321__auto____3867);
}
})();

if(cljs.core.truth_(and__3546__auto____3870))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3870;
}
} else
{return and__3546__auto____3866;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__321__auto____3871 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3872 = x__321__auto____3871;

if(cljs.core.truth_(and__3546__auto____3872))
{var and__3546__auto____3873 = x__321__auto____3871.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3873))
{return cljs.core.not.call(null,x__321__auto____3871.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____3873;
}
} else
{return and__3546__auto____3872;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__321__auto____3871);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3874 = cljs.core.first.call(null,objs);
var sb__3875 = (new goog.string.StringBuffer());

var G__3876__3877 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3876__3877))
{var obj__3878 = cljs.core.first.call(null,G__3876__3877);
var G__3876__3879 = G__3876__3877;

while(true){
if(cljs.core.truth_((obj__3878 === first_obj__3874)))
{} else
{sb__3875.append(" ");
}
var G__3880__3881 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3878,opts));

if(cljs.core.truth_(G__3880__3881))
{var string__3882 = cljs.core.first.call(null,G__3880__3881);
var G__3880__3883 = G__3880__3881;

while(true){
sb__3875.append(string__3882);
var temp__3698__auto____3884 = cljs.core.next.call(null,G__3880__3883);

if(cljs.core.truth_(temp__3698__auto____3884))
{var G__3880__3885 = temp__3698__auto____3884;

{
var G__3888 = cljs.core.first.call(null,G__3880__3885);
var G__3889 = G__3880__3885;
string__3882 = G__3888;
G__3880__3883 = G__3889;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3886 = cljs.core.next.call(null,G__3876__3879);

if(cljs.core.truth_(temp__3698__auto____3886))
{var G__3876__3887 = temp__3698__auto____3886;

{
var G__3890 = cljs.core.first.call(null,G__3876__3887);
var G__3891 = G__3876__3887;
obj__3878 = G__3890;
G__3876__3879 = G__3891;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3875);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3892 = cljs.core.first.call(null,objs);

var G__3893__3894 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3893__3894))
{var obj__3895 = cljs.core.first.call(null,G__3893__3894);
var G__3893__3896 = G__3893__3894;

while(true){
if(cljs.core.truth_((obj__3895 === first_obj__3892)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3897__3898 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3895,opts));

if(cljs.core.truth_(G__3897__3898))
{var string__3899 = cljs.core.first.call(null,G__3897__3898);
var G__3897__3900 = G__3897__3898;

while(true){
cljs.core.string_print.call(null,string__3899);
var temp__3698__auto____3901 = cljs.core.next.call(null,G__3897__3900);

if(cljs.core.truth_(temp__3698__auto____3901))
{var G__3897__3902 = temp__3698__auto____3901;

{
var G__3905 = cljs.core.first.call(null,G__3897__3902);
var G__3906 = G__3897__3902;
string__3899 = G__3905;
G__3897__3900 = G__3906;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3903 = cljs.core.next.call(null,G__3893__3896);

if(cljs.core.truth_(temp__3698__auto____3903))
{var G__3893__3904 = temp__3698__auto____3903;

{
var G__3907 = cljs.core.first.call(null,G__3893__3904);
var G__3908 = G__3893__3904;
obj__3895 = G__3907;
G__3893__3896 = G__3908;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3909){
var objs = cljs.core.seq( arglist__3909 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3910){
var objs = cljs.core.seq( arglist__3910 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3911){
var objs = cljs.core.seq( arglist__3911 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3912){
var objs = cljs.core.seq( arglist__3912 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3913){
var objs = cljs.core.seq( arglist__3913 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3914 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3914,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3915 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3915))
{var nspc__3916 = temp__3698__auto____3915;

return cljs.core.str.call(null,nspc__3916,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3917 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3917))
{var nspc__3918 = temp__3698__auto____3917;

return cljs.core.str.call(null,nspc__3918,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3919 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3919,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__3920 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__3921 = this;
var G__3922__3923 = cljs.core.seq.call(null,this__3921.watches);

if(cljs.core.truth_(G__3922__3923))
{var G__3925__3927 = cljs.core.first.call(null,G__3922__3923);
var vec__3926__3928 = G__3925__3927;
var key__3929 = cljs.core.nth.call(null,vec__3926__3928,0,null);
var f__3930 = cljs.core.nth.call(null,vec__3926__3928,1,null);
var G__3922__3931 = G__3922__3923;

var G__3925__3932 = G__3925__3927;
var G__3922__3933 = G__3922__3931;

while(true){
var vec__3934__3935 = G__3925__3932;
var key__3936 = cljs.core.nth.call(null,vec__3934__3935,0,null);
var f__3937 = cljs.core.nth.call(null,vec__3934__3935,1,null);
var G__3922__3938 = G__3922__3933;

f__3937.call(null,key__3936,this$,oldval,newval);
var temp__3698__auto____3939 = cljs.core.next.call(null,G__3922__3938);

if(cljs.core.truth_(temp__3698__auto____3939))
{var G__3922__3940 = temp__3698__auto____3939;

{
var G__3947 = cljs.core.first.call(null,G__3922__3940);
var G__3948 = G__3922__3940;
G__3925__3932 = G__3947;
G__3922__3933 = G__3948;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__3941 = this;
return this$.watches = cljs.core.assoc.call(null,this__3941.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3942 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3942.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3943 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3943.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3944 = this;
return this__3944.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3945 = this;
return this__3945.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3946 = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3955 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3956 = (function() { 
var G__3958__delegate = function (x,p__3949){
var map__3950__3951 = p__3949;
var map__3950__3952 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3950__3951))?cljs.core.apply.call(null,cljs.core.hash_map,map__3950__3951):map__3950__3951);
var validator__3953 = cljs.core.get.call(null,map__3950__3952,"﷐'validator");
var meta__3954 = cljs.core.get.call(null,map__3950__3952,"﷐'meta");

return (new cljs.core.Atom(x,meta__3954,validator__3953,null));
};
var G__3958 = function (x,var_args){
var p__3949 = null;
if (goog.isDef(var_args)) {
  p__3949 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3958__delegate.call(this, x, p__3949);
};
G__3958.cljs$lang$maxFixedArity = 1;
G__3958.cljs$lang$applyTo = (function (arglist__3959){
var x = cljs.core.first(arglist__3959);
var p__3949 = cljs.core.rest(arglist__3959);
return G__3958__delegate.call(this, x, p__3949);
});
return G__3958;
})()
;
atom = function(x,var_args){
var p__3949 = var_args;
switch(arguments.length){
case  1 :
return atom__3955.call(this,x);
default:
return atom__3956.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3956.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3960 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3960))
{var validate__3961 = temp__3698__auto____3960;

if(cljs.core.truth_(validate__3961.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3016))))));
}
} else
{}
var old_value__3962 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3962,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3963 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3964 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3965 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3966 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3967 = (function() { 
var G__3969__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3969 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3969__delegate.call(this, a, f, x, y, z, more);
};
G__3969.cljs$lang$maxFixedArity = 5;
G__3969.cljs$lang$applyTo = (function (arglist__3970){
var a = cljs.core.first(arglist__3970);
var f = cljs.core.first(cljs.core.next(arglist__3970));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3970)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3970))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3970)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3970)))));
return G__3969__delegate.call(this, a, f, x, y, z, more);
});
return G__3969;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3963.call(this,a,f);
case  3 :
return swap_BANG___3964.call(this,a,f,x);
case  4 :
return swap_BANG___3965.call(this,a,f,x,y);
case  5 :
return swap_BANG___3966.call(this,a,f,x,y,z);
default:
return swap_BANG___3967.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3967.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3971){
var iref = cljs.core.first(arglist__3971);
var f = cljs.core.first(cljs.core.next(arglist__3971));
var args = cljs.core.rest(cljs.core.next(arglist__3971));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3972 = (function (){
return gensym.call(null,"G__");
});
var gensym__3973 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3972.call(this);
case  1 :
return gensym__3973.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3975 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3975.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3976 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3976.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3976.state,this__3976.f);
}
return cljs.core.deref.call(null,this__3976.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3977){
var body = cljs.core.seq( arglist__3977 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3978__3979 = options;
var map__3978__3980 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3978__3979))?cljs.core.apply.call(null,cljs.core.hash_map,map__3978__3979):map__3978__3979);
var keywordize_keys__3981 = cljs.core.get.call(null,map__3978__3980,"﷐'keywordize-keys");
var keyfn__3982 = (cljs.core.truth_(keywordize_keys__3981)?cljs.core.keyword:cljs.core.str);
var f__3988 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__385__auto____3987 = (function iter__3983(s__3984){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3984__3985 = s__3984;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3984__3985)))
{var k__3986 = cljs.core.first.call(null,s__3984__3985);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3982.call(null,k__3986),thisfn.call(null,(x[k__3986]))]),iter__3983.call(null,cljs.core.rest.call(null,s__3984__3985)));
} else
{return null;
}
break;
}
})));
});

return iter__385__auto____3987.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3988.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3989){
var x = cljs.core.first(arglist__3989);
var options = cljs.core.rest(arglist__3989);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3990 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3994__delegate = function (args){
var temp__3695__auto____3991 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3990),args);

if(cljs.core.truth_(temp__3695__auto____3991))
{var v__3992 = temp__3695__auto____3991;

return v__3992;
} else
{var ret__3993 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3990,cljs.core.assoc,args,ret__3993);
return ret__3993;
}
};
var G__3994 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3994__delegate.call(this, args);
};
G__3994.cljs$lang$maxFixedArity = 0;
G__3994.cljs$lang$applyTo = (function (arglist__3995){
var args = cljs.core.seq( arglist__3995 );;
return G__3994__delegate.call(this, args);
});
return G__3994;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3997 = (function (f){
while(true){
var ret__3996 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3996)))
{{
var G__4000 = ret__3996;
f = G__4000;
continue;
}
} else
{return ret__3996;
}
break;
}
});
var trampoline__3998 = (function() { 
var G__4001__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4001 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4001__delegate.call(this, f, args);
};
G__4001.cljs$lang$maxFixedArity = 1;
G__4001.cljs$lang$applyTo = (function (arglist__4002){
var f = cljs.core.first(arglist__4002);
var args = cljs.core.rest(arglist__4002);
return G__4001__delegate.call(this, f, args);
});
return G__4001;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3997.call(this,f);
default:
return trampoline__3998.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3998.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4003 = (function (){
return rand.call(null,1);
});
var rand__4004 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4003.call(this);
case  1 :
return rand__4004.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__4006 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4006,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4006,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___4015 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4016 = (function (h,child,parent){
var or__3548__auto____4007 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4007))
{return or__3548__auto____4007;
} else
{var or__3548__auto____4008 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4008))
{return or__3548__auto____4008;
} else
{var and__3546__auto____4009 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4009))
{var and__3546__auto____4010 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4010))
{var and__3546__auto____4011 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4011))
{var ret__4012 = true;
var i__4013 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4014 = cljs.core.not.call(null,ret__4012);

if(cljs.core.truth_(or__3548__auto____4014))
{return or__3548__auto____4014;
} else
{return cljs.core._EQ_.call(null,i__4013,cljs.core.count.call(null,parent));
}
})()))
{return ret__4012;
} else
{{
var G__4018 = isa_QMARK_.call(null,h,child.call(null,i__4013),parent.call(null,i__4013));
var G__4019 = (i__4013 + 1);
ret__4012 = G__4018;
i__4013 = G__4019;
continue;
}
}
break;
}
} else
{return and__3546__auto____4011;
}
} else
{return and__3546__auto____4010;
}
} else
{return and__3546__auto____4009;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4015.call(this,h,child);
case  3 :
return isa_QMARK___4016.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__4020 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4021 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4020.call(this,h);
case  2 :
return parents__4021.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__4023 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4024 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4023.call(this,h);
case  2 :
return ancestors__4024.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__4026 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4027 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4026.call(this,h);
case  2 :
return descendants__4027.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__4037 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3308))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4038 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3312))))));
}
var tp__4032 = "﷐'parents".call(null,h);
var td__4033 = "﷐'descendants".call(null,h);
var ta__4034 = "﷐'ancestors".call(null,h);
var tf__4035 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4036 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4032.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4034.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4034.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4032,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__4035.call(null,"﷐'ancestors".call(null,h),tag,td__4033,parent,ta__4034),"﷐'descendants":tf__4035.call(null,"﷐'descendants".call(null,h),parent,ta__4034,tag,td__4033)});
})());

if(cljs.core.truth_(or__3548__auto____4036))
{return or__3548__auto____4036;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4037.call(this,h,tag);
case  3 :
return derive__4038.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__4044 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4045 = (function (h,tag,parent){
var parentMap__4040 = "﷐'parents".call(null,h);
var childsParents__4041 = (cljs.core.truth_(parentMap__4040.call(null,tag))?cljs.core.disj.call(null,parentMap__4040.call(null,tag),parent):cljs.core.set([]));
var newParents__4042 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4041))?cljs.core.assoc.call(null,parentMap__4040,tag,childsParents__4041):cljs.core.dissoc.call(null,parentMap__4040,tag));
var deriv_seq__4043 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4029_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4029_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4029_SHARP_),cljs.core.second.call(null,p1__4029_SHARP_)));
}),cljs.core.seq.call(null,newParents__4042)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4040.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4030_SHARP_,p2__4031_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4030_SHARP_,p2__4031_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4043));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4044.call(this,h,tag);
case  3 :
return underive__4045.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__4047 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4049 = (cljs.core.truth_((function (){var and__3546__auto____4048 = xprefs__4047;

if(cljs.core.truth_(and__3546__auto____4048))
{return xprefs__4047.call(null,y);
} else
{return and__3546__auto____4048;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4049))
{return or__3548__auto____4049;
} else
{var or__3548__auto____4051 = (function (){var ps__4050 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4050) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4050),prefer_table)))
{} else
{}
{
var G__4054 = cljs.core.rest.call(null,ps__4050);
ps__4050 = G__4054;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4051))
{return or__3548__auto____4051;
} else
{var or__3548__auto____4053 = (function (){var ps__4052 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4052) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4052),y,prefer_table)))
{} else
{}
{
var G__4055 = cljs.core.rest.call(null,ps__4052);
ps__4052 = G__4055;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4053))
{return or__3548__auto____4053;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4056 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4056))
{return or__3548__auto____4056;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4065 = cljs.core.reduce.call(null,(function (be,p__4057){
var vec__4058__4059 = p__4057;
var k__4060 = cljs.core.nth.call(null,vec__4058__4059,0,null);
var ___4061 = cljs.core.nth.call(null,vec__4058__4059,1,null);
var e__4062 = vec__4058__4059;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4060)))
{var be2__4064 = (cljs.core.truth_((function (){var or__3548__auto____4063 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____4063))
{return or__3548__auto____4063;
} else
{return cljs.core.dominates.call(null,k__4060,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4062:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4064),k__4060,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4060," and ",cljs.core.first.call(null,be2__4064),", and neither is preferred")));
}
return be2__4064;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4065))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4065));
return cljs.core.second.call(null,best_entry__4065);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4066 = mf;

if(cljs.core.truth_(and__3546__auto____4066))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4066;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4067 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4067))
{return or__3548__auto____4067;
} else
{var or__3548__auto____4068 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4068))
{return or__3548__auto____4068;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4069 = mf;

if(cljs.core.truth_(and__3546__auto____4069))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4069;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4070 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4070))
{return or__3548__auto____4070;
} else
{var or__3548__auto____4071 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4071))
{return or__3548__auto____4071;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4072 = mf;

if(cljs.core.truth_(and__3546__auto____4072))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4072;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4073 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4073))
{return or__3548__auto____4073;
} else
{var or__3548__auto____4074 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4074))
{return or__3548__auto____4074;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4075 = mf;

if(cljs.core.truth_(and__3546__auto____4075))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4075;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4076 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4076))
{return or__3548__auto____4076;
} else
{var or__3548__auto____4077 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4077))
{return or__3548__auto____4077;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4078 = mf;

if(cljs.core.truth_(and__3546__auto____4078))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4078;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4079 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4079))
{return or__3548__auto____4079;
} else
{var or__3548__auto____4080 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4080))
{return or__3548__auto____4080;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4081 = mf;

if(cljs.core.truth_(and__3546__auto____4081))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4081;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4082 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4082))
{return or__3548__auto____4082;
} else
{var or__3548__auto____4083 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4083))
{return or__3548__auto____4083;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4084 = mf;

if(cljs.core.truth_(and__3546__auto____4084))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4084;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4085 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4085))
{return or__3548__auto____4085;
} else
{var or__3548__auto____4086 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4086))
{return or__3548__auto____4086;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4087 = mf;

if(cljs.core.truth_(and__3546__auto____4087))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____4087;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____4088 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4088))
{return or__3548__auto____4088;
} else
{var or__3548__auto____4089 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4089))
{return or__3548__auto____4089;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__4090 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4091 = cljs.core._get_method.call(null,mf,dispatch_val__4090);

if(cljs.core.truth_(target_fn__4091))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4090)));
}
return cljs.core.apply.call(null,target_fn__4091,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4092 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4093 = this;
cljs.core.swap_BANG_.call(null,this__4093.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4093.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4093.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4093.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4094 = this;
cljs.core.swap_BANG_.call(null,this__4094.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4094.method_cache,this__4094.method_table,this__4094.cached_hierarchy,this__4094.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4095 = this;
cljs.core.swap_BANG_.call(null,this__4095.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4095.method_cache,this__4095.method_table,this__4095.cached_hierarchy,this__4095.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4096 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4096.cached_hierarchy),cljs.core.deref.call(null,this__4096.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4096.method_cache,this__4096.method_table,this__4096.cached_hierarchy,this__4096.hierarchy);
}
var temp__3695__auto____4097 = cljs.core.deref.call(null,this__4096.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4097))
{var target_fn__4098 = temp__3695__auto____4097;

return target_fn__4098;
} else
{var temp__3695__auto____4099 = cljs.core.find_and_cache_best_method.call(null,this__4096.name,dispatch_val,this__4096.hierarchy,this__4096.method_table,this__4096.prefer_table,this__4096.method_cache,this__4096.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4099))
{var target_fn__4100 = temp__3695__auto____4099;

return target_fn__4100;
} else
{return cljs.core.deref.call(null,this__4096.method_table).call(null,this__4096.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4101 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4101.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4101.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4101.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4101.method_cache,this__4101.method_table,this__4101.cached_hierarchy,this__4101.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4102 = this;
return cljs.core.deref.call(null,this__4102.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4103 = this;
return cljs.core.deref.call(null,this__4103.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__4104 = this;
return cljs.core.do_invoke.call(null,mf,this__4104.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__4105__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__4105 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4105__delegate.call(this, _, args);
};
G__4105.cljs$lang$maxFixedArity = 1;
G__4105.cljs$lang$applyTo = (function (arglist__4106){
var _ = cljs.core.first(arglist__4106);
var args = cljs.core.rest(arglist__4106);
return G__4105__delegate.call(this, _, args);
});
return G__4105;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
