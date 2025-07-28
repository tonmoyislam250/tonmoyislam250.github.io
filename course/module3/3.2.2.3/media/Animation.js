var animImg;
var bgimg,animSegment,comgra,ID_s3_txt35,ID_s3_txt34,ID_s3_txt33,ID_s3_txt32,ID_s3_txt31;

var animation1 = function(data)
{

var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	var temp = '<div id="main_wrapper"><div id="main_container"><img src="3_1_2_3A.png" style="width:410px;height:259px;left:-9px;top:68px;position:absolute;" /><div><img src="3_1_2_3B.png" id="animPic" /><img src="Cloud.png" id="cloud" /><div id="purplebox"></div><div id="purplebox1"></div><div id="purplebox2"></div><div id="purplebox3"></div><div id="purplebox4"></div><div id="binary"></div></div>'
	temp += '<div id="segment"><div id="data"><div id="ID_s2_txt13"></div></div><div id="http"><div id="ID_s2_txt16"></div></div><div id="tcp"><div id="ID_s2_txt17"></div></div><div id="ip"><div id="ID_s2_txt18"></div></div><div id="ethernet"><div id="ID_s2_txt19"></div></div><div id="ethernetempty"></div></div></div></div>';
	temp += '<div id="ID_s2_txt01"></div><div id="ID_s2_txt02"></div><div id="ID_s2_txt03"></div>'
	temp += '<div id="ID_s2_txt04"></div><div id="ID_s2_txt05"></div><div id="ID_s2_txt06"></div>'
	temp += '<div id="ID_s2_txt07"></div><div id="ID_s2_txt08"></div><div id="ID_s2_txt09"></div>'
	temp += '<div id="ID_s2_txt10"></div><div id="ID_s2_txt11"></div><div id="ID_s2_txt12"></div>'	
	temp += '<div id="ID_s2_txt14"></div><div id="ID_s2_txt15"></div>'
	temp += '<div id="ID_s2_txt26"></div>'
	
	


temp += '<div id="inetbox" ></div>'
temp += '<div id="captiontext"></div>'
			

$("#animDiv").html(temp);

	/*$("#inetbox").html($(data).find("component#ID_txt04").text());
	$("#captiontext").html($(data).find("component#ID_caption").text());*/
	$("#ID_s2_txt01").html($(data).find("component#ID_s2_txt01").text());	
	$("#ID_s2_txt02").html($(data).find("component#ID_s2_txt02").text());
	$("#ID_s2_txt03").html($(data).find("component#ID_s2_txt03").text());
	$("#ID_s2_txt04").html($(data).find("component#ID_s2_txt04").text());
	$("#ID_s2_txt05").html($(data).find("component#ID_s2_txt05").text());
	$("#ID_s2_txt06").html($(data).find("component#ID_s2_txt06").text());	
	$("#ID_s2_txt07").html($(data).find("component#ID_s2_txt07").text());
	$("#ID_s2_txt08").html($(data).find("component#ID_s2_txt08").text());
	$("#ID_s2_txt09").html($(data).find("component#ID_s2_txt09").text());
	$("#ID_s2_txt10").html($(data).find("component#ID_s2_txt10").text());
	$("#ID_s2_txt11").html($(data).find("component#ID_s2_txt11").text());
	$("#ID_s2_txt12").html($(data).find("component#ID_s2_txt12").text());
	$("#ID_s2_txt13").html($(data).find("component#ID_s2_txt13").text());
	$("#ID_s2_txt14").html($(data).find("component#ID_s2_txt14").text());
	$("#ID_s2_txt15").html($(data).find("component#ID_s2_txt15").text());
	$("#ID_s2_txt16").html($(data).find("component#ID_s2_txt16").text());
	$("#ID_s2_txt17").html($(data).find("component#ID_s2_txt17").text());
	$("#ID_s2_txt18").html($(data).find("component#ID_s2_txt18").text());
	$("#ID_s2_txt19").html($(data).find("component#ID_s2_txt19").text());
	$("#ID_s2_txt20").html($(data).find("component#ID_s2_txt20").text());
	$("#ID_s2_txt21").html($(data).find("component#ID_s2_txt21").text());
	$("#ID_s2_txt22").html($(data).find("component#ID_s2_txt22").text());
	$("#ID_s2_txt23").html($(data).find("component#ID_s2_txt23").text());
	$("#ID_s2_txt24").html($(data).find("component#ID_s2_txt24").text());
	$("#ID_s2_txt25").html($(data).find("component#ID_s2_txt25").text());
	$("#ID_s2_txt26").html($(data).find("component#ID_s2_txt26").text());
}


	function animation()
	{   
		animImg = $("#animPic")
		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn");
		purplebox= $("#purplebox");
		http= $("#http");
		purplebox1= $("#purplebox1");
		tcp= $("#tcp");
		ip= $("#ip");
		purplebox2= $("#purplebox2");
		purplebox3= $("#purplebox3");
		ethernet= $("#ethernet");
		ethernetempty= $("#ethernetempty");
		purplebox4= $("#purplebox4");
		segment= $("#segment");
		binary= $("#binary"); 

		tl.to(animImg,.01,{css:{left:-90,top:200,opacity:0,scale:.1}})
		.to(animImg,2,{css:{left:54,top:81,opacity:1,scale:1}})
		.to(animImg,2,{css:{left:180,top:190,opacity:1,scale:.4},delay:2})
		.to(animImg,2,{css:{opacity:0,scale:.1}})  

		tl.to(purplebox,.6,{css:{opacity:1}})
		.to(purplebox,.6,{css:{opacity:0}})
		.to(purplebox,.6,{css:{opacity:1}})
		.to(purplebox,.6,{css:{opacity:0}})
		.to(purplebox,.6,{css:{opacity:1}})
		.to(purplebox,.6,{css:{opacity:0}}) 

		tl.to(http,1,{css:{left:211.95,top:245.2,opacity:1}})
		.to(purplebox1,.6,{css:{opacity:1}})
		.to(purplebox1,.6,{css:{opacity:0}})
		.to(purplebox1,.6,{css:{opacity:1}})
		.to(purplebox1,.6,{css:{opacity:0}})
		.to(purplebox1,.6,{css:{opacity:1}})
		.to(purplebox1,.6,{css:{opacity:0}})  

		tl.to(tcp,1,{css:{left:170.95,top:245.2,opacity:1}})
		.to(purplebox2,.6,{css:{opacity:1}})
		.to(purplebox2,.6,{css:{opacity:0}})
		.to(purplebox2,.6,{css:{opacity:1}})
		.to(purplebox2,.6,{css:{opacity:0}})
		.to(purplebox2,.6,{css:{opacity:1}})
		.to(purplebox2,.6,{css:{opacity:0}})
		
		tl.to(ip,1,{css:{left:137.95,top:245.2,opacity:1}})
		.to(purplebox3,.6,{css:{opacity:1}})
		.to(purplebox3,.6,{css:{opacity:0}})
		.to(purplebox3,.6,{css:{opacity:1}})
		.to(purplebox3,.6,{css:{opacity:0}})
		.to(purplebox3,.6,{css:{opacity:1}})
		.to(purplebox3,.6,{css:{opacity:0}}) 
		.append([ 
		new TweenLite(ethernet,1,{css:{left:71.95,top:245.2,opacity:1}}),
		new TweenLite(ethernetempty,1,{css:{left:305,top:245.5,opacity:1}})
		]) 


		.to(purplebox4,.6,{css:{opacity:1}})
		.to(purplebox4,.6,{css:{opacity:0}})
		.to(purplebox4,.6,{css:{opacity:1}})
		.to(purplebox4,.6,{css:{opacity:0}})
		.to(purplebox4,.6,{css:{opacity:1}})
		.to(purplebox4,.6,{css:{opacity:0}}) 
		
		tl.to(segment,2,{css:{left:-43,top:70.5,opacity:.9}})
		.to(segment,.5,{css:{opacity:0}})
		.to(binary,.5,{css:{opacity:1}})
		.to(binary,1,{css:{left:111,opacity:1}})	

		.to(pause,.05,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

/* Third Slide */
	
	var animation2 = function(data)
{
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

	var temp ='';
	var temp = '<div id="main_wrapper"><div id="main_container3"><img src="3_1_2_3C.png" id="bgImg" /><img src="3_1_2_3D.png" id="compImg" /><div><img src="3_1_2_3d.png" id="animPic" /><img src="Cloud.png" id="cloud1" /><div id="purpleshadow4"></div><div id="purpleshadow3"></div><div id="purpleshadow2"></div><div id="purpleshadow1"></div><div id="purpleshadow"></div><div id="binary3_3"></div><img src="compgra.jpg" id="compGra"/></div>'
	temp += '<div id="segment3"><div id="data3"><div id="ID_s3_txt31"></div></div><div id="http3"><div id="ID_s3_txt32"></div></div><div id="tcp3"><div id="ID_s3_txt33"></div></div><div id="ip3"><div id="ID_s3_txt34"></div></div><div id="ethernet3"><div id="ID_s3_txt35"></div></div><div id="ethernetempty3"></div></div></div></div>';
	temp += '<div id="textProtocols"><div id="ID_s3_txt01"></div><div id="ID_s3_txt02"></div><div id="ID_s3_txt03"></div>'
	temp += '<div id="ID_s3_txt04"></div><div id="ID_s3_txt05"></div>'
	temp += '<div id="ID_s3_txt07"></div><div id="ID_s3_txt08"></div><div id="ID_s3_txt09"></div>'
	temp += '<div id="ID_s3_txt10"></div><div id="ID_s3_txt11"></div></div><div id="ID_s3_txt12"></div>'	
	temp += '<div id="ID_s3_txt14"></div><div id="ID_s3_txt16"></div>'
	temp += '<div id="ID_s3_txt26"></div>'
	
	
	$("#animDiv").html(temp);

	/*$("#inetbox").html($(data).find("component#ID_txt04").text());
	$("#captiontext").html($(data).find("component#ID_caption").text());*/
	$("#ID_s3_txt01").html($(data).find("component#ID_s3_txt01").text());	
	$("#ID_s3_txt02").html($(data).find("component#ID_s3_txt02").text());
	$("#ID_s3_txt03").html($(data).find("component#ID_s3_txt03").text());
	$("#ID_s3_txt04").html($(data).find("component#ID_s3_txt04").text());
	$("#ID_s3_txt05").html($(data).find("component#ID_s3_txt05").text());		
	$("#ID_s3_txt07").html($(data).find("component#ID_s3_txt07").text());
	$("#ID_s3_txt08").html($(data).find("component#ID_s3_txt08").text());
	$("#ID_s3_txt09").html($(data).find("component#ID_s3_txt09").text());
	$("#ID_s3_txt10").html($(data).find("component#ID_s3_txt10").text());
	$("#ID_s3_txt11").html($(data).find("component#ID_s3_txt11").text());
	$("#ID_s3_txt12").html($(data).find("component#ID_s3_txt12").text());	
	$("#ID_s3_txt31").html($(data).find("component#ID_s3_txt05").text());
	$("#ID_s3_txt32").html($(data).find("component#ID_s3_txt04").text());
	$("#ID_s3_txt33").html($(data).find("component#ID_s3_txt03").text());
	$("#ID_s3_txt34").html($(data).find("component#ID_s3_txt02").text());
	$("#ID_s3_txt35").html($(data).find("component#ID_s3_txt01").text());
	$("#ID_s3_txt14").html($(data).find("component#ID_s3_txt14").text());
	$("#ID_s3_txt15").html($(data).find("component#ID_s3_txt15").text());
	$("#ID_s3_txt16").html($(data).find("component#ID_s3_txt16").text());
	$("#ID_s3_txt17").html($(data).find("component#ID_s3_txt17").text());
	$("#ID_s3_txt18").html($(data).find("component#ID_s3_txt18").text());
	$("#ID_s3_txt19").html($(data).find("component#ID_s3_txt19").text());
	$("#ID_s3_txt20").html($(data).find("component#ID_s3_txt20").text());
	$("#ID_s3_txt21").html($(data).find("component#ID_s3_txt21").text());
	$("#ID_s3_txt22").html($(data).find("component#ID_s3_txt22").text());
	$("#ID_s3_txt23").html($(data).find("component#ID_s3_txt23").text());
	$("#ID_s3_txt24").html($(data).find("component#ID_s3_txt24").text());
	$("#ID_s3_txt25").html($(data).find("component#ID_s3_txt25").text());
	$("#ID_s3_txt26").html($(data).find("component#ID_s3_txt26").text());
}

	
	
	function animation3()
	{    
		binary = $("#binary3_3");
		segment3 = $("#segment3");
		purpleshadow4 = $("#purpleshadow4");
		ID_s3_txt35=$("#ID_s3_txt35");
		ethernet3=$("#ethernet3");
		ethernetempty3=$("#ethernetempty3");
		purpleshadow3 = $("#purpleshadow3");
		ID_s3_txt34=$("#ID_s3_txt34");
		ip3=$("#ip3");
		purpleshadow2=$("#purpleshadow2");
		ID_s3_txt33=$("#ID_s3_txt33");
		tcp3=$("#tcp3");
		purpleshadow1=$("#purpleshadow1");
		ID_s3_txt32=$("#ID_s3_txt32");
		http3=$("#http3");
		purpleshadow =$("#purpleshadow");
		ID_s3_txt31 =$("#ID_s3_txt31");
		data3 =$("#data3");
		compGra =$("#compGra");
		bgImg =$("#bgImg");
		textProtocols =$("#textProtocols"); 
	
		ID_s3_txt32=$("#ID_s3_txt32");
		ID_s3_txt31=$("#ID_s3_txt31");
		pause = $("#pauseBtn");
		play  = $("#playBtn");
		restart= $("#restartBtn");
		ID_s3_txt16=$("#ID_s3_txt16");
		


  tl.to(binary,.5,{css:{left:37,top:314,opacity:1}})	
	 .to(binary,1.5,{css:{left:56,top:314,opacity:0}})	
	.to(segment3,1,{css:{left:-24,top:148,opacity:1}})
	.to(segment3,1,{css:{left:-46,top:80,opacity:1}})
	.to(purpleshadow4,.6,{css:{opacity:1}})
	.to(purpleshadow4,.6,{css:{opacity:0}})
	.to(purpleshadow4,.6,{css:{opacity:1}})
	.to(purpleshadow4,.6,{css:{opacity:0}})
	.to(purpleshadow4,.6,{css:{opacity:1}})
	.to(purpleshadow4,.6,{css:{opacity:0}})
	.to(ID_s3_txt35,.1,{css:{left:80.95,top:1,opacity:0}})
	.append([ 
		new TweenLite(ethernet3,.5,{css:{left:145.95,top:163.2,opacity:0}}),
		new TweenLite(ethernetempty3,.5,{css:{left:287.95,top:163.2,opacity:0}})
	]) 
	.to(purpleshadow3,.6,{css:{opacity:1}})
	.to(purpleshadow3,.6,{css:{opacity:0}})
	.to(purpleshadow3,.6,{css:{opacity:1}})
	.to(purpleshadow3,.6,{css:{opacity:0}})
	.to(purpleshadow3,.6,{css:{opacity:1}})
	.to(purpleshadow3,.6,{css:{opacity:0}}) 
	.to(ID_s3_txt34,.4,{css:{left:179.95,top:1,opacity:0}})
	.to(ip3,1,{css:{left:179.95,top:163.2,opacity:0}})
	
    .to(purpleshadow2,.6,{css:{opacity:1}})
	.to(purpleshadow2,.6,{css:{opacity:0}})
	.to(purpleshadow2,.6,{css:{opacity:1}})
	.to(purpleshadow2,.6,{css:{opacity:0}})
	.to(purpleshadow2,.6,{css:{opacity:1}})
	.to(purpleshadow2,.6,{css:{opacity:0}}) 
	.to(ID_s3_txt33,.4,{css:{left:-13.05,top:1,opacity:0}})
	.to(tcp3,1,{css:{left:222.95,top:163.2,opacity:0}})
	
	.to(purpleshadow1,.6,{css:{opacity:1}})
	.to(purpleshadow1,.6,{css:{opacity:0}})
	.to(purpleshadow1,.6,{css:{opacity:1}})
	.to(purpleshadow1,.6,{css:{opacity:0}})
	.to(purpleshadow1,.6,{css:{opacity:1}})
	.to(purpleshadow1,.6,{css:{opacity:0}})
	.to(ID_s3_txt32,.4,{css:{left:-12,top:1,opacity:0}})
	.to(http3,1,{css:{left:261.95,top:163.2,opacity:0}})

	.to(purpleshadow,.6,{css:{opacity:1}})
	.to(purpleshadow,.6,{css:{opacity:0}})
	.to(purpleshadow,.6,{css:{opacity:1}})
	.to(purpleshadow,.6,{css:{opacity:0}})
	.to(purpleshadow,.6,{css:{opacity:1}})
	.to(purpleshadow,.6,{css:{opacity:0}})
	.to(ID_s3_txt31,.4,{css:{left:-12,top:1,opacity:0}})
	.to(data3,.5,{css:{left:261.95,top:163.2,opacity:0}})
	.to(compGra,1,{css:{left:213,top:188,opacity:0,scale:.1}})


	.append([
		new TweenLite([bgImg,textProtocols,ID_s3_txt16],1.5,{css:{opacity:0}}), 
		new TweenLite(compGra,.2,{css:{scale:.2},delay:1}),
		new TweenLite(compGra,2,{css:{left:188,top:77,opacity:1,scale:1},delay:1.2})
	])  
	.to(pause,.05,{onComplete:myFunction})
	} 

	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

var animeArray = [{name:animation1,animFunction:animation},{name:animation2,animFunction:animation3}];