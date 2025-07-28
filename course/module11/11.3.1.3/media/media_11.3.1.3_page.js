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
							
	var commonImages = [];
							
	var graphics_slide = [];
	
	var slide_1_type = "IMAGE";
	
	var slide_1_images = [{name:"11_3_1_3_A_A.png",
							x:15,
							y:43, 
							width:380,
							height:200,
							type:""},
							
						 {name:"11_3_1_3_A_B.png",
							x:15,
							y:230, 
							width:380,
							height:200,
							type:""}];
															
	var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_s1_txt01",
							x:38.35,
							y:25.85, 
							width:366.95,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_s1_txt02",
							x:38.35,
							y:215.85, 
							width:366.95,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"static_s1_txt01", /*Table 1: Slide 1*/
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td>C:\><b>ping 10.66.254.159</b></td></tr><tr><td>&nbsp;&nbsp;</td></tr><tr><td>Pinging 10.66.254.159 with 32 bytes of data:</td></tr><tr><td>&nbsp;&nbsp;</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<1ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<1ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<1ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<1ms TTL=128</td></tr><tr><td>&nbsp;&nbsp;</td></tr><tr><td>Ping statistics for 10.66.254.159:</td></tr><tr><td>&nbsp;&nbsp;&nbsp;Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</td></tr><tr><td>Approximate round trip times in milli-seconds:</td></tr><tr><td>&nbsp;&nbsp;&nbsp;;Minimum = 0ms, Maximum = 0ms, Average = 0ms</td></tr></table>",
							x:39,
							y:58, 
							width:411.95,
							height:258,
							size:10,
							textAlign:"left"},
							
						{compId:"static_s1_txt02", /*Table 2: Slide 1*/
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td>C:\><b>ping 10.66.254.159</b></td></tr><tr><td>&nbsp;</td></tr><tr><td>Pinging 10.66.254.159 with 32 bytes of data:</td></tr><tr><td>&nbsp;</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<6ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<6ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<6ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<6ms TTL=128</td></tr><tr><td>&nbsp;</td></tr><tr><td>Ping statistics for 10.66.254.159:</td></tr><tr><td>&nbsp;&nbsp;&nbsp;Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</td></tr><tr><td>Approximate round trip times in milli-seconds:</td></tr><tr><td>&nbsp;&nbsp;&nbsp;Minimum = 0ms, Maximum = 0ms, Average = 0ms</td></tr></table>",
							x:39,
							y:245, 
							width:411.95,
							height:258,
							size:10,
							textAlign:"left"},
							
						{compId:"ID_s1_txt03",
							x:45.75-10,
							y:62.3-7, 
							width:288.45,
							height:21},
							
						{compId:"ID_s1_txt04",
							x:45.75-10,
							y:250.3-8, 
							width:288.45,
							height:21}];
														
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};							
	
	/*Slide : 02 */
	
	var slide_2_type = "IMAGE";
	
	var slide_2_images = [{name:"11_3_1_3_A_A.png",
							x:15,
							y:43, 
							width:380,
							height:200,
							type:""},
							
						 {name:"11_3_1_3_A_B.png",
							x:15,
							y:230, 
							width:380,
							height:200,
							type:""}];
															
	var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_s2_txt01",
							x:38.35,
							y:25.85, 
							width:366.95,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_s2_txt02",
							x:38.35,
							y:215.85, 
							width:366.95,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"static_s2_txt01", /*Table 1: Slide 2*/
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td>C:\><b>ping 10.66.254.159</b></td></tr><tr><td>&nbsp;</td></tr><tr><td>Pinging 10.66.254.159 with 32 bytes of data:</td></tr><tr><td>&nbsp;</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<1ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<1ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<1ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<1ms TTL=128</td></tr><tr><td>&nbsp;</td></tr><tr><td>Ping statistics for 10.66.254.159:</td></tr><tr><td>&nbsp;&nbsp;&nbsp;Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</td></tr><tr><td>Approximate round trip times in milli-seconds:</td></tr><tr><td>&nbsp;&nbsp;&nbsp;Minimum = 0ms, Maximum = 0ms, Average = 0ms</td></tr> <table>",
							x:39,
							y:57, 
							width:411.95,
							height:258,
							size:10,
							textAlign:"left"},
							
						{compId:"static_s2_txt02", /*Table 2: Slide 1*/
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td>C:\><b>ping 10.66.254.159</b></td></tr><tr><td>&nbsp;</td></tr><tr><td>Pinging 10.66.254.159 with 32 bytes of data:</td></tr><tr><td>&nbsp;</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<6ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<6ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<6ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<6ms TTL=128</td></tr><tr><td>&nbsp;</td></tr><tr><td>Ping statistics for 10.66.254.159:</td></tr><tr><td>&nbsp;&nbsp;&nbsp;Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</td></tr><tr><td>Approximate round trip times in milli-seconds:</td></tr><tr><td>&nbsp;&nbsp;&nbsp;Minimum = 0ms, Maximum = 0ms, Average = 0ms</td></tr></table>",
							x:39,
							y:243, 
							width:411.95,
							height:258,
							size:10,
							textAlign:"left"},
							
						{compId:"ID_s2_txt03",
							x:36.75-5,
							y:27.33-3, 
							width:288.45,
							height:17},
							
						{compId:"ID_s2_txt04",
							x:36.75-5,
							y:215.3-2, 
							width:288.45,
							height:17}];
														
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
/*Slide : 03 */
	
	var slide_3_type = "IMAGE";
	
	var slide_3_images = [{name:"11_3_1_3_A_A.png",
							x:15,
							y:43, 
							width:380,
							height:200,
							type:""},
							
						 {name:"11_3_1_3_A_B.png",
							x:15,
							y:230, 
							width:380,
							height:200,
							type:""}];
															
	var slide_3_texts = [{compId:"ID_s3_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_s3_txt01",
							x:38.35,
							y:25.85, 
							width:366.95,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_s3_txt02",
							x:38.35,
							y:215.85, 
							width:366.95,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"static_s3_txt01", /*Table 1: Slide 3*/
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td>C:\><b>ping 10.66.254.159</b></td></tr><tr><td>&nbsp;</td></tr><tr><td>Pinging 10.66.254.159 with 32 bytes of data:</td></tr><tr><td>&nbsp;</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<1ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<1ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<1ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<1ms TTL=128</td></tr><tr><td>&nbsp;</td></tr><tr><td>Ping statistics for 10.66.254.159:</td></tr><tr><td>&nbsp;&nbsp;&nbsp;Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</td></tr><tr><td>Approximate round trip times in milli-seconds:</td></tr><tr><td>&nbsp;&nbsp;&nbsp;Minimum = 0ms, Maximum = 0ms, Average = 0ms</td></tr></table>",
							x:39,
							y:57, 
							width:411.95,
							height:258,
							size:10,
							textAlign:"left"},
							
						{compId:"static_s3_txt02", /*Table 2: Slide 3*/
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td>C:\><b>ping 10.66.254.159</b></td></tr><tr><td>&nbsp;</td></tr><tr><td>Pinging 10.66.254.159 with 32 bytes of data:</td></tr><tr><td>&nbsp;</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<6ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<6ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<6ms TTL=128</td></tr><tr><td>Reply from 10.66.234.159: bytes=32 time<6ms TTL=128</td></tr><tr><td>&nbsp;</td></tr><tr><td>Ping statistics for 10.66.254.159:</td></tr><tr><td>&nbsp;&nbsp;&nbsp;Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</td></tr><tr><td>Approximate round trip times in milli-seconds:</td></tr><tr><td>&nbsp;&nbsp;&nbsp;Minimum = 0ms, Maximum = 0ms, Average = 0ms</td></tr></table>",
							x:39,
							y:243, 
							width:411.95,
							height:258,
							size:10,
							textAlign:"left"},
							
						{compId:"ID_s3_txt03",
							x:255.25-10,
							y:101.25-7, 
							width:51.95,
							height:15},
							
						{compId:"ID_s3_txt04",
							x:255.25-10,
							y:286.25-7, 
							width:51.95,
							height:15}];
														
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};

/*Slide : 04 */
	
	var slide_4_type = "IMAGE";
	
	var slide_4_images = [{name:"11_3_1_3.jpg",
							x:15,
							y:43, 
							width:380,
							height:200,
							type:"STD"},
							
						 {name:"11_3_1_3_C.png",
							x:10,
							y:220, 
							width:400,
							height:200,
							type:""}];
															
	var slide_4_texts = [{compId:"ID_s4_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_s4_txt01",
							x:44.1-12,
							y:242.85-12, 
							width:366.95,
							height:17,
							size:11,
							color:"#442557",
							textAlign:"left"},
							
						{compId:"ID_s4_txt02",
							x:38.35+8-10,
							y:215.85+43, 
							width:366.95,
							height:17,
							size:11,
							
							textAlign:"left"}];
														
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};							
											
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			graphics:graphics_slide,
			slideObject:slides};
	
}
