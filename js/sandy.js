(function ($) {
	new WOW().init();
	$(window).load(function() { 
		$(".sandy-friend-top  li").hide();
		$("#preloader").delay(10).fadeOut("slow");
		$("#load").delay(10).fadeOut("slow");
	})
	$(function() {
		$('.sandy-top-btn').bind('click', function(event) {

			
			$( ".sandy-friend-top li" ).first().show("100", function showNext() {
    			$( this ).next( ".sandy-friend-top li").show("100", showNext );
  			});
  			return false;
		});

		$(".sandy-icon-weixin").bind('click',function(event){
			event.preventDefault();
			$("#preloader-black").fadeIn("slow");
			$("#winxin-code").fadeIn("slow");
			return false;
		});
		$("#preloader-black").bind('click',function(event){
			event.preventDefault();
			$("#preloader-black").fadeOut("slow");
			$("#winxin-code").fadeOut("slow");
			return false;
		});

		$(".idea_tag").bind('click',function(event){
			event.preventDefault();
			return false;
		});
	});
	


	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	var wow = new WOW({
    	boxClass: 'wow',
    	animateClass: 'animated',
    	offset: 200,
    	mobile: true,
    	live: true
	});
	wow.init();

	//page scroll 动画
	function drawSkill(){
		$('canvas.resume-skill').each(function(){
			var process = $(this).attr("process");
			console.log(process);
			var canvas = this;
			var context = canvas.getContext('2d');

			context.beginPath();
			context.moveTo(70,70);
			context.arc(70,70,70,0, Math.PI*2,false);
			context.closePath();
			context.fillStyle='rgba(255,255,255,0.2)';
			context.fill();

			 context.beginPath();  
            // 画扇形的时候这步很重要,画笔不在圆心画出来的不是扇形  
        	context.moveTo(70,70);  
            // 跟上面的圆唯一的区别在这里,不画满圆,画个扇形  
        	context.arc(70,70,70,Math.PI*(-0.5), Math.PI*(2*process/100-0.5),false);  
        	context.closePath();  
        	context.fillStyle = 'rgba(255,255,255,1)';  
        	context.fill();  
  
        	// 画内部空白  
        	context.beginPath();  
        	context.moveTo(70, 70);  
        	context.arc(70, 70, 64, Math.PI*(-0.5), Math.PI * 1.5, true);  
        	context.closePath();  
        	context.fillStyle = "#2c3c51";  
        	context.fill();   
			})
	}
	drawSkill();


})(jQuery);