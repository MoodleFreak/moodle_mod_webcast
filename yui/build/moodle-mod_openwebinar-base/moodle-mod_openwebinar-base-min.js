YUI.add("moodle-mod_openwebinar-base",function(e,t){M.mod_openwebinar=M.mod_openwebinar||{},M.mod_openwebinar.base={options:{debugjs:!0,duration:0,from:0,timeopen:0,cmid:0,is_ended:!1},log:function(e){"use strict";if(!this.options.debugjs)return;try{}catch(t){try{console.log(e)}catch(n){throw n}}},init:function(t){"use strict";this.set_options(t),this.log(this.options),e.on("domready",function(){this.add_countdown()},this)},add_countdown:function(){"use strict";var e=this,t=new Date(this.options.timeopen*1e3),n=new Date(e.options.from*1e3);countdown.setLabels(M.util.get_string("js:countdown_line1","openwebinar",{}),M.util.get_string("js:countdown_line2","openwebinar",{}),M.util.get_string("js:countdown_line3","openwebinar",{}),", ","",function(e){return e.toString()});var r=document.getElementById("pageTimer"),i=setInterval(function(){n.setSeconds(n.getSeconds()+1);var s=countdown(t,n,countdown.HOURS|countdown.MINUTES|countdown.SECONDS,6,0);e.log(s.value),s.value>0?(e.log("clearInterval"),clearInterval(i),window.location=M.cfg.wwwroot+"/mod/openwebinar/view.php?id="+e.options.cmid):r.innerHTML=s.toHTML("strong")},1e3)},set_options:function(e){"use strict";var t,n;for(t in this.options)this.options.hasOwnProperty(t)&&e.hasOwnProperty(t)&&(n=typeof this.options[t],n==="boolean"?this.options[t]=Boolean(e[t]):n==="number"?this.options[t]=Number(e[t]):n==="string"&&(this.options[t]=String(e[t])))}}},"@VERSION@",{requires:["base","node"]});