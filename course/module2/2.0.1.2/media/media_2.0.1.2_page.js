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

		
	var slide_images = [{name:"2_0_1_2_B.jpg",
							x:125.9,
							y:205.9, 
							width:335.5, 
							height:230.7,
							type:"STD"},
							
						{name:"2_0_1_2_A.jpg",
							x:5,
							y:10, 
							width:355.95, 
							height:280,
							type:"STD"},
							
						{name:"2_0_1_2_C.jpg",
							x:53.45,
							y:80.15, 
							width:259.9, 
							height:115.65,
							type:"STD"}];
	
							
	var slide_texts = [{compId:"ID_txt01",
							x:165.9-15,
							y:134.9+95+30+40, 
							width:305.5, 
							height:190.7,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt02",
							x:40.15,
							y:48.15-13, 
							width:55.15, 
							height:9.15,
							size:8,
							textAlign:"center"},
							
						{compId:"ID_txt03",
							x:40.15,
							y:208.45-7, 
							width:55.15, 
							height:9.15,
							size:8,
							textAlign:"center"},
							
						{compId:"ID_txt04",
							x:266.6,
							y:208.45-7, 
							width:58, 
							height:10.5,
							size:8,
							textAlign:"center"},
							
						{compId:"ID_txt05",
							x:148.4,
							y:36.65-20, 
							width:58,  
							height:9.15,
							size:8,
							textAlign:"center"},
							
						{compId:"ID_txt06",
							x:266.6,
							y:48.15-13,  
							width:57.25, 
							height:9.15,
							size:8,
							textAlign:"center"},
							
						{compId:"ID_txt07",
							x:126.05+6,
							y:227.7-5, 
							width:102.65, 
							height:9.15,
							size:8,
							textAlign:"center"}];							
	
							
	var slide_object = {texts:slide_texts,
	images:slide_images,						
						};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}