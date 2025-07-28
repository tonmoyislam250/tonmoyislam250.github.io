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
    var commonTexts = [{compId:"ID_inst",
        x:5,
        y:379,
        width:460,
        height:17,
        size:12,
        textAlign:"left"}];
    
	var slide_1_type = "MULTI_BUTTON";	
	var slide_1_buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
								overSkinImage:"../../../common/images/text_button_gradient_selected.png",
								normalTextStyle:'#FFFFFF',
								overTextStyle:'#006699',
								cornorRadius:5,
								selected:0};
						
	var slide_1_buttons = [{compId:"ID_btn01",/*1*/
								x:96.35,
								y:359.85,
								width:107.95,
								height:21,
								size:11,
								textAlign:"center"},
								
						   {compId:"ID_btn02",/*2*/
								x:238.35,
								y:359.85,
								width:107.95,
								height:21,
								size:11,
								textAlign:"center"}];
								
	var slide_1_buttonObject = {style:slide_1_buttonStyle,
								buttons:slide_1_buttons};
	
	var common_images = [{name:"11_3_4_4_A.png",
							x:0,
							y:50.5,
							width:445,
							height:320.05,
							type:""}];
							
	var commonTexts = [{compId:"ID_title",
								x:5,
								y:2, 
								width:430,
								height:17,
								size:14,
								textAlign:"center"}];
	var slide_texts = [];
	
	var slide_1_1_type = "DESCRIPTION";
	var slide_1_1_images = [];	
												
	var slide_1_1_dragtextboxs = [];
	
	var slide_1_1_textboxs = [];	
													
	var slide_1_1_texts = [{compId:"staticTxt",
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td colspan='6'>R1#<b>show ip interface brief</b></td></tr><tr><td width='40'>Interface</td><td width='40'>IP-Address</td><td width='20'>OK?&nbsp;&nbsp;</td><td width='40'>Method</td><td width='40'>Status</td><td width='40'>Protocol</td></tr><tr><td>FastEthernet0/0</td><td>192.168.254.254</td><td>YES&nbsp;&nbsp;</td><td>NVRAM</td><td>up</td><td>&nbsp;up</td></tr><tr><td>FastEthernet0/1/0</td><td>unassigned</td><td>YES&nbsp;&nbsp;</td><td>unset</td><td>down</td><td>&nbsp;down</td></tr><tr><td>Serial0/0/0</td><td>172.16.0.254</td><td>YES&nbsp;&nbsp;</td><td>NVRAM</td><td>up</td><td>&nbsp;up</td></tr><tr><td>Serial0/0/1</td><td>unassigned</td><td>YES&nbsp;&nbsp;</td><td>unset</td><td>administratively</td><td>&nbsp;down</td></tr><tr><td colspan='4'>&nbsp;</td><td colspan='2'>down</td></tr><tr><td colspan='6' class='blackfont'>---------------------------------------------------------------------</td></tr><tr><td colspan='6'>R1#<b>ping 192.168.254.1</b></td></tr><tr><td colspan='6'>Type escape sequence to abort.</td></tr><tr><td colspan='6'>Sending 5, 100-byte ICMP Echos to 192.168.254.1, timeout is 2 seconds:</td></tr><tr><td colspan='6'>!!!!!</td></tr><tr><td colspan='6'>Success rate is 100 percent (5/5), round-trip min/avg/max = 1/2/4 ms</td></tr><tr><td colspan='6' class='blackfont'>---------------------------------------------------------------------</td></tr><tr><td colspan='6'>R1#<b>traceroute 192.168.0.1</b></td></tr><tr><td colspan='6'>Type escape sequence to abort.</td></tr><tr><td colspan='6'>Tracing the route to 192.168.0.1</td></tr><tr><td colspan='6'>&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;172.16.0.253 8 msec 4 msec 8 msec</td></tr><tr><td colspan='6'>&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;10.0.0.254 16 msec 16 msec 8 msec</td></tr><tr><td colspan='6'>&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;192.168.0.1 16 msec * 20 msec</td></tr></table>",	
							x:23,
							y:72.05-9, 
							width:416,
							height:150,
							size:10,							
							textAlign:"left"}];
							
	var slide_1_1_graphics = [];	

	var slide_1_1_object = {templateType:slide_1_1_type,
							x:0,
							y:0,
							images:slide_1_1_images,							
							dragtextboxs:slide_1_1_dragtextboxs,
							textboxs:slide_1_1_textboxs,
							graphics:slide_1_1_graphics,
							texts:slide_1_1_texts};
								
	var slide_1_2_type = "DESCRIPTION";
	var slide_1_2_images = [];							
	var slide_1_2_dragtextboxs = [];
	var slide_1_2_textboxs = [];
															
	var slide_1_2_texts = [{compId:"staticTxt",
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td colspan='6'>S1#<b>show ip interface brief</b></td></tr><tr><td width='40'>Interface</td><td width='40'>IP-Address</td><td width='20'>OK?&nbsp;</td><td width='40'>Method</td><td width='80'>Status</td><td width='40'>Protocol</td></tr><tr><td>Vlan1</td><td>192.168.254.250</td><td>YES&nbsp;</td><td>manual</td><td>up</td><td>up</td><td><tr><td>FastEthernet0/1</td><td>unassigned</td><td>YES&nbsp;</td><td>unset</td><td>down</td><td>up</td><td><tr><td>FastEthernet0/2</td><td>unassigned</td><td>YES&nbsp;</td><td>unset</td><td>up</td><td>up</td><td><tr><td>FastEthernet0/3</td><td>unassigned</td><td>YES&nbsp;</td><td>unset</td><td>up</td><td>up</td><td><tr><td colspan='6'><output omitted></td><td><tr><td colspan='6' class='blackfont'>---------------------------------------------------------------------</td></tr><tr><td colspan='6'>S1#<b>ping 192.168.254.1</b></td></tr><tr><td colspan='6'>Type escape sequence to abort.</td></tr><tr><td colspan='6'>Sending 5, 100-byte ICMP Echos to 192.168.254.1, timeout is 2 seconds:</td></tr><tr><td colspan='6'>!!!!!</td></tr><tr><td colspan='6'>Success rate is 100 percent (5/5), round-trip min/avg/max = 1/2/4 ms</td></tr><tr><td colspan='6' class='blackfont'>---------------------------------------------------------------------</td></tr><tr><td colspan='6'>S1#<b>traceroute 192.168.0.1</b></td></tr><tr><td colspan='6'>Type escape sequence to abort.</td></tr><tr><td colspan='6'>Tracing the route to 192.168.0.1</td></tr><tr><td colspan='6'>&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;192.168.254.254 4 msec 2 msec 3 msec</td></tr><tr><td colspan='6'>&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;172.16.0.253 8 msec 4 msec 8 msec</td></tr><tr><td colspan='6'>&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;10.0.0.254 16 msec 16 msec 8 msec</td></tr><tr><td colspan='6'>&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;192.168.0.1 16 msec * 20 msec</td></tr></table>",	
							x:23,
							y:72.05-10, 
							width:416,
							height:150,
							size:10,							
							textAlign:"left"}];	
													
	var slide_1_2_object = {templateType:slide_1_2_type,
							x:0,
							y:0,
							images:slide_1_2_images,							
							dragtextboxs:slide_1_2_dragtextboxs,
							textboxs:slide_1_2_textboxs,
							texts:slide_1_2_texts};							
	
										
	var slide_1_slides = [slide_1_1_object,slide_1_2_object];
						
	var slide_1_object = {templateType:slide_1_type,
							 x:0,
							 y:0,
							textObject:slide_texts,
							images:common_images,
							buttonObject:slide_1_buttonObject,
							slideObject:slide_1_slides};

/* Second slide*/

	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"11_3_4_4_B.png",
							x:9.6,
							y:200.35,
							width:420.85,
							height:78.45,
							type:""}];
															
	var slide_2_texts = [{compId:"staticTxt2",
							bodyText:'192.168.254.1',	
							x:2,
							y:218+40, 
							width:92,
							height:17,
							size:11,							
							textAlign:"center"},
							
						{compId:"ID_s1_txt01",
							x:355.95+10,
							y:186.2+37, 
							width:81.25,
							height:17,
							size:11,							
							textAlign:"center",
							expand:"up+down"},
							
						{compId:"staticTxt3",
							bodyText:'192.168.254.250',	
							x:94,
							y:156.55+40, 
							width:92,
							height:17,
							size:11,							
							textAlign:"center"},
							
						{compId:"staticTxt4",
							bodyText:'Fa0/0<br />192.168.254.254',	
							x:157.45+11,
							y:194.05+36, 
							width:92,
							height:17,
							size:11,							
							textAlign:"left"},
							
						{compId:"staticTxt5",
							bodyText:'S0/0/0<br />172.16.2.0.254',	
							x:273.9+6,
							y:194.05+33, 
							width:79.05,
							height:17,
							size:11,							
							textAlign:"left"}];	
		
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};

/* second Slide ends*/


	var slides = [slide_2_object,slide_1_object];
	  
    return {templateType:template_type,
        textObject:commonTexts,		
        slideObject:slides};
}