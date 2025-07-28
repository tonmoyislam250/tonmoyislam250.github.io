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
						x:5,
						y:365.9,
						width:146,
						height:21,
						size:12,
						textAlign:"center"},
					{compId:"ID_btn02",
						x:162,
						y:365.9,
						width:119,
						height:21,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn03",
						x:294,
						y:365.9,
						width:162.95,
						height:21,
						size:12,
						textAlign:"center"}
						];
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
	var slide_1_images = [{name:"1_3_1_1_A.png",
							x:5,
							y:111.05, 
							width:455.1,
							height:191.4,
							type:""}];							
	var slide_1_textboxs = [];							
	var slide_1_texts = [{compId:"ID_s1_txt01",
							x:16.5,
							y:85.85, 
							width:136.5,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s1_txt02",
							x:329.35,
							y:85.85, 
							width:136.5,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s1_txt03",
							x:9.85,
							y:279.5, 
							width:116.5,
							height:17,
							size:12,
							textAlign:"right"},
							{compId:"ID_s1_txt04",
							x:344.85,
							y:275.5, 
							width:123.5,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s1_txt05",
							x:182.25,
							y:269.35, 
							width:65.55,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s1_txt06",
							x:237.25+4,
							y:269.35, 
							width:60,
							height:17,
							size:12,
							textAlign:"right"},
							{compId:"ID_s1_txt07",
							x:198,
							y:165.8, 
							width:90.5,
							height:17,
							size:12,
							textAlign:"center"}];
	var slide_graphics = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							textboxs:slide_1_textboxs,
							texts:slide_1_texts,
							graphics:slide_graphics};
							
	var slide_2_type = "DESCRIPTION";
	var slide_2_images = [{name:"1_3_1_1_B.png",
							x:5,
							y:105.05,
							width:455.1,
							height:197,
							type:""}];							
	var slide_2_textboxs = [];							
	var slide_2_texts = [{compId:"ID_s2_txt01",
							x:8.85,
							y:279.5, 
							width:117.5,
							height:17,
							size:12,
							textAlign:"right"},
							{compId:"ID_s2_txt02",
							x:344.85,
							y:275.5, 
							width:126.5,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s2_txt03",
							x:148.8+28,
							y:252, 
							width:40,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s2_txt04",
							x:238.2+5,
							y:264, 
							width:59,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s2_txt05",
							x:225.2,
							y:262, 
							width:59,
							height:17,
							size:12,
							textAlign:"right"},
							{compId:"ID_s2_txt06",
							x:198,
							y:165.8, 
							width:92.5,
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
							
	var slide_3_type = "DESCRIPTION";
	var slide_3_images = [{name:"1_3_1_1_C.png",
							x:5,
							y:23, 
							width:455.1,
							height:321.7,
							type:""}];							
	var slide_3_textboxs = [];							
	var slide_3_texts = [{compId:"ID_s3_txt01",
							x:12.85,
							y:279.5, 
							width:118.5,
							height:17,
							size:12,
							textAlign:"right"},
							{compId:"ID_s3_txt02",
							x:344.85,
							y:275.5, 
							width:124.5,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s3_txt03",
							x:302.5+1.5,
							y:59+8, 
							width:120.45,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s3_txt04",
							x:304.6-2,
							y:14.35, 
							width:126.5,
							height:25.5,
							size:12,
							textAlign:"center"},
							{compId:"ID_s3_txt05",
							x:203-6,
							y:165.8, 
							width:92.5,
							height:17,
							size:12,
							textAlign:"center"},
							/*{compId:"ID_s3_txt06",
							x:242.65,
							y:305.55, 
							width:65,
							height:17,
							size:12,
							textAlign:"center"},*/
							{compId:"ID_s3_txt07",
							x:105,
							y:54-10, 
							width:61,
							height:15.95,
							size:12,
							textAlign:"right"}
							];
	var slide_graphics = [];			
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							textboxs:slide_3_textboxs,
							texts:slide_3_texts,
							graphics:slide_graphics};
	
	var slides = [slide_1_object,slide_2_object,slide_3_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:common_images,
			buttonObject:buttonObject,
			slideObject:slides};
	
}



// code below is needed for html5 content from Flash CS6
//loadScript("../../../common/scripts/createJS_bundle.min.js", null);
//loadScript("media_2.2.1.2_graphic.js", null);
