//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"1_2_1_2.jpg",
        x:0,
        y:40,
        width:464.65,
        height:292.9,
        type:""}];

    var slide_texts = [{compId:"ID_title",
							x:14,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:3,
							y:136, 
							width:105,
							height:15,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt02",
							x:343.55,
							y:138, 
							width:121,
							height:15,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:3,
							y:332, 
							width:105,
							height:15,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt04",
							x:343.55,
							y:306.2, 
							width:121,
							height:15,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:140,
							y:269, 
							width:232.15,
							height:15,
							size:12,
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
