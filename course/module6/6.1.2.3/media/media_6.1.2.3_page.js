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
		
	var slide_images = [{name:"6_1_2_3.png",
							x:5,
							y:33,
							width:461.3,
							height:243.7,
							type:""}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:25,
							y:2, 
							width:459.95,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:64,
							y:130.4, 
							width:71.45,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:64,
							y:177.5, 
							width:71.45,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:64,
							y:224.45, 
							width:71.45,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:346.3,
							y:130.25, 
							width:71.45,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt05",
							x:346.3,
							y:176.35, 
							width:71.45,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt06",
							x:280.3,
							y:257.95, 
							width:185.45,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt07",
							x:61.3,
							y:256.95, 
							width:176.7,
							height:17,
							size:11,
							expand:"down",
							textAlign:"center"},
							{compId:"ID_txt08",
							x:15,
							y:347.3, 
							width:454,
							height:17,
							size:11,
							expand:"down",
							textAlign:"left"}
							];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
