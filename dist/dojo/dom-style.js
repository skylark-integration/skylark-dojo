/**
 * dojo - A version of dojo.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojo/
 * @license MIT
 */
define(["./sniff","./dom"],function(t,e){var r,n,i={};r=t("webkit")?function(t){var e;if(1==t.nodeType){var r=t.ownerDocument.defaultView;!(e=r.getComputedStyle(t,null))&&t.style&&(t.style.display="",e=r.getComputedStyle(t,null))}return e||{}}:t("ie")&&(t("ie")<9||t("quirks"))?function(t){return 1==t.nodeType&&t.currentStyle?t.currentStyle:{}}:function(t){return 1==t.nodeType?t.ownerDocument.defaultView.getComputedStyle(t,null):{}},i.getComputedStyle=r,n=t("ie")?function(t,e){if(!e)return 0;if("medium"==e)return 4;if(e.slice&&"px"==e.slice(-2))return parseFloat(e);var r=t.style,n=t.runtimeStyle,i=t.currentStyle,l=r.left,o=n.left;n.left=i.left;try{r.left=e,e=r.pixelLeft}catch(t){e=0}return r.left=l,n.left=o,e}:function(t,e){return parseFloat(e)||0},i.toPixelValue=n;var l="DXImageTransform.Microsoft.Alpha",o=function(t,e){try{return t.filters.item(l)}catch(t){return e?{}:null}},u=t("ie")<9||t("ie")<10&&t("quirks")?function(t){try{return o(t).Opacity/100}catch(t){return 1}}:function(t){return r(t).opacity},a=t("ie")<9||t("ie")<10&&t("quirks")?function(t,e){""===e&&(e=1);var r=100*e;if(1===e?(t.style.zoom="",o(t)&&(t.style.filter=t.style.filter.replace(new RegExp("\\s*progid:"+l+"\\([^\\)]+?\\)","i"),""))):(t.style.zoom=1,o(t)?o(t,1).Opacity=r:t.style.filter+=" progid:"+l+"(Opacity="+r+")",o(t,1).Enabled=!0),"tr"==t.tagName.toLowerCase())for(var n=t.firstChild;n;n=n.nextSibling)"td"==n.tagName.toLowerCase()&&a(n,e);return e}:function(t,e){return t.style.opacity=e},f={left:!0,top:!0},s=/margin|padding|width|height|max|min|offset/;var c={cssFloat:1,styleFloat:1,float:1};return i.get=function(r,l){var o=e.byId(r),a=arguments.length;if(2==a&&"opacity"==l)return u(o);l=c[l]?"cssFloat"in o.style?"cssFloat":"styleFloat":l;var y=i.getComputedStyle(o);return 1==a?y:function(e,r,i){if(r=r.toLowerCase(),t("ie")||t("trident")){if("auto"==i){if("height"==r)return e.offsetHeight;if("width"==r)return e.offsetWidth}if("fontweight"==r)switch(i){case 700:return"bold";case 400:default:return"normal"}}return r in f||(f[r]=s.test(r)),f[r]?n(e,i):i}(o,l,y[l]||o.style[l])},i.set=function(t,r,n){var l=e.byId(t),o=arguments.length,u="opacity"==r;if(r=c[r]?"cssFloat"in l.style?"cssFloat":"styleFloat":r,3==o)return u?a(l,n):l.style[r]=n;for(var f in r)i.set(t,f,r[f]);return i.getComputedStyle(l)},i});
//# sourceMappingURL=sourcemaps/dom-style.js.map