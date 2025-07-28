//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"5_3_1_1A.png",
							x:106,
							y:179.6,
							width:355.5,
							height:219.7,
							type:""},
						{name:"5_3_1_1.jpg",
							x:6,
							y:2.60,
							width:244.45,
							height:210.55,
							type:"STD"}];

    var slide_texts = [{compId:"ID_txt01",
							x:140,
							y:295, 
							width:300,
							height:200,
							size:11,
							textAlign:"left",
							expand:"up+down"}
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
