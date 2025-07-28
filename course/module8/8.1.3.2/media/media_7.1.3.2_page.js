
loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

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
	var slide_1_images = [{name:"7_1_3_2.jpg",
							x:65.20,
							y:37.95, 
							width:309.65,
							height:343,
							type:""},
							{name:"highlight.png",
							x:81,
							y:126, 
							width:170,
							height:31,
							type:""}/**/];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"7_1_3_2B.png",
							x:20.25,
							y:74, 
							width:411.55,
							height:268,
							type:""}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							bodyText:'<table cellpadding="1" cellspacing="0" border="0" width="345"><tr><td>C:\\> ipconfig</td></tr><tr><td height="10"></td></tr><tr><td>Ethernet adapter Local Area Connection: </td></tr><tr><td height="10"></td></tr><tr><td colspan="3"><table cellpadding="1" cellspacing="0" border="0" width="305" align="center"><tr><td>IP Address&nbsp;. . . . . . .&nbsp;&nbsp;10.1.1.101</td></tr><tr><td>Subnet Mask&nbsp;. . . . . . .&nbsp;255.255.255.0</td></tr><tr><td>Default Gateway&nbsp;. . . . .&nbsp;10.1.1.1</td></tr><tr><td>DNS Servers&nbsp;. . . . . . .&nbsp;172.16.99.150</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;172.16.99.151</td></tr></table><tr><td>C:\\></td></tr></td></tr></table>',
							x:37-2+7,
							y:146-41, 
							width:345.15,
							height:236,
							size:11,
							color:"#FFFFFF",
							textAlign:"left",
							}];							
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