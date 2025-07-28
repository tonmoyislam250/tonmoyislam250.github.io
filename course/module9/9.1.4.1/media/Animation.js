 
var animation1 = function(data)
{

	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

var temp ='';
temp+='<div id="main_wrapper">';
temp+='<div id="main_container">'; 
temp+='<img src="background.png" />'; 
temp+='<img id="imgGreenShade" src="greenShade.png" />';
temp+='<img id="imgArrowEnd1" src="arrowEnd1.png"/>';
temp+='<img id="imgArrowHead1" src="arrowHead1.png"/>';
temp+='<img id="imgArrow2" src="arrow2.png"/>';
temp+='<img id="imgArrow3" src="arrow3.png"/>';
temp+='<img id="imgArrow4" src="arrow4.png"/>';
temp+='<img id="imgArrow5" src="arrow5.png"/>';

temp+='<table id="tr1">'; /*border color : #393536*/
temp+='<tr  bgcolor="#67BDBC">';
temp+='	<td id="th1" style="line-height:23px;">Header 1</td>';
temp+='	<td id="th2">Header 2</td>';
temp+='	<td id="th3">Header 3</td>';
temp+='	<td id="th4">Header 4</td>';
temp+='	<td id="th5">Header 5</td>'; 
temp+='</tr>';
temp+='<tr bgcolor="#CCE9E7">';
temp+='	<td id="td11">row 1, cell 1</td>';
temp+='	<td id="td12">row 1, cell 2</td>';
temp+='	<td id="td13">row 1, cell 1</td>';
temp+='	<td id="td14">row 1, cell 2</td>';
temp+='	<td id="td15">row 1, cell 1</td> ';
temp+='</tr>';
temp+='<tr bgcolor="#FFFFFF">';
temp+='	<td id="td21">row 2, cell 1</td>';
temp+='	<td id="td22">row 2, cell 2</td>';
temp+='	<td id="td23">row 2, cell 1</td>';
temp+='	<td id="td24">row 2, cell 2</td>';
temp+='	<td id="td25">row 2, cell 1</td>';
temp+='</tr>';  
temp+='<tr bgcolor="#CCE9E7">';
temp+='	<td id="td31">row 1, cell 1</td>';
temp+='	<td id="td32">row 1, cell 2</td>';
temp+='	<td id="td33">row 1, cell 1</td>';
temp+='	<td id="td34">row 1, cell 2</td>';
temp+='	<td id="td35">row 1, cell 1</td> ';
temp+='</tr>';
temp+='<tr bgcolor="#FFFFFF">';
temp+='	<td id="td41">row 2, cell 1</td>';
temp+='	<td id="td42">row 2, cell 2</td>';
temp+='	<td id="td43">row 2, cell 1</td>';
temp+='	<td id="td44">row 2, cell 2</td>';
temp+='	<td id="td45">row 2, cell 1</td>';
temp+='</tr>';  
temp+='<tr bgcolor="#CCE9E7">';
temp+='	<td id="td51">row 1, cell 1</td>';
temp+='	<td id="td52">row 1, cell 2</td>';
temp+='	<td id="td53">row 1, cell 1</td>';
temp+='	<td id="td54">row 1, cell 2</td>';
temp+='	<td id="td55">row 1, cell 1</td> ';
temp+='</tr>';
temp+='<tr  bgcolor="#FFFFFF">';
temp+='	<td id="td61">row 2, cell 1</td>';
temp+='	<td id="td62">row 2, cell 2</td>';
temp+='	<td id="td63">row 2, cell 1</td>';
temp+='	<td id="td64">row 2, cell 2</td>';
temp+='	<td id="td65">row 2, cell 1</td>';
temp+='<tr bgcolor="#CCE9E7">';
temp+='	<td id="td71">row 1, cell 1</td>';
temp+='	<td id="td72">row 1, cell 2</td>';
temp+='	<td id="td73">row 1, cell 1</td>';
temp+='	<td id="td74">row 1, cell 2</td>';
temp+='	<td id="td75">row 1, cell 1</td> ';
temp+='</tr>';
temp+='</table>';



/*temp+='<img id="imgArrowHead1_Orange" src="arrowHead_Orange1.png"   />'; 
 

temp+='<div id="txtStatic1">10.0.0.1 255.255.255.0</div><div id="txtStatic2">192.168.1.2  255.255.255.0</div>';*/
temp+='<div id="ID_txt01"><font color="#F26200">192.168.1</font>.0</div>';
temp+='<div id="ID_CallOut01"/><div id="ID_CallOut02"/><div id="ID_CallOut03"/><div id="ID_CallOut04"/><div id="ID_CallOut05"/>'; 
temp+='</div></div>';
 

$("#animDiv").html(temp);


	$("#ID_CallOut01").html($(data).find("component#ID_txt01").text());
	$("#ID_CallOut02").html($(data).find("component#ID_txt02").text());	
	$("#ID_CallOut03").html($(data).find("component#ID_txt03").text());
	$("#ID_CallOut04").html($(data).find("component#ID_txt04").text());	
	$("#ID_CallOut05").html($(data).find("component#ID_txt05").text());

	$("#th1").html($(data).find("component#ID_header01").text());	
	$("#th2").html($(data).find("component#ID_header02").text());	
	$("#th3").html($(data).find("component#ID_header03").text());	
	$("#th4").html($(data).find("component#ID_header04").text());	
	$("#th5").html($(data).find("component#ID_header05").text());	
	
	$("#td11").html($(data).find("component#ID_r1cell01").text());	
	$("#td12").html($(data).find("component#ID_r1cell02").text());	
	$("#td13").html($(data).find("component#ID_r1cell03").text());	
	$("#td14").html($(data).find("component#ID_r1cell04").text());	
	$("#td15").html($(data).find("component#ID_r1cell05").text());	

	$("#td21").html($(data).find("component#ID_r2cell01").text());	
	$("#td22").html($(data).find("component#ID_r2cell02").text());	
	$("#td23").html($(data).find("component#ID_r2cell03").text());	
	$("#td24").html($(data).find("component#ID_r2cell04").text());	
	$("#td25").html($(data).find("component#ID_r2cell05").text());	

	$("#td31").html($(data).find("component#ID_r3cell01").text());	
	$("#td32").html($(data).find("component#ID_r3cell02").text());	
	$("#td33").html($(data).find("component#ID_r3cell03").text());	
	$("#td34").html($(data).find("component#ID_r3cell04").text());	
	$("#td35").html($(data).find("component#ID_r3cell05").text());	

	$("#td41").html($(data).find("component#ID_r4cell01").text());	
	$("#td42").html($(data).find("component#ID_r4cell02").text());	
	$("#td43").html($(data).find("component#ID_r4cell03").text());	
	$("#td44").html($(data).find("component#ID_r4cell04").text());	
	$("#td45").html($(data).find("component#ID_r4cell05").text());	
	 
	$("#td51").html($(data).find("component#ID_r5cell01").text());	
	$("#td52").html($(data).find("component#ID_r5cell02").text());	
	$("#td53").html($(data).find("component#ID_r5cell03").text());	
	$("#td54").html($(data).find("component#ID_r5cell04").text());	
	$("#td55").html($(data).find("component#ID_r5cell05").text());	

	$("#td61").html($(data).find("component#ID_r6cell01").text());	
	$("#td62").html($(data).find("component#ID_r6cell02").text());	
	$("#td63").html($(data).find("component#ID_r6cell03").text());	
	$("#td64").html($(data).find("component#ID_r6cell04").text());	
	$("#td65").html($(data).find("component#ID_r6cell05").text());	

	$("#td71").html($(data).find("component#ID_r7cell01").text());	
	$("#td72").html($(data).find("component#ID_r7cell02").text());	
	$("#td73").html($(data).find("component#ID_r7cell03").text());	
	$("#td74").html($(data).find("component#ID_r7cell04").text());	
	$("#td75").html($(data).find("component#ID_r7cell05").text());	

	

	
}


	function animation()
	{   
		pause = $("#pauseBtn");
		play = $("#playBtn")
		restart = $("#restartBtn");
     
		tr1 = $("#tr1");
		imgArrow2 = $("#imgArrow2"); 
		imgArrow3 = $("#imgArrow3"); 
		imgArrow4 = $("#imgArrow4"); 
		imgArrow5 = $("#imgArrow5");
		imgGreenShade = $("#imgGreenShade"); 
		imgArrowEnd1 = $("#imgArrowEnd1"); 
		imgArrowHead1 = $("#imgArrowHead1"); 
		
		ID_CallOut01 = $("#ID_CallOut01");
		ID_CallOut02 = $("#ID_CallOut02");
		ID_CallOut03 = $("#ID_CallOut03");
		ID_CallOut04 = $("#ID_CallOut04");
		ID_CallOut05 = $("#ID_CallOut05");

		 
	tl.from(imgGreenShade,.5,{css:{height:0,opacity:1}})
	tl.append([  
		new TweenLite(ID_CallOut01,.2,{css: {opacity:1}}),
		new TweenLite(tr1,1,{css:{clip:"rect(0px, 392px, 50px, 0px)"},delay:.2}),
		new TweenLite(imgArrowEnd1,.5,{css:{clip:"rect(0px, 61px, 3px, 0px)"},delay:1.2}),
		new TweenLite(imgArrowHead1,.5,{css:{clip:"rect(0px, 20px, 53px, 0px)"},delay:1.7}),
		new TweenLite(tr1,.7,{css:{clip:"rect(0px, 392px, 66px, 0px)"},delay:2.2}),
	])
	tl.append([ 
		new TweenLite(ID_CallOut02,.5,{css: {opacity:1},delay:1}),
		new TweenLite(imgArrow2,.5,{css: {opacity:1},delay:1.3}),
	])

	tl.to([imgArrow2,ID_CallOut02],.5,{css: {opacity:0},delay:5}) 
	
	tl.append([ 
		new TweenLite(tr1,.7,{css:{clip:"rect(0px, 392px, 82px, 0px)"}}),
		new TweenLite(ID_CallOut03,.5,{css: {opacity:1},delay:.7}),
		new TweenLite(imgArrow3,.5,{css: {opacity:1},delay:.9}),
	])
	tl.to([imgArrow3,ID_CallOut03],.5,{css: {opacity:0},delay:10}) 

	tl.append([ 
		new TweenLite(tr1,2.1,{css:{clip:"rect(0px, 392px, 130px, 0px)"}}),
		new TweenLite(ID_CallOut04,.5,{css: {opacity:1},delay:2.8}),
		new TweenLite(imgArrow4,.5,{css: {opacity:1},delay:3}),
	])
	tl.to([imgArrow4,ID_CallOut04],.5,{css: {opacity:0},delay:8}) 
	
	tl.append([ 
		new TweenLite(tr1,.7,{css:{clip:"rect(0px, 392px, 146px, 0px)"}}),
		new TweenLite(ID_CallOut05,.5,{css: {opacity:1},delay:.7}),
		new TweenLite(imgArrow5,.5,{css: {opacity:1},delay:.9}),
	])
	tl.to([imgArrow5,ID_CallOut05],.5,{css: {opacity:0},delay:8}) 
	
	tl.to(tr1,.7,{css:{clip:"rect(0px, 392px, 163px, 0px)"},delay:1})
	 
		
		 
		
		.to(pause,.05,{onComplete:myFunction});
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	} 


var animeArray = [{name:animation1,animFunction:animation}];