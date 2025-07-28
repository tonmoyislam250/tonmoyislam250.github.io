//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"4_3_1_1A.png",
							x:100,
							y:180,
							width:355.5,
							height:212,
							type:""},
						{name:"4_3_1_1.jpg",
							x:0,
							y:0,
							width:244.45,
							height:210.45,
							type:"STD"}];

    var slide_texts = [{compId:"ID_footer",
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
