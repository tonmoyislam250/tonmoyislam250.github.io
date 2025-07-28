var zoomImg;
var ID_title;
var pause,play,restart;
var animation1 = function(data)
{
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

var temp = '';
temp +='<div id="main_wrapper"><div id="ID_title"></div><div id="main_container"></div><div id="sub_container"></div><div><img id="mainImg" src="11_2_2_1.jpg" width="420px"><img id="wormGif" src="wormGIF.gif" width="53px" height="52px"><div><p class="bubble" id="bubble"></p></div></div></div><div><p class="bubbleTop top" id="bubbleTop"></p></div><img id="star" src="star.gif" width="64.8px" height="51.8px"><div><p class="bubbleTop1 top" id="bubbleTop1"></p></div><img id="trojan" src="trojan_horse.png" width="40px" height="54px"><div><p class="bubbleTop2 top" id="bubbleTop2"></p>';
temp += '<div id="ID_txt01"></div>';
temp += '<div id="ID_txt02"></div>';
temp += '<div id="ID_txt03"></div>';
temp += '<div id="ID_txt04"></div>';


$("#animDiv").html(temp);
$("#ID_title").html($(data).find("component#ID_title").text());
$("#ID_txt01").html($(data).find("component#ID_txt01").text());
$("#ID_txt02").html($(data).find("component#ID_txt02").text());
$("#ID_txt03").html($(data).find("component#ID_txt03").text());
$("#ID_txt04").html($(data).find("component#ID_txt04").text());
}
function animation()
	{		
		pause         = $("#pauseBtn");
		play          = $("#playBtn")
		restart       = $("#restartBtn"); 
	
	tl.append([new TweenLite(ID_txt01,.3,{css:{opacity:1}}),
				new TweenLite(bubble,.3,{css:{opacity:1}}) ,
	])
	tl.to(wormGif,.5,{css:{opacity:0,scale:0.3}}),
	tl.to(wormGif,.3,{css:{opacity:1,scale:1,left:129}}),
	tl.to(wormGif,.3,{css:{top:169}}),
	tl.append([new TweenLite(ID_txt01,.3,{css:{opacity:0}}),
				new TweenLite(bubble,.3,{css:{opacity:0}}) ,
	])
	tl.to(wormGif,1,{css:{left:219}})
	tl.append([new TweenLite(ID_txt02,.3,{css:{opacity:1}}),
				new TweenLite(bubbleTop,.3,{css:{opacity:1}}) ,
				new TweenLite(wormGif,4,{delay:7}),
				new TweenLite(ID_txt02,4),
				new TweenLite(bubbleTop,4),
	]),
	tl.append([new TweenLite(ID_txt02,.3,{css:{opacity:0}}),
				new TweenLite(bubbleTop,.3,{css:{opacity:0}}) ,
	])
	tl.to(wormGif,1,{css:{left:339}}),
	tl.to(wormGif,1,{css:{top:140}})
	tl.to(wormGif,1,{css:{opacity:0,scale:.3,left:380}})
///////////////////////////////////////////////////////////////////////////////////////////////	
	
	tl.to(star,.5,{css:{opacity:0,scale:0.3}}),
	tl.to(star,.3,{css:{opacity:1,scale:1,left:129}}),
	tl.to(star,.3,{css:{top:169}}),
	tl.to(star,1,{css:{left:219}})
	tl.append([new TweenLite(ID_txt03,.3,{css:{opacity:1}}),
				new TweenLite(bubbleTop1,.3,{css:{opacity:1}}) ,
				new TweenLite(star,4,{delay:7}),
				new TweenLite(ID_txt03,4),
				new TweenLite(bubbleTop1,4),
	]),
	tl.append([new TweenLite(ID_txt03,.3,{css:{opacity:0}}),
				new TweenLite(bubbleTop1,.3,{css:{opacity:0}}) ,
	])
	tl.to(star,1,{css:{left:339}}),
	tl.to(star,1,{css:{top:140}})
	tl.to(star,1,{css:{opacity:0,scale:.3,left:380}})

/////////////////////////////////////////////////////////////////////////////////////////////////
tl.to(trojan,.5,{css:{opacity:0,scale:0.3}}),
	tl.to(trojan,.3,{css:{opacity:1,scale:1,left:129}}),
	tl.to(trojan,.3,{css:{top:169}}),
	tl.to(trojan,1,{css:{left:219}})
	tl.append([new TweenLite(ID_txt04,.3,{css:{opacity:1}}),
				new TweenLite(bubbleTop2,.3,{css:{opacity:1}}) ,
				new TweenLite(trojan,4,{delay:7}),
				new TweenLite(ID_txt04,4),
				new TweenLite(bubbleTop2,4),
	]),
	tl.append([new TweenLite(ID_txt04,.3,{css:{opacity:0}}),
				new TweenLite(bubbleTop2,.3,{css:{opacity:0}}) ,
	])
	tl.to(trojan,1,{css:{left:339}}),
	tl.to(trojan,1,{css:{top:140}})
	tl.to(trojan,1,{css:{opacity:0,scale:.3,left:384}})

	.to(pause,.05,{onComplete:myFunction});
	
}
function myFunction()
	{
		
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}


var animeArray = [{name:animation1,animFunction:animation}];