$(document).ready(function(){var e=$("#sidebar"),t=$(".header-inner").height(),i=parseInt($(".main").css("padding-bottom"),10),s=t+10;e.css({"margin-top":s}).show(),NexT.utils.isDesktop()&&$(".page-post-detail .sidebar-inner").affix({offset:{top:s,bottom:i}})});