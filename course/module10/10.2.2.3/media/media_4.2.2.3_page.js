//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"4.2.2.3.png",
        x:25.95,
        y:140.8,
        width:388.1,
        height:187,
        type:""}]        

    var slide_texts = [{compId:"ID_txt01",
            x:365,
            y:227.55,
            width:96,
            height:17,
            size:11,
            textAlign:"left"},
        {compId:"ID_txt02",
            x:170,
            y:270,
            width:110,
            height:17,
            size:11,
            textAlign:"left"},
        {compId:"ID_txt03",
            x:103,
            y:236,
            width:230.00,
            height:17,
            size:11,
            textAlign:"left"},
		{compId:"ID_txt04",
            x:30,
            y:318,
            width:70,
            height:17,
            size:11,
            textAlign:"left"},
		{compId:"ID_txt05",
            x:126,
            y:218,
            width:63.9,
            height:17,
            size:11,
            textAlign:"left"},
		{compId:"ID_txt06",
            x:10.35,
            y:368,
            width:443.6,
            height:17,
            size:12,
            textAlign:"left"},
		{compId:"ID_txt07",
            x:401,
            y:135.7,
            width:60.4,
            height:17,
            size:11,
            textAlign:"left"},
		{compId:"ID_txt08",
            x:178,
            y:176,
            width:33.4,
            height:17,
            size:11,
            textAlign:"left"},
		{compId:"ID_txt09",
            x:228,
            y:200,
            width:33.4,
            height:17,
            size:11,
            textAlign:"left"},
		{compId:"ID_txt10",
            x:272,
            y:226,
            width:33.4,
            height:17,
            size:11,
            textAlign:"left"},
		{compId:"ID_txt11",
            x:315,
            y:248,
            width:33.4,
            height:17,
            size:11,
            textAlign:"left"},

		{compId:"ID_bubble01",
            x:5,
            y:105,
            width:170.05,
            height:127.50,
            size:11,
            textAlign:"left"},
		{compId:"ID_bubble02",
            x:155,
            y:25.25,
            width:165,
            height:175,
            size:11,
            textAlign:"left"},
		{compId:"ID_bubble03",
            x:312,
            y:1.25,
            width:145,
            height:175,
            size:11,
            textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
