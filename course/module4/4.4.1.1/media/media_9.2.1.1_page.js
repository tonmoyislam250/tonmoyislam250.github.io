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
	
	var slide_images = [{name:"9.2.1.1.png",
							x:1.9,
							y:175.45, 
							width:460.1, 
							height:152.2,	
							type:""}]
					
							
	var slide_texts = [{compId:"ID_title",
							x:5,
							y:5, 
							width:460,
							height:17,
							size:14,							
							textAlign:"center"},								
							{compId:"ID_txt02",
							x:77,
							y:262, 
							width:104,
							height:17,
							size:11,							
							textAlign:"left"},
							{compId:"ID_txt03",
							x:75,
							y:229, 
							width:75,
							height:17,
							size:11,	
							color:"#fff",
							expand:"up",
							textAlign:"center"},
							{compId:"ID_txt04",
							x:325,
							y:229, 
							width:75,
							height:17,
							size:11,
							expand:"up",
							color:"#fff",
							textAlign:"center"},

						    {compId:"ID_bubble01",
							x:22.05,
							y:100, 
							width:150,
							height:80,
							size:11,						
							textAlign:"left"},

							{compId:"ID_bubble02",
							x:318,
							y:100, 
							width:150,
							height:80,
							size:11,						
							textAlign:"left"},

							{compId:"ID_bubble03",
							x:202.05+63,
							y:174+78, 
							width:230,
							height:80,
							size:11,						
							textAlign:"left"},
							
						]						
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


