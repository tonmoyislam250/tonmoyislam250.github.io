//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"1_4_1_4.png",
							x:5,
							y:25, 
							width:460, 
							height:380,
							type:""}];
							
	var slide_texts = [{compId:"ID_title_01",
							 x:45-30+11,
							 y:41-10+5,
							 width:445,
							 height:17,
							 size:11,
							 textAlign:"left"},
							 
						 {compId:"ID_body01",
							 x:22,
							 y:66,
							 width:445,
							 size:11,
							 textAlign:"left"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
