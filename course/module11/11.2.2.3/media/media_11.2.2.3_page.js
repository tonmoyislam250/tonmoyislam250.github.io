loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
//loadScript("../../../common/scripts/templates/slide/TableSlideNew.js");
//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");

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
	
	var slide_1_table = [];
							
	var slide_1_images = [{name:"11_2_2_3.jpg",
						x:57.85,
						y:153,
						width:324.30,
						height:219.95,
						type:"STD"},
						{name:"textbox1.png",
						x:0,
						y:20, 
						width:440,
						height:124,
						type:""}];	
								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_TB_body",
							x:16+7,
							y:62-24, 
							width:430,
							height:17,
							size:11,
							textAlign:"left"}];		
												
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts,
							tables:slide_1_table};
		
		
	var slide_2_type = "INTERACTIVEANIM";	
	
	var slide_2_texts = {compId:"ID_s2_title",
							x:15,
							y:2,
							width:429,
							height:17,
                            size:14,
							textAlign:"center"};
	var slide_2_object = {
							templateType:slide_2_type,
							x:0,
							y:0,
							animId:0,
							texts:slide_2_texts};						
						
	
							
	var slide_3_type = "IMAGE";
	
	var slide_3_table = [];
							
	var slide_3_images = [{name:"11_2_2_3_C.jpg",
						x:45.85,
						y:153,
						width:377.30,
						height:234,
						type:""},
						{name:"textbox1.png",
						x:0,
						y:20, 
						width:440,
						height:125,
						type:""}];	
								
	var slide_3_texts = [
							{compId:"ID_s3_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s3_txt01",
							x:0,
							y:149.85, 
							width:92,
							height:17,
							size:11,
							textAlign:"right",
							expand:"down"},
							{compId:"ID_s3_txt02",
							x:110+32,
							y:126.85, 
							width:118,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down",
							color:"#F68026"},
							{compId:"ID_s3_txt03",
							x:282+10,
							y:126.85, 
							width:121,
							height:17,
							size:11,
							textAlign:"right",
							expand:"down",
							color:"#764397"},
							{compId:"ID_s3_txt04",
							x:161.55+5,
							y:187.55, 
							width:121,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s3_txt05",
							x:240.40+15,
							y:303.10, 
							width:86.55,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down",
							color:'#6cc233'},
							{compId:"ID_s3_txt06",
							x:398.60+11,
							y:371.55, 
							width:52.95,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down",
							color:'#6cc233'},
							{compId:"ID_s3_TB_body",
							x:23,
							y:42, 
							width:416,
							height:17,
							size:11,
							textAlign:"left"}
							];		
												
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts,
							tables:slide_3_table};
							


	var slide_4_type = "IMAGE";
	
	
	var slide_4_images = [{name:"11_2_2_3_D.jpg",
						x:15.85,
						y:85,
						width:393.65,
						height:302.10,
						type:""}];	
								
	var slide_4_texts = [{compId:"ID_s4_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s4_txt01",
							x:0+15,
							y:117.55+245, 
							width:92,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
						{compId:"ID_s4_txt02",
							x:0+25+100,
							y:82.05+240, 
							width:181.95,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
						{compId:"ID_s4_txt03",
							x:0+15+315-10,
							y:117.55+245+13, 
							width:92,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},];		
												
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};	
											
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}