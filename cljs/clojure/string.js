goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("﷐'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__4727 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__4728 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__4727.call(this,separator);
case  2 :
return join__4728.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_((cljs.core.count.call(null,s) < 2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__4736 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__4737 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__4730 = s;
var limit__4731 = limit;
var parts__4732 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__4731,1)))
{return cljs.core.conj.call(null,parts__4732,s__4730);
} else
{var temp__3695__auto____4733 = cljs.core.re_find.call(null,re,s__4730);

if(cljs.core.truth_(temp__3695__auto____4733))
{var m__4734 = temp__3695__auto____4733;

var index__4735 = s__4730.indexOf(m__4734);

{
var G__4739 = s__4730.substring((index__4735 + cljs.core.count.call(null,m__4734)));
var G__4740 = (limit__4731 - 1);
var G__4741 = cljs.core.conj.call(null,parts__4732,s__4730.substring(0,index__4735));
s__4730 = G__4739;
limit__4731 = G__4740;
parts__4732 = G__4741;
continue;
}
} else
{return cljs.core.conj.call(null,parts__4732,s__4730);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__4736.call(this,s,re);
case  3 :
return split__4737.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__4742 = s.length;

while(true){
if(cljs.core.truth_((index__4742 === 0)))
{return "";
} else
{var ch__4743 = cljs.core.get.call(null,s,(index__4742 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____4744 = cljs.core._EQ_.call(null,ch__4743,"\n");

if(cljs.core.truth_(or__3548__auto____4744))
{return or__3548__auto____4744;
} else
{return cljs.core._EQ_.call(null,ch__4743,"\r");
}
})()))
{{
var G__4745 = (index__4742 - 1);
index__4742 = G__4745;
continue;
}
} else
{return s.substring(0,index__4742);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__4746 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____4747 = cljs.core.not.call(null,s__4746);

if(cljs.core.truth_(or__3548__auto____4747))
{return or__3548__auto____4747;
} else
{var or__3548__auto____4748 = cljs.core._EQ_.call(null,"",s__4746);

if(cljs.core.truth_(or__3548__auto____4748))
{return or__3548__auto____4748;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__4746);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__4749 = (new goog.string.StringBuffer());
var length__4750 = s.length;

var index__4751 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__4750,index__4751)))
{return buffer__4749.toString();
} else
{var ch__4752 = s.charAt(index__4751);

var temp__3695__auto____4753 = cljs.core.get.call(null,cmap,ch__4752);

if(cljs.core.truth_(temp__3695__auto____4753))
{var replacement__4754 = temp__3695__auto____4753;

buffer__4749.append(cljs.core.str.call(null,replacement__4754));
} else
{buffer__4749.append(ch__4752);
}
{
var G__4755 = (index__4751 + 1);
index__4751 = G__4755;
continue;
}
}
break;
}
});
