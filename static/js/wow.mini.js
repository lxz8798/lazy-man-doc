/*! WOW - v0.0.6 - 2014-02-02
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b=function(a,b){return function(){return a.apply(b,arguments)}};a=function(b){var c,d,e,f;for(f=b||{},c=1;c<arguments.length;){e=arguments[c]||{};for(d in e)f[d]="object"==typeof f[d]?a(f[d],e[d]):f[d]||e[d];c++}return f},this.WOW=function(){function c(c){null==c&&(c={}),this.scrollCallback=b(this.scrollCallback,this),this.scrollHandler=b(this.scrollHandler,this),this.config=a(c,this.defaults),this.visibleCount=0,this.element=window.document.documentElement,this.boxes=Array.prototype.slice.call(this.element.getElementsByClassName(this.config.boxClass)),this.scrolled=!0}return c.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0},c.prototype.init=function(){return this.boxes.length?(this.hideAll(),window.addEventListener("scroll",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)):void 0},c.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},c.prototype.show=function(a){return a.style.visibility="visible",a.className=""+a.className+" "+this.config.animateClass},c.prototype.hideAll=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="hidden");return e},c.prototype.scrollHandler=function(){return this.scrolled=!0},c.prototype.scrollCallback=function(){var a,b,c,d;if(this.scrolled){for(this.scrolled=!1,d=[],a=b=0,c=this.boxes.length-1;c>=0?c>=b:b>=c;a=c>=0?++b:--b)null!=this.boxes[a]&&this.isVisible(this.boxes[a])?(this.show(this.boxes[a]),this.boxes[a]=null,this.visibleCount++,d.push(this.boxes.length===this.visibleCount?this.stop():void 0)):d.push(void 0);return d}},c.prototype.offsetTop=function(a){var b;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},c.prototype.isVisible=function(a){var b,c,d,e;return e=window.pageYOffset,d=e+this.element.clientHeight-this.config.offset,c=this.offsetTop(a),b=c+a.clientHeight,d>=c&&b>=e},c}()}).call(this);