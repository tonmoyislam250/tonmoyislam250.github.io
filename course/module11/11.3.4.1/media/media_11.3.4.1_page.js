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
							
	var graphics_slide = [{x:20,
							y:266, 
							width:31,
							height:15,
							color:"#FEED95",
							stroke:"#4E4C4D",
							thickness:2,		
							corner:4},
							{x:20,
							y:286, 
							width:31,
							height:15,
							color:"#B5D9B3",
							stroke:"#4E4C4D",
							thickness:2,
							corner:4},
							{x:20,
							y:306, 
							width:31,
							height:15,
							color:"#E0D5E6",
							stroke:"#4E4C4D",
							thickness:2,		
							corner:4}];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"outputBox1.png",
							x:16,
							y:62.05,
							width:430,
							height:178.45,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:20,
							y:2, 
							width:438,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:20,
							y:370, 
							width:438,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt02",
							x:27,
							y:246, 
							width:432,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_sub01",
							x:45+24,
							y:268, 
							width:300,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_sub02",
							x:45+24,
							y:288, 
							width:300,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_sub03",
							x:45+24,
							y:308, 
							width:300,
							height:17,
							size:11,
							textAlign:"left"},
	
							{compId:"staticTxt",
							bodyText:'<div class="ipconfig"><div class="tab">C:\\><b style="color:#000000">ipconfig</b><br/>Windows IP Configuration<br/>Ethernet adapter Local Area Connection:<br/><ul> Connection-specific DNS Suffix  . :<li class="first">IP Address. . . . . . . . . . . . : 192.168.1.2</li><li class="second">Subnet Mask . . . . . . . . . . . : 255.255.255.0</li><li class="third">Default Gateway . . . . . . . . . : 192.168.1.254</li></ul></div></div>',	
							x:26+12,
							y:72.05, 
							width:396,
							height:148,
							size:11,							
							textAlign:"left"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	/* Second slide*/

	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"outputBox2.png",
							x:6,
							y:62,
							width:430,
							height:290.25,
							type:""},
							];								
	var slide_2_texts = [
							{compId:"ID_s2_title",
							x:20,
							y:2, 
							width:438,
							height:17,
							size:14,
							textAlign:"center"},
							
							{compId:"staticTxt2",
							bodyText:'<div class="ipconfigall"><div class="tab2">C:\\><b style="color:#000000">ipconfig /all</b> <br/>Ethernet adapter Network Connection:<br/><ul><li>Connection-specific DNS Suffix: example.com</li><li>Description . . . . . . . . . . . : Intel(R)</li>        <li>PRO/Wireless 3945ABG Network Connection</li>        <li class="physcialAddress">Physical Address. . . . . . . . . : 00-18-DE-C7-F3-FB</li>        <li>Dhcp Enabled. . . . . . . . . . . : Yes</li>        <li>Autoconfiguration Enabled . . . . : Yes</li>       <li> IP Address. . . . . . . . . . . . : 10.2.3.4</li>        <li>Subnet Mask . . . . . . . . . . . : 255.255.255.0</li>        <li>Default Gateway . . . . . . . . . : 10.2.3.254</li>        <li>DHCP Server . . . . . . . . . . . : 10.2.3.69</li>        <li>DNS Servers . . . . . . . . . . . : 192.168.226.120</li>        <li>Lease Obtained. . . . . . . . . . : Thursday, May 03, </li>         <li style="text-align:right;padding-right:18px">2007 3:47:51 PM</li><li>Lease Expires . . . . . . . . . . : Friday, May 04, </li> <li style="text-align:right;padding-right:22px">   2007 6:57:11 AM</li> </ul>   C:\\></div> </div>',	
							x:22.65+8,
							y:7.5+74-8, 
							width:400,
							height:388.85,
							size:11,							
							textAlign:"left"}];	
	
		
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};

/* second Slide ends*/
							
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			graphics:graphics_slide,
			slideObject:slides};
	
}
