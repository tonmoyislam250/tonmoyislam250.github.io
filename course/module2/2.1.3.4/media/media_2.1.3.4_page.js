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
						x:45,
						y:330,
						width:170,
						height:23.75,
						size:12,
						textAlign:"center"},
					{compId:"ID_btn02",
						x:255,
						y:330,
						width:170,
						height:23.75,
						size:12,
						textAlign:"center"}];
						
	var buttonObject = {style:buttonStyle,
						buttons:buttons};
						
	var commonTexts = [{compId:"ID_text01",
							x:198.35,
							y:129, 
							width:155,
							height:23,
							size:12,
							textAlign:"left"},
							
						{compId:"ID_text02",
							x:198.35,
							y:167, 
							width:170,
							height:23,
							size:12,
							textAlign:"left"},
							
						{compId:"ID_text03",
							x:198.35,
							y:205, 
							width:155,
							height:23,
							size:12,
							textAlign:"left"}];
	var common_images = [{name:"2.1.3.4.png",
							x:10,
							y:20, 
							width:460,
							height:248,
							type:""},
							{name:"arrow.png",
							x:90,
							y:136, 
							width:211.1,
							height:12.6,
							type:""},
							{name:"arrow.png",
							x:90,
							y:181, 
							width:211.1,
							height:12.6,
							type:""},
							{name:"arrow.png",
							x:90,
							y:211.5, 
							width:211.1,
							height:12.6,
							type:""}];
	
	var slide_1_type = "DESCRIPTION";
	var slide_1_images = [];							
	var slide_1_textboxs = [];							
	var slide_1_texts = [{compId:"ID_s1_text01",
							x:25,
							y:271, 
							width:410,
							height:25,
							size:12,
							textAlign:"center"},
							{compId:"staticTxt",
			 				 bodyText:"Router con0 is now available.<br/><br/>Press Return to get started.<br/><br/> User Access Verification<br/>Password:<br/>Router&gt<br/>Router&gt<span class='textColor'>enable</span><br/>Password:<br/>Router#<br/>Router#<span class='textColor'>disable</span><br/>Router&gt<br/>Router&gt<span class='textColor'>exit</span>",
							 x:45,
							 y:44,
							 width:390.45,
							 height:185.75,
							 size:12,
							 textAlign:"left"}];
	var slide_graphics = [{x:20,
							y:267, 
							width:435,
							height:25,
							color:"#e0d5e6",
							corner:5}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							textboxs:slide_1_textboxs,
							texts:slide_1_texts,
							graphics:slide_graphics};
							
	var slide_2_type = "DESCRIPTION";
	var slide_2_images = [];							
	var slide_2_textboxs = [];							
	var slide_2_texts = [{compId:"ID_s2_text01",
							x:25,
							y:271, 
							width:410,
							height:25,
							size:12,
							textAlign:"center"},
							{compId:"staticTxt",
			 				 bodyText:"Switch con0 is now available.<br/><br/>Press Return to get started.<br/><br/> User Access Verification<br/>Password:<br/>Switch&gt<br/>Switch&gt<span class='textColor'>enable</span><br/>Password:<br/>Switch#<br/>Switch#<span class='textColor'>disable</span><br/>Switch&gt<br/>Switch&gt<span class='textColor'>exit</span>",
							 x:45,
							 y:44,
							 width:390.45,
							 height:185.75,
							 size:12,
							 textAlign:"left"}];
	var slide_graphics = [{x:20,
							y:267, 
							width:435,
							height:25,
							color:"#e0d5e6",
							corner:5}];			
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
