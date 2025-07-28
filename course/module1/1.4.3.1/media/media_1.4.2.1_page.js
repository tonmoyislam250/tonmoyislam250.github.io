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
	var slide_graphics = [{	x:329.1,/* shapes for ID_txt03 */
							y:127.85, 
							width:104.35,
							height:55,
							thickness:2,
							corner:5}]

		
	var slide_images = [{name:"1_4_2_1.jpg",
							x:9.85,
							y:71.1, 
							width:445.45, 
							height:248.15,
							type:""}];
	
	var slide_texts = [{compId:"ID_title",
							x:82,
							y:2, 
							width:320,
							height:17,
							size:14,
							textAlign:"center"},

						{compId:"ID_txt01",
							x:25,
							y:95,
							width:85,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt02",
							x:74.95,
							y:143.2,
							width:50.4,
							height:56.65,
							color:"#FFFFFF",
							size:11,
							textAlign:"center",
							rotation:"50"
							},

						{compId:"ID_txt03",
							x:342,
							y:105,
							width:88,
							height:17,
							size:11,
							color:"#631926",
							textAlign:"center"},

						{compId:"ID_txt04",
							x:210,
							y:304.65,
							width:79.55,
							height:17,
							size:11,
							textAlign:"center"}]

								
			
								
						
	
							
	var slide_object = {images:slide_images,						
						texts:slide_texts,graphics:slide_graphics};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


