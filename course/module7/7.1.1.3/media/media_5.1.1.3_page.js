//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";

		
	var slide_images = [{name:"5_1_1_3.png",
							x:126,
							y:82.5, 
							width:238.6, 
							height:301.45,
							type:""},
						{name:"5_1_1_3B.jpg",
							x:146.55,
							y:38.6, 
							width:40.35, 
							height:67.45,
							type:"STD"},
						{name:"5_1_1_3A.jpg",
							x:200.65,
							y:26.6, 
							width:64.1, 
							height:48.1,
							type:"STD"},
						{name:"5_1_1_3A.jpg",
							x:278.75,
							y:40.65, 
							width:64.1, 
							height:48.1,
							type:"STD"}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},

						{compId:"ID_txt01",
							x:20.9-17,
							y:114.3,
							width:143.5,
							height:55.5,
							size:10,
							textAlign:"left"},

						{compId:"ID_txt02",
							x:21.9,
							y:95.75,
							width:126.5,
							height:17,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt03",
							x:40.3,
							y:43,
							width:104,
							height:31,
							size:11,
							textAlign:"right"},

						{compId:"ID_txt04",
							x:284,
							y:24,
							width:134,
							height:14,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt05",
							x:185.85,
							y:13.4,
							width:140.5,
							height:16.05,
							size:11,
							textAlign:"left"},

					{compId:"ID_txt06",
							x:358.85,
							y:100,
							width:104,
							height:17,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt07",
							x:362.85,
							y:129,
							width:104,
							height:17,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt09",
							x:5.35,
							y:182.45,
							width:185,
							height:100,
							size:10,
							textAlign:"left"},

						{compId:"ID_txt10",
							x:305.95,
							y:270.5, 
							width:160,
							height:38,
							size:10,
							textAlign:"left"},

						{compId:"ID_txt11",
							x:13,
							y:355.3, 
							width:380.2,
							height:37.85,
							size:10,
							textAlign:"left"}]

								
			var slide_graphics = []
								
						
	
							
	var slide_object = {images:slide_images,						
						texts:slide_texts,graphics:slide_graphics};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


