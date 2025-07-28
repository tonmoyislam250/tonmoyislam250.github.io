
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
	var commonTexts = [{compId:"ID_s1_txt01",
							x:184.35+6,
							y:40.35, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt02",
							x:184.35+6-9,
							y:106.85, 
							width:120,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt03",
							x:107.45-3,
							y:205.45-1, 
							width:120,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt04",
							x:261.40,
							y:205.45-1, 
							width:120,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt05",
							x:32.25-1,
							y:311.40-3-2, 
							width:120,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt06",
							x:171.75+7,
							y:311.40-3-2, 
							width:120,
							height:17,
							size:11,
							textAlign:"center"}];
	var commonImages = [{name:"7_1_4_6.png",
							x:0,
							y:0, 
							width:468,
							height:398,
							depth:20,
							type:""}];
							
	var commonGraphics= [];
							
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"7_1_4_6_A.png",
							x:0,
							y:0, 
							width:430,
							height:146,
							depth:20,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_txt07",
							x:13.25-10,
							y:98.20-6, 
							width:120,
							height:42.15,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt08",
							x:334.20,
							y:69.40, 
							width:88,
							height:71.15,
							size:11,
							textAlign:"center"}];
	
	
													
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"7_1_4_6_B.png",
							x:0,
							y:0, 
							width:430,
							height:220,
							depth:20,
							type:""}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							
							{compId:"ID_s2_txt07",
							x:13.25-10,
							y:98.20-6, 
							width:105,
							height:41.15,
							size:11,
							textAlign:"center"},
							{compId:"ID_s2_txt08",
							x:334.20,
							y:69.40+58, 
							width:88,
							height:41.15,
							size:11,
							textAlign:"center"}];
													
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
							
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"7_1_4_6_C.png",
							x:0,
							y:0, 
							width:430,
							height:294,
							depth:20,
							type:""}];								
	var slide_3_texts = [{compId:"ID_s3_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							
							{compId:"ID_s3_txt07",
							x:13.25-10+11,
							y:98.20-6-13, 
							width:105,
							height:56.15,
							size:11,
							textAlign:"center"},
							{compId:"ID_s3_txt08",
							x:334.20,
							y:69.40+58+137, 
							width:88,
							height:41.15,
							size:11,
							textAlign:"center"}];
	
														
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts
							};
							
	
	
											
	var slides = [slide_1_object,slide_2_object,slide_3_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			graphics:commonGraphics,
			slideObject:slides};
	
}