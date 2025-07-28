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
	
	var slide_1_type = "POP_OVER_SLIDE";
	var slide_1_images = [{name:"10_3_2_1.jpg",
							x:96.65,
							y:101.75, 
							width:246.45,
							height:268.6,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_txt01",
							x:3.3,
							y:176.85, 
							width:160,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_s1_txt02",
							x:280.65,
							y:176.85, 
							width:152,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_s1_inst",
							x:4.95,
							y:379, 
							width:435.1,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"}];	
	var hotSpots = [{hotImage:"",
							div:[],
							x:184,
							y:102,
							width:77,
							height:47,
							closeBtn:{x:407,y:103},
							hideText:["ID_s1_txt02","ID_s1_txt01"],
							greyText:["ID_s1_inst"],
							grayBG:{width:400,height:400},
							popupImage2:{name:"s1_image_01withArrow.jpg",x:21.45,y:133.4,width:173,height:137},
							popupImage:{name:"textbox.jpg",x:0,y:72.55,width:440,height:242},
							popupText:{compId:"ID_s1_pop02B",x:35,y:173, width:138.1,height:17,size:11,textAlign:"center"},
							popupText2:{compId:"ID_s1_pop03",x:206,y:135, width:225.1,height:65.05,size:11,textAlign:"left"}},
							{hotImage:"",
							div:[],
							x:104,
							y:220,
							width:77,
							height:47,
							closeBtn:{x:407,y:87},
							hideText:["ID_s1_txt02","ID_s1_txt01"],
							greyText:["ID_s1_inst"],
							grayBG:{width:400,height:400},
							popupImage2:{name:"s1_image_02withArrow.jpg",x:65.45,y:120.4,width:308,height:162},
							
							popupImage:{name:"textbox2.jpg",x:0,y:82.55,width:440,height:252},
							
							popupText:{compId:"ID_s1_pop02A",x:60.15,y:260.65, width:150.25,height:17,size:11,textAlign:"center"},
							
							popupText2:{compId:"ID_s1_pop02B",x:231.85,y:260.65, width:150.25,height:65.05,size:11,textAlign:"center"}},
							{hotImage:"",
							div:[],
							x:265.85,
							y:220,
							width:77,
							height:47,
							closeBtn:{x:407,y:36},
							hideText:["ID_s1_txt02","ID_s1_txt01"],
							greyText:["ID_s1_inst"],
							grayBG:{width:400,height:400},
							popupImage2:{name:"s1_image_03withArrow.jpg",x:15.45,y:70.35,width:410,height:186.9},
							popupImage:{name:"textbox3.jpg",x:0,y:32.55,width:440,height:300},
							popupText:{compId:"ID_s1_pop02B",x:66,y:80, width:138.1,height:17,size:11,textAlign:"center"},
							popupText2:{compId:"ID_s1_pop03",x:25.85,y:260.65, width:418.25,height:65.05,size:11,textAlign:"left"}}];
	
	var graphic_slide = [];						
							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts,
							graphics:graphic_slide,
							hotSpots:hotSpots};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"10_3_2_1_A.jpg",
							x:5.05,
							y:31, 
							width:210,
							height:84.75,
							type:"STD"},
							{name:"10_3_2_1_B.jpg",
							x:5.05,
							y:134.05, 
							width:210,
							height:118.65,
							type:"STD"},
							{name:"10_3_2_1_C.jpg",
							x:5.05,
							y:271, 
							width:210,
							height:117,
							type:"STD"}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s2_txt01",
							x:252.3,
							y:58.85, 
							width:210,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_s2_txt02",
							x:252.3,
							y:178.85, 
							width:209,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_s2_txt03",
							x:252.3,
							y:318.85, 
							width:210,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},];							
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
