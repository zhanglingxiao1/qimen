$(function () {
	/*页脚*/
	var windowWidth = $(window).width();
	$('#footer-nav .main-menu').css('margin-left', (windowWidth-80)/2);
	
	/*搜索*/
	$('#header-style .search-btn').click(function(){
		$('#header-style>a').hide();
		$('#header-style>h1').hide();
		$('#header-style .search-box').show();
	});
	
	/*悬浮菜单*/
	/*$('a.menu').click(function(){
		
		var temp = false;
		var classContent = $(this).attr('class');
		var classArr = classContent.split(' ');
		for (var i=0;i< classArr.length;i++) {
			if(classArr[i] == 'menu-active') {
				temp = true;
			}
		}
		
		if (temp) {
			$(this).removeClass('menu-active');
			
		} else {
			$(this).addClass('menu-active');
			
		}
		
			
	});*/
	
	/*打开之前*/
	$( "#mypanel" ).panel({ 
	  beforeopen: function( event, ui ) {
		$('a.menu').addClass('menu-active');
	  } 
	});
	/*关闭时*/
	$( "#mypanel" ).panel({ 
	  close: function( event, ui ) {
		$('a.menu').removeClass('menu-active');
	  } 
	});
	
	/*首页*/
	setTimeout(function(){
		var frontImgHeight = $('.first-content>div .left img').height();
		$('.first-content>div .right img').height(frontImgHeight/2-2);
	},100);
	
	/*发布*/
	$('.publish-content .add-content img').click(function(){
		$(".publish-content .add-content input").trigger("click")
	});
	
	/*个人中心*/
	setTimeout(function(){
		var userCenterHeight = $('.usercenter-content .banner').height();
		
		var playLeft = (windowWidth-40)/2;/*play图标大小为40*40px*/
		var playTop = (userCenterHeight-40)/2;
		$('.usercenter-content .play').css('top', playTop);
		$('.usercenter-content .play').css('left', playLeft);
	},100);
	
	$('.icon-content .upload').click(function(){
		$(this).parent().find('input').trigger("click")
	});
	
	$('.icon-content .icon a').click(function(){
		$(this).parent().find('input').trigger("click")
	});
	
	/*关于我们*/
	var windowHeight = $(window).height();
	var aboutHeight = $('.about-content').height();
	var aboutTop = (windowHeight-aboutHeight-140)/2;
	if (aboutTop>0) {
		$('.about-content').css('margin-top',aboutTop);
	}
	
	/*我的票房*/
	var boxOfficeWidth = $('.box-office-content>div>div').width();
	if(boxOfficeWidth>0) {
		$('.box-office-content>div>div.buy-money').width(boxOfficeWidth);
	}
	
	var boxHeight = $('.buy-resule .resule-content').height();
	var boxTop = (windowHeight-boxHeight-140)/2;
	if (boxTop>0) {
		$('.buy-resule .resule-content').css('margin-top',boxTop);
	}
	
	/*三种操作*/
	$('.operation-box .ui-block-a a').click(function(){
		var temp = false;
		var classContent = $(this).attr('class');
		var classArr = classContent.split(' ');
		for (var i=0;i< classArr.length;i++) {
			if(classArr[i] == 'active-operation') {
				temp = true;
			}
		}
		if (temp) {
			$(this).removeClass('active-operation');
			var data = $(this).find('font').text();
			var htmlCode = '<span class="icon-heart-o"><font>'+data+'</font></span>';
			$(this).html(htmlCode);
			
			
		} else {
			$(this).addClass('active-operation');
			var data = $(this).find('font').text();
			
			var htmlCode = '<span class="icon-heart save-active"><font>'+data+'</font></span>';
			$(this).html(htmlCode);
		}	
		
	});
	
	$('.index-content .operation-box .icon-message').click(function(){
		var parent = $(this).parent().parent().parent();
		commentControl ($(this), parent );
		
	});
	
	$('.index-content .operation-box .icon-return').click(function(){
		var parent = $(this).parent().parent().parent();
		returnControl ($(this), parent );
	});
	
	
	$('.trend .operation-box .icon-message').click(function(){
		var parent = $(this).parent().parent().parent();
		commentControl ($(this), parent );
		
	});
	
	$('.trend .operation-box .icon-return').click(function(){
		var parent = $(this).parent().parent().parent();
		returnControl ($(this), parent );
		
	});
	
	function commentControl (current, parent) {
		var temp = false;
		var classContent = current.attr('class');
		var classArr = classContent.split(' ');
		for (var i=0;i< classArr.length;i++) {
			if(classArr[i] == 'active') {
				temp = true;
			}
		}
		parent.find('.communt-box').hide();	
		parent.find('.return-box').hide();	
		current.parent().parent().find('.icon-return').removeClass('active');
		current.parent().parent().find('.arrow-commnut').hide();
		
		if (temp) {
			current.removeClass('active');
			current.parent().find('.arrow-commnut').hide();
			parent.find('.communt-box').hide();
			
		} else {
			current.addClass('active');
			current.parent().find('.arrow-commnut').show();
			parent.find('.communt-box').show();	
			
		}
		
	}
	
	function returnControl(current, parent) {
		var temp = false;
		var classContent = current.attr('class');
		var classArr = classContent.split(' ');
		for (var i=0;i< classArr.length;i++) {
			if(classArr[i] == 'active') {
				temp = true;
			}
		}
		parent.find('.communt-box').hide();	
		parent.find('.return-box').hide();
		current.parent().parent().find('.icon-message').removeClass('active');
		current.parent().parent().find('.arrow-commnut').hide();
		
		if (temp) {
			current.removeClass('active');
			current.parent().find('.arrow-commnut').hide();
			parent.find('.return-box').hide();
			
		} else {
			current.addClass('active');
			current.parent().find('.arrow-commnut').show();
			parent.find('.return-box').show();	
			
		}
	}
	
	
	
	/*查看详细内容*/
	$('.trend-content>a').click(function(){
		var temp = false;
		var classContent = $(this).attr('class');
		var classArr = classContent.split(' ');
		for (var i=0;i< classArr.length;i++) {
			if(classArr[i] == 'active') {
				temp = true;
			}
		}
		
		if (temp) {
			$(this).removeClass('active');
			$(this).parent().find('.trend-detail').hide();
			$(this).addClass('ui-icon-carat-d');	
			$(this).removeClass('ui-icon-carat-u');
			
		} else {
			$(this).addClass('active');
			$(this).parent().find('.trend-detail').show();
			$(this).removeClass('ui-icon-carat-d');	
			$(this).addClass('ui-icon-carat-u');
			
		}
		
	});
	
});