//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_5_1_1A.png",
							x:100,
							y:240,
							width:355,
							height:150,
							type:""},
						{name:"6_5_1_1.png",
							x:6,
							y:0,
							width:370,
							height:290,
							type:""},
							{name:"outputbox.png",
							x:10,
							y:18.35,
							width:235,
							height:150,
							type:""}];

    var slide_texts = [{compId:"ID_footer",
							x:140,
							y:295+14, 
							width:312,
							height:200,
							size:10,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt02",
							x:197.15+16,
							y:24.1, 
							width:134.6,
							height:10.95,
							size:9,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_txt09",
							x:124.45+40-8,
							y:245.5, 
							width:94.4,
							height:10.95,
							size:9,
							textAlign:"center",
							expand:"up"},
							{compId:"staticTxt1",
							bodyText:"172.16.236.0/24",
							x:273.2+14,
							y:87, 
							width:71.25,
							height:9,
							size:9,
							textAlign:"left",
							},
							{compId:"staticTxt1",
							bodyText:"172.17.0.0/16",
							x:273.2+16,
							y:120.85, 
							width:56.25,
							height:9,
							size:9,
							textAlign:"left",
							},
							{compId:"staticTxt1",
							bodyText:"172.16.3.1",
							x:273.2+16,
							y:151.35, 
							width:56.25,
							height:9,
							size:9,
							textAlign:"left",
							},
							{compId:"staticTxt1",
							bodyText:"Fa0/1",
							x:246.45+16+5,
							y:173.4, 
							width:56.25,
							height:9,
							size:9,
							textAlign:"left",
							},
							{compId:"staticTxt1",
							bodyText:"172.22.1.0/24",
							x:279.05+7,
							y:242, 
							width:60,
							height:9,
							size:9,
							textAlign:"center",
							},
							{compId:"staticTxt",
							bodyText:"<b>Gateway of last resort is 172.16.3.1 to network 0.0.0.0</b><br/>S<span id='marginLeft'>172.17.0.0/<span style='color:#F68026'>16</span> [1/0] via 172.16.3.1</span><br/><span id='marginLeft1'>172.16.0.0/<span style='color:#F68026'>16</span> is  variably subnetted, 4 subnets, 2 masks</span><br/>S      <span id='marginLeft2'>172.16.236.0/<span style='color:#F68026'>24</span> [1/0] via 172.16.3.1</span><br/>S      <span id='marginLeft3'>172.16.0.0/<span style='color:#F68026'>16</span> [1/0] via 172.16.3.1</span><br/>C      <span id='marginLeft4'>172.16.1.0/<span style='color:#F68026'>24</span> is directly connected, FastEthernet0/0</span><br/>C      <span id='marginLeft5'>172.16.3.0/<span style='color:#F68026'>24</span> is directly connected, FastEthernet0/1</span><br/>     <span id='marginLeft6'>172.22.0.0/<span style='color:#F68026'>24</span> is subnetted, 1 subnets</span><br/>S      <span id='marginLeft7'>172.22.1.0 [1/0] via 172.16.1.1</span><br/>S*   <span id='marginLeft8'>0.0.0.0/0 [1/0] via 172.16.3.1</span>",
							x:40.7-5,
							y:32.15+2, 
							width:200.25,
							height:103,
							size:8,
							textAlign:"left",
							},
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
