var animation1 = function(data)
{
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

var temp = '';
    temp += '<div id="maincontainer"><div id="imagecontainer">'; 
	temp +='<div id="moreinfotip"></div>';
	temp +='<div id="moreinfo"><img src="moreInfo_bg.png" width="48" height="54" /></div>';
	temp +='<div id="feedback"><div id="feedbacktit"></div><div id="feedbacktext"></div></div>';
	temp += '<div id="tabledata"></div>';
	temp += '<div id="highlight" style="opacity:0"><span></span></div>';
	temp += '<div id="highlight2" style="opacity:0"><span></span></div>';
	temp += '<div id="highlight3" style="opacity:0"><span></span></div>';
	temp += '<div id="highlight4" style="opacity:0"><span></span></div>';
	temp += '<div id="highlight5" style="opacity:0"><span></span></div>';
	temp += '<div id="highlight6" style="opacity:0"><span></span></div>';
	temp += '<div id="highlight7" style="opacity:0"><span></span></div>';
	temp += '<div id="highlight8" style="opacity:0"><span></span></div>';
	temp += '</div></div>';

	$("#animDiv").html(temp);
	$("#moreinfotip").html($(data).find("component#ID_TipText").text());
	$("#feedbacktext").html($(data).find("component#ID_InfoBody").text());
	$("#feedbacktit").html($(data).find("component#ID_InfoTitle").text());
	$("#highlight span").html($(data).find("component#ID_txt01").text());
	$("#highlight2 span").html($(data).find("component#ID_txt02").text());
	$("#highlight3 span").html($(data).find("component#ID_txt03").text());
	$("#highlight4 span").html($(data).find("component#ID_txt04").text());
	$("#highlight5 span").html($(data).find("component#ID_txt05").text());
	$("#highlight6 span").html($(data).find("component#ID_txt06").text());
	$("#highlight7 span").html($(data).find("component#ID_txt07").text());
	$("#highlight8 span").html($(data).find("component#ID_txt08").text());
	
	$("#tabledata").html('<table cellpadding="0" cellspacing="0" border="0" width="270"><tr><td id="r1">Router#<b style="color:#000000">show version</b></td></tr><tr><td id="r2">Cisco Internetwork Operating System<br /> Software</td></tr><tr><td id="r3">IOS(tm)2500 Software (C2500-I-L),Version<br /> 12.0(17a),RELEASE SOFTWARE (fc1)</td></tr><tr><td id="r4">Copyright (c)1986-2002 by cisco<br /> Systems,Inc.</td></tr><tr><td id="r5">Compiled Mon 11-Feb-02 05:55 by kellythw</td></tr><tr><td id="r6">image text-base:0x00001000</td></tr><tr><td id="r7">ROM:system Bootstrap,Version<br /> 11.0(10c),SOFTWARE</td></tr><tr><td id="r21">BOOTFLASH :3000 Bootstrap Software (IGS-<br />BOOT-R),Version 11.0(10c),RELEASE<br /> SOFTWARE(fc1)</td></tr><tr><td id="r8">System image file is "flash:c2500-i-<br />l.120-17a.bin"</td></tr><tr><td id="r9">cisco 2500 (68030 processor(revision N)<br /> With 2048K/2048K bytes of memory.</td></tr><tr><td id="r10">processor bord ID 08860060,with hardware<br /> revision 00000000</td></tr><tr><td id="r11">Bridging software.</td></tr><tr><td id="r12">X.25 software,version 3.0.0.</td></tr><tr><td id="r13">1 Ethernet/IEEE 802.3 interface(s)</td></tr><tr><td id="r14">2 Serial network interface(s)</td></tr><tr><td height="3" id="r15"></td></tr><tr><td id="r16">32K bytes of non-volatile Configuration<br /> memory.</td></tr><tr><td height="3" id="r17"></td></tr><tr><td id="r18">8192K bytes of processor board system<br /> flash (Read ONLY)</td></tr><tr><td height="3" id="r15"></td></tr><tr><td id="r19">Configuration register is 0x2102</td></tr><tr><td id="r20">Router#_</td></tr></table>');
	
	
	
		$(function(){		
		$("#moreinfo").mouseover(function(){
			$("#moreinfotip").css("display","block")		
		});
		
		$("#moreinfo").mouseleave(function(){
			$("#moreinfotip").css("display","none")		
		});
		
		$("#moreinfo").click(function(){		
			if ($("#feedback").is(":hidden")) {
				$("#feedback").slideDown(2000);
			} else {
				$("#feedback").slideUp(2000);
			}		
		});		
		
		$("#feedback").click(function(){		
			$("#feedback").slideUp(2000);		
		})		
		});

}

function animation()
	{ 
		pause         = $("#pauseBtn");
		play          = $("#playBtn")
		restart       = $("#restartBtn");
		packetimage   = $("#packetimage");  

		tl.to(highlight,.4,{css:{opacity:1}})
		tl.to(highlight,2.5,{css:{opacity:1}})
		tl.to(highlight2,.4,{css:{opacity:1}})
		tl.to(highlight2,2.5,{css:{opacity:1}})
		tl.to(highlight3,.4,{css:{opacity:1}})
		tl.to(highlight3,2.5,{css:{opacity:1}})
		tl.to(highlight4,.4,{css:{opacity:1}})
		tl.to(highlight4,2.5,{css:{opacity:1}})
		tl.to(highlight5,.4,{css:{opacity:1}})
		tl.to(highlight5,2.5,{css:{opacity:1}})
		tl.to(highlight6,.4,{css:{opacity:1}})
		tl.to(highlight6,2.5,{css:{opacity:1}})
		tl.to(highlight7,.4,{css:{opacity:1}})
		tl.to(highlight7,2.5,{css:{opacity:1}})
		tl.to(highlight8,.4,{css:{opacity:1}})
		tl.to(highlight8,2.5,{css:{opacity:1}})
		tl.to(pause,.05,{onComplete:myFunction});
	
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}


var animeArray = [{name:animation1,animFunction:animation}];