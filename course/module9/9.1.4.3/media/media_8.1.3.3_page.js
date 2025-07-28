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
	var slide_1_images = [{name:"slide_1.jpg",
							x:2,
							y:26, 
							width:427.95,
							height:370.95,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:30,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:13,
							y:29.75, 
							width:135,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt02",
							x:157.65,
							y:29.75, 
							width:135,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt03",
							x:13,
							y:362.65, 
							width:135,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt04",
							x:303.6,
							y:362.65, 
							width:135,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt05",
							x:303.6,
							y:29.75, 
							width:135,
							height:17,
							size:11,
							textAlign:"center"},];
							
	var graphic_slide = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts,
							graphics:graphic_slide};
							
					
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"slide_2a.png",
							x:186,//253.75,
							y:192.45, 
							width:92.5,
							height:13,
							type:""}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:0+20,
							y:2, 
							width:390,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:38,
							y:152.7, 
							width:153,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s2_txt02",
							x:189.05,
							y:152.7, 
							width:93.05,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s2_txt03",
							x:197.05,
							y:207.2, 
							width:132.05,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"statictext2",
							bodyText:'<table><tr><td width="134" height="21"><span style="color:#5FBC21"><b>10101100 .</b></span></td><td width="119"><span style="color:#5FBC21"><b>00010000 .</b></span></td><td width="56"><span style="color:#5FBC21"><b>000000</b></span></td><td width="51"><span style="color:#F26200"><b>00.00</b></span></td><td width="66"><span style="color:#F26200"><b>000000</b></span></td><td width="162"><span style="letter-spacing:1px;">&nbsp;&nbsp;172.16.0.0/22</span></td></tr></table>',
							x:28,//106.6,
							y:173.65-8, 
							width:350,
							height:17,
							size:11,
							textAlign:"center"},
														];
							
	var graphic_slide = [{x:18,
							y:165.5, 
							width:190,//179,
							height:28,
							color:"#E6EBA8",
							stroke:"#E6EBA8",
							thickness:0,
							corner:0,
							type:"rectangle"},
							{x:188,//255.1,
							y:165.5, 
							width:90,
							height:28,
							color:"#cce9e7",
							stroke:"#cce9e7",
							thickness:0,
							corner:0,
							type:"rectangle"},
							];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							graphics:graphic_slide};
														
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
