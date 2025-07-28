//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"4_2_2_4.jpg",
        x:58.3,
        y:67.85,
        width:349,
        height:287,
        type:""}];

    var slide_texts = [{compId:"ID_txt01",
        x:10,
        y:10,
        width:460,
        height:15,
        size:14,
        textAlign:"center"},

       
    ];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
