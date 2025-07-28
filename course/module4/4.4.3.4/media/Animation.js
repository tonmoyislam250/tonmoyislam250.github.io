
var animation1 = function(data)
{

	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

	var temp =''; 
	temp += '<div id="main_wrapper"><div id="main_container">' ;
	temp += '<div id="ID_txt01"/><div id="ID_txt02"/><div id="ID_txt03"/><div id="ID_txt04"/><div id="ID_txt05"/>';
	temp += '<div id="ID_txt06"/><div id="arrow1"><img src="arrow01.png" /></div>';
	temp += '<div id="ID_txt07"/><div id="arrow2"><img src="arrow02.png" /></div>';
	temp += '<div id="ID_txt08"/><div id="arrow3"><img src="arrow03.png" /></div>';
	temp += '<div id="ID_txt09"/><div id="arrow4"><img src="arrow04.png" /></div>';
	temp += '<div id="ID_txt19"/></div><div id="ID_txt20"/></div><div id="ID_txt21"/></div><div id="ID_txt22"/></div>';
	temp += '<div id="Red_X1"><img src="Red_X.png" /></div><div id="Red_X2"><img src="Red_X.png" /></div><div id="Red_X3"><img src="Red_X.png" /></div>';
	temp += '<div id="ID_txt14" /><div id="arrow5"><img src="arrow05.png" /></div>';
	temp += '<div id="ID_txt15" /><div id="arrow6"><img src="arrow06.png" /></div>';
	temp += '<div id="ID_txt16" /><div id="arrow7"><img src="arrow07.png" /></div>';
    temp += '<div id="ID_txt17" /><div id="arrow8"><img src="arrow08.png" /></div>';
	temp += '<img id="ID_picD" src="9.2.3.4DD.png" />';
	temp += '<img id="ID_picDD" src="9.2.3.4DD.png" />';
	temp += '<div id="arrow9"><img src="arrow09.png" /></div>';
	temp += '<div id="ID_txt23"/></div><div id="ID_txt24"/></div><div id="ID_txt25"/></div><div id="ID_txt26"/></div>';
	temp += '<div id="Red_X4"><img src="Red_X.png" /></div><div id="Red_X5"><img src="Red_X.png" /></div><div id="Red_X6"><img src="Red_X.png" /></div>';
	temp += '</div></div>';
	
			

$("#animDiv").html(temp);

	
	$("#ID_txt01").html($(data).find("component#ID_txt01").text());	
	$("#ID_txt02").html($(data).find("component#ID_txt02").text());
	$("#ID_txt03").html($(data).find("component#ID_txt03").text());
	$("#ID_txt04").html($(data).find("component#ID_txt04").text());
	$("#ID_txt05").html($(data).find("component#ID_txt05").text());
	$("#ID_txt06").html($(data).find("component#ID_txt06").text());
	$("#ID_txt07").html($(data).find("component#ID_txt07").text());
	$("#ID_txt08").html($(data).find("component#ID_txt08").text());
	$("#ID_txt09").html($(data).find("component#ID_txt09").text());
	$("#ID_txt19").html($(data).find("component#ID_txt19").text());
	$("#ID_txt20").html($(data).find("component#ID_txt20").text());
	$("#ID_txt21").html($(data).find("component#ID_txt21").text());
	$("#ID_txt22").html($(data).find("component#ID_txt22").text());
	$("#ID_txt14").html($(data).find("component#ID_txt14").text());
	$("#ID_txt15").html($(data).find("component#ID_txt15").text());
	$("#ID_txt16").html($(data).find("component#ID_txt16").text());
    $("#ID_txt17").html($(data).find("component#ID_txt17").text());
	$("#ID_txt23").html($(data).find("component#ID_txt23").text());
	$("#ID_txt24").html($(data).find("component#ID_txt24").text());
	$("#ID_txt25").html($(data).find("component#ID_txt25").text());
	$("#ID_txt26").html($(data).find("component#ID_txt26").text());


}


	function animation()
	{   
		ID_txt01= $("#ID_txt01");
		ID_txt02= $("#ID_txt02");
		ID_txt03= $("#ID_txt03");
		ID_txt04= $("#ID_txt04");
		ID_txt05= $("#ID_txt05");		
		ID_txt06= $("#ID_txt06");
		arrow1= $("#arrow1");
		ID_txt07= $("#ID_txt07");
		arrow2= $("#arrow2");
		ID_txt08= $("#ID_txt08");
		arrow3= $("#arrow3");
		ID_txt09= $("#ID_txt09");
		arrow4= $("#arrow4");
		ID_txt19= $("#ID_txt19");
		ID_txt20= $("#ID_txt20");
        Red_X1= $("#Red_X1");
		ID_txt21= $("#ID_txt21");
		ID_txt22= $("#ID_txt22");
		ID_txt14= $("#ID_txt14");
		arrow5= $("#arrow5");
		ID_txt15= $("#ID_txt15");
		arrow6= $("#arrow6");
		ID_picD= $("#ID_picD");
		ID_picDD= $("#ID_picDD");
		ID_txt16= $("#ID_txt16");
		arrow7= $("#arrow7");
		ID_txt17= $("#ID_txt17");
		arrow8= $("#arrow8");
		arrow9= $("#arrow9");
		ID_txt23= $("#ID_txt23");
		ID_txt24= $("#ID_txt24");
		ID_txt25= $("#ID_txt25");
		ID_txt26= $("#ID_txt26");


	
	pause = $("#pauseBtn");
	play  = $("#playBtn");
	restart= $("#restartBtn");
	 
	tl.to([arrow1,ID_txt06],1,{css:{opacity:1}})
	  .to([arrow1,ID_txt06],1,{css:{opacity:1},delay:1})
	  .to([arrow1],1,{css:{opacity:0}})
	 
	  .to([arrow2,ID_txt07],1,{css:{opacity:1}})
	  .to([arrow2,ID_txt07],1,{css:{opacity:1},delay:1})
	  .to([arrow2],1,{css:{opacity:0}})

	  .to([arrow3,ID_txt08],1,{css:{opacity:1}})
	  .to([arrow3,ID_txt08],1,{css:{opacity:1},delay:1})
	  .to([arrow3],1,{css:{opacity:0}})
	
	  .to([arrow4,ID_txt09],1,{css:{opacity:1}})	
	  .to([ID_txt19],1,{css:{opacity:1}})
	  .to([ID_txt19],1,{css:{top:74}}) 
	  

	.append([ 
		new TweenLite([ID_txt19],1.9,{css:{left:195}}),
		new TweenLite(ID_txt20,.05,{css:{opacity:1},delay:.25}),	
		new TweenLite(ID_txt20,.8,{css:{left:238,top:161},delay:.35}),
		new TweenLite(ID_txt20,.1,{css:{opacity:0},delay:1}),
		new TweenLite(Red_X1, 1,{css:{opacity:1},delay:1}),

		new TweenLite(ID_txt21,.02,{css:{opacity:1},delay:.6}),
		new TweenLite(ID_txt21,.8,{css:{left:294,top:72},delay:.45}),
		new TweenLite(ID_txt21,.3,{css:{opacity:0},delay:1.7}),
		new TweenLite(Red_X2, 1,{css:{opacity:1},delay:1}),

		new TweenLite(ID_txt22,.05,{css:{opacity:1},delay:.8}),
		new TweenLite(ID_txt22,1,{css:{left:333,top:182},delay:1.2}),	
		new TweenLite(ID_txt22,.3,{css:{opacity:0},delay:2.5}),
		new TweenLite(Red_X3, 1,{css:{opacity:1},delay:2.2})
		])	
		.append([ 
		new TweenLite(Red_X1, 1,{css:{opacity:0}}),
		new TweenLite(Red_X2, 1,{css:{opacity:0}}),
		new TweenLite(Red_X3, 1,{css:{opacity:0}})
		])

	  .to([arrow5,ID_txt14],2,{css:{opacity:1}})
	  .to([arrow5,ID_txt14],1,{css:{opacity:1},delay:1})
	  .to([arrow5],1,{css:{opacity:0}})

	  .to([arrow6,ID_txt15],2,{css:{opacity:1}})
	  .to([arrow6,ID_txt15],1,{css:{opacity:1},delay:1})
	  .to([arrow6],1,{css:{opacity:0}})
	
	  .to([arrow7,ID_txt16],2,{css:{opacity:1}})
	  .to([arrow7,ID_txt16],1,{css:{opacity:1},delay:1})
	  .to([arrow7],1,{css:{opacity:0}})
	  .to([ID_txt19],1,{css:{top:10}}) 
	  .to([ID_txt19],1,{css:{opacity:0}}) 


	  .to([ID_picD],.5,{css:{opacity:1}})
	  .to(ID_picD,.5,{css:{opacity:0}})
	  .to([ID_picD],.5,{css:{opacity:1}})
	  .to(ID_picD,.5,{css:{opacity:0}})
	  .to([ID_picD],.5,{css:{opacity:1}})
	  .to(ID_picD,.5,{css:{opacity:0}})
	 		
		
	 	
	  .append([ 
		new TweenLite(ID_txt06, 1,{css:{opacity:0}}),
		new TweenLite(ID_txt07, 1,{css:{opacity:0}}),
		new TweenLite(ID_txt08, 1,{css:{opacity:0}}),
		new TweenLite(ID_txt09, 1,{css:{opacity:0}}),
		new TweenLite(arrow4, 1,{css:{opacity:0}})
		])
	 
	  .to([arrow8,ID_txt17],2,{css:{opacity:1}})
	  .to([arrow8,ID_txt17],1,{css:{opacity:1},delay:1})
	  .to([arrow8],1,{css:{opacity:0}})

	   .to([ID_txt09],1,{css:{opacity:0,top:115}})
	   .to([arrow9,ID_txt09],2,{css:{opacity:1}})
	   .to([arrow9,ID_txt09],2,{css:{opacity:1},delay:1})
      // .to([arrow9],1,{css:{opacity:0}})
	   
	  
	/*.append([ 
		new TweenLite(ID_picD, .5,{css:{opacity:1}}),
		new TweenLite(ID_picD, .5,{css:{opacity:0},delay:.5}),
	 ])
*/
	.append([ 
		new TweenLite(ID_txt23, .5,{css:{opacity:1}}),		
		new TweenLite(ID_txt23, .9,{css:{top:136}}),		
		new TweenLite(ID_txt23, 2,{css:{left:380},delay:1}),
		new TweenLite(ID_txt24, .5,{css:{opacity:1}}),
		new TweenLite(ID_txt24, .9,{css:{top:136}}),
		new TweenLite(ID_txt24, 1,{css:{left:204},delay:1}),		
		new TweenLite(ID_txt24, .5,{css:{top:72},delay:2.1}),		
		new TweenLite(ID_txt25, .5,{css:{opacity:1},delay:1.5}),		
		new TweenLite(ID_txt25, .5,{css:{top:72},delay:2.1}),
		new TweenLite(ID_txt24, 1,{css:{opacity:0},delay:2.5}),
	    new TweenLite(ID_txt25, 1,{css:{opacity:0},delay:2.5}),
		new TweenLite(ID_txt26, .3,{css:{opacity:1},delay:2.1}),
		new TweenLite(ID_txt26, 1,{css:{top:182},delay:2.5}),
		new TweenLite(ID_txt23, 1,{css:{top:72},delay:3}),
		new TweenLite(ID_txt26, .5,{css:{opacity:0},delay:4})
		])

		.to([ID_txt23],2,{css:{opacity:0}})

		.append([ 
		new TweenLite(Red_X4, .5,{css:{opacity:1}}),
		new TweenLite(Red_X4, .5,{css:{opacity:0},delay:.5}),
		new TweenLite(Red_X5, .5,{css:{opacity:1}}),
		new TweenLite(Red_X5, .5,{css:{opacity:0},delay:.5}),
		new TweenLite(Red_X6, .5,{css:{opacity:1}}),
		new TweenLite(Red_X6, .5,{css:{opacity:0},delay:.5})
		])
		.append([ 
		new TweenLite(Red_X4, .5,{css:{opacity:1}}),
		new TweenLite(Red_X4, .5,{css:{opacity:0},delay:.5}),
		new TweenLite(Red_X5, .5,{css:{opacity:1}}),
		new TweenLite(Red_X5, .5,{css:{opacity:0},delay:.5}),
		new TweenLite(Red_X6, .5,{css:{opacity:1}}),
		new TweenLite(Red_X6, .5,{css:{opacity:0},delay:.5})
		])
		
		.append([ 
		new TweenLite(Red_X4, .5,{css:{opacity:1}}),
		new TweenLite(Red_X4, .5,{css:{opacity:0},delay:.5}),
		new TweenLite(Red_X5, .5,{css:{opacity:1}}),
		new TweenLite(Red_X5, .5,{css:{opacity:0},delay:.5}),
		new TweenLite(Red_X6, .5,{css:{opacity:1}}),
		new TweenLite(Red_X6, .5,{css:{opacity:0},delay:.5})
		])
		  .to([ID_picDD],.5,{css:{opacity:1}})
		  .to(ID_picDD,.5,{css:{opacity:0}})
		  .to([ID_picDD],.5,{css:{opacity:1}})
		  .to(ID_picDD,.5,{css:{opacity:0}})
		  .to([ID_picDD],.5,{css:{opacity:1}})
		  .to(ID_picDD,.5,{css:{opacity:0}})
	  
	  .append([ 
		new TweenLite(ID_txt14, .5,{css:{opacity:0}}),
		new TweenLite(ID_txt15, .5,{css:{opacity:0}}),
		new TweenLite(ID_txt16, .5,{css:{opacity:0}}),
		new TweenLite(ID_txt17, .5,{css:{opacity:0}}),
		])
		 .to([arrow9,ID_txt09],2,{css:{opacity:0}})
	.to(pause,.05,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

var animeArray = [{name:animation1,animFunction:animation}];