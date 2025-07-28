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
	var commonImages = [{name:"9.4.3.3.png",
							x:26.9,
							y:25.75, 
							width:126.25,
							height:198.95,
							type:""},
							{name:"box.png",
							x:2,
							y:255, 
							width:414,
							height:129,
							type:"STD"},
							];
	
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"9.4.3.3A.png",
							x:205.35,
							y:60.8, 
							width:223.7,
							height:82.35,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:95.2,
							y:211.15, 
							width:100,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left+right"},
							{compId:"ID_s1_txt02",
							x:95.2,
							y:178.95, 
							width:200,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left+right"},
							{compId:"ID_s1_txt03",
							x:95.2,
							y:146.8, 
							width:111,
							height:17,
							size:11,
							textAlign:"center",
								expand:"left+right"},
							{compId:"ID_s1_txt04",
							x:230,
							y:40.55, 
							width:190.1,
							height:17,
							size:11,							
							textAlign:"left"},
							{compId:"ID_s1_txt05",
							x:5,
							y:260, 
							width:410,
							height:17,
							size:11,							
							textAlign:"left"},
							];	
		
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"9.4.3.3B.png",
							x:205.35,
							y:60.8, 
							width:223.7,
							height:82.35,
							type:""}]
														
	var slide_2_texts = [{compId:"ID_s2_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:95.2,
							y:211.15, 
							width:66,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left+right"},
							{compId:"ID_s2_txt02",
							x:95.2,
							y:178.95, 
							width:190,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left+right"},
							{compId:"ID_s2_txt03",
							x:95.2,
							y:146.8, 
							width:151,
							height:17,
							size:11,
							textAlign:"center",
								expand:"left+right"},
							{compId:"ID_s2_txt04",
							x:250,
							y:43.55, 
							width:154.1,
							height:17,
							size:11,							
							textAlign:"left"},
							{compId:"ID_s2_txt05",
							x:5,
							y:260, 
							width:410,
							height:17,
							size:11,							
							textAlign:"left"},
							];	
		
		
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};

			
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
		images:commonImages,
			slideObject:slides};
	
}
