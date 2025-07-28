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

    var slide_images = [{name:"11_2_4_4_A.png",
							x:24.85,
							y:3.15,
							width:366.95,
							height:70.2,
							type:""},
						
						{name:"11_2_4_4_B.png",
							x:14.85,
							y:78.15,
							width:462,
							height:220,
							type:""},
							
						{name:"11_2_4_4_C.png",
							x:18.85,
							y:301,
							width:412.7,
							height:210.35,
							type:""}
						];

    var slide_texts = [{compId:"ID_txt01",
							x:10+25,
							y:299.1+14, 
							width:433.85,
							height:91.4,
							size:11,
							textAlign:"left",
							expand:"down",},
							
						{compId:"ID_txt02",
							x:124.2,
							y:29.45, 
							width:37.15,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							
						{compId:"ID_txt03",
							bodyText:"<b>R1</b>",
							x:62.2+12,
							y:58.05, 
							width:55.45,
							height:17,
							size:11,
							color:"white",
							textAlign:"center",
							expand:"up"},
							
						{compId:"ID_txt04",
							bodyText:"<b>R2</b>",
							x:336+11,
							y:23.9+4, 
							width:55.45,
							height:17,
							size:11,
							color:"white",
							textAlign:"center",
							expand:"up"},
							
						{compId:"ID_txt05",
							bodyText:"S0/0/0",
							x:116+9,
							y:17.25, 
							width:35.95,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							
						{compId:"ID_txt06",
							bodyText:"Fa0/1",
							x:308.1,
							y:6.45, 
							width:32.25,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							
						{compId:"ID_txt07",
							bodyText:"S0/0/0",
							x:306.05,
							y:24.8, 
							width:35.95,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							
						{compId:"ID_txt08",
							bodyText:"Fa0/0",
							x:27.85+11,
							y:37.15, 
							width:32.2,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							
						{compId:"static_txt",
							bodyText:"<table width='304' border='0' cellspacing='0' cellpadding='0'><tr><td width='304'>R1# conf t</td></tr><tr><td>R1(config)<strong># ip domain-name span.com</strong></td></tr><tr><td>R1(config)<strong># crypto key generate rsa general-keys modulus 1024</strong></td></tr><tr><td>The name for the keys will be: R1.span.com</td></tr><tr><td>% The key modulus size is 1024 bits</td></tr><tr><td>% Generating 1024 bit RSA keys, keys will be non-exportable...[OK]</td></tr><tr><td>R1(config)<strong>#</strong></td></tr><tr><td>*Dec 13 16:19:12.079: %SSH-5-ENABLED: SSH 1.99 has been enabled</td></tr><tr><td>R1(config)<strong># username Bob secret cisco</strong></td></tr><tr><td>R1(config)<strong># line vty 0 4</strong></td></tr><tr><td>R1(config-line)<strong># login local</strong></td></tr><tr><td>R1(config-line)<strong># transport input ssh</strong></td></tr><tr><td>R1(config-line)<strong># exit</strong></td></tr></table>",
							x:40,
							y:94-3, 
							width:411.95,
							height:187,
							size:11,
							textAlign:"left"}
							];
	var slide_graphics=[];
    var slide_object = {images:slide_images,
        texts:slide_texts,
		graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}
