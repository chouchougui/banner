/*
* @Author: Administrator
* @Date:   2017-04-25 19:16:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-26 20:26:40
*/

$(function(){
	var num = 1;
	var count = $(".banner_box .imgs img").length;
	var width = $(".banner_box .imgs img").width();
	var timer = null;

	// document.title = num;
	points(0);
	//1.圆点切换状态
	function points(index){
		$(".banner_box .points span").eq(index).addClass('current').siblings('span').removeClass('current');
	}
	//2.点击右按钮 div往左移1000px
	$(".right_btn").click(function(){
		if(!$(".banner_box .imgs").is(":animated")){
			if (num == count) {
				$(".banner_box .imgs").animate({"margin-left":0});
				num = 1;
			}else{
				$(".banner_box .imgs").animate({"margin-left":"-="+width});
				num++;
			};
			// document.title = num;
			points(num-1);
		}
	
	});

	//3.点击左按钮
	$(".left_btn").click(function(){
		if(!$(".banner_box .imgs").is(":animated")){
			if (num == 1) {
				$(".banner_box .imgs").animate({"margin-left":"-3000px"});
				num = count;
			}else{
				$(".banner_box .imgs").animate({"margin-left":"+="+width});
				num--;
			};
			// document.title = num;
			points(num-1);
		}
	
	});
	//4.自动轮播
	timer = setInterval('$(".right_btn").click()',3000);
	//5.鼠标进入 轮播停止 鼠标离开 轮播继续
	$(".banner_box").mouseover(function() {
		clearInterval(timer);
	}).mouseout(function() {
		timer = setInterval('$(".right_btn").click()',3000);
	});
	//6.鼠标经过圆点 切换图片效果
	$(".banner_box .points span").mouseover(function() {
		// num = $(this).index() + 1;
		var index = $(this).index();
		if (!$(".banner_box .imgs").is(':animated')) {
			$(".banner_box .imgs").animate({"margin-left":"-"+index*width})//margin-left:-1000*图片的下标
		points(index);
		num = index+1;
		// document.title = num;

		};
	});
})