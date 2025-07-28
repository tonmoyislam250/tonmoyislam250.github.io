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

		
	var slide_images = [{name:"7.1.4.3.png",
							x:-1.55,
							y:93.9, 
							width:470, 
							height:301.45,
							type:""},
						{name:"7.1.4.3C.png",
							x:275.55,
							y:55, 
							width:9, 
							height:46,
							type:""},
						{name:"7.1.4.3B.png",
							x:87.9,
							y:228.05, 
							width:9, 
							height:46,
							type:""},
						{name:"7.1.4.3A.png",
							x:338.5,
							y:243.5, 
							width:50.95, 
							height:52,
							type:""}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},

						{compId:"ID_txt01",
							x:137,
							y:44.85,
							width:310.95,
							height:17,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt02",
							x:402.8,
							y:123.35,
							width:40.5,
							height:17,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt03",
							x:311,
							y:185,
							width:145,
							height:52,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt04",
							x:39,
							y:267,
							width:120,
							height:58,
							size:11,
							textAlign:"center"}]

								
			var slide_graphics = [{	x:120,/* shapes for static text1 */
							y:37.3, 
							width:317.5,
							height:28,
							color:"#FDE6D4",
							stroke:"#F68026",
							thickness:2,
							corner:5},

							{x:24,/* shapes for static text4*/
							y:261.75, 
							width:130,
							height:67,
							color:"#FDE6D4",
							stroke:"#F68026",
							thickness:2,
							corner:5},

							{x:300,/* shapes for static text3*/
							y:179, 
							width:155.7,
							height:65,
							color:"#FDE6D4",
							stroke:"#F68026",
							thickness:2,
							corner:5}
						]
								
						
	
							
	var slide_object = {images:slide_images,						
						texts:slide_texts,graphics:slide_graphics};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


