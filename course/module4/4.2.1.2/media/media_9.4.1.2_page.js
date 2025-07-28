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
	
	var slide_images = [{name:"9_4_1_2b.jpg",
							x:11.05,
							y:20.5, 
							width:244.6, 
							height:180,	
							type:"STD"},
							
						{name:"9_4_1_2c.jpg",
							x:289.05,
							y:20.5, 
							width:445.5, 
							height:180,	
							type:"STD"},
							
						{name:"9_4_1_2a.jpg",
							x:95,
							y:245.5, 
							width:329, 
							height:116.9,	
							type:"STD"}]
				
							
	var slide_texts = [{compId:"ID_txt01",
							x:23.05, 
							y:225.35-15, 
							width:244.6,
							height:17,
							size:11,
							textAlign:"center"},
															
						{compId:"ID_txt02",
							x:294.05, 
							y:225.35-15, 
							width:177,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt03",
							x:122,
							y:360.35+13, 
							width:240,
							height:17,
							size:11,								
							textAlign:"center"}]
		
	var slide_object = {images:slide_images,
						texts:slide_texts
						};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


