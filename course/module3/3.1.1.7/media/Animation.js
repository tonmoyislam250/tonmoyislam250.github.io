var pause,play,restart;

var animation1 = function (data)
{
	$("#animDiv").remove();
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	
	var temp ='';
		temp +='<div id="maincontainer"><div id="imagecontainer">';
			temp +='<div id="sys1"><img src="computer.png" width="55" height="46" /></div>';
			temp +='<div id="sys2"><img src="computer.png" width="55" height="46" /></div>';
			temp +='<div id="sys3"><img src="computer.png" width="55" height="46" /></div>';
			temp +='<div id="sys4"><img src="computer.png" width="55" height="46" /></div>';		
			temp +='<div id="envelope"><img src="envelope.png" width="31" height="20" /></div>';
			temp +='<div id="envelope1"><img src="envelope.png" width="31" height="20" /></div>';		
		temp +='</div></div>';	
	$("#animDiv").html(temp);
}

function animation()
{   
	var envelope = $("#envelope");
	var envelope1 = $("#envelope1");
		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn");	
	tl.to(envelope,.1,{css:{opacity:1}}),
	tl.to(envelope,2,{css:{left:202}})
	tl.to(envelope,.001,{css:{top:89,opacity:0}})
	tl.to(envelope1,.001,{css:{opacity:1}})
	tl.to(envelope1,1.3,{css:{left:288,top:192}})
	tl.to(pause,.05,{onComplete:myFunction})
}

function myFunction()
{
	$(".pause").css("z-index","0");
	$(".resbut").css("z-index","1");
}

var animation2 = function (data)
{
	$("#animDiv").remove();
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);		
	var temp ='';
		temp +='<div id="maincontainer"><div id="imagecontainer">';
			temp +='<div id="sys1"><img src="computer.png" width="55" height="46" /></div>';
			temp +='<div id="sys2"><img src="computer.png" width="55" height="46" /></div>';
			temp +='<div id="sys3"><img src="computer.png" width="55" height="46" /></div>';
			temp +='<div id="sys4"><img src="computer.png" width="55" height="46" /></div>';		
			temp +='<div id="envelope"><img src="envelope.png" width="31" height="20" /></div>';
			temp +='<div id="envelope1"><img src="envelope.png" width="31" height="20" /></div>';
			temp +='<div id="envelope2"><img src="envelope.png" width="31" height="20" /></div>';			
		temp +='</div></div>';	
	$("#animDiv").html(temp);
}

function animation3()
{  

	var envelope = $("#envelope");
	var envelope1 = $("#envelope1");
		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn");	
	tl.to(envelope,.1,{css:{opacity:1}}),
	tl.to(envelope,2,{css:{left:202}})
	tl.to(envelope,.001,{css:{top:89,opacity:0}})
	tl.to([envelope1,envelope2],.001,{css:{opacity:1}})
	tl.append([
		new TweenLite(envelope1,1.3,{css:{left:288,top:192}}),
		new TweenLite(envelope2,1.3,{css:{left:358,top:130}}),
		])	
	
	tl.to(pause,.05,{onComplete:myFunction})
}

//
var animation4 = function (data)
{
	$("#animDiv").remove();
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);		
	var temp ='';
		temp +='<div id="maincontainer"><div id="imagecontainer">';
			temp +='<div id="sys1"><img src="computer.png" width="55" height="46" /></div>';
			temp +='<div id="sys2"><img src="computer.png" width="55" height="46" /></div>';
			temp +='<div id="sys3"><img src="computer.png" width="55" height="46" /></div>';
			temp +='<div id="sys4"><img src="computer.png" width="55" height="46" /></div>';		
			temp +='<div id="envelope"><img src="envelope.png" width="31" height="20" /></div>';
			temp +='<div id="envelope1"><img src="envelope.png" width="31" height="20" /></div>';
			temp +='<div id="envelope2"><img src="envelope.png" width="31" height="20" /></div>';
			temp +='<div id="envelope3"><img src="envelope.png" width="31" height="20" /></div>';
			temp +='<div id="envelope4"><img src="envelope.png" width="31" height="20" /></div>';			
		temp +='</div></div>';	
	$("#animDiv").html(temp);
}

function animation5()
{  

	var envelope = $("#envelope");
	var envelope1 = $("#envelope1");
	var envelope2 = $("#envelope2");
	var envelope3 = $("#envelope3");
	var envelope4 = $("#envelope4");
		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn");	
	tl.to(envelope,.1,{css:{opacity:1}}),
	tl.to(envelope,2,{css:{left:202}})
	tl.to(envelope,.001,{css:{top:89,opacity:0}})
	tl.to([envelope1,envelope2,envelope3,envelope4],.001,{css:{opacity:1}})
	tl.append([
		new TweenLite(envelope1,1.3,{css:{left:288,top:192}}),
		new TweenLite(envelope2,1.3,{css:{left:358,top:130}}),		
		new TweenLite(envelope3,1.3,{css:{left:342,top:28}}),
		new TweenLite(envelope4,1.3,{css:{left:283,top:-34}}),
		])	
	
	tl.to(pause,.05,{onComplete:myFunction})
}
	
function myFunction()
{
	$(".pause").css("z-index","0");
	$(".resbut").css("z-index","1");
}

var animeArray = [{name:animation1,animFunction:animation},{name:animation2,animFunction:animation3},{name:animation4,animFunction:animation5}];