
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
	var template_type = "MULTI_BAR";
	var commonTexts = [];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"6_1_4_5_A.jpg",
							x:-10,
							y:36.50, 
							width:440,
							height:313,
							type:"STD"}];								
	var slide_1_texts = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"6_1_4_5_B.jpg",
							x:-10,
							y:36.50, 
							width:440,
							height:313,
							type:"STD"}];								
	var slide_2_texts = [];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
							
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"6_1_4_5_C.jpg",
							x:-10,
							y:36.50, 
							width:440,
							height:313,
							type:"STD"}];								
	var slide_3_texts = [];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
	
											
	var slides = [slide_1_object,slide_2_object,slide_3_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}