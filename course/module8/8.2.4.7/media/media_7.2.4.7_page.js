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
    var commonTexts = [{	compId:"ID_title01",
							x:12,
							y:1, 
							width:438,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"}];

    var slide_1_type = "IMAGE";
    var slide_1_images = [{name:"gray_bg.png",
							x:21,
							y:98, 
							width:460,
							height:204,							
							type:""}];
    var slide_1_texts = [	{compId:"routertext",
							bodyText:'<div class="routerbox">R1(config) <b>#interface gigabitethernet 0/0</b><br/>R1(config-if) <b>#ipv6 address fe80::1 ?</b><br /><span>link-local Use link-local address</span><br/><br/>R1(config-if) <b>#ipv6 address fe80::1 link-local</b><br/>R1(config-if) <b>#exit</b><br/>R1(config) <b>#interface gigabitethernet 0/1</b><br/>R1(config-if) <b>#ipv6 address fe80::1 link-local</b><br/>R1(config-if) <b>#exit</b><br/>R1(config) <b>#interface serial 0/0/0</b><br/>R1(config-if) <b>#ipv6 address fe80::1 link-local</b><br/>R1(config-if) <b>#</b></div>',
							x:52-7,
							y:112, 
							width:420,
							height:190,
							size:11,							
							textAlign:"left",}]
							
	
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,			
        texts:slide_1_texts};


   var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"gray_bg.png",
							x:21,
							y:98, 
							width:460,
							height:204,							
							type:""},
							{name:"arrow.png",
							x:258-8,
							y:139-5, 
							width:64.2,
							height:93.15,							
							type:""}
							];								
	var slide_2_texts = [{compId:"routertext02",
							bodyText:'<table width="328" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4">R1<strong>#show ipv6 interface brief</strong></td> </tr> <tr> <td colspan="2">GigabitEthernet0/0</td> <td width="33">[up/up]</td> <td width="128">&nbsp;</td> </tr> <tr> <td width="36">&nbsp; </td> <td width="139" bgcolor="#FACCA8">FE80::1</td> <td bgcolor="#FACCA8">&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td>&nbsp;</td> <td>2001:DB8:ACAD:1::1</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td colspan="2">GigabitEthernet0/1</td> <td>[up/up]</td> <td>&nbsp;</td> </tr> <tr> <td>&nbsp;</td> <td bgcolor="#FACCA8">FE80::1</td> <td bgcolor="#FACCA8">&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td>&nbsp;</td> <td>2001:DB8:ACAD:2::1</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td colspan="2">Serial0/0/0</td> <td>[up/up]</td> <td>&nbsp;</td> </tr> <tr> <td>&nbsp;</td> <td bgcolor="#FACCA8">FE80::1</td> <td bgcolor="#FACCA8">&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td>&nbsp;</td> <td>2001:DB8:ACAD:3::1</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td colspan="2">Serial0/0/1</td> <td colspan="2">[administratively down/down]</td> </tr> <tr> <td>&nbsp;</td> <td>unassigned</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td>R1# </td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr></table>',
							x:52-7,
							y:112-3, 
							width:380,
							height:190,
							size:11,							
							textAlign:"left"},
							{compId:"ID_s2_txt01",
							x:270.2+43+18-6-13,
							y:147.15+24-8, 
							width:120,
							height:17.35,
							size:11,
							textAlign:"center",
							expand:"down"}
							]					
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