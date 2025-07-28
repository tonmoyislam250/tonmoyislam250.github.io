//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"1_3_4_3.png",
        x:8.75,
        y:100.6,
        width:457.25,
        height:206.05,
        type:""}];

    var slide_texts = [{compId:"ID_title",
        x:5,
        y:2,
        width:460,
        height:17,
        size:16,
        textAlign:"center"},
		{compId:"ID_txt01",
            x:120.95,
            y:107.4,
            width:118.6,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_txt02",
            x:134.9,
            y:150.1,
            width:92.7,
            height:17,
            size:12,
            textAlign:"center"},
         {compId:"ID_txt03",
            x:134.9,
            y:180.15,
            width:92.7,
            height:17,
            size:12,
            textAlign:"center"},
			{compId:"ID_txt04",
            x:134.9,
            y:221.6,
            width:92.7,
            height:17,
            size:12,
            textAlign:"center"},
			{compId:"ID_txt05",
            x:21.8,
            y:262.2,
            width:92.7,
            height:17,
            size:12,
            textAlign:"center"},
			{compId:"ID_txt06",
            x:243.65,
            y:257.7,
            width:102.75,
            height:17,
            size:12,
            textAlign:"center"},
			{compId:"ID_txt07",
            x:375.2,
            y:183.5,
            width:94.55,
            height:17,
            size:12,
            textAlign:"center"}
			];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
