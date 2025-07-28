var yellow_Image,yellow_second,yellow_third,yellow_fourth;
var firstbox,secondbox,thirdbox;
var arow1,arow2,qMark;
var pause,play,restart;
var animation1 = function(data)
{

var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	var temp = '<div id="main_wrapper"><div id="main_container"><div id="envelop"><img src="yellow.png" id="yellow" style="position:relative;opacity:0"/></div><div id="question"><img src="question.png" id="question_red" style="position:relative;opacity:0"/></div><div id="arrow_str"><img src="arrow_start.png" id="arrow_start" style="position:relative; opacity:0"/></div><div id="arrow_str2"><img src="arrow_start_2.png" id="arrow_start2" style="position:relative; opacity:0"/></div><div id="arrow_mid"><img  id="arrow_middle" style="position:relative; opacity:0"/></div><div id="arrow_end"><img  id="arrow_ended" style="position:relative; opacity:0"/></div><div id="popup"><img src="popup.png" id="popup_box" style="position:relative;opacity:0"/></div><div id="ID_txt01"></div><div id="ID_txt02"></div><div id="ID_txt03-1"></div><div id="ID_txt03-2"></div><div id="ID_txt03"></div><div id="ID_txt04"></div><div id="ID_txt05"></div></div>';
temp += '</div></div>';

temp += '<div id="inetbox" ></div>'
temp += '<div id="captiontext"></div>'
			
		$("#animDiv").html(temp);

/*$("#inetbox").html($(data).find("component#ID_txt04").text());*/
$("#captiontext").html($(data).find("component#ID_caption").text());
$("#ID_txt01").html($(data).find("component#ID_txt01").text());	
$("#ID_txt02").html($(data).find("component#ID_txt02").text());
$("#ID_txt03").html($(data).find("component#ID_txt03").text());
$("#ID_txt03-1").html($(data).find("component#ID_txt03-1").text());
$("#ID_txt03-2").html($(data).find("component#ID_txt03-2").text());
$("#ID_txt04").html($(data).find("component#ID_txt04").text());	
$("#ID_txt05").html($(data).find("component#ID_txt05").text()); 

}



		

	function animation()
	{   
	yellow_Image  = $("#yellow")
	question	  = $("#question_red");
	arrow_started = $("#arrow_start");
	arrow_started2 = $("#arrow_start");
	arrow_middled = $("#arrow_middle");
	arrow_ended = $("#arrow_ended");
	popup_text  = $("#popup_box");
	pause         = $("#pauseBtn");
	play          = $("#playBtn")
	restart       = $("#restartBtn"); 
	 
	
	tl.to(yellow_Image, .9, {css:{opacity:"1"}})
	.to(yellow_Image, 1 ,{css:{left:'45px',top:'16px'}})
	.to(yellow_Image,1,{css:{opacity:"0"}})
	.to(yellow_Image,1,{css:{opacity:"1"}})
	.to(yellow_Image, 1.5 ,{css:{left:'113px',top:'68px'}})
	.to(question,.9,{css:{opacity:"1"}})
	.to(question,.8,{css:{opacity:"0"}})
	.to(question,.6,{css:{opacity:"1"}})

	.append([new TweenLite(arrow_started,.5,{css:{opacity:"1"}}),
	 new TweenLite(arrow_started2,.3,{css:{left:'174px',top:'108px'}})])

	.to(arrow_started,.09,{css:{opacity:"0"}})

	.to(popup_text,.9,{css:{opacity:"1"}})
	
	.to(arrow_started,.7,{css:{opacity:"1"}})
	.to(arrow_started,.7,{css:{opacity:"0"}})
	
	.to(arrow_started,.7,{css:{opacity:"1"}})
	.to(arrow_started,.7,{css:{opacity:"0"}})
	
	.to(arrow_started,.7,{css:{opacity:"1"}})
	.to(arrow_started,.7,{css:{opacity:"0"}})
	
	.append([new TweenLite(question,.1,{css:{opacity:"0"}}),
	 new TweenLite(popup_text,.1,{css:{opacity:"0"}})])

	.to(yellow_Image,1.3,{css:{left:'166px',top:'42px'}})
	.to(arrow_ended,1,{css:{opacity:"0"}})
	.to(yellow_Image,1.7,{css:{left:'294px',top:'18px'}})
	.to(arrow_ended,1,{css:{opacity:"0"}})
	.to(yellow_Image,.9,{css:{left:'345px',top:'40px'}})
	.to(yellow_Image,.9,{css:{opacity:"0"}})
	.to(yellow_Image,.9,{css:{opacity:"1"}})
	.to(yellow_Image,.9,{css:{opacity:"0"}})
	.to(yellow_Image,.9,{css:{opacity:"1"}})
	.to(yellow_Image,.9,{css:{opacity:"0"}})
	.to(yellow_Image,.9,{css:{opacity:"1"}})
	.to(yellow_Image,.9,{css:{opacity:"0"}})
	.to(pause,.05,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	
	

var animeArray = [{name:animation1,animFunction:animation}];