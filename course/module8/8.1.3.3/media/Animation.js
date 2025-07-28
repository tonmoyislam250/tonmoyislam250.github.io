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
temp+='<div id="arrowHead1"><img src="newarrowHead.png" style="width:33.1px;height:19.35px" /></div>';
temp+='<div id="arrowLine1"><img src="arrowLine1.png" style="width:116.2px;height:62.2px" /></div>';

 

temp+='<div id="arrowHead2"><img src="arrowHead2.png" style="width:37.9px;height:32.15px" /></div>';
temp+='<div id="arrowLine2"><img src="arrowLine2.png" style="width:79.2px;height:62.2px" /></div>';
   
temp+='<div id="pic2"><img src="computer_plain.png" style="width:56px;height:51px;"/></div>';
temp+='<div id="pic22"><img src="computer_highlight.png" style="width:63px; height: 58px;"/></div>';
temp+='<div id="pic3"><img src="laptop.png" style="width:67.35px;height:45.25px;"/></div>'; 
temp+='<div id="pic4"><img src="printer.png" style="width:66.7px;height:28.15px;"/></div>';
temp+='<div id="pic44"><img src="printer_highlight.png" style="width: 82.7px; height: 45.15px;"/></div>';
temp+='<div id="pic5"><img src="computer_highlight.png" style="width:63px;height:58px;"/></div>';
temp+='<div id="staticText1">172.16.4.1</div><div id="staticText2">172.16.4.2</div><div id="staticText3">172.16.4.3</div><div id="staticText4">172.16.4.253</div>';
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
		arrowHead1 = $("#arrowHead1");
		arrowHead2 = $("#arrowHead2"); 
		arrowLine1 = $("#arrowLine1");
		arrowLine2 = $("#arrowLine2");
		 
 

		tl.to(pic5,1,{css: {opacity:1}})
			.to(envelop1,1,{css: {opacity:1}})
			.to(arrowHead1,.4,{css: {opacity:1}})
			.append([ 
				new TweenLite(envelop1, 1.3 ,{css: {left:156,top:74, ease:Power1.easeOut}}),
				new TweenLite(arrowHead1,.7,{css:{left:112,top:101}}),
				new TweenLite(arrowLine1,.7,{css:{clip:"rect(0px 116px 71px 0px)"}}),
				new TweenLite([arrowHead1,arrowLine1],.3,{css:{opacity:0},delay:.8}),
				new TweenLite(arrowHead2,.1,{css: {opacity:1},delay:1.5}),

				new TweenLite(envelop1, 1.2 ,{css: {top:175,left:306,ease:Cubic.easeOut},delay:1.3}),
				new TweenLite(arrowHead2, .5 ,{css: {top:149,left:270},delay:1.3}),
				new TweenLite(arrowLine2,.5,{css:{clip:"clip:rect(0px, 74px, 57px, 0px)"},delay:1.3}),
				new TweenLite([arrowHead2,arrowLine2],.2,{css:{opacity:0},delay:1.8}) 
			])  
			.to([pic44],.5,{css: {opacity:1}})
			.to(pause,.05,{onComplete:myFunction});
		}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}




var animeArray = [{name:animation1,animFunction:animation}];