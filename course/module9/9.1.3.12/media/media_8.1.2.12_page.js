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
	var slide_1_images = [];		
	
	var slide_1_texts = [{compId:"ID_s1_txt01",
							 x:28.95+41,
							 y:122,
							 width:200.55,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_s1_txt02",
							 x:28.95+100,
							 y:320,
							 width:70,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"staticTxt1",
							bodyText:'<table width="100%" border="0" cellpadding="0" cellspacing="0"><tr><td width="6%" class="green_box"><span>10.</span></td><td width="24%" class="green_box">0000&nbsp;&nbsp;0000.</td><td width="4%" align="right" class="green_box">00</td><td width="4%" align="left" class="blue_box">00</td><td width="10%" class="blue_box">0000.</td><td width="21%" class="blue_box">0000 &nbsp;&nbsp;0000</td><td width="31%">&nbsp;</td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td class="green_box"><span>255.</span></td><td class="green_box">1111&nbsp;&nbsp;1111.</td><td align="right" class="green_box">11</td><td align="left" class="blue_box">00</td><td class="blue_box">0000.</td><td class="blue_box">0000 &nbsp;&nbsp;0000</td><td>&nbsp;</td></tr><tr><td height="5" colspan="9">&nbsp;</td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td class="green_box"><span>10.</span></td><td class="green_box">0000&nbsp;&nbsp;0000.</td><td align="right" class="green_box">00</td><td align="left" class="blue_box">00</td><td class="blue_box">0000.</td><td class="blue_box">0000 &nbsp;&nbsp;0000</td><td align="left"><span>&nbsp;10.0.0.0/18</span></td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td class="green_box"><span>10.</span></td><td class="green_box">0000&nbsp;&nbsp;0000.</td><td align="right" class="green_box">01</td><td align="left" class="blue_box">00</td><td class="blue_box">0000.</td><td class="blue_box">0000 &nbsp;&nbsp;0000</td><td align="left"><span>&nbsp;10.0.64.0/18</span></td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td class="green_box"><span>10.</span></td><td class="green_box">0000&nbsp;&nbsp;0000.</td><td align="right" class="green_box">11</td><td class="blue_box">00</td><td class="blue_box">0000.</td><td class="blue_box">0000 &nbsp;&nbsp;0000</td><td align="left"><span>&nbsp;10.0.192.0/18</span></td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td class="green_box"><span>10.</span></td><td class="green_box">0000&nbsp;&nbsp;0001.</td><td align="right" class="green_box">00</td><td align="left" class="blue_box">00</td><td class="blue_box">0000.</td><td class="blue_box">0000 &nbsp;&nbsp;0000</td><td align="left"><span>&nbsp;10.1.0.0/18</span></td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td class="green_box"><span>10.</span></td><td class="green_box">1111&nbsp;&nbsp;1111.</td><td align="right" class="green_box">10</td><td align="left" class="blue_box">00</td><td class="blue_box">0000.</td><td class="blue_box">0000 &nbsp;&nbsp;0000</td><td align="left"><span>&nbsp;10.255.128.0/18</span></td></tr><tr><td colspan="9">&nbsp;</td></tr></table>',
							x:15.95,
							y:20,
							width:430,
							height:304,
                        	textAlign:"center"}];	
								
	var slide_1_graphics = [{x:150.55,
							y:115,
							length:30,
							thickness:3,
							color:"#F26200",
							rotation:270,
							type:"arrow"},
							
							{x:153.3,
							y:8.5,
							length:85,
							thickness:3,
							color:"#F26200",
							rotation:180, 
							type:"arrow"}];
							
    var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts,
							graphics:slide_1_graphics};
							
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [];		
	
	var slide_2_texts = [{compId:"ID_s2_title",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
							 
						{compId:"ID_s2_txt01",
							 x:69.6,
							 y:115.8,
							 width:153.7,
							 height:17,
							 size:11,
							 textAlign:"left"},
							 
						{compId:"ID_s2_txt02",
							 x:232.35,
							 y:221.5,
							 width:147.5,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"staticTxt2",
							bodyText:'<table width="100%" border="0" cellpadding="0" cellspacing="0"><tr><td width="6%" class="green_box_2"><span>10.</span></td><td width="24%" class="green_box_2">0000&nbsp;&nbsp;0000.</td><td width="4%" align="right" class="green_box_2">00</td><td width="4%" align="left" class="blue_box_2">00</td><td width="10%" class="blue_box_2">0000.</td><td width="21%" class="blue_box_2">0000 &nbsp;&nbsp;0000</td></tr></table>',
							x:69.65,
							y:153.5,
							width:295,
							height:304,
                        	textAlign:"left"},
							
						{compId:"staticTxt3",
								bodyText:'<span>2^<span style="color:#F26200;font-weight:bold">14</span> = 16384 hosts per subnet</span>',
								x:232.35+1,
								y:266.9,
								width:170.65,
								height:17,
								textAlign:"center"},
						{compId:"staticTxt4",
								bodyText:'<span>2^<span style="color:#F26200;font-weight:bold">14</span> - 2 = 16382 valid hosts per subnet</span>',
								x:232.35-5-12,
								y:280.9,
								width:215.65,
								height:17,
								textAlign:"center"}];	
								
	var slide_2_graphics = [{x:232.35,
							y:183.75,
							length:43.95,
							thickness:3,
							color:"#F26200",
							rotation:90,
							type:"arrow"}];	

    var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							graphics:slide_2_graphics};	
	
	var slide_3_type = "IMAGE";
	var slide_3_images = [];		
	
	var slide_3_texts = [{compId:"ID_s3_title",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
						
						{compId:"ID_s3_txt01",
							 x:21.95+23,
							 y:77+18,
							 width:105.65,
							 height:17,
							 size:11,
							 textAlign:"left"},
							 
						{compId:"ID_s3_txt02",
							 x:21.95+23,
							 y:138.65+10,
							 width:105.65,
							 height:17,
							 size:11,
							 textAlign:"left"},
							 
						{compId:"ID_s3_txt03",
							 x:21.95+23,
							 y:196.8+7,
							 width:105.65,
							 height:17,
							 size:11,
							 textAlign:"left"},
							 
						{compId:"ID_s3_txt04",
							 x:21.95+23,
							 y:262.95-2,
							 width:105.65,
							 height:17,
							 size:11,
							 textAlign:"left"},
							 
						{compId:"staticTxt3",
							bodyText:'<table width="100%" border="0" cellpadding="0" cellspacing="0"><tr><td colspan="9">&nbsp;</td></tr><tr><td width="6%" class="green_box_2"><span>10.</span></td><td width="24%" class="green_box_2">00&nbsp;00&nbsp;00&nbsp;00.</td><td width="4%" align="right" class="green_box_2">00</td><td width="4%" align="left" class="blue_box_2">00</td><td width="10%" class="blue_box_2">0000.</td><td width="21%" class="blue_box_2">0000 &nbsp;&nbsp;0000</td><td width="31%" align="left"><span>&nbsp;= 10.0.0.0/18</span></td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td class="green_box_2"><span>10.</span></td><td class="green_box_2">00&nbsp;00&nbsp;00&nbsp;00.</td><td align="right" class="green_box_2">00</td><td align="left" class="blue_box_2">00</td><td class="blue_box_2">0000.</td><td class="blue_box_2">0000 &nbsp;&nbsp;0001</td><td align="left"><span>&nbsp;= 10.0.0.1/18</span></td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td class="green_box_2"><span>10.</span></td><td class="green_box_2">00&nbsp;00&nbsp;00&nbsp;00.</td><td align="right" class="green_box_2">00</td><td class="blue_box_2">11</td><td class="blue_box_2">1111.</td><td class="blue_box_2">1111 &nbsp;1110</td><td align="left"><span>&nbsp;= 10.0.63.254/18</span></td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td colspan="9">&nbsp;</td></tr><tr><td class="green_box_2"><span>10.</span></td><td class="green_box_2">00&nbsp;00&nbsp;00&nbsp;00.</td><td align="right" class="green_box_2">00</td><td align="left" class="blue_box_2">11</td><td class="blue_box_2">1111.</td><td class="blue_box_2">1111 &nbsp;&nbsp;1111</td><td align="left"><span>&nbsp;= 10.0.63.255/18</span></td></tr></table>',
							x:0.4+35,
							y:95.5,
							width:400,
							height:304,
                        	textAlign:"center"}
							];		

    var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
												
										
	var slides = [slide_1_object,slide_2_object,slide_3_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
