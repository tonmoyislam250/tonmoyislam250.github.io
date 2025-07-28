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
	var commonTexts = [{compId:"ID_inst",
							x:24,
							y:395, 
							width:400,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"},
							];
							
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"1_2_2_6_A.jpg",
							x:0,
							y:48, 
							width:265,
							height:288.95,
							type:"STD"},
							{name:"1_2_2_6_B.png",
							x:264,
							y:48.9, 
							width:169,
							height:288.45,
							type:""}
							];		
	
	var slide_1_texts = [{compId:"ID_s1_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							 x:10,
							 y:28,
							 width:266,
							 height:17,
							 size:11,
							 shadow:"YES",
							shadowColor:"#FFFFFF",
							 textAlign:"center"},		
						{compId:"ID_s1_txt02",
							x:333,
							y:246, 
							width:120,
							height:17,
							size:11,
		                   	textAlign:"left"},
						{compId:"ID_s1_caption",
							x:13,
							y:359.5, 
							width:438,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"left"}];		

var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"1_2_2_6_C.jpg",
							x:1,
							y:74.65, 
							width:435.25,
							height:251.75,							
							type:""}];					
	var slide_2_texts = [{compId:"ID_s2_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s2_caption",
							 x:8,
							 y:337.5,
							 width:450,
							 height:16.8,
							 size:12,
							 textAlign:"left"},
		
							{compId:"ID_s2_txt1",
						    x:187.9,
							y:121.15, 
							width:81,
							height:17,
							size:12,
		                    color:"#393536",
							textAlign:"center"},

							{compId:"ID_s2_txt2",
							x:94.85,
							y:163.15, 
							width:81,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},
							
							{compId:"ID_s2_txt3",
							x:168.4,
							y:228.65, 
							width:120,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},
							
							{compId:"ID_s2_txt4",
							x:267.85,
							y:156.65-7, 
							width:81,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},
							
							{compId:"ID_s2_txt5",
							x:21.85,
							y:165.65, 
							width:62,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},
							
							{compId:"ID_s2_txt6",
							x:207.4,
							y:85.35, 
							width:104,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"},
							
							{compId:"ID_s2_txt7",
							x:183.35,
							y:263.85, 
							width:104,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"},
							
							{compId:"ID_s2_txt8",
							x:43,
							y:79.15, 
							width:86,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"},
							
							{compId:"ID_s2_txt9",
							x:124.5,
							y:59.65, 
							width:86,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},
							
							{compId:"ID_s2_txt10",
							x:259.5,
							y:59.65, 
							width:86,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"},
							
							{compId:"ID_s2_txt11",
						    x:346.5,
							y:79.15, 
							width:86,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"},
							
							{compId:"ID_s2_txt12",
							x:67,
							y:279.15, 
							width:120,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"}];	
	
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
