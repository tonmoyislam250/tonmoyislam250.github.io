loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"7_1_3_1_A.jpg",
							 x:78.95,
							 y:32, 
							 width:270.6,
							 height:352.05,
							 size:11,
							 type:"STD"},
							 {name:"single_border.png",
							 x:96,
							 y:202, 
							 width:289,
							 height:28,
							 size:11,
							 type:""}
							 ];								
	var slide_1_texts = [{	compId:"ID_s1_title",
							x:14,
							y:2, 
							width:430,
							height:17,
							size:14,
							color:"#323232",
							textAlign:"center"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"7_1_3_1_B.jpg",
							 x:65.45,
							 y:36.45, 
							 width:313.25,
							 height:348.15,
							 size:11,
							 type:"STD"},
							 {name:"three_border.png",
							 x:89,
							 y:159, 
							 width:290,
							 height:70,
							 size:11,
							 type:""}
							 ];								
	var slide_2_texts = [{	compId:"ID_s2_title",
							x:14,
							y:2, 
							width:430,
							height:17,
							size:14,
							color:"#323232",
							textAlign:"center"}];							
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
