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
	var slide_1_images = [{name:"11_4_2_4_A.png",
							x:0,
							y:10, 
							width:440,
							height:390,
							type:"none"}];		
	
	var slide_1_texts = [{compId:"ID_txt01",
							 x:209.3,
							 y:357.85+8,
							 width:215,
							 height:17,
							 size:11,
							 textAlign:"center"},
						{compId:"staticTxt1",
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td colspan='6' class='leftfloat'>R1#<b>show file systems</b></td></tr><tr><td colspan='6' class='leftfloat'>File Systems:</td></tr><tr><td colspan='6'>&nbsp;</td></tr><tr><td width='30px'>&nbsp;</td><td width='96px'>Size(b)</td><td width='96px'>Free(b)</td><td width='74px'>Type</td><td width='45px'>Flags</td><td width='110px' class='leftfloat'>&nbsp;Prefixes</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>opaque</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;archive:</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>opaque</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;system:</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>opaque</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;tmpsys:</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>opaque</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;null:</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>network</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;tftp:</td></tr><tr><td>*</td><td>256487424</td><td>184819712</td><td>disk</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;flash0:flash:#</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>disk</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;flash1:</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>262136</td><td>249270</td><td>nvram</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;nvram:</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>opaque</td><td>wo</td><td class='leftfloat'>&nbsp;&nbsp;syslog:</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>opaque</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;xmodem:</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>opaque</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;ymodem:</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>network</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;rcp:</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>network</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;http:</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>network</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;ftp:</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>network</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;scp:</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>opaque</td><td>ro</td><td class='leftfloat'>&nbsp;&nbsp;tar:</td></tr><tr><td>&nbsp;</td><td>-</td><td>-</td><td>network</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;https:</td></tr><tr><td> &nbsp;</td><td>-</td><td>-</td><td>opaque</td><td>ro</td><td class='leftfloat'>&nbsp;&nbsp;cns:</td></tr><tr><td>&nbsp;</td><td>4050042880</td><td>3774152704</td><td>usbflash</td><td>rw</td><td class='leftfloat'>&nbsp;&nbsp;usbflash0:</td></tr></table>",
							x:22.85,
							y:20.00,
							width:410,
							height:304,
							size:11,
                        	textAlign:"right"}];	

    var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"11_4_2_4_B.png",
							x:0,
							y:10.25,
							width:440,
							height:75.45,
							type:"none"},
						 {name:"11_4_2_4_C.png",
							x:0,
							y:161.95, 
							width:440,
							height:390.05,
							type:"none"}
							];		
	
	var slide_2_texts = [{compId:"ID_txt02",
							 x:22.85-5,
							 y:99.85-15,
							 width:423,
							 height:17,
							 size:11,
							 textAlign:"left"},
						{compId:"ID_txt03",
							 x:22.85-5,
							 y:275.85-15,
							 width:423,
							 height:17,
							 size:11,
							 textAlign:"left"},
						{compId:"staticTxt2_1",
							bodyText:"<p>R1#<b>copy running-config usbflash0:/   ()</b><br />Destination filename[running-config]? R1-Config<br />5024 bytes copied in 0.736 secs (6826 bytes/sec)<br /></p>",
							x:31.85-9,
							y:33-11,
							width:430,
							height:304,
							size:11,
                        	textAlign:"left"},
						{compId:"staticTxt2_2",
							bodyText:"<p>R1#<b>copy running-config usbflash0:/</b><br />Destination filename [running-config]? R1-Config<br />%Warning:There is a file already existing with this name<br />Do you want to over write? [confirm]<br />5024 bytes copied in 1.796 secs (2797 bytes/sec)<br /></p>",
							x:31.85-9,
							y:183.35-10,
							width:440,
							height:304,
							size:11,
                        	textAlign:"left"}];		
	
    var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};	
	
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"11_4_2_4_D.png",
							x:0,
							y:10.25, 
							width:440,
							height:430,
							type:"none"}];	
		
	
	var slide_3_texts = [{compId:"staticTxt3",
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td colspan='4' class='leftfloat'>R1#<b>dir usbflash0:/</b></td></tr><tr><td colspan='4' class='leftfloat'>Directory of usbflash0:/</td></tr><tr><td width='20'>1</td><td width='35'>drw-</td><td width='40'>0</td><td width='190'>Oct 15 2010 16:28:30 +00:00</td><td width='80' align='center'>Cisco</td></tr><tr><td>16</td><td>-rw-</td><td>5024</td><td>Jan 7 2013 20:26:50 +00:00</td><td align='center'>R1-Config</td></tr><tr><td colspan='4'>&nbsp;</td></tr><tr><td colspan='4' class='leftfloat'>4050042880 bytes total (3774144512 bytes free)</td></tr><tr><td colspan='4' class='leftfloat'>R1#<b>more usbflash0:/R1-Config</b></td></tr><tr><td colspan='4' class='leftfloat'>!</td></tr><tr><td colspan='4' class='leftfloat'>! Last configuration change at 20:19:54 UTC Mon Jan 7 2013 by admin version 15.2</td></tr><tr><td colspan='4' class='leftfloat'>service timestamps debug datetime msec</td></tr><tr><td colspan='4' class='leftfloat'>service timestamps log datetime msec</td></tr><tr><td colspan='4' class='leftfloat'>no service password-encryption</td></tr><tr><td colspan='4' class='leftfloat'>!</td></tr><tr><td colspan='4' class='leftfloat'>hostname R1</td></tr><tr><td colspan='4' class='leftfloat'>!</td></tr><tr><td colspan='4' class='leftfloat'>boot-start-marker</td></tr><tr><td colspan='4' class='leftfloat'>boot-end-marker</td></tr><tr><td colspan='4' class='leftfloat'>!</td></tr><tr><td colspan='4' class='leftfloat'>!</td></tr><tr><td colspan='4' class='leftfloat' >logging buffered 51200 warnings</td></tr><tr><td colspan='4' class='leftfloat'>!</td></tr><tr><td colspan='4' class='leftfloat'>no aaa new-model</td></tr><tr><td colspan='4' class='leftfloat'>!</td></tr><tr><td colspan='4' class='leftfloat'>no ipv6 cef</td></tr></table>",
							 x:22.85,
							 y:22.65,
							 width:410,
							 height:362.05,
							 size:11,
                        	textAlign:"right"}
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
