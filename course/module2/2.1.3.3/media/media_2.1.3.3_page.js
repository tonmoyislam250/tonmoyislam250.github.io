loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "MULTI_BAR";
    var commonTexts = [{compId:"ID_inst",
        x:5,
        y:379,
        width:460,
        height:17,
        size:12,
        textAlign:"left"}];

    var slide_1_type = "IMAGE";
    var slide_1_images = [{name:"2_1_3_3_bg.jpg",
        x:144,
        y:45,
        width:290,
        height:331,
        type:""},
        {name:"arrow.png",
            x:280,
            y:98,
            width:10,
            height:80,
            type:""},
        {name:"arrow.png",
            x:280,
            y:210,
            width:10,
            height:80,
            type:""}];
    var slide_1_texts = [{compId:"ID_s1_title",
        x:5,
        y:2,
        width:430,
        height:17,
        size:16,
        textAlign:"center"},
        {compId:"ID_s1_txt01",
            x:10,
            y:142,
            width:138,
            height:17,
            size:12,
            textAlign:"left"},
        {compId:"ID_s1_txt02",
            x:161,
            y:47,
            width:276,
            height:17,
            size:11,
            textAlign:"center"},
        {compId:"ID_s1_txt03",
            x:158,
            y:62,
            width:271,
            height:17,
            size:11,
            textAlign:"center"},
        {compId:"ID_s1_txt04",
            x:158,
            y:175,
            width:271,
            height:17,
            size:11,
            textAlign:"center"},
        {compId:"ID_s1_txt05",
            x:158,
            y:288,
            width:271,
            height:17,
            size:11,
            textAlign:"center"}];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        texts:slide_1_texts};


    var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"2_1_3_3.jpg",
        x:10,
        y:52,
        width:430,
        height:307,
        type:""}];
    var slide_2_texts = [{compId:"ID_s2_title",
        x:18,
        y:2,
        width:430,
        height:17,
        size:16,
        textAlign:"center"},
		{compId:"ID_s2_txt01",
            x:25.35,
            y:40.85,
            width:428,
            height:17,
            size:11,
            textAlign:"left"},
			{compId:"ID_s2_txt02",
            x:25.35,
            y:202,
            width:428,
            height:17,
            size:11,
            textAlign:"left"}]
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        texts:slide_2_texts};

    var slides = [slide_1_object,slide_2_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}