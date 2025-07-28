var zoomImg;
var pause,play,restart;
var animation1 = function(data)
{
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

var temp = '';

temp +='<img id="imgComputer" src="computer.png">';
temp +='<div id="main_wrapper"><div id="main_container">';
temp += '<div id="txt1"><div id="ID_txt01"/><div id="ID_txt02"/></div>';
temp += '<div id="txt2"><div id="ID_txt03"/><div id="ID_txt04"/></div>'; 
temp += '<div id="txt3"><div id="ID_txt05"/><div id="ID_txt06"/></div>';
temp += '<div id="ID_txt10"/>';


temp +='<img id="imgBackground" src="background.png">'; 
temp += '<div id="ID_inst"/><p id="bubble1"/><p id="bubble2"/><p id="bubble3"/>';

temp += '</div></div>'

$("#animDiv").html(temp);

$("#ID_inst").html($(data).find("component#ID_inst").text());
$("#bubble1").html($(data).find("component#ID_txt07").text());
$("#bubble2").html($(data).find("component#ID_txt08").text());
$("#bubble3").html($(data).find("component#ID_txt09").text());

$("#ID_txt01").html($(data).find("component#ID_txt01").text());$("#ID_txt02").html($(data).find("component#ID_txt02").text());
$("#ID_txt03").html($(data).find("component#ID_txt03").text());$("#ID_txt04").html($(data).find("component#ID_txt04").text());
$("#ID_txt05").html($(data).find("component#ID_txt05").text());$("#ID_txt06").html($(data).find("component#ID_txt06").text());
$("#ID_txt10").html($(data).find("component#ID_txt10").text());

 
}
function animation()
	{  
		pause         = $("#pauseBtn");
		play          = $("#playBtn")
		restart       = $("#restartBtn"); 
		txt1       = $("#txt1"); 
		txt2       = $("#txt2"); 
		txt3       = $("#txt3"); 
		

	tl.append([
		new TweenLite(txt1,1.1,{css:{clip:"rect(0px, 280px, 32px, 0px)"}}),
		new TweenLite(txt1,2.7,{css:{left:218}}),
		new TweenLite(txt1,1.2,{css:{top:123},delay:2.6}),

		new TweenLite(txt2,1.1,{css:{clip:"rect(0px, 280px, 32px, 0px)"},delay:3.8}),
		new TweenLite(txt2,2.7,{css:{left:218},delay:3.8}),
		new TweenLite(txt2,1.2,{css:{top:168},delay:6.4}),

		new TweenLite(txt3,1.1,{css:{clip:"rect(0px, 280px, 32px, 0px)"},delay:7.6}),
		new TweenLite(txt3,2.7,{css:{left:218},delay:7.6}),
		new TweenLite(txt3,1.2,{css:{top:217},delay:10.2}), 
	])
 
	 
	.to(pause,.05,{onComplete:myFunction}); 
	
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}


var animeArray = [{name:animation1,animFunction:animation}];