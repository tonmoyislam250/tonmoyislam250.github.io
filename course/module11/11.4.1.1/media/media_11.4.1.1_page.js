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
	var commonTexts = [{compId:"ID_title",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"}];
							
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"11_4_1_1.png",
							x:5.35,
							y:48.7, 
							width:430,
							height:360.05,
							type:"none"}];		
	
	var slide_1_texts = [{compId:"ID_title_s1",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
						{compId:"staticTxt1",
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td colspan='7' class='innerHead'>Router#<b>show file systems</b></td></tr><tr><td colspan='7' class='innerHead'>File Systems:</td></tr><tr><td colspan='8'>&nbsp;</td></tr><tr><td width='5%'></td><td>Size(b)</td><td>Free(b)</td><td>Type</td><td>Flags</td><td>Prefixes</td><td ></td></tr><tr><td ></td><td>-</td><td>-</td><td>paque</td><td>rw</td><td>archive:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>opaque</td><td>rw</td><td>system:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>opaque</td><td>rw</td><td>tmpsys:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>opaque</td><td>rw</td><td>null:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>network</td><td>rw</td><td>tftp:</td><td ></td></tr><tr><td>*</td><td>256487424</td><td>183234560</td><td>disk</td><td>rw</td><td> flash0: </td><td>flash:#</td></tr><tr><td></td><td>-</td><td>-</td><td>disk</td><td>rw</td><td>flash1:</td><td ></td></tr><tr><td></td><td>262136</td><td>254779</td><td>nvram</td><td>rw</td><td>nvram:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>opaque</td><td>wo</td><td>syslog:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>opaque</td><td>rw</td><td>xmodem:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>opaque</td><td>rw</td><td>ymodem:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>network</td><td>rw</td><td>rcp:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>network</td><td>rw</td><td>http:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>network</td><td>rw</td><td>ftp:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>network</td><td>rw</td><td>scp:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>opaque</td><td>ro</td><td>tar:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>network</td><td>rw</td><td>https:</td><td ></td></tr><tr><td></td><td>-</td><td>-</td><td>opaque</td><td>ro</td><td>cns:</td><td ></td></tr></table>",
							x:27.85,
							y:62.65,
							width:398,
							height:304,
                        	textAlign:"right"},
							];		

    var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"11_4_1_1.png",
							x:5.35,
							y:48.7, 
							width:430,
							height:360.05,
							type:"none"}];		
	
	var slide_2_texts = [{compId:"ID_title_s2",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
						{compId:"staticTxt2",
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%' class='smallFont'><tr><td colspan='4' class='innerHead'>Router<b>#dir</b></td></tr><tr><td colspan='4' class='innerHead'>Directory of flash0:/</td></tr><tr><td colspan='5'>&nbsp;</td></tr><tr><td width='2%'>1</td><td width='8%'>-rw-</td><td width='13%'>2903</td><td width='38%' class='innerLeft'>&nbsp;Sep 7 2012 06:58:26 +00:00</td><td class='innerLeft' width='35%'>&nbsp;cpconfig-<br />&nbsp;19xx.cfg</td></tr><tr><td>2</td><td>-rw-</td><td>3000320</td><td class='innerLeft'>&nbsp;Sep 7 2012 06:58:40 +00:00</td><td class='innerLeft'>&nbsp;cpexpress.tar</td></tr><tr><td>3</td><td>-rw-</td><td>1038</td><td class='innerLeft'>&nbsp;Sep 7 2012 06:58:52 +00:00</td><td class='innerLeft'>&nbsp;home.shtml</td></tr><tr><td>4</td><td>-rw-</td><td>122880</td><td class='innerLeft'>&nbsp;Sep 7 2012 06:59:02 +00:00</td><td class='innerLeft'>&nbsp;home.tar</td></tr><tr><td>5</td><td>-rw-</td><td>1697952</td><td class='innerLeft'>&nbsp;Sep 7 2012 06:59:20 +00:00</td><td class='innerLeft'>&nbsp;securedesktop-<br />&nbsp;ios-3.1.1.45-k9.pkg</td></tr><tr><td>6</td><td>-rw-</td><td>415956</td><td class='innerLeft'>&nbsp;Sep 7 2012 06:59:34 +00:00</td><td class='innerLeft'>&nbsp;sslclient-win-<br />&nbsp;1.1.4.176.pkg</td></tr><tr><td>7</td><td>-rw-</td><td> 67998028 </td><td class='innerLeft'>&nbsp;Sep 26 2012 17:32:14 +00:00</td><td class='innerLeft'>&nbsp;c1900-<br />&nbsp;universalk9-<br />&nbsp;mz.SPA.152-4.M1.bin</td></tr><tr><td colspan='5'>&nbsp;</td></tr><tr><td colspan='5' class='innerHead'>256487424 bytes total (183234560 bytes free)</td></tr></table>",
							x:27.85,
							y:62.65,
							width:430,
							height:304,
                        	textAlign:"right"}
							];		

    var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};	
	
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"11_4_1_1.png",
							x:5.35,
							y:48.7, 
							width:430,
							height:360.05,
							type:"none"}];		
	
	var slide_3_texts = [{compId:"ID_title_s3",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
						{compId:"staticTxt3",
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td colspan='4' class='innerHead'>Router#<b>cd nvram:</b></td></tr><tr><td colspan='4' class='innerHead'>Router#<b>pwd</b></td></tr><tr><td colspan='4' class='innerHead'>nvram:/</td></tr><tr><td colspan='4' class='innerHead'>Router#<b>dir</b></td></tr><tr><td colspan='4' class='innerHead'>Directory of nvram:/</td></tr><tr><td colspan='4'>&nbsp;</td></tr><tr><td>253</td><td>-rw-</td><td>1156</td><td>&lt;no date&gt;</td><td width='40%' class='innerLeft'>&nbsp;startup-config</td></tr><tr><td>254</td><td>----</td><td>5</td><td>&lt;no date&gt;</td><td class='innerLeft'>&nbsp;private-config</td></tr><tr><td>255</td><td>-rw-</td><td>1156</td><td>&lt;no date&gt;</td><td class='innerLeft'>&nbsp;underlying-config</td></tr><tr><td>1</td><td>-rw-</td><td>2945</td><td>&lt;no date&gt;</td><td class='innerLeft'>&nbsp;cwmp_inventory</td></tr><tr><td>4</td><td>----</td><td>58</td><td>&lt;no date&gt;</td><td class='innerLeft'>&nbsp;persistent-data</td></tr><tr><td>5</td><td>-rw-</td><td>17</td><td>&lt;no date&gt;</td><td class='innerLeft'>&nbsp;ecfm_ieee_mib</td></tr><tr><td>6</td><td>-rw-</td><td>559</td><td>&lt;no date&gt;</td><td class='innerLeft'>&nbsp;IOS-Self-Sig#1.cer</td></tr><tr><td colspan='5'>&nbsp;</td></tr><tr><td colspan='5' class='innerHead'>262136 bytes total (254779 bytes free)</td></tr></table>",
							x:27.85,
							y:62.65,
							width:398,
							height:304,
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
