//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_3_1_2A.jpg",
        x:15,
        y:55,
        width:450,
        height:300,
        type:"STD"},
	{name:"6_3_1_2B.png",
        x:205.95,
        y:119,
        width:150,
        height:113,
        type:""}];

    var slide_texts = [{}]
		
    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
