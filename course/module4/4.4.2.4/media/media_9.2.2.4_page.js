//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");
function registerSWF(){
swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

	function getData()
	{
	
	var template_type = "MULTI_BAR";
	var commonTexts = [];						
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"9_2_2_4.jpg",
							x:12.65,
							y:91, 
							width:413,
							height:140,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_bubble01",
							x:15+12+1,
							y:91+33-8-10, 
							width:148,
							height:80,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_bubble02",
							x:15+12+250-4+1,
							y:91+33-8-11, 
							width:148,
							height:80,
							size:11,
							textAlign:"left"}];	
							
						
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
	
	
	var slide_2_type = "INTERACTIVEANIM";
			
			var slide_2_texts = {compId:"ID_s2_title",
			x:0,
			y:2,
			width:400,
			height:17,
			size:14,
			textAlign:"center"};
			
			var slide_2_object = {templateType:slide_2_type,
			x:0,
			y:0,
			animId:0,
			texts:slide_2_texts};	
	
	var slide_3_type = "INTERACTIVEANIM";
			
			var slide_3_texts = {compId:"ID_s3_title",
			x:0,
			y:2,
			width:400,
			height:17,
			size:14,
			textAlign:"center"};
			
			var slide_3_object = {templateType:slide_3_type,
			x:0,
			y:0,
			animId:1,
			texts:slide_3_texts};	
	
	
	var slides = [slide_1_object,slide_2_object,slide_3_object];
	
	return {templateType:template_type,
	textObject:commonTexts,
	slideObject:slides};
	
	}

loadScript("../../../common/scripts/swfobject.js", registerSWF);