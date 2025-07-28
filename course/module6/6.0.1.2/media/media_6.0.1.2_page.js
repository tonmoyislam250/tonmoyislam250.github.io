loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_0_1_2A.png",
							x:80,
							y:230,
							width:372,
							height:173,
							type:""},
						{name:"6_0_1_2.jpg",
							x:6.95,
							y:6.3,
							width:348.95,
							height:268.35,
							type:"STD"}];

    var slide_texts = [{compId:"ID_txt01",
							x:20,
							y:110, 
							width:70,
							height:17,
							size:8,
							textAlign:"left"},
							{compId:"ID_txt02",
							x:200,
							y:48, 
							width:120,
							height:17,
							size:8,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:132,
							y:60, 
							width:121.9,
							height:17,
							size:10,
							shadow:"YES",
							shadowColor:"#FFFFFF",
							textAlign:"left"},
							{compId:"ID_txt06",
							x:266,
							y:126, 
							width:60,
							height:17,
							size:8,
							shadow:"YES",
							shadowColor:"#FFFFFF",
							textAlign:"right"},
							{compId:"ID_box1",
							x:103,
							y:218, 
							width:45,
							height:12.55,
							size:8,
							textAlign:"left"},
							{compId:"ID_box2",
							x:155,
							y:218, 
							width:60,
							height:12.55,
							size:8,
							textAlign:"left"},
							{compId:"ID_box3",
							x:205,
							y:218, 
							width:60,
							height:12.55,
							size:8,
							textAlign:"left"},
							{compId:"ID_footer",
							x:120,
							y:320, 
							width:300,
							height:200,
							size:11,
							textAlign:"left",
							expand:"up+down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}


