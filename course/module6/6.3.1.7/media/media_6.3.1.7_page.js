//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_3_1_7B.jpg",
        x:24,
        y:32,
        width:416,
        height:332.95,
        type:""},
		
	
		];

    var slide_texts = [{compId:"ID_txt01",
							x:208.4,
							y:111, 
							width:169,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:334.35,
							y:259.4+23, 
							width:125.55,
							height:17,
							size:11,
							textAlign:"center"}
							]
		
    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
