
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
		
		var slide_1_type = "TABLE";
		
		var slide_1_tables = [{compId:"ID_s1_table",
		x:21.45,
		y:33.30, 
		width:405.90,
		height:356}];
		var slide_1_texts = [];		
		var slide_1_object = {templateType:slide_1_type,
		x:0,
		y:0,
		//images:slide_1_images,
		tables:slide_1_tables,
		texts:slide_1_texts};
	
	
	
		var slide_2_type = "TABLE";
		
		var slide_2_tables = [{compId:"ID_s2_table",
		x:21.45,
		y:20.30-7, 
		width:405.90,
		height:356}];
		var slide_2_texts = [];		
		var slide_2_object = {templateType:slide_2_type,
		x:0,
		y:0,
		//images:slide_1_images,
		tables:slide_2_tables,
		texts:slide_2_texts};
		
		
		var slides = [slide_1_object,slide_2_object];
		
		return {templateType:template_type,
		textObject:commonTexts,
		slideObject:slides};
	
	}