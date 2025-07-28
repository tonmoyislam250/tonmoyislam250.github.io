//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_3_2_4.png",
						x:12,
						y:10,
						width:395,
						height:244.35,
						type:"",
						scrollable:"YES",
						divId:"commonImageText",}];

     var slide_texts = [{compId:"staticTxt",
			bodyText:'<div class="textStyling">Router#<b>show version</b><br/><br/><span style="color:#F68026;font-weight:bold;">Cisco IOS Software, C1900 Software (C1900-UNIVERSALK9-M),<br/>Version 15.2(4)M1, RELEASE SOFTWARE (fc1)</span><br/><br/>Technical Support: http://www.cisco.com/techsupport<br/>Copyright (c) 1986-2012 by Cisco Systems, Inc.<br/>Compiled Thu 26-Jul-12 19:34 by prod_rel_team<br/><br/><span style="color:#F68026;font-weight:bold;">ROM: System Bootstrap, Version 15.0(1r)M15, RELEASE SOFTWARE (fc1)</span><br/><br/>Router uptime is 10 hours, 9 minutes<br/>System returned to ROM by power-on<br/><span style="color:#F68026;font-weight:bold;">System image file is "flash0:c1900-universalk9-mz.SPA.152-4.M1.bin"</span><br/>Last reload type: Normal Reload<br/>Last reload reason: power-on<br/><br/><span id="lazytext">&#60;Output omitted&#62;</span><br/><br/><span style="color:#F68026;font-weight:bold;">Cisco CISCO1941/K9 (revision 1.0) with 446464K/77824K bytes of memory.</span><br/>Processor board ID FTX1636848Z<br/><span style="color:#F68026;font-weight:bold;">2 Gigabit Ethernet interfaces</span><br/><span style="color:#F68026;font-weight:bold;">2 Serial(sync/async) interfaces</span><br/>1 terminal line<br/>DRAM configuration is 64 bits wide with parity disabled.<br/><span style="color:#F68026;font-weight:bold;">255K bytes of non-volatile configuration memory.</span><br/><span style="color:#F68026;font-weight:bold;">250880K bytes of ATA System CompactFlash 0 (Read/Write)</span><br/><br/><span id="lazytext">&#60;Output omitted&#62;</span><br/><br/>Technology Package License Information for Module:&#39;c1900&#39;<br/><br/><table id="Id_table" border="0" cellspacing="0" cellpadding="0" width="76%"> <tr><td id="td1" width="182">---------------</td><td id="td2"  width="182" colspan="2">----------------------------</td><td width="183" id="td3">------------------</td> </tr><tr><td  rowspan="2">Technology</td><td colspan="2"> Technology-package </td><td >Technology-package</td></tr><tr><td width="51" >Current</td><td width="68" >Type</td><td>Next  reboot</td></tr><tr><td>---------------</td><td colspan="2">----------------------------</td><td>------------------</td></tr><tr><td>ipbase</td><td>ipbasek9</td><td>Permanent</td><td>ipbasek9</td></tr><tr><td>security </td><td>None</td><td>None</td><td>None</td></tr><tr><td>data</td><td>None</td><td>None</td><td>None</td></tr></table><br/><br/>Configuration register is 0x2142 (will be 0x2102 at next reload)<br/><br/>Router#<br/><br/></div>',
			x:29,
			y:39-18, 
			width:415.25,						
			height:244.35,	
			size:11,
			color:"#393536",
			textAlign:"left"}];	

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}


