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
	var commonTexts = [{compId:"ID_txt05",
							 x:361.25+25-57,
							 y:217.9-123,
							 width:50.6,
							 height:73,
							 size:11,
							 textAlign:"center"},
						{compId:"staticTxt3",
						    bodyText:'<b>A</b>',
							x:55,
							y:176.75+48,
							width:21,
							height:17,
							size:11,
							textAlign:"center",
							color:"#fff"},
						{compId:"staticTxt4",
						    bodyText:'<b>D</b>',
							x:155+172,
							y:176.75+48,
							width:21,
							height:17,
							size:11,
							textAlign:"center",
							color:"#fff"},
						{compId:"staticTxt3",
						    bodyText:'<b>B</b>',
							x:100,
							y:243.75+48,
							width:21,
							height:17,
							size:11,
							textAlign:"center",
							color:"#fff"},
						{compId:"staticTxt4",
						    bodyText:'<b>C</b>',
							x:155+172-45,
							y:243.75+48,
							width:21,
							height:17,
							size:11,
							textAlign:"center",
							color:"#fff"},
					
	];
	
	var commonImage = [{name:"10_3_3_1_C.png",
						x:30.15,
						y:64.9, 
						width:370,
						height:267,
						type:"none"}];
							
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"10_3_3_1_A1.png",
						x:157.15,
						y:84.9, 
						width:130,
						height:170,
						type:"none"}];		
	
	var slide_1_texts = [{compId:"ID_s1_title",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
							 
						{compId:"ID_s1_txt01",
							 x:119.2+6+28,
							 y:145.85-15+134,
							 width:99.65,
							 height:17,
							 size:11,
							color:"#F68026",
							 textAlign:"center"},
							 
						{compId:"ID_s1_txt02",
							 x:264.9+22-119,
							 y:114.5-47,
							 width:63.5,
							 height:17,
							 size:11,
							 textAlign:"center"}];
							 
	var slide_1_graphics = [
							];		

    var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							graphics:slide_1_graphics,
							texts:slide_1_texts};
							
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"10_3_3_1_B1.png",
							x:170.2,
							y:102.6, 
							width:201.5,
							height:157.95,
							type:"none"},
							{name:"router.png",
							x:167.7,
							y:83.9, 
							width:50.95,
							height:36.7,
							type:"none"}
							];		
	
	var slide_2_texts = [{compId:"ID_s2_title",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
							 
						{compId:"ID_s2_txt01",
							x:119.2+6+28,
							 y:145.85-15+136,
							 width:98.45,
							 height:17,
							 size:11,
							color:"#F68026",
							 textAlign:"center"},
						{compId:"ID_s2_txt02",
							 x:264.9+24-119,
							 y:114.5-47,
							 width:63.5,
							 height:17,
							 size:11,
							 textAlign:"center"}
							 ];		

    var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};						
  							
							
										
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImage,
			slideObject:slides};
	
}
