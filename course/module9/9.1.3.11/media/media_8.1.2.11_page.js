
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
	var slide_1_images = [{name:"8_1_2_11_A.png",
							x:70.60,
							y:170.30, 
							width:308.80,
							height:129.605,
							type:""}];		
													
	var slide_1_texts = [{compId:"ID_s1_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_txt01",
							x:69.60+12,
							y:115.80+20, 
							width:160,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left+right"},
							{compId:"ID_s1_txt02",
							x:267.20+12+12,
							y:221.50+20, 
							width:130,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left+right"},
							{compId:"ID_s1_txt03",
							x:267.20+14-20,
							y:221.50+53+15, 
							width:180,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left+right"}];	
													
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
							
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"8_1_2_11_B.png",
							x:40.60,
							y:90.30, 
							width:419.30,
							height:213,
							type:""}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							
							{compId:"ID_s2_txt01",
							x:39.65+5,
							y:76-3, 
							width:233,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_s2_txt02",
							x:39.65+5,
							y:76-3+63, 
							width:233,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_s2_txt03",
							x:39.65+5,
							y:76-3+63+60, 
							width:233,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_s2_txt04",
							x:39.65+5,
							y:76-3+63+60+65, 
							width:233,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},];							
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