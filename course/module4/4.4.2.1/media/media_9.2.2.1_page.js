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

    var slide_images = [{name:"9_2_2_1.png",
						x:20,
						y:28,
						width:417.3,
						height:352.5,
						type:""}];

    var slide_texts = [{compId:"ID_txt01",
							x:33-1,
							y:165.6+8, 
							width:197.05,
							height:14.7,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:251.4-6,
							y:165.6+8, 
							width:197.05,
							height:14.7,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:136.4-4,
							y:360.65+8, 
							width:244.05,
							height:14.7,
							size:11,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}
