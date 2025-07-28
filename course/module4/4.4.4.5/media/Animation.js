var IDtxt01,IDtxt02,IDtxt03,IDtxt04,IDtxt05;


	

var animation1 = function(data)
{

var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	var temp = '<div id="main_wrapper"><div id="main_container"><div id="ID_txt01"></div><div id="ID_txt02"></div><div id="ID_txt03"></div><div id="ID_txt04"></div><div id="ID_txt05"></div></div></div>';
temp += '</div></div>';

temp += '<div id="inetbox" ></div>'
temp += '<div id="captiontext"></div>'
			

$("#animDiv").html(temp);

	/*$("#inetbox").html($(data).find("component#ID_txt04").text());
	$("#captiontext").html($(data).find("component#ID_caption").text());*/
	$("#ID_txt01").html($(data).find("component#ID_txt01").text());	
	$("#ID_txt02").html($(data).find("component#ID_txt02").text());
	$("#ID_txt03").html($(data).find("component#ID_txt03").text());
	$("#ID_txt04").html($(data).find("component#ID_txt04").text());
	$("#ID_txt05").html($(data).find("component#ID_txt05").text());
	

}


	function animation()
	{   
	IDtxt01= $("#ID_txt01")
	IDtxt02= $("#ID_txt02")
	IDtxt03= $("#ID_txt03")
	IDtxt04= $("#ID_txt04")
	IDtxt05= $("#ID_txt05")	
	pause = $("#pauseBtn");
	play  = $("#playBtn")
	restart= $("#restartBtn");
	
	


  tl.to(IDtxt01,1.5,{css:{display:"block",top:"22px"}})
	.to(IDtxt01,2,{css:{display:"block",top:"163px"}})
	.to(IDtxt01,.3,{css:{opacity:"0",top:"163px"},delay:1})

    .to(IDtxt02,1.5,{css:{opacity:"1",}})	
    .to(IDtxt02,2,{css:{opacity:"1", top:"63px",left:"131px"}})
	.to(IDtxt02,.5,{css:{opacity:"0", top:"63px",left:"131px"},delay:1})

    .to(IDtxt03,.5,{css:{opacity:"1", top:"63px",left:"131px"}})
  	.to(IDtxt03,2,{css:{opacity:"1", top:"115px",left:"261.65px"}})	
	.to(IDtxt03,1,{css:{opacity:"0", top:"115px",left:"261.65px"},delay:1})

	.to(IDtxt04,.5,{css:{opacity:"1", top:"115px",left:"261.65px"}})
	.to(IDtxt04,2,{css:{opacity:"1", top:"241.35px",left:"128px"}})	
	.to(IDtxt04,1,{css:{opacity:"0", top:"241.35px",left:"128px"},delay:1})

	.to(IDtxt05,.5,{css:{opacity:"1", top:"241.35px",left:"128px"}})
	.to(IDtxt05,2,{css:{opacity:"1", top:"278px",left:"256px"}})
	.to(IDtxt05,1,{css:{opacity:"1", top:"278px",left:"362px"}})
	
	.to(pause,.05,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

var animeArray = [{name:animation1,animFunction:animation}];