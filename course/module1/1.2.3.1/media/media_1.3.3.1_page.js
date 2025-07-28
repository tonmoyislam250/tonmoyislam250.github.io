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

    var slide_images = [{name:"1_3_3_1.jpg",
						x:0,
						y:5,
						width:467,
						height:386.45,
						type:""}];

    var slide_texts = [{compId:"ID_txt01",
							x:25-14,
							y:385, 
							width:460,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt02",
							x:256.35,
							y:170, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}
