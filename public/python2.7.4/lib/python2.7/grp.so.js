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
var _struct_group_type_fields;
var _struct_group_type_desc;
var _struct_group__doc__;
var _initialized;
var _grp_methods;
var _grp__doc__;
var __str9;
var __str8;
var __str7;
var __str6;
var __str5;
var __str4;
var __str3;
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
var _StructGrpType;
_struct_group_type_fields=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_struct_group_type_desc=allocate([0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0], "i8", ALLOC_NORMAL);
_struct_group__doc__=allocate([103,114,112,46,115,116,114,117,99,116,95,103,114,111,117,112,58,32,82,101,115,117,108,116,115,32,102,114,111,109,32,103,101,116,103,114,42,40,41,32,114,111,117,116,105,110,101,115,46,10,10,84,104,105,115,32,111,98,106,101,99,116,32,109,97,121,32,98,101,32,97,99,99,101,115,115,101,100,32,101,105,116,104,101,114,32,97,115,32,97,32,116,117,112,108,101,32,111,102,10,32,32,40,103,114,95,110,97,109,101,44,103,114,95,112,97,115,115,119,100,44,103,114,95,103,105,100,44,103,114,95,109,101,109,41,10,111,114,32,118,105,97,32,116,104,101,32,111,98,106,101,99,116,32,97,116,116,114,105,98,117,116,101,115,32,97,115,32,110,97,109,101,100,32,105,110,32,116,104,101,32,97,98,111,118,101,32,116,117,112,108,101,46,10,0,0], "i8", ALLOC_NORMAL);
_initialized=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_grp_methods=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_grp__doc__=allocate([65,99,99,101,115,115,32,116,111,32,116,104,101,32,85,110,105,120,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,46,10,10,71,114,111,117,112,32,101,110,116,114,105,101,115,32,97,114,101,32,114,101,112,111,114,116,101,100,32,97,115,32,52,45,116,117,112,108,101,115,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,102,105,101,108,100,115,10,102,114,111,109,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,44,32,105,110,32,111,114,100,101,114,58,10,10,32,32,110,97,109,101,32,32,32,45,32,110,97,109,101,32,111,102,32,116,104,101,32,103,114,111,117,112,10,32,32,112,97,115,115,119,100,32,45,32,103,114,111,117,112,32,112,97,115,115,119,111,114,100,32,40,101,110,99,114,121,112,116,101,100,41,59,32,111,102,116,101,110,32,101,109,112,116,121,10,32,32,103,105,100,32,32,32,32,45,32,110,117,109,101,114,105,99,32,73,68,32,111,102,32,116,104,101,32,103,114,111,117,112,10,32,32,109,101,109,32,32,32,32,45,32,108,105,115,116,32,111,102,32,109,101,109,98,101,114,115,10,10,84,104,101,32,103,105,100,32,105,115,32,97,110,32,105,110,116,101,103,101,114,44,32,110,97,109,101,32,97,110,100,32,112,97,115,115,119,111,114,100,32,97,114,101,32,115,116,114,105,110,103,115,46,32,32,40,78,111,116,101,32,116,104,97,116,32,109,111,115,116,10,117,115,101,114,115,32,97,114,101,32,110,111,116,32,101,120,112,108,105,99,105,116,108,121,32,108,105,115,116,101,100,32,97,115,32,109,101,109,98,101,114,115,32,111,102,32,116,104,101,32,103,114,111,117,112,115,32,116,104,101,121,32,97,114,101,32,105,110,10,97,99,99,111,114,100,105,110,103,32,116,111,32,116,104,101,32,112,97,115,115,119,111,114,100,32,100,97,116,97,98,97,115,101,46,32,32,67,104,101,99,107,32,98,111,116,104,32,100,97,116,97,98,97,115,101,115,32,116,111,32,103,101,116,10,99,111,109,112,108,101,116,101,32,109,101,109,98,101,114,115,104,105,112,32,105,110,102,111,114,109,97,116,105,111,110,46,41,0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([103,114,95,109,101,109,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([103,114,111,117,112,32,105,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([103,114,95,103,105,100,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([112,97,115,115,119,111,114,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([103,114,95,112,97,115,115,119,100,0,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([103,114,111,117,112,32,110,97,109,101,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([103,114,95,110,97,109,101,0], "i8", ALLOC_NORMAL);
__str2=allocate([103,114,112,46,115,116,114,117,99,116,95,103,114,111,117,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([103,101,116,103,114,103,105,100,40,41,58,32,103,105,100,32,110,111,116,32,102,111,117,110,100,58,32,37,108,117,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([103,101,116,103,114,103,105,100,40,41,58,32,103,105,100,32,110,111,116,32,102,111,117,110,100,58,32,37,108,100,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([103,101,116,103,114,110,97,109,40,41,58,32,110,97,109,101,32,110,111,116,32,102,111,117,110,100,58,32,37,115,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([103,101,116,103,114,97,108,108,40,41,32,45,62,32,108,105,115,116,32,111,102,32,116,117,112,108,101,115,10,82,101,116,117,114,110,32,97,32,108,105,115,116,32,111,102,32,97,108,108,32,97,118,97,105,108,97,98,108,101,32,103,114,111,117,112,32,101,110,116,114,105,101,115,44,32,105,110,32,97,114,98,105,116,114,97,114,121,32,111,114,100,101,114,46,10,65,110,32,101,110,116,114,121,32,119,104,111,115,101,32,110,97,109,101,32,115,116,97,114,116,115,32,119,105,116,104,32,39,43,39,32,111,114,32,39,45,39,32,114,101,112,114,101,115,101,110,116,115,32,97,110,32,105,110,115,116,114,117,99,116,105,111,110,10,116,111,32,117,115,101,32,89,80,47,78,73,83,32,97,110,100,32,109,97,121,32,110,111,116,32,98,101,32,97,99,99,101,115,115,105,98,108,101,32,118,105,97,32,103,101,116,103,114,110,97,109,32,111,114,32,103,101,116,103,114,103,105,100,46,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([103,101,116,103,114,97,108,108,0,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([103,101,116,103,114,110,97,109,40,110,97,109,101,41,32,45,62,32,116,117,112,108,101,10,82,101,116,117,114,110,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,32,101,110,116,114,121,32,102,111,114,32,116,104,101,32,103,105,118,101,110,32,103,114,111,117,112,32,110,97,109,101,46,32,32,73,102,10,110,97,109,101,32,105,115,32,110,111,116,32,118,97,108,105,100,44,32,114,97,105,115,101,32,75,101,121,69,114,114,111,114,46,0,0,0,0], "i8", ALLOC_NORMAL);
__str13=allocate([103,101,116,103,114,110,97,109,0,0,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([103,101,116,103,114,103,105,100,40,105,100,41,32,45,62,32,116,117,112,108,101,10,82,101,116,117,114,110,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,32,101,110,116,114,121,32,102,111,114,32,116,104,101,32,103,105,118,101,110,32,110,117,109,101,114,105,99,32,103,114,111,117,112,32,73,68,46,32,32,73,102,10,105,100,32,105,115,32,110,111,116,32,118,97,108,105,100,44,32,114,97,105,115,101,32,75,101,121,69,114,114,111,114,46,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([103,101,116,103,114,103,105,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([103,114,111,117,112,32,109,101,109,101,98,101,114,115,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([115,116,114,117,99,116,95,103,114,111,117,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str=allocate([103,114,112,0], "i8", ALLOC_NORMAL);
_StructGrpType=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_struct_group_type_fields)>>2)]=((__str3)|0);
HEAP32[(((_struct_group_type_fields)+(4))>>2)]=((__str4)|0);
HEAP32[(((_struct_group_type_fields)+(8))>>2)]=((__str5)|0);
HEAP32[(((_struct_group_type_fields)+(12))>>2)]=((__str6)|0);
HEAP32[(((_struct_group_type_fields)+(16))>>2)]=((__str7)|0);
HEAP32[(((_struct_group_type_fields)+(20))>>2)]=((__str8)|0);
HEAP32[(((_struct_group_type_fields)+(24))>>2)]=((__str9)|0);
HEAP32[(((_struct_group_type_fields)+(28))>>2)]=((__str10)|0);
HEAP32[((_struct_group_type_desc)>>2)]=((__str2)|0);
HEAP32[(((_struct_group_type_desc)+(4))>>2)]=((_struct_group__doc__)|0);
HEAP32[(((_struct_group_type_desc)+(8))>>2)]=((_struct_group_type_fields)|0);
HEAP32[((_grp_methods)>>2)]=((__str11)|0);
HEAP32[(((_grp_methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_grp_methods)+(12))>>2)]=((__str12)|0);
HEAP32[(((_grp_methods)+(16))>>2)]=((__str13)|0);
HEAP32[(((_grp_methods)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((_grp_methods)+(28))>>2)]=((__str14)|0);
HEAP32[(((_grp_methods)+(32))>>2)]=((__str15)|0);
HEAP32[(((_grp_methods)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((_grp_methods)+(44))>>2)]=((__str16)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_grp_getgrgid,0,_grp_getgrall,0,_grp_getgrnam,0]);
// EMSCRIPTEN_START_FUNCS
function _initgrp() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $m;
      var $d;
      var $1=_Py_InitModule4(((__str)|0), ((_grp_methods)|0), ((_grp__doc__)|0), 0, 1013);
      $m=$1;
      var $2=$m;
      var $3=(($2)|(0))==0;
      if ($3) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 6; break;
    case 3: 
      var $6=$m;
      var $7=_PyModule_GetDict($6);
      $d=$7;
      var $8=HEAP32[((_initialized)>>2)];
      var $9=(($8)|(0))!=0;
      if ($9) { label = 5; break; } else { label = 4; break; }
    case 4: 
      _PyStructSequence_InitType(_StructGrpType, _struct_group_type_desc);
      label = 5; break;
    case 5: 
      var $12=$d;
      var $13=_PyDict_SetItemString($12, ((__str1)|0), _StructGrpType);
      HEAP32[((_initialized)>>2)]=1;
      label = 6; break;
    case 6: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
Module["_initgrp"] = _initgrp;
function _grp_getgrgid($self, $pyo_id) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $py_int_id;
      var $gid=__stackBase__;
      var $p;
      $2=$self;
      $3=$pyo_id;
      var $4=$3;
      var $5=_PyNumber_Int($4);
      $py_int_id=$5;
      var $6=$py_int_id;
      var $7=(($6)|(0))!=0;
      if ($7) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 21; break;
    case 3: 
      var $10=$py_int_id;
      var $11=$gid;
      var $12=__Py_Gid_Converter($10, $11);
      var $13=(($12)|(0))!=0;
      if ($13) { label = 10; break; } else { label = 4; break; }
    case 4: 
      label = 5; break;
    case 5: 
      var $16=$py_int_id;
      var $17=(($16)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=((($18)-(1))|0);
      HEAP32[(($17)>>2)]=$19;
      var $20=(($19)|(0))!=0;
      if ($20) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      var $23=$py_int_id;
      var $24=(($23+4)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=(($25+24)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=$py_int_id;
      FUNCTION_TABLE[$27]($28);
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      $1=0;
      label = 21; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $33=$py_int_id;
      var $34=(($33)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=((($35)-(1))|0);
      HEAP32[(($34)>>2)]=$36;
      var $37=(($36)|(0))!=0;
      if ($37) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      var $40=$py_int_id;
      var $41=(($40+4)|0);
      var $42=HEAP32[(($41)>>2)];
      var $43=(($42+24)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=$py_int_id;
      FUNCTION_TABLE[$44]($45);
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $48=HEAP32[(($gid)>>2)];
      var $49=_getgrgid($48);
      $p=$49;
      var $50=(($49)|(0))==0;
      if ($50) { label = 16; break; } else { label = 20; break; }
    case 16: 
      var $52=HEAP32[(($gid)>>2)];
      var $53=(($52)>>>(0)) < 0;
      if ($53) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $55=HEAP32[((_PyExc_KeyError)>>2)];
      var $56=HEAP32[(($gid)>>2)];
      var $57=_PyErr_Format($55, ((__str18)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$56,tempInt));
      label = 19; break;
    case 18: 
      var $59=HEAP32[((_PyExc_KeyError)>>2)];
      var $60=HEAP32[(($gid)>>2)];
      var $61=_PyErr_Format($59, ((__str19)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$60,tempInt));
      label = 19; break;
    case 19: 
      $1=0;
      label = 21; break;
    case 20: 
      var $64=$p;
      var $65=_mkgrent($64);
      $1=$65;
      label = 21; break;
    case 21: 
      var $67=$1;
      STACKTOP = __stackBase__;
      return $67;
    default: assert(0, "bad label: " + label);
  }
}
function _grp_getgrnam($self, $pyo_name) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $py_str_name;
      var $name;
      var $p;
      $2=$self;
      $3=$pyo_name;
      var $4=$3;
      var $5=_PyObject_Str($4);
      $py_str_name=$5;
      var $6=$py_str_name;
      var $7=(($6)|(0))!=0;
      if ($7) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 16; break;
    case 3: 
      var $10=$py_str_name;
      var $11=$10;
      var $12=(($11+20)|0);
      var $13=(($12)|0);
      $name=$13;
      var $14=$name;
      var $15=_getgrnam($14);
      $p=$15;
      var $16=(($15)|(0))==0;
      if ($16) { label = 4; break; } else { label = 10; break; }
    case 4: 
      var $18=HEAP32[((_PyExc_KeyError)>>2)];
      var $19=$name;
      var $20=_PyErr_Format($18, ((__str17)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$19,tempInt));
      label = 5; break;
    case 5: 
      var $22=$py_str_name;
      var $23=(($22)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=((($24)-(1))|0);
      HEAP32[(($23)>>2)]=$25;
      var $26=(($25)|(0))!=0;
      if ($26) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      var $29=$py_str_name;
      var $30=(($29+4)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=(($31+24)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=$py_str_name;
      FUNCTION_TABLE[$33]($34);
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      $1=0;
      label = 16; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $39=$py_str_name;
      var $40=(($39)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=((($41)-(1))|0);
      HEAP32[(($40)>>2)]=$42;
      var $43=(($42)|(0))!=0;
      if ($43) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      var $46=$py_str_name;
      var $47=(($46+4)|0);
      var $48=HEAP32[(($47)>>2)];
      var $49=(($48+24)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=$py_str_name;
      FUNCTION_TABLE[$50]($51);
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $54=$p;
      var $55=_mkgrent($54);
      $1=$55;
      label = 16; break;
    case 16: 
      var $57=$1;
      STACKTOP = __stackBase__;
      return $57;
    default: assert(0, "bad label: " + label);
  }
}
function _grp_getgrall($self, $ignore) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $d;
      var $p;
      var $v;
      $2=$self;
      $3=$ignore;
      var $4=_PyList_New(0);
      $d=$4;
      var $5=(($4)|(0))==0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 30; break;
    case 3: 
      _setgrent();
      label = 4; break;
    case 4: 
      var $9=_getgrent();
      $p=$9;
      var $10=(($9)|(0))!=0;
      if ($10) { label = 5; break; } else { label = 29; break; }
    case 5: 
      var $12=$p;
      var $13=_mkgrent($12);
      $v=$13;
      var $14=$v;
      var $15=(($14)|(0))==0;
      if ($15) { label = 7; break; } else { label = 6; break; }
    case 6: 
      var $17=$d;
      var $18=$v;
      var $19=_PyList_Append($17, $18);
      var $20=(($19)|(0))!=0;
      if ($20) { label = 7; break; } else { label = 23; break; }
    case 7: 
      label = 8; break;
    case 8: 
      var $23=$v;
      var $24=(($23)|(0))==0;
      if ($24) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 16; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $28=$v;
      var $29=(($28)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=((($30)-(1))|0);
      HEAP32[(($29)>>2)]=$31;
      var $32=(($31)|(0))!=0;
      if ($32) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      var $35=$v;
      var $36=(($35+4)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=(($37+24)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=$v;
      FUNCTION_TABLE[$39]($40);
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      label = 18; break;
    case 18: 
      var $46=$d;
      var $47=(($46)|0);
      var $48=HEAP32[(($47)>>2)];
      var $49=((($48)-(1))|0);
      HEAP32[(($47)>>2)]=$49;
      var $50=(($49)|(0))!=0;
      if ($50) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 21; break;
    case 20: 
      var $53=$d;
      var $54=(($53+4)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=(($55+24)|0);
      var $57=HEAP32[(($56)>>2)];
      var $58=$d;
      FUNCTION_TABLE[$57]($58);
      label = 21; break;
    case 21: 
      label = 22; break;
    case 22: 
      _endgrent();
      $1=0;
      label = 30; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $63=$v;
      var $64=(($63)|0);
      var $65=HEAP32[(($64)>>2)];
      var $66=((($65)-(1))|0);
      HEAP32[(($64)>>2)]=$66;
      var $67=(($66)|(0))!=0;
      if ($67) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 27; break;
    case 26: 
      var $70=$v;
      var $71=(($70+4)|0);
      var $72=HEAP32[(($71)>>2)];
      var $73=(($72+24)|0);
      var $74=HEAP32[(($73)>>2)];
      var $75=$v;
      FUNCTION_TABLE[$74]($75);
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      label = 4; break;
    case 29: 
      _endgrent();
      var $79=$d;
      $1=$79;
      label = 30; break;
    case 30: 
      var $81=$1;
      return $81;
    default: assert(0, "bad label: " + label);
  }
}
function _mkgrent($p) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $setIndex;
      var $v;
      var $w;
      var $member;
      var $x;
      $2=$p;
      $setIndex=0;
      var $3=_PyStructSequence_New(_StructGrpType);
      $v=$3;
      var $4=$v;
      var $5=(($4)|(0))==0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 53; break;
    case 3: 
      var $8=_PyList_New(0);
      $w=$8;
      var $9=(($8)|(0))==0;
      if ($9) { label = 4; break; } else { label = 10; break; }
    case 4: 
      label = 5; break;
    case 5: 
      var $12=$v;
      var $13=(($12)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=((($14)-(1))|0);
      HEAP32[(($13)>>2)]=$15;
      var $16=(($15)|(0))!=0;
      if ($16) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      var $19=$v;
      var $20=(($19+4)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=(($21+24)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=$v;
      FUNCTION_TABLE[$23]($24);
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      $1=0;
      label = 53; break;
    case 10: 
      var $28=$2;
      var $29=(($28+12)|0);
      var $30=HEAP32[(($29)>>2)];
      $member=$30;
      label = 11; break;
    case 11: 
      var $32=$member;
      var $33=HEAP32[(($32)>>2)];
      var $34=(($33)|(0))!=0;
      if ($34) { label = 12; break; } else { label = 42; break; }
    case 12: 
      var $36=$member;
      var $37=HEAP32[(($36)>>2)];
      var $38=_PyString_FromString($37);
      $x=$38;
      var $39=$x;
      var $40=(($39)|(0))==0;
      if ($40) { label = 14; break; } else { label = 13; break; }
    case 13: 
      var $42=$w;
      var $43=$x;
      var $44=_PyList_Append($42, $43);
      var $45=(($44)|(0))!=0;
      if ($45) { label = 14; break; } else { label = 35; break; }
    case 14: 
      label = 15; break;
    case 15: 
      var $48=$x;
      var $49=(($48)|(0))==0;
      if ($49) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 23; break;
    case 17: 
      label = 18; break;
    case 18: 
      var $53=$x;
      var $54=(($53)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=((($55)-(1))|0);
      HEAP32[(($54)>>2)]=$56;
      var $57=(($56)|(0))!=0;
      if ($57) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 21; break;
    case 20: 
      var $60=$x;
      var $61=(($60+4)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=(($62+24)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=$x;
      FUNCTION_TABLE[$64]($65);
      label = 21; break;
    case 21: 
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      label = 25; break;
    case 25: 
      var $71=$w;
      var $72=(($71)|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=((($73)-(1))|0);
      HEAP32[(($72)>>2)]=$74;
      var $75=(($74)|(0))!=0;
      if ($75) { label = 26; break; } else { label = 27; break; }
    case 26: 
      label = 28; break;
    case 27: 
      var $78=$w;
      var $79=(($78+4)|0);
      var $80=HEAP32[(($79)>>2)];
      var $81=(($80+24)|0);
      var $82=HEAP32[(($81)>>2)];
      var $83=$w;
      FUNCTION_TABLE[$82]($83);
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      label = 30; break;
    case 30: 
      var $87=$v;
      var $88=(($87)|0);
      var $89=HEAP32[(($88)>>2)];
      var $90=((($89)-(1))|0);
      HEAP32[(($88)>>2)]=$90;
      var $91=(($90)|(0))!=0;
      if ($91) { label = 31; break; } else { label = 32; break; }
    case 31: 
      label = 33; break;
    case 32: 
      var $94=$v;
      var $95=(($94+4)|0);
      var $96=HEAP32[(($95)>>2)];
      var $97=(($96+24)|0);
      var $98=HEAP32[(($97)>>2)];
      var $99=$v;
      FUNCTION_TABLE[$98]($99);
      label = 33; break;
    case 33: 
      label = 34; break;
    case 34: 
      $1=0;
      label = 53; break;
    case 35: 
      label = 36; break;
    case 36: 
      var $104=$x;
      var $105=(($104)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=((($106)-(1))|0);
      HEAP32[(($105)>>2)]=$107;
      var $108=(($107)|(0))!=0;
      if ($108) { label = 37; break; } else { label = 38; break; }
    case 37: 
      label = 39; break;
    case 38: 
      var $111=$x;
      var $112=(($111+4)|0);
      var $113=HEAP32[(($112)>>2)];
      var $114=(($113+24)|0);
      var $115=HEAP32[(($114)>>2)];
      var $116=$x;
      FUNCTION_TABLE[$115]($116);
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      label = 41; break;
    case 41: 
      var $120=$member;
      var $121=(($120+4)|0);
      $member=$121;
      label = 11; break;
    case 42: 
      var $123=$2;
      var $124=(($123)|0);
      var $125=HEAP32[(($124)>>2)];
      var $126=_PyString_FromString($125);
      var $127=$setIndex;
      var $128=((($127)+(1))|0);
      $setIndex=$128;
      var $129=$v;
      var $130=$129;
      var $131=(($130+12)|0);
      var $132=(($131+($127<<2))|0);
      HEAP32[(($132)>>2)]=$126;
      var $133=$2;
      var $134=(($133+4)|0);
      var $135=HEAP32[(($134)>>2)];
      var $136=(($135)|(0))!=0;
      if ($136) { label = 43; break; } else { label = 44; break; }
    case 43: 
      var $138=$2;
      var $139=(($138+4)|0);
      var $140=HEAP32[(($139)>>2)];
      var $141=_PyString_FromString($140);
      var $142=$setIndex;
      var $143=((($142)+(1))|0);
      $setIndex=$143;
      var $144=$v;
      var $145=$144;
      var $146=(($145+12)|0);
      var $147=(($146+($142<<2))|0);
      HEAP32[(($147)>>2)]=$141;
      label = 45; break;
    case 44: 
      var $149=$setIndex;
      var $150=((($149)+(1))|0);
      $setIndex=$150;
      var $151=$v;
      var $152=$151;
      var $153=(($152+12)|0);
      var $154=(($153+($149<<2))|0);
      HEAP32[(($154)>>2)]=__Py_NoneStruct;
      var $155=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $156=((($155)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$156;
      label = 45; break;
    case 45: 
      var $158=$2;
      var $159=(($158+8)|0);
      var $160=HEAP32[(($159)>>2)];
      var $161=__PyInt_FromGid($160);
      var $162=$setIndex;
      var $163=((($162)+(1))|0);
      $setIndex=$163;
      var $164=$v;
      var $165=$164;
      var $166=(($165+12)|0);
      var $167=(($166+($162<<2))|0);
      HEAP32[(($167)>>2)]=$161;
      var $168=$w;
      var $169=$setIndex;
      var $170=((($169)+(1))|0);
      $setIndex=$170;
      var $171=$v;
      var $172=$171;
      var $173=(($172+12)|0);
      var $174=(($173+($169<<2))|0);
      HEAP32[(($174)>>2)]=$168;
      var $175=_PyErr_Occurred();
      var $176=(($175)|(0))!=0;
      if ($176) { label = 46; break; } else { label = 52; break; }
    case 46: 
      label = 47; break;
    case 47: 
      var $179=$v;
      var $180=(($179)|0);
      var $181=HEAP32[(($180)>>2)];
      var $182=((($181)-(1))|0);
      HEAP32[(($180)>>2)]=$182;
      var $183=(($182)|(0))!=0;
      if ($183) { label = 48; break; } else { label = 49; break; }
    case 48: 
      label = 50; break;
    case 49: 
      var $186=$v;
      var $187=(($186+4)|0);
      var $188=HEAP32[(($187)>>2)];
      var $189=(($188+24)|0);
      var $190=HEAP32[(($189)>>2)];
      var $191=$v;
      FUNCTION_TABLE[$190]($191);
      label = 50; break;
    case 50: 
      label = 51; break;
    case 51: 
      $1=0;
      label = 53; break;
    case 52: 
      var $195=$v;
      $1=$195;
      label = 53; break;
    case 53: 
      var $197=$1;
      return $197;
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
