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
	
	var slide_1_images = [{name:"10_2_1_6_A.png",
							 x:2.85,
							 y:97.25, 
							 width:440.5,
							 height:159,
							 size:11,
							 type:""}];		
							 						
	var slide_1_texts = [{compId:"ID_s1_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							expand:"down",
							textAlign:"center"},
							
						{compId:"ID_txt20",
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td colspan='6'>Router#<b>show ip arp</b></td></tr><tr><td colspan='6'>&nbsp;</td></tr><tr><td colspan='2'>&nbsp;</td><td align='center'>Age</td><td colspan='4'>&nbsp;</td></tr><tr><td>Protocol</td><td style='width:40px;'>Address</td><td align='center'>(min)</td><td style='padding-left:5px'>Hardware Addr</td><td style='padding:0 6px 0 0'>Type</td><td>Interface</td></tr><tr><td>Internet</td><td>172.16.233.229</td><td align='center'>-</td><td style='padding-left:5px'>0000.0c59.f892</td><td>ARPA</td><td>Ethernet0/0</td></tr><tr><td>Internet</td><td>172.16.233.218</td><td align='center'>-</td><td style='padding-left:5px'>0000.0c07.ac00</td><td>ARPA</td><td>Ethernet0/0</td></tr><tr><td>Internet</td><td>172.16.168.11</td><td align='center'>-</td><td style='padding-left:5px'>0000.0c63.1300</td><td>ARPA</td><td>Ethernet0/0</td></tr><tr><td>Internet</td><td>172.16.168.254</td><td align='center'>9</td><td style='padding-left:5px'>0000.0c36.6965</td><td>ARPA</td><td>Ethernet0/0</td></tr></table>",
							x:2.85+22,
							y:125.25+12-30, 
							width:410.5,
							height:263,
							size:11,
							color:"#3c3d3f",
							textAlign:"left",
							},
							
							];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"10_2_1_6_B.png",
							 x:21,
							 y:68, 
							 width:419,
							 height:300,
							 size:10,
							 type:""}];	
							 							
	var slide_2_texts = [{compId:"ID_s2_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							expand:"down",
							textAlign:"center"},
							
						{compId:"ID_txt20",
							bodyText:"<table id='table02' width='384'  border='0' cellpadding='0' cellspacing='1' style='font-family:'Courier New !important'><tr><td colspan='3'>C:&#92;><b>arp -a</b></td></tr><tr/><tr/><tr/><tr/><tr/><tr><td colspan='3'>Interface: 192.168.1.67 --- 0xa</td></tr><tr  ><td width='100'><div align='left'>Internet Address </div></td><td width='100'><div align='left'>Physical Address</div></td><td width='100'><div align='left'>Type</div></td></tr><td width='100'><div align='left'>192.168.1.254</div></td><td width='100'><div align='left'>64-0f-29-0d-36-91</div></td><td width='100'><div align='left'>dynamic</div></td></tr><tr><td width='100'><div align='left'>192.168.1.255</div></td><td width='100'><div align='left'> ff-ff-ff-ff-ff-ff </div></td><td width='100'><div align='left'>static</div></td></tr><tr><td width='100'><div align='left'>224.0.0.22</div></td><td width='100'><div align='left'>01-00-5e-00-00-16</div></td><td width='100'><div align='left'>static</tr><tr><td width='100'><div align='left'>224.0.0.251</div></td><td width='100'><div align='left'> 01-00-5e-00-00-fb</div></td><td width='100'><div align='left'>static</div></td></tr><tr><td width='100'><div align='left'>224.0.0.252</div></td><td width='100'><div align='left'> 01-00-5e-00-00-fc</div></td><td width='100'><div align='left'>static</div></td></tr><tr><td width='100'><div align='left'>255.255.255.255</div></td><td width='100'><div align='left'>ff-ff-ff-ff-ff-ff</div></td><td width='100'><div align='left'>static</div></td></tr><tr/><tr/><tr/><tr/><tr/><td colspan='3' style='padding-top:10px'>Interface: 10.82.253.91 --- 0x10</td></tr></tr><tr><td width='100'><div align='left'>Internet Address </div></td><td width='100'><div align='left'>Physical Address</div></td><td width='100'><div align='left'>Type</div></td></tr><tr><td width='100'><div align='left'>10.82.253.92</div></td><td width='100'><div align='left'>64-0f-29-0d-36-91</div></td><td width='100'><div align='left'>dynamic</div></td></tr><tr><td width='100'><div align='left'>224.0.0.22</div></td><td width='100'><div align='left'>01-00-5e-00-00-16</div></td><td width='100'><div align='left'>static</div></td></tr><tr><td width='100'><div align='left'>224.0.0.251</div></td><td width='100'><div align='left'>01-00-5e-00-00-fb</div></td><td width='100'><div align='left'>static</tr><tr><td width='100'><div align='left'> 224.0.0.252</div></td><td width='100'><div align='left'>01-00-5e-00-00-fc</div></td><td width='100'><div align='left'>static</div></td></tr><tr><td width='100'><div align='left'>255.255.255.255</div></td><td width='100'><div align='left'>ff-ff-ff-ff-ff-ff</div></td><td width='100'><div align='left'>static</div></td></tr></table>",
							x:46,
							y:82.25, 
							width:432,
							height:263,
							size:11,
							scroll:"yes",
							color:"#3c3d3f",
							textAlign:"left",
							},
							{compId:"ID_s1_txt01",
							x:7,
							y:152, 
							width:104,
							height:17,
							size:10,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:9,
							y:365, 
							width:104,
							height:17,
							size:10,
							textAlign:"center"}
							];							
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
