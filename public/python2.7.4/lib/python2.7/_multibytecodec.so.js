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
var _streamkwarglist;
var _multibytecodec_methods;
var _mbstreamwriter_methods;
var _mbstreamwriter_members;
var _mbstreamreader_methods;
var _mbstreamreader_members;
var _mbiencoder_methods;
var _mbidecoder_methods;
var _init_multibytecodec_typelist;
var _incrementalkwarglist;
var _incnewkwarglist;
var _codeckwarglist;
var _codecctx_getsets;
var __str9;
var __str8;
var __str7;
var __str6;
var __str53;
var __str52;
var __str51;
var __str50;
var __str5;
var __str49;
var __str48;
var __str47;
var __str46;
var __str45;
var __str44;
var __str43;
var __str42;
var __str41;
var __str40;
var __str4;
var __str39;
var __str38;
var __str37;
var __str36;
var __str35;
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
var __str24;
var __str23;
var __str22;
var __str21;
var __str20;
var __str2;
var __str19;
var __str18;
var __str17;
var __str16;
var __str15;
var __str14;
var __str13;
var __str12;
var __str11;
var __str10;
var __str1;
var __str;
var ___methods;
var ___func___call_error_callback;
var _MultibyteStreamWriter_Type;
var _MultibyteStreamReader_Type;
var _MultibyteIncrementalEncoder_Type;
var _MultibyteIncrementalDecoder_Type;
var _MultibyteCodec_Type;
var _MultibyteCodec_Encode__doc__;
var _MultibyteCodec_Decode__doc__;
_streamkwarglist=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_multibytecodec_methods=allocate([0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mbstreamwriter_methods=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mbstreamwriter_members=allocate([0,0,0,0,6,0,0,0,32,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mbstreamreader_methods=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mbstreamreader_members=allocate([0,0,0,0,6,0,0,0,36,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mbiencoder_methods=allocate([0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mbidecoder_methods=allocate([0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_init_multibytecodec_typelist=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_incrementalkwarglist=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_incnewkwarglist=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_codeckwarglist=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_codecctx_getsets=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([105,108,108,101,103,97,108,32,109,117,108,116,105,98,121,116,101,32,115,101,113,117,101,110,99,101,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([115,42,124,122,58,100,101,99,111,100,101,0], "i8", ALLOC_NORMAL);
__str7=allocate([100,101,99,111,100,101,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([101,110,99,111,100,101,0,0], "i8", ALLOC_NORMAL);
__str53=allocate([79,124,105,58,101,110,99,111,100,101,0,0], "i8", ALLOC_NORMAL);
__str52=allocate([124,115,58,73,110,99,114,101,109,101,110,116,97,108,69,110,99,111,100,101,114,0,0,0], "i8", ALLOC_NORMAL);
__str51=allocate([77,117,108,116,105,98,121,116,101,73,110,99,114,101,109,101,110,116,97,108,69,110,99,111,100,101,114,0], "i8", ALLOC_NORMAL);
__str50=allocate([102,105,110,97,108,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([77,117,108,116,105,98,121,116,101,67,111,100,101,99,0,0], "i8", ALLOC_NORMAL);
__str49=allocate([115,42,124,105,58,100,101,99,111,100,101,0], "i8", ALLOC_NORMAL);
__str48=allocate([124,115,58,73,110,99,114,101,109,101,110,116,97,108,68,101,99,111,100,101,114,0,0,0], "i8", ALLOC_NORMAL);
__str47=allocate([77,117,108,116,105,98,121,116,101,73,110,99,114,101,109,101,110,116,97,108,68,101,99,111,100,101,114,0], "i8", ALLOC_NORMAL);
__str46=allocate([115,116,114,101,97,109,32,102,117,110,99,116,105,111,110,32,114,101,116,117,114,110,101,100,32,97,32,110,111,110,45,115,116,114,105,110,103,32,111,98,106,101,99,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str45=allocate([105,0,0,0], "i8", ALLOC_NORMAL);
__str44=allocate([97,114,103,32,49,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str43=allocate([114,101,97,100,108,105,110,101,115,0,0,0], "i8", ALLOC_NORMAL);
__str42=allocate([114,101,97,100,108,105,110,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str41=allocate([114,101,97,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str40=allocate([79,124,115,58,83,116,114,101,97,109,82,101,97,100,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([97,114,103,117,109,101,110,116,32,116,121,112,101,32,105,110,118,97,108,105,100,0,0,0], "i8", ALLOC_NORMAL);
__str39=allocate([77,117,108,116,105,98,121,116,101,83,116,114,101,97,109,82,101,97,100,101,114,0,0,0], "i8", ALLOC_NORMAL);
__str38=allocate([112,101,110,100,105,110,103,32,98,117,102,102,101,114,32,111,118,101,114,102,108,111,119,0], "i8", ALLOC_NORMAL);
__str37=allocate([97,114,103,32,109,117,115,116,32,98,101,32,97,32,115,101,113,117,101,110,99,101,32,111,98,106,101,99,116,0,0,0], "i8", ALLOC_NORMAL);
__str36=allocate([79,0,0,0], "i8", ALLOC_NORMAL);
__str35=allocate([114,101,115,101,116,0,0,0], "i8", ALLOC_NORMAL);
__str34=allocate([119,114,105,116,101,108,105,110,101,115,0,0], "i8", ALLOC_NORMAL);
__str33=allocate([119,114,105,116,101,0,0,0], "i8", ALLOC_NORMAL);
__str32=allocate([101,114,114,111,114,115,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0], "i8", ALLOC_NORMAL);
__str31=allocate([104,111,119,32,116,111,32,116,114,101,97,116,32,101,114,114,111,114,115,0], "i8", ALLOC_NORMAL);
__str30=allocate([115,116,114,101,97,109,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([109,117,108,116,105,98,121,116,101,99,111,100,101,99,46,95,95,109,97,112,95,42,0,0], "i8", ALLOC_NORMAL);
__str29=allocate([99,111,100,101,99,32,105,115,32,117,110,101,120,112,101,99,116,101,100,32,116,121,112,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str28=allocate([99,111,100,101,99,0,0,0], "i8", ALLOC_NORMAL);
__str27=allocate([79,124,115,58,83,116,114,101,97,109,87,114,105,116,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str26=allocate([77,117,108,116,105,98,121,116,101,83,116,114,101,97,109,87,114,105,116,101,114,0,0,0], "i8", ALLOC_NORMAL);
__str25=allocate([101,110,99,111,100,105,110,103,32,101,114,114,111,114,32,104,97,110,100,108,101,114,32,109,117,115,116,32,114,101,116,117,114,110,32,40,117,110,105,99,111,100,101,44,32,105,110,116,41,32,116,117,112,108,101,0], "i8", ALLOC_NORMAL);
__str24=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__str23=allocate([99,111,117,108,100,110,39,116,32,99,111,110,118,101,114,116,32,116,104,101,32,111,98,106,101,99,116,32,116,111,32,117,110,105,99,111,100,101,46,0], "i8", ALLOC_NORMAL);
__str22=allocate([79,124,122,58,101,110,99,111,100,101,0,0], "i8", ALLOC_NORMAL);
__str21=allocate([101,114,114,111,114,115,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([105,110,112,117,116,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([95,95,99,114,101,97,116,101,95,99,111,100,101,99,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([114,101,112,108,97,99,101,0], "i8", ALLOC_NORMAL);
__str18=allocate([105,103,110,111,114,101,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([115,116,114,105,99,116,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([80,121,83,116,114,105,110,103,95,67,104,101,99,107,40,101,114,114,111,114,115,41,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([46,46,47,77,111,100,117,108,101,115,47,99,106,107,99,111,100,101,99,115,47,109,117,108,116,105,98,121,116,101,99,111,100,101,99,46,99,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([112,111,115,105,116,105,111,110,32,37,122,100,32,102,114,111,109,32,101,114,114,111,114,32,104,97,110,100,108,101,114,32,111,117,116,32,111,102,32,98,111,117,110,100,115,0,0,0], "i8", ALLOC_NORMAL);
__str13=allocate([100,101,99,111,100,105,110,103,32,101,114,114,111,114,32,104,97,110,100,108,101,114,32,109,117,115,116,32,114,101,116,117,114,110,32,40,117,110,105,99,111,100,101,44,32,105,110,116,41,32,116,117,112,108,101,0], "i8", ALLOC_NORMAL);
__str12=allocate([117,110,107,110,111,119,110,32,114,117,110,116,105,109,101,32,101,114,114,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([105,110,116,101,114,110,97,108,32,99,111,100,101,99,32,101,114,114,111,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([105,110,99,111,109,112,108,101,116,101,32,109,117,108,116,105,98,121,116,101,32,115,101,113,117,101,110,99,101,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([99,97,110,39,116,32,105,110,105,116,105,97,108,105,122,101,32,116,104,101,32,95,109,117,108,116,105,98,121,116,101,99,111,100,101,99,32,109,111,100,117,108,101,0], "i8", ALLOC_NORMAL);
__str=allocate([95,109,117,108,116,105,98,121,116,101,99,111,100,101,99,0], "i8", ALLOC_NORMAL);
___methods=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
___func___call_error_callback=allocate([99,97,108,108,95,101,114,114,111,114,95,99,97,108,108,98,97,99,107,0], "i8", ALLOC_NORMAL);
_MultibyteStreamWriter_Type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,69,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_MultibyteStreamReader_Type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,69,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_MultibyteIncrementalEncoder_Type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,69,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_MultibyteIncrementalDecoder_Type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,69,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_MultibyteCodec_Type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_MultibyteCodec_Encode__doc__=allocate([73,46,101,110,99,111,100,101,40,117,110,105,99,111,100,101,91,44,32,101,114,114,111,114,115,93,41,32,45,62,32,40,115,116,114,105,110,103,44,32,108,101,110,103,116,104,32,99,111,110,115,117,109,101,100,41,10,10,82,101,116,117,114,110,32,97,110,32,101,110,99,111,100,101,100,32,115,116,114,105,110,103,32,118,101,114,115,105,111,110,32,111,102,32,96,117,110,105,99,111,100,101,39,46,32,101,114,114,111,114,115,32,109,97,121,32,98,101,32,103,105,118,101,110,32,116,111,10,115,101,116,32,97,32,100,105,102,102,101,114,101,110,116,32,101,114,114,111,114,32,104,97,110,100,108,105,110,103,32,115,99,104,101,109,101,46,32,68,101,102,97,117,108,116,32,105,115,32,39,115,116,114,105,99,116,39,32,109,101,97,110,105,110,103,32,116,104,97,116,10,101,110,99,111,100,105,110,103,32,101,114,114,111,114,115,32,114,97,105,115,101,32,97,32,85,110,105,99,111,100,101,69,110,99,111,100,101,69,114,114,111,114,46,32,79,116,104,101,114,32,112,111,115,115,105,98,108,101,32,118,97,108,117,101,115,32,97,114,101,10,39,105,103,110,111,114,101,39,44,32,39,114,101,112,108,97,99,101,39,32,97,110,100,32,39,120,109,108,99,104,97,114,114,101,102,114,101,112,108,97,99,101,39,32,97,115,32,119,101,108,108,32,97,115,32,97,110,121,32,111,116,104,101,114,32,110,97,109,101,10,114,101,103,105,115,116,101,114,101,100,32,119,105,116,104,32,99,111,100,101,99,115,46,114,101,103,105,115,116,101,114,95,101,114,114,111,114,32,116,104,97,116,32,99,97,110,32,104,97,110,100,108,101,32,85,110,105,99,111,100,101,69,110,99,111,100,101,69,114,114,111,114,115,46,0,0], "i8", ALLOC_NORMAL);
_MultibyteCodec_Decode__doc__=allocate([73,46,100,101,99,111,100,101,40,115,116,114,105,110,103,91,44,32,101,114,114,111,114,115,93,41,32,45,62,32,40,117,110,105,99,111,100,101,111,98,106,101,99,116,44,32,108,101,110,103,116,104,32,99,111,110,115,117,109,101,100,41,10,10,68,101,99,111,100,101,115,32,96,115,116,114,105,110,103,39,32,117,115,105,110,103,32,73,44,32,97,110,32,77,117,108,116,105,98,121,116,101,67,111,100,101,99,32,105,110,115,116,97,110,99,101,46,32,101,114,114,111,114,115,32,109,97,121,32,98,101,32,103,105,118,101,110,10,116,111,32,115,101,116,32,97,32,100,105,102,102,101,114,101,110,116,32,101,114,114,111,114,32,104,97,110,100,108,105,110,103,32,115,99,104,101,109,101,46,32,68,101,102,97,117,108,116,32,105,115,32,39,115,116,114,105,99,116,39,32,109,101,97,110,105,110,103,10,116,104,97,116,32,101,110,99,111,100,105,110,103,32,101,114,114,111,114,115,32,114,97,105,115,101,32,97,32,85,110,105,99,111,100,101,68,101,99,111,100,101,69,114,114,111,114,46,32,79,116,104,101,114,32,112,111,115,115,105,98,108,101,32,118,97,108,117,101,115,10,97,114,101,32,39,105,103,110,111,114,101,39,32,97,110,100,32,39,114,101,112,108,97,99,101,39,32,97,115,32,119,101,108,108,32,97,115,32,97,110,121,32,111,116,104,101,114,32,110,97,109,101,32,114,101,103,105,115,116,101,114,101,100,32,119,105,116,104,10,99,111,100,101,99,115,46,114,101,103,105,115,116,101,114,95,101,114,114,111,114,32,116,104,97,116,32,105,115,32,97,98,108,101,32,116,111,32,104,97,110,100,108,101,32,85,110,105,99,111,100,101,68,101,99,111,100,101,69,114,114,111,114,115,46,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_streamkwarglist)>>2)]=((__str30)|0);
HEAP32[(((_streamkwarglist)+(4))>>2)]=((__str21)|0);
HEAP32[((_multibytecodec_methods)>>2)]=((__str6)|0);
HEAP32[(((_multibytecodec_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 46));
HEAP32[(((_multibytecodec_methods)+(12))>>2)]=((_MultibyteCodec_Encode__doc__)|0);
HEAP32[(((_multibytecodec_methods)+(16))>>2)]=((__str7)|0);
HEAP32[(((_multibytecodec_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 62));
HEAP32[(((_multibytecodec_methods)+(28))>>2)]=((_MultibyteCodec_Decode__doc__)|0);
HEAP32[((_mbstreamwriter_methods)>>2)]=((__str33)|0);
HEAP32[(((_mbstreamwriter_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 48));
HEAP32[(((_mbstreamwriter_methods)+(16))>>2)]=((__str34)|0);
HEAP32[(((_mbstreamwriter_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 18));
HEAP32[(((_mbstreamwriter_methods)+(32))>>2)]=((__str35)|0);
HEAP32[(((_mbstreamwriter_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 4));
HEAP32[((_mbstreamwriter_members)>>2)]=((__str30)|0);
HEAP32[((_mbstreamreader_methods)>>2)]=((__str41)|0);
HEAP32[(((_mbstreamreader_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 30));
HEAP32[(((_mbstreamreader_methods)+(16))>>2)]=((__str42)|0);
HEAP32[(((_mbstreamreader_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_mbstreamreader_methods)+(32))>>2)]=((__str43)|0);
HEAP32[(((_mbstreamreader_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 14));
HEAP32[(((_mbstreamreader_methods)+(48))>>2)]=((__str35)|0);
HEAP32[(((_mbstreamreader_methods)+(52))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[((_mbstreamreader_members)>>2)]=((__str30)|0);
HEAP32[((_mbiencoder_methods)>>2)]=((__str6)|0);
HEAP32[(((_mbiencoder_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 40));
HEAP32[(((_mbiencoder_methods)+(16))>>2)]=((__str35)|0);
HEAP32[(((_mbiencoder_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 56));
HEAP32[((_mbidecoder_methods)>>2)]=((__str7)|0);
HEAP32[(((_mbidecoder_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 16));
HEAP32[(((_mbidecoder_methods)+(16))>>2)]=((__str35)|0);
HEAP32[(((_mbidecoder_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 28));
HEAP32[((_init_multibytecodec_typelist)>>2)]=_MultibyteIncrementalEncoder_Type;
HEAP32[(((_init_multibytecodec_typelist)+(4))>>2)]=_MultibyteIncrementalDecoder_Type;
HEAP32[(((_init_multibytecodec_typelist)+(8))>>2)]=_MultibyteStreamReader_Type;
HEAP32[(((_init_multibytecodec_typelist)+(12))>>2)]=_MultibyteStreamWriter_Type;
HEAP32[((_incrementalkwarglist)>>2)]=((__str20)|0);
HEAP32[(((_incrementalkwarglist)+(4))>>2)]=((__str50)|0);
HEAP32[((_incnewkwarglist)>>2)]=((__str21)|0);
HEAP32[((_codeckwarglist)>>2)]=((__str20)|0);
HEAP32[(((_codeckwarglist)+(4))>>2)]=((__str21)|0);
HEAP32[((_codecctx_getsets)>>2)]=((__str21)|0);
HEAP32[(((_codecctx_getsets)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 54));
HEAP32[(((_codecctx_getsets)+(8))>>2)]=((FUNCTION_TABLE_OFFSET + 10));
HEAP32[(((_codecctx_getsets)+(12))>>2)]=((__str31)|0);
HEAP32[((___methods)>>2)]=((__str2)|0);
HEAP32[(((___methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 60);
HEAP32[(((_MultibyteStreamWriter_Type)+(12))>>2)]=((__str26)|0);
HEAP32[(((_MultibyteStreamWriter_Type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 24));
HEAP32[(((_MultibyteStreamWriter_Type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((_MultibyteStreamWriter_Type)+(92))>>2)]=((FUNCTION_TABLE_OFFSET + 66));
HEAP32[(((_MultibyteStreamWriter_Type)+(116))>>2)]=((_mbstreamwriter_methods)|0);
HEAP32[(((_MultibyteStreamWriter_Type)+(120))>>2)]=((_mbstreamwriter_members)|0);
HEAP32[(((_MultibyteStreamWriter_Type)+(124))>>2)]=((_codecctx_getsets)|0);
HEAP32[(((_MultibyteStreamWriter_Type)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 50);
HEAP32[(((_MultibyteStreamWriter_Type)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_MultibyteStreamReader_Type)+(12))>>2)]=((__str39)|0);
HEAP32[(((_MultibyteStreamReader_Type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 58));
HEAP32[(((_MultibyteStreamReader_Type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((_MultibyteStreamReader_Type)+(92))>>2)]=((FUNCTION_TABLE_OFFSET + 22));
HEAP32[(((_MultibyteStreamReader_Type)+(116))>>2)]=((_mbstreamreader_methods)|0);
HEAP32[(((_MultibyteStreamReader_Type)+(120))>>2)]=((_mbstreamreader_members)|0);
HEAP32[(((_MultibyteStreamReader_Type)+(124))>>2)]=((_codecctx_getsets)|0);
HEAP32[(((_MultibyteStreamReader_Type)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 68);
HEAP32[(((_MultibyteStreamReader_Type)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((_MultibyteIncrementalEncoder_Type)+(12))>>2)]=((__str51)|0);
HEAP32[(((_MultibyteIncrementalEncoder_Type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 32));
HEAP32[(((_MultibyteIncrementalEncoder_Type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((_MultibyteIncrementalEncoder_Type)+(92))>>2)]=((FUNCTION_TABLE_OFFSET + 26));
HEAP32[(((_MultibyteIncrementalEncoder_Type)+(116))>>2)]=((_mbiencoder_methods)|0);
HEAP32[(((_MultibyteIncrementalEncoder_Type)+(124))>>2)]=((_codecctx_getsets)|0);
HEAP32[(((_MultibyteIncrementalEncoder_Type)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 52);
HEAP32[(((_MultibyteIncrementalEncoder_Type)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 34);
HEAP32[(((_MultibyteIncrementalDecoder_Type)+(12))>>2)]=((__str47)|0);
HEAP32[(((_MultibyteIncrementalDecoder_Type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 38));
HEAP32[(((_MultibyteIncrementalDecoder_Type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((_MultibyteIncrementalDecoder_Type)+(92))>>2)]=((FUNCTION_TABLE_OFFSET + 12));
HEAP32[(((_MultibyteIncrementalDecoder_Type)+(116))>>2)]=((_mbidecoder_methods)|0);
HEAP32[(((_MultibyteIncrementalDecoder_Type)+(124))>>2)]=((_codecctx_getsets)|0);
HEAP32[(((_MultibyteIncrementalDecoder_Type)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((_MultibyteIncrementalDecoder_Type)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 36);
HEAP32[(((_MultibyteCodec_Type)+(12))>>2)]=((__str5)|0);
HEAP32[(((_MultibyteCodec_Type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 64));
HEAP32[(((_MultibyteCodec_Type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((_MultibyteCodec_Type)+(116))>>2)]=((_multibytecodec_methods)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_mbstreamreader_readline,0,_mbstreamwriter_reset,0,_mbstreamreader_reset,0,_mbstreamreader_new,0,_codecctx_errors_set
,0,_mbidecoder_traverse,0,_mbstreamreader_readlines,0,_mbidecoder_decode,0,_mbstreamwriter_writelines,0,_mbidecoder_init
,0,_mbstreamreader_traverse,0,_mbstreamwriter_dealloc,0,_mbiencoder_traverse,0,_mbidecoder_reset,0,_mbstreamreader_read
,0,_mbiencoder_dealloc,0,_mbiencoder_new,0,_mbidecoder_new,0,_mbidecoder_dealloc,0,_mbiencoder_encode
,0,_PyObject_GenericGetAttr,0,_mbstreamwriter_new,0,_MultibyteCodec_Encode,0,_mbstreamwriter_write,0,_mbstreamwriter_init
,0,_mbiencoder_init,0,_codecctx_errors_get,0,_mbiencoder_reset,0,_mbstreamreader_dealloc,0,___create_codec,0,_MultibyteCodec_Decode,0,_multibytecodec_dealloc,0,_mbstreamwriter_traverse,0,_mbstreamreader_init,0]);
// EMSCRIPTEN_START_FUNCS
function _init_multibytecodec() {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 20)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $i;
      var $m;
      var $typelist=__stackBase__;
      var $1=$typelist;
      assert(20 % 1 === 0);HEAP32[(($1)>>2)]=HEAP32[((_init_multibytecodec_typelist)>>2)];HEAP32[((($1)+(4))>>2)]=HEAP32[(((_init_multibytecodec_typelist)+(4))>>2)];HEAP32[((($1)+(8))>>2)]=HEAP32[(((_init_multibytecodec_typelist)+(8))>>2)];HEAP32[((($1)+(12))>>2)]=HEAP32[(((_init_multibytecodec_typelist)+(12))>>2)];HEAP32[((($1)+(16))>>2)]=HEAP32[(((_init_multibytecodec_typelist)+(16))>>2)];
      var $2=_PyType_Ready(_MultibyteCodec_Type);
      var $3=(($2)|(0)) < 0;
      if ($3) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 13; break;
    case 3: 
      var $6=_Py_InitModule4(((__str)|0), ((___methods)|0), 0, 0, 1013);
      $m=$6;
      var $7=$m;
      var $8=(($7)|(0))==0;
      if ($8) { label = 4; break; } else { label = 5; break; }
    case 4: 
      label = 13; break;
    case 5: 
      $i=0;
      label = 6; break;
    case 6: 
      var $12=$i;
      var $13=(($typelist+($12<<2))|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=(($14)|(0))!=0;
      if ($15) { label = 7; break; } else { label = 11; break; }
    case 7: 
      var $17=$i;
      var $18=(($typelist+($17<<2))|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=_PyType_Ready($19);
      var $21=(($20)|(0)) < 0;
      if ($21) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 13; break;
    case 9: 
      var $24=$i;
      var $25=(($typelist+($24<<2))|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=$26;
      var $28=(($27)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=((($29)+(1))|0);
      HEAP32[(($28)>>2)]=$30;
      var $31=$m;
      var $32=$i;
      var $33=(($typelist+($32<<2))|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=(($34+12)|0);
      var $36=HEAP32[(($35)>>2)];
      var $37=$i;
      var $38=(($typelist+($37<<2))|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=$39;
      var $41=_PyModule_AddObject($31, $36, $40);
      label = 10; break;
    case 10: 
      var $43=$i;
      var $44=((($43)+(1))|0);
      $i=$44;
      label = 6; break;
    case 11: 
      var $46=_PyErr_Occurred();
      var $47=(($46)|(0))!=0;
      if ($47) { label = 12; break; } else { label = 13; break; }
    case 12: 
      _Py_FatalError(((__str1)|0));
      label = 13; break;
    case 13: 
      STACKTOP = __stackBase__;
      return;
    default: assert(0, "bad label: " + label);
  }
}
Module["_init_multibytecodec"] = _init_multibytecodec;
function ___create_codec($ignore, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $self;
      var $codec;
      $2=$ignore;
      $3=$arg;
      var $4=$3;
      var $5=_PyCapsule_IsValid($4, ((__str3)|0));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $8=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($8, ((__str4)|0));
      $1=0;
      label = 9; break;
    case 3: 
      var $10=$3;
      var $11=_PyCapsule_GetPointer($10, ((__str3)|0));
      var $12=$11;
      $codec=$12;
      var $13=$codec;
      var $14=(($13+8)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=(($15)|(0))!=0;
      if ($16) { label = 4; break; } else { label = 6; break; }
    case 4: 
      var $18=$codec;
      var $19=(($18+8)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=$codec;
      var $22=(($21+4)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=FUNCTION_TABLE[$20]($23);
      var $25=(($24)|(0))!=0;
      if ($25) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=0;
      label = 9; break;
    case 6: 
      var $28=__PyObject_New(_MultibyteCodec_Type);
      var $29=$28;
      $self=$29;
      var $30=$self;
      var $31=(($30)|(0))==0;
      if ($31) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=0;
      label = 9; break;
    case 8: 
      var $34=$codec;
      var $35=$self;
      var $36=(($35+8)|0);
      HEAP32[(($36)>>2)]=$34;
      var $37=$self;
      var $38=$37;
      $1=$38;
      label = 9; break;
    case 9: 
      var $40=$1;
      return $40;
    default: assert(0, "bad label: " + label);
  }
}
function _multibytecodec_dealloc($self) {
  var label = 0;
  var $1;
  $1=$self;
  var $2=$1;
  var $3=$2;
  _PyObject_Free($3);
  return;
}
function _MultibyteCodec_Encode($self, $args, $kwargs) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 20)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $state=__stackBase__;
      var $data=(__stackBase__)+(8);
      var $errorcb;
      var $r;
      var $arg=(__stackBase__)+(12);
      var $ucvt;
      var $errors=(__stackBase__)+(16);
      var $datalen;
      $2=$self;
      $3=$args;
      $4=$kwargs;
      HEAP32[(($errors)>>2)]=0;
      var $5=$3;
      var $6=$4;
      var $7=__PyArg_ParseTupleAndKeywords_SizeT($5, $6, ((__str22)|0), ((_codeckwarglist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$arg,HEAP32[(((tempInt)+(4))>>2)]=$errors,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 77; break;
    case 3: 
      var $11=HEAP32[(($arg)>>2)];
      var $12=(($11+4)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=(($13+84)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=$15 & 268435456;
      var $17=(($16)|(0))!=0;
      if ($17) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $ucvt=0;
      label = 16; break;
    case 5: 
      var $20=HEAP32[(($arg)>>2)];
      var $21=_PyObject_Unicode($20);
      $ucvt=$21;
      HEAP32[(($arg)>>2)]=$21;
      var $22=HEAP32[(($arg)>>2)];
      var $23=(($22)|(0))==0;
      if ($23) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 77; break;
    case 7: 
      var $26=HEAP32[(($arg)>>2)];
      var $27=(($26+4)|0);
      var $28=HEAP32[(($27)>>2)];
      var $29=(($28+84)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$30 & 268435456;
      var $32=(($31)|(0))!=0;
      if ($32) { label = 14; break; } else { label = 8; break; }
    case 8: 
      var $34=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($34, ((__str23)|0));
      label = 9; break;
    case 9: 
      var $36=$ucvt;
      var $37=(($36)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=((($38)-(1))|0);
      HEAP32[(($37)>>2)]=$39;
      var $40=(($39)|(0))!=0;
      if ($40) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 12; break;
    case 11: 
      var $43=$ucvt;
      var $44=(($43+4)|0);
      var $45=HEAP32[(($44)>>2)];
      var $46=(($45+24)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=$ucvt;
      FUNCTION_TABLE[$47]($48);
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      $1=0;
      label = 77; break;
    case 14: 
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $54=HEAP32[(($arg)>>2)];
      var $55=$54;
      var $56=(($55+12)|0);
      var $57=HEAP32[(($56)>>2)];
      HEAP32[(($data)>>2)]=$57;
      var $58=HEAP32[(($arg)>>2)];
      var $59=$58;
      var $60=(($59+8)|0);
      var $61=HEAP32[(($60)>>2)];
      $datalen=$61;
      var $62=HEAP32[(($errors)>>2)];
      var $63=_internal_error_callback($62);
      $errorcb=$63;
      var $64=$errorcb;
      var $65=(($64)|(0))==0;
      if ($65) { label = 17; break; } else { label = 28; break; }
    case 17: 
      label = 18; break;
    case 18: 
      var $68=$ucvt;
      var $69=(($68)|(0))==0;
      if ($69) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 26; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $73=$ucvt;
      var $74=(($73)|0);
      var $75=HEAP32[(($74)>>2)];
      var $76=((($75)-(1))|0);
      HEAP32[(($74)>>2)]=$76;
      var $77=(($76)|(0))!=0;
      if ($77) { label = 22; break; } else { label = 23; break; }
    case 22: 
      label = 24; break;
    case 23: 
      var $80=$ucvt;
      var $81=(($80+4)|0);
      var $82=HEAP32[(($81)>>2)];
      var $83=(($82+24)|0);
      var $84=HEAP32[(($83)>>2)];
      var $85=$ucvt;
      FUNCTION_TABLE[$84]($85);
      label = 24; break;
    case 24: 
      label = 25; break;
    case 25: 
      label = 26; break;
    case 26: 
      label = 27; break;
    case 27: 
      $1=0;
      label = 77; break;
    case 28: 
      var $91=$2;
      var $92=(($91+8)|0);
      var $93=HEAP32[(($92)>>2)];
      var $94=(($93+16)|0);
      var $95=HEAP32[(($94)>>2)];
      var $96=(($95)|(0))!=0;
      if ($96) { label = 29; break; } else { label = 31; break; }
    case 29: 
      var $98=$2;
      var $99=(($98+8)|0);
      var $100=HEAP32[(($99)>>2)];
      var $101=(($100+16)|0);
      var $102=HEAP32[(($101)>>2)];
      var $103=$2;
      var $104=(($103+8)|0);
      var $105=HEAP32[(($104)>>2)];
      var $106=(($105+4)|0);
      var $107=HEAP32[(($106)>>2)];
      var $108=FUNCTION_TABLE[$102]($state, $107);
      var $109=(($108)|(0))!=0;
      if ($109) { label = 30; break; } else { label = 31; break; }
    case 30: 
      label = 55; break;
    case 31: 
      var $112=$2;
      var $113=(($112+8)|0);
      var $114=HEAP32[(($113)>>2)];
      var $115=$datalen;
      var $116=$errorcb;
      var $117=_multibytecodec_encode($114, $state, $data, $115, $116, 3);
      $r=$117;
      var $118=$r;
      var $119=(($118)|(0))==0;
      if ($119) { label = 32; break; } else { label = 33; break; }
    case 32: 
      label = 55; break;
    case 33: 
      label = 34; break;
    case 34: 
      var $123=$errorcb;
      var $124=(($123)|(0))!=0;
      if ($124) { label = 35; break; } else { label = 43; break; }
    case 35: 
      var $126=$errorcb;
      var $127=(($126)>>>(0)) < 1;
      if ($127) { label = 37; break; } else { label = 36; break; }
    case 36: 
      var $129=$errorcb;
      var $130=3 < (($129)>>>(0));
      if ($130) { label = 37; break; } else { label = 43; break; }
    case 37: 
      label = 38; break;
    case 38: 
      var $133=$errorcb;
      var $134=(($133)|0);
      var $135=HEAP32[(($134)>>2)];
      var $136=((($135)-(1))|0);
      HEAP32[(($134)>>2)]=$136;
      var $137=(($136)|(0))!=0;
      if ($137) { label = 39; break; } else { label = 40; break; }
    case 39: 
      label = 41; break;
    case 40: 
      var $140=$errorcb;
      var $141=(($140+4)|0);
      var $142=HEAP32[(($141)>>2)];
      var $143=(($142+24)|0);
      var $144=HEAP32[(($143)>>2)];
      var $145=$errorcb;
      FUNCTION_TABLE[$144]($145);
      label = 41; break;
    case 41: 
      label = 42; break;
    case 42: 
      label = 43; break;
    case 43: 
      label = 44; break;
    case 44: 
      label = 45; break;
    case 45: 
      var $151=$ucvt;
      var $152=(($151)|(0))==0;
      if ($152) { label = 46; break; } else { label = 47; break; }
    case 46: 
      label = 53; break;
    case 47: 
      label = 48; break;
    case 48: 
      var $156=$ucvt;
      var $157=(($156)|0);
      var $158=HEAP32[(($157)>>2)];
      var $159=((($158)-(1))|0);
      HEAP32[(($157)>>2)]=$159;
      var $160=(($159)|(0))!=0;
      if ($160) { label = 49; break; } else { label = 50; break; }
    case 49: 
      label = 51; break;
    case 50: 
      var $163=$ucvt;
      var $164=(($163+4)|0);
      var $165=HEAP32[(($164)>>2)];
      var $166=(($165+24)|0);
      var $167=HEAP32[(($166)>>2)];
      var $168=$ucvt;
      FUNCTION_TABLE[$167]($168);
      label = 51; break;
    case 51: 
      label = 52; break;
    case 52: 
      label = 53; break;
    case 53: 
      label = 54; break;
    case 54: 
      var $173=$r;
      var $174=$datalen;
      var $175=_make_tuple($173, $174);
      $1=$175;
      label = 77; break;
    case 55: 
      label = 56; break;
    case 56: 
      var $178=$errorcb;
      var $179=(($178)|(0))!=0;
      if ($179) { label = 57; break; } else { label = 65; break; }
    case 57: 
      var $181=$errorcb;
      var $182=(($181)>>>(0)) < 1;
      if ($182) { label = 59; break; } else { label = 58; break; }
    case 58: 
      var $184=$errorcb;
      var $185=3 < (($184)>>>(0));
      if ($185) { label = 59; break; } else { label = 65; break; }
    case 59: 
      label = 60; break;
    case 60: 
      var $188=$errorcb;
      var $189=(($188)|0);
      var $190=HEAP32[(($189)>>2)];
      var $191=((($190)-(1))|0);
      HEAP32[(($189)>>2)]=$191;
      var $192=(($191)|(0))!=0;
      if ($192) { label = 61; break; } else { label = 62; break; }
    case 61: 
      label = 63; break;
    case 62: 
      var $195=$errorcb;
      var $196=(($195+4)|0);
      var $197=HEAP32[(($196)>>2)];
      var $198=(($197+24)|0);
      var $199=HEAP32[(($198)>>2)];
      var $200=$errorcb;
      FUNCTION_TABLE[$199]($200);
      label = 63; break;
    case 63: 
      label = 64; break;
    case 64: 
      label = 65; break;
    case 65: 
      label = 66; break;
    case 66: 
      label = 67; break;
    case 67: 
      var $206=$ucvt;
      var $207=(($206)|(0))==0;
      if ($207) { label = 68; break; } else { label = 69; break; }
    case 68: 
      label = 75; break;
    case 69: 
      label = 70; break;
    case 70: 
      var $211=$ucvt;
      var $212=(($211)|0);
      var $213=HEAP32[(($212)>>2)];
      var $214=((($213)-(1))|0);
      HEAP32[(($212)>>2)]=$214;
      var $215=(($214)|(0))!=0;
      if ($215) { label = 71; break; } else { label = 72; break; }
    case 71: 
      label = 73; break;
    case 72: 
      var $218=$ucvt;
      var $219=(($218+4)|0);
      var $220=HEAP32[(($219)>>2)];
      var $221=(($220+24)|0);
      var $222=HEAP32[(($221)>>2)];
      var $223=$ucvt;
      FUNCTION_TABLE[$222]($223);
      label = 73; break;
    case 73: 
      label = 74; break;
    case 74: 
      label = 75; break;
    case 75: 
      label = 76; break;
    case 76: 
      $1=0;
      label = 77; break;
    case 77: 
      var $229=$1;
      STACKTOP = __stackBase__;
      return $229;
    default: assert(0, "bad label: " + label);
  }
}
function _MultibyteCodec_Decode($self, $args, $kwargs) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 92)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $state=__stackBase__;
      var $buf=(__stackBase__)+(8);
      var $errorcb;
      var $pdata=(__stackBase__)+(36);
      var $data;
      var $errors=(__stackBase__)+(88);
      var $datalen;
      var $finalsize;
      var $inleft;
      var $outleft;
      var $r;
      $2=$self;
      $3=$args;
      $4=$kwargs;
      HEAP32[(($errors)>>2)]=0;
      var $5=$3;
      var $6=$4;
      var $7=__PyArg_ParseTupleAndKeywords_SizeT($5, $6, ((__str8)|0), ((_codeckwarglist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$pdata,HEAP32[(((tempInt)+(4))>>2)]=$errors,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 89; break;
    case 3: 
      var $11=(($pdata)|0);
      var $12=HEAP32[(($11)>>2)];
      $data=$12;
      var $13=(($pdata+8)|0);
      var $14=HEAP32[(($13)>>2)];
      $datalen=$14;
      var $15=HEAP32[(($errors)>>2)];
      var $16=_internal_error_callback($15);
      $errorcb=$16;
      var $17=$errorcb;
      var $18=(($17)|(0))==0;
      if ($18) { label = 4; break; } else { label = 5; break; }
    case 4: 
      _PyBuffer_Release($pdata);
      $1=0;
      label = 89; break;
    case 5: 
      var $21=$datalen;
      var $22=(($21)|(0))==0;
      if ($22) { label = 6; break; } else { label = 18; break; }
    case 6: 
      _PyBuffer_Release($pdata);
      label = 7; break;
    case 7: 
      var $25=$errorcb;
      var $26=(($25)|(0))!=0;
      if ($26) { label = 8; break; } else { label = 16; break; }
    case 8: 
      var $28=$errorcb;
      var $29=(($28)>>>(0)) < 1;
      if ($29) { label = 10; break; } else { label = 9; break; }
    case 9: 
      var $31=$errorcb;
      var $32=3 < (($31)>>>(0));
      if ($32) { label = 10; break; } else { label = 16; break; }
    case 10: 
      label = 11; break;
    case 11: 
      var $35=$errorcb;
      var $36=(($35)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=((($37)-(1))|0);
      HEAP32[(($36)>>2)]=$38;
      var $39=(($38)|(0))!=0;
      if ($39) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      var $42=$errorcb;
      var $43=(($42+4)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=(($44+24)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=$errorcb;
      FUNCTION_TABLE[$46]($47);
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $52=_PyUnicodeUCS2_FromUnicode(0, 0);
      var $53=_make_tuple($52, 0);
      $1=$53;
      label = 89; break;
    case 18: 
      var $55=(($buf+20)|0);
      HEAP32[(($55)>>2)]=0;
      var $56=$data;
      var $57=(($buf+4)|0);
      HEAP32[(($57)>>2)]=$56;
      var $58=(($buf)|0);
      HEAP32[(($58)>>2)]=$56;
      var $59=(($buf+4)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=$datalen;
      var $62=(($60+$61)|0);
      var $63=(($buf+8)|0);
      HEAP32[(($63)>>2)]=$62;
      var $64=$datalen;
      var $65=_PyUnicodeUCS2_FromUnicode(0, $64);
      var $66=(($buf+24)|0);
      HEAP32[(($66)>>2)]=$65;
      var $67=(($buf+24)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=(($68)|(0))==0;
      if ($69) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 57; break;
    case 20: 
      var $72=(($buf+24)|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=$73;
      var $75=(($74+12)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=(($buf+12)|0);
      HEAP32[(($77)>>2)]=$76;
      var $78=(($buf+12)|0);
      var $79=HEAP32[(($78)>>2)];
      var $80=(($buf+24)|0);
      var $81=HEAP32[(($80)>>2)];
      var $82=$81;
      var $83=(($82+8)|0);
      var $84=HEAP32[(($83)>>2)];
      var $85=(($79+($84<<1))|0);
      var $86=(($buf+16)|0);
      HEAP32[(($86)>>2)]=$85;
      var $87=$2;
      var $88=(($87+8)|0);
      var $89=HEAP32[(($88)>>2)];
      var $90=(($89+28)|0);
      var $91=HEAP32[(($90)>>2)];
      var $92=(($91)|(0))!=0;
      if ($92) { label = 21; break; } else { label = 23; break; }
    case 21: 
      var $94=$2;
      var $95=(($94+8)|0);
      var $96=HEAP32[(($95)>>2)];
      var $97=(($96+28)|0);
      var $98=HEAP32[(($97)>>2)];
      var $99=$2;
      var $100=(($99+8)|0);
      var $101=HEAP32[(($100)>>2)];
      var $102=(($101+4)|0);
      var $103=HEAP32[(($102)>>2)];
      var $104=FUNCTION_TABLE[$98]($state, $103);
      var $105=(($104)|(0))!=0;
      if ($105) { label = 22; break; } else { label = 23; break; }
    case 22: 
      label = 57; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $109=(($buf)|0);
      var $110=HEAP32[(($109)>>2)];
      var $111=(($buf+8)|0);
      var $112=HEAP32[(($111)>>2)];
      var $113=(($110)>>>(0)) < (($112)>>>(0));
      if ($113) { label = 25; break; } else { label = 31; break; }
    case 25: 
      var $115=(($buf+8)|0);
      var $116=HEAP32[(($115)>>2)];
      var $117=(($buf)|0);
      var $118=HEAP32[(($117)>>2)];
      var $119=$116;
      var $120=$118;
      var $121=((($119)-($120))|0);
      $inleft=$121;
      var $122=(($buf+16)|0);
      var $123=HEAP32[(($122)>>2)];
      var $124=(($buf+12)|0);
      var $125=HEAP32[(($124)>>2)];
      var $126=$123;
      var $127=$125;
      var $128=((($126)-($127))|0);
      var $129=((((($128)|(0)))/(2))&-1);
      $outleft=$129;
      var $130=$2;
      var $131=(($130+8)|0);
      var $132=HEAP32[(($131)>>2)];
      var $133=(($132+24)|0);
      var $134=HEAP32[(($133)>>2)];
      var $135=$2;
      var $136=(($135+8)|0);
      var $137=HEAP32[(($136)>>2)];
      var $138=(($137+4)|0);
      var $139=HEAP32[(($138)>>2)];
      var $140=(($buf)|0);
      var $141=$inleft;
      var $142=(($buf+12)|0);
      var $143=$outleft;
      var $144=FUNCTION_TABLE[$134]($state, $139, $140, $141, $142, $143);
      $r=$144;
      var $145=$r;
      var $146=(($145)|(0))==0;
      if ($146) { label = 26; break; } else { label = 27; break; }
    case 26: 
      label = 31; break;
    case 27: 
      var $149=$2;
      var $150=(($149+8)|0);
      var $151=HEAP32[(($150)>>2)];
      var $152=$errorcb;
      var $153=$r;
      var $154=_multibytecodec_decerror($151, $state, $buf, $152, $153);
      var $155=(($154)|(0))!=0;
      if ($155) { label = 28; break; } else { label = 29; break; }
    case 28: 
      label = 57; break;
    case 29: 
      label = 30; break;
    case 30: 
      label = 24; break;
    case 31: 
      var $160=(($buf+12)|0);
      var $161=HEAP32[(($160)>>2)];
      var $162=(($buf+24)|0);
      var $163=HEAP32[(($162)>>2)];
      var $164=$163;
      var $165=(($164+12)|0);
      var $166=HEAP32[(($165)>>2)];
      var $167=$161;
      var $168=$166;
      var $169=((($167)-($168))|0);
      var $170=((((($169)|(0)))/(2))&-1);
      $finalsize=$170;
      var $171=$finalsize;
      var $172=(($buf+24)|0);
      var $173=HEAP32[(($172)>>2)];
      var $174=$173;
      var $175=(($174+8)|0);
      var $176=HEAP32[(($175)>>2)];
      var $177=(($171)|(0))!=(($176)|(0));
      if ($177) { label = 32; break; } else { label = 35; break; }
    case 32: 
      var $179=(($buf+24)|0);
      var $180=$finalsize;
      var $181=_PyUnicodeUCS2_Resize($179, $180);
      var $182=(($181)|(0))==-1;
      if ($182) { label = 33; break; } else { label = 34; break; }
    case 33: 
      label = 57; break;
    case 34: 
      label = 35; break;
    case 35: 
      _PyBuffer_Release($pdata);
      label = 36; break;
    case 36: 
      var $187=(($buf+20)|0);
      var $188=HEAP32[(($187)>>2)];
      var $189=(($188)|(0))==0;
      if ($189) { label = 37; break; } else { label = 38; break; }
    case 37: 
      label = 44; break;
    case 38: 
      label = 39; break;
    case 39: 
      var $193=(($buf+20)|0);
      var $194=HEAP32[(($193)>>2)];
      var $195=(($194)|0);
      var $196=HEAP32[(($195)>>2)];
      var $197=((($196)-(1))|0);
      HEAP32[(($195)>>2)]=$197;
      var $198=(($197)|(0))!=0;
      if ($198) { label = 40; break; } else { label = 41; break; }
    case 40: 
      label = 42; break;
    case 41: 
      var $201=(($buf+20)|0);
      var $202=HEAP32[(($201)>>2)];
      var $203=(($202+4)|0);
      var $204=HEAP32[(($203)>>2)];
      var $205=(($204+24)|0);
      var $206=HEAP32[(($205)>>2)];
      var $207=(($buf+20)|0);
      var $208=HEAP32[(($207)>>2)];
      FUNCTION_TABLE[$206]($208);
      label = 42; break;
    case 42: 
      label = 43; break;
    case 43: 
      label = 44; break;
    case 44: 
      label = 45; break;
    case 45: 
      label = 46; break;
    case 46: 
      var $214=$errorcb;
      var $215=(($214)|(0))!=0;
      if ($215) { label = 47; break; } else { label = 55; break; }
    case 47: 
      var $217=$errorcb;
      var $218=(($217)>>>(0)) < 1;
      if ($218) { label = 49; break; } else { label = 48; break; }
    case 48: 
      var $220=$errorcb;
      var $221=3 < (($220)>>>(0));
      if ($221) { label = 49; break; } else { label = 55; break; }
    case 49: 
      label = 50; break;
    case 50: 
      var $224=$errorcb;
      var $225=(($224)|0);
      var $226=HEAP32[(($225)>>2)];
      var $227=((($226)-(1))|0);
      HEAP32[(($225)>>2)]=$227;
      var $228=(($227)|(0))!=0;
      if ($228) { label = 51; break; } else { label = 52; break; }
    case 51: 
      label = 53; break;
    case 52: 
      var $231=$errorcb;
      var $232=(($231+4)|0);
      var $233=HEAP32[(($232)>>2)];
      var $234=(($233+24)|0);
      var $235=HEAP32[(($234)>>2)];
      var $236=$errorcb;
      FUNCTION_TABLE[$235]($236);
      label = 53; break;
    case 53: 
      label = 54; break;
    case 54: 
      label = 55; break;
    case 55: 
      label = 56; break;
    case 56: 
      var $241=(($buf+24)|0);
      var $242=HEAP32[(($241)>>2)];
      var $243=$datalen;
      var $244=_make_tuple($242, $243);
      $1=$244;
      label = 89; break;
    case 57: 
      _PyBuffer_Release($pdata);
      label = 58; break;
    case 58: 
      var $247=$errorcb;
      var $248=(($247)|(0))!=0;
      if ($248) { label = 59; break; } else { label = 67; break; }
    case 59: 
      var $250=$errorcb;
      var $251=(($250)>>>(0)) < 1;
      if ($251) { label = 61; break; } else { label = 60; break; }
    case 60: 
      var $253=$errorcb;
      var $254=3 < (($253)>>>(0));
      if ($254) { label = 61; break; } else { label = 67; break; }
    case 61: 
      label = 62; break;
    case 62: 
      var $257=$errorcb;
      var $258=(($257)|0);
      var $259=HEAP32[(($258)>>2)];
      var $260=((($259)-(1))|0);
      HEAP32[(($258)>>2)]=$260;
      var $261=(($260)|(0))!=0;
      if ($261) { label = 63; break; } else { label = 64; break; }
    case 63: 
      label = 65; break;
    case 64: 
      var $264=$errorcb;
      var $265=(($264+4)|0);
      var $266=HEAP32[(($265)>>2)];
      var $267=(($266+24)|0);
      var $268=HEAP32[(($267)>>2)];
      var $269=$errorcb;
      FUNCTION_TABLE[$268]($269);
      label = 65; break;
    case 65: 
      label = 66; break;
    case 66: 
      label = 67; break;
    case 67: 
      label = 68; break;
    case 68: 
      label = 69; break;
    case 69: 
      var $275=(($buf+20)|0);
      var $276=HEAP32[(($275)>>2)];
      var $277=(($276)|(0))==0;
      if ($277) { label = 70; break; } else { label = 71; break; }
    case 70: 
      label = 77; break;
    case 71: 
      label = 72; break;
    case 72: 
      var $281=(($buf+20)|0);
      var $282=HEAP32[(($281)>>2)];
      var $283=(($282)|0);
      var $284=HEAP32[(($283)>>2)];
      var $285=((($284)-(1))|0);
      HEAP32[(($283)>>2)]=$285;
      var $286=(($285)|(0))!=0;
      if ($286) { label = 73; break; } else { label = 74; break; }
    case 73: 
      label = 75; break;
    case 74: 
      var $289=(($buf+20)|0);
      var $290=HEAP32[(($289)>>2)];
      var $291=(($290+4)|0);
      var $292=HEAP32[(($291)>>2)];
      var $293=(($292+24)|0);
      var $294=HEAP32[(($293)>>2)];
      var $295=(($buf+20)|0);
      var $296=HEAP32[(($295)>>2)];
      FUNCTION_TABLE[$294]($296);
      label = 75; break;
    case 75: 
      label = 76; break;
    case 76: 
      label = 77; break;
    case 77: 
      label = 78; break;
    case 78: 
      label = 79; break;
    case 79: 
      var $302=(($buf+24)|0);
      var $303=HEAP32[(($302)>>2)];
      var $304=(($303)|(0))==0;
      if ($304) { label = 80; break; } else { label = 81; break; }
    case 80: 
      label = 87; break;
    case 81: 
      label = 82; break;
    case 82: 
      var $308=(($buf+24)|0);
      var $309=HEAP32[(($308)>>2)];
      var $310=(($309)|0);
      var $311=HEAP32[(($310)>>2)];
      var $312=((($311)-(1))|0);
      HEAP32[(($310)>>2)]=$312;
      var $313=(($312)|(0))!=0;
      if ($313) { label = 83; break; } else { label = 84; break; }
    case 83: 
      label = 85; break;
    case 84: 
      var $316=(($buf+24)|0);
      var $317=HEAP32[(($316)>>2)];
      var $318=(($317+4)|0);
      var $319=HEAP32[(($318)>>2)];
      var $320=(($319+24)|0);
      var $321=HEAP32[(($320)>>2)];
      var $322=(($buf+24)|0);
      var $323=HEAP32[(($322)>>2)];
      FUNCTION_TABLE[$321]($323);
      label = 85; break;
    case 85: 
      label = 86; break;
    case 86: 
      label = 87; break;
    case 87: 
      label = 88; break;
    case 88: 
      $1=0;
      label = 89; break;
    case 89: 
      var $329=$1;
      STACKTOP = __stackBase__;
      return $329;
    default: assert(0, "bad label: " + label);
  }
}
function _internal_error_callback($errors) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$errors;
      var $3=$2;
      var $4=(($3)|(0))==0;
      if ($4) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $6=$2;
      var $7=_strcmp($6, ((__str17)|0));
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=1;
      label = 9; break;
    case 4: 
      var $11=$2;
      var $12=_strcmp($11, ((__str18)|0));
      var $13=(($12)|(0))==0;
      if ($13) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=2;
      label = 9; break;
    case 6: 
      var $16=$2;
      var $17=_strcmp($16, ((__str19)|0));
      var $18=(($17)|(0))==0;
      if ($18) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=3;
      label = 9; break;
    case 8: 
      var $21=$2;
      var $22=_PyString_FromString($21);
      $1=$22;
      label = 9; break;
    case 9: 
      var $24=$1;
      return $24;
    default: assert(0, "bad label: " + label);
  }
}
function _make_tuple($object, $len) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $v;
      var $w;
      $2=$object;
      $3=$len;
      var $4=$2;
      var $5=(($4)|(0))==0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 18; break;
    case 3: 
      var $8=_PyTuple_New(2);
      $v=$8;
      var $9=$v;
      var $10=(($9)|(0))==0;
      if ($10) { label = 4; break; } else { label = 10; break; }
    case 4: 
      label = 5; break;
    case 5: 
      var $13=$2;
      var $14=(($13)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=((($15)-(1))|0);
      HEAP32[(($14)>>2)]=$16;
      var $17=(($16)|(0))!=0;
      if ($17) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      var $20=$2;
      var $21=(($20+4)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=(($22+24)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$2;
      FUNCTION_TABLE[$24]($25);
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      $1=0;
      label = 18; break;
    case 10: 
      var $29=$2;
      var $30=$v;
      var $31=$30;
      var $32=(($31+12)|0);
      var $33=(($32)|0);
      HEAP32[(($33)>>2)]=$29;
      var $34=$3;
      var $35=_PyInt_FromSsize_t($34);
      $w=$35;
      var $36=$w;
      var $37=(($36)|(0))==0;
      if ($37) { label = 11; break; } else { label = 17; break; }
    case 11: 
      label = 12; break;
    case 12: 
      var $40=$v;
      var $41=(($40)|0);
      var $42=HEAP32[(($41)>>2)];
      var $43=((($42)-(1))|0);
      HEAP32[(($41)>>2)]=$43;
      var $44=(($43)|(0))!=0;
      if ($44) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 15; break;
    case 14: 
      var $47=$v;
      var $48=(($47+4)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=(($49+24)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=$v;
      FUNCTION_TABLE[$51]($52);
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      $1=0;
      label = 18; break;
    case 17: 
      var $56=$w;
      var $57=$v;
      var $58=$57;
      var $59=(($58+12)|0);
      var $60=(($59+4)|0);
      HEAP32[(($60)>>2)]=$56;
      var $61=$v;
      $1=$61;
      label = 18; break;
    case 18: 
      var $63=$1;
      return $63;
    default: assert(0, "bad label: " + label);
  }
}
function _multibytecodec_decerror($codec, $state, $buf, $errors, $e) {
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
      var $retobj;
      var $retuni;
      var $retunisize;
      var $newpos;
      var $reason;
      var $esize;
      var $start;
      var $end;
      $2=$codec;
      $3=$state;
      $4=$buf;
      $5=$errors;
      $6=$e;
      $retobj=0;
      $retuni=0;
      var $7=$6;
      var $8=(($7)|(0)) > 0;
      if ($8) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $reason=((__str9)|0);
      var $10=$6;
      $esize=$10;
      label = 11; break;
    case 3: 
      var $12=$6;
      if ((($12)|(0))==-1) {
        label = 4; break;
      }
      else if ((($12)|(0))==-2) {
        label = 7; break;
      }
      else if ((($12)|(0))==-3) {
        label = 8; break;
      }
      else {
      label = 9; break;
      }
    case 4: 
      var $14=$4;
      var $15=_expand_decodebuffer($14, -1);
      var $16=(($15)|(0))==-1;
      if ($16) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 58; break;
    case 6: 
      $1=0;
      label = 69; break;
    case 7: 
      $reason=((__str10)|0);
      var $20=$4;
      var $21=(($20+8)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=$4;
      var $24=(($23)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=$22;
      var $27=$25;
      var $28=((($26)-($27))|0);
      $esize=$28;
      label = 10; break;
    case 8: 
      var $30=HEAP32[((_PyExc_RuntimeError)>>2)];
      _PyErr_SetString($30, ((__str11)|0));
      $1=-1;
      label = 69; break;
    case 9: 
      var $32=HEAP32[((_PyExc_RuntimeError)>>2)];
      _PyErr_SetString($32, ((__str12)|0));
      $1=-1;
      label = 69; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $35=$5;
      var $36=(($35)|(0))==3;
      if ($36) { label = 12; break; } else { label = 17; break; }
    case 12: 
      var $38=$4;
      var $39=(($38+12)|0);
      var $40=HEAP32[(($39)>>2)];
      var $41=(($40+2)|0);
      var $42=$4;
      var $43=(($42+16)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=(($41)>>>(0)) > (($44)>>>(0));
      if ($45) { label = 13; break; } else { label = 16; break; }
    case 13: 
      var $47=$4;
      var $48=_expand_decodebuffer($47, 1);
      var $49=(($48)|(0))==-1;
      if ($49) { label = 14; break; } else { label = 15; break; }
    case 14: 
      label = 58; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $53=$4;
      var $54=(($53+12)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=(($55+2)|0);
      HEAP32[(($54)>>2)]=$56;
      HEAP16[(($55)>>1)]=-3;
      label = 17; break;
    case 17: 
      var $58=$5;
      var $59=(($58)|(0))==2;
      if ($59) { label = 19; break; } else { label = 18; break; }
    case 18: 
      var $61=$5;
      var $62=(($61)|(0))==3;
      if ($62) { label = 19; break; } else { label = 20; break; }
    case 19: 
      var $64=$esize;
      var $65=$4;
      var $66=(($65)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=(($67+$64)|0);
      HEAP32[(($66)>>2)]=$68;
      $1=0;
      label = 69; break;
    case 20: 
      var $70=$4;
      var $71=(($70)|0);
      var $72=HEAP32[(($71)>>2)];
      var $73=$4;
      var $74=(($73+4)|0);
      var $75=HEAP32[(($74)>>2)];
      var $76=$72;
      var $77=$75;
      var $78=((($76)-($77))|0);
      $start=$78;
      var $79=$start;
      var $80=$esize;
      var $81=((($79)+($80))|0);
      $end=$81;
      var $82=$4;
      var $83=(($82+20)|0);
      var $84=HEAP32[(($83)>>2)];
      var $85=(($84)|(0))==0;
      if ($85) { label = 21; break; } else { label = 24; break; }
    case 21: 
      var $87=$2;
      var $88=(($87)|0);
      var $89=HEAP32[(($88)>>2)];
      var $90=$4;
      var $91=(($90+4)|0);
      var $92=HEAP32[(($91)>>2)];
      var $93=$4;
      var $94=(($93+8)|0);
      var $95=HEAP32[(($94)>>2)];
      var $96=$4;
      var $97=(($96+4)|0);
      var $98=HEAP32[(($97)>>2)];
      var $99=$95;
      var $100=$98;
      var $101=((($99)-($100))|0);
      var $102=$start;
      var $103=$end;
      var $104=$reason;
      var $105=_PyUnicodeDecodeError_Create($89, $92, $101, $102, $103, $104);
      var $106=$4;
      var $107=(($106+20)|0);
      HEAP32[(($107)>>2)]=$105;
      var $108=$4;
      var $109=(($108+20)|0);
      var $110=HEAP32[(($109)>>2)];
      var $111=(($110)|(0))==0;
      if ($111) { label = 22; break; } else { label = 23; break; }
    case 22: 
      label = 58; break;
    case 23: 
      label = 29; break;
    case 24: 
      var $115=$4;
      var $116=(($115+20)|0);
      var $117=HEAP32[(($116)>>2)];
      var $118=$start;
      var $119=_PyUnicodeDecodeError_SetStart($117, $118);
      var $120=(($119)|(0))!=0;
      if ($120) { label = 27; break; } else { label = 25; break; }
    case 25: 
      var $122=$4;
      var $123=(($122+20)|0);
      var $124=HEAP32[(($123)>>2)];
      var $125=$end;
      var $126=_PyUnicodeDecodeError_SetEnd($124, $125);
      var $127=(($126)|(0))!=0;
      if ($127) { label = 27; break; } else { label = 26; break; }
    case 26: 
      var $129=$4;
      var $130=(($129+20)|0);
      var $131=HEAP32[(($130)>>2)];
      var $132=$reason;
      var $133=_PyUnicodeDecodeError_SetReason($131, $132);
      var $134=(($133)|(0))!=0;
      if ($134) { label = 27; break; } else { label = 28; break; }
    case 27: 
      label = 58; break;
    case 28: 
      label = 29; break;
    case 29: 
      var $138=$5;
      var $139=(($138)|(0))==1;
      if ($139) { label = 30; break; } else { label = 31; break; }
    case 30: 
      var $141=$4;
      var $142=(($141+20)|0);
      var $143=HEAP32[(($142)>>2)];
      var $144=_PyCodec_StrictErrors($143);
      label = 58; break;
    case 31: 
      var $146=$5;
      var $147=$4;
      var $148=(($147+20)|0);
      var $149=HEAP32[(($148)>>2)];
      var $150=_call_error_callback($146, $149);
      $retobj=$150;
      var $151=$retobj;
      var $152=(($151)|(0))==0;
      if ($152) { label = 32; break; } else { label = 33; break; }
    case 32: 
      label = 58; break;
    case 33: 
      var $155=$retobj;
      var $156=(($155+4)|0);
      var $157=HEAP32[(($156)>>2)];
      var $158=(($157+84)|0);
      var $159=HEAP32[(($158)>>2)];
      var $160=$159 & 67108864;
      var $161=(($160)|(0))!=0;
      if ($161) { label = 34; break; } else { label = 38; break; }
    case 34: 
      var $163=$retobj;
      var $164=$163;
      var $165=(($164+8)|0);
      var $166=HEAP32[(($165)>>2)];
      var $167=(($166)|(0))!=2;
      if ($167) { label = 38; break; } else { label = 35; break; }
    case 35: 
      var $169=$retobj;
      var $170=$169;
      var $171=(($170+12)|0);
      var $172=(($171)|0);
      var $173=HEAP32[(($172)>>2)];
      $retuni=$173;
      var $174=(($173+4)|0);
      var $175=HEAP32[(($174)>>2)];
      var $176=(($175+84)|0);
      var $177=HEAP32[(($176)>>2)];
      var $178=$177 & 268435456;
      var $179=(($178)|(0))!=0;
      if ($179) { label = 36; break; } else { label = 38; break; }
    case 36: 
      var $181=$retobj;
      var $182=$181;
      var $183=(($182+12)|0);
      var $184=(($183+4)|0);
      var $185=HEAP32[(($184)>>2)];
      var $186=(($185+4)|0);
      var $187=HEAP32[(($186)>>2)];
      var $188=(($187+84)|0);
      var $189=HEAP32[(($188)>>2)];
      var $190=$189 & 8388608;
      var $191=(($190)|(0))!=0;
      if ($191) { label = 39; break; } else { label = 37; break; }
    case 37: 
      var $193=$retobj;
      var $194=$193;
      var $195=(($194+12)|0);
      var $196=(($195+4)|0);
      var $197=HEAP32[(($196)>>2)];
      var $198=(($197+4)|0);
      var $199=HEAP32[(($198)>>2)];
      var $200=(($199+84)|0);
      var $201=HEAP32[(($200)>>2)];
      var $202=$201 & 16777216;
      var $203=(($202)|(0))!=0;
      if ($203) { label = 39; break; } else { label = 38; break; }
    case 38: 
      var $205=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($205, ((__str13)|0));
      label = 58; break;
    case 39: 
      var $207=$retuni;
      var $208=$207;
      var $209=(($208+8)|0);
      var $210=HEAP32[(($209)>>2)];
      $retunisize=$210;
      var $211=$retunisize;
      var $212=(($211)|(0)) > 0;
      if ($212) { label = 40; break; } else { label = 46; break; }
    case 40: 
      var $214=$retunisize;
      var $215=(($214)|(0)) < 1;
      if ($215) { label = 42; break; } else { label = 41; break; }
    case 41: 
      var $217=$4;
      var $218=(($217+12)|0);
      var $219=HEAP32[(($218)>>2)];
      var $220=$retunisize;
      var $221=(($219+($220<<1))|0);
      var $222=$4;
      var $223=(($222+16)|0);
      var $224=HEAP32[(($223)>>2)];
      var $225=(($221)>>>(0)) > (($224)>>>(0));
      if ($225) { label = 42; break; } else { label = 45; break; }
    case 42: 
      var $227=$4;
      var $228=$retunisize;
      var $229=_expand_decodebuffer($227, $228);
      var $230=(($229)|(0))==-1;
      if ($230) { label = 43; break; } else { label = 44; break; }
    case 43: 
      label = 58; break;
    case 44: 
      label = 45; break;
    case 45: 
      var $234=$4;
      var $235=(($234+12)|0);
      var $236=HEAP32[(($235)>>2)];
      var $237=$236;
      var $238=$retuni;
      var $239=$238;
      var $240=(($239+12)|0);
      var $241=HEAP32[(($240)>>2)];
      var $242=$241;
      var $243=$retunisize;
      var $244=($243<<1);
      assert($244 % 1 === 0);_memcpy($237, $242, $244);
      var $245=$retunisize;
      var $246=$4;
      var $247=(($246+12)|0);
      var $248=HEAP32[(($247)>>2)];
      var $249=(($248+($245<<1))|0);
      HEAP32[(($247)>>2)]=$249;
      label = 46; break;
    case 46: 
      var $251=$retobj;
      var $252=$251;
      var $253=(($252+12)|0);
      var $254=(($253+4)|0);
      var $255=HEAP32[(($254)>>2)];
      var $256=_PyInt_AsSsize_t($255);
      $newpos=$256;
      var $257=$newpos;
      var $258=(($257)|(0)) < 0;
      if ($258) { label = 47; break; } else { label = 49; break; }
    case 47: 
      var $260=_PyErr_Occurred();
      var $261=(($260)|(0))!=0;
      if ($261) { label = 49; break; } else { label = 48; break; }
    case 48: 
      var $263=$4;
      var $264=(($263+8)|0);
      var $265=HEAP32[(($264)>>2)];
      var $266=$4;
      var $267=(($266+4)|0);
      var $268=HEAP32[(($267)>>2)];
      var $269=$265;
      var $270=$268;
      var $271=((($269)-($270))|0);
      var $272=$newpos;
      var $273=((($272)+($271))|0);
      $newpos=$273;
      label = 49; break;
    case 49: 
      var $275=$newpos;
      var $276=(($275)|(0)) < 0;
      if ($276) { label = 51; break; } else { label = 50; break; }
    case 50: 
      var $278=$4;
      var $279=(($278+4)|0);
      var $280=HEAP32[(($279)>>2)];
      var $281=$newpos;
      var $282=(($280+$281)|0);
      var $283=$4;
      var $284=(($283+8)|0);
      var $285=HEAP32[(($284)>>2)];
      var $286=(($282)>>>(0)) > (($285)>>>(0));
      if ($286) { label = 51; break; } else { label = 52; break; }
    case 51: 
      _PyErr_Clear();
      var $288=HEAP32[((_PyExc_IndexError)>>2)];
      var $289=$newpos;
      var $290=_PyErr_Format($288, ((__str14)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$289,tempInt));
      label = 58; break;
    case 52: 
      var $292=$4;
      var $293=(($292+4)|0);
      var $294=HEAP32[(($293)>>2)];
      var $295=$newpos;
      var $296=(($294+$295)|0);
      var $297=$4;
      var $298=(($297)|0);
      HEAP32[(($298)>>2)]=$296;
      label = 53; break;
    case 53: 
      var $300=$retobj;
      var $301=(($300)|0);
      var $302=HEAP32[(($301)>>2)];
      var $303=((($302)-(1))|0);
      HEAP32[(($301)>>2)]=$303;
      var $304=(($303)|(0))!=0;
      if ($304) { label = 54; break; } else { label = 55; break; }
    case 54: 
      label = 56; break;
    case 55: 
      var $307=$retobj;
      var $308=(($307+4)|0);
      var $309=HEAP32[(($308)>>2)];
      var $310=(($309+24)|0);
      var $311=HEAP32[(($310)>>2)];
      var $312=$retobj;
      FUNCTION_TABLE[$311]($312);
      label = 56; break;
    case 56: 
      label = 57; break;
    case 57: 
      $1=0;
      label = 69; break;
    case 58: 
      label = 59; break;
    case 59: 
      var $317=$retobj;
      var $318=(($317)|(0))==0;
      if ($318) { label = 60; break; } else { label = 61; break; }
    case 60: 
      label = 67; break;
    case 61: 
      label = 62; break;
    case 62: 
      var $322=$retobj;
      var $323=(($322)|0);
      var $324=HEAP32[(($323)>>2)];
      var $325=((($324)-(1))|0);
      HEAP32[(($323)>>2)]=$325;
      var $326=(($325)|(0))!=0;
      if ($326) { label = 63; break; } else { label = 64; break; }
    case 63: 
      label = 65; break;
    case 64: 
      var $329=$retobj;
      var $330=(($329+4)|0);
      var $331=HEAP32[(($330)>>2)];
      var $332=(($331+24)|0);
      var $333=HEAP32[(($332)>>2)];
      var $334=$retobj;
      FUNCTION_TABLE[$333]($334);
      label = 65; break;
    case 65: 
      label = 66; break;
    case 66: 
      label = 67; break;
    case 67: 
      label = 68; break;
    case 68: 
      $1=-1;
      label = 69; break;
    case 69: 
      var $340=$1;
      STACKTOP = __stackBase__;
      return $340;
    default: assert(0, "bad label: " + label);
  }
}
function _expand_decodebuffer($buf, $esize) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $orgpos;
      var $orgsize;
      $2=$buf;
      $3=$esize;
      var $4=$2;
      var $5=(($4+12)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=$2;
      var $8=(($7+24)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=$9;
      var $11=(($10+12)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=$6;
      var $14=$12;
      var $15=((($13)-($14))|0);
      var $16=((((($15)|(0)))/(2))&-1);
      $orgpos=$16;
      var $17=$2;
      var $18=(($17+24)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=$19;
      var $21=(($20+8)|0);
      var $22=HEAP32[(($21)>>2)];
      $orgsize=$22;
      var $23=$2;
      var $24=(($23+24)|0);
      var $25=$orgsize;
      var $26=$3;
      var $27=$orgsize;
      var $28=$27 >> 1;
      var $29=(($26)|(0)) < (($28)|(0));
      if ($29) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $31=$orgsize;
      var $32=$31 >> 1;
      var $33=$32 | 1;
      var $37 = $33;label = 4; break;
    case 3: 
      var $35=$3;
      var $37 = $35;label = 4; break;
    case 4: 
      var $37;
      var $38=((($25)+($37))|0);
      var $39=_PyUnicodeUCS2_Resize($24, $38);
      var $40=(($39)|(0))==-1;
      if ($40) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=-1;
      label = 7; break;
    case 6: 
      var $43=$2;
      var $44=(($43+24)|0);
      var $45=HEAP32[(($44)>>2)];
      var $46=$45;
      var $47=(($46+12)|0);
      var $48=HEAP32[(($47)>>2)];
      var $49=$orgpos;
      var $50=(($48+($49<<1))|0);
      var $51=$2;
      var $52=(($51+12)|0);
      HEAP32[(($52)>>2)]=$50;
      var $53=$2;
      var $54=(($53+24)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=$55;
      var $57=(($56+12)|0);
      var $58=HEAP32[(($57)>>2)];
      var $59=$2;
      var $60=(($59+24)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=$61;
      var $63=(($62+8)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=(($58+($64<<1))|0);
      var $66=$2;
      var $67=(($66+16)|0);
      HEAP32[(($67)>>2)]=$65;
      $1=0;
      label = 7; break;
    case 7: 
      var $69=$1;
      return $69;
    default: assert(0, "bad label: " + label);
  }
}
function _call_error_callback($errors, $exc) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $args;
      var $cb;
      var $r;
      $2=$errors;
      $3=$exc;
      var $4=$2;
      var $5=(($4+4)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6+84)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=$8 & 134217728;
      var $10=(($9)|(0))!=0;
      if ($10) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 4; break;
    case 3: 
      ___assert_func(((__str15)|0), 96, ((___func___call_error_callback)|0), ((__str16)|0));
      throw "Reached an unreachable!";
      label = 4; break;
    case 4: 
      var $15=$2;
      var $16=$15;
      var $17=(($16+20)|0);
      var $18=(($17)|0);
      var $19=_PyCodec_LookupError($18);
      $cb=$19;
      var $20=$cb;
      var $21=(($20)|(0))==0;
      if ($21) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=0;
      label = 24; break;
    case 6: 
      var $24=_PyTuple_New(1);
      $args=$24;
      var $25=$args;
      var $26=(($25)|(0))==0;
      if ($26) { label = 7; break; } else { label = 13; break; }
    case 7: 
      label = 8; break;
    case 8: 
      var $29=$cb;
      var $30=(($29)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=((($31)-(1))|0);
      HEAP32[(($30)>>2)]=$32;
      var $33=(($32)|(0))!=0;
      if ($33) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 11; break;
    case 10: 
      var $36=$cb;
      var $37=(($36+4)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=(($38+24)|0);
      var $40=HEAP32[(($39)>>2)];
      var $41=$cb;
      FUNCTION_TABLE[$40]($41);
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      $1=0;
      label = 24; break;
    case 13: 
      var $45=$3;
      var $46=$args;
      var $47=$46;
      var $48=(($47+12)|0);
      var $49=(($48)|0);
      HEAP32[(($49)>>2)]=$45;
      var $50=$3;
      var $51=(($50)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=((($52)+(1))|0);
      HEAP32[(($51)>>2)]=$53;
      var $54=$cb;
      var $55=$args;
      var $56=_PyObject_CallObject($54, $55);
      $r=$56;
      label = 14; break;
    case 14: 
      var $58=$args;
      var $59=(($58)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=((($60)-(1))|0);
      HEAP32[(($59)>>2)]=$61;
      var $62=(($61)|(0))!=0;
      if ($62) { label = 15; break; } else { label = 16; break; }
    case 15: 
      label = 17; break;
    case 16: 
      var $65=$args;
      var $66=(($65+4)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=(($67+24)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=$args;
      FUNCTION_TABLE[$69]($70);
      label = 17; break;
    case 17: 
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      var $74=$cb;
      var $75=(($74)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=((($76)-(1))|0);
      HEAP32[(($75)>>2)]=$77;
      var $78=(($77)|(0))!=0;
      if ($78) { label = 20; break; } else { label = 21; break; }
    case 20: 
      label = 22; break;
    case 21: 
      var $81=$cb;
      var $82=(($81+4)|0);
      var $83=HEAP32[(($82)>>2)];
      var $84=(($83+24)|0);
      var $85=HEAP32[(($84)>>2)];
      var $86=$cb;
      FUNCTION_TABLE[$85]($86);
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      var $89=$r;
      $1=$89;
      label = 24; break;
    case 24: 
      var $91=$1;
      return $91;
    default: assert(0, "bad label: " + label);
  }
}
function _multibytecodec_encode($codec, $state, $data, $datalen, $errors, $flags) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 28)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
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
      var $buf=__stackBase__;
      var $finalsize;
      var $r;
      var $inleft;
      var $outleft;
      var $outleft1;
      $2=$codec;
      $3=$state;
      $4=$data;
      $5=$datalen;
      $6=$errors;
      $7=$flags;
      $r=0;
      var $8=$5;
      var $9=(($8)|(0))==0;
      if ($9) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $11=$7;
      var $12=$11 & 2;
      var $13=(($12)|(0))!=0;
      if ($13) { label = 4; break; } else { label = 3; break; }
    case 3: 
      var $15=_PyString_FromString(((__str24)|0));
      $1=$15;
      label = 67; break;
    case 4: 
      var $17=(($buf+20)|0);
      HEAP32[(($17)>>2)]=0;
      var $18=$4;
      var $19=HEAP32[(($18)>>2)];
      var $20=(($buf+4)|0);
      HEAP32[(($20)>>2)]=$19;
      var $21=(($buf)|0);
      HEAP32[(($21)>>2)]=$19;
      var $22=(($buf+4)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=$5;
      var $25=(($23+($24<<1))|0);
      var $26=(($buf+8)|0);
      HEAP32[(($26)>>2)]=$25;
      var $27=$5;
      var $28=(($27)|(0)) > 1073741815;
      if ($28) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $30=_PyErr_NoMemory();
      label = 46; break;
    case 6: 
      var $32=$5;
      var $33=($32<<1);
      var $34=((($33)+(16))|0);
      var $35=_PyString_FromStringAndSize(0, $34);
      var $36=(($buf+24)|0);
      HEAP32[(($36)>>2)]=$35;
      var $37=(($buf+24)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=(($38)|(0))==0;
      if ($39) { label = 7; break; } else { label = 8; break; }
    case 7: 
      label = 46; break;
    case 8: 
      var $42=(($buf+24)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=$43;
      var $45=(($44+20)|0);
      var $46=(($45)|0);
      var $47=(($buf+12)|0);
      HEAP32[(($47)>>2)]=$46;
      var $48=(($buf+12)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=(($buf+24)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=$51;
      var $53=(($52+8)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=(($49+$54)|0);
      var $56=(($buf+16)|0);
      HEAP32[(($56)>>2)]=$55;
      label = 9; break;
    case 9: 
      var $58=(($buf)|0);
      var $59=HEAP32[(($58)>>2)];
      var $60=(($buf+8)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=(($59)>>>(0)) < (($61)>>>(0));
      if ($62) { label = 10; break; } else { label = 21; break; }
    case 10: 
      var $64=(($buf+8)|0);
      var $65=HEAP32[(($64)>>2)];
      var $66=(($buf)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=$65;
      var $69=$67;
      var $70=((($68)-($69))|0);
      var $71=((((($70)|(0)))/(2))&-1);
      $inleft=$71;
      var $72=(($buf+16)|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=(($buf+12)|0);
      var $75=HEAP32[(($74)>>2)];
      var $76=$73;
      var $77=$75;
      var $78=((($76)-($77))|0);
      $outleft=$78;
      var $79=$2;
      var $80=(($79+12)|0);
      var $81=HEAP32[(($80)>>2)];
      var $82=$3;
      var $83=$2;
      var $84=(($83+4)|0);
      var $85=HEAP32[(($84)>>2)];
      var $86=(($buf)|0);
      var $87=$inleft;
      var $88=(($buf+12)|0);
      var $89=$outleft;
      var $90=$7;
      var $91=FUNCTION_TABLE[$81]($82, $85, $86, $87, $88, $89, $90);
      $r=$91;
      var $92=$r;
      var $93=(($92)|(0))==0;
      if ($93) { label = 13; break; } else { label = 11; break; }
    case 11: 
      var $95=$r;
      var $96=(($95)|(0))==-2;
      if ($96) { label = 12; break; } else { label = 14; break; }
    case 12: 
      var $98=$7;
      var $99=$98 & 1;
      var $100=(($99)|(0))!=0;
      if ($100) { label = 14; break; } else { label = 13; break; }
    case 13: 
      label = 21; break;
    case 14: 
      var $103=$2;
      var $104=$3;
      var $105=$6;
      var $106=$r;
      var $107=_multibytecodec_encerror($103, $104, $buf, $105, $106);
      var $108=(($107)|(0))!=0;
      if ($108) { label = 15; break; } else { label = 16; break; }
    case 15: 
      label = 46; break;
    case 16: 
      var $111=$r;
      var $112=(($111)|(0))==-2;
      if ($112) { label = 17; break; } else { label = 18; break; }
    case 17: 
      label = 21; break;
    case 18: 
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      label = 9; break;
    case 21: 
      var $118=$2;
      var $119=(($118+20)|0);
      var $120=HEAP32[(($119)>>2)];
      var $121=(($120)|(0))!=0;
      if ($121) { label = 22; break; } else { label = 31; break; }
    case 22: 
      var $123=$7;
      var $124=$123 & 2;
      var $125=(($124)|(0))!=0;
      if ($125) { label = 23; break; } else { label = 31; break; }
    case 23: 
      label = 24; break;
    case 24: 
      var $128=(($buf+16)|0);
      var $129=HEAP32[(($128)>>2)];
      var $130=(($buf+12)|0);
      var $131=HEAP32[(($130)>>2)];
      var $132=$129;
      var $133=$131;
      var $134=((($132)-($133))|0);
      $outleft1=$134;
      var $135=$2;
      var $136=(($135+20)|0);
      var $137=HEAP32[(($136)>>2)];
      var $138=$3;
      var $139=$2;
      var $140=(($139+4)|0);
      var $141=HEAP32[(($140)>>2)];
      var $142=(($buf+12)|0);
      var $143=$outleft1;
      var $144=FUNCTION_TABLE[$137]($138, $141, $142, $143);
      $r=$144;
      var $145=$r;
      var $146=(($145)|(0))==0;
      if ($146) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 30; break;
    case 26: 
      var $149=$2;
      var $150=$3;
      var $151=$6;
      var $152=$r;
      var $153=_multibytecodec_encerror($149, $150, $buf, $151, $152);
      var $154=(($153)|(0))!=0;
      if ($154) { label = 27; break; } else { label = 28; break; }
    case 27: 
      label = 46; break;
    case 28: 
      label = 29; break;
    case 29: 
      label = 24; break;
    case 30: 
      label = 31; break;
    case 31: 
      var $160=(($buf+12)|0);
      var $161=HEAP32[(($160)>>2)];
      var $162=(($buf+24)|0);
      var $163=HEAP32[(($162)>>2)];
      var $164=$163;
      var $165=(($164+20)|0);
      var $166=(($165)|0);
      var $167=$161;
      var $168=$166;
      var $169=((($167)-($168))|0);
      $finalsize=$169;
      var $170=$finalsize;
      var $171=(($buf+24)|0);
      var $172=HEAP32[(($171)>>2)];
      var $173=$172;
      var $174=(($173+8)|0);
      var $175=HEAP32[(($174)>>2)];
      var $176=(($170)|(0))!=(($175)|(0));
      if ($176) { label = 32; break; } else { label = 35; break; }
    case 32: 
      var $178=(($buf+24)|0);
      var $179=$finalsize;
      var $180=__PyString_Resize($178, $179);
      var $181=(($180)|(0))==-1;
      if ($181) { label = 33; break; } else { label = 34; break; }
    case 33: 
      label = 46; break;
    case 34: 
      label = 35; break;
    case 35: 
      var $185=(($buf)|0);
      var $186=HEAP32[(($185)>>2)];
      var $187=$4;
      HEAP32[(($187)>>2)]=$186;
      label = 36; break;
    case 36: 
      var $189=(($buf+20)|0);
      var $190=HEAP32[(($189)>>2)];
      var $191=(($190)|(0))==0;
      if ($191) { label = 37; break; } else { label = 38; break; }
    case 37: 
      label = 44; break;
    case 38: 
      label = 39; break;
    case 39: 
      var $195=(($buf+20)|0);
      var $196=HEAP32[(($195)>>2)];
      var $197=(($196)|0);
      var $198=HEAP32[(($197)>>2)];
      var $199=((($198)-(1))|0);
      HEAP32[(($197)>>2)]=$199;
      var $200=(($199)|(0))!=0;
      if ($200) { label = 40; break; } else { label = 41; break; }
    case 40: 
      label = 42; break;
    case 41: 
      var $203=(($buf+20)|0);
      var $204=HEAP32[(($203)>>2)];
      var $205=(($204+4)|0);
      var $206=HEAP32[(($205)>>2)];
      var $207=(($206+24)|0);
      var $208=HEAP32[(($207)>>2)];
      var $209=(($buf+20)|0);
      var $210=HEAP32[(($209)>>2)];
      FUNCTION_TABLE[$208]($210);
      label = 42; break;
    case 42: 
      label = 43; break;
    case 43: 
      label = 44; break;
    case 44: 
      label = 45; break;
    case 45: 
      var $215=(($buf+24)|0);
      var $216=HEAP32[(($215)>>2)];
      $1=$216;
      label = 67; break;
    case 46: 
      label = 47; break;
    case 47: 
      var $219=(($buf+20)|0);
      var $220=HEAP32[(($219)>>2)];
      var $221=(($220)|(0))==0;
      if ($221) { label = 48; break; } else { label = 49; break; }
    case 48: 
      label = 55; break;
    case 49: 
      label = 50; break;
    case 50: 
      var $225=(($buf+20)|0);
      var $226=HEAP32[(($225)>>2)];
      var $227=(($226)|0);
      var $228=HEAP32[(($227)>>2)];
      var $229=((($228)-(1))|0);
      HEAP32[(($227)>>2)]=$229;
      var $230=(($229)|(0))!=0;
      if ($230) { label = 51; break; } else { label = 52; break; }
    case 51: 
      label = 53; break;
    case 52: 
      var $233=(($buf+20)|0);
      var $234=HEAP32[(($233)>>2)];
      var $235=(($234+4)|0);
      var $236=HEAP32[(($235)>>2)];
      var $237=(($236+24)|0);
      var $238=HEAP32[(($237)>>2)];
      var $239=(($buf+20)|0);
      var $240=HEAP32[(($239)>>2)];
      FUNCTION_TABLE[$238]($240);
      label = 53; break;
    case 53: 
      label = 54; break;
    case 54: 
      label = 55; break;
    case 55: 
      label = 56; break;
    case 56: 
      label = 57; break;
    case 57: 
      var $246=(($buf+24)|0);
      var $247=HEAP32[(($246)>>2)];
      var $248=(($247)|(0))==0;
      if ($248) { label = 58; break; } else { label = 59; break; }
    case 58: 
      label = 65; break;
    case 59: 
      label = 60; break;
    case 60: 
      var $252=(($buf+24)|0);
      var $253=HEAP32[(($252)>>2)];
      var $254=(($253)|0);
      var $255=HEAP32[(($254)>>2)];
      var $256=((($255)-(1))|0);
      HEAP32[(($254)>>2)]=$256;
      var $257=(($256)|(0))!=0;
      if ($257) { label = 61; break; } else { label = 62; break; }
    case 61: 
      label = 63; break;
    case 62: 
      var $260=(($buf+24)|0);
      var $261=HEAP32[(($260)>>2)];
      var $262=(($261+4)|0);
      var $263=HEAP32[(($262)>>2)];
      var $264=(($263+24)|0);
      var $265=HEAP32[(($264)>>2)];
      var $266=(($buf+24)|0);
      var $267=HEAP32[(($266)>>2)];
      FUNCTION_TABLE[$265]($267);
      label = 63; break;
    case 63: 
      label = 64; break;
    case 64: 
      label = 65; break;
    case 65: 
      label = 66; break;
    case 66: 
      $1=0;
      label = 67; break;
    case 67: 
      var $273=$1;
      STACKTOP = __stackBase__;
      return $273;
    default: assert(0, "bad label: " + label);
  }
}
function _multibytecodec_encerror($codec, $state, $buf, $errors, $e) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 12)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $6;
      var $retobj;
      var $retstr;
      var $tobj;
      var $retstrsize;
      var $newpos;
      var $esize;
      var $start;
      var $end;
      var $reason;
      var $replchar=__stackBase__;
      var $inbuf=(__stackBase__)+(4);
      var $r;
      var $outleft;
      var $uraw=(__stackBase__)+(8);
      $2=$codec;
      $3=$state;
      $4=$buf;
      $5=$errors;
      $6=$e;
      $retobj=0;
      $retstr=0;
      var $7=$6;
      var $8=(($7)|(0)) > 0;
      if ($8) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $reason=((__str9)|0);
      var $10=$6;
      $esize=$10;
      label = 11; break;
    case 3: 
      var $12=$6;
      if ((($12)|(0))==-1) {
        label = 4; break;
      }
      else if ((($12)|(0))==-2) {
        label = 7; break;
      }
      else if ((($12)|(0))==-3) {
        label = 8; break;
      }
      else {
      label = 9; break;
      }
    case 4: 
      var $14=$4;
      var $15=_expand_encodebuffer($14, -1);
      var $16=(($15)|(0))==-1;
      if ($16) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 71; break;
    case 6: 
      $1=0;
      label = 92; break;
    case 7: 
      $reason=((__str10)|0);
      var $20=$4;
      var $21=(($20+8)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=$4;
      var $24=(($23)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=$22;
      var $27=$25;
      var $28=((($26)-($27))|0);
      var $29=((((($28)|(0)))/(2))&-1);
      $esize=$29;
      label = 10; break;
    case 8: 
      var $31=HEAP32[((_PyExc_RuntimeError)>>2)];
      _PyErr_SetString($31, ((__str11)|0));
      $1=-1;
      label = 92; break;
    case 9: 
      var $33=HEAP32[((_PyExc_RuntimeError)>>2)];
      _PyErr_SetString($33, ((__str12)|0));
      $1=-1;
      label = 92; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $36=$5;
      var $37=(($36)|(0))==3;
      if ($37) { label = 12; break; } else { label = 25; break; }
    case 12: 
      HEAP16[(($replchar)>>1)]=63;
      HEAP32[(($inbuf)>>2)]=$replchar;
      label = 13; break;
    case 13: 
      var $40=$4;
      var $41=(($40+16)|0);
      var $42=HEAP32[(($41)>>2)];
      var $43=$4;
      var $44=(($43+12)|0);
      var $45=HEAP32[(($44)>>2)];
      var $46=$42;
      var $47=$45;
      var $48=((($46)-($47))|0);
      $outleft=$48;
      var $49=$2;
      var $50=(($49+12)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=$3;
      var $53=$2;
      var $54=(($53+4)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=$4;
      var $57=(($56+12)|0);
      var $58=$outleft;
      var $59=FUNCTION_TABLE[$51]($52, $55, $inbuf, 1, $57, $58, 0);
      $r=$59;
      var $60=$r;
      var $61=(($60)|(0))==-1;
      if ($61) { label = 14; break; } else { label = 17; break; }
    case 14: 
      var $63=$4;
      var $64=_expand_encodebuffer($63, -1);
      var $65=(($64)|(0))==-1;
      if ($65) { label = 15; break; } else { label = 16; break; }
    case 15: 
      label = 71; break;
    case 16: 
      label = 13; break;
    case 17: 
      label = 18; break;
    case 18: 
      var $70=$r;
      var $71=(($70)|(0))!=0;
      if ($71) { label = 19; break; } else { label = 24; break; }
    case 19: 
      var $73=$4;
      var $74=(($73+12)|0);
      var $75=HEAP32[(($74)>>2)];
      var $76=(($75+1)|0);
      var $77=$4;
      var $78=(($77+16)|0);
      var $79=HEAP32[(($78)>>2)];
      var $80=(($76)>>>(0)) > (($79)>>>(0));
      if ($80) { label = 20; break; } else { label = 23; break; }
    case 20: 
      var $82=$4;
      var $83=_expand_encodebuffer($82, 1);
      var $84=(($83)|(0))==-1;
      if ($84) { label = 21; break; } else { label = 22; break; }
    case 21: 
      label = 71; break;
    case 22: 
      label = 23; break;
    case 23: 
      var $88=$4;
      var $89=(($88+12)|0);
      var $90=HEAP32[(($89)>>2)];
      var $91=(($90+1)|0);
      HEAP32[(($89)>>2)]=$91;
      HEAP8[($90)]=63;
      label = 24; break;
    case 24: 
      label = 25; break;
    case 25: 
      var $94=$5;
      var $95=(($94)|(0))==2;
      if ($95) { label = 27; break; } else { label = 26; break; }
    case 26: 
      var $97=$5;
      var $98=(($97)|(0))==3;
      if ($98) { label = 27; break; } else { label = 28; break; }
    case 27: 
      var $100=$esize;
      var $101=$4;
      var $102=(($101)|0);
      var $103=HEAP32[(($102)>>2)];
      var $104=(($103+($100<<1))|0);
      HEAP32[(($102)>>2)]=$104;
      $1=0;
      label = 92; break;
    case 28: 
      var $106=$4;
      var $107=(($106)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=$4;
      var $110=(($109+4)|0);
      var $111=HEAP32[(($110)>>2)];
      var $112=$108;
      var $113=$111;
      var $114=((($112)-($113))|0);
      var $115=((((($114)|(0)))/(2))&-1);
      $start=$115;
      var $116=$start;
      var $117=$esize;
      var $118=((($116)+($117))|0);
      $end=$118;
      var $119=$4;
      var $120=(($119+20)|0);
      var $121=HEAP32[(($120)>>2)];
      var $122=(($121)|(0))==0;
      if ($122) { label = 29; break; } else { label = 32; break; }
    case 29: 
      var $124=$2;
      var $125=(($124)|0);
      var $126=HEAP32[(($125)>>2)];
      var $127=$4;
      var $128=(($127+4)|0);
      var $129=HEAP32[(($128)>>2)];
      var $130=$4;
      var $131=(($130+8)|0);
      var $132=HEAP32[(($131)>>2)];
      var $133=$4;
      var $134=(($133+4)|0);
      var $135=HEAP32[(($134)>>2)];
      var $136=$132;
      var $137=$135;
      var $138=((($136)-($137))|0);
      var $139=((((($138)|(0)))/(2))&-1);
      var $140=$start;
      var $141=$end;
      var $142=$reason;
      var $143=_PyUnicodeEncodeError_Create($126, $129, $139, $140, $141, $142);
      var $144=$4;
      var $145=(($144+20)|0);
      HEAP32[(($145)>>2)]=$143;
      var $146=$4;
      var $147=(($146+20)|0);
      var $148=HEAP32[(($147)>>2)];
      var $149=(($148)|(0))==0;
      if ($149) { label = 30; break; } else { label = 31; break; }
    case 30: 
      label = 71; break;
    case 31: 
      label = 37; break;
    case 32: 
      var $153=$4;
      var $154=(($153+20)|0);
      var $155=HEAP32[(($154)>>2)];
      var $156=$start;
      var $157=_PyUnicodeEncodeError_SetStart($155, $156);
      var $158=(($157)|(0))!=0;
      if ($158) { label = 35; break; } else { label = 33; break; }
    case 33: 
      var $160=$4;
      var $161=(($160+20)|0);
      var $162=HEAP32[(($161)>>2)];
      var $163=$end;
      var $164=_PyUnicodeEncodeError_SetEnd($162, $163);
      var $165=(($164)|(0))!=0;
      if ($165) { label = 35; break; } else { label = 34; break; }
    case 34: 
      var $167=$4;
      var $168=(($167+20)|0);
      var $169=HEAP32[(($168)>>2)];
      var $170=$reason;
      var $171=_PyUnicodeEncodeError_SetReason($169, $170);
      var $172=(($171)|(0))!=0;
      if ($172) { label = 35; break; } else { label = 36; break; }
    case 35: 
      label = 71; break;
    case 36: 
      label = 37; break;
    case 37: 
      var $176=$5;
      var $177=(($176)|(0))==1;
      if ($177) { label = 38; break; } else { label = 39; break; }
    case 38: 
      var $179=$4;
      var $180=(($179+20)|0);
      var $181=HEAP32[(($180)>>2)];
      var $182=_PyCodec_StrictErrors($181);
      label = 71; break;
    case 39: 
      var $184=$5;
      var $185=$4;
      var $186=(($185+20)|0);
      var $187=HEAP32[(($186)>>2)];
      var $188=_call_error_callback($184, $187);
      $retobj=$188;
      var $189=$retobj;
      var $190=(($189)|(0))==0;
      if ($190) { label = 40; break; } else { label = 41; break; }
    case 40: 
      label = 71; break;
    case 41: 
      var $193=$retobj;
      var $194=(($193+4)|0);
      var $195=HEAP32[(($194)>>2)];
      var $196=(($195+84)|0);
      var $197=HEAP32[(($196)>>2)];
      var $198=$197 & 67108864;
      var $199=(($198)|(0))!=0;
      if ($199) { label = 42; break; } else { label = 46; break; }
    case 42: 
      var $201=$retobj;
      var $202=$201;
      var $203=(($202+8)|0);
      var $204=HEAP32[(($203)>>2)];
      var $205=(($204)|(0))!=2;
      if ($205) { label = 46; break; } else { label = 43; break; }
    case 43: 
      var $207=$retobj;
      var $208=$207;
      var $209=(($208+12)|0);
      var $210=(($209)|0);
      var $211=HEAP32[(($210)>>2)];
      $tobj=$211;
      var $212=(($211+4)|0);
      var $213=HEAP32[(($212)>>2)];
      var $214=(($213+84)|0);
      var $215=HEAP32[(($214)>>2)];
      var $216=$215 & 268435456;
      var $217=(($216)|(0))!=0;
      if ($217) { label = 44; break; } else { label = 46; break; }
    case 44: 
      var $219=$retobj;
      var $220=$219;
      var $221=(($220+12)|0);
      var $222=(($221+4)|0);
      var $223=HEAP32[(($222)>>2)];
      var $224=(($223+4)|0);
      var $225=HEAP32[(($224)>>2)];
      var $226=(($225+84)|0);
      var $227=HEAP32[(($226)>>2)];
      var $228=$227 & 8388608;
      var $229=(($228)|(0))!=0;
      if ($229) { label = 47; break; } else { label = 45; break; }
    case 45: 
      var $231=$retobj;
      var $232=$231;
      var $233=(($232+12)|0);
      var $234=(($233+4)|0);
      var $235=HEAP32[(($234)>>2)];
      var $236=(($235+4)|0);
      var $237=HEAP32[(($236)>>2)];
      var $238=(($237+84)|0);
      var $239=HEAP32[(($238)>>2)];
      var $240=$239 & 16777216;
      var $241=(($240)|(0))!=0;
      if ($241) { label = 47; break; } else { label = 46; break; }
    case 46: 
      var $243=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($243, ((__str25)|0));
      label = 71; break;
    case 47: 
      var $245=$tobj;
      var $246=$245;
      var $247=(($246+12)|0);
      var $248=HEAP32[(($247)>>2)];
      HEAP32[(($uraw)>>2)]=$248;
      var $249=$2;
      var $250=$3;
      var $251=$tobj;
      var $252=$251;
      var $253=(($252+8)|0);
      var $254=HEAP32[(($253)>>2)];
      var $255=_multibytecodec_encode($249, $250, $uraw, $254, 1, 1);
      $retstr=$255;
      var $256=$retstr;
      var $257=(($256)|(0))==0;
      if ($257) { label = 48; break; } else { label = 49; break; }
    case 48: 
      label = 71; break;
    case 49: 
      var $260=$retstr;
      var $261=$260;
      var $262=(($261+8)|0);
      var $263=HEAP32[(($262)>>2)];
      $retstrsize=$263;
      var $264=$retstrsize;
      var $265=(($264)|(0)) < 1;
      if ($265) { label = 51; break; } else { label = 50; break; }
    case 50: 
      var $267=$4;
      var $268=(($267+12)|0);
      var $269=HEAP32[(($268)>>2)];
      var $270=$retstrsize;
      var $271=(($269+$270)|0);
      var $272=$4;
      var $273=(($272+16)|0);
      var $274=HEAP32[(($273)>>2)];
      var $275=(($271)>>>(0)) > (($274)>>>(0));
      if ($275) { label = 51; break; } else { label = 54; break; }
    case 51: 
      var $277=$4;
      var $278=$retstrsize;
      var $279=_expand_encodebuffer($277, $278);
      var $280=(($279)|(0))==-1;
      if ($280) { label = 52; break; } else { label = 53; break; }
    case 52: 
      label = 71; break;
    case 53: 
      label = 54; break;
    case 54: 
      var $284=$4;
      var $285=(($284+12)|0);
      var $286=HEAP32[(($285)>>2)];
      var $287=$retstr;
      var $288=$287;
      var $289=(($288+20)|0);
      var $290=$289;
      var $291=$retstrsize;
      assert($291 % 1 === 0);_memcpy($286, $290, $291);
      var $292=$retstrsize;
      var $293=$4;
      var $294=(($293+12)|0);
      var $295=HEAP32[(($294)>>2)];
      var $296=(($295+$292)|0);
      HEAP32[(($294)>>2)]=$296;
      var $297=$retobj;
      var $298=$297;
      var $299=(($298+12)|0);
      var $300=(($299+4)|0);
      var $301=HEAP32[(($300)>>2)];
      var $302=_PyInt_AsSsize_t($301);
      $newpos=$302;
      var $303=$newpos;
      var $304=(($303)|(0)) < 0;
      if ($304) { label = 55; break; } else { label = 57; break; }
    case 55: 
      var $306=_PyErr_Occurred();
      var $307=(($306)|(0))!=0;
      if ($307) { label = 57; break; } else { label = 56; break; }
    case 56: 
      var $309=$4;
      var $310=(($309+8)|0);
      var $311=HEAP32[(($310)>>2)];
      var $312=$4;
      var $313=(($312+4)|0);
      var $314=HEAP32[(($313)>>2)];
      var $315=$311;
      var $316=$314;
      var $317=((($315)-($316))|0);
      var $318=((((($317)|(0)))/(2))&-1);
      var $319=$newpos;
      var $320=((($319)+($318))|0);
      $newpos=$320;
      label = 57; break;
    case 57: 
      var $322=$newpos;
      var $323=(($322)|(0)) < 0;
      if ($323) { label = 59; break; } else { label = 58; break; }
    case 58: 
      var $325=$4;
      var $326=(($325+4)|0);
      var $327=HEAP32[(($326)>>2)];
      var $328=$newpos;
      var $329=(($327+($328<<1))|0);
      var $330=$4;
      var $331=(($330+8)|0);
      var $332=HEAP32[(($331)>>2)];
      var $333=(($329)>>>(0)) > (($332)>>>(0));
      if ($333) { label = 59; break; } else { label = 60; break; }
    case 59: 
      _PyErr_Clear();
      var $335=HEAP32[((_PyExc_IndexError)>>2)];
      var $336=$newpos;
      var $337=_PyErr_Format($335, ((__str14)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$336,tempInt));
      label = 71; break;
    case 60: 
      var $339=$4;
      var $340=(($339+4)|0);
      var $341=HEAP32[(($340)>>2)];
      var $342=$newpos;
      var $343=(($341+($342<<1))|0);
      var $344=$4;
      var $345=(($344)|0);
      HEAP32[(($345)>>2)]=$343;
      label = 61; break;
    case 61: 
      var $347=$retobj;
      var $348=(($347)|0);
      var $349=HEAP32[(($348)>>2)];
      var $350=((($349)-(1))|0);
      HEAP32[(($348)>>2)]=$350;
      var $351=(($350)|(0))!=0;
      if ($351) { label = 62; break; } else { label = 63; break; }
    case 62: 
      label = 64; break;
    case 63: 
      var $354=$retobj;
      var $355=(($354+4)|0);
      var $356=HEAP32[(($355)>>2)];
      var $357=(($356+24)|0);
      var $358=HEAP32[(($357)>>2)];
      var $359=$retobj;
      FUNCTION_TABLE[$358]($359);
      label = 64; break;
    case 64: 
      label = 65; break;
    case 65: 
      label = 66; break;
    case 66: 
      var $363=$retstr;
      var $364=(($363)|0);
      var $365=HEAP32[(($364)>>2)];
      var $366=((($365)-(1))|0);
      HEAP32[(($364)>>2)]=$366;
      var $367=(($366)|(0))!=0;
      if ($367) { label = 67; break; } else { label = 68; break; }
    case 67: 
      label = 69; break;
    case 68: 
      var $370=$retstr;
      var $371=(($370+4)|0);
      var $372=HEAP32[(($371)>>2)];
      var $373=(($372+24)|0);
      var $374=HEAP32[(($373)>>2)];
      var $375=$retstr;
      FUNCTION_TABLE[$374]($375);
      label = 69; break;
    case 69: 
      label = 70; break;
    case 70: 
      $1=0;
      label = 92; break;
    case 71: 
      label = 72; break;
    case 72: 
      var $380=$retobj;
      var $381=(($380)|(0))==0;
      if ($381) { label = 73; break; } else { label = 74; break; }
    case 73: 
      label = 80; break;
    case 74: 
      label = 75; break;
    case 75: 
      var $385=$retobj;
      var $386=(($385)|0);
      var $387=HEAP32[(($386)>>2)];
      var $388=((($387)-(1))|0);
      HEAP32[(($386)>>2)]=$388;
      var $389=(($388)|(0))!=0;
      if ($389) { label = 76; break; } else { label = 77; break; }
    case 76: 
      label = 78; break;
    case 77: 
      var $392=$retobj;
      var $393=(($392+4)|0);
      var $394=HEAP32[(($393)>>2)];
      var $395=(($394+24)|0);
      var $396=HEAP32[(($395)>>2)];
      var $397=$retobj;
      FUNCTION_TABLE[$396]($397);
      label = 78; break;
    case 78: 
      label = 79; break;
    case 79: 
      label = 80; break;
    case 80: 
      label = 81; break;
    case 81: 
      label = 82; break;
    case 82: 
      var $403=$retstr;
      var $404=(($403)|(0))==0;
      if ($404) { label = 83; break; } else { label = 84; break; }
    case 83: 
      label = 90; break;
    case 84: 
      label = 85; break;
    case 85: 
      var $408=$retstr;
      var $409=(($408)|0);
      var $410=HEAP32[(($409)>>2)];
      var $411=((($410)-(1))|0);
      HEAP32[(($409)>>2)]=$411;
      var $412=(($411)|(0))!=0;
      if ($412) { label = 86; break; } else { label = 87; break; }
    case 86: 
      label = 88; break;
    case 87: 
      var $415=$retstr;
      var $416=(($415+4)|0);
      var $417=HEAP32[(($416)>>2)];
      var $418=(($417+24)|0);
      var $419=HEAP32[(($418)>>2)];
      var $420=$retstr;
      FUNCTION_TABLE[$419]($420);
      label = 88; break;
    case 88: 
      label = 89; break;
    case 89: 
      label = 90; break;
    case 90: 
      label = 91; break;
    case 91: 
      $1=-1;
      label = 92; break;
    case 92: 
      var $426=$1;
      STACKTOP = __stackBase__;
      return $426;
    default: assert(0, "bad label: " + label);
  }
}
function _expand_encodebuffer($buf, $esize) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $orgpos;
      var $orgsize;
      var $incsize;
      $2=$buf;
      $3=$esize;
      var $4=$2;
      var $5=(($4+12)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=$2;
      var $8=(($7+24)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=$9;
      var $11=(($10+20)|0);
      var $12=(($11)|0);
      var $13=$6;
      var $14=$12;
      var $15=((($13)-($14))|0);
      $orgpos=$15;
      var $16=$2;
      var $17=(($16+24)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=$18;
      var $20=(($19+8)|0);
      var $21=HEAP32[(($20)>>2)];
      $orgsize=$21;
      var $22=$3;
      var $23=$orgsize;
      var $24=$23 >> 1;
      var $25=(($22)|(0)) < (($24)|(0));
      if ($25) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $27=$orgsize;
      var $28=$27 >> 1;
      var $29=$28 | 1;
      var $33 = $29;label = 4; break;
    case 3: 
      var $31=$3;
      var $33 = $31;label = 4; break;
    case 4: 
      var $33;
      $incsize=$33;
      var $34=$orgsize;
      var $35=$incsize;
      var $36=(((2147483647)-($35))|0);
      var $37=(($34)|(0)) > (($36)|(0));
      if ($37) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=-1;
      label = 9; break;
    case 6: 
      var $40=$2;
      var $41=(($40+24)|0);
      var $42=$orgsize;
      var $43=$incsize;
      var $44=((($42)+($43))|0);
      var $45=__PyString_Resize($41, $44);
      var $46=(($45)|(0))==-1;
      if ($46) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=-1;
      label = 9; break;
    case 8: 
      var $49=$2;
      var $50=(($49+24)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=$51;
      var $53=(($52+20)|0);
      var $54=(($53)|0);
      var $55=$orgpos;
      var $56=(($54+$55)|0);
      var $57=$2;
      var $58=(($57+12)|0);
      HEAP32[(($58)>>2)]=$56;
      var $59=$2;
      var $60=(($59+24)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=$61;
      var $63=(($62+20)|0);
      var $64=(($63)|0);
      var $65=$2;
      var $66=(($65+24)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=$67;
      var $69=(($68+8)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=(($64+$70)|0);
      var $72=$2;
      var $73=(($72+16)|0);
      HEAP32[(($73)>>2)]=$71;
      $1=0;
      label = 9; break;
    case 9: 
      var $75=$1;
      return $75;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamwriter_dealloc($self) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      $1=$self;
      var $2=$1;
      var $3=$2;
      _PyObject_GC_UnTrack($3);
      label = 2; break;
    case 2: 
      var $5=$1;
      var $6=(($5+20)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 11; break; }
    case 3: 
      var $10=$1;
      var $11=(($10+20)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12)>>>(0)) < 1;
      if ($13) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $15=$1;
      var $16=(($15+20)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=3 < (($17)>>>(0));
      if ($18) { label = 5; break; } else { label = 11; break; }
    case 5: 
      label = 6; break;
    case 6: 
      var $21=$1;
      var $22=(($21+20)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=((($25)-(1))|0);
      HEAP32[(($24)>>2)]=$26;
      var $27=(($26)|(0))!=0;
      if ($27) { label = 7; break; } else { label = 8; break; }
    case 7: 
      label = 9; break;
    case 8: 
      var $30=$1;
      var $31=(($30+20)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32+4)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=(($34+24)|0);
      var $36=HEAP32[(($35)>>2)];
      var $37=$1;
      var $38=(($37+20)|0);
      var $39=HEAP32[(($38)>>2)];
      FUNCTION_TABLE[$36]($39);
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      var $45=$1;
      var $46=(($45+32)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=(($47)|(0))==0;
      if ($48) { label = 14; break; } else { label = 15; break; }
    case 14: 
      label = 21; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $52=$1;
      var $53=(($52+32)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=(($54)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=((($56)-(1))|0);
      HEAP32[(($55)>>2)]=$57;
      var $58=(($57)|(0))!=0;
      if ($58) { label = 17; break; } else { label = 18; break; }
    case 17: 
      label = 19; break;
    case 18: 
      var $61=$1;
      var $62=(($61+32)|0);
      var $63=HEAP32[(($62)>>2)];
      var $64=(($63+4)|0);
      var $65=HEAP32[(($64)>>2)];
      var $66=(($65+24)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=$1;
      var $69=(($68+32)|0);
      var $70=HEAP32[(($69)>>2)];
      FUNCTION_TABLE[$67]($70);
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      label = 21; break;
    case 21: 
      label = 22; break;
    case 22: 
      var $75=$1;
      var $76=$75;
      var $77=(($76+4)|0);
      var $78=HEAP32[(($77)>>2)];
      var $79=(($78+160)|0);
      var $80=HEAP32[(($79)>>2)];
      var $81=$1;
      var $82=$81;
      FUNCTION_TABLE[$80]($82);
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamwriter_init($self, $args, $kwds) {
  var label = 0;
  var $1;
  var $2;
  var $3;
  $1=$self;
  $2=$args;
  $3=$kwds;
  return 0;
}
function _mbstreamwriter_traverse($self, $visit, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $vret;
      var $vret1;
      $2=$self;
      $3=$visit;
      $4=$arg;
      var $5=$2;
      var $6=(($5+20)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)>>>(0)) < 1;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+20)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=3 < (($12)>>>(0));
      if ($13) { label = 3; break; } else { label = 10; break; }
    case 3: 
      label = 4; break;
    case 4: 
      var $16=$2;
      var $17=(($16+20)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18)|(0))!=0;
      if ($19) { label = 5; break; } else { label = 8; break; }
    case 5: 
      var $21=$3;
      var $22=$2;
      var $23=(($22+20)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$4;
      var $26=FUNCTION_TABLE[$21]($24, $25);
      $vret=$26;
      var $27=$vret;
      var $28=(($27)|(0))!=0;
      if ($28) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $30=$vret;
      $1=$30;
      label = 17; break;
    case 7: 
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $36=$2;
      var $37=(($36+32)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=(($38)|(0))!=0;
      if ($39) { label = 12; break; } else { label = 15; break; }
    case 12: 
      var $41=$3;
      var $42=$2;
      var $43=(($42+32)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=$4;
      var $46=FUNCTION_TABLE[$41]($44, $45);
      $vret1=$46;
      var $47=$vret1;
      var $48=(($47)|(0))!=0;
      if ($48) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $50=$vret1;
      $1=$50;
      label = 17; break;
    case 14: 
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      $1=0;
      label = 17; break;
    case 17: 
      var $55=$1;
      return $55;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamwriter_new($type, $args, $kwds) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $self;
      var $stream=__stackBase__;
      var $codec;
      var $errors=(__stackBase__)+(4);
      $2=$type;
      $3=$args;
      $4=$kwds;
      $codec=0;
      HEAP32[(($errors)>>2)]=0;
      var $5=$3;
      var $6=$4;
      var $7=__PyArg_ParseTupleAndKeywords_SizeT($5, $6, ((__str27)|0), ((_streamkwarglist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$stream,HEAP32[(((tempInt)+(4))>>2)]=$errors,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 41; break;
    case 3: 
      var $11=$2;
      var $12=(($11+152)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=$2;
      var $15=FUNCTION_TABLE[$13]($14, 0);
      var $16=$15;
      $self=$16;
      var $17=$self;
      var $18=(($17)|(0))==0;
      if ($18) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 41; break;
    case 5: 
      var $21=$2;
      var $22=$21;
      var $23=_PyObject_GetAttrString($22, ((__str28)|0));
      $codec=$23;
      var $24=$codec;
      var $25=(($24)|(0))==0;
      if ($25) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 20; break;
    case 7: 
      var $28=$codec;
      var $29=(($28+4)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=(($30)|(0))==((_MultibyteCodec_Type)|(0));
      if ($31) { label = 9; break; } else { label = 8; break; }
    case 8: 
      var $33=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($33, ((__str29)|0));
      label = 20; break;
    case 9: 
      var $35=$codec;
      var $36=$35;
      var $37=(($36+8)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=$self;
      var $40=(($39+8)|0);
      HEAP32[(($40)>>2)]=$38;
      var $41=HEAP32[(($stream)>>2)];
      var $42=$self;
      var $43=(($42+32)|0);
      HEAP32[(($43)>>2)]=$41;
      var $44=HEAP32[(($stream)>>2)];
      var $45=(($44)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=((($46)+(1))|0);
      HEAP32[(($45)>>2)]=$47;
      var $48=$self;
      var $49=(($48+28)|0);
      HEAP32[(($49)>>2)]=0;
      var $50=HEAP32[(($errors)>>2)];
      var $51=_internal_error_callback($50);
      var $52=$self;
      var $53=(($52+20)|0);
      HEAP32[(($53)>>2)]=$51;
      var $54=$self;
      var $55=(($54+20)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=(($56)|(0))==0;
      if ($57) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 20; break;
    case 11: 
      var $60=$self;
      var $61=(($60+8)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=(($62+16)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=(($64)|(0))!=0;
      if ($65) { label = 12; break; } else { label = 14; break; }
    case 12: 
      var $67=$self;
      var $68=(($67+8)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=(($69+16)|0);
      var $71=HEAP32[(($70)>>2)];
      var $72=$self;
      var $73=(($72+12)|0);
      var $74=$self;
      var $75=(($74+8)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=(($76+4)|0);
      var $78=HEAP32[(($77)>>2)];
      var $79=FUNCTION_TABLE[$71]($73, $78);
      var $80=(($79)|(0))!=0;
      if ($80) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 20; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $84=$codec;
      var $85=(($84)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=((($86)-(1))|0);
      HEAP32[(($85)>>2)]=$87;
      var $88=(($87)|(0))!=0;
      if ($88) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 18; break;
    case 17: 
      var $91=$codec;
      var $92=(($91+4)|0);
      var $93=HEAP32[(($92)>>2)];
      var $94=(($93+24)|0);
      var $95=HEAP32[(($94)>>2)];
      var $96=$codec;
      FUNCTION_TABLE[$95]($96);
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      var $99=$self;
      var $100=$99;
      $1=$100;
      label = 41; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $103=$self;
      var $104=(($103)|(0))==0;
      if ($104) { label = 22; break; } else { label = 23; break; }
    case 22: 
      label = 29; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $108=$self;
      var $109=$108;
      var $110=(($109)|0);
      var $111=HEAP32[(($110)>>2)];
      var $112=((($111)-(1))|0);
      HEAP32[(($110)>>2)]=$112;
      var $113=(($112)|(0))!=0;
      if ($113) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 27; break;
    case 26: 
      var $116=$self;
      var $117=$116;
      var $118=(($117+4)|0);
      var $119=HEAP32[(($118)>>2)];
      var $120=(($119+24)|0);
      var $121=HEAP32[(($120)>>2)];
      var $122=$self;
      var $123=$122;
      FUNCTION_TABLE[$121]($123);
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      label = 30; break;
    case 30: 
      label = 31; break;
    case 31: 
      var $129=$codec;
      var $130=(($129)|(0))==0;
      if ($130) { label = 32; break; } else { label = 33; break; }
    case 32: 
      label = 39; break;
    case 33: 
      label = 34; break;
    case 34: 
      var $134=$codec;
      var $135=(($134)|0);
      var $136=HEAP32[(($135)>>2)];
      var $137=((($136)-(1))|0);
      HEAP32[(($135)>>2)]=$137;
      var $138=(($137)|(0))!=0;
      if ($138) { label = 35; break; } else { label = 36; break; }
    case 35: 
      label = 37; break;
    case 36: 
      var $141=$codec;
      var $142=(($141+4)|0);
      var $143=HEAP32[(($142)>>2)];
      var $144=(($143+24)|0);
      var $145=HEAP32[(($144)>>2)];
      var $146=$codec;
      FUNCTION_TABLE[$145]($146);
      label = 37; break;
    case 37: 
      label = 38; break;
    case 38: 
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      $1=0;
      label = 41; break;
    case 41: 
      var $152=$1;
      STACKTOP = __stackBase__;
      return $152;
    default: assert(0, "bad label: " + label);
  }
}
function _codecctx_errors_get($self) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $errors;
      $2=$self;
      var $3=$2;
      var $4=(($3+20)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))==1;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $errors=((__str17)|0);
      label = 10; break;
    case 3: 
      var $9=$2;
      var $10=(($9+20)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=(($11)|(0))==2;
      if ($12) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $errors=((__str18)|0);
      label = 9; break;
    case 5: 
      var $15=$2;
      var $16=(($15+20)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=(($17)|(0))==3;
      if ($18) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $errors=((__str19)|0);
      label = 8; break;
    case 7: 
      var $21=$2;
      var $22=(($21+20)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=((($25)+(1))|0);
      HEAP32[(($24)>>2)]=$26;
      var $27=$2;
      var $28=(($27+20)|0);
      var $29=HEAP32[(($28)>>2)];
      $1=$29;
      label = 11; break;
    case 8: 
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $33=$errors;
      var $34=_PyString_FromString($33);
      $1=$34;
      label = 11; break;
    case 11: 
      var $36=$1;
      return $36;
    default: assert(0, "bad label: " + label);
  }
}
function _codecctx_errors_set($self, $value, $closure) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $cb;
      $2=$self;
      $3=$value;
      $4=$closure;
      var $5=$3;
      var $6=(($5+4)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7+84)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=$9 & 134217728;
      var $11=(($10)|(0))!=0;
      if ($11) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $13=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($13, ((__str32)|0));
      $1=-1;
      label = 17; break;
    case 3: 
      var $15=$3;
      var $16=$15;
      var $17=(($16+20)|0);
      var $18=(($17)|0);
      var $19=_internal_error_callback($18);
      $cb=$19;
      var $20=$cb;
      var $21=(($20)|(0))==0;
      if ($21) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=-1;
      label = 17; break;
    case 5: 
      label = 6; break;
    case 6: 
      var $25=$2;
      var $26=(($25+20)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=(($27)|(0))!=0;
      if ($28) { label = 7; break; } else { label = 15; break; }
    case 7: 
      var $30=$2;
      var $31=(($30+20)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32)>>>(0)) < 1;
      if ($33) { label = 9; break; } else { label = 8; break; }
    case 8: 
      var $35=$2;
      var $36=(($35+20)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=3 < (($37)>>>(0));
      if ($38) { label = 9; break; } else { label = 15; break; }
    case 9: 
      label = 10; break;
    case 10: 
      var $41=$2;
      var $42=(($41+20)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=(($43)|0);
      var $45=HEAP32[(($44)>>2)];
      var $46=((($45)-(1))|0);
      HEAP32[(($44)>>2)]=$46;
      var $47=(($46)|(0))!=0;
      if ($47) { label = 11; break; } else { label = 12; break; }
    case 11: 
      label = 13; break;
    case 12: 
      var $50=$2;
      var $51=(($50+20)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=(($52+4)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=(($54+24)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=$2;
      var $58=(($57+20)|0);
      var $59=HEAP32[(($58)>>2)];
      FUNCTION_TABLE[$56]($59);
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $64=$cb;
      var $65=$2;
      var $66=(($65+20)|0);
      HEAP32[(($66)>>2)]=$64;
      $1=0;
      label = 17; break;
    case 17: 
      var $68=$1;
      return $68;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamwriter_write($self, $strobj) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $2=$self;
      $3=$strobj;
      var $4=$2;
      var $5=$3;
      var $6=_mbstreamwriter_iwrite($4, $5);
      var $7=(($6)|(0))!=0;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 4; break;
    case 3: 
      var $10=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $11=((($10)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$11;
      $1=__Py_NoneStruct;
      label = 4; break;
    case 4: 
      var $13=$1;
      return $13;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamwriter_writelines($self, $lines) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $strobj;
      var $i;
      var $r;
      $2=$self;
      $3=$lines;
      var $4=$3;
      var $5=_PySequence_Check($4);
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $8=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($8, ((__str37)|0));
      $1=0;
      label = 17; break;
    case 3: 
      $i=0;
      label = 4; break;
    case 4: 
      var $11=$i;
      var $12=$3;
      var $13=_PySequence_Size($12);
      var $14=(($11)|(0)) < (($13)|(0));
      if ($14) { label = 5; break; } else { label = 16; break; }
    case 5: 
      var $16=$3;
      var $17=$i;
      var $18=_PySequence_GetItem($16, $17);
      $strobj=$18;
      var $19=$strobj;
      var $20=(($19)|(0))==0;
      if ($20) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 17; break;
    case 7: 
      var $23=$2;
      var $24=$strobj;
      var $25=_mbstreamwriter_iwrite($23, $24);
      $r=$25;
      label = 8; break;
    case 8: 
      var $27=$strobj;
      var $28=(($27)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=((($29)-(1))|0);
      HEAP32[(($28)>>2)]=$30;
      var $31=(($30)|(0))!=0;
      if ($31) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 11; break;
    case 10: 
      var $34=$strobj;
      var $35=(($34+4)|0);
      var $36=HEAP32[(($35)>>2)];
      var $37=(($36+24)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=$strobj;
      FUNCTION_TABLE[$38]($39);
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $42=$r;
      var $43=(($42)|(0))==-1;
      if ($43) { label = 13; break; } else { label = 14; break; }
    case 13: 
      $1=0;
      label = 17; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $47=$i;
      var $48=((($47)+(1))|0);
      $i=$48;
      label = 4; break;
    case 16: 
      var $50=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $51=((($50)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$51;
      $1=__Py_NoneStruct;
      label = 17; break;
    case 17: 
      var $53=$1;
      return $53;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamwriter_reset($self) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $pending=__stackBase__;
      var $pwrt;
      var $wr;
      $2=$self;
      var $3=$2;
      var $4=(($3+24)|0);
      var $5=(($4)|0);
      HEAP32[(($pending)>>2)]=$5;
      var $6=$2;
      var $7=(($6+8)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=$2;
      var $10=(($9+12)|0);
      var $11=$2;
      var $12=(($11+28)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=$2;
      var $15=(($14+20)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=_multibytecodec_encode($8, $10, $pending, $13, $16, 3);
      $pwrt=$17;
      var $18=$2;
      var $19=(($18+28)|0);
      HEAP32[(($19)>>2)]=0;
      var $20=$pwrt;
      var $21=(($20)|(0))==0;
      if ($21) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 18; break;
    case 3: 
      var $24=$pwrt;
      var $25=_PyString_Size($24);
      var $26=(($25)|(0)) > 0;
      if ($26) { label = 4; break; } else { label = 12; break; }
    case 4: 
      var $28=$2;
      var $29=(($28+32)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$pwrt;
      var $32=__PyObject_CallMethod_SizeT($30, ((__str33)|0), ((__str36)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$31,tempInt));
      $wr=$32;
      var $33=$wr;
      var $34=(($33)|(0))==0;
      if ($34) { label = 5; break; } else { label = 11; break; }
    case 5: 
      label = 6; break;
    case 6: 
      var $37=$pwrt;
      var $38=(($37)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=((($39)-(1))|0);
      HEAP32[(($38)>>2)]=$40;
      var $41=(($40)|(0))!=0;
      if ($41) { label = 7; break; } else { label = 8; break; }
    case 7: 
      label = 9; break;
    case 8: 
      var $44=$pwrt;
      var $45=(($44+4)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=(($46+24)|0);
      var $48=HEAP32[(($47)>>2)];
      var $49=$pwrt;
      FUNCTION_TABLE[$48]($49);
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      $1=0;
      label = 18; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      var $55=$pwrt;
      var $56=(($55)|0);
      var $57=HEAP32[(($56)>>2)];
      var $58=((($57)-(1))|0);
      HEAP32[(($56)>>2)]=$58;
      var $59=(($58)|(0))!=0;
      if ($59) { label = 14; break; } else { label = 15; break; }
    case 14: 
      label = 16; break;
    case 15: 
      var $62=$pwrt;
      var $63=(($62+4)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=(($64+24)|0);
      var $66=HEAP32[(($65)>>2)];
      var $67=$pwrt;
      FUNCTION_TABLE[$66]($67);
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $70=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $71=((($70)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$71;
      $1=__Py_NoneStruct;
      label = 18; break;
    case 18: 
      var $73=$1;
      STACKTOP = __stackBase__;
      return $73;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamwriter_iwrite($self, $unistr) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $str;
      var $wr;
      $2=$self;
      $3=$unistr;
      var $4=$2;
      var $5=$4;
      var $6=$3;
      var $7=_encoder_encode_stateful($5, $6, 0);
      $str=$7;
      var $8=$str;
      var $9=(($8)|(0))==0;
      if ($9) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=-1;
      label = 16; break;
    case 3: 
      var $12=$2;
      var $13=(($12+32)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=$str;
      var $16=__PyObject_CallMethod_SizeT($14, ((__str33)|0), ((__str36)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$15,tempInt));
      $wr=$16;
      label = 4; break;
    case 4: 
      var $18=$str;
      var $19=(($18)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=((($20)-(1))|0);
      HEAP32[(($19)>>2)]=$21;
      var $22=(($21)|(0))!=0;
      if ($22) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 7; break;
    case 6: 
      var $25=$str;
      var $26=(($25+4)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=(($27+24)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=$str;
      FUNCTION_TABLE[$29]($30);
      label = 7; break;
    case 7: 
      label = 8; break;
    case 8: 
      var $33=$wr;
      var $34=(($33)|(0))==0;
      if ($34) { label = 9; break; } else { label = 10; break; }
    case 9: 
      $1=-1;
      label = 16; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $38=$wr;
      var $39=(($38)|0);
      var $40=HEAP32[(($39)>>2)];
      var $41=((($40)-(1))|0);
      HEAP32[(($39)>>2)]=$41;
      var $42=(($41)|(0))!=0;
      if ($42) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      var $45=$wr;
      var $46=(($45+4)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=(($47+24)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=$wr;
      FUNCTION_TABLE[$49]($50);
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      $1=0;
      label = 16; break;
    case 16: 
      var $54=$1;
      STACKTOP = __stackBase__;
      return $54;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamreader_init($self, $args, $kwds) {
  var label = 0;
  var $1;
  var $2;
  var $3;
  $1=$self;
  $2=$args;
  $3=$kwds;
  return 0;
}
function _encoder_encode_stateful($ctx, $unistr, $final) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $ucvt;
      var $r;
      var $inbuf=__stackBase__;
      var $inbuf_end;
      var $inbuf_tmp;
      var $datalen;
      var $origpending;
      $2=$ctx;
      $3=$unistr;
      $4=$final;
      $r=0;
      $inbuf_tmp=0;
      var $5=$3;
      var $6=(($5+4)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7+84)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=$9 & 268435456;
      var $11=(($10)|(0))!=0;
      if ($11) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $ucvt=0;
      label = 14; break;
    case 3: 
      var $14=$3;
      var $15=_PyObject_Unicode($14);
      $ucvt=$15;
      $3=$15;
      var $16=$3;
      var $17=(($16)|(0))==0;
      if ($17) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 68; break;
    case 5: 
      var $20=$3;
      var $21=(($20+4)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=(($22+84)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$24 & 268435456;
      var $26=(($25)|(0))!=0;
      if ($26) { label = 12; break; } else { label = 6; break; }
    case 6: 
      var $28=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($28, ((__str23)|0));
      label = 7; break;
    case 7: 
      var $30=$ucvt;
      var $31=(($30)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=((($32)-(1))|0);
      HEAP32[(($31)>>2)]=$33;
      var $34=(($33)|(0))!=0;
      if ($34) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 10; break;
    case 9: 
      var $37=$ucvt;
      var $38=(($37+4)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=(($39+24)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=$ucvt;
      FUNCTION_TABLE[$41]($42);
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      $1=0;
      label = 68; break;
    case 12: 
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      var $48=$3;
      var $49=$48;
      var $50=(($49+8)|0);
      var $51=HEAP32[(($50)>>2)];
      $datalen=$51;
      var $52=$2;
      var $53=(($52+28)|0);
      var $54=HEAP32[(($53)>>2)];
      $origpending=$54;
      var $55=$origpending;
      var $56=(($55)|(0)) > 0;
      if ($56) { label = 15; break; } else { label = 23; break; }
    case 15: 
      var $58=$datalen;
      var $59=$2;
      var $60=(($59+28)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=(((2147483647)-($61))|0);
      var $63=(($58)|(0)) > (($62)|(0));
      if ($63) { label = 16; break; } else { label = 17; break; }
    case 16: 
      var $65=_PyErr_NoMemory();
      label = 45; break;
    case 17: 
      var $67=$datalen;
      var $68=$2;
      var $69=(($68+28)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=((($67)+($70))|0);
      var $72=(($71)>>>(0)) > 1073741823;
      if ($72) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $84 = 0;label = 20; break;
    case 19: 
      var $75=$datalen;
      var $76=$2;
      var $77=(($76+28)|0);
      var $78=HEAP32[(($77)>>2)];
      var $79=((($75)+($78))|0);
      var $80=($79<<1);
      var $81=_PyMem_Malloc($80);
      var $82=$81;
      var $84 = $82;label = 20; break;
    case 20: 
      var $84;
      $inbuf_tmp=$84;
      var $85=$inbuf_tmp;
      var $86=(($85)|(0))==0;
      if ($86) { label = 21; break; } else { label = 22; break; }
    case 21: 
      label = 45; break;
    case 22: 
      var $89=$inbuf_tmp;
      var $90=$89;
      var $91=$2;
      var $92=(($91+24)|0);
      var $93=$92;
      var $94=$2;
      var $95=(($94+28)|0);
      var $96=HEAP32[(($95)>>2)];
      var $97=($96<<1);
      assert($97 % 1 === 0);_memcpy($90, $93, $97);
      var $98=$inbuf_tmp;
      var $99=$2;
      var $100=(($99+28)|0);
      var $101=HEAP32[(($100)>>2)];
      var $102=(($98+($101<<1))|0);
      var $103=$102;
      var $104=$3;
      var $105=$104;
      var $106=(($105+12)|0);
      var $107=HEAP32[(($106)>>2)];
      var $108=$107;
      var $109=$datalen;
      var $110=($109<<1);
      assert($110 % 1 === 0);_memcpy($103, $108, $110);
      var $111=$2;
      var $112=(($111+28)|0);
      var $113=HEAP32[(($112)>>2)];
      var $114=$datalen;
      var $115=((($114)+($113))|0);
      $datalen=$115;
      var $116=$2;
      var $117=(($116+28)|0);
      HEAP32[(($117)>>2)]=0;
      var $118=$inbuf_tmp;
      HEAP32[(($inbuf)>>2)]=$118;
      label = 24; break;
    case 23: 
      var $120=$3;
      var $121=$120;
      var $122=(($121+12)|0);
      var $123=HEAP32[(($122)>>2)];
      HEAP32[(($inbuf)>>2)]=$123;
      label = 24; break;
    case 24: 
      var $125=HEAP32[(($inbuf)>>2)];
      var $126=$datalen;
      var $127=(($125+($126<<1))|0);
      $inbuf_end=$127;
      var $128=$2;
      var $129=(($128+8)|0);
      var $130=HEAP32[(($129)>>2)];
      var $131=$2;
      var $132=(($131+12)|0);
      var $133=$datalen;
      var $134=$2;
      var $135=(($134+20)|0);
      var $136=HEAP32[(($135)>>2)];
      var $137=$4;
      var $138=(($137)|(0))!=0;
      var $139=$138 ? 3 : 0;
      var $140=_multibytecodec_encode($130, $132, $inbuf, $133, $136, $139);
      $r=$140;
      var $141=$r;
      var $142=(($141)|(0))==0;
      if ($142) { label = 25; break; } else { label = 28; break; }
    case 25: 
      var $144=$origpending;
      var $145=(($144)|(0)) > 0;
      if ($145) { label = 26; break; } else { label = 27; break; }
    case 26: 
      var $147=$2;
      var $148=(($147+24)|0);
      var $149=$148;
      var $150=$inbuf_tmp;
      var $151=$150;
      var $152=$origpending;
      var $153=($152<<1);
      assert($153 % 1 === 0);_memcpy($149, $151, $153);
      label = 27; break;
    case 27: 
      var $155=$origpending;
      var $156=$2;
      var $157=(($156+28)|0);
      HEAP32[(($157)>>2)]=$155;
      label = 45; break;
    case 28: 
      var $159=HEAP32[(($inbuf)>>2)];
      var $160=$inbuf_end;
      var $161=(($159)>>>(0)) < (($160)>>>(0));
      if ($161) { label = 29; break; } else { label = 32; break; }
    case 29: 
      var $163=$inbuf_end;
      var $164=HEAP32[(($inbuf)>>2)];
      var $165=$163;
      var $166=$164;
      var $167=((($165)-($166))|0);
      var $168=((((($167)|(0)))/(2))&-1);
      var $169=$2;
      var $170=(($169+28)|0);
      HEAP32[(($170)>>2)]=$168;
      var $171=$2;
      var $172=(($171+28)|0);
      var $173=HEAP32[(($172)>>2)];
      var $174=(($173)|(0)) > 2;
      if ($174) { label = 30; break; } else { label = 31; break; }
    case 30: 
      var $176=$2;
      var $177=(($176+28)|0);
      HEAP32[(($177)>>2)]=0;
      var $178=HEAP32[((_PyExc_UnicodeError)>>2)];
      _PyErr_SetString($178, ((__str38)|0));
      label = 45; break;
    case 31: 
      var $180=$2;
      var $181=(($180+24)|0);
      var $182=$181;
      var $183=HEAP32[(($inbuf)>>2)];
      var $184=$183;
      var $185=$2;
      var $186=(($185+28)|0);
      var $187=HEAP32[(($186)>>2)];
      var $188=($187<<1);
      assert($188 % 1 === 0);_memcpy($182, $184, $188);
      label = 32; break;
    case 32: 
      var $190=$inbuf_tmp;
      var $191=(($190)|(0))!=0;
      if ($191) { label = 33; break; } else { label = 34; break; }
    case 33: 
      var $193=$inbuf_tmp;
      var $194=$193;
      _PyMem_Free($194);
      label = 34; break;
    case 34: 
      label = 35; break;
    case 35: 
      var $197=$ucvt;
      var $198=(($197)|(0))==0;
      if ($198) { label = 36; break; } else { label = 37; break; }
    case 36: 
      label = 43; break;
    case 37: 
      label = 38; break;
    case 38: 
      var $202=$ucvt;
      var $203=(($202)|0);
      var $204=HEAP32[(($203)>>2)];
      var $205=((($204)-(1))|0);
      HEAP32[(($203)>>2)]=$205;
      var $206=(($205)|(0))!=0;
      if ($206) { label = 39; break; } else { label = 40; break; }
    case 39: 
      label = 41; break;
    case 40: 
      var $209=$ucvt;
      var $210=(($209+4)|0);
      var $211=HEAP32[(($210)>>2)];
      var $212=(($211+24)|0);
      var $213=HEAP32[(($212)>>2)];
      var $214=$ucvt;
      FUNCTION_TABLE[$213]($214);
      label = 41; break;
    case 41: 
      label = 42; break;
    case 42: 
      label = 43; break;
    case 43: 
      label = 44; break;
    case 44: 
      var $219=$r;
      $1=$219;
      label = 68; break;
    case 45: 
      var $221=$inbuf_tmp;
      var $222=(($221)|(0))!=0;
      if ($222) { label = 46; break; } else { label = 47; break; }
    case 46: 
      var $224=$inbuf_tmp;
      var $225=$224;
      _PyMem_Free($225);
      label = 47; break;
    case 47: 
      label = 48; break;
    case 48: 
      var $228=$r;
      var $229=(($228)|(0))==0;
      if ($229) { label = 49; break; } else { label = 50; break; }
    case 49: 
      label = 56; break;
    case 50: 
      label = 51; break;
    case 51: 
      var $233=$r;
      var $234=(($233)|0);
      var $235=HEAP32[(($234)>>2)];
      var $236=((($235)-(1))|0);
      HEAP32[(($234)>>2)]=$236;
      var $237=(($236)|(0))!=0;
      if ($237) { label = 52; break; } else { label = 53; break; }
    case 52: 
      label = 54; break;
    case 53: 
      var $240=$r;
      var $241=(($240+4)|0);
      var $242=HEAP32[(($241)>>2)];
      var $243=(($242+24)|0);
      var $244=HEAP32[(($243)>>2)];
      var $245=$r;
      FUNCTION_TABLE[$244]($245);
      label = 54; break;
    case 54: 
      label = 55; break;
    case 55: 
      label = 56; break;
    case 56: 
      label = 57; break;
    case 57: 
      label = 58; break;
    case 58: 
      var $251=$ucvt;
      var $252=(($251)|(0))==0;
      if ($252) { label = 59; break; } else { label = 60; break; }
    case 59: 
      label = 66; break;
    case 60: 
      label = 61; break;
    case 61: 
      var $256=$ucvt;
      var $257=(($256)|0);
      var $258=HEAP32[(($257)>>2)];
      var $259=((($258)-(1))|0);
      HEAP32[(($257)>>2)]=$259;
      var $260=(($259)|(0))!=0;
      if ($260) { label = 62; break; } else { label = 63; break; }
    case 62: 
      label = 64; break;
    case 63: 
      var $263=$ucvt;
      var $264=(($263+4)|0);
      var $265=HEAP32[(($264)>>2)];
      var $266=(($265+24)|0);
      var $267=HEAP32[(($266)>>2)];
      var $268=$ucvt;
      FUNCTION_TABLE[$267]($268);
      label = 64; break;
    case 64: 
      label = 65; break;
    case 65: 
      label = 66; break;
    case 66: 
      label = 67; break;
    case 67: 
      $1=0;
      label = 68; break;
    case 68: 
      var $274=$1;
      STACKTOP = __stackBase__;
      return $274;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamreader_dealloc($self) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      $1=$self;
      var $2=$1;
      var $3=$2;
      _PyObject_GC_UnTrack($3);
      label = 2; break;
    case 2: 
      var $5=$1;
      var $6=(($5+20)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 11; break; }
    case 3: 
      var $10=$1;
      var $11=(($10+20)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12)>>>(0)) < 1;
      if ($13) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $15=$1;
      var $16=(($15+20)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=3 < (($17)>>>(0));
      if ($18) { label = 5; break; } else { label = 11; break; }
    case 5: 
      label = 6; break;
    case 6: 
      var $21=$1;
      var $22=(($21+20)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=((($25)-(1))|0);
      HEAP32[(($24)>>2)]=$26;
      var $27=(($26)|(0))!=0;
      if ($27) { label = 7; break; } else { label = 8; break; }
    case 7: 
      label = 9; break;
    case 8: 
      var $30=$1;
      var $31=(($30+20)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32+4)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=(($34+24)|0);
      var $36=HEAP32[(($35)>>2)];
      var $37=$1;
      var $38=(($37+20)|0);
      var $39=HEAP32[(($38)>>2)];
      FUNCTION_TABLE[$36]($39);
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      var $45=$1;
      var $46=(($45+36)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=(($47)|(0))==0;
      if ($48) { label = 14; break; } else { label = 15; break; }
    case 14: 
      label = 21; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $52=$1;
      var $53=(($52+36)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=(($54)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=((($56)-(1))|0);
      HEAP32[(($55)>>2)]=$57;
      var $58=(($57)|(0))!=0;
      if ($58) { label = 17; break; } else { label = 18; break; }
    case 17: 
      label = 19; break;
    case 18: 
      var $61=$1;
      var $62=(($61+36)|0);
      var $63=HEAP32[(($62)>>2)];
      var $64=(($63+4)|0);
      var $65=HEAP32[(($64)>>2)];
      var $66=(($65+24)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=$1;
      var $69=(($68+36)|0);
      var $70=HEAP32[(($69)>>2)];
      FUNCTION_TABLE[$67]($70);
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      label = 21; break;
    case 21: 
      label = 22; break;
    case 22: 
      var $75=$1;
      var $76=$75;
      var $77=(($76+4)|0);
      var $78=HEAP32[(($77)>>2)];
      var $79=(($78+160)|0);
      var $80=HEAP32[(($79)>>2)];
      var $81=$1;
      var $82=$81;
      FUNCTION_TABLE[$80]($82);
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamreader_traverse($self, $visit, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $vret;
      var $vret1;
      $2=$self;
      $3=$visit;
      $4=$arg;
      var $5=$2;
      var $6=(($5+20)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)>>>(0)) < 1;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+20)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=3 < (($12)>>>(0));
      if ($13) { label = 3; break; } else { label = 10; break; }
    case 3: 
      label = 4; break;
    case 4: 
      var $16=$2;
      var $17=(($16+20)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18)|(0))!=0;
      if ($19) { label = 5; break; } else { label = 8; break; }
    case 5: 
      var $21=$3;
      var $22=$2;
      var $23=(($22+20)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$4;
      var $26=FUNCTION_TABLE[$21]($24, $25);
      $vret=$26;
      var $27=$vret;
      var $28=(($27)|(0))!=0;
      if ($28) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $30=$vret;
      $1=$30;
      label = 17; break;
    case 7: 
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $36=$2;
      var $37=(($36+36)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=(($38)|(0))!=0;
      if ($39) { label = 12; break; } else { label = 15; break; }
    case 12: 
      var $41=$3;
      var $42=$2;
      var $43=(($42+36)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=$4;
      var $46=FUNCTION_TABLE[$41]($44, $45);
      $vret1=$46;
      var $47=$vret1;
      var $48=(($47)|(0))!=0;
      if ($48) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $50=$vret1;
      $1=$50;
      label = 17; break;
    case 14: 
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      $1=0;
      label = 17; break;
    case 17: 
      var $55=$1;
      return $55;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamreader_new($type, $args, $kwds) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $self;
      var $stream=__stackBase__;
      var $codec;
      var $errors=(__stackBase__)+(4);
      $2=$type;
      $3=$args;
      $4=$kwds;
      $codec=0;
      HEAP32[(($errors)>>2)]=0;
      var $5=$3;
      var $6=$4;
      var $7=__PyArg_ParseTupleAndKeywords_SizeT($5, $6, ((__str40)|0), ((_streamkwarglist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$stream,HEAP32[(((tempInt)+(4))>>2)]=$errors,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 41; break;
    case 3: 
      var $11=$2;
      var $12=(($11+152)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=$2;
      var $15=FUNCTION_TABLE[$13]($14, 0);
      var $16=$15;
      $self=$16;
      var $17=$self;
      var $18=(($17)|(0))==0;
      if ($18) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 41; break;
    case 5: 
      var $21=$2;
      var $22=$21;
      var $23=_PyObject_GetAttrString($22, ((__str28)|0));
      $codec=$23;
      var $24=$codec;
      var $25=(($24)|(0))==0;
      if ($25) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 20; break;
    case 7: 
      var $28=$codec;
      var $29=(($28+4)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=(($30)|(0))==((_MultibyteCodec_Type)|(0));
      if ($31) { label = 9; break; } else { label = 8; break; }
    case 8: 
      var $33=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($33, ((__str29)|0));
      label = 20; break;
    case 9: 
      var $35=$codec;
      var $36=$35;
      var $37=(($36+8)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=$self;
      var $40=(($39+8)|0);
      HEAP32[(($40)>>2)]=$38;
      var $41=HEAP32[(($stream)>>2)];
      var $42=$self;
      var $43=(($42+36)|0);
      HEAP32[(($43)>>2)]=$41;
      var $44=HEAP32[(($stream)>>2)];
      var $45=(($44)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=((($46)+(1))|0);
      HEAP32[(($45)>>2)]=$47;
      var $48=$self;
      var $49=(($48+32)|0);
      HEAP32[(($49)>>2)]=0;
      var $50=HEAP32[(($errors)>>2)];
      var $51=_internal_error_callback($50);
      var $52=$self;
      var $53=(($52+20)|0);
      HEAP32[(($53)>>2)]=$51;
      var $54=$self;
      var $55=(($54+20)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=(($56)|(0))==0;
      if ($57) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 20; break;
    case 11: 
      var $60=$self;
      var $61=(($60+8)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=(($62+28)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=(($64)|(0))!=0;
      if ($65) { label = 12; break; } else { label = 14; break; }
    case 12: 
      var $67=$self;
      var $68=(($67+8)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=(($69+28)|0);
      var $71=HEAP32[(($70)>>2)];
      var $72=$self;
      var $73=(($72+12)|0);
      var $74=$self;
      var $75=(($74+8)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=(($76+4)|0);
      var $78=HEAP32[(($77)>>2)];
      var $79=FUNCTION_TABLE[$71]($73, $78);
      var $80=(($79)|(0))!=0;
      if ($80) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 20; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $84=$codec;
      var $85=(($84)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=((($86)-(1))|0);
      HEAP32[(($85)>>2)]=$87;
      var $88=(($87)|(0))!=0;
      if ($88) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 18; break;
    case 17: 
      var $91=$codec;
      var $92=(($91+4)|0);
      var $93=HEAP32[(($92)>>2)];
      var $94=(($93+24)|0);
      var $95=HEAP32[(($94)>>2)];
      var $96=$codec;
      FUNCTION_TABLE[$95]($96);
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      var $99=$self;
      var $100=$99;
      $1=$100;
      label = 41; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $103=$self;
      var $104=(($103)|(0))==0;
      if ($104) { label = 22; break; } else { label = 23; break; }
    case 22: 
      label = 29; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $108=$self;
      var $109=$108;
      var $110=(($109)|0);
      var $111=HEAP32[(($110)>>2)];
      var $112=((($111)-(1))|0);
      HEAP32[(($110)>>2)]=$112;
      var $113=(($112)|(0))!=0;
      if ($113) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 27; break;
    case 26: 
      var $116=$self;
      var $117=$116;
      var $118=(($117+4)|0);
      var $119=HEAP32[(($118)>>2)];
      var $120=(($119+24)|0);
      var $121=HEAP32[(($120)>>2)];
      var $122=$self;
      var $123=$122;
      FUNCTION_TABLE[$121]($123);
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      label = 30; break;
    case 30: 
      label = 31; break;
    case 31: 
      var $129=$codec;
      var $130=(($129)|(0))==0;
      if ($130) { label = 32; break; } else { label = 33; break; }
    case 32: 
      label = 39; break;
    case 33: 
      label = 34; break;
    case 34: 
      var $134=$codec;
      var $135=(($134)|0);
      var $136=HEAP32[(($135)>>2)];
      var $137=((($136)-(1))|0);
      HEAP32[(($135)>>2)]=$137;
      var $138=(($137)|(0))!=0;
      if ($138) { label = 35; break; } else { label = 36; break; }
    case 35: 
      label = 37; break;
    case 36: 
      var $141=$codec;
      var $142=(($141+4)|0);
      var $143=HEAP32[(($142)>>2)];
      var $144=(($143+24)|0);
      var $145=HEAP32[(($144)>>2)];
      var $146=$codec;
      FUNCTION_TABLE[$145]($146);
      label = 37; break;
    case 37: 
      label = 38; break;
    case 38: 
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      $1=0;
      label = 41; break;
    case 41: 
      var $152=$1;
      STACKTOP = __stackBase__;
      return $152;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamreader_read($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $sizeobj=__stackBase__;
      var $size;
      $2=$self;
      $3=$args;
      HEAP32[(($sizeobj)>>2)]=0;
      var $4=$3;
      var $5=_PyArg_UnpackTuple($4, ((__str41)|0), 0, 1, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$sizeobj,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 11; break;
    case 3: 
      var $9=HEAP32[(($sizeobj)>>2)];
      var $10=(($9)|(0))==((__Py_NoneStruct)|(0));
      if ($10) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $12=HEAP32[(($sizeobj)>>2)];
      var $13=(($12)|(0))==0;
      if ($13) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $size=-1;
      label = 10; break;
    case 6: 
      var $16=HEAP32[(($sizeobj)>>2)];
      var $17=(($16+4)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18+84)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=$20 & 8388608;
      var $22=(($21)|(0))!=0;
      if ($22) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $24=HEAP32[(($sizeobj)>>2)];
      var $25=_PyInt_AsSsize_t($24);
      $size=$25;
      label = 9; break;
    case 8: 
      var $27=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($27, ((__str44)|0));
      $1=0;
      label = 11; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $30=$2;
      var $31=$size;
      var $32=_mbstreamreader_iread($30, ((__str41)|0), $31);
      $1=$32;
      label = 11; break;
    case 11: 
      var $34=$1;
      STACKTOP = __stackBase__;
      return $34;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamreader_readline($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $sizeobj=__stackBase__;
      var $size;
      $2=$self;
      $3=$args;
      HEAP32[(($sizeobj)>>2)]=0;
      var $4=$3;
      var $5=_PyArg_UnpackTuple($4, ((__str42)|0), 0, 1, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$sizeobj,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 11; break;
    case 3: 
      var $9=HEAP32[(($sizeobj)>>2)];
      var $10=(($9)|(0))==((__Py_NoneStruct)|(0));
      if ($10) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $12=HEAP32[(($sizeobj)>>2)];
      var $13=(($12)|(0))==0;
      if ($13) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $size=-1;
      label = 10; break;
    case 6: 
      var $16=HEAP32[(($sizeobj)>>2)];
      var $17=(($16+4)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18+84)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=$20 & 8388608;
      var $22=(($21)|(0))!=0;
      if ($22) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $24=HEAP32[(($sizeobj)>>2)];
      var $25=_PyInt_AsSsize_t($24);
      $size=$25;
      label = 9; break;
    case 8: 
      var $27=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($27, ((__str44)|0));
      $1=0;
      label = 11; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $30=$2;
      var $31=$size;
      var $32=_mbstreamreader_iread($30, ((__str42)|0), $31);
      $1=$32;
      label = 11; break;
    case 11: 
      var $34=$1;
      STACKTOP = __stackBase__;
      return $34;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamreader_readlines($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $sizehintobj=__stackBase__;
      var $r;
      var $sr;
      var $sizehint;
      $2=$self;
      $3=$args;
      HEAP32[(($sizehintobj)>>2)]=0;
      var $4=$3;
      var $5=_PyArg_UnpackTuple($4, ((__str43)|0), 0, 1, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$sizehintobj,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 18; break;
    case 3: 
      var $9=HEAP32[(($sizehintobj)>>2)];
      var $10=(($9)|(0))==((__Py_NoneStruct)|(0));
      if ($10) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $12=HEAP32[(($sizehintobj)>>2)];
      var $13=(($12)|(0))==0;
      if ($13) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $sizehint=-1;
      label = 10; break;
    case 6: 
      var $16=HEAP32[(($sizehintobj)>>2)];
      var $17=(($16+4)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18+84)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=$20 & 8388608;
      var $22=(($21)|(0))!=0;
      if ($22) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $24=HEAP32[(($sizehintobj)>>2)];
      var $25=_PyInt_AsSsize_t($24);
      $sizehint=$25;
      label = 9; break;
    case 8: 
      var $27=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($27, ((__str44)|0));
      $1=0;
      label = 18; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $30=$2;
      var $31=$sizehint;
      var $32=_mbstreamreader_iread($30, ((__str41)|0), $31);
      $r=$32;
      var $33=$r;
      var $34=(($33)|(0))==0;
      if ($34) { label = 11; break; } else { label = 12; break; }
    case 11: 
      $1=0;
      label = 18; break;
    case 12: 
      var $37=$r;
      var $38=_PyUnicodeUCS2_Splitlines($37, 1);
      $sr=$38;
      label = 13; break;
    case 13: 
      var $40=$r;
      var $41=(($40)|0);
      var $42=HEAP32[(($41)>>2)];
      var $43=((($42)-(1))|0);
      HEAP32[(($41)>>2)]=$43;
      var $44=(($43)|(0))!=0;
      if ($44) { label = 14; break; } else { label = 15; break; }
    case 14: 
      label = 16; break;
    case 15: 
      var $47=$r;
      var $48=(($47+4)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=(($49+24)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=$r;
      FUNCTION_TABLE[$51]($52);
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $55=$sr;
      $1=$55;
      label = 18; break;
    case 18: 
      var $57=$1;
      STACKTOP = __stackBase__;
      return $57;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamreader_reset($self) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$self;
      var $3=$2;
      var $4=(($3+8)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5+32)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))!=0;
      if ($8) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+8)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12+32)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=$2;
      var $16=(($15+12)|0);
      var $17=$2;
      var $18=(($17+8)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=(($19+4)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=FUNCTION_TABLE[$14]($16, $21);
      var $23=(($22)|(0))!=0;
      if ($23) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 5; break;
    case 4: 
      var $26=$2;
      var $27=(($26+32)|0);
      HEAP32[(($27)>>2)]=0;
      var $28=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $29=((($28)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$29;
      $1=__Py_NoneStruct;
      label = 5; break;
    case 5: 
      var $31=$1;
      return $31;
    default: assert(0, "bad label: " + label);
  }
}
function _mbstreamreader_iread($self, $method, $sizehint) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 28)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $buf=__stackBase__;
      var $cres;
      var $rsize;
      var $finalsize;
      var $endoffile;
      var $ctr;
      var $ctrdata;
      $2=$self;
      $3=$method;
      $4=$sizehint;
      $finalsize=0;
      var $5=$4;
      var $6=(($5)|(0))==0;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $8=_PyUnicodeUCS2_FromUnicode(0, 0);
      $1=$8;
      label = 103; break;
    case 3: 
      var $10=(($buf+20)|0);
      HEAP32[(($10)>>2)]=0;
      var $11=(($buf+24)|0);
      HEAP32[(($11)>>2)]=0;
      $cres=0;
      label = 4; break;
    case 4: 
      var $13=$4;
      var $14=(($13)|(0)) < 0;
      if ($14) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $16=$2;
      var $17=(($16+36)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=$3;
      var $20=__PyObject_CallMethod_SizeT($18, $19, 0, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      $cres=$20;
      label = 7; break;
    case 6: 
      var $22=$2;
      var $23=(($22+36)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$3;
      var $26=$4;
      var $27=__PyObject_CallMethod_SizeT($24, $25, ((__str45)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$26,tempInt));
      $cres=$27;
      label = 7; break;
    case 7: 
      var $29=$cres;
      var $30=(($29)|(0))==0;
      if ($30) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 72; break;
    case 9: 
      var $33=$cres;
      var $34=(($33+4)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=(($35+84)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=$37 & 134217728;
      var $39=(($38)|(0))!=0;
      if ($39) { label = 11; break; } else { label = 10; break; }
    case 10: 
      var $41=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($41, ((__str46)|0));
      label = 72; break;
    case 11: 
      var $43=$cres;
      var $44=$43;
      var $45=(($44+8)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=(($46)|(0))==0;
      var $48=(($47)&(1));
      $endoffile=$48;
      var $49=$2;
      var $50=(($49+32)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=(($51)|(0)) > 0;
      if ($52) { label = 12; break; } else { label = 22; break; }
    case 12: 
      var $54=$cres;
      var $55=$54;
      var $56=(($55+8)|0);
      var $57=HEAP32[(($56)>>2)];
      var $58=$2;
      var $59=(($58+32)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=(((2147483647)-($60))|0);
      var $62=(($57)|(0)) > (($61)|(0));
      if ($62) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $64=_PyErr_NoMemory();
      label = 72; break;
    case 14: 
      var $66=$cres;
      var $67=$66;
      var $68=(($67+8)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=$2;
      var $71=(($70+32)|0);
      var $72=HEAP32[(($71)>>2)];
      var $73=((($69)+($72))|0);
      $rsize=$73;
      var $74=$rsize;
      var $75=_PyString_FromStringAndSize(0, $74);
      $ctr=$75;
      var $76=$ctr;
      var $77=(($76)|(0))==0;
      if ($77) { label = 15; break; } else { label = 16; break; }
    case 15: 
      label = 72; break;
    case 16: 
      var $80=$ctr;
      var $81=$80;
      var $82=(($81+20)|0);
      var $83=(($82)|0);
      $ctrdata=$83;
      var $84=$ctrdata;
      var $85=$2;
      var $86=(($85+24)|0);
      var $87=$86;
      var $88=$2;
      var $89=(($88+32)|0);
      var $90=HEAP32[(($89)>>2)];
      assert($90 % 1 === 0);_memcpy($84, $87, $90);
      var $91=$ctrdata;
      var $92=$2;
      var $93=(($92+32)|0);
      var $94=HEAP32[(($93)>>2)];
      var $95=(($91+$94)|0);
      var $96=$cres;
      var $97=$96;
      var $98=(($97+20)|0);
      var $99=$98;
      var $100=$cres;
      var $101=$100;
      var $102=(($101+8)|0);
      var $103=HEAP32[(($102)>>2)];
      assert($103 % 1 === 0);_memcpy($95, $99, $103);
      label = 17; break;
    case 17: 
      var $105=$cres;
      var $106=(($105)|0);
      var $107=HEAP32[(($106)>>2)];
      var $108=((($107)-(1))|0);
      HEAP32[(($106)>>2)]=$108;
      var $109=(($108)|(0))!=0;
      if ($109) { label = 18; break; } else { label = 19; break; }
    case 18: 
      label = 20; break;
    case 19: 
      var $112=$cres;
      var $113=(($112+4)|0);
      var $114=HEAP32[(($113)>>2)];
      var $115=(($114+24)|0);
      var $116=HEAP32[(($115)>>2)];
      var $117=$cres;
      FUNCTION_TABLE[$116]($117);
      label = 20; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $120=$ctr;
      $cres=$120;
      var $121=$2;
      var $122=(($121+32)|0);
      HEAP32[(($122)>>2)]=0;
      label = 22; break;
    case 22: 
      var $124=$cres;
      var $125=$124;
      var $126=(($125+8)|0);
      var $127=HEAP32[(($126)>>2)];
      $rsize=$127;
      var $128=$cres;
      var $129=$128;
      var $130=(($129+20)|0);
      var $131=(($130)|0);
      var $132=$rsize;
      var $133=_decoder_prepare_buffer($buf, $131, $132);
      var $134=(($133)|(0))!=0;
      if ($134) { label = 23; break; } else { label = 24; break; }
    case 23: 
      label = 72; break;
    case 24: 
      var $137=$rsize;
      var $138=(($137)|(0)) > 0;
      if ($138) { label = 25; break; } else { label = 27; break; }
    case 25: 
      var $140=$2;
      var $141=$140;
      var $142=_decoder_feed_buffer($141, $buf);
      var $143=(($142)|(0))!=0;
      if ($143) { label = 26; break; } else { label = 27; break; }
    case 26: 
      label = 72; break;
    case 27: 
      var $146=$endoffile;
      var $147=(($146)|(0))!=0;
      if ($147) { label = 29; break; } else { label = 28; break; }
    case 28: 
      var $149=$4;
      var $150=(($149)|(0)) < 0;
      if ($150) { label = 29; break; } else { label = 33; break; }
    case 29: 
      var $152=(($buf)|0);
      var $153=HEAP32[(($152)>>2)];
      var $154=(($buf+8)|0);
      var $155=HEAP32[(($154)>>2)];
      var $156=(($153)>>>(0)) < (($155)>>>(0));
      if ($156) { label = 30; break; } else { label = 32; break; }
    case 30: 
      var $158=$2;
      var $159=(($158+8)|0);
      var $160=HEAP32[(($159)>>2)];
      var $161=$2;
      var $162=(($161+12)|0);
      var $163=$2;
      var $164=(($163+20)|0);
      var $165=HEAP32[(($164)>>2)];
      var $166=_multibytecodec_decerror($160, $162, $buf, $165, -2);
      var $167=(($166)|(0))!=0;
      if ($167) { label = 31; break; } else { label = 32; break; }
    case 31: 
      label = 72; break;
    case 32: 
      label = 33; break;
    case 33: 
      var $171=(($buf)|0);
      var $172=HEAP32[(($171)>>2)];
      var $173=(($buf+8)|0);
      var $174=HEAP32[(($173)>>2)];
      var $175=(($172)>>>(0)) < (($174)>>>(0));
      if ($175) { label = 34; break; } else { label = 37; break; }
    case 34: 
      var $177=$2;
      var $178=$177;
      var $179=_decoder_append_pending($178, $buf);
      var $180=(($179)|(0))!=0;
      if ($180) { label = 35; break; } else { label = 36; break; }
    case 35: 
      label = 72; break;
    case 36: 
      label = 37; break;
    case 37: 
      var $184=(($buf+12)|0);
      var $185=HEAP32[(($184)>>2)];
      var $186=(($buf+24)|0);
      var $187=HEAP32[(($186)>>2)];
      var $188=$187;
      var $189=(($188+12)|0);
      var $190=HEAP32[(($189)>>2)];
      var $191=$185;
      var $192=$190;
      var $193=((($191)-($192))|0);
      var $194=((((($193)|(0)))/(2))&-1);
      $finalsize=$194;
      label = 38; break;
    case 38: 
      var $196=$cres;
      var $197=(($196)|0);
      var $198=HEAP32[(($197)>>2)];
      var $199=((($198)-(1))|0);
      HEAP32[(($197)>>2)]=$199;
      var $200=(($199)|(0))!=0;
      if ($200) { label = 39; break; } else { label = 40; break; }
    case 39: 
      label = 41; break;
    case 40: 
      var $203=$cres;
      var $204=(($203+4)|0);
      var $205=HEAP32[(($204)>>2)];
      var $206=(($205+24)|0);
      var $207=HEAP32[(($206)>>2)];
      var $208=$cres;
      FUNCTION_TABLE[$207]($208);
      label = 41; break;
    case 41: 
      label = 42; break;
    case 42: 
      $cres=0;
      var $211=$4;
      var $212=(($211)|(0)) < 0;
      if ($212) { label = 45; break; } else { label = 43; break; }
    case 43: 
      var $214=$finalsize;
      var $215=(($214)|(0))!=0;
      if ($215) { label = 45; break; } else { label = 44; break; }
    case 44: 
      var $217=$rsize;
      var $218=(($217)|(0))==0;
      if ($218) { label = 45; break; } else { label = 46; break; }
    case 45: 
      label = 47; break;
    case 46: 
      $4=1;
      label = 4; break;
    case 47: 
      var $222=$finalsize;
      var $223=(($buf+24)|0);
      var $224=HEAP32[(($223)>>2)];
      var $225=$224;
      var $226=(($225+8)|0);
      var $227=HEAP32[(($226)>>2)];
      var $228=(($222)|(0))!=(($227)|(0));
      if ($228) { label = 48; break; } else { label = 51; break; }
    case 48: 
      var $230=(($buf+24)|0);
      var $231=$finalsize;
      var $232=_PyUnicodeUCS2_Resize($230, $231);
      var $233=(($232)|(0))==-1;
      if ($233) { label = 49; break; } else { label = 50; break; }
    case 49: 
      label = 72; break;
    case 50: 
      label = 51; break;
    case 51: 
      label = 52; break;
    case 52: 
      var $238=$cres;
      var $239=(($238)|(0))==0;
      if ($239) { label = 53; break; } else { label = 54; break; }
    case 53: 
      label = 60; break;
    case 54: 
      label = 55; break;
    case 55: 
      var $243=$cres;
      var $244=(($243)|0);
      var $245=HEAP32[(($244)>>2)];
      var $246=((($245)-(1))|0);
      HEAP32[(($244)>>2)]=$246;
      var $247=(($246)|(0))!=0;
      if ($247) { label = 56; break; } else { label = 57; break; }
    case 56: 
      label = 58; break;
    case 57: 
      var $250=$cres;
      var $251=(($250+4)|0);
      var $252=HEAP32[(($251)>>2)];
      var $253=(($252+24)|0);
      var $254=HEAP32[(($253)>>2)];
      var $255=$cres;
      FUNCTION_TABLE[$254]($255);
      label = 58; break;
    case 58: 
      label = 59; break;
    case 59: 
      label = 60; break;
    case 60: 
      label = 61; break;
    case 61: 
      label = 62; break;
    case 62: 
      var $261=(($buf+20)|0);
      var $262=HEAP32[(($261)>>2)];
      var $263=(($262)|(0))==0;
      if ($263) { label = 63; break; } else { label = 64; break; }
    case 63: 
      label = 70; break;
    case 64: 
      label = 65; break;
    case 65: 
      var $267=(($buf+20)|0);
      var $268=HEAP32[(($267)>>2)];
      var $269=(($268)|0);
      var $270=HEAP32[(($269)>>2)];
      var $271=((($270)-(1))|0);
      HEAP32[(($269)>>2)]=$271;
      var $272=(($271)|(0))!=0;
      if ($272) { label = 66; break; } else { label = 67; break; }
    case 66: 
      label = 68; break;
    case 67: 
      var $275=(($buf+20)|0);
      var $276=HEAP32[(($275)>>2)];
      var $277=(($276+4)|0);
      var $278=HEAP32[(($277)>>2)];
      var $279=(($278+24)|0);
      var $280=HEAP32[(($279)>>2)];
      var $281=(($buf+20)|0);
      var $282=HEAP32[(($281)>>2)];
      FUNCTION_TABLE[$280]($282);
      label = 68; break;
    case 68: 
      label = 69; break;
    case 69: 
      label = 70; break;
    case 70: 
      label = 71; break;
    case 71: 
      var $287=(($buf+24)|0);
      var $288=HEAP32[(($287)>>2)];
      $1=$288;
      label = 103; break;
    case 72: 
      label = 73; break;
    case 73: 
      var $291=$cres;
      var $292=(($291)|(0))==0;
      if ($292) { label = 74; break; } else { label = 75; break; }
    case 74: 
      label = 81; break;
    case 75: 
      label = 76; break;
    case 76: 
      var $296=$cres;
      var $297=(($296)|0);
      var $298=HEAP32[(($297)>>2)];
      var $299=((($298)-(1))|0);
      HEAP32[(($297)>>2)]=$299;
      var $300=(($299)|(0))!=0;
      if ($300) { label = 77; break; } else { label = 78; break; }
    case 77: 
      label = 79; break;
    case 78: 
      var $303=$cres;
      var $304=(($303+4)|0);
      var $305=HEAP32[(($304)>>2)];
      var $306=(($305+24)|0);
      var $307=HEAP32[(($306)>>2)];
      var $308=$cres;
      FUNCTION_TABLE[$307]($308);
      label = 79; break;
    case 79: 
      label = 80; break;
    case 80: 
      label = 81; break;
    case 81: 
      label = 82; break;
    case 82: 
      label = 83; break;
    case 83: 
      var $314=(($buf+20)|0);
      var $315=HEAP32[(($314)>>2)];
      var $316=(($315)|(0))==0;
      if ($316) { label = 84; break; } else { label = 85; break; }
    case 84: 
      label = 91; break;
    case 85: 
      label = 86; break;
    case 86: 
      var $320=(($buf+20)|0);
      var $321=HEAP32[(($320)>>2)];
      var $322=(($321)|0);
      var $323=HEAP32[(($322)>>2)];
      var $324=((($323)-(1))|0);
      HEAP32[(($322)>>2)]=$324;
      var $325=(($324)|(0))!=0;
      if ($325) { label = 87; break; } else { label = 88; break; }
    case 87: 
      label = 89; break;
    case 88: 
      var $328=(($buf+20)|0);
      var $329=HEAP32[(($328)>>2)];
      var $330=(($329+4)|0);
      var $331=HEAP32[(($330)>>2)];
      var $332=(($331+24)|0);
      var $333=HEAP32[(($332)>>2)];
      var $334=(($buf+20)|0);
      var $335=HEAP32[(($334)>>2)];
      FUNCTION_TABLE[$333]($335);
      label = 89; break;
    case 89: 
      label = 90; break;
    case 90: 
      label = 91; break;
    case 91: 
      label = 92; break;
    case 92: 
      label = 93; break;
    case 93: 
      var $341=(($buf+24)|0);
      var $342=HEAP32[(($341)>>2)];
      var $343=(($342)|(0))==0;
      if ($343) { label = 94; break; } else { label = 95; break; }
    case 94: 
      label = 101; break;
    case 95: 
      label = 96; break;
    case 96: 
      var $347=(($buf+24)|0);
      var $348=HEAP32[(($347)>>2)];
      var $349=(($348)|0);
      var $350=HEAP32[(($349)>>2)];
      var $351=((($350)-(1))|0);
      HEAP32[(($349)>>2)]=$351;
      var $352=(($351)|(0))!=0;
      if ($352) { label = 97; break; } else { label = 98; break; }
    case 97: 
      label = 99; break;
    case 98: 
      var $355=(($buf+24)|0);
      var $356=HEAP32[(($355)>>2)];
      var $357=(($356+4)|0);
      var $358=HEAP32[(($357)>>2)];
      var $359=(($358+24)|0);
      var $360=HEAP32[(($359)>>2)];
      var $361=(($buf+24)|0);
      var $362=HEAP32[(($361)>>2)];
      FUNCTION_TABLE[$360]($362);
      label = 99; break;
    case 99: 
      label = 100; break;
    case 100: 
      label = 101; break;
    case 101: 
      label = 102; break;
    case 102: 
      $1=0;
      label = 103; break;
    case 103: 
      var $368=$1;
      STACKTOP = __stackBase__;
      return $368;
    default: assert(0, "bad label: " + label);
  }
}
function _decoder_prepare_buffer($buf, $data, $size) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      $2=$buf;
      $3=$data;
      $4=$size;
      var $5=$3;
      var $6=$2;
      var $7=(($6+4)|0);
      HEAP32[(($7)>>2)]=$5;
      var $8=$2;
      var $9=(($8)|0);
      HEAP32[(($9)>>2)]=$5;
      var $10=$2;
      var $11=(($10+4)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=$4;
      var $14=(($12+$13)|0);
      var $15=$2;
      var $16=(($15+8)|0);
      HEAP32[(($16)>>2)]=$14;
      var $17=$2;
      var $18=(($17+24)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=(($19)|(0))==0;
      if ($20) { label = 2; break; } else { label = 5; break; }
    case 2: 
      var $22=$4;
      var $23=_PyUnicodeUCS2_FromUnicode(0, $22);
      var $24=$2;
      var $25=(($24+24)|0);
      HEAP32[(($25)>>2)]=$23;
      var $26=$2;
      var $27=(($26+24)|0);
      var $28=HEAP32[(($27)>>2)];
      var $29=(($28)|(0))==0;
      if ($29) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=-1;
      label = 6; break;
    case 4: 
      var $32=$2;
      var $33=(($32+24)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=$34;
      var $36=(($35+12)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=$2;
      var $39=(($38+12)|0);
      HEAP32[(($39)>>2)]=$37;
      var $40=$2;
      var $41=(($40+12)|0);
      var $42=HEAP32[(($41)>>2)];
      var $43=$2;
      var $44=(($43+24)|0);
      var $45=HEAP32[(($44)>>2)];
      var $46=$45;
      var $47=(($46+8)|0);
      var $48=HEAP32[(($47)>>2)];
      var $49=(($42+($48<<1))|0);
      var $50=$2;
      var $51=(($50+16)|0);
      HEAP32[(($51)>>2)]=$49;
      label = 5; break;
    case 5: 
      $1=0;
      label = 6; break;
    case 6: 
      var $54=$1;
      return $54;
    default: assert(0, "bad label: " + label);
  }
}
function _mbidecoder_init($self, $args, $kwds) {
  var label = 0;
  var $1;
  var $2;
  var $3;
  $1=$self;
  $2=$args;
  $3=$kwds;
  return 0;
}
function _decoder_feed_buffer($ctx, $buf) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $inleft;
      var $outleft;
      var $r;
      $2=$ctx;
      $3=$buf;
      label = 2; break;
    case 2: 
      var $5=$3;
      var $6=(($5)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=$3;
      var $9=(($8+8)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($7)>>>(0)) < (($10)>>>(0));
      if ($11) { label = 3; break; } else { label = 10; break; }
    case 3: 
      var $13=$3;
      var $14=(($13+8)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=$3;
      var $17=(($16)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=$15;
      var $20=$18;
      var $21=((($19)-($20))|0);
      $inleft=$21;
      var $22=$3;
      var $23=(($22+16)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$3;
      var $26=(($25+12)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=$24;
      var $29=$27;
      var $30=((($28)-($29))|0);
      var $31=((((($30)|(0)))/(2))&-1);
      $outleft=$31;
      var $32=$2;
      var $33=(($32+8)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=(($34+24)|0);
      var $36=HEAP32[(($35)>>2)];
      var $37=$2;
      var $38=(($37+12)|0);
      var $39=$2;
      var $40=(($39+8)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=(($41+4)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=$3;
      var $45=(($44)|0);
      var $46=$inleft;
      var $47=$3;
      var $48=(($47+12)|0);
      var $49=$outleft;
      var $50=FUNCTION_TABLE[$36]($38, $43, $45, $46, $48, $49);
      $r=$50;
      var $51=$r;
      var $52=(($51)|(0))==0;
      if ($52) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $54=$r;
      var $55=(($54)|(0))==-2;
      if ($55) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 10; break;
    case 6: 
      var $58=$2;
      var $59=(($58+8)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=$2;
      var $62=(($61+12)|0);
      var $63=$3;
      var $64=$2;
      var $65=(($64+20)|0);
      var $66=HEAP32[(($65)>>2)];
      var $67=$r;
      var $68=_multibytecodec_decerror($60, $62, $63, $66, $67);
      var $69=(($68)|(0))!=0;
      if ($69) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=-1;
      label = 11; break;
    case 8: 
      label = 9; break;
    case 9: 
      label = 2; break;
    case 10: 
      $1=0;
      label = 11; break;
    case 11: 
      var $75=$1;
      return $75;
    default: assert(0, "bad label: " + label);
  }
}
function _decoder_append_pending($ctx, $buf) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $npendings;
      $2=$ctx;
      $3=$buf;
      var $4=$3;
      var $5=(($4+8)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=$3;
      var $8=(($7)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=$6;
      var $11=$9;
      var $12=((($10)-($11))|0);
      $npendings=$12;
      var $13=$npendings;
      var $14=$2;
      var $15=(($14+32)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=((($13)+($16))|0);
      var $18=(($17)|(0)) > 8;
      if ($18) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $20=$npendings;
      var $21=$2;
      var $22=(($21+32)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(((2147483647)-($23))|0);
      var $25=(($20)|(0)) > (($24)|(0));
      if ($25) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $27=HEAP32[((_PyExc_UnicodeError)>>2)];
      _PyErr_SetString($27, ((__str38)|0));
      $1=-1;
      label = 5; break;
    case 4: 
      var $29=$2;
      var $30=(($29+24)|0);
      var $31=(($30)|0);
      var $32=$2;
      var $33=(($32+32)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=(($31+$34)|0);
      var $36=$3;
      var $37=(($36)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=$npendings;
      assert($39 % 1 === 0);_memcpy($35, $38, $39);
      var $40=$npendings;
      var $41=$2;
      var $42=(($41+32)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=((($43)+($40))|0);
      HEAP32[(($42)>>2)]=$44;
      $1=0;
      label = 5; break;
    case 5: 
      var $46=$1;
      return $46;
    default: assert(0, "bad label: " + label);
  }
}
function _mbidecoder_dealloc($self) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      $1=$self;
      var $2=$1;
      var $3=$2;
      _PyObject_GC_UnTrack($3);
      label = 2; break;
    case 2: 
      var $5=$1;
      var $6=(($5+20)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 11; break; }
    case 3: 
      var $10=$1;
      var $11=(($10+20)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12)>>>(0)) < 1;
      if ($13) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $15=$1;
      var $16=(($15+20)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=3 < (($17)>>>(0));
      if ($18) { label = 5; break; } else { label = 11; break; }
    case 5: 
      label = 6; break;
    case 6: 
      var $21=$1;
      var $22=(($21+20)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=((($25)-(1))|0);
      HEAP32[(($24)>>2)]=$26;
      var $27=(($26)|(0))!=0;
      if ($27) { label = 7; break; } else { label = 8; break; }
    case 7: 
      label = 9; break;
    case 8: 
      var $30=$1;
      var $31=(($30+20)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32+4)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=(($34+24)|0);
      var $36=HEAP32[(($35)>>2)];
      var $37=$1;
      var $38=(($37+20)|0);
      var $39=HEAP32[(($38)>>2)];
      FUNCTION_TABLE[$36]($39);
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $44=$1;
      var $45=$44;
      var $46=(($45+4)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=(($47+160)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=$1;
      var $51=$50;
      FUNCTION_TABLE[$49]($51);
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _mbidecoder_traverse($self, $visit, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $vret;
      $2=$self;
      $3=$visit;
      $4=$arg;
      var $5=$2;
      var $6=(($5+20)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)>>>(0)) < 1;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+20)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=3 < (($12)>>>(0));
      if ($13) { label = 3; break; } else { label = 10; break; }
    case 3: 
      label = 4; break;
    case 4: 
      var $16=$2;
      var $17=(($16+20)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18)|(0))!=0;
      if ($19) { label = 5; break; } else { label = 8; break; }
    case 5: 
      var $21=$3;
      var $22=$2;
      var $23=(($22+20)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$4;
      var $26=FUNCTION_TABLE[$21]($24, $25);
      $vret=$26;
      var $27=$vret;
      var $28=(($27)|(0))!=0;
      if ($28) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $30=$vret;
      $1=$30;
      label = 11; break;
    case 7: 
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      $1=0;
      label = 11; break;
    case 11: 
      var $36=$1;
      return $36;
    default: assert(0, "bad label: " + label);
  }
}
function _mbidecoder_new($type, $args, $kwds) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $self;
      var $codec;
      var $errors=__stackBase__;
      $2=$type;
      $3=$args;
      $4=$kwds;
      $codec=0;
      HEAP32[(($errors)>>2)]=0;
      var $5=$3;
      var $6=$4;
      var $7=__PyArg_ParseTupleAndKeywords_SizeT($5, $6, ((__str48)|0), ((_incnewkwarglist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$errors,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 41; break;
    case 3: 
      var $11=$2;
      var $12=(($11+152)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=$2;
      var $15=FUNCTION_TABLE[$13]($14, 0);
      var $16=$15;
      $self=$16;
      var $17=$self;
      var $18=(($17)|(0))==0;
      if ($18) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 41; break;
    case 5: 
      var $21=$2;
      var $22=$21;
      var $23=_PyObject_GetAttrString($22, ((__str28)|0));
      $codec=$23;
      var $24=$codec;
      var $25=(($24)|(0))==0;
      if ($25) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 20; break;
    case 7: 
      var $28=$codec;
      var $29=(($28+4)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=(($30)|(0))==((_MultibyteCodec_Type)|(0));
      if ($31) { label = 9; break; } else { label = 8; break; }
    case 8: 
      var $33=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($33, ((__str29)|0));
      label = 20; break;
    case 9: 
      var $35=$codec;
      var $36=$35;
      var $37=(($36+8)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=$self;
      var $40=(($39+8)|0);
      HEAP32[(($40)>>2)]=$38;
      var $41=$self;
      var $42=(($41+32)|0);
      HEAP32[(($42)>>2)]=0;
      var $43=HEAP32[(($errors)>>2)];
      var $44=_internal_error_callback($43);
      var $45=$self;
      var $46=(($45+20)|0);
      HEAP32[(($46)>>2)]=$44;
      var $47=$self;
      var $48=(($47+20)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=(($49)|(0))==0;
      if ($50) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 20; break;
    case 11: 
      var $53=$self;
      var $54=(($53+8)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=(($55+28)|0);
      var $57=HEAP32[(($56)>>2)];
      var $58=(($57)|(0))!=0;
      if ($58) { label = 12; break; } else { label = 14; break; }
    case 12: 
      var $60=$self;
      var $61=(($60+8)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=(($62+28)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=$self;
      var $66=(($65+12)|0);
      var $67=$self;
      var $68=(($67+8)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=(($69+4)|0);
      var $71=HEAP32[(($70)>>2)];
      var $72=FUNCTION_TABLE[$64]($66, $71);
      var $73=(($72)|(0))!=0;
      if ($73) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 20; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $77=$codec;
      var $78=(($77)|0);
      var $79=HEAP32[(($78)>>2)];
      var $80=((($79)-(1))|0);
      HEAP32[(($78)>>2)]=$80;
      var $81=(($80)|(0))!=0;
      if ($81) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 18; break;
    case 17: 
      var $84=$codec;
      var $85=(($84+4)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=(($86+24)|0);
      var $88=HEAP32[(($87)>>2)];
      var $89=$codec;
      FUNCTION_TABLE[$88]($89);
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      var $92=$self;
      var $93=$92;
      $1=$93;
      label = 41; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $96=$self;
      var $97=(($96)|(0))==0;
      if ($97) { label = 22; break; } else { label = 23; break; }
    case 22: 
      label = 29; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $101=$self;
      var $102=$101;
      var $103=(($102)|0);
      var $104=HEAP32[(($103)>>2)];
      var $105=((($104)-(1))|0);
      HEAP32[(($103)>>2)]=$105;
      var $106=(($105)|(0))!=0;
      if ($106) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 27; break;
    case 26: 
      var $109=$self;
      var $110=$109;
      var $111=(($110+4)|0);
      var $112=HEAP32[(($111)>>2)];
      var $113=(($112+24)|0);
      var $114=HEAP32[(($113)>>2)];
      var $115=$self;
      var $116=$115;
      FUNCTION_TABLE[$114]($116);
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      label = 30; break;
    case 30: 
      label = 31; break;
    case 31: 
      var $122=$codec;
      var $123=(($122)|(0))==0;
      if ($123) { label = 32; break; } else { label = 33; break; }
    case 32: 
      label = 39; break;
    case 33: 
      label = 34; break;
    case 34: 
      var $127=$codec;
      var $128=(($127)|0);
      var $129=HEAP32[(($128)>>2)];
      var $130=((($129)-(1))|0);
      HEAP32[(($128)>>2)]=$130;
      var $131=(($130)|(0))!=0;
      if ($131) { label = 35; break; } else { label = 36; break; }
    case 35: 
      label = 37; break;
    case 36: 
      var $134=$codec;
      var $135=(($134+4)|0);
      var $136=HEAP32[(($135)>>2)];
      var $137=(($136+24)|0);
      var $138=HEAP32[(($137)>>2)];
      var $139=$codec;
      FUNCTION_TABLE[$138]($139);
      label = 37; break;
    case 37: 
      label = 38; break;
    case 38: 
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      $1=0;
      label = 41; break;
    case 41: 
      var $145=$1;
      STACKTOP = __stackBase__;
      return $145;
    default: assert(0, "bad label: " + label);
  }
}
function _mbidecoder_decode($self, $args, $kwargs) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 84)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $buf=__stackBase__;
      var $data;
      var $wdata;
      var $pdata=(__stackBase__)+(28);
      var $wsize;
      var $finalsize;
      var $size;
      var $origpending;
      var $final=(__stackBase__)+(80);
      $2=$self;
      $3=$args;
      $4=$kwargs;
      $wdata=0;
      $finalsize=0;
      HEAP32[(($final)>>2)]=0;
      var $5=$3;
      var $6=$4;
      var $7=__PyArg_ParseTupleAndKeywords_SizeT($5, $6, ((__str49)|0), ((_incrementalkwarglist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$pdata,HEAP32[(((tempInt)+(4))>>2)]=$final,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 64; break;
    case 3: 
      var $11=(($pdata)|0);
      var $12=HEAP32[(($11)>>2)];
      $data=$12;
      var $13=(($pdata+8)|0);
      var $14=HEAP32[(($13)>>2)];
      $size=$14;
      var $15=(($buf+20)|0);
      HEAP32[(($15)>>2)]=0;
      var $16=(($buf+24)|0);
      HEAP32[(($16)>>2)]=0;
      var $17=$2;
      var $18=(($17+32)|0);
      var $19=HEAP32[(($18)>>2)];
      $origpending=$19;
      var $20=$2;
      var $21=(($20+32)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=(($22)|(0))==0;
      if ($23) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $25=$size;
      $wsize=$25;
      var $26=$data;
      $wdata=$26;
      label = 10; break;
    case 5: 
      var $28=$size;
      var $29=$2;
      var $30=(($29+32)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=(((2147483647)-($31))|0);
      var $33=(($28)|(0)) > (($32)|(0));
      if ($33) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $35=_PyErr_NoMemory();
      label = 40; break;
    case 7: 
      var $37=$size;
      var $38=$2;
      var $39=(($38+32)|0);
      var $40=HEAP32[(($39)>>2)];
      var $41=((($37)+($40))|0);
      $wsize=$41;
      var $42=$wsize;
      var $43=_PyMem_Malloc($42);
      $wdata=$43;
      var $44=$wdata;
      var $45=(($44)|(0))==0;
      if ($45) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 40; break;
    case 9: 
      var $48=$wdata;
      var $49=$2;
      var $50=(($49+24)|0);
      var $51=$50;
      var $52=$2;
      var $53=(($52+32)|0);
      var $54=HEAP32[(($53)>>2)];
      assert($54 % 1 === 0);_memcpy($48, $51, $54);
      var $55=$wdata;
      var $56=$2;
      var $57=(($56+32)|0);
      var $58=HEAP32[(($57)>>2)];
      var $59=(($55+$58)|0);
      var $60=$data;
      var $61=$size;
      assert($61 % 1 === 0);_memcpy($59, $60, $61);
      var $62=$2;
      var $63=(($62+32)|0);
      HEAP32[(($63)>>2)]=0;
      label = 10; break;
    case 10: 
      var $65=$wdata;
      var $66=$wsize;
      var $67=_decoder_prepare_buffer($buf, $65, $66);
      var $68=(($67)|(0))!=0;
      if ($68) { label = 11; break; } else { label = 12; break; }
    case 11: 
      label = 40; break;
    case 12: 
      var $71=$2;
      var $72=$71;
      var $73=_decoder_feed_buffer($72, $buf);
      var $74=(($73)|(0))!=0;
      if ($74) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 40; break;
    case 14: 
      var $77=HEAP32[(($final)>>2)];
      var $78=(($77)|(0))!=0;
      if ($78) { label = 15; break; } else { label = 19; break; }
    case 15: 
      var $80=(($buf)|0);
      var $81=HEAP32[(($80)>>2)];
      var $82=(($buf+8)|0);
      var $83=HEAP32[(($82)>>2)];
      var $84=(($81)>>>(0)) < (($83)>>>(0));
      if ($84) { label = 16; break; } else { label = 19; break; }
    case 16: 
      var $86=$2;
      var $87=(($86+8)|0);
      var $88=HEAP32[(($87)>>2)];
      var $89=$2;
      var $90=(($89+12)|0);
      var $91=$2;
      var $92=(($91+20)|0);
      var $93=HEAP32[(($92)>>2)];
      var $94=_multibytecodec_decerror($88, $90, $buf, $93, -2);
      var $95=(($94)|(0))!=0;
      if ($95) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $97=$2;
      var $98=(($97+24)|0);
      var $99=$98;
      var $100=$wdata;
      var $101=$origpending;
      assert($101 % 1 === 0);_memcpy($99, $100, $101);
      var $102=$origpending;
      var $103=$2;
      var $104=(($103+32)|0);
      HEAP32[(($104)>>2)]=$102;
      label = 40; break;
    case 18: 
      label = 19; break;
    case 19: 
      var $107=(($buf)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=(($buf+8)|0);
      var $110=HEAP32[(($109)>>2)];
      var $111=(($108)>>>(0)) < (($110)>>>(0));
      if ($111) { label = 20; break; } else { label = 23; break; }
    case 20: 
      var $113=$2;
      var $114=$113;
      var $115=_decoder_append_pending($114, $buf);
      var $116=(($115)|(0))!=0;
      if ($116) { label = 21; break; } else { label = 22; break; }
    case 21: 
      label = 40; break;
    case 22: 
      label = 23; break;
    case 23: 
      var $120=(($buf+12)|0);
      var $121=HEAP32[(($120)>>2)];
      var $122=(($buf+24)|0);
      var $123=HEAP32[(($122)>>2)];
      var $124=$123;
      var $125=(($124+12)|0);
      var $126=HEAP32[(($125)>>2)];
      var $127=$121;
      var $128=$126;
      var $129=((($127)-($128))|0);
      var $130=((((($129)|(0)))/(2))&-1);
      $finalsize=$130;
      var $131=$finalsize;
      var $132=(($buf+24)|0);
      var $133=HEAP32[(($132)>>2)];
      var $134=$133;
      var $135=(($134+8)|0);
      var $136=HEAP32[(($135)>>2)];
      var $137=(($131)|(0))!=(($136)|(0));
      if ($137) { label = 24; break; } else { label = 27; break; }
    case 24: 
      var $139=(($buf+24)|0);
      var $140=$finalsize;
      var $141=_PyUnicodeUCS2_Resize($139, $140);
      var $142=(($141)|(0))==-1;
      if ($142) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 40; break;
    case 26: 
      label = 27; break;
    case 27: 
      _PyBuffer_Release($pdata);
      var $146=$wdata;
      var $147=$data;
      var $148=(($146)|(0))!=(($147)|(0));
      if ($148) { label = 28; break; } else { label = 29; break; }
    case 28: 
      var $150=$wdata;
      _PyMem_Free($150);
      label = 29; break;
    case 29: 
      label = 30; break;
    case 30: 
      var $153=(($buf+20)|0);
      var $154=HEAP32[(($153)>>2)];
      var $155=(($154)|(0))==0;
      if ($155) { label = 31; break; } else { label = 32; break; }
    case 31: 
      label = 38; break;
    case 32: 
      label = 33; break;
    case 33: 
      var $159=(($buf+20)|0);
      var $160=HEAP32[(($159)>>2)];
      var $161=(($160)|0);
      var $162=HEAP32[(($161)>>2)];
      var $163=((($162)-(1))|0);
      HEAP32[(($161)>>2)]=$163;
      var $164=(($163)|(0))!=0;
      if ($164) { label = 34; break; } else { label = 35; break; }
    case 34: 
      label = 36; break;
    case 35: 
      var $167=(($buf+20)|0);
      var $168=HEAP32[(($167)>>2)];
      var $169=(($168+4)|0);
      var $170=HEAP32[(($169)>>2)];
      var $171=(($170+24)|0);
      var $172=HEAP32[(($171)>>2)];
      var $173=(($buf+20)|0);
      var $174=HEAP32[(($173)>>2)];
      FUNCTION_TABLE[$172]($174);
      label = 36; break;
    case 36: 
      label = 37; break;
    case 37: 
      label = 38; break;
    case 38: 
      label = 39; break;
    case 39: 
      var $179=(($buf+24)|0);
      var $180=HEAP32[(($179)>>2)];
      $1=$180;
      label = 64; break;
    case 40: 
      _PyBuffer_Release($pdata);
      var $182=$wdata;
      var $183=(($182)|(0))!=0;
      if ($183) { label = 41; break; } else { label = 43; break; }
    case 41: 
      var $185=$wdata;
      var $186=$data;
      var $187=(($185)|(0))!=(($186)|(0));
      if ($187) { label = 42; break; } else { label = 43; break; }
    case 42: 
      var $189=$wdata;
      _PyMem_Free($189);
      label = 43; break;
    case 43: 
      label = 44; break;
    case 44: 
      var $192=(($buf+20)|0);
      var $193=HEAP32[(($192)>>2)];
      var $194=(($193)|(0))==0;
      if ($194) { label = 45; break; } else { label = 46; break; }
    case 45: 
      label = 52; break;
    case 46: 
      label = 47; break;
    case 47: 
      var $198=(($buf+20)|0);
      var $199=HEAP32[(($198)>>2)];
      var $200=(($199)|0);
      var $201=HEAP32[(($200)>>2)];
      var $202=((($201)-(1))|0);
      HEAP32[(($200)>>2)]=$202;
      var $203=(($202)|(0))!=0;
      if ($203) { label = 48; break; } else { label = 49; break; }
    case 48: 
      label = 50; break;
    case 49: 
      var $206=(($buf+20)|0);
      var $207=HEAP32[(($206)>>2)];
      var $208=(($207+4)|0);
      var $209=HEAP32[(($208)>>2)];
      var $210=(($209+24)|0);
      var $211=HEAP32[(($210)>>2)];
      var $212=(($buf+20)|0);
      var $213=HEAP32[(($212)>>2)];
      FUNCTION_TABLE[$211]($213);
      label = 50; break;
    case 50: 
      label = 51; break;
    case 51: 
      label = 52; break;
    case 52: 
      label = 53; break;
    case 53: 
      label = 54; break;
    case 54: 
      var $219=(($buf+24)|0);
      var $220=HEAP32[(($219)>>2)];
      var $221=(($220)|(0))==0;
      if ($221) { label = 55; break; } else { label = 56; break; }
    case 55: 
      label = 62; break;
    case 56: 
      label = 57; break;
    case 57: 
      var $225=(($buf+24)|0);
      var $226=HEAP32[(($225)>>2)];
      var $227=(($226)|0);
      var $228=HEAP32[(($227)>>2)];
      var $229=((($228)-(1))|0);
      HEAP32[(($227)>>2)]=$229;
      var $230=(($229)|(0))!=0;
      if ($230) { label = 58; break; } else { label = 59; break; }
    case 58: 
      label = 60; break;
    case 59: 
      var $233=(($buf+24)|0);
      var $234=HEAP32[(($233)>>2)];
      var $235=(($234+4)|0);
      var $236=HEAP32[(($235)>>2)];
      var $237=(($236+24)|0);
      var $238=HEAP32[(($237)>>2)];
      var $239=(($buf+24)|0);
      var $240=HEAP32[(($239)>>2)];
      FUNCTION_TABLE[$238]($240);
      label = 60; break;
    case 60: 
      label = 61; break;
    case 61: 
      label = 62; break;
    case 62: 
      label = 63; break;
    case 63: 
      $1=0;
      label = 64; break;
    case 64: 
      var $246=$1;
      STACKTOP = __stackBase__;
      return $246;
    default: assert(0, "bad label: " + label);
  }
}
function _mbiencoder_init($self, $args, $kwds) {
  var label = 0;
  var $1;
  var $2;
  var $3;
  $1=$self;
  $2=$args;
  $3=$kwds;
  return 0;
}
function _mbidecoder_reset($self) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$self;
      var $3=$2;
      var $4=(($3+8)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5+32)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))!=0;
      if ($8) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+8)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12+32)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=$2;
      var $16=(($15+12)|0);
      var $17=$2;
      var $18=(($17+8)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=(($19+4)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=FUNCTION_TABLE[$14]($16, $21);
      var $23=(($22)|(0))!=0;
      if ($23) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 5; break;
    case 4: 
      var $26=$2;
      var $27=(($26+32)|0);
      HEAP32[(($27)>>2)]=0;
      var $28=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $29=((($28)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$29;
      $1=__Py_NoneStruct;
      label = 5; break;
    case 5: 
      var $31=$1;
      return $31;
    default: assert(0, "bad label: " + label);
  }
}
function _mbiencoder_dealloc($self) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      $1=$self;
      var $2=$1;
      var $3=$2;
      _PyObject_GC_UnTrack($3);
      label = 2; break;
    case 2: 
      var $5=$1;
      var $6=(($5+20)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 11; break; }
    case 3: 
      var $10=$1;
      var $11=(($10+20)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12)>>>(0)) < 1;
      if ($13) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $15=$1;
      var $16=(($15+20)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=3 < (($17)>>>(0));
      if ($18) { label = 5; break; } else { label = 11; break; }
    case 5: 
      label = 6; break;
    case 6: 
      var $21=$1;
      var $22=(($21+20)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=((($25)-(1))|0);
      HEAP32[(($24)>>2)]=$26;
      var $27=(($26)|(0))!=0;
      if ($27) { label = 7; break; } else { label = 8; break; }
    case 7: 
      label = 9; break;
    case 8: 
      var $30=$1;
      var $31=(($30+20)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32+4)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=(($34+24)|0);
      var $36=HEAP32[(($35)>>2)];
      var $37=$1;
      var $38=(($37+20)|0);
      var $39=HEAP32[(($38)>>2)];
      FUNCTION_TABLE[$36]($39);
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $44=$1;
      var $45=$44;
      var $46=(($45+4)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=(($47+160)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=$1;
      var $51=$50;
      FUNCTION_TABLE[$49]($51);
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _mbiencoder_traverse($self, $visit, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $vret;
      $2=$self;
      $3=$visit;
      $4=$arg;
      var $5=$2;
      var $6=(($5+20)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)>>>(0)) < 1;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+20)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=3 < (($12)>>>(0));
      if ($13) { label = 3; break; } else { label = 10; break; }
    case 3: 
      label = 4; break;
    case 4: 
      var $16=$2;
      var $17=(($16+20)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18)|(0))!=0;
      if ($19) { label = 5; break; } else { label = 8; break; }
    case 5: 
      var $21=$3;
      var $22=$2;
      var $23=(($22+20)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$4;
      var $26=FUNCTION_TABLE[$21]($24, $25);
      $vret=$26;
      var $27=$vret;
      var $28=(($27)|(0))!=0;
      if ($28) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $30=$vret;
      $1=$30;
      label = 11; break;
    case 7: 
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      $1=0;
      label = 11; break;
    case 11: 
      var $36=$1;
      return $36;
    default: assert(0, "bad label: " + label);
  }
}
function _mbiencoder_new($type, $args, $kwds) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $self;
      var $codec;
      var $errors=__stackBase__;
      $2=$type;
      $3=$args;
      $4=$kwds;
      $codec=0;
      HEAP32[(($errors)>>2)]=0;
      var $5=$3;
      var $6=$4;
      var $7=__PyArg_ParseTupleAndKeywords_SizeT($5, $6, ((__str52)|0), ((_incnewkwarglist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$errors,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 41; break;
    case 3: 
      var $11=$2;
      var $12=(($11+152)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=$2;
      var $15=FUNCTION_TABLE[$13]($14, 0);
      var $16=$15;
      $self=$16;
      var $17=$self;
      var $18=(($17)|(0))==0;
      if ($18) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 41; break;
    case 5: 
      var $21=$2;
      var $22=$21;
      var $23=_PyObject_GetAttrString($22, ((__str28)|0));
      $codec=$23;
      var $24=$codec;
      var $25=(($24)|(0))==0;
      if ($25) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 20; break;
    case 7: 
      var $28=$codec;
      var $29=(($28+4)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=(($30)|(0))==((_MultibyteCodec_Type)|(0));
      if ($31) { label = 9; break; } else { label = 8; break; }
    case 8: 
      var $33=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($33, ((__str29)|0));
      label = 20; break;
    case 9: 
      var $35=$codec;
      var $36=$35;
      var $37=(($36+8)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=$self;
      var $40=(($39+8)|0);
      HEAP32[(($40)>>2)]=$38;
      var $41=$self;
      var $42=(($41+28)|0);
      HEAP32[(($42)>>2)]=0;
      var $43=HEAP32[(($errors)>>2)];
      var $44=_internal_error_callback($43);
      var $45=$self;
      var $46=(($45+20)|0);
      HEAP32[(($46)>>2)]=$44;
      var $47=$self;
      var $48=(($47+20)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=(($49)|(0))==0;
      if ($50) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 20; break;
    case 11: 
      var $53=$self;
      var $54=(($53+8)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=(($55+16)|0);
      var $57=HEAP32[(($56)>>2)];
      var $58=(($57)|(0))!=0;
      if ($58) { label = 12; break; } else { label = 14; break; }
    case 12: 
      var $60=$self;
      var $61=(($60+8)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=(($62+16)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=$self;
      var $66=(($65+12)|0);
      var $67=$self;
      var $68=(($67+8)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=(($69+4)|0);
      var $71=HEAP32[(($70)>>2)];
      var $72=FUNCTION_TABLE[$64]($66, $71);
      var $73=(($72)|(0))!=0;
      if ($73) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 20; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $77=$codec;
      var $78=(($77)|0);
      var $79=HEAP32[(($78)>>2)];
      var $80=((($79)-(1))|0);
      HEAP32[(($78)>>2)]=$80;
      var $81=(($80)|(0))!=0;
      if ($81) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 18; break;
    case 17: 
      var $84=$codec;
      var $85=(($84+4)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=(($86+24)|0);
      var $88=HEAP32[(($87)>>2)];
      var $89=$codec;
      FUNCTION_TABLE[$88]($89);
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      var $92=$self;
      var $93=$92;
      $1=$93;
      label = 41; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $96=$self;
      var $97=(($96)|(0))==0;
      if ($97) { label = 22; break; } else { label = 23; break; }
    case 22: 
      label = 29; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $101=$self;
      var $102=$101;
      var $103=(($102)|0);
      var $104=HEAP32[(($103)>>2)];
      var $105=((($104)-(1))|0);
      HEAP32[(($103)>>2)]=$105;
      var $106=(($105)|(0))!=0;
      if ($106) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 27; break;
    case 26: 
      var $109=$self;
      var $110=$109;
      var $111=(($110+4)|0);
      var $112=HEAP32[(($111)>>2)];
      var $113=(($112+24)|0);
      var $114=HEAP32[(($113)>>2)];
      var $115=$self;
      var $116=$115;
      FUNCTION_TABLE[$114]($116);
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      label = 30; break;
    case 30: 
      label = 31; break;
    case 31: 
      var $122=$codec;
      var $123=(($122)|(0))==0;
      if ($123) { label = 32; break; } else { label = 33; break; }
    case 32: 
      label = 39; break;
    case 33: 
      label = 34; break;
    case 34: 
      var $127=$codec;
      var $128=(($127)|0);
      var $129=HEAP32[(($128)>>2)];
      var $130=((($129)-(1))|0);
      HEAP32[(($128)>>2)]=$130;
      var $131=(($130)|(0))!=0;
      if ($131) { label = 35; break; } else { label = 36; break; }
    case 35: 
      label = 37; break;
    case 36: 
      var $134=$codec;
      var $135=(($134+4)|0);
      var $136=HEAP32[(($135)>>2)];
      var $137=(($136+24)|0);
      var $138=HEAP32[(($137)>>2)];
      var $139=$codec;
      FUNCTION_TABLE[$138]($139);
      label = 37; break;
    case 37: 
      label = 38; break;
    case 38: 
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      $1=0;
      label = 41; break;
    case 41: 
      var $145=$1;
      STACKTOP = __stackBase__;
      return $145;
    default: assert(0, "bad label: " + label);
  }
}
function _mbiencoder_encode($self, $args, $kwargs) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $data=__stackBase__;
      var $final=(__stackBase__)+(4);
      $2=$self;
      $3=$args;
      $4=$kwargs;
      HEAP32[(($final)>>2)]=0;
      var $5=$3;
      var $6=$4;
      var $7=__PyArg_ParseTupleAndKeywords_SizeT($5, $6, ((__str53)|0), ((_incrementalkwarglist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$data,HEAP32[(((tempInt)+(4))>>2)]=$final,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 4; break;
    case 3: 
      var $11=$2;
      var $12=$11;
      var $13=HEAP32[(($data)>>2)];
      var $14=HEAP32[(($final)>>2)];
      var $15=_encoder_encode_stateful($12, $13, $14);
      $1=$15;
      label = 4; break;
    case 4: 
      var $17=$1;
      STACKTOP = __stackBase__;
      return $17;
    default: assert(0, "bad label: " + label);
  }
}
function _mbiencoder_reset($self) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$self;
      var $3=$2;
      var $4=(($3+8)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5+32)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))!=0;
      if ($8) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+8)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12+32)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=$2;
      var $16=(($15+12)|0);
      var $17=$2;
      var $18=(($17+8)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=(($19+4)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=FUNCTION_TABLE[$14]($16, $21);
      var $23=(($22)|(0))!=0;
      if ($23) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 5; break;
    case 4: 
      var $26=$2;
      var $27=(($26+28)|0);
      HEAP32[(($27)>>2)]=0;
      var $28=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $29=((($28)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$29;
      $1=__Py_NoneStruct;
      label = 5; break;
    case 5: 
      var $31=$1;
      return $31;
    default: assert(0, "bad label: " + label);
  }
}
// EMSCRIPTEN_END_FUNCS
// EMSCRIPTEN_END_FUNCS
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
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
