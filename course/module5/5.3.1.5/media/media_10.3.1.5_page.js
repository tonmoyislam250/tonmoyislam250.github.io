loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");
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
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"10_3_1_5_A.png",
							x:67.15,
							y:118, 
							width:308,
							height:38,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:62.85,
							y:103, 
							width:130,
							height:17,
							size:11,
							expand:"up",
							textAlign:"center"},
							{compId:"ID_s1_txt02",
							x:62.85+229,
							y:103, 
							width:130,
							height:17,
							size:11,
							expand:"up",
							textAlign:"center"},
							{compId:"ID_s1_txt03",
							x:13.35,
							y:182.85, 
							width:190,
							height:17,
							size:11,
							expand:"down",
							textAlign:"left"},
							{compId:"ID_s1_txt04",
							x:237.35,
							y:182.85, 
							width:180,
							height:17,
							size:11,
							expand:"down",
							textAlign:"left"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	var slide_2_type = "INTERACTIVEANIM";
			
			var slide_2_texts = {compId:"ID_s2_title",
			x:32,
			y:2,
			width:430,
			height:17,
			size:14,
			textAlign:"center"};
			
			var slide_2_object = {templateType:slide_2_type,
			x:0,
			y:0,
			animId:0,
			texts:slide_2_texts};	
	
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}