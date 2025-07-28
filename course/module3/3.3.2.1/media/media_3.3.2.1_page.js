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
		
	var slide_images = [{name:"arrow.png",
							x:40,
							y:137,
							width:11.15,
							height:54,
							type:""},
							{name:"arrow.png",
							x:141,
							y:137,
							width:11.15,
							height:54,
							type:""},
							{name:"arrow2.png",
							x:242,
							y:137,
							width:11.15,
							height:54,
							type:""},
							{name:"arrow3.png",
							x:338,
							y:137,
							width:11.15,
							height:54,
							type:""},
							{name:"arrow4.png",
							x:431,
							y:137,
							width:11.15,
							height:54,
							type:""}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:20,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:2,
							y:111,
							width:70,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt02",
							x:90,
							y:111,
							width:70,
							height:18,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:183,
							y:111,
							width:70,
							height:18.05,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt04",
							x:270,
							y:111,
							width:70,
							height:18,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:360,
							y:111,
							width:70,
							height:20,
							size:11,
							textAlign:"left"},
                            {compId:"ID_table",
							x:8,
							y:190,
							width:500.9,
							height:50,
							size:11,
							textAlign:"left",
                            type:"STD"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
