import e from"react";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css","top"===n&&o.firstChild?o.insertBefore(d,o.firstChild):o.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}(".btn{\r\n    background-color: blueviolet;\r\n }");const t=({label:t})=>e.createElement("button",{className:"btn"},t);export{t as Button};
