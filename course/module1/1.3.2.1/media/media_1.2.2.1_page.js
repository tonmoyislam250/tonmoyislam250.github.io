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
							
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"1_2_2_1A.png",
							x:11,
							y:80.25, 
							width:296.2,
							height:230.75,
							type:"none"}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							 x:0,
							 y:2,
							 width:460,
							 height:17,
							 size:16,
							 textAlign:"center"},
						{compId:"ID_s1_txt01",
							x:150,
							y:101.35, 
							width:80,
							height:17,
							size:11,
							textAlign:"center"},
	                       {compId:"ID_s1_txt02",
							x:304,
							y:186, 
							width:125,
							height:19,
							size:11,
							textAlign:"left"}];	
	var slide_1_graphics = []						
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							graphics:slide_1_graphics,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"1_2_2_1B.png",
							x:11,
							y:80.25, 
							width:416,
							height:283.95,
							type:"none"}];
	var slide_2_texts = [{compId:"ID_s2_title",
							 x:0,
							 y:2,
							 width:460,
							 height:17,
							 size:16,
							 textAlign:"center"},{compId:"ID_s2_txt01",
							x:150,
							y:101.35, 
							width:80,
							height:17,
							size:11,
							textAlign:"center"},
                         {compId:"ID_s2_txt02",
							x:16,
							y:345.25, 
							width:300,
							height:19,
							size:11,
							textAlign:"left"}];
	var slide_2_graphics = []							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							graphics:slide_2_graphics,
							images:slide_2_images,
							texts:slide_2_texts};	
	
											
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"1_2_2_1C.png",
							x:11,
							y:66.85, 
							width:416,
							height:268.5,
							type:"none"}];
	var slide_3_texts = [{compId:"ID_s3_title",
							 x:0,
							 y:2,
							 width:460,
							 height:17,
							 size:16,
							 textAlign:"center"}
							 ,{compId:"ID_s3_txt01",
							x:150,
							y:101.35, 
							width:80,
							height:17,
							size:11,
							textAlign:"center"},
                          {compId:"ID_s3_txt02",
							x:16,
							y:35, 
							width:399.55,
							height:19,
							size:11,
							textAlign:"left"},	
	                      {compId:"ID_s3_txt03",
							x:16,
							y:315, 
							width:140,
							height:19,
							size:11,
							textAlign:"left"},
							
                          {compId:"ID_s3_txt04",
							x:186,
							y:315, 
							width:240,
							height:19,
							size:11,
							textAlign:"left"}];
	var slide_3_graphics = []
			                						
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							graphics:slide_3_graphics,
							images:slide_3_images,
							texts:slide_3_texts};
							
	var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"1_2_2_1D.png",
							x:11,
							y:66.85, 
							width:416,
							height:257.5,
							type:"none"}];
	var slide_4_texts = [{compId:"ID_s4_title",
							 x:0,
							 y:2,
							 width:460,
							 height:17,
							 size:16,
							 textAlign:"center"},{compId:"ID_s4_txt01",
							x:150,
							y:101.35, 
							width:80,
							height:17,
							size:11,
							textAlign:"center"},
                          {compId:"ID_s4_txt02",
							x:16,
							y:36, 
							width:399.55,
							height:19,
							size:11,
							textAlign:"left"},
	                      {compId:"ID_s4_txt03",
							x:266,
							y:90.35, 
							size:11,
							textAlign:"left"},
                          {compId:"ID_s4_txt04",
							x:200,
							y:314, 
							width:228,
							height:19,
							size:11,
							textAlign:"left"}];	
	var slide_4_graphics = []					
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							graphics:slide_4_graphics,
							images:slide_4_images,
							texts:slide_4_texts};					
											
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
