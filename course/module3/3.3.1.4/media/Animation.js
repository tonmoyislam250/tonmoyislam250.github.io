var zoomImg;
var pause,play,restart;
var animation1 = function(data)
{
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

var temp = '';
temp +='<div id="main_wrapper"><div id="main_container"></div><div id="sub_container"></div><div><img id="mainImg" src="3_3_1_5.png"><img id="Img" src="3_3_1_5A.png"/><img id="zoomImg" src="3_3_1_5B.png"/><div id="purpleShadowBox"></div><div id="purpleShadowBox1"></div><div id="purpleShadowBox2"></div><div id="purpleShadowBox3"></div><div id="segment"><div id="_data"></div><div id="tcp"></div><div id="ip"></div><div id="ethernet"></div><div id="empty"></div></div><img id="Tween32"  src="Tween32.png"/><img id="stream"  src="stream.png"/></div></div>';
temp += '<div id="ID_txt02"></div><div id="ID_txt03"></div>'
temp += '<div id="ID_txt04"></div><div id="ID_txt05"></div>'
temp += '<div id="ID_txt06"></div><div id="ID_txt07ab"></div>'
temp += '<div id="ID_txt08"></div><div id="ID_txt09"></div>'
temp += '<div id="ID_txt10"></div><div id="ID_txt12"></div><div id="ID_txt13"></div>'
temp += '<div id="textsegment"><div id="ID_txt18"></div><div id="ID_txt19"></div>'
temp += '<div id="ID_txt20"></div><div id="ID_txt21"></div></div>'


$("#animDiv").html(temp);

$("#ID_txt02").html($(data).find("component#ID_txt02").text());$("#ID_txt03").html($(data).find("component#ID_txt03").text());
$("#ID_txt04").html($(data).find("component#ID_txt04").text());$("#ID_txt05").html($(data).find("component#ID_txt05").text());
$("#ID_txt06").html($(data).find("component#ID_txt06").text());$("#ID_txt07ab").html($(data).find("component#ID_txt07ab").text());
$("#ID_txt08").html($(data).find("component#ID_txt08").text());$("#ID_txt09").html($(data).find("component#ID_txt09").text());
$("#ID_txt10").html($(data).find("component#ID_txt10").text());$("#ID_txt12").html($(data).find("component#ID_txt12").text());
$("#ID_txt13").html($(data).find("component#ID_txt13").text());$("#ID_txt18").html($(data).find("component#ID_txt18").text());
$("#ID_txt19").html($(data).find("component#ID_txt19").text());$("#ID_txt20").html($(data).find("component#ID_txt20").text());
$("#ID_txt21").html($(data).find("component#ID_txt21").text());
}
function animation()
	{ 
		zoomImg       = $("#zoomImg")
		pause         = $("#pauseBtn");
		play          = $("#playBtn")
		restart       = $("#restartBtn"); 

		_data       = $("#_data");
		Tween32       = $("#Tween32"); 
		Tween32       = $("#Tween32");
		Tween32       = $("#Tween32");
		Tween32       = $("#Tween32");
		Tween32       = $("#Tween32");
	
	tl.to(Tween32,1,{css:{left:133.5}})
	.to(Tween32,.8,{css:{alpha:0}})
	.to([_data,tcp,ip,ethernet,empty],.1,{css:{opacity:.1}}) 
	.to([_data,tcp,ip,ethernet,empty],.8,{css:{top:0,opacity:1}})
	.to(textsegment,.8,{css:{opacity:1}}) 
	.to(purpleShadowBox3,.4,{css:{opacity:1}})
	.to(purpleShadowBox3,.4,{css:{opacity:0}})
	.to(purpleShadowBox3,.4,{css:{opacity:1}})
	.to(purpleShadowBox3,.4,{css:{opacity:0}})
	.to(purpleShadowBox3,.4,{css:{opacity:1}})
	.to(purpleShadowBox3,.4,{css:{opacity:0}})	
	.append([
		new TweenLite(ID_txt18,.1,{css:{display:"none"}}),
		new TweenLite([ethernet,empty],.9,{css:{width:"0px",display:"none"}}) 
		])  
	.to(purpleShadowBox2,.4,{css:{opacity:1}})
	.to(purpleShadowBox2,.4,{css:{opacity:0}})
	.to(purpleShadowBox2,.4,{css:{opacity:1}})
	.to(purpleShadowBox2,.4,{css:{opacity:0}})
	.to(purpleShadowBox2,.4,{css:{opacity:1}})
	.to(purpleShadowBox2,.4,{css:{opacity:0}})
	.append([new TweenLite(ip,.9,{css:{width:"0px",display:"none"}}),
			 new TweenLite(ID_txt19,.1,{css:{display:"none"}})])	
	.to(purpleShadowBox1,.4,{css:{opacity:1}})
	.to(purpleShadowBox1,.4,{css:{opacity:0}})
	.to(purpleShadowBox1,.4,{css:{opacity:1}})
	.to(purpleShadowBox1,.4,{css:{opacity:0}})
	.to(purpleShadowBox1,.4,{css:{opacity:1}})
	.to(purpleShadowBox1,.4,{css:{opacity:0}})
	.append([new TweenLite(tcp,.9,{css:{width:"0px",display:"none"}}),
			 new TweenLite(ID_txt20,.1,{css:{display:"none"}})])
	.to(purpleShadowBox,.4,{css:{opacity:1}})
	.to(purpleShadowBox,.4,{css:{opacity:0}})
	.to(purpleShadowBox,.4,{css:{opacity:1}})
	.to(purpleShadowBox,.4,{css:{opacity:0}})
	.to(purpleShadowBox,.4,{css:{opacity:1}})
	.to(purpleShadowBox,.4,{css:{opacity:0}}) 
	.to(zoomImg,.2,{css:{left:296,top:193,opacity:0,scale:.1}})  
	.append([ 
		new TweenLite(zoomImg,1.2,{css:{left:275,top:66,opacity:1,scale:1.1}}),
		new TweenLite([ID_txt02,ID_txt03,ID_txt04,ID_txt05,ID_txt07ab,ID_txt08,ID_txt09,ID_txt10,ID_txt21,ID_txt06],.1,{css:{display:"none"}}), 
		new TweenLite([Img,_data],.9,{css:{display:"none",opacity:0}})
		])    
	.to(pause,.05,{onComplete:myFunction});
	
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}


var animeArray = [{name:animation1,animFunction:animation}];