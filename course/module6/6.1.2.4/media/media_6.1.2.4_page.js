//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6.1.2.4.png",
        x:3.8,
        y:63,
        width:460.95,
        height:248.9,
        type:""}];

    var slide_texts = [
		{compId:"ID_title",
            x:5,
            y:2,
            width:465,
            height:17,
            size:14,
            textAlign:"center"},
		{compId:"ID_txt03",
            x:5,
            y:379.75,
            width:430,
            height:17,
            size:11,
            textAlign:"left"},
		{compId:"ID_txt04",
            x:79.25,
            y:261.25,
            width:57.6,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt05",
            x:57.2,
            y:204.55,
            width:95.65,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt06",
            x:90.95,
            y:166.25,
            width:104,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt07",
            x:206,
            y:100.2,
            width:75.8,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt08",
            x:218,
            y:160.55,
            width:57.6,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt09",
            x:294.95,
            y:163.25,
            width:104,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt10",
            x:342,
            y:198.65,
            width:87.95,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt11",
            x:349.1,
            y:261.25,
            width:57.6,
            height:17,
            size:11,
            textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
