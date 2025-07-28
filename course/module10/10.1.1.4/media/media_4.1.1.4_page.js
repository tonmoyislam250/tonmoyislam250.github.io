loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BUTTON";
	var buttonStyle = {normalSkinImage:"../../../common/images/datagrid-bg.png",
						overSkinImage:"../../../common/images/datagrid-bg2.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:0,
						selected:0};
						
	var buttons = [{compId:"ID_btn01",/*DNS*/
						x:159,
						y:63+30,
						width:50,
						height:21,
						size:10,
						textAlign:"center"},
						{compId:"ID_btn02",/*BOOTP*/
						x:220,
						y:63+30,
						width:50,
						height:21,
						size:10,
						textAlign:"center"},
						{compId:"ID_btn03",/*DHCP*/
						x:220,
						y:87+30,
						width:50,
						height:21,
						size:10,
						textAlign:"center"},
						{compId:"ID_btn04",/*SMPT*/
						x:280,
						y:63+30,
						width:50,
						height:21,
						size:10,
						textAlign:"center"},
						{compId:"ID_btn05",/*POP*/
						x:280,
						y:87+30,
						width:50,
						height:21,
						size:10,
						textAlign:"center"},
						{compId:"ID_btn06",/*IMAP*/
						x:280,
						y:112+30,
						width:50,
						height:21,
						size:10,
						textAlign:"center"},
						{compId:"ID_btn07",/*FTP*/
						x:340,
						y:63+30,
						width:50,
						height:21,
						size:10,
						textAlign:"center"},
						{compId:"ID_btn08",/*TFTP*/
						x:340,
						y:87+30,
						width:50,
						height:21,
						size:10,
						textAlign:"center"},
						{compId:"ID_btn09",/*HTTP*/
						x:400,
						y:63+30,
						width:50,
						height:21,
						size:10,
						textAlign:"center"},
						];
						
	var buttonObject = {style:buttonStyle,
						buttons:buttons};
	var commonTexts = [{compId:"ID_s1_text30",
						x:15,
						y:382,
						width:440,
						height:17,
						size:11,
						textAlign:"left",
						expand:"up"},
						{compId:"ID_s1_text01",
						x:50,
						y:80+30,
						width:89.85,
						height:17.95,
						size:11,
						textAlign:"left"},
						{compId:"ID_s1_text02",
						x:164,
						y:30+30,
						width:60,
						height:29.55,
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_text04",
						x:225,
						y:30+30,
						width:60,
						height:29.55,
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_text07",
						x:285,
						y:30+30,
						width:60,
						height:29.55,
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_text11",
						x:345,
						y:30+30,
						width:60,
						height:29.55,
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_text14",
						x:406,
						y:30+30,
						width:60,
						height:29.55,
						size:11,
						textAlign:"center"}];
							
	var common_images = [{name:"4_1_1_4.jpg",
							x:10,
							y:50, 
							width:655.45,
							height:123.55,
							type:""}];
								
	var slide_1_type = "DESCRIPTION";
	var slide_1_images = [];							
	var slide_1_dragtextboxs = [{bodyCompId:"dnsBody",
						titleCompId:"DNSTitle",
						x:10,
						y:230,
						width:440,
						height:105,
						closeBtn:"yes",
						size:11,
						textAlign:"center"},];
	var slide_1_textboxs = [];							
	var slide_1_texts = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,							
							dragtextboxs:slide_1_dragtextboxs,
							textboxs:slide_1_textboxs,
							texts:slide_1_texts};
							
	var slide_2_type = "DESCRIPTION";
	var slide_2_images = [];							
	var slide_2_dragtextboxs = [{bodyCompId:"bootpBody",
						titleCompId:"BOOTPTitle",
						x:10,
						y:230,
						width:440,
						height:105,
						closeBtn:"yes",
						size:11,
						textAlign:"center"},];
	var slide_2_textboxs = [];							
	var slide_2_texts = [];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,							
							dragtextboxs:slide_2_dragtextboxs,
							textboxs:slide_2_textboxs,
							texts:slide_2_texts};
							
	var slide_3_type = "DESCRIPTION";
	var slide_3_images = [];							
	var slide_3_dragtextboxs = [{bodyCompId:"dhcpBody",
								titleCompId:"DHCPTitle",	
								x:0,
								y:220,
								width:440,
								height:105,
								closeBtn:"yes",
								size:11,
								textAlign:"center"}];
	var slide_3_textboxs = [];							
	var slide_3_texts = [];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,							
							dragtextboxs:slide_3_dragtextboxs,
							textboxs:slide_3_textboxs,
							texts:slide_3_texts};
							
	var slide_4_type = "DESCRIPTION";
	var slide_4_images = [];							
	var slide_4_dragtextboxs = [{bodyCompId:"smtpBody",
						titleCompId:"SMTPTitle",
						x:10,
						y:230,
						width:440,
						height:105,
						closeBtn:"yes",
						size:11,
						textAlign:"center"},];
	var slide_4_textboxs = [];							
	var slide_4_texts = [];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,							
							dragtextboxs:slide_4_dragtextboxs,
							textboxs:slide_4_textboxs,
							texts:slide_4_texts};
							
	
							
	var slide_5_type = "DESCRIPTION";
	var slide_5_images = [];							
	var slide_5_dragtextboxs = [{bodyCompId:"popBody",
						titleCompId:"POPTitle",
						x:10,
						y:230,
						width:440,
						height:105,
						closeBtn:"yes",
						size:11,
						textAlign:"center"},];
	var slide_5_textboxs = [];							
	var slide_5_texts = [];							
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,							
							dragtextboxs:slide_5_dragtextboxs,
							textboxs:slide_5_textboxs,
							texts:slide_5_texts};
	var slide_6_type = "DESCRIPTION";
	var slide_6_images = [];							
	var slide_6_dragtextboxs = [{bodyCompId:"imapBody",
						titleCompId:"IMAPTitle",
						x:10,
						y:230,
						width:440,
						height:105,
						closeBtn:"yes",
						size:11,
						textAlign:"center"},];
	var slide_6_textboxs = [];							
	var slide_6_texts = [];							
	var slide_6_object = {templateType:slide_6_type,
							x:0,
							y:0,
							images:slide_6_images,							
							dragtextboxs:slide_6_dragtextboxs,
							textboxs:slide_6_textboxs,
							texts:slide_6_texts};
							
	var slide_7_type = "DESCRIPTION";
	var slide_7_images = [];							
	var slide_7_dragtextboxs = [{bodyCompId:"ftpBody",
						titleCompId:"FTPTitle",
						x:10,
						y:230,
						width:440,
						height:105,
						closeBtn:"yes",
						size:11,
						textAlign:"center"},];
	var slide_7_textboxs = [];							
	var slide_7_texts = [];							
	var slide_7_object = {templateType:slide_7_type,
							x:0,
							y:0,
							images:slide_7_images,							
							dragtextboxs:slide_7_dragtextboxs,
							textboxs:slide_7_textboxs,
							texts:slide_7_texts};
							
	var slide_8_type = "DESCRIPTION";
	var slide_8_images = [];							
	var slide_8_dragtextboxs = [{bodyCompId:"tftpBody",
						titleCompId:"TFTPTitle",
						x:10,
						y:230,
						width:440,
						height:105,
						closeBtn:"yes",
						size:11,
						textAlign:"center"},];
	var slide_8_textboxs = [];							
	var slide_8_texts = [];							
	var slide_8_object = {templateType:slide_8_type,
							x:0,
							y:0,
							images:slide_8_images,							
							dragtextboxs:slide_8_dragtextboxs,
							textboxs:slide_8_textboxs,
							texts:slide_8_texts};
							
	var slide_9_type = "DESCRIPTION";
	var slide_9_images = [];							
	var slide_9_dragtextboxs = [{bodyCompId:"httpBody",
						titleCompId:"HTTPTitle",
						x:10,
						y:230,
						width:440,
						height:105,
						closeBtn:"yes",
						size:11,
						textAlign:"center"},];
	var slide_9_textboxs = [];							
	var slide_9_texts = [];							
	var slide_9_object = {templateType:slide_9_type,
							x:0,
							y:0,
							images:slide_9_images,							
							dragtextboxs:slide_9_dragtextboxs,
							textboxs:slide_9_textboxs,
							texts:slide_9_texts};
							
																										
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object,slide_6_object,slide_7_object,slide_8_object,slide_9_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:common_images,
			buttonObject:buttonObject,
			slideObject:slides};
	
}



