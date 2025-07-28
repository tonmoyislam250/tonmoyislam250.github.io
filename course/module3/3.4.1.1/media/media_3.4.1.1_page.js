//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"3_4_1_1_C.png",
								x:170.9-45,
								y:129.9+60,
								width:335.5,
								height:256.25,
								type:""},
								
						{name:"3_4_1_1_B.png",
							x:25.2,
							y:10.85,
							width:330.6,
							height:258.5,
							type:"STD"}];

    var slide_texts = [{compId:"ID_txt01",
								x:165,
								y:268,
								width:280,
								height:17,
								size:11,
								textAlign:"left"},
								
							{compId:"ID_osi_header",
								x:60+23,
								y:130-29,
								width:65,
								height:17,
								size:8,
								textAlign:"left"},
								
							{compId:"ID_txt02",
								x:175-15,
								y:130-29,
								width:85,
								height:17,
								size:8,
								textAlign:"left"},
								
							{compId:"ID_tcpip_header",
								x:358-90,
								y:130-29,
								width:88,
								height:17,
								size:8,
								textAlign:"left"},
								
							{compId:"ID_txt03",
								x:170-21,
								y:216-79-1,
								width:99,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_txt04",
								x:170-21,
								y:216-39-4,
								width:99,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_txt05",
								x:170-21,
								y:216-27,
								width:99,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_txt06",
								x:170-21,
								y:221,
								width:99,
								height:17,
								size:8,
								textAlign:"center"},
					
							{compId:"ID_osi_txt07",
								x:4+65-11,
								y:23+111-17-1,
								width:85,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_osi_txt06",
								x:4+65-11,
								y:23+111+3-1,
								width:85,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_osi_txt05",
								x:4+65-11,
								y:23+111+22-1,
								width:85,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_osi_txt04",
								x:4+65-11,
								y:23+111+41-1,
								width:85,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_osi_txt03",
								x:4+65-11,
								y:23+111+60-1,
								width:85,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_osi_txt02",
								x:4+65-11,
								y:23+111+79-1,
								width:85,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_osi_txt01",
								x:4+65-11,
								y:23+111+99-1,
								width:85,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_tcpip_txt04",
								x:4+65-11+222-30,
								y:23+111+79-90+15-1,
								width:85,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_tcpip_txt03",
								x:4+65-11+222-30,
								y:23+111+79-90+52-1,
								width:85,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_tcpip_txt02",
								x:4+65-11+222-30,
								y:23+111+79-90+71-1,
								width:85,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_tcpip_txt01",
								x:4+65-11+222-30,
								y:23+111+79-90+100-1,
								width:85,
								height:17,
								size:8,
								textAlign:"center"},
								
							{compId:"ID_txt01a",
								x:112.4+23,
								y:33.95-13-1,
								width:125.9,
								height:17,
								size:7,
								textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
