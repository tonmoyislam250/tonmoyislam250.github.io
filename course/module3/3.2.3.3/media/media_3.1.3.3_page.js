//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"3_1_3_3.jpg",
							x:35,
							y:60, 
							width:380, 
							height:270,
							type:""}];
							
	var slide_texts = [{compId:"ID_title",
							 x:18,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
							 
						{compId:"ID_title_01",
							 x:66-2,
							 y:83-5,
							 width:290,
							 height:17,
							 size:11,
							 textAlign:"left"},
							 
						 {compId:"ID_body01",
							 x:60,
							 y:115-8,
							 width:300,
							 height:200,
							 size:11,
							 textAlign:"left"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
