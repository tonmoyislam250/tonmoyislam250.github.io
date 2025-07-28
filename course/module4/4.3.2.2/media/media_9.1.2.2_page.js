//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"9.1.2.2.png",
							x:10.4,
							y:162.95, 
							width:452.75, 
							height:76.45,
							type:""}];
							
	var slide_texts = [{compId:"ID_title",
							 x:18,
							 y:2,
							 width:460,
							 height:17,
							 size:14,
							 textAlign:"center"},
							
		 {compId:"ID_txt01",
							 x:10,
							 y:228,
							 width:44,
							 height:17,
							 size:11,
							 textAlign:"center"},
			{compId:"ID_txt02",
							 x:74.6,
							 y:139,
							 width:86,
							 height:17,
							 size:11,
							 textAlign:"center"},
			 {compId:"ID_txt03",
							 x:167.1,
							 y:136+5,
							 width:150,
							 height:17,
							 size:11,
							 textAlign:"center"},
			 {compId:"ID_txt04",
							 x:314.6+7,
							 y:139,
							 width:91,
							 height:17,
							 size:11,
							 textAlign:"center"},
		 {compId:"ID_txt05",
							 x:69-6,
							 y:234-4,
							 width:58.75,
							 height:17,
							 size:11,
							 textAlign:"center"},
		 {compId:"ID_txt06",
							 x:140-9,
							y:234-4,
							 width:26.3,
							 height:17,
							 size:11,
							 textAlign:"center"},
		 {compId:"ID_txt07",
							 x:162.35+4,
							y:234-4,
							 width:40,
							 height:17,
							 size:11,
							 textAlign:"center"},
		 {compId:"ID_txt08",
							 x:300,
							y:234-4,
							 width:90,
							 height:17,
							 size:11,
							 textAlign:"center"},
		 {compId:"ID_txt09",
							 x:390,
						y:234-4,
							 width:85,
							 height:17,
							 size:11,
							 textAlign:"center"},
		 {compId:"ID_txt13",
							 x:204.55+11,
							y:234-3,
							 width:62,
							 height:17,
							 size:11,
							 textAlign:"center"},
						];
	var slide_graphics=[{type:"border",
							 div:"borderText",
								border:5,
								x:5,
								y:226.3,
								width:464,
								height:30,
								},
								{type:"border",
							 div:"borderText1",
								border:5,
								x:69,
								y:136.3,
								width:345,
								height:30,
								}]
							
	var slide_object = {images:slide_images,
		graphics:slide_graphics,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
