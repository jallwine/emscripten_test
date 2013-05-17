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
var _imageop_methods;
var _imageop_backward_compatible_bcos;
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
var _ImageopError;
var _ImageopDict;
_imageop_methods=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_imageop_backward_compatible_bcos=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([100,105,116,104,101,114,50,109,111,110,111,0], "i8", ALLOC_NORMAL);
__str8=allocate([103,114,101,121,50,103,114,101,121,52,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([103,114,101,121,50,103,114,101,121,50,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([103,114,101,121,50,109,111,110,111,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([115,99,97,108,101,0,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([99,114,111,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str36=allocate([97,98,115,40,110,101,119,121,50,45,110,101,119,121,49,41,43,49,0,0], "i8", ALLOC_NORMAL);
__str35=allocate([97,98,115,40,110,101,119,120,50,45,110,101,119,120,49,41,43,49,0,0], "i8", ALLOC_NORMAL);
__str34=allocate([115,35,105,105,105,105,105,105,105,0,0,0], "i8", ALLOC_NORMAL);
__str33=allocate([110,101,119,121,0,0,0,0], "i8", ALLOC_NORMAL);
__str32=allocate([110,101,119,120,0,0,0,0], "i8", ALLOC_NORMAL);
__str31=allocate([83,105,122,101,32,115,104,111,117,108,100,32,98,101,32,49,44,32,50,32,111,114,32,52,0,0,0,0], "i8", ALLOC_NORMAL);
__str30=allocate([115,35,105,105,105,105,105,0], "i8", ALLOC_NORMAL);
__str3=allocate([101,114,114,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str29=allocate([115,35,105,105,105,105,0,0], "i8", ALLOC_NORMAL);
__str28=allocate([109,97,120,121,0,0,0,0], "i8", ALLOC_NORMAL);
__str27=allocate([109,97,120,0], "i8", ALLOC_NORMAL);
__str26=allocate([83,105,122,101,32,115,104,111,117,108,100,32,98,101,32,49,32,111,114,32,52,0,0,0], "i8", ALLOC_NORMAL);
__str25=allocate([115,35,105,105,105,0,0,0], "i8", ALLOC_NORMAL);
__str24=allocate([98,97,99,107,119,97,114,100,95,99,111,109,112,97,116,105,98,108,101,0], "i8", ALLOC_NORMAL);
__str23=allocate([37,115,32,118,97,108,117,101,32,105,115,32,110,101,103,97,116,105,118,101,32,111,114,32,110,117,108,0], "i8", ALLOC_NORMAL);
__str22=allocate([83,116,114,105,110,103,32,104,97,115,32,105,110,99,111,114,114,101,99,116,32,108,101,110,103,116,104,0], "i8", ALLOC_NORMAL);
__str21=allocate([121,0,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([120,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([105,109,97,103,101,111,112,46,101,114,114,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([115,35,105,105,0,0,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([103,114,101,121,50,114,103,98,0,0,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([114,103,98,50,103,114,101,121,0,0,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([114,103,98,56,50,114,103,98,0,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([114,103,98,50,114,103,98,56,0,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([116,111,118,105,100,101,111,0], "i8", ALLOC_NORMAL);
__str13=allocate([103,114,101,121,52,50,103,114,101,121,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([103,114,101,121,50,50,103,114,101,121,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([109,111,110,111,50,103,114,101,121,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([100,105,116,104,101,114,50,103,114,101,121,50,0,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([105,109,97,103,101,111,112,0], "i8", ALLOC_NORMAL);
__str=allocate([116,104,101,32,105,109,97,103,101,111,112,32,109,111,100,117,108,101,32,104,97,115,32,98,101,101,110,32,114,101,109,111,118,101,100,32,105,110,32,80,121,116,104,111,110,32,51,46,48,0,0,0], "i8", ALLOC_NORMAL);
_ImageopError=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_ImageopDict=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_imageop_methods)>>2)]=((__str4)|0);
HEAP32[(((_imageop_methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
HEAP32[(((_imageop_methods)+(16))>>2)]=((__str5)|0);
HEAP32[(((_imageop_methods)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((_imageop_methods)+(32))>>2)]=((__str6)|0);
HEAP32[(((_imageop_methods)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_imageop_methods)+(48))>>2)]=((__str7)|0);
HEAP32[(((_imageop_methods)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((_imageop_methods)+(64))>>2)]=((__str8)|0);
HEAP32[(((_imageop_methods)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((_imageop_methods)+(80))>>2)]=((__str9)|0);
HEAP32[(((_imageop_methods)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_imageop_methods)+(96))>>2)]=((__str10)|0);
HEAP32[(((_imageop_methods)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 18);
HEAP32[(((_imageop_methods)+(112))>>2)]=((__str11)|0);
HEAP32[(((_imageop_methods)+(116))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((_imageop_methods)+(128))>>2)]=((__str12)|0);
HEAP32[(((_imageop_methods)+(132))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_imageop_methods)+(144))>>2)]=((__str13)|0);
HEAP32[(((_imageop_methods)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((_imageop_methods)+(160))>>2)]=((__str14)|0);
HEAP32[(((_imageop_methods)+(164))>>2)]=(FUNCTION_TABLE_OFFSET + 30);
HEAP32[(((_imageop_methods)+(176))>>2)]=((__str15)|0);
HEAP32[(((_imageop_methods)+(180))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((_imageop_methods)+(192))>>2)]=((__str16)|0);
HEAP32[(((_imageop_methods)+(196))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((_imageop_methods)+(208))>>2)]=((__str17)|0);
HEAP32[(((_imageop_methods)+(212))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((_imageop_methods)+(224))>>2)]=((__str18)|0);
HEAP32[(((_imageop_methods)+(228))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_imageop_grey2mono,0,_imageop_rgb82rgb,0,_imageop_rgb2rgb8,0,_imageop_mono2grey,0,_imageop_crop
,0,_imageop_rgb2grey,0,_imageop_dither2mono,0,_imageop_grey2grey2,0,_imageop_dither2grey2,0,_imageop_grey2grey4
,0,_imageop_grey2rgb,0,_imageop_scale,0,_imageop_grey42grey,0,_imageop_grey22grey,0,_imageop_tovideo,0]);
// EMSCRIPTEN_START_FUNCS
function _initimageop() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $m;
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
      label = 10; break;
    case 6: 
      var $12=_Py_InitModule4(((__str1)|0), ((_imageop_methods)|0), 0, 0, 1013);
      $m=$12;
      var $13=$m;
      var $14=(($13)|(0))==0;
      if ($14) { label = 7; break; } else { label = 8; break; }
    case 7: 
      label = 10; break;
    case 8: 
      var $17=$m;
      var $18=_PyModule_GetDict($17);
      HEAP32[((_ImageopDict)>>2)]=$18;
      var $19=_PyErr_NewException(((__str2)|0), 0, 0);
      HEAP32[((_ImageopError)>>2)]=$19;
      var $20=HEAP32[((_ImageopError)>>2)];
      var $21=(($20)|(0))!=0;
      if ($21) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $23=HEAP32[((_ImageopDict)>>2)];
      var $24=HEAP32[((_ImageopError)>>2)];
      var $25=_PyDict_SetItemString($23, ((__str3)|0), $24);
      label = 10; break;
    case 10: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
Module["_initimageop"] = _initimageop;
function _imageop_crop($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 36)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $cp=__stackBase__;
      var $ncp;
      var $nsp;
      var $nlp;
      var $len=(__stackBase__)+(4);
      var $size=(__stackBase__)+(8);
      var $x=(__stackBase__)+(12);
      var $y=(__stackBase__)+(16);
      var $newx1=(__stackBase__)+(20);
      var $newx2=(__stackBase__)+(24);
      var $newy1=(__stackBase__)+(28);
      var $newy2=(__stackBase__)+(32);
      var $nlen;
      var $ix;
      var $iy;
      var $xstep;
      var $ystep;
      var $rv;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str34)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 36)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$size,HEAP32[(((tempInt)+(12))>>2)]=$x,HEAP32[(((tempInt)+(16))>>2)]=$y,HEAP32[(((tempInt)+(20))>>2)]=$newx1,HEAP32[(((tempInt)+(24))>>2)]=$newy1,HEAP32[(((tempInt)+(28))>>2)]=$newx2,HEAP32[(((tempInt)+(32))>>2)]=$newy2,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 37; break;
    case 3: 
      var $9=HEAP32[(($size)>>2)];
      var $10=(($9)|(0))!=1;
      if ($10) { label = 4; break; } else { label = 7; break; }
    case 4: 
      var $12=HEAP32[(($size)>>2)];
      var $13=(($12)|(0))!=2;
      if ($13) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $15=HEAP32[(($size)>>2)];
      var $16=(($15)|(0))!=4;
      if ($16) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $18=HEAP32[((_ImageopError)>>2)];
      _PyErr_SetString($18, ((__str31)|0));
      $1=0;
      label = 37; break;
    case 7: 
      var $20=HEAP32[(($len)>>2)];
      var $21=HEAP32[(($x)>>2)];
      var $22=HEAP32[(($y)>>2)];
      var $23=HEAP32[(($size)>>2)];
      var $24=_check_multiply_size($20, $21, ((__str20)|0), $22, ((__str21)|0), $23);
      var $25=(($24)|(0))!=0;
      if ($25) { label = 9; break; } else { label = 8; break; }
    case 8: 
      $1=0;
      label = 37; break;
    case 9: 
      var $28=HEAP32[(($newx1)>>2)];
      var $29=HEAP32[(($newx2)>>2)];
      var $30=(($28)|(0)) < (($29)|(0));
      var $31=$30 ? 1 : -1;
      $xstep=$31;
      var $32=HEAP32[(($newy1)>>2)];
      var $33=HEAP32[(($newy2)>>2)];
      var $34=(($32)|(0)) < (($33)|(0));
      var $35=$34 ? 1 : -1;
      $ystep=$35;
      var $36=HEAP32[(($newx2)>>2)];
      var $37=HEAP32[(($newx1)>>2)];
      var $38=((($36)-($37))|0);
      var $39=Math.abs($38);
      var $40=((($39)+(1))|0);
      var $41=HEAP32[(($newy2)>>2)];
      var $42=HEAP32[(($newy1)>>2)];
      var $43=((($41)-($42))|0);
      var $44=Math.abs($43);
      var $45=((($44)+(1))|0);
      var $46=Math.imul($40,$45);
      var $47=HEAP32[(($size)>>2)];
      var $48=Math.imul($46,$47);
      $nlen=$48;
      var $49=$nlen;
      var $50=HEAP32[(($newx2)>>2)];
      var $51=HEAP32[(($newx1)>>2)];
      var $52=((($50)-($51))|0);
      var $53=Math.abs($52);
      var $54=((($53)+(1))|0);
      var $55=HEAP32[(($newy2)>>2)];
      var $56=HEAP32[(($newy1)>>2)];
      var $57=((($55)-($56))|0);
      var $58=Math.abs($57);
      var $59=((($58)+(1))|0);
      var $60=HEAP32[(($size)>>2)];
      var $61=_check_multiply_size($49, $54, ((__str35)|0), $59, ((__str36)|0), $60);
      var $62=(($61)|(0))!=0;
      if ($62) { label = 11; break; } else { label = 10; break; }
    case 10: 
      $1=0;
      label = 37; break;
    case 11: 
      var $65=$nlen;
      var $66=_PyString_FromStringAndSize(0, $65);
      $rv=$66;
      var $67=$rv;
      var $68=(($67)|(0))==0;
      if ($68) { label = 12; break; } else { label = 13; break; }
    case 12: 
      $1=0;
      label = 37; break;
    case 13: 
      var $71=$rv;
      var $72=_PyString_AsString($71);
      $ncp=$72;
      var $73=$ncp;
      var $74=$73;
      $nsp=$74;
      var $75=$ncp;
      var $76=$75;
      $nlp=$76;
      var $77=$ystep;
      var $78=HEAP32[(($newy2)>>2)];
      var $79=((($78)+($77))|0);
      HEAP32[(($newy2)>>2)]=$79;
      var $80=$xstep;
      var $81=HEAP32[(($newx2)>>2)];
      var $82=((($81)+($80))|0);
      HEAP32[(($newx2)>>2)]=$82;
      var $83=HEAP32[(($newy1)>>2)];
      $iy=$83;
      label = 14; break;
    case 14: 
      var $85=$iy;
      var $86=HEAP32[(($newy2)>>2)];
      var $87=(($85)|(0))!=(($86)|(0));
      if ($87) { label = 15; break; } else { label = 36; break; }
    case 15: 
      var $89=HEAP32[(($newx1)>>2)];
      $ix=$89;
      label = 16; break;
    case 16: 
      var $91=$ix;
      var $92=HEAP32[(($newx2)>>2)];
      var $93=(($91)|(0))!=(($92)|(0));
      if ($93) { label = 17; break; } else { label = 34; break; }
    case 17: 
      var $95=$iy;
      var $96=(($95)|(0)) < 0;
      if ($96) { label = 21; break; } else { label = 18; break; }
    case 18: 
      var $98=$iy;
      var $99=HEAP32[(($y)>>2)];
      var $100=(($98)|(0)) >= (($99)|(0));
      if ($100) { label = 21; break; } else { label = 19; break; }
    case 19: 
      var $102=$ix;
      var $103=(($102)|(0)) < 0;
      if ($103) { label = 21; break; } else { label = 20; break; }
    case 20: 
      var $105=$ix;
      var $106=HEAP32[(($x)>>2)];
      var $107=(($105)|(0)) >= (($106)|(0));
      if ($107) { label = 21; break; } else { label = 25; break; }
    case 21: 
      var $109=HEAP32[(($size)>>2)];
      var $110=(($109)|(0))==1;
      if ($110) { label = 22; break; } else { label = 23; break; }
    case 22: 
      var $112=$ncp;
      var $113=(($112+1)|0);
      $ncp=$113;
      HEAP8[($112)]=0;
      label = 24; break;
    case 23: 
      var $115=$nlp;
      var $116=(($115+4)|0);
      $nlp=$116;
      HEAP32[(($115)>>2)]=0;
      label = 24; break;
    case 24: 
      label = 32; break;
    case 25: 
      var $119=HEAP32[(($size)>>2)];
      var $120=(($119)|(0))==1;
      if ($120) { label = 26; break; } else { label = 27; break; }
    case 26: 
      var $122=HEAP32[(($cp)>>2)];
      var $123=$iy;
      var $124=HEAP32[(($x)>>2)];
      var $125=Math.imul($123,$124);
      var $126=(($122+$125)|0);
      var $127=$ix;
      var $128=(($126+$127)|0);
      var $129=HEAP8[($128)];
      var $130=$ncp;
      var $131=(($130+1)|0);
      $ncp=$131;
      HEAP8[($130)]=$129;
      label = 31; break;
    case 27: 
      var $133=HEAP32[(($size)>>2)];
      var $134=(($133)|(0))==2;
      if ($134) { label = 28; break; } else { label = 29; break; }
    case 28: 
      var $136=HEAP32[(($cp)>>2)];
      var $137=$iy;
      var $138=HEAP32[(($x)>>2)];
      var $139=Math.imul($137,$138);
      var $140=$ix;
      var $141=((($139)+($140))|0);
      var $142=($141<<1);
      var $143=(($136+$142)|0);
      var $144=$143;
      var $145=HEAP16[(($144)>>1)];
      var $146=$nsp;
      var $147=(($146+2)|0);
      $nsp=$147;
      HEAP16[(($146)>>1)]=$145;
      label = 30; break;
    case 29: 
      var $149=HEAP32[(($cp)>>2)];
      var $150=$iy;
      var $151=HEAP32[(($x)>>2)];
      var $152=Math.imul($150,$151);
      var $153=$ix;
      var $154=((($152)+($153))|0);
      var $155=($154<<2);
      var $156=(($149+$155)|0);
      var $157=$156;
      var $158=HEAP32[(($157)>>2)];
      var $159=$nlp;
      var $160=(($159+4)|0);
      $nlp=$160;
      HEAP32[(($159)>>2)]=$158;
      label = 30; break;
    case 30: 
      label = 31; break;
    case 31: 
      label = 32; break;
    case 32: 
      label = 33; break;
    case 33: 
      var $165=$xstep;
      var $166=$ix;
      var $167=((($166)+($165))|0);
      $ix=$167;
      label = 16; break;
    case 34: 
      label = 35; break;
    case 35: 
      var $170=$ystep;
      var $171=$iy;
      var $172=((($171)+($170))|0);
      $iy=$172;
      label = 14; break;
    case 36: 
      var $174=$rv;
      $1=$174;
      label = 37; break;
    case 37: 
      var $176=$1;
      STACKTOP = __stackBase__;
      return $176;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_scale($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 28)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $cp=__stackBase__;
      var $ncp;
      var $nsp;
      var $nlp;
      var $len=(__stackBase__)+(4);
      var $size=(__stackBase__)+(8);
      var $x=(__stackBase__)+(12);
      var $y=(__stackBase__)+(16);
      var $newx=(__stackBase__)+(20);
      var $newy=(__stackBase__)+(24);
      var $nlen;
      var $ix;
      var $iy;
      var $oix;
      var $oiy;
      var $rv;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str30)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 28)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$size,HEAP32[(((tempInt)+(12))>>2)]=$x,HEAP32[(((tempInt)+(16))>>2)]=$y,HEAP32[(((tempInt)+(20))>>2)]=$newx,HEAP32[(((tempInt)+(24))>>2)]=$newy,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 28; break;
    case 3: 
      var $9=HEAP32[(($size)>>2)];
      var $10=(($9)|(0))!=1;
      if ($10) { label = 4; break; } else { label = 7; break; }
    case 4: 
      var $12=HEAP32[(($size)>>2)];
      var $13=(($12)|(0))!=2;
      if ($13) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $15=HEAP32[(($size)>>2)];
      var $16=(($15)|(0))!=4;
      if ($16) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $18=HEAP32[((_ImageopError)>>2)];
      _PyErr_SetString($18, ((__str31)|0));
      $1=0;
      label = 28; break;
    case 7: 
      var $20=HEAP32[(($len)>>2)];
      var $21=HEAP32[(($x)>>2)];
      var $22=HEAP32[(($y)>>2)];
      var $23=HEAP32[(($size)>>2)];
      var $24=_check_multiply_size($20, $21, ((__str20)|0), $22, ((__str21)|0), $23);
      var $25=(($24)|(0))!=0;
      if ($25) { label = 9; break; } else { label = 8; break; }
    case 8: 
      $1=0;
      label = 28; break;
    case 9: 
      var $28=HEAP32[(($newx)>>2)];
      var $29=HEAP32[(($newy)>>2)];
      var $30=Math.imul($28,$29);
      var $31=HEAP32[(($size)>>2)];
      var $32=Math.imul($30,$31);
      $nlen=$32;
      var $33=$nlen;
      var $34=HEAP32[(($newx)>>2)];
      var $35=HEAP32[(($newy)>>2)];
      var $36=HEAP32[(($size)>>2)];
      var $37=_check_multiply_size($33, $34, ((__str32)|0), $35, ((__str33)|0), $36);
      var $38=(($37)|(0))!=0;
      if ($38) { label = 11; break; } else { label = 10; break; }
    case 10: 
      $1=0;
      label = 28; break;
    case 11: 
      var $41=$nlen;
      var $42=_PyString_FromStringAndSize(0, $41);
      $rv=$42;
      var $43=$rv;
      var $44=(($43)|(0))==0;
      if ($44) { label = 12; break; } else { label = 13; break; }
    case 12: 
      $1=0;
      label = 28; break;
    case 13: 
      var $47=$rv;
      var $48=_PyString_AsString($47);
      $ncp=$48;
      var $49=$ncp;
      var $50=$49;
      $nsp=$50;
      var $51=$ncp;
      var $52=$51;
      $nlp=$52;
      $iy=0;
      label = 14; break;
    case 14: 
      var $54=$iy;
      var $55=HEAP32[(($newy)>>2)];
      var $56=(($54)|(0)) < (($55)|(0));
      if ($56) { label = 15; break; } else { label = 27; break; }
    case 15: 
      $ix=0;
      label = 16; break;
    case 16: 
      var $59=$ix;
      var $60=HEAP32[(($newx)>>2)];
      var $61=(($59)|(0)) < (($60)|(0));
      if ($61) { label = 17; break; } else { label = 25; break; }
    case 17: 
      var $63=$ix;
      var $64=HEAP32[(($x)>>2)];
      var $65=Math.imul($63,$64);
      var $66=HEAP32[(($newx)>>2)];
      var $67=((((($65)|(0)))/((($66)|(0))))&-1);
      $oix=$67;
      var $68=$iy;
      var $69=HEAP32[(($y)>>2)];
      var $70=Math.imul($68,$69);
      var $71=HEAP32[(($newy)>>2)];
      var $72=((((($70)|(0)))/((($71)|(0))))&-1);
      $oiy=$72;
      var $73=HEAP32[(($size)>>2)];
      var $74=(($73)|(0))==1;
      if ($74) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $76=HEAP32[(($cp)>>2)];
      var $77=$oiy;
      var $78=HEAP32[(($x)>>2)];
      var $79=Math.imul($77,$78);
      var $80=(($76+$79)|0);
      var $81=$oix;
      var $82=(($80+$81)|0);
      var $83=HEAP8[($82)];
      var $84=$ncp;
      var $85=(($84+1)|0);
      $ncp=$85;
      HEAP8[($84)]=$83;
      label = 23; break;
    case 19: 
      var $87=HEAP32[(($size)>>2)];
      var $88=(($87)|(0))==2;
      if ($88) { label = 20; break; } else { label = 21; break; }
    case 20: 
      var $90=HEAP32[(($cp)>>2)];
      var $91=$oiy;
      var $92=HEAP32[(($x)>>2)];
      var $93=Math.imul($91,$92);
      var $94=$oix;
      var $95=((($93)+($94))|0);
      var $96=($95<<1);
      var $97=(($90+$96)|0);
      var $98=$97;
      var $99=HEAP16[(($98)>>1)];
      var $100=$nsp;
      var $101=(($100+2)|0);
      $nsp=$101;
      HEAP16[(($100)>>1)]=$99;
      label = 22; break;
    case 21: 
      var $103=HEAP32[(($cp)>>2)];
      var $104=$oiy;
      var $105=HEAP32[(($x)>>2)];
      var $106=Math.imul($104,$105);
      var $107=$oix;
      var $108=((($106)+($107))|0);
      var $109=($108<<2);
      var $110=(($103+$109)|0);
      var $111=$110;
      var $112=HEAP32[(($111)>>2)];
      var $113=$nlp;
      var $114=(($113+4)|0);
      $nlp=$114;
      HEAP32[(($113)>>2)]=$112;
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $118=$ix;
      var $119=((($118)+(1))|0);
      $ix=$119;
      label = 16; break;
    case 25: 
      label = 26; break;
    case 26: 
      var $122=$iy;
      var $123=((($122)+(1))|0);
      $iy=$123;
      label = 14; break;
    case 27: 
      var $125=$rv;
      $1=$125;
      label = 28; break;
    case 28: 
      var $127=$1;
      STACKTOP = __stackBase__;
      return $127;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_grey2mono($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 20)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $tres=__stackBase__;
      var $x=(__stackBase__)+(4);
      var $y=(__stackBase__)+(8);
      var $len=(__stackBase__)+(12);
      var $cp=(__stackBase__)+(16);
      var $ncp;
      var $ovalue;
      var $rv;
      var $i;
      var $bit;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str25)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 20)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$x,HEAP32[(((tempInt)+(12))>>2)]=$y,HEAP32[(((tempInt)+(16))>>2)]=$tres,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 18; break;
    case 3: 
      var $9=HEAP32[(($len)>>2)];
      var $10=HEAP32[(($x)>>2)];
      var $11=HEAP32[(($y)>>2)];
      var $12=_check_multiply($9, $10, $11);
      var $13=(($12)|(0))!=0;
      if ($13) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 18; break;
    case 5: 
      var $16=HEAP32[(($len)>>2)];
      var $17=((($16)+(7))|0);
      var $18=((((($17)|(0)))/(8))&-1);
      var $19=_PyString_FromStringAndSize(0, $18);
      $rv=$19;
      var $20=$rv;
      var $21=(($20)|(0))==0;
      if ($21) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 18; break;
    case 7: 
      var $24=$rv;
      var $25=_PyString_AsString($24);
      $ncp=$25;
      $bit=128;
      $ovalue=0;
      $i=0;
      label = 8; break;
    case 8: 
      var $27=$i;
      var $28=HEAP32[(($len)>>2)];
      var $29=(($27)|(0)) < (($28)|(0));
      if ($29) { label = 9; break; } else { label = 15; break; }
    case 9: 
      var $31=$i;
      var $32=HEAP32[(($cp)>>2)];
      var $33=(($32+$31)|0);
      var $34=HEAP8[($33)];
      var $35=(($34)&(255));
      var $36=HEAP32[(($tres)>>2)];
      var $37=(($35)|(0)) > (($36)|(0));
      if ($37) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $39=$bit;
      var $40=$ovalue;
      var $41=(($40)&(255));
      var $42=$41 | $39;
      var $43=(($42) & 255);
      $ovalue=$43;
      label = 11; break;
    case 11: 
      var $45=$bit;
      var $46=$45 >> 1;
      $bit=$46;
      var $47=$bit;
      var $48=(($47)|(0))==0;
      if ($48) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $50=$ovalue;
      var $51=$ncp;
      var $52=(($51+1)|0);
      $ncp=$52;
      HEAP8[($51)]=$50;
      $bit=128;
      $ovalue=0;
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      var $55=$i;
      var $56=((($55)+(1))|0);
      $i=$56;
      label = 8; break;
    case 15: 
      var $58=$bit;
      var $59=(($58)|(0))!=128;
      if ($59) { label = 16; break; } else { label = 17; break; }
    case 16: 
      var $61=$ovalue;
      var $62=$ncp;
      var $63=(($62+1)|0);
      $ncp=$63;
      HEAP8[($62)]=$61;
      label = 17; break;
    case 17: 
      var $65=$rv;
      $1=$65;
      label = 18; break;
    case 18: 
      var $67=$1;
      STACKTOP = __stackBase__;
      return $67;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_grey2grey2($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x=__stackBase__;
      var $y=(__stackBase__)+(4);
      var $len=(__stackBase__)+(8);
      var $cp=(__stackBase__)+(12);
      var $ncp;
      var $ovalue;
      var $rv;
      var $i;
      var $pos;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str19)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$x,HEAP32[(((tempInt)+(12))>>2)]=$y,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 16; break;
    case 3: 
      var $9=HEAP32[(($len)>>2)];
      var $10=HEAP32[(($x)>>2)];
      var $11=HEAP32[(($y)>>2)];
      var $12=_check_multiply($9, $10, $11);
      var $13=(($12)|(0))!=0;
      if ($13) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 16; break;
    case 5: 
      var $16=HEAP32[(($len)>>2)];
      var $17=((($16)+(3))|0);
      var $18=((((($17)|(0)))/(4))&-1);
      var $19=_PyString_FromStringAndSize(0, $18);
      $rv=$19;
      var $20=$rv;
      var $21=(($20)|(0))==0;
      if ($21) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 16; break;
    case 7: 
      var $24=$rv;
      var $25=_PyString_AsString($24);
      $ncp=$25;
      $pos=0;
      $ovalue=0;
      $i=0;
      label = 8; break;
    case 8: 
      var $27=$i;
      var $28=HEAP32[(($len)>>2)];
      var $29=(($27)|(0)) < (($28)|(0));
      if ($29) { label = 9; break; } else { label = 13; break; }
    case 9: 
      var $31=$i;
      var $32=HEAP32[(($cp)>>2)];
      var $33=(($32+$31)|0);
      var $34=HEAP8[($33)];
      var $35=(($34)&(255));
      var $36=$35 & 192;
      var $37=$pos;
      var $38=$36 >> (($37)|(0));
      var $39=$ovalue;
      var $40=(($39)&(255));
      var $41=$40 | $38;
      var $42=(($41) & 255);
      $ovalue=$42;
      var $43=$pos;
      var $44=((($43)+(2))|0);
      $pos=$44;
      var $45=$pos;
      var $46=(($45)|(0))==8;
      if ($46) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $48=$ovalue;
      var $49=$ncp;
      var $50=(($49+1)|0);
      $ncp=$50;
      HEAP8[($49)]=$48;
      $ovalue=0;
      $pos=0;
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $53=$i;
      var $54=((($53)+(1))|0);
      $i=$54;
      label = 8; break;
    case 13: 
      var $56=$pos;
      var $57=(($56)|(0))!=0;
      if ($57) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $59=$ovalue;
      var $60=$ncp;
      var $61=(($60+1)|0);
      $ncp=$61;
      HEAP8[($60)]=$59;
      label = 15; break;
    case 15: 
      var $63=$rv;
      $1=$63;
      label = 16; break;
    case 16: 
      var $65=$1;
      STACKTOP = __stackBase__;
      return $65;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_grey2grey4($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x=__stackBase__;
      var $y=(__stackBase__)+(4);
      var $len=(__stackBase__)+(8);
      var $cp=(__stackBase__)+(12);
      var $ncp;
      var $ovalue;
      var $rv;
      var $i;
      var $pos;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str19)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$x,HEAP32[(((tempInt)+(12))>>2)]=$y,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 16; break;
    case 3: 
      var $9=HEAP32[(($len)>>2)];
      var $10=HEAP32[(($x)>>2)];
      var $11=HEAP32[(($y)>>2)];
      var $12=_check_multiply($9, $10, $11);
      var $13=(($12)|(0))!=0;
      if ($13) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 16; break;
    case 5: 
      var $16=HEAP32[(($len)>>2)];
      var $17=((($16)+(1))|0);
      var $18=((((($17)|(0)))/(2))&-1);
      var $19=_PyString_FromStringAndSize(0, $18);
      $rv=$19;
      var $20=$rv;
      var $21=(($20)|(0))==0;
      if ($21) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 16; break;
    case 7: 
      var $24=$rv;
      var $25=_PyString_AsString($24);
      $ncp=$25;
      $pos=0;
      $ovalue=0;
      $i=0;
      label = 8; break;
    case 8: 
      var $27=$i;
      var $28=HEAP32[(($len)>>2)];
      var $29=(($27)|(0)) < (($28)|(0));
      if ($29) { label = 9; break; } else { label = 13; break; }
    case 9: 
      var $31=$i;
      var $32=HEAP32[(($cp)>>2)];
      var $33=(($32+$31)|0);
      var $34=HEAP8[($33)];
      var $35=(($34)&(255));
      var $36=$35 & 240;
      var $37=$pos;
      var $38=$36 >> (($37)|(0));
      var $39=$ovalue;
      var $40=(($39)&(255));
      var $41=$40 | $38;
      var $42=(($41) & 255);
      $ovalue=$42;
      var $43=$pos;
      var $44=((($43)+(4))|0);
      $pos=$44;
      var $45=$pos;
      var $46=(($45)|(0))==8;
      if ($46) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $48=$ovalue;
      var $49=$ncp;
      var $50=(($49+1)|0);
      $ncp=$50;
      HEAP8[($49)]=$48;
      $ovalue=0;
      $pos=0;
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $53=$i;
      var $54=((($53)+(1))|0);
      $i=$54;
      label = 8; break;
    case 13: 
      var $56=$pos;
      var $57=(($56)|(0))!=0;
      if ($57) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $59=$ovalue;
      var $60=$ncp;
      var $61=(($60+1)|0);
      $ncp=$61;
      HEAP8[($60)]=$59;
      label = 15; break;
    case 15: 
      var $63=$rv;
      $1=$63;
      label = 16; break;
    case 16: 
      var $65=$1;
      STACKTOP = __stackBase__;
      return $65;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_dither2mono($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $sum;
      var $x=__stackBase__;
      var $y=(__stackBase__)+(4);
      var $len=(__stackBase__)+(8);
      var $cp=(__stackBase__)+(12);
      var $ncp;
      var $ovalue;
      var $rv;
      var $i;
      var $bit;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str19)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$x,HEAP32[(((tempInt)+(12))>>2)]=$y,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 18; break;
    case 3: 
      var $9=HEAP32[(($len)>>2)];
      var $10=HEAP32[(($x)>>2)];
      var $11=HEAP32[(($y)>>2)];
      var $12=_check_multiply($9, $10, $11);
      var $13=(($12)|(0))!=0;
      if ($13) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 18; break;
    case 5: 
      var $16=HEAP32[(($len)>>2)];
      var $17=((($16)+(7))|0);
      var $18=((((($17)|(0)))/(8))&-1);
      var $19=_PyString_FromStringAndSize(0, $18);
      $rv=$19;
      var $20=$rv;
      var $21=(($20)|(0))==0;
      if ($21) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 18; break;
    case 7: 
      var $24=$rv;
      var $25=_PyString_AsString($24);
      $ncp=$25;
      $bit=128;
      $ovalue=0;
      $sum=0;
      $i=0;
      label = 8; break;
    case 8: 
      var $27=$i;
      var $28=HEAP32[(($len)>>2)];
      var $29=(($27)|(0)) < (($28)|(0));
      if ($29) { label = 9; break; } else { label = 15; break; }
    case 9: 
      var $31=$i;
      var $32=HEAP32[(($cp)>>2)];
      var $33=(($32+$31)|0);
      var $34=HEAP8[($33)];
      var $35=(($34)&(255));
      var $36=$sum;
      var $37=((($36)+($35))|0);
      $sum=$37;
      var $38=$sum;
      var $39=(($38)|(0)) >= 256;
      if ($39) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $41=$sum;
      var $42=((($41)-(256))|0);
      $sum=$42;
      var $43=$bit;
      var $44=$ovalue;
      var $45=(($44)&(255));
      var $46=$45 | $43;
      var $47=(($46) & 255);
      $ovalue=$47;
      label = 11; break;
    case 11: 
      var $49=$bit;
      var $50=$49 >> 1;
      $bit=$50;
      var $51=$bit;
      var $52=(($51)|(0))==0;
      if ($52) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $54=$ovalue;
      var $55=$ncp;
      var $56=(($55+1)|0);
      $ncp=$56;
      HEAP8[($55)]=$54;
      $bit=128;
      $ovalue=0;
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      var $59=$i;
      var $60=((($59)+(1))|0);
      $i=$60;
      label = 8; break;
    case 15: 
      var $62=$bit;
      var $63=(($62)|(0))!=128;
      if ($63) { label = 16; break; } else { label = 17; break; }
    case 16: 
      var $65=$ovalue;
      var $66=$ncp;
      var $67=(($66+1)|0);
      $ncp=$67;
      HEAP8[($66)]=$65;
      label = 17; break;
    case 17: 
      var $69=$rv;
      $1=$69;
      label = 18; break;
    case 18: 
      var $71=$1;
      STACKTOP = __stackBase__;
      return $71;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_dither2grey2($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x=__stackBase__;
      var $y=(__stackBase__)+(4);
      var $len=(__stackBase__)+(8);
      var $cp=(__stackBase__)+(12);
      var $ncp;
      var $ovalue;
      var $rv;
      var $i;
      var $pos;
      var $sum;
      var $nvalue;
      $2=$self;
      $3=$args;
      $sum=0;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str19)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$x,HEAP32[(((tempInt)+(12))>>2)]=$y,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 16; break;
    case 3: 
      var $9=HEAP32[(($len)>>2)];
      var $10=HEAP32[(($x)>>2)];
      var $11=HEAP32[(($y)>>2)];
      var $12=_check_multiply($9, $10, $11);
      var $13=(($12)|(0))!=0;
      if ($13) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 16; break;
    case 5: 
      var $16=HEAP32[(($len)>>2)];
      var $17=((($16)+(3))|0);
      var $18=((((($17)|(0)))/(4))&-1);
      var $19=_PyString_FromStringAndSize(0, $18);
      $rv=$19;
      var $20=$rv;
      var $21=(($20)|(0))==0;
      if ($21) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 16; break;
    case 7: 
      var $24=$rv;
      var $25=_PyString_AsString($24);
      $ncp=$25;
      $pos=1;
      $ovalue=0;
      $i=0;
      label = 8; break;
    case 8: 
      var $27=$i;
      var $28=HEAP32[(($len)>>2)];
      var $29=(($27)|(0)) < (($28)|(0));
      if ($29) { label = 9; break; } else { label = 13; break; }
    case 9: 
      var $31=$i;
      var $32=HEAP32[(($cp)>>2)];
      var $33=(($32+$31)|0);
      var $34=HEAP8[($33)];
      var $35=(($34)&(255));
      var $36=$sum;
      var $37=((($36)+($35))|0);
      $sum=$37;
      var $38=$sum;
      var $39=$38 & 384;
      $nvalue=$39;
      var $40=$nvalue;
      var $41=$sum;
      var $42=((($41)-($40))|0);
      $sum=$42;
      var $43=$nvalue;
      var $44=$pos;
      var $45=$43 >> (($44)|(0));
      var $46=$ovalue;
      var $47=(($46)&(255));
      var $48=$47 | $45;
      var $49=(($48) & 255);
      $ovalue=$49;
      var $50=$pos;
      var $51=((($50)+(2))|0);
      $pos=$51;
      var $52=$pos;
      var $53=(($52)|(0))==9;
      if ($53) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $55=$ovalue;
      var $56=$ncp;
      var $57=(($56+1)|0);
      $ncp=$57;
      HEAP8[($56)]=$55;
      $ovalue=0;
      $pos=1;
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $60=$i;
      var $61=((($60)+(1))|0);
      $i=$61;
      label = 8; break;
    case 13: 
      var $63=$pos;
      var $64=(($63)|(0))!=0;
      if ($64) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $66=$ovalue;
      var $67=$ncp;
      var $68=(($67+1)|0);
      $ncp=$68;
      HEAP8[($67)]=$66;
      label = 15; break;
    case 15: 
      var $70=$rv;
      $1=$70;
      label = 16; break;
    case 16: 
      var $72=$1;
      STACKTOP = __stackBase__;
      return $72;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_mono2grey($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 24)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $v0=__stackBase__;
      var $v1=(__stackBase__)+(4);
      var $x=(__stackBase__)+(8);
      var $y=(__stackBase__)+(12);
      var $len=(__stackBase__)+(16);
      var $nlen;
      var $cp=(__stackBase__)+(20);
      var $ncp;
      var $rv;
      var $i;
      var $bit;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str29)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 24)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$x,HEAP32[(((tempInt)+(12))>>2)]=$y,HEAP32[(((tempInt)+(16))>>2)]=$v0,HEAP32[(((tempInt)+(20))>>2)]=$v1,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 19; break;
    case 3: 
      var $9=HEAP32[(($x)>>2)];
      var $10=HEAP32[(($y)>>2)];
      var $11=Math.imul($9,$10);
      $nlen=$11;
      var $12=$nlen;
      var $13=HEAP32[(($x)>>2)];
      var $14=HEAP32[(($y)>>2)];
      var $15=_check_multiply($12, $13, $14);
      var $16=(($15)|(0))!=0;
      if ($16) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 19; break;
    case 5: 
      var $19=$nlen;
      var $20=((($19)+(7))|0);
      var $21=((((($20)|(0)))/(8))&-1);
      var $22=HEAP32[(($len)>>2)];
      var $23=(($21)|(0))!=(($22)|(0));
      if ($23) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $25=HEAP32[((_ImageopError)>>2)];
      _PyErr_SetString($25, ((__str22)|0));
      $1=0;
      label = 19; break;
    case 7: 
      var $27=$nlen;
      var $28=_PyString_FromStringAndSize(0, $27);
      $rv=$28;
      var $29=$rv;
      var $30=(($29)|(0))==0;
      if ($30) { label = 8; break; } else { label = 9; break; }
    case 8: 
      $1=0;
      label = 19; break;
    case 9: 
      var $33=$rv;
      var $34=_PyString_AsString($33);
      $ncp=$34;
      $bit=128;
      $i=0;
      label = 10; break;
    case 10: 
      var $36=$i;
      var $37=$nlen;
      var $38=(($36)|(0)) < (($37)|(0));
      if ($38) { label = 11; break; } else { label = 18; break; }
    case 11: 
      var $40=HEAP32[(($cp)>>2)];
      var $41=HEAP8[($40)];
      var $42=(($41)&(255));
      var $43=$bit;
      var $44=$42 & $43;
      var $45=(($44)|(0))!=0;
      if ($45) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $47=HEAP32[(($v1)>>2)];
      var $48=(($47) & 255);
      var $49=$ncp;
      var $50=(($49+1)|0);
      $ncp=$50;
      HEAP8[($49)]=$48;
      label = 14; break;
    case 13: 
      var $52=HEAP32[(($v0)>>2)];
      var $53=(($52) & 255);
      var $54=$ncp;
      var $55=(($54+1)|0);
      $ncp=$55;
      HEAP8[($54)]=$53;
      label = 14; break;
    case 14: 
      var $57=$bit;
      var $58=$57 >> 1;
      $bit=$58;
      var $59=$bit;
      var $60=(($59)|(0))==0;
      if ($60) { label = 15; break; } else { label = 16; break; }
    case 15: 
      $bit=128;
      var $62=HEAP32[(($cp)>>2)];
      var $63=(($62+1)|0);
      HEAP32[(($cp)>>2)]=$63;
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $66=$i;
      var $67=((($66)+(1))|0);
      $i=$67;
      label = 10; break;
    case 18: 
      var $69=$rv;
      $1=$69;
      label = 19; break;
    case 19: 
      var $71=$1;
      STACKTOP = __stackBase__;
      return $71;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_grey22grey($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x=__stackBase__;
      var $y=(__stackBase__)+(4);
      var $len=(__stackBase__)+(8);
      var $nlen;
      var $cp=(__stackBase__)+(12);
      var $ncp;
      var $rv;
      var $i;
      var $pos;
      var $value;
      var $nvalue;
      $2=$self;
      $3=$args;
      $value=0;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str19)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$x,HEAP32[(((tempInt)+(12))>>2)]=$y,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 16; break;
    case 3: 
      var $9=HEAP32[(($x)>>2)];
      var $10=HEAP32[(($y)>>2)];
      var $11=Math.imul($9,$10);
      $nlen=$11;
      var $12=$nlen;
      var $13=HEAP32[(($x)>>2)];
      var $14=HEAP32[(($y)>>2)];
      var $15=_check_multiply($12, $13, $14);
      var $16=(($15)|(0))!=0;
      if ($16) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 16; break;
    case 5: 
      var $19=$nlen;
      var $20=((($19)+(3))|0);
      var $21=((((($20)|(0)))/(4))&-1);
      var $22=HEAP32[(($len)>>2)];
      var $23=(($21)|(0))!=(($22)|(0));
      if ($23) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $25=HEAP32[((_ImageopError)>>2)];
      _PyErr_SetString($25, ((__str22)|0));
      $1=0;
      label = 16; break;
    case 7: 
      var $27=$nlen;
      var $28=_PyString_FromStringAndSize(0, $27);
      $rv=$28;
      var $29=$rv;
      var $30=(($29)|(0))==0;
      if ($30) { label = 8; break; } else { label = 9; break; }
    case 8: 
      $1=0;
      label = 16; break;
    case 9: 
      var $33=$rv;
      var $34=_PyString_AsString($33);
      $ncp=$34;
      $pos=0;
      $i=0;
      label = 10; break;
    case 10: 
      var $36=$i;
      var $37=$nlen;
      var $38=(($36)|(0)) < (($37)|(0));
      if ($38) { label = 11; break; } else { label = 15; break; }
    case 11: 
      var $40=$pos;
      var $41=(($40)|(0))==0;
      if ($41) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $43=HEAP32[(($cp)>>2)];
      var $44=(($43+1)|0);
      HEAP32[(($cp)>>2)]=$44;
      var $45=HEAP8[($43)];
      var $46=(($45)&(255));
      $value=$46;
      $pos=8;
      label = 13; break;
    case 13: 
      var $48=$pos;
      var $49=((($48)-(2))|0);
      $pos=$49;
      var $50=$value;
      var $51=$pos;
      var $52=$50 >> (($51)|(0));
      var $53=$52 & 3;
      $nvalue=$53;
      var $54=$nvalue;
      var $55=$nvalue;
      var $56=$55 << 2;
      var $57=$54 | $56;
      var $58=$nvalue;
      var $59=$58 << 4;
      var $60=$57 | $59;
      var $61=$nvalue;
      var $62=$61 << 6;
      var $63=$60 | $62;
      var $64=(($63) & 255);
      var $65=$ncp;
      var $66=(($65+1)|0);
      $ncp=$66;
      HEAP8[($65)]=$64;
      label = 14; break;
    case 14: 
      var $68=$i;
      var $69=((($68)+(1))|0);
      $i=$69;
      label = 10; break;
    case 15: 
      var $71=$rv;
      $1=$71;
      label = 16; break;
    case 16: 
      var $73=$1;
      STACKTOP = __stackBase__;
      return $73;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_grey42grey($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x=__stackBase__;
      var $y=(__stackBase__)+(4);
      var $len=(__stackBase__)+(8);
      var $nlen;
      var $cp=(__stackBase__)+(12);
      var $ncp;
      var $rv;
      var $i;
      var $pos;
      var $value;
      var $nvalue;
      $2=$self;
      $3=$args;
      $value=0;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str19)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$x,HEAP32[(((tempInt)+(12))>>2)]=$y,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 16; break;
    case 3: 
      var $9=HEAP32[(($x)>>2)];
      var $10=HEAP32[(($y)>>2)];
      var $11=Math.imul($9,$10);
      $nlen=$11;
      var $12=$nlen;
      var $13=HEAP32[(($x)>>2)];
      var $14=HEAP32[(($y)>>2)];
      var $15=_check_multiply($12, $13, $14);
      var $16=(($15)|(0))!=0;
      if ($16) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 16; break;
    case 5: 
      var $19=$nlen;
      var $20=((($19)+(1))|0);
      var $21=((((($20)|(0)))/(2))&-1);
      var $22=HEAP32[(($len)>>2)];
      var $23=(($21)|(0))!=(($22)|(0));
      if ($23) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $25=HEAP32[((_ImageopError)>>2)];
      _PyErr_SetString($25, ((__str22)|0));
      $1=0;
      label = 16; break;
    case 7: 
      var $27=$nlen;
      var $28=_PyString_FromStringAndSize(0, $27);
      $rv=$28;
      var $29=$rv;
      var $30=(($29)|(0))==0;
      if ($30) { label = 8; break; } else { label = 9; break; }
    case 8: 
      $1=0;
      label = 16; break;
    case 9: 
      var $33=$rv;
      var $34=_PyString_AsString($33);
      $ncp=$34;
      $pos=0;
      $i=0;
      label = 10; break;
    case 10: 
      var $36=$i;
      var $37=$nlen;
      var $38=(($36)|(0)) < (($37)|(0));
      if ($38) { label = 11; break; } else { label = 15; break; }
    case 11: 
      var $40=$pos;
      var $41=(($40)|(0))==0;
      if ($41) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $43=HEAP32[(($cp)>>2)];
      var $44=(($43+1)|0);
      HEAP32[(($cp)>>2)]=$44;
      var $45=HEAP8[($43)];
      var $46=(($45)&(255));
      $value=$46;
      $pos=8;
      label = 13; break;
    case 13: 
      var $48=$pos;
      var $49=((($48)-(4))|0);
      $pos=$49;
      var $50=$value;
      var $51=$pos;
      var $52=$50 >> (($51)|(0));
      var $53=$52 & 15;
      $nvalue=$53;
      var $54=$nvalue;
      var $55=$nvalue;
      var $56=$55 << 4;
      var $57=$54 | $56;
      var $58=(($57) & 255);
      var $59=$ncp;
      var $60=(($59+1)|0);
      $ncp=$60;
      HEAP8[($59)]=$58;
      label = 14; break;
    case 14: 
      var $62=$i;
      var $63=((($62)+(1))|0);
      $i=$63;
      label = 10; break;
    case 15: 
      var $65=$rv;
      $1=$65;
      label = 16; break;
    case 16: 
      var $67=$1;
      STACKTOP = __stackBase__;
      return $67;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_tovideo($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 20)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $maxx=__stackBase__;
      var $maxy=(__stackBase__)+(4);
      var $x;
      var $y;
      var $len=(__stackBase__)+(8);
      var $i;
      var $cp=(__stackBase__)+(12);
      var $ncp;
      var $width=(__stackBase__)+(16);
      var $rv;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str25)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 20)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$width,HEAP32[(((tempInt)+(12))>>2)]=$maxx,HEAP32[(((tempInt)+(16))>>2)]=$maxy,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 30; break;
    case 3: 
      var $9=HEAP32[(($width)>>2)];
      var $10=(($9)|(0))!=1;
      if ($10) { label = 4; break; } else { label = 6; break; }
    case 4: 
      var $12=HEAP32[(($width)>>2)];
      var $13=(($12)|(0))!=4;
      if ($13) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $15=HEAP32[((_ImageopError)>>2)];
      _PyErr_SetString($15, ((__str26)|0));
      $1=0;
      label = 30; break;
    case 6: 
      var $17=HEAP32[(($len)>>2)];
      var $18=HEAP32[(($maxx)>>2)];
      var $19=HEAP32[(($maxy)>>2)];
      var $20=HEAP32[(($width)>>2)];
      var $21=_check_multiply_size($17, $18, ((__str27)|0), $19, ((__str28)|0), $20);
      var $22=(($21)|(0))!=0;
      if ($22) { label = 8; break; } else { label = 7; break; }
    case 7: 
      $1=0;
      label = 30; break;
    case 8: 
      var $25=HEAP32[(($len)>>2)];
      var $26=_PyString_FromStringAndSize(0, $25);
      $rv=$26;
      var $27=$rv;
      var $28=(($27)|(0))==0;
      if ($28) { label = 9; break; } else { label = 10; break; }
    case 9: 
      $1=0;
      label = 30; break;
    case 10: 
      var $31=$rv;
      var $32=_PyString_AsString($31);
      $ncp=$32;
      var $33=HEAP32[(($width)>>2)];
      var $34=(($33)|(0))==1;
      if ($34) { label = 11; break; } else { label = 20; break; }
    case 11: 
      var $36=$ncp;
      var $37=HEAP32[(($cp)>>2)];
      var $38=HEAP32[(($maxx)>>2)];
      assert($38 % 1 === 0);_memcpy($36, $37, $38);
      var $39=HEAP32[(($maxx)>>2)];
      var $40=$ncp;
      var $41=(($40+$39)|0);
      $ncp=$41;
      $y=1;
      label = 12; break;
    case 12: 
      var $43=$y;
      var $44=HEAP32[(($maxy)>>2)];
      var $45=(($43)|(0)) < (($44)|(0));
      if ($45) { label = 13; break; } else { label = 19; break; }
    case 13: 
      $x=0;
      label = 14; break;
    case 14: 
      var $48=$x;
      var $49=HEAP32[(($maxx)>>2)];
      var $50=(($48)|(0)) < (($49)|(0));
      if ($50) { label = 15; break; } else { label = 17; break; }
    case 15: 
      var $52=$y;
      var $53=HEAP32[(($maxx)>>2)];
      var $54=Math.imul($52,$53);
      var $55=$x;
      var $56=((($54)+($55))|0);
      $i=$56;
      var $57=$i;
      var $58=HEAP32[(($cp)>>2)];
      var $59=(($58+$57)|0);
      var $60=HEAP8[($59)];
      var $61=(($60)&(255));
      var $62=$i;
      var $63=HEAP32[(($maxx)>>2)];
      var $64=((($62)-($63))|0);
      var $65=HEAP32[(($cp)>>2)];
      var $66=(($65+$64)|0);
      var $67=HEAP8[($66)];
      var $68=(($67)&(255));
      var $69=((($61)+($68))|0);
      var $70=$69 >> 1;
      var $71=(($70) & 255);
      var $72=$ncp;
      var $73=(($72+1)|0);
      $ncp=$73;
      HEAP8[($72)]=$71;
      label = 16; break;
    case 16: 
      var $75=$x;
      var $76=((($75)+(1))|0);
      $x=$76;
      label = 14; break;
    case 17: 
      label = 18; break;
    case 18: 
      var $79=$y;
      var $80=((($79)+(1))|0);
      $y=$80;
      label = 12; break;
    case 19: 
      label = 29; break;
    case 20: 
      var $83=$ncp;
      var $84=HEAP32[(($cp)>>2)];
      var $85=HEAP32[(($maxx)>>2)];
      var $86=($85<<2);
      assert($86 % 1 === 0);_memcpy($83, $84, $86);
      var $87=HEAP32[(($maxx)>>2)];
      var $88=($87<<2);
      var $89=$ncp;
      var $90=(($89+$88)|0);
      $ncp=$90;
      $y=1;
      label = 21; break;
    case 21: 
      var $92=$y;
      var $93=HEAP32[(($maxy)>>2)];
      var $94=(($92)|(0)) < (($93)|(0));
      if ($94) { label = 22; break; } else { label = 28; break; }
    case 22: 
      $x=0;
      label = 23; break;
    case 23: 
      var $97=$x;
      var $98=HEAP32[(($maxx)>>2)];
      var $99=(($97)|(0)) < (($98)|(0));
      if ($99) { label = 24; break; } else { label = 26; break; }
    case 24: 
      var $101=$y;
      var $102=HEAP32[(($maxx)>>2)];
      var $103=Math.imul($101,$102);
      var $104=$x;
      var $105=((($103)+($104))|0);
      var $106=($105<<2);
      var $107=((($106)+(1))|0);
      $i=$107;
      var $108=$ncp;
      var $109=(($108+1)|0);
      $ncp=$109;
      HEAP8[($108)]=0;
      var $110=$i;
      var $111=HEAP32[(($cp)>>2)];
      var $112=(($111+$110)|0);
      var $113=HEAP8[($112)];
      var $114=(($113)&(255));
      var $115=$i;
      var $116=HEAP32[(($maxx)>>2)];
      var $117=($116<<2);
      var $118=((($115)-($117))|0);
      var $119=HEAP32[(($cp)>>2)];
      var $120=(($119+$118)|0);
      var $121=HEAP8[($120)];
      var $122=(($121)&(255));
      var $123=((($114)+($122))|0);
      var $124=$123 >> 1;
      var $125=(($124) & 255);
      var $126=$ncp;
      var $127=(($126+1)|0);
      $ncp=$127;
      HEAP8[($126)]=$125;
      var $128=$i;
      var $129=((($128)+(1))|0);
      $i=$129;
      var $130=$i;
      var $131=HEAP32[(($cp)>>2)];
      var $132=(($131+$130)|0);
      var $133=HEAP8[($132)];
      var $134=(($133)&(255));
      var $135=$i;
      var $136=HEAP32[(($maxx)>>2)];
      var $137=($136<<2);
      var $138=((($135)-($137))|0);
      var $139=HEAP32[(($cp)>>2)];
      var $140=(($139+$138)|0);
      var $141=HEAP8[($140)];
      var $142=(($141)&(255));
      var $143=((($134)+($142))|0);
      var $144=$143 >> 1;
      var $145=(($144) & 255);
      var $146=$ncp;
      var $147=(($146+1)|0);
      $ncp=$147;
      HEAP8[($146)]=$145;
      var $148=$i;
      var $149=((($148)+(1))|0);
      $i=$149;
      var $150=$i;
      var $151=HEAP32[(($cp)>>2)];
      var $152=(($151+$150)|0);
      var $153=HEAP8[($152)];
      var $154=(($153)&(255));
      var $155=$i;
      var $156=HEAP32[(($maxx)>>2)];
      var $157=($156<<2);
      var $158=((($155)-($157))|0);
      var $159=HEAP32[(($cp)>>2)];
      var $160=(($159+$158)|0);
      var $161=HEAP8[($160)];
      var $162=(($161)&(255));
      var $163=((($154)+($162))|0);
      var $164=$163 >> 1;
      var $165=(($164) & 255);
      var $166=$ncp;
      var $167=(($166+1)|0);
      $ncp=$167;
      HEAP8[($166)]=$165;
      label = 25; break;
    case 25: 
      var $169=$x;
      var $170=((($169)+(1))|0);
      $x=$170;
      label = 23; break;
    case 26: 
      label = 27; break;
    case 27: 
      var $173=$y;
      var $174=((($173)+(1))|0);
      $y=$174;
      label = 21; break;
    case 28: 
      label = 29; break;
    case 29: 
      var $177=$rv;
      $1=$177;
      label = 30; break;
    case 30: 
      var $179=$1;
      STACKTOP = __stackBase__;
      return $179;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_rgb2rgb8($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x=__stackBase__;
      var $y=(__stackBase__)+(4);
      var $len=(__stackBase__)+(8);
      var $nlen;
      var $cp=(__stackBase__)+(12);
      var $ncp;
      var $rv;
      var $i;
      var $r;
      var $g;
      var $b;
      var $backward_compatible;
      var $value;
      $2=$self;
      $3=$args;
      var $4=_imageop_backward_compatible();
      $backward_compatible=$4;
      var $5=$3;
      var $6=_PyArg_ParseTuple($5, ((__str19)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$x,HEAP32[(((tempInt)+(12))>>2)]=$y,tempInt));
      var $7=(($6)|(0))!=0;
      if ($7) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 17; break;
    case 3: 
      var $10=HEAP32[(($len)>>2)];
      var $11=HEAP32[(($x)>>2)];
      var $12=HEAP32[(($y)>>2)];
      var $13=_check_multiply_size($10, $11, ((__str20)|0), $12, ((__str21)|0), 4);
      var $14=(($13)|(0))!=0;
      if ($14) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 17; break;
    case 5: 
      var $17=HEAP32[(($x)>>2)];
      var $18=HEAP32[(($y)>>2)];
      var $19=Math.imul($17,$18);
      $nlen=$19;
      var $20=$nlen;
      var $21=HEAP32[(($x)>>2)];
      var $22=HEAP32[(($y)>>2)];
      var $23=_check_multiply($20, $21, $22);
      var $24=(($23)|(0))!=0;
      if ($24) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=0;
      label = 17; break;
    case 7: 
      var $27=$nlen;
      var $28=_PyString_FromStringAndSize(0, $27);
      $rv=$28;
      var $29=$rv;
      var $30=(($29)|(0))==0;
      if ($30) { label = 8; break; } else { label = 9; break; }
    case 8: 
      $1=0;
      label = 17; break;
    case 9: 
      var $33=$rv;
      var $34=_PyString_AsString($33);
      $ncp=$34;
      $i=0;
      label = 10; break;
    case 10: 
      var $36=$i;
      var $37=$nlen;
      var $38=(($36)|(0)) < (($37)|(0));
      if ($38) { label = 11; break; } else { label = 16; break; }
    case 11: 
      var $40=$backward_compatible;
      var $41=(($40)|(0))!=0;
      if ($41) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $43=HEAP32[(($cp)>>2)];
      var $44=$43;
      var $45=HEAP32[(($44)>>2)];
      $value=$45;
      var $46=HEAP32[(($cp)>>2)];
      var $47=(($46+4)|0);
      HEAP32[(($cp)>>2)]=$47;
      var $48=$value;
      var $49=$48 & 255;
      var $50=(($49)>>>(0));
      var $51=($50)/(255);
      var $52=($51)*(7);
      var $53=($52)+(0.5);
      var $54=(($53)&-1);
      $r=$54;
      var $55=$value;
      var $56=$55 >>> 8;
      var $57=$56 & 255;
      var $58=(($57)>>>(0));
      var $59=($58)/(255);
      var $60=($59)*(7);
      var $61=($60)+(0.5);
      var $62=(($61)&-1);
      $g=$62;
      var $63=$value;
      var $64=$63 >>> 16;
      var $65=$64 & 255;
      var $66=(($65)>>>(0));
      var $67=($66)/(255);
      var $68=($67)*(3);
      var $69=($68)+(0.5);
      var $70=(($69)&-1);
      $b=$70;
      label = 14; break;
    case 13: 
      var $72=HEAP32[(($cp)>>2)];
      var $73=(($72+1)|0);
      HEAP32[(($cp)>>2)]=$73;
      var $74=HEAP32[(($cp)>>2)];
      var $75=(($74+1)|0);
      HEAP32[(($cp)>>2)]=$75;
      var $76=HEAP8[($74)];
      var $77=(($76)&(255));
      var $78=(($77)|(0));
      var $79=($78)/(255);
      var $80=($79)*(3);
      var $81=($80)+(0.5);
      var $82=(($81)&-1);
      $b=$82;
      var $83=HEAP32[(($cp)>>2)];
      var $84=(($83+1)|0);
      HEAP32[(($cp)>>2)]=$84;
      var $85=HEAP8[($83)];
      var $86=(($85)&(255));
      var $87=(($86)|(0));
      var $88=($87)/(255);
      var $89=($88)*(7);
      var $90=($89)+(0.5);
      var $91=(($90)&-1);
      $g=$91;
      var $92=HEAP32[(($cp)>>2)];
      var $93=(($92+1)|0);
      HEAP32[(($cp)>>2)]=$93;
      var $94=HEAP8[($92)];
      var $95=(($94)&(255));
      var $96=(($95)|(0));
      var $97=($96)/(255);
      var $98=($97)*(7);
      var $99=($98)+(0.5);
      var $100=(($99)&-1);
      $r=$100;
      label = 14; break;
    case 14: 
      var $102=$r;
      var $103=$102 << 5;
      var $104=$b;
      var $105=$104 << 3;
      var $106=$103 | $105;
      var $107=$g;
      var $108=$106 | $107;
      var $109=(($108) & 255);
      var $110=$ncp;
      var $111=(($110+1)|0);
      $ncp=$111;
      HEAP8[($110)]=$109;
      label = 15; break;
    case 15: 
      var $113=$i;
      var $114=((($113)+(1))|0);
      $i=$114;
      label = 10; break;
    case 16: 
      var $116=$rv;
      $1=$116;
      label = 17; break;
    case 17: 
      var $118=$1;
      STACKTOP = __stackBase__;
      return $118;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_rgb82rgb($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x=__stackBase__;
      var $y=(__stackBase__)+(4);
      var $len=(__stackBase__)+(8);
      var $nlen;
      var $cp=(__stackBase__)+(12);
      var $ncp;
      var $rv;
      var $i;
      var $r;
      var $g;
      var $b;
      var $value;
      var $backward_compatible;
      var $nvalue;
      $2=$self;
      $3=$args;
      var $4=_imageop_backward_compatible();
      $backward_compatible=$4;
      var $5=$3;
      var $6=_PyArg_ParseTuple($5, ((__str19)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$x,HEAP32[(((tempInt)+(12))>>2)]=$y,tempInt));
      var $7=(($6)|(0))!=0;
      if ($7) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 17; break;
    case 3: 
      var $10=HEAP32[(($len)>>2)];
      var $11=HEAP32[(($x)>>2)];
      var $12=HEAP32[(($y)>>2)];
      var $13=_check_multiply($10, $11, $12);
      var $14=(($13)|(0))!=0;
      if ($14) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 17; break;
    case 5: 
      var $17=HEAP32[(($x)>>2)];
      var $18=HEAP32[(($y)>>2)];
      var $19=Math.imul($17,$18);
      var $20=($19<<2);
      $nlen=$20;
      var $21=$nlen;
      var $22=HEAP32[(($x)>>2)];
      var $23=HEAP32[(($y)>>2)];
      var $24=_check_multiply_size($21, $22, ((__str20)|0), $23, ((__str21)|0), 4);
      var $25=(($24)|(0))!=0;
      if ($25) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=0;
      label = 17; break;
    case 7: 
      var $28=$nlen;
      var $29=_PyString_FromStringAndSize(0, $28);
      $rv=$29;
      var $30=$rv;
      var $31=(($30)|(0))==0;
      if ($31) { label = 8; break; } else { label = 9; break; }
    case 8: 
      $1=0;
      label = 17; break;
    case 9: 
      var $34=$rv;
      var $35=_PyString_AsString($34);
      $ncp=$35;
      $i=0;
      label = 10; break;
    case 10: 
      var $37=$i;
      var $38=HEAP32[(($len)>>2)];
      var $39=(($37)|(0)) < (($38)|(0));
      if ($39) { label = 11; break; } else { label = 16; break; }
    case 11: 
      var $41=HEAP32[(($cp)>>2)];
      var $42=(($41+1)|0);
      HEAP32[(($cp)>>2)]=$42;
      var $43=HEAP8[($41)];
      $value=$43;
      var $44=$value;
      var $45=(($44)&(255));
      var $46=$45 >> 5;
      var $47=$46 & 7;
      $r=$47;
      var $48=$value;
      var $49=(($48)&(255));
      var $50=$49 & 7;
      $g=$50;
      var $51=$value;
      var $52=(($51)&(255));
      var $53=$52 >> 3;
      var $54=$53 & 3;
      $b=$54;
      var $55=$r;
      var $56=$55 << 5;
      var $57=$r;
      var $58=$57 << 3;
      var $59=$56 | $58;
      var $60=$r;
      var $61=$60 >> 1;
      var $62=$59 | $61;
      $r=$62;
      var $63=$g;
      var $64=$63 << 5;
      var $65=$g;
      var $66=$65 << 3;
      var $67=$64 | $66;
      var $68=$g;
      var $69=$68 >> 1;
      var $70=$67 | $69;
      $g=$70;
      var $71=$b;
      var $72=$71 << 6;
      var $73=$b;
      var $74=$73 << 4;
      var $75=$72 | $74;
      var $76=$b;
      var $77=$76 << 2;
      var $78=$75 | $77;
      var $79=$b;
      var $80=$78 | $79;
      $b=$80;
      var $81=$backward_compatible;
      var $82=(($81)|(0))!=0;
      if ($82) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $84=$r;
      var $85=$g;
      var $86=$85 << 8;
      var $87=$84 | $86;
      var $88=$b;
      var $89=$88 << 16;
      var $90=$87 | $89;
      $nvalue=$90;
      var $91=$nvalue;
      var $92=$ncp;
      var $93=$92;
      HEAP32[(($93)>>2)]=$91;
      var $94=$ncp;
      var $95=(($94+4)|0);
      $ncp=$95;
      label = 14; break;
    case 13: 
      var $97=$ncp;
      var $98=(($97+1)|0);
      $ncp=$98;
      HEAP8[($97)]=0;
      var $99=$b;
      var $100=(($99) & 255);
      var $101=$ncp;
      var $102=(($101+1)|0);
      $ncp=$102;
      HEAP8[($101)]=$100;
      var $103=$g;
      var $104=(($103) & 255);
      var $105=$ncp;
      var $106=(($105+1)|0);
      $ncp=$106;
      HEAP8[($105)]=$104;
      var $107=$r;
      var $108=(($107) & 255);
      var $109=$ncp;
      var $110=(($109+1)|0);
      $ncp=$110;
      HEAP8[($109)]=$108;
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $113=$i;
      var $114=((($113)+(1))|0);
      $i=$114;
      label = 10; break;
    case 16: 
      var $116=$rv;
      $1=$116;
      label = 17; break;
    case 17: 
      var $118=$1;
      STACKTOP = __stackBase__;
      return $118;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_rgb2grey($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x=__stackBase__;
      var $y=(__stackBase__)+(4);
      var $len=(__stackBase__)+(8);
      var $nlen;
      var $cp=(__stackBase__)+(12);
      var $ncp;
      var $rv;
      var $i;
      var $r;
      var $g;
      var $b;
      var $nvalue;
      var $backward_compatible;
      var $value;
      $2=$self;
      $3=$args;
      var $4=_imageop_backward_compatible();
      $backward_compatible=$4;
      var $5=$3;
      var $6=_PyArg_ParseTuple($5, ((__str19)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$x,HEAP32[(((tempInt)+(12))>>2)]=$y,tempInt));
      var $7=(($6)|(0))!=0;
      if ($7) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 19; break;
    case 3: 
      var $10=HEAP32[(($len)>>2)];
      var $11=HEAP32[(($x)>>2)];
      var $12=HEAP32[(($y)>>2)];
      var $13=_check_multiply_size($10, $11, ((__str20)|0), $12, ((__str21)|0), 4);
      var $14=(($13)|(0))!=0;
      if ($14) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 19; break;
    case 5: 
      var $17=HEAP32[(($x)>>2)];
      var $18=HEAP32[(($y)>>2)];
      var $19=Math.imul($17,$18);
      $nlen=$19;
      var $20=$nlen;
      var $21=HEAP32[(($x)>>2)];
      var $22=HEAP32[(($y)>>2)];
      var $23=_check_multiply($20, $21, $22);
      var $24=(($23)|(0))!=0;
      if ($24) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=0;
      label = 19; break;
    case 7: 
      var $27=$nlen;
      var $28=_PyString_FromStringAndSize(0, $27);
      $rv=$28;
      var $29=$rv;
      var $30=(($29)|(0))==0;
      if ($30) { label = 8; break; } else { label = 9; break; }
    case 8: 
      $1=0;
      label = 19; break;
    case 9: 
      var $33=$rv;
      var $34=_PyString_AsString($33);
      $ncp=$34;
      $i=0;
      label = 10; break;
    case 10: 
      var $36=$i;
      var $37=$nlen;
      var $38=(($36)|(0)) < (($37)|(0));
      if ($38) { label = 11; break; } else { label = 18; break; }
    case 11: 
      var $40=$backward_compatible;
      var $41=(($40)|(0))!=0;
      if ($41) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $43=HEAP32[(($cp)>>2)];
      var $44=$43;
      var $45=HEAP32[(($44)>>2)];
      $value=$45;
      var $46=HEAP32[(($cp)>>2)];
      var $47=(($46+4)|0);
      HEAP32[(($cp)>>2)]=$47;
      var $48=$value;
      var $49=$48 & 255;
      var $50=(($49)>>>(0));
      var $51=($50)/(255);
      var $52=($51)*(7);
      var $53=($52)+(0.5);
      var $54=(($53)&-1);
      $r=$54;
      var $55=$value;
      var $56=$55 >>> 8;
      var $57=$56 & 255;
      var $58=(($57)>>>(0));
      var $59=($58)/(255);
      var $60=($59)*(7);
      var $61=($60)+(0.5);
      var $62=(($61)&-1);
      $g=$62;
      var $63=$value;
      var $64=$63 >>> 16;
      var $65=$64 & 255;
      var $66=(($65)>>>(0));
      var $67=($66)/(255);
      var $68=($67)*(3);
      var $69=($68)+(0.5);
      var $70=(($69)&-1);
      $b=$70;
      label = 14; break;
    case 13: 
      var $72=HEAP32[(($cp)>>2)];
      var $73=(($72+1)|0);
      HEAP32[(($cp)>>2)]=$73;
      var $74=HEAP32[(($cp)>>2)];
      var $75=(($74+1)|0);
      HEAP32[(($cp)>>2)]=$75;
      var $76=HEAP8[($74)];
      var $77=(($76)&(255));
      $b=$77;
      var $78=HEAP32[(($cp)>>2)];
      var $79=(($78+1)|0);
      HEAP32[(($cp)>>2)]=$79;
      var $80=HEAP8[($78)];
      var $81=(($80)&(255));
      $g=$81;
      var $82=HEAP32[(($cp)>>2)];
      var $83=(($82+1)|0);
      HEAP32[(($cp)>>2)]=$83;
      var $84=HEAP8[($82)];
      var $85=(($84)&(255));
      $r=$85;
      label = 14; break;
    case 14: 
      var $87=$r;
      var $88=(($87)|(0));
      var $89=($88)*(0.3);
      var $90=$g;
      var $91=(($90)|(0));
      var $92=($91)*(0.59);
      var $93=($89)+($92);
      var $94=$b;
      var $95=(($94)|(0));
      var $96=($95)*(0.11);
      var $97=($93)+($96);
      var $98=(($97)&-1);
      $nvalue=$98;
      var $99=$nvalue;
      var $100=(($99)|(0)) > 255;
      if ($100) { label = 15; break; } else { label = 16; break; }
    case 15: 
      $nvalue=255;
      label = 16; break;
    case 16: 
      var $103=$nvalue;
      var $104=(($103) & 255);
      var $105=$ncp;
      var $106=(($105+1)|0);
      $ncp=$106;
      HEAP8[($105)]=$104;
      label = 17; break;
    case 17: 
      var $108=$i;
      var $109=((($108)+(1))|0);
      $i=$109;
      label = 10; break;
    case 18: 
      var $111=$rv;
      $1=$111;
      label = 19; break;
    case 19: 
      var $113=$1;
      STACKTOP = __stackBase__;
      return $113;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_grey2rgb($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x=__stackBase__;
      var $y=(__stackBase__)+(4);
      var $len=(__stackBase__)+(8);
      var $nlen;
      var $cp=(__stackBase__)+(12);
      var $ncp;
      var $rv;
      var $i;
      var $value;
      var $backward_compatible;
      $2=$self;
      $3=$args;
      var $4=_imageop_backward_compatible();
      $backward_compatible=$4;
      var $5=$3;
      var $6=_PyArg_ParseTuple($5, ((__str19)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$cp,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$x,HEAP32[(((tempInt)+(12))>>2)]=$y,tempInt));
      var $7=(($6)|(0))!=0;
      if ($7) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 17; break;
    case 3: 
      var $10=HEAP32[(($len)>>2)];
      var $11=HEAP32[(($x)>>2)];
      var $12=HEAP32[(($y)>>2)];
      var $13=_check_multiply($10, $11, $12);
      var $14=(($13)|(0))!=0;
      if ($14) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 17; break;
    case 5: 
      var $17=HEAP32[(($x)>>2)];
      var $18=HEAP32[(($y)>>2)];
      var $19=Math.imul($17,$18);
      var $20=($19<<2);
      $nlen=$20;
      var $21=$nlen;
      var $22=HEAP32[(($x)>>2)];
      var $23=HEAP32[(($y)>>2)];
      var $24=_check_multiply_size($21, $22, ((__str20)|0), $23, ((__str21)|0), 4);
      var $25=(($24)|(0))!=0;
      if ($25) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=0;
      label = 17; break;
    case 7: 
      var $28=$nlen;
      var $29=_PyString_FromStringAndSize(0, $28);
      $rv=$29;
      var $30=$rv;
      var $31=(($30)|(0))==0;
      if ($31) { label = 8; break; } else { label = 9; break; }
    case 8: 
      $1=0;
      label = 17; break;
    case 9: 
      var $34=$rv;
      var $35=_PyString_AsString($34);
      $ncp=$35;
      $i=0;
      label = 10; break;
    case 10: 
      var $37=$i;
      var $38=HEAP32[(($len)>>2)];
      var $39=(($37)|(0)) < (($38)|(0));
      if ($39) { label = 11; break; } else { label = 16; break; }
    case 11: 
      var $41=HEAP32[(($cp)>>2)];
      var $42=(($41+1)|0);
      HEAP32[(($cp)>>2)]=$42;
      var $43=HEAP8[($41)];
      $value=$43;
      var $44=$backward_compatible;
      var $45=(($44)|(0))!=0;
      if ($45) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $47=$value;
      var $48=(($47)&(255));
      var $49=$value;
      var $50=(($49)&(255));
      var $51=$50 << 8;
      var $52=$48 | $51;
      var $53=$value;
      var $54=(($53)&(255));
      var $55=$54 << 16;
      var $56=$52 | $55;
      var $57=$ncp;
      var $58=$57;
      HEAP32[(($58)>>2)]=$56;
      var $59=$ncp;
      var $60=(($59+4)|0);
      $ncp=$60;
      label = 14; break;
    case 13: 
      var $62=$ncp;
      var $63=(($62+1)|0);
      $ncp=$63;
      HEAP8[($62)]=0;
      var $64=$value;
      var $65=$ncp;
      var $66=(($65+1)|0);
      $ncp=$66;
      HEAP8[($65)]=$64;
      var $67=$value;
      var $68=$ncp;
      var $69=(($68+1)|0);
      $ncp=$69;
      HEAP8[($68)]=$67;
      var $70=$value;
      var $71=$ncp;
      var $72=(($71+1)|0);
      $ncp=$72;
      HEAP8[($71)]=$70;
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $75=$i;
      var $76=((($75)+(1))|0);
      $i=$76;
      label = 10; break;
    case 16: 
      var $78=$rv;
      $1=$78;
      label = 17; break;
    case 17: 
      var $80=$1;
      STACKTOP = __stackBase__;
      return $80;
    default: assert(0, "bad label: " + label);
  }
}
function _imageop_backward_compatible() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $bco;
      var $rc;
      var $2=HEAP32[((_ImageopDict)>>2)];
      var $3=(($2)|(0))==0;
      if ($3) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=1;
      label = 14; break;
    case 3: 
      var $6=HEAP32[((_imageop_backward_compatible_bcos)>>2)];
      var $7=(($6)|(0))==0;
      if ($7) { label = 4; break; } else { label = 7; break; }
    case 4: 
      var $9=_PyString_FromString(((__str24)|0));
      HEAP32[((_imageop_backward_compatible_bcos)>>2)]=$9;
      var $10=HEAP32[((_imageop_backward_compatible_bcos)>>2)];
      var $11=(($10)|(0))==0;
      if ($11) { label = 5; break; } else { label = 6; break; }
    case 5: 
      $1=1;
      label = 14; break;
    case 6: 
      label = 7; break;
    case 7: 
      var $15=HEAP32[((_ImageopDict)>>2)];
      var $16=HEAP32[((_imageop_backward_compatible_bcos)>>2)];
      var $17=_PyDict_GetItem($15, $16);
      $bco=$17;
      var $18=$bco;
      var $19=(($18)|(0))==0;
      if ($19) { label = 8; break; } else { label = 9; break; }
    case 8: 
      $1=1;
      label = 14; break;
    case 9: 
      var $22=$bco;
      var $23=(($22+4)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=(($24+84)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=$26 & 8388608;
      var $28=(($27)|(0))!=0;
      if ($28) { label = 11; break; } else { label = 10; break; }
    case 10: 
      $1=1;
      label = 14; break;
    case 11: 
      var $31=$bco;
      var $32=_PyInt_AsLong($31);
      $rc=$32;
      var $33=_PyErr_Occurred();
      var $34=(($33)|(0))!=0;
      if ($34) { label = 12; break; } else { label = 13; break; }
    case 12: 
      _PyErr_Clear();
      $rc=1;
      label = 13; break;
    case 13: 
      var $37=$rc;
      var $38=(($37)|(0))!=0;
      var $39=(($38)&(1));
      $1=$39;
      label = 14; break;
    case 14: 
      var $41=$1;
      return $41;
    default: assert(0, "bad label: " + label);
  }
}
function _check_multiply($product, $x, $y) {
  var label = 0;
  var $1;
  var $2;
  var $3;
  $1=$product;
  $2=$x;
  $3=$y;
  var $4=$1;
  var $5=$2;
  var $6=$3;
  var $7=_check_multiply_size($4, $5, ((__str20)|0), $6, ((__str21)|0), 1);
  return $7;
}
function _check_multiply_size($product, $x, $xname, $y, $yname, $size) {
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
      $2=$product;
      $3=$x;
      $4=$xname;
      $5=$y;
      $6=$yname;
      $7=$size;
      var $8=$3;
      var $9=$4;
      var $10=_check_coordonnate($8, $9);
      var $11=(($10)|(0))!=0;
      if ($11) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 8; break;
    case 3: 
      var $14=$5;
      var $15=$6;
      var $16=_check_coordonnate($14, $15);
      var $17=(($16)|(0))!=0;
      if ($17) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 8; break;
    case 5: 
      var $20=$7;
      var $21=$2;
      var $22=$5;
      var $23=((((($21)|(0)))/((($22)|(0))))&-1);
      var $24=$3;
      var $25=((((($23)|(0)))/((($24)|(0))))&-1);
      var $26=(($20)|(0))==(($25)|(0));
      if ($26) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=1;
      label = 8; break;
    case 7: 
      var $29=HEAP32[((_ImageopError)>>2)];
      _PyErr_SetString($29, ((__str22)|0));
      $1=0;
      label = 8; break;
    case 8: 
      var $31=$1;
      return $31;
    default: assert(0, "bad label: " + label);
  }
}
function _check_coordonnate($value, $name) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $2=$value;
      $3=$name;
      var $4=$2;
      var $5=0 < (($4)|(0));
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=1;
      label = 4; break;
    case 3: 
      var $8=HEAP32[((_PyExc_ValueError)>>2)];
      var $9=$3;
      var $10=_PyErr_Format($8, ((__str23)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$9,tempInt));
      $1=0;
      label = 4; break;
    case 4: 
      var $12=$1;
      STACKTOP = __stackBase__;
      return $12;
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
