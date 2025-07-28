
var animation1 = function(data)
{

	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

var temp ='';
temp+='<div id="main_wrapper">';
temp+='<div id="main_container">'; 
temp+='<img src="background.png" />';
temp+='<img id="imgShade" src="newShade.png" />';

temp+='<img id="imgEnvelop1" src="envelop.png" />';
temp+='<img id="imgEnvelop2" src="envelop.png"/>';
temp+='<img id="imgEnvelop3" src="envelop.png"/>';
temp+='<img id="comp1" src="com.png" width="64" height="53"/>';
temp+='<img id="comp2" src="com.png" width="64" height="53"/>';
temp+='<img id="comp3" src="com.png" width="64" height="53"/>';
temp+='<img id="comp4" src="com.png" width="64" height="53"/>';
temp+='<table id="tr1">'; 
temp+='<tr>';
temp+='	<td id="th1" bgcolor="#FFFADD">Header 1</td>';
temp+='	<td id="th2" bgcolor="#FFFADD">Header 2</td>';
temp+='	<td id="th3" bgcolor="#DBECDA">Header 3</td>';
temp+='</tr>';
temp+='<tr>';
temp+='	<td id="td11" bgcolor="#FFFADD">row 1, cell 1</td>';
temp+='	<td id="td12" bgcolor="#FFFADD">row 1, cell 2</td>';
temp+='	<td id="td13" bgcolor="#DBECDA">row 1, cell 1</td>';
temp+='</tr>';
temp+='<tr bgcolor="#FFFFFF">';
temp+='	<td id="td21" bgcolor="#FFFADD" colspan="2">row 2, cell 1</td>'; 
temp+='	<td id="td23" bgcolor="#DBECDA"></td>';
temp+='</tr>';  

temp+='<div id="ID_titletxt"/>';
temp+='<div id="staticTxt01"/><div id="staticTxt02"/><div id="staticTxt03"/><div id="staticTxt04"/>';
temp+='<div id="staticLbl01"/><div id="staticLbl02"/><div id="staticLbl03"/><div id="staticLbl04"/>';
temp+='<div id="ID_bubble01"/><div id="ID_bubble02"/><div id="ID_bubble03"/><div id="ID_bubble04"/>'; 
temp+='</div></div>';
 

$("#animDiv").html(temp);

	$("#ID_titletxt").html($(data).find("component#ID_title").text());	

	$("#staticTxt01").html($(data).find("component#ID_pc1").text());
	$("#staticTxt02").html($(data).find("component#ID_pc2").text());	
	$("#staticTxt03").html($(data).find("component#ID_pc3").text());
	$("#staticTxt04").html($(data).find("component#ID_pc4").text()); 

	$("#staticLbl01").html($(data).find("component#ID_pc-label1").text());
	$("#staticLbl02").html($(data).find("component#ID_pc-label2").text());
	$("#staticLbl03").html($(data).find("component#ID_pc-label3").text());
	$("#staticLbl04").html($(data).find("component#ID_pc-label4").text());

	$("#ID_bubble01").html($(data).find("component#ID_bubble01").text());
	$("#ID_bubble02").html($(data).find("component#ID_bubble02").text());
	$("#ID_bubble03").html($(data).find("component#ID_bubble03").text());
	$("#ID_bubble04").html($(data).find("component#ID_bubble04").text());
	  
	$("#th1").html($(data).find("component#ID_table-label1").text());	
	$("#th2").html($(data).find("component#ID_table-label2").text());	
	$("#th3").html($(data).find("component#ID_table-label3").text());		
	$("#td11").html($(data).find("component#ID_table-label4").text());	
	$("#td12").html($(data).find("component#ID_table-label5").text());	
	$("#td13").html($(data).find("component#ID_table-label6").text());	
	$("#td21").html($(data).find("component#ID_table-label7").text());	
 
}


	function animation()
	{   
		pause = $("#pauseBtn");
		play = $("#playBtn")
		restart = $("#restartBtn");
     
		ID_bubble01 = $("div #ID_bubble01");
		ID_bubble02 = $("div #ID_bubble02");
		ID_bubble03 = $("div #ID_bubble03");
		ID_bubble04 = $("div #ID_bubble04");
	 
	 tr1 = $("#tr1");
	 imgEnvelop1 = $("#imgEnvelop1");
	 imgEnvelop2 = $("#imgEnvelop2");
	 imgEnvelop3 = $("#imgEnvelop3");
	 imgShade = $("#imgShade");

		 
	tl.to(ID_bubble01,.5,{css:{opacity:1}})
	
	tl.append([  
		new TweenLite(imgEnvelop1,.1,{css:{opacity:1}}),
		new TweenLite(imgEnvelop1,.8,{css:{top:186},delay:.1}),
		new TweenLite(ID_bubble01,.3,{css:{opacity:0},delay:.9}),
		new TweenLite(imgShade,1.2,{css:{clip:"rect(0px, 382px, 103px, 0px)"},delay:1.2}),
		new TweenLite(tr1,.8,{css:{opacity:1},delay:2.4}),
		new TweenLite(imgShade,1.2,{css:{clip:"rect(104px, 382px, 106px, 0px)"},delay:3.2}),
	])
	.append([

		new TweenLite(imgEnvelop1,1.5,{css:{left:352}}),
		new TweenLite(imgEnvelop1,.6,{css:{top:226},delay:1.5}),
		new TweenLite(imgEnvelop1,.1,{css:{opacity:0},delay:2.1}),

		new TweenLite(imgEnvelop2,.1,{css:{opacity:1},delay:.2}),
		new TweenLite(imgEnvelop2,.8,{css:{top:226},delay:.3}),
		new TweenLite(imgEnvelop2,.1,{css:{opacity:0},delay:1.1}),

		new TweenLite(imgEnvelop3,.1,{css:{opacity:1},delay:.5}),
		new TweenLite(imgEnvelop3,.8,{css:{top:137},delay:.6}),
		new TweenLite(imgEnvelop3,.1,{css:{opacity:0},delay:1.4}),		
	])
	.to([ID_bubble02,ID_bubble03,ID_bubble04],.5,{css:{opacity:1}})
	
		 
		
	.to(pause,.05,{onComplete:myFunction});
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	} 


var animeArray = [{name:animation1,animFunction:animation}];