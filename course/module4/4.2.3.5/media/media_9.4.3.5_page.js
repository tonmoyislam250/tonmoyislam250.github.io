//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"9_4_3_5.jpg",
        x:30,
        y:68.15,
        width:410.05,
        height:231.65,
        type:"STD"}];

    var slide_texts = [{compId:"ID_title",
							x:50,
							y:310, 
							width:389.7,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
