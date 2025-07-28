//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"2_3_2_2A.jpg",
        x:5,
        y:36.8,
        width:214,
        height:154.55,
        type:"STD"},
        {name:"2_3_2_2B.jpg",
            x:241.55,
            y:151.45,
            width:212.95,
            height:236.45,
            type:"STD"},
        {name:"arrow.png",
            x:126.7,
            y:148.75,
            width:120.4,
            height:72.55,
            type:""},
        {name:"arrows_box.png",
            x:205,
            y:235,
            width:245.4,
            height:43.55,
            type:""}];

    var slide_texts = [{compId:"ID_title",
        x:20,
        y:2,
        width:460,
        height:17,
        size:14,
        textAlign:"center"},
        {compId:"ID_txt01",
            x:22.85-7,
            y:258.85-61,
            width:173,
            height:17,
            size:11,
            textAlign:"left",
			expand:"down"},
        {compId:"ID_txt02",
            x:112.35+5,
            y:298.85-63,
            width:94,
            height:12,
            size:11,
            textAlign:"right",
			expand:"down"},
        {compId:"ID_txt03",
            x:112.85+5,
            y:313.85-62,
            width:94,
            height:12,
            size:11,
            textAlign:"right",
			expand:"down"},
        {compId:"ID_txt04",
            x:112.85+5,
            y:327.85-62,
            width:94,
            height:12,
            size:11,
            textAlign:"right",
			expand:"down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
