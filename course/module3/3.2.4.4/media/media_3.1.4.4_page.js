//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"3_1_4_4.jpg",
							x:60,
							y:72.3, 
							width:340, 
							height:268.05,
							type:"none"}];
							
	var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:67,
							y:51.85, 
							width:149.95,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:67,
							y:80.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:67,
							y:118.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:67,
							y:157.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt05",
							x:67,
							y:197.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt06",
							x:67,
							y:235.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt07",
							x:67,
							y:274.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt08",
							x:67,
							y:314.8, 
							width:149.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt14",
							x:84,
							y:361.85, 
							width:317.8,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt09",
							x:250,
							y:51.85, 
							width:149.95,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt10",
							x:250+5,
							y:119.3, 
							width:150.95,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt11",
							x:250+5,
							y:199.8, 
							width:150.95,
							height:17,
							size:11,
							textAlign:"center"},
							
							{compId:"ID_txt12",
							x:250+5,
							y:237.8, 
							width:150.95,
							height:17,
							size:11,
							textAlign:"center"},
							
							{compId:"ID_txt13",
							x:250+5,
							y:294.8, 
							width:150.95,
							height:17,
							size:11,
							textAlign:"center"},
							
							
							
							];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);