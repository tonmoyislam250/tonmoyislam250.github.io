
loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;
var TYPE = 'MULTI_BAR'

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"2_3_3_1.png",
							x:3,
							y:38, 
							width:435.80,
							height:324,
							type:""},
							{name:"2_3_3_1.jpg",
							x:173,
							y:38, 
							width:264.05,
							height:324.70,
							type:""}];								
	var slide_1_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:10+2,
							y:57.45+8, 
							width:145,
							height:17,
							size:11,
		                    textAlign:"left"},
							{compId:"ID_txt02",
							x:10,
							y:293.6, 
							width:145,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:35,
							y:190, 
							width:117,
							height:17,
							size:11,
							textAlign:"left",
							color:"#ffffff"}
							];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	var slide_2_type = "SYNTAX_CHECKER";
  	var slide_2_texts=[];
		
	
	var slide_2_object = {templateType:slide_2_type,
			texts:slide_2_texts,
        	syntax:"sc1"};
	
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}