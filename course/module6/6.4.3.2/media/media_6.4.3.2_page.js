
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
	var commonImages = [];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"6_4_3_2.png",
							x:11.8,
							y:171.45, 
							width:425.6,
							height:156.9,
							type:""},
							{name:"outputBox.png",
							x:211,
							y:1, 
							width:232,
							height:192,
							type:""},];								
	var slide_1_texts = [{compId:"outputBox",
							bodyText:'<div>S1#<span class="bold">show running-config</span><br/>Building configuration...<br/>!<br/><span style="font-family:"Arial">&#60;Output omitted&#62;</span><br/>service password-encryption<br/>!<br/>hostname S1<br/>!<br/>Interface Vlan1<br/><span style="color:#F26200;font-weight:bold;">ip address 192.168.10.50</span><br/>!<br/><span style="color:#F26200;font-weight:bold;">ip default-gateway 192.168.10.1</span><br/>&#60;Output omitted&#62;</div>',

							x:236,
							y:13, 
							width:196,
							height:220,
							size:10,
							scroll:"no",
							color:"#3c3d3f",
							textAlign:"left",
							},
							{compId:"pc1",
							bodyText:'PC1',
							x:28,
							y:208.75,
							width:25.65,
							height:17,
							size:10,
							color:"#ffffff",
                        	textAlign:"center"},
							{compId:"pc1",
							bodyText:'PC2',
							x:28,
							y:297.5,
							width:25.65,
							height:17,
							size:10,
							color:"#ffffff",
                        	textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.10',
							x:58.95,
							y:214.15,
							width:22.55,
							height:17,
							size:11,
                        	textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.11',
							x:58.95,
							y:302.15,
							width:22.55,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'S1',
							x:114,
							y:263.8,
							width:39.15,
							height:17,
                            size:10,
							color:"#ffffff",
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.50',
							x:138,
							y:280,
							width:39.15,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.1<br/>G0/1',
							x:165.05+8,
							y:251.65,
							width:30.8,
							height:17,
                            size:11,
							textAlign:"right"},
							{compId:"staticTxt",
							bodyText:'.1<br/>G0/1',
							x:253.55,
							y:251.45,
							width:30.8,
							height:17,
                            size:11,
							textAlign:"left"},
							{compId:"staticTxt1",
							bodyText:'S2',
							x:293.3,
							y:265.8,
							width:39.15,
							height:17,
                            size:10,
							color:"#ffffff",
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'R1',
							x:205,
							y:271,
							width:46.8,
							height:17,
                            size:10,
							color:"#ffffff",
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'192.168.10.0/24',
							x:154.9,
							y:236.4,
							width:95.7,
							height:17,
                            size:11,
							textAlign:"left"},
							{compId:"staticTxt1",
							bodyText:'192.168.11.0/24',
							x:237.4+19,
							y:236.4,
							width:95.7,
							height:17,
                            size:11,
							textAlign:"left"},
							{compId:"ID_txt01",
							x:20,
							y:350.95,
							width:429.1,
							height:17,
                            size:11,
							textAlign:"left",
							expand:"left"},
							];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
							
	var slide_2_type = "SYNTAX_CHECKER";							
	var slide_2_texts = [{compId:"ID_SC_title",
							x:4,
							y:2, 
							width:390,
							height:17,
							size:11,								
							textAlign:"center"}];
												
	var slide_2_object = {templateType:slide_2_type,
								texts:slide_2_texts,
        						syntax:"sc1"};
								
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			slideObject:slides};
	
}
