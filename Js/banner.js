/*
* @Author: Administrator
* @Date:   2017-04-25 16:51:45
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-25 18:59:54
*/

$(function(){
	var num = 1;//当前图片编号(1,2,3,4)
	var width = $(".banner_box .imgs img").width();//每张图的宽度
	var count = $(".banner_box .imgs img").length;//图片的个数
	var timer = null;//计时器

	// console.log(width);

	document.title = num;
	points(0);
	//1.圆点切换状态	经常改变的状态写成函数 方便调用
	function points(index){
		$(".banner_box .points span").eq(index).addClass('current').siblings('span').removeClass('current');
	}
	//2.点击右按钮,图片的盒子整体左移1000px(一张图的宽度)
	$(".right_btn").click(function() {
		// console.log($(".banner_box .imgs").css("margin-left"));
		// 没有动画效果的时候才允许执行以下效果
		if(!$(".banner_box .imgs").is(":animated")){
			if (num == count) {
				//最后一张,回到第一张
				$(".banner_box .imgs").animate({"margin-left":0});
				num = 1;
			}else{
				$(".banner_box .imgs").animate({"margin-left":"-="+width});
				num++;
			};
			document.title = num;
			points(num-1);
		}
	});
	//3.点击左按钮
	$(".left_btn").click(function() {
		// 没有动画效果的时候才允许执行以下效果
		if(!$(".banner_box .imgs").is(":animated")){
			if (num == 1) {
				//第一张回到最后一张
				$(".banner_box .imgs").animate({"margin-left":"-3000px"});
				num = count;
			}else{
				$(".banner_box .imgs").animate({"margin-left":"+="+width});
				num--;
			};
			document.title = num;
			points(num-1);
		}
	});
	//4.自动轮播
	timer = setInterval('$(".right_btn").click()', 3000);
	//5.鼠标进入,停止轮播;鼠标移出,继续轮播
	// mouseover mouseout
	$(".banner_box").mouseover(function(event) {
		clearInterval(timer);
	});
	$(".banner_box").mouseout(function(event) {
		timer = setInterval('$(".right_btn").click()', 3000);
	});
	//6.鼠标经过圆点,切换图片效果
	//mouseover
	$(".banner_box .points span").mouseover(function(event) {
		
	});
})