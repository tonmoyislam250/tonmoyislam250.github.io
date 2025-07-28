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
	temp +='<div id="packetimage" style="opacity:0"><img src="packet-image.png" width="47" height="13" /></div>';
	temp +='<div id="packet"><div id="itext1"></div><div id="itext2"></div><div id="itext3"></div><div id="itext4"></div></div>';
	temp +='<div id="packet2"><span id="crctext"></span><span id="no1">435869123</span><span id="no2">435869123</span><span id="frame"></span></div>';
	temp +='<div id="packet3"><span></span></div>';
	temp +='<div id="text2"></div>';
	temp +='<div id="text3"></div>';
	temp +='</div><div id="text1"></div></div>';

$("#animDiv").html(temp);
$("#text1").html($(data).find("component#ID_s2_txt03").text());
$("#text2").html($(data).find("component#ID_s2_txt01").text());
$("#text3").html($(data).find("component#ID_s2_txt02").text());
$("#itext1").html($(data).find("component#ID_s2_txt04").text());
$("#itext2").html($(data).find("component#ID_s2_txt05").text());
$("#itext3").html($(data).find("component#ID_s2_txt06").text());
$("#itext4").html($(data).find("component#ID_s2_txt07").text());
$("#crctext").html($(data).find("component#ID_s2_txt08").text());
$("#frame").html($(data).find("component#ID_s2_txt09").text());
$("#packet3 span").html($(data).find("component#ID_s2_txt10").text());
}

function animation()
	{ 
		pause         = $("#pauseBtn");
		play          = $("#playBtn")
		restart       = $("#restartBtn");
		packetimage   = $("#packetimage");  
		packet		  = $("#packet"); 
		packet2		  = $("#packet2"); 	
		no1			  = $("#no1");
		no2			  = $("#no2");
		frame         = $("#frame");  
		tl.to(packet,.5,{css:{left:-82,top:103,opacity:0,scale:.1}})
		tl.to(packet,1.2,{css:{top:30,opacity:1,scale:1}})
		tl.to(packet,1.7,{css:{opacity:1}})
		tl.to(packet,1,{css:{left:-82,top:103,opacity:0,scale:.1}})
		tl.to(packetimage,.01,{css:{opacity:1}})
		tl.to(packetimage,1.4,{css:{left:145}})
		tl.to(packet2,.1,{css:{left:130,top:98,opacity:0,scale:.1}})
		tl.to(packet2,.6,{css:{left:202,top:40,opacity:1,scale:1}})
		tl.to(packet2,1.85,{css:{opacity:1}})
		tl.to([no1,no2],1.85,{css:{top:13}})
		tl.to(no2,.1,{css:{opacity:0}})
		tl.to(no1,.5,{css:{opacity:1}})
		tl.to([no1,crctext],.2,{css:{opacity:0}})
		tl.to(frame,.2,{css:{opacity:1}})
		tl.to(packet2,1.1,{css:{opacity:1}})
		tl.to(packet2,.2,{css:{opacity:0}})
		tl.to(packet3,.1,{css:{left:130,top:98,opacity:0,scale:.1}})
		tl.to(packet3,1,{css:{left:202,top:40,opacity:1,scale:1}})
		tl.to(packet3,1,{css:{opacity:1}})
		tl.to(packet3,.3,{css:{opacity:0}})
		tl.to(packetimage,1.5,{css:{left:261}})
		tl.to(packetimage,.1,{css:{opacity:0}})
		tl.to(pause,.05,{onComplete:myFunction});
		
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}


var animeArray = [{name:animation1,animFunction:animation}];