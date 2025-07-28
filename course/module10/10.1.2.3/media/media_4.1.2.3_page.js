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
		
	var slide_images = [{name:"4_1_2_3.png",
							x:9.65,
							y:42.25,
							width:396.7,
							height:325.45,
							type:""}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:20,
							y:2, 
							width:460.2,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:327.95,
							y:66, 
							width:87.25,
							height:74.25,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:23.5,
							y:169, 
							width:74.25,
							height:74.25,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:158.2,
							y:280.95, 
							width:74.25,
							height:74.25,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:300.7,
							y:275.75, 
							width:74.25,
							height:74.25,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt05",
							x:5,
							y:378.35, 
							width:460.1,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt06",
							x:220.65,
							y:220.25, 
							width:72.4,
							height:15.8,
							size:11,
							textAlign:"left"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
