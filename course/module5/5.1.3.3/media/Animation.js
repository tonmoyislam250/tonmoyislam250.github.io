var pause,play,restart;
var animation1 = function(data)
{
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	
	var temp ='';
	temp += '<div id="envelop"><img src="envelope.png"/></div>';
	temp += '<div id="container"><div id="imagecontainer"><img id="mainImg" src="10_1_3_3.png" height="330" width="455" /><img src="Switch-workgroup.png" height="33" width="68" id="switch"/></div></div>';
	temp += '<div id="ID_title"></div>';
	temp += '<div><img id="bubble" src="ID_bubble_01.png"></div>';
	temp += '<div id="ID_bubble_01"></div>';
	temp += '<div id="ID_txt01"></div>';
	temp += '<div id="ID_txt02">H1</div>';
	temp += '<div id="ID_txt03"></div>';
	temp += '<div id="ID_txt04"></div>';
	temp += '<div id="ID_txt05"></div>';
	temp += '<div id="ID_txt06"></div>';
	temp += '<div id="ID_txt07"></div>';
	temp += '<div id="ID_txt08"></div>';
	temp += '<div id="ID_txt09"></div>';
	temp += '<div id="ID_txt10"></div>';
	temp += '<div id="ID_txt11"></div>';
	temp += '<div id="ID_txt12"></div>';
	temp += '<div id="ID_txt13"></div>';
	temp += '<div id="ID_txt14"></div>';
	temp += '<div id="ID_txt15"></div>';
	temp += '<div id="ID_txt16"></div>';
	temp += '<div id="ID_txt17"></div>';
	/*temp += '<div id="ID_txt18"></div>';*/
	
		$("#animDiv").html(temp);
    	$("#ID_title").html($(data).find("component#ID_title").text());
		$("#ID_bubble_01").html($(data).find("component#ID_bubble_01").text());
		$("#ID_txt01").html($(data).find("component#ID_txt01").text());
		//$("#ID_txt02").html($(data).find("component#ID_txt02").text());
		$("#ID_txt03").html($(data).find("component#ID_txt03").text());
		$("#ID_txt04").html($(data).find("component#ID_txt04").text());
		$("#ID_txt05").html($(data).find("component#ID_txt05").text());
		$("#ID_txt06").html($(data).find("component#ID_txt06").text());
		$("#ID_txt07").html($(data).find("component#ID_txt07").text());
		$("#ID_txt08").html($(data).find("component#ID_txt08").text());
		$("#ID_txt09").html($(data).find("component#ID_txt09").text());
		$("#ID_txt10").html($(data).find("component#ID_txt10").text());
		$("#ID_txt11").html($(data).find("component#ID_txt11").text());
		$("#ID_txt12").html($(data).find("component#ID_txt12").text());
		$("#ID_txt13").html($(data).find("component#ID_txt13").text());
		$("#ID_txt14").html($(data).find("component#ID_txt14").text());
		$("#ID_txt15").html($(data).find("component#ID_txt15").text());
		$("#ID_txt16").html($(data).find("component#ID_txt16").text());
		$("#ID_txt17").html($(data).find("component#ID_txt17").text());
		$("#ID_txt18").html($(data).find("component#ID_txt18").text());
}

	function animation()
	{   
	pause = $("#pauseBtn");
	play  = $("#playBtn")
	restart= $("#restartBtn"); 
	tl.append([new TweenLite(ID_bubble_01,.8,{css:{opacity:1}}),
				new TweenLite(bubble,.8,{css:{opacity:1}}) ,
	])
	tl.to(envelop,.3,{css:{opacity:0,scale:.3}}),
	tl.to(envelop,.5,{css:{opacity:1,scale:1}}),
	tl.to(envelop,2,{css:{left:219,top:75}}),
	tl.to(envelop,2,{css:{left:333,top:44,scale:.8}}),
	
	tl.to(pause,.05,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

var animeArray = [{name:animation1,animFunction:animation}];// JavaScript Document