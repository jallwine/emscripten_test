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
var _new_mmap_object_keywords;
var _mmap_object_type;
var _mmap_object_methods;
var _mmap_module_error;
var _mmap_doc;
var _mmap_as_sequence;
var _mmap_as_mapping;
var _mmap_as_buffer;
var __str9;
var __str81;
var __str80;
var __str8;
var __str79;
var __str78;
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
var ___func___mmap_read_method;
_new_mmap_object_keywords=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mmap_object_type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,5,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mmap_object_methods=allocate([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mmap_module_error=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_mmap_doc=allocate([87,105,110,100,111,119,115,58,32,109,109,97,112,40,102,105,108,101,110,111,44,32,108,101,110,103,116,104,91,44,32,116,97,103,110,97,109,101,91,44,32,97,99,99,101,115,115,91,44,32,111,102,102,115,101,116,93,93,93,41,10,10,77,97,112,115,32,108,101,110,103,116,104,32,98,121,116,101,115,32,102,114,111,109,32,116,104,101,32,102,105,108,101,32,115,112,101,99,105,102,105,101,100,32,98,121,32,116,104,101,32,102,105,108,101,32,104,97,110,100,108,101,32,102,105,108,101,110,111,44,10,97,110,100,32,114,101,116,117,114,110,115,32,97,32,109,109,97,112,32,111,98,106,101,99,116,46,32,32,73,102,32,108,101,110,103,116,104,32,105,115,32,108,97,114,103,101,114,32,116,104,97,110,32,116,104,101,32,99,117,114,114,101,110,116,32,115,105,122,101,10,111,102,32,116,104,101,32,102,105,108,101,44,32,116,104,101,32,102,105,108,101,32,105,115,32,101,120,116,101,110,100,101,100,32,116,111,32,99,111,110,116,97,105,110,32,108,101,110,103,116,104,32,98,121,116,101,115,46,32,32,73,102,32,108,101,110,103,116,104,10,105,115,32,48,44,32,116,104,101,32,109,97,120,105,109,117,109,32,108,101,110,103,116,104,32,111,102,32,116,104,101,32,109,97,112,32,105,115,32,116,104,101,32,99,117,114,114,101,110,116,32,115,105,122,101,32,111,102,32,116,104,101,32,102,105,108,101,44,10,101,120,99,101,112,116,32,116,104,97,116,32,105,102,32,116,104,101,32,102,105,108,101,32,105,115,32,101,109,112,116,121,32,87,105,110,100,111,119,115,32,114,97,105,115,101,115,32,97,110,32,101,120,99,101,112,116,105,111,110,32,40,121,111,117,32,99,97,110,110,111,116,10,99,114,101,97,116,101,32,97,110,32,101,109,112,116,121,32,109,97,112,112,105,110,103,32,111,110,32,87,105,110,100,111,119,115,41,46,10,10,85,110,105,120,58,32,109,109,97,112,40,102,105,108,101,110,111,44,32,108,101,110,103,116,104,91,44,32,102,108,97,103,115,91,44,32,112,114,111,116,91,44,32,97,99,99,101,115,115,91,44,32,111,102,102,115,101,116,93,93,93,93,41,10,10,77,97,112,115,32,108,101,110,103,116,104,32,98,121,116,101,115,32,102,114,111,109,32,116,104,101,32,102,105,108,101,32,115,112,101,99,105,102,105,101,100,32,98,121,32,116,104,101,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,105,108,101,110,111,44,10,97,110,100,32,114,101,116,117,114,110,115,32,97,32,109,109,97,112,32,111,98,106,101,99,116,46,32,32,73,102,32,108,101,110,103,116,104,32,105,115,32,48,44,32,116,104,101,32,109,97,120,105,109,117,109,32,108,101,110,103,116,104,32,111,102,32,116,104,101,32,109,97,112,10,119,105,108,108,32,98,101,32,116,104,101,32,99,117,114,114,101,110,116,32,115,105,122,101,32,111,102,32,116,104,101,32,102,105,108,101,32,119,104,101,110,32,109,109,97,112,32,105,115,32,99,97,108,108,101,100,46,10,102,108,97,103,115,32,115,112,101,99,105,102,105,101,115,32,116,104,101,32,110,97,116,117,114,101,32,111,102,32,116,104,101,32,109,97,112,112,105,110,103,46,32,77,65,80,95,80,82,73,86,65,84,69,32,99,114,101,97,116,101,115,32,97,10,112,114,105,118,97,116,101,32,99,111,112,121,45,111,110,45,119,114,105,116,101,32,109,97,112,112,105,110,103,44,32,115,111,32,99,104,97,110,103,101,115,32,116,111,32,116,104,101,32,99,111,110,116,101,110,116,115,32,111,102,32,116,104,101,32,109,109,97,112,10,111,98,106,101,99,116,32,119,105,108,108,32,98,101,32,112,114,105,118,97,116,101,32,116,111,32,116,104,105,115,32,112,114,111,99,101,115,115,44,32,97,110,100,32,77,65,80,95,83,72,65,82,69,68,32,99,114,101,97,116,101,115,32,97,32,109,97,112,112,105,110,103,10,116,104,97,116,39,115,32,115,104,97,114,101,100,32,119,105,116,104,32,97,108,108,32,111,116,104,101,114,32,112,114,111,99,101,115,115,101,115,32,109,97,112,112,105,110,103,32,116,104,101,32,115,97,109,101,32,97,114,101,97,115,32,111,102,32,116,104,101,32,102,105,108,101,46,10,84,104,101,32,100,101,102,97,117,108,116,32,118,97,108,117,101,32,105,115,32,77,65,80,95,83,72,65,82,69,68,46,10,10,84,111,32,109,97,112,32,97,110,111,110,121,109,111,117,115,32,109,101,109,111,114,121,44,32,112,97,115,115,32,45,49,32,97,115,32,116,104,101,32,102,105,108,101,110,111,32,40,98,111,116,104,32,118,101,114,115,105,111,110,115,41,46,0,0,0], "i8", ALLOC_NORMAL);
_mmap_as_sequence=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mmap_as_mapping=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mmap_as_buffer=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([77,65,80,95,65,78,79,78,89,77,79,85,83,0,0,0], "i8", ALLOC_NORMAL);
__str81=allocate([109,109,97,112,115,32,100,111,110,39,116,32,115,117,112,112,111,114,116,32,99,111,110,99,97,116,101,110,97,116,105,111,110,0,0,0], "i8", ALLOC_NORMAL);
__str80=allocate([109,109,97,112,115,32,100,111,110,39,116,32,115,117,112,112,111,114,116,32,114,101,112,101,97,116,32,111,112,101,114,97,116,105,111,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([77,65,80,95,65,78,79,78,0,0,0,0], "i8", ALLOC_NORMAL);
__str79=allocate([109,109,97,112,32,105,110,100,105,99,101,115,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,115,0,0,0], "i8", ALLOC_NORMAL);
__str78=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__str77=allocate([109,109,97,112,32,105,110,100,105,99,101,115,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str76=allocate([109,109,97,112,32,115,108,105,99,101,32,97,115,115,105,103,110,109,101,110,116,32,105,115,32,119,114,111,110,103,32,115,105,122,101,0], "i8", ALLOC_NORMAL);
__str75=allocate([109,109,97,112,32,115,108,105,99,101,32,97,115,115,105,103,110,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0,0], "i8", ALLOC_NORMAL);
__str74=allocate([109,109,97,112,32,111,98,106,101,99,116,32,100,111,101,115,110,39,116,32,115,117,112,112,111,114,116,32,115,108,105,99,101,32,100,101,108,101,116,105,111,110,0,0], "i8", ALLOC_NORMAL);
__str73=allocate([109,109,97,112,32,97,115,115,105,103,110,109,101,110,116,32,109,117,115,116,32,98,101,32,115,105,110,103,108,101,45,99,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,0], "i8", ALLOC_NORMAL);
__str72=allocate([109,109,97,112,32,111,98,106,101,99,116,32,100,111,101,115,110,39,116,32,115,117,112,112,111,114,116,32,105,116,101,109,32,100,101,108,101,116,105,111,110,0,0,0], "i8", ALLOC_NORMAL);
__str71=allocate([109,109,97,112,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0], "i8", ALLOC_NORMAL);
__str70=allocate([65,99,99,101,115,115,105,110,103,32,110,111,110,45,101,120,105,115,116,101,110,116,32,109,109,97,112,32,115,101,103,109,101,110,116,0], "i8", ALLOC_NORMAL);
__str7=allocate([77,65,80,95,80,82,73,86,65,84,69,0], "i8", ALLOC_NORMAL);
__str69=allocate([97,99,99,101,115,115,105,110,103,32,110,111,110,45,101,120,105,115,116,101,110,116,32,98,117,102,102,101,114,32,115,101,103,109,101,110,116,0,0,0], "i8", ALLOC_NORMAL);
__str68=allocate([115,35,124,110,110,58,102,105,110,100,0,0], "i8", ALLOC_NORMAL);
__str67=allocate([115,35,124,110,110,58,114,102,105,110,100,0], "i8", ALLOC_NORMAL);
__str66=allocate([102,108,117,115,104,32,118,97,108,117,101,115,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0], "i8", ALLOC_NORMAL);
__str65=allocate([124,110,110,58,102,108,117,115,104,0,0,0], "i8", ALLOC_NORMAL);
__str64=allocate([115,111,117,114,99,101,44,32,100,101,115,116,105,110,97,116,105,111,110,44,32,111,114,32,99,111,117,110,116,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0], "i8", ALLOC_NORMAL);
__str63=allocate([107,107,107,58,109,111,118,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str62=allocate([115,35,0,0], "i8", ALLOC_NORMAL);
__str61=allocate([115,101,108,102,45,62,115,105,122,101,32,62,61,32,115,101,108,102,45,62,112,111,115,0], "i8", ALLOC_NORMAL);
__str60=allocate([46,46,47,77,111,100,117,108,101,115,47,109,109,97,112,109,111,100,117,108,101,46,99,0], "i8", ALLOC_NORMAL);
__str6=allocate([77,65,80,95,83,72,65,82,69,68,0,0], "i8", ALLOC_NORMAL);
__str59=allocate([110,58,114,101,97,100,0,0], "i8", ALLOC_NORMAL);
__str58=allocate([114,101,97,100,32,98,121,116,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0], "i8", ALLOC_NORMAL);
__str57=allocate([99,0,0,0], "i8", ALLOC_NORMAL);
__str56=allocate([109,109,97,112,32,99,97,110,39,116,32,114,101,115,105,122,101,32,97,32,114,101,97,100,111,110,108,121,32,111,114,32,99,111,112,121,45,111,110,45,119,114,105,116,101,32,109,101,109,111,114,121,32,109,97,112,46,0,0,0], "i8", ALLOC_NORMAL);
__str55=allocate([110,58,114,101,115,105,122,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str54=allocate([115,101,101,107,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0], "i8", ALLOC_NORMAL);
__str53=allocate([117,110,107,110,111,119,110,32,115,101,101,107,32,116,121,112,101,0,0,0], "i8", ALLOC_NORMAL);
__str52=allocate([110,124,105,58,115,101,101,107,0,0,0,0], "i8", ALLOC_NORMAL);
__str51=allocate([100,97,116,97,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0], "i8", ALLOC_NORMAL);
__str50=allocate([115,35,58,119,114,105,116,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([80,82,79,84,95,87,82,73,84,69,0,0], "i8", ALLOC_NORMAL);
__str49=allocate([109,109,97,112,32,99,97,110,39,116,32,109,111,100,105,102,121,32,97,32,114,101,97,100,111,110,108,121,32,109,101,109,111,114,121,32,109,97,112,46,0,0,0,0], "i8", ALLOC_NORMAL);
__str48=allocate([119,114,105,116,101,32,98,121,116,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0], "i8", ALLOC_NORMAL);
__str47=allocate([99,58,119,114,105,116,101,95,98,121,116,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str46=allocate([109,109,97,112,32,99,108,111,115,101,100,32,111,114,32,105,110,118,97,108,105,100,0,0], "i8", ALLOC_NORMAL);
__str45=allocate([119,114,105,116,101,95,98,121,116,101,0,0], "i8", ALLOC_NORMAL);
__str44=allocate([119,114,105,116,101,0,0,0], "i8", ALLOC_NORMAL);
__str43=allocate([116,101,108,108,0,0,0,0], "i8", ALLOC_NORMAL);
__str42=allocate([115,101,101,107,0,0,0,0], "i8", ALLOC_NORMAL);
__str41=allocate([114,101,115,105,122,101,0,0], "i8", ALLOC_NORMAL);
__str40=allocate([114,101,97,100,108,105,110,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([80,82,79,84,95,82,69,65,68,0,0,0], "i8", ALLOC_NORMAL);
__str39=allocate([114,101,97,100,95,98,121,116,101,0,0,0], "i8", ALLOC_NORMAL);
__str38=allocate([114,101,97,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str37=allocate([109,111,118,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str36=allocate([102,108,117,115,104,0,0,0], "i8", ALLOC_NORMAL);
__str35=allocate([114,102,105,110,100,0,0,0], "i8", ALLOC_NORMAL);
__str34=allocate([102,105,110,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str33=allocate([99,108,111,115,101,0,0,0], "i8", ALLOC_NORMAL);
__str32=allocate([109,97,112,32,115,105,122,101,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,0,0], "i8", ALLOC_NORMAL);
__str31=allocate([109,101,109,111,114,121,32,109,97,112,112,101,100,32,37,115,32,109,117,115,116,32,98,101,32,112,111,115,105,116,105,118,101,0,0,0], "i8", ALLOC_NORMAL);
__str30=allocate([109,109,97,112,32,108,101,110,103,116,104,32,105,115,32,103,114,101,97,116,101,114,32,116,104,97,110,32,102,105,108,101,32,115,105,122,101,0,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([80,82,79,84,95,69,88,69,67,0,0,0], "i8", ALLOC_NORMAL);
__str29=allocate([109,109,97,112,32,108,101,110,103,116,104,32,105,115,32,116,111,111,32,108,97,114,103,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str28=allocate([109,109,97,112,32,111,102,102,115,101,116,32,105,115,32,103,114,101,97,116,101,114,32,116,104,97,110,32,102,105,108,101,32,115,105,122,101,0,0,0], "i8", ALLOC_NORMAL);
__str27=allocate([99,97,110,110,111,116,32,109,109,97,112,32,97,110,32,101,109,112,116,121,32,102,105,108,101,0,0,0], "i8", ALLOC_NORMAL);
__str26=allocate([109,109,97,112,32,105,110,118,97,108,105,100,32,97,99,99,101,115,115,32,112,97,114,97,109,101,116,101,114,46,0,0], "i8", ALLOC_NORMAL);
__str25=allocate([109,109,97,112,32,99,97,110,39,116,32,115,112,101,99,105,102,121,32,98,111,116,104,32,97,99,99,101,115,115,32,97,110,100,32,102,108,97,103,115,44,32,112,114,111,116,46,0], "i8", ALLOC_NORMAL);
__str24=allocate([109,101,109,111,114,121,32,109,97,112,112,101,100,32,111,102,102,115,101,116,32,109,117,115,116,32,98,101,32,112,111,115,105,116,105,118,101,0,0,0], "i8", ALLOC_NORMAL);
__str23=allocate([115,105,122,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str22=allocate([105,79,124,105,105,105,108,0], "i8", ALLOC_NORMAL);
__str21=allocate([111,102,102,115,101,116,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([97,99,99,101,115,115,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([101,114,114,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([112,114,111,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([102,108,97,103,115,0,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([108,101,110,103,116,104,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([102,105,108,101,110,111,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([109,109,97,112,46,109,109,97,112,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([65,67,67,69,83,83,95,67,79,80,89,0], "i8", ALLOC_NORMAL);
__str13=allocate([65,67,67,69,83,83,95,87,82,73,84,69,0,0,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([65,67,67,69,83,83,95,82,69,65,68,0], "i8", ALLOC_NORMAL);
__str11=allocate([65,76,76,79,67,65,84,73,79,78,71,82,65,78,85,76,65,82,73,84,89,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([80,65,71,69,83,73,90,69,0,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([109,109,97,112,46,101,114,114,111,114,0,0], "i8", ALLOC_NORMAL);
__str=allocate([109,109,97,112,0,0,0,0], "i8", ALLOC_NORMAL);
___func___mmap_read_method=allocate([109,109,97,112,95,114,101,97,100,95,109,101,116,104,111,100,0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_new_mmap_object_keywords)>>2)]=((__str16)|0);
HEAP32[(((_new_mmap_object_keywords)+(4))>>2)]=((__str17)|0);
HEAP32[(((_new_mmap_object_keywords)+(8))>>2)]=((__str18)|0);
HEAP32[(((_new_mmap_object_keywords)+(12))>>2)]=((__str19)|0);
HEAP32[(((_new_mmap_object_keywords)+(16))>>2)]=((__str20)|0);
HEAP32[(((_new_mmap_object_keywords)+(20))>>2)]=((__str21)|0);
HEAP32[(((_mmap_object_type)+(12))>>2)]=((__str15)|0);
HEAP32[(((_mmap_object_type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 58));
HEAP32[(((_mmap_object_type)+(52))>>2)]=_mmap_as_sequence;
HEAP32[(((_mmap_object_type)+(56))>>2)]=_mmap_as_mapping;
HEAP32[(((_mmap_object_type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 36);
HEAP32[(((_mmap_object_type)+(80))>>2)]=_mmap_as_buffer;
HEAP32[(((_mmap_object_type)+(88))>>2)]=((_mmap_doc)|0);
HEAP32[(((_mmap_object_type)+(116))>>2)]=((_mmap_object_methods)|0);
HEAP32[(((_mmap_object_type)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_mmap_object_type)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((_mmap_object_type)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 38);
HEAP32[((_mmap_object_methods)>>2)]=((__str33)|0);
HEAP32[(((_mmap_object_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 28));
HEAP32[(((_mmap_object_methods)+(16))>>2)]=((__str34)|0);
HEAP32[(((_mmap_object_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 42));
HEAP32[(((_mmap_object_methods)+(32))>>2)]=((__str35)|0);
HEAP32[(((_mmap_object_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 32));
HEAP32[(((_mmap_object_methods)+(48))>>2)]=((__str36)|0);
HEAP32[(((_mmap_object_methods)+(52))>>2)]=((FUNCTION_TABLE_OFFSET + 26));
HEAP32[(((_mmap_object_methods)+(64))>>2)]=((__str37)|0);
HEAP32[(((_mmap_object_methods)+(68))>>2)]=((FUNCTION_TABLE_OFFSET + 12));
HEAP32[(((_mmap_object_methods)+(80))>>2)]=((__str38)|0);
HEAP32[(((_mmap_object_methods)+(84))>>2)]=((FUNCTION_TABLE_OFFSET + 10));
HEAP32[(((_mmap_object_methods)+(96))>>2)]=((__str39)|0);
HEAP32[(((_mmap_object_methods)+(100))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((_mmap_object_methods)+(112))>>2)]=((__str40)|0);
HEAP32[(((_mmap_object_methods)+(116))>>2)]=((FUNCTION_TABLE_OFFSET + 16));
HEAP32[(((_mmap_object_methods)+(128))>>2)]=((__str41)|0);
HEAP32[(((_mmap_object_methods)+(132))>>2)]=((FUNCTION_TABLE_OFFSET + 20));
HEAP32[(((_mmap_object_methods)+(144))>>2)]=((__str42)|0);
HEAP32[(((_mmap_object_methods)+(148))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_mmap_object_methods)+(160))>>2)]=((__str23)|0);
HEAP32[(((_mmap_object_methods)+(164))>>2)]=((FUNCTION_TABLE_OFFSET + 4));
HEAP32[(((_mmap_object_methods)+(176))>>2)]=((__str43)|0);
HEAP32[(((_mmap_object_methods)+(180))>>2)]=((FUNCTION_TABLE_OFFSET + 48));
HEAP32[(((_mmap_object_methods)+(192))>>2)]=((__str44)|0);
HEAP32[(((_mmap_object_methods)+(196))>>2)]=((FUNCTION_TABLE_OFFSET + 46));
HEAP32[(((_mmap_object_methods)+(208))>>2)]=((__str45)|0);
HEAP32[(((_mmap_object_methods)+(212))>>2)]=((FUNCTION_TABLE_OFFSET + 18));
HEAP32[((_mmap_as_sequence)>>2)]=((FUNCTION_TABLE_OFFSET + 34));
HEAP32[(((_mmap_as_sequence)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 64));
HEAP32[(((_mmap_as_sequence)+(8))>>2)]=((FUNCTION_TABLE_OFFSET + 54));
HEAP32[(((_mmap_as_sequence)+(12))>>2)]=((FUNCTION_TABLE_OFFSET + 56));
HEAP32[(((_mmap_as_sequence)+(16))>>2)]=((FUNCTION_TABLE_OFFSET + 62));
HEAP32[(((_mmap_as_sequence)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 60));
HEAP32[(((_mmap_as_sequence)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 40));
HEAP32[((_mmap_as_mapping)>>2)]=((FUNCTION_TABLE_OFFSET + 34));
HEAP32[(((_mmap_as_mapping)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 8));
HEAP32[(((_mmap_as_mapping)+(8))>>2)]=((FUNCTION_TABLE_OFFSET + 30));
HEAP32[((_mmap_as_buffer)>>2)]=((FUNCTION_TABLE_OFFSET + 22));
HEAP32[(((_mmap_as_buffer)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 50));
HEAP32[(((_mmap_as_buffer)+(8))>>2)]=((FUNCTION_TABLE_OFFSET + 52));
HEAP32[(((_mmap_as_buffer)+(12))>>2)]=((FUNCTION_TABLE_OFFSET + 14));
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_mmap_seek_method,0,_mmap_size_method,0,_mmap_read_byte_method,0,_mmap_subscript,0,_mmap_read_method
,0,_mmap_move_method,0,_mmap_buffer_getcharbuffer,0,_mmap_read_line_method,0,_mmap_write_byte_method,0,_mmap_resize_method
,0,_mmap_buffer_getreadbuf,0,_new_mmap_object,0,_mmap_flush_method,0,_mmap_close_method,0,_mmap_ass_subscript
,0,_mmap_rfind_method,0,_mmap_length,0,_PyObject_GenericGetAttr,0,_PyObject_Free,0,_mmap_ass_slice
,0,_mmap_find_method,0,_PyType_GenericAlloc,0,_mmap_write_method,0,_mmap_tell_method,0,_mmap_buffer_getwritebuf
,0,_mmap_buffer_getsegcount,0,_mmap_repeat,0,_mmap_item,0,_mmap_object_dealloc,0,_mmap_ass_item,0,_mmap_slice,0,_mmap_concat,0]);
// EMSCRIPTEN_START_FUNCS
function _initmmap() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $dict;
      var $module;
      var $1=_PyType_Ready(_mmap_object_type);
      var $2=(($1)|(0)) < 0;
      if ($2) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 10; break;
    case 3: 
      var $5=_Py_InitModule4(((__str)|0), 0, 0, 0, 1013);
      $module=$5;
      var $6=$module;
      var $7=(($6)|(0))==0;
      if ($7) { label = 4; break; } else { label = 5; break; }
    case 4: 
      label = 10; break;
    case 5: 
      var $10=$module;
      var $11=_PyModule_GetDict($10);
      $dict=$11;
      var $12=$dict;
      var $13=(($12)|(0))!=0;
      if ($13) { label = 7; break; } else { label = 6; break; }
    case 6: 
      label = 10; break;
    case 7: 
      var $16=HEAP32[((_PyExc_EnvironmentError)>>2)];
      var $17=_PyErr_NewException(((__str1)|0), $16, 0);
      HEAP32[((_mmap_module_error)>>2)]=$17;
      var $18=HEAP32[((_mmap_module_error)>>2)];
      var $19=(($18)|(0))==0;
      if ($19) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 10; break;
    case 9: 
      var $22=$dict;
      var $23=HEAP32[((_mmap_module_error)>>2)];
      var $24=_PyDict_SetItemString($22, ((__str2)|0), $23);
      var $25=$dict;
      var $26=_PyDict_SetItemString($25, ((__str)|0), _mmap_object_type);
      var $27=$dict;
      _setint($27, ((__str3)|0), 4);
      var $28=$dict;
      _setint($28, ((__str4)|0), 1);
      var $29=$dict;
      _setint($29, ((__str5)|0), 2);
      var $30=$dict;
      _setint($30, ((__str6)|0), 1);
      var $31=$dict;
      _setint($31, ((__str7)|0), 2);
      var $32=$dict;
      _setint($32, ((__str8)|0), 4096);
      var $33=$dict;
      _setint($33, ((__str9)|0), 4096);
      var $34=$dict;
      var $35=_my_getpagesize();
      _setint($34, ((__str10)|0), $35);
      var $36=$dict;
      var $37=_my_getpagesize();
      _setint($36, ((__str11)|0), $37);
      var $38=$dict;
      _setint($38, ((__str12)|0), 1);
      var $39=$dict;
      _setint($39, ((__str13)|0), 2);
      var $40=$dict;
      _setint($40, ((__str14)|0), 3);
      label = 10; break;
    case 10: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
Module["_initmmap"] = _initmmap;
function _setint($d, $name, $value) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $o;
      $1=$d;
      $2=$name;
      $3=$value;
      var $4=$3;
      var $5=_PyInt_FromLong($4);
      $o=$5;
      var $6=$o;
      var $7=(($6)|(0))!=0;
      if ($7) { label = 2; break; } else { label = 9; break; }
    case 2: 
      var $9=$1;
      var $10=$2;
      var $11=$o;
      var $12=_PyDict_SetItemString($9, $10, $11);
      var $13=(($12)|(0))==0;
      if ($13) { label = 3; break; } else { label = 9; break; }
    case 3: 
      label = 4; break;
    case 4: 
      var $16=$o;
      var $17=(($16)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=((($18)-(1))|0);
      HEAP32[(($17)>>2)]=$19;
      var $20=(($19)|(0))!=0;
      if ($20) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 7; break;
    case 6: 
      var $23=$o;
      var $24=(($23+4)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=(($25+24)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=$o;
      FUNCTION_TABLE[$27]($28);
      label = 7; break;
    case 7: 
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _my_getpagesize() {
  var label = 0;
  var $1=_sysconf(8);
  return $1;
}
function _mmap_object_dealloc($m_obj) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      $1=$m_obj;
      var $2=$1;
      var $3=(($2+24)|0);
      var $4=HEAP32[(($3)>>2)];
      var $5=(($4)|(0)) >= 0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $7=$1;
      var $8=(($7+24)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=_close($9);
      label = 3; break;
    case 3: 
      var $12=$1;
      var $13=(($12+8)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=(($14)|(0))!=0;
      if ($15) { label = 4; break; } else { label = 8; break; }
    case 4: 
      var $17=$1;
      var $18=(($17+28)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=(($19)|(0))!=1;
      if ($20) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $22=$1;
      var $23=(($22+28)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=(($24)|(0))!=3;
      if ($25) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $27=$1;
      var $28=(($27+8)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=$1;
      var $31=(($30+12)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=_msync($29, $32, 0);
      label = 7; break;
    case 7: 
      var $35=$1;
      var $36=(($35+8)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=$1;
      var $39=(($38+12)|0);
      var $40=HEAP32[(($39)>>2)];
      var $41=_munmap($37, $40);
      label = 8; break;
    case 8: 
      var $43=$1;
      var $44=$43;
      var $45=(($44+4)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=(($46+160)|0);
      var $48=HEAP32[(($47)>>2)];
      var $49=$1;
      var $50=$49;
      var $51=$50;
      FUNCTION_TABLE[$48]($51);
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _new_mmap_object($type, $args, $kwdict) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 96)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $st=__stackBase__;
      var $m_obj;
      var $map_size_obj=(__stackBase__)+(72);
      var $map_size;
      var $offset=(__stackBase__)+(76);
      var $fd=(__stackBase__)+(80);
      var $flags=(__stackBase__)+(84);
      var $prot=(__stackBase__)+(88);
      var $devzero;
      var $access=(__stackBase__)+(92);
      $2=$type;
      $3=$args;
      $4=$kwdict;
      HEAP32[(($map_size_obj)>>2)]=0;
      HEAP32[(($offset)>>2)]=0;
      HEAP32[(($flags)>>2)]=1;
      HEAP32[(($prot)>>2)]=3;
      $devzero=-1;
      HEAP32[(($access)>>2)]=0;
      var $5=$3;
      var $6=$4;
      var $7=__PyArg_ParseTupleAndKeywords_SizeT($5, $6, ((__str22)|0), ((_new_mmap_object_keywords)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 24)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$fd,HEAP32[(((tempInt)+(4))>>2)]=$map_size_obj,HEAP32[(((tempInt)+(8))>>2)]=$flags,HEAP32[(((tempInt)+(12))>>2)]=$prot,HEAP32[(((tempInt)+(16))>>2)]=$access,HEAP32[(((tempInt)+(20))>>2)]=$offset,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 61; break;
    case 3: 
      var $11=HEAP32[(($map_size_obj)>>2)];
      var $12=__GetMapSize($11, ((__str23)|0));
      $map_size=$12;
      var $13=$map_size;
      var $14=(($13)|(0)) < 0;
      if ($14) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 61; break;
    case 5: 
      var $17=HEAP32[(($offset)>>2)];
      var $18=(($17)|(0)) < 0;
      if ($18) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $20=HEAP32[((_PyExc_OverflowError)>>2)];
      _PyErr_SetString($20, ((__str24)|0));
      $1=0;
      label = 61; break;
    case 7: 
      var $22=HEAP32[(($access)>>2)];
      var $23=(($22)|(0))!=0;
      if ($23) { label = 8; break; } else { label = 11; break; }
    case 8: 
      var $25=HEAP32[(($flags)>>2)];
      var $26=(($25)|(0))!=1;
      if ($26) { label = 10; break; } else { label = 9; break; }
    case 9: 
      var $28=HEAP32[(($prot)>>2)];
      var $29=(($28)|(0))!=3;
      if ($29) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $31=HEAP32[((_PyExc_ValueError)>>2)];
      var $32=_PyErr_Format($31, ((__str25)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      $1=$32;
      label = 61; break;
    case 11: 
      var $34=HEAP32[(($access)>>2)];
      if ((($34)|(0))==1) {
        label = 12; break;
      }
      else if ((($34)|(0))==2) {
        label = 13; break;
      }
      else if ((($34)|(0))==3) {
        label = 14; break;
      }
      else if ((($34)|(0))==0) {
        label = 15; break;
      }
      else {
      label = 23; break;
      }
    case 12: 
      HEAP32[(($flags)>>2)]=1;
      HEAP32[(($prot)>>2)]=1;
      label = 24; break;
    case 13: 
      HEAP32[(($flags)>>2)]=1;
      HEAP32[(($prot)>>2)]=3;
      label = 24; break;
    case 14: 
      HEAP32[(($flags)>>2)]=2;
      HEAP32[(($prot)>>2)]=3;
      label = 24; break;
    case 15: 
      var $39=HEAP32[(($prot)>>2)];
      var $40=$39 & 1;
      var $41=(($40)|(0))!=0;
      if ($41) { label = 16; break; } else { label = 18; break; }
    case 16: 
      var $43=HEAP32[(($prot)>>2)];
      var $44=$43 & 2;
      var $45=(($44)|(0))!=0;
      if ($45) { label = 17; break; } else { label = 18; break; }
    case 17: 
      label = 22; break;
    case 18: 
      var $48=HEAP32[(($prot)>>2)];
      var $49=$48 & 2;
      var $50=(($49)|(0))!=0;
      if ($50) { label = 19; break; } else { label = 20; break; }
    case 19: 
      HEAP32[(($access)>>2)]=2;
      label = 21; break;
    case 20: 
      HEAP32[(($access)>>2)]=1;
      label = 21; break;
    case 21: 
      label = 22; break;
    case 22: 
      label = 24; break;
    case 23: 
      var $56=HEAP32[((_PyExc_ValueError)>>2)];
      var $57=_PyErr_Format($56, ((__str26)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      $1=$57;
      label = 61; break;
    case 24: 
      var $59=HEAP32[(($fd)>>2)];
      var $60=(($59)|(0))!=-1;
      if ($60) { label = 25; break; } else { label = 39; break; }
    case 25: 
      var $62=HEAP32[(($fd)>>2)];
      var $63=_fstat($62, $st);
      var $64=(($63)|(0))==0;
      if ($64) { label = 26; break; } else { label = 39; break; }
    case 26: 
      var $66=(($st+8)|0);
      var $67=HEAP32[(($66)>>2)];
      var $68=$67 & 61440;
      var $69=(($68)|(0))==32768;
      if ($69) { label = 27; break; } else { label = 39; break; }
    case 27: 
      var $71=$map_size;
      var $72=(($71)|(0))==0;
      if ($72) { label = 28; break; } else { label = 35; break; }
    case 28: 
      var $74=(($st+28)|0);
      var $75=HEAP32[(($74)>>2)];
      var $76=(($75)|(0))==0;
      if ($76) { label = 29; break; } else { label = 30; break; }
    case 29: 
      var $78=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($78, ((__str27)|0));
      $1=0;
      label = 61; break;
    case 30: 
      var $80=HEAP32[(($offset)>>2)];
      var $81=(($st+28)|0);
      var $82=HEAP32[(($81)>>2)];
      var $83=(($80)|(0)) >= (($82)|(0));
      if ($83) { label = 31; break; } else { label = 32; break; }
    case 31: 
      var $85=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($85, ((__str28)|0));
      $1=0;
      label = 61; break;
    case 32: 
      var $87=(($st+28)|0);
      var $88=HEAP32[(($87)>>2)];
      var $89=HEAP32[(($offset)>>2)];
      var $90=((($88)-($89))|0);
      var $91=(($90)|(0)) > 2147483647;
      if ($91) { label = 33; break; } else { label = 34; break; }
    case 33: 
      var $93=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($93, ((__str29)|0));
      $1=0;
      label = 61; break;
    case 34: 
      var $95=(($st+28)|0);
      var $96=HEAP32[(($95)>>2)];
      var $97=HEAP32[(($offset)>>2)];
      var $98=((($96)-($97))|0);
      $map_size=$98;
      label = 38; break;
    case 35: 
      var $100=HEAP32[(($offset)>>2)];
      var $101=$map_size;
      var $102=((($100)+($101))|0);
      var $103=(($st+28)|0);
      var $104=HEAP32[(($103)>>2)];
      var $105=(($102)>>>(0)) > (($104)>>>(0));
      if ($105) { label = 36; break; } else { label = 37; break; }
    case 36: 
      var $107=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($107, ((__str30)|0));
      $1=0;
      label = 61; break;
    case 37: 
      label = 38; break;
    case 38: 
      label = 39; break;
    case 39: 
      var $111=$2;
      var $112=(($111+152)|0);
      var $113=HEAP32[(($112)>>2)];
      var $114=$2;
      var $115=FUNCTION_TABLE[$113]($114, 0);
      var $116=$115;
      $m_obj=$116;
      var $117=$m_obj;
      var $118=(($117)|(0))==0;
      if ($118) { label = 40; break; } else { label = 41; break; }
    case 40: 
      $1=0;
      label = 61; break;
    case 41: 
      var $121=$m_obj;
      var $122=(($121+8)|0);
      HEAP32[(($122)>>2)]=0;
      var $123=$map_size;
      var $124=$m_obj;
      var $125=(($124+12)|0);
      HEAP32[(($125)>>2)]=$123;
      var $126=$m_obj;
      var $127=(($126+16)|0);
      HEAP32[(($127)>>2)]=0;
      var $128=HEAP32[(($offset)>>2)];
      var $129=$m_obj;
      var $130=(($129+20)|0);
      HEAP32[(($130)>>2)]=$128;
      var $131=HEAP32[(($fd)>>2)];
      var $132=(($131)|(0))==-1;
      if ($132) { label = 42; break; } else { label = 43; break; }
    case 42: 
      var $134=$m_obj;
      var $135=(($134+24)|0);
      HEAP32[(($135)>>2)]=-1;
      var $136=HEAP32[(($flags)>>2)];
      var $137=$136 | 4096;
      HEAP32[(($flags)>>2)]=$137;
      label = 51; break;
    case 43: 
      var $139=HEAP32[(($fd)>>2)];
      var $140=_dup($139);
      var $141=$m_obj;
      var $142=(($141+24)|0);
      HEAP32[(($142)>>2)]=$140;
      var $143=$m_obj;
      var $144=(($143+24)|0);
      var $145=HEAP32[(($144)>>2)];
      var $146=(($145)|(0))==-1;
      if ($146) { label = 44; break; } else { label = 50; break; }
    case 44: 
      label = 45; break;
    case 45: 
      var $149=$m_obj;
      var $150=$149;
      var $151=(($150)|0);
      var $152=HEAP32[(($151)>>2)];
      var $153=((($152)-(1))|0);
      HEAP32[(($151)>>2)]=$153;
      var $154=(($153)|(0))!=0;
      if ($154) { label = 46; break; } else { label = 47; break; }
    case 46: 
      label = 48; break;
    case 47: 
      var $157=$m_obj;
      var $158=$157;
      var $159=(($158+4)|0);
      var $160=HEAP32[(($159)>>2)];
      var $161=(($160+24)|0);
      var $162=HEAP32[(($161)>>2)];
      var $163=$m_obj;
      var $164=$163;
      FUNCTION_TABLE[$162]($164);
      label = 48; break;
    case 48: 
      label = 49; break;
    case 49: 
      var $167=HEAP32[((_mmap_module_error)>>2)];
      var $168=_PyErr_SetFromErrno($167);
      $1=0;
      label = 61; break;
    case 50: 
      label = 51; break;
    case 51: 
      var $171=$map_size;
      var $172=HEAP32[(($prot)>>2)];
      var $173=HEAP32[(($flags)>>2)];
      var $174=HEAP32[(($fd)>>2)];
      var $175=HEAP32[(($offset)>>2)];
      var $176=_mmap(0, $171, $172, $173, $174, $175);
      var $177=$m_obj;
      var $178=(($177+8)|0);
      HEAP32[(($178)>>2)]=$176;
      var $179=$devzero;
      var $180=(($179)|(0))!=-1;
      if ($180) { label = 52; break; } else { label = 53; break; }
    case 52: 
      var $182=$devzero;
      var $183=_close($182);
      label = 53; break;
    case 53: 
      var $185=$m_obj;
      var $186=(($185+8)|0);
      var $187=HEAP32[(($186)>>2)];
      var $188=(($187)|(0))==-1;
      if ($188) { label = 54; break; } else { label = 60; break; }
    case 54: 
      var $190=$m_obj;
      var $191=(($190+8)|0);
      HEAP32[(($191)>>2)]=0;
      label = 55; break;
    case 55: 
      var $193=$m_obj;
      var $194=$193;
      var $195=(($194)|0);
      var $196=HEAP32[(($195)>>2)];
      var $197=((($196)-(1))|0);
      HEAP32[(($195)>>2)]=$197;
      var $198=(($197)|(0))!=0;
      if ($198) { label = 56; break; } else { label = 57; break; }
    case 56: 
      label = 58; break;
    case 57: 
      var $201=$m_obj;
      var $202=$201;
      var $203=(($202+4)|0);
      var $204=HEAP32[(($203)>>2)];
      var $205=(($204+24)|0);
      var $206=HEAP32[(($205)>>2)];
      var $207=$m_obj;
      var $208=$207;
      FUNCTION_TABLE[$206]($208);
      label = 58; break;
    case 58: 
      label = 59; break;
    case 59: 
      var $211=HEAP32[((_mmap_module_error)>>2)];
      var $212=_PyErr_SetFromErrno($211);
      $1=0;
      label = 61; break;
    case 60: 
      var $214=HEAP32[(($access)>>2)];
      var $215=$m_obj;
      var $216=(($215+28)|0);
      HEAP32[(($216)>>2)]=$214;
      var $217=$m_obj;
      var $218=$217;
      $1=$218;
      label = 61; break;
    case 61: 
      var $220=$1;
      STACKTOP = __stackBase__;
      return $220;
    default: assert(0, "bad label: " + label);
  }
}
function __GetMapSize($o, $param) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $i;
      $2=$o;
      $3=$param;
      var $4=$2;
      var $5=(($4)|(0))==0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 13; break;
    case 3: 
      var $8=$2;
      var $9=(($8+4)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10+48)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=(($12)|(0))!=0;
      if ($13) { label = 4; break; } else { label = 12; break; }
    case 4: 
      var $15=$2;
      var $16=(($15+4)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=(($17+84)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=$19 & 131072;
      var $21=(($20)|(0))!=0;
      if ($21) { label = 5; break; } else { label = 12; break; }
    case 5: 
      var $23=$2;
      var $24=(($23+4)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=(($25+48)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=(($27+152)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=(($29)|(0))!=0;
      if ($30) { label = 6; break; } else { label = 12; break; }
    case 6: 
      var $32=$2;
      var $33=HEAP32[((_PyExc_OverflowError)>>2)];
      var $34=_PyNumber_AsSsize_t($32, $33);
      $i=$34;
      var $35=$i;
      var $36=(($35)|(0))==-1;
      if ($36) { label = 7; break; } else { label = 9; break; }
    case 7: 
      var $38=_PyErr_Occurred();
      var $39=(($38)|(0))!=0;
      if ($39) { label = 8; break; } else { label = 9; break; }
    case 8: 
      $1=-1;
      label = 13; break;
    case 9: 
      var $42=$i;
      var $43=(($42)|(0)) < 0;
      if ($43) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $45=HEAP32[((_PyExc_OverflowError)>>2)];
      var $46=$3;
      var $47=_PyErr_Format($45, ((__str31)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$46,tempInt));
      $1=-1;
      label = 13; break;
    case 11: 
      var $49=$i;
      $1=$49;
      label = 13; break;
    case 12: 
      var $51=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($51, ((__str32)|0));
      $1=-1;
      label = 13; break;
    case 13: 
      var $53=$1;
      STACKTOP = __stackBase__;
      return $53;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_close_method($self, $unused) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $1=$self;
      $2=$unused;
      var $3=$1;
      var $4=(($3+24)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=0 <= (($5)|(0));
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $8=$1;
      var $9=(($8+24)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=_close($10);
      label = 3; break;
    case 3: 
      var $13=$1;
      var $14=(($13+24)|0);
      HEAP32[(($14)>>2)]=-1;
      var $15=$1;
      var $16=(($15+8)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=(($17)|(0))!=0;
      if ($18) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $20=$1;
      var $21=(($20+8)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=$1;
      var $24=(($23+12)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=_munmap($22, $25);
      var $27=$1;
      var $28=(($27+8)|0);
      HEAP32[(($28)>>2)]=0;
      label = 5; break;
    case 5: 
      var $30=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $31=((($30)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$31;
      return __Py_NoneStruct;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_find_method($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$1;
  var $4=$2;
  var $5=_mmap_gfind($3, $4, 0);
  return $5;
}
function _mmap_rfind_method($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$1;
  var $4=$2;
  var $5=_mmap_gfind($3, $4, 1);
  return $5;
}
function _mmap_flush_method($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $offset=__stackBase__;
      var $size=(__stackBase__)+(4);
      $2=$self;
      $3=$args;
      HEAP32[(($offset)>>2)]=0;
      var $4=$2;
      var $5=(($4+12)|0);
      var $6=HEAP32[(($5)>>2)];
      HEAP32[(($size)>>2)]=$6;
      label = 2; break;
    case 2: 
      var $8=$2;
      var $9=(($8+8)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10)|(0))==0;
      if ($11) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $13=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($13, ((__str46)|0));
      $1=0;
      label = 15; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $16=$3;
      var $17=__PyArg_ParseTuple_SizeT($16, ((__str65)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$offset,HEAP32[(((tempInt)+(4))>>2)]=$size,tempInt));
      var $18=(($17)|(0))!=0;
      if ($18) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=0;
      label = 15; break;
    case 7: 
      var $21=HEAP32[(($offset)>>2)];
      var $22=HEAP32[(($size)>>2)];
      var $23=((($21)+($22))|0);
      var $24=$2;
      var $25=(($24+12)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=(($23)>>>(0)) > (($26)>>>(0));
      if ($27) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $29=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($29, ((__str66)|0));
      $1=0;
      label = 15; break;
    case 9: 
      var $31=$2;
      var $32=(($31+28)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=(($33)|(0))==1;
      if ($34) { label = 11; break; } else { label = 10; break; }
    case 10: 
      var $36=$2;
      var $37=(($36+28)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=(($38)|(0))==3;
      if ($39) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $41=_PyLong_FromLong(0);
      $1=$41;
      label = 15; break;
    case 12: 
      var $43=$2;
      var $44=(($43+8)|0);
      var $45=HEAP32[(($44)>>2)];
      var $46=HEAP32[(($offset)>>2)];
      var $47=(($45+$46)|0);
      var $48=HEAP32[(($size)>>2)];
      var $49=_msync($47, $48, 0);
      var $50=-1==(($49)|(0));
      if ($50) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $52=HEAP32[((_mmap_module_error)>>2)];
      var $53=_PyErr_SetFromErrno($52);
      $1=0;
      label = 15; break;
    case 14: 
      var $55=_PyInt_FromLong(0);
      $1=$55;
      label = 15; break;
    case 15: 
      var $57=$1;
      STACKTOP = __stackBase__;
      return $57;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_move_method($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 12)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $dest=__stackBase__;
      var $src=(__stackBase__)+(4);
      var $cnt=(__stackBase__)+(8);
      $2=$self;
      $3=$args;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=0;
      label = 19; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=$3;
      var $14=__PyArg_ParseTuple_SizeT($13, ((__str63)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 12)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$dest,HEAP32[(((tempInt)+(4))>>2)]=$src,HEAP32[(((tempInt)+(8))>>2)]=$cnt,tempInt));
      var $15=(($14)|(0))!=0;
      if ($15) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $17=$2;
      var $18=_is_writeable($17);
      var $19=(($18)|(0))!=0;
      if ($19) { label = 8; break; } else { label = 7; break; }
    case 7: 
      $1=0;
      label = 19; break;
    case 8: 
      var $22=HEAP32[(($cnt)>>2)];
      var $23=(($22)>>>(0)) < 0;
      if ($23) { label = 17; break; } else { label = 9; break; }
    case 9: 
      var $25=HEAP32[(($cnt)>>2)];
      var $26=HEAP32[(($dest)>>2)];
      var $27=((($25)+($26))|0);
      var $28=HEAP32[(($cnt)>>2)];
      var $29=(($27)>>>(0)) < (($28)>>>(0));
      if ($29) { label = 17; break; } else { label = 10; break; }
    case 10: 
      var $31=HEAP32[(($cnt)>>2)];
      var $32=HEAP32[(($src)>>2)];
      var $33=((($31)+($32))|0);
      var $34=HEAP32[(($cnt)>>2)];
      var $35=(($33)>>>(0)) < (($34)>>>(0));
      if ($35) { label = 17; break; } else { label = 11; break; }
    case 11: 
      var $37=HEAP32[(($src)>>2)];
      var $38=(($37)>>>(0)) < 0;
      if ($38) { label = 17; break; } else { label = 12; break; }
    case 12: 
      var $40=HEAP32[(($src)>>2)];
      var $41=$2;
      var $42=(($41+12)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=(($40)>>>(0)) > (($43)>>>(0));
      if ($44) { label = 17; break; } else { label = 13; break; }
    case 13: 
      var $46=HEAP32[(($src)>>2)];
      var $47=HEAP32[(($cnt)>>2)];
      var $48=((($46)+($47))|0);
      var $49=$2;
      var $50=(($49+12)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=(($48)>>>(0)) > (($51)>>>(0));
      if ($52) { label = 17; break; } else { label = 14; break; }
    case 14: 
      var $54=HEAP32[(($dest)>>2)];
      var $55=(($54)>>>(0)) < 0;
      if ($55) { label = 17; break; } else { label = 15; break; }
    case 15: 
      var $57=HEAP32[(($dest)>>2)];
      var $58=$2;
      var $59=(($58+12)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=(($57)>>>(0)) > (($60)>>>(0));
      if ($61) { label = 17; break; } else { label = 16; break; }
    case 16: 
      var $63=HEAP32[(($dest)>>2)];
      var $64=HEAP32[(($cnt)>>2)];
      var $65=((($63)+($64))|0);
      var $66=$2;
      var $67=(($66+12)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=(($65)>>>(0)) > (($68)>>>(0));
      if ($69) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $71=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($71, ((__str64)|0));
      $1=0;
      label = 19; break;
    case 18: 
      var $73=$2;
      var $74=(($73+8)|0);
      var $75=HEAP32[(($74)>>2)];
      var $76=HEAP32[(($dest)>>2)];
      var $77=(($75+$76)|0);
      var $78=$2;
      var $79=(($78+8)|0);
      var $80=HEAP32[(($79)>>2)];
      var $81=HEAP32[(($src)>>2)];
      var $82=(($80+$81)|0);
      var $83=HEAP32[(($cnt)>>2)];
      _memmove($77, $82, $83, 1, 0);
      var $84=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $85=((($84)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$85;
      $1=__Py_NoneStruct;
      label = 19; break;
    case 19: 
      var $87=$1;
      STACKTOP = __stackBase__;
      return $87;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_read_byte_method($self, $unused) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $value;
      $2=$self;
      $3=$unused;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=0;
      label = 8; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=$2;
      var $14=(($13+16)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=$2;
      var $17=(($16+12)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($15)>>>(0)) < (($18)>>>(0));
      if ($19) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $21=$2;
      var $22=(($21+16)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=$2;
      var $25=(($24+8)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=(($26+$23)|0);
      var $28=HEAP8[($27)];
      $value=$28;
      var $29=$2;
      var $30=(($29+16)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=((($31)+(1))|0);
      HEAP32[(($30)>>2)]=$32;
      var $33=$value;
      var $34=(($33 << 24) >> 24);
      var $35=__Py_BuildValue_SizeT(((__str57)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$34,tempInt));
      $1=$35;
      label = 8; break;
    case 7: 
      var $37=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($37, ((__str58)|0));
      $1=0;
      label = 8; break;
    case 8: 
      var $39=$1;
      STACKTOP = __stackBase__;
      return $39;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_read_line_method($self, $unused) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $start;
      var $eof;
      var $eol;
      var $result;
      $2=$self;
      $3=$unused;
      var $4=$2;
      var $5=(($4+8)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=$2;
      var $8=(($7+16)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=(($6+$9)|0);
      $start=$10;
      var $11=$2;
      var $12=(($11+8)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=$2;
      var $15=(($14+12)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=(($13+$16)|0);
      $eof=$17;
      label = 2; break;
    case 2: 
      var $19=$2;
      var $20=(($19+8)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=(($21)|(0))==0;
      if ($22) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $24=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($24, ((__str46)|0));
      $1=0;
      label = 9; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $27=$start;
      var $28=$2;
      var $29=(($28+12)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$2;
      var $32=(($31+16)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=((($30)-($33))|0);
      var $35=_memchr($27, 10, $34);
      $eol=$35;
      var $36=$eol;
      var $37=(($36)|(0))!=0;
      if ($37) { label = 7; break; } else { label = 6; break; }
    case 6: 
      var $39=$eof;
      $eol=$39;
      label = 8; break;
    case 7: 
      var $41=$eol;
      var $42=(($41+1)|0);
      $eol=$42;
      label = 8; break;
    case 8: 
      var $44=$start;
      var $45=$eol;
      var $46=$start;
      var $47=$45;
      var $48=$46;
      var $49=((($47)-($48))|0);
      var $50=_PyString_FromStringAndSize($44, $49);
      $result=$50;
      var $51=$eol;
      var $52=$start;
      var $53=$51;
      var $54=$52;
      var $55=((($53)-($54))|0);
      var $56=$2;
      var $57=(($56+16)|0);
      var $58=HEAP32[(($57)>>2)];
      var $59=((($58)+($55))|0);
      HEAP32[(($57)>>2)]=$59;
      var $60=$result;
      $1=$60;
      label = 9; break;
    case 9: 
      var $62=$1;
      return $62;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_resize_method($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $new_size=__stackBase__;
      var $newmap;
      $2=$self;
      $3=$args;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=0;
      label = 13; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=$3;
      var $14=__PyArg_ParseTuple_SizeT($13, ((__str55)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$new_size,tempInt));
      var $15=(($14)|(0))!=0;
      if ($15) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $17=$2;
      var $18=_is_resizeable($17);
      var $19=(($18)|(0))!=0;
      if ($19) { label = 8; break; } else { label = 7; break; }
    case 7: 
      $1=0;
      label = 13; break;
    case 8: 
      var $22=$2;
      var $23=(($22+24)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$2;
      var $26=(($25+20)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=HEAP32[(($new_size)>>2)];
      var $29=((($27)+($28))|0);
      var $30=_ftruncate($24, $29);
      var $31=(($30)|(0))==-1;
      if ($31) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $33=HEAP32[((_mmap_module_error)>>2)];
      var $34=_PyErr_SetFromErrno($33);
      $1=0;
      label = 13; break;
    case 10: 
      var $36=$2;
      var $37=(($36+8)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=$2;
      var $40=(($39+12)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=HEAP32[(($new_size)>>2)];
      var $43=_mremap($38, $41, $42, 0);
      $newmap=$43;
      var $44=$newmap;
      var $45=(($44)|(0))==-1;
      if ($45) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $47=HEAP32[((_mmap_module_error)>>2)];
      var $48=_PyErr_SetFromErrno($47);
      $1=0;
      label = 13; break;
    case 12: 
      var $50=$newmap;
      var $51=$2;
      var $52=(($51+8)|0);
      HEAP32[(($52)>>2)]=$50;
      var $53=HEAP32[(($new_size)>>2)];
      var $54=$2;
      var $55=(($54+12)|0);
      HEAP32[(($55)>>2)]=$53;
      var $56=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $57=((($56)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$57;
      $1=__Py_NoneStruct;
      label = 13; break;
    case 13: 
      var $59=$1;
      STACKTOP = __stackBase__;
      return $59;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_seek_method($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $dist=__stackBase__;
      var $how=(__stackBase__)+(4);
      var $where;
      $2=$self;
      $3=$args;
      HEAP32[(($how)>>2)]=0;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=0;
      label = 22; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=$3;
      var $14=__PyArg_ParseTuple_SizeT($13, ((__str52)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$dist,HEAP32[(((tempInt)+(4))>>2)]=$how,tempInt));
      var $15=(($14)|(0))!=0;
      if ($15) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=0;
      label = 22; break;
    case 7: 
      var $18=HEAP32[(($how)>>2)];
      if ((($18)|(0))==0) {
        label = 8; break;
      }
      else if ((($18)|(0))==1) {
        label = 11; break;
      }
      else if ((($18)|(0))==2) {
        label = 14; break;
      }
      else {
      label = 17; break;
      }
    case 8: 
      var $20=HEAP32[(($dist)>>2)];
      var $21=(($20)|(0)) < 0;
      if ($21) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 21; break;
    case 10: 
      var $24=HEAP32[(($dist)>>2)];
      $where=$24;
      label = 18; break;
    case 11: 
      var $26=$2;
      var $27=(($26+16)|0);
      var $28=HEAP32[(($27)>>2)];
      var $29=HEAP32[(($dist)>>2)];
      var $30=((($28)+($29))|0);
      var $31=(($30)|(0)) < 0;
      if ($31) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 21; break;
    case 13: 
      var $34=$2;
      var $35=(($34+16)|0);
      var $36=HEAP32[(($35)>>2)];
      var $37=HEAP32[(($dist)>>2)];
      var $38=((($36)+($37))|0);
      $where=$38;
      label = 18; break;
    case 14: 
      var $40=$2;
      var $41=(($40+12)|0);
      var $42=HEAP32[(($41)>>2)];
      var $43=HEAP32[(($dist)>>2)];
      var $44=((($42)+($43))|0);
      var $45=(($44)|(0)) < 0;
      if ($45) { label = 15; break; } else { label = 16; break; }
    case 15: 
      label = 21; break;
    case 16: 
      var $48=$2;
      var $49=(($48+12)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=HEAP32[(($dist)>>2)];
      var $52=((($50)+($51))|0);
      $where=$52;
      label = 18; break;
    case 17: 
      var $54=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($54, ((__str53)|0));
      $1=0;
      label = 22; break;
    case 18: 
      var $56=$where;
      var $57=$2;
      var $58=(($57+12)|0);
      var $59=HEAP32[(($58)>>2)];
      var $60=(($56)>>>(0)) > (($59)>>>(0));
      if ($60) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 21; break;
    case 20: 
      var $63=$where;
      var $64=$2;
      var $65=(($64+16)|0);
      HEAP32[(($65)>>2)]=$63;
      var $66=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $67=((($66)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$67;
      $1=__Py_NoneStruct;
      label = 22; break;
    case 21: 
      var $69=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($69, ((__str54)|0));
      $1=0;
      label = 22; break;
    case 22: 
      var $71=$1;
      STACKTOP = __stackBase__;
      return $71;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_size_method($self, $unused) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 72)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $buf=__stackBase__;
      $2=$self;
      $3=$unused;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=0;
      label = 8; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=$2;
      var $14=(($13+24)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=_fstat($15, $buf);
      var $17=-1==(($16)|(0));
      if ($17) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $19=HEAP32[((_mmap_module_error)>>2)];
      var $20=_PyErr_SetFromErrno($19);
      $1=0;
      label = 8; break;
    case 7: 
      var $22=(($buf+28)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=_PyInt_FromLong($23);
      $1=$24;
      label = 8; break;
    case 8: 
      var $26=$1;
      STACKTOP = __stackBase__;
      return $26;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_tell_method($self, $unused) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $2=$self;
      $3=$unused;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=0;
      label = 6; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=$2;
      var $14=(($13+16)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=_PyInt_FromSize_t($15);
      $1=$16;
      label = 6; break;
    case 6: 
      var $18=$1;
      return $18;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_write_method($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $length=__stackBase__;
      var $data=(__stackBase__)+(4);
      $2=$self;
      $3=$args;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=0;
      label = 12; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=$3;
      var $14=__PyArg_ParseTuple_SizeT($13, ((__str50)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$data,HEAP32[(((tempInt)+(4))>>2)]=$length,tempInt));
      var $15=(($14)|(0))!=0;
      if ($15) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=0;
      label = 12; break;
    case 7: 
      var $18=$2;
      var $19=_is_writeable($18);
      var $20=(($19)|(0))!=0;
      if ($20) { label = 9; break; } else { label = 8; break; }
    case 8: 
      $1=0;
      label = 12; break;
    case 9: 
      var $23=$2;
      var $24=(($23+16)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=HEAP32[(($length)>>2)];
      var $27=((($25)+($26))|0);
      var $28=$2;
      var $29=(($28+12)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=(($27)>>>(0)) > (($30)>>>(0));
      if ($31) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $33=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($33, ((__str51)|0));
      $1=0;
      label = 12; break;
    case 11: 
      var $35=$2;
      var $36=(($35+8)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=$2;
      var $39=(($38+16)|0);
      var $40=HEAP32[(($39)>>2)];
      var $41=(($37+$40)|0);
      var $42=HEAP32[(($data)>>2)];
      var $43=HEAP32[(($length)>>2)];
      assert($43 % 1 === 0);_memcpy($41, $42, $43);
      var $44=$2;
      var $45=(($44+16)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=HEAP32[(($length)>>2)];
      var $48=((($46)+($47))|0);
      var $49=$2;
      var $50=(($49+16)|0);
      HEAP32[(($50)>>2)]=$48;
      var $51=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $52=((($51)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$52;
      $1=__Py_NoneStruct;
      label = 12; break;
    case 12: 
      var $54=$1;
      STACKTOP = __stackBase__;
      return $54;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_write_byte_method($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $value=__stackBase__;
      $2=$self;
      $3=$args;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=0;
      label = 12; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=$3;
      var $14=__PyArg_ParseTuple_SizeT($13, ((__str47)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$value,tempInt));
      var $15=(($14)|(0))!=0;
      if ($15) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=0;
      label = 12; break;
    case 7: 
      var $18=$2;
      var $19=_is_writeable($18);
      var $20=(($19)|(0))!=0;
      if ($20) { label = 9; break; } else { label = 8; break; }
    case 8: 
      $1=0;
      label = 12; break;
    case 9: 
      var $23=$2;
      var $24=(($23+16)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=$2;
      var $27=(($26+12)|0);
      var $28=HEAP32[(($27)>>2)];
      var $29=(($25)>>>(0)) < (($28)>>>(0));
      if ($29) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $31=HEAP8[($value)];
      var $32=$2;
      var $33=(($32+8)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=$2;
      var $36=(($35+16)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=(($34+$37)|0);
      HEAP8[($38)]=$31;
      var $39=$2;
      var $40=(($39+16)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=((($41)+(1))|0);
      HEAP32[(($40)>>2)]=$42;
      var $43=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $44=((($43)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$44;
      $1=__Py_NoneStruct;
      label = 12; break;
    case 11: 
      var $46=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($46, ((__str48)|0));
      $1=0;
      label = 12; break;
    case 12: 
      var $48=$1;
      STACKTOP = __stackBase__;
      return $48;
    default: assert(0, "bad label: " + label);
  }
}
function _is_writeable($self) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$self;
      var $3=$2;
      var $4=(($3+28)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))!=1;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=1;
      label = 4; break;
    case 3: 
      var $9=HEAP32[((_PyExc_TypeError)>>2)];
      var $10=_PyErr_Format($9, ((__str49)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      $1=0;
      label = 4; break;
    case 4: 
      var $12=$1;
      STACKTOP = __stackBase__;
      return $12;
    default: assert(0, "bad label: " + label);
  }
}
function _is_resizeable($self) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$self;
      var $3=$2;
      var $4=(($3+28)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))==2;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $8=$2;
      var $9=(($8+28)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10)|(0))==0;
      if ($11) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=1;
      label = 5; break;
    case 4: 
      var $14=HEAP32[((_PyExc_TypeError)>>2)];
      var $15=_PyErr_Format($14, ((__str56)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      $1=0;
      label = 5; break;
    case 5: 
      var $17=$1;
      STACKTOP = __stackBase__;
      return $17;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_read_method($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $num_bytes=__stackBase__;
      var $n;
      var $result;
      $2=$self;
      $3=$args;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=0;
      label = 16; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=$3;
      var $14=__PyArg_ParseTuple_SizeT($13, ((__str59)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$num_bytes,tempInt));
      var $15=(($14)|(0))!=0;
      if ($15) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=0;
      label = 16; break;
    case 7: 
      var $18=$2;
      var $19=(($18+12)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=$2;
      var $22=(($21+16)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($20)>>>(0)) >= (($23)>>>(0));
      if ($24) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 10; break;
    case 9: 
      ___assert_func(((__str60)|0), 251, ((___func___mmap_read_method)|0), ((__str61)|0));
      throw "Reached an unreachable!";
      label = 10; break;
    case 10: 
      var $29=$2;
      var $30=(($29+12)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=$2;
      var $33=(($32+16)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=((($31)-($34))|0);
      $n=$35;
      var $36=$n;
      var $37=(($36)|(0)) < 0;
      if ($37) { label = 11; break; } else { label = 12; break; }
    case 11: 
      $n=2147483647;
      label = 12; break;
    case 12: 
      var $40=HEAP32[(($num_bytes)>>2)];
      var $41=(($40)|(0)) < 0;
      if ($41) { label = 14; break; } else { label = 13; break; }
    case 13: 
      var $43=HEAP32[(($num_bytes)>>2)];
      var $44=$n;
      var $45=(($43)|(0)) > (($44)|(0));
      if ($45) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $47=$n;
      HEAP32[(($num_bytes)>>2)]=$47;
      label = 15; break;
    case 15: 
      var $49=$2;
      var $50=(($49+8)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=$2;
      var $53=(($52+16)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=(($51+$54)|0);
      var $56=HEAP32[(($num_bytes)>>2)];
      var $57=__Py_BuildValue_SizeT(((__str62)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$55,HEAP32[(((tempInt)+(4))>>2)]=$56,tempInt));
      $result=$57;
      var $58=HEAP32[(($num_bytes)>>2)];
      var $59=$2;
      var $60=(($59+16)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=((($61)+($58))|0);
      HEAP32[(($60)>>2)]=$62;
      var $63=$result;
      $1=$63;
      label = 16; break;
    case 16: 
      var $65=$1;
      STACKTOP = __stackBase__;
      return $65;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_gfind($self, $args, $reverse) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $start=__stackBase__;
      var $end=(__stackBase__)+(4);
      var $needle=(__stackBase__)+(8);
      var $len=(__stackBase__)+(12);
      var $p;
      var $start_p;
      var $end_p;
      var $sign;
      var $i;
      $2=$self;
      $3=$args;
      $4=$reverse;
      var $5=$2;
      var $6=(($5+16)|0);
      var $7=HEAP32[(($6)>>2)];
      HEAP32[(($start)>>2)]=$7;
      var $8=$2;
      var $9=(($8+12)|0);
      var $10=HEAP32[(($9)>>2)];
      HEAP32[(($end)>>2)]=$10;
      label = 2; break;
    case 2: 
      var $12=$2;
      var $13=(($12+8)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=(($14)|(0))==0;
      if ($15) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $17=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($17, ((__str46)|0));
      $1=0;
      label = 39; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $20=$3;
      var $21=$4;
      var $22=(($21)|(0))!=0;
      var $23=$22 ? (((__str67)|0)) : (((__str68)|0));
      var $24=__PyArg_ParseTuple_SizeT($20, $23, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$needle,HEAP32[(((tempInt)+(4))>>2)]=$len,HEAP32[(((tempInt)+(8))>>2)]=$start,HEAP32[(((tempInt)+(12))>>2)]=$end,tempInt));
      var $25=(($24)|(0))!=0;
      if ($25) { label = 7; break; } else { label = 6; break; }
    case 6: 
      $1=0;
      label = 39; break;
    case 7: 
      var $28=$4;
      var $29=(($28)|(0))!=0;
      var $30=$29 ? -1 : 1;
      $sign=$30;
      var $31=HEAP32[(($start)>>2)];
      var $32=(($31)|(0)) < 0;
      if ($32) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $34=$2;
      var $35=(($34+12)|0);
      var $36=HEAP32[(($35)>>2)];
      var $37=HEAP32[(($start)>>2)];
      var $38=((($37)+($36))|0);
      HEAP32[(($start)>>2)]=$38;
      label = 9; break;
    case 9: 
      var $40=HEAP32[(($start)>>2)];
      var $41=(($40)|(0)) < 0;
      if ($41) { label = 10; break; } else { label = 11; break; }
    case 10: 
      HEAP32[(($start)>>2)]=0;
      label = 14; break;
    case 11: 
      var $44=HEAP32[(($start)>>2)];
      var $45=$2;
      var $46=(($45+12)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=(($44)>>>(0)) > (($47)>>>(0));
      if ($48) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $50=$2;
      var $51=(($50+12)|0);
      var $52=HEAP32[(($51)>>2)];
      HEAP32[(($start)>>2)]=$52;
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      var $55=HEAP32[(($end)>>2)];
      var $56=(($55)|(0)) < 0;
      if ($56) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $58=$2;
      var $59=(($58+12)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=HEAP32[(($end)>>2)];
      var $62=((($61)+($60))|0);
      HEAP32[(($end)>>2)]=$62;
      label = 16; break;
    case 16: 
      var $64=HEAP32[(($end)>>2)];
      var $65=(($64)|(0)) < 0;
      if ($65) { label = 17; break; } else { label = 18; break; }
    case 17: 
      HEAP32[(($end)>>2)]=0;
      label = 21; break;
    case 18: 
      var $68=HEAP32[(($end)>>2)];
      var $69=$2;
      var $70=(($69+12)|0);
      var $71=HEAP32[(($70)>>2)];
      var $72=(($68)>>>(0)) > (($71)>>>(0));
      if ($72) { label = 19; break; } else { label = 20; break; }
    case 19: 
      var $74=$2;
      var $75=(($74+12)|0);
      var $76=HEAP32[(($75)>>2)];
      HEAP32[(($end)>>2)]=$76;
      label = 20; break;
    case 20: 
      label = 21; break;
    case 21: 
      var $79=$2;
      var $80=(($79+8)|0);
      var $81=HEAP32[(($80)>>2)];
      var $82=HEAP32[(($start)>>2)];
      var $83=(($81+$82)|0);
      $start_p=$83;
      var $84=$2;
      var $85=(($84+8)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=HEAP32[(($end)>>2)];
      var $88=(($86+$87)|0);
      $end_p=$88;
      var $89=$4;
      var $90=(($89)|(0))!=0;
      if ($90) { label = 22; break; } else { label = 23; break; }
    case 22: 
      var $92=$end_p;
      var $93=HEAP32[(($len)>>2)];
      var $94=(((-$93))|0);
      var $95=(($92+$94)|0);
      var $99 = $95;label = 24; break;
    case 23: 
      var $97=$start_p;
      var $99 = $97;label = 24; break;
    case 24: 
      var $99;
      $p=$99;
      label = 25; break;
    case 25: 
      var $101=$p;
      var $102=$start_p;
      var $103=(($101)>>>(0)) >= (($102)>>>(0));
      if ($103) { label = 26; break; } else { var $111 = 0;label = 27; break; }
    case 26: 
      var $105=$p;
      var $106=HEAP32[(($len)>>2)];
      var $107=(($105+$106)|0);
      var $108=$end_p;
      var $109=(($107)>>>(0)) <= (($108)>>>(0));
      var $111 = $109;label = 27; break;
    case 27: 
      var $111;
      if ($111) { label = 28; break; } else { label = 38; break; }
    case 28: 
      $i=0;
      label = 29; break;
    case 29: 
      var $114=$i;
      var $115=HEAP32[(($len)>>2)];
      var $116=(($114)|(0)) < (($115)|(0));
      if ($116) { label = 30; break; } else { var $130 = 0;label = 31; break; }
    case 30: 
      var $118=$i;
      var $119=HEAP32[(($needle)>>2)];
      var $120=(($119+$118)|0);
      var $121=HEAP8[($120)];
      var $122=(($121 << 24) >> 24);
      var $123=$i;
      var $124=$p;
      var $125=(($124+$123)|0);
      var $126=HEAP8[($125)];
      var $127=(($126 << 24) >> 24);
      var $128=(($122)|(0))==(($127)|(0));
      var $130 = $128;label = 31; break;
    case 31: 
      var $130;
      if ($130) { label = 32; break; } else { label = 34; break; }
    case 32: 
      label = 33; break;
    case 33: 
      var $133=$i;
      var $134=((($133)+(1))|0);
      $i=$134;
      label = 29; break;
    case 34: 
      var $136=$i;
      var $137=HEAP32[(($len)>>2)];
      var $138=(($136)|(0))==(($137)|(0));
      if ($138) { label = 35; break; } else { label = 36; break; }
    case 35: 
      var $140=$p;
      var $141=$2;
      var $142=(($141+8)|0);
      var $143=HEAP32[(($142)>>2)];
      var $144=$140;
      var $145=$143;
      var $146=((($144)-($145))|0);
      var $147=_PyInt_FromSsize_t($146);
      $1=$147;
      label = 39; break;
    case 36: 
      label = 37; break;
    case 37: 
      var $150=$sign;
      var $151=$p;
      var $152=(($151+$150)|0);
      $p=$152;
      label = 25; break;
    case 38: 
      var $154=_PyInt_FromLong(-1);
      $1=$154;
      label = 39; break;
    case 39: 
      var $156=$1;
      STACKTOP = __stackBase__;
      return $156;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_buffer_getreadbuf($self, $index, $ptr) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      $2=$self;
      $3=$index;
      $4=$ptr;
      label = 2; break;
    case 2: 
      var $6=$2;
      var $7=(($6+8)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=(($8)|(0))==0;
      if ($9) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $11=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($11, ((__str46)|0));
      $1=-1;
      label = 8; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $14=$3;
      var $15=(($14)|(0))!=0;
      if ($15) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $17=HEAP32[((_PyExc_SystemError)>>2)];
      _PyErr_SetString($17, ((__str70)|0));
      $1=-1;
      label = 8; break;
    case 7: 
      var $19=$2;
      var $20=(($19+8)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=$4;
      HEAP32[(($22)>>2)]=$21;
      var $23=$2;
      var $24=(($23+12)|0);
      var $25=HEAP32[(($24)>>2)];
      $1=$25;
      label = 8; break;
    case 8: 
      var $27=$1;
      return $27;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_buffer_getwritebuf($self, $index, $ptr) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      $2=$self;
      $3=$index;
      $4=$ptr;
      label = 2; break;
    case 2: 
      var $6=$2;
      var $7=(($6+8)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=(($8)|(0))==0;
      if ($9) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $11=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($11, ((__str46)|0));
      $1=-1;
      label = 10; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $14=$3;
      var $15=(($14)|(0))!=0;
      if ($15) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $17=HEAP32[((_PyExc_SystemError)>>2)];
      _PyErr_SetString($17, ((__str70)|0));
      $1=-1;
      label = 10; break;
    case 7: 
      var $19=$2;
      var $20=_is_writeable($19);
      var $21=(($20)|(0))!=0;
      if ($21) { label = 9; break; } else { label = 8; break; }
    case 8: 
      $1=-1;
      label = 10; break;
    case 9: 
      var $24=$2;
      var $25=(($24+8)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=$4;
      HEAP32[(($27)>>2)]=$26;
      var $28=$2;
      var $29=(($28+12)|0);
      var $30=HEAP32[(($29)>>2)];
      $1=$30;
      label = 10; break;
    case 10: 
      var $32=$1;
      return $32;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_buffer_getsegcount($self, $lenp) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $2=$self;
      $3=$lenp;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=-1;
      label = 8; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=$3;
      var $14=(($13)|(0))!=0;
      if ($14) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $16=$2;
      var $17=(($16+12)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=$3;
      HEAP32[(($19)>>2)]=$18;
      label = 7; break;
    case 7: 
      $1=1;
      label = 8; break;
    case 8: 
      var $22=$1;
      return $22;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_buffer_getcharbuffer($self, $index, $ptr) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      $2=$self;
      $3=$index;
      $4=$ptr;
      var $5=$3;
      var $6=(($5)|(0))!=0;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $8=HEAP32[((_PyExc_SystemError)>>2)];
      _PyErr_SetString($8, ((__str69)|0));
      $1=-1;
      label = 4; break;
    case 3: 
      var $10=$2;
      var $11=(($10+8)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=$4;
      HEAP32[(($13)>>2)]=$12;
      var $14=$2;
      var $15=(($14+12)|0);
      var $16=HEAP32[(($15)>>2)];
      $1=$16;
      label = 4; break;
    case 4: 
      var $18=$1;
      return $18;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_length($self) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$self;
      label = 2; break;
    case 2: 
      var $4=$2;
      var $5=(($4+8)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6)|(0))==0;
      if ($7) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $9=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($9, ((__str46)|0));
      $1=-1;
      label = 6; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $12=$2;
      var $13=(($12+12)|0);
      var $14=HEAP32[(($13)>>2)];
      $1=$14;
      label = 6; break;
    case 6: 
      var $16=$1;
      return $16;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_subscript($self, $item) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $i;
      var $start=__stackBase__;
      var $stop=(__stackBase__)+(4);
      var $step=(__stackBase__)+(8);
      var $slicelen=(__stackBase__)+(12);
      var $result_buf;
      var $cur;
      var $i1;
      var $result;
      $2=$self;
      $3=$item;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=0;
      label = 32; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=$3;
      var $14=(($13+4)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=(($15+48)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=(($17)|(0))!=0;
      if ($18) { label = 6; break; } else { label = 17; break; }
    case 6: 
      var $20=$3;
      var $21=(($20+4)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=(($22+84)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$24 & 131072;
      var $26=(($25)|(0))!=0;
      if ($26) { label = 7; break; } else { label = 17; break; }
    case 7: 
      var $28=$3;
      var $29=(($28+4)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=(($30+48)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32+152)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=(($34)|(0))!=0;
      if ($35) { label = 8; break; } else { label = 17; break; }
    case 8: 
      var $37=$3;
      var $38=HEAP32[((_PyExc_IndexError)>>2)];
      var $39=_PyNumber_AsSsize_t($37, $38);
      $i=$39;
      var $40=$i;
      var $41=(($40)|(0))==-1;
      if ($41) { label = 9; break; } else { label = 11; break; }
    case 9: 
      var $43=_PyErr_Occurred();
      var $44=(($43)|(0))!=0;
      if ($44) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=0;
      label = 32; break;
    case 11: 
      var $47=$i;
      var $48=(($47)|(0)) < 0;
      if ($48) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $50=$2;
      var $51=(($50+12)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=$i;
      var $54=((($53)+($52))|0);
      $i=$54;
      label = 13; break;
    case 13: 
      var $56=$i;
      var $57=(($56)|(0)) < 0;
      if ($57) { label = 15; break; } else { label = 14; break; }
    case 14: 
      var $59=$i;
      var $60=$2;
      var $61=(($60+12)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=(($59)>>>(0)) >= (($62)>>>(0));
      if ($63) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $65=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($65, ((__str71)|0));
      $1=0;
      label = 32; break;
    case 16: 
      var $67=$2;
      var $68=(($67+8)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=$i;
      var $71=(($69+$70)|0);
      var $72=_PyString_FromStringAndSize($71, 1);
      $1=$72;
      label = 32; break;
    case 17: 
      var $74=$3;
      var $75=(($74+4)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=(($76)|(0))==((_PySlice_Type)|(0));
      if ($77) { label = 18; break; } else { label = 31; break; }
    case 18: 
      var $79=$3;
      var $80=$79;
      var $81=$2;
      var $82=(($81+12)|0);
      var $83=HEAP32[(($82)>>2)];
      var $84=_PySlice_GetIndicesEx($80, $83, $start, $stop, $step, $slicelen);
      var $85=(($84)|(0)) < 0;
      if ($85) { label = 19; break; } else { label = 20; break; }
    case 19: 
      $1=0;
      label = 32; break;
    case 20: 
      var $88=HEAP32[(($slicelen)>>2)];
      var $89=(($88)|(0)) <= 0;
      if ($89) { label = 21; break; } else { label = 22; break; }
    case 21: 
      var $91=_PyString_FromStringAndSize(((__str78)|0), 0);
      $1=$91;
      label = 32; break;
    case 22: 
      var $93=HEAP32[(($step)>>2)];
      var $94=(($93)|(0))==1;
      if ($94) { label = 23; break; } else { label = 24; break; }
    case 23: 
      var $96=$2;
      var $97=(($96+8)|0);
      var $98=HEAP32[(($97)>>2)];
      var $99=HEAP32[(($start)>>2)];
      var $100=(($98+$99)|0);
      var $101=HEAP32[(($slicelen)>>2)];
      var $102=_PyString_FromStringAndSize($100, $101);
      $1=$102;
      label = 32; break;
    case 24: 
      var $104=HEAP32[(($slicelen)>>2)];
      var $105=_PyMem_Malloc($104);
      $result_buf=$105;
      var $106=$result_buf;
      var $107=(($106)|(0))==0;
      if ($107) { label = 25; break; } else { label = 26; break; }
    case 25: 
      var $109=_PyErr_NoMemory();
      $1=$109;
      label = 32; break;
    case 26: 
      var $111=HEAP32[(($start)>>2)];
      $cur=$111;
      $i1=0;
      label = 27; break;
    case 27: 
      var $113=$i1;
      var $114=HEAP32[(($slicelen)>>2)];
      var $115=(($113)|(0)) < (($114)|(0));
      if ($115) { label = 28; break; } else { label = 30; break; }
    case 28: 
      var $117=$cur;
      var $118=$2;
      var $119=(($118+8)|0);
      var $120=HEAP32[(($119)>>2)];
      var $121=(($120+$117)|0);
      var $122=HEAP8[($121)];
      var $123=$i1;
      var $124=$result_buf;
      var $125=(($124+$123)|0);
      HEAP8[($125)]=$122;
      label = 29; break;
    case 29: 
      var $127=HEAP32[(($step)>>2)];
      var $128=$cur;
      var $129=((($128)+($127))|0);
      $cur=$129;
      var $130=$i1;
      var $131=((($130)+(1))|0);
      $i1=$131;
      label = 27; break;
    case 30: 
      var $133=$result_buf;
      var $134=HEAP32[(($slicelen)>>2)];
      var $135=_PyString_FromStringAndSize($133, $134);
      $result=$135;
      var $136=$result_buf;
      _PyMem_Free($136);
      var $137=$result;
      $1=$137;
      label = 32; break;
    case 31: 
      var $139=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($139, ((__str79)|0));
      $1=0;
      label = 32; break;
    case 32: 
      var $141=$1;
      STACKTOP = __stackBase__;
      return $141;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_ass_subscript($self, $item, $value) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $i;
      var $buf;
      var $start=__stackBase__;
      var $stop=(__stackBase__)+(4);
      var $step=(__stackBase__)+(8);
      var $slicelen=(__stackBase__)+(12);
      var $buf1;
      var $cur;
      var $i2;
      var $buf3;
      $2=$self;
      $3=$item;
      $4=$value;
      label = 2; break;
    case 2: 
      var $6=$2;
      var $7=(($6+8)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=(($8)|(0))==0;
      if ($9) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $11=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($11, ((__str46)|0));
      $1=-1;
      label = 49; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $14=$3;
      var $15=(($14+4)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=(($16+48)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18)|(0))!=0;
      if ($19) { label = 6; break; } else { label = 24; break; }
    case 6: 
      var $21=$3;
      var $22=(($21+4)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23+84)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=$25 & 131072;
      var $27=(($26)|(0))!=0;
      if ($27) { label = 7; break; } else { label = 24; break; }
    case 7: 
      var $29=$3;
      var $30=(($29+4)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=(($31+48)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=(($33+152)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=(($35)|(0))!=0;
      if ($36) { label = 8; break; } else { label = 24; break; }
    case 8: 
      var $38=$3;
      var $39=HEAP32[((_PyExc_IndexError)>>2)];
      var $40=_PyNumber_AsSsize_t($38, $39);
      $i=$40;
      var $41=$i;
      var $42=(($41)|(0))==-1;
      if ($42) { label = 9; break; } else { label = 11; break; }
    case 9: 
      var $44=_PyErr_Occurred();
      var $45=(($44)|(0))!=0;
      if ($45) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=-1;
      label = 49; break;
    case 11: 
      var $48=$i;
      var $49=(($48)|(0)) < 0;
      if ($49) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $51=$2;
      var $52=(($51+12)|0);
      var $53=HEAP32[(($52)>>2)];
      var $54=$i;
      var $55=((($54)+($53))|0);
      $i=$55;
      label = 13; break;
    case 13: 
      var $57=$i;
      var $58=(($57)|(0)) < 0;
      if ($58) { label = 15; break; } else { label = 14; break; }
    case 14: 
      var $60=$i;
      var $61=$2;
      var $62=(($61+12)|0);
      var $63=HEAP32[(($62)>>2)];
      var $64=(($60)>>>(0)) >= (($63)>>>(0));
      if ($64) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $66=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($66, ((__str71)|0));
      $1=-1;
      label = 49; break;
    case 16: 
      var $68=$4;
      var $69=(($68)|(0))==0;
      if ($69) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $71=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($71, ((__str72)|0));
      $1=-1;
      label = 49; break;
    case 18: 
      var $73=$4;
      var $74=(($73+4)|0);
      var $75=HEAP32[(($74)>>2)];
      var $76=(($75+84)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=$77 & 134217728;
      var $79=(($78)|(0))!=0;
      if ($79) { label = 19; break; } else { label = 20; break; }
    case 19: 
      var $81=$4;
      var $82=_PyString_Size($81);
      var $83=(($82)|(0))!=1;
      if ($83) { label = 20; break; } else { label = 21; break; }
    case 20: 
      var $85=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($85, ((__str73)|0));
      $1=-1;
      label = 49; break;
    case 21: 
      var $87=$2;
      var $88=_is_writeable($87);
      var $89=(($88)|(0))!=0;
      if ($89) { label = 23; break; } else { label = 22; break; }
    case 22: 
      $1=-1;
      label = 49; break;
    case 23: 
      var $92=$4;
      var $93=_PyString_AsString($92);
      $buf=$93;
      var $94=$buf;
      var $95=(($94)|0);
      var $96=HEAP8[($95)];
      var $97=$i;
      var $98=$2;
      var $99=(($98+8)|0);
      var $100=HEAP32[(($99)>>2)];
      var $101=(($100+$97)|0);
      HEAP8[($101)]=$96;
      $1=0;
      label = 49; break;
    case 24: 
      var $103=$3;
      var $104=(($103+4)|0);
      var $105=HEAP32[(($104)>>2)];
      var $106=(($105)|(0))==((_PySlice_Type)|(0));
      if ($106) { label = 25; break; } else { label = 48; break; }
    case 25: 
      var $108=$3;
      var $109=$108;
      var $110=$2;
      var $111=(($110+12)|0);
      var $112=HEAP32[(($111)>>2)];
      var $113=_PySlice_GetIndicesEx($109, $112, $start, $stop, $step, $slicelen);
      var $114=(($113)|(0)) < 0;
      if ($114) { label = 26; break; } else { label = 27; break; }
    case 26: 
      $1=-1;
      label = 49; break;
    case 27: 
      var $117=$4;
      var $118=(($117)|(0))==0;
      if ($118) { label = 28; break; } else { label = 29; break; }
    case 28: 
      var $120=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($120, ((__str74)|0));
      $1=-1;
      label = 49; break;
    case 29: 
      var $122=$4;
      var $123=(($122+4)|0);
      var $124=HEAP32[(($123)>>2)];
      var $125=(($124+84)|0);
      var $126=HEAP32[(($125)>>2)];
      var $127=$126 & 134217728;
      var $128=(($127)|(0))!=0;
      if ($128) { label = 31; break; } else { label = 30; break; }
    case 30: 
      var $130=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($130, ((__str75)|0));
      $1=-1;
      label = 49; break;
    case 31: 
      var $132=$4;
      var $133=_PyString_Size($132);
      var $134=HEAP32[(($slicelen)>>2)];
      var $135=(($133)|(0))!=(($134)|(0));
      if ($135) { label = 32; break; } else { label = 33; break; }
    case 32: 
      var $137=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($137, ((__str76)|0));
      $1=-1;
      label = 49; break;
    case 33: 
      var $139=$2;
      var $140=_is_writeable($139);
      var $141=(($140)|(0))!=0;
      if ($141) { label = 35; break; } else { label = 34; break; }
    case 34: 
      $1=-1;
      label = 49; break;
    case 35: 
      var $144=HEAP32[(($slicelen)>>2)];
      var $145=(($144)|(0))==0;
      if ($145) { label = 36; break; } else { label = 37; break; }
    case 36: 
      $1=0;
      label = 49; break;
    case 37: 
      var $148=HEAP32[(($step)>>2)];
      var $149=(($148)|(0))==1;
      if ($149) { label = 38; break; } else { label = 41; break; }
    case 38: 
      var $151=$4;
      var $152=_PyString_AsString($151);
      $buf1=$152;
      var $153=$buf1;
      var $154=(($153)|(0))==0;
      if ($154) { label = 39; break; } else { label = 40; break; }
    case 39: 
      $1=-1;
      label = 49; break;
    case 40: 
      var $157=$2;
      var $158=(($157+8)|0);
      var $159=HEAP32[(($158)>>2)];
      var $160=HEAP32[(($start)>>2)];
      var $161=(($159+$160)|0);
      var $162=$buf1;
      var $163=HEAP32[(($slicelen)>>2)];
      assert($163 % 1 === 0);_memcpy($161, $162, $163);
      $1=0;
      label = 49; break;
    case 41: 
      var $165=$4;
      var $166=_PyString_AsString($165);
      $buf3=$166;
      var $167=$buf3;
      var $168=(($167)|(0))==0;
      if ($168) { label = 42; break; } else { label = 43; break; }
    case 42: 
      $1=-1;
      label = 49; break;
    case 43: 
      var $171=HEAP32[(($start)>>2)];
      $cur=$171;
      $i2=0;
      label = 44; break;
    case 44: 
      var $173=$i2;
      var $174=HEAP32[(($slicelen)>>2)];
      var $175=(($173)|(0)) < (($174)|(0));
      if ($175) { label = 45; break; } else { label = 47; break; }
    case 45: 
      var $177=$i2;
      var $178=$buf3;
      var $179=(($178+$177)|0);
      var $180=HEAP8[($179)];
      var $181=$cur;
      var $182=$2;
      var $183=(($182+8)|0);
      var $184=HEAP32[(($183)>>2)];
      var $185=(($184+$181)|0);
      HEAP8[($185)]=$180;
      label = 46; break;
    case 46: 
      var $187=HEAP32[(($step)>>2)];
      var $188=$cur;
      var $189=((($188)+($187))|0);
      $cur=$189;
      var $190=$i2;
      var $191=((($190)+(1))|0);
      $i2=$191;
      label = 44; break;
    case 47: 
      $1=0;
      label = 49; break;
    case 48: 
      var $194=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($194, ((__str77)|0));
      $1=-1;
      label = 49; break;
    case 49: 
      var $196=$1;
      STACKTOP = __stackBase__;
      return $196;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_concat($self, $bb) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $2=$self;
      $3=$bb;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=0;
      label = 6; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=HEAP32[((_PyExc_SystemError)>>2)];
      _PyErr_SetString($13, ((__str81)|0));
      $1=0;
      label = 6; break;
    case 6: 
      var $15=$1;
      return $15;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_repeat($self, $n) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $2=$self;
      $3=$n;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=0;
      label = 6; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=HEAP32[((_PyExc_SystemError)>>2)];
      _PyErr_SetString($13, ((__str80)|0));
      $1=0;
      label = 6; break;
    case 6: 
      var $15=$1;
      return $15;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_item($self, $i) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $2=$self;
      $3=$i;
      label = 2; break;
    case 2: 
      var $5=$2;
      var $6=(($5+8)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $10=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($10, ((__str46)|0));
      $1=0;
      label = 9; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $13=$3;
      var $14=(($13)|(0)) < 0;
      if ($14) { label = 7; break; } else { label = 6; break; }
    case 6: 
      var $16=$3;
      var $17=$2;
      var $18=(($17+12)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=(($16)>>>(0)) >= (($19)>>>(0));
      if ($20) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $22=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($22, ((__str71)|0));
      $1=0;
      label = 9; break;
    case 8: 
      var $24=$2;
      var $25=(($24+8)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=$3;
      var $28=(($26+$27)|0);
      var $29=_PyString_FromStringAndSize($28, 1);
      $1=$29;
      label = 9; break;
    case 9: 
      var $31=$1;
      return $31;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_slice($self, $ilow, $ihigh) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      $2=$self;
      $3=$ilow;
      $4=$ihigh;
      label = 2; break;
    case 2: 
      var $6=$2;
      var $7=(($6+8)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=(($8)|(0))==0;
      if ($9) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $11=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($11, ((__str46)|0));
      $1=0;
      label = 18; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $14=$3;
      var $15=(($14)|(0)) < 0;
      if ($15) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $3=0;
      label = 10; break;
    case 7: 
      var $18=$3;
      var $19=$2;
      var $20=(($19+12)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=(($18)>>>(0)) > (($21)>>>(0));
      if ($22) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $24=$2;
      var $25=(($24+12)|0);
      var $26=HEAP32[(($25)>>2)];
      $3=$26;
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $29=$4;
      var $30=(($29)|(0)) < 0;
      if ($30) { label = 11; break; } else { label = 12; break; }
    case 11: 
      $4=0;
      label = 12; break;
    case 12: 
      var $33=$4;
      var $34=$3;
      var $35=(($33)|(0)) < (($34)|(0));
      if ($35) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $37=$3;
      $4=$37;
      label = 17; break;
    case 14: 
      var $39=$4;
      var $40=$2;
      var $41=(($40+12)|0);
      var $42=HEAP32[(($41)>>2)];
      var $43=(($39)>>>(0)) > (($42)>>>(0));
      if ($43) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $45=$2;
      var $46=(($45+12)|0);
      var $47=HEAP32[(($46)>>2)];
      $4=$47;
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $50=$2;
      var $51=(($50+8)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=$3;
      var $54=(($52+$53)|0);
      var $55=$4;
      var $56=$3;
      var $57=((($55)-($56))|0);
      var $58=_PyString_FromStringAndSize($54, $57);
      $1=$58;
      label = 18; break;
    case 18: 
      var $60=$1;
      return $60;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_ass_item($self, $i, $v) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $buf;
      $2=$self;
      $3=$i;
      $4=$v;
      label = 2; break;
    case 2: 
      var $6=$2;
      var $7=(($6+8)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=(($8)|(0))==0;
      if ($9) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $11=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($11, ((__str46)|0));
      $1=-1;
      label = 16; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $14=$3;
      var $15=(($14)|(0)) < 0;
      if ($15) { label = 7; break; } else { label = 6; break; }
    case 6: 
      var $17=$3;
      var $18=$2;
      var $19=(($18+12)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=(($17)>>>(0)) >= (($20)>>>(0));
      if ($21) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $23=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($23, ((__str71)|0));
      $1=-1;
      label = 16; break;
    case 8: 
      var $25=$4;
      var $26=(($25)|(0))==0;
      if ($26) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $28=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($28, ((__str72)|0));
      $1=-1;
      label = 16; break;
    case 10: 
      var $30=$4;
      var $31=(($30+4)|0);
      var $32=HEAP32[(($31)>>2)];
      var $33=(($32+84)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=$34 & 134217728;
      var $36=(($35)|(0))!=0;
      if ($36) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $38=$4;
      var $39=_PyString_Size($38);
      var $40=(($39)|(0))==1;
      if ($40) { label = 13; break; } else { label = 12; break; }
    case 12: 
      var $42=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($42, ((__str73)|0));
      $1=-1;
      label = 16; break;
    case 13: 
      var $44=$2;
      var $45=_is_writeable($44);
      var $46=(($45)|(0))!=0;
      if ($46) { label = 15; break; } else { label = 14; break; }
    case 14: 
      $1=-1;
      label = 16; break;
    case 15: 
      var $49=$4;
      var $50=_PyString_AsString($49);
      $buf=$50;
      var $51=$buf;
      var $52=(($51)|0);
      var $53=HEAP8[($52)];
      var $54=$3;
      var $55=$2;
      var $56=(($55+8)|0);
      var $57=HEAP32[(($56)>>2)];
      var $58=(($57+$54)|0);
      HEAP8[($58)]=$53;
      $1=0;
      label = 16; break;
    case 16: 
      var $60=$1;
      return $60;
    default: assert(0, "bad label: " + label);
  }
}
function _mmap_ass_slice($self, $ilow, $ihigh, $v) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $buf;
      $2=$self;
      $3=$ilow;
      $4=$ihigh;
      $5=$v;
      label = 2; break;
    case 2: 
      var $7=$2;
      var $8=(($7+8)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=(($9)|(0))==0;
      if ($10) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $12=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($12, ((__str46)|0));
      $1=-1;
      label = 26; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $15=$3;
      var $16=(($15)|(0)) < 0;
      if ($16) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $3=0;
      label = 10; break;
    case 7: 
      var $19=$3;
      var $20=$2;
      var $21=(($20+12)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=(($19)>>>(0)) > (($22)>>>(0));
      if ($23) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $25=$2;
      var $26=(($25+12)|0);
      var $27=HEAP32[(($26)>>2)];
      $3=$27;
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $30=$4;
      var $31=(($30)|(0)) < 0;
      if ($31) { label = 11; break; } else { label = 12; break; }
    case 11: 
      $4=0;
      label = 12; break;
    case 12: 
      var $34=$4;
      var $35=$3;
      var $36=(($34)|(0)) < (($35)|(0));
      if ($36) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $38=$3;
      $4=$38;
      label = 17; break;
    case 14: 
      var $40=$4;
      var $41=$2;
      var $42=(($41+12)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=(($40)>>>(0)) > (($43)>>>(0));
      if ($44) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $46=$2;
      var $47=(($46+12)|0);
      var $48=HEAP32[(($47)>>2)];
      $4=$48;
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $51=$5;
      var $52=(($51)|(0))==0;
      if ($52) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $54=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($54, ((__str74)|0));
      $1=-1;
      label = 26; break;
    case 19: 
      var $56=$5;
      var $57=(($56+4)|0);
      var $58=HEAP32[(($57)>>2)];
      var $59=(($58+84)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=$60 & 134217728;
      var $62=(($61)|(0))!=0;
      if ($62) { label = 21; break; } else { label = 20; break; }
    case 20: 
      var $64=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($64, ((__str75)|0));
      $1=-1;
      label = 26; break;
    case 21: 
      var $66=$5;
      var $67=_PyString_Size($66);
      var $68=$4;
      var $69=$3;
      var $70=((($68)-($69))|0);
      var $71=(($67)|(0))!=(($70)|(0));
      if ($71) { label = 22; break; } else { label = 23; break; }
    case 22: 
      var $73=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($73, ((__str76)|0));
      $1=-1;
      label = 26; break;
    case 23: 
      var $75=$2;
      var $76=_is_writeable($75);
      var $77=(($76)|(0))!=0;
      if ($77) { label = 25; break; } else { label = 24; break; }
    case 24: 
      $1=-1;
      label = 26; break;
    case 25: 
      var $80=$5;
      var $81=_PyString_AsString($80);
      $buf=$81;
      var $82=$2;
      var $83=(($82+8)|0);
      var $84=HEAP32[(($83)>>2)];
      var $85=$3;
      var $86=(($84+$85)|0);
      var $87=$buf;
      var $88=$4;
      var $89=$3;
      var $90=((($88)-($89))|0);
      assert($90 % 1 === 0);_memcpy($86, $87, $90);
      $1=0;
      label = 26; break;
    case 26: 
      var $92=$1;
      return $92;
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
