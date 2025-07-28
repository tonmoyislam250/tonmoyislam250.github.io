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

    var slide_images = [{name:"2_2_1_2.png",
						x:92,
						y:65,
						width:291.2,
						height:234.75,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:8,
							y:337.85, 
							width:463.05,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt02",
							x:103.1,
							y:103.7, 
							width:74.2,
							height:17,
							size:11,
							textAlign:"right",
							expand:"down"},
							{compId:"ID_txt03",
							x:103.1,
							y:195.35-9, 
							width:74.2,
							height:17,
							size:11,
							textAlign:"right",
							expand:"down"},
							{compId:"ID_txt03",
							x:103.1,
							y:268.85-9, 
							width:74.2,
							height:17,
							size:11,
							textAlign:"right",
							expand:"down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

