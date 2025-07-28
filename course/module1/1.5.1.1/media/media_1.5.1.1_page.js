//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"blue_bg.jpg",
							x:95,
							y:170,
							width:375.5,
							height:250,
							type:"STD"},
							{name:"1_5_1_1.jpg",
							x:5,
							y:4,
							width:217.7,
							height:205.75,
							type:"STD"}
							];

    var slide_texts = [{compId:"ID_txt01",
							x:122.6,
							y:212.95+16, 
							width:327.1,
							height:173.05,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_title",
							x:20,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"}						
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
