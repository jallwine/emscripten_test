// Note: Some Emscripten settings will significantly limit the speed of the generated code.
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, globalScope) {
  var Module = {};
  var args = [];
  Module.arguments = [];
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
var _recargstring;
var _recargchar;
var _random_value;
var _random_stream;
var _profiler_subentry_fields;
var _profiler_subentry_desc;
var _profiler_methods;
var _profiler_init_kwlist;
var _profiler_entry_fields;
var _profiler_entry_desc;
var _profiler_enable_kwlist;
var _profiler_doc;
var _powersOf10;
var _place;
var _optreset;
var _optopt;
var _optind;
var _opterr;
var _optarg;
var _nonopt_start;
var _nonopt_end;
var _noarg;
var _mparams;
var _moduleMethods;
var _maxExponent;
var _initialized;
var _illoptstring;
var _illoptchar;
var _getstats_doc;
var _getopt_internal_posixly_correct;
var _enable_doc;
var _empty_tuple;
var _disable_doc;
var _clear_doc;
var _ambig;
var __str949;
var __str9;
var __str8;
var __str7;
var __str6;
var __str547;
var __str5;
var __str42;
var __str41;
var __str40;
var __str4;
var __str39;
var __str38;
var __str37;
var __str36;
var __str35;
var __str345;
var __str34;
var __str33;
var __str32;
var __str31;
var __str30;
var __str3;
var __str29;
var __str28;
var __str27;
var __str26;
var __str25;
var __str2452;
var __str244;
var __str24;
var __str23;
var __str221;
var __str22;
var __str211;
var __str21;
var __str20;
var __str2;
var __str1951;
var __str19;
var __str18;
var __str17;
var __str1648;
var __str16;
var __str1550;
var __str15;
var __str1446;
var __str143;
var __str14;
var __str13;
var __str125;
var __str120;
var __str12;
var __str116;
var __str110;
var __str11;
var __str10;
var __str1;
var __str;
var __gm_;
var __ZTVSt9bad_alloc;
var __ZTVSt20bad_array_new_length;
var __ZTSSt9bad_alloc;
var __ZTSSt20bad_array_new_length;
var __ZTISt9bad_alloc;
var __ZTISt20bad_array_new_length;
var __ZSt7nothrow;
var __ZL13__new_handler;
var _StatsSubEntryType;
var _StatsEntryType;
var _PyProfiler_Type;
var __ZNSt9bad_allocC1Ev;
var __ZNSt9bad_allocD1Ev;
var __ZNSt20bad_array_new_lengthC1Ev;
var __ZNSt20bad_array_new_lengthD1Ev;
var __ZNSt20bad_array_new_lengthD2Ev;
var _err;
var _errx;
var _warn1;
var _warnx;
var _verr;
var _verrx;
var _vwarn;
var _vwarnx;
_recargstring=allocate([111,112,116,105,111,110,32,114,101,113,117,105,114,101,115,32,97,110,32,97,114,103,117,109,101,110,116,32,45,45,32,37,115,0,0,0], "i8", ALLOC_NORMAL);
_recargchar=allocate([111,112,116,105,111,110,32,114,101,113,117,105,114,101,115,32,97,110,32,97,114,103,117,109,101,110,116,32,45,45,32,37,99,0,0,0], "i8", ALLOC_NORMAL);
_random_value=allocate([1,0,0,0], "i8", ALLOC_NORMAL);
_random_stream=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_profiler_subentry_fields=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_profiler_subentry_desc=allocate([0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0], "i8", ALLOC_NORMAL);
_profiler_methods=allocate([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_profiler_init_kwlist=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_profiler_entry_fields=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_profiler_entry_desc=allocate([0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0], "i8", ALLOC_NORMAL);
_profiler_enable_kwlist=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_profiler_doc=allocate([80,114,111,102,105,108,101,114,40,99,117,115,116,111,109,95,116,105,109,101,114,61,78,111,110,101,44,32,116,105,109,101,95,117,110,105,116,61,78,111,110,101,44,32,115,117,98,99,97,108,108,115,61,84,114,117,101,44,32,98,117,105,108,116,105,110,115,61,84,114,117,101,41,10,10,32,32,32,32,66,117,105,108,100,115,32,97,32,112,114,111,102,105,108,101,114,32,111,98,106,101,99,116,32,117,115,105,110,103,32,116,104,101,32,115,112,101,99,105,102,105,101,100,32,116,105,109,101,114,32,102,117,110,99,116,105,111,110,46,10,32,32,32,32,84,104,101,32,100,101,102,97,117,108,116,32,116,105,109,101,114,32,105,115,32,97,32,102,97,115,116,32,98,117,105,108,116,45,105,110,32,111,110,101,32,98,97,115,101,100,32,111,110,32,114,101,97,108,32,116,105,109,101,46,10,32,32,32,32,70,111,114,32,99,117,115,116,111,109,32,116,105,109,101,114,32,102,117,110,99,116,105,111,110,115,32,114,101,116,117,114,110,105,110,103,32,105,110,116,101,103,101,114,115,44,32,116,105,109,101,95,117,110,105,116,32,99,97,110,10,32,32,32,32,98,101,32,97,32,102,108,111,97,116,32,115,112,101,99,105,102,121,105,110,103,32,97,32,115,99,97,108,101,32,40,105,46,101,46,32,104,111,119,32,108,111,110,103,32,101,97,99,104,32,105,110,116,101,103,101,114,32,117,110,105,116,10,32,32,32,32,105,115,44,32,105,110,32,115,101,99,111,110,100,115,41,46,10,0,0], "i8", ALLOC_NORMAL);
_powersOf10=allocate([0,0,0,0,0,0,36,64,0,0,0,0,0,0,89,64,0,0,0,0,0,136,195,64,0,0,0,0,132,215,151,65,0,128,224,55,121,195,65,67,23,110,5,181,181,184,147,70,245,249,63,233,3,79,56,77,50,29,48,249,72,119,130,90,60,191,115,127,221,79,21,117], "i8", ALLOC_NORMAL);
_place=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_optreset=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_optopt=allocate([63,0,0,0], "i8", ALLOC_NORMAL);
_optind=allocate([1,0,0,0], "i8", ALLOC_NORMAL);
_opterr=allocate([1,0,0,0], "i8", ALLOC_NORMAL);
_optarg=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_nonopt_start=allocate([255,255,255,255], "i8", ALLOC_NORMAL);
_nonopt_end=allocate([255,255,255,255], "i8", ALLOC_NORMAL);
_noarg=allocate([111,112,116,105,111,110,32,100,111,101,115,110,39,116,32,116,97,107,101,32,97,110,32,97,114,103,117,109,101,110,116,32,45,45,32,37,46,42,115,0], "i8", ALLOC_NORMAL);
_mparams=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_moduleMethods=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_maxExponent=allocate([255,1,0,0], "i8", ALLOC_NORMAL);
_initialized=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_illoptstring=allocate([117,110,107,110,111,119,110,32,111,112,116,105,111,110,32,45,45,32,37,115,0,0,0,0], "i8", ALLOC_NORMAL);
_illoptchar=allocate([117,110,107,110,111,119,110,32,111,112,116,105,111,110,32,45,45,32,37,99,0,0,0,0], "i8", ALLOC_NORMAL);
_getstats_doc=allocate([103,101,116,115,116,97,116,115,40,41,32,45,62,32,108,105,115,116,32,111,102,32,112,114,111,102,105,108,101,114,95,101,110,116,114,121,32,111,98,106,101,99,116,115,10,10,82,101,116,117,114,110,32,97,108,108,32,105,110,102,111,114,109,97,116,105,111,110,32,99,111,108,108,101,99,116,101,100,32,98,121,32,116,104,101,32,112,114,111,102,105,108,101,114,46,10,69,97,99,104,32,112,114,111,102,105,108,101,114,95,101,110,116,114,121,32,105,115,32,97,32,116,117,112,108,101,45,108,105,107,101,32,111,98,106,101,99,116,32,119,105,116,104,32,116,104,101,10,102,111,108,108,111,119,105,110,103,32,97,116,116,114,105,98,117,116,101,115,58,10,10,32,32,32,32,99,111,100,101,32,32,32,32,32,32,32,32,32,32,99,111,100,101,32,111,98,106,101,99,116,10,32,32,32,32,99,97,108,108,99,111,117,110,116,32,32,32,32,32,104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,119,97,115,32,99,97,108,108,101,100,10,32,32,32,32,114,101,99,99,97,108,108,99,111,117,110,116,32,32,104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,99,97,108,108,101,100,32,114,101,99,117,114,115,105,118,101,108,121,10,32,32,32,32,116,111,116,97,108,116,105,109,101,32,32,32,32,32,116,111,116,97,108,32,116,105,109,101,32,105,110,32,116,104,105,115,32,101,110,116,114,121,10,32,32,32,32,105,110,108,105,110,101,116,105,109,101,32,32,32,32,105,110,108,105,110,101,32,116,105,109,101,32,105,110,32,116,104,105,115,32,101,110,116,114,121,32,40,110,111,116,32,105,110,32,115,117,98,99,97,108,108,115,41,10,32,32,32,32,99,97,108,108,115,32,32,32,32,32,32,32,32,32,100,101,116,97,105,108,115,32,111,102,32,116,104,101,32,99,97,108,108,115,10,10,84,104,101,32,99,97,108,108,115,32,97,116,116,114,105,98,117,116,101,32,105,115,32,101,105,116,104,101,114,32,78,111,110,101,32,111,114,32,97,32,108,105,115,116,32,111,102,10,112,114,111,102,105,108,101,114,95,115,117,98,101,110,116,114,121,32,111,98,106,101,99,116,115,58,10,10,32,32,32,32,99,111,100,101,32,32,32,32,32,32,32,32,32,32,99,97,108,108,101,100,32,99,111,100,101,32,111,98,106,101,99,116,10,32,32,32,32,99,97,108,108,99,111,117,110,116,32,32,32,32,32,104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,105,115,32,99,97,108,108,101,100,10,32,32,32,32,114,101,99,99,97,108,108,99,111,117,110,116,32,32,104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,105,115,32,99,97,108,108,101,100,32,114,101,99,117,114,115,105,118,101,108,121,10,32,32,32,32,116,111,116,97,108,116,105,109,101,32,32,32,32,32,116,111,116,97,108,32,116,105,109,101,32,115,112,101,110,116,32,105,110,32,116,104,105,115,32,99,97,108,108,10,32,32,32,32,105,110,108,105,110,101,116,105,109,101,32,32,32,32,105,110,108,105,110,101,32,116,105,109,101,32,40,110,111,116,32,105,110,32,102,117,114,116,104,101,114,32,115,117,98,99,97,108,108,115,41,10,0,0,0,0], "i8", ALLOC_NORMAL);
_getopt_internal_posixly_correct=allocate([255,255,255,255], "i8", ALLOC_NORMAL);
_enable_doc=allocate([101,110,97,98,108,101,40,115,117,98,99,97,108,108,115,61,84,114,117,101,44,32,98,117,105,108,116,105,110,115,61,84,114,117,101,41,10,10,83,116,97,114,116,32,99,111,108,108,101,99,116,105,110,103,32,112,114,111,102,105,108,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,46,10,73,102,32,39,115,117,98,99,97,108,108,115,39,32,105,115,32,84,114,117,101,44,32,97,108,115,111,32,114,101,99,111,114,100,115,32,102,111,114,32,101,97,99,104,32,102,117,110,99,116,105,111,110,10,115,116,97,116,105,115,116,105,99,115,32,115,101,112,97,114,97,116,101,100,32,97,99,99,111,114,100,105,110,103,32,116,111,32,105,116,115,32,99,117,114,114,101,110,116,32,99,97,108,108,101,114,46,10,73,102,32,39,98,117,105,108,116,105,110,115,39,32,105,115,32,84,114,117,101,44,32,114,101,99,111,114,100,115,32,116,104,101,32,116,105,109,101,32,115,112,101,110,116,32,105,110,10,98,117,105,108,116,45,105,110,32,102,117,110,99,116,105,111,110,115,32,115,101,112,97,114,97,116,101,108,121,32,102,114,111,109,32,116,104,101,105,114,32,99,97,108,108,101,114,46,10,0,0,0,0], "i8", ALLOC_NORMAL);
_empty_tuple=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_disable_doc=allocate([100,105,115,97,98,108,101,40,41,10,10,83,116,111,112,32,99,111,108,108,101,99,116,105,110,103,32,112,114,111,102,105,108,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,46,10,0,0], "i8", ALLOC_NORMAL);
_clear_doc=allocate([99,108,101,97,114,40,41,10,10,67,108,101,97,114,32,97,108,108,32,112,114,111,102,105,108,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,32,99,111,108,108,101,99,116,101,100,32,115,111,32,102,97,114,46,10,0], "i8", ALLOC_NORMAL);
_ambig=allocate([97,109,98,105,103,117,111,117,115,32,111,112,116,105,111,110,32,45,45,32,37,46,42,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str949=allocate([37,115,58,32,0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,105,115,32,99,97,108,108,101,100,0,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([99,97,108,108,99,111,117,110,116,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([99,97,108,108,101,100,32,99,111,100,101,32,111,98,106,101,99,116,32,111,114,32,98,117,105,108,116,45,105,110,32,102,117,110,99,116,105,111,110,32,110,97,109,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([99,111,100,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str547=allocate([80,79,83,73,88,76,89,95,67,79,82,82,69,67,84,0], "i8", ALLOC_NORMAL);
__str5=allocate([95,108,115,112,114,111,102,46,112,114,111,102,105,108,101,114,95,115,117,98,101,110,116,114,121,0,0,0], "i8", ALLOC_NORMAL);
__str42=allocate([109,97,120,32,115,121,115,116,101,109,32,98,121,116,101,115,32,61,32,37,49,48,108,117,10,0,0,0], "i8", ALLOC_NORMAL);
__str41=allocate([40,40,79,108,108,100,100,41,41,0,0,0], "i8", ALLOC_NORMAL);
__str40=allocate([40,40,79,108,108,100,100,79,41,41,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([112,114,111,102,105,108,101,114,95,115,117,98,101,110,116,114,121,0,0,0], "i8", ALLOC_NORMAL);
__str39=allocate([60,98,117,105,108,116,45,105,110,32,109,101,116,104,111,100,32,37,115,62,0,0,0,0], "i8", ALLOC_NORMAL);
__str38=allocate([60,37,115,62,0,0,0,0], "i8", ALLOC_NORMAL);
__str37=allocate([60,37,115,46,37,115,62,0], "i8", ALLOC_NORMAL);
__str36=allocate([95,95,98,117,105,108,116,105,110,95,95,0], "i8", ALLOC_NORMAL);
__str35=allocate([124,105,105,58,101,110,97,98,108,101,0,0], "i8", ALLOC_NORMAL);
__str345=allocate([115,116,100,58,58,98,97,100,95,97,108,108,111,99,0,0], "i8", ALLOC_NORMAL);
__str34=allocate([109,101,109,111,114,121,32,119,97,115,32,101,120,104,97,117,115,116,101,100,32,119,104,105,108,101,32,112,114,111,102,105,108,105,110,103,0,0,0,0], "i8", ALLOC_NORMAL);
__str33=allocate([99,108,101,97,114,0,0,0], "i8", ALLOC_NORMAL);
__str32=allocate([100,105,115,97,98,108,101,0], "i8", ALLOC_NORMAL);
__str31=allocate([101,110,97,98,108,101,0,0], "i8", ALLOC_NORMAL);
__str30=allocate([103,101,116,115,116,97,116,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([112,114,111,102,105,108,101,114,95,101,110,116,114,121,0,0], "i8", ALLOC_NORMAL);
__str29=allocate([124,79,100,105,105,58,80,114,111,102,105,108,101,114,0,0], "i8", ALLOC_NORMAL);
__str28=allocate([98,117,105,108,116,105,110,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str27=allocate([115,117,98,99,97,108,108,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str26=allocate([116,105,109,101,117,110,105,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str25=allocate([116,105,109,101,114,0,0,0], "i8", ALLOC_NORMAL);
__str2452=allocate([37,115,58,32,0,0,0,0], "i8", ALLOC_NORMAL);
__str244=allocate([105,110,32,117,115,101,32,98,121,116,101,115,32,32,32,32,32,61,32,37,49,48,108,117,10,0,0,0], "i8", ALLOC_NORMAL);
__str24=allocate([95,108,115,112,114,111,102,46,80,114,111,102,105,108,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str23=allocate([100,101,116,97,105,108,115,32,111,102,32,116,104,101,32,99,97,108,108,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str221=allocate([37,115,10,0], "i8", ALLOC_NORMAL);
__str22=allocate([99,97,108,108,115,0,0,0], "i8", ALLOC_NORMAL);
__str211=allocate([37,115,10,0], "i8", ALLOC_NORMAL);
__str21=allocate([105,110,108,105,110,101,32,116,105,109,101,32,105,110,32,116,104,105,115,32,101,110,116,114,121,32,40,110,111,116,32,105,110,32,115,117,98,99,97,108,108,115,41,0], "i8", ALLOC_NORMAL);
__str20=allocate([116,111,116,97,108,32,116,105,109,101,32,105,110,32,116,104,105,115,32,101,110,116,114,121,0,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([80,114,111,102,105,108,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str1951=allocate([37,115,58,32,0,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,99,97,108,108,101,100,32,114,101,99,117,114,115,105,118,101,108,121,0,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,119,97,115,32,99,97,108,108,101,100,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([99,111,100,101,32,111,98,106,101,99,116,32,111,114,32,98,117,105,108,116,45,105,110,32,102,117,110,99,116,105,111,110,32,110,97,109,101,0,0,0], "i8", ALLOC_NORMAL);
__str1648=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([95,108,115,112,114,111,102,46,112,114,111,102,105,108,101,114,95,101,110,116,114,121,0,0], "i8", ALLOC_NORMAL);
__str1550=allocate([37,115,58,32,0,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([105,110,108,105,110,101,32,116,105,109,101,32,40,110,111,116,32,105,110,32,102,117,114,116,104,101,114,32,115,117,98,99,97,108,108,115,41,0,0,0], "i8", ALLOC_NORMAL);
__str1446=allocate([98,97,100,95,97,114,114,97,121,95,110,101,119,95,108,101,110,103,116,104,0,0,0,0], "i8", ALLOC_NORMAL);
__str143=allocate([115,121,115,116,101,109,32,98,121,116,101,115,32,32,32,32,32,61,32,37,49,48,108,117,10,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([105,110,108,105,110,101,116,105,109,101,0,0], "i8", ALLOC_NORMAL);
__str13=allocate([116,111,116,97,108,32,116,105,109,101,32,115,112,101,110,116,32,105,110,32,116,104,105,115,32,99,97,108,108,0,0,0], "i8", ALLOC_NORMAL);
__str125=allocate([10,0,0,0], "i8", ALLOC_NORMAL);
__str120=allocate([58,32,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([116,111,116,97,108,116,105,109,101,0,0,0], "i8", ALLOC_NORMAL);
__str116=allocate([10,0,0,0], "i8", ALLOC_NORMAL);
__str110=allocate([58,32,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,105,115,32,99,97,108,108,101,100,32,114,101,99,117,114,115,105,118,101,108,121,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([114,101,99,99,97,108,108,99,111,117,110,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([70,97,115,116,32,112,114,111,102,105,108,101,114,0,0,0], "i8", ALLOC_NORMAL);
__str=allocate([95,108,115,112,114,111,102,0], "i8", ALLOC_NORMAL);
__gm_=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__ZTVSt9bad_alloc=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__ZTVSt20bad_array_new_length=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__ZTSSt9bad_alloc=allocate([83,116,57,98,97,100,95,97,108,108,111,99,0,0,0,0], "i8", ALLOC_NORMAL);
__ZTSSt20bad_array_new_length=allocate([83,116,50,48,98,97,100,95,97,114,114,97,121,95,110,101,119,95,108,101,110,103,116,104,0,0,0,0], "i8", ALLOC_NORMAL);
__ZTISt9bad_alloc=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__ZTISt20bad_array_new_length=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__ZSt7nothrow=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__ZL13__new_handler=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_StatsSubEntryType=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_StatsEntryType=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_PyProfiler_Type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,5,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_profiler_subentry_fields)>>2)]=((__str6)|0);
HEAP32[(((_profiler_subentry_fields)+(4))>>2)]=((__str7)|0);
HEAP32[(((_profiler_subentry_fields)+(8))>>2)]=((__str8)|0);
HEAP32[(((_profiler_subentry_fields)+(12))>>2)]=((__str9)|0);
HEAP32[(((_profiler_subentry_fields)+(16))>>2)]=((__str10)|0);
HEAP32[(((_profiler_subentry_fields)+(20))>>2)]=((__str11)|0);
HEAP32[(((_profiler_subentry_fields)+(24))>>2)]=((__str12)|0);
HEAP32[(((_profiler_subentry_fields)+(28))>>2)]=((__str13)|0);
HEAP32[(((_profiler_subentry_fields)+(32))>>2)]=((__str14)|0);
HEAP32[(((_profiler_subentry_fields)+(36))>>2)]=((__str15)|0);
HEAP32[((_profiler_subentry_desc)>>2)]=((__str5)|0);
HEAP32[(((_profiler_subentry_desc)+(8))>>2)]=((_profiler_subentry_fields)|0);
HEAP32[((_profiler_methods)>>2)]=((__str30)|0);
HEAP32[(((_profiler_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_profiler_methods)+(12))>>2)]=((_getstats_doc)|0);
HEAP32[(((_profiler_methods)+(16))>>2)]=((__str31)|0);
HEAP32[(((_profiler_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 8));
HEAP32[(((_profiler_methods)+(28))>>2)]=((_enable_doc)|0);
HEAP32[(((_profiler_methods)+(32))>>2)]=((__str32)|0);
HEAP32[(((_profiler_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 60));
HEAP32[(((_profiler_methods)+(44))>>2)]=((_disable_doc)|0);
HEAP32[(((_profiler_methods)+(48))>>2)]=((__str33)|0);
HEAP32[(((_profiler_methods)+(52))>>2)]=((FUNCTION_TABLE_OFFSET + 56));
HEAP32[(((_profiler_methods)+(60))>>2)]=((_clear_doc)|0);
HEAP32[((_profiler_init_kwlist)>>2)]=((__str25)|0);
HEAP32[(((_profiler_init_kwlist)+(4))>>2)]=((__str26)|0);
HEAP32[(((_profiler_init_kwlist)+(8))>>2)]=((__str27)|0);
HEAP32[(((_profiler_init_kwlist)+(12))>>2)]=((__str28)|0);
HEAP32[((_profiler_entry_fields)>>2)]=((__str6)|0);
HEAP32[(((_profiler_entry_fields)+(4))>>2)]=((__str17)|0);
HEAP32[(((_profiler_entry_fields)+(8))>>2)]=((__str8)|0);
HEAP32[(((_profiler_entry_fields)+(12))>>2)]=((__str18)|0);
HEAP32[(((_profiler_entry_fields)+(16))>>2)]=((__str10)|0);
HEAP32[(((_profiler_entry_fields)+(20))>>2)]=((__str19)|0);
HEAP32[(((_profiler_entry_fields)+(24))>>2)]=((__str12)|0);
HEAP32[(((_profiler_entry_fields)+(28))>>2)]=((__str20)|0);
HEAP32[(((_profiler_entry_fields)+(32))>>2)]=((__str14)|0);
HEAP32[(((_profiler_entry_fields)+(36))>>2)]=((__str21)|0);
HEAP32[(((_profiler_entry_fields)+(40))>>2)]=((__str22)|0);
HEAP32[(((_profiler_entry_fields)+(44))>>2)]=((__str23)|0);
HEAP32[((_profiler_entry_desc)>>2)]=((__str16)|0);
HEAP32[(((_profiler_entry_desc)+(8))>>2)]=((_profiler_entry_fields)|0);
HEAP32[((_profiler_enable_kwlist)>>2)]=((__str27)|0);
HEAP32[(((_profiler_enable_kwlist)+(4))>>2)]=((__str28)|0);
HEAP32[((_place)>>2)]=((__str1648)|0);
HEAP32[(((__ZTVSt9bad_alloc)+(4))>>2)]=__ZTISt9bad_alloc;
HEAP32[(((__ZTVSt9bad_alloc)+(8))>>2)]=((FUNCTION_TABLE_OFFSET + 48));
HEAP32[(((__ZTVSt9bad_alloc)+(12))>>2)]=((FUNCTION_TABLE_OFFSET + 14));
HEAP32[(((__ZTVSt9bad_alloc)+(16))>>2)]=((FUNCTION_TABLE_OFFSET + 24));
HEAP32[(((__ZTVSt20bad_array_new_length)+(4))>>2)]=__ZTISt20bad_array_new_length;
HEAP32[(((__ZTVSt20bad_array_new_length)+(8))>>2)]=((FUNCTION_TABLE_OFFSET + 16));
HEAP32[(((__ZTVSt20bad_array_new_length)+(12))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((__ZTVSt20bad_array_new_length)+(16))>>2)]=((FUNCTION_TABLE_OFFSET + 52));
HEAP32[((__ZTISt9bad_alloc)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTISt9bad_alloc)+(4))>>2)]=((__ZTSSt9bad_alloc)|0);
HEAP32[(((__ZTISt9bad_alloc)+(8))>>2)]=__ZTISt9exception;
HEAP32[((__ZTISt20bad_array_new_length)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTISt20bad_array_new_length)+(4))>>2)]=((__ZTSSt20bad_array_new_length)|0);
HEAP32[(((__ZTISt20bad_array_new_length)+(8))>>2)]=__ZTISt9bad_alloc;
HEAP32[(((_PyProfiler_Type)+(12))>>2)]=((__str24)|0);
HEAP32[(((_PyProfiler_Type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 40));
HEAP32[(((_PyProfiler_Type)+(88))>>2)]=((_profiler_doc)|0);
HEAP32[(((_PyProfiler_Type)+(116))>>2)]=((_profiler_methods)|0);
HEAP32[(((_PyProfiler_Type)+(148))>>2)]=((FUNCTION_TABLE_OFFSET + 54));
HEAP32[(((_PyProfiler_Type)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 36);
HEAP32[(((_PyProfiler_Type)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
HEAP32[(((_PyProfiler_Type)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 34);
__ZNSt9bad_allocC1Ev = (FUNCTION_TABLE_OFFSET + 12);
__ZNSt9bad_allocD1Ev = (FUNCTION_TABLE_OFFSET + 28);
__ZNSt20bad_array_new_lengthC1Ev = (FUNCTION_TABLE_OFFSET + 42);
__ZNSt20bad_array_new_lengthD1Ev = (FUNCTION_TABLE_OFFSET + 62);
__ZNSt20bad_array_new_lengthD2Ev = ((FUNCTION_TABLE_OFFSET + 28));
_err = (FUNCTION_TABLE_OFFSET + 44);
_errx = (FUNCTION_TABLE_OFFSET + 18);
_warn1 = (FUNCTION_TABLE_OFFSET + 46);
_warnx = (FUNCTION_TABLE_OFFSET + 58);
_verr = (FUNCTION_TABLE_OFFSET + 26);
_verrx = (FUNCTION_TABLE_OFFSET + 22);
_vwarn = (FUNCTION_TABLE_OFFSET + 30);
_vwarnx = (FUNCTION_TABLE_OFFSET + 50);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_profiler_getstats,0,_statsForSubEntry,0,__ZNSt20bad_array_new_lengthD0Ev,0,_profiler_enable,0,_PyType_GenericNew
,0,__ZNSt9bad_allocC2Ev,0,__ZNSt9bad_allocD0Ev,0,__ZNSt20bad_array_new_lengthD1Ev,0,__errx,0,_statsForEntry
,0,__verrx,0,__ZNKSt9bad_alloc4whatEv,0,__verr,0,__ZNSt9bad_allocD2Ev,0,__vwarn
,0,_freeEntry,0,_PyObject_Free,0,_PyType_GenericAlloc,0,_freeSubEntry,0,_profiler_dealloc
,0,__ZNSt20bad_array_new_lengthC2Ev,0,__err,0,_warn,0,__ZNSt9bad_allocD1Ev,0,__vwarnx
,0,__ZNKSt20bad_array_new_length4whatEv,0,_profiler_init,0,_profiler_clear,0,__warnx,0,_profiler_disable,0,__ZNSt20bad_array_new_lengthD2Ev,0,_profiler_callback,0]);
// EMSCRIPTEN_START_FUNCS
function _setSubcalls($pObj, $nvalue) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $1=$pObj;
      $2=$nvalue;
      var $3=$2;
      var $4=(($3)|(0))==0;
      if ($4) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $6=$1;
      var $7=(($6+20)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=$8 & -3;
      HEAP32[(($7)>>2)]=$9;
      label = 6; break;
    case 3: 
      var $11=$2;
      var $12=(($11)|(0)) > 0;
      if ($12) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $14=$1;
      var $15=(($14+20)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=$16 | 2;
      HEAP32[(($15)>>2)]=$17;
      label = 5; break;
    case 5: 
      label = 6; break;
    case 6: 
      return 0;
    default: assert(0, "bad label: " + label);
  }
}
function _setBuiltins($pObj, $nvalue) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $1=$pObj;
      $2=$nvalue;
      var $3=$2;
      var $4=(($3)|(0))==0;
      if ($4) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $6=$1;
      var $7=(($6+20)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=$8 & -5;
      HEAP32[(($7)>>2)]=$9;
      label = 6; break;
    case 3: 
      var $11=$2;
      var $12=(($11)|(0)) > 0;
      if ($12) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $14=$1;
      var $15=(($14+20)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=$16 | 4;
      HEAP32[(($15)>>2)]=$17;
      label = 5; break;
    case 5: 
      label = 6; break;
    case 6: 
      return 0;
    default: assert(0, "bad label: " + label);
  }
}
function _init_lsprof() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $module;
      var $d;
      var $1=_Py_InitModule4(((__str)|0), ((_moduleMethods)|0), ((__str1)|0), 0, 1013);
      $module=$1;
      var $2=$module;
      var $3=(($2)|(0))==0;
      if ($3) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 8; break;
    case 3: 
      var $6=$module;
      var $7=_PyModule_GetDict($6);
      $d=$7;
      var $8=_PyType_Ready(_PyProfiler_Type);
      var $9=(($8)|(0)) < 0;
      if ($9) { label = 4; break; } else { label = 5; break; }
    case 4: 
      label = 8; break;
    case 5: 
      var $12=$d;
      var $13=_PyDict_SetItemString($12, ((__str2)|0), _PyProfiler_Type);
      var $14=HEAP32[((_initialized)>>2)];
      var $15=(($14)|(0))!=0;
      if ($15) { label = 7; break; } else { label = 6; break; }
    case 6: 
      _PyStructSequence_InitType(_StatsEntryType, _profiler_entry_desc);
      _PyStructSequence_InitType(_StatsSubEntryType, _profiler_subentry_desc);
      label = 7; break;
    case 7: 
      var $18=HEAP32[((((_StatsEntryType)|0))>>2)];
      var $19=((($18)+(1))|0);
      HEAP32[((((_StatsEntryType)|0))>>2)]=$19;
      var $20=HEAP32[((((_StatsSubEntryType)|0))>>2)];
      var $21=((($20)+(1))|0);
      HEAP32[((((_StatsSubEntryType)|0))>>2)]=$21;
      var $22=$module;
      var $23=_PyModule_AddObject($22, ((__str3)|0), _StatsEntryType);
      var $24=$module;
      var $25=_PyModule_AddObject($24, ((__str4)|0), _StatsSubEntryType);
      var $26=_PyTuple_New(0);
      HEAP32[((_empty_tuple)>>2)]=$26;
      HEAP32[((_initialized)>>2)]=1;
      label = 8; break;
    case 8: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
Module["_init_lsprof"] = _init_lsprof;
function _profiler_dealloc($op) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      $1=$op;
      var $2=$1;
      var $3=(($2+20)|0);
      var $4=HEAP32[(($3)>>2)];
      var $5=$4 & 1;
      var $6=(($5)|(0))!=0;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      _PyEval_SetProfile(0, 0);
      label = 3; break;
    case 3: 
      var $9=$1;
      _flush_unmatched($9);
      var $10=$1;
      _clearEntries($10);
      label = 4; break;
    case 4: 
      var $12=$1;
      var $13=(($12+24)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=(($14)|(0))==0;
      if ($15) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 12; break;
    case 6: 
      label = 7; break;
    case 7: 
      var $19=$1;
      var $20=(($19+24)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=(($21)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=((($23)-(1))|0);
      HEAP32[(($22)>>2)]=$24;
      var $25=(($24)|(0))!=0;
      if ($25) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 10; break;
    case 9: 
      var $28=$1;
      var $29=(($28+24)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=(($30+4)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32+24)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=$1;
      var $36=(($35+24)|0);
      var $37=HEAP32[(($36)>>2)];
      FUNCTION_TABLE[$34]($37);
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      var $42=$1;
      var $43=$42;
      var $44=(($43+4)|0);
      var $45=HEAP32[(($44)>>2)];
      var $46=(($45+160)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=$1;
      var $49=$48;
      FUNCTION_TABLE[$47]($49);
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _profiler_init($pObj, $args, $kw) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 20)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $o;
      var $timer=__stackBase__;
      var $timeunit=(__stackBase__)+(4);
      var $subcalls=(__stackBase__)+(12);
      var $builtins=(__stackBase__)+(16);
      $2=$pObj;
      $3=$args;
      $4=$kw;
      HEAP32[(($timer)>>2)]=0;
      (HEAPF64[(tempDoublePtr)>>3]=0,HEAP32[(($timeunit)>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((($timeunit)+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]);
      HEAP32[(($subcalls)>>2)]=1;
      HEAP32[(($builtins)>>2)]=1;
      var $5=$3;
      var $6=$4;
      var $7=_PyArg_ParseTupleAndKeywords($5, $6, ((__str29)|0), ((_profiler_init_kwlist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$timer,HEAP32[(((tempInt)+(4))>>2)]=$timeunit,HEAP32[(((tempInt)+(8))>>2)]=$subcalls,HEAP32[(((tempInt)+(12))>>2)]=$builtins,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=-1;
      label = 22; break;
    case 3: 
      var $11=$2;
      var $12=HEAP32[(($subcalls)>>2)];
      var $13=_setSubcalls($11, $12);
      var $14=(($13)|(0)) < 0;
      if ($14) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $16=$2;
      var $17=HEAP32[(($builtins)>>2)];
      var $18=_setBuiltins($16, $17);
      var $19=(($18)|(0)) < 0;
      if ($19) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=-1;
      label = 22; break;
    case 6: 
      var $22=$2;
      var $23=(($22+24)|0);
      var $24=HEAP32[(($23)>>2)];
      $o=$24;
      var $25=HEAP32[(($timer)>>2)];
      var $26=$2;
      var $27=(($26+24)|0);
      HEAP32[(($27)>>2)]=$25;
      label = 7; break;
    case 7: 
      var $29=HEAP32[(($timer)>>2)];
      var $30=(($29)|(0))==0;
      if ($30) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 10; break;
    case 9: 
      var $33=HEAP32[(($timer)>>2)];
      var $34=(($33)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=((($35)+(1))|0);
      HEAP32[(($34)>>2)]=$36;
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $40=$o;
      var $41=(($40)|(0))==0;
      if ($41) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 20; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $45=$o;
      var $46=(($45)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=((($47)-(1))|0);
      HEAP32[(($46)>>2)]=$48;
      var $49=(($48)|(0))!=0;
      if ($49) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 18; break;
    case 17: 
      var $52=$o;
      var $53=(($52+4)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=(($54+24)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=$o;
      FUNCTION_TABLE[$56]($57);
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $62=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($timeunit)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($timeunit)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $63=$2;
      var $64=(($63+28)|0);
      (HEAPF64[(tempDoublePtr)>>3]=$62,HEAP32[(($64)>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((($64)+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]);
      $1=0;
      label = 22; break;
    case 22: 
      var $66=$1;
      STACKTOP = __stackBase__;
      return $66;
    default: assert(0, "bad label: " + label);
  }
}
function _profiler_getstats($pObj, $noarg) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $collect=__stackBase__;
      $2=$pObj;
      $3=$noarg;
      var $4=$2;
      var $5=_pending_exception($4);
      var $6=(($5)|(0))!=0;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 19; break;
    case 3: 
      var $9=$2;
      var $10=(($9+24)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=(($11)|(0))!=0;
      if ($12) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $14=_hpTimerUnit();
      var $15=(($collect+8)|0);
      (HEAPF64[(tempDoublePtr)>>3]=$14,HEAP32[(($15)>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((($15)+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]);
      label = 9; break;
    case 5: 
      var $17=$2;
      var $18=(($17+28)|0);
      var $19=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($18)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($18)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $20=$19 > 0;
      if ($20) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $22=$2;
      var $23=(($22+28)|0);
      var $24=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($23)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($23)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $25=(($collect+8)|0);
      (HEAPF64[(tempDoublePtr)>>3]=$24,HEAP32[(($25)>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((($25)+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]);
      label = 8; break;
    case 7: 
      var $27=(($collect+8)|0);
      (HEAPF64[(tempDoublePtr)>>3]=2.3283064365386963e-10,HEAP32[(($27)>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((($27)+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]);
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      var $30=_PyList_New(0);
      var $31=(($collect)|0);
      HEAP32[(($31)>>2)]=$30;
      var $32=(($collect)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=(($33)|(0))==0;
      if ($34) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=0;
      label = 19; break;
    case 11: 
      var $37=$2;
      var $38=(($37+8)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=$collect;
      var $41=_RotatingTree_Enum($39, (FUNCTION_TABLE_OFFSET + 20), $40);
      var $42=(($41)|(0))!=0;
      if ($42) { label = 12; break; } else { label = 18; break; }
    case 12: 
      label = 13; break;
    case 13: 
      var $45=(($collect)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=(($46)|0);
      var $48=HEAP32[(($47)>>2)];
      var $49=((($48)-(1))|0);
      HEAP32[(($47)>>2)]=$49;
      var $50=(($49)|(0))!=0;
      if ($50) { label = 14; break; } else { label = 15; break; }
    case 14: 
      label = 16; break;
    case 15: 
      var $53=(($collect)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=(($54+4)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=(($56+24)|0);
      var $58=HEAP32[(($57)>>2)];
      var $59=(($collect)|0);
      var $60=HEAP32[(($59)>>2)];
      FUNCTION_TABLE[$58]($60);
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      $1=0;
      label = 19; break;
    case 18: 
      var $64=(($collect)|0);
      var $65=HEAP32[(($64)>>2)];
      $1=$65;
      label = 19; break;
    case 19: 
      var $67=$1;
      STACKTOP = __stackBase__;
      return $67;
    default: assert(0, "bad label: " + label);
  }
}
function _profiler_enable($self, $args, $kwds) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $subcalls=__stackBase__;
      var $builtins=(__stackBase__)+(4);
      $2=$self;
      $3=$args;
      $4=$kwds;
      HEAP32[(($subcalls)>>2)]=-1;
      HEAP32[(($builtins)>>2)]=-1;
      var $5=$3;
      var $6=$4;
      var $7=_PyArg_ParseTupleAndKeywords($5, $6, ((__str35)|0), ((_profiler_enable_kwlist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$subcalls,HEAP32[(((tempInt)+(4))>>2)]=$builtins,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 7; break;
    case 3: 
      var $11=$2;
      var $12=HEAP32[(($subcalls)>>2)];
      var $13=_setSubcalls($11, $12);
      var $14=(($13)|(0)) < 0;
      if ($14) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $16=$2;
      var $17=HEAP32[(($builtins)>>2)];
      var $18=_setBuiltins($16, $17);
      var $19=(($18)|(0)) < 0;
      if ($19) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=0;
      label = 7; break;
    case 6: 
      var $22=$2;
      var $23=$22;
      _PyEval_SetProfile((FUNCTION_TABLE_OFFSET + 64), $23);
      var $24=$2;
      var $25=(($24+20)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=$26 | 1;
      HEAP32[(($25)>>2)]=$27;
      var $28=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $29=((($28)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$29;
      $1=__Py_NoneStruct;
      label = 7; break;
    case 7: 
      var $31=$1;
      STACKTOP = __stackBase__;
      return $31;
    default: assert(0, "bad label: " + label);
  }
}
function _profiler_disable($self, $noarg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $2=$self;
      $3=$noarg;
      var $4=$2;
      var $5=(($4+20)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=$6 & -2;
      HEAP32[(($5)>>2)]=$7;
      _PyEval_SetProfile(0, 0);
      var $8=$2;
      _flush_unmatched($8);
      var $9=$2;
      var $10=_pending_exception($9);
      var $11=(($10)|(0))!=0;
      if ($11) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 4; break;
    case 3: 
      var $14=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $15=((($14)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$15;
      $1=__Py_NoneStruct;
      label = 4; break;
    case 4: 
      var $17=$1;
      return $17;
    default: assert(0, "bad label: " + label);
  }
}
function _profiler_clear($pObj, $noarg) {
  var label = 0;
  var $1;
  var $2;
  $1=$pObj;
  $2=$noarg;
  var $3=$1;
  _clearEntries($3);
  var $4=HEAP32[((((__Py_NoneStruct)|0))>>2)];
  var $5=((($4)+(1))|0);
  HEAP32[((((__Py_NoneStruct)|0))>>2)]=$5;
  return __Py_NoneStruct;
}
function _clearEntries($pObj) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $c;
      $1=$pObj;
      var $2=$1;
      var $3=(($2+8)|0);
      var $4=HEAP32[(($3)>>2)];
      var $5=_RotatingTree_Enum($4, (FUNCTION_TABLE_OFFSET + 32), 0);
      var $6=$1;
      var $7=(($6+8)|0);
      HEAP32[(($7)>>2)]=0;
      var $8=$1;
      var $9=(($8+12)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10)|(0))!=0;
      if ($11) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $13=$1;
      var $14=(($13+12)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=$15;
      _free($16);
      var $17=$1;
      var $18=(($17+12)|0);
      HEAP32[(($18)>>2)]=0;
      label = 3; break;
    case 3: 
      label = 4; break;
    case 4: 
      var $21=$1;
      var $22=(($21+16)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23)|(0))!=0;
      if ($24) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $26=$1;
      var $27=(($26+16)|0);
      var $28=HEAP32[(($27)>>2)];
      $c=$28;
      var $29=$c;
      var $30=(($29+16)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=$1;
      var $33=(($32+16)|0);
      HEAP32[(($33)>>2)]=$31;
      var $34=$c;
      var $35=$34;
      _free($35);
      label = 4; break;
    case 6: 
      var $37=$1;
      var $38=(($37+16)|0);
      HEAP32[(($38)>>2)]=0;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _freeEntry($header, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $entry;
      $1=$header;
      $2=$arg;
      var $3=$1;
      var $4=$3;
      $entry=$4;
      var $5=$entry;
      var $6=(($5+44)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=_RotatingTree_Enum($7, (FUNCTION_TABLE_OFFSET + 38), 0);
      label = 2; break;
    case 2: 
      var $10=$entry;
      var $11=(($10+12)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=((($14)-(1))|0);
      HEAP32[(($13)>>2)]=$15;
      var $16=(($15)|(0))!=0;
      if ($16) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 5; break;
    case 4: 
      var $19=$entry;
      var $20=(($19+12)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=(($21+4)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23+24)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=$entry;
      var $27=(($26+12)|0);
      var $28=HEAP32[(($27)>>2)];
      FUNCTION_TABLE[$25]($28);
      label = 5; break;
    case 5: 
      label = 6; break;
    case 6: 
      var $31=$entry;
      var $32=$31;
      _free($32);
      return 0;
    default: assert(0, "bad label: " + label);
  }
}
function _freeSubEntry($header, $arg) {
  var label = 0;
  var $1;
  var $2;
  var $subentry;
  $1=$header;
  $2=$arg;
  var $3=$1;
  var $4=$3;
  $subentry=$4;
  var $5=$subentry;
  var $6=$5;
  _free($6);
  return 0;
}
function _flush_unmatched($pObj) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $pContext;
      var $profEntry;
      $1=$pObj;
      label = 2; break;
    case 2: 
      var $3=$1;
      var $4=(($3+12)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 9; break; }
    case 3: 
      var $8=$1;
      var $9=(($8+12)|0);
      var $10=HEAP32[(($9)>>2)];
      $pContext=$10;
      var $11=$pContext;
      var $12=(($11+20)|0);
      var $13=HEAP32[(($12)>>2)];
      $profEntry=$13;
      var $14=$profEntry;
      var $15=(($14)|(0))!=0;
      if ($15) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $17=$1;
      var $18=$pContext;
      var $19=$profEntry;
      _Stop($17, $18, $19);
      label = 6; break;
    case 5: 
      var $21=$pContext;
      var $22=(($21+16)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=$1;
      var $25=(($24+12)|0);
      HEAP32[(($25)>>2)]=$23;
      label = 6; break;
    case 6: 
      var $27=$pContext;
      var $28=(($27)|(0))!=0;
      if ($28) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $30=$pContext;
      var $31=$30;
      _free($31);
      label = 8; break;
    case 8: 
      label = 2; break;
    case 9: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _pending_exception($pObj) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$pObj;
      var $3=$2;
      var $4=(($3+20)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=$5 & 256;
      var $7=(($6)|(0))!=0;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=$2;
      var $10=(($9+20)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=((($11)-(256))|0);
      HEAP32[(($10)>>2)]=$12;
      var $13=HEAP32[((_PyExc_MemoryError)>>2)];
      _PyErr_SetString($13, ((__str34)|0));
      $1=-1;
      label = 4; break;
    case 3: 
      $1=0;
      label = 4; break;
    case 4: 
      var $16=$1;
      return $16;
    default: assert(0, "bad label: " + label);
  }
}
function _Stop($pObj, $self, $entry) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $tt=__stackBase__;
      var $it=(__stackBase__)+(8);
      var $caller;
      var $subentry;
      $1=$pObj;
      $2=$self;
      $3=$entry;
      var $4=$1;
      var $5=(($4+24)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6)|(0))!=0;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=$1;
      var $10$0=_CallExternalTimer($9);
      var $10$1=tempRet0;
      var $14$1 = $10$1;var $14$0 = $10$0;label = 4; break;
    case 3: 
      var $12$0=_hpTimer();
      var $12$1=tempRet0;
      var $14$1 = $12$1;var $14$0 = $12$0;label = 4; break;
    case 4: 
      var $14$0;
      var $14$1;
      var $15=$2;
      var $16=(($15)|0);
      var $ld$0$0=(($16)|0);
      var $17$0=HEAP32[(($ld$0$0)>>2)];
      var $ld$1$1=(($16+4)|0);
      var $17$1=HEAP32[(($ld$1$1)>>2)];
      var $18$0 = _i64Subtract($14$0,$14$1,$17$0,$17$1); var $18$1 = tempRet0;
      var $st$2$0=(($tt)|0);
      HEAP32[(($st$2$0)>>2)]=$18$0;
      var $st$3$1=(($tt+4)|0);
      HEAP32[(($st$3$1)>>2)]=$18$1;
      var $ld$4$0=(($tt)|0);
      var $19$0=HEAP32[(($ld$4$0)>>2)];
      var $ld$5$1=(($tt+4)|0);
      var $19$1=HEAP32[(($ld$5$1)>>2)];
      var $20=$2;
      var $21=(($20+8)|0);
      var $ld$6$0=(($21)|0);
      var $22$0=HEAP32[(($ld$6$0)>>2)];
      var $ld$7$1=(($21+4)|0);
      var $22$1=HEAP32[(($ld$7$1)>>2)];
      var $23$0 = _i64Subtract($19$0,$19$1,$22$0,$22$1); var $23$1 = tempRet0;
      var $st$8$0=(($it)|0);
      HEAP32[(($st$8$0)>>2)]=$23$0;
      var $st$9$1=(($it+4)|0);
      HEAP32[(($st$9$1)>>2)]=$23$1;
      var $24=$2;
      var $25=(($24+16)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=(($26)|(0))!=0;
      if ($27) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $ld$10$0=(($tt)|0);
      var $29$0=HEAP32[(($ld$10$0)>>2)];
      var $ld$11$1=(($tt+4)|0);
      var $29$1=HEAP32[(($ld$11$1)>>2)];
      var $30=$2;
      var $31=(($30+16)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32+8)|0);
      var $ld$12$0=(($33)|0);
      var $34$0=HEAP32[(($ld$12$0)>>2)];
      var $ld$13$1=(($33+4)|0);
      var $34$1=HEAP32[(($ld$13$1)>>2)];
      var $35$0 = _i64Add($34$0,$34$1,$29$0,$29$1); var $35$1 = tempRet0;
      var $st$14$0=(($33)|0);
      HEAP32[(($st$14$0)>>2)]=$35$0;
      var $st$15$1=(($33+4)|0);
      HEAP32[(($st$15$1)>>2)]=$35$1;
      label = 6; break;
    case 6: 
      var $37=$2;
      var $38=(($37+16)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=$1;
      var $41=(($40+12)|0);
      HEAP32[(($41)>>2)]=$39;
      var $42=$3;
      var $43=(($42+40)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=((($44)-(1))|0);
      HEAP32[(($43)>>2)]=$45;
      var $46=(($45)|(0))==0;
      if ($46) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $ld$16$0=(($tt)|0);
      var $48$0=HEAP32[(($ld$16$0)>>2)];
      var $ld$17$1=(($tt+4)|0);
      var $48$1=HEAP32[(($ld$17$1)>>2)];
      var $49=$3;
      var $50=(($49+16)|0);
      var $ld$18$0=(($50)|0);
      var $51$0=HEAP32[(($ld$18$0)>>2)];
      var $ld$19$1=(($50+4)|0);
      var $51$1=HEAP32[(($ld$19$1)>>2)];
      var $52$0 = _i64Add($51$0,$51$1,$48$0,$48$1); var $52$1 = tempRet0;
      var $st$20$0=(($50)|0);
      HEAP32[(($st$20$0)>>2)]=$52$0;
      var $st$21$1=(($50+4)|0);
      HEAP32[(($st$21$1)>>2)]=$52$1;
      label = 9; break;
    case 8: 
      var $54=$3;
      var $55=(($54+36)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=((($56)+(1))|0);
      HEAP32[(($55)>>2)]=$57;
      label = 9; break;
    case 9: 
      var $ld$22$0=(($it)|0);
      var $59$0=HEAP32[(($ld$22$0)>>2)];
      var $ld$23$1=(($it+4)|0);
      var $59$1=HEAP32[(($ld$23$1)>>2)];
      var $60=$3;
      var $61=(($60+24)|0);
      var $ld$24$0=(($61)|0);
      var $62$0=HEAP32[(($ld$24$0)>>2)];
      var $ld$25$1=(($61+4)|0);
      var $62$1=HEAP32[(($ld$25$1)>>2)];
      var $63$0 = _i64Add($62$0,$62$1,$59$0,$59$1); var $63$1 = tempRet0;
      var $st$26$0=(($61)|0);
      HEAP32[(($st$26$0)>>2)]=$63$0;
      var $st$27$1=(($61+4)|0);
      HEAP32[(($st$27$1)>>2)]=$63$1;
      var $64=$3;
      var $65=(($64+32)|0);
      var $66=HEAP32[(($65)>>2)];
      var $67=((($66)+(1))|0);
      HEAP32[(($65)>>2)]=$67;
      var $68=$1;
      var $69=(($68+20)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=$70 & 2;
      var $72=(($71)|(0))!=0;
      if ($72) { label = 10; break; } else { label = 17; break; }
    case 10: 
      var $74=$2;
      var $75=(($74+16)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=(($76)|(0))!=0;
      if ($77) { label = 11; break; } else { label = 17; break; }
    case 11: 
      var $79=$2;
      var $80=(($79+16)|0);
      var $81=HEAP32[(($80)>>2)];
      var $82=(($81+20)|0);
      var $83=HEAP32[(($82)>>2)];
      $caller=$83;
      var $84=$1;
      var $85=$caller;
      var $86=$3;
      var $87=_getSubEntry($84, $85, $86);
      $subentry=$87;
      var $88=$subentry;
      var $89=(($88)|(0))!=0;
      if ($89) { label = 12; break; } else { label = 16; break; }
    case 12: 
      var $91=$subentry;
      var $92=(($91+36)|0);
      var $93=HEAP32[(($92)>>2)];
      var $94=((($93)-(1))|0);
      HEAP32[(($92)>>2)]=$94;
      var $95=(($94)|(0))==0;
      if ($95) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $ld$28$0=(($tt)|0);
      var $97$0=HEAP32[(($ld$28$0)>>2)];
      var $ld$29$1=(($tt+4)|0);
      var $97$1=HEAP32[(($ld$29$1)>>2)];
      var $98=$subentry;
      var $99=(($98+12)|0);
      var $ld$30$0=(($99)|0);
      var $100$0=HEAP32[(($ld$30$0)>>2)];
      var $ld$31$1=(($99+4)|0);
      var $100$1=HEAP32[(($ld$31$1)>>2)];
      var $101$0 = _i64Add($100$0,$100$1,$97$0,$97$1); var $101$1 = tempRet0;
      var $st$32$0=(($99)|0);
      HEAP32[(($st$32$0)>>2)]=$101$0;
      var $st$33$1=(($99+4)|0);
      HEAP32[(($st$33$1)>>2)]=$101$1;
      label = 15; break;
    case 14: 
      var $103=$subentry;
      var $104=(($103+32)|0);
      var $105=HEAP32[(($104)>>2)];
      var $106=((($105)+(1))|0);
      HEAP32[(($104)>>2)]=$106;
      label = 15; break;
    case 15: 
      var $ld$34$0=(($it)|0);
      var $108$0=HEAP32[(($ld$34$0)>>2)];
      var $ld$35$1=(($it+4)|0);
      var $108$1=HEAP32[(($ld$35$1)>>2)];
      var $109=$subentry;
      var $110=(($109+20)|0);
      var $ld$36$0=(($110)|0);
      var $111$0=HEAP32[(($ld$36$0)>>2)];
      var $ld$37$1=(($110+4)|0);
      var $111$1=HEAP32[(($ld$37$1)>>2)];
      var $112$0 = _i64Add($111$0,$111$1,$108$0,$108$1); var $112$1 = tempRet0;
      var $st$38$0=(($110)|0);
      HEAP32[(($st$38$0)>>2)]=$112$0;
      var $st$39$1=(($110+4)|0);
      HEAP32[(($st$39$1)>>2)]=$112$1;
      var $113=$subentry;
      var $114=(($113+28)|0);
      var $115=HEAP32[(($114)>>2)];
      var $116=((($115)+(1))|0);
      HEAP32[(($114)>>2)]=$116;
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      STACKTOP = __stackBase__;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _hpTimerUnit() {
  var label = 0;
  return 0.000001;
}
function _CallExternalTimer($pObj) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1=__stackBase__;
      var $2;
      var $result=(__stackBase__)+(8);
      var $o;
      var $val;
      $2=$pObj;
      var $3=$2;
      var $4=(($3+24)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=HEAP32[((_empty_tuple)>>2)];
      var $7=_PyObject_Call($5, $6, 0);
      $o=$7;
      var $8=$o;
      var $9=(($8)|(0))==0;
      if ($9) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $11=$2;
      var $12=(($11+24)|0);
      var $13=HEAP32[(($12)>>2)];
      _PyErr_WriteUnraisable($13);
      var $$etemp$0$0=0;
      var $$etemp$0$1=0;
      var $st$1$0=(($1)|0);
      HEAP32[(($st$1$0)>>2)]=$$etemp$0$0;
      var $st$2$1=(($1+4)|0);
      HEAP32[(($st$2$1)>>2)]=$$etemp$0$1;
      label = 14; break;
    case 3: 
      var $15=$2;
      var $16=(($15+28)|0);
      var $17=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($16)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($16)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $18=$17 > 0;
      if ($18) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $20=$o;
      var $21$0=_PyLong_AsLongLong($20);
      var $21$1=tempRet0;
      var $st$3$0=(($result)|0);
      HEAP32[(($st$3$0)>>2)]=$21$0;
      var $st$4$1=(($result+4)|0);
      HEAP32[(($st$4$1)>>2)]=$21$1;
      label = 6; break;
    case 5: 
      var $23=$o;
      var $24=_PyFloat_AsDouble($23);
      $val=$24;
      var $25=$val;
      var $26=($25)*(4294967296);
      var $27$0 = $26>>>0; var $27$1 = Math.min(Math.floor(($26)/4294967296), 4294967295)>>>0;
      var $st$5$0=(($result)|0);
      HEAP32[(($st$5$0)>>2)]=$27$0;
      var $st$6$1=(($result+4)|0);
      HEAP32[(($st$6$1)>>2)]=$27$1;
      label = 6; break;
    case 6: 
      label = 7; break;
    case 7: 
      var $30=$o;
      var $31=(($30)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=((($32)-(1))|0);
      HEAP32[(($31)>>2)]=$33;
      var $34=(($33)|(0))!=0;
      if ($34) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 10; break;
    case 9: 
      var $37=$o;
      var $38=(($37+4)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=(($39+24)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=$o;
      FUNCTION_TABLE[$41]($42);
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $45=_PyErr_Occurred();
      var $46=(($45)|(0))!=0;
      if ($46) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $48=$2;
      var $49=(($48+24)|0);
      var $50=HEAP32[(($49)>>2)];
      _PyErr_WriteUnraisable($50);
      var $$etemp$7$0=0;
      var $$etemp$7$1=0;
      var $st$8$0=(($1)|0);
      HEAP32[(($st$8$0)>>2)]=$$etemp$7$0;
      var $st$9$1=(($1+4)|0);
      HEAP32[(($st$9$1)>>2)]=$$etemp$7$1;
      label = 14; break;
    case 13: 
      var $ld$10$0=(($result)|0);
      var $52$0=HEAP32[(($ld$10$0)>>2)];
      var $ld$11$1=(($result+4)|0);
      var $52$1=HEAP32[(($ld$11$1)>>2)];
      var $st$12$0=(($1)|0);
      HEAP32[(($st$12$0)>>2)]=$52$0;
      var $st$13$1=(($1+4)|0);
      HEAP32[(($st$13$1)>>2)]=$52$1;
      label = 14; break;
    case 14: 
      var $ld$14$0=(($1)|0);
      var $54$0=HEAP32[(($ld$14$0)>>2)];
      var $ld$15$1=(($1+4)|0);
      var $54$1=HEAP32[(($ld$15$1)>>2)];
      STACKTOP = __stackBase__;
      return (tempRet0=$54$1,$54$0);
    default: assert(0, "bad label: " + label);
  }
}
function _hpTimer() {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  var $tv=__stackBase__;
  var $ret=(__stackBase__)+(8);
  var $1=_gettimeofday($tv, 0);
  var $2=(($tv)|0);
  var $3=HEAP32[(($2)>>2)];
  var $4$0=$3;
  var $4$1=((($3)|(0)) < 0 ? -1 : 0);
  var $st$0$0=(($ret)|0);
  HEAP32[(($st$0$0)>>2)]=$4$0;
  var $st$1$1=(($ret+4)|0);
  HEAP32[(($st$1$1)>>2)]=$4$1;
  var $ld$2$0=(($ret)|0);
  var $5$0=HEAP32[(($ld$2$0)>>2)];
  var $ld$3$1=(($ret+4)|0);
  var $5$1=HEAP32[(($ld$3$1)>>2)];
  var $$etemp$4$0=1000000;
  var $$etemp$4$1=0;
  var $6$0 = ___muldi3($5$0,$5$1,$$etemp$4$0,$$etemp$4$1); var $6$1 = tempRet0;
  var $7=(($tv+4)|0);
  var $8=HEAP32[(($7)>>2)];
  var $9$0=$8;
  var $9$1=((($8)|(0)) < 0 ? -1 : 0);
  var $10$0 = _i64Add($6$0,$6$1,$9$0,$9$1); var $10$1 = tempRet0;
  var $st$5$0=(($ret)|0);
  HEAP32[(($st$5$0)>>2)]=$10$0;
  var $st$6$1=(($ret+4)|0);
  HEAP32[(($st$6$1)>>2)]=$10$1;
  var $ld$7$0=(($ret)|0);
  var $11$0=HEAP32[(($ld$7$0)>>2)];
  var $ld$8$1=(($ret+4)|0);
  var $11$1=HEAP32[(($ld$8$1)>>2)];
  STACKTOP = __stackBase__;
  return (tempRet0=$11$1,$11$0);
}
function _getSubEntry($pObj, $caller, $entry) {
  var label = 0;
  var $1;
  var $2;
  var $3;
  $1=$pObj;
  $2=$caller;
  $3=$entry;
  var $4=$2;
  var $5=(($4+44)|0);
  var $6=$3;
  var $7=$6;
  var $8=_RotatingTree_Get($5, $7);
  var $9=$8;
  return $9;
}
function _profiler_callback($self, $frame, $what, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      $1=$self;
      $2=$frame;
      $3=$what;
      $4=$arg;
      var $5=$3;
      if ((($5)|(0))==0) {
        label = 2; break;
      }
      else if ((($5)|(0))==3) {
        label = 3; break;
      }
      else if ((($5)|(0))==4) {
        label = 4; break;
      }
      else if ((($5)|(0))==6 | (($5)|(0))==5) {
        label = 8; break;
      }
      else {
      label = 12; break;
      }
    case 2: 
      var $7=$1;
      var $8=$2;
      var $9=(($8+16)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=$10;
      var $12=$2;
      var $13=(($12+16)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=$14;
      _ptrace_enter_call($7, $11, $15);
      label = 13; break;
    case 3: 
      var $17=$1;
      var $18=$2;
      var $19=(($18+16)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=$20;
      _ptrace_leave_call($17, $21);
      label = 13; break;
    case 4: 
      var $23=$1;
      var $24=$23;
      var $25=(($24+20)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=$26 & 4;
      var $28=(($27)|(0))!=0;
      if ($28) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $30=$4;
      var $31=(($30+4)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32)|(0))==((_PyCFunction_Type)|(0));
      if ($33) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $35=$1;
      var $36=$4;
      var $37=$36;
      var $38=(($37+8)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=$39;
      var $41=$4;
      _ptrace_enter_call($35, $40, $41);
      label = 7; break;
    case 7: 
      label = 13; break;
    case 8: 
      var $44=$1;
      var $45=$44;
      var $46=(($45+20)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=$47 & 4;
      var $49=(($48)|(0))!=0;
      if ($49) { label = 9; break; } else { label = 11; break; }
    case 9: 
      var $51=$4;
      var $52=(($51+4)|0);
      var $53=HEAP32[(($52)>>2)];
      var $54=(($53)|(0))==((_PyCFunction_Type)|(0));
      if ($54) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $56=$1;
      var $57=$4;
      var $58=$57;
      var $59=(($58+8)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=$60;
      _ptrace_leave_call($56, $61);
      label = 11; break;
    case 11: 
      label = 13; break;
    case 12: 
      label = 13; break;
    case 13: 
      return 0;
    default: assert(0, "bad label: " + label);
  }
}
function _ptrace_enter_call($self, $key, $userObj) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 12)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $pObj;
      var $profEntry;
      var $pContext;
      var $last_type=__stackBase__;
      var $last_value=(__stackBase__)+(4);
      var $last_tb=(__stackBase__)+(8);
      $1=$self;
      $2=$key;
      $3=$userObj;
      var $4=$1;
      var $5=$4;
      $pObj=$5;
      _PyErr_Fetch($last_type, $last_value, $last_tb);
      var $6=$pObj;
      var $7=$2;
      var $8=_getEntry($6, $7);
      $profEntry=$8;
      var $9=$profEntry;
      var $10=(($9)|(0))==0;
      if ($10) { label = 2; break; } else { label = 5; break; }
    case 2: 
      var $12=$pObj;
      var $13=$2;
      var $14=$3;
      var $15=_newProfilerEntry($12, $13, $14);
      $profEntry=$15;
      var $16=$profEntry;
      var $17=(($16)|(0))==0;
      if ($17) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 11; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $21=$pObj;
      var $22=(($21+16)|0);
      var $23=HEAP32[(($22)>>2)];
      $pContext=$23;
      var $24=$pContext;
      var $25=(($24)|(0))!=0;
      if ($25) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $27=$pContext;
      var $28=(($27+16)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=$pObj;
      var $31=(($30+16)|0);
      HEAP32[(($31)>>2)]=$29;
      label = 10; break;
    case 7: 
      var $33=_malloc(24);
      var $34=$33;
      $pContext=$34;
      var $35=$pContext;
      var $36=(($35)|(0))==0;
      if ($36) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $38=$pObj;
      var $39=(($38+20)|0);
      var $40=HEAP32[(($39)>>2)];
      var $41=$40 | 256;
      HEAP32[(($39)>>2)]=$41;
      label = 11; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $44=$pObj;
      var $45=$pContext;
      var $46=$profEntry;
      _initContext($44, $45, $46);
      label = 11; break;
    case 11: 
      var $48=HEAP32[(($last_type)>>2)];
      var $49=HEAP32[(($last_value)>>2)];
      var $50=HEAP32[(($last_tb)>>2)];
      _PyErr_Restore($48, $49, $50);
      STACKTOP = __stackBase__;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _ptrace_leave_call($self, $key) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $pObj;
      var $profEntry;
      var $pContext;
      $1=$self;
      $2=$key;
      var $3=$1;
      var $4=$3;
      $pObj=$4;
      var $5=$pObj;
      var $6=(($5+12)|0);
      var $7=HEAP32[(($6)>>2)];
      $pContext=$7;
      var $8=$pContext;
      var $9=(($8)|(0))==0;
      if ($9) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 7; break;
    case 3: 
      var $12=$pObj;
      var $13=$2;
      var $14=_getEntry($12, $13);
      $profEntry=$14;
      var $15=$profEntry;
      var $16=(($15)|(0))!=0;
      if ($16) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $18=$pObj;
      var $19=$pContext;
      var $20=$profEntry;
      _Stop($18, $19, $20);
      label = 6; break;
    case 5: 
      var $22=$pContext;
      var $23=(($22+16)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$pObj;
      var $26=(($25+12)|0);
      HEAP32[(($26)>>2)]=$24;
      label = 6; break;
    case 6: 
      var $28=$pObj;
      var $29=(($28+16)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$pContext;
      var $32=(($31+16)|0);
      HEAP32[(($32)>>2)]=$30;
      var $33=$pContext;
      var $34=$pObj;
      var $35=(($34+16)|0);
      HEAP32[(($35)>>2)]=$33;
      label = 7; break;
    case 7: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _getEntry($pObj, $key) {
  var label = 0;
  var $1;
  var $2;
  $1=$pObj;
  $2=$key;
  var $3=$1;
  var $4=(($3+8)|0);
  var $5=$2;
  var $6=_RotatingTree_Get($4, $5);
  var $7=$6;
  return $7;
}
function _newProfilerEntry($pObj, $key, $userObj) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $self;
      $2=$pObj;
      $3=$key;
      $4=$userObj;
      var $5=_malloc(48);
      var $6=$5;
      $self=$6;
      var $7=$self;
      var $8=(($7)|(0))==0;
      if ($8) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+20)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=$12 | 256;
      HEAP32[(($11)>>2)]=$13;
      $1=0;
      label = 6; break;
    case 3: 
      var $15=$4;
      var $16=_normalizeUserObj($15);
      $4=$16;
      var $17=$4;
      var $18=(($17)|(0))==0;
      if ($18) { label = 4; break; } else { label = 5; break; }
    case 4: 
      _PyErr_Clear();
      var $20=$self;
      var $21=$20;
      _free($21);
      var $22=$2;
      var $23=(($22+20)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$24 | 256;
      HEAP32[(($23)>>2)]=$25;
      $1=0;
      label = 6; break;
    case 5: 
      var $27=$3;
      var $28=$self;
      var $29=(($28)|0);
      var $30=(($29)|0);
      HEAP32[(($30)>>2)]=$27;
      var $31=$4;
      var $32=$self;
      var $33=(($32+12)|0);
      HEAP32[(($33)>>2)]=$31;
      var $34=$self;
      var $35=(($34+16)|0);
      var $$etemp$0$0=0;
      var $$etemp$0$1=0;
      var $st$1$0=(($35)|0);
      HEAP32[(($st$1$0)>>2)]=$$etemp$0$0;
      var $st$2$1=(($35+4)|0);
      HEAP32[(($st$2$1)>>2)]=$$etemp$0$1;
      var $36=$self;
      var $37=(($36+24)|0);
      var $$etemp$3$0=0;
      var $$etemp$3$1=0;
      var $st$4$0=(($37)|0);
      HEAP32[(($st$4$0)>>2)]=$$etemp$3$0;
      var $st$5$1=(($37+4)|0);
      HEAP32[(($st$5$1)>>2)]=$$etemp$3$1;
      var $38=$self;
      var $39=(($38+32)|0);
      HEAP32[(($39)>>2)]=0;
      var $40=$self;
      var $41=(($40+36)|0);
      HEAP32[(($41)>>2)]=0;
      var $42=$self;
      var $43=(($42+40)|0);
      HEAP32[(($43)>>2)]=0;
      var $44=$self;
      var $45=(($44+44)|0);
      HEAP32[(($45)>>2)]=0;
      var $46=$2;
      var $47=(($46+8)|0);
      var $48=$self;
      var $49=(($48)|0);
      _RotatingTree_Add($47, $49);
      var $50=$self;
      $1=$50;
      label = 6; break;
    case 6: 
      var $52=$1;
      return $52;
    default: assert(0, "bad label: " + label);
  }
}
function _initContext($pObj, $self, $entry) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $caller;
      var $subentry;
      $1=$pObj;
      $2=$self;
      $3=$entry;
      var $4=$3;
      var $5=$2;
      var $6=(($5+20)|0);
      HEAP32[(($6)>>2)]=$4;
      var $7=$2;
      var $8=(($7+8)|0);
      var $$etemp$0$0=0;
      var $$etemp$0$1=0;
      var $st$1$0=(($8)|0);
      HEAP32[(($st$1$0)>>2)]=$$etemp$0$0;
      var $st$2$1=(($8+4)|0);
      HEAP32[(($st$2$1)>>2)]=$$etemp$0$1;
      var $9=$1;
      var $10=(($9+12)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=$2;
      var $13=(($12+16)|0);
      HEAP32[(($13)>>2)]=$11;
      var $14=$2;
      var $15=$1;
      var $16=(($15+12)|0);
      HEAP32[(($16)>>2)]=$14;
      var $17=$3;
      var $18=(($17+40)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=((($19)+(1))|0);
      HEAP32[(($18)>>2)]=$20;
      var $21=$1;
      var $22=(($21+20)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=$23 & 2;
      var $25=(($24)|(0))!=0;
      if ($25) { label = 2; break; } else { label = 8; break; }
    case 2: 
      var $27=$2;
      var $28=(($27+16)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=(($29)|(0))!=0;
      if ($30) { label = 3; break; } else { label = 8; break; }
    case 3: 
      var $32=$2;
      var $33=(($32+16)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=(($34+20)|0);
      var $36=HEAP32[(($35)>>2)];
      $caller=$36;
      var $37=$1;
      var $38=$caller;
      var $39=$3;
      var $40=_getSubEntry($37, $38, $39);
      $subentry=$40;
      var $41=$subentry;
      var $42=(($41)|(0))==0;
      if ($42) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $44=$1;
      var $45=$caller;
      var $46=$3;
      var $47=_newSubEntry($44, $45, $46);
      $subentry=$47;
      label = 5; break;
    case 5: 
      var $49=$subentry;
      var $50=(($49)|(0))!=0;
      if ($50) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $52=$subentry;
      var $53=(($52+36)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=((($54)+(1))|0);
      HEAP32[(($53)>>2)]=$55;
      label = 7; break;
    case 7: 
      label = 8; break;
    case 8: 
      var $58=$1;
      var $59=(($58+24)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=(($60)|(0))!=0;
      if ($61) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $63=$1;
      var $64$0=_CallExternalTimer($63);
      var $64$1=tempRet0;
      var $68$1 = $64$1;var $68$0 = $64$0;label = 11; break;
    case 10: 
      var $66$0=_hpTimer();
      var $66$1=tempRet0;
      var $68$1 = $66$1;var $68$0 = $66$0;label = 11; break;
    case 11: 
      var $68$0;
      var $68$1;
      var $69=$2;
      var $70=(($69)|0);
      var $st$3$0=(($70)|0);
      HEAP32[(($st$3$0)>>2)]=$68$0;
      var $st$4$1=(($70+4)|0);
      HEAP32[(($st$4$1)>>2)]=$68$1;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _newSubEntry($pObj, $caller, $entry) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $self;
      $2=$pObj;
      $3=$caller;
      $4=$entry;
      var $5=_malloc(40);
      var $6=$5;
      $self=$6;
      var $7=$self;
      var $8=(($7)|(0))==0;
      if ($8) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+20)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=$12 | 256;
      HEAP32[(($11)>>2)]=$13;
      $1=0;
      label = 4; break;
    case 3: 
      var $15=$4;
      var $16=$15;
      var $17=$self;
      var $18=(($17)|0);
      var $19=(($18)|0);
      HEAP32[(($19)>>2)]=$16;
      var $20=$self;
      var $21=(($20+12)|0);
      var $$etemp$0$0=0;
      var $$etemp$0$1=0;
      var $st$1$0=(($21)|0);
      HEAP32[(($st$1$0)>>2)]=$$etemp$0$0;
      var $st$2$1=(($21+4)|0);
      HEAP32[(($st$2$1)>>2)]=$$etemp$0$1;
      var $22=$self;
      var $23=(($22+20)|0);
      var $$etemp$3$0=0;
      var $$etemp$3$1=0;
      var $st$4$0=(($23)|0);
      HEAP32[(($st$4$0)>>2)]=$$etemp$3$0;
      var $st$5$1=(($23+4)|0);
      HEAP32[(($st$5$1)>>2)]=$$etemp$3$1;
      var $24=$self;
      var $25=(($24+28)|0);
      HEAP32[(($25)>>2)]=0;
      var $26=$self;
      var $27=(($26+32)|0);
      HEAP32[(($27)>>2)]=0;
      var $28=$self;
      var $29=(($28+36)|0);
      HEAP32[(($29)>>2)]=0;
      var $30=$3;
      var $31=(($30+44)|0);
      var $32=$self;
      var $33=(($32)|0);
      _RotatingTree_Add($31, $33);
      var $34=$self;
      $1=$34;
      label = 4; break;
    case 4: 
      var $36=$1;
      return $36;
    default: assert(0, "bad label: " + label);
  }
}
function _normalizeUserObj($obj) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $fn;
      var $mod;
      var $modname;
      var $self;
      var $name;
      var $mo;
      var $res;
      $2=$obj;
      var $3=$2;
      var $4=(($3+4)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))==((_PyCFunction_Type)|(0));
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $8=$2;
      var $9=(($8)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=((($10)+(1))|0);
      HEAP32[(($9)>>2)]=$11;
      var $12=$2;
      $1=$12;
      label = 40; break;
    case 3: 
      var $14=$2;
      var $15=$14;
      $fn=$15;
      var $16=$fn;
      var $17=(($16+12)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18)|(0))==0;
      if ($19) { label = 4; break; } else { label = 18; break; }
    case 4: 
      var $21=$fn;
      var $22=(($21+16)|0);
      var $23=HEAP32[(($22)>>2)];
      $mod=$23;
      var $24=$mod;
      var $25=(($24)|(0))!=0;
      if ($25) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $27=$mod;
      var $28=(($27+4)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=(($29+84)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=$31 & 134217728;
      var $33=(($32)|(0))!=0;
      if ($33) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $35=$mod;
      var $36=$35;
      var $37=(($36+20)|0);
      var $38=(($37)|0);
      $modname=$38;
      label = 15; break;
    case 7: 
      var $40=$mod;
      var $41=(($40)|(0))!=0;
      if ($41) { label = 8; break; } else { label = 13; break; }
    case 8: 
      var $43=$mod;
      var $44=(($43+4)|0);
      var $45=HEAP32[(($44)>>2)];
      var $46=(($45)|(0))==((_PyModule_Type)|(0));
      if ($46) { label = 10; break; } else { label = 9; break; }
    case 9: 
      var $48=$mod;
      var $49=(($48+4)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=_PyType_IsSubtype($50, _PyModule_Type);
      var $52=(($51)|(0))!=0;
      if ($52) { label = 10; break; } else { label = 13; break; }
    case 10: 
      var $54=$mod;
      var $55=_PyModule_GetName($54);
      $modname=$55;
      var $56=$modname;
      var $57=(($56)|(0))==0;
      if ($57) { label = 11; break; } else { label = 12; break; }
    case 11: 
      _PyErr_Clear();
      $modname=((__str36)|0);
      label = 12; break;
    case 12: 
      label = 14; break;
    case 13: 
      $modname=((__str36)|0);
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $63=$modname;
      var $64=_strcmp($63, ((__str36)|0));
      var $65=(($64)|(0))!=0;
      if ($65) { label = 16; break; } else { label = 17; break; }
    case 16: 
      var $67=$modname;
      var $68=$fn;
      var $69=(($68+8)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=(($70)|0);
      var $72=HEAP32[(($71)>>2)];
      var $73=_PyString_FromFormat(((__str37)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$67,HEAP32[(((tempInt)+(4))>>2)]=$72,tempInt));
      $1=$73;
      label = 40; break;
    case 17: 
      var $75=$fn;
      var $76=(($75+8)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=(($77)|0);
      var $79=HEAP32[(($78)>>2)];
      var $80=_PyString_FromFormat(((__str38)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$79,tempInt));
      $1=$80;
      label = 40; break;
    case 18: 
      var $82=$fn;
      var $83=(($82+12)|0);
      var $84=HEAP32[(($83)>>2)];
      $self=$84;
      var $85=$fn;
      var $86=(($85+8)|0);
      var $87=HEAP32[(($86)>>2)];
      var $88=(($87)|0);
      var $89=HEAP32[(($88)>>2)];
      var $90=_PyString_FromString($89);
      $name=$90;
      var $91=$name;
      var $92=(($91)|(0))!=0;
      if ($92) { label = 19; break; } else { label = 39; break; }
    case 19: 
      var $94=$self;
      var $95=(($94+4)|0);
      var $96=HEAP32[(($95)>>2)];
      var $97=$name;
      var $98=__PyType_Lookup($96, $97);
      $mo=$98;
      label = 20; break;
    case 20: 
      var $100=$mo;
      var $101=(($100)|(0))==0;
      if ($101) { label = 21; break; } else { label = 22; break; }
    case 21: 
      label = 23; break;
    case 22: 
      var $104=$mo;
      var $105=(($104)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=((($106)+(1))|0);
      HEAP32[(($105)>>2)]=$107;
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      label = 25; break;
    case 25: 
      var $111=$name;
      var $112=(($111)|0);
      var $113=HEAP32[(($112)>>2)];
      var $114=((($113)-(1))|0);
      HEAP32[(($112)>>2)]=$114;
      var $115=(($114)|(0))!=0;
      if ($115) { label = 26; break; } else { label = 27; break; }
    case 26: 
      label = 28; break;
    case 27: 
      var $118=$name;
      var $119=(($118+4)|0);
      var $120=HEAP32[(($119)>>2)];
      var $121=(($120+24)|0);
      var $122=HEAP32[(($121)>>2)];
      var $123=$name;
      FUNCTION_TABLE[$122]($123);
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      var $126=$mo;
      var $127=(($126)|(0))!=0;
      if ($127) { label = 30; break; } else { label = 38; break; }
    case 30: 
      var $129=$mo;
      var $130=_PyObject_Repr($129);
      $res=$130;
      label = 31; break;
    case 31: 
      var $132=$mo;
      var $133=(($132)|0);
      var $134=HEAP32[(($133)>>2)];
      var $135=((($134)-(1))|0);
      HEAP32[(($133)>>2)]=$135;
      var $136=(($135)|(0))!=0;
      if ($136) { label = 32; break; } else { label = 33; break; }
    case 32: 
      label = 34; break;
    case 33: 
      var $139=$mo;
      var $140=(($139+4)|0);
      var $141=HEAP32[(($140)>>2)];
      var $142=(($141+24)|0);
      var $143=HEAP32[(($142)>>2)];
      var $144=$mo;
      FUNCTION_TABLE[$143]($144);
      label = 34; break;
    case 34: 
      label = 35; break;
    case 35: 
      var $147=$res;
      var $148=(($147)|(0))!=0;
      if ($148) { label = 36; break; } else { label = 37; break; }
    case 36: 
      var $150=$res;
      $1=$150;
      label = 40; break;
    case 37: 
      label = 38; break;
    case 38: 
      label = 39; break;
    case 39: 
      _PyErr_Clear();
      var $154=$fn;
      var $155=(($154+8)|0);
      var $156=HEAP32[(($155)>>2)];
      var $157=(($156)|0);
      var $158=HEAP32[(($157)>>2)];
      var $159=_PyString_FromFormat(((__str39)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$158,tempInt));
      $1=$159;
      label = 40; break;
    case 40: 
      var $161=$1;
      STACKTOP = __stackBase__;
      return $161;
    default: assert(0, "bad label: " + label);
  }
}
function _randombits($bits) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $result;
      $1=$bits;
      var $2=HEAP32[((_random_stream)>>2)];
      var $3=$1;
      var $4=1 << $3;
      var $5=(($2)>>>(0)) < (($4)>>>(0));
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $7=HEAP32[((_random_value)>>2)];
      var $8=Math.imul($7,1082527);
      HEAP32[((_random_value)>>2)]=$8;
      var $9=HEAP32[((_random_value)>>2)];
      HEAP32[((_random_stream)>>2)]=$9;
      label = 3; break;
    case 3: 
      var $11=HEAP32[((_random_stream)>>2)];
      var $12=$1;
      var $13=1 << $12;
      var $14=((($13)-(1))|0);
      var $15=$11 & $14;
      $result=$15;
      var $16=$1;
      var $17=HEAP32[((_random_stream)>>2)];
      var $18=$17 >>> (($16)>>>(0));
      HEAP32[((_random_stream)>>2)]=$18;
      var $19=$result;
      return $19;
    default: assert(0, "bad label: " + label);
  }
}
function _RotatingTree_Add($root, $node) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $1=$root;
      $2=$node;
      label = 2; break;
    case 2: 
      var $4=$1;
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 7; break; }
    case 3: 
      var $8=$2;
      var $9=(($8)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=$1;
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=(($10)>>>(0)) < (($14)>>>(0));
      if ($15) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $17=$1;
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18+4)|0);
      $1=$19;
      label = 6; break;
    case 5: 
      var $21=$1;
      var $22=HEAP32[(($21)>>2)];
      var $23=(($22+8)|0);
      $1=$23;
      label = 6; break;
    case 6: 
      label = 2; break;
    case 7: 
      var $26=$2;
      var $27=(($26+4)|0);
      HEAP32[(($27)>>2)]=0;
      var $28=$2;
      var $29=(($28+8)|0);
      HEAP32[(($29)>>2)]=0;
      var $30=$2;
      var $31=$1;
      HEAP32[(($31)>>2)]=$30;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _statsForEntry($node, $arg) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $entry;
      var $collect;
      var $info;
      var $err;
      $2=$node;
      $3=$arg;
      var $4=$2;
      var $5=$4;
      $entry=$5;
      var $6=$3;
      var $7=$6;
      $collect=$7;
      var $8=$entry;
      var $9=(($8+32)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10)|(0))==0;
      if ($11) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 28; break;
    case 3: 
      var $14=$entry;
      var $15=(($14+44)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=(($16)|(0))!=0;
      if ($17) { label = 4; break; } else { label = 14; break; }
    case 4: 
      var $19=_PyList_New(0);
      var $20=$collect;
      var $21=(($20+4)|0);
      HEAP32[(($21)>>2)]=$19;
      var $22=$collect;
      var $23=(($22+4)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=(($24)|(0))==0;
      if ($25) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=-1;
      label = 28; break;
    case 6: 
      var $28=$entry;
      var $29=(($28+44)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$collect;
      var $32=$31;
      var $33=_RotatingTree_Enum($30, (FUNCTION_TABLE_OFFSET + 4), $32);
      var $34=(($33)|(0))!=0;
      if ($34) { label = 7; break; } else { label = 13; break; }
    case 7: 
      label = 8; break;
    case 8: 
      var $37=$collect;
      var $38=(($37+4)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=(($39)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=((($41)-(1))|0);
      HEAP32[(($40)>>2)]=$42;
      var $43=(($42)|(0))!=0;
      if ($43) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 11; break;
    case 10: 
      var $46=$collect;
      var $47=(($46+4)|0);
      var $48=HEAP32[(($47)>>2)];
      var $49=(($48+4)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=(($50+24)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=$collect;
      var $54=(($53+4)|0);
      var $55=HEAP32[(($54)>>2)];
      FUNCTION_TABLE[$52]($55);
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      $1=-1;
      label = 28; break;
    case 13: 
      label = 15; break;
    case 14: 
      var $60=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $61=((($60)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$61;
      var $62=$collect;
      var $63=(($62+4)|0);
      HEAP32[(($63)>>2)]=__Py_NoneStruct;
      label = 15; break;
    case 15: 
      var $65=$entry;
      var $66=(($65+12)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=$entry;
      var $69=(($68+32)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=$entry;
      var $72=(($71+36)|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=$collect;
      var $75=(($74+8)|0);
      var $76=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($75)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($75)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $77=$entry;
      var $78=(($77+16)|0);
      var $ld$0$0=(($78)|0);
      var $79$0=HEAP32[(($ld$0$0)>>2)];
      var $ld$1$1=(($78+4)|0);
      var $79$1=HEAP32[(($ld$1$1)>>2)];
      var $80=((($79$0)>>>(0))+((($79$1)|(0))*4294967296));
      var $81=($76)*($80);
      var $82=$collect;
      var $83=(($82+8)|0);
      var $84=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($83)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($83)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $85=$entry;
      var $86=(($85+24)|0);
      var $ld$2$0=(($86)|0);
      var $87$0=HEAP32[(($ld$2$0)>>2)];
      var $ld$3$1=(($86+4)|0);
      var $87$1=HEAP32[(($ld$3$1)>>2)];
      var $88=((($87$0)>>>(0))+((($87$1)|(0))*4294967296));
      var $89=($84)*($88);
      var $90=$collect;
      var $91=(($90+4)|0);
      var $92=HEAP32[(($91)>>2)];
      var $93=_PyObject_CallFunction(_StatsEntryType, ((__str40)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 32)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$67,HEAP32[(((tempInt)+(4))>>2)]=$70,HEAP32[(((tempInt)+(8))>>2)]=$73,(HEAPF64[(tempDoublePtr)>>3]=$81,HEAP32[(((tempInt)+(12))>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((((tempInt)+(12))+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]),(HEAPF64[(tempDoublePtr)>>3]=$89,HEAP32[(((tempInt)+(20))>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((((tempInt)+(20))+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]),HEAP32[(((tempInt)+(28))>>2)]=$92,tempInt));
      $info=$93;
      label = 16; break;
    case 16: 
      var $95=$collect;
      var $96=(($95+4)|0);
      var $97=HEAP32[(($96)>>2)];
      var $98=(($97)|0);
      var $99=HEAP32[(($98)>>2)];
      var $100=((($99)-(1))|0);
      HEAP32[(($98)>>2)]=$100;
      var $101=(($100)|(0))!=0;
      if ($101) { label = 17; break; } else { label = 18; break; }
    case 17: 
      label = 19; break;
    case 18: 
      var $104=$collect;
      var $105=(($104+4)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=(($106+4)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=(($108+24)|0);
      var $110=HEAP32[(($109)>>2)];
      var $111=$collect;
      var $112=(($111+4)|0);
      var $113=HEAP32[(($112)>>2)];
      FUNCTION_TABLE[$110]($113);
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $116=$info;
      var $117=(($116)|(0))==0;
      if ($117) { label = 21; break; } else { label = 22; break; }
    case 21: 
      $1=-1;
      label = 28; break;
    case 22: 
      var $120=$collect;
      var $121=(($120)|0);
      var $122=HEAP32[(($121)>>2)];
      var $123=$info;
      var $124=_PyList_Append($122, $123);
      $err=$124;
      label = 23; break;
    case 23: 
      var $126=$info;
      var $127=(($126)|0);
      var $128=HEAP32[(($127)>>2)];
      var $129=((($128)-(1))|0);
      HEAP32[(($127)>>2)]=$129;
      var $130=(($129)|(0))!=0;
      if ($130) { label = 24; break; } else { label = 25; break; }
    case 24: 
      label = 26; break;
    case 25: 
      var $133=$info;
      var $134=(($133+4)|0);
      var $135=HEAP32[(($134)>>2)];
      var $136=(($135+24)|0);
      var $137=HEAP32[(($136)>>2)];
      var $138=$info;
      FUNCTION_TABLE[$137]($138);
      label = 26; break;
    case 26: 
      label = 27; break;
    case 27: 
      var $141=$err;
      $1=$141;
      label = 28; break;
    case 28: 
      var $143=$1;
      STACKTOP = __stackBase__;
      return $143;
    default: assert(0, "bad label: " + label);
  }
}
function _statsForSubEntry($node, $arg) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $sentry;
      var $collect;
      var $entry;
      var $err;
      var $sinfo;
      $2=$node;
      $3=$arg;
      var $4=$2;
      var $5=$4;
      $sentry=$5;
      var $6=$3;
      var $7=$6;
      $collect=$7;
      var $8=$sentry;
      var $9=(($8)|0);
      var $10=(($9)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=$11;
      $entry=$12;
      var $13=$entry;
      var $14=(($13+12)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=$sentry;
      var $17=(($16+28)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=$sentry;
      var $20=(($19+32)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=$collect;
      var $23=(($22+8)|0);
      var $24=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($23)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($23)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $25=$sentry;
      var $26=(($25+12)|0);
      var $ld$0$0=(($26)|0);
      var $27$0=HEAP32[(($ld$0$0)>>2)];
      var $ld$1$1=(($26+4)|0);
      var $27$1=HEAP32[(($ld$1$1)>>2)];
      var $28=((($27$0)>>>(0))+((($27$1)|(0))*4294967296));
      var $29=($24)*($28);
      var $30=$collect;
      var $31=(($30+8)|0);
      var $32=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($31)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($31)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $33=$sentry;
      var $34=(($33+20)|0);
      var $ld$2$0=(($34)|0);
      var $35$0=HEAP32[(($ld$2$0)>>2)];
      var $ld$3$1=(($34+4)|0);
      var $35$1=HEAP32[(($ld$3$1)>>2)];
      var $36=((($35$0)>>>(0))+((($35$1)|(0))*4294967296));
      var $37=($32)*($36);
      var $38=_PyObject_CallFunction(_StatsSubEntryType, ((__str41)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 28)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$15,HEAP32[(((tempInt)+(4))>>2)]=$18,HEAP32[(((tempInt)+(8))>>2)]=$21,(HEAPF64[(tempDoublePtr)>>3]=$29,HEAP32[(((tempInt)+(12))>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((((tempInt)+(12))+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]),(HEAPF64[(tempDoublePtr)>>3]=$37,HEAP32[(((tempInt)+(20))>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((((tempInt)+(20))+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]),tempInt));
      $sinfo=$38;
      var $39=$sinfo;
      var $40=(($39)|(0))==0;
      if ($40) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=-1;
      label = 9; break;
    case 3: 
      var $43=$collect;
      var $44=(($43+4)|0);
      var $45=HEAP32[(($44)>>2)];
      var $46=$sinfo;
      var $47=_PyList_Append($45, $46);
      $err=$47;
      label = 4; break;
    case 4: 
      var $49=$sinfo;
      var $50=(($49)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=((($51)-(1))|0);
      HEAP32[(($50)>>2)]=$52;
      var $53=(($52)|(0))!=0;
      if ($53) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 7; break;
    case 6: 
      var $56=$sinfo;
      var $57=(($56+4)|0);
      var $58=HEAP32[(($57)>>2)];
      var $59=(($58+24)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=$sinfo;
      FUNCTION_TABLE[$60]($61);
      label = 7; break;
    case 7: 
      label = 8; break;
    case 8: 
      var $64=$err;
      $1=$64;
      label = 9; break;
    case 9: 
      var $66=$1;
      STACKTOP = __stackBase__;
      return $66;
    default: assert(0, "bad label: " + label);
  }
}
function _RotatingTree_Get($root, $key) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $node;
      var $pnode;
      var $node1;
      var $next;
      var $rotate;
      $2=$root;
      $3=$key;
      var $4=_randombits(3);
      var $5=(($4)|(0))!=4;
      if ($5) { label = 2; break; } else { label = 11; break; }
    case 2: 
      var $7=$2;
      var $8=HEAP32[(($7)>>2)];
      $node=$8;
      label = 3; break;
    case 3: 
      var $10=$node;
      var $11=(($10)|(0))!=0;
      if ($11) { label = 4; break; } else { label = 10; break; }
    case 4: 
      var $13=$node;
      var $14=(($13)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=$3;
      var $17=(($15)|(0))==(($16)|(0));
      if ($17) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $19=$node;
      $1=$19;
      label = 30; break;
    case 6: 
      var $21=$3;
      var $22=$node;
      var $23=(($22)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=(($21)>>>(0)) < (($24)>>>(0));
      if ($25) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $27=$node;
      var $28=(($27+4)|0);
      var $29=HEAP32[(($28)>>2)];
      $node=$29;
      label = 9; break;
    case 8: 
      var $31=$node;
      var $32=(($31+8)|0);
      var $33=HEAP32[(($32)>>2)];
      $node=$33;
      label = 9; break;
    case 9: 
      label = 3; break;
    case 10: 
      $1=0;
      label = 30; break;
    case 11: 
      var $37=$2;
      $pnode=$37;
      var $38=$pnode;
      var $39=HEAP32[(($38)>>2)];
      $node1=$39;
      var $40=$node1;
      var $41=(($40)|(0))==0;
      if ($41) { label = 12; break; } else { label = 13; break; }
    case 12: 
      $1=0;
      label = 30; break;
    case 13: 
      label = 14; break;
    case 14: 
      var $45=$node1;
      var $46=(($45)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=$3;
      var $49=(($47)|(0))==(($48)|(0));
      if ($49) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $51=$node1;
      $1=$51;
      label = 30; break;
    case 16: 
      var $53=_randombits(1);
      var $54=(($53)|(0))!=0;
      var $55=$54 ^ 1;
      var $56=(($55)&(1));
      $rotate=$56;
      var $57=$3;
      var $58=$node1;
      var $59=(($58)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=(($57)>>>(0)) < (($60)>>>(0));
      if ($61) { label = 17; break; } else { label = 23; break; }
    case 17: 
      var $63=$node1;
      var $64=(($63+4)|0);
      var $65=HEAP32[(($64)>>2)];
      $next=$65;
      var $66=$next;
      var $67=(($66)|(0))==0;
      if ($67) { label = 18; break; } else { label = 19; break; }
    case 18: 
      $1=0;
      label = 30; break;
    case 19: 
      var $70=$rotate;
      var $71=(($70)|(0))!=0;
      if ($71) { label = 20; break; } else { label = 21; break; }
    case 20: 
      var $73=$next;
      var $74=(($73+8)|0);
      var $75=HEAP32[(($74)>>2)];
      var $76=$node1;
      var $77=(($76+4)|0);
      HEAP32[(($77)>>2)]=$75;
      var $78=$node1;
      var $79=$next;
      var $80=(($79+8)|0);
      HEAP32[(($80)>>2)]=$78;
      var $81=$next;
      var $82=$pnode;
      HEAP32[(($82)>>2)]=$81;
      label = 22; break;
    case 21: 
      var $84=$node1;
      var $85=(($84+4)|0);
      $pnode=$85;
      label = 22; break;
    case 22: 
      label = 29; break;
    case 23: 
      var $88=$node1;
      var $89=(($88+8)|0);
      var $90=HEAP32[(($89)>>2)];
      $next=$90;
      var $91=$next;
      var $92=(($91)|(0))==0;
      if ($92) { label = 24; break; } else { label = 25; break; }
    case 24: 
      $1=0;
      label = 30; break;
    case 25: 
      var $95=$rotate;
      var $96=(($95)|(0))!=0;
      if ($96) { label = 26; break; } else { label = 27; break; }
    case 26: 
      var $98=$next;
      var $99=(($98+4)|0);
      var $100=HEAP32[(($99)>>2)];
      var $101=$node1;
      var $102=(($101+8)|0);
      HEAP32[(($102)>>2)]=$100;
      var $103=$node1;
      var $104=$next;
      var $105=(($104+4)|0);
      HEAP32[(($105)>>2)]=$103;
      var $106=$next;
      var $107=$pnode;
      HEAP32[(($107)>>2)]=$106;
      label = 28; break;
    case 27: 
      var $109=$node1;
      var $110=(($109+8)|0);
      $pnode=$110;
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      var $113=$next;
      $node1=$113;
      label = 14; break;
    case 30: 
      var $115=$1;
      return $115;
    default: assert(0, "bad label: " + label);
  }
}
function _RotatingTree_Enum($root, $enumfn, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $result;
      var $node;
      $2=$root;
      $3=$enumfn;
      $4=$arg;
      label = 2; break;
    case 2: 
      var $6=$2;
      var $7=(($6)|(0))!=0;
      if ($7) { label = 3; break; } else { label = 8; break; }
    case 3: 
      var $9=$2;
      var $10=(($9+4)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=$3;
      var $13=$4;
      var $14=_RotatingTree_Enum($11, $12, $13);
      $result=$14;
      var $15=$result;
      var $16=(($15)|(0))!=0;
      if ($16) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $18=$result;
      $1=$18;
      label = 9; break;
    case 5: 
      var $20=$2;
      var $21=(($20+8)|0);
      var $22=HEAP32[(($21)>>2)];
      $node=$22;
      var $23=$3;
      var $24=$2;
      var $25=$4;
      var $26=FUNCTION_TABLE[$23]($24, $25);
      $result=$26;
      var $27=$result;
      var $28=(($27)|(0))!=0;
      if ($28) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $30=$result;
      $1=$30;
      label = 9; break;
    case 7: 
      var $32=$node;
      $2=$32;
      label = 2; break;
    case 8: 
      $1=0;
      label = 9; break;
    case 9: 
      var $35=$1;
      return $35;
    default: assert(0, "bad label: " + label);
  }
}
function _malloc($bytes) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $mem;
      var $nb;
      var $idx;
      var $smallbits;
      var $b;
      var $p;
      var $F;
      var $b1;
      var $p2;
      var $r;
      var $rsize;
      var $i;
      var $leftbits;
      var $leastbit;
      var $Y;
      var $K;
      var $N;
      var $F3;
      var $DVS;
      var $DV;
      var $I;
      var $B;
      var $F4;
      var $rsize5;
      var $p6;
      var $r7;
      var $dvs;
      var $rsize8;
      var $p9;
      var $r10;
      $1=$bytes;
      var $2=$1;
      var $3=(($2)>>>(0)) <= 244;
      if ($3) { label = 2; break; } else { label = 41; break; }
    case 2: 
      var $5=$1;
      var $6=(($5)>>>(0)) < 11;
      if ($6) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $14 = 16;label = 5; break;
    case 4: 
      var $9=$1;
      var $10=((($9)+(4))|0);
      var $11=((($10)+(7))|0);
      var $12=$11 & -8;
      var $14 = $12;label = 5; break;
    case 5: 
      var $14;
      $nb=$14;
      var $15=$nb;
      var $16=$15 >>> 3;
      $idx=$16;
      var $17=HEAP32[((((__gm_)|0))>>2)];
      var $18=$idx;
      var $19=$17 >>> (($18)>>>(0));
      $smallbits=$19;
      var $20=$smallbits;
      var $21=$20 & 3;
      var $22=(($21)|(0))!=0;
      if ($22) { label = 6; break; } else { label = 15; break; }
    case 6: 
      var $24=$smallbits;
      var $25=$24 ^ -1;
      var $26=$25 & 1;
      var $27=$idx;
      var $28=((($27)+($26))|0);
      $idx=$28;
      var $29=$idx;
      var $30=$29 << 1;
      var $31=((((__gm_+40)|0)+($30<<2))|0);
      var $32=$31;
      var $33=$32;
      $b=$33;
      var $34=$b;
      var $35=(($34+8)|0);
      var $36=HEAP32[(($35)>>2)];
      $p=$36;
      var $37=$p;
      var $38=(($37+8)|0);
      var $39=HEAP32[(($38)>>2)];
      $F=$39;
      var $40=$b;
      var $41=$F;
      var $42=(($40)|(0))==(($41)|(0));
      if ($42) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $44=$idx;
      var $45=1 << $44;
      var $46=$45 ^ -1;
      var $47=HEAP32[((((__gm_)|0))>>2)];
      var $48=$47 & $46;
      HEAP32[((((__gm_)|0))>>2)]=$48;
      label = 14; break;
    case 8: 
      var $50=$F;
      var $51=$50;
      var $52=HEAP32[((((__gm_+16)|0))>>2)];
      var $53=(($51)>>>(0)) >= (($52)>>>(0));
      if ($53) { label = 9; break; } else { var $61 = 0;label = 10; break; }
    case 9: 
      var $55=$F;
      var $56=(($55+12)|0);
      var $57=HEAP32[(($56)>>2)];
      var $58=$p;
      var $59=(($57)|(0))==(($58)|(0));
      var $61 = $59;label = 10; break;
    case 10: 
      var $61;
      var $62=(($61)&(1));
      var $63=($62);
      var $64=(($63)|(0))!=0;
      if ($64) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $66=$b;
      var $67=$F;
      var $68=(($67+12)|0);
      HEAP32[(($68)>>2)]=$66;
      var $69=$F;
      var $70=$b;
      var $71=(($70+8)|0);
      HEAP32[(($71)>>2)]=$69;
      label = 13; break;
    case 12: 
      _abort();
      throw "Reached an unreachable!";
    case 13: 
      label = 14; break;
    case 14: 
      var $75=$idx;
      var $76=$75 << 3;
      var $77=$76 | 1;
      var $78=$77 | 2;
      var $79=$p;
      var $80=(($79+4)|0);
      HEAP32[(($80)>>2)]=$78;
      var $81=$p;
      var $82=$81;
      var $83=$idx;
      var $84=$83 << 3;
      var $85=(($82+$84)|0);
      var $86=$85;
      var $87=(($86+4)|0);
      var $88=HEAP32[(($87)>>2)];
      var $89=$88 | 1;
      HEAP32[(($87)>>2)]=$89;
      var $90=$p;
      var $91=$90;
      var $92=(($91+8)|0);
      $mem=$92;
      label = 57; break;
    case 15: 
      var $94=$nb;
      var $95=HEAP32[((((__gm_+8)|0))>>2)];
      var $96=(($94)>>>(0)) > (($95)>>>(0));
      if ($96) { label = 16; break; } else { label = 39; break; }
    case 16: 
      var $98=$smallbits;
      var $99=(($98)|(0))!=0;
      if ($99) { label = 17; break; } else { label = 34; break; }
    case 17: 
      var $101=$smallbits;
      var $102=$idx;
      var $103=$101 << $102;
      var $104=$idx;
      var $105=1 << $104;
      var $106=$105 << 1;
      var $107=$idx;
      var $108=1 << $107;
      var $109=$108 << 1;
      var $110=(((-$109))|0);
      var $111=$106 | $110;
      var $112=$103 & $111;
      $leftbits=$112;
      var $113=$leftbits;
      var $114=$leftbits;
      var $115=(((-$114))|0);
      var $116=$113 & $115;
      $leastbit=$116;
      var $117=$leastbit;
      var $118=((($117)-(1))|0);
      $Y=$118;
      var $119=$Y;
      var $120=$119 >>> 12;
      var $121=$120 & 16;
      $K=$121;
      var $122=$K;
      $N=$122;
      var $123=$K;
      var $124=$Y;
      var $125=$124 >>> (($123)>>>(0));
      $Y=$125;
      var $126=$Y;
      var $127=$126 >>> 5;
      var $128=$127 & 8;
      $K=$128;
      var $129=$N;
      var $130=((($129)+($128))|0);
      $N=$130;
      var $131=$K;
      var $132=$Y;
      var $133=$132 >>> (($131)>>>(0));
      $Y=$133;
      var $134=$Y;
      var $135=$134 >>> 2;
      var $136=$135 & 4;
      $K=$136;
      var $137=$N;
      var $138=((($137)+($136))|0);
      $N=$138;
      var $139=$K;
      var $140=$Y;
      var $141=$140 >>> (($139)>>>(0));
      $Y=$141;
      var $142=$Y;
      var $143=$142 >>> 1;
      var $144=$143 & 2;
      $K=$144;
      var $145=$N;
      var $146=((($145)+($144))|0);
      $N=$146;
      var $147=$K;
      var $148=$Y;
      var $149=$148 >>> (($147)>>>(0));
      $Y=$149;
      var $150=$Y;
      var $151=$150 >>> 1;
      var $152=$151 & 1;
      $K=$152;
      var $153=$N;
      var $154=((($153)+($152))|0);
      $N=$154;
      var $155=$K;
      var $156=$Y;
      var $157=$156 >>> (($155)>>>(0));
      $Y=$157;
      var $158=$N;
      var $159=$Y;
      var $160=((($158)+($159))|0);
      $i=$160;
      var $161=$i;
      var $162=$161 << 1;
      var $163=((((__gm_+40)|0)+($162<<2))|0);
      var $164=$163;
      var $165=$164;
      $b1=$165;
      var $166=$b1;
      var $167=(($166+8)|0);
      var $168=HEAP32[(($167)>>2)];
      $p2=$168;
      var $169=$p2;
      var $170=(($169+8)|0);
      var $171=HEAP32[(($170)>>2)];
      $F3=$171;
      var $172=$b1;
      var $173=$F3;
      var $174=(($172)|(0))==(($173)|(0));
      if ($174) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $176=$i;
      var $177=1 << $176;
      var $178=$177 ^ -1;
      var $179=HEAP32[((((__gm_)|0))>>2)];
      var $180=$179 & $178;
      HEAP32[((((__gm_)|0))>>2)]=$180;
      label = 25; break;
    case 19: 
      var $182=$F3;
      var $183=$182;
      var $184=HEAP32[((((__gm_+16)|0))>>2)];
      var $185=(($183)>>>(0)) >= (($184)>>>(0));
      if ($185) { label = 20; break; } else { var $193 = 0;label = 21; break; }
    case 20: 
      var $187=$F3;
      var $188=(($187+12)|0);
      var $189=HEAP32[(($188)>>2)];
      var $190=$p2;
      var $191=(($189)|(0))==(($190)|(0));
      var $193 = $191;label = 21; break;
    case 21: 
      var $193;
      var $194=(($193)&(1));
      var $195=($194);
      var $196=(($195)|(0))!=0;
      if ($196) { label = 22; break; } else { label = 23; break; }
    case 22: 
      var $198=$b1;
      var $199=$F3;
      var $200=(($199+12)|0);
      HEAP32[(($200)>>2)]=$198;
      var $201=$F3;
      var $202=$b1;
      var $203=(($202+8)|0);
      HEAP32[(($203)>>2)]=$201;
      label = 24; break;
    case 23: 
      _abort();
      throw "Reached an unreachable!";
    case 24: 
      label = 25; break;
    case 25: 
      var $207=$i;
      var $208=$207 << 3;
      var $209=$nb;
      var $210=((($208)-($209))|0);
      $rsize=$210;
      var $211=$nb;
      var $212=$211 | 1;
      var $213=$212 | 2;
      var $214=$p2;
      var $215=(($214+4)|0);
      HEAP32[(($215)>>2)]=$213;
      var $216=$p2;
      var $217=$216;
      var $218=$nb;
      var $219=(($217+$218)|0);
      var $220=$219;
      $r=$220;
      var $221=$rsize;
      var $222=$221 | 1;
      var $223=$r;
      var $224=(($223+4)|0);
      HEAP32[(($224)>>2)]=$222;
      var $225=$rsize;
      var $226=$r;
      var $227=$226;
      var $228=$rsize;
      var $229=(($227+$228)|0);
      var $230=$229;
      var $231=(($230)|0);
      HEAP32[(($231)>>2)]=$225;
      var $232=HEAP32[((((__gm_+8)|0))>>2)];
      $DVS=$232;
      var $233=$DVS;
      var $234=(($233)|(0))!=0;
      if ($234) { label = 26; break; } else { label = 33; break; }
    case 26: 
      var $236=HEAP32[((((__gm_+20)|0))>>2)];
      $DV=$236;
      var $237=$DVS;
      var $238=$237 >>> 3;
      $I=$238;
      var $239=$I;
      var $240=$239 << 1;
      var $241=((((__gm_+40)|0)+($240<<2))|0);
      var $242=$241;
      var $243=$242;
      $B=$243;
      var $244=$B;
      $F4=$244;
      var $245=HEAP32[((((__gm_)|0))>>2)];
      var $246=$I;
      var $247=1 << $246;
      var $248=$245 & $247;
      var $249=(($248)|(0))!=0;
      if ($249) { label = 28; break; } else { label = 27; break; }
    case 27: 
      var $251=$I;
      var $252=1 << $251;
      var $253=HEAP32[((((__gm_)|0))>>2)];
      var $254=$253 | $252;
      HEAP32[((((__gm_)|0))>>2)]=$254;
      label = 32; break;
    case 28: 
      var $256=$B;
      var $257=(($256+8)|0);
      var $258=HEAP32[(($257)>>2)];
      var $259=$258;
      var $260=HEAP32[((((__gm_+16)|0))>>2)];
      var $261=(($259)>>>(0)) >= (($260)>>>(0));
      var $262=(($261)&(1));
      var $263=($262);
      var $264=(($263)|(0))!=0;
      if ($264) { label = 29; break; } else { label = 30; break; }
    case 29: 
      var $266=$B;
      var $267=(($266+8)|0);
      var $268=HEAP32[(($267)>>2)];
      $F4=$268;
      label = 31; break;
    case 30: 
      _abort();
      throw "Reached an unreachable!";
    case 31: 
      label = 32; break;
    case 32: 
      var $272=$DV;
      var $273=$B;
      var $274=(($273+8)|0);
      HEAP32[(($274)>>2)]=$272;
      var $275=$DV;
      var $276=$F4;
      var $277=(($276+12)|0);
      HEAP32[(($277)>>2)]=$275;
      var $278=$F4;
      var $279=$DV;
      var $280=(($279+8)|0);
      HEAP32[(($280)>>2)]=$278;
      var $281=$B;
      var $282=$DV;
      var $283=(($282+12)|0);
      HEAP32[(($283)>>2)]=$281;
      label = 33; break;
    case 33: 
      var $285=$rsize;
      HEAP32[((((__gm_+8)|0))>>2)]=$285;
      var $286=$r;
      HEAP32[((((__gm_+20)|0))>>2)]=$286;
      var $287=$p2;
      var $288=$287;
      var $289=(($288+8)|0);
      $mem=$289;
      label = 57; break;
    case 34: 
      var $291=HEAP32[((((__gm_+4)|0))>>2)];
      var $292=(($291)|(0))!=0;
      if ($292) { label = 35; break; } else { label = 37; break; }
    case 35: 
      var $294=$nb;
      var $295=_tmalloc_small(__gm_, $294);
      $mem=$295;
      var $296=(($295)|(0))!=0;
      if ($296) { label = 36; break; } else { label = 37; break; }
    case 36: 
      label = 57; break;
    case 37: 
      label = 38; break;
    case 38: 
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      label = 48; break;
    case 41: 
      var $303=$1;
      var $304=(($303)>>>(0)) >= 4294967232;
      if ($304) { label = 42; break; } else { label = 43; break; }
    case 42: 
      $nb=-1;
      label = 47; break;
    case 43: 
      var $307=$1;
      var $308=((($307)+(4))|0);
      var $309=((($308)+(7))|0);
      var $310=$309 & -8;
      $nb=$310;
      var $311=HEAP32[((((__gm_+4)|0))>>2)];
      var $312=(($311)|(0))!=0;
      if ($312) { label = 44; break; } else { label = 46; break; }
    case 44: 
      var $314=$nb;
      var $315=_tmalloc_large(__gm_, $314);
      $mem=$315;
      var $316=(($315)|(0))!=0;
      if ($316) { label = 45; break; } else { label = 46; break; }
    case 45: 
      label = 57; break;
    case 46: 
      label = 47; break;
    case 47: 
      label = 48; break;
    case 48: 
      var $321=$nb;
      var $322=HEAP32[((((__gm_+8)|0))>>2)];
      var $323=(($321)>>>(0)) <= (($322)>>>(0));
      if ($323) { label = 49; break; } else { label = 53; break; }
    case 49: 
      var $325=HEAP32[((((__gm_+8)|0))>>2)];
      var $326=$nb;
      var $327=((($325)-($326))|0);
      $rsize5=$327;
      var $328=HEAP32[((((__gm_+20)|0))>>2)];
      $p6=$328;
      var $329=$rsize5;
      var $330=(($329)>>>(0)) >= 16;
      if ($330) { label = 50; break; } else { label = 51; break; }
    case 50: 
      var $332=$p6;
      var $333=$332;
      var $334=$nb;
      var $335=(($333+$334)|0);
      var $336=$335;
      HEAP32[((((__gm_+20)|0))>>2)]=$336;
      $r7=$336;
      var $337=$rsize5;
      HEAP32[((((__gm_+8)|0))>>2)]=$337;
      var $338=$rsize5;
      var $339=$338 | 1;
      var $340=$r7;
      var $341=(($340+4)|0);
      HEAP32[(($341)>>2)]=$339;
      var $342=$rsize5;
      var $343=$r7;
      var $344=$343;
      var $345=$rsize5;
      var $346=(($344+$345)|0);
      var $347=$346;
      var $348=(($347)|0);
      HEAP32[(($348)>>2)]=$342;
      var $349=$nb;
      var $350=$349 | 1;
      var $351=$350 | 2;
      var $352=$p6;
      var $353=(($352+4)|0);
      HEAP32[(($353)>>2)]=$351;
      label = 52; break;
    case 51: 
      var $355=HEAP32[((((__gm_+8)|0))>>2)];
      $dvs=$355;
      HEAP32[((((__gm_+8)|0))>>2)]=0;
      HEAP32[((((__gm_+20)|0))>>2)]=0;
      var $356=$dvs;
      var $357=$356 | 1;
      var $358=$357 | 2;
      var $359=$p6;
      var $360=(($359+4)|0);
      HEAP32[(($360)>>2)]=$358;
      var $361=$p6;
      var $362=$361;
      var $363=$dvs;
      var $364=(($362+$363)|0);
      var $365=$364;
      var $366=(($365+4)|0);
      var $367=HEAP32[(($366)>>2)];
      var $368=$367 | 1;
      HEAP32[(($366)>>2)]=$368;
      label = 52; break;
    case 52: 
      var $370=$p6;
      var $371=$370;
      var $372=(($371+8)|0);
      $mem=$372;
      label = 57; break;
    case 53: 
      var $374=$nb;
      var $375=HEAP32[((((__gm_+12)|0))>>2)];
      var $376=(($374)>>>(0)) < (($375)>>>(0));
      if ($376) { label = 54; break; } else { label = 55; break; }
    case 54: 
      var $378=$nb;
      var $379=HEAP32[((((__gm_+12)|0))>>2)];
      var $380=((($379)-($378))|0);
      HEAP32[((((__gm_+12)|0))>>2)]=$380;
      $rsize8=$380;
      var $381=HEAP32[((((__gm_+24)|0))>>2)];
      $p9=$381;
      var $382=$p9;
      var $383=$382;
      var $384=$nb;
      var $385=(($383+$384)|0);
      var $386=$385;
      HEAP32[((((__gm_+24)|0))>>2)]=$386;
      $r10=$386;
      var $387=$rsize8;
      var $388=$387 | 1;
      var $389=$r10;
      var $390=(($389+4)|0);
      HEAP32[(($390)>>2)]=$388;
      var $391=$nb;
      var $392=$391 | 1;
      var $393=$392 | 2;
      var $394=$p9;
      var $395=(($394+4)|0);
      HEAP32[(($395)>>2)]=$393;
      var $396=$p9;
      var $397=$396;
      var $398=(($397+8)|0);
      $mem=$398;
      label = 57; break;
    case 55: 
      label = 56; break;
    case 56: 
      var $401=$nb;
      var $402=_sys_alloc(__gm_, $401);
      $mem=$402;
      label = 57; break;
    case 57: 
      var $404=$mem;
      return $404;
    default: assert(0, "bad label: " + label);
  }
}
function _tmalloc_small($m, $nb) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $t;
      var $v;
      var $rsize;
      var $i;
      var $leastbit;
      var $Y;
      var $K;
      var $N;
      var $trem;
      var $r;
      var $XP;
      var $R;
      var $F;
      var $RP;
      var $CP;
      var $H;
      var $C0;
      var $C1;
      var $DVS;
      var $DV;
      var $I;
      var $B;
      var $F1;
      $1=$m;
      $2=$nb;
      var $3=$1;
      var $4=(($3+4)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=$1;
      var $7=(($6+4)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=(((-$8))|0);
      var $10=$5 & $9;
      $leastbit=$10;
      var $11=$leastbit;
      var $12=((($11)-(1))|0);
      $Y=$12;
      var $13=$Y;
      var $14=$13 >>> 12;
      var $15=$14 & 16;
      $K=$15;
      var $16=$K;
      $N=$16;
      var $17=$K;
      var $18=$Y;
      var $19=$18 >>> (($17)>>>(0));
      $Y=$19;
      var $20=$Y;
      var $21=$20 >>> 5;
      var $22=$21 & 8;
      $K=$22;
      var $23=$N;
      var $24=((($23)+($22))|0);
      $N=$24;
      var $25=$K;
      var $26=$Y;
      var $27=$26 >>> (($25)>>>(0));
      $Y=$27;
      var $28=$Y;
      var $29=$28 >>> 2;
      var $30=$29 & 4;
      $K=$30;
      var $31=$N;
      var $32=((($31)+($30))|0);
      $N=$32;
      var $33=$K;
      var $34=$Y;
      var $35=$34 >>> (($33)>>>(0));
      $Y=$35;
      var $36=$Y;
      var $37=$36 >>> 1;
      var $38=$37 & 2;
      $K=$38;
      var $39=$N;
      var $40=((($39)+($38))|0);
      $N=$40;
      var $41=$K;
      var $42=$Y;
      var $43=$42 >>> (($41)>>>(0));
      $Y=$43;
      var $44=$Y;
      var $45=$44 >>> 1;
      var $46=$45 & 1;
      $K=$46;
      var $47=$N;
      var $48=((($47)+($46))|0);
      $N=$48;
      var $49=$K;
      var $50=$Y;
      var $51=$50 >>> (($49)>>>(0));
      $Y=$51;
      var $52=$N;
      var $53=$Y;
      var $54=((($52)+($53))|0);
      $i=$54;
      var $55=$i;
      var $56=$1;
      var $57=(($56+304)|0);
      var $58=(($57+($55<<2))|0);
      var $59=HEAP32[(($58)>>2)];
      $t=$59;
      $v=$59;
      var $60=$t;
      var $61=(($60+4)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=$62 & -8;
      var $64=$2;
      var $65=((($63)-($64))|0);
      $rsize=$65;
      label = 2; break;
    case 2: 
      var $67=$t;
      var $68=(($67+16)|0);
      var $69=(($68)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=(($70)|(0))!=0;
      if ($71) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $73=$t;
      var $74=(($73+16)|0);
      var $75=(($74)|0);
      var $76=HEAP32[(($75)>>2)];
      var $83 = $76;label = 5; break;
    case 4: 
      var $78=$t;
      var $79=(($78+16)|0);
      var $80=(($79+4)|0);
      var $81=HEAP32[(($80)>>2)];
      var $83 = $81;label = 5; break;
    case 5: 
      var $83;
      $t=$83;
      var $84=(($83)|(0))!=0;
      if ($84) { label = 6; break; } else { label = 9; break; }
    case 6: 
      var $86=$t;
      var $87=(($86+4)|0);
      var $88=HEAP32[(($87)>>2)];
      var $89=$88 & -8;
      var $90=$2;
      var $91=((($89)-($90))|0);
      $trem=$91;
      var $92=$trem;
      var $93=$rsize;
      var $94=(($92)>>>(0)) < (($93)>>>(0));
      if ($94) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $96=$trem;
      $rsize=$96;
      var $97=$t;
      $v=$97;
      label = 8; break;
    case 8: 
      label = 2; break;
    case 9: 
      var $100=$v;
      var $101=$100;
      var $102=$1;
      var $103=(($102+16)|0);
      var $104=HEAP32[(($103)>>2)];
      var $105=(($101)>>>(0)) >= (($104)>>>(0));
      var $106=(($105)&(1));
      var $107=($106);
      var $108=(($107)|(0))!=0;
      if ($108) { label = 10; break; } else { label = 72; break; }
    case 10: 
      var $110=$v;
      var $111=$110;
      var $112=$2;
      var $113=(($111+$112)|0);
      var $114=$113;
      $r=$114;
      var $115=$v;
      var $116=$115;
      var $117=$r;
      var $118=$117;
      var $119=(($116)>>>(0)) < (($118)>>>(0));
      var $120=(($119)&(1));
      var $121=($120);
      var $122=(($121)|(0))!=0;
      if ($122) { label = 11; break; } else { label = 71; break; }
    case 11: 
      var $124=$v;
      var $125=(($124+24)|0);
      var $126=HEAP32[(($125)>>2)];
      $XP=$126;
      var $127=$v;
      var $128=(($127+12)|0);
      var $129=HEAP32[(($128)>>2)];
      var $130=$v;
      var $131=(($129)|(0))!=(($130)|(0));
      if ($131) { label = 12; break; } else { label = 19; break; }
    case 12: 
      var $133=$v;
      var $134=(($133+8)|0);
      var $135=HEAP32[(($134)>>2)];
      $F=$135;
      var $136=$v;
      var $137=(($136+12)|0);
      var $138=HEAP32[(($137)>>2)];
      $R=$138;
      var $139=$F;
      var $140=$139;
      var $141=$1;
      var $142=(($141+16)|0);
      var $143=HEAP32[(($142)>>2)];
      var $144=(($140)>>>(0)) >= (($143)>>>(0));
      if ($144) { label = 13; break; } else { var $158 = 0;label = 15; break; }
    case 13: 
      var $146=$F;
      var $147=(($146+12)|0);
      var $148=HEAP32[(($147)>>2)];
      var $149=$v;
      var $150=(($148)|(0))==(($149)|(0));
      if ($150) { label = 14; break; } else { var $158 = 0;label = 15; break; }
    case 14: 
      var $152=$R;
      var $153=(($152+8)|0);
      var $154=HEAP32[(($153)>>2)];
      var $155=$v;
      var $156=(($154)|(0))==(($155)|(0));
      var $158 = $156;label = 15; break;
    case 15: 
      var $158;
      var $159=(($158)&(1));
      var $160=($159);
      var $161=(($160)|(0))!=0;
      if ($161) { label = 16; break; } else { label = 17; break; }
    case 16: 
      var $163=$R;
      var $164=$F;
      var $165=(($164+12)|0);
      HEAP32[(($165)>>2)]=$163;
      var $166=$F;
      var $167=$R;
      var $168=(($167+8)|0);
      HEAP32[(($168)>>2)]=$166;
      label = 18; break;
    case 17: 
      _abort();
      throw "Reached an unreachable!";
    case 18: 
      label = 31; break;
    case 19: 
      var $172=$v;
      var $173=(($172+16)|0);
      var $174=(($173+4)|0);
      $RP=$174;
      var $175=HEAP32[(($174)>>2)];
      $R=$175;
      var $176=(($175)|(0))!=0;
      if ($176) { label = 21; break; } else { label = 20; break; }
    case 20: 
      var $178=$v;
      var $179=(($178+16)|0);
      var $180=(($179)|0);
      $RP=$180;
      var $181=HEAP32[(($180)>>2)];
      $R=$181;
      var $182=(($181)|(0))!=0;
      if ($182) { label = 21; break; } else { label = 30; break; }
    case 21: 
      label = 22; break;
    case 22: 
      var $185=$R;
      var $186=(($185+16)|0);
      var $187=(($186+4)|0);
      $CP=$187;
      var $188=HEAP32[(($187)>>2)];
      var $189=(($188)|(0))!=0;
      if ($189) { var $197 = 1;label = 24; break; } else { label = 23; break; }
    case 23: 
      var $191=$R;
      var $192=(($191+16)|0);
      var $193=(($192)|0);
      $CP=$193;
      var $194=HEAP32[(($193)>>2)];
      var $195=(($194)|(0))!=0;
      var $197 = $195;label = 24; break;
    case 24: 
      var $197;
      if ($197) { label = 25; break; } else { label = 26; break; }
    case 25: 
      var $199=$CP;
      $RP=$199;
      var $200=HEAP32[(($199)>>2)];
      $R=$200;
      label = 22; break;
    case 26: 
      var $202=$RP;
      var $203=$202;
      var $204=$1;
      var $205=(($204+16)|0);
      var $206=HEAP32[(($205)>>2)];
      var $207=(($203)>>>(0)) >= (($206)>>>(0));
      var $208=(($207)&(1));
      var $209=($208);
      var $210=(($209)|(0))!=0;
      if ($210) { label = 27; break; } else { label = 28; break; }
    case 27: 
      var $212=$RP;
      HEAP32[(($212)>>2)]=0;
      label = 29; break;
    case 28: 
      _abort();
      throw "Reached an unreachable!";
    case 29: 
      label = 30; break;
    case 30: 
      label = 31; break;
    case 31: 
      var $217=$XP;
      var $218=(($217)|(0))!=0;
      if ($218) { label = 32; break; } else { label = 59; break; }
    case 32: 
      var $220=$v;
      var $221=(($220+28)|0);
      var $222=HEAP32[(($221)>>2)];
      var $223=$1;
      var $224=(($223+304)|0);
      var $225=(($224+($222<<2))|0);
      $H=$225;
      var $226=$v;
      var $227=$H;
      var $228=HEAP32[(($227)>>2)];
      var $229=(($226)|(0))==(($228)|(0));
      if ($229) { label = 33; break; } else { label = 36; break; }
    case 33: 
      var $231=$R;
      var $232=$H;
      HEAP32[(($232)>>2)]=$231;
      var $233=(($231)|(0))==0;
      if ($233) { label = 34; break; } else { label = 35; break; }
    case 34: 
      var $235=$v;
      var $236=(($235+28)|0);
      var $237=HEAP32[(($236)>>2)];
      var $238=1 << $237;
      var $239=$238 ^ -1;
      var $240=$1;
      var $241=(($240+4)|0);
      var $242=HEAP32[(($241)>>2)];
      var $243=$242 & $239;
      HEAP32[(($241)>>2)]=$243;
      label = 35; break;
    case 35: 
      label = 43; break;
    case 36: 
      var $246=$XP;
      var $247=$246;
      var $248=$1;
      var $249=(($248+16)|0);
      var $250=HEAP32[(($249)>>2)];
      var $251=(($247)>>>(0)) >= (($250)>>>(0));
      var $252=(($251)&(1));
      var $253=($252);
      var $254=(($253)|(0))!=0;
      if ($254) { label = 37; break; } else { label = 41; break; }
    case 37: 
      var $256=$XP;
      var $257=(($256+16)|0);
      var $258=(($257)|0);
      var $259=HEAP32[(($258)>>2)];
      var $260=$v;
      var $261=(($259)|(0))==(($260)|(0));
      if ($261) { label = 38; break; } else { label = 39; break; }
    case 38: 
      var $263=$R;
      var $264=$XP;
      var $265=(($264+16)|0);
      var $266=(($265)|0);
      HEAP32[(($266)>>2)]=$263;
      label = 40; break;
    case 39: 
      var $268=$R;
      var $269=$XP;
      var $270=(($269+16)|0);
      var $271=(($270+4)|0);
      HEAP32[(($271)>>2)]=$268;
      label = 40; break;
    case 40: 
      label = 42; break;
    case 41: 
      _abort();
      throw "Reached an unreachable!";
    case 42: 
      label = 43; break;
    case 43: 
      var $276=$R;
      var $277=(($276)|(0))!=0;
      if ($277) { label = 44; break; } else { label = 58; break; }
    case 44: 
      var $279=$R;
      var $280=$279;
      var $281=$1;
      var $282=(($281+16)|0);
      var $283=HEAP32[(($282)>>2)];
      var $284=(($280)>>>(0)) >= (($283)>>>(0));
      var $285=(($284)&(1));
      var $286=($285);
      var $287=(($286)|(0))!=0;
      if ($287) { label = 45; break; } else { label = 56; break; }
    case 45: 
      var $289=$XP;
      var $290=$R;
      var $291=(($290+24)|0);
      HEAP32[(($291)>>2)]=$289;
      var $292=$v;
      var $293=(($292+16)|0);
      var $294=(($293)|0);
      var $295=HEAP32[(($294)>>2)];
      $C0=$295;
      var $296=(($295)|(0))!=0;
      if ($296) { label = 46; break; } else { label = 50; break; }
    case 46: 
      var $298=$C0;
      var $299=$298;
      var $300=$1;
      var $301=(($300+16)|0);
      var $302=HEAP32[(($301)>>2)];
      var $303=(($299)>>>(0)) >= (($302)>>>(0));
      var $304=(($303)&(1));
      var $305=($304);
      var $306=(($305)|(0))!=0;
      if ($306) { label = 47; break; } else { label = 48; break; }
    case 47: 
      var $308=$C0;
      var $309=$R;
      var $310=(($309+16)|0);
      var $311=(($310)|0);
      HEAP32[(($311)>>2)]=$308;
      var $312=$R;
      var $313=$C0;
      var $314=(($313+24)|0);
      HEAP32[(($314)>>2)]=$312;
      label = 49; break;
    case 48: 
      _abort();
      throw "Reached an unreachable!";
    case 49: 
      label = 50; break;
    case 50: 
      var $318=$v;
      var $319=(($318+16)|0);
      var $320=(($319+4)|0);
      var $321=HEAP32[(($320)>>2)];
      $C1=$321;
      var $322=(($321)|(0))!=0;
      if ($322) { label = 51; break; } else { label = 55; break; }
    case 51: 
      var $324=$C1;
      var $325=$324;
      var $326=$1;
      var $327=(($326+16)|0);
      var $328=HEAP32[(($327)>>2)];
      var $329=(($325)>>>(0)) >= (($328)>>>(0));
      var $330=(($329)&(1));
      var $331=($330);
      var $332=(($331)|(0))!=0;
      if ($332) { label = 52; break; } else { label = 53; break; }
    case 52: 
      var $334=$C1;
      var $335=$R;
      var $336=(($335+16)|0);
      var $337=(($336+4)|0);
      HEAP32[(($337)>>2)]=$334;
      var $338=$R;
      var $339=$C1;
      var $340=(($339+24)|0);
      HEAP32[(($340)>>2)]=$338;
      label = 54; break;
    case 53: 
      _abort();
      throw "Reached an unreachable!";
    case 54: 
      label = 55; break;
    case 55: 
      label = 57; break;
    case 56: 
      _abort();
      throw "Reached an unreachable!";
    case 57: 
      label = 58; break;
    case 58: 
      label = 59; break;
    case 59: 
      var $348=$rsize;
      var $349=(($348)>>>(0)) < 16;
      if ($349) { label = 60; break; } else { label = 61; break; }
    case 60: 
      var $351=$rsize;
      var $352=$2;
      var $353=((($351)+($352))|0);
      var $354=$353 | 1;
      var $355=$354 | 2;
      var $356=$v;
      var $357=(($356+4)|0);
      HEAP32[(($357)>>2)]=$355;
      var $358=$v;
      var $359=$358;
      var $360=$rsize;
      var $361=$2;
      var $362=((($360)+($361))|0);
      var $363=(($359+$362)|0);
      var $364=$363;
      var $365=(($364+4)|0);
      var $366=HEAP32[(($365)>>2)];
      var $367=$366 | 1;
      HEAP32[(($365)>>2)]=$367;
      label = 70; break;
    case 61: 
      var $369=$2;
      var $370=$369 | 1;
      var $371=$370 | 2;
      var $372=$v;
      var $373=(($372+4)|0);
      HEAP32[(($373)>>2)]=$371;
      var $374=$rsize;
      var $375=$374 | 1;
      var $376=$r;
      var $377=(($376+4)|0);
      HEAP32[(($377)>>2)]=$375;
      var $378=$rsize;
      var $379=$r;
      var $380=$379;
      var $381=$rsize;
      var $382=(($380+$381)|0);
      var $383=$382;
      var $384=(($383)|0);
      HEAP32[(($384)>>2)]=$378;
      var $385=$1;
      var $386=(($385+8)|0);
      var $387=HEAP32[(($386)>>2)];
      $DVS=$387;
      var $388=$DVS;
      var $389=(($388)|(0))!=0;
      if ($389) { label = 62; break; } else { label = 69; break; }
    case 62: 
      var $391=$1;
      var $392=(($391+20)|0);
      var $393=HEAP32[(($392)>>2)];
      $DV=$393;
      var $394=$DVS;
      var $395=$394 >>> 3;
      $I=$395;
      var $396=$I;
      var $397=$396 << 1;
      var $398=$1;
      var $399=(($398+40)|0);
      var $400=(($399+($397<<2))|0);
      var $401=$400;
      var $402=$401;
      $B=$402;
      var $403=$B;
      $F1=$403;
      var $404=$1;
      var $405=(($404)|0);
      var $406=HEAP32[(($405)>>2)];
      var $407=$I;
      var $408=1 << $407;
      var $409=$406 & $408;
      var $410=(($409)|(0))!=0;
      if ($410) { label = 64; break; } else { label = 63; break; }
    case 63: 
      var $412=$I;
      var $413=1 << $412;
      var $414=$1;
      var $415=(($414)|0);
      var $416=HEAP32[(($415)>>2)];
      var $417=$416 | $413;
      HEAP32[(($415)>>2)]=$417;
      label = 68; break;
    case 64: 
      var $419=$B;
      var $420=(($419+8)|0);
      var $421=HEAP32[(($420)>>2)];
      var $422=$421;
      var $423=$1;
      var $424=(($423+16)|0);
      var $425=HEAP32[(($424)>>2)];
      var $426=(($422)>>>(0)) >= (($425)>>>(0));
      var $427=(($426)&(1));
      var $428=($427);
      var $429=(($428)|(0))!=0;
      if ($429) { label = 65; break; } else { label = 66; break; }
    case 65: 
      var $431=$B;
      var $432=(($431+8)|0);
      var $433=HEAP32[(($432)>>2)];
      $F1=$433;
      label = 67; break;
    case 66: 
      _abort();
      throw "Reached an unreachable!";
    case 67: 
      label = 68; break;
    case 68: 
      var $437=$DV;
      var $438=$B;
      var $439=(($438+8)|0);
      HEAP32[(($439)>>2)]=$437;
      var $440=$DV;
      var $441=$F1;
      var $442=(($441+12)|0);
      HEAP32[(($442)>>2)]=$440;
      var $443=$F1;
      var $444=$DV;
      var $445=(($444+8)|0);
      HEAP32[(($445)>>2)]=$443;
      var $446=$B;
      var $447=$DV;
      var $448=(($447+12)|0);
      HEAP32[(($448)>>2)]=$446;
      label = 69; break;
    case 69: 
      var $450=$rsize;
      var $451=$1;
      var $452=(($451+8)|0);
      HEAP32[(($452)>>2)]=$450;
      var $453=$r;
      var $454=$1;
      var $455=(($454+20)|0);
      HEAP32[(($455)>>2)]=$453;
      label = 70; break;
    case 70: 
      var $457=$v;
      var $458=$457;
      var $459=(($458+8)|0);
      return $459;
    case 71: 
      label = 72; break;
    case 72: 
      _abort();
      throw "Reached an unreachable!";
    default: assert(0, "bad label: " + label);
  }
}
function _tmalloc_large($m, $nb) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $v;
      var $rsize;
      var $t;
      var $idx;
      var $X;
      var $Y;
      var $N;
      var $K;
      var $sizebits;
      var $rst;
      var $rt;
      var $trem;
      var $leftbits;
      var $i;
      var $leastbit;
      var $Y1;
      var $K2;
      var $N3;
      var $trem4;
      var $r;
      var $XP;
      var $R;
      var $F;
      var $RP;
      var $CP;
      var $H;
      var $C0;
      var $C1;
      var $I;
      var $B;
      var $F5;
      var $TP;
      var $H6;
      var $I7;
      var $X8;
      var $Y9;
      var $N10;
      var $K11;
      var $T;
      var $K12;
      var $C;
      var $F13;
      $2=$m;
      $3=$nb;
      $v=0;
      var $4=$3;
      var $5=(((-$4))|0);
      $rsize=$5;
      var $6=$3;
      var $7=$6 >>> 8;
      $X=$7;
      var $8=$X;
      var $9=(($8)|(0))==0;
      if ($9) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $idx=0;
      label = 7; break;
    case 3: 
      var $12=$X;
      var $13=(($12)>>>(0)) > 65535;
      if ($13) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $idx=31;
      label = 6; break;
    case 5: 
      var $16=$X;
      $Y=$16;
      var $17=$Y;
      var $18=((($17)-(256))|0);
      var $19=$18 >>> 16;
      var $20=$19 & 8;
      $N=$20;
      var $21=$N;
      var $22=$Y;
      var $23=$22 << $21;
      $Y=$23;
      var $24=((($23)-(4096))|0);
      var $25=$24 >>> 16;
      var $26=$25 & 4;
      $K=$26;
      var $27=$K;
      var $28=$N;
      var $29=((($28)+($27))|0);
      $N=$29;
      var $30=$K;
      var $31=$Y;
      var $32=$31 << $30;
      $Y=$32;
      var $33=((($32)-(16384))|0);
      var $34=$33 >>> 16;
      var $35=$34 & 2;
      $K=$35;
      var $36=$N;
      var $37=((($36)+($35))|0);
      $N=$37;
      var $38=$N;
      var $39=(((14)-($38))|0);
      var $40=$K;
      var $41=$Y;
      var $42=$41 << $40;
      $Y=$42;
      var $43=$42 >>> 15;
      var $44=((($39)+($43))|0);
      $K=$44;
      var $45=$K;
      var $46=$45 << 1;
      var $47=$3;
      var $48=$K;
      var $49=((($48)+(7))|0);
      var $50=$47 >>> (($49)>>>(0));
      var $51=$50 & 1;
      var $52=((($46)+($51))|0);
      $idx=$52;
      label = 6; break;
    case 6: 
      label = 7; break;
    case 7: 
      var $55=$idx;
      var $56=$2;
      var $57=(($56+304)|0);
      var $58=(($57+($55<<2))|0);
      var $59=HEAP32[(($58)>>2)];
      $t=$59;
      var $60=(($59)|(0))!=0;
      if ($60) { label = 8; break; } else { label = 23; break; }
    case 8: 
      var $62=$3;
      var $63=$idx;
      var $64=(($63)|(0))==31;
      if ($64) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $73 = 0;label = 11; break;
    case 10: 
      var $67=$idx;
      var $68=$67 >>> 1;
      var $69=((($68)+(8))|0);
      var $70=((($69)-(2))|0);
      var $71=(((31)-($70))|0);
      var $73 = $71;label = 11; break;
    case 11: 
      var $73;
      var $74=$62 << $73;
      $sizebits=$74;
      $rst=0;
      label = 12; break;
    case 12: 
      var $76=$t;
      var $77=(($76+4)|0);
      var $78=HEAP32[(($77)>>2)];
      var $79=$78 & -8;
      var $80=$3;
      var $81=((($79)-($80))|0);
      $trem=$81;
      var $82=$trem;
      var $83=$rsize;
      var $84=(($82)>>>(0)) < (($83)>>>(0));
      if ($84) { label = 13; break; } else { label = 16; break; }
    case 13: 
      var $86=$t;
      $v=$86;
      var $87=$trem;
      $rsize=$87;
      var $88=(($87)|(0))==0;
      if ($88) { label = 14; break; } else { label = 15; break; }
    case 14: 
      label = 22; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $92=$t;
      var $93=(($92+16)|0);
      var $94=(($93+4)|0);
      var $95=HEAP32[(($94)>>2)];
      $rt=$95;
      var $96=$sizebits;
      var $97=$96 >>> 31;
      var $98=$97 & 1;
      var $99=$t;
      var $100=(($99+16)|0);
      var $101=(($100+($98<<2))|0);
      var $102=HEAP32[(($101)>>2)];
      $t=$102;
      var $103=$rt;
      var $104=(($103)|(0))!=0;
      if ($104) { label = 17; break; } else { label = 19; break; }
    case 17: 
      var $106=$rt;
      var $107=$t;
      var $108=(($106)|(0))!=(($107)|(0));
      if ($108) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $110=$rt;
      $rst=$110;
      label = 19; break;
    case 19: 
      var $112=$t;
      var $113=(($112)|(0))==0;
      if ($113) { label = 20; break; } else { label = 21; break; }
    case 20: 
      var $115=$rst;
      $t=$115;
      label = 22; break;
    case 21: 
      var $117=$sizebits;
      var $118=$117 << 1;
      $sizebits=$118;
      label = 12; break;
    case 22: 
      label = 23; break;
    case 23: 
      var $121=$t;
      var $122=(($121)|(0))==0;
      if ($122) { label = 24; break; } else { label = 28; break; }
    case 24: 
      var $124=$v;
      var $125=(($124)|(0))==0;
      if ($125) { label = 25; break; } else { label = 28; break; }
    case 25: 
      var $127=$idx;
      var $128=1 << $127;
      var $129=$128 << 1;
      var $130=$idx;
      var $131=1 << $130;
      var $132=$131 << 1;
      var $133=(((-$132))|0);
      var $134=$129 | $133;
      var $135=$2;
      var $136=(($135+4)|0);
      var $137=HEAP32[(($136)>>2)];
      var $138=$134 & $137;
      $leftbits=$138;
      var $139=$leftbits;
      var $140=(($139)|(0))!=0;
      if ($140) { label = 26; break; } else { label = 27; break; }
    case 26: 
      var $142=$leftbits;
      var $143=$leftbits;
      var $144=(((-$143))|0);
      var $145=$142 & $144;
      $leastbit=$145;
      var $146=$leastbit;
      var $147=((($146)-(1))|0);
      $Y1=$147;
      var $148=$Y1;
      var $149=$148 >>> 12;
      var $150=$149 & 16;
      $K2=$150;
      var $151=$K2;
      $N3=$151;
      var $152=$K2;
      var $153=$Y1;
      var $154=$153 >>> (($152)>>>(0));
      $Y1=$154;
      var $155=$Y1;
      var $156=$155 >>> 5;
      var $157=$156 & 8;
      $K2=$157;
      var $158=$N3;
      var $159=((($158)+($157))|0);
      $N3=$159;
      var $160=$K2;
      var $161=$Y1;
      var $162=$161 >>> (($160)>>>(0));
      $Y1=$162;
      var $163=$Y1;
      var $164=$163 >>> 2;
      var $165=$164 & 4;
      $K2=$165;
      var $166=$N3;
      var $167=((($166)+($165))|0);
      $N3=$167;
      var $168=$K2;
      var $169=$Y1;
      var $170=$169 >>> (($168)>>>(0));
      $Y1=$170;
      var $171=$Y1;
      var $172=$171 >>> 1;
      var $173=$172 & 2;
      $K2=$173;
      var $174=$N3;
      var $175=((($174)+($173))|0);
      $N3=$175;
      var $176=$K2;
      var $177=$Y1;
      var $178=$177 >>> (($176)>>>(0));
      $Y1=$178;
      var $179=$Y1;
      var $180=$179 >>> 1;
      var $181=$180 & 1;
      $K2=$181;
      var $182=$N3;
      var $183=((($182)+($181))|0);
      $N3=$183;
      var $184=$K2;
      var $185=$Y1;
      var $186=$185 >>> (($184)>>>(0));
      $Y1=$186;
      var $187=$N3;
      var $188=$Y1;
      var $189=((($187)+($188))|0);
      $i=$189;
      var $190=$i;
      var $191=$2;
      var $192=(($191+304)|0);
      var $193=(($192+($190<<2))|0);
      var $194=HEAP32[(($193)>>2)];
      $t=$194;
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      var $198=$t;
      var $199=(($198)|(0))!=0;
      if ($199) { label = 30; break; } else { label = 36; break; }
    case 30: 
      var $201=$t;
      var $202=(($201+4)|0);
      var $203=HEAP32[(($202)>>2)];
      var $204=$203 & -8;
      var $205=$3;
      var $206=((($204)-($205))|0);
      $trem4=$206;
      var $207=$trem4;
      var $208=$rsize;
      var $209=(($207)>>>(0)) < (($208)>>>(0));
      if ($209) { label = 31; break; } else { label = 32; break; }
    case 31: 
      var $211=$trem4;
      $rsize=$211;
      var $212=$t;
      $v=$212;
      label = 32; break;
    case 32: 
      var $214=$t;
      var $215=(($214+16)|0);
      var $216=(($215)|0);
      var $217=HEAP32[(($216)>>2)];
      var $218=(($217)|(0))!=0;
      if ($218) { label = 33; break; } else { label = 34; break; }
    case 33: 
      var $220=$t;
      var $221=(($220+16)|0);
      var $222=(($221)|0);
      var $223=HEAP32[(($222)>>2)];
      var $230 = $223;label = 35; break;
    case 34: 
      var $225=$t;
      var $226=(($225+16)|0);
      var $227=(($226+4)|0);
      var $228=HEAP32[(($227)>>2)];
      var $230 = $228;label = 35; break;
    case 35: 
      var $230;
      $t=$230;
      label = 29; break;
    case 36: 
      var $232=$v;
      var $233=(($232)|(0))!=0;
      if ($233) { label = 37; break; } else { label = 129; break; }
    case 37: 
      var $235=$rsize;
      var $236=$2;
      var $237=(($236+8)|0);
      var $238=HEAP32[(($237)>>2)];
      var $239=$3;
      var $240=((($238)-($239))|0);
      var $241=(($235)>>>(0)) < (($240)>>>(0));
      if ($241) { label = 38; break; } else { label = 129; break; }
    case 38: 
      var $243=$v;
      var $244=$243;
      var $245=$2;
      var $246=(($245+16)|0);
      var $247=HEAP32[(($246)>>2)];
      var $248=(($244)>>>(0)) >= (($247)>>>(0));
      var $249=(($248)&(1));
      var $250=($249);
      var $251=(($250)|(0))!=0;
      if ($251) { label = 39; break; } else { label = 128; break; }
    case 39: 
      var $253=$v;
      var $254=$253;
      var $255=$3;
      var $256=(($254+$255)|0);
      var $257=$256;
      $r=$257;
      var $258=$v;
      var $259=$258;
      var $260=$r;
      var $261=$260;
      var $262=(($259)>>>(0)) < (($261)>>>(0));
      var $263=(($262)&(1));
      var $264=($263);
      var $265=(($264)|(0))!=0;
      if ($265) { label = 40; break; } else { label = 127; break; }
    case 40: 
      var $267=$v;
      var $268=(($267+24)|0);
      var $269=HEAP32[(($268)>>2)];
      $XP=$269;
      var $270=$v;
      var $271=(($270+12)|0);
      var $272=HEAP32[(($271)>>2)];
      var $273=$v;
      var $274=(($272)|(0))!=(($273)|(0));
      if ($274) { label = 41; break; } else { label = 48; break; }
    case 41: 
      var $276=$v;
      var $277=(($276+8)|0);
      var $278=HEAP32[(($277)>>2)];
      $F=$278;
      var $279=$v;
      var $280=(($279+12)|0);
      var $281=HEAP32[(($280)>>2)];
      $R=$281;
      var $282=$F;
      var $283=$282;
      var $284=$2;
      var $285=(($284+16)|0);
      var $286=HEAP32[(($285)>>2)];
      var $287=(($283)>>>(0)) >= (($286)>>>(0));
      if ($287) { label = 42; break; } else { var $301 = 0;label = 44; break; }
    case 42: 
      var $289=$F;
      var $290=(($289+12)|0);
      var $291=HEAP32[(($290)>>2)];
      var $292=$v;
      var $293=(($291)|(0))==(($292)|(0));
      if ($293) { label = 43; break; } else { var $301 = 0;label = 44; break; }
    case 43: 
      var $295=$R;
      var $296=(($295+8)|0);
      var $297=HEAP32[(($296)>>2)];
      var $298=$v;
      var $299=(($297)|(0))==(($298)|(0));
      var $301 = $299;label = 44; break;
    case 44: 
      var $301;
      var $302=(($301)&(1));
      var $303=($302);
      var $304=(($303)|(0))!=0;
      if ($304) { label = 45; break; } else { label = 46; break; }
    case 45: 
      var $306=$R;
      var $307=$F;
      var $308=(($307+12)|0);
      HEAP32[(($308)>>2)]=$306;
      var $309=$F;
      var $310=$R;
      var $311=(($310+8)|0);
      HEAP32[(($311)>>2)]=$309;
      label = 47; break;
    case 46: 
      _abort();
      throw "Reached an unreachable!";
    case 47: 
      label = 60; break;
    case 48: 
      var $315=$v;
      var $316=(($315+16)|0);
      var $317=(($316+4)|0);
      $RP=$317;
      var $318=HEAP32[(($317)>>2)];
      $R=$318;
      var $319=(($318)|(0))!=0;
      if ($319) { label = 50; break; } else { label = 49; break; }
    case 49: 
      var $321=$v;
      var $322=(($321+16)|0);
      var $323=(($322)|0);
      $RP=$323;
      var $324=HEAP32[(($323)>>2)];
      $R=$324;
      var $325=(($324)|(0))!=0;
      if ($325) { label = 50; break; } else { label = 59; break; }
    case 50: 
      label = 51; break;
    case 51: 
      var $328=$R;
      var $329=(($328+16)|0);
      var $330=(($329+4)|0);
      $CP=$330;
      var $331=HEAP32[(($330)>>2)];
      var $332=(($331)|(0))!=0;
      if ($332) { var $340 = 1;label = 53; break; } else { label = 52; break; }
    case 52: 
      var $334=$R;
      var $335=(($334+16)|0);
      var $336=(($335)|0);
      $CP=$336;
      var $337=HEAP32[(($336)>>2)];
      var $338=(($337)|(0))!=0;
      var $340 = $338;label = 53; break;
    case 53: 
      var $340;
      if ($340) { label = 54; break; } else { label = 55; break; }
    case 54: 
      var $342=$CP;
      $RP=$342;
      var $343=HEAP32[(($342)>>2)];
      $R=$343;
      label = 51; break;
    case 55: 
      var $345=$RP;
      var $346=$345;
      var $347=$2;
      var $348=(($347+16)|0);
      var $349=HEAP32[(($348)>>2)];
      var $350=(($346)>>>(0)) >= (($349)>>>(0));
      var $351=(($350)&(1));
      var $352=($351);
      var $353=(($352)|(0))!=0;
      if ($353) { label = 56; break; } else { label = 57; break; }
    case 56: 
      var $355=$RP;
      HEAP32[(($355)>>2)]=0;
      label = 58; break;
    case 57: 
      _abort();
      throw "Reached an unreachable!";
    case 58: 
      label = 59; break;
    case 59: 
      label = 60; break;
    case 60: 
      var $360=$XP;
      var $361=(($360)|(0))!=0;
      if ($361) { label = 61; break; } else { label = 88; break; }
    case 61: 
      var $363=$v;
      var $364=(($363+28)|0);
      var $365=HEAP32[(($364)>>2)];
      var $366=$2;
      var $367=(($366+304)|0);
      var $368=(($367+($365<<2))|0);
      $H=$368;
      var $369=$v;
      var $370=$H;
      var $371=HEAP32[(($370)>>2)];
      var $372=(($369)|(0))==(($371)|(0));
      if ($372) { label = 62; break; } else { label = 65; break; }
    case 62: 
      var $374=$R;
      var $375=$H;
      HEAP32[(($375)>>2)]=$374;
      var $376=(($374)|(0))==0;
      if ($376) { label = 63; break; } else { label = 64; break; }
    case 63: 
      var $378=$v;
      var $379=(($378+28)|0);
      var $380=HEAP32[(($379)>>2)];
      var $381=1 << $380;
      var $382=$381 ^ -1;
      var $383=$2;
      var $384=(($383+4)|0);
      var $385=HEAP32[(($384)>>2)];
      var $386=$385 & $382;
      HEAP32[(($384)>>2)]=$386;
      label = 64; break;
    case 64: 
      label = 72; break;
    case 65: 
      var $389=$XP;
      var $390=$389;
      var $391=$2;
      var $392=(($391+16)|0);
      var $393=HEAP32[(($392)>>2)];
      var $394=(($390)>>>(0)) >= (($393)>>>(0));
      var $395=(($394)&(1));
      var $396=($395);
      var $397=(($396)|(0))!=0;
      if ($397) { label = 66; break; } else { label = 70; break; }
    case 66: 
      var $399=$XP;
      var $400=(($399+16)|0);
      var $401=(($400)|0);
      var $402=HEAP32[(($401)>>2)];
      var $403=$v;
      var $404=(($402)|(0))==(($403)|(0));
      if ($404) { label = 67; break; } else { label = 68; break; }
    case 67: 
      var $406=$R;
      var $407=$XP;
      var $408=(($407+16)|0);
      var $409=(($408)|0);
      HEAP32[(($409)>>2)]=$406;
      label = 69; break;
    case 68: 
      var $411=$R;
      var $412=$XP;
      var $413=(($412+16)|0);
      var $414=(($413+4)|0);
      HEAP32[(($414)>>2)]=$411;
      label = 69; break;
    case 69: 
      label = 71; break;
    case 70: 
      _abort();
      throw "Reached an unreachable!";
    case 71: 
      label = 72; break;
    case 72: 
      var $419=$R;
      var $420=(($419)|(0))!=0;
      if ($420) { label = 73; break; } else { label = 87; break; }
    case 73: 
      var $422=$R;
      var $423=$422;
      var $424=$2;
      var $425=(($424+16)|0);
      var $426=HEAP32[(($425)>>2)];
      var $427=(($423)>>>(0)) >= (($426)>>>(0));
      var $428=(($427)&(1));
      var $429=($428);
      var $430=(($429)|(0))!=0;
      if ($430) { label = 74; break; } else { label = 85; break; }
    case 74: 
      var $432=$XP;
      var $433=$R;
      var $434=(($433+24)|0);
      HEAP32[(($434)>>2)]=$432;
      var $435=$v;
      var $436=(($435+16)|0);
      var $437=(($436)|0);
      var $438=HEAP32[(($437)>>2)];
      $C0=$438;
      var $439=(($438)|(0))!=0;
      if ($439) { label = 75; break; } else { label = 79; break; }
    case 75: 
      var $441=$C0;
      var $442=$441;
      var $443=$2;
      var $444=(($443+16)|0);
      var $445=HEAP32[(($444)>>2)];
      var $446=(($442)>>>(0)) >= (($445)>>>(0));
      var $447=(($446)&(1));
      var $448=($447);
      var $449=(($448)|(0))!=0;
      if ($449) { label = 76; break; } else { label = 77; break; }
    case 76: 
      var $451=$C0;
      var $452=$R;
      var $453=(($452+16)|0);
      var $454=(($453)|0);
      HEAP32[(($454)>>2)]=$451;
      var $455=$R;
      var $456=$C0;
      var $457=(($456+24)|0);
      HEAP32[(($457)>>2)]=$455;
      label = 78; break;
    case 77: 
      _abort();
      throw "Reached an unreachable!";
    case 78: 
      label = 79; break;
    case 79: 
      var $461=$v;
      var $462=(($461+16)|0);
      var $463=(($462+4)|0);
      var $464=HEAP32[(($463)>>2)];
      $C1=$464;
      var $465=(($464)|(0))!=0;
      if ($465) { label = 80; break; } else { label = 84; break; }
    case 80: 
      var $467=$C1;
      var $468=$467;
      var $469=$2;
      var $470=(($469+16)|0);
      var $471=HEAP32[(($470)>>2)];
      var $472=(($468)>>>(0)) >= (($471)>>>(0));
      var $473=(($472)&(1));
      var $474=($473);
      var $475=(($474)|(0))!=0;
      if ($475) { label = 81; break; } else { label = 82; break; }
    case 81: 
      var $477=$C1;
      var $478=$R;
      var $479=(($478+16)|0);
      var $480=(($479+4)|0);
      HEAP32[(($480)>>2)]=$477;
      var $481=$R;
      var $482=$C1;
      var $483=(($482+24)|0);
      HEAP32[(($483)>>2)]=$481;
      label = 83; break;
    case 82: 
      _abort();
      throw "Reached an unreachable!";
    case 83: 
      label = 84; break;
    case 84: 
      label = 86; break;
    case 85: 
      _abort();
      throw "Reached an unreachable!";
    case 86: 
      label = 87; break;
    case 87: 
      label = 88; break;
    case 88: 
      var $491=$rsize;
      var $492=(($491)>>>(0)) < 16;
      if ($492) { label = 89; break; } else { label = 90; break; }
    case 89: 
      var $494=$rsize;
      var $495=$3;
      var $496=((($494)+($495))|0);
      var $497=$496 | 1;
      var $498=$497 | 2;
      var $499=$v;
      var $500=(($499+4)|0);
      HEAP32[(($500)>>2)]=$498;
      var $501=$v;
      var $502=$501;
      var $503=$rsize;
      var $504=$3;
      var $505=((($503)+($504))|0);
      var $506=(($502+$505)|0);
      var $507=$506;
      var $508=(($507+4)|0);
      var $509=HEAP32[(($508)>>2)];
      var $510=$509 | 1;
      HEAP32[(($508)>>2)]=$510;
      label = 126; break;
    case 90: 
      var $512=$3;
      var $513=$512 | 1;
      var $514=$513 | 2;
      var $515=$v;
      var $516=(($515+4)|0);
      HEAP32[(($516)>>2)]=$514;
      var $517=$rsize;
      var $518=$517 | 1;
      var $519=$r;
      var $520=(($519+4)|0);
      HEAP32[(($520)>>2)]=$518;
      var $521=$rsize;
      var $522=$r;
      var $523=$522;
      var $524=$rsize;
      var $525=(($523+$524)|0);
      var $526=$525;
      var $527=(($526)|0);
      HEAP32[(($527)>>2)]=$521;
      var $528=$rsize;
      var $529=$528 >>> 3;
      var $530=(($529)>>>(0)) < 32;
      if ($530) { label = 91; break; } else { label = 98; break; }
    case 91: 
      var $532=$rsize;
      var $533=$532 >>> 3;
      $I=$533;
      var $534=$I;
      var $535=$534 << 1;
      var $536=$2;
      var $537=(($536+40)|0);
      var $538=(($537+($535<<2))|0);
      var $539=$538;
      var $540=$539;
      $B=$540;
      var $541=$B;
      $F5=$541;
      var $542=$2;
      var $543=(($542)|0);
      var $544=HEAP32[(($543)>>2)];
      var $545=$I;
      var $546=1 << $545;
      var $547=$544 & $546;
      var $548=(($547)|(0))!=0;
      if ($548) { label = 93; break; } else { label = 92; break; }
    case 92: 
      var $550=$I;
      var $551=1 << $550;
      var $552=$2;
      var $553=(($552)|0);
      var $554=HEAP32[(($553)>>2)];
      var $555=$554 | $551;
      HEAP32[(($553)>>2)]=$555;
      label = 97; break;
    case 93: 
      var $557=$B;
      var $558=(($557+8)|0);
      var $559=HEAP32[(($558)>>2)];
      var $560=$559;
      var $561=$2;
      var $562=(($561+16)|0);
      var $563=HEAP32[(($562)>>2)];
      var $564=(($560)>>>(0)) >= (($563)>>>(0));
      var $565=(($564)&(1));
      var $566=($565);
      var $567=(($566)|(0))!=0;
      if ($567) { label = 94; break; } else { label = 95; break; }
    case 94: 
      var $569=$B;
      var $570=(($569+8)|0);
      var $571=HEAP32[(($570)>>2)];
      $F5=$571;
      label = 96; break;
    case 95: 
      _abort();
      throw "Reached an unreachable!";
    case 96: 
      label = 97; break;
    case 97: 
      var $575=$r;
      var $576=$B;
      var $577=(($576+8)|0);
      HEAP32[(($577)>>2)]=$575;
      var $578=$r;
      var $579=$F5;
      var $580=(($579+12)|0);
      HEAP32[(($580)>>2)]=$578;
      var $581=$F5;
      var $582=$r;
      var $583=(($582+8)|0);
      HEAP32[(($583)>>2)]=$581;
      var $584=$B;
      var $585=$r;
      var $586=(($585+12)|0);
      HEAP32[(($586)>>2)]=$584;
      label = 125; break;
    case 98: 
      var $588=$r;
      var $589=$588;
      $TP=$589;
      var $590=$rsize;
      var $591=$590 >>> 8;
      $X8=$591;
      var $592=$X8;
      var $593=(($592)|(0))==0;
      if ($593) { label = 99; break; } else { label = 100; break; }
    case 99: 
      $I7=0;
      label = 104; break;
    case 100: 
      var $596=$X8;
      var $597=(($596)>>>(0)) > 65535;
      if ($597) { label = 101; break; } else { label = 102; break; }
    case 101: 
      $I7=31;
      label = 103; break;
    case 102: 
      var $600=$X8;
      $Y9=$600;
      var $601=$Y9;
      var $602=((($601)-(256))|0);
      var $603=$602 >>> 16;
      var $604=$603 & 8;
      $N10=$604;
      var $605=$N10;
      var $606=$Y9;
      var $607=$606 << $605;
      $Y9=$607;
      var $608=((($607)-(4096))|0);
      var $609=$608 >>> 16;
      var $610=$609 & 4;
      $K11=$610;
      var $611=$K11;
      var $612=$N10;
      var $613=((($612)+($611))|0);
      $N10=$613;
      var $614=$K11;
      var $615=$Y9;
      var $616=$615 << $614;
      $Y9=$616;
      var $617=((($616)-(16384))|0);
      var $618=$617 >>> 16;
      var $619=$618 & 2;
      $K11=$619;
      var $620=$N10;
      var $621=((($620)+($619))|0);
      $N10=$621;
      var $622=$N10;
      var $623=(((14)-($622))|0);
      var $624=$K11;
      var $625=$Y9;
      var $626=$625 << $624;
      $Y9=$626;
      var $627=$626 >>> 15;
      var $628=((($623)+($627))|0);
      $K11=$628;
      var $629=$K11;
      var $630=$629 << 1;
      var $631=$rsize;
      var $632=$K11;
      var $633=((($632)+(7))|0);
      var $634=$631 >>> (($633)>>>(0));
      var $635=$634 & 1;
      var $636=((($630)+($635))|0);
      $I7=$636;
      label = 103; break;
    case 103: 
      label = 104; break;
    case 104: 
      var $639=$I7;
      var $640=$2;
      var $641=(($640+304)|0);
      var $642=(($641+($639<<2))|0);
      $H6=$642;
      var $643=$I7;
      var $644=$TP;
      var $645=(($644+28)|0);
      HEAP32[(($645)>>2)]=$643;
      var $646=$TP;
      var $647=(($646+16)|0);
      var $648=(($647+4)|0);
      HEAP32[(($648)>>2)]=0;
      var $649=$TP;
      var $650=(($649+16)|0);
      var $651=(($650)|0);
      HEAP32[(($651)>>2)]=0;
      var $652=$2;
      var $653=(($652+4)|0);
      var $654=HEAP32[(($653)>>2)];
      var $655=$I7;
      var $656=1 << $655;
      var $657=$654 & $656;
      var $658=(($657)|(0))!=0;
      if ($658) { label = 106; break; } else { label = 105; break; }
    case 105: 
      var $660=$I7;
      var $661=1 << $660;
      var $662=$2;
      var $663=(($662+4)|0);
      var $664=HEAP32[(($663)>>2)];
      var $665=$664 | $661;
      HEAP32[(($663)>>2)]=$665;
      var $666=$TP;
      var $667=$H6;
      HEAP32[(($667)>>2)]=$666;
      var $668=$H6;
      var $669=$668;
      var $670=$TP;
      var $671=(($670+24)|0);
      HEAP32[(($671)>>2)]=$669;
      var $672=$TP;
      var $673=$TP;
      var $674=(($673+12)|0);
      HEAP32[(($674)>>2)]=$672;
      var $675=$TP;
      var $676=(($675+8)|0);
      HEAP32[(($676)>>2)]=$672;
      label = 124; break;
    case 106: 
      var $678=$H6;
      var $679=HEAP32[(($678)>>2)];
      $T=$679;
      var $680=$rsize;
      var $681=$I7;
      var $682=(($681)|(0))==31;
      if ($682) { label = 107; break; } else { label = 108; break; }
    case 107: 
      var $691 = 0;label = 109; break;
    case 108: 
      var $685=$I7;
      var $686=$685 >>> 1;
      var $687=((($686)+(8))|0);
      var $688=((($687)-(2))|0);
      var $689=(((31)-($688))|0);
      var $691 = $689;label = 109; break;
    case 109: 
      var $691;
      var $692=$680 << $691;
      $K12=$692;
      label = 110; break;
    case 110: 
      var $694=$T;
      var $695=(($694+4)|0);
      var $696=HEAP32[(($695)>>2)];
      var $697=$696 & -8;
      var $698=$rsize;
      var $699=(($697)|(0))!=(($698)|(0));
      if ($699) { label = 111; break; } else { label = 117; break; }
    case 111: 
      var $701=$K12;
      var $702=$701 >>> 31;
      var $703=$702 & 1;
      var $704=$T;
      var $705=(($704+16)|0);
      var $706=(($705+($703<<2))|0);
      $C=$706;
      var $707=$K12;
      var $708=$707 << 1;
      $K12=$708;
      var $709=$C;
      var $710=HEAP32[(($709)>>2)];
      var $711=(($710)|(0))!=0;
      if ($711) { label = 112; break; } else { label = 113; break; }
    case 112: 
      var $713=$C;
      var $714=HEAP32[(($713)>>2)];
      $T=$714;
      label = 116; break;
    case 113: 
      var $716=$C;
      var $717=$716;
      var $718=$2;
      var $719=(($718+16)|0);
      var $720=HEAP32[(($719)>>2)];
      var $721=(($717)>>>(0)) >= (($720)>>>(0));
      var $722=(($721)&(1));
      var $723=($722);
      var $724=(($723)|(0))!=0;
      if ($724) { label = 114; break; } else { label = 115; break; }
    case 114: 
      var $726=$TP;
      var $727=$C;
      HEAP32[(($727)>>2)]=$726;
      var $728=$T;
      var $729=$TP;
      var $730=(($729+24)|0);
      HEAP32[(($730)>>2)]=$728;
      var $731=$TP;
      var $732=$TP;
      var $733=(($732+12)|0);
      HEAP32[(($733)>>2)]=$731;
      var $734=$TP;
      var $735=(($734+8)|0);
      HEAP32[(($735)>>2)]=$731;
      label = 123; break;
    case 115: 
      _abort();
      throw "Reached an unreachable!";
    case 116: 
      label = 122; break;
    case 117: 
      var $739=$T;
      var $740=(($739+8)|0);
      var $741=HEAP32[(($740)>>2)];
      $F13=$741;
      var $742=$T;
      var $743=$742;
      var $744=$2;
      var $745=(($744+16)|0);
      var $746=HEAP32[(($745)>>2)];
      var $747=(($743)>>>(0)) >= (($746)>>>(0));
      if ($747) { label = 118; break; } else { var $756 = 0;label = 119; break; }
    case 118: 
      var $749=$F13;
      var $750=$749;
      var $751=$2;
      var $752=(($751+16)|0);
      var $753=HEAP32[(($752)>>2)];
      var $754=(($750)>>>(0)) >= (($753)>>>(0));
      var $756 = $754;label = 119; break;
    case 119: 
      var $756;
      var $757=(($756)&(1));
      var $758=($757);
      var $759=(($758)|(0))!=0;
      if ($759) { label = 120; break; } else { label = 121; break; }
    case 120: 
      var $761=$TP;
      var $762=$F13;
      var $763=(($762+12)|0);
      HEAP32[(($763)>>2)]=$761;
      var $764=$T;
      var $765=(($764+8)|0);
      HEAP32[(($765)>>2)]=$761;
      var $766=$F13;
      var $767=$TP;
      var $768=(($767+8)|0);
      HEAP32[(($768)>>2)]=$766;
      var $769=$T;
      var $770=$TP;
      var $771=(($770+12)|0);
      HEAP32[(($771)>>2)]=$769;
      var $772=$TP;
      var $773=(($772+24)|0);
      HEAP32[(($773)>>2)]=0;
      label = 123; break;
    case 121: 
      _abort();
      throw "Reached an unreachable!";
    case 122: 
      label = 110; break;
    case 123: 
      label = 124; break;
    case 124: 
      label = 125; break;
    case 125: 
      label = 126; break;
    case 126: 
      var $780=$v;
      var $781=$780;
      var $782=(($781+8)|0);
      $1=$782;
      label = 130; break;
    case 127: 
      label = 128; break;
    case 128: 
      _abort();
      throw "Reached an unreachable!";
    case 129: 
      $1=0;
      label = 130; break;
    case 130: 
      var $787=$1;
      return $787;
    default: assert(0, "bad label: " + label);
  }
}
function _sys_alloc($m, $nb) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $tbase;
      var $tsize;
      var $mmap_flag;
      var $asize;
      var $mem;
      var $fp;
      var $br;
      var $ssize;
      var $ss;
      var $base;
      var $fp1;
      var $esize;
      var $end;
      var $br2;
      var $end3;
      var $ssize4;
      var $mn;
      var $sp;
      var $oldbase;
      var $rsize;
      var $p;
      var $r;
      $2=$m;
      $3=$nb;
      $tbase=-1;
      $tsize=0;
      $mmap_flag=0;
      var $4=HEAP32[((((_mparams)|0))>>2)];
      var $5=(($4)|(0))!=0;
      if ($5) { var $10 = 1;label = 3; break; } else { label = 2; break; }
    case 2: 
      var $7=_init_mparams();
      var $8=(($7)|(0))!=0;
      var $10 = $8;label = 3; break;
    case 3: 
      var $10;
      var $11=(($10)&(1));
      var $12=$2;
      var $13=(($12+444)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=$14 & 0;
      var $16=(($15)|(0))!=0;
      if ($16) { label = 4; break; } else { label = 9; break; }
    case 4: 
      var $18=$3;
      var $19=HEAP32[((((_mparams+12)|0))>>2)];
      var $20=(($18)>>>(0)) >= (($19)>>>(0));
      if ($20) { label = 5; break; } else { label = 9; break; }
    case 5: 
      var $22=$2;
      var $23=(($22+12)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=(($24)|(0))!=0;
      if ($25) { label = 6; break; } else { label = 9; break; }
    case 6: 
      var $27=$2;
      var $28=$3;
      var $29=_mmap_alloc($27, $28);
      $mem=$29;
      var $30=$mem;
      var $31=(($30)|(0))!=0;
      if ($31) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $33=$mem;
      $1=$33;
      label = 103; break;
    case 8: 
      label = 9; break;
    case 9: 
      var $36=$3;
      var $37=((($36)+(48))|0);
      var $38=HEAP32[((((_mparams+8)|0))>>2)];
      var $39=((($38)-(1))|0);
      var $40=((($37)+($39))|0);
      var $41=HEAP32[((((_mparams+8)|0))>>2)];
      var $42=((($41)-(1))|0);
      var $43=$42 ^ -1;
      var $44=$40 & $43;
      $asize=$44;
      var $45=$asize;
      var $46=$3;
      var $47=(($45)>>>(0)) <= (($46)>>>(0));
      if ($47) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=0;
      label = 103; break;
    case 11: 
      var $50=$2;
      var $51=(($50+440)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=(($52)|(0))!=0;
      if ($53) { label = 12; break; } else { label = 16; break; }
    case 12: 
      var $55=$2;
      var $56=(($55+432)|0);
      var $57=HEAP32[(($56)>>2)];
      var $58=$asize;
      var $59=((($57)+($58))|0);
      $fp=$59;
      var $60=$fp;
      var $61=$2;
      var $62=(($61+432)|0);
      var $63=HEAP32[(($62)>>2)];
      var $64=(($60)>>>(0)) <= (($63)>>>(0));
      if ($64) { label = 14; break; } else { label = 13; break; }
    case 13: 
      var $66=$fp;
      var $67=$2;
      var $68=(($67+440)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=(($66)>>>(0)) > (($69)>>>(0));
      if ($70) { label = 14; break; } else { label = 15; break; }
    case 14: 
      $1=0;
      label = 103; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $74=$2;
      var $75=(($74+444)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=$76 & 4;
      var $78=(($77)|(0))!=0;
      if ($78) { label = 53; break; } else { label = 17; break; }
    case 17: 
      $br=-1;
      var $80=$asize;
      $ssize=$80;
      var $81=$2;
      var $82=(($81+24)|0);
      var $83=HEAP32[(($82)>>2)];
      var $84=(($83)|(0))==0;
      if ($84) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $94 = 0;label = 20; break;
    case 19: 
      var $87=$2;
      var $88=$2;
      var $89=(($88+24)|0);
      var $90=HEAP32[(($89)>>2)];
      var $91=$90;
      var $92=_segment_holding($87, $91);
      var $94 = $92;label = 20; break;
    case 20: 
      var $94;
      $ss=$94;
      var $95=$ss;
      var $96=(($95)|(0))==0;
      if ($96) { label = 21; break; } else { label = 33; break; }
    case 21: 
      var $98=_sbrk(0);
      $base=$98;
      var $99=$base;
      var $100=(($99)|(0))!=-1;
      if ($100) { label = 22; break; } else { label = 32; break; }
    case 22: 
      var $102=$base;
      var $103=$102;
      var $104=HEAP32[((((_mparams+4)|0))>>2)];
      var $105=((($104)-(1))|0);
      var $106=$103 & $105;
      var $107=(($106)|(0))==0;
      if ($107) { label = 24; break; } else { label = 23; break; }
    case 23: 
      var $109=$base;
      var $110=$109;
      var $111=HEAP32[((((_mparams+4)|0))>>2)];
      var $112=((($111)-(1))|0);
      var $113=((($110)+($112))|0);
      var $114=HEAP32[((((_mparams+4)|0))>>2)];
      var $115=((($114)-(1))|0);
      var $116=$115 ^ -1;
      var $117=$113 & $116;
      var $118=$base;
      var $119=$118;
      var $120=((($117)-($119))|0);
      var $121=$ssize;
      var $122=((($121)+($120))|0);
      $ssize=$122;
      label = 24; break;
    case 24: 
      var $124=$2;
      var $125=(($124+432)|0);
      var $126=HEAP32[(($125)>>2)];
      var $127=$ssize;
      var $128=((($126)+($127))|0);
      $fp1=$128;
      var $129=$ssize;
      var $130=$3;
      var $131=(($129)>>>(0)) > (($130)>>>(0));
      if ($131) { label = 25; break; } else { label = 31; break; }
    case 25: 
      var $133=$ssize;
      var $134=(($133)>>>(0)) < 2147483647;
      if ($134) { label = 26; break; } else { label = 31; break; }
    case 26: 
      var $136=$2;
      var $137=(($136+440)|0);
      var $138=HEAP32[(($137)>>2)];
      var $139=(($138)|(0))==0;
      if ($139) { label = 29; break; } else { label = 27; break; }
    case 27: 
      var $141=$fp1;
      var $142=$2;
      var $143=(($142+432)|0);
      var $144=HEAP32[(($143)>>2)];
      var $145=(($141)>>>(0)) > (($144)>>>(0));
      if ($145) { label = 28; break; } else { label = 31; break; }
    case 28: 
      var $147=$fp1;
      var $148=$2;
      var $149=(($148+440)|0);
      var $150=HEAP32[(($149)>>2)];
      var $151=(($147)>>>(0)) <= (($150)>>>(0));
      if ($151) { label = 29; break; } else { label = 31; break; }
    case 29: 
      var $153=$ssize;
      var $154=_sbrk($153);
      $br=$154;
      var $155=$base;
      var $156=(($154)|(0))==(($155)|(0));
      if ($156) { label = 30; break; } else { label = 31; break; }
    case 30: 
      var $158=$base;
      $tbase=$158;
      var $159=$ssize;
      $tsize=$159;
      label = 31; break;
    case 31: 
      label = 32; break;
    case 32: 
      label = 37; break;
    case 33: 
      var $163=$3;
      var $164=$2;
      var $165=(($164+12)|0);
      var $166=HEAP32[(($165)>>2)];
      var $167=((($163)-($166))|0);
      var $168=((($167)+(48))|0);
      var $169=HEAP32[((((_mparams+8)|0))>>2)];
      var $170=((($169)-(1))|0);
      var $171=((($168)+($170))|0);
      var $172=HEAP32[((((_mparams+8)|0))>>2)];
      var $173=((($172)-(1))|0);
      var $174=$173 ^ -1;
      var $175=$171 & $174;
      $ssize=$175;
      var $176=$ssize;
      var $177=(($176)>>>(0)) < 2147483647;
      if ($177) { label = 34; break; } else { label = 36; break; }
    case 34: 
      var $179=$ssize;
      var $180=_sbrk($179);
      $br=$180;
      var $181=$ss;
      var $182=(($181)|0);
      var $183=HEAP32[(($182)>>2)];
      var $184=$ss;
      var $185=(($184+4)|0);
      var $186=HEAP32[(($185)>>2)];
      var $187=(($183+$186)|0);
      var $188=(($180)|(0))==(($187)|(0));
      if ($188) { label = 35; break; } else { label = 36; break; }
    case 35: 
      var $190=$br;
      $tbase=$190;
      var $191=$ssize;
      $tsize=$191;
      label = 36; break;
    case 36: 
      label = 37; break;
    case 37: 
      var $194=$tbase;
      var $195=(($194)|(0))==-1;
      if ($195) { label = 38; break; } else { label = 52; break; }
    case 38: 
      var $197=$br;
      var $198=(($197)|(0))!=-1;
      if ($198) { label = 39; break; } else { label = 48; break; }
    case 39: 
      var $200=$ssize;
      var $201=(($200)>>>(0)) < 2147483647;
      if ($201) { label = 40; break; } else { label = 47; break; }
    case 40: 
      var $203=$ssize;
      var $204=$3;
      var $205=((($204)+(48))|0);
      var $206=(($203)>>>(0)) < (($205)>>>(0));
      if ($206) { label = 41; break; } else { label = 47; break; }
    case 41: 
      var $208=$3;
      var $209=((($208)+(48))|0);
      var $210=$ssize;
      var $211=((($209)-($210))|0);
      var $212=HEAP32[((((_mparams+8)|0))>>2)];
      var $213=((($212)-(1))|0);
      var $214=((($211)+($213))|0);
      var $215=HEAP32[((((_mparams+8)|0))>>2)];
      var $216=((($215)-(1))|0);
      var $217=$216 ^ -1;
      var $218=$214 & $217;
      $esize=$218;
      var $219=$esize;
      var $220=(($219)>>>(0)) < 2147483647;
      if ($220) { label = 42; break; } else { label = 46; break; }
    case 42: 
      var $222=$esize;
      var $223=_sbrk($222);
      $end=$223;
      var $224=$end;
      var $225=(($224)|(0))!=-1;
      if ($225) { label = 43; break; } else { label = 44; break; }
    case 43: 
      var $227=$esize;
      var $228=$ssize;
      var $229=((($228)+($227))|0);
      $ssize=$229;
      label = 45; break;
    case 44: 
      var $231=$ssize;
      var $232=(((-$231))|0);
      var $233=_sbrk($232);
      $br=-1;
      label = 45; break;
    case 45: 
      label = 46; break;
    case 46: 
      label = 47; break;
    case 47: 
      label = 48; break;
    case 48: 
      var $238=$br;
      var $239=(($238)|(0))!=-1;
      if ($239) { label = 49; break; } else { label = 50; break; }
    case 49: 
      var $241=$br;
      $tbase=$241;
      var $242=$ssize;
      $tsize=$242;
      label = 51; break;
    case 50: 
      var $244=$2;
      var $245=(($244+444)|0);
      var $246=HEAP32[(($245)>>2)];
      var $247=$246 | 4;
      HEAP32[(($245)>>2)]=$247;
      label = 51; break;
    case 51: 
      label = 52; break;
    case 52: 
      label = 53; break;
    case 53: 
      var $251=$tbase;
      var $252=(($251)|(0))==-1;
      if ($252) { label = 54; break; } else { label = 63; break; }
    case 54: 
      var $254=$asize;
      var $255=(($254)>>>(0)) < 2147483647;
      if ($255) { label = 55; break; } else { label = 62; break; }
    case 55: 
      $br2=-1;
      $end3=-1;
      var $257=$asize;
      var $258=_sbrk($257);
      $br2=$258;
      var $259=_sbrk(0);
      $end3=$259;
      var $260=$br2;
      var $261=(($260)|(0))!=-1;
      if ($261) { label = 56; break; } else { label = 61; break; }
    case 56: 
      var $263=$end3;
      var $264=(($263)|(0))!=-1;
      if ($264) { label = 57; break; } else { label = 61; break; }
    case 57: 
      var $266=$br2;
      var $267=$end3;
      var $268=(($266)>>>(0)) < (($267)>>>(0));
      if ($268) { label = 58; break; } else { label = 61; break; }
    case 58: 
      var $270=$end3;
      var $271=$br2;
      var $272=$270;
      var $273=$271;
      var $274=((($272)-($273))|0);
      $ssize4=$274;
      var $275=$ssize4;
      var $276=$3;
      var $277=((($276)+(40))|0);
      var $278=(($275)>>>(0)) > (($277)>>>(0));
      if ($278) { label = 59; break; } else { label = 60; break; }
    case 59: 
      var $280=$br2;
      $tbase=$280;
      var $281=$ssize4;
      $tsize=$281;
      label = 60; break;
    case 60: 
      label = 61; break;
    case 61: 
      label = 62; break;
    case 62: 
      label = 63; break;
    case 63: 
      var $286=$tbase;
      var $287=(($286)|(0))!=-1;
      if ($287) { label = 64; break; } else { label = 102; break; }
    case 64: 
      var $289=$tsize;
      var $290=$2;
      var $291=(($290+432)|0);
      var $292=HEAP32[(($291)>>2)];
      var $293=((($292)+($289))|0);
      HEAP32[(($291)>>2)]=$293;
      var $294=$2;
      var $295=(($294+436)|0);
      var $296=HEAP32[(($295)>>2)];
      var $297=(($293)>>>(0)) > (($296)>>>(0));
      if ($297) { label = 65; break; } else { label = 66; break; }
    case 65: 
      var $299=$2;
      var $300=(($299+432)|0);
      var $301=HEAP32[(($300)>>2)];
      var $302=$2;
      var $303=(($302+436)|0);
      HEAP32[(($303)>>2)]=$301;
      label = 66; break;
    case 66: 
      var $305=$2;
      var $306=(($305+24)|0);
      var $307=HEAP32[(($306)>>2)];
      var $308=(($307)|(0))!=0;
      if ($308) { label = 74; break; } else { label = 67; break; }
    case 67: 
      var $310=$2;
      var $311=(($310+16)|0);
      var $312=HEAP32[(($311)>>2)];
      var $313=(($312)|(0))==0;
      if ($313) { label = 69; break; } else { label = 68; break; }
    case 68: 
      var $315=$tbase;
      var $316=$2;
      var $317=(($316+16)|0);
      var $318=HEAP32[(($317)>>2)];
      var $319=(($315)>>>(0)) < (($318)>>>(0));
      if ($319) { label = 69; break; } else { label = 70; break; }
    case 69: 
      var $321=$tbase;
      var $322=$2;
      var $323=(($322+16)|0);
      HEAP32[(($323)>>2)]=$321;
      label = 70; break;
    case 70: 
      var $325=$tbase;
      var $326=$2;
      var $327=(($326+448)|0);
      var $328=(($327)|0);
      HEAP32[(($328)>>2)]=$325;
      var $329=$tsize;
      var $330=$2;
      var $331=(($330+448)|0);
      var $332=(($331+4)|0);
      HEAP32[(($332)>>2)]=$329;
      var $333=$mmap_flag;
      var $334=$2;
      var $335=(($334+448)|0);
      var $336=(($335+12)|0);
      HEAP32[(($336)>>2)]=$333;
      var $337=HEAP32[((((_mparams)|0))>>2)];
      var $338=$2;
      var $339=(($338+36)|0);
      HEAP32[(($339)>>2)]=$337;
      var $340=$2;
      var $341=(($340+32)|0);
      HEAP32[(($341)>>2)]=-1;
      var $342=$2;
      _init_bins($342);
      var $343=$2;
      var $344=(($343)|(0))==((__gm_)|(0));
      if ($344) { label = 71; break; } else { label = 72; break; }
    case 71: 
      var $346=$2;
      var $347=$tbase;
      var $348=$347;
      var $349=$tsize;
      var $350=((($349)-(40))|0);
      _init_top($346, $348, $350);
      label = 73; break;
    case 72: 
      var $352=$2;
      var $353=$352;
      var $354=((($353)-(8))|0);
      var $355=$354;
      var $356=$355;
      var $357=$2;
      var $358=$357;
      var $359=((($358)-(8))|0);
      var $360=$359;
      var $361=(($360+4)|0);
      var $362=HEAP32[(($361)>>2)];
      var $363=$362 & -8;
      var $364=(($356+$363)|0);
      var $365=$364;
      $mn=$365;
      var $366=$2;
      var $367=$mn;
      var $368=$tbase;
      var $369=$tsize;
      var $370=(($368+$369)|0);
      var $371=$mn;
      var $372=$371;
      var $373=$370;
      var $374=$372;
      var $375=((($373)-($374))|0);
      var $376=((($375)-(40))|0);
      _init_top($366, $367, $376);
      label = 73; break;
    case 73: 
      label = 99; break;
    case 74: 
      var $379=$2;
      var $380=(($379+448)|0);
      $sp=$380;
      label = 75; break;
    case 75: 
      var $382=$sp;
      var $383=(($382)|(0))!=0;
      if ($383) { label = 76; break; } else { var $395 = 0;label = 77; break; }
    case 76: 
      var $385=$tbase;
      var $386=$sp;
      var $387=(($386)|0);
      var $388=HEAP32[(($387)>>2)];
      var $389=$sp;
      var $390=(($389+4)|0);
      var $391=HEAP32[(($390)>>2)];
      var $392=(($388+$391)|0);
      var $393=(($385)|(0))!=(($392)|(0));
      var $395 = $393;label = 77; break;
    case 77: 
      var $395;
      if ($395) { label = 78; break; } else { label = 79; break; }
    case 78: 
      var $397=$sp;
      var $398=(($397+8)|0);
      var $399=HEAP32[(($398)>>2)];
      $sp=$399;
      label = 75; break;
    case 79: 
      var $401=$sp;
      var $402=(($401)|(0))!=0;
      if ($402) { label = 80; break; } else { label = 85; break; }
    case 80: 
      var $404=$sp;
      var $405=(($404+12)|0);
      var $406=HEAP32[(($405)>>2)];
      var $407=$406 & 8;
      var $408=(($407)|(0))!=0;
      if ($408) { label = 85; break; } else { label = 81; break; }
    case 81: 
      var $410=$sp;
      var $411=(($410+12)|0);
      var $412=HEAP32[(($411)>>2)];
      var $413=$412 & 0;
      var $414=$mmap_flag;
      var $415=(($413)|(0))==(($414)|(0));
      if ($415) { label = 82; break; } else { label = 85; break; }
    case 82: 
      var $417=$2;
      var $418=(($417+24)|0);
      var $419=HEAP32[(($418)>>2)];
      var $420=$419;
      var $421=$sp;
      var $422=(($421)|0);
      var $423=HEAP32[(($422)>>2)];
      var $424=(($420)>>>(0)) >= (($423)>>>(0));
      if ($424) { label = 83; break; } else { label = 85; break; }
    case 83: 
      var $426=$2;
      var $427=(($426+24)|0);
      var $428=HEAP32[(($427)>>2)];
      var $429=$428;
      var $430=$sp;
      var $431=(($430)|0);
      var $432=HEAP32[(($431)>>2)];
      var $433=$sp;
      var $434=(($433+4)|0);
      var $435=HEAP32[(($434)>>2)];
      var $436=(($432+$435)|0);
      var $437=(($429)>>>(0)) < (($436)>>>(0));
      if ($437) { label = 84; break; } else { label = 85; break; }
    case 84: 
      var $439=$tsize;
      var $440=$sp;
      var $441=(($440+4)|0);
      var $442=HEAP32[(($441)>>2)];
      var $443=((($442)+($439))|0);
      HEAP32[(($441)>>2)]=$443;
      var $444=$2;
      var $445=$2;
      var $446=(($445+24)|0);
      var $447=HEAP32[(($446)>>2)];
      var $448=$2;
      var $449=(($448+12)|0);
      var $450=HEAP32[(($449)>>2)];
      var $451=$tsize;
      var $452=((($450)+($451))|0);
      _init_top($444, $447, $452);
      label = 98; break;
    case 85: 
      var $454=$tbase;
      var $455=$2;
      var $456=(($455+16)|0);
      var $457=HEAP32[(($456)>>2)];
      var $458=(($454)>>>(0)) < (($457)>>>(0));
      if ($458) { label = 86; break; } else { label = 87; break; }
    case 86: 
      var $460=$tbase;
      var $461=$2;
      var $462=(($461+16)|0);
      HEAP32[(($462)>>2)]=$460;
      label = 87; break;
    case 87: 
      var $464=$2;
      var $465=(($464+448)|0);
      $sp=$465;
      label = 88; break;
    case 88: 
      var $467=$sp;
      var $468=(($467)|(0))!=0;
      if ($468) { label = 89; break; } else { var $478 = 0;label = 90; break; }
    case 89: 
      var $470=$sp;
      var $471=(($470)|0);
      var $472=HEAP32[(($471)>>2)];
      var $473=$tbase;
      var $474=$tsize;
      var $475=(($473+$474)|0);
      var $476=(($472)|(0))!=(($475)|(0));
      var $478 = $476;label = 90; break;
    case 90: 
      var $478;
      if ($478) { label = 91; break; } else { label = 92; break; }
    case 91: 
      var $480=$sp;
      var $481=(($480+8)|0);
      var $482=HEAP32[(($481)>>2)];
      $sp=$482;
      label = 88; break;
    case 92: 
      var $484=$sp;
      var $485=(($484)|(0))!=0;
      if ($485) { label = 93; break; } else { label = 96; break; }
    case 93: 
      var $487=$sp;
      var $488=(($487+12)|0);
      var $489=HEAP32[(($488)>>2)];
      var $490=$489 & 8;
      var $491=(($490)|(0))!=0;
      if ($491) { label = 96; break; } else { label = 94; break; }
    case 94: 
      var $493=$sp;
      var $494=(($493+12)|0);
      var $495=HEAP32[(($494)>>2)];
      var $496=$495 & 0;
      var $497=$mmap_flag;
      var $498=(($496)|(0))==(($497)|(0));
      if ($498) { label = 95; break; } else { label = 96; break; }
    case 95: 
      var $500=$sp;
      var $501=(($500)|0);
      var $502=HEAP32[(($501)>>2)];
      $oldbase=$502;
      var $503=$tbase;
      var $504=$sp;
      var $505=(($504)|0);
      HEAP32[(($505)>>2)]=$503;
      var $506=$tsize;
      var $507=$sp;
      var $508=(($507+4)|0);
      var $509=HEAP32[(($508)>>2)];
      var $510=((($509)+($506))|0);
      HEAP32[(($508)>>2)]=$510;
      var $511=$2;
      var $512=$tbase;
      var $513=$oldbase;
      var $514=$3;
      var $515=_prepend_alloc($511, $512, $513, $514);
      $1=$515;
      label = 103; break;
    case 96: 
      var $517=$2;
      var $518=$tbase;
      var $519=$tsize;
      var $520=$mmap_flag;
      _add_segment($517, $518, $519, $520);
      label = 97; break;
    case 97: 
      label = 98; break;
    case 98: 
      label = 99; break;
    case 99: 
      var $524=$3;
      var $525=$2;
      var $526=(($525+12)|0);
      var $527=HEAP32[(($526)>>2)];
      var $528=(($524)>>>(0)) < (($527)>>>(0));
      if ($528) { label = 100; break; } else { label = 101; break; }
    case 100: 
      var $530=$3;
      var $531=$2;
      var $532=(($531+12)|0);
      var $533=HEAP32[(($532)>>2)];
      var $534=((($533)-($530))|0);
      HEAP32[(($532)>>2)]=$534;
      $rsize=$534;
      var $535=$2;
      var $536=(($535+24)|0);
      var $537=HEAP32[(($536)>>2)];
      $p=$537;
      var $538=$p;
      var $539=$538;
      var $540=$3;
      var $541=(($539+$540)|0);
      var $542=$541;
      var $543=$2;
      var $544=(($543+24)|0);
      HEAP32[(($544)>>2)]=$542;
      $r=$542;
      var $545=$rsize;
      var $546=$545 | 1;
      var $547=$r;
      var $548=(($547+4)|0);
      HEAP32[(($548)>>2)]=$546;
      var $549=$3;
      var $550=$549 | 1;
      var $551=$550 | 2;
      var $552=$p;
      var $553=(($552+4)|0);
      HEAP32[(($553)>>2)]=$551;
      var $554=$p;
      var $555=$554;
      var $556=(($555+8)|0);
      $1=$556;
      label = 103; break;
    case 101: 
      label = 102; break;
    case 102: 
      var $559=___errno_location();
      HEAP32[(($559)>>2)]=12;
      $1=0;
      label = 103; break;
    case 103: 
      var $561=$1;
      return $561;
    default: assert(0, "bad label: " + label);
  }
}
function _free($mem) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $p;
      var $psize;
      var $next;
      var $prevsize;
      var $prev;
      var $F;
      var $B;
      var $I;
      var $TP;
      var $XP;
      var $R;
      var $F1;
      var $RP;
      var $CP;
      var $H;
      var $C0;
      var $C1;
      var $tsize;
      var $dsize;
      var $nsize;
      var $F2;
      var $B3;
      var $I4;
      var $TP5;
      var $XP6;
      var $R7;
      var $F8;
      var $RP9;
      var $CP10;
      var $H11;
      var $C012;
      var $C113;
      var $I14;
      var $B15;
      var $F16;
      var $tp;
      var $H17;
      var $I18;
      var $X;
      var $Y;
      var $N;
      var $K;
      var $T;
      var $K19;
      var $C;
      var $F20;
      $1=$mem;
      var $2=$1;
      var $3=(($2)|(0))!=0;
      if ($3) { label = 2; break; } else { label = 214; break; }
    case 2: 
      var $5=$1;
      var $6=((($5)-(8))|0);
      var $7=$6;
      $p=$7;
      var $8=$p;
      var $9=$8;
      var $10=HEAP32[((((__gm_+16)|0))>>2)];
      var $11=(($9)>>>(0)) >= (($10)>>>(0));
      if ($11) { label = 3; break; } else { var $19 = 0;label = 4; break; }
    case 3: 
      var $13=$p;
      var $14=(($13+4)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=$15 & 3;
      var $17=(($16)|(0))!=1;
      var $19 = $17;label = 4; break;
    case 4: 
      var $19;
      var $20=(($19)&(1));
      var $21=($20);
      var $22=(($21)|(0))!=0;
      if ($22) { label = 5; break; } else { label = 211; break; }
    case 5: 
      var $24=$p;
      var $25=(($24+4)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=$26 & -8;
      $psize=$27;
      var $28=$p;
      var $29=$28;
      var $30=$psize;
      var $31=(($29+$30)|0);
      var $32=$31;
      $next=$32;
      var $33=$p;
      var $34=(($33+4)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=$35 & 1;
      var $37=(($36)|(0))!=0;
      if ($37) { label = 86; break; } else { label = 6; break; }
    case 6: 
      var $39=$p;
      var $40=(($39)|0);
      var $41=HEAP32[(($40)>>2)];
      $prevsize=$41;
      var $42=$p;
      var $43=(($42+4)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=$44 & 3;
      var $46=(($45)|(0))==0;
      if ($46) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $48=$prevsize;
      var $49=((($48)+(16))|0);
      var $50=$psize;
      var $51=((($50)+($49))|0);
      $psize=$51;
      label = 213; break;
    case 8: 
      var $53=$p;
      var $54=$53;
      var $55=$prevsize;
      var $56=(((-$55))|0);
      var $57=(($54+$56)|0);
      var $58=$57;
      $prev=$58;
      var $59=$prevsize;
      var $60=$psize;
      var $61=((($60)+($59))|0);
      $psize=$61;
      var $62=$prev;
      $p=$62;
      var $63=$prev;
      var $64=$63;
      var $65=HEAP32[((((__gm_+16)|0))>>2)];
      var $66=(($64)>>>(0)) >= (($65)>>>(0));
      var $67=(($66)&(1));
      var $68=($67);
      var $69=(($68)|(0))!=0;
      if ($69) { label = 9; break; } else { label = 83; break; }
    case 9: 
      var $71=$p;
      var $72=HEAP32[((((__gm_+20)|0))>>2)];
      var $73=(($71)|(0))!=(($72)|(0));
      if ($73) { label = 10; break; } else { label = 79; break; }
    case 10: 
      var $75=$prevsize;
      var $76=$75 >>> 3;
      var $77=(($76)>>>(0)) < 32;
      if ($77) { label = 11; break; } else { label = 29; break; }
    case 11: 
      var $79=$p;
      var $80=(($79+8)|0);
      var $81=HEAP32[(($80)>>2)];
      $F=$81;
      var $82=$p;
      var $83=(($82+12)|0);
      var $84=HEAP32[(($83)>>2)];
      $B=$84;
      var $85=$prevsize;
      var $86=$85 >>> 3;
      $I=$86;
      var $87=$F;
      var $88=$I;
      var $89=$88 << 1;
      var $90=((((__gm_+40)|0)+($89<<2))|0);
      var $91=$90;
      var $92=$91;
      var $93=(($87)|(0))==(($92)|(0));
      if ($93) { var $108 = 1;label = 15; break; } else { label = 12; break; }
    case 12: 
      var $95=$F;
      var $96=$95;
      var $97=HEAP32[((((__gm_+16)|0))>>2)];
      var $98=(($96)>>>(0)) >= (($97)>>>(0));
      if ($98) { label = 13; break; } else { var $106 = 0;label = 14; break; }
    case 13: 
      var $100=$F;
      var $101=(($100+12)|0);
      var $102=HEAP32[(($101)>>2)];
      var $103=$p;
      var $104=(($102)|(0))==(($103)|(0));
      var $106 = $104;label = 14; break;
    case 14: 
      var $106;
      var $108 = $106;label = 15; break;
    case 15: 
      var $108;
      var $109=(($108)&(1));
      var $110=($109);
      var $111=(($110)|(0))!=0;
      if ($111) { label = 16; break; } else { label = 27; break; }
    case 16: 
      var $113=$B;
      var $114=$F;
      var $115=(($113)|(0))==(($114)|(0));
      if ($115) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $117=$I;
      var $118=1 << $117;
      var $119=$118 ^ -1;
      var $120=HEAP32[((((__gm_)|0))>>2)];
      var $121=$120 & $119;
      HEAP32[((((__gm_)|0))>>2)]=$121;
      label = 26; break;
    case 18: 
      var $123=$B;
      var $124=$I;
      var $125=$124 << 1;
      var $126=((((__gm_+40)|0)+($125<<2))|0);
      var $127=$126;
      var $128=$127;
      var $129=(($123)|(0))==(($128)|(0));
      if ($129) { var $144 = 1;label = 22; break; } else { label = 19; break; }
    case 19: 
      var $131=$B;
      var $132=$131;
      var $133=HEAP32[((((__gm_+16)|0))>>2)];
      var $134=(($132)>>>(0)) >= (($133)>>>(0));
      if ($134) { label = 20; break; } else { var $142 = 0;label = 21; break; }
    case 20: 
      var $136=$B;
      var $137=(($136+8)|0);
      var $138=HEAP32[(($137)>>2)];
      var $139=$p;
      var $140=(($138)|(0))==(($139)|(0));
      var $142 = $140;label = 21; break;
    case 21: 
      var $142;
      var $144 = $142;label = 22; break;
    case 22: 
      var $144;
      var $145=(($144)&(1));
      var $146=($145);
      var $147=(($146)|(0))!=0;
      if ($147) { label = 23; break; } else { label = 24; break; }
    case 23: 
      var $149=$B;
      var $150=$F;
      var $151=(($150+12)|0);
      HEAP32[(($151)>>2)]=$149;
      var $152=$F;
      var $153=$B;
      var $154=(($153+8)|0);
      HEAP32[(($154)>>2)]=$152;
      label = 25; break;
    case 24: 
      _abort();
      throw "Reached an unreachable!";
    case 25: 
      label = 26; break;
    case 26: 
      label = 28; break;
    case 27: 
      _abort();
      throw "Reached an unreachable!";
    case 28: 
      label = 78; break;
    case 29: 
      var $161=$p;
      var $162=$161;
      $TP=$162;
      var $163=$TP;
      var $164=(($163+24)|0);
      var $165=HEAP32[(($164)>>2)];
      $XP=$165;
      var $166=$TP;
      var $167=(($166+12)|0);
      var $168=HEAP32[(($167)>>2)];
      var $169=$TP;
      var $170=(($168)|(0))!=(($169)|(0));
      if ($170) { label = 30; break; } else { label = 37; break; }
    case 30: 
      var $172=$TP;
      var $173=(($172+8)|0);
      var $174=HEAP32[(($173)>>2)];
      $F1=$174;
      var $175=$TP;
      var $176=(($175+12)|0);
      var $177=HEAP32[(($176)>>2)];
      $R=$177;
      var $178=$F1;
      var $179=$178;
      var $180=HEAP32[((((__gm_+16)|0))>>2)];
      var $181=(($179)>>>(0)) >= (($180)>>>(0));
      if ($181) { label = 31; break; } else { var $195 = 0;label = 33; break; }
    case 31: 
      var $183=$F1;
      var $184=(($183+12)|0);
      var $185=HEAP32[(($184)>>2)];
      var $186=$TP;
      var $187=(($185)|(0))==(($186)|(0));
      if ($187) { label = 32; break; } else { var $195 = 0;label = 33; break; }
    case 32: 
      var $189=$R;
      var $190=(($189+8)|0);
      var $191=HEAP32[(($190)>>2)];
      var $192=$TP;
      var $193=(($191)|(0))==(($192)|(0));
      var $195 = $193;label = 33; break;
    case 33: 
      var $195;
      var $196=(($195)&(1));
      var $197=($196);
      var $198=(($197)|(0))!=0;
      if ($198) { label = 34; break; } else { label = 35; break; }
    case 34: 
      var $200=$R;
      var $201=$F1;
      var $202=(($201+12)|0);
      HEAP32[(($202)>>2)]=$200;
      var $203=$F1;
      var $204=$R;
      var $205=(($204+8)|0);
      HEAP32[(($205)>>2)]=$203;
      label = 36; break;
    case 35: 
      _abort();
      throw "Reached an unreachable!";
    case 36: 
      label = 49; break;
    case 37: 
      var $209=$TP;
      var $210=(($209+16)|0);
      var $211=(($210+4)|0);
      $RP=$211;
      var $212=HEAP32[(($211)>>2)];
      $R=$212;
      var $213=(($212)|(0))!=0;
      if ($213) { label = 39; break; } else { label = 38; break; }
    case 38: 
      var $215=$TP;
      var $216=(($215+16)|0);
      var $217=(($216)|0);
      $RP=$217;
      var $218=HEAP32[(($217)>>2)];
      $R=$218;
      var $219=(($218)|(0))!=0;
      if ($219) { label = 39; break; } else { label = 48; break; }
    case 39: 
      label = 40; break;
    case 40: 
      var $222=$R;
      var $223=(($222+16)|0);
      var $224=(($223+4)|0);
      $CP=$224;
      var $225=HEAP32[(($224)>>2)];
      var $226=(($225)|(0))!=0;
      if ($226) { var $234 = 1;label = 42; break; } else { label = 41; break; }
    case 41: 
      var $228=$R;
      var $229=(($228+16)|0);
      var $230=(($229)|0);
      $CP=$230;
      var $231=HEAP32[(($230)>>2)];
      var $232=(($231)|(0))!=0;
      var $234 = $232;label = 42; break;
    case 42: 
      var $234;
      if ($234) { label = 43; break; } else { label = 44; break; }
    case 43: 
      var $236=$CP;
      $RP=$236;
      var $237=HEAP32[(($236)>>2)];
      $R=$237;
      label = 40; break;
    case 44: 
      var $239=$RP;
      var $240=$239;
      var $241=HEAP32[((((__gm_+16)|0))>>2)];
      var $242=(($240)>>>(0)) >= (($241)>>>(0));
      var $243=(($242)&(1));
      var $244=($243);
      var $245=(($244)|(0))!=0;
      if ($245) { label = 45; break; } else { label = 46; break; }
    case 45: 
      var $247=$RP;
      HEAP32[(($247)>>2)]=0;
      label = 47; break;
    case 46: 
      _abort();
      throw "Reached an unreachable!";
    case 47: 
      label = 48; break;
    case 48: 
      label = 49; break;
    case 49: 
      var $252=$XP;
      var $253=(($252)|(0))!=0;
      if ($253) { label = 50; break; } else { label = 77; break; }
    case 50: 
      var $255=$TP;
      var $256=(($255+28)|0);
      var $257=HEAP32[(($256)>>2)];
      var $258=((((__gm_+304)|0)+($257<<2))|0);
      $H=$258;
      var $259=$TP;
      var $260=$H;
      var $261=HEAP32[(($260)>>2)];
      var $262=(($259)|(0))==(($261)|(0));
      if ($262) { label = 51; break; } else { label = 54; break; }
    case 51: 
      var $264=$R;
      var $265=$H;
      HEAP32[(($265)>>2)]=$264;
      var $266=(($264)|(0))==0;
      if ($266) { label = 52; break; } else { label = 53; break; }
    case 52: 
      var $268=$TP;
      var $269=(($268+28)|0);
      var $270=HEAP32[(($269)>>2)];
      var $271=1 << $270;
      var $272=$271 ^ -1;
      var $273=HEAP32[((((__gm_+4)|0))>>2)];
      var $274=$273 & $272;
      HEAP32[((((__gm_+4)|0))>>2)]=$274;
      label = 53; break;
    case 53: 
      label = 61; break;
    case 54: 
      var $277=$XP;
      var $278=$277;
      var $279=HEAP32[((((__gm_+16)|0))>>2)];
      var $280=(($278)>>>(0)) >= (($279)>>>(0));
      var $281=(($280)&(1));
      var $282=($281);
      var $283=(($282)|(0))!=0;
      if ($283) { label = 55; break; } else { label = 59; break; }
    case 55: 
      var $285=$XP;
      var $286=(($285+16)|0);
      var $287=(($286)|0);
      var $288=HEAP32[(($287)>>2)];
      var $289=$TP;
      var $290=(($288)|(0))==(($289)|(0));
      if ($290) { label = 56; break; } else { label = 57; break; }
    case 56: 
      var $292=$R;
      var $293=$XP;
      var $294=(($293+16)|0);
      var $295=(($294)|0);
      HEAP32[(($295)>>2)]=$292;
      label = 58; break;
    case 57: 
      var $297=$R;
      var $298=$XP;
      var $299=(($298+16)|0);
      var $300=(($299+4)|0);
      HEAP32[(($300)>>2)]=$297;
      label = 58; break;
    case 58: 
      label = 60; break;
    case 59: 
      _abort();
      throw "Reached an unreachable!";
    case 60: 
      label = 61; break;
    case 61: 
      var $305=$R;
      var $306=(($305)|(0))!=0;
      if ($306) { label = 62; break; } else { label = 76; break; }
    case 62: 
      var $308=$R;
      var $309=$308;
      var $310=HEAP32[((((__gm_+16)|0))>>2)];
      var $311=(($309)>>>(0)) >= (($310)>>>(0));
      var $312=(($311)&(1));
      var $313=($312);
      var $314=(($313)|(0))!=0;
      if ($314) { label = 63; break; } else { label = 74; break; }
    case 63: 
      var $316=$XP;
      var $317=$R;
      var $318=(($317+24)|0);
      HEAP32[(($318)>>2)]=$316;
      var $319=$TP;
      var $320=(($319+16)|0);
      var $321=(($320)|0);
      var $322=HEAP32[(($321)>>2)];
      $C0=$322;
      var $323=(($322)|(0))!=0;
      if ($323) { label = 64; break; } else { label = 68; break; }
    case 64: 
      var $325=$C0;
      var $326=$325;
      var $327=HEAP32[((((__gm_+16)|0))>>2)];
      var $328=(($326)>>>(0)) >= (($327)>>>(0));
      var $329=(($328)&(1));
      var $330=($329);
      var $331=(($330)|(0))!=0;
      if ($331) { label = 65; break; } else { label = 66; break; }
    case 65: 
      var $333=$C0;
      var $334=$R;
      var $335=(($334+16)|0);
      var $336=(($335)|0);
      HEAP32[(($336)>>2)]=$333;
      var $337=$R;
      var $338=$C0;
      var $339=(($338+24)|0);
      HEAP32[(($339)>>2)]=$337;
      label = 67; break;
    case 66: 
      _abort();
      throw "Reached an unreachable!";
    case 67: 
      label = 68; break;
    case 68: 
      var $343=$TP;
      var $344=(($343+16)|0);
      var $345=(($344+4)|0);
      var $346=HEAP32[(($345)>>2)];
      $C1=$346;
      var $347=(($346)|(0))!=0;
      if ($347) { label = 69; break; } else { label = 73; break; }
    case 69: 
      var $349=$C1;
      var $350=$349;
      var $351=HEAP32[((((__gm_+16)|0))>>2)];
      var $352=(($350)>>>(0)) >= (($351)>>>(0));
      var $353=(($352)&(1));
      var $354=($353);
      var $355=(($354)|(0))!=0;
      if ($355) { label = 70; break; } else { label = 71; break; }
    case 70: 
      var $357=$C1;
      var $358=$R;
      var $359=(($358+16)|0);
      var $360=(($359+4)|0);
      HEAP32[(($360)>>2)]=$357;
      var $361=$R;
      var $362=$C1;
      var $363=(($362+24)|0);
      HEAP32[(($363)>>2)]=$361;
      label = 72; break;
    case 71: 
      _abort();
      throw "Reached an unreachable!";
    case 72: 
      label = 73; break;
    case 73: 
      label = 75; break;
    case 74: 
      _abort();
      throw "Reached an unreachable!";
    case 75: 
      label = 76; break;
    case 76: 
      label = 77; break;
    case 77: 
      label = 78; break;
    case 78: 
      label = 82; break;
    case 79: 
      var $373=$next;
      var $374=(($373+4)|0);
      var $375=HEAP32[(($374)>>2)];
      var $376=$375 & 3;
      var $377=(($376)|(0))==3;
      if ($377) { label = 80; break; } else { label = 81; break; }
    case 80: 
      var $379=$psize;
      HEAP32[((((__gm_+8)|0))>>2)]=$379;
      var $380=$next;
      var $381=(($380+4)|0);
      var $382=HEAP32[(($381)>>2)];
      var $383=$382 & -2;
      HEAP32[(($381)>>2)]=$383;
      var $384=$psize;
      var $385=$384 | 1;
      var $386=$p;
      var $387=(($386+4)|0);
      HEAP32[(($387)>>2)]=$385;
      var $388=$psize;
      var $389=$p;
      var $390=$389;
      var $391=$psize;
      var $392=(($390+$391)|0);
      var $393=$392;
      var $394=(($393)|0);
      HEAP32[(($394)>>2)]=$388;
      label = 213; break;
    case 81: 
      label = 82; break;
    case 82: 
      label = 84; break;
    case 83: 
      label = 212; break;
    case 84: 
      label = 85; break;
    case 85: 
      label = 86; break;
    case 86: 
      var $401=$p;
      var $402=$401;
      var $403=$next;
      var $404=$403;
      var $405=(($402)>>>(0)) < (($404)>>>(0));
      if ($405) { label = 87; break; } else { var $413 = 0;label = 88; break; }
    case 87: 
      var $407=$next;
      var $408=(($407+4)|0);
      var $409=HEAP32[(($408)>>2)];
      var $410=$409 & 1;
      var $411=(($410)|(0))!=0;
      var $413 = $411;label = 88; break;
    case 88: 
      var $413;
      var $414=(($413)&(1));
      var $415=($414);
      var $416=(($415)|(0))!=0;
      if ($416) { label = 89; break; } else { label = 210; break; }
    case 89: 
      var $418=$next;
      var $419=(($418+4)|0);
      var $420=HEAP32[(($419)>>2)];
      var $421=$420 & 2;
      var $422=(($421)|(0))!=0;
      if ($422) { label = 171; break; } else { label = 90; break; }
    case 90: 
      var $424=$next;
      var $425=HEAP32[((((__gm_+24)|0))>>2)];
      var $426=(($424)|(0))==(($425)|(0));
      if ($426) { label = 91; break; } else { label = 96; break; }
    case 91: 
      var $428=$psize;
      var $429=HEAP32[((((__gm_+12)|0))>>2)];
      var $430=((($429)+($428))|0);
      HEAP32[((((__gm_+12)|0))>>2)]=$430;
      $tsize=$430;
      var $431=$p;
      HEAP32[((((__gm_+24)|0))>>2)]=$431;
      var $432=$tsize;
      var $433=$432 | 1;
      var $434=$p;
      var $435=(($434+4)|0);
      HEAP32[(($435)>>2)]=$433;
      var $436=$p;
      var $437=HEAP32[((((__gm_+20)|0))>>2)];
      var $438=(($436)|(0))==(($437)|(0));
      if ($438) { label = 92; break; } else { label = 93; break; }
    case 92: 
      HEAP32[((((__gm_+20)|0))>>2)]=0;
      HEAP32[((((__gm_+8)|0))>>2)]=0;
      label = 93; break;
    case 93: 
      var $441=$tsize;
      var $442=HEAP32[((((__gm_+28)|0))>>2)];
      var $443=(($441)>>>(0)) > (($442)>>>(0));
      if ($443) { label = 94; break; } else { label = 95; break; }
    case 94: 
      var $445=_sys_trim(__gm_, 0);
      label = 95; break;
    case 95: 
      label = 213; break;
    case 96: 
      var $448=$next;
      var $449=HEAP32[((((__gm_+20)|0))>>2)];
      var $450=(($448)|(0))==(($449)|(0));
      if ($450) { label = 97; break; } else { label = 98; break; }
    case 97: 
      var $452=$psize;
      var $453=HEAP32[((((__gm_+8)|0))>>2)];
      var $454=((($453)+($452))|0);
      HEAP32[((((__gm_+8)|0))>>2)]=$454;
      $dsize=$454;
      var $455=$p;
      HEAP32[((((__gm_+20)|0))>>2)]=$455;
      var $456=$dsize;
      var $457=$456 | 1;
      var $458=$p;
      var $459=(($458+4)|0);
      HEAP32[(($459)>>2)]=$457;
      var $460=$dsize;
      var $461=$p;
      var $462=$461;
      var $463=$dsize;
      var $464=(($462+$463)|0);
      var $465=$464;
      var $466=(($465)|0);
      HEAP32[(($466)>>2)]=$460;
      label = 213; break;
    case 98: 
      var $468=$next;
      var $469=(($468+4)|0);
      var $470=HEAP32[(($469)>>2)];
      var $471=$470 & -8;
      $nsize=$471;
      var $472=$nsize;
      var $473=$psize;
      var $474=((($473)+($472))|0);
      $psize=$474;
      var $475=$nsize;
      var $476=$475 >>> 3;
      var $477=(($476)>>>(0)) < 32;
      if ($477) { label = 99; break; } else { label = 117; break; }
    case 99: 
      var $479=$next;
      var $480=(($479+8)|0);
      var $481=HEAP32[(($480)>>2)];
      $F2=$481;
      var $482=$next;
      var $483=(($482+12)|0);
      var $484=HEAP32[(($483)>>2)];
      $B3=$484;
      var $485=$nsize;
      var $486=$485 >>> 3;
      $I4=$486;
      var $487=$F2;
      var $488=$I4;
      var $489=$488 << 1;
      var $490=((((__gm_+40)|0)+($489<<2))|0);
      var $491=$490;
      var $492=$491;
      var $493=(($487)|(0))==(($492)|(0));
      if ($493) { var $508 = 1;label = 103; break; } else { label = 100; break; }
    case 100: 
      var $495=$F2;
      var $496=$495;
      var $497=HEAP32[((((__gm_+16)|0))>>2)];
      var $498=(($496)>>>(0)) >= (($497)>>>(0));
      if ($498) { label = 101; break; } else { var $506 = 0;label = 102; break; }
    case 101: 
      var $500=$F2;
      var $501=(($500+12)|0);
      var $502=HEAP32[(($501)>>2)];
      var $503=$next;
      var $504=(($502)|(0))==(($503)|(0));
      var $506 = $504;label = 102; break;
    case 102: 
      var $506;
      var $508 = $506;label = 103; break;
    case 103: 
      var $508;
      var $509=(($508)&(1));
      var $510=($509);
      var $511=(($510)|(0))!=0;
      if ($511) { label = 104; break; } else { label = 115; break; }
    case 104: 
      var $513=$B3;
      var $514=$F2;
      var $515=(($513)|(0))==(($514)|(0));
      if ($515) { label = 105; break; } else { label = 106; break; }
    case 105: 
      var $517=$I4;
      var $518=1 << $517;
      var $519=$518 ^ -1;
      var $520=HEAP32[((((__gm_)|0))>>2)];
      var $521=$520 & $519;
      HEAP32[((((__gm_)|0))>>2)]=$521;
      label = 114; break;
    case 106: 
      var $523=$B3;
      var $524=$I4;
      var $525=$524 << 1;
      var $526=((((__gm_+40)|0)+($525<<2))|0);
      var $527=$526;
      var $528=$527;
      var $529=(($523)|(0))==(($528)|(0));
      if ($529) { var $544 = 1;label = 110; break; } else { label = 107; break; }
    case 107: 
      var $531=$B3;
      var $532=$531;
      var $533=HEAP32[((((__gm_+16)|0))>>2)];
      var $534=(($532)>>>(0)) >= (($533)>>>(0));
      if ($534) { label = 108; break; } else { var $542 = 0;label = 109; break; }
    case 108: 
      var $536=$B3;
      var $537=(($536+8)|0);
      var $538=HEAP32[(($537)>>2)];
      var $539=$next;
      var $540=(($538)|(0))==(($539)|(0));
      var $542 = $540;label = 109; break;
    case 109: 
      var $542;
      var $544 = $542;label = 110; break;
    case 110: 
      var $544;
      var $545=(($544)&(1));
      var $546=($545);
      var $547=(($546)|(0))!=0;
      if ($547) { label = 111; break; } else { label = 112; break; }
    case 111: 
      var $549=$B3;
      var $550=$F2;
      var $551=(($550+12)|0);
      HEAP32[(($551)>>2)]=$549;
      var $552=$F2;
      var $553=$B3;
      var $554=(($553+8)|0);
      HEAP32[(($554)>>2)]=$552;
      label = 113; break;
    case 112: 
      _abort();
      throw "Reached an unreachable!";
    case 113: 
      label = 114; break;
    case 114: 
      label = 116; break;
    case 115: 
      _abort();
      throw "Reached an unreachable!";
    case 116: 
      label = 166; break;
    case 117: 
      var $561=$next;
      var $562=$561;
      $TP5=$562;
      var $563=$TP5;
      var $564=(($563+24)|0);
      var $565=HEAP32[(($564)>>2)];
      $XP6=$565;
      var $566=$TP5;
      var $567=(($566+12)|0);
      var $568=HEAP32[(($567)>>2)];
      var $569=$TP5;
      var $570=(($568)|(0))!=(($569)|(0));
      if ($570) { label = 118; break; } else { label = 125; break; }
    case 118: 
      var $572=$TP5;
      var $573=(($572+8)|0);
      var $574=HEAP32[(($573)>>2)];
      $F8=$574;
      var $575=$TP5;
      var $576=(($575+12)|0);
      var $577=HEAP32[(($576)>>2)];
      $R7=$577;
      var $578=$F8;
      var $579=$578;
      var $580=HEAP32[((((__gm_+16)|0))>>2)];
      var $581=(($579)>>>(0)) >= (($580)>>>(0));
      if ($581) { label = 119; break; } else { var $595 = 0;label = 121; break; }
    case 119: 
      var $583=$F8;
      var $584=(($583+12)|0);
      var $585=HEAP32[(($584)>>2)];
      var $586=$TP5;
      var $587=(($585)|(0))==(($586)|(0));
      if ($587) { label = 120; break; } else { var $595 = 0;label = 121; break; }
    case 120: 
      var $589=$R7;
      var $590=(($589+8)|0);
      var $591=HEAP32[(($590)>>2)];
      var $592=$TP5;
      var $593=(($591)|(0))==(($592)|(0));
      var $595 = $593;label = 121; break;
    case 121: 
      var $595;
      var $596=(($595)&(1));
      var $597=($596);
      var $598=(($597)|(0))!=0;
      if ($598) { label = 122; break; } else { label = 123; break; }
    case 122: 
      var $600=$R7;
      var $601=$F8;
      var $602=(($601+12)|0);
      HEAP32[(($602)>>2)]=$600;
      var $603=$F8;
      var $604=$R7;
      var $605=(($604+8)|0);
      HEAP32[(($605)>>2)]=$603;
      label = 124; break;
    case 123: 
      _abort();
      throw "Reached an unreachable!";
    case 124: 
      label = 137; break;
    case 125: 
      var $609=$TP5;
      var $610=(($609+16)|0);
      var $611=(($610+4)|0);
      $RP9=$611;
      var $612=HEAP32[(($611)>>2)];
      $R7=$612;
      var $613=(($612)|(0))!=0;
      if ($613) { label = 127; break; } else { label = 126; break; }
    case 126: 
      var $615=$TP5;
      var $616=(($615+16)|0);
      var $617=(($616)|0);
      $RP9=$617;
      var $618=HEAP32[(($617)>>2)];
      $R7=$618;
      var $619=(($618)|(0))!=0;
      if ($619) { label = 127; break; } else { label = 136; break; }
    case 127: 
      label = 128; break;
    case 128: 
      var $622=$R7;
      var $623=(($622+16)|0);
      var $624=(($623+4)|0);
      $CP10=$624;
      var $625=HEAP32[(($624)>>2)];
      var $626=(($625)|(0))!=0;
      if ($626) { var $634 = 1;label = 130; break; } else { label = 129; break; }
    case 129: 
      var $628=$R7;
      var $629=(($628+16)|0);
      var $630=(($629)|0);
      $CP10=$630;
      var $631=HEAP32[(($630)>>2)];
      var $632=(($631)|(0))!=0;
      var $634 = $632;label = 130; break;
    case 130: 
      var $634;
      if ($634) { label = 131; break; } else { label = 132; break; }
    case 131: 
      var $636=$CP10;
      $RP9=$636;
      var $637=HEAP32[(($636)>>2)];
      $R7=$637;
      label = 128; break;
    case 132: 
      var $639=$RP9;
      var $640=$639;
      var $641=HEAP32[((((__gm_+16)|0))>>2)];
      var $642=(($640)>>>(0)) >= (($641)>>>(0));
      var $643=(($642)&(1));
      var $644=($643);
      var $645=(($644)|(0))!=0;
      if ($645) { label = 133; break; } else { label = 134; break; }
    case 133: 
      var $647=$RP9;
      HEAP32[(($647)>>2)]=0;
      label = 135; break;
    case 134: 
      _abort();
      throw "Reached an unreachable!";
    case 135: 
      label = 136; break;
    case 136: 
      label = 137; break;
    case 137: 
      var $652=$XP6;
      var $653=(($652)|(0))!=0;
      if ($653) { label = 138; break; } else { label = 165; break; }
    case 138: 
      var $655=$TP5;
      var $656=(($655+28)|0);
      var $657=HEAP32[(($656)>>2)];
      var $658=((((__gm_+304)|0)+($657<<2))|0);
      $H11=$658;
      var $659=$TP5;
      var $660=$H11;
      var $661=HEAP32[(($660)>>2)];
      var $662=(($659)|(0))==(($661)|(0));
      if ($662) { label = 139; break; } else { label = 142; break; }
    case 139: 
      var $664=$R7;
      var $665=$H11;
      HEAP32[(($665)>>2)]=$664;
      var $666=(($664)|(0))==0;
      if ($666) { label = 140; break; } else { label = 141; break; }
    case 140: 
      var $668=$TP5;
      var $669=(($668+28)|0);
      var $670=HEAP32[(($669)>>2)];
      var $671=1 << $670;
      var $672=$671 ^ -1;
      var $673=HEAP32[((((__gm_+4)|0))>>2)];
      var $674=$673 & $672;
      HEAP32[((((__gm_+4)|0))>>2)]=$674;
      label = 141; break;
    case 141: 
      label = 149; break;
    case 142: 
      var $677=$XP6;
      var $678=$677;
      var $679=HEAP32[((((__gm_+16)|0))>>2)];
      var $680=(($678)>>>(0)) >= (($679)>>>(0));
      var $681=(($680)&(1));
      var $682=($681);
      var $683=(($682)|(0))!=0;
      if ($683) { label = 143; break; } else { label = 147; break; }
    case 143: 
      var $685=$XP6;
      var $686=(($685+16)|0);
      var $687=(($686)|0);
      var $688=HEAP32[(($687)>>2)];
      var $689=$TP5;
      var $690=(($688)|(0))==(($689)|(0));
      if ($690) { label = 144; break; } else { label = 145; break; }
    case 144: 
      var $692=$R7;
      var $693=$XP6;
      var $694=(($693+16)|0);
      var $695=(($694)|0);
      HEAP32[(($695)>>2)]=$692;
      label = 146; break;
    case 145: 
      var $697=$R7;
      var $698=$XP6;
      var $699=(($698+16)|0);
      var $700=(($699+4)|0);
      HEAP32[(($700)>>2)]=$697;
      label = 146; break;
    case 146: 
      label = 148; break;
    case 147: 
      _abort();
      throw "Reached an unreachable!";
    case 148: 
      label = 149; break;
    case 149: 
      var $705=$R7;
      var $706=(($705)|(0))!=0;
      if ($706) { label = 150; break; } else { label = 164; break; }
    case 150: 
      var $708=$R7;
      var $709=$708;
      var $710=HEAP32[((((__gm_+16)|0))>>2)];
      var $711=(($709)>>>(0)) >= (($710)>>>(0));
      var $712=(($711)&(1));
      var $713=($712);
      var $714=(($713)|(0))!=0;
      if ($714) { label = 151; break; } else { label = 162; break; }
    case 151: 
      var $716=$XP6;
      var $717=$R7;
      var $718=(($717+24)|0);
      HEAP32[(($718)>>2)]=$716;
      var $719=$TP5;
      var $720=(($719+16)|0);
      var $721=(($720)|0);
      var $722=HEAP32[(($721)>>2)];
      $C012=$722;
      var $723=(($722)|(0))!=0;
      if ($723) { label = 152; break; } else { label = 156; break; }
    case 152: 
      var $725=$C012;
      var $726=$725;
      var $727=HEAP32[((((__gm_+16)|0))>>2)];
      var $728=(($726)>>>(0)) >= (($727)>>>(0));
      var $729=(($728)&(1));
      var $730=($729);
      var $731=(($730)|(0))!=0;
      if ($731) { label = 153; break; } else { label = 154; break; }
    case 153: 
      var $733=$C012;
      var $734=$R7;
      var $735=(($734+16)|0);
      var $736=(($735)|0);
      HEAP32[(($736)>>2)]=$733;
      var $737=$R7;
      var $738=$C012;
      var $739=(($738+24)|0);
      HEAP32[(($739)>>2)]=$737;
      label = 155; break;
    case 154: 
      _abort();
      throw "Reached an unreachable!";
    case 155: 
      label = 156; break;
    case 156: 
      var $743=$TP5;
      var $744=(($743+16)|0);
      var $745=(($744+4)|0);
      var $746=HEAP32[(($745)>>2)];
      $C113=$746;
      var $747=(($746)|(0))!=0;
      if ($747) { label = 157; break; } else { label = 161; break; }
    case 157: 
      var $749=$C113;
      var $750=$749;
      var $751=HEAP32[((((__gm_+16)|0))>>2)];
      var $752=(($750)>>>(0)) >= (($751)>>>(0));
      var $753=(($752)&(1));
      var $754=($753);
      var $755=(($754)|(0))!=0;
      if ($755) { label = 158; break; } else { label = 159; break; }
    case 158: 
      var $757=$C113;
      var $758=$R7;
      var $759=(($758+16)|0);
      var $760=(($759+4)|0);
      HEAP32[(($760)>>2)]=$757;
      var $761=$R7;
      var $762=$C113;
      var $763=(($762+24)|0);
      HEAP32[(($763)>>2)]=$761;
      label = 160; break;
    case 159: 
      _abort();
      throw "Reached an unreachable!";
    case 160: 
      label = 161; break;
    case 161: 
      label = 163; break;
    case 162: 
      _abort();
      throw "Reached an unreachable!";
    case 163: 
      label = 164; break;
    case 164: 
      label = 165; break;
    case 165: 
      label = 166; break;
    case 166: 
      var $772=$psize;
      var $773=$772 | 1;
      var $774=$p;
      var $775=(($774+4)|0);
      HEAP32[(($775)>>2)]=$773;
      var $776=$psize;
      var $777=$p;
      var $778=$777;
      var $779=$psize;
      var $780=(($778+$779)|0);
      var $781=$780;
      var $782=(($781)|0);
      HEAP32[(($782)>>2)]=$776;
      var $783=$p;
      var $784=HEAP32[((((__gm_+20)|0))>>2)];
      var $785=(($783)|(0))==(($784)|(0));
      if ($785) { label = 167; break; } else { label = 168; break; }
    case 167: 
      var $787=$psize;
      HEAP32[((((__gm_+8)|0))>>2)]=$787;
      label = 213; break;
    case 168: 
      label = 169; break;
    case 169: 
      label = 170; break;
    case 170: 
      label = 172; break;
    case 171: 
      var $792=$next;
      var $793=(($792+4)|0);
      var $794=HEAP32[(($793)>>2)];
      var $795=$794 & -2;
      HEAP32[(($793)>>2)]=$795;
      var $796=$psize;
      var $797=$796 | 1;
      var $798=$p;
      var $799=(($798+4)|0);
      HEAP32[(($799)>>2)]=$797;
      var $800=$psize;
      var $801=$p;
      var $802=$801;
      var $803=$psize;
      var $804=(($802+$803)|0);
      var $805=$804;
      var $806=(($805)|0);
      HEAP32[(($806)>>2)]=$800;
      label = 172; break;
    case 172: 
      var $808=$psize;
      var $809=$808 >>> 3;
      var $810=(($809)>>>(0)) < 32;
      if ($810) { label = 173; break; } else { label = 180; break; }
    case 173: 
      var $812=$psize;
      var $813=$812 >>> 3;
      $I14=$813;
      var $814=$I14;
      var $815=$814 << 1;
      var $816=((((__gm_+40)|0)+($815<<2))|0);
      var $817=$816;
      var $818=$817;
      $B15=$818;
      var $819=$B15;
      $F16=$819;
      var $820=HEAP32[((((__gm_)|0))>>2)];
      var $821=$I14;
      var $822=1 << $821;
      var $823=$820 & $822;
      var $824=(($823)|(0))!=0;
      if ($824) { label = 175; break; } else { label = 174; break; }
    case 174: 
      var $826=$I14;
      var $827=1 << $826;
      var $828=HEAP32[((((__gm_)|0))>>2)];
      var $829=$828 | $827;
      HEAP32[((((__gm_)|0))>>2)]=$829;
      label = 179; break;
    case 175: 
      var $831=$B15;
      var $832=(($831+8)|0);
      var $833=HEAP32[(($832)>>2)];
      var $834=$833;
      var $835=HEAP32[((((__gm_+16)|0))>>2)];
      var $836=(($834)>>>(0)) >= (($835)>>>(0));
      var $837=(($836)&(1));
      var $838=($837);
      var $839=(($838)|(0))!=0;
      if ($839) { label = 176; break; } else { label = 177; break; }
    case 176: 
      var $841=$B15;
      var $842=(($841+8)|0);
      var $843=HEAP32[(($842)>>2)];
      $F16=$843;
      label = 178; break;
    case 177: 
      _abort();
      throw "Reached an unreachable!";
    case 178: 
      label = 179; break;
    case 179: 
      var $847=$p;
      var $848=$B15;
      var $849=(($848+8)|0);
      HEAP32[(($849)>>2)]=$847;
      var $850=$p;
      var $851=$F16;
      var $852=(($851+12)|0);
      HEAP32[(($852)>>2)]=$850;
      var $853=$F16;
      var $854=$p;
      var $855=(($854+8)|0);
      HEAP32[(($855)>>2)]=$853;
      var $856=$B15;
      var $857=$p;
      var $858=(($857+12)|0);
      HEAP32[(($858)>>2)]=$856;
      label = 209; break;
    case 180: 
      var $860=$p;
      var $861=$860;
      $tp=$861;
      var $862=$psize;
      var $863=$862 >>> 8;
      $X=$863;
      var $864=$X;
      var $865=(($864)|(0))==0;
      if ($865) { label = 181; break; } else { label = 182; break; }
    case 181: 
      $I18=0;
      label = 186; break;
    case 182: 
      var $868=$X;
      var $869=(($868)>>>(0)) > 65535;
      if ($869) { label = 183; break; } else { label = 184; break; }
    case 183: 
      $I18=31;
      label = 185; break;
    case 184: 
      var $872=$X;
      $Y=$872;
      var $873=$Y;
      var $874=((($873)-(256))|0);
      var $875=$874 >>> 16;
      var $876=$875 & 8;
      $N=$876;
      var $877=$N;
      var $878=$Y;
      var $879=$878 << $877;
      $Y=$879;
      var $880=((($879)-(4096))|0);
      var $881=$880 >>> 16;
      var $882=$881 & 4;
      $K=$882;
      var $883=$K;
      var $884=$N;
      var $885=((($884)+($883))|0);
      $N=$885;
      var $886=$K;
      var $887=$Y;
      var $888=$887 << $886;
      $Y=$888;
      var $889=((($888)-(16384))|0);
      var $890=$889 >>> 16;
      var $891=$890 & 2;
      $K=$891;
      var $892=$N;
      var $893=((($892)+($891))|0);
      $N=$893;
      var $894=$N;
      var $895=(((14)-($894))|0);
      var $896=$K;
      var $897=$Y;
      var $898=$897 << $896;
      $Y=$898;
      var $899=$898 >>> 15;
      var $900=((($895)+($899))|0);
      $K=$900;
      var $901=$K;
      var $902=$901 << 1;
      var $903=$psize;
      var $904=$K;
      var $905=((($904)+(7))|0);
      var $906=$903 >>> (($905)>>>(0));
      var $907=$906 & 1;
      var $908=((($902)+($907))|0);
      $I18=$908;
      label = 185; break;
    case 185: 
      label = 186; break;
    case 186: 
      var $911=$I18;
      var $912=((((__gm_+304)|0)+($911<<2))|0);
      $H17=$912;
      var $913=$I18;
      var $914=$tp;
      var $915=(($914+28)|0);
      HEAP32[(($915)>>2)]=$913;
      var $916=$tp;
      var $917=(($916+16)|0);
      var $918=(($917+4)|0);
      HEAP32[(($918)>>2)]=0;
      var $919=$tp;
      var $920=(($919+16)|0);
      var $921=(($920)|0);
      HEAP32[(($921)>>2)]=0;
      var $922=HEAP32[((((__gm_+4)|0))>>2)];
      var $923=$I18;
      var $924=1 << $923;
      var $925=$922 & $924;
      var $926=(($925)|(0))!=0;
      if ($926) { label = 188; break; } else { label = 187; break; }
    case 187: 
      var $928=$I18;
      var $929=1 << $928;
      var $930=HEAP32[((((__gm_+4)|0))>>2)];
      var $931=$930 | $929;
      HEAP32[((((__gm_+4)|0))>>2)]=$931;
      var $932=$tp;
      var $933=$H17;
      HEAP32[(($933)>>2)]=$932;
      var $934=$H17;
      var $935=$934;
      var $936=$tp;
      var $937=(($936+24)|0);
      HEAP32[(($937)>>2)]=$935;
      var $938=$tp;
      var $939=$tp;
      var $940=(($939+12)|0);
      HEAP32[(($940)>>2)]=$938;
      var $941=$tp;
      var $942=(($941+8)|0);
      HEAP32[(($942)>>2)]=$938;
      label = 206; break;
    case 188: 
      var $944=$H17;
      var $945=HEAP32[(($944)>>2)];
      $T=$945;
      var $946=$psize;
      var $947=$I18;
      var $948=(($947)|(0))==31;
      if ($948) { label = 189; break; } else { label = 190; break; }
    case 189: 
      var $957 = 0;label = 191; break;
    case 190: 
      var $951=$I18;
      var $952=$951 >>> 1;
      var $953=((($952)+(8))|0);
      var $954=((($953)-(2))|0);
      var $955=(((31)-($954))|0);
      var $957 = $955;label = 191; break;
    case 191: 
      var $957;
      var $958=$946 << $957;
      $K19=$958;
      label = 192; break;
    case 192: 
      var $960=$T;
      var $961=(($960+4)|0);
      var $962=HEAP32[(($961)>>2)];
      var $963=$962 & -8;
      var $964=$psize;
      var $965=(($963)|(0))!=(($964)|(0));
      if ($965) { label = 193; break; } else { label = 199; break; }
    case 193: 
      var $967=$K19;
      var $968=$967 >>> 31;
      var $969=$968 & 1;
      var $970=$T;
      var $971=(($970+16)|0);
      var $972=(($971+($969<<2))|0);
      $C=$972;
      var $973=$K19;
      var $974=$973 << 1;
      $K19=$974;
      var $975=$C;
      var $976=HEAP32[(($975)>>2)];
      var $977=(($976)|(0))!=0;
      if ($977) { label = 194; break; } else { label = 195; break; }
    case 194: 
      var $979=$C;
      var $980=HEAP32[(($979)>>2)];
      $T=$980;
      label = 198; break;
    case 195: 
      var $982=$C;
      var $983=$982;
      var $984=HEAP32[((((__gm_+16)|0))>>2)];
      var $985=(($983)>>>(0)) >= (($984)>>>(0));
      var $986=(($985)&(1));
      var $987=($986);
      var $988=(($987)|(0))!=0;
      if ($988) { label = 196; break; } else { label = 197; break; }
    case 196: 
      var $990=$tp;
      var $991=$C;
      HEAP32[(($991)>>2)]=$990;
      var $992=$T;
      var $993=$tp;
      var $994=(($993+24)|0);
      HEAP32[(($994)>>2)]=$992;
      var $995=$tp;
      var $996=$tp;
      var $997=(($996+12)|0);
      HEAP32[(($997)>>2)]=$995;
      var $998=$tp;
      var $999=(($998+8)|0);
      HEAP32[(($999)>>2)]=$995;
      label = 205; break;
    case 197: 
      _abort();
      throw "Reached an unreachable!";
    case 198: 
      label = 204; break;
    case 199: 
      var $1003=$T;
      var $1004=(($1003+8)|0);
      var $1005=HEAP32[(($1004)>>2)];
      $F20=$1005;
      var $1006=$T;
      var $1007=$1006;
      var $1008=HEAP32[((((__gm_+16)|0))>>2)];
      var $1009=(($1007)>>>(0)) >= (($1008)>>>(0));
      if ($1009) { label = 200; break; } else { var $1016 = 0;label = 201; break; }
    case 200: 
      var $1011=$F20;
      var $1012=$1011;
      var $1013=HEAP32[((((__gm_+16)|0))>>2)];
      var $1014=(($1012)>>>(0)) >= (($1013)>>>(0));
      var $1016 = $1014;label = 201; break;
    case 201: 
      var $1016;
      var $1017=(($1016)&(1));
      var $1018=($1017);
      var $1019=(($1018)|(0))!=0;
      if ($1019) { label = 202; break; } else { label = 203; break; }
    case 202: 
      var $1021=$tp;
      var $1022=$F20;
      var $1023=(($1022+12)|0);
      HEAP32[(($1023)>>2)]=$1021;
      var $1024=$T;
      var $1025=(($1024+8)|0);
      HEAP32[(($1025)>>2)]=$1021;
      var $1026=$F20;
      var $1027=$tp;
      var $1028=(($1027+8)|0);
      HEAP32[(($1028)>>2)]=$1026;
      var $1029=$T;
      var $1030=$tp;
      var $1031=(($1030+12)|0);
      HEAP32[(($1031)>>2)]=$1029;
      var $1032=$tp;
      var $1033=(($1032+24)|0);
      HEAP32[(($1033)>>2)]=0;
      label = 205; break;
    case 203: 
      _abort();
      throw "Reached an unreachable!";
    case 204: 
      label = 192; break;
    case 205: 
      label = 206; break;
    case 206: 
      var $1038=HEAP32[((((__gm_+32)|0))>>2)];
      var $1039=((($1038)-(1))|0);
      HEAP32[((((__gm_+32)|0))>>2)]=$1039;
      var $1040=(($1039)|(0))==0;
      if ($1040) { label = 207; break; } else { label = 208; break; }
    case 207: 
      var $1042=_release_unused_segments(__gm_);
      label = 208; break;
    case 208: 
      label = 209; break;
    case 209: 
      label = 213; break;
    case 210: 
      label = 211; break;
    case 211: 
      label = 212; break;
    case 212: 
      _abort();
      throw "Reached an unreachable!";
    case 213: 
      label = 214; break;
    case 214: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _sys_trim($m, $pad) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $released;
      var $unit;
      var $extra;
      var $sp;
      var $old_br;
      var $rel_br;
      var $new_br;
      $1=$m;
      $2=$pad;
      $released=0;
      var $3=HEAP32[((((_mparams)|0))>>2)];
      var $4=(($3)|(0))!=0;
      if ($4) { var $9 = 1;label = 3; break; } else { label = 2; break; }
    case 2: 
      var $6=_init_mparams();
      var $7=(($6)|(0))!=0;
      var $9 = $7;label = 3; break;
    case 3: 
      var $9;
      var $10=(($9)&(1));
      var $11=$2;
      var $12=(($11)>>>(0)) < 4294967232;
      if ($12) { label = 4; break; } else { label = 25; break; }
    case 4: 
      var $14=$1;
      var $15=(($14+24)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=(($16)|(0))!=0;
      if ($17) { label = 5; break; } else { label = 25; break; }
    case 5: 
      var $19=$2;
      var $20=((($19)+(40))|0);
      $2=$20;
      var $21=$1;
      var $22=(($21+12)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=$2;
      var $25=(($23)>>>(0)) > (($24)>>>(0));
      if ($25) { label = 6; break; } else { label = 21; break; }
    case 6: 
      var $27=HEAP32[((((_mparams+8)|0))>>2)];
      $unit=$27;
      var $28=$1;
      var $29=(($28+12)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$2;
      var $32=((($30)-($31))|0);
      var $33=$unit;
      var $34=((($33)-(1))|0);
      var $35=((($32)+($34))|0);
      var $36=$unit;
      var $37=Math.floor(((($35)>>>(0)))/((($36)>>>(0))));
      var $38=((($37)-(1))|0);
      var $39=$unit;
      var $40=Math.imul($38,$39);
      $extra=$40;
      var $41=$1;
      var $42=$1;
      var $43=(($42+24)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=$44;
      var $46=_segment_holding($41, $45);
      $sp=$46;
      var $47=$sp;
      var $48=(($47+12)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=$49 & 8;
      var $51=(($50)|(0))!=0;
      if ($51) { label = 18; break; } else { label = 7; break; }
    case 7: 
      var $53=$sp;
      var $54=(($53+12)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=$55 & 0;
      var $57=(($56)|(0))!=0;
      if ($57) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 17; break;
    case 9: 
      var $60=$extra;
      var $61=(($60)>>>(0)) >= 2147483647;
      if ($61) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $63=$unit;
      var $64=(((-2147483648)-($63))|0);
      $extra=$64;
      label = 11; break;
    case 11: 
      var $66=_sbrk(0);
      $old_br=$66;
      var $67=$old_br;
      var $68=$sp;
      var $69=(($68)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=$sp;
      var $72=(($71+4)|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=(($70+$73)|0);
      var $75=(($67)|(0))==(($74)|(0));
      if ($75) { label = 12; break; } else { label = 16; break; }
    case 12: 
      var $77=$extra;
      var $78=(((-$77))|0);
      var $79=_sbrk($78);
      $rel_br=$79;
      var $80=_sbrk(0);
      $new_br=$80;
      var $81=$rel_br;
      var $82=(($81)|(0))!=-1;
      if ($82) { label = 13; break; } else { label = 15; break; }
    case 13: 
      var $84=$new_br;
      var $85=$old_br;
      var $86=(($84)>>>(0)) < (($85)>>>(0));
      if ($86) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $88=$old_br;
      var $89=$new_br;
      var $90=$88;
      var $91=$89;
      var $92=((($90)-($91))|0);
      $released=$92;
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      label = 18; break;
    case 18: 
      var $97=$released;
      var $98=(($97)|(0))!=0;
      if ($98) { label = 19; break; } else { label = 20; break; }
    case 19: 
      var $100=$released;
      var $101=$sp;
      var $102=(($101+4)|0);
      var $103=HEAP32[(($102)>>2)];
      var $104=((($103)-($100))|0);
      HEAP32[(($102)>>2)]=$104;
      var $105=$released;
      var $106=$1;
      var $107=(($106+432)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=((($108)-($105))|0);
      HEAP32[(($107)>>2)]=$109;
      var $110=$1;
      var $111=$1;
      var $112=(($111+24)|0);
      var $113=HEAP32[(($112)>>2)];
      var $114=$1;
      var $115=(($114+12)|0);
      var $116=HEAP32[(($115)>>2)];
      var $117=$released;
      var $118=((($116)-($117))|0);
      _init_top($110, $113, $118);
      label = 20; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $121=$released;
      var $122=(($121)|(0))==0;
      if ($122) { label = 22; break; } else { label = 24; break; }
    case 22: 
      var $124=$1;
      var $125=(($124+12)|0);
      var $126=HEAP32[(($125)>>2)];
      var $127=$1;
      var $128=(($127+28)|0);
      var $129=HEAP32[(($128)>>2)];
      var $130=(($126)>>>(0)) > (($129)>>>(0));
      if ($130) { label = 23; break; } else { label = 24; break; }
    case 23: 
      var $132=$1;
      var $133=(($132+28)|0);
      HEAP32[(($133)>>2)]=-1;
      label = 24; break;
    case 24: 
      label = 25; break;
    case 25: 
      var $136=$released;
      var $137=(($136)|(0))!=0;
      var $138=$137 ? 1 : 0;
      return $138;
    default: assert(0, "bad label: " + label);
  }
}
function _calloc($n_elements, $elem_size) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $mem;
      var $req;
      $1=$n_elements;
      $2=$elem_size;
      $req=0;
      var $3=$1;
      var $4=(($3)|(0))!=0;
      if ($4) { label = 2; break; } else { label = 6; break; }
    case 2: 
      var $6=$1;
      var $7=$2;
      var $8=Math.imul($6,$7);
      $req=$8;
      var $9=$1;
      var $10=$2;
      var $11=$9 | $10;
      var $12=$11 & -65536;
      var $13=(($12)|(0))!=0;
      if ($13) { label = 3; break; } else { label = 5; break; }
    case 3: 
      var $15=$req;
      var $16=$1;
      var $17=Math.floor(((($15)>>>(0)))/((($16)>>>(0))));
      var $18=$2;
      var $19=(($17)|(0))!=(($18)|(0));
      if ($19) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $req=-1;
      label = 5; break;
    case 5: 
      label = 6; break;
    case 6: 
      var $23=$req;
      var $24=_malloc($23);
      $mem=$24;
      var $25=$mem;
      var $26=(($25)|(0))!=0;
      if ($26) { label = 7; break; } else { label = 9; break; }
    case 7: 
      var $28=$mem;
      var $29=((($28)-(8))|0);
      var $30=$29;
      var $31=(($30+4)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=$32 & 3;
      var $34=(($33)|(0))==0;
      if ($34) { label = 9; break; } else { label = 8; break; }
    case 8: 
      var $36=$mem;
      var $37=$req;
      _memset($36, 0, $37);
      label = 9; break;
    case 9: 
      var $39=$mem;
      return $39;
    default: assert(0, "bad label: " + label);
  }
}
Module["_calloc"] = _calloc;
function _release_unused_segments($m) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $released;
      var $nsegs;
      var $pred;
      var $sp;
      var $base;
      var $size;
      var $next;
      var $p;
      var $psize;
      var $tp;
      var $XP;
      var $R;
      var $F;
      var $RP;
      var $CP;
      var $H;
      var $C0;
      var $C1;
      var $H1;
      var $I;
      var $X;
      var $Y;
      var $N;
      var $K;
      var $T;
      var $K2;
      var $C;
      var $F3;
      $1=$m;
      $released=0;
      $nsegs=0;
      var $2=$1;
      var $3=(($2+448)|0);
      $pred=$3;
      var $4=$pred;
      var $5=(($4+8)|0);
      var $6=HEAP32[(($5)>>2)];
      $sp=$6;
      label = 2; break;
    case 2: 
      var $8=$sp;
      var $9=(($8)|(0))!=0;
      if ($9) { label = 3; break; } else { label = 90; break; }
    case 3: 
      var $11=$sp;
      var $12=(($11)|0);
      var $13=HEAP32[(($12)>>2)];
      $base=$13;
      var $14=$sp;
      var $15=(($14+4)|0);
      var $16=HEAP32[(($15)>>2)];
      $size=$16;
      var $17=$sp;
      var $18=(($17+8)|0);
      var $19=HEAP32[(($18)>>2)];
      $next=$19;
      var $20=$nsegs;
      var $21=((($20)+(1))|0);
      $nsegs=$21;
      var $22=$sp;
      var $23=(($22+12)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$24 & 0;
      var $26=(($25)|(0))!=0;
      if ($26) { label = 4; break; } else { label = 89; break; }
    case 4: 
      var $28=$sp;
      var $29=(($28+12)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$30 & 8;
      var $32=(($31)|(0))!=0;
      if ($32) { label = 89; break; } else { label = 5; break; }
    case 5: 
      var $34=$base;
      var $35=$base;
      var $36=(($35+8)|0);
      var $37=$36;
      var $38=$37 & 7;
      var $39=(($38)|(0))==0;
      if ($39) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $49 = 0;label = 8; break;
    case 7: 
      var $42=$base;
      var $43=(($42+8)|0);
      var $44=$43;
      var $45=$44 & 7;
      var $46=(((8)-($45))|0);
      var $47=$46 & 7;
      var $49 = $47;label = 8; break;
    case 8: 
      var $49;
      var $50=(($34+$49)|0);
      var $51=$50;
      $p=$51;
      var $52=$p;
      var $53=(($52+4)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=$54 & -8;
      $psize=$55;
      var $56=$p;
      var $57=(($56+4)|0);
      var $58=HEAP32[(($57)>>2)];
      var $59=$58 & 3;
      var $60=(($59)|(0))!=1;
      if ($60) { label = 88; break; } else { label = 9; break; }
    case 9: 
      var $62=$p;
      var $63=$62;
      var $64=$psize;
      var $65=(($63+$64)|0);
      var $66=$base;
      var $67=$size;
      var $68=(($66+$67)|0);
      var $69=((($68)-(40))|0);
      var $70=(($65)>>>(0)) >= (($69)>>>(0));
      if ($70) { label = 10; break; } else { label = 88; break; }
    case 10: 
      var $72=$p;
      var $73=$72;
      $tp=$73;
      var $74=$p;
      var $75=$1;
      var $76=(($75+20)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=(($74)|(0))==(($77)|(0));
      if ($78) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $80=$1;
      var $81=(($80+20)|0);
      HEAP32[(($81)>>2)]=0;
      var $82=$1;
      var $83=(($82+8)|0);
      HEAP32[(($83)>>2)]=0;
      label = 61; break;
    case 12: 
      var $85=$tp;
      var $86=(($85+24)|0);
      var $87=HEAP32[(($86)>>2)];
      $XP=$87;
      var $88=$tp;
      var $89=(($88+12)|0);
      var $90=HEAP32[(($89)>>2)];
      var $91=$tp;
      var $92=(($90)|(0))!=(($91)|(0));
      if ($92) { label = 13; break; } else { label = 20; break; }
    case 13: 
      var $94=$tp;
      var $95=(($94+8)|0);
      var $96=HEAP32[(($95)>>2)];
      $F=$96;
      var $97=$tp;
      var $98=(($97+12)|0);
      var $99=HEAP32[(($98)>>2)];
      $R=$99;
      var $100=$F;
      var $101=$100;
      var $102=$1;
      var $103=(($102+16)|0);
      var $104=HEAP32[(($103)>>2)];
      var $105=(($101)>>>(0)) >= (($104)>>>(0));
      if ($105) { label = 14; break; } else { var $119 = 0;label = 16; break; }
    case 14: 
      var $107=$F;
      var $108=(($107+12)|0);
      var $109=HEAP32[(($108)>>2)];
      var $110=$tp;
      var $111=(($109)|(0))==(($110)|(0));
      if ($111) { label = 15; break; } else { var $119 = 0;label = 16; break; }
    case 15: 
      var $113=$R;
      var $114=(($113+8)|0);
      var $115=HEAP32[(($114)>>2)];
      var $116=$tp;
      var $117=(($115)|(0))==(($116)|(0));
      var $119 = $117;label = 16; break;
    case 16: 
      var $119;
      var $120=(($119)&(1));
      var $121=($120);
      var $122=(($121)|(0))!=0;
      if ($122) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $124=$R;
      var $125=$F;
      var $126=(($125+12)|0);
      HEAP32[(($126)>>2)]=$124;
      var $127=$F;
      var $128=$R;
      var $129=(($128+8)|0);
      HEAP32[(($129)>>2)]=$127;
      label = 19; break;
    case 18: 
      _abort();
      throw "Reached an unreachable!";
    case 19: 
      label = 32; break;
    case 20: 
      var $133=$tp;
      var $134=(($133+16)|0);
      var $135=(($134+4)|0);
      $RP=$135;
      var $136=HEAP32[(($135)>>2)];
      $R=$136;
      var $137=(($136)|(0))!=0;
      if ($137) { label = 22; break; } else { label = 21; break; }
    case 21: 
      var $139=$tp;
      var $140=(($139+16)|0);
      var $141=(($140)|0);
      $RP=$141;
      var $142=HEAP32[(($141)>>2)];
      $R=$142;
      var $143=(($142)|(0))!=0;
      if ($143) { label = 22; break; } else { label = 31; break; }
    case 22: 
      label = 23; break;
    case 23: 
      var $146=$R;
      var $147=(($146+16)|0);
      var $148=(($147+4)|0);
      $CP=$148;
      var $149=HEAP32[(($148)>>2)];
      var $150=(($149)|(0))!=0;
      if ($150) { var $158 = 1;label = 25; break; } else { label = 24; break; }
    case 24: 
      var $152=$R;
      var $153=(($152+16)|0);
      var $154=(($153)|0);
      $CP=$154;
      var $155=HEAP32[(($154)>>2)];
      var $156=(($155)|(0))!=0;
      var $158 = $156;label = 25; break;
    case 25: 
      var $158;
      if ($158) { label = 26; break; } else { label = 27; break; }
    case 26: 
      var $160=$CP;
      $RP=$160;
      var $161=HEAP32[(($160)>>2)];
      $R=$161;
      label = 23; break;
    case 27: 
      var $163=$RP;
      var $164=$163;
      var $165=$1;
      var $166=(($165+16)|0);
      var $167=HEAP32[(($166)>>2)];
      var $168=(($164)>>>(0)) >= (($167)>>>(0));
      var $169=(($168)&(1));
      var $170=($169);
      var $171=(($170)|(0))!=0;
      if ($171) { label = 28; break; } else { label = 29; break; }
    case 28: 
      var $173=$RP;
      HEAP32[(($173)>>2)]=0;
      label = 30; break;
    case 29: 
      _abort();
      throw "Reached an unreachable!";
    case 30: 
      label = 31; break;
    case 31: 
      label = 32; break;
    case 32: 
      var $178=$XP;
      var $179=(($178)|(0))!=0;
      if ($179) { label = 33; break; } else { label = 60; break; }
    case 33: 
      var $181=$tp;
      var $182=(($181+28)|0);
      var $183=HEAP32[(($182)>>2)];
      var $184=$1;
      var $185=(($184+304)|0);
      var $186=(($185+($183<<2))|0);
      $H=$186;
      var $187=$tp;
      var $188=$H;
      var $189=HEAP32[(($188)>>2)];
      var $190=(($187)|(0))==(($189)|(0));
      if ($190) { label = 34; break; } else { label = 37; break; }
    case 34: 
      var $192=$R;
      var $193=$H;
      HEAP32[(($193)>>2)]=$192;
      var $194=(($192)|(0))==0;
      if ($194) { label = 35; break; } else { label = 36; break; }
    case 35: 
      var $196=$tp;
      var $197=(($196+28)|0);
      var $198=HEAP32[(($197)>>2)];
      var $199=1 << $198;
      var $200=$199 ^ -1;
      var $201=$1;
      var $202=(($201+4)|0);
      var $203=HEAP32[(($202)>>2)];
      var $204=$203 & $200;
      HEAP32[(($202)>>2)]=$204;
      label = 36; break;
    case 36: 
      label = 44; break;
    case 37: 
      var $207=$XP;
      var $208=$207;
      var $209=$1;
      var $210=(($209+16)|0);
      var $211=HEAP32[(($210)>>2)];
      var $212=(($208)>>>(0)) >= (($211)>>>(0));
      var $213=(($212)&(1));
      var $214=($213);
      var $215=(($214)|(0))!=0;
      if ($215) { label = 38; break; } else { label = 42; break; }
    case 38: 
      var $217=$XP;
      var $218=(($217+16)|0);
      var $219=(($218)|0);
      var $220=HEAP32[(($219)>>2)];
      var $221=$tp;
      var $222=(($220)|(0))==(($221)|(0));
      if ($222) { label = 39; break; } else { label = 40; break; }
    case 39: 
      var $224=$R;
      var $225=$XP;
      var $226=(($225+16)|0);
      var $227=(($226)|0);
      HEAP32[(($227)>>2)]=$224;
      label = 41; break;
    case 40: 
      var $229=$R;
      var $230=$XP;
      var $231=(($230+16)|0);
      var $232=(($231+4)|0);
      HEAP32[(($232)>>2)]=$229;
      label = 41; break;
    case 41: 
      label = 43; break;
    case 42: 
      _abort();
      throw "Reached an unreachable!";
    case 43: 
      label = 44; break;
    case 44: 
      var $237=$R;
      var $238=(($237)|(0))!=0;
      if ($238) { label = 45; break; } else { label = 59; break; }
    case 45: 
      var $240=$R;
      var $241=$240;
      var $242=$1;
      var $243=(($242+16)|0);
      var $244=HEAP32[(($243)>>2)];
      var $245=(($241)>>>(0)) >= (($244)>>>(0));
      var $246=(($245)&(1));
      var $247=($246);
      var $248=(($247)|(0))!=0;
      if ($248) { label = 46; break; } else { label = 57; break; }
    case 46: 
      var $250=$XP;
      var $251=$R;
      var $252=(($251+24)|0);
      HEAP32[(($252)>>2)]=$250;
      var $253=$tp;
      var $254=(($253+16)|0);
      var $255=(($254)|0);
      var $256=HEAP32[(($255)>>2)];
      $C0=$256;
      var $257=(($256)|(0))!=0;
      if ($257) { label = 47; break; } else { label = 51; break; }
    case 47: 
      var $259=$C0;
      var $260=$259;
      var $261=$1;
      var $262=(($261+16)|0);
      var $263=HEAP32[(($262)>>2)];
      var $264=(($260)>>>(0)) >= (($263)>>>(0));
      var $265=(($264)&(1));
      var $266=($265);
      var $267=(($266)|(0))!=0;
      if ($267) { label = 48; break; } else { label = 49; break; }
    case 48: 
      var $269=$C0;
      var $270=$R;
      var $271=(($270+16)|0);
      var $272=(($271)|0);
      HEAP32[(($272)>>2)]=$269;
      var $273=$R;
      var $274=$C0;
      var $275=(($274+24)|0);
      HEAP32[(($275)>>2)]=$273;
      label = 50; break;
    case 49: 
      _abort();
      throw "Reached an unreachable!";
    case 50: 
      label = 51; break;
    case 51: 
      var $279=$tp;
      var $280=(($279+16)|0);
      var $281=(($280+4)|0);
      var $282=HEAP32[(($281)>>2)];
      $C1=$282;
      var $283=(($282)|(0))!=0;
      if ($283) { label = 52; break; } else { label = 56; break; }
    case 52: 
      var $285=$C1;
      var $286=$285;
      var $287=$1;
      var $288=(($287+16)|0);
      var $289=HEAP32[(($288)>>2)];
      var $290=(($286)>>>(0)) >= (($289)>>>(0));
      var $291=(($290)&(1));
      var $292=($291);
      var $293=(($292)|(0))!=0;
      if ($293) { label = 53; break; } else { label = 54; break; }
    case 53: 
      var $295=$C1;
      var $296=$R;
      var $297=(($296+16)|0);
      var $298=(($297+4)|0);
      HEAP32[(($298)>>2)]=$295;
      var $299=$R;
      var $300=$C1;
      var $301=(($300+24)|0);
      HEAP32[(($301)>>2)]=$299;
      label = 55; break;
    case 54: 
      _abort();
      throw "Reached an unreachable!";
    case 55: 
      label = 56; break;
    case 56: 
      label = 58; break;
    case 57: 
      _abort();
      throw "Reached an unreachable!";
    case 58: 
      label = 59; break;
    case 59: 
      label = 60; break;
    case 60: 
      label = 61; break;
    case 61: 
      var $310=$psize;
      var $311=$310 >>> 8;
      $X=$311;
      var $312=$X;
      var $313=(($312)|(0))==0;
      if ($313) { label = 62; break; } else { label = 63; break; }
    case 62: 
      $I=0;
      label = 67; break;
    case 63: 
      var $316=$X;
      var $317=(($316)>>>(0)) > 65535;
      if ($317) { label = 64; break; } else { label = 65; break; }
    case 64: 
      $I=31;
      label = 66; break;
    case 65: 
      var $320=$X;
      $Y=$320;
      var $321=$Y;
      var $322=((($321)-(256))|0);
      var $323=$322 >>> 16;
      var $324=$323 & 8;
      $N=$324;
      var $325=$N;
      var $326=$Y;
      var $327=$326 << $325;
      $Y=$327;
      var $328=((($327)-(4096))|0);
      var $329=$328 >>> 16;
      var $330=$329 & 4;
      $K=$330;
      var $331=$K;
      var $332=$N;
      var $333=((($332)+($331))|0);
      $N=$333;
      var $334=$K;
      var $335=$Y;
      var $336=$335 << $334;
      $Y=$336;
      var $337=((($336)-(16384))|0);
      var $338=$337 >>> 16;
      var $339=$338 & 2;
      $K=$339;
      var $340=$N;
      var $341=((($340)+($339))|0);
      $N=$341;
      var $342=$N;
      var $343=(((14)-($342))|0);
      var $344=$K;
      var $345=$Y;
      var $346=$345 << $344;
      $Y=$346;
      var $347=$346 >>> 15;
      var $348=((($343)+($347))|0);
      $K=$348;
      var $349=$K;
      var $350=$349 << 1;
      var $351=$psize;
      var $352=$K;
      var $353=((($352)+(7))|0);
      var $354=$351 >>> (($353)>>>(0));
      var $355=$354 & 1;
      var $356=((($350)+($355))|0);
      $I=$356;
      label = 66; break;
    case 66: 
      label = 67; break;
    case 67: 
      var $359=$I;
      var $360=$1;
      var $361=(($360+304)|0);
      var $362=(($361+($359<<2))|0);
      $H1=$362;
      var $363=$I;
      var $364=$tp;
      var $365=(($364+28)|0);
      HEAP32[(($365)>>2)]=$363;
      var $366=$tp;
      var $367=(($366+16)|0);
      var $368=(($367+4)|0);
      HEAP32[(($368)>>2)]=0;
      var $369=$tp;
      var $370=(($369+16)|0);
      var $371=(($370)|0);
      HEAP32[(($371)>>2)]=0;
      var $372=$1;
      var $373=(($372+4)|0);
      var $374=HEAP32[(($373)>>2)];
      var $375=$I;
      var $376=1 << $375;
      var $377=$374 & $376;
      var $378=(($377)|(0))!=0;
      if ($378) { label = 69; break; } else { label = 68; break; }
    case 68: 
      var $380=$I;
      var $381=1 << $380;
      var $382=$1;
      var $383=(($382+4)|0);
      var $384=HEAP32[(($383)>>2)];
      var $385=$384 | $381;
      HEAP32[(($383)>>2)]=$385;
      var $386=$tp;
      var $387=$H1;
      HEAP32[(($387)>>2)]=$386;
      var $388=$H1;
      var $389=$388;
      var $390=$tp;
      var $391=(($390+24)|0);
      HEAP32[(($391)>>2)]=$389;
      var $392=$tp;
      var $393=$tp;
      var $394=(($393+12)|0);
      HEAP32[(($394)>>2)]=$392;
      var $395=$tp;
      var $396=(($395+8)|0);
      HEAP32[(($396)>>2)]=$392;
      label = 87; break;
    case 69: 
      var $398=$H1;
      var $399=HEAP32[(($398)>>2)];
      $T=$399;
      var $400=$psize;
      var $401=$I;
      var $402=(($401)|(0))==31;
      if ($402) { label = 70; break; } else { label = 71; break; }
    case 70: 
      var $411 = 0;label = 72; break;
    case 71: 
      var $405=$I;
      var $406=$405 >>> 1;
      var $407=((($406)+(8))|0);
      var $408=((($407)-(2))|0);
      var $409=(((31)-($408))|0);
      var $411 = $409;label = 72; break;
    case 72: 
      var $411;
      var $412=$400 << $411;
      $K2=$412;
      label = 73; break;
    case 73: 
      var $414=$T;
      var $415=(($414+4)|0);
      var $416=HEAP32[(($415)>>2)];
      var $417=$416 & -8;
      var $418=$psize;
      var $419=(($417)|(0))!=(($418)|(0));
      if ($419) { label = 74; break; } else { label = 80; break; }
    case 74: 
      var $421=$K2;
      var $422=$421 >>> 31;
      var $423=$422 & 1;
      var $424=$T;
      var $425=(($424+16)|0);
      var $426=(($425+($423<<2))|0);
      $C=$426;
      var $427=$K2;
      var $428=$427 << 1;
      $K2=$428;
      var $429=$C;
      var $430=HEAP32[(($429)>>2)];
      var $431=(($430)|(0))!=0;
      if ($431) { label = 75; break; } else { label = 76; break; }
    case 75: 
      var $433=$C;
      var $434=HEAP32[(($433)>>2)];
      $T=$434;
      label = 79; break;
    case 76: 
      var $436=$C;
      var $437=$436;
      var $438=$1;
      var $439=(($438+16)|0);
      var $440=HEAP32[(($439)>>2)];
      var $441=(($437)>>>(0)) >= (($440)>>>(0));
      var $442=(($441)&(1));
      var $443=($442);
      var $444=(($443)|(0))!=0;
      if ($444) { label = 77; break; } else { label = 78; break; }
    case 77: 
      var $446=$tp;
      var $447=$C;
      HEAP32[(($447)>>2)]=$446;
      var $448=$T;
      var $449=$tp;
      var $450=(($449+24)|0);
      HEAP32[(($450)>>2)]=$448;
      var $451=$tp;
      var $452=$tp;
      var $453=(($452+12)|0);
      HEAP32[(($453)>>2)]=$451;
      var $454=$tp;
      var $455=(($454+8)|0);
      HEAP32[(($455)>>2)]=$451;
      label = 86; break;
    case 78: 
      _abort();
      throw "Reached an unreachable!";
    case 79: 
      label = 85; break;
    case 80: 
      var $459=$T;
      var $460=(($459+8)|0);
      var $461=HEAP32[(($460)>>2)];
      $F3=$461;
      var $462=$T;
      var $463=$462;
      var $464=$1;
      var $465=(($464+16)|0);
      var $466=HEAP32[(($465)>>2)];
      var $467=(($463)>>>(0)) >= (($466)>>>(0));
      if ($467) { label = 81; break; } else { var $476 = 0;label = 82; break; }
    case 81: 
      var $469=$F3;
      var $470=$469;
      var $471=$1;
      var $472=(($471+16)|0);
      var $473=HEAP32[(($472)>>2)];
      var $474=(($470)>>>(0)) >= (($473)>>>(0));
      var $476 = $474;label = 82; break;
    case 82: 
      var $476;
      var $477=(($476)&(1));
      var $478=($477);
      var $479=(($478)|(0))!=0;
      if ($479) { label = 83; break; } else { label = 84; break; }
    case 83: 
      var $481=$tp;
      var $482=$F3;
      var $483=(($482+12)|0);
      HEAP32[(($483)>>2)]=$481;
      var $484=$T;
      var $485=(($484+8)|0);
      HEAP32[(($485)>>2)]=$481;
      var $486=$F3;
      var $487=$tp;
      var $488=(($487+8)|0);
      HEAP32[(($488)>>2)]=$486;
      var $489=$T;
      var $490=$tp;
      var $491=(($490+12)|0);
      HEAP32[(($491)>>2)]=$489;
      var $492=$tp;
      var $493=(($492+24)|0);
      HEAP32[(($493)>>2)]=0;
      label = 86; break;
    case 84: 
      _abort();
      throw "Reached an unreachable!";
    case 85: 
      label = 73; break;
    case 86: 
      label = 87; break;
    case 87: 
      label = 88; break;
    case 88: 
      label = 89; break;
    case 89: 
      var $500=$sp;
      $pred=$500;
      var $501=$next;
      $sp=$501;
      label = 2; break;
    case 90: 
      var $503=$nsegs;
      var $504=(($503)>>>(0)) > 4294967295;
      if ($504) { label = 91; break; } else { label = 92; break; }
    case 91: 
      var $506=$nsegs;
      var $509 = $506;label = 93; break;
    case 92: 
      var $509 = -1;label = 93; break;
    case 93: 
      var $509;
      var $510=$1;
      var $511=(($510+32)|0);
      HEAP32[(($511)>>2)]=$509;
      var $512=$released;
      return $512;
    default: assert(0, "bad label: " + label);
  }
}
function _realloc($oldmem, $bytes) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $mem;
      var $nb;
      var $oldp;
      var $m;
      var $newp;
      var $oc;
      $1=$oldmem;
      $2=$bytes;
      $mem=0;
      var $3=$1;
      var $4=(($3)|(0))==0;
      if ($4) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $6=$2;
      var $7=_malloc($6);
      $mem=$7;
      label = 18; break;
    case 3: 
      var $9=$2;
      var $10=(($9)>>>(0)) >= 4294967232;
      if ($10) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $12=___errno_location();
      HEAP32[(($12)>>2)]=12;
      label = 17; break;
    case 5: 
      var $14=$2;
      var $15=(($14)>>>(0)) < 11;
      if ($15) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $23 = 16;label = 8; break;
    case 7: 
      var $18=$2;
      var $19=((($18)+(4))|0);
      var $20=((($19)+(7))|0);
      var $21=$20 & -8;
      var $23 = $21;label = 8; break;
    case 8: 
      var $23;
      $nb=$23;
      var $24=$1;
      var $25=((($24)-(8))|0);
      var $26=$25;
      $oldp=$26;
      $m=__gm_;
      var $27=$m;
      var $28=$oldp;
      var $29=$nb;
      var $30=_try_realloc_chunk($27, $28, $29, 1);
      $newp=$30;
      var $31=$newp;
      var $32=(($31)|(0))!=0;
      if ($32) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $34=$newp;
      var $35=$34;
      var $36=(($35+8)|0);
      $mem=$36;
      label = 16; break;
    case 10: 
      var $38=$2;
      var $39=_malloc($38);
      $mem=$39;
      var $40=$mem;
      var $41=(($40)|(0))!=0;
      if ($41) { label = 11; break; } else { label = 15; break; }
    case 11: 
      var $43=$oldp;
      var $44=(($43+4)|0);
      var $45=HEAP32[(($44)>>2)];
      var $46=$45 & -8;
      var $47=$oldp;
      var $48=(($47+4)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=$49 & 3;
      var $51=(($50)|(0))==0;
      var $52=$51 ? 8 : 4;
      var $53=((($46)-($52))|0);
      $oc=$53;
      var $54=$mem;
      var $55=$1;
      var $56=$oc;
      var $57=$2;
      var $58=(($56)>>>(0)) < (($57)>>>(0));
      if ($58) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $60=$oc;
      var $64 = $60;label = 14; break;
    case 13: 
      var $62=$2;
      var $64 = $62;label = 14; break;
    case 14: 
      var $64;
      assert($64 % 1 === 0);_memcpy($54, $55, $64);
      var $65=$1;
      _free($65);
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      label = 18; break;
    case 18: 
      var $70=$mem;
      return $70;
    default: assert(0, "bad label: " + label);
  }
}
Module["_realloc"] = _realloc;
function _try_realloc_chunk($m, $p, $nb, $can_move) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $newp;
      var $oldsize;
      var $next;
      var $rsize;
      var $r;
      var $newsize;
      var $newtopsize;
      var $newtop;
      var $dvs;
      var $dsize;
      var $r1;
      var $n;
      var $newsize2;
      var $nextsize;
      var $rsize3;
      var $F;
      var $B;
      var $I;
      var $TP;
      var $XP;
      var $R;
      var $F4;
      var $RP;
      var $CP;
      var $H;
      var $C0;
      var $C1;
      var $newsize5;
      var $r6;
      $1=$m;
      $2=$p;
      $3=$nb;
      $4=$can_move;
      $newp=0;
      var $5=$2;
      var $6=(($5+4)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=$7 & -8;
      $oldsize=$8;
      var $9=$2;
      var $10=$9;
      var $11=$oldsize;
      var $12=(($10+$11)|0);
      var $13=$12;
      $next=$13;
      var $14=$2;
      var $15=$14;
      var $16=$1;
      var $17=(($16+16)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($15)>>>(0)) >= (($18)>>>(0));
      if ($19) { label = 2; break; } else { var $39 = 0;label = 5; break; }
    case 2: 
      var $21=$2;
      var $22=(($21+4)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=$23 & 3;
      var $25=(($24)|(0))!=1;
      if ($25) { label = 3; break; } else { var $39 = 0;label = 5; break; }
    case 3: 
      var $27=$2;
      var $28=$27;
      var $29=$next;
      var $30=$29;
      var $31=(($28)>>>(0)) < (($30)>>>(0));
      if ($31) { label = 4; break; } else { var $39 = 0;label = 5; break; }
    case 4: 
      var $33=$next;
      var $34=(($33+4)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=$35 & 1;
      var $37=(($36)|(0))!=0;
      var $39 = $37;label = 5; break;
    case 5: 
      var $39;
      var $40=(($39)&(1));
      var $41=($40);
      var $42=(($41)|(0))!=0;
      if ($42) { label = 6; break; } else { label = 103; break; }
    case 6: 
      var $44=$2;
      var $45=(($44+4)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=$46 & 3;
      var $48=(($47)|(0))==0;
      if ($48) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $50=$1;
      var $51=$2;
      var $52=$3;
      var $53=$4;
      var $54=_mmap_resize($50, $51, $52, $53);
      $newp=$54;
      label = 102; break;
    case 8: 
      var $56=$oldsize;
      var $57=$3;
      var $58=(($56)>>>(0)) >= (($57)>>>(0));
      if ($58) { label = 9; break; } else { label = 12; break; }
    case 9: 
      var $60=$oldsize;
      var $61=$3;
      var $62=((($60)-($61))|0);
      $rsize=$62;
      var $63=$rsize;
      var $64=(($63)>>>(0)) >= 16;
      if ($64) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $66=$2;
      var $67=$66;
      var $68=$3;
      var $69=(($67+$68)|0);
      var $70=$69;
      $r=$70;
      var $71=$2;
      var $72=(($71+4)|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=$73 & 1;
      var $75=$3;
      var $76=$74 | $75;
      var $77=$76 | 2;
      var $78=$2;
      var $79=(($78+4)|0);
      HEAP32[(($79)>>2)]=$77;
      var $80=$2;
      var $81=$80;
      var $82=$3;
      var $83=(($81+$82)|0);
      var $84=$83;
      var $85=(($84+4)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=$86 | 1;
      HEAP32[(($85)>>2)]=$87;
      var $88=$r;
      var $89=(($88+4)|0);
      var $90=HEAP32[(($89)>>2)];
      var $91=$90 & 1;
      var $92=$rsize;
      var $93=$91 | $92;
      var $94=$93 | 2;
      var $95=$r;
      var $96=(($95+4)|0);
      HEAP32[(($96)>>2)]=$94;
      var $97=$r;
      var $98=$97;
      var $99=$rsize;
      var $100=(($98+$99)|0);
      var $101=$100;
      var $102=(($101+4)|0);
      var $103=HEAP32[(($102)>>2)];
      var $104=$103 | 1;
      HEAP32[(($102)>>2)]=$104;
      var $105=$1;
      var $106=$r;
      var $107=$rsize;
      _dispose_chunk($105, $106, $107);
      label = 11; break;
    case 11: 
      var $109=$2;
      $newp=$109;
      label = 101; break;
    case 12: 
      var $111=$next;
      var $112=$1;
      var $113=(($112+24)|0);
      var $114=HEAP32[(($113)>>2)];
      var $115=(($111)|(0))==(($114)|(0));
      if ($115) { label = 13; break; } else { label = 16; break; }
    case 13: 
      var $117=$oldsize;
      var $118=$1;
      var $119=(($118+12)|0);
      var $120=HEAP32[(($119)>>2)];
      var $121=((($117)+($120))|0);
      var $122=$3;
      var $123=(($121)>>>(0)) > (($122)>>>(0));
      if ($123) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $125=$oldsize;
      var $126=$1;
      var $127=(($126+12)|0);
      var $128=HEAP32[(($127)>>2)];
      var $129=((($125)+($128))|0);
      $newsize=$129;
      var $130=$newsize;
      var $131=$3;
      var $132=((($130)-($131))|0);
      $newtopsize=$132;
      var $133=$2;
      var $134=$133;
      var $135=$3;
      var $136=(($134+$135)|0);
      var $137=$136;
      $newtop=$137;
      var $138=$2;
      var $139=(($138+4)|0);
      var $140=HEAP32[(($139)>>2)];
      var $141=$140 & 1;
      var $142=$3;
      var $143=$141 | $142;
      var $144=$143 | 2;
      var $145=$2;
      var $146=(($145+4)|0);
      HEAP32[(($146)>>2)]=$144;
      var $147=$2;
      var $148=$147;
      var $149=$3;
      var $150=(($148+$149)|0);
      var $151=$150;
      var $152=(($151+4)|0);
      var $153=HEAP32[(($152)>>2)];
      var $154=$153 | 1;
      HEAP32[(($152)>>2)]=$154;
      var $155=$newtopsize;
      var $156=$155 | 1;
      var $157=$newtop;
      var $158=(($157+4)|0);
      HEAP32[(($158)>>2)]=$156;
      var $159=$newtop;
      var $160=$1;
      var $161=(($160+24)|0);
      HEAP32[(($161)>>2)]=$159;
      var $162=$newtopsize;
      var $163=$1;
      var $164=(($163+12)|0);
      HEAP32[(($164)>>2)]=$162;
      var $165=$2;
      $newp=$165;
      label = 15; break;
    case 15: 
      label = 100; break;
    case 16: 
      var $168=$next;
      var $169=$1;
      var $170=(($169+20)|0);
      var $171=HEAP32[(($170)>>2)];
      var $172=(($168)|(0))==(($171)|(0));
      if ($172) { label = 17; break; } else { label = 23; break; }
    case 17: 
      var $174=$1;
      var $175=(($174+8)|0);
      var $176=HEAP32[(($175)>>2)];
      $dvs=$176;
      var $177=$oldsize;
      var $178=$dvs;
      var $179=((($177)+($178))|0);
      var $180=$3;
      var $181=(($179)>>>(0)) >= (($180)>>>(0));
      if ($181) { label = 18; break; } else { label = 22; break; }
    case 18: 
      var $183=$oldsize;
      var $184=$dvs;
      var $185=((($183)+($184))|0);
      var $186=$3;
      var $187=((($185)-($186))|0);
      $dsize=$187;
      var $188=$dsize;
      var $189=(($188)>>>(0)) >= 16;
      if ($189) { label = 19; break; } else { label = 20; break; }
    case 19: 
      var $191=$2;
      var $192=$191;
      var $193=$3;
      var $194=(($192+$193)|0);
      var $195=$194;
      $r1=$195;
      var $196=$r1;
      var $197=$196;
      var $198=$dsize;
      var $199=(($197+$198)|0);
      var $200=$199;
      $n=$200;
      var $201=$2;
      var $202=(($201+4)|0);
      var $203=HEAP32[(($202)>>2)];
      var $204=$203 & 1;
      var $205=$3;
      var $206=$204 | $205;
      var $207=$206 | 2;
      var $208=$2;
      var $209=(($208+4)|0);
      HEAP32[(($209)>>2)]=$207;
      var $210=$2;
      var $211=$210;
      var $212=$3;
      var $213=(($211+$212)|0);
      var $214=$213;
      var $215=(($214+4)|0);
      var $216=HEAP32[(($215)>>2)];
      var $217=$216 | 1;
      HEAP32[(($215)>>2)]=$217;
      var $218=$dsize;
      var $219=$218 | 1;
      var $220=$r1;
      var $221=(($220+4)|0);
      HEAP32[(($221)>>2)]=$219;
      var $222=$dsize;
      var $223=$r1;
      var $224=$223;
      var $225=$dsize;
      var $226=(($224+$225)|0);
      var $227=$226;
      var $228=(($227)|0);
      HEAP32[(($228)>>2)]=$222;
      var $229=$n;
      var $230=(($229+4)|0);
      var $231=HEAP32[(($230)>>2)];
      var $232=$231 & -2;
      HEAP32[(($230)>>2)]=$232;
      var $233=$dsize;
      var $234=$1;
      var $235=(($234+8)|0);
      HEAP32[(($235)>>2)]=$233;
      var $236=$r1;
      var $237=$1;
      var $238=(($237+20)|0);
      HEAP32[(($238)>>2)]=$236;
      label = 21; break;
    case 20: 
      var $240=$oldsize;
      var $241=$dvs;
      var $242=((($240)+($241))|0);
      $newsize2=$242;
      var $243=$2;
      var $244=(($243+4)|0);
      var $245=HEAP32[(($244)>>2)];
      var $246=$245 & 1;
      var $247=$newsize2;
      var $248=$246 | $247;
      var $249=$248 | 2;
      var $250=$2;
      var $251=(($250+4)|0);
      HEAP32[(($251)>>2)]=$249;
      var $252=$2;
      var $253=$252;
      var $254=$newsize2;
      var $255=(($253+$254)|0);
      var $256=$255;
      var $257=(($256+4)|0);
      var $258=HEAP32[(($257)>>2)];
      var $259=$258 | 1;
      HEAP32[(($257)>>2)]=$259;
      var $260=$1;
      var $261=(($260+8)|0);
      HEAP32[(($261)>>2)]=0;
      var $262=$1;
      var $263=(($262+20)|0);
      HEAP32[(($263)>>2)]=0;
      label = 21; break;
    case 21: 
      var $265=$2;
      $newp=$265;
      label = 22; break;
    case 22: 
      label = 99; break;
    case 23: 
      var $268=$next;
      var $269=(($268+4)|0);
      var $270=HEAP32[(($269)>>2)];
      var $271=$270 & 2;
      var $272=(($271)|(0))!=0;
      if ($272) { label = 98; break; } else { label = 24; break; }
    case 24: 
      var $274=$next;
      var $275=(($274+4)|0);
      var $276=HEAP32[(($275)>>2)];
      var $277=$276 & -8;
      $nextsize=$277;
      var $278=$oldsize;
      var $279=$nextsize;
      var $280=((($278)+($279))|0);
      var $281=$3;
      var $282=(($280)>>>(0)) >= (($281)>>>(0));
      if ($282) { label = 25; break; } else { label = 97; break; }
    case 25: 
      var $284=$oldsize;
      var $285=$nextsize;
      var $286=((($284)+($285))|0);
      var $287=$3;
      var $288=((($286)-($287))|0);
      $rsize3=$288;
      var $289=$nextsize;
      var $290=$289 >>> 3;
      var $291=(($290)>>>(0)) < 32;
      if ($291) { label = 26; break; } else { label = 44; break; }
    case 26: 
      var $293=$next;
      var $294=(($293+8)|0);
      var $295=HEAP32[(($294)>>2)];
      $F=$295;
      var $296=$next;
      var $297=(($296+12)|0);
      var $298=HEAP32[(($297)>>2)];
      $B=$298;
      var $299=$nextsize;
      var $300=$299 >>> 3;
      $I=$300;
      var $301=$F;
      var $302=$I;
      var $303=$302 << 1;
      var $304=$1;
      var $305=(($304+40)|0);
      var $306=(($305+($303<<2))|0);
      var $307=$306;
      var $308=$307;
      var $309=(($301)|(0))==(($308)|(0));
      if ($309) { var $326 = 1;label = 30; break; } else { label = 27; break; }
    case 27: 
      var $311=$F;
      var $312=$311;
      var $313=$1;
      var $314=(($313+16)|0);
      var $315=HEAP32[(($314)>>2)];
      var $316=(($312)>>>(0)) >= (($315)>>>(0));
      if ($316) { label = 28; break; } else { var $324 = 0;label = 29; break; }
    case 28: 
      var $318=$F;
      var $319=(($318+12)|0);
      var $320=HEAP32[(($319)>>2)];
      var $321=$next;
      var $322=(($320)|(0))==(($321)|(0));
      var $324 = $322;label = 29; break;
    case 29: 
      var $324;
      var $326 = $324;label = 30; break;
    case 30: 
      var $326;
      var $327=(($326)&(1));
      var $328=($327);
      var $329=(($328)|(0))!=0;
      if ($329) { label = 31; break; } else { label = 42; break; }
    case 31: 
      var $331=$B;
      var $332=$F;
      var $333=(($331)|(0))==(($332)|(0));
      if ($333) { label = 32; break; } else { label = 33; break; }
    case 32: 
      var $335=$I;
      var $336=1 << $335;
      var $337=$336 ^ -1;
      var $338=$1;
      var $339=(($338)|0);
      var $340=HEAP32[(($339)>>2)];
      var $341=$340 & $337;
      HEAP32[(($339)>>2)]=$341;
      label = 41; break;
    case 33: 
      var $343=$B;
      var $344=$I;
      var $345=$344 << 1;
      var $346=$1;
      var $347=(($346+40)|0);
      var $348=(($347+($345<<2))|0);
      var $349=$348;
      var $350=$349;
      var $351=(($343)|(0))==(($350)|(0));
      if ($351) { var $368 = 1;label = 37; break; } else { label = 34; break; }
    case 34: 
      var $353=$B;
      var $354=$353;
      var $355=$1;
      var $356=(($355+16)|0);
      var $357=HEAP32[(($356)>>2)];
      var $358=(($354)>>>(0)) >= (($357)>>>(0));
      if ($358) { label = 35; break; } else { var $366 = 0;label = 36; break; }
    case 35: 
      var $360=$B;
      var $361=(($360+8)|0);
      var $362=HEAP32[(($361)>>2)];
      var $363=$next;
      var $364=(($362)|(0))==(($363)|(0));
      var $366 = $364;label = 36; break;
    case 36: 
      var $366;
      var $368 = $366;label = 37; break;
    case 37: 
      var $368;
      var $369=(($368)&(1));
      var $370=($369);
      var $371=(($370)|(0))!=0;
      if ($371) { label = 38; break; } else { label = 39; break; }
    case 38: 
      var $373=$B;
      var $374=$F;
      var $375=(($374+12)|0);
      HEAP32[(($375)>>2)]=$373;
      var $376=$F;
      var $377=$B;
      var $378=(($377+8)|0);
      HEAP32[(($378)>>2)]=$376;
      label = 40; break;
    case 39: 
      _abort();
      throw "Reached an unreachable!";
    case 40: 
      label = 41; break;
    case 41: 
      label = 43; break;
    case 42: 
      _abort();
      throw "Reached an unreachable!";
    case 43: 
      label = 93; break;
    case 44: 
      var $385=$next;
      var $386=$385;
      $TP=$386;
      var $387=$TP;
      var $388=(($387+24)|0);
      var $389=HEAP32[(($388)>>2)];
      $XP=$389;
      var $390=$TP;
      var $391=(($390+12)|0);
      var $392=HEAP32[(($391)>>2)];
      var $393=$TP;
      var $394=(($392)|(0))!=(($393)|(0));
      if ($394) { label = 45; break; } else { label = 52; break; }
    case 45: 
      var $396=$TP;
      var $397=(($396+8)|0);
      var $398=HEAP32[(($397)>>2)];
      $F4=$398;
      var $399=$TP;
      var $400=(($399+12)|0);
      var $401=HEAP32[(($400)>>2)];
      $R=$401;
      var $402=$F4;
      var $403=$402;
      var $404=$1;
      var $405=(($404+16)|0);
      var $406=HEAP32[(($405)>>2)];
      var $407=(($403)>>>(0)) >= (($406)>>>(0));
      if ($407) { label = 46; break; } else { var $421 = 0;label = 48; break; }
    case 46: 
      var $409=$F4;
      var $410=(($409+12)|0);
      var $411=HEAP32[(($410)>>2)];
      var $412=$TP;
      var $413=(($411)|(0))==(($412)|(0));
      if ($413) { label = 47; break; } else { var $421 = 0;label = 48; break; }
    case 47: 
      var $415=$R;
      var $416=(($415+8)|0);
      var $417=HEAP32[(($416)>>2)];
      var $418=$TP;
      var $419=(($417)|(0))==(($418)|(0));
      var $421 = $419;label = 48; break;
    case 48: 
      var $421;
      var $422=(($421)&(1));
      var $423=($422);
      var $424=(($423)|(0))!=0;
      if ($424) { label = 49; break; } else { label = 50; break; }
    case 49: 
      var $426=$R;
      var $427=$F4;
      var $428=(($427+12)|0);
      HEAP32[(($428)>>2)]=$426;
      var $429=$F4;
      var $430=$R;
      var $431=(($430+8)|0);
      HEAP32[(($431)>>2)]=$429;
      label = 51; break;
    case 50: 
      _abort();
      throw "Reached an unreachable!";
    case 51: 
      label = 64; break;
    case 52: 
      var $435=$TP;
      var $436=(($435+16)|0);
      var $437=(($436+4)|0);
      $RP=$437;
      var $438=HEAP32[(($437)>>2)];
      $R=$438;
      var $439=(($438)|(0))!=0;
      if ($439) { label = 54; break; } else { label = 53; break; }
    case 53: 
      var $441=$TP;
      var $442=(($441+16)|0);
      var $443=(($442)|0);
      $RP=$443;
      var $444=HEAP32[(($443)>>2)];
      $R=$444;
      var $445=(($444)|(0))!=0;
      if ($445) { label = 54; break; } else { label = 63; break; }
    case 54: 
      label = 55; break;
    case 55: 
      var $448=$R;
      var $449=(($448+16)|0);
      var $450=(($449+4)|0);
      $CP=$450;
      var $451=HEAP32[(($450)>>2)];
      var $452=(($451)|(0))!=0;
      if ($452) { var $460 = 1;label = 57; break; } else { label = 56; break; }
    case 56: 
      var $454=$R;
      var $455=(($454+16)|0);
      var $456=(($455)|0);
      $CP=$456;
      var $457=HEAP32[(($456)>>2)];
      var $458=(($457)|(0))!=0;
      var $460 = $458;label = 57; break;
    case 57: 
      var $460;
      if ($460) { label = 58; break; } else { label = 59; break; }
    case 58: 
      var $462=$CP;
      $RP=$462;
      var $463=HEAP32[(($462)>>2)];
      $R=$463;
      label = 55; break;
    case 59: 
      var $465=$RP;
      var $466=$465;
      var $467=$1;
      var $468=(($467+16)|0);
      var $469=HEAP32[(($468)>>2)];
      var $470=(($466)>>>(0)) >= (($469)>>>(0));
      var $471=(($470)&(1));
      var $472=($471);
      var $473=(($472)|(0))!=0;
      if ($473) { label = 60; break; } else { label = 61; break; }
    case 60: 
      var $475=$RP;
      HEAP32[(($475)>>2)]=0;
      label = 62; break;
    case 61: 
      _abort();
      throw "Reached an unreachable!";
    case 62: 
      label = 63; break;
    case 63: 
      label = 64; break;
    case 64: 
      var $480=$XP;
      var $481=(($480)|(0))!=0;
      if ($481) { label = 65; break; } else { label = 92; break; }
    case 65: 
      var $483=$TP;
      var $484=(($483+28)|0);
      var $485=HEAP32[(($484)>>2)];
      var $486=$1;
      var $487=(($486+304)|0);
      var $488=(($487+($485<<2))|0);
      $H=$488;
      var $489=$TP;
      var $490=$H;
      var $491=HEAP32[(($490)>>2)];
      var $492=(($489)|(0))==(($491)|(0));
      if ($492) { label = 66; break; } else { label = 69; break; }
    case 66: 
      var $494=$R;
      var $495=$H;
      HEAP32[(($495)>>2)]=$494;
      var $496=(($494)|(0))==0;
      if ($496) { label = 67; break; } else { label = 68; break; }
    case 67: 
      var $498=$TP;
      var $499=(($498+28)|0);
      var $500=HEAP32[(($499)>>2)];
      var $501=1 << $500;
      var $502=$501 ^ -1;
      var $503=$1;
      var $504=(($503+4)|0);
      var $505=HEAP32[(($504)>>2)];
      var $506=$505 & $502;
      HEAP32[(($504)>>2)]=$506;
      label = 68; break;
    case 68: 
      label = 76; break;
    case 69: 
      var $509=$XP;
      var $510=$509;
      var $511=$1;
      var $512=(($511+16)|0);
      var $513=HEAP32[(($512)>>2)];
      var $514=(($510)>>>(0)) >= (($513)>>>(0));
      var $515=(($514)&(1));
      var $516=($515);
      var $517=(($516)|(0))!=0;
      if ($517) { label = 70; break; } else { label = 74; break; }
    case 70: 
      var $519=$XP;
      var $520=(($519+16)|0);
      var $521=(($520)|0);
      var $522=HEAP32[(($521)>>2)];
      var $523=$TP;
      var $524=(($522)|(0))==(($523)|(0));
      if ($524) { label = 71; break; } else { label = 72; break; }
    case 71: 
      var $526=$R;
      var $527=$XP;
      var $528=(($527+16)|0);
      var $529=(($528)|0);
      HEAP32[(($529)>>2)]=$526;
      label = 73; break;
    case 72: 
      var $531=$R;
      var $532=$XP;
      var $533=(($532+16)|0);
      var $534=(($533+4)|0);
      HEAP32[(($534)>>2)]=$531;
      label = 73; break;
    case 73: 
      label = 75; break;
    case 74: 
      _abort();
      throw "Reached an unreachable!";
    case 75: 
      label = 76; break;
    case 76: 
      var $539=$R;
      var $540=(($539)|(0))!=0;
      if ($540) { label = 77; break; } else { label = 91; break; }
    case 77: 
      var $542=$R;
      var $543=$542;
      var $544=$1;
      var $545=(($544+16)|0);
      var $546=HEAP32[(($545)>>2)];
      var $547=(($543)>>>(0)) >= (($546)>>>(0));
      var $548=(($547)&(1));
      var $549=($548);
      var $550=(($549)|(0))!=0;
      if ($550) { label = 78; break; } else { label = 89; break; }
    case 78: 
      var $552=$XP;
      var $553=$R;
      var $554=(($553+24)|0);
      HEAP32[(($554)>>2)]=$552;
      var $555=$TP;
      var $556=(($555+16)|0);
      var $557=(($556)|0);
      var $558=HEAP32[(($557)>>2)];
      $C0=$558;
      var $559=(($558)|(0))!=0;
      if ($559) { label = 79; break; } else { label = 83; break; }
    case 79: 
      var $561=$C0;
      var $562=$561;
      var $563=$1;
      var $564=(($563+16)|0);
      var $565=HEAP32[(($564)>>2)];
      var $566=(($562)>>>(0)) >= (($565)>>>(0));
      var $567=(($566)&(1));
      var $568=($567);
      var $569=(($568)|(0))!=0;
      if ($569) { label = 80; break; } else { label = 81; break; }
    case 80: 
      var $571=$C0;
      var $572=$R;
      var $573=(($572+16)|0);
      var $574=(($573)|0);
      HEAP32[(($574)>>2)]=$571;
      var $575=$R;
      var $576=$C0;
      var $577=(($576+24)|0);
      HEAP32[(($577)>>2)]=$575;
      label = 82; break;
    case 81: 
      _abort();
      throw "Reached an unreachable!";
    case 82: 
      label = 83; break;
    case 83: 
      var $581=$TP;
      var $582=(($581+16)|0);
      var $583=(($582+4)|0);
      var $584=HEAP32[(($583)>>2)];
      $C1=$584;
      var $585=(($584)|(0))!=0;
      if ($585) { label = 84; break; } else { label = 88; break; }
    case 84: 
      var $587=$C1;
      var $588=$587;
      var $589=$1;
      var $590=(($589+16)|0);
      var $591=HEAP32[(($590)>>2)];
      var $592=(($588)>>>(0)) >= (($591)>>>(0));
      var $593=(($592)&(1));
      var $594=($593);
      var $595=(($594)|(0))!=0;
      if ($595) { label = 85; break; } else { label = 86; break; }
    case 85: 
      var $597=$C1;
      var $598=$R;
      var $599=(($598+16)|0);
      var $600=(($599+4)|0);
      HEAP32[(($600)>>2)]=$597;
      var $601=$R;
      var $602=$C1;
      var $603=(($602+24)|0);
      HEAP32[(($603)>>2)]=$601;
      label = 87; break;
    case 86: 
      _abort();
      throw "Reached an unreachable!";
    case 87: 
      label = 88; break;
    case 88: 
      label = 90; break;
    case 89: 
      _abort();
      throw "Reached an unreachable!";
    case 90: 
      label = 91; break;
    case 91: 
      label = 92; break;
    case 92: 
      label = 93; break;
    case 93: 
      var $612=$rsize3;
      var $613=(($612)>>>(0)) < 16;
      if ($613) { label = 94; break; } else { label = 95; break; }
    case 94: 
      var $615=$oldsize;
      var $616=$nextsize;
      var $617=((($615)+($616))|0);
      $newsize5=$617;
      var $618=$2;
      var $619=(($618+4)|0);
      var $620=HEAP32[(($619)>>2)];
      var $621=$620 & 1;
      var $622=$newsize5;
      var $623=$621 | $622;
      var $624=$623 | 2;
      var $625=$2;
      var $626=(($625+4)|0);
      HEAP32[(($626)>>2)]=$624;
      var $627=$2;
      var $628=$627;
      var $629=$newsize5;
      var $630=(($628+$629)|0);
      var $631=$630;
      var $632=(($631+4)|0);
      var $633=HEAP32[(($632)>>2)];
      var $634=$633 | 1;
      HEAP32[(($632)>>2)]=$634;
      label = 96; break;
    case 95: 
      var $636=$2;
      var $637=$636;
      var $638=$3;
      var $639=(($637+$638)|0);
      var $640=$639;
      $r6=$640;
      var $641=$2;
      var $642=(($641+4)|0);
      var $643=HEAP32[(($642)>>2)];
      var $644=$643 & 1;
      var $645=$3;
      var $646=$644 | $645;
      var $647=$646 | 2;
      var $648=$2;
      var $649=(($648+4)|0);
      HEAP32[(($649)>>2)]=$647;
      var $650=$2;
      var $651=$650;
      var $652=$3;
      var $653=(($651+$652)|0);
      var $654=$653;
      var $655=(($654+4)|0);
      var $656=HEAP32[(($655)>>2)];
      var $657=$656 | 1;
      HEAP32[(($655)>>2)]=$657;
      var $658=$r6;
      var $659=(($658+4)|0);
      var $660=HEAP32[(($659)>>2)];
      var $661=$660 & 1;
      var $662=$rsize3;
      var $663=$661 | $662;
      var $664=$663 | 2;
      var $665=$r6;
      var $666=(($665+4)|0);
      HEAP32[(($666)>>2)]=$664;
      var $667=$r6;
      var $668=$667;
      var $669=$rsize3;
      var $670=(($668+$669)|0);
      var $671=$670;
      var $672=(($671+4)|0);
      var $673=HEAP32[(($672)>>2)];
      var $674=$673 | 1;
      HEAP32[(($672)>>2)]=$674;
      var $675=$1;
      var $676=$r6;
      var $677=$rsize3;
      _dispose_chunk($675, $676, $677);
      label = 96; break;
    case 96: 
      var $679=$2;
      $newp=$679;
      label = 97; break;
    case 97: 
      label = 98; break;
    case 98: 
      label = 99; break;
    case 99: 
      label = 100; break;
    case 100: 
      label = 101; break;
    case 101: 
      label = 102; break;
    case 102: 
      label = 104; break;
    case 103: 
      _abort();
      throw "Reached an unreachable!";
    case 104: 
      var $688=$newp;
      return $688;
    default: assert(0, "bad label: " + label);
  }
}
function _realloc_in_place($oldmem, $bytes) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $mem;
      var $nb;
      var $oldp;
      var $m;
      var $newp;
      $1=$oldmem;
      $2=$bytes;
      $mem=0;
      var $3=$1;
      var $4=(($3)|(0))!=0;
      if ($4) { label = 2; break; } else { label = 11; break; }
    case 2: 
      var $6=$2;
      var $7=(($6)>>>(0)) >= 4294967232;
      if ($7) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $9=___errno_location();
      HEAP32[(($9)>>2)]=12;
      label = 10; break;
    case 4: 
      var $11=$2;
      var $12=(($11)>>>(0)) < 11;
      if ($12) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $20 = 16;label = 7; break;
    case 6: 
      var $15=$2;
      var $16=((($15)+(4))|0);
      var $17=((($16)+(7))|0);
      var $18=$17 & -8;
      var $20 = $18;label = 7; break;
    case 7: 
      var $20;
      $nb=$20;
      var $21=$1;
      var $22=((($21)-(8))|0);
      var $23=$22;
      $oldp=$23;
      $m=__gm_;
      var $24=$m;
      var $25=$oldp;
      var $26=$nb;
      var $27=_try_realloc_chunk($24, $25, $26, 0);
      $newp=$27;
      var $28=$newp;
      var $29=$oldp;
      var $30=(($28)|(0))==(($29)|(0));
      if ($30) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $32=$1;
      $mem=$32;
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $36=$mem;
      return $36;
    default: assert(0, "bad label: " + label);
  }
}
function _memalign($alignment, $bytes) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $2=$alignment;
      $3=$bytes;
      var $4=$2;
      var $5=(($4)>>>(0)) <= 8;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $7=$3;
      var $8=_malloc($7);
      $1=$8;
      label = 4; break;
    case 3: 
      var $10=$2;
      var $11=$3;
      var $12=_internal_memalign(__gm_, $10, $11);
      $1=$12;
      label = 4; break;
    case 4: 
      var $14=$1;
      return $14;
    default: assert(0, "bad label: " + label);
  }
}
function _internal_memalign($m, $alignment, $bytes) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $mem;
      var $a;
      var $nb;
      var $req;
      var $p;
      var $br;
      var $pos;
      var $newp;
      var $leadsize;
      var $newsize;
      var $size;
      var $remainder_size;
      var $remainder;
      $1=$m;
      $2=$alignment;
      $3=$bytes;
      $mem=0;
      var $4=$2;
      var $5=(($4)>>>(0)) < 16;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $2=16;
      label = 3; break;
    case 3: 
      var $8=$2;
      var $9=$2;
      var $10=((($9)-(1))|0);
      var $11=$8 & $10;
      var $12=(($11)|(0))!=0;
      if ($12) { label = 4; break; } else { label = 8; break; }
    case 4: 
      $a=16;
      label = 5; break;
    case 5: 
      var $15=$a;
      var $16=$2;
      var $17=(($15)>>>(0)) < (($16)>>>(0));
      if ($17) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $19=$a;
      var $20=$19 << 1;
      $a=$20;
      label = 5; break;
    case 7: 
      var $22=$a;
      $2=$22;
      label = 8; break;
    case 8: 
      var $24=$3;
      var $25=$2;
      var $26=(((-64)-($25))|0);
      var $27=(($24)>>>(0)) >= (($26)>>>(0));
      if ($27) { label = 9; break; } else { label = 12; break; }
    case 9: 
      var $29=$1;
      var $30=(($29)|(0))!=0;
      if ($30) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $32=___errno_location();
      HEAP32[(($32)>>2)]=12;
      label = 11; break;
    case 11: 
      label = 30; break;
    case 12: 
      var $35=$3;
      var $36=(($35)>>>(0)) < 11;
      if ($36) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $44 = 16;label = 15; break;
    case 14: 
      var $39=$3;
      var $40=((($39)+(4))|0);
      var $41=((($40)+(7))|0);
      var $42=$41 & -8;
      var $44 = $42;label = 15; break;
    case 15: 
      var $44;
      $nb=$44;
      var $45=$nb;
      var $46=$2;
      var $47=((($45)+($46))|0);
      var $48=((($47)+(16))|0);
      var $49=((($48)-(4))|0);
      $req=$49;
      var $50=$req;
      var $51=_malloc($50);
      $mem=$51;
      var $52=$mem;
      var $53=(($52)|(0))!=0;
      if ($53) { label = 16; break; } else { label = 29; break; }
    case 16: 
      var $55=$mem;
      var $56=((($55)-(8))|0);
      var $57=$56;
      $p=$57;
      var $58=$mem;
      var $59=$58;
      var $60=$2;
      var $61=((($60)-(1))|0);
      var $62=$59 & $61;
      var $63=(($62)|(0))!=0;
      if ($63) { label = 17; break; } else { label = 24; break; }
    case 17: 
      var $65=$mem;
      var $66=$2;
      var $67=(($65+$66)|0);
      var $68=((($67)-(1))|0);
      var $69=$68;
      var $70=$2;
      var $71=(((-$70))|0);
      var $72=$69 & $71;
      var $73=$72;
      var $74=((($73)-(8))|0);
      var $75=$74;
      var $76=$75;
      $br=$76;
      var $77=$br;
      var $78=$p;
      var $79=$78;
      var $80=$77;
      var $81=$79;
      var $82=((($80)-($81))|0);
      var $83=(($82)>>>(0)) >= 16;
      if ($83) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $85=$br;
      var $91 = $85;label = 20; break;
    case 19: 
      var $87=$br;
      var $88=$2;
      var $89=(($87+$88)|0);
      var $91 = $89;label = 20; break;
    case 20: 
      var $91;
      $pos=$91;
      var $92=$pos;
      var $93=$92;
      $newp=$93;
      var $94=$pos;
      var $95=$p;
      var $96=$95;
      var $97=$94;
      var $98=$96;
      var $99=((($97)-($98))|0);
      $leadsize=$99;
      var $100=$p;
      var $101=(($100+4)|0);
      var $102=HEAP32[(($101)>>2)];
      var $103=$102 & -8;
      var $104=$leadsize;
      var $105=((($103)-($104))|0);
      $newsize=$105;
      var $106=$p;
      var $107=(($106+4)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=$108 & 3;
      var $110=(($109)|(0))==0;
      if ($110) { label = 21; break; } else { label = 22; break; }
    case 21: 
      var $112=$p;
      var $113=(($112)|0);
      var $114=HEAP32[(($113)>>2)];
      var $115=$leadsize;
      var $116=((($114)+($115))|0);
      var $117=$newp;
      var $118=(($117)|0);
      HEAP32[(($118)>>2)]=$116;
      var $119=$newsize;
      var $120=$newp;
      var $121=(($120+4)|0);
      HEAP32[(($121)>>2)]=$119;
      label = 23; break;
    case 22: 
      var $123=$newp;
      var $124=(($123+4)|0);
      var $125=HEAP32[(($124)>>2)];
      var $126=$125 & 1;
      var $127=$newsize;
      var $128=$126 | $127;
      var $129=$128 | 2;
      var $130=$newp;
      var $131=(($130+4)|0);
      HEAP32[(($131)>>2)]=$129;
      var $132=$newp;
      var $133=$132;
      var $134=$newsize;
      var $135=(($133+$134)|0);
      var $136=$135;
      var $137=(($136+4)|0);
      var $138=HEAP32[(($137)>>2)];
      var $139=$138 | 1;
      HEAP32[(($137)>>2)]=$139;
      var $140=$p;
      var $141=(($140+4)|0);
      var $142=HEAP32[(($141)>>2)];
      var $143=$142 & 1;
      var $144=$leadsize;
      var $145=$143 | $144;
      var $146=$145 | 2;
      var $147=$p;
      var $148=(($147+4)|0);
      HEAP32[(($148)>>2)]=$146;
      var $149=$p;
      var $150=$149;
      var $151=$leadsize;
      var $152=(($150+$151)|0);
      var $153=$152;
      var $154=(($153+4)|0);
      var $155=HEAP32[(($154)>>2)];
      var $156=$155 | 1;
      HEAP32[(($154)>>2)]=$156;
      var $157=$1;
      var $158=$p;
      var $159=$leadsize;
      _dispose_chunk($157, $158, $159);
      label = 23; break;
    case 23: 
      var $161=$newp;
      $p=$161;
      label = 24; break;
    case 24: 
      var $163=$p;
      var $164=(($163+4)|0);
      var $165=HEAP32[(($164)>>2)];
      var $166=$165 & 3;
      var $167=(($166)|(0))==0;
      if ($167) { label = 28; break; } else { label = 25; break; }
    case 25: 
      var $169=$p;
      var $170=(($169+4)|0);
      var $171=HEAP32[(($170)>>2)];
      var $172=$171 & -8;
      $size=$172;
      var $173=$size;
      var $174=$nb;
      var $175=((($174)+(16))|0);
      var $176=(($173)>>>(0)) > (($175)>>>(0));
      if ($176) { label = 26; break; } else { label = 27; break; }
    case 26: 
      var $178=$size;
      var $179=$nb;
      var $180=((($178)-($179))|0);
      $remainder_size=$180;
      var $181=$p;
      var $182=$181;
      var $183=$nb;
      var $184=(($182+$183)|0);
      var $185=$184;
      $remainder=$185;
      var $186=$p;
      var $187=(($186+4)|0);
      var $188=HEAP32[(($187)>>2)];
      var $189=$188 & 1;
      var $190=$nb;
      var $191=$189 | $190;
      var $192=$191 | 2;
      var $193=$p;
      var $194=(($193+4)|0);
      HEAP32[(($194)>>2)]=$192;
      var $195=$p;
      var $196=$195;
      var $197=$nb;
      var $198=(($196+$197)|0);
      var $199=$198;
      var $200=(($199+4)|0);
      var $201=HEAP32[(($200)>>2)];
      var $202=$201 | 1;
      HEAP32[(($200)>>2)]=$202;
      var $203=$remainder;
      var $204=(($203+4)|0);
      var $205=HEAP32[(($204)>>2)];
      var $206=$205 & 1;
      var $207=$remainder_size;
      var $208=$206 | $207;
      var $209=$208 | 2;
      var $210=$remainder;
      var $211=(($210+4)|0);
      HEAP32[(($211)>>2)]=$209;
      var $212=$remainder;
      var $213=$212;
      var $214=$remainder_size;
      var $215=(($213+$214)|0);
      var $216=$215;
      var $217=(($216+4)|0);
      var $218=HEAP32[(($217)>>2)];
      var $219=$218 | 1;
      HEAP32[(($217)>>2)]=$219;
      var $220=$1;
      var $221=$remainder;
      var $222=$remainder_size;
      _dispose_chunk($220, $221, $222);
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      var $225=$p;
      var $226=$225;
      var $227=(($226+8)|0);
      $mem=$227;
      label = 29; break;
    case 29: 
      label = 30; break;
    case 30: 
      var $230=$mem;
      return $230;
    default: assert(0, "bad label: " + label);
  }
}
function _posix_memalign($pp, $alignment, $bytes) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $mem;
      var $d;
      var $r;
      $2=$pp;
      $3=$alignment;
      $4=$bytes;
      $mem=0;
      var $5=$3;
      var $6=(($5)|(0))==8;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $8=$4;
      var $9=_malloc($8);
      $mem=$9;
      label = 13; break;
    case 3: 
      var $11=$3;
      var $12=Math.floor(((($11)>>>(0)))/(4));
      $d=$12;
      var $13=$3;
      var $14=((($13)>>>(0)))%(4);
      $r=$14;
      var $15=$r;
      var $16=(($15)|(0))!=0;
      if ($16) { label = 6; break; } else { label = 4; break; }
    case 4: 
      var $18=$d;
      var $19=(($18)|(0))==0;
      if ($19) { label = 6; break; } else { label = 5; break; }
    case 5: 
      var $21=$d;
      var $22=$d;
      var $23=((($22)-(1))|0);
      var $24=$21 & $23;
      var $25=(($24)|(0))!=0;
      if ($25) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=22;
      label = 16; break;
    case 7: 
      var $28=$4;
      var $29=$3;
      var $30=(((-64)-($29))|0);
      var $31=(($28)>>>(0)) <= (($30)>>>(0));
      if ($31) { label = 8; break; } else { label = 11; break; }
    case 8: 
      var $33=$3;
      var $34=(($33)>>>(0)) < 16;
      if ($34) { label = 9; break; } else { label = 10; break; }
    case 9: 
      $3=16;
      label = 10; break;
    case 10: 
      var $37=$3;
      var $38=$4;
      var $39=_internal_memalign(__gm_, $37, $38);
      $mem=$39;
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      var $43=$mem;
      var $44=(($43)|(0))==0;
      if ($44) { label = 14; break; } else { label = 15; break; }
    case 14: 
      $1=12;
      label = 16; break;
    case 15: 
      var $47=$mem;
      var $48=$2;
      HEAP32[(($48)>>2)]=$47;
      $1=0;
      label = 16; break;
    case 16: 
      var $50=$1;
      return $50;
    default: assert(0, "bad label: " + label);
  }
}
function _valloc($bytes) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $pagesz;
      $1=$bytes;
      var $2=HEAP32[((((_mparams)|0))>>2)];
      var $3=(($2)|(0))!=0;
      if ($3) { var $8 = 1;label = 3; break; } else { label = 2; break; }
    case 2: 
      var $5=_init_mparams();
      var $6=(($5)|(0))!=0;
      var $8 = $6;label = 3; break;
    case 3: 
      var $8;
      var $9=(($8)&(1));
      var $10=HEAP32[((((_mparams+4)|0))>>2)];
      $pagesz=$10;
      var $11=$pagesz;
      var $12=$1;
      var $13=_memalign($11, $12);
      return $13;
    default: assert(0, "bad label: " + label);
  }
}
function _pvalloc($bytes) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $pagesz;
      $1=$bytes;
      var $2=HEAP32[((((_mparams)|0))>>2)];
      var $3=(($2)|(0))!=0;
      if ($3) { var $8 = 1;label = 3; break; } else { label = 2; break; }
    case 2: 
      var $5=_init_mparams();
      var $6=(($5)|(0))!=0;
      var $8 = $6;label = 3; break;
    case 3: 
      var $8;
      var $9=(($8)&(1));
      var $10=HEAP32[((((_mparams+4)|0))>>2)];
      $pagesz=$10;
      var $11=$pagesz;
      var $12=$1;
      var $13=$pagesz;
      var $14=((($12)+($13))|0);
      var $15=((($14)-(1))|0);
      var $16=$pagesz;
      var $17=((($16)-(1))|0);
      var $18=$17 ^ -1;
      var $19=$15 & $18;
      var $20=_memalign($11, $19);
      return $20;
    default: assert(0, "bad label: " + label);
  }
}
function _independent_calloc($n_elements, $elem_size, $chunks) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  var $1;
  var $2;
  var $3;
  var $sz=__stackBase__;
  $1=$n_elements;
  $2=$elem_size;
  $3=$chunks;
  var $4=$2;
  HEAP32[(($sz)>>2)]=$4;
  var $5=$1;
  var $6=$3;
  var $7=_ialloc(__gm_, $5, $sz, 3, $6);
  STACKTOP = __stackBase__;
  return $7;
}
function _init_mparams() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $magic;
      var $psize;
      var $gsize;
      var $1=HEAP32[((((_mparams)|0))>>2)];
      var $2=(($1)|(0))==0;
      if ($2) { label = 2; break; } else { label = 6; break; }
    case 2: 
      var $4=_sysconf(8);
      $psize=$4;
      var $5=$psize;
      $gsize=$5;
      var $6=$gsize;
      var $7=$gsize;
      var $8=((($7)-(1))|0);
      var $9=$6 & $8;
      var $10=(($9)|(0))!=0;
      if ($10) { label = 4; break; } else { label = 3; break; }
    case 3: 
      var $12=$psize;
      var $13=$psize;
      var $14=((($13)-(1))|0);
      var $15=$12 & $14;
      var $16=(($15)|(0))!=0;
      if ($16) { label = 4; break; } else { label = 5; break; }
    case 4: 
      _abort();
      throw "Reached an unreachable!";
    case 5: 
      var $19=$gsize;
      HEAP32[((((_mparams+8)|0))>>2)]=$19;
      var $20=$psize;
      HEAP32[((((_mparams+4)|0))>>2)]=$20;
      HEAP32[((((_mparams+12)|0))>>2)]=-1;
      HEAP32[((((_mparams+16)|0))>>2)]=2097152;
      HEAP32[((((_mparams+20)|0))>>2)]=0;
      var $21=HEAP32[((((_mparams+20)|0))>>2)];
      HEAP32[((((__gm_+444)|0))>>2)]=$21;
      var $22=_time(0);
      var $23=$22 ^ 1431655765;
      $magic=$23;
      var $24=$magic;
      var $25=$24 | 8;
      $magic=$25;
      var $26=$magic;
      var $27=$26 & -8;
      $magic=$27;
      var $28=$magic;
      HEAP32[((((_mparams)|0))>>2)]=$28;
      label = 6; break;
    case 6: 
      return 1;
    default: assert(0, "bad label: " + label);
  }
}
function _malloc_footprint() {
  var label = 0;
  var $1=HEAP32[((((__gm_+432)|0))>>2)];
  return $1;
}
function _malloc_max_footprint() {
  var label = 0;
  var $1=HEAP32[((((__gm_+436)|0))>>2)];
  return $1;
}
function _malloc_footprint_limit() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $maf;
      var $1=HEAP32[((((__gm_+440)|0))>>2)];
      $maf=$1;
      var $2=$maf;
      var $3=(($2)|(0))==0;
      if ($3) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $8 = -1;label = 4; break;
    case 3: 
      var $6=$maf;
      var $8 = $6;label = 4; break;
    case 4: 
      var $8;
      return $8;
    default: assert(0, "bad label: " + label);
  }
}
function _malloc_set_footprint_limit($bytes) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $result;
      $1=$bytes;
      var $2=$1;
      var $3=(($2)|(0))==0;
      if ($3) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $5=HEAP32[((((_mparams+8)|0))>>2)];
      var $6=((($5)-(1))|0);
      var $7=((($6)+(1))|0);
      var $8=HEAP32[((((_mparams+8)|0))>>2)];
      var $9=((($8)-(1))|0);
      var $10=$9 ^ -1;
      var $11=$7 & $10;
      $result=$11;
      label = 3; break;
    case 3: 
      var $13=$1;
      var $14=(($13)|(0))==-1;
      if ($14) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $result=0;
      label = 6; break;
    case 5: 
      var $17=$1;
      var $18=HEAP32[((((_mparams+8)|0))>>2)];
      var $19=((($18)-(1))|0);
      var $20=((($17)+($19))|0);
      var $21=HEAP32[((((_mparams+8)|0))>>2)];
      var $22=((($21)-(1))|0);
      var $23=$22 ^ -1;
      var $24=$20 & $23;
      $result=$24;
      label = 6; break;
    case 6: 
      var $26=$result;
      HEAP32[((((__gm_+440)|0))>>2)]=$26;
      return $26;
    default: assert(0, "bad label: " + label);
  }
}
function _ialloc($m, $n_elements, $sizes, $opts, $chunks) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $6;
      var $element_size;
      var $contents_size;
      var $array_size;
      var $mem;
      var $p;
      var $remainder_size;
      var $marray;
      var $array_chunk;
      var $was_enabled;
      var $size;
      var $i;
      var $array_chunk_size;
      $2=$m;
      $3=$n_elements;
      $4=$sizes;
      $5=$opts;
      $6=$chunks;
      var $7=HEAP32[((((_mparams)|0))>>2)];
      var $8=(($7)|(0))!=0;
      if ($8) { var $13 = 1;label = 3; break; } else { label = 2; break; }
    case 2: 
      var $10=_init_mparams();
      var $11=(($10)|(0))!=0;
      var $13 = $11;label = 3; break;
    case 3: 
      var $13;
      var $14=(($13)&(1));
      var $15=$6;
      var $16=(($15)|(0))!=0;
      if ($16) { label = 4; break; } else { label = 7; break; }
    case 4: 
      var $18=$3;
      var $19=(($18)|(0))==0;
      if ($19) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $21=$6;
      $1=$21;
      label = 47; break;
    case 6: 
      var $23=$6;
      $marray=$23;
      $array_size=0;
      label = 13; break;
    case 7: 
      var $25=$3;
      var $26=(($25)|(0))==0;
      if ($26) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $28=_malloc(0);
      var $29=$28;
      $1=$29;
      label = 47; break;
    case 9: 
      $marray=0;
      var $31=$3;
      var $32=($31<<2);
      var $33=(($32)>>>(0)) < 11;
      if ($33) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $42 = 16;label = 12; break;
    case 11: 
      var $36=$3;
      var $37=($36<<2);
      var $38=((($37)+(4))|0);
      var $39=((($38)+(7))|0);
      var $40=$39 & -8;
      var $42 = $40;label = 12; break;
    case 12: 
      var $42;
      $array_size=$42;
      label = 13; break;
    case 13: 
      var $44=$5;
      var $45=$44 & 1;
      var $46=(($45)|(0))!=0;
      if ($46) { label = 14; break; } else { label = 18; break; }
    case 14: 
      var $48=$4;
      var $49=HEAP32[(($48)>>2)];
      var $50=(($49)>>>(0)) < 11;
      if ($50) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $59 = 16;label = 17; break;
    case 16: 
      var $53=$4;
      var $54=HEAP32[(($53)>>2)];
      var $55=((($54)+(4))|0);
      var $56=((($55)+(7))|0);
      var $57=$56 & -8;
      var $59 = $57;label = 17; break;
    case 17: 
      var $59;
      $element_size=$59;
      var $60=$3;
      var $61=$element_size;
      var $62=Math.imul($60,$61);
      $contents_size=$62;
      label = 26; break;
    case 18: 
      $element_size=0;
      $contents_size=0;
      $i=0;
      label = 19; break;
    case 19: 
      var $65=$i;
      var $66=$3;
      var $67=(($65)|(0))!=(($66)|(0));
      if ($67) { label = 20; break; } else { label = 25; break; }
    case 20: 
      var $69=$i;
      var $70=$4;
      var $71=(($70+($69<<2))|0);
      var $72=HEAP32[(($71)>>2)];
      var $73=(($72)>>>(0)) < 11;
      if ($73) { label = 21; break; } else { label = 22; break; }
    case 21: 
      var $84 = 16;label = 23; break;
    case 22: 
      var $76=$i;
      var $77=$4;
      var $78=(($77+($76<<2))|0);
      var $79=HEAP32[(($78)>>2)];
      var $80=((($79)+(4))|0);
      var $81=((($80)+(7))|0);
      var $82=$81 & -8;
      var $84 = $82;label = 23; break;
    case 23: 
      var $84;
      var $85=$contents_size;
      var $86=((($85)+($84))|0);
      $contents_size=$86;
      label = 24; break;
    case 24: 
      var $88=$i;
      var $89=((($88)+(1))|0);
      $i=$89;
      label = 19; break;
    case 25: 
      label = 26; break;
    case 26: 
      var $92=$contents_size;
      var $93=$array_size;
      var $94=((($92)+($93))|0);
      $size=$94;
      var $95=$2;
      var $96=(($95+444)|0);
      var $97=HEAP32[(($96)>>2)];
      var $98=$97 & 0;
      $was_enabled=$98;
      var $99=$size;
      var $100=((($99)-(4))|0);
      var $101=_malloc($100);
      $mem=$101;
      var $102=$was_enabled;
      var $103=(($102)|(0))!=0;
      if ($103) { label = 27; break; } else { label = 28; break; }
    case 27: 
      var $105=$2;
      var $106=(($105+444)|0);
      var $107=HEAP32[(($106)>>2)];
      HEAP32[(($106)>>2)]=$107;
      label = 28; break;
    case 28: 
      var $109=$mem;
      var $110=(($109)|(0))==0;
      if ($110) { label = 29; break; } else { label = 30; break; }
    case 29: 
      $1=0;
      label = 47; break;
    case 30: 
      var $113=$mem;
      var $114=((($113)-(8))|0);
      var $115=$114;
      $p=$115;
      var $116=$p;
      var $117=(($116+4)|0);
      var $118=HEAP32[(($117)>>2)];
      var $119=$118 & -8;
      $remainder_size=$119;
      var $120=$5;
      var $121=$120 & 2;
      var $122=(($121)|(0))!=0;
      if ($122) { label = 31; break; } else { label = 32; break; }
    case 31: 
      var $124=$mem;
      var $125=$124;
      var $126=$125;
      var $127=$remainder_size;
      var $128=((($127)-(4))|0);
      var $129=$array_size;
      var $130=((($128)-($129))|0);
      _memset($126, 0, $130);
      label = 32; break;
    case 32: 
      var $132=$marray;
      var $133=(($132)|(0))==0;
      if ($133) { label = 33; break; } else { label = 34; break; }
    case 33: 
      var $135=$p;
      var $136=$135;
      var $137=$contents_size;
      var $138=(($136+$137)|0);
      var $139=$138;
      $array_chunk=$139;
      var $140=$remainder_size;
      var $141=$contents_size;
      var $142=((($140)-($141))|0);
      $array_chunk_size=$142;
      var $143=$array_chunk;
      var $144=$143;
      var $145=(($144+8)|0);
      var $146=$145;
      $marray=$146;
      var $147=$array_chunk_size;
      var $148=$147 | 1;
      var $149=$148 | 2;
      var $150=$array_chunk;
      var $151=(($150+4)|0);
      HEAP32[(($151)>>2)]=$149;
      var $152=$contents_size;
      $remainder_size=$152;
      label = 34; break;
    case 34: 
      $i=0;
      label = 35; break;
    case 35: 
      var $155=$p;
      var $156=$155;
      var $157=(($156+8)|0);
      var $158=$i;
      var $159=$marray;
      var $160=(($159+($158<<2))|0);
      HEAP32[(($160)>>2)]=$157;
      var $161=$i;
      var $162=$3;
      var $163=((($162)-(1))|0);
      var $164=(($161)|(0))!=(($163)|(0));
      if ($164) { label = 36; break; } else { label = 43; break; }
    case 36: 
      var $166=$element_size;
      var $167=(($166)|(0))!=0;
      if ($167) { label = 37; break; } else { label = 38; break; }
    case 37: 
      var $169=$element_size;
      $size=$169;
      label = 42; break;
    case 38: 
      var $171=$i;
      var $172=$4;
      var $173=(($172+($171<<2))|0);
      var $174=HEAP32[(($173)>>2)];
      var $175=(($174)>>>(0)) < 11;
      if ($175) { label = 39; break; } else { label = 40; break; }
    case 39: 
      var $186 = 16;label = 41; break;
    case 40: 
      var $178=$i;
      var $179=$4;
      var $180=(($179+($178<<2))|0);
      var $181=HEAP32[(($180)>>2)];
      var $182=((($181)+(4))|0);
      var $183=((($182)+(7))|0);
      var $184=$183 & -8;
      var $186 = $184;label = 41; break;
    case 41: 
      var $186;
      $size=$186;
      label = 42; break;
    case 42: 
      var $188=$size;
      var $189=$remainder_size;
      var $190=((($189)-($188))|0);
      $remainder_size=$190;
      var $191=$size;
      var $192=$191 | 1;
      var $193=$192 | 2;
      var $194=$p;
      var $195=(($194+4)|0);
      HEAP32[(($195)>>2)]=$193;
      var $196=$p;
      var $197=$196;
      var $198=$size;
      var $199=(($197+$198)|0);
      var $200=$199;
      $p=$200;
      label = 44; break;
    case 43: 
      var $202=$remainder_size;
      var $203=$202 | 1;
      var $204=$203 | 2;
      var $205=$p;
      var $206=(($205+4)|0);
      HEAP32[(($206)>>2)]=$204;
      label = 46; break;
    case 44: 
      label = 45; break;
    case 45: 
      var $209=$i;
      var $210=((($209)+(1))|0);
      $i=$210;
      label = 35; break;
    case 46: 
      var $212=$marray;
      $1=$212;
      label = 47; break;
    case 47: 
      var $214=$1;
      return $214;
    default: assert(0, "bad label: " + label);
  }
}
function _independent_comalloc($n_elements, $sizes, $chunks) {
  var label = 0;
  var $1;
  var $2;
  var $3;
  $1=$n_elements;
  $2=$sizes;
  $3=$chunks;
  var $4=$1;
  var $5=$2;
  var $6=$3;
  var $7=_ialloc(__gm_, $4, $5, 0, $6);
  return $7;
}
function _bulk_free($array, $nelem) {
  var label = 0;
  var $1;
  var $2;
  $1=$array;
  $2=$nelem;
  var $3=$1;
  var $4=$2;
  var $5=_internal_bulk_free(__gm_, $3, $4);
  return $5;
}
function _malloc_trim($pad) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $result;
      $1=$pad;
      $result=0;
      var $2=HEAP32[((((_mparams)|0))>>2)];
      var $3=(($2)|(0))!=0;
      if ($3) { var $8 = 1;label = 3; break; } else { label = 2; break; }
    case 2: 
      var $5=_init_mparams();
      var $6=(($5)|(0))!=0;
      var $8 = $6;label = 3; break;
    case 3: 
      var $8;
      var $9=(($8)&(1));
      var $10=$1;
      var $11=_sys_trim(__gm_, $10);
      $result=$11;
      var $12=$result;
      return $12;
    default: assert(0, "bad label: " + label);
  }
}
function _mallinfo($agg_result) {
  var label = 0;
  _internal_mallinfo($agg_result, __gm_);
  return;
}
function _internal_mallinfo($agg_result, $m) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 40)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $nm=__stackBase__;
      var $nfree;
      var $mfree;
      var $sum;
      var $s;
      var $q;
      var $sz;
      $1=$m;
      var $2=$nm;
      _memset($2, 0, 40);
      var $3=HEAP32[((((_mparams)|0))>>2)];
      var $4=(($3)|(0))!=0;
      if ($4) { var $9 = 1;label = 3; break; } else { label = 2; break; }
    case 2: 
      var $6=_init_mparams();
      var $7=(($6)|(0))!=0;
      var $9 = $7;label = 3; break;
    case 3: 
      var $9;
      var $10=(($9)&(1));
      var $11=$1;
      var $12=(($11+24)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=(($13)|(0))!=0;
      if ($14) { label = 4; break; } else { label = 20; break; }
    case 4: 
      $nfree=1;
      var $16=$1;
      var $17=(($16+12)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=((($18)+(40))|0);
      $mfree=$19;
      var $20=$mfree;
      $sum=$20;
      var $21=$1;
      var $22=(($21+448)|0);
      $s=$22;
      label = 5; break;
    case 5: 
      var $24=$s;
      var $25=(($24)|(0))!=0;
      if ($25) { label = 6; break; } else { label = 19; break; }
    case 6: 
      var $27=$s;
      var $28=(($27)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=$s;
      var $31=(($30)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32+8)|0);
      var $34=$33;
      var $35=$34 & 7;
      var $36=(($35)|(0))==0;
      if ($36) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $48 = 0;label = 9; break;
    case 8: 
      var $39=$s;
      var $40=(($39)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=(($41+8)|0);
      var $43=$42;
      var $44=$43 & 7;
      var $45=(((8)-($44))|0);
      var $46=$45 & 7;
      var $48 = $46;label = 9; break;
    case 9: 
      var $48;
      var $49=(($29+$48)|0);
      var $50=$49;
      $q=$50;
      label = 10; break;
    case 10: 
      var $52=$q;
      var $53=$52;
      var $54=$s;
      var $55=(($54)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=(($53)>>>(0)) >= (($56)>>>(0));
      if ($57) { label = 11; break; } else { var $81 = 0;label = 14; break; }
    case 11: 
      var $59=$q;
      var $60=$59;
      var $61=$s;
      var $62=(($61)|0);
      var $63=HEAP32[(($62)>>2)];
      var $64=$s;
      var $65=(($64+4)|0);
      var $66=HEAP32[(($65)>>2)];
      var $67=(($63+$66)|0);
      var $68=(($60)>>>(0)) < (($67)>>>(0));
      if ($68) { label = 12; break; } else { var $81 = 0;label = 14; break; }
    case 12: 
      var $70=$q;
      var $71=$1;
      var $72=(($71+24)|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=(($70)|(0))!=(($73)|(0));
      if ($74) { label = 13; break; } else { var $81 = 0;label = 14; break; }
    case 13: 
      var $76=$q;
      var $77=(($76+4)|0);
      var $78=HEAP32[(($77)>>2)];
      var $79=(($78)|(0))!=7;
      var $81 = $79;label = 14; break;
    case 14: 
      var $81;
      if ($81) { label = 15; break; } else { label = 18; break; }
    case 15: 
      var $83=$q;
      var $84=(($83+4)|0);
      var $85=HEAP32[(($84)>>2)];
      var $86=$85 & -8;
      $sz=$86;
      var $87=$sz;
      var $88=$sum;
      var $89=((($88)+($87))|0);
      $sum=$89;
      var $90=$q;
      var $91=(($90+4)|0);
      var $92=HEAP32[(($91)>>2)];
      var $93=$92 & 3;
      var $94=(($93)|(0))!=1;
      if ($94) { label = 17; break; } else { label = 16; break; }
    case 16: 
      var $96=$sz;
      var $97=$mfree;
      var $98=((($97)+($96))|0);
      $mfree=$98;
      var $99=$nfree;
      var $100=((($99)+(1))|0);
      $nfree=$100;
      label = 17; break;
    case 17: 
      var $102=$q;
      var $103=$102;
      var $104=$q;
      var $105=(($104+4)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=$106 & -8;
      var $108=(($103+$107)|0);
      var $109=$108;
      $q=$109;
      label = 10; break;
    case 18: 
      var $111=$s;
      var $112=(($111+8)|0);
      var $113=HEAP32[(($112)>>2)];
      $s=$113;
      label = 5; break;
    case 19: 
      var $115=$sum;
      var $116=(($nm)|0);
      HEAP32[(($116)>>2)]=$115;
      var $117=$nfree;
      var $118=(($nm+4)|0);
      HEAP32[(($118)>>2)]=$117;
      var $119=$1;
      var $120=(($119+432)|0);
      var $121=HEAP32[(($120)>>2)];
      var $122=$sum;
      var $123=((($121)-($122))|0);
      var $124=(($nm+16)|0);
      HEAP32[(($124)>>2)]=$123;
      var $125=$1;
      var $126=(($125+436)|0);
      var $127=HEAP32[(($126)>>2)];
      var $128=(($nm+20)|0);
      HEAP32[(($128)>>2)]=$127;
      var $129=$1;
      var $130=(($129+432)|0);
      var $131=HEAP32[(($130)>>2)];
      var $132=$mfree;
      var $133=((($131)-($132))|0);
      var $134=(($nm+28)|0);
      HEAP32[(($134)>>2)]=$133;
      var $135=$mfree;
      var $136=(($nm+32)|0);
      HEAP32[(($136)>>2)]=$135;
      var $137=$1;
      var $138=(($137+12)|0);
      var $139=HEAP32[(($138)>>2)];
      var $140=(($nm+36)|0);
      HEAP32[(($140)>>2)]=$139;
      label = 20; break;
    case 20: 
      var $142=$agg_result;
      var $143=$nm;
      assert(40 % 1 === 0);_memcpy($142, $143, 40);
      STACKTOP = __stackBase__;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _malloc_stats() {
  var label = 0;
  _internal_malloc_stats(__gm_);
  return;
}
function _internal_bulk_free($m, $array, $nelem) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $unfreed;
      var $a;
      var $fence;
      var $mem;
      var $p;
      var $psize;
      var $b;
      var $next;
      var $newsize;
      $1=$m;
      $2=$array;
      $3=$nelem;
      $unfreed=0;
      var $4=$3;
      var $5=$2;
      var $6=(($5+($4<<2))|0);
      $fence=$6;
      var $7=$2;
      $a=$7;
      label = 2; break;
    case 2: 
      var $9=$a;
      var $10=$fence;
      var $11=(($9)|(0))!=(($10)|(0));
      if ($11) { label = 3; break; } else { label = 16; break; }
    case 3: 
      var $13=$a;
      var $14=HEAP32[(($13)>>2)];
      $mem=$14;
      var $15=$mem;
      var $16=(($15)|(0))!=0;
      if ($16) { label = 4; break; } else { label = 14; break; }
    case 4: 
      var $18=$mem;
      var $19=((($18)-(8))|0);
      var $20=$19;
      $p=$20;
      var $21=$p;
      var $22=(($21+4)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=$23 & -8;
      $psize=$24;
      var $25=$a;
      HEAP32[(($25)>>2)]=0;
      var $26=$p;
      var $27=$26;
      var $28=$1;
      var $29=(($28+16)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=(($27)>>>(0)) >= (($30)>>>(0));
      if ($31) { label = 5; break; } else { var $39 = 0;label = 6; break; }
    case 5: 
      var $33=$p;
      var $34=(($33+4)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=$35 & 3;
      var $37=(($36)|(0))!=1;
      var $39 = $37;label = 6; break;
    case 6: 
      var $39;
      var $40=(($39)&(1));
      var $41=($40);
      var $42=(($41)|(0))!=0;
      if ($42) { label = 7; break; } else { label = 12; break; }
    case 7: 
      var $44=$a;
      var $45=(($44+4)|0);
      $b=$45;
      var $46=$p;
      var $47=$46;
      var $48=$p;
      var $49=(($48+4)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=$50 & -8;
      var $52=(($47+$51)|0);
      var $53=$52;
      $next=$53;
      var $54=$b;
      var $55=$fence;
      var $56=(($54)|(0))!=(($55)|(0));
      if ($56) { label = 8; break; } else { label = 10; break; }
    case 8: 
      var $58=$b;
      var $59=HEAP32[(($58)>>2)];
      var $60=$next;
      var $61=$60;
      var $62=(($61+8)|0);
      var $63=(($59)|(0))==(($62)|(0));
      if ($63) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $65=$next;
      var $66=(($65+4)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=$67 & -8;
      var $69=$psize;
      var $70=((($68)+($69))|0);
      $newsize=$70;
      var $71=$p;
      var $72=(($71+4)|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=$73 & 1;
      var $75=$newsize;
      var $76=$74 | $75;
      var $77=$76 | 2;
      var $78=$p;
      var $79=(($78+4)|0);
      HEAP32[(($79)>>2)]=$77;
      var $80=$p;
      var $81=$80;
      var $82=$newsize;
      var $83=(($81+$82)|0);
      var $84=$83;
      var $85=(($84+4)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=$86 | 1;
      HEAP32[(($85)>>2)]=$87;
      var $88=$p;
      var $89=$88;
      var $90=(($89+8)|0);
      var $91=$b;
      HEAP32[(($91)>>2)]=$90;
      label = 11; break;
    case 10: 
      var $93=$1;
      var $94=$p;
      var $95=$psize;
      _dispose_chunk($93, $94, $95);
      label = 11; break;
    case 11: 
      label = 13; break;
    case 12: 
      _abort();
      throw "Reached an unreachable!";
    case 13: 
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $101=$a;
      var $102=(($101+4)|0);
      $a=$102;
      label = 2; break;
    case 16: 
      var $104=$1;
      var $105=(($104+12)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=$1;
      var $108=(($107+28)|0);
      var $109=HEAP32[(($108)>>2)];
      var $110=(($106)>>>(0)) > (($109)>>>(0));
      if ($110) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $112=$1;
      var $113=_sys_trim($112, 0);
      label = 18; break;
    case 18: 
      var $115=$unfreed;
      return $115;
    default: assert(0, "bad label: " + label);
  }
}
function _malloc_usable_size($mem) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $p;
      $2=$mem;
      var $3=$2;
      var $4=(($3)|(0))!=0;
      if ($4) { label = 2; break; } else { label = 5; break; }
    case 2: 
      var $6=$2;
      var $7=((($6)-(8))|0);
      var $8=$7;
      $p=$8;
      var $9=$p;
      var $10=(($9+4)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=$11 & 3;
      var $13=(($12)|(0))!=1;
      if ($13) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $15=$p;
      var $16=(($15+4)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=$17 & -8;
      var $19=$p;
      var $20=(($19+4)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=$21 & 3;
      var $23=(($22)|(0))==0;
      var $24=$23 ? 8 : 4;
      var $25=((($18)-($24))|0);
      $1=$25;
      label = 6; break;
    case 4: 
      label = 5; break;
    case 5: 
      $1=0;
      label = 6; break;
    case 6: 
      var $29=$1;
      return $29;
    default: assert(0, "bad label: " + label);
  }
}
function _internal_malloc_stats($m) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $maxfp;
      var $fp;
      var $used;
      var $s;
      var $q;
      $1=$m;
      var $2=HEAP32[((((_mparams)|0))>>2)];
      var $3=(($2)|(0))!=0;
      if ($3) { var $8 = 1;label = 3; break; } else { label = 2; break; }
    case 2: 
      var $5=_init_mparams();
      var $6=(($5)|(0))!=0;
      var $8 = $6;label = 3; break;
    case 3: 
      var $8;
      var $9=(($8)&(1));
      $maxfp=0;
      $fp=0;
      $used=0;
      var $10=$1;
      var $11=(($10+24)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12)|(0))!=0;
      if ($13) { label = 4; break; } else { label = 20; break; }
    case 4: 
      var $15=$1;
      var $16=(($15+448)|0);
      $s=$16;
      var $17=$1;
      var $18=(($17+436)|0);
      var $19=HEAP32[(($18)>>2)];
      $maxfp=$19;
      var $20=$1;
      var $21=(($20+432)|0);
      var $22=HEAP32[(($21)>>2)];
      $fp=$22;
      var $23=$fp;
      var $24=$1;
      var $25=(($24+12)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=((($26)+(40))|0);
      var $28=((($23)-($27))|0);
      $used=$28;
      label = 5; break;
    case 5: 
      var $30=$s;
      var $31=(($30)|(0))!=0;
      if ($31) { label = 6; break; } else { label = 19; break; }
    case 6: 
      var $33=$s;
      var $34=(($33)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=$s;
      var $37=(($36)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=(($38+8)|0);
      var $40=$39;
      var $41=$40 & 7;
      var $42=(($41)|(0))==0;
      if ($42) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $54 = 0;label = 9; break;
    case 8: 
      var $45=$s;
      var $46=(($45)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=(($47+8)|0);
      var $49=$48;
      var $50=$49 & 7;
      var $51=(((8)-($50))|0);
      var $52=$51 & 7;
      var $54 = $52;label = 9; break;
    case 9: 
      var $54;
      var $55=(($35+$54)|0);
      var $56=$55;
      $q=$56;
      label = 10; break;
    case 10: 
      var $58=$q;
      var $59=$58;
      var $60=$s;
      var $61=(($60)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=(($59)>>>(0)) >= (($62)>>>(0));
      if ($63) { label = 11; break; } else { var $87 = 0;label = 14; break; }
    case 11: 
      var $65=$q;
      var $66=$65;
      var $67=$s;
      var $68=(($67)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=$s;
      var $71=(($70+4)|0);
      var $72=HEAP32[(($71)>>2)];
      var $73=(($69+$72)|0);
      var $74=(($66)>>>(0)) < (($73)>>>(0));
      if ($74) { label = 12; break; } else { var $87 = 0;label = 14; break; }
    case 12: 
      var $76=$q;
      var $77=$1;
      var $78=(($77+24)|0);
      var $79=HEAP32[(($78)>>2)];
      var $80=(($76)|(0))!=(($79)|(0));
      if ($80) { label = 13; break; } else { var $87 = 0;label = 14; break; }
    case 13: 
      var $82=$q;
      var $83=(($82+4)|0);
      var $84=HEAP32[(($83)>>2)];
      var $85=(($84)|(0))!=7;
      var $87 = $85;label = 14; break;
    case 14: 
      var $87;
      if ($87) { label = 15; break; } else { label = 18; break; }
    case 15: 
      var $89=$q;
      var $90=(($89+4)|0);
      var $91=HEAP32[(($90)>>2)];
      var $92=$91 & 3;
      var $93=(($92)|(0))!=1;
      if ($93) { label = 17; break; } else { label = 16; break; }
    case 16: 
      var $95=$q;
      var $96=(($95+4)|0);
      var $97=HEAP32[(($96)>>2)];
      var $98=$97 & -8;
      var $99=$used;
      var $100=((($99)-($98))|0);
      $used=$100;
      label = 17; break;
    case 17: 
      var $102=$q;
      var $103=$102;
      var $104=$q;
      var $105=(($104+4)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=$106 & -8;
      var $108=(($103+$107)|0);
      var $109=$108;
      $q=$109;
      label = 10; break;
    case 18: 
      var $111=$s;
      var $112=(($111+8)|0);
      var $113=HEAP32[(($112)>>2)];
      $s=$113;
      label = 5; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $116=HEAP32[((_stderr)>>2)];
      var $117=$maxfp;
      var $118=_fprintf($116, ((__str42)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$117,tempInt));
      var $119=HEAP32[((_stderr)>>2)];
      var $120=$fp;
      var $121=_fprintf($119, ((__str143)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$120,tempInt));
      var $122=HEAP32[((_stderr)>>2)];
      var $123=$used;
      var $124=_fprintf($122, ((__str244)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$123,tempInt));
      STACKTOP = __stackBase__;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _mallopt($param_number, $value) {
  var label = 0;
  var $1;
  var $2;
  $1=$param_number;
  $2=$value;
  var $3=$1;
  var $4=$2;
  var $5=_change_mparam($3, $4);
  return $5;
}
function _change_mparam($param_number, $value) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $val;
      $2=$param_number;
      $3=$value;
      var $4=HEAP32[((((_mparams)|0))>>2)];
      var $5=(($4)|(0))!=0;
      if ($5) { var $10 = 1;label = 3; break; } else { label = 2; break; }
    case 2: 
      var $7=_init_mparams();
      var $8=(($7)|(0))!=0;
      var $10 = $8;label = 3; break;
    case 3: 
      var $10;
      var $11=(($10)&(1));
      var $12=$3;
      var $13=(($12)|(0))==-1;
      if ($13) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $18 = -1;label = 6; break;
    case 5: 
      var $16=$3;
      var $18 = $16;label = 6; break;
    case 6: 
      var $18;
      $val=$18;
      var $19=$2;
      if ((($19)|(0))==-1) {
        label = 7; break;
      }
      else if ((($19)|(0))==-2) {
        label = 8; break;
      }
      else if ((($19)|(0))==-3) {
        label = 12; break;
      }
      else {
      label = 13; break;
      }
    case 7: 
      var $21=$val;
      HEAP32[((((_mparams+16)|0))>>2)]=$21;
      $1=1;
      label = 14; break;
    case 8: 
      var $23=$val;
      var $24=HEAP32[((((_mparams+4)|0))>>2)];
      var $25=(($23)>>>(0)) >= (($24)>>>(0));
      if ($25) { label = 9; break; } else { label = 11; break; }
    case 9: 
      var $27=$val;
      var $28=$val;
      var $29=((($28)-(1))|0);
      var $30=$27 & $29;
      var $31=(($30)|(0))==0;
      if ($31) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $33=$val;
      HEAP32[((((_mparams+8)|0))>>2)]=$33;
      $1=1;
      label = 14; break;
    case 11: 
      $1=0;
      label = 14; break;
    case 12: 
      var $36=$val;
      HEAP32[((((_mparams+12)|0))>>2)]=$36;
      $1=1;
      label = 14; break;
    case 13: 
      $1=0;
      label = 14; break;
    case 14: 
      var $39=$1;
      return $39;
    default: assert(0, "bad label: " + label);
  }
}
function _dispose_chunk($m, $p, $psize) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $next;
      var $prev;
      var $prevsize;
      var $F;
      var $B;
      var $I;
      var $TP;
      var $XP;
      var $R;
      var $F1;
      var $RP;
      var $CP;
      var $H;
      var $C0;
      var $C1;
      var $tsize;
      var $dsize;
      var $nsize;
      var $F2;
      var $B3;
      var $I4;
      var $TP5;
      var $XP6;
      var $R7;
      var $F8;
      var $RP9;
      var $CP10;
      var $H11;
      var $C012;
      var $C113;
      var $I14;
      var $B15;
      var $F16;
      var $TP17;
      var $H18;
      var $I19;
      var $X;
      var $Y;
      var $N;
      var $K;
      var $T;
      var $K20;
      var $C;
      var $F21;
      $1=$m;
      $2=$p;
      $3=$psize;
      var $4=$2;
      var $5=$4;
      var $6=$3;
      var $7=(($5+$6)|0);
      var $8=$7;
      $next=$8;
      var $9=$2;
      var $10=(($9+4)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=$11 & 1;
      var $13=(($12)|(0))!=0;
      if ($13) { label = 81; break; } else { label = 2; break; }
    case 2: 
      var $15=$2;
      var $16=(($15)|0);
      var $17=HEAP32[(($16)>>2)];
      $prevsize=$17;
      var $18=$2;
      var $19=(($18+4)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=$20 & 3;
      var $22=(($21)|(0))==0;
      if ($22) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $24=$prevsize;
      var $25=((($24)+(16))|0);
      var $26=$3;
      var $27=((($26)+($25))|0);
      $3=$27;
      label = 200; break;
    case 4: 
      var $29=$2;
      var $30=$29;
      var $31=$prevsize;
      var $32=(((-$31))|0);
      var $33=(($30+$32)|0);
      var $34=$33;
      $prev=$34;
      var $35=$prevsize;
      var $36=$3;
      var $37=((($36)+($35))|0);
      $3=$37;
      var $38=$prev;
      $2=$38;
      var $39=$prev;
      var $40=$39;
      var $41=$1;
      var $42=(($41+16)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=(($40)>>>(0)) >= (($43)>>>(0));
      var $45=(($44)&(1));
      var $46=($45);
      var $47=(($46)|(0))!=0;
      if ($47) { label = 5; break; } else { label = 79; break; }
    case 5: 
      var $49=$2;
      var $50=$1;
      var $51=(($50+20)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=(($49)|(0))!=(($52)|(0));
      if ($53) { label = 6; break; } else { label = 75; break; }
    case 6: 
      var $55=$prevsize;
      var $56=$55 >>> 3;
      var $57=(($56)>>>(0)) < 32;
      if ($57) { label = 7; break; } else { label = 25; break; }
    case 7: 
      var $59=$2;
      var $60=(($59+8)|0);
      var $61=HEAP32[(($60)>>2)];
      $F=$61;
      var $62=$2;
      var $63=(($62+12)|0);
      var $64=HEAP32[(($63)>>2)];
      $B=$64;
      var $65=$prevsize;
      var $66=$65 >>> 3;
      $I=$66;
      var $67=$F;
      var $68=$I;
      var $69=$68 << 1;
      var $70=$1;
      var $71=(($70+40)|0);
      var $72=(($71+($69<<2))|0);
      var $73=$72;
      var $74=$73;
      var $75=(($67)|(0))==(($74)|(0));
      if ($75) { var $92 = 1;label = 11; break; } else { label = 8; break; }
    case 8: 
      var $77=$F;
      var $78=$77;
      var $79=$1;
      var $80=(($79+16)|0);
      var $81=HEAP32[(($80)>>2)];
      var $82=(($78)>>>(0)) >= (($81)>>>(0));
      if ($82) { label = 9; break; } else { var $90 = 0;label = 10; break; }
    case 9: 
      var $84=$F;
      var $85=(($84+12)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=$2;
      var $88=(($86)|(0))==(($87)|(0));
      var $90 = $88;label = 10; break;
    case 10: 
      var $90;
      var $92 = $90;label = 11; break;
    case 11: 
      var $92;
      var $93=(($92)&(1));
      var $94=($93);
      var $95=(($94)|(0))!=0;
      if ($95) { label = 12; break; } else { label = 23; break; }
    case 12: 
      var $97=$B;
      var $98=$F;
      var $99=(($97)|(0))==(($98)|(0));
      if ($99) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $101=$I;
      var $102=1 << $101;
      var $103=$102 ^ -1;
      var $104=$1;
      var $105=(($104)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=$106 & $103;
      HEAP32[(($105)>>2)]=$107;
      label = 22; break;
    case 14: 
      var $109=$B;
      var $110=$I;
      var $111=$110 << 1;
      var $112=$1;
      var $113=(($112+40)|0);
      var $114=(($113+($111<<2))|0);
      var $115=$114;
      var $116=$115;
      var $117=(($109)|(0))==(($116)|(0));
      if ($117) { var $134 = 1;label = 18; break; } else { label = 15; break; }
    case 15: 
      var $119=$B;
      var $120=$119;
      var $121=$1;
      var $122=(($121+16)|0);
      var $123=HEAP32[(($122)>>2)];
      var $124=(($120)>>>(0)) >= (($123)>>>(0));
      if ($124) { label = 16; break; } else { var $132 = 0;label = 17; break; }
    case 16: 
      var $126=$B;
      var $127=(($126+8)|0);
      var $128=HEAP32[(($127)>>2)];
      var $129=$2;
      var $130=(($128)|(0))==(($129)|(0));
      var $132 = $130;label = 17; break;
    case 17: 
      var $132;
      var $134 = $132;label = 18; break;
    case 18: 
      var $134;
      var $135=(($134)&(1));
      var $136=($135);
      var $137=(($136)|(0))!=0;
      if ($137) { label = 19; break; } else { label = 20; break; }
    case 19: 
      var $139=$B;
      var $140=$F;
      var $141=(($140+12)|0);
      HEAP32[(($141)>>2)]=$139;
      var $142=$F;
      var $143=$B;
      var $144=(($143+8)|0);
      HEAP32[(($144)>>2)]=$142;
      label = 21; break;
    case 20: 
      _abort();
      throw "Reached an unreachable!";
    case 21: 
      label = 22; break;
    case 22: 
      label = 24; break;
    case 23: 
      _abort();
      throw "Reached an unreachable!";
    case 24: 
      label = 74; break;
    case 25: 
      var $151=$2;
      var $152=$151;
      $TP=$152;
      var $153=$TP;
      var $154=(($153+24)|0);
      var $155=HEAP32[(($154)>>2)];
      $XP=$155;
      var $156=$TP;
      var $157=(($156+12)|0);
      var $158=HEAP32[(($157)>>2)];
      var $159=$TP;
      var $160=(($158)|(0))!=(($159)|(0));
      if ($160) { label = 26; break; } else { label = 33; break; }
    case 26: 
      var $162=$TP;
      var $163=(($162+8)|0);
      var $164=HEAP32[(($163)>>2)];
      $F1=$164;
      var $165=$TP;
      var $166=(($165+12)|0);
      var $167=HEAP32[(($166)>>2)];
      $R=$167;
      var $168=$F1;
      var $169=$168;
      var $170=$1;
      var $171=(($170+16)|0);
      var $172=HEAP32[(($171)>>2)];
      var $173=(($169)>>>(0)) >= (($172)>>>(0));
      if ($173) { label = 27; break; } else { var $187 = 0;label = 29; break; }
    case 27: 
      var $175=$F1;
      var $176=(($175+12)|0);
      var $177=HEAP32[(($176)>>2)];
      var $178=$TP;
      var $179=(($177)|(0))==(($178)|(0));
      if ($179) { label = 28; break; } else { var $187 = 0;label = 29; break; }
    case 28: 
      var $181=$R;
      var $182=(($181+8)|0);
      var $183=HEAP32[(($182)>>2)];
      var $184=$TP;
      var $185=(($183)|(0))==(($184)|(0));
      var $187 = $185;label = 29; break;
    case 29: 
      var $187;
      var $188=(($187)&(1));
      var $189=($188);
      var $190=(($189)|(0))!=0;
      if ($190) { label = 30; break; } else { label = 31; break; }
    case 30: 
      var $192=$R;
      var $193=$F1;
      var $194=(($193+12)|0);
      HEAP32[(($194)>>2)]=$192;
      var $195=$F1;
      var $196=$R;
      var $197=(($196+8)|0);
      HEAP32[(($197)>>2)]=$195;
      label = 32; break;
    case 31: 
      _abort();
      throw "Reached an unreachable!";
    case 32: 
      label = 45; break;
    case 33: 
      var $201=$TP;
      var $202=(($201+16)|0);
      var $203=(($202+4)|0);
      $RP=$203;
      var $204=HEAP32[(($203)>>2)];
      $R=$204;
      var $205=(($204)|(0))!=0;
      if ($205) { label = 35; break; } else { label = 34; break; }
    case 34: 
      var $207=$TP;
      var $208=(($207+16)|0);
      var $209=(($208)|0);
      $RP=$209;
      var $210=HEAP32[(($209)>>2)];
      $R=$210;
      var $211=(($210)|(0))!=0;
      if ($211) { label = 35; break; } else { label = 44; break; }
    case 35: 
      label = 36; break;
    case 36: 
      var $214=$R;
      var $215=(($214+16)|0);
      var $216=(($215+4)|0);
      $CP=$216;
      var $217=HEAP32[(($216)>>2)];
      var $218=(($217)|(0))!=0;
      if ($218) { var $226 = 1;label = 38; break; } else { label = 37; break; }
    case 37: 
      var $220=$R;
      var $221=(($220+16)|0);
      var $222=(($221)|0);
      $CP=$222;
      var $223=HEAP32[(($222)>>2)];
      var $224=(($223)|(0))!=0;
      var $226 = $224;label = 38; break;
    case 38: 
      var $226;
      if ($226) { label = 39; break; } else { label = 40; break; }
    case 39: 
      var $228=$CP;
      $RP=$228;
      var $229=HEAP32[(($228)>>2)];
      $R=$229;
      label = 36; break;
    case 40: 
      var $231=$RP;
      var $232=$231;
      var $233=$1;
      var $234=(($233+16)|0);
      var $235=HEAP32[(($234)>>2)];
      var $236=(($232)>>>(0)) >= (($235)>>>(0));
      var $237=(($236)&(1));
      var $238=($237);
      var $239=(($238)|(0))!=0;
      if ($239) { label = 41; break; } else { label = 42; break; }
    case 41: 
      var $241=$RP;
      HEAP32[(($241)>>2)]=0;
      label = 43; break;
    case 42: 
      _abort();
      throw "Reached an unreachable!";
    case 43: 
      label = 44; break;
    case 44: 
      label = 45; break;
    case 45: 
      var $246=$XP;
      var $247=(($246)|(0))!=0;
      if ($247) { label = 46; break; } else { label = 73; break; }
    case 46: 
      var $249=$TP;
      var $250=(($249+28)|0);
      var $251=HEAP32[(($250)>>2)];
      var $252=$1;
      var $253=(($252+304)|0);
      var $254=(($253+($251<<2))|0);
      $H=$254;
      var $255=$TP;
      var $256=$H;
      var $257=HEAP32[(($256)>>2)];
      var $258=(($255)|(0))==(($257)|(0));
      if ($258) { label = 47; break; } else { label = 50; break; }
    case 47: 
      var $260=$R;
      var $261=$H;
      HEAP32[(($261)>>2)]=$260;
      var $262=(($260)|(0))==0;
      if ($262) { label = 48; break; } else { label = 49; break; }
    case 48: 
      var $264=$TP;
      var $265=(($264+28)|0);
      var $266=HEAP32[(($265)>>2)];
      var $267=1 << $266;
      var $268=$267 ^ -1;
      var $269=$1;
      var $270=(($269+4)|0);
      var $271=HEAP32[(($270)>>2)];
      var $272=$271 & $268;
      HEAP32[(($270)>>2)]=$272;
      label = 49; break;
    case 49: 
      label = 57; break;
    case 50: 
      var $275=$XP;
      var $276=$275;
      var $277=$1;
      var $278=(($277+16)|0);
      var $279=HEAP32[(($278)>>2)];
      var $280=(($276)>>>(0)) >= (($279)>>>(0));
      var $281=(($280)&(1));
      var $282=($281);
      var $283=(($282)|(0))!=0;
      if ($283) { label = 51; break; } else { label = 55; break; }
    case 51: 
      var $285=$XP;
      var $286=(($285+16)|0);
      var $287=(($286)|0);
      var $288=HEAP32[(($287)>>2)];
      var $289=$TP;
      var $290=(($288)|(0))==(($289)|(0));
      if ($290) { label = 52; break; } else { label = 53; break; }
    case 52: 
      var $292=$R;
      var $293=$XP;
      var $294=(($293+16)|0);
      var $295=(($294)|0);
      HEAP32[(($295)>>2)]=$292;
      label = 54; break;
    case 53: 
      var $297=$R;
      var $298=$XP;
      var $299=(($298+16)|0);
      var $300=(($299+4)|0);
      HEAP32[(($300)>>2)]=$297;
      label = 54; break;
    case 54: 
      label = 56; break;
    case 55: 
      _abort();
      throw "Reached an unreachable!";
    case 56: 
      label = 57; break;
    case 57: 
      var $305=$R;
      var $306=(($305)|(0))!=0;
      if ($306) { label = 58; break; } else { label = 72; break; }
    case 58: 
      var $308=$R;
      var $309=$308;
      var $310=$1;
      var $311=(($310+16)|0);
      var $312=HEAP32[(($311)>>2)];
      var $313=(($309)>>>(0)) >= (($312)>>>(0));
      var $314=(($313)&(1));
      var $315=($314);
      var $316=(($315)|(0))!=0;
      if ($316) { label = 59; break; } else { label = 70; break; }
    case 59: 
      var $318=$XP;
      var $319=$R;
      var $320=(($319+24)|0);
      HEAP32[(($320)>>2)]=$318;
      var $321=$TP;
      var $322=(($321+16)|0);
      var $323=(($322)|0);
      var $324=HEAP32[(($323)>>2)];
      $C0=$324;
      var $325=(($324)|(0))!=0;
      if ($325) { label = 60; break; } else { label = 64; break; }
    case 60: 
      var $327=$C0;
      var $328=$327;
      var $329=$1;
      var $330=(($329+16)|0);
      var $331=HEAP32[(($330)>>2)];
      var $332=(($328)>>>(0)) >= (($331)>>>(0));
      var $333=(($332)&(1));
      var $334=($333);
      var $335=(($334)|(0))!=0;
      if ($335) { label = 61; break; } else { label = 62; break; }
    case 61: 
      var $337=$C0;
      var $338=$R;
      var $339=(($338+16)|0);
      var $340=(($339)|0);
      HEAP32[(($340)>>2)]=$337;
      var $341=$R;
      var $342=$C0;
      var $343=(($342+24)|0);
      HEAP32[(($343)>>2)]=$341;
      label = 63; break;
    case 62: 
      _abort();
      throw "Reached an unreachable!";
    case 63: 
      label = 64; break;
    case 64: 
      var $347=$TP;
      var $348=(($347+16)|0);
      var $349=(($348+4)|0);
      var $350=HEAP32[(($349)>>2)];
      $C1=$350;
      var $351=(($350)|(0))!=0;
      if ($351) { label = 65; break; } else { label = 69; break; }
    case 65: 
      var $353=$C1;
      var $354=$353;
      var $355=$1;
      var $356=(($355+16)|0);
      var $357=HEAP32[(($356)>>2)];
      var $358=(($354)>>>(0)) >= (($357)>>>(0));
      var $359=(($358)&(1));
      var $360=($359);
      var $361=(($360)|(0))!=0;
      if ($361) { label = 66; break; } else { label = 67; break; }
    case 66: 
      var $363=$C1;
      var $364=$R;
      var $365=(($364+16)|0);
      var $366=(($365+4)|0);
      HEAP32[(($366)>>2)]=$363;
      var $367=$R;
      var $368=$C1;
      var $369=(($368+24)|0);
      HEAP32[(($369)>>2)]=$367;
      label = 68; break;
    case 67: 
      _abort();
      throw "Reached an unreachable!";
    case 68: 
      label = 69; break;
    case 69: 
      label = 71; break;
    case 70: 
      _abort();
      throw "Reached an unreachable!";
    case 71: 
      label = 72; break;
    case 72: 
      label = 73; break;
    case 73: 
      label = 74; break;
    case 74: 
      label = 78; break;
    case 75: 
      var $379=$next;
      var $380=(($379+4)|0);
      var $381=HEAP32[(($380)>>2)];
      var $382=$381 & 3;
      var $383=(($382)|(0))==3;
      if ($383) { label = 76; break; } else { label = 77; break; }
    case 76: 
      var $385=$3;
      var $386=$1;
      var $387=(($386+8)|0);
      HEAP32[(($387)>>2)]=$385;
      var $388=$next;
      var $389=(($388+4)|0);
      var $390=HEAP32[(($389)>>2)];
      var $391=$390 & -2;
      HEAP32[(($389)>>2)]=$391;
      var $392=$3;
      var $393=$392 | 1;
      var $394=$2;
      var $395=(($394+4)|0);
      HEAP32[(($395)>>2)]=$393;
      var $396=$3;
      var $397=$2;
      var $398=$397;
      var $399=$3;
      var $400=(($398+$399)|0);
      var $401=$400;
      var $402=(($401)|0);
      HEAP32[(($402)>>2)]=$396;
      label = 200; break;
    case 77: 
      label = 78; break;
    case 78: 
      label = 80; break;
    case 79: 
      _abort();
      throw "Reached an unreachable!";
    case 80: 
      label = 81; break;
    case 81: 
      var $408=$next;
      var $409=$408;
      var $410=$1;
      var $411=(($410+16)|0);
      var $412=HEAP32[(($411)>>2)];
      var $413=(($409)>>>(0)) >= (($412)>>>(0));
      var $414=(($413)&(1));
      var $415=($414);
      var $416=(($415)|(0))!=0;
      if ($416) { label = 82; break; } else { label = 199; break; }
    case 82: 
      var $418=$next;
      var $419=(($418+4)|0);
      var $420=HEAP32[(($419)>>2)];
      var $421=$420 & 2;
      var $422=(($421)|(0))!=0;
      if ($422) { label = 162; break; } else { label = 83; break; }
    case 83: 
      var $424=$next;
      var $425=$1;
      var $426=(($425+24)|0);
      var $427=HEAP32[(($426)>>2)];
      var $428=(($424)|(0))==(($427)|(0));
      if ($428) { label = 84; break; } else { label = 87; break; }
    case 84: 
      var $430=$3;
      var $431=$1;
      var $432=(($431+12)|0);
      var $433=HEAP32[(($432)>>2)];
      var $434=((($433)+($430))|0);
      HEAP32[(($432)>>2)]=$434;
      $tsize=$434;
      var $435=$2;
      var $436=$1;
      var $437=(($436+24)|0);
      HEAP32[(($437)>>2)]=$435;
      var $438=$tsize;
      var $439=$438 | 1;
      var $440=$2;
      var $441=(($440+4)|0);
      HEAP32[(($441)>>2)]=$439;
      var $442=$2;
      var $443=$1;
      var $444=(($443+20)|0);
      var $445=HEAP32[(($444)>>2)];
      var $446=(($442)|(0))==(($445)|(0));
      if ($446) { label = 85; break; } else { label = 86; break; }
    case 85: 
      var $448=$1;
      var $449=(($448+20)|0);
      HEAP32[(($449)>>2)]=0;
      var $450=$1;
      var $451=(($450+8)|0);
      HEAP32[(($451)>>2)]=0;
      label = 86; break;
    case 86: 
      label = 200; break;
    case 87: 
      var $454=$next;
      var $455=$1;
      var $456=(($455+20)|0);
      var $457=HEAP32[(($456)>>2)];
      var $458=(($454)|(0))==(($457)|(0));
      if ($458) { label = 88; break; } else { label = 89; break; }
    case 88: 
      var $460=$3;
      var $461=$1;
      var $462=(($461+8)|0);
      var $463=HEAP32[(($462)>>2)];
      var $464=((($463)+($460))|0);
      HEAP32[(($462)>>2)]=$464;
      $dsize=$464;
      var $465=$2;
      var $466=$1;
      var $467=(($466+20)|0);
      HEAP32[(($467)>>2)]=$465;
      var $468=$dsize;
      var $469=$468 | 1;
      var $470=$2;
      var $471=(($470+4)|0);
      HEAP32[(($471)>>2)]=$469;
      var $472=$dsize;
      var $473=$2;
      var $474=$473;
      var $475=$dsize;
      var $476=(($474+$475)|0);
      var $477=$476;
      var $478=(($477)|0);
      HEAP32[(($478)>>2)]=$472;
      label = 200; break;
    case 89: 
      var $480=$next;
      var $481=(($480+4)|0);
      var $482=HEAP32[(($481)>>2)];
      var $483=$482 & -8;
      $nsize=$483;
      var $484=$nsize;
      var $485=$3;
      var $486=((($485)+($484))|0);
      $3=$486;
      var $487=$nsize;
      var $488=$487 >>> 3;
      var $489=(($488)>>>(0)) < 32;
      if ($489) { label = 90; break; } else { label = 108; break; }
    case 90: 
      var $491=$next;
      var $492=(($491+8)|0);
      var $493=HEAP32[(($492)>>2)];
      $F2=$493;
      var $494=$next;
      var $495=(($494+12)|0);
      var $496=HEAP32[(($495)>>2)];
      $B3=$496;
      var $497=$nsize;
      var $498=$497 >>> 3;
      $I4=$498;
      var $499=$F2;
      var $500=$I4;
      var $501=$500 << 1;
      var $502=$1;
      var $503=(($502+40)|0);
      var $504=(($503+($501<<2))|0);
      var $505=$504;
      var $506=$505;
      var $507=(($499)|(0))==(($506)|(0));
      if ($507) { var $524 = 1;label = 94; break; } else { label = 91; break; }
    case 91: 
      var $509=$F2;
      var $510=$509;
      var $511=$1;
      var $512=(($511+16)|0);
      var $513=HEAP32[(($512)>>2)];
      var $514=(($510)>>>(0)) >= (($513)>>>(0));
      if ($514) { label = 92; break; } else { var $522 = 0;label = 93; break; }
    case 92: 
      var $516=$F2;
      var $517=(($516+12)|0);
      var $518=HEAP32[(($517)>>2)];
      var $519=$next;
      var $520=(($518)|(0))==(($519)|(0));
      var $522 = $520;label = 93; break;
    case 93: 
      var $522;
      var $524 = $522;label = 94; break;
    case 94: 
      var $524;
      var $525=(($524)&(1));
      var $526=($525);
      var $527=(($526)|(0))!=0;
      if ($527) { label = 95; break; } else { label = 106; break; }
    case 95: 
      var $529=$B3;
      var $530=$F2;
      var $531=(($529)|(0))==(($530)|(0));
      if ($531) { label = 96; break; } else { label = 97; break; }
    case 96: 
      var $533=$I4;
      var $534=1 << $533;
      var $535=$534 ^ -1;
      var $536=$1;
      var $537=(($536)|0);
      var $538=HEAP32[(($537)>>2)];
      var $539=$538 & $535;
      HEAP32[(($537)>>2)]=$539;
      label = 105; break;
    case 97: 
      var $541=$B3;
      var $542=$I4;
      var $543=$542 << 1;
      var $544=$1;
      var $545=(($544+40)|0);
      var $546=(($545+($543<<2))|0);
      var $547=$546;
      var $548=$547;
      var $549=(($541)|(0))==(($548)|(0));
      if ($549) { var $566 = 1;label = 101; break; } else { label = 98; break; }
    case 98: 
      var $551=$B3;
      var $552=$551;
      var $553=$1;
      var $554=(($553+16)|0);
      var $555=HEAP32[(($554)>>2)];
      var $556=(($552)>>>(0)) >= (($555)>>>(0));
      if ($556) { label = 99; break; } else { var $564 = 0;label = 100; break; }
    case 99: 
      var $558=$B3;
      var $559=(($558+8)|0);
      var $560=HEAP32[(($559)>>2)];
      var $561=$next;
      var $562=(($560)|(0))==(($561)|(0));
      var $564 = $562;label = 100; break;
    case 100: 
      var $564;
      var $566 = $564;label = 101; break;
    case 101: 
      var $566;
      var $567=(($566)&(1));
      var $568=($567);
      var $569=(($568)|(0))!=0;
      if ($569) { label = 102; break; } else { label = 103; break; }
    case 102: 
      var $571=$B3;
      var $572=$F2;
      var $573=(($572+12)|0);
      HEAP32[(($573)>>2)]=$571;
      var $574=$F2;
      var $575=$B3;
      var $576=(($575+8)|0);
      HEAP32[(($576)>>2)]=$574;
      label = 104; break;
    case 103: 
      _abort();
      throw "Reached an unreachable!";
    case 104: 
      label = 105; break;
    case 105: 
      label = 107; break;
    case 106: 
      _abort();
      throw "Reached an unreachable!";
    case 107: 
      label = 157; break;
    case 108: 
      var $583=$next;
      var $584=$583;
      $TP5=$584;
      var $585=$TP5;
      var $586=(($585+24)|0);
      var $587=HEAP32[(($586)>>2)];
      $XP6=$587;
      var $588=$TP5;
      var $589=(($588+12)|0);
      var $590=HEAP32[(($589)>>2)];
      var $591=$TP5;
      var $592=(($590)|(0))!=(($591)|(0));
      if ($592) { label = 109; break; } else { label = 116; break; }
    case 109: 
      var $594=$TP5;
      var $595=(($594+8)|0);
      var $596=HEAP32[(($595)>>2)];
      $F8=$596;
      var $597=$TP5;
      var $598=(($597+12)|0);
      var $599=HEAP32[(($598)>>2)];
      $R7=$599;
      var $600=$F8;
      var $601=$600;
      var $602=$1;
      var $603=(($602+16)|0);
      var $604=HEAP32[(($603)>>2)];
      var $605=(($601)>>>(0)) >= (($604)>>>(0));
      if ($605) { label = 110; break; } else { var $619 = 0;label = 112; break; }
    case 110: 
      var $607=$F8;
      var $608=(($607+12)|0);
      var $609=HEAP32[(($608)>>2)];
      var $610=$TP5;
      var $611=(($609)|(0))==(($610)|(0));
      if ($611) { label = 111; break; } else { var $619 = 0;label = 112; break; }
    case 111: 
      var $613=$R7;
      var $614=(($613+8)|0);
      var $615=HEAP32[(($614)>>2)];
      var $616=$TP5;
      var $617=(($615)|(0))==(($616)|(0));
      var $619 = $617;label = 112; break;
    case 112: 
      var $619;
      var $620=(($619)&(1));
      var $621=($620);
      var $622=(($621)|(0))!=0;
      if ($622) { label = 113; break; } else { label = 114; break; }
    case 113: 
      var $624=$R7;
      var $625=$F8;
      var $626=(($625+12)|0);
      HEAP32[(($626)>>2)]=$624;
      var $627=$F8;
      var $628=$R7;
      var $629=(($628+8)|0);
      HEAP32[(($629)>>2)]=$627;
      label = 115; break;
    case 114: 
      _abort();
      throw "Reached an unreachable!";
    case 115: 
      label = 128; break;
    case 116: 
      var $633=$TP5;
      var $634=(($633+16)|0);
      var $635=(($634+4)|0);
      $RP9=$635;
      var $636=HEAP32[(($635)>>2)];
      $R7=$636;
      var $637=(($636)|(0))!=0;
      if ($637) { label = 118; break; } else { label = 117; break; }
    case 117: 
      var $639=$TP5;
      var $640=(($639+16)|0);
      var $641=(($640)|0);
      $RP9=$641;
      var $642=HEAP32[(($641)>>2)];
      $R7=$642;
      var $643=(($642)|(0))!=0;
      if ($643) { label = 118; break; } else { label = 127; break; }
    case 118: 
      label = 119; break;
    case 119: 
      var $646=$R7;
      var $647=(($646+16)|0);
      var $648=(($647+4)|0);
      $CP10=$648;
      var $649=HEAP32[(($648)>>2)];
      var $650=(($649)|(0))!=0;
      if ($650) { var $658 = 1;label = 121; break; } else { label = 120; break; }
    case 120: 
      var $652=$R7;
      var $653=(($652+16)|0);
      var $654=(($653)|0);
      $CP10=$654;
      var $655=HEAP32[(($654)>>2)];
      var $656=(($655)|(0))!=0;
      var $658 = $656;label = 121; break;
    case 121: 
      var $658;
      if ($658) { label = 122; break; } else { label = 123; break; }
    case 122: 
      var $660=$CP10;
      $RP9=$660;
      var $661=HEAP32[(($660)>>2)];
      $R7=$661;
      label = 119; break;
    case 123: 
      var $663=$RP9;
      var $664=$663;
      var $665=$1;
      var $666=(($665+16)|0);
      var $667=HEAP32[(($666)>>2)];
      var $668=(($664)>>>(0)) >= (($667)>>>(0));
      var $669=(($668)&(1));
      var $670=($669);
      var $671=(($670)|(0))!=0;
      if ($671) { label = 124; break; } else { label = 125; break; }
    case 124: 
      var $673=$RP9;
      HEAP32[(($673)>>2)]=0;
      label = 126; break;
    case 125: 
      _abort();
      throw "Reached an unreachable!";
    case 126: 
      label = 127; break;
    case 127: 
      label = 128; break;
    case 128: 
      var $678=$XP6;
      var $679=(($678)|(0))!=0;
      if ($679) { label = 129; break; } else { label = 156; break; }
    case 129: 
      var $681=$TP5;
      var $682=(($681+28)|0);
      var $683=HEAP32[(($682)>>2)];
      var $684=$1;
      var $685=(($684+304)|0);
      var $686=(($685+($683<<2))|0);
      $H11=$686;
      var $687=$TP5;
      var $688=$H11;
      var $689=HEAP32[(($688)>>2)];
      var $690=(($687)|(0))==(($689)|(0));
      if ($690) { label = 130; break; } else { label = 133; break; }
    case 130: 
      var $692=$R7;
      var $693=$H11;
      HEAP32[(($693)>>2)]=$692;
      var $694=(($692)|(0))==0;
      if ($694) { label = 131; break; } else { label = 132; break; }
    case 131: 
      var $696=$TP5;
      var $697=(($696+28)|0);
      var $698=HEAP32[(($697)>>2)];
      var $699=1 << $698;
      var $700=$699 ^ -1;
      var $701=$1;
      var $702=(($701+4)|0);
      var $703=HEAP32[(($702)>>2)];
      var $704=$703 & $700;
      HEAP32[(($702)>>2)]=$704;
      label = 132; break;
    case 132: 
      label = 140; break;
    case 133: 
      var $707=$XP6;
      var $708=$707;
      var $709=$1;
      var $710=(($709+16)|0);
      var $711=HEAP32[(($710)>>2)];
      var $712=(($708)>>>(0)) >= (($711)>>>(0));
      var $713=(($712)&(1));
      var $714=($713);
      var $715=(($714)|(0))!=0;
      if ($715) { label = 134; break; } else { label = 138; break; }
    case 134: 
      var $717=$XP6;
      var $718=(($717+16)|0);
      var $719=(($718)|0);
      var $720=HEAP32[(($719)>>2)];
      var $721=$TP5;
      var $722=(($720)|(0))==(($721)|(0));
      if ($722) { label = 135; break; } else { label = 136; break; }
    case 135: 
      var $724=$R7;
      var $725=$XP6;
      var $726=(($725+16)|0);
      var $727=(($726)|0);
      HEAP32[(($727)>>2)]=$724;
      label = 137; break;
    case 136: 
      var $729=$R7;
      var $730=$XP6;
      var $731=(($730+16)|0);
      var $732=(($731+4)|0);
      HEAP32[(($732)>>2)]=$729;
      label = 137; break;
    case 137: 
      label = 139; break;
    case 138: 
      _abort();
      throw "Reached an unreachable!";
    case 139: 
      label = 140; break;
    case 140: 
      var $737=$R7;
      var $738=(($737)|(0))!=0;
      if ($738) { label = 141; break; } else { label = 155; break; }
    case 141: 
      var $740=$R7;
      var $741=$740;
      var $742=$1;
      var $743=(($742+16)|0);
      var $744=HEAP32[(($743)>>2)];
      var $745=(($741)>>>(0)) >= (($744)>>>(0));
      var $746=(($745)&(1));
      var $747=($746);
      var $748=(($747)|(0))!=0;
      if ($748) { label = 142; break; } else { label = 153; break; }
    case 142: 
      var $750=$XP6;
      var $751=$R7;
      var $752=(($751+24)|0);
      HEAP32[(($752)>>2)]=$750;
      var $753=$TP5;
      var $754=(($753+16)|0);
      var $755=(($754)|0);
      var $756=HEAP32[(($755)>>2)];
      $C012=$756;
      var $757=(($756)|(0))!=0;
      if ($757) { label = 143; break; } else { label = 147; break; }
    case 143: 
      var $759=$C012;
      var $760=$759;
      var $761=$1;
      var $762=(($761+16)|0);
      var $763=HEAP32[(($762)>>2)];
      var $764=(($760)>>>(0)) >= (($763)>>>(0));
      var $765=(($764)&(1));
      var $766=($765);
      var $767=(($766)|(0))!=0;
      if ($767) { label = 144; break; } else { label = 145; break; }
    case 144: 
      var $769=$C012;
      var $770=$R7;
      var $771=(($770+16)|0);
      var $772=(($771)|0);
      HEAP32[(($772)>>2)]=$769;
      var $773=$R7;
      var $774=$C012;
      var $775=(($774+24)|0);
      HEAP32[(($775)>>2)]=$773;
      label = 146; break;
    case 145: 
      _abort();
      throw "Reached an unreachable!";
    case 146: 
      label = 147; break;
    case 147: 
      var $779=$TP5;
      var $780=(($779+16)|0);
      var $781=(($780+4)|0);
      var $782=HEAP32[(($781)>>2)];
      $C113=$782;
      var $783=(($782)|(0))!=0;
      if ($783) { label = 148; break; } else { label = 152; break; }
    case 148: 
      var $785=$C113;
      var $786=$785;
      var $787=$1;
      var $788=(($787+16)|0);
      var $789=HEAP32[(($788)>>2)];
      var $790=(($786)>>>(0)) >= (($789)>>>(0));
      var $791=(($790)&(1));
      var $792=($791);
      var $793=(($792)|(0))!=0;
      if ($793) { label = 149; break; } else { label = 150; break; }
    case 149: 
      var $795=$C113;
      var $796=$R7;
      var $797=(($796+16)|0);
      var $798=(($797+4)|0);
      HEAP32[(($798)>>2)]=$795;
      var $799=$R7;
      var $800=$C113;
      var $801=(($800+24)|0);
      HEAP32[(($801)>>2)]=$799;
      label = 151; break;
    case 150: 
      _abort();
      throw "Reached an unreachable!";
    case 151: 
      label = 152; break;
    case 152: 
      label = 154; break;
    case 153: 
      _abort();
      throw "Reached an unreachable!";
    case 154: 
      label = 155; break;
    case 155: 
      label = 156; break;
    case 156: 
      label = 157; break;
    case 157: 
      var $810=$3;
      var $811=$810 | 1;
      var $812=$2;
      var $813=(($812+4)|0);
      HEAP32[(($813)>>2)]=$811;
      var $814=$3;
      var $815=$2;
      var $816=$815;
      var $817=$3;
      var $818=(($816+$817)|0);
      var $819=$818;
      var $820=(($819)|0);
      HEAP32[(($820)>>2)]=$814;
      var $821=$2;
      var $822=$1;
      var $823=(($822+20)|0);
      var $824=HEAP32[(($823)>>2)];
      var $825=(($821)|(0))==(($824)|(0));
      if ($825) { label = 158; break; } else { label = 159; break; }
    case 158: 
      var $827=$3;
      var $828=$1;
      var $829=(($828+8)|0);
      HEAP32[(($829)>>2)]=$827;
      label = 200; break;
    case 159: 
      label = 160; break;
    case 160: 
      label = 161; break;
    case 161: 
      label = 163; break;
    case 162: 
      var $834=$next;
      var $835=(($834+4)|0);
      var $836=HEAP32[(($835)>>2)];
      var $837=$836 & -2;
      HEAP32[(($835)>>2)]=$837;
      var $838=$3;
      var $839=$838 | 1;
      var $840=$2;
      var $841=(($840+4)|0);
      HEAP32[(($841)>>2)]=$839;
      var $842=$3;
      var $843=$2;
      var $844=$843;
      var $845=$3;
      var $846=(($844+$845)|0);
      var $847=$846;
      var $848=(($847)|0);
      HEAP32[(($848)>>2)]=$842;
      label = 163; break;
    case 163: 
      var $850=$3;
      var $851=$850 >>> 3;
      var $852=(($851)>>>(0)) < 32;
      if ($852) { label = 164; break; } else { label = 171; break; }
    case 164: 
      var $854=$3;
      var $855=$854 >>> 3;
      $I14=$855;
      var $856=$I14;
      var $857=$856 << 1;
      var $858=$1;
      var $859=(($858+40)|0);
      var $860=(($859+($857<<2))|0);
      var $861=$860;
      var $862=$861;
      $B15=$862;
      var $863=$B15;
      $F16=$863;
      var $864=$1;
      var $865=(($864)|0);
      var $866=HEAP32[(($865)>>2)];
      var $867=$I14;
      var $868=1 << $867;
      var $869=$866 & $868;
      var $870=(($869)|(0))!=0;
      if ($870) { label = 166; break; } else { label = 165; break; }
    case 165: 
      var $872=$I14;
      var $873=1 << $872;
      var $874=$1;
      var $875=(($874)|0);
      var $876=HEAP32[(($875)>>2)];
      var $877=$876 | $873;
      HEAP32[(($875)>>2)]=$877;
      label = 170; break;
    case 166: 
      var $879=$B15;
      var $880=(($879+8)|0);
      var $881=HEAP32[(($880)>>2)];
      var $882=$881;
      var $883=$1;
      var $884=(($883+16)|0);
      var $885=HEAP32[(($884)>>2)];
      var $886=(($882)>>>(0)) >= (($885)>>>(0));
      var $887=(($886)&(1));
      var $888=($887);
      var $889=(($888)|(0))!=0;
      if ($889) { label = 167; break; } else { label = 168; break; }
    case 167: 
      var $891=$B15;
      var $892=(($891+8)|0);
      var $893=HEAP32[(($892)>>2)];
      $F16=$893;
      label = 169; break;
    case 168: 
      _abort();
      throw "Reached an unreachable!";
    case 169: 
      label = 170; break;
    case 170: 
      var $897=$2;
      var $898=$B15;
      var $899=(($898+8)|0);
      HEAP32[(($899)>>2)]=$897;
      var $900=$2;
      var $901=$F16;
      var $902=(($901+12)|0);
      HEAP32[(($902)>>2)]=$900;
      var $903=$F16;
      var $904=$2;
      var $905=(($904+8)|0);
      HEAP32[(($905)>>2)]=$903;
      var $906=$B15;
      var $907=$2;
      var $908=(($907+12)|0);
      HEAP32[(($908)>>2)]=$906;
      label = 198; break;
    case 171: 
      var $910=$2;
      var $911=$910;
      $TP17=$911;
      var $912=$3;
      var $913=$912 >>> 8;
      $X=$913;
      var $914=$X;
      var $915=(($914)|(0))==0;
      if ($915) { label = 172; break; } else { label = 173; break; }
    case 172: 
      $I19=0;
      label = 177; break;
    case 173: 
      var $918=$X;
      var $919=(($918)>>>(0)) > 65535;
      if ($919) { label = 174; break; } else { label = 175; break; }
    case 174: 
      $I19=31;
      label = 176; break;
    case 175: 
      var $922=$X;
      $Y=$922;
      var $923=$Y;
      var $924=((($923)-(256))|0);
      var $925=$924 >>> 16;
      var $926=$925 & 8;
      $N=$926;
      var $927=$N;
      var $928=$Y;
      var $929=$928 << $927;
      $Y=$929;
      var $930=((($929)-(4096))|0);
      var $931=$930 >>> 16;
      var $932=$931 & 4;
      $K=$932;
      var $933=$K;
      var $934=$N;
      var $935=((($934)+($933))|0);
      $N=$935;
      var $936=$K;
      var $937=$Y;
      var $938=$937 << $936;
      $Y=$938;
      var $939=((($938)-(16384))|0);
      var $940=$939 >>> 16;
      var $941=$940 & 2;
      $K=$941;
      var $942=$N;
      var $943=((($942)+($941))|0);
      $N=$943;
      var $944=$N;
      var $945=(((14)-($944))|0);
      var $946=$K;
      var $947=$Y;
      var $948=$947 << $946;
      $Y=$948;
      var $949=$948 >>> 15;
      var $950=((($945)+($949))|0);
      $K=$950;
      var $951=$K;
      var $952=$951 << 1;
      var $953=$3;
      var $954=$K;
      var $955=((($954)+(7))|0);
      var $956=$953 >>> (($955)>>>(0));
      var $957=$956 & 1;
      var $958=((($952)+($957))|0);
      $I19=$958;
      label = 176; break;
    case 176: 
      label = 177; break;
    case 177: 
      var $961=$I19;
      var $962=$1;
      var $963=(($962+304)|0);
      var $964=(($963+($961<<2))|0);
      $H18=$964;
      var $965=$I19;
      var $966=$TP17;
      var $967=(($966+28)|0);
      HEAP32[(($967)>>2)]=$965;
      var $968=$TP17;
      var $969=(($968+16)|0);
      var $970=(($969+4)|0);
      HEAP32[(($970)>>2)]=0;
      var $971=$TP17;
      var $972=(($971+16)|0);
      var $973=(($972)|0);
      HEAP32[(($973)>>2)]=0;
      var $974=$1;
      var $975=(($974+4)|0);
      var $976=HEAP32[(($975)>>2)];
      var $977=$I19;
      var $978=1 << $977;
      var $979=$976 & $978;
      var $980=(($979)|(0))!=0;
      if ($980) { label = 179; break; } else { label = 178; break; }
    case 178: 
      var $982=$I19;
      var $983=1 << $982;
      var $984=$1;
      var $985=(($984+4)|0);
      var $986=HEAP32[(($985)>>2)];
      var $987=$986 | $983;
      HEAP32[(($985)>>2)]=$987;
      var $988=$TP17;
      var $989=$H18;
      HEAP32[(($989)>>2)]=$988;
      var $990=$H18;
      var $991=$990;
      var $992=$TP17;
      var $993=(($992+24)|0);
      HEAP32[(($993)>>2)]=$991;
      var $994=$TP17;
      var $995=$TP17;
      var $996=(($995+12)|0);
      HEAP32[(($996)>>2)]=$994;
      var $997=$TP17;
      var $998=(($997+8)|0);
      HEAP32[(($998)>>2)]=$994;
      label = 197; break;
    case 179: 
      var $1000=$H18;
      var $1001=HEAP32[(($1000)>>2)];
      $T=$1001;
      var $1002=$3;
      var $1003=$I19;
      var $1004=(($1003)|(0))==31;
      if ($1004) { label = 180; break; } else { label = 181; break; }
    case 180: 
      var $1013 = 0;label = 182; break;
    case 181: 
      var $1007=$I19;
      var $1008=$1007 >>> 1;
      var $1009=((($1008)+(8))|0);
      var $1010=((($1009)-(2))|0);
      var $1011=(((31)-($1010))|0);
      var $1013 = $1011;label = 182; break;
    case 182: 
      var $1013;
      var $1014=$1002 << $1013;
      $K20=$1014;
      label = 183; break;
    case 183: 
      var $1016=$T;
      var $1017=(($1016+4)|0);
      var $1018=HEAP32[(($1017)>>2)];
      var $1019=$1018 & -8;
      var $1020=$3;
      var $1021=(($1019)|(0))!=(($1020)|(0));
      if ($1021) { label = 184; break; } else { label = 190; break; }
    case 184: 
      var $1023=$K20;
      var $1024=$1023 >>> 31;
      var $1025=$1024 & 1;
      var $1026=$T;
      var $1027=(($1026+16)|0);
      var $1028=(($1027+($1025<<2))|0);
      $C=$1028;
      var $1029=$K20;
      var $1030=$1029 << 1;
      $K20=$1030;
      var $1031=$C;
      var $1032=HEAP32[(($1031)>>2)];
      var $1033=(($1032)|(0))!=0;
      if ($1033) { label = 185; break; } else { label = 186; break; }
    case 185: 
      var $1035=$C;
      var $1036=HEAP32[(($1035)>>2)];
      $T=$1036;
      label = 189; break;
    case 186: 
      var $1038=$C;
      var $1039=$1038;
      var $1040=$1;
      var $1041=(($1040+16)|0);
      var $1042=HEAP32[(($1041)>>2)];
      var $1043=(($1039)>>>(0)) >= (($1042)>>>(0));
      var $1044=(($1043)&(1));
      var $1045=($1044);
      var $1046=(($1045)|(0))!=0;
      if ($1046) { label = 187; break; } else { label = 188; break; }
    case 187: 
      var $1048=$TP17;
      var $1049=$C;
      HEAP32[(($1049)>>2)]=$1048;
      var $1050=$T;
      var $1051=$TP17;
      var $1052=(($1051+24)|0);
      HEAP32[(($1052)>>2)]=$1050;
      var $1053=$TP17;
      var $1054=$TP17;
      var $1055=(($1054+12)|0);
      HEAP32[(($1055)>>2)]=$1053;
      var $1056=$TP17;
      var $1057=(($1056+8)|0);
      HEAP32[(($1057)>>2)]=$1053;
      label = 196; break;
    case 188: 
      _abort();
      throw "Reached an unreachable!";
    case 189: 
      label = 195; break;
    case 190: 
      var $1061=$T;
      var $1062=(($1061+8)|0);
      var $1063=HEAP32[(($1062)>>2)];
      $F21=$1063;
      var $1064=$T;
      var $1065=$1064;
      var $1066=$1;
      var $1067=(($1066+16)|0);
      var $1068=HEAP32[(($1067)>>2)];
      var $1069=(($1065)>>>(0)) >= (($1068)>>>(0));
      if ($1069) { label = 191; break; } else { var $1078 = 0;label = 192; break; }
    case 191: 
      var $1071=$F21;
      var $1072=$1071;
      var $1073=$1;
      var $1074=(($1073+16)|0);
      var $1075=HEAP32[(($1074)>>2)];
      var $1076=(($1072)>>>(0)) >= (($1075)>>>(0));
      var $1078 = $1076;label = 192; break;
    case 192: 
      var $1078;
      var $1079=(($1078)&(1));
      var $1080=($1079);
      var $1081=(($1080)|(0))!=0;
      if ($1081) { label = 193; break; } else { label = 194; break; }
    case 193: 
      var $1083=$TP17;
      var $1084=$F21;
      var $1085=(($1084+12)|0);
      HEAP32[(($1085)>>2)]=$1083;
      var $1086=$T;
      var $1087=(($1086+8)|0);
      HEAP32[(($1087)>>2)]=$1083;
      var $1088=$F21;
      var $1089=$TP17;
      var $1090=(($1089+8)|0);
      HEAP32[(($1090)>>2)]=$1088;
      var $1091=$T;
      var $1092=$TP17;
      var $1093=(($1092+12)|0);
      HEAP32[(($1093)>>2)]=$1091;
      var $1094=$TP17;
      var $1095=(($1094+24)|0);
      HEAP32[(($1095)>>2)]=0;
      label = 196; break;
    case 194: 
      _abort();
      throw "Reached an unreachable!";
    case 195: 
      label = 183; break;
    case 196: 
      label = 197; break;
    case 197: 
      label = 198; break;
    case 198: 
      label = 200; break;
    case 199: 
      _abort();
      throw "Reached an unreachable!";
    case 200: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_resize($m, $oldp, $nb, $flags) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $oldsize;
      var $offset;
      var $oldmmsize;
      var $newmmsize;
      var $cp;
      var $newp;
      var $psize;
      $2=$m;
      $3=$oldp;
      $4=$nb;
      $5=$flags;
      var $6=$3;
      var $7=(($6+4)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=$8 & -8;
      $oldsize=$9;
      var $10=$5;
      var $11=$4;
      var $12=$11 >>> 3;
      var $13=(($12)>>>(0)) < 32;
      if ($13) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 14; break;
    case 3: 
      var $16=$oldsize;
      var $17=$4;
      var $18=((($17)+(4))|0);
      var $19=(($16)>>>(0)) >= (($18)>>>(0));
      if ($19) { label = 4; break; } else { label = 6; break; }
    case 4: 
      var $21=$oldsize;
      var $22=$4;
      var $23=((($21)-($22))|0);
      var $24=HEAP32[((((_mparams+8)|0))>>2)];
      var $25=$24 << 1;
      var $26=(($23)>>>(0)) <= (($25)>>>(0));
      if ($26) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $28=$3;
      $1=$28;
      label = 14; break;
    case 6: 
      var $30=$3;
      var $31=(($30)|0);
      var $32=HEAP32[(($31)>>2)];
      $offset=$32;
      var $33=$oldsize;
      var $34=$offset;
      var $35=((($33)+($34))|0);
      var $36=((($35)+(16))|0);
      $oldmmsize=$36;
      var $37=$4;
      var $38=((($37)+(24))|0);
      var $39=((($38)+(7))|0);
      var $40=HEAP32[((((_mparams+4)|0))>>2)];
      var $41=((($40)-(1))|0);
      var $42=((($39)+($41))|0);
      var $43=HEAP32[((((_mparams+4)|0))>>2)];
      var $44=((($43)-(1))|0);
      var $45=$44 ^ -1;
      var $46=$42 & $45;
      $newmmsize=$46;
      $cp=-1;
      var $47=$cp;
      var $48=(($47)|(0))!=-1;
      if ($48) { label = 7; break; } else { label = 12; break; }
    case 7: 
      var $50=$cp;
      var $51=$offset;
      var $52=(($50+$51)|0);
      var $53=$52;
      $newp=$53;
      var $54=$newmmsize;
      var $55=$offset;
      var $56=((($54)-($55))|0);
      var $57=((($56)-(16))|0);
      $psize=$57;
      var $58=$psize;
      var $59=$newp;
      var $60=(($59+4)|0);
      HEAP32[(($60)>>2)]=$58;
      var $61=$newp;
      var $62=$61;
      var $63=$psize;
      var $64=(($62+$63)|0);
      var $65=$64;
      var $66=(($65+4)|0);
      HEAP32[(($66)>>2)]=7;
      var $67=$newp;
      var $68=$67;
      var $69=$psize;
      var $70=((($69)+(4))|0);
      var $71=(($68+$70)|0);
      var $72=$71;
      var $73=(($72+4)|0);
      HEAP32[(($73)>>2)]=0;
      var $74=$cp;
      var $75=$2;
      var $76=(($75+16)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=(($74)>>>(0)) < (($77)>>>(0));
      if ($78) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $80=$cp;
      var $81=$2;
      var $82=(($81+16)|0);
      HEAP32[(($82)>>2)]=$80;
      label = 9; break;
    case 9: 
      var $84=$newmmsize;
      var $85=$oldmmsize;
      var $86=((($84)-($85))|0);
      var $87=$2;
      var $88=(($87+432)|0);
      var $89=HEAP32[(($88)>>2)];
      var $90=((($89)+($86))|0);
      HEAP32[(($88)>>2)]=$90;
      var $91=$2;
      var $92=(($91+436)|0);
      var $93=HEAP32[(($92)>>2)];
      var $94=(($90)>>>(0)) > (($93)>>>(0));
      if ($94) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $96=$2;
      var $97=(($96+432)|0);
      var $98=HEAP32[(($97)>>2)];
      var $99=$2;
      var $100=(($99+436)|0);
      HEAP32[(($100)>>2)]=$98;
      label = 11; break;
    case 11: 
      var $102=$newp;
      $1=$102;
      label = 14; break;
    case 12: 
      label = 13; break;
    case 13: 
      $1=0;
      label = 14; break;
    case 14: 
      var $106=$1;
      return $106;
    default: assert(0, "bad label: " + label);
  }
}
function _segment_holding($m, $addr) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $sp;
      $2=$m;
      $3=$addr;
      var $4=$2;
      var $5=(($4+448)|0);
      $sp=$5;
      label = 2; break;
    case 2: 
      var $7=$3;
      var $8=$sp;
      var $9=(($8)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($7)>>>(0)) >= (($10)>>>(0));
      if ($11) { label = 3; break; } else { label = 5; break; }
    case 3: 
      var $13=$3;
      var $14=$sp;
      var $15=(($14)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=$sp;
      var $18=(($17+4)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=(($16+$19)|0);
      var $21=(($13)>>>(0)) < (($20)>>>(0));
      if ($21) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $23=$sp;
      $1=$23;
      label = 8; break;
    case 5: 
      var $25=$sp;
      var $26=(($25+8)|0);
      var $27=HEAP32[(($26)>>2)];
      $sp=$27;
      var $28=(($27)|(0))==0;
      if ($28) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 8; break;
    case 7: 
      label = 2; break;
    case 8: 
      var $32=$1;
      return $32;
    default: assert(0, "bad label: " + label);
  }
}
function _init_top($m, $p, $psize) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $offset;
      $1=$m;
      $2=$p;
      $3=$psize;
      var $4=$2;
      var $5=$4;
      var $6=(($5+8)|0);
      var $7=$6;
      var $8=$7 & 7;
      var $9=(($8)|(0))==0;
      if ($9) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $20 = 0;label = 4; break;
    case 3: 
      var $12=$2;
      var $13=$12;
      var $14=(($13+8)|0);
      var $15=$14;
      var $16=$15 & 7;
      var $17=(((8)-($16))|0);
      var $18=$17 & 7;
      var $20 = $18;label = 4; break;
    case 4: 
      var $20;
      $offset=$20;
      var $21=$2;
      var $22=$21;
      var $23=$offset;
      var $24=(($22+$23)|0);
      var $25=$24;
      $2=$25;
      var $26=$offset;
      var $27=$3;
      var $28=((($27)-($26))|0);
      $3=$28;
      var $29=$2;
      var $30=$1;
      var $31=(($30+24)|0);
      HEAP32[(($31)>>2)]=$29;
      var $32=$3;
      var $33=$1;
      var $34=(($33+12)|0);
      HEAP32[(($34)>>2)]=$32;
      var $35=$3;
      var $36=$35 | 1;
      var $37=$2;
      var $38=(($37+4)|0);
      HEAP32[(($38)>>2)]=$36;
      var $39=$2;
      var $40=$39;
      var $41=$3;
      var $42=(($40+$41)|0);
      var $43=$42;
      var $44=(($43+4)|0);
      HEAP32[(($44)>>2)]=40;
      var $45=HEAP32[((((_mparams+16)|0))>>2)];
      var $46=$1;
      var $47=(($46+28)|0);
      HEAP32[(($47)>>2)]=$45;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_alloc($m, $nb) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $mmsize;
      var $fp;
      var $mm;
      var $offset;
      var $psize;
      var $p;
      $2=$m;
      $3=$nb;
      var $4=$3;
      var $5=((($4)+(24))|0);
      var $6=((($5)+(7))|0);
      var $7=HEAP32[((((_mparams+4)|0))>>2)];
      var $8=((($7)-(1))|0);
      var $9=((($6)+($8))|0);
      var $10=HEAP32[((((_mparams+4)|0))>>2)];
      var $11=((($10)-(1))|0);
      var $12=$11 ^ -1;
      var $13=$9 & $12;
      $mmsize=$13;
      var $14=$2;
      var $15=(($14+440)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=(($16)|(0))!=0;
      if ($17) { label = 2; break; } else { label = 6; break; }
    case 2: 
      var $19=$2;
      var $20=(($19+432)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=$mmsize;
      var $23=((($21)+($22))|0);
      $fp=$23;
      var $24=$fp;
      var $25=$2;
      var $26=(($25+432)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=(($24)>>>(0)) <= (($27)>>>(0));
      if ($28) { label = 4; break; } else { label = 3; break; }
    case 3: 
      var $30=$fp;
      var $31=$2;
      var $32=(($31+440)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=(($30)>>>(0)) > (($33)>>>(0));
      if ($34) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 19; break;
    case 5: 
      label = 6; break;
    case 6: 
      var $38=$mmsize;
      var $39=$3;
      var $40=(($38)>>>(0)) > (($39)>>>(0));
      if ($40) { label = 7; break; } else { label = 18; break; }
    case 7: 
      $mm=-1;
      var $42=$mm;
      var $43=(($42)|(0))!=-1;
      if ($43) { label = 8; break; } else { label = 17; break; }
    case 8: 
      var $45=$mm;
      var $46=(($45+8)|0);
      var $47=$46;
      var $48=$47 & 7;
      var $49=(($48)|(0))==0;
      if ($49) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $59 = 0;label = 11; break;
    case 10: 
      var $52=$mm;
      var $53=(($52+8)|0);
      var $54=$53;
      var $55=$54 & 7;
      var $56=(((8)-($55))|0);
      var $57=$56 & 7;
      var $59 = $57;label = 11; break;
    case 11: 
      var $59;
      $offset=$59;
      var $60=$mmsize;
      var $61=$offset;
      var $62=((($60)-($61))|0);
      var $63=((($62)-(16))|0);
      $psize=$63;
      var $64=$mm;
      var $65=$offset;
      var $66=(($64+$65)|0);
      var $67=$66;
      $p=$67;
      var $68=$offset;
      var $69=$p;
      var $70=(($69)|0);
      HEAP32[(($70)>>2)]=$68;
      var $71=$psize;
      var $72=$p;
      var $73=(($72+4)|0);
      HEAP32[(($73)>>2)]=$71;
      var $74=$p;
      var $75=$74;
      var $76=$psize;
      var $77=(($75+$76)|0);
      var $78=$77;
      var $79=(($78+4)|0);
      HEAP32[(($79)>>2)]=7;
      var $80=$p;
      var $81=$80;
      var $82=$psize;
      var $83=((($82)+(4))|0);
      var $84=(($81+$83)|0);
      var $85=$84;
      var $86=(($85+4)|0);
      HEAP32[(($86)>>2)]=0;
      var $87=$2;
      var $88=(($87+16)|0);
      var $89=HEAP32[(($88)>>2)];
      var $90=(($89)|(0))==0;
      if ($90) { label = 13; break; } else { label = 12; break; }
    case 12: 
      var $92=$mm;
      var $93=$2;
      var $94=(($93+16)|0);
      var $95=HEAP32[(($94)>>2)];
      var $96=(($92)>>>(0)) < (($95)>>>(0));
      if ($96) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $98=$mm;
      var $99=$2;
      var $100=(($99+16)|0);
      HEAP32[(($100)>>2)]=$98;
      label = 14; break;
    case 14: 
      var $102=$mmsize;
      var $103=$2;
      var $104=(($103+432)|0);
      var $105=HEAP32[(($104)>>2)];
      var $106=((($105)+($102))|0);
      HEAP32[(($104)>>2)]=$106;
      var $107=$2;
      var $108=(($107+436)|0);
      var $109=HEAP32[(($108)>>2)];
      var $110=(($106)>>>(0)) > (($109)>>>(0));
      if ($110) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $112=$2;
      var $113=(($112+432)|0);
      var $114=HEAP32[(($113)>>2)];
      var $115=$2;
      var $116=(($115+436)|0);
      HEAP32[(($116)>>2)]=$114;
      label = 16; break;
    case 16: 
      var $118=$p;
      var $119=$118;
      var $120=(($119+8)|0);
      $1=$120;
      label = 19; break;
    case 17: 
      label = 18; break;
    case 18: 
      $1=0;
      label = 19; break;
    case 19: 
      var $124=$1;
      return $124;
    default: assert(0, "bad label: " + label);
  }
}
function _init_bins($m) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $i;
      var $bin;
      $1=$m;
      $i=0;
      label = 2; break;
    case 2: 
      var $3=$i;
      var $4=(($3)>>>(0)) < 32;
      if ($4) { label = 3; break; } else { label = 5; break; }
    case 3: 
      var $6=$i;
      var $7=$6 << 1;
      var $8=$1;
      var $9=(($8+40)|0);
      var $10=(($9+($7<<2))|0);
      var $11=$10;
      var $12=$11;
      $bin=$12;
      var $13=$bin;
      var $14=$bin;
      var $15=(($14+12)|0);
      HEAP32[(($15)>>2)]=$13;
      var $16=$bin;
      var $17=(($16+8)|0);
      HEAP32[(($17)>>2)]=$13;
      label = 4; break;
    case 4: 
      var $19=$i;
      var $20=((($19)+(1))|0);
      $i=$20;
      label = 2; break;
    case 5: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _prepend_alloc($m, $newbase, $oldbase, $nb) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $p;
      var $oldfirst;
      var $psize;
      var $q;
      var $qsize;
      var $tsize;
      var $dsize;
      var $nsize;
      var $F;
      var $B;
      var $I;
      var $TP;
      var $XP;
      var $R;
      var $F1;
      var $RP;
      var $CP;
      var $H;
      var $C0;
      var $C1;
      var $I2;
      var $B3;
      var $F4;
      var $TP5;
      var $H6;
      var $I7;
      var $X;
      var $Y;
      var $N;
      var $K;
      var $T;
      var $K8;
      var $C;
      var $F9;
      $1=$m;
      $2=$newbase;
      $3=$oldbase;
      $4=$nb;
      var $5=$2;
      var $6=$2;
      var $7=(($6+8)|0);
      var $8=$7;
      var $9=$8 & 7;
      var $10=(($9)|(0))==0;
      if ($10) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $20 = 0;label = 4; break;
    case 3: 
      var $13=$2;
      var $14=(($13+8)|0);
      var $15=$14;
      var $16=$15 & 7;
      var $17=(((8)-($16))|0);
      var $18=$17 & 7;
      var $20 = $18;label = 4; break;
    case 4: 
      var $20;
      var $21=(($5+$20)|0);
      var $22=$21;
      $p=$22;
      var $23=$3;
      var $24=$3;
      var $25=(($24+8)|0);
      var $26=$25;
      var $27=$26 & 7;
      var $28=(($27)|(0))==0;
      if ($28) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $38 = 0;label = 7; break;
    case 6: 
      var $31=$3;
      var $32=(($31+8)|0);
      var $33=$32;
      var $34=$33 & 7;
      var $35=(((8)-($34))|0);
      var $36=$35 & 7;
      var $38 = $36;label = 7; break;
    case 7: 
      var $38;
      var $39=(($23+$38)|0);
      var $40=$39;
      $oldfirst=$40;
      var $41=$oldfirst;
      var $42=$41;
      var $43=$p;
      var $44=$43;
      var $45=$42;
      var $46=$44;
      var $47=((($45)-($46))|0);
      $psize=$47;
      var $48=$p;
      var $49=$48;
      var $50=$4;
      var $51=(($49+$50)|0);
      var $52=$51;
      $q=$52;
      var $53=$psize;
      var $54=$4;
      var $55=((($53)-($54))|0);
      $qsize=$55;
      var $56=$4;
      var $57=$56 | 1;
      var $58=$57 | 2;
      var $59=$p;
      var $60=(($59+4)|0);
      HEAP32[(($60)>>2)]=$58;
      var $61=$oldfirst;
      var $62=$1;
      var $63=(($62+24)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=(($61)|(0))==(($64)|(0));
      if ($65) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $67=$qsize;
      var $68=$1;
      var $69=(($68+12)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=((($70)+($67))|0);
      HEAP32[(($69)>>2)]=$71;
      $tsize=$71;
      var $72=$q;
      var $73=$1;
      var $74=(($73+24)|0);
      HEAP32[(($74)>>2)]=$72;
      var $75=$tsize;
      var $76=$75 | 1;
      var $77=$q;
      var $78=(($77+4)|0);
      HEAP32[(($78)>>2)]=$76;
      label = 118; break;
    case 9: 
      var $80=$oldfirst;
      var $81=$1;
      var $82=(($81+20)|0);
      var $83=HEAP32[(($82)>>2)];
      var $84=(($80)|(0))==(($83)|(0));
      if ($84) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $86=$qsize;
      var $87=$1;
      var $88=(($87+8)|0);
      var $89=HEAP32[(($88)>>2)];
      var $90=((($89)+($86))|0);
      HEAP32[(($88)>>2)]=$90;
      $dsize=$90;
      var $91=$q;
      var $92=$1;
      var $93=(($92+20)|0);
      HEAP32[(($93)>>2)]=$91;
      var $94=$dsize;
      var $95=$94 | 1;
      var $96=$q;
      var $97=(($96+4)|0);
      HEAP32[(($97)>>2)]=$95;
      var $98=$dsize;
      var $99=$q;
      var $100=$99;
      var $101=$dsize;
      var $102=(($100+$101)|0);
      var $103=$102;
      var $104=(($103)|0);
      HEAP32[(($104)>>2)]=$98;
      label = 117; break;
    case 11: 
      var $106=$oldfirst;
      var $107=(($106+4)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=$108 & 3;
      var $110=(($109)|(0))!=1;
      if ($110) { label = 81; break; } else { label = 12; break; }
    case 12: 
      var $112=$oldfirst;
      var $113=(($112+4)|0);
      var $114=HEAP32[(($113)>>2)];
      var $115=$114 & -8;
      $nsize=$115;
      var $116=$nsize;
      var $117=$116 >>> 3;
      var $118=(($117)>>>(0)) < 32;
      if ($118) { label = 13; break; } else { label = 31; break; }
    case 13: 
      var $120=$oldfirst;
      var $121=(($120+8)|0);
      var $122=HEAP32[(($121)>>2)];
      $F=$122;
      var $123=$oldfirst;
      var $124=(($123+12)|0);
      var $125=HEAP32[(($124)>>2)];
      $B=$125;
      var $126=$nsize;
      var $127=$126 >>> 3;
      $I=$127;
      var $128=$F;
      var $129=$I;
      var $130=$129 << 1;
      var $131=$1;
      var $132=(($131+40)|0);
      var $133=(($132+($130<<2))|0);
      var $134=$133;
      var $135=$134;
      var $136=(($128)|(0))==(($135)|(0));
      if ($136) { var $153 = 1;label = 17; break; } else { label = 14; break; }
    case 14: 
      var $138=$F;
      var $139=$138;
      var $140=$1;
      var $141=(($140+16)|0);
      var $142=HEAP32[(($141)>>2)];
      var $143=(($139)>>>(0)) >= (($142)>>>(0));
      if ($143) { label = 15; break; } else { var $151 = 0;label = 16; break; }
    case 15: 
      var $145=$F;
      var $146=(($145+12)|0);
      var $147=HEAP32[(($146)>>2)];
      var $148=$oldfirst;
      var $149=(($147)|(0))==(($148)|(0));
      var $151 = $149;label = 16; break;
    case 16: 
      var $151;
      var $153 = $151;label = 17; break;
    case 17: 
      var $153;
      var $154=(($153)&(1));
      var $155=($154);
      var $156=(($155)|(0))!=0;
      if ($156) { label = 18; break; } else { label = 29; break; }
    case 18: 
      var $158=$B;
      var $159=$F;
      var $160=(($158)|(0))==(($159)|(0));
      if ($160) { label = 19; break; } else { label = 20; break; }
    case 19: 
      var $162=$I;
      var $163=1 << $162;
      var $164=$163 ^ -1;
      var $165=$1;
      var $166=(($165)|0);
      var $167=HEAP32[(($166)>>2)];
      var $168=$167 & $164;
      HEAP32[(($166)>>2)]=$168;
      label = 28; break;
    case 20: 
      var $170=$B;
      var $171=$I;
      var $172=$171 << 1;
      var $173=$1;
      var $174=(($173+40)|0);
      var $175=(($174+($172<<2))|0);
      var $176=$175;
      var $177=$176;
      var $178=(($170)|(0))==(($177)|(0));
      if ($178) { var $195 = 1;label = 24; break; } else { label = 21; break; }
    case 21: 
      var $180=$B;
      var $181=$180;
      var $182=$1;
      var $183=(($182+16)|0);
      var $184=HEAP32[(($183)>>2)];
      var $185=(($181)>>>(0)) >= (($184)>>>(0));
      if ($185) { label = 22; break; } else { var $193 = 0;label = 23; break; }
    case 22: 
      var $187=$B;
      var $188=(($187+8)|0);
      var $189=HEAP32[(($188)>>2)];
      var $190=$oldfirst;
      var $191=(($189)|(0))==(($190)|(0));
      var $193 = $191;label = 23; break;
    case 23: 
      var $193;
      var $195 = $193;label = 24; break;
    case 24: 
      var $195;
      var $196=(($195)&(1));
      var $197=($196);
      var $198=(($197)|(0))!=0;
      if ($198) { label = 25; break; } else { label = 26; break; }
    case 25: 
      var $200=$B;
      var $201=$F;
      var $202=(($201+12)|0);
      HEAP32[(($202)>>2)]=$200;
      var $203=$F;
      var $204=$B;
      var $205=(($204+8)|0);
      HEAP32[(($205)>>2)]=$203;
      label = 27; break;
    case 26: 
      _abort();
      throw "Reached an unreachable!";
    case 27: 
      label = 28; break;
    case 28: 
      label = 30; break;
    case 29: 
      _abort();
      throw "Reached an unreachable!";
    case 30: 
      label = 80; break;
    case 31: 
      var $212=$oldfirst;
      var $213=$212;
      $TP=$213;
      var $214=$TP;
      var $215=(($214+24)|0);
      var $216=HEAP32[(($215)>>2)];
      $XP=$216;
      var $217=$TP;
      var $218=(($217+12)|0);
      var $219=HEAP32[(($218)>>2)];
      var $220=$TP;
      var $221=(($219)|(0))!=(($220)|(0));
      if ($221) { label = 32; break; } else { label = 39; break; }
    case 32: 
      var $223=$TP;
      var $224=(($223+8)|0);
      var $225=HEAP32[(($224)>>2)];
      $F1=$225;
      var $226=$TP;
      var $227=(($226+12)|0);
      var $228=HEAP32[(($227)>>2)];
      $R=$228;
      var $229=$F1;
      var $230=$229;
      var $231=$1;
      var $232=(($231+16)|0);
      var $233=HEAP32[(($232)>>2)];
      var $234=(($230)>>>(0)) >= (($233)>>>(0));
      if ($234) { label = 33; break; } else { var $248 = 0;label = 35; break; }
    case 33: 
      var $236=$F1;
      var $237=(($236+12)|0);
      var $238=HEAP32[(($237)>>2)];
      var $239=$TP;
      var $240=(($238)|(0))==(($239)|(0));
      if ($240) { label = 34; break; } else { var $248 = 0;label = 35; break; }
    case 34: 
      var $242=$R;
      var $243=(($242+8)|0);
      var $244=HEAP32[(($243)>>2)];
      var $245=$TP;
      var $246=(($244)|(0))==(($245)|(0));
      var $248 = $246;label = 35; break;
    case 35: 
      var $248;
      var $249=(($248)&(1));
      var $250=($249);
      var $251=(($250)|(0))!=0;
      if ($251) { label = 36; break; } else { label = 37; break; }
    case 36: 
      var $253=$R;
      var $254=$F1;
      var $255=(($254+12)|0);
      HEAP32[(($255)>>2)]=$253;
      var $256=$F1;
      var $257=$R;
      var $258=(($257+8)|0);
      HEAP32[(($258)>>2)]=$256;
      label = 38; break;
    case 37: 
      _abort();
      throw "Reached an unreachable!";
    case 38: 
      label = 51; break;
    case 39: 
      var $262=$TP;
      var $263=(($262+16)|0);
      var $264=(($263+4)|0);
      $RP=$264;
      var $265=HEAP32[(($264)>>2)];
      $R=$265;
      var $266=(($265)|(0))!=0;
      if ($266) { label = 41; break; } else { label = 40; break; }
    case 40: 
      var $268=$TP;
      var $269=(($268+16)|0);
      var $270=(($269)|0);
      $RP=$270;
      var $271=HEAP32[(($270)>>2)];
      $R=$271;
      var $272=(($271)|(0))!=0;
      if ($272) { label = 41; break; } else { label = 50; break; }
    case 41: 
      label = 42; break;
    case 42: 
      var $275=$R;
      var $276=(($275+16)|0);
      var $277=(($276+4)|0);
      $CP=$277;
      var $278=HEAP32[(($277)>>2)];
      var $279=(($278)|(0))!=0;
      if ($279) { var $287 = 1;label = 44; break; } else { label = 43; break; }
    case 43: 
      var $281=$R;
      var $282=(($281+16)|0);
      var $283=(($282)|0);
      $CP=$283;
      var $284=HEAP32[(($283)>>2)];
      var $285=(($284)|(0))!=0;
      var $287 = $285;label = 44; break;
    case 44: 
      var $287;
      if ($287) { label = 45; break; } else { label = 46; break; }
    case 45: 
      var $289=$CP;
      $RP=$289;
      var $290=HEAP32[(($289)>>2)];
      $R=$290;
      label = 42; break;
    case 46: 
      var $292=$RP;
      var $293=$292;
      var $294=$1;
      var $295=(($294+16)|0);
      var $296=HEAP32[(($295)>>2)];
      var $297=(($293)>>>(0)) >= (($296)>>>(0));
      var $298=(($297)&(1));
      var $299=($298);
      var $300=(($299)|(0))!=0;
      if ($300) { label = 47; break; } else { label = 48; break; }
    case 47: 
      var $302=$RP;
      HEAP32[(($302)>>2)]=0;
      label = 49; break;
    case 48: 
      _abort();
      throw "Reached an unreachable!";
    case 49: 
      label = 50; break;
    case 50: 
      label = 51; break;
    case 51: 
      var $307=$XP;
      var $308=(($307)|(0))!=0;
      if ($308) { label = 52; break; } else { label = 79; break; }
    case 52: 
      var $310=$TP;
      var $311=(($310+28)|0);
      var $312=HEAP32[(($311)>>2)];
      var $313=$1;
      var $314=(($313+304)|0);
      var $315=(($314+($312<<2))|0);
      $H=$315;
      var $316=$TP;
      var $317=$H;
      var $318=HEAP32[(($317)>>2)];
      var $319=(($316)|(0))==(($318)|(0));
      if ($319) { label = 53; break; } else { label = 56; break; }
    case 53: 
      var $321=$R;
      var $322=$H;
      HEAP32[(($322)>>2)]=$321;
      var $323=(($321)|(0))==0;
      if ($323) { label = 54; break; } else { label = 55; break; }
    case 54: 
      var $325=$TP;
      var $326=(($325+28)|0);
      var $327=HEAP32[(($326)>>2)];
      var $328=1 << $327;
      var $329=$328 ^ -1;
      var $330=$1;
      var $331=(($330+4)|0);
      var $332=HEAP32[(($331)>>2)];
      var $333=$332 & $329;
      HEAP32[(($331)>>2)]=$333;
      label = 55; break;
    case 55: 
      label = 63; break;
    case 56: 
      var $336=$XP;
      var $337=$336;
      var $338=$1;
      var $339=(($338+16)|0);
      var $340=HEAP32[(($339)>>2)];
      var $341=(($337)>>>(0)) >= (($340)>>>(0));
      var $342=(($341)&(1));
      var $343=($342);
      var $344=(($343)|(0))!=0;
      if ($344) { label = 57; break; } else { label = 61; break; }
    case 57: 
      var $346=$XP;
      var $347=(($346+16)|0);
      var $348=(($347)|0);
      var $349=HEAP32[(($348)>>2)];
      var $350=$TP;
      var $351=(($349)|(0))==(($350)|(0));
      if ($351) { label = 58; break; } else { label = 59; break; }
    case 58: 
      var $353=$R;
      var $354=$XP;
      var $355=(($354+16)|0);
      var $356=(($355)|0);
      HEAP32[(($356)>>2)]=$353;
      label = 60; break;
    case 59: 
      var $358=$R;
      var $359=$XP;
      var $360=(($359+16)|0);
      var $361=(($360+4)|0);
      HEAP32[(($361)>>2)]=$358;
      label = 60; break;
    case 60: 
      label = 62; break;
    case 61: 
      _abort();
      throw "Reached an unreachable!";
    case 62: 
      label = 63; break;
    case 63: 
      var $366=$R;
      var $367=(($366)|(0))!=0;
      if ($367) { label = 64; break; } else { label = 78; break; }
    case 64: 
      var $369=$R;
      var $370=$369;
      var $371=$1;
      var $372=(($371+16)|0);
      var $373=HEAP32[(($372)>>2)];
      var $374=(($370)>>>(0)) >= (($373)>>>(0));
      var $375=(($374)&(1));
      var $376=($375);
      var $377=(($376)|(0))!=0;
      if ($377) { label = 65; break; } else { label = 76; break; }
    case 65: 
      var $379=$XP;
      var $380=$R;
      var $381=(($380+24)|0);
      HEAP32[(($381)>>2)]=$379;
      var $382=$TP;
      var $383=(($382+16)|0);
      var $384=(($383)|0);
      var $385=HEAP32[(($384)>>2)];
      $C0=$385;
      var $386=(($385)|(0))!=0;
      if ($386) { label = 66; break; } else { label = 70; break; }
    case 66: 
      var $388=$C0;
      var $389=$388;
      var $390=$1;
      var $391=(($390+16)|0);
      var $392=HEAP32[(($391)>>2)];
      var $393=(($389)>>>(0)) >= (($392)>>>(0));
      var $394=(($393)&(1));
      var $395=($394);
      var $396=(($395)|(0))!=0;
      if ($396) { label = 67; break; } else { label = 68; break; }
    case 67: 
      var $398=$C0;
      var $399=$R;
      var $400=(($399+16)|0);
      var $401=(($400)|0);
      HEAP32[(($401)>>2)]=$398;
      var $402=$R;
      var $403=$C0;
      var $404=(($403+24)|0);
      HEAP32[(($404)>>2)]=$402;
      label = 69; break;
    case 68: 
      _abort();
      throw "Reached an unreachable!";
    case 69: 
      label = 70; break;
    case 70: 
      var $408=$TP;
      var $409=(($408+16)|0);
      var $410=(($409+4)|0);
      var $411=HEAP32[(($410)>>2)];
      $C1=$411;
      var $412=(($411)|(0))!=0;
      if ($412) { label = 71; break; } else { label = 75; break; }
    case 71: 
      var $414=$C1;
      var $415=$414;
      var $416=$1;
      var $417=(($416+16)|0);
      var $418=HEAP32[(($417)>>2)];
      var $419=(($415)>>>(0)) >= (($418)>>>(0));
      var $420=(($419)&(1));
      var $421=($420);
      var $422=(($421)|(0))!=0;
      if ($422) { label = 72; break; } else { label = 73; break; }
    case 72: 
      var $424=$C1;
      var $425=$R;
      var $426=(($425+16)|0);
      var $427=(($426+4)|0);
      HEAP32[(($427)>>2)]=$424;
      var $428=$R;
      var $429=$C1;
      var $430=(($429+24)|0);
      HEAP32[(($430)>>2)]=$428;
      label = 74; break;
    case 73: 
      _abort();
      throw "Reached an unreachable!";
    case 74: 
      label = 75; break;
    case 75: 
      label = 77; break;
    case 76: 
      _abort();
      throw "Reached an unreachable!";
    case 77: 
      label = 78; break;
    case 78: 
      label = 79; break;
    case 79: 
      label = 80; break;
    case 80: 
      var $439=$oldfirst;
      var $440=$439;
      var $441=$nsize;
      var $442=(($440+$441)|0);
      var $443=$442;
      $oldfirst=$443;
      var $444=$nsize;
      var $445=$qsize;
      var $446=((($445)+($444))|0);
      $qsize=$446;
      label = 81; break;
    case 81: 
      var $448=$oldfirst;
      var $449=(($448+4)|0);
      var $450=HEAP32[(($449)>>2)];
      var $451=$450 & -2;
      HEAP32[(($449)>>2)]=$451;
      var $452=$qsize;
      var $453=$452 | 1;
      var $454=$q;
      var $455=(($454+4)|0);
      HEAP32[(($455)>>2)]=$453;
      var $456=$qsize;
      var $457=$q;
      var $458=$457;
      var $459=$qsize;
      var $460=(($458+$459)|0);
      var $461=$460;
      var $462=(($461)|0);
      HEAP32[(($462)>>2)]=$456;
      var $463=$qsize;
      var $464=$463 >>> 3;
      var $465=(($464)>>>(0)) < 32;
      if ($465) { label = 82; break; } else { label = 89; break; }
    case 82: 
      var $467=$qsize;
      var $468=$467 >>> 3;
      $I2=$468;
      var $469=$I2;
      var $470=$469 << 1;
      var $471=$1;
      var $472=(($471+40)|0);
      var $473=(($472+($470<<2))|0);
      var $474=$473;
      var $475=$474;
      $B3=$475;
      var $476=$B3;
      $F4=$476;
      var $477=$1;
      var $478=(($477)|0);
      var $479=HEAP32[(($478)>>2)];
      var $480=$I2;
      var $481=1 << $480;
      var $482=$479 & $481;
      var $483=(($482)|(0))!=0;
      if ($483) { label = 84; break; } else { label = 83; break; }
    case 83: 
      var $485=$I2;
      var $486=1 << $485;
      var $487=$1;
      var $488=(($487)|0);
      var $489=HEAP32[(($488)>>2)];
      var $490=$489 | $486;
      HEAP32[(($488)>>2)]=$490;
      label = 88; break;
    case 84: 
      var $492=$B3;
      var $493=(($492+8)|0);
      var $494=HEAP32[(($493)>>2)];
      var $495=$494;
      var $496=$1;
      var $497=(($496+16)|0);
      var $498=HEAP32[(($497)>>2)];
      var $499=(($495)>>>(0)) >= (($498)>>>(0));
      var $500=(($499)&(1));
      var $501=($500);
      var $502=(($501)|(0))!=0;
      if ($502) { label = 85; break; } else { label = 86; break; }
    case 85: 
      var $504=$B3;
      var $505=(($504+8)|0);
      var $506=HEAP32[(($505)>>2)];
      $F4=$506;
      label = 87; break;
    case 86: 
      _abort();
      throw "Reached an unreachable!";
    case 87: 
      label = 88; break;
    case 88: 
      var $510=$q;
      var $511=$B3;
      var $512=(($511+8)|0);
      HEAP32[(($512)>>2)]=$510;
      var $513=$q;
      var $514=$F4;
      var $515=(($514+12)|0);
      HEAP32[(($515)>>2)]=$513;
      var $516=$F4;
      var $517=$q;
      var $518=(($517+8)|0);
      HEAP32[(($518)>>2)]=$516;
      var $519=$B3;
      var $520=$q;
      var $521=(($520+12)|0);
      HEAP32[(($521)>>2)]=$519;
      label = 116; break;
    case 89: 
      var $523=$q;
      var $524=$523;
      $TP5=$524;
      var $525=$qsize;
      var $526=$525 >>> 8;
      $X=$526;
      var $527=$X;
      var $528=(($527)|(0))==0;
      if ($528) { label = 90; break; } else { label = 91; break; }
    case 90: 
      $I7=0;
      label = 95; break;
    case 91: 
      var $531=$X;
      var $532=(($531)>>>(0)) > 65535;
      if ($532) { label = 92; break; } else { label = 93; break; }
    case 92: 
      $I7=31;
      label = 94; break;
    case 93: 
      var $535=$X;
      $Y=$535;
      var $536=$Y;
      var $537=((($536)-(256))|0);
      var $538=$537 >>> 16;
      var $539=$538 & 8;
      $N=$539;
      var $540=$N;
      var $541=$Y;
      var $542=$541 << $540;
      $Y=$542;
      var $543=((($542)-(4096))|0);
      var $544=$543 >>> 16;
      var $545=$544 & 4;
      $K=$545;
      var $546=$K;
      var $547=$N;
      var $548=((($547)+($546))|0);
      $N=$548;
      var $549=$K;
      var $550=$Y;
      var $551=$550 << $549;
      $Y=$551;
      var $552=((($551)-(16384))|0);
      var $553=$552 >>> 16;
      var $554=$553 & 2;
      $K=$554;
      var $555=$N;
      var $556=((($555)+($554))|0);
      $N=$556;
      var $557=$N;
      var $558=(((14)-($557))|0);
      var $559=$K;
      var $560=$Y;
      var $561=$560 << $559;
      $Y=$561;
      var $562=$561 >>> 15;
      var $563=((($558)+($562))|0);
      $K=$563;
      var $564=$K;
      var $565=$564 << 1;
      var $566=$qsize;
      var $567=$K;
      var $568=((($567)+(7))|0);
      var $569=$566 >>> (($568)>>>(0));
      var $570=$569 & 1;
      var $571=((($565)+($570))|0);
      $I7=$571;
      label = 94; break;
    case 94: 
      label = 95; break;
    case 95: 
      var $574=$I7;
      var $575=$1;
      var $576=(($575+304)|0);
      var $577=(($576+($574<<2))|0);
      $H6=$577;
      var $578=$I7;
      var $579=$TP5;
      var $580=(($579+28)|0);
      HEAP32[(($580)>>2)]=$578;
      var $581=$TP5;
      var $582=(($581+16)|0);
      var $583=(($582+4)|0);
      HEAP32[(($583)>>2)]=0;
      var $584=$TP5;
      var $585=(($584+16)|0);
      var $586=(($585)|0);
      HEAP32[(($586)>>2)]=0;
      var $587=$1;
      var $588=(($587+4)|0);
      var $589=HEAP32[(($588)>>2)];
      var $590=$I7;
      var $591=1 << $590;
      var $592=$589 & $591;
      var $593=(($592)|(0))!=0;
      if ($593) { label = 97; break; } else { label = 96; break; }
    case 96: 
      var $595=$I7;
      var $596=1 << $595;
      var $597=$1;
      var $598=(($597+4)|0);
      var $599=HEAP32[(($598)>>2)];
      var $600=$599 | $596;
      HEAP32[(($598)>>2)]=$600;
      var $601=$TP5;
      var $602=$H6;
      HEAP32[(($602)>>2)]=$601;
      var $603=$H6;
      var $604=$603;
      var $605=$TP5;
      var $606=(($605+24)|0);
      HEAP32[(($606)>>2)]=$604;
      var $607=$TP5;
      var $608=$TP5;
      var $609=(($608+12)|0);
      HEAP32[(($609)>>2)]=$607;
      var $610=$TP5;
      var $611=(($610+8)|0);
      HEAP32[(($611)>>2)]=$607;
      label = 115; break;
    case 97: 
      var $613=$H6;
      var $614=HEAP32[(($613)>>2)];
      $T=$614;
      var $615=$qsize;
      var $616=$I7;
      var $617=(($616)|(0))==31;
      if ($617) { label = 98; break; } else { label = 99; break; }
    case 98: 
      var $626 = 0;label = 100; break;
    case 99: 
      var $620=$I7;
      var $621=$620 >>> 1;
      var $622=((($621)+(8))|0);
      var $623=((($622)-(2))|0);
      var $624=(((31)-($623))|0);
      var $626 = $624;label = 100; break;
    case 100: 
      var $626;
      var $627=$615 << $626;
      $K8=$627;
      label = 101; break;
    case 101: 
      var $629=$T;
      var $630=(($629+4)|0);
      var $631=HEAP32[(($630)>>2)];
      var $632=$631 & -8;
      var $633=$qsize;
      var $634=(($632)|(0))!=(($633)|(0));
      if ($634) { label = 102; break; } else { label = 108; break; }
    case 102: 
      var $636=$K8;
      var $637=$636 >>> 31;
      var $638=$637 & 1;
      var $639=$T;
      var $640=(($639+16)|0);
      var $641=(($640+($638<<2))|0);
      $C=$641;
      var $642=$K8;
      var $643=$642 << 1;
      $K8=$643;
      var $644=$C;
      var $645=HEAP32[(($644)>>2)];
      var $646=(($645)|(0))!=0;
      if ($646) { label = 103; break; } else { label = 104; break; }
    case 103: 
      var $648=$C;
      var $649=HEAP32[(($648)>>2)];
      $T=$649;
      label = 107; break;
    case 104: 
      var $651=$C;
      var $652=$651;
      var $653=$1;
      var $654=(($653+16)|0);
      var $655=HEAP32[(($654)>>2)];
      var $656=(($652)>>>(0)) >= (($655)>>>(0));
      var $657=(($656)&(1));
      var $658=($657);
      var $659=(($658)|(0))!=0;
      if ($659) { label = 105; break; } else { label = 106; break; }
    case 105: 
      var $661=$TP5;
      var $662=$C;
      HEAP32[(($662)>>2)]=$661;
      var $663=$T;
      var $664=$TP5;
      var $665=(($664+24)|0);
      HEAP32[(($665)>>2)]=$663;
      var $666=$TP5;
      var $667=$TP5;
      var $668=(($667+12)|0);
      HEAP32[(($668)>>2)]=$666;
      var $669=$TP5;
      var $670=(($669+8)|0);
      HEAP32[(($670)>>2)]=$666;
      label = 114; break;
    case 106: 
      _abort();
      throw "Reached an unreachable!";
    case 107: 
      label = 113; break;
    case 108: 
      var $674=$T;
      var $675=(($674+8)|0);
      var $676=HEAP32[(($675)>>2)];
      $F9=$676;
      var $677=$T;
      var $678=$677;
      var $679=$1;
      var $680=(($679+16)|0);
      var $681=HEAP32[(($680)>>2)];
      var $682=(($678)>>>(0)) >= (($681)>>>(0));
      if ($682) { label = 109; break; } else { var $691 = 0;label = 110; break; }
    case 109: 
      var $684=$F9;
      var $685=$684;
      var $686=$1;
      var $687=(($686+16)|0);
      var $688=HEAP32[(($687)>>2)];
      var $689=(($685)>>>(0)) >= (($688)>>>(0));
      var $691 = $689;label = 110; break;
    case 110: 
      var $691;
      var $692=(($691)&(1));
      var $693=($692);
      var $694=(($693)|(0))!=0;
      if ($694) { label = 111; break; } else { label = 112; break; }
    case 111: 
      var $696=$TP5;
      var $697=$F9;
      var $698=(($697+12)|0);
      HEAP32[(($698)>>2)]=$696;
      var $699=$T;
      var $700=(($699+8)|0);
      HEAP32[(($700)>>2)]=$696;
      var $701=$F9;
      var $702=$TP5;
      var $703=(($702+8)|0);
      HEAP32[(($703)>>2)]=$701;
      var $704=$T;
      var $705=$TP5;
      var $706=(($705+12)|0);
      HEAP32[(($706)>>2)]=$704;
      var $707=$TP5;
      var $708=(($707+24)|0);
      HEAP32[(($708)>>2)]=0;
      label = 114; break;
    case 112: 
      _abort();
      throw "Reached an unreachable!";
    case 113: 
      label = 101; break;
    case 114: 
      label = 115; break;
    case 115: 
      label = 116; break;
    case 116: 
      label = 117; break;
    case 117: 
      label = 118; break;
    case 118: 
      var $716=$p;
      var $717=$716;
      var $718=(($717+8)|0);
      return $718;
    default: assert(0, "bad label: " + label);
  }
}
function __ZNKSt9bad_alloc4whatEv($this) {
  var label = 0;
  var $1;
  $1=$this;
  var $2=$1;
  return ((__str345)|0);
}
function __ZNKSt20bad_array_new_length4whatEv($this) {
  var label = 0;
  var $1;
  $1=$this;
  var $2=$1;
  return ((__str1446)|0);
}
function __ZSt15get_new_handlerv() {
  var label = 0;
  var $1=(tempValue=HEAP32[((__ZL13__new_handler)>>2)],HEAP32[((__ZL13__new_handler)>>2)]=tempValue+0,tempValue);
  var $2=$1;
  return $2;
}
function __ZSt15set_new_handlerPFvvE($handler) {
  var label = 0;
  var $1;
  $1=$handler;
  var $2=$1;
  var $3=$2;
  var $4=(tempValue=HEAP32[((__ZL13__new_handler)>>2)],HEAP32[((__ZL13__new_handler)>>2)]=$3,tempValue);
  var $5=$4;
  return $5;
}
function __ZNSt9bad_allocC2Ev($this) {
  var label = 0;
  var $1;
  var $2;
  $2=$this;
  var $3=$2;
  var $4=$3;
  $1=$4;
  var $5=$1;
  var $6=$5;
  HEAP32[(($6)>>2)]=((__ZTVSt9exception+8)|0);
  var $7=$3;
  HEAP32[(($7)>>2)]=((__ZTVSt9bad_alloc+8)|0);
  return;
}
function __ZdlPv($ptr) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      $1=$ptr;
      var $2=$1;
      var $3=(($2)|(0))!=0;
      if ($3) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $5=$1;
      _free($5);
      label = 3; break;
    case 3: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
function __ZdlPvRKSt9nothrow_t($ptr, $0) {
  var label = 0;
  var $2;
  var $3;
  $2=$ptr;
  $3=$0;
  var $4=$2;
  __ZdlPv($4);
  return;
}
function __ZdaPv($ptr) {
  var label = 0;
  var $1;
  $1=$ptr;
  var $2=$1;
  __ZdlPv($2);
  return;
}
function __ZdaPvRKSt9nothrow_t($ptr, $0) {
  var label = 0;
  var $2;
  var $3;
  $2=$ptr;
  $3=$0;
  var $4=$2;
  __ZdaPv($4);
  return;
}
function __ZNSt9bad_allocD0Ev($this) {
  var label = 0;
  var $1;
  $1=$this;
  var $2=$1;
  __ZNSt9bad_allocD2Ev($2);
  var $3=$2;
  __ZdlPv($3);
  return;
}
function __ZNSt9bad_allocD2Ev($this) {
  var label = 0;
  var $1;
  $1=$this;
  var $2=$1;
  var $3=$2;
  return;
}
function __ZNSt20bad_array_new_lengthC2Ev($this) {
  var label = 0;
  var $1;
  $1=$this;
  var $2=$1;
  var $3=$2;
  __ZNSt9bad_allocC2Ev($3);
  var $4=$2;
  HEAP32[(($4)>>2)]=((__ZTVSt20bad_array_new_length+8)|0);
  return;
}
function __ZNSt20bad_array_new_lengthD0Ev($this) {
  var label = 0;
  var $1;
  $1=$this;
  var $2=$1;
  __ZNSt9bad_allocD2Ev($2);
  var $3=$2;
  __ZdlPv($3);
  return;
}
function _getopt($nargc, $nargv, $options) {
  var label = 0;
  var $1;
  var $2;
  var $3;
  $1=$nargc;
  $2=$nargv;
  $3=$options;
  var $4=$1;
  var $5=$2;
  var $6=$3;
  var $7=_getopt_internal($4, $5, $6, 0, 0, 0);
  return $7;
}
function _add_segment($m, $tbase, $tsize, $mmapped) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $old_top;
      var $oldsp;
      var $old_end;
      var $ssize;
      var $rawsp;
      var $offset;
      var $asp;
      var $csp;
      var $sp;
      var $ss;
      var $tnext;
      var $p;
      var $nfences;
      var $nextp;
      var $q;
      var $psize;
      var $tn;
      var $I;
      var $B;
      var $F;
      var $TP;
      var $H;
      var $I1;
      var $X;
      var $Y;
      var $N;
      var $K;
      var $T;
      var $K2;
      var $C;
      var $F3;
      $1=$m;
      $2=$tbase;
      $3=$tsize;
      $4=$mmapped;
      var $5=$1;
      var $6=(($5+24)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=$7;
      $old_top=$8;
      var $9=$1;
      var $10=$old_top;
      var $11=_segment_holding($9, $10);
      $oldsp=$11;
      var $12=$oldsp;
      var $13=(($12)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=$oldsp;
      var $16=(($15+4)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=(($14+$17)|0);
      $old_end=$18;
      $ssize=24;
      var $19=$old_end;
      var $20=$ssize;
      var $21=((($20)+(16))|0);
      var $22=((($21)+(7))|0);
      var $23=(((-$22))|0);
      var $24=(($19+$23)|0);
      $rawsp=$24;
      var $25=$rawsp;
      var $26=(($25+8)|0);
      var $27=$26;
      var $28=$27 & 7;
      var $29=(($28)|(0))==0;
      if ($29) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $39 = 0;label = 4; break;
    case 3: 
      var $32=$rawsp;
      var $33=(($32+8)|0);
      var $34=$33;
      var $35=$34 & 7;
      var $36=(((8)-($35))|0);
      var $37=$36 & 7;
      var $39 = $37;label = 4; break;
    case 4: 
      var $39;
      $offset=$39;
      var $40=$rawsp;
      var $41=$offset;
      var $42=(($40+$41)|0);
      $asp=$42;
      var $43=$asp;
      var $44=$old_top;
      var $45=(($44+16)|0);
      var $46=(($43)>>>(0)) < (($45)>>>(0));
      if ($46) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $48=$old_top;
      var $52 = $48;label = 7; break;
    case 6: 
      var $50=$asp;
      var $52 = $50;label = 7; break;
    case 7: 
      var $52;
      $csp=$52;
      var $53=$csp;
      var $54=$53;
      $sp=$54;
      var $55=$sp;
      var $56=$55;
      var $57=(($56+8)|0);
      var $58=$57;
      $ss=$58;
      var $59=$sp;
      var $60=$59;
      var $61=$ssize;
      var $62=(($60+$61)|0);
      var $63=$62;
      $tnext=$63;
      var $64=$tnext;
      $p=$64;
      $nfences=0;
      var $65=$1;
      var $66=$2;
      var $67=$66;
      var $68=$3;
      var $69=((($68)-(40))|0);
      _init_top($65, $67, $69);
      var $70=$ssize;
      var $71=$70 | 1;
      var $72=$71 | 2;
      var $73=$sp;
      var $74=(($73+4)|0);
      HEAP32[(($74)>>2)]=$72;
      var $75=$ss;
      var $76=$1;
      var $77=(($76+448)|0);
      var $78=$75;
      var $79=$77;
      assert(16 % 1 === 0);HEAP32[(($78)>>2)]=HEAP32[(($79)>>2)];HEAP32[((($78)+(4))>>2)]=HEAP32[((($79)+(4))>>2)];HEAP32[((($78)+(8))>>2)]=HEAP32[((($79)+(8))>>2)];HEAP32[((($78)+(12))>>2)]=HEAP32[((($79)+(12))>>2)];
      var $80=$2;
      var $81=$1;
      var $82=(($81+448)|0);
      var $83=(($82)|0);
      HEAP32[(($83)>>2)]=$80;
      var $84=$3;
      var $85=$1;
      var $86=(($85+448)|0);
      var $87=(($86+4)|0);
      HEAP32[(($87)>>2)]=$84;
      var $88=$4;
      var $89=$1;
      var $90=(($89+448)|0);
      var $91=(($90+12)|0);
      HEAP32[(($91)>>2)]=$88;
      var $92=$ss;
      var $93=$1;
      var $94=(($93+448)|0);
      var $95=(($94+8)|0);
      HEAP32[(($95)>>2)]=$92;
      label = 8; break;
    case 8: 
      var $97=$p;
      var $98=$97;
      var $99=(($98+4)|0);
      var $100=$99;
      $nextp=$100;
      var $101=$p;
      var $102=(($101+4)|0);
      HEAP32[(($102)>>2)]=7;
      var $103=$nfences;
      var $104=((($103)+(1))|0);
      $nfences=$104;
      var $105=$nextp;
      var $106=(($105+4)|0);
      var $107=$106;
      var $108=$old_end;
      var $109=(($107)>>>(0)) < (($108)>>>(0));
      if ($109) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $111=$nextp;
      $p=$111;
      label = 11; break;
    case 10: 
      label = 12; break;
    case 11: 
      label = 8; break;
    case 12: 
      var $115=$csp;
      var $116=$old_top;
      var $117=(($115)|(0))!=(($116)|(0));
      if ($117) { label = 13; break; } else { label = 49; break; }
    case 13: 
      var $119=$old_top;
      var $120=$119;
      $q=$120;
      var $121=$csp;
      var $122=$old_top;
      var $123=$121;
      var $124=$122;
      var $125=((($123)-($124))|0);
      $psize=$125;
      var $126=$q;
      var $127=$126;
      var $128=$psize;
      var $129=(($127+$128)|0);
      var $130=$129;
      $tn=$130;
      var $131=$tn;
      var $132=(($131+4)|0);
      var $133=HEAP32[(($132)>>2)];
      var $134=$133 & -2;
      HEAP32[(($132)>>2)]=$134;
      var $135=$psize;
      var $136=$135 | 1;
      var $137=$q;
      var $138=(($137+4)|0);
      HEAP32[(($138)>>2)]=$136;
      var $139=$psize;
      var $140=$q;
      var $141=$140;
      var $142=$psize;
      var $143=(($141+$142)|0);
      var $144=$143;
      var $145=(($144)|0);
      HEAP32[(($145)>>2)]=$139;
      var $146=$psize;
      var $147=$146 >>> 3;
      var $148=(($147)>>>(0)) < 32;
      if ($148) { label = 14; break; } else { label = 21; break; }
    case 14: 
      var $150=$psize;
      var $151=$150 >>> 3;
      $I=$151;
      var $152=$I;
      var $153=$152 << 1;
      var $154=$1;
      var $155=(($154+40)|0);
      var $156=(($155+($153<<2))|0);
      var $157=$156;
      var $158=$157;
      $B=$158;
      var $159=$B;
      $F=$159;
      var $160=$1;
      var $161=(($160)|0);
      var $162=HEAP32[(($161)>>2)];
      var $163=$I;
      var $164=1 << $163;
      var $165=$162 & $164;
      var $166=(($165)|(0))!=0;
      if ($166) { label = 16; break; } else { label = 15; break; }
    case 15: 
      var $168=$I;
      var $169=1 << $168;
      var $170=$1;
      var $171=(($170)|0);
      var $172=HEAP32[(($171)>>2)];
      var $173=$172 | $169;
      HEAP32[(($171)>>2)]=$173;
      label = 20; break;
    case 16: 
      var $175=$B;
      var $176=(($175+8)|0);
      var $177=HEAP32[(($176)>>2)];
      var $178=$177;
      var $179=$1;
      var $180=(($179+16)|0);
      var $181=HEAP32[(($180)>>2)];
      var $182=(($178)>>>(0)) >= (($181)>>>(0));
      var $183=(($182)&(1));
      var $184=($183);
      var $185=(($184)|(0))!=0;
      if ($185) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $187=$B;
      var $188=(($187+8)|0);
      var $189=HEAP32[(($188)>>2)];
      $F=$189;
      label = 19; break;
    case 18: 
      _abort();
      throw "Reached an unreachable!";
    case 19: 
      label = 20; break;
    case 20: 
      var $193=$q;
      var $194=$B;
      var $195=(($194+8)|0);
      HEAP32[(($195)>>2)]=$193;
      var $196=$q;
      var $197=$F;
      var $198=(($197+12)|0);
      HEAP32[(($198)>>2)]=$196;
      var $199=$F;
      var $200=$q;
      var $201=(($200+8)|0);
      HEAP32[(($201)>>2)]=$199;
      var $202=$B;
      var $203=$q;
      var $204=(($203+12)|0);
      HEAP32[(($204)>>2)]=$202;
      label = 48; break;
    case 21: 
      var $206=$q;
      var $207=$206;
      $TP=$207;
      var $208=$psize;
      var $209=$208 >>> 8;
      $X=$209;
      var $210=$X;
      var $211=(($210)|(0))==0;
      if ($211) { label = 22; break; } else { label = 23; break; }
    case 22: 
      $I1=0;
      label = 27; break;
    case 23: 
      var $214=$X;
      var $215=(($214)>>>(0)) > 65535;
      if ($215) { label = 24; break; } else { label = 25; break; }
    case 24: 
      $I1=31;
      label = 26; break;
    case 25: 
      var $218=$X;
      $Y=$218;
      var $219=$Y;
      var $220=((($219)-(256))|0);
      var $221=$220 >>> 16;
      var $222=$221 & 8;
      $N=$222;
      var $223=$N;
      var $224=$Y;
      var $225=$224 << $223;
      $Y=$225;
      var $226=((($225)-(4096))|0);
      var $227=$226 >>> 16;
      var $228=$227 & 4;
      $K=$228;
      var $229=$K;
      var $230=$N;
      var $231=((($230)+($229))|0);
      $N=$231;
      var $232=$K;
      var $233=$Y;
      var $234=$233 << $232;
      $Y=$234;
      var $235=((($234)-(16384))|0);
      var $236=$235 >>> 16;
      var $237=$236 & 2;
      $K=$237;
      var $238=$N;
      var $239=((($238)+($237))|0);
      $N=$239;
      var $240=$N;
      var $241=(((14)-($240))|0);
      var $242=$K;
      var $243=$Y;
      var $244=$243 << $242;
      $Y=$244;
      var $245=$244 >>> 15;
      var $246=((($241)+($245))|0);
      $K=$246;
      var $247=$K;
      var $248=$247 << 1;
      var $249=$psize;
      var $250=$K;
      var $251=((($250)+(7))|0);
      var $252=$249 >>> (($251)>>>(0));
      var $253=$252 & 1;
      var $254=((($248)+($253))|0);
      $I1=$254;
      label = 26; break;
    case 26: 
      label = 27; break;
    case 27: 
      var $257=$I1;
      var $258=$1;
      var $259=(($258+304)|0);
      var $260=(($259+($257<<2))|0);
      $H=$260;
      var $261=$I1;
      var $262=$TP;
      var $263=(($262+28)|0);
      HEAP32[(($263)>>2)]=$261;
      var $264=$TP;
      var $265=(($264+16)|0);
      var $266=(($265+4)|0);
      HEAP32[(($266)>>2)]=0;
      var $267=$TP;
      var $268=(($267+16)|0);
      var $269=(($268)|0);
      HEAP32[(($269)>>2)]=0;
      var $270=$1;
      var $271=(($270+4)|0);
      var $272=HEAP32[(($271)>>2)];
      var $273=$I1;
      var $274=1 << $273;
      var $275=$272 & $274;
      var $276=(($275)|(0))!=0;
      if ($276) { label = 29; break; } else { label = 28; break; }
    case 28: 
      var $278=$I1;
      var $279=1 << $278;
      var $280=$1;
      var $281=(($280+4)|0);
      var $282=HEAP32[(($281)>>2)];
      var $283=$282 | $279;
      HEAP32[(($281)>>2)]=$283;
      var $284=$TP;
      var $285=$H;
      HEAP32[(($285)>>2)]=$284;
      var $286=$H;
      var $287=$286;
      var $288=$TP;
      var $289=(($288+24)|0);
      HEAP32[(($289)>>2)]=$287;
      var $290=$TP;
      var $291=$TP;
      var $292=(($291+12)|0);
      HEAP32[(($292)>>2)]=$290;
      var $293=$TP;
      var $294=(($293+8)|0);
      HEAP32[(($294)>>2)]=$290;
      label = 47; break;
    case 29: 
      var $296=$H;
      var $297=HEAP32[(($296)>>2)];
      $T=$297;
      var $298=$psize;
      var $299=$I1;
      var $300=(($299)|(0))==31;
      if ($300) { label = 30; break; } else { label = 31; break; }
    case 30: 
      var $309 = 0;label = 32; break;
    case 31: 
      var $303=$I1;
      var $304=$303 >>> 1;
      var $305=((($304)+(8))|0);
      var $306=((($305)-(2))|0);
      var $307=(((31)-($306))|0);
      var $309 = $307;label = 32; break;
    case 32: 
      var $309;
      var $310=$298 << $309;
      $K2=$310;
      label = 33; break;
    case 33: 
      var $312=$T;
      var $313=(($312+4)|0);
      var $314=HEAP32[(($313)>>2)];
      var $315=$314 & -8;
      var $316=$psize;
      var $317=(($315)|(0))!=(($316)|(0));
      if ($317) { label = 34; break; } else { label = 40; break; }
    case 34: 
      var $319=$K2;
      var $320=$319 >>> 31;
      var $321=$320 & 1;
      var $322=$T;
      var $323=(($322+16)|0);
      var $324=(($323+($321<<2))|0);
      $C=$324;
      var $325=$K2;
      var $326=$325 << 1;
      $K2=$326;
      var $327=$C;
      var $328=HEAP32[(($327)>>2)];
      var $329=(($328)|(0))!=0;
      if ($329) { label = 35; break; } else { label = 36; break; }
    case 35: 
      var $331=$C;
      var $332=HEAP32[(($331)>>2)];
      $T=$332;
      label = 39; break;
    case 36: 
      var $334=$C;
      var $335=$334;
      var $336=$1;
      var $337=(($336+16)|0);
      var $338=HEAP32[(($337)>>2)];
      var $339=(($335)>>>(0)) >= (($338)>>>(0));
      var $340=(($339)&(1));
      var $341=($340);
      var $342=(($341)|(0))!=0;
      if ($342) { label = 37; break; } else { label = 38; break; }
    case 37: 
      var $344=$TP;
      var $345=$C;
      HEAP32[(($345)>>2)]=$344;
      var $346=$T;
      var $347=$TP;
      var $348=(($347+24)|0);
      HEAP32[(($348)>>2)]=$346;
      var $349=$TP;
      var $350=$TP;
      var $351=(($350+12)|0);
      HEAP32[(($351)>>2)]=$349;
      var $352=$TP;
      var $353=(($352+8)|0);
      HEAP32[(($353)>>2)]=$349;
      label = 46; break;
    case 38: 
      _abort();
      throw "Reached an unreachable!";
    case 39: 
      label = 45; break;
    case 40: 
      var $357=$T;
      var $358=(($357+8)|0);
      var $359=HEAP32[(($358)>>2)];
      $F3=$359;
      var $360=$T;
      var $361=$360;
      var $362=$1;
      var $363=(($362+16)|0);
      var $364=HEAP32[(($363)>>2)];
      var $365=(($361)>>>(0)) >= (($364)>>>(0));
      if ($365) { label = 41; break; } else { var $374 = 0;label = 42; break; }
    case 41: 
      var $367=$F3;
      var $368=$367;
      var $369=$1;
      var $370=(($369+16)|0);
      var $371=HEAP32[(($370)>>2)];
      var $372=(($368)>>>(0)) >= (($371)>>>(0));
      var $374 = $372;label = 42; break;
    case 42: 
      var $374;
      var $375=(($374)&(1));
      var $376=($375);
      var $377=(($376)|(0))!=0;
      if ($377) { label = 43; break; } else { label = 44; break; }
    case 43: 
      var $379=$TP;
      var $380=$F3;
      var $381=(($380+12)|0);
      HEAP32[(($381)>>2)]=$379;
      var $382=$T;
      var $383=(($382+8)|0);
      HEAP32[(($383)>>2)]=$379;
      var $384=$F3;
      var $385=$TP;
      var $386=(($385+8)|0);
      HEAP32[(($386)>>2)]=$384;
      var $387=$T;
      var $388=$TP;
      var $389=(($388+12)|0);
      HEAP32[(($389)>>2)]=$387;
      var $390=$TP;
      var $391=(($390+24)|0);
      HEAP32[(($391)>>2)]=0;
      label = 46; break;
    case 44: 
      _abort();
      throw "Reached an unreachable!";
    case 45: 
      label = 33; break;
    case 46: 
      label = 47; break;
    case 47: 
      label = 48; break;
    case 48: 
      label = 49; break;
    case 49: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
function __Znwj($size) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $p;
      var $nh;
      var $2;
      var $3;
      $1=$size;
      var $4=$1;
      var $5=(($4)|(0))==0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=1;
      label = 3; break;
    case 3: 
      label = 4; break;
    case 4: 
      var $9=$1;
      var $10=_malloc($9);
      $p=$10;
      var $11=(($10)|(0))==0;
      if ($11) { label = 5; break; } else { label = 13; break; }
    case 5: 
      var $13=__ZSt15get_new_handlerv();
      $nh=$13;
      var $14=$nh;
      var $15=(($14)|(0))!=0;
      if ($15) { label = 6; break; } else { label = 11; break; }
    case 6: 
      var $17=$nh;
      (function() { try { __THREW__ = 0; return FUNCTION_TABLE[$17]() } catch(e) { if (typeof e != "number") throw e; if (ABORT) throw e; __THREW__ = 1; return null } })();if (!__THREW__) { label = 7; break; } else { label = 8; break; }
    case 7: 
      label = 12; break;
    case 8: 
      var $20$0 = ___cxa_find_matching_catch(-1, -1); $20$1 = tempRet0;
      var $21=$20$0;
      $2=$21;
      var $22=$20$1;
      $3=$22;
      label = 9; break;
    case 9: 
      var $24=$3;
      var $25=(($24)|(0)) < 0;
      if ($25) { label = 10; break; } else { label = 14; break; }
    case 10: 
      var $27=$2;
      ___cxa_call_unexpected($27);
      throw "Reached an unreachable!";
    case 11: 
      var $29=___cxa_allocate_exception(4);
      var $30=$29;
      __ZNSt9bad_allocC2Ev($30);
      (function() { try { __THREW__ = 0; return ___cxa_throw($29, __ZTISt9bad_alloc, ((FUNCTION_TABLE_OFFSET + 48))) } catch(e) { if (typeof e != "number") throw e; if (ABORT) throw e; __THREW__ = 1; return null } })();if (!__THREW__) { label = 15; break; } else { label = 8; break; }
    case 12: 
      label = 4; break;
    case 13: 
      var $33=$p;
      return $33;
    case 14: 
      var $35=$2;
      var $36=$3;
      var $37$0=$35;
      var $37$1=0;
      var $38$0=$37$0;
      var $38$1=$36;
      ___resumeException($38$0)
    case 15: 
      throw "Reached an unreachable!";
    default: assert(0, "bad label: " + label);
  }
}
function __ZnwjRKSt9nothrow_t($size, $0) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $2;
      var $3;
      var $p;
      var $4;
      var $5;
      $2=$size;
      $3=$0;
      $p=0;
      var $6=$2;
      var $7 = (function() { try { __THREW__ = 0; return __Znwj($6) } catch(e) { if (typeof e != "number") throw e; if (ABORT) throw e; __THREW__ = 1; return null } })();if (!__THREW__) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $p=$7;
      label = 6; break;
    case 3: 
      var $10$0 = ___cxa_find_matching_catch(-1, -1,0); $10$1 = tempRet0;
      var $11=$10$0;
      $4=$11;
      var $12=$10$1;
      $5=$12;
      label = 4; break;
    case 4: 
      var $14=$4;
      var $15=___cxa_begin_catch($14);
      (function() { try { __THREW__ = 0; return ___cxa_end_catch() } catch(e) { if (typeof e != "number") throw e; if (ABORT) throw e; __THREW__ = 1; return null } })();if (!__THREW__) { label = 5; break; } else { label = 7; break; }
    case 5: 
      label = 6; break;
    case 6: 
      var $18=$p;
      return $18;
    case 7: 
      var $20$0 = ___cxa_find_matching_catch(-1, -1); $20$1 = tempRet0;
      var $21=$20$0;
      $4=$21;
      var $22=$20$1;
      $5=$22;
      label = 8; break;
    case 8: 
      var $24=$4;
      ___cxa_call_unexpected($24);
      throw "Reached an unreachable!";
    default: assert(0, "bad label: " + label);
  }
}
function __Znaj($size) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $1=$size;
      var $4=$1;
      var $5 = (function() { try { __THREW__ = 0; return __Znwj($4) } catch(e) { if (typeof e != "number") throw e; if (ABORT) throw e; __THREW__ = 1; return null } })();if (!__THREW__) { label = 2; break; } else { label = 3; break; }
    case 2: 
      return $5;
    case 3: 
      var $8$0 = ___cxa_find_matching_catch(-1, -1); $8$1 = tempRet0;
      var $9=$8$0;
      $2=$9;
      var $10=$8$1;
      $3=$10;
      label = 4; break;
    case 4: 
      var $12=$3;
      var $13=(($12)|(0)) < 0;
      if ($13) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $15=$2;
      ___cxa_call_unexpected($15);
      throw "Reached an unreachable!";
    case 6: 
      var $17=$2;
      var $18=$3;
      var $19$0=$17;
      var $19$1=0;
      var $20$0=$19$0;
      var $20$1=$18;
      ___resumeException($20$0)
    default: assert(0, "bad label: " + label);
  }
}
function __ZnajRKSt9nothrow_t($size, $0) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $2;
      var $3;
      var $p;
      var $4;
      var $5;
      $2=$size;
      $3=$0;
      $p=0;
      var $6=$2;
      var $7 = (function() { try { __THREW__ = 0; return __Znaj($6) } catch(e) { if (typeof e != "number") throw e; if (ABORT) throw e; __THREW__ = 1; return null } })();if (!__THREW__) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $p=$7;
      label = 6; break;
    case 3: 
      var $10$0 = ___cxa_find_matching_catch(-1, -1,0); $10$1 = tempRet0;
      var $11=$10$0;
      $4=$11;
      var $12=$10$1;
      $5=$12;
      label = 4; break;
    case 4: 
      var $14=$4;
      var $15=___cxa_begin_catch($14);
      (function() { try { __THREW__ = 0; return ___cxa_end_catch() } catch(e) { if (typeof e != "number") throw e; if (ABORT) throw e; __THREW__ = 1; return null } })();if (!__THREW__) { label = 5; break; } else { label = 7; break; }
    case 5: 
      label = 6; break;
    case 6: 
      var $18=$p;
      return $18;
    case 7: 
      var $20$0 = ___cxa_find_matching_catch(-1, -1); $20$1 = tempRet0;
      var $21=$20$0;
      $4=$21;
      var $22=$20$1;
      $5=$22;
      label = 8; break;
    case 8: 
      var $24=$4;
      ___cxa_call_unexpected($24);
      throw "Reached an unreachable!";
    default: assert(0, "bad label: " + label);
  }
}
function __ZSt17__throw_bad_allocv() {
  var label = 0;
  var $1=___cxa_allocate_exception(4);
  var $2=$1;
  __ZNSt9bad_allocC2Ev($2);
  ___cxa_throw($1, __ZTISt9bad_alloc, ((FUNCTION_TABLE_OFFSET + 48)));
  throw "Reached an unreachable!";
  return;
}
function _getopt_internal($nargc, $nargv, $options, $long_options, $idx, $flags) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $6;
      var $7;
      var $oli;
      var $optchar;
      var $short_too;
      $2=$nargc;
      $3=$nargv;
      $4=$options;
      $5=$long_options;
      $6=$idx;
      $7=$flags;
      var $8=$4;
      var $9=(($8)|(0))==0;
      if ($9) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=-1;
      label = 108; break;
    case 3: 
      var $12=HEAP32[((_optind)>>2)];
      var $13=(($12)|(0))==0;
      if ($13) { label = 4; break; } else { label = 5; break; }
    case 4: 
      HEAP32[((_optreset)>>2)]=1;
      HEAP32[((_optind)>>2)]=1;
      label = 5; break;
    case 5: 
      var $16=HEAP32[((_getopt_internal_posixly_correct)>>2)];
      var $17=(($16)|(0))==-1;
      if ($17) { label = 7; break; } else { label = 6; break; }
    case 6: 
      var $19=HEAP32[((_optreset)>>2)];
      var $20=(($19)|(0))!=0;
      if ($20) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $22=_getenv(((__str547)|0));
      var $23=(($22)|(0))!=0;
      var $24=(($23)&(1));
      HEAP32[((_getopt_internal_posixly_correct)>>2)]=$24;
      label = 8; break;
    case 8: 
      var $26=$4;
      var $27=HEAP8[($26)];
      var $28=(($27 << 24) >> 24);
      var $29=(($28)|(0))==45;
      if ($29) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $31=$7;
      var $32=$31 | 2;
      $7=$32;
      label = 14; break;
    case 10: 
      var $34=HEAP32[((_getopt_internal_posixly_correct)>>2)];
      var $35=(($34)|(0))!=0;
      if ($35) { label = 12; break; } else { label = 11; break; }
    case 11: 
      var $37=$4;
      var $38=HEAP8[($37)];
      var $39=(($38 << 24) >> 24);
      var $40=(($39)|(0))==43;
      if ($40) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $42=$7;
      var $43=$42 & -2;
      $7=$43;
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      var $46=$4;
      var $47=HEAP8[($46)];
      var $48=(($47 << 24) >> 24);
      var $49=(($48)|(0))==43;
      if ($49) { label = 16; break; } else { label = 15; break; }
    case 15: 
      var $51=$4;
      var $52=HEAP8[($51)];
      var $53=(($52 << 24) >> 24);
      var $54=(($53)|(0))==45;
      if ($54) { label = 16; break; } else { label = 17; break; }
    case 16: 
      var $56=$4;
      var $57=(($56+1)|0);
      $4=$57;
      label = 17; break;
    case 17: 
      HEAP32[((_optarg)>>2)]=0;
      var $59=HEAP32[((_optreset)>>2)];
      var $60=(($59)|(0))!=0;
      if ($60) { label = 18; break; } else { label = 19; break; }
    case 18: 
      HEAP32[((_nonopt_end)>>2)]=-1;
      HEAP32[((_nonopt_start)>>2)]=-1;
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $64=HEAP32[((_optreset)>>2)];
      var $65=(($64)|(0))!=0;
      if ($65) { label = 22; break; } else { label = 21; break; }
    case 21: 
      var $67=HEAP32[((_place)>>2)];
      var $68=HEAP8[($67)];
      var $69=(($68 << 24) >> 24)!=0;
      if ($69) { label = 52; break; } else { label = 22; break; }
    case 22: 
      HEAP32[((_optreset)>>2)]=0;
      var $71=HEAP32[((_optind)>>2)];
      var $72=$2;
      var $73=(($71)|(0)) >= (($72)|(0));
      if ($73) { label = 23; break; } else { label = 29; break; }
    case 23: 
      HEAP32[((_place)>>2)]=((__str1648)|0);
      var $75=HEAP32[((_nonopt_end)>>2)];
      var $76=(($75)|(0))!=-1;
      if ($76) { label = 24; break; } else { label = 25; break; }
    case 24: 
      var $78=HEAP32[((_nonopt_start)>>2)];
      var $79=HEAP32[((_nonopt_end)>>2)];
      var $80=HEAP32[((_optind)>>2)];
      var $81=$3;
      _permute_args($78, $79, $80, $81);
      var $82=HEAP32[((_nonopt_end)>>2)];
      var $83=HEAP32[((_nonopt_start)>>2)];
      var $84=((($82)-($83))|0);
      var $85=HEAP32[((_optind)>>2)];
      var $86=((($85)-($84))|0);
      HEAP32[((_optind)>>2)]=$86;
      label = 28; break;
    case 25: 
      var $88=HEAP32[((_nonopt_start)>>2)];
      var $89=(($88)|(0))!=-1;
      if ($89) { label = 26; break; } else { label = 27; break; }
    case 26: 
      var $91=HEAP32[((_nonopt_start)>>2)];
      HEAP32[((_optind)>>2)]=$91;
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      HEAP32[((_nonopt_end)>>2)]=-1;
      HEAP32[((_nonopt_start)>>2)]=-1;
      $1=-1;
      label = 108; break;
    case 29: 
      var $95=HEAP32[((_optind)>>2)];
      var $96=$3;
      var $97=(($96+($95<<2))|0);
      var $98=HEAP32[(($97)>>2)];
      HEAP32[((_place)>>2)]=$98;
      var $99=HEAP8[($98)];
      var $100=(($99 << 24) >> 24);
      var $101=(($100)|(0))!=45;
      if ($101) { label = 32; break; } else { label = 30; break; }
    case 30: 
      var $103=HEAP32[((_place)>>2)];
      var $104=(($103+1)|0);
      var $105=HEAP8[($104)];
      var $106=(($105 << 24) >> 24);
      var $107=(($106)|(0))==0;
      if ($107) { label = 31; break; } else { label = 42; break; }
    case 31: 
      var $109=$4;
      var $110=_strchr($109, 45);
      var $111=(($110)|(0))==0;
      if ($111) { label = 32; break; } else { label = 42; break; }
    case 32: 
      HEAP32[((_place)>>2)]=((__str1648)|0);
      var $113=$7;
      var $114=$113 & 2;
      var $115=(($114)|(0))!=0;
      if ($115) { label = 33; break; } else { label = 34; break; }
    case 33: 
      var $117=HEAP32[((_optind)>>2)];
      var $118=((($117)+(1))|0);
      HEAP32[((_optind)>>2)]=$118;
      var $119=$3;
      var $120=(($119+($117<<2))|0);
      var $121=HEAP32[(($120)>>2)];
      HEAP32[((_optarg)>>2)]=$121;
      $1=1;
      label = 108; break;
    case 34: 
      var $123=$7;
      var $124=$123 & 1;
      var $125=(($124)|(0))!=0;
      if ($125) { label = 36; break; } else { label = 35; break; }
    case 35: 
      $1=-1;
      label = 108; break;
    case 36: 
      var $128=HEAP32[((_nonopt_start)>>2)];
      var $129=(($128)|(0))==-1;
      if ($129) { label = 37; break; } else { label = 38; break; }
    case 37: 
      var $131=HEAP32[((_optind)>>2)];
      HEAP32[((_nonopt_start)>>2)]=$131;
      label = 41; break;
    case 38: 
      var $133=HEAP32[((_nonopt_end)>>2)];
      var $134=(($133)|(0))!=-1;
      if ($134) { label = 39; break; } else { label = 40; break; }
    case 39: 
      var $136=HEAP32[((_nonopt_start)>>2)];
      var $137=HEAP32[((_nonopt_end)>>2)];
      var $138=HEAP32[((_optind)>>2)];
      var $139=$3;
      _permute_args($136, $137, $138, $139);
      var $140=HEAP32[((_optind)>>2)];
      var $141=HEAP32[((_nonopt_end)>>2)];
      var $142=HEAP32[((_nonopt_start)>>2)];
      var $143=((($141)-($142))|0);
      var $144=((($140)-($143))|0);
      HEAP32[((_nonopt_start)>>2)]=$144;
      HEAP32[((_nonopt_end)>>2)]=-1;
      label = 40; break;
    case 40: 
      label = 41; break;
    case 41: 
      var $147=HEAP32[((_optind)>>2)];
      var $148=((($147)+(1))|0);
      HEAP32[((_optind)>>2)]=$148;
      label = 20; break;
    case 42: 
      var $150=HEAP32[((_nonopt_start)>>2)];
      var $151=(($150)|(0))!=-1;
      if ($151) { label = 43; break; } else { label = 45; break; }
    case 43: 
      var $153=HEAP32[((_nonopt_end)>>2)];
      var $154=(($153)|(0))==-1;
      if ($154) { label = 44; break; } else { label = 45; break; }
    case 44: 
      var $156=HEAP32[((_optind)>>2)];
      HEAP32[((_nonopt_end)>>2)]=$156;
      label = 45; break;
    case 45: 
      var $158=HEAP32[((_place)>>2)];
      var $159=(($158+1)|0);
      var $160=HEAP8[($159)];
      var $161=(($160 << 24) >> 24);
      var $162=(($161)|(0))!=0;
      if ($162) { label = 46; break; } else { label = 51; break; }
    case 46: 
      var $164=HEAP32[((_place)>>2)];
      var $165=(($164+1)|0);
      HEAP32[((_place)>>2)]=$165;
      var $166=HEAP8[($165)];
      var $167=(($166 << 24) >> 24);
      var $168=(($167)|(0))==45;
      if ($168) { label = 47; break; } else { label = 51; break; }
    case 47: 
      var $170=HEAP32[((_place)>>2)];
      var $171=(($170+1)|0);
      var $172=HEAP8[($171)];
      var $173=(($172 << 24) >> 24);
      var $174=(($173)|(0))==0;
      if ($174) { label = 48; break; } else { label = 51; break; }
    case 48: 
      var $176=HEAP32[((_optind)>>2)];
      var $177=((($176)+(1))|0);
      HEAP32[((_optind)>>2)]=$177;
      HEAP32[((_place)>>2)]=((__str1648)|0);
      var $178=HEAP32[((_nonopt_end)>>2)];
      var $179=(($178)|(0))!=-1;
      if ($179) { label = 49; break; } else { label = 50; break; }
    case 49: 
      var $181=HEAP32[((_nonopt_start)>>2)];
      var $182=HEAP32[((_nonopt_end)>>2)];
      var $183=HEAP32[((_optind)>>2)];
      var $184=$3;
      _permute_args($181, $182, $183, $184);
      var $185=HEAP32[((_nonopt_end)>>2)];
      var $186=HEAP32[((_nonopt_start)>>2)];
      var $187=((($185)-($186))|0);
      var $188=HEAP32[((_optind)>>2)];
      var $189=((($188)-($187))|0);
      HEAP32[((_optind)>>2)]=$189;
      label = 50; break;
    case 50: 
      HEAP32[((_nonopt_end)>>2)]=-1;
      HEAP32[((_nonopt_start)>>2)]=-1;
      $1=-1;
      label = 108; break;
    case 51: 
      label = 52; break;
    case 52: 
      var $193=$5;
      var $194=(($193)|(0))!=0;
      if ($194) { label = 53; break; } else { label = 65; break; }
    case 53: 
      var $196=HEAP32[((_place)>>2)];
      var $197=HEAP32[((_optind)>>2)];
      var $198=$3;
      var $199=(($198+($197<<2))|0);
      var $200=HEAP32[(($199)>>2)];
      var $201=(($196)|(0))!=(($200)|(0));
      if ($201) { label = 54; break; } else { label = 65; break; }
    case 54: 
      var $203=HEAP32[((_place)>>2)];
      var $204=HEAP8[($203)];
      var $205=(($204 << 24) >> 24);
      var $206=(($205)|(0))==45;
      if ($206) { label = 56; break; } else { label = 55; break; }
    case 55: 
      var $208=$7;
      var $209=$208 & 4;
      var $210=(($209)|(0))!=0;
      if ($210) { label = 56; break; } else { label = 65; break; }
    case 56: 
      $short_too=0;
      var $212=HEAP32[((_place)>>2)];
      var $213=HEAP8[($212)];
      var $214=(($213 << 24) >> 24);
      var $215=(($214)|(0))==45;
      if ($215) { label = 57; break; } else { label = 58; break; }
    case 57: 
      var $217=HEAP32[((_place)>>2)];
      var $218=(($217+1)|0);
      HEAP32[((_place)>>2)]=$218;
      label = 62; break;
    case 58: 
      var $220=HEAP32[((_place)>>2)];
      var $221=HEAP8[($220)];
      var $222=(($221 << 24) >> 24);
      var $223=(($222)|(0))!=58;
      if ($223) { label = 59; break; } else { label = 61; break; }
    case 59: 
      var $225=$4;
      var $226=HEAP32[((_place)>>2)];
      var $227=HEAP8[($226)];
      var $228=(($227 << 24) >> 24);
      var $229=_strchr($225, $228);
      var $230=(($229)|(0))!=0;
      if ($230) { label = 60; break; } else { label = 61; break; }
    case 60: 
      $short_too=1;
      label = 61; break;
    case 61: 
      label = 62; break;
    case 62: 
      var $234=$3;
      var $235=$4;
      var $236=$5;
      var $237=$6;
      var $238=$short_too;
      var $239=_parse_long_options($234, $235, $236, $237, $238);
      $optchar=$239;
      var $240=$optchar;
      var $241=(($240)|(0))!=-1;
      if ($241) { label = 63; break; } else { label = 64; break; }
    case 63: 
      HEAP32[((_place)>>2)]=((__str1648)|0);
      var $243=$optchar;
      $1=$243;
      label = 108; break;
    case 64: 
      label = 65; break;
    case 65: 
      var $246=HEAP32[((_place)>>2)];
      var $247=(($246+1)|0);
      HEAP32[((_place)>>2)]=$247;
      var $248=HEAP8[($246)];
      var $249=(($248 << 24) >> 24);
      $optchar=$249;
      var $250=(($249)|(0))==58;
      if ($250) { label = 69; break; } else { label = 66; break; }
    case 66: 
      var $252=$optchar;
      var $253=(($252)|(0))==45;
      if ($253) { label = 67; break; } else { label = 68; break; }
    case 67: 
      var $255=HEAP32[((_place)>>2)];
      var $256=HEAP8[($255)];
      var $257=(($256 << 24) >> 24);
      var $258=(($257)|(0))!=0;
      if ($258) { label = 69; break; } else { label = 68; break; }
    case 68: 
      var $260=$4;
      var $261=$optchar;
      var $262=_strchr($260, $261);
      $oli=$262;
      var $263=(($262)|(0))==0;
      if ($263) { label = 69; break; } else { label = 78; break; }
    case 69: 
      var $265=$optchar;
      var $266=(($265)|(0))==45;
      if ($266) { label = 70; break; } else { label = 72; break; }
    case 70: 
      var $268=HEAP32[((_place)>>2)];
      var $269=HEAP8[($268)];
      var $270=(($269 << 24) >> 24);
      var $271=(($270)|(0))==0;
      if ($271) { label = 71; break; } else { label = 72; break; }
    case 71: 
      $1=-1;
      label = 108; break;
    case 72: 
      var $274=HEAP32[((_place)>>2)];
      var $275=HEAP8[($274)];
      var $276=(($275 << 24) >> 24)!=0;
      if ($276) { label = 74; break; } else { label = 73; break; }
    case 73: 
      var $278=HEAP32[((_optind)>>2)];
      var $279=((($278)+(1))|0);
      HEAP32[((_optind)>>2)]=$279;
      label = 74; break;
    case 74: 
      var $281=HEAP32[((_opterr)>>2)];
      var $282=(($281)|(0))!=0;
      if ($282) { label = 75; break; } else { label = 77; break; }
    case 75: 
      var $284=$4;
      var $285=HEAP8[($284)];
      var $286=(($285 << 24) >> 24);
      var $287=(($286)|(0))!=58;
      if ($287) { label = 76; break; } else { label = 77; break; }
    case 76: 
      var $289=$optchar;
      __warnx(((_illoptchar)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$289,tempInt));
      label = 77; break;
    case 77: 
      var $291=$optchar;
      HEAP32[((_optopt)>>2)]=$291;
      $1=63;
      label = 108; break;
    case 78: 
      var $293=$5;
      var $294=(($293)|(0))!=0;
      if ($294) { label = 79; break; } else { label = 91; break; }
    case 79: 
      var $296=$optchar;
      var $297=(($296)|(0))==87;
      if ($297) { label = 80; break; } else { label = 91; break; }
    case 80: 
      var $299=$oli;
      var $300=(($299+1)|0);
      var $301=HEAP8[($300)];
      var $302=(($301 << 24) >> 24);
      var $303=(($302)|(0))==59;
      if ($303) { label = 81; break; } else { label = 91; break; }
    case 81: 
      var $305=HEAP32[((_place)>>2)];
      var $306=HEAP8[($305)];
      var $307=(($306 << 24) >> 24)!=0;
      if ($307) { label = 82; break; } else { label = 83; break; }
    case 82: 
      label = 90; break;
    case 83: 
      var $310=HEAP32[((_optind)>>2)];
      var $311=((($310)+(1))|0);
      HEAP32[((_optind)>>2)]=$311;
      var $312=$2;
      var $313=(($311)|(0)) >= (($312)|(0));
      if ($313) { label = 84; break; } else { label = 88; break; }
    case 84: 
      HEAP32[((_place)>>2)]=((__str1648)|0);
      var $315=HEAP32[((_opterr)>>2)];
      var $316=(($315)|(0))!=0;
      if ($316) { label = 85; break; } else { label = 87; break; }
    case 85: 
      var $318=$4;
      var $319=HEAP8[($318)];
      var $320=(($319 << 24) >> 24);
      var $321=(($320)|(0))!=58;
      if ($321) { label = 86; break; } else { label = 87; break; }
    case 86: 
      var $323=$optchar;
      __warnx(((_recargchar)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$323,tempInt));
      label = 87; break;
    case 87: 
      var $325=$optchar;
      HEAP32[((_optopt)>>2)]=$325;
      var $326=$4;
      var $327=HEAP8[($326)];
      var $328=(($327 << 24) >> 24);
      var $329=(($328)|(0))==58;
      var $330=$329 ? 58 : 63;
      $1=$330;
      label = 108; break;
    case 88: 
      var $332=HEAP32[((_optind)>>2)];
      var $333=$3;
      var $334=(($333+($332<<2))|0);
      var $335=HEAP32[(($334)>>2)];
      HEAP32[((_place)>>2)]=$335;
      label = 89; break;
    case 89: 
      label = 90; break;
    case 90: 
      var $338=$3;
      var $339=$4;
      var $340=$5;
      var $341=$6;
      var $342=_parse_long_options($338, $339, $340, $341, 0);
      $optchar=$342;
      HEAP32[((_place)>>2)]=((__str1648)|0);
      var $343=$optchar;
      $1=$343;
      label = 108; break;
    case 91: 
      var $345=$oli;
      var $346=(($345+1)|0);
      $oli=$346;
      var $347=HEAP8[($346)];
      var $348=(($347 << 24) >> 24);
      var $349=(($348)|(0))!=58;
      if ($349) { label = 92; break; } else { label = 95; break; }
    case 92: 
      var $351=HEAP32[((_place)>>2)];
      var $352=HEAP8[($351)];
      var $353=(($352 << 24) >> 24)!=0;
      if ($353) { label = 94; break; } else { label = 93; break; }
    case 93: 
      var $355=HEAP32[((_optind)>>2)];
      var $356=((($355)+(1))|0);
      HEAP32[((_optind)>>2)]=$356;
      label = 94; break;
    case 94: 
      label = 107; break;
    case 95: 
      HEAP32[((_optarg)>>2)]=0;
      var $359=HEAP32[((_place)>>2)];
      var $360=HEAP8[($359)];
      var $361=(($360 << 24) >> 24)!=0;
      if ($361) { label = 96; break; } else { label = 97; break; }
    case 96: 
      var $363=HEAP32[((_place)>>2)];
      HEAP32[((_optarg)>>2)]=$363;
      label = 106; break;
    case 97: 
      var $365=$oli;
      var $366=(($365+1)|0);
      var $367=HEAP8[($366)];
      var $368=(($367 << 24) >> 24);
      var $369=(($368)|(0))!=58;
      if ($369) { label = 98; break; } else { label = 105; break; }
    case 98: 
      var $371=HEAP32[((_optind)>>2)];
      var $372=((($371)+(1))|0);
      HEAP32[((_optind)>>2)]=$372;
      var $373=$2;
      var $374=(($372)|(0)) >= (($373)|(0));
      if ($374) { label = 99; break; } else { label = 103; break; }
    case 99: 
      HEAP32[((_place)>>2)]=((__str1648)|0);
      var $376=HEAP32[((_opterr)>>2)];
      var $377=(($376)|(0))!=0;
      if ($377) { label = 100; break; } else { label = 102; break; }
    case 100: 
      var $379=$4;
      var $380=HEAP8[($379)];
      var $381=(($380 << 24) >> 24);
      var $382=(($381)|(0))!=58;
      if ($382) { label = 101; break; } else { label = 102; break; }
    case 101: 
      var $384=$optchar;
      __warnx(((_recargchar)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$384,tempInt));
      label = 102; break;
    case 102: 
      var $386=$optchar;
      HEAP32[((_optopt)>>2)]=$386;
      var $387=$4;
      var $388=HEAP8[($387)];
      var $389=(($388 << 24) >> 24);
      var $390=(($389)|(0))==58;
      var $391=$390 ? 58 : 63;
      $1=$391;
      label = 108; break;
    case 103: 
      var $393=HEAP32[((_optind)>>2)];
      var $394=$3;
      var $395=(($394+($393<<2))|0);
      var $396=HEAP32[(($395)>>2)];
      HEAP32[((_optarg)>>2)]=$396;
      label = 104; break;
    case 104: 
      label = 105; break;
    case 105: 
      label = 106; break;
    case 106: 
      HEAP32[((_place)>>2)]=((__str1648)|0);
      var $400=HEAP32[((_optind)>>2)];
      var $401=((($400)+(1))|0);
      HEAP32[((_optind)>>2)]=$401;
      label = 107; break;
    case 107: 
      var $403=$optchar;
      $1=$403;
      label = 108; break;
    case 108: 
      var $405=$1;
      STACKTOP = __stackBase__;
      return $405;
    default: assert(0, "bad label: " + label);
  }
}
function _getopt_long($nargc, $nargv, $options, $long_options, $idx) {
  var label = 0;
  var $1;
  var $2;
  var $3;
  var $4;
  var $5;
  $1=$nargc;
  $2=$nargv;
  $3=$options;
  $4=$long_options;
  $5=$idx;
  var $6=$1;
  var $7=$2;
  var $8=$3;
  var $9=$4;
  var $10=$5;
  var $11=_getopt_internal($6, $7, $8, $9, $10, 1);
  return $11;
}
function _getopt_long_only($nargc, $nargv, $options, $long_options, $idx) {
  var label = 0;
  var $1;
  var $2;
  var $3;
  var $4;
  var $5;
  $1=$nargc;
  $2=$nargv;
  $3=$options;
  $4=$long_options;
  $5=$idx;
  var $6=$1;
  var $7=$2;
  var $8=$3;
  var $9=$4;
  var $10=$5;
  var $11=_getopt_internal($6, $7, $8, $9, $10, 5);
  return $11;
}
function _permute_args($panonopt_start, $panonopt_end, $opt_end, $nargv) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $cstart;
      var $cyclelen;
      var $i;
      var $j;
      var $ncycle;
      var $nnonopts;
      var $nopts;
      var $pos;
      var $swap;
      $1=$panonopt_start;
      $2=$panonopt_end;
      $3=$opt_end;
      $4=$nargv;
      var $5=$2;
      var $6=$1;
      var $7=((($5)-($6))|0);
      $nnonopts=$7;
      var $8=$3;
      var $9=$2;
      var $10=((($8)-($9))|0);
      $nopts=$10;
      var $11=$nnonopts;
      var $12=$nopts;
      var $13=_gcd($11, $12);
      $ncycle=$13;
      var $14=$3;
      var $15=$1;
      var $16=((($14)-($15))|0);
      var $17=$ncycle;
      var $18=((((($16)|(0)))/((($17)|(0))))&-1);
      $cyclelen=$18;
      $i=0;
      label = 2; break;
    case 2: 
      var $20=$i;
      var $21=$ncycle;
      var $22=(($20)|(0)) < (($21)|(0));
      if ($22) { label = 3; break; } else { label = 12; break; }
    case 3: 
      var $24=$2;
      var $25=$i;
      var $26=((($24)+($25))|0);
      $cstart=$26;
      var $27=$cstart;
      $pos=$27;
      $j=0;
      label = 4; break;
    case 4: 
      var $29=$j;
      var $30=$cyclelen;
      var $31=(($29)|(0)) < (($30)|(0));
      if ($31) { label = 5; break; } else { label = 10; break; }
    case 5: 
      var $33=$pos;
      var $34=$2;
      var $35=(($33)|(0)) >= (($34)|(0));
      if ($35) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $37=$nnonopts;
      var $38=$pos;
      var $39=((($38)-($37))|0);
      $pos=$39;
      label = 8; break;
    case 7: 
      var $41=$nopts;
      var $42=$pos;
      var $43=((($42)+($41))|0);
      $pos=$43;
      label = 8; break;
    case 8: 
      var $45=$pos;
      var $46=$4;
      var $47=(($46+($45<<2))|0);
      var $48=HEAP32[(($47)>>2)];
      $swap=$48;
      var $49=$cstart;
      var $50=$4;
      var $51=(($50+($49<<2))|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=$pos;
      var $54=$4;
      var $55=(($54+($53<<2))|0);
      HEAP32[(($55)>>2)]=$52;
      var $56=$swap;
      var $57=$cstart;
      var $58=$4;
      var $59=(($58+($57<<2))|0);
      HEAP32[(($59)>>2)]=$56;
      label = 9; break;
    case 9: 
      var $61=$j;
      var $62=((($61)+(1))|0);
      $j=$62;
      label = 4; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $65=$i;
      var $66=((($65)+(1))|0);
      $i=$66;
      label = 2; break;
    case 12: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _gcd($a, $b) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $c;
      $1=$a;
      $2=$b;
      var $3=$1;
      var $4=$2;
      var $5=((($3)|(0)))%((($4)|(0)));
      $c=$5;
      label = 2; break;
    case 2: 
      var $7=$c;
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=$2;
      $1=$10;
      var $11=$c;
      $2=$11;
      var $12=$1;
      var $13=$2;
      var $14=((($12)|(0)))%((($13)|(0)));
      $c=$14;
      label = 2; break;
    case 4: 
      var $16=$2;
      return $16;
    default: assert(0, "bad label: " + label);
  }
}
function _parse_long_options($nargv, $options, $long_options, $idx, $short_too) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $6;
      var $current_argv;
      var $has_equal;
      var $current_argv_len;
      var $i;
      var $match;
      $2=$nargv;
      $3=$options;
      $4=$long_options;
      $5=$idx;
      $6=$short_too;
      var $7=HEAP32[((_place)>>2)];
      $current_argv=$7;
      $match=-1;
      var $8=HEAP32[((_optind)>>2)];
      var $9=((($8)+(1))|0);
      HEAP32[((_optind)>>2)]=$9;
      var $10=$current_argv;
      var $11=_strchr($10, 61);
      $has_equal=$11;
      var $12=(($11)|(0))!=0;
      if ($12) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $14=$has_equal;
      var $15=$current_argv;
      var $16=$14;
      var $17=$15;
      var $18=((($16)-($17))|0);
      $current_argv_len=$18;
      var $19=$has_equal;
      var $20=(($19+1)|0);
      $has_equal=$20;
      label = 4; break;
    case 3: 
      var $22=$current_argv;
      var $23=_strlen($22);
      $current_argv_len=$23;
      label = 4; break;
    case 4: 
      $i=0;
      label = 5; break;
    case 5: 
      var $26=$i;
      var $27=$4;
      var $28=(($27+($26<<4))|0);
      var $29=(($28)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=(($30)|(0))!=0;
      if ($31) { label = 6; break; } else { label = 21; break; }
    case 6: 
      var $33=$current_argv;
      var $34=$i;
      var $35=$4;
      var $36=(($35+($34<<4))|0);
      var $37=(($36)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=$current_argv_len;
      var $40=_strncmp($33, $38, $39);
      var $41=(($40)|(0))!=0;
      if ($41) { label = 7; break; } else { label = 8; break; }
    case 7: 
      label = 20; break;
    case 8: 
      var $44=$i;
      var $45=$4;
      var $46=(($45+($44<<4))|0);
      var $47=(($46)|0);
      var $48=HEAP32[(($47)>>2)];
      var $49=_strlen($48);
      var $50=$current_argv_len;
      var $51=(($49)|(0))==(($50)|(0));
      if ($51) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $53=$i;
      $match=$53;
      label = 21; break;
    case 10: 
      var $55=$6;
      var $56=(($55)|(0))!=0;
      if ($56) { label = 11; break; } else { label = 13; break; }
    case 11: 
      var $58=$current_argv_len;
      var $59=(($58)|(0))==1;
      if ($59) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 20; break;
    case 13: 
      var $62=$match;
      var $63=(($62)|(0))==-1;
      if ($63) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $65=$i;
      $match=$65;
      label = 19; break;
    case 15: 
      var $67=HEAP32[((_opterr)>>2)];
      var $68=(($67)|(0))!=0;
      if ($68) { label = 16; break; } else { label = 18; break; }
    case 16: 
      var $70=$3;
      var $71=HEAP8[($70)];
      var $72=(($71 << 24) >> 24);
      var $73=(($72)|(0))!=58;
      if ($73) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $75=$current_argv_len;
      var $76=$current_argv;
      __warnx(((_ambig)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$75,HEAP32[(((tempInt)+(4))>>2)]=$76,tempInt));
      label = 18; break;
    case 18: 
      HEAP32[((_optopt)>>2)]=0;
      $1=63;
      label = 60; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $80=$i;
      var $81=((($80)+(1))|0);
      $i=$81;
      label = 5; break;
    case 21: 
      var $83=$match;
      var $84=(($83)|(0))!=-1;
      if ($84) { label = 22; break; } else { label = 49; break; }
    case 22: 
      var $86=$match;
      var $87=$4;
      var $88=(($87+($86<<4))|0);
      var $89=(($88+4)|0);
      var $90=HEAP32[(($89)>>2)];
      var $91=(($90)|(0))==0;
      if ($91) { label = 23; break; } else { label = 31; break; }
    case 23: 
      var $93=$has_equal;
      var $94=(($93)|(0))!=0;
      if ($94) { label = 24; break; } else { label = 31; break; }
    case 24: 
      var $96=HEAP32[((_opterr)>>2)];
      var $97=(($96)|(0))!=0;
      if ($97) { label = 25; break; } else { label = 27; break; }
    case 25: 
      var $99=$3;
      var $100=HEAP8[($99)];
      var $101=(($100 << 24) >> 24);
      var $102=(($101)|(0))!=58;
      if ($102) { label = 26; break; } else { label = 27; break; }
    case 26: 
      var $104=$current_argv_len;
      var $105=$current_argv;
      __warnx(((_noarg)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$104,HEAP32[(((tempInt)+(4))>>2)]=$105,tempInt));
      label = 27; break;
    case 27: 
      var $107=$match;
      var $108=$4;
      var $109=(($108+($107<<4))|0);
      var $110=(($109+8)|0);
      var $111=HEAP32[(($110)>>2)];
      var $112=(($111)|(0))==0;
      if ($112) { label = 28; break; } else { label = 29; break; }
    case 28: 
      var $114=$match;
      var $115=$4;
      var $116=(($115+($114<<4))|0);
      var $117=(($116+12)|0);
      var $118=HEAP32[(($117)>>2)];
      HEAP32[((_optopt)>>2)]=$118;
      label = 30; break;
    case 29: 
      HEAP32[((_optopt)>>2)]=0;
      label = 30; break;
    case 30: 
      var $121=$3;
      var $122=HEAP8[($121)];
      var $123=(($122 << 24) >> 24);
      var $124=(($123)|(0))==58;
      var $125=$124 ? 58 : 63;
      $1=$125;
      label = 60; break;
    case 31: 
      var $127=$match;
      var $128=$4;
      var $129=(($128+($127<<4))|0);
      var $130=(($129+4)|0);
      var $131=HEAP32[(($130)>>2)];
      var $132=(($131)|(0))==1;
      if ($132) { label = 33; break; } else { label = 32; break; }
    case 32: 
      var $134=$match;
      var $135=$4;
      var $136=(($135+($134<<4))|0);
      var $137=(($136+4)|0);
      var $138=HEAP32[(($137)>>2)];
      var $139=(($138)|(0))==2;
      if ($139) { label = 33; break; } else { label = 39; break; }
    case 33: 
      var $141=$has_equal;
      var $142=(($141)|(0))!=0;
      if ($142) { label = 34; break; } else { label = 35; break; }
    case 34: 
      var $144=$has_equal;
      HEAP32[((_optarg)>>2)]=$144;
      label = 38; break;
    case 35: 
      var $146=$match;
      var $147=$4;
      var $148=(($147+($146<<4))|0);
      var $149=(($148+4)|0);
      var $150=HEAP32[(($149)>>2)];
      var $151=(($150)|(0))==1;
      if ($151) { label = 36; break; } else { label = 37; break; }
    case 36: 
      var $153=HEAP32[((_optind)>>2)];
      var $154=((($153)+(1))|0);
      HEAP32[((_optind)>>2)]=$154;
      var $155=$2;
      var $156=(($155+($153<<2))|0);
      var $157=HEAP32[(($156)>>2)];
      HEAP32[((_optarg)>>2)]=$157;
      label = 37; break;
    case 37: 
      label = 38; break;
    case 38: 
      label = 39; break;
    case 39: 
      var $161=$match;
      var $162=$4;
      var $163=(($162+($161<<4))|0);
      var $164=(($163+4)|0);
      var $165=HEAP32[(($164)>>2)];
      var $166=(($165)|(0))==1;
      if ($166) { label = 40; break; } else { label = 48; break; }
    case 40: 
      var $168=HEAP32[((_optarg)>>2)];
      var $169=(($168)|(0))==0;
      if ($169) { label = 41; break; } else { label = 48; break; }
    case 41: 
      var $171=HEAP32[((_opterr)>>2)];
      var $172=(($171)|(0))!=0;
      if ($172) { label = 42; break; } else { label = 44; break; }
    case 42: 
      var $174=$3;
      var $175=HEAP8[($174)];
      var $176=(($175 << 24) >> 24);
      var $177=(($176)|(0))!=58;
      if ($177) { label = 43; break; } else { label = 44; break; }
    case 43: 
      var $179=$current_argv;
      __warnx(((_recargstring)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$179,tempInt));
      label = 44; break;
    case 44: 
      var $181=$match;
      var $182=$4;
      var $183=(($182+($181<<4))|0);
      var $184=(($183+8)|0);
      var $185=HEAP32[(($184)>>2)];
      var $186=(($185)|(0))==0;
      if ($186) { label = 45; break; } else { label = 46; break; }
    case 45: 
      var $188=$match;
      var $189=$4;
      var $190=(($189+($188<<4))|0);
      var $191=(($190+12)|0);
      var $192=HEAP32[(($191)>>2)];
      HEAP32[((_optopt)>>2)]=$192;
      label = 47; break;
    case 46: 
      HEAP32[((_optopt)>>2)]=0;
      label = 47; break;
    case 47: 
      var $195=HEAP32[((_optind)>>2)];
      var $196=((($195)-(1))|0);
      HEAP32[((_optind)>>2)]=$196;
      var $197=$3;
      var $198=HEAP8[($197)];
      var $199=(($198 << 24) >> 24);
      var $200=(($199)|(0))==58;
      var $201=$200 ? 58 : 63;
      $1=$201;
      label = 60; break;
    case 48: 
      label = 55; break;
    case 49: 
      var $204=$6;
      var $205=(($204)|(0))!=0;
      if ($205) { label = 50; break; } else { label = 51; break; }
    case 50: 
      var $207=HEAP32[((_optind)>>2)];
      var $208=((($207)-(1))|0);
      HEAP32[((_optind)>>2)]=$208;
      $1=-1;
      label = 60; break;
    case 51: 
      var $210=HEAP32[((_opterr)>>2)];
      var $211=(($210)|(0))!=0;
      if ($211) { label = 52; break; } else { label = 54; break; }
    case 52: 
      var $213=$3;
      var $214=HEAP8[($213)];
      var $215=(($214 << 24) >> 24);
      var $216=(($215)|(0))!=58;
      if ($216) { label = 53; break; } else { label = 54; break; }
    case 53: 
      var $218=$current_argv;
      __warnx(((_illoptstring)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$218,tempInt));
      label = 54; break;
    case 54: 
      HEAP32[((_optopt)>>2)]=0;
      $1=63;
      label = 60; break;
    case 55: 
      var $221=$5;
      var $222=(($221)|(0))!=0;
      if ($222) { label = 56; break; } else { label = 57; break; }
    case 56: 
      var $224=$match;
      var $225=$5;
      HEAP32[(($225)>>2)]=$224;
      label = 57; break;
    case 57: 
      var $227=$match;
      var $228=$4;
      var $229=(($228+($227<<4))|0);
      var $230=(($229+8)|0);
      var $231=HEAP32[(($230)>>2)];
      var $232=(($231)|(0))!=0;
      if ($232) { label = 58; break; } else { label = 59; break; }
    case 58: 
      var $234=$match;
      var $235=$4;
      var $236=(($235+($234<<4))|0);
      var $237=(($236+12)|0);
      var $238=HEAP32[(($237)>>2)];
      var $239=$match;
      var $240=$4;
      var $241=(($240+($239<<4))|0);
      var $242=(($241+8)|0);
      var $243=HEAP32[(($242)>>2)];
      HEAP32[(($243)>>2)]=$238;
      $1=0;
      label = 60; break;
    case 59: 
      var $245=$match;
      var $246=$4;
      var $247=(($246+($245<<4))|0);
      var $248=(($247+12)|0);
      var $249=HEAP32[(($248)>>2)];
      $1=$249;
      label = 60; break;
    case 60: 
      var $251=$1;
      STACKTOP = __stackBase__;
      return $251;
    default: assert(0, "bad label: " + label);
  }
}
function __warn($fmt, varrp) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  var $1;
  var $ap=__stackBase__;
  $1=$fmt;
  var $2=$ap;
  HEAP32[(($2)>>2)]=varrp;
  var $3=$1;
  var $4=HEAP32[(($ap)>>2)];
  __vwarn($3, $4);
  var $5=$ap;
  STACKTOP = __stackBase__;
  return;
}
function __warnx($fmt, varrp) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  var $1;
  var $ap=__stackBase__;
  $1=$fmt;
  var $2=$ap;
  HEAP32[(($2)>>2)]=varrp;
  var $3=$1;
  var $4=HEAP32[(($ap)>>2)];
  __vwarnx($3, $4);
  var $5=$ap;
  STACKTOP = __stackBase__;
  return;
}
function __vwarn($fmt, $ap) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $sverrno;
      $1=$fmt;
      $2=$ap;
      var $3=___errno_location();
      var $4=HEAP32[(($3)>>2)];
      $sverrno=$4;
      var $5=HEAP32[((_stderr)>>2)];
      var $6=HEAP32[((___progname)>>2)];
      var $7=_fprintf($5, ((__str1951)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$6,tempInt));
      var $8=$1;
      var $9=(($8)|(0))!=0;
      if ($9) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $11=HEAP32[((_stderr)>>2)];
      var $12=$1;
      var $13=$2;
      var $14=_fprintf($11, $12, $13);
      var $15=HEAP32[((_stderr)>>2)];
      var $16=_fprintf($15, ((__str120)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      label = 3; break;
    case 3: 
      var $18=HEAP32[((_stderr)>>2)];
      var $19=$sverrno;
      var $20=_strerror($19);
      var $21=_fprintf($18, ((__str221)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$20,tempInt));
      STACKTOP = __stackBase__;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function __vwarnx($fmt, $ap) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $1=$fmt;
      $2=$ap;
      var $3=HEAP32[((_stderr)>>2)];
      var $4=HEAP32[((___progname)>>2)];
      var $5=_fprintf($3, ((__str2452)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$4,tempInt));
      var $6=$1;
      var $7=(($6)|(0))!=0;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=HEAP32[((_stderr)>>2)];
      var $10=$1;
      var $11=$2;
      var $12=_fprintf($9, $10, $11);
      label = 3; break;
    case 3: 
      var $14=HEAP32[((_stderr)>>2)];
      var $15=_fprintf($14, ((__str125)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      STACKTOP = __stackBase__;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function __err($eval, $fmt, varrp) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  var $1;
  var $2;
  var $ap=__stackBase__;
  $1=$eval;
  $2=$fmt;
  var $3=$ap;
  HEAP32[(($3)>>2)]=varrp;
  var $4=$1;
  var $5=$2;
  var $6=HEAP32[(($ap)>>2)];
  __verr($4, $5, $6);
  throw "Reached an unreachable!";
  STACKTOP = __stackBase__;
  return;
}
function __errx($eval, $fmt, varrp) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  var $1;
  var $2;
  var $ap=__stackBase__;
  $1=$eval;
  $2=$fmt;
  var $3=$ap;
  HEAP32[(($3)>>2)]=varrp;
  var $4=$1;
  var $5=$2;
  var $6=HEAP32[(($ap)>>2)];
  __verrx($4, $5, $6);
  throw "Reached an unreachable!";
  STACKTOP = __stackBase__;
  return;
}
function __verr($eval, $fmt, $ap) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $sverrno;
      $1=$eval;
      $2=$fmt;
      $3=$ap;
      var $4=___errno_location();
      var $5=HEAP32[(($4)>>2)];
      $sverrno=$5;
      var $6=HEAP32[((_stderr)>>2)];
      var $7=HEAP32[((___progname)>>2)];
      var $8=_fprintf($6, ((__str949)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$7,tempInt));
      var $9=$2;
      var $10=(($9)|(0))!=0;
      if ($10) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $12=HEAP32[((_stderr)>>2)];
      var $13=$2;
      var $14=$3;
      var $15=_fprintf($12, $13, $14);
      var $16=HEAP32[((_stderr)>>2)];
      var $17=_fprintf($16, ((__str110)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      label = 3; break;
    case 3: 
      var $19=HEAP32[((_stderr)>>2)];
      var $20=$sverrno;
      var $21=_strerror($20);
      var $22=_fprintf($19, ((__str211)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$21,tempInt));
      var $23=$1;
      _exit($23);
      throw "Reached an unreachable!";
      STACKTOP = __stackBase__;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function __verrx($eval, $fmt, $ap) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $1=$eval;
      $2=$fmt;
      $3=$ap;
      var $4=HEAP32[((_stderr)>>2)];
      var $5=HEAP32[((___progname)>>2)];
      var $6=_fprintf($4, ((__str1550)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$5,tempInt));
      var $7=$2;
      var $8=(($7)|(0))!=0;
      if ($8) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $10=HEAP32[((_stderr)>>2)];
      var $11=$2;
      var $12=$3;
      var $13=_fprintf($10, $11, $12);
      label = 3; break;
    case 3: 
      var $15=HEAP32[((_stderr)>>2)];
      var $16=_fprintf($15, ((__str116)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      var $17=$1;
      _exit($17);
      throw "Reached an unreachable!";
      STACKTOP = __stackBase__;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _strtod($string, $endPtr) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $sign;
      var $expSign;
      var $fraction;
      var $dblExp;
      var $d;
      var $p;
      var $c;
      var $exp;
      var $fracExp;
      var $mantSize;
      var $decPt;
      var $pExp;
      var $frac1;
      var $frac2;
      $2=$string;
      $3=$endPtr;
      $expSign=0;
      $exp=0;
      $fracExp=0;
      var $4=$2;
      $p=$4;
      label = 2; break;
    case 2: 
      var $6=$p;
      var $7=HEAP8[($6)];
      var $8=(($7 << 24) >> 24);
      var $9=_isspace($8);
      var $10=(($9)|(0))!=0;
      if ($10) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $12=$p;
      var $13=(($12+1)|0);
      $p=$13;
      label = 2; break;
    case 4: 
      var $15=$p;
      var $16=HEAP8[($15)];
      var $17=(($16 << 24) >> 24);
      var $18=(($17)|(0))==45;
      if ($18) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $sign=1;
      var $20=$p;
      var $21=(($20+1)|0);
      $p=$21;
      label = 9; break;
    case 6: 
      var $23=$p;
      var $24=HEAP8[($23)];
      var $25=(($24 << 24) >> 24);
      var $26=(($25)|(0))==43;
      if ($26) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $28=$p;
      var $29=(($28+1)|0);
      $p=$29;
      label = 8; break;
    case 8: 
      $sign=0;
      label = 9; break;
    case 9: 
      $decPt=-1;
      $mantSize=0;
      label = 10; break;
    case 10: 
      var $33=$p;
      var $34=HEAP8[($33)];
      var $35=(($34 << 24) >> 24);
      $c=$35;
      var $36=$c;
      var $37=_isdigit($36);
      var $38=(($37)|(0))!=0;
      if ($38) { label = 15; break; } else { label = 11; break; }
    case 11: 
      var $40=$c;
      var $41=(($40)|(0))!=46;
      if ($41) { label = 13; break; } else { label = 12; break; }
    case 12: 
      var $43=$decPt;
      var $44=(($43)|(0)) >= 0;
      if ($44) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 17; break;
    case 14: 
      var $47=$mantSize;
      $decPt=$47;
      label = 15; break;
    case 15: 
      var $49=$p;
      var $50=(($49+1)|0);
      $p=$50;
      label = 16; break;
    case 16: 
      var $52=$mantSize;
      var $53=((($52)+(1))|0);
      $mantSize=$53;
      label = 10; break;
    case 17: 
      var $55=$p;
      $pExp=$55;
      var $56=$mantSize;
      var $57=$p;
      var $58=(((-$56))|0);
      var $59=(($57+$58)|0);
      $p=$59;
      var $60=$decPt;
      var $61=(($60)|(0)) < 0;
      if ($61) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $63=$mantSize;
      $decPt=$63;
      label = 20; break;
    case 19: 
      var $65=$mantSize;
      var $66=((($65)-(1))|0);
      $mantSize=$66;
      label = 20; break;
    case 20: 
      var $68=$mantSize;
      var $69=(($68)|(0)) > 18;
      if ($69) { label = 21; break; } else { label = 22; break; }
    case 21: 
      var $71=$decPt;
      var $72=((($71)-(18))|0);
      $fracExp=$72;
      $mantSize=18;
      label = 23; break;
    case 22: 
      var $74=$decPt;
      var $75=$mantSize;
      var $76=((($74)-($75))|0);
      $fracExp=$76;
      label = 23; break;
    case 23: 
      var $78=$mantSize;
      var $79=(($78)|(0))==0;
      if ($79) { label = 24; break; } else { label = 25; break; }
    case 24: 
      $fraction=0;
      var $81=$2;
      $p=$81;
      label = 67; break;
    case 25: 
      $frac1=0;
      label = 26; break;
    case 26: 
      var $84=$mantSize;
      var $85=(($84)|(0)) > 9;
      if ($85) { label = 27; break; } else { label = 31; break; }
    case 27: 
      var $87=$p;
      var $88=HEAP8[($87)];
      var $89=(($88 << 24) >> 24);
      $c=$89;
      var $90=$p;
      var $91=(($90+1)|0);
      $p=$91;
      var $92=$c;
      var $93=(($92)|(0))==46;
      if ($93) { label = 28; break; } else { label = 29; break; }
    case 28: 
      var $95=$p;
      var $96=HEAP8[($95)];
      var $97=(($96 << 24) >> 24);
      $c=$97;
      var $98=$p;
      var $99=(($98+1)|0);
      $p=$99;
      label = 29; break;
    case 29: 
      var $101=$frac1;
      var $102=((($101)*(10))&-1);
      var $103=$c;
      var $104=((($103)-(48))|0);
      var $105=((($102)+($104))|0);
      $frac1=$105;
      label = 30; break;
    case 30: 
      var $107=$mantSize;
      var $108=((($107)-(1))|0);
      $mantSize=$108;
      label = 26; break;
    case 31: 
      $frac2=0;
      label = 32; break;
    case 32: 
      var $111=$mantSize;
      var $112=(($111)|(0)) > 0;
      if ($112) { label = 33; break; } else { label = 37; break; }
    case 33: 
      var $114=$p;
      var $115=HEAP8[($114)];
      var $116=(($115 << 24) >> 24);
      $c=$116;
      var $117=$p;
      var $118=(($117+1)|0);
      $p=$118;
      var $119=$c;
      var $120=(($119)|(0))==46;
      if ($120) { label = 34; break; } else { label = 35; break; }
    case 34: 
      var $122=$p;
      var $123=HEAP8[($122)];
      var $124=(($123 << 24) >> 24);
      $c=$124;
      var $125=$p;
      var $126=(($125+1)|0);
      $p=$126;
      label = 35; break;
    case 35: 
      var $128=$frac2;
      var $129=((($128)*(10))&-1);
      var $130=$c;
      var $131=((($130)-(48))|0);
      var $132=((($129)+($131))|0);
      $frac2=$132;
      label = 36; break;
    case 36: 
      var $134=$mantSize;
      var $135=((($134)-(1))|0);
      $mantSize=$135;
      label = 32; break;
    case 37: 
      var $137=$frac1;
      var $138=(($137)|(0));
      var $139=($138)*(1000000000);
      var $140=$frac2;
      var $141=(($140)|(0));
      var $142=($139)+($141);
      $fraction=$142;
      label = 38; break;
    case 38: 
      var $144=$pExp;
      $p=$144;
      var $145=$p;
      var $146=HEAP8[($145)];
      var $147=(($146 << 24) >> 24);
      var $148=(($147)|(0))==69;
      if ($148) { label = 40; break; } else { label = 39; break; }
    case 39: 
      var $150=$p;
      var $151=HEAP8[($150)];
      var $152=(($151 << 24) >> 24);
      var $153=(($152)|(0))==101;
      if ($153) { label = 40; break; } else { label = 49; break; }
    case 40: 
      var $155=$p;
      var $156=(($155+1)|0);
      $p=$156;
      var $157=$p;
      var $158=HEAP8[($157)];
      var $159=(($158 << 24) >> 24);
      var $160=(($159)|(0))==45;
      if ($160) { label = 41; break; } else { label = 42; break; }
    case 41: 
      $expSign=1;
      var $162=$p;
      var $163=(($162+1)|0);
      $p=$163;
      label = 45; break;
    case 42: 
      var $165=$p;
      var $166=HEAP8[($165)];
      var $167=(($166 << 24) >> 24);
      var $168=(($167)|(0))==43;
      if ($168) { label = 43; break; } else { label = 44; break; }
    case 43: 
      var $170=$p;
      var $171=(($170+1)|0);
      $p=$171;
      label = 44; break;
    case 44: 
      $expSign=0;
      label = 45; break;
    case 45: 
      label = 46; break;
    case 46: 
      var $175=$p;
      var $176=HEAP8[($175)];
      var $177=(($176 << 24) >> 24);
      var $178=_isdigit($177);
      var $179=(($178)|(0))!=0;
      if ($179) { label = 47; break; } else { label = 48; break; }
    case 47: 
      var $181=$exp;
      var $182=((($181)*(10))&-1);
      var $183=$p;
      var $184=HEAP8[($183)];
      var $185=(($184 << 24) >> 24);
      var $186=((($185)-(48))|0);
      var $187=((($182)+($186))|0);
      $exp=$187;
      var $188=$p;
      var $189=(($188+1)|0);
      $p=$189;
      label = 46; break;
    case 48: 
      label = 49; break;
    case 49: 
      var $192=$expSign;
      var $193=(($192)|(0))!=0;
      if ($193) { label = 50; break; } else { label = 51; break; }
    case 50: 
      var $195=$fracExp;
      var $196=$exp;
      var $197=((($195)-($196))|0);
      $exp=$197;
      label = 52; break;
    case 51: 
      var $199=$fracExp;
      var $200=$exp;
      var $201=((($199)+($200))|0);
      $exp=$201;
      label = 52; break;
    case 52: 
      var $203=$exp;
      var $204=(($203)|(0)) < 0;
      if ($204) { label = 53; break; } else { label = 54; break; }
    case 53: 
      $expSign=1;
      var $206=$exp;
      var $207=(((-$206))|0);
      $exp=$207;
      label = 55; break;
    case 54: 
      $expSign=0;
      label = 55; break;
    case 55: 
      var $210=$exp;
      var $211=HEAP32[((_maxExponent)>>2)];
      var $212=(($210)|(0)) > (($211)|(0));
      if ($212) { label = 56; break; } else { label = 57; break; }
    case 56: 
      var $214=HEAP32[((_maxExponent)>>2)];
      $exp=$214;
      var $215=___errno_location();
      HEAP32[(($215)>>2)]=34;
      label = 57; break;
    case 57: 
      $dblExp=1;
      $d=((_powersOf10)|0);
      label = 58; break;
    case 58: 
      var $218=$exp;
      var $219=(($218)|(0))!=0;
      if ($219) { label = 59; break; } else { label = 63; break; }
    case 59: 
      var $221=$exp;
      var $222=$221 & 1;
      var $223=(($222)|(0))!=0;
      if ($223) { label = 60; break; } else { label = 61; break; }
    case 60: 
      var $225=$d;
      var $226=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($225)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($225)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $227=$dblExp;
      var $228=($227)*($226);
      $dblExp=$228;
      label = 61; break;
    case 61: 
      label = 62; break;
    case 62: 
      var $231=$exp;
      var $232=$231 >> 1;
      $exp=$232;
      var $233=$d;
      var $234=(($233+8)|0);
      $d=$234;
      label = 58; break;
    case 63: 
      var $236=$expSign;
      var $237=(($236)|(0))!=0;
      if ($237) { label = 64; break; } else { label = 65; break; }
    case 64: 
      var $239=$dblExp;
      var $240=$fraction;
      var $241=($240)/($239);
      $fraction=$241;
      label = 66; break;
    case 65: 
      var $243=$dblExp;
      var $244=$fraction;
      var $245=($244)*($243);
      $fraction=$245;
      label = 66; break;
    case 66: 
      label = 67; break;
    case 67: 
      var $248=$3;
      var $249=(($248)|(0))!=0;
      if ($249) { label = 68; break; } else { label = 69; break; }
    case 68: 
      var $251=$p;
      var $252=$3;
      HEAP32[(($252)>>2)]=$251;
      label = 69; break;
    case 69: 
      var $254=$sign;
      var $255=(($254)|(0))!=0;
      if ($255) { label = 70; break; } else { label = 71; break; }
    case 70: 
      var $257=$fraction;
      var $258=(-$257);
      $1=$258;
      label = 72; break;
    case 71: 
      var $260=$fraction;
      $1=$260;
      label = 72; break;
    case 72: 
      var $262=$1;
      return $262;
    default: assert(0, "bad label: " + label);
  }
}
function _strtold($nptr, $endptr) {
  var label = 0;
  var $1;
  var $2;
  $1=$nptr;
  $2=$endptr;
  var $3=$1;
  var $4=$2;
  var $5=_strtod($3, $4);
  var $6=$5;
  return $6;
}
function _strtof($nptr, $endptr) {
  var label = 0;
  var $1;
  var $2;
  $1=$nptr;
  $2=$endptr;
  var $3=$1;
  var $4=$2;
  var $5=_strtod($3, $4);
  var $6=$5;
  return $6;
}
function _strtod_l($nptr, $endptr, $loc) {
  var label = 0;
  var $1;
  var $2;
  var $3;
  $1=$nptr;
  $2=$endptr;
  $3=$loc;
  var $4=$1;
  var $5=$2;
  var $6=_strtod($4, $5);
  return $6;
}
function _strtold_l($nptr, $endptr, $loc) {
  var label = 0;
  var $1;
  var $2;
  var $3;
  $1=$nptr;
  $2=$endptr;
  $3=$loc;
  var $4=$1;
  var $5=$2;
  var $6=_strtold($4, $5);
  return $6;
}
function _atof($str) {
  var label = 0;
  var $1;
  $1=$str;
  var $2=$1;
  var $3=_strtod($2, 0);
  return $3;
}
// EMSCRIPTEN_END_FUNCS
function _i64Add(a, b, c, d) {
    /*
      x = a + b*2^32
      y = c + d*2^32
      result = l + h*2^32
    */
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a + c)>>>0;
    h = (b + d + (((l>>>0) < (a>>>0))|0))>>>0; // Add carry from low word to high word on overflow.
    return tempRet0 = h,l|0;
  }
function _i64Subtract(a, b, c, d) {
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a - c)>>>0;
    h = (b - d)>>>0;
    h = (b - d - (((c>>>0) > (a>>>0))|0))>>>0; // Borrow one from high word to low word on underflow.
    return tempRet0 = h,l|0;
  }
function _bitshift64Shl(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = (high << bits) | ((low&(ander << (32 - bits))) >>> (32 - bits));
      return low << bits;
    }
    tempRet0 = low << (bits - 32);
    return 0;
  }
function _bitshift64Lshr(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = high >>> bits;
      return (low >>> bits) | ((high&ander) << (32 - bits));
    }
    tempRet0 = 0;
    return (high >>> (bits - 32))|0;
  }
function _bitshift64Ashr(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = high >> bits;
      return (low >>> bits) | ((high&ander) << (32 - bits));
    }
    tempRet0 = (high|0) < 0 ? -1 : 0;
    return (high >> (bits - 32))|0;
  }
function _llvm_ctlz_i32(x) {
    x = x|0;
    var ret = 0;
    ret = HEAP8[(((ctlz_i8)+(x >>> 24))|0)];
    if ((ret|0) < 8) return ret|0;
    var ret = HEAP8[(((ctlz_i8)+((x >> 16)&0xff))|0)];
    if ((ret|0) < 8) return (ret + 8)|0;
    var ret = HEAP8[(((ctlz_i8)+((x >> 8)&0xff))|0)];
    if ((ret|0) < 8) return (ret + 16)|0;
    return (HEAP8[(((ctlz_i8)+(x&0xff))|0)] + 24)|0;
  }
/* PRE_ASM */ var ctlz_i8 = allocate([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_STACK);
function _llvm_cttz_i32(x) {
    x = x|0;
    var ret = 0;
    ret = HEAP8[(((cttz_i8)+(x & 0xff))|0)];
    if ((ret|0) < 8) return ret|0;
    var ret = HEAP8[(((cttz_i8)+((x >> 8)&0xff))|0)];
    if ((ret|0) < 8) return (ret + 8)|0;
    var ret = HEAP8[(((cttz_i8)+((x >> 16)&0xff))|0)];
    if ((ret|0) < 8) return (ret + 16)|0;
    return (HEAP8[(((cttz_i8)+(x >>> 24))|0)] + 24)|0;
  }
/* PRE_ASM */ var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_STACK);
// ======== compiled code from system/lib/compiler-rt , see readme therein
function ___muldsi3($a, $b) {
  $a = $a | 0;
  $b = $b | 0;
  var $1 = 0, $2 = 0, $3 = 0, $6 = 0, $8 = 0, $11 = 0, $12 = 0;
  $1 = $a & 65535;
  $2 = $b & 65535;
  $3 = Math.imul($2, $1);
  $6 = $a >>> 16;
  $8 = ($3 >>> 16) + Math.imul($2, $6) | 0;
  $11 = $b >>> 16;
  $12 = Math.imul($11, $1);
  return (tempRet0 = (($8 >>> 16) + Math.imul($11, $6) | 0) + ((($8 & 65535) + $12 | 0) >>> 16) | 0, 0 | ($8 + $12 << 16 | $3 & 65535)) | 0;
}
function ___divdi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $1$0 = 0, $1$1 = 0, $2$0 = 0, $2$1 = 0, $4$0 = 0, $4$1 = 0, $6$0 = 0, $7$0 = 0, $7$1 = 0, $8$0 = 0, $10$0 = 0;
  $1$0 = $a$1 >> 31 | (($a$1 | 0) < 0 ? -1 : 0) << 1;
  $1$1 = (($a$1 | 0) < 0 ? -1 : 0) >> 31 | (($a$1 | 0) < 0 ? -1 : 0) << 1;
  $2$0 = $b$1 >> 31 | (($b$1 | 0) < 0 ? -1 : 0) << 1;
  $2$1 = (($b$1 | 0) < 0 ? -1 : 0) >> 31 | (($b$1 | 0) < 0 ? -1 : 0) << 1;
  $4$0 = _i64Subtract($1$0 ^ $a$0, $1$1 ^ $a$1, $1$0, $1$1) | 0;
  $4$1 = tempRet0;
  $6$0 = _i64Subtract($2$0 ^ $b$0, $2$1 ^ $b$1, $2$0, $2$1) | 0;
  $7$0 = $2$0 ^ $1$0;
  $7$1 = $2$1 ^ $1$1;
  $8$0 = ___udivmoddi4($4$0, $4$1, $6$0, tempRet0, 0) | 0;
  $10$0 = _i64Subtract($8$0 ^ $7$0, tempRet0 ^ $7$1, $7$0, $7$1) | 0;
  return (tempRet0 = tempRet0, $10$0) | 0;
}
function ___remdi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $rem = 0, $1$0 = 0, $1$1 = 0, $2$0 = 0, $2$1 = 0, $4$0 = 0, $4$1 = 0, $6$0 = 0, $10$0 = 0, $10$1 = 0, __stackBase__ = 0;
  __stackBase__ = STACKTOP;
  STACKTOP = STACKTOP + 8 | 0;
  $rem = __stackBase__ | 0;
  $1$0 = $a$1 >> 31 | (($a$1 | 0) < 0 ? -1 : 0) << 1;
  $1$1 = (($a$1 | 0) < 0 ? -1 : 0) >> 31 | (($a$1 | 0) < 0 ? -1 : 0) << 1;
  $2$0 = $b$1 >> 31 | (($b$1 | 0) < 0 ? -1 : 0) << 1;
  $2$1 = (($b$1 | 0) < 0 ? -1 : 0) >> 31 | (($b$1 | 0) < 0 ? -1 : 0) << 1;
  $4$0 = _i64Subtract($1$0 ^ $a$0, $1$1 ^ $a$1, $1$0, $1$1) | 0;
  $4$1 = tempRet0;
  $6$0 = _i64Subtract($2$0 ^ $b$0, $2$1 ^ $b$1, $2$0, $2$1) | 0;
  ___udivmoddi4($4$0, $4$1, $6$0, tempRet0, $rem);
  $10$0 = _i64Subtract(HEAP32[$rem >> 2] ^ $1$0, HEAP32[$rem + 4 >> 2] ^ $1$1, $1$0, $1$1) | 0;
  $10$1 = tempRet0;
  STACKTOP = __stackBase__;
  return (tempRet0 = $10$1, $10$0) | 0;
}
function ___muldi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $x_sroa_0_0_extract_trunc = 0, $y_sroa_0_0_extract_trunc = 0, $1$0 = 0, $1$1 = 0, $2 = 0;
  $x_sroa_0_0_extract_trunc = $a$0;
  $y_sroa_0_0_extract_trunc = $b$0;
  $1$0 = ___muldsi3($x_sroa_0_0_extract_trunc, $y_sroa_0_0_extract_trunc) | 0;
  $1$1 = tempRet0;
  $2 = Math.imul($a$1, $y_sroa_0_0_extract_trunc);
  return (tempRet0 = (Math.imul($b$1, $x_sroa_0_0_extract_trunc) + $2 | 0) + $1$1 | $1$1 & 0, 0 | $1$0 & -1) | 0;
}
function ___udivdi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $1$0 = 0;
  $1$0 = ___udivmoddi4($a$0, $a$1, $b$0, $b$1, 0) | 0;
  return (tempRet0 = tempRet0, $1$0) | 0;
}
function ___uremdi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $rem = 0, __stackBase__ = 0;
  __stackBase__ = STACKTOP;
  STACKTOP = STACKTOP + 8 | 0;
  $rem = __stackBase__ | 0;
  ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem);
  STACKTOP = __stackBase__;
  return (tempRet0 = HEAP32[$rem + 4 >> 2] | 0, HEAP32[$rem >> 2] | 0) | 0;
}
function ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  $rem = $rem | 0;
  var $n_sroa_0_0_extract_trunc = 0, $n_sroa_1_4_extract_shift$0 = 0, $n_sroa_1_4_extract_trunc = 0, $d_sroa_0_0_extract_trunc = 0, $d_sroa_1_4_extract_shift$0 = 0, $d_sroa_1_4_extract_trunc = 0, $4 = 0, $17 = 0, $37 = 0, $49 = 0, $51 = 0, $57 = 0, $58 = 0, $66 = 0, $78 = 0, $86 = 0, $88 = 0, $89 = 0, $91 = 0, $92 = 0, $95 = 0, $105 = 0, $117 = 0, $119 = 0, $125 = 0, $126 = 0, $130 = 0, $q_sroa_1_1_ph = 0, $q_sroa_0_1_ph = 0, $r_sroa_1_1_ph = 0, $r_sroa_0_1_ph = 0, $sr_1_ph = 0, $d_sroa_0_0_insert_insert99$0 = 0, $d_sroa_0_0_insert_insert99$1 = 0, $137$0 = 0, $137$1 = 0, $carry_0203 = 0, $sr_1202 = 0, $r_sroa_0_1201 = 0, $r_sroa_1_1200 = 0, $q_sroa_0_1199 = 0, $q_sroa_1_1198 = 0, $147 = 0, $149 = 0, $r_sroa_0_0_insert_insert42$0 = 0, $r_sroa_0_0_insert_insert42$1 = 0, $150$1 = 0, $151$0 = 0, $152 = 0, $154$0 = 0, $r_sroa_0_0_extract_trunc = 0, $r_sroa_1_4_extract_trunc = 0, $155 = 0, $carry_0_lcssa$0 = 0, $carry_0_lcssa$1 = 0, $r_sroa_0_1_lcssa = 0, $r_sroa_1_1_lcssa = 0, $q_sroa_0_1_lcssa = 0, $q_sroa_1_1_lcssa = 0, $q_sroa_0_0_insert_ext75$0 = 0, $q_sroa_0_0_insert_ext75$1 = 0, $q_sroa_0_0_insert_insert77$1 = 0, $_0$0 = 0, $_0$1 = 0;
  $n_sroa_0_0_extract_trunc = $a$0;
  $n_sroa_1_4_extract_shift$0 = $a$1;
  $n_sroa_1_4_extract_trunc = $n_sroa_1_4_extract_shift$0;
  $d_sroa_0_0_extract_trunc = $b$0;
  $d_sroa_1_4_extract_shift$0 = $b$1;
  $d_sroa_1_4_extract_trunc = $d_sroa_1_4_extract_shift$0;
  if (($n_sroa_1_4_extract_trunc | 0) == 0) {
    $4 = ($rem | 0) != 0;
    if (($d_sroa_1_4_extract_trunc | 0) == 0) {
      if ($4) {
        HEAP32[$rem >> 2] = ($n_sroa_0_0_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
        HEAP32[$rem + 4 >> 2] = 0;
      }
      $_0$1 = 0;
      $_0$0 = ($n_sroa_0_0_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
      return (tempRet0 = $_0$1, $_0$0) | 0;
    } else {
      if (!$4) {
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      }
      HEAP32[$rem >> 2] = $a$0 & -1;
      HEAP32[$rem + 4 >> 2] = $a$1 & 0;
      $_0$1 = 0;
      $_0$0 = 0;
      return (tempRet0 = $_0$1, $_0$0) | 0;
    }
  }
  $17 = ($d_sroa_1_4_extract_trunc | 0) == 0;
  do {
    if (($d_sroa_0_0_extract_trunc | 0) == 0) {
      if ($17) {
        if (($rem | 0) != 0) {
          HEAP32[$rem >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
          HEAP32[$rem + 4 >> 2] = 0;
        }
        $_0$1 = 0;
        $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      }
      if (($n_sroa_0_0_extract_trunc | 0) == 0) {
        if (($rem | 0) != 0) {
          HEAP32[$rem >> 2] = 0;
          HEAP32[$rem + 4 >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_1_4_extract_trunc >>> 0);
        }
        $_0$1 = 0;
        $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_1_4_extract_trunc >>> 0) >>> 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      }
      $37 = $d_sroa_1_4_extract_trunc - 1 | 0;
      if (($37 & $d_sroa_1_4_extract_trunc | 0) == 0) {
        if (($rem | 0) != 0) {
          HEAP32[$rem >> 2] = 0 | $a$0 & -1;
          HEAP32[$rem + 4 >> 2] = $37 & $n_sroa_1_4_extract_trunc | $a$1 & 0;
        }
        $_0$1 = 0;
        $_0$0 = $n_sroa_1_4_extract_trunc >>> ((_llvm_cttz_i32($d_sroa_1_4_extract_trunc | 0) | 0) >>> 0);
        return (tempRet0 = $_0$1, $_0$0) | 0;
      }
      $49 = _llvm_ctlz_i32($d_sroa_1_4_extract_trunc | 0) | 0;
      $51 = $49 - (_llvm_ctlz_i32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
      if ($51 >>> 0 <= 30) {
        $57 = $51 + 1 | 0;
        $58 = 31 - $51 | 0;
        $sr_1_ph = $57;
        $r_sroa_0_1_ph = $n_sroa_1_4_extract_trunc << $58 | $n_sroa_0_0_extract_trunc >>> ($57 >>> 0);
        $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($57 >>> 0);
        $q_sroa_0_1_ph = 0;
        $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $58;
        break;
      }
      if (($rem | 0) == 0) {
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      }
      HEAP32[$rem >> 2] = 0 | $a$0 & -1;
      HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
      $_0$1 = 0;
      $_0$0 = 0;
      return (tempRet0 = $_0$1, $_0$0) | 0;
    } else {
      if (!$17) {
        $117 = _llvm_ctlz_i32($d_sroa_1_4_extract_trunc | 0) | 0;
        $119 = $117 - (_llvm_ctlz_i32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
        if ($119 >>> 0 <= 31) {
          $125 = $119 + 1 | 0;
          $126 = 31 - $119 | 0;
          $130 = $119 - 31 >> 31;
          $sr_1_ph = $125;
          $r_sroa_0_1_ph = $n_sroa_0_0_extract_trunc >>> ($125 >>> 0) & $130 | $n_sroa_1_4_extract_trunc << $126;
          $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($125 >>> 0) & $130;
          $q_sroa_0_1_ph = 0;
          $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $126;
          break;
        }
        if (($rem | 0) == 0) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = 0 | $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      }
      $66 = $d_sroa_0_0_extract_trunc - 1 | 0;
      if (($66 & $d_sroa_0_0_extract_trunc | 0) != 0) {
        $86 = (_llvm_ctlz_i32($d_sroa_0_0_extract_trunc | 0) | 0) + 33 | 0;
        $88 = $86 - (_llvm_ctlz_i32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
        $89 = 64 - $88 | 0;
        $91 = 32 - $88 | 0;
        $92 = $91 >> 31;
        $95 = $88 - 32 | 0;
        $105 = $95 >> 31;
        $sr_1_ph = $88;
        $r_sroa_0_1_ph = $91 - 1 >> 31 & $n_sroa_1_4_extract_trunc >>> ($95 >>> 0) | ($n_sroa_1_4_extract_trunc << $91 | $n_sroa_0_0_extract_trunc >>> ($88 >>> 0)) & $105;
        $r_sroa_1_1_ph = $105 & $n_sroa_1_4_extract_trunc >>> ($88 >>> 0);
        $q_sroa_0_1_ph = $n_sroa_0_0_extract_trunc << $89 & $92;
        $q_sroa_1_1_ph = ($n_sroa_1_4_extract_trunc << $89 | $n_sroa_0_0_extract_trunc >>> ($95 >>> 0)) & $92 | $n_sroa_0_0_extract_trunc << $91 & $88 - 33 >> 31;
        break;
      }
      if (($rem | 0) != 0) {
        HEAP32[$rem >> 2] = $66 & $n_sroa_0_0_extract_trunc;
        HEAP32[$rem + 4 >> 2] = 0;
      }
      if (($d_sroa_0_0_extract_trunc | 0) == 1) {
        $_0$1 = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
        $_0$0 = 0 | $a$0 & -1;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      } else {
        $78 = _llvm_cttz_i32($d_sroa_0_0_extract_trunc | 0) | 0;
        $_0$1 = 0 | $n_sroa_1_4_extract_trunc >>> ($78 >>> 0);
        $_0$0 = $n_sroa_1_4_extract_trunc << 32 - $78 | $n_sroa_0_0_extract_trunc >>> ($78 >>> 0) | 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      }
    }
  } while (0);
  if (($sr_1_ph | 0) == 0) {
    $q_sroa_1_1_lcssa = $q_sroa_1_1_ph;
    $q_sroa_0_1_lcssa = $q_sroa_0_1_ph;
    $r_sroa_1_1_lcssa = $r_sroa_1_1_ph;
    $r_sroa_0_1_lcssa = $r_sroa_0_1_ph;
    $carry_0_lcssa$1 = 0;
    $carry_0_lcssa$0 = 0;
  } else {
    $d_sroa_0_0_insert_insert99$0 = 0 | $b$0 & -1;
    $d_sroa_0_0_insert_insert99$1 = $d_sroa_1_4_extract_shift$0 | $b$1 & 0;
    $137$0 = _i64Add($d_sroa_0_0_insert_insert99$0, $d_sroa_0_0_insert_insert99$1, -1, -1) | 0;
    $137$1 = tempRet0;
    $q_sroa_1_1198 = $q_sroa_1_1_ph;
    $q_sroa_0_1199 = $q_sroa_0_1_ph;
    $r_sroa_1_1200 = $r_sroa_1_1_ph;
    $r_sroa_0_1201 = $r_sroa_0_1_ph;
    $sr_1202 = $sr_1_ph;
    $carry_0203 = 0;
    while (1) {
      $147 = $q_sroa_0_1199 >>> 31 | $q_sroa_1_1198 << 1;
      $149 = $carry_0203 | $q_sroa_0_1199 << 1;
      $r_sroa_0_0_insert_insert42$0 = 0 | ($r_sroa_0_1201 << 1 | $q_sroa_1_1198 >>> 31);
      $r_sroa_0_0_insert_insert42$1 = $r_sroa_0_1201 >>> 31 | $r_sroa_1_1200 << 1 | 0;
      _i64Subtract($137$0, $137$1, $r_sroa_0_0_insert_insert42$0, $r_sroa_0_0_insert_insert42$1);
      $150$1 = tempRet0;
      $151$0 = $150$1 >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1;
      $152 = $151$0 & 1;
      $154$0 = _i64Subtract($r_sroa_0_0_insert_insert42$0, $r_sroa_0_0_insert_insert42$1, $151$0 & $d_sroa_0_0_insert_insert99$0, ((($150$1 | 0) < 0 ? -1 : 0) >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1) & $d_sroa_0_0_insert_insert99$1) | 0;
      $r_sroa_0_0_extract_trunc = $154$0;
      $r_sroa_1_4_extract_trunc = tempRet0;
      $155 = $sr_1202 - 1 | 0;
      if (($155 | 0) == 0) {
        break;
      } else {
        $q_sroa_1_1198 = $147;
        $q_sroa_0_1199 = $149;
        $r_sroa_1_1200 = $r_sroa_1_4_extract_trunc;
        $r_sroa_0_1201 = $r_sroa_0_0_extract_trunc;
        $sr_1202 = $155;
        $carry_0203 = $152;
      }
    }
    $q_sroa_1_1_lcssa = $147;
    $q_sroa_0_1_lcssa = $149;
    $r_sroa_1_1_lcssa = $r_sroa_1_4_extract_trunc;
    $r_sroa_0_1_lcssa = $r_sroa_0_0_extract_trunc;
    $carry_0_lcssa$1 = 0;
    $carry_0_lcssa$0 = $152;
  }
  $q_sroa_0_0_insert_ext75$0 = $q_sroa_0_1_lcssa;
  $q_sroa_0_0_insert_ext75$1 = 0;
  $q_sroa_0_0_insert_insert77$1 = $q_sroa_1_1_lcssa | $q_sroa_0_0_insert_ext75$1;
  if (($rem | 0) != 0) {
    HEAP32[$rem >> 2] = 0 | $r_sroa_0_1_lcssa;
    HEAP32[$rem + 4 >> 2] = $r_sroa_1_1_lcssa | 0;
  }
  $_0$1 = (0 | $q_sroa_0_0_insert_ext75$0) >>> 31 | $q_sroa_0_0_insert_insert77$1 << 1 | ($q_sroa_0_0_insert_ext75$1 << 1 | $q_sroa_0_0_insert_ext75$0 >>> 31) & 0 | $carry_0_lcssa$1;
  $_0$0 = ($q_sroa_0_0_insert_ext75$0 << 1 | 0 >>> 31) & -2 | $carry_0_lcssa$0;
  return (tempRet0 = $_0$1, $_0$0) | 0;
}
// =======================================================================
// EMSCRIPTEN_END_FUNCS
// TODO: strip out parts of this we do not need
//======= begin closure i64 code =======
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */
var i64Math = (function() { // Emscripten wrapper
  var goog = { math: {} };
  /**
   * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
   * values as *signed* integers.  See the from* functions below for more
   * convenient ways of constructing Longs.
   *
   * The internal representation of a long is the two given signed, 32-bit values.
   * We use 32-bit pieces because these are the size of integers on which
   * Javascript performs bit-operations.  For operations like addition and
   * multiplication, we split each number into 16-bit pieces, which can easily be
   * multiplied within Javascript's floating-point representation without overflow
   * or change in sign.
   *
   * In the algorithms below, we frequently reduce the negative case to the
   * positive case by negating the input(s) and then post-processing the result.
   * Note that we must ALWAYS check specially whether those values are MIN_VALUE
   * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
   * a positive number, it overflows back into a negative).  Not handling this
   * case would often result in infinite recursion.
   *
   * @param {number} low  The low (signed) 32 bits of the long.
   * @param {number} high  The high (signed) 32 bits of the long.
   * @constructor
   */
  goog.math.Long = function(low, high) {
    /**
     * @type {number}
     * @private
     */
    this.low_ = low | 0;  // force into 32 signed bits.
    /**
     * @type {number}
     * @private
     */
    this.high_ = high | 0;  // force into 32 signed bits.
  };
  // NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
  // from* methods on which they depend.
  /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @private
   */
  goog.math.Long.IntCache_ = {};
  /**
   * Returns a Long representing the given (32-bit) integer value.
   * @param {number} value The 32-bit integer in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromInt = function(value) {
    if (-128 <= value && value < 128) {
      var cachedObj = goog.math.Long.IntCache_[value];
      if (cachedObj) {
        return cachedObj;
      }
    }
    var obj = new goog.math.Long(value | 0, value < 0 ? -1 : 0);
    if (-128 <= value && value < 128) {
      goog.math.Long.IntCache_[value] = obj;
    }
    return obj;
  };
  /**
   * Returns a Long representing the given value, provided that it is a finite
   * number.  Otherwise, zero is returned.
   * @param {number} value The number in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromNumber = function(value) {
    if (isNaN(value) || !isFinite(value)) {
      return goog.math.Long.ZERO;
    } else if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MIN_VALUE;
    } else if (value + 1 >= goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MAX_VALUE;
    } else if (value < 0) {
      return goog.math.Long.fromNumber(-value).negate();
    } else {
      return new goog.math.Long(
          (value % goog.math.Long.TWO_PWR_32_DBL_) | 0,
          (value / goog.math.Long.TWO_PWR_32_DBL_) | 0);
    }
  };
  /**
   * Returns a Long representing the 64-bit integer that comes by concatenating
   * the given high and low bits.  Each is assumed to use 32 bits.
   * @param {number} lowBits The low 32-bits.
   * @param {number} highBits The high 32-bits.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromBits = function(lowBits, highBits) {
    return new goog.math.Long(lowBits, highBits);
  };
  /**
   * Returns a Long representation of the given string, written using the given
   * radix.
   * @param {string} str The textual representation of the Long.
   * @param {number=} opt_radix The radix in which the text is written.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromString = function(str, opt_radix) {
    if (str.length == 0) {
      throw Error('number format error: empty string');
    }
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (str.charAt(0) == '-') {
      return goog.math.Long.fromString(str.substring(1), radix).negate();
    } else if (str.indexOf('-') >= 0) {
      throw Error('number format error: interior "-" character: ' + str);
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));
    var result = goog.math.Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
      var size = Math.min(8, str.length - i);
      var value = parseInt(str.substring(i, i + size), radix);
      if (size < 8) {
        var power = goog.math.Long.fromNumber(Math.pow(radix, size));
        result = result.multiply(power).add(goog.math.Long.fromNumber(value));
      } else {
        result = result.multiply(radixToPower);
        result = result.add(goog.math.Long.fromNumber(value));
      }
    }
    return result;
  };
  // NOTE: the compiler should inline these constant values below and then remove
  // these variables, so there should be no runtime penalty for these.
  /**
   * Number used repeated below in calculations.  This must appear before the
   * first call to any from* function below.
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_16_DBL_ = 1 << 16;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_24_DBL_ = 1 << 24;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_32_DBL_ =
      goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_31_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ / 2;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_48_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_64_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_63_DBL_ =
      goog.math.Long.TWO_PWR_64_DBL_ / 2;
  /** @type {!goog.math.Long} */
  goog.math.Long.ZERO = goog.math.Long.fromInt(0);
  /** @type {!goog.math.Long} */
  goog.math.Long.ONE = goog.math.Long.fromInt(1);
  /** @type {!goog.math.Long} */
  goog.math.Long.NEG_ONE = goog.math.Long.fromInt(-1);
  /** @type {!goog.math.Long} */
  goog.math.Long.MAX_VALUE =
      goog.math.Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
  /** @type {!goog.math.Long} */
  goog.math.Long.MIN_VALUE = goog.math.Long.fromBits(0, 0x80000000 | 0);
  /**
   * @type {!goog.math.Long}
   * @private
   */
  goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(1 << 24);
  /** @return {number} The value, assuming it is a 32-bit integer. */
  goog.math.Long.prototype.toInt = function() {
    return this.low_;
  };
  /** @return {number} The closest floating-point representation to this value. */
  goog.math.Long.prototype.toNumber = function() {
    return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ +
           this.getLowBitsUnsigned();
  };
  /**
   * @param {number=} opt_radix The radix in which the text should be written.
   * @return {string} The textual representation of this value.
   */
  goog.math.Long.prototype.toString = function(opt_radix) {
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (this.isZero()) {
      return '0';
    }
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        // We need to change the Long value before it can be negated, so we remove
        // the bottom-most digit in this base and then recurse to do the rest.
        var radixLong = goog.math.Long.fromNumber(radix);
        var div = this.div(radixLong);
        var rem = div.multiply(radixLong).subtract(this);
        return div.toString(radix) + rem.toInt().toString(radix);
      } else {
        return '-' + this.negate().toString(radix);
      }
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 6));
    var rem = this;
    var result = '';
    while (true) {
      var remDiv = rem.div(radixToPower);
      var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
      var digits = intval.toString(radix);
      rem = remDiv;
      if (rem.isZero()) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = '' + digits + result;
      }
    }
  };
  /** @return {number} The high 32-bits as a signed value. */
  goog.math.Long.prototype.getHighBits = function() {
    return this.high_;
  };
  /** @return {number} The low 32-bits as a signed value. */
  goog.math.Long.prototype.getLowBits = function() {
    return this.low_;
  };
  /** @return {number} The low 32-bits as an unsigned value. */
  goog.math.Long.prototype.getLowBitsUnsigned = function() {
    return (this.low_ >= 0) ?
        this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
  };
  /**
   * @return {number} Returns the number of bits needed to represent the absolute
   *     value of this Long.
   */
  goog.math.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        return 64;
      } else {
        return this.negate().getNumBitsAbs();
      }
    } else {
      var val = this.high_ != 0 ? this.high_ : this.low_;
      for (var bit = 31; bit > 0; bit--) {
        if ((val & (1 << bit)) != 0) {
          break;
        }
      }
      return this.high_ != 0 ? bit + 33 : bit + 1;
    }
  };
  /** @return {boolean} Whether this value is zero. */
  goog.math.Long.prototype.isZero = function() {
    return this.high_ == 0 && this.low_ == 0;
  };
  /** @return {boolean} Whether this value is negative. */
  goog.math.Long.prototype.isNegative = function() {
    return this.high_ < 0;
  };
  /** @return {boolean} Whether this value is odd. */
  goog.math.Long.prototype.isOdd = function() {
    return (this.low_ & 1) == 1;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long equals the other.
   */
  goog.math.Long.prototype.equals = function(other) {
    return (this.high_ == other.high_) && (this.low_ == other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long does not equal the other.
   */
  goog.math.Long.prototype.notEquals = function(other) {
    return (this.high_ != other.high_) || (this.low_ != other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than the other.
   */
  goog.math.Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than or equal to the other.
   */
  goog.math.Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than the other.
   */
  goog.math.Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than or equal to the other.
   */
  goog.math.Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
  };
  /**
   * Compares this Long with the given one.
   * @param {goog.math.Long} other Long to compare against.
   * @return {number} 0 if they are the same, 1 if the this is greater, and -1
   *     if the given one is greater.
   */
  goog.math.Long.prototype.compare = function(other) {
    if (this.equals(other)) {
      return 0;
    }
    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) {
      return -1;
    }
    if (!thisNeg && otherNeg) {
      return 1;
    }
    // at this point, the signs are the same, so subtraction will not overflow
    if (this.subtract(other).isNegative()) {
      return -1;
    } else {
      return 1;
    }
  };
  /** @return {!goog.math.Long} The negation of this value. */
  goog.math.Long.prototype.negate = function() {
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.MIN_VALUE;
    } else {
      return this.not().add(goog.math.Long.ONE);
    }
  };
  /**
   * Returns the sum of this and the given Long.
   * @param {goog.math.Long} other Long to add to this one.
   * @return {!goog.math.Long} The sum of this and the given Long.
   */
  goog.math.Long.prototype.add = function(other) {
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns the difference of this and the given Long.
   * @param {goog.math.Long} other Long to subtract from this.
   * @return {!goog.math.Long} The difference of this and the given Long.
   */
  goog.math.Long.prototype.subtract = function(other) {
    return this.add(other.negate());
  };
  /**
   * Returns the product of this and the given long.
   * @param {goog.math.Long} other Long to multiply with this.
   * @return {!goog.math.Long} The product of this and the other.
   */
  goog.math.Long.prototype.multiply = function(other) {
    if (this.isZero()) {
      return goog.math.Long.ZERO;
    } else if (other.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return other.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return this.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().multiply(other.negate());
      } else {
        return this.negate().multiply(other).negate();
      }
    } else if (other.isNegative()) {
      return this.multiply(other.negate()).negate();
    }
    // If both longs are small, use float multiplication
    if (this.lessThan(goog.math.Long.TWO_PWR_24_) &&
        other.lessThan(goog.math.Long.TWO_PWR_24_)) {
      return goog.math.Long.fromNumber(this.toNumber() * other.toNumber());
    }
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns this Long divided by the given one.
   * @param {goog.math.Long} other Long by which to divide.
   * @return {!goog.math.Long} This Long divided by the given one.
   */
  goog.math.Long.prototype.div = function(other) {
    if (other.isZero()) {
      throw Error('division by zero');
    } else if (this.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      if (other.equals(goog.math.Long.ONE) ||
          other.equals(goog.math.Long.NEG_ONE)) {
        return goog.math.Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
      } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.ONE;
      } else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shiftRight(1);
        var approx = halfThis.div(other).shiftLeft(1);
        if (approx.equals(goog.math.Long.ZERO)) {
          return other.isNegative() ? goog.math.Long.ONE : goog.math.Long.NEG_ONE;
        } else {
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
      }
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().div(other.negate());
      } else {
        return this.negate().div(other).negate();
      }
    } else if (other.isNegative()) {
      return this.div(other.negate()).negate();
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    var res = goog.math.Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
      // Approximate the result of division. This may be a little greater or
      // smaller than the actual value.
      var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
      // We will tweak the approximate result by changing it in the 48-th digit or
      // the smallest non-fractional digit, whichever is larger.
      var log2 = Math.ceil(Math.log(approx) / Math.LN2);
      var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
      // Decrease the approximation until it is smaller than the remainder.  Note
      // that if it is too large, the product overflows and is negative.
      var approxRes = goog.math.Long.fromNumber(approx);
      var approxRem = approxRes.multiply(other);
      while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
        approx -= delta;
        approxRes = goog.math.Long.fromNumber(approx);
        approxRem = approxRes.multiply(other);
      }
      // We know the answer can't be zero... and actually, zero would cause
      // infinite recursion since we would make no progress.
      if (approxRes.isZero()) {
        approxRes = goog.math.Long.ONE;
      }
      res = res.add(approxRes);
      rem = rem.subtract(approxRem);
    }
    return res;
  };
  /**
   * Returns this Long modulo the given one.
   * @param {goog.math.Long} other Long by which to mod.
   * @return {!goog.math.Long} This Long modulo the given one.
   */
  goog.math.Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
  };
  /** @return {!goog.math.Long} The bitwise-NOT of this value. */
  goog.math.Long.prototype.not = function() {
    return goog.math.Long.fromBits(~this.low_, ~this.high_);
  };
  /**
   * Returns the bitwise-AND of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to AND.
   * @return {!goog.math.Long} The bitwise-AND of this and the other.
   */
  goog.math.Long.prototype.and = function(other) {
    return goog.math.Long.fromBits(this.low_ & other.low_,
                                   this.high_ & other.high_);
  };
  /**
   * Returns the bitwise-OR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to OR.
   * @return {!goog.math.Long} The bitwise-OR of this and the other.
   */
  goog.math.Long.prototype.or = function(other) {
    return goog.math.Long.fromBits(this.low_ | other.low_,
                                   this.high_ | other.high_);
  };
  /**
   * Returns the bitwise-XOR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to XOR.
   * @return {!goog.math.Long} The bitwise-XOR of this and the other.
   */
  goog.math.Long.prototype.xor = function(other) {
    return goog.math.Long.fromBits(this.low_ ^ other.low_,
                                   this.high_ ^ other.high_);
  };
  /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the left by the given amount.
   */
  goog.math.Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var low = this.low_;
      if (numBits < 32) {
        var high = this.high_;
        return goog.math.Long.fromBits(
            low << numBits,
            (high << numBits) | (low >>> (32 - numBits)));
      } else {
        return goog.math.Long.fromBits(0, low << (numBits - 32));
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount.
   */
  goog.math.Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >> numBits);
      } else {
        return goog.math.Long.fromBits(
            high >> (numBits - 32),
            high >= 0 ? 0 : -1);
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount, with
   * the new top bits matching the current sign bit.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount, with
   *     zeros placed into the new leading bits.
   */
  goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >>> numBits);
      } else if (numBits == 32) {
        return goog.math.Long.fromBits(high, 0);
      } else {
        return goog.math.Long.fromBits(high >>> (numBits - 32), 0);
      }
    }
  };
  //======= begin jsbn =======
  var navigator = { appName: 'Modern Browser' }; // polyfill a little
  // Copyright (c) 2005  Tom Wu
  // All Rights Reserved.
  // http://www-cs-students.stanford.edu/~tjw/jsbn/
  /*
   * Copyright (c) 2003-2005  Tom Wu
   * All Rights Reserved.
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
   * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
   * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
   *
   * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
   * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
   * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
   * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
   * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * In addition, the following condition applies:
   *
   * All redistributions must retain an intact copy of this copyright notice
   * and disclaimer.
   */
  // Basic JavaScript BN library - subset useful for RSA encryption.
  // Bits per digit
  var dbits;
  // JavaScript engine analysis
  var canary = 0xdeadbeefcafe;
  var j_lm = ((canary&0xffffff)==0xefcafe);
  // (public) Constructor
  function BigInteger(a,b,c) {
    if(a != null)
      if("number" == typeof a) this.fromNumber(a,b,c);
      else if(b == null && "string" != typeof a) this.fromString(a,256);
      else this.fromString(a,b);
  }
  // return new, unset BigInteger
  function nbi() { return new BigInteger(null); }
  // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  function am1(i,x,w,j,c,n) {
    while(--n >= 0) {
      var v = x*this[i++]+w[j]+c;
      c = Math.floor(v/0x4000000);
      w[j++] = v&0x3ffffff;
    }
    return c;
  }
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  function am2(i,x,w,j,c,n) {
    var xl = x&0x7fff, xh = x>>15;
    while(--n >= 0) {
      var l = this[i]&0x7fff;
      var h = this[i++]>>15;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
      c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
      w[j++] = l&0x3fffffff;
    }
    return c;
  }
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  function am3(i,x,w,j,c,n) {
    var xl = x&0x3fff, xh = x>>14;
    while(--n >= 0) {
      var l = this[i]&0x3fff;
      var h = this[i++]>>14;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x3fff)<<14)+w[j]+c;
      c = (l>>28)+(m>>14)+xh*h;
      w[j++] = l&0xfffffff;
    }
    return c;
  }
  if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
  }
  else if(j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
  }
  else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
  }
  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = ((1<<dbits)-1);
  BigInteger.prototype.DV = (1<<dbits);
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2,BI_FP);
  BigInteger.prototype.F1 = BI_FP-dbits;
  BigInteger.prototype.F2 = 2*dbits-BI_FP;
  // Digit conversions
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr,vv;
  rr = "0".charCodeAt(0);
  for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) { return BI_RM.charAt(n); }
  function intAt(s,i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c==null)?-1:c;
  }
  // (protected) copy this to r
  function bnpCopyTo(r) {
    for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  }
  // (protected) set from integer value x, -DV <= x < DV
  function bnpFromInt(x) {
    this.t = 1;
    this.s = (x<0)?-1:0;
    if(x > 0) this[0] = x;
    else if(x < -1) this[0] = x+DV;
    else this.t = 0;
  }
  // return bigint initialized to value
  function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
  // (protected) set from string and radix
  function bnpFromString(s,b) {
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 256) k = 8; // byte array
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else { this.fromRadix(s,b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while(--i >= 0) {
      var x = (k==8)?s[i]&0xff:intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if(sh == 0)
        this[this.t++] = x;
      else if(sh+k > this.DB) {
        this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
        this[this.t++] = (x>>(this.DB-sh));
      }
      else
        this[this.t-1] |= x<<sh;
      sh += k;
      if(sh >= this.DB) sh -= this.DB;
    }
    if(k == 8 && (s[0]&0x80) != 0) {
      this.s = -1;
      if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
    }
    this.clamp();
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) clamp off excess high words
  function bnpClamp() {
    var c = this.s&this.DM;
    while(this.t > 0 && this[this.t-1] == c) --this.t;
  }
  // (public) return string representation in given radix
  function bnToString(b) {
    if(this.s < 0) return "-"+this.negate().toString(b);
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1<<k)-1, d, m = false, r = "", i = this.t;
    var p = this.DB-(i*this.DB)%k;
    if(i-- > 0) {
      if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
      while(i >= 0) {
        if(p < k) {
          d = (this[i]&((1<<p)-1))<<(k-p);
          d |= this[--i]>>(p+=this.DB-k);
        }
        else {
          d = (this[i]>>(p-=k))&km;
          if(p <= 0) { p += this.DB; --i; }
        }
        if(d > 0) m = true;
        if(m) r += int2char(d);
      }
    }
    return m?r:"0";
  }
  // (public) -this
  function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
  // (public) |this|
  function bnAbs() { return (this.s<0)?this.negate():this; }
  // (public) return + if this > a, - if this < a, 0 if equal
  function bnCompareTo(a) {
    var r = this.s-a.s;
    if(r != 0) return r;
    var i = this.t;
    r = i-a.t;
    if(r != 0) return (this.s<0)?-r:r;
    while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
    return 0;
  }
  // returns bit length of the integer x
  function nbits(x) {
    var r = 1, t;
    if((t=x>>>16) != 0) { x = t; r += 16; }
    if((t=x>>8) != 0) { x = t; r += 8; }
    if((t=x>>4) != 0) { x = t; r += 4; }
    if((t=x>>2) != 0) { x = t; r += 2; }
    if((t=x>>1) != 0) { x = t; r += 1; }
    return r;
  }
  // (public) return the number of bits in "this"
  function bnBitLength() {
    if(this.t <= 0) return 0;
    return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
  }
  // (protected) r = this << n*DB
  function bnpDLShiftTo(n,r) {
    var i;
    for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
    for(i = n-1; i >= 0; --i) r[i] = 0;
    r.t = this.t+n;
    r.s = this.s;
  }
  // (protected) r = this >> n*DB
  function bnpDRShiftTo(n,r) {
    for(var i = n; i < this.t; ++i) r[i-n] = this[i];
    r.t = Math.max(this.t-n,0);
    r.s = this.s;
  }
  // (protected) r = this << n
  function bnpLShiftTo(n,r) {
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<cbs)-1;
    var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
    for(i = this.t-1; i >= 0; --i) {
      r[i+ds+1] = (this[i]>>cbs)|c;
      c = (this[i]&bm)<<bs;
    }
    for(i = ds-1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t+ds+1;
    r.s = this.s;
    r.clamp();
  }
  // (protected) r = this >> n
  function bnpRShiftTo(n,r) {
    r.s = this.s;
    var ds = Math.floor(n/this.DB);
    if(ds >= this.t) { r.t = 0; return; }
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<bs)-1;
    r[0] = this[ds]>>bs;
    for(var i = ds+1; i < this.t; ++i) {
      r[i-ds-1] |= (this[i]&bm)<<cbs;
      r[i-ds] = this[i]>>bs;
    }
    if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
    r.t = this.t-ds;
    r.clamp();
  }
  // (protected) r = this - a
  function bnpSubTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]-a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c -= a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c -= a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = (c<0)?-1:0;
    if(c < -1) r[i++] = this.DV+c;
    else if(c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  }
  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.
  function bnpMultiplyTo(a,r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i+y.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
    r.s = 0;
    r.clamp();
    if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
  }
  // (protected) r = this^2, r != this (HAC 14.16)
  function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2*x.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < x.t-1; ++i) {
      var c = x.am(i,x[i],r,2*i,0,1);
      if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
        r[i+x.t] -= x.DV;
        r[i+x.t+1] = 1;
      }
    }
    if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
    r.s = 0;
    r.clamp();
  }
  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.
  function bnpDivRemTo(m,q,r) {
    var pm = m.abs();
    if(pm.t <= 0) return;
    var pt = this.abs();
    if(pt.t < pm.t) {
      if(q != null) q.fromInt(0);
      if(r != null) this.copyTo(r);
      return;
    }
    if(r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
    if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys-1];
    if(y0 == 0) return;
    var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
    var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
    var i = r.t, j = i-ys, t = (q==null)?nbi():q;
    y.dlShiftTo(j,t);
    if(r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t,r);
    }
    BigInteger.ONE.dlShiftTo(ys,t);
    t.subTo(y,y);	// "negative" y so we can replace sub with am later
    while(y.t < ys) y[y.t++] = 0;
    while(--j >= 0) {
      // Estimate quotient digit
      var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
      if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
        y.dlShiftTo(j,t);
        r.subTo(t,r);
        while(r[i] < --qd) r.subTo(t,r);
      }
    }
    if(q != null) {
      r.drShiftTo(ys,q);
      if(ts != ms) BigInteger.ZERO.subTo(q,q);
    }
    r.t = ys;
    r.clamp();
    if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
    if(ts < 0) BigInteger.ZERO.subTo(r,r);
  }
  // (public) this mod a
  function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a,null,r);
    if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
    return r;
  }
  // Modular reduction using "classic" algorithm
  function Classic(m) { this.m = m; }
  function cConvert(x) {
    if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) { return x; }
  function cReduce(x) { x.divRemTo(this.m,null,x); }
  function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.
  function bnpInvDigit() {
    if(this.t < 1) return 0;
    var x = this[0];
    if((x&1) == 0) return 0;
    var y = x&3;		// y == 1/x mod 2^2
    y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
    y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
    y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y>0)?this.DV-y:-y;
  }
  // Montgomery reduction
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp&0x7fff;
    this.mph = this.mp>>15;
    this.um = (1<<(m.DB-15))-1;
    this.mt2 = 2*m.t;
  }
  // xR mod m
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t,r);
    r.divRemTo(this.m,null,r);
    if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
    return r;
  }
  // x/R mod m
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  // x = x/R mod m (HAC 14.32)
  function montReduce(x) {
    while(x.t <= this.mt2)	// pad x so am has enough room later
      x[x.t++] = 0;
    for(var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i]&0x7fff;
      var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
      // use am to combine the multiply-shift-add into one call
      j = i+this.m.t;
      x[j] += this.m.am(0,u0,x,i,0,this.m.t);
      // propagate carry
      while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t,x);
    if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
  }
  // r = "x^2/R mod m"; x != r
  function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  // r = "xy/R mod m"; x,y != r
  function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  // (protected) true iff this is even
  function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
  function bnpExp(e,z) {
    if(e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
    g.copyTo(r);
    while(--i >= 0) {
      z.sqrTo(r,r2);
      if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
      else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
  }
  // (public) this^e % m, 0 <= e < 2^32
  function bnModPowInt(e,m) {
    var z;
    if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e,z);
  }
  // protected
  BigInteger.prototype.copyTo = bnpCopyTo;
  BigInteger.prototype.fromInt = bnpFromInt;
  BigInteger.prototype.fromString = bnpFromString;
  BigInteger.prototype.clamp = bnpClamp;
  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger.prototype.lShiftTo = bnpLShiftTo;
  BigInteger.prototype.rShiftTo = bnpRShiftTo;
  BigInteger.prototype.subTo = bnpSubTo;
  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger.prototype.squareTo = bnpSquareTo;
  BigInteger.prototype.divRemTo = bnpDivRemTo;
  BigInteger.prototype.invDigit = bnpInvDigit;
  BigInteger.prototype.isEven = bnpIsEven;
  BigInteger.prototype.exp = bnpExp;
  // public
  BigInteger.prototype.toString = bnToString;
  BigInteger.prototype.negate = bnNegate;
  BigInteger.prototype.abs = bnAbs;
  BigInteger.prototype.compareTo = bnCompareTo;
  BigInteger.prototype.bitLength = bnBitLength;
  BigInteger.prototype.mod = bnMod;
  BigInteger.prototype.modPowInt = bnModPowInt;
  // "constants"
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);
  // jsbn2 stuff
  // (protected) convert from radix string
  function bnpFromRadix(s,b) {
    this.fromInt(0);
    if(b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
    for(var i = 0; i < s.length; ++i) {
      var x = intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b*w+x;
      if(++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w,0);
        j = 0;
        w = 0;
      }
    }
    if(j > 0) {
      this.dMultiply(Math.pow(b,j));
      this.dAddOffset(w,0);
    }
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) return x s.t. r^x < DV
  function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
  // (public) 0 if this == 0, 1 if this > 0
  function bnSigNum() {
    if(this.s < 0) return -1;
    else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  }
  // (protected) this *= n, this >= 0, 1 < n < DV
  function bnpDMultiply(n) {
    this[this.t] = this.am(0,n-1,this,0,0,this.t);
    ++this.t;
    this.clamp();
  }
  // (protected) this += n << w words, this >= 0
  function bnpDAddOffset(n,w) {
    if(n == 0) return;
    while(this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while(this[w] >= this.DV) {
      this[w] -= this.DV;
      if(++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  // (protected) convert to radix string
  function bnpToRadix(b) {
    if(b == null) b = 10;
    if(this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b,cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d,y,z);
    while(y.signum() > 0) {
      r = (a+z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d,y,z);
    }
    return z.intValue().toString(b) + r;
  }
  // (public) return value as integer
  function bnIntValue() {
    if(this.s < 0) {
      if(this.t == 1) return this[0]-this.DV;
      else if(this.t == 0) return -1;
    }
    else if(this.t == 1) return this[0];
    else if(this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
  }
  // (protected) r = this + a
  function bnpAddTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]+a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c += a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c += a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = (c<0)?-1:0;
    if(c > 0) r[i++] = c;
    else if(c < -1) r[i++] = this.DV+c;
    r.t = i;
    r.clamp();
  }
  BigInteger.prototype.fromRadix = bnpFromRadix;
  BigInteger.prototype.chunkSize = bnpChunkSize;
  BigInteger.prototype.signum = bnSigNum;
  BigInteger.prototype.dMultiply = bnpDMultiply;
  BigInteger.prototype.dAddOffset = bnpDAddOffset;
  BigInteger.prototype.toRadix = bnpToRadix;
  BigInteger.prototype.intValue = bnIntValue;
  BigInteger.prototype.addTo = bnpAddTo;
  //======= end jsbn =======
  // Emscripten wrapper
  var Wrapper = {
    abs: function(l, h) {
      var x = new goog.math.Long(l, h);
      var ret;
      if (x.isNegative()) {
        ret = x.negate();
      } else {
        ret = x;
      }
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
    },
    ensureTemps: function() {
      if (Wrapper.ensuredTemps) return;
      Wrapper.ensuredTemps = true;
      Wrapper.two32 = new BigInteger();
      Wrapper.two32.fromString('4294967296', 10);
      Wrapper.two64 = new BigInteger();
      Wrapper.two64.fromString('18446744073709551616', 10);
      Wrapper.temp1 = new BigInteger();
      Wrapper.temp2 = new BigInteger();
    },
    lh2bignum: function(l, h) {
      var a = new BigInteger();
      a.fromString(h.toString(), 10);
      var b = new BigInteger();
      a.multiplyTo(Wrapper.two32, b);
      var c = new BigInteger();
      c.fromString(l.toString(), 10);
      var d = new BigInteger();
      c.addTo(b, d);
      return d;
    },
    stringify: function(l, h, unsigned) {
      var ret = new goog.math.Long(l, h).toString();
      if (unsigned && ret[0] == '-') {
        // unsign slowly using jsbn bignums
        Wrapper.ensureTemps();
        var bignum = new BigInteger();
        bignum.fromString(ret, 10);
        ret = new BigInteger();
        Wrapper.two64.addTo(bignum, ret);
        ret = ret.toString(10);
      }
      return ret;
    },
    fromString: function(str, base, min, max, unsigned) {
      Wrapper.ensureTemps();
      var bignum = new BigInteger();
      bignum.fromString(str, base);
      var bigmin = new BigInteger();
      bigmin.fromString(min, 10);
      var bigmax = new BigInteger();
      bigmax.fromString(max, 10);
      if (unsigned && bignum.compareTo(BigInteger.ZERO) < 0) {
        var temp = new BigInteger();
        bignum.addTo(Wrapper.two64, temp);
        bignum = temp;
      }
      var error = false;
      if (bignum.compareTo(bigmin) < 0) {
        bignum = bigmin;
        error = true;
      } else if (bignum.compareTo(bigmax) > 0) {
        bignum = bigmax;
        error = true;
      }
      var ret = goog.math.Long.fromString(bignum.toString()); // min-max checks should have clamped this to a range goog.math.Long can handle well
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
      if (error) throw 'range error';
    }
  };
  return Wrapper;
})();
//======= end closure i64 code =======
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
