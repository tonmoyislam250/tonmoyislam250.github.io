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
	var commonTexts = [{	compId:"ID_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"}];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"6_1_2_5_A.png",
							 x:166.05,
							 y:94.70, 
							 width:246.70,
							 height:62.30,
							 size:11,
							 type:""}];								
	var slide_1_texts = [{compId:"ID_txt01",
							x:140-128,
							y:120+8-12, 
							width:150,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:160+27,
							y:120-5, 
							width:90,
							height:33,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:160+138-19,
							y:120-5, 
							width:110,
							height:33,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:140-128+218+41-30,
							y:120+8+22, 
							width:115,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt05",
							x:140+218-348,
							y:120+32+215, 
							width:438,
							height:17,
							size:11,
							textAlign:"left"}/**/];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"6_1_2_5_B.png",
							 x:180.05,
							 y:105.45, 
							 width:220.75,
							 height:41.55,
							 size:11,
							 type:""},
							 {name:"6_1_2_5_C.png",
							 x:160.05,
							 y:200.45, 
							 width:262.15,
							 height:77.85,
							 size:11,
							 type:""}];								
	var slide_2_texts = [{compId:"ID_txt06",
							x:140-128,
							y:120+8-12, 
							width:150,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt07",
							x:160+32,
							y:120-5, 
							width:79,
							height:33,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt08",
							x:160+138-19,
							y:118, 
							width:110,
							height:33,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt09",
							x:140-128,
							y:128+9+111-15, 
							width:150,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt10",
							x:160+24,
							y:125+106, 
							width:75,
							height:33,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt11",
							x:160+99,
							y:125+106, 
							width:126,
							height:33,
							size:11,
							textAlign:"center"}	,
							{compId:"ID_txt12",
							x:214,
							y:120+11+32+111-15, 
							width:150,
							height:17,
							size:11,
							textAlign:"center"},						
							{compId:"ID_txt13",
							x:140+218-348,
							y:120+17+215, 
							width:438,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt20",
							x:193.2,
							y:255.5+29, 
							width:198.65,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},						
							/**/];							
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
