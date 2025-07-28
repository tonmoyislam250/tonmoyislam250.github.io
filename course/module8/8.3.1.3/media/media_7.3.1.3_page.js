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
		
	var slide_images = [{name:"7_3_1_3.png",
							x:3.8,
							y:91.6,
							width:463,
							height:213,
							type:""}];
	
							
	var slide_texts = [{	compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},{compId:"ID_txt01",
							x:83,
							y:38.85, 
							width:387.2,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt02",
							x:82.1,
							y:70.05, 
							width:290.8,
							height:48,
							size:11,
							color:"#000",
							textAlign:"left"},
							{compId:"ID_txt03",
							x:75,
							y:173.85, 
							width:145,
							height:13,
							size:11,
							color:"#000",
							textAlign:"left"},
							{compId:"ID_txt04",
							x:291.65,
							y:213.5, 
							width:140,
							height:15.4,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:87.1,
							y:244.65, 
							width:314.4,
							height:16.2,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt06",
							x:87.1,
							y:275.65, 
							width:302,
							height:48.5,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt07",
							bodyText:"<b>PC1</b>",
							x:50.15,
							y:131.4, 
							width:25.6,
							height:16.55,
							size:11,
							color:"white",
							textAlign:"center"},
							{compId:"ID_txt08",
							bodyText:"<b>PC2</b>",
							x:411.2,
							y:239.35, 
							width:25.6,
							height:16.55,
							size:11,
							color:"white",
							textAlign:"center"}
							];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
