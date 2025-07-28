
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
	var slide_1_images = [{name:"1.1.1.4Rays.png",
							x:5,
							y:38, 
							width:425,
							height:307,
							type:""},
							{name:"1.1.1.4.A.jpg",
							x:5,
							y:38, 
							width:180,
							height:120.25,
							type:"STD"},
							{name:"1.1.1.4.B.jpg",
							x:250,
							y:38, 
							width:180,
							height:120.25,
							type:"STD"},
							{name:"1.1.1.4.C.jpg",
							x:5,
							y:227, 
							width:180,
							height:120.25,
							type:"STD"},
							{name:"1.1.1.4.D.jpg",
							x:250,
							y:228, 
							width:180,
							height:120.25,
							type:"STD"}];								
	var slide_1_texts = [{compId:"ID_txt01",
							x:30,
							y:20.35, 
							width:130,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:282,
							y:10, 
							width:130,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:30,
							y:356.85, 
							width:130,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt05",
							x:282,
							y:356.85, 
							width:130,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:140,
							y:180, 
							width:170,
							height:17,
							size:12,
							textAlign:"center"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	var slide_2_type = "VIDEO";
	var slide_2_video = [{url:"http://www.youtube.com/embed/AUpDJxuy4ao?version=3&fs=1&modestbranding=1&rel=0&color=white&theme=light&autoplay=0&autohide=0&frameborder=0&allowfullscreen",
									//"http://www.youtube.com/watch?v=dd6h3MeN4P4&feature=player_embedded?version=3&fs=1&modestbranding=1&rel=0&color=white&theme=light&autoplay=0&autohide=0&frameborder=0&allowfullscreen",
						x:10,
						y:60,
						width:400,
						height:240,
						}];
	var slide_2_images = []								
	var slide_2_texts = [];							
	var slide_2_object = {templateType:slide_2_type,
							x:20,
							y:0,							
							images:slide_2_images,
							texts:slide_2_texts,
							videoObject:slide_2_video};
	
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}