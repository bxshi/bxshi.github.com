NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not(".group-picture img").each(function(){var e=$(this),i=e.attr("title"),t=e.parent("a");t.size()<1&&(t=e.wrap('<a href="'+this.getAttribute("src")+'"></a>').parent("a")),t.addClass("fancybox"),t.attr("rel","group"),i&&(t.append('<p class="image-caption">'+i+"</p>"),t.attr("title",i))}),$(".fancybox").fancybox({helpers:{overlay:{locked:!1}}})},embeddedVideoTransformer:function(){var e=$("iframe"),i=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"],t=new RegExp(i.join("|"));e.each(function(){var e=this,i=$(this);if(this.src.search(t)>0){var n=i.height()/i.width()*100;this.src.search("music.163.com")>0&&(n+=10),i.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var a=document.createElement("div");a.className="fluid-vids",a.style.width="100%",a.style.position="relative",a.style.paddingTop=n+"%";var s=e.parentNode;s.insertBefore(a,e),a.appendChild(e)}})},addActiveClassToMenuItem:function(){var e=window.location.pathname;e="/"===e?e:e.substring(0,e.length-1),$('.menu-item a[href="'+e+'"]').parent().addClass("menu-item-active")},hasMobileUA:function(){var e=window.navigator,i=e.userAgent,t=/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return t.test(i)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(e){return e.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){this.isDesktop()&&$(".sidebar-toggle").trigger("click")},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme}};