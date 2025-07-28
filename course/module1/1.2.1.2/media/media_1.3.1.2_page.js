//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;


function getData()
{
	 var template_type = "INTERACTIVEANIM";

						var slide_texts = [{compId:"ID_txt01",
						x:193.05,
						y:175.1,
						width:37.5,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt02",
						x:189.5,
						y:223.1,
						width:81.5,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt03-1",
						x:330.25,
						y:142.5,
						width:29,
						height:17,
						size:11,
						textAlign:"left"},
						{compId:"ID_txt03-2",
						x:107.25,
						y:142.5,
						width:29,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt04",
						x:302.75,
						y:222.7,
						width:155.9,
						height:45,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt05",
						x:42.55,
						y:320.6,
						width:378.85,
						height:17,
						size:11,
						textAlign:"center"}];
						
						var slide_object = {
						animId:0,
						texts:slide_texts
						};
						
						return {templateType:template_type,
						slideObject:slide_object};
}



/*function bindTemplate(){
		
	
	$("#mainDiv").html('');	
	
	var temp = '<div id="main_wrapper"><div id="main_container"><div id="envelop_Yellow"><img src="envelope_closed_static.png"id="yellow_1"style="position:relative;z-index:-1"/><img src="envelope_closed_static.png"id="yellow_2"/><img src="arrow1.png"id="arrow1"/><img src="arrow2.png"id="arrow2"/><img src="questionmark.png"id="questionmark"/><div id="ID_txt01" style="position:relative;display:none;" ></div><div id="ID_txt02" style="position:relative;display:none;" ></div><div id="ID_txt03" style="position:relative;display:none;" ></div></div>';
	
	temp += '<div class="controller" style="width:200px;height:20px;border-radius:5px;border:1px solid red;float:right"><div id="circle"></div></div><input type="button"id="play"value="Play" class="controller"/><input type="button"id="stop"value="Stop" class="controller"/><input type="button"id="first"value="Go to First" class="controller"/><input type="button"id="forward"value="FF" class="controller"/><input type="button"id="rewind"value="FR" class="controller"/></div></div>';
	
	$("#mainDiv").html(temp);
	
	
	var _txt = $(dataXML).find("#ID_txt01").text();
	$("#ID_txt01").html(_txt);
	var _txt = $(dataXML).find("#ID_txt02").text();
	$("#ID_txt02").html(_txt);
	var _txt = $(dataXML).find("#ID_txt03").text();
	$("#ID_txt03").html(_txt);
		
	//animation();
}

function animation()
{
			 $("#yellow_1").fadeIn(15000,function(){
			 $("#yellow_1").css("z-index","1");		
			 setTimeout("animDisplay()"	,1000);
			 });
			 
			
		
}
function animDisplay()
		{
			$("#ID_txt01").show();				
			$("#yellow_1").animate({left:"285px"},5000,function(){
					$("#yellow_1").fadeOut(2000);
					$("#ID_txt01").fadeOut(800,function(){$("#yellow_1").css("opacity",-1);display();})
			});	
		}
function display(){
	$("#yellow_1").hide();
	$("#yellow_1").css("margin-top","-10px");
	$("#yellow_1").css("margin-left","-150px");
	$("#yellow_1").fadeIn(1000,function(){});
	
	$("#yellow_1").animate({left:"210px",top:"45px"},5000,function(){
		$("#ID_txt02").show();
		$("#yellow_1").fadeOut(800);
		$("#yellow_2").css("display","block");
		$("#yellow_2").animate({left:"70px",top:"55px"},5000,function(){$("#ID_txt02").fadeOut(800);});
		$("#yellow_2").animate({left:"198px",top:"125px"},5000,function(){
			$("#arrow1").css("display","block");
		 	$("#arrow2").css("display","block");
			$("#arrow1").fadeIn(800,function(){
				$("#arrow1").fadeOut(800,function(){
					$("#arrow1").fadeIn(800,function(){
						$("#arrow1").fadeOut(800,function(){
							$("#arrow1").fadeIn(800,function(){
								$("#questionmark").css("display","block");
								$("#ID_txt03").show();
								$("#arrow1").fadeIn(2000);
								setTimeout("arrowFade()",1000);
								
								});
						});
					});
				});
			});
			$("#arrow2").fadeIn(800,function(){
				$("#arrow2").fadeOut(800,function(){
					$("#arrow2").fadeIn(800,function(){
						$("#arrow2").fadeOut(800,function(){
							$("#arrow2").fadeIn(800,function(){
								 $("#questionmark").css("display","block");
								 $("#ID_txt03").show();
								 
								 });
						});
					});
				});
			});
			
			});
		
				});
	}
function arrowFade(){
	$("#arrow1").fadeOut(2000,function(){$("#questionmark").fadeOut(800);lastAnimate();});
	
}	
function lastAnimate(){
	$("#yellow_2").animate({left:"350px",top:"70px"},5000,function(){});
	
	}			 
function erFun()
{

}*/