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

		
	var slide_images = [{name:"9_0_1_2_B.jpg",
							x:105.9,
							y:219.9, 
							width:350.5, 
							height:200.7,
							type:"STD"},
							
						{name:"9_0_1_2_A.png",
							x:5,
							y:10, 
							width:355.95, 
							height:250,
							type:"STD"}];
	
							
	var slide_texts = [{compId:"ID_txt01",
							x:165.9-30,
							y:134.9+95+30+20, 
							width:305.5, 
							height:190.7,
							size:11,
							textAlign:"left"}];							
	
							
	var slide_object = {texts:slide_texts,
	images:slide_images,						
						};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}