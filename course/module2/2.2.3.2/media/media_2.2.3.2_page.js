loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [{compId:"ID_inst",
							x:5,
							y:390, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"2_2_3_2B.jpg",
							x:14,
							y:33, 
							width:408,
							height:251.05,
							type:"STD"},
							{name:"2_2_3_2A.png",
							x:23.35,
							y:296.55, 
							width:391,
							height:92,
							type:""}];					
	var slide_1_texts = [{compId:"ID_s1_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_title_01",
							 x:40,
							 y:300,
							 width:300,
							 height:17,
							 size:12,
							 textAlign:"left"},
						 {compId:"ID_body01",
							 x:44,
							 y:328,
							 width:300,
							 height:300,
							 size:11,
							 textAlign:"left"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"2_2_3_2A.jpg",
							x:47.75,
							y:30.75, 
							width:355.45,
							height:338.2,
							type:"STD"},
							{name:"2_2_3_2.png",
							x:50,
							y:255, 
							width:443,
							height:120,
							type:""}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_title_01",
							 x:65,
							 y:260,
							 width:300,
							 height:17,
							 size:12,
							 textAlign:"left"},
						 {compId:"ID_body02",
							 x:70,
							 y:290,
							 width:300,
							 height:300,
							 size:11,
							 textAlign:"left"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}

