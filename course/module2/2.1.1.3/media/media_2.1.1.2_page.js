//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
	
	var commonTexts = [];
		
	var slide_images = [{name:"2_1_1_2.jpg",
							x:21.5,
							y:40.5, 
							width:426, 
							height:341,
							type:"STD"}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:13,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
