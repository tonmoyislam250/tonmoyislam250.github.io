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

    var slide_images = [{name:"11_2_4_1.jpg",
						x:46.85,
						y:68.55,
						width:388.25,
						height:297.6,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt01",
							x:307.1,
							y:129.85, 
							width:138,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt02",
							x:256,
							y:165.35, 
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt03",
							x:331.6,
							y:99, 
							width:27.45,
							height:17,
							size:11,
							color:"#C51230",
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt04",
							x:123.7,
							y:159, 
							width:27.45,
							height:17,
							size:11,
							color:"#C51230",
							textAlign:"left",
							expand:"down"},
							{compId:"ID_bodyTxt",
							bodyText:'<b>ISP</b>',
							x:376.8,
							y:94.9, 
							width:21.9,
							height:17,
							size:11,
							color:"#FFFFFF",
							textAlign:"left",
							expand:"down"},
							{compId:"ID_bodyTxt",
							bodyText:'<b>R2</b>',
							x:191.8,
							y:94.9, 
							width:18.2,
							height:17,
							size:11,
							color:"#FFFFFF",
							textAlign:"left",
							expand:"down"},
							{compId:"ID_bodyTxt",
							bodyText:'<b>R1</b>',
							x:92.4,
							y:192.1, 
							width:18.2,
							height:17,
							size:11,
							color:"#FFFFFF",
							textAlign:"left",
							expand:"down"},
							{compId:"ID_bodyTxt",
							bodyText:'<b>S1</b>',
							x:82.2,
							y:265.85, 
							width:17.6,
							height:17,
							size:11,
							color:"#FFFFFF",
							textAlign:"left",
							expand:"down"},
							{compId:"ID_bodyTxt",
							bodyText:'<b>PC1</b>',
							x:84.2,
							y:327.8, 
							width:25.6,
							height:17,
							size:11,
							color:"#FFFFFF",
							textAlign:"left",
							expand:"down"},];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}