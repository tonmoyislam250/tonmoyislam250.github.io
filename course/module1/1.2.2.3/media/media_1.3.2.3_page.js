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

		
	var slide_images = [{name:"1.3.2.3.jpg",
							x:8.375,
							y:81, 
							width:452.9, 
							height:198.15,
							type:""}];
	
							
	var slide_texts = [ {compId:"ID_title",
							x:5,
							y:3, 
							width:460,
							height:17,
							size:14,
							color:"#393536",
							textAlign:"center"},
						{compId:"ID_txt01",
							x:16.95,
							y:328, 
							width:460,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"},

						{compId:"ID_txt02",
							x:150.75,
							y:248.3, 
							width:46,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"},

						{compId:"ID_txt03",
							x:320,
							y:248.3, 
							width:46,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"},


					{compId:"ID_txt04",
							x:228.75,
							y:278.3, 
							width:46,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"}];

								
	
							
	var slide_object = {images:slide_images,						
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


