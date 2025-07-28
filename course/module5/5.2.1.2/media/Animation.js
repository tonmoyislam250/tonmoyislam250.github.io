var animation1 = function(data)
{

var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp = '<div id="main_wrapper"><div id="main_container"><div id="pic1"></div><div id="pic2"></div><div id="pic3"></div><div id="pic4"></div><div id="pic5"></div><img src="envelope.png" id="envelope1" width="22" height="14" /><img src="envelope.png" id="envelope2" width="22" height="14" /><img src="envelope.png" id="envelope3" width="22" height="14" />';
temp += '<div id="ID_txt05" style="display:none"></div>';	
temp += '<div id="ID_txt06" style="display:none"></div>';
temp += '<div id="ID_txt07" style="display:none"></div>';
temp += '<div id="ID_txt08" style="display:none"></div>';
temp += '<div id="ID_txt09" style="display:none"></div>';
temp += '<div id="ID_txt10" style="display:none"></div>';
temp += '<div id="ID_txt11" >H1</div>';
temp += '<div id="ID_txt11a" >192.168.1.5</div>';
temp += '<div id="ID_txt12" >H2</div>';
temp += '<div id="ID_txt12a" >192.168.1.6</div>';
temp += '<div id="ID_txt13" >H3</div>';
temp += '<div id="ID_txt13a" >192.168.1.8</div>';
temp += '<div id="ID_txt14" >H4</div>';
temp += '<div id="ID_txt14a" >192.168.1.7</div>';
temp += '</div></div>';
$("#animDiv").html(temp);
$("#ID_txt05").html($(data).find("component#ID_txt05").text());	
$("#ID_txt06").html($(data).find("component#ID_txt06").text());	
$("#ID_txt07").html($(data).find("component#ID_txt07").text());	
$("#ID_txt08").html($(data).find("component#ID_txt08").text());	
$("#ID_txt09").html($(data).find("component#ID_txt09").text());	
$("#ID_txt10").html($(data).find("component#ID_txt10").text());	
}


	function animation()
	{   
	
	pause         = $("#pauseBtn");
    play          = $("#playBtn")
	restart       = $("#restartBtn"); 
  tl.to(ID_txt05,1,{css:{display:"block"}})
  .to(envelope1,1.3,{css:{left:210}})
  .to(envelope1,1.2)
  .append([
	new TweenLite(envelope1,1.6,{css:{left:380}}),
	new TweenLite(envelope2,1.6,{css:{left:353,top:171}}),
	new TweenLite(envelope3,1.6,{css:{left:81,top:171}})
		])
   .append([
			 new TweenLite(ID_txt06,1,{css:{display:"block"}}),
			 new TweenLite(ID_txt07,1,{css:{display:"block"}}),
			 new TweenLite(ID_txt08,1,{css:{display:"block"}}),
		])
   .append([
			 new TweenLite(ID_txt06,1),
			 new TweenLite(ID_txt07,1),
			 new TweenLite(ID_txt08,1),
		])
   .append([
			new TweenLite(envelope2,1.6,{css:{left:210,top:52},delay:1}),
			new TweenLite(ID_txt06,.1,{css:{display:"none"}}),
			new TweenLite(ID_txt07,.1,{css:{display:"none"}}),
			new TweenLite(ID_txt08,.1,{css:{display:"none"}}),
	 
		])
    .to(envelope2,1.6,{css:{left:45}})
	.to(ID_txt05,1,{css:{display:"none"}})
	.to(ID_txt09,1,{css:{display:"block"}})
	.to(envelope2,1.6,{css:{left:210}})
	.to(envelope2,1.6,{css:{left:353,top:171}})
	.to(ID_txt09,.5,{css:{opacity:0}})
	.to(ID_txt10,1,{css:{display:"block"}})
	.to(pause,.05,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

var animeArray = [{name:animation1,animFunction:animation}];