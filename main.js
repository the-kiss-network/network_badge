function hexToRgb(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,r,n){return e+e+r+r+n+n});var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}$(document).ready(function(){var t=document.getElementsByClassName("tknIcon")[0];t.innerHTML="TKN";var e=t.getAttribute("color"),r=t.getAttribute("backgroundColor"),n=hexToRgb(e);t.style.backgroundImage="url('http://iconmonstr.com/g/gd/makefg.php?i=s2/default/iconmonstr-favorite-4-icon.png&r="+n.r+"&g="+n.g+"&b="+n.b+"')",t.style.backgroundColor=r,t.style.color=e}),document.write("<link href='https://zaaach.github.io/tkn/main.css' rel='stylesheet' type='text/css' />");