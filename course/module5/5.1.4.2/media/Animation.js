	
/* ANIMATION 1 starts */
	
	var animation1 = function(data)
	{
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

	var temp ='';	
	temp += '<div id="tableWrapper">';
	temp += '<div id="texts1"></div>';
	temp += '<div id="texts2"></div>';
	temp += '<div id="texts3"></div>';
	temp += '<div id="texts4"></div>';
	temp += '<div id="texts5"></div>';
	temp += '<div id="texts6"></div>';
	temp += '<div id="texts7"></div>';
	temp += '<div id="texts8"></div>';
	temp += '<div id="outerbox1"><img src="frames_group1_1.png" /></div>';
	temp += '<div id="outerbox2"><img src="frames_group1_2.png" /></div>';
	temp += '</div>';
				
			$("#animDiv").html(temp);
			$("#texts1").html($(data).find("component#ID_s1_destMAC").text());
			$("#texts2").html($(data).find("component#ID_s1_sourceMAC").text());
			$("#texts3").html($(data).find("component#ID_s1_destIP").text());
			$("#texts4").html($(data).find("component#ID_s1_sourceIP").text());	
			$("#texts5").html($(data).find("component#ID_s1_data").text());
			$("#texts6").html($(data).find("component#ID_s1_FCS").text());
			$("#texts7").html($(data).find("component#ID_s1_txt01").text());
			$("#texts8").html($(data).find("component#ID_s1_txt02").text());
			
}

	
	
	function animation1_1()
	{	
	outerbox1  = $("#outerbox1");	
	outerbox2  = $("#outerbox2");	
	pause = $("#pauseBtn");
	play  = $("#playBtn")
	restart= $("#restartBtn"); 
	var texts7 = $("#texts7");
	var texts8 = $("#texts8");
	
		
	tl.to([outerbox1,texts7],1, {css:{opacity:"1"},delay:1})	  
	  .to(outerbox1, 1, {css:{opacity:"0"},delay:4})
	  .to(texts7, .1, {css:{opacity:"0"}})
	  .to([outerbox2,texts8],1, {css:{opacity:"1"},delay:1})	  
	  .to(outerbox2, 1, {css:{opacity:"0"},delay:4})
	  .to(texts8, .1, {css:{opacity:"0"}})	
	  .to(pause,.05,{onComplete:myFunction1})
	}
	
	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
/* ANIMATION 1 ENDS HERE */	
		
	
/* ANIMATION 2 STARTS HERE */

var animation2 = function (data)
	{
	
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	
	var temp ='';
	temp = '<div id="maincontainer">';
	temp +='<div id="text1"></div>';
	temp +='<div id="text2"></div>';
	temp +='<div id="text3"></div>';
	temp +='<div id="imagecontainer">';	
	temp +='<div id="text4"></div>';
	temp +='<div id="text5"></div>';
	//Animation Resources Starts
	temp +='<div id="frame" style="opacity:0">Frame</div>';
	temp +='<div id="frame1" style="opacity:0">Frame</div>';
	temp +='<div id="gradient"><img src="vig-amimation.png" width="80.15" height="9" /></div>';
	temp +='<div id="wless1" style="opacity:0"><img src="wireless_signal.png" width="57" height="40" /></div>';
	temp +='<div id="wless2" style="opacity:0"><img src="wireless_signal1.png" width="57" height="40" /></div>';
	temp +='<div id="gradient1"><img src="vig-amimation.png" width="83.15" height="9" /></div>';
	temp +='<div id="frame2" style="opacity:0">Frame</div>';
	temp +='<div id="spring"><img src="spring_final.gif" width="10" height="51" /></div>';	
	
	temp +='</div></div>';

$("#animDiv").html(temp);
$("#text1").html($(data).find("component#ID_s2_txt01").text());
$("#text2").html($(data).find("component#ID_s2_txt02").text());
$("#text3").html($(data).find("component#ID_s2_txt03").text());
$("#text4").html($(data).find("component#ID_s2_txt05").text());
$("#text5").html($(data).find("component#ID_s2_txt06").text());
}

function animation2_2()
	{  	firstBtn= $("#firstBtn");
		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn"); 
		
		
		
		tl.to(frame,1.2,{css:{opacity:1}})
		tl.to(frame,.5,{css:{opacity:1}})
		tl.to(frame,.8,{css:{top:"72px"}})
		tl.to(frame,.7,{css:{opacity:0}})
		tl.to(frame1,.6,{css:{opacity:1}})
		tl.to(frame1,.7,{css:{opacity:1}})
		
		tl.append([
		new TweenLite(frame1,1.4,{css:{left:"114px"}}),
        new TweenLite(gradient,.9,{css:{clip:"rect(0px 80.5px 15px 0px)"},delay:.3}),
		])	
		tl.to(frame1,.6,{css:{opacity:1}})
		tl.append([
		new TweenLite(frame1,1.3,{css:{left:"177px",top:"21px"}}),
        new TweenLite(wless1,.05,{css:{opacity:1},delay:.3}),
		new TweenLite(wless1,.05,{css:{opacity:0},delay:.35}),
		new TweenLite(wless1,.05,{css:{opacity:1},delay:.4}),
		new TweenLite(wless1,.05,{css:{opacity:0},delay:.45}),
		new TweenLite(wless1,.05,{css:{opacity:1},delay:.5}),
		new TweenLite(wless1,.05,{css:{opacity:0},delay:.55}),
		new TweenLite(wless1,.05,{css:{opacity:1},delay:.6}),
		new TweenLite(wless1,.05,{css:{opacity:0},delay:.65}),
		new TweenLite(wless1,.05,{css:{opacity:1},delay:.7}),
		new TweenLite(wless1,.05,{css:{opacity:0},delay:.75}),
		new TweenLite(wless1,.05,{css:{opacity:1},delay:.8}),
		new TweenLite(wless1,.05,{css:{opacity:0},delay:.85}),
		new TweenLite(wless1,.05,{css:{opacity:1},delay:.9}),
		])
		tl.to(frame1,.8,{css:{left:"177px",top:"21px"}})	
		tl.append([
		new TweenLite(frame1,1.3,{css:{left:"241px",top:"71px"}}),
        new TweenLite(wless2,.05,{css:{opacity:1},delay:.2}),
		new TweenLite(wless2,.05,{css:{opacity:0},delay:.25}),
		new TweenLite(wless2,.05,{css:{opacity:1},delay:.3}),
		new TweenLite(wless2,.05,{css:{opacity:0},delay:.35}),
		new TweenLite(wless2,.05,{css:{opacity:1},delay:.4}),
		new TweenLite(wless2,.05,{css:{opacity:0},delay:.45}),
		new TweenLite(wless2,.05,{css:{opacity:1},delay:.5}),
		new TweenLite(wless2,.05,{css:{opacity:0},delay:.55}),
		new TweenLite(wless2,.05,{css:{opacity:1},delay:.6}),
		new TweenLite(wless2,.05,{css:{opacity:0},delay:.65}),
		new TweenLite(wless2,.05,{css:{opacity:1},delay:.7}),
		new TweenLite(wless2,.05,{css:{opacity:0},delay:.75}),
		new TweenLite(wless2,.05,{css:{opacity:1},delay:.8}),
		])
		tl.to(frame1,.6,{css:{left:"241px",top:"71px"}})		
		tl.append([
		new TweenLite(frame1,1.5,{css:{left:"352px"}}),
        new TweenLite(gradient1,1,{css:{clip:"rect(0px 83.5px 15px 0px)"},delay:.2}),
		])		
		tl.to(frame1,.8,{css:{opacity:1}})
		tl.to(frame1,.3,{css:{opacity:0}})
		tl.to(frame1,.3,{css:{opacity:0}})
		tl.to(frame2,.3,{css:{opacity:1}})
		tl.to(spring,.7,{css:{clip:"rect(0px 10px 52px 0px)"}})
		tl.to(frame2,.9,{css:{top:"142px"}})
		tl.to(frame2,.5,{onComplete:myFunction2})		
		tl.to(pause,.05,{onComplete:myFunction1})
	}
	
	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}	
	
	function myFunction2()
	{
	 $("#spring>img").attr("src","spring_still.png")
	 
	 $("#firstBtn").click(function(){
		 $("#spring>img").attr("src","spring_final.gif")
		 });
		 
		 $("#rewindBtn").click(function(){
		 $("#spring>img").attr("src","spring_final.gif")
		 });
		 
		  $("#restartBtn").click(function(){
		 $("#spring>img").attr("src","spring_final.gif")
		 });
	}
	

var animeArray = [{name:animation1,animFunction:animation1_1},{name:animation2,animFunction:animation2_2}];