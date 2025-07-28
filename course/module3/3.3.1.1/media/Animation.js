var yellow_Image,yellow_second,yellow_third,yellow_fourth;
var firstbox,secondbox,thirdbox;
var arow1,arow2,qMark;
var pause,play,restart;

var animation1 = function (data)
{
		$("#animDiv").remove();
		var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	var temp = '<div id="main_wrapper"><div id="main_container"><div id="envelop_Yellow"><img src="yellow_1.png" width="77" height="49" id="yellow_1"style="position:relative;"/><img src="yellow_4.png" width="28" height="18" id="yellow_4" style="position:relative; opacity:0"/><img src="yellow_4_b.png" width="28" height="18" id="yellow_4_b"style="position:relative; opacity:0"/><img src="yellow_4_c.png" width="28" height="18" id="yellow_4_c"style="position:relative; opacity:0"/><img src="brown_1.png" width="77" height="49" id="brown_1" style="position:relative;" width="103" height="74"/><img src="brown_4.png" width="28" height="18" id="brown_4" style="position:relative;opacity:0"/><img src="brown_4_b.png" width="28" height="18" id="brown_4_b" style="position:relative;opacity:0"/><img src="brown_4_c.png" width="28" height="18" id="brown_4_c" style="position:relative;opacity:0"/><div id="ID_s1_txt02"><b>Segmentation</b> - breaking communication into pieces.</div></div>';
temp += '</div></div>';

temp += '<div id="inetbox" ></div>'
temp += '<div id="captiontext"></div>'

$("#animDiv").html(temp);

	$("#inetbox").html($(data).find("component#ID_txt04").text());
	$("#captiontext").html($(data).find("component#ID_caption").text());
	$("#ID_txt01").html($(data).find("component#ID_txt01").text());	
	$("#ID_txt02").html($(data).find("component#ID_txt02").text());
	$("#ID_txt03").html($(data).find("component#ID_txt03").text());

}

function animation()
	{   
	yellow1  = $("#yellow_1")
	yellow4  = $("#yellow_4");
	yellow4b = $("#yellow_4_b");
	yellow4c = $("#yellow_4_c"); 
		
	brown1 = $("#brown_1"); 
	brown4 = $("#brown_4");
	brown4b = $("#brown_4_b");
	brown4c = $("#brown_4_c");
	pause = $("#pauseBtn");
	
		
	tl.append([new TweenLite(yellow1, .4,{width:'-=10',height:'-=7'}, {css:{alpha:.5}}),
     new TweenLite(yellow4, 0.1,{css:{opacity:"1"}}),
	 new TweenLite(yellow4, 0.4, {css:{left:"58px",top:"52px"}})])
	 
	 .append([new TweenLite(yellow4, 0.4, {css:{left:"109px",top:"128px"}}),
     new TweenLite(brown1, .4,{width:'-=10',height:'-=7'}, {css:{alpha:.5}}),
	 new TweenLite(brown4, 0.1,{css:{opacity:"1"}}),
	 new TweenLite(brown4, 0.4, {css:{left:"69px",top:"211px"}})])
	 
	 
	.append([new TweenLite(yellow4, 0.4,{css:{left:"348px",top:"128px"}}),
     new TweenLite(brown4, 0.4, {css:{left:"108px",top:"130px"}})])

	.append([new TweenLite(yellow4, 0.2,{css:{opacity:"0"}}),
     new TweenLite(brown4, 0.4, {css:{left:"348px",top:"130px"}})])

	.to(brown4, 0.1,{css:{opacity:"0"}})
	
	
	
	.append([new TweenLite(yellow1, 0.4,{width:'-=25',height:'-=15'}, {css:{alpha:.5}}),
     new TweenLite(yellow4b, 0.1,{css:{opacity:"1"}}),
	 new TweenLite(yellow4b, 0.4, {css:{left:"58px",top:"52px"}})])
	 
	 .append([new TweenLite(yellow4b, 0.4, {css:{left:"109px",top:"128px"}}),
     new TweenLite(brown1, 0.4,{width:'-=25',height:'-=15'}, {css:{alpha:.5}}),
	 new TweenLite(brown4b, 0.1,{css:{opacity:"1"}}),
	 new TweenLite(brown4b, 0.4, {css:{left:"69px",top:"211px"}})])
	 
	 
	.append([new TweenLite(yellow4b, 0.4,{css:{left:"348px",top:"128px"}}),
     new TweenLite(brown4b, 0.4, {css:{left:"108px",top:"130px"}})])

	.append([new TweenLite(yellow4b, 0.2,{css:{opacity:"0"}}),
     new TweenLite(brown4b, 0.4, {css:{left:"348px",top:"130px"}})])

	.to(brown4b, 0.1,{css:{opacity:"0"}})
	
	
	
	.append([new TweenLite(yellow1, 0.4,{width:'-=14',height:'-=9'}, {css:{alpha:.5}}),
     new TweenLite(yellow4c, 0.1,{css:{opacity:"1"}}),
	 new TweenLite(yellow4c, 0.4, {css:{left:"58px",top:"52px"}})])
	 
	 .append([new TweenLite(yellow4c, 0.4, {css:{left:"109px",top:"128px"}}),
     new TweenLite(brown1, 0.4,{width:'-=14',height:'-=9'}, {css:{alpha:.5}}),
	 new TweenLite(brown4c, 0.1,{css:{opacity:"1"}}),
	 new TweenLite(brown4c, 0.4, {css:{left:"69px",top:"211px"}})])
	 
	 
	.append([new TweenLite(yellow4c, 0.4,{css:{left:"348px",top:"128px"}}),
     new TweenLite(brown4c, 0.4, {css:{left:"108px",top:"130px"}})])

	.append([new TweenLite(yellow4c, 0.2,{css:{opacity:"0"}}),
     new TweenLite(brown4c, 0.4, {css:{left:"348px",top:"130px"}})])

	.to(brown4c, 0.1,{css:{opacity:"0"}})

	.to(yellow1, 0.4, {css:{left:"58px",top:"52px"}})
	.to(yellow1, 0.4, {css:{left:"109px",top:"128px"}})
	.to(brown1, 0.4, {css:{left:"69px",top:"211px"}})
	
	.append([new TweenLite(yellow1, 0.4, {css:{left:"348px",top:"128px"}}),
     new TweenLite(brown1, 0.4, {css:{left:"108px",top:"130px"}})])
	.to(yellow1, 0.1,{css:{opacity:"0"}})
	.to(brown1, 0.4, {css:{left:"348px",top:"130px"}})
	.to(brown1, 0.1,{css:{opacity:"0"}})
	.to(pause,.05,{onComplete:myFunction})
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
	var temp = '<div id="main_wrapper"><div id="main_container"><img src="yell_1.png" width="28" height="18" id="yell_1" style="position:relative; opacity:0 "/><img src="yell_2.png" width="28" height="18" id="yell_2" style="position:relative; opacity:0"/><img src="yell_3.png" width="28" height="18" id="yell_3" style="position:relative; opacity:0 "/><img src="yell_4.png" width="28" height="18" id="yell_4" style="position:relative; opacity:0 "/><img src="yell_5.png" width="28" height="18" id="yell_5" style="position:relative; opacity:0 "/><img src="yell_6.png" width="28" height="18" id="yell_6" style="position:relative; opacity:0 "/><img src="bro_1.png" width="28" height="18" id="bro_1" style="position:relative; opacity:0 "/><img src="bro_2.png" width="28" height="18" id="bro_2" style="position:relative; opacity:0 "/><img src="bro_3.png" width="28" height="18" id="bro_3" style="position:relative; opacity:0 "/><img src="bro_4.png" width="28" height="18" id="bro_4" style="position:relative; opacity:0"/><img src="bro_5.png" width="28" height="18" id="bro_5" style="position:relative; opacity:0"/><img src="bro_6.png" width="28" height="18" id="bro_6" style="position:relative; opacity:0 "/><div id="ID_s1_txt01">Multiple communications are interleaved, giving each user a part of the bandwidth.</div><div id="ID_s1_txt03"><b>Multiplexing</b> - interleaving the pieces as they traverse the media.</div></div>';
temp += '</div></div>';

temp += '<div id="inetbox" ></div>'
temp += '<div id="captiontext"></div>'

$("#animDiv").html(temp);

	$("#inetbox").html($(data).find("component#ID_txt04").text());
	$("#captiontext").html($(data).find("component#ID_caption").text());
	$("#ID_txt01").html($(data).find("component#ID_txt01").text());	
	$("#ID_txt02").html($(data).find("component#ID_txt02").text());
	$("#ID_txt03").html($(data).find("component#ID_txt03").text());

}

function animation3()
	{   
	yell1  = $("#yell_1");
    yell2  = $("#yell_2");
	yell3  = $("#yell_3");
	yell4  = $("#yell_4");
	yell5  = $("#yell_5");
	yell6  = $("#yell_6");
		
	bro1 = $("#bro_1");
	bro2 = $("#bro_2");
	bro3 = $("#bro_3");
	bro4 = $("#bro_4");
	bro5 = $("#bro_5");
	bro6 = $("#bro_6");
	
	tl.to(yell4, 0.1,{css:{opacity:"1"}})
	.to(yell4, 0.5,{css:{left:"110px",top:"128px"}})
	
	.append([new TweenLite(yell4, 0.5,{css:{left:"345px",top:"128px"}}),
	 new TweenLite(bro4, 0.1,{css:{opacity:"1"}}),
     new TweenLite(bro4, 0.5,{css:{left:"110px",top:"128px"}})])
	.to(yell4,  0.1,{css:{opacity:"0"}})
	.to(bro4, 0.5,{css:{left:"345px",top:"128px"}})
	.to(bro4,  0.1,{css:{opacity:"0"}})
	
	.to(yell5, 0.1,{css:{opacity:"1"}})
	.to(yell5, 0.5,{css:{left:"110px",top:"128px"}})
	
	.append([new TweenLite(yell5, 0.5,{css:{left:"345px",top:"128px"}}),
	 new TweenLite(bro5, 0.1,{css:{opacity:"1"}}),
     new TweenLite(bro5, 0.5,{css:{left:"110px",top:"128px"}})])
	.to(yell5,  0.1,{css:{opacity:"0"}})
	.to(bro5, 0.5,{css:{left:"345px",top:"128px"}})
	.to(bro5,  0.1,{css:{opacity:"0"}})
	
	.to(yell6, 0.1,{css:{opacity:"1"}})
	.to(yell6, 0.5,{css:{left:"110px",top:"128px"}})
	
	.append([new TweenLite(yell6, 0.5,{css:{left:"345px",top:"128px"}}),
	new TweenLite(bro6, 0.1,{css:{opacity:"1"}}),
     new TweenLite(bro6, 0.5,{css:{left:"110px",top:"128px"}})])
	.to(yell6,  0.1,{css:{opacity:"0"}})
	.to(bro6, 0.5,{css:{left:"345px",top:"128px"}})
	.to(bro6,  0.1,{css:{opacity:"0"}})
	

	.to(pause,.05,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

var animeArray = [{name:animation1,animFunction:animation},{name:animation2,animFunction:animation3}];