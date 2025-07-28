//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"11_1_3_1_A.jpg",
							x:106.45,
							y:26,
							width:256.4,
							height:169.25,
							type:"STD"},
							{name:"11_1_3_1_B.jpg",
							x:12.3,
							y:215.9,
							width:248.6,
							height:165.15,
							type:"STD"},
							{name:"11_1_3_1_C.jpg",
							x:291.9,
							y:215.9,
							width:165.1,
							height:165.15,
							type:"STD"}];

    var slide_texts = [];
							 
	var slide_graphics =[];

    var slide_object = {images:slide_images,
                        texts:slide_texts,
						graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);