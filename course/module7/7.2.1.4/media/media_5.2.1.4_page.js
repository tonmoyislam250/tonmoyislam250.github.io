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
	
	var slide_images = [{name:"5_2_1_4_A.png",
							x:15,
							y:28, 
							width:453.90, 
							height:221.30,
							scrollable:"YES",
							divId:"commonImageText",
							type:""},
						{name:"box.jpg",
							x:15,
							y:260, 
							width:453.90, 
							height:133,
							type:""}];
					
							
	var slide_texts = [{compId:"ID_title",
							x:20,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_title_txt",
							x:32,
							y:257+10, 
							width:436,
							height:17,
							size:11,
							color:"#FFFFFF",
							textAlign:"left"},
							
						{compId:"ID_body_txt",
							x:22+10,
							y:283+12, 
							width:460,
							height:17,
							size:11,
							color:"#000000",
							textAlign:"left"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


