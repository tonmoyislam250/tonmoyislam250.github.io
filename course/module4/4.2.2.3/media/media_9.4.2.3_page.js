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
	$('#mainDiv').data("yt", true);

	var template_type = "MULTI_BAR";
	var commonTexts = [];
	
	var slide_1_type = "VIDEO";
	
	var slide_1_video = [{url:"http://www.youtube.com/embed/p5W5EQhPGAk?version=3&fs=1&modestbranding=1&rel=0&color=white&theme=light&autoplay=0&autohide=0&frameborder=0&allowfullscreen",
						x:0,
						y:55,
						width:370,
						height:220,
						slideNum:"ID_vob"}];
						
	var slide_1_images = []	
								
	var slide_1_object = {templateType:slide_1_type,							
							images:slide_1_images,
							slideNum:"_video",
		 			        videoObject:slide_1_video};	
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"9_4_2_3_s2_A.jpg",
							x:1.95,
							y:61, 
							width:196.75,
							height:88.9,
							type:"STD"},
							
						{name:"9_4_2_3_s2_B.jpg",
							x:235.3,
							y:61, 
							width:196.75,
							height:88.9,
							type:"STD"},
							
						{name:"9_4_2_3_s2_C.jpg",
							x:0.95,
							y:235.8, 
							width:196.75,
							height:88.9,
							type:"STD"},
							
						{name:"9_4_2_3_s2_D.jpg",
							x:235.3,
							y:235.8, 
							width:196.75,
							height:88.9,
							type:"STD"}]
																						
	var slide_2_texts = [{compId:"ID_s2_txt01",
							x:168,
							y:36.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_s2_txt02",
							x:168,
							y:213.9, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"}];
														
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"9_4_2_3_s3_A.jpg",
							x:10.35,
							y:100.8, 
							width:190.15,
							height:141.35,
							type:"STD"},
							
						{name:"9_4_2_3_s3_B.jpg",
							x:238.25,
							y:100.8, 
							width:190.15,
							height:141.35,
							type:"STD"}]
															
	var slide_3_texts = [{compId:"ID_s3_txt01",
							x:10.35+10,
							y:250.3, 
							width:190.15,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_s3_txt02",
							x:238.25+10,
							y:250.3, 
							width:190.15,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_s3_txt03",
							x:5,
							y:379.1, 
							width:430,
							height:17,
							size:11,
							textAlign:"left"}];	
													
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
							
																
	var slides = [slide_1_object,slide_2_object,slide_3_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
