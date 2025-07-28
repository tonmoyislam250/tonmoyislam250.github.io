
var animation1 = function (data)
{
	
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	
	var temp ='';
	temp = '<div id="maincontainer"><div id="imagecontainer">';
	temp +='<div id="layertext"></div>';
	temp +='<div id="serialtext"></div>';
	temp +='<div id="ethertext"></div>';
	
	//Animation resources starts
	temp +='<div id="anim3box" style="opacity:0">';
	temp +='<div id="animbox1"></div>';
	temp +='<div id="animbox2"></div>';
	temp +='<div id="animbox3"></div>';
	temp +='<div id="animbox4" style="opacity:0"></div>';	
	temp +='<div id="animbox5"style="opacity:0"></div>';
	
	temp +='</div>';
	
	
	
	temp +='</div></div>';

$("#animDiv").html(temp);
$("#animbox3").html($(data).find("component#ID_txt01").text());
$("#animbox2").html($(data).find("component#ID_txt01a").text());
$("#animbox1").html($(data).find("component#ID_txt02").text());
$("#animbox4").html($(data).find("component#ID_txt04").text());
$("#animbox5").html($(data).find("component#ID_txt03").text());
$("#serialtext").html($(data).find("component#ID_txt05").text());
$("#ethertext").html($(data).find("component#ID_txt06").text());
$("#layertext").html($(data).find("component#ID_txt07").text());


/*$("#binadd").html($(data).find("component#ID_txt07").text());
$("#binval").html($(data).find("component#ID_txt08").text());
$("#bintext").html($(data).find("component#ID_txt09").text());
$("#ittext10").html($(data).find("component#ID_txt10").text());*/
	
	
	
	

}

function animation()
	{   
		

		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn"); 
		
		tl.to(anim3box,.5,{css:{opacity:1}})
		tl.to(anim3box,1.5,{css:{opacity:1}})
		tl.to(anim3box,1.7,{css:{top:"8px"}})
		tl.to([animbox1,animbox3],1.3,{css:{opacity:0}})
		tl.to([animbox4,animbox5],1.3,{css:{opacity:1}})
		tl.to([animbox4,animbox5],1,{css:{opacity:1}})
		tl.to(anim3box,1.6,{css:{left:"160px"}})
		
		
		tl.to(pause,.05,{onComplete:myFunction1})
	}
	
	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	
var animeArray = [{name:animation1,animFunction:animation}];