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
							
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"8_1_4_2_A.png",
							x:96.15,
							y:76.85, 
							width:250,
							height:250,
							type:"none"}];		
	
	var slide_1_texts = [{compId:"ID_s1_title",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
		
						{compId:"ID_s1_txt01",
							x:188.15,
							y:110.85, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
		                    textAlign:"left"},

							{compId:"ID_s1_txt02",
							x:254.8,
							y:110.85, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},

							{compId:"ID_s1_txt03",
							x:298.15,
							y:163.65, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},

							{compId:"ID_s1_txt04",
							x:298.15,
							y:214.7, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},

							{compId:"ID_s1_txt05",
							x:252.3,
							y:271.4, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},
							
							{compId:"ID_s1_txt06",
							x:188.15,
							y:271.4, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},

							{compId:"ID_s1_txt07",
							x:147.75,
							y:214.7, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},

							{compId:"ID_s1_txt08",
							x:147.75,
							y:163.65, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"}
							];		

    var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
    var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"8_1_4_2_B.png",
							x:96.15,
							y:64, 
							width:250,
							height:264.85,
							type:"none"}];		
	
	var slide_2_texts = [{compId:"ID_s2_title",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
		
						{compId:"ID_s2_caption",
							x:10.35,
							y:365.85, 
							width:422.95,
							height:17,
							size:11,
		                    textAlign:"left"},

							{compId:"ID_s2_txt01",
							x:254.8,
							y:110.85, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},

							{compId:"ID_s2_txt02",
							x:298.15,
							y:163.65, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},

							{compId:"ID_s2_txt03",
							x:298.15,
							y:214.7,
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},
							
							{compId:"ID_s2_txt04",
							x:252.3,
							y:271.4, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},

							{compId:"ID_s2_txt05",
							x:188.15,
							y:271.4, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},

							{compId:"ID_s2_txt06",
							x:147.75,
							y:214.7, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},
							
							{compId:"ID_s2_txt07",
							x:147.75,
							y:163.65, 
							width:60.9,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},

							{compId:"ID_s2_txt08",
							x:67,
							y:39.5, 
							width:212,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"}];	
		var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
