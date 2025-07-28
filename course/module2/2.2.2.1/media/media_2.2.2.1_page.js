//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"notebook.png",
        x:94.75,
        y:54.1,
        width:268.95,
        height:338.65,
        type:""},
       ];

    var slide_texts = [{compId:"ID_title",
        x:18,
        y:2,
        width:460,
        height:17,
        size:14,
        textAlign:"center"},

        {compId:"ID_txt01",
            x:165.25,
            y:71.75,
            width:201,
            height:25.35,
            size:11,
            textAlign:"left",
			expand:"down"},
       ];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
