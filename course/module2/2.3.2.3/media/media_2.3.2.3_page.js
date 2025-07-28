
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
	var slide_1_images = [{name:"2_3_2_3.jpg",
							x:0.00,
							y:105.00, 
							width:232.60, 
							height:262.10,
							type:"STD"},
							{name:"arrow.png",
							x:142.00,
							y:180.00, 
							width:122.30, 
							height:9,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
							y:12, 
							width:400,
							height:17,
							size:14,
							textAlign:"center"},
					   		{compId:"ID_txt02",
							x:262.35,
							y:165, 
							width:166,
							height:35,
							size:11,
							textAlign:"left"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "SYNTAX_CHECKER";
  var slide_2_texts=[{compId:"ID_title",
							x:5,
							y:2, 
							width:400,
							height:17,
							size:14,
							textAlign:"center"}];
		
	
	var slide_2_object = {templateType:slide_2_type,
			texts:slide_2_texts,
        	syntax:"sc1"};
							
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
