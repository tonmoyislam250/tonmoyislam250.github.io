loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 700;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [];
	
	var slide_1_type = "CONVERSION";
	var slide_1_texts = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							slideID:1,
							texts:slide_1_texts};
							
	var slide_2_type = "CONVERSION";
	var slide_2_texts = [];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							slideID:2,
							texts:slide_2_texts};
	var slide_3_type = "CONVERSION";
	var slide_3_texts = [];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							slideID:3,
							texts:slide_3_texts};
	var slide_4_type = "CONVERSION";
	var slide_4_texts = [];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							slideID:4,
							texts:slide_4_texts};
	var slide_5_type = "CONVERSION";
	var slide_5_texts = [];							
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							slideID:5,
							texts:slide_5_texts};
	var slide_6_type = "CONVERSION";
	var slide_6_texts = [];							
	var slide_6_object = {templateType:slide_6_type,
							x:0,
							y:0,
							slideID:6,
							texts:slide_6_texts};
	var slide_7_type = "CONVERSION";
	var slide_7_texts = [];							
	var slide_7_object = {templateType:slide_7_type,
							x:0,
							y:0,
							slideID:7,
							texts:slide_7_texts};
	var slide_8_type = "CONVERSION";
	var slide_8_texts = [];							
	var slide_8_object = {templateType:slide_8_type,
							x:0,
							y:0,
							slideID:8,
							texts:slide_8_texts};
	var slide_9_type = "CONVERSION";
	var slide_9_texts = [];							
	var slide_9_object = {templateType:slide_9_type,
							x:0,
							y:0,
							slideID:9,
							texts:slide_9_texts};
	var slide_10_type = "CONVERSION";
	var slide_10_texts = [];							
	var slide_10_object = {templateType:slide_10_type,
							x:0,
							y:0,
							slideID:10,
							texts:slide_10_texts};
							
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object,slide_6_object,slide_7_object,slide_8_object,slide_9_object,slide_10_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides,
			buttonBarPos:{x:610}};
	
}
