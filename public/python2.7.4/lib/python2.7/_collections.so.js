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
var _sizeof_doc;
var _rotate_doc;
var _reversed_doc;
var _reverse_doc;
var _remove_doc;
var _reduce_doc;
var _popleft_doc;
var _pop_doc;
var _numfreeblocks;
var _module_doc;
var _length_hint_doc;
var _freeblocks;
var _extendleft_doc;
var _extend_doc;
var _dequereviter_type;
var _dequeiter_type;
var _dequeiter_methods;
var _deque_type;
var _deque_methods;
var _deque_init_kwlist;
var _deque_getset;
var _deque_doc;
var _deque_as_sequence;
var _defdict_type;
var _defdict_missing_doc;
var _defdict_methods;
var _defdict_members;
var _defdict_doc;
var _defdict_copy_doc;
var _count_doc;
var _copy_doc;
var _clear_doc;
var _appendleft_doc;
var _append_doc;
var __str9;
var __str87;
var __str86;
var __str85;
var __str84;
var __str83;
var __str82;
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
var ___func___dequereviter_next;
var ___func___dequeiter_next;
var ___func___deque_sizeof;
var ___func___deque_reverse;
var ___func___deque_remove;
var ___func___deque_popleft;
var ___func___deque_pop;
var ___func___deque_extendleft;
var ___func___deque_extend;
var ___func___deque_del_item;
var ___func___deque_dealloc;
var ___func___deque_clear;
var ___func___deque_appendleft;
var ___func___deque_append;
var ___func____deque_rotate;
_sizeof_doc=allocate([68,46,95,95,115,105,122,101,111,102,95,95,40,41,32,45,45,32,115,105,122,101,32,111,102,32,68,32,105,110,32,109,101,109,111,114,121,44,32,105,110,32,98,121,116,101,115,0], "i8", ALLOC_NORMAL);
_rotate_doc=allocate([82,111,116,97,116,101,32,116,104,101,32,100,101,113,117,101,32,110,32,115,116,101,112,115,32,116,111,32,116,104,101,32,114,105,103,104,116,32,40,100,101,102,97,117,108,116,32,110,61,49,41,46,32,32,73,102,32,110,32,105,115,32,110,101,103,97,116,105,118,101,44,32,114,111,116,97,116,101,115,32,108,101,102,116,46,0,0,0], "i8", ALLOC_NORMAL);
_reversed_doc=allocate([68,46,95,95,114,101,118,101,114,115,101,100,95,95,40,41,32,45,45,32,114,101,116,117,114,110,32,97,32,114,101,118,101,114,115,101,32,105,116,101,114,97,116,111,114,32,111,118,101,114,32,116,104,101,32,100,101,113,117,101,0,0,0,0], "i8", ALLOC_NORMAL);
_reverse_doc=allocate([68,46,114,101,118,101,114,115,101,40,41,32,45,45,32,114,101,118,101,114,115,101,32,42,73,78,32,80,76,65,67,69,42,0,0,0], "i8", ALLOC_NORMAL);
_remove_doc=allocate([68,46,114,101,109,111,118,101,40,118,97,108,117,101,41,32,45,45,32,114,101,109,111,118,101,32,102,105,114,115,116,32,111,99,99,117,114,114,101,110,99,101,32,111,102,32,118,97,108,117,101,46,0,0,0,0], "i8", ALLOC_NORMAL);
_reduce_doc=allocate([82,101,116,117,114,110,32,115,116,97,116,101,32,105,110,102,111,114,109,97,116,105,111,110,32,102,111,114,32,112,105,99,107,108,105,110,103,46,0,0], "i8", ALLOC_NORMAL);
_popleft_doc=allocate([82,101,109,111,118,101,32,97,110,100,32,114,101,116,117,114,110,32,116,104,101,32,108,101,102,116,109,111,115,116,32,101,108,101,109,101,110,116,46,0], "i8", ALLOC_NORMAL);
_pop_doc=allocate([82,101,109,111,118,101,32,97,110,100,32,114,101,116,117,114,110,32,116,104,101,32,114,105,103,104,116,109,111,115,116,32,101,108,101,109,101,110,116,46,0,0,0,0], "i8", ALLOC_NORMAL);
_numfreeblocks=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_module_doc=allocate([72,105,103,104,32,112,101,114,102,111,114,109,97,110,99,101,32,100,97,116,97,32,115,116,114,117,99,116,117,114,101,115,46,10,45,32,100,101,113,117,101,58,32,32,32,32,32,32,32,32,111,114,100,101,114,101,100,32,99,111,108,108,101,99,116,105,111,110,32,97,99,99,101,115,115,105,98,108,101,32,102,114,111,109,32,101,110,100,112,111,105,110,116,115,32,111,110,108,121,10,45,32,100,101,102,97,117,108,116,100,105,99,116,58,32,32,100,105,99,116,32,115,117,98,99,108,97,115,115,32,119,105,116,104,32,97,32,100,101,102,97,117,108,116,32,118,97,108,117,101,32,102,97,99,116,111,114,121,10,0], "i8", ALLOC_NORMAL);
_length_hint_doc=allocate([80,114,105,118,97,116,101,32,109,101,116,104,111,100,32,114,101,116,117,114,110,105,110,103,32,97,110,32,101,115,116,105,109,97,116,101,32,111,102,32,108,101,110,40,108,105,115,116,40,105,116,41,41,46,0,0], "i8", ALLOC_NORMAL);
_freeblocks=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_extendleft_doc=allocate([69,120,116,101,110,100,32,116,104,101,32,108,101,102,116,32,115,105,100,101,32,111,102,32,116,104,101,32,100,101,113,117,101,32,119,105,116,104,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,116,104,101,32,105,116,101,114,97,98,108,101,0,0,0], "i8", ALLOC_NORMAL);
_extend_doc=allocate([69,120,116,101,110,100,32,116,104,101,32,114,105,103,104,116,32,115,105,100,101,32,111,102,32,116,104,101,32,100,101,113,117,101,32,119,105,116,104,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,116,104,101,32,105,116,101,114,97,98,108,101,0,0], "i8", ALLOC_NORMAL);
_dequereviter_type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,65,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_dequeiter_type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,65,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_dequeiter_methods=allocate([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_deque_type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,69,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_deque_methods=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_deque_init_kwlist=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_deque_getset=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_deque_doc=allocate([100,101,113,117,101,40,91,105,116,101,114,97,98,108,101,91,44,32,109,97,120,108,101,110,93,93,41,32,45,45,62,32,100,101,113,117,101,32,111,98,106,101,99,116,10,10,66,117,105,108,100,32,97,110,32,111,114,100,101,114,101,100,32,99,111,108,108,101,99,116,105,111,110,32,119,105,116,104,32,111,112,116,105,109,105,122,101,100,32,97,99,99,101,115,115,32,102,114,111,109,32,105,116,115,32,101,110,100,112,111,105,110,116,115,46,0], "i8", ALLOC_NORMAL);
_deque_as_sequence=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_defdict_type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,69,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_defdict_missing_doc=allocate([95,95,109,105,115,115,105,110,103,95,95,40,107,101,121,41,32,35,32,67,97,108,108,101,100,32,98,121,32,95,95,103,101,116,105,116,101,109,95,95,32,102,111,114,32,109,105,115,115,105,110,103,32,107,101,121,59,32,112,115,101,117,100,111,45,99,111,100,101,58,10,32,32,105,102,32,115,101,108,102,46,100,101,102,97,117,108,116,95,102,97,99,116,111,114,121,32,105,115,32,78,111,110,101,58,32,114,97,105,115,101,32,75,101,121,69,114,114,111,114,40,40,107,101,121,44,41,41,10,32,32,115,101,108,102,91,107,101,121,93,32,61,32,118,97,108,117,101,32,61,32,115,101,108,102,46,100,101,102,97,117,108,116,95,102,97,99,116,111,114,121,40,41,10,32,32,114,101,116,117,114,110,32,118,97,108,117,101,10,0,0,0], "i8", ALLOC_NORMAL);
_defdict_methods=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_defdict_members=allocate([0,0,0,0,6,0,0,0,124,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_defdict_doc=allocate([100,101,102,97,117,108,116,100,105,99,116,40,100,101,102,97,117,108,116,95,102,97,99,116,111,114,121,41,32,45,45,62,32,100,105,99,116,32,119,105,116,104,32,100,101,102,97,117,108,116,32,102,97,99,116,111,114,121,10,10,84,104,101,32,100,101,102,97,117,108,116,32,102,97,99,116,111,114,121,32,105,115,32,99,97,108,108,101,100,32,119,105,116,104,111,117,116,32,97,114,103,117,109,101,110,116,115,32,116,111,32,112,114,111,100,117,99,101,10,97,32,110,101,119,32,118,97,108,117,101,32,119,104,101,110,32,97,32,107,101,121,32,105,115,32,110,111,116,32,112,114,101,115,101,110,116,44,32,105,110,32,95,95,103,101,116,105,116,101,109,95,95,32,111,110,108,121,46,10,65,32,100,101,102,97,117,108,116,100,105,99,116,32,99,111,109,112,97,114,101,115,32,101,113,117,97,108,32,116,111,32,97,32,100,105,99,116,32,119,105,116,104,32,116,104,101,32,115,97,109,101,32,105,116,101,109,115,46,10,0], "i8", ALLOC_NORMAL);
_defdict_copy_doc=allocate([68,46,99,111,112,121,40,41,32,45,62,32,97,32,115,104,97,108,108,111,119,32,99,111,112,121,32,111,102,32,68,46,0,0,0,0], "i8", ALLOC_NORMAL);
_count_doc=allocate([68,46,99,111,117,110,116,40,118,97,108,117,101,41,32,45,62,32,105,110,116,101,103,101,114,32,45,45,32,114,101,116,117,114,110,32,110,117,109,98,101,114,32,111,102,32,111,99,99,117,114,114,101,110,99,101,115,32,111,102,32,118,97,108,117,101,0,0], "i8", ALLOC_NORMAL);
_copy_doc=allocate([82,101,116,117,114,110,32,97,32,115,104,97,108,108,111,119,32,99,111,112,121,32,111,102,32,97,32,100,101,113,117,101,46,0,0,0], "i8", ALLOC_NORMAL);
_clear_doc=allocate([82,101,109,111,118,101,32,97,108,108,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,116,104,101,32,100,101,113,117,101,46,0], "i8", ALLOC_NORMAL);
_appendleft_doc=allocate([65,100,100,32,97,110,32,101,108,101,109,101,110,116,32,116,111,32,116,104,101,32,108,101,102,116,32,115,105,100,101,32,111,102,32,116,104,101,32,100,101,113,117,101,46,0,0,0], "i8", ALLOC_NORMAL);
_append_doc=allocate([65,100,100,32,97,110,32,101,108,101,109,101,110,116,32,116,111,32,116,104,101,32,114,105,103,104,116,32,115,105,100,101,32,111,102,32,116,104,101,32,100,101,113,117,101,46,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([100,101,113,117,101,95,105,116,101,114,97,116,111,114,0,0], "i8", ALLOC_NORMAL);
__str87=allocate([93,44,32,109,97,120,108,101,110,61,37,122,100,41,0,0], "i8", ALLOC_NORMAL);
__str86=allocate([93,41,0,0], "i8", ALLOC_NORMAL);
__str85=allocate([100,101,113,117,101,40,91,0], "i8", ALLOC_NORMAL);
__str84=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__str83=allocate([100,101,113,117,101,40,37,114,41,0,0,0], "i8", ALLOC_NORMAL);
__str82=allocate([100,101,113,117,101,40,37,37,114,44,32,109,97,120,108,101,110,61,37,122,100,41,0,0], "i8", ALLOC_NORMAL);
__str81=allocate([91,46,46,46,93,0,0,0], "i8", ALLOC_NORMAL);
__str80=allocate([105,32,62,61,32,48,32,38,38,32,105,32,60,32,100,101,113,117,101,45,62,108,101,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([105,116,45,62,98,45,62,108,101,102,116,108,105,110,107,32,33,61,32,78,85,76,76,0], "i8", ALLOC_NORMAL);
__str79=allocate([100,101,113,117,101,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str78=allocate([100,101,113,117,101,45,62,108,101,102,116,98,108,111,99,107,32,61,61,32,100,101,113,117,101,45,62,114,105,103,104,116,98,108,111,99,107,32,38,38,32,100,101,113,117,101,45,62,108,101,102,116,105,110,100,101,120,32,45,32,49,32,61,61,32,100,101,113,117,101,45,62,114,105,103,104,116,105,110,100,101,120,32,38,38,32,100,101,113,117,101,45,62,108,101,110,32,61,61,32,48,0,0,0], "i8", ALLOC_NORMAL);
__str77=allocate([105,116,101,109,32,33,61,32,78,85,76,76,0,0,0,0], "i8", ALLOC_NORMAL);
__str76=allocate([79,105,0,0], "i8", ALLOC_NORMAL);
__str75=allocate([79,0,0,0], "i8", ALLOC_NORMAL);
__str74=allocate([79,40,79,110,41,79,0,0], "i8", ALLOC_NORMAL);
__str73=allocate([79,40,79,79,41,79,0,0], "i8", ALLOC_NORMAL);
__str72=allocate([79,40,79,110,41,0,0,0], "i8", ALLOC_NORMAL);
__str71=allocate([79,40,79,41,0,0,0,0], "i8", ALLOC_NORMAL);
__str70=allocate([95,95,100,105,99,116,95,95,0,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([33,40,105,116,45,62,98,32,61,61,32,105,116,45,62,100,101,113,117,101,45,62,108,101,102,116,98,108,111,99,107,32,38,38,32,105,116,45,62,105,110,100,101,120,32,60,32,105,116,45,62,100,101,113,117,101,45,62,108,101,102,116,105,110,100,101,120,41,0,0,0,0], "i8", ALLOC_NORMAL);
__str69=allocate([100,101,113,117,101,46,114,101,109,111,118,101,40,120,41,58,32,120,32,110,111,116,32,105,110,32,100,101,113,117,101,0], "i8", ALLOC_NORMAL);
__str68=allocate([116,103,116,32,33,61,32,78,85,76,76,0], "i8", ALLOC_NORMAL);
__str67=allocate([100,101,113,117,101,32,109,117,116,97,116,101,100,32,100,117,114,105,110,103,32,114,101,109,111,118,101,40,41,46,0,0], "i8", ALLOC_NORMAL);
__str66=allocate([108,101,102,116,98,108,111,99,107,32,33,61,32,114,105,103,104,116,98,108,111,99,107,32,124,124,32,108,101,102,116,105,110,100,101,120,32,60,32,114,105,103,104,116,105,110,100,101,120,0,0,0], "i8", ALLOC_NORMAL);
__str65=allocate([110,101,120,116,98,108,111,99,107,32,33,61,32,78,85,76,76,0,0,0], "i8", ALLOC_NORMAL);
__str64=allocate([100,101,113,117,101,45,62,114,105,103,104,116,105,110,100,101,120,32,60,32,66,76,79,67,75,76,69,78,32,45,32,49,0,0,0,0], "i8", ALLOC_NORMAL);
__str63=allocate([100,101,113,117,101,45,62,114,105,103,104,116,98,108,111,99,107,32,33,61,32,78,85,76,76,0,0,0], "i8", ALLOC_NORMAL);
__str62=allocate([109,32,62,32,48,32,38,38,32,109,32,60,61,32,108,101,110,0,0,0], "i8", ALLOC_NORMAL);
__str61=allocate([100,101,113,117,101,45,62,108,101,102,116,105,110,100,101,120,32,62,32,48,0,0,0,0], "i8", ALLOC_NORMAL);
__str60=allocate([100,101,113,117,101,45,62,108,101,102,116,98,108,111,99,107,45,62,108,101,102,116,108,105,110,107,32,61,61,32,78,85,76,76,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([46,46,47,77,111,100,117,108,101,115,47,95,99,111,108,108,101,99,116,105,111,110,115,109,111,100,117,108,101,46,99,0], "i8", ALLOC_NORMAL);
__str59=allocate([45,104,97,108,102,108,101,110,32,60,61,32,110,32,38,38,32,110,32,60,61,32,104,97,108,102,108,101,110,0,0,0], "i8", ALLOC_NORMAL);
__str58=allocate([108,101,110,32,62,32,49,0], "i8", ALLOC_NORMAL);
__str57=allocate([124,110,58,114,111,116,97,116,101,0,0,0], "i8", ALLOC_NORMAL);
__str56=allocate([100,101,113,117,101,45,62,108,101,102,116,105,110,100,101,120,32,43,32,100,101,113,117,101,45,62,108,101,110,32,45,32,49,32,61,61,32,40,98,108,111,99,107,115,32,45,32,49,41,32,42,32,66,76,79,67,75,76,69,78,32,43,32,100,101,113,117,101,45,62,114,105,103,104,116,105,110,100,101,120,0,0,0,0], "i8", ALLOC_NORMAL);
__str55=allocate([95,95,115,105,122,101,111,102,95,95,0,0], "i8", ALLOC_NORMAL);
__str54=allocate([114,111,116,97,116,101,0,0], "i8", ALLOC_NORMAL);
__str53=allocate([114,101,118,101,114,115,101,0], "i8", ALLOC_NORMAL);
__str52=allocate([95,95,114,101,118,101,114,115,101,100,95,95,0,0,0,0], "i8", ALLOC_NORMAL);
__str51=allocate([114,101,109,111,118,101,0,0], "i8", ALLOC_NORMAL);
__str50=allocate([112,111,112,108,101,102,116,0], "i8", ALLOC_NORMAL);
__str5=allocate([100,101,113,117,101,32,109,117,116,97,116,101,100,32,100,117,114,105,110,103,32,105,116,101,114,97,116,105,111,110,0,0], "i8", ALLOC_NORMAL);
__str49=allocate([112,111,112,0], "i8", ALLOC_NORMAL);
__str48=allocate([101,120,116,101,110,100,108,101,102,116,0,0], "i8", ALLOC_NORMAL);
__str47=allocate([101,120,116,101,110,100,0,0], "i8", ALLOC_NORMAL);
__str46=allocate([99,111,117,110,116,0,0,0], "i8", ALLOC_NORMAL);
__str45=allocate([99,108,101,97,114,0,0,0], "i8", ALLOC_NORMAL);
__str44=allocate([97,112,112,101,110,100,108,101,102,116,0,0], "i8", ALLOC_NORMAL);
__str43=allocate([97,112,112,101,110,100,0,0], "i8", ALLOC_NORMAL);
__str42=allocate([109,97,120,105,109,117,109,32,115,105,122,101,32,111,102,32,97,32,100,101,113,117,101,32,111,114,32,78,111,110,101,32,105,102,32,117,110,98,111,117,110,100,101,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str41=allocate([112,114,101,118,98,108,111,99,107,32,33,61,32,78,85,76,76,0,0,0], "i8", ALLOC_NORMAL);
__str40=allocate([100,101,113,117,101,45,62,108,101,102,116,98,108,111,99,107,32,33,61,32,100,101,113,117,101,45,62,114,105,103,104,116,98,108,111,99,107,0,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([95,95,108,101,110,103,116,104,95,104,105,110,116,95,95,0], "i8", ALLOC_NORMAL);
__str39=allocate([100,101,113,117,101,45,62,108,101,102,116,105,110,100,101,120,32,61,61,32,100,101,113,117,101,45,62,114,105,103,104,116,105,110,100,101,120,43,49,0], "i8", ALLOC_NORMAL);
__str38=allocate([100,101,113,117,101,45,62,108,101,102,116,98,108,111,99,107,32,61,61,32,100,101,113,117,101,45,62,114,105,103,104,116,98,108,111,99,107,0,0,0], "i8", ALLOC_NORMAL);
__str37=allocate([100,101,113,117,101,45,62,108,101,102,116,98,108,111,99,107,32,33,61,32,78,85,76,76,0,0,0,0], "i8", ALLOC_NORMAL);
__str36=allocate([112,111,112,32,102,114,111,109,32,97,110,32,101,109,112,116,121,32,100,101,113,117,101,0], "i8", ALLOC_NORMAL);
__str35=allocate([114,118,32,33,61,32,78,85,76,76,32,38,38,32,100,101,113,117,101,45,62,108,101,110,32,60,61,32,100,101,113,117,101,45,62,109,97,120,108,101,110,0,0,0], "i8", ALLOC_NORMAL);
__str34=allocate([100,101,113,117,101,45,62,114,105,103,104,116,98,108,111,99,107,45,62,114,105,103,104,116,108,105,110,107,32,61,61,32,78,85,76,76,0,0,0,0], "i8", ALLOC_NORMAL);
__str33=allocate([109,97,120,108,101,110,32,109,117,115,116,32,98,101,32,110,111,110,45,110,101,103,97,116,105,118,101,0], "i8", ALLOC_NORMAL);
__str32=allocate([124,79,79,58,100,101,113,117,101,0,0,0], "i8", ALLOC_NORMAL);
__str31=allocate([109,97,120,108,101,110,0,0], "i8", ALLOC_NORMAL);
__str30=allocate([105,116,101,114,97,98,108,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([100,101,113,117,101,95,114,101,118,101,114,115,101,95,105,116,101,114,97,116,111,114,0,0], "i8", ALLOC_NORMAL);
__str29=allocate([99,97,110,110,111,116,32,97,100,100,32,109,111,114,101,32,98,108,111,99,107,115,32,116,111,32,116,104,101,32,100,101,113,117,101,0], "i8", ALLOC_NORMAL);
__str28=allocate([99,111,108,108,101,99,116,105,111,110,115,46,100,101,113,117,101,0,0,0], "i8", ALLOC_NORMAL);
__str27=allocate([41,0,0,0], "i8", ALLOC_NORMAL);
__str26=allocate([44,32,0,0], "i8", ALLOC_NORMAL);
__str25=allocate([100,101,102,97,117,108,116,100,105,99,116,40,0,0,0,0], "i8", ALLOC_NORMAL);
__str24=allocate([100,101,102,97,117,108,116,100,105,99,116,40,37,115,44,32,37,115,41,0], "i8", ALLOC_NORMAL);
__str23=allocate([46,46,46,0], "i8", ALLOC_NORMAL);
__str22=allocate([78,111,110,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str21=allocate([40,41,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([105,116,101,114,105,116,101,109,115,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([100,101,102,97,117,108,116,100,105,99,116,0], "i8", ALLOC_NORMAL);
__str19=allocate([95,95,114,101,100,117,99,101,95,95,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([95,95,99,111,112,121,95,95,0,0,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([99,111,112,121,0,0,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([95,95,109,105,115,115,105,110,103,95,95,0], "i8", ALLOC_NORMAL);
__str15=allocate([70,97,99,116,111,114,121,32,102,111,114,32,100,101,102,97,117,108,116,32,118,97,108,117,101,32,99,97,108,108,101,100,32,98,121,32,95,95,109,105,115,115,105,110,103,95,95,40,41,46,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([100,101,102,97,117,108,116,95,102,97,99,116,111,114,121,0], "i8", ALLOC_NORMAL);
__str13=allocate([102,105,114,115,116,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,99,97,108,108,97,98,108,101,0], "i8", ALLOC_NORMAL);
__str12=allocate([99,111,108,108,101,99,116,105,111,110,115,46,100,101,102,97,117,108,116,100,105,99,116,0], "i8", ALLOC_NORMAL);
__str11=allocate([105,116,45,62,98,45,62,114,105,103,104,116,108,105,110,107,32,33,61,32,78,85,76,76,0,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([33,40,105,116,45,62,98,32,61,61,32,105,116,45,62,100,101,113,117,101,45,62,114,105,103,104,116,98,108,111,99,107,32,38,38,32,105,116,45,62,105,110,100,101,120,32,62,32,105,116,45,62,100,101,113,117,101,45,62,114,105,103,104,116,105,110,100,101,120,41,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([100,101,113,117,101,0,0,0], "i8", ALLOC_NORMAL);
__str=allocate([95,99,111,108,108,101,99,116,105,111,110,115,0,0,0,0], "i8", ALLOC_NORMAL);
___func___dequereviter_next=allocate([100,101,113,117,101,114,101,118,105,116,101,114,95,110,101,120,116,0,0,0], "i8", ALLOC_NORMAL);
___func___dequeiter_next=allocate([100,101,113,117,101,105,116,101,114,95,110,101,120,116,0,0], "i8", ALLOC_NORMAL);
___func___deque_sizeof=allocate([100,101,113,117,101,95,115,105,122,101,111,102,0,0,0,0], "i8", ALLOC_NORMAL);
___func___deque_reverse=allocate([100,101,113,117,101,95,114,101,118,101,114,115,101,0,0,0], "i8", ALLOC_NORMAL);
___func___deque_remove=allocate([100,101,113,117,101,95,114,101,109,111,118,101,0,0,0,0], "i8", ALLOC_NORMAL);
___func___deque_popleft=allocate([100,101,113,117,101,95,112,111,112,108,101,102,116,0,0,0], "i8", ALLOC_NORMAL);
___func___deque_pop=allocate([100,101,113,117,101,95,112,111,112,0,0,0], "i8", ALLOC_NORMAL);
___func___deque_extendleft=allocate([100,101,113,117,101,95,101,120,116,101,110,100,108,101,102,116,0,0,0,0], "i8", ALLOC_NORMAL);
___func___deque_extend=allocate([100,101,113,117,101,95,101,120,116,101,110,100,0,0,0,0], "i8", ALLOC_NORMAL);
___func___deque_del_item=allocate([100,101,113,117,101,95,100,101,108,95,105,116,101,109,0,0], "i8", ALLOC_NORMAL);
___func___deque_dealloc=allocate([100,101,113,117,101,95,100,101,97,108,108,111,99,0,0,0], "i8", ALLOC_NORMAL);
___func___deque_clear=allocate([100,101,113,117,101,95,99,108,101,97,114,0], "i8", ALLOC_NORMAL);
___func___deque_appendleft=allocate([100,101,113,117,101,95,97,112,112,101,110,100,108,101,102,116,0,0,0,0], "i8", ALLOC_NORMAL);
___func___deque_append=allocate([100,101,113,117,101,95,97,112,112,101,110,100,0,0,0,0], "i8", ALLOC_NORMAL);
___func____deque_rotate=allocate([95,100,101,113,117,101,95,114,111,116,97,116,101,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[(((_dequereviter_type)+(12))>>2)]=((__str3)|0);
HEAP32[(((_dequereviter_type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 54));
HEAP32[(((_dequereviter_type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 50);
HEAP32[(((_dequereviter_type)+(92))>>2)]=((FUNCTION_TABLE_OFFSET + 22));
HEAP32[(((_dequereviter_type)+(108))>>2)]=(FUNCTION_TABLE_OFFSET + 68);
HEAP32[(((_dequereviter_type)+(112))>>2)]=((FUNCTION_TABLE_OFFSET + 24));
HEAP32[(((_dequereviter_type)+(116))>>2)]=((_dequeiter_methods)|0);
HEAP32[(((_dequeiter_type)+(12))>>2)]=((__str9)|0);
HEAP32[(((_dequeiter_type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 54));
HEAP32[(((_dequeiter_type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 50);
HEAP32[(((_dequeiter_type)+(92))>>2)]=((FUNCTION_TABLE_OFFSET + 22));
HEAP32[(((_dequeiter_type)+(108))>>2)]=(FUNCTION_TABLE_OFFSET + 68);
HEAP32[(((_dequeiter_type)+(112))>>2)]=((FUNCTION_TABLE_OFFSET + 62));
HEAP32[(((_dequeiter_type)+(116))>>2)]=((_dequeiter_methods)|0);
HEAP32[((_dequeiter_methods)>>2)]=((__str4)|0);
HEAP32[(((_dequeiter_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 72));
HEAP32[(((_dequeiter_methods)+(12))>>2)]=((_length_hint_doc)|0);
HEAP32[(((_deque_type)+(12))>>2)]=((__str28)|0);
HEAP32[(((_deque_type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 66));
HEAP32[(((_deque_type)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((_deque_type)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 96);
HEAP32[(((_deque_type)+(52))>>2)]=_deque_as_sequence;
HEAP32[(((_deque_type)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 18);
HEAP32[(((_deque_type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 50);
HEAP32[(((_deque_type)+(88))>>2)]=((_deque_doc)|0);
HEAP32[(((_deque_type)+(92))>>2)]=((FUNCTION_TABLE_OFFSET + 52));
HEAP32[(((_deque_type)+(96))>>2)]=((FUNCTION_TABLE_OFFSET + 10));
HEAP32[(((_deque_type)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 78);
HEAP32[(((_deque_type)+(108))>>2)]=((FUNCTION_TABLE_OFFSET + 26));
HEAP32[(((_deque_type)+(116))>>2)]=((_deque_methods)|0);
HEAP32[(((_deque_type)+(124))>>2)]=((_deque_getset)|0);
HEAP32[(((_deque_type)+(148))>>2)]=((FUNCTION_TABLE_OFFSET + 4));
HEAP32[(((_deque_type)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 64);
HEAP32[(((_deque_type)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 86);
HEAP32[(((_deque_type)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 94);
HEAP32[((_deque_methods)>>2)]=((__str43)|0);
HEAP32[(((_deque_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 56));
HEAP32[(((_deque_methods)+(12))>>2)]=((_append_doc)|0);
HEAP32[(((_deque_methods)+(16))>>2)]=((__str44)|0);
HEAP32[(((_deque_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 70));
HEAP32[(((_deque_methods)+(28))>>2)]=((_appendleft_doc)|0);
HEAP32[(((_deque_methods)+(32))>>2)]=((__str45)|0);
HEAP32[(((_deque_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 12));
HEAP32[(((_deque_methods)+(44))>>2)]=((_clear_doc)|0);
HEAP32[(((_deque_methods)+(48))>>2)]=((__str18)|0);
HEAP32[(((_deque_methods)+(52))>>2)]=((FUNCTION_TABLE_OFFSET + 82));
HEAP32[(((_deque_methods)+(60))>>2)]=((_copy_doc)|0);
HEAP32[(((_deque_methods)+(64))>>2)]=((__str46)|0);
HEAP32[(((_deque_methods)+(68))>>2)]=((FUNCTION_TABLE_OFFSET + 44));
HEAP32[(((_deque_methods)+(76))>>2)]=((_count_doc)|0);
HEAP32[(((_deque_methods)+(80))>>2)]=((__str47)|0);
HEAP32[(((_deque_methods)+(84))>>2)]=((FUNCTION_TABLE_OFFSET + 74));
HEAP32[(((_deque_methods)+(92))>>2)]=((_extend_doc)|0);
HEAP32[(((_deque_methods)+(96))>>2)]=((__str48)|0);
HEAP32[(((_deque_methods)+(100))>>2)]=((FUNCTION_TABLE_OFFSET + 90));
HEAP32[(((_deque_methods)+(108))>>2)]=((_extendleft_doc)|0);
HEAP32[(((_deque_methods)+(112))>>2)]=((__str49)|0);
HEAP32[(((_deque_methods)+(116))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((_deque_methods)+(124))>>2)]=((_pop_doc)|0);
HEAP32[(((_deque_methods)+(128))>>2)]=((__str50)|0);
HEAP32[(((_deque_methods)+(132))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_deque_methods)+(140))>>2)]=((_popleft_doc)|0);
HEAP32[(((_deque_methods)+(144))>>2)]=((__str19)|0);
HEAP32[(((_deque_methods)+(148))>>2)]=((FUNCTION_TABLE_OFFSET + 48));
HEAP32[(((_deque_methods)+(156))>>2)]=((_reduce_doc)|0);
HEAP32[(((_deque_methods)+(160))>>2)]=((__str51)|0);
HEAP32[(((_deque_methods)+(164))>>2)]=((FUNCTION_TABLE_OFFSET + 8));
HEAP32[(((_deque_methods)+(172))>>2)]=((_remove_doc)|0);
HEAP32[(((_deque_methods)+(176))>>2)]=((__str52)|0);
HEAP32[(((_deque_methods)+(180))>>2)]=((FUNCTION_TABLE_OFFSET + 46));
HEAP32[(((_deque_methods)+(188))>>2)]=((_reversed_doc)|0);
HEAP32[(((_deque_methods)+(192))>>2)]=((__str53)|0);
HEAP32[(((_deque_methods)+(196))>>2)]=((FUNCTION_TABLE_OFFSET + 14));
HEAP32[(((_deque_methods)+(204))>>2)]=((_reverse_doc)|0);
HEAP32[(((_deque_methods)+(208))>>2)]=((__str54)|0);
HEAP32[(((_deque_methods)+(212))>>2)]=((FUNCTION_TABLE_OFFSET + 36));
HEAP32[(((_deque_methods)+(220))>>2)]=((_rotate_doc)|0);
HEAP32[(((_deque_methods)+(224))>>2)]=((__str55)|0);
HEAP32[(((_deque_methods)+(228))>>2)]=((FUNCTION_TABLE_OFFSET + 38));
HEAP32[(((_deque_methods)+(236))>>2)]=((_sizeof_doc)|0);
HEAP32[((_deque_init_kwlist)>>2)]=((__str30)|0);
HEAP32[(((_deque_init_kwlist)+(4))>>2)]=((__str31)|0);
HEAP32[((_deque_getset)>>2)]=((__str31)|0);
HEAP32[(((_deque_getset)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 16));
HEAP32[(((_deque_getset)+(12))>>2)]=((__str42)|0);
HEAP32[((_deque_as_sequence)>>2)]=((FUNCTION_TABLE_OFFSET + 80));
HEAP32[(((_deque_as_sequence)+(12))>>2)]=((FUNCTION_TABLE_OFFSET + 40));
HEAP32[(((_deque_as_sequence)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 60));
HEAP32[(((_deque_as_sequence)+(32))>>2)]=((FUNCTION_TABLE_OFFSET + 32));
HEAP32[(((_defdict_type)+(12))>>2)]=((__str12)|0);
HEAP32[(((_defdict_type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 76));
HEAP32[(((_defdict_type)+(28))>>2)]=((FUNCTION_TABLE_OFFSET + 28));
HEAP32[(((_defdict_type)+(44))>>2)]=((FUNCTION_TABLE_OFFSET + 84));
HEAP32[(((_defdict_type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 50);
HEAP32[(((_defdict_type)+(88))>>2)]=((_defdict_doc)|0);
HEAP32[(((_defdict_type)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_defdict_type)+(96))>>2)]=((FUNCTION_TABLE_OFFSET + 42));
HEAP32[(((_defdict_type)+(116))>>2)]=((_defdict_methods)|0);
HEAP32[(((_defdict_type)+(120))>>2)]=((_defdict_members)|0);
HEAP32[(((_defdict_type)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 92);
HEAP32[(((_defdict_type)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 64);
HEAP32[(((_defdict_type)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 94);
HEAP32[((_defdict_methods)>>2)]=((__str16)|0);
HEAP32[(((_defdict_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 34));
HEAP32[(((_defdict_methods)+(12))>>2)]=((_defdict_missing_doc)|0);
HEAP32[(((_defdict_methods)+(16))>>2)]=((__str17)|0);
HEAP32[(((_defdict_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 88));
HEAP32[(((_defdict_methods)+(28))>>2)]=((_defdict_copy_doc)|0);
HEAP32[(((_defdict_methods)+(32))>>2)]=((__str18)|0);
HEAP32[(((_defdict_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 88));
HEAP32[(((_defdict_methods)+(44))>>2)]=((_defdict_copy_doc)|0);
HEAP32[(((_defdict_methods)+(48))>>2)]=((__str19)|0);
HEAP32[(((_defdict_methods)+(52))>>2)]=((FUNCTION_TABLE_OFFSET + 30));
HEAP32[(((_defdict_methods)+(60))>>2)]=((_reduce_doc)|0);
HEAP32[((_defdict_members)>>2)]=((__str14)|0);
HEAP32[(((_defdict_members)+(16))>>2)]=((__str15)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_deque_popleft,0,_deque_init,0,_deque_pop,0,_deque_remove,0,_deque_clear
,0,_deque_clearmethod,0,_deque_reverse,0,_deque_get_maxlen,0,_PyObject_HashNotImplemented,0,_deque_tp_print
,0,_dequeiter_traverse,0,_dequereviter_next,0,_deque_iter,0,_defdict_print,0,_defdict_reduce
,0,_deque_inplace_concat,0,_defdict_missing,0,_deque_rotate,0,_deque_sizeof,0,_deque_item
,0,_defdict_tp_clear,0,_deque_count,0,_deque_reviter,0,_deque_reduce,0,_PyObject_GenericGetAttr
,0,_deque_traverse,0,_dequeiter_dealloc,0,_deque_append,0,_defdict_traverse,0,_deque_ass_item
,0,_dequeiter_next,0,_PyType_GenericAlloc,0,_deque_dealloc,0,_PyObject_SelfIter,0,_deque_appendleft
,0,_dequeiter_len,0,_deque_extend,0,_defdict_dealloc,0,_deque_richcompare,0,_deque_len
,0,_deque_copy,0,_defdict_repr,0,_deque_new,0,_defdict_copy,0,_deque_extendleft,0,_defdict_init,0,_PyObject_GC_Del,0,_deque_repr,0]);
// EMSCRIPTEN_START_FUNCS
function _init_collections() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $m;
      var $1=_Py_InitModule4(((__str)|0), 0, ((_module_doc)|0), 0, 1013);
      $m=$1;
      var $2=$m;
      var $3=(($2)|(0))==0;
      if ($3) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 12; break;
    case 3: 
      var $6=_PyType_Ready(_deque_type);
      var $7=(($6)|(0)) < 0;
      if ($7) { label = 4; break; } else { label = 5; break; }
    case 4: 
      label = 12; break;
    case 5: 
      var $10=HEAP32[((((_deque_type)|0))>>2)];
      var $11=((($10)+(1))|0);
      HEAP32[((((_deque_type)|0))>>2)]=$11;
      var $12=$m;
      var $13=_PyModule_AddObject($12, ((__str1)|0), _deque_type);
      HEAP32[((((_defdict_type+128)|0))>>2)]=_PyDict_Type;
      var $14=_PyType_Ready(_defdict_type);
      var $15=(($14)|(0)) < 0;
      if ($15) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 12; break;
    case 7: 
      var $18=HEAP32[((((_defdict_type)|0))>>2)];
      var $19=((($18)+(1))|0);
      HEAP32[((((_defdict_type)|0))>>2)]=$19;
      var $20=$m;
      var $21=_PyModule_AddObject($20, ((__str2)|0), _defdict_type);
      var $22=_PyType_Ready(_dequeiter_type);
      var $23=(($22)|(0)) < 0;
      if ($23) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 12; break;
    case 9: 
      var $26=_PyType_Ready(_dequereviter_type);
      var $27=(($26)|(0)) < 0;
      if ($27) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 12; break;
    case 11: 
      label = 12; break;
    case 12: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
Module["_init_collections"] = _init_collections;
function _dequeiter_dealloc($dio) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      $1=$dio;
      label = 2; break;
    case 2: 
      var $3=$1;
      var $4=(($3+16)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))==0;
      if ($6) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 10; break;
    case 4: 
      label = 5; break;
    case 5: 
      var $10=$1;
      var $11=(($10+16)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=$12;
      var $14=(($13)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=((($15)-(1))|0);
      HEAP32[(($14)>>2)]=$16;
      var $17=(($16)|(0))!=0;
      if ($17) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      var $20=$1;
      var $21=(($20+16)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=$22;
      var $24=(($23+4)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=(($25+24)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=$1;
      var $29=(($28+16)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$30;
      FUNCTION_TABLE[$27]($31);
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $36=$1;
      var $37=$36;
      _PyObject_GC_Del($37);
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _dequeiter_traverse($dio, $visit, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $vret;
      $2=$dio;
      $3=$visit;
      $4=$arg;
      label = 2; break;
    case 2: 
      var $6=$2;
      var $7=(($6+16)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=(($8)|(0))!=0;
      if ($9) { label = 3; break; } else { label = 6; break; }
    case 3: 
      var $11=$3;
      var $12=$2;
      var $13=(($12+16)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=$14;
      var $16=$4;
      var $17=FUNCTION_TABLE[$11]($15, $16);
      $vret=$17;
      var $18=$vret;
      var $19=(($18)|(0))!=0;
      if ($19) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $21=$vret;
      $1=$21;
      label = 8; break;
    case 5: 
      label = 6; break;
    case 6: 
      label = 7; break;
    case 7: 
      $1=0;
      label = 8; break;
    case 8: 
      var $26=$1;
      return $26;
    default: assert(0, "bad label: " + label);
  }
}
function _dequeiter_len($it) {
  var label = 0;
  var $1;
  $1=$it;
  var $2=$1;
  var $3=(($2+24)|0);
  var $4=HEAP32[(($3)>>2)];
  var $5=_PyInt_FromLong($4);
  return $5;
}
function _defdict_dealloc($dd) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $_py_tmp;
      $1=$dd;
      label = 2; break;
    case 2: 
      var $3=$1;
      var $4=(($3+124)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 9; break; }
    case 3: 
      var $8=$1;
      var $9=(($8+124)|0);
      var $10=HEAP32[(($9)>>2)];
      $_py_tmp=$10;
      var $11=$1;
      var $12=(($11+124)|0);
      HEAP32[(($12)>>2)]=0;
      label = 4; break;
    case 4: 
      var $14=$_py_tmp;
      var $15=(($14)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=((($16)-(1))|0);
      HEAP32[(($15)>>2)]=$17;
      var $18=(($17)|(0))!=0;
      if ($18) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 7; break;
    case 6: 
      var $21=$_py_tmp;
      var $22=(($21+4)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23+24)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=$_py_tmp;
      FUNCTION_TABLE[$25]($26);
      label = 7; break;
    case 7: 
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $31=HEAP32[((((_PyDict_Type+24)|0))>>2)];
      var $32=$1;
      var $33=$32;
      FUNCTION_TABLE[$31]($33);
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _defdict_print($dd, $fp, $flags) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $sts;
      $1=$dd;
      $2=$fp;
      $3=$flags;
      var $4=$2;
      var $5=_fprintf($4, ((__str25)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      var $6=$1;
      var $7=(($6+124)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=(($8)|(0))==0;
      if ($9) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $11=$2;
      var $12=_fprintf($11, ((__str22)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      label = 4; break;
    case 3: 
      var $14=$1;
      var $15=(($14+124)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=$2;
      var $18=_PyObject_Print($16, $17, 0);
      label = 4; break;
    case 4: 
      var $20=$2;
      var $21=_fprintf($20, ((__str26)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      var $22=HEAP32[((((_PyDict_Type+28)|0))>>2)];
      var $23=$1;
      var $24=$23;
      var $25=$2;
      var $26=FUNCTION_TABLE[$22]($24, $25, 0);
      $sts=$26;
      var $27=$2;
      var $28=_fprintf($27, ((__str27)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      var $29=$sts;
      STACKTOP = __stackBase__;
      return $29;
    default: assert(0, "bad label: " + label);
  }
}
function _defdict_repr($dd) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $defrepr;
      var $baserepr;
      var $result;
      var $status;
      $2=$dd;
      var $3=HEAP32[((((_PyDict_Type+44)|0))>>2)];
      var $4=$2;
      var $5=$4;
      var $6=FUNCTION_TABLE[$3]($5);
      $baserepr=$6;
      var $7=$baserepr;
      var $8=(($7)|(0))==0;
      if ($8) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 34; break;
    case 3: 
      var $11=$2;
      var $12=(($11+124)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=(($13)|(0))==0;
      if ($14) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $16=_PyString_FromString(((__str22)|0));
      $defrepr=$16;
      label = 16; break;
    case 5: 
      var $18=$2;
      var $19=(($18+124)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=_Py_ReprEnter($20);
      $status=$21;
      var $22=$status;
      var $23=(($22)|(0))!=0;
      if ($23) { label = 6; break; } else { label = 14; break; }
    case 6: 
      var $25=$status;
      var $26=(($25)|(0)) < 0;
      if ($26) { label = 7; break; } else { label = 13; break; }
    case 7: 
      label = 8; break;
    case 8: 
      var $29=$baserepr;
      var $30=(($29)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=((($31)-(1))|0);
      HEAP32[(($30)>>2)]=$32;
      var $33=(($32)|(0))!=0;
      if ($33) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 11; break;
    case 10: 
      var $36=$baserepr;
      var $37=(($36+4)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=(($38+24)|0);
      var $40=HEAP32[(($39)>>2)];
      var $41=$baserepr;
      FUNCTION_TABLE[$40]($41);
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      $1=0;
      label = 34; break;
    case 13: 
      var $45=_PyString_FromString(((__str23)|0));
      $defrepr=$45;
      label = 15; break;
    case 14: 
      var $47=$2;
      var $48=(($47+124)|0);
      var $49=HEAP32[(($48)>>2)];
      var $50=_PyObject_Repr($49);
      $defrepr=$50;
      label = 15; break;
    case 15: 
      var $52=$2;
      var $53=(($52+124)|0);
      var $54=HEAP32[(($53)>>2)];
      _Py_ReprLeave($54);
      label = 16; break;
    case 16: 
      var $56=$defrepr;
      var $57=(($56)|(0))==0;
      if ($57) { label = 17; break; } else { label = 23; break; }
    case 17: 
      label = 18; break;
    case 18: 
      var $60=$baserepr;
      var $61=(($60)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=((($62)-(1))|0);
      HEAP32[(($61)>>2)]=$63;
      var $64=(($63)|(0))!=0;
      if ($64) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 21; break;
    case 20: 
      var $67=$baserepr;
      var $68=(($67+4)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=(($69+24)|0);
      var $71=HEAP32[(($70)>>2)];
      var $72=$baserepr;
      FUNCTION_TABLE[$71]($72);
      label = 21; break;
    case 21: 
      label = 22; break;
    case 22: 
      $1=0;
      label = 34; break;
    case 23: 
      var $76=$defrepr;
      var $77=$76;
      var $78=(($77+20)|0);
      var $79=(($78)|0);
      var $80=$baserepr;
      var $81=$80;
      var $82=(($81+20)|0);
      var $83=(($82)|0);
      var $84=_PyString_FromFormat(((__str24)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$79,HEAP32[(((tempInt)+(4))>>2)]=$83,tempInt));
      $result=$84;
      label = 24; break;
    case 24: 
      var $86=$defrepr;
      var $87=(($86)|0);
      var $88=HEAP32[(($87)>>2)];
      var $89=((($88)-(1))|0);
      HEAP32[(($87)>>2)]=$89;
      var $90=(($89)|(0))!=0;
      if ($90) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 27; break;
    case 26: 
      var $93=$defrepr;
      var $94=(($93+4)|0);
      var $95=HEAP32[(($94)>>2)];
      var $96=(($95+24)|0);
      var $97=HEAP32[(($96)>>2)];
      var $98=$defrepr;
      FUNCTION_TABLE[$97]($98);
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      label = 29; break;
    case 29: 
      var $102=$baserepr;
      var $103=(($102)|0);
      var $104=HEAP32[(($103)>>2)];
      var $105=((($104)-(1))|0);
      HEAP32[(($103)>>2)]=$105;
      var $106=(($105)|(0))!=0;
      if ($106) { label = 30; break; } else { label = 31; break; }
    case 30: 
      label = 32; break;
    case 31: 
      var $109=$baserepr;
      var $110=(($109+4)|0);
      var $111=HEAP32[(($110)>>2)];
      var $112=(($111+24)|0);
      var $113=HEAP32[(($112)>>2)];
      var $114=$baserepr;
      FUNCTION_TABLE[$113]($114);
      label = 32; break;
    case 32: 
      label = 33; break;
    case 33: 
      var $117=$result;
      $1=$117;
      label = 34; break;
    case 34: 
      var $119=$1;
      STACKTOP = __stackBase__;
      return $119;
    default: assert(0, "bad label: " + label);
  }
}
function _defdict_traverse($self, $visit, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $vret;
      $2=$self;
      $3=$visit;
      $4=$arg;
      label = 2; break;
    case 2: 
      var $6=$2;
      var $7=$6;
      var $8=(($7+124)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=(($9)|(0))!=0;
      if ($10) { label = 3; break; } else { label = 6; break; }
    case 3: 
      var $12=$3;
      var $13=$2;
      var $14=$13;
      var $15=(($14+124)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=$4;
      var $18=FUNCTION_TABLE[$12]($16, $17);
      $vret=$18;
      var $19=$vret;
      var $20=(($19)|(0))!=0;
      if ($20) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $22=$vret;
      $1=$22;
      label = 8; break;
    case 5: 
      label = 6; break;
    case 6: 
      label = 7; break;
    case 7: 
      var $26=HEAP32[((((_PyDict_Type+92)|0))>>2)];
      var $27=$2;
      var $28=$3;
      var $29=$4;
      var $30=FUNCTION_TABLE[$26]($27, $28, $29);
      $1=$30;
      label = 8; break;
    case 8: 
      var $32=$1;
      return $32;
    default: assert(0, "bad label: " + label);
  }
}
function _defdict_tp_clear($dd) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $_py_tmp;
      $1=$dd;
      label = 2; break;
    case 2: 
      var $3=$1;
      var $4=(($3+124)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 9; break; }
    case 3: 
      var $8=$1;
      var $9=(($8+124)|0);
      var $10=HEAP32[(($9)>>2)];
      $_py_tmp=$10;
      var $11=$1;
      var $12=(($11+124)|0);
      HEAP32[(($12)>>2)]=0;
      label = 4; break;
    case 4: 
      var $14=$_py_tmp;
      var $15=(($14)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=((($16)-(1))|0);
      HEAP32[(($15)>>2)]=$17;
      var $18=(($17)|(0))!=0;
      if ($18) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 7; break;
    case 6: 
      var $21=$_py_tmp;
      var $22=(($21+4)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=(($23+24)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=$_py_tmp;
      FUNCTION_TABLE[$25]($26);
      label = 7; break;
    case 7: 
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $31=HEAP32[((((_PyDict_Type+96)|0))>>2)];
      var $32=$1;
      var $33=$32;
      var $34=FUNCTION_TABLE[$31]($33);
      return $34;
    default: assert(0, "bad label: " + label);
  }
}
function _dequereviter_next($it) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $item;
      $2=$it;
      var $3=$2;
      var $4=(($3+24)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))==0;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 16; break;
    case 3: 
      var $9=$2;
      var $10=(($9+16)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=(($11+32)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=$2;
      var $15=(($14+20)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=(($13)|(0))!=(($16)|(0));
      if ($17) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $19=$2;
      var $20=(($19+24)|0);
      HEAP32[(($20)>>2)]=0;
      var $21=HEAP32[((_PyExc_RuntimeError)>>2)];
      _PyErr_SetString($21, ((__str5)|0));
      $1=0;
      label = 16; break;
    case 5: 
      var $23=$2;
      var $24=(($23+12)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=$2;
      var $27=(($26+16)|0);
      var $28=HEAP32[(($27)>>2)];
      var $29=(($28+8)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=(($25)|(0))==(($30)|(0));
      if ($31) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $33=$2;
      var $34=(($33+8)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=$2;
      var $37=(($36+16)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=(($38+16)|0);
      var $40=HEAP32[(($39)>>2)];
      var $41=(($35)|(0)) < (($40)|(0));
      if ($41) { label = 8; break; } else { label = 7; break; }
    case 7: 
      label = 9; break;
    case 8: 
      ___assert_func(((__str6)|0), 1333, ((___func___dequereviter_next)|0), ((__str7)|0));
      throw "Reached an unreachable!";
      label = 9; break;
    case 9: 
      var $46=$2;
      var $47=(($46+8)|0);
      var $48=HEAP32[(($47)>>2)];
      var $49=$2;
      var $50=(($49+12)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=(($51+8)|0);
      var $53=(($52+($48<<2))|0);
      var $54=HEAP32[(($53)>>2)];
      $item=$54;
      var $55=$2;
      var $56=(($55+8)|0);
      var $57=HEAP32[(($56)>>2)];
      var $58=((($57)-(1))|0);
      HEAP32[(($56)>>2)]=$58;
      var $59=$2;
      var $60=(($59+24)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=((($61)-(1))|0);
      HEAP32[(($60)>>2)]=$62;
      var $63=$2;
      var $64=(($63+8)|0);
      var $65=HEAP32[(($64)>>2)];
      var $66=(($65)|(0))==-1;
      if ($66) { label = 10; break; } else { label = 15; break; }
    case 10: 
      var $68=$2;
      var $69=(($68+24)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=(($70)|(0)) > 0;
      if ($71) { label = 11; break; } else { label = 15; break; }
    case 11: 
      var $73=$2;
      var $74=(($73+12)|0);
      var $75=HEAP32[(($74)>>2)];
      var $76=(($75)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=(($77)|(0))!=0;
      if ($78) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      ___assert_func(((__str6)|0), 1339, ((___func___dequereviter_next)|0), ((__str8)|0));
      throw "Reached an unreachable!";
      label = 14; break;
    case 14: 
      var $83=$2;
      var $84=(($83+12)|0);
      var $85=HEAP32[(($84)>>2)];
      var $86=(($85)|0);
      var $87=HEAP32[(($86)>>2)];
      var $88=$2;
      var $89=(($88+12)|0);
      HEAP32[(($89)>>2)]=$87;
      var $90=$2;
      var $91=(($90+8)|0);
      HEAP32[(($91)>>2)]=61;
      label = 15; break;
    case 15: 
      var $93=$item;
      var $94=(($93)|0);
      var $95=HEAP32[(($94)>>2)];
      var $96=((($95)+(1))|0);
      HEAP32[(($94)>>2)]=$96;
      var $97=$item;
      $1=$97;
      label = 16; break;
    case 16: 
      var $99=$1;
      return $99;
    default: assert(0, "bad label: " + label);
  }
}
function _dequeiter_next($it) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $item;
      $2=$it;
      var $3=$2;
      var $4=(($3+16)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5+32)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=$2;
      var $9=(($8+20)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($7)|(0))!=(($10)|(0));
      if ($11) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $13=$2;
      var $14=(($13+24)|0);
      HEAP32[(($14)>>2)]=0;
      var $15=HEAP32[((_PyExc_RuntimeError)>>2)];
      _PyErr_SetString($15, ((__str5)|0));
      $1=0;
      label = 16; break;
    case 3: 
      var $17=$2;
      var $18=(($17+24)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=(($19)|(0))==0;
      if ($20) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 16; break;
    case 5: 
      var $23=$2;
      var $24=(($23+12)|0);
      var $25=HEAP32[(($24)>>2)];
      var $26=$2;
      var $27=(($26+16)|0);
      var $28=HEAP32[(($27)>>2)];
      var $29=(($28+12)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=(($25)|(0))==(($30)|(0));
      if ($31) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $33=$2;
      var $34=(($33+8)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=$2;
      var $37=(($36+16)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=(($38+20)|0);
      var $40=HEAP32[(($39)>>2)];
      var $41=(($35)|(0)) > (($40)|(0));
      if ($41) { label = 8; break; } else { label = 7; break; }
    case 7: 
      label = 9; break;
    case 8: 
      ___assert_func(((__str6)|0), 1237, ((___func___dequeiter_next)|0), ((__str10)|0));
      throw "Reached an unreachable!";
      label = 9; break;
    case 9: 
      var $46=$2;
      var $47=(($46+8)|0);
      var $48=HEAP32[(($47)>>2)];
      var $49=$2;
      var $50=(($49+12)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=(($51+8)|0);
      var $53=(($52+($48<<2))|0);
      var $54=HEAP32[(($53)>>2)];
      $item=$54;
      var $55=$2;
      var $56=(($55+8)|0);
      var $57=HEAP32[(($56)>>2)];
      var $58=((($57)+(1))|0);
      HEAP32[(($56)>>2)]=$58;
      var $59=$2;
      var $60=(($59+24)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=((($61)-(1))|0);
      HEAP32[(($60)>>2)]=$62;
      var $63=$2;
      var $64=(($63+8)|0);
      var $65=HEAP32[(($64)>>2)];
      var $66=(($65)|(0))==62;
      if ($66) { label = 10; break; } else { label = 15; break; }
    case 10: 
      var $68=$2;
      var $69=(($68+24)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=(($70)|(0)) > 0;
      if ($71) { label = 11; break; } else { label = 15; break; }
    case 11: 
      var $73=$2;
      var $74=(($73+12)|0);
      var $75=HEAP32[(($74)>>2)];
      var $76=(($75+4)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=(($77)|(0))!=0;
      if ($78) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      ___assert_func(((__str6)|0), 1243, ((___func___dequeiter_next)|0), ((__str11)|0));
      throw "Reached an unreachable!";
      label = 14; break;
    case 14: 
      var $83=$2;
      var $84=(($83+12)|0);
      var $85=HEAP32[(($84)>>2)];
      var $86=(($85+4)|0);
      var $87=HEAP32[(($86)>>2)];
      var $88=$2;
      var $89=(($88+12)|0);
      HEAP32[(($89)>>2)]=$87;
      var $90=$2;
      var $91=(($90+8)|0);
      HEAP32[(($91)>>2)]=0;
      label = 15; break;
    case 15: 
      var $93=$item;
      var $94=(($93)|0);
      var $95=HEAP32[(($94)>>2)];
      var $96=((($95)+(1))|0);
      HEAP32[(($94)>>2)]=$96;
      var $97=$item;
      $1=$97;
      label = 16; break;
    case 16: 
      var $99=$1;
      return $99;
    default: assert(0, "bad label: " + label);
  }
}
function _defdict_init($self, $args, $kwds) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $dd;
      var $olddefault;
      var $newdefault;
      var $newargs;
      var $result;
      var $n;
      $2=$self;
      $3=$args;
      $4=$kwds;
      var $5=$2;
      var $6=$5;
      $dd=$6;
      var $7=$dd;
      var $8=(($7+124)|0);
      var $9=HEAP32[(($8)>>2)];
      $olddefault=$9;
      $newdefault=0;
      var $10=$3;
      var $11=(($10)|(0))==0;
      if ($11) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $13=$3;
      var $14=(($13+4)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=(($15+84)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=$17 & 67108864;
      var $19=(($18)|(0))!=0;
      if ($19) { label = 4; break; } else { label = 3; break; }
    case 3: 
      var $21=_PyTuple_New(0);
      $newargs=$21;
      label = 10; break;
    case 4: 
      var $23=$3;
      var $24=$23;
      var $25=(($24+8)|0);
      var $26=HEAP32[(($25)>>2)];
      $n=$26;
      var $27=$n;
      var $28=(($27)|(0)) > 0;
      if ($28) { label = 5; break; } else { label = 9; break; }
    case 5: 
      var $30=$3;
      var $31=$30;
      var $32=(($31+12)|0);
      var $33=(($32)|0);
      var $34=HEAP32[(($33)>>2)];
      $newdefault=$34;
      var $35=$newdefault;
      var $36=_PyCallable_Check($35);
      var $37=(($36)|(0))!=0;
      if ($37) { label = 8; break; } else { label = 6; break; }
    case 6: 
      var $39=$newdefault;
      var $40=(($39)|(0))!=((__Py_NoneStruct)|(0));
      if ($40) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $42=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($42, ((__str13)|0));
      $1=-1;
      label = 33; break;
    case 8: 
      label = 9; break;
    case 9: 
      var $45=$3;
      var $46=$n;
      var $47=_PySequence_GetSlice($45, 1, $46);
      $newargs=$47;
      label = 10; break;
    case 10: 
      var $49=$newargs;
      var $50=(($49)|(0))==0;
      if ($50) { label = 11; break; } else { label = 12; break; }
    case 11: 
      $1=-1;
      label = 33; break;
    case 12: 
      label = 13; break;
    case 13: 
      var $54=$newdefault;
      var $55=(($54)|(0))==0;
      if ($55) { label = 14; break; } else { label = 15; break; }
    case 14: 
      label = 16; break;
    case 15: 
      var $58=$newdefault;
      var $59=(($58)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=((($60)+(1))|0);
      HEAP32[(($59)>>2)]=$61;
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $64=$newdefault;
      var $65=$dd;
      var $66=(($65+124)|0);
      HEAP32[(($66)>>2)]=$64;
      var $67=HEAP32[((((_PyDict_Type+148)|0))>>2)];
      var $68=$2;
      var $69=$newargs;
      var $70=$4;
      var $71=FUNCTION_TABLE[$67]($68, $69, $70);
      $result=$71;
      label = 18; break;
    case 18: 
      var $73=$newargs;
      var $74=(($73)|0);
      var $75=HEAP32[(($74)>>2)];
      var $76=((($75)-(1))|0);
      HEAP32[(($74)>>2)]=$76;
      var $77=(($76)|(0))!=0;
      if ($77) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 21; break;
    case 20: 
      var $80=$newargs;
      var $81=(($80+4)|0);
      var $82=HEAP32[(($81)>>2)];
      var $83=(($82+24)|0);
      var $84=HEAP32[(($83)>>2)];
      var $85=$newargs;
      FUNCTION_TABLE[$84]($85);
      label = 21; break;
    case 21: 
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      var $89=$olddefault;
      var $90=(($89)|(0))==0;
      if ($90) { label = 24; break; } else { label = 25; break; }
    case 24: 
      label = 31; break;
    case 25: 
      label = 26; break;
    case 26: 
      var $94=$olddefault;
      var $95=(($94)|0);
      var $96=HEAP32[(($95)>>2)];
      var $97=((($96)-(1))|0);
      HEAP32[(($95)>>2)]=$97;
      var $98=(($97)|(0))!=0;
      if ($98) { label = 27; break; } else { label = 28; break; }
    case 27: 
      label = 29; break;
    case 28: 
      var $101=$olddefault;
      var $102=(($101+4)|0);
      var $103=HEAP32[(($102)>>2)];
      var $104=(($103+24)|0);
      var $105=HEAP32[(($104)>>2)];
      var $106=$olddefault;
      FUNCTION_TABLE[$105]($106);
      label = 29; break;
    case 29: 
      label = 30; break;
    case 30: 
      label = 31; break;
    case 31: 
      label = 32; break;
    case 32: 
      var $111=$result;
      $1=$111;
      label = 33; break;
    case 33: 
      var $113=$1;
      return $113;
    default: assert(0, "bad label: " + label);
  }
}
function _defdict_missing($dd, $key) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $factory;
      var $value;
      var $tup;
      $2=$dd;
      $3=$key;
      var $4=$2;
      var $5=(($4+124)|0);
      var $6=HEAP32[(($5)>>2)];
      $factory=$6;
      var $7=$factory;
      var $8=(($7)|(0))==0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $10=$factory;
      var $11=(($10)|(0))==((__Py_NoneStruct)|(0));
      if ($11) { label = 3; break; } else { label = 11; break; }
    case 3: 
      var $13=$3;
      var $14=_PyTuple_Pack(1, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$13,tempInt));
      $tup=$14;
      var $15=$tup;
      var $16=(($15)|(0))!=0;
      if ($16) { label = 5; break; } else { label = 4; break; }
    case 4: 
      $1=0;
      label = 21; break;
    case 5: 
      var $19=HEAP32[((_PyExc_KeyError)>>2)];
      var $20=$tup;
      _PyErr_SetObject($19, $20);
      label = 6; break;
    case 6: 
      var $22=$tup;
      var $23=(($22)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=((($24)-(1))|0);
      HEAP32[(($23)>>2)]=$25;
      var $26=(($25)|(0))!=0;
      if ($26) { label = 7; break; } else { label = 8; break; }
    case 7: 
      label = 9; break;
    case 8: 
      var $29=$tup;
      var $30=(($29+4)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=(($31+24)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=$tup;
      FUNCTION_TABLE[$33]($34);
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      $1=0;
      label = 21; break;
    case 11: 
      var $38=$factory;
      var $39=_PyEval_CallObjectWithKeywords($38, 0, 0);
      $value=$39;
      var $40=$value;
      var $41=(($40)|(0))==0;
      if ($41) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $43=$value;
      $1=$43;
      label = 21; break;
    case 13: 
      var $45=$2;
      var $46=$45;
      var $47=$3;
      var $48=$value;
      var $49=_PyObject_SetItem($46, $47, $48);
      var $50=(($49)|(0)) < 0;
      if ($50) { label = 14; break; } else { label = 20; break; }
    case 14: 
      label = 15; break;
    case 15: 
      var $53=$value;
      var $54=(($53)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=((($55)-(1))|0);
      HEAP32[(($54)>>2)]=$56;
      var $57=(($56)|(0))!=0;
      if ($57) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 18; break;
    case 17: 
      var $60=$value;
      var $61=(($60+4)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=(($62+24)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=$value;
      FUNCTION_TABLE[$64]($65);
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      $1=0;
      label = 21; break;
    case 20: 
      var $69=$value;
      $1=$69;
      label = 21; break;
    case 21: 
      var $71=$1;
      STACKTOP = __stackBase__;
      return $71;
    default: assert(0, "bad label: " + label);
  }
}
function _defdict_copy($dd) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$dd;
      var $3=$2;
      var $4=(($3+124)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))==0;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $8=$2;
      var $9=$8;
      var $10=(($9+4)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=$11;
      var $13=$2;
      var $14=_PyObject_CallFunctionObjArgs($12, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 12)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=__Py_NoneStruct,HEAP32[(((tempInt)+(4))>>2)]=$13,HEAP32[(((tempInt)+(8))>>2)]=0,tempInt));
      $1=$14;
      label = 4; break;
    case 3: 
      var $16=$2;
      var $17=$16;
      var $18=(($17+4)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=$19;
      var $21=$2;
      var $22=(($21+124)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=$2;
      var $25=_PyObject_CallFunctionObjArgs($20, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 12)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$23,HEAP32[(((tempInt)+(4))>>2)]=$24,HEAP32[(((tempInt)+(8))>>2)]=0,tempInt));
      $1=$25;
      label = 4; break;
    case 4: 
      var $27=$1;
      STACKTOP = __stackBase__;
      return $27;
    default: assert(0, "bad label: " + label);
  }
}
function _defdict_reduce($dd) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $args;
      var $items;
      var $result;
      $2=$dd;
      var $3=$2;
      var $4=(($3+124)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))==0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $8=$2;
      var $9=(($8+124)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10)|(0))==((__Py_NoneStruct)|(0));
      if ($11) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $13=_PyTuple_New(0);
      $args=$13;
      label = 5; break;
    case 4: 
      var $15=$2;
      var $16=(($15+124)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=_PyTuple_Pack(1, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$17,tempInt));
      $args=$18;
      label = 5; break;
    case 5: 
      var $20=$args;
      var $21=(($20)|(0))==0;
      if ($21) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 25; break;
    case 7: 
      var $24=$2;
      var $25=$24;
      var $26=_PyObject_CallMethod($25, ((__str20)|0), ((__str21)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
      $items=$26;
      var $27=$items;
      var $28=(($27)|(0))==0;
      if ($28) { label = 8; break; } else { label = 14; break; }
    case 8: 
      label = 9; break;
    case 9: 
      var $31=$args;
      var $32=(($31)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=((($33)-(1))|0);
      HEAP32[(($32)>>2)]=$34;
      var $35=(($34)|(0))!=0;
      if ($35) { label = 10; break; } else { label = 11; break; }
    case 10: 
      label = 12; break;
    case 11: 
      var $38=$args;
      var $39=(($38+4)|0);
      var $40=HEAP32[(($39)>>2)];
      var $41=(($40+24)|0);
      var $42=HEAP32[(($41)>>2)];
      var $43=$args;
      FUNCTION_TABLE[$42]($43);
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      $1=0;
      label = 25; break;
    case 14: 
      var $47=$2;
      var $48=$47;
      var $49=(($48+4)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=$args;
      var $52=$items;
      var $53=_PyTuple_Pack(5, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 20)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$50,HEAP32[(((tempInt)+(4))>>2)]=$51,HEAP32[(((tempInt)+(8))>>2)]=__Py_NoneStruct,HEAP32[(((tempInt)+(12))>>2)]=__Py_NoneStruct,HEAP32[(((tempInt)+(16))>>2)]=$52,tempInt));
      $result=$53;
      label = 15; break;
    case 15: 
      var $55=$items;
      var $56=(($55)|0);
      var $57=HEAP32[(($56)>>2)];
      var $58=((($57)-(1))|0);
      HEAP32[(($56)>>2)]=$58;
      var $59=(($58)|(0))!=0;
      if ($59) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 18; break;
    case 17: 
      var $62=$items;
      var $63=(($62+4)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=(($64+24)|0);
      var $66=HEAP32[(($65)>>2)];
      var $67=$items;
      FUNCTION_TABLE[$66]($67);
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $71=$args;
      var $72=(($71)|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=((($73)-(1))|0);
      HEAP32[(($72)>>2)]=$74;
      var $75=(($74)|(0))!=0;
      if ($75) { label = 21; break; } else { label = 22; break; }
    case 21: 
      label = 23; break;
    case 22: 
      var $78=$args;
      var $79=(($78+4)|0);
      var $80=HEAP32[(($79)>>2)];
      var $81=(($80+24)|0);
      var $82=HEAP32[(($81)>>2)];
      var $83=$args;
      FUNCTION_TABLE[$82]($83);
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $86=$result;
      $1=$86;
      label = 25; break;
    case 25: 
      var $88=$1;
      STACKTOP = __stackBase__;
      return $88;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_tp_print($deque, $fp, $flags) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $it;
      var $item;
      var $emit;
      var $separator;
      var $i;
      $2=$deque;
      $3=$fp;
      $4=$flags;
      $emit=((__str84)|0);
      $separator=((__str26)|0);
      var $5=$2;
      var $6=_Py_ReprEnter($5);
      $i=$6;
      var $7=$i;
      var $8=(($7)|(0))!=0;
      if ($8) { label = 2; break; } else { label = 5; break; }
    case 2: 
      var $10=$i;
      var $11=(($10)|(0)) < 0;
      if ($11) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $13=$i;
      $1=$13;
      label = 38; break;
    case 4: 
      var $15=$3;
      var $16=_fputs(((__str81)|0), $15);
      $1=0;
      label = 38; break;
    case 5: 
      var $18=$2;
      var $19=_PyObject_GetIter($18);
      $it=$19;
      var $20=$it;
      var $21=(($20)|(0))==0;
      if ($21) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=-1;
      label = 38; break;
    case 7: 
      var $24=$3;
      var $25=_fputs(((__str85)|0), $24);
      label = 8; break;
    case 8: 
      var $27=$it;
      var $28=_PyIter_Next($27);
      $item=$28;
      var $29=(($28)|(0))!=0;
      if ($29) { label = 9; break; } else { label = 27; break; }
    case 9: 
      var $31=$emit;
      var $32=$3;
      var $33=_fputs($31, $32);
      var $34=$separator;
      $emit=$34;
      var $35=$item;
      var $36=$3;
      var $37=_PyObject_Print($35, $36, 0);
      var $38=(($37)|(0))!=0;
      if ($38) { label = 10; break; } else { label = 21; break; }
    case 10: 
      label = 11; break;
    case 11: 
      var $41=$item;
      var $42=(($41)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=((($43)-(1))|0);
      HEAP32[(($42)>>2)]=$44;
      var $45=(($44)|(0))!=0;
      if ($45) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      var $48=$item;
      var $49=(($48+4)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=(($50+24)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=$item;
      FUNCTION_TABLE[$52]($53);
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $57=$it;
      var $58=(($57)|0);
      var $59=HEAP32[(($58)>>2)];
      var $60=((($59)-(1))|0);
      HEAP32[(($58)>>2)]=$60;
      var $61=(($60)|(0))!=0;
      if ($61) { label = 17; break; } else { label = 18; break; }
    case 17: 
      label = 19; break;
    case 18: 
      var $64=$it;
      var $65=(($64+4)|0);
      var $66=HEAP32[(($65)>>2)];
      var $67=(($66+24)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=$it;
      FUNCTION_TABLE[$68]($69);
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $72=$2;
      _Py_ReprLeave($72);
      $1=-1;
      label = 38; break;
    case 21: 
      label = 22; break;
    case 22: 
      var $75=$item;
      var $76=(($75)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=((($77)-(1))|0);
      HEAP32[(($76)>>2)]=$78;
      var $79=(($78)|(0))!=0;
      if ($79) { label = 23; break; } else { label = 24; break; }
    case 23: 
      label = 25; break;
    case 24: 
      var $82=$item;
      var $83=(($82+4)|0);
      var $84=HEAP32[(($83)>>2)];
      var $85=(($84+24)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=$item;
      FUNCTION_TABLE[$86]($87);
      label = 25; break;
    case 25: 
      label = 26; break;
    case 26: 
      label = 8; break;
    case 27: 
      var $91=$2;
      _Py_ReprLeave($91);
      label = 28; break;
    case 28: 
      var $93=$it;
      var $94=(($93)|0);
      var $95=HEAP32[(($94)>>2)];
      var $96=((($95)-(1))|0);
      HEAP32[(($94)>>2)]=$96;
      var $97=(($96)|(0))!=0;
      if ($97) { label = 29; break; } else { label = 30; break; }
    case 29: 
      label = 31; break;
    case 30: 
      var $100=$it;
      var $101=(($100+4)|0);
      var $102=HEAP32[(($101)>>2)];
      var $103=(($102+24)|0);
      var $104=HEAP32[(($103)>>2)];
      var $105=$it;
      FUNCTION_TABLE[$104]($105);
      label = 31; break;
    case 31: 
      label = 32; break;
    case 32: 
      var $108=_PyErr_Occurred();
      var $109=(($108)|(0))!=0;
      if ($109) { label = 33; break; } else { label = 34; break; }
    case 33: 
      $1=-1;
      label = 38; break;
    case 34: 
      var $112=$2;
      var $113=$112;
      var $114=(($113+28)|0);
      var $115=HEAP32[(($114)>>2)];
      var $116=(($115)|(0))==-1;
      if ($116) { label = 35; break; } else { label = 36; break; }
    case 35: 
      var $118=$3;
      var $119=_fputs(((__str86)|0), $118);
      label = 37; break;
    case 36: 
      var $121=$3;
      var $122=$2;
      var $123=$122;
      var $124=(($123+28)|0);
      var $125=HEAP32[(($124)>>2)];
      var $126=_fprintf($121, ((__str87)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$125,tempInt));
      label = 37; break;
    case 37: 
      $1=0;
      label = 38; break;
    case 38: 
      var $129=$1;
      STACKTOP = __stackBase__;
      return $129;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_dealloc($deque) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      $1=$deque;
      var $2=$1;
      var $3=$2;
      _PyObject_GC_UnTrack($3);
      var $4=$1;
      var $5=(($4+36)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6)|(0))!=0;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=$1;
      var $10=$9;
      _PyObject_ClearWeakRefs($10);
      label = 3; break;
    case 3: 
      var $12=$1;
      var $13=(($12+8)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=(($14)|(0))!=0;
      if ($15) { label = 4; break; } else { label = 8; break; }
    case 4: 
      var $17=$1;
      _deque_clear($17);
      var $18=$1;
      var $19=(($18+8)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=(($20)|(0))!=0;
      if ($21) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 7; break;
    case 6: 
      ___assert_func(((__str6)|0), 774, ((___func___deque_dealloc)|0), ((__str37)|0));
      throw "Reached an unreachable!";
      label = 7; break;
    case 7: 
      var $26=$1;
      var $27=(($26+8)|0);
      var $28=HEAP32[(($27)>>2)];
      _freeblock($28);
      label = 8; break;
    case 8: 
      var $30=$1;
      var $31=(($30+8)|0);
      HEAP32[(($31)>>2)]=0;
      var $32=$1;
      var $33=(($32+12)|0);
      HEAP32[(($33)>>2)]=0;
      var $34=$1;
      var $35=$34;
      var $36=(($35+4)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=(($37+160)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=$1;
      var $41=$40;
      FUNCTION_TABLE[$39]($41);
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_repr($deque) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $aslist;
      var $result;
      var $fmt;
      var $i;
      $2=$deque;
      var $3=$2;
      var $4=_Py_ReprEnter($3);
      $i=$4;
      var $5=$i;
      var $6=(($5)|(0))!=0;
      if ($6) { label = 2; break; } else { label = 5; break; }
    case 2: 
      var $8=$i;
      var $9=(($8)|(0)) < 0;
      if ($9) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 28; break;
    case 4: 
      var $12=_PyString_FromString(((__str81)|0));
      $1=$12;
      label = 28; break;
    case 5: 
      var $14=$2;
      var $15=_PySequence_List($14);
      $aslist=$15;
      var $16=$aslist;
      var $17=(($16)|(0))==0;
      if ($17) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $19=$2;
      _Py_ReprLeave($19);
      $1=0;
      label = 28; break;
    case 7: 
      var $21=$2;
      var $22=$21;
      var $23=(($22+28)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=(($24)|(0))!=-1;
      if ($25) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $27=$2;
      var $28=$27;
      var $29=(($28+28)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=_PyString_FromFormat(((__str82)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$30,tempInt));
      $fmt=$31;
      label = 10; break;
    case 9: 
      var $33=_PyString_FromString(((__str83)|0));
      $fmt=$33;
      label = 10; break;
    case 10: 
      var $35=$fmt;
      var $36=(($35)|(0))==0;
      if ($36) { label = 11; break; } else { label = 17; break; }
    case 11: 
      label = 12; break;
    case 12: 
      var $39=$aslist;
      var $40=(($39)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=((($41)-(1))|0);
      HEAP32[(($40)>>2)]=$42;
      var $43=(($42)|(0))!=0;
      if ($43) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 15; break;
    case 14: 
      var $46=$aslist;
      var $47=(($46+4)|0);
      var $48=HEAP32[(($47)>>2)];
      var $49=(($48+24)|0);
      var $50=HEAP32[(($49)>>2)];
      var $51=$aslist;
      FUNCTION_TABLE[$50]($51);
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $54=$2;
      _Py_ReprLeave($54);
      $1=0;
      label = 28; break;
    case 17: 
      var $56=$fmt;
      var $57=$aslist;
      var $58=_PyString_Format($56, $57);
      $result=$58;
      label = 18; break;
    case 18: 
      var $60=$fmt;
      var $61=(($60)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=((($62)-(1))|0);
      HEAP32[(($61)>>2)]=$63;
      var $64=(($63)|(0))!=0;
      if ($64) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 21; break;
    case 20: 
      var $67=$fmt;
      var $68=(($67+4)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=(($69+24)|0);
      var $71=HEAP32[(($70)>>2)];
      var $72=$fmt;
      FUNCTION_TABLE[$71]($72);
      label = 21; break;
    case 21: 
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      var $76=$aslist;
      var $77=(($76)|0);
      var $78=HEAP32[(($77)>>2)];
      var $79=((($78)-(1))|0);
      HEAP32[(($77)>>2)]=$79;
      var $80=(($79)|(0))!=0;
      if ($80) { label = 24; break; } else { label = 25; break; }
    case 24: 
      label = 26; break;
    case 25: 
      var $83=$aslist;
      var $84=(($83+4)|0);
      var $85=HEAP32[(($84)>>2)];
      var $86=(($85+24)|0);
      var $87=HEAP32[(($86)>>2)];
      var $88=$aslist;
      FUNCTION_TABLE[$87]($88);
      label = 26; break;
    case 26: 
      label = 27; break;
    case 27: 
      var $91=$2;
      _Py_ReprLeave($91);
      var $92=$result;
      $1=$92;
      label = 28; break;
    case 28: 
      var $94=$1;
      STACKTOP = __stackBase__;
      return $94;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_traverse($deque, $visit, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $b;
      var $item;
      var $index;
      var $indexlo;
      var $indexhi;
      var $vret;
      $2=$deque;
      $3=$visit;
      $4=$arg;
      var $5=$2;
      var $6=(($5+16)|0);
      var $7=HEAP32[(($6)>>2)];
      $indexlo=$7;
      var $8=$2;
      var $9=(($8+8)|0);
      var $10=HEAP32[(($9)>>2)];
      $b=$10;
      label = 2; break;
    case 2: 
      var $12=$b;
      var $13=(($12)|(0))!=0;
      if ($13) { label = 3; break; } else { label = 18; break; }
    case 3: 
      var $15=$b;
      var $16=$2;
      var $17=(($16+12)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($15)|(0))==(($18)|(0));
      if ($19) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $21=$2;
      var $22=(($21+20)|0);
      var $23=HEAP32[(($22)>>2)];
      var $26 = $23;label = 6; break;
    case 5: 
      var $26 = 61;label = 6; break;
    case 6: 
      var $26;
      $indexhi=$26;
      var $27=$indexlo;
      $index=$27;
      label = 7; break;
    case 7: 
      var $29=$index;
      var $30=$indexhi;
      var $31=(($29)|(0)) <= (($30)|(0));
      if ($31) { label = 8; break; } else { label = 16; break; }
    case 8: 
      var $33=$index;
      var $34=$b;
      var $35=(($34+8)|0);
      var $36=(($35+($33<<2))|0);
      var $37=HEAP32[(($36)>>2)];
      $item=$37;
      label = 9; break;
    case 9: 
      var $39=$item;
      var $40=(($39)|(0))!=0;
      if ($40) { label = 10; break; } else { label = 13; break; }
    case 10: 
      var $42=$3;
      var $43=$item;
      var $44=$4;
      var $45=FUNCTION_TABLE[$42]($43, $44);
      $vret=$45;
      var $46=$vret;
      var $47=(($46)|(0))!=0;
      if ($47) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $49=$vret;
      $1=$49;
      label = 19; break;
    case 12: 
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $54=$index;
      var $55=((($54)+(1))|0);
      $index=$55;
      label = 7; break;
    case 16: 
      $indexlo=0;
      label = 17; break;
    case 17: 
      var $58=$b;
      var $59=(($58+4)|0);
      var $60=HEAP32[(($59)>>2)];
      $b=$60;
      label = 2; break;
    case 18: 
      $1=0;
      label = 19; break;
    case 19: 
      var $63=$1;
      return $63;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_clear($deque) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $item;
      $1=$deque;
      label = 2; break;
    case 2: 
      var $3=$1;
      var $4=(($3+24)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 12; break; }
    case 3: 
      var $8=$1;
      var $9=_deque_pop($8, 0);
      $item=$9;
      var $10=$item;
      var $11=(($10)|(0))!=0;
      if ($11) { label = 4; break; } else { label = 5; break; }
    case 4: 
      label = 6; break;
    case 5: 
      ___assert_func(((__str6)|0), 652, ((___func___deque_clear)|0), ((__str77)|0));
      throw "Reached an unreachable!";
      label = 6; break;
    case 6: 
      label = 7; break;
    case 7: 
      var $17=$item;
      var $18=(($17)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=((($19)-(1))|0);
      HEAP32[(($18)>>2)]=$20;
      var $21=(($20)|(0))!=0;
      if ($21) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 10; break;
    case 9: 
      var $24=$item;
      var $25=(($24+4)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=(($26+24)|0);
      var $28=HEAP32[(($27)>>2)];
      var $29=$item;
      FUNCTION_TABLE[$28]($29);
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      label = 2; break;
    case 12: 
      var $33=$1;
      var $34=(($33+8)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=$1;
      var $37=(($36+12)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=(($35)|(0))==(($38)|(0));
      if ($39) { label = 13; break; } else { label = 16; break; }
    case 13: 
      var $41=$1;
      var $42=(($41+16)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=((($43)-(1))|0);
      var $45=$1;
      var $46=(($45+20)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=(($44)|(0))==(($47)|(0));
      if ($48) { label = 14; break; } else { label = 16; break; }
    case 14: 
      var $50=$1;
      var $51=(($50+24)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=(($52)|(0))==0;
      if ($53) { label = 15; break; } else { label = 16; break; }
    case 15: 
      label = 17; break;
    case 16: 
      ___assert_func(((__str6)|0), 657, ((___func___deque_clear)|0), ((__str78)|0));
      throw "Reached an unreachable!";
      label = 17; break;
    case 17: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_richcompare($v, $w, $op) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $it1;
      var $it2;
      var $x;
      var $y;
      var $vs;
      var $ws;
      var $b;
      var $cmp;
      $2=$v;
      $3=$w;
      $4=$op;
      $it1=0;
      $it2=0;
      $cmp=-1;
      var $5=$2;
      var $6=(($5+4)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7)|(0))==((_deque_type)|(0));
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $10=$2;
      var $11=(($10+4)|0);
      var $12=HEAP32[(($11)>>2)];
      var $13=_PyType_IsSubtype($12, _deque_type);
      var $14=(($13)|(0))!=0;
      if ($14) { label = 3; break; } else { label = 5; break; }
    case 3: 
      var $16=$3;
      var $17=(($16+4)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18)|(0))==((_deque_type)|(0));
      if ($19) { label = 6; break; } else { label = 4; break; }
    case 4: 
      var $21=$3;
      var $22=(($21+4)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=_PyType_IsSubtype($23, _deque_type);
      var $25=(($24)|(0))!=0;
      if ($25) { label = 6; break; } else { label = 5; break; }
    case 5: 
      var $27=HEAP32[((((__Py_NotImplementedStruct)|0))>>2)];
      var $28=((($27)+(1))|0);
      HEAP32[((((__Py_NotImplementedStruct)|0))>>2)]=$28;
      $1=__Py_NotImplementedStruct;
      label = 109; break;
    case 6: 
      var $30=$2;
      var $31=$30;
      var $32=(($31+24)|0);
      var $33=HEAP32[(($32)>>2)];
      $vs=$33;
      var $34=$3;
      var $35=$34;
      var $36=(($35+24)|0);
      var $37=HEAP32[(($36)>>2)];
      $ws=$37;
      var $38=$4;
      var $39=(($38)|(0))==2;
      if ($39) { label = 7; break; } else { label = 12; break; }
    case 7: 
      var $41=$2;
      var $42=$3;
      var $43=(($41)|(0))==(($42)|(0));
      if ($43) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $45=HEAP32[((((__Py_TrueStruct)|0))>>2)];
      var $46=((($45)+(1))|0);
      HEAP32[((((__Py_TrueStruct)|0))>>2)]=$46;
      $1=__Py_TrueStruct;
      label = 109; break;
    case 9: 
      var $48=$vs;
      var $49=$ws;
      var $50=(($48)|(0))!=(($49)|(0));
      if ($50) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $52=HEAP32[((((__Py_ZeroStruct)|0))>>2)];
      var $53=((($52)+(1))|0);
      HEAP32[((((__Py_ZeroStruct)|0))>>2)]=$53;
      $1=__Py_ZeroStruct;
      label = 109; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $56=$4;
      var $57=(($56)|(0))==3;
      if ($57) { label = 13; break; } else { label = 18; break; }
    case 13: 
      var $59=$2;
      var $60=$3;
      var $61=(($59)|(0))==(($60)|(0));
      if ($61) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $63=HEAP32[((((__Py_ZeroStruct)|0))>>2)];
      var $64=((($63)+(1))|0);
      HEAP32[((((__Py_ZeroStruct)|0))>>2)]=$64;
      $1=__Py_ZeroStruct;
      label = 109; break;
    case 15: 
      var $66=$vs;
      var $67=$ws;
      var $68=(($66)|(0))!=(($67)|(0));
      if ($68) { label = 16; break; } else { label = 17; break; }
    case 16: 
      var $70=HEAP32[((((__Py_TrueStruct)|0))>>2)];
      var $71=((($70)+(1))|0);
      HEAP32[((((__Py_TrueStruct)|0))>>2)]=$71;
      $1=__Py_TrueStruct;
      label = 109; break;
    case 17: 
      label = 18; break;
    case 18: 
      var $74=$2;
      var $75=_PyObject_GetIter($74);
      $it1=$75;
      var $76=$it1;
      var $77=(($76)|(0))==0;
      if ($77) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 84; break;
    case 20: 
      var $80=$3;
      var $81=_PyObject_GetIter($80);
      $it2=$81;
      var $82=$it2;
      var $83=(($82)|(0))==0;
      if ($83) { label = 21; break; } else { label = 22; break; }
    case 21: 
      label = 84; break;
    case 22: 
      label = 23; break;
    case 23: 
      var $87=$it1;
      var $88=_PyIter_Next($87);
      $x=$88;
      var $89=$x;
      var $90=(($89)|(0))==0;
      if ($90) { label = 24; break; } else { label = 26; break; }
    case 24: 
      var $92=_PyErr_Occurred();
      var $93=(($92)|(0))!=0;
      if ($93) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 84; break;
    case 26: 
      var $96=$it2;
      var $97=_PyIter_Next($96);
      $y=$97;
      var $98=$x;
      var $99=(($98)|(0))==0;
      if ($99) { label = 28; break; } else { label = 27; break; }
    case 27: 
      var $101=$y;
      var $102=(($101)|(0))==0;
      if ($102) { label = 28; break; } else { label = 29; break; }
    case 28: 
      label = 54; break;
    case 29: 
      var $105=$x;
      var $106=$y;
      var $107=_PyObject_RichCompareBool($105, $106, 2);
      $b=$107;
      var $108=$b;
      var $109=(($108)|(0))==0;
      if ($109) { label = 30; break; } else { label = 41; break; }
    case 30: 
      var $111=$x;
      var $112=$y;
      var $113=$4;
      var $114=_PyObject_RichCompareBool($111, $112, $113);
      $cmp=$114;
      label = 31; break;
    case 31: 
      var $116=$x;
      var $117=(($116)|0);
      var $118=HEAP32[(($117)>>2)];
      var $119=((($118)-(1))|0);
      HEAP32[(($117)>>2)]=$119;
      var $120=(($119)|(0))!=0;
      if ($120) { label = 32; break; } else { label = 33; break; }
    case 32: 
      label = 34; break;
    case 33: 
      var $123=$x;
      var $124=(($123+4)|0);
      var $125=HEAP32[(($124)>>2)];
      var $126=(($125+24)|0);
      var $127=HEAP32[(($126)>>2)];
      var $128=$x;
      FUNCTION_TABLE[$127]($128);
      label = 34; break;
    case 34: 
      label = 35; break;
    case 35: 
      label = 36; break;
    case 36: 
      var $132=$y;
      var $133=(($132)|0);
      var $134=HEAP32[(($133)>>2)];
      var $135=((($134)-(1))|0);
      HEAP32[(($133)>>2)]=$135;
      var $136=(($135)|(0))!=0;
      if ($136) { label = 37; break; } else { label = 38; break; }
    case 37: 
      label = 39; break;
    case 38: 
      var $139=$y;
      var $140=(($139+4)|0);
      var $141=HEAP32[(($140)>>2)];
      var $142=(($141+24)|0);
      var $143=HEAP32[(($142)>>2)];
      var $144=$y;
      FUNCTION_TABLE[$143]($144);
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      label = 84; break;
    case 41: 
      label = 42; break;
    case 42: 
      var $149=$x;
      var $150=(($149)|0);
      var $151=HEAP32[(($150)>>2)];
      var $152=((($151)-(1))|0);
      HEAP32[(($150)>>2)]=$152;
      var $153=(($152)|(0))!=0;
      if ($153) { label = 43; break; } else { label = 44; break; }
    case 43: 
      label = 45; break;
    case 44: 
      var $156=$x;
      var $157=(($156+4)|0);
      var $158=HEAP32[(($157)>>2)];
      var $159=(($158+24)|0);
      var $160=HEAP32[(($159)>>2)];
      var $161=$x;
      FUNCTION_TABLE[$160]($161);
      label = 45; break;
    case 45: 
      label = 46; break;
    case 46: 
      label = 47; break;
    case 47: 
      var $165=$y;
      var $166=(($165)|0);
      var $167=HEAP32[(($166)>>2)];
      var $168=((($167)-(1))|0);
      HEAP32[(($166)>>2)]=$168;
      var $169=(($168)|(0))!=0;
      if ($169) { label = 48; break; } else { label = 49; break; }
    case 48: 
      label = 50; break;
    case 49: 
      var $172=$y;
      var $173=(($172+4)|0);
      var $174=HEAP32[(($173)>>2)];
      var $175=(($174+24)|0);
      var $176=HEAP32[(($175)>>2)];
      var $177=$y;
      FUNCTION_TABLE[$176]($177);
      label = 50; break;
    case 50: 
      label = 51; break;
    case 51: 
      var $180=$b;
      var $181=(($180)|(0))==-1;
      if ($181) { label = 52; break; } else { label = 53; break; }
    case 52: 
      label = 84; break;
    case 53: 
      label = 23; break;
    case 54: 
      label = 55; break;
    case 55: 
      var $186=$x;
      var $187=(($186)|(0))==0;
      if ($187) { label = 56; break; } else { label = 57; break; }
    case 56: 
      label = 63; break;
    case 57: 
      label = 58; break;
    case 58: 
      var $191=$x;
      var $192=(($191)|0);
      var $193=HEAP32[(($192)>>2)];
      var $194=((($193)-(1))|0);
      HEAP32[(($192)>>2)]=$194;
      var $195=(($194)|(0))!=0;
      if ($195) { label = 59; break; } else { label = 60; break; }
    case 59: 
      label = 61; break;
    case 60: 
      var $198=$x;
      var $199=(($198+4)|0);
      var $200=HEAP32[(($199)>>2)];
      var $201=(($200+24)|0);
      var $202=HEAP32[(($201)>>2)];
      var $203=$x;
      FUNCTION_TABLE[$202]($203);
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
      var $209=$y;
      var $210=(($209)|(0))==0;
      if ($210) { label = 66; break; } else { label = 67; break; }
    case 66: 
      label = 73; break;
    case 67: 
      label = 68; break;
    case 68: 
      var $214=$y;
      var $215=(($214)|0);
      var $216=HEAP32[(($215)>>2)];
      var $217=((($216)-(1))|0);
      HEAP32[(($215)>>2)]=$217;
      var $218=(($217)|(0))!=0;
      if ($218) { label = 69; break; } else { label = 70; break; }
    case 69: 
      label = 71; break;
    case 70: 
      var $221=$y;
      var $222=(($221+4)|0);
      var $223=HEAP32[(($222)>>2)];
      var $224=(($223+24)|0);
      var $225=HEAP32[(($224)>>2)];
      var $226=$y;
      FUNCTION_TABLE[$225]($226);
      label = 71; break;
    case 71: 
      label = 72; break;
    case 72: 
      label = 73; break;
    case 73: 
      label = 74; break;
    case 74: 
      var $231=_PyErr_Occurred();
      var $232=(($231)|(0))!=0;
      if ($232) { label = 75; break; } else { label = 76; break; }
    case 75: 
      label = 84; break;
    case 76: 
      var $235=$4;
      if ((($235)|(0))==0) {
        label = 77; break;
      }
      else if ((($235)|(0))==1) {
        label = 78; break;
      }
      else if ((($235)|(0))==2) {
        label = 79; break;
      }
      else if ((($235)|(0))==3) {
        label = 80; break;
      }
      else if ((($235)|(0))==4) {
        label = 81; break;
      }
      else if ((($235)|(0))==5) {
        label = 82; break;
      }
      else {
      label = 83; break;
      }
    case 77: 
      var $237=$y;
      var $238=(($237)|(0))!=0;
      var $239=(($238)&(1));
      $cmp=$239;
      label = 83; break;
    case 78: 
      var $241=$x;
      var $242=(($241)|(0))==0;
      var $243=(($242)&(1));
      $cmp=$243;
      label = 83; break;
    case 79: 
      var $245=$x;
      var $246=$y;
      var $247=(($245)|(0))==(($246)|(0));
      var $248=(($247)&(1));
      $cmp=$248;
      label = 83; break;
    case 80: 
      var $250=$x;
      var $251=$y;
      var $252=(($250)|(0))!=(($251)|(0));
      var $253=(($252)&(1));
      $cmp=$253;
      label = 83; break;
    case 81: 
      var $255=$x;
      var $256=(($255)|(0))!=0;
      var $257=(($256)&(1));
      $cmp=$257;
      label = 83; break;
    case 82: 
      var $259=$y;
      var $260=(($259)|(0))==0;
      var $261=(($260)&(1));
      $cmp=$261;
      label = 83; break;
    case 83: 
      label = 84; break;
    case 84: 
      label = 85; break;
    case 85: 
      var $265=$it1;
      var $266=(($265)|(0))==0;
      if ($266) { label = 86; break; } else { label = 87; break; }
    case 86: 
      label = 93; break;
    case 87: 
      label = 88; break;
    case 88: 
      var $270=$it1;
      var $271=(($270)|0);
      var $272=HEAP32[(($271)>>2)];
      var $273=((($272)-(1))|0);
      HEAP32[(($271)>>2)]=$273;
      var $274=(($273)|(0))!=0;
      if ($274) { label = 89; break; } else { label = 90; break; }
    case 89: 
      label = 91; break;
    case 90: 
      var $277=$it1;
      var $278=(($277+4)|0);
      var $279=HEAP32[(($278)>>2)];
      var $280=(($279+24)|0);
      var $281=HEAP32[(($280)>>2)];
      var $282=$it1;
      FUNCTION_TABLE[$281]($282);
      label = 91; break;
    case 91: 
      label = 92; break;
    case 92: 
      label = 93; break;
    case 93: 
      label = 94; break;
    case 94: 
      label = 95; break;
    case 95: 
      var $288=$it2;
      var $289=(($288)|(0))==0;
      if ($289) { label = 96; break; } else { label = 97; break; }
    case 96: 
      label = 103; break;
    case 97: 
      label = 98; break;
    case 98: 
      var $293=$it2;
      var $294=(($293)|0);
      var $295=HEAP32[(($294)>>2)];
      var $296=((($295)-(1))|0);
      HEAP32[(($294)>>2)]=$296;
      var $297=(($296)|(0))!=0;
      if ($297) { label = 99; break; } else { label = 100; break; }
    case 99: 
      label = 101; break;
    case 100: 
      var $300=$it2;
      var $301=(($300+4)|0);
      var $302=HEAP32[(($301)>>2)];
      var $303=(($302+24)|0);
      var $304=HEAP32[(($303)>>2)];
      var $305=$it2;
      FUNCTION_TABLE[$304]($305);
      label = 101; break;
    case 101: 
      label = 102; break;
    case 102: 
      label = 103; break;
    case 103: 
      label = 104; break;
    case 104: 
      var $310=$cmp;
      var $311=(($310)|(0))==1;
      if ($311) { label = 105; break; } else { label = 106; break; }
    case 105: 
      var $313=HEAP32[((((__Py_TrueStruct)|0))>>2)];
      var $314=((($313)+(1))|0);
      HEAP32[((((__Py_TrueStruct)|0))>>2)]=$314;
      $1=__Py_TrueStruct;
      label = 109; break;
    case 106: 
      var $316=$cmp;
      var $317=(($316)|(0))==0;
      if ($317) { label = 107; break; } else { label = 108; break; }
    case 107: 
      var $319=HEAP32[((((__Py_ZeroStruct)|0))>>2)];
      var $320=((($319)+(1))|0);
      HEAP32[((((__Py_ZeroStruct)|0))>>2)]=$320;
      $1=__Py_ZeroStruct;
      label = 109; break;
    case 108: 
      $1=0;
      label = 109; break;
    case 109: 
      var $323=$1;
      return $323;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_iter($deque) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $it;
      $2=$deque;
      var $3=__PyObject_GC_New(_dequeiter_type);
      var $4=$3;
      $it=$4;
      var $5=$it;
      var $6=(($5)|(0))==0;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 4; break;
    case 3: 
      var $9=$2;
      var $10=(($9+8)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=$it;
      var $13=(($12+12)|0);
      HEAP32[(($13)>>2)]=$11;
      var $14=$2;
      var $15=(($14+16)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=$it;
      var $18=(($17+8)|0);
      HEAP32[(($18)>>2)]=$16;
      var $19=$2;
      var $20=$19;
      var $21=(($20)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=((($22)+(1))|0);
      HEAP32[(($21)>>2)]=$23;
      var $24=$2;
      var $25=$it;
      var $26=(($25+16)|0);
      HEAP32[(($26)>>2)]=$24;
      var $27=$2;
      var $28=(($27+32)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=$it;
      var $31=(($30+20)|0);
      HEAP32[(($31)>>2)]=$29;
      var $32=$2;
      var $33=(($32+24)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=$it;
      var $36=(($35+24)|0);
      HEAP32[(($36)>>2)]=$34;
      var $37=$it;
      var $38=$37;
      _PyObject_GC_Track($38);
      var $39=$it;
      var $40=$39;
      $1=$40;
      label = 4; break;
    case 4: 
      var $42=$1;
      return $42;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_init($deque, $args, $kwdargs) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 20)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $iterable=__stackBase__;
      var $maxlenobj=(__stackBase__)+(4);
      var $maxlen;
      var $kwlist=(__stackBase__)+(8);
      var $rv;
      $2=$deque;
      $3=$args;
      $4=$kwdargs;
      HEAP32[(($iterable)>>2)]=0;
      HEAP32[(($maxlenobj)>>2)]=0;
      $maxlen=-1;
      var $5=$kwlist;
      assert(12 % 1 === 0);HEAP32[(($5)>>2)]=HEAP32[((_deque_init_kwlist)>>2)];HEAP32[((($5)+(4))>>2)]=HEAP32[(((_deque_init_kwlist)+(4))>>2)];HEAP32[((($5)+(8))>>2)]=HEAP32[(((_deque_init_kwlist)+(8))>>2)];
      var $6=$3;
      var $7=$4;
      var $8=(($kwlist)|0);
      var $9=_PyArg_ParseTupleAndKeywords($6, $7, ((__str32)|0), $8, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$iterable,HEAP32[(((tempInt)+(4))>>2)]=$maxlenobj,tempInt));
      var $10=(($9)|(0))!=0;
      if ($10) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=-1;
      label = 21; break;
    case 3: 
      var $13=HEAP32[(($maxlenobj)>>2)];
      var $14=(($13)|(0))!=0;
      if ($14) { label = 4; break; } else { label = 11; break; }
    case 4: 
      var $16=HEAP32[(($maxlenobj)>>2)];
      var $17=(($16)|(0))!=((__Py_NoneStruct)|(0));
      if ($17) { label = 5; break; } else { label = 11; break; }
    case 5: 
      var $19=HEAP32[(($maxlenobj)>>2)];
      var $20=_PyInt_AsSsize_t($19);
      $maxlen=$20;
      var $21=$maxlen;
      var $22=(($21)|(0))==-1;
      if ($22) { label = 6; break; } else { label = 8; break; }
    case 6: 
      var $24=_PyErr_Occurred();
      var $25=(($24)|(0))!=0;
      if ($25) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=-1;
      label = 21; break;
    case 8: 
      var $28=$maxlen;
      var $29=(($28)|(0)) < 0;
      if ($29) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $31=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($31, ((__str33)|0));
      $1=-1;
      label = 21; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $34=$maxlen;
      var $35=$2;
      var $36=(($35+28)|0);
      HEAP32[(($36)>>2)]=$34;
      var $37=$2;
      _deque_clear($37);
      var $38=HEAP32[(($iterable)>>2)];
      var $39=(($38)|(0))!=0;
      if ($39) { label = 12; break; } else { label = 20; break; }
    case 12: 
      var $41=$2;
      var $42=HEAP32[(($iterable)>>2)];
      var $43=_deque_extend($41, $42);
      $rv=$43;
      var $44=$rv;
      var $45=(($44)|(0))==0;
      if ($45) { label = 13; break; } else { label = 14; break; }
    case 13: 
      $1=-1;
      label = 21; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $49=$rv;
      var $50=(($49)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=((($51)-(1))|0);
      HEAP32[(($50)>>2)]=$52;
      var $53=(($52)|(0))!=0;
      if ($53) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 18; break;
    case 17: 
      var $56=$rv;
      var $57=(($56+4)|0);
      var $58=HEAP32[(($57)>>2)];
      var $59=(($58+24)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=$rv;
      FUNCTION_TABLE[$60]($61);
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      $1=0;
      label = 21; break;
    case 21: 
      var $66=$1;
      STACKTOP = __stackBase__;
      return $66;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_new($type, $args, $kwds) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $deque;
      var $b;
      $2=$type;
      $3=$args;
      $4=$kwds;
      var $5=$2;
      var $6=(($5+152)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=$2;
      var $9=FUNCTION_TABLE[$7]($8, 0);
      var $10=$9;
      $deque=$10;
      var $11=$deque;
      var $12=(($11)|(0))==0;
      if ($12) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 11; break;
    case 3: 
      var $15=_newblock(0, 0, 0);
      $b=$15;
      var $16=$b;
      var $17=(($16)|(0))==0;
      if ($17) { label = 4; break; } else { label = 10; break; }
    case 4: 
      label = 5; break;
    case 5: 
      var $20=$deque;
      var $21=$20;
      var $22=(($21)|0);
      var $23=HEAP32[(($22)>>2)];
      var $24=((($23)-(1))|0);
      HEAP32[(($22)>>2)]=$24;
      var $25=(($24)|(0))!=0;
      if ($25) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      var $28=$deque;
      var $29=$28;
      var $30=(($29+4)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=(($31+24)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=$deque;
      var $35=$34;
      FUNCTION_TABLE[$33]($35);
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      $1=0;
      label = 11; break;
    case 10: 
      var $39=$b;
      var $40=$deque;
      var $41=(($40+8)|0);
      HEAP32[(($41)>>2)]=$39;
      var $42=$b;
      var $43=$deque;
      var $44=(($43+12)|0);
      HEAP32[(($44)>>2)]=$42;
      var $45=$deque;
      var $46=(($45+16)|0);
      HEAP32[(($46)>>2)]=31;
      var $47=$deque;
      var $48=(($47+20)|0);
      HEAP32[(($48)>>2)]=30;
      var $49=$deque;
      var $50=(($49+24)|0);
      HEAP32[(($50)>>2)]=0;
      var $51=$deque;
      var $52=(($51+32)|0);
      HEAP32[(($52)>>2)]=0;
      var $53=$deque;
      var $54=(($53+36)|0);
      HEAP32[(($54)>>2)]=0;
      var $55=$deque;
      var $56=(($55+28)|0);
      HEAP32[(($56)>>2)]=-1;
      var $57=$deque;
      var $58=$57;
      $1=$58;
      label = 11; break;
    case 11: 
      var $60=$1;
      return $60;
    default: assert(0, "bad label: " + label);
  }
}
function _newblock($leftlink, $rightlink, $len) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $b;
      $2=$leftlink;
      $3=$rightlink;
      $4=$len;
      var $5=$4;
      var $6=(($5)|(0)) >= 2147483523;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $8=HEAP32[((_PyExc_OverflowError)>>2)];
      _PyErr_SetString($8, ((__str29)|0));
      $1=0;
      label = 9; break;
    case 3: 
      var $10=HEAP32[((_numfreeblocks)>>2)];
      var $11=(($10)|(0))!=0;
      if ($11) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $13=HEAP32[((_numfreeblocks)>>2)];
      var $14=((($13)-(1))|0);
      HEAP32[((_numfreeblocks)>>2)]=$14;
      var $15=HEAP32[((_numfreeblocks)>>2)];
      var $16=((_freeblocks+($15<<2))|0);
      var $17=HEAP32[(($16)>>2)];
      $b=$17;
      label = 8; break;
    case 5: 
      var $19=_PyMem_Malloc(256);
      var $20=$19;
      $b=$20;
      var $21=$b;
      var $22=(($21)|(0))==0;
      if ($22) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $24=_PyErr_NoMemory();
      $1=0;
      label = 9; break;
    case 7: 
      label = 8; break;
    case 8: 
      var $27=$2;
      var $28=$b;
      var $29=(($28)|0);
      HEAP32[(($29)>>2)]=$27;
      var $30=$3;
      var $31=$b;
      var $32=(($31+4)|0);
      HEAP32[(($32)>>2)]=$30;
      var $33=$b;
      $1=$33;
      label = 9; break;
    case 9: 
      var $35=$1;
      return $35;
    default: assert(0, "bad label: " + label);
  }
}
function _consume_iterator($it) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $item;
      $2=$it;
      label = 2; break;
    case 2: 
      var $4=$2;
      var $5=_PyIter_Next($4);
      $item=$5;
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 9; break; }
    case 3: 
      label = 4; break;
    case 4: 
      var $9=$item;
      var $10=(($9)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=((($11)-(1))|0);
      HEAP32[(($10)>>2)]=$12;
      var $13=(($12)|(0))!=0;
      if ($13) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 7; break;
    case 6: 
      var $16=$item;
      var $17=(($16+4)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18+24)|0);
      var $20=HEAP32[(($19)>>2)];
      var $21=$item;
      FUNCTION_TABLE[$20]($21);
      label = 7; break;
    case 7: 
      label = 8; break;
    case 8: 
      label = 2; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $26=$2;
      var $27=(($26)|0);
      var $28=HEAP32[(($27)>>2)];
      var $29=((($28)-(1))|0);
      HEAP32[(($27)>>2)]=$29;
      var $30=(($29)|(0))!=0;
      if ($30) { label = 11; break; } else { label = 12; break; }
    case 11: 
      label = 13; break;
    case 12: 
      var $33=$2;
      var $34=(($33+4)|0);
      var $35=HEAP32[(($34)>>2)];
      var $36=(($35+24)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=$2;
      FUNCTION_TABLE[$37]($38);
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      var $41=_PyErr_Occurred();
      var $42=(($41)|(0))!=0;
      if ($42) { label = 15; break; } else { label = 16; break; }
    case 15: 
      $1=0;
      label = 17; break;
    case 16: 
      var $45=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $46=((($45)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$46;
      $1=__Py_NoneStruct;
      label = 17; break;
    case 17: 
      var $48=$1;
      return $48;
    default: assert(0, "bad label: " + label);
  }
}
function _freeblock($b) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      $1=$b;
      var $2=HEAP32[((_numfreeblocks)>>2)];
      var $3=(($2)|(0)) < 10;
      if ($3) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $5=$1;
      var $6=HEAP32[((_numfreeblocks)>>2)];
      var $7=((_freeblocks+($6<<2))|0);
      HEAP32[(($7)>>2)]=$5;
      var $8=HEAP32[((_numfreeblocks)>>2)];
      var $9=((($8)+(1))|0);
      HEAP32[((_numfreeblocks)>>2)]=$9;
      label = 4; break;
    case 3: 
      var $11=$1;
      var $12=$11;
      _PyMem_Free($12);
      label = 4; break;
    case 4: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_get_maxlen($deque) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$deque;
      var $3=$2;
      var $4=(($3+28)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=(($5)|(0))==-1;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $8=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $9=((($8)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$9;
      $1=__Py_NoneStruct;
      label = 4; break;
    case 3: 
      var $11=$2;
      var $12=(($11+28)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=_PyInt_FromSsize_t($13);
      $1=$14;
      label = 4; break;
    case 4: 
      var $16=$1;
      return $16;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_extend($deque, $iterable) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $it;
      var $item;
      var $result;
      var $s;
      var $b;
      var $rv;
      $2=$deque;
      $3=$iterable;
      var $4=$2;
      var $5=$4;
      var $6=$3;
      var $7=(($5)|(0))==(($6)|(0));
      if ($7) { label = 2; break; } else { label = 10; break; }
    case 2: 
      var $9=$3;
      var $10=_PySequence_List($9);
      $s=$10;
      var $11=$s;
      var $12=(($11)|(0))==0;
      if ($12) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 54; break;
    case 4: 
      var $15=$2;
      var $16=$s;
      var $17=_deque_extend($15, $16);
      $result=$17;
      label = 5; break;
    case 5: 
      var $19=$s;
      var $20=(($19)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=((($21)-(1))|0);
      HEAP32[(($20)>>2)]=$22;
      var $23=(($22)|(0))!=0;
      if ($23) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      var $26=$s;
      var $27=(($26+4)|0);
      var $28=HEAP32[(($27)>>2)];
      var $29=(($28+24)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$s;
      FUNCTION_TABLE[$30]($31);
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      var $34=$result;
      $1=$34;
      label = 54; break;
    case 10: 
      var $36=$3;
      var $37=_PyObject_GetIter($36);
      $it=$37;
      var $38=$it;
      var $39=(($38)|(0))==0;
      if ($39) { label = 11; break; } else { label = 12; break; }
    case 11: 
      $1=0;
      label = 54; break;
    case 12: 
      var $42=$2;
      var $43=(($42+28)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=(($44)|(0))==0;
      if ($45) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $47=$it;
      var $48=_consume_iterator($47);
      $1=$48;
      label = 54; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $51=$it;
      var $52=_PyIter_Next($51);
      $item=$52;
      var $53=(($52)|(0))!=0;
      if ($53) { label = 16; break; } else { label = 46; break; }
    case 16: 
      var $55=$2;
      var $56=(($55+32)|0);
      var $57=HEAP32[(($56)>>2)];
      var $58=((($57)+(1))|0);
      HEAP32[(($56)>>2)]=$58;
      var $59=$2;
      var $60=(($59+20)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=(($61)|(0))==61;
      if ($62) { label = 17; break; } else { label = 33; break; }
    case 17: 
      var $64=$2;
      var $65=(($64+12)|0);
      var $66=HEAP32[(($65)>>2)];
      var $67=$2;
      var $68=(($67+24)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=_newblock($66, 0, $69);
      $b=$70;
      var $71=$b;
      var $72=(($71)|(0))==0;
      if ($72) { label = 18; break; } else { label = 29; break; }
    case 18: 
      label = 19; break;
    case 19: 
      var $75=$item;
      var $76=(($75)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=((($77)-(1))|0);
      HEAP32[(($76)>>2)]=$78;
      var $79=(($78)|(0))!=0;
      if ($79) { label = 20; break; } else { label = 21; break; }
    case 20: 
      label = 22; break;
    case 21: 
      var $82=$item;
      var $83=(($82+4)|0);
      var $84=HEAP32[(($83)>>2)];
      var $85=(($84+24)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=$item;
      FUNCTION_TABLE[$86]($87);
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $91=$it;
      var $92=(($91)|0);
      var $93=HEAP32[(($92)>>2)];
      var $94=((($93)-(1))|0);
      HEAP32[(($92)>>2)]=$94;
      var $95=(($94)|(0))!=0;
      if ($95) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 27; break;
    case 26: 
      var $98=$it;
      var $99=(($98+4)|0);
      var $100=HEAP32[(($99)>>2)];
      var $101=(($100+24)|0);
      var $102=HEAP32[(($101)>>2)];
      var $103=$it;
      FUNCTION_TABLE[$102]($103);
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      $1=0;
      label = 54; break;
    case 29: 
      var $107=$2;
      var $108=(($107+12)|0);
      var $109=HEAP32[(($108)>>2)];
      var $110=(($109+4)|0);
      var $111=HEAP32[(($110)>>2)];
      var $112=(($111)|(0))==0;
      if ($112) { label = 30; break; } else { label = 31; break; }
    case 30: 
      label = 32; break;
    case 31: 
      ___assert_func(((__str6)|0), 329, ((___func___deque_extend)|0), ((__str34)|0));
      throw "Reached an unreachable!";
      label = 32; break;
    case 32: 
      var $117=$b;
      var $118=$2;
      var $119=(($118+12)|0);
      var $120=HEAP32[(($119)>>2)];
      var $121=(($120+4)|0);
      HEAP32[(($121)>>2)]=$117;
      var $122=$b;
      var $123=$2;
      var $124=(($123+12)|0);
      HEAP32[(($124)>>2)]=$122;
      var $125=$2;
      var $126=(($125+20)|0);
      HEAP32[(($126)>>2)]=-1;
      label = 33; break;
    case 33: 
      var $128=$2;
      var $129=(($128+24)|0);
      var $130=HEAP32[(($129)>>2)];
      var $131=((($130)+(1))|0);
      HEAP32[(($129)>>2)]=$131;
      var $132=$2;
      var $133=(($132+20)|0);
      var $134=HEAP32[(($133)>>2)];
      var $135=((($134)+(1))|0);
      HEAP32[(($133)>>2)]=$135;
      var $136=$item;
      var $137=$2;
      var $138=(($137+20)|0);
      var $139=HEAP32[(($138)>>2)];
      var $140=$2;
      var $141=(($140+12)|0);
      var $142=HEAP32[(($141)>>2)];
      var $143=(($142+8)|0);
      var $144=(($143+($139<<2))|0);
      HEAP32[(($144)>>2)]=$136;
      var $145=$2;
      var $146=(($145+28)|0);
      var $147=HEAP32[(($146)>>2)];
      var $148=(($147)|(0))!=-1;
      if ($148) { label = 34; break; } else { label = 45; break; }
    case 34: 
      var $150=$2;
      var $151=(($150+24)|0);
      var $152=HEAP32[(($151)>>2)];
      var $153=$2;
      var $154=(($153+28)|0);
      var $155=HEAP32[(($154)>>2)];
      var $156=(($152)|(0)) > (($155)|(0));
      if ($156) { label = 35; break; } else { label = 45; break; }
    case 35: 
      var $158=$2;
      var $159=_deque_popleft($158, 0);
      $rv=$159;
      var $160=$rv;
      var $161=(($160)|(0))!=0;
      if ($161) { label = 36; break; } else { label = 38; break; }
    case 36: 
      var $163=$2;
      var $164=(($163+24)|0);
      var $165=HEAP32[(($164)>>2)];
      var $166=$2;
      var $167=(($166+28)|0);
      var $168=HEAP32[(($167)>>2)];
      var $169=(($165)|(0)) <= (($168)|(0));
      if ($169) { label = 37; break; } else { label = 38; break; }
    case 37: 
      label = 39; break;
    case 38: 
      ___assert_func(((__str6)|0), 337, ((___func___deque_extend)|0), ((__str35)|0));
      throw "Reached an unreachable!";
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      var $175=$rv;
      var $176=(($175)|0);
      var $177=HEAP32[(($176)>>2)];
      var $178=((($177)-(1))|0);
      HEAP32[(($176)>>2)]=$178;
      var $179=(($178)|(0))!=0;
      if ($179) { label = 41; break; } else { label = 42; break; }
    case 41: 
      label = 43; break;
    case 42: 
      var $182=$rv;
      var $183=(($182+4)|0);
      var $184=HEAP32[(($183)>>2)];
      var $185=(($184+24)|0);
      var $186=HEAP32[(($185)>>2)];
      var $187=$rv;
      FUNCTION_TABLE[$186]($187);
      label = 43; break;
    case 43: 
      label = 44; break;
    case 44: 
      label = 45; break;
    case 45: 
      label = 15; break;
    case 46: 
      label = 47; break;
    case 47: 
      var $193=$it;
      var $194=(($193)|0);
      var $195=HEAP32[(($194)>>2)];
      var $196=((($195)-(1))|0);
      HEAP32[(($194)>>2)]=$196;
      var $197=(($196)|(0))!=0;
      if ($197) { label = 48; break; } else { label = 49; break; }
    case 48: 
      label = 50; break;
    case 49: 
      var $200=$it;
      var $201=(($200+4)|0);
      var $202=HEAP32[(($201)>>2)];
      var $203=(($202+24)|0);
      var $204=HEAP32[(($203)>>2)];
      var $205=$it;
      FUNCTION_TABLE[$204]($205);
      label = 50; break;
    case 50: 
      label = 51; break;
    case 51: 
      var $208=_PyErr_Occurred();
      var $209=(($208)|(0))!=0;
      if ($209) { label = 52; break; } else { label = 53; break; }
    case 52: 
      $1=0;
      label = 54; break;
    case 53: 
      var $212=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $213=((($212)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$213;
      $1=__Py_NoneStruct;
      label = 54; break;
    case 54: 
      var $215=$1;
      return $215;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_popleft($deque, $unused) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $item;
      var $prevblock;
      $2=$deque;
      $3=$unused;
      var $4=$2;
      var $5=(($4+24)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6)|(0))==0;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($9, ((__str36)|0));
      $1=0;
      label = 24; break;
    case 3: 
      var $11=$2;
      var $12=(($11+8)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=(($13)|(0))!=0;
      if ($14) { label = 4; break; } else { label = 5; break; }
    case 4: 
      label = 6; break;
    case 5: 
      ___assert_func(((__str6)|0), 205, ((___func___deque_popleft)|0), ((__str37)|0));
      throw "Reached an unreachable!";
      label = 6; break;
    case 6: 
      var $19=$2;
      var $20=(($19+16)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=$2;
      var $23=(($22+8)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=(($24+8)|0);
      var $26=(($25+($21<<2))|0);
      var $27=HEAP32[(($26)>>2)];
      $item=$27;
      var $28=$2;
      var $29=(($28+16)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=((($30)+(1))|0);
      HEAP32[(($29)>>2)]=$31;
      var $32=$2;
      var $33=(($32+24)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=((($34)-(1))|0);
      HEAP32[(($33)>>2)]=$35;
      var $36=$2;
      var $37=(($36+32)|0);
      var $38=HEAP32[(($37)>>2)];
      var $39=((($38)+(1))|0);
      HEAP32[(($37)>>2)]=$39;
      var $40=$2;
      var $41=(($40+16)|0);
      var $42=HEAP32[(($41)>>2)];
      var $43=(($42)|(0))==62;
      if ($43) { label = 7; break; } else { label = 23; break; }
    case 7: 
      var $45=$2;
      var $46=(($45+24)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=(($47)|(0))==0;
      if ($48) { label = 8; break; } else { label = 15; break; }
    case 8: 
      var $50=$2;
      var $51=(($50+8)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=$2;
      var $54=(($53+12)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=(($52)|(0))==(($55)|(0));
      if ($56) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 11; break;
    case 10: 
      ___assert_func(((__str6)|0), 213, ((___func___deque_popleft)|0), ((__str38)|0));
      throw "Reached an unreachable!";
      label = 11; break;
    case 11: 
      var $61=$2;
      var $62=(($61+16)|0);
      var $63=HEAP32[(($62)>>2)];
      var $64=$2;
      var $65=(($64+20)|0);
      var $66=HEAP32[(($65)>>2)];
      var $67=((($66)+(1))|0);
      var $68=(($63)|(0))==(($67)|(0));
      if ($68) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      ___assert_func(((__str6)|0), 214, ((___func___deque_popleft)|0), ((__str39)|0));
      throw "Reached an unreachable!";
      label = 14; break;
    case 14: 
      var $73=$2;
      var $74=(($73+16)|0);
      HEAP32[(($74)>>2)]=31;
      var $75=$2;
      var $76=(($75+20)|0);
      HEAP32[(($76)>>2)]=30;
      label = 22; break;
    case 15: 
      var $78=$2;
      var $79=(($78+8)|0);
      var $80=HEAP32[(($79)>>2)];
      var $81=$2;
      var $82=(($81+12)|0);
      var $83=HEAP32[(($82)>>2)];
      var $84=(($80)|(0))!=(($83)|(0));
      if ($84) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 18; break;
    case 17: 
      ___assert_func(((__str6)|0), 219, ((___func___deque_popleft)|0), ((__str40)|0));
      throw "Reached an unreachable!";
      label = 18; break;
    case 18: 
      var $89=$2;
      var $90=(($89+8)|0);
      var $91=HEAP32[(($90)>>2)];
      var $92=(($91+4)|0);
      var $93=HEAP32[(($92)>>2)];
      $prevblock=$93;
      var $94=$2;
      var $95=(($94+8)|0);
      var $96=HEAP32[(($95)>>2)];
      _freeblock($96);
      var $97=$prevblock;
      var $98=(($97)|(0))!=0;
      if ($98) { label = 19; break; } else { label = 20; break; }
    case 19: 
      label = 21; break;
    case 20: 
      ___assert_func(((__str6)|0), 222, ((___func___deque_popleft)|0), ((__str41)|0));
      throw "Reached an unreachable!";
      label = 21; break;
    case 21: 
      var $103=$prevblock;
      var $104=(($103)|0);
      HEAP32[(($104)>>2)]=0;
      var $105=$prevblock;
      var $106=$2;
      var $107=(($106+8)|0);
      HEAP32[(($107)>>2)]=$105;
      var $108=$2;
      var $109=(($108+16)|0);
      HEAP32[(($109)>>2)]=0;
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      var $112=$item;
      $1=$112;
      label = 24; break;
    case 24: 
      var $114=$1;
      return $114;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_append($deque, $item) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $b;
      var $rv;
      $2=$deque;
      $3=$item;
      var $4=$2;
      var $5=(($4+32)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=((($6)+(1))|0);
      HEAP32[(($5)>>2)]=$7;
      var $8=$2;
      var $9=(($8+20)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10)|(0))==61;
      if ($11) { label = 2; break; } else { label = 8; break; }
    case 2: 
      var $13=$2;
      var $14=(($13+12)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=$2;
      var $17=(($16+24)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=_newblock($15, 0, $18);
      $b=$19;
      var $20=$b;
      var $21=(($20)|(0))==0;
      if ($21) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 21; break;
    case 4: 
      var $24=$2;
      var $25=(($24+12)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=(($26+4)|0);
      var $28=HEAP32[(($27)>>2)];
      var $29=(($28)|(0))==0;
      if ($29) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 7; break;
    case 6: 
      ___assert_func(((__str6)|0), 241, ((___func___deque_append)|0), ((__str34)|0));
      throw "Reached an unreachable!";
      label = 7; break;
    case 7: 
      var $34=$b;
      var $35=$2;
      var $36=(($35+12)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=(($37+4)|0);
      HEAP32[(($38)>>2)]=$34;
      var $39=$b;
      var $40=$2;
      var $41=(($40+12)|0);
      HEAP32[(($41)>>2)]=$39;
      var $42=$2;
      var $43=(($42+20)|0);
      HEAP32[(($43)>>2)]=-1;
      label = 8; break;
    case 8: 
      var $45=$3;
      var $46=(($45)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=((($47)+(1))|0);
      HEAP32[(($46)>>2)]=$48;
      var $49=$2;
      var $50=(($49+24)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=((($51)+(1))|0);
      HEAP32[(($50)>>2)]=$52;
      var $53=$2;
      var $54=(($53+20)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=((($55)+(1))|0);
      HEAP32[(($54)>>2)]=$56;
      var $57=$3;
      var $58=$2;
      var $59=(($58+20)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=$2;
      var $62=(($61+12)|0);
      var $63=HEAP32[(($62)>>2)];
      var $64=(($63+8)|0);
      var $65=(($64+($60<<2))|0);
      HEAP32[(($65)>>2)]=$57;
      var $66=$2;
      var $67=(($66+28)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=(($68)|(0))!=-1;
      if ($69) { label = 9; break; } else { label = 20; break; }
    case 9: 
      var $71=$2;
      var $72=(($71+24)|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=$2;
      var $75=(($74+28)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=(($73)|(0)) > (($76)|(0));
      if ($77) { label = 10; break; } else { label = 20; break; }
    case 10: 
      var $79=$2;
      var $80=_deque_popleft($79, 0);
      $rv=$80;
      var $81=$rv;
      var $82=(($81)|(0))!=0;
      if ($82) { label = 11; break; } else { label = 13; break; }
    case 11: 
      var $84=$2;
      var $85=(($84+24)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=$2;
      var $88=(($87+28)|0);
      var $89=HEAP32[(($88)>>2)];
      var $90=(($86)|(0)) <= (($89)|(0));
      if ($90) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      ___assert_func(((__str6)|0), 250, ((___func___deque_append)|0), ((__str35)|0));
      throw "Reached an unreachable!";
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $96=$rv;
      var $97=(($96)|0);
      var $98=HEAP32[(($97)>>2)];
      var $99=((($98)-(1))|0);
      HEAP32[(($97)>>2)]=$99;
      var $100=(($99)|(0))!=0;
      if ($100) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 18; break;
    case 17: 
      var $103=$rv;
      var $104=(($103+4)|0);
      var $105=HEAP32[(($104)>>2)];
      var $106=(($105+24)|0);
      var $107=HEAP32[(($106)>>2)];
      var $108=$rv;
      FUNCTION_TABLE[$107]($108);
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $112=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $113=((($112)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$113;
      $1=__Py_NoneStruct;
      label = 21; break;
    case 21: 
      var $115=$1;
      return $115;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_clearmethod($deque) {
  var label = 0;
  var $1;
  $1=$deque;
  var $2=$1;
  _deque_clear($2);
  var $3=HEAP32[((((__Py_NoneStruct)|0))>>2)];
  var $4=((($3)+(1))|0);
  HEAP32[((((__Py_NoneStruct)|0))>>2)]=$4;
  return __Py_NoneStruct;
}
function _deque_copy($deque) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$deque;
      var $3=$2;
      var $4=$3;
      var $5=(($4+28)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6)|(0))==-1;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=$2;
      var $10=(($9+4)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=$11;
      var $13=$2;
      var $14=_PyObject_CallFunction($12, ((__str75)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$13,HEAP32[(((tempInt)+(4))>>2)]=0,tempInt));
      $1=$14;
      label = 4; break;
    case 3: 
      var $16=$2;
      var $17=(($16+4)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=$18;
      var $20=$2;
      var $21=$2;
      var $22=$21;
      var $23=(($22+28)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=_PyObject_CallFunction($19, ((__str76)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 12)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$20,HEAP32[(((tempInt)+(4))>>2)]=$24,HEAP32[(((tempInt)+(8))>>2)]=0,tempInt));
      $1=$25;
      label = 4; break;
    case 4: 
      var $27=$1;
      STACKTOP = __stackBase__;
      return $27;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_count($deque, $v) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $leftblock;
      var $leftindex;
      var $n;
      var $i;
      var $count;
      var $item;
      var $start_state;
      var $cmp;
      $2=$deque;
      $3=$v;
      var $4=$2;
      var $5=(($4+8)|0);
      var $6=HEAP32[(($5)>>2)];
      $leftblock=$6;
      var $7=$2;
      var $8=(($7+16)|0);
      var $9=HEAP32[(($8)>>2)];
      $leftindex=$9;
      var $10=$2;
      var $11=(($10+24)|0);
      var $12=HEAP32[(($11)>>2)];
      $n=$12;
      $count=0;
      var $13=$2;
      var $14=(($13+32)|0);
      var $15=HEAP32[(($14)>>2)];
      $start_state=$15;
      $i=0;
      label = 2; break;
    case 2: 
      var $17=$i;
      var $18=$n;
      var $19=(($17)|(0)) < (($18)|(0));
      if ($19) { label = 3; break; } else { label = 16; break; }
    case 3: 
      var $21=$leftindex;
      var $22=$leftblock;
      var $23=(($22+8)|0);
      var $24=(($23+($21<<2))|0);
      var $25=HEAP32[(($24)>>2)];
      $item=$25;
      var $26=$item;
      var $27=$3;
      var $28=_PyObject_RichCompareBool($26, $27, 2);
      $cmp=$28;
      var $29=$cmp;
      var $30=(($29)|(0)) > 0;
      if ($30) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $32=$count;
      var $33=((($32)+(1))|0);
      $count=$33;
      label = 8; break;
    case 5: 
      var $35=$cmp;
      var $36=(($35)|(0)) < 0;
      if ($36) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 17; break;
    case 7: 
      label = 8; break;
    case 8: 
      var $40=$start_state;
      var $41=$2;
      var $42=(($41+32)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=(($40)|(0))!=(($43)|(0));
      if ($44) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $46=HEAP32[((_PyExc_RuntimeError)>>2)];
      _PyErr_SetString($46, ((__str5)|0));
      $1=0;
      label = 17; break;
    case 10: 
      var $48=$leftindex;
      var $49=((($48)+(1))|0);
      $leftindex=$49;
      var $50=$leftindex;
      var $51=(($50)|(0))==62;
      if ($51) { label = 11; break; } else { label = 14; break; }
    case 11: 
      var $53=$leftblock;
      var $54=(($53+4)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=(($55)|(0))==0;
      if ($56) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 16; break;
    case 13: 
      var $59=$leftblock;
      var $60=(($59+4)|0);
      var $61=HEAP32[(($60)>>2)];
      $leftblock=$61;
      $leftindex=0;
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $64=$i;
      var $65=((($64)+(1))|0);
      $i=$65;
      label = 2; break;
    case 16: 
      var $67=$count;
      var $68=_PyInt_FromSsize_t($67);
      $1=$68;
      label = 17; break;
    case 17: 
      var $70=$1;
      return $70;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_appendleft($deque, $item) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $b;
      var $rv;
      $2=$deque;
      $3=$item;
      var $4=$2;
      var $5=(($4+32)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=((($6)+(1))|0);
      HEAP32[(($5)>>2)]=$7;
      var $8=$2;
      var $9=(($8+16)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10)|(0))==0;
      if ($11) { label = 2; break; } else { label = 8; break; }
    case 2: 
      var $13=$2;
      var $14=(($13+8)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=$2;
      var $17=(($16+24)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=_newblock(0, $15, $18);
      $b=$19;
      var $20=$b;
      var $21=(($20)|(0))==0;
      if ($21) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 21; break;
    case 4: 
      var $24=$2;
      var $25=(($24+8)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=(($26)|0);
      var $28=HEAP32[(($27)>>2)];
      var $29=(($28)|(0))==0;
      if ($29) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 7; break;
    case 6: 
      ___assert_func(((__str6)|0), 264, ((___func___deque_appendleft)|0), ((__str60)|0));
      throw "Reached an unreachable!";
      label = 7; break;
    case 7: 
      var $34=$b;
      var $35=$2;
      var $36=(($35+8)|0);
      var $37=HEAP32[(($36)>>2)];
      var $38=(($37)|0);
      HEAP32[(($38)>>2)]=$34;
      var $39=$b;
      var $40=$2;
      var $41=(($40+8)|0);
      HEAP32[(($41)>>2)]=$39;
      var $42=$2;
      var $43=(($42+16)|0);
      HEAP32[(($43)>>2)]=62;
      label = 8; break;
    case 8: 
      var $45=$3;
      var $46=(($45)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=((($47)+(1))|0);
      HEAP32[(($46)>>2)]=$48;
      var $49=$2;
      var $50=(($49+24)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=((($51)+(1))|0);
      HEAP32[(($50)>>2)]=$52;
      var $53=$2;
      var $54=(($53+16)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=((($55)-(1))|0);
      HEAP32[(($54)>>2)]=$56;
      var $57=$3;
      var $58=$2;
      var $59=(($58+16)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=$2;
      var $62=(($61+8)|0);
      var $63=HEAP32[(($62)>>2)];
      var $64=(($63+8)|0);
      var $65=(($64+($60<<2))|0);
      HEAP32[(($65)>>2)]=$57;
      var $66=$2;
      var $67=(($66+28)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=(($68)|(0))!=-1;
      if ($69) { label = 9; break; } else { label = 20; break; }
    case 9: 
      var $71=$2;
      var $72=(($71+24)|0);
      var $73=HEAP32[(($72)>>2)];
      var $74=$2;
      var $75=(($74+28)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=(($73)|(0)) > (($76)|(0));
      if ($77) { label = 10; break; } else { label = 20; break; }
    case 10: 
      var $79=$2;
      var $80=_deque_pop($79, 0);
      $rv=$80;
      var $81=$rv;
      var $82=(($81)|(0))!=0;
      if ($82) { label = 11; break; } else { label = 13; break; }
    case 11: 
      var $84=$2;
      var $85=(($84+24)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=$2;
      var $88=(($87+28)|0);
      var $89=HEAP32[(($88)>>2)];
      var $90=(($86)|(0)) <= (($89)|(0));
      if ($90) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      ___assert_func(((__str6)|0), 273, ((___func___deque_appendleft)|0), ((__str35)|0));
      throw "Reached an unreachable!";
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $96=$rv;
      var $97=(($96)|0);
      var $98=HEAP32[(($97)>>2)];
      var $99=((($98)-(1))|0);
      HEAP32[(($97)>>2)]=$99;
      var $100=(($99)|(0))!=0;
      if ($100) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 18; break;
    case 17: 
      var $103=$rv;
      var $104=(($103+4)|0);
      var $105=HEAP32[(($104)>>2)];
      var $106=(($105+24)|0);
      var $107=HEAP32[(($106)>>2)];
      var $108=$rv;
      FUNCTION_TABLE[$107]($108);
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $112=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $113=((($112)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$113;
      $1=__Py_NoneStruct;
      label = 21; break;
    case 21: 
      var $115=$1;
      return $115;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_extendleft($deque, $iterable) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $it;
      var $item;
      var $result;
      var $s;
      var $b;
      var $rv;
      $2=$deque;
      $3=$iterable;
      var $4=$2;
      var $5=$4;
      var $6=$3;
      var $7=(($5)|(0))==(($6)|(0));
      if ($7) { label = 2; break; } else { label = 10; break; }
    case 2: 
      var $9=$3;
      var $10=_PySequence_List($9);
      $s=$10;
      var $11=$s;
      var $12=(($11)|(0))==0;
      if ($12) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 54; break;
    case 4: 
      var $15=$2;
      var $16=$s;
      var $17=_deque_extendleft($15, $16);
      $result=$17;
      label = 5; break;
    case 5: 
      var $19=$s;
      var $20=(($19)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=((($21)-(1))|0);
      HEAP32[(($20)>>2)]=$22;
      var $23=(($22)|(0))!=0;
      if ($23) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      var $26=$s;
      var $27=(($26+4)|0);
      var $28=HEAP32[(($27)>>2)];
      var $29=(($28+24)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$s;
      FUNCTION_TABLE[$30]($31);
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      var $34=$result;
      $1=$34;
      label = 54; break;
    case 10: 
      var $36=$3;
      var $37=_PyObject_GetIter($36);
      $it=$37;
      var $38=$it;
      var $39=(($38)|(0))==0;
      if ($39) { label = 11; break; } else { label = 12; break; }
    case 11: 
      $1=0;
      label = 54; break;
    case 12: 
      var $42=$2;
      var $43=(($42+28)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=(($44)|(0))==0;
      if ($45) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $47=$it;
      var $48=_consume_iterator($47);
      $1=$48;
      label = 54; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $51=$it;
      var $52=_PyIter_Next($51);
      $item=$52;
      var $53=(($52)|(0))!=0;
      if ($53) { label = 16; break; } else { label = 46; break; }
    case 16: 
      var $55=$2;
      var $56=(($55+32)|0);
      var $57=HEAP32[(($56)>>2)];
      var $58=((($57)+(1))|0);
      HEAP32[(($56)>>2)]=$58;
      var $59=$2;
      var $60=(($59+16)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=(($61)|(0))==0;
      if ($62) { label = 17; break; } else { label = 33; break; }
    case 17: 
      var $64=$2;
      var $65=(($64+8)|0);
      var $66=HEAP32[(($65)>>2)];
      var $67=$2;
      var $68=(($67+24)|0);
      var $69=HEAP32[(($68)>>2)];
      var $70=_newblock(0, $66, $69);
      $b=$70;
      var $71=$b;
      var $72=(($71)|(0))==0;
      if ($72) { label = 18; break; } else { label = 29; break; }
    case 18: 
      label = 19; break;
    case 19: 
      var $75=$item;
      var $76=(($75)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=((($77)-(1))|0);
      HEAP32[(($76)>>2)]=$78;
      var $79=(($78)|(0))!=0;
      if ($79) { label = 20; break; } else { label = 21; break; }
    case 20: 
      label = 22; break;
    case 21: 
      var $82=$item;
      var $83=(($82+4)|0);
      var $84=HEAP32[(($83)>>2)];
      var $85=(($84+24)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=$item;
      FUNCTION_TABLE[$86]($87);
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $91=$it;
      var $92=(($91)|0);
      var $93=HEAP32[(($92)>>2)];
      var $94=((($93)-(1))|0);
      HEAP32[(($92)>>2)]=$94;
      var $95=(($94)|(0))!=0;
      if ($95) { label = 25; break; } else { label = 26; break; }
    case 25: 
      label = 27; break;
    case 26: 
      var $98=$it;
      var $99=(($98+4)|0);
      var $100=HEAP32[(($99)>>2)];
      var $101=(($100+24)|0);
      var $102=HEAP32[(($101)>>2)];
      var $103=$it;
      FUNCTION_TABLE[$102]($103);
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      $1=0;
      label = 54; break;
    case 29: 
      var $107=$2;
      var $108=(($107+8)|0);
      var $109=HEAP32[(($108)>>2)];
      var $110=(($109)|0);
      var $111=HEAP32[(($110)>>2)];
      var $112=(($111)|(0))==0;
      if ($112) { label = 30; break; } else { label = 31; break; }
    case 30: 
      label = 32; break;
    case 31: 
      ___assert_func(((__str6)|0), 381, ((___func___deque_extendleft)|0), ((__str60)|0));
      throw "Reached an unreachable!";
      label = 32; break;
    case 32: 
      var $117=$b;
      var $118=$2;
      var $119=(($118+8)|0);
      var $120=HEAP32[(($119)>>2)];
      var $121=(($120)|0);
      HEAP32[(($121)>>2)]=$117;
      var $122=$b;
      var $123=$2;
      var $124=(($123+8)|0);
      HEAP32[(($124)>>2)]=$122;
      var $125=$2;
      var $126=(($125+16)|0);
      HEAP32[(($126)>>2)]=62;
      label = 33; break;
    case 33: 
      var $128=$2;
      var $129=(($128+24)|0);
      var $130=HEAP32[(($129)>>2)];
      var $131=((($130)+(1))|0);
      HEAP32[(($129)>>2)]=$131;
      var $132=$2;
      var $133=(($132+16)|0);
      var $134=HEAP32[(($133)>>2)];
      var $135=((($134)-(1))|0);
      HEAP32[(($133)>>2)]=$135;
      var $136=$item;
      var $137=$2;
      var $138=(($137+16)|0);
      var $139=HEAP32[(($138)>>2)];
      var $140=$2;
      var $141=(($140+8)|0);
      var $142=HEAP32[(($141)>>2)];
      var $143=(($142+8)|0);
      var $144=(($143+($139<<2))|0);
      HEAP32[(($144)>>2)]=$136;
      var $145=$2;
      var $146=(($145+28)|0);
      var $147=HEAP32[(($146)>>2)];
      var $148=(($147)|(0))!=-1;
      if ($148) { label = 34; break; } else { label = 45; break; }
    case 34: 
      var $150=$2;
      var $151=(($150+24)|0);
      var $152=HEAP32[(($151)>>2)];
      var $153=$2;
      var $154=(($153+28)|0);
      var $155=HEAP32[(($154)>>2)];
      var $156=(($152)|(0)) > (($155)|(0));
      if ($156) { label = 35; break; } else { label = 45; break; }
    case 35: 
      var $158=$2;
      var $159=_deque_pop($158, 0);
      $rv=$159;
      var $160=$rv;
      var $161=(($160)|(0))!=0;
      if ($161) { label = 36; break; } else { label = 38; break; }
    case 36: 
      var $163=$2;
      var $164=(($163+24)|0);
      var $165=HEAP32[(($164)>>2)];
      var $166=$2;
      var $167=(($166+28)|0);
      var $168=HEAP32[(($167)>>2)];
      var $169=(($165)|(0)) <= (($168)|(0));
      if ($169) { label = 37; break; } else { label = 38; break; }
    case 37: 
      label = 39; break;
    case 38: 
      ___assert_func(((__str6)|0), 389, ((___func___deque_extendleft)|0), ((__str35)|0));
      throw "Reached an unreachable!";
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      var $175=$rv;
      var $176=(($175)|0);
      var $177=HEAP32[(($176)>>2)];
      var $178=((($177)-(1))|0);
      HEAP32[(($176)>>2)]=$178;
      var $179=(($178)|(0))!=0;
      if ($179) { label = 41; break; } else { label = 42; break; }
    case 41: 
      label = 43; break;
    case 42: 
      var $182=$rv;
      var $183=(($182+4)|0);
      var $184=HEAP32[(($183)>>2)];
      var $185=(($184+24)|0);
      var $186=HEAP32[(($185)>>2)];
      var $187=$rv;
      FUNCTION_TABLE[$186]($187);
      label = 43; break;
    case 43: 
      label = 44; break;
    case 44: 
      label = 45; break;
    case 45: 
      label = 15; break;
    case 46: 
      label = 47; break;
    case 47: 
      var $193=$it;
      var $194=(($193)|0);
      var $195=HEAP32[(($194)>>2)];
      var $196=((($195)-(1))|0);
      HEAP32[(($194)>>2)]=$196;
      var $197=(($196)|(0))!=0;
      if ($197) { label = 48; break; } else { label = 49; break; }
    case 48: 
      label = 50; break;
    case 49: 
      var $200=$it;
      var $201=(($200+4)|0);
      var $202=HEAP32[(($201)>>2)];
      var $203=(($202+24)|0);
      var $204=HEAP32[(($203)>>2)];
      var $205=$it;
      FUNCTION_TABLE[$204]($205);
      label = 50; break;
    case 50: 
      label = 51; break;
    case 51: 
      var $208=_PyErr_Occurred();
      var $209=(($208)|(0))!=0;
      if ($209) { label = 52; break; } else { label = 53; break; }
    case 52: 
      $1=0;
      label = 54; break;
    case 53: 
      var $212=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $213=((($212)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$213;
      $1=__Py_NoneStruct;
      label = 54; break;
    case 54: 
      var $215=$1;
      return $215;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_pop($deque, $unused) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $item;
      var $prevblock;
      $2=$deque;
      $3=$unused;
      var $4=$2;
      var $5=(($4+24)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6)|(0))==0;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $9=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($9, ((__str36)|0));
      $1=0;
      label = 18; break;
    case 3: 
      var $11=$2;
      var $12=(($11+20)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=$2;
      var $15=(($14+12)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=(($16+8)|0);
      var $18=(($17+($13<<2))|0);
      var $19=HEAP32[(($18)>>2)];
      $item=$19;
      var $20=$2;
      var $21=(($20+20)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=((($22)-(1))|0);
      HEAP32[(($21)>>2)]=$23;
      var $24=$2;
      var $25=(($24+24)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=((($26)-(1))|0);
      HEAP32[(($25)>>2)]=$27;
      var $28=$2;
      var $29=(($28+32)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=((($30)+(1))|0);
      HEAP32[(($29)>>2)]=$31;
      var $32=$2;
      var $33=(($32+20)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=(($34)|(0))==-1;
      if ($35) { label = 4; break; } else { label = 17; break; }
    case 4: 
      var $37=$2;
      var $38=(($37+24)|0);
      var $39=HEAP32[(($38)>>2)];
      var $40=(($39)|(0))==0;
      if ($40) { label = 5; break; } else { label = 12; break; }
    case 5: 
      var $42=$2;
      var $43=(($42+8)|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=$2;
      var $46=(($45+12)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=(($44)|(0))==(($47)|(0));
      if ($48) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      ___assert_func(((__str6)|0), 176, ((___func___deque_pop)|0), ((__str38)|0));
      throw "Reached an unreachable!";
      label = 8; break;
    case 8: 
      var $53=$2;
      var $54=(($53+16)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=$2;
      var $57=(($56+20)|0);
      var $58=HEAP32[(($57)>>2)];
      var $59=((($58)+(1))|0);
      var $60=(($55)|(0))==(($59)|(0));
      if ($60) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 11; break;
    case 10: 
      ___assert_func(((__str6)|0), 177, ((___func___deque_pop)|0), ((__str39)|0));
      throw "Reached an unreachable!";
      label = 11; break;
    case 11: 
      var $65=$2;
      var $66=(($65+16)|0);
      HEAP32[(($66)>>2)]=31;
      var $67=$2;
      var $68=(($67+20)|0);
      HEAP32[(($68)>>2)]=30;
      label = 16; break;
    case 12: 
      var $70=$2;
      var $71=(($70+12)|0);
      var $72=HEAP32[(($71)>>2)];
      var $73=(($72)|0);
      var $74=HEAP32[(($73)>>2)];
      $prevblock=$74;
      var $75=$2;
      var $76=(($75+8)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=$2;
      var $79=(($78+12)|0);
      var $80=HEAP32[(($79)>>2)];
      var $81=(($77)|(0))!=(($80)|(0));
      if ($81) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 15; break;
    case 14: 
      ___assert_func(((__str6)|0), 183, ((___func___deque_pop)|0), ((__str40)|0));
      throw "Reached an unreachable!";
      label = 15; break;
    case 15: 
      var $86=$2;
      var $87=(($86+12)|0);
      var $88=HEAP32[(($87)>>2)];
      _freeblock($88);
      var $89=$prevblock;
      var $90=(($89+4)|0);
      HEAP32[(($90)>>2)]=0;
      var $91=$prevblock;
      var $92=$2;
      var $93=(($92+12)|0);
      HEAP32[(($93)>>2)]=$91;
      var $94=$2;
      var $95=(($94+20)|0);
      HEAP32[(($95)>>2)]=61;
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $98=$item;
      $1=$98;
      label = 18; break;
    case 18: 
      var $100=$1;
      return $100;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_reduce($deque) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $dict;
      var $result;
      var $aslist;
      $2=$deque;
      var $3=$2;
      var $4=$3;
      var $5=_PyObject_GetAttrString($4, ((__str70)|0));
      $dict=$5;
      var $6=$dict;
      var $7=(($6)|(0))==0;
      if ($7) { label = 2; break; } else { label = 3; break; }
    case 2: 
      _PyErr_Clear();
      label = 3; break;
    case 3: 
      var $10=$2;
      var $11=$10;
      var $12=_PySequence_List($11);
      $aslist=$12;
      var $13=$aslist;
      var $14=(($13)|(0))==0;
      if ($14) { label = 4; break; } else { label = 15; break; }
    case 4: 
      label = 5; break;
    case 5: 
      var $17=$dict;
      var $18=(($17)|(0))==0;
      if ($18) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 13; break;
    case 7: 
      label = 8; break;
    case 8: 
      var $22=$dict;
      var $23=(($22)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=((($24)-(1))|0);
      HEAP32[(($23)>>2)]=$25;
      var $26=(($25)|(0))!=0;
      if ($26) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 11; break;
    case 10: 
      var $29=$dict;
      var $30=(($29+4)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=(($31+24)|0);
      var $33=HEAP32[(($32)>>2)];
      var $34=$dict;
      FUNCTION_TABLE[$33]($34);
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      $1=0;
      label = 40; break;
    case 15: 
      var $40=$dict;
      var $41=(($40)|(0))==0;
      if ($41) { label = 16; break; } else { label = 20; break; }
    case 16: 
      var $43=$2;
      var $44=(($43+28)|0);
      var $45=HEAP32[(($44)>>2)];
      var $46=(($45)|(0))==-1;
      if ($46) { label = 17; break; } else { label = 18; break; }
    case 17: 
      var $48=$2;
      var $49=$48;
      var $50=(($49+4)|0);
      var $51=HEAP32[(($50)>>2)];
      var $52=$aslist;
      var $53=_Py_BuildValue(((__str71)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$51,HEAP32[(((tempInt)+(4))>>2)]=$52,tempInt));
      $result=$53;
      label = 19; break;
    case 18: 
      var $55=$2;
      var $56=$55;
      var $57=(($56+4)|0);
      var $58=HEAP32[(($57)>>2)];
      var $59=$aslist;
      var $60=$2;
      var $61=(($60+28)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=_Py_BuildValue(((__str72)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 12)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$58,HEAP32[(((tempInt)+(4))>>2)]=$59,HEAP32[(((tempInt)+(8))>>2)]=$62,tempInt));
      $result=$63;
      label = 19; break;
    case 19: 
      label = 24; break;
    case 20: 
      var $66=$2;
      var $67=(($66+28)|0);
      var $68=HEAP32[(($67)>>2)];
      var $69=(($68)|(0))==-1;
      if ($69) { label = 21; break; } else { label = 22; break; }
    case 21: 
      var $71=$2;
      var $72=$71;
      var $73=(($72+4)|0);
      var $74=HEAP32[(($73)>>2)];
      var $75=$aslist;
      var $76=$dict;
      var $77=_Py_BuildValue(((__str73)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$74,HEAP32[(((tempInt)+(4))>>2)]=$75,HEAP32[(((tempInt)+(8))>>2)]=__Py_NoneStruct,HEAP32[(((tempInt)+(12))>>2)]=$76,tempInt));
      $result=$77;
      label = 23; break;
    case 22: 
      var $79=$2;
      var $80=$79;
      var $81=(($80+4)|0);
      var $82=HEAP32[(($81)>>2)];
      var $83=$aslist;
      var $84=$2;
      var $85=(($84+28)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=$dict;
      var $88=_Py_BuildValue(((__str74)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$82,HEAP32[(((tempInt)+(4))>>2)]=$83,HEAP32[(((tempInt)+(8))>>2)]=$86,HEAP32[(((tempInt)+(12))>>2)]=$87,tempInt));
      $result=$88;
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      label = 25; break;
    case 25: 
      var $92=$dict;
      var $93=(($92)|(0))==0;
      if ($93) { label = 26; break; } else { label = 27; break; }
    case 26: 
      label = 33; break;
    case 27: 
      label = 28; break;
    case 28: 
      var $97=$dict;
      var $98=(($97)|0);
      var $99=HEAP32[(($98)>>2)];
      var $100=((($99)-(1))|0);
      HEAP32[(($98)>>2)]=$100;
      var $101=(($100)|(0))!=0;
      if ($101) { label = 29; break; } else { label = 30; break; }
    case 29: 
      label = 31; break;
    case 30: 
      var $104=$dict;
      var $105=(($104+4)|0);
      var $106=HEAP32[(($105)>>2)];
      var $107=(($106+24)|0);
      var $108=HEAP32[(($107)>>2)];
      var $109=$dict;
      FUNCTION_TABLE[$108]($109);
      label = 31; break;
    case 31: 
      label = 32; break;
    case 32: 
      label = 33; break;
    case 33: 
      label = 34; break;
    case 34: 
      label = 35; break;
    case 35: 
      var $115=$aslist;
      var $116=(($115)|0);
      var $117=HEAP32[(($116)>>2)];
      var $118=((($117)-(1))|0);
      HEAP32[(($116)>>2)]=$118;
      var $119=(($118)|(0))!=0;
      if ($119) { label = 36; break; } else { label = 37; break; }
    case 36: 
      label = 38; break;
    case 37: 
      var $122=$aslist;
      var $123=(($122+4)|0);
      var $124=HEAP32[(($123)>>2)];
      var $125=(($124+24)|0);
      var $126=HEAP32[(($125)>>2)];
      var $127=$aslist;
      FUNCTION_TABLE[$126]($127);
      label = 38; break;
    case 38: 
      label = 39; break;
    case 39: 
      var $130=$result;
      $1=$130;
      label = 40; break;
    case 40: 
      var $132=$1;
      STACKTOP = __stackBase__;
      return $132;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_reviter($deque) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $it;
      $2=$deque;
      var $3=__PyObject_GC_New(_dequereviter_type);
      var $4=$3;
      $it=$4;
      var $5=$it;
      var $6=(($5)|(0))==0;
      if ($6) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 4; break;
    case 3: 
      var $9=$2;
      var $10=(($9+12)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=$it;
      var $13=(($12+12)|0);
      HEAP32[(($13)>>2)]=$11;
      var $14=$2;
      var $15=(($14+20)|0);
      var $16=HEAP32[(($15)>>2)];
      var $17=$it;
      var $18=(($17+8)|0);
      HEAP32[(($18)>>2)]=$16;
      var $19=$2;
      var $20=$19;
      var $21=(($20)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=((($22)+(1))|0);
      HEAP32[(($21)>>2)]=$23;
      var $24=$2;
      var $25=$it;
      var $26=(($25+16)|0);
      HEAP32[(($26)>>2)]=$24;
      var $27=$2;
      var $28=(($27+32)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=$it;
      var $31=(($30+20)|0);
      HEAP32[(($31)>>2)]=$29;
      var $32=$2;
      var $33=(($32+24)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=$it;
      var $36=(($35+24)|0);
      HEAP32[(($36)>>2)]=$34;
      var $37=$it;
      var $38=$37;
      _PyObject_GC_Track($38);
      var $39=$it;
      var $40=$39;
      $1=$40;
      label = 4; break;
    case 4: 
      var $42=$1;
      return $42;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_rotate($deque, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $n=__stackBase__;
      $2=$deque;
      $3=$args;
      HEAP32[(($n)>>2)]=1;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str57)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 4)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$n,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 6; break;
    case 3: 
      var $9=$2;
      var $10=HEAP32[(($n)>>2)];
      var $11=__deque_rotate($9, $10);
      var $12=(($11)|(0))==0;
      if ($12) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $14=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $15=((($14)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$15;
      $1=__Py_NoneStruct;
      label = 6; break;
    case 5: 
      $1=0;
      label = 6; break;
    case 6: 
      var $18=$1;
      STACKTOP = __stackBase__;
      return $18;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_remove($deque, $value) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $i;
      var $n;
      var $item;
      var $cmp;
      var $tgt;
      $2=$deque;
      $3=$value;
      var $4=$2;
      var $5=(($4+24)|0);
      var $6=HEAP32[(($5)>>2)];
      $n=$6;
      $i=0;
      label = 2; break;
    case 2: 
      var $8=$i;
      var $9=$n;
      var $10=(($8)|(0)) < (($9)|(0));
      if ($10) { label = 3; break; } else { label = 22; break; }
    case 3: 
      var $12=$2;
      var $13=(($12+16)|0);
      var $14=HEAP32[(($13)>>2)];
      var $15=$2;
      var $16=(($15+8)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=(($17+8)|0);
      var $19=(($18+($14<<2))|0);
      var $20=HEAP32[(($19)>>2)];
      $item=$20;
      var $21=$item;
      var $22=$3;
      var $23=_PyObject_RichCompareBool($21, $22, 2);
      $cmp=$23;
      var $24=$2;
      var $25=(($24+24)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=$n;
      var $28=(($26)|(0))!=(($27)|(0));
      if ($28) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $30=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($30, ((__str67)|0));
      $1=0;
      label = 23; break;
    case 5: 
      var $32=$cmp;
      var $33=(($32)|(0)) > 0;
      if ($33) { label = 6; break; } else { label = 17; break; }
    case 6: 
      var $35=$2;
      var $36=_deque_popleft($35, 0);
      $tgt=$36;
      var $37=$tgt;
      var $38=(($37)|(0))!=0;
      if ($38) { label = 7; break; } else { label = 8; break; }
    case 7: 
      label = 9; break;
    case 8: 
      ___assert_func(((__str6)|0), 626, ((___func___deque_remove)|0), ((__str68)|0));
      throw "Reached an unreachable!";
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      var $44=$tgt;
      var $45=(($44)|0);
      var $46=HEAP32[(($45)>>2)];
      var $47=((($46)-(1))|0);
      HEAP32[(($45)>>2)]=$47;
      var $48=(($47)|(0))!=0;
      if ($48) { label = 11; break; } else { label = 12; break; }
    case 11: 
      label = 13; break;
    case 12: 
      var $51=$tgt;
      var $52=(($51+4)|0);
      var $53=HEAP32[(($52)>>2)];
      var $54=(($53+24)|0);
      var $55=HEAP32[(($54)>>2)];
      var $56=$tgt;
      FUNCTION_TABLE[$55]($56);
      label = 13; break;
    case 13: 
      label = 14; break;
    case 14: 
      var $59=$2;
      var $60=$i;
      var $61=__deque_rotate($59, $60);
      var $62=(($61)|(0))==-1;
      if ($62) { label = 15; break; } else { label = 16; break; }
    case 15: 
      $1=0;
      label = 23; break;
    case 16: 
      var $65=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $66=((($65)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$66;
      $1=__Py_NoneStruct;
      label = 23; break;
    case 17: 
      var $68=$cmp;
      var $69=(($68)|(0)) < 0;
      if ($69) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $71=$2;
      var $72=$i;
      var $73=__deque_rotate($71, $72);
      $1=0;
      label = 23; break;
    case 19: 
      label = 20; break;
    case 20: 
      var $76=$2;
      var $77=__deque_rotate($76, -1);
      label = 21; break;
    case 21: 
      var $79=$i;
      var $80=((($79)+(1))|0);
      $i=$80;
      label = 2; break;
    case 22: 
      var $82=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($82, ((__str69)|0));
      $1=0;
      label = 23; break;
    case 23: 
      var $84=$1;
      return $84;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_reverse($deque, $unused) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $leftblock;
      var $rightblock;
      var $leftindex;
      var $rightindex;
      var $n;
      var $i;
      var $tmp;
      $1=$deque;
      $2=$unused;
      var $3=$1;
      var $4=(($3+8)|0);
      var $5=HEAP32[(($4)>>2)];
      $leftblock=$5;
      var $6=$1;
      var $7=(($6+12)|0);
      var $8=HEAP32[(($7)>>2)];
      $rightblock=$8;
      var $9=$1;
      var $10=(($9+16)|0);
      var $11=HEAP32[(($10)>>2)];
      $leftindex=$11;
      var $12=$1;
      var $13=(($12+20)|0);
      var $14=HEAP32[(($13)>>2)];
      $rightindex=$14;
      var $15=$1;
      var $16=(($15+24)|0);
      var $17=HEAP32[(($16)>>2)];
      var $18=((((($17)|(0)))/(2))&-1);
      $n=$18;
      $i=0;
      label = 2; break;
    case 2: 
      var $20=$i;
      var $21=$n;
      var $22=(($20)|(0)) < (($21)|(0));
      if ($22) { label = 3; break; } else { label = 17; break; }
    case 3: 
      var $24=$leftblock;
      var $25=$rightblock;
      var $26=(($24)|(0))!=(($25)|(0));
      if ($26) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $28=$leftindex;
      var $29=$rightindex;
      var $30=(($28)|(0)) < (($29)|(0));
      if ($30) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 7; break;
    case 6: 
      ___assert_func(((__str6)|0), 532, ((___func___deque_reverse)|0), ((__str66)|0));
      throw "Reached an unreachable!";
      label = 7; break;
    case 7: 
      var $35=$leftindex;
      var $36=$leftblock;
      var $37=(($36+8)|0);
      var $38=(($37+($35<<2))|0);
      var $39=HEAP32[(($38)>>2)];
      $tmp=$39;
      var $40=$rightindex;
      var $41=$rightblock;
      var $42=(($41+8)|0);
      var $43=(($42+($40<<2))|0);
      var $44=HEAP32[(($43)>>2)];
      var $45=$leftindex;
      var $46=$leftblock;
      var $47=(($46+8)|0);
      var $48=(($47+($45<<2))|0);
      HEAP32[(($48)>>2)]=$44;
      var $49=$tmp;
      var $50=$rightindex;
      var $51=$rightblock;
      var $52=(($51+8)|0);
      var $53=(($52+($50<<2))|0);
      HEAP32[(($53)>>2)]=$49;
      var $54=$leftindex;
      var $55=((($54)+(1))|0);
      $leftindex=$55;
      var $56=$leftindex;
      var $57=(($56)|(0))==62;
      if ($57) { label = 8; break; } else { label = 11; break; }
    case 8: 
      var $59=$leftblock;
      var $60=(($59+4)|0);
      var $61=HEAP32[(($60)>>2)];
      var $62=(($61)|(0))==0;
      if ($62) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 17; break;
    case 10: 
      var $65=$leftblock;
      var $66=(($65+4)|0);
      var $67=HEAP32[(($66)>>2)];
      $leftblock=$67;
      $leftindex=0;
      label = 11; break;
    case 11: 
      var $69=$rightindex;
      var $70=((($69)-(1))|0);
      $rightindex=$70;
      var $71=$rightindex;
      var $72=(($71)|(0))==-1;
      if ($72) { label = 12; break; } else { label = 15; break; }
    case 12: 
      var $74=$rightblock;
      var $75=(($74)|0);
      var $76=HEAP32[(($75)>>2)];
      var $77=(($76)|(0))==0;
      if ($77) { label = 13; break; } else { label = 14; break; }
    case 13: 
      label = 17; break;
    case 14: 
      var $80=$rightblock;
      var $81=(($80)|0);
      var $82=HEAP32[(($81)>>2)];
      $rightblock=$82;
      $rightindex=61;
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $85=$i;
      var $86=((($85)+(1))|0);
      $i=$86;
      label = 2; break;
    case 17: 
      var $88=HEAP32[((((__Py_NoneStruct)|0))>>2)];
      var $89=((($88)+(1))|0);
      HEAP32[((((__Py_NoneStruct)|0))>>2)]=$89;
      return __Py_NoneStruct;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_sizeof($deque, $unused) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $res;
      var $blocks;
      $1=$deque;
      $2=$unused;
      $res=40;
      var $3=$1;
      var $4=(($3+16)|0);
      var $5=HEAP32[(($4)>>2)];
      var $6=$1;
      var $7=(($6+24)|0);
      var $8=HEAP32[(($7)>>2)];
      var $9=((($5)+($8))|0);
      var $10=((($9)+(62))|0);
      var $11=((($10)-(1))|0);
      var $12=((((($11)|(0)))/(62))&-1);
      $blocks=$12;
      var $13=$1;
      var $14=(($13+16)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=$1;
      var $17=(($16+24)|0);
      var $18=HEAP32[(($17)>>2)];
      var $19=((($15)+($18))|0);
      var $20=((($19)-(1))|0);
      var $21=$blocks;
      var $22=((($21)-(1))|0);
      var $23=((($22)*(62))&-1);
      var $24=$1;
      var $25=(($24+20)|0);
      var $26=HEAP32[(($25)>>2)];
      var $27=((($23)+($26))|0);
      var $28=(($20)|(0))==(($27)|(0));
      if ($28) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 4; break;
    case 3: 
      ___assert_func(((__str6)|0), 1052, ((___func___deque_sizeof)|0), ((__str56)|0));
      throw "Reached an unreachable!";
      label = 4; break;
    case 4: 
      var $33=$blocks;
      var $34=($33<<8);
      var $35=$res;
      var $36=((($35)+($34))|0);
      $res=$36;
      var $37=$res;
      var $38=_PyLong_FromSsize_t($37);
      return $38;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_len($deque) {
  var label = 0;
  var $1;
  $1=$deque;
  var $2=$1;
  var $3=(($2+24)|0);
  var $4=HEAP32[(($3)>>2)];
  return $4;
}
function _deque_item($deque, $i) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $b;
      var $item;
      var $n;
      var $index;
      $2=$deque;
      $3=$i;
      var $4=$3;
      $index=$4;
      var $5=$3;
      var $6=(($5)|(0)) < 0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $8=$3;
      var $9=$2;
      var $10=(($9+24)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=(($8)|(0)) >= (($11)|(0));
      if ($12) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $14=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($14, ((__str79)|0));
      $1=0;
      label = 20; break;
    case 4: 
      var $16=$3;
      var $17=(($16)|(0))==0;
      if ($17) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $19=$2;
      var $20=(($19+16)|0);
      var $21=HEAP32[(($20)>>2)];
      $3=$21;
      var $22=$2;
      var $23=(($22+8)|0);
      var $24=HEAP32[(($23)>>2)];
      $b=$24;
      label = 19; break;
    case 6: 
      var $26=$3;
      var $27=$2;
      var $28=(($27+24)|0);
      var $29=HEAP32[(($28)>>2)];
      var $30=((($29)-(1))|0);
      var $31=(($26)|(0))==(($30)|(0));
      if ($31) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $33=$2;
      var $34=(($33+20)|0);
      var $35=HEAP32[(($34)>>2)];
      $3=$35;
      var $36=$2;
      var $37=(($36+12)|0);
      var $38=HEAP32[(($37)>>2)];
      $b=$38;
      label = 18; break;
    case 8: 
      var $40=$2;
      var $41=(($40+16)|0);
      var $42=HEAP32[(($41)>>2)];
      var $43=$3;
      var $44=((($43)+($42))|0);
      $3=$44;
      var $45=$3;
      var $46=((((($45)|(0)))/(62))&-1);
      $n=$46;
      var $47=$3;
      var $48=((($47)|(0)))%(62);
      $3=$48;
      var $49=$index;
      var $50=$2;
      var $51=(($50+24)|0);
      var $52=HEAP32[(($51)>>2)];
      var $53=$52 >> 1;
      var $54=(($49)|(0)) < (($53)|(0));
      if ($54) { label = 9; break; } else { label = 13; break; }
    case 9: 
      var $56=$2;
      var $57=(($56+8)|0);
      var $58=HEAP32[(($57)>>2)];
      $b=$58;
      label = 10; break;
    case 10: 
      var $60=$n;
      var $61=((($60)-(1))|0);
      $n=$61;
      var $62=(($60)|(0))!=0;
      if ($62) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $64=$b;
      var $65=(($64+4)|0);
      var $66=HEAP32[(($65)>>2)];
      $b=$66;
      label = 10; break;
    case 12: 
      label = 17; break;
    case 13: 
      var $69=$2;
      var $70=(($69+16)|0);
      var $71=HEAP32[(($70)>>2)];
      var $72=$2;
      var $73=(($72+24)|0);
      var $74=HEAP32[(($73)>>2)];
      var $75=((($71)+($74))|0);
      var $76=((($75)-(1))|0);
      var $77=((((($76)|(0)))/(62))&-1);
      var $78=$n;
      var $79=((($77)-($78))|0);
      $n=$79;
      var $80=$2;
      var $81=(($80+12)|0);
      var $82=HEAP32[(($81)>>2)];
      $b=$82;
      label = 14; break;
    case 14: 
      var $84=$n;
      var $85=((($84)-(1))|0);
      $n=$85;
      var $86=(($84)|(0))!=0;
      if ($86) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $88=$b;
      var $89=(($88)|0);
      var $90=HEAP32[(($89)>>2)];
      $b=$90;
      label = 14; break;
    case 16: 
      label = 17; break;
    case 17: 
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      var $95=$3;
      var $96=$b;
      var $97=(($96+8)|0);
      var $98=(($97+($95<<2))|0);
      var $99=HEAP32[(($98)>>2)];
      $item=$99;
      var $100=$item;
      var $101=(($100)|0);
      var $102=HEAP32[(($101)>>2)];
      var $103=((($102)+(1))|0);
      HEAP32[(($101)>>2)]=$103;
      var $104=$item;
      $1=$104;
      label = 20; break;
    case 20: 
      var $106=$1;
      return $106;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_ass_item($deque, $i, $v) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $old_value;
      var $b;
      var $n;
      var $len;
      var $halflen;
      var $index;
      $2=$deque;
      $3=$i;
      $4=$v;
      var $5=$2;
      var $6=(($5+24)|0);
      var $7=HEAP32[(($6)>>2)];
      $len=$7;
      var $8=$len;
      var $9=((($8)+(1))|0);
      var $10=$9 >> 1;
      $halflen=$10;
      var $11=$3;
      $index=$11;
      var $12=$3;
      var $13=(($12)|(0)) < 0;
      if ($13) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $15=$3;
      var $16=$len;
      var $17=(($15)|(0)) >= (($16)|(0));
      if ($17) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $19=HEAP32[((_PyExc_IndexError)>>2)];
      _PyErr_SetString($19, ((__str79)|0));
      $1=-1;
      label = 21; break;
    case 4: 
      var $21=$4;
      var $22=(($21)|(0))==0;
      if ($22) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $24=$2;
      var $25=$3;
      var $26=_deque_del_item($24, $25);
      $1=$26;
      label = 21; break;
    case 6: 
      var $28=$2;
      var $29=(($28+16)|0);
      var $30=HEAP32[(($29)>>2)];
      var $31=$3;
      var $32=((($31)+($30))|0);
      $3=$32;
      var $33=$3;
      var $34=((((($33)|(0)))/(62))&-1);
      $n=$34;
      var $35=$3;
      var $36=((($35)|(0)))%(62);
      $3=$36;
      var $37=$index;
      var $38=$halflen;
      var $39=(($37)|(0)) <= (($38)|(0));
      if ($39) { label = 7; break; } else { label = 11; break; }
    case 7: 
      var $41=$2;
      var $42=(($41+8)|0);
      var $43=HEAP32[(($42)>>2)];
      $b=$43;
      label = 8; break;
    case 8: 
      var $45=$n;
      var $46=((($45)-(1))|0);
      $n=$46;
      var $47=(($45)|(0))!=0;
      if ($47) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $49=$b;
      var $50=(($49+4)|0);
      var $51=HEAP32[(($50)>>2)];
      $b=$51;
      label = 8; break;
    case 10: 
      label = 15; break;
    case 11: 
      var $54=$2;
      var $55=(($54+16)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=$len;
      var $58=((($56)+($57))|0);
      var $59=((($58)-(1))|0);
      var $60=((((($59)|(0)))/(62))&-1);
      var $61=$n;
      var $62=((($60)-($61))|0);
      $n=$62;
      var $63=$2;
      var $64=(($63+12)|0);
      var $65=HEAP32[(($64)>>2)];
      $b=$65;
      label = 12; break;
    case 12: 
      var $67=$n;
      var $68=((($67)-(1))|0);
      $n=$68;
      var $69=(($67)|(0))!=0;
      if ($69) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $71=$b;
      var $72=(($71)|0);
      var $73=HEAP32[(($72)>>2)];
      $b=$73;
      label = 12; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $76=$4;
      var $77=(($76)|0);
      var $78=HEAP32[(($77)>>2)];
      var $79=((($78)+(1))|0);
      HEAP32[(($77)>>2)]=$79;
      var $80=$3;
      var $81=$b;
      var $82=(($81+8)|0);
      var $83=(($82+($80<<2))|0);
      var $84=HEAP32[(($83)>>2)];
      $old_value=$84;
      var $85=$4;
      var $86=$3;
      var $87=$b;
      var $88=(($87+8)|0);
      var $89=(($88+($86<<2))|0);
      HEAP32[(($89)>>2)]=$85;
      label = 16; break;
    case 16: 
      var $91=$old_value;
      var $92=(($91)|0);
      var $93=HEAP32[(($92)>>2)];
      var $94=((($93)-(1))|0);
      HEAP32[(($92)>>2)]=$94;
      var $95=(($94)|(0))!=0;
      if ($95) { label = 17; break; } else { label = 18; break; }
    case 17: 
      label = 19; break;
    case 18: 
      var $98=$old_value;
      var $99=(($98+4)|0);
      var $100=HEAP32[(($99)>>2)];
      var $101=(($100+24)|0);
      var $102=HEAP32[(($101)>>2)];
      var $103=$old_value;
      FUNCTION_TABLE[$102]($103);
      label = 19; break;
    case 19: 
      label = 20; break;
    case 20: 
      $1=0;
      label = 21; break;
    case 21: 
      var $107=$1;
      return $107;
    default: assert(0, "bad label: " + label);
  }
}
function __deque_rotate($deque, $n) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $m;
      var $len;
      var $halflen;
      var $b;
      var $prevblock;
      var $b1;
      var $nextblock;
      $2=$deque;
      $3=$n;
      var $4=$2;
      var $5=(($4+24)|0);
      var $6=HEAP32[(($5)>>2)];
      $len=$6;
      var $7=$len;
      var $8=$7 >> 1;
      $halflen=$8;
      var $9=$len;
      var $10=(($9)|(0)) <= 1;
      if ($10) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 77; break;
    case 3: 
      var $13=$3;
      var $14=$halflen;
      var $15=(($13)|(0)) > (($14)|(0));
      if ($15) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $17=$3;
      var $18=$halflen;
      var $19=(((-$18))|0);
      var $20=(($17)|(0)) < (($19)|(0));
      if ($20) { label = 5; break; } else { label = 11; break; }
    case 5: 
      var $22=$len;
      var $23=$3;
      var $24=((($23)|(0)))%((($22)|(0)));
      $3=$24;
      var $25=$3;
      var $26=$halflen;
      var $27=(($25)|(0)) > (($26)|(0));
      if ($27) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $29=$len;
      var $30=$3;
      var $31=((($30)-($29))|0);
      $3=$31;
      label = 10; break;
    case 7: 
      var $33=$3;
      var $34=$halflen;
      var $35=(((-$34))|0);
      var $36=(($33)|(0)) < (($35)|(0));
      if ($36) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $38=$len;
      var $39=$3;
      var $40=((($39)+($38))|0);
      $3=$40;
      label = 9; break;
    case 9: 
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $44=$len;
      var $45=(($44)|(0)) > 1;
      if ($45) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      ___assert_func(((__str6)|0), 427, ((___func____deque_rotate)|0), ((__str58)|0));
      throw "Reached an unreachable!";
      label = 14; break;
    case 14: 
      var $50=$halflen;
      var $51=(((-$50))|0);
      var $52=$3;
      var $53=(($51)|(0)) <= (($52)|(0));
      if ($53) { label = 15; break; } else { label = 17; break; }
    case 15: 
      var $55=$3;
      var $56=$halflen;
      var $57=(($55)|(0)) <= (($56)|(0));
      if ($57) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 18; break;
    case 17: 
      ___assert_func(((__str6)|0), 428, ((___func____deque_rotate)|0), ((__str59)|0));
      throw "Reached an unreachable!";
      label = 18; break;
    case 18: 
      var $62=$2;
      var $63=(($62+32)|0);
      var $64=HEAP32[(($63)>>2)];
      var $65=((($64)+(1))|0);
      HEAP32[(($63)>>2)]=$65;
      label = 19; break;
    case 19: 
      var $67=$3;
      var $68=(($67)|(0)) > 0;
      if ($68) { label = 20; break; } else { label = 47; break; }
    case 20: 
      var $70=$2;
      var $71=(($70+16)|0);
      var $72=HEAP32[(($71)>>2)];
      var $73=(($72)|(0))==0;
      if ($73) { label = 21; break; } else { label = 27; break; }
    case 21: 
      var $75=$2;
      var $76=(($75+8)|0);
      var $77=HEAP32[(($76)>>2)];
      var $78=$len;
      var $79=_newblock(0, $77, $78);
      $b=$79;
      var $80=$b;
      var $81=(($80)|(0))==0;
      if ($81) { label = 22; break; } else { label = 23; break; }
    case 22: 
      $1=-1;
      label = 77; break;
    case 23: 
      var $84=$2;
      var $85=(($84+8)|0);
      var $86=HEAP32[(($85)>>2)];
      var $87=(($86)|0);
      var $88=HEAP32[(($87)>>2)];
      var $89=(($88)|(0))==0;
      if ($89) { label = 24; break; } else { label = 25; break; }
    case 24: 
      label = 26; break;
    case 25: 
      ___assert_func(((__str6)|0), 436, ((___func____deque_rotate)|0), ((__str60)|0));
      throw "Reached an unreachable!";
      label = 26; break;
    case 26: 
      var $94=$b;
      var $95=$2;
      var $96=(($95+8)|0);
      var $97=HEAP32[(($96)>>2)];
      var $98=(($97)|0);
      HEAP32[(($98)>>2)]=$94;
      var $99=$b;
      var $100=$2;
      var $101=(($100+8)|0);
      HEAP32[(($101)>>2)]=$99;
      var $102=$2;
      var $103=(($102+16)|0);
      HEAP32[(($103)>>2)]=62;
      label = 27; break;
    case 27: 
      var $105=$2;
      var $106=(($105+16)|0);
      var $107=HEAP32[(($106)>>2)];
      var $108=(($107)|(0)) > 0;
      if ($108) { label = 28; break; } else { label = 29; break; }
    case 28: 
      label = 30; break;
    case 29: 
      ___assert_func(((__str6)|0), 441, ((___func____deque_rotate)|0), ((__str61)|0));
      throw "Reached an unreachable!";
      label = 30; break;
    case 30: 
      var $113=$3;
      $m=$113;
      var $114=$m;
      var $115=$2;
      var $116=(($115+20)|0);
      var $117=HEAP32[(($116)>>2)];
      var $118=((($117)+(1))|0);
      var $119=(($114)|(0)) > (($118)|(0));
      if ($119) { label = 31; break; } else { label = 32; break; }
    case 31: 
      var $121=$2;
      var $122=(($121+20)|0);
      var $123=HEAP32[(($122)>>2)];
      var $124=((($123)+(1))|0);
      $m=$124;
      label = 32; break;
    case 32: 
      var $126=$m;
      var $127=$2;
      var $128=(($127+16)|0);
      var $129=HEAP32[(($128)>>2)];
      var $130=(($126)|(0)) > (($129)|(0));
      if ($130) { label = 33; break; } else { label = 34; break; }
    case 33: 
      var $132=$2;
      var $133=(($132+16)|0);
      var $134=HEAP32[(($133)>>2)];
      $m=$134;
      label = 34; break;
    case 34: 
      var $136=$m;
      var $137=(($136)|(0)) > 0;
      if ($137) { label = 35; break; } else { label = 37; break; }
    case 35: 
      var $139=$m;
      var $140=$len;
      var $141=(($139)|(0)) <= (($140)|(0));
      if ($141) { label = 36; break; } else { label = 37; break; }
    case 36: 
      label = 38; break;
    case 37: 
      ___assert_func(((__str6)|0), 448, ((___func____deque_rotate)|0), ((__str62)|0));
      throw "Reached an unreachable!";
      label = 38; break;
    case 38: 
      var $146=$2;
      var $147=(($146+16)|0);
      var $148=HEAP32[(($147)>>2)];
      var $149=$m;
      var $150=((($148)-($149))|0);
      var $151=$2;
      var $152=(($151+8)|0);
      var $153=HEAP32[(($152)>>2)];
      var $154=(($153+8)|0);
      var $155=(($154+($150<<2))|0);
      var $156=$155;
      var $157=$2;
      var $158=(($157+20)|0);
      var $159=HEAP32[(($158)>>2)];
      var $160=((($159)+(1))|0);
      var $161=$m;
      var $162=((($160)-($161))|0);
      var $163=$2;
      var $164=(($163+12)|0);
      var $165=HEAP32[(($164)>>2)];
      var $166=(($165+8)|0);
      var $167=(($166+($162<<2))|0);
      var $168=$167;
      var $169=$m;
      var $170=($169<<2);
      assert($170 % 1 === 0);_memcpy($156, $168, $170);
      var $171=$m;
      var $172=$2;
      var $173=(($172+20)|0);
      var $174=HEAP32[(($173)>>2)];
      var $175=((($174)-($171))|0);
      HEAP32[(($173)>>2)]=$175;
      var $176=$m;
      var $177=$2;
      var $178=(($177+16)|0);
      var $179=HEAP32[(($178)>>2)];
      var $180=((($179)-($176))|0);
      HEAP32[(($178)>>2)]=$180;
      var $181=$m;
      var $182=$3;
      var $183=((($182)-($181))|0);
      $3=$183;
      var $184=$2;
      var $185=(($184+20)|0);
      var $186=HEAP32[(($185)>>2)];
      var $187=(($186)|(0))==-1;
      if ($187) { label = 39; break; } else { label = 46; break; }
    case 39: 
      var $189=$2;
      var $190=(($189+12)|0);
      var $191=HEAP32[(($190)>>2)];
      var $192=(($191)|0);
      var $193=HEAP32[(($192)>>2)];
      $prevblock=$193;
      var $194=$2;
      var $195=(($194+12)|0);
      var $196=HEAP32[(($195)>>2)];
      var $197=(($196)|(0))!=0;
      if ($197) { label = 40; break; } else { label = 41; break; }
    case 40: 
      label = 42; break;
    case 41: 
      ___assert_func(((__str6)|0), 458, ((___func____deque_rotate)|0), ((__str63)|0));
      throw "Reached an unreachable!";
      label = 42; break;
    case 42: 
      var $202=$2;
      var $203=(($202+8)|0);
      var $204=HEAP32[(($203)>>2)];
      var $205=$2;
      var $206=(($205+12)|0);
      var $207=HEAP32[(($206)>>2)];
      var $208=(($204)|(0))!=(($207)|(0));
      if ($208) { label = 43; break; } else { label = 44; break; }
    case 43: 
      label = 45; break;
    case 44: 
      ___assert_func(((__str6)|0), 459, ((___func____deque_rotate)|0), ((__str40)|0));
      throw "Reached an unreachable!";
      label = 45; break;
    case 45: 
      var $213=$2;
      var $214=(($213+12)|0);
      var $215=HEAP32[(($214)>>2)];
      _freeblock($215);
      var $216=$prevblock;
      var $217=(($216+4)|0);
      HEAP32[(($217)>>2)]=0;
      var $218=$prevblock;
      var $219=$2;
      var $220=(($219+12)|0);
      HEAP32[(($220)>>2)]=$218;
      var $221=$2;
      var $222=(($221+20)|0);
      HEAP32[(($222)>>2)]=61;
      label = 46; break;
    case 46: 
      label = 19; break;
    case 47: 
      label = 48; break;
    case 48: 
      var $226=$3;
      var $227=(($226)|(0)) < 0;
      if ($227) { label = 49; break; } else { label = 76; break; }
    case 49: 
      var $229=$2;
      var $230=(($229+20)|0);
      var $231=HEAP32[(($230)>>2)];
      var $232=(($231)|(0))==61;
      if ($232) { label = 50; break; } else { label = 56; break; }
    case 50: 
      var $234=$2;
      var $235=(($234+12)|0);
      var $236=HEAP32[(($235)>>2)];
      var $237=$len;
      var $238=_newblock($236, 0, $237);
      $b1=$238;
      var $239=$b1;
      var $240=(($239)|(0))==0;
      if ($240) { label = 51; break; } else { label = 52; break; }
    case 51: 
      $1=-1;
      label = 77; break;
    case 52: 
      var $243=$2;
      var $244=(($243+12)|0);
      var $245=HEAP32[(($244)>>2)];
      var $246=(($245+4)|0);
      var $247=HEAP32[(($246)>>2)];
      var $248=(($247)|(0))==0;
      if ($248) { label = 53; break; } else { label = 54; break; }
    case 53: 
      label = 55; break;
    case 54: 
      ___assert_func(((__str6)|0), 471, ((___func____deque_rotate)|0), ((__str34)|0));
      throw "Reached an unreachable!";
      label = 55; break;
    case 55: 
      var $253=$b1;
      var $254=$2;
      var $255=(($254+12)|0);
      var $256=HEAP32[(($255)>>2)];
      var $257=(($256+4)|0);
      HEAP32[(($257)>>2)]=$253;
      var $258=$b1;
      var $259=$2;
      var $260=(($259+12)|0);
      HEAP32[(($260)>>2)]=$258;
      var $261=$2;
      var $262=(($261+20)|0);
      HEAP32[(($262)>>2)]=-1;
      label = 56; break;
    case 56: 
      var $264=$2;
      var $265=(($264+20)|0);
      var $266=HEAP32[(($265)>>2)];
      var $267=(($266)|(0)) < 61;
      if ($267) { label = 57; break; } else { label = 58; break; }
    case 57: 
      label = 59; break;
    case 58: 
      ___assert_func(((__str6)|0), 476, ((___func____deque_rotate)|0), ((__str64)|0));
      throw "Reached an unreachable!";
      label = 59; break;
    case 59: 
      var $272=$3;
      var $273=(((-$272))|0);
      $m=$273;
      var $274=$m;
      var $275=$2;
      var $276=(($275+16)|0);
      var $277=HEAP32[(($276)>>2)];
      var $278=(((62)-($277))|0);
      var $279=(($274)|(0)) > (($278)|(0));
      if ($279) { label = 60; break; } else { label = 61; break; }
    case 60: 
      var $281=$2;
      var $282=(($281+16)|0);
      var $283=HEAP32[(($282)>>2)];
      var $284=(((62)-($283))|0);
      $m=$284;
      label = 61; break;
    case 61: 
      var $286=$m;
      var $287=$2;
      var $288=(($287+20)|0);
      var $289=HEAP32[(($288)>>2)];
      var $290=(((61)-($289))|0);
      var $291=(($286)|(0)) > (($290)|(0));
      if ($291) { label = 62; break; } else { label = 63; break; }
    case 62: 
      var $293=$2;
      var $294=(($293+20)|0);
      var $295=HEAP32[(($294)>>2)];
      var $296=(((61)-($295))|0);
      $m=$296;
      label = 63; break;
    case 63: 
      var $298=$m;
      var $299=(($298)|(0)) > 0;
      if ($299) { label = 64; break; } else { label = 66; break; }
    case 64: 
      var $301=$m;
      var $302=$len;
      var $303=(($301)|(0)) <= (($302)|(0));
      if ($303) { label = 65; break; } else { label = 66; break; }
    case 65: 
      label = 67; break;
    case 66: 
      ___assert_func(((__str6)|0), 483, ((___func____deque_rotate)|0), ((__str62)|0));
      throw "Reached an unreachable!";
      label = 67; break;
    case 67: 
      var $308=$2;
      var $309=(($308+20)|0);
      var $310=HEAP32[(($309)>>2)];
      var $311=((($310)+(1))|0);
      var $312=$2;
      var $313=(($312+12)|0);
      var $314=HEAP32[(($313)>>2)];
      var $315=(($314+8)|0);
      var $316=(($315+($311<<2))|0);
      var $317=$316;
      var $318=$2;
      var $319=(($318+16)|0);
      var $320=HEAP32[(($319)>>2)];
      var $321=$2;
      var $322=(($321+8)|0);
      var $323=HEAP32[(($322)>>2)];
      var $324=(($323+8)|0);
      var $325=(($324+($320<<2))|0);
      var $326=$325;
      var $327=$m;
      var $328=($327<<2);
      assert($328 % 1 === 0);_memcpy($317, $326, $328);
      var $329=$m;
      var $330=$2;
      var $331=(($330+16)|0);
      var $332=HEAP32[(($331)>>2)];
      var $333=((($332)+($329))|0);
      HEAP32[(($331)>>2)]=$333;
      var $334=$m;
      var $335=$2;
      var $336=(($335+20)|0);
      var $337=HEAP32[(($336)>>2)];
      var $338=((($337)+($334))|0);
      HEAP32[(($336)>>2)]=$338;
      var $339=$m;
      var $340=$3;
      var $341=((($340)+($339))|0);
      $3=$341;
      var $342=$2;
      var $343=(($342+16)|0);
      var $344=HEAP32[(($343)>>2)];
      var $345=(($344)|(0))==62;
      if ($345) { label = 68; break; } else { label = 75; break; }
    case 68: 
      var $347=$2;
      var $348=(($347+8)|0);
      var $349=HEAP32[(($348)>>2)];
      var $350=(($349+4)|0);
      var $351=HEAP32[(($350)>>2)];
      $nextblock=$351;
      var $352=$2;
      var $353=(($352+8)|0);
      var $354=HEAP32[(($353)>>2)];
      var $355=$2;
      var $356=(($355+12)|0);
      var $357=HEAP32[(($356)>>2)];
      var $358=(($354)|(0))!=(($357)|(0));
      if ($358) { label = 69; break; } else { label = 70; break; }
    case 69: 
      label = 71; break;
    case 70: 
      ___assert_func(((__str6)|0), 493, ((___func____deque_rotate)|0), ((__str40)|0));
      throw "Reached an unreachable!";
      label = 71; break;
    case 71: 
      var $363=$2;
      var $364=(($363+8)|0);
      var $365=HEAP32[(($364)>>2)];
      _freeblock($365);
      var $366=$nextblock;
      var $367=(($366)|(0))!=0;
      if ($367) { label = 72; break; } else { label = 73; break; }
    case 72: 
      label = 74; break;
    case 73: 
      ___assert_func(((__str6)|0), 495, ((___func____deque_rotate)|0), ((__str65)|0));
      throw "Reached an unreachable!";
      label = 74; break;
    case 74: 
      var $372=$nextblock;
      var $373=(($372)|0);
      HEAP32[(($373)>>2)]=0;
      var $374=$nextblock;
      var $375=$2;
      var $376=(($375+8)|0);
      HEAP32[(($376)>>2)]=$374;
      var $377=$2;
      var $378=(($377+16)|0);
      HEAP32[(($378)>>2)]=0;
      label = 75; break;
    case 75: 
      label = 48; break;
    case 76: 
      $1=0;
      label = 77; break;
    case 77: 
      var $382=$1;
      return $382;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_inplace_concat($deque, $other) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $result;
      $2=$deque;
      $3=$other;
      var $4=$2;
      var $5=$3;
      var $6=_deque_extend($4, $5);
      $result=$6;
      var $7=$result;
      var $8=(($7)|(0))==0;
      if ($8) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $10=$result;
      $1=$10;
      label = 9; break;
    case 3: 
      label = 4; break;
    case 4: 
      var $13=$result;
      var $14=(($13)|0);
      var $15=HEAP32[(($14)>>2)];
      var $16=((($15)-(1))|0);
      HEAP32[(($14)>>2)]=$16;
      var $17=(($16)|(0))!=0;
      if ($17) { label = 5; break; } else { label = 6; break; }
    case 5: 
      label = 7; break;
    case 6: 
      var $20=$result;
      var $21=(($20+4)|0);
      var $22=HEAP32[(($21)>>2)];
      var $23=(($22+24)|0);
      var $24=HEAP32[(($23)>>2)];
      var $25=$result;
      FUNCTION_TABLE[$24]($25);
      label = 7; break;
    case 7: 
      label = 8; break;
    case 8: 
      var $28=$2;
      var $29=$28;
      var $30=(($29)|0);
      var $31=HEAP32[(($30)>>2)];
      var $32=((($31)+(1))|0);
      HEAP32[(($30)>>2)]=$32;
      var $33=$2;
      var $34=$33;
      $1=$34;
      label = 9; break;
    case 9: 
      var $36=$1;
      return $36;
    default: assert(0, "bad label: " + label);
  }
}
function _deque_del_item($deque, $i) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $item;
      $2=$deque;
      $3=$i;
      var $4=$3;
      var $5=(($4)|(0)) >= 0;
      if ($5) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $7=$3;
      var $8=$2;
      var $9=(($8+24)|0);
      var $10=HEAP32[(($9)>>2)];
      var $11=(($7)|(0)) < (($10)|(0));
      if ($11) { label = 3; break; } else { label = 4; break; }
    case 3: 
      label = 5; break;
    case 4: 
      ___assert_func(((__str6)|0), 711, ((___func___deque_del_item)|0), ((__str80)|0));
      throw "Reached an unreachable!";
      label = 5; break;
    case 5: 
      var $16=$2;
      var $17=$3;
      var $18=(((-$17))|0);
      var $19=__deque_rotate($16, $18);
      var $20=(($19)|(0))==-1;
      if ($20) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=-1;
      label = 16; break;
    case 7: 
      var $23=$2;
      var $24=_deque_popleft($23, 0);
      $item=$24;
      var $25=$item;
      var $26=(($25)|(0))!=0;
      if ($26) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 10; break;
    case 9: 
      ___assert_func(((__str6)|0), 716, ((___func___deque_del_item)|0), ((__str77)|0));
      throw "Reached an unreachable!";
      label = 10; break;
    case 10: 
      label = 11; break;
    case 11: 
      var $32=$item;
      var $33=(($32)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=((($34)-(1))|0);
      HEAP32[(($33)>>2)]=$35;
      var $36=(($35)|(0))!=0;
      if ($36) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      var $39=$item;
      var $40=(($39+4)|0);
      var $41=HEAP32[(($40)>>2)];
      var $42=(($41+24)|0);
      var $43=HEAP32[(($42)>>2)];
      var $44=$item;
      FUNCTION_TABLE[$43]($44);
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      var $47=$2;
      var $48=$3;
      var $49=__deque_rotate($47, $48);
      $1=$49;
      label = 16; break;
    case 16: 
      var $51=$1;
      return $51;
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
