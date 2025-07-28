var animation1 = function (data)
{
	
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	
	var temp ='';
	var temp ='';
	temp = '<div id="maincontainer">';
	temp +='<div id="table"></div>';
	temp +='<div id="imagecontainer">';
	temp +='<div id="computer"><img src="computer.png" width="50" height="41" /></div>';
	
	//Animation Resources Starts	
	temp +='<div id="text0" style="opacity:0"></div style="opacity:0">';
	temp +='<div id="text1"></div>';
	temp +='<div id="text2" style="opacity:0"></div>';	
	temp +='<div id="text3"></div>';	
	temp +='<div id="text4" style="opacity:0"></div>';
	temp +='<div id="text5" style="opacity:0"></div>';
	temp +='<div id="text6"></div>';
	temp +='<div id="text7" style="opacity:0"></div>';
	temp +='<div id="text8" style="opacity:0"><span></span></div>';
	temp +='<div id="text9" style="opacity:0"></div>';
	temp +='<div id="text10" style="opacity:0"><span></span></div>';
	temp +='<div id="text11" style="opacity:0"></div>';
	temp +='<div id="arrow1"><img src="arrow1.png" width="54" height="3" /></div>';
	temp +='<div id="arrow1head" style="opacity:0"><img src="arrow1-1.png" width="24" height="10" /></div>';
	temp +='<div id="arrow2"><img src="arrow2.png" width="3" height="24" /></div>';
	temp +='<div id="arrow2head" style="opacity:0"><img src="arrow2-1.png" width="10" height="23" /></div>';
	temp +='<div id="arrow3"><img src="arrow1.png" width="54" height="3" /></div>';
	temp +='<div id="arrow3head" style="opacity:0"><img src="arrow1-1.png" width="24" height="10" /></div>';
	temp +='<div id="arrow4"><img src="arrow4.png" width="3" height="32" /></div>';
	temp +='<div id="arrow4head" style="opacity:0"><img src="arrow4-1.png" width="10" height="18" /></div>';
	temp +='<div id="system-red1" style="opacity:0"><img src="computer-red.png" width="52" height="43" /></div>';
	temp +='<div id="system-red2" style="opacity:0"><img src="computer-red.png" width="52" height="43" /></div>';
	
	temp +='</div></div>';

$("#animDiv").html(temp);
$("#table").html($(data).find("component#ID_s2_table").text());
$("#text0").html($(data).find("component#ID_s2_txt01").text());
$("#text1").html($(data).find("component#ID_s2_txt02").text());
$("#text2").html($(data).find("component#ID_s2_txt03").text());
$("#text3").html($(data).find("component#ID_s2_txt04").text());
$("#text4").html($(data).find("component#ID_s2_txt05").text());
$("#text5").html($(data).find("component#ID_s2_txt07").text());
$("#text6").html($(data).find("component#ID_s2_txt08").text());
$("#text7").html($(data).find("component#ID_s2_txt09").text());
$("#text8 span").html($(data).find("component#ID_s2_txt10").text());
$("#text9").html($(data).find("component#ID_s2_txt11").text());
$("#text10 span").html($(data).find("component#ID_s2_txt12").text());
}

function animation()
	{   

		firstBtn= $("#firstBtn");
		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn"); 
		text0 = $("#text0");
		text2 = $("#text2");
		text7 = $("#text7");
		text8 = $("#text8");
		text9 = $("#text9");
		text5 = $("#text5");
		text4 = $("#text4");
		text10 = $("#text10");
		computer = $("#computer");
		arrow1head = $("#arrow1head")	
		arrow1	   = $("#arrow1");
		arrow2head = $("#arrow2head")	
		arrow2	   = $("#arrow2");	
		arrow3head = $("#arrow3head")	
		arrow3	   = $("#arrow3");	
		systemred1 = $("#system-red1")
		systemred2 = $("#system-red2")
		arrow4head = $("#arrow4head")	
		arrow4	   = $("#arrow4");
		
		
		
		tl.to([text0,text2],1.2,{css:{opacity:1}});
		tl.to(computer,.5,{css:{display:"none"}});
		tl.to(computer,.5,{css:{display:"none"}});
		tl.to(computer,.3,{css:{display:"block"}});
		tl.to(text7,.3,{css:{opacity:1}});
		tl.to(computer,.4,{css:{display:"none"}});
		tl.to(computer,.4,{css:{display:"none"}});
		tl.to(computer,.2,{css:{display:"block"}});
		tl.to(text9,.3,{css:{opacity:1}});
		tl.to(computer,.4,{css:{display:"none"}});
		tl.to(computer,.4,{css:{display:"none"}});
		tl.to(computer,.5,{css:{display:"block"}});
		tl.to(text8,.8,{css:{opacity:1,transform:"scale(1,1)"}})
		tl.to(text5,1.6,{css:{opacity:1}});
		tl.to(arrow1head,.05,{css:{opacity:1}})
		.append([
		new TweenLite(arrow1head,.9,{css:{left:"111px"}}),
		new TweenLite(arrow1,.8,{css:{clip:"rect(0px 70px 20px 0px)"},delay:.01}),
		])	
		tl.to(arrow2head,.05,{css:{opacity:1}})
		.append([
		new TweenLite(arrow2head,.9,{css:{top:"77px"}}),
		new TweenLite(arrow2,.8,{css:{clip:"rect(0px 3px 22px 0px)"},delay:.01}),
		])
		tl.to(text8,.09,{css:{opacity:0}})
		tl.to(arrow3head,.05,{css:{opacity:1}})
		.append([
		new TweenLite(arrow3head,.9,{css:{left:"232px"}}),
		new TweenLite(arrow3,.8,{css:{clip:"rect(0px 60px 20px 0px)"},delay:.01}),
		])	
		tl.to(text4,.4,{css:{opacity:1}});
		tl.to(systemred1,.3,{css:{opacity:1}});
		tl.to(systemred1,.5,{css:{opacity:1}});
		tl.to(text10,.8,{css:{opacity:1,transform:"scale(1,1)"}})
		tl.to(text10,.5,{css:{opacity:1}})
		tl.to(arrow4head,.05,{css:{opacity:1}})
		.append([
		new TweenLite(arrow4head,.9,{css:{top:"60px"}}),
		new TweenLite(arrow4,.8,{css:{clip:"rect(0px 3px 33px 0px)"},delay:.01}),
		])
		tl.to(systemred2,.1,{css:{opacity:1}});
		tl.to(systemred2,1.2,{css:{opacity:1}});
		
		
		
		
		
		
		
		
		
		tl.to(pause,.05,{onComplete:myFunction1})
	}
	
	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}	
	
	

var animeArray = [{name:animation1,animFunction:animation}];