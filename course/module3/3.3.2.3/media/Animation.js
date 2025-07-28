var yellow_Image,yellow_one,yellow_two,yellow_three,yellow_four,yellow_five;
var bubbleText,bubbleText1;

	

var animation1 = function(data)
{

var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	var temp = '<div id="main_wrapper"><div id="main_container"><div id="pic1"></div><div id="pic2"></div><div id="pic3"><img src="3.png" style="width:51px !important;"/> </div><div id="pic4"></div><div id="pic5"></div><div id="ID_txt01" ></div><div id="ID_txt02"></div><div id="ID_txt03"></div><div id="ID_txt04"></div><div id="ID_txt05"></div><div id="ID_txt06"></div><div id="ID_bubble01_1" style="display:none;"><div id="ID_bubble01"></div></div><div id="ID_bubble02_2" style="display:none;"><div id="ID_bubble02"></div></div><div id="envelope_1" style="position:absolute;left:-78.2px;top:-14px;display:none;z-index:-1;"><img src="envelope.png" id="envelope1_1" style="position:absolute;"/><div id="ID_txt07"></div></div><div id="yellow_1" style="display:none;position:absolute;left:96px;top:-7px;z-index:-1;"><img src="envelope.png" id="yellowOne" style="position:absolute;"/><div id="ID_txt09"></div></div><div id="yellow_2" style="display:none;position:absolute;left:96px;top:-14px;z-index:-1;"><img src="envelope.png" id="yellowTwo" style="position:absolute;"/><div id="ID_txt10"></div></div> <div id="yellow_3" style="display:none;position:absolute;left:96px;top:-14px;z-index:-1;"><img src="envelope.png" id="yellowThree" style="position:absolute;"/><div id="ID_txt11"></div></div> <div id="yellow_4" style="display:none;position:absolute;left:180px;top:160px;z-index:1;"><img src="envelope.png" id="yellowfour" style="position:absolute;"/><div id="ID_txt08"></div></div><div id="yellow_5" style="display:none;position:absolute;left:105px;top:-14px;z-index:1;"><img src="envelope.png" id="yellowfive" style="position:absolute;"/><div id="ID_txt12"></div></div>   </div></div>';
temp += '</div></div>';

temp += '<div id="inetbox" ></div>'
temp += '<div id="captiontext"></div>'
			

$("#animDiv").html(temp);

	/*$("#inetbox").html($(data).find("component#ID_txt04").text());
	$("#captiontext").html($(data).find("component#ID_caption").text());*/
	$("#ID_txt01").html($(data).find("component#ID_txt01").text());	
	$("#ID_txt02").html($(data).find("component#ID_txt02").text());
	$("#ID_txt03").html($(data).find("component#ID_txt03").text());
	$("#ID_txt04").html($(data).find("component#ID_txt04").text());
	$("#ID_txt05").html($(data).find("component#ID_txt05").text());
	$("#ID_txt06").html($(data).find("component#ID_txt06").text());
	$("#ID_bubble01").html($(data).find("component#ID_bubble01").text());
	$("#ID_bubble02").html($(data).find("component#ID_bubble02").text());
	$("#ID_txt07").html($(data).find("component#ID_txt07").text());
	$("#ID_txt08").html($(data).find("component#ID_txt08").text());
	$("#ID_txt09").html($(data).find("component#ID_txt07").text());
	$("#ID_txt10").html($(data).find("component#ID_txt07").text());
	$("#ID_txt11").html($(data).find("component#ID_txt07").text());
	$("#ID_txt12").html($(data).find("component#ID_txt08").text());

}


	function animation()
	{   
	yellow_Image  = $("#envelope_1")
	yellow_one    = $("#yellow_1"); 
	yellow_two    = $("#yellow_2");
	yellow_three  = $("#yellow_3");
	yellow_four  = $("#yellow_4");
	yellow_five  = $("#yellow_5");
	pause         = $("#pauseBtn");
    play          = $("#playBtn")
	restart       = $("#restartBtn"); 
	bubbleText    = $("#ID_bubble01_1");
	bubbleText1    = $("#ID_bubble02_2");
	


  tl.to(bubbleText,.3,{css:{display:"none"}})
	.to(bubbleText,.9,{css:{display:"block"}})	
    .to(yellow_Image,2 ,{css:{left:"101px",top:"-14px",display:"block"}})
	.to(yellow_Image,.01 ,{css:{display:"none"}})
	.append([
	new TweenLite(yellow_one, 2 ,{css:{left:"35px",top:"160px",display:"block"}}),	
	new TweenLite(yellow_two, 2 ,{css:{left:"175px",top:"160px",display:"block"}}),	
	new TweenLite(yellow_three, 2 ,{css:{left:"248px",top:"-14px",display:"block"}})
		])
	.append([
	new TweenLite(yellow_one, .1 ,{css:{display:"none"}}),
	new TweenLite(yellow_two, .1 ,{css:{display:"none"}}),
	new TweenLite(yellow_three, .1 ,{css:{display:"none"}})	
		])
	.to(bubbleText1,1.2,{css:{display:"block"}})
	.to(yellow_four, 2 ,{css:{left:"105px",top:"-14px",display:"block"}})
	.to(yellow_four, .01 ,{css:{display:"none"}})
	.to(yellow_five, 2 ,{css:{left:"-78.2px",top:"-14px",display:"block"}})
	.to(yellow_five, .1 ,{css:{display:"none"}})
	
	.to(pause,.05,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

var animeArray = [{name:animation1,animFunction:animation}];