var animation1 = function(data)
{
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

var temp = '';
    temp += '<div id="maincontainer">';
	//five text boxes start
	temp +='<div id="f1"></div>';
	temp +='<div id="f2"></div>';
	temp +='<div id="f3"></div>';
	temp +='<div id="f4"></div>';
	temp +='<div id="f5"></div>';
	
	//first box starts
	temp += '<div id="imagecontainer">';
	temp += '<div id="voltage"></div>';
	temp += '<div id="time"></div>';
	temp += '<div id="puredigital"></div>';
	temp += '<div id="line1"><img src="line-1.png" width="284" height="54" /></div>';
	temp +='</div>';	
		
	//second box starts
	temp += '<div id="imagecontainer1" style="opacity:0">';
	temp += '<div id="voltage1"></div>';
	temp += '<div id="time1"></div>';
	temp += '<div id="inference" style="opacity:0"></div>';
	temp += '<div id="line2"><img src="line2.png" width="287" height="49" /></div>';
	temp +='</div>';
	
	//third box starts
	temp += '<div id="imagecontainer2" style="opacity:0">';
	temp += '<div id="voltage2"></div>';
	temp += '<div id="time2"></div>';
	temp += '<div id="digitalinference" style="opacity:0"></div>';
	temp += '<div id="line3"><img src="line3.png" width="286" height="98" /></div>';
	temp +='</div>';
	
	//fourth box starts
	temp += '<div id="imagecontainer3" style="opacity:0">';
	temp += '<div id="time3" style="opacity:0"></div>';
	temp += '<div id="computerreads" style="opacity:0"></div>';
	temp +='</div>';
	
	temp +='</div>';

$("#animDiv").html(temp);
$("#voltage").html($(data).find("component#ID_graph01").text());
$("#time").html($(data).find("component#ID_graph02").text());
$("#puredigital").html($(data).find("component#ID_txt01a").text());
$("#voltage1").html($(data).find("component#ID_graph01").text());
$("#time1").html($(data).find("component#ID_graph02").text());
$("#inference").html($(data).find("component#ID_txt02a").text());
$("#voltage2").html($(data).find("component#ID_graph01").text());
$("#time2").html($(data).find("component#ID_graph02").text());
$("#digitalinference").html($(data).find("component#ID_txt03a").text());
$("#time3").html($(data).find("component#ID_txt05a").text());
$("#computerreads").html($(data).find("component#ID_txt04a").text());

$("#f1").html($(data).find("component#ID_txt01b").text());
$("#f2").html($(data).find("component#ID_txt02b").text());
$("#f3").html($(data).find("component#ID_txt03b").text());
$("#f4").html($(data).find("component#ID_txt04b").text());
$("#f5").html($(data).find("component#ID_txt05b").text());
}

function animation()
	{ 
		pause         = $("#pauseBtn");
		play          = $("#playBtn")
		restart       = $("#restartBtn");
		
		tl.to(line1,1.5,{css:{clip:"rect()0px 284px 54px 0px"}});	
		tl.to(line1,1,{css:{opacity:1}})
		tl.to(imagecontainer,.1,{css:{left:79,top:142,opacity:1,scale:1}})
		tl.to(puredigital,.1,{css:{opacity:0}})
		tl.to(imagecontainer,1.2,{css:{left:-55,top:-5,opacity:1,scale:.65}})
		tl.to(f1,.1,{css:{opacity:1}})
		
		tl.to(imagecontainer1,.6,{css:{opacity:1}})
		tl.to(inference,.5,{css:{opacity:1}})
		tl.to(line2,1.3,{css:{clip:"rect()0px 287px 49px 0px"}});
		tl.to(line2,1.6,{css:{opacity:1}});
		tl.to(imagecontainer1,.1,{css:{left:101,top:171,opacity:1,scale:1}})
		tl.to(inference,.1,{css:{opacity:0}})
		tl.to(imagecontainer1,1.2,{css:{left:195,top:2,opacity:1,scale:.65}})
		tl.to(f2,.1,{css:{opacity:1}})
		
		tl.to(imagecontainer2,.6,{css:{opacity:1}})
		tl.to(digitalinference,.5,{css:{opacity:1}})
		tl.to(line3,1.5,{css:{clip:"rect()0px 286px 98px 0px"}});
		tl.to(line3,1.3,{css:{opacity:1}});
		tl.to(imagecontainer2,.1,{css:{left:101,top:171,opacity:1,scale:1}})
		tl.to(digitalinference,.1,{css:{opacity:0}})
		tl.to(imagecontainer2,1.2,{css:{left:-41,top:175,opacity:1,scale:.65}})
		tl.to(f3,.1,{css:{opacity:1}})
		
		tl.to(imagecontainer3,.6,{css:{opacity:1}})
		tl.to([computerreads,time3],.5,{css:{opacity:1}})
		tl.to(imagecontainer3,1.9,{css:{opacity:1}})
		tl.to([time3,computerreads],.1,{css:{opacity:0}})
		tl.to(imagecontainer3,1.2,{css:{left:191,top:168,opacity:1,scale:.65}})
		tl.to([f4,f5],.1,{css:{opacity:1}})
		
		
		tl.to(pause,.05,{onComplete:myFunction});
		
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}


var animeArray = [{name:animation1,animFunction:animation}];