
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
	var slide_1_images = [{name:"7_1_2_1.jpg",
							x:100.35,
							y:100, 
							width:300,
							height:218,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_txt01",
							x:167.95,
							y:122.65, 
							width:96.65,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s1_txt02",
							x:343,
							y:123.65, 
							width:56.65,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s1_txt03",
							x:25.05,
							y:143.6, 
							width:92.55,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s1_txt04",
							x:30.05,
							y:220.95, 
							width:86.55,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "TABLE";
	var slide_2_table = [{compId:"ID_s2_table01",
							x:47.55,
							y:111.05},
							{compId:"ID_s2_table02",
							x:116.55,
							y:105.05}];
					
	var slide_2_texts = [{compId:"ID_s2_title",
							x:0,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_table,
							texts:slide_2_texts};
							
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}

