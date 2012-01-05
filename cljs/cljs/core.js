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
var or__3548__auto____2877 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2877))
{return or__3548__auto____2877;
} else
{var or__3548__auto____2878 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2878))
{return or__3548__auto____2878;
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
if(cljs.core.truth_((function (){var and__3546__auto____2879 = coll;

if(cljs.core.truth_(and__3546__auto____2879))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2879;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2880 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2880))
{return or__3548__auto____2880;
} else
{var or__3548__auto____2881 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2881))
{return or__3548__auto____2881;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2882 = coll;

if(cljs.core.truth_(and__3546__auto____2882))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2882;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2883 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2883))
{return or__3548__auto____2883;
} else
{var or__3548__auto____2884 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2884))
{return or__3548__auto____2884;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2885 = coll;

if(cljs.core.truth_(and__3546__auto____2885))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2885;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2886 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2886))
{return or__3548__auto____2886;
} else
{var or__3548__auto____2887 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2887))
{return or__3548__auto____2887;
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
var _nth__2894 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2888 = coll;

if(cljs.core.truth_(and__3546__auto____2888))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2888;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2889 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2889))
{return or__3548__auto____2889;
} else
{var or__3548__auto____2890 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2890))
{return or__3548__auto____2890;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2895 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2891 = coll;

if(cljs.core.truth_(and__3546__auto____2891))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2891;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2892 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2892))
{return or__3548__auto____2892;
} else
{var or__3548__auto____2893 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2893))
{return or__3548__auto____2893;
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
return _nth__2894.call(this,coll,n);
case  3 :
return _nth__2895.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2897 = coll;

if(cljs.core.truth_(and__3546__auto____2897))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2897;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2898 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2898))
{return or__3548__auto____2898;
} else
{var or__3548__auto____2899 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2899))
{return or__3548__auto____2899;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2900 = coll;

if(cljs.core.truth_(and__3546__auto____2900))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2900;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2901 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2901))
{return or__3548__auto____2901;
} else
{var or__3548__auto____2902 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2902))
{return or__3548__auto____2902;
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
var _lookup__2909 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2903 = o;

if(cljs.core.truth_(and__3546__auto____2903))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2903;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2904 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2904))
{return or__3548__auto____2904;
} else
{var or__3548__auto____2905 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2905))
{return or__3548__auto____2905;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2910 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2906 = o;

if(cljs.core.truth_(and__3546__auto____2906))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2906;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2907 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2907))
{return or__3548__auto____2907;
} else
{var or__3548__auto____2908 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2908))
{return or__3548__auto____2908;
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
return _lookup__2909.call(this,o,k);
case  3 :
return _lookup__2910.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2912 = coll;

if(cljs.core.truth_(and__3546__auto____2912))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2912;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2913 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2913))
{return or__3548__auto____2913;
} else
{var or__3548__auto____2914 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2914))
{return or__3548__auto____2914;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2915 = coll;

if(cljs.core.truth_(and__3546__auto____2915))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2915;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2916 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2916))
{return or__3548__auto____2916;
} else
{var or__3548__auto____2917 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2917))
{return or__3548__auto____2917;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2918 = coll;

if(cljs.core.truth_(and__3546__auto____2918))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2918;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2919 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2919))
{return or__3548__auto____2919;
} else
{var or__3548__auto____2920 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2920))
{return or__3548__auto____2920;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2921 = coll;

if(cljs.core.truth_(and__3546__auto____2921))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2921;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2922 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2922))
{return or__3548__auto____2922;
} else
{var or__3548__auto____2923 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2923))
{return or__3548__auto____2923;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2924 = coll;

if(cljs.core.truth_(and__3546__auto____2924))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2924;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2925 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2925))
{return or__3548__auto____2925;
} else
{var or__3548__auto____2926 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2926))
{return or__3548__auto____2926;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2927 = coll;

if(cljs.core.truth_(and__3546__auto____2927))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2927;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2928 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2928))
{return or__3548__auto____2928;
} else
{var or__3548__auto____2929 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2929))
{return or__3548__auto____2929;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2930 = coll;

if(cljs.core.truth_(and__3546__auto____2930))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2930;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2931 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2931))
{return or__3548__auto____2931;
} else
{var or__3548__auto____2932 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2932))
{return or__3548__auto____2932;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2933 = o;

if(cljs.core.truth_(and__3546__auto____2933))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2933;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2934 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2934))
{return or__3548__auto____2934;
} else
{var or__3548__auto____2935 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2935))
{return or__3548__auto____2935;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2936 = o;

if(cljs.core.truth_(and__3546__auto____2936))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2936;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2937 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2937))
{return or__3548__auto____2937;
} else
{var or__3548__auto____2938 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2938))
{return or__3548__auto____2938;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2939 = o;

if(cljs.core.truth_(and__3546__auto____2939))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2939;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2940 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2940))
{return or__3548__auto____2940;
} else
{var or__3548__auto____2941 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2941))
{return or__3548__auto____2941;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2942 = o;

if(cljs.core.truth_(and__3546__auto____2942))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2942;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2943 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2943))
{return or__3548__auto____2943;
} else
{var or__3548__auto____2944 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2944))
{return or__3548__auto____2944;
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
var _reduce__2951 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2945 = coll;

if(cljs.core.truth_(and__3546__auto____2945))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2945;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2946 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2946))
{return or__3548__auto____2946;
} else
{var or__3548__auto____2947 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2947))
{return or__3548__auto____2947;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2952 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2948 = coll;

if(cljs.core.truth_(and__3546__auto____2948))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2948;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2949 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2949))
{return or__3548__auto____2949;
} else
{var or__3548__auto____2950 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2950))
{return or__3548__auto____2950;
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
return _reduce__2951.call(this,coll,f);
case  3 :
return _reduce__2952.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2954 = o;

if(cljs.core.truth_(and__3546__auto____2954))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2954;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2955 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2955))
{return or__3548__auto____2955;
} else
{var or__3548__auto____2956 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2956))
{return or__3548__auto____2956;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2957 = o;

if(cljs.core.truth_(and__3546__auto____2957))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2957;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2958 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2958))
{return or__3548__auto____2958;
} else
{var or__3548__auto____2959 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2959))
{return or__3548__auto____2959;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2960 = o;

if(cljs.core.truth_(and__3546__auto____2960))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2960;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2961 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2961))
{return or__3548__auto____2961;
} else
{var or__3548__auto____2962 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2962))
{return or__3548__auto____2962;
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
if(cljs.core.truth_((function (){var and__3546__auto____2963 = o;

if(cljs.core.truth_(and__3546__auto____2963))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2963;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2964 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2964))
{return or__3548__auto____2964;
} else
{var or__3548__auto____2965 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2965))
{return or__3548__auto____2965;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2966 = d;

if(cljs.core.truth_(and__3546__auto____2966))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2966;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2967 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2967))
{return or__3548__auto____2967;
} else
{var or__3548__auto____2968 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2968))
{return or__3548__auto____2968;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2969 = this$;

if(cljs.core.truth_(and__3546__auto____2969))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2969;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2970 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2970))
{return or__3548__auto____2970;
} else
{var or__3548__auto____2971 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2971))
{return or__3548__auto____2971;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2972 = this$;

if(cljs.core.truth_(and__3546__auto____2972))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2972;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2973 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2973))
{return or__3548__auto____2973;
} else
{var or__3548__auto____2974 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2974))
{return or__3548__auto____2974;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2975 = this$;

if(cljs.core.truth_(and__3546__auto____2975))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2975;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2976 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2976))
{return or__3548__auto____2976;
} else
{var or__3548__auto____2977 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2977))
{return or__3548__auto____2977;
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
var G__2978 = null;
var G__2978__2979 = (function (o,k){
return null;
});
var G__2978__2980 = (function (o,k,not_found){
return not_found;
});
G__2978 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2978__2979.call(this,o,k);
case  3 :
return G__2978__2980.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2978;
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
var G__2982 = null;
var G__2982__2983 = (function (_,f){
return f.call(null);
});
var G__2982__2984 = (function (_,f,start){
return start;
});
G__2982 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2982__2983.call(this,_,f);
case  3 :
return G__2982__2984.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2982;
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
var G__2986 = null;
var G__2986__2987 = (function (_,n){
return null;
});
var G__2986__2988 = (function (_,n,not_found){
return not_found;
});
G__2986 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2986__2987.call(this,_,n);
case  3 :
return G__2986__2988.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2986;
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
var ci_reduce__2996 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2990 = cljs.core._nth.call(null,cicoll,0);
var n__2991 = 1;

while(true){
if(cljs.core.truth_((n__2991 < cljs.core._count.call(null,cicoll))))
{{
var G__3000 = f.call(null,val__2990,cljs.core._nth.call(null,cicoll,n__2991));
var G__3001 = (n__2991 + 1);
val__2990 = G__3000;
n__2991 = G__3001;
continue;
}
} else
{return val__2990;
}
break;
}
}
});
var ci_reduce__2997 = (function (cicoll,f,val){
var val__2992 = val;
var n__2993 = 0;

while(true){
if(cljs.core.truth_((n__2993 < cljs.core._count.call(null,cicoll))))
{{
var G__3002 = f.call(null,val__2992,cljs.core._nth.call(null,cicoll,n__2993));
var G__3003 = (n__2993 + 1);
val__2992 = G__3002;
n__2993 = G__3003;
continue;
}
} else
{return val__2992;
}
break;
}
});
var ci_reduce__2998 = (function (cicoll,f,val,idx){
var val__2994 = val;
var n__2995 = idx;

while(true){
if(cljs.core.truth_((n__2995 < cljs.core._count.call(null,cicoll))))
{{
var G__3004 = f.call(null,val__2994,cljs.core._nth.call(null,cicoll,n__2995));
var G__3005 = (n__2995 + 1);
val__2994 = G__3004;
n__2995 = G__3005;
continue;
}
} else
{return val__2994;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2996.call(this,cicoll,f);
case  3 :
return ci_reduce__2997.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2998.call(this,cicoll,f,val,idx);
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
var this__3006 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3019 = null;
var G__3019__3020 = (function (coll,f){
var this__3007 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__3007.a[this__3007.i]),(this__3007.i + 1));
});
var G__3019__3021 = (function (coll,f,start){
var this__3008 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__3008.i);
});
G__3019 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3019__3020.call(this,coll,f);
case  3 :
return G__3019__3021.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3019;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3009 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3010 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3023 = null;
var G__3023__3024 = (function (coll,n){
var this__3011 = this;
var i__3012 = (n + this__3011.i);

if(cljs.core.truth_((i__3012 < this__3011.a.length)))
{return (this__3011.a[i__3012]);
} else
{return null;
}
});
var G__3023__3025 = (function (coll,n,not_found){
var this__3013 = this;
var i__3014 = (n + this__3013.i);

if(cljs.core.truth_((i__3014 < this__3013.a.length)))
{return (this__3013.a[i__3014]);
} else
{return not_found;
}
});
G__3023 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3023__3024.call(this,coll,n);
case  3 :
return G__3023__3025.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3023;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3015 = this;
return (this__3015.a.length - this__3015.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3016 = this;
return (this__3016.a[this__3016.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3017 = this;
if(cljs.core.truth_(((this__3017.i + 1) < this__3017.a.length)))
{return (new cljs.core.IndexedSeq(this__3017.a,(this__3017.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3018 = this;
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
var G__3027 = null;
var G__3027__3028 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3027__3029 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3027 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3027__3028.call(this,array,f);
case  3 :
return G__3027__3029.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3027;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3031 = null;
var G__3031__3032 = (function (array,k){
return (array[k]);
});
var G__3031__3033 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3031 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3031__3032.call(this,array,k);
case  3 :
return G__3031__3033.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3031;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3035 = null;
var G__3035__3036 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3035__3037 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3035 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3035__3036.call(this,array,n);
case  3 :
return G__3035__3037.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3035;
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
var temp__3698__auto____3039 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3039))
{var s__3040 = temp__3698__auto____3039;

return cljs.core._first.call(null,s__3040);
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
var G__3041 = cljs.core.next.call(null,s);
s = G__3041;
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
var s__3042 = cljs.core.seq.call(null,x);
var n__3043 = 0;

while(true){
if(cljs.core.truth_(s__3042))
{{
var G__3044 = cljs.core.next.call(null,s__3042);
var G__3045 = (n__3043 + 1);
s__3042 = G__3044;
n__3043 = G__3045;
continue;
}
} else
{return n__3043;
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
var conj__3046 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3047 = (function() { 
var G__3049__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3050 = conj.call(null,coll,x);
var G__3051 = cljs.core.first.call(null,xs);
var G__3052 = cljs.core.next.call(null,xs);
coll = G__3050;
x = G__3051;
xs = G__3052;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3049 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3049__delegate.call(this, coll, x, xs);
};
G__3049.cljs$lang$maxFixedArity = 2;
G__3049.cljs$lang$applyTo = (function (arglist__3053){
var coll = cljs.core.first(arglist__3053);
var x = cljs.core.first(cljs.core.next(arglist__3053));
var xs = cljs.core.rest(cljs.core.next(arglist__3053));
return G__3049__delegate.call(this, coll, x, xs);
});
return G__3049;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3046.call(this,coll,x);
default:
return conj__3047.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3047.cljs$lang$applyTo;
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
var nth__3054 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3055 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3054.call(this,coll,n);
case  3 :
return nth__3055.call(this,coll,n,not_found);
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
var get__3057 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3058 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3057.call(this,o,k);
case  3 :
return get__3058.call(this,o,k,not_found);
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
var assoc__3061 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3062 = (function() { 
var G__3064__delegate = function (coll,k,v,kvs){
while(true){
var ret__3060 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3065 = ret__3060;
var G__3066 = cljs.core.first.call(null,kvs);
var G__3067 = cljs.core.second.call(null,kvs);
var G__3068 = cljs.core.nnext.call(null,kvs);
coll = G__3065;
k = G__3066;
v = G__3067;
kvs = G__3068;
continue;
}
} else
{return ret__3060;
}
break;
}
};
var G__3064 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3064__delegate.call(this, coll, k, v, kvs);
};
G__3064.cljs$lang$maxFixedArity = 3;
G__3064.cljs$lang$applyTo = (function (arglist__3069){
var coll = cljs.core.first(arglist__3069);
var k = cljs.core.first(cljs.core.next(arglist__3069));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3069)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3069)));
return G__3064__delegate.call(this, coll, k, v, kvs);
});
return G__3064;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3061.call(this,coll,k,v);
default:
return assoc__3062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3062.cljs$lang$applyTo;
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
var dissoc__3071 = (function (coll){
return coll;
});
var dissoc__3072 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3073 = (function() { 
var G__3075__delegate = function (coll,k,ks){
while(true){
var ret__3070 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3076 = ret__3070;
var G__3077 = cljs.core.first.call(null,ks);
var G__3078 = cljs.core.next.call(null,ks);
coll = G__3076;
k = G__3077;
ks = G__3078;
continue;
}
} else
{return ret__3070;
}
break;
}
};
var G__3075 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3075__delegate.call(this, coll, k, ks);
};
G__3075.cljs$lang$maxFixedArity = 2;
G__3075.cljs$lang$applyTo = (function (arglist__3079){
var coll = cljs.core.first(arglist__3079);
var k = cljs.core.first(cljs.core.next(arglist__3079));
var ks = cljs.core.rest(cljs.core.next(arglist__3079));
return G__3075__delegate.call(this, coll, k, ks);
});
return G__3075;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3071.call(this,coll);
case  2 :
return dissoc__3072.call(this,coll,k);
default:
return dissoc__3073.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3073.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__321__auto____3080 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3081 = x__321__auto____3080;

if(cljs.core.truth_(and__3546__auto____3081))
{var and__3546__auto____3082 = x__321__auto____3080.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3082))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____3080));
} else
{return and__3546__auto____3082;
}
} else
{return and__3546__auto____3081;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__321__auto____3080);
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
var disj__3084 = (function (coll){
return coll;
});
var disj__3085 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3086 = (function() { 
var G__3088__delegate = function (coll,k,ks){
while(true){
var ret__3083 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3089 = ret__3083;
var G__3090 = cljs.core.first.call(null,ks);
var G__3091 = cljs.core.next.call(null,ks);
coll = G__3089;
k = G__3090;
ks = G__3091;
continue;
}
} else
{return ret__3083;
}
break;
}
};
var G__3088 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3088__delegate.call(this, coll, k, ks);
};
G__3088.cljs$lang$maxFixedArity = 2;
G__3088.cljs$lang$applyTo = (function (arglist__3092){
var coll = cljs.core.first(arglist__3092);
var k = cljs.core.first(cljs.core.next(arglist__3092));
var ks = cljs.core.rest(cljs.core.next(arglist__3092));
return G__3088__delegate.call(this, coll, k, ks);
});
return G__3088;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3084.call(this,coll);
case  2 :
return disj__3085.call(this,coll,k);
default:
return disj__3086.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3086.cljs$lang$applyTo;
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
{var x__321__auto____3093 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3094 = x__321__auto____3093;

if(cljs.core.truth_(and__3546__auto____3094))
{var and__3546__auto____3095 = x__321__auto____3093.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3095))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____3093));
} else
{return and__3546__auto____3095;
}
} else
{return and__3546__auto____3094;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__321__auto____3093);
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
{var x__321__auto____3096 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3097 = x__321__auto____3096;

if(cljs.core.truth_(and__3546__auto____3097))
{var and__3546__auto____3098 = x__321__auto____3096.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3098))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____3096));
} else
{return and__3546__auto____3098;
}
} else
{return and__3546__auto____3097;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__321__auto____3096);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__321__auto____3099 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3100 = x__321__auto____3099;

if(cljs.core.truth_(and__3546__auto____3100))
{var and__3546__auto____3101 = x__321__auto____3099.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3101))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____3099));
} else
{return and__3546__auto____3101;
}
} else
{return and__3546__auto____3100;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__321__auto____3099);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__321__auto____3102 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3103 = x__321__auto____3102;

if(cljs.core.truth_(and__3546__auto____3103))
{var and__3546__auto____3104 = x__321__auto____3102.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3104))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____3102));
} else
{return and__3546__auto____3104;
}
} else
{return and__3546__auto____3103;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__321__auto____3102);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__321__auto____3105 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3106 = x__321__auto____3105;

if(cljs.core.truth_(and__3546__auto____3106))
{var and__3546__auto____3107 = x__321__auto____3105.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3107))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____3105));
} else
{return and__3546__auto____3107;
}
} else
{return and__3546__auto____3106;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__321__auto____3105);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__321__auto____3108 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3109 = x__321__auto____3108;

if(cljs.core.truth_(and__3546__auto____3109))
{var and__3546__auto____3110 = x__321__auto____3108.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3110))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____3108));
} else
{return and__3546__auto____3110;
}
} else
{return and__3546__auto____3109;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__321__auto____3108);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__321__auto____3111 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3112 = x__321__auto____3111;

if(cljs.core.truth_(and__3546__auto____3112))
{var and__3546__auto____3113 = x__321__auto____3111.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3113))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____3111));
} else
{return and__3546__auto____3113;
}
} else
{return and__3546__auto____3112;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__321__auto____3111);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3114 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3114.push(key);
}));
return keys__3114;
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
{var x__321__auto____3115 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3116 = x__321__auto____3115;

if(cljs.core.truth_(and__3546__auto____3116))
{var and__3546__auto____3117 = x__321__auto____3115.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3117))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____3115));
} else
{return and__3546__auto____3117;
}
} else
{return and__3546__auto____3116;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__321__auto____3115);
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
var and__3546__auto____3118 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3118))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3119 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____3119))
{return or__3548__auto____3119;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____3118;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3120 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3120))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____3120;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3121 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3121))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____3121;
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
var and__3546__auto____3122 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3122))
{return (n == n.toFixed());
} else
{return and__3546__auto____3122;
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
if(cljs.core.truth_((function (){var and__3546__auto____3123 = coll;

if(cljs.core.truth_(and__3546__auto____3123))
{var and__3546__auto____3124 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3124))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3124;
}
} else
{return and__3546__auto____3123;
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
var distinct_QMARK___3129 = (function (x){
return true;
});
var distinct_QMARK___3130 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3131 = (function() { 
var G__3133__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3125 = cljs.core.set([y,x]);
var xs__3126 = more;

while(true){
var x__3127 = cljs.core.first.call(null,xs__3126);
var etc__3128 = cljs.core.next.call(null,xs__3126);

if(cljs.core.truth_(xs__3126))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3125,x__3127)))
{return false;
} else
{{
var G__3134 = cljs.core.conj.call(null,s__3125,x__3127);
var G__3135 = etc__3128;
s__3125 = G__3134;
xs__3126 = G__3135;
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
var G__3133 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3133__delegate.call(this, x, y, more);
};
G__3133.cljs$lang$maxFixedArity = 2;
G__3133.cljs$lang$applyTo = (function (arglist__3136){
var x = cljs.core.first(arglist__3136);
var y = cljs.core.first(cljs.core.next(arglist__3136));
var more = cljs.core.rest(cljs.core.next(arglist__3136));
return G__3133__delegate.call(this, x, y, more);
});
return G__3133;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3129.call(this,x);
case  2 :
return distinct_QMARK___3130.call(this,x,y);
default:
return distinct_QMARK___3131.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3131.cljs$lang$applyTo;
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
var r__3137 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3137)))
{return r__3137;
} else
{if(cljs.core.truth_(r__3137))
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
var sort__3139 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3140 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3138 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3138,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3138);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3139.call(this,comp);
case  2 :
return sort__3140.call(this,comp,coll);
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
var sort_by__3142 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3143 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3142.call(this,keyfn,comp);
case  3 :
return sort_by__3143.call(this,keyfn,comp,coll);
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
var reduce__3145 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3146 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3145.call(this,f,val);
case  3 :
return reduce__3146.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3152 = (function (f,coll){
var temp__3695__auto____3148 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3148))
{var s__3149 = temp__3695__auto____3148;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3149),cljs.core.next.call(null,s__3149));
} else
{return f.call(null);
}
});
var seq_reduce__3153 = (function (f,val,coll){
var val__3150 = val;
var coll__3151 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3151))
{{
var G__3155 = f.call(null,val__3150,cljs.core.first.call(null,coll__3151));
var G__3156 = cljs.core.next.call(null,coll__3151);
val__3150 = G__3155;
coll__3151 = G__3156;
continue;
}
} else
{return val__3150;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3152.call(this,f,val);
case  3 :
return seq_reduce__3153.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3157 = null;
var G__3157__3158 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3157__3159 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3157 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3157__3158.call(this,coll,f);
case  3 :
return G__3157__3159.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3157;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3161 = (function (){
return 0;
});
var _PLUS___3162 = (function (x){
return x;
});
var _PLUS___3163 = (function (x,y){
return (x + y);
});
var _PLUS___3164 = (function() { 
var G__3166__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__3166 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3166__delegate.call(this, x, y, more);
};
G__3166.cljs$lang$maxFixedArity = 2;
G__3166.cljs$lang$applyTo = (function (arglist__3167){
var x = cljs.core.first(arglist__3167);
var y = cljs.core.first(cljs.core.next(arglist__3167));
var more = cljs.core.rest(cljs.core.next(arglist__3167));
return G__3166__delegate.call(this, x, y, more);
});
return G__3166;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3161.call(this);
case  1 :
return _PLUS___3162.call(this,x);
case  2 :
return _PLUS___3163.call(this,x,y);
default:
return _PLUS___3164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3164.cljs$lang$applyTo;
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
var ___3168 = (function (x){
return (- x);
});
var ___3169 = (function (x,y){
return (x - y);
});
var ___3170 = (function() { 
var G__3172__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__3172 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3172__delegate.call(this, x, y, more);
};
G__3172.cljs$lang$maxFixedArity = 2;
G__3172.cljs$lang$applyTo = (function (arglist__3173){
var x = cljs.core.first(arglist__3173);
var y = cljs.core.first(cljs.core.next(arglist__3173));
var more = cljs.core.rest(cljs.core.next(arglist__3173));
return G__3172__delegate.call(this, x, y, more);
});
return G__3172;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3168.call(this,x);
case  2 :
return ___3169.call(this,x,y);
default:
return ___3170.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3170.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3174 = (function (){
return 1;
});
var _STAR___3175 = (function (x){
return x;
});
var _STAR___3176 = (function (x,y){
return (x * y);
});
var _STAR___3177 = (function() { 
var G__3179__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__3179 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3179__delegate.call(this, x, y, more);
};
G__3179.cljs$lang$maxFixedArity = 2;
G__3179.cljs$lang$applyTo = (function (arglist__3180){
var x = cljs.core.first(arglist__3180);
var y = cljs.core.first(cljs.core.next(arglist__3180));
var more = cljs.core.rest(cljs.core.next(arglist__3180));
return G__3179__delegate.call(this, x, y, more);
});
return G__3179;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3174.call(this);
case  1 :
return _STAR___3175.call(this,x);
case  2 :
return _STAR___3176.call(this,x,y);
default:
return _STAR___3177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3177.cljs$lang$applyTo;
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
var _SLASH___3181 = (function (x){
return (1 / x);
});
var _SLASH___3182 = (function (x,y){
return (x / y);
});
var _SLASH___3183 = (function() { 
var G__3185__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3185 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3185__delegate.call(this, x, y, more);
};
G__3185.cljs$lang$maxFixedArity = 2;
G__3185.cljs$lang$applyTo = (function (arglist__3186){
var x = cljs.core.first(arglist__3186);
var y = cljs.core.first(cljs.core.next(arglist__3186));
var more = cljs.core.rest(cljs.core.next(arglist__3186));
return G__3185__delegate.call(this, x, y, more);
});
return G__3185;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3181.call(this,x);
case  2 :
return _SLASH___3182.call(this,x,y);
default:
return _SLASH___3183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3183.cljs$lang$applyTo;
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
var _LT___3187 = (function (x){
return true;
});
var _LT___3188 = (function (x,y){
return (x < y);
});
var _LT___3189 = (function() { 
var G__3191__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3192 = y;
var G__3193 = cljs.core.first.call(null,more);
var G__3194 = cljs.core.next.call(null,more);
x = G__3192;
y = G__3193;
more = G__3194;
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
var G__3191 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3191__delegate.call(this, x, y, more);
};
G__3191.cljs$lang$maxFixedArity = 2;
G__3191.cljs$lang$applyTo = (function (arglist__3195){
var x = cljs.core.first(arglist__3195);
var y = cljs.core.first(cljs.core.next(arglist__3195));
var more = cljs.core.rest(cljs.core.next(arglist__3195));
return G__3191__delegate.call(this, x, y, more);
});
return G__3191;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3187.call(this,x);
case  2 :
return _LT___3188.call(this,x,y);
default:
return _LT___3189.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3189.cljs$lang$applyTo;
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
var _LT__EQ___3196 = (function (x){
return true;
});
var _LT__EQ___3197 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3198 = (function() { 
var G__3200__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3201 = y;
var G__3202 = cljs.core.first.call(null,more);
var G__3203 = cljs.core.next.call(null,more);
x = G__3201;
y = G__3202;
more = G__3203;
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
var G__3200 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3200__delegate.call(this, x, y, more);
};
G__3200.cljs$lang$maxFixedArity = 2;
G__3200.cljs$lang$applyTo = (function (arglist__3204){
var x = cljs.core.first(arglist__3204);
var y = cljs.core.first(cljs.core.next(arglist__3204));
var more = cljs.core.rest(cljs.core.next(arglist__3204));
return G__3200__delegate.call(this, x, y, more);
});
return G__3200;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3196.call(this,x);
case  2 :
return _LT__EQ___3197.call(this,x,y);
default:
return _LT__EQ___3198.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3198.cljs$lang$applyTo;
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
var _GT___3205 = (function (x){
return true;
});
var _GT___3206 = (function (x,y){
return (x > y);
});
var _GT___3207 = (function() { 
var G__3209__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3210 = y;
var G__3211 = cljs.core.first.call(null,more);
var G__3212 = cljs.core.next.call(null,more);
x = G__3210;
y = G__3211;
more = G__3212;
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
var G__3209 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3209__delegate.call(this, x, y, more);
};
G__3209.cljs$lang$maxFixedArity = 2;
G__3209.cljs$lang$applyTo = (function (arglist__3213){
var x = cljs.core.first(arglist__3213);
var y = cljs.core.first(cljs.core.next(arglist__3213));
var more = cljs.core.rest(cljs.core.next(arglist__3213));
return G__3209__delegate.call(this, x, y, more);
});
return G__3209;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3205.call(this,x);
case  2 :
return _GT___3206.call(this,x,y);
default:
return _GT___3207.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3207.cljs$lang$applyTo;
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
var _GT__EQ___3214 = (function (x){
return true;
});
var _GT__EQ___3215 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3216 = (function() { 
var G__3218__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3219 = y;
var G__3220 = cljs.core.first.call(null,more);
var G__3221 = cljs.core.next.call(null,more);
x = G__3219;
y = G__3220;
more = G__3221;
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
var G__3218 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3218__delegate.call(this, x, y, more);
};
G__3218.cljs$lang$maxFixedArity = 2;
G__3218.cljs$lang$applyTo = (function (arglist__3222){
var x = cljs.core.first(arglist__3222);
var y = cljs.core.first(cljs.core.next(arglist__3222));
var more = cljs.core.rest(cljs.core.next(arglist__3222));
return G__3218__delegate.call(this, x, y, more);
});
return G__3218;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3214.call(this,x);
case  2 :
return _GT__EQ___3215.call(this,x,y);
default:
return _GT__EQ___3216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3216.cljs$lang$applyTo;
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
var max__3223 = (function (x){
return x;
});
var max__3224 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3225 = (function() { 
var G__3227__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__3227 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3227__delegate.call(this, x, y, more);
};
G__3227.cljs$lang$maxFixedArity = 2;
G__3227.cljs$lang$applyTo = (function (arglist__3228){
var x = cljs.core.first(arglist__3228);
var y = cljs.core.first(cljs.core.next(arglist__3228));
var more = cljs.core.rest(cljs.core.next(arglist__3228));
return G__3227__delegate.call(this, x, y, more);
});
return G__3227;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3223.call(this,x);
case  2 :
return max__3224.call(this,x,y);
default:
return max__3225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3225.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3229 = (function (x){
return x;
});
var min__3230 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3231 = (function() { 
var G__3233__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__3233 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3233__delegate.call(this, x, y, more);
};
G__3233.cljs$lang$maxFixedArity = 2;
G__3233.cljs$lang$applyTo = (function (arglist__3234){
var x = cljs.core.first(arglist__3234);
var y = cljs.core.first(cljs.core.next(arglist__3234));
var more = cljs.core.rest(cljs.core.next(arglist__3234));
return G__3233__delegate.call(this, x, y, more);
});
return G__3233;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3229.call(this,x);
case  2 :
return min__3230.call(this,x,y);
default:
return min__3231.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3231.cljs$lang$applyTo;
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
var rem__3235 = (n % d);

return cljs.core.fix.call(null,((n - rem__3235) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3236 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3236));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3237 = (function (){
return Math.random.call(null);
});
var rand__3238 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3237.call(this);
case  1 :
return rand__3238.call(this,n);
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
var _EQ__EQ___3240 = (function (x){
return true;
});
var _EQ__EQ___3241 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3242 = (function() { 
var G__3244__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3245 = y;
var G__3246 = cljs.core.first.call(null,more);
var G__3247 = cljs.core.next.call(null,more);
x = G__3245;
y = G__3246;
more = G__3247;
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
var G__3244 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3244__delegate.call(this, x, y, more);
};
G__3244.cljs$lang$maxFixedArity = 2;
G__3244.cljs$lang$applyTo = (function (arglist__3248){
var x = cljs.core.first(arglist__3248);
var y = cljs.core.first(cljs.core.next(arglist__3248));
var more = cljs.core.rest(cljs.core.next(arglist__3248));
return G__3244__delegate.call(this, x, y, more);
});
return G__3244;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3240.call(this,x);
case  2 :
return _EQ__EQ___3241.call(this,x,y);
default:
return _EQ__EQ___3242.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3242.cljs$lang$applyTo;
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
var n__3249 = n;
var xs__3250 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3251 = xs__3250;

if(cljs.core.truth_(and__3546__auto____3251))
{return (n__3249 > 0);
} else
{return and__3546__auto____3251;
}
})()))
{{
var G__3252 = (n__3249 - 1);
var G__3253 = cljs.core.next.call(null,xs__3250);
n__3249 = G__3252;
xs__3250 = G__3253;
continue;
}
} else
{return xs__3250;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3258 = null;
var G__3258__3259 = (function (coll,n){
var temp__3695__auto____3254 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3254))
{var xs__3255 = temp__3695__auto____3254;

return cljs.core.first.call(null,xs__3255);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3258__3260 = (function (coll,n,not_found){
var temp__3695__auto____3256 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3256))
{var xs__3257 = temp__3695__auto____3256;

return cljs.core.first.call(null,xs__3257);
} else
{return not_found;
}
});
G__3258 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3258__3259.call(this,coll,n);
case  3 :
return G__3258__3260.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3258;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3262 = (function (){
return "";
});
var str_STAR___3263 = (function (x){
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
var str_STAR___3264 = (function() { 
var G__3266__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3267 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3268 = cljs.core.next.call(null,more);
sb = G__3267;
more = G__3268;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3266 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3266__delegate.call(this, x, ys);
};
G__3266.cljs$lang$maxFixedArity = 1;
G__3266.cljs$lang$applyTo = (function (arglist__3269){
var x = cljs.core.first(arglist__3269);
var ys = cljs.core.rest(arglist__3269);
return G__3266__delegate.call(this, x, ys);
});
return G__3266;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3262.call(this);
case  1 :
return str_STAR___3263.call(this,x);
default:
return str_STAR___3264.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3264.cljs$lang$applyTo;
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
var str__3270 = (function (){
return "";
});
var str__3271 = (function (x){
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
var str__3272 = (function() { 
var G__3274__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__3274 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3274__delegate.call(this, x, ys);
};
G__3274.cljs$lang$maxFixedArity = 1;
G__3274.cljs$lang$applyTo = (function (arglist__3275){
var x = cljs.core.first(arglist__3275);
var ys = cljs.core.rest(arglist__3275);
return G__3274__delegate.call(this, x, ys);
});
return G__3274;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3270.call(this);
case  1 :
return str__3271.call(this,x);
default:
return str__3272.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3272.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3276 = (function (s,start){
return s.substring(start);
});
var subs__3277 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3276.call(this,s,start);
case  3 :
return subs__3277.call(this,s,start,end);
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
var symbol__3279 = (function (name){
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
var symbol__3280 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3279.call(this,ns);
case  2 :
return symbol__3280.call(this,ns,name);
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
var keyword__3282 = (function (name){
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
var keyword__3283 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3282.call(this,ns);
case  2 :
return keyword__3283.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3285 = cljs.core.seq.call(null,x);
var ys__3286 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__3285)))
{return cljs.core.nil_QMARK_.call(null,ys__3286);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__3286)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3285),cljs.core.first.call(null,ys__3286))))
{{
var G__3287 = cljs.core.next.call(null,xs__3285);
var G__3288 = cljs.core.next.call(null,ys__3286);
xs__3285 = G__3287;
ys__3286 = G__3288;
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
return cljs.core.reduce.call(null,(function (p1__3289_SHARP_,p2__3290_SHARP_){
return cljs.core.hash_combine.call(null,p1__3289_SHARP_,cljs.core.hash.call(null,p2__3290_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3291__3292 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3291__3292))
{var G__3294__3296 = cljs.core.first.call(null,G__3291__3292);
var vec__3295__3297 = G__3294__3296;
var key_name__3298 = cljs.core.nth.call(null,vec__3295__3297,0,null);
var f__3299 = cljs.core.nth.call(null,vec__3295__3297,1,null);
var G__3291__3300 = G__3291__3292;

var G__3294__3301 = G__3294__3296;
var G__3291__3302 = G__3291__3300;

while(true){
var vec__3303__3304 = G__3294__3301;
var key_name__3305 = cljs.core.nth.call(null,vec__3303__3304,0,null);
var f__3306 = cljs.core.nth.call(null,vec__3303__3304,1,null);
var G__3291__3307 = G__3291__3302;

var str_name__3308 = cljs.core.name.call(null,key_name__3305);

obj[str_name__3308] = f__3306;
var temp__3698__auto____3309 = cljs.core.next.call(null,G__3291__3307);

if(cljs.core.truth_(temp__3698__auto____3309))
{var G__3291__3310 = temp__3698__auto____3309;

{
var G__3311 = cljs.core.first.call(null,G__3291__3310);
var G__3312 = G__3291__3310;
G__3294__3301 = G__3311;
G__3291__3302 = G__3312;
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
var this__3313 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3314 = this;
return (new cljs.core.List(this__3314.meta,o,coll,(this__3314.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3315 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3316 = this;
return this__3316.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3317 = this;
return this__3317.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3318 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3319 = this;
return this__3319.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3320 = this;
return this__3320.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3321 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3322 = this;
return (new cljs.core.List(meta,this__3322.first,this__3322.rest,this__3322.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3323 = this;
return this__3323.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3324 = this;
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
var this__3325 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3326 = this;
return (new cljs.core.List(this__3326.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3327 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3328 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3329 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3330 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3331 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3332 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3333 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3334 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3335 = this;
return this__3335.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3336 = this;
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
list.cljs$lang$applyTo = (function (arglist__3337){
var items = cljs.core.seq( arglist__3337 );;
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
var this__3338 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3339 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3340 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3341 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3341.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3342 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3343 = this;
return this__3343.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3344 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__3344.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__3344.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3345 = this;
return this__3345.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3346 = this;
return (new cljs.core.Cons(meta,this__3346.first,this__3346.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3347 = null;
var G__3347__3348 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3347__3349 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3347 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3347__3348.call(this,string,f);
case  3 :
return G__3347__3349.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3347;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3351 = null;
var G__3351__3352 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3351__3353 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3351 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3351__3352.call(this,string,k);
case  3 :
return G__3351__3353.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3351;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3355 = null;
var G__3355__3356 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3355__3357 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3355 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3355__3356.call(this,string,n);
case  3 :
return G__3355__3357.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3355;
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
var G__3359 = null;
var G__3359__3360 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__3359__3361 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__3359 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__3359__3360.call(this,_,coll);
case  3 :
return G__3359__3361.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3359;
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
var x__3363 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3363;
} else
{lazy_seq.x = x__3363.call(null);
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
var this__3364 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3365 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3366 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3367 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3367.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3368 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3369 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3370 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3371 = this;
return this__3371.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3372 = this;
return (new cljs.core.LazySeq(meta,this__3372.realized,this__3372.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3373 = cljs.core.array.call(null);

var s__3374 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3374)))
{ary__3373.push(cljs.core.first.call(null,s__3374));
{
var G__3375 = cljs.core.next.call(null,s__3374);
s__3374 = G__3375;
continue;
}
} else
{return ary__3373;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3376 = s;
var i__3377 = n;
var sum__3378 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3379 = (i__3377 > 0);

if(cljs.core.truth_(and__3546__auto____3379))
{return cljs.core.seq.call(null,s__3376);
} else
{return and__3546__auto____3379;
}
})()))
{{
var G__3380 = cljs.core.next.call(null,s__3376);
var G__3381 = (i__3377 - 1);
var G__3382 = (sum__3378 + 1);
s__3376 = G__3380;
i__3377 = G__3381;
sum__3378 = G__3382;
continue;
}
} else
{return sum__3378;
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
var concat__3386 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3387 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3388 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3383 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3383))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3383),concat.call(null,cljs.core.rest.call(null,s__3383),y));
} else
{return y;
}
})));
});
var concat__3389 = (function() { 
var G__3391__delegate = function (x,y,zs){
var cat__3385 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3384 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3384))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3384),cat.call(null,cljs.core.rest.call(null,xys__3384),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3385.call(null,concat.call(null,x,y),zs);
};
var G__3391 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3391__delegate.call(this, x, y, zs);
};
G__3391.cljs$lang$maxFixedArity = 2;
G__3391.cljs$lang$applyTo = (function (arglist__3392){
var x = cljs.core.first(arglist__3392);
var y = cljs.core.first(cljs.core.next(arglist__3392));
var zs = cljs.core.rest(cljs.core.next(arglist__3392));
return G__3391__delegate.call(this, x, y, zs);
});
return G__3391;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3386.call(this);
case  1 :
return concat__3387.call(this,x);
case  2 :
return concat__3388.call(this,x,y);
default:
return concat__3389.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3389.cljs$lang$applyTo;
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
var list_STAR___3393 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3394 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3395 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3396 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3397 = (function() { 
var G__3399__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3399 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3399__delegate.call(this, a, b, c, d, more);
};
G__3399.cljs$lang$maxFixedArity = 4;
G__3399.cljs$lang$applyTo = (function (arglist__3400){
var a = cljs.core.first(arglist__3400);
var b = cljs.core.first(cljs.core.next(arglist__3400));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3400)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3400))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3400))));
return G__3399__delegate.call(this, a, b, c, d, more);
});
return G__3399;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3393.call(this,a);
case  2 :
return list_STAR___3394.call(this,a,b);
case  3 :
return list_STAR___3395.call(this,a,b,c);
case  4 :
return list_STAR___3396.call(this,a,b,c,d);
default:
return list_STAR___3397.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3397.cljs$lang$applyTo;
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
var apply__3410 = (function (f,args){
var fixed_arity__3401 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3401 + 1)) <= fixed_arity__3401)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3411 = (function (f,x,args){
var arglist__3402 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3403 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3402,fixed_arity__3403) <= fixed_arity__3403)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3402));
} else
{return f.cljs$lang$applyTo(arglist__3402);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3402));
}
});
var apply__3412 = (function (f,x,y,args){
var arglist__3404 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3405 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3404,fixed_arity__3405) <= fixed_arity__3405)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3404));
} else
{return f.cljs$lang$applyTo(arglist__3404);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3404));
}
});
var apply__3413 = (function (f,x,y,z,args){
var arglist__3406 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3407 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3406,fixed_arity__3407) <= fixed_arity__3407)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3406));
} else
{return f.cljs$lang$applyTo(arglist__3406);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3406));
}
});
var apply__3414 = (function() { 
var G__3416__delegate = function (f,a,b,c,d,args){
var arglist__3408 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3409 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3408,fixed_arity__3409) <= fixed_arity__3409)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3408));
} else
{return f.cljs$lang$applyTo(arglist__3408);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3408));
}
};
var G__3416 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3416__delegate.call(this, f, a, b, c, d, args);
};
G__3416.cljs$lang$maxFixedArity = 5;
G__3416.cljs$lang$applyTo = (function (arglist__3417){
var f = cljs.core.first(arglist__3417);
var a = cljs.core.first(cljs.core.next(arglist__3417));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3417)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3417))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3417)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3417)))));
return G__3416__delegate.call(this, f, a, b, c, d, args);
});
return G__3416;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3410.call(this,f,a);
case  3 :
return apply__3411.call(this,f,a,b);
case  4 :
return apply__3412.call(this,f,a,b,c);
case  5 :
return apply__3413.call(this,f,a,b,c,d);
default:
return apply__3414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3414.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3418){
var obj = cljs.core.first(arglist__3418);
var f = cljs.core.first(cljs.core.next(arglist__3418));
var args = cljs.core.rest(cljs.core.next(arglist__3418));
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
var not_EQ___3419 = (function (x){
return false;
});
var not_EQ___3420 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3421 = (function() { 
var G__3423__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3423 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3423__delegate.call(this, x, y, more);
};
G__3423.cljs$lang$maxFixedArity = 2;
G__3423.cljs$lang$applyTo = (function (arglist__3424){
var x = cljs.core.first(arglist__3424);
var y = cljs.core.first(cljs.core.next(arglist__3424));
var more = cljs.core.rest(cljs.core.next(arglist__3424));
return G__3423__delegate.call(this, x, y, more);
});
return G__3423;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3419.call(this,x);
case  2 :
return not_EQ___3420.call(this,x,y);
default:
return not_EQ___3421.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3421.cljs$lang$applyTo;
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
var G__3425 = pred;
var G__3426 = cljs.core.next.call(null,coll);
pred = G__3425;
coll = G__3426;
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
{var or__3548__auto____3427 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3427))
{return or__3548__auto____3427;
} else
{{
var G__3428 = pred;
var G__3429 = cljs.core.next.call(null,coll);
pred = G__3428;
coll = G__3429;
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
var G__3430 = null;
var G__3430__3431 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3430__3432 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3430__3433 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3430__3434 = (function() { 
var G__3436__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3436 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3436__delegate.call(this, x, y, zs);
};
G__3436.cljs$lang$maxFixedArity = 2;
G__3436.cljs$lang$applyTo = (function (arglist__3437){
var x = cljs.core.first(arglist__3437);
var y = cljs.core.first(cljs.core.next(arglist__3437));
var zs = cljs.core.rest(cljs.core.next(arglist__3437));
return G__3436__delegate.call(this, x, y, zs);
});
return G__3436;
})()
;
G__3430 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3430__3431.call(this);
case  1 :
return G__3430__3432.call(this,x);
case  2 :
return G__3430__3433.call(this,x,y);
default:
return G__3430__3434.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3430.cljs$lang$maxFixedArity = 2;
G__3430.cljs$lang$applyTo = G__3430__3434.cljs$lang$applyTo;
return G__3430;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3438__delegate = function (args){
return x;
};
var G__3438 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3438__delegate.call(this, args);
};
G__3438.cljs$lang$maxFixedArity = 0;
G__3438.cljs$lang$applyTo = (function (arglist__3439){
var args = cljs.core.seq( arglist__3439 );;
return G__3438__delegate.call(this, args);
});
return G__3438;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3443 = (function (){
return cljs.core.identity;
});
var comp__3444 = (function (f){
return f;
});
var comp__3445 = (function (f,g){
return (function() {
var G__3449 = null;
var G__3449__3450 = (function (){
return f.call(null,g.call(null));
});
var G__3449__3451 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3449__3452 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3449__3453 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3449__3454 = (function() { 
var G__3456__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3456 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3456__delegate.call(this, x, y, z, args);
};
G__3456.cljs$lang$maxFixedArity = 3;
G__3456.cljs$lang$applyTo = (function (arglist__3457){
var x = cljs.core.first(arglist__3457);
var y = cljs.core.first(cljs.core.next(arglist__3457));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3457)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3457)));
return G__3456__delegate.call(this, x, y, z, args);
});
return G__3456;
})()
;
G__3449 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3449__3450.call(this);
case  1 :
return G__3449__3451.call(this,x);
case  2 :
return G__3449__3452.call(this,x,y);
case  3 :
return G__3449__3453.call(this,x,y,z);
default:
return G__3449__3454.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3449.cljs$lang$maxFixedArity = 3;
G__3449.cljs$lang$applyTo = G__3449__3454.cljs$lang$applyTo;
return G__3449;
})()
});
var comp__3446 = (function (f,g,h){
return (function() {
var G__3458 = null;
var G__3458__3459 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3458__3460 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3458__3461 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3458__3462 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3458__3463 = (function() { 
var G__3465__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3465 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3465__delegate.call(this, x, y, z, args);
};
G__3465.cljs$lang$maxFixedArity = 3;
G__3465.cljs$lang$applyTo = (function (arglist__3466){
var x = cljs.core.first(arglist__3466);
var y = cljs.core.first(cljs.core.next(arglist__3466));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3466)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3466)));
return G__3465__delegate.call(this, x, y, z, args);
});
return G__3465;
})()
;
G__3458 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3458__3459.call(this);
case  1 :
return G__3458__3460.call(this,x);
case  2 :
return G__3458__3461.call(this,x,y);
case  3 :
return G__3458__3462.call(this,x,y,z);
default:
return G__3458__3463.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3458.cljs$lang$maxFixedArity = 3;
G__3458.cljs$lang$applyTo = G__3458__3463.cljs$lang$applyTo;
return G__3458;
})()
});
var comp__3447 = (function() { 
var G__3467__delegate = function (f1,f2,f3,fs){
var fs__3440 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3468__delegate = function (args){
var ret__3441 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3440),args);
var fs__3442 = cljs.core.next.call(null,fs__3440);

while(true){
if(cljs.core.truth_(fs__3442))
{{
var G__3469 = cljs.core.first.call(null,fs__3442).call(null,ret__3441);
var G__3470 = cljs.core.next.call(null,fs__3442);
ret__3441 = G__3469;
fs__3442 = G__3470;
continue;
}
} else
{return ret__3441;
}
break;
}
};
var G__3468 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3468__delegate.call(this, args);
};
G__3468.cljs$lang$maxFixedArity = 0;
G__3468.cljs$lang$applyTo = (function (arglist__3471){
var args = cljs.core.seq( arglist__3471 );;
return G__3468__delegate.call(this, args);
});
return G__3468;
})()
;
};
var G__3467 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3467__delegate.call(this, f1, f2, f3, fs);
};
G__3467.cljs$lang$maxFixedArity = 3;
G__3467.cljs$lang$applyTo = (function (arglist__3472){
var f1 = cljs.core.first(arglist__3472);
var f2 = cljs.core.first(cljs.core.next(arglist__3472));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3472)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3472)));
return G__3467__delegate.call(this, f1, f2, f3, fs);
});
return G__3467;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3443.call(this);
case  1 :
return comp__3444.call(this,f1);
case  2 :
return comp__3445.call(this,f1,f2);
case  3 :
return comp__3446.call(this,f1,f2,f3);
default:
return comp__3447.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3447.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3473 = (function (f,arg1){
return (function() { 
var G__3478__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3478 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3478__delegate.call(this, args);
};
G__3478.cljs$lang$maxFixedArity = 0;
G__3478.cljs$lang$applyTo = (function (arglist__3479){
var args = cljs.core.seq( arglist__3479 );;
return G__3478__delegate.call(this, args);
});
return G__3478;
})()
;
});
var partial__3474 = (function (f,arg1,arg2){
return (function() { 
var G__3480__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3480 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3480__delegate.call(this, args);
};
G__3480.cljs$lang$maxFixedArity = 0;
G__3480.cljs$lang$applyTo = (function (arglist__3481){
var args = cljs.core.seq( arglist__3481 );;
return G__3480__delegate.call(this, args);
});
return G__3480;
})()
;
});
var partial__3475 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3482__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3482 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3482__delegate.call(this, args);
};
G__3482.cljs$lang$maxFixedArity = 0;
G__3482.cljs$lang$applyTo = (function (arglist__3483){
var args = cljs.core.seq( arglist__3483 );;
return G__3482__delegate.call(this, args);
});
return G__3482;
})()
;
});
var partial__3476 = (function() { 
var G__3484__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3485__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3485 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3485__delegate.call(this, args);
};
G__3485.cljs$lang$maxFixedArity = 0;
G__3485.cljs$lang$applyTo = (function (arglist__3486){
var args = cljs.core.seq( arglist__3486 );;
return G__3485__delegate.call(this, args);
});
return G__3485;
})()
;
};
var G__3484 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3484__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3484.cljs$lang$maxFixedArity = 4;
G__3484.cljs$lang$applyTo = (function (arglist__3487){
var f = cljs.core.first(arglist__3487);
var arg1 = cljs.core.first(cljs.core.next(arglist__3487));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3487)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3487))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3487))));
return G__3484__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3484;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3473.call(this,f,arg1);
case  3 :
return partial__3474.call(this,f,arg1,arg2);
case  4 :
return partial__3475.call(this,f,arg1,arg2,arg3);
default:
return partial__3476.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3476.cljs$lang$applyTo;
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
var fnil__3488 = (function (f,x){
return (function() {
var G__3492 = null;
var G__3492__3493 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3492__3494 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3492__3495 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3492__3496 = (function() { 
var G__3498__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3498 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3498__delegate.call(this, a, b, c, ds);
};
G__3498.cljs$lang$maxFixedArity = 3;
G__3498.cljs$lang$applyTo = (function (arglist__3499){
var a = cljs.core.first(arglist__3499);
var b = cljs.core.first(cljs.core.next(arglist__3499));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3499)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3499)));
return G__3498__delegate.call(this, a, b, c, ds);
});
return G__3498;
})()
;
G__3492 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3492__3493.call(this,a);
case  2 :
return G__3492__3494.call(this,a,b);
case  3 :
return G__3492__3495.call(this,a,b,c);
default:
return G__3492__3496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3492.cljs$lang$maxFixedArity = 3;
G__3492.cljs$lang$applyTo = G__3492__3496.cljs$lang$applyTo;
return G__3492;
})()
});
var fnil__3489 = (function (f,x,y){
return (function() {
var G__3500 = null;
var G__3500__3501 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3500__3502 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3500__3503 = (function() { 
var G__3505__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3505 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3505__delegate.call(this, a, b, c, ds);
};
G__3505.cljs$lang$maxFixedArity = 3;
G__3505.cljs$lang$applyTo = (function (arglist__3506){
var a = cljs.core.first(arglist__3506);
var b = cljs.core.first(cljs.core.next(arglist__3506));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3506)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3506)));
return G__3505__delegate.call(this, a, b, c, ds);
});
return G__3505;
})()
;
G__3500 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3500__3501.call(this,a,b);
case  3 :
return G__3500__3502.call(this,a,b,c);
default:
return G__3500__3503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3500.cljs$lang$maxFixedArity = 3;
G__3500.cljs$lang$applyTo = G__3500__3503.cljs$lang$applyTo;
return G__3500;
})()
});
var fnil__3490 = (function (f,x,y,z){
return (function() {
var G__3507 = null;
var G__3507__3508 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3507__3509 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3507__3510 = (function() { 
var G__3512__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3512 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3512__delegate.call(this, a, b, c, ds);
};
G__3512.cljs$lang$maxFixedArity = 3;
G__3512.cljs$lang$applyTo = (function (arglist__3513){
var a = cljs.core.first(arglist__3513);
var b = cljs.core.first(cljs.core.next(arglist__3513));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3513)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3513)));
return G__3512__delegate.call(this, a, b, c, ds);
});
return G__3512;
})()
;
G__3507 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3507__3508.call(this,a,b);
case  3 :
return G__3507__3509.call(this,a,b,c);
default:
return G__3507__3510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3507.cljs$lang$maxFixedArity = 3;
G__3507.cljs$lang$applyTo = G__3507__3510.cljs$lang$applyTo;
return G__3507;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3488.call(this,f,x);
case  3 :
return fnil__3489.call(this,f,x,y);
case  4 :
return fnil__3490.call(this,f,x,y,z);
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
var mapi__3516 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3514 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3514))
{var s__3515 = temp__3698__auto____3514;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3515)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3515)));
} else
{return null;
}
})));
});

return mapi__3516.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3517 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3517))
{var s__3518 = temp__3698__auto____3517;

var x__3519 = f.call(null,cljs.core.first.call(null,s__3518));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3519)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3518));
} else
{return cljs.core.cons.call(null,x__3519,keep.call(null,f,cljs.core.rest.call(null,s__3518)));
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
var keepi__3529 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3526 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3526))
{var s__3527 = temp__3698__auto____3526;

var x__3528 = f.call(null,idx,cljs.core.first.call(null,s__3527));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3528)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3527));
} else
{return cljs.core.cons.call(null,x__3528,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3527)));
}
} else
{return null;
}
})));
});

return keepi__3529.call(null,0,coll);
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
var every_pred__3574 = (function (p){
return (function() {
var ep1 = null;
var ep1__3579 = (function (){
return true;
});
var ep1__3580 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3581 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3536 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3536))
{return p.call(null,y);
} else
{return and__3546__auto____3536;
}
})());
});
var ep1__3582 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3537 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3537))
{var and__3546__auto____3538 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3538))
{return p.call(null,z);
} else
{return and__3546__auto____3538;
}
} else
{return and__3546__auto____3537;
}
})());
});
var ep1__3583 = (function() { 
var G__3585__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3539 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3539))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3539;
}
})());
};
var G__3585 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3585__delegate.call(this, x, y, z, args);
};
G__3585.cljs$lang$maxFixedArity = 3;
G__3585.cljs$lang$applyTo = (function (arglist__3586){
var x = cljs.core.first(arglist__3586);
var y = cljs.core.first(cljs.core.next(arglist__3586));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3586)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3586)));
return G__3585__delegate.call(this, x, y, z, args);
});
return G__3585;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3579.call(this);
case  1 :
return ep1__3580.call(this,x);
case  2 :
return ep1__3581.call(this,x,y);
case  3 :
return ep1__3582.call(this,x,y,z);
default:
return ep1__3583.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3583.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3575 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3587 = (function (){
return true;
});
var ep2__3588 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3540 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3540))
{return p2.call(null,x);
} else
{return and__3546__auto____3540;
}
})());
});
var ep2__3589 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3541 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3541))
{var and__3546__auto____3542 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3542))
{var and__3546__auto____3543 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3543))
{return p2.call(null,y);
} else
{return and__3546__auto____3543;
}
} else
{return and__3546__auto____3542;
}
} else
{return and__3546__auto____3541;
}
})());
});
var ep2__3590 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3544 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3544))
{var and__3546__auto____3545 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3545))
{var and__3546__auto____3546 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3546))
{var and__3546__auto____3547 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3547))
{var and__3546__auto____3548 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3548))
{return p2.call(null,z);
} else
{return and__3546__auto____3548;
}
} else
{return and__3546__auto____3547;
}
} else
{return and__3546__auto____3546;
}
} else
{return and__3546__auto____3545;
}
} else
{return and__3546__auto____3544;
}
})());
});
var ep2__3591 = (function() { 
var G__3593__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3549 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3549))
{return cljs.core.every_QMARK_.call(null,(function (p1__3520_SHARP_){
var and__3546__auto____3550 = p1.call(null,p1__3520_SHARP_);

if(cljs.core.truth_(and__3546__auto____3550))
{return p2.call(null,p1__3520_SHARP_);
} else
{return and__3546__auto____3550;
}
}),args);
} else
{return and__3546__auto____3549;
}
})());
};
var G__3593 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3593__delegate.call(this, x, y, z, args);
};
G__3593.cljs$lang$maxFixedArity = 3;
G__3593.cljs$lang$applyTo = (function (arglist__3594){
var x = cljs.core.first(arglist__3594);
var y = cljs.core.first(cljs.core.next(arglist__3594));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3594)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3594)));
return G__3593__delegate.call(this, x, y, z, args);
});
return G__3593;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3587.call(this);
case  1 :
return ep2__3588.call(this,x);
case  2 :
return ep2__3589.call(this,x,y);
case  3 :
return ep2__3590.call(this,x,y,z);
default:
return ep2__3591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3591.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3576 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3595 = (function (){
return true;
});
var ep3__3596 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3551 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3551))
{var and__3546__auto____3552 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3552))
{return p3.call(null,x);
} else
{return and__3546__auto____3552;
}
} else
{return and__3546__auto____3551;
}
})());
});
var ep3__3597 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3553 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3553))
{var and__3546__auto____3554 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3554))
{var and__3546__auto____3555 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3555))
{var and__3546__auto____3556 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3556))
{var and__3546__auto____3557 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3557))
{return p3.call(null,y);
} else
{return and__3546__auto____3557;
}
} else
{return and__3546__auto____3556;
}
} else
{return and__3546__auto____3555;
}
} else
{return and__3546__auto____3554;
}
} else
{return and__3546__auto____3553;
}
})());
});
var ep3__3598 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3558 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3558))
{var and__3546__auto____3559 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3559))
{var and__3546__auto____3560 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3560))
{var and__3546__auto____3561 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3561))
{var and__3546__auto____3562 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3562))
{var and__3546__auto____3563 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3563))
{var and__3546__auto____3564 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3564))
{var and__3546__auto____3565 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3565))
{return p3.call(null,z);
} else
{return and__3546__auto____3565;
}
} else
{return and__3546__auto____3564;
}
} else
{return and__3546__auto____3563;
}
} else
{return and__3546__auto____3562;
}
} else
{return and__3546__auto____3561;
}
} else
{return and__3546__auto____3560;
}
} else
{return and__3546__auto____3559;
}
} else
{return and__3546__auto____3558;
}
})());
});
var ep3__3599 = (function() { 
var G__3601__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3566 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3566))
{return cljs.core.every_QMARK_.call(null,(function (p1__3521_SHARP_){
var and__3546__auto____3567 = p1.call(null,p1__3521_SHARP_);

if(cljs.core.truth_(and__3546__auto____3567))
{var and__3546__auto____3568 = p2.call(null,p1__3521_SHARP_);

if(cljs.core.truth_(and__3546__auto____3568))
{return p3.call(null,p1__3521_SHARP_);
} else
{return and__3546__auto____3568;
}
} else
{return and__3546__auto____3567;
}
}),args);
} else
{return and__3546__auto____3566;
}
})());
};
var G__3601 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3601__delegate.call(this, x, y, z, args);
};
G__3601.cljs$lang$maxFixedArity = 3;
G__3601.cljs$lang$applyTo = (function (arglist__3602){
var x = cljs.core.first(arglist__3602);
var y = cljs.core.first(cljs.core.next(arglist__3602));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3602)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3602)));
return G__3601__delegate.call(this, x, y, z, args);
});
return G__3601;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3595.call(this);
case  1 :
return ep3__3596.call(this,x);
case  2 :
return ep3__3597.call(this,x,y);
case  3 :
return ep3__3598.call(this,x,y,z);
default:
return ep3__3599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3599.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3577 = (function() { 
var G__3603__delegate = function (p1,p2,p3,ps){
var ps__3569 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3604 = (function (){
return true;
});
var epn__3605 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3522_SHARP_){
return p1__3522_SHARP_.call(null,x);
}),ps__3569);
});
var epn__3606 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3523_SHARP_){
var and__3546__auto____3570 = p1__3523_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3570))
{return p1__3523_SHARP_.call(null,y);
} else
{return and__3546__auto____3570;
}
}),ps__3569);
});
var epn__3607 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3524_SHARP_){
var and__3546__auto____3571 = p1__3524_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3571))
{var and__3546__auto____3572 = p1__3524_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3572))
{return p1__3524_SHARP_.call(null,z);
} else
{return and__3546__auto____3572;
}
} else
{return and__3546__auto____3571;
}
}),ps__3569);
});
var epn__3608 = (function() { 
var G__3610__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3573 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3573))
{return cljs.core.every_QMARK_.call(null,(function (p1__3525_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3525_SHARP_,args);
}),ps__3569);
} else
{return and__3546__auto____3573;
}
})());
};
var G__3610 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3610__delegate.call(this, x, y, z, args);
};
G__3610.cljs$lang$maxFixedArity = 3;
G__3610.cljs$lang$applyTo = (function (arglist__3611){
var x = cljs.core.first(arglist__3611);
var y = cljs.core.first(cljs.core.next(arglist__3611));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3611)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3611)));
return G__3610__delegate.call(this, x, y, z, args);
});
return G__3610;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3604.call(this);
case  1 :
return epn__3605.call(this,x);
case  2 :
return epn__3606.call(this,x,y);
case  3 :
return epn__3607.call(this,x,y,z);
default:
return epn__3608.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3608.cljs$lang$applyTo;
return epn;
})()
};
var G__3603 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3603__delegate.call(this, p1, p2, p3, ps);
};
G__3603.cljs$lang$maxFixedArity = 3;
G__3603.cljs$lang$applyTo = (function (arglist__3612){
var p1 = cljs.core.first(arglist__3612);
var p2 = cljs.core.first(cljs.core.next(arglist__3612));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3612)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3612)));
return G__3603__delegate.call(this, p1, p2, p3, ps);
});
return G__3603;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3574.call(this,p1);
case  2 :
return every_pred__3575.call(this,p1,p2);
case  3 :
return every_pred__3576.call(this,p1,p2,p3);
default:
return every_pred__3577.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3577.cljs$lang$applyTo;
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
var some_fn__3652 = (function (p){
return (function() {
var sp1 = null;
var sp1__3657 = (function (){
return null;
});
var sp1__3658 = (function (x){
return p.call(null,x);
});
var sp1__3659 = (function (x,y){
var or__3548__auto____3614 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3614))
{return or__3548__auto____3614;
} else
{return p.call(null,y);
}
});
var sp1__3660 = (function (x,y,z){
var or__3548__auto____3615 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3615))
{return or__3548__auto____3615;
} else
{var or__3548__auto____3616 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3616))
{return or__3548__auto____3616;
} else
{return p.call(null,z);
}
}
});
var sp1__3661 = (function() { 
var G__3663__delegate = function (x,y,z,args){
var or__3548__auto____3617 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3617))
{return or__3548__auto____3617;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3663 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3663__delegate.call(this, x, y, z, args);
};
G__3663.cljs$lang$maxFixedArity = 3;
G__3663.cljs$lang$applyTo = (function (arglist__3664){
var x = cljs.core.first(arglist__3664);
var y = cljs.core.first(cljs.core.next(arglist__3664));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3664)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3664)));
return G__3663__delegate.call(this, x, y, z, args);
});
return G__3663;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3657.call(this);
case  1 :
return sp1__3658.call(this,x);
case  2 :
return sp1__3659.call(this,x,y);
case  3 :
return sp1__3660.call(this,x,y,z);
default:
return sp1__3661.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3661.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3653 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3665 = (function (){
return null;
});
var sp2__3666 = (function (x){
var or__3548__auto____3618 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3618))
{return or__3548__auto____3618;
} else
{return p2.call(null,x);
}
});
var sp2__3667 = (function (x,y){
var or__3548__auto____3619 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3619))
{return or__3548__auto____3619;
} else
{var or__3548__auto____3620 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3620))
{return or__3548__auto____3620;
} else
{var or__3548__auto____3621 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3621))
{return or__3548__auto____3621;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3668 = (function (x,y,z){
var or__3548__auto____3622 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3622))
{return or__3548__auto____3622;
} else
{var or__3548__auto____3623 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3623))
{return or__3548__auto____3623;
} else
{var or__3548__auto____3624 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3624))
{return or__3548__auto____3624;
} else
{var or__3548__auto____3625 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3625))
{return or__3548__auto____3625;
} else
{var or__3548__auto____3626 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3626))
{return or__3548__auto____3626;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3669 = (function() { 
var G__3671__delegate = function (x,y,z,args){
var or__3548__auto____3627 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3627))
{return or__3548__auto____3627;
} else
{return cljs.core.some.call(null,(function (p1__3530_SHARP_){
var or__3548__auto____3628 = p1.call(null,p1__3530_SHARP_);

if(cljs.core.truth_(or__3548__auto____3628))
{return or__3548__auto____3628;
} else
{return p2.call(null,p1__3530_SHARP_);
}
}),args);
}
};
var G__3671 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3671__delegate.call(this, x, y, z, args);
};
G__3671.cljs$lang$maxFixedArity = 3;
G__3671.cljs$lang$applyTo = (function (arglist__3672){
var x = cljs.core.first(arglist__3672);
var y = cljs.core.first(cljs.core.next(arglist__3672));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3672)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3672)));
return G__3671__delegate.call(this, x, y, z, args);
});
return G__3671;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3665.call(this);
case  1 :
return sp2__3666.call(this,x);
case  2 :
return sp2__3667.call(this,x,y);
case  3 :
return sp2__3668.call(this,x,y,z);
default:
return sp2__3669.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3669.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3654 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3673 = (function (){
return null;
});
var sp3__3674 = (function (x){
var or__3548__auto____3629 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3629))
{return or__3548__auto____3629;
} else
{var or__3548__auto____3630 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3630))
{return or__3548__auto____3630;
} else
{return p3.call(null,x);
}
}
});
var sp3__3675 = (function (x,y){
var or__3548__auto____3631 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3631))
{return or__3548__auto____3631;
} else
{var or__3548__auto____3632 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3632))
{return or__3548__auto____3632;
} else
{var or__3548__auto____3633 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3633))
{return or__3548__auto____3633;
} else
{var or__3548__auto____3634 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3634))
{return or__3548__auto____3634;
} else
{var or__3548__auto____3635 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3635))
{return or__3548__auto____3635;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3676 = (function (x,y,z){
var or__3548__auto____3636 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3636))
{return or__3548__auto____3636;
} else
{var or__3548__auto____3637 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3637))
{return or__3548__auto____3637;
} else
{var or__3548__auto____3638 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3638))
{return or__3548__auto____3638;
} else
{var or__3548__auto____3639 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3639))
{return or__3548__auto____3639;
} else
{var or__3548__auto____3640 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3640))
{return or__3548__auto____3640;
} else
{var or__3548__auto____3641 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3641))
{return or__3548__auto____3641;
} else
{var or__3548__auto____3642 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3642))
{return or__3548__auto____3642;
} else
{var or__3548__auto____3643 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3643))
{return or__3548__auto____3643;
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
var sp3__3677 = (function() { 
var G__3679__delegate = function (x,y,z,args){
var or__3548__auto____3644 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3644))
{return or__3548__auto____3644;
} else
{return cljs.core.some.call(null,(function (p1__3531_SHARP_){
var or__3548__auto____3645 = p1.call(null,p1__3531_SHARP_);

if(cljs.core.truth_(or__3548__auto____3645))
{return or__3548__auto____3645;
} else
{var or__3548__auto____3646 = p2.call(null,p1__3531_SHARP_);

if(cljs.core.truth_(or__3548__auto____3646))
{return or__3548__auto____3646;
} else
{return p3.call(null,p1__3531_SHARP_);
}
}
}),args);
}
};
var G__3679 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3679__delegate.call(this, x, y, z, args);
};
G__3679.cljs$lang$maxFixedArity = 3;
G__3679.cljs$lang$applyTo = (function (arglist__3680){
var x = cljs.core.first(arglist__3680);
var y = cljs.core.first(cljs.core.next(arglist__3680));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3680)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3680)));
return G__3679__delegate.call(this, x, y, z, args);
});
return G__3679;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3673.call(this);
case  1 :
return sp3__3674.call(this,x);
case  2 :
return sp3__3675.call(this,x,y);
case  3 :
return sp3__3676.call(this,x,y,z);
default:
return sp3__3677.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3677.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3655 = (function() { 
var G__3681__delegate = function (p1,p2,p3,ps){
var ps__3647 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3682 = (function (){
return null;
});
var spn__3683 = (function (x){
return cljs.core.some.call(null,(function (p1__3532_SHARP_){
return p1__3532_SHARP_.call(null,x);
}),ps__3647);
});
var spn__3684 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3533_SHARP_){
var or__3548__auto____3648 = p1__3533_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3648))
{return or__3548__auto____3648;
} else
{return p1__3533_SHARP_.call(null,y);
}
}),ps__3647);
});
var spn__3685 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3534_SHARP_){
var or__3548__auto____3649 = p1__3534_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3649))
{return or__3548__auto____3649;
} else
{var or__3548__auto____3650 = p1__3534_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3650))
{return or__3548__auto____3650;
} else
{return p1__3534_SHARP_.call(null,z);
}
}
}),ps__3647);
});
var spn__3686 = (function() { 
var G__3688__delegate = function (x,y,z,args){
var or__3548__auto____3651 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3651))
{return or__3548__auto____3651;
} else
{return cljs.core.some.call(null,(function (p1__3535_SHARP_){
return cljs.core.some.call(null,p1__3535_SHARP_,args);
}),ps__3647);
}
};
var G__3688 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3688__delegate.call(this, x, y, z, args);
};
G__3688.cljs$lang$maxFixedArity = 3;
G__3688.cljs$lang$applyTo = (function (arglist__3689){
var x = cljs.core.first(arglist__3689);
var y = cljs.core.first(cljs.core.next(arglist__3689));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3689)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3689)));
return G__3688__delegate.call(this, x, y, z, args);
});
return G__3688;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3682.call(this);
case  1 :
return spn__3683.call(this,x);
case  2 :
return spn__3684.call(this,x,y);
case  3 :
return spn__3685.call(this,x,y,z);
default:
return spn__3686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3686.cljs$lang$applyTo;
return spn;
})()
};
var G__3681 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3681__delegate.call(this, p1, p2, p3, ps);
};
G__3681.cljs$lang$maxFixedArity = 3;
G__3681.cljs$lang$applyTo = (function (arglist__3690){
var p1 = cljs.core.first(arglist__3690);
var p2 = cljs.core.first(cljs.core.next(arglist__3690));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3690)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3690)));
return G__3681__delegate.call(this, p1, p2, p3, ps);
});
return G__3681;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3652.call(this,p1);
case  2 :
return some_fn__3653.call(this,p1,p2);
case  3 :
return some_fn__3654.call(this,p1,p2,p3);
default:
return some_fn__3655.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3655.cljs$lang$applyTo;
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
var map__3703 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3691 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3691))
{var s__3692 = temp__3698__auto____3691;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3692)),map.call(null,f,cljs.core.rest.call(null,s__3692)));
} else
{return null;
}
})));
});
var map__3704 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3693 = cljs.core.seq.call(null,c1);
var s2__3694 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3695 = s1__3693;

if(cljs.core.truth_(and__3546__auto____3695))
{return s2__3694;
} else
{return and__3546__auto____3695;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3693),cljs.core.first.call(null,s2__3694)),map.call(null,f,cljs.core.rest.call(null,s1__3693),cljs.core.rest.call(null,s2__3694)));
} else
{return null;
}
})));
});
var map__3705 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3696 = cljs.core.seq.call(null,c1);
var s2__3697 = cljs.core.seq.call(null,c2);
var s3__3698 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3699 = s1__3696;

if(cljs.core.truth_(and__3546__auto____3699))
{var and__3546__auto____3700 = s2__3697;

if(cljs.core.truth_(and__3546__auto____3700))
{return s3__3698;
} else
{return and__3546__auto____3700;
}
} else
{return and__3546__auto____3699;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3696),cljs.core.first.call(null,s2__3697),cljs.core.first.call(null,s3__3698)),map.call(null,f,cljs.core.rest.call(null,s1__3696),cljs.core.rest.call(null,s2__3697),cljs.core.rest.call(null,s3__3698)));
} else
{return null;
}
})));
});
var map__3706 = (function() { 
var G__3708__delegate = function (f,c1,c2,c3,colls){
var step__3702 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3701 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3701)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3701),step.call(null,map.call(null,cljs.core.rest,ss__3701)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3613_SHARP_){
return cljs.core.apply.call(null,f,p1__3613_SHARP_);
}),step__3702.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3708 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3708__delegate.call(this, f, c1, c2, c3, colls);
};
G__3708.cljs$lang$maxFixedArity = 4;
G__3708.cljs$lang$applyTo = (function (arglist__3709){
var f = cljs.core.first(arglist__3709);
var c1 = cljs.core.first(cljs.core.next(arglist__3709));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3709)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3709))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3709))));
return G__3708__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3708;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3703.call(this,f,c1);
case  3 :
return map__3704.call(this,f,c1,c2);
case  4 :
return map__3705.call(this,f,c1,c2,c3);
default:
return map__3706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3706.cljs$lang$applyTo;
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
{var temp__3698__auto____3710 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3710))
{var s__3711 = temp__3698__auto____3710;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3711),take.call(null,(n - 1),cljs.core.rest.call(null,s__3711)));
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
var step__3714 = (function (n,coll){
while(true){
var s__3712 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3713 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3713))
{return s__3712;
} else
{return and__3546__auto____3713;
}
})()))
{{
var G__3715 = (n - 1);
var G__3716 = cljs.core.rest.call(null,s__3712);
n = G__3715;
coll = G__3716;
continue;
}
} else
{return s__3712;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3714.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3717 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3718 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3717.call(this,n);
case  2 :
return drop_last__3718.call(this,n,s);
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
var s__3720 = cljs.core.seq.call(null,coll);
var lead__3721 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3721))
{{
var G__3722 = cljs.core.next.call(null,s__3720);
var G__3723 = cljs.core.next.call(null,lead__3721);
s__3720 = G__3722;
lead__3721 = G__3723;
continue;
}
} else
{return s__3720;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3726 = (function (pred,coll){
while(true){
var s__3724 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3725 = s__3724;

if(cljs.core.truth_(and__3546__auto____3725))
{return pred.call(null,cljs.core.first.call(null,s__3724));
} else
{return and__3546__auto____3725;
}
})()))
{{
var G__3727 = pred;
var G__3728 = cljs.core.rest.call(null,s__3724);
pred = G__3727;
coll = G__3728;
continue;
}
} else
{return s__3724;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3726.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3729 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3729))
{var s__3730 = temp__3698__auto____3729;

return cljs.core.concat.call(null,s__3730,cycle.call(null,s__3730));
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
var repeat__3731 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3732 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3731.call(this,n);
case  2 :
return repeat__3732.call(this,n,x);
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
var repeatedly__3734 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3735 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3734.call(this,n);
case  2 :
return repeatedly__3735.call(this,n,f);
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
var interleave__3741 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3737 = cljs.core.seq.call(null,c1);
var s2__3738 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3739 = s1__3737;

if(cljs.core.truth_(and__3546__auto____3739))
{return s2__3738;
} else
{return and__3546__auto____3739;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3737),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3738),interleave.call(null,cljs.core.rest.call(null,s1__3737),cljs.core.rest.call(null,s2__3738))));
} else
{return null;
}
})));
});
var interleave__3742 = (function() { 
var G__3744__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3740 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3740)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3740),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3740)));
} else
{return null;
}
})));
};
var G__3744 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3744__delegate.call(this, c1, c2, colls);
};
G__3744.cljs$lang$maxFixedArity = 2;
G__3744.cljs$lang$applyTo = (function (arglist__3745){
var c1 = cljs.core.first(arglist__3745);
var c2 = cljs.core.first(cljs.core.next(arglist__3745));
var colls = cljs.core.rest(cljs.core.next(arglist__3745));
return G__3744__delegate.call(this, c1, c2, colls);
});
return G__3744;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3741.call(this,c1,c2);
default:
return interleave__3742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3742.cljs$lang$applyTo;
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
var cat__3748 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3746 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3746))
{var coll__3747 = temp__3695__auto____3746;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3747),cat.call(null,cljs.core.rest.call(null,coll__3747),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3748.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3749 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3750 = (function() { 
var G__3752__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3752 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3752__delegate.call(this, f, coll, colls);
};
G__3752.cljs$lang$maxFixedArity = 2;
G__3752.cljs$lang$applyTo = (function (arglist__3753){
var f = cljs.core.first(arglist__3753);
var coll = cljs.core.first(cljs.core.next(arglist__3753));
var colls = cljs.core.rest(cljs.core.next(arglist__3753));
return G__3752__delegate.call(this, f, coll, colls);
});
return G__3752;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3749.call(this,f,coll);
default:
return mapcat__3750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3750.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3754 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3754))
{var s__3755 = temp__3698__auto____3754;

var f__3756 = cljs.core.first.call(null,s__3755);
var r__3757 = cljs.core.rest.call(null,s__3755);

if(cljs.core.truth_(pred.call(null,f__3756)))
{return cljs.core.cons.call(null,f__3756,filter.call(null,pred,r__3757));
} else
{return filter.call(null,pred,r__3757);
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
var walk__3759 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3759.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3758_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3758_SHARP_));
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
var partition__3766 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3767 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3760 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3760))
{var s__3761 = temp__3698__auto____3760;

var p__3762 = cljs.core.take.call(null,n,s__3761);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3762))))
{return cljs.core.cons.call(null,p__3762,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3761)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3768 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3763 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3763))
{var s__3764 = temp__3698__auto____3763;

var p__3765 = cljs.core.take.call(null,n,s__3764);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3765))))
{return cljs.core.cons.call(null,p__3765,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3764)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3765,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3766.call(this,n,step);
case  3 :
return partition__3767.call(this,n,step,pad);
case  4 :
return partition__3768.call(this,n,step,pad,coll);
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
var get_in__3774 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3775 = (function (m,ks,not_found){
var sentinel__3770 = cljs.core.lookup_sentinel;
var m__3771 = m;
var ks__3772 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3772))
{var m__3773 = cljs.core.get.call(null,m__3771,cljs.core.first.call(null,ks__3772),sentinel__3770);

if(cljs.core.truth_((sentinel__3770 === m__3773)))
{return not_found;
} else
{{
var G__3777 = sentinel__3770;
var G__3778 = m__3773;
var G__3779 = cljs.core.next.call(null,ks__3772);
sentinel__3770 = G__3777;
m__3771 = G__3778;
ks__3772 = G__3779;
continue;
}
}
} else
{return m__3771;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3774.call(this,m,ks);
case  3 :
return get_in__3775.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3780,v){
var vec__3781__3782 = p__3780;
var k__3783 = cljs.core.nth.call(null,vec__3781__3782,0,null);
var ks__3784 = cljs.core.nthnext.call(null,vec__3781__3782,1);

if(cljs.core.truth_(ks__3784))
{return cljs.core.assoc.call(null,m,k__3783,assoc_in.call(null,cljs.core.get.call(null,m,k__3783),ks__3784,v));
} else
{return cljs.core.assoc.call(null,m,k__3783,v);
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
var update_in__delegate = function (m,p__3785,f,args){
var vec__3786__3787 = p__3785;
var k__3788 = cljs.core.nth.call(null,vec__3786__3787,0,null);
var ks__3789 = cljs.core.nthnext.call(null,vec__3786__3787,1);

if(cljs.core.truth_(ks__3789))
{return cljs.core.assoc.call(null,m,k__3788,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3788),ks__3789,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3788,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3788),args));
}
};
var update_in = function (m,p__3785,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3785, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3790){
var m = cljs.core.first(arglist__3790);
var p__3785 = cljs.core.first(cljs.core.next(arglist__3790));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3790)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3790)));
return update_in__delegate.call(this, m, p__3785, f, args);
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
var this__3791 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3816 = null;
var G__3816__3817 = (function (coll,k){
var this__3792 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3816__3818 = (function (coll,k,not_found){
var this__3793 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3816 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3816__3817.call(this,coll,k);
case  3 :
return G__3816__3818.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3816;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3794 = this;
var new_array__3795 = cljs.core.aclone.call(null,this__3794.array);

(new_array__3795[k] = v);
return (new cljs.core.Vector(this__3794.meta,new_array__3795));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3796 = this;
var new_array__3797 = cljs.core.aclone.call(null,this__3796.array);

new_array__3797.push(o);
return (new cljs.core.Vector(this__3796.meta,new_array__3797));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3820 = null;
var G__3820__3821 = (function (v,f){
var this__3798 = this;
return cljs.core.ci_reduce.call(null,this__3798.array,f);
});
var G__3820__3822 = (function (v,f,start){
var this__3799 = this;
return cljs.core.ci_reduce.call(null,this__3799.array,f,start);
});
G__3820 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3820__3821.call(this,v,f);
case  3 :
return G__3820__3822.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3820;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3800 = this;
if(cljs.core.truth_((this__3800.array.length > 0)))
{var vector_seq__3801 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3800.array.length)))
{return cljs.core.cons.call(null,(this__3800.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3801.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3802 = this;
return this__3802.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3803 = this;
var count__3804 = this__3803.array.length;

if(cljs.core.truth_((count__3804 > 0)))
{return (this__3803.array[(count__3804 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3805 = this;
if(cljs.core.truth_((this__3805.array.length > 0)))
{var new_array__3806 = cljs.core.aclone.call(null,this__3805.array);

new_array__3806.pop();
return (new cljs.core.Vector(this__3805.meta,new_array__3806));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3807 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3808 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3809 = this;
return (new cljs.core.Vector(meta,this__3809.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3810 = this;
return this__3810.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3824 = null;
var G__3824__3825 = (function (coll,n){
var this__3811 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3812 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3812))
{return (n < this__3811.array.length);
} else
{return and__3546__auto____3812;
}
})()))
{return (this__3811.array[n]);
} else
{return null;
}
});
var G__3824__3826 = (function (coll,n,not_found){
var this__3813 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3814 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3814))
{return (n < this__3813.array.length);
} else
{return and__3546__auto____3814;
}
})()))
{return (this__3813.array[n]);
} else
{return not_found;
}
});
G__3824 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3824__3825.call(this,coll,n);
case  3 :
return G__3824__3826.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3824;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3815 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3815.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3828 = null;
var G__3828__3829 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3828__3830 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3828 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3828__3829.call(this,_,k);
case  3 :
return G__3828__3830.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3828;
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
vector.cljs$lang$applyTo = (function (arglist__3832){
var args = cljs.core.seq( arglist__3832 );;
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
var this__3833 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3853 = null;
var G__3853__3854 = (function (coll,k){
var this__3834 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3853__3855 = (function (coll,k,not_found){
var this__3835 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3853 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3853__3854.call(this,coll,k);
case  3 :
return G__3853__3855.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3853;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__3836 = this;
var v_pos__3837 = (this__3836.start + key);

return (new cljs.core.Subvec(this__3836.meta,cljs.core._assoc.call(null,this__3836.v,v_pos__3837,val),this__3836.start,((this__3836.end > (v_pos__3837 + 1)) ? this__3836.end : (v_pos__3837 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3838 = this;
return (new cljs.core.Subvec(this__3838.meta,cljs.core._assoc_n.call(null,this__3838.v,this__3838.end,o),this__3838.start,(this__3838.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3857 = null;
var G__3857__3858 = (function (coll,f){
var this__3839 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__3857__3859 = (function (coll,f,start){
var this__3840 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__3857 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3857__3858.call(this,coll,f);
case  3 :
return G__3857__3859.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3857;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3841 = this;
var subvec_seq__3842 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__3841.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__3841.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__3842.call(null,this__3841.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3843 = this;
return (this__3843.end - this__3843.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3844 = this;
return cljs.core._nth.call(null,this__3844.v,(this__3844.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3845 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__3845.start,this__3845.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__3845.meta,this__3845.v,this__3845.start,(this__3845.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3846 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3847 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3848 = this;
return (new cljs.core.Subvec(meta,this__3848.v,this__3848.start,this__3848.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3849 = this;
return this__3849.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3861 = null;
var G__3861__3862 = (function (coll,n){
var this__3850 = this;
return cljs.core._nth.call(null,this__3850.v,(this__3850.start + n));
});
var G__3861__3863 = (function (coll,n,not_found){
var this__3851 = this;
return cljs.core._nth.call(null,this__3851.v,(this__3851.start + n),not_found);
});
G__3861 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3861__3862.call(this,coll,n);
case  3 :
return G__3861__3863.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3861;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3852 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3852.meta);
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
var subvec__3865 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3866 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__3865.call(this,v,start);
case  3 :
return subvec__3866.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__3868 = null;
var G__3868__3869 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3868__3870 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3868 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3868__3869.call(this,_,k);
case  3 :
return G__3868__3870.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3868;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3872 = this;
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
var len__3873 = array.length;

var i__3874 = 0;

while(true){
if(cljs.core.truth_((i__3874 < len__3873)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3874]))))
{return i__3874;
} else
{{
var G__3875 = (i__3874 + incr);
i__3874 = G__3875;
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
var obj_map_contains_key_QMARK___3877 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3878 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3876 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3876))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3876;
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
return obj_map_contains_key_QMARK___3877.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3878.call(this,k,strobj,true_val,false_val);
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
var this__3881 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3900 = null;
var G__3900__3901 = (function (coll,k){
var this__3882 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3900__3902 = (function (coll,k,not_found){
var this__3883 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3883.strobj,(this__3883.strobj[k]),not_found);
});
G__3900 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3900__3901.call(this,coll,k);
case  3 :
return G__3900__3902.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3900;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3884 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3885 = goog.object.clone.call(null,this__3884.strobj);
var overwrite_QMARK___3886 = new_strobj__3885.hasOwnProperty(k);

(new_strobj__3885[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3886))
{return (new cljs.core.ObjMap(this__3884.meta,this__3884.keys,new_strobj__3885));
} else
{var new_keys__3887 = cljs.core.aclone.call(null,this__3884.keys);

new_keys__3887.push(k);
return (new cljs.core.ObjMap(this__3884.meta,new_keys__3887,new_strobj__3885));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3884.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3888 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3888.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3889 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3890 = this;
if(cljs.core.truth_((this__3890.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3880_SHARP_){
return cljs.core.vector.call(null,p1__3880_SHARP_,(this__3890.strobj[p1__3880_SHARP_]));
}),this__3890.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3891 = this;
return this__3891.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3892 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3893 = this;
return (new cljs.core.ObjMap(meta,this__3893.keys,this__3893.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3894 = this;
return this__3894.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3895 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3895.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3896 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3897 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3897))
{return this__3896.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3897;
}
})()))
{var new_keys__3898 = cljs.core.aclone.call(null,this__3896.keys);
var new_strobj__3899 = goog.object.clone.call(null,this__3896.strobj);

new_keys__3898.splice(cljs.core.scan_array.call(null,1,k,new_keys__3898),1);
cljs.core.js_delete.call(null,new_strobj__3899,k);
return (new cljs.core.ObjMap(this__3896.meta,new_keys__3898,new_strobj__3899));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3905 = null;
var G__3905__3906 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3905__3907 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3905 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3905__3906.call(this,_,k);
case  3 :
return G__3905__3907.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3905;
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
var this__3909 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3939 = null;
var G__3939__3940 = (function (coll,k){
var this__3910 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3939__3941 = (function (coll,k,not_found){
var this__3911 = this;
var bucket__3912 = (this__3911.hashobj[cljs.core.hash.call(null,k)]);
var i__3913 = (cljs.core.truth_(bucket__3912)?cljs.core.scan_array.call(null,2,k,bucket__3912):null);

if(cljs.core.truth_(i__3913))
{return (bucket__3912[(i__3913 + 1)]);
} else
{return not_found;
}
});
G__3939 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3939__3940.call(this,coll,k);
case  3 :
return G__3939__3941.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3939;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3914 = this;
var h__3915 = cljs.core.hash.call(null,k);
var bucket__3916 = (this__3914.hashobj[h__3915]);

if(cljs.core.truth_(bucket__3916))
{var new_bucket__3917 = cljs.core.aclone.call(null,bucket__3916);
var new_hashobj__3918 = goog.object.clone.call(null,this__3914.hashobj);

(new_hashobj__3918[h__3915] = new_bucket__3917);
var temp__3695__auto____3919 = cljs.core.scan_array.call(null,2,k,new_bucket__3917);

if(cljs.core.truth_(temp__3695__auto____3919))
{var i__3920 = temp__3695__auto____3919;

(new_bucket__3917[(i__3920 + 1)] = v);
return (new cljs.core.HashMap(this__3914.meta,this__3914.count,new_hashobj__3918));
} else
{new_bucket__3917.push(k,v);
return (new cljs.core.HashMap(this__3914.meta,(this__3914.count + 1),new_hashobj__3918));
}
} else
{var new_hashobj__3921 = goog.object.clone.call(null,this__3914.hashobj);

(new_hashobj__3921[h__3915] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3914.meta,(this__3914.count + 1),new_hashobj__3921));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3922 = this;
var bucket__3923 = (this__3922.hashobj[cljs.core.hash.call(null,k)]);
var i__3924 = (cljs.core.truth_(bucket__3923)?cljs.core.scan_array.call(null,2,k,bucket__3923):null);

if(cljs.core.truth_(i__3924))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3925 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3926 = this;
if(cljs.core.truth_((this__3926.count > 0)))
{var hashes__3927 = cljs.core.js_keys.call(null,this__3926.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3904_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3926.hashobj[p1__3904_SHARP_])));
}),hashes__3927);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3928 = this;
return this__3928.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3929 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3930 = this;
return (new cljs.core.HashMap(meta,this__3930.count,this__3930.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3931 = this;
return this__3931.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3932 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3932.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3933 = this;
var h__3934 = cljs.core.hash.call(null,k);
var bucket__3935 = (this__3933.hashobj[h__3934]);
var i__3936 = (cljs.core.truth_(bucket__3935)?cljs.core.scan_array.call(null,2,k,bucket__3935):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3936)))
{return coll;
} else
{var new_hashobj__3937 = goog.object.clone.call(null,this__3933.hashobj);

if(cljs.core.truth_((3 > bucket__3935.length)))
{cljs.core.js_delete.call(null,new_hashobj__3937,h__3934);
} else
{var new_bucket__3938 = cljs.core.aclone.call(null,bucket__3935);

new_bucket__3938.splice(i__3936,2);
(new_hashobj__3937[h__3934] = new_bucket__3938);
}
return (new cljs.core.HashMap(this__3933.meta,(this__3933.count - 1),new_hashobj__3937));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3943 = ks.length;

var i__3944 = 0;
var out__3945 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3944 < len__3943)))
{{
var G__3946 = (i__3944 + 1);
var G__3947 = cljs.core.assoc.call(null,out__3945,(ks[i__3944]),(vs[i__3944]));
i__3944 = G__3946;
out__3945 = G__3947;
continue;
}
} else
{return out__3945;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3948 = null;
var G__3948__3949 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3948__3950 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3948 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3948__3949.call(this,_,k);
case  3 :
return G__3948__3950.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3948;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3952 = cljs.core.seq.call(null,keyvals);
var out__3953 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3952))
{{
var G__3954 = cljs.core.nnext.call(null,in$__3952);
var G__3955 = cljs.core.assoc.call(null,out__3953,cljs.core.first.call(null,in$__3952),cljs.core.second.call(null,in$__3952));
in$__3952 = G__3954;
out__3953 = G__3955;
continue;
}
} else
{return out__3953;
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
hash_map.cljs$lang$applyTo = (function (arglist__3956){
var keyvals = cljs.core.seq( arglist__3956 );;
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
{return cljs.core.reduce.call(null,(function (p1__3957_SHARP_,p2__3958_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3959 = p1__3957_SHARP_;

if(cljs.core.truth_(or__3548__auto____3959))
{return or__3548__auto____3959;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3958_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__3960){
var maps = cljs.core.seq( arglist__3960 );;
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
{var merge_entry__3963 = (function (m,e){
var k__3961 = cljs.core.first.call(null,e);
var v__3962 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3961)))
{return cljs.core.assoc.call(null,m,k__3961,f.call(null,cljs.core.get.call(null,m,k__3961),v__3962));
} else
{return cljs.core.assoc.call(null,m,k__3961,v__3962);
}
});
var merge2__3965 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3963,(function (){var or__3548__auto____3964 = m1;

if(cljs.core.truth_(or__3548__auto____3964))
{return or__3548__auto____3964;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3965,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__3966){
var f = cljs.core.first(arglist__3966);
var maps = cljs.core.rest(arglist__3966);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3968 = cljs.core.ObjMap.fromObject([],{});
var keys__3969 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3969))
{var key__3970 = cljs.core.first.call(null,keys__3969);
var entry__3971 = cljs.core.get.call(null,map,key__3970,"﷐'user/not-found");

{
var G__3972 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3971,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3968,key__3970,entry__3971):ret__3968);
var G__3973 = cljs.core.next.call(null,keys__3969);
ret__3968 = G__3972;
keys__3969 = G__3973;
continue;
}
} else
{return ret__3968;
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
var this__3974 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3987 = null;
var G__3987__3988 = (function (coll,v){
var this__3975 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3987__3989 = (function (coll,v,not_found){
var this__3976 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3976.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3987 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3987__3988.call(this,coll,v);
case  3 :
return G__3987__3989.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3987;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3977 = this;
return (new cljs.core.Set(this__3977.meta,cljs.core.assoc.call(null,this__3977.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3978 = this;
return cljs.core.keys.call(null,this__3978.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3979 = this;
return (new cljs.core.Set(this__3979.meta,cljs.core.dissoc.call(null,this__3979.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3980 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3981 = this;
var and__3546__auto____3982 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3982))
{var and__3546__auto____3983 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3983))
{return cljs.core.every_QMARK_.call(null,(function (p1__3967_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3967_SHARP_);
}),other);
} else
{return and__3546__auto____3983;
}
} else
{return and__3546__auto____3982;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3984 = this;
return (new cljs.core.Set(meta,this__3984.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3985 = this;
return this__3985.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3986 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3986.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3991 = null;
var G__3991__3992 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3991__3993 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3991 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3991__3992.call(this,_,k);
case  3 :
return G__3991__3993.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3991;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3996 = cljs.core.seq.call(null,coll);
var out__3997 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3996))))
{{
var G__3998 = cljs.core.rest.call(null,in$__3996);
var G__3999 = cljs.core.conj.call(null,out__3997,cljs.core.first.call(null,in$__3996));
in$__3996 = G__3998;
out__3997 = G__3999;
continue;
}
} else
{return out__3997;
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
{var n__4000 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4001 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4001))
{var e__4002 = temp__3695__auto____4001;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4002));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4000,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3995_SHARP_){
var temp__3695__auto____4003 = cljs.core.find.call(null,smap,p1__3995_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4003))
{var e__4004 = temp__3695__auto____4003;

return cljs.core.second.call(null,e__4004);
} else
{return p1__3995_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4012 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4005,seen){
while(true){
var vec__4006__4007 = p__4005;
var f__4008 = cljs.core.nth.call(null,vec__4006__4007,0,null);
var xs__4009 = vec__4006__4007;

var temp__3698__auto____4010 = cljs.core.seq.call(null,xs__4009);

if(cljs.core.truth_(temp__3698__auto____4010))
{var s__4011 = temp__3698__auto____4010;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4008)))
{{
var G__4013 = cljs.core.rest.call(null,s__4011);
var G__4014 = seen;
p__4005 = G__4013;
seen = G__4014;
continue;
}
} else
{return cljs.core.cons.call(null,f__4008,step.call(null,cljs.core.rest.call(null,s__4011),cljs.core.conj.call(null,seen,f__4008)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4012.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4015 = cljs.core.Vector.fromArray([]);
var s__4016 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4016)))
{{
var G__4017 = cljs.core.conj.call(null,ret__4015,cljs.core.first.call(null,s__4016));
var G__4018 = cljs.core.next.call(null,s__4016);
ret__4015 = G__4017;
s__4016 = G__4018;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4015);
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
{if(cljs.core.truth_((function (){var or__3548__auto____4019 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4019))
{return or__3548__auto____4019;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4020 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4020 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4020 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____4021 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4021))
{return or__3548__auto____4021;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4022 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4022 > -1)))
{return cljs.core.subs.call(null,x,2,i__4022);
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
var map__4025 = cljs.core.ObjMap.fromObject([],{});
var ks__4026 = cljs.core.seq.call(null,keys);
var vs__4027 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4028 = ks__4026;

if(cljs.core.truth_(and__3546__auto____4028))
{return vs__4027;
} else
{return and__3546__auto____4028;
}
})()))
{{
var G__4029 = cljs.core.assoc.call(null,map__4025,cljs.core.first.call(null,ks__4026),cljs.core.first.call(null,vs__4027));
var G__4030 = cljs.core.next.call(null,ks__4026);
var G__4031 = cljs.core.next.call(null,vs__4027);
map__4025 = G__4029;
ks__4026 = G__4030;
vs__4027 = G__4031;
continue;
}
} else
{return map__4025;
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
var max_key__4034 = (function (k,x){
return x;
});
var max_key__4035 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4036 = (function() { 
var G__4038__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4023_SHARP_,p2__4024_SHARP_){
return max_key.call(null,k,p1__4023_SHARP_,p2__4024_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4038 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4038__delegate.call(this, k, x, y, more);
};
G__4038.cljs$lang$maxFixedArity = 3;
G__4038.cljs$lang$applyTo = (function (arglist__4039){
var k = cljs.core.first(arglist__4039);
var x = cljs.core.first(cljs.core.next(arglist__4039));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4039)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4039)));
return G__4038__delegate.call(this, k, x, y, more);
});
return G__4038;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4034.call(this,k,x);
case  3 :
return max_key__4035.call(this,k,x,y);
default:
return max_key__4036.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4036.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4040 = (function (k,x){
return x;
});
var min_key__4041 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4042 = (function() { 
var G__4044__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4032_SHARP_,p2__4033_SHARP_){
return min_key.call(null,k,p1__4032_SHARP_,p2__4033_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4044 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4044__delegate.call(this, k, x, y, more);
};
G__4044.cljs$lang$maxFixedArity = 3;
G__4044.cljs$lang$applyTo = (function (arglist__4045){
var k = cljs.core.first(arglist__4045);
var x = cljs.core.first(cljs.core.next(arglist__4045));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4045)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4045)));
return G__4044__delegate.call(this, k, x, y, more);
});
return G__4044;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4040.call(this,k,x);
case  3 :
return min_key__4041.call(this,k,x,y);
default:
return min_key__4042.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4042.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4048 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4049 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4046 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4046))
{var s__4047 = temp__3698__auto____4046;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4047),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4047)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4048.call(this,n,step);
case  3 :
return partition_all__4049.call(this,n,step,coll);
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
var temp__3698__auto____4051 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4051))
{var s__4052 = temp__3698__auto____4051;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4052))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4052),take_while.call(null,pred,cljs.core.rest.call(null,s__4052)));
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
var this__4053 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4054 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4070 = null;
var G__4070__4071 = (function (rng,f){
var this__4055 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4070__4072 = (function (rng,f,s){
var this__4056 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4070 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4070__4071.call(this,rng,f);
case  3 :
return G__4070__4072.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4070;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4057 = this;
var comp__4058 = (cljs.core.truth_((this__4057.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4058.call(null,this__4057.start,this__4057.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4059 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4059.end - this__4059.start) / this__4059.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4060 = this;
return this__4060.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4061 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4061.meta,(this__4061.start + this__4061.step),this__4061.end,this__4061.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4062 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4063 = this;
return (new cljs.core.Range(meta,this__4063.start,this__4063.end,this__4063.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4064 = this;
return this__4064.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4074 = null;
var G__4074__4075 = (function (rng,n){
var this__4065 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4065.start + (n * this__4065.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4066 = (this__4065.start > this__4065.end);

if(cljs.core.truth_(and__3546__auto____4066))
{return cljs.core._EQ_.call(null,this__4065.step,0);
} else
{return and__3546__auto____4066;
}
})()))
{return this__4065.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4074__4076 = (function (rng,n,not_found){
var this__4067 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4067.start + (n * this__4067.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4068 = (this__4067.start > this__4067.end);

if(cljs.core.truth_(and__3546__auto____4068))
{return cljs.core._EQ_.call(null,this__4067.step,0);
} else
{return and__3546__auto____4068;
}
})()))
{return this__4067.start;
} else
{return not_found;
}
}
});
G__4074 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4074__4075.call(this,rng,n);
case  3 :
return G__4074__4076.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4074;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4069 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4069.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4078 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4079 = (function (end){
return range.call(null,0,end,1);
});
var range__4080 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4081 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4078.call(this);
case  1 :
return range__4079.call(this,start);
case  2 :
return range__4080.call(this,start,end);
case  3 :
return range__4081.call(this,start,end,step);
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
var temp__3698__auto____4083 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4083))
{var s__4084 = temp__3698__auto____4083;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4084),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4084)));
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
var temp__3698__auto____4086 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4086))
{var s__4087 = temp__3698__auto____4086;

var fst__4088 = cljs.core.first.call(null,s__4087);
var fv__4089 = f.call(null,fst__4088);
var run__4090 = cljs.core.cons.call(null,fst__4088,cljs.core.take_while.call(null,(function (p1__4085_SHARP_){
return cljs.core._EQ_.call(null,fv__4089,f.call(null,p1__4085_SHARP_));
}),cljs.core.next.call(null,s__4087)));

return cljs.core.cons.call(null,run__4090,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4090),s__4087))));
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
var reductions__4105 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4101 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4101))
{var s__4102 = temp__3695__auto____4101;

return reductions.call(null,f,cljs.core.first.call(null,s__4102),cljs.core.rest.call(null,s__4102));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4106 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4103 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4103))
{var s__4104 = temp__3698__auto____4103;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4104)),cljs.core.rest.call(null,s__4104));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4105.call(this,f,init);
case  3 :
return reductions__4106.call(this,f,init,coll);
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
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__4109 = (function (f){
return (function() {
var G__4114 = null;
var G__4114__4115 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4114__4116 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4114__4117 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4114__4118 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4114__4119 = (function() { 
var G__4121__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4121 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4121__delegate.call(this, x, y, z, args);
};
G__4121.cljs$lang$maxFixedArity = 3;
G__4121.cljs$lang$applyTo = (function (arglist__4122){
var x = cljs.core.first(arglist__4122);
var y = cljs.core.first(cljs.core.next(arglist__4122));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4122)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4122)));
return G__4121__delegate.call(this, x, y, z, args);
});
return G__4121;
})()
;
G__4114 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4114__4115.call(this);
case  1 :
return G__4114__4116.call(this,x);
case  2 :
return G__4114__4117.call(this,x,y);
case  3 :
return G__4114__4118.call(this,x,y,z);
default:
return G__4114__4119.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4114.cljs$lang$maxFixedArity = 3;
G__4114.cljs$lang$applyTo = G__4114__4119.cljs$lang$applyTo;
return G__4114;
})()
});
var juxt__4110 = (function (f,g){
return (function() {
var G__4123 = null;
var G__4123__4124 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4123__4125 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4123__4126 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4123__4127 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4123__4128 = (function() { 
var G__4130__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4130 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4130__delegate.call(this, x, y, z, args);
};
G__4130.cljs$lang$maxFixedArity = 3;
G__4130.cljs$lang$applyTo = (function (arglist__4131){
var x = cljs.core.first(arglist__4131);
var y = cljs.core.first(cljs.core.next(arglist__4131));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4131)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4131)));
return G__4130__delegate.call(this, x, y, z, args);
});
return G__4130;
})()
;
G__4123 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4123__4124.call(this);
case  1 :
return G__4123__4125.call(this,x);
case  2 :
return G__4123__4126.call(this,x,y);
case  3 :
return G__4123__4127.call(this,x,y,z);
default:
return G__4123__4128.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4123.cljs$lang$maxFixedArity = 3;
G__4123.cljs$lang$applyTo = G__4123__4128.cljs$lang$applyTo;
return G__4123;
})()
});
var juxt__4111 = (function (f,g,h){
return (function() {
var G__4132 = null;
var G__4132__4133 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4132__4134 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4132__4135 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4132__4136 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4132__4137 = (function() { 
var G__4139__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4139 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4139__delegate.call(this, x, y, z, args);
};
G__4139.cljs$lang$maxFixedArity = 3;
G__4139.cljs$lang$applyTo = (function (arglist__4140){
var x = cljs.core.first(arglist__4140);
var y = cljs.core.first(cljs.core.next(arglist__4140));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4140)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4140)));
return G__4139__delegate.call(this, x, y, z, args);
});
return G__4139;
})()
;
G__4132 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4132__4133.call(this);
case  1 :
return G__4132__4134.call(this,x);
case  2 :
return G__4132__4135.call(this,x,y);
case  3 :
return G__4132__4136.call(this,x,y,z);
default:
return G__4132__4137.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4132.cljs$lang$maxFixedArity = 3;
G__4132.cljs$lang$applyTo = G__4132__4137.cljs$lang$applyTo;
return G__4132;
})()
});
var juxt__4112 = (function() { 
var G__4141__delegate = function (f,g,h,fs){
var fs__4108 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4142 = null;
var G__4142__4143 = (function (){
return cljs.core.reduce.call(null,(function (p1__4091_SHARP_,p2__4092_SHARP_){
return cljs.core.conj.call(null,p1__4091_SHARP_,p2__4092_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4108);
});
var G__4142__4144 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4093_SHARP_,p2__4094_SHARP_){
return cljs.core.conj.call(null,p1__4093_SHARP_,p2__4094_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4108);
});
var G__4142__4145 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4095_SHARP_,p2__4096_SHARP_){
return cljs.core.conj.call(null,p1__4095_SHARP_,p2__4096_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4108);
});
var G__4142__4146 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4097_SHARP_,p2__4098_SHARP_){
return cljs.core.conj.call(null,p1__4097_SHARP_,p2__4098_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4108);
});
var G__4142__4147 = (function() { 
var G__4149__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4099_SHARP_,p2__4100_SHARP_){
return cljs.core.conj.call(null,p1__4099_SHARP_,cljs.core.apply.call(null,p2__4100_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4108);
};
var G__4149 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4149__delegate.call(this, x, y, z, args);
};
G__4149.cljs$lang$maxFixedArity = 3;
G__4149.cljs$lang$applyTo = (function (arglist__4150){
var x = cljs.core.first(arglist__4150);
var y = cljs.core.first(cljs.core.next(arglist__4150));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4150)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4150)));
return G__4149__delegate.call(this, x, y, z, args);
});
return G__4149;
})()
;
G__4142 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4142__4143.call(this);
case  1 :
return G__4142__4144.call(this,x);
case  2 :
return G__4142__4145.call(this,x,y);
case  3 :
return G__4142__4146.call(this,x,y,z);
default:
return G__4142__4147.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4142.cljs$lang$maxFixedArity = 3;
G__4142.cljs$lang$applyTo = G__4142__4147.cljs$lang$applyTo;
return G__4142;
})()
};
var G__4141 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4141__delegate.call(this, f, g, h, fs);
};
G__4141.cljs$lang$maxFixedArity = 3;
G__4141.cljs$lang$applyTo = (function (arglist__4151){
var f = cljs.core.first(arglist__4151);
var g = cljs.core.first(cljs.core.next(arglist__4151));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4151)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4151)));
return G__4141__delegate.call(this, f, g, h, fs);
});
return G__4141;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4109.call(this,f);
case  2 :
return juxt__4110.call(this,f,g);
case  3 :
return juxt__4111.call(this,f,g,h);
default:
return juxt__4112.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4112.cljs$lang$applyTo;
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
var dorun__4153 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4156 = cljs.core.next.call(null,coll);
coll = G__4156;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4154 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4152 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4152))
{return (n > 0);
} else
{return and__3546__auto____4152;
}
})()))
{{
var G__4157 = (n - 1);
var G__4158 = cljs.core.next.call(null,coll);
n = G__4157;
coll = G__4158;
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
return dorun__4153.call(this,n);
case  2 :
return dorun__4154.call(this,n,coll);
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
var doall__4159 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4160 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4159.call(this,n);
case  2 :
return doall__4160.call(this,n,coll);
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
var matches__4162 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4162),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4162),1)))
{return cljs.core.first.call(null,matches__4162);
} else
{return cljs.core.vec.call(null,matches__4162);
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
var matches__4163 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__4163)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4163),1)))
{return cljs.core.first.call(null,matches__4163);
} else
{return cljs.core.vec.call(null,matches__4163);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4164 = cljs.core.re_find.call(null,re,s);
var match_idx__4165 = s.search(re);
var match_str__4166 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4164))?cljs.core.first.call(null,match_data__4164):match_data__4164);
var post_match__4167 = cljs.core.subs.call(null,s,(match_idx__4165 + cljs.core.count.call(null,match_str__4166)));

if(cljs.core.truth_(match_data__4164))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4164,re_seq.call(null,re,post_match__4167));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4168_SHARP_){
return print_one.call(null,p1__4168_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4169 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____4169))
{var and__3546__auto____4173 = (function (){var x__321__auto____4170 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4171 = x__321__auto____4170;

if(cljs.core.truth_(and__3546__auto____4171))
{var and__3546__auto____4172 = x__321__auto____4170.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4172))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____4170));
} else
{return and__3546__auto____4172;
}
} else
{return and__3546__auto____4171;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__321__auto____4170);
}
})();

if(cljs.core.truth_(and__3546__auto____4173))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4173;
}
} else
{return and__3546__auto____4169;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__321__auto____4174 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4175 = x__321__auto____4174;

if(cljs.core.truth_(and__3546__auto____4175))
{var and__3546__auto____4176 = x__321__auto____4174.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4176))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____4174));
} else
{return and__3546__auto____4176;
}
} else
{return and__3546__auto____4175;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__321__auto____4174);
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
var first_obj__4177 = cljs.core.first.call(null,objs);
var sb__4178 = (new goog.string.StringBuffer());

var G__4179__4180 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4179__4180))
{var obj__4181 = cljs.core.first.call(null,G__4179__4180);
var G__4179__4182 = G__4179__4180;

while(true){
if(cljs.core.truth_((obj__4181 === first_obj__4177)))
{} else
{sb__4178.append(" ");
}
var G__4183__4184 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4181,opts));

if(cljs.core.truth_(G__4183__4184))
{var string__4185 = cljs.core.first.call(null,G__4183__4184);
var G__4183__4186 = G__4183__4184;

while(true){
sb__4178.append(string__4185);
var temp__3698__auto____4187 = cljs.core.next.call(null,G__4183__4186);

if(cljs.core.truth_(temp__3698__auto____4187))
{var G__4183__4188 = temp__3698__auto____4187;

{
var G__4191 = cljs.core.first.call(null,G__4183__4188);
var G__4192 = G__4183__4188;
string__4185 = G__4191;
G__4183__4186 = G__4192;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4189 = cljs.core.next.call(null,G__4179__4182);

if(cljs.core.truth_(temp__3698__auto____4189))
{var G__4179__4190 = temp__3698__auto____4189;

{
var G__4193 = cljs.core.first.call(null,G__4179__4190);
var G__4194 = G__4179__4190;
obj__4181 = G__4193;
G__4179__4182 = G__4194;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__4178);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4195 = cljs.core.first.call(null,objs);

var G__4196__4197 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4196__4197))
{var obj__4198 = cljs.core.first.call(null,G__4196__4197);
var G__4196__4199 = G__4196__4197;

while(true){
if(cljs.core.truth_((obj__4198 === first_obj__4195)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4200__4201 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4198,opts));

if(cljs.core.truth_(G__4200__4201))
{var string__4202 = cljs.core.first.call(null,G__4200__4201);
var G__4200__4203 = G__4200__4201;

while(true){
cljs.core.string_print.call(null,string__4202);
var temp__3698__auto____4204 = cljs.core.next.call(null,G__4200__4203);

if(cljs.core.truth_(temp__3698__auto____4204))
{var G__4200__4205 = temp__3698__auto____4204;

{
var G__4208 = cljs.core.first.call(null,G__4200__4205);
var G__4209 = G__4200__4205;
string__4202 = G__4208;
G__4200__4203 = G__4209;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4206 = cljs.core.next.call(null,G__4196__4199);

if(cljs.core.truth_(temp__3698__auto____4206))
{var G__4196__4207 = temp__3698__auto____4206;

{
var G__4210 = cljs.core.first.call(null,G__4196__4207);
var G__4211 = G__4196__4207;
obj__4198 = G__4210;
G__4196__4199 = G__4211;
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
pr_str.cljs$lang$applyTo = (function (arglist__4212){
var objs = cljs.core.seq( arglist__4212 );;
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
pr.cljs$lang$applyTo = (function (arglist__4213){
var objs = cljs.core.seq( arglist__4213 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__4214){
var objs = cljs.core.seq( arglist__4214 );;
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
println.cljs$lang$applyTo = (function (arglist__4215){
var objs = cljs.core.seq( arglist__4215 );;
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
prn.cljs$lang$applyTo = (function (arglist__4216){
var objs = cljs.core.seq( arglist__4216 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4217 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4217,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4218 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4218))
{var nspc__4219 = temp__3698__auto____4218;

return cljs.core.str.call(null,nspc__4219,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4220 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4220))
{var nspc__4221 = temp__3698__auto____4220;

return cljs.core.str.call(null,nspc__4221,"/");
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
var pr_pair__4222 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4222,"{",", ","}",opts,coll);
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
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4223 = this;
var G__4224__4225 = cljs.core.seq.call(null,this__4223.watches);

if(cljs.core.truth_(G__4224__4225))
{var G__4227__4229 = cljs.core.first.call(null,G__4224__4225);
var vec__4228__4230 = G__4227__4229;
var key__4231 = cljs.core.nth.call(null,vec__4228__4230,0,null);
var f__4232 = cljs.core.nth.call(null,vec__4228__4230,1,null);
var G__4224__4233 = G__4224__4225;

var G__4227__4234 = G__4227__4229;
var G__4224__4235 = G__4224__4233;

while(true){
var vec__4236__4237 = G__4227__4234;
var key__4238 = cljs.core.nth.call(null,vec__4236__4237,0,null);
var f__4239 = cljs.core.nth.call(null,vec__4236__4237,1,null);
var G__4224__4240 = G__4224__4235;

f__4239.call(null,key__4238,this$,oldval,newval);
var temp__3698__auto____4241 = cljs.core.next.call(null,G__4224__4240);

if(cljs.core.truth_(temp__3698__auto____4241))
{var G__4224__4242 = temp__3698__auto____4241;

{
var G__4249 = cljs.core.first.call(null,G__4224__4242);
var G__4250 = G__4224__4242;
G__4227__4234 = G__4249;
G__4224__4235 = G__4250;
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
var this__4243 = this;
return this$.watches = cljs.core.assoc.call(null,this__4243.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4244 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4244.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4245 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4245.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4246 = this;
return this__4246.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4247 = this;
return this__4247.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4248 = this;
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
var atom__4257 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4258 = (function() { 
var G__4260__delegate = function (x,p__4251){
var map__4252__4253 = p__4251;
var map__4252__4254 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4252__4253))?cljs.core.apply.call(null,cljs.core.hash_map,map__4252__4253):map__4252__4253);
var validator__4255 = cljs.core.get.call(null,map__4252__4254,"﷐'validator");
var meta__4256 = cljs.core.get.call(null,map__4252__4254,"﷐'meta");

return (new cljs.core.Atom(x,meta__4256,validator__4255,null));
};
var G__4260 = function (x,var_args){
var p__4251 = null;
if (goog.isDef(var_args)) {
  p__4251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4260__delegate.call(this, x, p__4251);
};
G__4260.cljs$lang$maxFixedArity = 1;
G__4260.cljs$lang$applyTo = (function (arglist__4261){
var x = cljs.core.first(arglist__4261);
var p__4251 = cljs.core.rest(arglist__4261);
return G__4260__delegate.call(this, x, p__4251);
});
return G__4260;
})()
;
atom = function(x,var_args){
var p__4251 = var_args;
switch(arguments.length){
case  1 :
return atom__4257.call(this,x);
default:
return atom__4258.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4258.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4262 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4262))
{var validate__4263 = temp__3698__auto____4262;

if(cljs.core.truth_(validate__4263.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",2934))))));
}
} else
{}
var old_value__4264 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4264,new_value);
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
var swap_BANG___4265 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4266 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4267 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4268 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4269 = (function() { 
var G__4271__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4271 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4271__delegate.call(this, a, f, x, y, z, more);
};
G__4271.cljs$lang$maxFixedArity = 5;
G__4271.cljs$lang$applyTo = (function (arglist__4272){
var a = cljs.core.first(arglist__4272);
var f = cljs.core.first(cljs.core.next(arglist__4272));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4272)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4272))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4272)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4272)))));
return G__4271__delegate.call(this, a, f, x, y, z, more);
});
return G__4271;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4265.call(this,a,f);
case  3 :
return swap_BANG___4266.call(this,a,f,x);
case  4 :
return swap_BANG___4267.call(this,a,f,x,y);
case  5 :
return swap_BANG___4268.call(this,a,f,x,y,z);
default:
return swap_BANG___4269.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4269.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4273){
var iref = cljs.core.first(arglist__4273);
var f = cljs.core.first(cljs.core.next(arglist__4273));
var args = cljs.core.rest(cljs.core.next(arglist__4273));
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
var gensym__4274 = (function (){
return gensym.call(null,"G__");
});
var gensym__4275 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4274.call(this);
case  1 :
return gensym__4275.call(this,prefix_string);
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
var this__4277 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__4277.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4278 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__4278.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__4278.state,this__4278.f);
}
return cljs.core.deref.call(null,this__4278.state);
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
delay.cljs$lang$applyTo = (function (arglist__4279){
var body = cljs.core.seq( arglist__4279 );;
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
var map__4280__4281 = options;
var map__4280__4282 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4280__4281))?cljs.core.apply.call(null,cljs.core.hash_map,map__4280__4281):map__4280__4281);
var keywordize_keys__4283 = cljs.core.get.call(null,map__4280__4282,"﷐'keywordize-keys");
var keyfn__4284 = (cljs.core.truth_(keywordize_keys__4283)?cljs.core.keyword:cljs.core.str);
var f__4290 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__385__auto____4289 = (function iter__4285(s__4286){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4286__4287 = s__4286;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4286__4287)))
{var k__4288 = cljs.core.first.call(null,s__4286__4287);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__4284.call(null,k__4288),thisfn.call(null,(x[k__4288]))]),iter__4285.call(null,cljs.core.rest.call(null,s__4286__4287)));
} else
{return null;
}
break;
}
})));
});

return iter__385__auto____4289.call(null,cljs.core.js_keys.call(null,x));
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

return f__4290.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4291){
var x = cljs.core.first(arglist__4291);
var options = cljs.core.rest(arglist__4291);
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
var mem__4292 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4296__delegate = function (args){
var temp__3695__auto____4293 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4292),args);

if(cljs.core.truth_(temp__3695__auto____4293))
{var v__4294 = temp__3695__auto____4293;

return v__4294;
} else
{var ret__4295 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4292,cljs.core.assoc,args,ret__4295);
return ret__4295;
}
};
var G__4296 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4296__delegate.call(this, args);
};
G__4296.cljs$lang$maxFixedArity = 0;
G__4296.cljs$lang$applyTo = (function (arglist__4297){
var args = cljs.core.seq( arglist__4297 );;
return G__4296__delegate.call(this, args);
});
return G__4296;
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
var trampoline__4299 = (function (f){
while(true){
var ret__4298 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4298)))
{{
var G__4302 = ret__4298;
f = G__4302;
continue;
}
} else
{return ret__4298;
}
break;
}
});
var trampoline__4300 = (function() { 
var G__4303__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4303 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4303__delegate.call(this, f, args);
};
G__4303.cljs$lang$maxFixedArity = 1;
G__4303.cljs$lang$applyTo = (function (arglist__4304){
var f = cljs.core.first(arglist__4304);
var args = cljs.core.rest(arglist__4304);
return G__4303__delegate.call(this, f, args);
});
return G__4303;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4299.call(this,f);
default:
return trampoline__4300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4300.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4305 = (function (){
return rand.call(null,1);
});
var rand__4306 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4305.call(this);
case  1 :
return rand__4306.call(this,n);
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
var k__4308 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4308,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4308,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___4317 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4318 = (function (h,child,parent){
var or__3548__auto____4309 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4309))
{return or__3548__auto____4309;
} else
{var or__3548__auto____4310 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4310))
{return or__3548__auto____4310;
} else
{var and__3546__auto____4311 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4311))
{var and__3546__auto____4312 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4312))
{var and__3546__auto____4313 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4313))
{var ret__4314 = true;
var i__4315 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4316 = cljs.core.not.call(null,ret__4314);

if(cljs.core.truth_(or__3548__auto____4316))
{return or__3548__auto____4316;
} else
{return cljs.core._EQ_.call(null,i__4315,cljs.core.count.call(null,parent));
}
})()))
{return ret__4314;
} else
{{
var G__4320 = isa_QMARK_.call(null,h,child.call(null,i__4315),parent.call(null,i__4315));
var G__4321 = (i__4315 + 1);
ret__4314 = G__4320;
i__4315 = G__4321;
continue;
}
}
break;
}
} else
{return and__3546__auto____4313;
}
} else
{return and__3546__auto____4312;
}
} else
{return and__3546__auto____4311;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4317.call(this,h,child);
case  3 :
return isa_QMARK___4318.call(this,h,child,parent);
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
var parents__4322 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4323 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4322.call(this,h);
case  2 :
return parents__4323.call(this,h,tag);
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
var ancestors__4325 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4326 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4325.call(this,h);
case  2 :
return ancestors__4326.call(this,h,tag);
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
var descendants__4328 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4329 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4328.call(this,h);
case  2 :
return descendants__4329.call(this,h,tag);
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
var derive__4339 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3226))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4340 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3230))))));
}
var tp__4334 = "﷐'parents".call(null,h);
var td__4335 = "﷐'descendants".call(null,h);
var ta__4336 = "﷐'ancestors".call(null,h);
var tf__4337 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4338 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4334.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4336.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4336.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4334,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__4337.call(null,"﷐'ancestors".call(null,h),tag,td__4335,parent,ta__4336),"﷐'descendants":tf__4337.call(null,"﷐'descendants".call(null,h),parent,ta__4336,tag,td__4335)});
})());

if(cljs.core.truth_(or__3548__auto____4338))
{return or__3548__auto____4338;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4339.call(this,h,tag);
case  3 :
return derive__4340.call(this,h,tag,parent);
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
var underive__4346 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4347 = (function (h,tag,parent){
var parentMap__4342 = "﷐'parents".call(null,h);
var childsParents__4343 = (cljs.core.truth_(parentMap__4342.call(null,tag))?cljs.core.disj.call(null,parentMap__4342.call(null,tag),parent):cljs.core.set([]));
var newParents__4344 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4343))?cljs.core.assoc.call(null,parentMap__4342,tag,childsParents__4343):cljs.core.dissoc.call(null,parentMap__4342,tag));
var deriv_seq__4345 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4331_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4331_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4331_SHARP_),cljs.core.second.call(null,p1__4331_SHARP_)));
}),cljs.core.seq.call(null,newParents__4344)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4342.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4332_SHARP_,p2__4333_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4332_SHARP_,p2__4333_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4345));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4346.call(this,h,tag);
case  3 :
return underive__4347.call(this,h,tag,parent);
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
var xprefs__4349 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4351 = (cljs.core.truth_((function (){var and__3546__auto____4350 = xprefs__4349;

if(cljs.core.truth_(and__3546__auto____4350))
{return xprefs__4349.call(null,y);
} else
{return and__3546__auto____4350;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4351))
{return or__3548__auto____4351;
} else
{var or__3548__auto____4353 = (function (){var ps__4352 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4352) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4352),prefer_table)))
{} else
{}
{
var G__4356 = cljs.core.rest.call(null,ps__4352);
ps__4352 = G__4356;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4353))
{return or__3548__auto____4353;
} else
{var or__3548__auto____4355 = (function (){var ps__4354 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4354) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4354),y,prefer_table)))
{} else
{}
{
var G__4357 = cljs.core.rest.call(null,ps__4354);
ps__4354 = G__4357;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4355))
{return or__3548__auto____4355;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4358 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4358))
{return or__3548__auto____4358;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4367 = cljs.core.reduce.call(null,(function (be,p__4359){
var vec__4360__4361 = p__4359;
var k__4362 = cljs.core.nth.call(null,vec__4360__4361,0,null);
var ___4363 = cljs.core.nth.call(null,vec__4360__4361,1,null);
var e__4364 = vec__4360__4361;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4362)))
{var be2__4366 = (cljs.core.truth_((function (){var or__3548__auto____4365 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____4365))
{return or__3548__auto____4365;
} else
{return cljs.core.dominates.call(null,k__4362,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4364:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4366),k__4362,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4362," and ",cljs.core.first.call(null,be2__4366),", and neither is preferred")));
}
return be2__4366;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4367))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4367));
return cljs.core.second.call(null,best_entry__4367);
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
if(cljs.core.truth_((function (){var and__3546__auto____4368 = mf;

if(cljs.core.truth_(and__3546__auto____4368))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4368;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4369 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4369))
{return or__3548__auto____4369;
} else
{var or__3548__auto____4370 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4370))
{return or__3548__auto____4370;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4371 = mf;

if(cljs.core.truth_(and__3546__auto____4371))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4371;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4372 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4372))
{return or__3548__auto____4372;
} else
{var or__3548__auto____4373 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4373))
{return or__3548__auto____4373;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4374 = mf;

if(cljs.core.truth_(and__3546__auto____4374))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4374;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4375 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4375))
{return or__3548__auto____4375;
} else
{var or__3548__auto____4376 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4376))
{return or__3548__auto____4376;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4377 = mf;

if(cljs.core.truth_(and__3546__auto____4377))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4377;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4378 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4378))
{return or__3548__auto____4378;
} else
{var or__3548__auto____4379 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4379))
{return or__3548__auto____4379;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4380 = mf;

if(cljs.core.truth_(and__3546__auto____4380))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4380;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4381 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4381))
{return or__3548__auto____4381;
} else
{var or__3548__auto____4382 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4382))
{return or__3548__auto____4382;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4383 = mf;

if(cljs.core.truth_(and__3546__auto____4383))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4383;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4384 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4384))
{return or__3548__auto____4384;
} else
{var or__3548__auto____4385 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4385))
{return or__3548__auto____4385;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4386 = mf;

if(cljs.core.truth_(and__3546__auto____4386))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4386;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4387 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4387))
{return or__3548__auto____4387;
} else
{var or__3548__auto____4388 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4388))
{return or__3548__auto____4388;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4389 = mf;

if(cljs.core.truth_(and__3546__auto____4389))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____4389;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____4390 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4390))
{return or__3548__auto____4390;
} else
{var or__3548__auto____4391 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4391))
{return or__3548__auto____4391;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__4392 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4393 = cljs.core._get_method.call(null,mf,dispatch_val__4392);

if(cljs.core.truth_(target_fn__4393))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4392)));
}
return cljs.core.apply.call(null,target_fn__4393,args);
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
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4394 = this;
cljs.core.swap_BANG_.call(null,this__4394.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4394.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4394.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4394.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4395 = this;
cljs.core.swap_BANG_.call(null,this__4395.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4395.method_cache,this__4395.method_table,this__4395.cached_hierarchy,this__4395.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4396 = this;
cljs.core.swap_BANG_.call(null,this__4396.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4396.method_cache,this__4396.method_table,this__4396.cached_hierarchy,this__4396.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4397 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4397.cached_hierarchy),cljs.core.deref.call(null,this__4397.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4397.method_cache,this__4397.method_table,this__4397.cached_hierarchy,this__4397.hierarchy);
}
var temp__3695__auto____4398 = cljs.core.deref.call(null,this__4397.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4398))
{var target_fn__4399 = temp__3695__auto____4398;

return target_fn__4399;
} else
{var temp__3695__auto____4400 = cljs.core.find_and_cache_best_method.call(null,this__4397.name,dispatch_val,this__4397.hierarchy,this__4397.method_table,this__4397.prefer_table,this__4397.method_cache,this__4397.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4400))
{var target_fn__4401 = temp__3695__auto____4400;

return target_fn__4401;
} else
{return cljs.core.deref.call(null,this__4397.method_table).call(null,this__4397.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4402 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4402.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4402.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4402.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4402.method_cache,this__4402.method_table,this__4402.cached_hierarchy,this__4402.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4403 = this;
return cljs.core.deref.call(null,this__4403.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4404 = this;
return cljs.core.deref.call(null,this__4404.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__4405 = this;
return cljs.core.do_invoke.call(null,mf,this__4405.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__4406__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__4406 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4406__delegate.call(this, _, args);
};
G__4406.cljs$lang$maxFixedArity = 1;
G__4406.cljs$lang$applyTo = (function (arglist__4407){
var _ = cljs.core.first(arglist__4407);
var args = cljs.core.rest(arglist__4407);
return G__4406__delegate.call(this, _, args);
});
return G__4406;
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
