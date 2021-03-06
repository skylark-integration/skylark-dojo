/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
function rhinoDojoConfig(o,e,t){var a=function(o,e){print((o?o+":":"")+e[0]);for(var t=1;t<e.length;t++)print(", "+e[t])};console={log:function(){a(0,arguments)},error:function(){a("ERROR",arguments)},warn:function(){a("WARN",arguments)}};for(var r=[],n=0;n<t.length;n++){var i=(t[n]+"").split("=");"load"==i[0]&&r.push(i[1])}if("undefined"==typeof setTimeout||"undefined"==typeof clearTimeout){var l=[];clearTimeout=function(o){l[o]&&l[o].stop()},setTimeout=function(o,e){var t={sleepTime:e,hasSlept:!1,run:function(){this.hasSlept||(this.hasSlept=!0,java.lang.Thread.currentThread().sleep(this.sleepTime));try{o()}catch(o){console.debug("Error running setTimeout thread:"+o)}}},a=new java.lang.Runnable(t),r=new java.lang.Thread(a);return r.start(),l.push(r)-1}}var s=function(o){return new java.io.File(o).exists()},d={"host-rhino":1,"host-browser":0,dom:0,"dojo-has-api":1,"dojo-xhr-factory":0,"dojo-inject-api":1,"dojo-timeout-api":0,"dojo-trace-api":1,"dojo-loader-catches":1,"dojo-dom-ready-api":0,"dojo-publish-privates":1,"dojo-sniff":0,"dojo-loader":1,"dojo-test-xd":0,"dojo-test-sniff":0};for(var c in d)o.hasCache[c]=d[c];var u={baseUrl:e,commandLineArgs:t,deps:r,timeout:0,locale:String(java.util.Locale.getDefault().toString().replace("_","-").toLowerCase()),loaderPatch:{injectUrl:function(o,e){try{s(o)?load(o):require.eval(readUrl(o,"UTF-8")),e()}catch(e){console.log("failed to load resource ("+o+")"),console.log(e)}},getText:function(o,e,t){t(s(o)?readFile(o,"UTF-8"):readUrl(o,"UTF-8"))}}};for(c in u)o[c]=u[c]}
//# sourceMappingURL=../sourcemaps/_base/configRhino.js.map
