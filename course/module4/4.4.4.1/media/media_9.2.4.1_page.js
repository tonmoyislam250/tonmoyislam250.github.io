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
							
	var commonImages = [];
							
	var graphics_slide = [];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"9_2_4_1_A.png",
							x:10.75,
							y:84.85, 
							width:426.2,
							height:188.8,
							type:""}];								
	var slide_1_texts = [	{compId:"ID_s1_title",
							x:11,
							y:2, 
							width:430,
							height:17,
							size:14,
							expand:"down",
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:39.25+7,
							y:30.85, 
							width:373.05,
							height:17,
							size:11,
							expand:"down",
							textAlign:"center",},
							{compId:"ID_s1_txt02",
							x:4.2,
							y:382.35, 
							width:432.05,
							height:17,
							size:11,
							expand:"up",
							textAlign:"left",},
							{compId:"ID_s1_txt03",
							x:83.75+18,
							y:179.85, 
							width:63.15,
							height:17,
							size:11,
							color:"white",
							expand:"up",
							textAlign:"center",},
							{compId:"ID_s1_txt04",
							x:299.2+13,
							y:179.85, 
							width:63.15,
							height:17,
							size:11,
							color:"white",
							expand:"up",
							textAlign:"center",}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"9_2_4_1_B.png",
							x:1,
							y:114.85, 
							width:433.85,
							height:194,
							type:""}];								
	var slide_2_texts = [	{compId:"ID_s2_title",
							x:11,
							y:2, 
							width:430,
							height:17,
							size:14,
							expand:"down",
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:74.4+9,
							y:76.85, 
							width:358.85,
							height:17,
							size:11,
							expand:"down",
							textAlign:"center",},
							{compId:"ID_s2_txt02",
							x:4.2,
							y:382.35, 
							width:432.05,
							height:17,
							size:11,
							expand:"up",
							textAlign:"left",},
							{compId:"ID_s2_txt03",
							x:101,
							y:184.85, 
							width:63.15,
							height:17,
							size:11,
							color:"white",
							expand:"up+down",
							textAlign:"center",},
							{compId:"ID_s2_txt04",
							x:346.95+25,
							y:181.35, 
							width:63.15,
							height:17,
							size:11,
							color:"white",
							expand:"up+down",
							textAlign:"center",},
							{compId:"ID_s2_txt05",
							x:261.2+21,
							y:221.85, 
							width:63.15,
							height:17,
							size:11,
							color:"white",
							expand:"up+down",
							textAlign:"center",}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			graphics:graphics_slide,
			slideObject:slides};
	
}
