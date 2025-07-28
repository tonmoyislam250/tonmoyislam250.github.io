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
	var slide_1_images = [{name:"outputBox.png",
							x:15,
							y:84.45, 
							width:425,
							height:265.5,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:0,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"staticTxt",
							bodyText:'<div>C:\>ipconfig/all<br/><br/>Ethernet adapter Local Area Connection:</div><br/><table ><tr><td width="204">Connection-specific DNS Suffix  . </td><td width="13">:</td><td width="280">example.com</td></tr><tr><td width="204">Description . . . . . . . . . . . </td><td width="13">:</td><td width="280">Intel(R) Gigabit Network Connection</td></tr><tr id="staticTxtTable"><td width="204" >Physical Address. . . . . . . . . </td><td width="13">:</td><td width="293">00-18-DE-C7-F3-F8</td></tr><tr><td width="204">DHCP Enabled. . . . . . . . . . . </td><td width="13">:</td><td width="280">Yes</td></tr><tr><td width="204">Autoconfiguration Enabled . . . . </td><td width="13">:</td><td width="280">Yes</td></tr><tr><td width="204">IPv4 Address. . . . . . . . . . . </td><td width="13">:</td><td width="280">192.168.1.67(Preferred)</td></tr><tr><td width="204">Subnet Mask . . . . . . . . . . . </td><td width="13">:</td><td width="280">255.255.255.0</td></tr><tr><td width="204">Lease Obtained. . . . . . . . . . </td><td width="13">:</td><td width="280">Monday, November 26, 2012 12:14:48 PM</td></tr><tr><td width="204">Lease Expires . . . . . . . . . . </td><td width="13">:</td><td width="280">Saturday, December 01, 2012 12:15:02 AM</td></tr><tr><td width="204">Default Gateway . . . . . . . . . </td><td width="13">:</td><td width="280">192.168.1.254</td></tr><td width="204">DHCP Server . . . . . . . . . . . </td><td width="13">:</td><td width="280">192.168.1.254</td></tr><tr><td width="204">DNS Servers . . . . . . . . . . . </td><td width="13">:</td><td width="280">192.168.1.254</td></tr></table>',
							x:40,
							y:97, 
							width:419,
							height:100,
							size:10,
							color:"#000000",
							textAlign:"left"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:0,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:97.05,
							y:150, 
							width:264.95,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_s2_txt02",
							x:95.05,
							y:189.25, 
							width:264.95,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_s2_txt03",
							x:95.05,
							y:228.5, 
							width:264.95,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"}];	
	var graphics_slide = [{x:78.05,
							y:143, 
							width:266.95,
							height:31,
							color:"#FFFADD",
							stroke:"#666263",
							thickness:2,
							corner:0,
							type:"rectangle"},
							{x:78.05,
							y:182.25, 
							width:266.95,
							height:31,
							color:"#DBECDA",
							stroke:"#666263",
							thickness:2,
							corner:0,
							type:"rectangle"},
							{x:78.05,
							y:221.5, 
							width:266.95,
							height:31,
							color:"#E9E7E8",
							stroke:"#666263",
							thickness:2,
							corner:0,
							type:"rectangle"},];						
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							graphics:graphics_slide};
							
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
