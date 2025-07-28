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
	
	var slide_images = [{name:"boxes.png",
							x:35,
							y:148, 
							width:400, 
							height:105}]					
							
	var slide_texts = [{compId:"ID_title",},		
							{compId:"ID_txt01",
							x:110, 
							y:300, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},								
							{compId:"ID_txt02",
							x:110, 
							y:47, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:225,
							y:47, 
							width:90,
							height:17,
							size:11,								
							textAlign:"center"},
							{compId:"ID_txt04",
							x:338,
							y:47, 
							width:90,
							height:17,
							size:11,							
							textAlign:"center"},
							{compId:"ID_txt06",
							x:358,
							y:300, 
							width:90,
							height:17,
							size:11,							
							textAlign:"center"},
							]


		var slide_graphics=[
							{x:272,/* arrow1 top*/
							y:203,
							length:169,
							thickness:3,
							color:"#F68026",
							rotation:-136,
							type:"arrow",depth:1},
							{x:350,/* arrow2 top*/
							y:197,
							length:150,
							thickness:3,
							color:"#F68026",
							rotation:-127,
							type:"arrow",depth:1},
							{x:374.65,/* arrow3 top*/
							y:212.95,
							length:150,
							thickness:3,
							color:"#F68026",
							rotation:-90,
							type:"arrow",depth:1},
							{x:404.65,/* arrow4 top*/
							y:190.95,
							length:130,
							thickness:3,
							color:"#F68026",
							rotation:-101,
							type:"arrow",depth:1},
							{x:152,/* arrow1 bot*/
							y:238.95,
							length:70,
							thickness:3,
							color:"#F68026",
							rotation:90,
							type:"arrow",depth:1},
							
							{x:404,/* arrow3 bot*/
							y:247.95,
							length:70,
							thickness:3,
							color:"#F68026",
							rotation:90,
							type:"arrow",depth:1},
							
							]
							
	var slide_object = {images:slide_images,
						texts:slide_texts,
						graphics:slide_graphics};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


