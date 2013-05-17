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
var _speedups_methods;
var _scanner_members;
var _scanner_init_kwlist;
var _scanner_doc;
var _scanner_call_kwlist;
var _raise_errmsg_errmsg_fn;
var _pydoc_scanstring;
var _pydoc_encode_basestring_ascii;
var _module_doc;
var _join_list_unicode_joinfn;
var _encoder_members;
var _encoder_listencode_list_open_array;
var _encoder_listencode_list_empty_array;
var _encoder_listencode_list_close_array;
var _encoder_listencode_dict_open_dict;
var _encoder_listencode_dict_empty_dict;
var _encoder_listencode_dict_close_dict;
var _encoder_init_kwlist;
var _encoder_doc;
var _encoder_call_kwlist;
var __str9;
var __str8;
var __str77;
var __str76;
var __str75;
var __str74;
var __str73;
var __str72;
var __str71;
var __str70;
var __str7;
var __str69;
var __str68;
var __str67;
var __str66;
var __str65;
var __str64;
var __str63;
var __str62;
var __str61;
var __str60;
var __str6;
var __str59;
var __str58;
var __str57;
var __str56;
var __str55;
var __str54;
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
var __encoded_const_s_true;
var __encoded_const_s_null;
var __encoded_const_s_false;
var ___func___scanner_traverse;
var ___func___scanner_init;
var ___func___scanner_clear;
var ___func___scanner_call;
var ___func___encoder_traverse;
var ___func___encoder_init;
var ___func___encoder_clear;
var ___func___encoder_call;
var _PyScannerType;
var _PyEncoderType;
_speedups_methods=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_scanner_members=allocate([0,0,0,0,6,0,0,0,8,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,12,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,16,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,20,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,24,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,28,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,32,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_scanner_init_kwlist=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_scanner_doc=allocate([74,83,79,78,32,115,99,97,110,110,101,114,32,111,98,106,101,99,116,0], "i8", ALLOC_NORMAL);
_scanner_call_kwlist=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_raise_errmsg_errmsg_fn=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_pydoc_scanstring=allocate([115,99,97,110,115,116,114,105,110,103,40,98,97,115,101,115,116,114,105,110,103,44,32,101,110,100,44,32,101,110,99,111,100,105,110,103,44,32,115,116,114,105,99,116,61,84,114,117,101,41,32,45,62,32,40,115,116,114,44,32,101,110,100,41,10,10,83,99,97,110,32,116,104,101,32,115,116,114,105,110,103,32,115,32,102,111,114,32,97,32,74,83,79,78,32,115,116,114,105,110,103,46,32,69,110,100,32,105,115,32,116,104,101,32,105,110,100,101,120,32,111,102,32,116,104,101,10,99,104,97,114,97,99,116,101,114,32,105,110,32,115,32,97,102,116,101,114,32,116,104,101,32,113,117,111,116,101,32,116,104,97,116,32,115,116,97,114,116,101,100,32,116,104,101,32,74,83,79,78,32,115,116,114,105,110,103,46,10,85,110,101,115,99,97,112,101,115,32,97,108,108,32,118,97,108,105,100,32,74,83,79,78,32,115,116,114,105,110,103,32,101,115,99,97,112,101,32,115,101,113,117,101,110,99,101,115,32,97,110,100,32,114,97,105,115,101,115,32,86,97,108,117,101,69,114,114,111,114,10,111,110,32,97,116,116,101,109,112,116,32,116,111,32,100,101,99,111,100,101,32,97,110,32,105,110,118,97,108,105,100,32,115,116,114,105,110,103,46,32,73,102,32,115,116,114,105,99,116,32,105,115,32,70,97,108,115,101,32,116,104,101,110,32,108,105,116,101,114,97,108,10,99,111,110,116,114,111,108,32,99,104,97,114,97,99,116,101,114,115,32,97,114,101,32,97,108,108,111,119,101,100,32,105,110,32,116,104,101,32,115,116,114,105,110,103,46,10,10,82,101,116,117,114,110,115,32,97,32,116,117,112,108,101,32,111,102,32,116,104,101,32,100,101,99,111,100,101,100,32,115,116,114,105,110,103,32,97,110,100,32,116,104,101,32,105,110,100,101,120,32,111,102,32,116,104,101,32,99,104,97,114,97,99,116,101,114,32,105,110,32,115,10,97,102,116,101,114,32,116,104,101,32,101,110,100,32,113,117,111,116,101,46,0,0,0,0], "i8", ALLOC_NORMAL);
_pydoc_encode_basestring_ascii=allocate([101,110,99,111,100,101,95,98,97,115,101,115,116,114,105,110,103,95,97,115,99,105,105,40,98,97,115,101,115,116,114,105,110,103,41,32,45,62,32,115,116,114,10,10,82,101,116,117,114,110,32,97,110,32,65,83,67,73,73,45,111,110,108,121,32,74,83,79,78,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,32,80,121,116,104,111,110,32,115,116,114,105,110,103,0], "i8", ALLOC_NORMAL);
_module_doc=allocate([106,115,111,110,32,115,112,101,101,100,117,112,115,10,0,0], "i8", ALLOC_NORMAL);
_join_list_unicode_joinfn=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_encoder_members=allocate([0,0,0,0,6,0,0,0,8,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,12,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,16,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,20,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,24,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,28,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,32,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,36,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_encoder_listencode_list_open_array=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_encoder_listencode_list_empty_array=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_encoder_listencode_list_close_array=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_encoder_listencode_dict_open_dict=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_encoder_listencode_dict_empty_dict=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_encoder_listencode_dict_close_dict=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_encoder_init_kwlist=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_encoder_doc=allocate([95,105,116,101,114,101,110,99,111,100,101,40,111,98,106,44,32,95,99,117,114,114,101,110,116,95,105,110,100,101,110,116,95,108,101,118,101,108,41,32,45,62,32,105,116,101,114,97,98,108,101,0], "i8", ALLOC_NORMAL);
_encoder_call_kwlist=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([73,110,118,97,108,105,100,32,99,111,110,116,114,111,108,32,99,104,97,114,97,99,116,101,114,32,97,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([101,110,100,32,105,115,32,111,117,116,32,111,102,32,98,111,117,110,100,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str77=allocate([69,120,112,101,99,116,105,110,103,32,58,32,100,101,108,105,109,105,116,101,114,0,0,0], "i8", ALLOC_NORMAL);
__str76=allocate([69,120,112,101,99,116,105,110,103,32,112,114,111,112,101,114,116,121,32,110,97,109,101,0], "i8", ALLOC_NORMAL);
__str75=allocate([69,120,112,101,99,116,105,110,103,32,44,32,100,101,108,105,109,105,116,101,114,0,0,0], "i8", ALLOC_NORMAL);
__str74=allocate([32,119,104,105,108,101,32,100,101,99,111,100,105,110,103,32,97,32,74,83,79,78,32,97,114,114,97,121,32,102,114,111,109,32,97,32,98,121,116,101,32,115,116,114,105,110,103,0], "i8", ALLOC_NORMAL);
__str73=allocate([32,119,104,105,108,101,32,100,101,99,111,100,105,110,103,32,97,32,74,83,79,78,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,98,121,116,101,32,115,116,114,105,110,103,0,0,0,0], "i8", ALLOC_NORMAL);
__str72=allocate([69,120,112,101,99,116,105,110,103,32,39,58,39,32,100,101,108,105,109,105,116,101,114,0], "i8", ALLOC_NORMAL);
__str71=allocate([69,120,112,101,99,116,105,110,103,32,112,114,111,112,101,114,116,121,32,110,97,109,101,32,101,110,99,108,111,115,101,100,32,105,110,32,100,111,117,98,108,101,32,113,117,111,116,101,115,0,0,0], "i8", ALLOC_NORMAL);
__str70=allocate([69,120,112,101,99,116,105,110,103,32,111,98,106,101,99,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([102,105,114,115,116,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,44,32,110,111,116,32,37,46,56,48,115,0,0], "i8", ALLOC_NORMAL);
__str69=allocate([69,120,112,101,99,116,105,110,103,32,39,44,39,32,100,101,108,105,109,105,116,101,114,0], "i8", ALLOC_NORMAL);
__str68=allocate([32,119,104,105,108,101,32,100,101,99,111,100,105,110,103,32,97,32,74,83,79,78,32,97,114,114,97,121,32,102,114,111,109,32,97,32,117,110,105,99,111,100,101,32,115,116,114,105,110,103,0,0], "i8", ALLOC_NORMAL);
__str67=allocate([32,119,104,105,108,101,32,100,101,99,111,100,105,110,103,32,97,32,74,83,79,78,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,117,110,105,99,111,100,101,32,115,116,114,105,110,103,0], "i8", ALLOC_NORMAL);
__str66=allocate([79,79,38,58,115,99,97,110,95,111,110,99,101,0,0,0], "i8", ALLOC_NORMAL);
__str65=allocate([105,100,120,0], "i8", ALLOC_NORMAL);
__str64=allocate([115,116,114,105,110,103,0,0], "i8", ALLOC_NORMAL);
__str63=allocate([112,97,114,115,101,95,99,111,110,115,116,97,110,116,0,0], "i8", ALLOC_NORMAL);
__str62=allocate([112,97,114,115,101,95,105,110,116,0,0,0], "i8", ALLOC_NORMAL);
__str61=allocate([112,97,114,115,101,95,102,108,111,97,116,0], "i8", ALLOC_NORMAL);
__str60=allocate([111,98,106,101,99,116,95,112,97,105,114,115,95,104,111,111,107,0,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([117,116,102,45,56,0,0,0], "i8", ALLOC_NORMAL);
__str59=allocate([111,98,106,101,99,116,95,104,111,111,107,0], "i8", ALLOC_NORMAL);
__str58=allocate([101,110,99,111,100,105,110,103,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,44,32,110,111,116,32,37,46,56,48,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str57=allocate([101,110,99,111,100,105,110,103,0,0,0,0], "i8", ALLOC_NORMAL);
__str56=allocate([79,58,109,97,107,101,95,115,99,97,110,110,101,114,0,0], "i8", ALLOC_NORMAL);
__str55=allocate([80,121,83,99,97,110,110,101,114,95,67,104,101,99,107,40,115,101,108,102,41,0,0,0], "i8", ALLOC_NORMAL);
__str54=allocate([99,111,110,116,101,120,116,0], "i8", ALLOC_NORMAL);
__str53=allocate([95,106,115,111,110,46,83,99,97,110,110,101,114,0,0,0], "i8", ALLOC_NORMAL);
__str52=allocate([110,111,116,32,97,32,99,111,110,115,116,0], "i8", ALLOC_NORMAL);
__str51=allocate([102,97,108,115,101,0,0,0], "i8", ALLOC_NORMAL);
__str50=allocate([116,114,117,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([79,79,38,124,122,105,58,115,99,97,110,115,116,114,105,110,103,0,0,0], "i8", ALLOC_NORMAL);
__str49=allocate([110,117,108,108,0,0,0,0], "i8", ALLOC_NORMAL);
__str48=allocate([78,97,78,0], "i8", ALLOC_NORMAL);
__str47=allocate([45,73,110,102,105,110,105,116,121,0,0,0], "i8", ALLOC_NORMAL);
__str46=allocate([73,110,102,105,110,105,116,121,0,0,0,0], "i8", ALLOC_NORMAL);
__str45=allocate([79,117,116,32,111,102,32,114,97,110,103,101,32,102,108,111,97,116,32,118,97,108,117,101,115,32,97,114,101,32,110,111,116,32,74,83,79,78,32,99,111,109,112,108,105,97,110,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str44=allocate([95,105,116,101,114,101,110,99,111,100,101,95,108,105,115,116,32,110,101,101,100,115,32,97,32,115,101,113,117,101,110,99,101,0,0,0], "i8", ALLOC_NORMAL);
__str43=allocate([91,93,0,0], "i8", ALLOC_NORMAL);
__str42=allocate([93,0,0,0], "i8", ALLOC_NORMAL);
__str41=allocate([91,0,0,0], "i8", ALLOC_NORMAL);
__str40=allocate([107,101,121,115,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([115,99,97,110,115,116,114,105,110,103,0,0], "i8", ALLOC_NORMAL);
__str39=allocate([123,125,0,0], "i8", ALLOC_NORMAL);
__str38=allocate([125,0,0,0], "i8", ALLOC_NORMAL);
__str37=allocate([123,0,0,0], "i8", ALLOC_NORMAL);
__str36=allocate([67,105,114,99,117,108,97,114,32,114,101,102,101,114,101,110,99,101,32,100,101,116,101,99,116,101,100,0], "i8", ALLOC_NORMAL);
__str35=allocate([32,119,104,105,108,101,32,101,110,99,111,100,105,110,103,32,97,32,74,83,79,78,32,111,98,106,101,99,116,0,0,0], "i8", ALLOC_NORMAL);
__str34=allocate([79,79,38,58,95,105,116,101,114,101,110,99,111,100,101,0], "i8", ALLOC_NORMAL);
__str33=allocate([95,99,117,114,114,101,110,116,95,105,110,100,101,110,116,95,108,101,118,101,108,0,0,0], "i8", ALLOC_NORMAL);
__str32=allocate([111,98,106,0], "i8", ALLOC_NORMAL);
__str31=allocate([79,79,79,79,79,79,79,79,79,58,109,97,107,101,95,101,110,99,111,100,101,114,0,0], "i8", ALLOC_NORMAL);
__str30=allocate([80,121,69,110,99,111,100,101,114,95,67,104,101,99,107,40,115,101,108,102,41,0,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([101,110,99,111,100,101,95,98,97,115,101,115,116,114,105,110,103,95,97,115,99,105,105,0], "i8", ALLOC_NORMAL);
__str29=allocate([46,46,47,77,111,100,117,108,101,115,47,95,106,115,111,110,46,99,0,0], "i8", ALLOC_NORMAL);
__str28=allocate([97,108,108,111,119,95,110,97,110,0,0,0], "i8", ALLOC_NORMAL);
__str27=allocate([115,107,105,112,107,101,121,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str26=allocate([115,111,114,116,95,107,101,121,115,0,0,0], "i8", ALLOC_NORMAL);
__str25=allocate([105,116,101,109,95,115,101,112,97,114,97,116,111,114,0,0], "i8", ALLOC_NORMAL);
__str24=allocate([107,101,121,95,115,101,112,97,114,97,116,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str23=allocate([105,110,100,101,110,116,0,0], "i8", ALLOC_NORMAL);
__str22=allocate([101,110,99,111,100,101,114,0], "i8", ALLOC_NORMAL);
__str21=allocate([100,101,102,97,117,108,116,0], "i8", ALLOC_NORMAL);
__str20=allocate([109,97,114,107,101,114,115,0], "i8", ALLOC_NORMAL);
__str2=allocate([109,97,107,101,95,101,110,99,111,100,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([95,106,115,111,110,46,69,110,99,111,100,101,114,0,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([115,116,114,105,99,116,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,0,0,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([40,122,79,79,38,41,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([101,114,114,109,115,103,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([106,115,111,110,46,100,101,99,111,100,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str13=allocate([106,111,105,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([73,110,118,97,108,105,100,32,92,117,88,88,88,88,32,101,115,99,97,112,101,0,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([73,110,118,97,108,105,100,32,92,101,115,99,97,112,101,0], "i8", ALLOC_NORMAL);
__str10=allocate([85,110,116,101,114,109,105,110,97,116,101,100,32,115,116,114,105,110,103,32,115,116,97,114,116,105,110,103,32,97,116,0], "i8", ALLOC_NORMAL);
__str1=allocate([109,97,107,101,95,115,99,97,110,110,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str=allocate([95,106,115,111,110,0,0,0], "i8", ALLOC_NORMAL);
__encoded_const_s_true=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__encoded_const_s_null=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__encoded_const_s_false=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
___func___scanner_traverse=allocate([115,99,97,110,110,101,114,95,116,114,97,118,101,114,115,101,0,0,0,0], "i8", ALLOC_NORMAL);
___func___scanner_init=allocate([115,99,97,110,110,101,114,95,105,110,105,116,0,0,0,0], "i8", ALLOC_NORMAL);
___func___scanner_clear=allocate([115,99,97,110,110,101,114,95,99,108,101,97,114,0,0,0], "i8", ALLOC_NORMAL);
___func___scanner_call=allocate([115,99,97,110,110,101,114,95,99,97,108,108,0,0,0,0], "i8", ALLOC_NORMAL);
___func___encoder_traverse=allocate([101,110,99,111,100,101,114,95,116,114,97,118,101,114,115,101,0,0,0,0], "i8", ALLOC_NORMAL);
___func___encoder_init=allocate([101,110,99,111,100,101,114,95,105,110,105,116,0,0,0,0], "i8", ALLOC_NORMAL);
___func___encoder_clear=allocate([101,110,99,111,100,101,114,95,99,108,101,97,114,0,0,0], "i8", ALLOC_NORMAL);
___func___encoder_call=allocate([101,110,99,111,100,101,114,95,99,97,108,108,0,0,0,0], "i8", ALLOC_NORMAL);
_PyScannerType=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,65,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_PyEncoderType=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,65,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_speedups_methods)>>2)]=((__str3)|0);
HEAP32[(((_speedups_methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_speedups_methods)+(12))>>2)]=((_pydoc_encode_basestring_ascii)|0);
HEAP32[(((_speedups_methods)+(16))>>2)]=((__str4)|0);
HEAP32[(((_speedups_methods)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
HEAP32[(((_speedups_methods)+(28))>>2)]=((_pydoc_scanstring)|0);
HEAP32[((_scanner_members)>>2)]=((__str57)|0);
HEAP32[(((_scanner_members)+(16))>>2)]=((__str57)|0);
HEAP32[(((_scanner_members)+(20))>>2)]=((__str18)|0);
HEAP32[(((_scanner_members)+(36))>>2)]=((__str18)|0);
HEAP32[(((_scanner_members)+(40))>>2)]=((__str59)|0);
HEAP32[(((_scanner_members)+(56))>>2)]=((__str59)|0);
HEAP32[(((_scanner_members)+(60))>>2)]=((__str60)|0);
HEAP32[(((_scanner_members)+(76))>>2)]=((__str60)|0);
HEAP32[(((_scanner_members)+(80))>>2)]=((__str61)|0);
HEAP32[(((_scanner_members)+(96))>>2)]=((__str61)|0);
HEAP32[(((_scanner_members)+(100))>>2)]=((__str62)|0);
HEAP32[(((_scanner_members)+(116))>>2)]=((__str62)|0);
HEAP32[(((_scanner_members)+(120))>>2)]=((__str63)|0);
HEAP32[(((_scanner_members)+(136))>>2)]=((__str63)|0);
HEAP32[((_scanner_init_kwlist)>>2)]=((__str54)|0);
HEAP32[((_scanner_call_kwlist)>>2)]=((__str64)|0);
HEAP32[(((_scanner_call_kwlist)+(4))>>2)]=((__str65)|0);
HEAP32[((_encoder_members)>>2)]=((__str20)|0);
HEAP32[(((_encoder_members)+(16))>>2)]=((__str20)|0);
HEAP32[(((_encoder_members)+(20))>>2)]=((__str21)|0);
HEAP32[(((_encoder_members)+(36))>>2)]=((__str21)|0);
HEAP32[(((_encoder_members)+(40))>>2)]=((__str22)|0);
HEAP32[(((_encoder_members)+(56))>>2)]=((__str22)|0);
HEAP32[(((_encoder_members)+(60))>>2)]=((__str23)|0);
HEAP32[(((_encoder_members)+(76))>>2)]=((__str23)|0);
HEAP32[(((_encoder_members)+(80))>>2)]=((__str24)|0);
HEAP32[(((_encoder_members)+(96))>>2)]=((__str24)|0);
HEAP32[(((_encoder_members)+(100))>>2)]=((__str25)|0);
HEAP32[(((_encoder_members)+(116))>>2)]=((__str25)|0);
HEAP32[(((_encoder_members)+(120))>>2)]=((__str26)|0);
HEAP32[(((_encoder_members)+(136))>>2)]=((__str26)|0);
HEAP32[(((_encoder_members)+(140))>>2)]=((__str27)|0);
HEAP32[(((_encoder_members)+(156))>>2)]=((__str27)|0);
HEAP32[((_encoder_init_kwlist)>>2)]=((__str20)|0);
HEAP32[(((_encoder_init_kwlist)+(4))>>2)]=((__str21)|0);
HEAP32[(((_encoder_init_kwlist)+(8))>>2)]=((__str22)|0);
HEAP32[(((_encoder_init_kwlist)+(12))>>2)]=((__str23)|0);
HEAP32[(((_encoder_init_kwlist)+(16))>>2)]=((__str24)|0);
HEAP32[(((_encoder_init_kwlist)+(20))>>2)]=((__str25)|0);
HEAP32[(((_encoder_init_kwlist)+(24))>>2)]=((__str26)|0);
HEAP32[(((_encoder_init_kwlist)+(28))>>2)]=((__str27)|0);
HEAP32[(((_encoder_init_kwlist)+(32))>>2)]=((__str28)|0);
HEAP32[((_encoder_call_kwlist)>>2)]=((__str32)|0);
HEAP32[(((_encoder_call_kwlist)+(4))>>2)]=((__str33)|0);
HEAP32[(((_PyScannerType)+(12))>>2)]=((__str53)|0);
HEAP32[(((_PyScannerType)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((_PyScannerType)+(64))>>2)]=(FUNCTION_TABLE_OFFSET + 30);
HEAP32[(((_PyScannerType)+(88))>>2)]=((_scanner_doc)|0);
HEAP32[(((_PyScannerType)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 18);
HEAP32[(((_PyScannerType)+(96))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_PyScannerType)+(120))>>2)]=((_scanner_members)|0);
HEAP32[(((_PyScannerType)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((_PyScannerType)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((_PyEncoderType)+(12))>>2)]=((__str19)|0);
HEAP32[(((_PyEncoderType)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((_PyEncoderType)+(64))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((_PyEncoderType)+(88))>>2)]=((_encoder_doc)|0);
HEAP32[(((_PyEncoderType)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_PyEncoderType)+(96))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
HEAP32[(((_PyEncoderType)+(120))>>2)]=((_encoder_members)|0);
HEAP32[(((_PyEncoderType)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((_PyEncoderType)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 34);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_scanner_clear,0,_encoder_call,0,__convertPyInt_FromSsize_t,0,_PyType_GenericNew,0,_encoder_clear
,0,_scanner_new,0,_py_encode_basestring_ascii,0,_scanner_dealloc,0,_scanner_traverse,0,_encoder_dealloc
,0,_py_scanstring,0,_encoder_init,0,_scanner_init,0,_encoder_traverse,0,_scanner_call,0,__convertPyInt_AsSsize_t,0,_encoder_new,0]);
// EMSCRIPTEN_START_FUNCS
function _init_json() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $m;
      HEAP32[((((_PyScannerType+156)|0))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
      var $1=_PyType_Ready(_PyScannerType);
      var $2=(($1)|(0)) < 0;
      if ($2) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 6; break;
    case 3: 
      HEAP32[((((_PyEncoderType+156)|0))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
      var $5=_PyType_Ready(_PyEncoderType);
      var $6=(($5)|(0)) < 0;
      if ($6) { label = 4; break; } else { label = 5; break; }
    case 4: 
      label = 6; break;
    case 5: 
      var $9=_Py_InitModule4(((__str)|0), ((_speedups_methods)|0), ((_module_doc)|0), 0, 1013);
      $m=$9;
      var $10=HEAP32[((((_PyScannerType)|0))>>2)];
      var $11=((($10)+(1))|0);
      HEAP32[((((_PyScannerType)|0))>>2)]=$11;
      var $12=$m;
      var $13=_PyModule_AddObject($12, ((__str1)|0), _PyScannerType);
      var $14=HEAP32[((((_PyEncoderType)|0))>>2)];
      var $15=((($14)+(1))|0);
      HEAP32[((((_PyEncoderType)|0))>>2)]=$15;
      var $16=$m;
      var $17=_PyModule_AddObject($16, ((__str2)|0), _PyEncoderType);
      label = 6; break;
    case 6: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
Module["_init_json"] = _init_json;
function _py_encode_basestring_ascii($self, $pystr) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $2=$self;
      $3=$pystr;
      var $4=$3;
      var $5=(($4+4)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6+84)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=$8 & 134217728;
      var $10=(($9)|(0))!=0;
      if ($10) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $12=$3;
      var $13=_ascii_escape_str($12);
      $1=$13;
      label = 6; break;
    case 3: 
      var $15=$3;
      var $16=(($15+4)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=(($17+84)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=$19 & 268435456;
      var $21=(($20)|(0))!=0;
      if ($21) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $23=$3;
      var $24=_ascii_escape_unicode($23);
      $1=$24;
      label = 6; break;
    case 5: 
      var $26=HEAP32[((_PyExc_TypeError)>>2)];
      var $27=$3;
      var $28=(($27+4)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=(($29+12)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=_PyErr_Format($26, ((__str7)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$31,tempInt));
      $1=0;
      label = 6; break;
    case 6: 
      var $34=$1;
      STACKTOP = __stackBase__;
      return $34;
    default: assert(0, "bad label: " + label);
  }
}
function _py_scanstring($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 20)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $pystr=__stackBase__;
      var $rval;
      var $end=(__stackBase__)+(4);
      var $next_end=(__stackBase__)+(8);
      var $encoding=(__stackBase__)+(12);
      var $strict=(__stackBase__)+(16);
      $2=$self;
      $3=$args;
      HEAP32[(($next_end)>>2)]=-1;
      HEAP32[(($encoding)>>2)]=0;
      HEAP32[(($strict)>>2)]=1;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str5)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 20)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$pystr,HEAP32[(((tempInt)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 32),HEAP32[(((tempInt)+(8))>>2)]=$end,HEAP32[(((tempInt)+(12))>>2)]=$encoding,HEAP32[(((tempInt)+(16))>>2)]=$strict,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 12; break;
    case 3: 
      var $9=HEAP32[(($encoding)>>2)];
      var $10=(($9)|(0))==0;
      if ($10) { label = 4; break; } else { label = 5; break; }
    case 4: 
      HEAP32[(($encoding)>>2)]=((__str6)|0);
      label = 5; break;
    case 5: 
      var $13=HEAP32[(($pystr)>>2)];
      var $14=(($13+4)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=(($15+84)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=$17 & 134217728;
      var $19=(($18)|(0))!=0;
      if ($19) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $21=HEAP32[(($pystr)>>2)];
      var $22=HEAP32[(($end)>>2)];
      var $23=HEAP32[(($encoding)>>2)];
      var $24=HEAP32[(($strict)>>2)];
      var $25=_scanstring_str($21, $22, $23, $24, $next_end);
      $rval=$25;
      label = 11; break;
    case 7: 
      var $27=HEAP32[(($pystr)>>2)];
      var $28=(($27+4)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=(($29+84)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=$31 & 268435456;
      var $33=(($32)|(0))!=0;
      if ($33) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $35=HEAP32[(($pystr)>>2)];
      var $36=HEAP32[(($end)>>2)];
      var $37=HEAP32[(($strict)>>2)];
      var $38=_scanstring_unicode($35, $36, $37, $next_end);
      $rval=$38;
      label = 10; break;
    case 9: 
      var $40=HEAP32[((_PyExc_TypeError)>>2)];
      var $41=HEAP32[(($pystr)>>2)];
      var $42=(($41+4)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=(($43+12)|0);
      var $45=HEAP32[(($44)>>2)];
      var $46=_PyErr_Format($40, ((__str7)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$45,tempInt));
      $1=0;
      label = 12; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $49=$rval;
      var $50=HEAP32[(($next_end)>>2)];
      var $51=__build_rval_index_tuple($49, $50);
      $1=$51;
      label = 12; break;
    case 12: 
      var $53=$1;
      STACKTOP = __stackBase__;
      return $53;
    default: assert(0, "bad label: " + label);
  }
}
function __convertPyInt_AsSsize_t($o, $size_ptr) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $2=$o;
      $3=$size_ptr;
      var $4=$2;
      var $5=_PyInt_AsSsize_t($4);
      var $6=$3;
      HEAP32[(($6)>>2)]=$5;
      var $7=$3;
      var $8=HEAP32[(($7)>>2)];
      var $9=(($8)|(0))==-1;
      if ($9) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $11=_PyErr_Occurred();
      var $12=(($11)|(0))!=0;
      if ($12) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 5; break;
    case 4: 
      $1=1;
      label = 5; break;
    case 5: 
      var $16=$1;
      return $16;
    default: assert(0, "bad label: " + label);
  }
}
function _scanstring_str($pystr, $end, $encoding, $strict, $next_end_ptr) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $6;
      var $rval;
      var $len;
      var $begin;
      var $next;
      var $buf;
      var $chunks;
      var $c=__stackBase__;
      var $chunk;
      var $strchunk;
      var $digit;
      var $_py_tmp;
      $2=$pystr;
      $3=$end;
      $4=$encoding;
      $5=$strict;
      $6=$next_end_ptr;
      var $7=$2;
      var $8=$7;
      var $9=(($8+8)|0);
      var $10=HEAP32[(($9)>>2)];
      $len=$10;
      var $11=$3;
      var $12=((($11)-(1))|0);
      $begin=$12;
      var $13=$2;
      var $14=$13;
      var $15=(($14+20)|0);
      var $16=(($15)|0);
      $buf=$16;
      var $17=_PyList_New(0);
      $chunks=$17;
      var $18=$chunks;
      var $19=(($18)|(0))==0;
      if ($19) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 101; break;
    case 3: 
      var $22=$3;
      var $23=(($22)|(0)) < 0;
      if ($23) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $25=$len;
      var $26=$3;
      var $27=(($25)|(0)) <= (($26)|(0));
      if ($27) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $29=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($29, ((__str8)|0));
      label = 101; break;
    case 6: 
      label = 7; break;
    case 7: 
      HEAP16[(($c)>>1)]=0;
      $chunk=0;
      var $32=$3;
      $next=$32;
      label = 8; break;
    case 8: 
      var $34=$next;
      var $35=$len;
      var $36=(($34)|(0)) < (($35)|(0));
      if ($36) { label = 9; break; } else { label = 18; break; }
    case 9: 
      var $38=$next;
      var $39=$buf;
      var $40=(($39+$38)|0);
      var $41=HEAP8[($40)];
      var $42=(($41)&(255));
      HEAP16[(($c)>>1)]=$42;
      var $43=HEAP16[(($c)>>1)];
      var $44=(($43)&(65535));
      var $45=(($44)|(0))==34;
      if ($45) { label = 11; break; } else { label = 10; break; }
    case 10: 
      var $47=HEAP16[(($c)>>1)];
      var $48=(($47)&(65535));
      var $49=(($48)|(0))==92;
      if ($49) { label = 11; break; } else { label = 12; break; }
    case 11: 
      label = 18; break;
    case 12: 
      var $52=$5;
      var $53=(($52)|(0))!=0;
      if ($53) { label = 13; break; } else { label = 15; break; }
    case 13: 
      var $55=HEAP16[(($c)>>1)];
      var $56=(($55)&(65535));
      var $57=(($56)|(0)) <= 31;
      if ($57) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $59=$2;
      var $60=$next;
      _raise_errmsg(((__str9)|0), $59, $60);
      label = 101; break;
    case 15: 
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $64=$next;
      var $65=((($64)+(1))|0);
      $next=$65;
      label = 8; break;
    case 18: 
      var $67=HEAP16[(($c)>>1)];
      var $68=(($67)&(65535));
      var $69=(($68)|(0))==34;
      if ($69) { label = 21; break; } else { label = 19; break; }
    case 19: 
      var $71=HEAP16[(($c)>>1)];
      var $72=(($71)&(65535));
      var $73=(($72)|(0))==92;
      if ($73) { label = 21; break; } else { label = 20; break; }
    case 20: 
      var $75=$2;
      var $76=$begin;
      _raise_errmsg(((__str10)|0), $75, $76);
      label = 101; break;
    case 21: 
      var $78=$next;
      var $79=$3;
      var $80=(($78)|(0))!=(($79)|(0));
      if ($80) { label = 22; break; } else { label = 44; break; }
    case 22: 
      var $82=$3;
      var $83=$buf;
      var $84=(($83+$82)|0);
      var $85=$next;
      var $86=$3;
      var $87=((($85)-($86))|0);
      var $88=_PyString_FromStringAndSize($84, $87);
      $strchunk=$88;
      var $89=$strchunk;
      var $90=(($89)|(0))==0;
      if ($90) { label = 23; break; } else { label = 24; break; }
    case 23: 
      label = 101; break;
    case 24: 
      var $93=$strchunk;
      var $94=$4;
      var $95=_PyUnicodeUCS2_FromEncodedObject($93, $94, 0);
      $chunk=$95;
      label = 25; break;
    case 25: 
      var $97=$strchunk;
      var $98=(($97)|0);
      var $99=HEAP32[(($98)>>2)];
      var $100=((($99)-(1))|0);
      HEAP32[(($98)>>2)]=$100;
      var $101=(($100)|(0))!=0;
      if ($101) { label = 26; break; } else { label = 27; break; }
    case 26: 
      label = 28; break;
    case 27: 
      var $104=$strchunk;
      var $105=(($104+4)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=(($106+24)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=$strchunk;
      FUNCTION_TABLE[$108]($109);
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      var $112=$chunk;
      var $113=(($112)|(0))==0;
      if ($113) { label = 30; break; } else { label = 31; break; }
    case 30: 
      label = 101; break;
    case 31: 
      var $116=$chunks;
      var $117=$chunk;
      var $118=_PyList_Append($116, $117);
      var $119=(($118)|(0))!=0;
      if ($119) { label = 32; break; } else { label = 38; break; }
    case 32: 
      label = 33; break;
    case 33: 
      var $122=$chunk;
      var $123=(($122)|0);
      var $124=HEAP32[(($123)>>2)];
      var $125=((($124)-(1))|0);
      HEAP32[(($123)>>2)]=$125;
      var $126=(($125)|(0))!=0;
      if ($126) { label = 34; break; } else { label = 35; break; }
    case 34: 
      label = 36; break;
    case 35: 
      var $129=$chunk;
      var $130=(($129+4)|0);
      var $131=HEAP32[(($130)>>2)];
      var $132=(($131+24)|0);
      var $133=HEAP32[(($132)>>2)];
      var $134=$chunk;
      FUNCTION_TABLE[$133]($134);
      label = 36; break;
    case 36: 
      label = 37; break;
    case 37: 
      label = 101; break;
    case 38: 
      label = 39; break;
    case 39: 
      var $139=$chunk;
      var $140=(($139)|0);
      var $141=HEAP32[(($140)>>2)];
      var $142=((($141)-(1))|0);
      HEAP32[(($140)>>2)]=$142;
      var $143=(($142)|(0))!=0;
      if ($143) { label = 40; break; } else { label = 41; break; }
    case 40: 
      label = 42; break;
    case 41: 
      var $146=$chunk;
      var $147=(($146+4)|0);
      var $148=HEAP32[(($147)>>2)];
      var $149=(($148+24)|0);
      var $150=HEAP32[(($149)>>2)];
      var $151=$chunk;
      FUNCTION_TABLE[$150]($151);
      label = 42; break;
    case 42: 
      label = 43; break;
    case 43: 
      label = 44; break;
    case 44: 
      var $155=$next;
      var $156=((($155)+(1))|0);
      $next=$156;
      var $157=HEAP16[(($c)>>1)];
      var $158=(($157)&(65535));
      var $159=(($158)|(0))==34;
      if ($159) { label = 45; break; } else { label = 46; break; }
    case 45: 
      var $161=$next;
      $3=$161;
      label = 89; break;
    case 46: 
      var $163=$next;
      var $164=$len;
      var $165=(($163)|(0))==(($164)|(0));
      if ($165) { label = 47; break; } else { label = 48; break; }
    case 47: 
      var $167=$2;
      var $168=$begin;
      _raise_errmsg(((__str10)|0), $167, $168);
      label = 101; break;
    case 48: 
      var $170=$next;
      var $171=$buf;
      var $172=(($171+$170)|0);
      var $173=HEAP8[($172)];
      var $174=(($173 << 24) >> 24);
      HEAP16[(($c)>>1)]=$174;
      var $175=HEAP16[(($c)>>1)];
      var $176=(($175)&(65535));
      var $177=(($176)|(0))!=117;
      if ($177) { label = 49; break; } else { label = 62; break; }
    case 49: 
      var $179=$next;
      var $180=((($179)+(1))|0);
      $3=$180;
      var $181=HEAP16[(($c)>>1)];
      var $182=(($181)&(65535));
      if ((($182)|(0))==34) {
        label = 50; break;
      }
      else if ((($182)|(0))==92) {
        label = 51; break;
      }
      else if ((($182)|(0))==47) {
        label = 52; break;
      }
      else if ((($182)|(0))==98) {
        label = 53; break;
      }
      else if ((($182)|(0))==102) {
        label = 54; break;
      }
      else if ((($182)|(0))==110) {
        label = 55; break;
      }
      else if ((($182)|(0))==114) {
        label = 56; break;
      }
      else if ((($182)|(0))==116) {
        label = 57; break;
      }
      else {
      label = 58; break;
      }
    case 50: 
      label = 59; break;
    case 51: 
      label = 59; break;
    case 52: 
      label = 59; break;
    case 53: 
      HEAP16[(($c)>>1)]=8;
      label = 59; break;
    case 54: 
      HEAP16[(($c)>>1)]=12;
      label = 59; break;
    case 55: 
      HEAP16[(($c)>>1)]=10;
      label = 59; break;
    case 56: 
      HEAP16[(($c)>>1)]=13;
      label = 59; break;
    case 57: 
      HEAP16[(($c)>>1)]=9;
      label = 59; break;
    case 58: 
      HEAP16[(($c)>>1)]=0;
      label = 59; break;
    case 59: 
      var $193=HEAP16[(($c)>>1)];
      var $194=(($193)&(65535));
      var $195=(($194)|(0))==0;
      if ($195) { label = 60; break; } else { label = 61; break; }
    case 60: 
      var $197=$2;
      var $198=$3;
      var $199=((($198)-(2))|0);
      _raise_errmsg(((__str11)|0), $197, $199);
      label = 101; break;
    case 61: 
      label = 74; break;
    case 62: 
      HEAP16[(($c)>>1)]=0;
      var $202=$next;
      var $203=((($202)+(1))|0);
      $next=$203;
      var $204=$next;
      var $205=((($204)+(4))|0);
      $3=$205;
      var $206=$3;
      var $207=$len;
      var $208=(($206)|(0)) >= (($207)|(0));
      if ($208) { label = 63; break; } else { label = 64; break; }
    case 63: 
      var $210=$2;
      var $211=$next;
      var $212=((($211)-(1))|0);
      _raise_errmsg(((__str12)|0), $210, $212);
      label = 101; break;
    case 64: 
      label = 65; break;
    case 65: 
      var $215=$next;
      var $216=$3;
      var $217=(($215)|(0)) < (($216)|(0));
      if ($217) { label = 66; break; } else { label = 73; break; }
    case 66: 
      var $219=$next;
      var $220=$buf;
      var $221=(($220+$219)|0);
      var $222=HEAP8[($221)];
      var $223=(($222 << 24) >> 24);
      $digit=$223;
      var $224=HEAP16[(($c)>>1)];
      var $225=(($224)&(65535));
      var $226=$225 << 4;
      var $227=(($226) & 65535);
      HEAP16[(($c)>>1)]=$227;
      var $228=$digit;
      var $229=(($228)&(65535));
      if ((($229)|(0))==48 | (($229)|(0))==49 | (($229)|(0))==50 | (($229)|(0))==51 | (($229)|(0))==52 | (($229)|(0))==53 | (($229)|(0))==54 | (($229)|(0))==55 | (($229)|(0))==56 | (($229)|(0))==57) {
        label = 67; break;
      }
      else if ((($229)|(0))==97 | (($229)|(0))==98 | (($229)|(0))==99 | (($229)|(0))==100 | (($229)|(0))==101 | (($229)|(0))==102) {
        label = 68; break;
      }
      else if ((($229)|(0))==65 | (($229)|(0))==66 | (($229)|(0))==67 | (($229)|(0))==68 | (($229)|(0))==69 | (($229)|(0))==70) {
        label = 69; break;
      }
      else {
      label = 70; break;
      }
    case 67: 
      var $231=$digit;
      var $232=(($231)&(65535));
      var $233=((($232)-(48))|0);
      var $234=HEAP16[(($c)>>1)];
      var $235=(($234)&(65535));
      var $236=$235 | $233;
      var $237=(($236) & 65535);
      HEAP16[(($c)>>1)]=$237;
      label = 71; break;
    case 68: 
      var $239=$digit;
      var $240=(($239)&(65535));
      var $241=((($240)-(97))|0);
      var $242=((($241)+(10))|0);
      var $243=HEAP16[(($c)>>1)];
      var $244=(($243)&(65535));
      var $245=$244 | $242;
      var $246=(($245) & 65535);
      HEAP16[(($c)>>1)]=$246;
      label = 71; break;
    case 69: 
      var $248=$digit;
      var $249=(($248)&(65535));
      var $250=((($249)-(65))|0);
      var $251=((($250)+(10))|0);
      var $252=HEAP16[(($c)>>1)];
      var $253=(($252)&(65535));
      var $254=$253 | $251;
      var $255=(($254) & 65535);
      HEAP16[(($c)>>1)]=$255;
      label = 71; break;
    case 70: 
      var $257=$2;
      var $258=$3;
      var $259=((($258)-(5))|0);
      _raise_errmsg(((__str12)|0), $257, $259);
      label = 101; break;
    case 71: 
      label = 72; break;
    case 72: 
      var $262=$next;
      var $263=((($262)+(1))|0);
      $next=$263;
      label = 65; break;
    case 73: 
      label = 74; break;
    case 74: 
      var $266=_PyUnicodeUCS2_FromUnicode($c, 1);
      $chunk=$266;
      var $267=$chunk;
      var $268=(($267)|(0))==0;
      if ($268) { label = 75; break; } else { label = 76; break; }
    case 75: 
      label = 101; break;
    case 76: 
      var $271=$chunks;
      var $272=$chunk;
      var $273=_PyList_Append($271, $272);
      var $274=(($273)|(0))!=0;
      if ($274) { label = 77; break; } else { label = 83; break; }
    case 77: 
      label = 78; break;
    case 78: 
      var $277=$chunk;
      var $278=(($277)|0);
      var $279=HEAP32[(($278)>>2)];
      var $280=((($279)-(1))|0);
      HEAP32[(($278)>>2)]=$280;
      var $281=(($280)|(0))!=0;
      if ($281) { label = 79; break; } else { label = 80; break; }
    case 79: 
      label = 81; break;
    case 80: 
      var $284=$chunk;
      var $285=(($284+4)|0);
      var $286=HEAP32[(($285)>>2)];
      var $287=(($286+24)|0);
      var $288=HEAP32[(($287)>>2)];
      var $289=$chunk;
      FUNCTION_TABLE[$288]($289);
      label = 81; break;
    case 81: 
      label = 82; break;
    case 82: 
      label = 101; break;
    case 83: 
      label = 84; break;
    case 84: 
      var $294=$chunk;
      var $295=(($294)|0);
      var $296=HEAP32[(($295)>>2)];
      var $297=((($296)-(1))|0);
      HEAP32[(($295)>>2)]=$297;
      var $298=(($297)|(0))!=0;
      if ($298) { label = 85; break; } else { label = 86; break; }
    case 85: 
      label = 87; break;
    case 86: 
      var $301=$chunk;
      var $302=(($301+4)|0);
      var $303=HEAP32[(($302)>>2)];
      var $304=(($303+24)|0);
      var $305=HEAP32[(($304)>>2)];
      var $306=$chunk;
      FUNCTION_TABLE[$305]($306);
      label = 87; break;
    case 87: 
      label = 88; break;
    case 88: 
      label = 7; break;
    case 89: 
      var $310=$chunks;
      var $311=_join_list_unicode($310);
      $rval=$311;
      var $312=$rval;
      var $313=(($312)|(0))==0;
      if ($313) { label = 90; break; } else { label = 91; break; }
    case 90: 
      label = 101; break;
    case 91: 
      label = 92; break;
    case 92: 
      var $317=$chunks;
      var $318=(($317)|(0))!=0;
      if ($318) { label = 93; break; } else { label = 99; break; }
    case 93: 
      var $320=$chunks;
      $_py_tmp=$320;
      $chunks=0;
      label = 94; break;
    case 94: 
      var $322=$_py_tmp;
      var $323=(($322)|0);
      var $324=HEAP32[(($323)>>2)];
      var $325=((($324)-(1))|0);
      HEAP32[(($323)>>2)]=$325;
      var $326=(($325)|(0))!=0;
      if ($326) { label = 95; break; } else { label = 96; break; }
    case 95: 
      label = 97; break;
    case 96: 
      var $329=$_py_tmp;
      var $330=(($329+4)|0);
      var $331=HEAP32[(($330)>>2)];
      var $332=(($331+24)|0);
      var $333=HEAP32[(($332)>>2)];
      var $334=$_py_tmp;
      FUNCTION_TABLE[$333]($334);
      label = 97; break;
    case 97: 
      label = 98; break;
    case 98: 
      label = 99; break;
    case 99: 
      label = 100; break;
    case 100: 
      var $339=$3;
      var $340=$6;
      HEAP32[(($340)>>2)]=$339;
      var $341=$rval;
      $1=$341;
      label = 112; break;
    case 101: 
      var $343=$6;
      HEAP32[(($343)>>2)]=-1;
      label = 102; break;
    case 102: 
      var $345=$chunks;
      var $346=(($345)|(0))==0;
      if ($346) { label = 103; break; } else { label = 104; break; }
    case 103: 
      label = 110; break;
    case 104: 
      label = 105; break;
    case 105: 
      var $350=$chunks;
      var $351=(($350)|0);
      var $352=HEAP32[(($351)>>2)];
      var $353=((($352)-(1))|0);
      HEAP32[(($351)>>2)]=$353;
      var $354=(($353)|(0))!=0;
      if ($354) { label = 106; break; } else { label = 107; break; }
    case 106: 
      label = 108; break;
    case 107: 
      var $357=$chunks;
      var $358=(($357+4)|0);
      var $359=HEAP32[(($358)>>2)];
      var $360=(($359+24)|0);
      var $361=HEAP32[(($360)>>2)];
      var $362=$chunks;
      FUNCTION_TABLE[$361]($362);
      label = 108; break;
    case 108: 
      label = 109; break;
    case 109: 
      label = 110; break;
    case 110: 
      label = 111; break;
    case 111: 
      $1=0;
      label = 112; break;
    case 112: 
      var $368=$1;
      STACKTOP = __stackBase__;
      return $368;
    default: assert(0, "bad label: " + label);
  }
}
function _scanstring_unicode($pystr, $end, $strict, $next_end_ptr) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $rval;
      var $len;
      var $begin;
      var $next;
      var $buf;
      var $chunks;
      var $c=__stackBase__;
      var $chunk;
      var $digit;
      $2=$pystr;
      $3=$end;
      $4=$strict;
      $5=$next_end_ptr;
      var $6=$2;
      var $7=$6;
      var $8=(($7+8)|0);
      var $9=HEAP32[(($8)>>2)];
      $len=$9;
      var $10=$3;
      var $11=((($10)-(1))|0);
      $begin=$11;
      var $12=$2;
      var $13=$12;
      var $14=(($13+12)|0);
      var $15=HEAP32[(($14)>>2)];
      $buf=$15;
      var $16=_PyList_New(0);
      $chunks=$16;
      var $17=$chunks;
      var $18=(($17)|(0))==0;
      if ($18) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 90; break;
    case 3: 
      var $21=$3;
      var $22=(($21)|(0)) < 0;
      if ($22) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $24=$len;
      var $25=$3;
      var $26=(($24)|(0)) <= (($25)|(0));
      if ($26) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $28=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($28, ((__str8)|0));
      label = 90; break;
    case 6: 
      label = 7; break;
    case 7: 
      HEAP16[(($c)>>1)]=0;
      $chunk=0;
      var $31=$3;
      $next=$31;
      label = 8; break;
    case 8: 
      var $33=$next;
      var $34=$len;
      var $35=(($33)|(0)) < (($34)|(0));
      if ($35) { label = 9; break; } else { label = 18; break; }
    case 9: 
      var $37=$next;
      var $38=$buf;
      var $39=(($38+($37<<1))|0);
      var $40=HEAP16[(($39)>>1)];
      HEAP16[(($c)>>1)]=$40;
      var $41=HEAP16[(($c)>>1)];
      var $42=(($41)&(65535));
      var $43=(($42)|(0))==34;
      if ($43) { label = 11; break; } else { label = 10; break; }
    case 10: 
      var $45=HEAP16[(($c)>>1)];
      var $46=(($45)&(65535));
      var $47=(($46)|(0))==92;
      if ($47) { label = 11; break; } else { label = 12; break; }
    case 11: 
      label = 18; break;
    case 12: 
      var $50=$4;
      var $51=(($50)|(0))!=0;
      if ($51) { label = 13; break; } else { label = 15; break; }
    case 13: 
      var $53=HEAP16[(($c)>>1)];
      var $54=(($53)&(65535));
      var $55=(($54)|(0)) <= 31;
      if ($55) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $57=$2;
      var $58=$next;
      _raise_errmsg(((__str9)|0), $57, $58);
      label = 90; break;
    case 15: 
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $62=$next;
      var $63=((($62)+(1))|0);
      $next=$63;
      label = 8; break;
    case 18: 
      var $65=HEAP16[(($c)>>1)];
      var $66=(($65)&(65535));
      var $67=(($66)|(0))==34;
      if ($67) { label = 21; break; } else { label = 19; break; }
    case 19: 
      var $69=HEAP16[(($c)>>1)];
      var $70=(($69)&(65535));
      var $71=(($70)|(0))==92;
      if ($71) { label = 21; break; } else { label = 20; break; }
    case 20: 
      var $73=$2;
      var $74=$begin;
      _raise_errmsg(((__str10)|0), $73, $74);
      label = 90; break;
    case 21: 
      var $76=$next;
      var $77=$3;
      var $78=(($76)|(0))!=(($77)|(0));
      if ($78) { label = 22; break; } else { label = 37; break; }
    case 22: 
      var $80=$3;
      var $81=$buf;
      var $82=(($81+($80<<1))|0);
      var $83=$next;
      var $84=$3;
      var $85=((($83)-($84))|0);
      var $86=_PyUnicodeUCS2_FromUnicode($82, $85);
      $chunk=$86;
      var $87=$chunk;
      var $88=(($87)|(0))==0;
      if ($88) { label = 23; break; } else { label = 24; break; }
    case 23: 
      label = 90; break;
    case 24: 
      var $91=$chunks;
      var $92=$chunk;
      var $93=_PyList_Append($91, $92);
      var $94=(($93)|(0))!=0;
      if ($94) { label = 25; break; } else { label = 31; break; }
    case 25: 
      label = 26; break;
    case 26: 
      var $97=$chunk;
      var $98=(($97)|0);
      var $99=HEAP32[(($98)>>2)];
      var $100=((($99)-(1))|0);
      HEAP32[(($98)>>2)]=$100;
      var $101=(($100)|(0))!=0;
      if ($101) { label = 27; break; } else { label = 28; break; }
    case 27: 
      label = 29; break;
    case 28: 
      var $104=$chunk;
      var $105=(($104+4)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=(($106+24)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=$chunk;
      FUNCTION_TABLE[$108]($109);
      label = 29; break;
    case 29: 
      label = 30; break;
    case 30: 
      label = 90; break;
    case 31: 
      label = 32; break;
    case 32: 
      var $114=$chunk;
      var $115=(($114)|0);
      var $116=HEAP32[(($115)>>2)];
      var $117=((($116)-(1))|0);
      HEAP32[(($115)>>2)]=$117;
      var $118=(($117)|(0))!=0;
      if ($118) { label = 33; break; } else { label = 34; break; }
    case 33: 
      label = 35; break;
    case 34: 
      var $121=$chunk;
      var $122=(($121+4)|0);
      var $123=HEAP32[(($122)>>2)];
      var $124=(($123+24)|0);
      var $125=HEAP32[(($124)>>2)];
      var $126=$chunk;
      FUNCTION_TABLE[$125]($126);
      label = 35; break;
    case 35: 
      label = 36; break;
    case 36: 
      label = 37; break;
    case 37: 
      var $130=$next;
      var $131=((($130)+(1))|0);
      $next=$131;
      var $132=HEAP16[(($c)>>1)];
      var $133=(($132)&(65535));
      var $134=(($133)|(0))==34;
      if ($134) { label = 38; break; } else { label = 39; break; }
    case 38: 
      var $136=$next;
      $3=$136;
      label = 82; break;
    case 39: 
      var $138=$next;
      var $139=$len;
      var $140=(($138)|(0))==(($139)|(0));
      if ($140) { label = 40; break; } else { label = 41; break; }
    case 40: 
      var $142=$2;
      var $143=$begin;
      _raise_errmsg(((__str10)|0), $142, $143);
      label = 90; break;
    case 41: 
      var $145=$next;
      var $146=$buf;
      var $147=(($146+($145<<1))|0);
      var $148=HEAP16[(($147)>>1)];
      HEAP16[(($c)>>1)]=$148;
      var $149=HEAP16[(($c)>>1)];
      var $150=(($149)&(65535));
      var $151=(($150)|(0))!=117;
      if ($151) { label = 42; break; } else { label = 55; break; }
    case 42: 
      var $153=$next;
      var $154=((($153)+(1))|0);
      $3=$154;
      var $155=HEAP16[(($c)>>1)];
      var $156=(($155)&(65535));
      if ((($156)|(0))==34) {
        label = 43; break;
      }
      else if ((($156)|(0))==92) {
        label = 44; break;
      }
      else if ((($156)|(0))==47) {
        label = 45; break;
      }
      else if ((($156)|(0))==98) {
        label = 46; break;
      }
      else if ((($156)|(0))==102) {
        label = 47; break;
      }
      else if ((($156)|(0))==110) {
        label = 48; break;
      }
      else if ((($156)|(0))==114) {
        label = 49; break;
      }
      else if ((($156)|(0))==116) {
        label = 50; break;
      }
      else {
      label = 51; break;
      }
    case 43: 
      label = 52; break;
    case 44: 
      label = 52; break;
    case 45: 
      label = 52; break;
    case 46: 
      HEAP16[(($c)>>1)]=8;
      label = 52; break;
    case 47: 
      HEAP16[(($c)>>1)]=12;
      label = 52; break;
    case 48: 
      HEAP16[(($c)>>1)]=10;
      label = 52; break;
    case 49: 
      HEAP16[(($c)>>1)]=13;
      label = 52; break;
    case 50: 
      HEAP16[(($c)>>1)]=9;
      label = 52; break;
    case 51: 
      HEAP16[(($c)>>1)]=0;
      label = 52; break;
    case 52: 
      var $167=HEAP16[(($c)>>1)];
      var $168=(($167)&(65535));
      var $169=(($168)|(0))==0;
      if ($169) { label = 53; break; } else { label = 54; break; }
    case 53: 
      var $171=$2;
      var $172=$3;
      var $173=((($172)-(2))|0);
      _raise_errmsg(((__str11)|0), $171, $173);
      label = 90; break;
    case 54: 
      label = 67; break;
    case 55: 
      HEAP16[(($c)>>1)]=0;
      var $176=$next;
      var $177=((($176)+(1))|0);
      $next=$177;
      var $178=$next;
      var $179=((($178)+(4))|0);
      $3=$179;
      var $180=$3;
      var $181=$len;
      var $182=(($180)|(0)) >= (($181)|(0));
      if ($182) { label = 56; break; } else { label = 57; break; }
    case 56: 
      var $184=$2;
      var $185=$next;
      var $186=((($185)-(1))|0);
      _raise_errmsg(((__str12)|0), $184, $186);
      label = 90; break;
    case 57: 
      label = 58; break;
    case 58: 
      var $189=$next;
      var $190=$3;
      var $191=(($189)|(0)) < (($190)|(0));
      if ($191) { label = 59; break; } else { label = 66; break; }
    case 59: 
      var $193=$next;
      var $194=$buf;
      var $195=(($194+($193<<1))|0);
      var $196=HEAP16[(($195)>>1)];
      $digit=$196;
      var $197=HEAP16[(($c)>>1)];
      var $198=(($197)&(65535));
      var $199=$198 << 4;
      var $200=(($199) & 65535);
      HEAP16[(($c)>>1)]=$200;
      var $201=$digit;
      var $202=(($201)&(65535));
      if ((($202)|(0))==48 | (($202)|(0))==49 | (($202)|(0))==50 | (($202)|(0))==51 | (($202)|(0))==52 | (($202)|(0))==53 | (($202)|(0))==54 | (($202)|(0))==55 | (($202)|(0))==56 | (($202)|(0))==57) {
        label = 60; break;
      }
      else if ((($202)|(0))==97 | (($202)|(0))==98 | (($202)|(0))==99 | (($202)|(0))==100 | (($202)|(0))==101 | (($202)|(0))==102) {
        label = 61; break;
      }
      else if ((($202)|(0))==65 | (($202)|(0))==66 | (($202)|(0))==67 | (($202)|(0))==68 | (($202)|(0))==69 | (($202)|(0))==70) {
        label = 62; break;
      }
      else {
      label = 63; break;
      }
    case 60: 
      var $204=$digit;
      var $205=(($204)&(65535));
      var $206=((($205)-(48))|0);
      var $207=HEAP16[(($c)>>1)];
      var $208=(($207)&(65535));
      var $209=$208 | $206;
      var $210=(($209) & 65535);
      HEAP16[(($c)>>1)]=$210;
      label = 64; break;
    case 61: 
      var $212=$digit;
      var $213=(($212)&(65535));
      var $214=((($213)-(97))|0);
      var $215=((($214)+(10))|0);
      var $216=HEAP16[(($c)>>1)];
      var $217=(($216)&(65535));
      var $218=$217 | $215;
      var $219=(($218) & 65535);
      HEAP16[(($c)>>1)]=$219;
      label = 64; break;
    case 62: 
      var $221=$digit;
      var $222=(($221)&(65535));
      var $223=((($222)-(65))|0);
      var $224=((($223)+(10))|0);
      var $225=HEAP16[(($c)>>1)];
      var $226=(($225)&(65535));
      var $227=$226 | $224;
      var $228=(($227) & 65535);
      HEAP16[(($c)>>1)]=$228;
      label = 64; break;
    case 63: 
      var $230=$2;
      var $231=$3;
      var $232=((($231)-(5))|0);
      _raise_errmsg(((__str12)|0), $230, $232);
      label = 90; break;
    case 64: 
      label = 65; break;
    case 65: 
      var $235=$next;
      var $236=((($235)+(1))|0);
      $next=$236;
      label = 58; break;
    case 66: 
      label = 67; break;
    case 67: 
      var $239=_PyUnicodeUCS2_FromUnicode($c, 1);
      $chunk=$239;
      var $240=$chunk;
      var $241=(($240)|(0))==0;
      if ($241) { label = 68; break; } else { label = 69; break; }
    case 68: 
      label = 90; break;
    case 69: 
      var $244=$chunks;
      var $245=$chunk;
      var $246=_PyList_Append($244, $245);
      var $247=(($246)|(0))!=0;
      if ($247) { label = 70; break; } else { label = 76; break; }
    case 70: 
      label = 71; break;
    case 71: 
      var $250=$chunk;
      var $251=(($250)|0);
      var $252=HEAP32[(($251)>>2)];
      var $253=((($252)-(1))|0);
      HEAP32[(($251)>>2)]=$253;
      var $254=(($253)|(0))!=0;
      if ($254) { label = 72; break; } else { label = 73; break; }
    case 72: 
      label = 74; break;
    case 73: 
      var $257=$chunk;
      var $258=(($257+4)|0);
      var $259=HEAP32[(($258)>>2)];
      var $260=(($259+24)|0);
      var $261=HEAP32[(($260)>>2)];
      var $262=$chunk;
      FUNCTION_TABLE[$261]($262);
      label = 74; break;
    case 74: 
      label = 75; break;
    case 75: 
      label = 90; break;
    case 76: 
      label = 77; break;
    case 77: 
      var $267=$chunk;
      var $268=(($267)|0);
      var $269=HEAP32[(($268)>>2)];
      var $270=((($269)-(1))|0);
      HEAP32[(($268)>>2)]=$270;
      var $271=(($270)|(0))!=0;
      if ($271) { label = 78; break; } else { label = 79; break; }
    case 78: 
      label = 80; break;
    case 79: 
      var $274=$chunk;
      var $275=(($274+4)|0);
      var $276=HEAP32[(($275)>>2)];
      var $277=(($276+24)|0);
      var $278=HEAP32[(($277)>>2)];
      var $279=$chunk;
      FUNCTION_TABLE[$278]($279);
      label = 80; break;
    case 80: 
      label = 81; break;
    case 81: 
      label = 7; break;
    case 82: 
      var $283=$chunks;
      var $284=_join_list_unicode($283);
      $rval=$284;
      var $285=$rval;
      var $286=(($285)|(0))==0;
      if ($286) { label = 83; break; } else { label = 84; break; }
    case 83: 
      label = 90; break;
    case 84: 
      label = 85; break;
    case 85: 
      var $290=$chunks;
      var $291=(($290)|0);
      var $292=HEAP32[(($291)>>2)];
      var $293=((($292)-(1))|0);
      HEAP32[(($291)>>2)]=$293;
      var $294=(($293)|(0))!=0;
      if ($294) { label = 86; break; } else { label = 87; break; }
    case 86: 
      label = 88; break;
    case 87: 
      var $297=$chunks;
      var $298=(($297+4)|0);
      var $299=HEAP32[(($298)>>2)];
      var $300=(($299+24)|0);
      var $301=HEAP32[(($300)>>2)];
      var $302=$chunks;
      FUNCTION_TABLE[$301]($302);
      label = 88; break;
    case 88: 
      label = 89; break;
    case 89: 
      var $305=$3;
      var $306=$5;
      HEAP32[(($306)>>2)]=$305;
      var $307=$rval;
      $1=$307;
      label = 101; break;
    case 90: 
      var $309=$5;
      HEAP32[(($309)>>2)]=-1;
      label = 91; break;
    case 91: 
      var $311=$chunks;
      var $312=(($311)|(0))==0;
      if ($312) { label = 92; break; } else { label = 93; break; }
    case 92: 
      label = 99; break;
    case 93: 
      label = 94; break;
    case 94: 
      var $316=$chunks;
      var $317=(($316)|0);
      var $318=HEAP32[(($317)>>2)];
      var $319=((($318)-(1))|0);
      HEAP32[(($317)>>2)]=$319;
      var $320=(($319)|(0))!=0;
      if ($320) { label = 95; break; } else { label = 96; break; }
    case 95: 
      label = 97; break;
    case 96: 
      var $323=$chunks;
      var $324=(($323+4)|0);
      var $325=HEAP32[(($324)>>2)];
      var $326=(($325+24)|0);
      var $327=HEAP32[(($326)>>2)];
      var $328=$chunks;
      FUNCTION_TABLE[$327]($328);
      label = 97; break;
    case 97: 
      label = 98; break;
    case 98: 
      label = 99; break;
    case 99: 
      label = 100; break;
    case 100: 
      $1=0;
      label = 101; break;
    case 101: 
      var $334=$1;
      STACKTOP = __stackBase__;
      return $334;
    default: assert(0, "bad label: " + label);
  }
}
function __build_rval_index_tuple($rval, $idx) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $tpl;
      var $pyidx;
      $2=$rval;
      $3=$idx;
      var $4=$2;
      var $5=(($4)|(0))==0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 23; break;
    case 3: 
      var $8=$3;
      var $9=_PyInt_FromSsize_t($8);
      $pyidx=$9;
      var $10=$pyidx;
      var $11=(($10)|(0))==0;
      if ($11) { label = 4; break; } else { label = 10; break; }
    case 4: 
      label = 5; break;
    case 5: 
      var $14=$2;
      var $15=(($14)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=((($16)-(1))|0);
      HEAP32[(($15)>>2)]=$17;
      var $18=(($17)|(0))!=0;
      if ($18) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      var $21=$2;
      var $22=(($21+4)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23+24)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=$2;
      FUNCTION_TABLE[$25]($26);
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      $1=0;
      label = 23; break;
    case 10: 
      var $30=_PyTuple_New(2);
      $tpl=$30;
      var $31=$tpl;
      var $32=(($31)|(0))==0;
      if ($32) { label = 11; break; } else { label = 22; break; }
    case 11: 
      label = 12; break;
    case 12: 
      var $35=$pyidx;
      var $36=(($35)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=((($37)-(1))|0);
      HEAP32[(($36)>>2)]=$38;
      var $39=(($38)|(0))!=0;
      if ($39) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 15; break;
    case 14: 
      var $42=$pyidx;
      var $43=(($42+4)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=(($44+24)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=$pyidx;
      FUNCTION_TABLE[$46]($47);
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $51=$2;
      var $52=(($51)|0);
      var $53=HEAP32[(($52)>>2)];
      var $54=((($53)-(1))|0);
      HEAP32[(($52)>>2)]=$54;
      var $55=(($54)|(0))!=0;
      if ($55) { label = 18; break; } else { label = 19; break; }
    case 18: 
      label = 20; break;
    case 19: 
      var $58=$2;
      var $59=(($58+4)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=(($60+24)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=$2;
      FUNCTION_TABLE[$62]($63);
      label = 20; break;
    case 20: 
      label = 21; break;
    case 21: 
      $1=0;
      label = 23; break;
    case 22: 
      var $67=$2;
      var $68=$tpl;
      var $69=$68;
      var $70=(($69+12)|0);
      var $71=(($70)|0);
      HEAP32[(($71)>>2)]=$67;
      var $72=$pyidx;
      var $73=$tpl;
      var $74=$73;
      var $75=(($74+12)|0);
      var $76=(($75+4)|0);
      HEAP32[(($76)>>2)]=$72;
      var $77=$tpl;
      $1=$77;
      label = 23; break;
    case 23: 
      var $79=$1;
      return $79;
    default: assert(0, "bad label: " + label);
  }
}
function _raise_errmsg($msg, $s, $end) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3=__stackBase__;
      var $pymsg;
      var $decoder;
      $1=$msg;
      $2=$s;
      HEAP32[(($3)>>2)]=$end;
      var $4=HEAP32[((_raise_errmsg_errmsg_fn)>>2)];
      var $5=(($4)|(0))==0;
      if ($5) { label = 2; break; } else { label = 12; break; }
    case 2: 
      var $7=_PyImport_ImportModule(((__str14)|0));
      $decoder=$7;
      var $8=$decoder;
      var $9=(($8)|(0))==0;
      if ($9) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 19; break;
    case 4: 
      var $12=$decoder;
      var $13=_PyObject_GetAttrString($12, ((__str15)|0));
      HEAP32[((_raise_errmsg_errmsg_fn)>>2)]=$13;
      label = 5; break;
    case 5: 
      var $15=$decoder;
      var $16=(($15)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=((($17)-(1))|0);
      HEAP32[(($16)>>2)]=$18;
      var $19=(($18)|(0))!=0;
      if ($19) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      var $22=$decoder;
      var $23=(($22+4)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=(($24+24)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=$decoder;
      FUNCTION_TABLE[$26]($27);
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      var $30=HEAP32[((_raise_errmsg_errmsg_fn)>>2)];
      var $31=(($30)|(0))==0;
      if ($31) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 19; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $35=HEAP32[((_raise_errmsg_errmsg_fn)>>2)];
      var $36=$1;
      var $37=$2;
      var $38=_PyObject_CallFunction($35, ((__str16)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$36,HEAP32[(((tempInt)+(4))>>2)]=$37,HEAP32[(((tempInt)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 6),HEAP32[(((tempInt)+(12))>>2)]=$3,tempInt));
      $pymsg=$38;
      var $39=$pymsg;
      var $40=(($39)|(0))!=0;
      if ($40) { label = 13; break; } else { label = 19; break; }
    case 13: 
      var $42=HEAP32[((_PyExc_ValueError)>>2)];
      var $43=$pymsg;
      _PyErr_SetObject($42, $43);
      label = 14; break;
    case 14: 
      var $45=$pymsg;
      var $46=(($45)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=((($47)-(1))|0);
      HEAP32[(($46)>>2)]=$48;
      var $49=(($48)|(0))!=0;
      if ($49) { label = 15; break; } else { label = 16; break; }
    case 15: 
      label = 17; break;
    case 16: 
      var $52=$pymsg;
      var $53=(($52+4)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=(($54+24)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=$pymsg;
      FUNCTION_TABLE[$56]($57);
      label = 17; break;
    case 17: 
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      STACKTOP = __stackBase__;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _join_list_unicode($lst) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $ustr;
      $2=$lst;
      var $3=HEAP32[((_join_list_unicode_joinfn)>>2)];
      var $4=(($3)|(0))==0;
      if ($4) { label = 2; break; } else { label = 12; break; }
    case 2: 
      var $6=_PyUnicodeUCS2_FromUnicode(0, 0);
      $ustr=$6;
      var $7=$ustr;
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 13; break;
    case 4: 
      var $11=$ustr;
      var $12=_PyObject_GetAttrString($11, ((__str13)|0));
      HEAP32[((_join_list_unicode_joinfn)>>2)]=$12;
      label = 5; break;
    case 5: 
      var $14=$ustr;
      var $15=(($14)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=((($16)-(1))|0);
      HEAP32[(($15)>>2)]=$17;
      var $18=(($17)|(0))!=0;
      if ($18) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      var $21=$ustr;
      var $22=(($21+4)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23+24)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=$ustr;
      FUNCTION_TABLE[$25]($26);
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      var $29=HEAP32[((_join_list_unicode_joinfn)>>2)];
      var $30=(($29)|(0))==0;
      if ($30) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=0;
      label = 13; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $34=HEAP32[((_join_list_unicode_joinfn)>>2)];
      var $35=$2;
      var $36=_PyObject_CallFunctionObjArgs($34, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$35,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $1=$36;
      label = 13; break;
    case 13: 
      var $38=$1;
      STACKTOP = __stackBase__;
      return $38;
    default: assert(0, "bad label: " + label);
  }
}
function __convertPyInt_FromSsize_t($size_ptr) {
  var label = 0;
  var $1;
  $1=$size_ptr;
  var $2=$1;
  var $3=HEAP32[(($2)>>2)];
  var $4=_PyInt_FromSsize_t($3);
  return $4;
}
function _ascii_escape_char($c, $output, $chars) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $1=$c;
      $2=$output;
      $3=$chars;
      var $4=$3;
      var $5=((($4)+(1))|0);
      $3=$5;
      var $6=$2;
      var $7=(($6+$4)|0);
      HEAP8[($7)]=92;
      var $8=$1;
      var $9=(($8)&(65535));
      if ((($9)|(0))==92) {
        label = 2; break;
      }
      else if ((($9)|(0))==34) {
        label = 3; break;
      }
      else if ((($9)|(0))==8) {
        label = 4; break;
      }
      else if ((($9)|(0))==12) {
        label = 5; break;
      }
      else if ((($9)|(0))==10) {
        label = 6; break;
      }
      else if ((($9)|(0))==13) {
        label = 7; break;
      }
      else if ((($9)|(0))==9) {
        label = 8; break;
      }
      else {
      label = 9; break;
      }
    case 2: 
      var $11=$1;
      var $12=(($11) & 255);
      var $13=$3;
      var $14=((($13)+(1))|0);
      $3=$14;
      var $15=$2;
      var $16=(($15+$13)|0);
      HEAP8[($16)]=$12;
      label = 10; break;
    case 3: 
      var $18=$1;
      var $19=(($18) & 255);
      var $20=$3;
      var $21=((($20)+(1))|0);
      $3=$21;
      var $22=$2;
      var $23=(($22+$20)|0);
      HEAP8[($23)]=$19;
      label = 10; break;
    case 4: 
      var $25=$3;
      var $26=((($25)+(1))|0);
      $3=$26;
      var $27=$2;
      var $28=(($27+$25)|0);
      HEAP8[($28)]=98;
      label = 10; break;
    case 5: 
      var $30=$3;
      var $31=((($30)+(1))|0);
      $3=$31;
      var $32=$2;
      var $33=(($32+$30)|0);
      HEAP8[($33)]=102;
      label = 10; break;
    case 6: 
      var $35=$3;
      var $36=((($35)+(1))|0);
      $3=$36;
      var $37=$2;
      var $38=(($37+$35)|0);
      HEAP8[($38)]=110;
      label = 10; break;
    case 7: 
      var $40=$3;
      var $41=((($40)+(1))|0);
      $3=$41;
      var $42=$2;
      var $43=(($42+$40)|0);
      HEAP8[($43)]=114;
      label = 10; break;
    case 8: 
      var $45=$3;
      var $46=((($45)+(1))|0);
      $3=$46;
      var $47=$2;
      var $48=(($47+$45)|0);
      HEAP8[($48)]=116;
      label = 10; break;
    case 9: 
      var $50=$3;
      var $51=((($50)+(1))|0);
      $3=$51;
      var $52=$2;
      var $53=(($52+$50)|0);
      HEAP8[($53)]=117;
      var $54=$1;
      var $55=(($54)&(65535));
      var $56=$55 >> 12;
      var $57=$56 & 15;
      var $58=((__str17+$57)|0);
      var $59=HEAP8[($58)];
      var $60=$3;
      var $61=((($60)+(1))|0);
      $3=$61;
      var $62=$2;
      var $63=(($62+$60)|0);
      HEAP8[($63)]=$59;
      var $64=$1;
      var $65=(($64)&(65535));
      var $66=$65 >> 8;
      var $67=$66 & 15;
      var $68=((__str17+$67)|0);
      var $69=HEAP8[($68)];
      var $70=$3;
      var $71=((($70)+(1))|0);
      $3=$71;
      var $72=$2;
      var $73=(($72+$70)|0);
      HEAP8[($73)]=$69;
      var $74=$1;
      var $75=(($74)&(65535));
      var $76=$75 >> 4;
      var $77=$76 & 15;
      var $78=((__str17+$77)|0);
      var $79=HEAP8[($78)];
      var $80=$3;
      var $81=((($80)+(1))|0);
      $3=$81;
      var $82=$2;
      var $83=(($82+$80)|0);
      HEAP8[($83)]=$79;
      var $84=$1;
      var $85=(($84)&(65535));
      var $86=$85 & 15;
      var $87=((__str17+$86)|0);
      var $88=HEAP8[($87)];
      var $89=$3;
      var $90=((($89)+(1))|0);
      $3=$90;
      var $91=$2;
      var $92=(($91+$89)|0);
      HEAP8[($92)]=$88;
      label = 10; break;
    case 10: 
      var $94=$3;
      return $94;
    default: assert(0, "bad label: " + label);
  }
}
function _ascii_escape_str($pystr) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $i;
      var $input_chars;
      var $output_size;
      var $chars;
      var $rval=__stackBase__;
      var $output;
      var $input_str;
      var $c;
      var $j;
      var $uni;
      var $c1;
      $2=$pystr;
      var $3=$2;
      var $4=$3;
      var $5=(($4+8)|0);
      var $6=HEAP32[(($5)>>2)];
      $input_chars=$6;
      var $7=$2;
      var $8=$7;
      var $9=(($8+20)|0);
      var $10=(($9)|0);
      $input_str=$10;
      $i=0;
      label = 2; break;
    case 2: 
      var $12=$i;
      var $13=$input_chars;
      var $14=(($12)|(0)) < (($13)|(0));
      if ($14) { label = 3; break; } else { label = 23; break; }
    case 3: 
      var $16=$i;
      var $17=$input_str;
      var $18=(($17+$16)|0);
      var $19=HEAP8[($18)];
      var $20=(($19)&(255));
      $c=$20;
      var $21=$c;
      var $22=(($21)&(65535));
      var $23=(($22)|(0)) >= 32;
      if ($23) { label = 4; break; } else { label = 7; break; }
    case 4: 
      var $25=$c;
      var $26=(($25)&(65535));
      var $27=(($26)|(0)) <= 126;
      if ($27) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $29=$c;
      var $30=(($29)&(65535));
      var $31=(($30)|(0))!=92;
      if ($31) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $33=$c;
      var $34=(($33)&(65535));
      var $35=(($34)|(0))!=34;
      if ($35) { label = 21; break; } else { label = 7; break; }
    case 7: 
      var $37=$i;
      $j=$37;
      label = 8; break;
    case 8: 
      var $39=$j;
      var $40=$input_chars;
      var $41=(($39)|(0)) < (($40)|(0));
      if ($41) { label = 9; break; } else { label = 20; break; }
    case 9: 
      var $43=$j;
      var $44=$input_str;
      var $45=(($44+$43)|0);
      var $46=HEAP8[($45)];
      var $47=(($46)&(255));
      $c=$47;
      var $48=$c;
      var $49=(($48)&(65535));
      var $50=(($49)|(0)) > 127;
      if ($50) { label = 10; break; } else { label = 18; break; }
    case 10: 
      var $52=$input_str;
      var $53=$input_chars;
      var $54=_PyUnicodeUCS2_DecodeUTF8($52, $53, ((__str18)|0));
      $uni=$54;
      var $55=$uni;
      var $56=(($55)|(0))==0;
      if ($56) { label = 11; break; } else { label = 12; break; }
    case 11: 
      $1=0;
      label = 47; break;
    case 12: 
      var $59=$uni;
      var $60=_ascii_escape_unicode($59);
      HEAP32[(($rval)>>2)]=$60;
      label = 13; break;
    case 13: 
      var $62=$uni;
      var $63=(($62)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=((($64)-(1))|0);
      HEAP32[(($63)>>2)]=$65;
      var $66=(($65)|(0))!=0;
      if ($66) { label = 14; break; } else { label = 15; break; }
    case 14: 
      label = 16; break;
    case 15: 
      var $69=$uni;
      var $70=(($69+4)|0);
      var $71=HEAP32[(($70)>>2)];
      var $72=(($71+24)|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=$uni;
      FUNCTION_TABLE[$73]($74);
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $77=HEAP32[(($rval)>>2)];
      $1=$77;
      label = 47; break;
    case 18: 
      label = 19; break;
    case 19: 
      var $80=$j;
      var $81=((($80)+(1))|0);
      $j=$81;
      label = 8; break;
    case 20: 
      label = 23; break;
    case 21: 
      label = 22; break;
    case 22: 
      var $85=$i;
      var $86=((($85)+(1))|0);
      $i=$86;
      label = 2; break;
    case 23: 
      var $88=$i;
      var $89=$input_chars;
      var $90=(($88)|(0))==(($89)|(0));
      if ($90) { label = 24; break; } else { label = 25; break; }
    case 24: 
      var $92=$input_chars;
      var $93=((($92)+(2))|0);
      $output_size=$93;
      label = 26; break;
    case 25: 
      var $95=$input_chars;
      var $96=((($95)+(26))|0);
      $output_size=$96;
      label = 26; break;
    case 26: 
      var $98=$output_size;
      var $99=_PyString_FromStringAndSize(0, $98);
      HEAP32[(($rval)>>2)]=$99;
      var $100=HEAP32[(($rval)>>2)];
      var $101=(($100)|(0))==0;
      if ($101) { label = 27; break; } else { label = 28; break; }
    case 27: 
      $1=0;
      label = 47; break;
    case 28: 
      var $104=HEAP32[(($rval)>>2)];
      var $105=$104;
      var $106=(($105+20)|0);
      var $107=(($106)|0);
      $output=$107;
      var $108=$output;
      var $109=(($108)|0);
      HEAP8[($109)]=34;
      var $110=$i;
      var $111=((($110)+(1))|0);
      $chars=$111;
      var $112=$output;
      var $113=(($112+1)|0);
      var $114=$input_str;
      var $115=$i;
      assert($115 % 1 === 0);_memcpy($113, $114, $115);
      label = 29; break;
    case 29: 
      var $117=$i;
      var $118=$input_chars;
      var $119=(($117)|(0)) < (($118)|(0));
      if ($119) { label = 30; break; } else { label = 44; break; }
    case 30: 
      var $121=$i;
      var $122=$input_str;
      var $123=(($122+$121)|0);
      var $124=HEAP8[($123)];
      var $125=(($124)&(255));
      $c1=$125;
      var $126=$c1;
      var $127=(($126)&(65535));
      var $128=(($127)|(0)) >= 32;
      if ($128) { label = 31; break; } else { label = 35; break; }
    case 31: 
      var $130=$c1;
      var $131=(($130)&(65535));
      var $132=(($131)|(0)) <= 126;
      if ($132) { label = 32; break; } else { label = 35; break; }
    case 32: 
      var $134=$c1;
      var $135=(($134)&(65535));
      var $136=(($135)|(0))!=92;
      if ($136) { label = 33; break; } else { label = 35; break; }
    case 33: 
      var $138=$c1;
      var $139=(($138)&(65535));
      var $140=(($139)|(0))!=34;
      if ($140) { label = 34; break; } else { label = 35; break; }
    case 34: 
      var $142=$c1;
      var $143=(($142) & 255);
      var $144=$chars;
      var $145=((($144)+(1))|0);
      $chars=$145;
      var $146=$output;
      var $147=(($146+$144)|0);
      HEAP8[($147)]=$143;
      label = 36; break;
    case 35: 
      var $149=$c1;
      var $150=$output;
      var $151=$chars;
      var $152=_ascii_escape_char($149, $150, $151);
      $chars=$152;
      label = 36; break;
    case 36: 
      var $154=$output_size;
      var $155=$chars;
      var $156=((($154)-($155))|0);
      var $157=(($156)|(0)) < 7;
      if ($157) { label = 37; break; } else { label = 42; break; }
    case 37: 
      var $159=$output_size;
      var $160=($159<<1);
      $output_size=$160;
      var $161=$output_size;
      var $162=$input_chars;
      var $163=((($162)*(6))&-1);
      var $164=((($163)+(2))|0);
      var $165=(($161)|(0)) > (($164)|(0));
      if ($165) { label = 38; break; } else { label = 39; break; }
    case 38: 
      var $167=$input_chars;
      var $168=((($167)*(6))&-1);
      var $169=((($168)+(2))|0);
      $output_size=$169;
      label = 39; break;
    case 39: 
      var $171=$output_size;
      var $172=__PyString_Resize($rval, $171);
      var $173=(($172)|(0))==-1;
      if ($173) { label = 40; break; } else { label = 41; break; }
    case 40: 
      $1=0;
      label = 47; break;
    case 41: 
      var $176=HEAP32[(($rval)>>2)];
      var $177=$176;
      var $178=(($177+20)|0);
      var $179=(($178)|0);
      $output=$179;
      label = 42; break;
    case 42: 
      label = 43; break;
    case 43: 
      var $182=$i;
      var $183=((($182)+(1))|0);
      $i=$183;
      label = 29; break;
    case 44: 
      var $185=$chars;
      var $186=((($185)+(1))|0);
      $chars=$186;
      var $187=$output;
      var $188=(($187+$185)|0);
      HEAP8[($188)]=34;
      var $189=$chars;
      var $190=__PyString_Resize($rval, $189);
      var $191=(($190)|(0))==-1;
      if ($191) { label = 45; break; } else { label = 46; break; }
    case 45: 
      $1=0;
      label = 47; break;
    case 46: 
      var $194=HEAP32[(($rval)>>2)];
      $1=$194;
      label = 47; break;
    case 47: 
      var $196=$1;
      STACKTOP = __stackBase__;
      return $196;
    default: assert(0, "bad label: " + label);
  }
}
function _ascii_escape_unicode($pystr) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $i;
      var $input_chars;
      var $output_size;
      var $max_output_size;
      var $chars;
      var $rval=__stackBase__;
      var $output;
      var $input_unicode;
      var $c;
      var $new_output_size;
      $2=$pystr;
      var $3=$2;
      var $4=$3;
      var $5=(($4+8)|0);
      var $6=HEAP32[(($5)>>2)];
      $input_chars=$6;
      var $7=$2;
      var $8=$7;
      var $9=(($8+12)|0);
      var $10=HEAP32[(($9)>>2)];
      $input_unicode=$10;
      var $11=$input_chars;
      var $12=((($11)+(26))|0);
      $output_size=$12;
      var $13=$input_chars;
      var $14=((($13)*(6))&-1);
      var $15=((($14)+(2))|0);
      $max_output_size=$15;
      var $16=$output_size;
      var $17=_PyString_FromStringAndSize(0, $16);
      HEAP32[(($rval)>>2)]=$17;
      var $18=HEAP32[(($rval)>>2)];
      var $19=(($18)|(0))==0;
      if ($19) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 24; break;
    case 3: 
      var $22=HEAP32[(($rval)>>2)];
      var $23=$22;
      var $24=(($23+20)|0);
      var $25=(($24)|0);
      $output=$25;
      $chars=0;
      var $26=$chars;
      var $27=((($26)+(1))|0);
      $chars=$27;
      var $28=$output;
      var $29=(($28+$26)|0);
      HEAP8[($29)]=34;
      $i=0;
      label = 4; break;
    case 4: 
      var $31=$i;
      var $32=$input_chars;
      var $33=(($31)|(0)) < (($32)|(0));
      if ($33) { label = 5; break; } else { label = 21; break; }
    case 5: 
      var $35=$i;
      var $36=$input_unicode;
      var $37=(($36+($35<<1))|0);
      var $38=HEAP16[(($37)>>1)];
      $c=$38;
      var $39=$c;
      var $40=(($39)&(65535));
      var $41=(($40)|(0)) >= 32;
      if ($41) { label = 6; break; } else { label = 10; break; }
    case 6: 
      var $43=$c;
      var $44=(($43)&(65535));
      var $45=(($44)|(0)) <= 126;
      if ($45) { label = 7; break; } else { label = 10; break; }
    case 7: 
      var $47=$c;
      var $48=(($47)&(65535));
      var $49=(($48)|(0))!=92;
      if ($49) { label = 8; break; } else { label = 10; break; }
    case 8: 
      var $51=$c;
      var $52=(($51)&(65535));
      var $53=(($52)|(0))!=34;
      if ($53) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $55=$c;
      var $56=(($55) & 255);
      var $57=$chars;
      var $58=((($57)+(1))|0);
      $chars=$58;
      var $59=$output;
      var $60=(($59+$57)|0);
      HEAP8[($60)]=$56;
      label = 11; break;
    case 10: 
      var $62=$c;
      var $63=$output;
      var $64=$chars;
      var $65=_ascii_escape_char($62, $63, $64);
      $chars=$65;
      label = 11; break;
    case 11: 
      var $67=$output_size;
      var $68=$chars;
      var $69=((($67)-($68))|0);
      var $70=(($69)|(0)) < 7;
      if ($70) { label = 12; break; } else { label = 19; break; }
    case 12: 
      var $72=$output_size;
      var $73=($72<<1);
      $new_output_size=$73;
      var $74=$new_output_size;
      var $75=$max_output_size;
      var $76=(($74)|(0)) > (($75)|(0));
      if ($76) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $78=$max_output_size;
      $new_output_size=$78;
      label = 14; break;
    case 14: 
      var $80=$new_output_size;
      var $81=$output_size;
      var $82=(($80)|(0))!=(($81)|(0));
      if ($82) { label = 15; break; } else { label = 18; break; }
    case 15: 
      var $84=$new_output_size;
      $output_size=$84;
      var $85=$output_size;
      var $86=__PyString_Resize($rval, $85);
      var $87=(($86)|(0))==-1;
      if ($87) { label = 16; break; } else { label = 17; break; }
    case 16: 
      $1=0;
      label = 24; break;
    case 17: 
      var $90=HEAP32[(($rval)>>2)];
      var $91=$90;
      var $92=(($91+20)|0);
      var $93=(($92)|0);
      $output=$93;
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $97=$i;
      var $98=((($97)+(1))|0);
      $i=$98;
      label = 4; break;
    case 21: 
      var $100=$chars;
      var $101=((($100)+(1))|0);
      $chars=$101;
      var $102=$output;
      var $103=(($102+$100)|0);
      HEAP8[($103)]=34;
      var $104=$chars;
      var $105=__PyString_Resize($rval, $104);
      var $106=(($105)|(0))==-1;
      if ($106) { label = 22; break; } else { label = 23; break; }
    case 22: 
      $1=0;
      label = 24; break;
    case 23: 
      var $109=HEAP32[(($rval)>>2)];
      $1=$109;
      label = 24; break;
    case 24: 
      var $111=$1;
      STACKTOP = __stackBase__;
      return $111;
    default: assert(0, "bad label: " + label);
  }
}
function _encoder_dealloc($self) {
  var label = 0;
  var $1;
  $1=$self;
  var $2=$1;
  var $3=_encoder_clear($2);
  var $4=$1;
  var $5=(($4+4)|0);
  var $6=HEAP32[(($5)>>2)];
  var $7=(($6+160)|0);
  var $8=HEAP32[(($7)>>2)];
  var $9=$1;
  var $10=$9;
  FUNCTION_TABLE[$8]($10);
  return;
}
function _encoder_call($self, $args, $kwds) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $obj=__stackBase__;
      var $rval;
      var $indent_level=(__stackBase__)+(4);
      var $s;
      $2=$self;
      $3=$args;
      $4=$kwds;
      var $5=$2;
      var $6=(($5+4)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==((_PyEncoderType)|(0));
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+4)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=_PyType_IsSubtype($12, _PyEncoderType);
      var $14=(($13)|(0))!=0;
      if ($14) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 5; break;
    case 4: 
      ___assert_func(((__str29)|0), 1884, ((___func___encoder_call)|0), ((__str30)|0));
      throw "Reached an unreachable!";
      label = 5; break;
    case 5: 
      var $19=$2;
      var $20=$19;
      $s=$20;
      var $21=$3;
      var $22=$4;
      var $23=_PyArg_ParseTupleAndKeywords($21, $22, ((__str34)|0), ((_encoder_call_kwlist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 12)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$obj,HEAP32[(((tempInt)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 32),HEAP32[(((tempInt)+(8))>>2)]=$indent_level,tempInt));
      var $24=(($23)|(0))!=0;
      if ($24) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=0;
      label = 17; break;
    case 7: 
      var $27=_PyList_New(0);
      $rval=$27;
      var $28=$rval;
      var $29=(($28)|(0))==0;
      if ($29) { label = 8; break; } else { label = 9; break; }
    case 8: 
      $1=0;
      label = 17; break;
    case 9: 
      var $32=$s;
      var $33=$rval;
      var $34=HEAP32[(($obj)>>2)];
      var $35=HEAP32[(($indent_level)>>2)];
      var $36=_encoder_listencode_obj($32, $33, $34, $35);
      var $37=(($36)|(0))!=0;
      if ($37) { label = 10; break; } else { label = 16; break; }
    case 10: 
      label = 11; break;
    case 11: 
      var $40=$rval;
      var $41=(($40)|0);
      var $42=HEAP32[(($41)>>2)];
      var $43=((($42)-(1))|0);
      HEAP32[(($41)>>2)]=$43;
      var $44=(($43)|(0))!=0;
      if ($44) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      var $47=$rval;
      var $48=(($47+4)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=(($49+24)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=$rval;
      FUNCTION_TABLE[$51]($52);
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      $1=0;
      label = 17; break;
    case 16: 
      var $56=$rval;
      $1=$56;
      label = 17; break;
    case 17: 
      var $58=$1;
      STACKTOP = __stackBase__;
      return $58;
    default: assert(0, "bad label: " + label);
  }
}
function _encoder_new($type, $args, $kwds) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $s;
      $1=$type;
      $2=$args;
      $3=$kwds;
      var $4=$1;
      var $5=(($4+152)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=$1;
      var $8=FUNCTION_TABLE[$6]($7, 0);
      var $9=$8;
      $s=$9;
      var $10=$s;
      var $11=(($10)|(0))!=0;
      if ($11) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $13=$s;
      var $14=(($13+8)|0);
      HEAP32[(($14)>>2)]=0;
      var $15=$s;
      var $16=(($15+12)|0);
      HEAP32[(($16)>>2)]=0;
      var $17=$s;
      var $18=(($17+16)|0);
      HEAP32[(($18)>>2)]=0;
      var $19=$s;
      var $20=(($19+20)|0);
      HEAP32[(($20)>>2)]=0;
      var $21=$s;
      var $22=(($21+24)|0);
      HEAP32[(($22)>>2)]=0;
      var $23=$s;
      var $24=(($23+28)|0);
      HEAP32[(($24)>>2)]=0;
      var $25=$s;
      var $26=(($25+32)|0);
      HEAP32[(($26)>>2)]=0;
      var $27=$s;
      var $28=(($27+36)|0);
      HEAP32[(($28)>>2)]=0;
      label = 3; break;
    case 3: 
      var $30=$s;
      var $31=$30;
      return $31;
    default: assert(0, "bad label: " + label);
  }
}
function _encoder_traverse($self, $visit, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $s;
      var $vret;
      var $vret1;
      var $vret2;
      var $vret3;
      var $vret4;
      var $vret5;
      var $vret6;
      var $vret7;
      $2=$self;
      $3=$visit;
      $4=$arg;
      var $5=$2;
      var $6=(($5+4)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==((_PyEncoderType)|(0));
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+4)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=_PyType_IsSubtype($12, _PyEncoderType);
      var $14=(($13)|(0))!=0;
      if ($14) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 5; break;
    case 4: 
      ___assert_func(((__str29)|0), 2317, ((___func___encoder_traverse)|0), ((__str30)|0));
      throw "Reached an unreachable!";
      label = 5; break;
    case 5: 
      var $19=$2;
      var $20=$19;
      $s=$20;
      label = 6; break;
    case 6: 
      var $22=$s;
      var $23=(($22+8)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=(($24)|(0))!=0;
      if ($25) { label = 7; break; } else { label = 10; break; }
    case 7: 
      var $27=$3;
      var $28=$s;
      var $29=(($28+8)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$4;
      var $32=FUNCTION_TABLE[$27]($30, $31);
      $vret=$32;
      var $33=$vret;
      var $34=(($33)|(0))!=0;
      if ($34) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $36=$vret;
      $1=$36;
      label = 54; break;
    case 9: 
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $41=$s;
      var $42=(($41+12)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=(($43)|(0))!=0;
      if ($44) { label = 13; break; } else { label = 16; break; }
    case 13: 
      var $46=$3;
      var $47=$s;
      var $48=(($47+12)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=$4;
      var $51=FUNCTION_TABLE[$46]($49, $50);
      $vret1=$51;
      var $52=$vret1;
      var $53=(($52)|(0))!=0;
      if ($53) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $55=$vret1;
      $1=$55;
      label = 54; break;
    case 15: 
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      label = 18; break;
    case 18: 
      var $60=$s;
      var $61=(($60+16)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=(($62)|(0))!=0;
      if ($63) { label = 19; break; } else { label = 22; break; }
    case 19: 
      var $65=$3;
      var $66=$s;
      var $67=(($66+16)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=$4;
      var $70=FUNCTION_TABLE[$65]($68, $69);
      $vret2=$70;
      var $71=$vret2;
      var $72=(($71)|(0))!=0;
      if ($72) { label = 20; break; } else { label = 21; break; }
    case 20: 
      var $74=$vret2;
      $1=$74;
      label = 54; break;
    case 21: 
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $79=$s;
      var $80=(($79+20)|0);
      var $81=HEAP32[(($80)>>2)];
      var $82=(($81)|(0))!=0;
      if ($82) { label = 25; break; } else { label = 28; break; }
    case 25: 
      var $84=$3;
      var $85=$s;
      var $86=(($85+20)|0);
      var $87=HEAP32[(($86)>>2)];
      var $88=$4;
      var $89=FUNCTION_TABLE[$84]($87, $88);
      $vret3=$89;
      var $90=$vret3;
      var $91=(($90)|(0))!=0;
      if ($91) { label = 26; break; } else { label = 27; break; }
    case 26: 
      var $93=$vret3;
      $1=$93;
      label = 54; break;
    case 27: 
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      label = 30; break;
    case 30: 
      var $98=$s;
      var $99=(($98+24)|0);
      var $100=HEAP32[(($99)>>2)];
      var $101=(($100)|(0))!=0;
      if ($101) { label = 31; break; } else { label = 34; break; }
    case 31: 
      var $103=$3;
      var $104=$s;
      var $105=(($104+24)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=$4;
      var $108=FUNCTION_TABLE[$103]($106, $107);
      $vret4=$108;
      var $109=$vret4;
      var $110=(($109)|(0))!=0;
      if ($110) { label = 32; break; } else { label = 33; break; }
    case 32: 
      var $112=$vret4;
      $1=$112;
      label = 54; break;
    case 33: 
      label = 34; break;
    case 34: 
      label = 35; break;
    case 35: 
      label = 36; break;
    case 36: 
      var $117=$s;
      var $118=(($117+28)|0);
      var $119=HEAP32[(($118)>>2)];
      var $120=(($119)|(0))!=0;
      if ($120) { label = 37; break; } else { label = 40; break; }
    case 37: 
      var $122=$3;
      var $123=$s;
      var $124=(($123+28)|0);
      var $125=HEAP32[(($124)>>2)];
      var $126=$4;
      var $127=FUNCTION_TABLE[$122]($125, $126);
      $vret5=$127;
      var $128=$vret5;
      var $129=(($128)|(0))!=0;
      if ($129) { label = 38; break; } else { label = 39; break; }
    case 38: 
      var $131=$vret5;
      $1=$131;
      label = 54; break;
    case 39: 
      label = 40; break;
    case 40: 
      label = 41; break;
    case 41: 
      label = 42; break;
    case 42: 
      var $136=$s;
      var $137=(($136+32)|0);
      var $138=HEAP32[(($137)>>2)];
      var $139=(($138)|(0))!=0;
      if ($139) { label = 43; break; } else { label = 46; break; }
    case 43: 
      var $141=$3;
      var $142=$s;
      var $143=(($142+32)|0);
      var $144=HEAP32[(($143)>>2)];
      var $145=$4;
      var $146=FUNCTION_TABLE[$141]($144, $145);
      $vret6=$146;
      var $147=$vret6;
      var $148=(($147)|(0))!=0;
      if ($148) { label = 44; break; } else { label = 45; break; }
    case 44: 
      var $150=$vret6;
      $1=$150;
      label = 54; break;
    case 45: 
      label = 46; break;
    case 46: 
      label = 47; break;
    case 47: 
      label = 48; break;
    case 48: 
      var $155=$s;
      var $156=(($155+36)|0);
      var $157=HEAP32[(($156)>>2)];
      var $158=(($157)|(0))!=0;
      if ($158) { label = 49; break; } else { label = 52; break; }
    case 49: 
      var $160=$3;
      var $161=$s;
      var $162=(($161+36)|0);
      var $163=HEAP32[(($162)>>2)];
      var $164=$4;
      var $165=FUNCTION_TABLE[$160]($163, $164);
      $vret7=$165;
      var $166=$vret7;
      var $167=(($166)|(0))!=0;
      if ($167) { label = 50; break; } else { label = 51; break; }
    case 50: 
      var $169=$vret7;
      $1=$169;
      label = 54; break;
    case 51: 
      label = 52; break;
    case 52: 
      label = 53; break;
    case 53: 
      $1=0;
      label = 54; break;
    case 54: 
      var $174=$1;
      return $174;
    default: assert(0, "bad label: " + label);
  }
}
function _encoder_clear($self) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $s;
      var $_py_tmp;
      var $_py_tmp1;
      var $_py_tmp2;
      var $_py_tmp3;
      var $_py_tmp4;
      var $_py_tmp5;
      var $_py_tmp6;
      var $_py_tmp7;
      $1=$self;
      var $2=$1;
      var $3=(($2+4)|0);
      var $4=HEAP32[(($3)>>2)];
      var $5=(($4)|(0))==((_PyEncoderType)|(0));
      if ($5) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $7=$1;
      var $8=(($7+4)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=_PyType_IsSubtype($9, _PyEncoderType);
      var $11=(($10)|(0))!=0;
      if ($11) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 5; break;
    case 4: 
      ___assert_func(((__str29)|0), 2335, ((___func___encoder_clear)|0), ((__str30)|0));
      throw "Reached an unreachable!";
      label = 5; break;
    case 5: 
      var $16=$1;
      var $17=$16;
      $s=$17;
      label = 6; break;
    case 6: 
      var $19=$s;
      var $20=(($19+8)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=(($21)|(0))!=0;
      if ($22) { label = 7; break; } else { label = 13; break; }
    case 7: 
      var $24=$s;
      var $25=(($24+8)|0);
      var $26=HEAP32[(($25)>>2)];
      $_py_tmp=$26;
      var $27=$s;
      var $28=(($27+8)|0);
      HEAP32[(($28)>>2)]=0;
      label = 8; break;
    case 8: 
      var $30=$_py_tmp;
      var $31=(($30)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=((($32)-(1))|0);
      HEAP32[(($31)>>2)]=$33;
      var $34=(($33)|(0))!=0;
      if ($34) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 11; break;
    case 10: 
      var $37=$_py_tmp;
      var $38=(($37+4)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=(($39+24)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=$_py_tmp;
      FUNCTION_TABLE[$41]($42);
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $48=$s;
      var $49=(($48+12)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=(($50)|(0))!=0;
      if ($51) { label = 16; break; } else { label = 22; break; }
    case 16: 
      var $53=$s;
      var $54=(($53+12)|0);
      var $55=HEAP32[(($54)>>2)];
      $_py_tmp1=$55;
      var $56=$s;
      var $57=(($56+12)|0);
      HEAP32[(($57)>>2)]=0;
      label = 17; break;
    case 17: 
      var $59=$_py_tmp1;
      var $60=(($59)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=((($61)-(1))|0);
      HEAP32[(($60)>>2)]=$62;
      var $63=(($62)|(0))!=0;
      if ($63) { label = 18; break; } else { label = 19; break; }
    case 18: 
      label = 20; break;
    case 19: 
      var $66=$_py_tmp1;
      var $67=(($66+4)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=(($68+24)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=$_py_tmp1;
      FUNCTION_TABLE[$70]($71);
      label = 20; break;
    case 20: 
      label = 21; break;
    case 21: 
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $77=$s;
      var $78=(($77+16)|0);
      var $79=HEAP32[(($78)>>2)];
      var $80=(($79)|(0))!=0;
      if ($80) { label = 25; break; } else { label = 31; break; }
    case 25: 
      var $82=$s;
      var $83=(($82+16)|0);
      var $84=HEAP32[(($83)>>2)];
      $_py_tmp2=$84;
      var $85=$s;
      var $86=(($85+16)|0);
      HEAP32[(($86)>>2)]=0;
      label = 26; break;
    case 26: 
      var $88=$_py_tmp2;
      var $89=(($88)|0);
      var $90=HEAP32[(($89)>>2)];
      var $91=((($90)-(1))|0);
      HEAP32[(($89)>>2)]=$91;
      var $92=(($91)|(0))!=0;
      if ($92) { label = 27; break; } else { label = 28; break; }
    case 27: 
      label = 29; break;
    case 28: 
      var $95=$_py_tmp2;
      var $96=(($95+4)|0);
      var $97=HEAP32[(($96)>>2)];
      var $98=(($97+24)|0);
      var $99=HEAP32[(($98)>>2)];
      var $100=$_py_tmp2;
      FUNCTION_TABLE[$99]($100);
      label = 29; break;
    case 29: 
      label = 30; break;
    case 30: 
      label = 31; break;
    case 31: 
      label = 32; break;
    case 32: 
      label = 33; break;
    case 33: 
      var $106=$s;
      var $107=(($106+20)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=(($108)|(0))!=0;
      if ($109) { label = 34; break; } else { label = 40; break; }
    case 34: 
      var $111=$s;
      var $112=(($111+20)|0);
      var $113=HEAP32[(($112)>>2)];
      $_py_tmp3=$113;
      var $114=$s;
      var $115=(($114+20)|0);
      HEAP32[(($115)>>2)]=0;
      label = 35; break;
    case 35: 
      var $117=$_py_tmp3;
      var $118=(($117)|0);
      var $119=HEAP32[(($118)>>2)];
      var $120=((($119)-(1))|0);
      HEAP32[(($118)>>2)]=$120;
      var $121=(($120)|(0))!=0;
      if ($121) { label = 36; break; } else { label = 37; break; }
    case 36: 
      label = 38; break;
    case 37: 
      var $124=$_py_tmp3;
      var $125=(($124+4)|0);
      var $126=HEAP32[(($125)>>2)];
      var $127=(($126+24)|0);
      var $128=HEAP32[(($127)>>2)];
      var $129=$_py_tmp3;
      FUNCTION_TABLE[$128]($129);
      label = 38; break;
    case 38: 
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      label = 41; break;
    case 41: 
      label = 42; break;
    case 42: 
      var $135=$s;
      var $136=(($135+24)|0);
      var $137=HEAP32[(($136)>>2)];
      var $138=(($137)|(0))!=0;
      if ($138) { label = 43; break; } else { label = 49; break; }
    case 43: 
      var $140=$s;
      var $141=(($140+24)|0);
      var $142=HEAP32[(($141)>>2)];
      $_py_tmp4=$142;
      var $143=$s;
      var $144=(($143+24)|0);
      HEAP32[(($144)>>2)]=0;
      label = 44; break;
    case 44: 
      var $146=$_py_tmp4;
      var $147=(($146)|0);
      var $148=HEAP32[(($147)>>2)];
      var $149=((($148)-(1))|0);
      HEAP32[(($147)>>2)]=$149;
      var $150=(($149)|(0))!=0;
      if ($150) { label = 45; break; } else { label = 46; break; }
    case 45: 
      label = 47; break;
    case 46: 
      var $153=$_py_tmp4;
      var $154=(($153+4)|0);
      var $155=HEAP32[(($154)>>2)];
      var $156=(($155+24)|0);
      var $157=HEAP32[(($156)>>2)];
      var $158=$_py_tmp4;
      FUNCTION_TABLE[$157]($158);
      label = 47; break;
    case 47: 
      label = 48; break;
    case 48: 
      label = 49; break;
    case 49: 
      label = 50; break;
    case 50: 
      label = 51; break;
    case 51: 
      var $164=$s;
      var $165=(($164+28)|0);
      var $166=HEAP32[(($165)>>2)];
      var $167=(($166)|(0))!=0;
      if ($167) { label = 52; break; } else { label = 58; break; }
    case 52: 
      var $169=$s;
      var $170=(($169+28)|0);
      var $171=HEAP32[(($170)>>2)];
      $_py_tmp5=$171;
      var $172=$s;
      var $173=(($172+28)|0);
      HEAP32[(($173)>>2)]=0;
      label = 53; break;
    case 53: 
      var $175=$_py_tmp5;
      var $176=(($175)|0);
      var $177=HEAP32[(($176)>>2)];
      var $178=((($177)-(1))|0);
      HEAP32[(($176)>>2)]=$178;
      var $179=(($178)|(0))!=0;
      if ($179) { label = 54; break; } else { label = 55; break; }
    case 54: 
      label = 56; break;
    case 55: 
      var $182=$_py_tmp5;
      var $183=(($182+4)|0);
      var $184=HEAP32[(($183)>>2)];
      var $185=(($184+24)|0);
      var $186=HEAP32[(($185)>>2)];
      var $187=$_py_tmp5;
      FUNCTION_TABLE[$186]($187);
      label = 56; break;
    case 56: 
      label = 57; break;
    case 57: 
      label = 58; break;
    case 58: 
      label = 59; break;
    case 59: 
      label = 60; break;
    case 60: 
      var $193=$s;
      var $194=(($193+32)|0);
      var $195=HEAP32[(($194)>>2)];
      var $196=(($195)|(0))!=0;
      if ($196) { label = 61; break; } else { label = 67; break; }
    case 61: 
      var $198=$s;
      var $199=(($198+32)|0);
      var $200=HEAP32[(($199)>>2)];
      $_py_tmp6=$200;
      var $201=$s;
      var $202=(($201+32)|0);
      HEAP32[(($202)>>2)]=0;
      label = 62; break;
    case 62: 
      var $204=$_py_tmp6;
      var $205=(($204)|0);
      var $206=HEAP32[(($205)>>2)];
      var $207=((($206)-(1))|0);
      HEAP32[(($205)>>2)]=$207;
      var $208=(($207)|(0))!=0;
      if ($208) { label = 63; break; } else { label = 64; break; }
    case 63: 
      label = 65; break;
    case 64: 
      var $211=$_py_tmp6;
      var $212=(($211+4)|0);
      var $213=HEAP32[(($212)>>2)];
      var $214=(($213+24)|0);
      var $215=HEAP32[(($214)>>2)];
      var $216=$_py_tmp6;
      FUNCTION_TABLE[$215]($216);
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
      var $222=$s;
      var $223=(($222+36)|0);
      var $224=HEAP32[(($223)>>2)];
      var $225=(($224)|(0))!=0;
      if ($225) { label = 70; break; } else { label = 76; break; }
    case 70: 
      var $227=$s;
      var $228=(($227+36)|0);
      var $229=HEAP32[(($228)>>2)];
      $_py_tmp7=$229;
      var $230=$s;
      var $231=(($230+36)|0);
      HEAP32[(($231)>>2)]=0;
      label = 71; break;
    case 71: 
      var $233=$_py_tmp7;
      var $234=(($233)|0);
      var $235=HEAP32[(($234)>>2)];
      var $236=((($235)-(1))|0);
      HEAP32[(($234)>>2)]=$236;
      var $237=(($236)|(0))!=0;
      if ($237) { label = 72; break; } else { label = 73; break; }
    case 72: 
      label = 74; break;
    case 73: 
      var $240=$_py_tmp7;
      var $241=(($240+4)|0);
      var $242=HEAP32[(($241)>>2)];
      var $243=(($242+24)|0);
      var $244=HEAP32[(($243)>>2)];
      var $245=$_py_tmp7;
      FUNCTION_TABLE[$244]($245);
      label = 74; break;
    case 74: 
      label = 75; break;
    case 75: 
      label = 76; break;
    case 76: 
      label = 77; break;
    case 77: 
      return 0;
    default: assert(0, "bad label: " + label);
  }
}
function _encoder_init($self, $args, $kwds) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 36)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $s;
      var $markers=__stackBase__;
      var $defaultfn=(__stackBase__)+(4);
      var $encoder=(__stackBase__)+(8);
      var $indent=(__stackBase__)+(12);
      var $key_separator=(__stackBase__)+(16);
      var $item_separator=(__stackBase__)+(20);
      var $sort_keys=(__stackBase__)+(24);
      var $skipkeys=(__stackBase__)+(28);
      var $allow_nan=(__stackBase__)+(32);
      $2=$self;
      $3=$args;
      $4=$kwds;
      var $5=$2;
      var $6=(($5+4)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==((_PyEncoderType)|(0));
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+4)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=_PyType_IsSubtype($12, _PyEncoderType);
      var $14=(($13)|(0))!=0;
      if ($14) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 5; break;
    case 4: 
      ___assert_func(((__str29)|0), 1845, ((___func___encoder_init)|0), ((__str30)|0));
      throw "Reached an unreachable!";
      label = 5; break;
    case 5: 
      var $19=$2;
      var $20=$19;
      $s=$20;
      var $21=$3;
      var $22=$4;
      var $23=_PyArg_ParseTupleAndKeywords($21, $22, ((__str31)|0), ((_encoder_init_kwlist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 36)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$markers,HEAP32[(((tempInt)+(4))>>2)]=$defaultfn,HEAP32[(((tempInt)+(8))>>2)]=$encoder,HEAP32[(((tempInt)+(12))>>2)]=$indent,HEAP32[(((tempInt)+(16))>>2)]=$key_separator,HEAP32[(((tempInt)+(20))>>2)]=$item_separator,HEAP32[(((tempInt)+(24))>>2)]=$sort_keys,HEAP32[(((tempInt)+(28))>>2)]=$skipkeys,HEAP32[(((tempInt)+(32))>>2)]=$allow_nan,tempInt));
      var $24=(($23)|(0))!=0;
      if ($24) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=-1;
      label = 10; break;
    case 7: 
      var $27=HEAP32[(($markers)>>2)];
      var $28=$s;
      var $29=(($28+8)|0);
      HEAP32[(($29)>>2)]=$27;
      var $30=HEAP32[(($defaultfn)>>2)];
      var $31=$s;
      var $32=(($31+12)|0);
      HEAP32[(($32)>>2)]=$30;
      var $33=HEAP32[(($encoder)>>2)];
      var $34=$s;
      var $35=(($34+16)|0);
      HEAP32[(($35)>>2)]=$33;
      var $36=HEAP32[(($indent)>>2)];
      var $37=$s;
      var $38=(($37+20)|0);
      HEAP32[(($38)>>2)]=$36;
      var $39=HEAP32[(($key_separator)>>2)];
      var $40=$s;
      var $41=(($40+24)|0);
      HEAP32[(($41)>>2)]=$39;
      var $42=HEAP32[(($item_separator)>>2)];
      var $43=$s;
      var $44=(($43+28)|0);
      HEAP32[(($44)>>2)]=$42;
      var $45=HEAP32[(($sort_keys)>>2)];
      var $46=$s;
      var $47=(($46+32)|0);
      HEAP32[(($47)>>2)]=$45;
      var $48=HEAP32[(($skipkeys)>>2)];
      var $49=$s;
      var $50=(($49+36)|0);
      HEAP32[(($50)>>2)]=$48;
      var $51=$s;
      var $52=(($51+16)|0);
      var $53=HEAP32[(($52)>>2)];
      var $54=(($53+4)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=(($55)|(0))==((_PyCFunction_Type)|(0));
      if ($56) { label = 8; break; } else { var $64 = 0;label = 9; break; }
    case 8: 
      var $58=$s;
      var $59=(($58+16)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=_PyCFunction_GetFunction($60);
      var $62=(($61)|(0))==((((FUNCTION_TABLE_OFFSET + 14)))|(0));
      var $64 = $62;label = 9; break;
    case 9: 
      var $64;
      var $65=(($64)&(1));
      var $66=$s;
      var $67=(($66+40)|0);
      HEAP32[(($67)>>2)]=$65;
      var $68=HEAP32[(($allow_nan)>>2)];
      var $69=_PyObject_IsTrue($68);
      var $70=$s;
      var $71=(($70+44)|0);
      HEAP32[(($71)>>2)]=$69;
      var $72=$s;
      var $73=(($72+8)|0);
      var $74=HEAP32[(($73)>>2)];
      var $75=(($74)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=((($76)+(1))|0);
      HEAP32[(($75)>>2)]=$77;
      var $78=$s;
      var $79=(($78+12)|0);
      var $80=HEAP32[(($79)>>2)];
      var $81=(($80)|0);
      var $82=HEAP32[(($81)>>2)];
      var $83=((($82)+(1))|0);
      HEAP32[(($81)>>2)]=$83;
      var $84=$s;
      var $85=(($84+16)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=(($86)|0);
      var $88=HEAP32[(($87)>>2)];
      var $89=((($88)+(1))|0);
      HEAP32[(($87)>>2)]=$89;
      var $90=$s;
      var $91=(($90+20)|0);
      var $92=HEAP32[(($91)>>2)];
      var $93=(($92)|0);
      var $94=HEAP32[(($93)>>2)];
      var $95=((($94)+(1))|0);
      HEAP32[(($93)>>2)]=$95;
      var $96=$s;
      var $97=(($96+24)|0);
      var $98=HEAP32[(($97)>>2)];
      var $99=(($98)|0);
      var $100=HEAP32[(($99)>>2)];
      var $101=((($100)+(1))|0);
      HEAP32[(($99)>>2)]=$101;
      var $102=$s;
      var $103=(($102+28)|0);
      var $104=HEAP32[(($103)>>2)];
      var $105=(($104)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=((($106)+(1))|0);
      HEAP32[(($105)>>2)]=$107;
      var $108=$s;
      var $109=(($108+32)|0);
      var $110=HEAP32[(($109)>>2)];
      var $111=(($110)|0);
      var $112=HEAP32[(($111)>>2)];
      var $113=((($112)+(1))|0);
      HEAP32[(($111)>>2)]=$113;
      var $114=$s;
      var $115=(($114+36)|0);
      var $116=HEAP32[(($115)>>2)];
      var $117=(($116)|0);
      var $118=HEAP32[(($117)>>2)];
      var $119=((($118)+(1))|0);
      HEAP32[(($117)>>2)]=$119;
      $1=0;
      label = 10; break;
    case 10: 
      var $121=$1;
      STACKTOP = __stackBase__;
      return $121;
    default: assert(0, "bad label: " + label);
  }
}
function _encoder_listencode_obj($s, $rval, $obj, $indent_level) {
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
      var $newobj;
      var $rv;
      var $cstr;
      var $encoded;
      var $encoded1;
      var $encoded2;
      var $ident;
      var $has_key;
      $2=$s;
      $3=$rval;
      $4=$obj;
      $5=$indent_level;
      var $6=$4;
      var $7=(($6)|(0))==((__Py_NoneStruct)|(0));
      if ($7) { label = 4; break; } else { label = 2; break; }
    case 2: 
      var $9=$4;
      var $10=(($9)|(0))==((__Py_TrueStruct)|(0));
      if ($10) { label = 4; break; } else { label = 3; break; }
    case 3: 
      var $12=$4;
      var $13=(($12)|(0))==((__Py_ZeroStruct)|(0));
      if ($13) { label = 4; break; } else { label = 7; break; }
    case 4: 
      var $15=$4;
      var $16=__encoded_const($15);
      $cstr=$16;
      var $17=$cstr;
      var $18=(($17)|(0))==0;
      if ($18) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=-1;
      label = 110; break;
    case 6: 
      var $21=$3;
      var $22=$cstr;
      var $23=__steal_list_append($21, $22);
      $1=$23;
      label = 110; break;
    case 7: 
      var $25=$4;
      var $26=(($25+4)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=(($27+84)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=$29 & 134217728;
      var $31=(($30)|(0))!=0;
      if ($31) { label = 9; break; } else { label = 8; break; }
    case 8: 
      var $33=$4;
      var $34=(($33+4)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=(($35+84)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=$37 & 268435456;
      var $39=(($38)|(0))!=0;
      if ($39) { label = 9; break; } else { label = 12; break; }
    case 9: 
      var $41=$2;
      var $42=$4;
      var $43=_encoder_encode_string($41, $42);
      $encoded=$43;
      var $44=$encoded;
      var $45=(($44)|(0))==0;
      if ($45) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=-1;
      label = 110; break;
    case 11: 
      var $48=$3;
      var $49=$encoded;
      var $50=__steal_list_append($48, $49);
      $1=$50;
      label = 110; break;
    case 12: 
      var $52=$4;
      var $53=(($52+4)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=(($54+84)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=$56 & 8388608;
      var $58=(($57)|(0))!=0;
      if ($58) { label = 14; break; } else { label = 13; break; }
    case 13: 
      var $60=$4;
      var $61=(($60+4)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=(($62+84)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=$64 & 16777216;
      var $66=(($65)|(0))!=0;
      if ($66) { label = 14; break; } else { label = 17; break; }
    case 14: 
      var $68=$4;
      var $69=_PyObject_Str($68);
      $encoded1=$69;
      var $70=$encoded1;
      var $71=(($70)|(0))==0;
      if ($71) { label = 15; break; } else { label = 16; break; }
    case 15: 
      $1=-1;
      label = 110; break;
    case 16: 
      var $74=$3;
      var $75=$encoded1;
      var $76=__steal_list_append($74, $75);
      $1=$76;
      label = 110; break;
    case 17: 
      var $78=$4;
      var $79=(($78+4)|0);
      var $80=HEAP32[(($79)>>2)];
      var $81=(($80)|(0))==((_PyFloat_Type)|(0));
      if ($81) { label = 19; break; } else { label = 18; break; }
    case 18: 
      var $83=$4;
      var $84=(($83+4)|0);
      var $85=HEAP32[(($84)>>2)];
      var $86=_PyType_IsSubtype($85, _PyFloat_Type);
      var $87=(($86)|(0))!=0;
      if ($87) { label = 19; break; } else { label = 22; break; }
    case 19: 
      var $89=$2;
      var $90=$4;
      var $91=_encoder_encode_float($89, $90);
      $encoded2=$91;
      var $92=$encoded2;
      var $93=(($92)|(0))==0;
      if ($93) { label = 20; break; } else { label = 21; break; }
    case 20: 
      $1=-1;
      label = 110; break;
    case 21: 
      var $96=$3;
      var $97=$encoded2;
      var $98=__steal_list_append($96, $97);
      $1=$98;
      label = 110; break;
    case 22: 
      var $100=$4;
      var $101=(($100+4)|0);
      var $102=HEAP32[(($101)>>2)];
      var $103=(($102+84)|0);
      var $104=HEAP32[(($103)>>2)];
      var $105=$104 & 33554432;
      var $106=(($105)|(0))!=0;
      if ($106) { label = 24; break; } else { label = 23; break; }
    case 23: 
      var $108=$4;
      var $109=(($108+4)|0);
      var $110=HEAP32[(($109)>>2)];
      var $111=(($110+84)|0);
      var $112=HEAP32[(($111)>>2)];
      var $113=$112 & 67108864;
      var $114=(($113)|(0))!=0;
      if ($114) { label = 24; break; } else { label = 28; break; }
    case 24: 
      var $116=HEAP32[((__PyThreadState_Current)>>2)];
      var $117=(($116+12)|0);
      var $118=HEAP32[(($117)>>2)];
      var $119=((($118)+(1))|0);
      HEAP32[(($117)>>2)]=$119;
      var $120=HEAP32[((__Py_CheckRecursionLimit)>>2)];
      var $121=(($119)|(0)) > (($120)|(0));
      if ($121) { label = 25; break; } else { label = 27; break; }
    case 25: 
      var $123=__Py_CheckRecursiveCall(((__str35)|0));
      var $124=(($123)|(0))!=0;
      if ($124) { label = 26; break; } else { label = 27; break; }
    case 26: 
      $1=-1;
      label = 110; break;
    case 27: 
      var $127=$2;
      var $128=$3;
      var $129=$4;
      var $130=$5;
      var $131=_encoder_listencode_list($127, $128, $129, $130);
      $rv=$131;
      var $132=HEAP32[((__PyThreadState_Current)>>2)];
      var $133=(($132+12)|0);
      var $134=HEAP32[(($133)>>2)];
      var $135=((($134)-(1))|0);
      HEAP32[(($133)>>2)]=$135;
      var $136=$rv;
      $1=$136;
      label = 110; break;
    case 28: 
      var $138=$4;
      var $139=(($138+4)|0);
      var $140=HEAP32[(($139)>>2)];
      var $141=(($140+84)|0);
      var $142=HEAP32[(($141)>>2)];
      var $143=$142 & 536870912;
      var $144=(($143)|(0))!=0;
      if ($144) { label = 29; break; } else { label = 33; break; }
    case 29: 
      var $146=HEAP32[((__PyThreadState_Current)>>2)];
      var $147=(($146+12)|0);
      var $148=HEAP32[(($147)>>2)];
      var $149=((($148)+(1))|0);
      HEAP32[(($147)>>2)]=$149;
      var $150=HEAP32[((__Py_CheckRecursionLimit)>>2)];
      var $151=(($149)|(0)) > (($150)|(0));
      if ($151) { label = 30; break; } else { label = 32; break; }
    case 30: 
      var $153=__Py_CheckRecursiveCall(((__str35)|0));
      var $154=(($153)|(0))!=0;
      if ($154) { label = 31; break; } else { label = 32; break; }
    case 31: 
      $1=-1;
      label = 110; break;
    case 32: 
      var $157=$2;
      var $158=$3;
      var $159=$4;
      var $160=$5;
      var $161=_encoder_listencode_dict($157, $158, $159, $160);
      $rv=$161;
      var $162=HEAP32[((__PyThreadState_Current)>>2)];
      var $163=(($162+12)|0);
      var $164=HEAP32[(($163)>>2)];
      var $165=((($164)-(1))|0);
      HEAP32[(($163)>>2)]=$165;
      var $166=$rv;
      $1=$166;
      label = 110; break;
    case 33: 
      $ident=0;
      var $168=$2;
      var $169=(($168+8)|0);
      var $170=HEAP32[(($169)>>2)];
      var $171=(($170)|(0))!=((__Py_NoneStruct)|(0));
      if ($171) { label = 34; break; } else { label = 53; break; }
    case 34: 
      var $173=$4;
      var $174=$173;
      var $175=_PyLong_FromVoidPtr($174);
      $ident=$175;
      var $176=$ident;
      var $177=(($176)|(0))==0;
      if ($177) { label = 35; break; } else { label = 36; break; }
    case 35: 
      $1=-1;
      label = 110; break;
    case 36: 
      var $180=$2;
      var $181=(($180+8)|0);
      var $182=HEAP32[(($181)>>2)];
      var $183=$ident;
      var $184=_PyDict_Contains($182, $183);
      $has_key=$184;
      var $185=$has_key;
      var $186=(($185)|(0))!=0;
      if ($186) { label = 37; break; } else { label = 45; break; }
    case 37: 
      var $188=$has_key;
      var $189=(($188)|(0))!=-1;
      if ($189) { label = 38; break; } else { label = 39; break; }
    case 38: 
      var $191=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($191, ((__str36)|0));
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      var $194=$ident;
      var $195=(($194)|0);
      var $196=HEAP32[(($195)>>2)];
      var $197=((($196)-(1))|0);
      HEAP32[(($195)>>2)]=$197;
      var $198=(($197)|(0))!=0;
      if ($198) { label = 41; break; } else { label = 42; break; }
    case 41: 
      label = 43; break;
    case 42: 
      var $201=$ident;
      var $202=(($201+4)|0);
      var $203=HEAP32[(($202)>>2)];
      var $204=(($203+24)|0);
      var $205=HEAP32[(($204)>>2)];
      var $206=$ident;
      FUNCTION_TABLE[$205]($206);
      label = 43; break;
    case 43: 
      label = 44; break;
    case 44: 
      $1=-1;
      label = 110; break;
    case 45: 
      var $210=$2;
      var $211=(($210+8)|0);
      var $212=HEAP32[(($211)>>2)];
      var $213=$ident;
      var $214=$4;
      var $215=_PyDict_SetItem($212, $213, $214);
      var $216=(($215)|(0))!=0;
      if ($216) { label = 46; break; } else { label = 52; break; }
    case 46: 
      label = 47; break;
    case 47: 
      var $219=$ident;
      var $220=(($219)|0);
      var $221=HEAP32[(($220)>>2)];
      var $222=((($221)-(1))|0);
      HEAP32[(($220)>>2)]=$222;
      var $223=(($222)|(0))!=0;
      if ($223) { label = 48; break; } else { label = 49; break; }
    case 48: 
      label = 50; break;
    case 49: 
      var $226=$ident;
      var $227=(($226+4)|0);
      var $228=HEAP32[(($227)>>2)];
      var $229=(($228+24)|0);
      var $230=HEAP32[(($229)>>2)];
      var $231=$ident;
      FUNCTION_TABLE[$230]($231);
      label = 50; break;
    case 50: 
      label = 51; break;
    case 51: 
      $1=-1;
      label = 110; break;
    case 52: 
      label = 53; break;
    case 53: 
      var $236=$2;
      var $237=(($236+12)|0);
      var $238=HEAP32[(($237)>>2)];
      var $239=$4;
      var $240=_PyObject_CallFunctionObjArgs($238, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$239,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $newobj=$240;
      var $241=$newobj;
      var $242=(($241)|(0))==0;
      if ($242) { label = 54; break; } else { label = 65; break; }
    case 54: 
      label = 55; break;
    case 55: 
      var $245=$ident;
      var $246=(($245)|(0))==0;
      if ($246) { label = 56; break; } else { label = 57; break; }
    case 56: 
      label = 63; break;
    case 57: 
      label = 58; break;
    case 58: 
      var $250=$ident;
      var $251=(($250)|0);
      var $252=HEAP32[(($251)>>2)];
      var $253=((($252)-(1))|0);
      HEAP32[(($251)>>2)]=$253;
      var $254=(($253)|(0))!=0;
      if ($254) { label = 59; break; } else { label = 60; break; }
    case 59: 
      label = 61; break;
    case 60: 
      var $257=$ident;
      var $258=(($257+4)|0);
      var $259=HEAP32[(($258)>>2)];
      var $260=(($259+24)|0);
      var $261=HEAP32[(($260)>>2)];
      var $262=$ident;
      FUNCTION_TABLE[$261]($262);
      label = 61; break;
    case 61: 
      label = 62; break;
    case 62: 
      label = 63; break;
    case 63: 
      label = 64; break;
    case 64: 
      $1=-1;
      label = 110; break;
    case 65: 
      var $268=HEAP32[((__PyThreadState_Current)>>2)];
      var $269=(($268+12)|0);
      var $270=HEAP32[(($269)>>2)];
      var $271=((($270)+(1))|0);
      HEAP32[(($269)>>2)]=$271;
      var $272=HEAP32[((__Py_CheckRecursionLimit)>>2)];
      var $273=(($271)|(0)) > (($272)|(0));
      if ($273) { label = 66; break; } else { label = 68; break; }
    case 66: 
      var $275=__Py_CheckRecursiveCall(((__str35)|0));
      var $276=(($275)|(0))!=0;
      if ($276) { label = 67; break; } else { label = 68; break; }
    case 67: 
      $1=-1;
      label = 110; break;
    case 68: 
      var $279=$2;
      var $280=$3;
      var $281=$newobj;
      var $282=$5;
      var $283=_encoder_listencode_obj($279, $280, $281, $282);
      $rv=$283;
      var $284=HEAP32[((__PyThreadState_Current)>>2)];
      var $285=(($284+12)|0);
      var $286=HEAP32[(($285)>>2)];
      var $287=((($286)-(1))|0);
      HEAP32[(($285)>>2)]=$287;
      label = 69; break;
    case 69: 
      var $289=$newobj;
      var $290=(($289)|0);
      var $291=HEAP32[(($290)>>2)];
      var $292=((($291)-(1))|0);
      HEAP32[(($290)>>2)]=$292;
      var $293=(($292)|(0))!=0;
      if ($293) { label = 70; break; } else { label = 71; break; }
    case 70: 
      label = 72; break;
    case 71: 
      var $296=$newobj;
      var $297=(($296+4)|0);
      var $298=HEAP32[(($297)>>2)];
      var $299=(($298+24)|0);
      var $300=HEAP32[(($299)>>2)];
      var $301=$newobj;
      FUNCTION_TABLE[$300]($301);
      label = 72; break;
    case 72: 
      label = 73; break;
    case 73: 
      var $304=$rv;
      var $305=(($304)|(0))!=0;
      if ($305) { label = 74; break; } else { label = 85; break; }
    case 74: 
      label = 75; break;
    case 75: 
      var $308=$ident;
      var $309=(($308)|(0))==0;
      if ($309) { label = 76; break; } else { label = 77; break; }
    case 76: 
      label = 83; break;
    case 77: 
      label = 78; break;
    case 78: 
      var $313=$ident;
      var $314=(($313)|0);
      var $315=HEAP32[(($314)>>2)];
      var $316=((($315)-(1))|0);
      HEAP32[(($314)>>2)]=$316;
      var $317=(($316)|(0))!=0;
      if ($317) { label = 79; break; } else { label = 80; break; }
    case 79: 
      label = 81; break;
    case 80: 
      var $320=$ident;
      var $321=(($320+4)|0);
      var $322=HEAP32[(($321)>>2)];
      var $323=(($322+24)|0);
      var $324=HEAP32[(($323)>>2)];
      var $325=$ident;
      FUNCTION_TABLE[$324]($325);
      label = 81; break;
    case 81: 
      label = 82; break;
    case 82: 
      label = 83; break;
    case 83: 
      label = 84; break;
    case 84: 
      $1=-1;
      label = 110; break;
    case 85: 
      var $331=$ident;
      var $332=(($331)|(0))!=0;
      if ($332) { label = 86; break; } else { label = 109; break; }
    case 86: 
      var $334=$2;
      var $335=(($334+8)|0);
      var $336=HEAP32[(($335)>>2)];
      var $337=$ident;
      var $338=_PyDict_DelItem($336, $337);
      var $339=(($338)|(0))!=0;
      if ($339) { label = 87; break; } else { label = 98; break; }
    case 87: 
      label = 88; break;
    case 88: 
      var $342=$ident;
      var $343=(($342)|(0))==0;
      if ($343) { label = 89; break; } else { label = 90; break; }
    case 89: 
      label = 96; break;
    case 90: 
      label = 91; break;
    case 91: 
      var $347=$ident;
      var $348=(($347)|0);
      var $349=HEAP32[(($348)>>2)];
      var $350=((($349)-(1))|0);
      HEAP32[(($348)>>2)]=$350;
      var $351=(($350)|(0))!=0;
      if ($351) { label = 92; break; } else { label = 93; break; }
    case 92: 
      label = 94; break;
    case 93: 
      var $354=$ident;
      var $355=(($354+4)|0);
      var $356=HEAP32[(($355)>>2)];
      var $357=(($356+24)|0);
      var $358=HEAP32[(($357)>>2)];
      var $359=$ident;
      FUNCTION_TABLE[$358]($359);
      label = 94; break;
    case 94: 
      label = 95; break;
    case 95: 
      label = 96; break;
    case 96: 
      label = 97; break;
    case 97: 
      $1=-1;
      label = 110; break;
    case 98: 
      label = 99; break;
    case 99: 
      var $366=$ident;
      var $367=(($366)|(0))==0;
      if ($367) { label = 100; break; } else { label = 101; break; }
    case 100: 
      label = 107; break;
    case 101: 
      label = 102; break;
    case 102: 
      var $371=$ident;
      var $372=(($371)|0);
      var $373=HEAP32[(($372)>>2)];
      var $374=((($373)-(1))|0);
      HEAP32[(($372)>>2)]=$374;
      var $375=(($374)|(0))!=0;
      if ($375) { label = 103; break; } else { label = 104; break; }
    case 103: 
      label = 105; break;
    case 104: 
      var $378=$ident;
      var $379=(($378+4)|0);
      var $380=HEAP32[(($379)>>2)];
      var $381=(($380+24)|0);
      var $382=HEAP32[(($381)>>2)];
      var $383=$ident;
      FUNCTION_TABLE[$382]($383);
      label = 105; break;
    case 105: 
      label = 106; break;
    case 106: 
      label = 107; break;
    case 107: 
      label = 108; break;
    case 108: 
      label = 109; break;
    case 109: 
      var $389=$rv;
      $1=$389;
      label = 110; break;
    case 110: 
      var $391=$1;
      STACKTOP = __stackBase__;
      return $391;
    default: assert(0, "bad label: " + label);
  }
}
function __encoded_const($obj) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$obj;
      var $3=$2;
      var $4=(($3)|(0))==((__Py_NoneStruct)|(0));
      if ($4) { label = 2; break; } else { label = 5; break; }
    case 2: 
      var $6=HEAP32[((__encoded_const_s_null)>>2)];
      var $7=(($6)|(0))==0;
      if ($7) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $9=_PyString_InternFromString(((__str49)|0));
      HEAP32[((__encoded_const_s_null)>>2)]=$9;
      label = 4; break;
    case 4: 
      var $11=HEAP32[((__encoded_const_s_null)>>2)];
      var $12=(($11)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=((($13)+(1))|0);
      HEAP32[(($12)>>2)]=$14;
      var $15=HEAP32[((__encoded_const_s_null)>>2)];
      $1=$15;
      label = 14; break;
    case 5: 
      var $17=$2;
      var $18=(($17)|(0))==((__Py_TrueStruct)|(0));
      if ($18) { label = 6; break; } else { label = 9; break; }
    case 6: 
      var $20=HEAP32[((__encoded_const_s_true)>>2)];
      var $21=(($20)|(0))==0;
      if ($21) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $23=_PyString_InternFromString(((__str50)|0));
      HEAP32[((__encoded_const_s_true)>>2)]=$23;
      label = 8; break;
    case 8: 
      var $25=HEAP32[((__encoded_const_s_true)>>2)];
      var $26=(($25)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=((($27)+(1))|0);
      HEAP32[(($26)>>2)]=$28;
      var $29=HEAP32[((__encoded_const_s_true)>>2)];
      $1=$29;
      label = 14; break;
    case 9: 
      var $31=$2;
      var $32=(($31)|(0))==((__Py_ZeroStruct)|(0));
      if ($32) { label = 10; break; } else { label = 13; break; }
    case 10: 
      var $34=HEAP32[((__encoded_const_s_false)>>2)];
      var $35=(($34)|(0))==0;
      if ($35) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $37=_PyString_InternFromString(((__str51)|0));
      HEAP32[((__encoded_const_s_false)>>2)]=$37;
      label = 12; break;
    case 12: 
      var $39=HEAP32[((__encoded_const_s_false)>>2)];
      var $40=(($39)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=((($41)+(1))|0);
      HEAP32[(($40)>>2)]=$42;
      var $43=HEAP32[((__encoded_const_s_false)>>2)];
      $1=$43;
      label = 14; break;
    case 13: 
      var $45=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($45, ((__str52)|0));
      $1=0;
      label = 14; break;
    case 14: 
      var $47=$1;
      return $47;
    default: assert(0, "bad label: " + label);
  }
}
function __steal_list_append($lst, $stolen) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $rval;
      $1=$lst;
      $2=$stolen;
      var $3=$1;
      var $4=$2;
      var $5=_PyList_Append($3, $4);
      $rval=$5;
      label = 2; break;
    case 2: 
      var $7=$2;
      var $8=(($7)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=((($9)-(1))|0);
      HEAP32[(($8)>>2)]=$10;
      var $11=(($10)|(0))!=0;
      if ($11) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 5; break;
    case 4: 
      var $14=$2;
      var $15=(($14+4)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=(($16+24)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=$2;
      FUNCTION_TABLE[$18]($19);
      label = 5; break;
    case 5: 
      label = 6; break;
    case 6: 
      var $22=$rval;
      return $22;
    default: assert(0, "bad label: " + label);
  }
}
function _encoder_encode_string($s, $obj) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $2=$s;
      $3=$obj;
      var $4=$2;
      var $5=(($4+40)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6)|(0))!=0;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=$3;
      var $10=_py_encode_basestring_ascii(0, $9);
      $1=$10;
      label = 4; break;
    case 3: 
      var $12=$2;
      var $13=(($12+16)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=$3;
      var $16=_PyObject_CallFunctionObjArgs($14, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$15,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $1=$16;
      label = 4; break;
    case 4: 
      var $18=$1;
      STACKTOP = __stackBase__;
      return $18;
    default: assert(0, "bad label: " + label);
  }
}
function _encoder_encode_float($s, $obj) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $i;
      var $__cy;
      $2=$s;
      $3=$obj;
      var $4=$3;
      var $5=$4;
      var $6=(($5+8)|0);
      var $7=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($6)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($6)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      $i=$7;
      var $8=$i;
      var $9=___fpclassifyf($8);
      $__cy=$9;
      var $10=$__cy;
      var $11=(($10)|(0))!=1;
      if ($11) { label = 2; break; } else { var $16 = 0;label = 3; break; }
    case 2: 
      var $13=$__cy;
      var $14=(($13)|(0))!=0;
      var $16 = $14;label = 3; break;
    case 3: 
      var $16;
      if ($16) { label = 11; break; } else { label = 4; break; }
    case 4: 
      var $18=$2;
      var $19=(($18+44)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=(($20)|(0))!=0;
      if ($21) { label = 6; break; } else { label = 5; break; }
    case 5: 
      var $23=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($23, ((__str45)|0));
      $1=0;
      label = 12; break;
    case 6: 
      var $25=$i;
      var $26=$25 > 0;
      if ($26) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $28=_PyString_FromString(((__str46)|0));
      $1=$28;
      label = 12; break;
    case 8: 
      var $30=$i;
      var $31=$30 < 0;
      if ($31) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $33=_PyString_FromString(((__str47)|0));
      $1=$33;
      label = 12; break;
    case 10: 
      var $35=_PyString_FromString(((__str48)|0));
      $1=$35;
      label = 12; break;
    case 11: 
      var $37=$3;
      var $38=_PyObject_Repr($37);
      $1=$38;
      label = 12; break;
    case 12: 
      var $40=$1;
      return $40;
    default: assert(0, "bad label: " + label);
  }
}
function _encoder_listencode_list($s, $rval, $seq, $indent_level) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $ident;
      var $s_fast;
      var $i;
      var $has_key;
      var $obj;
      var $_py_tmp;
      $2=$s;
      $3=$rval;
      $4=$seq;
      $5=$indent_level;
      $ident=0;
      $s_fast=0;
      var $6=HEAP32[((_encoder_listencode_list_open_array)>>2)];
      var $7=(($6)|(0))==0;
      if ($7) { label = 4; break; } else { label = 2; break; }
    case 2: 
      var $9=HEAP32[((_encoder_listencode_list_close_array)>>2)];
      var $10=(($9)|(0))==0;
      if ($10) { label = 4; break; } else { label = 3; break; }
    case 3: 
      var $12=HEAP32[((_encoder_listencode_list_empty_array)>>2)];
      var $13=(($12)|(0))==0;
      if ($13) { label = 4; break; } else { label = 9; break; }
    case 4: 
      var $15=_PyString_InternFromString(((__str41)|0));
      HEAP32[((_encoder_listencode_list_open_array)>>2)]=$15;
      var $16=_PyString_InternFromString(((__str42)|0));
      HEAP32[((_encoder_listencode_list_close_array)>>2)]=$16;
      var $17=_PyString_InternFromString(((__str43)|0));
      HEAP32[((_encoder_listencode_list_empty_array)>>2)]=$17;
      var $18=HEAP32[((_encoder_listencode_list_open_array)>>2)];
      var $19=(($18)|(0))==0;
      if ($19) { label = 7; break; } else { label = 5; break; }
    case 5: 
      var $21=HEAP32[((_encoder_listencode_list_close_array)>>2)];
      var $22=(($21)|(0))==0;
      if ($22) { label = 7; break; } else { label = 6; break; }
    case 6: 
      var $24=HEAP32[((_encoder_listencode_list_empty_array)>>2)];
      var $25=(($24)|(0))==0;
      if ($25) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=-1;
      label = 90; break;
    case 8: 
      label = 9; break;
    case 9: 
      $ident=0;
      var $29=$4;
      var $30=_PySequence_Fast($29, ((__str44)|0));
      $s_fast=$30;
      var $31=$s_fast;
      var $32=(($31)|(0))==0;
      if ($32) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=-1;
      label = 90; break;
    case 11: 
      var $35=$s_fast;
      var $36=(($35+4)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=(($37+84)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=$39 & 33554432;
      var $41=(($40)|(0))!=0;
      if ($41) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $43=$s_fast;
      var $44=$43;
      var $45=(($44+8)|0);
      var $46=HEAP32[(($45)>>2)];
      var $53 = $46;label = 14; break;
    case 13: 
      var $48=$s_fast;
      var $49=$48;
      var $50=(($49+8)|0);
      var $51=HEAP32[(($50)>>2)];
      var $53 = $51;label = 14; break;
    case 14: 
      var $53;
      var $54=(($53)|(0))==0;
      if ($54) { label = 15; break; } else { label = 21; break; }
    case 15: 
      label = 16; break;
    case 16: 
      var $57=$s_fast;
      var $58=(($57)|0);
      var $59=HEAP32[(($58)>>2)];
      var $60=((($59)-(1))|0);
      HEAP32[(($58)>>2)]=$60;
      var $61=(($60)|(0))!=0;
      if ($61) { label = 17; break; } else { label = 18; break; }
    case 17: 
      label = 19; break;
    case 18: 
      var $64=$s_fast;
      var $65=(($64+4)|0);
      var $66=HEAP32[(($65)>>2)];
      var $67=(($66+24)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=$s_fast;
      FUNCTION_TABLE[$68]($69);
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $72=$3;
      var $73=HEAP32[((_encoder_listencode_list_empty_array)>>2)];
      var $74=_PyList_Append($72, $73);
      $1=$74;
      label = 90; break;
    case 21: 
      var $76=$2;
      var $77=(($76+8)|0);
      var $78=HEAP32[(($77)>>2)];
      var $79=(($78)|(0))!=((__Py_NoneStruct)|(0));
      if ($79) { label = 22; break; } else { label = 31; break; }
    case 22: 
      var $81=$4;
      var $82=$81;
      var $83=_PyLong_FromVoidPtr($82);
      $ident=$83;
      var $84=$ident;
      var $85=(($84)|(0))==0;
      if ($85) { label = 23; break; } else { label = 24; break; }
    case 23: 
      label = 74; break;
    case 24: 
      var $88=$2;
      var $89=(($88+8)|0);
      var $90=HEAP32[(($89)>>2)];
      var $91=$ident;
      var $92=_PyDict_Contains($90, $91);
      $has_key=$92;
      var $93=$has_key;
      var $94=(($93)|(0))!=0;
      if ($94) { label = 25; break; } else { label = 28; break; }
    case 25: 
      var $96=$has_key;
      var $97=(($96)|(0))!=-1;
      if ($97) { label = 26; break; } else { label = 27; break; }
    case 26: 
      var $99=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($99, ((__str36)|0));
      label = 27; break;
    case 27: 
      label = 74; break;
    case 28: 
      var $102=$2;
      var $103=(($102+8)|0);
      var $104=HEAP32[(($103)>>2)];
      var $105=$ident;
      var $106=$4;
      var $107=_PyDict_SetItem($104, $105, $106);
      var $108=(($107)|(0))!=0;
      if ($108) { label = 29; break; } else { label = 30; break; }
    case 29: 
      label = 74; break;
    case 30: 
      label = 31; break;
    case 31: 
      var $112=$3;
      var $113=HEAP32[((_encoder_listencode_list_open_array)>>2)];
      var $114=_PyList_Append($112, $113);
      var $115=(($114)|(0))!=0;
      if ($115) { label = 32; break; } else { label = 33; break; }
    case 32: 
      label = 74; break;
    case 33: 
      var $118=$2;
      var $119=(($118+20)|0);
      var $120=HEAP32[(($119)>>2)];
      var $121=(($120)|(0))!=((__Py_NoneStruct)|(0));
      if ($121) { label = 34; break; } else { label = 35; break; }
    case 34: 
      var $123=$5;
      var $124=((($123)+(1))|0);
      $5=$124;
      label = 35; break;
    case 35: 
      $i=0;
      label = 36; break;
    case 36: 
      var $127=$i;
      var $128=$s_fast;
      var $129=(($128+4)|0);
      var $130=HEAP32[(($129)>>2)];
      var $131=(($130+84)|0);
      var $132=HEAP32[(($131)>>2)];
      var $133=$132 & 33554432;
      var $134=(($133)|(0))!=0;
      if ($134) { label = 37; break; } else { label = 38; break; }
    case 37: 
      var $136=$s_fast;
      var $137=$136;
      var $138=(($137+8)|0);
      var $139=HEAP32[(($138)>>2)];
      var $146 = $139;label = 39; break;
    case 38: 
      var $141=$s_fast;
      var $142=$141;
      var $143=(($142+8)|0);
      var $144=HEAP32[(($143)>>2)];
      var $146 = $144;label = 39; break;
    case 39: 
      var $146;
      var $147=(($127)|(0)) < (($146)|(0));
      if ($147) { label = 40; break; } else { label = 51; break; }
    case 40: 
      var $149=$s_fast;
      var $150=(($149+4)|0);
      var $151=HEAP32[(($150)>>2)];
      var $152=(($151+84)|0);
      var $153=HEAP32[(($152)>>2)];
      var $154=$153 & 33554432;
      var $155=(($154)|(0))!=0;
      if ($155) { label = 41; break; } else { label = 42; break; }
    case 41: 
      var $157=$i;
      var $158=$s_fast;
      var $159=$158;
      var $160=(($159+12)|0);
      var $161=HEAP32[(($160)>>2)];
      var $162=(($161+($157<<2))|0);
      var $163=HEAP32[(($162)>>2)];
      var $172 = $163;label = 43; break;
    case 42: 
      var $165=$i;
      var $166=$s_fast;
      var $167=$166;
      var $168=(($167+12)|0);
      var $169=(($168+($165<<2))|0);
      var $170=HEAP32[(($169)>>2)];
      var $172 = $170;label = 43; break;
    case 43: 
      var $172;
      $obj=$172;
      var $173=$i;
      var $174=(($173)|(0))!=0;
      if ($174) { label = 44; break; } else { label = 47; break; }
    case 44: 
      var $176=$3;
      var $177=$2;
      var $178=(($177+28)|0);
      var $179=HEAP32[(($178)>>2)];
      var $180=_PyList_Append($176, $179);
      var $181=(($180)|(0))!=0;
      if ($181) { label = 45; break; } else { label = 46; break; }
    case 45: 
      label = 74; break;
    case 46: 
      label = 47; break;
    case 47: 
      var $185=$2;
      var $186=$3;
      var $187=$obj;
      var $188=$5;
      var $189=_encoder_listencode_obj($185, $186, $187, $188);
      var $190=(($189)|(0))!=0;
      if ($190) { label = 48; break; } else { label = 49; break; }
    case 48: 
      label = 74; break;
    case 49: 
      label = 50; break;
    case 50: 
      var $194=$i;
      var $195=((($194)+(1))|0);
      $i=$195;
      label = 36; break;
    case 51: 
      var $197=$ident;
      var $198=(($197)|(0))!=0;
      if ($198) { label = 52; break; } else { label = 64; break; }
    case 52: 
      var $200=$2;
      var $201=(($200+8)|0);
      var $202=HEAP32[(($201)>>2)];
      var $203=$ident;
      var $204=_PyDict_DelItem($202, $203);
      var $205=(($204)|(0))!=0;
      if ($205) { label = 53; break; } else { label = 54; break; }
    case 53: 
      label = 74; break;
    case 54: 
      label = 55; break;
    case 55: 
      var $209=$ident;
      var $210=(($209)|(0))!=0;
      if ($210) { label = 56; break; } else { label = 62; break; }
    case 56: 
      var $212=$ident;
      $_py_tmp=$212;
      $ident=0;
      label = 57; break;
    case 57: 
      var $214=$_py_tmp;
      var $215=(($214)|0);
      var $216=HEAP32[(($215)>>2)];
      var $217=((($216)-(1))|0);
      HEAP32[(($215)>>2)]=$217;
      var $218=(($217)|(0))!=0;
      if ($218) { label = 58; break; } else { label = 59; break; }
    case 58: 
      label = 60; break;
    case 59: 
      var $221=$_py_tmp;
      var $222=(($221+4)|0);
      var $223=HEAP32[(($222)>>2)];
      var $224=(($223+24)|0);
      var $225=HEAP32[(($224)>>2)];
      var $226=$_py_tmp;
      FUNCTION_TABLE[$225]($226);
      label = 60; break;
    case 60: 
      label = 61; break;
    case 61: 
      label = 62; break;
    case 62: 
      label = 63; break;
    case 63: 
      label = 64; break;
    case 64: 
      var $232=$2;
      var $233=(($232+20)|0);
      var $234=HEAP32[(($233)>>2)];
      var $235=(($234)|(0))!=((__Py_NoneStruct)|(0));
      if ($235) { label = 65; break; } else { label = 66; break; }
    case 65: 
      label = 66; break;
    case 66: 
      var $238=$3;
      var $239=HEAP32[((_encoder_listencode_list_close_array)>>2)];
      var $240=_PyList_Append($238, $239);
      var $241=(($240)|(0))!=0;
      if ($241) { label = 67; break; } else { label = 68; break; }
    case 67: 
      label = 74; break;
    case 68: 
      label = 69; break;
    case 69: 
      var $245=$s_fast;
      var $246=(($245)|0);
      var $247=HEAP32[(($246)>>2)];
      var $248=((($247)-(1))|0);
      HEAP32[(($246)>>2)]=$248;
      var $249=(($248)|(0))!=0;
      if ($249) { label = 70; break; } else { label = 71; break; }
    case 70: 
      label = 72; break;
    case 71: 
      var $252=$s_fast;
      var $253=(($252+4)|0);
      var $254=HEAP32[(($253)>>2)];
      var $255=(($254+24)|0);
      var $256=HEAP32[(($255)>>2)];
      var $257=$s_fast;
      FUNCTION_TABLE[$256]($257);
      label = 72; break;
    case 72: 
      label = 73; break;
    case 73: 
      $1=0;
      label = 90; break;
    case 74: 
      label = 75; break;
    case 75: 
      var $262=$ident;
      var $263=(($262)|(0))==0;
      if ($263) { label = 76; break; } else { label = 77; break; }
    case 76: 
      label = 83; break;
    case 77: 
      label = 78; break;
    case 78: 
      var $267=$ident;
      var $268=(($267)|0);
      var $269=HEAP32[(($268)>>2)];
      var $270=((($269)-(1))|0);
      HEAP32[(($268)>>2)]=$270;
      var $271=(($270)|(0))!=0;
      if ($271) { label = 79; break; } else { label = 80; break; }
    case 79: 
      label = 81; break;
    case 80: 
      var $274=$ident;
      var $275=(($274+4)|0);
      var $276=HEAP32[(($275)>>2)];
      var $277=(($276+24)|0);
      var $278=HEAP32[(($277)>>2)];
      var $279=$ident;
      FUNCTION_TABLE[$278]($279);
      label = 81; break;
    case 81: 
      label = 82; break;
    case 82: 
      label = 83; break;
    case 83: 
      label = 84; break;
    case 84: 
      label = 85; break;
    case 85: 
      var $285=$s_fast;
      var $286=(($285)|0);
      var $287=HEAP32[(($286)>>2)];
      var $288=((($287)-(1))|0);
      HEAP32[(($286)>>2)]=$288;
      var $289=(($288)|(0))!=0;
      if ($289) { label = 86; break; } else { label = 87; break; }
    case 86: 
      label = 88; break;
    case 87: 
      var $292=$s_fast;
      var $293=(($292+4)|0);
      var $294=HEAP32[(($293)>>2)];
      var $295=(($294+24)|0);
      var $296=HEAP32[(($295)>>2)];
      var $297=$s_fast;
      FUNCTION_TABLE[$296]($297);
      label = 88; break;
    case 88: 
      label = 89; break;
    case 89: 
      $1=-1;
      label = 90; break;
    case 90: 
      var $301=$1;
      return $301;
    default: assert(0, "bad label: " + label);
  }
}
function _encoder_listencode_dict($s, $rval, $dct, $indent_level) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $kstr;
      var $ident;
      var $key;
      var $value;
      var $it;
      var $skipkeys;
      var $idx;
      var $has_key;
      var $encoded;
      var $_py_tmp;
      var $_py_tmp1;
      var $_py_tmp2;
      var $_py_tmp3;
      $2=$s;
      $3=$rval;
      $4=$dct;
      $5=$indent_level;
      $kstr=0;
      $ident=0;
      $key=0;
      $value=0;
      $it=0;
      var $6=HEAP32[((_encoder_listencode_dict_open_dict)>>2)];
      var $7=(($6)|(0))==0;
      if ($7) { label = 4; break; } else { label = 2; break; }
    case 2: 
      var $9=HEAP32[((_encoder_listencode_dict_close_dict)>>2)];
      var $10=(($9)|(0))==0;
      if ($10) { label = 4; break; } else { label = 3; break; }
    case 3: 
      var $12=HEAP32[((_encoder_listencode_dict_empty_dict)>>2)];
      var $13=(($12)|(0))==0;
      if ($13) { label = 4; break; } else { label = 9; break; }
    case 4: 
      var $15=_PyString_InternFromString(((__str37)|0));
      HEAP32[((_encoder_listencode_dict_open_dict)>>2)]=$15;
      var $16=_PyString_InternFromString(((__str38)|0));
      HEAP32[((_encoder_listencode_dict_close_dict)>>2)]=$16;
      var $17=_PyString_InternFromString(((__str39)|0));
      HEAP32[((_encoder_listencode_dict_empty_dict)>>2)]=$17;
      var $18=HEAP32[((_encoder_listencode_dict_open_dict)>>2)];
      var $19=(($18)|(0))==0;
      if ($19) { label = 7; break; } else { label = 5; break; }
    case 5: 
      var $21=HEAP32[((_encoder_listencode_dict_close_dict)>>2)];
      var $22=(($21)|(0))==0;
      if ($22) { label = 7; break; } else { label = 6; break; }
    case 6: 
      var $24=HEAP32[((_encoder_listencode_dict_empty_dict)>>2)];
      var $25=(($24)|(0))==0;
      if ($25) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=-1;
      label = 187; break;
    case 8: 
      label = 9; break;
    case 9: 
      var $29=$4;
      var $30=$29;
      var $31=(($30+8)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32)|(0))==0;
      if ($33) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $35=$3;
      var $36=HEAP32[((_encoder_listencode_dict_empty_dict)>>2)];
      var $37=_PyList_Append($35, $36);
      $1=$37;
      label = 187; break;
    case 11: 
      var $39=$2;
      var $40=(($39+8)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=(($41)|(0))!=((__Py_NoneStruct)|(0));
      if ($42) { label = 12; break; } else { label = 21; break; }
    case 12: 
      var $44=$4;
      var $45=$44;
      var $46=_PyLong_FromVoidPtr($45);
      $ident=$46;
      var $47=$ident;
      var $48=(($47)|(0))==0;
      if ($48) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 136; break;
    case 14: 
      var $51=$2;
      var $52=(($51+8)|0);
      var $53=HEAP32[(($52)>>2)];
      var $54=$ident;
      var $55=_PyDict_Contains($53, $54);
      $has_key=$55;
      var $56=$has_key;
      var $57=(($56)|(0))!=0;
      if ($57) { label = 15; break; } else { label = 18; break; }
    case 15: 
      var $59=$has_key;
      var $60=(($59)|(0))!=-1;
      if ($60) { label = 16; break; } else { label = 17; break; }
    case 16: 
      var $62=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($62, ((__str36)|0));
      label = 17; break;
    case 17: 
      label = 136; break;
    case 18: 
      var $65=$2;
      var $66=(($65+8)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=$ident;
      var $69=$4;
      var $70=_PyDict_SetItem($67, $68, $69);
      var $71=(($70)|(0))!=0;
      if ($71) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 136; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $75=$3;
      var $76=HEAP32[((_encoder_listencode_dict_open_dict)>>2)];
      var $77=_PyList_Append($75, $76);
      var $78=(($77)|(0))!=0;
      if ($78) { label = 22; break; } else { label = 23; break; }
    case 22: 
      label = 136; break;
    case 23: 
      var $81=$2;
      var $82=(($81+20)|0);
      var $83=HEAP32[(($82)>>2)];
      var $84=(($83)|(0))!=((__Py_NoneStruct)|(0));
      if ($84) { label = 24; break; } else { label = 25; break; }
    case 24: 
      var $86=$5;
      var $87=((($86)+(1))|0);
      $5=$87;
      label = 25; break;
    case 25: 
      var $89=$4;
      var $90=_PyObject_GetIter($89);
      $it=$90;
      var $91=$it;
      var $92=(($91)|(0))==0;
      if ($92) { label = 26; break; } else { label = 27; break; }
    case 26: 
      label = 136; break;
    case 27: 
      var $95=$2;
      var $96=(($95+36)|0);
      var $97=HEAP32[(($96)>>2)];
      var $98=_PyObject_IsTrue($97);
      $skipkeys=$98;
      $idx=0;
      label = 28; break;
    case 28: 
      var $100=$it;
      var $101=_PyIter_Next($100);
      $key=$101;
      var $102=(($101)|(0))!=0;
      if ($102) { label = 29; break; } else { label = 107; break; }
    case 29: 
      var $104=$key;
      var $105=(($104+4)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=(($106+84)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=$108 & 134217728;
      var $110=(($109)|(0))!=0;
      if ($110) { label = 31; break; } else { label = 30; break; }
    case 30: 
      var $112=$key;
      var $113=(($112+4)|0);
      var $114=HEAP32[(($113)>>2)];
      var $115=(($114+84)|0);
      var $116=HEAP32[(($115)>>2)];
      var $117=$116 & 268435456;
      var $118=(($117)|(0))!=0;
      if ($118) { label = 31; break; } else { label = 32; break; }
    case 31: 
      var $120=$key;
      var $121=(($120)|0);
      var $122=HEAP32[(($121)>>2)];
      var $123=((($122)+(1))|0);
      HEAP32[(($121)>>2)]=$123;
      var $124=$key;
      $kstr=$124;
      label = 59; break;
    case 32: 
      var $126=$key;
      var $127=(($126+4)|0);
      var $128=HEAP32[(($127)>>2)];
      var $129=(($128)|(0))==((_PyFloat_Type)|(0));
      if ($129) { label = 34; break; } else { label = 33; break; }
    case 33: 
      var $131=$key;
      var $132=(($131+4)|0);
      var $133=HEAP32[(($132)>>2)];
      var $134=_PyType_IsSubtype($133, _PyFloat_Type);
      var $135=(($134)|(0))!=0;
      if ($135) { label = 34; break; } else { label = 37; break; }
    case 34: 
      var $137=$2;
      var $138=$key;
      var $139=_encoder_encode_float($137, $138);
      $kstr=$139;
      var $140=$kstr;
      var $141=(($140)|(0))==0;
      if ($141) { label = 35; break; } else { label = 36; break; }
    case 35: 
      label = 136; break;
    case 36: 
      label = 58; break;
    case 37: 
      var $145=$key;
      var $146=(($145+4)|0);
      var $147=HEAP32[(($146)>>2)];
      var $148=(($147+84)|0);
      var $149=HEAP32[(($148)>>2)];
      var $150=$149 & 8388608;
      var $151=(($150)|(0))!=0;
      if ($151) { label = 39; break; } else { label = 38; break; }
    case 38: 
      var $153=$key;
      var $154=(($153+4)|0);
      var $155=HEAP32[(($154)>>2)];
      var $156=(($155+84)|0);
      var $157=HEAP32[(($156)>>2)];
      var $158=$157 & 16777216;
      var $159=(($158)|(0))!=0;
      if ($159) { label = 39; break; } else { label = 42; break; }
    case 39: 
      var $161=$key;
      var $162=_PyObject_Str($161);
      $kstr=$162;
      var $163=$kstr;
      var $164=(($163)|(0))==0;
      if ($164) { label = 40; break; } else { label = 41; break; }
    case 40: 
      label = 136; break;
    case 41: 
      label = 57; break;
    case 42: 
      var $168=$key;
      var $169=(($168)|(0))==((__Py_TrueStruct)|(0));
      if ($169) { label = 45; break; } else { label = 43; break; }
    case 43: 
      var $171=$key;
      var $172=(($171)|(0))==((__Py_ZeroStruct)|(0));
      if ($172) { label = 45; break; } else { label = 44; break; }
    case 44: 
      var $174=$key;
      var $175=(($174)|(0))==((__Py_NoneStruct)|(0));
      if ($175) { label = 45; break; } else { label = 48; break; }
    case 45: 
      var $177=$key;
      var $178=__encoded_const($177);
      $kstr=$178;
      var $179=$kstr;
      var $180=(($179)|(0))==0;
      if ($180) { label = 46; break; } else { label = 47; break; }
    case 46: 
      label = 136; break;
    case 47: 
      label = 56; break;
    case 48: 
      var $184=$skipkeys;
      var $185=(($184)|(0))!=0;
      if ($185) { label = 49; break; } else { label = 55; break; }
    case 49: 
      label = 50; break;
    case 50: 
      var $188=$key;
      var $189=(($188)|0);
      var $190=HEAP32[(($189)>>2)];
      var $191=((($190)-(1))|0);
      HEAP32[(($189)>>2)]=$191;
      var $192=(($191)|(0))!=0;
      if ($192) { label = 51; break; } else { label = 52; break; }
    case 51: 
      label = 53; break;
    case 52: 
      var $195=$key;
      var $196=(($195+4)|0);
      var $197=HEAP32[(($196)>>2)];
      var $198=(($197+24)|0);
      var $199=HEAP32[(($198)>>2)];
      var $200=$key;
      FUNCTION_TABLE[$199]($200);
      label = 53; break;
    case 53: 
      label = 54; break;
    case 54: 
      label = 28; break;
    case 55: 
      var $204=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($204, ((__str40)|0));
      label = 136; break;
    case 56: 
      label = 57; break;
    case 57: 
      label = 58; break;
    case 58: 
      label = 59; break;
    case 59: 
      var $209=$idx;
      var $210=(($209)|(0))!=0;
      if ($210) { label = 60; break; } else { label = 63; break; }
    case 60: 
      var $212=$3;
      var $213=$2;
      var $214=(($213+28)|0);
      var $215=HEAP32[(($214)>>2)];
      var $216=_PyList_Append($212, $215);
      var $217=(($216)|(0))!=0;
      if ($217) { label = 61; break; } else { label = 62; break; }
    case 61: 
      label = 136; break;
    case 62: 
      label = 63; break;
    case 63: 
      var $221=$4;
      var $222=$key;
      var $223=_PyObject_GetItem($221, $222);
      $value=$223;
      var $224=$value;
      var $225=(($224)|(0))==0;
      if ($225) { label = 64; break; } else { label = 65; break; }
    case 64: 
      label = 136; break;
    case 65: 
      var $228=$2;
      var $229=$kstr;
      var $230=_encoder_encode_string($228, $229);
      $encoded=$230;
      label = 66; break;
    case 66: 
      var $232=$kstr;
      var $233=(($232)|(0))!=0;
      if ($233) { label = 67; break; } else { label = 73; break; }
    case 67: 
      var $235=$kstr;
      $_py_tmp=$235;
      $kstr=0;
      label = 68; break;
    case 68: 
      var $237=$_py_tmp;
      var $238=(($237)|0);
      var $239=HEAP32[(($238)>>2)];
      var $240=((($239)-(1))|0);
      HEAP32[(($238)>>2)]=$240;
      var $241=(($240)|(0))!=0;
      if ($241) { label = 69; break; } else { label = 70; break; }
    case 69: 
      label = 71; break;
    case 70: 
      var $244=$_py_tmp;
      var $245=(($244+4)|0);
      var $246=HEAP32[(($245)>>2)];
      var $247=(($246+24)|0);
      var $248=HEAP32[(($247)>>2)];
      var $249=$_py_tmp;
      FUNCTION_TABLE[$248]($249);
      label = 71; break;
    case 71: 
      label = 72; break;
    case 72: 
      label = 73; break;
    case 73: 
      label = 74; break;
    case 74: 
      var $254=$encoded;
      var $255=(($254)|(0))==0;
      if ($255) { label = 75; break; } else { label = 76; break; }
    case 75: 
      label = 136; break;
    case 76: 
      var $258=$3;
      var $259=$encoded;
      var $260=_PyList_Append($258, $259);
      var $261=(($260)|(0))!=0;
      if ($261) { label = 77; break; } else { label = 83; break; }
    case 77: 
      label = 78; break;
    case 78: 
      var $264=$encoded;
      var $265=(($264)|0);
      var $266=HEAP32[(($265)>>2)];
      var $267=((($266)-(1))|0);
      HEAP32[(($265)>>2)]=$267;
      var $268=(($267)|(0))!=0;
      if ($268) { label = 79; break; } else { label = 80; break; }
    case 79: 
      label = 81; break;
    case 80: 
      var $271=$encoded;
      var $272=(($271+4)|0);
      var $273=HEAP32[(($272)>>2)];
      var $274=(($273+24)|0);
      var $275=HEAP32[(($274)>>2)];
      var $276=$encoded;
      FUNCTION_TABLE[$275]($276);
      label = 81; break;
    case 81: 
      label = 82; break;
    case 82: 
      label = 136; break;
    case 83: 
      label = 84; break;
    case 84: 
      var $281=$encoded;
      var $282=(($281)|0);
      var $283=HEAP32[(($282)>>2)];
      var $284=((($283)-(1))|0);
      HEAP32[(($282)>>2)]=$284;
      var $285=(($284)|(0))!=0;
      if ($285) { label = 85; break; } else { label = 86; break; }
    case 85: 
      label = 87; break;
    case 86: 
      var $288=$encoded;
      var $289=(($288+4)|0);
      var $290=HEAP32[(($289)>>2)];
      var $291=(($290+24)|0);
      var $292=HEAP32[(($291)>>2)];
      var $293=$encoded;
      FUNCTION_TABLE[$292]($293);
      label = 87; break;
    case 87: 
      label = 88; break;
    case 88: 
      var $296=$3;
      var $297=$2;
      var $298=(($297+24)|0);
      var $299=HEAP32[(($298)>>2)];
      var $300=_PyList_Append($296, $299);
      var $301=(($300)|(0))!=0;
      if ($301) { label = 89; break; } else { label = 90; break; }
    case 89: 
      label = 136; break;
    case 90: 
      var $304=$2;
      var $305=$3;
      var $306=$value;
      var $307=$5;
      var $308=_encoder_listencode_obj($304, $305, $306, $307);
      var $309=(($308)|(0))!=0;
      if ($309) { label = 91; break; } else { label = 92; break; }
    case 91: 
      label = 136; break;
    case 92: 
      var $312=$idx;
      var $313=((($312)+(1))|0);
      $idx=$313;
      label = 93; break;
    case 93: 
      var $315=$value;
      var $316=(($315)|(0))!=0;
      if ($316) { label = 94; break; } else { label = 100; break; }
    case 94: 
      var $318=$value;
      $_py_tmp1=$318;
      $value=0;
      label = 95; break;
    case 95: 
      var $320=$_py_tmp1;
      var $321=(($320)|0);
      var $322=HEAP32[(($321)>>2)];
      var $323=((($322)-(1))|0);
      HEAP32[(($321)>>2)]=$323;
      var $324=(($323)|(0))!=0;
      if ($324) { label = 96; break; } else { label = 97; break; }
    case 96: 
      label = 98; break;
    case 97: 
      var $327=$_py_tmp1;
      var $328=(($327+4)|0);
      var $329=HEAP32[(($328)>>2)];
      var $330=(($329+24)|0);
      var $331=HEAP32[(($330)>>2)];
      var $332=$_py_tmp1;
      FUNCTION_TABLE[$331]($332);
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
      var $338=$key;
      var $339=(($338)|0);
      var $340=HEAP32[(($339)>>2)];
      var $341=((($340)-(1))|0);
      HEAP32[(($339)>>2)]=$341;
      var $342=(($341)|(0))!=0;
      if ($342) { label = 103; break; } else { label = 104; break; }
    case 103: 
      label = 105; break;
    case 104: 
      var $345=$key;
      var $346=(($345+4)|0);
      var $347=HEAP32[(($346)>>2)];
      var $348=(($347+24)|0);
      var $349=HEAP32[(($348)>>2)];
      var $350=$key;
      FUNCTION_TABLE[$349]($350);
      label = 105; break;
    case 105: 
      label = 106; break;
    case 106: 
      label = 28; break;
    case 107: 
      var $354=_PyErr_Occurred();
      var $355=(($354)|(0))!=0;
      if ($355) { label = 108; break; } else { label = 109; break; }
    case 108: 
      label = 136; break;
    case 109: 
      label = 110; break;
    case 110: 
      var $359=$it;
      var $360=(($359)|(0))!=0;
      if ($360) { label = 111; break; } else { label = 117; break; }
    case 111: 
      var $362=$it;
      $_py_tmp2=$362;
      $it=0;
      label = 112; break;
    case 112: 
      var $364=$_py_tmp2;
      var $365=(($364)|0);
      var $366=HEAP32[(($365)>>2)];
      var $367=((($366)-(1))|0);
      HEAP32[(($365)>>2)]=$367;
      var $368=(($367)|(0))!=0;
      if ($368) { label = 113; break; } else { label = 114; break; }
    case 113: 
      label = 115; break;
    case 114: 
      var $371=$_py_tmp2;
      var $372=(($371+4)|0);
      var $373=HEAP32[(($372)>>2)];
      var $374=(($373+24)|0);
      var $375=HEAP32[(($374)>>2)];
      var $376=$_py_tmp2;
      FUNCTION_TABLE[$375]($376);
      label = 115; break;
    case 115: 
      label = 116; break;
    case 116: 
      label = 117; break;
    case 117: 
      label = 118; break;
    case 118: 
      var $381=$ident;
      var $382=(($381)|(0))!=0;
      if ($382) { label = 119; break; } else { label = 131; break; }
    case 119: 
      var $384=$2;
      var $385=(($384+8)|0);
      var $386=HEAP32[(($385)>>2)];
      var $387=$ident;
      var $388=_PyDict_DelItem($386, $387);
      var $389=(($388)|(0))!=0;
      if ($389) { label = 120; break; } else { label = 121; break; }
    case 120: 
      label = 136; break;
    case 121: 
      label = 122; break;
    case 122: 
      var $393=$ident;
      var $394=(($393)|(0))!=0;
      if ($394) { label = 123; break; } else { label = 129; break; }
    case 123: 
      var $396=$ident;
      $_py_tmp3=$396;
      $ident=0;
      label = 124; break;
    case 124: 
      var $398=$_py_tmp3;
      var $399=(($398)|0);
      var $400=HEAP32[(($399)>>2)];
      var $401=((($400)-(1))|0);
      HEAP32[(($399)>>2)]=$401;
      var $402=(($401)|(0))!=0;
      if ($402) { label = 125; break; } else { label = 126; break; }
    case 125: 
      label = 127; break;
    case 126: 
      var $405=$_py_tmp3;
      var $406=(($405+4)|0);
      var $407=HEAP32[(($406)>>2)];
      var $408=(($407+24)|0);
      var $409=HEAP32[(($408)>>2)];
      var $410=$_py_tmp3;
      FUNCTION_TABLE[$409]($410);
      label = 127; break;
    case 127: 
      label = 128; break;
    case 128: 
      label = 129; break;
    case 129: 
      label = 130; break;
    case 130: 
      label = 131; break;
    case 131: 
      var $416=$2;
      var $417=(($416+20)|0);
      var $418=HEAP32[(($417)>>2)];
      var $419=(($418)|(0))!=((__Py_NoneStruct)|(0));
      if ($419) { label = 132; break; } else { label = 133; break; }
    case 132: 
      label = 133; break;
    case 133: 
      var $422=$3;
      var $423=HEAP32[((_encoder_listencode_dict_close_dict)>>2)];
      var $424=_PyList_Append($422, $423);
      var $425=(($424)|(0))!=0;
      if ($425) { label = 134; break; } else { label = 135; break; }
    case 134: 
      label = 136; break;
    case 135: 
      $1=0;
      label = 187; break;
    case 136: 
      label = 137; break;
    case 137: 
      var $430=$it;
      var $431=(($430)|(0))==0;
      if ($431) { label = 138; break; } else { label = 139; break; }
    case 138: 
      label = 145; break;
    case 139: 
      label = 140; break;
    case 140: 
      var $435=$it;
      var $436=(($435)|0);
      var $437=HEAP32[(($436)>>2)];
      var $438=((($437)-(1))|0);
      HEAP32[(($436)>>2)]=$438;
      var $439=(($438)|(0))!=0;
      if ($439) { label = 141; break; } else { label = 142; break; }
    case 141: 
      label = 143; break;
    case 142: 
      var $442=$it;
      var $443=(($442+4)|0);
      var $444=HEAP32[(($443)>>2)];
      var $445=(($444+24)|0);
      var $446=HEAP32[(($445)>>2)];
      var $447=$it;
      FUNCTION_TABLE[$446]($447);
      label = 143; break;
    case 143: 
      label = 144; break;
    case 144: 
      label = 145; break;
    case 145: 
      label = 146; break;
    case 146: 
      label = 147; break;
    case 147: 
      var $453=$key;
      var $454=(($453)|(0))==0;
      if ($454) { label = 148; break; } else { label = 149; break; }
    case 148: 
      label = 155; break;
    case 149: 
      label = 150; break;
    case 150: 
      var $458=$key;
      var $459=(($458)|0);
      var $460=HEAP32[(($459)>>2)];
      var $461=((($460)-(1))|0);
      HEAP32[(($459)>>2)]=$461;
      var $462=(($461)|(0))!=0;
      if ($462) { label = 151; break; } else { label = 152; break; }
    case 151: 
      label = 153; break;
    case 152: 
      var $465=$key;
      var $466=(($465+4)|0);
      var $467=HEAP32[(($466)>>2)];
      var $468=(($467+24)|0);
      var $469=HEAP32[(($468)>>2)];
      var $470=$key;
      FUNCTION_TABLE[$469]($470);
      label = 153; break;
    case 153: 
      label = 154; break;
    case 154: 
      label = 155; break;
    case 155: 
      label = 156; break;
    case 156: 
      label = 157; break;
    case 157: 
      var $476=$value;
      var $477=(($476)|(0))==0;
      if ($477) { label = 158; break; } else { label = 159; break; }
    case 158: 
      label = 165; break;
    case 159: 
      label = 160; break;
    case 160: 
      var $481=$value;
      var $482=(($481)|0);
      var $483=HEAP32[(($482)>>2)];
      var $484=((($483)-(1))|0);
      HEAP32[(($482)>>2)]=$484;
      var $485=(($484)|(0))!=0;
      if ($485) { label = 161; break; } else { label = 162; break; }
    case 161: 
      label = 163; break;
    case 162: 
      var $488=$value;
      var $489=(($488+4)|0);
      var $490=HEAP32[(($489)>>2)];
      var $491=(($490+24)|0);
      var $492=HEAP32[(($491)>>2)];
      var $493=$value;
      FUNCTION_TABLE[$492]($493);
      label = 163; break;
    case 163: 
      label = 164; break;
    case 164: 
      label = 165; break;
    case 165: 
      label = 166; break;
    case 166: 
      label = 167; break;
    case 167: 
      var $499=$kstr;
      var $500=(($499)|(0))==0;
      if ($500) { label = 168; break; } else { label = 169; break; }
    case 168: 
      label = 175; break;
    case 169: 
      label = 170; break;
    case 170: 
      var $504=$kstr;
      var $505=(($504)|0);
      var $506=HEAP32[(($505)>>2)];
      var $507=((($506)-(1))|0);
      HEAP32[(($505)>>2)]=$507;
      var $508=(($507)|(0))!=0;
      if ($508) { label = 171; break; } else { label = 172; break; }
    case 171: 
      label = 173; break;
    case 172: 
      var $511=$kstr;
      var $512=(($511+4)|0);
      var $513=HEAP32[(($512)>>2)];
      var $514=(($513+24)|0);
      var $515=HEAP32[(($514)>>2)];
      var $516=$kstr;
      FUNCTION_TABLE[$515]($516);
      label = 173; break;
    case 173: 
      label = 174; break;
    case 174: 
      label = 175; break;
    case 175: 
      label = 176; break;
    case 176: 
      label = 177; break;
    case 177: 
      var $522=$ident;
      var $523=(($522)|(0))==0;
      if ($523) { label = 178; break; } else { label = 179; break; }
    case 178: 
      label = 185; break;
    case 179: 
      label = 180; break;
    case 180: 
      var $527=$ident;
      var $528=(($527)|0);
      var $529=HEAP32[(($528)>>2)];
      var $530=((($529)-(1))|0);
      HEAP32[(($528)>>2)]=$530;
      var $531=(($530)|(0))!=0;
      if ($531) { label = 181; break; } else { label = 182; break; }
    case 181: 
      label = 183; break;
    case 182: 
      var $534=$ident;
      var $535=(($534+4)|0);
      var $536=HEAP32[(($535)>>2)];
      var $537=(($536+24)|0);
      var $538=HEAP32[(($537)>>2)];
      var $539=$ident;
      FUNCTION_TABLE[$538]($539);
      label = 183; break;
    case 183: 
      label = 184; break;
    case 184: 
      label = 185; break;
    case 185: 
      label = 186; break;
    case 186: 
      $1=-1;
      label = 187; break;
    case 187: 
      var $545=$1;
      return $545;
    default: assert(0, "bad label: " + label);
  }
}
function _scanner_dealloc($self) {
  var label = 0;
  var $1;
  $1=$self;
  var $2=$1;
  var $3=_scanner_clear($2);
  var $4=$1;
  var $5=(($4+4)|0);
  var $6=HEAP32[(($5)>>2)];
  var $7=(($6+160)|0);
  var $8=HEAP32[(($7)>>2)];
  var $9=$1;
  var $10=$9;
  FUNCTION_TABLE[$8]($10);
  return;
}
function _scanner_call($self, $args, $kwds) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 12)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $pystr=__stackBase__;
      var $rval;
      var $idx=(__stackBase__)+(4);
      var $next_idx=(__stackBase__)+(8);
      var $s;
      $2=$self;
      $3=$args;
      $4=$kwds;
      HEAP32[(($next_idx)>>2)]=-1;
      var $5=$2;
      var $6=(($5+4)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==((_PyScannerType)|(0));
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+4)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=_PyType_IsSubtype($12, _PyScannerType);
      var $14=(($13)|(0))!=0;
      if ($14) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 5; break;
    case 4: 
      ___assert_func(((__str29)|0), 1664, ((___func___scanner_call)|0), ((__str55)|0));
      throw "Reached an unreachable!";
      label = 5; break;
    case 5: 
      var $19=$2;
      var $20=$19;
      $s=$20;
      var $21=$3;
      var $22=$4;
      var $23=_PyArg_ParseTupleAndKeywords($21, $22, ((__str66)|0), ((_scanner_call_kwlist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 12)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$pystr,HEAP32[(((tempInt)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 32),HEAP32[(((tempInt)+(8))>>2)]=$idx,tempInt));
      var $24=(($23)|(0))!=0;
      if ($24) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=0;
      label = 14; break;
    case 7: 
      var $27=HEAP32[(($pystr)>>2)];
      var $28=(($27+4)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=(($29+84)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=$31 & 134217728;
      var $33=(($32)|(0))!=0;
      if ($33) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $35=$s;
      var $36=HEAP32[(($pystr)>>2)];
      var $37=HEAP32[(($idx)>>2)];
      var $38=_scan_once_str($35, $36, $37, $next_idx);
      $rval=$38;
      label = 13; break;
    case 9: 
      var $40=HEAP32[(($pystr)>>2)];
      var $41=(($40+4)|0);
      var $42=HEAP32[(($41)>>2)];
      var $43=(($42+84)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=$44 & 268435456;
      var $46=(($45)|(0))!=0;
      if ($46) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $48=$s;
      var $49=HEAP32[(($pystr)>>2)];
      var $50=HEAP32[(($idx)>>2)];
      var $51=_scan_once_unicode($48, $49, $50, $next_idx);
      $rval=$51;
      label = 12; break;
    case 11: 
      var $53=HEAP32[((_PyExc_TypeError)>>2)];
      var $54=HEAP32[(($pystr)>>2)];
      var $55=(($54+4)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=(($56+12)|0);
      var $58=HEAP32[(($57)>>2)];
      var $59=_PyErr_Format($53, ((__str7)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$58,tempInt));
      $1=0;
      label = 14; break;
    case 12: 
      label = 13; break;
    case 13: 
      var $62=$rval;
      var $63=HEAP32[(($next_idx)>>2)];
      var $64=__build_rval_index_tuple($62, $63);
      $1=$64;
      label = 14; break;
    case 14: 
      var $66=$1;
      STACKTOP = __stackBase__;
      return $66;
    default: assert(0, "bad label: " + label);
  }
}
function _scanner_traverse($self, $visit, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $s;
      var $vret;
      var $vret1;
      var $vret2;
      var $vret3;
      var $vret4;
      var $vret5;
      var $vret6;
      $2=$self;
      $3=$visit;
      $4=$arg;
      var $5=$2;
      var $6=(($5+4)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==((_PyScannerType)|(0));
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+4)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=_PyType_IsSubtype($12, _PyScannerType);
      var $14=(($13)|(0))!=0;
      if ($14) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 5; break;
    case 4: 
      ___assert_func(((__str29)|0), 852, ((___func___scanner_traverse)|0), ((__str55)|0));
      throw "Reached an unreachable!";
      label = 5; break;
    case 5: 
      var $19=$2;
      var $20=$19;
      $s=$20;
      label = 6; break;
    case 6: 
      var $22=$s;
      var $23=(($22+8)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=(($24)|(0))!=0;
      if ($25) { label = 7; break; } else { label = 10; break; }
    case 7: 
      var $27=$3;
      var $28=$s;
      var $29=(($28+8)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$4;
      var $32=FUNCTION_TABLE[$27]($30, $31);
      $vret=$32;
      var $33=$vret;
      var $34=(($33)|(0))!=0;
      if ($34) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $36=$vret;
      $1=$36;
      label = 48; break;
    case 9: 
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $41=$s;
      var $42=(($41+12)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=(($43)|(0))!=0;
      if ($44) { label = 13; break; } else { label = 16; break; }
    case 13: 
      var $46=$3;
      var $47=$s;
      var $48=(($47+12)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=$4;
      var $51=FUNCTION_TABLE[$46]($49, $50);
      $vret1=$51;
      var $52=$vret1;
      var $53=(($52)|(0))!=0;
      if ($53) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $55=$vret1;
      $1=$55;
      label = 48; break;
    case 15: 
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      label = 18; break;
    case 18: 
      var $60=$s;
      var $61=(($60+16)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=(($62)|(0))!=0;
      if ($63) { label = 19; break; } else { label = 22; break; }
    case 19: 
      var $65=$3;
      var $66=$s;
      var $67=(($66+16)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=$4;
      var $70=FUNCTION_TABLE[$65]($68, $69);
      $vret2=$70;
      var $71=$vret2;
      var $72=(($71)|(0))!=0;
      if ($72) { label = 20; break; } else { label = 21; break; }
    case 20: 
      var $74=$vret2;
      $1=$74;
      label = 48; break;
    case 21: 
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $79=$s;
      var $80=(($79+20)|0);
      var $81=HEAP32[(($80)>>2)];
      var $82=(($81)|(0))!=0;
      if ($82) { label = 25; break; } else { label = 28; break; }
    case 25: 
      var $84=$3;
      var $85=$s;
      var $86=(($85+20)|0);
      var $87=HEAP32[(($86)>>2)];
      var $88=$4;
      var $89=FUNCTION_TABLE[$84]($87, $88);
      $vret3=$89;
      var $90=$vret3;
      var $91=(($90)|(0))!=0;
      if ($91) { label = 26; break; } else { label = 27; break; }
    case 26: 
      var $93=$vret3;
      $1=$93;
      label = 48; break;
    case 27: 
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      label = 30; break;
    case 30: 
      var $98=$s;
      var $99=(($98+24)|0);
      var $100=HEAP32[(($99)>>2)];
      var $101=(($100)|(0))!=0;
      if ($101) { label = 31; break; } else { label = 34; break; }
    case 31: 
      var $103=$3;
      var $104=$s;
      var $105=(($104+24)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=$4;
      var $108=FUNCTION_TABLE[$103]($106, $107);
      $vret4=$108;
      var $109=$vret4;
      var $110=(($109)|(0))!=0;
      if ($110) { label = 32; break; } else { label = 33; break; }
    case 32: 
      var $112=$vret4;
      $1=$112;
      label = 48; break;
    case 33: 
      label = 34; break;
    case 34: 
      label = 35; break;
    case 35: 
      label = 36; break;
    case 36: 
      var $117=$s;
      var $118=(($117+28)|0);
      var $119=HEAP32[(($118)>>2)];
      var $120=(($119)|(0))!=0;
      if ($120) { label = 37; break; } else { label = 40; break; }
    case 37: 
      var $122=$3;
      var $123=$s;
      var $124=(($123+28)|0);
      var $125=HEAP32[(($124)>>2)];
      var $126=$4;
      var $127=FUNCTION_TABLE[$122]($125, $126);
      $vret5=$127;
      var $128=$vret5;
      var $129=(($128)|(0))!=0;
      if ($129) { label = 38; break; } else { label = 39; break; }
    case 38: 
      var $131=$vret5;
      $1=$131;
      label = 48; break;
    case 39: 
      label = 40; break;
    case 40: 
      label = 41; break;
    case 41: 
      label = 42; break;
    case 42: 
      var $136=$s;
      var $137=(($136+32)|0);
      var $138=HEAP32[(($137)>>2)];
      var $139=(($138)|(0))!=0;
      if ($139) { label = 43; break; } else { label = 46; break; }
    case 43: 
      var $141=$3;
      var $142=$s;
      var $143=(($142+32)|0);
      var $144=HEAP32[(($143)>>2)];
      var $145=$4;
      var $146=FUNCTION_TABLE[$141]($144, $145);
      $vret6=$146;
      var $147=$vret6;
      var $148=(($147)|(0))!=0;
      if ($148) { label = 44; break; } else { label = 45; break; }
    case 44: 
      var $150=$vret6;
      $1=$150;
      label = 48; break;
    case 45: 
      label = 46; break;
    case 46: 
      label = 47; break;
    case 47: 
      $1=0;
      label = 48; break;
    case 48: 
      var $155=$1;
      return $155;
    default: assert(0, "bad label: " + label);
  }
}
function _scanner_clear($self) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $s;
      var $_py_tmp;
      var $_py_tmp1;
      var $_py_tmp2;
      var $_py_tmp3;
      var $_py_tmp4;
      var $_py_tmp5;
      var $_py_tmp6;
      $1=$self;
      var $2=$1;
      var $3=(($2+4)|0);
      var $4=HEAP32[(($3)>>2)];
      var $5=(($4)|(0))==((_PyScannerType)|(0));
      if ($5) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $7=$1;
      var $8=(($7+4)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=_PyType_IsSubtype($9, _PyScannerType);
      var $11=(($10)|(0))!=0;
      if ($11) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 5; break;
    case 4: 
      ___assert_func(((__str29)|0), 868, ((___func___scanner_clear)|0), ((__str55)|0));
      throw "Reached an unreachable!";
      label = 5; break;
    case 5: 
      var $16=$1;
      var $17=$16;
      $s=$17;
      label = 6; break;
    case 6: 
      var $19=$s;
      var $20=(($19+8)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=(($21)|(0))!=0;
      if ($22) { label = 7; break; } else { label = 13; break; }
    case 7: 
      var $24=$s;
      var $25=(($24+8)|0);
      var $26=HEAP32[(($25)>>2)];
      $_py_tmp=$26;
      var $27=$s;
      var $28=(($27+8)|0);
      HEAP32[(($28)>>2)]=0;
      label = 8; break;
    case 8: 
      var $30=$_py_tmp;
      var $31=(($30)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=((($32)-(1))|0);
      HEAP32[(($31)>>2)]=$33;
      var $34=(($33)|(0))!=0;
      if ($34) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 11; break;
    case 10: 
      var $37=$_py_tmp;
      var $38=(($37+4)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=(($39+24)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=$_py_tmp;
      FUNCTION_TABLE[$41]($42);
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $48=$s;
      var $49=(($48+12)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=(($50)|(0))!=0;
      if ($51) { label = 16; break; } else { label = 22; break; }
    case 16: 
      var $53=$s;
      var $54=(($53+12)|0);
      var $55=HEAP32[(($54)>>2)];
      $_py_tmp1=$55;
      var $56=$s;
      var $57=(($56+12)|0);
      HEAP32[(($57)>>2)]=0;
      label = 17; break;
    case 17: 
      var $59=$_py_tmp1;
      var $60=(($59)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=((($61)-(1))|0);
      HEAP32[(($60)>>2)]=$62;
      var $63=(($62)|(0))!=0;
      if ($63) { label = 18; break; } else { label = 19; break; }
    case 18: 
      label = 20; break;
    case 19: 
      var $66=$_py_tmp1;
      var $67=(($66+4)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=(($68+24)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=$_py_tmp1;
      FUNCTION_TABLE[$70]($71);
      label = 20; break;
    case 20: 
      label = 21; break;
    case 21: 
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $77=$s;
      var $78=(($77+16)|0);
      var $79=HEAP32[(($78)>>2)];
      var $80=(($79)|(0))!=0;
      if ($80) { label = 25; break; } else { label = 31; break; }
    case 25: 
      var $82=$s;
      var $83=(($82+16)|0);
      var $84=HEAP32[(($83)>>2)];
      $_py_tmp2=$84;
      var $85=$s;
      var $86=(($85+16)|0);
      HEAP32[(($86)>>2)]=0;
      label = 26; break;
    case 26: 
      var $88=$_py_tmp2;
      var $89=(($88)|0);
      var $90=HEAP32[(($89)>>2)];
      var $91=((($90)-(1))|0);
      HEAP32[(($89)>>2)]=$91;
      var $92=(($91)|(0))!=0;
      if ($92) { label = 27; break; } else { label = 28; break; }
    case 27: 
      label = 29; break;
    case 28: 
      var $95=$_py_tmp2;
      var $96=(($95+4)|0);
      var $97=HEAP32[(($96)>>2)];
      var $98=(($97+24)|0);
      var $99=HEAP32[(($98)>>2)];
      var $100=$_py_tmp2;
      FUNCTION_TABLE[$99]($100);
      label = 29; break;
    case 29: 
      label = 30; break;
    case 30: 
      label = 31; break;
    case 31: 
      label = 32; break;
    case 32: 
      label = 33; break;
    case 33: 
      var $106=$s;
      var $107=(($106+20)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=(($108)|(0))!=0;
      if ($109) { label = 34; break; } else { label = 40; break; }
    case 34: 
      var $111=$s;
      var $112=(($111+20)|0);
      var $113=HEAP32[(($112)>>2)];
      $_py_tmp3=$113;
      var $114=$s;
      var $115=(($114+20)|0);
      HEAP32[(($115)>>2)]=0;
      label = 35; break;
    case 35: 
      var $117=$_py_tmp3;
      var $118=(($117)|0);
      var $119=HEAP32[(($118)>>2)];
      var $120=((($119)-(1))|0);
      HEAP32[(($118)>>2)]=$120;
      var $121=(($120)|(0))!=0;
      if ($121) { label = 36; break; } else { label = 37; break; }
    case 36: 
      label = 38; break;
    case 37: 
      var $124=$_py_tmp3;
      var $125=(($124+4)|0);
      var $126=HEAP32[(($125)>>2)];
      var $127=(($126+24)|0);
      var $128=HEAP32[(($127)>>2)];
      var $129=$_py_tmp3;
      FUNCTION_TABLE[$128]($129);
      label = 38; break;
    case 38: 
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      label = 41; break;
    case 41: 
      label = 42; break;
    case 42: 
      var $135=$s;
      var $136=(($135+24)|0);
      var $137=HEAP32[(($136)>>2)];
      var $138=(($137)|(0))!=0;
      if ($138) { label = 43; break; } else { label = 49; break; }
    case 43: 
      var $140=$s;
      var $141=(($140+24)|0);
      var $142=HEAP32[(($141)>>2)];
      $_py_tmp4=$142;
      var $143=$s;
      var $144=(($143+24)|0);
      HEAP32[(($144)>>2)]=0;
      label = 44; break;
    case 44: 
      var $146=$_py_tmp4;
      var $147=(($146)|0);
      var $148=HEAP32[(($147)>>2)];
      var $149=((($148)-(1))|0);
      HEAP32[(($147)>>2)]=$149;
      var $150=(($149)|(0))!=0;
      if ($150) { label = 45; break; } else { label = 46; break; }
    case 45: 
      label = 47; break;
    case 46: 
      var $153=$_py_tmp4;
      var $154=(($153+4)|0);
      var $155=HEAP32[(($154)>>2)];
      var $156=(($155+24)|0);
      var $157=HEAP32[(($156)>>2)];
      var $158=$_py_tmp4;
      FUNCTION_TABLE[$157]($158);
      label = 47; break;
    case 47: 
      label = 48; break;
    case 48: 
      label = 49; break;
    case 49: 
      label = 50; break;
    case 50: 
      label = 51; break;
    case 51: 
      var $164=$s;
      var $165=(($164+28)|0);
      var $166=HEAP32[(($165)>>2)];
      var $167=(($166)|(0))!=0;
      if ($167) { label = 52; break; } else { label = 58; break; }
    case 52: 
      var $169=$s;
      var $170=(($169+28)|0);
      var $171=HEAP32[(($170)>>2)];
      $_py_tmp5=$171;
      var $172=$s;
      var $173=(($172+28)|0);
      HEAP32[(($173)>>2)]=0;
      label = 53; break;
    case 53: 
      var $175=$_py_tmp5;
      var $176=(($175)|0);
      var $177=HEAP32[(($176)>>2)];
      var $178=((($177)-(1))|0);
      HEAP32[(($176)>>2)]=$178;
      var $179=(($178)|(0))!=0;
      if ($179) { label = 54; break; } else { label = 55; break; }
    case 54: 
      label = 56; break;
    case 55: 
      var $182=$_py_tmp5;
      var $183=(($182+4)|0);
      var $184=HEAP32[(($183)>>2)];
      var $185=(($184+24)|0);
      var $186=HEAP32[(($185)>>2)];
      var $187=$_py_tmp5;
      FUNCTION_TABLE[$186]($187);
      label = 56; break;
    case 56: 
      label = 57; break;
    case 57: 
      label = 58; break;
    case 58: 
      label = 59; break;
    case 59: 
      label = 60; break;
    case 60: 
      var $193=$s;
      var $194=(($193+32)|0);
      var $195=HEAP32[(($194)>>2)];
      var $196=(($195)|(0))!=0;
      if ($196) { label = 61; break; } else { label = 67; break; }
    case 61: 
      var $198=$s;
      var $199=(($198+32)|0);
      var $200=HEAP32[(($199)>>2)];
      $_py_tmp6=$200;
      var $201=$s;
      var $202=(($201+32)|0);
      HEAP32[(($202)>>2)]=0;
      label = 62; break;
    case 62: 
      var $204=$_py_tmp6;
      var $205=(($204)|0);
      var $206=HEAP32[(($205)>>2)];
      var $207=((($206)-(1))|0);
      HEAP32[(($205)>>2)]=$207;
      var $208=(($207)|(0))!=0;
      if ($208) { label = 63; break; } else { label = 64; break; }
    case 63: 
      label = 65; break;
    case 64: 
      var $211=$_py_tmp6;
      var $212=(($211+4)|0);
      var $213=HEAP32[(($212)>>2)];
      var $214=(($213+24)|0);
      var $215=HEAP32[(($214)>>2)];
      var $216=$_py_tmp6;
      FUNCTION_TABLE[$215]($216);
      label = 65; break;
    case 65: 
      label = 66; break;
    case 66: 
      label = 67; break;
    case 67: 
      label = 68; break;
    case 68: 
      return 0;
    default: assert(0, "bad label: " + label);
  }
}
function _scanner_new($type, $args, $kwds) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $s;
      $1=$type;
      $2=$args;
      $3=$kwds;
      var $4=$1;
      var $5=(($4+152)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=$1;
      var $8=FUNCTION_TABLE[$6]($7, 0);
      var $9=$8;
      $s=$9;
      var $10=$s;
      var $11=(($10)|(0))!=0;
      if ($11) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $13=$s;
      var $14=(($13+8)|0);
      HEAP32[(($14)>>2)]=0;
      var $15=$s;
      var $16=(($15+12)|0);
      HEAP32[(($16)>>2)]=0;
      var $17=$s;
      var $18=(($17+16)|0);
      HEAP32[(($18)>>2)]=0;
      var $19=$s;
      var $20=(($19+20)|0);
      HEAP32[(($20)>>2)]=0;
      var $21=$s;
      var $22=(($21+24)|0);
      HEAP32[(($22)>>2)]=0;
      var $23=$s;
      var $24=(($23+28)|0);
      HEAP32[(($24)>>2)]=0;
      var $25=$s;
      var $26=(($25+32)|0);
      HEAP32[(($26)>>2)]=0;
      label = 3; break;
    case 3: 
      var $28=$s;
      var $29=$28;
      return $29;
    default: assert(0, "bad label: " + label);
  }
}
function _scanner_init($self, $args, $kwds) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $ctx=__stackBase__;
      var $s;
      var $tmp;
      var $_py_tmp;
      var $_py_tmp1;
      var $_py_tmp2;
      var $_py_tmp3;
      var $_py_tmp4;
      var $_py_tmp5;
      var $_py_tmp6;
      $2=$self;
      $3=$args;
      $4=$kwds;
      var $5=$2;
      var $6=(($5+4)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==((_PyScannerType)|(0));
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+4)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=_PyType_IsSubtype($12, _PyScannerType);
      var $14=(($13)|(0))!=0;
      if ($14) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 5; break;
    case 4: 
      ___assert_func(((__str29)|0), 1709, ((___func___scanner_init)|0), ((__str55)|0));
      throw "Reached an unreachable!";
      label = 5; break;
    case 5: 
      var $19=$2;
      var $20=$19;
      $s=$20;
      var $21=$3;
      var $22=$4;
      var $23=_PyArg_ParseTupleAndKeywords($21, $22, ((__str56)|0), ((_scanner_init_kwlist)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$ctx,tempInt));
      var $24=(($23)|(0))!=0;
      if ($24) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=-1;
      label = 105; break;
    case 7: 
      var $27=HEAP32[(($ctx)>>2)];
      var $28=_PyObject_GetAttrString($27, ((__str57)|0));
      var $29=$s;
      var $30=(($29+8)|0);
      HEAP32[(($30)>>2)]=$28;
      var $31=$s;
      var $32=(($31+8)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=(($33)|(0))==0;
      if ($34) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 41; break;
    case 9: 
      var $37=$s;
      var $38=(($37+8)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=(($39)|(0))==((__Py_NoneStruct)|(0));
      if ($40) { label = 10; break; } else { label = 16; break; }
    case 10: 
      label = 11; break;
    case 11: 
      var $43=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $44=((($43)-(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$44;
      var $45=(($44)|(0))!=0;
      if ($45) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      var $48=HEAP32[((((__Py_NoneStruct+4)|0))>>2)];
      var $49=(($48+24)|0);
      var $50=HEAP32[(($49)>>2)];
      FUNCTION_TABLE[$50](__Py_NoneStruct);
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $53=_PyString_InternFromString(((__str6)|0));
      var $54=$s;
      var $55=(($54+8)|0);
      HEAP32[(($55)>>2)]=$53;
      label = 24; break;
    case 16: 
      var $57=$s;
      var $58=(($57+8)|0);
      var $59=HEAP32[(($58)>>2)];
      var $60=(($59+4)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=(($61+84)|0);
      var $63=HEAP32[(($62)>>2)];
      var $64=$63 & 268435456;
      var $65=(($64)|(0))!=0;
      if ($65) { label = 17; break; } else { label = 23; break; }
    case 17: 
      var $67=$s;
      var $68=(($67+8)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=_PyUnicodeUCS2_AsEncodedString($69, 0, 0);
      $tmp=$70;
      label = 18; break;
    case 18: 
      var $72=$s;
      var $73=(($72+8)|0);
      var $74=HEAP32[(($73)>>2)];
      var $75=(($74)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=((($76)-(1))|0);
      HEAP32[(($75)>>2)]=$77;
      var $78=(($77)|(0))!=0;
      if ($78) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 21; break;
    case 20: 
      var $81=$s;
      var $82=(($81+8)|0);
      var $83=HEAP32[(($82)>>2)];
      var $84=(($83+4)|0);
      var $85=HEAP32[(($84)>>2)];
      var $86=(($85+24)|0);
      var $87=HEAP32[(($86)>>2)];
      var $88=$s;
      var $89=(($88+8)|0);
      var $90=HEAP32[(($89)>>2)];
      FUNCTION_TABLE[$87]($90);
      label = 21; break;
    case 21: 
      label = 22; break;
    case 22: 
      var $93=$tmp;
      var $94=$s;
      var $95=(($94+8)|0);
      HEAP32[(($95)>>2)]=$93;
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $98=$s;
      var $99=(($98+8)|0);
      var $100=HEAP32[(($99)>>2)];
      var $101=(($100)|(0))==0;
      if ($101) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 41; break;
    case 26: 
      var $104=$s;
      var $105=(($104+8)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=(($106+4)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=(($108+84)|0);
      var $110=HEAP32[(($109)>>2)];
      var $111=$110 & 134217728;
      var $112=(($111)|(0))!=0;
      if ($112) { label = 28; break; } else { label = 27; break; }
    case 27: 
      var $114=HEAP32[((_PyExc_TypeError)>>2)];
      var $115=$s;
      var $116=(($115+8)|0);
      var $117=HEAP32[(($116)>>2)];
      var $118=(($117+4)|0);
      var $119=HEAP32[(($118)>>2)];
      var $120=(($119+12)|0);
      var $121=HEAP32[(($120)>>2)];
      var $122=_PyErr_Format($114, ((__str58)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$121,tempInt));
      label = 41; break;
    case 28: 
      var $124=HEAP32[(($ctx)>>2)];
      var $125=_PyObject_GetAttrString($124, ((__str18)|0));
      var $126=$s;
      var $127=(($126+12)|0);
      HEAP32[(($127)>>2)]=$125;
      var $128=$s;
      var $129=(($128+12)|0);
      var $130=HEAP32[(($129)>>2)];
      var $131=(($130)|(0))==0;
      if ($131) { label = 29; break; } else { label = 30; break; }
    case 29: 
      label = 41; break;
    case 30: 
      var $134=HEAP32[(($ctx)>>2)];
      var $135=_PyObject_GetAttrString($134, ((__str59)|0));
      var $136=$s;
      var $137=(($136+16)|0);
      HEAP32[(($137)>>2)]=$135;
      var $138=$s;
      var $139=(($138+16)|0);
      var $140=HEAP32[(($139)>>2)];
      var $141=(($140)|(0))==0;
      if ($141) { label = 31; break; } else { label = 32; break; }
    case 31: 
      label = 41; break;
    case 32: 
      var $144=HEAP32[(($ctx)>>2)];
      var $145=_PyObject_GetAttrString($144, ((__str60)|0));
      var $146=$s;
      var $147=(($146+20)|0);
      HEAP32[(($147)>>2)]=$145;
      var $148=$s;
      var $149=(($148+20)|0);
      var $150=HEAP32[(($149)>>2)];
      var $151=(($150)|(0))==0;
      if ($151) { label = 33; break; } else { label = 34; break; }
    case 33: 
      label = 41; break;
    case 34: 
      var $154=HEAP32[(($ctx)>>2)];
      var $155=_PyObject_GetAttrString($154, ((__str61)|0));
      var $156=$s;
      var $157=(($156+24)|0);
      HEAP32[(($157)>>2)]=$155;
      var $158=$s;
      var $159=(($158+24)|0);
      var $160=HEAP32[(($159)>>2)];
      var $161=(($160)|(0))==0;
      if ($161) { label = 35; break; } else { label = 36; break; }
    case 35: 
      label = 41; break;
    case 36: 
      var $164=HEAP32[(($ctx)>>2)];
      var $165=_PyObject_GetAttrString($164, ((__str62)|0));
      var $166=$s;
      var $167=(($166+28)|0);
      HEAP32[(($167)>>2)]=$165;
      var $168=$s;
      var $169=(($168+28)|0);
      var $170=HEAP32[(($169)>>2)];
      var $171=(($170)|(0))==0;
      if ($171) { label = 37; break; } else { label = 38; break; }
    case 37: 
      label = 41; break;
    case 38: 
      var $174=HEAP32[(($ctx)>>2)];
      var $175=_PyObject_GetAttrString($174, ((__str63)|0));
      var $176=$s;
      var $177=(($176+32)|0);
      HEAP32[(($177)>>2)]=$175;
      var $178=$s;
      var $179=(($178+32)|0);
      var $180=HEAP32[(($179)>>2)];
      var $181=(($180)|(0))==0;
      if ($181) { label = 39; break; } else { label = 40; break; }
    case 39: 
      label = 41; break;
    case 40: 
      $1=0;
      label = 105; break;
    case 41: 
      label = 42; break;
    case 42: 
      var $186=$s;
      var $187=(($186+8)|0);
      var $188=HEAP32[(($187)>>2)];
      var $189=(($188)|(0))!=0;
      if ($189) { label = 43; break; } else { label = 49; break; }
    case 43: 
      var $191=$s;
      var $192=(($191+8)|0);
      var $193=HEAP32[(($192)>>2)];
      $_py_tmp=$193;
      var $194=$s;
      var $195=(($194+8)|0);
      HEAP32[(($195)>>2)]=0;
      label = 44; break;
    case 44: 
      var $197=$_py_tmp;
      var $198=(($197)|0);
      var $199=HEAP32[(($198)>>2)];
      var $200=((($199)-(1))|0);
      HEAP32[(($198)>>2)]=$200;
      var $201=(($200)|(0))!=0;
      if ($201) { label = 45; break; } else { label = 46; break; }
    case 45: 
      label = 47; break;
    case 46: 
      var $204=$_py_tmp;
      var $205=(($204+4)|0);
      var $206=HEAP32[(($205)>>2)];
      var $207=(($206+24)|0);
      var $208=HEAP32[(($207)>>2)];
      var $209=$_py_tmp;
      FUNCTION_TABLE[$208]($209);
      label = 47; break;
    case 47: 
      label = 48; break;
    case 48: 
      label = 49; break;
    case 49: 
      label = 50; break;
    case 50: 
      label = 51; break;
    case 51: 
      var $215=$s;
      var $216=(($215+12)|0);
      var $217=HEAP32[(($216)>>2)];
      var $218=(($217)|(0))!=0;
      if ($218) { label = 52; break; } else { label = 58; break; }
    case 52: 
      var $220=$s;
      var $221=(($220+12)|0);
      var $222=HEAP32[(($221)>>2)];
      $_py_tmp1=$222;
      var $223=$s;
      var $224=(($223+12)|0);
      HEAP32[(($224)>>2)]=0;
      label = 53; break;
    case 53: 
      var $226=$_py_tmp1;
      var $227=(($226)|0);
      var $228=HEAP32[(($227)>>2)];
      var $229=((($228)-(1))|0);
      HEAP32[(($227)>>2)]=$229;
      var $230=(($229)|(0))!=0;
      if ($230) { label = 54; break; } else { label = 55; break; }
    case 54: 
      label = 56; break;
    case 55: 
      var $233=$_py_tmp1;
      var $234=(($233+4)|0);
      var $235=HEAP32[(($234)>>2)];
      var $236=(($235+24)|0);
      var $237=HEAP32[(($236)>>2)];
      var $238=$_py_tmp1;
      FUNCTION_TABLE[$237]($238);
      label = 56; break;
    case 56: 
      label = 57; break;
    case 57: 
      label = 58; break;
    case 58: 
      label = 59; break;
    case 59: 
      label = 60; break;
    case 60: 
      var $244=$s;
      var $245=(($244+16)|0);
      var $246=HEAP32[(($245)>>2)];
      var $247=(($246)|(0))!=0;
      if ($247) { label = 61; break; } else { label = 67; break; }
    case 61: 
      var $249=$s;
      var $250=(($249+16)|0);
      var $251=HEAP32[(($250)>>2)];
      $_py_tmp2=$251;
      var $252=$s;
      var $253=(($252+16)|0);
      HEAP32[(($253)>>2)]=0;
      label = 62; break;
    case 62: 
      var $255=$_py_tmp2;
      var $256=(($255)|0);
      var $257=HEAP32[(($256)>>2)];
      var $258=((($257)-(1))|0);
      HEAP32[(($256)>>2)]=$258;
      var $259=(($258)|(0))!=0;
      if ($259) { label = 63; break; } else { label = 64; break; }
    case 63: 
      label = 65; break;
    case 64: 
      var $262=$_py_tmp2;
      var $263=(($262+4)|0);
      var $264=HEAP32[(($263)>>2)];
      var $265=(($264+24)|0);
      var $266=HEAP32[(($265)>>2)];
      var $267=$_py_tmp2;
      FUNCTION_TABLE[$266]($267);
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
      var $273=$s;
      var $274=(($273+20)|0);
      var $275=HEAP32[(($274)>>2)];
      var $276=(($275)|(0))!=0;
      if ($276) { label = 70; break; } else { label = 76; break; }
    case 70: 
      var $278=$s;
      var $279=(($278+20)|0);
      var $280=HEAP32[(($279)>>2)];
      $_py_tmp3=$280;
      var $281=$s;
      var $282=(($281+20)|0);
      HEAP32[(($282)>>2)]=0;
      label = 71; break;
    case 71: 
      var $284=$_py_tmp3;
      var $285=(($284)|0);
      var $286=HEAP32[(($285)>>2)];
      var $287=((($286)-(1))|0);
      HEAP32[(($285)>>2)]=$287;
      var $288=(($287)|(0))!=0;
      if ($288) { label = 72; break; } else { label = 73; break; }
    case 72: 
      label = 74; break;
    case 73: 
      var $291=$_py_tmp3;
      var $292=(($291+4)|0);
      var $293=HEAP32[(($292)>>2)];
      var $294=(($293+24)|0);
      var $295=HEAP32[(($294)>>2)];
      var $296=$_py_tmp3;
      FUNCTION_TABLE[$295]($296);
      label = 74; break;
    case 74: 
      label = 75; break;
    case 75: 
      label = 76; break;
    case 76: 
      label = 77; break;
    case 77: 
      label = 78; break;
    case 78: 
      var $302=$s;
      var $303=(($302+24)|0);
      var $304=HEAP32[(($303)>>2)];
      var $305=(($304)|(0))!=0;
      if ($305) { label = 79; break; } else { label = 85; break; }
    case 79: 
      var $307=$s;
      var $308=(($307+24)|0);
      var $309=HEAP32[(($308)>>2)];
      $_py_tmp4=$309;
      var $310=$s;
      var $311=(($310+24)|0);
      HEAP32[(($311)>>2)]=0;
      label = 80; break;
    case 80: 
      var $313=$_py_tmp4;
      var $314=(($313)|0);
      var $315=HEAP32[(($314)>>2)];
      var $316=((($315)-(1))|0);
      HEAP32[(($314)>>2)]=$316;
      var $317=(($316)|(0))!=0;
      if ($317) { label = 81; break; } else { label = 82; break; }
    case 81: 
      label = 83; break;
    case 82: 
      var $320=$_py_tmp4;
      var $321=(($320+4)|0);
      var $322=HEAP32[(($321)>>2)];
      var $323=(($322+24)|0);
      var $324=HEAP32[(($323)>>2)];
      var $325=$_py_tmp4;
      FUNCTION_TABLE[$324]($325);
      label = 83; break;
    case 83: 
      label = 84; break;
    case 84: 
      label = 85; break;
    case 85: 
      label = 86; break;
    case 86: 
      label = 87; break;
    case 87: 
      var $331=$s;
      var $332=(($331+28)|0);
      var $333=HEAP32[(($332)>>2)];
      var $334=(($333)|(0))!=0;
      if ($334) { label = 88; break; } else { label = 94; break; }
    case 88: 
      var $336=$s;
      var $337=(($336+28)|0);
      var $338=HEAP32[(($337)>>2)];
      $_py_tmp5=$338;
      var $339=$s;
      var $340=(($339+28)|0);
      HEAP32[(($340)>>2)]=0;
      label = 89; break;
    case 89: 
      var $342=$_py_tmp5;
      var $343=(($342)|0);
      var $344=HEAP32[(($343)>>2)];
      var $345=((($344)-(1))|0);
      HEAP32[(($343)>>2)]=$345;
      var $346=(($345)|(0))!=0;
      if ($346) { label = 90; break; } else { label = 91; break; }
    case 90: 
      label = 92; break;
    case 91: 
      var $349=$_py_tmp5;
      var $350=(($349+4)|0);
      var $351=HEAP32[(($350)>>2)];
      var $352=(($351+24)|0);
      var $353=HEAP32[(($352)>>2)];
      var $354=$_py_tmp5;
      FUNCTION_TABLE[$353]($354);
      label = 92; break;
    case 92: 
      label = 93; break;
    case 93: 
      label = 94; break;
    case 94: 
      label = 95; break;
    case 95: 
      label = 96; break;
    case 96: 
      var $360=$s;
      var $361=(($360+32)|0);
      var $362=HEAP32[(($361)>>2)];
      var $363=(($362)|(0))!=0;
      if ($363) { label = 97; break; } else { label = 103; break; }
    case 97: 
      var $365=$s;
      var $366=(($365+32)|0);
      var $367=HEAP32[(($366)>>2)];
      $_py_tmp6=$367;
      var $368=$s;
      var $369=(($368+32)|0);
      HEAP32[(($369)>>2)]=0;
      label = 98; break;
    case 98: 
      var $371=$_py_tmp6;
      var $372=(($371)|0);
      var $373=HEAP32[(($372)>>2)];
      var $374=((($373)-(1))|0);
      HEAP32[(($372)>>2)]=$374;
      var $375=(($374)|(0))!=0;
      if ($375) { label = 99; break; } else { label = 100; break; }
    case 99: 
      label = 101; break;
    case 100: 
      var $378=$_py_tmp6;
      var $379=(($378+4)|0);
      var $380=HEAP32[(($379)>>2)];
      var $381=(($380+24)|0);
      var $382=HEAP32[(($381)>>2)];
      var $383=$_py_tmp6;
      FUNCTION_TABLE[$382]($383);
      label = 101; break;
    case 101: 
      label = 102; break;
    case 102: 
      label = 103; break;
    case 103: 
      label = 104; break;
    case 104: 
      $1=-1;
      label = 105; break;
    case 105: 
      var $389=$1;
      STACKTOP = __stackBase__;
      return $389;
    default: assert(0, "bad label: " + label);
  }
}
function _scan_once_str($s, $pystr, $idx, $next_idx_ptr) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $res;
      var $str;
      var $length;
      $2=$s;
      $3=$pystr;
      $4=$idx;
      $5=$next_idx_ptr;
      var $6=$3;
      var $7=$6;
      var $8=(($7+20)|0);
      var $9=(($8)|0);
      $str=$9;
      var $10=$3;
      var $11=$10;
      var $12=(($11+8)|0);
      var $13=HEAP32[(($12)>>2)];
      $length=$13;
      var $14=$4;
      var $15=$length;
      var $16=(($14)|(0)) >= (($15)|(0));
      if ($16) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $18=HEAP32[((_PyExc_StopIteration)>>2)];
      _PyErr_SetNone($18);
      $1=0;
      label = 59; break;
    case 3: 
      var $20=$4;
      var $21=$str;
      var $22=(($21+$20)|0);
      var $23=HEAP8[($22)];
      var $24=(($23 << 24) >> 24);
      if ((($24)|(0))==34) {
        label = 4; break;
      }
      else if ((($24)|(0))==123) {
        label = 5; break;
      }
      else if ((($24)|(0))==91) {
        label = 9; break;
      }
      else if ((($24)|(0))==110) {
        label = 13; break;
      }
      else if ((($24)|(0))==116) {
        label = 19; break;
      }
      else if ((($24)|(0))==102) {
        label = 25; break;
      }
      else if ((($24)|(0))==78) {
        label = 32; break;
      }
      else if ((($24)|(0))==73) {
        label = 37; break;
      }
      else if ((($24)|(0))==45) {
        label = 47; break;
      }
      else {
      label = 58; break;
      }
    case 4: 
      var $26=$3;
      var $27=$4;
      var $28=((($27)+(1))|0);
      var $29=$2;
      var $30=(($29+8)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=$31;
      var $33=(($32+20)|0);
      var $34=(($33)|0);
      var $35=$2;
      var $36=(($35+12)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=_PyObject_IsTrue($37);
      var $39=$5;
      var $40=_scanstring_str($26, $28, $34, $38, $39);
      $1=$40;
      label = 59; break;
    case 5: 
      var $42=HEAP32[((__PyThreadState_Current)>>2)];
      var $43=(($42+12)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=((($44)+(1))|0);
      HEAP32[(($43)>>2)]=$45;
      var $46=HEAP32[((__Py_CheckRecursionLimit)>>2)];
      var $47=(($45)|(0)) > (($46)|(0));
      if ($47) { label = 6; break; } else { label = 8; break; }
    case 6: 
      var $49=__Py_CheckRecursiveCall(((__str73)|0));
      var $50=(($49)|(0))!=0;
      if ($50) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=0;
      label = 59; break;
    case 8: 
      var $53=$2;
      var $54=$3;
      var $55=$4;
      var $56=((($55)+(1))|0);
      var $57=$5;
      var $58=__parse_object_str($53, $54, $56, $57);
      $res=$58;
      var $59=HEAP32[((__PyThreadState_Current)>>2)];
      var $60=(($59+12)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=((($61)-(1))|0);
      HEAP32[(($60)>>2)]=$62;
      var $63=$res;
      $1=$63;
      label = 59; break;
    case 9: 
      var $65=HEAP32[((__PyThreadState_Current)>>2)];
      var $66=(($65+12)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=((($67)+(1))|0);
      HEAP32[(($66)>>2)]=$68;
      var $69=HEAP32[((__Py_CheckRecursionLimit)>>2)];
      var $70=(($68)|(0)) > (($69)|(0));
      if ($70) { label = 10; break; } else { label = 12; break; }
    case 10: 
      var $72=__Py_CheckRecursiveCall(((__str74)|0));
      var $73=(($72)|(0))!=0;
      if ($73) { label = 11; break; } else { label = 12; break; }
    case 11: 
      $1=0;
      label = 59; break;
    case 12: 
      var $76=$2;
      var $77=$3;
      var $78=$4;
      var $79=((($78)+(1))|0);
      var $80=$5;
      var $81=__parse_array_str($76, $77, $79, $80);
      $res=$81;
      var $82=HEAP32[((__PyThreadState_Current)>>2)];
      var $83=(($82+12)|0);
      var $84=HEAP32[(($83)>>2)];
      var $85=((($84)-(1))|0);
      HEAP32[(($83)>>2)]=$85;
      var $86=$res;
      $1=$86;
      label = 59; break;
    case 13: 
      var $88=$4;
      var $89=((($88)+(3))|0);
      var $90=$length;
      var $91=(($89)|(0)) < (($90)|(0));
      if ($91) { label = 14; break; } else { label = 18; break; }
    case 14: 
      var $93=$4;
      var $94=((($93)+(1))|0);
      var $95=$str;
      var $96=(($95+$94)|0);
      var $97=HEAP8[($96)];
      var $98=(($97 << 24) >> 24);
      var $99=(($98)|(0))==117;
      if ($99) { label = 15; break; } else { label = 18; break; }
    case 15: 
      var $101=$4;
      var $102=((($101)+(2))|0);
      var $103=$str;
      var $104=(($103+$102)|0);
      var $105=HEAP8[($104)];
      var $106=(($105 << 24) >> 24);
      var $107=(($106)|(0))==108;
      if ($107) { label = 16; break; } else { label = 18; break; }
    case 16: 
      var $109=$4;
      var $110=((($109)+(3))|0);
      var $111=$str;
      var $112=(($111+$110)|0);
      var $113=HEAP8[($112)];
      var $114=(($113 << 24) >> 24);
      var $115=(($114)|(0))==108;
      if ($115) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $117=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $118=((($117)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$118;
      var $119=$4;
      var $120=((($119)+(4))|0);
      var $121=$5;
      HEAP32[(($121)>>2)]=$120;
      $1=__Py_NoneStruct;
      label = 59; break;
    case 18: 
      label = 58; break;
    case 19: 
      var $124=$4;
      var $125=((($124)+(3))|0);
      var $126=$length;
      var $127=(($125)|(0)) < (($126)|(0));
      if ($127) { label = 20; break; } else { label = 24; break; }
    case 20: 
      var $129=$4;
      var $130=((($129)+(1))|0);
      var $131=$str;
      var $132=(($131+$130)|0);
      var $133=HEAP8[($132)];
      var $134=(($133 << 24) >> 24);
      var $135=(($134)|(0))==114;
      if ($135) { label = 21; break; } else { label = 24; break; }
    case 21: 
      var $137=$4;
      var $138=((($137)+(2))|0);
      var $139=$str;
      var $140=(($139+$138)|0);
      var $141=HEAP8[($140)];
      var $142=(($141 << 24) >> 24);
      var $143=(($142)|(0))==117;
      if ($143) { label = 22; break; } else { label = 24; break; }
    case 22: 
      var $145=$4;
      var $146=((($145)+(3))|0);
      var $147=$str;
      var $148=(($147+$146)|0);
      var $149=HEAP8[($148)];
      var $150=(($149 << 24) >> 24);
      var $151=(($150)|(0))==101;
      if ($151) { label = 23; break; } else { label = 24; break; }
    case 23: 
      var $153=HEAP32[((((__Py_TrueStruct)|0))>>2)];
      var $154=((($153)+(1))|0);
      HEAP32[((((__Py_TrueStruct)|0))>>2)]=$154;
      var $155=$4;
      var $156=((($155)+(4))|0);
      var $157=$5;
      HEAP32[(($157)>>2)]=$156;
      $1=__Py_TrueStruct;
      label = 59; break;
    case 24: 
      label = 58; break;
    case 25: 
      var $160=$4;
      var $161=((($160)+(4))|0);
      var $162=$length;
      var $163=(($161)|(0)) < (($162)|(0));
      if ($163) { label = 26; break; } else { label = 31; break; }
    case 26: 
      var $165=$4;
      var $166=((($165)+(1))|0);
      var $167=$str;
      var $168=(($167+$166)|0);
      var $169=HEAP8[($168)];
      var $170=(($169 << 24) >> 24);
      var $171=(($170)|(0))==97;
      if ($171) { label = 27; break; } else { label = 31; break; }
    case 27: 
      var $173=$4;
      var $174=((($173)+(2))|0);
      var $175=$str;
      var $176=(($175+$174)|0);
      var $177=HEAP8[($176)];
      var $178=(($177 << 24) >> 24);
      var $179=(($178)|(0))==108;
      if ($179) { label = 28; break; } else { label = 31; break; }
    case 28: 
      var $181=$4;
      var $182=((($181)+(3))|0);
      var $183=$str;
      var $184=(($183+$182)|0);
      var $185=HEAP8[($184)];
      var $186=(($185 << 24) >> 24);
      var $187=(($186)|(0))==115;
      if ($187) { label = 29; break; } else { label = 31; break; }
    case 29: 
      var $189=$4;
      var $190=((($189)+(4))|0);
      var $191=$str;
      var $192=(($191+$190)|0);
      var $193=HEAP8[($192)];
      var $194=(($193 << 24) >> 24);
      var $195=(($194)|(0))==101;
      if ($195) { label = 30; break; } else { label = 31; break; }
    case 30: 
      var $197=HEAP32[((((__Py_ZeroStruct)|0))>>2)];
      var $198=((($197)+(1))|0);
      HEAP32[((((__Py_ZeroStruct)|0))>>2)]=$198;
      var $199=$4;
      var $200=((($199)+(5))|0);
      var $201=$5;
      HEAP32[(($201)>>2)]=$200;
      $1=__Py_ZeroStruct;
      label = 59; break;
    case 31: 
      label = 58; break;
    case 32: 
      var $204=$4;
      var $205=((($204)+(2))|0);
      var $206=$length;
      var $207=(($205)|(0)) < (($206)|(0));
      if ($207) { label = 33; break; } else { label = 36; break; }
    case 33: 
      var $209=$4;
      var $210=((($209)+(1))|0);
      var $211=$str;
      var $212=(($211+$210)|0);
      var $213=HEAP8[($212)];
      var $214=(($213 << 24) >> 24);
      var $215=(($214)|(0))==97;
      if ($215) { label = 34; break; } else { label = 36; break; }
    case 34: 
      var $217=$4;
      var $218=((($217)+(2))|0);
      var $219=$str;
      var $220=(($219+$218)|0);
      var $221=HEAP8[($220)];
      var $222=(($221 << 24) >> 24);
      var $223=(($222)|(0))==78;
      if ($223) { label = 35; break; } else { label = 36; break; }
    case 35: 
      var $225=$2;
      var $226=$4;
      var $227=$5;
      var $228=__parse_constant($225, ((__str48)|0), $226, $227);
      $1=$228;
      label = 59; break;
    case 36: 
      label = 58; break;
    case 37: 
      var $231=$4;
      var $232=((($231)+(7))|0);
      var $233=$length;
      var $234=(($232)|(0)) < (($233)|(0));
      if ($234) { label = 38; break; } else { label = 46; break; }
    case 38: 
      var $236=$4;
      var $237=((($236)+(1))|0);
      var $238=$str;
      var $239=(($238+$237)|0);
      var $240=HEAP8[($239)];
      var $241=(($240 << 24) >> 24);
      var $242=(($241)|(0))==110;
      if ($242) { label = 39; break; } else { label = 46; break; }
    case 39: 
      var $244=$4;
      var $245=((($244)+(2))|0);
      var $246=$str;
      var $247=(($246+$245)|0);
      var $248=HEAP8[($247)];
      var $249=(($248 << 24) >> 24);
      var $250=(($249)|(0))==102;
      if ($250) { label = 40; break; } else { label = 46; break; }
    case 40: 
      var $252=$4;
      var $253=((($252)+(3))|0);
      var $254=$str;
      var $255=(($254+$253)|0);
      var $256=HEAP8[($255)];
      var $257=(($256 << 24) >> 24);
      var $258=(($257)|(0))==105;
      if ($258) { label = 41; break; } else { label = 46; break; }
    case 41: 
      var $260=$4;
      var $261=((($260)+(4))|0);
      var $262=$str;
      var $263=(($262+$261)|0);
      var $264=HEAP8[($263)];
      var $265=(($264 << 24) >> 24);
      var $266=(($265)|(0))==110;
      if ($266) { label = 42; break; } else { label = 46; break; }
    case 42: 
      var $268=$4;
      var $269=((($268)+(5))|0);
      var $270=$str;
      var $271=(($270+$269)|0);
      var $272=HEAP8[($271)];
      var $273=(($272 << 24) >> 24);
      var $274=(($273)|(0))==105;
      if ($274) { label = 43; break; } else { label = 46; break; }
    case 43: 
      var $276=$4;
      var $277=((($276)+(6))|0);
      var $278=$str;
      var $279=(($278+$277)|0);
      var $280=HEAP8[($279)];
      var $281=(($280 << 24) >> 24);
      var $282=(($281)|(0))==116;
      if ($282) { label = 44; break; } else { label = 46; break; }
    case 44: 
      var $284=$4;
      var $285=((($284)+(7))|0);
      var $286=$str;
      var $287=(($286+$285)|0);
      var $288=HEAP8[($287)];
      var $289=(($288 << 24) >> 24);
      var $290=(($289)|(0))==121;
      if ($290) { label = 45; break; } else { label = 46; break; }
    case 45: 
      var $292=$2;
      var $293=$4;
      var $294=$5;
      var $295=__parse_constant($292, ((__str46)|0), $293, $294);
      $1=$295;
      label = 59; break;
    case 46: 
      label = 58; break;
    case 47: 
      var $298=$4;
      var $299=((($298)+(8))|0);
      var $300=$length;
      var $301=(($299)|(0)) < (($300)|(0));
      if ($301) { label = 48; break; } else { label = 57; break; }
    case 48: 
      var $303=$4;
      var $304=((($303)+(1))|0);
      var $305=$str;
      var $306=(($305+$304)|0);
      var $307=HEAP8[($306)];
      var $308=(($307 << 24) >> 24);
      var $309=(($308)|(0))==73;
      if ($309) { label = 49; break; } else { label = 57; break; }
    case 49: 
      var $311=$4;
      var $312=((($311)+(2))|0);
      var $313=$str;
      var $314=(($313+$312)|0);
      var $315=HEAP8[($314)];
      var $316=(($315 << 24) >> 24);
      var $317=(($316)|(0))==110;
      if ($317) { label = 50; break; } else { label = 57; break; }
    case 50: 
      var $319=$4;
      var $320=((($319)+(3))|0);
      var $321=$str;
      var $322=(($321+$320)|0);
      var $323=HEAP8[($322)];
      var $324=(($323 << 24) >> 24);
      var $325=(($324)|(0))==102;
      if ($325) { label = 51; break; } else { label = 57; break; }
    case 51: 
      var $327=$4;
      var $328=((($327)+(4))|0);
      var $329=$str;
      var $330=(($329+$328)|0);
      var $331=HEAP8[($330)];
      var $332=(($331 << 24) >> 24);
      var $333=(($332)|(0))==105;
      if ($333) { label = 52; break; } else { label = 57; break; }
    case 52: 
      var $335=$4;
      var $336=((($335)+(5))|0);
      var $337=$str;
      var $338=(($337+$336)|0);
      var $339=HEAP8[($338)];
      var $340=(($339 << 24) >> 24);
      var $341=(($340)|(0))==110;
      if ($341) { label = 53; break; } else { label = 57; break; }
    case 53: 
      var $343=$4;
      var $344=((($343)+(6))|0);
      var $345=$str;
      var $346=(($345+$344)|0);
      var $347=HEAP8[($346)];
      var $348=(($347 << 24) >> 24);
      var $349=(($348)|(0))==105;
      if ($349) { label = 54; break; } else { label = 57; break; }
    case 54: 
      var $351=$4;
      var $352=((($351)+(7))|0);
      var $353=$str;
      var $354=(($353+$352)|0);
      var $355=HEAP8[($354)];
      var $356=(($355 << 24) >> 24);
      var $357=(($356)|(0))==116;
      if ($357) { label = 55; break; } else { label = 57; break; }
    case 55: 
      var $359=$4;
      var $360=((($359)+(8))|0);
      var $361=$str;
      var $362=(($361+$360)|0);
      var $363=HEAP8[($362)];
      var $364=(($363 << 24) >> 24);
      var $365=(($364)|(0))==121;
      if ($365) { label = 56; break; } else { label = 57; break; }
    case 56: 
      var $367=$2;
      var $368=$4;
      var $369=$5;
      var $370=__parse_constant($367, ((__str47)|0), $368, $369);
      $1=$370;
      label = 59; break;
    case 57: 
      label = 58; break;
    case 58: 
      var $373=$2;
      var $374=$3;
      var $375=$4;
      var $376=$5;
      var $377=__match_number_str($373, $374, $375, $376);
      $1=$377;
      label = 59; break;
    case 59: 
      var $379=$1;
      return $379;
    default: assert(0, "bad label: " + label);
  }
}
function _scan_once_unicode($s, $pystr, $idx, $next_idx_ptr) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $res;
      var $str;
      var $length;
      $2=$s;
      $3=$pystr;
      $4=$idx;
      $5=$next_idx_ptr;
      var $6=$3;
      var $7=$6;
      var $8=(($7+12)|0);
      var $9=HEAP32[(($8)>>2)];
      $str=$9;
      var $10=$3;
      var $11=$10;
      var $12=(($11+8)|0);
      var $13=HEAP32[(($12)>>2)];
      $length=$13;
      var $14=$4;
      var $15=$length;
      var $16=(($14)|(0)) >= (($15)|(0));
      if ($16) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $18=HEAP32[((_PyExc_StopIteration)>>2)];
      _PyErr_SetNone($18);
      $1=0;
      label = 59; break;
    case 3: 
      var $20=$4;
      var $21=$str;
      var $22=(($21+($20<<1))|0);
      var $23=HEAP16[(($22)>>1)];
      var $24=(($23)&(65535));
      if ((($24)|(0))==34) {
        label = 4; break;
      }
      else if ((($24)|(0))==123) {
        label = 5; break;
      }
      else if ((($24)|(0))==91) {
        label = 9; break;
      }
      else if ((($24)|(0))==110) {
        label = 13; break;
      }
      else if ((($24)|(0))==116) {
        label = 19; break;
      }
      else if ((($24)|(0))==102) {
        label = 25; break;
      }
      else if ((($24)|(0))==78) {
        label = 32; break;
      }
      else if ((($24)|(0))==73) {
        label = 37; break;
      }
      else if ((($24)|(0))==45) {
        label = 47; break;
      }
      else {
      label = 58; break;
      }
    case 4: 
      var $26=$3;
      var $27=$4;
      var $28=((($27)+(1))|0);
      var $29=$2;
      var $30=(($29+12)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=_PyObject_IsTrue($31);
      var $33=$5;
      var $34=_scanstring_unicode($26, $28, $32, $33);
      $1=$34;
      label = 59; break;
    case 5: 
      var $36=HEAP32[((__PyThreadState_Current)>>2)];
      var $37=(($36+12)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=((($38)+(1))|0);
      HEAP32[(($37)>>2)]=$39;
      var $40=HEAP32[((__Py_CheckRecursionLimit)>>2)];
      var $41=(($39)|(0)) > (($40)|(0));
      if ($41) { label = 6; break; } else { label = 8; break; }
    case 6: 
      var $43=__Py_CheckRecursiveCall(((__str67)|0));
      var $44=(($43)|(0))!=0;
      if ($44) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=0;
      label = 59; break;
    case 8: 
      var $47=$2;
      var $48=$3;
      var $49=$4;
      var $50=((($49)+(1))|0);
      var $51=$5;
      var $52=__parse_object_unicode($47, $48, $50, $51);
      $res=$52;
      var $53=HEAP32[((__PyThreadState_Current)>>2)];
      var $54=(($53+12)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=((($55)-(1))|0);
      HEAP32[(($54)>>2)]=$56;
      var $57=$res;
      $1=$57;
      label = 59; break;
    case 9: 
      var $59=HEAP32[((__PyThreadState_Current)>>2)];
      var $60=(($59+12)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=((($61)+(1))|0);
      HEAP32[(($60)>>2)]=$62;
      var $63=HEAP32[((__Py_CheckRecursionLimit)>>2)];
      var $64=(($62)|(0)) > (($63)|(0));
      if ($64) { label = 10; break; } else { label = 12; break; }
    case 10: 
      var $66=__Py_CheckRecursiveCall(((__str68)|0));
      var $67=(($66)|(0))!=0;
      if ($67) { label = 11; break; } else { label = 12; break; }
    case 11: 
      $1=0;
      label = 59; break;
    case 12: 
      var $70=$2;
      var $71=$3;
      var $72=$4;
      var $73=((($72)+(1))|0);
      var $74=$5;
      var $75=__parse_array_unicode($70, $71, $73, $74);
      $res=$75;
      var $76=HEAP32[((__PyThreadState_Current)>>2)];
      var $77=(($76+12)|0);
      var $78=HEAP32[(($77)>>2)];
      var $79=((($78)-(1))|0);
      HEAP32[(($77)>>2)]=$79;
      var $80=$res;
      $1=$80;
      label = 59; break;
    case 13: 
      var $82=$4;
      var $83=((($82)+(3))|0);
      var $84=$length;
      var $85=(($83)|(0)) < (($84)|(0));
      if ($85) { label = 14; break; } else { label = 18; break; }
    case 14: 
      var $87=$4;
      var $88=((($87)+(1))|0);
      var $89=$str;
      var $90=(($89+($88<<1))|0);
      var $91=HEAP16[(($90)>>1)];
      var $92=(($91)&(65535));
      var $93=(($92)|(0))==117;
      if ($93) { label = 15; break; } else { label = 18; break; }
    case 15: 
      var $95=$4;
      var $96=((($95)+(2))|0);
      var $97=$str;
      var $98=(($97+($96<<1))|0);
      var $99=HEAP16[(($98)>>1)];
      var $100=(($99)&(65535));
      var $101=(($100)|(0))==108;
      if ($101) { label = 16; break; } else { label = 18; break; }
    case 16: 
      var $103=$4;
      var $104=((($103)+(3))|0);
      var $105=$str;
      var $106=(($105+($104<<1))|0);
      var $107=HEAP16[(($106)>>1)];
      var $108=(($107)&(65535));
      var $109=(($108)|(0))==108;
      if ($109) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $111=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $112=((($111)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$112;
      var $113=$4;
      var $114=((($113)+(4))|0);
      var $115=$5;
      HEAP32[(($115)>>2)]=$114;
      $1=__Py_NoneStruct;
      label = 59; break;
    case 18: 
      label = 58; break;
    case 19: 
      var $118=$4;
      var $119=((($118)+(3))|0);
      var $120=$length;
      var $121=(($119)|(0)) < (($120)|(0));
      if ($121) { label = 20; break; } else { label = 24; break; }
    case 20: 
      var $123=$4;
      var $124=((($123)+(1))|0);
      var $125=$str;
      var $126=(($125+($124<<1))|0);
      var $127=HEAP16[(($126)>>1)];
      var $128=(($127)&(65535));
      var $129=(($128)|(0))==114;
      if ($129) { label = 21; break; } else { label = 24; break; }
    case 21: 
      var $131=$4;
      var $132=((($131)+(2))|0);
      var $133=$str;
      var $134=(($133+($132<<1))|0);
      var $135=HEAP16[(($134)>>1)];
      var $136=(($135)&(65535));
      var $137=(($136)|(0))==117;
      if ($137) { label = 22; break; } else { label = 24; break; }
    case 22: 
      var $139=$4;
      var $140=((($139)+(3))|0);
      var $141=$str;
      var $142=(($141+($140<<1))|0);
      var $143=HEAP16[(($142)>>1)];
      var $144=(($143)&(65535));
      var $145=(($144)|(0))==101;
      if ($145) { label = 23; break; } else { label = 24; break; }
    case 23: 
      var $147=HEAP32[((((__Py_TrueStruct)|0))>>2)];
      var $148=((($147)+(1))|0);
      HEAP32[((((__Py_TrueStruct)|0))>>2)]=$148;
      var $149=$4;
      var $150=((($149)+(4))|0);
      var $151=$5;
      HEAP32[(($151)>>2)]=$150;
      $1=__Py_TrueStruct;
      label = 59; break;
    case 24: 
      label = 58; break;
    case 25: 
      var $154=$4;
      var $155=((($154)+(4))|0);
      var $156=$length;
      var $157=(($155)|(0)) < (($156)|(0));
      if ($157) { label = 26; break; } else { label = 31; break; }
    case 26: 
      var $159=$4;
      var $160=((($159)+(1))|0);
      var $161=$str;
      var $162=(($161+($160<<1))|0);
      var $163=HEAP16[(($162)>>1)];
      var $164=(($163)&(65535));
      var $165=(($164)|(0))==97;
      if ($165) { label = 27; break; } else { label = 31; break; }
    case 27: 
      var $167=$4;
      var $168=((($167)+(2))|0);
      var $169=$str;
      var $170=(($169+($168<<1))|0);
      var $171=HEAP16[(($170)>>1)];
      var $172=(($171)&(65535));
      var $173=(($172)|(0))==108;
      if ($173) { label = 28; break; } else { label = 31; break; }
    case 28: 
      var $175=$4;
      var $176=((($175)+(3))|0);
      var $177=$str;
      var $178=(($177+($176<<1))|0);
      var $179=HEAP16[(($178)>>1)];
      var $180=(($179)&(65535));
      var $181=(($180)|(0))==115;
      if ($181) { label = 29; break; } else { label = 31; break; }
    case 29: 
      var $183=$4;
      var $184=((($183)+(4))|0);
      var $185=$str;
      var $186=(($185+($184<<1))|0);
      var $187=HEAP16[(($186)>>1)];
      var $188=(($187)&(65535));
      var $189=(($188)|(0))==101;
      if ($189) { label = 30; break; } else { label = 31; break; }
    case 30: 
      var $191=HEAP32[((((__Py_ZeroStruct)|0))>>2)];
      var $192=((($191)+(1))|0);
      HEAP32[((((__Py_ZeroStruct)|0))>>2)]=$192;
      var $193=$4;
      var $194=((($193)+(5))|0);
      var $195=$5;
      HEAP32[(($195)>>2)]=$194;
      $1=__Py_ZeroStruct;
      label = 59; break;
    case 31: 
      label = 58; break;
    case 32: 
      var $198=$4;
      var $199=((($198)+(2))|0);
      var $200=$length;
      var $201=(($199)|(0)) < (($200)|(0));
      if ($201) { label = 33; break; } else { label = 36; break; }
    case 33: 
      var $203=$4;
      var $204=((($203)+(1))|0);
      var $205=$str;
      var $206=(($205+($204<<1))|0);
      var $207=HEAP16[(($206)>>1)];
      var $208=(($207)&(65535));
      var $209=(($208)|(0))==97;
      if ($209) { label = 34; break; } else { label = 36; break; }
    case 34: 
      var $211=$4;
      var $212=((($211)+(2))|0);
      var $213=$str;
      var $214=(($213+($212<<1))|0);
      var $215=HEAP16[(($214)>>1)];
      var $216=(($215)&(65535));
      var $217=(($216)|(0))==78;
      if ($217) { label = 35; break; } else { label = 36; break; }
    case 35: 
      var $219=$2;
      var $220=$4;
      var $221=$5;
      var $222=__parse_constant($219, ((__str48)|0), $220, $221);
      $1=$222;
      label = 59; break;
    case 36: 
      label = 58; break;
    case 37: 
      var $225=$4;
      var $226=((($225)+(7))|0);
      var $227=$length;
      var $228=(($226)|(0)) < (($227)|(0));
      if ($228) { label = 38; break; } else { label = 46; break; }
    case 38: 
      var $230=$4;
      var $231=((($230)+(1))|0);
      var $232=$str;
      var $233=(($232+($231<<1))|0);
      var $234=HEAP16[(($233)>>1)];
      var $235=(($234)&(65535));
      var $236=(($235)|(0))==110;
      if ($236) { label = 39; break; } else { label = 46; break; }
    case 39: 
      var $238=$4;
      var $239=((($238)+(2))|0);
      var $240=$str;
      var $241=(($240+($239<<1))|0);
      var $242=HEAP16[(($241)>>1)];
      var $243=(($242)&(65535));
      var $244=(($243)|(0))==102;
      if ($244) { label = 40; break; } else { label = 46; break; }
    case 40: 
      var $246=$4;
      var $247=((($246)+(3))|0);
      var $248=$str;
      var $249=(($248+($247<<1))|0);
      var $250=HEAP16[(($249)>>1)];
      var $251=(($250)&(65535));
      var $252=(($251)|(0))==105;
      if ($252) { label = 41; break; } else { label = 46; break; }
    case 41: 
      var $254=$4;
      var $255=((($254)+(4))|0);
      var $256=$str;
      var $257=(($256+($255<<1))|0);
      var $258=HEAP16[(($257)>>1)];
      var $259=(($258)&(65535));
      var $260=(($259)|(0))==110;
      if ($260) { label = 42; break; } else { label = 46; break; }
    case 42: 
      var $262=$4;
      var $263=((($262)+(5))|0);
      var $264=$str;
      var $265=(($264+($263<<1))|0);
      var $266=HEAP16[(($265)>>1)];
      var $267=(($266)&(65535));
      var $268=(($267)|(0))==105;
      if ($268) { label = 43; break; } else { label = 46; break; }
    case 43: 
      var $270=$4;
      var $271=((($270)+(6))|0);
      var $272=$str;
      var $273=(($272+($271<<1))|0);
      var $274=HEAP16[(($273)>>1)];
      var $275=(($274)&(65535));
      var $276=(($275)|(0))==116;
      if ($276) { label = 44; break; } else { label = 46; break; }
    case 44: 
      var $278=$4;
      var $279=((($278)+(7))|0);
      var $280=$str;
      var $281=(($280+($279<<1))|0);
      var $282=HEAP16[(($281)>>1)];
      var $283=(($282)&(65535));
      var $284=(($283)|(0))==121;
      if ($284) { label = 45; break; } else { label = 46; break; }
    case 45: 
      var $286=$2;
      var $287=$4;
      var $288=$5;
      var $289=__parse_constant($286, ((__str46)|0), $287, $288);
      $1=$289;
      label = 59; break;
    case 46: 
      label = 58; break;
    case 47: 
      var $292=$4;
      var $293=((($292)+(8))|0);
      var $294=$length;
      var $295=(($293)|(0)) < (($294)|(0));
      if ($295) { label = 48; break; } else { label = 57; break; }
    case 48: 
      var $297=$4;
      var $298=((($297)+(1))|0);
      var $299=$str;
      var $300=(($299+($298<<1))|0);
      var $301=HEAP16[(($300)>>1)];
      var $302=(($301)&(65535));
      var $303=(($302)|(0))==73;
      if ($303) { label = 49; break; } else { label = 57; break; }
    case 49: 
      var $305=$4;
      var $306=((($305)+(2))|0);
      var $307=$str;
      var $308=(($307+($306<<1))|0);
      var $309=HEAP16[(($308)>>1)];
      var $310=(($309)&(65535));
      var $311=(($310)|(0))==110;
      if ($311) { label = 50; break; } else { label = 57; break; }
    case 50: 
      var $313=$4;
      var $314=((($313)+(3))|0);
      var $315=$str;
      var $316=(($315+($314<<1))|0);
      var $317=HEAP16[(($316)>>1)];
      var $318=(($317)&(65535));
      var $319=(($318)|(0))==102;
      if ($319) { label = 51; break; } else { label = 57; break; }
    case 51: 
      var $321=$4;
      var $322=((($321)+(4))|0);
      var $323=$str;
      var $324=(($323+($322<<1))|0);
      var $325=HEAP16[(($324)>>1)];
      var $326=(($325)&(65535));
      var $327=(($326)|(0))==105;
      if ($327) { label = 52; break; } else { label = 57; break; }
    case 52: 
      var $329=$4;
      var $330=((($329)+(5))|0);
      var $331=$str;
      var $332=(($331+($330<<1))|0);
      var $333=HEAP16[(($332)>>1)];
      var $334=(($333)&(65535));
      var $335=(($334)|(0))==110;
      if ($335) { label = 53; break; } else { label = 57; break; }
    case 53: 
      var $337=$4;
      var $338=((($337)+(6))|0);
      var $339=$str;
      var $340=(($339+($338<<1))|0);
      var $341=HEAP16[(($340)>>1)];
      var $342=(($341)&(65535));
      var $343=(($342)|(0))==105;
      if ($343) { label = 54; break; } else { label = 57; break; }
    case 54: 
      var $345=$4;
      var $346=((($345)+(7))|0);
      var $347=$str;
      var $348=(($347+($346<<1))|0);
      var $349=HEAP16[(($348)>>1)];
      var $350=(($349)&(65535));
      var $351=(($350)|(0))==116;
      if ($351) { label = 55; break; } else { label = 57; break; }
    case 55: 
      var $353=$4;
      var $354=((($353)+(8))|0);
      var $355=$str;
      var $356=(($355+($354<<1))|0);
      var $357=HEAP16[(($356)>>1)];
      var $358=(($357)&(65535));
      var $359=(($358)|(0))==121;
      if ($359) { label = 56; break; } else { label = 57; break; }
    case 56: 
      var $361=$2;
      var $362=$4;
      var $363=$5;
      var $364=__parse_constant($361, ((__str47)|0), $362, $363);
      $1=$364;
      label = 59; break;
    case 57: 
      label = 58; break;
    case 58: 
      var $367=$2;
      var $368=$3;
      var $369=$4;
      var $370=$5;
      var $371=__match_number_unicode($367, $368, $369, $370);
      $1=$371;
      label = 59; break;
    case 59: 
      var $373=$1;
      return $373;
    default: assert(0, "bad label: " + label);
  }
}
function __parse_object_unicode($s, $pystr, $idx, $next_idx_ptr) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $str;
      var $end_idx;
      var $rval;
      var $pairs;
      var $item;
      var $key;
      var $val;
      var $strict;
      var $next_idx=__stackBase__;
      var $_py_tmp;
      var $_py_tmp1;
      var $_py_tmp2;
      $2=$s;
      $3=$pystr;
      $4=$idx;
      $5=$next_idx_ptr;
      var $6=$3;
      var $7=$6;
      var $8=(($7+12)|0);
      var $9=HEAP32[(($8)>>2)];
      $str=$9;
      var $10=$3;
      var $11=$10;
      var $12=(($11+8)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=((($13)-(1))|0);
      $end_idx=$14;
      $key=0;
      $val=0;
      var $15=$2;
      var $16=(($15+12)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=_PyObject_IsTrue($17);
      $strict=$18;
      var $19=_PyList_New(0);
      $pairs=$19;
      var $20=$pairs;
      var $21=(($20)|(0))==0;
      if ($21) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 166; break;
    case 3: 
      label = 4; break;
    case 4: 
      var $25=$4;
      var $26=$end_idx;
      var $27=(($25)|(0)) <= (($26)|(0));
      if ($27) { label = 5; break; } else { var $59 = 0;label = 10; break; }
    case 5: 
      var $29=$4;
      var $30=$str;
      var $31=(($30+($29<<1))|0);
      var $32=HEAP16[(($31)>>1)];
      var $33=(($32)&(65535));
      var $34=(($33)|(0))==32;
      if ($34) { var $57 = 1;label = 9; break; } else { label = 6; break; }
    case 6: 
      var $36=$4;
      var $37=$str;
      var $38=(($37+($36<<1))|0);
      var $39=HEAP16[(($38)>>1)];
      var $40=(($39)&(65535));
      var $41=(($40)|(0))==9;
      if ($41) { var $57 = 1;label = 9; break; } else { label = 7; break; }
    case 7: 
      var $43=$4;
      var $44=$str;
      var $45=(($44+($43<<1))|0);
      var $46=HEAP16[(($45)>>1)];
      var $47=(($46)&(65535));
      var $48=(($47)|(0))==10;
      if ($48) { var $57 = 1;label = 9; break; } else { label = 8; break; }
    case 8: 
      var $50=$4;
      var $51=$str;
      var $52=(($51+($50<<1))|0);
      var $53=HEAP16[(($52)>>1)];
      var $54=(($53)&(65535));
      var $55=(($54)|(0))==13;
      var $57 = $55;label = 9; break;
    case 9: 
      var $57;
      var $59 = $57;label = 10; break;
    case 10: 
      var $59;
      if ($59) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $61=$4;
      var $62=((($61)+(1))|0);
      $4=$62;
      label = 4; break;
    case 12: 
      var $64=$4;
      var $65=$end_idx;
      var $66=(($64)|(0)) <= (($65)|(0));
      if ($66) { label = 13; break; } else { label = 102; break; }
    case 13: 
      var $68=$4;
      var $69=$str;
      var $70=(($69+($68<<1))|0);
      var $71=HEAP16[(($70)>>1)];
      var $72=(($71)&(65535));
      var $73=(($72)|(0))!=125;
      if ($73) { label = 14; break; } else { label = 102; break; }
    case 14: 
      label = 15; break;
    case 15: 
      var $76=$4;
      var $77=$end_idx;
      var $78=(($76)|(0)) <= (($77)|(0));
      if ($78) { label = 16; break; } else { label = 101; break; }
    case 16: 
      var $80=$4;
      var $81=$str;
      var $82=(($81+($80<<1))|0);
      var $83=HEAP16[(($82)>>1)];
      var $84=(($83)&(65535));
      var $85=(($84)|(0))!=34;
      if ($85) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $87=$3;
      var $88=$4;
      _raise_errmsg(((__str71)|0), $87, $88);
      label = 135; break;
    case 18: 
      var $90=$3;
      var $91=$4;
      var $92=((($91)+(1))|0);
      var $93=$strict;
      var $94=_scanstring_unicode($90, $92, $93, $next_idx);
      $key=$94;
      var $95=$key;
      var $96=(($95)|(0))==0;
      if ($96) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 135; break;
    case 20: 
      var $99=HEAP32[(($next_idx)>>2)];
      $4=$99;
      label = 21; break;
    case 21: 
      var $101=$4;
      var $102=$end_idx;
      var $103=(($101)|(0)) <= (($102)|(0));
      if ($103) { label = 22; break; } else { var $135 = 0;label = 27; break; }
    case 22: 
      var $105=$4;
      var $106=$str;
      var $107=(($106+($105<<1))|0);
      var $108=HEAP16[(($107)>>1)];
      var $109=(($108)&(65535));
      var $110=(($109)|(0))==32;
      if ($110) { var $133 = 1;label = 26; break; } else { label = 23; break; }
    case 23: 
      var $112=$4;
      var $113=$str;
      var $114=(($113+($112<<1))|0);
      var $115=HEAP16[(($114)>>1)];
      var $116=(($115)&(65535));
      var $117=(($116)|(0))==9;
      if ($117) { var $133 = 1;label = 26; break; } else { label = 24; break; }
    case 24: 
      var $119=$4;
      var $120=$str;
      var $121=(($120+($119<<1))|0);
      var $122=HEAP16[(($121)>>1)];
      var $123=(($122)&(65535));
      var $124=(($123)|(0))==10;
      if ($124) { var $133 = 1;label = 26; break; } else { label = 25; break; }
    case 25: 
      var $126=$4;
      var $127=$str;
      var $128=(($127+($126<<1))|0);
      var $129=HEAP16[(($128)>>1)];
      var $130=(($129)&(65535));
      var $131=(($130)|(0))==13;
      var $133 = $131;label = 26; break;
    case 26: 
      var $133;
      var $135 = $133;label = 27; break;
    case 27: 
      var $135;
      if ($135) { label = 28; break; } else { label = 29; break; }
    case 28: 
      var $137=$4;
      var $138=((($137)+(1))|0);
      $4=$138;
      label = 21; break;
    case 29: 
      var $140=$4;
      var $141=$end_idx;
      var $142=(($140)|(0)) > (($141)|(0));
      if ($142) { label = 31; break; } else { label = 30; break; }
    case 30: 
      var $144=$4;
      var $145=$str;
      var $146=(($145+($144<<1))|0);
      var $147=HEAP16[(($146)>>1)];
      var $148=(($147)&(65535));
      var $149=(($148)|(0))!=58;
      if ($149) { label = 31; break; } else { label = 32; break; }
    case 31: 
      var $151=$3;
      var $152=$4;
      _raise_errmsg(((__str72)|0), $151, $152);
      label = 135; break;
    case 32: 
      var $154=$4;
      var $155=((($154)+(1))|0);
      $4=$155;
      label = 33; break;
    case 33: 
      var $157=$4;
      var $158=$end_idx;
      var $159=(($157)|(0)) <= (($158)|(0));
      if ($159) { label = 34; break; } else { var $191 = 0;label = 39; break; }
    case 34: 
      var $161=$4;
      var $162=$str;
      var $163=(($162+($161<<1))|0);
      var $164=HEAP16[(($163)>>1)];
      var $165=(($164)&(65535));
      var $166=(($165)|(0))==32;
      if ($166) { var $189 = 1;label = 38; break; } else { label = 35; break; }
    case 35: 
      var $168=$4;
      var $169=$str;
      var $170=(($169+($168<<1))|0);
      var $171=HEAP16[(($170)>>1)];
      var $172=(($171)&(65535));
      var $173=(($172)|(0))==9;
      if ($173) { var $189 = 1;label = 38; break; } else { label = 36; break; }
    case 36: 
      var $175=$4;
      var $176=$str;
      var $177=(($176+($175<<1))|0);
      var $178=HEAP16[(($177)>>1)];
      var $179=(($178)&(65535));
      var $180=(($179)|(0))==10;
      if ($180) { var $189 = 1;label = 38; break; } else { label = 37; break; }
    case 37: 
      var $182=$4;
      var $183=$str;
      var $184=(($183+($182<<1))|0);
      var $185=HEAP16[(($184)>>1)];
      var $186=(($185)&(65535));
      var $187=(($186)|(0))==13;
      var $189 = $187;label = 38; break;
    case 38: 
      var $189;
      var $191 = $189;label = 39; break;
    case 39: 
      var $191;
      if ($191) { label = 40; break; } else { label = 41; break; }
    case 40: 
      var $193=$4;
      var $194=((($193)+(1))|0);
      $4=$194;
      label = 33; break;
    case 41: 
      var $196=$2;
      var $197=$3;
      var $198=$4;
      var $199=_scan_once_unicode($196, $197, $198, $next_idx);
      $val=$199;
      var $200=$val;
      var $201=(($200)|(0))==0;
      if ($201) { label = 42; break; } else { label = 43; break; }
    case 42: 
      label = 135; break;
    case 43: 
      var $204=$key;
      var $205=$val;
      var $206=_PyTuple_Pack(2, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$204,HEAP32[(((tempInt)+(4))>>2)]=$205,tempInt));
      $item=$206;
      var $207=$item;
      var $208=(($207)|(0))==0;
      if ($208) { label = 44; break; } else { label = 45; break; }
    case 44: 
      label = 135; break;
    case 45: 
      label = 46; break;
    case 46: 
      var $212=$key;
      var $213=(($212)|(0))!=0;
      if ($213) { label = 47; break; } else { label = 53; break; }
    case 47: 
      var $215=$key;
      $_py_tmp=$215;
      $key=0;
      label = 48; break;
    case 48: 
      var $217=$_py_tmp;
      var $218=(($217)|0);
      var $219=HEAP32[(($218)>>2)];
      var $220=((($219)-(1))|0);
      HEAP32[(($218)>>2)]=$220;
      var $221=(($220)|(0))!=0;
      if ($221) { label = 49; break; } else { label = 50; break; }
    case 49: 
      label = 51; break;
    case 50: 
      var $224=$_py_tmp;
      var $225=(($224+4)|0);
      var $226=HEAP32[(($225)>>2)];
      var $227=(($226+24)|0);
      var $228=HEAP32[(($227)>>2)];
      var $229=$_py_tmp;
      FUNCTION_TABLE[$228]($229);
      label = 51; break;
    case 51: 
      label = 52; break;
    case 52: 
      label = 53; break;
    case 53: 
      label = 54; break;
    case 54: 
      label = 55; break;
    case 55: 
      var $235=$val;
      var $236=(($235)|(0))!=0;
      if ($236) { label = 56; break; } else { label = 62; break; }
    case 56: 
      var $238=$val;
      $_py_tmp1=$238;
      $val=0;
      label = 57; break;
    case 57: 
      var $240=$_py_tmp1;
      var $241=(($240)|0);
      var $242=HEAP32[(($241)>>2)];
      var $243=((($242)-(1))|0);
      HEAP32[(($241)>>2)]=$243;
      var $244=(($243)|(0))!=0;
      if ($244) { label = 58; break; } else { label = 59; break; }
    case 58: 
      label = 60; break;
    case 59: 
      var $247=$_py_tmp1;
      var $248=(($247+4)|0);
      var $249=HEAP32[(($248)>>2)];
      var $250=(($249+24)|0);
      var $251=HEAP32[(($250)>>2)];
      var $252=$_py_tmp1;
      FUNCTION_TABLE[$251]($252);
      label = 60; break;
    case 60: 
      label = 61; break;
    case 61: 
      label = 62; break;
    case 62: 
      label = 63; break;
    case 63: 
      var $257=$pairs;
      var $258=$item;
      var $259=_PyList_Append($257, $258);
      var $260=(($259)|(0))==-1;
      if ($260) { label = 64; break; } else { label = 70; break; }
    case 64: 
      label = 65; break;
    case 65: 
      var $263=$item;
      var $264=(($263)|0);
      var $265=HEAP32[(($264)>>2)];
      var $266=((($265)-(1))|0);
      HEAP32[(($264)>>2)]=$266;
      var $267=(($266)|(0))!=0;
      if ($267) { label = 66; break; } else { label = 67; break; }
    case 66: 
      label = 68; break;
    case 67: 
      var $270=$item;
      var $271=(($270+4)|0);
      var $272=HEAP32[(($271)>>2)];
      var $273=(($272+24)|0);
      var $274=HEAP32[(($273)>>2)];
      var $275=$item;
      FUNCTION_TABLE[$274]($275);
      label = 68; break;
    case 68: 
      label = 69; break;
    case 69: 
      label = 135; break;
    case 70: 
      label = 71; break;
    case 71: 
      var $280=$item;
      var $281=(($280)|0);
      var $282=HEAP32[(($281)>>2)];
      var $283=((($282)-(1))|0);
      HEAP32[(($281)>>2)]=$283;
      var $284=(($283)|(0))!=0;
      if ($284) { label = 72; break; } else { label = 73; break; }
    case 72: 
      label = 74; break;
    case 73: 
      var $287=$item;
      var $288=(($287+4)|0);
      var $289=HEAP32[(($288)>>2)];
      var $290=(($289+24)|0);
      var $291=HEAP32[(($290)>>2)];
      var $292=$item;
      FUNCTION_TABLE[$291]($292);
      label = 74; break;
    case 74: 
      label = 75; break;
    case 75: 
      var $295=HEAP32[(($next_idx)>>2)];
      $4=$295;
      label = 76; break;
    case 76: 
      var $297=$4;
      var $298=$end_idx;
      var $299=(($297)|(0)) <= (($298)|(0));
      if ($299) { label = 77; break; } else { var $331 = 0;label = 82; break; }
    case 77: 
      var $301=$4;
      var $302=$str;
      var $303=(($302+($301<<1))|0);
      var $304=HEAP16[(($303)>>1)];
      var $305=(($304)&(65535));
      var $306=(($305)|(0))==32;
      if ($306) { var $329 = 1;label = 81; break; } else { label = 78; break; }
    case 78: 
      var $308=$4;
      var $309=$str;
      var $310=(($309+($308<<1))|0);
      var $311=HEAP16[(($310)>>1)];
      var $312=(($311)&(65535));
      var $313=(($312)|(0))==9;
      if ($313) { var $329 = 1;label = 81; break; } else { label = 79; break; }
    case 79: 
      var $315=$4;
      var $316=$str;
      var $317=(($316+($315<<1))|0);
      var $318=HEAP16[(($317)>>1)];
      var $319=(($318)&(65535));
      var $320=(($319)|(0))==10;
      if ($320) { var $329 = 1;label = 81; break; } else { label = 80; break; }
    case 80: 
      var $322=$4;
      var $323=$str;
      var $324=(($323+($322<<1))|0);
      var $325=HEAP16[(($324)>>1)];
      var $326=(($325)&(65535));
      var $327=(($326)|(0))==13;
      var $329 = $327;label = 81; break;
    case 81: 
      var $329;
      var $331 = $329;label = 82; break;
    case 82: 
      var $331;
      if ($331) { label = 83; break; } else { label = 84; break; }
    case 83: 
      var $333=$4;
      var $334=((($333)+(1))|0);
      $4=$334;
      label = 76; break;
    case 84: 
      var $336=$4;
      var $337=$end_idx;
      var $338=(($336)|(0)) > (($337)|(0));
      if ($338) { label = 85; break; } else { label = 86; break; }
    case 85: 
      label = 101; break;
    case 86: 
      var $341=$4;
      var $342=$str;
      var $343=(($342+($341<<1))|0);
      var $344=HEAP16[(($343)>>1)];
      var $345=(($344)&(65535));
      var $346=(($345)|(0))==125;
      if ($346) { label = 87; break; } else { label = 88; break; }
    case 87: 
      label = 101; break;
    case 88: 
      var $349=$4;
      var $350=$str;
      var $351=(($350+($349<<1))|0);
      var $352=HEAP16[(($351)>>1)];
      var $353=(($352)&(65535));
      var $354=(($353)|(0))!=44;
      if ($354) { label = 89; break; } else { label = 90; break; }
    case 89: 
      var $356=$3;
      var $357=$4;
      _raise_errmsg(((__str69)|0), $356, $357);
      label = 135; break;
    case 90: 
      label = 91; break;
    case 91: 
      var $360=$4;
      var $361=((($360)+(1))|0);
      $4=$361;
      label = 92; break;
    case 92: 
      var $363=$4;
      var $364=$end_idx;
      var $365=(($363)|(0)) <= (($364)|(0));
      if ($365) { label = 93; break; } else { var $397 = 0;label = 98; break; }
    case 93: 
      var $367=$4;
      var $368=$str;
      var $369=(($368+($367<<1))|0);
      var $370=HEAP16[(($369)>>1)];
      var $371=(($370)&(65535));
      var $372=(($371)|(0))==32;
      if ($372) { var $395 = 1;label = 97; break; } else { label = 94; break; }
    case 94: 
      var $374=$4;
      var $375=$str;
      var $376=(($375+($374<<1))|0);
      var $377=HEAP16[(($376)>>1)];
      var $378=(($377)&(65535));
      var $379=(($378)|(0))==9;
      if ($379) { var $395 = 1;label = 97; break; } else { label = 95; break; }
    case 95: 
      var $381=$4;
      var $382=$str;
      var $383=(($382+($381<<1))|0);
      var $384=HEAP16[(($383)>>1)];
      var $385=(($384)&(65535));
      var $386=(($385)|(0))==10;
      if ($386) { var $395 = 1;label = 97; break; } else { label = 96; break; }
    case 96: 
      var $388=$4;
      var $389=$str;
      var $390=(($389+($388<<1))|0);
      var $391=HEAP16[(($390)>>1)];
      var $392=(($391)&(65535));
      var $393=(($392)|(0))==13;
      var $395 = $393;label = 97; break;
    case 97: 
      var $395;
      var $397 = $395;label = 98; break;
    case 98: 
      var $397;
      if ($397) { label = 99; break; } else { label = 100; break; }
    case 99: 
      var $399=$4;
      var $400=((($399)+(1))|0);
      $4=$400;
      label = 92; break;
    case 100: 
      label = 15; break;
    case 101: 
      label = 102; break;
    case 102: 
      var $404=$4;
      var $405=$end_idx;
      var $406=(($404)|(0)) > (($405)|(0));
      if ($406) { label = 104; break; } else { label = 103; break; }
    case 103: 
      var $408=$4;
      var $409=$str;
      var $410=(($409+($408<<1))|0);
      var $411=HEAP16[(($410)>>1)];
      var $412=(($411)&(65535));
      var $413=(($412)|(0))!=125;
      if ($413) { label = 104; break; } else { label = 105; break; }
    case 104: 
      var $415=$3;
      var $416=$end_idx;
      _raise_errmsg(((__str70)|0), $415, $416);
      label = 135; break;
    case 105: 
      var $418=$2;
      var $419=(($418+20)|0);
      var $420=HEAP32[(($419)>>2)];
      var $421=(($420)|(0))!=((__Py_NoneStruct)|(0));
      if ($421) { label = 106; break; } else { label = 114; break; }
    case 106: 
      var $423=$2;
      var $424=(($423+20)|0);
      var $425=HEAP32[(($424)>>2)];
      var $426=$pairs;
      var $427=_PyObject_CallFunctionObjArgs($425, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$426,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $val=$427;
      var $428=$val;
      var $429=(($428)|(0))==0;
      if ($429) { label = 107; break; } else { label = 108; break; }
    case 107: 
      label = 135; break;
    case 108: 
      label = 109; break;
    case 109: 
      var $433=$pairs;
      var $434=(($433)|0);
      var $435=HEAP32[(($434)>>2)];
      var $436=((($435)-(1))|0);
      HEAP32[(($434)>>2)]=$436;
      var $437=(($436)|(0))!=0;
      if ($437) { label = 110; break; } else { label = 111; break; }
    case 110: 
      label = 112; break;
    case 111: 
      var $440=$pairs;
      var $441=(($440+4)|0);
      var $442=HEAP32[(($441)>>2)];
      var $443=(($442+24)|0);
      var $444=HEAP32[(($443)>>2)];
      var $445=$pairs;
      FUNCTION_TABLE[$444]($445);
      label = 112; break;
    case 112: 
      label = 113; break;
    case 113: 
      var $448=$4;
      var $449=((($448)+(1))|0);
      var $450=$5;
      HEAP32[(($450)>>2)]=$449;
      var $451=$val;
      $1=$451;
      label = 166; break;
    case 114: 
      var $453=$pairs;
      var $454=_PyObject_CallFunctionObjArgs(_PyDict_Type, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$453,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $rval=$454;
      var $455=$rval;
      var $456=(($455)|(0))==0;
      if ($456) { label = 115; break; } else { label = 116; break; }
    case 115: 
      label = 135; break;
    case 116: 
      label = 117; break;
    case 117: 
      var $460=$pairs;
      var $461=(($460)|(0))!=0;
      if ($461) { label = 118; break; } else { label = 124; break; }
    case 118: 
      var $463=$pairs;
      $_py_tmp2=$463;
      $pairs=0;
      label = 119; break;
    case 119: 
      var $465=$_py_tmp2;
      var $466=(($465)|0);
      var $467=HEAP32[(($466)>>2)];
      var $468=((($467)-(1))|0);
      HEAP32[(($466)>>2)]=$468;
      var $469=(($468)|(0))!=0;
      if ($469) { label = 120; break; } else { label = 121; break; }
    case 120: 
      label = 122; break;
    case 121: 
      var $472=$_py_tmp2;
      var $473=(($472+4)|0);
      var $474=HEAP32[(($473)>>2)];
      var $475=(($474+24)|0);
      var $476=HEAP32[(($475)>>2)];
      var $477=$_py_tmp2;
      FUNCTION_TABLE[$476]($477);
      label = 122; break;
    case 122: 
      label = 123; break;
    case 123: 
      label = 124; break;
    case 124: 
      label = 125; break;
    case 125: 
      var $482=$2;
      var $483=(($482+16)|0);
      var $484=HEAP32[(($483)>>2)];
      var $485=(($484)|(0))!=((__Py_NoneStruct)|(0));
      if ($485) { label = 126; break; } else { label = 134; break; }
    case 126: 
      var $487=$2;
      var $488=(($487+16)|0);
      var $489=HEAP32[(($488)>>2)];
      var $490=$rval;
      var $491=_PyObject_CallFunctionObjArgs($489, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$490,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $val=$491;
      var $492=$val;
      var $493=(($492)|(0))==0;
      if ($493) { label = 127; break; } else { label = 128; break; }
    case 127: 
      label = 135; break;
    case 128: 
      label = 129; break;
    case 129: 
      var $497=$rval;
      var $498=(($497)|0);
      var $499=HEAP32[(($498)>>2)];
      var $500=((($499)-(1))|0);
      HEAP32[(($498)>>2)]=$500;
      var $501=(($500)|(0))!=0;
      if ($501) { label = 130; break; } else { label = 131; break; }
    case 130: 
      label = 132; break;
    case 131: 
      var $504=$rval;
      var $505=(($504+4)|0);
      var $506=HEAP32[(($505)>>2)];
      var $507=(($506+24)|0);
      var $508=HEAP32[(($507)>>2)];
      var $509=$rval;
      FUNCTION_TABLE[$508]($509);
      label = 132; break;
    case 132: 
      label = 133; break;
    case 133: 
      var $512=$val;
      $rval=$512;
      $val=0;
      label = 134; break;
    case 134: 
      var $514=$4;
      var $515=((($514)+(1))|0);
      var $516=$5;
      HEAP32[(($516)>>2)]=$515;
      var $517=$rval;
      $1=$517;
      label = 166; break;
    case 135: 
      label = 136; break;
    case 136: 
      var $520=$key;
      var $521=(($520)|(0))==0;
      if ($521) { label = 137; break; } else { label = 138; break; }
    case 137: 
      label = 144; break;
    case 138: 
      label = 139; break;
    case 139: 
      var $525=$key;
      var $526=(($525)|0);
      var $527=HEAP32[(($526)>>2)];
      var $528=((($527)-(1))|0);
      HEAP32[(($526)>>2)]=$528;
      var $529=(($528)|(0))!=0;
      if ($529) { label = 140; break; } else { label = 141; break; }
    case 140: 
      label = 142; break;
    case 141: 
      var $532=$key;
      var $533=(($532+4)|0);
      var $534=HEAP32[(($533)>>2)];
      var $535=(($534+24)|0);
      var $536=HEAP32[(($535)>>2)];
      var $537=$key;
      FUNCTION_TABLE[$536]($537);
      label = 142; break;
    case 142: 
      label = 143; break;
    case 143: 
      label = 144; break;
    case 144: 
      label = 145; break;
    case 145: 
      label = 146; break;
    case 146: 
      var $543=$val;
      var $544=(($543)|(0))==0;
      if ($544) { label = 147; break; } else { label = 148; break; }
    case 147: 
      label = 154; break;
    case 148: 
      label = 149; break;
    case 149: 
      var $548=$val;
      var $549=(($548)|0);
      var $550=HEAP32[(($549)>>2)];
      var $551=((($550)-(1))|0);
      HEAP32[(($549)>>2)]=$551;
      var $552=(($551)|(0))!=0;
      if ($552) { label = 150; break; } else { label = 151; break; }
    case 150: 
      label = 152; break;
    case 151: 
      var $555=$val;
      var $556=(($555+4)|0);
      var $557=HEAP32[(($556)>>2)];
      var $558=(($557+24)|0);
      var $559=HEAP32[(($558)>>2)];
      var $560=$val;
      FUNCTION_TABLE[$559]($560);
      label = 152; break;
    case 152: 
      label = 153; break;
    case 153: 
      label = 154; break;
    case 154: 
      label = 155; break;
    case 155: 
      label = 156; break;
    case 156: 
      var $566=$pairs;
      var $567=(($566)|(0))==0;
      if ($567) { label = 157; break; } else { label = 158; break; }
    case 157: 
      label = 164; break;
    case 158: 
      label = 159; break;
    case 159: 
      var $571=$pairs;
      var $572=(($571)|0);
      var $573=HEAP32[(($572)>>2)];
      var $574=((($573)-(1))|0);
      HEAP32[(($572)>>2)]=$574;
      var $575=(($574)|(0))!=0;
      if ($575) { label = 160; break; } else { label = 161; break; }
    case 160: 
      label = 162; break;
    case 161: 
      var $578=$pairs;
      var $579=(($578+4)|0);
      var $580=HEAP32[(($579)>>2)];
      var $581=(($580+24)|0);
      var $582=HEAP32[(($581)>>2)];
      var $583=$pairs;
      FUNCTION_TABLE[$582]($583);
      label = 162; break;
    case 162: 
      label = 163; break;
    case 163: 
      label = 164; break;
    case 164: 
      label = 165; break;
    case 165: 
      $1=0;
      label = 166; break;
    case 166: 
      var $589=$1;
      STACKTOP = __stackBase__;
      return $589;
    default: assert(0, "bad label: " + label);
  }
}
function __parse_array_unicode($s, $pystr, $idx, $next_idx_ptr) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $str;
      var $end_idx;
      var $val;
      var $rval;
      var $next_idx=__stackBase__;
      var $_py_tmp;
      $2=$s;
      $3=$pystr;
      $4=$idx;
      $5=$next_idx_ptr;
      var $6=$3;
      var $7=$6;
      var $8=(($7+12)|0);
      var $9=HEAP32[(($8)>>2)];
      $str=$9;
      var $10=$3;
      var $11=$10;
      var $12=(($11+8)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=((($13)-(1))|0);
      $end_idx=$14;
      $val=0;
      var $15=_PyList_New(0);
      $rval=$15;
      var $16=$rval;
      var $17=(($16)|(0))==0;
      if ($17) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 76; break;
    case 3: 
      label = 4; break;
    case 4: 
      var $21=$4;
      var $22=$end_idx;
      var $23=(($21)|(0)) <= (($22)|(0));
      if ($23) { label = 5; break; } else { var $55 = 0;label = 10; break; }
    case 5: 
      var $25=$4;
      var $26=$str;
      var $27=(($26+($25<<1))|0);
      var $28=HEAP16[(($27)>>1)];
      var $29=(($28)&(65535));
      var $30=(($29)|(0))==32;
      if ($30) { var $53 = 1;label = 9; break; } else { label = 6; break; }
    case 6: 
      var $32=$4;
      var $33=$str;
      var $34=(($33+($32<<1))|0);
      var $35=HEAP16[(($34)>>1)];
      var $36=(($35)&(65535));
      var $37=(($36)|(0))==9;
      if ($37) { var $53 = 1;label = 9; break; } else { label = 7; break; }
    case 7: 
      var $39=$4;
      var $40=$str;
      var $41=(($40+($39<<1))|0);
      var $42=HEAP16[(($41)>>1)];
      var $43=(($42)&(65535));
      var $44=(($43)|(0))==10;
      if ($44) { var $53 = 1;label = 9; break; } else { label = 8; break; }
    case 8: 
      var $46=$4;
      var $47=$str;
      var $48=(($47+($46<<1))|0);
      var $49=HEAP16[(($48)>>1)];
      var $50=(($49)&(65535));
      var $51=(($50)|(0))==13;
      var $53 = $51;label = 9; break;
    case 9: 
      var $53;
      var $55 = $53;label = 10; break;
    case 10: 
      var $55;
      if ($55) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $57=$4;
      var $58=((($57)+(1))|0);
      $4=$58;
      label = 4; break;
    case 12: 
      var $60=$4;
      var $61=$end_idx;
      var $62=(($60)|(0)) <= (($61)|(0));
      if ($62) { label = 13; break; } else { label = 56; break; }
    case 13: 
      var $64=$4;
      var $65=$str;
      var $66=(($65+($64<<1))|0);
      var $67=HEAP16[(($66)>>1)];
      var $68=(($67)&(65535));
      var $69=(($68)|(0))!=93;
      if ($69) { label = 14; break; } else { label = 56; break; }
    case 14: 
      label = 15; break;
    case 15: 
      var $72=$4;
      var $73=$end_idx;
      var $74=(($72)|(0)) <= (($73)|(0));
      if ($74) { label = 16; break; } else { label = 55; break; }
    case 16: 
      var $76=$2;
      var $77=$3;
      var $78=$4;
      var $79=_scan_once_unicode($76, $77, $78, $next_idx);
      $val=$79;
      var $80=$val;
      var $81=(($80)|(0))==0;
      if ($81) { label = 17; break; } else { label = 18; break; }
    case 17: 
      label = 60; break;
    case 18: 
      var $84=$rval;
      var $85=$val;
      var $86=_PyList_Append($84, $85);
      var $87=(($86)|(0))==-1;
      if ($87) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 60; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $91=$val;
      var $92=(($91)|(0))!=0;
      if ($92) { label = 22; break; } else { label = 28; break; }
    case 22: 
      var $94=$val;
      $_py_tmp=$94;
      $val=0;
      label = 23; break;
    case 23: 
      var $96=$_py_tmp;
      var $97=(($96)|0);
      var $98=HEAP32[(($97)>>2)];
      var $99=((($98)-(1))|0);
      HEAP32[(($97)>>2)]=$99;
      var $100=(($99)|(0))!=0;
      if ($100) { label = 24; break; } else { label = 25; break; }
    case 24: 
      label = 26; break;
    case 25: 
      var $103=$_py_tmp;
      var $104=(($103+4)|0);
      var $105=HEAP32[(($104)>>2)];
      var $106=(($105+24)|0);
      var $107=HEAP32[(($106)>>2)];
      var $108=$_py_tmp;
      FUNCTION_TABLE[$107]($108);
      label = 26; break;
    case 26: 
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      var $113=HEAP32[(($next_idx)>>2)];
      $4=$113;
      label = 30; break;
    case 30: 
      var $115=$4;
      var $116=$end_idx;
      var $117=(($115)|(0)) <= (($116)|(0));
      if ($117) { label = 31; break; } else { var $149 = 0;label = 36; break; }
    case 31: 
      var $119=$4;
      var $120=$str;
      var $121=(($120+($119<<1))|0);
      var $122=HEAP16[(($121)>>1)];
      var $123=(($122)&(65535));
      var $124=(($123)|(0))==32;
      if ($124) { var $147 = 1;label = 35; break; } else { label = 32; break; }
    case 32: 
      var $126=$4;
      var $127=$str;
      var $128=(($127+($126<<1))|0);
      var $129=HEAP16[(($128)>>1)];
      var $130=(($129)&(65535));
      var $131=(($130)|(0))==9;
      if ($131) { var $147 = 1;label = 35; break; } else { label = 33; break; }
    case 33: 
      var $133=$4;
      var $134=$str;
      var $135=(($134+($133<<1))|0);
      var $136=HEAP16[(($135)>>1)];
      var $137=(($136)&(65535));
      var $138=(($137)|(0))==10;
      if ($138) { var $147 = 1;label = 35; break; } else { label = 34; break; }
    case 34: 
      var $140=$4;
      var $141=$str;
      var $142=(($141+($140<<1))|0);
      var $143=HEAP16[(($142)>>1)];
      var $144=(($143)&(65535));
      var $145=(($144)|(0))==13;
      var $147 = $145;label = 35; break;
    case 35: 
      var $147;
      var $149 = $147;label = 36; break;
    case 36: 
      var $149;
      if ($149) { label = 37; break; } else { label = 38; break; }
    case 37: 
      var $151=$4;
      var $152=((($151)+(1))|0);
      $4=$152;
      label = 30; break;
    case 38: 
      var $154=$4;
      var $155=$end_idx;
      var $156=(($154)|(0)) > (($155)|(0));
      if ($156) { label = 39; break; } else { label = 40; break; }
    case 39: 
      label = 55; break;
    case 40: 
      var $159=$4;
      var $160=$str;
      var $161=(($160+($159<<1))|0);
      var $162=HEAP16[(($161)>>1)];
      var $163=(($162)&(65535));
      var $164=(($163)|(0))==93;
      if ($164) { label = 41; break; } else { label = 42; break; }
    case 41: 
      label = 55; break;
    case 42: 
      var $167=$4;
      var $168=$str;
      var $169=(($168+($167<<1))|0);
      var $170=HEAP16[(($169)>>1)];
      var $171=(($170)&(65535));
      var $172=(($171)|(0))!=44;
      if ($172) { label = 43; break; } else { label = 44; break; }
    case 43: 
      var $174=$3;
      var $175=$4;
      _raise_errmsg(((__str69)|0), $174, $175);
      label = 60; break;
    case 44: 
      label = 45; break;
    case 45: 
      var $178=$4;
      var $179=((($178)+(1))|0);
      $4=$179;
      label = 46; break;
    case 46: 
      var $181=$4;
      var $182=$end_idx;
      var $183=(($181)|(0)) <= (($182)|(0));
      if ($183) { label = 47; break; } else { var $215 = 0;label = 52; break; }
    case 47: 
      var $185=$4;
      var $186=$str;
      var $187=(($186+($185<<1))|0);
      var $188=HEAP16[(($187)>>1)];
      var $189=(($188)&(65535));
      var $190=(($189)|(0))==32;
      if ($190) { var $213 = 1;label = 51; break; } else { label = 48; break; }
    case 48: 
      var $192=$4;
      var $193=$str;
      var $194=(($193+($192<<1))|0);
      var $195=HEAP16[(($194)>>1)];
      var $196=(($195)&(65535));
      var $197=(($196)|(0))==9;
      if ($197) { var $213 = 1;label = 51; break; } else { label = 49; break; }
    case 49: 
      var $199=$4;
      var $200=$str;
      var $201=(($200+($199<<1))|0);
      var $202=HEAP16[(($201)>>1)];
      var $203=(($202)&(65535));
      var $204=(($203)|(0))==10;
      if ($204) { var $213 = 1;label = 51; break; } else { label = 50; break; }
    case 50: 
      var $206=$4;
      var $207=$str;
      var $208=(($207+($206<<1))|0);
      var $209=HEAP16[(($208)>>1)];
      var $210=(($209)&(65535));
      var $211=(($210)|(0))==13;
      var $213 = $211;label = 51; break;
    case 51: 
      var $213;
      var $215 = $213;label = 52; break;
    case 52: 
      var $215;
      if ($215) { label = 53; break; } else { label = 54; break; }
    case 53: 
      var $217=$4;
      var $218=((($217)+(1))|0);
      $4=$218;
      label = 46; break;
    case 54: 
      label = 15; break;
    case 55: 
      label = 56; break;
    case 56: 
      var $222=$4;
      var $223=$end_idx;
      var $224=(($222)|(0)) > (($223)|(0));
      if ($224) { label = 58; break; } else { label = 57; break; }
    case 57: 
      var $226=$4;
      var $227=$str;
      var $228=(($227+($226<<1))|0);
      var $229=HEAP16[(($228)>>1)];
      var $230=(($229)&(65535));
      var $231=(($230)|(0))!=93;
      if ($231) { label = 58; break; } else { label = 59; break; }
    case 58: 
      var $233=$3;
      var $234=$end_idx;
      _raise_errmsg(((__str70)|0), $233, $234);
      label = 60; break;
    case 59: 
      var $236=$4;
      var $237=((($236)+(1))|0);
      var $238=$5;
      HEAP32[(($238)>>2)]=$237;
      var $239=$rval;
      $1=$239;
      label = 76; break;
    case 60: 
      label = 61; break;
    case 61: 
      var $242=$val;
      var $243=(($242)|(0))==0;
      if ($243) { label = 62; break; } else { label = 63; break; }
    case 62: 
      label = 69; break;
    case 63: 
      label = 64; break;
    case 64: 
      var $247=$val;
      var $248=(($247)|0);
      var $249=HEAP32[(($248)>>2)];
      var $250=((($249)-(1))|0);
      HEAP32[(($248)>>2)]=$250;
      var $251=(($250)|(0))!=0;
      if ($251) { label = 65; break; } else { label = 66; break; }
    case 65: 
      label = 67; break;
    case 66: 
      var $254=$val;
      var $255=(($254+4)|0);
      var $256=HEAP32[(($255)>>2)];
      var $257=(($256+24)|0);
      var $258=HEAP32[(($257)>>2)];
      var $259=$val;
      FUNCTION_TABLE[$258]($259);
      label = 67; break;
    case 67: 
      label = 68; break;
    case 68: 
      label = 69; break;
    case 69: 
      label = 70; break;
    case 70: 
      label = 71; break;
    case 71: 
      var $265=$rval;
      var $266=(($265)|0);
      var $267=HEAP32[(($266)>>2)];
      var $268=((($267)-(1))|0);
      HEAP32[(($266)>>2)]=$268;
      var $269=(($268)|(0))!=0;
      if ($269) { label = 72; break; } else { label = 73; break; }
    case 72: 
      label = 74; break;
    case 73: 
      var $272=$rval;
      var $273=(($272+4)|0);
      var $274=HEAP32[(($273)>>2)];
      var $275=(($274+24)|0);
      var $276=HEAP32[(($275)>>2)];
      var $277=$rval;
      FUNCTION_TABLE[$276]($277);
      label = 74; break;
    case 74: 
      label = 75; break;
    case 75: 
      $1=0;
      label = 76; break;
    case 76: 
      var $281=$1;
      STACKTOP = __stackBase__;
      return $281;
    default: assert(0, "bad label: " + label);
  }
}
function __parse_constant($s, $constant, $idx, $next_idx_ptr) {
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
      var $cstr;
      var $rval;
      $2=$s;
      $3=$constant;
      $4=$idx;
      $5=$next_idx_ptr;
      var $6=$3;
      var $7=_PyString_InternFromString($6);
      $cstr=$7;
      var $8=$cstr;
      var $9=(($8)|(0))==0;
      if ($9) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 9; break;
    case 3: 
      var $12=$2;
      var $13=(($12+32)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=$cstr;
      var $16=_PyObject_CallFunctionObjArgs($14, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$15,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $rval=$16;
      var $17=$cstr;
      var $18=$17;
      var $19=(($18+8)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=$4;
      var $22=((($21)+($20))|0);
      $4=$22;
      label = 4; break;
    case 4: 
      var $24=$cstr;
      var $25=(($24)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=((($26)-(1))|0);
      HEAP32[(($25)>>2)]=$27;
      var $28=(($27)|(0))!=0;
      if ($28) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 7; break;
    case 6: 
      var $31=$cstr;
      var $32=(($31+4)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=(($33+24)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=$cstr;
      FUNCTION_TABLE[$35]($36);
      label = 7; break;
    case 7: 
      label = 8; break;
    case 8: 
      var $39=$4;
      var $40=$5;
      HEAP32[(($40)>>2)]=$39;
      var $41=$rval;
      $1=$41;
      label = 9; break;
    case 9: 
      var $43=$1;
      STACKTOP = __stackBase__;
      return $43;
    default: assert(0, "bad label: " + label);
  }
}
function __match_number_unicode($s, $pystr, $start, $next_idx_ptr) {
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
      var $str;
      var $end_idx;
      var $idx;
      var $is_float;
      var $rval;
      var $numstr;
      var $e_start;
      $2=$s;
      $3=$pystr;
      $4=$start;
      $5=$next_idx_ptr;
      var $6=$3;
      var $7=$6;
      var $8=(($7+12)|0);
      var $9=HEAP32[(($8)>>2)];
      $str=$9;
      var $10=$3;
      var $11=$10;
      var $12=(($11+8)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=((($13)-(1))|0);
      $end_idx=$14;
      var $15=$4;
      $idx=$15;
      $is_float=0;
      var $16=$idx;
      var $17=$str;
      var $18=(($17+($16<<1))|0);
      var $19=HEAP16[(($18)>>1)];
      var $20=(($19)&(65535));
      var $21=(($20)|(0))==45;
      if ($21) { label = 2; break; } else { label = 5; break; }
    case 2: 
      var $23=$idx;
      var $24=((($23)+(1))|0);
      $idx=$24;
      var $25=$idx;
      var $26=$end_idx;
      var $27=(($25)|(0)) > (($26)|(0));
      if ($27) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $29=HEAP32[((_PyExc_StopIteration)>>2)];
      _PyErr_SetNone($29);
      $1=0;
      label = 61; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $32=$idx;
      var $33=$str;
      var $34=(($33+($32<<1))|0);
      var $35=HEAP16[(($34)>>1)];
      var $36=(($35)&(65535));
      var $37=(($36)|(0)) >= 49;
      if ($37) { label = 6; break; } else { label = 14; break; }
    case 6: 
      var $39=$idx;
      var $40=$str;
      var $41=(($40+($39<<1))|0);
      var $42=HEAP16[(($41)>>1)];
      var $43=(($42)&(65535));
      var $44=(($43)|(0)) <= 57;
      if ($44) { label = 7; break; } else { label = 14; break; }
    case 7: 
      var $46=$idx;
      var $47=((($46)+(1))|0);
      $idx=$47;
      label = 8; break;
    case 8: 
      var $49=$idx;
      var $50=$end_idx;
      var $51=(($49)|(0)) <= (($50)|(0));
      if ($51) { label = 9; break; } else { var $67 = 0;label = 11; break; }
    case 9: 
      var $53=$idx;
      var $54=$str;
      var $55=(($54+($53<<1))|0);
      var $56=HEAP16[(($55)>>1)];
      var $57=(($56)&(65535));
      var $58=(($57)|(0)) >= 48;
      if ($58) { label = 10; break; } else { var $67 = 0;label = 11; break; }
    case 10: 
      var $60=$idx;
      var $61=$str;
      var $62=(($61+($60<<1))|0);
      var $63=HEAP16[(($62)>>1)];
      var $64=(($63)&(65535));
      var $65=(($64)|(0)) <= 57;
      var $67 = $65;label = 11; break;
    case 11: 
      var $67;
      if ($67) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $69=$idx;
      var $70=((($69)+(1))|0);
      $idx=$70;
      label = 8; break;
    case 13: 
      label = 18; break;
    case 14: 
      var $73=$idx;
      var $74=$str;
      var $75=(($74+($73<<1))|0);
      var $76=HEAP16[(($75)>>1)];
      var $77=(($76)&(65535));
      var $78=(($77)|(0))==48;
      if ($78) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $80=$idx;
      var $81=((($80)+(1))|0);
      $idx=$81;
      label = 17; break;
    case 16: 
      var $83=HEAP32[((_PyExc_StopIteration)>>2)];
      _PyErr_SetNone($83);
      $1=0;
      label = 61; break;
    case 17: 
      label = 18; break;
    case 18: 
      var $86=$idx;
      var $87=$end_idx;
      var $88=(($86)|(0)) < (($87)|(0));
      if ($88) { label = 19; break; } else { label = 29; break; }
    case 19: 
      var $90=$idx;
      var $91=$str;
      var $92=(($91+($90<<1))|0);
      var $93=HEAP16[(($92)>>1)];
      var $94=(($93)&(65535));
      var $95=(($94)|(0))==46;
      if ($95) { label = 20; break; } else { label = 29; break; }
    case 20: 
      var $97=$idx;
      var $98=((($97)+(1))|0);
      var $99=$str;
      var $100=(($99+($98<<1))|0);
      var $101=HEAP16[(($100)>>1)];
      var $102=(($101)&(65535));
      var $103=(($102)|(0)) >= 48;
      if ($103) { label = 21; break; } else { label = 29; break; }
    case 21: 
      var $105=$idx;
      var $106=((($105)+(1))|0);
      var $107=$str;
      var $108=(($107+($106<<1))|0);
      var $109=HEAP16[(($108)>>1)];
      var $110=(($109)&(65535));
      var $111=(($110)|(0)) <= 57;
      if ($111) { label = 22; break; } else { label = 29; break; }
    case 22: 
      $is_float=1;
      var $113=$idx;
      var $114=((($113)+(2))|0);
      $idx=$114;
      label = 23; break;
    case 23: 
      var $116=$idx;
      var $117=$end_idx;
      var $118=(($116)|(0)) <= (($117)|(0));
      if ($118) { label = 24; break; } else { var $134 = 0;label = 26; break; }
    case 24: 
      var $120=$idx;
      var $121=$str;
      var $122=(($121+($120<<1))|0);
      var $123=HEAP16[(($122)>>1)];
      var $124=(($123)&(65535));
      var $125=(($124)|(0)) >= 48;
      if ($125) { label = 25; break; } else { var $134 = 0;label = 26; break; }
    case 25: 
      var $127=$idx;
      var $128=$str;
      var $129=(($128+($127<<1))|0);
      var $130=HEAP16[(($129)>>1)];
      var $131=(($130)&(65535));
      var $132=(($131)|(0)) <= 57;
      var $134 = $132;label = 26; break;
    case 26: 
      var $134;
      if ($134) { label = 27; break; } else { label = 28; break; }
    case 27: 
      var $136=$idx;
      var $137=((($136)+(1))|0);
      $idx=$137;
      label = 23; break;
    case 28: 
      label = 29; break;
    case 29: 
      var $140=$idx;
      var $141=$end_idx;
      var $142=(($140)|(0)) < (($141)|(0));
      if ($142) { label = 30; break; } else { label = 47; break; }
    case 30: 
      var $144=$idx;
      var $145=$str;
      var $146=(($145+($144<<1))|0);
      var $147=HEAP16[(($146)>>1)];
      var $148=(($147)&(65535));
      var $149=(($148)|(0))==101;
      if ($149) { label = 32; break; } else { label = 31; break; }
    case 31: 
      var $151=$idx;
      var $152=$str;
      var $153=(($152+($151<<1))|0);
      var $154=HEAP16[(($153)>>1)];
      var $155=(($154)&(65535));
      var $156=(($155)|(0))==69;
      if ($156) { label = 32; break; } else { label = 47; break; }
    case 32: 
      var $158=$idx;
      $e_start=$158;
      var $159=$idx;
      var $160=((($159)+(1))|0);
      $idx=$160;
      var $161=$idx;
      var $162=$end_idx;
      var $163=(($161)|(0)) < (($162)|(0));
      if ($163) { label = 33; break; } else { label = 36; break; }
    case 33: 
      var $165=$idx;
      var $166=$str;
      var $167=(($166+($165<<1))|0);
      var $168=HEAP16[(($167)>>1)];
      var $169=(($168)&(65535));
      var $170=(($169)|(0))==45;
      if ($170) { label = 35; break; } else { label = 34; break; }
    case 34: 
      var $172=$idx;
      var $173=$str;
      var $174=(($173+($172<<1))|0);
      var $175=HEAP16[(($174)>>1)];
      var $176=(($175)&(65535));
      var $177=(($176)|(0))==43;
      if ($177) { label = 35; break; } else { label = 36; break; }
    case 35: 
      var $179=$idx;
      var $180=((($179)+(1))|0);
      $idx=$180;
      label = 36; break;
    case 36: 
      label = 37; break;
    case 37: 
      var $183=$idx;
      var $184=$end_idx;
      var $185=(($183)|(0)) <= (($184)|(0));
      if ($185) { label = 38; break; } else { var $201 = 0;label = 40; break; }
    case 38: 
      var $187=$idx;
      var $188=$str;
      var $189=(($188+($187<<1))|0);
      var $190=HEAP16[(($189)>>1)];
      var $191=(($190)&(65535));
      var $192=(($191)|(0)) >= 48;
      if ($192) { label = 39; break; } else { var $201 = 0;label = 40; break; }
    case 39: 
      var $194=$idx;
      var $195=$str;
      var $196=(($195+($194<<1))|0);
      var $197=HEAP16[(($196)>>1)];
      var $198=(($197)&(65535));
      var $199=(($198)|(0)) <= 57;
      var $201 = $199;label = 40; break;
    case 40: 
      var $201;
      if ($201) { label = 41; break; } else { label = 42; break; }
    case 41: 
      var $203=$idx;
      var $204=((($203)+(1))|0);
      $idx=$204;
      label = 37; break;
    case 42: 
      var $206=$idx;
      var $207=((($206)-(1))|0);
      var $208=$str;
      var $209=(($208+($207<<1))|0);
      var $210=HEAP16[(($209)>>1)];
      var $211=(($210)&(65535));
      var $212=(($211)|(0)) >= 48;
      if ($212) { label = 43; break; } else { label = 45; break; }
    case 43: 
      var $214=$idx;
      var $215=((($214)-(1))|0);
      var $216=$str;
      var $217=(($216+($215<<1))|0);
      var $218=HEAP16[(($217)>>1)];
      var $219=(($218)&(65535));
      var $220=(($219)|(0)) <= 57;
      if ($220) { label = 44; break; } else { label = 45; break; }
    case 44: 
      $is_float=1;
      label = 46; break;
    case 45: 
      var $223=$e_start;
      $idx=$223;
      label = 46; break;
    case 46: 
      label = 47; break;
    case 47: 
      var $226=$4;
      var $227=$str;
      var $228=(($227+($226<<1))|0);
      var $229=$idx;
      var $230=$4;
      var $231=((($229)-($230))|0);
      var $232=_PyUnicodeUCS2_FromUnicode($228, $231);
      $numstr=$232;
      var $233=$numstr;
      var $234=(($233)|(0))==0;
      if ($234) { label = 48; break; } else { label = 49; break; }
    case 48: 
      $1=0;
      label = 61; break;
    case 49: 
      var $237=$is_float;
      var $238=(($237)|(0))!=0;
      if ($238) { label = 50; break; } else { label = 54; break; }
    case 50: 
      var $240=$2;
      var $241=(($240+24)|0);
      var $242=HEAP32[(($241)>>2)];
      var $243=(($242)|(0))!=((_PyFloat_Type)|(0));
      if ($243) { label = 51; break; } else { label = 52; break; }
    case 51: 
      var $245=$2;
      var $246=(($245+24)|0);
      var $247=HEAP32[(($246)>>2)];
      var $248=$numstr;
      var $249=_PyObject_CallFunctionObjArgs($247, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$248,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $rval=$249;
      label = 53; break;
    case 52: 
      var $251=$numstr;
      var $252=_PyFloat_FromString($251, 0);
      $rval=$252;
      label = 53; break;
    case 53: 
      label = 55; break;
    case 54: 
      var $255=$2;
      var $256=(($255+28)|0);
      var $257=HEAP32[(($256)>>2)];
      var $258=$numstr;
      var $259=_PyObject_CallFunctionObjArgs($257, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$258,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $rval=$259;
      label = 55; break;
    case 55: 
      label = 56; break;
    case 56: 
      var $262=$numstr;
      var $263=(($262)|0);
      var $264=HEAP32[(($263)>>2)];
      var $265=((($264)-(1))|0);
      HEAP32[(($263)>>2)]=$265;
      var $266=(($265)|(0))!=0;
      if ($266) { label = 57; break; } else { label = 58; break; }
    case 57: 
      label = 59; break;
    case 58: 
      var $269=$numstr;
      var $270=(($269+4)|0);
      var $271=HEAP32[(($270)>>2)];
      var $272=(($271+24)|0);
      var $273=HEAP32[(($272)>>2)];
      var $274=$numstr;
      FUNCTION_TABLE[$273]($274);
      label = 59; break;
    case 59: 
      label = 60; break;
    case 60: 
      var $277=$idx;
      var $278=$5;
      HEAP32[(($278)>>2)]=$277;
      var $279=$rval;
      $1=$279;
      label = 61; break;
    case 61: 
      var $281=$1;
      STACKTOP = __stackBase__;
      return $281;
    default: assert(0, "bad label: " + label);
  }
}
function __parse_object_str($s, $pystr, $idx, $next_idx_ptr) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $str;
      var $end_idx;
      var $rval;
      var $pairs;
      var $item;
      var $key;
      var $val;
      var $encoding;
      var $strict;
      var $next_idx=__stackBase__;
      var $_py_tmp;
      var $_py_tmp1;
      var $_py_tmp2;
      $2=$s;
      $3=$pystr;
      $4=$idx;
      $5=$next_idx_ptr;
      var $6=$3;
      var $7=$6;
      var $8=(($7+20)|0);
      var $9=(($8)|0);
      $str=$9;
      var $10=$3;
      var $11=$10;
      var $12=(($11+8)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=((($13)-(1))|0);
      $end_idx=$14;
      $key=0;
      $val=0;
      var $15=$2;
      var $16=(($15+8)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=$17;
      var $19=(($18+20)|0);
      var $20=(($19)|0);
      $encoding=$20;
      var $21=$2;
      var $22=(($21+12)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=_PyObject_IsTrue($23);
      $strict=$24;
      var $25=_PyList_New(0);
      $pairs=$25;
      var $26=$pairs;
      var $27=(($26)|(0))==0;
      if ($27) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 166; break;
    case 3: 
      label = 4; break;
    case 4: 
      var $31=$4;
      var $32=$end_idx;
      var $33=(($31)|(0)) <= (($32)|(0));
      if ($33) { label = 5; break; } else { var $65 = 0;label = 10; break; }
    case 5: 
      var $35=$4;
      var $36=$str;
      var $37=(($36+$35)|0);
      var $38=HEAP8[($37)];
      var $39=(($38 << 24) >> 24);
      var $40=(($39)|(0))==32;
      if ($40) { var $63 = 1;label = 9; break; } else { label = 6; break; }
    case 6: 
      var $42=$4;
      var $43=$str;
      var $44=(($43+$42)|0);
      var $45=HEAP8[($44)];
      var $46=(($45 << 24) >> 24);
      var $47=(($46)|(0))==9;
      if ($47) { var $63 = 1;label = 9; break; } else { label = 7; break; }
    case 7: 
      var $49=$4;
      var $50=$str;
      var $51=(($50+$49)|0);
      var $52=HEAP8[($51)];
      var $53=(($52 << 24) >> 24);
      var $54=(($53)|(0))==10;
      if ($54) { var $63 = 1;label = 9; break; } else { label = 8; break; }
    case 8: 
      var $56=$4;
      var $57=$str;
      var $58=(($57+$56)|0);
      var $59=HEAP8[($58)];
      var $60=(($59 << 24) >> 24);
      var $61=(($60)|(0))==13;
      var $63 = $61;label = 9; break;
    case 9: 
      var $63;
      var $65 = $63;label = 10; break;
    case 10: 
      var $65;
      if ($65) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $67=$4;
      var $68=((($67)+(1))|0);
      $4=$68;
      label = 4; break;
    case 12: 
      var $70=$4;
      var $71=$end_idx;
      var $72=(($70)|(0)) <= (($71)|(0));
      if ($72) { label = 13; break; } else { label = 102; break; }
    case 13: 
      var $74=$4;
      var $75=$str;
      var $76=(($75+$74)|0);
      var $77=HEAP8[($76)];
      var $78=(($77 << 24) >> 24);
      var $79=(($78)|(0))!=125;
      if ($79) { label = 14; break; } else { label = 102; break; }
    case 14: 
      label = 15; break;
    case 15: 
      var $82=$4;
      var $83=$end_idx;
      var $84=(($82)|(0)) <= (($83)|(0));
      if ($84) { label = 16; break; } else { label = 101; break; }
    case 16: 
      var $86=$4;
      var $87=$str;
      var $88=(($87+$86)|0);
      var $89=HEAP8[($88)];
      var $90=(($89 << 24) >> 24);
      var $91=(($90)|(0))!=34;
      if ($91) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $93=$3;
      var $94=$4;
      _raise_errmsg(((__str76)|0), $93, $94);
      label = 135; break;
    case 18: 
      var $96=$3;
      var $97=$4;
      var $98=((($97)+(1))|0);
      var $99=$encoding;
      var $100=$strict;
      var $101=_scanstring_str($96, $98, $99, $100, $next_idx);
      $key=$101;
      var $102=$key;
      var $103=(($102)|(0))==0;
      if ($103) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 135; break;
    case 20: 
      var $106=HEAP32[(($next_idx)>>2)];
      $4=$106;
      label = 21; break;
    case 21: 
      var $108=$4;
      var $109=$end_idx;
      var $110=(($108)|(0)) <= (($109)|(0));
      if ($110) { label = 22; break; } else { var $142 = 0;label = 27; break; }
    case 22: 
      var $112=$4;
      var $113=$str;
      var $114=(($113+$112)|0);
      var $115=HEAP8[($114)];
      var $116=(($115 << 24) >> 24);
      var $117=(($116)|(0))==32;
      if ($117) { var $140 = 1;label = 26; break; } else { label = 23; break; }
    case 23: 
      var $119=$4;
      var $120=$str;
      var $121=(($120+$119)|0);
      var $122=HEAP8[($121)];
      var $123=(($122 << 24) >> 24);
      var $124=(($123)|(0))==9;
      if ($124) { var $140 = 1;label = 26; break; } else { label = 24; break; }
    case 24: 
      var $126=$4;
      var $127=$str;
      var $128=(($127+$126)|0);
      var $129=HEAP8[($128)];
      var $130=(($129 << 24) >> 24);
      var $131=(($130)|(0))==10;
      if ($131) { var $140 = 1;label = 26; break; } else { label = 25; break; }
    case 25: 
      var $133=$4;
      var $134=$str;
      var $135=(($134+$133)|0);
      var $136=HEAP8[($135)];
      var $137=(($136 << 24) >> 24);
      var $138=(($137)|(0))==13;
      var $140 = $138;label = 26; break;
    case 26: 
      var $140;
      var $142 = $140;label = 27; break;
    case 27: 
      var $142;
      if ($142) { label = 28; break; } else { label = 29; break; }
    case 28: 
      var $144=$4;
      var $145=((($144)+(1))|0);
      $4=$145;
      label = 21; break;
    case 29: 
      var $147=$4;
      var $148=$end_idx;
      var $149=(($147)|(0)) > (($148)|(0));
      if ($149) { label = 31; break; } else { label = 30; break; }
    case 30: 
      var $151=$4;
      var $152=$str;
      var $153=(($152+$151)|0);
      var $154=HEAP8[($153)];
      var $155=(($154 << 24) >> 24);
      var $156=(($155)|(0))!=58;
      if ($156) { label = 31; break; } else { label = 32; break; }
    case 31: 
      var $158=$3;
      var $159=$4;
      _raise_errmsg(((__str77)|0), $158, $159);
      label = 135; break;
    case 32: 
      var $161=$4;
      var $162=((($161)+(1))|0);
      $4=$162;
      label = 33; break;
    case 33: 
      var $164=$4;
      var $165=$end_idx;
      var $166=(($164)|(0)) <= (($165)|(0));
      if ($166) { label = 34; break; } else { var $198 = 0;label = 39; break; }
    case 34: 
      var $168=$4;
      var $169=$str;
      var $170=(($169+$168)|0);
      var $171=HEAP8[($170)];
      var $172=(($171 << 24) >> 24);
      var $173=(($172)|(0))==32;
      if ($173) { var $196 = 1;label = 38; break; } else { label = 35; break; }
    case 35: 
      var $175=$4;
      var $176=$str;
      var $177=(($176+$175)|0);
      var $178=HEAP8[($177)];
      var $179=(($178 << 24) >> 24);
      var $180=(($179)|(0))==9;
      if ($180) { var $196 = 1;label = 38; break; } else { label = 36; break; }
    case 36: 
      var $182=$4;
      var $183=$str;
      var $184=(($183+$182)|0);
      var $185=HEAP8[($184)];
      var $186=(($185 << 24) >> 24);
      var $187=(($186)|(0))==10;
      if ($187) { var $196 = 1;label = 38; break; } else { label = 37; break; }
    case 37: 
      var $189=$4;
      var $190=$str;
      var $191=(($190+$189)|0);
      var $192=HEAP8[($191)];
      var $193=(($192 << 24) >> 24);
      var $194=(($193)|(0))==13;
      var $196 = $194;label = 38; break;
    case 38: 
      var $196;
      var $198 = $196;label = 39; break;
    case 39: 
      var $198;
      if ($198) { label = 40; break; } else { label = 41; break; }
    case 40: 
      var $200=$4;
      var $201=((($200)+(1))|0);
      $4=$201;
      label = 33; break;
    case 41: 
      var $203=$2;
      var $204=$3;
      var $205=$4;
      var $206=_scan_once_str($203, $204, $205, $next_idx);
      $val=$206;
      var $207=$val;
      var $208=(($207)|(0))==0;
      if ($208) { label = 42; break; } else { label = 43; break; }
    case 42: 
      label = 135; break;
    case 43: 
      var $211=$key;
      var $212=$val;
      var $213=_PyTuple_Pack(2, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$211,HEAP32[(((tempInt)+(4))>>2)]=$212,tempInt));
      $item=$213;
      var $214=$item;
      var $215=(($214)|(0))==0;
      if ($215) { label = 44; break; } else { label = 45; break; }
    case 44: 
      label = 135; break;
    case 45: 
      label = 46; break;
    case 46: 
      var $219=$key;
      var $220=(($219)|(0))!=0;
      if ($220) { label = 47; break; } else { label = 53; break; }
    case 47: 
      var $222=$key;
      $_py_tmp=$222;
      $key=0;
      label = 48; break;
    case 48: 
      var $224=$_py_tmp;
      var $225=(($224)|0);
      var $226=HEAP32[(($225)>>2)];
      var $227=((($226)-(1))|0);
      HEAP32[(($225)>>2)]=$227;
      var $228=(($227)|(0))!=0;
      if ($228) { label = 49; break; } else { label = 50; break; }
    case 49: 
      label = 51; break;
    case 50: 
      var $231=$_py_tmp;
      var $232=(($231+4)|0);
      var $233=HEAP32[(($232)>>2)];
      var $234=(($233+24)|0);
      var $235=HEAP32[(($234)>>2)];
      var $236=$_py_tmp;
      FUNCTION_TABLE[$235]($236);
      label = 51; break;
    case 51: 
      label = 52; break;
    case 52: 
      label = 53; break;
    case 53: 
      label = 54; break;
    case 54: 
      label = 55; break;
    case 55: 
      var $242=$val;
      var $243=(($242)|(0))!=0;
      if ($243) { label = 56; break; } else { label = 62; break; }
    case 56: 
      var $245=$val;
      $_py_tmp1=$245;
      $val=0;
      label = 57; break;
    case 57: 
      var $247=$_py_tmp1;
      var $248=(($247)|0);
      var $249=HEAP32[(($248)>>2)];
      var $250=((($249)-(1))|0);
      HEAP32[(($248)>>2)]=$250;
      var $251=(($250)|(0))!=0;
      if ($251) { label = 58; break; } else { label = 59; break; }
    case 58: 
      label = 60; break;
    case 59: 
      var $254=$_py_tmp1;
      var $255=(($254+4)|0);
      var $256=HEAP32[(($255)>>2)];
      var $257=(($256+24)|0);
      var $258=HEAP32[(($257)>>2)];
      var $259=$_py_tmp1;
      FUNCTION_TABLE[$258]($259);
      label = 60; break;
    case 60: 
      label = 61; break;
    case 61: 
      label = 62; break;
    case 62: 
      label = 63; break;
    case 63: 
      var $264=$pairs;
      var $265=$item;
      var $266=_PyList_Append($264, $265);
      var $267=(($266)|(0))==-1;
      if ($267) { label = 64; break; } else { label = 70; break; }
    case 64: 
      label = 65; break;
    case 65: 
      var $270=$item;
      var $271=(($270)|0);
      var $272=HEAP32[(($271)>>2)];
      var $273=((($272)-(1))|0);
      HEAP32[(($271)>>2)]=$273;
      var $274=(($273)|(0))!=0;
      if ($274) { label = 66; break; } else { label = 67; break; }
    case 66: 
      label = 68; break;
    case 67: 
      var $277=$item;
      var $278=(($277+4)|0);
      var $279=HEAP32[(($278)>>2)];
      var $280=(($279+24)|0);
      var $281=HEAP32[(($280)>>2)];
      var $282=$item;
      FUNCTION_TABLE[$281]($282);
      label = 68; break;
    case 68: 
      label = 69; break;
    case 69: 
      label = 135; break;
    case 70: 
      label = 71; break;
    case 71: 
      var $287=$item;
      var $288=(($287)|0);
      var $289=HEAP32[(($288)>>2)];
      var $290=((($289)-(1))|0);
      HEAP32[(($288)>>2)]=$290;
      var $291=(($290)|(0))!=0;
      if ($291) { label = 72; break; } else { label = 73; break; }
    case 72: 
      label = 74; break;
    case 73: 
      var $294=$item;
      var $295=(($294+4)|0);
      var $296=HEAP32[(($295)>>2)];
      var $297=(($296+24)|0);
      var $298=HEAP32[(($297)>>2)];
      var $299=$item;
      FUNCTION_TABLE[$298]($299);
      label = 74; break;
    case 74: 
      label = 75; break;
    case 75: 
      var $302=HEAP32[(($next_idx)>>2)];
      $4=$302;
      label = 76; break;
    case 76: 
      var $304=$4;
      var $305=$end_idx;
      var $306=(($304)|(0)) <= (($305)|(0));
      if ($306) { label = 77; break; } else { var $338 = 0;label = 82; break; }
    case 77: 
      var $308=$4;
      var $309=$str;
      var $310=(($309+$308)|0);
      var $311=HEAP8[($310)];
      var $312=(($311 << 24) >> 24);
      var $313=(($312)|(0))==32;
      if ($313) { var $336 = 1;label = 81; break; } else { label = 78; break; }
    case 78: 
      var $315=$4;
      var $316=$str;
      var $317=(($316+$315)|0);
      var $318=HEAP8[($317)];
      var $319=(($318 << 24) >> 24);
      var $320=(($319)|(0))==9;
      if ($320) { var $336 = 1;label = 81; break; } else { label = 79; break; }
    case 79: 
      var $322=$4;
      var $323=$str;
      var $324=(($323+$322)|0);
      var $325=HEAP8[($324)];
      var $326=(($325 << 24) >> 24);
      var $327=(($326)|(0))==10;
      if ($327) { var $336 = 1;label = 81; break; } else { label = 80; break; }
    case 80: 
      var $329=$4;
      var $330=$str;
      var $331=(($330+$329)|0);
      var $332=HEAP8[($331)];
      var $333=(($332 << 24) >> 24);
      var $334=(($333)|(0))==13;
      var $336 = $334;label = 81; break;
    case 81: 
      var $336;
      var $338 = $336;label = 82; break;
    case 82: 
      var $338;
      if ($338) { label = 83; break; } else { label = 84; break; }
    case 83: 
      var $340=$4;
      var $341=((($340)+(1))|0);
      $4=$341;
      label = 76; break;
    case 84: 
      var $343=$4;
      var $344=$end_idx;
      var $345=(($343)|(0)) > (($344)|(0));
      if ($345) { label = 85; break; } else { label = 86; break; }
    case 85: 
      label = 101; break;
    case 86: 
      var $348=$4;
      var $349=$str;
      var $350=(($349+$348)|0);
      var $351=HEAP8[($350)];
      var $352=(($351 << 24) >> 24);
      var $353=(($352)|(0))==125;
      if ($353) { label = 87; break; } else { label = 88; break; }
    case 87: 
      label = 101; break;
    case 88: 
      var $356=$4;
      var $357=$str;
      var $358=(($357+$356)|0);
      var $359=HEAP8[($358)];
      var $360=(($359 << 24) >> 24);
      var $361=(($360)|(0))!=44;
      if ($361) { label = 89; break; } else { label = 90; break; }
    case 89: 
      var $363=$3;
      var $364=$4;
      _raise_errmsg(((__str75)|0), $363, $364);
      label = 135; break;
    case 90: 
      label = 91; break;
    case 91: 
      var $367=$4;
      var $368=((($367)+(1))|0);
      $4=$368;
      label = 92; break;
    case 92: 
      var $370=$4;
      var $371=$end_idx;
      var $372=(($370)|(0)) <= (($371)|(0));
      if ($372) { label = 93; break; } else { var $404 = 0;label = 98; break; }
    case 93: 
      var $374=$4;
      var $375=$str;
      var $376=(($375+$374)|0);
      var $377=HEAP8[($376)];
      var $378=(($377 << 24) >> 24);
      var $379=(($378)|(0))==32;
      if ($379) { var $402 = 1;label = 97; break; } else { label = 94; break; }
    case 94: 
      var $381=$4;
      var $382=$str;
      var $383=(($382+$381)|0);
      var $384=HEAP8[($383)];
      var $385=(($384 << 24) >> 24);
      var $386=(($385)|(0))==9;
      if ($386) { var $402 = 1;label = 97; break; } else { label = 95; break; }
    case 95: 
      var $388=$4;
      var $389=$str;
      var $390=(($389+$388)|0);
      var $391=HEAP8[($390)];
      var $392=(($391 << 24) >> 24);
      var $393=(($392)|(0))==10;
      if ($393) { var $402 = 1;label = 97; break; } else { label = 96; break; }
    case 96: 
      var $395=$4;
      var $396=$str;
      var $397=(($396+$395)|0);
      var $398=HEAP8[($397)];
      var $399=(($398 << 24) >> 24);
      var $400=(($399)|(0))==13;
      var $402 = $400;label = 97; break;
    case 97: 
      var $402;
      var $404 = $402;label = 98; break;
    case 98: 
      var $404;
      if ($404) { label = 99; break; } else { label = 100; break; }
    case 99: 
      var $406=$4;
      var $407=((($406)+(1))|0);
      $4=$407;
      label = 92; break;
    case 100: 
      label = 15; break;
    case 101: 
      label = 102; break;
    case 102: 
      var $411=$4;
      var $412=$end_idx;
      var $413=(($411)|(0)) > (($412)|(0));
      if ($413) { label = 104; break; } else { label = 103; break; }
    case 103: 
      var $415=$4;
      var $416=$str;
      var $417=(($416+$415)|0);
      var $418=HEAP8[($417)];
      var $419=(($418 << 24) >> 24);
      var $420=(($419)|(0))!=125;
      if ($420) { label = 104; break; } else { label = 105; break; }
    case 104: 
      var $422=$3;
      var $423=$end_idx;
      _raise_errmsg(((__str70)|0), $422, $423);
      label = 135; break;
    case 105: 
      var $425=$2;
      var $426=(($425+20)|0);
      var $427=HEAP32[(($426)>>2)];
      var $428=(($427)|(0))!=((__Py_NoneStruct)|(0));
      if ($428) { label = 106; break; } else { label = 114; break; }
    case 106: 
      var $430=$2;
      var $431=(($430+20)|0);
      var $432=HEAP32[(($431)>>2)];
      var $433=$pairs;
      var $434=_PyObject_CallFunctionObjArgs($432, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$433,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $val=$434;
      var $435=$val;
      var $436=(($435)|(0))==0;
      if ($436) { label = 107; break; } else { label = 108; break; }
    case 107: 
      label = 135; break;
    case 108: 
      label = 109; break;
    case 109: 
      var $440=$pairs;
      var $441=(($440)|0);
      var $442=HEAP32[(($441)>>2)];
      var $443=((($442)-(1))|0);
      HEAP32[(($441)>>2)]=$443;
      var $444=(($443)|(0))!=0;
      if ($444) { label = 110; break; } else { label = 111; break; }
    case 110: 
      label = 112; break;
    case 111: 
      var $447=$pairs;
      var $448=(($447+4)|0);
      var $449=HEAP32[(($448)>>2)];
      var $450=(($449+24)|0);
      var $451=HEAP32[(($450)>>2)];
      var $452=$pairs;
      FUNCTION_TABLE[$451]($452);
      label = 112; break;
    case 112: 
      label = 113; break;
    case 113: 
      var $455=$4;
      var $456=((($455)+(1))|0);
      var $457=$5;
      HEAP32[(($457)>>2)]=$456;
      var $458=$val;
      $1=$458;
      label = 166; break;
    case 114: 
      var $460=$pairs;
      var $461=_PyObject_CallFunctionObjArgs(_PyDict_Type, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$460,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $rval=$461;
      var $462=$rval;
      var $463=(($462)|(0))==0;
      if ($463) { label = 115; break; } else { label = 116; break; }
    case 115: 
      label = 135; break;
    case 116: 
      label = 117; break;
    case 117: 
      var $467=$pairs;
      var $468=(($467)|(0))!=0;
      if ($468) { label = 118; break; } else { label = 124; break; }
    case 118: 
      var $470=$pairs;
      $_py_tmp2=$470;
      $pairs=0;
      label = 119; break;
    case 119: 
      var $472=$_py_tmp2;
      var $473=(($472)|0);
      var $474=HEAP32[(($473)>>2)];
      var $475=((($474)-(1))|0);
      HEAP32[(($473)>>2)]=$475;
      var $476=(($475)|(0))!=0;
      if ($476) { label = 120; break; } else { label = 121; break; }
    case 120: 
      label = 122; break;
    case 121: 
      var $479=$_py_tmp2;
      var $480=(($479+4)|0);
      var $481=HEAP32[(($480)>>2)];
      var $482=(($481+24)|0);
      var $483=HEAP32[(($482)>>2)];
      var $484=$_py_tmp2;
      FUNCTION_TABLE[$483]($484);
      label = 122; break;
    case 122: 
      label = 123; break;
    case 123: 
      label = 124; break;
    case 124: 
      label = 125; break;
    case 125: 
      var $489=$2;
      var $490=(($489+16)|0);
      var $491=HEAP32[(($490)>>2)];
      var $492=(($491)|(0))!=((__Py_NoneStruct)|(0));
      if ($492) { label = 126; break; } else { label = 134; break; }
    case 126: 
      var $494=$2;
      var $495=(($494+16)|0);
      var $496=HEAP32[(($495)>>2)];
      var $497=$rval;
      var $498=_PyObject_CallFunctionObjArgs($496, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$497,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $val=$498;
      var $499=$val;
      var $500=(($499)|(0))==0;
      if ($500) { label = 127; break; } else { label = 128; break; }
    case 127: 
      label = 135; break;
    case 128: 
      label = 129; break;
    case 129: 
      var $504=$rval;
      var $505=(($504)|0);
      var $506=HEAP32[(($505)>>2)];
      var $507=((($506)-(1))|0);
      HEAP32[(($505)>>2)]=$507;
      var $508=(($507)|(0))!=0;
      if ($508) { label = 130; break; } else { label = 131; break; }
    case 130: 
      label = 132; break;
    case 131: 
      var $511=$rval;
      var $512=(($511+4)|0);
      var $513=HEAP32[(($512)>>2)];
      var $514=(($513+24)|0);
      var $515=HEAP32[(($514)>>2)];
      var $516=$rval;
      FUNCTION_TABLE[$515]($516);
      label = 132; break;
    case 132: 
      label = 133; break;
    case 133: 
      var $519=$val;
      $rval=$519;
      $val=0;
      label = 134; break;
    case 134: 
      var $521=$4;
      var $522=((($521)+(1))|0);
      var $523=$5;
      HEAP32[(($523)>>2)]=$522;
      var $524=$rval;
      $1=$524;
      label = 166; break;
    case 135: 
      label = 136; break;
    case 136: 
      var $527=$key;
      var $528=(($527)|(0))==0;
      if ($528) { label = 137; break; } else { label = 138; break; }
    case 137: 
      label = 144; break;
    case 138: 
      label = 139; break;
    case 139: 
      var $532=$key;
      var $533=(($532)|0);
      var $534=HEAP32[(($533)>>2)];
      var $535=((($534)-(1))|0);
      HEAP32[(($533)>>2)]=$535;
      var $536=(($535)|(0))!=0;
      if ($536) { label = 140; break; } else { label = 141; break; }
    case 140: 
      label = 142; break;
    case 141: 
      var $539=$key;
      var $540=(($539+4)|0);
      var $541=HEAP32[(($540)>>2)];
      var $542=(($541+24)|0);
      var $543=HEAP32[(($542)>>2)];
      var $544=$key;
      FUNCTION_TABLE[$543]($544);
      label = 142; break;
    case 142: 
      label = 143; break;
    case 143: 
      label = 144; break;
    case 144: 
      label = 145; break;
    case 145: 
      label = 146; break;
    case 146: 
      var $550=$val;
      var $551=(($550)|(0))==0;
      if ($551) { label = 147; break; } else { label = 148; break; }
    case 147: 
      label = 154; break;
    case 148: 
      label = 149; break;
    case 149: 
      var $555=$val;
      var $556=(($555)|0);
      var $557=HEAP32[(($556)>>2)];
      var $558=((($557)-(1))|0);
      HEAP32[(($556)>>2)]=$558;
      var $559=(($558)|(0))!=0;
      if ($559) { label = 150; break; } else { label = 151; break; }
    case 150: 
      label = 152; break;
    case 151: 
      var $562=$val;
      var $563=(($562+4)|0);
      var $564=HEAP32[(($563)>>2)];
      var $565=(($564+24)|0);
      var $566=HEAP32[(($565)>>2)];
      var $567=$val;
      FUNCTION_TABLE[$566]($567);
      label = 152; break;
    case 152: 
      label = 153; break;
    case 153: 
      label = 154; break;
    case 154: 
      label = 155; break;
    case 155: 
      label = 156; break;
    case 156: 
      var $573=$pairs;
      var $574=(($573)|(0))==0;
      if ($574) { label = 157; break; } else { label = 158; break; }
    case 157: 
      label = 164; break;
    case 158: 
      label = 159; break;
    case 159: 
      var $578=$pairs;
      var $579=(($578)|0);
      var $580=HEAP32[(($579)>>2)];
      var $581=((($580)-(1))|0);
      HEAP32[(($579)>>2)]=$581;
      var $582=(($581)|(0))!=0;
      if ($582) { label = 160; break; } else { label = 161; break; }
    case 160: 
      label = 162; break;
    case 161: 
      var $585=$pairs;
      var $586=(($585+4)|0);
      var $587=HEAP32[(($586)>>2)];
      var $588=(($587+24)|0);
      var $589=HEAP32[(($588)>>2)];
      var $590=$pairs;
      FUNCTION_TABLE[$589]($590);
      label = 162; break;
    case 162: 
      label = 163; break;
    case 163: 
      label = 164; break;
    case 164: 
      label = 165; break;
    case 165: 
      $1=0;
      label = 166; break;
    case 166: 
      var $596=$1;
      STACKTOP = __stackBase__;
      return $596;
    default: assert(0, "bad label: " + label);
  }
}
function __parse_array_str($s, $pystr, $idx, $next_idx_ptr) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $str;
      var $end_idx;
      var $val;
      var $rval;
      var $next_idx=__stackBase__;
      var $_py_tmp;
      $2=$s;
      $3=$pystr;
      $4=$idx;
      $5=$next_idx_ptr;
      var $6=$3;
      var $7=$6;
      var $8=(($7+20)|0);
      var $9=(($8)|0);
      $str=$9;
      var $10=$3;
      var $11=$10;
      var $12=(($11+8)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=((($13)-(1))|0);
      $end_idx=$14;
      $val=0;
      var $15=_PyList_New(0);
      $rval=$15;
      var $16=$rval;
      var $17=(($16)|(0))==0;
      if ($17) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 76; break;
    case 3: 
      label = 4; break;
    case 4: 
      var $21=$4;
      var $22=$end_idx;
      var $23=(($21)|(0)) <= (($22)|(0));
      if ($23) { label = 5; break; } else { var $55 = 0;label = 10; break; }
    case 5: 
      var $25=$4;
      var $26=$str;
      var $27=(($26+$25)|0);
      var $28=HEAP8[($27)];
      var $29=(($28 << 24) >> 24);
      var $30=(($29)|(0))==32;
      if ($30) { var $53 = 1;label = 9; break; } else { label = 6; break; }
    case 6: 
      var $32=$4;
      var $33=$str;
      var $34=(($33+$32)|0);
      var $35=HEAP8[($34)];
      var $36=(($35 << 24) >> 24);
      var $37=(($36)|(0))==9;
      if ($37) { var $53 = 1;label = 9; break; } else { label = 7; break; }
    case 7: 
      var $39=$4;
      var $40=$str;
      var $41=(($40+$39)|0);
      var $42=HEAP8[($41)];
      var $43=(($42 << 24) >> 24);
      var $44=(($43)|(0))==10;
      if ($44) { var $53 = 1;label = 9; break; } else { label = 8; break; }
    case 8: 
      var $46=$4;
      var $47=$str;
      var $48=(($47+$46)|0);
      var $49=HEAP8[($48)];
      var $50=(($49 << 24) >> 24);
      var $51=(($50)|(0))==13;
      var $53 = $51;label = 9; break;
    case 9: 
      var $53;
      var $55 = $53;label = 10; break;
    case 10: 
      var $55;
      if ($55) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $57=$4;
      var $58=((($57)+(1))|0);
      $4=$58;
      label = 4; break;
    case 12: 
      var $60=$4;
      var $61=$end_idx;
      var $62=(($60)|(0)) <= (($61)|(0));
      if ($62) { label = 13; break; } else { label = 56; break; }
    case 13: 
      var $64=$4;
      var $65=$str;
      var $66=(($65+$64)|0);
      var $67=HEAP8[($66)];
      var $68=(($67 << 24) >> 24);
      var $69=(($68)|(0))!=93;
      if ($69) { label = 14; break; } else { label = 56; break; }
    case 14: 
      label = 15; break;
    case 15: 
      var $72=$4;
      var $73=$end_idx;
      var $74=(($72)|(0)) <= (($73)|(0));
      if ($74) { label = 16; break; } else { label = 55; break; }
    case 16: 
      var $76=$2;
      var $77=$3;
      var $78=$4;
      var $79=_scan_once_str($76, $77, $78, $next_idx);
      $val=$79;
      var $80=$val;
      var $81=(($80)|(0))==0;
      if ($81) { label = 17; break; } else { label = 18; break; }
    case 17: 
      label = 60; break;
    case 18: 
      var $84=$rval;
      var $85=$val;
      var $86=_PyList_Append($84, $85);
      var $87=(($86)|(0))==-1;
      if ($87) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 60; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $91=$val;
      var $92=(($91)|(0))!=0;
      if ($92) { label = 22; break; } else { label = 28; break; }
    case 22: 
      var $94=$val;
      $_py_tmp=$94;
      $val=0;
      label = 23; break;
    case 23: 
      var $96=$_py_tmp;
      var $97=(($96)|0);
      var $98=HEAP32[(($97)>>2)];
      var $99=((($98)-(1))|0);
      HEAP32[(($97)>>2)]=$99;
      var $100=(($99)|(0))!=0;
      if ($100) { label = 24; break; } else { label = 25; break; }
    case 24: 
      label = 26; break;
    case 25: 
      var $103=$_py_tmp;
      var $104=(($103+4)|0);
      var $105=HEAP32[(($104)>>2)];
      var $106=(($105+24)|0);
      var $107=HEAP32[(($106)>>2)];
      var $108=$_py_tmp;
      FUNCTION_TABLE[$107]($108);
      label = 26; break;
    case 26: 
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      var $113=HEAP32[(($next_idx)>>2)];
      $4=$113;
      label = 30; break;
    case 30: 
      var $115=$4;
      var $116=$end_idx;
      var $117=(($115)|(0)) <= (($116)|(0));
      if ($117) { label = 31; break; } else { var $149 = 0;label = 36; break; }
    case 31: 
      var $119=$4;
      var $120=$str;
      var $121=(($120+$119)|0);
      var $122=HEAP8[($121)];
      var $123=(($122 << 24) >> 24);
      var $124=(($123)|(0))==32;
      if ($124) { var $147 = 1;label = 35; break; } else { label = 32; break; }
    case 32: 
      var $126=$4;
      var $127=$str;
      var $128=(($127+$126)|0);
      var $129=HEAP8[($128)];
      var $130=(($129 << 24) >> 24);
      var $131=(($130)|(0))==9;
      if ($131) { var $147 = 1;label = 35; break; } else { label = 33; break; }
    case 33: 
      var $133=$4;
      var $134=$str;
      var $135=(($134+$133)|0);
      var $136=HEAP8[($135)];
      var $137=(($136 << 24) >> 24);
      var $138=(($137)|(0))==10;
      if ($138) { var $147 = 1;label = 35; break; } else { label = 34; break; }
    case 34: 
      var $140=$4;
      var $141=$str;
      var $142=(($141+$140)|0);
      var $143=HEAP8[($142)];
      var $144=(($143 << 24) >> 24);
      var $145=(($144)|(0))==13;
      var $147 = $145;label = 35; break;
    case 35: 
      var $147;
      var $149 = $147;label = 36; break;
    case 36: 
      var $149;
      if ($149) { label = 37; break; } else { label = 38; break; }
    case 37: 
      var $151=$4;
      var $152=((($151)+(1))|0);
      $4=$152;
      label = 30; break;
    case 38: 
      var $154=$4;
      var $155=$end_idx;
      var $156=(($154)|(0)) > (($155)|(0));
      if ($156) { label = 39; break; } else { label = 40; break; }
    case 39: 
      label = 55; break;
    case 40: 
      var $159=$4;
      var $160=$str;
      var $161=(($160+$159)|0);
      var $162=HEAP8[($161)];
      var $163=(($162 << 24) >> 24);
      var $164=(($163)|(0))==93;
      if ($164) { label = 41; break; } else { label = 42; break; }
    case 41: 
      label = 55; break;
    case 42: 
      var $167=$4;
      var $168=$str;
      var $169=(($168+$167)|0);
      var $170=HEAP8[($169)];
      var $171=(($170 << 24) >> 24);
      var $172=(($171)|(0))!=44;
      if ($172) { label = 43; break; } else { label = 44; break; }
    case 43: 
      var $174=$3;
      var $175=$4;
      _raise_errmsg(((__str75)|0), $174, $175);
      label = 60; break;
    case 44: 
      label = 45; break;
    case 45: 
      var $178=$4;
      var $179=((($178)+(1))|0);
      $4=$179;
      label = 46; break;
    case 46: 
      var $181=$4;
      var $182=$end_idx;
      var $183=(($181)|(0)) <= (($182)|(0));
      if ($183) { label = 47; break; } else { var $215 = 0;label = 52; break; }
    case 47: 
      var $185=$4;
      var $186=$str;
      var $187=(($186+$185)|0);
      var $188=HEAP8[($187)];
      var $189=(($188 << 24) >> 24);
      var $190=(($189)|(0))==32;
      if ($190) { var $213 = 1;label = 51; break; } else { label = 48; break; }
    case 48: 
      var $192=$4;
      var $193=$str;
      var $194=(($193+$192)|0);
      var $195=HEAP8[($194)];
      var $196=(($195 << 24) >> 24);
      var $197=(($196)|(0))==9;
      if ($197) { var $213 = 1;label = 51; break; } else { label = 49; break; }
    case 49: 
      var $199=$4;
      var $200=$str;
      var $201=(($200+$199)|0);
      var $202=HEAP8[($201)];
      var $203=(($202 << 24) >> 24);
      var $204=(($203)|(0))==10;
      if ($204) { var $213 = 1;label = 51; break; } else { label = 50; break; }
    case 50: 
      var $206=$4;
      var $207=$str;
      var $208=(($207+$206)|0);
      var $209=HEAP8[($208)];
      var $210=(($209 << 24) >> 24);
      var $211=(($210)|(0))==13;
      var $213 = $211;label = 51; break;
    case 51: 
      var $213;
      var $215 = $213;label = 52; break;
    case 52: 
      var $215;
      if ($215) { label = 53; break; } else { label = 54; break; }
    case 53: 
      var $217=$4;
      var $218=((($217)+(1))|0);
      $4=$218;
      label = 46; break;
    case 54: 
      label = 15; break;
    case 55: 
      label = 56; break;
    case 56: 
      var $222=$4;
      var $223=$end_idx;
      var $224=(($222)|(0)) > (($223)|(0));
      if ($224) { label = 58; break; } else { label = 57; break; }
    case 57: 
      var $226=$4;
      var $227=$str;
      var $228=(($227+$226)|0);
      var $229=HEAP8[($228)];
      var $230=(($229 << 24) >> 24);
      var $231=(($230)|(0))!=93;
      if ($231) { label = 58; break; } else { label = 59; break; }
    case 58: 
      var $233=$3;
      var $234=$end_idx;
      _raise_errmsg(((__str70)|0), $233, $234);
      label = 60; break;
    case 59: 
      var $236=$4;
      var $237=((($236)+(1))|0);
      var $238=$5;
      HEAP32[(($238)>>2)]=$237;
      var $239=$rval;
      $1=$239;
      label = 76; break;
    case 60: 
      label = 61; break;
    case 61: 
      var $242=$val;
      var $243=(($242)|(0))==0;
      if ($243) { label = 62; break; } else { label = 63; break; }
    case 62: 
      label = 69; break;
    case 63: 
      label = 64; break;
    case 64: 
      var $247=$val;
      var $248=(($247)|0);
      var $249=HEAP32[(($248)>>2)];
      var $250=((($249)-(1))|0);
      HEAP32[(($248)>>2)]=$250;
      var $251=(($250)|(0))!=0;
      if ($251) { label = 65; break; } else { label = 66; break; }
    case 65: 
      label = 67; break;
    case 66: 
      var $254=$val;
      var $255=(($254+4)|0);
      var $256=HEAP32[(($255)>>2)];
      var $257=(($256+24)|0);
      var $258=HEAP32[(($257)>>2)];
      var $259=$val;
      FUNCTION_TABLE[$258]($259);
      label = 67; break;
    case 67: 
      label = 68; break;
    case 68: 
      label = 69; break;
    case 69: 
      label = 70; break;
    case 70: 
      label = 71; break;
    case 71: 
      var $265=$rval;
      var $266=(($265)|0);
      var $267=HEAP32[(($266)>>2)];
      var $268=((($267)-(1))|0);
      HEAP32[(($266)>>2)]=$268;
      var $269=(($268)|(0))!=0;
      if ($269) { label = 72; break; } else { label = 73; break; }
    case 72: 
      label = 74; break;
    case 73: 
      var $272=$rval;
      var $273=(($272+4)|0);
      var $274=HEAP32[(($273)>>2)];
      var $275=(($274+24)|0);
      var $276=HEAP32[(($275)>>2)];
      var $277=$rval;
      FUNCTION_TABLE[$276]($277);
      label = 74; break;
    case 74: 
      label = 75; break;
    case 75: 
      $1=0;
      label = 76; break;
    case 76: 
      var $281=$1;
      STACKTOP = __stackBase__;
      return $281;
    default: assert(0, "bad label: " + label);
  }
}
function __match_number_str($s, $pystr, $start, $next_idx_ptr) {
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
      var $str;
      var $end_idx;
      var $idx;
      var $is_float;
      var $rval;
      var $numstr;
      var $e_start;
      var $d;
      $2=$s;
      $3=$pystr;
      $4=$start;
      $5=$next_idx_ptr;
      var $6=$3;
      var $7=$6;
      var $8=(($7+20)|0);
      var $9=(($8)|0);
      $str=$9;
      var $10=$3;
      var $11=$10;
      var $12=(($11+8)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=((($13)-(1))|0);
      $end_idx=$14;
      var $15=$4;
      $idx=$15;
      $is_float=0;
      var $16=$idx;
      var $17=$str;
      var $18=(($17+$16)|0);
      var $19=HEAP8[($18)];
      var $20=(($19 << 24) >> 24);
      var $21=(($20)|(0))==45;
      if ($21) { label = 2; break; } else { label = 5; break; }
    case 2: 
      var $23=$idx;
      var $24=((($23)+(1))|0);
      $idx=$24;
      var $25=$idx;
      var $26=$end_idx;
      var $27=(($25)|(0)) > (($26)|(0));
      if ($27) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $29=HEAP32[((_PyExc_StopIteration)>>2)];
      _PyErr_SetNone($29);
      $1=0;
      label = 67; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $32=$idx;
      var $33=$str;
      var $34=(($33+$32)|0);
      var $35=HEAP8[($34)];
      var $36=(($35 << 24) >> 24);
      var $37=(($36)|(0)) >= 49;
      if ($37) { label = 6; break; } else { label = 14; break; }
    case 6: 
      var $39=$idx;
      var $40=$str;
      var $41=(($40+$39)|0);
      var $42=HEAP8[($41)];
      var $43=(($42 << 24) >> 24);
      var $44=(($43)|(0)) <= 57;
      if ($44) { label = 7; break; } else { label = 14; break; }
    case 7: 
      var $46=$idx;
      var $47=((($46)+(1))|0);
      $idx=$47;
      label = 8; break;
    case 8: 
      var $49=$idx;
      var $50=$end_idx;
      var $51=(($49)|(0)) <= (($50)|(0));
      if ($51) { label = 9; break; } else { var $67 = 0;label = 11; break; }
    case 9: 
      var $53=$idx;
      var $54=$str;
      var $55=(($54+$53)|0);
      var $56=HEAP8[($55)];
      var $57=(($56 << 24) >> 24);
      var $58=(($57)|(0)) >= 48;
      if ($58) { label = 10; break; } else { var $67 = 0;label = 11; break; }
    case 10: 
      var $60=$idx;
      var $61=$str;
      var $62=(($61+$60)|0);
      var $63=HEAP8[($62)];
      var $64=(($63 << 24) >> 24);
      var $65=(($64)|(0)) <= 57;
      var $67 = $65;label = 11; break;
    case 11: 
      var $67;
      if ($67) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $69=$idx;
      var $70=((($69)+(1))|0);
      $idx=$70;
      label = 8; break;
    case 13: 
      label = 18; break;
    case 14: 
      var $73=$idx;
      var $74=$str;
      var $75=(($74+$73)|0);
      var $76=HEAP8[($75)];
      var $77=(($76 << 24) >> 24);
      var $78=(($77)|(0))==48;
      if ($78) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $80=$idx;
      var $81=((($80)+(1))|0);
      $idx=$81;
      label = 17; break;
    case 16: 
      var $83=HEAP32[((_PyExc_StopIteration)>>2)];
      _PyErr_SetNone($83);
      $1=0;
      label = 67; break;
    case 17: 
      label = 18; break;
    case 18: 
      var $86=$idx;
      var $87=$end_idx;
      var $88=(($86)|(0)) < (($87)|(0));
      if ($88) { label = 19; break; } else { label = 29; break; }
    case 19: 
      var $90=$idx;
      var $91=$str;
      var $92=(($91+$90)|0);
      var $93=HEAP8[($92)];
      var $94=(($93 << 24) >> 24);
      var $95=(($94)|(0))==46;
      if ($95) { label = 20; break; } else { label = 29; break; }
    case 20: 
      var $97=$idx;
      var $98=((($97)+(1))|0);
      var $99=$str;
      var $100=(($99+$98)|0);
      var $101=HEAP8[($100)];
      var $102=(($101 << 24) >> 24);
      var $103=(($102)|(0)) >= 48;
      if ($103) { label = 21; break; } else { label = 29; break; }
    case 21: 
      var $105=$idx;
      var $106=((($105)+(1))|0);
      var $107=$str;
      var $108=(($107+$106)|0);
      var $109=HEAP8[($108)];
      var $110=(($109 << 24) >> 24);
      var $111=(($110)|(0)) <= 57;
      if ($111) { label = 22; break; } else { label = 29; break; }
    case 22: 
      $is_float=1;
      var $113=$idx;
      var $114=((($113)+(2))|0);
      $idx=$114;
      label = 23; break;
    case 23: 
      var $116=$idx;
      var $117=$end_idx;
      var $118=(($116)|(0)) <= (($117)|(0));
      if ($118) { label = 24; break; } else { var $134 = 0;label = 26; break; }
    case 24: 
      var $120=$idx;
      var $121=$str;
      var $122=(($121+$120)|0);
      var $123=HEAP8[($122)];
      var $124=(($123 << 24) >> 24);
      var $125=(($124)|(0)) >= 48;
      if ($125) { label = 25; break; } else { var $134 = 0;label = 26; break; }
    case 25: 
      var $127=$idx;
      var $128=$str;
      var $129=(($128+$127)|0);
      var $130=HEAP8[($129)];
      var $131=(($130 << 24) >> 24);
      var $132=(($131)|(0)) <= 57;
      var $134 = $132;label = 26; break;
    case 26: 
      var $134;
      if ($134) { label = 27; break; } else { label = 28; break; }
    case 27: 
      var $136=$idx;
      var $137=((($136)+(1))|0);
      $idx=$137;
      label = 23; break;
    case 28: 
      label = 29; break;
    case 29: 
      var $140=$idx;
      var $141=$end_idx;
      var $142=(($140)|(0)) < (($141)|(0));
      if ($142) { label = 30; break; } else { label = 47; break; }
    case 30: 
      var $144=$idx;
      var $145=$str;
      var $146=(($145+$144)|0);
      var $147=HEAP8[($146)];
      var $148=(($147 << 24) >> 24);
      var $149=(($148)|(0))==101;
      if ($149) { label = 32; break; } else { label = 31; break; }
    case 31: 
      var $151=$idx;
      var $152=$str;
      var $153=(($152+$151)|0);
      var $154=HEAP8[($153)];
      var $155=(($154 << 24) >> 24);
      var $156=(($155)|(0))==69;
      if ($156) { label = 32; break; } else { label = 47; break; }
    case 32: 
      var $158=$idx;
      $e_start=$158;
      var $159=$idx;
      var $160=((($159)+(1))|0);
      $idx=$160;
      var $161=$idx;
      var $162=$end_idx;
      var $163=(($161)|(0)) < (($162)|(0));
      if ($163) { label = 33; break; } else { label = 36; break; }
    case 33: 
      var $165=$idx;
      var $166=$str;
      var $167=(($166+$165)|0);
      var $168=HEAP8[($167)];
      var $169=(($168 << 24) >> 24);
      var $170=(($169)|(0))==45;
      if ($170) { label = 35; break; } else { label = 34; break; }
    case 34: 
      var $172=$idx;
      var $173=$str;
      var $174=(($173+$172)|0);
      var $175=HEAP8[($174)];
      var $176=(($175 << 24) >> 24);
      var $177=(($176)|(0))==43;
      if ($177) { label = 35; break; } else { label = 36; break; }
    case 35: 
      var $179=$idx;
      var $180=((($179)+(1))|0);
      $idx=$180;
      label = 36; break;
    case 36: 
      label = 37; break;
    case 37: 
      var $183=$idx;
      var $184=$end_idx;
      var $185=(($183)|(0)) <= (($184)|(0));
      if ($185) { label = 38; break; } else { var $201 = 0;label = 40; break; }
    case 38: 
      var $187=$idx;
      var $188=$str;
      var $189=(($188+$187)|0);
      var $190=HEAP8[($189)];
      var $191=(($190 << 24) >> 24);
      var $192=(($191)|(0)) >= 48;
      if ($192) { label = 39; break; } else { var $201 = 0;label = 40; break; }
    case 39: 
      var $194=$idx;
      var $195=$str;
      var $196=(($195+$194)|0);
      var $197=HEAP8[($196)];
      var $198=(($197 << 24) >> 24);
      var $199=(($198)|(0)) <= 57;
      var $201 = $199;label = 40; break;
    case 40: 
      var $201;
      if ($201) { label = 41; break; } else { label = 42; break; }
    case 41: 
      var $203=$idx;
      var $204=((($203)+(1))|0);
      $idx=$204;
      label = 37; break;
    case 42: 
      var $206=$idx;
      var $207=((($206)-(1))|0);
      var $208=$str;
      var $209=(($208+$207)|0);
      var $210=HEAP8[($209)];
      var $211=(($210 << 24) >> 24);
      var $212=(($211)|(0)) >= 48;
      if ($212) { label = 43; break; } else { label = 45; break; }
    case 43: 
      var $214=$idx;
      var $215=((($214)-(1))|0);
      var $216=$str;
      var $217=(($216+$215)|0);
      var $218=HEAP8[($217)];
      var $219=(($218 << 24) >> 24);
      var $220=(($219)|(0)) <= 57;
      if ($220) { label = 44; break; } else { label = 45; break; }
    case 44: 
      $is_float=1;
      label = 46; break;
    case 45: 
      var $223=$e_start;
      $idx=$223;
      label = 46; break;
    case 46: 
      label = 47; break;
    case 47: 
      var $226=$4;
      var $227=$str;
      var $228=(($227+$226)|0);
      var $229=$idx;
      var $230=$4;
      var $231=((($229)-($230))|0);
      var $232=_PyString_FromStringAndSize($228, $231);
      $numstr=$232;
      var $233=$numstr;
      var $234=(($233)|(0))==0;
      if ($234) { label = 48; break; } else { label = 49; break; }
    case 48: 
      $1=0;
      label = 67; break;
    case 49: 
      var $237=$is_float;
      var $238=(($237)|(0))!=0;
      if ($238) { label = 50; break; } else { label = 57; break; }
    case 50: 
      var $240=$2;
      var $241=(($240+24)|0);
      var $242=HEAP32[(($241)>>2)];
      var $243=(($242)|(0))!=((_PyFloat_Type)|(0));
      if ($243) { label = 51; break; } else { label = 52; break; }
    case 51: 
      var $245=$2;
      var $246=(($245+24)|0);
      var $247=HEAP32[(($246)>>2)];
      var $248=$numstr;
      var $249=_PyObject_CallFunctionObjArgs($247, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$248,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $rval=$249;
      label = 56; break;
    case 52: 
      var $251=$numstr;
      var $252=$251;
      var $253=(($252+20)|0);
      var $254=(($253)|0);
      var $255=_PyOS_string_to_double($254, 0, 0);
      $d=$255;
      var $256=$d;
      var $257=$256 == -1;
      if ($257) { label = 53; break; } else { label = 55; break; }
    case 53: 
      var $259=_PyErr_Occurred();
      var $260=(($259)|(0))!=0;
      if ($260) { label = 54; break; } else { label = 55; break; }
    case 54: 
      $1=0;
      label = 67; break;
    case 55: 
      var $263=$d;
      var $264=_PyFloat_FromDouble($263);
      $rval=$264;
      label = 56; break;
    case 56: 
      label = 61; break;
    case 57: 
      var $267=$2;
      var $268=(($267+28)|0);
      var $269=HEAP32[(($268)>>2)];
      var $270=(($269)|(0))!=((_PyInt_Type)|(0));
      if ($270) { label = 58; break; } else { label = 59; break; }
    case 58: 
      var $272=$2;
      var $273=(($272+28)|0);
      var $274=HEAP32[(($273)>>2)];
      var $275=$numstr;
      var $276=_PyObject_CallFunctionObjArgs($274, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$275,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $rval=$276;
      label = 60; break;
    case 59: 
      var $278=$numstr;
      var $279=$278;
      var $280=(($279+20)|0);
      var $281=(($280)|0);
      var $282=_PyInt_FromString($281, 0, 10);
      $rval=$282;
      label = 60; break;
    case 60: 
      label = 61; break;
    case 61: 
      label = 62; break;
    case 62: 
      var $286=$numstr;
      var $287=(($286)|0);
      var $288=HEAP32[(($287)>>2)];
      var $289=((($288)-(1))|0);
      HEAP32[(($287)>>2)]=$289;
      var $290=(($289)|(0))!=0;
      if ($290) { label = 63; break; } else { label = 64; break; }
    case 63: 
      label = 65; break;
    case 64: 
      var $293=$numstr;
      var $294=(($293+4)|0);
      var $295=HEAP32[(($294)>>2)];
      var $296=(($295+24)|0);
      var $297=HEAP32[(($296)>>2)];
      var $298=$numstr;
      FUNCTION_TABLE[$297]($298);
      label = 65; break;
    case 65: 
      label = 66; break;
    case 66: 
      var $301=$idx;
      var $302=$5;
      HEAP32[(($302)>>2)]=$301;
      var $303=$rval;
      $1=$303;
      label = 67; break;
    case 67: 
      var $305=$1;
      STACKTOP = __stackBase__;
      return $305;
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
