
var animation1 = function (data)
{
	
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	
	var temp ='';
	temp = '<div id ="maincontainer"><div id="ip32bit"></div><div id="octetbit"></div><div id="binadd"></div><div id="binval"></div><div id="imagecontainer">';

temp +='<div id="octet1"></div><div id="octet2"></div><div id="octet3"></div><div id="octet4"></div>';

temp +='<div id="n1">128</div><div id="n2">64</div><div id="n3">32</div><div id="n4">16</div><div id="n5">8</div><div id="n6">4</div><div id="n7">2</div><div id="n8">1</div><div id="n9">128</div><div id="n10">64</div><div id="n11">32</div><div id="n12">16</div><div id="n13">8</div><div id="n14">4</div><div id="n15">2</div><div id="n16">1</div><div id="n17">128</div><div id="n18">64</div><div id="n19">32</div><div id="n20">16</div><div id="n21">8</div><div id="n22">4</div><div id="n23">2</div><div id="n24">1</div><div id="n25">128</div><div id="n26">64</div><div id="n27">32</div><div id="n28">16</div><div id="n29">8</div><div id="n30">4</div><div id="n31">2</div><div id="n32">1</div>';

temp +='<div id="almains"><div id="a1">1</div><div id="a2">1</div><div id="a3">0</div><div id="a4">0</div><div id="a5">0</div><div id="a6">0</div><div id="a7">0</div><div id="a8">0</div><div id="a9">1</div><div id="a10">0</div><div id="a11">1</div><div id="a12">0</div><div id="a13">1</div><div id="a14">0</div><div id="a15">0</div><div id="a16">0</div><div id="a17">0</div><div id="a18">0</div><div id="a19">0</div><div id="a20">0</div><div id="a21">1</div><div id="a22">0</div><div id="a23">1</div><div id="a24">0</div><div id="a25">0</div><div id="a26">0</div><div id="a27">0</div><div id="a28">0</div><div id="a29">1</div><div id="a30">0</div><div id="a31">1</div><div id="a32">0</div></div>';

temp +='<div id="v1mains"><div id="v1">128</div><div id="v2">64</div><div id="v3">0</div><div id="v4">0</div><div id="v5">0</div><div id="v6">0</div><div id="v7">0</div><div id="v8">0</div><div id="v9">128</div><div id="v10">0</div><div id="v11">32</div><div id="v12">0</div><div id="v13">8</div><div id="v14">0</div><div id="v15">0</div><div id="v16">0</div><div id="v17">0</div><div id="v18">0</div><div id="v19">0</div><div id="v20">0</div><div id="v21">8</div><div id="v22">0</div><div id="v23">2</div><div id="v24">0</div><div id="v25">0</div><div id="v26">0</div><div id="v27">0</div><div id="v28">0</div><div id="v29">8</div><div id="v30">0</div><div id="v31">2</div><div id="v32">0</div></div>';
/*temp +='<div id="hider" style="border:1px solid red;"></div>';
temp +='<div id="hider2"><img src="bg_mask.jpg" width="454" height="13" /></div>';*/
temp +='<div id="bintext"></div>';
temp +='<div id="bintexthider"><img src="bintext-hider.jpg" width="125" height="17" /></div>';
temp +='<div id="highlight1" style="opacity:0"></div>';
temp +='<div id="highlight2" style="opacity:0"></div>';
temp +='<div id="highlight3" style="opacity:0"></div>';
temp +='<div id="highlight4" style="opacity:0"></div>';
temp +='<div id="highlight6" style="opacity:0"></div>';
temp +='<div id="highlight7" style="opacity:0"></div>';
temp +='<div id="highlight8" style="opacity:0"></div>';
temp +='<div id="highlight9" style="opacity:0"></div>';
temp +='<div id="highlight10" style="opacity:0"></div>';
temp +='<div id="highlight11" style="opacity:0"></div>';
temp +='<div id="highlight12" style="opacity:0"></div>';
temp +='<div id="highlight13" style="opacity:0"></div>';
temp +='<div id="highlight14" style="opacity:0"></div>';
//Text1 and Arrow
temp +='<div id="arrowandtext1st">';
temp +='<div id="arrow1"><img src="arrow.png" width="33" height="45" /></div>';
temp+='<div id="arrow1text">128 + 64 = 192</div>'
temp +='</div>';

//Text2 and Arrow
temp +='<div id="arrowandtext2st">';
temp +='<div id="arrow2"><img src="arrow2.png" width="58" height="45" /></div>';
temp+='<div id="arrow2text">128 + 32 + 8 = 168</div>'
temp +='</div>';

//Text3 and Arrow
temp +='<div id="arrowandtext3st">';
temp +='<div id="arrow3"><img src="arrow3.png" width="31" height="45" /></div>';
temp+='<div id="arrow3text">8 + 2 = 10</div>'
temp +='</div>';

//Text4 and Arrow
temp +='<div id="arrowandtext4st">';
temp +='<div id="arrow4"><img src="arrow4.png" width="31" height="45" /></div>';
temp+='<div id="arrow4text">8 + 2 = 10</div>'
temp +='</div>';

//Arrow and Cloud

temp +='<div id="cloud"><img src="cloudandarrows.png" width="330" height="99" /><div id="iptext">198.168.10.10</div><div id="ittext10">198.162.10.10</div></div>'

temp +='</div></div>'

$("#animDiv").html(temp);
$("#ip32bit").html($(data).find("component#ID_txt01").text());
$("#octet1").html($(data).find("component#ID_txt02").text());
$("#octet2").html($(data).find("component#ID_txt03").text());
$("#octet3").html($(data).find("component#ID_txt04").text());
$("#octet4").html($(data).find("component#ID_txt05").text());
$("#octetbit").html($(data).find("component#ID_txt06").text());
$("#binadd").html($(data).find("component#ID_txt07").text());
$("#binval").html($(data).find("component#ID_txt08").text());
$("#bintext").html($(data).find("component#ID_txt09").text());
$("#ittext10").html($(data).find("component#ID_txt10").text());
	
	
	
	

}

function animation()
	{   
		

		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn"); 
		//bintexthider = $("#bintexthider>img")
		
		
		tl.to(almains,1.2,{css:{clip:"rect(0px 409px 13px 0px)"}})	
		tl.to(v1mains,1.7,{css:{clip:"rect(0px 409px 13px 0px)"}})
		tl.to(bintexthider,1.6,{css:{left:"290px"}})
		tl.to([highlight1,highlight2,highlight3,highlight4,highlight6,highlight7,highlight8,highlight9,highlight10],.5,{css:{opacity:1}})
		tl.to([highlight1,highlight2,highlight3,highlight4,highlight6,highlight7,highlight8,highlight9,highlight10],.2,{css:{opacity:0}})
		tl.to([highlight1,highlight2,highlight3,highlight4,highlight6,highlight7,highlight8,highlight9,highlight10],.6,{css:{opacity:1}})
		
		tl.to(arrowandtext1st,.8,{css:{clip:"rect(0px 85px 71px 0px)"}})
		tl.to(arrowandtext2st,.9,{css:{clip:"rect(0px 105px 71px 0px)"}})
		tl.to(arrowandtext3st,.8,{css:{clip:"rect(0px 55px 71px 0px)"}})
		tl.to(arrowandtext4st,.8,{css:{clip:"rect(0px 53px 71px 0px)"}})
		tl.to(bintexthider,.9,{css:{left:"164px"}})
		tl.to([highlight11,highlight12,highlight13,highlight14],.4,{css:{opacity:1}})
		tl.to([highlight11,highlight12,highlight13,highlight14],.2,{css:{opacity:0}})
		tl.to([highlight11,highlight12,highlight13,highlight14],1,{css:{opacity:1}})
		tl.to(cloud,2.5,{css:{clip:"rect(0px 330px 99px 0px)"}})
		
		tl.to(pause,.05,{onComplete:myFunction1})
	}
	
	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	function myFunction2()
	{
		$("#bintexthider").remove();
		$("#bintext").remove();
	}
	
	
var animeArray = [{name:animation1,animFunction:animation}];