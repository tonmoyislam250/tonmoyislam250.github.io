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

		
	var slide_images = [{name:"1_1_1_7A.jpg",
							x:9,
							y:33, 
							width:150.25, 
							height:118,
							type:"STD"},
		
	
						{name:"1_1_1_7B.jpg",
							x:180.95,
							y:33, 
							width:124, 
							height:124,
							type:"STD"},
						
						{name:"1_1_1_7C.jpg",
							x:344.75,
							y:33, 
							width:108.1, 
							height:102,
							type:"STD"},
						
						
						{name:"1_1_1_7D.jpg",
							x:4.05,
							y:189, 
							width:158.05, 
							height:105.55,
							type:"STD"},
						
						
						{name:"1_1_1_7E.jpg",
							x:189.3,
							y:189, 
							width:168.65, 
							height:111.35,
							type:"STD"},
						
						
						{name:"1_1_1_7F.jpg",
							x:379.25,
							y:189, 
							width:72, 
							height:179,
							type:"STD"}];
	
							
	var slide_texts = [{compId:"ID_txt01",
							x:15,
							y:15, 
							width:150.25, 
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt02",
							x:190,
							y:15,
							width:124,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt03",
							x:355,
							y:15,
							width:110,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt04",
							x:14,
							y:171,
							width:158,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt05",
							x:199.3,
							y:171,
							width:166.95,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt06",
							x:383-8,
							y:171,
							width:95,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt07",
							x:10.05,
							y:314,
							width:371,
							height:17,
							size:11,
							textAlign:"left"}]							
	
							
	var slide_object = {images:slide_images,						
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


