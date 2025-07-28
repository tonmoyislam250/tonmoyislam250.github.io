var comp_Image1,yellow_one,yellow_two,yellow_three,yellow_four,yellow_five;
var arrow_one,arrowHead,arrow_three,arrow_four;
var red_X,pic2;
var bubbleText,bubbleText1;

	

var animation1 = function(data)
{

var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';

temp+='<div id="main_wrapper">';
temp+='<div id="main_container"><div id="divMainContaner"><img src="bg.png" /></div>';
temp+='<div id="pic1"><img src="computer_plain.png" style="width:56px;height:51px;" /></div>';
temp+='<div id="envelop1"><img src="envelope1.png" style="width:32px;height:23.55px" /></div>';
temp+='<div id="envelop2"><img src="envelope1.png" style="width:32px;height:23.55px" /></div>';
temp+='<div id="envelop3"><img src="envelope1.png" style="width:32px;height:23.55px" /></div>';
temp+='<div id="envelop4"><img src="envelope1.png" style="width:32px;height:23.55px" /></div>';
temp+='<div id="arrowHead1"><img src="newarrowHead.png" style="width:33.1px;height:19.35px" /></div>';
temp+='<div id="arrowLine1"><img src="arrowLine1.png" style="width:116.2px;height:62.2px" /></div>';

temp+='<div id="arrowHead11"><img src="arrowHead11.png" style="width:16.9px;height:22px" /></div>';
temp+='<div id="arrowLine11"><img src="arrowLine11.png" style="width:2px;height:21px;" /></div>';

temp+='<div id="arrowHead2"><img src="arrowHead2.png" style="width:37.9px;height:32.15px" /></div>';
temp+='<div id="arrowLine2"><img src="arrowLine2.png" style="width:79.2px;height:62.2px" /></div>';
 
temp+='<div id="arrowHead3"><img src="arrowHead3.png" style="height:41.15px;width:15.35px;" /></div>';
temp+='<div id="arrowLine3"><img src="arrowLine3.png" style="width:29.35px;height:100.35px" /></div>';

temp+='<div id="arrowHead4"><img src="arrowHead4.png" style="width:18.1px;height:42.4px" /></div>';
temp+='<div id="arrowLine4"><img src="arrowLine4.png" style="height:103.9px;width:43.15px;"  /></div>';

temp+='<div id="redX"><img src="RedX.png" style="width:27.6px;height:33.85px" /></div>';

temp+='<div id="pic2"><img src="computer_plain.png" style="width:56px;height:51px;"/></div>';
temp+='<div id="pic22"><img src="computer_highlight.png" style="width:63px; height: 58px;"/></div>';
temp+='<div id="pic3"><img src="laptop.png" style="width:67.35px;height:45.25px;"/></div>';
temp+='<div id="pic33"><img src="laptop_highlight.png" style="width: 84.35px; height: 58.25px;"/></div>';
temp+='<div id="pic4"><img src="printer.png" style="width:66.7px;height:28.15px;"/></div>';
temp+='<div id="pic44"><img src="printer_highlight.png" style="width: 82.7px; height: 45.15px;"/></div>';
temp+='<div id="pic5"><img src="computer_highlight.png" style="width:63px;height:58px;"/></div>';
temp+='<div id="staticText1">172.16.4.1</div><div id="staticText2">172.16.4.2</div><div id="staticText3">172.16.4.3</div><div id="staticText4">172.16.4.4</div>';
temp+='<div id="ID_txt01"></div>';
temp+='</div></div>';
 

$("#animDiv").html(temp);

	$("#ID_txt01").html($(data).find("component#ID_txt01").text());	 
}


	function animation()
	{   
		pause = $("#pauseBtn");
		play = $("#playBtn")
		restart = $("#restartBtn");

		pic1 = $("#pic1"); 
		pic5 = $("#pic5");
		pic2 = $("#pic2"); 
		pic22 = $("#pic22");
		pic3 = $("#pic3"); 
		pic33 = $("#pic33");
		pic4 = $("#pic4"); 
		pic44 = $("#pic44");

		envelop1 = $("#envelop1");
		envelop2 = $("#envelop2");
		envelop3 = $("#envelop3");
		envelop4 = $("#envelop4");
		arrowHead1 = $("#arrowHead1");
		arrowHead2 = $("#arrowHead2");
		arrowHead3 = $("#arrowHead3");
		arrowHead4 = $("#arrowHead4");
		arrowHead11 = $("#arrowHead11");

		arrowLine1 = $("#arrowLine1");
		arrowLine2 = $("#arrowLine2");
		arrowLine3 = $("#arrowLine3");
		arrowLine4 = $("#arrowLine4");
		arrowLine11 = $("#arrowLine11");
		redX = $("#redX");
 

  tl.to(pic5,1,{css: {opacity:1}})
  .to(envelop1,1,{css: {opacity:1}})
  .to(arrowHead1,.4,{css: {opacity:1}})
  .append([ 
		new TweenLite(envelop1, 1.5 ,{css: {left:156,top:74}}),
		new TweenLite(arrowHead1,.7,{css:{left:112,top:101}}),
		new TweenLite(arrowLine1,.7,{css:{clip:"rect(0px 116px 71px 0px)"}}),
		new TweenLite([arrowHead1,arrowLine1],.3,{css:{opacity:0},delay:.8}),
		new TweenLite([envelop2,envelop3,envelop4],.1,{css: {opacity:1},delay:1.4}),
		new TweenLite( [arrowHead11,arrowHead2,arrowHead3,arrowHead4],.1,{css: {opacity:1},delay:1.5})
  ]) 

/*  .to([envelop2,envelop3,envelop4],.1,{css: {opacity:1}})
 .to([arrowHead11,arrowHead2,arrowHead3,arrowHead4],.1,{css: {opacity:1}})*/
  .append([ 
		new TweenLite(envelop1, 1.5 ,{css: {top:5,left:160}}),
		new TweenLite(envelop2, 1.5 ,{css: {top:175,left:306}}),
		new TweenLite(envelop3, 1.5 ,{css: {top:222,left:217}}),
		new TweenLite(envelop4, 1.5 ,{css: {top:222,left:90}}),

		new TweenLite(arrowHead11, .7 ,{css: {top:35,left:166}}),
		new TweenLite(arrowHead2, .7 ,{css: {top:149,left:270}}),
		new TweenLite(arrowHead3, .7 ,{css: {top:180,left:202.5}}),
		new TweenLite(arrowHead4, .7 ,{css: {top:176,left:119}}),

		new TweenLite(arrowLine11,.7,{css:{clip:"clip:rect(0px, 5px, 30px, 0px)"}}),
		new TweenLite(arrowLine2,.7,{css:{clip:"clip:rect(0px, 74px, 57px, 0px)"}}),
		new TweenLite(arrowLine3,.7,{css:{clip:"clip:rect(0px, 34px, 106px, 0px)"}}),
		new TweenLite(arrowLine4,.7,{css:{clip:"clip:rect(0px, 49px, 112px, 0px)"}}),

		new TweenLite([arrowHead11,arrowHead2,arrowHead3,arrowHead4,arrowLine11,arrowLine2,arrowLine3,arrowLine4],.3,{css:{opacity:0},delay:.8}) 
  ])  
  .to([redX,pic44,pic33,pic22],1,{css: {opacity:1}})
     
	 .to(pause,.05,{onComplete:myFunction});
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}




var animeArray = [{name:animation1,animFunction:animation}];