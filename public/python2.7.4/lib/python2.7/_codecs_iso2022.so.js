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
var _mapping_list;
var _ksx1001_init_initialized;
var _ksx1001_decmap;
var _jisxcommon_encmap;
var _jisx0213_pair_encmap;
var _jisx0213_pair_decmap;
var _jisx0213_init_initialized;
var _jisx0213_emp_encmap;
var _jisx0213_bmp_encmap;
var _jisx0213_2_emp_decmap;
var _jisx0213_2_bmp_decmap;
var _jisx0213_1_emp_decmap;
var _jisx0213_1_bmp_decmap;
var _jisx0212_init_initialized;
var _jisx0212_decmap;
var _jisx0208_init_initialized;
var _jisx0208_decmap;
var _iso2022_kr_designations;
var _iso2022_kr_config;
var _iso2022_jp_ext_designations;
var _iso2022_jp_ext_config;
var _iso2022_jp_designations;
var _iso2022_jp_config;
var _iso2022_jp_3_designations;
var _iso2022_jp_3_config;
var _iso2022_jp_2_designations;
var _iso2022_jp_2_config;
var _iso2022_jp_2004_designations;
var _iso2022_jp_2004_config;
var _iso2022_jp_1_designations;
var _iso2022_jp_1_config;
var _getmultibytecodec_cofunc;
var _gbcommon_encmap;
var _gb2312_init_initialized;
var _gb2312_decmap;
var _cp949_encmap;
var _codec_list;
var __str9;
var __str8;
var __str7;
var __str6;
var __str5;
var __str4;
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
var __mapping_list;
var __codec_list;
var ___methods;
var ___func___ksx1001_encoder;
var ___func___jisx0212_encoder;
var ___func___jisx0208_encoder;
var ___func___iso2022_encode;
var ___func___iso2022_decode;
var ___func___gb2312_encoder;
_mapping_list=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_ksx1001_init_initialized=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_ksx1001_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisxcommon_encmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_pair_encmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_pair_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_init_initialized=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_emp_encmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_bmp_encmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_2_emp_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_2_bmp_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_1_emp_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_1_bmp_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0212_init_initialized=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0212_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0208_init_initialized=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0208_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_kr_designations=allocate([195,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_kr_config=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_ext_designations=allocate([194,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,196,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,74,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,73,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,192,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_ext_config=allocate([5,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_designations=allocate([194,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,74,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,192,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_config=allocate([5,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_3_designations=allocate([207,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,194,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,207,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,208,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_3_config=allocate([5,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_2_designations=allocate([194,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,196,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,195,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,193,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,74,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,192,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,65,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,70,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_2_config=allocate([7,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_2004_designations=allocate([209,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,194,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,209,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,208,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_2004_config=allocate([5,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_1_designations=allocate([194,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,196,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,74,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,192,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_1_config=allocate([5,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_getmultibytecodec_cofunc=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_gbcommon_encmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_gb2312_init_initialized=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_gb2312_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_cp949_encmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_codec_list=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([105,115,111,50,48,50,50,95,106,112,95,50,0,0,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([105,115,111,50,48,50,50,95,106,112,95,49,0,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([105,115,111,50,48,50,50,95,106,112,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([105,115,111,50,48,50,50,95,107,114,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([110,111,32,115,117,99,104,32,99,111,100,101,99,32,105,115,32,115,117,112,112,111,114,116,101,100,46,0], "i8", ALLOC_NORMAL);
__str4=allocate([101,110,99,111,100,105,110,103,32,110,97,109,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,46,0], "i8", ALLOC_NORMAL);
__str36=allocate([95,95,99,114,101,97,116,101,95,99,111,100,101,99,0,0], "i8", ALLOC_NORMAL);
__str35=allocate([95,109,117,108,116,105,98,121,116,101,99,111,100,101,99,0], "i8", ALLOC_NORMAL);
__str34=allocate([100,115,103,45,62,119,105,100,116,104,32,61,61,32,49,32,124,124,32,100,115,103,45,62,119,105,100,116,104,32,61,61,32,50,0,0], "i8", ALLOC_NORMAL);
__str33=allocate([100,115,103,45,62,109,97,114,107,32,33,61,32,39,92,48,39,0,0,0], "i8", ALLOC_NORMAL);
__str32=allocate([95,95,109,97,112,95,107,115,120,49,48,48,49,0,0,0], "i8", ALLOC_NORMAL);
__str31=allocate([95,95,109,97,112,95,99,112,57,52,57,0], "i8", ALLOC_NORMAL);
__str30=allocate([95,99,111,100,101,99,115,95,107,114,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([103,101,116,99,111,100,101,99,0,0,0,0], "i8", ALLOC_NORMAL);
__str29=allocate([95,95,109,97,112,95,103,98,50,51,49,50,0,0,0,0], "i8", ALLOC_NORMAL);
__str28=allocate([95,95,109,97,112,95,103,98,99,111,109,109,111,110,0,0], "i8", ALLOC_NORMAL);
__str27=allocate([95,99,111,100,101,99,115,95,99,110,0,0], "i8", ALLOC_NORMAL);
__str26=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,112,97,105,114,0], "i8", ALLOC_NORMAL);
__str25=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,50,95,101,109,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str24=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,49,95,101,109,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str23=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,101,109,112,0,0], "i8", ALLOC_NORMAL);
__str22=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,50,95,98,109,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str21=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,49,95,98,109,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,98,109,112,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([95,95,109,97,112,95,106,105,115,120,48,50,48,56,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([109,97,112,32,100,97,116,97,32,109,117,115,116,32,98,101,32,97,32,67,97,112,115,117,108,101,46,0], "i8", ALLOC_NORMAL);
__str17=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,50,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([95,95,109,97,112,95,106,105,115,120,99,111,109,109,111,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([95,99,111,100,101,99,115,95,106,112,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([42,108,101,110,103,116,104,32,61,61,32,49,0,0,0,0], "i8", ALLOC_NORMAL);
__str13=allocate([46,46,47,77,111,100,117,108,101,115,47,99,106,107,99,111,100,101,99,115,47,95,99,111,100,101,99,115,95,105,115,111,50,48,50,50,46,99,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([105,115,111,50,48,50,50,95,106,112,95,101,120,116,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([105,115,111,50,48,50,50,95,106,112,95,51,0,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([105,115,111,50,48,50,50,95,106,112,95,50,48,48,52,0], "i8", ALLOC_NORMAL);
__str1=allocate([109,117,108,116,105,98,121,116,101,99,111,100,101,99,46,95,95,109,97,112,95,42,0,0], "i8", ALLOC_NORMAL);
__str=allocate([95,99,111,100,101,99,115,95,105,115,111,50,48,50,50,0], "i8", ALLOC_NORMAL);
__mapping_list=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__codec_list=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
___methods=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
___func___ksx1001_encoder=allocate([107,115,120,49,48,48,49,95,101,110,99,111,100,101,114,0], "i8", ALLOC_NORMAL);
___func___jisx0212_encoder=allocate([106,105,115,120,48,50,49,50,95,101,110,99,111,100,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
___func___jisx0208_encoder=allocate([106,105,115,120,48,50,48,56,95,101,110,99,111,100,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
___func___iso2022_encode=allocate([105,115,111,50,48,50,50,95,101,110,99,111,100,101,0,0], "i8", ALLOC_NORMAL);
___func___iso2022_decode=allocate([105,115,111,50,48,50,50,95,100,101,99,111,100,101,0,0], "i8", ALLOC_NORMAL);
___func___gb2312_encoder=allocate([103,98,50,51,49,50,95,101,110,99,111,100,101,114,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_mapping_list)>>2)]=((__mapping_list)|0);
HEAP32[(((_iso2022_kr_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 38);
HEAP32[(((_iso2022_kr_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 66);
HEAP32[(((_iso2022_kr_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 50);
HEAP32[(((_iso2022_kr_config)+(4))>>2)]=((_iso2022_kr_designations)|0);
HEAP32[(((_iso2022_jp_ext_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_ext_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_ext_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_ext_designations)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 68);
HEAP32[(((_iso2022_jp_ext_designations)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 40);
HEAP32[(((_iso2022_jp_ext_designations)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_iso2022_jp_ext_designations)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((_iso2022_jp_ext_designations)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 72);
HEAP32[(((_iso2022_jp_ext_designations)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((_iso2022_jp_ext_designations)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 48);
HEAP32[(((_iso2022_jp_ext_designations)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_ext_designations)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_ext_designations)+(76))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_ext_config)+(4))>>2)]=((_iso2022_jp_ext_designations)|0);
HEAP32[(((_iso2022_jp_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_designations)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((_iso2022_jp_designations)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 72);
HEAP32[(((_iso2022_jp_designations)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_designations)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_designations)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_config)+(4))>>2)]=((_iso2022_jp_designations)|0);
HEAP32[(((_iso2022_jp_3_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_iso2022_jp_3_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((_iso2022_jp_3_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 30);
HEAP32[(((_iso2022_jp_3_designations)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_3_designations)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_3_designations)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_3_designations)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_iso2022_jp_3_designations)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((_iso2022_jp_3_designations)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 52);
HEAP32[(((_iso2022_jp_3_designations)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_iso2022_jp_3_designations)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 18);
HEAP32[(((_iso2022_jp_3_designations)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((_iso2022_jp_3_config)+(4))>>2)]=((_iso2022_jp_3_designations)|0);
HEAP32[(((_iso2022_jp_2_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_2_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_2_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_2_designations)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 68);
HEAP32[(((_iso2022_jp_2_designations)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 40);
HEAP32[(((_iso2022_jp_2_designations)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_iso2022_jp_2_designations)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 38);
HEAP32[(((_iso2022_jp_2_designations)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 66);
HEAP32[(((_iso2022_jp_2_designations)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 50);
HEAP32[(((_iso2022_jp_2_designations)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 46);
HEAP32[(((_iso2022_jp_2_designations)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 64);
HEAP32[(((_iso2022_jp_2_designations)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 32);
HEAP32[(((_iso2022_jp_2_designations)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((_iso2022_jp_2_designations)+(76))>>2)]=(FUNCTION_TABLE_OFFSET + 72);
HEAP32[(((_iso2022_jp_2_designations)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_2_designations)+(88))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_2_designations)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_2_designations)+(104))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((_iso2022_jp_2_designations)+(108))>>2)]=(FUNCTION_TABLE_OFFSET + 36);
HEAP32[(((_iso2022_jp_2_designations)+(120))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((_iso2022_jp_2_designations)+(124))>>2)]=(FUNCTION_TABLE_OFFSET + 36);
HEAP32[(((_iso2022_jp_2_config)+(4))>>2)]=((_iso2022_jp_2_designations)|0);
HEAP32[(((_iso2022_jp_2004_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_iso2022_jp_2004_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 60);
HEAP32[(((_iso2022_jp_2004_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
HEAP32[(((_iso2022_jp_2004_designations)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_2004_designations)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_2004_designations)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_2004_designations)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_iso2022_jp_2004_designations)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 60);
HEAP32[(((_iso2022_jp_2004_designations)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 34);
HEAP32[(((_iso2022_jp_2004_designations)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_iso2022_jp_2004_designations)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
HEAP32[(((_iso2022_jp_2004_designations)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((_iso2022_jp_2004_config)+(4))>>2)]=((_iso2022_jp_2004_designations)|0);
HEAP32[(((_iso2022_jp_1_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_1_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_1_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_1_designations)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 68);
HEAP32[(((_iso2022_jp_1_designations)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 40);
HEAP32[(((_iso2022_jp_1_designations)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_iso2022_jp_1_designations)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((_iso2022_jp_1_designations)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 72);
HEAP32[(((_iso2022_jp_1_designations)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_1_designations)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_1_designations)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_1_config)+(4))>>2)]=((_iso2022_jp_1_designations)|0);
HEAP32[((_codec_list)>>2)]=((__codec_list)|0);
HEAP32[((__mapping_list)>>2)]=((__str2)|0);
HEAP32[((__codec_list)>>2)]=((__str6)|0);
HEAP32[(((__codec_list)+(4))>>2)]=_iso2022_kr_config;
HEAP32[(((__codec_list)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(36))>>2)]=((__str7)|0);
HEAP32[(((__codec_list)+(40))>>2)]=_iso2022_jp_config;
HEAP32[(((__codec_list)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(64))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(72))>>2)]=((__str8)|0);
HEAP32[(((__codec_list)+(76))>>2)]=_iso2022_jp_1_config;
HEAP32[(((__codec_list)+(80))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(88))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(96))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(104))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(108))>>2)]=((__str9)|0);
HEAP32[(((__codec_list)+(112))>>2)]=_iso2022_jp_2_config;
HEAP32[(((__codec_list)+(116))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(120))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(124))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(128))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(132))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(136))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(140))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(144))>>2)]=((__str10)|0);
HEAP32[(((__codec_list)+(148))>>2)]=_iso2022_jp_2004_config;
HEAP32[(((__codec_list)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(164))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(168))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(172))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(176))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(180))>>2)]=((__str11)|0);
HEAP32[(((__codec_list)+(184))>>2)]=_iso2022_jp_3_config;
HEAP32[(((__codec_list)+(188))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(192))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(196))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(200))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(204))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(208))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(212))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(216))>>2)]=((__str12)|0);
HEAP32[(((__codec_list)+(220))>>2)]=_iso2022_jp_ext_config;
HEAP32[(((__codec_list)+(224))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(228))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(232))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(236))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(240))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(244))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(248))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(252))>>2)]=((__str2)|0);
HEAP32[((___methods)>>2)]=((__str3)|0);
HEAP32[(((___methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 62);
HEAP32[(((___methods)+(12))>>2)]=((__str2)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_jisx0212_encoder,0,_iso2022_decode_reset,0,_jisx0201_k_decoder,0,_jisx0213_2000_1_decoder,0,_jisx0213_2004_1_encoder_paironly
,0,_jisx0213_2004_2_encoder,0,_jisx0213_init,0,_iso2022_encode,0,_jisx0213_2000_2_decoder,0,_iso2022_encode_reset
,0,_jisx0213_2004_2_decoder,0,_jisx0213_2000_2_encoder,0,_dummy_decoder,0,_jisx0208_init,0,_jisx0213_2000_1_encoder_paironly
,0,_gb2312_encoder,0,_jisx0213_2004_1_encoder,0,_dummy_encoder,0,_ksx1001_init,0,_jisx0212_decoder
,0,_jisx0201_r_decoder,0,_jisx0208_encoder,0,_gb2312_init,0,_jisx0201_k_encoder,0,_ksx1001_encoder
,0,_jisx0213_2000_1_encoder,0,_iso2022_codec_init,0,_iso2022_decode_init,0,_jisx0208_decoder,0,_jisx0213_2004_1_decoder
,0,_getcodec,0,_gb2312_decoder,0,_ksx1001_decoder,0,_jisx0212_init,0,_iso2022_decode,0,_jisx0201_r_encoder,0,_iso2022_encode_init,0]);
// EMSCRIPTEN_START_FUNCS
function _init_codecs_iso2022() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $m;
      var $1=_Py_InitModule4(((__str)|0), ((___methods)|0), 0, 0, 1013);
      $m=$1;
      var $2=$m;
      var $3=(($2)|(0))!=0;
      if ($3) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $5=$m;
      var $6=_register_maps($5);
      label = 3; break;
    case 3: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
Module["_init_codecs_iso2022"] = _init_codecs_iso2022;
function _register_maps($module) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 256)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $h;
      var $mhname=__stackBase__;
      var $r;
      $2=$module;
      var $3=HEAP32[((_mapping_list)>>2)];
      $h=$3;
      label = 2; break;
    case 2: 
      var $5=$h;
      var $6=(($5)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|0);
      var $9=HEAP8[($8)];
      var $10=(($9 << 24) >> 24);
      var $11=(($10)|(0))!=0;
      if ($11) { label = 3; break; } else { label = 7; break; }
    case 3: 
      var $13=$mhname;
      _memset($13, 0, 256);
      var $14=$13;
      var $15=(($14)|0);
      HEAP8[($15)]=95;
      var $16=(($14+1)|0);
      HEAP8[($16)]=95;
      var $17=(($14+2)|0);
      HEAP8[($17)]=109;
      var $18=(($14+3)|0);
      HEAP8[($18)]=97;
      var $19=(($14+4)|0);
      HEAP8[($19)]=112;
      var $20=(($14+5)|0);
      HEAP8[($20)]=95;
      var $21=(($mhname)|0);
      var $22=(($21+7)|0);
      var $23=((($22)-(1))|0);
      var $24=$h;
      var $25=(($24)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=_strcpy($23, $26);
      var $28=$2;
      var $29=(($mhname)|0);
      var $30=$h;
      var $31=$30;
      var $32=_PyCapsule_New($31, ((__str1)|0), 0);
      var $33=_PyModule_AddObject($28, $29, $32);
      $r=$33;
      var $34=$r;
      var $35=(($34)|(0))==-1;
      if ($35) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=-1;
      label = 8; break;
    case 5: 
      label = 6; break;
    case 6: 
      var $39=$h;
      var $40=(($39+12)|0);
      $h=$40;
      label = 2; break;
    case 7: 
      $1=0;
      label = 8; break;
    case 8: 
      var $43=$1;
      STACKTOP = __stackBase__;
      return $43;
    default: assert(0, "bad label: " + label);
  }
}
function _getcodec($self, $encoding) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $codecobj;
      var $r;
      var $cofunc;
      var $codec;
      var $enc;
      $2=$self;
      $3=$encoding;
      var $4=$3;
      var $5=(($4+4)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6+84)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=$8 & 134217728;
      var $10=(($9)|(0))!=0;
      if ($10) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $12=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($12, ((__str4)|0));
      $1=0;
      label = 21; break;
    case 3: 
      var $14=_getmultibytecodec();
      $cofunc=$14;
      var $15=$cofunc;
      var $16=(($15)|(0))==0;
      if ($16) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 21; break;
    case 5: 
      var $19=$3;
      var $20=$19;
      var $21=(($20+20)|0);
      var $22=(($21)|0);
      $enc=$22;
      var $23=HEAP32[((_codec_list)>>2)];
      $codec=$23;
      label = 6; break;
    case 6: 
      var $25=$codec;
      var $26=(($25)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=(($27)|0);
      var $29=HEAP8[($28)];
      var $30=(($29 << 24) >> 24)!=0;
      if ($30) { label = 7; break; } else { label = 11; break; }
    case 7: 
      var $32=$codec;
      var $33=(($32)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=$enc;
      var $36=_strcmp($34, $35);
      var $37=(($36)|(0))==0;
      if ($37) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 11; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $41=$codec;
      var $42=(($41+36)|0);
      $codec=$42;
      label = 6; break;
    case 11: 
      var $44=$codec;
      var $45=(($44)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=(($46)|0);
      var $48=HEAP8[($47)];
      var $49=(($48 << 24) >> 24);
      var $50=(($49)|(0))==0;
      if ($50) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $52=HEAP32[((_PyExc_LookupError)>>2)];
      _PyErr_SetString($52, ((__str5)|0));
      $1=0;
      label = 21; break;
    case 13: 
      var $54=$codec;
      var $55=$54;
      var $56=_PyCapsule_New($55, ((__str1)|0), 0);
      $codecobj=$56;
      var $57=$codecobj;
      var $58=(($57)|(0))==0;
      if ($58) { label = 14; break; } else { label = 15; break; }
    case 14: 
      $1=0;
      label = 21; break;
    case 15: 
      var $61=$cofunc;
      var $62=$codecobj;
      var $63=_PyObject_CallFunctionObjArgs($61, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$62,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $r=$63;
      label = 16; break;
    case 16: 
      var $65=$codecobj;
      var $66=(($65)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=((($67)-(1))|0);
      HEAP32[(($66)>>2)]=$68;
      var $69=(($68)|(0))!=0;
      if ($69) { label = 17; break; } else { label = 18; break; }
    case 17: 
      label = 19; break;
    case 18: 
      var $72=$codecobj;
      var $73=(($72+4)|0);
      var $74=HEAP32[(($73)>>2)];
      var $75=(($74+24)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=$codecobj;
      FUNCTION_TABLE[$76]($77);
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $80=$r;
      $1=$80;
      label = 21; break;
    case 21: 
      var $82=$1;
      STACKTOP = __stackBase__;
      return $82;
    default: assert(0, "bad label: " + label);
  }
}
function _getmultibytecodec() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $mod;
      var $2=HEAP32[((_getmultibytecodec_cofunc)>>2)];
      var $3=(($2)|(0))==0;
      if ($3) { label = 2; break; } else { label = 10; break; }
    case 2: 
      var $5=_PyImport_ImportModuleNoBlock(((__str35)|0));
      $mod=$5;
      var $6=$mod;
      var $7=(($6)|(0))==0;
      if ($7) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 11; break;
    case 4: 
      var $10=$mod;
      var $11=_PyObject_GetAttrString($10, ((__str36)|0));
      HEAP32[((_getmultibytecodec_cofunc)>>2)]=$11;
      label = 5; break;
    case 5: 
      var $13=$mod;
      var $14=(($13)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=((($15)-(1))|0);
      HEAP32[(($14)>>2)]=$16;
      var $17=(($16)|(0))!=0;
      if ($17) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      var $20=$mod;
      var $21=(($20+4)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=(($22+24)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$mod;
      FUNCTION_TABLE[$24]($25);
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $29=HEAP32[((_getmultibytecodec_cofunc)>>2)];
      $1=$29;
      label = 11; break;
    case 11: 
      var $31=$1;
      return $31;
    default: assert(0, "bad label: " + label);
  }
}
function _iso2022_codec_init($config) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $desig;
      $2=$config;
      var $3=$2;
      var $4=$3;
      var $5=(($4+4)|0);
      var $6=HEAP32[(($5)>>2)];
      $desig=$6;
      var $7=$2;
      var $8=$7;
      var $9=(($8+4)|0);
      var $10=HEAP32[(($9)>>2)];
      $desig=$10;
      label = 2; break;
    case 2: 
      var $12=$desig;
      var $13=(($12)|0);
      var $14=HEAP8[($13)];
      var $15=(($14 << 24) >> 24)!=0;
      if ($15) { label = 3; break; } else { label = 8; break; }
    case 3: 
      var $17=$desig;
      var $18=(($17+4)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=(($19)|(0))!=0;
      if ($20) { label = 4; break; } else { label = 6; break; }
    case 4: 
      var $22=$desig;
      var $23=(($22+4)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=FUNCTION_TABLE[$24]();
      var $26=(($25)|(0))!=0;
      if ($26) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=-1;
      label = 9; break;
    case 6: 
      label = 7; break;
    case 7: 
      var $30=$desig;
      var $31=(($30+16)|0);
      $desig=$31;
      label = 2; break;
    case 8: 
      $1=0;
      label = 9; break;
    case 9: 
      var $34=$1;
      return $34;
    default: assert(0, "bad label: " + label);
  }
}
function _iso2022_encode_init($state, $config) {
  var label = 0;
  var $1;
  var $2;
  $1=$state;
  $2=$config;
  var $3=$1;
  var $4=$3;
  var $5=(($4+4)|0);
  HEAP8[($5)]=0;
  var $6=$1;
  var $7=$6;
  var $8=(($7)|0);
  HEAP8[($8)]=66;
  var $9=$1;
  var $10=$9;
  var $11=(($10+1)|0);
  HEAP8[($11)]=66;
  return 0;
}
function _iso2022_encode_reset($state, $config, $outbuf, $outleft) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      $2=$state;
      $3=$config;
      $4=$outbuf;
      $5=$outleft;
      var $6=$2;
      var $7=$6;
      var $8=(($7+4)|0);
      var $9=HEAP8[($8)];
      var $10=(($9)&(255));
      var $11=$10 & 1;
      var $12=(($11)|(0))!=0;
      if ($12) { label = 2; break; } else { label = 5; break; }
    case 2: 
      var $14=$5;
      var $15=(($14)|(0)) < 1;
      if ($15) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=-1;
      label = 10; break;
    case 4: 
      var $18=$4;
      var $19=HEAP32[(($18)>>2)];
      var $20=(($19)|0);
      HEAP8[($20)]=15;
      var $21=$4;
      var $22=HEAP32[(($21)>>2)];
      var $23=(($22+1)|0);
      HEAP32[(($21)>>2)]=$23;
      var $24=$5;
      var $25=((($24)-(1))|0);
      $5=$25;
      var $26=$2;
      var $27=$26;
      var $28=(($27+4)|0);
      var $29=HEAP8[($28)];
      var $30=(($29)&(255));
      var $31=$30 & -2;
      var $32=(($31) & 255);
      HEAP8[($28)]=$32;
      label = 5; break;
    case 5: 
      var $34=$2;
      var $35=$34;
      var $36=(($35)|0);
      var $37=HEAP8[($36)];
      var $38=(($37)&(255));
      var $39=(($38)|(0))!=66;
      if ($39) { label = 6; break; } else { label = 9; break; }
    case 6: 
      var $41=$5;
      var $42=(($41)|(0)) < 3;
      if ($42) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=-1;
      label = 10; break;
    case 8: 
      var $45=$4;
      var $46=HEAP32[(($45)>>2)];
      var $47=(($46)|0);
      HEAP8[($47)]=27;
      var $48=$4;
      var $49=HEAP32[(($48)>>2)];
      var $50=(($49+1)|0);
      HEAP8[($50)]=40;
      var $51=$4;
      var $52=HEAP32[(($51)>>2)];
      var $53=(($52+2)|0);
      HEAP8[($53)]=66;
      var $54=$4;
      var $55=HEAP32[(($54)>>2)];
      var $56=(($55+3)|0);
      HEAP32[(($54)>>2)]=$56;
      var $57=$5;
      var $58=((($57)-(3))|0);
      $5=$58;
      var $59=$2;
      var $60=$59;
      var $61=(($60)|0);
      HEAP8[($61)]=66;
      label = 9; break;
    case 9: 
      $1=0;
      label = 10; break;
    case 10: 
      var $64=$1;
      return $64;
    default: assert(0, "bad label: " + label);
  }
}
function _iso2022_encode($state, $config, $inbuf, $inleft, $outbuf, $outleft, $flags) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
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
      var $8;
      var $dsg;
      var $encoded;
      var $c=__stackBase__;
      var $insize;
      var $length=(__stackBase__)+(4);
      var $u4in=(__stackBase__)+(8);
      $2=$state;
      $3=$config;
      $4=$inbuf;
      $5=$inleft;
      $6=$outbuf;
      $7=$outleft;
      $8=$flags;
      label = 2; break;
    case 2: 
      var $10=$5;
      var $11=(($10)|(0)) > 0;
      if ($11) { label = 3; break; } else { label = 89; break; }
    case 3: 
      var $13=$4;
      var $14=HEAP32[(($13)>>2)];
      var $15=HEAP16[(($14)>>1)];
      var $16=(($15)&(65535));
      HEAP32[(($c)>>2)]=$16;
      var $17=HEAP32[(($c)>>2)];
      var $18=(($17)>>>(0)) < 128;
      if ($18) { label = 4; break; } else { label = 15; break; }
    case 4: 
      var $20=$2;
      var $21=$20;
      var $22=(($21)|0);
      var $23=HEAP8[($22)];
      var $24=(($23)&(255));
      var $25=(($24)|(0))!=66;
      if ($25) { label = 5; break; } else { label = 8; break; }
    case 5: 
      var $27=$7;
      var $28=(($27)|(0)) < 3;
      if ($28) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=-1;
      label = 90; break;
    case 7: 
      var $31=$6;
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32)|0);
      HEAP8[($33)]=27;
      var $34=$6;
      var $35=HEAP32[(($34)>>2)];
      var $36=(($35+1)|0);
      HEAP8[($36)]=40;
      var $37=$6;
      var $38=HEAP32[(($37)>>2)];
      var $39=(($38+2)|0);
      HEAP8[($39)]=66;
      var $40=$2;
      var $41=$40;
      var $42=(($41)|0);
      HEAP8[($42)]=66;
      var $43=$6;
      var $44=HEAP32[(($43)>>2)];
      var $45=(($44+3)|0);
      HEAP32[(($43)>>2)]=$45;
      var $46=$7;
      var $47=((($46)-(3))|0);
      $7=$47;
      label = 8; break;
    case 8: 
      var $49=$2;
      var $50=$49;
      var $51=(($50+4)|0);
      var $52=HEAP8[($51)];
      var $53=(($52)&(255));
      var $54=$53 & 1;
      var $55=(($54)|(0))!=0;
      if ($55) { label = 9; break; } else { label = 12; break; }
    case 9: 
      var $57=$7;
      var $58=(($57)|(0)) < 1;
      if ($58) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=-1;
      label = 90; break;
    case 11: 
      var $61=$6;
      var $62=HEAP32[(($61)>>2)];
      var $63=(($62)|0);
      HEAP8[($63)]=15;
      var $64=$2;
      var $65=$64;
      var $66=(($65+4)|0);
      var $67=HEAP8[($66)];
      var $68=(($67)&(255));
      var $69=$68 & -2;
      var $70=(($69) & 255);
      HEAP8[($66)]=$70;
      var $71=$6;
      var $72=HEAP32[(($71)>>2)];
      var $73=(($72+1)|0);
      HEAP32[(($71)>>2)]=$73;
      var $74=$7;
      var $75=((($74)-(1))|0);
      $7=$75;
      label = 12; break;
    case 12: 
      var $77=$7;
      var $78=(($77)|(0)) < 1;
      if ($78) { label = 13; break; } else { label = 14; break; }
    case 13: 
      $1=-1;
      label = 90; break;
    case 14: 
      var $81=HEAP32[(($c)>>2)];
      var $82=(($81) & 255);
      var $83=$6;
      var $84=HEAP32[(($83)>>2)];
      var $85=(($84)|0);
      HEAP8[($85)]=$82;
      var $86=$4;
      var $87=HEAP32[(($86)>>2)];
      var $88=(($87+2)|0);
      HEAP32[(($86)>>2)]=$88;
      var $89=$5;
      var $90=((($89)-(1))|0);
      $5=$90;
      var $91=$6;
      var $92=HEAP32[(($91)>>2)];
      var $93=(($92+1)|0);
      HEAP32[(($91)>>2)]=$93;
      var $94=$7;
      var $95=((($94)-(1))|0);
      $7=$95;
      label = 2; break;
    case 15: 
      var $97=HEAP32[(($c)>>2)];
      var $98=$97 >>> 10;
      var $99=(($98)|(0))==54;
      if ($99) { label = 16; break; } else { label = 21; break; }
    case 16: 
      var $101=$5;
      var $102=(($101)|(0)) < 2;
      if ($102) { label = 17; break; } else { label = 18; break; }
    case 17: 
      $1=-2;
      label = 90; break;
    case 18: 
      var $105=$4;
      var $106=HEAP32[(($105)>>2)];
      var $107=(($106+2)|0);
      var $108=HEAP16[(($107)>>1)];
      var $109=(($108)&(65535));
      var $110=$109 >> 10;
      var $111=(($110)|(0))==55;
      if ($111) { label = 19; break; } else { label = 20; break; }
    case 19: 
      var $113=HEAP32[(($c)>>2)];
      var $114=((($113)-(55296))|0);
      var $115=$114 << 10;
      var $116=((($115)+(65536))|0);
      var $117=$4;
      var $118=HEAP32[(($117)>>2)];
      var $119=(($118+2)|0);
      var $120=HEAP16[(($119)>>1)];
      var $121=(($120)&(65535));
      var $122=((($121)-(56320))|0);
      var $123=((($116)+($122))|0);
      HEAP32[(($c)>>2)]=$123;
      label = 20; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $126=HEAP32[(($c)>>2)];
      var $127=(($126)>>>(0)) > 65535;
      var $128=$127 ? 2 : 1;
      $insize=$128;
      $encoded=-1;
      var $129=$3;
      var $130=$129;
      var $131=(($130+4)|0);
      var $132=HEAP32[(($131)>>2)];
      $dsg=$132;
      label = 22; break;
    case 22: 
      var $134=$dsg;
      var $135=(($134)|0);
      var $136=HEAP8[($135)];
      var $137=(($136 << 24) >> 24)!=0;
      if ($137) { label = 23; break; } else { label = 40; break; }
    case 23: 
      HEAP32[(($length)>>2)]=1;
      var $139=$dsg;
      var $140=(($139+12)|0);
      var $141=HEAP32[(($140)>>2)];
      var $142=FUNCTION_TABLE[$141]($c, $length);
      $encoded=$142;
      var $143=$encoded;
      var $144=(($143)&(65535));
      var $145=(($144)|(0))==65534;
      if ($145) { label = 24; break; } else { label = 35; break; }
    case 24: 
      var $147=$5;
      var $148=(($147)|(0)) < 2;
      if ($148) { label = 25; break; } else { label = 28; break; }
    case 25: 
      var $150=$8;
      var $151=$150 & 1;
      var $152=(($151)|(0))!=0;
      if ($152) { label = 27; break; } else { label = 26; break; }
    case 26: 
      $1=-2;
      label = 90; break;
    case 27: 
      HEAP32[(($length)>>2)]=-1;
      label = 29; break;
    case 28: 
      HEAP32[(($length)>>2)]=2;
      label = 29; break;
    case 29: 
      var $157=HEAP32[(($length)>>2)];
      var $158=(($157)|(0))==2;
      if ($158) { label = 30; break; } else { label = 31; break; }
    case 30: 
      var $160=$4;
      var $161=HEAP32[(($160)>>2)];
      var $162=(($161)|0);
      var $163=HEAP16[(($162)>>1)];
      var $164=(($163)&(65535));
      var $165=(($u4in)|0);
      HEAP32[(($165)>>2)]=$164;
      var $166=$4;
      var $167=HEAP32[(($166)>>2)];
      var $168=(($167+2)|0);
      var $169=HEAP16[(($168)>>1)];
      var $170=(($169)&(65535));
      var $171=(($u4in+4)|0);
      HEAP32[(($171)>>2)]=$170;
      var $172=$dsg;
      var $173=(($172+12)|0);
      var $174=HEAP32[(($173)>>2)];
      var $175=(($u4in)|0);
      var $176=FUNCTION_TABLE[$174]($175, $length);
      $encoded=$176;
      label = 32; break;
    case 31: 
      var $178=$dsg;
      var $179=(($178+12)|0);
      var $180=HEAP32[(($179)>>2)];
      var $181=FUNCTION_TABLE[$180]($c, $length);
      $encoded=$181;
      label = 32; break;
    case 32: 
      var $183=$encoded;
      var $184=(($183)&(65535));
      var $185=(($184)|(0))!=65535;
      if ($185) { label = 33; break; } else { label = 34; break; }
    case 33: 
      var $187=HEAP32[(($length)>>2)];
      $insize=$187;
      label = 40; break;
    case 34: 
      label = 38; break;
    case 35: 
      var $190=$encoded;
      var $191=(($190)&(65535));
      var $192=(($191)|(0))!=65535;
      if ($192) { label = 36; break; } else { label = 37; break; }
    case 36: 
      label = 40; break;
    case 37: 
      label = 38; break;
    case 38: 
      label = 39; break;
    case 39: 
      var $197=$dsg;
      var $198=(($197+16)|0);
      $dsg=$198;
      label = 22; break;
    case 40: 
      var $200=$dsg;
      var $201=(($200)|0);
      var $202=HEAP8[($201)];
      var $203=(($202 << 24) >> 24)!=0;
      if ($203) { label = 42; break; } else { label = 41; break; }
    case 41: 
      $1=1;
      label = 90; break;
    case 42: 
      var $206=$dsg;
      var $207=(($206+2)|0);
      var $208=HEAP8[($207)];
      var $209=(($208)&(255));
      var $210=(($209)|(0))==1;
      if ($210) { label = 44; break; } else { label = 43; break; }
    case 43: 
      var $212=$dsg;
      var $213=(($212+2)|0);
      var $214=HEAP8[($213)];
      var $215=(($214)&(255));
      var $216=(($215)|(0))==2;
      if ($216) { label = 44; break; } else { label = 45; break; }
    case 44: 
      label = 46; break;
    case 45: 
      ___assert_func(((__str13)|0), 219, ((___func___iso2022_encode)|0), ((__str34)|0));
      throw "Reached an unreachable!";
      label = 46; break;
    case 46: 
      var $221=$dsg;
      var $222=(($221+1)|0);
      var $223=HEAP8[($222)];
      var $224=(($223)&(255));
      if ((($224)|(0))==0) {
        label = 47; break;
      }
      else if ((($224)|(0))==1) {
        label = 66; break;
      }
      else {
      label = 80; break;
      }
    case 47: 
      var $226=$2;
      var $227=$226;
      var $228=(($227+4)|0);
      var $229=HEAP8[($228)];
      var $230=(($229)&(255));
      var $231=$230 & 1;
      var $232=(($231)|(0))!=0;
      if ($232) { label = 48; break; } else { label = 51; break; }
    case 48: 
      var $234=$7;
      var $235=(($234)|(0)) < 1;
      if ($235) { label = 49; break; } else { label = 50; break; }
    case 49: 
      $1=-1;
      label = 90; break;
    case 50: 
      var $238=$6;
      var $239=HEAP32[(($238)>>2)];
      var $240=(($239)|0);
      HEAP8[($240)]=15;
      var $241=$2;
      var $242=$241;
      var $243=(($242+4)|0);
      var $244=HEAP8[($243)];
      var $245=(($244)&(255));
      var $246=$245 & -2;
      var $247=(($246) & 255);
      HEAP8[($243)]=$247;
      var $248=$6;
      var $249=HEAP32[(($248)>>2)];
      var $250=(($249+1)|0);
      HEAP32[(($248)>>2)]=$250;
      var $251=$7;
      var $252=((($251)-(1))|0);
      $7=$252;
      label = 51; break;
    case 51: 
      var $254=$2;
      var $255=$254;
      var $256=(($255)|0);
      var $257=HEAP8[($256)];
      var $258=(($257)&(255));
      var $259=$dsg;
      var $260=(($259)|0);
      var $261=HEAP8[($260)];
      var $262=(($261)&(255));
      var $263=(($258)|(0))!=(($262)|(0));
      if ($263) { label = 52; break; } else { label = 65; break; }
    case 52: 
      var $265=$dsg;
      var $266=(($265+2)|0);
      var $267=HEAP8[($266)];
      var $268=(($267)&(255));
      var $269=(($268)|(0))==1;
      if ($269) { label = 53; break; } else { label = 56; break; }
    case 53: 
      var $271=$7;
      var $272=(($271)|(0)) < 3;
      if ($272) { label = 54; break; } else { label = 55; break; }
    case 54: 
      $1=-1;
      label = 90; break;
    case 55: 
      var $275=$6;
      var $276=HEAP32[(($275)>>2)];
      var $277=(($276)|0);
      HEAP8[($277)]=27;
      var $278=$6;
      var $279=HEAP32[(($278)>>2)];
      var $280=(($279+1)|0);
      HEAP8[($280)]=40;
      var $281=$dsg;
      var $282=(($281)|0);
      var $283=HEAP8[($282)];
      var $284=(($283)&(255));
      var $285=$284 & 127;
      var $286=(($285) & 255);
      var $287=$6;
      var $288=HEAP32[(($287)>>2)];
      var $289=(($288+2)|0);
      HEAP8[($289)]=$286;
      var $290=$dsg;
      var $291=(($290)|0);
      var $292=HEAP8[($291)];
      var $293=$2;
      var $294=$293;
      var $295=(($294)|0);
      HEAP8[($295)]=$292;
      var $296=$6;
      var $297=HEAP32[(($296)>>2)];
      var $298=(($297+3)|0);
      HEAP32[(($296)>>2)]=$298;
      var $299=$7;
      var $300=((($299)-(3))|0);
      $7=$300;
      label = 64; break;
    case 56: 
      var $302=$dsg;
      var $303=(($302)|0);
      var $304=HEAP8[($303)];
      var $305=(($304)&(255));
      var $306=(($305)|(0))==194;
      if ($306) { label = 57; break; } else { label = 60; break; }
    case 57: 
      var $308=$7;
      var $309=(($308)|(0)) < 3;
      if ($309) { label = 58; break; } else { label = 59; break; }
    case 58: 
      $1=-1;
      label = 90; break;
    case 59: 
      var $312=$6;
      var $313=HEAP32[(($312)>>2)];
      var $314=(($313)|0);
      HEAP8[($314)]=27;
      var $315=$6;
      var $316=HEAP32[(($315)>>2)];
      var $317=(($316+1)|0);
      HEAP8[($317)]=36;
      var $318=$dsg;
      var $319=(($318)|0);
      var $320=HEAP8[($319)];
      var $321=(($320)&(255));
      var $322=$321 & 127;
      var $323=(($322) & 255);
      var $324=$6;
      var $325=HEAP32[(($324)>>2)];
      var $326=(($325+2)|0);
      HEAP8[($326)]=$323;
      var $327=$dsg;
      var $328=(($327)|0);
      var $329=HEAP8[($328)];
      var $330=$2;
      var $331=$330;
      var $332=(($331)|0);
      HEAP8[($332)]=$329;
      var $333=$6;
      var $334=HEAP32[(($333)>>2)];
      var $335=(($334+3)|0);
      HEAP32[(($333)>>2)]=$335;
      var $336=$7;
      var $337=((($336)-(3))|0);
      $7=$337;
      label = 63; break;
    case 60: 
      var $339=$7;
      var $340=(($339)|(0)) < 4;
      if ($340) { label = 61; break; } else { label = 62; break; }
    case 61: 
      $1=-1;
      label = 90; break;
    case 62: 
      var $343=$6;
      var $344=HEAP32[(($343)>>2)];
      var $345=(($344)|0);
      HEAP8[($345)]=27;
      var $346=$6;
      var $347=HEAP32[(($346)>>2)];
      var $348=(($347+1)|0);
      HEAP8[($348)]=36;
      var $349=$6;
      var $350=HEAP32[(($349)>>2)];
      var $351=(($350+2)|0);
      HEAP8[($351)]=40;
      var $352=$dsg;
      var $353=(($352)|0);
      var $354=HEAP8[($353)];
      var $355=(($354)&(255));
      var $356=$355 & 127;
      var $357=(($356) & 255);
      var $358=$6;
      var $359=HEAP32[(($358)>>2)];
      var $360=(($359+3)|0);
      HEAP8[($360)]=$357;
      var $361=$dsg;
      var $362=(($361)|0);
      var $363=HEAP8[($362)];
      var $364=$2;
      var $365=$364;
      var $366=(($365)|0);
      HEAP8[($366)]=$363;
      var $367=$6;
      var $368=HEAP32[(($367)>>2)];
      var $369=(($368+4)|0);
      HEAP32[(($367)>>2)]=$369;
      var $370=$7;
      var $371=((($370)-(4))|0);
      $7=$371;
      label = 63; break;
    case 63: 
      label = 64; break;
    case 64: 
      label = 65; break;
    case 65: 
      label = 81; break;
    case 66: 
      var $376=$2;
      var $377=$376;
      var $378=(($377+1)|0);
      var $379=HEAP8[($378)];
      var $380=(($379)&(255));
      var $381=$dsg;
      var $382=(($381)|0);
      var $383=HEAP8[($382)];
      var $384=(($383)&(255));
      var $385=(($380)|(0))!=(($384)|(0));
      if ($385) { label = 67; break; } else { label = 75; break; }
    case 67: 
      var $387=$dsg;
      var $388=(($387+2)|0);
      var $389=HEAP8[($388)];
      var $390=(($389)&(255));
      var $391=(($390)|(0))==1;
      if ($391) { label = 68; break; } else { label = 71; break; }
    case 68: 
      var $393=$7;
      var $394=(($393)|(0)) < 3;
      if ($394) { label = 69; break; } else { label = 70; break; }
    case 69: 
      $1=-1;
      label = 90; break;
    case 70: 
      var $397=$6;
      var $398=HEAP32[(($397)>>2)];
      var $399=(($398)|0);
      HEAP8[($399)]=27;
      var $400=$6;
      var $401=HEAP32[(($400)>>2)];
      var $402=(($401+1)|0);
      HEAP8[($402)]=41;
      var $403=$dsg;
      var $404=(($403)|0);
      var $405=HEAP8[($404)];
      var $406=(($405)&(255));
      var $407=$406 & 127;
      var $408=(($407) & 255);
      var $409=$6;
      var $410=HEAP32[(($409)>>2)];
      var $411=(($410+2)|0);
      HEAP8[($411)]=$408;
      var $412=$dsg;
      var $413=(($412)|0);
      var $414=HEAP8[($413)];
      var $415=$2;
      var $416=$415;
      var $417=(($416+1)|0);
      HEAP8[($417)]=$414;
      var $418=$6;
      var $419=HEAP32[(($418)>>2)];
      var $420=(($419+3)|0);
      HEAP32[(($418)>>2)]=$420;
      var $421=$7;
      var $422=((($421)-(3))|0);
      $7=$422;
      label = 74; break;
    case 71: 
      var $424=$7;
      var $425=(($424)|(0)) < 4;
      if ($425) { label = 72; break; } else { label = 73; break; }
    case 72: 
      $1=-1;
      label = 90; break;
    case 73: 
      var $428=$6;
      var $429=HEAP32[(($428)>>2)];
      var $430=(($429)|0);
      HEAP8[($430)]=27;
      var $431=$6;
      var $432=HEAP32[(($431)>>2)];
      var $433=(($432+1)|0);
      HEAP8[($433)]=36;
      var $434=$6;
      var $435=HEAP32[(($434)>>2)];
      var $436=(($435+2)|0);
      HEAP8[($436)]=41;
      var $437=$dsg;
      var $438=(($437)|0);
      var $439=HEAP8[($438)];
      var $440=(($439)&(255));
      var $441=$440 & 127;
      var $442=(($441) & 255);
      var $443=$6;
      var $444=HEAP32[(($443)>>2)];
      var $445=(($444+3)|0);
      HEAP8[($445)]=$442;
      var $446=$dsg;
      var $447=(($446)|0);
      var $448=HEAP8[($447)];
      var $449=$2;
      var $450=$449;
      var $451=(($450+1)|0);
      HEAP8[($451)]=$448;
      var $452=$6;
      var $453=HEAP32[(($452)>>2)];
      var $454=(($453+4)|0);
      HEAP32[(($452)>>2)]=$454;
      var $455=$7;
      var $456=((($455)-(4))|0);
      $7=$456;
      label = 74; break;
    case 74: 
      label = 75; break;
    case 75: 
      var $459=$2;
      var $460=$459;
      var $461=(($460+4)|0);
      var $462=HEAP8[($461)];
      var $463=(($462)&(255));
      var $464=$463 & 1;
      var $465=(($464)|(0))!=0;
      if ($465) { label = 79; break; } else { label = 76; break; }
    case 76: 
      var $467=$7;
      var $468=(($467)|(0)) < 1;
      if ($468) { label = 77; break; } else { label = 78; break; }
    case 77: 
      $1=-1;
      label = 90; break;
    case 78: 
      var $471=$6;
      var $472=HEAP32[(($471)>>2)];
      var $473=(($472)|0);
      HEAP8[($473)]=14;
      var $474=$2;
      var $475=$474;
      var $476=(($475+4)|0);
      var $477=HEAP8[($476)];
      var $478=(($477)&(255));
      var $479=$478 | 1;
      var $480=(($479) & 255);
      HEAP8[($476)]=$480;
      var $481=$6;
      var $482=HEAP32[(($481)>>2)];
      var $483=(($482+1)|0);
      HEAP32[(($481)>>2)]=$483;
      var $484=$7;
      var $485=((($484)-(1))|0);
      $7=$485;
      label = 79; break;
    case 79: 
      label = 81; break;
    case 80: 
      $1=-3;
      label = 90; break;
    case 81: 
      var $489=$dsg;
      var $490=(($489+2)|0);
      var $491=HEAP8[($490)];
      var $492=(($491)&(255));
      var $493=(($492)|(0))==1;
      if ($493) { label = 82; break; } else { label = 85; break; }
    case 82: 
      var $495=$7;
      var $496=(($495)|(0)) < 1;
      if ($496) { label = 83; break; } else { label = 84; break; }
    case 83: 
      $1=-1;
      label = 90; break;
    case 84: 
      var $499=$encoded;
      var $500=(($499) & 255);
      var $501=$6;
      var $502=HEAP32[(($501)>>2)];
      var $503=(($502)|0);
      HEAP8[($503)]=$500;
      var $504=$6;
      var $505=HEAP32[(($504)>>2)];
      var $506=(($505+1)|0);
      HEAP32[(($504)>>2)]=$506;
      var $507=$7;
      var $508=((($507)-(1))|0);
      $7=$508;
      label = 88; break;
    case 85: 
      var $510=$7;
      var $511=(($510)|(0)) < 2;
      if ($511) { label = 86; break; } else { label = 87; break; }
    case 86: 
      $1=-1;
      label = 90; break;
    case 87: 
      var $514=$encoded;
      var $515=(($514)&(65535));
      var $516=$515 >> 8;
      var $517=(($516) & 255);
      var $518=$6;
      var $519=HEAP32[(($518)>>2)];
      var $520=(($519)|0);
      HEAP8[($520)]=$517;
      var $521=$encoded;
      var $522=(($521)&(65535));
      var $523=$522 & 255;
      var $524=(($523) & 255);
      var $525=$6;
      var $526=HEAP32[(($525)>>2)];
      var $527=(($526+1)|0);
      HEAP8[($527)]=$524;
      var $528=$6;
      var $529=HEAP32[(($528)>>2)];
      var $530=(($529+2)|0);
      HEAP32[(($528)>>2)]=$530;
      var $531=$7;
      var $532=((($531)-(2))|0);
      $7=$532;
      label = 88; break;
    case 88: 
      var $534=$insize;
      var $535=$4;
      var $536=HEAP32[(($535)>>2)];
      var $537=(($536+($534<<1))|0);
      HEAP32[(($535)>>2)]=$537;
      var $538=$insize;
      var $539=$5;
      var $540=((($539)-($538))|0);
      $5=$540;
      label = 2; break;
    case 89: 
      $1=0;
      label = 90; break;
    case 90: 
      var $543=$1;
      STACKTOP = __stackBase__;
      return $543;
    default: assert(0, "bad label: " + label);
  }
}
function _iso2022_decode_init($state, $config) {
  var label = 0;
  var $1;
  var $2;
  $1=$state;
  $2=$config;
  var $3=$1;
  var $4=$3;
  var $5=(($4+4)|0);
  HEAP8[($5)]=0;
  var $6=$1;
  var $7=$6;
  var $8=(($7)|0);
  HEAP8[($8)]=66;
  var $9=$1;
  var $10=$9;
  var $11=(($10+1)|0);
  HEAP8[($11)]=66;
  var $12=$1;
  var $13=$12;
  var $14=(($13+2)|0);
  HEAP8[($14)]=66;
  return 0;
}
function _iso2022_decode_reset($state, $config) {
  var label = 0;
  var $1;
  var $2;
  $1=$state;
  $2=$config;
  var $3=$1;
  var $4=$3;
  var $5=(($4)|0);
  HEAP8[($5)]=66;
  var $6=$1;
  var $7=$6;
  var $8=(($7+4)|0);
  var $9=HEAP8[($8)];
  var $10=(($9)&(255));
  var $11=$10 & -2;
  var $12=(($11) & 255);
  HEAP8[($8)]=$12;
  return 0;
}
function _jisx0208_decoder($data) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $u;
      $2=$data;
      var $3=$2;
      var $4=(($3)|0);
      var $5=HEAP8[($4)];
      var $6=(($5)&(255));
      var $7=(($6)|(0))==33;
      if ($7) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $9=$2;
      var $10=(($9+1)|0);
      var $11=HEAP8[($10)];
      var $12=(($11)&(255));
      var $13=(($12)|(0))==64;
      if ($13) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=65340;
      label = 10; break;
    case 4: 
      var $16=$2;
      var $17=(($16)|0);
      var $18=HEAP8[($17)];
      var $19=(($18)&(255));
      var $20=HEAP32[((_jisx0208_decmap)>>2)];
      var $21=(($20+($19<<3))|0);
      var $22=(($21)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23)|(0))!=0;
      if ($24) { label = 5; break; } else { label = 9; break; }
    case 5: 
      var $26=$2;
      var $27=(($26+1)|0);
      var $28=HEAP8[($27)];
      var $29=(($28)&(255));
      var $30=$2;
      var $31=(($30)|0);
      var $32=HEAP8[($31)];
      var $33=(($32)&(255));
      var $34=HEAP32[((_jisx0208_decmap)>>2)];
      var $35=(($34+($33<<3))|0);
      var $36=(($35+4)|0);
      var $37=HEAP8[($36)];
      var $38=(($37)&(255));
      var $39=(($29)|(0)) >= (($38)|(0));
      if ($39) { label = 6; break; } else { label = 9; break; }
    case 6: 
      var $41=$2;
      var $42=(($41+1)|0);
      var $43=HEAP8[($42)];
      var $44=(($43)&(255));
      var $45=$2;
      var $46=(($45)|0);
      var $47=HEAP8[($46)];
      var $48=(($47)&(255));
      var $49=HEAP32[((_jisx0208_decmap)>>2)];
      var $50=(($49+($48<<3))|0);
      var $51=(($50+5)|0);
      var $52=HEAP8[($51)];
      var $53=(($52)&(255));
      var $54=(($44)|(0)) <= (($53)|(0));
      if ($54) { label = 7; break; } else { label = 9; break; }
    case 7: 
      var $56=$2;
      var $57=(($56+1)|0);
      var $58=HEAP8[($57)];
      var $59=(($58)&(255));
      var $60=$2;
      var $61=(($60)|0);
      var $62=HEAP8[($61)];
      var $63=(($62)&(255));
      var $64=HEAP32[((_jisx0208_decmap)>>2)];
      var $65=(($64+($63<<3))|0);
      var $66=(($65+4)|0);
      var $67=HEAP8[($66)];
      var $68=(($67)&(255));
      var $69=((($59)-($68))|0);
      var $70=$2;
      var $71=(($70)|0);
      var $72=HEAP8[($71)];
      var $73=(($72)&(255));
      var $74=HEAP32[((_jisx0208_decmap)>>2)];
      var $75=(($74+($73<<3))|0);
      var $76=(($75)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=(($77+($69<<1))|0);
      var $79=HEAP16[(($78)>>1)];
      var $80=(($79)&(65535));
      $u=$80;
      var $81=(($80)|(0))!=65534;
      if ($81) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $83=$u;
      $1=$83;
      label = 10; break;
    case 9: 
      $1=65535;
      label = 10; break;
    case 10: 
      var $86=$1;
      return $86;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0208_init() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2=HEAP32[((_jisx0208_init_initialized)>>2)];
      var $3=(($2)|(0))!=0;
      if ($3) { label = 5; break; } else { label = 2; break; }
    case 2: 
      var $5=_importmap(((__str15)|0), ((__str16)|0), _jisxcommon_encmap, 0);
      var $6=(($5)|(0))!=0;
      if ($6) { label = 4; break; } else { label = 3; break; }
    case 3: 
      var $8=_importmap(((__str15)|0), ((__str19)|0), 0, _jisx0208_decmap);
      var $9=(($8)|(0))!=0;
      if ($9) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=-1;
      label = 6; break;
    case 5: 
      HEAP32[((_jisx0208_init_initialized)>>2)]=1;
      $1=0;
      label = 6; break;
    case 6: 
      var $13=$1;
      return $13;
    default: assert(0, "bad label: " + label);
  }
}
function _iso2022_decode($state, $config, $inbuf, $inleft, $outbuf, $outleft) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5=__stackBase__;
      var $6;
      var $7=(__stackBase__)+(4);
      var $dsgcache;
      var $c;
      var $err;
      var $dsg;
      var $charset;
      var $decoded;
      $2=$state;
      $3=$config;
      $4=$inbuf;
      HEAP32[(($5)>>2)]=$inleft;
      $6=$outbuf;
      HEAP32[(($7)>>2)]=$outleft;
      $dsgcache=0;
      label = 2; break;
    case 2: 
      var $9=HEAP32[(($5)>>2)];
      var $10=(($9)|(0)) > 0;
      if ($10) { label = 3; break; } else { label = 86; break; }
    case 3: 
      var $12=$4;
      var $13=HEAP32[(($12)>>2)];
      var $14=(($13)|0);
      var $15=HEAP8[($14)];
      $c=$15;
      var $16=$2;
      var $17=$16;
      var $18=(($17+4)|0);
      var $19=HEAP8[($18)];
      var $20=(($19)&(255));
      var $21=$20 & 2;
      var $22=(($21)|(0))!=0;
      if ($22) { label = 4; break; } else { label = 11; break; }
    case 4: 
      var $24=HEAP32[(($7)>>2)];
      var $25=(($24)|(0)) < 1;
      if ($25) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=-1;
      label = 87; break;
    case 6: 
      var $28=$c;
      var $29=(($28)&(255));
      var $30=$6;
      var $31=HEAP32[(($30)>>2)];
      var $32=(($31)|0);
      HEAP16[(($32)>>1)]=$29;
      var $33=$4;
      var $34=HEAP32[(($33)>>2)];
      var $35=(($34+1)|0);
      HEAP32[(($33)>>2)]=$35;
      var $36=HEAP32[(($5)>>2)];
      var $37=((($36)-(1))|0);
      HEAP32[(($5)>>2)]=$37;
      var $38=$6;
      var $39=HEAP32[(($38)>>2)];
      var $40=(($39+2)|0);
      HEAP32[(($38)>>2)]=$40;
      var $41=HEAP32[(($7)>>2)];
      var $42=((($41)-(1))|0);
      HEAP32[(($7)>>2)]=$42;
      var $43=$c;
      var $44=(($43)&(255));
      var $45=(($44)|(0)) >= 65;
      if ($45) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $47=$c;
      var $48=(($47)&(255));
      var $49=(($48)|(0)) <= 90;
      if ($49) { label = 9; break; } else { label = 8; break; }
    case 8: 
      var $51=$c;
      var $52=(($51)&(255));
      var $53=(($52)|(0))==64;
      if ($53) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $55=$2;
      var $56=$55;
      var $57=(($56+4)|0);
      var $58=HEAP8[($57)];
      var $59=(($58)&(255));
      var $60=$59 & -3;
      var $61=(($60) & 255);
      HEAP8[($57)]=$61;
      label = 10; break;
    case 10: 
      label = 2; break;
    case 11: 
      var $64=$c;
      var $65=(($64)&(255));
      if ((($65)|(0))==27) {
        label = 12; break;
      }
      else if ((($65)|(0))==15) {
        label = 34; break;
      }
      else if ((($65)|(0))==14) {
        label = 37; break;
      }
      else if ((($65)|(0))==10) {
        label = 40; break;
      }
      else {
      label = 43; break;
      }
    case 12: 
      var $67=HEAP32[(($5)>>2)];
      var $68=(($67)|(0)) < 2;
      if ($68) { label = 13; break; } else { label = 14; break; }
    case 13: 
      $1=-2;
      label = 87; break;
    case 14: 
      var $71=$4;
      var $72=HEAP32[(($71)>>2)];
      var $73=(($72+1)|0);
      var $74=HEAP8[($73)];
      var $75=(($74)&(255));
      var $76=(($75)|(0))==40;
      if ($76) { label = 19; break; } else { label = 15; break; }
    case 15: 
      var $78=$4;
      var $79=HEAP32[(($78)>>2)];
      var $80=(($79+1)|0);
      var $81=HEAP8[($80)];
      var $82=(($81)&(255));
      var $83=(($82)|(0))==41;
      if ($83) { label = 19; break; } else { label = 16; break; }
    case 16: 
      var $85=$4;
      var $86=HEAP32[(($85)>>2)];
      var $87=(($86+1)|0);
      var $88=HEAP8[($87)];
      var $89=(($88)&(255));
      var $90=(($89)|(0))==36;
      if ($90) { label = 19; break; } else { label = 17; break; }
    case 17: 
      var $92=$4;
      var $93=HEAP32[(($92)>>2)];
      var $94=(($93+1)|0);
      var $95=HEAP8[($94)];
      var $96=(($95)&(255));
      var $97=(($96)|(0))==46;
      if ($97) { label = 19; break; } else { label = 18; break; }
    case 18: 
      var $99=$4;
      var $100=HEAP32[(($99)>>2)];
      var $101=(($100+1)|0);
      var $102=HEAP8[($101)];
      var $103=(($102)&(255));
      var $104=(($103)|(0))==38;
      if ($104) { label = 19; break; } else { label = 22; break; }
    case 19: 
      var $106=$3;
      var $107=$2;
      var $108=$4;
      var $109=_iso2022processesc($106, $107, $108, $5);
      $err=$109;
      var $110=$err;
      var $111=(($110)|(0))!=0;
      if ($111) { label = 20; break; } else { label = 21; break; }
    case 20: 
      var $113=$err;
      $1=$113;
      label = 87; break;
    case 21: 
      label = 33; break;
    case 22: 
      var $116=$3;
      var $117=$116;
      var $118=(($117)|0);
      var $119=HEAP32[(($118)>>2)];
      var $120=$119 & 2;
      var $121=(($120)|(0))!=0;
      if ($121) { label = 23; break; } else { label = 29; break; }
    case 23: 
      var $123=$4;
      var $124=HEAP32[(($123)>>2)];
      var $125=(($124+1)|0);
      var $126=HEAP8[($125)];
      var $127=(($126)&(255));
      var $128=(($127)|(0))==78;
      if ($128) { label = 24; break; } else { label = 29; break; }
    case 24: 
      var $130=HEAP32[(($5)>>2)];
      var $131=(($130)|(0)) < 3;
      if ($131) { label = 25; break; } else { label = 26; break; }
    case 25: 
      $1=-2;
      label = 87; break;
    case 26: 
      var $134=$3;
      var $135=$2;
      var $136=$4;
      var $137=$6;
      var $138=_iso2022processg2($134, $135, $136, $5, $137, $7);
      $err=$138;
      var $139=$err;
      var $140=(($139)|(0))!=0;
      if ($140) { label = 27; break; } else { label = 28; break; }
    case 27: 
      var $142=$err;
      $1=$142;
      label = 87; break;
    case 28: 
      label = 32; break;
    case 29: 
      var $145=HEAP32[(($7)>>2)];
      var $146=(($145)|(0)) < 1;
      if ($146) { label = 30; break; } else { label = 31; break; }
    case 30: 
      $1=-1;
      label = 87; break;
    case 31: 
      var $149=$6;
      var $150=HEAP32[(($149)>>2)];
      var $151=(($150)|0);
      HEAP16[(($151)>>1)]=27;
      var $152=$2;
      var $153=$152;
      var $154=(($153+4)|0);
      var $155=HEAP8[($154)];
      var $156=(($155)&(255));
      var $157=$156 | 2;
      var $158=(($157) & 255);
      HEAP8[($154)]=$158;
      var $159=$4;
      var $160=HEAP32[(($159)>>2)];
      var $161=(($160+1)|0);
      HEAP32[(($159)>>2)]=$161;
      var $162=HEAP32[(($5)>>2)];
      var $163=((($162)-(1))|0);
      HEAP32[(($5)>>2)]=$163;
      var $164=$6;
      var $165=HEAP32[(($164)>>2)];
      var $166=(($165+2)|0);
      HEAP32[(($164)>>2)]=$166;
      var $167=HEAP32[(($7)>>2)];
      var $168=((($167)-(1))|0);
      HEAP32[(($7)>>2)]=$168;
      label = 32; break;
    case 32: 
      label = 33; break;
    case 33: 
      label = 85; break;
    case 34: 
      var $172=$3;
      var $173=$172;
      var $174=(($173)|0);
      var $175=HEAP32[(($174)>>2)];
      var $176=$175 & 1;
      var $177=(($176)|(0))!=0;
      if ($177) { label = 35; break; } else { label = 36; break; }
    case 35: 
      label = 52; break;
    case 36: 
      var $180=$2;
      var $181=$180;
      var $182=(($181+4)|0);
      var $183=HEAP8[($182)];
      var $184=(($183)&(255));
      var $185=$184 & -2;
      var $186=(($185) & 255);
      HEAP8[($182)]=$186;
      var $187=$4;
      var $188=HEAP32[(($187)>>2)];
      var $189=(($188+1)|0);
      HEAP32[(($187)>>2)]=$189;
      var $190=HEAP32[(($5)>>2)];
      var $191=((($190)-(1))|0);
      HEAP32[(($5)>>2)]=$191;
      label = 85; break;
    case 37: 
      var $193=$3;
      var $194=$193;
      var $195=(($194)|0);
      var $196=HEAP32[(($195)>>2)];
      var $197=$196 & 1;
      var $198=(($197)|(0))!=0;
      if ($198) { label = 38; break; } else { label = 39; break; }
    case 38: 
      label = 52; break;
    case 39: 
      var $201=$2;
      var $202=$201;
      var $203=(($202+4)|0);
      var $204=HEAP8[($203)];
      var $205=(($204)&(255));
      var $206=$205 | 1;
      var $207=(($206) & 255);
      HEAP8[($203)]=$207;
      var $208=$4;
      var $209=HEAP32[(($208)>>2)];
      var $210=(($209+1)|0);
      HEAP32[(($208)>>2)]=$210;
      var $211=HEAP32[(($5)>>2)];
      var $212=((($211)-(1))|0);
      HEAP32[(($5)>>2)]=$212;
      label = 85; break;
    case 40: 
      var $214=$2;
      var $215=$214;
      var $216=(($215+4)|0);
      var $217=HEAP8[($216)];
      var $218=(($217)&(255));
      var $219=$218 & -2;
      var $220=(($219) & 255);
      HEAP8[($216)]=$220;
      var $221=HEAP32[(($7)>>2)];
      var $222=(($221)|(0)) < 1;
      if ($222) { label = 41; break; } else { label = 42; break; }
    case 41: 
      $1=-1;
      label = 87; break;
    case 42: 
      var $225=$6;
      var $226=HEAP32[(($225)>>2)];
      var $227=(($226)|0);
      HEAP16[(($227)>>1)]=10;
      var $228=$4;
      var $229=HEAP32[(($228)>>2)];
      var $230=(($229+1)|0);
      HEAP32[(($228)>>2)]=$230;
      var $231=HEAP32[(($5)>>2)];
      var $232=((($231)-(1))|0);
      HEAP32[(($5)>>2)]=$232;
      var $233=$6;
      var $234=HEAP32[(($233)>>2)];
      var $235=(($234+2)|0);
      HEAP32[(($233)>>2)]=$235;
      var $236=HEAP32[(($7)>>2)];
      var $237=((($236)-(1))|0);
      HEAP32[(($7)>>2)]=$237;
      label = 85; break;
    case 43: 
      var $239=$c;
      var $240=(($239)&(255));
      var $241=(($240)|(0)) < 32;
      if ($241) { label = 44; break; } else { label = 45; break; }
    case 44: 
      label = 52; break;
    case 45: 
      var $244=$c;
      var $245=(($244)&(255));
      var $246=(($245)|(0)) >= 128;
      if ($246) { label = 46; break; } else { label = 47; break; }
    case 46: 
      $1=1;
      label = 87; break;
    case 47: 
      var $249=$2;
      var $250=$249;
      var $251=(($250+4)|0);
      var $252=HEAP8[($251)];
      var $253=(($252)&(255));
      var $254=$253 & 1;
      var $255=(($254)|(0))!=0;
      if ($255) { label = 48; break; } else { label = 49; break; }
    case 48: 
      var $257=$2;
      var $258=$257;
      var $259=(($258+1)|0);
      var $260=HEAP8[($259)];
      $charset=$260;
      label = 50; break;
    case 49: 
      var $262=$2;
      var $263=$262;
      var $264=(($263)|0);
      var $265=HEAP8[($264)];
      $charset=$265;
      label = 50; break;
    case 50: 
      var $267=$charset;
      var $268=(($267)&(255));
      var $269=(($268)|(0))==66;
      if ($269) { label = 51; break; } else { label = 55; break; }
    case 51: 
      label = 52; break;
    case 52: 
      var $272=HEAP32[(($7)>>2)];
      var $273=(($272)|(0)) < 1;
      if ($273) { label = 53; break; } else { label = 54; break; }
    case 53: 
      $1=-1;
      label = 87; break;
    case 54: 
      var $276=$c;
      var $277=(($276)&(255));
      var $278=$6;
      var $279=HEAP32[(($278)>>2)];
      var $280=(($279)|0);
      HEAP16[(($280)>>1)]=$277;
      var $281=$4;
      var $282=HEAP32[(($281)>>2)];
      var $283=(($282+1)|0);
      HEAP32[(($281)>>2)]=$283;
      var $284=HEAP32[(($5)>>2)];
      var $285=((($284)-(1))|0);
      HEAP32[(($5)>>2)]=$285;
      var $286=$6;
      var $287=HEAP32[(($286)>>2)];
      var $288=(($287+2)|0);
      HEAP32[(($286)>>2)]=$288;
      var $289=HEAP32[(($7)>>2)];
      var $290=((($289)-(1))|0);
      HEAP32[(($7)>>2)]=$290;
      label = 85; break;
    case 55: 
      var $292=$dsgcache;
      var $293=(($292)|(0))!=0;
      if ($293) { label = 56; break; } else { label = 58; break; }
    case 56: 
      var $295=$dsgcache;
      var $296=(($295)|0);
      var $297=HEAP8[($296)];
      var $298=(($297)&(255));
      var $299=$charset;
      var $300=(($299)&(255));
      var $301=(($298)|(0))==(($300)|(0));
      if ($301) { label = 57; break; } else { label = 58; break; }
    case 57: 
      var $303=$dsgcache;
      $dsg=$303;
      label = 66; break;
    case 58: 
      var $305=$3;
      var $306=$305;
      var $307=(($306+4)|0);
      var $308=HEAP32[(($307)>>2)];
      $dsg=$308;
      label = 59; break;
    case 59: 
      var $310=$dsg;
      var $311=(($310)|0);
      var $312=HEAP8[($311)];
      var $313=(($312)&(255));
      var $314=$charset;
      var $315=(($314)&(255));
      var $316=(($313)|(0))!=(($315)|(0));
      if ($316) { label = 60; break; } else { label = 62; break; }
    case 60: 
      label = 61; break;
    case 61: 
      var $319=$dsg;
      var $320=(($319+16)|0);
      $dsg=$320;
      label = 59; break;
    case 62: 
      var $322=$dsg;
      var $323=(($322)|0);
      var $324=HEAP8[($323)];
      var $325=(($324)&(255));
      var $326=(($325)|(0))!=0;
      if ($326) { label = 63; break; } else { label = 64; break; }
    case 63: 
      label = 65; break;
    case 64: 
      ___assert_func(((__str13)|0), 511, ((___func___iso2022_decode)|0), ((__str33)|0));
      throw "Reached an unreachable!";
      label = 65; break;
    case 65: 
      var $331=$dsg;
      $dsgcache=$331;
      label = 66; break;
    case 66: 
      var $333=HEAP32[(($5)>>2)];
      var $334=$dsg;
      var $335=(($334+2)|0);
      var $336=HEAP8[($335)];
      var $337=(($336)&(255));
      var $338=(($333)|(0)) < (($337)|(0));
      if ($338) { label = 67; break; } else { label = 68; break; }
    case 67: 
      $1=-2;
      label = 87; break;
    case 68: 
      var $341=$dsg;
      var $342=(($341+8)|0);
      var $343=HEAP32[(($342)>>2)];
      var $344=$4;
      var $345=HEAP32[(($344)>>2)];
      var $346=FUNCTION_TABLE[$343]($345);
      $decoded=$346;
      var $347=$decoded;
      var $348=(($347)|(0))==65535;
      if ($348) { label = 69; break; } else { label = 70; break; }
    case 69: 
      var $350=$dsg;
      var $351=(($350+2)|0);
      var $352=HEAP8[($351)];
      var $353=(($352)&(255));
      $1=$353;
      label = 87; break;
    case 70: 
      var $355=$decoded;
      var $356=(($355)>>>(0)) < 65536;
      if ($356) { label = 71; break; } else { label = 74; break; }
    case 71: 
      var $358=HEAP32[(($7)>>2)];
      var $359=(($358)|(0)) < 1;
      if ($359) { label = 72; break; } else { label = 73; break; }
    case 72: 
      $1=-1;
      label = 87; break;
    case 73: 
      var $362=$decoded;
      var $363=(($362) & 65535);
      var $364=$6;
      var $365=HEAP32[(($364)>>2)];
      var $366=(($365)|0);
      HEAP16[(($366)>>1)]=$363;
      var $367=$6;
      var $368=HEAP32[(($367)>>2)];
      var $369=(($368+2)|0);
      HEAP32[(($367)>>2)]=$369;
      var $370=HEAP32[(($7)>>2)];
      var $371=((($370)-(1))|0);
      HEAP32[(($7)>>2)]=$371;
      label = 82; break;
    case 74: 
      var $373=$decoded;
      var $374=(($373)>>>(0)) < 196608;
      if ($374) { label = 75; break; } else { label = 78; break; }
    case 75: 
      var $376=HEAP32[(($7)>>2)];
      var $377=(($376)|(0)) < 2;
      if ($377) { label = 76; break; } else { label = 77; break; }
    case 76: 
      $1=-1;
      label = 87; break;
    case 77: 
      var $380=$decoded;
      var $381=((($380)-(65536))|0);
      var $382=$381 >>> 10;
      var $383=((($382)+(55296))|0);
      var $384=(($383) & 65535);
      var $385=$6;
      var $386=HEAP32[(($385)>>2)];
      var $387=(($386)|0);
      HEAP16[(($387)>>1)]=$384;
      var $388=$decoded;
      var $389=((($388)-(65536))|0);
      var $390=$389 & 1023;
      var $391=((($390)+(56320))|0);
      var $392=(($391) & 65535);
      var $393=$6;
      var $394=HEAP32[(($393)>>2)];
      var $395=(($394+2)|0);
      HEAP16[(($395)>>1)]=$392;
      var $396=$6;
      var $397=HEAP32[(($396)>>2)];
      var $398=(($397+4)|0);
      HEAP32[(($396)>>2)]=$398;
      var $399=HEAP32[(($7)>>2)];
      var $400=((($399)-(2))|0);
      HEAP32[(($7)>>2)]=$400;
      label = 81; break;
    case 78: 
      var $402=HEAP32[(($7)>>2)];
      var $403=(($402)|(0)) < 2;
      if ($403) { label = 79; break; } else { label = 80; break; }
    case 79: 
      $1=-1;
      label = 87; break;
    case 80: 
      var $406=$decoded;
      var $407=$406 >>> 16;
      var $408=(($407) & 65535);
      var $409=$6;
      var $410=HEAP32[(($409)>>2)];
      var $411=(($410)|0);
      HEAP16[(($411)>>1)]=$408;
      var $412=$decoded;
      var $413=$412 & 65535;
      var $414=(($413) & 65535);
      var $415=$6;
      var $416=HEAP32[(($415)>>2)];
      var $417=(($416+2)|0);
      HEAP16[(($417)>>1)]=$414;
      var $418=$6;
      var $419=HEAP32[(($418)>>2)];
      var $420=(($419+4)|0);
      HEAP32[(($418)>>2)]=$420;
      var $421=HEAP32[(($7)>>2)];
      var $422=((($421)-(2))|0);
      HEAP32[(($7)>>2)]=$422;
      label = 81; break;
    case 81: 
      label = 82; break;
    case 82: 
      var $425=$dsg;
      var $426=(($425+2)|0);
      var $427=HEAP8[($426)];
      var $428=(($427)&(255));
      var $429=$4;
      var $430=HEAP32[(($429)>>2)];
      var $431=(($430+$428)|0);
      HEAP32[(($429)>>2)]=$431;
      var $432=$dsg;
      var $433=(($432+2)|0);
      var $434=HEAP8[($433)];
      var $435=(($434)&(255));
      var $436=HEAP32[(($5)>>2)];
      var $437=((($436)-($435))|0);
      HEAP32[(($5)>>2)]=$437;
      label = 83; break;
    case 83: 
      label = 84; break;
    case 84: 
      label = 85; break;
    case 85: 
      label = 2; break;
    case 86: 
      $1=0;
      label = 87; break;
    case 87: 
      var $443=$1;
      STACKTOP = __stackBase__;
      return $443;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0201_r_decoder($data) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $u;
      $2=$data;
      var $3=$2;
      var $4=HEAP8[($3)];
      var $5=(($4)&(255));
      var $6=(($5)|(0)) < 92;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $8=$2;
      var $9=HEAP8[($8)];
      var $10=(($9)&(255));
      $u=$10;
      label = 16; break;
    case 3: 
      var $12=$2;
      var $13=HEAP8[($12)];
      var $14=(($13)&(255));
      var $15=(($14)|(0))==92;
      if ($15) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $u=165;
      label = 15; break;
    case 5: 
      var $18=$2;
      var $19=HEAP8[($18)];
      var $20=(($19)&(255));
      var $21=(($20)|(0)) < 126;
      if ($21) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $23=$2;
      var $24=HEAP8[($23)];
      var $25=(($24)&(255));
      $u=$25;
      label = 14; break;
    case 7: 
      var $27=$2;
      var $28=HEAP8[($27)];
      var $29=(($28)&(255));
      var $30=(($29)|(0))==126;
      if ($30) { label = 8; break; } else { label = 9; break; }
    case 8: 
      $u=8254;
      label = 13; break;
    case 9: 
      var $33=$2;
      var $34=HEAP8[($33)];
      var $35=(($34)&(255));
      var $36=(($35)|(0))==127;
      if ($36) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $u=127;
      label = 12; break;
    case 11: 
      $1=65535;
      label = 17; break;
    case 12: 
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $44=$u;
      $1=$44;
      label = 17; break;
    case 17: 
      var $46=$1;
      return $46;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0201_r_encoder($data, $length) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $coded;
      $2=$data;
      $3=$length;
      var $4=$2;
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)>>>(0)) < 128;
      if ($6) { label = 2; break; } else { label = 5; break; }
    case 2: 
      var $8=$2;
      var $9=HEAP32[(($8)>>2)];
      var $10=(($9)|(0))!=92;
      if ($10) { label = 3; break; } else { label = 5; break; }
    case 3: 
      var $12=$2;
      var $13=HEAP32[(($12)>>2)];
      var $14=(($13)|(0))!=126;
      if ($14) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $16=$2;
      var $17=HEAP32[(($16)>>2)];
      var $18=(($17) & 65535);
      $coded=$18;
      label = 12; break;
    case 5: 
      var $20=$2;
      var $21=HEAP32[(($20)>>2)];
      var $22=(($21)|(0))==165;
      if ($22) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $coded=92;
      label = 11; break;
    case 7: 
      var $25=$2;
      var $26=HEAP32[(($25)>>2)];
      var $27=(($26)|(0))==8254;
      if ($27) { label = 8; break; } else { label = 9; break; }
    case 8: 
      $coded=126;
      label = 10; break;
    case 9: 
      $1=-1;
      label = 13; break;
    case 10: 
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $33=$coded;
      $1=$33;
      label = 13; break;
    case 13: 
      var $35=$1;
      return $35;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0201_k_decoder($data) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $u;
      $2=$data;
      var $3=$2;
      var $4=HEAP8[($3)];
      var $5=(($4)&(255));
      var $6=$5 ^ 128;
      var $7=(($6)|(0)) >= 161;
      if ($7) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $9=$2;
      var $10=HEAP8[($9)];
      var $11=(($10)&(255));
      var $12=$11 ^ 128;
      var $13=(($12)|(0)) <= 223;
      if ($13) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $15=$2;
      var $16=HEAP8[($15)];
      var $17=(($16)&(255));
      var $18=$17 ^ 128;
      var $19=((($18)+(65216))|0);
      $u=$19;
      label = 5; break;
    case 4: 
      $1=65535;
      label = 6; break;
    case 5: 
      var $22=$u;
      $1=$22;
      label = 6; break;
    case 6: 
      var $24=$1;
      return $24;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0201_k_encoder($data, $length) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $coded;
      $2=$data;
      $3=$length;
      var $4=$2;
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)>>>(0)) >= 65377;
      if ($6) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $8=$2;
      var $9=HEAP32[(($8)>>2)];
      var $10=(($9)>>>(0)) <= 65439;
      if ($10) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $12=$2;
      var $13=HEAP32[(($12)>>2)];
      var $14=((($13)-(65216))|0);
      var $15=(($14) & 65535);
      $coded=$15;
      label = 5; break;
    case 4: 
      $1=-1;
      label = 6; break;
    case 5: 
      var $18=$coded;
      var $19=(($18)&(65535));
      var $20=((($19)-(128))|0);
      var $21=(($20) & 65535);
      $1=$21;
      label = 6; break;
    case 6: 
      var $23=$1;
      return $23;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0212_decoder($data) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $u;
      $2=$data;
      var $3=$2;
      var $4=(($3)|0);
      var $5=HEAP8[($4)];
      var $6=(($5)&(255));
      var $7=HEAP32[((_jisx0212_decmap)>>2)];
      var $8=(($7+($6<<3))|0);
      var $9=(($8)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10)|(0))!=0;
      if ($11) { label = 2; break; } else { label = 6; break; }
    case 2: 
      var $13=$2;
      var $14=(($13+1)|0);
      var $15=HEAP8[($14)];
      var $16=(($15)&(255));
      var $17=$2;
      var $18=(($17)|0);
      var $19=HEAP8[($18)];
      var $20=(($19)&(255));
      var $21=HEAP32[((_jisx0212_decmap)>>2)];
      var $22=(($21+($20<<3))|0);
      var $23=(($22+4)|0);
      var $24=HEAP8[($23)];
      var $25=(($24)&(255));
      var $26=(($16)|(0)) >= (($25)|(0));
      if ($26) { label = 3; break; } else { label = 6; break; }
    case 3: 
      var $28=$2;
      var $29=(($28+1)|0);
      var $30=HEAP8[($29)];
      var $31=(($30)&(255));
      var $32=$2;
      var $33=(($32)|0);
      var $34=HEAP8[($33)];
      var $35=(($34)&(255));
      var $36=HEAP32[((_jisx0212_decmap)>>2)];
      var $37=(($36+($35<<3))|0);
      var $38=(($37+5)|0);
      var $39=HEAP8[($38)];
      var $40=(($39)&(255));
      var $41=(($31)|(0)) <= (($40)|(0));
      if ($41) { label = 4; break; } else { label = 6; break; }
    case 4: 
      var $43=$2;
      var $44=(($43+1)|0);
      var $45=HEAP8[($44)];
      var $46=(($45)&(255));
      var $47=$2;
      var $48=(($47)|0);
      var $49=HEAP8[($48)];
      var $50=(($49)&(255));
      var $51=HEAP32[((_jisx0212_decmap)>>2)];
      var $52=(($51+($50<<3))|0);
      var $53=(($52+4)|0);
      var $54=HEAP8[($53)];
      var $55=(($54)&(255));
      var $56=((($46)-($55))|0);
      var $57=$2;
      var $58=(($57)|0);
      var $59=HEAP8[($58)];
      var $60=(($59)&(255));
      var $61=HEAP32[((_jisx0212_decmap)>>2)];
      var $62=(($61+($60<<3))|0);
      var $63=(($62)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=(($64+($56<<1))|0);
      var $66=HEAP16[(($65)>>1)];
      var $67=(($66)&(65535));
      $u=$67;
      var $68=(($67)|(0))!=65534;
      if ($68) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $70=$u;
      $1=$70;
      label = 7; break;
    case 6: 
      $1=65535;
      label = 7; break;
    case 7: 
      var $73=$1;
      return $73;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0212_init() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2=HEAP32[((_jisx0212_init_initialized)>>2)];
      var $3=(($2)|(0))!=0;
      if ($3) { label = 5; break; } else { label = 2; break; }
    case 2: 
      var $5=_importmap(((__str15)|0), ((__str16)|0), _jisxcommon_encmap, 0);
      var $6=(($5)|(0))!=0;
      if ($6) { label = 4; break; } else { label = 3; break; }
    case 3: 
      var $8=_importmap(((__str15)|0), ((__str17)|0), 0, _jisx0212_decmap);
      var $9=(($8)|(0))!=0;
      if ($9) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=-1;
      label = 6; break;
    case 5: 
      HEAP32[((_jisx0212_init_initialized)>>2)]=1;
      $1=0;
      label = 6; break;
    case 6: 
      var $13=$1;
      return $13;
    default: assert(0, "bad label: " + label);
  }
}
function _importmap($modname, $symbol, $encmap, $decmap) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $o;
      var $mod;
      var $map;
      $2=$modname;
      $3=$symbol;
      $4=$encmap;
      $5=$decmap;
      var $6=$2;
      var $7=_PyImport_ImportModule($6);
      $mod=$7;
      var $8=$mod;
      var $9=(($8)|(0))==0;
      if ($9) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=-1;
      label = 30; break;
    case 3: 
      var $12=$mod;
      var $13=$3;
      var $14=_PyObject_GetAttrString($12, $13);
      $o=$14;
      var $15=$o;
      var $16=(($15)|(0))==0;
      if ($16) { label = 4; break; } else { label = 5; break; }
    case 4: 
      label = 24; break;
    case 5: 
      var $19=$o;
      var $20=_PyCapsule_IsValid($19, ((__str1)|0));
      var $21=(($20)|(0))!=0;
      if ($21) { label = 7; break; } else { label = 6; break; }
    case 6: 
      var $23=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($23, ((__str18)|0));
      label = 24; break;
    case 7: 
      var $25=$o;
      var $26=_PyCapsule_GetPointer($25, ((__str1)|0));
      var $27=$26;
      $map=$27;
      var $28=$4;
      var $29=(($28)|(0))!=0;
      if ($29) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $31=$map;
      var $32=(($31+4)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=$33;
      var $35=$4;
      HEAP32[(($35)>>2)]=$34;
      label = 9; break;
    case 9: 
      var $37=$5;
      var $38=(($37)|(0))!=0;
      if ($38) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $40=$map;
      var $41=(($40+8)|0);
      var $42=HEAP32[(($41)>>2)];
      var $43=$42;
      var $44=$5;
      HEAP32[(($44)>>2)]=$43;
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $47=$o;
      var $48=(($47)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=((($49)-(1))|0);
      HEAP32[(($48)>>2)]=$50;
      var $51=(($50)|(0))!=0;
      if ($51) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 15; break;
    case 14: 
      var $54=$o;
      var $55=(($54+4)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=(($56+24)|0);
      var $58=HEAP32[(($57)>>2)];
      var $59=$o;
      FUNCTION_TABLE[$58]($59);
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      var $65=$mod;
      var $66=(($65)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=((($67)-(1))|0);
      HEAP32[(($66)>>2)]=$68;
      var $69=(($68)|(0))!=0;
      if ($69) { label = 20; break; } else { label = 21; break; }
    case 20: 
      label = 22; break;
    case 21: 
      var $72=$mod;
      var $73=(($72+4)|0);
      var $74=HEAP32[(($73)>>2)];
      var $75=(($74+24)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=$mod;
      FUNCTION_TABLE[$76]($77);
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      $1=0;
      label = 30; break;
    case 24: 
      label = 25; break;
    case 25: 
      var $82=$mod;
      var $83=(($82)|0);
      var $84=HEAP32[(($83)>>2)];
      var $85=((($84)-(1))|0);
      HEAP32[(($83)>>2)]=$85;
      var $86=(($85)|(0))!=0;
      if ($86) { label = 26; break; } else { label = 27; break; }
    case 26: 
      label = 28; break;
    case 27: 
      var $89=$mod;
      var $90=(($89+4)|0);
      var $91=HEAP32[(($90)>>2)];
      var $92=(($91+24)|0);
      var $93=HEAP32[(($92)>>2)];
      var $94=$mod;
      FUNCTION_TABLE[$93]($94);
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      $1=-1;
      label = 30; break;
    case 30: 
      var $98=$1;
      return $98;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0213_init() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2=HEAP32[((_jisx0213_init_initialized)>>2)];
      var $3=(($2)|(0))!=0;
      if ($3) { label = 11; break; } else { label = 2; break; }
    case 2: 
      var $5=_jisx0208_init();
      var $6=(($5)|(0))!=0;
      if ($6) { label = 10; break; } else { label = 3; break; }
    case 3: 
      var $8=_importmap(((__str15)|0), ((__str20)|0), _jisx0213_bmp_encmap, 0);
      var $9=(($8)|(0))!=0;
      if ($9) { label = 10; break; } else { label = 4; break; }
    case 4: 
      var $11=_importmap(((__str15)|0), ((__str21)|0), 0, _jisx0213_1_bmp_decmap);
      var $12=(($11)|(0))!=0;
      if ($12) { label = 10; break; } else { label = 5; break; }
    case 5: 
      var $14=_importmap(((__str15)|0), ((__str22)|0), 0, _jisx0213_2_bmp_decmap);
      var $15=(($14)|(0))!=0;
      if ($15) { label = 10; break; } else { label = 6; break; }
    case 6: 
      var $17=_importmap(((__str15)|0), ((__str23)|0), _jisx0213_emp_encmap, 0);
      var $18=(($17)|(0))!=0;
      if ($18) { label = 10; break; } else { label = 7; break; }
    case 7: 
      var $20=_importmap(((__str15)|0), ((__str24)|0), 0, _jisx0213_1_emp_decmap);
      var $21=(($20)|(0))!=0;
      if ($21) { label = 10; break; } else { label = 8; break; }
    case 8: 
      var $23=_importmap(((__str15)|0), ((__str25)|0), 0, _jisx0213_2_emp_decmap);
      var $24=(($23)|(0))!=0;
      if ($24) { label = 10; break; } else { label = 9; break; }
    case 9: 
      var $26=_importmap(((__str15)|0), ((__str26)|0), _jisx0213_pair_encmap, _jisx0213_pair_decmap);
      var $27=(($26)|(0))!=0;
      if ($27) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=-1;
      label = 12; break;
    case 11: 
      HEAP32[((_jisx0213_init_initialized)>>2)]=1;
      $1=0;
      label = 12; break;
    case 12: 
      var $31=$1;
      return $31;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0208_encoder($data, $length) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $coded;
      $2=$data;
      $3=$length;
      var $4=$3;
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))==1;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 4; break;
    case 3: 
      ___assert_func(((__str13)|0), 632, ((___func___jisx0208_encoder)|0), ((__str14)|0));
      throw "Reached an unreachable!";
      label = 4; break;
    case 4: 
      var $11=$2;
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12)>>>(0)) < 65536;
      if ($13) { label = 5; break; } else { label = 16; break; }
    case 5: 
      var $15=$2;
      var $16=HEAP32[(($15)>>2)];
      var $17=(($16)|(0))==65340;
      if ($17) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=8512;
      label = 17; break;
    case 7: 
      var $20=$2;
      var $21=HEAP32[(($20)>>2)];
      var $22=$21 >>> 8;
      var $23=HEAP32[((_jisxcommon_encmap)>>2)];
      var $24=(($23+($22<<3))|0);
      var $25=(($24)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=(($26)|(0))!=0;
      if ($27) { label = 8; break; } else { label = 14; break; }
    case 8: 
      var $29=$2;
      var $30=HEAP32[(($29)>>2)];
      var $31=$30 & 255;
      var $32=$2;
      var $33=HEAP32[(($32)>>2)];
      var $34=$33 >>> 8;
      var $35=HEAP32[((_jisxcommon_encmap)>>2)];
      var $36=(($35+($34<<3))|0);
      var $37=(($36+4)|0);
      var $38=HEAP8[($37)];
      var $39=(($38)&(255));
      var $40=(($31)>>>(0)) >= (($39)>>>(0));
      if ($40) { label = 9; break; } else { label = 14; break; }
    case 9: 
      var $42=$2;
      var $43=HEAP32[(($42)>>2)];
      var $44=$43 & 255;
      var $45=$2;
      var $46=HEAP32[(($45)>>2)];
      var $47=$46 >>> 8;
      var $48=HEAP32[((_jisxcommon_encmap)>>2)];
      var $49=(($48+($47<<3))|0);
      var $50=(($49+5)|0);
      var $51=HEAP8[($50)];
      var $52=(($51)&(255));
      var $53=(($44)>>>(0)) <= (($52)>>>(0));
      if ($53) { label = 10; break; } else { label = 14; break; }
    case 10: 
      var $55=$2;
      var $56=HEAP32[(($55)>>2)];
      var $57=$56 & 255;
      var $58=$2;
      var $59=HEAP32[(($58)>>2)];
      var $60=$59 >>> 8;
      var $61=HEAP32[((_jisxcommon_encmap)>>2)];
      var $62=(($61+($60<<3))|0);
      var $63=(($62+4)|0);
      var $64=HEAP8[($63)];
      var $65=(($64)&(255));
      var $66=((($57)-($65))|0);
      var $67=$2;
      var $68=HEAP32[(($67)>>2)];
      var $69=$68 >>> 8;
      var $70=HEAP32[((_jisxcommon_encmap)>>2)];
      var $71=(($70+($69<<3))|0);
      var $72=(($71)|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=(($73+($66<<1))|0);
      var $75=HEAP16[(($74)>>1)];
      $coded=$75;
      var $76=(($75)&(65535));
      var $77=(($76)|(0))!=65535;
      if ($77) { label = 11; break; } else { label = 14; break; }
    case 11: 
      var $79=$coded;
      var $80=(($79)&(65535));
      var $81=$80 & 32768;
      var $82=(($81)|(0))!=0;
      if ($82) { label = 13; break; } else { label = 12; break; }
    case 12: 
      var $84=$coded;
      $1=$84;
      label = 17; break;
    case 13: 
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      $1=-1;
      label = 17; break;
    case 17: 
      var $90=$1;
      return $90;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0212_encoder($data, $length) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $coded;
      $2=$data;
      $3=$length;
      var $4=$3;
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))==1;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 4; break;
    case 3: 
      ___assert_func(((__str13)|0), 671, ((___func___jisx0212_encoder)|0), ((__str14)|0));
      throw "Reached an unreachable!";
      label = 4; break;
    case 4: 
      var $11=$2;
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12)>>>(0)) < 65536;
      if ($13) { label = 5; break; } else { label = 13; break; }
    case 5: 
      var $15=$2;
      var $16=HEAP32[(($15)>>2)];
      var $17=$16 >>> 8;
      var $18=HEAP32[((_jisxcommon_encmap)>>2)];
      var $19=(($18+($17<<3))|0);
      var $20=(($19)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=(($21)|(0))!=0;
      if ($22) { label = 6; break; } else { label = 12; break; }
    case 6: 
      var $24=$2;
      var $25=HEAP32[(($24)>>2)];
      var $26=$25 & 255;
      var $27=$2;
      var $28=HEAP32[(($27)>>2)];
      var $29=$28 >>> 8;
      var $30=HEAP32[((_jisxcommon_encmap)>>2)];
      var $31=(($30+($29<<3))|0);
      var $32=(($31+4)|0);
      var $33=HEAP8[($32)];
      var $34=(($33)&(255));
      var $35=(($26)>>>(0)) >= (($34)>>>(0));
      if ($35) { label = 7; break; } else { label = 12; break; }
    case 7: 
      var $37=$2;
      var $38=HEAP32[(($37)>>2)];
      var $39=$38 & 255;
      var $40=$2;
      var $41=HEAP32[(($40)>>2)];
      var $42=$41 >>> 8;
      var $43=HEAP32[((_jisxcommon_encmap)>>2)];
      var $44=(($43+($42<<3))|0);
      var $45=(($44+5)|0);
      var $46=HEAP8[($45)];
      var $47=(($46)&(255));
      var $48=(($39)>>>(0)) <= (($47)>>>(0));
      if ($48) { label = 8; break; } else { label = 12; break; }
    case 8: 
      var $50=$2;
      var $51=HEAP32[(($50)>>2)];
      var $52=$51 & 255;
      var $53=$2;
      var $54=HEAP32[(($53)>>2)];
      var $55=$54 >>> 8;
      var $56=HEAP32[((_jisxcommon_encmap)>>2)];
      var $57=(($56+($55<<3))|0);
      var $58=(($57+4)|0);
      var $59=HEAP8[($58)];
      var $60=(($59)&(255));
      var $61=((($52)-($60))|0);
      var $62=$2;
      var $63=HEAP32[(($62)>>2)];
      var $64=$63 >>> 8;
      var $65=HEAP32[((_jisxcommon_encmap)>>2)];
      var $66=(($65+($64<<3))|0);
      var $67=(($66)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=(($68+($61<<1))|0);
      var $70=HEAP16[(($69)>>1)];
      $coded=$70;
      var $71=(($70)&(65535));
      var $72=(($71)|(0))!=65535;
      if ($72) { label = 9; break; } else { label = 12; break; }
    case 9: 
      var $74=$coded;
      var $75=(($74)&(65535));
      var $76=$75 & 32768;
      var $77=(($76)|(0))!=0;
      if ($77) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $79=$coded;
      var $80=(($79)&(65535));
      var $81=$80 & 32767;
      var $82=(($81) & 65535);
      $1=$82;
      label = 14; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      $1=-1;
      label = 14; break;
    case 14: 
      var $87=$1;
      return $87;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0213_2000_1_decoder($data) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $u;
      $2=$data;
      var $3=$2;
      var $4=(($3)|0);
      var $5=HEAP8[($4)];
      var $6=(($5)&(255));
      var $7=(($6)|(0))==46;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=$2;
      var $10=(($9+1)|0);
      var $11=HEAP8[($10)];
      var $12=(($11)&(255));
      var $13=(($12)|(0))==33;
      if ($13) { label = 21; break; } else { label = 3; break; }
    case 3: 
      var $15=$2;
      var $16=(($15)|0);
      var $17=HEAP8[($16)];
      var $18=(($17)&(255));
      var $19=(($18)|(0))==47;
      if ($19) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $21=$2;
      var $22=(($21+1)|0);
      var $23=HEAP8[($22)];
      var $24=(($23)&(255));
      var $25=(($24)|(0))==126;
      if ($25) { label = 21; break; } else { label = 5; break; }
    case 5: 
      var $27=$2;
      var $28=(($27)|0);
      var $29=HEAP8[($28)];
      var $30=(($29)&(255));
      var $31=(($30)|(0))==79;
      if ($31) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $33=$2;
      var $34=(($33+1)|0);
      var $35=HEAP8[($34)];
      var $36=(($35)&(255));
      var $37=(($36)|(0))==84;
      if ($37) { label = 21; break; } else { label = 7; break; }
    case 7: 
      var $39=$2;
      var $40=(($39)|0);
      var $41=HEAP8[($40)];
      var $42=(($41)&(255));
      var $43=(($42)|(0))==79;
      if ($43) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $45=$2;
      var $46=(($45+1)|0);
      var $47=HEAP8[($46)];
      var $48=(($47)&(255));
      var $49=(($48)|(0))==126;
      if ($49) { label = 21; break; } else { label = 9; break; }
    case 9: 
      var $51=$2;
      var $52=(($51)|0);
      var $53=HEAP8[($52)];
      var $54=(($53)&(255));
      var $55=(($54)|(0))==116;
      if ($55) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $57=$2;
      var $58=(($57+1)|0);
      var $59=HEAP8[($58)];
      var $60=(($59)&(255));
      var $61=(($60)|(0))==39;
      if ($61) { label = 21; break; } else { label = 11; break; }
    case 11: 
      var $63=$2;
      var $64=(($63)|0);
      var $65=HEAP8[($64)];
      var $66=(($65)&(255));
      var $67=(($66)|(0))==126;
      if ($67) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $69=$2;
      var $70=(($69+1)|0);
      var $71=HEAP8[($70)];
      var $72=(($71)&(255));
      var $73=(($72)|(0))==122;
      if ($73) { label = 21; break; } else { label = 13; break; }
    case 13: 
      var $75=$2;
      var $76=(($75)|0);
      var $77=HEAP8[($76)];
      var $78=(($77)&(255));
      var $79=(($78)|(0))==126;
      if ($79) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $81=$2;
      var $82=(($81+1)|0);
      var $83=HEAP8[($82)];
      var $84=(($83)&(255));
      var $85=(($84)|(0))==123;
      if ($85) { label = 21; break; } else { label = 15; break; }
    case 15: 
      var $87=$2;
      var $88=(($87)|0);
      var $89=HEAP8[($88)];
      var $90=(($89)&(255));
      var $91=(($90)|(0))==126;
      if ($91) { label = 16; break; } else { label = 17; break; }
    case 16: 
      var $93=$2;
      var $94=(($93+1)|0);
      var $95=HEAP8[($94)];
      var $96=(($95)&(255));
      var $97=(($96)|(0))==124;
      if ($97) { label = 21; break; } else { label = 17; break; }
    case 17: 
      var $99=$2;
      var $100=(($99)|0);
      var $101=HEAP8[($100)];
      var $102=(($101)&(255));
      var $103=(($102)|(0))==126;
      if ($103) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $105=$2;
      var $106=(($105+1)|0);
      var $107=HEAP8[($106)];
      var $108=(($107)&(255));
      var $109=(($108)|(0))==125;
      if ($109) { label = 21; break; } else { label = 19; break; }
    case 19: 
      var $111=$2;
      var $112=(($111)|0);
      var $113=HEAP8[($112)];
      var $114=(($113)&(255));
      var $115=(($114)|(0))==126;
      if ($115) { label = 20; break; } else { label = 22; break; }
    case 20: 
      var $117=$2;
      var $118=(($117+1)|0);
      var $119=HEAP8[($118)];
      var $120=(($119)&(255));
      var $121=(($120)|(0))==126;
      if ($121) { label = 21; break; } else { label = 22; break; }
    case 21: 
      $1=65535;
      label = 52; break;
    case 22: 
      var $124=$2;
      var $125=(($124)|0);
      var $126=HEAP8[($125)];
      var $127=(($126)&(255));
      var $128=(($127)|(0))==33;
      if ($128) { label = 23; break; } else { label = 25; break; }
    case 23: 
      var $130=$2;
      var $131=(($130+1)|0);
      var $132=HEAP8[($131)];
      var $133=(($132)&(255));
      var $134=(($133)|(0))==64;
      if ($134) { label = 24; break; } else { label = 25; break; }
    case 24: 
      $1=65340;
      label = 52; break;
    case 25: 
      var $137=$2;
      var $138=(($137)|0);
      var $139=HEAP8[($138)];
      var $140=(($139)&(255));
      var $141=HEAP32[((_jisx0208_decmap)>>2)];
      var $142=(($141+($140<<3))|0);
      var $143=(($142)|0);
      var $144=HEAP32[(($143)>>2)];
      var $145=(($144)|(0))!=0;
      if ($145) { label = 26; break; } else { label = 30; break; }
    case 26: 
      var $147=$2;
      var $148=(($147+1)|0);
      var $149=HEAP8[($148)];
      var $150=(($149)&(255));
      var $151=$2;
      var $152=(($151)|0);
      var $153=HEAP8[($152)];
      var $154=(($153)&(255));
      var $155=HEAP32[((_jisx0208_decmap)>>2)];
      var $156=(($155+($154<<3))|0);
      var $157=(($156+4)|0);
      var $158=HEAP8[($157)];
      var $159=(($158)&(255));
      var $160=(($150)|(0)) >= (($159)|(0));
      if ($160) { label = 27; break; } else { label = 30; break; }
    case 27: 
      var $162=$2;
      var $163=(($162+1)|0);
      var $164=HEAP8[($163)];
      var $165=(($164)&(255));
      var $166=$2;
      var $167=(($166)|0);
      var $168=HEAP8[($167)];
      var $169=(($168)&(255));
      var $170=HEAP32[((_jisx0208_decmap)>>2)];
      var $171=(($170+($169<<3))|0);
      var $172=(($171+5)|0);
      var $173=HEAP8[($172)];
      var $174=(($173)&(255));
      var $175=(($165)|(0)) <= (($174)|(0));
      if ($175) { label = 28; break; } else { label = 30; break; }
    case 28: 
      var $177=$2;
      var $178=(($177+1)|0);
      var $179=HEAP8[($178)];
      var $180=(($179)&(255));
      var $181=$2;
      var $182=(($181)|0);
      var $183=HEAP8[($182)];
      var $184=(($183)&(255));
      var $185=HEAP32[((_jisx0208_decmap)>>2)];
      var $186=(($185+($184<<3))|0);
      var $187=(($186+4)|0);
      var $188=HEAP8[($187)];
      var $189=(($188)&(255));
      var $190=((($180)-($189))|0);
      var $191=$2;
      var $192=(($191)|0);
      var $193=HEAP8[($192)];
      var $194=(($193)&(255));
      var $195=HEAP32[((_jisx0208_decmap)>>2)];
      var $196=(($195+($194<<3))|0);
      var $197=(($196)|0);
      var $198=HEAP32[(($197)>>2)];
      var $199=(($198+($190<<1))|0);
      var $200=HEAP16[(($199)>>1)];
      var $201=(($200)&(65535));
      $u=$201;
      var $202=(($201)|(0))!=65534;
      if ($202) { label = 29; break; } else { label = 30; break; }
    case 29: 
      label = 49; break;
    case 30: 
      var $205=$2;
      var $206=(($205)|0);
      var $207=HEAP8[($206)];
      var $208=(($207)&(255));
      var $209=HEAP32[((_jisx0213_1_bmp_decmap)>>2)];
      var $210=(($209+($208<<3))|0);
      var $211=(($210)|0);
      var $212=HEAP32[(($211)>>2)];
      var $213=(($212)|(0))!=0;
      if ($213) { label = 31; break; } else { label = 35; break; }
    case 31: 
      var $215=$2;
      var $216=(($215+1)|0);
      var $217=HEAP8[($216)];
      var $218=(($217)&(255));
      var $219=$2;
      var $220=(($219)|0);
      var $221=HEAP8[($220)];
      var $222=(($221)&(255));
      var $223=HEAP32[((_jisx0213_1_bmp_decmap)>>2)];
      var $224=(($223+($222<<3))|0);
      var $225=(($224+4)|0);
      var $226=HEAP8[($225)];
      var $227=(($226)&(255));
      var $228=(($218)|(0)) >= (($227)|(0));
      if ($228) { label = 32; break; } else { label = 35; break; }
    case 32: 
      var $230=$2;
      var $231=(($230+1)|0);
      var $232=HEAP8[($231)];
      var $233=(($232)&(255));
      var $234=$2;
      var $235=(($234)|0);
      var $236=HEAP8[($235)];
      var $237=(($236)&(255));
      var $238=HEAP32[((_jisx0213_1_bmp_decmap)>>2)];
      var $239=(($238+($237<<3))|0);
      var $240=(($239+5)|0);
      var $241=HEAP8[($240)];
      var $242=(($241)&(255));
      var $243=(($233)|(0)) <= (($242)|(0));
      if ($243) { label = 33; break; } else { label = 35; break; }
    case 33: 
      var $245=$2;
      var $246=(($245+1)|0);
      var $247=HEAP8[($246)];
      var $248=(($247)&(255));
      var $249=$2;
      var $250=(($249)|0);
      var $251=HEAP8[($250)];
      var $252=(($251)&(255));
      var $253=HEAP32[((_jisx0213_1_bmp_decmap)>>2)];
      var $254=(($253+($252<<3))|0);
      var $255=(($254+4)|0);
      var $256=HEAP8[($255)];
      var $257=(($256)&(255));
      var $258=((($248)-($257))|0);
      var $259=$2;
      var $260=(($259)|0);
      var $261=HEAP8[($260)];
      var $262=(($261)&(255));
      var $263=HEAP32[((_jisx0213_1_bmp_decmap)>>2)];
      var $264=(($263+($262<<3))|0);
      var $265=(($264)|0);
      var $266=HEAP32[(($265)>>2)];
      var $267=(($266+($258<<1))|0);
      var $268=HEAP16[(($267)>>1)];
      var $269=(($268)&(65535));
      $u=$269;
      var $270=(($269)|(0))!=65534;
      if ($270) { label = 34; break; } else { label = 35; break; }
    case 34: 
      label = 48; break;
    case 35: 
      var $273=$2;
      var $274=(($273)|0);
      var $275=HEAP8[($274)];
      var $276=(($275)&(255));
      var $277=HEAP32[((_jisx0213_1_emp_decmap)>>2)];
      var $278=(($277+($276<<3))|0);
      var $279=(($278)|0);
      var $280=HEAP32[(($279)>>2)];
      var $281=(($280)|(0))!=0;
      if ($281) { label = 36; break; } else { label = 40; break; }
    case 36: 
      var $283=$2;
      var $284=(($283+1)|0);
      var $285=HEAP8[($284)];
      var $286=(($285)&(255));
      var $287=$2;
      var $288=(($287)|0);
      var $289=HEAP8[($288)];
      var $290=(($289)&(255));
      var $291=HEAP32[((_jisx0213_1_emp_decmap)>>2)];
      var $292=(($291+($290<<3))|0);
      var $293=(($292+4)|0);
      var $294=HEAP8[($293)];
      var $295=(($294)&(255));
      var $296=(($286)|(0)) >= (($295)|(0));
      if ($296) { label = 37; break; } else { label = 40; break; }
    case 37: 
      var $298=$2;
      var $299=(($298+1)|0);
      var $300=HEAP8[($299)];
      var $301=(($300)&(255));
      var $302=$2;
      var $303=(($302)|0);
      var $304=HEAP8[($303)];
      var $305=(($304)&(255));
      var $306=HEAP32[((_jisx0213_1_emp_decmap)>>2)];
      var $307=(($306+($305<<3))|0);
      var $308=(($307+5)|0);
      var $309=HEAP8[($308)];
      var $310=(($309)&(255));
      var $311=(($301)|(0)) <= (($310)|(0));
      if ($311) { label = 38; break; } else { label = 40; break; }
    case 38: 
      var $313=$2;
      var $314=(($313+1)|0);
      var $315=HEAP8[($314)];
      var $316=(($315)&(255));
      var $317=$2;
      var $318=(($317)|0);
      var $319=HEAP8[($318)];
      var $320=(($319)&(255));
      var $321=HEAP32[((_jisx0213_1_emp_decmap)>>2)];
      var $322=(($321+($320<<3))|0);
      var $323=(($322+4)|0);
      var $324=HEAP8[($323)];
      var $325=(($324)&(255));
      var $326=((($316)-($325))|0);
      var $327=$2;
      var $328=(($327)|0);
      var $329=HEAP8[($328)];
      var $330=(($329)&(255));
      var $331=HEAP32[((_jisx0213_1_emp_decmap)>>2)];
      var $332=(($331+($330<<3))|0);
      var $333=(($332)|0);
      var $334=HEAP32[(($333)>>2)];
      var $335=(($334+($326<<1))|0);
      var $336=HEAP16[(($335)>>1)];
      var $337=(($336)&(65535));
      $u=$337;
      var $338=(($337)|(0))!=65534;
      if ($338) { label = 39; break; } else { label = 40; break; }
    case 39: 
      var $340=$u;
      var $341=$340 | 131072;
      $u=$341;
      label = 47; break;
    case 40: 
      var $343=$2;
      var $344=(($343)|0);
      var $345=HEAP8[($344)];
      var $346=(($345)&(255));
      var $347=HEAP32[((_jisx0213_pair_decmap)>>2)];
      var $348=(($347+($346<<3))|0);
      var $349=(($348)|0);
      var $350=HEAP32[(($349)>>2)];
      var $351=(($350)|(0))!=0;
      if ($351) { label = 41; break; } else { label = 45; break; }
    case 41: 
      var $353=$2;
      var $354=(($353+1)|0);
      var $355=HEAP8[($354)];
      var $356=(($355)&(255));
      var $357=$2;
      var $358=(($357)|0);
      var $359=HEAP8[($358)];
      var $360=(($359)&(255));
      var $361=HEAP32[((_jisx0213_pair_decmap)>>2)];
      var $362=(($361+($360<<3))|0);
      var $363=(($362+4)|0);
      var $364=HEAP8[($363)];
      var $365=(($364)&(255));
      var $366=(($356)|(0)) >= (($365)|(0));
      if ($366) { label = 42; break; } else { label = 45; break; }
    case 42: 
      var $368=$2;
      var $369=(($368+1)|0);
      var $370=HEAP8[($369)];
      var $371=(($370)&(255));
      var $372=$2;
      var $373=(($372)|0);
      var $374=HEAP8[($373)];
      var $375=(($374)&(255));
      var $376=HEAP32[((_jisx0213_pair_decmap)>>2)];
      var $377=(($376+($375<<3))|0);
      var $378=(($377+5)|0);
      var $379=HEAP8[($378)];
      var $380=(($379)&(255));
      var $381=(($371)|(0)) <= (($380)|(0));
      if ($381) { label = 43; break; } else { label = 45; break; }
    case 43: 
      var $383=$2;
      var $384=(($383+1)|0);
      var $385=HEAP8[($384)];
      var $386=(($385)&(255));
      var $387=$2;
      var $388=(($387)|0);
      var $389=HEAP8[($388)];
      var $390=(($389)&(255));
      var $391=HEAP32[((_jisx0213_pair_decmap)>>2)];
      var $392=(($391+($390<<3))|0);
      var $393=(($392+4)|0);
      var $394=HEAP8[($393)];
      var $395=(($394)&(255));
      var $396=((($386)-($395))|0);
      var $397=$2;
      var $398=(($397)|0);
      var $399=HEAP8[($398)];
      var $400=(($399)&(255));
      var $401=HEAP32[((_jisx0213_pair_decmap)>>2)];
      var $402=(($401+($400<<3))|0);
      var $403=(($402)|0);
      var $404=HEAP32[(($403)>>2)];
      var $405=(($404+($396<<2))|0);
      var $406=HEAP32[(($405)>>2)];
      $u=$406;
      var $407=(($406)|(0))!=65534;
      if ($407) { label = 44; break; } else { label = 45; break; }
    case 44: 
      label = 46; break;
    case 45: 
      $1=65535;
      label = 52; break;
    case 46: 
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
      var $416=$u;
      $1=$416;
      label = 52; break;
    case 52: 
      var $418=$1;
      return $418;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0213_2000_2_decoder($data) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $u;
      $2=$data;
      var $3=$2;
      var $4=(($3)|0);
      var $5=HEAP8[($4)];
      var $6=(($5)&(255));
      var $7=(($6)|(0))==125;
      if ($7) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $9=$2;
      var $10=(($9+1)|0);
      var $11=HEAP8[($10)];
      var $12=(($11)&(255));
      var $13=(($12)|(0))==59;
      if ($13) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $u=39709;
      label = 4; break;
    case 4: 
      var $16=$2;
      var $17=(($16)|0);
      var $18=HEAP8[($17)];
      var $19=(($18)&(255));
      var $20=HEAP32[((_jisx0213_2_bmp_decmap)>>2)];
      var $21=(($20+($19<<3))|0);
      var $22=(($21)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23)|(0))!=0;
      if ($24) { label = 5; break; } else { label = 9; break; }
    case 5: 
      var $26=$2;
      var $27=(($26+1)|0);
      var $28=HEAP8[($27)];
      var $29=(($28)&(255));
      var $30=$2;
      var $31=(($30)|0);
      var $32=HEAP8[($31)];
      var $33=(($32)&(255));
      var $34=HEAP32[((_jisx0213_2_bmp_decmap)>>2)];
      var $35=(($34+($33<<3))|0);
      var $36=(($35+4)|0);
      var $37=HEAP8[($36)];
      var $38=(($37)&(255));
      var $39=(($29)|(0)) >= (($38)|(0));
      if ($39) { label = 6; break; } else { label = 9; break; }
    case 6: 
      var $41=$2;
      var $42=(($41+1)|0);
      var $43=HEAP8[($42)];
      var $44=(($43)&(255));
      var $45=$2;
      var $46=(($45)|0);
      var $47=HEAP8[($46)];
      var $48=(($47)&(255));
      var $49=HEAP32[((_jisx0213_2_bmp_decmap)>>2)];
      var $50=(($49+($48<<3))|0);
      var $51=(($50+5)|0);
      var $52=HEAP8[($51)];
      var $53=(($52)&(255));
      var $54=(($44)|(0)) <= (($53)|(0));
      if ($54) { label = 7; break; } else { label = 9; break; }
    case 7: 
      var $56=$2;
      var $57=(($56+1)|0);
      var $58=HEAP8[($57)];
      var $59=(($58)&(255));
      var $60=$2;
      var $61=(($60)|0);
      var $62=HEAP8[($61)];
      var $63=(($62)&(255));
      var $64=HEAP32[((_jisx0213_2_bmp_decmap)>>2)];
      var $65=(($64+($63<<3))|0);
      var $66=(($65+4)|0);
      var $67=HEAP8[($66)];
      var $68=(($67)&(255));
      var $69=((($59)-($68))|0);
      var $70=$2;
      var $71=(($70)|0);
      var $72=HEAP8[($71)];
      var $73=(($72)&(255));
      var $74=HEAP32[((_jisx0213_2_bmp_decmap)>>2)];
      var $75=(($74+($73<<3))|0);
      var $76=(($75)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=(($77+($69<<1))|0);
      var $79=HEAP16[(($78)>>1)];
      var $80=(($79)&(65535));
      $u=$80;
      var $81=(($80)|(0))!=65534;
      if ($81) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 16; break;
    case 9: 
      var $84=$2;
      var $85=(($84)|0);
      var $86=HEAP8[($85)];
      var $87=(($86)&(255));
      var $88=HEAP32[((_jisx0213_2_emp_decmap)>>2)];
      var $89=(($88+($87<<3))|0);
      var $90=(($89)|0);
      var $91=HEAP32[(($90)>>2)];
      var $92=(($91)|(0))!=0;
      if ($92) { label = 10; break; } else { label = 14; break; }
    case 10: 
      var $94=$2;
      var $95=(($94+1)|0);
      var $96=HEAP8[($95)];
      var $97=(($96)&(255));
      var $98=$2;
      var $99=(($98)|0);
      var $100=HEAP8[($99)];
      var $101=(($100)&(255));
      var $102=HEAP32[((_jisx0213_2_emp_decmap)>>2)];
      var $103=(($102+($101<<3))|0);
      var $104=(($103+4)|0);
      var $105=HEAP8[($104)];
      var $106=(($105)&(255));
      var $107=(($97)|(0)) >= (($106)|(0));
      if ($107) { label = 11; break; } else { label = 14; break; }
    case 11: 
      var $109=$2;
      var $110=(($109+1)|0);
      var $111=HEAP8[($110)];
      var $112=(($111)&(255));
      var $113=$2;
      var $114=(($113)|0);
      var $115=HEAP8[($114)];
      var $116=(($115)&(255));
      var $117=HEAP32[((_jisx0213_2_emp_decmap)>>2)];
      var $118=(($117+($116<<3))|0);
      var $119=(($118+5)|0);
      var $120=HEAP8[($119)];
      var $121=(($120)&(255));
      var $122=(($112)|(0)) <= (($121)|(0));
      if ($122) { label = 12; break; } else { label = 14; break; }
    case 12: 
      var $124=$2;
      var $125=(($124+1)|0);
      var $126=HEAP8[($125)];
      var $127=(($126)&(255));
      var $128=$2;
      var $129=(($128)|0);
      var $130=HEAP8[($129)];
      var $131=(($130)&(255));
      var $132=HEAP32[((_jisx0213_2_emp_decmap)>>2)];
      var $133=(($132+($131<<3))|0);
      var $134=(($133+4)|0);
      var $135=HEAP8[($134)];
      var $136=(($135)&(255));
      var $137=((($127)-($136))|0);
      var $138=$2;
      var $139=(($138)|0);
      var $140=HEAP8[($139)];
      var $141=(($140)&(255));
      var $142=HEAP32[((_jisx0213_2_emp_decmap)>>2)];
      var $143=(($142+($141<<3))|0);
      var $144=(($143)|0);
      var $145=HEAP32[(($144)>>2)];
      var $146=(($145+($137<<1))|0);
      var $147=HEAP16[(($146)>>1)];
      var $148=(($147)&(65535));
      $u=$148;
      var $149=(($148)|(0))!=65534;
      if ($149) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $151=$u;
      var $152=$151 | 131072;
      $u=$152;
      label = 15; break;
    case 14: 
      $1=65535;
      label = 17; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $156=$u;
      $1=$156;
      label = 17; break;
    case 17: 
      var $158=$1;
      return $158;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0213_2000_1_encoder_paironly($data, $length) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $coded;
      var $ilength;
      $2=$data;
      $3=$length;
      var $4=$3;
      var $5=HEAP32[(($4)>>2)];
      $ilength=$5;
      var $6=$2;
      var $7=$3;
      var $8=_jisx0213_encoder($6, $7, 2000);
      $coded=$8;
      var $9=$ilength;
      if ((($9)|(0))==1) {
        label = 2; break;
      }
      else if ((($9)|(0))==2) {
        label = 5; break;
      }
      else {
      label = 8; break;
      }
    case 2: 
      var $11=$coded;
      var $12=(($11)&(65535));
      var $13=(($12)|(0))==65534;
      if ($13) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=-2;
      label = 9; break;
    case 4: 
      $1=-1;
      label = 9; break;
    case 5: 
      var $17=$3;
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18)|(0))!=2;
      if ($19) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=-1;
      label = 9; break;
    case 7: 
      var $22=$coded;
      $1=$22;
      label = 9; break;
    case 8: 
      $1=-1;
      label = 9; break;
    case 9: 
      var $25=$1;
      return $25;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0213_2000_1_encoder($data, $length) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $coded;
      $2=$data;
      $3=$length;
      var $4=$2;
      var $5=$3;
      var $6=_jisx0213_encoder($4, $5, 2000);
      $coded=$6;
      var $7=$coded;
      var $8=(($7)&(65535));
      var $9=(($8)|(0))==65535;
      if ($9) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $11=$coded;
      var $12=(($11)&(65535));
      var $13=(($12)|(0))==65534;
      if ($13) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $15=$coded;
      $1=$15;
      label = 7; break;
    case 4: 
      var $17=$coded;
      var $18=(($17)&(65535));
      var $19=$18 & 32768;
      var $20=(($19)|(0))!=0;
      if ($20) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=-1;
      label = 7; break;
    case 6: 
      var $23=$coded;
      $1=$23;
      label = 7; break;
    case 7: 
      var $25=$1;
      return $25;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0213_2000_2_encoder($data, $length) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $coded;
      $2=$data;
      $3=$length;
      var $4=$2;
      var $5=$3;
      var $6=_jisx0213_encoder($4, $5, 2000);
      $coded=$6;
      var $7=$coded;
      var $8=(($7)&(65535));
      var $9=(($8)|(0))==65535;
      if ($9) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $11=$coded;
      var $12=(($11)&(65535));
      var $13=(($12)|(0))==65534;
      if ($13) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $15=$coded;
      $1=$15;
      label = 7; break;
    case 4: 
      var $17=$coded;
      var $18=(($17)&(65535));
      var $19=$18 & 32768;
      var $20=(($19)|(0))!=0;
      if ($20) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $22=$coded;
      var $23=(($22)&(65535));
      var $24=$23 & 32767;
      var $25=(($24) & 65535);
      $1=$25;
      label = 7; break;
    case 6: 
      $1=-1;
      label = 7; break;
    case 7: 
      var $28=$1;
      return $28;
    default: assert(0, "bad label: " + label);
  }
}
function _find_pairencmap($body, $modifier, $haystack, $haystacksize) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $pos;
      var $min;
      var $max;
      var $value;
      $2=$body;
      $3=$modifier;
      $4=$haystack;
      $5=$haystacksize;
      var $6=$2;
      var $7=(($6)&(65535));
      var $8=$7 << 16;
      var $9=$3;
      var $10=(($9)&(65535));
      var $11=$8 | $10;
      $value=$11;
      $min=0;
      var $12=$5;
      $max=$12;
      var $13=$5;
      var $14=$13 >> 1;
      $pos=$14;
      label = 2; break;
    case 2: 
      var $16=$min;
      var $17=$max;
      var $18=(($16)|(0))!=(($17)|(0));
      if ($18) { label = 3; break; } else { label = 17; break; }
    case 3: 
      var $20=$value;
      var $21=$pos;
      var $22=$4;
      var $23=(($22+($21<<3))|0);
      var $24=(($23)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=(($20)>>>(0)) < (($25)>>>(0));
      if ($26) { label = 4; break; } else { label = 8; break; }
    case 4: 
      var $28=$max;
      var $29=$pos;
      var $30=(($28)|(0))==(($29)|(0));
      if ($30) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 17; break;
    case 6: 
      var $33=$pos;
      $max=$33;
      label = 7; break;
    case 7: 
      label = 15; break;
    case 8: 
      var $36=$value;
      var $37=$pos;
      var $38=$4;
      var $39=(($38+($37<<3))|0);
      var $40=(($39)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=(($36)>>>(0)) > (($41)>>>(0));
      if ($42) { label = 9; break; } else { label = 13; break; }
    case 9: 
      var $44=$min;
      var $45=$pos;
      var $46=(($44)|(0))==(($45)|(0));
      if ($46) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 17; break;
    case 11: 
      var $49=$pos;
      $min=$49;
      label = 12; break;
    case 12: 
      label = 14; break;
    case 13: 
      label = 17; break;
    case 14: 
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $55=$min;
      var $56=$max;
      var $57=((($55)+($56))|0);
      var $58=$57 >> 1;
      $pos=$58;
      label = 2; break;
    case 17: 
      var $60=$value;
      var $61=$pos;
      var $62=$4;
      var $63=(($62+($61<<3))|0);
      var $64=(($63)|0);
      var $65=HEAP32[(($64)>>2)];
      var $66=(($60)|(0))==(($65)|(0));
      if ($66) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $68=$pos;
      var $69=$4;
      var $70=(($69+($68<<3))|0);
      var $71=(($70+4)|0);
      var $72=HEAP16[(($71)>>1)];
      $1=$72;
      label = 20; break;
    case 19: 
      $1=-3;
      label = 20; break;
    case 20: 
      var $75=$1;
      return $75;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0213_2004_1_decoder($data) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $u;
      $2=$data;
      var $3=$2;
      var $4=(($3)|0);
      var $5=HEAP8[($4)];
      var $6=(($5)&(255));
      var $7=(($6)|(0))==33;
      if ($7) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $9=$2;
      var $10=(($9+1)|0);
      var $11=HEAP8[($10)];
      var $12=(($11)&(255));
      var $13=(($12)|(0))==64;
      if ($13) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=65340;
      label = 30; break;
    case 4: 
      var $16=$2;
      var $17=(($16)|0);
      var $18=HEAP8[($17)];
      var $19=(($18)&(255));
      var $20=HEAP32[((_jisx0208_decmap)>>2)];
      var $21=(($20+($19<<3))|0);
      var $22=(($21)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23)|(0))!=0;
      if ($24) { label = 5; break; } else { label = 9; break; }
    case 5: 
      var $26=$2;
      var $27=(($26+1)|0);
      var $28=HEAP8[($27)];
      var $29=(($28)&(255));
      var $30=$2;
      var $31=(($30)|0);
      var $32=HEAP8[($31)];
      var $33=(($32)&(255));
      var $34=HEAP32[((_jisx0208_decmap)>>2)];
      var $35=(($34+($33<<3))|0);
      var $36=(($35+4)|0);
      var $37=HEAP8[($36)];
      var $38=(($37)&(255));
      var $39=(($29)|(0)) >= (($38)|(0));
      if ($39) { label = 6; break; } else { label = 9; break; }
    case 6: 
      var $41=$2;
      var $42=(($41+1)|0);
      var $43=HEAP8[($42)];
      var $44=(($43)&(255));
      var $45=$2;
      var $46=(($45)|0);
      var $47=HEAP8[($46)];
      var $48=(($47)&(255));
      var $49=HEAP32[((_jisx0208_decmap)>>2)];
      var $50=(($49+($48<<3))|0);
      var $51=(($50+5)|0);
      var $52=HEAP8[($51)];
      var $53=(($52)&(255));
      var $54=(($44)|(0)) <= (($53)|(0));
      if ($54) { label = 7; break; } else { label = 9; break; }
    case 7: 
      var $56=$2;
      var $57=(($56+1)|0);
      var $58=HEAP8[($57)];
      var $59=(($58)&(255));
      var $60=$2;
      var $61=(($60)|0);
      var $62=HEAP8[($61)];
      var $63=(($62)&(255));
      var $64=HEAP32[((_jisx0208_decmap)>>2)];
      var $65=(($64+($63<<3))|0);
      var $66=(($65+4)|0);
      var $67=HEAP8[($66)];
      var $68=(($67)&(255));
      var $69=((($59)-($68))|0);
      var $70=$2;
      var $71=(($70)|0);
      var $72=HEAP8[($71)];
      var $73=(($72)&(255));
      var $74=HEAP32[((_jisx0208_decmap)>>2)];
      var $75=(($74+($73<<3))|0);
      var $76=(($75)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=(($77+($69<<1))|0);
      var $79=HEAP16[(($78)>>1)];
      var $80=(($79)&(65535));
      $u=$80;
      var $81=(($80)|(0))!=65534;
      if ($81) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 28; break;
    case 9: 
      var $84=$2;
      var $85=(($84)|0);
      var $86=HEAP8[($85)];
      var $87=(($86)&(255));
      var $88=HEAP32[((_jisx0213_1_bmp_decmap)>>2)];
      var $89=(($88+($87<<3))|0);
      var $90=(($89)|0);
      var $91=HEAP32[(($90)>>2)];
      var $92=(($91)|(0))!=0;
      if ($92) { label = 10; break; } else { label = 14; break; }
    case 10: 
      var $94=$2;
      var $95=(($94+1)|0);
      var $96=HEAP8[($95)];
      var $97=(($96)&(255));
      var $98=$2;
      var $99=(($98)|0);
      var $100=HEAP8[($99)];
      var $101=(($100)&(255));
      var $102=HEAP32[((_jisx0213_1_bmp_decmap)>>2)];
      var $103=(($102+($101<<3))|0);
      var $104=(($103+4)|0);
      var $105=HEAP8[($104)];
      var $106=(($105)&(255));
      var $107=(($97)|(0)) >= (($106)|(0));
      if ($107) { label = 11; break; } else { label = 14; break; }
    case 11: 
      var $109=$2;
      var $110=(($109+1)|0);
      var $111=HEAP8[($110)];
      var $112=(($111)&(255));
      var $113=$2;
      var $114=(($113)|0);
      var $115=HEAP8[($114)];
      var $116=(($115)&(255));
      var $117=HEAP32[((_jisx0213_1_bmp_decmap)>>2)];
      var $118=(($117+($116<<3))|0);
      var $119=(($118+5)|0);
      var $120=HEAP8[($119)];
      var $121=(($120)&(255));
      var $122=(($112)|(0)) <= (($121)|(0));
      if ($122) { label = 12; break; } else { label = 14; break; }
    case 12: 
      var $124=$2;
      var $125=(($124+1)|0);
      var $126=HEAP8[($125)];
      var $127=(($126)&(255));
      var $128=$2;
      var $129=(($128)|0);
      var $130=HEAP8[($129)];
      var $131=(($130)&(255));
      var $132=HEAP32[((_jisx0213_1_bmp_decmap)>>2)];
      var $133=(($132+($131<<3))|0);
      var $134=(($133+4)|0);
      var $135=HEAP8[($134)];
      var $136=(($135)&(255));
      var $137=((($127)-($136))|0);
      var $138=$2;
      var $139=(($138)|0);
      var $140=HEAP8[($139)];
      var $141=(($140)&(255));
      var $142=HEAP32[((_jisx0213_1_bmp_decmap)>>2)];
      var $143=(($142+($141<<3))|0);
      var $144=(($143)|0);
      var $145=HEAP32[(($144)>>2)];
      var $146=(($145+($137<<1))|0);
      var $147=HEAP16[(($146)>>1)];
      var $148=(($147)&(65535));
      $u=$148;
      var $149=(($148)|(0))!=65534;
      if ($149) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 27; break;
    case 14: 
      var $152=$2;
      var $153=(($152)|0);
      var $154=HEAP8[($153)];
      var $155=(($154)&(255));
      var $156=HEAP32[((_jisx0213_1_emp_decmap)>>2)];
      var $157=(($156+($155<<3))|0);
      var $158=(($157)|0);
      var $159=HEAP32[(($158)>>2)];
      var $160=(($159)|(0))!=0;
      if ($160) { label = 15; break; } else { label = 19; break; }
    case 15: 
      var $162=$2;
      var $163=(($162+1)|0);
      var $164=HEAP8[($163)];
      var $165=(($164)&(255));
      var $166=$2;
      var $167=(($166)|0);
      var $168=HEAP8[($167)];
      var $169=(($168)&(255));
      var $170=HEAP32[((_jisx0213_1_emp_decmap)>>2)];
      var $171=(($170+($169<<3))|0);
      var $172=(($171+4)|0);
      var $173=HEAP8[($172)];
      var $174=(($173)&(255));
      var $175=(($165)|(0)) >= (($174)|(0));
      if ($175) { label = 16; break; } else { label = 19; break; }
    case 16: 
      var $177=$2;
      var $178=(($177+1)|0);
      var $179=HEAP8[($178)];
      var $180=(($179)&(255));
      var $181=$2;
      var $182=(($181)|0);
      var $183=HEAP8[($182)];
      var $184=(($183)&(255));
      var $185=HEAP32[((_jisx0213_1_emp_decmap)>>2)];
      var $186=(($185+($184<<3))|0);
      var $187=(($186+5)|0);
      var $188=HEAP8[($187)];
      var $189=(($188)&(255));
      var $190=(($180)|(0)) <= (($189)|(0));
      if ($190) { label = 17; break; } else { label = 19; break; }
    case 17: 
      var $192=$2;
      var $193=(($192+1)|0);
      var $194=HEAP8[($193)];
      var $195=(($194)&(255));
      var $196=$2;
      var $197=(($196)|0);
      var $198=HEAP8[($197)];
      var $199=(($198)&(255));
      var $200=HEAP32[((_jisx0213_1_emp_decmap)>>2)];
      var $201=(($200+($199<<3))|0);
      var $202=(($201+4)|0);
      var $203=HEAP8[($202)];
      var $204=(($203)&(255));
      var $205=((($195)-($204))|0);
      var $206=$2;
      var $207=(($206)|0);
      var $208=HEAP8[($207)];
      var $209=(($208)&(255));
      var $210=HEAP32[((_jisx0213_1_emp_decmap)>>2)];
      var $211=(($210+($209<<3))|0);
      var $212=(($211)|0);
      var $213=HEAP32[(($212)>>2)];
      var $214=(($213+($205<<1))|0);
      var $215=HEAP16[(($214)>>1)];
      var $216=(($215)&(65535));
      $u=$216;
      var $217=(($216)|(0))!=65534;
      if ($217) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $219=$u;
      var $220=$219 | 131072;
      $u=$220;
      label = 26; break;
    case 19: 
      var $222=$2;
      var $223=(($222)|0);
      var $224=HEAP8[($223)];
      var $225=(($224)&(255));
      var $226=HEAP32[((_jisx0213_pair_decmap)>>2)];
      var $227=(($226+($225<<3))|0);
      var $228=(($227)|0);
      var $229=HEAP32[(($228)>>2)];
      var $230=(($229)|(0))!=0;
      if ($230) { label = 20; break; } else { label = 24; break; }
    case 20: 
      var $232=$2;
      var $233=(($232+1)|0);
      var $234=HEAP8[($233)];
      var $235=(($234)&(255));
      var $236=$2;
      var $237=(($236)|0);
      var $238=HEAP8[($237)];
      var $239=(($238)&(255));
      var $240=HEAP32[((_jisx0213_pair_decmap)>>2)];
      var $241=(($240+($239<<3))|0);
      var $242=(($241+4)|0);
      var $243=HEAP8[($242)];
      var $244=(($243)&(255));
      var $245=(($235)|(0)) >= (($244)|(0));
      if ($245) { label = 21; break; } else { label = 24; break; }
    case 21: 
      var $247=$2;
      var $248=(($247+1)|0);
      var $249=HEAP8[($248)];
      var $250=(($249)&(255));
      var $251=$2;
      var $252=(($251)|0);
      var $253=HEAP8[($252)];
      var $254=(($253)&(255));
      var $255=HEAP32[((_jisx0213_pair_decmap)>>2)];
      var $256=(($255+($254<<3))|0);
      var $257=(($256+5)|0);
      var $258=HEAP8[($257)];
      var $259=(($258)&(255));
      var $260=(($250)|(0)) <= (($259)|(0));
      if ($260) { label = 22; break; } else { label = 24; break; }
    case 22: 
      var $262=$2;
      var $263=(($262+1)|0);
      var $264=HEAP8[($263)];
      var $265=(($264)&(255));
      var $266=$2;
      var $267=(($266)|0);
      var $268=HEAP8[($267)];
      var $269=(($268)&(255));
      var $270=HEAP32[((_jisx0213_pair_decmap)>>2)];
      var $271=(($270+($269<<3))|0);
      var $272=(($271+4)|0);
      var $273=HEAP8[($272)];
      var $274=(($273)&(255));
      var $275=((($265)-($274))|0);
      var $276=$2;
      var $277=(($276)|0);
      var $278=HEAP8[($277)];
      var $279=(($278)&(255));
      var $280=HEAP32[((_jisx0213_pair_decmap)>>2)];
      var $281=(($280+($279<<3))|0);
      var $282=(($281)|0);
      var $283=HEAP32[(($282)>>2)];
      var $284=(($283+($275<<2))|0);
      var $285=HEAP32[(($284)>>2)];
      $u=$285;
      var $286=(($285)|(0))!=65534;
      if ($286) { label = 23; break; } else { label = 24; break; }
    case 23: 
      label = 25; break;
    case 24: 
      $1=65535;
      label = 30; break;
    case 25: 
      label = 26; break;
    case 26: 
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      var $294=$u;
      $1=$294;
      label = 30; break;
    case 30: 
      var $296=$1;
      return $296;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0213_encoder($data, $length, $config) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $coded;
      $2=$data;
      $3=$length;
      $4=$config;
      var $5=$3;
      var $6=HEAP32[(($5)>>2)];
      if ((($6)|(0))==1) {
        label = 2; break;
      }
      else if ((($6)|(0))==2) {
        label = 49; break;
      }
      else if ((($6)|(0))==-1) {
        label = 55; break;
      }
      else {
      label = 58; break;
      }
    case 2: 
      var $8=$2;
      var $9=HEAP32[(($8)>>2)];
      var $10=(($9)>>>(0)) >= 65536;
      if ($10) { label = 3; break; } else { label = 15; break; }
    case 3: 
      var $12=$2;
      var $13=HEAP32[(($12)>>2)];
      var $14=$13 >>> 16;
      var $15=(($14)|(0))==2;
      if ($15) { label = 4; break; } else { label = 14; break; }
    case 4: 
      var $17=$4;
      var $18=(($17)|(0))==2000;
      if ($18) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $20=$2;
      var $21=HEAP32[(($20)>>2)];
      var $22=(($21)|(0))==134047;
      if ($22) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=-1;
      label = 59; break;
    case 7: 
      var $25=$2;
      var $26=HEAP32[(($25)>>2)];
      var $27=$26 & 65535;
      var $28=$27 >>> 8;
      var $29=HEAP32[((_jisx0213_emp_encmap)>>2)];
      var $30=(($29+($28<<3))|0);
      var $31=(($30)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32)|(0))!=0;
      if ($33) { label = 8; break; } else { label = 12; break; }
    case 8: 
      var $35=$2;
      var $36=HEAP32[(($35)>>2)];
      var $37=$36 & 65535;
      var $38=$37 & 255;
      var $39=$2;
      var $40=HEAP32[(($39)>>2)];
      var $41=$40 & 65535;
      var $42=$41 >>> 8;
      var $43=HEAP32[((_jisx0213_emp_encmap)>>2)];
      var $44=(($43+($42<<3))|0);
      var $45=(($44+4)|0);
      var $46=HEAP8[($45)];
      var $47=(($46)&(255));
      var $48=(($38)>>>(0)) >= (($47)>>>(0));
      if ($48) { label = 9; break; } else { label = 12; break; }
    case 9: 
      var $50=$2;
      var $51=HEAP32[(($50)>>2)];
      var $52=$51 & 65535;
      var $53=$52 & 255;
      var $54=$2;
      var $55=HEAP32[(($54)>>2)];
      var $56=$55 & 65535;
      var $57=$56 >>> 8;
      var $58=HEAP32[((_jisx0213_emp_encmap)>>2)];
      var $59=(($58+($57<<3))|0);
      var $60=(($59+5)|0);
      var $61=HEAP8[($60)];
      var $62=(($61)&(255));
      var $63=(($53)>>>(0)) <= (($62)>>>(0));
      if ($63) { label = 10; break; } else { label = 12; break; }
    case 10: 
      var $65=$2;
      var $66=HEAP32[(($65)>>2)];
      var $67=$66 & 65535;
      var $68=$67 & 255;
      var $69=$2;
      var $70=HEAP32[(($69)>>2)];
      var $71=$70 & 65535;
      var $72=$71 >>> 8;
      var $73=HEAP32[((_jisx0213_emp_encmap)>>2)];
      var $74=(($73+($72<<3))|0);
      var $75=(($74+4)|0);
      var $76=HEAP8[($75)];
      var $77=(($76)&(255));
      var $78=((($68)-($77))|0);
      var $79=$2;
      var $80=HEAP32[(($79)>>2)];
      var $81=$80 & 65535;
      var $82=$81 >>> 8;
      var $83=HEAP32[((_jisx0213_emp_encmap)>>2)];
      var $84=(($83+($82<<3))|0);
      var $85=(($84)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=(($86+($78<<1))|0);
      var $88=HEAP16[(($87)>>1)];
      $coded=$88;
      var $89=(($88)&(65535));
      var $90=(($89)|(0))!=65535;
      if ($90) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $92=$coded;
      $1=$92;
      label = 59; break;
    case 12: 
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      $1=-1;
      label = 59; break;
    case 15: 
      var $97=$4;
      var $98=(($97)|(0))==2000;
      if ($98) { label = 16; break; } else { label = 27; break; }
    case 16: 
      var $100=$2;
      var $101=HEAP32[(($100)>>2)];
      var $102=(($101)|(0))==39708;
      if ($102) { label = 26; break; } else { label = 17; break; }
    case 17: 
      var $104=$2;
      var $105=HEAP32[(($104)>>2)];
      var $106=(($105)|(0))==20465;
      if ($106) { label = 26; break; } else { label = 18; break; }
    case 18: 
      var $108=$2;
      var $109=HEAP32[(($108)>>2)];
      var $110=(($109)|(0))==21085;
      if ($110) { label = 26; break; } else { label = 19; break; }
    case 19: 
      var $112=$2;
      var $113=HEAP32[(($112)>>2)];
      var $114=(($113)|(0))==21534;
      if ($114) { label = 26; break; } else { label = 20; break; }
    case 20: 
      var $116=$2;
      var $117=HEAP32[(($116)>>2)];
      var $118=(($117)|(0))==22099;
      if ($118) { label = 26; break; } else { label = 21; break; }
    case 21: 
      var $120=$2;
      var $121=HEAP32[(($120)>>2)];
      var $122=(($121)|(0))==23032;
      if ($122) { label = 26; break; } else { label = 22; break; }
    case 22: 
      var $124=$2;
      var $125=HEAP32[(($124)>>2)];
      var $126=(($125)|(0))==23643;
      if ($126) { label = 26; break; } else { label = 23; break; }
    case 23: 
      var $128=$2;
      var $129=HEAP32[(($128)>>2)];
      var $130=(($129)|(0))==24183;
      if ($130) { label = 26; break; } else { label = 24; break; }
    case 24: 
      var $132=$2;
      var $133=HEAP32[(($132)>>2)];
      var $134=(($133)|(0))==30246;
      if ($134) { label = 26; break; } else { label = 25; break; }
    case 25: 
      var $136=$2;
      var $137=HEAP32[(($136)>>2)];
      var $138=(($137)|(0))==32363;
      if ($138) { label = 26; break; } else { label = 27; break; }
    case 26: 
      $1=-1;
      label = 59; break;
    case 27: 
      var $141=$4;
      var $142=(($141)|(0))==2000;
      if ($142) { label = 28; break; } else { label = 30; break; }
    case 28: 
      var $144=$2;
      var $145=HEAP32[(($144)>>2)];
      var $146=(($145)|(0))==39709;
      if ($146) { label = 29; break; } else { label = 30; break; }
    case 29: 
      $coded=-709;
      label = 47; break;
    case 30: 
      var $149=$2;
      var $150=HEAP32[(($149)>>2)];
      var $151=$150 >>> 8;
      var $152=HEAP32[((_jisx0213_bmp_encmap)>>2)];
      var $153=(($152+($151<<3))|0);
      var $154=(($153)|0);
      var $155=HEAP32[(($154)>>2)];
      var $156=(($155)|(0))!=0;
      if ($156) { label = 31; break; } else { label = 37; break; }
    case 31: 
      var $158=$2;
      var $159=HEAP32[(($158)>>2)];
      var $160=$159 & 255;
      var $161=$2;
      var $162=HEAP32[(($161)>>2)];
      var $163=$162 >>> 8;
      var $164=HEAP32[((_jisx0213_bmp_encmap)>>2)];
      var $165=(($164+($163<<3))|0);
      var $166=(($165+4)|0);
      var $167=HEAP8[($166)];
      var $168=(($167)&(255));
      var $169=(($160)>>>(0)) >= (($168)>>>(0));
      if ($169) { label = 32; break; } else { label = 37; break; }
    case 32: 
      var $171=$2;
      var $172=HEAP32[(($171)>>2)];
      var $173=$172 & 255;
      var $174=$2;
      var $175=HEAP32[(($174)>>2)];
      var $176=$175 >>> 8;
      var $177=HEAP32[((_jisx0213_bmp_encmap)>>2)];
      var $178=(($177+($176<<3))|0);
      var $179=(($178+5)|0);
      var $180=HEAP8[($179)];
      var $181=(($180)&(255));
      var $182=(($173)>>>(0)) <= (($181)>>>(0));
      if ($182) { label = 33; break; } else { label = 37; break; }
    case 33: 
      var $184=$2;
      var $185=HEAP32[(($184)>>2)];
      var $186=$185 & 255;
      var $187=$2;
      var $188=HEAP32[(($187)>>2)];
      var $189=$188 >>> 8;
      var $190=HEAP32[((_jisx0213_bmp_encmap)>>2)];
      var $191=(($190+($189<<3))|0);
      var $192=(($191+4)|0);
      var $193=HEAP8[($192)];
      var $194=(($193)&(255));
      var $195=((($186)-($194))|0);
      var $196=$2;
      var $197=HEAP32[(($196)>>2)];
      var $198=$197 >>> 8;
      var $199=HEAP32[((_jisx0213_bmp_encmap)>>2)];
      var $200=(($199+($198<<3))|0);
      var $201=(($200)|0);
      var $202=HEAP32[(($201)>>2)];
      var $203=(($202+($195<<1))|0);
      var $204=HEAP16[(($203)>>1)];
      $coded=$204;
      var $205=(($204)&(65535));
      var $206=(($205)|(0))!=65535;
      if ($206) { label = 34; break; } else { label = 37; break; }
    case 34: 
      var $208=$coded;
      var $209=(($208)&(65535));
      var $210=(($209)|(0))==65534;
      if ($210) { label = 35; break; } else { label = 36; break; }
    case 35: 
      $1=-2;
      label = 59; break;
    case 36: 
      label = 46; break;
    case 37: 
      var $214=$2;
      var $215=HEAP32[(($214)>>2)];
      var $216=$215 >>> 8;
      var $217=HEAP32[((_jisxcommon_encmap)>>2)];
      var $218=(($217+($216<<3))|0);
      var $219=(($218)|0);
      var $220=HEAP32[(($219)>>2)];
      var $221=(($220)|(0))!=0;
      if ($221) { label = 38; break; } else { label = 44; break; }
    case 38: 
      var $223=$2;
      var $224=HEAP32[(($223)>>2)];
      var $225=$224 & 255;
      var $226=$2;
      var $227=HEAP32[(($226)>>2)];
      var $228=$227 >>> 8;
      var $229=HEAP32[((_jisxcommon_encmap)>>2)];
      var $230=(($229+($228<<3))|0);
      var $231=(($230+4)|0);
      var $232=HEAP8[($231)];
      var $233=(($232)&(255));
      var $234=(($225)>>>(0)) >= (($233)>>>(0));
      if ($234) { label = 39; break; } else { label = 44; break; }
    case 39: 
      var $236=$2;
      var $237=HEAP32[(($236)>>2)];
      var $238=$237 & 255;
      var $239=$2;
      var $240=HEAP32[(($239)>>2)];
      var $241=$240 >>> 8;
      var $242=HEAP32[((_jisxcommon_encmap)>>2)];
      var $243=(($242+($241<<3))|0);
      var $244=(($243+5)|0);
      var $245=HEAP8[($244)];
      var $246=(($245)&(255));
      var $247=(($238)>>>(0)) <= (($246)>>>(0));
      if ($247) { label = 40; break; } else { label = 44; break; }
    case 40: 
      var $249=$2;
      var $250=HEAP32[(($249)>>2)];
      var $251=$250 & 255;
      var $252=$2;
      var $253=HEAP32[(($252)>>2)];
      var $254=$253 >>> 8;
      var $255=HEAP32[((_jisxcommon_encmap)>>2)];
      var $256=(($255+($254<<3))|0);
      var $257=(($256+4)|0);
      var $258=HEAP8[($257)];
      var $259=(($258)&(255));
      var $260=((($251)-($259))|0);
      var $261=$2;
      var $262=HEAP32[(($261)>>2)];
      var $263=$262 >>> 8;
      var $264=HEAP32[((_jisxcommon_encmap)>>2)];
      var $265=(($264+($263<<3))|0);
      var $266=(($265)|0);
      var $267=HEAP32[(($266)>>2)];
      var $268=(($267+($260<<1))|0);
      var $269=HEAP16[(($268)>>1)];
      $coded=$269;
      var $270=(($269)&(65535));
      var $271=(($270)|(0))!=65535;
      if ($271) { label = 41; break; } else { label = 44; break; }
    case 41: 
      var $273=$coded;
      var $274=(($273)&(65535));
      var $275=$274 & 32768;
      var $276=(($275)|(0))!=0;
      if ($276) { label = 42; break; } else { label = 43; break; }
    case 42: 
      $1=-1;
      label = 59; break;
    case 43: 
      label = 45; break;
    case 44: 
      $1=-1;
      label = 59; break;
    case 45: 
      label = 46; break;
    case 46: 
      label = 47; break;
    case 47: 
      label = 48; break;
    case 48: 
      var $284=$coded;
      $1=$284;
      label = 59; break;
    case 49: 
      var $286=$2;
      var $287=(($286)|0);
      var $288=HEAP32[(($287)>>2)];
      var $289=(($288) & 65535);
      var $290=$2;
      var $291=(($290+4)|0);
      var $292=HEAP32[(($291)>>2)];
      var $293=(($292) & 65535);
      var $294=HEAP32[((_jisx0213_pair_encmap)>>2)];
      var $295=_find_pairencmap($289, $293, $294, 46);
      $coded=$295;
      var $296=$coded;
      var $297=(($296)&(65535));
      var $298=(($297)|(0))==65533;
      if ($298) { label = 50; break; } else { label = 53; break; }
    case 50: 
      var $300=$3;
      HEAP32[(($300)>>2)]=1;
      var $301=$2;
      var $302=(($301)|0);
      var $303=HEAP32[(($302)>>2)];
      var $304=(($303) & 65535);
      var $305=HEAP32[((_jisx0213_pair_encmap)>>2)];
      var $306=_find_pairencmap($304, 0, $305, 46);
      $coded=$306;
      var $307=$coded;
      var $308=(($307)&(65535));
      var $309=(($308)|(0))==65533;
      if ($309) { label = 51; break; } else { label = 52; break; }
    case 51: 
      $1=-1;
      label = 59; break;
    case 52: 
      label = 54; break;
    case 53: 
      var $313=$coded;
      $1=$313;
      label = 59; break;
    case 54: 
      label = 55; break;
    case 55: 
      var $316=$3;
      HEAP32[(($316)>>2)]=1;
      var $317=$2;
      var $318=(($317)|0);
      var $319=HEAP32[(($318)>>2)];
      var $320=(($319) & 65535);
      var $321=HEAP32[((_jisx0213_pair_encmap)>>2)];
      var $322=_find_pairencmap($320, 0, $321, 46);
      $coded=$322;
      var $323=$coded;
      var $324=(($323)&(65535));
      var $325=(($324)|(0))==65533;
      if ($325) { label = 56; break; } else { label = 57; break; }
    case 56: 
      $1=-1;
      label = 59; break;
    case 57: 
      var $328=$coded;
      $1=$328;
      label = 59; break;
    case 58: 
      $1=-1;
      label = 59; break;
    case 59: 
      var $331=$1;
      return $331;
    default: assert(0, "bad label: " + label);
  }
}
function _dummy_decoder($data) {
  var label = 0;
  var $1;
  $1=$data;
  return 65535;
}
function _dummy_encoder($data, $length) {
  var label = 0;
  var $1;
  var $2;
  $1=$data;
  $2=$length;
  return -1;
}
function _jisx0213_2004_2_decoder($data) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $u;
      $2=$data;
      var $3=$2;
      var $4=(($3)|0);
      var $5=HEAP8[($4)];
      var $6=(($5)&(255));
      var $7=HEAP32[((_jisx0213_2_bmp_decmap)>>2)];
      var $8=(($7+($6<<3))|0);
      var $9=(($8)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10)|(0))!=0;
      if ($11) { label = 2; break; } else { label = 6; break; }
    case 2: 
      var $13=$2;
      var $14=(($13+1)|0);
      var $15=HEAP8[($14)];
      var $16=(($15)&(255));
      var $17=$2;
      var $18=(($17)|0);
      var $19=HEAP8[($18)];
      var $20=(($19)&(255));
      var $21=HEAP32[((_jisx0213_2_bmp_decmap)>>2)];
      var $22=(($21+($20<<3))|0);
      var $23=(($22+4)|0);
      var $24=HEAP8[($23)];
      var $25=(($24)&(255));
      var $26=(($16)|(0)) >= (($25)|(0));
      if ($26) { label = 3; break; } else { label = 6; break; }
    case 3: 
      var $28=$2;
      var $29=(($28+1)|0);
      var $30=HEAP8[($29)];
      var $31=(($30)&(255));
      var $32=$2;
      var $33=(($32)|0);
      var $34=HEAP8[($33)];
      var $35=(($34)&(255));
      var $36=HEAP32[((_jisx0213_2_bmp_decmap)>>2)];
      var $37=(($36+($35<<3))|0);
      var $38=(($37+5)|0);
      var $39=HEAP8[($38)];
      var $40=(($39)&(255));
      var $41=(($31)|(0)) <= (($40)|(0));
      if ($41) { label = 4; break; } else { label = 6; break; }
    case 4: 
      var $43=$2;
      var $44=(($43+1)|0);
      var $45=HEAP8[($44)];
      var $46=(($45)&(255));
      var $47=$2;
      var $48=(($47)|0);
      var $49=HEAP8[($48)];
      var $50=(($49)&(255));
      var $51=HEAP32[((_jisx0213_2_bmp_decmap)>>2)];
      var $52=(($51+($50<<3))|0);
      var $53=(($52+4)|0);
      var $54=HEAP8[($53)];
      var $55=(($54)&(255));
      var $56=((($46)-($55))|0);
      var $57=$2;
      var $58=(($57)|0);
      var $59=HEAP8[($58)];
      var $60=(($59)&(255));
      var $61=HEAP32[((_jisx0213_2_bmp_decmap)>>2)];
      var $62=(($61+($60<<3))|0);
      var $63=(($62)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=(($64+($56<<1))|0);
      var $66=HEAP16[(($65)>>1)];
      var $67=(($66)&(65535));
      $u=$67;
      var $68=(($67)|(0))!=65534;
      if ($68) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 13; break;
    case 6: 
      var $71=$2;
      var $72=(($71)|0);
      var $73=HEAP8[($72)];
      var $74=(($73)&(255));
      var $75=HEAP32[((_jisx0213_2_emp_decmap)>>2)];
      var $76=(($75+($74<<3))|0);
      var $77=(($76)|0);
      var $78=HEAP32[(($77)>>2)];
      var $79=(($78)|(0))!=0;
      if ($79) { label = 7; break; } else { label = 11; break; }
    case 7: 
      var $81=$2;
      var $82=(($81+1)|0);
      var $83=HEAP8[($82)];
      var $84=(($83)&(255));
      var $85=$2;
      var $86=(($85)|0);
      var $87=HEAP8[($86)];
      var $88=(($87)&(255));
      var $89=HEAP32[((_jisx0213_2_emp_decmap)>>2)];
      var $90=(($89+($88<<3))|0);
      var $91=(($90+4)|0);
      var $92=HEAP8[($91)];
      var $93=(($92)&(255));
      var $94=(($84)|(0)) >= (($93)|(0));
      if ($94) { label = 8; break; } else { label = 11; break; }
    case 8: 
      var $96=$2;
      var $97=(($96+1)|0);
      var $98=HEAP8[($97)];
      var $99=(($98)&(255));
      var $100=$2;
      var $101=(($100)|0);
      var $102=HEAP8[($101)];
      var $103=(($102)&(255));
      var $104=HEAP32[((_jisx0213_2_emp_decmap)>>2)];
      var $105=(($104+($103<<3))|0);
      var $106=(($105+5)|0);
      var $107=HEAP8[($106)];
      var $108=(($107)&(255));
      var $109=(($99)|(0)) <= (($108)|(0));
      if ($109) { label = 9; break; } else { label = 11; break; }
    case 9: 
      var $111=$2;
      var $112=(($111+1)|0);
      var $113=HEAP8[($112)];
      var $114=(($113)&(255));
      var $115=$2;
      var $116=(($115)|0);
      var $117=HEAP8[($116)];
      var $118=(($117)&(255));
      var $119=HEAP32[((_jisx0213_2_emp_decmap)>>2)];
      var $120=(($119+($118<<3))|0);
      var $121=(($120+4)|0);
      var $122=HEAP8[($121)];
      var $123=(($122)&(255));
      var $124=((($114)-($123))|0);
      var $125=$2;
      var $126=(($125)|0);
      var $127=HEAP8[($126)];
      var $128=(($127)&(255));
      var $129=HEAP32[((_jisx0213_2_emp_decmap)>>2)];
      var $130=(($129+($128<<3))|0);
      var $131=(($130)|0);
      var $132=HEAP32[(($131)>>2)];
      var $133=(($132+($124<<1))|0);
      var $134=HEAP16[(($133)>>1)];
      var $135=(($134)&(65535));
      $u=$135;
      var $136=(($135)|(0))!=65534;
      if ($136) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $138=$u;
      var $139=$138 | 131072;
      $u=$139;
      label = 12; break;
    case 11: 
      $1=65535;
      label = 14; break;
    case 12: 
      label = 13; break;
    case 13: 
      var $143=$u;
      $1=$143;
      label = 14; break;
    case 14: 
      var $145=$1;
      return $145;
    default: assert(0, "bad label: " + label);
  }
}
function _ksx1001_decoder($data) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $u;
      $2=$data;
      var $3=$2;
      var $4=(($3)|0);
      var $5=HEAP8[($4)];
      var $6=(($5)&(255));
      var $7=HEAP32[((_ksx1001_decmap)>>2)];
      var $8=(($7+($6<<3))|0);
      var $9=(($8)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10)|(0))!=0;
      if ($11) { label = 2; break; } else { label = 6; break; }
    case 2: 
      var $13=$2;
      var $14=(($13+1)|0);
      var $15=HEAP8[($14)];
      var $16=(($15)&(255));
      var $17=$2;
      var $18=(($17)|0);
      var $19=HEAP8[($18)];
      var $20=(($19)&(255));
      var $21=HEAP32[((_ksx1001_decmap)>>2)];
      var $22=(($21+($20<<3))|0);
      var $23=(($22+4)|0);
      var $24=HEAP8[($23)];
      var $25=(($24)&(255));
      var $26=(($16)|(0)) >= (($25)|(0));
      if ($26) { label = 3; break; } else { label = 6; break; }
    case 3: 
      var $28=$2;
      var $29=(($28+1)|0);
      var $30=HEAP8[($29)];
      var $31=(($30)&(255));
      var $32=$2;
      var $33=(($32)|0);
      var $34=HEAP8[($33)];
      var $35=(($34)&(255));
      var $36=HEAP32[((_ksx1001_decmap)>>2)];
      var $37=(($36+($35<<3))|0);
      var $38=(($37+5)|0);
      var $39=HEAP8[($38)];
      var $40=(($39)&(255));
      var $41=(($31)|(0)) <= (($40)|(0));
      if ($41) { label = 4; break; } else { label = 6; break; }
    case 4: 
      var $43=$2;
      var $44=(($43+1)|0);
      var $45=HEAP8[($44)];
      var $46=(($45)&(255));
      var $47=$2;
      var $48=(($47)|0);
      var $49=HEAP8[($48)];
      var $50=(($49)&(255));
      var $51=HEAP32[((_ksx1001_decmap)>>2)];
      var $52=(($51+($50<<3))|0);
      var $53=(($52+4)|0);
      var $54=HEAP8[($53)];
      var $55=(($54)&(255));
      var $56=((($46)-($55))|0);
      var $57=$2;
      var $58=(($57)|0);
      var $59=HEAP8[($58)];
      var $60=(($59)&(255));
      var $61=HEAP32[((_ksx1001_decmap)>>2)];
      var $62=(($61+($60<<3))|0);
      var $63=(($62)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=(($64+($56<<1))|0);
      var $66=HEAP16[(($65)>>1)];
      var $67=(($66)&(65535));
      $u=$67;
      var $68=(($67)|(0))!=65534;
      if ($68) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $70=$u;
      $1=$70;
      label = 7; break;
    case 6: 
      $1=65535;
      label = 7; break;
    case 7: 
      var $73=$1;
      return $73;
    default: assert(0, "bad label: " + label);
  }
}
function _gb2312_decoder($data) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $u;
      $2=$data;
      var $3=$2;
      var $4=(($3)|0);
      var $5=HEAP8[($4)];
      var $6=(($5)&(255));
      var $7=HEAP32[((_gb2312_decmap)>>2)];
      var $8=(($7+($6<<3))|0);
      var $9=(($8)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10)|(0))!=0;
      if ($11) { label = 2; break; } else { label = 6; break; }
    case 2: 
      var $13=$2;
      var $14=(($13+1)|0);
      var $15=HEAP8[($14)];
      var $16=(($15)&(255));
      var $17=$2;
      var $18=(($17)|0);
      var $19=HEAP8[($18)];
      var $20=(($19)&(255));
      var $21=HEAP32[((_gb2312_decmap)>>2)];
      var $22=(($21+($20<<3))|0);
      var $23=(($22+4)|0);
      var $24=HEAP8[($23)];
      var $25=(($24)&(255));
      var $26=(($16)|(0)) >= (($25)|(0));
      if ($26) { label = 3; break; } else { label = 6; break; }
    case 3: 
      var $28=$2;
      var $29=(($28+1)|0);
      var $30=HEAP8[($29)];
      var $31=(($30)&(255));
      var $32=$2;
      var $33=(($32)|0);
      var $34=HEAP8[($33)];
      var $35=(($34)&(255));
      var $36=HEAP32[((_gb2312_decmap)>>2)];
      var $37=(($36+($35<<3))|0);
      var $38=(($37+5)|0);
      var $39=HEAP8[($38)];
      var $40=(($39)&(255));
      var $41=(($31)|(0)) <= (($40)|(0));
      if ($41) { label = 4; break; } else { label = 6; break; }
    case 4: 
      var $43=$2;
      var $44=(($43+1)|0);
      var $45=HEAP8[($44)];
      var $46=(($45)&(255));
      var $47=$2;
      var $48=(($47)|0);
      var $49=HEAP8[($48)];
      var $50=(($49)&(255));
      var $51=HEAP32[((_gb2312_decmap)>>2)];
      var $52=(($51+($50<<3))|0);
      var $53=(($52+4)|0);
      var $54=HEAP8[($53)];
      var $55=(($54)&(255));
      var $56=((($46)-($55))|0);
      var $57=$2;
      var $58=(($57)|0);
      var $59=HEAP8[($58)];
      var $60=(($59)&(255));
      var $61=HEAP32[((_gb2312_decmap)>>2)];
      var $62=(($61+($60<<3))|0);
      var $63=(($62)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=(($64+($56<<1))|0);
      var $66=HEAP16[(($65)>>1)];
      var $67=(($66)&(65535));
      $u=$67;
      var $68=(($67)|(0))!=65534;
      if ($68) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $70=$u;
      $1=$70;
      label = 7; break;
    case 6: 
      $1=65535;
      label = 7; break;
    case 7: 
      var $73=$1;
      return $73;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0213_2004_1_encoder_paironly($data, $length) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $coded;
      var $ilength;
      $2=$data;
      $3=$length;
      var $4=$3;
      var $5=HEAP32[(($4)>>2)];
      $ilength=$5;
      var $6=$2;
      var $7=$3;
      var $8=_jisx0213_encoder($6, $7, 0);
      $coded=$8;
      var $9=$ilength;
      if ((($9)|(0))==1) {
        label = 2; break;
      }
      else if ((($9)|(0))==2) {
        label = 5; break;
      }
      else {
      label = 8; break;
      }
    case 2: 
      var $11=$coded;
      var $12=(($11)&(65535));
      var $13=(($12)|(0))==65534;
      if ($13) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=-2;
      label = 9; break;
    case 4: 
      $1=-1;
      label = 9; break;
    case 5: 
      var $17=$3;
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18)|(0))!=2;
      if ($19) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=-1;
      label = 9; break;
    case 7: 
      var $22=$coded;
      $1=$22;
      label = 9; break;
    case 8: 
      $1=-1;
      label = 9; break;
    case 9: 
      var $25=$1;
      return $25;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0213_2004_1_encoder($data, $length) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $coded;
      $2=$data;
      $3=$length;
      var $4=$2;
      var $5=$3;
      var $6=_jisx0213_encoder($4, $5, 0);
      $coded=$6;
      var $7=$coded;
      var $8=(($7)&(65535));
      var $9=(($8)|(0))==65535;
      if ($9) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $11=$coded;
      var $12=(($11)&(65535));
      var $13=(($12)|(0))==65534;
      if ($13) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $15=$coded;
      $1=$15;
      label = 7; break;
    case 4: 
      var $17=$coded;
      var $18=(($17)&(65535));
      var $19=$18 & 32768;
      var $20=(($19)|(0))!=0;
      if ($20) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=-1;
      label = 7; break;
    case 6: 
      var $23=$coded;
      $1=$23;
      label = 7; break;
    case 7: 
      var $25=$1;
      return $25;
    default: assert(0, "bad label: " + label);
  }
}
function _jisx0213_2004_2_encoder($data, $length) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $coded;
      $2=$data;
      $3=$length;
      var $4=$2;
      var $5=$3;
      var $6=_jisx0213_encoder($4, $5, 0);
      $coded=$6;
      var $7=$coded;
      var $8=(($7)&(65535));
      var $9=(($8)|(0))==65535;
      if ($9) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $11=$coded;
      var $12=(($11)&(65535));
      var $13=(($12)|(0))==65534;
      if ($13) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $15=$coded;
      $1=$15;
      label = 7; break;
    case 4: 
      var $17=$coded;
      var $18=(($17)&(65535));
      var $19=$18 & 32768;
      var $20=(($19)|(0))!=0;
      if ($20) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $22=$coded;
      var $23=(($22)&(65535));
      var $24=$23 & 32767;
      var $25=(($24) & 65535);
      $1=$25;
      label = 7; break;
    case 6: 
      $1=-1;
      label = 7; break;
    case 7: 
      var $28=$1;
      return $28;
    default: assert(0, "bad label: " + label);
  }
}
function _ksx1001_init() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2=HEAP32[((_ksx1001_init_initialized)>>2)];
      var $3=(($2)|(0))!=0;
      if ($3) { label = 5; break; } else { label = 2; break; }
    case 2: 
      var $5=_importmap(((__str30)|0), ((__str31)|0), _cp949_encmap, 0);
      var $6=(($5)|(0))!=0;
      if ($6) { label = 4; break; } else { label = 3; break; }
    case 3: 
      var $8=_importmap(((__str30)|0), ((__str32)|0), 0, _ksx1001_decmap);
      var $9=(($8)|(0))!=0;
      if ($9) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=-1;
      label = 6; break;
    case 5: 
      HEAP32[((_ksx1001_init_initialized)>>2)]=1;
      $1=0;
      label = 6; break;
    case 6: 
      var $13=$1;
      return $13;
    default: assert(0, "bad label: " + label);
  }
}
function _gb2312_init() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2=HEAP32[((_gb2312_init_initialized)>>2)];
      var $3=(($2)|(0))!=0;
      if ($3) { label = 5; break; } else { label = 2; break; }
    case 2: 
      var $5=_importmap(((__str27)|0), ((__str28)|0), _gbcommon_encmap, 0);
      var $6=(($5)|(0))!=0;
      if ($6) { label = 4; break; } else { label = 3; break; }
    case 3: 
      var $8=_importmap(((__str27)|0), ((__str29)|0), 0, _gb2312_decmap);
      var $9=(($8)|(0))!=0;
      if ($9) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=-1;
      label = 6; break;
    case 5: 
      HEAP32[((_gb2312_init_initialized)>>2)]=1;
      $1=0;
      label = 6; break;
    case 6: 
      var $13=$1;
      return $13;
    default: assert(0, "bad label: " + label);
  }
}
function _ksx1001_encoder($data, $length) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $coded;
      $2=$data;
      $3=$length;
      var $4=$3;
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))==1;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 4; break;
    case 3: 
      ___assert_func(((__str13)|0), 594, ((___func___ksx1001_encoder)|0), ((__str14)|0));
      throw "Reached an unreachable!";
      label = 4; break;
    case 4: 
      var $11=$2;
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12)>>>(0)) < 65536;
      if ($13) { label = 5; break; } else { label = 13; break; }
    case 5: 
      var $15=$2;
      var $16=HEAP32[(($15)>>2)];
      var $17=$16 >>> 8;
      var $18=HEAP32[((_cp949_encmap)>>2)];
      var $19=(($18+($17<<3))|0);
      var $20=(($19)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=(($21)|(0))!=0;
      if ($22) { label = 6; break; } else { label = 12; break; }
    case 6: 
      var $24=$2;
      var $25=HEAP32[(($24)>>2)];
      var $26=$25 & 255;
      var $27=$2;
      var $28=HEAP32[(($27)>>2)];
      var $29=$28 >>> 8;
      var $30=HEAP32[((_cp949_encmap)>>2)];
      var $31=(($30+($29<<3))|0);
      var $32=(($31+4)|0);
      var $33=HEAP8[($32)];
      var $34=(($33)&(255));
      var $35=(($26)>>>(0)) >= (($34)>>>(0));
      if ($35) { label = 7; break; } else { label = 12; break; }
    case 7: 
      var $37=$2;
      var $38=HEAP32[(($37)>>2)];
      var $39=$38 & 255;
      var $40=$2;
      var $41=HEAP32[(($40)>>2)];
      var $42=$41 >>> 8;
      var $43=HEAP32[((_cp949_encmap)>>2)];
      var $44=(($43+($42<<3))|0);
      var $45=(($44+5)|0);
      var $46=HEAP8[($45)];
      var $47=(($46)&(255));
      var $48=(($39)>>>(0)) <= (($47)>>>(0));
      if ($48) { label = 8; break; } else { label = 12; break; }
    case 8: 
      var $50=$2;
      var $51=HEAP32[(($50)>>2)];
      var $52=$51 & 255;
      var $53=$2;
      var $54=HEAP32[(($53)>>2)];
      var $55=$54 >>> 8;
      var $56=HEAP32[((_cp949_encmap)>>2)];
      var $57=(($56+($55<<3))|0);
      var $58=(($57+4)|0);
      var $59=HEAP8[($58)];
      var $60=(($59)&(255));
      var $61=((($52)-($60))|0);
      var $62=$2;
      var $63=HEAP32[(($62)>>2)];
      var $64=$63 >>> 8;
      var $65=HEAP32[((_cp949_encmap)>>2)];
      var $66=(($65+($64<<3))|0);
      var $67=(($66)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=(($68+($61<<1))|0);
      var $70=HEAP16[(($69)>>1)];
      $coded=$70;
      var $71=(($70)&(65535));
      var $72=(($71)|(0))!=65535;
      if ($72) { label = 9; break; } else { label = 12; break; }
    case 9: 
      var $74=$coded;
      var $75=(($74)&(65535));
      var $76=$75 & 32768;
      var $77=(($76)|(0))!=0;
      if ($77) { label = 11; break; } else { label = 10; break; }
    case 10: 
      var $79=$coded;
      $1=$79;
      label = 14; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      $1=-1;
      label = 14; break;
    case 14: 
      var $84=$1;
      return $84;
    default: assert(0, "bad label: " + label);
  }
}
function _gb2312_encoder($data, $length) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $coded;
      $2=$data;
      $3=$length;
      var $4=$3;
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))==1;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 4; break;
    case 3: 
      ___assert_func(((__str13)|0), 978, ((___func___gb2312_encoder)|0), ((__str14)|0));
      throw "Reached an unreachable!";
      label = 4; break;
    case 4: 
      var $11=$2;
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12)>>>(0)) < 65536;
      if ($13) { label = 5; break; } else { label = 13; break; }
    case 5: 
      var $15=$2;
      var $16=HEAP32[(($15)>>2)];
      var $17=$16 >>> 8;
      var $18=HEAP32[((_gbcommon_encmap)>>2)];
      var $19=(($18+($17<<3))|0);
      var $20=(($19)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=(($21)|(0))!=0;
      if ($22) { label = 6; break; } else { label = 12; break; }
    case 6: 
      var $24=$2;
      var $25=HEAP32[(($24)>>2)];
      var $26=$25 & 255;
      var $27=$2;
      var $28=HEAP32[(($27)>>2)];
      var $29=$28 >>> 8;
      var $30=HEAP32[((_gbcommon_encmap)>>2)];
      var $31=(($30+($29<<3))|0);
      var $32=(($31+4)|0);
      var $33=HEAP8[($32)];
      var $34=(($33)&(255));
      var $35=(($26)>>>(0)) >= (($34)>>>(0));
      if ($35) { label = 7; break; } else { label = 12; break; }
    case 7: 
      var $37=$2;
      var $38=HEAP32[(($37)>>2)];
      var $39=$38 & 255;
      var $40=$2;
      var $41=HEAP32[(($40)>>2)];
      var $42=$41 >>> 8;
      var $43=HEAP32[((_gbcommon_encmap)>>2)];
      var $44=(($43+($42<<3))|0);
      var $45=(($44+5)|0);
      var $46=HEAP8[($45)];
      var $47=(($46)&(255));
      var $48=(($39)>>>(0)) <= (($47)>>>(0));
      if ($48) { label = 8; break; } else { label = 12; break; }
    case 8: 
      var $50=$2;
      var $51=HEAP32[(($50)>>2)];
      var $52=$51 & 255;
      var $53=$2;
      var $54=HEAP32[(($53)>>2)];
      var $55=$54 >>> 8;
      var $56=HEAP32[((_gbcommon_encmap)>>2)];
      var $57=(($56+($55<<3))|0);
      var $58=(($57+4)|0);
      var $59=HEAP8[($58)];
      var $60=(($59)&(255));
      var $61=((($52)-($60))|0);
      var $62=$2;
      var $63=HEAP32[(($62)>>2)];
      var $64=$63 >>> 8;
      var $65=HEAP32[((_gbcommon_encmap)>>2)];
      var $66=(($65+($64<<3))|0);
      var $67=(($66)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=(($68+($61<<1))|0);
      var $70=HEAP16[(($69)>>1)];
      $coded=$70;
      var $71=(($70)&(65535));
      var $72=(($71)|(0))!=65535;
      if ($72) { label = 9; break; } else { label = 12; break; }
    case 9: 
      var $74=$coded;
      var $75=(($74)&(65535));
      var $76=$75 & 32768;
      var $77=(($76)|(0))!=0;
      if ($77) { label = 11; break; } else { label = 10; break; }
    case 10: 
      var $79=$coded;
      $1=$79;
      label = 14; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      $1=-1;
      label = 14; break;
    case 14: 
      var $84=$1;
      return $84;
    default: assert(0, "bad label: " + label);
  }
}
function _iso2022processesc($config, $state, $inbuf, $inleft) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $charset;
      var $designation;
      var $i;
      var $esclen;
      var $dsg;
      $2=$config;
      $3=$state;
      $4=$inbuf;
      $5=$inleft;
      $i=1;
      label = 2; break;
    case 2: 
      var $7=$i;
      var $8=(($7)|(0)) < 16;
      if ($8) { label = 3; break; } else { label = 17; break; }
    case 3: 
      var $10=$i;
      var $11=$5;
      var $12=HEAP32[(($11)>>2)];
      var $13=(($10)|(0)) >= (($12)|(0));
      if ($13) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=-2;
      label = 62; break;
    case 5: 
      var $16=$i;
      var $17=$4;
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18+$16)|0);
      var $20=HEAP8[($19)];
      var $21=(($20)&(255));
      var $22=(($21)|(0)) >= 65;
      if ($22) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $24=$i;
      var $25=$4;
      var $26=HEAP32[(($25)>>2)];
      var $27=(($26+$24)|0);
      var $28=HEAP8[($27)];
      var $29=(($28)&(255));
      var $30=(($29)|(0)) <= 90;
      if ($30) { label = 8; break; } else { label = 7; break; }
    case 7: 
      var $32=$i;
      var $33=$4;
      var $34=HEAP32[(($33)>>2)];
      var $35=(($34+$32)|0);
      var $36=HEAP8[($35)];
      var $37=(($36)&(255));
      var $38=(($37)|(0))==64;
      if ($38) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $40=$i;
      var $41=((($40)+(1))|0);
      $esclen=$41;
      label = 17; break;
    case 9: 
      var $43=$2;
      var $44=$43;
      var $45=(($44)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=$46 & 4;
      var $48=(($47)|(0))!=0;
      if ($48) { label = 10; break; } else { label = 14; break; }
    case 10: 
      var $50=$i;
      var $51=((($50)+(1))|0);
      var $52=$5;
      var $53=HEAP32[(($52)>>2)];
      var $54=(($51)|(0)) < (($53)|(0));
      if ($54) { label = 11; break; } else { label = 14; break; }
    case 11: 
      var $56=$i;
      var $57=$4;
      var $58=HEAP32[(($57)>>2)];
      var $59=(($58+$56)|0);
      var $60=HEAP8[($59)];
      var $61=(($60)&(255));
      var $62=(($61)|(0))==38;
      if ($62) { label = 12; break; } else { label = 14; break; }
    case 12: 
      var $64=$i;
      var $65=((($64)+(1))|0);
      var $66=$4;
      var $67=HEAP32[(($66)>>2)];
      var $68=(($67+$65)|0);
      var $69=HEAP8[($68)];
      var $70=(($69)&(255));
      var $71=(($70)|(0))==64;
      if ($71) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $73=$i;
      var $74=((($73)+(2))|0);
      $i=$74;
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $78=$i;
      var $79=((($78)+(1))|0);
      $i=$79;
      label = 2; break;
    case 17: 
      var $81=$i;
      var $82=(($81)|(0)) >= 16;
      if ($82) { label = 18; break; } else { label = 19; break; }
    case 18: 
      $1=1;
      label = 62; break;
    case 19: 
      var $85=$esclen;
      if ((($85)|(0))==3) {
        label = 20; break;
      }
      else if ((($85)|(0))==4) {
        label = 34; break;
      }
      else if ((($85)|(0))==6) {
        label = 43; break;
      }
      else {
      label = 50; break;
      }
    case 20: 
      var $87=$4;
      var $88=HEAP32[(($87)>>2)];
      var $89=(($88+1)|0);
      var $90=HEAP8[($89)];
      var $91=(($90)&(255));
      var $92=(($91)|(0))==36;
      if ($92) { label = 21; break; } else { label = 22; break; }
    case 21: 
      var $94=$4;
      var $95=HEAP32[(($94)>>2)];
      var $96=(($95+2)|0);
      var $97=HEAP8[($96)];
      var $98=(($97)&(255));
      var $99=$98 | 128;
      var $100=(($99) & 255);
      $charset=$100;
      $designation=0;
      label = 33; break;
    case 22: 
      var $102=$4;
      var $103=HEAP32[(($102)>>2)];
      var $104=(($103+2)|0);
      var $105=HEAP8[($104)];
      $charset=$105;
      var $106=$4;
      var $107=HEAP32[(($106)>>2)];
      var $108=(($107+1)|0);
      var $109=HEAP8[($108)];
      var $110=(($109)&(255));
      var $111=(($110)|(0))==40;
      if ($111) { label = 23; break; } else { label = 24; break; }
    case 23: 
      $designation=0;
      label = 32; break;
    case 24: 
      var $114=$4;
      var $115=HEAP32[(($114)>>2)];
      var $116=(($115+1)|0);
      var $117=HEAP8[($116)];
      var $118=(($117)&(255));
      var $119=(($118)|(0))==41;
      if ($119) { label = 25; break; } else { label = 26; break; }
    case 25: 
      $designation=1;
      label = 31; break;
    case 26: 
      var $122=$2;
      var $123=$122;
      var $124=(($123)|0);
      var $125=HEAP32[(($124)>>2)];
      var $126=$125 & 2;
      var $127=(($126)|(0))!=0;
      if ($127) { label = 27; break; } else { label = 29; break; }
    case 27: 
      var $129=$4;
      var $130=HEAP32[(($129)>>2)];
      var $131=(($130+1)|0);
      var $132=HEAP8[($131)];
      var $133=(($132)&(255));
      var $134=(($133)|(0))==46;
      if ($134) { label = 28; break; } else { label = 29; break; }
    case 28: 
      $designation=2;
      label = 30; break;
    case 29: 
      $1=3;
      label = 62; break;
    case 30: 
      label = 31; break;
    case 31: 
      label = 32; break;
    case 32: 
      label = 33; break;
    case 33: 
      label = 51; break;
    case 34: 
      var $142=$4;
      var $143=HEAP32[(($142)>>2)];
      var $144=(($143+1)|0);
      var $145=HEAP8[($144)];
      var $146=(($145)&(255));
      var $147=(($146)|(0))!=36;
      if ($147) { label = 35; break; } else { label = 36; break; }
    case 35: 
      $1=4;
      label = 62; break;
    case 36: 
      var $150=$4;
      var $151=HEAP32[(($150)>>2)];
      var $152=(($151+3)|0);
      var $153=HEAP8[($152)];
      var $154=(($153)&(255));
      var $155=$154 | 128;
      var $156=(($155) & 255);
      $charset=$156;
      var $157=$4;
      var $158=HEAP32[(($157)>>2)];
      var $159=(($158+2)|0);
      var $160=HEAP8[($159)];
      var $161=(($160)&(255));
      var $162=(($161)|(0))==40;
      if ($162) { label = 37; break; } else { label = 38; break; }
    case 37: 
      $designation=0;
      label = 42; break;
    case 38: 
      var $165=$4;
      var $166=HEAP32[(($165)>>2)];
      var $167=(($166+2)|0);
      var $168=HEAP8[($167)];
      var $169=(($168)&(255));
      var $170=(($169)|(0))==41;
      if ($170) { label = 39; break; } else { label = 40; break; }
    case 39: 
      $designation=1;
      label = 41; break;
    case 40: 
      $1=4;
      label = 62; break;
    case 41: 
      label = 42; break;
    case 42: 
      label = 51; break;
    case 43: 
      var $176=$2;
      var $177=$176;
      var $178=(($177)|0);
      var $179=HEAP32[(($178)>>2)];
      var $180=$179 & 4;
      var $181=(($180)|(0))!=0;
      if ($181) { label = 44; break; } else { label = 48; break; }
    case 44: 
      var $183=$4;
      var $184=HEAP32[(($183)>>2)];
      var $185=(($184+3)|0);
      var $186=HEAP8[($185)];
      var $187=(($186)&(255));
      var $188=(($187)|(0))==27;
      if ($188) { label = 45; break; } else { label = 48; break; }
    case 45: 
      var $190=$4;
      var $191=HEAP32[(($190)>>2)];
      var $192=(($191+4)|0);
      var $193=HEAP8[($192)];
      var $194=(($193)&(255));
      var $195=(($194)|(0))==36;
      if ($195) { label = 46; break; } else { label = 48; break; }
    case 46: 
      var $197=$4;
      var $198=HEAP32[(($197)>>2)];
      var $199=(($198+5)|0);
      var $200=HEAP8[($199)];
      var $201=(($200)&(255));
      var $202=(($201)|(0))==66;
      if ($202) { label = 47; break; } else { label = 48; break; }
    case 47: 
      $charset=-62;
      $designation=0;
      label = 49; break;
    case 48: 
      $1=6;
      label = 62; break;
    case 49: 
      label = 51; break;
    case 50: 
      var $207=$esclen;
      $1=$207;
      label = 62; break;
    case 51: 
      var $209=$charset;
      var $210=(($209)&(255));
      var $211=(($210)|(0))!=66;
      if ($211) { label = 52; break; } else { label = 61; break; }
    case 52: 
      var $213=$2;
      var $214=$213;
      var $215=(($214+4)|0);
      var $216=HEAP32[(($215)>>2)];
      $dsg=$216;
      label = 53; break;
    case 53: 
      var $218=$dsg;
      var $219=(($218)|0);
      var $220=HEAP8[($219)];
      var $221=(($220 << 24) >> 24)!=0;
      if ($221) { label = 54; break; } else { label = 58; break; }
    case 54: 
      var $223=$dsg;
      var $224=(($223)|0);
      var $225=HEAP8[($224)];
      var $226=(($225)&(255));
      var $227=$charset;
      var $228=(($227)&(255));
      var $229=(($226)|(0))==(($228)|(0));
      if ($229) { label = 55; break; } else { label = 56; break; }
    case 55: 
      label = 58; break;
    case 56: 
      label = 57; break;
    case 57: 
      var $233=$dsg;
      var $234=(($233+16)|0);
      $dsg=$234;
      label = 53; break;
    case 58: 
      var $236=$dsg;
      var $237=(($236)|0);
      var $238=HEAP8[($237)];
      var $239=(($238 << 24) >> 24)!=0;
      if ($239) { label = 60; break; } else { label = 59; break; }
    case 59: 
      var $241=$esclen;
      $1=$241;
      label = 62; break;
    case 60: 
      label = 61; break;
    case 61: 
      var $244=$charset;
      var $245=$designation;
      var $246=(($245)&(255));
      var $247=$3;
      var $248=$247;
      var $249=(($248+$246)|0);
      HEAP8[($249)]=$244;
      var $250=$esclen;
      var $251=$5;
      var $252=HEAP32[(($251)>>2)];
      var $253=((($252)-($250))|0);
      HEAP32[(($251)>>2)]=$253;
      var $254=$esclen;
      var $255=$4;
      var $256=HEAP32[(($255)>>2)];
      var $257=(($256+$254)|0);
      HEAP32[(($255)>>2)]=$257;
      $1=0;
      label = 62; break;
    case 62: 
      var $259=$1;
      return $259;
    default: assert(0, "bad label: " + label);
  }
}
function _iso2022processg2($config, $state, $inbuf, $inleft, $outbuf, $outleft) {
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
      var $7;
      $2=$config;
      $3=$state;
      $4=$inbuf;
      $5=$inleft;
      $6=$outbuf;
      $7=$outleft;
      var $8=$3;
      var $9=$8;
      var $10=(($9+2)|0);
      var $11=HEAP8[($10)];
      var $12=(($11)&(255));
      var $13=(($12)|(0))==65;
      if ($13) { label = 2; break; } else { label = 6; break; }
    case 2: 
      var $15=$4;
      var $16=HEAP32[(($15)>>2)];
      var $17=(($16+2)|0);
      var $18=HEAP8[($17)];
      var $19=(($18)&(255));
      var $20=(($19)|(0)) < 128;
      if ($20) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $22=$4;
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23+2)|0);
      var $25=HEAP8[($24)];
      var $26=(($25)&(255));
      var $27=((($26)+(128))|0);
      var $28=(($27) & 65535);
      var $29=$6;
      var $30=HEAP32[(($29)>>2)];
      var $31=(($30)|0);
      HEAP16[(($31)>>1)]=$28;
      label = 5; break;
    case 4: 
      $1=3;
      label = 39; break;
    case 5: 
      label = 38; break;
    case 6: 
      var $35=$3;
      var $36=$35;
      var $37=(($36+2)|0);
      var $38=HEAP8[($37)];
      var $39=(($38)&(255));
      var $40=(($39)|(0))==70;
      if ($40) { label = 7; break; } else { label = 30; break; }
    case 7: 
      var $42=$4;
      var $43=HEAP32[(($42)>>2)];
      var $44=(($43+2)|0);
      var $45=HEAP8[($44)];
      var $46=(($45)&(255));
      var $47=$46 ^ 128;
      var $48=(($47)|(0)) < 160;
      if ($48) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $50=$4;
      var $51=HEAP32[(($50)>>2)];
      var $52=(($51+2)|0);
      var $53=HEAP8[($52)];
      var $54=(($53)&(255));
      var $55=$54 ^ 128;
      var $56=(($55) & 65535);
      var $57=$6;
      var $58=HEAP32[(($57)>>2)];
      HEAP16[(($58)>>1)]=$56;
      label = 29; break;
    case 9: 
      var $60=$4;
      var $61=HEAP32[(($60)>>2)];
      var $62=(($61+2)|0);
      var $63=HEAP8[($62)];
      var $64=(($63)&(255));
      var $65=$64 ^ 128;
      var $66=(($65)|(0)) < 192;
      if ($66) { label = 10; break; } else { label = 12; break; }
    case 10: 
      var $68=$4;
      var $69=HEAP32[(($68)>>2)];
      var $70=(($69+2)|0);
      var $71=HEAP8[($70)];
      var $72=(($71)&(255));
      var $73=$72 ^ 128;
      var $74=((($73)-(160))|0);
      var $75=1 << $74;
      var $76=680475593 & $75;
      var $77=(($76)|(0))!=0;
      if ($77) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $79=$4;
      var $80=HEAP32[(($79)>>2)];
      var $81=(($80+2)|0);
      var $82=HEAP8[($81)];
      var $83=(($82)&(255));
      var $84=$83 ^ 128;
      var $85=(($84) & 65535);
      var $86=$6;
      var $87=HEAP32[(($86)>>2)];
      HEAP16[(($87)>>1)]=$85;
      label = 28; break;
    case 12: 
      var $89=$4;
      var $90=HEAP32[(($89)>>2)];
      var $91=(($90+2)|0);
      var $92=HEAP8[($91)];
      var $93=(($92)&(255));
      var $94=$93 ^ 128;
      var $95=(($94)|(0)) >= 180;
      if ($95) { label = 13; break; } else { label = 17; break; }
    case 13: 
      var $97=$4;
      var $98=HEAP32[(($97)>>2)];
      var $99=(($98+2)|0);
      var $100=HEAP8[($99)];
      var $101=(($100)&(255));
      var $102=$101 ^ 128;
      var $103=(($102)|(0)) <= 254;
      if ($103) { label = 14; break; } else { label = 17; break; }
    case 14: 
      var $105=$4;
      var $106=HEAP32[(($105)>>2)];
      var $107=(($106+2)|0);
      var $108=HEAP8[($107)];
      var $109=(($108)&(255));
      var $110=$109 ^ 128;
      var $111=(($110)|(0)) >= 212;
      if ($111) { label = 16; break; } else { label = 15; break; }
    case 15: 
      var $113=$4;
      var $114=HEAP32[(($113)>>2)];
      var $115=(($114+2)|0);
      var $116=HEAP8[($115)];
      var $117=(($116)&(255));
      var $118=$117 ^ 128;
      var $119=((($118)-(180))|0);
      var $120=1 << $119;
      var $121=-1073742473 & $120;
      var $122=(($121)|(0))!=0;
      if ($122) { label = 16; break; } else { label = 17; break; }
    case 16: 
      var $124=$4;
      var $125=HEAP32[(($124)>>2)];
      var $126=(($125+2)|0);
      var $127=HEAP8[($126)];
      var $128=(($127)&(255));
      var $129=$128 ^ 128;
      var $130=((($129)+(720))|0);
      var $131=(($130) & 65535);
      var $132=$6;
      var $133=HEAP32[(($132)>>2)];
      HEAP16[(($133)>>1)]=$131;
      label = 27; break;
    case 17: 
      var $135=$4;
      var $136=HEAP32[(($135)>>2)];
      var $137=(($136+2)|0);
      var $138=HEAP8[($137)];
      var $139=(($138)&(255));
      var $140=$139 ^ 128;
      var $141=(($140)|(0))==161;
      if ($141) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $143=$6;
      var $144=HEAP32[(($143)>>2)];
      HEAP16[(($144)>>1)]=8216;
      label = 26; break;
    case 19: 
      var $146=$4;
      var $147=HEAP32[(($146)>>2)];
      var $148=(($147+2)|0);
      var $149=HEAP8[($148)];
      var $150=(($149)&(255));
      var $151=$150 ^ 128;
      var $152=(($151)|(0))==162;
      if ($152) { label = 20; break; } else { label = 21; break; }
    case 20: 
      var $154=$6;
      var $155=HEAP32[(($154)>>2)];
      HEAP16[(($155)>>1)]=8217;
      label = 25; break;
    case 21: 
      var $157=$4;
      var $158=HEAP32[(($157)>>2)];
      var $159=(($158+2)|0);
      var $160=HEAP8[($159)];
      var $161=(($160)&(255));
      var $162=$161 ^ 128;
      var $163=(($162)|(0))==175;
      if ($163) { label = 22; break; } else { label = 23; break; }
    case 22: 
      var $165=$6;
      var $166=HEAP32[(($165)>>2)];
      HEAP16[(($166)>>1)]=8213;
      label = 24; break;
    case 23: 
      $1=3;
      label = 39; break;
    case 24: 
      label = 25; break;
    case 25: 
      label = 26; break;
    case 26: 
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      label = 37; break;
    case 30: 
      var $175=$3;
      var $176=$175;
      var $177=(($176+2)|0);
      var $178=HEAP8[($177)];
      var $179=(($178)&(255));
      var $180=(($179)|(0))==66;
      if ($180) { label = 31; break; } else { label = 35; break; }
    case 31: 
      var $182=$4;
      var $183=HEAP32[(($182)>>2)];
      var $184=(($183+2)|0);
      var $185=HEAP8[($184)];
      var $186=(($185)&(255));
      var $187=$186 & 128;
      var $188=(($187)|(0))!=0;
      if ($188) { label = 32; break; } else { label = 33; break; }
    case 32: 
      $1=3;
      label = 39; break;
    case 33: 
      var $191=$4;
      var $192=HEAP32[(($191)>>2)];
      var $193=(($192+2)|0);
      var $194=HEAP8[($193)];
      var $195=(($194)&(255));
      var $196=$6;
      var $197=HEAP32[(($196)>>2)];
      HEAP16[(($197)>>1)]=$195;
      label = 34; break;
    case 34: 
      label = 36; break;
    case 35: 
      $1=-3;
      label = 39; break;
    case 36: 
      label = 37; break;
    case 37: 
      label = 38; break;
    case 38: 
      var $203=$4;
      var $204=HEAP32[(($203)>>2)];
      var $205=(($204+3)|0);
      HEAP32[(($203)>>2)]=$205;
      var $206=$5;
      var $207=HEAP32[(($206)>>2)];
      var $208=((($207)-(3))|0);
      HEAP32[(($206)>>2)]=$208;
      var $209=$6;
      var $210=HEAP32[(($209)>>2)];
      var $211=(($210+2)|0);
      HEAP32[(($209)>>2)]=$211;
      var $212=$7;
      var $213=HEAP32[(($212)>>2)];
      var $214=((($213)-(1))|0);
      HEAP32[(($212)>>2)]=$214;
      $1=0;
      label = 39; break;
    case 39: 
      var $216=$1;
      return $216;
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
