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
var _reduce_doc;
var _partial_type;
var _partial_methods;
var _partial_memberlist;
var _partial_getsetlist;
var _partial_doc;
var _module_methods;
var _module_doc;
var _init_functools_typelist;
var __str9;
var __str8;
var __str7;
var __str6;
var __str5;
var __str4;
var __str3;
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
var ___func___partial_call;
var ___func___init_functools;
_reduce_doc=allocate([114,101,100,117,99,101,40,102,117,110,99,116,105,111,110,44,32,115,101,113,117,101,110,99,101,91,44,32,105,110,105,116,105,97,108,93,41,32,45,62,32,118,97,108,117,101,10,10,65,112,112,108,121,32,97,32,102,117,110,99,116,105,111,110,32,111,102,32,116,119,111,32,97,114,103,117,109,101,110,116,115,32,99,117,109,117,108,97,116,105,118,101,108,121,32,116,111,32,116,104,101,32,105,116,101,109,115,32,111,102,32,97,32,115,101,113,117,101,110,99,101,44,10,102,114,111,109,32,108,101,102,116,32,116,111,32,114,105,103,104,116,44,32,115,111,32,97,115,32,116,111,32,114,101,100,117,99,101,32,116,104,101,32,115,101,113,117,101,110,99,101,32,116,111,32,97,32,115,105,110,103,108,101,32,118,97,108,117,101,46,10,70,111,114,32,101,120,97,109,112,108,101,44,32,114,101,100,117,99,101,40,108,97,109,98,100,97,32,120,44,32,121,58,32,120,43,121,44,32,91,49,44,32,50,44,32,51,44,32,52,44,32,53,93,41,32,99,97,108,99,117,108,97,116,101,115,10,40,40,40,40,49,43,50,41,43,51,41,43,52,41,43,53,41,46,32,32,73,102,32,105,110,105,116,105,97,108,32,105,115,32,112,114,101,115,101,110,116,44,32,105,116,32,105,115,32,112,108,97,99,101,100,32,98,101,102,111,114,101,32,116,104,101,32,105,116,101,109,115,10,111,102,32,116,104,101,32,115,101,113,117,101,110,99,101,32,105,110,32,116,104,101,32,99,97,108,99,117,108,97,116,105,111,110,44,32,97,110,100,32,115,101,114,118,101,115,32,97,115,32,97,32,100,101,102,97,117,108,116,32,119,104,101,110,32,116,104,101,10,115,101,113,117,101,110,99,101,32,105,115,32,101,109,112,116,121,46,0,0,0], "i8", ALLOC_NORMAL);
_partial_type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,69,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_partial_methods=allocate([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_partial_memberlist=allocate([0,0,0,0,6,0,0,0,8,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,12,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,16,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_partial_getsetlist=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_partial_doc=allocate([112,97,114,116,105,97,108,40,102,117,110,99,44,32,42,97,114,103,115,44,32,42,42,107,101,121,119,111,114,100,115,41,32,45,32,110,101,119,32,102,117,110,99,116,105,111,110,32,119,105,116,104,32,112,97,114,116,105,97,108,32,97,112,112,108,105,99,97,116,105,111,110,10,32,32,32,32,111,102,32,116,104,101,32,103,105,118,101,110,32,97,114,103,117,109,101,110,116,115,32,97,110,100,32,107,101,121,119,111,114,100,115,46,10,0,0], "i8", ALLOC_NORMAL);
_module_methods=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_module_doc=allocate([84,111,111,108,115,32,116,104,97,116,32,111,112,101,114,97,116,101,32,111,110,32,102,117,110,99,116,105,111,110,115,46,0,0,0,0], "i8", ALLOC_NORMAL);
_init_functools_typelist=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([116,121,112,101,32,39,112,97,114,116,105,97,108,39,32,116,97,107,101,115,32,97,116,32,108,101,97,115,116,32,111,110,101,32,97,114,103,117,109,101,110,116,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([102,117,110,99,116,111,111,108,115,46,112,97,114,116,105,97,108,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([114,101,100,117,99,101,40,41,32,111,102,32,101,109,112,116,121,32,115,101,113,117,101,110,99,101,32,119,105,116,104,32,110,111,32,105,110,105,116,105,97,108,32,118,97,108,117,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([114,101,100,117,99,101,40,41,32,97,114,103,32,50,32,109,117,115,116,32,115,117,112,112,111,114,116,32,105,116,101,114,97,116,105,111,110,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([114,101,100,117,99,101,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([110,97,109,101,32,33,61,32,78,85,76,76,0,0,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([46,46,47,77,111,100,117,108,101,115,47,95,102,117,110,99,116,111,111,108,115,109,111,100,117,108,101,46,99,0,0,0], "i8", ALLOC_NORMAL);
__str24=allocate([112,116,111,45,62,107,119,32,61,61,32,80,121,95,78,111,110,101,32,124,124,32,80,121,68,105,99,116,95,67,104,101,99,107,40,112,116,111,45,62,107,119,41,0], "i8", ALLOC_NORMAL);
__str23=allocate([80,121,84,117,112,108,101,95,67,104,101,99,107,40,112,116,111,45,62,97,114,103,115,41,0,0,0,0], "i8", ALLOC_NORMAL);
__str22=allocate([80,121,67,97,108,108,97,98,108,101,95,67,104,101,99,107,40,112,116,111,45,62,102,110,41,0,0,0], "i8", ALLOC_NORMAL);
__str21=allocate([95,95,115,101,116,115,116,97,116,101,95,95,0,0,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([95,95,114,101,100,117,99,101,95,95,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([95,102,117,110,99,116,111,111,108,115,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([100,105,99,116,105,111,110,97,114,121,32,111,102,32,107,101,121,119,111,114,100,32,97,114,103,117,109,101,110,116,115,32,116,111,32,102,117,116,117,114,101,32,112,97,114,116,105,97,108,32,99,97,108,108,115,0], "i8", ALLOC_NORMAL);
__str18=allocate([107,101,121,119,111,114,100,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([116,117,112,108,101,32,111,102,32,97,114,103,117,109,101,110,116,115,32,116,111,32,102,117,116,117,114,101,32,112,97,114,116,105,97,108,32,99,97,108,108,115,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([97,114,103,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([102,117,110,99,116,105,111,110,32,111,98,106,101,99,116,32,116,111,32,117,115,101,32,105,110,32,102,117,116,117,114,101,32,112,97,114,116,105,97,108,32,99,97,108,108,115,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([102,117,110,99,0,0,0,0], "i8", ALLOC_NORMAL);
__str13=allocate([115,101,116,116,105,110,103,32,112,97,114,116,105,97,108,32,111,98,106,101,99,116,39,115,32,100,105,99,116,105,111,110,97,114,121,32,116,111,32,97,32,110,111,110,45,100,105,99,116,0,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([97,32,112,97,114,116,105,97,108,32,111,98,106,101,99,116,39,115,32,100,105,99,116,105,111,110,97,114,121,32,109,97,121,32,110,111,116,32,98,101,32,100,101,108,101,116,101,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([95,95,100,105,99,116,95,95,0,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([116,104,101,32,102,105,114,115,116,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,99,97,108,108,97,98,108,101,0], "i8", ALLOC_NORMAL);
__str1=allocate([79,79,79,79,0,0,0,0], "i8", ALLOC_NORMAL);
__str=allocate([79,40,79,41,40,79,79,79,79,41,0,0], "i8", ALLOC_NORMAL);
___func___partial_call=allocate([112,97,114,116,105,97,108,95,99,97,108,108,0,0,0,0], "i8", ALLOC_NORMAL);
___func___init_functools=allocate([105,110,105,116,95,102,117,110,99,116,111,111,108,115,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[(((_partial_type)+(12))>>2)]=((__str8)|0);
HEAP32[(((_partial_type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 16));
HEAP32[(((_partial_type)+(64))>>2)]=((FUNCTION_TABLE_OFFSET + 10));
HEAP32[(((_partial_type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((_partial_type)+(76))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_partial_type)+(88))>>2)]=((_partial_doc)|0);
HEAP32[(((_partial_type)+(92))>>2)]=((FUNCTION_TABLE_OFFSET + 4));
HEAP32[(((_partial_type)+(116))>>2)]=((_partial_methods)|0);
HEAP32[(((_partial_type)+(120))>>2)]=((_partial_memberlist)|0);
HEAP32[(((_partial_type)+(124))>>2)]=((_partial_getsetlist)|0);
HEAP32[(((_partial_type)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((_partial_type)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[((_partial_methods)>>2)]=((__str20)|0);
HEAP32[(((_partial_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 22));
HEAP32[(((_partial_methods)+(16))>>2)]=((__str21)|0);
HEAP32[(((_partial_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 8));
HEAP32[((_partial_memberlist)>>2)]=((__str14)|0);
HEAP32[(((_partial_memberlist)+(16))>>2)]=((__str15)|0);
HEAP32[(((_partial_memberlist)+(20))>>2)]=((__str16)|0);
HEAP32[(((_partial_memberlist)+(36))>>2)]=((__str17)|0);
HEAP32[(((_partial_memberlist)+(40))>>2)]=((__str18)|0);
HEAP32[(((_partial_memberlist)+(56))>>2)]=((__str19)|0);
HEAP32[((_partial_getsetlist)>>2)]=((__str11)|0);
HEAP32[(((_partial_getsetlist)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_partial_getsetlist)+(8))>>2)]=((FUNCTION_TABLE_OFFSET + 24));
HEAP32[((_module_methods)>>2)]=((__str5)|0);
HEAP32[(((_module_methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 18);
HEAP32[(((_module_methods)+(12))>>2)]=((_reduce_doc)|0);
HEAP32[((_init_functools_typelist)>>2)]=_partial_type;
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_partial_get_dict,0,_partial_traverse,0,_PyObject_GenericGetAttr,0,_partial_setstate,0,_partial_call
,0,_partial_new,0,_PyObject_GenericSetAttr,0,_partial_dealloc,0,_functools_reduce,0,_PyObject_GC_Del,0,_partial_reduce,0,_partial_set_dict,0]);
// EMSCRIPTEN_START_FUNCS
function _partial_reduce($pto, $unused) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $1=$pto;
      $2=$unused;
      var $3=$1;
      var $4=$3;
      var $5=(($4+4)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=$1;
      var $8=(($7+8)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=$1;
      var $11=(($10+8)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=$1;
      var $14=(($13+12)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=$1;
      var $17=(($16+16)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=$1;
      var $20=(($19+20)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=(($21)|(0))!=0;
      if ($22) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $24=$1;
      var $25=(($24+20)|0);
      var $26=HEAP32[(($25)>>2)];
      var $29 = $26;label = 4; break;
    case 3: 
      var $29 = __Py_NoneStruct;label = 4; break;
    case 4: 
      var $29;
      var $30=_Py_BuildValue(((__str)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 24)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$6,HEAP32[(((tempInt)+(4))>>2)]=$9,HEAP32[(((tempInt)+(8))>>2)]=$12,HEAP32[(((tempInt)+(12))>>2)]=$15,HEAP32[(((tempInt)+(16))>>2)]=$18,HEAP32[(((tempInt)+(20))>>2)]=$29,tempInt));
      STACKTOP = __stackBase__;
      return $30;
    default: assert(0, "bad label: " + label);
  }
}
function _partial_setstate($pto, $state) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $fn=__stackBase__;
      var $fnargs=(__stackBase__)+(4);
      var $kw=(__stackBase__)+(8);
      var $dict=(__stackBase__)+(12);
      $2=$pto;
      $3=$state;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str1)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$fn,HEAP32[(((tempInt)+(4))>>2)]=$fnargs,HEAP32[(((tempInt)+(8))>>2)]=$kw,HEAP32[(((tempInt)+(12))>>2)]=$dict,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 47; break;
    case 3: 
      label = 4; break;
    case 4: 
      var $10=$2;
      var $11=(($10+8)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12)|(0))==0;
      if ($13) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 12; break;
    case 6: 
      label = 7; break;
    case 7: 
      var $17=$2;
      var $18=(($17+8)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=(($19)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=((($21)-(1))|0);
      HEAP32[(($20)>>2)]=$22;
      var $23=(($22)|(0))!=0;
      if ($23) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 10; break;
    case 9: 
      var $26=$2;
      var $27=(($26+8)|0);
      var $28=HEAP32[(($27)>>2)];
      var $29=(($28+4)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=(($30+24)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=$2;
      var $34=(($33+8)|0);
      var $35=HEAP32[(($34)>>2)];
      FUNCTION_TABLE[$32]($35);
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      var $41=$2;
      var $42=(($41+12)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=(($43)|(0))==0;
      if ($44) { label = 15; break; } else { label = 16; break; }
    case 15: 
      label = 22; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $48=$2;
      var $49=(($48+12)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=(($50)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=((($52)-(1))|0);
      HEAP32[(($51)>>2)]=$53;
      var $54=(($53)|(0))!=0;
      if ($54) { label = 18; break; } else { label = 19; break; }
    case 18: 
      label = 20; break;
    case 19: 
      var $57=$2;
      var $58=(($57+12)|0);
      var $59=HEAP32[(($58)>>2)];
      var $60=(($59+4)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=(($61+24)|0);
      var $63=HEAP32[(($62)>>2)];
      var $64=$2;
      var $65=(($64+12)|0);
      var $66=HEAP32[(($65)>>2)];
      FUNCTION_TABLE[$63]($66);
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
      var $72=$2;
      var $73=(($72+16)|0);
      var $74=HEAP32[(($73)>>2)];
      var $75=(($74)|(0))==0;
      if ($75) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 32; break;
    case 26: 
      label = 27; break;
    case 27: 
      var $79=$2;
      var $80=(($79+16)|0);
      var $81=HEAP32[(($80)>>2)];
      var $82=(($81)|0);
      var $83=HEAP32[(($82)>>2)];
      var $84=((($83)-(1))|0);
      HEAP32[(($82)>>2)]=$84;
      var $85=(($84)|(0))!=0;
      if ($85) { label = 28; break; } else { label = 29; break; }
    case 28: 
      label = 30; break;
    case 29: 
      var $88=$2;
      var $89=(($88+16)|0);
      var $90=HEAP32[(($89)>>2)];
      var $91=(($90+4)|0);
      var $92=HEAP32[(($91)>>2)];
      var $93=(($92+24)|0);
      var $94=HEAP32[(($93)>>2)];
      var $95=$2;
      var $96=(($95+16)|0);
      var $97=HEAP32[(($96)>>2)];
      FUNCTION_TABLE[$94]($97);
      label = 30; break;
    case 30: 
      label = 31; break;
    case 31: 
      label = 32; break;
    case 32: 
      label = 33; break;
    case 33: 
      label = 34; break;
    case 34: 
      var $103=$2;
      var $104=(($103+20)|0);
      var $105=HEAP32[(($104)>>2)];
      var $106=(($105)|(0))==0;
      if ($106) { label = 35; break; } else { label = 36; break; }
    case 35: 
      label = 42; break;
    case 36: 
      label = 37; break;
    case 37: 
      var $110=$2;
      var $111=(($110+20)|0);
      var $112=HEAP32[(($111)>>2)];
      var $113=(($112)|0);
      var $114=HEAP32[(($113)>>2)];
      var $115=((($114)-(1))|0);
      HEAP32[(($113)>>2)]=$115;
      var $116=(($115)|(0))!=0;
      if ($116) { label = 38; break; } else { label = 39; break; }
    case 38: 
      label = 40; break;
    case 39: 
      var $119=$2;
      var $120=(($119+20)|0);
      var $121=HEAP32[(($120)>>2)];
      var $122=(($121+4)|0);
      var $123=HEAP32[(($122)>>2)];
      var $124=(($123+24)|0);
      var $125=HEAP32[(($124)>>2)];
      var $126=$2;
      var $127=(($126+20)|0);
      var $128=HEAP32[(($127)>>2)];
      FUNCTION_TABLE[$125]($128);
      label = 40; break;
    case 40: 
      label = 41; break;
    case 41: 
      label = 42; break;
    case 42: 
      label = 43; break;
    case 43: 
      var $133=HEAP32[(($fn)>>2)];
      var $134=$2;
      var $135=(($134+8)|0);
      HEAP32[(($135)>>2)]=$133;
      var $136=HEAP32[(($fnargs)>>2)];
      var $137=$2;
      var $138=(($137+12)|0);
      HEAP32[(($138)>>2)]=$136;
      var $139=HEAP32[(($kw)>>2)];
      var $140=$2;
      var $141=(($140+16)|0);
      HEAP32[(($141)>>2)]=$139;
      var $142=HEAP32[(($dict)>>2)];
      var $143=(($142)|(0))!=((__Py_NoneStruct)|(0));
      if ($143) { label = 44; break; } else { label = 45; break; }
    case 44: 
      var $145=HEAP32[(($dict)>>2)];
      var $146=$2;
      var $147=(($146+20)|0);
      HEAP32[(($147)>>2)]=$145;
      var $148=HEAP32[(($dict)>>2)];
      var $149=(($148)|0);
      var $150=HEAP32[(($149)>>2)];
      var $151=((($150)+(1))|0);
      HEAP32[(($149)>>2)]=$151;
      label = 46; break;
    case 45: 
      var $153=$2;
      var $154=(($153+20)|0);
      HEAP32[(($154)>>2)]=0;
      label = 46; break;
    case 46: 
      var $156=HEAP32[(($fn)>>2)];
      var $157=(($156)|0);
      var $158=HEAP32[(($157)>>2)];
      var $159=((($158)+(1))|0);
      HEAP32[(($157)>>2)]=$159;
      var $160=HEAP32[(($fnargs)>>2)];
      var $161=(($160)|0);
      var $162=HEAP32[(($161)>>2)];
      var $163=((($162)+(1))|0);
      HEAP32[(($161)>>2)]=$163;
      var $164=HEAP32[(($kw)>>2)];
      var $165=(($164)|0);
      var $166=HEAP32[(($165)>>2)];
      var $167=((($166)+(1))|0);
      HEAP32[(($165)>>2)]=$167;
      var $168=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $169=((($168)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$169;
      $1=__Py_NoneStruct;
      label = 47; break;
    case 47: 
      var $171=$1;
      STACKTOP = __stackBase__;
      return $171;
    default: assert(0, "bad label: " + label);
  }
}
function _functools_reduce($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 12)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $seq=__stackBase__;
      var $func=(__stackBase__)+(4);
      var $result=(__stackBase__)+(8);
      var $it;
      var $op2;
      $2=$self;
      $3=$args;
      HEAP32[(($result)>>2)]=0;
      var $4=$3;
      var $5=_PyArg_UnpackTuple($4, ((__str5)|0), 2, 3, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 12)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$func,HEAP32[(((tempInt)+(4))>>2)]=$seq,HEAP32[(((tempInt)+(8))>>2)]=$result,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 78; break;
    case 3: 
      var $9=HEAP32[(($result)>>2)];
      var $10=(($9)|(0))!=0;
      if ($10) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $12=HEAP32[(($result)>>2)];
      var $13=(($12)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=((($14)+(1))|0);
      HEAP32[(($13)>>2)]=$15;
      label = 5; break;
    case 5: 
      var $17=HEAP32[(($seq)>>2)];
      var $18=_PyObject_GetIter($17);
      $it=$18;
      var $19=$it;
      var $20=(($19)|(0))==0;
      if ($20) { label = 6; break; } else { label = 17; break; }
    case 6: 
      var $22=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($22, ((__str6)|0));
      label = 7; break;
    case 7: 
      var $24=HEAP32[(($result)>>2)];
      var $25=(($24)|(0))==0;
      if ($25) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 15; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $29=HEAP32[(($result)>>2)];
      var $30=(($29)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=((($31)-(1))|0);
      HEAP32[(($30)>>2)]=$32;
      var $33=(($32)|(0))!=0;
      if ($33) { label = 11; break; } else { label = 12; break; }
    case 11: 
      label = 13; break;
    case 12: 
      var $36=HEAP32[(($result)>>2)];
      var $37=(($36+4)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=(($38+24)|0);
      var $40=HEAP32[(($39)>>2)];
      var $41=HEAP32[(($result)>>2)];
      FUNCTION_TABLE[$40]($41);
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      $1=0;
      label = 78; break;
    case 17: 
      var $47=_PyTuple_New(2);
      $3=$47;
      var $48=(($47)|(0))==0;
      if ($48) { label = 18; break; } else { label = 19; break; }
    case 18: 
      label = 52; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $52=$3;
      var $53=(($52)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=(($54)|(0)) > 1;
      if ($55) { label = 21; break; } else { label = 29; break; }
    case 21: 
      label = 22; break;
    case 22: 
      var $58=$3;
      var $59=(($58)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=((($60)-(1))|0);
      HEAP32[(($59)>>2)]=$61;
      var $62=(($61)|(0))!=0;
      if ($62) { label = 23; break; } else { label = 24; break; }
    case 23: 
      label = 25; break;
    case 24: 
      var $65=$3;
      var $66=(($65+4)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=(($67+24)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=$3;
      FUNCTION_TABLE[$69]($70);
      label = 25; break;
    case 25: 
      label = 26; break;
    case 26: 
      var $73=_PyTuple_New(2);
      $3=$73;
      var $74=(($73)|(0))==0;
      if ($74) { label = 27; break; } else { label = 28; break; }
    case 27: 
      label = 52; break;
    case 28: 
      label = 29; break;
    case 29: 
      var $78=$it;
      var $79=_PyIter_Next($78);
      $op2=$79;
      var $80=$op2;
      var $81=(($80)|(0))==0;
      if ($81) { label = 30; break; } else { label = 33; break; }
    case 30: 
      var $83=_PyErr_Occurred();
      var $84=(($83)|(0))!=0;
      if ($84) { label = 31; break; } else { label = 32; break; }
    case 31: 
      label = 52; break;
    case 32: 
      label = 39; break;
    case 33: 
      var $88=HEAP32[(($result)>>2)];
      var $89=(($88)|(0))==0;
      if ($89) { label = 34; break; } else { label = 35; break; }
    case 34: 
      var $91=$op2;
      HEAP32[(($result)>>2)]=$91;
      label = 38; break;
    case 35: 
      var $93=$3;
      var $94=HEAP32[(($result)>>2)];
      var $95=_PyTuple_SetItem($93, 0, $94);
      var $96=$3;
      var $97=$op2;
      var $98=_PyTuple_SetItem($96, 1, $97);
      var $99=HEAP32[(($func)>>2)];
      var $100=$3;
      var $101=_PyEval_CallObjectWithKeywords($99, $100, 0);
      HEAP32[(($result)>>2)]=$101;
      var $102=(($101)|(0))==0;
      if ($102) { label = 36; break; } else { label = 37; break; }
    case 36: 
      label = 52; break;
    case 37: 
      label = 38; break;
    case 38: 
      label = 20; break;
    case 39: 
      label = 40; break;
    case 40: 
      var $108=$3;
      var $109=(($108)|0);
      var $110=HEAP32[(($109)>>2)];
      var $111=((($110)-(1))|0);
      HEAP32[(($109)>>2)]=$111;
      var $112=(($111)|(0))!=0;
      if ($112) { label = 41; break; } else { label = 42; break; }
    case 41: 
      label = 43; break;
    case 42: 
      var $115=$3;
      var $116=(($115+4)|0);
      var $117=HEAP32[(($116)>>2)];
      var $118=(($117+24)|0);
      var $119=HEAP32[(($118)>>2)];
      var $120=$3;
      FUNCTION_TABLE[$119]($120);
      label = 43; break;
    case 43: 
      label = 44; break;
    case 44: 
      var $123=HEAP32[(($result)>>2)];
      var $124=(($123)|(0))==0;
      if ($124) { label = 45; break; } else { label = 46; break; }
    case 45: 
      var $126=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($126, ((__str7)|0));
      label = 46; break;
    case 46: 
      label = 47; break;
    case 47: 
      var $129=$it;
      var $130=(($129)|0);
      var $131=HEAP32[(($130)>>2)];
      var $132=((($131)-(1))|0);
      HEAP32[(($130)>>2)]=$132;
      var $133=(($132)|(0))!=0;
      if ($133) { label = 48; break; } else { label = 49; break; }
    case 48: 
      label = 50; break;
    case 49: 
      var $136=$it;
      var $137=(($136+4)|0);
      var $138=HEAP32[(($137)>>2)];
      var $139=(($138+24)|0);
      var $140=HEAP32[(($139)>>2)];
      var $141=$it;
      FUNCTION_TABLE[$140]($141);
      label = 50; break;
    case 50: 
      label = 51; break;
    case 51: 
      var $144=HEAP32[(($result)>>2)];
      $1=$144;
      label = 78; break;
    case 52: 
      label = 53; break;
    case 53: 
      var $147=$3;
      var $148=(($147)|(0))==0;
      if ($148) { label = 54; break; } else { label = 55; break; }
    case 54: 
      label = 61; break;
    case 55: 
      label = 56; break;
    case 56: 
      var $152=$3;
      var $153=(($152)|0);
      var $154=HEAP32[(($153)>>2)];
      var $155=((($154)-(1))|0);
      HEAP32[(($153)>>2)]=$155;
      var $156=(($155)|(0))!=0;
      if ($156) { label = 57; break; } else { label = 58; break; }
    case 57: 
      label = 59; break;
    case 58: 
      var $159=$3;
      var $160=(($159+4)|0);
      var $161=HEAP32[(($160)>>2)];
      var $162=(($161+24)|0);
      var $163=HEAP32[(($162)>>2)];
      var $164=$3;
      FUNCTION_TABLE[$163]($164);
      label = 59; break;
    case 59: 
      label = 60; break;
    case 60: 
      label = 61; break;
    case 61: 
      label = 62; break;
    case 62: 
      label = 63; break;
    case 63: 
      var $170=HEAP32[(($result)>>2)];
      var $171=(($170)|(0))==0;
      if ($171) { label = 64; break; } else { label = 65; break; }
    case 64: 
      label = 71; break;
    case 65: 
      label = 66; break;
    case 66: 
      var $175=HEAP32[(($result)>>2)];
      var $176=(($175)|0);
      var $177=HEAP32[(($176)>>2)];
      var $178=((($177)-(1))|0);
      HEAP32[(($176)>>2)]=$178;
      var $179=(($178)|(0))!=0;
      if ($179) { label = 67; break; } else { label = 68; break; }
    case 67: 
      label = 69; break;
    case 68: 
      var $182=HEAP32[(($result)>>2)];
      var $183=(($182+4)|0);
      var $184=HEAP32[(($183)>>2)];
      var $185=(($184+24)|0);
      var $186=HEAP32[(($185)>>2)];
      var $187=HEAP32[(($result)>>2)];
      FUNCTION_TABLE[$186]($187);
      label = 69; break;
    case 69: 
      label = 70; break;
    case 70: 
      label = 71; break;
    case 71: 
      label = 72; break;
    case 72: 
      label = 73; break;
    case 73: 
      var $193=$it;
      var $194=(($193)|0);
      var $195=HEAP32[(($194)>>2)];
      var $196=((($195)-(1))|0);
      HEAP32[(($194)>>2)]=$196;
      var $197=(($196)|(0))!=0;
      if ($197) { label = 74; break; } else { label = 75; break; }
    case 74: 
      label = 76; break;
    case 75: 
      var $200=$it;
      var $201=(($200+4)|0);
      var $202=HEAP32[(($201)>>2)];
      var $203=(($202+24)|0);
      var $204=HEAP32[(($203)>>2)];
      var $205=$it;
      FUNCTION_TABLE[$204]($205);
      label = 76; break;
    case 76: 
      label = 77; break;
    case 77: 
      $1=0;
      label = 78; break;
    case 78: 
      var $209=$1;
      STACKTOP = __stackBase__;
      return $209;
    default: assert(0, "bad label: " + label);
  }
}
function _init_functools() {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $i;
      var $m;
      var $name;
      var $typelist=__stackBase__;
      var $1=$typelist;
      assert(8 % 1 === 0);HEAP32[(($1)>>2)]=HEAP32[((_init_functools_typelist)>>2)];HEAP32[((($1)+(4))>>2)]=HEAP32[(((_init_functools_typelist)+(4))>>2)];
      var $2=_Py_InitModule4(((__str2)|0), ((_module_methods)|0), ((_module_doc)|0), 0, 1013);
      $m=$2;
      var $3=$m;
      var $4=(($3)|(0))==0;
      if ($4) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 12; break;
    case 3: 
      $i=0;
      label = 4; break;
    case 4: 
      var $8=$i;
      var $9=(($typelist+($8<<2))|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10)|(0))!=0;
      if ($11) { label = 5; break; } else { label = 12; break; }
    case 5: 
      var $13=$i;
      var $14=(($typelist+($13<<2))|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=_PyType_Ready($15);
      var $17=(($16)|(0)) < 0;
      if ($17) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 12; break;
    case 7: 
      var $20=$i;
      var $21=(($typelist+($20<<2))|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=(($22+12)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=_strchr($24, 46);
      $name=$25;
      var $26=$name;
      var $27=(($26)|(0))!=0;
      if ($27) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 10; break;
    case 9: 
      ___assert_func(((__str3)|0), 398, ((___func___init_functools)|0), ((__str4)|0));
      throw "Reached an unreachable!";
      label = 10; break;
    case 10: 
      var $32=$i;
      var $33=(($typelist+($32<<2))|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=$34;
      var $36=(($35)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=((($37)+(1))|0);
      HEAP32[(($36)>>2)]=$38;
      var $39=$m;
      var $40=$name;
      var $41=(($40+1)|0);
      var $42=$i;
      var $43=(($typelist+($42<<2))|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=$44;
      var $46=_PyModule_AddObject($39, $41, $45);
      label = 11; break;
    case 11: 
      var $48=$i;
      var $49=((($48)+(1))|0);
      $i=$49;
      label = 4; break;
    case 12: 
      STACKTOP = __stackBase__;
      return;
    default: assert(0, "bad label: " + label);
  }
}
Module["_init_functools"] = _init_functools;
function _partial_dealloc($pto) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      $1=$pto;
      var $2=$1;
      var $3=$2;
      _PyObject_GC_UnTrack($3);
      var $4=$1;
      var $5=(($4+24)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6)|(0))!=0;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=$1;
      var $10=$9;
      _PyObject_ClearWeakRefs($10);
      label = 3; break;
    case 3: 
      label = 4; break;
    case 4: 
      var $13=$1;
      var $14=(($13+8)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=(($15)|(0))==0;
      if ($16) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 12; break;
    case 6: 
      label = 7; break;
    case 7: 
      var $20=$1;
      var $21=(($20+8)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=(($22)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=((($24)-(1))|0);
      HEAP32[(($23)>>2)]=$25;
      var $26=(($25)|(0))!=0;
      if ($26) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 10; break;
    case 9: 
      var $29=$1;
      var $30=(($29+8)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=(($31+4)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=(($33+24)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=$1;
      var $37=(($36+8)|0);
      var $38=HEAP32[(($37)>>2)];
      FUNCTION_TABLE[$35]($38);
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      var $44=$1;
      var $45=(($44+12)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=(($46)|(0))==0;
      if ($47) { label = 15; break; } else { label = 16; break; }
    case 15: 
      label = 22; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $51=$1;
      var $52=(($51+12)|0);
      var $53=HEAP32[(($52)>>2)];
      var $54=(($53)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=((($55)-(1))|0);
      HEAP32[(($54)>>2)]=$56;
      var $57=(($56)|(0))!=0;
      if ($57) { label = 18; break; } else { label = 19; break; }
    case 18: 
      label = 20; break;
    case 19: 
      var $60=$1;
      var $61=(($60+12)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=(($62+4)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=(($64+24)|0);
      var $66=HEAP32[(($65)>>2)];
      var $67=$1;
      var $68=(($67+12)|0);
      var $69=HEAP32[(($68)>>2)];
      FUNCTION_TABLE[$66]($69);
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
      var $75=$1;
      var $76=(($75+16)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=(($77)|(0))==0;
      if ($78) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 32; break;
    case 26: 
      label = 27; break;
    case 27: 
      var $82=$1;
      var $83=(($82+16)|0);
      var $84=HEAP32[(($83)>>2)];
      var $85=(($84)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=((($86)-(1))|0);
      HEAP32[(($85)>>2)]=$87;
      var $88=(($87)|(0))!=0;
      if ($88) { label = 28; break; } else { label = 29; break; }
    case 28: 
      label = 30; break;
    case 29: 
      var $91=$1;
      var $92=(($91+16)|0);
      var $93=HEAP32[(($92)>>2)];
      var $94=(($93+4)|0);
      var $95=HEAP32[(($94)>>2)];
      var $96=(($95+24)|0);
      var $97=HEAP32[(($96)>>2)];
      var $98=$1;
      var $99=(($98+16)|0);
      var $100=HEAP32[(($99)>>2)];
      FUNCTION_TABLE[$97]($100);
      label = 30; break;
    case 30: 
      label = 31; break;
    case 31: 
      label = 32; break;
    case 32: 
      label = 33; break;
    case 33: 
      label = 34; break;
    case 34: 
      var $106=$1;
      var $107=(($106+20)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=(($108)|(0))==0;
      if ($109) { label = 35; break; } else { label = 36; break; }
    case 35: 
      label = 42; break;
    case 36: 
      label = 37; break;
    case 37: 
      var $113=$1;
      var $114=(($113+20)|0);
      var $115=HEAP32[(($114)>>2)];
      var $116=(($115)|0);
      var $117=HEAP32[(($116)>>2)];
      var $118=((($117)-(1))|0);
      HEAP32[(($116)>>2)]=$118;
      var $119=(($118)|(0))!=0;
      if ($119) { label = 38; break; } else { label = 39; break; }
    case 38: 
      label = 40; break;
    case 39: 
      var $122=$1;
      var $123=(($122+20)|0);
      var $124=HEAP32[(($123)>>2)];
      var $125=(($124+4)|0);
      var $126=HEAP32[(($125)>>2)];
      var $127=(($126+24)|0);
      var $128=HEAP32[(($127)>>2)];
      var $129=$1;
      var $130=(($129+20)|0);
      var $131=HEAP32[(($130)>>2)];
      FUNCTION_TABLE[$128]($131);
      label = 40; break;
    case 40: 
      label = 41; break;
    case 41: 
      label = 42; break;
    case 42: 
      label = 43; break;
    case 43: 
      var $136=$1;
      var $137=$136;
      var $138=(($137+4)|0);
      var $139=HEAP32[(($138)>>2)];
      var $140=(($139+160)|0);
      var $141=HEAP32[(($140)>>2)];
      var $142=$1;
      var $143=$142;
      FUNCTION_TABLE[$141]($143);
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _partial_traverse($pto, $visit, $arg) {
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
      var $vret2;
      var $vret3;
      $2=$pto;
      $3=$visit;
      $4=$arg;
      label = 2; break;
    case 2: 
      var $6=$2;
      var $7=(($6+8)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=(($8)|(0))!=0;
      if ($9) { label = 3; break; } else { label = 6; break; }
    case 3: 
      var $11=$3;
      var $12=$2;
      var $13=(($12+8)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=$4;
      var $16=FUNCTION_TABLE[$11]($14, $15);
      $vret=$16;
      var $17=$vret;
      var $18=(($17)|(0))!=0;
      if ($18) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $20=$vret;
      $1=$20;
      label = 26; break;
    case 5: 
      label = 6; break;
    case 6: 
      label = 7; break;
    case 7: 
      label = 8; break;
    case 8: 
      var $25=$2;
      var $26=(($25+12)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=(($27)|(0))!=0;
      if ($28) { label = 9; break; } else { label = 12; break; }
    case 9: 
      var $30=$3;
      var $31=$2;
      var $32=(($31+12)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=$4;
      var $35=FUNCTION_TABLE[$30]($33, $34);
      $vret1=$35;
      var $36=$vret1;
      var $37=(($36)|(0))!=0;
      if ($37) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $39=$vret1;
      $1=$39;
      label = 26; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      var $44=$2;
      var $45=(($44+16)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=(($46)|(0))!=0;
      if ($47) { label = 15; break; } else { label = 18; break; }
    case 15: 
      var $49=$3;
      var $50=$2;
      var $51=(($50+16)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=$4;
      var $54=FUNCTION_TABLE[$49]($52, $53);
      $vret2=$54;
      var $55=$vret2;
      var $56=(($55)|(0))!=0;
      if ($56) { label = 16; break; } else { label = 17; break; }
    case 16: 
      var $58=$vret2;
      $1=$58;
      label = 26; break;
    case 17: 
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $63=$2;
      var $64=(($63+20)|0);
      var $65=HEAP32[(($64)>>2)];
      var $66=(($65)|(0))!=0;
      if ($66) { label = 21; break; } else { label = 24; break; }
    case 21: 
      var $68=$3;
      var $69=$2;
      var $70=(($69+20)|0);
      var $71=HEAP32[(($70)>>2)];
      var $72=$4;
      var $73=FUNCTION_TABLE[$68]($71, $72);
      $vret3=$73;
      var $74=$vret3;
      var $75=(($74)|(0))!=0;
      if ($75) { label = 22; break; } else { label = 23; break; }
    case 22: 
      var $77=$vret3;
      $1=$77;
      label = 26; break;
    case 23: 
      label = 24; break;
    case 24: 
      label = 25; break;
    case 25: 
      $1=0;
      label = 26; break;
    case 26: 
      var $82=$1;
      return $82;
    default: assert(0, "bad label: " + label);
  }
}
function _partial_new($type, $args, $kw) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $func;
      var $pto;
      $2=$type;
      $3=$args;
      $4=$kw;
      var $5=$3;
      var $6=$5;
      var $7=(($6+8)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=(($8)|(0)) < 1;
      if ($9) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $11=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($11, ((__str9)|0));
      $1=0;
      label = 25; break;
    case 3: 
      var $13=$3;
      var $14=$13;
      var $15=(($14+12)|0);
      var $16=(($15)|0);
      var $17=HEAP32[(($16)>>2)];
      $func=$17;
      var $18=$func;
      var $19=_PyCallable_Check($18);
      var $20=(($19)|(0))!=0;
      if ($20) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $22=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($22, ((__str10)|0));
      $1=0;
      label = 25; break;
    case 5: 
      var $24=$2;
      var $25=(($24+152)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=$2;
      var $28=FUNCTION_TABLE[$26]($27, 0);
      var $29=$28;
      $pto=$29;
      var $30=$pto;
      var $31=(($30)|(0))==0;
      if ($31) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 25; break;
    case 7: 
      var $34=$func;
      var $35=$pto;
      var $36=(($35+8)|0);
      HEAP32[(($36)>>2)]=$34;
      var $37=$func;
      var $38=(($37)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=((($39)+(1))|0);
      HEAP32[(($38)>>2)]=$40;
      var $41=$3;
      var $42=_PyTuple_GetSlice($41, 1, 2147483647);
      var $43=$pto;
      var $44=(($43+12)|0);
      HEAP32[(($44)>>2)]=$42;
      var $45=$pto;
      var $46=(($45+12)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=(($47)|(0))==0;
      if ($48) { label = 8; break; } else { label = 14; break; }
    case 8: 
      var $50=$pto;
      var $51=(($50+16)|0);
      HEAP32[(($51)>>2)]=0;
      label = 9; break;
    case 9: 
      var $53=$pto;
      var $54=$53;
      var $55=(($54)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=((($56)-(1))|0);
      HEAP32[(($55)>>2)]=$57;
      var $58=(($57)|(0))!=0;
      if ($58) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 12; break;
    case 11: 
      var $61=$pto;
      var $62=$61;
      var $63=(($62+4)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=(($64+24)|0);
      var $66=HEAP32[(($65)>>2)];
      var $67=$pto;
      var $68=$67;
      FUNCTION_TABLE[$66]($68);
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      $1=0;
      label = 25; break;
    case 14: 
      var $72=$4;
      var $73=(($72)|(0))!=0;
      if ($73) { label = 15; break; } else { label = 23; break; }
    case 15: 
      var $75=$4;
      var $76=_PyDict_Copy($75);
      var $77=$pto;
      var $78=(($77+16)|0);
      HEAP32[(($78)>>2)]=$76;
      var $79=$pto;
      var $80=(($79+16)|0);
      var $81=HEAP32[(($80)>>2)];
      var $82=(($81)|(0))==0;
      if ($82) { label = 16; break; } else { label = 22; break; }
    case 16: 
      label = 17; break;
    case 17: 
      var $85=$pto;
      var $86=$85;
      var $87=(($86)|0);
      var $88=HEAP32[(($87)>>2)];
      var $89=((($88)-(1))|0);
      HEAP32[(($87)>>2)]=$89;
      var $90=(($89)|(0))!=0;
      if ($90) { label = 18; break; } else { label = 19; break; }
    case 18: 
      label = 20; break;
    case 19: 
      var $93=$pto;
      var $94=$93;
      var $95=(($94+4)|0);
      var $96=HEAP32[(($95)>>2)];
      var $97=(($96+24)|0);
      var $98=HEAP32[(($97)>>2)];
      var $99=$pto;
      var $100=$99;
      FUNCTION_TABLE[$98]($100);
      label = 20; break;
    case 20: 
      label = 21; break;
    case 21: 
      $1=0;
      label = 25; break;
    case 22: 
      label = 24; break;
    case 23: 
      var $105=$pto;
      var $106=(($105+16)|0);
      HEAP32[(($106)>>2)]=__Py_NoneStruct;
      var $107=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $108=((($107)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$108;
      label = 24; break;
    case 24: 
      var $110=$pto;
      var $111=(($110+24)|0);
      HEAP32[(($111)>>2)]=0;
      var $112=$pto;
      var $113=(($112+20)|0);
      HEAP32[(($113)>>2)]=0;
      var $114=$pto;
      var $115=$114;
      $1=$115;
      label = 25; break;
    case 25: 
      var $117=$1;
      return $117;
    default: assert(0, "bad label: " + label);
  }
}
function _partial_call($pto, $args, $kw) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $ret;
      var $argappl;
      var $kwappl;
      $2=$pto;
      $3=$args;
      $4=$kw;
      $argappl=0;
      $kwappl=0;
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=_PyCallable_Check($7);
      var $9=(($8)|(0))!=0;
      if ($9) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 4; break;
    case 3: 
      ___assert_func(((__str3)|0), 171, ((___func___partial_call)|0), ((__str22)|0));
      throw "Reached an unreachable!";
      label = 4; break;
    case 4: 
      var $14=$2;
      var $15=(($14+12)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=(($16+4)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18+84)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=$20 & 67108864;
      var $22=(($21)|(0))!=0;
      if ($22) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 7; break;
    case 6: 
      ___assert_func(((__str3)|0), 172, ((___func___partial_call)|0), ((__str23)|0));
      throw "Reached an unreachable!";
      label = 7; break;
    case 7: 
      var $27=$2;
      var $28=(($27+16)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=(($29)|(0))==((__Py_NoneStruct)|(0));
      if ($30) { label = 9; break; } else { label = 8; break; }
    case 8: 
      var $32=$2;
      var $33=(($32+16)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=(($34+4)|0);
      var $36=HEAP32[(($35)>>2)];
      var $37=(($36+84)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=$38 & 536870912;
      var $40=(($39)|(0))!=0;
      if ($40) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 11; break;
    case 10: 
      ___assert_func(((__str3)|0), 173, ((___func___partial_call)|0), ((__str24)|0));
      throw "Reached an unreachable!";
      label = 11; break;
    case 11: 
      var $45=$2;
      var $46=(($45+12)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=$47;
      var $49=(($48+8)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=(($50)|(0))==0;
      if ($51) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $53=$3;
      $argappl=$53;
      var $54=$3;
      var $55=(($54)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=((($56)+(1))|0);
      HEAP32[(($55)>>2)]=$57;
      label = 19; break;
    case 13: 
      var $59=$3;
      var $60=$59;
      var $61=(($60+8)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=(($62)|(0))==0;
      if ($63) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $65=$2;
      var $66=(($65+12)|0);
      var $67=HEAP32[(($66)>>2)];
      $argappl=$67;
      var $68=$2;
      var $69=(($68+12)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=(($70)|0);
      var $72=HEAP32[(($71)>>2)];
      var $73=((($72)+(1))|0);
      HEAP32[(($71)>>2)]=$73;
      label = 18; break;
    case 15: 
      var $75=$2;
      var $76=(($75+12)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=$3;
      var $79=_PySequence_Concat($77, $78);
      $argappl=$79;
      var $80=$argappl;
      var $81=(($80)|(0))==0;
      if ($81) { label = 16; break; } else { label = 17; break; }
    case 16: 
      $1=0;
      label = 64; break;
    case 17: 
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      var $86=$2;
      var $87=(($86+16)|0);
      var $88=HEAP32[(($87)>>2)];
      var $89=(($88)|(0))==((__Py_NoneStruct)|(0));
      if ($89) { label = 20; break; } else { label = 26; break; }
    case 20: 
      var $91=$4;
      $kwappl=$91;
      label = 21; break;
    case 21: 
      var $93=$4;
      var $94=(($93)|(0))==0;
      if ($94) { label = 22; break; } else { label = 23; break; }
    case 22: 
      label = 24; break;
    case 23: 
      var $97=$4;
      var $98=(($97)|0);
      var $99=HEAP32[(($98)>>2)];
      var $100=((($99)+(1))|0);
      HEAP32[(($98)>>2)]=$100;
      label = 24; break;
    case 24: 
      label = 25; break;
    case 25: 
      label = 48; break;
    case 26: 
      var $104=$2;
      var $105=(($104+16)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=_PyDict_Copy($106);
      $kwappl=$107;
      var $108=$kwappl;
      var $109=(($108)|(0))==0;
      if ($109) { label = 27; break; } else { label = 33; break; }
    case 27: 
      label = 28; break;
    case 28: 
      var $112=$argappl;
      var $113=(($112)|0);
      var $114=HEAP32[(($113)>>2)];
      var $115=((($114)-(1))|0);
      HEAP32[(($113)>>2)]=$115;
      var $116=(($115)|(0))!=0;
      if ($116) { label = 29; break; } else { label = 30; break; }
    case 29: 
      label = 31; break;
    case 30: 
      var $119=$argappl;
      var $120=(($119+4)|0);
      var $121=HEAP32[(($120)>>2)];
      var $122=(($121+24)|0);
      var $123=HEAP32[(($122)>>2)];
      var $124=$argappl;
      FUNCTION_TABLE[$123]($124);
      label = 31; break;
    case 31: 
      label = 32; break;
    case 32: 
      $1=0;
      label = 64; break;
    case 33: 
      var $128=$4;
      var $129=(($128)|(0))!=0;
      if ($129) { label = 34; break; } else { label = 47; break; }
    case 34: 
      var $131=$kwappl;
      var $132=$4;
      var $133=_PyDict_Merge($131, $132, 1);
      var $134=(($133)|(0))!=0;
      if ($134) { label = 35; break; } else { label = 46; break; }
    case 35: 
      label = 36; break;
    case 36: 
      var $137=$argappl;
      var $138=(($137)|0);
      var $139=HEAP32[(($138)>>2)];
      var $140=((($139)-(1))|0);
      HEAP32[(($138)>>2)]=$140;
      var $141=(($140)|(0))!=0;
      if ($141) { label = 37; break; } else { label = 38; break; }
    case 37: 
      label = 39; break;
    case 38: 
      var $144=$argappl;
      var $145=(($144+4)|0);
      var $146=HEAP32[(($145)>>2)];
      var $147=(($146+24)|0);
      var $148=HEAP32[(($147)>>2)];
      var $149=$argappl;
      FUNCTION_TABLE[$148]($149);
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      label = 41; break;
    case 41: 
      var $153=$kwappl;
      var $154=(($153)|0);
      var $155=HEAP32[(($154)>>2)];
      var $156=((($155)-(1))|0);
      HEAP32[(($154)>>2)]=$156;
      var $157=(($156)|(0))!=0;
      if ($157) { label = 42; break; } else { label = 43; break; }
    case 42: 
      label = 44; break;
    case 43: 
      var $160=$kwappl;
      var $161=(($160+4)|0);
      var $162=HEAP32[(($161)>>2)];
      var $163=(($162+24)|0);
      var $164=HEAP32[(($163)>>2)];
      var $165=$kwappl;
      FUNCTION_TABLE[$164]($165);
      label = 44; break;
    case 44: 
      label = 45; break;
    case 45: 
      $1=0;
      label = 64; break;
    case 46: 
      label = 47; break;
    case 47: 
      label = 48; break;
    case 48: 
      var $171=$2;
      var $172=(($171+8)|0);
      var $173=HEAP32[(($172)>>2)];
      var $174=$argappl;
      var $175=$kwappl;
      var $176=_PyObject_Call($173, $174, $175);
      $ret=$176;
      label = 49; break;
    case 49: 
      var $178=$argappl;
      var $179=(($178)|0);
      var $180=HEAP32[(($179)>>2)];
      var $181=((($180)-(1))|0);
      HEAP32[(($179)>>2)]=$181;
      var $182=(($181)|(0))!=0;
      if ($182) { label = 50; break; } else { label = 51; break; }
    case 50: 
      label = 52; break;
    case 51: 
      var $185=$argappl;
      var $186=(($185+4)|0);
      var $187=HEAP32[(($186)>>2)];
      var $188=(($187+24)|0);
      var $189=HEAP32[(($188)>>2)];
      var $190=$argappl;
      FUNCTION_TABLE[$189]($190);
      label = 52; break;
    case 52: 
      label = 53; break;
    case 53: 
      label = 54; break;
    case 54: 
      var $194=$kwappl;
      var $195=(($194)|(0))==0;
      if ($195) { label = 55; break; } else { label = 56; break; }
    case 55: 
      label = 62; break;
    case 56: 
      label = 57; break;
    case 57: 
      var $199=$kwappl;
      var $200=(($199)|0);
      var $201=HEAP32[(($200)>>2)];
      var $202=((($201)-(1))|0);
      HEAP32[(($200)>>2)]=$202;
      var $203=(($202)|(0))!=0;
      if ($203) { label = 58; break; } else { label = 59; break; }
    case 58: 
      label = 60; break;
    case 59: 
      var $206=$kwappl;
      var $207=(($206+4)|0);
      var $208=HEAP32[(($207)>>2)];
      var $209=(($208+24)|0);
      var $210=HEAP32[(($209)>>2)];
      var $211=$kwappl;
      FUNCTION_TABLE[$210]($211);
      label = 60; break;
    case 60: 
      label = 61; break;
    case 61: 
      label = 62; break;
    case 62: 
      label = 63; break;
    case 63: 
      var $216=$ret;
      $1=$216;
      label = 64; break;
    case 64: 
      var $218=$1;
      return $218;
    default: assert(0, "bad label: " + label);
  }
}
function _partial_get_dict($pto) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$pto;
      var $3=$2;
      var $4=(($3+20)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))==0;
      if ($6) { label = 2; break; } else { label = 5; break; }
    case 2: 
      var $8=_PyDict_New();
      var $9=$2;
      var $10=(($9+20)|0);
      HEAP32[(($10)>>2)]=$8;
      var $11=$2;
      var $12=(($11+20)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=(($13)|(0))==0;
      if ($14) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 6; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $18=$2;
      var $19=(($18+20)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=(($20)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=((($22)+(1))|0);
      HEAP32[(($21)>>2)]=$23;
      var $24=$2;
      var $25=(($24+20)|0);
      var $26=HEAP32[(($25)>>2)];
      $1=$26;
      label = 6; break;
    case 6: 
      var $28=$1;
      return $28;
    default: assert(0, "bad label: " + label);
  }
}
function _partial_set_dict($pto, $value) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $tmp;
      $2=$pto;
      $3=$value;
      var $4=$3;
      var $5=(($4)|(0))==0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $7=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($7, ((__str12)|0));
      $1=-1;
      label = 16; break;
    case 3: 
      var $9=$3;
      var $10=(($9+4)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=(($11+84)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=$13 & 536870912;
      var $15=(($14)|(0))!=0;
      if ($15) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $17=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($17, ((__str13)|0));
      $1=-1;
      label = 16; break;
    case 5: 
      var $19=$2;
      var $20=(($19+20)|0);
      var $21=HEAP32[(($20)>>2)];
      $tmp=$21;
      var $22=$3;
      var $23=(($22)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=((($24)+(1))|0);
      HEAP32[(($23)>>2)]=$25;
      var $26=$3;
      var $27=$2;
      var $28=(($27+20)|0);
      HEAP32[(($28)>>2)]=$26;
      label = 6; break;
    case 6: 
      var $30=$tmp;
      var $31=(($30)|(0))==0;
      if ($31) { label = 7; break; } else { label = 8; break; }
    case 7: 
      label = 14; break;
    case 8: 
      label = 9; break;
    case 9: 
      var $35=$tmp;
      var $36=(($35)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=((($37)-(1))|0);
      HEAP32[(($36)>>2)]=$38;
      var $39=(($38)|(0))!=0;
      if ($39) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 12; break;
    case 11: 
      var $42=$tmp;
      var $43=(($42+4)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=(($44+24)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=$tmp;
      FUNCTION_TABLE[$46]($47);
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      $1=0;
      label = 16; break;
    case 16: 
      var $53=$1;
      return $53;
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
