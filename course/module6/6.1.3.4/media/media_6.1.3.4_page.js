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
	
	var slide_1_type = "CLICKACTIVITY";
	var slide_1_texts = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							slideID:1,
							texts:slide_1_texts};
							
	var slide_2_type = "CLICKACTIVITY";
	var slide_2_texts = [];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							slideID:2,
							texts:slide_2_texts};
							
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
