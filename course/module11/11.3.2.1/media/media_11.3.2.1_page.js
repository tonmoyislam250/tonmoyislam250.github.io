loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 410;

function getData()
{
	var template_type = "MULTI_BAR";
	
	var commonImages = [];
	var commonTexts = [];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"11.3.2.1.png",
							 x:11.65,
							 y:85.85, 
							 width:408.1,
							 height:272.05,
							 size:11,							 
							 type:""},
							{name:"arrow1.png",
							 x:88.35,
							 y:83.45, 
							 width:9.3,
							 height:81,
							 size:11,							 
							 type:""},
	{name:"arrow2.png",
							 x:139.7,
							 y:325.35, 
							 width:69,
							 height:21,
							 size:11,							 
							 type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:13,
							textAlign:"center"},
							
							{compId:"ID_s1_txt01",							
							 x:20-11,
							 y:52, 
							 width:204,
							 height:17,
							 size:11,							
							 textAlign:"center",
							expand:"left+right"},
						
						{compId:"ID_s1_txt02",
							x:140+56,
							y:70, 
							width:110,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
						{compId:"ID_s1_txt03",
							x:257+68,
							y:76, 
							width:100,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
		{compId:"ID_s1_txt04",
							x:20,
							y:175.45, 
							width:63.05,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
		{compId:"ID_s1_txt05",
							x:145.4,
							y:130.6, 
							width:63.05,
							height:17,
							size:11,
							textAlign:"center",
							expand:"right"},
		{compId:"ID_s1_txt06",
							x:98.7,
							y:375.4, 
							width:63.05,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
		{compId:"ID_s1_txt07",
							 x:200.65,
							 y:331.9, 
							 width:185,
							 height:17,
							 size:11,							
							 textAlign:"center",
							expand:"left+right"},
							
		                   {compId:"ID_s1_txt08",
							x:368.4,
							y:292.95, 
							width:63.05,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},

							{compId:"staticTxt1",
							 bodyText:"10.0.0.254/24",
							 x:106,
							 y:212.95, 
							 width:100.05,
							 height:17,
							 size:11,
							 color:"#000000",
							 textAlign:"left"},
							{compId:"staticTxt24",
							 bodyText:"10.1.0.254/24",
							 x:374.05,
							 y:135.4, 
							 width:87,
							 height:17,
							 size:11,
							 color:"#000000",
							 textAlign:"left"},
							{compId:"staticTxt3",
							 bodyText:"10.1.0.1/24",
							 x:279.9,
							 y:277.7, 
							 width:90.05,
							 height:17,
							 size:11,
							 color:"#000000",
							 textAlign:"left"},
							{compId:"staticTxt4",
							 bodyText:"<b>10.1.0.2/24</b>",
							 x:370.3,
							 y:277.7, 
							 width:70,
							 height:17,
							 size:11,
							 
							 textAlign:"left"},
							{compId:"staticTxt3",
							 bodyText:"10.0.0.1/24",
							 x:16,
							 y:359.2, 
							 width:70,
							 height:17,
							 size:11,
							 color:"#000000",
							 textAlign:"left"},
							{compId:"staticTxt3",
							 bodyText:"10.0.0.2/24",
							 x:100.35,
							 y:359.2, 
							 width:70,
							 height:17,
							 size:11,
							 color:"#000000",
							 textAlign:"left"},];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"11_3_2_1_B.jpg",
							 x:48,
							 y:63, 
							 width:351,
							 height:151,
							 size:11,							 
							 type:"STD"},
							{name:"outBox.jpg",
							 x:46.85,
							 y:237.05, 
							  width:352,
							 height:113,
							 size:11,							 
							 type:"STD"}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:0,
							y:2, 
							width:450,
							height:17,
							size:13,
							textAlign:"center"},
	{compId:"ID_s2_title01",
							 x:13+47,
							 y:235.95+6, 
							 width:390.05,
							 height:117,
							 size:11,
							 color:"#000000",
							 textAlign:"left"},
							{compId:"ID_s2_body",
							 x:62,
							 y:265.95, 
							 width:390.05,
							 height:117,
							 size:11,
							 color:"#000000",
							 textAlign:"left"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};

	
							
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			slideObject:slides};
	
}
