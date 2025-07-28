loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");

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
	
	var slide_1_type = "TABLE";
	var slide_1_tables = [{compId:"ID_s1_table",
							x:10,
							y:41, 
							size:11,
							textAlign:"center"}];	
	var graphic_1_slide = [];		
	var slide_1_texts = [{compId:"ID_s1_title",
						x:15,
						y:2,
						width:430,
						height:17,
						size:14,
						textAlign:"center",
						expand:"down"}];				
							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							tables:slide_1_tables,
							graphics:graphic_1_slide,
							texts:slide_1_texts};
							
	var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_s2_table",
							x:10,
							y:41, 
							size:11,
							textAlign:"center"}];	
	var graphic_2_slide = [];		
	var slide_2_texts = [{compId:"ID_s2_title",
						x:15,
						y:2,
						width:430,
						height:17,
						size:14,
						textAlign:"center",
						expand:"down"}];							
						
						
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_tables,
							graphics:graphic_2_slide,
							texts:slide_2_texts};
							
	var slide_3_type = "TABLE";
	var slide_3_tables = [{compId:"ID_s3_table",
							x:10,
							y:41, 
							size:11,
							textAlign:"center"}];		
	var graphic_3_slide = [];		
	var slide_3_texts = [{compId:"ID_s3_title",
						x:15,
						y:2,
						width:430,
						height:17,
						size:14,
						textAlign:"center",
						expand:"down"}];					
							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							tables:slide_3_tables,
							graphics:graphic_3_slide,
							texts:slide_3_texts};
							
			
	var slides = [slide_1_object,slide_2_object,slide_3_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}