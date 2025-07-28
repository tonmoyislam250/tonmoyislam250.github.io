var zoomImg;
var pause,play,restart;
var animation1 = function(data)
{
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

var temp = '';
temp +='<div id="main_wrapper"><div id="main_container"></div><div id="sub_container"></div><div><img id="mainImg" src="7_3_1_1.png"></div><div><img id="zoomImg" src="envelope_closed_static.png" width="39" height="24"><div id="ID_txt03" style="display:none;"></div></div><div><img id="zoomImgRight" src="envelope_closed_static.png" width="39" height="24"><div id="ID_txt05" style="display:none;"></div><div><img id="bubble" src="bubble.png"></div><div><img id="bubble1" src="bubble1.png"></div></div></div>';
temp += '<div id="ID_txt01"></div>'
temp += '<div id="ID_txt02"></div>'
temp += '<div id="ID_txt04"></div>'
temp += '<div id="ID_txt06">H1</div>'
temp += '<div id="ID_txt07">H2</div>'
temp += '<div id="ID_txt08">192.168.10.1</div>'
temp += '<div id="ID_txt09">192.168.30.1</div>'
$("#animDiv").html(temp);
$("#ID_txt01").html($(data).find("component#ID_txt01").text());
$("#ID_txt02").html($(data).find("component#ID_txt02").text());
$("#ID_txt03").html($(data).find("component#ID_txt03").text());
$("#ID_txt04").html($(data).find("component#ID_txt04").text());
$("#ID_txt05").html($(data).find("component#ID_txt05").text());
}
function animation()
	{ 
		zoomImg       = $("#zoomImg")
		pause         = $("#pauseBtn");
		play          = $("#playBtn")
		restart       = $("#restartBtn"); 
	
tl.append([new TweenLite(ID_txt01,.3,{css:{opacity:1}}),
				new TweenLite(bubble,.3,{css:{opacity:1}}) ,
	])
	
	.to(ID_txt02,.1,{css:{opacity:1},delay:1})
	.to(ID_txt02,3,{css:{opacity:1}}),
tl.append([
				new TweenLite(zoomImg,.2,{css:{width:57,height:38,left:27,top:75,opacity:.3,scale:.3}}),
				new TweenLite(zoomImg,.2,{css:{width:70,height:47,left:27,top:75,opacity:.5,scale:.5}}),
				new TweenLite(zoomImg,.7,{css:{width:82,height:52,left:27,top:75,opacity:1,scale:.9}}),				
				new TweenLite(zoomImg,.7,{css:{opacity:1,scale:1}}),
				new TweenLite(ID_txt03,1,{css:{display:"block",opacity:0}}),
				new TweenLite(ID_txt03,1,{css:{opacity:1}}),
				/*new TweenLite(zoomImg,2),
				new TweenLite(ID_txt03,2)*/
				])
	tl.append([new TweenLite(ID_txt02,.1,{css:{opacity:.3}}),
				new TweenLite(zoomImg,.6,{css:{left:112}}),
				new TweenLite(ID_txt03,.6,{css:{left:112}}),
	])
	tl.append([new TweenLite(ID_txt02,.1,{css:{opacity:0}}),
				new TweenLite(zoomImg,1.1,{css:{top:240}}),
				new TweenLite(ID_txt03,1.1,{css:{top:250}}),
	])
	tl.append([new TweenLite(zoomImg,1.1,{css:{left:255}}),
				new TweenLite(ID_txt03,1.1,{css:{left:255}}),
	])
	tl.append([new TweenLite(zoomImg,1.6,{css:{top:75}}),
				new TweenLite(ID_txt03,1.6,{css:{top:90}}),
	])
	tl.append([new TweenLite(zoomImg,.6,{css:{left:365}}),
				new TweenLite(ID_txt03,.6,{css:{left:365}}),
				new TweenLite(zoomImg,2),
				new TweenLite(ID_txt03,2)				
	])
	tl.append([
				new TweenLite(zoomImg,1,{css:{opacity:1,scale:.8}}),
				new TweenLite(zoomImg,1,{css:{opacity:0,scale:.3}}),
				new TweenLite(ID_txt03,1,{css:{display:"block",scale:.1,opacity:1}}),
				new TweenLite(ID_txt03,1,{css:{display:"none",scale:.1,opacity:0}}),
				/*new TweenLite(zoomImg,3),
				new TweenLite(ID_txt03,3)*/
				])
				///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				
		
	tl.append([new TweenLite(ID_txt04,.3,{css:{opacity:1}}),
				new TweenLite(bubble1,.3,{css:{opacity:1}}) ,
	])	
	tl.to(zoomImgRight,1,({css:{opacity:0}}))
	tl.to(ID_txt05,1,({css:{opacity:0}}))	

	tl.append([	new TweenLite(zoomImgRight,.2,{css:{width:57,height:38,left:367,top:84,opacity:.3,scale:.3}}),
				new TweenLite(zoomImgRight,.7,{css:{width:70,height:47,left:367,top:84,opacity:.5,scale:.5}}),
				new TweenLite(zoomImgRight,.7,{css:{width:82,height:52,left:367,top:74,opacity:1,scale:.9}}),	
				new TweenLite(ID_txt05,.7,{css:{display:"block",scale:.1,opacity:0}}),
				new TweenLite(ID_txt05,.7,{css:{scale:1,opacity:1}}),
				new TweenLite(zoomImgRight,1),
				new TweenLite(ID_txt05,1)
			 ])
	tl.append([new TweenLite(zoomImgRight,.6,{css:{left:255}}),
				new TweenLite(ID_txt05,.6,{css:{left:255}}),
	])
	tl.append([new TweenLite(zoomImgRight,1.1,{css:{top:240}}),
				new TweenLite(ID_txt05,1.1,{css:{top:250}}),
	])
	tl.append([new TweenLite(zoomImgRight,1.1,{css:{left:112}}),
				new TweenLite(ID_txt05,1.1,{css:{left:112}}),
	])
	tl.append([new TweenLite(zoomImgRight,1.6,{css:{top:75}}),
				new TweenLite(ID_txt05,1.6,{css:{top:87}}),
	])
	tl.append([new TweenLite(zoomImgRight,.6,{css:{left:27}}),
				new TweenLite(ID_txt05,.6,{css:{left:27}}),
				new TweenLite(zoomImgRight,1),
				new TweenLite(ID_txt05,1)				
	])
	tl.append([
				new TweenLite(zoomImgRight,.6,{css:{opacity:1,scale:.8}}),
				new TweenLite(zoomImgRight,.6,{css:{opacity:0,scale:.3}}),
				new TweenLite(ID_txt05,.6,{css:{display:"block",scale:.1,opacity:1}}),
				new TweenLite(ID_txt05,.6,{css:{display:"none",scale:.1,opacity:0}}),
				])
	
	.to(pause,.05,{onComplete:myFunction});
	
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}


var animeArray = [{name:animation1,animFunction:animation}];