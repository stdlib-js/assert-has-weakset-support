// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof WeakSet?WeakSet:null;function e(){var e,a,n;if("function"!=typeof t)return!1;try{a={},(n=new t).add(a),n.add(a),e=n.has(a)}catch(t){e=!1}return e}export{e as default};
//# sourceMappingURL=mod.js.map
