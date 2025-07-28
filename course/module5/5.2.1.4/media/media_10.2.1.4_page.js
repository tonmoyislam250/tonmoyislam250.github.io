loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 500;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	
	var commonTexts = [	{compId:"ID_txt01",
							x:3.35+17,
							y:77.85+27, 
							width:90,
							height:17,
							size:10,
							textAlign:"left"},
							
						{compId:"ID_txt02",
							x:122.25+5,
							y:77.85+27, 
							width:90,
							height:17,
							size:10,
							textAlign:"left"},
							
						{compId:"ID_txt03",
							x:241.15-8,
							y:77.85+27, 
							width:90,
							height:17,
							size:10,
							textAlign:"left"},
							
						{compId:"ID_txt04",
							x:360.1-21,
							y:77.85+27, 
							width:90,
							height:17,
							size:10,
							textAlign:"left"},
							
						{compId:"ID_txt05",
							x:238-10+11-165,
							y:240.85-8-10+4+90+12, 
							width:95,
							height:17,
							size:10,
							textAlign:"left"},
							
						{compId:"ID_txt10",
							x:397.1-10-30,
							y:298.8+2-15+3+50+16, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt_A",
							bodyText:"A",
							x:46.35-3-10,
							y:146.75+29, 
							width:12.1,
							height:17,
							color:"#FFFFFF",
							font:"bold",
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt_B",
							bodyText:"B",
							x:162.3+11-17+6-3,
							y:146.75+29,  
							width:12.1,
							height:17,
							color:"#FFFFFF",
							font:"bold",
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt_C",
							bodyText:"C",
							x:289.25+10-26+9+4,
							y:146.75+29, 
							width:12.1,
							height:17,
							color:"white",
							font:"bold",
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt_D",
							bodyText:"D",
							x:416.3+9-35+9+11,
							y:146.75+29,  
							width:12.1,
							height:17,
							color:"white",
							font:"bold",
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt_R1",
							bodyText:"R1",
							x:416.3+9-35+9+11-215+22,
							y:240.85-8-10+4+90+40-6+16,   
							width:17,
							height:17,
							color:"white",
							font:"bold",
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt_G",
							bodyText:"G0/0",
							x:416.3+9-35+9+11-215,
							y:240.85-8-10+90+15,   
							width:30,
							height:17,
							font:"bold",
							size:11,
							textAlign:"center"}];
							
	var common_images = [{name:"10_2_1_4.png",
							x:0,
							y:166.65,
							width:440.65,
							height:300.1,
							type:""}];
							
	var slide_1_type = "IMAGE";
	
	var slide_1_images = [];	
							
	var slide_1_textboxs = [];	
							
	var slide_1_texts = [{compId:"ID_s1_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},

						{compId:"ID_s1_table",
							x:118.35+8,
							y:40.35-10, 
							width:212.9,
							height:44,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_s1_txt02",
							x:17.45-6,
							y:219.5-6+40-6, 
							width:185.95,
							height:44,
							size:11,
							textAlign:"left"}];
							
	var slide_graphics = [];	
							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							textboxs:slide_1_textboxs,
							texts:slide_1_texts,
							graphics:slide_graphics};
							
	var slide_2_type = "IMAGE";
	
	var slide_2_images = [{name:"10_2_1_4_B.png",
							x:16,
							y:187.65,
							width:402.65,
							height:300.1,
							type:""}];	
							
	var slide_2_textboxs = [];	
							
	var slide_2_texts = [{compId:"ID_s2_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_s2_table",
							x:118.35+8,
							y:40.35-10, 
							width:212.9,
							height:44,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_s2_txt02",
							x:17.45-6,
							y:219.5-6+40, 
							width:185.95,
							height:44,
							size:11,
							textAlign:"left"}];
							
	var slide_graphics = [];	
							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							textboxs:slide_2_textboxs,
							texts:slide_2_texts,
							graphics:slide_graphics};
							
							
	var slide_3_type = "IMAGE";
	
	var slide_3_images = [{name:"10_2_1_4_C.png",
							x:10,
							y:189.65,
							width:230.65,
							height:153.1,
							type:""}];	
													
	var slide_3_textboxs = [];	
							
	var slide_3_texts = [{compId:"ID_s3_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_s3_table",
							x:118.35+8,
							y:40.35-10, 
							width:212.9,
							height:44,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_s3_txt02",
							x:17.45-6,
							y:219.5-6+40, 
							width:185.95,
							height:44,
							size:11,
							textAlign:"left"}];
							
	var slide_graphics = [];	
							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							textboxs:slide_3_textboxs,
							texts:slide_3_texts,
							graphics:slide_graphics};
							
	var slide_4_type = "IMAGE";
	
	var slide_4_images = [];
														
	var slide_4_textboxs = [];	
							
	var slide_4_texts = [{compId:"ID_s4_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_s4_table",
							x:118.35+8,
							y:40.35-10, 
							width:212.9,
							height:44,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_s4_txt02",
							x:17.45-6,
							y:219.5-6+40, 
							width:185.95,
							height:44,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_s4_txt04",
							x:17.45-6+125-13,
							y:219.5-6+40-201+15+11, 
							width:185.95,
							height:44,
							size:11,
							textAlign:"left"}];
							
	var slide_graphics = [];
								
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							textboxs:slide_4_textboxs,
							texts:slide_4_texts,
							graphics:slide_graphics};
							
	var slide_5_type = "IMAGE";
	
	var slide_5_images = [{name:"10_2_1_4_D.png",
							x:13,
							y:203.65,
							width:260.65,
							height:153.1,
							type:""}];	
							
	var slide_5_textboxs = [];	
							
	var slide_5_texts = [{compId:"ID_s5_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_s5_table",
							x:118.35+8,
							y:40.35-10, 
							width:212.9,
							height:44,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_s5_txt02",
							x:17.45-6,
							y:219.5-6+40, 
							width:185.95,
							height:44,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_s5_bubble01",
							x:235+10,
							y:284.7-25, 
							width:139.8,
							height:44,
							size:11,
							textAlign:"left"},];
							
	var slide_graphics = [];		
						
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							textboxs:slide_5_textboxs,
							texts:slide_5_texts,
							graphics:slide_graphics};
							
						
							
		
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:common_images,
			slideObject:slides};
	
}