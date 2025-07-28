var zoomImg;
var pause,play,restart;
var animation1 = function(data)
{
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

var temp = '';
temp +='<div id="main_wrapper"><div id="main_container"></div><div id="sub_container"></div><div><img id="mainImg" src="3_3_1_4.png"><img id="zoomImg" src="3_3_1_4B.png"/><div id="purpleShadowBox"></div><div id="purpleShadowBox1"></div><div id="purpleShadowBox2"></div><div id="purpleShadowBox3"></div><div id="segment"><div id="data"></div><div id="tcp"></div><div id="ip"></div><div id="ethernet"></div><div id="empty"></div></div><img id="Tween32"  src="Tween32.png"/></div></div>';
temp += '<div id="ID_txt02"></div><div id="ID_txt03"></div>'
temp += '<div id="ID_txt04"></div><div id="ID_txt05"></div>'
temp += '<div id="ID_txt06"></div><div id="ID_txt07"></div>'
temp += '<div id="ID_txt08"></div><div id="ID_txt09"></div>'
temp += '<div id="ID_txt10"></div><div id="ID_txt11"></div>'
temp += '<div id="textsegment"><div id="ID_txt12"></div><div id="ID_txt13"></div>'
temp += '<div id="ID_txt14"></div><div id="ID_txt16"></div></div>'
temp += '<div id="ID_txt15"></div>'

$("#animDiv").html(temp);

$("#ID_txt02").html($(data).find("component#ID_txt02").text());$("#ID_txt03").html($(data).find("component#ID_txt03").text());
$("#ID_txt04").html($(data).find("component#ID_txt04").text());$("#ID_txt05").html($(data).find("component#ID_txt05").text());
$("#ID_txt06").html($(data).find("component#ID_txt06").text());$("#ID_txt07").html($(data).find("component#ID_txt07").text());
$("#ID_txt08").html($(data).find("component#ID_txt08").text());$("#ID_txt09").html($(data).find("component#ID_txt09").text());
$("#ID_txt10").html($(data).find("component#ID_txt10").text());$("#ID_txt11").html($(data).find("component#ID_txt11").text());
$("#ID_txt12").html($(data).find("component#ID_txt12").text());$("#ID_txt13").html($(data).find("component#ID_txt13").text());
$("#ID_txt14").html($(data).find("component#ID_txt14").text());$("#ID_txt16").html($(data).find("component#ID_txt16").text());
$("#ID_txt15").html($(data).find("component#ID_txt15").text());
}
function animation()
	{ 
		zoomImg       = $("#zoomImg")
		pause         = $("#pauseBtn");
		play          = $("#playBtn")
		restart       = $("#restartBtn"); 
	
	tl.to(zoomImg,.2,{css:{left:-54,top:190,opacity:0,scale:.1}}) 
	.to(zoomImg,2,{css:{left:59,top:75,opacity:1,scale:.9}})
	.to(zoomImg,2) 
	.to(zoomImg,2,{css:{left:133,top:170,opacity:.6,scale:.2}}) 
	.to(zoomImg,1,{css:{alpha:0}})
	.to(purpleShadowBox,.4,{css:{opacity:1}})
	.to(purpleShadowBox,.4,{css:{opacity:0}})
	.to(purpleShadowBox,.4,{css:{opacity:1}})
	.to(purpleShadowBox,.4,{css:{opacity:0}})
	.to(purpleShadowBox,.4,{css:{opacity:1}})
	.to(purpleShadowBox,.4,{css:{opacity:0}})
	.to(tcp,.9,{css:{width:"39px",display:"block"}})
	.to(ID_txt13,.1,{css:{display:"block"}})
	.to(purpleShadowBox1,.4,{css:{opacity:.7}})
	.to(purpleShadowBox1,.4,{css:{opacity:0}})
	.to(purpleShadowBox1,.4,{css:{opacity:.7}})
	.to(purpleShadowBox1,.4,{css:{opacity:0}})
	.to(purpleShadowBox1,.4,{css:{opacity:.7}})
	.to(purpleShadowBox1,.4,{css:{opacity:0}})
	.to(ip,.9,{css:{width:"27px",display:"block"}})
	.to(ID_txt14,.1,{css:{display:"block"}})
	.to(purpleShadowBox2,.4,{css:{opacity:.7}})
	.to(purpleShadowBox2,.4,{css:{opacity:0}})
	.to(purpleShadowBox2,.4,{css:{opacity:.7}})
	.to(purpleShadowBox2,.4,{css:{opacity:0}})
	.to(purpleShadowBox2,.4,{css:{opacity:.7}})
	.to(purpleShadowBox2,.4,{css:{opacity:0}})
	.append([new TweenLite(ethernet,.9,{css:{width:"64px",display:"block"}}),
			 new TweenLite(empty,.9,{css:{width:"13px",display:"block"}})])
	.to(ID_txt16,.1,{css:{display:"block"}})
	.to(purpleShadowBox3,.4,{css:{opacity:.7}})
	.to(purpleShadowBox3,.4,{css:{opacity:0}})
	.to(purpleShadowBox3,.4,{css:{opacity:.7}})
	.to(purpleShadowBox3,.4,{css:{opacity:0}})
	.to(purpleShadowBox3,.4,{css:{opacity:.7}})
	.to(purpleShadowBox3,.4,{css:{opacity:0}})
	.append([
		new TweenLite(ID_txt03,.1,{css:{display:"none"}}),
		new TweenLite(segment,.8,{css:{top:287,left:27}}),
		new TweenLite(textsegment,.8,{css:{top:60,left:-8}}),
		new TweenLite(ID_txt03,.1,{css:{display:"block"}})			 
		]) 
	.to(textsegment,.4,{css:{alpha:0}})
	.to(segment,.4,{css:{alpha:0}})
	.to(Tween32,.4,{css:{opacity:1}})
	.to(Tween32,.8,{css:{left:195}})/**/
	.to(pause,.05,{onComplete:myFunction});
	
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}


var animeArray = [{name:animation1,animFunction:animation}];