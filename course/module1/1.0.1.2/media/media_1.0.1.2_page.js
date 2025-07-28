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

		
	var slide_images = [{name:"1_0_1_2_A.jpg",
							x:105.9,
							y:179.9, 
							width:360.5, 
							height:230.7,
							type:"STD"},
							
						{name:"1_0_1_2.jpg",
							x:5,
							y:10, 
							width:295.55, 
							height:205.45,
							type:"STD"}];
	
							
	var slide_texts = [{compId:"ID_txt01",
							x:165.9-25,
							y:134.9+95, 
							width:235.5, 
							height:212.7,
							size:11,
							textAlign:"left"}];							
	
							
	var slide_object = {texts:slide_texts,
	images:slide_images,						
						};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


