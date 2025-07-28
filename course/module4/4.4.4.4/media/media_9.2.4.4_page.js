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
						overTextStyle:'#FFFFFF',
						cornorRadius:0,
						selected:0};
	var buttons = [{compId:"ID_txt08",
						x:313,
						y:166,
						width:75,
						height:17,
						size:11,
						color:'#FFFFFF',
						textAlign:"center"},
				   {compId:"ID_txt05",
						x:309,
						y:159,
						width:78,
						height:17,
						size:11,
						color:'#FFFFFF',
						textAlign:"center"},
					{compId:"ID_txt06",
						x:388,
						y:159,
						width:70,
						height:17,
						size:11,
						color:'#FFFFFF',
						textAlign:"center"}];
						
	var buttonObject = {style:buttonStyle,
						buttons:buttons};
						
	var commonTexts = [ {compId:"ID_title",
							x:10,
							y:2,
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
					    {compId:"ID_inst",
							x:20,
							y:380.8, 
							width:460,
							height:17,
							size:11,
							textAlign:"left"},
						{compId:"ID_txt01",
							x:20,
							y:96.85,
							width:73,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt02",
							x:94,
							y:96.85,
							width:75,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt03",
							x:170,
							y:96.85,
							width:71,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt04",
							x:242,
							y:96.85,
							width:74,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt07",
							x:318,
							y:96.85,
							width:152,
							height:55,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt09",/* Dummy text*/
							x:17,
							y:94,
							width:450,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt10",/* Dummy text*/
							x:317,
							y:160,
							width:152,
							height:17,
							size:11,
							textAlign:"center"}];
							
	var common_images = [];
	
	var slide_1_type = "DESCRIPTION";
	
	var slide_1_images = [{name:"textbox.jpg",
							x:10,
							y:230, 
							width:470,
							height:150,
							type:""}];
													
	var slide_1_textboxs = [];	
							
	var slide_1_texts = [{compId:"ID_titleTxt01",
							x:27-6,
							y:238, 
							width:460,
							height:25,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_bodyTxt01",
							 x:30-6,
							 y:265, 
							 width:440,
							 height:150,
							 size:11,
							 textAlign:"left"}];
							 
	var slide_graphics = [{name:"textbox.jpg",
							x:5,
							y:220, 
							width:470,
							height:125,
							type:""}];	
													
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							textboxs:slide_1_textboxs,
							texts:slide_1_texts,
							graphics:slide_graphics};
							
	var slide_2_type = "DESCRIPTION";
	var slide_2_images = [{name:"textbox.jpg",
							x:10,
							y:230, 
							width:470,
							height:125,
							type:""}];
														
	var slide_2_textboxs = [];	
							
	var slide_2_texts = [{compId:"ID_titleTxt02",
							x:27-6,
							y:238, 
							width:460,
							height:25,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_bodyTxt02",
							  x:30-6,
							  y:265, 
							  width:430,
							  height:150,
							  size:11,
							  textAlign:"left"}];
		
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							textboxs:slide_2_textboxs,
							texts:slide_2_texts,
							graphics:slide_graphics};
	
	var slides = ['',slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:common_images,
			buttonObject:buttonObject,
			slideObject:slides,graphics:slide_graphics};
	
}



// code below is needed for html5 content from Flash CS6
//loadScript("../../../common/scripts/createJS_bundle.min.js", null);
//loadScript("media_2.2.1.2_graphic.js", null);
