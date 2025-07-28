var animation1 = function(data)
{
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

var temp = '';
    temp += '<div id="maincontainer"><div id="imagecontainer">'; 
	temp +='<div id="computer1"><img src="computer.png" width="64" height="53" /></div>';
	temp +='<div id="computer2"><img src="computer.png" width="64" height="53" /></div>';
	temp +='<div id="switch"><img src="switch.png" width="78" height="38" /></div>';
	temp +='<div id="packetimage" style="opacity:0"><img src="packet_box_empty.png" width="47" height="13" /></div>';
	temp +='<div id="packet"><span></span></div>';
	temp +='<div id="text2"></div>';
	temp +='<div id="text3"></div>';
	temp +='</div><div id="text1"></div></div>';

$("#animDiv").html(temp);
$("#text1").html($(data).find("component#ID_txt03").text());
$("#text2").html($(data).find("component#ID_txt01").text());
$("#text3").html($(data).find("component#ID_txt02").text());
$("#packet span").html($(data).find("component#ID_txt04").text());
}

function animation()
	{ 
		pause         = $("#pauseBtn");
		play          = $("#playBtn")
		restart       = $("#restartBtn");
		packetimage   = $("#packetimage");  
		
		
		tl.to(packetimage,.1,{css:{opacity:1}})
		tl.to(packetimage,1.5,{css:{left:"113px"}})
		tl.to(packet,.1,{css:{left:72,top:102,opacity:0,scale:.1}})
		tl.to(packet,1,{css:{left:177,top:40,opacity:1,scale:1}})
		tl.to(packet,1.7,{css:{opacity:1}})
		tl.to(packet,.8,{css:{left:72,top:102,opacity:0,scale:.1}})
		tl.to(packetimage,1.8,{css:{left:"-5px"}})
		tl.to(packetimage,.1,{css:{opacity:0}})
		tl.to(pause,.05,{onComplete:myFunction});
	
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}


var animeArray = [{name:animation1,animFunction:animation}];