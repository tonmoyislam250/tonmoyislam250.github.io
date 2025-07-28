loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;
var TYPE = 'MULTI_BAR'

function getData()
{

	$('#mainDiv').data("yt", true);
	var template_type = "MULTI_BAR";
	var commonTexts = [];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"1_4_1_1.png",
							x:1,
							y:85, 
							width:438,
							height:255,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_titletxt",
							x:18.35+2,
							y:92.05+2, 
							width:406.9,
							height:143.60,
							size:11,
							color:"#442557",
							textAlign:"left",
							},
							
						{compId:"ID_s1_bodytext",
							x:8.35,
							y:119.05-11, 
							width:406.9,
							height:143.60,
							size:11,
							textAlign:"left",
							}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
							
	var slide_2_type = "VIDEO";
	var slide_2_video = [{url:"https://www.youtube.com/embed/HYT2puLoDrI?version=3&fs=1&modestbranding=1&rel=0&color=white&theme=light&autohide=0&frameborder=0&allowfullscreen",
						x:80,
						y:40,
						width:390,
						height:234,
						}];
	var slide_2_images = []								
	var slide_2_texts = [];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,							
							images:slide_2_images,
							texts:slide_2_texts,
							videoObject:slide_2_video};	
																
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
