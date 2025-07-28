
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
	
	var slide_1_type = "TABLE";
	var slide_1_tables = [{compId:"ID_s1_table01",
							x:18,
							y:46.5}];	
	var slide_1_images = [];				
	var slide_1_texts = [{compId:"ID_s1_title",
							x:15,
							y:2,
							width:430,
							height:17,
                            size:16,
							textAlign:"center"}];						
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							tables:slide_1_tables,
							images:slide_1_images,
							texts:slide_1_texts};
							
							
	var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_s2_table01",
							x:18,
							y:46.5}];	
	var slide_2_images = [{name:"block_A.jpg",
							x:5.35,
							y:208.85, 
							width:425,
							height:182,
							type:""}];				
	var slide_2_texts = [{compId:"ID_s2_title",
							x:15,
							y:2,
							width:430,
							height:17,
                            size:16,
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:23,
							y:234,
							width:197,
							height:317,
                            size:11,
							color:"white",
							expand:"down",
							textAlign:"left"},
							{compId:"ID_s2_txt02",
							x:231,
							y:234,
							width:197,
							height:317,
                            size:11,
							color:"white",
							expand:"down",
							textAlign:"left"},
							{compId:"ID_s2_txt00",
							x:23.35,
							y:214.85,
							width:266.95,
							height:17,
                            size:11,
							expand:"down",
							textAlign:"left"}
							];						
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_tables,
							images:slide_2_images,
							texts:slide_2_texts};
							
	var slide_3_type = "TABLE";
	var slide_3_tables = [{compId:"ID_s3_table01",
							x:18,
							y:46.5}];	
	var slide_3_images = [{name:"block_A.jpg",
							x:5.35,
							y:208.85, 
							width:425,
							height:182,
							type:""}];				
	var slide_3_texts = [{compId:"ID_s3_title",
							x:15,
							y:2,
							width:430,
							height:17,
                            size:16,
							textAlign:"center"},
							{compId:"ID_s3_txt01",
							x:21,
							y:234,
							width:200,
							height:317,
                            size:11,
							expand:"down",
							color:"white",
							textAlign:"left"},
							{compId:"ID_s3_txt02",
							x:231,
							y:234,
							width:197,
							height:317,
                            size:11,
							expand:"down",
							color:"white",
							textAlign:"left"},
							{compId:"ID_s3_txt00",
							x:23.35,
							y:214.85,
							width:266.95,
							height:17,
                            size:11,
							expand:"down",
							textAlign:"left"}];						
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							tables:slide_3_tables,
							images:slide_3_images,
							texts:slide_3_texts};
							
	var slide_4_type = "TABLE";
	var slide_4_tables = [{compId:"ID_s4_table01",
							x:18,
							y:46.5}];	
	var slide_4_images = [{name:"block_A.jpg",
							x:5.35,
							y:208.85, 
							width:425,
							height:182,
							type:""}];				
	var slide_4_texts = [{compId:"ID_s4_title",
							x:15,
							y:2,
							width:430,
							height:17,
                            size:16,
							textAlign:"center"},
							{compId:"ID_s4_txt01",
							x:23,
							y:234,
							width:197,
							height:317,
                            size:11,
							color:"white",
							expand:"down",
							textAlign:"left"},
							{compId:"ID_s4_txt02",
							x:231,
							y:234,
							width:197,
							height:317,
                            size:11,
							color:"white",
							expand:"down",
							textAlign:"left"},
							{compId:"ID_s4_txt00",
							x:23.35,
							y:214.85,
							width:266.95,
							height:17,
                            size:11,
							textAlign:"left"}
							];						
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							tables:slide_4_tables,
							images:slide_4_images,
							texts:slide_4_texts};
							
											
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
