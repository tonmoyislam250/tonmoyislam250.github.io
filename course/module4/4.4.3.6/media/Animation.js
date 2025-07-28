
var animation1 = function (data)
{
	
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	
	var temp ='';
	temp = '<div id="maincontainer"><div id="imagecontainer">';
	temp +='<div id="A"></div>';
	temp +='<div id="B"></div>';
	temp +='<div id="C"></div>';
	temp +='<div id="D"></div>';
	//Animation Resources Starts
	temp +='<div id="frame" style="display:none;"><span></span></div>';
	temp +='<div id="frstpop" style="display:none;"><span></span></div>';
	temp +='<div id="scndpop" style="display:none;"><span></span></div>';
	temp +='<div id="thrdpop" style="display:none;"><span></span></div>';
	temp +='<div id="frthpop" style="display:none;"><span></span></div>';
	temp +='<div id="fifthpop" style="display:none;"><span></span></div>';
	temp +='<div id="sixthpop" style="display:none;"><span></span></div>';
	temp +='<div id="svnthpop" style="display:none;"><span></span></div>';
	temp +='</div></div>';

$("#animDiv").html(temp);
$("#frstpop span").html($(data).find("component#ID_txt01").text());
$("#scndpop span").html($(data).find("component#ID_txt02").text());
$("#thrdpop span").html($(data).find("component#ID_txt03").text());
$("#frthpop span").html($(data).find("component#ID_txt04").text());
$("#fifthpop span").html($(data).find("component#ID_txt05").text());
$("#sixthpop span").html($(data).find("component#ID_txt06").text());
$("#svnthpop span").html($(data).find("component#ID_txt07").text());
$("#frame span").html($(data).find("component#ID_txt08").text());
$("#A").html($(data).find("component#ID_txt10").text());
$("#B").html($(data).find("component#ID_txt11").text());
$("#C").html($(data).find("component#ID_txt12").text());
$("#D").html($(data).find("component#ID_txt13").text());
}

function animation()
	{   
		

		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn"); 
		tl.to(frstpop,.8,{css:{display:"block"}})
		tl.to(frame,1.9,{css:{display:"block"}})
		//tl.to(frame,1.7,{css:{top:"161px",left:"80px"}})
		tl.to(frame,1.7,{css:{bezier: {values:[{left:35, top:160}, {left:84, top:164}], autoRotate:true}}});
		tl.to(scndpop,.4,{css:{display:"block"}})
		tl.to(scndpop,.4,{css:{display:"block"}})
		tl.to(thrdpop,1.7,{css:{display:"block"}})
		tl.to(frame,1.6,{css:{bezier: {values:[{left:156, top:132}, {left:176, top:106}], autoRotate:true}}});
		tl.to(frthpop,.5,{css:{display:"block"}})
		tl.to(frthpop,.5,{css:{display:"block"}})
		tl.to(fifthpop,.5,{css:{display:"block"}})
		tl.to(frame,1.6,{css:{bezier: {values:[{left:140, top:27}, {left:87, top:19}], autoRotate:true}}});
		tl.to(sixthpop,.4,{css:{display:"block"}})
		tl.to(sixthpop,.4,{css:{display:"block"}})
		tl.to(svnthpop,.4,{css:{display:"block"}})
		tl.to(frame,.4,{css:{display:"none"}})
		tl.to(pause,.05,{onComplete:myFunction1})
	}
	
	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
		
var animeArray = [{name:animation1,animFunction:animation}];