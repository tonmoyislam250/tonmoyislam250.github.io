var zoomImg;
var pause,play,restart;
var animation1 = function(data)
{
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

var temp = '';

 
temp +='<div id="main_wrapper"><div id="main_container">';
temp +='<img id="imgRightPanel" src="images/rightpanel.jpg"/>';
temp +='<a href="javascript:;" onclick="aTween1_Click();" id="aTween1"><img id="imgTween1" src="images/Tween_small.png"/></a>';
temp +='<a href="javascript:;" onclick="aTween2_Click();" id="aTween2"><img id="imgTween2" src="images/Tween2_small.png" /></a>';
temp +='<a href="javascript:;" onclick="aTween3_Click();" id="aTween3"><img id="imgTween3" src="images/Tween3_small.png" /></a>';
temp +='<a href="javascript:;" onclick="aTween4_Click();" id="aTween4"><img id="imgTween4" src="images/Tween4_small.png" /></a>';
temp +='<div id="ID_txt01"/><div id="ID_txt02"/>';
temp +='<div id="ID_txt03"/><div id="ID_txt04"/>'; 
temp +='<div id="ID_txt05"/>'; 
temp +='<div id="txtTitle"/><div id="inst"/>'; /**/

temp +='<p id="bubble">';
temp +='<img src="images/whois1.png" id="imgWhois1" />';
temp +='<img src="images/whois2.png" id="imgWhois2"/>';
temp +='<img src="images/whois3.png" id="imgWhois3" />';/*<span id="bubbleTxt">cisco.com</span>*/
temp +='</p>';

temp +='<img src="images/ball_g.png" id="ball1"><img src="images/ball_g.png" id="ball2">';
temp +='<img src="images/ball_g.png" id="ball3"><img src="images/ball_g.png" id="ball4">';
 
temp +='<img src="images/MagnifyingGlass.png" id="imgMagnify">';
temp +='<img src="images/ball_g.png" id="ball5"><img src="images/ball_g.png" id="ball6">';
temp +='<img src="images/ball_g.png" id="ball7"><img src="images/ball_g.png" id="ball8">';

temp +='<p id="bubble1"><span id="ID_txt08"/></p>';

temp +='<p id="bubble2"><span id="ID_txt07"/>';
temp +='<img src="images/PortSweep.png" id="imgPortSweep" /> '; 
temp +='</p>';

temp +='<p id="bubble3"><span id="ID_txt06"/>';
temp +='<img src="images/WireShark.png" id="imgWireShark" /> '; 
temp +='</p>';

temp += '</div></div>'

$("#animDiv").html(temp);

$("#txtTitle").html($(data).find("component#title").text());$("#inst").html($(data).find("component#inst").text());
$("#ID_txt01").html($(data).find("component#ID_txt01").text());$("#ID_txt02").html($(data).find("component#ID_txt02").text());
$("#ID_txt03").html($(data).find("component#ID_txt03").text());$("#ID_txt04").html($(data).find("component#ID_txt04").text());
$("#ID_txt05").html($(data).find("component#ID_txt05").text());$("#ID_txt06").html($(data).find("component#ID_txt06").text());

$("#ID_txt07").html($(data).find("component#ID_txt07").text());  
$("#ID_txt08").html($(data).find("component#ID_txt08").text());  

 
}
 

function aTween1_Click(){
 if(!$('#aTween1 > img').hasClass("imgScale")){
		$('#main_container > a >img').removeClass("imgScale");
		$('#aTween1 > img').addClass('imgScale');  
		tl.time(0);
		tl.gotoAndPlay("Internet_queries");
	}
}


function aTween2_Click(){
	 if(!$('#aTween2 > img').hasClass("imgScale")){

		$('#main_container > a >img').removeClass("imgScale");
		$('#aTween2 > img').addClass('imgScale');  
		tl.time(0);
		tl.gotoAndPlay("Ping_sweeps");
	} 
}

function aTween3_Click(){
	 if(!$('#aTween3 > img').hasClass("imgScale")){
		$('#main_container > a >img').removeClass("imgScale"); 
		$('#aTween3 > img').addClass('imgScale');  
		tl.time(0);
		tl.gotoAndPlay("Port_scan");
	}
}

function aTween4_Click(){
	 if(!$('#aTween4 > img').hasClass("imgScale")){
		$('#main_container > a >img').removeClass("imgScale"); 
		$('#aTween4 > img').addClass('imgScale');  
		tl.time(0);
		tl.gotoAndPlay("Packet_sniffers");
	}
}


function animation()
	{  
		pause         = $("#pauseBtn");
		play          = $("#playBtn")
		restart       = $("#restartBtn");  
		
		bubble = $("#bubble"); 
		bubble1 = $("#bubble1"); 
		bubble2 = $("#bubble2"); 
		imgWhois1 = $("#imgWhois1"); 
		imgWhois2 = $("#imgWhois2"); 
		imgWhois3 = $("#imgWhois3");  

		ball1 = $("#ball1"); 
		ball2 = $("#ball2"); 
		ball3 = $("#ball3"); 
		ball4 = $("#ball4");
		ball5 = $("#ball5");
		ball6 = $("#ball6"); 
		ball7 = $("#ball7");
		ball8 = $("#ball8"); 
		imgMagnify = $("#imgMagnify"); 
		

	tl.addLabel("Internet_queries",.1);
	tl.to([bubble,imgWhois1],1,{css:{opacity:1}}) 
	tl.append([ 
				new TweenLite(imgWhois1,.5,{css:{opacity:0}}), 
				new TweenLite(imgWhois2,.5,{css:{opacity:1},delay:1}),
				new TweenLite(imgWhois2,.5,{css:{opacity:0},delay:2}), 
				new TweenLite(imgWhois3,.5,{css:{opacity:1},delay:3,onComplete:CompleteHandler})
			])  
	tl.addLabel("Ping_sweeps",5.3);
	tl.to([bubble,imgWhois3],1,{css:{opacity:0}}) 
	tl.to([ball1,ball2,ball3,ball4],.5,{css:{opacity:1}})
			tl.append([ 
					new TweenLite(ball1,.5,{css:{left:383}}), 
					new TweenLite(ball1,.5,{css:{top:118},delay:.5}),
					new TweenLite(ball1,.5,{css:{left:417},delay:1}), 
				]) 

			tl.append([ 
					new TweenLite(ball2,.5,{css:{left:383}}), 
					new TweenLite(ball2,.5,{css:{top:177},delay:.5}),
					new TweenLite(ball2,.5,{css:{left:417},delay:1}), 
				]) 

			tl.append([ 
					new TweenLite(ball3,.5,{css:{left:383}}), 
					new TweenLite(ball3,.5,{css:{top:239},delay:.5}),
					new TweenLite(ball3,.5,{css:{left:417},delay:1}), 
				]) 

			tl.append([ 
					new TweenLite(ball4,.5,{css:{left:383}}), 
					new TweenLite(ball4,.5,{css:{top:298},delay:.5}),
					new TweenLite(ball4,.5,{css:{left:417},delay:1}), 
				]) 

		 //reverse

			tl.append([ 
					new TweenLite(ball1,.5,{css:{left:383}}), 
					new TweenLite(ball1,.5,{css:{top:207},delay:.5}),
					new TweenLite(ball1,.5,{css:{left:305},delay:1}), 
				]) 

			tl.append([ 
					new TweenLite(ball2,.5,{css:{left:383}}), 
					new TweenLite(ball2,.5,{css:{top:207},delay:.5}),
					new TweenLite(ball2,.5,{css:{left:305},delay:1}), 
				]) 

			tl.append([ 
					new TweenLite(ball3,.5,{css:{left:383}}), 
					new TweenLite(ball3,.5,{css:{top:207},delay:.5}),
					new TweenLite(ball3,.5,{css:{left:305},delay:1}), 
				]) 

			tl.append([ 
					new TweenLite(ball4,.5,{css:{left:383}}), 
					new TweenLite(ball4,.5,{css:{top:207},delay:.5}),
					new TweenLite(ball4,.5,{css:{left:305},delay:1}), 
				])   
  			tl.to(bubble1,1,{css:{opacity:1},onComplete:CompleteHandler}) 
  			  
	

	tl.addLabel("Port_scan",19.1)
	tl.to(bubble1,.1,{css:{opacity:0}})
	tl.to([ball1,ball2,ball3,ball4],.5,{css:{opacity:1}})
	tl.append([
			new TweenLite(ball1,.5,{css:{opacity:1,left:383}}),
			new TweenLite(ball2,.5,{css:{opacity:1,left:383},delay:.2}) ,
			new TweenLite(ball3,.5,{css:{opacity:1,left:383},delay:.3}) ,
			new TweenLite(ball4,.5,{css:{opacity:1,left:383},delay:.4}) ,
	    ])	 
	tl.append([
			new TweenLite(ball1,.5,{css:{top:118}}),
			new TweenLite(ball2,.5,{css:{top:177}}) ,
			new TweenLite(ball3,.5,{css:{top:239}}) ,
			new TweenLite(ball4,.5,{css:{top:298}}) ,
	    ])
	tl.to([ball1,ball2,ball3,ball4],.5,{css:{left:417}})
	//reverse
	tl.to([ball1,ball2,ball3,ball4],.5,{css:{left:383},delay:1})

	tl.to([ball1,ball2,ball3,ball4],.5,{css:{top:207}})
	
	tl.append([
			new TweenLite(ball1,.5,{css:{left:305}}),
			new TweenLite(ball2,.5,{css:{left:305},delay:.2}),
			new TweenLite(ball3,.5,{css:{left:305},delay:.3}),
			new TweenLite(ball4,.5,{css:{left:305},delay:.4}),
	    ])	

	.to(bubble2,.1,{css:{opacity:1},onComplete:CompleteHandler})  
		
	tl.addLabel("Packet_sniffers",24.5);
	//tl.to(,.1,{css:{opacity:0}})
	tl.to([bubble2,ball1,ball2,ball3,ball4],.1,{css:{opacity:0}})
	tl.to(ball5,.1,{css:{opacity:1}}) 

	tl.to(imgMagnify,.5,{css:{opacity:1}})
	 
	.to(imgMagnify,.5,{css:{left:383}})
	.to(imgMagnify,.5,{css:{top:222}})
	.to(imgMagnify,.5,{css:{top:162}})  
	.append([
		new TweenLite(imgMagnify,.5,{css:{top:194}}),
		new TweenLite(ball5,.5,{css:{left:383}})
	]) 
	tl.append([ 
		new TweenLite(imgMagnify,.1,{css:{top:200}}),
		new TweenLite(ball5,.1,{css:{opacity:1,top:196}}),
		new TweenLite(ball6,.1,{css:{opacity:1,top:194}}),
		new TweenLite(ball7,.1,{css:{opacity:1,top:194}}),
		new TweenLite(ball8,.1,{css:{opacity:1,top:194}}),
	])
	.append([ 
		new TweenLite(ball5,.1,{css:{top:117}}),
		new TweenLite(ball6,.1,{css:{top:177.5}}),
		new TweenLite(ball7,.1,{css:{top:240}}),
		new TweenLite(ball8,.1,{css:{top:301}}),
	])
	.append([ 
		new TweenLite(ball5,.1,{css:{top:117}}),
		new TweenLite(ball6,.1,{css:{left:417}}),
		new TweenLite(ball7,.1,{css:{top:240}}),
		new TweenLite(ball8,.1,{css:{left:417}}),
	])	
	.append([ 
		new TweenLite(ball5,.1,{css:{left:417}}),
		new TweenLite(ball6,.1,{css:{left:384}}),
		new TweenLite(ball7,.1,{css:{top:240}}),
		new TweenLite(ball8,.1,{css:{left:417}}),
	])	
	.append([ 
		new TweenLite([ball5,ball7,ball8],.1,{css:{left:417}}),
		new TweenLite(ball6,.1,{css:{left:384}}) 
	])
	.append([ 
		new TweenLite(ball5,.1,{css:{left:384}}),
		new TweenLite(ball6,.1,{css:{top:238.5}}),
		new TweenLite(ball6,.1,{css:{left:417}}),
		new TweenLite(ball7,.1,{css:{left:384}}),
		new TweenLite(ball8,.1,{css:{left:384}}),
	])	
	.append([
		new TweenLite(ball5,.1,{css:{top:177.5}}),
		new TweenLite(ball6,.1,{css:{top:238.5}}),
		new TweenLite(ball7,.1,{css:{top:264}}),
		new TweenLite(ball8,.1,{css:{top:301}}),
	])	
	.append([ 
		new TweenLite(ball5,.1,{css:{top:238.5}}),
		new TweenLite(ball6,.1,{css:{left:417}}),
		new TweenLite(ball7,.1,{css:{top:301}}),
		new TweenLite(ball8,.1,{css:{top:117}}),
	])	
	.append([  
		new TweenLite(ball6,.1,{css:{left:384}}),
		new TweenLite(ball7,.1,{css:{left:417}}), 
	])	

	.to(ball6,.1,{css:{top:177.5}})
	.to([ball5,ball8],.1,{css:{left:417}})
		
	.append([  
		new TweenLite(ball6,.1,{css:{left:417}}),
		new TweenLite(ball7,.1,{css:{left:384}}), 
	])
	.append([
		new TweenLite(ball5,.1,{css:{left:393}}), 
		new TweenLite(ball7,.1,{css:{top:238.5}}),
		new TweenLite(ball8,.1,{css:{left:384}}),
	])
	.append([ 
		new TweenLite(ball5,.1,{css:{left:384}}), 
		new TweenLite(ball7,.1,{css:{top:198}}),
		new TweenLite(ball8,.1,{css:{top:177.5}}),
	])
	.append([ 
		new TweenLite(ball5,.1,{css:{top:301}}),
		new TweenLite(ball6,.1,{css:{left:384}}),
		new TweenLite(ball7,.1,{css:{top:177.5,left:417}}), 
		new TweenLite(ball8,.1,{css:{top:238.5}}),
	])		
	
	.append([
		new TweenLite(ball5,.1,{css:{left:384}}),
		new TweenLite(ball6,.1,{css:{top:117}}),
		new TweenLite(ball7,.1,{css:{left:384}}),
		new TweenLite(ball8,.1,{css:{left:417}}),
	])	
	.to([ball5,ball6,ball7,ball8],.1,{css:{left:417}})
		
	.append([ 
		new TweenLite(ball5,.1,{css:{left:417}}),
		new TweenLite(ball6,.1,{css:{left:384}}), 
	])	
	.to([ball5,ball6,ball7,ball8],.1,{css:{left:384}}) 
		
	.to([ball5,ball6,ball7,ball8],.1,{css:{left:417}})
	.to(bubble3,.1,{css:{opacity:1},onComplete:CompleteHandler}) 

}
function CompleteHandler ()
{
	tl.pause(); 
}


var animeArray = [{name:animation1,animFunction:animation}];