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

		
	var slide_images = [{name:"7_4_1_1_A.png",
							x:165.9-61,
							y:200.9, 
							width:355.5, 
							height:227.1,
							type:""},
							
						{name:"7_4_1_1.jpg",
							x:7.7,
							y:6.55, 
							width:293.05, 
							height:253.4,
							type:"STD"}];
	
							
	var slide_texts = [{compId:"ID_footer",
							x:165.9-25,
							y:134.9+140, 
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