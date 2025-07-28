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
	var commonTexts = [{compId:"ID_txt01",
							x:2.65,
							y:152.85,
							width:60,
							height:17,
                            size:11,
							textAlign:"center"},
					
		{compId:"ID_txt02",
							x:166.6,
							y:109,
							width:99,
							height:17,
                            size:11,
							textAlign:"center",
							},
		{compId:"ID_txt03",
							x:354.6,
							y:149.85,
							width:69,
							height:17,
                            size:11,
							textAlign:"center",
							}];

	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"4_2_1_2_A.png",
							x:10.4,
							y:78.25,
							width:422.55,
							height:71.5,
		
							type:""}];
	var slide_1_texts = [{compId:"ID_s1_title",
							x:0,
							y:2,
							width:430,
							height:17,
                            size:14,
							textAlign:"center"},
						{compId:"staticTxt",
							bodyText:'<a href="http://www.cisco.com/index.html" target="_blank">http://www.cisco.com/index.html</a>',
							x:128.35,
							y:153.15,
							width:175.4,
							height:17,
                            size:10,
							textAlign:"center"}];	
							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};

 
    var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"4_2_1_2_B.png",
							x:10.4,
							y:78.25,
							width:422.55,
							height:225,
							type:""}];
	var slide_2_texts = [{compId:"ID_s2_title",
							x:0,
							y:2,
							width:430,
							height:17,
                            size:14,
							textAlign:"center"},

							{compId:"ID_s2_txt01",
							x:161.6,
							y:152.4,
							width:85.35,
							height:17,
                            size:11,
							textAlign:"center",
							},
		{compId:"ID_s2_txt02",
							x:5,
							y:380.2,
							width:430,
							height:17,
                            size:11,
							textAlign:"left",
							}];	
							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
			
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"4_2_1_2_C.png",
							x:10.4,
							y:78.25,
							width:422.55,
							height:255,
							type:""}];
	var slide_3_texts = [{compId:"ID_s3_title",
							x:0,
							y:2,
							width:430,
							height:17,
                            size:14,
							textAlign:"center"},
							{compId:"ID_s3_txt01",
							x:293.55,
							y:64.5,
							width:65.75,
							height:17,
                            size:11,
							textAlign:"center",
							},
		{compId:"ID_s3_txt02",
							x:3.5,
							y:230.65,
							width:79.4,
							height:17,
                            size:11,
							textAlign:"right",
							},
		{compId:"ID_s3_txt03",
							x:353.35,
							y:224.9,
							width:77.15,
							height:17,
                            size:11,
							textAlign:"center",
							},
		{compId:"ID_s3_txt04",
							x:5,
							y:380.2,
							width:430,
							height:17,
                            size:11,
							textAlign:"left",
							}];
							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
	var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"4_2_1_2_D.png",
							x:10.4,
							y:78.25,
							width:422.55,
							height:213,
							type:""}];
	var slide_4_texts = [{compId:"ID_s4_title",
							x:0,
							y:2,
							width:430,
							height:17,
                            size:14,
							textAlign:"center"},
							{compId:"ID_s4_txt01",
							x:128.85,
							y:229.8,
							width:99.75,
							height:17,
                            size:11,
							textAlign:"center",
							},
		{compId:"ID_s4_txt02",
							x:5,
							y:380.2,
							width:430,
							height:17,
                            size:11,
							textAlign:"left",
							}];
							
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



