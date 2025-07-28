var sun_girl,sun_boy_empty,sun_boy,pulse;
var light,fistsun,lastsun,envelop;
var pause,play,restart;

	
	
	
var animation1 = function(data)
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
    	$("#internettext").html($(data).find("component#ID_txt01").text());
		$("#ispttext").html($(data).find("component#ID_txt02").text());
		$("#isp2text").html($(data).find("component#ID_txt03").text());
		$("#ftptext").html($(data).find("component#ID_txt04").text());
		$("#servertext").html($(data).find("component#ID_txt05").text());
		$("#text7").html($(data).find("component#ID_txt06").text());
		$("#text8").html($(data).find("component#ID_txt07").text());
}

	
	
	function animation()
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
		new TweenLite(text7,.5,{css:{display:"none"},delay:9.40}),
		new TweenLite(text8,.5,{css:{display:"block"},delay:9.91})])
		
		.to(pause,.05,{onComplete:myFunction})
	
	}
	
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	

var animeArray = [{name:animation1,animFunction:animation}];// JavaScript Document