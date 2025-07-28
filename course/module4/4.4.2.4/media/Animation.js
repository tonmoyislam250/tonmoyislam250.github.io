
var animation1 = function (data)
{
	
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	
	var temp ='';
	temp = '<div id="maincontainer"><div id="imagecontainer">';
	temp +='<div id="text1" style="opacity:0"></div>';
	temp +='<div id="text1_1" style="opacity:0"></div>';
	temp +='<div id="arrow1" style="opacity:0"><img src="arrow1.png" width="51" height="12" /></div>';
	temp +='<div id="arrow2"><img src="arrow2.png" width="146" height="12" /></div>';
	temp +='<div id="arrow3" style="opacity:0"><img src="arrow3.png" width="51" height="12" /></div>';
	temp +='<div id="arrow4"><img src="arrow4.png" width="146" height="12" /></div>';
	temp +='<div id="server"></div>';
	temp +='<div id="switch"></div>';
	temp +='</div></div>';

$("#animDiv").html(temp);
$("#server").html($(data).find("component#ID_s2_txt01").text());
$("#switch").html($(data).find("component#ID_s2_txt02").text());
$("#text1").html($(data).find("component#ID_s2_txt03").text());
$("#text1_1").html($(data).find("component#ID_s2_txt04").text());
}

function animation()
	{   
		

		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn");
		text1  = $("#text1");
		text1_1  = $("#text1_1");
		arrow1  = $("#arrow1");
		arrow2  = $("#arrow2"); 
		arrow3  = $("#arrow3");
		arrow4  = $("#arrow4");
		
		tl.to([arrow1,text1],.6,{css:{opacity:1}})
		.append([
		new TweenLite(arrow1,1.2,{css:{left:"49px"}}),
        new TweenLite(arrow2,1,{css:{clip:"rect(0px, 146px, 16px, 0px)"}}),
		])
		tl.to([arrow1,arrow2],.5,{css:{opacity:1}})
		tl.to([arrow1,arrow2,text1],.4,{css:{opacity:0}})
		tl.to([arrow1,arrow2,text1],1.1,{css:{opacity:0}})
		
		tl.to([arrow3,text1_1],.6,{css:{opacity:1}})
		.append([
		new TweenLite(arrow3,1.2,{css:{left:"197px"}}),
        new TweenLite(arrow4,1,{css:{clip:"rect(0px, 146px, 16px, 0px)"}}),
		])
		tl.to([arrow3,arrow4],.5,{css:{opacity:1}})
		tl.to([arrow3,arrow4,text1_1],.4,{css:{opacity:0}})
		
		tl.to(pause,.05,{onComplete:myFunction1})
	}
	
	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	
	var animation2 = function (data)
{
	
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	
	var temp ='';
	temp = '<div id="maincontainer1"><div id="imagecontainer1">';
	temp +='<div id="text2" style="opacity:0"></div>';
	temp +='<div id="text3" style="opacity:0"></div>';	
	temp +='<div id="arrow5" style="opacity:0"><img src="arrow1.png" width="51" height="12" /></div>';
	temp +='<div id="arrow6"><img src="arrow2.png" width="146" height="12" /></div>';
	temp +='<div id="arrow7" style="opacity:0"><img src="arrow3.png" width="51" height="12" /></div>';
	temp +='<div id="arrow8"><img src="arrow4.png" width="146" height="12" /></div>';
	temp +='<div id="server1"></div>';
	temp +='<div id="switch1"></div>';	
	temp +='</div></div>';

$("#animDiv").html(temp);
$("#server1").html($(data).find("component#ID_s2_txt01").text());
$("#switch1").html($(data).find("component#ID_s2_txt02").text());
$("#text2").html($(data).find("component#ID_s3_txt04").text());
$("#text3").html($(data).find("component#ID_s3_txt03").text());
}

function animation3()
	{   		

		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn"); 		
		text2  = $("#text2");
		text3  = $("#text3");
		arrow5  = $("#arrow5");
		arrow6  = $("#arrow6"); 
		arrow7  = $("#arrow7");
		arrow8  = $("#arrow8");
	
		tl.to([arrow5,arrow7,text2,text3],.6,{css:{opacity:1}})
		.append([
		new TweenLite(arrow5,1.2,{css:{left:"46px"}}),
        new TweenLite(arrow6,1,{css:{clip:"rect(0px, 146px, 16px, 0px)"}}),
		new TweenLite(arrow7,1.2,{css:{left:"197px"}}),
        new TweenLite(arrow8,1,{css:{clip:"rect(0px, 146px, 16px, 0px)"}}),		
		])

		
		tl.to(pause,.05,{onComplete:myFunction1})
	}
	
	
var animeArray = [{name:animation1,animFunction:animation},{name:animation2,animFunction:animation3}];