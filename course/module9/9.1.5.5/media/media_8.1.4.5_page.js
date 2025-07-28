loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 405;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [];
	
	var slide_1_type = "TABLE";
	
	var slide_1_tables = [{compId:"ID_s1_table",
							x:10,
							y:100,
							width:371,
							height:500}];				
	var slide_1_texts = [{compId:"ID_s1_title",
							x:2,
							y:2,
							width:430,
							height:17,
                            size:14,
							textAlign:"center"}];							
	var slide_1_object = {	x:0,
							y:0,
							templateType:slide_1_type,
							tables:slide_1_tables,
							texts:slide_1_texts};
							
	
	var slide_2_type = "TABLE";
	
	var slide_2_tables = [{compId:"ID_s2_table01",
							x:10,
							y:30},							
							{compId:"ID_s2_table02",
							x:10,
							y:225}];
	var slide_2_image = [];									
	var slide_2_texts = [{compId:"ID_s2_title",
							x:12,
							y:2,
							width:430,
							height:17,
                            size:14,
							textAlign:"center"}];
	var graphic_slide = [{x:70.75,
							y:223.55,
							length:22,
							thickness:3,
							color:"#F68026",
							rotation:-90,
							type:"arrow"},
							{x:210.75,
							y:223.55,
							length:22,
							thickness:3,
							color:"#F68026",
							rotation:-90,
							type:"arrow"},
							{x:350.75,
							y:223.55,
							length:22,
							thickness:3,
							color:"#F68026",
							rotation:-90,
							type:"arrow"}];						
								
	var slide_2_object = {	x:0,
							y:0,
							templateType:slide_2_type,
							tables:slide_2_tables,
							images:slide_2_image,
							texts:slide_2_texts,
							graphics:graphic_slide};
							
							
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}