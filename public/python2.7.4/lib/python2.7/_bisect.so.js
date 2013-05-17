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
var _module_doc;
var _insort_right_keywords;
var _insort_right_doc;
var _insort_left_keywords;
var _insort_left_doc;
var _bisect_right_keywords;
var _bisect_right_doc;
var _bisect_methods;
var _bisect_left_keywords;
var _bisect_left_doc;
var __str9;
var __str8;
var __str7;
var __str6;
var __str5;
var __str4;
var __str3;
var __str2;
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
_module_doc=allocate([66,105,115,101,99,116,105,111,110,32,97,108,103,111,114,105,116,104,109,115,46,10,10,84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,115,117,112,112,111,114,116,32,102,111,114,32,109,97,105,110,116,97,105,110,105,110,103,32,97,32,108,105,115,116,32,105,110,32,115,111,114,116,101,100,32,111,114,100,101,114,32,119,105,116,104,111,117,116,10,104,97,118,105,110,103,32,116,111,32,115,111,114,116,32,116,104,101,32,108,105,115,116,32,97,102,116,101,114,32,101,97,99,104,32,105,110,115,101,114,116,105,111,110,46,32,70,111,114,32,108,111,110,103,32,108,105,115,116,115,32,111,102,32,105,116,101,109,115,32,119,105,116,104,10,101,120,112,101,110,115,105,118,101,32,99,111,109,112,97,114,105,115,111,110,32,111,112,101,114,97,116,105,111,110,115,44,32,116,104,105,115,32,99,97,110,32,98,101,32,97,110,32,105,109,112,114,111,118,101,109,101,110,116,32,111,118,101,114,32,116,104,101,32,109,111,114,101,10,99,111,109,109,111,110,32,97,112,112,114,111,97,99,104,46,10,0,0,0], "i8", ALLOC_NORMAL);
_insort_right_keywords=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_insort_right_doc=allocate([105,110,115,111,114,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,10,105,110,115,111,114,116,95,114,105,103,104,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,10,10,73,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,110,100,32,107,101,101,112,32,105,116,32,115,111,114,116,101,100,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,73,102,32,120,32,105,115,32,97,108,114,101,97,100,121,32,105,110,32,97,44,32,105,110,115,101,114,116,32,105,116,32,116,111,32,116,104,101,32,114,105,103,104,116,32,111,102,32,116,104,101,32,114,105,103,104,116,109,111,115,116,32,120,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0,0,0,0], "i8", ALLOC_NORMAL);
_insort_left_keywords=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_insort_left_doc=allocate([105,110,115,111,114,116,95,108,101,102,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,10,10,73,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,110,100,32,107,101,101,112,32,105,116,32,115,111,114,116,101,100,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,73,102,32,120,32,105,115,32,97,108,114,101,97,100,121,32,105,110,32,97,44,32,105,110,115,101,114,116,32,105,116,32,116,111,32,116,104,101,32,108,101,102,116,32,111,102,32,116,104,101,32,108,101,102,116,109,111,115,116,32,120,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0,0,0,0], "i8", ALLOC_NORMAL);
_bisect_right_keywords=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_bisect_right_doc=allocate([98,105,115,101,99,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,32,45,62,32,105,110,100,101,120,10,98,105,115,101,99,116,95,114,105,103,104,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,32,45,62,32,105,110,100,101,120,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,100,101,120,32,119,104,101,114,101,32,116,111,32,105,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,84,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,32,105,115,32,115,117,99,104,32,116,104,97,116,32,97,108,108,32,101,32,105,110,32,97,91,58,105,93,32,104,97,118,101,32,101,32,60,61,32,120,44,32,97,110,100,32,97,108,108,32,101,32,105,110,10,97,91,105,58,93,32,104,97,118,101,32,101,32,62,32,120,46,32,32,83,111,32,105,102,32,120,32,97,108,114,101,97,100,121,32,97,112,112,101,97,114,115,32,105,110,32,116,104,101,32,108,105,115,116,44,32,105,32,112,111,105,110,116,115,32,106,117,115,116,10,98,101,121,111,110,100,32,116,104,101,32,114,105,103,104,116,109,111,115,116,32,120,32,97,108,114,101,97,100,121,32,116,104,101,114,101,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0,0,0,0], "i8", ALLOC_NORMAL);
_bisect_methods=allocate([0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_bisect_left_keywords=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_bisect_left_doc=allocate([98,105,115,101,99,116,95,108,101,102,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,32,45,62,32,105,110,100,101,120,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,100,101,120,32,119,104,101,114,101,32,116,111,32,105,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,84,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,32,105,115,32,115,117,99,104,32,116,104,97,116,32,97,108,108,32,101,32,105,110,32,97,91,58,105,93,32,104,97,118,101,32,101,32,60,32,120,44,32,97,110,100,32,97,108,108,32,101,32,105,110,10,97,91,105,58,93,32,104,97,118,101,32,101,32,62,61,32,120,46,32,32,83,111,32,105,102,32,120,32,97,108,114,101,97,100,121,32,97,112,112,101,97,114,115,32,105,110,32,116,104,101,32,108,105,115,116,44,32,105,32,112,111,105,110,116,115,32,106,117,115,116,10,98,101,102,111,114,101,32,116,104,101,32,108,101,102,116,109,111,115,116,32,120,32,97,108,114,101,97,100,121,32,116,104,101,114,101,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([108,111,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([120,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([97,0,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([105,110,115,111,114,116,95,108,101,102,116,0], "i8", ALLOC_NORMAL);
__str5=allocate([98,105,115,101,99,116,95,108,101,102,116,0], "i8", ALLOC_NORMAL);
__str4=allocate([105,110,115,111,114,116,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([105,110,115,111,114,116,95,114,105,103,104,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([98,105,115,101,99,116,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([79,79,124,110,110,58,98,105,115,101,99,116,95,114,105,103,104,116,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([79,79,124,110,110,58,105,110,115,111,114,116,95,114,105,103,104,116,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([79,79,124,110,110,58,98,105,115,101,99,116,95,108,101,102,116,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([108,111,32,109,117,115,116,32,98,101,32,110,111,110,45,110,101,103,97,116,105,118,101,0], "i8", ALLOC_NORMAL);
__str13=allocate([110,79,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([105,110,115,101,114,116,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([79,79,124,110,110,58,105,110,115,111,114,116,95,108,101,102,116,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([104,105,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([98,105,115,101,99,116,95,114,105,103,104,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str=allocate([95,98,105,115,101,99,116,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_insort_right_keywords)>>2)]=((__str7)|0);
HEAP32[(((_insort_right_keywords)+(4))>>2)]=((__str8)|0);
HEAP32[(((_insort_right_keywords)+(8))>>2)]=((__str9)|0);
HEAP32[(((_insort_right_keywords)+(12))>>2)]=((__str10)|0);
HEAP32[((_insort_left_keywords)>>2)]=((__str7)|0);
HEAP32[(((_insort_left_keywords)+(4))>>2)]=((__str8)|0);
HEAP32[(((_insort_left_keywords)+(8))>>2)]=((__str9)|0);
HEAP32[(((_insort_left_keywords)+(12))>>2)]=((__str10)|0);
HEAP32[((_bisect_right_keywords)>>2)]=((__str7)|0);
HEAP32[(((_bisect_right_keywords)+(4))>>2)]=((__str8)|0);
HEAP32[(((_bisect_right_keywords)+(8))>>2)]=((__str9)|0);
HEAP32[(((_bisect_right_keywords)+(12))>>2)]=((__str10)|0);
HEAP32[((_bisect_methods)>>2)]=((__str1)|0);
HEAP32[(((_bisect_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((_bisect_methods)+(12))>>2)]=((_bisect_right_doc)|0);
HEAP32[(((_bisect_methods)+(16))>>2)]=((__str2)|0);
HEAP32[(((_bisect_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((_bisect_methods)+(28))>>2)]=((_bisect_right_doc)|0);
HEAP32[(((_bisect_methods)+(32))>>2)]=((__str3)|0);
HEAP32[(((_bisect_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_bisect_methods)+(44))>>2)]=((_insort_right_doc)|0);
HEAP32[(((_bisect_methods)+(48))>>2)]=((__str4)|0);
HEAP32[(((_bisect_methods)+(52))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_bisect_methods)+(60))>>2)]=((_insort_right_doc)|0);
HEAP32[(((_bisect_methods)+(64))>>2)]=((__str5)|0);
HEAP32[(((_bisect_methods)+(68))>>2)]=((FUNCTION_TABLE_OFFSET + 8));
HEAP32[(((_bisect_methods)+(76))>>2)]=((_bisect_left_doc)|0);
HEAP32[(((_bisect_methods)+(80))>>2)]=((__str6)|0);
HEAP32[(((_bisect_methods)+(84))>>2)]=((FUNCTION_TABLE_OFFSET + 4));
HEAP32[(((_bisect_methods)+(92))>>2)]=((_insort_left_doc)|0);
HEAP32[((_bisect_left_keywords)>>2)]=((__str7)|0);
HEAP32[(((_bisect_left_keywords)+(4))>>2)]=((__str8)|0);
HEAP32[(((_bisect_left_keywords)+(8))>>2)]=((__str9)|0);
HEAP32[(((_bisect_left_keywords)+(12))>>2)]=((__str10)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_insort_right,0,_insort_left,0,_bisect_right,0,_bisect_left,0]);
// EMSCRIPTEN_START_FUNCS
function _init_bisect() {
  var label = 0;
  var $1=_Py_InitModule4(((__str)|0), ((_bisect_methods)|0), ((_module_doc)|0), 0, 1013);
  return;
}
Module["_init_bisect"] = _init_bisect;
function _bisect_right($self, $args, $kw) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $list=__stackBase__;
      var $item=(__stackBase__)+(4);
      var $lo=(__stackBase__)+(8);
      var $hi=(__stackBase__)+(12);
      var $index;
      $2=$self;
      $3=$args;
      $4=$kw;
      HEAP32[(($lo)>>2)]=0;
      HEAP32[(($hi)>>2)]=-1;
      var $5=$3;
      var $6=$4;
      var $7=_PyArg_ParseTupleAndKeywords($5, $6, ((__str17)|0), ((_bisect_right_keywords)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$list,HEAP32[(((tempInt)+(4))>>2)]=$item,HEAP32[(((tempInt)+(8))>>2)]=$lo,HEAP32[(((tempInt)+(12))>>2)]=$hi,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 6; break;
    case 3: 
      var $11=HEAP32[(($list)>>2)];
      var $12=HEAP32[(($item)>>2)];
      var $13=HEAP32[(($lo)>>2)];
      var $14=HEAP32[(($hi)>>2)];
      var $15=_internal_bisect_right($11, $12, $13, $14);
      $index=$15;
      var $16=$index;
      var $17=(($16)|(0)) < 0;
      if ($17) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 6; break;
    case 5: 
      var $20=$index;
      var $21=_PyInt_FromSsize_t($20);
      $1=$21;
      label = 6; break;
    case 6: 
      var $23=$1;
      STACKTOP = __stackBase__;
      return $23;
    default: assert(0, "bad label: " + label);
  }
}
function _insort_right($self, $args, $kw) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $list=__stackBase__;
      var $item=(__stackBase__)+(4);
      var $result;
      var $lo=(__stackBase__)+(8);
      var $hi=(__stackBase__)+(12);
      var $index;
      $2=$self;
      $3=$args;
      $4=$kw;
      HEAP32[(($lo)>>2)]=0;
      HEAP32[(($hi)>>2)]=-1;
      var $5=$3;
      var $6=$4;
      var $7=_PyArg_ParseTupleAndKeywords($5, $6, ((__str16)|0), ((_insort_right_keywords)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$list,HEAP32[(((tempInt)+(4))>>2)]=$item,HEAP32[(((tempInt)+(8))>>2)]=$lo,HEAP32[(((tempInt)+(12))>>2)]=$hi,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 18; break;
    case 3: 
      var $11=HEAP32[(($list)>>2)];
      var $12=HEAP32[(($item)>>2)];
      var $13=HEAP32[(($lo)>>2)];
      var $14=HEAP32[(($hi)>>2)];
      var $15=_internal_bisect_right($11, $12, $13, $14);
      $index=$15;
      var $16=$index;
      var $17=(($16)|(0)) < 0;
      if ($17) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 18; break;
    case 5: 
      var $20=HEAP32[(($list)>>2)];
      var $21=(($20+4)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=(($22)|(0))==((_PyList_Type)|(0));
      if ($23) { label = 6; break; } else { label = 9; break; }
    case 6: 
      var $25=HEAP32[(($list)>>2)];
      var $26=$index;
      var $27=HEAP32[(($item)>>2)];
      var $28=_PyList_Insert($25, $26, $27);
      var $29=(($28)|(0)) < 0;
      if ($29) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=0;
      label = 18; break;
    case 8: 
      label = 17; break;
    case 9: 
      var $33=HEAP32[(($list)>>2)];
      var $34=$index;
      var $35=HEAP32[(($item)>>2)];
      var $36=_PyObject_CallMethod($33, ((__str12)|0), ((__str13)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$34,HEAP32[(((tempInt)+(4))>>2)]=$35,tempInt));
      $result=$36;
      var $37=$result;
      var $38=(($37)|(0))==0;
      if ($38) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=0;
      label = 18; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $42=$result;
      var $43=(($42)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=((($44)-(1))|0);
      HEAP32[(($43)>>2)]=$45;
      var $46=(($45)|(0))!=0;
      if ($46) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 15; break;
    case 14: 
      var $49=$result;
      var $50=(($49+4)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=(($51+24)|0);
      var $53=HEAP32[(($52)>>2)];
      var $54=$result;
      FUNCTION_TABLE[$53]($54);
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $58=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $59=((($58)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$59;
      $1=__Py_NoneStruct;
      label = 18; break;
    case 18: 
      var $61=$1;
      STACKTOP = __stackBase__;
      return $61;
    default: assert(0, "bad label: " + label);
  }
}
function _bisect_left($self, $args, $kw) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $list=__stackBase__;
      var $item=(__stackBase__)+(4);
      var $lo=(__stackBase__)+(8);
      var $hi=(__stackBase__)+(12);
      var $index;
      $2=$self;
      $3=$args;
      $4=$kw;
      HEAP32[(($lo)>>2)]=0;
      HEAP32[(($hi)>>2)]=-1;
      var $5=$3;
      var $6=$4;
      var $7=_PyArg_ParseTupleAndKeywords($5, $6, ((__str15)|0), ((_bisect_left_keywords)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$list,HEAP32[(((tempInt)+(4))>>2)]=$item,HEAP32[(((tempInt)+(8))>>2)]=$lo,HEAP32[(((tempInt)+(12))>>2)]=$hi,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 6; break;
    case 3: 
      var $11=HEAP32[(($list)>>2)];
      var $12=HEAP32[(($item)>>2)];
      var $13=HEAP32[(($lo)>>2)];
      var $14=HEAP32[(($hi)>>2)];
      var $15=_internal_bisect_left($11, $12, $13, $14);
      $index=$15;
      var $16=$index;
      var $17=(($16)|(0)) < 0;
      if ($17) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 6; break;
    case 5: 
      var $20=$index;
      var $21=_PyInt_FromSsize_t($20);
      $1=$21;
      label = 6; break;
    case 6: 
      var $23=$1;
      STACKTOP = __stackBase__;
      return $23;
    default: assert(0, "bad label: " + label);
  }
}
function _insort_left($self, $args, $kw) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $list=__stackBase__;
      var $item=(__stackBase__)+(4);
      var $result;
      var $lo=(__stackBase__)+(8);
      var $hi=(__stackBase__)+(12);
      var $index;
      $2=$self;
      $3=$args;
      $4=$kw;
      HEAP32[(($lo)>>2)]=0;
      HEAP32[(($hi)>>2)]=-1;
      var $5=$3;
      var $6=$4;
      var $7=_PyArg_ParseTupleAndKeywords($5, $6, ((__str11)|0), ((_insort_left_keywords)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$list,HEAP32[(((tempInt)+(4))>>2)]=$item,HEAP32[(((tempInt)+(8))>>2)]=$lo,HEAP32[(((tempInt)+(12))>>2)]=$hi,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 18; break;
    case 3: 
      var $11=HEAP32[(($list)>>2)];
      var $12=HEAP32[(($item)>>2)];
      var $13=HEAP32[(($lo)>>2)];
      var $14=HEAP32[(($hi)>>2)];
      var $15=_internal_bisect_left($11, $12, $13, $14);
      $index=$15;
      var $16=$index;
      var $17=(($16)|(0)) < 0;
      if ($17) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 18; break;
    case 5: 
      var $20=HEAP32[(($list)>>2)];
      var $21=(($20+4)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=(($22)|(0))==((_PyList_Type)|(0));
      if ($23) { label = 6; break; } else { label = 9; break; }
    case 6: 
      var $25=HEAP32[(($list)>>2)];
      var $26=$index;
      var $27=HEAP32[(($item)>>2)];
      var $28=_PyList_Insert($25, $26, $27);
      var $29=(($28)|(0)) < 0;
      if ($29) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=0;
      label = 18; break;
    case 8: 
      label = 17; break;
    case 9: 
      var $33=HEAP32[(($list)>>2)];
      var $34=$index;
      var $35=HEAP32[(($item)>>2)];
      var $36=_PyObject_CallMethod($33, ((__str12)|0), ((__str13)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$34,HEAP32[(((tempInt)+(4))>>2)]=$35,tempInt));
      $result=$36;
      var $37=$result;
      var $38=(($37)|(0))==0;
      if ($38) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=0;
      label = 18; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $42=$result;
      var $43=(($42)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=((($44)-(1))|0);
      HEAP32[(($43)>>2)]=$45;
      var $46=(($45)|(0))!=0;
      if ($46) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 15; break;
    case 14: 
      var $49=$result;
      var $50=(($49+4)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=(($51+24)|0);
      var $53=HEAP32[(($52)>>2)];
      var $54=$result;
      FUNCTION_TABLE[$53]($54);
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $58=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $59=((($58)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$59;
      $1=__Py_NoneStruct;
      label = 18; break;
    case 18: 
      var $61=$1;
      STACKTOP = __stackBase__;
      return $61;
    default: assert(0, "bad label: " + label);
  }
}
function _internal_bisect_left($list, $item, $lo, $hi) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $litem;
      var $mid;
      var $res;
      $2=$list;
      $3=$item;
      $4=$lo;
      $5=$hi;
      var $6=$4;
      var $7=(($6)|(0)) < 0;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($9, ((__str14)|0));
      $1=-1;
      label = 23; break;
    case 3: 
      var $11=$5;
      var $12=(($11)|(0))==-1;
      if ($12) { label = 4; break; } else { label = 7; break; }
    case 4: 
      var $14=$2;
      var $15=_PySequence_Size($14);
      $5=$15;
      var $16=$5;
      var $17=(($16)|(0)) < 0;
      if ($17) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=-1;
      label = 23; break;
    case 6: 
      label = 7; break;
    case 7: 
      label = 8; break;
    case 8: 
      var $22=$4;
      var $23=$5;
      var $24=(($22)|(0)) < (($23)|(0));
      if ($24) { label = 9; break; } else { label = 22; break; }
    case 9: 
      var $26=$4;
      var $27=$5;
      var $28=((($26)+($27))|0);
      var $29=Math.floor(((($28)>>>(0)))/(2));
      $mid=$29;
      var $30=$2;
      var $31=$mid;
      var $32=_PySequence_GetItem($30, $31);
      $litem=$32;
      var $33=$litem;
      var $34=(($33)|(0))==0;
      if ($34) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=-1;
      label = 23; break;
    case 11: 
      var $37=$litem;
      var $38=$3;
      var $39=_PyObject_RichCompareBool($37, $38, 0);
      $res=$39;
      label = 12; break;
    case 12: 
      var $41=$litem;
      var $42=(($41)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=((($43)-(1))|0);
      HEAP32[(($42)>>2)]=$44;
      var $45=(($44)|(0))!=0;
      if ($45) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 15; break;
    case 14: 
      var $48=$litem;
      var $49=(($48+4)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=(($50+24)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=$litem;
      FUNCTION_TABLE[$52]($53);
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $56=$res;
      var $57=(($56)|(0)) < 0;
      if ($57) { label = 17; break; } else { label = 18; break; }
    case 17: 
      $1=-1;
      label = 23; break;
    case 18: 
      var $60=$res;
      var $61=(($60)|(0))!=0;
      if ($61) { label = 19; break; } else { label = 20; break; }
    case 19: 
      var $63=$mid;
      var $64=((($63)+(1))|0);
      $4=$64;
      label = 21; break;
    case 20: 
      var $66=$mid;
      $5=$66;
      label = 21; break;
    case 21: 
      label = 8; break;
    case 22: 
      var $69=$4;
      $1=$69;
      label = 23; break;
    case 23: 
      var $71=$1;
      return $71;
    default: assert(0, "bad label: " + label);
  }
}
function _internal_bisect_right($list, $item, $lo, $hi) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $litem;
      var $mid;
      var $res;
      $2=$list;
      $3=$item;
      $4=$lo;
      $5=$hi;
      var $6=$4;
      var $7=(($6)|(0)) < 0;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($9, ((__str14)|0));
      $1=-1;
      label = 23; break;
    case 3: 
      var $11=$5;
      var $12=(($11)|(0))==-1;
      if ($12) { label = 4; break; } else { label = 7; break; }
    case 4: 
      var $14=$2;
      var $15=_PySequence_Size($14);
      $5=$15;
      var $16=$5;
      var $17=(($16)|(0)) < 0;
      if ($17) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=-1;
      label = 23; break;
    case 6: 
      label = 7; break;
    case 7: 
      label = 8; break;
    case 8: 
      var $22=$4;
      var $23=$5;
      var $24=(($22)|(0)) < (($23)|(0));
      if ($24) { label = 9; break; } else { label = 22; break; }
    case 9: 
      var $26=$4;
      var $27=$5;
      var $28=((($26)+($27))|0);
      var $29=Math.floor(((($28)>>>(0)))/(2));
      $mid=$29;
      var $30=$2;
      var $31=$mid;
      var $32=_PySequence_GetItem($30, $31);
      $litem=$32;
      var $33=$litem;
      var $34=(($33)|(0))==0;
      if ($34) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=-1;
      label = 23; break;
    case 11: 
      var $37=$3;
      var $38=$litem;
      var $39=_PyObject_RichCompareBool($37, $38, 0);
      $res=$39;
      label = 12; break;
    case 12: 
      var $41=$litem;
      var $42=(($41)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=((($43)-(1))|0);
      HEAP32[(($42)>>2)]=$44;
      var $45=(($44)|(0))!=0;
      if ($45) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 15; break;
    case 14: 
      var $48=$litem;
      var $49=(($48+4)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=(($50+24)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=$litem;
      FUNCTION_TABLE[$52]($53);
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $56=$res;
      var $57=(($56)|(0)) < 0;
      if ($57) { label = 17; break; } else { label = 18; break; }
    case 17: 
      $1=-1;
      label = 23; break;
    case 18: 
      var $60=$res;
      var $61=(($60)|(0))!=0;
      if ($61) { label = 19; break; } else { label = 20; break; }
    case 19: 
      var $63=$mid;
      $5=$63;
      label = 21; break;
    case 20: 
      var $65=$mid;
      var $66=((($65)+(1))|0);
      $4=$66;
      label = 21; break;
    case 21: 
      label = 8; break;
    case 22: 
      var $69=$4;
      $1=$69;
      label = 23; break;
    case 23: 
      var $71=$1;
      return $71;
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
