/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./_base/kernel","./has","require","./has!host-browser?./domReady","./_base/lang"],function(o,r,a,n,e){var i=0,d=[],t=0,f=function(){i=1,o._postLoad=o.config.afterOnLoad=!0,s()},s=function(){if(!t){for(t=1;i&&(!n||0==n._Q.length)&&(!a.idle||a.idle())&&d.length;){var o=d.shift();try{o()}catch(o){if(o.info=o.message,!a.signal)throw o;a.signal("error",o)}}t=0}};a.on&&a.on("idle",s),n&&(n._onQEmpty=s);var c=o.ready=o.addOnLoad=function(r,a,n){var i=e._toArray(arguments);"number"!=typeof r?(n=a,a=r,r=1e3):i.shift(),(n=n?e.hitch.apply(o,i):function(){a()}).priority=r;for(var t=0;t<d.length&&r>=d[t].priority;t++);d.splice(t,0,n),s()};if(r.add("dojo-config-addOnLoad",1),r("dojo-config-addOnLoad")){var l=o.config.addOnLoad;l&&c[e.isArray(l)?"apply":"call"](o,l)}return r("dojo-sync-loader")&&o.config.parseOnLoad&&!o.isAsync&&c(99,function(){o.parser||(o.deprecated("Add explicit require(['dojo/parser']);","","2.0"),a(["dojo/parser"]))}),n?n(f):f(),c});
//# sourceMappingURL=sourcemaps/ready.js.map