
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

    var slide_images = [{name:"10_3_1_4.jpg",
						x:55,
						y:107.1,
						width:348.2,
						height:281	,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt01",
							x:107.95-37,
							y:62, 
							width:342.15,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}