//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_1_4_1.jpg",
        x:130,
        y:33.55,
        width:217.4,
        height:326.9,
        type:"STD"}];

    var slide_texts = [{compId:"ID_txt01",
							x:210,
							y:85.25, 
							width:50.5,
							height:17,
							size:12,
							color:"#FFFFFF",
							textAlign:"center"}]
		
    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
