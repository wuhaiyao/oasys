(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-shizhong" viewBox="0 0 1024 1024">'+""+'<path d="M512 1024c-282.794667 0-512-229.205333-512-512s229.205333-512 512-512 512 229.205333 512 512S794.794667 1024 512 1024zM512.113778 90.055111c-232.903111 0-421.774222 188.814222-421.774222 421.774222s188.814222 421.831111 421.774222 421.831111c232.96 0 421.774222-188.871111 421.774222-421.831111S745.130667 90.055111 512.113778 90.055111zM743.025778 544.824889c-48.241778 0-232.618667 0-232.618667 0-17.92 0-32.199111-13.767111-34.019556-31.232L475.648 513.592889c0 0 0-318.976 0-361.016889s69.461333-42.040889 69.461333 0c0 31.573333 0 236.600889 0 322.844444 55.694222 0 162.588444 0 197.916444 0C791.438222 475.363556 791.210667 544.824889 743.025778 544.824889z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-kongxinquan" viewBox="0 0 1024 1024">'+""+'<path d="M512.085333 938.752c-235.690667 0-426.666667-190.976-426.666667-426.666667 0-235.690667 190.976-426.666667 426.666667-426.666667 235.690667 0 426.666667 190.976 426.666667 426.666667C938.752 747.690667 747.690667 938.752 512.085333 938.752zM512.085333 256.085333c-141.397333 0-256 114.688-256 256 0 141.312 114.602667 256 256 256s256-114.688 256-256C768.085333 370.773333 653.482667 256.085333 512.085333 256.085333z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)