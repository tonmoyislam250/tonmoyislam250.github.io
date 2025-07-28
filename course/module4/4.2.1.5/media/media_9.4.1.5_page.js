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
	
	var slide_images = [{name:"9.4.1.5.png",
							x:0.25,
							y:32, 
							width:467.2, 
							height:133.3,	
							type:""},
							{name:"9_4_1_5.jpg",
							x:34,
							y:232.25, 
							width:400, 
							height:139.15,	
							type:""}]
					
							
	var slide_texts = [{compId:"ID_title",},
		
							{compId:"ID_txt01",
							x:33+141, 
							y:70-46, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},								
							{compId:"ID_txt02",
							x:140+48, 
							y:70-15, 
							width:142,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:282.35-45,
							y:97-11, 
							width:93,
							height:17,
							size:11,								
							textAlign:"center"},
							{compId:"ID_txt04",
							x:268,
							y:150, 
							width:110,
							height:17,
							size:11,							
							textAlign:"center"},
							{compId:"ID_txt05",
							x:20+48,
							y:213.6, 
							width:361,
							height:17,
							size:11,							
							textAlign:"center"},
							{compId:"ID_txt05a",
							x:105,
							y:376, 
							width:120,
							height:17,
							size:11,							
							textAlign:"left"},
							{compId:"ID_txt05b",
							x:230.3,
							y:376, 
							width:120,
							height:17,
							size:11,							
							textAlign:"left"},
							{compId:"ID_txt05c",
							x:360.55,
							y:376, 
							width:120,
							height:17,
							size:11,							
							textAlign:"left"}]
		var slide_graphics = [{	x:32.05, /*shapes for Image1 */
							y:208.3, 
							width:404,
							height:185,
							color:"#E9E7E8",					
							corner:5}]
							
	var slide_object = {images:slide_images,
						texts:slide_texts,
						graphics:slide_graphics};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


