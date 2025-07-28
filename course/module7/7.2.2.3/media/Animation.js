
var animation1 = function (data)
{
	
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	
	var temp ='';
	temp = '<div id ="maincontainer"><div id="imagecontainer">';
	
	//Slide1 starts
	temp += '<div id="envelop1" style="display:none;"><img src="envelope.png" width="39" height="25" /></div>';
	temp += '<div id="envelop2"><img src="envelope.png" width="65" height="41.50" style="opacity:0" /></div>';
	temp += '<div id="tick1" style="opacity:0;"><img src="FeedbackCorrect.png" width="28" height="28"/></div>';
	temp += '<div id="text1" style="display:none;"></div>';
	temp += '<div id="clock" style="display:none;"><img src="timer2.gif" width="33" height="33" style="position: absolute; left:     18px; top: 18px;"/></div>';
	temp += '<div id="text2" style="opacity:0;"></div>';
	temp += '<div id="text3" style="opacity:0;"></div>';
	temp += '<div id="text4" style="opacity:0;"></div>';
	temp += '<div id="text5" style="opacity:0;"></div>';
	temp += '<div id="text6" style="opacity:0;"></div>';
	
	//Slide2 Starts
	temp += '<div id="envelop3" style="opacity:0;"><img src="envelope.png" width="39" height="25" /></div>';
	temp += '<div id="text7" style="opacity:0;"></div>';
	temp += '<div id="clock1" style="opacity:0;"><img src="timer2.gif" width="33" height="33" style="position: absolute; left:     18px; top: 18px;"/></div>';
	temp += '<div id="text8" style="opacity:0;"></div>';
	temp += '<div id="envelop4"><img src="envelope.png" width="39" height="25" style="display:none;"/></div>';
	temp += '<div id="text9" style="opacity:0;"></div>';
	temp += '<div id="envelop5" style="opacity:0;"><img src="envelope.png" width="39" height="25"/></div>';
	temp += '<div id="notallowed1" ><img src="cross-bar.png" width="46" height="46" style="opacity:.5;display:none;"/></div>';
	temp += '<div id="notallowed" ><img src="cross-bar.png" width="46" height="46" style="opacity:0;"/></div>';
	temp += '<div id="text10" style="opacity:0;"></div>';
	temp += '<div id="text11" style="opacity:0;"></div>';
	temp += '<div id="notallowed2" ><img src="cross-bar.png" width="51" height="51" style="opacity:.3;display:none;"/></div>';
	temp += '<div id="notallowed3" ><img src="cross-bar.png" width="41" height="41" style="opacity:0;"/></div>';
	
	temp += '<div id="envelop6" style="opacity:0;"><img src="envelope.png" width="39" height="25"/></div>';
	temp += '<div id="text12" style="opacity:0;"></div>';
	temp += '<div id="clock2" style="opacity:0;"><img src="timer2.gif" width="33" height="33" style="position: absolute; left:     18px; top: 18px;"/></div>';
	temp += '<div id="text13" style="opacity:0;"></div>';
	temp += '<div id="text14" style="opacity:0;"></div>';
	temp += '<div id="text15" style="opacity:0;"></div>';
	temp += '<div id="envelop7"><img src="envelope.png" width="65" height="41.50" style="opacity:0" /></div>';
	temp += '<div id="tick2" style="opacity:0;"><img src="FeedbackCorrect.png" width="28" height="28"/></div>';
	temp += '<div id="text16" style="opacity:0;"></div>';
	temp += '<div id="text17" style="opacity:0;"></div>';
	
	//Slide3 Starts
	temp += '<div id="envelop8" style="opacity:0;"><img src="envelope.png" width="39" height="25"/></div>';
	temp += '<div id="text18" style="opacity:0;"></div>';
	temp += '<div id="clock3" style="opacity:0;"><img src="timer2.gif" width="33" height="33" style="position: absolute; left:     18px; top: 18px;"/></div>';
	temp += '<div id="text19" style="opacity:0;"></div>';
	temp += '<div id="text20" style="opacity:0;"></div>';
	temp += '<div id="text21" style="opacity:0;"></div>';
	temp += '<div id="envelop9"><img src="envelope.png" width="65" height="41.50" style="opacity:0" /></div>';
	temp += '<div id="tick3" style="opacity:0;"><img src="FeedbackCorrect.png" width="28" height="28"/></div>';
	temp += '<div id="text22" style="opacity:0;"></div>';
	temp += '<div id="text23" style="opacity:0;"></div>';
	temp += '<div id="text24" style="opacity:0;"></div>';
	
	
	
	temp += '</div></div>';
	temp += '<div id="sourcetext"></div>';
	temp += '<div id="destinationtext"></div>';
	temp += '<div id="internettext"></div>';

$("#animDiv").html(temp);

	$("#sourcetext").html($(data).find("component#ID_txt01").text());
	$("#destinationtext").html($(data).find("component#ID_txt03").text());
	$("#internettext").html($(data).find("component#ID_txt02").text());	
	$("#text1").html($(data).find("component#ID_txt04").text());
	$("#text2").html($(data).find("component#ID_txt05").text());
	$("#text3").html($(data).find("component#ID_txt07").text());
	$("#text4").html($(data).find("component#ID_txt06").text());
	$("#text5").html($(data).find("component#ID_txt08").text());
	$("#text6").html($(data).find("component#ID_txt09").text());
	$("#text7").html($(data).find("component#ID_txt10").text());
	$("#text8").html($(data).find("component#ID_txt11").text());
	$("#text9").html($(data).find("component#ID_txt16").text());
	$("#text10").html($(data).find("component#ID_txt14").text());
	$("#text11").html($(data).find("component#ID_txt12").text());
	$("#text12").html($(data).find("component#ID_txt20").text());
	$("#text13").html($(data).find("component#ID_txt21").text());
	$("#text14").html($(data).find("component#ID_txt23").text());
	$("#text15").html($(data).find("component#ID_txt22").text());
	$("#text16").html($(data).find("component#ID_txt24").text());
	$("#text17").html($(data).find("component#ID_txt25").text());
	$("#text18").html($(data).find("component#ID_txt26").text());
	$("#text19").html($(data).find("component#ID_txt27").text());
	$("#text20").html($(data).find("component#ID_txt29").text());
	$("#text21").html($(data).find("component#ID_txt28").text());
	$("#text22").html($(data).find("component#ID_txt30").text());
	$("#text23").html($(data).find("component#ID_txt31").text());
	$("#text24").html($(data).find("component#ID_txt32").text());
	
	
	

}

function animation()
	{   
		
		var envelop2Img = $("#envelop2>img");
		var envelop4Img = $("#envelop4>img");
		var notallowedImg = $("#notallowed>img");
		var notallowedImg1 = $("#notallowed1>img");
		var notallowedImg2 = $("#notallowed2>img");
		var notallowedImg3 = $("#notallowed3>img");
		var envelop7Img = $("#envelop7>img");
		var envelop9Img = $("#envelop9>img");
		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn"); 
		
		
		
		
		tl.append([
		new TweenLite(envelop1,.7,{css:{display:"block"}}),
        new TweenLite(clock,.7,{css:{display:"block"}}),
		new TweenLite(text1,.7,{css:{display:"block"}}),
		])		
		.to(text2,1.1,{css:{opacity:"1"}})
		.to(envelop1,1.5,{css:{left:"347px",top:"13px"}})		
		.append([
		new TweenLite(envelop1,.9,{css:{opacity:"0"}}),
        new TweenLite(text3,.9,{css:{opacity:"1"}})
		])				
		.append([
		new TweenLite(text1,1.3,{css:{top:"25px",opacity:"0"}}),
		new TweenLite(text2,1.3,{css:{top:"90px",opacity:"0"}}),
		new TweenLite(clock,1.3,{css:{top:"135px"}}),
		new TweenLite(text4,1.3,{css:{opacity:"1"},delay:.6}),
        ])			
		.append([
		new TweenLite(text3,1.5,{css:{opacity:"0"}}),
		new TweenLite(envelop2Img,1.5,{css:{width:39,height:25,opacity:1},delay:.8}),
		new TweenLite(tick1,1.5,{css:{opacity:1},delay:1.1}),
		new TweenLite(text5,1.5,{css:{opacity:1},delay:1.1}),
		])			
		.append([
		new TweenLite(tick1,2.3,{css:{opacity:"0"}}),
		new TweenLite(text5,1.1,{css:{left:"174px",top:"85px",opacity:"0"},delay:1.3}),
		new TweenLite(envelop2,1.8,{css:{left:"73px",top:"13px"},delay:"1.3"}),
		new TweenLite(text6,1.3,{css:{left:"40px",top:"85px",opacity:"1"},delay:1.8}),
		])		
		.append([
		new TweenLite(clock,1.3,{css:{opacity:"0"}}),
		new TweenLite(text4,1.5,{css:{opacity:"0"}})
		])		
		.append([
		new TweenLite(envelop2,1.5,{css:{opacity:"0"}}),
		new TweenLite(text6,1.5,{css:{opacity:"0"}})
		])	
		.append([
		new TweenLite(envelop3,1.6,{css:{opacity:"1"}}),
		new TweenLite(text7,1.6,{css:{opacity:"1"}}),
		new TweenLite(clock1,1.6,{css:{opacity:"1"},delay:.37}),
		new TweenLite(text8,1.6,{css:{opacity:"1"},delay:.37})
		])	
		.append([
		new TweenLite(envelop3,1.3,{css:{left:"255px",top:"13px"}}),
		new TweenLite(envelop3,.6,{css:{opacity:"0"},delay:1.1})
		])	
		.append([
		new TweenLite(envelop4Img,1.3,{css:{display:"block",width:59,height:43}}),
		new TweenLite(envelop4,1.3,{css:{left:"350px",opacity:"0"}}),
		])
		.append([
		new TweenLite(text9,1.3,{css:{opacity:"1"}}),
		new TweenLite(envelop5,1.3,{css:{opacity:"1"}}),
		new TweenLite(text7,1.3,{css:{opacity:"0"}}),
		new TweenLite(notallowedImg1,1.3,{css:{display:"block"},delay:.8}),
		new TweenLite(notallowedImg1,1.3,{css:{opacity:0},delay:.5}),
		new TweenLite(notallowedImg,1.3,{css:{width:36,height:36,opacity:1},delay:1}),
		new TweenLite(text10,1.3,{css:{opacity:"1"},delay:.7}),
		])	
		.append([
		new TweenLite(text9,.8,{css:{opacity:"0"}}),
		new TweenLite(envelop5,.8,{css:{opacity:"0"}}),
		new TweenLite(text10,.8,{css:{opacity:"0"}}),
		new TweenLite(notallowedImg,.8,{css:{opacity:"0"}}),
		new TweenLite(text8,.8,{css:{top:"45px",opacity:"0"},delay:.8}),
		new TweenLite(clock1,.8,{css:{top:"-6px",},delay:.8}),
		new TweenLite(text11,.8,{css:{opacity:1},delay:1.3}),
		new TweenLite(notallowedImg2,1.8,{css:{display:"block"},delay:1.3}),
		new TweenLite(notallowedImg2,1.8,{css:{opacity:0},delay:2}),
		new TweenLite(notallowedImg3,1.3,{css:{opacity:1},delay:2}),
		new TweenLite(notallowedImg3,1.3,{css:{display:"none"},delay:2.2}),
		])	
		.to(notallowedImg3,.8,{css:{display:"block"}})	
		.append([
		new TweenLite(text11,1.3,{css:{opacity:0}}),
		new TweenLite(clock1,1.3,{css:{opacity:0}}),
		new TweenLite(notallowed3,1.3,{css:{opacity:0}}),
		])		
		.append([
		new TweenLite(envelop6,1.5,{css:{opacity:1}}),
		new TweenLite(text12,1.5,{css:{opacity:1}}),
		new TweenLite(clock2,1.5,{css:{opacity:1}}),
		new TweenLite(text13,1.5,{css:{opacity:1}}),
		])
		.to(envelop6,1.5,{css:{left:"347px",top:"13px"}})		
		.append([
		new TweenLite(envelop6,.9,{css:{opacity:"0"}}),
        new TweenLite(text14,.9,{css:{opacity:"1"}})
		])		
		.append([
		new TweenLite(text12,1.3,{css:{top:"25px",opacity:"0"}}),
		new TweenLite(text13,1.3,{css:{top:"90px",opacity:"0"}}),
		new TweenLite(clock2,1.3,{css:{top:"135px"}}),
		new TweenLite(text15,1.3,{css:{opacity:"1"},delay:.6}),
        ])	
		.append([
		new TweenLite(text14,1.5,{css:{opacity:"0"}}),
		new TweenLite(envelop7Img,1.5,{css:{width:39,height:25,opacity:1},delay:.8}),
		new TweenLite(tick2,1.5,{css:{opacity:1},delay:1.1}),
		new TweenLite(text16,1.5,{css:{opacity:1},delay:1.1}),
		])	
		.append([
		new TweenLite(tick2,2.3,{css:{opacity:"0"}}),
		new TweenLite(text16,1.1,{css:{left:"174px",top:"85px",opacity:"0"},delay:1.3}),
		new TweenLite(envelop7,1.8,{css:{left:"73px",top:"13px"},delay:"1.3"}),
		new TweenLite(text17,1.3,{css:{left:"40px",top:"85px",opacity:"1"},delay:1.8}),
		])	
		.append([
		new TweenLite(clock2,1.3,{css:{opacity:"0"}}),
		new TweenLite(text15,1.5,{css:{opacity:"0"}})
		])		
		.append([
		new TweenLite(envelop7,1.5,{css:{opacity:"0"}}),
		new TweenLite(text17,1.5,{css:{opacity:"0"}})
		])	
		.append([
		new TweenLite(envelop8,1.5,{css:{opacity:1}}),
		new TweenLite(text18,1.5,{css:{opacity:1}}),
		new TweenLite(clock3,1.5,{css:{opacity:1}}),
		new TweenLite(text19,1.5,{css:{opacity:1}}),
		])
		.to(envelop8,1.5,{css:{left:"347px",top:"13px"}})		
		.append([
		new TweenLite(envelop8,.9,{css:{opacity:"0"}}),
        new TweenLite(text20,.9,{css:{opacity:"1"}})
		])		
		.append([
		new TweenLite(text18,1.3,{css:{top:"25px",opacity:"0"}}),
		new TweenLite(text19,1.3,{css:{top:"90px",opacity:"0"}}),
		new TweenLite(clock3,1.3,{css:{top:"135px"}}),
		new TweenLite(text21,1.3,{css:{opacity:"1"},delay:.6}),
        ])	
		.append([
		new TweenLite(text20,1.5,{css:{opacity:"0"}}),
		new TweenLite(envelop9Img,1.5,{css:{width:39,height:25,opacity:1},delay:.8}),
		new TweenLite(tick3,1.5,{css:{opacity:1},delay:1.1}),
		new TweenLite(text22,1.5,{css:{opacity:1},delay:1.1}),
		])	
		.append([
		new TweenLite(tick3,2.3,{css:{opacity:"0"}}),
		new TweenLite(text22,1.1,{css:{left:"174px",top:"85px",opacity:"0"},delay:1.3}),
		new TweenLite(envelop9,1.8,{css:{left:"73px",top:"13px"},delay:"1.3"}),
		new TweenLite(text23,1.3,{css:{left:"40px",top:"85px",opacity:"1"},delay:1.8}),
		])	
		.append([
		new TweenLite(clock3,1.3,{css:{opacity:"0"}}),
		new TweenLite(text21,1.4,{css:{opacity:"0"}})
		])		
		.append([
		new TweenLite(envelop9,1.5,{css:{opacity:"0"}}),
		new TweenLite(text23,1.5,{css:{opacity:"0"}})
		])	
		.to(text24,1.2,{css:{opacity:"1"}})
		.to(pause,.05,{onComplete:myFunction1})
	}
	
	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	
var animeArray = [{name:animation1,animFunction:animation}];