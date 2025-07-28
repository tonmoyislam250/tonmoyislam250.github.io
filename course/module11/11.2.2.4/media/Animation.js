var sun_girl,sun_boy_empty,sun_boy,pulse;
var light,fistsun,lastsun,envelop;
var pause,play,restart;

var animation1 = function(data)
{
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

	var temp ='';
	
	temp+='<div id="main_wrapper"><div id="toparrow"></div><div id="arrowtextbox"><div id="text1"></div><div id="text2"></div><div id="text3"></div><div id="text4"></div><div id="text5"></div><div id="text6"></div><div id="text7"></div><div id="text8"></div><div id="text9"></div><div id="text10"></div><div id="text11"></div></div>'
	
	temp+='<div id="boyandgirlcontaioner"><div id="boyandgirl"><div id="girlsun" style="opacity:0"><img src="sunset.png" height=81 width="80"></div><div id="boysun1" style="opacity:0"><img src="sunset1.png" height=81 width="80"></div><div id="boysun" style="opacity:0"><img src="sunsetempty.png" height=81 width="80"></div><div id="pulse" style="opacity:0;"><img src="singelpulse.gif" height="39" width="91" /></div></div><div id="girlText"></div><div id="boyText"></div></div></div>'
temp += '<div id="text5showdow"></div>';
temp += '<div id="text6showdow"></div>';
temp += '<div id="text7showdow"></div>';
temp += '<div id="text8showdow"></div>';
temp += '<div id="text9showdow"></div>';
temp += '<div id="text10showdow"></div>';
temp += '<div id="text11showdow"></div>';
	
/*temp+='<div id="main_wrapper"><div id="text1"></div><div id="text2"></div><div id="text3"></div><div id="text4"></div><div id="text5"></div><div id="text7"></div><div id="text8"></div><div id="text9"></div><div id="text10"></div><div id="text11"></div><div id="boysun" style="opacity:0"><img src="sunsetempty.png" height=81 width="80"></div><div id="boysun1" style="opacity:0"><img src="sunset1.png" height=81 width="80"></div><div id="main_container"><div id="girlsun" style="opacity:0"><img src="sunset.png" height=81 width="80"></div>'; 
temp+='';
temp+='';
temp +='</div></div>'*/
				
			$("#animDiv").html(temp);
			$("#text1").html($(data).find("component#ID_s1_txt01").text());
			$("#text2").html($(data).find("component#ID_s1_txt02").text());
			$("#text3").html($(data).find("component#ID_s1_txt03").text());
			$("#text4").html($(data).find("component#ID_s1_txt04").text());
			$("#text5").html($(data).find("component#ID_s1_txt05").text());
			$("#text6").html($(data).find("component#ID_s1_txt06").text());
			$("#text7").html($(data).find("component#ID_s1_txt07").text());
			$("#text8").html($(data).find("component#ID_s1_txt08").text());
			$("#text9").html($(data).find("component#ID_s1_txt09").text());
			$("#text10").html($(data).find("component#ID_s1_txt10").text());
			$("#text11").html($(data).find("component#ID_s1_txt11").text());
			$("#girlText").html($(data).find("component#ID_s1_txt12").text());
			$("#boyText").html($(data).find("component#ID_s1_txt13").text());
			
}

		


	
	function animation()
	{   
	
		sun_girl = $("#girlsun");
		sun_boy_empty = $("#boysun");
		sun_boy = $("#boysun1");
		pulse = $("#pulse");
		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn"); 
		var text5 = $("#text5showdow");
		var text6 = $("#text6showdow");
		var text7 = $("#text7showdow");
		var text8 = $("#text8showdow");
		var text9 = $("#text9showdow");
		var text10 = $("#text10showdow");
		var text11 = $("#text11showdow");
		
    tl.to(sun_girl, .08, {css:{opacity:"1"}})
	.to(sun_boy_empty,.08,{css:{opacity:"1"}})
	tl.to(text5,.9,{css:{opacity:"1"}})
	tl.to(text5,.5,{css:{opacity:"0"}})
	.to(pulse,.9,{css:{opacity:"1"}})
	tl.to(text6,.9,{css:{opacity:"1"}})
	tl.to(text6,.5,{css:{opacity:"0"}})
	tl.to(text7,.9,{css:{opacity:"1"}})
	tl.to(text7,.5,{css:{opacity:"0"}})
	tl.to(text8,.9,{css:{opacity:"1"}})
	tl.to(text8,.5,{css:{opacity:"0"}})
	tl.to(text9,.9,{css:{opacity:"1"}})
	tl.to(text9,.5,{css:{opacity:"0"}})	
	tl.to(text10,.9,{css:{opacity:"1"}})
	tl.to(text10,.5,{css:{opacity:"0"}})
	tl.to(text11,.9,{css:{opacity:"1"}})
	tl.to(text11,.5,{css:{opacity:"0"}})
	.to(pulse,.1,{css:{display:"none"}})
	
	.append([new TweenLite(sun_boy,.9,{css:{opacity:"1"}}),
        new TweenLite(sun_boy_empty,.9,{css:{opacity:"0"}})])
		
		
		
	.to(pause,.05,{onComplete:myFunction})
	}
	
	// 
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	
	
	
	var animation2 = function(data)
{
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

				var temp ='';
	
	temp+='<div id="main_wrapper"><div id="main_bg"><div id="brown"><img src="envelop_brown.png" width="50" height="33"></div><div id="yellow" style=" opacity:0"><img src="envelop_yellow.png" width="50" height="33"></div><div id="yellow2" style=" opacity:0"><img src="envelop_yellow.png" width="50" height="33"></div><div id="yellow3" style=" opacity:0"><img src="envelop_yellow.png" width="50" height="33"></div><div id="main"><img src="11_2_2_4_B.png" width="410" height="303"></div><div id="com_1"><img src="computer.png" width="58" height="48"></div></div><div id="man"><img src="man.png" width="47" height="63"></div><div id="com_2"><img src="computer.png" width="58" height="48"></div><div id="blk_box" style="opacity:0"><img src="blk_box.png" width="32" height="23"></div><div id="com_3"><img src="computer.png" width="58" height="48"></div><div id="cloud"><img src="cloud.png" width="86" height="52"></div><div id="router"><img src="router.png" width="58" height="42"><div id="attcomp"></div><div id="internet"></div></div><div id="textnew" style="display:none;"></div></div>'
	
	temp+='<div id="computercontiner"><div id="computercomp"><div id="light" style="opacity:0"><img src="camera_light.png" width="5" height="5" /></div><div id="sysimage" style="opacity:0;z-index:1"><img src="sunset8.png" width="50" height="36" /></div><div id="envlope"  style="opacity:0;z-index:0"><img src="envelope.png" width="30" height="19" /></div><div id="sourtext"></div></div><div id="secondcomp"><div id="sysimagelast" style="opacity:0"><img src="sunset8.png" width="50" height="36" style="opacity:1" /></div><div id="desttext"></div></div></div></div>'
	
	temp += '<div id="text5showdow"></div>';
	temp += '<div id="text6showdow"></div>';
	temp += '<div id="text7showdow"></div>';
	temp += '<div id="text8showdow"></div>';
	temp += '<div id="text9showdow"></div>';
	temp += '<div id="text10showdow"></div>';
	temp += '<div id="text11showdow"></div>';
				
			$("#animDiv").html(temp);
			$("#attcomp").html($(data).find("component#ID_s2_txt02").text());
			$("#internet").html($(data).find("component#ID_s2_txt01").text());
			$("#textnew").html($(data).find("component#ID_s2_txt03").text());
			
}

	
	
	function animation3()
	{   
	textnew   = $("#textnew");
	light   = $("#light");
	fistsun = $("#sysimage");
	lastsun = $("#sysimagelast");
	envelop = $("#envlope");
	pause = $("#pauseBtn");
	play  = $("#playBtn")
	restart= $("#restartBtn"); 
	var text5 = $("#text5showdow");
	var text6 = $("#text6showdow");
	var text7 = $("#text7showdow");
	var text8 = $("#text8showdow");
	var text9 = $("#text9showdow");
	var text10 = $("#text10showdow");
	var text11 = $("#text11showdow");
	brown   = $("#brown");
	yellow = $("#yellow");
	yellow2 = $("#yellow2");
	yellow3 = $("#yellow3");
	box = $("#blk_box");
		
	
	tl.append([new TweenLite(textnew, .1,{css:{display:"block"}}),
	 new TweenLite(brown, 1.3,{css:{left:"111px",top:"22px"}}),
	 new TweenLite(yellow, 0.5,{css:{opacity:"1"}}),
     new TweenLite(yellow, 1,{css:{left:"188px",top:"127px"}})])
	 
	 .append([new TweenLite(brown, 1,{css:{left:"95px",top:"36px"}}),
	 new TweenLite(yellow, 1,{css:{left:"272px",top:"127px"}})])
	 
	 .append([new TweenLite(brown, 1.3,{css:{left:"193px",top:"36px"}}),
	 new TweenLite(yellow, 1,{css:{left:"360px",top:"127px"}}),
	 new TweenLite(yellow, 1,{css:{opacity:"0"}})])
	 
	 .append([new TweenLite(brown, 1,{css:{left:"193px",top:"89px"}}),
	 new TweenLite(yellow2, 0.5,{css:{opacity:"1"}}),
     new TweenLite(yellow2, 1,{css:{left:"188px",top:"127px"}})])
	 
	 .append([new TweenLite(brown, 1,{css:{left:"179px",top:"77px"}}),
	 new TweenLite(yellow2, 1,{css:{left:"272px",top:"127px"}})])
	 
	 .append([new TweenLite(brown, 1,{css:{left:"179px",top:"88px"}}),
	 new TweenLite(yellow2, 1,{css:{left:"360px",top:"127px"}}),
	 new TweenLite(yellow2, 1,{css:{opacity:"0"}}),
	 new TweenLite(brown, 1,{css:{left:"179px",top:"128px"}}),
	 new TweenLite(yellow3, 0.5,{css:{opacity:"1"}}),
     new TweenLite(yellow3, 1,{css:{left:"188px",top:"127px"}})])
	 
/*	 .append([new TweenLite(brown, .5,{css:{left:"179px",top:"128px"}}),
	 new TweenLite(yellow3, 0.5,{css:{opacity:"1"}}),
     new TweenLite(yellow3, 1,{css:{left:"188px",top:"127px"}})])*/
	 
	 .append([new TweenLite(yellow3, 1,{css:{left:"360px",top:"127px"}}),
	  new TweenLite(yellow3, 1,{css:{opacity:"0"}})])
	 
	 .append([new TweenLite(brown, 1,{css:{left:"360px",top:"127px"}}),
	 new TweenLite(brown, 1,{css:{opacity:"0"}})])
	 .to(box, 1,{css:{opacity:"1"}})
	 
	
	.to(pause,.05,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

var animeArray = [{name:animation1,animFunction:animation},{name:animation2,animFunction:animation3}];