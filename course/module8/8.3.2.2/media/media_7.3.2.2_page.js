//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"7_3_2_2.png",
        x:38.9,
        y:54.45,
        width:420.6,
        height:252.4,
        type:""},
		{name:"7_3_2_2.jpg",
        x:222.7,
        y:179,
        width:186.75,
        height:218.65,
        type:""},
		{name:"boder_img.png",
        x:316.7,
        y:276,
        width:100,
        height:20,
        type:""}
		];

    var slide_texts = [
		{compId:"ID_title",
            x:5,
            y:2,
            width:468,
            height:17,
            size:14,
            textAlign:"center"},
		{compId:"ID_txt01",
            x:227.9,
            y:35.45,
            width:125,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt02",
            x:225.9,
            y:79.45,
            width:130,
            height:17.65,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt03",
            x:37.8,
            y:162.7,
            width:115,
            height:30,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt04",
            x:110.7,
            y:255.25,
            width:108.25,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt05",
            x:388.95,
            y:126.65,
            width:81.25,
            height:17,
            size:11,
            textAlign:"right"},
		{compId:"ID_txt06",
            x:379.4,
            y:95,
            width:42.6,
            height:17,
            size:11,
            textAlign:"right"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
