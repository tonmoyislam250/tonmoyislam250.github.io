function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";		
	var slide_images = [{name:"PT_image.jpg",
							x:6.05,
							y:106, 
							width:457.95, 
							height:250,
							type:"STD"},
						{name:"../../../common/images/PT.png",
							x:18,
							y:22.9, 
							width:59, 
							height:75,							
							type:""}];							
	var slide_texts = [{compId:"ID_title",
							x:112.95,
							y:57, 
							width:376, 
							height:17,
							size:14,
							textAlign:"left",
							expand:"up+down"}]	
														
	var slide_object = {images:slide_images,						
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

