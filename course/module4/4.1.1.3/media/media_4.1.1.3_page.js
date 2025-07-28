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
	var commonTexts = [{}];
							
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"4_1_1_3_A.jpg",
							x:12,
							y:118, 
							width:417.7,
							height:187.5,
							type:"none"}];		
	
	var slide_1_texts = [{compId:"ID_s1_title",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
							 
						{compId:"ID_s1_txt01",
							 x:24.35+10,
							 y:172.85,
							 width:104,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_s1_txt02",
							 x:298.3-30,
							 y:243.85,
							 width:130,
							 height:17,
							 size:11,
							 textAlign:"center"}
							];	
	var slide_1_graphics = [];		

    var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts,
							graphics:slide_1_graphics};
							
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"4_1_1_3_B.jpg",
							x:5.35,
							y:48.7, 
							width:420,
							height:360.05,
							type:"none"}];		
	
	var slide_2_texts = [{compId:"ID_s2_title",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
							 
						{compId:"ID_s2_txt01",
							 x:192.15-10,
							 y:341.85,
							 width:236.55,
							 height:17,
							 size:11,
							 textAlign:"center"}];	
							 
	var slide_2_graphics = [{x:304.9,
							y:296.1,
							length:50,
							thickness:3,
							color:"#F68026",
							rotation:90,
							depth:0,
							type:"arrow"}];	

    var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							graphics:slide_2_graphics};
										
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}


// code below is needed for html5 content from Flash CS6
loadScript("../../../common/scripts/createJS_bundle.min.js", null);
loadScript("media_4.1.1.3_graphic.js", null);
