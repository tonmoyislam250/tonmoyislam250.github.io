//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"2_1_2_1.jpg",
        x:33,
        y:41.20,
        width:417.95,
        height:334.60,
        type:"STD"}];

    var slide_texts = [{compId:"ID_title",
								x:20,
								y:2,
								width:460,
								height:17,
								size:16,
								textAlign:"center"},
						{compId:"ID_border",
								x:340-25+5,
								y:225+13-5, 
								width:55,
								height:24}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
