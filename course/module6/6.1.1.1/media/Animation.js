
var animation1 = function(data)
{

var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	 temp += '<div id="main_wrapper"><div id="main_container">';
	 temp +='<div id="div_Network"><img id="img_network" src="network.png"/></div>';
	 temp +='<div id="div_Arrow"><img id="img_leftArrow" src="left_Arrow.png"/><img id="img_rightArrow" src="right_Arrow.png"/></div>';
	 temp +='<div id="div_movingArrow"><img id="img_leftmovingArrow" src="leftmovingArrow.png"/><img id="img_downmovingArrow" src="downmovingArrow.png"/><img id="img_rightmovingArrow" src="rightmovingArrow.png"/></div>';
	 temp += '</div></div>';
	 temp +='<div id="ID_txt01"></div><div id="ID_txt02"></div><div id="ID_txt03"></div></div><div id="ID_txt05"></div>';
	
	 temp +='<div id="ID_osi_1txt07"/><div id="ID_osi_1txt06"/><div id="ID_osi_1txt05"/>';
	 temp +='<div id="ID_osi_1txt04"/><div id="ID_osi_1txt03"/><div id="ID_osi_1txt02"/><div id="ID_osi_1txt01"/>';
	 
	 temp +='<div id="ID_OSI_1num01"/><div id="ID_OSI_1num02"/><div id="ID_OSI_1num03"/>';
	 temp +='<div id="ID_OSI_1num04"/><div id="ID_OSI_1num05"/><div id="ID_OSI_1num06"/><div id="ID_OSI_1num07"/>';

	 temp +='<div id="ID_osi_2txt07"></div><div id="ID_osi_2txt06"></div><div id="ID_osi_2txt05"></div>';
	 temp +='<div id="ID_osi_2txt04"></div><div id="ID_osi_2txt03"></div><div id="ID_osi_2txt02"></div><div id="ID_osi_2txt01"></div>';

	 temp +='<div id="ID_OSI_2num01"/><div id="ID_OSI_2num02"/><div id="ID_OSI_2num03"/>';
	 temp +='<div id="ID_OSI_2num04"/><div id="ID_OSI_2num05"/><div id="ID_OSI_2num06"/><div id="ID_OSI_2num07"/>';
 
	 temp +='<div id="txt_moving1"><div id="txtData1"/><div id="txtData2"/><div id="txtData3"/><div id="txtData4"/><div id="txtData5"/></div>';
	 temp +='<div id="txt_callout"><div id="callout_data1"/><div id="callout_data2"/><div id="callout_data3"/></div>';
	 temp +='<div id="txtStatic_1">192.168.32.11</div><div id="txtStatic_2">192.168.36.5</div>';
	 temp +='<div id="txtStatic_1">192.168.32.11</div><div id="txtStatic_2">192.168.36.5</div>';
 
			

$("#animDiv").html(temp);

	 
	$("#ID_txt01").html($(data).find("component#ID_txt01").text());	
	$("#ID_txt02").html($(data).find("component#ID_txt02").text());
	$("#ID_txt03").html($(data).find("component#ID_txt03").text()); 
	$("#ID_txt05").html($(data).find("component#ID_txt05").text()); 

	$("#txtData1").html($(data).find("component#ID_txt04").text());
	$("#txtData2").html(''); 
	$("#txtData3").html($(data).find("component#ID_txt07").text());
	$("#txtData4").html($(data).find("component#ID_txt08").text());
	$("#txtData5").html($(data).find("component#ID_txt09").text());
	
	/*Layer names*/
	$("#ID_osi_1txt07").html($(data).find("component#ID_osi_1txt07").text()); 
	$("#ID_osi_1txt06").html($(data).find("component#ID_osi_1txt06").text()); 
	$("#ID_osi_1txt05").html($(data).find("component#ID_osi_1txt05").text()); 
	$("#ID_osi_1txt04").html($(data).find("component#ID_osi_1txt04").text()); 
	$("#ID_osi_1txt03").html($(data).find("component#ID_osi_1txt03").text()); 
	$("#ID_osi_1txt02").html($(data).find("component#ID_osi_1txt02").text()); 
	$("#ID_osi_1txt01").html($(data).find("component#ID_osi_1txt01").text()); 

	$("#ID_osi_2txt07").html($(data).find("component#ID_osi_2txt07").text()); 
	$("#ID_osi_2txt06").html($(data).find("component#ID_osi_2txt06").text()); 
	$("#ID_osi_2txt05").html($(data).find("component#ID_osi_2txt05").text()); 
	$("#ID_osi_2txt04").html($(data).find("component#ID_osi_2txt04").text()); 
	$("#ID_osi_2txt03").html($(data).find("component#ID_osi_2txt03").text()); 
	$("#ID_osi_2txt02").html($(data).find("component#ID_osi_2txt02").text()); 
	$("#ID_osi_2txt01").html($(data).find("component#ID_osi_2txt01").text()); 

	/*Layer numbering*/ 
	$("#ID_OSI_1num01").html($(data).find("component#ID_OSI_1num01").text()); 
	$("#ID_OSI_1num02").html($(data).find("component#ID_OSI_1num02").text()); 
	$("#ID_OSI_1num03").html($(data).find("component#ID_OSI_1num03").text()); 
	$("#ID_OSI_1num04").html($(data).find("component#ID_OSI_1num04").text()); 
	$("#ID_OSI_1num05").html($(data).find("component#ID_OSI_1num05").text()); 
	$("#ID_OSI_1num06").html($(data).find("component#ID_OSI_1num06").text()); 
	$("#ID_OSI_1num07").html($(data).find("component#ID_OSI_1num07").text()); 

	$("#ID_OSI_2num01").html($(data).find("component#ID_OSI_2num01").text()); 
	$("#ID_OSI_2num02").html($(data).find("component#ID_OSI_2num02").text()); 
	$("#ID_OSI_2num03").html($(data).find("component#ID_OSI_2num03").text()); 
	$("#ID_OSI_2num04").html($(data).find("component#ID_OSI_2num04").text()); 
	$("#ID_OSI_2num05").html($(data).find("component#ID_OSI_2num05").text()); 
	$("#ID_OSI_2num06").html($(data).find("component#ID_OSI_2num06").text()); 
	$("#ID_OSI_2num07").html($(data).find("component#ID_OSI_2num07").text()); 


	$("#callout_data1").html($(data).find("component#ID_txt06").text());
	$("#callout_data2").html($(data).find("component#ID_txt10").text());
	$("#callout_data3").html($(data).find("component#ID_txt12").text()); 


}


	function animation()
	{   
	 
		pause = $("#pauseBtn");
		play = $("#playBtn")
		restart  = $("#restartBtn"); 
		
		txtStatic_1= $("#txtStatic_1");
		txtStatic_2= $("#txtStatic_2");
		ID_txt05= $("#ID_txt05");
		div_Arrow= $("#div_Arrow");
		
		txtData1= $("#txtData1");
		txtData2= $("#txtData2");
		txtData3= $("#txtData3");
		txtData4= $("#txtData4");
		txtData5= $("#txtData5");
		
		
		txt_moving1= $("#txt_moving1"); 
		txt_callout= $("#txt_callout"); 

		callout_data1= $("#callout_data1");
		callout_data2= $("#callout_data2");
		callout_data3= $("#callout_data3"); 
		

		img_leftmovingArrow= $("#img_leftmovingArrow");
		img_downmovingArrow= $("#img_downmovingArrow");
		img_rightmovingArrow= $("#img_rightmovingArrow");




  		tl.to([txtStatic_1,txtStatic_2,ID_txt05,div_Arrow],.5,{css:{opacity:1}})
		.to([txt_moving1,txtData1],.5,{css:{opacity:1}})
		.append([ 
			new TweenLite(txt_moving1,1,{css:{left:35}}),
			new TweenLite(txt_moving1,2,{css:{top:142.5},delay:1.5})
			])  
		.to([img_leftmovingArrow,txt_callout,callout_data1],2.5,{css:{opacity:1}})
		.append([ 
			new TweenLite([img_leftmovingArrow,txt_callout,callout_data1],1.5,{css:{opacity:0}}),
			new TweenLite([txt_moving1,txtData1],1,{css:{opacity:0},delay:.5}), 
			new TweenLite(txt_moving1,.01,{css:{left:"35",width:85,opacity:1,background:"#A481B9"},delay:1.2}),						 
			new TweenLite(txtData2,1,{css:{opacity:1},delay:1.2})
		]) 
		.to(txt_moving1,1,{css:{top:173.5}})
		.append([ 
				new TweenLite(img_leftmovingArrow,.01,{css:{top:199.5}}),	
				new TweenLite(txt_callout,.1,{css:{top:169.5}})
				])

		.to([img_leftmovingArrow,txt_callout,callout_data1],2.5,{css:{opacity:1}})
		.append([ 
				new TweenLite([img_leftmovingArrow,txt_callout,callout_data1],1.5,{css:{opacity:0}}),
				new TweenLite(txt_moving1,.05,{css:{opacity:1,background:"#DBECDA"},delay:1}), 
				new TweenLite(txtData3,.01,{css:{opacity:1,},delay:1})
				]) 

		.to(txt_moving1,1,{css:{top:203.5}})
		.append([ 
				new TweenLite(img_leftmovingArrow,.01,{css:{top:231.5}}),	
				new TweenLite(txt_callout,.1,{css:{top:201}})
				])
		.to([img_leftmovingArrow,txt_callout,callout_data1],2.5,{css:{opacity:1}})
		 

		.append([ 
				new TweenLite([img_leftmovingArrow,txt_callout,callout_data1,txtData3],1.5,{css:{opacity:0}}),
				new TweenLite(txt_moving1,.05,{css:{opacity:1,background:"#FACCA8"},delay:1}), 
				new TweenLite(txtData4,.01,{css:{opacity:1,},delay:1})
				]) 


		.append([ 
			 	new TweenLite(txt_moving1,1,{css:{top:235.5}}),
			 	new TweenLite([txt_moving1,txtData4],.5,{css:{opacity:0},delay:1}),
			 	new TweenLite(txt_moving1,.0,{css:{opacity:1,background:"#E9E7E8"},delay:2}),  
				new TweenLite(txtData5,.0,{css:{opacity:1,},delay:2}),
				new TweenLite(txt_callout,.0,{css:{background:"#FACCA8",width:50,top:145.5,left:173},delay:2}),
				new TweenLite([img_downmovingArrow,txt_callout,callout_data2],.0,{css:{opacity:1},delay:2}),
				]) 
		.append([ 
				new TweenLite(txt_moving1,1.5,{css:{top:278.5}}),
				new TweenLite(txt_moving1,2,{css:{left:335.5},delay:1.5}),
				new TweenLite(txt_moving1,1.5,{css:{top:234.5},delay:4}),
				new TweenLite([img_downmovingArrow,txt_callout,callout_data2],.1,{css:{opacity:0},delay:4}),
				]) 
		.append([  
				new TweenLite(txt_moving1,.05,{css:{opacity:1,background:"#FACCA8"}}), 
				new TweenLite(txtData5,.01,{css:{opacity:0}}),
				new TweenLite(txtData4,.01,{css:{opacity:1,}})
				]) 
		.to(txt_moving1,1,{css:{top:205.5}})
		.append([   
				new TweenLite([txt_moving1,txtData4],.01,{css:{opacity:0}}),
				new TweenLite(txt_moving1,.05,{css:{opacity:1,background:"#DBECDA",width:"85"}}), 
				new TweenLite(txtData3,.01,{css:{opacity:1}}),
				new TweenLite(txt_callout,.1,{css:{width:79,top:201.5,left:180},delay:.2}),
				new TweenLite([img_rightmovingArrow,txt_callout,callout_data3],2.5,{css:{opacity:1},delay:.2}),  
				])  
		.to([img_rightmovingArrow,txt_callout,callout_data3],1.5,{css:{opacity:0}})
		.append([   
				new TweenLite(txt_callout,.01,{css:{top:172.5}}),
				new TweenLite(img_rightmovingArrow,.01,{css:{top:201.5}}), 
				new TweenLite(txt_moving1,1,{css:{top:174.5}}),
				new TweenLite([img_rightmovingArrow,txt_callout,callout_data3],1.5,{css:{opacity:1},delay:1.2})
				])  
		.append([   
				new TweenLite([img_rightmovingArrow,txt_callout,callout_data3],1.5,{css:{opacity:0}}),
				new TweenLite([txt_moving1,txtData4],.1,{css:{opacity:0},delay:1}),
				new TweenLite(txt_moving1,.05,{css:{opacity:1,background:"#DBECDA",width:"85"},delay:1}), 
	 			])  
		.append([
			new TweenLite(txtData3,.5,{css:{opacity:0}}), 
			new TweenLite(txt_moving1,.5,{css:{opacity:1,background:"#A481B9"}}), 
			new TweenLite(txtData2,1,{css:{opacity:1},delay:.6}), 
		]) 
		.append([
			new TweenLite(txt_moving1,1,{css:{top:141.5}}), 
			new TweenLite(txt_callout,.01,{css:{top:140.5}}),
			new TweenLite(img_rightmovingArrow,.01,{css:{top:169}}),  
		])  
		.append([   
				new TweenLite(txtData1,.05,{css:{opacity:1,}}), 
				new TweenLite(txt_moving1,.05,{css:{opacity:1,background:"#e6eba8",width:"85"}}), 
				new TweenLite([img_rightmovingArrow,txt_callout,callout_data3],2.5,{css:{opacity:1},delay:.2}),
	 			])  
		.append([   
				new TweenLite([img_rightmovingArrow,txt_callout,callout_data3],1.5,{css:{opacity:0}}), 
				new TweenLite(txt_moving1,2,{css:{top:47.5},delay:1}), 
	 			])
		.append([   
			 	new TweenLite(txt_moving1,1,{css:{top:3.5},delay:1}),
			 	new TweenLite(txt_moving1,1,{css:{left:370,opacity:0,width:"-=10"},delay:2}) 
	 			])  

		.to(pause,.05,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

var animeArray = [{name:animation1,animFunction:animation}];