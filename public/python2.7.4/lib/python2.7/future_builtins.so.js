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
var _oct_doc;
var _module_functions;
var _module_doc;
var _initfuture_builtins_it_funcs;
var _hex_doc;
var _ascii_doc;
var __str7;
var __str6;
var __str5;
var __str4;
var __str3;
var __str2;
var __str1;
var __str;
_oct_doc=allocate([111,99,116,40,110,117,109,98,101,114,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,111,99,116,97,108,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,105,110,116,101,103,101,114,32,111,114,32,108,111,110,103,32,105,110,116,101,103,101,114,46,0,0,0], "i8", ALLOC_NORMAL);
_module_functions=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_module_doc=allocate([84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,102,117,110,99,116,105,111,110,115,32,116,104,97,116,32,119,105,108,108,32,98,101,32,98,117,105,108,116,105,110,115,32,105,110,32,80,121,116,104,111,110,32,51,46,48,44,10,98,117,116,32,116,104,97,116,32,99,111,110,102,108,105,99,116,32,119,105,116,104,32,98,117,105,108,116,105,110,115,32,116,104,97,116,32,97,108,114,101,97,100,121,32,101,120,105,115,116,32,105,110,32,80,121,116,104,111,110,32,50,46,120,46,10,10,70,117,110,99,116,105,111,110,115,58,10,10,97,115,99,105,105,40,97,114,103,41,32,45,45,32,82,101,116,117,114,110,115,32,116,104,101,32,99,97,110,111,110,105,99,97,108,32,115,116,114,105,110,103,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,111,98,106,101,99,116,46,10,102,105,108,116,101,114,40,112,114,101,100,44,32,105,116,101,114,97,98,108,101,41,32,45,45,32,82,101,116,117,114,110,115,32,97,110,32,105,116,101,114,97,116,111,114,32,121,105,101,108,100,105,110,103,32,116,104,111,115,101,32,105,116,101,109,115,32,111,102,32,10,32,32,32,32,32,32,32,105,116,101,114,97,98,108,101,32,102,111,114,32,119,104,105,99,104,32,112,114,101,100,40,105,116,101,109,41,32,105,115,32,116,114,117,101,46,10,104,101,120,40,97,114,103,41,32,45,45,32,82,101,116,117,114,110,115,32,116,104,101,32,104,101,120,97,100,101,99,105,109,97,108,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,105,110,116,101,103,101,114,46,10,109,97,112,40,102,117,110,99,44,32,42,105,116,101,114,97,98,108,101,115,41,32,45,45,32,82,101,116,117,114,110,115,32,97,110,32,105,116,101,114,97,116,111,114,32,116,104,97,116,32,99,111,109,112,117,116,101,115,32,116,104,101,32,102,117,110,99,116,105,111,110,32,10,32,32,32,32,117,115,105,110,103,32,97,114,103,117,109,101,110,116,115,32,102,114,111,109,32,101,97,99,104,32,111,102,32,116,104,101,32,105,116,101,114,97,98,108,101,115,46,10,111,99,116,40,97,114,103,41,32,45,45,32,82,101,116,117,114,110,115,32,116,104,101,32,111,99,116,97,108,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,105,110,116,101,103,101,114,46,10,122,105,112,40,105,116,101,114,49,32,91,44,105,116,101,114,50,32,91,46,46,46,93,93,41,32,45,45,32,82,101,116,117,114,110,115,32,97,32,122,105,112,32,111,98,106,101,99,116,32,119,104,111,115,101,32,46,110,101,120,116,40,41,32,109,101,116,104,111,100,32,10,32,32,32,32,114,101,116,117,114,110,115,32,97,32,116,117,112,108,101,32,119,104,101,114,101,32,116,104,101,32,105,45,116,104,32,101,108,101,109,101,110,116,32,99,111,109,101,115,32,102,114,111,109,32,116,104,101,32,105,45,116,104,32,105,116,101,114,97,98,108,101,32,10,32,32,32,32,97,114,103,117,109,101,110,116,46,10,10,84,104,101,32,116,121,112,105,99,97,108,32,117,115,97,103,101,32,111,102,32,116,104,105,115,32,109,111,100,117,108,101,32,105,115,32,116,111,32,114,101,112,108,97,99,101,32,101,120,105,115,116,105,110,103,32,98,117,105,108,116,105,110,115,32,105,110,32,97,10,109,111,100,117,108,101,39,115,32,110,97,109,101,115,112,97,99,101,58,10,32,10,102,114,111,109,32,102,117,116,117,114,101,95,98,117,105,108,116,105,110,115,32,105,109,112,111,114,116,32,97,115,99,105,105,44,32,102,105,108,116,101,114,44,32,109,97,112,44,32,104,101,120,44,32,111,99,116,44,32,122,105,112,10,0,0,0], "i8", ALLOC_NORMAL);
_initfuture_builtins_it_funcs=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_hex_doc=allocate([104,101,120,40,110,117,109,98,101,114,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,104,101,120,97,100,101,99,105,109,97,108,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,105,110,116,101,103,101,114,32,111,114,32,108,111,110,103,32,105,110,116,101,103,101,114,46,0], "i8", ALLOC_NORMAL);
_ascii_doc=allocate([97,115,99,105,105,40,111,98,106,101,99,116,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,115,97,109,101,32,97,115,32,114,101,112,114,40,41,46,32,32,73,110,32,80,121,116,104,111,110,32,51,46,120,44,32,116,104,101,32,114,101,112,114,40,41,32,114,101,115,117,108,116,32,119,105,108,108,10,99,111,110,116,97,105,110,32,112,114,105,110,116,97,98,108,101,32,99,104,97,114,97,99,116,101,114,115,32,117,110,101,115,99,97,112,101,100,44,32,119,104,105,108,101,32,116,104,101,32,97,115,99,105,105,40,41,32,114,101,115,117,108,116,10,119,105,108,108,32,104,97,118,101,32,115,117,99,104,32,99,104,97,114,97,99,116,101,114,115,32,98,97,99,107,115,108,97,115,104,45,101,115,99,97,112,101,100,46,0,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([97,115,99,105,105,0,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([111,99,116,0], "i8", ALLOC_NORMAL);
__str5=allocate([104,101,120,0], "i8", ALLOC_NORMAL);
__str4=allocate([105,116,101,114,116,111,111,108,115,0,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([102,117,116,117,114,101,95,98,117,105,108,116,105,110,115,0], "i8", ALLOC_NORMAL);
__str2=allocate([105,122,105,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([105,102,105,108,116,101,114,0], "i8", ALLOC_NORMAL);
__str=allocate([105,109,97,112,0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_module_functions)>>2)]=((__str5)|0);
HEAP32[(((_module_functions)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_module_functions)+(12))>>2)]=((_hex_doc)|0);
HEAP32[(((_module_functions)+(16))>>2)]=((__str6)|0);
HEAP32[(((_module_functions)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((_module_functions)+(28))>>2)]=((_oct_doc)|0);
HEAP32[(((_module_functions)+(32))>>2)]=((__str7)|0);
HEAP32[(((_module_functions)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((_module_functions)+(44))>>2)]=((_ascii_doc)|0);
HEAP32[((_initfuture_builtins_it_funcs)>>2)]=((__str)|0);
HEAP32[(((_initfuture_builtins_it_funcs)+(4))>>2)]=((__str1)|0);
HEAP32[(((_initfuture_builtins_it_funcs)+(8))>>2)]=((__str2)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_builtin_hex,0,_builtin_ascii,0,_builtin_oct,0]);
// EMSCRIPTEN_START_FUNCS
function _initfuture_builtins() {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $m;
      var $itertools;
      var $iter_func;
      var $it_funcs=__stackBase__;
      var $cur_func;
      var $1=$it_funcs;
      assert(16 % 1 === 0);HEAP32[(($1)>>2)]=HEAP32[((_initfuture_builtins_it_funcs)>>2)];HEAP32[((($1)+(4))>>2)]=HEAP32[(((_initfuture_builtins_it_funcs)+(4))>>2)];HEAP32[((($1)+(8))>>2)]=HEAP32[(((_initfuture_builtins_it_funcs)+(8))>>2)];HEAP32[((($1)+(12))>>2)]=HEAP32[(((_initfuture_builtins_it_funcs)+(12))>>2)];
      var $2=_Py_InitModule4(((__str3)|0), ((_module_functions)|0), ((_module_doc)|0), 0, 1013);
      $m=$2;
      var $3=$m;
      var $4=(($3)|(0))==0;
      if ($4) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 17; break;
    case 3: 
      var $7=_PyImport_ImportModuleNoBlock(((__str4)|0));
      $itertools=$7;
      var $8=$itertools;
      var $9=(($8)|(0))==0;
      if ($9) { label = 4; break; } else { label = 5; break; }
    case 4: 
      label = 17; break;
    case 5: 
      var $12=(($it_funcs)|0);
      $cur_func=$12;
      label = 6; break;
    case 6: 
      var $14=$cur_func;
      var $15=HEAP32[(($14)>>2)];
      var $16=(($15)|(0))!=0;
      if ($16) { label = 7; break; } else { label = 12; break; }
    case 7: 
      var $18=$itertools;
      var $19=$cur_func;
      var $20=HEAP32[(($19)>>2)];
      var $21=_PyObject_GetAttrString($18, $20);
      $iter_func=$21;
      var $22=$iter_func;
      var $23=(($22)|(0))==0;
      if ($23) { label = 9; break; } else { label = 8; break; }
    case 8: 
      var $25=$m;
      var $26=$cur_func;
      var $27=HEAP32[(($26)>>2)];
      var $28=(($27+1)|0);
      var $29=$iter_func;
      var $30=_PyModule_AddObject($25, $28, $29);
      var $31=(($30)|(0)) < 0;
      if ($31) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 12; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $35=$cur_func;
      var $36=(($35+4)|0);
      $cur_func=$36;
      label = 6; break;
    case 12: 
      label = 13; break;
    case 13: 
      var $39=$itertools;
      var $40=(($39)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=((($41)-(1))|0);
      HEAP32[(($40)>>2)]=$42;
      var $43=(($42)|(0))!=0;
      if ($43) { label = 14; break; } else { label = 15; break; }
    case 14: 
      label = 16; break;
    case 15: 
      var $46=$itertools;
      var $47=(($46+4)|0);
      var $48=HEAP32[(($47)>>2)];
      var $49=(($48+24)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=$itertools;
      FUNCTION_TABLE[$50]($51);
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      STACKTOP = __stackBase__;
      return;
    default: assert(0, "bad label: " + label);
  }
}
Module["_initfuture_builtins"] = _initfuture_builtins;
function _builtin_hex($self, $v) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$v;
  var $3=$2;
  var $4=_PyNumber_ToBase($3, 16);
  return $4;
}
function _builtin_oct($self, $v) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$v;
  var $3=$2;
  var $4=_PyNumber_ToBase($3, 8);
  return $4;
}
function _builtin_ascii($self, $v) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$v;
  var $3=$2;
  var $4=_PyObject_Repr($3);
  return $4;
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
