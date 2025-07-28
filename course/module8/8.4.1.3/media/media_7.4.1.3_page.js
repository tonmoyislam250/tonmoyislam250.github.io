//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";

		
	var slide_images = [{name:"dottedlines.png",
							x:341,
							y:80, 
							width:3, 
							height:228,
							type:""}]
						
	
							
	var slide_texts = [{compId:"ID_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},

						{compId:"ID_txt01",
							x:137+64-24,
							y:44.85+60,
							width:79,
							height:17,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt02",
							x:402.8-40,
							y:123.35-34,
							width:35.5,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt03",
							x:12.5,
							y:134.95,
							width:84.95,
							height:52,
							size:11,
							textAlign:"right"},

						{compId:"ID_txt04",
							x:12.5+24,
							y:213.05,
							width:84.95,
							height:58,
							size:11,
							textAlign:"left"},

						{compId:"staticTxt_s1",
							bodyText:'<div class="ipaddress"><div class="tab1_1"><span class="col1">192</span><span class="col2">.</span><span class="col1">168</span><span class="col2">.</span><span class="col1">10</span></div><div style="clear:both;"></div><div class="tab2"><span class="col1">11000000</span><span class="col2">&nbsp;</span><span class="col1">10101000</span><span class="col2">&nbsp;</span><span class="col1">00001010</span></div></div>',
							x:100.2,
							y:110.85, 
							width:253.85,
							height:242,
							size:11,						
							textAlign:"center"},

						{compId:"staticTxt_s2",
							bodyText:'<div class="ipaddress"><div class="tab1"><span class="col1">255</span><span class="col2">.</span><span class="col1">255</span><span class="col2">.</span><span class="col1">255</span></div><div style="clear:both;"></div><div class="tab2"><span class="col1">11111111</span><span class="col2">&nbsp;</span><span class="col1">11111111</span><span class="col2">&nbsp;</span><span class="col1">11111111</span></div></div>',
							x:100.2,
							y:130.85+66, 
							width:253.85,
							height:242,
							size:11,						
							textAlign:"center"},

						{compId:"staticTxt_s11",
							bodyText:'<div class="ipaddress"><div class="tab3_3"><span class="col1">10</span></div><div style="clear:both;"></div><div class="tab4"><span class="col1">00001010</span></div></div>',
							x:380.2-26,
							y:110.85, 
							width:83.85,
							height:242,
							size:11,						
							textAlign:"center"},

						{compId:"staticTxt_s12",
							bodyText:'<div class="ipaddress"><div class="tab3"><span class="col1">0</span></div><div style="clear:both;"></div><div class="tab4"><span class="col1">00000000</span></div></div>',
							x:380.2-26,
							y:130.85+66, 
							width:83.85,
							height:242,
							size:11,						
							textAlign:"center"},
							
						]

								
			var slide_graphics = [/*{	x:120, shapes for static text1 
							y:37.3, 
							width:317.5,
							height:28,
							color:"#FDE6D4",
							stroke:"#F68026",
							thickness:2,
							corner:5},

							{x:24, shapes for static text4
							y:261.75, 
							width:130,
							height:67,
							color:"#FDE6D4",
							stroke:"#F68026",
							thickness:2,
							corner:5},

							{x:300, shapes for static text3
							y:179, 
							width:155.7,
							height:65,
							color:"#FDE6D4",
							stroke:"#F68026",
							thickness:2,
							corner:5}*/
						]
								
						
	
							
	var slide_object = {images:slide_images,						
						texts:slide_texts,graphics:slide_graphics};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


