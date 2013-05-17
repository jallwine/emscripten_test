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
var _crypt_methods;
var _crypt_crypt__doc__;
var __str2;
var __str1;
var __str;
_crypt_methods=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_crypt_crypt__doc__=allocate([99,114,121,112,116,40,119,111,114,100,44,32,115,97,108,116,41,32,45,62,32,115,116,114,105,110,103,10,119,111,114,100,32,119,105,108,108,32,117,115,117,97,108,108,121,32,98,101,32,97,32,117,115,101,114,39,115,32,112,97,115,115,119,111,114,100,46,32,115,97,108,116,32,105,115,32,97,32,50,45,99,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,10,119,104,105,99,104,32,119,105,108,108,32,98,101,32,117,115,101,100,32,116,111,32,115,101,108,101,99,116,32,111,110,101,32,111,102,32,52,48,57,54,32,118,97,114,105,97,116,105,111,110,115,32,111,102,32,68,69,83,46,32,84,104,101,32,99,104,97,114,97,99,116,101,114,115,10,105,110,32,115,97,108,116,32,109,117,115,116,32,98,101,32,101,105,116,104,101,114,32,34,46,34,44,32,34,47,34,44,32,111,114,32,97,110,32,97,108,112,104,97,110,117,109,101,114,105,99,32,99,104,97,114,97,99,116,101,114,46,32,82,101,116,117,114,110,115,10,116,104,101,32,104,97,115,104,101,100,32,112,97,115,115,119,111,114,100,32,97,115,32,97,32,115,116,114,105,110,103,44,32,119,104,105,99,104,32,119,105,108,108,32,98,101,32,99,111,109,112,111,115,101,100,32,111,102,32,99,104,97,114,97,99,116,101,114,115,32,102,114,111,109,10,116,104,101,32,115,97,109,101,32,97,108,112,104,97,98,101,116,32,97,115,32,116,104,101,32,115,97,108,116,46,0,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([115,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([115,115,58,99,114,121,112,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str=allocate([99,114,121,112,116,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_crypt_methods)>>2)]=((__str)|0);
HEAP32[(((_crypt_methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_crypt_methods)+(12))>>2)]=((_crypt_crypt__doc__)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_crypt_crypt,0]);
// EMSCRIPTEN_START_FUNCS
function _initcrypt() {
  var label = 0;
  var $1=_Py_InitModule4(((__str)|0), ((_crypt_methods)|0), 0, 0, 1013);
  return;
}
Module["_initcrypt"] = _initcrypt;
function _crypt_crypt($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $word=__stackBase__;
      var $salt=(__stackBase__)+(4);
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str1)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$word,HEAP32[(((tempInt)+(4))>>2)]=$salt,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 4; break;
    case 3: 
      var $9=HEAP32[(($word)>>2)];
      var $10=HEAP32[(($salt)>>2)];
      var $11=_crypt($9, $10);
      var $12=_Py_BuildValue(((__str2)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$11,tempInt));
      $1=$12;
      label = 4; break;
    case 4: 
      var $14=$1;
      STACKTOP = __stackBase__;
      return $14;
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
