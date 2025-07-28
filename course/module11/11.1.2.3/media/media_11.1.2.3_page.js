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
	var slide_1_images = [{name:"11_1_2_3_A.jpg",
							x:121.45,
							y:59.45, 
							width:202,
							height:134,
							type:"STD"},
							
						 {name:"11_1_2_3_B.jpg",
							x:9.35,
							y:213.35, 
							width:202,
							height:134,
							type:"STD"},
							
						 {name:"11_1_2_3_C.jpg",
							x:233.3,
							y:213.35, 
							width:202,
							height:134,
							type:"STD"}];		
	
	var slide_1_texts = [{compId:"ID_s1_title",
							 x:7,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"}
							];		

    var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"11_1_2_3_F.jpg",
							x:29.45,
							y:40.75, 
							width:165,
							height:124.05,
							type:"STD"},
							
						 {name:"11_1_2_3_E.jpg",
							x:245.45,
							y:40.75, 
							width:177.95,
							height:124.1,
							type:"STD"},
							
						 {name:"11_1_2_3_D.jpg",
							x:109.3,
							y:208.35, 
							width:230,
							height:160.7,
							type:"STD"}];		
	
	var slide_2_texts = [{compId:"ID_s2_title",
							 x:18,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
							 
						{compId:"ID_txt01",
							 x:67.35,
							 y:169.45,
							 width:104,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_txt02",
							 x:280.35,
							 y:169.45,
							 width:104,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_txt03",
							 x:20,
							 y:376.85,
							 width:430,
							 height:17,
							 size:11,
							 textAlign:"center"}];		

    var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};	
	
										
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
