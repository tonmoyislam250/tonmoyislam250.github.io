//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"2_2_1_3.png",
        x:170,
        y:80,
        width:224.85,
        height:217.35,
        type:""}];

    var slide_texts = [{compId:"ID_title",
        x:21,
        y:2,
        width:460,
        height:17,
        size:14,
        textAlign:"center"},
		{compId:"ID_txt01",
            x:25.15+90,
            y:105+5-20,
            width:63,
            height:17,
           	size:11,
            textAlign:"left"},

        {compId:"ID_txt02",
            x:25.15+90,
            y:105+5+80-20,
            width:63,
            height:17,
           	size:11,
            textAlign:"left"},
        {compId:"ID_txt03",
            x:25.15+90,
            y:105+5+83+74-20,
            width:63,
            height:17,
           	size:11,
            textAlign:"left"},
         {compId:"ID_txt04",
            x:5,
            y:308+60,
            width:460,
            height:17,
            size:11,
            textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
