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

    var slide_images = [{name:"2_1_2_2.jpg",
						x:32,
						y:34.95,
						width:412.65,
						height:330.15,
						type:"STD"},
						{name:"2_1_2_2A.png",
						x:336.35,
						y:203.20,
						width:30,
						height:23,
						type:""}];

    var slide_texts = [{compId:"ID_title",
								x:20,
								y:2,
								width:460,
								height:17,
								size:14,
								textAlign:"center"},];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}


