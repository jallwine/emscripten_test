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
var _dlobject_methods;
var _dl_methods;
var __str9;
var __str8;
var __str7;
var __str6;
var __str5;
var __str4;
var __str3;
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
var _Dltype;
var _Dlerror;
_dlobject_methods=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_dl_methods=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([122,58,111,112,101,110,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([111,112,101,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([82,84,76,68,95,76,79,67,65,76,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([82,84,76,68,95,71,76,79,66,65,76,0], "i8", ALLOC_NORMAL);
__str5=allocate([82,84,76,68,95,78,79,87,0,0,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([82,84,76,68,95,76,65,90,89,0,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([101,114,114,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([97,114,103,117,109,101,110,116,115,32,109,117,115,116,32,98,101,32,105,110,116,44,32,115,116,114,105,110,103,32,111,114,32,78,111,110,101,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([100,108,46,101,114,114,111,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([116,111,111,32,109,97,110,121,32,97,114,103,117,109,101,110,116,115,32,40,109,97,120,32,49,48,41,0], "i8", ALLOC_NORMAL);
__str18=allocate([102,117,110,99,116,105,111,110,32,110,97,109,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([97,116,32,108,101,97,115,116,32,97,32,110,97,109,101,32,105,115,32,110,101,101,100,101,100,0,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([101,120,112,101,99,116,101,100,32,115,116,114,105,110,103,44,32,102,111,117,110,100,32,37,46,50,48,48,115,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([99,108,111,115,101,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([115,121,109,0], "i8", ALLOC_NORMAL);
__str13=allocate([99,97,108,108,0,0,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([100,108,46,100,108,0,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([100,108,111,112,101,110,40,41,32,101,114,114,111,114,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([122,105,58,111,112,101,110,0], "i8", ALLOC_NORMAL);
__str1=allocate([100,108,0,0], "i8", ALLOC_NORMAL);
__str=allocate([116,104,101,32,100,108,32,109,111,100,117,108,101,32,104,97,115,32,98,101,101,110,32,114,101,109,111,118,101,100,32,105,110,32,80,121,116,104,111,110,32,51,46,48,59,32,117,115,101,32,116,104,101,32,99,116,121,112,101,115,32,109,111,100,117,108,101,32,105,110,115,116,101,97,100,0], "i8", ALLOC_NORMAL);
_Dltype=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_Dlerror=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_dlobject_methods)>>2)]=((__str13)|0);
HEAP32[(((_dlobject_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 8));
HEAP32[(((_dlobject_methods)+(16))>>2)]=((__str14)|0);
HEAP32[(((_dlobject_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 10));
HEAP32[(((_dlobject_methods)+(32))>>2)]=((__str15)|0);
HEAP32[(((_dlobject_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 12));
HEAP32[((_dl_methods)>>2)]=((__str8)|0);
HEAP32[(((_dl_methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_Dltype)+(12))>>2)]=((__str12)|0);
HEAP32[(((_Dltype)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((_Dltype)+(32))>>2)]=((FUNCTION_TABLE_OFFSET + 4));
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_dl_open,0,_dl_getattr,0,_dl_dealloc,0,_dl_call,0,_dl_sym,0,_dl_close,0]);
// EMSCRIPTEN_START_FUNCS
function _initdl() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $m;
      var $d;
      var $x;
      var $1=HEAP32[((_Py_Py3kWarningFlag)>>2)];
      var $2=(($1)|(0))!=0;
      if ($2) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $4=HEAP32[((_PyExc_DeprecationWarning)>>2)];
      var $5=_PyErr_WarnEx($4, ((__str)|0), 2);
      var $8 = $5;label = 4; break;
    case 3: 
      var $8 = 0;label = 4; break;
    case 4: 
      var $8;
      var $9=(($8)|(0)) < 0;
      if ($9) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 9; break;
    case 6: 
      HEAP32[((((_Dltype+4)|0))>>2)]=_PyType_Type;
      var $12=_Py_InitModule4(((__str1)|0), ((_dl_methods)|0), 0, 0, 1013);
      $m=$12;
      var $13=$m;
      var $14=(($13)|(0))==0;
      if ($14) { label = 7; break; } else { label = 8; break; }
    case 7: 
      label = 9; break;
    case 8: 
      var $17=$m;
      var $18=_PyModule_GetDict($17);
      $d=$18;
      var $19=_PyErr_NewException(((__str2)|0), 0, 0);
      $x=$19;
      HEAP32[((_Dlerror)>>2)]=$19;
      var $20=$d;
      var $21=$x;
      var $22=_PyDict_SetItemString($20, ((__str3)|0), $21);
      var $23=_PyInt_FromLong(1);
      $x=$23;
      var $24=$d;
      var $25=$x;
      var $26=_PyDict_SetItemString($24, ((__str4)|0), $25);
      var $27=$d;
      _insint($27, ((__str5)|0), 2);
      var $28=$d;
      _insint($28, ((__str6)|0), 4);
      var $29=$d;
      _insint($29, ((__str7)|0), 8);
      label = 9; break;
    case 9: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
Module["_initdl"] = _initdl;
function _insint($d, $name, $value) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $v;
      $1=$d;
      $2=$name;
      $3=$value;
      var $4=$3;
      var $5=_PyInt_FromLong($4);
      $v=$5;
      var $6=$v;
      var $7=(($6)|(0))!=0;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=$1;
      var $10=$2;
      var $11=$v;
      var $12=_PyDict_SetItemString($9, $10, $11);
      var $13=(($12)|(0))!=0;
      if ($13) { label = 3; break; } else { label = 4; break; }
    case 3: 
      _PyErr_Clear();
      label = 4; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $17=$v;
      var $18=(($17)|(0))==0;
      if ($18) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 13; break;
    case 7: 
      label = 8; break;
    case 8: 
      var $22=$v;
      var $23=(($22)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=((($24)-(1))|0);
      HEAP32[(($23)>>2)]=$25;
      var $26=(($25)|(0))!=0;
      if ($26) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 11; break;
    case 10: 
      var $29=$v;
      var $30=(($29+4)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=(($31+24)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=$v;
      FUNCTION_TABLE[$33]($34);
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _dl_open($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $name=__stackBase__;
      var $mode=(__stackBase__)+(4);
      var $handle;
      var $errmsg;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str9)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$name,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      HEAP32[(($mode)>>2)]=1;
      label = 6; break;
    case 3: 
      _PyErr_Clear();
      var $9=$3;
      var $10=_PyArg_ParseTuple($9, ((__str10)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$name,HEAP32[(((tempInt)+(4))>>2)]=$mode,tempInt));
      var $11=(($10)|(0))!=0;
      if ($11) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 11; break;
    case 5: 
      label = 6; break;
    case 6: 
      var $15=HEAP32[(($name)>>2)];
      var $16=HEAP32[(($mode)>>2)];
      var $17=_dlopen($15, $16);
      var $18=$17;
      $handle=$18;
      var $19=$handle;
      var $20=(($19)|(0))==0;
      if ($20) { label = 7; break; } else { label = 10; break; }
    case 7: 
      var $22=_dlerror();
      $errmsg=$22;
      var $23=$errmsg;
      var $24=(($23)|(0))!=0;
      if ($24) { label = 9; break; } else { label = 8; break; }
    case 8: 
      $errmsg=((__str11)|0);
      label = 9; break;
    case 9: 
      var $27=HEAP32[((_Dlerror)>>2)];
      var $28=$errmsg;
      _PyErr_SetString($27, $28);
      $1=0;
      label = 11; break;
    case 10: 
      var $30=$handle;
      var $31=_newdlobject($30);
      $1=$31;
      label = 11; break;
    case 11: 
      var $33=$1;
      STACKTOP = __stackBase__;
      return $33;
    default: assert(0, "bad label: " + label);
  }
}
function _newdlobject($handle) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $xp;
      $2=$handle;
      var $3=__PyObject_New(_Dltype);
      var $4=$3;
      $xp=$4;
      var $5=$xp;
      var $6=(($5)|(0))==0;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 4; break;
    case 3: 
      var $9=$2;
      var $10=$xp;
      var $11=(($10+8)|0);
      HEAP32[(($11)>>2)]=$9;
      var $12=$xp;
      var $13=$12;
      $1=$13;
      label = 4; break;
    case 4: 
      var $15=$1;
      return $15;
    default: assert(0, "bad label: " + label);
  }
}
function _dl_dealloc($xp) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      $1=$xp;
      var $2=$1;
      var $3=(($2+8)|0);
      var $4=HEAP32[(($3)>>2)];
      var $5=(($4)|(0))!=0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $7=$1;
      var $8=(($7+8)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=$9;
      var $11=_dlclose($10);
      label = 3; break;
    case 3: 
      var $13=$1;
      var $14=$13;
      _PyObject_Free($14);
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _dl_getattr($xp, $name) {
  var label = 0;
  var $1;
  var $2;
  $1=$xp;
  $2=$name;
  var $3=$1;
  var $4=$3;
  var $5=$2;
  var $6=_Py_FindMethod(((_dlobject_methods)|0), $4, $5);
  return $6;
}
function _dl_call($xp, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 40)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $name;
      var $func;
      var $alist=__stackBase__;
      var $res;
      var $i;
      var $n;
      var $v;
      $2=$xp;
      $3=$args;
      var $4=$3;
      var $5=_PyTuple_Size($4);
      $n=$5;
      var $6=$n;
      var $7=(($6)|(0)) < 1;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($9, ((__str17)|0));
      $1=0;
      label = 27; break;
    case 3: 
      var $11=$3;
      var $12=_PyTuple_GetItem($11, 0);
      $name=$12;
      var $13=$name;
      var $14=(($13+4)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=(($15+84)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=$17 & 134217728;
      var $19=(($18)|(0))!=0;
      if ($19) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $21=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($21, ((__str18)|0));
      $1=0;
      label = 27; break;
    case 5: 
      var $23=$2;
      var $24=(($23+8)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=$25;
      var $27=$name;
      var $28=_PyString_AsString($27);
      var $29=_dlsym($26, $28);
      var $30=$29;
      $func=$30;
      var $31=$func;
      var $32=(($31)|(0))==0;
      if ($32) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $34=HEAP32[((_PyExc_ValueError)>>2)];
      var $35=_dlerror();
      _PyErr_SetString($34, $35);
      $1=0;
      label = 27; break;
    case 7: 
      var $37=$n;
      var $38=((($37)-(1))|0);
      var $39=(($38)|(0)) > 10;
      if ($39) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $41=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($41, ((__str19)|0));
      $1=0;
      label = 27; break;
    case 9: 
      $i=1;
      label = 10; break;
    case 10: 
      var $44=$i;
      var $45=$n;
      var $46=(($44)|(0)) < (($45)|(0));
      if ($46) { label = 11; break; } else { label = 22; break; }
    case 11: 
      var $48=$3;
      var $49=$i;
      var $50=_PyTuple_GetItem($48, $49);
      $v=$50;
      var $51=$v;
      var $52=(($51+4)|0);
      var $53=HEAP32[(($52)>>2)];
      var $54=(($53+84)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=$55 & 8388608;
      var $57=(($56)|(0))!=0;
      if ($57) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $59=$v;
      var $60=_PyInt_AsLong($59);
      var $61=$i;
      var $62=((($61)-(1))|0);
      var $63=(($alist+($62<<2))|0);
      HEAP32[(($63)>>2)]=$60;
      label = 20; break;
    case 13: 
      var $65=$v;
      var $66=(($65+4)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=(($67+84)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=$69 & 134217728;
      var $71=(($70)|(0))!=0;
      if ($71) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $73=$v;
      var $74=_PyString_AsString($73);
      var $75=$74;
      var $76=$i;
      var $77=((($76)-(1))|0);
      var $78=(($alist+($77<<2))|0);
      HEAP32[(($78)>>2)]=$75;
      label = 19; break;
    case 15: 
      var $80=$v;
      var $81=(($80)|(0))==((__Py_NoneStruct)|(0));
      if ($81) { label = 16; break; } else { label = 17; break; }
    case 16: 
      var $83=$i;
      var $84=((($83)-(1))|0);
      var $85=(($alist+($84<<2))|0);
      HEAP32[(($85)>>2)]=0;
      label = 18; break;
    case 17: 
      var $87=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($87, ((__str20)|0));
      $1=0;
      label = 27; break;
    case 18: 
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $92=$i;
      var $93=((($92)+(1))|0);
      $i=$93;
      label = 10; break;
    case 22: 
      label = 23; break;
    case 23: 
      var $96=$i;
      var $97=(($96)|(0)) <= 10;
      if ($97) { label = 24; break; } else { label = 26; break; }
    case 24: 
      var $99=$i;
      var $100=((($99)-(1))|0);
      var $101=(($alist+($100<<2))|0);
      HEAP32[(($101)>>2)]=0;
      label = 25; break;
    case 25: 
      var $103=$i;
      var $104=((($103)+(1))|0);
      $i=$104;
      label = 23; break;
    case 26: 
      var $106=$func;
      var $107=(($alist)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=(($alist+4)|0);
      var $110=HEAP32[(($109)>>2)];
      var $111=(($alist+8)|0);
      var $112=HEAP32[(($111)>>2)];
      var $113=(($alist+12)|0);
      var $114=HEAP32[(($113)>>2)];
      var $115=(($alist+16)|0);
      var $116=HEAP32[(($115)>>2)];
      var $117=(($alist+20)|0);
      var $118=HEAP32[(($117)>>2)];
      var $119=(($alist+24)|0);
      var $120=HEAP32[(($119)>>2)];
      var $121=(($alist+28)|0);
      var $122=HEAP32[(($121)>>2)];
      var $123=(($alist+32)|0);
      var $124=HEAP32[(($123)>>2)];
      var $125=(($alist+36)|0);
      var $126=HEAP32[(($125)>>2)];
      var $127=FUNCTION_TABLE[$106]($108, $110, $112, $114, $116, $118, $120, $122, $124, $126);
      $res=$127;
      var $128=$res;
      var $129=_PyInt_FromLong($128);
      $1=$129;
      label = 27; break;
    case 27: 
      var $131=$1;
      STACKTOP = __stackBase__;
      return $131;
    default: assert(0, "bad label: " + label);
  }
}
function _dl_sym($xp, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $name;
      var $func;
      $2=$xp;
      $3=$args;
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
      var $13=$12;
      var $14=(($13+20)|0);
      var $15=(($14)|0);
      $name=$15;
      label = 4; break;
    case 3: 
      var $17=HEAP32[((_PyExc_TypeError)>>2)];
      var $18=$3;
      var $19=(($18+4)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=(($20+12)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=_PyErr_Format($17, ((__str16)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$22,tempInt));
      $1=0;
      label = 7; break;
    case 4: 
      var $25=$2;
      var $26=(($25+8)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=$27;
      var $29=$name;
      var $30=_dlsym($28, $29);
      var $31=$30;
      $func=$31;
      var $32=$func;
      var $33=(($32)|(0))==0;
      if ($33) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $35=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $36=((($35)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$36;
      $1=__Py_NoneStruct;
      label = 7; break;
    case 6: 
      var $38=$func;
      var $39=$38;
      var $40=_PyInt_FromLong($39);
      $1=$40;
      label = 7; break;
    case 7: 
      var $42=$1;
      STACKTOP = __stackBase__;
      return $42;
    default: assert(0, "bad label: " + label);
  }
}
function _dl_close($xp) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      $1=$xp;
      var $2=$1;
      var $3=(($2+8)|0);
      var $4=HEAP32[(($3)>>2)];
      var $5=(($4)|(0))!=0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $7=$1;
      var $8=(($7+8)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=$9;
      var $11=_dlclose($10);
      var $12=$1;
      var $13=(($12+8)|0);
      HEAP32[(($13)>>2)]=0;
      label = 3; break;
    case 3: 
      var $15=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $16=((($15)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$16;
      return __Py_NoneStruct;
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
