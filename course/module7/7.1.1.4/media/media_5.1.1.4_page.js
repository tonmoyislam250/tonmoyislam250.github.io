//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"5_1_1_4.png",
        x:4.35,
        y:4.45,
        width:462,
        height:391.9,
        type:""}];

    var slide_texts = [{compId:"ID_txt01",
            x:21.35,
            y:40.45,
            width:65.6,
            height:17,
            size:11,
            textAlign:"center"},
        {compId:"ID_txt02",
            x:21.35,
            y:131.4,
            width:58.6,
            height:17,
            size:11,
            textAlign:"center"},
         {compId:"ID_txt03",
            x:15.35,
            y:218.95,
            width:58,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt04",
            x:15.35,
            y:332.4,
            width:104,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt05",
            x:103.5,
            y:42.45,
            width:62.6,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt06",
            x:179.15,
            y:35.45,
            width:62.15,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt07",
            x:254.3,
            y:35.45,
            width:62.15,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt08",
            x:329.4,
            y:42.45,
            width:61.65,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt09",
            x:404.95,
            y:42.45,
            width:62.15,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt10",
            x:216.95,
            y:133.3,
            width:62.35,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt11",
            x:367.85,
            y:133.3,
            width:62.35,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt12",
            x:292.85,
            y:219.95,
            width:62.35,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt13",
            x:206,
            y:328.4,
            width:89.3,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt14",
            x:366.8,
            y:328.4,
            width:89.65,
            height:17,
            size:11,
            textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);