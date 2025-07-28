loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BUTTON";
	var buttonStyle = {normalSkinImage:"cable_btn0001.png",
						overSkinImage:"cable_btn0015.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};
	var buttons = [{compId:"ID"},
					{compId:"ID_btn01",
						x:4,
						y:2,
						width:195,
						height:80,
						textAlign:"left"},
					{compId:"ID_btn02",
						x:4,
						y:128,
						width:195,
						height:80,
						textAlign:"left"},
						{compId:"ID_btn03",
						x:4,
						y:254,
						width:195,
						height:80,
						textAlign:"left"}];
	var buttonObject = {style:buttonStyle,
						buttons:buttons};
	var commonTexts = [{compId:"ID_txt01",x:31,y:78.25, width:190,height:17,size:12,textAlign:"left",expand:"down"},
						{compId:"ID_txt02",x:25,y:204.95, width:190,height:17,size:12,textAlign:"left",expand:"down"},
						{compId:"ID_txt03",x:31,y:330.25, width:190,height:17,size:12,textAlign:"left",expand:"down"},
						{compId:"ID_inst",x:2,y:380, width:466,height:17,size:12,textAlign:"left",expand:"down"}];
	var common_images = []
	var slide_0_type = "DESCRIPTION";
	var slide_0_images = [];							
	var slide_0_textboxs = [];							
	var slide_0_texts = [];
	var slide_graphics = [];							
	var slide_0_object = {templateType:slide_0_type,
							x:0,
							y:0,
							images:slide_0_images,
							textboxs:slide_0_textboxs,
							texts:slide_0_texts,
							graphics:slide_graphics};
							
	var slide_1_type = "DESCRIPTION";
	var slide_1_images = [{name:"textbox.png",x:220.95,y:20.25,width:255,height:287,type:""},];							
	var slide_1_textboxs = [{compId:"ID_bodyTxt01",x:241.95,y:59, width:213,height:17,size:11,textAlign:"left"}];							
	var slide_1_texts = [{compId:"ID_titleTxt01",x:252.95,y:33, width:145,height:17,size:11,textAlign:"left"}];
	var slide_graphics = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							textboxs:slide_1_textboxs,
							texts:slide_1_texts,
							graphics:slide_graphics};
							
	var slide_2_type = "DESCRIPTION";
	var slide_2_images = [{name:"textbox.png",x:220.95,y:20.25,width:255,height:287,type:""},];							
	var slide_2_textboxs = [{compId:"ID_bodyTxt02",x:241.95,y:59, width:213,height:17,size:11,textAlign:"left"}];							
	var slide_2_texts = [{compId:"ID_titleTxt02",x:252.95,y:33, width:220,height:17,size:11,textAlign:"left"}];
	var slide_graphics = [];			
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							textboxs:slide_2_textboxs,
							texts:slide_2_texts,
							graphics:slide_graphics};
							
	var slide_3_type = "DESCRIPTION";
	var slide_3_images = [{name:"textbox.png",x:220.95,y:20.25,width:255,height:364,type:""},];							
	var slide_3_textboxs = [{compId:"ID_bodyTxt03",x:241.95,y:59, width:213,height:17,size:11,textAlign:"left"}];							
	var slide_3_texts = [{compId:"ID_titleTxt03",x:252.95,y:33, width:145,height:17,size:11,textAlign:"left"}];
	var slide_graphics = [];			
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							textboxs:slide_3_textboxs,
							texts:slide_3_texts,
							graphics:slide_graphics};
	
	var slides = [slide_0_object,slide_1_object,slide_2_object,slide_3_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:common_images,
			buttonObject:buttonObject,
			slideObject:slides};
	
}

