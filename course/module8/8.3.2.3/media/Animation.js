var yellow_Image,yellow_second,yellow_third,yellow_fourth;
var firstbox,secondbox,thirdbox;
var arow1,arow2,qMark;
var pause,play,restart;

	
var animation1 = function (data)
{
	
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='<div id="maincontainer"><div id="imagecontainer">';
		temp +='<div id="envelope"><img src="envelope.png" width="15" height="10"  style="opacity:0"/></div>';
		temp +='<div id="envelope2" style="opacity:0"><img src="envelope.png" width="30" height="19" /></div>';
		temp +='<div id="envelope3" style="opacity:0"><img src="envelope.png" width="30" height="19" /></div>';
		temp +='<div id="envelope4" style="opacity:0"><img src="envelope.png" width="30" height="19" /></div>';
		temp +='<div id="envelope5"><img src="envelope.png" width="15" height="10" style="opacity:0"/></div>';
		temp +='<div id="envelope6" style="opacity:0"><img src="envelope.png" width="30" height="19" /></div>';
		temp +='<div id="envelope7" style="opacity:0"><img src="envelope.png" width="30" height="19" /></div>';
		temp +='<div id="envelope8" style="opacity:0"><img src="envelope.png" width="30" height="19" /></div>';
		temp +='<div id="topblur" style="opacity:0"><img src="topblur.png" width="230" height="44" /></div>';
		temp +='<div id="bottomblur" style="opacity:0"><img src="topblur.png" width="230" height="44" /></div>';
		temp +='<div id="text1">F0</div>'
		temp +='<div id="text2">10.0.1.0</div>'
		temp +='<div id="text3">F1</div>'
		temp +='<div id="text4">10.0.0.0</div>'
		temp +='<div id="text5">10.0.0.254<br />255.255.255.0</div>'
		temp +='<div id="text6">10.0.1.254<br />255.255.255.0</div>'
		temp +='<div id="text7">F1</div>'
		temp +='<div id="text8">F0</div>'
		temp +='<div id="text9"></div>'
		temp +='<div id="text10">10.0.0.1<br />255.255.255.0</div>'
		temp +='<div id="text11">10.0.0.2<br />255.255.255.0</div>'
		temp +='<div id="text12">10.0.0.253<br />255.255.255.0</div>'
		temp +='<div id="text13">10.0.1.1<br />255.255.255.0</div>'
		temp +='<div id="text14">10.0.1.2<br />255.255.255.0</div>'
		temp +='<div id="text15">10.0.1.253<br />255.255.255.0</div>'
		temp +='<div id="text16"></div>'
		temp += '</div></div>';

$("#animDiv").html(temp);

	$("#text9").html($(data).find("component#ID_txt01").text());
	$("#text16").html($(data).find("component#ID_txt02").text());

}

function animation()
	{   
	var envelopeIMG = $("#envelope>img");
	var envelope5IMG = $("#envelope5>img");
	pause         = $("#pauseBtn");
    play          = $("#playBtn")
	restart       = $("#restartBtn"); 
	
	tl.append([
		new TweenLite(envelopeIMG,.4,{css:{width:30,height:19,opacity:1}}),
        new TweenLite(envelope,.6,{css:{left:"80px",top:"165px"},delay:.4}),
		new TweenLite(envelope,.6,{css:{opacity:0},delay:1}),
		new TweenLite(envelope2,.7,{css:{opacity:1},delay:1.6}),
		new TweenLite(envelope2,1,{css:{left:"195px",top:"81px"},delay:2.3}),
		new TweenLite(envelope2,.6,{css:{opacity:0},delay:3.3}),
		new TweenLite([envelope3,topblur],.6,{css:{opacity:1},delay:3.9}),
		new TweenLite(topblur,.7,{css:{opacity:0},delay:4.5}),
		new TweenLite(topblur,.6,{css:{opacity:1},delay:5.2}),
		new TweenLite(topblur,.6,{css:{opacity:0},delay:5.8}),
		new TweenLite(topblur,.6,{css:{opacity:1},delay:6.4}),
		new TweenLite(topblur,.9,{css:{opacity:1},delay:7}),
		new TweenLite(topblur,.2,{css:{opacity:0},delay:7.9}),
		new TweenLite(envelope3,1,{css:{left:"311px",top:"163px"},delay:8.1}),
		new TweenLite(envelope3,.7,{css:{opacity:0},delay:9.1}),
		new TweenLite(envelope4,.6,{css:{opacity:1},delay:9.8}),
		new TweenLite(envelope4,.8,{css:{left:"247px",top:"215px"},delay:10.4}),
		new TweenLite(envelope4,.6,{css:{opacity:0},delay:11.2}),
		new TweenLite(envelope4,.7,{css:{opacity:1},delay:11.8}),
		new TweenLite(envelope4,.6,{css:{opacity:0},delay:12.5}),
		new TweenLite(envelope4,1.9,{css:{opacity:0},delay:13.1}),
		new TweenLite(envelope5IMG,.6,{css:{width:30,height:19,opacity:1},delay:15}),
		new TweenLite(envelope5IMG,.1,{css:{opacity:1},delay:15.6}),
		new TweenLite(envelope5,.6,{css:{left:"311px",top:"163px"},delay:15.7}),
		new TweenLite(envelope5,.6,{css:{opacity:0},delay:16.3}),
		new TweenLite(envelope6,.6,{css:{opacity:1},delay:16.9}),
		new TweenLite(envelope6,1.1,{css:{left:"195px",top:"81px"},delay:17.5}),		
		new TweenLite(envelope6,.6,{css:{opacity:0},delay:18.6}),		
		new TweenLite([bottomblur,envelope7],.6,{css:{opacity:1},delay:19.2}),		
		new TweenLite(bottomblur,.7,{css:{opacity:0},delay:19.8}),		
		new TweenLite(bottomblur,.6,{css:{opacity:1},delay:20.5}),		
		new TweenLite(bottomblur,.6,{css:{opacity:0},delay:21.1}),		
		new TweenLite(bottomblur,.6,{css:{opacity:1},delay:21.7}),
		new TweenLite(bottomblur,1.1,{css:{opacity:0},delay:22.3}),
		new TweenLite(envelope7,1,{css:{left:"80px",top:"165px"},delay:23.4}),
		new TweenLite(envelope7,.6,{css:{opacity:0},delay:24.4}),
		new TweenLite(envelope8,.7,{css:{opacity:1},delay:25}),
		new TweenLite(envelope8,.8,{css:{left:"14px",top:"213px"},delay:25.7}),
		new TweenLite(envelope8,.6,{css:{opacity:0},delay:26.5}),
		new TweenLite(envelope8,.7,{css:{opacity:1},delay:27.1}),
		new TweenLite(envelope8,.6,{css:{opacity:0},delay:27.8}),
		
		
			])	
	
	//tl.to(envelopeIMG,.4,{css:{width:30,height:19,opacity:1}})
	
	
	.to(pause,.05,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

var animeArray = [{name:animation1,animFunction:animation}];