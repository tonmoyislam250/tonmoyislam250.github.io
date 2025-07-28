
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
							x:4.95,
							y:379, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"2_1_3_5.png",
							x:28.60,
							y:101, 
							width:379.85,
							height:174.05,
							type:""}];								
	var slide_1_texts = [{compId:"staticTxt",
							bodyText:"Switch><b>enable</b><br/>Switch#<b>configure terminal</b><br/>Enter configuration commands, one per line.<br /> End with CNTL/Z.<br/>Switch(config)#<b>interface vlan 1</b><br/>Switch(config-if)#<b>exit</b><br/>Switch(config)#<b>exit</b><br/>Switch#",
							x:55.35,
							y:122.05, 
							width:324.90,
							height:143.60,
							size:11,
							color:"#3c3d3f",
							textAlign:"left",
							}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"2_1_3_5_A.png",
							x:28.60,
							y:101, 
							width:379.85,
							height:139.95,
							type:""}];								
	var slide_2_texts = [{compId:"staticTxt1",
							bodyText:"Switch#<b>configure terminal</b><br/>Enter configuration commands, one per line.<br />End with CNTL/Z.</b><br/>Switch(config)#<b>vlan 1</b><br/>Switch(config-vlan)#<b>end</b><br/>Switch#",
							x:55.35,
							y:122.05, 
							width:324.90,
							height:143.60,
							size:11,
							color:"#3c3d3f",
							textAlign:"left",
							}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
							
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"2_1_3_5_B.png",
							x:28.60,
							y:101, 
							width:379.85,
							height:158.00,
							type:""}];								
	var slide_3_texts = [{compId:"staticTxt2",
							bodyText:"Switch#<b>configure terminal</b><br/>Enter configuration commands, one per line.<br />End with CNTL/Z.<br />Switch(config)#<b>line vty 0 4</b><br/>Switch(config-line)#<b>interface fastethernet 0/1</b><br/>Switch(config-if)#<b>end</b><br/>Switch#",
							x:55.35,
							y:122.05, 
							width:324.90,
							height:143.60,
							size:11,
							color:"#3c3d3f",
							textAlign:"left",
							}];							
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
