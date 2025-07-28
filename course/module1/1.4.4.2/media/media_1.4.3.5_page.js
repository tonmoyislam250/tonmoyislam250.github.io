//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"1_4_3_5.png",
        x:3.05,
        y:46.05,
        width:405.45,
        height:317.1,
        type:""}];

    var slide_texts = [{compId:"ID_txt01",
            x:157.05,
            y:133.05,
            width:78.35,
            height:17,
            size:11,
            textAlign:"center"},
        {compId:"ID_txt02",
            x:143,
            y:188.05,
            width:119.1,
            height:17,
            size:11,
            textAlign:"center"},
         {compId:"ID_txt03",
            x:127.45,
            y:241.5,
            width:164.5,
            height:17,
            size:11,
            textAlign:"center"},
			 {compId:"ID_txt04",
            x:115.95,
            y:290.2,
            width:203.3,
            height:17,
            size:11,
            textAlign:"center"},
			 {compId:"ID_txt05",
            x:103.35-3,
            y:339.85,
            width:242.7,
            height:17,
            size:11,
            textAlign:"center"}
			];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);