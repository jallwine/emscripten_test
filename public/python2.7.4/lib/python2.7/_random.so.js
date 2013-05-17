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
var _random_methods;
var _random_doc;
var _module_doc;
var _genrand_int32_mag01;
var __str9;
var __str8;
var __str7;
var __str6;
var __str5;
var __str4;
var __str3;
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
var ___func___random_seed;
var _Random_Type;
_random_methods=allocate([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_random_doc=allocate([82,97,110,100,111,109,40,41,32,45,62,32,99,114,101,97,116,101,32,97,32,114,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,32,119,105,116,104,32,105,116,115,32,111,119,110,32,105,110,116,101,114,110,97,108,32,115,116,97,116,101,46,0,0,0], "i8", ALLOC_NORMAL);
_module_doc=allocate([77,111,100,117,108,101,32,105,109,112,108,101,109,101,110,116,115,32,116,104,101,32,77,101,114,115,101,110,110,101,32,84,119,105,115,116,101,114,32,114,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,46,0], "i8", ALLOC_NORMAL);
_genrand_int32_mag01=allocate([0,0,0,0,223,176,8,153], "i8", ALLOC_NORMAL);
__str9=allocate([115,101,101,100,40,91,110,93,41,32,45,62,32,78,111,110,101,46,32,32,68,101,102,97,117,108,116,115,32,116,111,32,99,117,114,114,101,110,116,32,116,105,109,101,46,0,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([114,97,110,100,111,109,40,41,32,45,62,32,120,32,105,110,32,116,104,101,32,105,110,116,101,114,118,97,108,32,91,48,44,32,49,41,46,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([114,97,110,100,111,109,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([107,101,121,117,115,101,100,32,60,32,107,101,121,109,97,120,0,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([46,46,47,77,111,100,117,108,101,115,47,95,114,97,110,100,111,109,109,111,100,117,108,101,46,99,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([115,101,101,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([82,97,110,100,111,109,40,41,0,0,0,0], "i8", ALLOC_NORMAL);
__str22=allocate([115,116,97,116,101,32,118,101,99,116,111,114,32,105,115,32,116,104,101,32,119,114,111,110,103,32,115,105,122,101,0,0], "i8", ALLOC_NORMAL);
__str21=allocate([115,116,97,116,101,32,118,101,99,116,111,114,32,109,117,115,116,32,98,101,32,97,32,116,117,112,108,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([106,117,109,112,97,104,101,97,100,32,114,101,113,117,105,114,101,115,32,97,110,32,105,110,116,101,103,101,114,44,32,110,111,116,32,39,37,115,39,0], "i8", ALLOC_NORMAL);
__str2=allocate([95,114,97,110,100,111,109,46,82,97,110,100,111,109,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([110,117,109,98,101,114,32,111,102,32,98,105,116,115,32,109,117,115,116,32,98,101,32,103,114,101,97,116,101,114,32,116,104,97,110,32,122,101,114,111,0,0,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([105,58,103,101,116,114,97,110,100,98,105,116,115,0,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([103,101,116,114,97,110,100,98,105,116,115,40,107,41,32,45,62,32,120,46,32,32,71,101,110,101,114,97,116,101,115,32,97,32,108,111,110,103,32,105,110,116,32,119,105,116,104,32,107,32,114,97,110,100,111,109,32,98,105,116,115,46,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([103,101,116,114,97,110,100,98,105,116,115,0], "i8", ALLOC_NORMAL);
__str15=allocate([106,117,109,112,97,104,101,97,100,40,105,110,116,41,32,45,62,32,78,111,110,101,46,32,32,67,114,101,97,116,101,32,110,101,119,32,115,116,97,116,101,32,102,114,111,109,32,101,120,105,115,116,105,110,103,32,115,116,97,116,101,32,97,110,100,32,105,110,116,101,103,101,114,46,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([106,117,109,112,97,104,101,97,100,0,0,0], "i8", ALLOC_NORMAL);
__str13=allocate([115,101,116,115,116,97,116,101,40,115,116,97,116,101,41,32,45,62,32,78,111,110,101,46,32,32,82,101,115,116,111,114,101,115,32,103,101,110,101,114,97,116,111,114,32,115,116,97,116,101,46,0], "i8", ALLOC_NORMAL);
__str12=allocate([115,101,116,115,116,97,116,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([103,101,116,115,116,97,116,101,40,41,32,45,62,32,116,117,112,108,101,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,99,117,114,114,101,110,116,32,115,116,97,116,101,46,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([103,101,116,115,116,97,116,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([82,97,110,100,111,109,0,0], "i8", ALLOC_NORMAL);
__str=allocate([95,114,97,110,100,111,109,0], "i8", ALLOC_NORMAL);
___func___random_seed=allocate([114,97,110,100,111,109,95,115,101,101,100,0], "i8", ALLOC_NORMAL);
_Random_Type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,204,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,5,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_random_methods)>>2)]=((__str7)|0);
HEAP32[(((_random_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((_random_methods)+(12))>>2)]=((__str8)|0);
HEAP32[(((_random_methods)+(16))>>2)]=((__str4)|0);
HEAP32[(((_random_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 14));
HEAP32[(((_random_methods)+(28))>>2)]=((__str9)|0);
HEAP32[(((_random_methods)+(32))>>2)]=((__str10)|0);
HEAP32[(((_random_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 8));
HEAP32[(((_random_methods)+(44))>>2)]=((__str11)|0);
HEAP32[(((_random_methods)+(48))>>2)]=((__str12)|0);
HEAP32[(((_random_methods)+(52))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_random_methods)+(60))>>2)]=((__str13)|0);
HEAP32[(((_random_methods)+(64))>>2)]=((__str14)|0);
HEAP32[(((_random_methods)+(68))>>2)]=((FUNCTION_TABLE_OFFSET + 12));
HEAP32[(((_random_methods)+(76))>>2)]=((__str15)|0);
HEAP32[(((_random_methods)+(80))>>2)]=((__str16)|0);
HEAP32[(((_random_methods)+(84))>>2)]=((FUNCTION_TABLE_OFFSET + 18));
HEAP32[(((_random_methods)+(92))>>2)]=((__str17)|0);
HEAP32[(((_Random_Type)+(12))>>2)]=((__str2)|0);
HEAP32[(((_Random_Type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((_Random_Type)+(88))>>2)]=((_random_doc)|0);
HEAP32[(((_Random_Type)+(116))>>2)]=((_random_methods)|0);
HEAP32[(((_Random_Type)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((_Random_Type)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_random_setstate,0,_PyObject_GenericGetAttr,0,_random_random,0,_random_getstate,0,_PyObject_Free,0,_random_jumpahead,0,_random_seed,0,_random_new,0,_random_getrandbits,0]);
// EMSCRIPTEN_START_FUNCS
function _init_genrand($self, $s) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $mti;
      var $mt;
      $1=$self;
      $2=$s;
      var $3=$1;
      var $4=(($3+8)|0);
      var $5=(($4)|0);
      $mt=$5;
      var $6=$2;
      var $7=$mt;
      var $8=(($7)|0);
      HEAP32[(($8)>>2)]=$6;
      $mti=1;
      label = 2; break;
    case 2: 
      var $10=$mti;
      var $11=(($10)|(0)) < 624;
      if ($11) { label = 3; break; } else { label = 5; break; }
    case 3: 
      var $13=$mti;
      var $14=((($13)-(1))|0);
      var $15=$mt;
      var $16=(($15+($14<<2))|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=$mti;
      var $19=((($18)-(1))|0);
      var $20=$mt;
      var $21=(($20+($19<<2))|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=$22 >>> 30;
      var $24=$17 ^ $23;
      var $25=Math.imul($24,1812433253);
      var $26=$mti;
      var $27=((($25)+($26))|0);
      var $28=$mti;
      var $29=$mt;
      var $30=(($29+($28<<2))|0);
      HEAP32[(($30)>>2)]=$27;
      var $31=$mti;
      var $32=$mt;
      var $33=(($32+($31<<2))|0);
      var $34=HEAP32[(($33)>>2)];
      HEAP32[(($33)>>2)]=$34;
      label = 4; break;
    case 4: 
      var $36=$mti;
      var $37=((($36)+(1))|0);
      $mti=$37;
      label = 2; break;
    case 5: 
      var $39=$mti;
      var $40=$1;
      var $41=(($40+2504)|0);
      HEAP32[(($41)>>2)]=$39;
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _init_random() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $m;
      var $1=_PyType_Ready(_Random_Type);
      var $2=(($1)|(0)) < 0;
      if ($2) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 6; break;
    case 3: 
      var $5=_Py_InitModule4(((__str)|0), 0, ((_module_doc)|0), 0, 1013);
      $m=$5;
      var $6=$m;
      var $7=(($6)|(0))==0;
      if ($7) { label = 4; break; } else { label = 5; break; }
    case 4: 
      label = 6; break;
    case 5: 
      var $10=HEAP32[((((_Random_Type)|0))>>2)];
      var $11=((($10)+(1))|0);
      HEAP32[((((_Random_Type)|0))>>2)]=$11;
      var $12=$m;
      var $13=_PyModule_AddObject($12, ((__str1)|0), _Random_Type);
      label = 6; break;
    case 6: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
Module["_init_random"] = _init_random;
function _random_new($type, $args, $kwds) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $self;
      var $tmp;
      $2=$type;
      $3=$args;
      $4=$kwds;
      var $5=$2;
      var $6=(($5)|(0))==((_Random_Type)|(0));
      if ($6) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $8=$4;
      var $9=__PyArg_NoKeywords(((__str3)|0), $8);
      var $10=(($9)|(0))!=0;
      if ($10) { label = 4; break; } else { label = 3; break; }
    case 3: 
      $1=0;
      label = 19; break;
    case 4: 
      var $13=$2;
      var $14=(($13+152)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=$2;
      var $17=FUNCTION_TABLE[$15]($16, 0);
      var $18=$17;
      $self=$18;
      var $19=$self;
      var $20=(($19)|(0))==0;
      if ($20) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=0;
      label = 19; break;
    case 6: 
      var $23=$self;
      var $24=$3;
      var $25=_random_seed($23, $24);
      $tmp=$25;
      var $26=$tmp;
      var $27=(($26)|(0))==0;
      if ($27) { label = 7; break; } else { label = 13; break; }
    case 7: 
      label = 8; break;
    case 8: 
      var $30=$self;
      var $31=$30;
      var $32=(($31)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=((($33)-(1))|0);
      HEAP32[(($32)>>2)]=$34;
      var $35=(($34)|(0))!=0;
      if ($35) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 11; break;
    case 10: 
      var $38=$self;
      var $39=$38;
      var $40=(($39+4)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=(($41+24)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=$self;
      var $45=$44;
      FUNCTION_TABLE[$43]($45);
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      $1=0;
      label = 19; break;
    case 13: 
      label = 14; break;
    case 14: 
      var $50=$tmp;
      var $51=(($50)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=((($52)-(1))|0);
      HEAP32[(($51)>>2)]=$53;
      var $54=(($53)|(0))!=0;
      if ($54) { label = 15; break; } else { label = 16; break; }
    case 15: 
      label = 17; break;
    case 16: 
      var $57=$tmp;
      var $58=(($57+4)|0);
      var $59=HEAP32[(($58)>>2)];
      var $60=(($59+24)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=$tmp;
      FUNCTION_TABLE[$61]($62);
      label = 17; break;
    case 17: 
      label = 18; break;
    case 18: 
      var $65=$self;
      var $66=$65;
      $1=$66;
      label = 19; break;
    case 19: 
      var $68=$1;
      return $68;
    default: assert(0, "bad label: " + label);
  }
}
function _init_by_array($self, $init_key, $key_length) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $i;
      var $j;
      var $k;
      var $mt;
      $1=$self;
      $2=$init_key;
      $3=$key_length;
      var $4=$1;
      var $5=(($4+8)|0);
      var $6=(($5)|0);
      $mt=$6;
      var $7=$1;
      _init_genrand($7, 19650218);
      $i=1;
      $j=0;
      var $8=$3;
      var $9=624 > (($8)>>>(0));
      if ($9) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $14 = 624;label = 4; break;
    case 3: 
      var $12=$3;
      var $14 = $12;label = 4; break;
    case 4: 
      var $14;
      $k=$14;
      label = 5; break;
    case 5: 
      var $16=$k;
      var $17=(($16)|(0))!=0;
      if ($17) { label = 6; break; } else { label = 12; break; }
    case 6: 
      var $19=$i;
      var $20=$mt;
      var $21=(($20+($19<<2))|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=$i;
      var $24=((($23)-(1))|0);
      var $25=$mt;
      var $26=(($25+($24<<2))|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=$i;
      var $29=((($28)-(1))|0);
      var $30=$mt;
      var $31=(($30+($29<<2))|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=$32 >>> 30;
      var $34=$27 ^ $33;
      var $35=Math.imul($34,1664525);
      var $36=$22 ^ $35;
      var $37=$j;
      var $38=$2;
      var $39=(($38+($37<<2))|0);
      var $40=HEAP32[(($39)>>2)];
      var $41=((($36)+($40))|0);
      var $42=$j;
      var $43=((($41)+($42))|0);
      var $44=$i;
      var $45=$mt;
      var $46=(($45+($44<<2))|0);
      HEAP32[(($46)>>2)]=$43;
      var $47=$i;
      var $48=$mt;
      var $49=(($48+($47<<2))|0);
      var $50=HEAP32[(($49)>>2)];
      HEAP32[(($49)>>2)]=$50;
      var $51=$i;
      var $52=((($51)+(1))|0);
      $i=$52;
      var $53=$j;
      var $54=((($53)+(1))|0);
      $j=$54;
      var $55=$i;
      var $56=(($55)>>>(0)) >= 624;
      if ($56) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $58=$mt;
      var $59=(($58+2492)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=$mt;
      var $62=(($61)|0);
      HEAP32[(($62)>>2)]=$60;
      $i=1;
      label = 8; break;
    case 8: 
      var $64=$j;
      var $65=$3;
      var $66=(($64)>>>(0)) >= (($65)>>>(0));
      if ($66) { label = 9; break; } else { label = 10; break; }
    case 9: 
      $j=0;
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $70=$k;
      var $71=((($70)-(1))|0);
      $k=$71;
      label = 5; break;
    case 12: 
      $k=623;
      label = 13; break;
    case 13: 
      var $74=$k;
      var $75=(($74)|(0))!=0;
      if ($75) { label = 14; break; } else { label = 18; break; }
    case 14: 
      var $77=$i;
      var $78=$mt;
      var $79=(($78+($77<<2))|0);
      var $80=HEAP32[(($79)>>2)];
      var $81=$i;
      var $82=((($81)-(1))|0);
      var $83=$mt;
      var $84=(($83+($82<<2))|0);
      var $85=HEAP32[(($84)>>2)];
      var $86=$i;
      var $87=((($86)-(1))|0);
      var $88=$mt;
      var $89=(($88+($87<<2))|0);
      var $90=HEAP32[(($89)>>2)];
      var $91=$90 >>> 30;
      var $92=$85 ^ $91;
      var $93=Math.imul($92,1566083941);
      var $94=$80 ^ $93;
      var $95=$i;
      var $96=((($94)-($95))|0);
      var $97=$i;
      var $98=$mt;
      var $99=(($98+($97<<2))|0);
      HEAP32[(($99)>>2)]=$96;
      var $100=$i;
      var $101=$mt;
      var $102=(($101+($100<<2))|0);
      var $103=HEAP32[(($102)>>2)];
      HEAP32[(($102)>>2)]=$103;
      var $104=$i;
      var $105=((($104)+(1))|0);
      $i=$105;
      var $106=$i;
      var $107=(($106)>>>(0)) >= 624;
      if ($107) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $109=$mt;
      var $110=(($109+2492)|0);
      var $111=HEAP32[(($110)>>2)];
      var $112=$mt;
      var $113=(($112)|0);
      HEAP32[(($113)>>2)]=$111;
      $i=1;
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $116=$k;
      var $117=((($116)-(1))|0);
      $k=$117;
      label = 13; break;
    case 18: 
      var $119=$mt;
      var $120=(($119)|0);
      HEAP32[(($120)>>2)]=-2147483648;
      var $121=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $122=((($121)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$122;
      return __Py_NoneStruct;
    default: assert(0, "bad label: " + label);
  }
}
function _random_random($self) {
  var label = 0;
  var $1;
  var $a;
  var $b;
  $1=$self;
  var $2=$1;
  var $3=_genrand_int32($2);
  var $4=$3 >>> 5;
  $a=$4;
  var $5=$1;
  var $6=_genrand_int32($5);
  var $7=$6 >>> 6;
  $b=$7;
  var $8=$a;
  var $9=(($8)>>>(0));
  var $10=($9)*(67108864);
  var $11=$b;
  var $12=(($11)>>>(0));
  var $13=($10)+($12);
  var $14=($13)*(1.1102230246251565e-16);
  var $15=_PyFloat_FromDouble($14);
  return $15;
}
function _random_seed($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $result;
      var $masklower;
      var $thirtytwo;
      var $n;
      var $key;
      var $keymax;
      var $keyused;
      var $err;
      var $arg=__stackBase__;
      var $now=(__stackBase__)+(4);
      var $hash;
      var $newn;
      var $pychunk;
      var $chunk;
      var $bigger;
      $2=$self;
      $3=$args;
      $result=0;
      $masklower=0;
      $thirtytwo=0;
      $n=0;
      $key=0;
      HEAP32[(($arg)>>2)]=0;
      var $4=$3;
      var $5=_PyArg_UnpackTuple($4, ((__str4)|0), 0, 1, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$arg,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 85; break;
    case 3: 
      var $9=HEAP32[(($arg)>>2)];
      var $10=(($9)|(0))==0;
      if ($10) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $12=HEAP32[(($arg)>>2)];
      var $13=(($12)|(0))==((__Py_NoneStruct)|(0));
      if ($13) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $15=_time($now);
      var $16=$2;
      var $17=HEAP32[(($now)>>2)];
      _init_genrand($16, $17);
      var $18=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $19=((($18)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$19;
      $1=__Py_NoneStruct;
      label = 85; break;
    case 6: 
      var $21=HEAP32[(($arg)>>2)];
      var $22=(($21+4)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23+84)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=$25 & 8388608;
      var $27=(($26)|(0))!=0;
      if ($27) { label = 8; break; } else { label = 7; break; }
    case 7: 
      var $29=HEAP32[(($arg)>>2)];
      var $30=(($29+4)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=(($31+84)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=$33 & 16777216;
      var $35=(($34)|(0))!=0;
      if ($35) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $37=HEAP32[(($arg)>>2)];
      var $38=_PyNumber_Absolute($37);
      $n=$38;
      label = 12; break;
    case 9: 
      var $40=HEAP32[(($arg)>>2)];
      var $41=_PyObject_Hash($40);
      $hash=$41;
      var $42=$hash;
      var $43=(($42)|(0))==-1;
      if ($43) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 54; break;
    case 11: 
      var $46=$hash;
      var $47=_PyLong_FromUnsignedLong($46);
      $n=$47;
      label = 12; break;
    case 12: 
      var $49=$n;
      var $50=(($49)|(0))==0;
      if ($50) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 54; break;
    case 14: 
      $keymax=8;
      $keyused=0;
      var $53=$keymax;
      var $54=($53<<2);
      var $55=_PyMem_Malloc($54);
      var $56=$55;
      $key=$56;
      var $57=$key;
      var $58=(($57)|(0))==0;
      if ($58) { label = 15; break; } else { label = 16; break; }
    case 15: 
      label = 54; break;
    case 16: 
      var $61=_PyLong_FromUnsignedLong(-1);
      $masklower=$61;
      var $62=$masklower;
      var $63=(($62)|(0))==0;
      if ($63) { label = 17; break; } else { label = 18; break; }
    case 17: 
      label = 54; break;
    case 18: 
      var $66=_PyInt_FromLong(32);
      $thirtytwo=$66;
      var $67=$thirtytwo;
      var $68=(($67)|(0))==0;
      if ($68) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 54; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $72=$n;
      var $73=_PyObject_IsTrue($72);
      $err=$73;
      var $74=(($73)|(0))!=0;
      if ($74) { label = 22; break; } else { label = 51; break; }
    case 22: 
      var $76=$err;
      var $77=(($76)|(0))==-1;
      if ($77) { label = 23; break; } else { label = 24; break; }
    case 23: 
      label = 54; break;
    case 24: 
      var $80=$n;
      var $81=$masklower;
      var $82=_PyNumber_And($80, $81);
      $pychunk=$82;
      var $83=$pychunk;
      var $84=(($83)|(0))==0;
      if ($84) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 54; break;
    case 26: 
      var $87=$pychunk;
      var $88=_PyLong_AsUnsignedLong($87);
      $chunk=$88;
      label = 27; break;
    case 27: 
      var $90=$pychunk;
      var $91=(($90)|0);
      var $92=HEAP32[(($91)>>2)];
      var $93=((($92)-(1))|0);
      HEAP32[(($91)>>2)]=$93;
      var $94=(($93)|(0))!=0;
      if ($94) { label = 28; break; } else { label = 29; break; }
    case 28: 
      label = 30; break;
    case 29: 
      var $97=$pychunk;
      var $98=(($97+4)|0);
      var $99=HEAP32[(($98)>>2)];
      var $100=(($99+24)|0);
      var $101=HEAP32[(($100)>>2)];
      var $102=$pychunk;
      FUNCTION_TABLE[$101]($102);
      label = 30; break;
    case 30: 
      label = 31; break;
    case 31: 
      var $105=$chunk;
      var $106=(($105)|(0))==-1;
      if ($106) { label = 32; break; } else { label = 34; break; }
    case 32: 
      var $108=_PyErr_Occurred();
      var $109=(($108)|(0))!=0;
      if ($109) { label = 33; break; } else { label = 34; break; }
    case 33: 
      label = 54; break;
    case 34: 
      var $112=$n;
      var $113=$thirtytwo;
      var $114=_PyNumber_Rshift($112, $113);
      $newn=$114;
      var $115=$newn;
      var $116=(($115)|(0))==0;
      if ($116) { label = 35; break; } else { label = 36; break; }
    case 35: 
      label = 54; break;
    case 36: 
      label = 37; break;
    case 37: 
      var $120=$n;
      var $121=(($120)|0);
      var $122=HEAP32[(($121)>>2)];
      var $123=((($122)-(1))|0);
      HEAP32[(($121)>>2)]=$123;
      var $124=(($123)|(0))!=0;
      if ($124) { label = 38; break; } else { label = 39; break; }
    case 38: 
      label = 40; break;
    case 39: 
      var $127=$n;
      var $128=(($127+4)|0);
      var $129=HEAP32[(($128)>>2)];
      var $130=(($129+24)|0);
      var $131=HEAP32[(($130)>>2)];
      var $132=$n;
      FUNCTION_TABLE[$131]($132);
      label = 40; break;
    case 40: 
      label = 41; break;
    case 41: 
      var $135=$newn;
      $n=$135;
      var $136=$keyused;
      var $137=$keymax;
      var $138=(($136)>>>(0)) >= (($137)>>>(0));
      if ($138) { label = 42; break; } else { label = 47; break; }
    case 42: 
      var $140=$keymax;
      var $141=$140 << 1;
      $bigger=$141;
      var $142=$bigger;
      var $143=$142 >>> 1;
      var $144=$keymax;
      var $145=(($143)|(0))!=(($144)|(0));
      if ($145) { label = 43; break; } else { label = 44; break; }
    case 43: 
      var $147=_PyErr_NoMemory();
      label = 54; break;
    case 44: 
      var $149=$key;
      var $150=$149;
      var $151=$bigger;
      var $152=($151<<2);
      var $153=_PyMem_Realloc($150, $152);
      var $154=$153;
      $key=$154;
      var $155=$key;
      var $156=(($155)|(0))==0;
      if ($156) { label = 45; break; } else { label = 46; break; }
    case 45: 
      label = 54; break;
    case 46: 
      var $159=$bigger;
      $keymax=$159;
      label = 47; break;
    case 47: 
      var $161=$keyused;
      var $162=$keymax;
      var $163=(($161)>>>(0)) < (($162)>>>(0));
      if ($163) { label = 48; break; } else { label = 49; break; }
    case 48: 
      label = 50; break;
    case 49: 
      ___assert_func(((__str5)|0), 296, ((___func___random_seed)|0), ((__str6)|0));
      throw "Reached an unreachable!";
      label = 50; break;
    case 50: 
      var $168=$chunk;
      var $169=$keyused;
      var $170=((($169)+(1))|0);
      $keyused=$170;
      var $171=$key;
      var $172=(($171+($169<<2))|0);
      HEAP32[(($172)>>2)]=$168;
      label = 21; break;
    case 51: 
      var $174=$keyused;
      var $175=(($174)|(0))==0;
      if ($175) { label = 52; break; } else { label = 53; break; }
    case 52: 
      var $177=$keyused;
      var $178=((($177)+(1))|0);
      $keyused=$178;
      var $179=$key;
      var $180=(($179+($177<<2))|0);
      HEAP32[(($180)>>2)]=0;
      label = 53; break;
    case 53: 
      var $182=$2;
      var $183=$key;
      var $184=$keyused;
      var $185=_init_by_array($182, $183, $184);
      $result=$185;
      label = 54; break;
    case 54: 
      label = 55; break;
    case 55: 
      var $188=$masklower;
      var $189=(($188)|(0))==0;
      if ($189) { label = 56; break; } else { label = 57; break; }
    case 56: 
      label = 63; break;
    case 57: 
      label = 58; break;
    case 58: 
      var $193=$masklower;
      var $194=(($193)|0);
      var $195=HEAP32[(($194)>>2)];
      var $196=((($195)-(1))|0);
      HEAP32[(($194)>>2)]=$196;
      var $197=(($196)|(0))!=0;
      if ($197) { label = 59; break; } else { label = 60; break; }
    case 59: 
      label = 61; break;
    case 60: 
      var $200=$masklower;
      var $201=(($200+4)|0);
      var $202=HEAP32[(($201)>>2)];
      var $203=(($202+24)|0);
      var $204=HEAP32[(($203)>>2)];
      var $205=$masklower;
      FUNCTION_TABLE[$204]($205);
      label = 61; break;
    case 61: 
      label = 62; break;
    case 62: 
      label = 63; break;
    case 63: 
      label = 64; break;
    case 64: 
      label = 65; break;
    case 65: 
      var $211=$thirtytwo;
      var $212=(($211)|(0))==0;
      if ($212) { label = 66; break; } else { label = 67; break; }
    case 66: 
      label = 73; break;
    case 67: 
      label = 68; break;
    case 68: 
      var $216=$thirtytwo;
      var $217=(($216)|0);
      var $218=HEAP32[(($217)>>2)];
      var $219=((($218)-(1))|0);
      HEAP32[(($217)>>2)]=$219;
      var $220=(($219)|(0))!=0;
      if ($220) { label = 69; break; } else { label = 70; break; }
    case 69: 
      label = 71; break;
    case 70: 
      var $223=$thirtytwo;
      var $224=(($223+4)|0);
      var $225=HEAP32[(($224)>>2)];
      var $226=(($225+24)|0);
      var $227=HEAP32[(($226)>>2)];
      var $228=$thirtytwo;
      FUNCTION_TABLE[$227]($228);
      label = 71; break;
    case 71: 
      label = 72; break;
    case 72: 
      label = 73; break;
    case 73: 
      label = 74; break;
    case 74: 
      label = 75; break;
    case 75: 
      var $234=$n;
      var $235=(($234)|(0))==0;
      if ($235) { label = 76; break; } else { label = 77; break; }
    case 76: 
      label = 83; break;
    case 77: 
      label = 78; break;
    case 78: 
      var $239=$n;
      var $240=(($239)|0);
      var $241=HEAP32[(($240)>>2)];
      var $242=((($241)-(1))|0);
      HEAP32[(($240)>>2)]=$242;
      var $243=(($242)|(0))!=0;
      if ($243) { label = 79; break; } else { label = 80; break; }
    case 79: 
      label = 81; break;
    case 80: 
      var $246=$n;
      var $247=(($246+4)|0);
      var $248=HEAP32[(($247)>>2)];
      var $249=(($248+24)|0);
      var $250=HEAP32[(($249)>>2)];
      var $251=$n;
      FUNCTION_TABLE[$250]($251);
      label = 81; break;
    case 81: 
      label = 82; break;
    case 82: 
      label = 83; break;
    case 83: 
      label = 84; break;
    case 84: 
      var $256=$key;
      var $257=$256;
      _PyMem_Free($257);
      var $258=$result;
      $1=$258;
      label = 85; break;
    case 85: 
      var $260=$1;
      STACKTOP = __stackBase__;
      return $260;
    default: assert(0, "bad label: " + label);
  }
}
function _genrand_int32($self) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $y;
      var $mt;
      var $kk;
      $1=$self;
      var $2=$1;
      var $3=(($2+8)|0);
      var $4=(($3)|0);
      $mt=$4;
      var $5=$1;
      var $6=(($5+2504)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0)) >= 624;
      if ($8) { label = 2; break; } else { label = 11; break; }
    case 2: 
      $kk=0;
      label = 3; break;
    case 3: 
      var $11=$kk;
      var $12=(($11)|(0)) < 227;
      if ($12) { label = 4; break; } else { label = 6; break; }
    case 4: 
      var $14=$kk;
      var $15=$mt;
      var $16=(($15+($14<<2))|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=$17 & -2147483648;
      var $19=$kk;
      var $20=((($19)+(1))|0);
      var $21=$mt;
      var $22=(($21+($20<<2))|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=$23 & 2147483647;
      var $25=$18 | $24;
      $y=$25;
      var $26=$kk;
      var $27=((($26)+(397))|0);
      var $28=$mt;
      var $29=(($28+($27<<2))|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$y;
      var $32=$31 >>> 1;
      var $33=$30 ^ $32;
      var $34=$y;
      var $35=$34 & 1;
      var $36=((_genrand_int32_mag01+($35<<2))|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=$33 ^ $37;
      var $39=$kk;
      var $40=$mt;
      var $41=(($40+($39<<2))|0);
      HEAP32[(($41)>>2)]=$38;
      label = 5; break;
    case 5: 
      var $43=$kk;
      var $44=((($43)+(1))|0);
      $kk=$44;
      label = 3; break;
    case 6: 
      label = 7; break;
    case 7: 
      var $47=$kk;
      var $48=(($47)|(0)) < 623;
      if ($48) { label = 8; break; } else { label = 10; break; }
    case 8: 
      var $50=$kk;
      var $51=$mt;
      var $52=(($51+($50<<2))|0);
      var $53=HEAP32[(($52)>>2)];
      var $54=$53 & -2147483648;
      var $55=$kk;
      var $56=((($55)+(1))|0);
      var $57=$mt;
      var $58=(($57+($56<<2))|0);
      var $59=HEAP32[(($58)>>2)];
      var $60=$59 & 2147483647;
      var $61=$54 | $60;
      $y=$61;
      var $62=$kk;
      var $63=((($62)-(227))|0);
      var $64=$mt;
      var $65=(($64+($63<<2))|0);
      var $66=HEAP32[(($65)>>2)];
      var $67=$y;
      var $68=$67 >>> 1;
      var $69=$66 ^ $68;
      var $70=$y;
      var $71=$70 & 1;
      var $72=((_genrand_int32_mag01+($71<<2))|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=$69 ^ $73;
      var $75=$kk;
      var $76=$mt;
      var $77=(($76+($75<<2))|0);
      HEAP32[(($77)>>2)]=$74;
      label = 9; break;
    case 9: 
      var $79=$kk;
      var $80=((($79)+(1))|0);
      $kk=$80;
      label = 7; break;
    case 10: 
      var $82=$mt;
      var $83=(($82+2492)|0);
      var $84=HEAP32[(($83)>>2)];
      var $85=$84 & -2147483648;
      var $86=$mt;
      var $87=(($86)|0);
      var $88=HEAP32[(($87)>>2)];
      var $89=$88 & 2147483647;
      var $90=$85 | $89;
      $y=$90;
      var $91=$mt;
      var $92=(($91+1584)|0);
      var $93=HEAP32[(($92)>>2)];
      var $94=$y;
      var $95=$94 >>> 1;
      var $96=$93 ^ $95;
      var $97=$y;
      var $98=$97 & 1;
      var $99=((_genrand_int32_mag01+($98<<2))|0);
      var $100=HEAP32[(($99)>>2)];
      var $101=$96 ^ $100;
      var $102=$mt;
      var $103=(($102+2492)|0);
      HEAP32[(($103)>>2)]=$101;
      var $104=$1;
      var $105=(($104+2504)|0);
      HEAP32[(($105)>>2)]=0;
      label = 11; break;
    case 11: 
      var $107=$1;
      var $108=(($107+2504)|0);
      var $109=HEAP32[(($108)>>2)];
      var $110=((($109)+(1))|0);
      HEAP32[(($108)>>2)]=$110;
      var $111=$mt;
      var $112=(($111+($109<<2))|0);
      var $113=HEAP32[(($112)>>2)];
      $y=$113;
      var $114=$y;
      var $115=$114 >>> 11;
      var $116=$y;
      var $117=$116 ^ $115;
      $y=$117;
      var $118=$y;
      var $119=$118 << 7;
      var $120=$119 & -1658038656;
      var $121=$y;
      var $122=$121 ^ $120;
      $y=$122;
      var $123=$y;
      var $124=$123 << 15;
      var $125=$124 & -272236544;
      var $126=$y;
      var $127=$126 ^ $125;
      $y=$127;
      var $128=$y;
      var $129=$128 >>> 18;
      var $130=$y;
      var $131=$130 ^ $129;
      $y=$131;
      var $132=$y;
      return $132;
    default: assert(0, "bad label: " + label);
  }
}
function _random_getstate($self) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $state;
      var $element;
      var $i;
      $2=$self;
      var $3=_PyTuple_New(625);
      $state=$3;
      var $4=$state;
      var $5=(($4)|(0))==0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 18; break;
    case 3: 
      $i=0;
      label = 4; break;
    case 4: 
      var $9=$i;
      var $10=(($9)|(0)) < 624;
      if ($10) { label = 5; break; } else { label = 9; break; }
    case 5: 
      var $12=$i;
      var $13=$2;
      var $14=(($13+8)|0);
      var $15=(($14+($12<<2))|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=_PyLong_FromUnsignedLong($16);
      $element=$17;
      var $18=$element;
      var $19=(($18)|(0))==0;
      if ($19) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 12; break;
    case 7: 
      var $22=$element;
      var $23=$i;
      var $24=$state;
      var $25=$24;
      var $26=(($25+12)|0);
      var $27=(($26+($23<<2))|0);
      HEAP32[(($27)>>2)]=$22;
      label = 8; break;
    case 8: 
      var $29=$i;
      var $30=((($29)+(1))|0);
      $i=$30;
      label = 4; break;
    case 9: 
      var $32=$2;
      var $33=(($32+2504)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=_PyLong_FromLong($34);
      $element=$35;
      var $36=$element;
      var $37=(($36)|(0))==0;
      if ($37) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 12; break;
    case 11: 
      var $40=$element;
      var $41=$i;
      var $42=$state;
      var $43=$42;
      var $44=(($43+12)|0);
      var $45=(($44+($41<<2))|0);
      HEAP32[(($45)>>2)]=$40;
      var $46=$state;
      $1=$46;
      label = 18; break;
    case 12: 
      label = 13; break;
    case 13: 
      var $49=$state;
      var $50=(($49)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=((($51)-(1))|0);
      HEAP32[(($50)>>2)]=$52;
      var $53=(($52)|(0))!=0;
      if ($53) { label = 14; break; } else { label = 15; break; }
    case 14: 
      label = 16; break;
    case 15: 
      var $56=$state;
      var $57=(($56+4)|0);
      var $58=HEAP32[(($57)>>2)];
      var $59=(($58+24)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=$state;
      FUNCTION_TABLE[$60]($61);
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      $1=0;
      label = 18; break;
    case 18: 
      var $65=$1;
      return $65;
    default: assert(0, "bad label: " + label);
  }
}
function _random_setstate($self, $state) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $i;
      var $element;
      var $index;
      $2=$self;
      $3=$state;
      var $4=$3;
      var $5=(($4+4)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6+84)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=$8 & 67108864;
      var $10=(($9)|(0))!=0;
      if ($10) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $12=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($12, ((__str21)|0));
      $1=0;
      label = 16; break;
    case 3: 
      var $14=$3;
      var $15=_PyTuple_Size($14);
      var $16=(($15)|(0))!=625;
      if ($16) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $18=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($18, ((__str22)|0));
      $1=0;
      label = 16; break;
    case 5: 
      $i=0;
      label = 6; break;
    case 6: 
      var $21=$i;
      var $22=(($21)|(0)) < 624;
      if ($22) { label = 7; break; } else { label = 12; break; }
    case 7: 
      var $24=$i;
      var $25=$3;
      var $26=$25;
      var $27=(($26+12)|0);
      var $28=(($27+($24<<2))|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=_PyLong_AsUnsignedLong($29);
      $element=$30;
      var $31=$element;
      var $32=(($31)|(0))==-1;
      if ($32) { label = 8; break; } else { label = 10; break; }
    case 8: 
      var $34=_PyErr_Occurred();
      var $35=(($34)|(0))!=0;
      if ($35) { label = 9; break; } else { label = 10; break; }
    case 9: 
      $1=0;
      label = 16; break;
    case 10: 
      var $38=$element;
      var $39=$i;
      var $40=$2;
      var $41=(($40+8)|0);
      var $42=(($41+($39<<2))|0);
      HEAP32[(($42)>>2)]=$38;
      label = 11; break;
    case 11: 
      var $44=$i;
      var $45=((($44)+(1))|0);
      $i=$45;
      label = 6; break;
    case 12: 
      var $47=$i;
      var $48=$3;
      var $49=$48;
      var $50=(($49+12)|0);
      var $51=(($50+($47<<2))|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=_PyLong_AsLong($52);
      $index=$53;
      var $54=$index;
      var $55=(($54)|(0))==-1;
      if ($55) { label = 13; break; } else { label = 15; break; }
    case 13: 
      var $57=_PyErr_Occurred();
      var $58=(($57)|(0))!=0;
      if ($58) { label = 14; break; } else { label = 15; break; }
    case 14: 
      $1=0;
      label = 16; break;
    case 15: 
      var $61=$index;
      var $62=$2;
      var $63=(($62+2504)|0);
      HEAP32[(($63)>>2)]=$61;
      var $64=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $65=((($64)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$65;
      $1=__Py_NoneStruct;
      label = 16; break;
    case 16: 
      var $67=$1;
      return $67;
    default: assert(0, "bad label: " + label);
  }
}
function _random_jumpahead($self, $n) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $i;
      var $j;
      var $iobj;
      var $remobj;
      var $mt;
      var $tmp;
      var $nonzero;
      $2=$self;
      $3=$n;
      var $4=$3;
      var $5=(($4+4)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6+84)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=$8 & 8388608;
      var $10=(($9)|(0))!=0;
      if ($10) { label = 4; break; } else { label = 2; break; }
    case 2: 
      var $12=$3;
      var $13=(($12+4)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=(($14+84)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=$16 & 16777216;
      var $18=(($17)|(0))!=0;
      if ($18) { label = 4; break; } else { label = 3; break; }
    case 3: 
      var $20=HEAP32[((_PyExc_TypeError)>>2)];
      var $21=$3;
      var $22=(($21+4)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23+12)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=_PyErr_Format($20, ((__str20)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$25,tempInt));
      $1=0;
      label = 33; break;
    case 4: 
      var $28=$2;
      var $29=(($28+8)|0);
      var $30=(($29)|0);
      $mt=$30;
      $i=623;
      label = 5; break;
    case 5: 
      var $32=$i;
      var $33=(($32)|(0)) > 1;
      if ($33) { label = 6; break; } else { label = 25; break; }
    case 6: 
      var $35=$i;
      var $36=_PyInt_FromLong($35);
      $iobj=$36;
      var $37=$iobj;
      var $38=(($37)|(0))==0;
      if ($38) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=0;
      label = 33; break;
    case 8: 
      var $41=$3;
      var $42=$iobj;
      var $43=_PyNumber_Remainder($41, $42);
      $remobj=$43;
      label = 9; break;
    case 9: 
      var $45=$iobj;
      var $46=(($45)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=((($47)-(1))|0);
      HEAP32[(($46)>>2)]=$48;
      var $49=(($48)|(0))!=0;
      if ($49) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 12; break;
    case 11: 
      var $52=$iobj;
      var $53=(($52+4)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=(($54+24)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=$iobj;
      FUNCTION_TABLE[$56]($57);
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      var $60=$remobj;
      var $61=(($60)|(0))==0;
      if ($61) { label = 14; break; } else { label = 15; break; }
    case 14: 
      $1=0;
      label = 33; break;
    case 15: 
      var $64=$remobj;
      var $65=_PyInt_AsLong($64);
      $j=$65;
      label = 16; break;
    case 16: 
      var $67=$remobj;
      var $68=(($67)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=((($69)-(1))|0);
      HEAP32[(($68)>>2)]=$70;
      var $71=(($70)|(0))!=0;
      if ($71) { label = 17; break; } else { label = 18; break; }
    case 17: 
      label = 19; break;
    case 18: 
      var $74=$remobj;
      var $75=(($74+4)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=(($76+24)|0);
      var $78=HEAP32[(($77)>>2)];
      var $79=$remobj;
      FUNCTION_TABLE[$78]($79);
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $82=$j;
      var $83=(($82)|(0))==-1;
      if ($83) { label = 21; break; } else { label = 23; break; }
    case 21: 
      var $85=_PyErr_Occurred();
      var $86=(($85)|(0))!=0;
      if ($86) { label = 22; break; } else { label = 23; break; }
    case 22: 
      $1=0;
      label = 33; break;
    case 23: 
      var $89=$i;
      var $90=$mt;
      var $91=(($90+($89<<2))|0);
      var $92=HEAP32[(($91)>>2)];
      $tmp=$92;
      var $93=$j;
      var $94=$mt;
      var $95=(($94+($93<<2))|0);
      var $96=HEAP32[(($95)>>2)];
      var $97=$i;
      var $98=$mt;
      var $99=(($98+($97<<2))|0);
      HEAP32[(($99)>>2)]=$96;
      var $100=$tmp;
      var $101=$j;
      var $102=$mt;
      var $103=(($102+($101<<2))|0);
      HEAP32[(($103)>>2)]=$100;
      label = 24; break;
    case 24: 
      var $105=$i;
      var $106=((($105)-(1))|0);
      $i=$106;
      label = 5; break;
    case 25: 
      $nonzero=0;
      $i=1;
      label = 26; break;
    case 26: 
      var $109=$i;
      var $110=(($109)|(0)) < 624;
      if ($110) { label = 27; break; } else { label = 29; break; }
    case 27: 
      var $112=$i;
      var $113=((($112)+(1))|0);
      var $114=$i;
      var $115=$mt;
      var $116=(($115+($114<<2))|0);
      var $117=HEAP32[(($116)>>2)];
      var $118=((($117)+($113))|0);
      HEAP32[(($116)>>2)]=$118;
      var $119=$i;
      var $120=$mt;
      var $121=(($120+($119<<2))|0);
      var $122=HEAP32[(($121)>>2)];
      HEAP32[(($121)>>2)]=$122;
      var $123=$i;
      var $124=$mt;
      var $125=(($124+($123<<2))|0);
      var $126=HEAP32[(($125)>>2)];
      var $127=$nonzero;
      var $128=$127 | $126;
      $nonzero=$128;
      label = 28; break;
    case 28: 
      var $130=$i;
      var $131=((($130)+(1))|0);
      $i=$131;
      label = 26; break;
    case 29: 
      var $133=$nonzero;
      var $134=(($133)|(0))!=0;
      if ($134) { label = 30; break; } else { label = 31; break; }
    case 30: 
      var $136=$mt;
      var $137=(($136)|0);
      var $138=HEAP32[(($137)>>2)];
      var $139=((($138)+(1))|0);
      HEAP32[(($137)>>2)]=$139;
      var $140=$mt;
      var $141=(($140)|0);
      var $142=HEAP32[(($141)>>2)];
      HEAP32[(($141)>>2)]=$142;
      label = 32; break;
    case 31: 
      var $144=$mt;
      var $145=(($144)|0);
      HEAP32[(($145)>>2)]=-2147483648;
      label = 32; break;
    case 32: 
      var $147=$2;
      var $148=(($147+2504)|0);
      HEAP32[(($148)>>2)]=624;
      var $149=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $150=((($149)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$150;
      $1=__Py_NoneStruct;
      label = 33; break;
    case 33: 
      var $152=$1;
      STACKTOP = __stackBase__;
      return $152;
    default: assert(0, "bad label: " + label);
  }
}
function _random_getrandbits($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $k=__stackBase__;
      var $i;
      var $bytes;
      var $r;
      var $bytearray;
      var $result;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str18)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$k,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 14; break;
    case 3: 
      var $9=HEAP32[(($k)>>2)];
      var $10=(($9)|(0)) <= 0;
      if ($10) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $12=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($12, ((__str19)|0));
      $1=0;
      label = 14; break;
    case 5: 
      var $14=HEAP32[(($k)>>2)];
      var $15=((($14)-(1))|0);
      var $16=((((($15)|(0)))/(32))&-1);
      var $17=((($16)+(1))|0);
      var $18=($17<<2);
      $bytes=$18;
      var $19=$bytes;
      var $20=_PyMem_Malloc($19);
      $bytearray=$20;
      var $21=$bytearray;
      var $22=(($21)|(0))==0;
      if ($22) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $24=_PyErr_NoMemory();
      $1=0;
      label = 14; break;
    case 7: 
      $i=0;
      label = 8; break;
    case 8: 
      var $27=$i;
      var $28=$bytes;
      var $29=(($27)|(0)) < (($28)|(0));
      if ($29) { label = 9; break; } else { label = 13; break; }
    case 9: 
      var $31=$2;
      var $32=_genrand_int32($31);
      $r=$32;
      var $33=HEAP32[(($k)>>2)];
      var $34=(($33)|(0)) < 32;
      if ($34) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $36=HEAP32[(($k)>>2)];
      var $37=(((32)-($36))|0);
      var $38=$r;
      var $39=$38 >>> (($37)>>>(0));
      $r=$39;
      label = 11; break;
    case 11: 
      var $41=$r;
      var $42=(($41) & 255);
      var $43=$i;
      var $44=(($43)|0);
      var $45=$bytearray;
      var $46=(($45+$44)|0);
      HEAP8[($46)]=$42;
      var $47=$r;
      var $48=$47 >>> 8;
      var $49=(($48) & 255);
      var $50=$i;
      var $51=((($50)+(1))|0);
      var $52=$bytearray;
      var $53=(($52+$51)|0);
      HEAP8[($53)]=$49;
      var $54=$r;
      var $55=$54 >>> 16;
      var $56=(($55) & 255);
      var $57=$i;
      var $58=((($57)+(2))|0);
      var $59=$bytearray;
      var $60=(($59+$58)|0);
      HEAP8[($60)]=$56;
      var $61=$r;
      var $62=$61 >>> 24;
      var $63=(($62) & 255);
      var $64=$i;
      var $65=((($64)+(3))|0);
      var $66=$bytearray;
      var $67=(($66+$65)|0);
      HEAP8[($67)]=$63;
      label = 12; break;
    case 12: 
      var $69=$i;
      var $70=((($69)+(4))|0);
      $i=$70;
      var $71=HEAP32[(($k)>>2)];
      var $72=((($71)-(32))|0);
      HEAP32[(($k)>>2)]=$72;
      label = 8; break;
    case 13: 
      var $74=$bytearray;
      var $75=$bytes;
      var $76=__PyLong_FromByteArray($74, $75, 1, 0);
      $result=$76;
      var $77=$bytearray;
      _PyMem_Free($77);
      var $78=$result;
      $1=$78;
      label = 14; break;
    case 14: 
      var $80=$1;
      STACKTOP = __stackBase__;
      return $80;
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
