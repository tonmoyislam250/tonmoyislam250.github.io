var yellow_Image,yellow_second,yellow_third,yellow_fourth;
var firstbox,secondbox,thirdbox;
var arow1,arow2,qMark;
var pause,play,restart;

	
	var url=location.href;
	url=url.split("/")
	url=url[url.length-3];
	var xmlFile='media_'+url+'.xml';
	


var animation1 = function (data)
{
	
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	var temp = '<div id="main_wrapper"><div id="main_container"><div id="envelop_Yellow"><img src="envelope_closed_static.png"id="yellow_1"style="position:relative;opacity:0"/><img src="envelope_closed_static.png" id="yellow_2" style="position:relative;opacity:0"/><img src="envelope_closed_static.png"id="yellow_3"style="position:relative;opacity:0"/><img src="envelope_closed_static.png"id="yellow_4"style="position:relative;opacity:0"/><img src="arrow1.png"id="arrow1" style="position:relative;opacity:0" width="8" height="42"/><img src="arrow3.png"id="arrow2" style="position:relative;opacity:0"/><img src="questionmark.png"id="questionmark" style="position:relative;display:none"/><div id="ID_txt01" style="position:absolute;opacity:0;" ></div><div id="ID_txt02" style="position:absolute;opacity:0;" ></div><div id="ID_txt03"  style="position:absolute;opacity:0;" ></div></div>';
temp += '</div></div>';

temp += '<div id="inetbox" ></div>'
temp += '<div id="captiontext"></div>'

$("#animDiv").html(temp);

	$("#inetbox").html($(data).find("component#ID_txt04").text());
	$("#captiontext").html($(data).find("component#ID_caption").text());
	$("#ID_txt01").html($(data).find("component#ID_txt01").text());	
	$("#ID_txt02").html($(data).find("component#ID_txt02").text());
	$("#ID_txt03").html($(data).find("component#ID_txt03").text());

}

function animation()
	{   
	yellow_Image  = $("#yellow_1")
	firstbox	  = $("#ID_txt01"); 
	secondbox	  = $("#ID_txt02");
	thirdbox      = $("#ID_txt03");
	yellow_second = $("#yellow_2"); 
	yellow_third  = $("#yellow_3");
	yellow_fourth = $("#yellow_4");
	arow1		  = $("#arrow1");
	arow2		  = $("#arrow2");
	qMark         = $("#questionmark");
	pause         = $("#pauseBtn");
    play          = $("#playBtn")
	restart       = $("#restartBtn"); 
	
	tl.to(yellow_Image, .9, {css:{opacity:"1"}})
	.to(firstbox, 1.5, {css:{opacity:"1"}})
	.to(yellow_Image, 2.5 ,{css:{left:"254px"}})
	.to(firstbox,.05,{css:{opacity:"0"}})
	.to(yellow_Image,.8,{css:{opacity:"0"}})
	.to(yellow_second,.9,{css:{opacity:"1"}})
	.to(yellow_second, .8,{css:{left:"30px",top:"-1px"}})
	.to(secondbox,1.5, {css:{opacity:"1"}})
	.to(yellow_second,.9,{css:{opacity:"0"}})
	.to(yellow_second, 2.5,{css:{left:"105px",top:"-22px"}})
	.to(yellow_second,.9,{css:{opacity:"1"}})
	.to(yellow_second, 2.5,{css:{left:"-24px",top:"33px"}})
	.to(secondbox,.05,{css:{opacity:"0"}})
	.to(yellow_second,.01,{css:{opacity:"0"}})
	.to(yellow_third,.01,{css:{opacity:"1"}})
	.to(yellow_third, 2.5,{css:{left:"103px",top:"77px"}})	
	
	.append([new TweenLite(arow1,.9,{css:{opacity:"1"}}),
        new TweenLite(arow2,.9,{css:{opacity:"1"}})])
	
	.append([new TweenLite(arow1,.9,{css:{opacity:"0"}}),
        new TweenLite(arow2,.9,{css:{opacity:"0"}})])
		
			.append([new TweenLite(arow1,.9,{css:{opacity:"1"}}),
        new TweenLite(arow2,.9,{css:{opacity:"1"}})])
	
	.append([new TweenLite(arow1,.9,{css:{opacity:"0"}}),
        new TweenLite(arow2,.9,{css:{opacity:"0"}})])
		
			.append([new TweenLite(arow1,.9,{css:{opacity:"1"}}),
        new TweenLite(arow2,.9,{css:{opacity:"1"}})])
	
	/*	.to(arow1, .9,{css:{opacity:"1"}})
	.to(arow1, .9,{css:{opacity:"0"}})
	.to(arow1, .9,{css:{opacity:"1"}})
	.to(arow1, .9,{css:{opacity:"0"}})
	.to(arow1, .9,{css:{opacity:"1"}})*/

	.to(qMark,.5,{css:{display:"block"}})
	.to(thirdbox,1.2,{css:{opacity:"1"}})
	.to(arow2, .01,{css:{opacity:"1"}})
	.to(arow1, .5,{css:{opacity:"0"}})	
	.to(qMark, .5,{css:{opacity:"0"}})
	.to(yellow_third,.001,{css:{opacity:"0"}})
	.to(yellow_fourth,.001,{css:{opacity:"1"}})
	.to(yellow_fourth,2.5,{css:{left:"253px",top:"-22px"}})
	.to(pause,.05,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

var animeArray = [{name:animation1,animFunction:animation}];