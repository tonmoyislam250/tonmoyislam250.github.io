
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
	var slide_1_images = [{name:"9_4_3_4_A.jpg",
							x:9.8,
							y:37.7, 
							width:202.95,
							height:121.8,
							type:"STD"},
							{name:"9_4_3_4_B.jpg",
							x:228.6,
							y:37.7, 
							width:202.95,
							height:121.8,
							type:"STD"},
							{name:"9_4_3_4_C.jpg",
							x:9.8,
							y:214.75, 
							width:202.95,
							height:121.8,
							type:"STD"},
							{name:"9_4_3_4_D.jpg",
							x:228.6,
							y:214.75, 
							width:202.95,
							height:121.8,
							type:"STD"}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:22,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_txt01",
							x:22,
							y:166.85, 
							width:202.95,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_txt02",
							x:242.6,
							y:166.85, 
							width:202.95,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_txt03",
							x:22,
							y:345.85, 
							width:202.95,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_txt04",
							x:242.6,
							y:345.85, 
							width:202.95,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"9_4_3_4_E.jpg",
							x:9.8,
							y:27, 
							width:184.2,
							height:147.4,
							type:"STD"},
							{name:"9_4_3_4_F.jpg",
							x:228.6,
							y:27, 
							width:184.2,
							height:147.4,
							type:"STD"},
							{name:"9_4_3_4_G.jpg",
							x:9.8,
							y:212, 
							width:184.2,
							height:147.4,
							type:"STD"},
							{name:"9_4_3_4_H.jpg",
							x:228.6,
							y:212, 
							width:184.2,
							height:147.4,
							type:"STD"}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:22,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s2_txt01",
							x:21,
							y:187.85-8, 
							width:184.2,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_s2_txt02",
							x:242.6,
							y:187.85-8, 
							width:184.2,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_s2_txt03",
							x:22,
							y:366.85, 
							width:184.2,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_s2_txt04",
							x:250.6-5,
							y:366.85, 
							width:184.2,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"}];							
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

