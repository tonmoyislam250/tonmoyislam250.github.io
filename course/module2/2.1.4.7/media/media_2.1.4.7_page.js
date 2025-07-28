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
   var slide_1_images = [{name:"2.1.4.7.png",
							x:0,
							y:6, 
							width:445,
							height:355,
							type:""}];							
	
					
	var slide_1_texts = [{compId:"ID_s1_txt01",
							x:14,
							y:360,
							width:418,
							height:15,
							size:11,
							textAlign:"left"},

						    {compId:"staticTxt",
							bodyText:'Router#<b>show version</b><br/>Cisco IOS Software, C1900 Software (C1900-UNIVERSALK9-M), Version 15.2(4)M1, RELEASE SOFTWARE (fc1)<br/>Technical Support: http://www.cisco.com/techsupport<br/>Copyright (c) 1986-2012 by Cisco Systems, Inc.<br/>Compiled Thu 26-Jul-12 19:34 by prod_rel_team<br/><br/>ROM: System Bootstrap, Version 15.0(1r)M15, RELEASE SOFTWARE (fc1)<br/><br/>cisco1941 uptime is 41 minutes<br/>System returned to ROM by power-on<br/>System image file is ""flash0:c1900-universalk9-mz.SPA.152-4.M1.bin""<br/>Last reload type: Normal Reload<br/>Last reload reason: power-on<br/><br/><br/>This product contains cryptographic features and is subject to United<br/>States and local country laws governing import, export, transfer and<br/>use. Delivery of Cisco cryptographic products does not imply<br/>third-party authority to import, export, distribute or use encryption.<br/>Importers, exporters, distributors and users are responsible for<br/>compliance with U.S. and local country laws. By using this product you agree to comply with applicable laws and regulations. If you are unable<br/> --More-- ',
							x:26,
							y:22, 
							width:400,
							height:270,
							size:10,
							
							textAlign:"left",
							}];

							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,							
							texts:slide_1_texts,
							};
							
   var slide_2_type = "IMAGE";
   var slide_2_images = [{name:"2.1.4.7.png",
							x:0,
							y:6, 
							width:445,
							height:355,
							type:""}];							
	
					
	var slide_2_texts = [{compId:"ID_s2_txt01",
							x:14,
							y:360,
							width:418,
							height:15,
							size:11,
							textAlign:"left"},

						    {compId:"staticTxt1",
							bodyText:'Switch#<b>show version</b><br/>Cisco IOS Software, C2960 Software (C2960-LANBASEK9-M), Version 15.0(2)SE, RELEASE SOFTWARE (fc1)<br/>Technical Support: http://www.cisco.com/techsupport<br/>Copyright (c) 1986-2012 by Cisco Systems, Inc.<br/>Compiled Sat 28-Jul-12 00:29 by prod_rel_team<br/><br/>ROM: Bootstrap program is C2960 boot loader<br/>BOOTLDR: C2960 Boot Loader (C2960-HBOOT-M) Version 12.2(53r)SEY3, RELEASE SOFTWARE (fc1)<br/><br/>Switch uptime is 44 minutes<br/>System returned to ROM by power-on<br/>System image file is ""flash:/c2960-lanbasek9-mz.150-2.SE.bin""<br/><br/><br/>This product contains cryptographic features and is subject to United<br/>States and local country laws governing import, export, transfer and<br/>use. Delivery of Cisco cryptographic products does not imply<br/>third-party authority to import, export, distribute or use encryption.<br/>Importers, exporters, distributors and users are responsible for<br/>compliance with U.S. and local country laws. By using this product you<br/>agree to comply with applicable laws and regulations. If you are unable<br/>to comply with U.S. and local laws, return this product immediately.<br/><br/> --More-- ',
							x:26,
							y:20, 
							width:400,
							height:270,
							size:10, 
							textAlign:"left",
							}];

							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,							
							texts:slide_2_texts,
							};
							
	
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,			
			slideObject:slides};
	
}



// code below is needed for html5 content from Flash CS6
//loadScript("../../../common/scripts/createJS_bundle.min.js", null);
//loadScript("media_2.2.1.2_graphic.js", null);
