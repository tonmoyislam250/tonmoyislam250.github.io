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

		
	var slide_images = [{name:"5_1_2_5.png",
							x:82,
							y:94.2, 
							width:364, 
							height:198,
							type:""}];
	
	var slide_texts = [{compId:"ID_title",
							x:10,
							y:1, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},

						{compId:"ID_txt01",
							x:87+13,
							y:179.9,
							width:129.55,
							height:47.95,
							size:10,
							textAlign:"left"},

						{compId:"ID_txt02",
							x:109.45+15,
							y:275.4+7,
							width:111,
							height:8,
							size:10,
							textAlign:"center"},

						{compId:"ID_txt03",
							x:238+13,
							y:275.4+7,
							width:110.7,
							height:8,
							size:10,
							textAlign:"center"},

						{compId:"ID_txt04",
							x:363+6,
							y:275.4+7,
							width:108.45,
							height:8,
							size:10,
							textAlign:"center"},

						{compId:"ID_txt05",
							x:1.45+12,
							y:284.4-12,
							width:88.7,
							height:12.95,
							size:11,
							textAlign:"right"},

						{compId:"ID_txt06",
							x:109.45+15,
							y:317.45,
							width:113.55,
							height:17,
							size:10,
							textAlign:"center"},

						{compId:"ID_txt07",
							x:233.3+15,
							y:317.45,
							width:113.55,
							height:17,
							size:10,
							textAlign:"center"},

						{compId:"ID_txt08",
							x:354.95+10,
							y:317.45,
							width:113.55,
							height:17,
							size:10,
							textAlign:"center"}]

								
			var slide_graphics = [{x:113,/* shapes for static text2*/
									y:275.4, 
									width:115,
									height:28,
									color:"#CDEAF8",
									corner:5},

							{x:233+5,/* shapes for static text3*/
							y:275.4,  
							width:110,
							height:28,
							color:"#FFF3B9",
							thickness:0,
							corner:5},
								
							{x:358,/* shapes for static text4*/
							y:275.4,  
							width:110,
							height:28,
							color:"#CCE9E7",
							corner:5}]
								
						
	
							
	var slide_object = {images:slide_images,						
						texts:slide_texts,graphics:slide_graphics};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


