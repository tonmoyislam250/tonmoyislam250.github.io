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

    var slide_images = [{name:"10_3_3_4.png",
						x:7.35,
						y:67.9,
						width:475,
						height:440,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:19,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
						{compId:"staticTxt1",
							bodyText:'<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td colspan="6">S1(config)#<b>interface f0/6</b></td></tr><tr><td colspan="6">S1(config-if)#<b>no switchport</b></td></tr><tr><td colspan="6">S1(config-if)#<b>ip address 192.168.200.1 255.255.255.0</b></td></tr><tr><td colspan="6">S1(config-if)#<b>no shutdown</b></td></tr><tr><td colspan="6">S1(config-if)#<b>end</b></td></tr><tr><td colspan="6">S1#</td></tr><tr><td colspan="6">*Mar  1 00:15:40.115: %SYS-5-CONFIG_I: Configured from console by console</td></tr><tr><td colspan="6">S1#<b>show ip interface brief</b></td></tr><tr><td width="90">Interface</td><td width="75">IP-Address</td><td width="30">OK?</td><td width="45">Method</td><td width="125">Status</td><td width="30">Protocol</td></tr><tr><td>Vlan1</td><td>unassigned</td><td>YES</td><td>unset</td><td>administratively down</td><td>down</td></tr><tr><td>FastEthernet0/1</td><td>unassigned</td><td>YES</td><td>unset</td><td>down</td><td>down</td></tr><tr><td>FastEthernet0/2</td><td>unassigned</td><td>YES</td><td>unset</td><td>down</td><td>down</td></tr><tr><td>FastEthernet0/3</td><td>unassigned</td><td>YES</td><td>unset</td><td>down</td><td>down</td></tr><tr><td>FastEthernet0/4</td><td>unassigned</td><td>YES</td><td>unset</td><td>down</td><td>down</td></tr><tr><td>FastEthernet0/5</td><td>unassigned</td><td>YES</td><td>unset</td><td>down</td><td>down</td></tr><tr class="highlights"><td>FastEthernet0/6</td><td>192.168.200.1</td><td>YES</td><td>manual</td><td>up</td><td>up</td></tr><tr><td>FastEthernet0/7</td><td>unassigned</td><td>YES</td><td>unset</td><td>up</td><td>up</td></tr><tr><td>FastEthernet0/8</td><td>unassigned</td><td>YES</td><td>unset</td><td>up</td><td>up</td></tr><tr><td colspan="6">&lt;output omitted&gt;</td></tr></table>',/**/
							x:18.7+13,
							y:80.5,
							width:437.2,
							height:304,
							size:10,
                        	textAlign:"left"}];

    var slide_object = {images:slide_images,
        				texts:slide_texts};

    return {templateType:template_type,
       			 slideObject:slide_object};

}
