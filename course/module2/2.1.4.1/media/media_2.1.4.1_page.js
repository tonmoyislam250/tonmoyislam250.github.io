
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
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"2_1_4_1.png",
							x:55,
							y:130, 
							width:330,
							height:123,
							type:""}];
															
	var slide_1_texts = [{compId:"ID_s1_title",
							x:8,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							
						{compId:"ID_s1_txt01",
							x:8,
							y:175, 
							width:97,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_s1_txt02",
							x:116,
							y:175, 
							width:97,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_s1_txt03",
							x:224,
							y:175, 
							width:97,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_s1_txt04",
							x:333,
							y:168, 
							width:97,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"staticTxt1",
							bodyText:'<span class="switchColor">Switch></span><span class="pingColor">ping</span><span class="ipColor"> 192.168.10.5</span>',
							x:120,
							y:113, 
							width:205.8,
							height:232,
							size:14,
							textAlign:"center"},
							
						{compId:"staticTxt2",
							bodyText:'<span class="switchColor">Switch></span><span class="pingColor" style="font-size:14px;">show</span><span class="ipColor"> ip protocols</span>',
							x:119,
							y:251, 
							width:205.8,
							height:232,
							size:14,
							textAlign:"center",}];
							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_s2_table",
							x:26,
							y:80}];				
	var slide_2_texts = [{compId:"ID_s2_title",
							x:15,
							y:2,
							width:430,
							height:17,
                            size:14,
							textAlign:"center"}];						
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_tables,
							texts:slide_2_texts};
							
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
