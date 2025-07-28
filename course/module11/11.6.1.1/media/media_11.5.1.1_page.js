//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"11_5_1_1A.png",
							x:100,
							y:220,
							width:330,
							height:158,
							type:""},
						{name:"11_5_1_1.jpg",
							x:27.05,
							y:25,
							width:304,
							height:225,
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
