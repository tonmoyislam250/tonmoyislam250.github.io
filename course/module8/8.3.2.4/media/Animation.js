 
var animation1 = function(data)
{

var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';

temp+='<div id="main_wrapper">';
temp+='<div id="main_container">'; 
temp+='<img src="background.png" />'; 
temp+='<img id="imgEnvelop" src="envelope1.png" />';

temp+='<img id="imgArrow1_Orange" src="images/arrow1_Orange.png"  />';
temp+='<img id="imgArrow2_Orange" src="images/arrow2_Orange.png"  />';
temp+='<img id="imgArrow3_Orange" src="images/arrow3_Orange.png"  />';
temp+='<img id="imgArrow4_Orange" src="images/arrow4_Orange.png"  />';

temp+='<img id="imgArrow1_Purple" src="images/arrow1_Purple.png"  />';
temp+='<img id="imgArrow2_Purple" src="images/arrow2_Purple.png"  />';
temp+='<img id="imgArrow3_Purple" src="images/arrow3_Purple.png"  />';
temp+='<img id="imgArrow4_Purple" src="images/arrow4_Purple.png"  />';
temp+='<img id="imgArrow5_Purple" src="images/arrow5_Purple.png"  />';
temp+='<img id="imgArrow6_Purple" src="images/arrow6_Purple.png"  />';

temp+='<img id="imgArrow1_Red" src="images/arrow1_Red.png"  />';

temp+='<img id="imgArrow2_Red" src="images/arrow2_Red.png"  />';
temp+='<img id="imgArrow3_Red" src="images/arrow3_Red.png"  />';
temp+='<img id="imgArrow4_Red" src="images/arrow4_Red.png"  />';
temp+='<img id="imgArrow5_Red" src="images/arrow5_Red.png"  />';
temp+='<img id="imgArrow6_Red" src="images/arrow6_Red.png"  />';
temp+='<img id="imgArrow7_Red" src="images/arrow7_Red.png"  />';
temp+='<img id="imgArrow8_Red" src="images/arrow8_Red.png"  />';

temp+='<img id="imgArrow1_Green" src="images/arrow1_Green.png"  />';
temp+='<img id="imgArrow2_Green" src="images/arrow2_Green.png"  />';
temp+='<img id="imgArrow3_Green" src="images/arrow3_Green.png"  />';
temp+='<img id="imgArrow4_Green" src="images/arrow4_Green.png"  />';
temp+='<img id="imgArrow5_Green" src="images/arrow5_Green.png"  />';
temp+='<img id="imgArrow6_Green" src="images/arrow6_Green.png"  />';
temp+='<img id="imgArrow7_Green" src="images/arrow7_Green.png"  />';
temp+='<img id="imgArrow8_Green" src="images/arrow8_Green.png"  />';
temp+='<img id="imgArrow9_Green" src="images/arrow9_Green.png"  />';
temp+='<img id="imgArrow10_Green" src="images/arrow10_Green.png"  />';
temp+='<img id="imgArrow11_Green" src="images/arrow11_Green.png"  />';
temp+='<img id="imgArrow12_Green" src="images/arrow12_Green.png"  />';

temp+='<div id="txtStatic1">10.0.0.1 255.255.255.0</div><div id="txtStatic2">192.168.1.2  255.255.255.0</div>';
temp+='<div id="ID_txt01"/><div id="ID_txt02"/><div id="ID_txt03"/><div id="ID_txt04"/>'; 
temp+='<div id="ID_CallOut01"/><div id="ID_CallOut02"/><div id="ID_CallOut03"/><div id="ID_CallOut04"/>'; 
temp+='</div></div>';

$("#animDiv").html(temp);

	$("#ID_txt01").html($(data).find("component#ID_txt07").text());	
	$("#ID_txt02").html($(data).find("component#ID_txt08").text());	
	$("#ID_txt03").html($(data).find("component#ID_txt09").text());	
	$("#ID_txt04").html($(data).find("component#ID_txt10").text());	 
	$("#ID_CallOut01").html($(data).find("component#ID_txt03").text());	 
	$("#ID_CallOut02").html($(data).find("component#ID_txt04").text());	 
	$("#ID_CallOut03").html($(data).find("component#ID_txt05").text());	 
	$("#ID_CallOut04").html($(data).find("component#ID_txt06").text());	 
}


	function animation()
	{   
		pause = $("#pauseBtn");
		play = $("#playBtn")
		restart = $("#restartBtn");

		ID_txt01 = $("#ID_txt01"); 
		ID_txt02 = $("#ID_txt02"); 
		ID_txt03 = $("#ID_txt03"); 
		ID_txt04 = $("#ID_txt04"); 
		ID_CallOut01 = $("#ID_CallOut01"); 
		ID_CallOut02 = $("#ID_CallOut02"); 
		ID_CallOut03 = $("#ID_CallOut03"); 
		ID_CallOut04 = $("#ID_CallOut04");  
		imgEnvelop = $("#imgEnvelop"); 


		imgArrow1_Orange = $("#imgArrow1_Orange"); 
		imgArrow2_Orange = $("#imgArrow2_Orange"); 
		imgArrow3_Orange = $("#imgArrow3_Orange"); 
		imgArrow4_Orange = $("#imgArrow4_Orange");

		imgArrow1_Purple = $("#imgArrow1_Purple"); 
		imgArrow2_Purple = $("#imgArrow2_Purple"); 
		imgArrow3_Purple = $("#imgArrow3_Purple"); 
		imgArrow4_Purple = $("#imgArrow4_Purple"); 
		imgArrow5_Purple = $("#imgArrow5_Purple"); 
		imgArrow6_Purple = $("#imgArrow6_Purple"); 

		imgArrow1_Red = $("#imgArrow1_Red"); 
		imgArrow2_Red = $("#imgArrow2_Red"); 
		imgArrow3_Red = $("#imgArrow3_Red"); 
		imgArrow4_Red = $("#imgArrow4_Red"); 
		imgArrow5_Red = $("#imgArrow5_Red"); 
		imgArrow6_Red = $("#imgArrow6_Red");
		imgArrow7_Red = $("#imgArrow7_Red"); 
		imgArrow8_Red = $("#imgArrow8_Red"); 

		imgArrow1_Green = $("#imgArrow1_Green"); 
		imgArrow2_Green = $("#imgArrow2_Green"); 
		imgArrow3_Green = $("#imgArrow3_Green"); 
		imgArrow4_Green = $("#imgArrow4_Green"); 
		imgArrow5_Green = $("#imgArrow5_Green"); 
		imgArrow6_Green = $("#imgArrow6_Green");
		imgArrow7_Green = $("#imgArrow7_Green"); 
		imgArrow8_Green = $("#imgArrow8_Green");
		imgArrow9_Green = $("#imgArrow9_Green"); 
		imgArrow10_Green = $("#imgArrow10_Green");
		imgArrow11_Green = $("#imgArrow11_Green"); 
		imgArrow12_Green = $("#imgArrow12_Green"); 

	 
		
		/*Orange*/
		//path A1
		tl.append([ 
			new TweenLite(ID_txt01,.5,{css: {opacity:1}}),
			new TweenLite(imgEnvelop,.5,{css: {opacity:1}}),
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:115.5,top:25, ease:Power1.easeOut},delay:.5}),
			new TweenLite(imgArrow1_Orange,.2,{css:{opacity:1},delay:.7}),
			new TweenLite(imgArrow1_Orange,1.1,{css:{left:51,top:34,clip:"rect(0px, 56px, 20px, 0px)"},delay:.9}), 
			new TweenLite(imgArrow1_Orange,.3,{css:{opacity:0},delay:2}),
		]) 
		//path B1
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:264,top:29, ease:Power1.easeOut}}),
			new TweenLite(imgArrow2_Orange,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow2_Orange,1.1,{css:{left:146,top:28.5,clip:"rect(0px, 106px, 12px, 0px)"},delay:.3}), 
			new TweenLite(imgArrow2_Orange,.3,{css:{opacity:0},delay:1.5}),
			new TweenLite(imgEnvelop,.1,{css:{opacity:0},delay:1.8})
		]) 
 		.append([  
			new TweenLite(ID_CallOut01,.5,{css:{opacity:1}}),
			new TweenLite(ID_CallOut01,.5,{css:{opacity:0},delay:1.5})
		])
		 //path B2
		tl.append([ 
			new TweenLite(imgEnvelop, .5 ,{css: {opacity:1}}),
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:115.5,top:25, ease:Power1.easeOut},delay:.5}),
			new TweenLite(imgArrow3_Orange,.2,{css:{opacity:1},delay:.7}),
			new TweenLite(imgArrow3_Orange,1.1,{css:{left:146,top:25,clip:"rect(0px, 106px, 21px, 0px)"},delay:.9}), 
			new TweenLite(imgArrow3_Orange,.3,{css:{opacity:0},delay:2})
		])

		//path A2
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:35.5,top:55, ease:Power1.easeOut}}),
			new TweenLite(imgArrow4_Orange,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow4_Orange,1.1,{css:{left:55,top:35.3,clip:"rect(0px, 48px, 18px, 0px)"},delay:.4}), 
			new TweenLite(imgArrow4_Orange,.3,{css:{opacity:0},delay:1.5}),
			new TweenLite(imgEnvelop,.1,{css:{opacity:0},delay:1.8}),
			new TweenLite(ID_txt01,.1,{css:{opacity:0},delay:1.8}) 
		])
		
		 
		//Purple
		//path A1
		tl.append([ 
			new TweenLite(ID_txt02,.5,{css: {opacity:1}}),
			new TweenLite(imgEnvelop,.5,{css: {opacity:1}}),
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:115.5,top:25, ease:Power1.easeOut},delay:.5}),
			new TweenLite(imgArrow1_Purple,.2,{css:{opacity:1},delay:.7}),
			new TweenLite(imgArrow1_Purple,1.1,{css:{left:51,top:34,clip:"rect(0px, 56px, 20px, 0px)"},delay:.9}), 
			new TweenLite(imgArrow1_Purple,.3,{css:{opacity:0},delay:2}),
		]) 
		//path B1
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:264,top:29, ease:Power1.easeOut}}),
			new TweenLite(imgArrow2_Purple,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow2_Purple,1.1,{css:{left:146,top:28.5,clip:"rect(0px, 106px, 12px, 0px)"},delay:.3}), 
			new TweenLite(imgArrow2_Purple,.3,{css:{opacity:0},delay:1.5}),
			//new TweenLite(imgEnvelop,.1,{css:{opacity:0},delay:1.8})
		]) 
		//path C1
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:336,top:27.5, ease:Power1.easeOut}}),
			new TweenLite(imgArrow5_Purple,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow5_Purple,1.1,{css:{left:287,top:30,clip:"rect(0px, 39px, 10px, 0px)"},delay:.4}), 
			new TweenLite(imgArrow5_Purple,.3,{css:{opacity:0},delay:1.5}),
			new TweenLite(imgEnvelop,.1,{css:{opacity:0},delay:1.8})
		])
		.append([  
				new TweenLite(ID_CallOut02,.5,{css:{opacity:1}}),
				new TweenLite(ID_CallOut02,.5,{css:{opacity:0},delay:1.5})
		])
		 
		//path C2
		.append([ 
			new TweenLite(imgEnvelop, .5 ,{css: {opacity:1}}),
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:264,top:29, ease:Power1.easeOut},delay:.5}),
			new TweenLite(imgArrow6_Purple,.2,{css:{opacity:1},delay:.9}),
			new TweenLite(imgArrow6_Purple,1.1,{css:{left:287,top:29,clip:"rect(0px, 39px, 10px, 0px)"},delay:1.1}), 
			new TweenLite(imgArrow6_Purple,.3,{css:{opacity:0},delay:2.2}),
		])

		 //path B2
		tl.append([ 
			new TweenLite(imgEnvelop, .5 ,{css: {opacity:1}}),
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:115.5,top:25, ease:Power1.easeOut},delay:.5}),
			new TweenLite(imgArrow3_Purple,.2,{css:{opacity:1},delay:.7}),
			new TweenLite(imgArrow3_Purple,1.1,{css:{left:146,top:25,clip:"rect(0px, 106px, 21px, 0px)"},delay:.9}), 
			new TweenLite(imgArrow3_Purple,.3,{css:{opacity:0},delay:2})
		])

		//path A2
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:35.5,top:55, ease:Power1.easeOut}}),
			new TweenLite(imgArrow4_Purple,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow4_Purple,1.1,{css:{left:55,top:35.3,clip:"rect(0px, 48px, 18px, 0px)"},delay:.4}), 
			new TweenLite(imgArrow4_Purple,.3,{css:{opacity:0},delay:1.5}),
			new TweenLite(imgEnvelop,.1,{css:{opacity:0},delay:1.8}),
			new TweenLite(ID_txt02,.1,{css:{opacity:0},delay:1.8}) 
		])
		
 		 
		//Red
 		//path A1
		tl.append([ 
			new TweenLite(ID_txt03,.5,{css: {opacity:1}}),
			new TweenLite(imgEnvelop,.5,{css: {opacity:1}}),
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:115.5,top:25, ease:Power1.easeOut},delay:.5}),
			new TweenLite(imgArrow1_Red,.2,{css:{opacity:1},delay:.7}),
			new TweenLite(imgArrow1_Red,1.1,{css:{left:51,top:34,clip:"rect(0px, 56px, 20px, 0px)"},delay:.9}), 
			new TweenLite(imgArrow1_Red,.3,{css:{opacity:0},delay:2}),
		]) 
		//path B1
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:264,top:29, ease:Power1.easeOut}}),
			new TweenLite(imgArrow2_Red,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow2_Red,1.1,{css:{left:146,top:28.5,clip:"rect(0px, 106px, 12px, 0px)"},delay:.3}), 
			new TweenLite(imgArrow2_Red,.3,{css:{opacity:0},delay:1.5}),
			 
		]) 
		//path C1
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:336,top:27.5, ease:Power1.easeOut}}),
			new TweenLite(imgArrow5_Red,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow5_Red,1.1,{css:{left:287,top:30,clip:"rect(0px, 39px, 10px, 0px)"},delay:.4}), 
			new TweenLite(imgArrow5_Red,.3,{css:{opacity:0},delay:1.5}),
		])
		//path D1
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:349,top:79, ease:Power1.easeOut}}),
			new TweenLite(imgArrow7_Red,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow7_Red,1.1,{css:{left:344.5,top:42,clip:"rect(6px, 21px, 39px, 0px)"},delay:.4}), 
			new TweenLite(imgArrow7_Red,.3,{css:{opacity:0},delay:1.5}),
			new TweenLite(imgEnvelop,.1,{css:{opacity:0},delay:1.8})
		])
		.append([  
			new TweenLite(ID_CallOut03,.5,{css:{opacity:1}}),
			new TweenLite(ID_CallOut03,.5,{css:{opacity:0},delay:1.5})
		])

	 	//path D2
		.append([ 
			new TweenLite(imgEnvelop,.5,{css: {opacity:1}}),
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:336,top:27.5, ease:Power1.easeOut},delay:.5}),
			new TweenLite(imgArrow8_Red,.2,{css:{opacity:1},delay:.7}),
			new TweenLite(imgArrow8_Red,1.1,{css:{left:346,top:48,clip:"rect(0px, 13px, 28px, 0px)"},delay:.9}), 
			new TweenLite(imgArrow8_Red,.3,{css:{opacity:0},delay:2}),
		]) 
		//path C2
		.append([ 
			new TweenLite(imgEnvelop, .5 ,{css: {opacity:1}}),
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:264,top:29, ease:Power1.easeOut},delay:.5}),
			new TweenLite(imgArrow6_Red,.2,{css:{opacity:1},delay:.9}),
			new TweenLite(imgArrow6_Red,1.1,{css:{left:287,top:29,clip:"rect(0px, 39px, 10px, 0px)"},delay:1.1}), 
			new TweenLite(imgArrow6_Red,.3,{css:{opacity:0},delay:2.2}),
		]) 
		//path B2
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:115.5,top:25, ease:Power1.easeOut}}),
			new TweenLite(imgArrow3_Red,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow3_Red,1.1,{css:{left:146,top:25,clip:"rect(0px, 106px, 21px, 0px)"},delay:.4}), 
			new TweenLite(imgArrow3_Red,.3,{css:{opacity:0},delay:1.6})
		])
		//path A2
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:35.5,top:55, ease:Power1.easeOut}}),
			new TweenLite(imgArrow4_Red,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow4_Red,1.1,{css:{left:55,top:35.3,clip:"rect(0px, 48px, 18px, 0px)"},delay:.4}), 
			new TweenLite(imgArrow4_Red,.3,{css:{opacity:0},delay:1.5}),
			new TweenLite(imgEnvelop,.1,{css:{opacity:0},delay:1.8}),
			new TweenLite(ID_txt03,.1,{css:{opacity:0},delay:1.8})
		])

		//Green
		//A1
 		tl.append([ 
			new TweenLite(ID_txt04,.5,{css:{opacity:1},delay:.2}),
			new TweenLite(imgEnvelop,.5,{css: {opacity:1}}),
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:115.5,top:25, ease:Power1.easeOut},delay:.5}),
			new TweenLite(imgArrow1_Green,.2,{css:{opacity:1},delay:.7}),
			new TweenLite(imgArrow1_Green,1.1,{css:{left:51,top:34,clip:"rect(0px, 56px, 20px, 0px)"},delay:.9}), 
			new TweenLite(imgArrow1_Green,.3,{css:{opacity:0},delay:2}),
		]) 
		//path B1
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:264,top:29, ease:Power1.easeOut}}),
			new TweenLite(imgArrow2_Green,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow2_Green,1.1,{css:{left:146,top:28.5,clip:"rect(0px, 106px, 12px, 0px)"},delay:.3}), 
			new TweenLite(imgArrow2_Green,.3,{css:{opacity:0},delay:1.5}),
			 
		]) 
		//path C1
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:336,top:27.5, ease:Power1.easeOut}}),
			new TweenLite(imgArrow5_Green,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow5_Green,1.1,{css:{left:287,top:30,clip:"rect(0px, 39px, 10px, 0px)"},delay:.4}), 
			new TweenLite(imgArrow5_Green,.3,{css:{opacity:0},delay:1.5}),
		])
		//path D1
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:349,top:79, ease:Power1.easeOut}}),
			new TweenLite(imgArrow7_Green,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow7_Green,1.1,{css:{left:344.5,top:42,clip:"rect(6px, 21px, 39px, 0px)"},delay:.4}), 
			new TweenLite(imgArrow7_Green,.3,{css:{opacity:0},delay:1.5}) 
		])
		//path E1
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:359,top:149, ease:Power1.easeOut}}),
			new TweenLite(imgArrow9_Green,.2,{css:{opacity:1},delay:.4}),
			new TweenLite(imgArrow9_Green,1.1,{css:{left:351.5,top:75,clip:"rect(25px, 23px, 75px, 0px)"},delay:.6}), 
			new TweenLite(imgArrow9_Green,.3,{css:{opacity:0},delay:1.7}),
		]) 
 		//path F1
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:316,top:211, ease:Power1.easeOut}}),
			new TweenLite(imgArrow11_Green,.2,{css:{opacity:1},delay:.4}),
			new TweenLite(imgArrow11_Green,1.1,{css:{left:329,top:143,clip:"rect(0px, 29px, 70px, 0px)"},delay:.6}), 
			new TweenLite(imgArrow11_Green,.3,{css:{opacity:0},delay:1.7}),
			new TweenLite(imgEnvelop,.1,{css:{opacity:0},delay:1.8})
		])
		.append([  
			new TweenLite(ID_CallOut04,.5,{css:{opacity:1}}),
			new TweenLite(ID_CallOut04,.5,{css:{opacity:0},delay:1.5})
		])
		//path F2
		.append([ 
			new TweenLite(imgEnvelop,.5,{css:{opacity:1}}),
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:359,top:149, ease:Power1.easeOut},delay:.5}),
			new TweenLite(imgArrow12_Green,.2,{css:{opacity:1},delay:.9}),
			new TweenLite(imgArrow12_Green,1.1,{css:{left:306,top:164,clip:"rect(0px, 57px, 48px, 0px)"},delay:1.1}), 
			new TweenLite(imgArrow12_Green,.3,{css:{opacity:0},delay:2.2}),
		])
		//path E2
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:349.5,top:79, ease:Power1.easeOut}}),
			new TweenLite(imgArrow10_Green,.2,{css:{opacity:1},delay:.4}),
			new TweenLite(imgArrow10_Green,1.1,{css:{left:355.5,top:99,clip:"rect(0px, 50px, 46px, 0px)"},delay:.6}), 
			new TweenLite(imgArrow10_Green,.3,{css:{opacity:0},delay:1.7}),
		])

		//path D2
		.append([ 
			new TweenLite(imgEnvelop,.5,{css: {opacity:1}}),
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:336,top:27.5, ease:Power1.easeOut},delay:.5}),
			new TweenLite(imgArrow8_Green,.2,{css:{opacity:1},delay:.7}),
			new TweenLite(imgArrow8_Green,1.1,{css:{left:346,top:48,clip:"rect(0px, 13px, 28px, 0px)"},delay:.9}), 
			new TweenLite(imgArrow8_Green,.3,{css:{opacity:0},delay:2}),
		]) 
		//path C2
		.append([ 
			new TweenLite(imgEnvelop, .5 ,{css: {opacity:1}}),
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:264,top:29, ease:Power1.easeOut},delay:.5}),
			new TweenLite(imgArrow6_Green,.2,{css:{opacity:1},delay:.9}),
			new TweenLite(imgArrow6_Green,1.1,{css:{left:287,top:29,clip:"rect(0px, 39px, 10px, 0px)"},delay:1.1}), 
			new TweenLite(imgArrow6_Green,.3,{css:{opacity:0},delay:2.2}),
		]) 
		//path B2
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:115.5,top:25, ease:Power1.easeOut}}),
			new TweenLite(imgArrow3_Green,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow3_Green,1.1,{css:{left:146,top:25,clip:"rect(0px, 106px, 21px, 0px)"},delay:.4}), 
			new TweenLite(imgArrow3_Green,.3,{css:{opacity:0},delay:1.6})
		])
		//path A2
		.append([ 
			new TweenLite(imgEnvelop, 1.8 ,{css: {left:35.5,top:55, ease:Power1.easeOut}}),
			new TweenLite(imgArrow4_Green,.2,{css:{opacity:1},delay:.2}),
			new TweenLite(imgArrow4_Green,1.1,{css:{left:55,top:35.3,clip:"rect(0px, 48px, 18px, 0px)"},delay:.4}), 
			new TweenLite(imgArrow4_Green,.3,{css:{opacity:0},delay:1.5}),
			new TweenLite(imgEnvelop,.1,{css:{opacity:0},delay:1.8}),
			new TweenLite(ID_txt04,.1,{css:{opacity:0},delay:1.8})
		])
 
		.to(pause,.05,{onComplete:myFunction});
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	} 


var animeArray = [{name:animation1,animFunction:animation}];