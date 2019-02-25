/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./has","require","./sniff","./_base/lang","./_base/array","./_base/config","./ready","./_base/declare","./_base/connect","./_base/Deferred","./_base/json","./_base/Color","./has!dojo-firebug?./_firebug/firebug","./has!host-browser?./_base/browser","./has!dojo-sync-loader?./_base/loader"],function(e,r,a,s,o,i,n,b){if(n.isDebug&&a(["./_firebug/firebug"]),r.add("dojo-config-require",1),r("dojo-config-require")){var f=n.require;f&&(f=i.map(o.isArray(f)?f:[f],function(e){return e.replace(/\./g,"/")}),e.isAsync?a(f):b(1,function(){a(f)}))}return e});
//# sourceMappingURL=sourcemaps/main.js.map