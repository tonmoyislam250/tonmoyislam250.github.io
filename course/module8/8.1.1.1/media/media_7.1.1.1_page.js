loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");


function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [];
	
	var slide_1_type = "ASCIITOBIN";
	var slide_1_images = [];								
	var slide_1_texts = [{compId:"ID_s1_title",
						x:15,
						y:2,
						width:430,
						height:17,
						size:14,
						textAlign:"center",
						expand:"down"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_s2_table01",
							x:17,
							y:118.95}];
	var slide_2_texts = [{compId:"ID_s2_title",
							x:0,
							y:2,
							width:460,
							height:17,
                            size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s2_text01",
							x:179,
							y:53,
							width:84,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"ID_s2_text02",
							x:228,
							y:333,
							width:162.95,
							height:27,
                            size:11,
							textAlign:"center"},
							];	
	var graphic_2_slide = [{x:295,
							y:330,
							length:143,
							thickness:3,
							color:"#F68026",
							rotation:220,
							type:"arrow"},
							{x:326,
							y:330,
							length:135,
							thickness:3,
							color:"#F68026",
							rotation:310,
							type:"arrow"},
							{x:310,
							y:330,
							length:135,
							thickness:3,
							color:"#F68026",
							rotation:-90,
							type:"arrow"}];						
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_tables,
							graphics:graphic_2_slide,
							texts:slide_2_texts};		
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}

