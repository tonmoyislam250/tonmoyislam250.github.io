//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"4_2_2_2_A.png",
							x:5.5,
							y:56.15, 
							width:419, 
							height:138,
							type:""},
							{name:"4_2_2_2_B.png",
							x:25.5,
							y:183.9, 
							width:158.9, 
							height:153.85,
							type:""}
							];
							
	var slide_texts = [{compId:"ID_title_txt",
							 x:23.5,
							 y:62,
							 width:380.65,
							 height:104.65,
							 size:11,
							 textAlign:"left"},
							 {compId:"ID_body01",
							x:19.5,
							 y:86.15,
							 width:380.65,
							 height:104.65,
							 size:11,
							 textAlign:"left"},
						 {compId:"ID_txt01",
							 x:2,
							 y:1.4,
							 width:470.05,
							 height:17,
							 size:14,
							 textAlign:"center"},
							 {compId:"ID_txt02",
							 x:34,
							 y:190.9,
							 width:157,
							 height:17,
							 size:12,
							 textAlign:"center"},
							 {compId:"ID_txt03",
							 x:34,
							 y:221.95,
							 width:157,
							 height:17,
							 size:12,
							 textAlign:"center"},
							 {compId:"ID_txt04",
							 x:34,
							 y:252.1,
							 width:157,
							 height:17,
							 size:12,
							 textAlign:"center"},
							 {compId:"ID_txt05",
							 x:34,
							 y:282.7,
							 width:157,
							 height:17,
							 size:12,
							 textAlign:"center"},
							 {compId:"ID_txt06",
							  x:34,
							 y:313.75,
							 width:157,
							 height:17,
							 size:12,
							 textAlign:"center"},
							 {compId:"ID_txt07",
							 x:205.05,
							 y:218.75,
							 width:220,
							 height:17,
							 size:12,
							 textAlign:"left"},
							 {compId:"ID_txt08",
							 x:205.05,
							 y:249.35,
							 width:236,
							 height:17,
							 size:12,
							 textAlign:"left"},
							 {compId:"ID_txt09",
							 x:205.05,
							 y:279.95,
							 width:257,
							 height:17,
							 size:12,
							 textAlign:"left"},
							 {compId:"ID_txt10",
							 x:205.05,
							 y:310.55,
							 width:270,
							 height:17,
							 size:12,
							 textAlign:"left"}
							 ];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
