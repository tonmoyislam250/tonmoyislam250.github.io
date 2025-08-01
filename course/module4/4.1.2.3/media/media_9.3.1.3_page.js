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
	var slide_1_images = [{name:"9_3_1_3_A.png",
							 x:1,
							 y:57, 
							 width:190.05,
							 height:271.5,
							 size:11,
							 type:""},
		{name:"mask.png",
							 x:1,
							 y:2, 
							 width:190,
							 height:261.5,
							 size:11,
							 type:""}];								
	var slide_1_texts = [{compId:"ID_osi_txt07",
							x:20,
							y:8.5+74-11, 
							width:136,
							height:17,
							size:11,
							expand:"left+right",
							textAlign:"center"},
							{compId:"ID_osi_txt06",
							x:20,
							y:45.5+73-9, 
							width:136,
							height:17,
							size:11,
							expand:"left+right",
							textAlign:"center"},
							{compId:"ID_osi_txt05",
							x:20,
							y:82.5+72-8, 
							width:136,
							height:17,
							size:11,
							expand:"left+right",
							textAlign:"center"},
							{compId:"ID_osi_txt04",
							x:20,
							y:119.5+70-7, 
							width:136,
							height:17,
							size:11,
							expand:"left+right",
							textAlign:"center"},
							{compId:"ID_osi_txt03",
							x:20,
							y:156.5+69-5, 
							width:136,
							height:17,
							size:11,
							expand:"left+right",
							textAlign:"center"},
							{compId:"ID_osi_txt02",
							x:20,
							y:193.5+68-5, 
							width:136,
							height:17,
							size:11,
							expand:"left+right",
							textAlign:"center"},
							{compId:"ID_osi_txt01",
							x:20,
							y:230.5+68-5, 
							width:136,
							height:17,
							size:11,
							expand:"left+right",
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:190.85,
							y:109+22, 
							width:240,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_txt02",
							x:190.85,
							y:309-128+44, 
							width:240,
							height:17,
							size:11,
							textAlign:"left"}
							];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	var slide_2_type = "TABLE";
	var slide_2_images = [];								
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
							y:120+9+111-15, 
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
							textAlign:"left"}					
							/**/];	
	var slide_2_table = [{compId:"ID_s2_table",
							x:2,
							y:20, 
							width:435.95,
							height:17,
							size:11,
							textAlign:"left"}];						
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							tables:slide_2_table};
							
	
							
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
