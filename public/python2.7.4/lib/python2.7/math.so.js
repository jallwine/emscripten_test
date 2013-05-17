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
var _math_trunc_doc;
var _math_tanh_doc;
var _math_tan_doc;
var _math_sqrt_doc;
var _math_sinh_doc;
var _math_sin_doc;
var _math_radians_doc;
var _math_pow_doc;
var _math_modf_doc;
var _math_methods;
var _math_log_doc;
var _math_log1p_doc;
var _math_log10_doc;
var _math_lgamma_doc;
var _math_ldexp_doc;
var _math_isnan_doc;
var _math_isinf_doc;
var _math_hypot_doc;
var _math_gamma_doc;
var _math_fsum_doc;
var _math_frexp_doc;
var _math_fmod_doc;
var _math_floor_doc;
var _math_factorial_doc;
var _math_fabs_doc;
var _math_expm1_doc;
var _math_exp_doc;
var _math_erfc_doc;
var _math_erf_doc;
var _math_degrees_doc;
var _math_cosh_doc;
var _math_cos_doc;
var _math_copysign_doc;
var _math_ceil_doc;
var _math_atanh_doc;
var _math_atan_doc;
var _math_atan2_doc;
var _math_asinh_doc;
var _math_asin_doc;
var _math_acosh_doc;
var _math_acos_doc;
var _lanczos_num_coeffs;
var _lanczos_den_coeffs;
var _gamma_integral;
var __str9;
var __str8;
var __str7;
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
var ___func___sinpi;
var ___func___math_fsum;
var ___func___lanczos_sum;
var ___func___is_error;
_module_doc=allocate([84,104,105,115,32,109,111,100,117,108,101,32,105,115,32,97,108,119,97,121,115,32,97,118,97,105,108,97,98,108,101,46,32,32,73,116,32,112,114,111,118,105,100,101,115,32,97,99,99,101,115,115,32,116,111,32,116,104,101,10,109,97,116,104,101,109,97,116,105,99,97,108,32,102,117,110,99,116,105,111,110,115,32,100,101,102,105,110,101,100,32,98,121,32,116,104,101,32,67,32,115,116,97,110,100,97,114,100,46,0,0,0], "i8", ALLOC_NORMAL);
_math_trunc_doc=allocate([116,114,117,110,99,40,120,58,82,101,97,108,41,32,45,62,32,73,110,116,101,103,114,97,108,10,10,84,114,117,110,99,97,116,101,115,32,120,32,116,111,32,116,104,101,32,110,101,97,114,101,115,116,32,73,110,116,101,103,114,97,108,32,116,111,119,97,114,100,32,48,46,32,85,115,101,115,32,116,104,101,32,95,95,116,114,117,110,99,95,95,32,109,97,103,105,99,32,109,101,116,104,111,100,46,0,0,0], "i8", ALLOC_NORMAL);
_math_tanh_doc=allocate([116,97,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,116,97,110,103,101,110,116,32,111,102,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_tan_doc=allocate([116,97,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,116,97,110,103,101,110,116,32,111,102,32,120,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,46,0,0], "i8", ALLOC_NORMAL);
_math_sqrt_doc=allocate([115,113,114,116,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,115,113,117,97,114,101,32,114,111,111,116,32,111,102,32,120,46,0,0,0], "i8", ALLOC_NORMAL);
_math_sinh_doc=allocate([115,105,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,115,105,110,101,32,111,102,32,120,46,0,0,0], "i8", ALLOC_NORMAL);
_math_sin_doc=allocate([115,105,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,115,105,110,101,32,111,102,32,120,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,46,0], "i8", ALLOC_NORMAL);
_math_radians_doc=allocate([114,97,100,105,97,110,115,40,120,41,10,10,67,111,110,118,101,114,116,32,97,110,103,108,101,32,120,32,102,114,111,109,32,100,101,103,114,101,101,115,32,116,111,32,114,97,100,105,97,110,115,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_pow_doc=allocate([112,111,119,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,120,42,42,121,32,40,120,32,116,111,32,116,104,101,32,112,111,119,101,114,32,111,102,32,121,41,46,0,0,0], "i8", ALLOC_NORMAL);
_math_modf_doc=allocate([109,111,100,102,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,102,114,97,99,116,105,111,110,97,108,32,97,110,100,32,105,110,116,101,103,101,114,32,112,97,114,116,115,32,111,102,32,120,46,32,32,66,111,116,104,32,114,101,115,117,108,116,115,32,99,97,114,114,121,32,116,104,101,32,115,105,103,110,10,111,102,32,120,32,97,110,100,32,97,114,101,32,102,108,111,97,116,115,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_methods=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_math_log_doc=allocate([108,111,103,40,120,91,44,32,98,97,115,101,93,41,10,10,82,101,116,117,114,110,32,116,104,101,32,108,111,103,97,114,105,116,104,109,32,111,102,32,120,32,116,111,32,116,104,101,32,103,105,118,101,110,32,98,97,115,101,46,10,73,102,32,116,104,101,32,98,97,115,101,32,110,111,116,32,115,112,101,99,105,102,105,101,100,44,32,114,101,116,117,114,110,115,32,116,104,101,32,110,97,116,117,114,97,108,32,108,111,103,97,114,105,116,104,109,32,40,98,97,115,101,32,101,41,32,111,102,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_log1p_doc=allocate([108,111,103,49,112,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,110,97,116,117,114,97,108,32,108,111,103,97,114,105,116,104,109,32,111,102,32,49,43,120,32,40,98,97,115,101,32,101,41,46,10,84,104,101,32,114,101,115,117,108,116,32,105,115,32,99,111,109,112,117,116,101,100,32,105,110,32,97,32,119,97,121,32,119,104,105,99,104,32,105,115,32,97,99,99,117,114,97,116,101,32,102,111,114,32,120,32,110,101,97,114,32,122,101,114,111,46,0,0], "i8", ALLOC_NORMAL);
_math_log10_doc=allocate([108,111,103,49,48,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,98,97,115,101,32,49,48,32,108,111,103,97,114,105,116,104,109,32,111,102,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_lgamma_doc=allocate([108,103,97,109,109,97,40,120,41,10,10,78,97,116,117,114,97,108,32,108,111,103,97,114,105,116,104,109,32,111,102,32,97,98,115,111,108,117,116,101,32,118,97,108,117,101,32,111,102,32,71,97,109,109,97,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0,0], "i8", ALLOC_NORMAL);
_math_ldexp_doc=allocate([108,100,101,120,112,40,120,44,32,105,41,10,10,82,101,116,117,114,110,32,120,32,42,32,40,50,42,42,105,41,46,0], "i8", ALLOC_NORMAL);
_math_isnan_doc=allocate([105,115,110,97,110,40,120,41,32,45,62,32,98,111,111,108,10,10,67,104,101,99,107,32,105,102,32,102,108,111,97,116,32,120,32,105,115,32,110,111,116,32,97,32,110,117,109,98,101,114,32,40,78,97,78,41,46,0,0,0], "i8", ALLOC_NORMAL);
_math_isinf_doc=allocate([105,115,105,110,102,40,120,41,32,45,62,32,98,111,111,108,10,10,67,104,101,99,107,32,105,102,32,102,108,111,97,116,32,120,32,105,115,32,105,110,102,105,110,105,116,101,32,40,112,111,115,105,116,105,118,101,32,111,114,32,110,101,103,97,116,105,118,101,41,46,0,0], "i8", ALLOC_NORMAL);
_math_hypot_doc=allocate([104,121,112,111,116,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,116,104,101,32,69,117,99,108,105,100,101,97,110,32,100,105,115,116,97,110,99,101,44,32,115,113,114,116,40,120,42,120,32,43,32,121,42,121,41,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_gamma_doc=allocate([103,97,109,109,97,40,120,41,10,10,71,97,109,109,97,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0,0], "i8", ALLOC_NORMAL);
_math_fsum_doc=allocate([102,115,117,109,40,105,116,101,114,97,98,108,101,41,10,10,82,101,116,117,114,110,32,97,110,32,97,99,99,117,114,97,116,101,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,115,117,109,32,111,102,32,118,97,108,117,101,115,32,105,110,32,116,104,101,32,105,116,101,114,97,98,108,101,46,10,65,115,115,117,109,101,115,32,73,69,69,69,45,55,53,52,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,97,114,105,116,104,109,101,116,105,99,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_frexp_doc=allocate([102,114,101,120,112,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,109,97,110,116,105,115,115,97,32,97,110,100,32,101,120,112,111,110,101,110,116,32,111,102,32,120,44,32,97,115,32,112,97,105,114,32,40,109,44,32,101,41,46,10,109,32,105,115,32,97,32,102,108,111,97,116,32,97,110,100,32,101,32,105,115,32,97,110,32,105,110,116,44,32,115,117,99,104,32,116,104,97,116,32,120,32,61,32,109,32,42,32,50,46,42,42,101,46,10,73,102,32,120,32,105,115,32,48,44,32,109,32,97,110,100,32,101,32,97,114,101,32,98,111,116,104,32,48,46,32,32,69,108,115,101,32,48,46,53,32,60,61,32,97,98,115,40,109,41,32,60,32,49,46,48,46,0,0,0], "i8", ALLOC_NORMAL);
_math_fmod_doc=allocate([102,109,111,100,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,102,109,111,100,40,120,44,32,121,41,44,32,97,99,99,111,114,100,105,110,103,32,116,111,32,112,108,97,116,102,111,114,109,32,67,46,32,32,120,32,37,32,121,32,109,97,121,32,100,105,102,102,101,114,46,0,0], "i8", ALLOC_NORMAL);
_math_floor_doc=allocate([102,108,111,111,114,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,102,108,111,111,114,32,111,102,32,120,32,97,115,32,97,32,102,108,111,97,116,46,10,84,104,105,115,32,105,115,32,116,104,101,32,108,97,114,103,101,115,116,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,32,60,61,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_factorial_doc=allocate([102,97,99,116,111,114,105,97,108,40,120,41,32,45,62,32,73,110,116,101,103,114,97,108,10,10,70,105,110,100,32,120,33,46,32,82,97,105,115,101,32,97,32,86,97,108,117,101,69,114,114,111,114,32,105,102,32,120,32,105,115,32,110,101,103,97,116,105,118,101,32,111,114,32,110,111,110,45,105,110,116,101,103,114,97,108,46,0], "i8", ALLOC_NORMAL);
_math_fabs_doc=allocate([102,97,98,115,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,98,115,111,108,117,116,101,32,118,97,108,117,101,32,111,102,32,116,104,101,32,102,108,111,97,116,32,120,46,0,0], "i8", ALLOC_NORMAL);
_math_expm1_doc=allocate([101,120,112,109,49,40,120,41,10,10,82,101,116,117,114,110,32,101,120,112,40,120,41,45,49,46,10,84,104,105,115,32,102,117,110,99,116,105,111,110,32,97,118,111,105,100,115,32,116,104,101,32,108,111,115,115,32,111,102,32,112,114,101,99,105,115,105,111,110,32,105,110,118,111,108,118,101,100,32,105,110,32,116,104,101,32,100,105,114,101,99,116,32,101,118,97,108,117,97,116,105,111,110,32,111,102,32,101,120,112,40,120,41,45,49,32,102,111,114,32,115,109,97,108,108,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_exp_doc=allocate([101,120,112,40,120,41,10,10,82,101,116,117,114,110,32,101,32,114,97,105,115,101,100,32,116,111,32,116,104,101,32,112,111,119,101,114,32,111,102,32,120,46,0,0], "i8", ALLOC_NORMAL);
_math_erfc_doc=allocate([101,114,102,99,40,120,41,10,10,67,111,109,112,108,101,109,101,110,116,97,114,121,32,101,114,114,111,114,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0], "i8", ALLOC_NORMAL);
_math_erf_doc=allocate([101,114,102,40,120,41,10,10,69,114,114,111,114,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_degrees_doc=allocate([100,101,103,114,101,101,115,40,120,41,10,10,67,111,110,118,101,114,116,32,97,110,103,108,101,32,120,32,102,114,111,109,32,114,97,100,105,97,110,115,32,116,111,32,100,101,103,114,101,101,115,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_cosh_doc=allocate([99,111,115,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,99,111,115,105,110,101,32,111,102,32,120,46,0], "i8", ALLOC_NORMAL);
_math_cos_doc=allocate([99,111,115,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,99,111,115,105,110,101,32,111,102,32,120,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,46,0,0,0], "i8", ALLOC_NORMAL);
_math_copysign_doc=allocate([99,111,112,121,115,105,103,110,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,120,32,119,105,116,104,32,116,104,101,32,115,105,103,110,32,111,102,32,121,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_ceil_doc=allocate([99,101,105,108,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,99,101,105,108,105,110,103,32,111,102,32,120,32,97,115,32,97,32,102,108,111,97,116,46,10,84,104,105,115,32,105,115,32,116,104,101,32,115,109,97,108,108,101,115,116,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,32,62,61,32,120,46,0,0], "i8", ALLOC_NORMAL);
_math_atanh_doc=allocate([97,116,97,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,97,114,99,32,116,97,110,103,101,110,116,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0], "i8", ALLOC_NORMAL);
_math_atan_doc=allocate([97,116,97,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,116,97,110,103,101,110,116,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0], "i8", ALLOC_NORMAL);
_math_atan2_doc=allocate([97,116,97,110,50,40,121,44,32,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,116,97,110,103,101,110,116,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,121,47,120,46,10,85,110,108,105,107,101,32,97,116,97,110,40,121,47,120,41,44,32,116,104,101,32,115,105,103,110,115,32,111,102,32,98,111,116,104,32,120,32,97,110,100,32,121,32,97,114,101,32,99,111,110,115,105,100,101,114,101,100,46,0,0,0], "i8", ALLOC_NORMAL);
_math_asinh_doc=allocate([97,115,105,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,97,114,99,32,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_asin_doc=allocate([97,115,105,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_acosh_doc=allocate([97,99,111,115,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,97,114,99,32,99,111,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0,0], "i8", ALLOC_NORMAL);
_math_acos_doc=allocate([97,99,111,115,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,99,111,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0,0], "i8", ALLOC_NORMAL);
_lanczos_num_coeffs=allocate([158,164,193,67,81,234,21,66,87,76,245,117,112,252,35,66,26,182,138,129,50,161,32,66,26,38,232,34,181,176,16,66,232,161,165,179,193,127,246,65,63,243,211,245,24,116,213,65,42,95,185,123,12,171,173,65,152,204,93,249,118,248,125,65,76,244,128,80,233,241,69,65,235,135,135,31,66,182,6,65,4,216,88,8,172,135,191,64,82,59,188,123,96,90,106,64,5,39,246,31,147,13,4,64], "i8", ALLOC_NORMAL);
_lanczos_den_coeffs=allocate([0,0,0,0,0,0,0,0,0,0,0,0,168,8,131,65,0,0,0,128,105,189,156,65,0,0,0,176,166,253,161,65,0,0,0,112,113,24,153,65,0,0,0,144,182,238,133,65,0,0,0,224,113,113,105,65,0,0,0,0,123,31,68,65,0,0,0,0,188,208,21,65,0,0,0,0,128,231,223,64,0,0,0,0,0,20,158,64,0,0,0,0,0,128,80,64,0,0,0,0,0,0,240,63], "i8", ALLOC_NORMAL);
_gamma_integral=allocate([0,0,0,0,0,0,240,63,0,0,0,0,0,0,240,63,0,0,0,0,0,0,0,64,0,0,0,0,0,0,24,64,0,0,0,0,0,0,56,64,0,0,0,0,0,0,94,64,0,0,0,0,0,128,134,64,0,0,0,0,0,176,179,64,0,0,0,0,0,176,227,64,0,0,0,0,0,38,22,65,0,0,0,0,128,175,75,65,0,0,0,0,168,8,131,65,0,0,0,0,252,140,188,65,0,0,0,192,140,50,247,65,0,0,0,40,59,76,52,66,0,0,128,117,119,7,115,66,0,0,128,117,119,7,179,66,0,0,216,236,238,55,244,66,0,0,115,202,236,190,54,67,0,144,104,48,185,2,123,67,0,90,65,190,179,225,192,67,32,198,181,233,59,40,6,68,108,240,89,97,82,119,78,68], "i8", ALLOC_NORMAL);
__str9=allocate([97,116,97,110,104,0,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([97,116,97,110,50,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([97,116,97,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str63=allocate([102,97,99,116,111,114,105,97,108,40,41,32,110,111,116,32,100,101,102,105,110,101,100,32,102,111,114,32,110,101,103,97,116,105,118,101,32,118,97,108,117,101,115,0], "i8", ALLOC_NORMAL);
__str62=allocate([102,97,99,116,111,114,105,97,108,40,41,32,111,110,108,121,32,97,99,99,101,112,116,115,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str61=allocate([40,100,105,41,0,0,0,0], "i8", ALLOC_NORMAL);
__str60=allocate([109,97,116,104,46,102,115,117,109,32,112,97,114,116,105,97,108,115,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([97,115,105,110,104,0,0,0], "i8", ALLOC_NORMAL);
__str59=allocate([102,97,98,115,40,121,41,32,60,32,102,97,98,115,40,120,41,0,0,0], "i8", ALLOC_NORMAL);
__str58=allocate([45,105,110,102,32,43,32,105,110,102,32,105,110,32,102,115,117,109,0,0], "i8", ALLOC_NORMAL);
__str57=allocate([105,110,116,101,114,109,101,100,105,97,116,101,32,111,118,101,114,102,108,111,119,32,105,110,32,102,115,117,109,0,0,0], "i8", ALLOC_NORMAL);
__str56=allocate([40,109,32,61,61,32,78,85,77,95,80,65,82,84,73,65,76,83,32,38,38,32,112,32,61,61,32,112,115,41,32,124,124,32,40,109,32,62,32,78,85,77,95,80,65,82,84,73,65,76,83,32,38,38,32,112,32,33,61,32,78,85,76,76,41,0,0,0], "i8", ALLOC_NORMAL);
__str55=allocate([48,32,60,61,32,110,32,38,38,32,110,32,60,61,32,109,0,0,0,0], "i8", ALLOC_NORMAL);
__str54=allocate([69,120,112,101,99,116,101,100,32,97,110,32,105,110,116,32,111,114,32,108,111,110,103,32,97,115,32,115,101,99,111,110,100,32,97,114,103,117,109,101,110,116,32,116,111,32,108,100,101,120,112,46,0,0,0,0], "i8", ALLOC_NORMAL);
__str53=allocate([100,79,58,108,100,101,120,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str52=allocate([120,32,62,32,48,46,48,0], "i8", ALLOC_NORMAL);
__str51=allocate([48,0,0,0], "i8", ALLOC_NORMAL);
__str50=allocate([48,32,60,61,32,110,32,38,38,32,110,32,60,61,32,52,0,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([97,115,105,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str49=allocate([80,121,95,73,83,95,70,73,78,73,84,69,40,120,41,0], "i8", ALLOC_NORMAL);
__str48=allocate([40,100,100,41,0,0,0,0], "i8", ALLOC_NORMAL);
__str47=allocate([109,97,116,104,32,114,97,110,103,101,32,101,114,114,111,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str46=allocate([109,97,116,104,32,100,111,109,97,105,110,32,101,114,114,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str45=allocate([101,114,114,110,111,0,0,0], "i8", ALLOC_NORMAL);
__str44=allocate([46,46,47,77,111,100,117,108,101,115,47,109,97,116,104,109,111,100,117,108,101,46,99,0], "i8", ALLOC_NORMAL);
__str43=allocate([95,95,116,114,117,110,99,95,95,0,0,0], "i8", ALLOC_NORMAL);
__str42=allocate([116,114,117,110,99,0,0,0], "i8", ALLOC_NORMAL);
__str41=allocate([116,97,110,104,0,0,0,0], "i8", ALLOC_NORMAL);
__str40=allocate([116,97,110,0], "i8", ALLOC_NORMAL);
__str4=allocate([97,99,111,115,104,0,0,0], "i8", ALLOC_NORMAL);
__str39=allocate([115,113,114,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str38=allocate([115,105,110,104,0,0,0,0], "i8", ALLOC_NORMAL);
__str37=allocate([115,105,110,0], "i8", ALLOC_NORMAL);
__str36=allocate([114,97,100,105,97,110,115,0], "i8", ALLOC_NORMAL);
__str35=allocate([112,111,119,0], "i8", ALLOC_NORMAL);
__str34=allocate([109,111,100,102,0,0,0,0], "i8", ALLOC_NORMAL);
__str33=allocate([108,111,103,49,48,0,0,0], "i8", ALLOC_NORMAL);
__str32=allocate([108,111,103,49,112,0,0,0], "i8", ALLOC_NORMAL);
__str31=allocate([108,111,103,0], "i8", ALLOC_NORMAL);
__str30=allocate([108,103,97,109,109,97,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([97,99,111,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str29=allocate([108,100,101,120,112,0,0,0], "i8", ALLOC_NORMAL);
__str28=allocate([105,115,110,97,110,0,0,0], "i8", ALLOC_NORMAL);
__str27=allocate([105,115,105,110,102,0,0,0], "i8", ALLOC_NORMAL);
__str26=allocate([104,121,112,111,116,0,0,0], "i8", ALLOC_NORMAL);
__str25=allocate([103,97,109,109,97,0,0,0], "i8", ALLOC_NORMAL);
__str24=allocate([102,115,117,109,0,0,0,0], "i8", ALLOC_NORMAL);
__str23=allocate([102,114,101,120,112,0,0,0], "i8", ALLOC_NORMAL);
__str22=allocate([102,109,111,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str21=allocate([102,108,111,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([102,97,99,116,111,114,105,97,108,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([101,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([102,97,98,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([101,120,112,109,49,0,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([101,120,112,0], "i8", ALLOC_NORMAL);
__str16=allocate([101,114,102,99,0,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([101,114,102,0], "i8", ALLOC_NORMAL);
__str14=allocate([100,101,103,114,101,101,115,0], "i8", ALLOC_NORMAL);
__str13=allocate([99,111,115,104,0,0,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([99,111,115,0], "i8", ALLOC_NORMAL);
__str11=allocate([99,111,112,121,115,105,103,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([99,101,105,108,0,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([112,105,0,0], "i8", ALLOC_NORMAL);
__str=allocate([109,97,116,104,0,0,0,0], "i8", ALLOC_NORMAL);
___func___sinpi=allocate([115,105,110,112,105,0,0,0], "i8", ALLOC_NORMAL);
___func___math_fsum=allocate([109,97,116,104,95,102,115,117,109,0,0,0], "i8", ALLOC_NORMAL);
___func___lanczos_sum=allocate([108,97,110,99,122,111,115,95,115,117,109,0], "i8", ALLOC_NORMAL);
___func___is_error=allocate([105,115,95,101,114,114,111,114,0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_math_methods)>>2)]=((__str3)|0);
HEAP32[(((_math_methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 102);
HEAP32[(((_math_methods)+(12))>>2)]=((_math_acos_doc)|0);
HEAP32[(((_math_methods)+(16))>>2)]=((__str4)|0);
HEAP32[(((_math_methods)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 124);
HEAP32[(((_math_methods)+(28))>>2)]=((_math_acosh_doc)|0);
HEAP32[(((_math_methods)+(32))>>2)]=((__str5)|0);
HEAP32[(((_math_methods)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 76);
HEAP32[(((_math_methods)+(44))>>2)]=((_math_asin_doc)|0);
HEAP32[(((_math_methods)+(48))>>2)]=((__str6)|0);
HEAP32[(((_math_methods)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 84);
HEAP32[(((_math_methods)+(60))>>2)]=((_math_asinh_doc)|0);
HEAP32[(((_math_methods)+(64))>>2)]=((__str7)|0);
HEAP32[(((_math_methods)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 18);
HEAP32[(((_math_methods)+(76))>>2)]=((_math_atan_doc)|0);
HEAP32[(((_math_methods)+(80))>>2)]=((__str8)|0);
HEAP32[(((_math_methods)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 32);
HEAP32[(((_math_methods)+(92))>>2)]=((_math_atan2_doc)|0);
HEAP32[(((_math_methods)+(96))>>2)]=((__str9)|0);
HEAP32[(((_math_methods)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((_math_methods)+(108))>>2)]=((_math_atanh_doc)|0);
HEAP32[(((_math_methods)+(112))>>2)]=((__str10)|0);
HEAP32[(((_math_methods)+(116))>>2)]=(FUNCTION_TABLE_OFFSET + 98);
HEAP32[(((_math_methods)+(124))>>2)]=((_math_ceil_doc)|0);
HEAP32[(((_math_methods)+(128))>>2)]=((__str11)|0);
HEAP32[(((_math_methods)+(132))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((_math_methods)+(140))>>2)]=((_math_copysign_doc)|0);
HEAP32[(((_math_methods)+(144))>>2)]=((__str12)|0);
HEAP32[(((_math_methods)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 38);
HEAP32[(((_math_methods)+(156))>>2)]=((_math_cos_doc)|0);
HEAP32[(((_math_methods)+(160))>>2)]=((__str13)|0);
HEAP32[(((_math_methods)+(164))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((_math_methods)+(172))>>2)]=((_math_cosh_doc)|0);
HEAP32[(((_math_methods)+(176))>>2)]=((__str14)|0);
HEAP32[(((_math_methods)+(180))>>2)]=(FUNCTION_TABLE_OFFSET + 110);
HEAP32[(((_math_methods)+(188))>>2)]=((_math_degrees_doc)|0);
HEAP32[(((_math_methods)+(192))>>2)]=((__str15)|0);
HEAP32[(((_math_methods)+(196))>>2)]=(FUNCTION_TABLE_OFFSET + 50);
HEAP32[(((_math_methods)+(204))>>2)]=((_math_erf_doc)|0);
HEAP32[(((_math_methods)+(208))>>2)]=((__str16)|0);
HEAP32[(((_math_methods)+(212))>>2)]=(FUNCTION_TABLE_OFFSET + 90);
HEAP32[(((_math_methods)+(220))>>2)]=((_math_erfc_doc)|0);
HEAP32[(((_math_methods)+(224))>>2)]=((__str17)|0);
HEAP32[(((_math_methods)+(228))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
HEAP32[(((_math_methods)+(236))>>2)]=((_math_exp_doc)|0);
HEAP32[(((_math_methods)+(240))>>2)]=((__str18)|0);
HEAP32[(((_math_methods)+(244))>>2)]=(FUNCTION_TABLE_OFFSET + 92);
HEAP32[(((_math_methods)+(252))>>2)]=((_math_expm1_doc)|0);
HEAP32[(((_math_methods)+(256))>>2)]=((__str19)|0);
HEAP32[(((_math_methods)+(260))>>2)]=(FUNCTION_TABLE_OFFSET + 120);
HEAP32[(((_math_methods)+(268))>>2)]=((_math_fabs_doc)|0);
HEAP32[(((_math_methods)+(272))>>2)]=((__str20)|0);
HEAP32[(((_math_methods)+(276))>>2)]=(FUNCTION_TABLE_OFFSET + 48);
HEAP32[(((_math_methods)+(284))>>2)]=((_math_factorial_doc)|0);
HEAP32[(((_math_methods)+(288))>>2)]=((__str21)|0);
HEAP32[(((_math_methods)+(292))>>2)]=(FUNCTION_TABLE_OFFSET + 72);
HEAP32[(((_math_methods)+(300))>>2)]=((_math_floor_doc)|0);
HEAP32[(((_math_methods)+(304))>>2)]=((__str22)|0);
HEAP32[(((_math_methods)+(308))>>2)]=(FUNCTION_TABLE_OFFSET + 104);
HEAP32[(((_math_methods)+(316))>>2)]=((_math_fmod_doc)|0);
HEAP32[(((_math_methods)+(320))>>2)]=((__str23)|0);
HEAP32[(((_math_methods)+(324))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((_math_methods)+(332))>>2)]=((_math_frexp_doc)|0);
HEAP32[(((_math_methods)+(336))>>2)]=((__str24)|0);
HEAP32[(((_math_methods)+(340))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((_math_methods)+(348))>>2)]=((_math_fsum_doc)|0);
HEAP32[(((_math_methods)+(352))>>2)]=((__str25)|0);
HEAP32[(((_math_methods)+(356))>>2)]=(FUNCTION_TABLE_OFFSET + 88);
HEAP32[(((_math_methods)+(364))>>2)]=((_math_gamma_doc)|0);
HEAP32[(((_math_methods)+(368))>>2)]=((__str26)|0);
HEAP32[(((_math_methods)+(372))>>2)]=(FUNCTION_TABLE_OFFSET + 94);
HEAP32[(((_math_methods)+(380))>>2)]=((_math_hypot_doc)|0);
HEAP32[(((_math_methods)+(384))>>2)]=((__str27)|0);
HEAP32[(((_math_methods)+(388))>>2)]=(FUNCTION_TABLE_OFFSET + 64);
HEAP32[(((_math_methods)+(396))>>2)]=((_math_isinf_doc)|0);
HEAP32[(((_math_methods)+(400))>>2)]=((__str28)|0);
HEAP32[(((_math_methods)+(404))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((_math_methods)+(412))>>2)]=((_math_isnan_doc)|0);
HEAP32[(((_math_methods)+(416))>>2)]=((__str29)|0);
HEAP32[(((_math_methods)+(420))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
HEAP32[(((_math_methods)+(428))>>2)]=((_math_ldexp_doc)|0);
HEAP32[(((_math_methods)+(432))>>2)]=((__str30)|0);
HEAP32[(((_math_methods)+(436))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((_math_methods)+(444))>>2)]=((_math_lgamma_doc)|0);
HEAP32[(((_math_methods)+(448))>>2)]=((__str31)|0);
HEAP32[(((_math_methods)+(452))>>2)]=(FUNCTION_TABLE_OFFSET + 82);
HEAP32[(((_math_methods)+(460))>>2)]=((_math_log_doc)|0);
HEAP32[(((_math_methods)+(464))>>2)]=((__str32)|0);
HEAP32[(((_math_methods)+(468))>>2)]=(FUNCTION_TABLE_OFFSET + 100);
HEAP32[(((_math_methods)+(476))>>2)]=((_math_log1p_doc)|0);
HEAP32[(((_math_methods)+(480))>>2)]=((__str33)|0);
HEAP32[(((_math_methods)+(484))>>2)]=(FUNCTION_TABLE_OFFSET + 30);
HEAP32[(((_math_methods)+(492))>>2)]=((_math_log10_doc)|0);
HEAP32[(((_math_methods)+(496))>>2)]=((__str34)|0);
HEAP32[(((_math_methods)+(500))>>2)]=(FUNCTION_TABLE_OFFSET + 60);
HEAP32[(((_math_methods)+(508))>>2)]=((_math_modf_doc)|0);
HEAP32[(((_math_methods)+(512))>>2)]=((__str35)|0);
HEAP32[(((_math_methods)+(516))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((_math_methods)+(524))>>2)]=((_math_pow_doc)|0);
HEAP32[(((_math_methods)+(528))>>2)]=((__str36)|0);
HEAP32[(((_math_methods)+(532))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_math_methods)+(540))>>2)]=((_math_radians_doc)|0);
HEAP32[(((_math_methods)+(544))>>2)]=((__str37)|0);
HEAP32[(((_math_methods)+(548))>>2)]=(FUNCTION_TABLE_OFFSET + 36);
HEAP32[(((_math_methods)+(556))>>2)]=((_math_sin_doc)|0);
HEAP32[(((_math_methods)+(560))>>2)]=((__str38)|0);
HEAP32[(((_math_methods)+(564))>>2)]=(FUNCTION_TABLE_OFFSET + 128);
HEAP32[(((_math_methods)+(572))>>2)]=((_math_sinh_doc)|0);
HEAP32[(((_math_methods)+(576))>>2)]=((__str39)|0);
HEAP32[(((_math_methods)+(580))>>2)]=(FUNCTION_TABLE_OFFSET + 96);
HEAP32[(((_math_methods)+(588))>>2)]=((_math_sqrt_doc)|0);
HEAP32[(((_math_methods)+(592))>>2)]=((__str40)|0);
HEAP32[(((_math_methods)+(596))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((_math_methods)+(604))>>2)]=((_math_tan_doc)|0);
HEAP32[(((_math_methods)+(608))>>2)]=((__str41)|0);
HEAP32[(((_math_methods)+(612))>>2)]=(FUNCTION_TABLE_OFFSET + 40);
HEAP32[(((_math_methods)+(620))>>2)]=((_math_tanh_doc)|0);
HEAP32[(((_math_methods)+(624))>>2)]=((__str42)|0);
HEAP32[(((_math_methods)+(628))>>2)]=(FUNCTION_TABLE_OFFSET + 52);
HEAP32[(((_math_methods)+(636))>>2)]=((_math_trunc_doc)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,Math.abs,0,_math_copysign,0,_math_lgamma,0,Math.exp,0,_math_ldexp
,0,_math_tan,0,_cosh,0,_math_fsum,0,_math_atan,0,Math.sin
,0,_math_exp,0,_math_frexp,0,_math_cosh,0,__Py_log1p,0,_math_log10
,0,_math_atan2,0,_m_erf,0,_math_sin,0,_math_cos,0,_math_tanh
,0,Math.acos,0,Math.atan,0,_m_log,0,_math_factorial,0,_math_erf
,0,_math_trunc,0,_m_erfc,0,_math_atanh,0,_math_radians,0,_math_modf
,0,_m_lgamma,0,_math_isinf,0,_acosh,0,_sinh,0,Math.asin
,0,_math_floor,0,_math_isnan,0,_math_asin,0,Math.cos,0,_atanh
,0,_math_log,0,_math_asinh,0,_tanh,0,_math_gamma,0,_math_erfc
,0,_math_expm1,0,_math_hypot,0,_math_sqrt,0,_math_ceil,0,_math_log1p
,0,_math_acos,0,_math_fmod,0,_asinh,0,Math.tan,0,_math_degrees
,0,_copysign,0,_m_tgamma,0,_expm1,0,_m_atan2,0,_math_fabs
,0,_m_log10,0,_math_acosh,0,Math.ceil,0,_math_sinh,0,Math.sqrt,0,_math_pow,0,Math.floor,0]);
// EMSCRIPTEN_START_FUNCS
function _initmath() {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $m;
      var $1=_Py_InitModule4(((__str)|0), ((_math_methods)|0), ((_module_doc)|0), 0, 1013);
      $m=$1;
      var $2=$m;
      var $3=(($2)|(0))==0;
      if ($3) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 4; break;
    case 3: 
      var $6=$m;
      var $7=_PyFloat_FromDouble(3.141592653589793);
      var $8=_PyModule_AddObject($6, ((__str1)|0), $7);
      var $9=$m;
      var $10=_PyFloat_FromDouble(2.718281828459045);
      var $11=_PyModule_AddObject($9, ((__str2)|0), $10);
      label = 4; break;
    case 4: 
      return;
    default: assert(0, "bad label: " + label);
  }
}
Module["_initmath"] = _initmath;
function _math_acos($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 42), 0);
  return $4;
}
function _math_acosh($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 66), 0);
  return $4;
}
function _math_asin($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 70), 0);
  return $4;
}
function _math_asinh($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 106), 0);
  return $4;
}
function _math_atan($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 44), 0);
  return $4;
}
function _math_atan2($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_2($3, (FUNCTION_TABLE_OFFSET + 118), ((__str8)|0));
  return $4;
}
function _math_atanh($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 80), 0);
  return $4;
}
function _math_ceil($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 126), 0);
  return $4;
}
function _math_copysign($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_2($3, (FUNCTION_TABLE_OFFSET + 112), ((__str11)|0));
  return $4;
}
function _math_cos($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 78), 0);
  return $4;
}
function _math_cosh($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 14), 1);
  return $4;
}
function _math_degrees($self, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x;
      $2=$self;
      $3=$arg;
      var $4=$3;
      var $5=_PyFloat_AsDouble($4);
      $x=$5;
      var $6=$x;
      var $7=$6 == -1;
      if ($7) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $9=_PyErr_Occurred();
      var $10=(($9)|(0))!=0;
      if ($10) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 5; break;
    case 4: 
      var $13=$x;
      var $14=($13)*(57.29577951308232);
      var $15=_PyFloat_FromDouble($14);
      $1=$15;
      label = 5; break;
    case 5: 
      var $17=$1;
      return $17;
    default: assert(0, "bad label: " + label);
  }
}
function _math_erf($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1a($3, (FUNCTION_TABLE_OFFSET + 34));
  return $4;
}
function _math_erfc($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1a($3, (FUNCTION_TABLE_OFFSET + 54));
  return $4;
}
function _math_exp($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 8), 1);
  return $4;
}
function _math_expm1($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 116), 1);
  return $4;
}
function _math_fabs($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 2), 0);
  return $4;
}
function _math_factorial($self, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $i;
      var $x;
      var $result;
      var $iobj;
      var $newresult;
      var $lx;
      var $dx;
      var $__cy;
      $2=$self;
      $3=$arg;
      var $4=$3;
      var $5=(($4+4)|0);
      var $6=HEAP32[(($5)>>2)];
      var $7=(($6)|(0))==((_PyFloat_Type)|(0));
      if ($7) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $9=$3;
      var $10=(($9+4)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=_PyType_IsSubtype($11, _PyFloat_Type);
      var $13=(($12)|(0))!=0;
      if ($13) { label = 3; break; } else { label = 16; break; }
    case 3: 
      var $15=$3;
      var $16=$15;
      var $17=(($16+8)|0);
      var $18=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($17)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($17)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      $dx=$18;
      var $19=$dx;
      var $20=___fpclassifyf($19);
      $__cy=$20;
      var $21=$__cy;
      var $22=(($21)|(0))!=1;
      if ($22) { label = 4; break; } else { var $27 = 0;label = 5; break; }
    case 4: 
      var $24=$__cy;
      var $25=(($24)|(0))!=0;
      var $27 = $25;label = 5; break;
    case 5: 
      var $27;
      if ($27) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $29=$dx;
      var $30=$dx;
      var $31=Math.floor($30);
      var $32=$29 == $31;
      if ($32) { label = 8; break; } else { label = 7; break; }
    case 7: 
      var $34=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($34, ((__str62)|0));
      $1=0;
      label = 49; break;
    case 8: 
      var $36=$dx;
      var $37=_PyLong_FromDouble($36);
      $lx=$37;
      var $38=$lx;
      var $39=(($38)|(0))==0;
      if ($39) { label = 9; break; } else { label = 10; break; }
    case 9: 
      $1=0;
      label = 49; break;
    case 10: 
      var $42=$lx;
      var $43=_PyLong_AsLong($42);
      $x=$43;
      label = 11; break;
    case 11: 
      var $45=$lx;
      var $46=(($45)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=((($47)-(1))|0);
      HEAP32[(($46)>>2)]=$48;
      var $49=(($48)|(0))!=0;
      if ($49) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      var $52=$lx;
      var $53=(($52+4)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=(($54+24)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=$lx;
      FUNCTION_TABLE[$56]($57);
      label = 14; break;
    case 14: 
      label = 15; break;
    case 15: 
      label = 17; break;
    case 16: 
      var $61=$3;
      var $62=_PyInt_AsLong($61);
      $x=$62;
      label = 17; break;
    case 17: 
      var $64=$x;
      var $65=(($64)|(0))==-1;
      if ($65) { label = 18; break; } else { label = 20; break; }
    case 18: 
      var $67=_PyErr_Occurred();
      var $68=(($67)|(0))!=0;
      if ($68) { label = 19; break; } else { label = 20; break; }
    case 19: 
      $1=0;
      label = 49; break;
    case 20: 
      var $71=$x;
      var $72=(($71)|(0)) < 0;
      if ($72) { label = 21; break; } else { label = 22; break; }
    case 21: 
      var $74=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($74, ((__str63)|0));
      $1=0;
      label = 49; break;
    case 22: 
      var $76=_PyInt_FromLong(1);
      $result=$76;
      var $77=$result;
      var $78=(($77)|(0))==0;
      if ($78) { label = 23; break; } else { label = 24; break; }
    case 23: 
      $1=0;
      label = 49; break;
    case 24: 
      $i=1;
      label = 25; break;
    case 25: 
      var $82=$i;
      var $83=$x;
      var $84=(($82)|(0)) <= (($83)|(0));
      if ($84) { label = 26; break; } else { label = 42; break; }
    case 26: 
      var $86=$i;
      var $87=_PyInt_FromLong($86);
      $iobj=$87;
      var $88=$iobj;
      var $89=(($88)|(0))==0;
      if ($89) { label = 27; break; } else { label = 28; break; }
    case 27: 
      label = 43; break;
    case 28: 
      var $92=$result;
      var $93=$iobj;
      var $94=_PyNumber_Multiply($92, $93);
      $newresult=$94;
      label = 29; break;
    case 29: 
      var $96=$iobj;
      var $97=(($96)|0);
      var $98=HEAP32[(($97)>>2)];
      var $99=((($98)-(1))|0);
      HEAP32[(($97)>>2)]=$99;
      var $100=(($99)|(0))!=0;
      if ($100) { label = 30; break; } else { label = 31; break; }
    case 30: 
      label = 32; break;
    case 31: 
      var $103=$iobj;
      var $104=(($103+4)|0);
      var $105=HEAP32[(($104)>>2)];
      var $106=(($105+24)|0);
      var $107=HEAP32[(($106)>>2)];
      var $108=$iobj;
      FUNCTION_TABLE[$107]($108);
      label = 32; break;
    case 32: 
      label = 33; break;
    case 33: 
      var $111=$newresult;
      var $112=(($111)|(0))==0;
      if ($112) { label = 34; break; } else { label = 35; break; }
    case 34: 
      label = 43; break;
    case 35: 
      label = 36; break;
    case 36: 
      var $116=$result;
      var $117=(($116)|0);
      var $118=HEAP32[(($117)>>2)];
      var $119=((($118)-(1))|0);
      HEAP32[(($117)>>2)]=$119;
      var $120=(($119)|(0))!=0;
      if ($120) { label = 37; break; } else { label = 38; break; }
    case 37: 
      label = 39; break;
    case 38: 
      var $123=$result;
      var $124=(($123+4)|0);
      var $125=HEAP32[(($124)>>2)];
      var $126=(($125+24)|0);
      var $127=HEAP32[(($126)>>2)];
      var $128=$result;
      FUNCTION_TABLE[$127]($128);
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      var $131=$newresult;
      $result=$131;
      label = 41; break;
    case 41: 
      var $133=$i;
      var $134=((($133)+(1))|0);
      $i=$134;
      label = 25; break;
    case 42: 
      var $136=$result;
      $1=$136;
      label = 49; break;
    case 43: 
      label = 44; break;
    case 44: 
      var $139=$result;
      var $140=(($139)|0);
      var $141=HEAP32[(($140)>>2)];
      var $142=((($141)-(1))|0);
      HEAP32[(($140)>>2)]=$142;
      var $143=(($142)|(0))!=0;
      if ($143) { label = 45; break; } else { label = 46; break; }
    case 45: 
      label = 47; break;
    case 46: 
      var $146=$result;
      var $147=(($146+4)|0);
      var $148=HEAP32[(($147)>>2)];
      var $149=(($148+24)|0);
      var $150=HEAP32[(($149)>>2)];
      var $151=$result;
      FUNCTION_TABLE[$150]($151);
      label = 47; break;
    case 47: 
      label = 48; break;
    case 48: 
      $1=0;
      label = 49; break;
    case 49: 
      var $155=$1;
      return $155;
    default: assert(0, "bad label: " + label);
  }
}
function _math_floor($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 134), 0);
  return $4;
}
function _math_fmod($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $ox=__stackBase__;
      var $oy=(__stackBase__)+(4);
      var $r;
      var $x;
      var $y;
      var $__cy;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_UnpackTuple($4, ((__str22)|0), 2, 2, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$ox,HEAP32[(((tempInt)+(4))>>2)]=$oy,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 22; break;
    case 3: 
      var $9=HEAP32[(($ox)>>2)];
      var $10=_PyFloat_AsDouble($9);
      $x=$10;
      var $11=HEAP32[(($oy)>>2)];
      var $12=_PyFloat_AsDouble($11);
      $y=$12;
      var $13=$x;
      var $14=$13 == -1;
      if ($14) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $16=$y;
      var $17=$16 == -1;
      if ($17) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $19=_PyErr_Occurred();
      var $20=(($19)|(0))!=0;
      if ($20) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 22; break;
    case 7: 
      var $23=$y;
      var $24=___fpclassifyf($23);
      var $25=(($24)|(0))==1;
      if ($25) { label = 8; break; } else { label = 12; break; }
    case 8: 
      var $27=$x;
      var $28=___fpclassifyf($27);
      $__cy=$28;
      var $29=$__cy;
      var $30=(($29)|(0))!=1;
      if ($30) { label = 9; break; } else { var $35 = 0;label = 10; break; }
    case 9: 
      var $32=$__cy;
      var $33=(($32)|(0))!=0;
      var $35 = $33;label = 10; break;
    case 10: 
      var $35;
      if ($35) { label = 11; break; } else { label = 12; break; }
    case 11: 
      var $37=$x;
      var $38=_PyFloat_FromDouble($37);
      $1=$38;
      label = 22; break;
    case 12: 
      var $40=___errno_location();
      HEAP32[(($40)>>2)]=0;
      var $41=$x;
      var $42=$y;
      var $43=_fmod($41, $42);
      $r=$43;
      var $44=$r;
      var $45=___fpclassifyf($44);
      var $46=(($45)|(0))==0;
      if ($46) { label = 13; break; } else { label = 18; break; }
    case 13: 
      var $48=$x;
      var $49=___fpclassifyf($48);
      var $50=(($49)|(0))==0;
      if ($50) { label = 16; break; } else { label = 14; break; }
    case 14: 
      var $52=$y;
      var $53=___fpclassifyf($52);
      var $54=(($53)|(0))==0;
      if ($54) { label = 16; break; } else { label = 15; break; }
    case 15: 
      var $56=___errno_location();
      HEAP32[(($56)>>2)]=33;
      label = 17; break;
    case 16: 
      var $58=___errno_location();
      HEAP32[(($58)>>2)]=0;
      label = 17; break;
    case 17: 
      label = 18; break;
    case 18: 
      var $61=___errno_location();
      var $62=HEAP32[(($61)>>2)];
      var $63=(($62)|(0))!=0;
      if ($63) { label = 19; break; } else { label = 21; break; }
    case 19: 
      var $65=$r;
      var $66=_is_error($65);
      var $67=(($66)|(0))!=0;
      if ($67) { label = 20; break; } else { label = 21; break; }
    case 20: 
      $1=0;
      label = 22; break;
    case 21: 
      var $70=$r;
      var $71=_PyFloat_FromDouble($70);
      $1=$71;
      label = 22; break;
    case 22: 
      var $73=$1;
      STACKTOP = __stackBase__;
      return $73;
    default: assert(0, "bad label: " + label);
  }
}
function _math_frexp($self, $arg) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $i=__stackBase__;
      var $x;
      $2=$self;
      $3=$arg;
      var $4=$3;
      var $5=_PyFloat_AsDouble($4);
      $x=$5;
      var $6=$x;
      var $7=$6 == -1;
      if ($7) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $9=_PyErr_Occurred();
      var $10=(($9)|(0))!=0;
      if ($10) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 10; break;
    case 4: 
      var $13=$x;
      var $14=___fpclassifyf($13);
      var $15=(($14)|(0))==0;
      if ($15) { label = 7; break; } else { label = 5; break; }
    case 5: 
      var $17=$x;
      var $18=___fpclassifyf($17);
      var $19=(($18)|(0))==1;
      if ($19) { label = 7; break; } else { label = 6; break; }
    case 6: 
      var $21=$x;
      var $22=$21 != 0;
      if ($22) { label = 8; break; } else { label = 7; break; }
    case 7: 
      HEAP32[(($i)>>2)]=0;
      label = 9; break;
    case 8: 
      var $25=$x;
      var $26=_frexp($25, $i);
      $x=$26;
      label = 9; break;
    case 9: 
      var $28=$x;
      var $29=HEAP32[(($i)>>2)];
      var $30=_Py_BuildValue(((__str61)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 12)|0,assert((STACKTOP|0) < (STACK_MAX|0)),(HEAPF64[(tempDoublePtr)>>3]=$28,HEAP32[((tempInt)>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[(((tempInt)+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]),HEAP32[(((tempInt)+(8))>>2)]=$29,tempInt));
      $1=$30;
      label = 10; break;
    case 10: 
      var $32=$1;
      STACKTOP = __stackBase__;
      return $32;
    default: assert(0, "bad label: " + label);
  }
}
function _math_gamma($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1a($3, (FUNCTION_TABLE_OFFSET + 114));
  return $4;
}
function _math_hypot($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $ox=__stackBase__;
      var $oy=(__stackBase__)+(4);
      var $r;
      var $x;
      var $y;
      var $__cy;
      var $__cy1;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_UnpackTuple($4, ((__str26)|0), 2, 2, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$ox,HEAP32[(((tempInt)+(4))>>2)]=$oy,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 32; break;
    case 3: 
      var $9=HEAP32[(($ox)>>2)];
      var $10=_PyFloat_AsDouble($9);
      $x=$10;
      var $11=HEAP32[(($oy)>>2)];
      var $12=_PyFloat_AsDouble($11);
      $y=$12;
      var $13=$x;
      var $14=$13 == -1;
      if ($14) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $16=$y;
      var $17=$16 == -1;
      if ($17) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $19=_PyErr_Occurred();
      var $20=(($19)|(0))!=0;
      if ($20) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 32; break;
    case 7: 
      var $23=$x;
      var $24=___fpclassifyf($23);
      var $25=(($24)|(0))==1;
      if ($25) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $27=$x;
      var $28=Math.abs($27);
      var $29=_PyFloat_FromDouble($28);
      $1=$29;
      label = 32; break;
    case 9: 
      var $31=$y;
      var $32=___fpclassifyf($31);
      var $33=(($32)|(0))==1;
      if ($33) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $35=$y;
      var $36=Math.abs($35);
      var $37=_PyFloat_FromDouble($36);
      $1=$37;
      label = 32; break;
    case 11: 
      var $39=___errno_location();
      HEAP32[(($39)>>2)]=0;
      var $40=$x;
      var $41=$y;
      var $42=_hypot($40, $41);
      $r=$42;
      var $43=$r;
      var $44=___fpclassifyf($43);
      var $45=(($44)|(0))==0;
      if ($45) { label = 12; break; } else { label = 17; break; }
    case 12: 
      var $47=$x;
      var $48=___fpclassifyf($47);
      var $49=(($48)|(0))==0;
      if ($49) { label = 15; break; } else { label = 13; break; }
    case 13: 
      var $51=$y;
      var $52=___fpclassifyf($51);
      var $53=(($52)|(0))==0;
      if ($53) { label = 15; break; } else { label = 14; break; }
    case 14: 
      var $55=___errno_location();
      HEAP32[(($55)>>2)]=33;
      label = 16; break;
    case 15: 
      var $57=___errno_location();
      HEAP32[(($57)>>2)]=0;
      label = 16; break;
    case 16: 
      label = 28; break;
    case 17: 
      var $60=$r;
      var $61=___fpclassifyf($60);
      var $62=(($61)|(0))==1;
      if ($62) { label = 18; break; } else { label = 27; break; }
    case 18: 
      var $64=$x;
      var $65=___fpclassifyf($64);
      $__cy=$65;
      var $66=$__cy;
      var $67=(($66)|(0))!=1;
      if ($67) { label = 19; break; } else { var $72 = 0;label = 20; break; }
    case 19: 
      var $69=$__cy;
      var $70=(($69)|(0))!=0;
      var $72 = $70;label = 20; break;
    case 20: 
      var $72;
      if ($72) { label = 21; break; } else { label = 25; break; }
    case 21: 
      var $74=$y;
      var $75=___fpclassifyf($74);
      $__cy1=$75;
      var $76=$__cy1;
      var $77=(($76)|(0))!=1;
      if ($77) { label = 22; break; } else { var $82 = 0;label = 23; break; }
    case 22: 
      var $79=$__cy1;
      var $80=(($79)|(0))!=0;
      var $82 = $80;label = 23; break;
    case 23: 
      var $82;
      if ($82) { label = 24; break; } else { label = 25; break; }
    case 24: 
      var $84=___errno_location();
      HEAP32[(($84)>>2)]=34;
      label = 26; break;
    case 25: 
      var $86=___errno_location();
      HEAP32[(($86)>>2)]=0;
      label = 26; break;
    case 26: 
      label = 27; break;
    case 27: 
      label = 28; break;
    case 28: 
      var $90=___errno_location();
      var $91=HEAP32[(($90)>>2)];
      var $92=(($91)|(0))!=0;
      if ($92) { label = 29; break; } else { label = 31; break; }
    case 29: 
      var $94=$r;
      var $95=_is_error($94);
      var $96=(($95)|(0))!=0;
      if ($96) { label = 30; break; } else { label = 31; break; }
    case 30: 
      $1=0;
      label = 32; break;
    case 31: 
      var $99=$r;
      var $100=_PyFloat_FromDouble($99);
      $1=$100;
      label = 32; break;
    case 32: 
      var $102=$1;
      STACKTOP = __stackBase__;
      return $102;
    default: assert(0, "bad label: " + label);
  }
}
function _math_isinf($self, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x;
      $2=$self;
      $3=$arg;
      var $4=$3;
      var $5=_PyFloat_AsDouble($4);
      $x=$5;
      var $6=$x;
      var $7=$6 == -1;
      if ($7) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $9=_PyErr_Occurred();
      var $10=(($9)|(0))!=0;
      if ($10) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 5; break;
    case 4: 
      var $13=$x;
      var $14=___fpclassifyf($13);
      var $15=(($14)|(0))==1;
      var $16=(($15)&(1));
      var $17=_PyBool_FromLong($16);
      $1=$17;
      label = 5; break;
    case 5: 
      var $19=$1;
      return $19;
    default: assert(0, "bad label: " + label);
  }
}
function _math_isnan($self, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x;
      $2=$self;
      $3=$arg;
      var $4=$3;
      var $5=_PyFloat_AsDouble($4);
      $x=$5;
      var $6=$x;
      var $7=$6 == -1;
      if ($7) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $9=_PyErr_Occurred();
      var $10=(($9)|(0))!=0;
      if ($10) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 5; break;
    case 4: 
      var $13=$x;
      var $14=___fpclassifyf($13);
      var $15=(($14)|(0))==0;
      var $16=(($15)&(1));
      var $17=_PyBool_FromLong($16);
      $1=$17;
      label = 5; break;
    case 5: 
      var $19=$1;
      return $19;
    default: assert(0, "bad label: " + label);
  }
}
function _math_ldexp($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 16)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x=__stackBase__;
      var $r;
      var $oexp=(__stackBase__)+(8);
      var $exp;
      var $overflow=(__stackBase__)+(12);
      var $__cy;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_ParseTuple($4, ((__str53)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$x,HEAP32[(((tempInt)+(4))>>2)]=$oexp,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 30; break;
    case 3: 
      var $9=HEAP32[(($oexp)>>2)];
      var $10=(($9+4)|0);
      var $11=HEAP32[(($10)>>2)];
      var $12=(($11+84)|0);
      var $13=HEAP32[(($12)>>2)];
      var $14=$13 & 16777216;
      var $15=(($14)|(0))!=0;
      if ($15) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $17=HEAP32[(($oexp)>>2)];
      var $18=(($17+4)|0);
      var $19=HEAP32[(($18)>>2)];
      var $20=(($19+84)|0);
      var $21=HEAP32[(($20)>>2)];
      var $22=$21 & 8388608;
      var $23=(($22)|(0))!=0;
      if ($23) { label = 5; break; } else { label = 11; break; }
    case 5: 
      var $25=HEAP32[(($oexp)>>2)];
      var $26=_PyLong_AsLongAndOverflow($25, $overflow);
      $exp=$26;
      var $27=$exp;
      var $28=(($27)|(0))==-1;
      if ($28) { label = 6; break; } else { label = 8; break; }
    case 6: 
      var $30=_PyErr_Occurred();
      var $31=(($30)|(0))!=0;
      if ($31) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=0;
      label = 30; break;
    case 8: 
      var $34=HEAP32[(($overflow)>>2)];
      var $35=(($34)|(0))!=0;
      if ($35) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $37=HEAP32[(($overflow)>>2)];
      var $38=(($37)|(0)) < 0;
      var $39=$38 ? -2147483648 : 2147483647;
      $exp=$39;
      label = 10; break;
    case 10: 
      label = 12; break;
    case 11: 
      var $42=HEAP32[((_PyExc_TypeError)>>2)];
      _PyErr_SetString($42, ((__str54)|0));
      $1=0;
      label = 30; break;
    case 12: 
      var $44=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($x)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($x)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $45=$44 == 0;
      if ($45) { label = 16; break; } else { label = 13; break; }
    case 13: 
      var $47=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($x)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($x)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $48=___fpclassifyf($47);
      $__cy=$48;
      var $49=$__cy;
      var $50=(($49)|(0))!=1;
      if ($50) { label = 14; break; } else { var $55 = 0;label = 15; break; }
    case 14: 
      var $52=$__cy;
      var $53=(($52)|(0))!=0;
      var $55 = $53;label = 15; break;
    case 15: 
      var $55;
      if ($55) { label = 17; break; } else { label = 16; break; }
    case 16: 
      var $57=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($x)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($x)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      $r=$57;
      var $58=___errno_location();
      HEAP32[(($58)>>2)]=0;
      label = 26; break;
    case 17: 
      var $60=$exp;
      var $61=(($60)|(0)) > 2147483647;
      if ($61) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $63=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($x)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($x)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $64=_copysign(Infinity, $63);
      $r=$64;
      var $65=___errno_location();
      HEAP32[(($65)>>2)]=34;
      label = 25; break;
    case 19: 
      var $67=$exp;
      var $68=(($67)|(0)) < -2147483648;
      if ($68) { label = 20; break; } else { label = 21; break; }
    case 20: 
      var $70=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($x)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($x)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $71=_copysign(0, $70);
      $r=$71;
      var $72=___errno_location();
      HEAP32[(($72)>>2)]=0;
      label = 24; break;
    case 21: 
      var $74=___errno_location();
      HEAP32[(($74)>>2)]=0;
      var $75=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($x)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($x)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $76=$exp;
      var $77=_ldexp($75, $76);
      $r=$77;
      var $78=$r;
      var $79=___fpclassifyf($78);
      var $80=(($79)|(0))==1;
      if ($80) { label = 22; break; } else { label = 23; break; }
    case 22: 
      var $82=___errno_location();
      HEAP32[(($82)>>2)]=34;
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      label = 25; break;
    case 25: 
      label = 26; break;
    case 26: 
      var $87=___errno_location();
      var $88=HEAP32[(($87)>>2)];
      var $89=(($88)|(0))!=0;
      if ($89) { label = 27; break; } else { label = 29; break; }
    case 27: 
      var $91=$r;
      var $92=_is_error($91);
      var $93=(($92)|(0))!=0;
      if ($93) { label = 28; break; } else { label = 29; break; }
    case 28: 
      $1=0;
      label = 30; break;
    case 29: 
      var $96=$r;
      var $97=_PyFloat_FromDouble($96);
      $1=$97;
      label = 30; break;
    case 30: 
      var $99=$1;
      STACKTOP = __stackBase__;
      return $99;
    default: assert(0, "bad label: " + label);
  }
}
function _math_fsum($self, $seq) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 264)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $item;
      var $iter;
      var $sum;
      var $i;
      var $j;
      var $n;
      var $m=__stackBase__;
      var $x;
      var $y;
      var $t;
      var $ps=(__stackBase__)+(4);
      var $p=(__stackBase__)+(260);
      var $xsave;
      var $special_sum;
      var $inf_sum;
      var $hi;
      var $yr;
      var $lo;
      var $__cy;
      var $__cy1;
      $2=$self;
      $3=$seq;
      $sum=0;
      $n=0;
      HEAP32[(($m)>>2)]=32;
      var $4=(($ps)|0);
      HEAP32[(($p)>>2)]=$4;
      $special_sum=0;
      $inf_sum=0;
      var $5=$3;
      var $6=_PyObject_GetIter($5);
      $iter=$6;
      var $7=$iter;
      var $8=(($7)|(0))==0;
      if ($8) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 83; break;
    case 3: 
      label = 4; break;
    case 4: 
      var $12=$n;
      var $13=0 <= (($12)|(0));
      if ($13) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $15=$n;
      var $16=HEAP32[(($m)>>2)];
      var $17=(($15)|(0)) <= (($16)|(0));
      if ($17) { label = 6; break; } else { label = 7; break; }
    case 6: 
      label = 8; break;
    case 7: 
      ___assert_func(((__str44)|0), 978, ((___func___math_fsum)|0), ((__str55)|0));
      throw "Reached an unreachable!";
      label = 8; break;
    case 8: 
      var $22=HEAP32[(($m)>>2)];
      var $23=(($22)|(0))==32;
      if ($23) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $25=HEAP32[(($p)>>2)];
      var $26=(($ps)|0);
      var $27=(($25)|(0))==(($26)|(0));
      if ($27) { label = 12; break; } else { label = 10; break; }
    case 10: 
      var $29=HEAP32[(($m)>>2)];
      var $30=(($29)|(0)) > 32;
      if ($30) { label = 11; break; } else { label = 13; break; }
    case 11: 
      var $32=HEAP32[(($p)>>2)];
      var $33=(($32)|(0))!=0;
      if ($33) { label = 12; break; } else { label = 13; break; }
    case 12: 
      label = 14; break;
    case 13: 
      ___assert_func(((__str44)|0), 980, ((___func___math_fsum)|0), ((__str56)|0));
      throw "Reached an unreachable!";
      label = 14; break;
    case 14: 
      var $38=$iter;
      var $39=_PyIter_Next($38);
      $item=$39;
      var $40=$item;
      var $41=(($40)|(0))==0;
      if ($41) { label = 15; break; } else { label = 18; break; }
    case 15: 
      var $43=_PyErr_Occurred();
      var $44=(($43)|(0))!=0;
      if ($44) { label = 16; break; } else { label = 17; break; }
    case 16: 
      label = 75; break;
    case 17: 
      label = 51; break;
    case 18: 
      var $48=$item;
      var $49=_PyFloat_AsDouble($48);
      $x=$49;
      label = 19; break;
    case 19: 
      var $51=$item;
      var $52=(($51)|0);
      var $53=HEAP32[(($52)>>2)];
      var $54=((($53)-(1))|0);
      HEAP32[(($52)>>2)]=$54;
      var $55=(($54)|(0))!=0;
      if ($55) { label = 20; break; } else { label = 21; break; }
    case 20: 
      label = 22; break;
    case 21: 
      var $58=$item;
      var $59=(($58+4)|0);
      var $60=HEAP32[(($59)>>2)];
      var $61=(($60+24)|0);
      var $62=HEAP32[(($61)>>2)];
      var $63=$item;
      FUNCTION_TABLE[$62]($63);
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      var $66=_PyErr_Occurred();
      var $67=(($66)|(0))!=0;
      if ($67) { label = 24; break; } else { label = 25; break; }
    case 24: 
      label = 75; break;
    case 25: 
      var $70=$x;
      $xsave=$70;
      $j=0;
      $i=0;
      label = 26; break;
    case 26: 
      var $72=$j;
      var $73=$n;
      var $74=(($72)|(0)) < (($73)|(0));
      if ($74) { label = 27; break; } else { label = 33; break; }
    case 27: 
      var $76=$j;
      var $77=HEAP32[(($p)>>2)];
      var $78=(($77+($76<<3))|0);
      var $79=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($78)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($78)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      $y=$79;
      var $80=$x;
      var $81=Math.abs($80);
      var $82=$y;
      var $83=Math.abs($82);
      var $84=$81 < $83;
      if ($84) { label = 28; break; } else { label = 29; break; }
    case 28: 
      var $86=$x;
      $t=$86;
      var $87=$y;
      $x=$87;
      var $88=$t;
      $y=$88;
      label = 29; break;
    case 29: 
      var $90=$x;
      var $91=$y;
      var $92=($90)+($91);
      $hi=$92;
      var $93=$hi;
      var $94=$x;
      var $95=($93)-($94);
      $yr=$95;
      var $96=$y;
      var $97=$yr;
      var $98=($96)-($97);
      $lo=$98;
      var $99=$lo;
      var $100=$99 != 0;
      if ($100) { label = 30; break; } else { label = 31; break; }
    case 30: 
      var $102=$lo;
      var $103=$i;
      var $104=((($103)+(1))|0);
      $i=$104;
      var $105=HEAP32[(($p)>>2)];
      var $106=(($105+($103<<3))|0);
      (HEAPF64[(tempDoublePtr)>>3]=$102,HEAP32[(($106)>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((($106)+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]);
      label = 31; break;
    case 31: 
      var $108=$hi;
      $x=$108;
      label = 32; break;
    case 32: 
      var $110=$j;
      var $111=((($110)+(1))|0);
      $j=$111;
      label = 26; break;
    case 33: 
      var $113=$i;
      $n=$113;
      var $114=$x;
      var $115=$114 != 0;
      if ($115) { label = 34; break; } else { label = 50; break; }
    case 34: 
      var $117=$x;
      var $118=___fpclassifyf($117);
      $__cy=$118;
      var $119=$__cy;
      var $120=(($119)|(0))!=1;
      if ($120) { label = 35; break; } else { var $125 = 0;label = 36; break; }
    case 35: 
      var $122=$__cy;
      var $123=(($122)|(0))!=0;
      var $125 = $123;label = 36; break;
    case 36: 
      var $125;
      if ($125) { label = 44; break; } else { label = 37; break; }
    case 37: 
      var $127=$xsave;
      var $128=___fpclassifyf($127);
      $__cy1=$128;
      var $129=$__cy1;
      var $130=(($129)|(0))!=1;
      if ($130) { label = 38; break; } else { var $135 = 0;label = 39; break; }
    case 38: 
      var $132=$__cy1;
      var $133=(($132)|(0))!=0;
      var $135 = $133;label = 39; break;
    case 39: 
      var $135;
      if ($135) { label = 40; break; } else { label = 41; break; }
    case 40: 
      var $137=HEAP32[((_PyExc_OverflowError)>>2)];
      _PyErr_SetString($137, ((__str57)|0));
      label = 75; break;
    case 41: 
      var $139=$xsave;
      var $140=___fpclassifyf($139);
      var $141=(($140)|(0))==1;
      if ($141) { label = 42; break; } else { label = 43; break; }
    case 42: 
      var $143=$xsave;
      var $144=$inf_sum;
      var $145=($144)+($143);
      $inf_sum=$145;
      label = 43; break;
    case 43: 
      var $147=$xsave;
      var $148=$special_sum;
      var $149=($148)+($147);
      $special_sum=$149;
      $n=0;
      label = 49; break;
    case 44: 
      var $151=$n;
      var $152=HEAP32[(($m)>>2)];
      var $153=(($151)|(0)) >= (($152)|(0));
      if ($153) { label = 45; break; } else { label = 47; break; }
    case 45: 
      var $155=$n;
      var $156=(($ps)|0);
      var $157=__fsum_realloc($p, $155, $156, $m);
      var $158=(($157)|(0))!=0;
      if ($158) { label = 46; break; } else { label = 47; break; }
    case 46: 
      label = 75; break;
    case 47: 
      var $161=$x;
      var $162=$n;
      var $163=((($162)+(1))|0);
      $n=$163;
      var $164=HEAP32[(($p)>>2)];
      var $165=(($164+($162<<3))|0);
      (HEAPF64[(tempDoublePtr)>>3]=$161,HEAP32[(($165)>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((($165)+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]);
      label = 48; break;
    case 48: 
      label = 49; break;
    case 49: 
      label = 50; break;
    case 50: 
      label = 4; break;
    case 51: 
      var $170=$special_sum;
      var $171=$170 != 0;
      if ($171) { label = 52; break; } else { label = 56; break; }
    case 52: 
      var $173=$inf_sum;
      var $174=___fpclassifyf($173);
      var $175=(($174)|(0))==0;
      if ($175) { label = 53; break; } else { label = 54; break; }
    case 53: 
      var $177=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($177, ((__str58)|0));
      label = 55; break;
    case 54: 
      var $179=$special_sum;
      var $180=_PyFloat_FromDouble($179);
      $sum=$180;
      label = 55; break;
    case 55: 
      label = 75; break;
    case 56: 
      $hi=0;
      var $183=$n;
      var $184=(($183)|(0)) > 0;
      if ($184) { label = 57; break; } else { label = 74; break; }
    case 57: 
      var $186=$n;
      var $187=((($186)-(1))|0);
      $n=$187;
      var $188=HEAP32[(($p)>>2)];
      var $189=(($188+($187<<3))|0);
      var $190=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($189)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($189)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      $hi=$190;
      label = 58; break;
    case 58: 
      var $192=$n;
      var $193=(($192)|(0)) > 0;
      if ($193) { label = 59; break; } else { label = 65; break; }
    case 59: 
      var $195=$hi;
      $x=$195;
      var $196=$n;
      var $197=((($196)-(1))|0);
      $n=$197;
      var $198=HEAP32[(($p)>>2)];
      var $199=(($198+($197<<3))|0);
      var $200=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($199)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($199)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      $y=$200;
      var $201=$y;
      var $202=Math.abs($201);
      var $203=$x;
      var $204=Math.abs($203);
      var $205=$202 < $204;
      if ($205) { label = 60; break; } else { label = 61; break; }
    case 60: 
      label = 62; break;
    case 61: 
      ___assert_func(((__str44)|0), 1049, ((___func___math_fsum)|0), ((__str59)|0));
      throw "Reached an unreachable!";
      label = 62; break;
    case 62: 
      var $210=$x;
      var $211=$y;
      var $212=($210)+($211);
      $hi=$212;
      var $213=$hi;
      var $214=$x;
      var $215=($213)-($214);
      $yr=$215;
      var $216=$y;
      var $217=$yr;
      var $218=($216)-($217);
      $lo=$218;
      var $219=$lo;
      var $220=$219 != 0;
      if ($220) { label = 63; break; } else { label = 64; break; }
    case 63: 
      label = 65; break;
    case 64: 
      label = 58; break;
    case 65: 
      var $224=$n;
      var $225=(($224)|(0)) > 0;
      if ($225) { label = 66; break; } else { label = 73; break; }
    case 66: 
      var $227=$lo;
      var $228=$227 < 0;
      if ($228) { label = 67; break; } else { label = 68; break; }
    case 67: 
      var $230=$n;
      var $231=((($230)-(1))|0);
      var $232=HEAP32[(($p)>>2)];
      var $233=(($232+($231<<3))|0);
      var $234=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($233)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($233)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $235=$234 < 0;
      if ($235) { label = 70; break; } else { label = 68; break; }
    case 68: 
      var $237=$lo;
      var $238=$237 > 0;
      if ($238) { label = 69; break; } else { label = 73; break; }
    case 69: 
      var $240=$n;
      var $241=((($240)-(1))|0);
      var $242=HEAP32[(($p)>>2)];
      var $243=(($242+($241<<3))|0);
      var $244=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($243)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($243)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $245=$244 > 0;
      if ($245) { label = 70; break; } else { label = 73; break; }
    case 70: 
      var $247=$lo;
      var $248=($247)*(2);
      $y=$248;
      var $249=$hi;
      var $250=$y;
      var $251=($249)+($250);
      $x=$251;
      var $252=$x;
      var $253=$hi;
      var $254=($252)-($253);
      $yr=$254;
      var $255=$y;
      var $256=$yr;
      var $257=$255 == $256;
      if ($257) { label = 71; break; } else { label = 72; break; }
    case 71: 
      var $259=$x;
      $hi=$259;
      label = 72; break;
    case 72: 
      label = 73; break;
    case 73: 
      label = 74; break;
    case 74: 
      var $263=$hi;
      var $264=_PyFloat_FromDouble($263);
      $sum=$264;
      label = 75; break;
    case 75: 
      label = 76; break;
    case 76: 
      var $267=$iter;
      var $268=(($267)|0);
      var $269=HEAP32[(($268)>>2)];
      var $270=((($269)-(1))|0);
      HEAP32[(($268)>>2)]=$270;
      var $271=(($270)|(0))!=0;
      if ($271) { label = 77; break; } else { label = 78; break; }
    case 77: 
      label = 79; break;
    case 78: 
      var $274=$iter;
      var $275=(($274+4)|0);
      var $276=HEAP32[(($275)>>2)];
      var $277=(($276+24)|0);
      var $278=HEAP32[(($277)>>2)];
      var $279=$iter;
      FUNCTION_TABLE[$278]($279);
      label = 79; break;
    case 79: 
      label = 80; break;
    case 80: 
      var $282=HEAP32[(($p)>>2)];
      var $283=(($ps)|0);
      var $284=(($282)|(0))!=(($283)|(0));
      if ($284) { label = 81; break; } else { label = 82; break; }
    case 81: 
      var $286=HEAP32[(($p)>>2)];
      var $287=$286;
      _PyMem_Free($287);
      label = 82; break;
    case 82: 
      var $289=$sum;
      $1=$289;
      label = 83; break;
    case 83: 
      var $291=$1;
      STACKTOP = __stackBase__;
      return $291;
    default: assert(0, "bad label: " + label);
  }
}
function _math_lgamma($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1a($3, (FUNCTION_TABLE_OFFSET + 62));
  return $4;
}
function _math_log($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $arg=__stackBase__;
      var $base=(__stackBase__)+(4);
      var $num;
      var $den;
      var $ans;
      $2=$self;
      $3=$args;
      HEAP32[(($base)>>2)]=0;
      var $4=$3;
      var $5=_PyArg_UnpackTuple($4, ((__str31)|0), 1, 2, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$arg,HEAP32[(((tempInt)+(4))>>2)]=$base,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 24; break;
    case 3: 
      var $9=HEAP32[(($arg)>>2)];
      var $10=_loghelper($9, (FUNCTION_TABLE_OFFSET + 46), ((__str31)|0));
      $num=$10;
      var $11=$num;
      var $12=(($11)|(0))==0;
      if ($12) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $14=HEAP32[(($base)>>2)];
      var $15=(($14)|(0))==0;
      if ($15) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $17=$num;
      $1=$17;
      label = 24; break;
    case 6: 
      var $19=HEAP32[(($base)>>2)];
      var $20=_loghelper($19, (FUNCTION_TABLE_OFFSET + 46), ((__str31)|0));
      $den=$20;
      var $21=$den;
      var $22=(($21)|(0))==0;
      if ($22) { label = 7; break; } else { label = 13; break; }
    case 7: 
      label = 8; break;
    case 8: 
      var $25=$num;
      var $26=(($25)|0);
      var $27=HEAP32[(($26)>>2)];
      var $28=((($27)-(1))|0);
      HEAP32[(($26)>>2)]=$28;
      var $29=(($28)|(0))!=0;
      if ($29) { label = 9; break; } else { label = 10; break; }
    case 9: 
      label = 11; break;
    case 10: 
      var $32=$num;
      var $33=(($32+4)|0);
      var $34=HEAP32[(($33)>>2)];
      var $35=(($34+24)|0);
      var $36=HEAP32[(($35)>>2)];
      var $37=$num;
      FUNCTION_TABLE[$36]($37);
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      $1=0;
      label = 24; break;
    case 13: 
      var $41=$num;
      var $42=$den;
      var $43=_PyNumber_Divide($41, $42);
      $ans=$43;
      label = 14; break;
    case 14: 
      var $45=$num;
      var $46=(($45)|0);
      var $47=HEAP32[(($46)>>2)];
      var $48=((($47)-(1))|0);
      HEAP32[(($46)>>2)]=$48;
      var $49=(($48)|(0))!=0;
      if ($49) { label = 15; break; } else { label = 16; break; }
    case 15: 
      label = 17; break;
    case 16: 
      var $52=$num;
      var $53=(($52+4)|0);
      var $54=HEAP32[(($53)>>2)];
      var $55=(($54+24)|0);
      var $56=HEAP32[(($55)>>2)];
      var $57=$num;
      FUNCTION_TABLE[$56]($57);
      label = 17; break;
    case 17: 
      label = 18; break;
    case 18: 
      label = 19; break;
    case 19: 
      var $61=$den;
      var $62=(($61)|0);
      var $63=HEAP32[(($62)>>2)];
      var $64=((($63)-(1))|0);
      HEAP32[(($62)>>2)]=$64;
      var $65=(($64)|(0))!=0;
      if ($65) { label = 20; break; } else { label = 21; break; }
    case 20: 
      label = 22; break;
    case 21: 
      var $68=$den;
      var $69=(($68+4)|0);
      var $70=HEAP32[(($69)>>2)];
      var $71=(($70+24)|0);
      var $72=HEAP32[(($71)>>2)];
      var $73=$den;
      FUNCTION_TABLE[$72]($73);
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      var $76=$ans;
      $1=$76;
      label = 24; break;
    case 24: 
      var $78=$1;
      STACKTOP = __stackBase__;
      return $78;
    default: assert(0, "bad label: " + label);
  }
}
function _math_log1p($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 28), 1);
  return $4;
}
function _math_log10($self, $arg) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$arg;
  var $3=$2;
  var $4=_loghelper($3, (FUNCTION_TABLE_OFFSET + 122), ((__str33)|0));
  return $4;
}
function _math_modf($self, $arg) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $y=__stackBase__;
      var $x;
      var $__cy;
      $2=$self;
      $3=$arg;
      var $4=$3;
      var $5=_PyFloat_AsDouble($4);
      $x=$5;
      var $6=$x;
      var $7=$6 == -1;
      if ($7) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $9=_PyErr_Occurred();
      var $10=(($9)|(0))!=0;
      if ($10) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 14; break;
    case 4: 
      var $13=$x;
      var $14=___fpclassifyf($13);
      $__cy=$14;
      var $15=$__cy;
      var $16=(($15)|(0))!=1;
      if ($16) { label = 5; break; } else { var $21 = 0;label = 6; break; }
    case 5: 
      var $18=$__cy;
      var $19=(($18)|(0))!=0;
      var $21 = $19;label = 6; break;
    case 6: 
      var $21;
      if ($21) { label = 13; break; } else { label = 7; break; }
    case 7: 
      var $23=$x;
      var $24=___fpclassifyf($23);
      var $25=(($24)|(0))==1;
      if ($25) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $27=$x;
      var $28=_copysign(0, $27);
      var $29=$x;
      var $30=_Py_BuildValue(((__str48)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),(HEAPF64[(tempDoublePtr)>>3]=$28,HEAP32[((tempInt)>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[(((tempInt)+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]),(HEAPF64[(tempDoublePtr)>>3]=$29,HEAP32[(((tempInt)+(8))>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((((tempInt)+(8))+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]),tempInt));
      $1=$30;
      label = 14; break;
    case 9: 
      var $32=$x;
      var $33=___fpclassifyf($32);
      var $34=(($33)|(0))==0;
      if ($34) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $36=$x;
      var $37=$x;
      var $38=_Py_BuildValue(((__str48)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),(HEAPF64[(tempDoublePtr)>>3]=$36,HEAP32[((tempInt)>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[(((tempInt)+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]),(HEAPF64[(tempDoublePtr)>>3]=$37,HEAP32[(((tempInt)+(8))>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((((tempInt)+(8))+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]),tempInt));
      $1=$38;
      label = 14; break;
    case 11: 
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      var $42=___errno_location();
      HEAP32[(($42)>>2)]=0;
      var $43=$x;
      var $44=_modf($43, $y);
      $x=$44;
      var $45=$x;
      var $46=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($y)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($y)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $47=_Py_BuildValue(((__str48)|0), (tempInt=STACKTOP,STACKTOP = (STACKTOP + 16)|0,assert((STACKTOP|0) < (STACK_MAX|0)),(HEAPF64[(tempDoublePtr)>>3]=$45,HEAP32[((tempInt)>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[(((tempInt)+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]),(HEAPF64[(tempDoublePtr)>>3]=$46,HEAP32[(((tempInt)+(8))>>2)]=HEAP32[((tempDoublePtr)>>2)],HEAP32[((((tempInt)+(8))+(4))>>2)]=HEAP32[(((tempDoublePtr)+(4))>>2)]),tempInt));
      $1=$47;
      label = 14; break;
    case 14: 
      var $49=$1;
      STACKTOP = __stackBase__;
      return $49;
    default: assert(0, "bad label: " + label);
  }
}
function _math_pow($self, $args) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $ox=__stackBase__;
      var $oy=(__stackBase__)+(4);
      var $r;
      var $x;
      var $y;
      var $odd_y;
      var $__cy;
      var $__cy1;
      var $__cy2;
      var $__cy3;
      $2=$self;
      $3=$args;
      var $4=$3;
      var $5=_PyArg_UnpackTuple($4, ((__str35)|0), 2, 2, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$ox,HEAP32[(((tempInt)+(4))>>2)]=$oy,tempInt));
      var $6=(($5)|(0))!=0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 77; break;
    case 3: 
      var $9=HEAP32[(($ox)>>2)];
      var $10=_PyFloat_AsDouble($9);
      $x=$10;
      var $11=HEAP32[(($oy)>>2)];
      var $12=_PyFloat_AsDouble($11);
      $y=$12;
      var $13=$x;
      var $14=$13 == -1;
      if ($14) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $16=$y;
      var $17=$16 == -1;
      if ($17) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $19=_PyErr_Occurred();
      var $20=(($19)|(0))!=0;
      if ($20) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 77; break;
    case 7: 
      $r=0;
      var $23=$x;
      var $24=___fpclassifyf($23);
      $__cy=$24;
      var $25=$__cy;
      var $26=(($25)|(0))!=1;
      if ($26) { label = 8; break; } else { var $31 = 0;label = 9; break; }
    case 8: 
      var $28=$__cy;
      var $29=(($28)|(0))!=0;
      var $31 = $29;label = 9; break;
    case 9: 
      var $31;
      if ($31) { label = 10; break; } else { label = 13; break; }
    case 10: 
      var $33=$y;
      var $34=___fpclassifyf($33);
      $__cy1=$34;
      var $35=$__cy1;
      var $36=(($35)|(0))!=1;
      if ($36) { label = 11; break; } else { var $41 = 0;label = 12; break; }
    case 11: 
      var $38=$__cy1;
      var $39=(($38)|(0))!=0;
      var $41 = $39;label = 12; break;
    case 12: 
      var $41;
      if ($41) { label = 60; break; } else { label = 13; break; }
    case 13: 
      var $43=___errno_location();
      HEAP32[(($43)>>2)]=0;
      var $44=$x;
      var $45=___fpclassifyf($44);
      var $46=(($45)|(0))==0;
      if ($46) { label = 14; break; } else { label = 18; break; }
    case 14: 
      var $48=$y;
      var $49=$48 == 0;
      if ($49) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $54 = 1;label = 17; break;
    case 16: 
      var $52=$x;
      var $54 = $52;label = 17; break;
    case 17: 
      var $54;
      $r=$54;
      label = 59; break;
    case 18: 
      var $56=$y;
      var $57=___fpclassifyf($56);
      var $58=(($57)|(0))==0;
      if ($58) { label = 19; break; } else { label = 23; break; }
    case 19: 
      var $60=$x;
      var $61=$60 == 1;
      if ($61) { label = 20; break; } else { label = 21; break; }
    case 20: 
      var $66 = 1;label = 22; break;
    case 21: 
      var $64=$y;
      var $66 = $64;label = 22; break;
    case 22: 
      var $66;
      $r=$66;
      label = 58; break;
    case 23: 
      var $68=$x;
      var $69=___fpclassifyf($68);
      var $70=(($69)|(0))==1;
      if ($70) { label = 24; break; } else { label = 41; break; }
    case 24: 
      var $72=$y;
      var $73=___fpclassifyf($72);
      $__cy2=$73;
      var $74=$__cy2;
      var $75=(($74)|(0))!=1;
      if ($75) { label = 25; break; } else { var $80 = 0;label = 26; break; }
    case 25: 
      var $77=$__cy2;
      var $78=(($77)|(0))!=0;
      var $80 = $78;label = 26; break;
    case 26: 
      var $80;
      if ($80) { label = 27; break; } else { var $87 = 0;label = 28; break; }
    case 27: 
      var $82=$y;
      var $83=Math.abs($82);
      var $84=_fmod($83, 2);
      var $85=$84 == 1;
      var $87 = $85;label = 28; break;
    case 28: 
      var $87;
      var $88=(($87)&(1));
      $odd_y=$88;
      var $89=$y;
      var $90=$89 > 0;
      if ($90) { label = 29; break; } else { label = 33; break; }
    case 29: 
      var $92=$odd_y;
      var $93=(($92)|(0))!=0;
      if ($93) { label = 30; break; } else { label = 31; break; }
    case 30: 
      var $95=$x;
      var $100 = $95;label = 32; break;
    case 31: 
      var $97=$x;
      var $98=Math.abs($97);
      var $100 = $98;label = 32; break;
    case 32: 
      var $100;
      $r=$100;
      label = 40; break;
    case 33: 
      var $102=$y;
      var $103=$102 == 0;
      if ($103) { label = 34; break; } else { label = 35; break; }
    case 34: 
      $r=1;
      label = 39; break;
    case 35: 
      var $106=$odd_y;
      var $107=(($106)|(0))!=0;
      if ($107) { label = 36; break; } else { label = 37; break; }
    case 36: 
      var $109=$x;
      var $110=_copysign(0, $109);
      var $113 = $110;label = 38; break;
    case 37: 
      var $113 = 0;label = 38; break;
    case 38: 
      var $113;
      $r=$113;
      label = 39; break;
    case 39: 
      label = 40; break;
    case 40: 
      label = 57; break;
    case 41: 
      var $117=$y;
      var $118=___fpclassifyf($117);
      var $119=(($118)|(0))==1;
      if ($119) { label = 42; break; } else { label = 56; break; }
    case 42: 
      var $121=$x;
      var $122=Math.abs($121);
      var $123=$122 == 1;
      if ($123) { label = 43; break; } else { label = 44; break; }
    case 43: 
      $r=1;
      label = 55; break;
    case 44: 
      var $126=$y;
      var $127=$126 > 0;
      if ($127) { label = 45; break; } else { label = 47; break; }
    case 45: 
      var $129=$x;
      var $130=Math.abs($129);
      var $131=$130 > 1;
      if ($131) { label = 46; break; } else { label = 47; break; }
    case 46: 
      var $133=$y;
      $r=$133;
      label = 54; break;
    case 47: 
      var $135=$y;
      var $136=$135 < 0;
      if ($136) { label = 48; break; } else { label = 52; break; }
    case 48: 
      var $138=$x;
      var $139=Math.abs($138);
      var $140=$139 < 1;
      if ($140) { label = 49; break; } else { label = 52; break; }
    case 49: 
      var $142=$y;
      var $143=(-$142);
      $r=$143;
      var $144=$x;
      var $145=$144 == 0;
      if ($145) { label = 50; break; } else { label = 51; break; }
    case 50: 
      var $147=___errno_location();
      HEAP32[(($147)>>2)]=33;
      label = 51; break;
    case 51: 
      label = 53; break;
    case 52: 
      $r=0;
      label = 53; break;
    case 53: 
      label = 54; break;
    case 54: 
      label = 55; break;
    case 55: 
      label = 56; break;
    case 56: 
      label = 57; break;
    case 57: 
      label = 58; break;
    case 58: 
      label = 59; break;
    case 59: 
      label = 73; break;
    case 60: 
      var $158=___errno_location();
      HEAP32[(($158)>>2)]=0;
      var $159=$x;
      var $160=$y;
      var $161=Math.pow($159, $160);
      $r=$161;
      var $162=$r;
      var $163=___fpclassifyf($162);
      $__cy3=$163;
      var $164=$__cy3;
      var $165=(($164)|(0))!=1;
      if ($165) { label = 61; break; } else { var $170 = 0;label = 62; break; }
    case 61: 
      var $167=$__cy3;
      var $168=(($167)|(0))!=0;
      var $170 = $168;label = 62; break;
    case 62: 
      var $170;
      if ($170) { label = 72; break; } else { label = 63; break; }
    case 63: 
      var $172=$r;
      var $173=___fpclassifyf($172);
      var $174=(($173)|(0))==0;
      if ($174) { label = 64; break; } else { label = 65; break; }
    case 64: 
      var $176=___errno_location();
      HEAP32[(($176)>>2)]=33;
      label = 71; break;
    case 65: 
      var $178=$r;
      var $179=___fpclassifyf($178);
      var $180=(($179)|(0))==1;
      if ($180) { label = 66; break; } else { label = 70; break; }
    case 66: 
      var $182=$x;
      var $183=$182 == 0;
      if ($183) { label = 67; break; } else { label = 68; break; }
    case 67: 
      var $185=___errno_location();
      HEAP32[(($185)>>2)]=33;
      label = 69; break;
    case 68: 
      var $187=___errno_location();
      HEAP32[(($187)>>2)]=34;
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
      var $193=___errno_location();
      var $194=HEAP32[(($193)>>2)];
      var $195=(($194)|(0))!=0;
      if ($195) { label = 74; break; } else { label = 76; break; }
    case 74: 
      var $197=$r;
      var $198=_is_error($197);
      var $199=(($198)|(0))!=0;
      if ($199) { label = 75; break; } else { label = 76; break; }
    case 75: 
      $1=0;
      label = 77; break;
    case 76: 
      var $202=$r;
      var $203=_PyFloat_FromDouble($202);
      $1=$203;
      label = 77; break;
    case 77: 
      var $205=$1;
      STACKTOP = __stackBase__;
      return $205;
    default: assert(0, "bad label: " + label);
  }
}
function _math_radians($self, $arg) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x;
      $2=$self;
      $3=$arg;
      var $4=$3;
      var $5=_PyFloat_AsDouble($4);
      $x=$5;
      var $6=$x;
      var $7=$6 == -1;
      if ($7) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $9=_PyErr_Occurred();
      var $10=(($9)|(0))!=0;
      if ($10) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 5; break;
    case 4: 
      var $13=$x;
      var $14=($13)*(0.017453292519943295);
      var $15=_PyFloat_FromDouble($14);
      $1=$15;
      label = 5; break;
    case 5: 
      var $17=$1;
      return $17;
    default: assert(0, "bad label: " + label);
  }
}
function _math_sin($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 20), 0);
  return $4;
}
function _math_sinh($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 68), 1);
  return $4;
}
function _math_sqrt($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 130), 0);
  return $4;
}
function _math_tan($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 108), 0);
  return $4;
}
function _math_tanh($self, $args) {
  var label = 0;
  var $1;
  var $2;
  $1=$self;
  $2=$args;
  var $3=$2;
  var $4=_math_1($3, (FUNCTION_TABLE_OFFSET + 86), 0);
  return $4;
}
function _math_trunc($self, $number) {
  var label = 0;
  var __stackBase__  = STACKTOP; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  var $1;
  var $2;
  $1=$self;
  $2=$number;
  var $3=$2;
  var $4=_PyObject_CallMethod($3, ((__str43)|0), 0, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = ((((STACKTOP)+3)>>2)<<2),assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=0,tempInt));
  STACKTOP = __stackBase__;
  return $4;
}
function _math_1($arg, $func, $can_overflow) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $x;
      var $r;
      var $__cy;
      $2=$arg;
      $3=$func;
      $4=$can_overflow;
      var $5=$2;
      var $6=_PyFloat_AsDouble($5);
      $x=$6;
      var $7=$x;
      var $8=$7 == -1;
      if ($8) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $10=_PyErr_Occurred();
      var $11=(($10)|(0))!=0;
      if ($11) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 21; break;
    case 4: 
      var $14=___errno_location();
      HEAP32[(($14)>>2)]=0;
      var $15=$3;
      var $16=$x;
      var $17=FUNCTION_TABLE[$15]($16);
      $r=$17;
      var $18=$r;
      var $19=___fpclassifyf($18);
      var $20=(($19)|(0))==0;
      if ($20) { label = 5; break; } else { label = 9; break; }
    case 5: 
      var $22=$x;
      var $23=___fpclassifyf($22);
      var $24=(($23)|(0))==0;
      if ($24) { label = 7; break; } else { label = 6; break; }
    case 6: 
      var $26=___errno_location();
      HEAP32[(($26)>>2)]=33;
      label = 8; break;
    case 7: 
      var $28=___errno_location();
      HEAP32[(($28)>>2)]=0;
      label = 8; break;
    case 8: 
      label = 17; break;
    case 9: 
      var $31=$r;
      var $32=___fpclassifyf($31);
      var $33=(($32)|(0))==1;
      if ($33) { label = 10; break; } else { label = 16; break; }
    case 10: 
      var $35=$x;
      var $36=___fpclassifyf($35);
      $__cy=$36;
      var $37=$__cy;
      var $38=(($37)|(0))!=1;
      if ($38) { label = 11; break; } else { var $43 = 0;label = 12; break; }
    case 11: 
      var $40=$__cy;
      var $41=(($40)|(0))!=0;
      var $43 = $41;label = 12; break;
    case 12: 
      var $43;
      if ($43) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $45=$4;
      var $46=(($45)|(0))!=0;
      var $47=$46 ? 34 : 33;
      var $48=___errno_location();
      HEAP32[(($48)>>2)]=$47;
      label = 15; break;
    case 14: 
      var $50=___errno_location();
      HEAP32[(($50)>>2)]=0;
      label = 15; break;
    case 15: 
      label = 16; break;
    case 16: 
      label = 17; break;
    case 17: 
      var $54=___errno_location();
      var $55=HEAP32[(($54)>>2)];
      var $56=(($55)|(0))!=0;
      if ($56) { label = 18; break; } else { label = 20; break; }
    case 18: 
      var $58=$r;
      var $59=_is_error($58);
      var $60=(($59)|(0))!=0;
      if ($60) { label = 19; break; } else { label = 20; break; }
    case 19: 
      $1=0;
      label = 21; break;
    case 20: 
      var $63=$r;
      var $64=_PyFloat_FromDouble($63);
      $1=$64;
      label = 21; break;
    case 21: 
      var $66=$1;
      return $66;
    default: assert(0, "bad label: " + label);
  }
}
function _is_error($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $result;
      $1=$x;
      $result=1;
      var $2=___errno_location();
      var $3=HEAP32[(($2)>>2)];
      var $4=(($3)|(0))!=0;
      if ($4) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 4; break;
    case 3: 
      ___assert_func(((__str44)|0), 620, ((___func___is_error)|0), ((__str45)|0));
      throw "Reached an unreachable!";
      label = 4; break;
    case 4: 
      var $9=___errno_location();
      var $10=HEAP32[(($9)>>2)];
      var $11=(($10)|(0))==33;
      if ($11) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $13=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($13, ((__str46)|0));
      label = 13; break;
    case 6: 
      var $15=___errno_location();
      var $16=HEAP32[(($15)>>2)];
      var $17=(($16)|(0))==34;
      if ($17) { label = 7; break; } else { label = 11; break; }
    case 7: 
      var $19=$1;
      var $20=Math.abs($19);
      var $21=$20 < 1;
      if ($21) { label = 8; break; } else { label = 9; break; }
    case 8: 
      $result=0;
      label = 10; break;
    case 9: 
      var $24=HEAP32[((_PyExc_OverflowError)>>2)];
      _PyErr_SetString($24, ((__str47)|0));
      label = 10; break;
    case 10: 
      label = 12; break;
    case 11: 
      var $27=HEAP32[((_PyExc_ValueError)>>2)];
      var $28=_PyErr_SetFromErrno($27);
      label = 12; break;
    case 12: 
      label = 13; break;
    case 13: 
      var $31=$result;
      return $31;
    default: assert(0, "bad label: " + label);
  }
}
function _loghelper($arg, $func, $funcname) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 4)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $x;
      var $e=__stackBase__;
      $2=$arg;
      $3=$func;
      $4=$funcname;
      var $5=$2;
      var $6=(($5+4)|0);
      var $7=HEAP32[(($6)>>2)];
      var $8=(($7+84)|0);
      var $9=HEAP32[(($8)>>2)];
      var $10=$9 & 16777216;
      var $11=(($10)|(0))!=0;
      if ($11) { label = 2; break; } else { label = 11; break; }
    case 2: 
      var $13=$2;
      var $14=$13;
      var $15=__PyLong_Frexp($14, $e);
      $x=$15;
      var $16=$x;
      var $17=$16 == -1;
      if ($17) { label = 3; break; } else { label = 5; break; }
    case 3: 
      var $19=_PyErr_Occurred();
      var $20=(($19)|(0))!=0;
      if ($20) { label = 4; break; } else { label = 5; break; }
    case 4: 
      $1=0;
      label = 12; break;
    case 5: 
      var $23=$x;
      var $24=$23 <= 0;
      if ($24) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $26=HEAP32[((_PyExc_ValueError)>>2)];
      _PyErr_SetString($26, ((__str46)|0));
      $1=0;
      label = 12; break;
    case 7: 
      var $28=HEAP32[(($e)>>2)];
      var $29=(($28)|(0))==1;
      if ($29) { label = 8; break; } else { label = 10; break; }
    case 8: 
      var $31=$x;
      var $32=$31 == 0.5;
      if ($32) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $34=_PyFloat_FromDouble(0);
      $1=$34;
      label = 12; break;
    case 10: 
      var $36=$3;
      var $37=$x;
      var $38=FUNCTION_TABLE[$36]($37);
      var $39=$3;
      var $40=FUNCTION_TABLE[$39](2);
      var $41=HEAP32[(($e)>>2)];
      var $42=(($41)|(0));
      var $43=($40)*($42);
      var $44=($38)+($43);
      $x=$44;
      var $45=$x;
      var $46=_PyFloat_FromDouble($45);
      $1=$46;
      label = 12; break;
    case 11: 
      var $48=$2;
      var $49=$3;
      var $50=_math_1($48, $49, 0);
      $1=$50;
      label = 12; break;
    case 12: 
      var $52=$1;
      STACKTOP = __stackBase__;
      return $52;
    default: assert(0, "bad label: " + label);
  }
}
function _m_log10($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $__cy;
      $2=$x;
      var $3=$2;
      var $4=___fpclassifyf($3);
      $__cy=$4;
      var $5=$__cy;
      var $6=(($5)|(0))!=1;
      if ($6) { label = 2; break; } else { var $11 = 0;label = 3; break; }
    case 2: 
      var $8=$__cy;
      var $9=(($8)|(0))!=0;
      var $11 = $9;label = 3; break;
    case 3: 
      var $11;
      if ($11) { label = 4; break; } else { label = 9; break; }
    case 4: 
      var $13=$2;
      var $14=$13 > 0;
      if ($14) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $16=$2;
      var $17=_log10($16);
      $1=$17;
      label = 14; break;
    case 6: 
      var $19=___errno_location();
      HEAP32[(($19)>>2)]=33;
      var $20=$2;
      var $21=$20 == 0;
      if ($21) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=-Infinity;
      label = 14; break;
    case 8: 
      $1=NaN;
      label = 14; break;
    case 9: 
      var $25=$2;
      var $26=___fpclassifyf($25);
      var $27=(($26)|(0))==0;
      if ($27) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $29=$2;
      $1=$29;
      label = 14; break;
    case 11: 
      var $31=$2;
      var $32=$31 > 0;
      if ($32) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $34=$2;
      $1=$34;
      label = 14; break;
    case 13: 
      var $36=___errno_location();
      HEAP32[(($36)>>2)]=33;
      $1=NaN;
      label = 14; break;
    case 14: 
      var $38=$1;
      return $38;
    default: assert(0, "bad label: " + label);
  }
}
function _m_log($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $__cy;
      $2=$x;
      var $3=$2;
      var $4=___fpclassifyf($3);
      $__cy=$4;
      var $5=$__cy;
      var $6=(($5)|(0))!=1;
      if ($6) { label = 2; break; } else { var $11 = 0;label = 3; break; }
    case 2: 
      var $8=$__cy;
      var $9=(($8)|(0))!=0;
      var $11 = $9;label = 3; break;
    case 3: 
      var $11;
      if ($11) { label = 4; break; } else { label = 9; break; }
    case 4: 
      var $13=$2;
      var $14=$13 > 0;
      if ($14) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $16=$2;
      var $17=Math.log($16);
      $1=$17;
      label = 14; break;
    case 6: 
      var $19=___errno_location();
      HEAP32[(($19)>>2)]=33;
      var $20=$2;
      var $21=$20 == 0;
      if ($21) { label = 7; break; } else { label = 8; break; }
    case 7: 
      $1=-Infinity;
      label = 14; break;
    case 8: 
      $1=NaN;
      label = 14; break;
    case 9: 
      var $25=$2;
      var $26=___fpclassifyf($25);
      var $27=(($26)|(0))==0;
      if ($27) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $29=$2;
      $1=$29;
      label = 14; break;
    case 11: 
      var $31=$2;
      var $32=$31 > 0;
      if ($32) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $34=$2;
      $1=$34;
      label = 14; break;
    case 13: 
      var $36=___errno_location();
      HEAP32[(($36)>>2)]=33;
      $1=NaN;
      label = 14; break;
    case 14: 
      var $38=$1;
      return $38;
    default: assert(0, "bad label: " + label);
  }
}
function _math_1a($arg, $func) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $x;
      var $r;
      $2=$arg;
      $3=$func;
      var $4=$2;
      var $5=_PyFloat_AsDouble($4);
      $x=$5;
      var $6=$x;
      var $7=$6 == -1;
      if ($7) { label = 2; break; } else { label = 4; break; }
    case 2: 
      var $9=_PyErr_Occurred();
      var $10=(($9)|(0))!=0;
      if ($10) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=0;
      label = 8; break;
    case 4: 
      var $13=___errno_location();
      HEAP32[(($13)>>2)]=0;
      var $14=$3;
      var $15=$x;
      var $16=FUNCTION_TABLE[$14]($15);
      $r=$16;
      var $17=___errno_location();
      var $18=HEAP32[(($17)>>2)];
      var $19=(($18)|(0))!=0;
      if ($19) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $21=$r;
      var $22=_is_error($21);
      var $23=(($22)|(0))!=0;
      if ($23) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 8; break;
    case 7: 
      var $26=$r;
      var $27=_PyFloat_FromDouble($26);
      $1=$27;
      label = 8; break;
    case 8: 
      var $29=$1;
      return $29;
    default: assert(0, "bad label: " + label);
  }
}
function _m_lgamma($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $r;
      var $absx;
      var $__cy;
      $2=$x;
      var $3=$2;
      var $4=___fpclassifyf($3);
      $__cy=$4;
      var $5=$__cy;
      var $6=(($5)|(0))!=1;
      if ($6) { label = 2; break; } else { var $11 = 0;label = 3; break; }
    case 2: 
      var $8=$__cy;
      var $9=(($8)|(0))!=0;
      var $11 = $9;label = 3; break;
    case 3: 
      var $11;
      if ($11) { label = 7; break; } else { label = 4; break; }
    case 4: 
      var $13=$2;
      var $14=___fpclassifyf($13);
      var $15=(($14)|(0))==0;
      if ($15) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $17=$2;
      $1=$17;
      label = 20; break;
    case 6: 
      $1=Infinity;
      label = 20; break;
    case 7: 
      var $20=$2;
      var $21=$2;
      var $22=Math.floor($21);
      var $23=$20 == $22;
      if ($23) { label = 8; break; } else { label = 12; break; }
    case 8: 
      var $25=$2;
      var $26=$25 <= 2;
      if ($26) { label = 9; break; } else { label = 12; break; }
    case 9: 
      var $28=$2;
      var $29=$28 <= 0;
      if ($29) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $31=___errno_location();
      HEAP32[(($31)>>2)]=33;
      $1=Infinity;
      label = 20; break;
    case 11: 
      $1=0;
      label = 20; break;
    case 12: 
      var $34=$2;
      var $35=Math.abs($34);
      $absx=$35;
      var $36=$absx;
      var $37=$36 < 1e-20;
      if ($37) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $39=$absx;
      var $40=Math.log($39);
      var $41=(-$40);
      $1=$41;
      label = 20; break;
    case 14: 
      var $43=$2;
      var $44=$43 > 0;
      if ($44) { label = 15; break; } else { label = 16; break; }
    case 15: 
      var $46=$2;
      var $47=_lanczos_sum($46);
      var $48=Math.log($47);
      var $49=($48)-(6.02468004077673);
      var $50=$2;
      var $51=($50)-(0.5);
      var $52=$2;
      var $53=($52)+(6.02468004077673);
      var $54=($53)-(0.5);
      var $55=Math.log($54);
      var $56=($55)-(1);
      var $57=($51)*($56);
      var $58=($49)+($57);
      $r=$58;
      label = 17; break;
    case 16: 
      var $60=Math.log(3.141592653589793);
      var $61=$absx;
      var $62=_sinpi($61);
      var $63=Math.abs($62);
      var $64=Math.log($63);
      var $65=($60)-($64);
      var $66=$absx;
      var $67=Math.log($66);
      var $68=($65)-($67);
      var $69=$absx;
      var $70=_lanczos_sum($69);
      var $71=Math.log($70);
      var $72=($71)-(6.02468004077673);
      var $73=$absx;
      var $74=($73)-(0.5);
      var $75=$absx;
      var $76=($75)+(6.02468004077673);
      var $77=($76)-(0.5);
      var $78=Math.log($77);
      var $79=($78)-(1);
      var $80=($74)*($79);
      var $81=($72)+($80);
      var $82=($68)-($81);
      $r=$82;
      label = 17; break;
    case 17: 
      var $84=$r;
      var $85=___fpclassifyf($84);
      var $86=(($85)|(0))==1;
      if ($86) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $88=___errno_location();
      HEAP32[(($88)>>2)]=34;
      label = 19; break;
    case 19: 
      var $90=$r;
      $1=$90;
      label = 20; break;
    case 20: 
      var $92=$1;
      return $92;
    default: assert(0, "bad label: " + label);
  }
}
function _m_tgamma($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $absx;
      var $r;
      var $y;
      var $z;
      var $sqrtpow;
      var $__cy;
      var $q;
      var $q1;
      $2=$x;
      var $3=$2;
      var $4=___fpclassifyf($3);
      $__cy=$4;
      var $5=$__cy;
      var $6=(($5)|(0))!=1;
      if ($6) { label = 2; break; } else { var $11 = 0;label = 3; break; }
    case 2: 
      var $8=$__cy;
      var $9=(($8)|(0))!=0;
      var $11 = $9;label = 3; break;
    case 3: 
      var $11;
      if ($11) { label = 8; break; } else { label = 4; break; }
    case 4: 
      var $13=$2;
      var $14=___fpclassifyf($13);
      var $15=(($14)|(0))==0;
      if ($15) { label = 6; break; } else { label = 5; break; }
    case 5: 
      var $17=$2;
      var $18=$17 > 0;
      if ($18) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $20=$2;
      $1=$20;
      label = 39; break;
    case 7: 
      var $22=___errno_location();
      HEAP32[(($22)>>2)]=33;
      $1=NaN;
      label = 39; break;
    case 8: 
      var $24=$2;
      var $25=$24 == 0;
      if ($25) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $27=___errno_location();
      HEAP32[(($27)>>2)]=33;
      var $28=$2;
      var $29=(1)/($28);
      $1=$29;
      label = 39; break;
    case 10: 
      var $31=$2;
      var $32=$2;
      var $33=Math.floor($32);
      var $34=$31 == $33;
      if ($34) { label = 11; break; } else { label = 16; break; }
    case 11: 
      var $36=$2;
      var $37=$36 < 0;
      if ($37) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $39=___errno_location();
      HEAP32[(($39)>>2)]=33;
      $1=NaN;
      label = 39; break;
    case 13: 
      var $41=$2;
      var $42=$41 <= 23;
      if ($42) { label = 14; break; } else { label = 15; break; }
    case 14: 
      var $44=$2;
      var $45=(($44)&-1);
      var $46=((($45)-(1))|0);
      var $47=((_gamma_integral+($46<<3))|0);
      var $48=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($47)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($47)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      $1=$48;
      label = 39; break;
    case 15: 
      label = 16; break;
    case 16: 
      var $51=$2;
      var $52=Math.abs($51);
      $absx=$52;
      var $53=$absx;
      var $54=$53 < 1e-20;
      if ($54) { label = 17; break; } else { label = 20; break; }
    case 17: 
      var $56=$2;
      var $57=(1)/($56);
      $r=$57;
      var $58=$r;
      var $59=___fpclassifyf($58);
      var $60=(($59)|(0))==1;
      if ($60) { label = 18; break; } else { label = 19; break; }
    case 18: 
      var $62=___errno_location();
      HEAP32[(($62)>>2)]=34;
      label = 19; break;
    case 19: 
      var $64=$r;
      $1=$64;
      label = 39; break;
    case 20: 
      var $66=$absx;
      var $67=$66 > 200;
      if ($67) { label = 21; break; } else { label = 24; break; }
    case 21: 
      var $69=$2;
      var $70=$69 < 0;
      if ($70) { label = 22; break; } else { label = 23; break; }
    case 22: 
      var $72=$2;
      var $73=_sinpi($72);
      var $74=0;
      $1=$74;
      label = 39; break;
    case 23: 
      var $76=___errno_location();
      HEAP32[(($76)>>2)]=34;
      $1=Infinity;
      label = 39; break;
    case 24: 
      var $78=$absx;
      var $79=($78)+(5.52468004077673);
      $y=$79;
      var $80=$absx;
      var $81=$80 > 5.52468004077673;
      if ($81) { label = 25; break; } else { label = 26; break; }
    case 25: 
      var $83=$y;
      var $84=$absx;
      var $85=($83)-($84);
      $q=$85;
      var $86=$q;
      var $87=($86)-(5.52468004077673);
      $z=$87;
      label = 27; break;
    case 26: 
      var $89=$y;
      var $90=($89)-(5.52468004077673);
      $q1=$90;
      var $91=$q1;
      var $92=$absx;
      var $93=($91)-($92);
      $z=$93;
      label = 27; break;
    case 27: 
      var $95=$z;
      var $96=($95)*(6.02468004077673);
      var $97=$y;
      var $98=($96)/($97);
      $z=$98;
      var $99=$2;
      var $100=$99 < 0;
      if ($100) { label = 28; break; } else { label = 32; break; }
    case 28: 
      var $102=$absx;
      var $103=_sinpi($102);
      var $104=(-3.141592653589793)/($103);
      var $105=$absx;
      var $106=($104)/($105);
      var $107=$y;
      var $108=Math.exp($107);
      var $109=($106)*($108);
      var $110=$absx;
      var $111=_lanczos_sum($110);
      var $112=($109)/($111);
      $r=$112;
      var $113=$z;
      var $114=$r;
      var $115=($113)*($114);
      var $116=$r;
      var $117=($116)-($115);
      $r=$117;
      var $118=$absx;
      var $119=$118 < 140;
      if ($119) { label = 29; break; } else { label = 30; break; }
    case 29: 
      var $121=$y;
      var $122=$absx;
      var $123=($122)-(0.5);
      var $124=Math.pow($121, $123);
      var $125=$r;
      var $126=($125)/($124);
      $r=$126;
      label = 31; break;
    case 30: 
      var $128=$y;
      var $129=$absx;
      var $130=($129)/(2);
      var $131=($130)-(0.25);
      var $132=Math.pow($128, $131);
      $sqrtpow=$132;
      var $133=$sqrtpow;
      var $134=$r;
      var $135=($134)/($133);
      $r=$135;
      var $136=$sqrtpow;
      var $137=$r;
      var $138=($137)/($136);
      $r=$138;
      label = 31; break;
    case 31: 
      label = 36; break;
    case 32: 
      var $141=$absx;
      var $142=_lanczos_sum($141);
      var $143=$y;
      var $144=Math.exp($143);
      var $145=($142)/($144);
      $r=$145;
      var $146=$z;
      var $147=$r;
      var $148=($146)*($147);
      var $149=$r;
      var $150=($149)+($148);
      $r=$150;
      var $151=$absx;
      var $152=$151 < 140;
      if ($152) { label = 33; break; } else { label = 34; break; }
    case 33: 
      var $154=$y;
      var $155=$absx;
      var $156=($155)-(0.5);
      var $157=Math.pow($154, $156);
      var $158=$r;
      var $159=($158)*($157);
      $r=$159;
      label = 35; break;
    case 34: 
      var $161=$y;
      var $162=$absx;
      var $163=($162)/(2);
      var $164=($163)-(0.25);
      var $165=Math.pow($161, $164);
      $sqrtpow=$165;
      var $166=$sqrtpow;
      var $167=$r;
      var $168=($167)*($166);
      $r=$168;
      var $169=$sqrtpow;
      var $170=$r;
      var $171=($170)*($169);
      $r=$171;
      label = 35; break;
    case 35: 
      label = 36; break;
    case 36: 
      var $174=$r;
      var $175=___fpclassifyf($174);
      var $176=(($175)|(0))==1;
      if ($176) { label = 37; break; } else { label = 38; break; }
    case 37: 
      var $178=___errno_location();
      HEAP32[(($178)>>2)]=34;
      label = 38; break;
    case 38: 
      var $180=$r;
      $1=$180;
      label = 39; break;
    case 39: 
      var $182=$1;
      return $182;
    default: assert(0, "bad label: " + label);
  }
}
function _lanczos_sum($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $num;
      var $den;
      var $i;
      $1=$x;
      $num=0;
      $den=0;
      var $2=$1;
      var $3=$2 > 0;
      if ($3) { label = 2; break; } else { label = 3; break; }
    case 2: 
      label = 4; break;
    case 3: 
      ___assert_func(((__str44)|0), 206, ((___func___lanczos_sum)|0), ((__str52)|0));
      throw "Reached an unreachable!";
      label = 4; break;
    case 4: 
      var $8=$1;
      var $9=$8 < 5;
      if ($9) { label = 5; break; } else { label = 9; break; }
    case 5: 
      $i=13;
      label = 6; break;
    case 6: 
      var $12=$i;
      var $13=((($12)-(1))|0);
      $i=$13;
      var $14=(($13)|(0)) >= 0;
      if ($14) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $16=$num;
      var $17=$1;
      var $18=($16)*($17);
      var $19=$i;
      var $20=((_lanczos_num_coeffs+($19<<3))|0);
      var $21=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($20)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($20)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $22=($18)+($21);
      $num=$22;
      var $23=$den;
      var $24=$1;
      var $25=($23)*($24);
      var $26=$i;
      var $27=((_lanczos_den_coeffs+($26<<3))|0);
      var $28=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($27)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($27)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $29=($25)+($28);
      $den=$29;
      label = 6; break;
    case 8: 
      label = 14; break;
    case 9: 
      $i=0;
      label = 10; break;
    case 10: 
      var $33=$i;
      var $34=(($33)|(0)) < 13;
      if ($34) { label = 11; break; } else { label = 13; break; }
    case 11: 
      var $36=$num;
      var $37=$1;
      var $38=($36)/($37);
      var $39=$i;
      var $40=((_lanczos_num_coeffs+($39<<3))|0);
      var $41=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($40)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($40)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $42=($38)+($41);
      $num=$42;
      var $43=$den;
      var $44=$1;
      var $45=($43)/($44);
      var $46=$i;
      var $47=((_lanczos_den_coeffs+($46<<3))|0);
      var $48=(HEAP32[((tempDoublePtr)>>2)]=HEAP32[(($47)>>2)],HEAP32[(((tempDoublePtr)+(4))>>2)]=HEAP32[((($47)+(4))>>2)],HEAPF64[(tempDoublePtr)>>3]);
      var $49=($45)+($48);
      $den=$49;
      label = 12; break;
    case 12: 
      var $51=$i;
      var $52=((($51)+(1))|0);
      $i=$52;
      label = 10; break;
    case 13: 
      label = 14; break;
    case 14: 
      var $55=$num;
      var $56=$den;
      var $57=($55)/($56);
      return $57;
    default: assert(0, "bad label: " + label);
  }
}
function _sinpi($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $y;
      var $r;
      var $n;
      var $__cy;
      $1=$x;
      var $2=$1;
      var $3=___fpclassifyf($2);
      $__cy=$3;
      var $4=$__cy;
      var $5=(($4)|(0))!=1;
      if ($5) { label = 2; break; } else { var $10 = 0;label = 3; break; }
    case 2: 
      var $7=$__cy;
      var $8=(($7)|(0))!=0;
      var $10 = $8;label = 3; break;
    case 3: 
      var $10;
      if ($10) { label = 4; break; } else { label = 5; break; }
    case 4: 
      label = 6; break;
    case 5: 
      ___assert_func(((__str44)|0), 79, ((___func___sinpi)|0), ((__str49)|0));
      throw "Reached an unreachable!";
      label = 6; break;
    case 6: 
      var $15=$1;
      var $16=Math.abs($15);
      var $17=_fmod($16, 2);
      $y=$17;
      var $18=$y;
      var $19=($18)*(2);
      var $20=_round($19);
      var $21=(($20)&-1);
      $n=$21;
      var $22=$n;
      var $23=0 <= (($22)|(0));
      if ($23) { label = 7; break; } else { label = 9; break; }
    case 7: 
      var $25=$n;
      var $26=(($25)|(0)) <= 4;
      if ($26) { label = 8; break; } else { label = 9; break; }
    case 8: 
      label = 10; break;
    case 9: 
      ___assert_func(((__str44)|0), 82, ((___func___sinpi)|0), ((__str50)|0));
      throw "Reached an unreachable!";
      label = 10; break;
    case 10: 
      var $31=$n;
      if ((($31)|(0))==0) {
        label = 11; break;
      }
      else if ((($31)|(0))==1) {
        label = 12; break;
      }
      else if ((($31)|(0))==2) {
        label = 13; break;
      }
      else if ((($31)|(0))==3) {
        label = 14; break;
      }
      else if ((($31)|(0))==4) {
        label = 15; break;
      }
      else {
      label = 16; break;
      }
    case 11: 
      var $33=$y;
      var $34=($33)*(3.141592653589793);
      var $35=Math.sin($34);
      $r=$35;
      label = 17; break;
    case 12: 
      var $37=$y;
      var $38=($37)-(0.5);
      var $39=($38)*(3.141592653589793);
      var $40=Math.cos($39);
      $r=$40;
      label = 17; break;
    case 13: 
      var $42=$y;
      var $43=(1)-($42);
      var $44=($43)*(3.141592653589793);
      var $45=Math.sin($44);
      $r=$45;
      label = 17; break;
    case 14: 
      var $47=$y;
      var $48=($47)-(1.5);
      var $49=($48)*(3.141592653589793);
      var $50=Math.cos($49);
      var $51=(-$50);
      $r=$51;
      label = 17; break;
    case 15: 
      var $53=$y;
      var $54=($53)-(2);
      var $55=($54)*(3.141592653589793);
      var $56=Math.sin($55);
      $r=$56;
      label = 17; break;
    case 16: 
      ___assert_func(((__str44)|0), 102, ((___func___sinpi)|0), ((__str51)|0));
      throw "Reached an unreachable!";
    case 17: 
      var $59=$1;
      var $60=_copysign(1, $59);
      var $61=$r;
      var $62=($60)*($61);
      return $62;
    default: assert(0, "bad label: " + label);
  }
}
function __fsum_realloc($p_ptr, $n, $ps, $m_ptr) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $5;
      var $v;
      var $m;
      var $p;
      $2=$p_ptr;
      $3=$n;
      $4=$ps;
      $5=$m_ptr;
      $v=0;
      var $6=$5;
      var $7=HEAP32[(($6)>>2)];
      $m=$7;
      var $8=$m;
      var $9=$m;
      var $10=((($9)+($8))|0);
      $m=$10;
      var $11=$3;
      var $12=$m;
      var $13=(($11)|(0)) < (($12)|(0));
      if ($13) { label = 2; break; } else { label = 9; break; }
    case 2: 
      var $15=$m;
      var $16=(($15)>>>(0)) < 268435455;
      if ($16) { label = 3; break; } else { label = 9; break; }
    case 3: 
      var $18=$2;
      var $19=HEAP32[(($18)>>2)];
      $p=$19;
      var $20=$p;
      var $21=$4;
      var $22=(($20)|(0))==(($21)|(0));
      if ($22) { label = 4; break; } else { label = 7; break; }
    case 4: 
      var $24=$m;
      var $25=($24<<3);
      var $26=_PyMem_Malloc($25);
      $v=$26;
      var $27=$v;
      var $28=(($27)|(0))!=0;
      if ($28) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $30=$v;
      var $31=$4;
      var $32=$31;
      var $33=$3;
      var $34=($33<<3);
      assert($34 % 1 === 0);_memcpy($30, $32, $34);
      label = 6; break;
    case 6: 
      label = 8; break;
    case 7: 
      var $37=$p;
      var $38=$37;
      var $39=$m;
      var $40=($39<<3);
      var $41=_PyMem_Realloc($38, $40);
      $v=$41;
      label = 8; break;
    case 8: 
      label = 9; break;
    case 9: 
      var $44=$v;
      var $45=(($44)|(0))==0;
      if ($45) { label = 10; break; } else { label = 11; break; }
    case 10: 
      var $47=HEAP32[((_PyExc_MemoryError)>>2)];
      _PyErr_SetString($47, ((__str60)|0));
      $1=1;
      label = 12; break;
    case 11: 
      var $49=$v;
      var $50=$49;
      var $51=$2;
      HEAP32[(($51)>>2)]=$50;
      var $52=$m;
      var $53=$5;
      HEAP32[(($53)>>2)]=$52;
      $1=0;
      label = 12; break;
    case 12: 
      var $55=$1;
      return $55;
    default: assert(0, "bad label: " + label);
  }
}
function _m_erfc($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $absx;
      var $cf;
      $2=$x;
      var $3=$2;
      var $4=___fpclassifyf($3);
      var $5=(($4)|(0))==0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $7=$2;
      $1=$7;
      label = 9; break;
    case 3: 
      var $9=$2;
      var $10=Math.abs($9);
      $absx=$10;
      var $11=$absx;
      var $12=$11 < 1.5;
      if ($12) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $14=$2;
      var $15=_m_erf_series($14);
      var $16=(1)-($15);
      $1=$16;
      label = 9; break;
    case 5: 
      var $18=$absx;
      var $19=_m_erfc_contfrac($18);
      $cf=$19;
      var $20=$2;
      var $21=$20 > 0;
      if ($21) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $23=$cf;
      var $28 = $23;label = 8; break;
    case 7: 
      var $25=$cf;
      var $26=(2)-($25);
      var $28 = $26;label = 8; break;
    case 8: 
      var $28;
      $1=$28;
      label = 9; break;
    case 9: 
      var $30=$1;
      return $30;
    default: assert(0, "bad label: " + label);
  }
}
function _m_erf_series($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $x2;
      var $acc;
      var $fk;
      var $result;
      var $i;
      var $saved_errno;
      $1=$x;
      var $2=$1;
      var $3=$1;
      var $4=($2)*($3);
      $x2=$4;
      $acc=0;
      $fk=25.5;
      $i=0;
      label = 2; break;
    case 2: 
      var $6=$i;
      var $7=(($6)|(0)) < 25;
      if ($7) { label = 3; break; } else { label = 5; break; }
    case 3: 
      var $9=$x2;
      var $10=$acc;
      var $11=($9)*($10);
      var $12=$fk;
      var $13=($11)/($12);
      var $14=($13)+(2);
      $acc=$14;
      var $15=$fk;
      var $16=($15)-(1);
      $fk=$16;
      label = 4; break;
    case 4: 
      var $18=$i;
      var $19=((($18)+(1))|0);
      $i=$19;
      label = 2; break;
    case 5: 
      var $21=___errno_location();
      var $22=HEAP32[(($21)>>2)];
      $saved_errno=$22;
      var $23=$acc;
      var $24=$1;
      var $25=($23)*($24);
      var $26=$x2;
      var $27=(-$26);
      var $28=Math.exp($27);
      var $29=($25)*($28);
      var $30=($29)/(1.772453850905516);
      $result=$30;
      var $31=$saved_errno;
      var $32=___errno_location();
      HEAP32[(($32)>>2)]=$31;
      var $33=$result;
      return $33;
    default: assert(0, "bad label: " + label);
  }
}
function _m_erfc_contfrac($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $x2;
      var $a;
      var $da;
      var $p;
      var $p_last;
      var $q;
      var $q_last;
      var $b;
      var $result;
      var $i;
      var $saved_errno;
      var $temp;
      $2=$x;
      var $3=$2;
      var $4=$3 >= 30;
      if ($4) { label = 2; break; } else { label = 3; break; }
    case 2: 
      $1=0;
      label = 8; break;
    case 3: 
      var $7=$2;
      var $8=$2;
      var $9=($7)*($8);
      $x2=$9;
      $a=0;
      $da=0.5;
      $p=1;
      $p_last=0;
      var $10=$da;
      var $11=$x2;
      var $12=($10)+($11);
      $q=$12;
      $q_last=1;
      $i=0;
      label = 4; break;
    case 4: 
      var $14=$i;
      var $15=(($14)|(0)) < 50;
      if ($15) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $17=$da;
      var $18=$a;
      var $19=($18)+($17);
      $a=$19;
      var $20=$da;
      var $21=($20)+(2);
      $da=$21;
      var $22=$da;
      var $23=$x2;
      var $24=($22)+($23);
      $b=$24;
      var $25=$p;
      $temp=$25;
      var $26=$b;
      var $27=$p;
      var $28=($26)*($27);
      var $29=$a;
      var $30=$p_last;
      var $31=($29)*($30);
      var $32=($28)-($31);
      $p=$32;
      var $33=$temp;
      $p_last=$33;
      var $34=$q;
      $temp=$34;
      var $35=$b;
      var $36=$q;
      var $37=($35)*($36);
      var $38=$a;
      var $39=$q_last;
      var $40=($38)*($39);
      var $41=($37)-($40);
      $q=$41;
      var $42=$temp;
      $q_last=$42;
      label = 6; break;
    case 6: 
      var $44=$i;
      var $45=((($44)+(1))|0);
      $i=$45;
      label = 4; break;
    case 7: 
      var $47=___errno_location();
      var $48=HEAP32[(($47)>>2)];
      $saved_errno=$48;
      var $49=$p;
      var $50=$q;
      var $51=($49)/($50);
      var $52=$2;
      var $53=($51)*($52);
      var $54=$x2;
      var $55=(-$54);
      var $56=Math.exp($55);
      var $57=($53)*($56);
      var $58=($57)/(1.772453850905516);
      $result=$58;
      var $59=$saved_errno;
      var $60=___errno_location();
      HEAP32[(($60)>>2)]=$59;
      var $61=$result;
      $1=$61;
      label = 8; break;
    case 8: 
      var $63=$1;
      return $63;
    default: assert(0, "bad label: " + label);
  }
}
function _m_erf($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $absx;
      var $cf;
      $2=$x;
      var $3=$2;
      var $4=___fpclassifyf($3);
      var $5=(($4)|(0))==0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $7=$2;
      $1=$7;
      label = 9; break;
    case 3: 
      var $9=$2;
      var $10=Math.abs($9);
      $absx=$10;
      var $11=$absx;
      var $12=$11 < 1.5;
      if ($12) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $14=$2;
      var $15=_m_erf_series($14);
      $1=$15;
      label = 9; break;
    case 5: 
      var $17=$absx;
      var $18=_m_erfc_contfrac($17);
      $cf=$18;
      var $19=$2;
      var $20=$19 > 0;
      if ($20) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $22=$cf;
      var $23=(1)-($22);
      var $28 = $23;label = 8; break;
    case 7: 
      var $25=$cf;
      var $26=($25)-(1);
      var $28 = $26;label = 8; break;
    case 8: 
      var $28;
      $1=$28;
      label = 9; break;
    case 9: 
      var $30=$1;
      return $30;
    default: assert(0, "bad label: " + label);
  }
}
function _math_2($args, $func, $funcname) {
  var label = 0;
  var __stackBase__  = STACKTOP; STACKTOP = (STACKTOP + 8)|0; assert(!(STACKTOP&3)); assert((STACKTOP|0) < (STACK_MAX|0));
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      var $4;
      var $ox=__stackBase__;
      var $oy=(__stackBase__)+(4);
      var $x;
      var $y;
      var $r;
      var $__cy;
      var $__cy1;
      $2=$args;
      $3=$func;
      $4=$funcname;
      var $5=$2;
      var $6=$4;
      var $7=_PyArg_UnpackTuple($5, $6, 2, 2, (tempInt=STACKTOP,STACKTOP = (STACKTOP + 8)|0,assert((STACKTOP|0) < (STACK_MAX|0)),HEAP32[((tempInt)>>2)]=$ox,HEAP32[(((tempInt)+(4))>>2)]=$oy,tempInt));
      var $8=(($7)|(0))!=0;
      if ($8) { label = 3; break; } else { label = 2; break; }
    case 2: 
      $1=0;
      label = 28; break;
    case 3: 
      var $11=HEAP32[(($ox)>>2)];
      var $12=_PyFloat_AsDouble($11);
      $x=$12;
      var $13=HEAP32[(($oy)>>2)];
      var $14=_PyFloat_AsDouble($13);
      $y=$14;
      var $15=$x;
      var $16=$15 == -1;
      if ($16) { label = 5; break; } else { label = 4; break; }
    case 4: 
      var $18=$y;
      var $19=$18 == -1;
      if ($19) { label = 5; break; } else { label = 7; break; }
    case 5: 
      var $21=_PyErr_Occurred();
      var $22=(($21)|(0))!=0;
      if ($22) { label = 6; break; } else { label = 7; break; }
    case 6: 
      $1=0;
      label = 28; break;
    case 7: 
      var $25=___errno_location();
      HEAP32[(($25)>>2)]=0;
      var $26=$3;
      var $27=$x;
      var $28=$y;
      var $29=FUNCTION_TABLE[$26]($27, $28);
      $r=$29;
      var $30=$r;
      var $31=___fpclassifyf($30);
      var $32=(($31)|(0))==0;
      if ($32) { label = 8; break; } else { label = 13; break; }
    case 8: 
      var $34=$x;
      var $35=___fpclassifyf($34);
      var $36=(($35)|(0))==0;
      if ($36) { label = 11; break; } else { label = 9; break; }
    case 9: 
      var $38=$y;
      var $39=___fpclassifyf($38);
      var $40=(($39)|(0))==0;
      if ($40) { label = 11; break; } else { label = 10; break; }
    case 10: 
      var $42=___errno_location();
      HEAP32[(($42)>>2)]=33;
      label = 12; break;
    case 11: 
      var $44=___errno_location();
      HEAP32[(($44)>>2)]=0;
      label = 12; break;
    case 12: 
      label = 24; break;
    case 13: 
      var $47=$r;
      var $48=___fpclassifyf($47);
      var $49=(($48)|(0))==1;
      if ($49) { label = 14; break; } else { label = 23; break; }
    case 14: 
      var $51=$x;
      var $52=___fpclassifyf($51);
      $__cy=$52;
      var $53=$__cy;
      var $54=(($53)|(0))!=1;
      if ($54) { label = 15; break; } else { var $59 = 0;label = 16; break; }
    case 15: 
      var $56=$__cy;
      var $57=(($56)|(0))!=0;
      var $59 = $57;label = 16; break;
    case 16: 
      var $59;
      if ($59) { label = 17; break; } else { label = 21; break; }
    case 17: 
      var $61=$y;
      var $62=___fpclassifyf($61);
      $__cy1=$62;
      var $63=$__cy1;
      var $64=(($63)|(0))!=1;
      if ($64) { label = 18; break; } else { var $69 = 0;label = 19; break; }
    case 18: 
      var $66=$__cy1;
      var $67=(($66)|(0))!=0;
      var $69 = $67;label = 19; break;
    case 19: 
      var $69;
      if ($69) { label = 20; break; } else { label = 21; break; }
    case 20: 
      var $71=___errno_location();
      HEAP32[(($71)>>2)]=34;
      label = 22; break;
    case 21: 
      var $73=___errno_location();
      HEAP32[(($73)>>2)]=0;
      label = 22; break;
    case 22: 
      label = 23; break;
    case 23: 
      label = 24; break;
    case 24: 
      var $77=___errno_location();
      var $78=HEAP32[(($77)>>2)];
      var $79=(($78)|(0))!=0;
      if ($79) { label = 25; break; } else { label = 27; break; }
    case 25: 
      var $81=$r;
      var $82=_is_error($81);
      var $83=(($82)|(0))!=0;
      if ($83) { label = 26; break; } else { label = 27; break; }
    case 26: 
      $1=0;
      label = 28; break;
    case 27: 
      var $86=$r;
      var $87=_PyFloat_FromDouble($86);
      $1=$87;
      label = 28; break;
    case 28: 
      var $89=$1;
      STACKTOP = __stackBase__;
      return $89;
    default: assert(0, "bad label: " + label);
  }
}
function _m_atan2($y, $x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $3;
      $2=$y;
      $3=$x;
      var $4=$3;
      var $5=___fpclassifyf($4);
      var $6=(($5)|(0))==0;
      if ($6) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $8=$2;
      var $9=___fpclassifyf($8);
      var $10=(($9)|(0))==0;
      if ($10) { label = 3; break; } else { label = 4; break; }
    case 3: 
      $1=NaN;
      label = 16; break;
    case 4: 
      var $13=$2;
      var $14=___fpclassifyf($13);
      var $15=(($14)|(0))==1;
      if ($15) { label = 5; break; } else { label = 10; break; }
    case 5: 
      var $17=$3;
      var $18=___fpclassifyf($17);
      var $19=(($18)|(0))==1;
      if ($19) { label = 6; break; } else { label = 9; break; }
    case 6: 
      var $21=$3;
      var $22=_copysign(1, $21);
      var $23=$22 == 1;
      if ($23) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $25=$2;
      var $26=_copysign(0.7853981633974483, $25);
      $1=$26;
      label = 16; break;
    case 8: 
      var $28=$2;
      var $29=_copysign(2.356194490192345, $28);
      $1=$29;
      label = 16; break;
    case 9: 
      var $31=$2;
      var $32=_copysign(1.5707963267948966, $31);
      $1=$32;
      label = 16; break;
    case 10: 
      var $34=$3;
      var $35=___fpclassifyf($34);
      var $36=(($35)|(0))==1;
      if ($36) { label = 12; break; } else { label = 11; break; }
    case 11: 
      var $38=$2;
      var $39=$38 == 0;
      if ($39) { label = 12; break; } else { label = 15; break; }
    case 12: 
      var $41=$3;
      var $42=_copysign(1, $41);
      var $43=$42 == 1;
      if ($43) { label = 13; break; } else { label = 14; break; }
    case 13: 
      var $45=$2;
      var $46=_copysign(0, $45);
      $1=$46;
      label = 16; break;
    case 14: 
      var $48=$2;
      var $49=_copysign(3.141592653589793, $48);
      $1=$49;
      label = 16; break;
    case 15: 
      var $51=$2;
      var $52=$3;
      var $53=Math.atan2($51, $52);
      $1=$53;
      label = 16; break;
    case 16: 
      var $55=$1;
      return $55;
    default: assert(0, "bad label: " + label);
  }
}
function __Py_acosh($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $t;
      var $t1;
      $2=$x;
      var $3=$2;
      var $4=___fpclassifyf($3);
      var $5=(($4)|(0))==0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $7=$2;
      var $8=$2;
      var $9=($7)+($8);
      $1=$9;
      label = 14; break;
    case 3: 
      var $11=$2;
      var $12=$11 < 1;
      if ($12) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $14=___errno_location();
      HEAP32[(($14)>>2)]=33;
      $1=NaN;
      label = 14; break;
    case 5: 
      var $16=$2;
      var $17=$16 >= 268435456;
      if ($17) { label = 6; break; } else { label = 9; break; }
    case 6: 
      var $19=$2;
      var $20=___fpclassifyf($19);
      var $21=(($20)|(0))==1;
      if ($21) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $23=$2;
      var $24=$2;
      var $25=($23)+($24);
      $1=$25;
      label = 14; break;
    case 8: 
      var $27=$2;
      var $28=Math.log($27);
      var $29=($28)+(0.6931471805599453);
      $1=$29;
      label = 14; break;
    case 9: 
      var $31=$2;
      var $32=$31 == 1;
      if ($32) { label = 10; break; } else { label = 11; break; }
    case 10: 
      $1=0;
      label = 14; break;
    case 11: 
      var $35=$2;
      var $36=$35 > 2;
      if ($36) { label = 12; break; } else { label = 13; break; }
    case 12: 
      var $38=$2;
      var $39=$2;
      var $40=($38)*($39);
      $t=$40;
      var $41=$2;
      var $42=($41)*(2);
      var $43=$2;
      var $44=$t;
      var $45=($44)-(1);
      var $46=Math.sqrt($45);
      var $47=($43)+($46);
      var $48=(1)/($47);
      var $49=($42)-($48);
      var $50=Math.log($49);
      $1=$50;
      label = 14; break;
    case 13: 
      var $52=$2;
      var $53=($52)-(1);
      $t1=$53;
      var $54=$t1;
      var $55=$t1;
      var $56=($55)*(2);
      var $57=$t1;
      var $58=$t1;
      var $59=($57)*($58);
      var $60=($56)+($59);
      var $61=Math.sqrt($60);
      var $62=($54)+($61);
      var $63=__Py_log1p($62);
      $1=$63;
      label = 14; break;
    case 14: 
      var $65=$1;
      return $65;
    default: assert(0, "bad label: " + label);
  }
}
function __Py_log1p($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      $2=$x;
      var $3=$2;
      var $4=$3 == 0;
      if ($4) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $6=$2;
      $1=$6;
      label = 4; break;
    case 3: 
      var $8=$2;
      var $9=_log1p($8);
      $1=$9;
      label = 4; break;
    case 4: 
      var $11=$1;
      return $11;
    default: assert(0, "bad label: " + label);
  }
}
function __Py_asinh($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $w;
      var $absx;
      var $t;
      $2=$x;
      var $3=$2;
      var $4=Math.abs($3);
      $absx=$4;
      var $5=$2;
      var $6=___fpclassifyf($5);
      var $7=(($6)|(0))==0;
      if ($7) { label = 3; break; } else { label = 2; break; }
    case 2: 
      var $9=$2;
      var $10=___fpclassifyf($9);
      var $11=(($10)|(0))==1;
      if ($11) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $13=$2;
      var $14=$2;
      var $15=($13)+($14);
      $1=$15;
      label = 13; break;
    case 4: 
      var $17=$absx;
      var $18=$17 < 3.725290298461914e-9;
      if ($18) { label = 5; break; } else { label = 6; break; }
    case 5: 
      var $20=$2;
      $1=$20;
      label = 13; break;
    case 6: 
      var $22=$absx;
      var $23=$22 > 268435456;
      if ($23) { label = 7; break; } else { label = 8; break; }
    case 7: 
      var $25=$absx;
      var $26=Math.log($25);
      var $27=($26)+(0.6931471805599453);
      $w=$27;
      label = 12; break;
    case 8: 
      var $29=$absx;
      var $30=$29 > 2;
      if ($30) { label = 9; break; } else { label = 10; break; }
    case 9: 
      var $32=$absx;
      var $33=($32)*(2);
      var $34=$2;
      var $35=$2;
      var $36=($34)*($35);
      var $37=($36)+(1);
      var $38=Math.sqrt($37);
      var $39=$absx;
      var $40=($38)+($39);
      var $41=(1)/($40);
      var $42=($33)+($41);
      var $43=Math.log($42);
      $w=$43;
      label = 11; break;
    case 10: 
      var $45=$2;
      var $46=$2;
      var $47=($45)*($46);
      $t=$47;
      var $48=$absx;
      var $49=$t;
      var $50=$t;
      var $51=($50)+(1);
      var $52=Math.sqrt($51);
      var $53=($52)+(1);
      var $54=($49)/($53);
      var $55=($48)+($54);
      var $56=__Py_log1p($55);
      $w=$56;
      label = 11; break;
    case 11: 
      label = 12; break;
    case 12: 
      var $59=$w;
      var $60=$2;
      var $61=_copysign($59, $60);
      $1=$61;
      label = 13; break;
    case 13: 
      var $63=$1;
      return $63;
    default: assert(0, "bad label: " + label);
  }
}
function __Py_atanh($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $absx;
      var $t;
      $2=$x;
      var $3=$2;
      var $4=___fpclassifyf($3);
      var $5=(($4)|(0))==0;
      if ($5) { label = 2; break; } else { label = 3; break; }
    case 2: 
      var $7=$2;
      var $8=$2;
      var $9=($7)+($8);
      $1=$9;
      label = 11; break;
    case 3: 
      var $11=$2;
      var $12=Math.abs($11);
      $absx=$12;
      var $13=$absx;
      var $14=$13 >= 1;
      if ($14) { label = 4; break; } else { label = 5; break; }
    case 4: 
      var $16=___errno_location();
      HEAP32[(($16)>>2)]=33;
      $1=NaN;
      label = 11; break;
    case 5: 
      var $18=$absx;
      var $19=$18 < 3.725290298461914e-9;
      if ($19) { label = 6; break; } else { label = 7; break; }
    case 6: 
      var $21=$2;
      $1=$21;
      label = 11; break;
    case 7: 
      var $23=$absx;
      var $24=$23 < 0.5;
      if ($24) { label = 8; break; } else { label = 9; break; }
    case 8: 
      var $26=$absx;
      var $27=$absx;
      var $28=($26)+($27);
      $t=$28;
      var $29=$t;
      var $30=$t;
      var $31=$absx;
      var $32=($30)*($31);
      var $33=$absx;
      var $34=(1)-($33);
      var $35=($32)/($34);
      var $36=($29)+($35);
      var $37=__Py_log1p($36);
      var $38=($37)*(0.5);
      $t=$38;
      label = 10; break;
    case 9: 
      var $40=$absx;
      var $41=$absx;
      var $42=($40)+($41);
      var $43=$absx;
      var $44=(1)-($43);
      var $45=($42)/($44);
      var $46=__Py_log1p($45);
      var $47=($46)*(0.5);
      $t=$47;
      label = 10; break;
    case 10: 
      var $49=$t;
      var $50=$2;
      var $51=_copysign($49, $50);
      $1=$51;
      label = 11; break;
    case 11: 
      var $53=$1;
      return $53;
    default: assert(0, "bad label: " + label);
  }
}
function __Py_expm1($x) {
  var label = 0;
  label = 1; 
  while(1) switch(label) {
    case 1: 
      var $1;
      var $2;
      var $u;
      $2=$x;
      var $3=$2;
      var $4=Math.abs($3);
      var $5=$4 < 0.7;
      if ($5) { label = 2; break; } else { label = 5; break; }
    case 2: 
      var $7=$2;
      var $8=Math.exp($7);
      $u=$8;
      var $9=$u;
      var $10=$9 == 1;
      if ($10) { label = 3; break; } else { label = 4; break; }
    case 3: 
      var $12=$2;
      $1=$12;
      label = 6; break;
    case 4: 
      var $14=$u;
      var $15=($14)-(1);
      var $16=$2;
      var $17=($15)*($16);
      var $18=$u;
      var $19=Math.log($18);
      var $20=($17)/($19);
      $1=$20;
      label = 6; break;
    case 5: 
      var $22=$2;
      var $23=Math.exp($22);
      var $24=($23)-(1);
      $1=$24;
      label = 6; break;
    case 6: 
      var $26=$1;
      return $26;
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
