//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"7_2_3_1.png",
        x:41,
        y:32.95,
        width:408.05,
        height:328.55,
        type:""}];

    var slide_texts = [
		{compId:"ID_title",
            x:10,
            y:2,
            width:468,
            height:17,
            size:14,
            textAlign:"center"},
		{compId:"ID_txt01",
            x:92,
            y:34.95+4,
            width:140,
            height:17,
            size:11,
			expand:"right",
            textAlign:"left"},
		{compId:"ID_txt02",
            x:275.95-9,
            y:34.95+4,
            width:148,
            height:17,
            size:11,
			expand:"right",
            textAlign:"left"},
		{compId:"ID_txt03",
			bodyText:"2001:0DB8:ACAD:1::10",
            x:98+2,
            y:48.4+3,
            width:134,
            height:17,
            size:11,
            textAlign:"left"},
		{compId:"ID_txt04",
		bodyText:"2001:0DB8:ACAD:1::/64",
            x:27,
            y:119.25,
            width:144,
            height:30,
            size:12,
            textAlign:"center"},
		{compId:"ID_txt05",
		bodyText:"2001:0DB8:ACAD:1::10/64",
            x:5,
            y:264.15,
            width:146,
            height:30,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt06",
		bodyText:"2001:0DB8:ACAD:1::20/64",
            x:94.05,
            y:365.55,
            width:152.95,
            height:30,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt07",
		bodyText:"2001:0DB8:ACAD:1::8/64",
            x:261.95,
            y:365.55,
            width:147,
            height:30,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt08",
		bodyText:"2001:0DB8:ACAD:1::9/64",
            x:331.95,
            y:250.15,
            width:137,
            height:30,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt09",
		bodyText:"2001:0DB8:ACAD:1::1/64",
            x:261.95+7,
            y:119.25-34,
            width:155,
            height:30,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt10",
		bodyText:"2001:0DB8:ACAD:1::8",
            x:281.85,
            y:47.25+3,
            width:143,
            height:17,
            size:11,
            textAlign:"left"}
			];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
