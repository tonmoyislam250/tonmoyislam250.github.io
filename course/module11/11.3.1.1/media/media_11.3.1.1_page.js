
loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
	var commonTexts = [];
	
	var slide_type = "IMAGE";
	var slide_images = [{name:"11_3_1_1.png",
							x:3,
							y:38, 
							width:435.80,
							height:324,
							type:""},
							{name:"11_3_1_1.jpg",
							x:173,
							y:38, 
							width:264.05,
							height:324.70,
							type:""}];								
	var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:10+2,
							y:57.45+8, 
							width:145,
							height:17,
							size:11,
		                    textAlign:"left"},
							{compId:"ID_txt02",
							x:10,
							y:293.6, 
							width:145,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:35,
							y:190, 
							width:117,
							height:17,
							size:11,
							textAlign:"left",
							color:"#ffffff"}
							];							
	var slide_object = {templateType:slide_type,
							x:0,
							y:0,
							images:slide_images,
							texts:slide_texts};
							
	return {templateType:template_type,
			slideObject:slide_object};
	
}