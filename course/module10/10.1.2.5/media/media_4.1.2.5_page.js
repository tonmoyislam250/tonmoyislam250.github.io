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
	var buttons = [{compId:"ID_btn01",
						x:130,
						y:353,
						width:105.95,
						height:21,
						size:12,
						textAlign:"center"},
					{compId:"ID_btn02",
						x:244.85,
						y:353,
						width:99.15,
						height:21,
						size:12,
						textAlign:"center"}];
	var buttonObject = {style:buttonStyle,
						buttons:buttons};
	var commonTexts = [{compId:"ID_inst",
							x:14,
							y:386, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
	var common_images = [];
	
	var slide_1_type = "DESCRIPTION";
	var slide_1_images = [{name:"4_1_2_5_A.png",
							x:34.25,
							y:51.75, 
							width:412.2,
							height:189.4,
							type:""}];							
	var slide_1_textboxs = [];							
	var slide_1_texts = [   {compId:"ID_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:199.6,
							y:129.3, 
							width:84.1,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:28.25,
							y:244.75, 
							width:104,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:23.25,
							y:267.35, 
							width:190,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt04",
							x:404.8,
							y:244.75, 
							width:50,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:279.8,
							y:267.35, 
							width:190,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt06",
							x:87.75,
							y:36, 
							width:300.2,
							height:17,
							size:12,
							textAlign:"right"},
							{compId:"ID_txt07",
							x:140.65,
							y:82.25, 
							width:129.6,
							height:17,
							size:12,
							textAlign:"right"}];
	var slide_graphics = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							textboxs:slide_1_textboxs,
							texts:slide_1_texts,
							graphics:slide_graphics};
							
	var slide_2_type = "DESCRIPTION";
	var slide_2_images = [{name:"4_1_2_5_B.png",
							x:34.25,
							y:51.75,
							width:412.2,
							height:189.4,
							type:""}];							
	var slide_2_textboxs = [];							
	var slide_2_texts = [{compId:"ID_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:199.6,
							y:129.3, 
							width:84.1,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:28.25,
							y:244.75, 
							width:104,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:23.25,
							y:267.35, 
							width:190,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt04",
							x:404.8,
							y:244.75, 
							width:50,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:279.8,
							y:267.35,
							width:190,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt08",
							x:174.15,
							y:189.1, 
							width:129.6,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt09",
							x:120.1+31,
							y:244.4-17, 
							width:224.85,
							height:17,
							size:12,
							textAlign:"center"}];
	var slide_graphics = [];			
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							textboxs:slide_2_textboxs,
							texts:slide_2_texts,
							graphics:slide_graphics};
							
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:common_images,
			buttonObject:buttonObject,
			slideObject:slides};
	
}



// code below is needed for html5 content from Flash CS6
//loadScript("../../../common/scripts/createJS_bundle.min.js", null);
//loadScript("media_2.2.1.2_graphic.js", null);
