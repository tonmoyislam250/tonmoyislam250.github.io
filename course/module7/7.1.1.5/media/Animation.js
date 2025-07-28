var sun_girl,sun_boy_empty,sun_boy,pulse;
var light,fistsun,lastsun,envelop;
var pause,play,restart;

var animation1 = function(data)
{
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

	var temp ='';
	
	temp += '<div id="envelop1" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop2" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop3" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';	
	temp += '<div id="envelop4" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop5" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop6" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop7" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop8" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop9" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop10" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop11" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	
	temp += '<div id="book"><img src="book.png" width="13" height="15" /></div>';
	temp += '<div id="shadow" style="opacity:0;dispaly:none;"><img src="shade1.png" width="100" height="46" /></div>';
	
	temp += '<div id="container"><div id="imagecontainer"><img src="5_1_1_5.png" height="280" width="387" />';
	temp += '<div id="enduser"><img src="enduser.png" width="75" height="75" /></div>';
	
	temp += '</div></div>';
	temp += '<div id="text1" style="display:none"></div>';
	temp += '<div id="text2" style="display:none"></div>';
	temp += '<div id="text3" style="display:none"></div>';
	temp += '<div id="text4" style="display:none"></div>';
	temp += '<div id="text5" style="display:none"></div>';
	temp += '<div id="text6" style="display:none"></div>';
	temp += '<div id="text7" style="display:none"></div>';
	temp += '<div id="internettext"></div>';
	temp += '<div id="ispttext"></div>';
	temp += '<div id="isp2text"></div>';
	temp += '<div id="ftptext"></div>';
	temp += '<div id="servertext"></div>';
	

				
		$("#animDiv").html(temp);
    	$("#internettext").html($(data).find("component#ID_txt01").text());
		$("#ispttext").html($(data).find("component#ID_txt02").text());
		$("#isp2text").html($(data).find("component#ID_txt03").text());
		$("#ftptext").html($(data).find("component#ID_txt04").text());
		$("#servertext").html($(data).find("component#ID_txt05").text());
		$("#text1").html($(data).find("component#ID_txt06").text());
		$("#text2").html($(data).find("component#ID_txt07").text());
		$("#text3").html($(data).find("component#ID_txt08").text());
		$("#text4").html($(data).find("component#ID_txt09").text());
		$("#text5").html($(data).find("component#ID_txt10").text());
		$("#text6").html($(data).find("component#ID_txt11").text());
		$("#text7").html($(data).find("component#ID_txt12").text());


}

		


	
	function animation()
	{   
	
	pause = $("#pauseBtn");
	play  = $("#playBtn")
	restart= $("#restartBtn"); 
	var book = $("#book");
	var shadow = $("#shadow");
	var envelop1 = $("#envelop1");
	var envelop2 = $("#envelop2");
	var envelop3 = $("#envelop3");
	var envelop4 = $("#envelop4");
	var envelop5 = $("#envelop5");
	var envelop6 = $("#envelop6");
	var envelop7 = $("#envelop7");
	var envelop8 = $("#envelop8");
	var envelop9 = $("#envelop9");
	var envelop10 = $("#envelop10");
	var text1 = $("#text1");
	var text2 = $("#text2");
	var text3 = $("#text3");
	var text4 = $("#text4");
	var text5 = $("#text5");
	var text6 = $("#text6");
	var text7 = $("#text7");
	
	tl.append([
		new TweenLite(book,1.1,{css:{left:"83px",top:"227px",scale:4}}),
		new TweenLite(shadow,.1,{css:{left:-50,display:"block",scale:.2,opacity:.2}}),
		new TweenLite(shadow,1.1,{css:{scale:1,opacity:1,left:2},delay:.1}),
		new TweenLite(text1,1.1,{css:{display:"block"},delay:.8}),
		new TweenLite(shadow,.9,{css:{left:-50,scale:.2,opacity:.2},delay:3.5}),
		new TweenLite(book,1,{css:{left:"6px",top:"231px",scale:1,display:"none"},delay:3.5}),
		new TweenLite(text1,.05,{css:{display:"none"},delay:4.5}),
		new TweenLite(text1,1,{css:{display:"none"}}),
		new TweenLite(text7,1,{css:{display:"block"},delay:5.5}),
		new TweenLite([envelop1,envelop2,envelop3],.5,{css:{display:"block"},delay:6.5}),
		new TweenLite(envelop1,1.5,{css:{left:"165px",top:"83px"},delay:7}),
		new TweenLite(envelop2,1.6,{css:{left:"165px",top:"83px"},delay:7.2}),
		new TweenLite(envelop3,1.7,{css:{left:"165px",top:"83px"},delay:7.4}),		
		new TweenLite(envelop1,1,{css:{left:"255px",top:"137px"},delay:8.5}),		
		new TweenLite(envelop2,1.05,{css:{left:"255px",top:"137px"},delay:8.9}),
		new TweenLite(envelop3,1.1,{css:{left:"255px",top:"137px"},delay:9.2}),			
		new TweenLite(envelop1,1,{css:{left:"255px",top:"186px"},delay:9.5}),
		new TweenLite(envelop2,1.05,{css:{left:"255px",top:"186px"},delay:10}),
		new TweenLite(envelop3,1.1,{css:{left:"255px",top:"186px"},delay:10.35}),		
		new TweenLite(envelop1,1,{css:{left:"304px",top:"242px",display:"none"},delay:10.5}),
	    new TweenLite(envelop2,1.05,{css:{left:"304px",top:"242px",display:"none"},delay:11.1}), 
	    new TweenLite(envelop3,1.1,{css:{left:"304px",top:"242px",display:"none"},delay:11.5}),
		new TweenLite(text7,.5,{css:{display:"none"},delay:12}),
		new TweenLite(text2,.5,{css:{display:"block"},delay:12.7}),
		])	

		
		tl.append([
		new TweenLite(envelop4,.1,{css:{display:"block"}}),
		new TweenLite(envelop4,1.5,{css:{left:"255px",top:"186px"},delay:.01}),
		new TweenLite(envelop4,1.5,{css:{left:"255px",top:"137px"},delay:1.6}),
		new TweenLite(envelop4,1.5,{css:{left:"165px",top:"83px"},delay:3.1}),
		new TweenLite(envelop4,1.5,{css:{left:"0px",top:"231px",display:"none"},delay:4.6}),
		new TweenLite(text2,.8,{css:{display:"none"},delay:4.9}),
		])
		
		tl.append([
		new TweenLite([envelop5,envelop6,envelop7,text3],.8,{css:{display:"block"},delay:.5}),
		new TweenLite(envelop5,1.5,{css:{left:"165px",top:"83px",display:"none"},delay:1.3}),
		new TweenLite(envelop6,1.5,{css:{left:"165px",top:"83px",display:"none"},delay:1.6}),		
		new TweenLite(envelop7,1.5,{css:{left:"165px",top:"83px",display:"none"},delay:1.9}),
		new TweenLite(text3,.1,{css:{display:"none"},delay:3.4}),
		new TweenLite(text4,.1,{css:{display:"block"},delay:3.5}),
		new TweenLite(text4,2,{css:{display:"block"},delay:3.6})
		])
		
		tl.append([
		new TweenLite(text4,.1,{css:{display:"none"}}),
		new TweenLite(text5,.01,{css:{display:"block"},delay:.05}),
		new TweenLite([envelop8,envelop9,envelop10],.5,{css:{display:"block"},delay:.05}),
				
		new TweenLite(envelop8,1.5,{css:{left:"165px",top:"83px"},delay:.5}), 
		new TweenLite(envelop8,1.5,{css:{left:"255px",top:"137px"},delay:2}), 
		new TweenLite(envelop8,1.5,{css:{left:"255px",top:"186px"},delay:3.5}),	
		new TweenLite(envelop8,1.5,{css:{left:"304px",top:"242px",display:"none"},delay:5}),
		
		new TweenLite(envelop9,1.7,{css:{left:"165px",top:"83px"},delay:.8}),
		new TweenLite(envelop9,1.7,{css:{left:"255px",top:"137px"},delay:2.5}), 
		new TweenLite(envelop9,1.7,{css:{left:"255px",top:"186px"},delay:4.2}),
		new TweenLite(envelop9,1.7,{css:{left:"304px",top:"242px",display:"none"},delay:5.9}),	
		
		new TweenLite(envelop10,1.9,{css:{left:"165px",top:"83px"},delay:1.1}),		
		new TweenLite(envelop10,1.9,{css:{left:"255px",top:"137px"},delay:3}),	
		new TweenLite(envelop10,1.9,{css:{left:"255px",top:"186px"},delay:4.9}),
		new TweenLite(envelop10,1.9,{css:{left:"304px",top:"242px",display:"none"},delay:6.8}),
		new TweenLite(text5,1,{css:{display:"none"},delay:6.5}),
		new TweenLite(text6,1.5,{css:{display:"block"},delay:8.7})
		])
		tl.append([
		new TweenLite(text6,1.5,{css:{display:"block"}}),
		new TweenLite(envelop11,.1,{css:{display:"block"}}),
		new TweenLite(envelop11,1.39,{css:{left:"255px",top:"186px"},delay:.01}),
		new TweenLite(envelop11,1.5,{css:{left:"255px",top:"137px"},delay:1.4}),
		new TweenLite(envelop11,1.5,{css:{left:"165px",top:"83px"},delay:2.9}),
		new TweenLite(envelop11,1.5,{css:{left:"0px",top:"231px",display:"none"},delay:4.4}),
		new TweenLite(text6,.1,{css:{display:"none"},delay:5}),
		])/**/
			.to(pause,.05,{onComplete:myFunction})
		
		
		
	}
	
	
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
	temp += '<div id="container"><div id="imagecontainer">';
	temp += '<div id="enduser"><img src="enduser.png" width="75" height="75" /></div>';
	temp += '<div id="book1"><img src="book.png" width="13" height="15" /></div>';
	temp += '<div id="shadow1" style="display:none;opacity:0"><img src="shade1.png" width="100" height="46" /></div>';
	temp += '<div id="envelop12" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop13" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop14" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop15" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop16" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '<div id="envelop17" style="display:none"><img src="envelop.png" width="23" height="15" /></div>';
	temp += '</div></div>';
	temp += '<div id="text7" style="display:none"></div>';
	temp += '<div id="text8" style="display:none"></div>';
	temp += '<div id="internettext"></div>';
	temp += '<div id="ispttext"></div>';
	temp += '<div id="isp2text"></div>';
	temp += '<div id="ftptext"></div>';
	temp += '<div id="servertext"></div>';
		$("#animDiv").html(temp);
    	$("#internettext").html($(data).find("component#ID_txt14").text());
		$("#ispt2text").html($(data).find("component#ID_txt15").text());
		$("#isptext").html($(data).find("component#ID_txt16").text());
		$("#ftptext").html($(data).find("component#ID_txt17").text());
		$("#servertext").html($(data).find("component#ID_txt18").text());
		$("#text7").html($(data).find("component#ID_txt19").text());
		$("#text8").html($(data).find("component#ID_txt20").text());
}

	
	
	function animation3()
	{  
	
	var book1 = $("#book1");
	var shadow1 = $("#shadow1");
	var text7 = $("#text7");
	var envelop12 = $("#envelop12");
	var envelop13 = $("#envelop13");
	var envelop14 = $("#envelop14");
	var envelop15 = $("#envelop15");
	var envelop16 = $("#envelop16");
	var envelop17 = $("#envelop17");
	var text8 = $("#text8");
	
	pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn");  
	
	tl.append([
		new TweenLite(book1,1.1,{css:{left:"83px",top:"178px",scale:4}}),
        //new TweenLite(shadow1,1.1,{css:{display:"block"},delay:1}),
		new TweenLite(shadow1,.1,{css:{left:-50,display:"block",scale:.2,opacity:.2}}),
		new TweenLite(shadow1,1.1,{css:{scale:1,opacity:1,left:2},delay:.1}),
		new TweenLite(text7,1.1,{css:{display:"block"},delay:1}),
		//new TweenLite(shadow1,.1,{css:{display:"none"},delay:2.1}),
		//new TweenLite(book1,1,{css:{left:"-1px",top:"180px",scale:1,display:"none"},delay:2.1}),
		new TweenLite(shadow1,.9,{css:{left:-50,scale:.2,opacity:.2},delay:2.1}),
		new TweenLite(book1,1,{css:{left:"-1px",top:"180px",scale:1,display:"none"},delay:2.1}),
		new TweenLite(shadow1,.05,{css:{opacity:0},delay:2.6}),
		new TweenLite(text7,1.5,{css:{display:"none"},delay:2.8}),
		new TweenLite([envelop12,envelop13,envelop14,envelop15,envelop16,envelop17],1.5,{css:{display:"block"},delay:2.8}),		
		
		
		new TweenLite(envelop12,1.5,{css:{left:"158px",top:"29px"},delay:3}),		
		new TweenLite(envelop13,1.6,{css:{left:"158px",top:"29px"},delay:3.2}),
		new TweenLite(envelop14,1.7,{css:{left:"158px",top:"29px"},delay:3.4}),		
		new TweenLite(envelop15,1.8,{css:{left:"158px",top:"29px"},delay:3.6}),
		new TweenLite(envelop16,1.9,{css:{left:"158px",top:"29px"},delay:3.8}),		
		new TweenLite(envelop17,2,{css:{left:"158px",top:"29px"},delay:4}),/**/
		
		new TweenLite(envelop12,1,{css:{left:"244px",top:"83px"},delay:4.5}),		
		new TweenLite(envelop13,1.05,{css:{left:"244px",top:"83px"},delay:4.9}),
		new TweenLite(envelop14,1.1,{css:{left:"244px",top:"83px"},delay:5.2}),	 
		new TweenLite(envelop15,1.15,{css:{left:"244px",top:"83px"},delay:5.5}),
		new TweenLite(envelop16,1.2,{css:{left:"244px",top:"83px"},delay:5.8}),		
		new TweenLite(envelop17,1.25,{css:{left:"244px",top:"83px"},delay:6.1}),/**/
		
		
		new TweenLite(envelop12,1,{css:{left:"249px",top:"138px"},delay:5.5}),
		new TweenLite(envelop13,1.05,{css:{left:"249px",top:"138px"},delay:6}),
		new TweenLite(envelop14,1.1,{css:{left:"249px",top:"138px"},delay:6.35}),		
		new TweenLite(envelop15,1.15,{css:{left:"249px",top:"138px"},delay:6.7}), 
		new TweenLite(envelop16,1.2,{css:{left:"249px",top:"138px"},delay:7.05}),
		new TweenLite(envelop17,1.25,{css:{left:"249px",top:"138px"},delay:7.36}),/**/
		
		
		new TweenLite(envelop12,1,{css:{left:"294px",top:"192px",display:"none"},delay:6.5}),
		new TweenLite(envelop13,1.05,{css:{left:"294px",top:"192px",display:"none"},delay:7.1}), 
		new TweenLite(envelop14,1.1,{css:{left:"294px",top:"192px",display:"none"},delay:7.5}),
		new TweenLite(envelop15,1.15,{css:{left:"294px",top:"192px",display:"none"},delay:7.9}),
		new TweenLite(envelop16,1.2,{css:{left:"294px",top:"192px",display:"none"},delay:8.3}),
		new TweenLite(envelop17,1.25,{css:{left:"294px",top:"192px",display:"none"},delay:8.66}),
		new TweenLite(text8,.5,{css:{display:"block"},delay:9.91})])
		
		.to(pause,.05,{onComplete:myFunction})
	
	}
	

	
	

var animeArray = [{name:animation1,animFunction:animation},{name:animation2,animFunction:animation3}];// JavaScript Document