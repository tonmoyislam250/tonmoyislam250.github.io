loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/TableSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "TABLE";
	var slide_1_images = [{name:"11_3_3_3.png",
							x:5.35,
							y:25.5, 
							width:460.25,
							height:370.65,
							type:"none"}];
	var slide_1_tables = [];				
	var slide_1_texts = [{compId:"staticTxt1",
							bodyText:'<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td colspan="4">Switch#<b>show version</b></td></tr><tr><td colspan="4">Cisco IOS Software, C2960 Software (C2960-LANBASE-M), Version 12.2(25)SEE2, RELEASE SOFTWARE (fc1)</td></tr><tr><td colspan="4">Copyright (c) 1986-2006 by Cisco Systems, Inc.</td></tr><tr><td colspan="4">Compiled Fri 28-Jul-06 04:33 by yenanh</td></tr><tr><td colspan="4">Image text-base: 0x00003000, data-base: 0x00AA2F34</td></tr><tr><td colspan="5">&nbsp;</td></tr><tr><td colspan="4">ROM: Bootstrap program is C2960 boot loader</td></tr><tr><td colspan="4">BOOTLDR: C2960 Boot Loader (C2960-HBOOT-M) Version 12.2(25r)SEE1, RELEASE SOFTWARE (fc1)</td></tr><tr><td colspan="4"></td></tr><tr><td colspan="4">Switch uptime is 2 minutes</td></tr><tr><td colspan="4">System returned to ROM by power-on</td></tr><tr><td colspan="4">System image file is "flash:c2960-lanbase-mz.122-25.SEE2/c2960-lanbase-mz.122-25.SEE2.bin"</td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td colspan="4">cisco WS-C2960-24TT-L (PowerPC405) processor (revision B0) with 61440K/4088K bytes of memory.</td></tr><tr><td colspan="4">Processor board ID FOC1107Z9ZN</td></tr><tr><td colspan="4">Last reset from power-on</td></tr><tr><td colspan="4">1 Virtual Ethernet interface</td></tr><tr><td colspan="4">24 FastEthernet interfaces</td></tr><tr><td colspan="4">2 Gigabit Ethernet interfaces</td></tr><tr><td colspan="4">The password-recovery mechanism is enabled.</td></tr><tr><td colspan="4">&nbsp;</td></tr><tr><td colspan="4">64K bytes of flash-simulated non-volatile configuration memory.</td></tr><tr><td colspan="3">Base ethernet MAC Address</td><td colspan="2">: 00:1B:53:03:17:00</td></tr><tr><td colspan="3">Motherboard assembly number</td><td colspan="2">: 73-10390-03</td></tr><tr><td colspan="3">Power supply part number</td><td colspan="2">: 341-0097-02</td></tr><tr><td colspan="3">Motherboard serial number</td><td colspan="2">: FOC11071TTJ</td></tr><tr><td colspan="3">Power supply serial number</td><td colspan="2">: AZS110605RU</td></tr><tr><td colspan="3">Model revision number</td><td colspan="2">: B0</td></tr><tr><td colspan="3">Motherboard revision number</td><td colspan="2">: C0</td></tr><tr><td colspan="3">Model number</td><td colspan="2">: WS-C2960-24TT-L</td></tr><tr><td colspan="3">System serial number</td><td colspan="2">: FOC1107Z9ZN</td></tr><tr><td colspan="3">Top Assembly Part Number</td><td colspan="2">: 800-27221-02</td></tr><tr><td colspan="3">Top Assembly Revision Number</td><td colspan="2">: C0</td></tr><tr><td colspan="3">Version ID</td><td colspan="2">: V02</td></tr><tr><td colspan="3">CLEI Code Number</td><td colspan="2">: COM3L00BRA</td></tr><tr><td colspan="3">Hardware Board Revision Number</td><td colspan="2">: 0x01</td></tr><tr><td colspan="5">&nbsp;</td></tr><tr><td colspan="5">&nbsp;</td></tr><tr><td width="50">Switch</td><td width="50">Ports</td><td width="115">Model</td><td width="100">SW Version</td><td width="140">SW Image</td></tr><tr><td>------</td><td>-----</td><td>-----</td><td>----------</td><td>----------</td></tr><tr><td>*&nbsp;&nbsp;&nbsp;&nbsp;1</td><td>26</td><td>WS-C2960-24TT-L </td><td> 12.2(25)SEE2</td><td>C2960-LANBASE-M</td></tr><tr><td colspan="5">&nbsp;</td></tr><tr><td colspan="5">&nbsp;</td></tr><tr><td colspan="4">Configuration register is 0xF</td></tr><tr><td colspan="5">&nbsp;</td></tr><tr><td colspan="4">Switch#</td></tr></table>',
							x:29.85,
							y:38.65,
							width:428,
							height:331,
							size:11,
                        	textAlign:"left"},];						
	var slide_graphics = [];		
	return {templateType:template_type,
			tables:slide_1_tables,
			texts:slide_1_texts,
			images:slide_1_images,
			graphics:slide_graphics};
}