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
		
	var slide_images = [{name:"4_2_1_5.jpg",
							x:60,
							y:80,
							width:359.25,
							height:274.45,
							type:""}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:5,
							y:5, 
							width:478.95,
							height:17,
							size:14,
							textAlign:"center"},
						{compId:"ID_caption01",
							x:2,
							y:381.45, 
							width:478.95,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt01",
							x:-8,
							y:195, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:67,
							y:235, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:19,
							y:272, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt04",
							x:385,
							y:181.6, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:385.95,
							y:137, 
							width:85,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt06",
							x:90,
							y:295, 
							width:110,
							height:17,
							size:11,
							textAlign:"right"},
							{compId:"ID_txt07",
							x:93,
							y:326.8, 
							width:104,
							height:17,
							size:11,
							textAlign:"right"},
							{compId:"ID_txt08",
							x:155.95,
							y:129.45, 
							width:134,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt09",
							x:45.05,
							y:48, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt10",
							x:44.95,
							y:89, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt11",
							x:71.95,
							y:125, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt12",
							x:117,
							y:87.8, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_bubble1",
							x:272.25,
							y:68.45, 
							width:214.05,
							height:80,
							size:11,
							textAlign:"left"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
