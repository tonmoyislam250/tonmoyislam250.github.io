// JavaScript Document
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
	var buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
						overSkinImage:"../../../common/images/text_button_gradient_selected.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};
	
	var buttons = [{compId:"ID_1",
						x:271.95,
						y:133,
						width:57,
						height:22,
						size:11,
						textAlign:"center"},
						{compId:"ID_2",
						x:271.95,
						y:186.05,
						width:57,
						height:22,
						size:11,
						textAlign:"center"},
						{compId:"ID_3",
						x:271.95,
						y:239.2,
						width:57,
						height:22,
						size:11,
						textAlign:"center"},
						{compId:"ID_4",
						x:271.95,
						y:294,
						width:57,
						height:22,
						size:11,
						textAlign:"center"}];
						
	var buttonObject = {style:buttonStyle,
						buttons:buttons};
						
	var commonTexts = [		{compId:"ID_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:281.95,
							y:62.35, 
							width:195.6,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:347,
							y:134.7, 
							width:129.5,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt04",
							x:347,
							y:186.05, 
							width:129.5,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:347,
							y:239.2, 
							width:129.5,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt06",
							x:347,
							y:286, 
							width:129.5,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt07",
							x:5,
							y:380, 
							width:459.95,
							height:17,
							size:11,
							textAlign:"left"}
							];
	
	var common_images = [{name:"11_1_3_3.jpg",
							x:3.45,
							y:50, 
							width:257.75,
							height:289,
							type:""}];
	
	var slide_1_type = "DESCRIPTION";
	var slide_1_images = [{name:"arrow_A.png",
							x:15,
							y:131, 
							width:258,
							height:29.9,
							type:""}];							
	var slide_1_textboxs = [];							
	var slide_1_texts = [];
	var slide_graphics = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							textboxs:slide_1_textboxs,
							texts:slide_1_texts,
							graphics:slide_graphics};
										
	var slide_2_type = "DESCRIPTION";
	var slide_2_images = [{name:"arrow_B.png",
							x:15,
							y:185, 
							width:258,
							height:29.9,
							type:""}];							
	var slide_2_textboxs = [];							
	var slide_2_texts = [];
	var slide_graphics = [];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							textboxs:slide_2_textboxs,
							texts:slide_2_texts,
							graphics:slide_graphics};
							
							
	var slide_3_type = "DESCRIPTION";
	var slide_3_images = [{name:"arrow_C.png",
							x:17,
							y:251, 
							width:255,
							height:47,
							type:""}];							
	var slide_3_textboxs = [];							
	var slide_3_texts = [];
	var slide_graphics = [];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							textboxs:slide_3_textboxs,
							texts:slide_3_texts,
							graphics:slide_graphics};
							
							
	var slide_4_type = "DESCRIPTION";
	var slide_4_images = [{name:"arrow_D.png",
							x:14.4,
							y:176.25, 
							width:259,
							height:129,
							type:""}];							
	var slide_4_textboxs = [];							
	var slide_4_texts = [];
	var slide_graphics = [];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							textboxs:slide_4_textboxs,
							texts:slide_4_texts,
							graphics:slide_graphics};	
							
	
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:common_images,
			buttonObject:buttonObject,
			slideObject:slides};
	
}



