var zoomImg;
var pause,play,restart;
var animation1 = function(data)
{
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

var temp = '';

temp +='<div id="main_wrapper">';
temp +='<div id="main_container">';
temp +='<div id="anim2">';
temp +='<img id="img_network" src="layers.png"/>';
temp += '<div id="ID_txt05"></div><div id="ID_txt06"></div><div id="ID_txt07"></div>';
temp += '<div id="ID_txt08"></div><div id="ID_txt09"></div><div id="ID_txt10"></div>';
temp += '<div id="ID_txt21"></div><div id="ID_txt22"></div><div id="ID_txt23"></div><div id="ID_txt24"></div>';
temp +='</div>';
temp +='<div id="anim1">';
temp += '<div id="ID_txt01"></div>';
temp +='<img id="img_ladyUser" src="ladyUser.png"/>';
temp +='<img id="img_computer" src="computer.png"/> ';
temp +='<img id="img_serverWeb" src="network.png"/>';
temp +='<div id="ID_txt02"></div><div id="ID_txt03"></div><div id="ID_txt04"></div>';
temp +='</div>';
temp +='<div id="anim3">';
temp +='<img id="img_arrow1" src="arrow_1_group.png"/>';
temp +='<img id="img_arrow2" src="arrow_1_group2.png"/> ';
temp +='<img id="img_arrow3" src="arrow_1_group4.png"/>';
temp +='<img id="img_highlight" src="highlight.png"/>';
temp +='<div id="ID_txt12"></div><div id="ID_txt13"></div><div id="ID_txt14"></div><div id="ID_txt15"></div>';
temp +='</div>';
temp +='</div>';
temp +='</div>'; 







$("#animDiv").html(temp);

$("#ID_txt01").html($(data).find("component#ID_txt01").text());
$("#ID_txt02").html($(data).find("component#ID_txt02").text());
$("#ID_txt03").html($(data).find("component#ID_txt03").text());
$("#ID_txt04").html($(data).find("component#ID_txt04").text());
$("#ID_txt05").html($(data).find("component#ID_txt05").text());
$("#ID_txt06").html($(data).find("component#ID_txt06").text());
$("#ID_txt07").html($(data).find("component#ID_txt07").text());$("#ID_txt21").html($(data).find("component#ID_txt07").text());
$("#ID_txt08").html($(data).find("component#ID_txt08").text());$("#ID_txt22").html($(data).find("component#ID_txt08").text());
$("#ID_txt09").html($(data).find("component#ID_txt09").text());$("#ID_txt23").html($(data).find("component#ID_txt09").text());
$("#ID_txt10").html($(data).find("component#ID_txt10").text());$("#ID_txt24").html($(data).find("component#ID_txt10").text());
$("#ID_txt12").html($(data).find("component#ID_txt12").text());
$("#ID_txt13").html($(data).find("component#ID_txt13").text());
$("#ID_txt14").html($(data).find("component#ID_txt14").text());
$("#ID_txt15").html($(data).find("component#ID_txt15").text());

}
function animation()
	{ 
		
			pause         = $("#pauseBtn");
			play          = $("#playBtn")
			restart       = $("#restartBtn"); 

			anim1       = $("#anim1");
			anim2       = $("#anim2");			
			img_ladyUser= $("#img_ladyUser");
			img_computer = $("#img_computer"); 
			img_serverWeb= $("#img_serverWeb");
			ID_txt01 = $("#ID_txt01");
			ID_txt12 = $("#ID_txt12");
			ID_txt02 = $("#ID_txt02");
			ID_txt03 = $("#ID_txt03");
			ID_txt04 = $("#ID_txt04");
			
			
			img_arrow1 = $("#img_arrow1");
			img_arrow2 = $("#img_arrow2");
			img_arrow3 = $("#img_arrow3");
			img_highlight = $("#img_highlight");

			tl.to(ID_txt01,1,{css:{opacity:1}})
				.to(ID_txt01,.5,{css:{opacity:0}}) 
				.append([ 
						new TweenLite(img_ladyUser,1,{css:{opacity:0}}),
						new TweenLite(img_computer,1,{css:{opacity:1},delay:.5}), 
						]) 
				.to(anim1,1,{css:{top:215}}) 
				.append([ 
						new TweenLite(anim2,1,{css:{opacity:1}}), 
						new TweenLite([ID_txt02,ID_txt03,ID_txt04],.5,{css:{opacity:1},delay:.5}) 
						]) 
				.append([ 
						new TweenLite(img_arrow1,1,{css:{opacity:1}}), 
						new TweenLite(ID_txt12,1,{css:{opacity:1}}), 
						new TweenLite(ID_txt12,1,{css:{opacity:0},delay:1.5}), 
						new TweenLite(img_arrow1,1,{css:{opacity:0},delay:2}),
						]) 
				.append([ 
						new TweenLite(img_arrow2,1,{css:{opacity:1}}), 
						new TweenLite(ID_txt13,1,{css:{opacity:1}}), 
						new TweenLite(ID_txt13,1,{css:{opacity:0},delay:1.5}), 
						new TweenLite(img_arrow2,1,{css:{opacity:0},delay:2}),
						]) 
				.append([ 
						new TweenLite(img_arrow1,1,{css:{opacity:1}}), 
						new TweenLite(ID_txt14,1,{css:{opacity:1}}), 
						new TweenLite(ID_txt14,1,{css:{opacity:0},delay:1.5}), 
						new TweenLite(img_arrow1,1,{css:{opacity:0},delay:2}),
						]) 
				.append([ 
						new TweenLite(img_arrow3,1,{css:{opacity:1}}), 
						new TweenLite(img_highlight,.5,{css:{opacity:1},delay:.5}), 
						new TweenLite(ID_txt15,1,{css:{opacity:1}}) 
						])  
				.to(pause,.05,{onComplete:myFunction});
				

	
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}


var animeArray = [{name:animation1,animFunction:animation}];