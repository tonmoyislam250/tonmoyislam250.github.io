//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"8_1_1_2.png",
        x:4.5,
        y:30.45,
        width:428.45,
        height:358.15,
        type:""}];

    var slide_texts = [{compId:"ID_title",
							x:20,
							y:2, 
							width:460, 
							height:17,
							size:14,
							expand:"down",
							textAlign:"center"},
							{compId:"ID_txt01",
							x:265.5-16,
							y:149.8+8, 
							width:104, 
							height:17,
							size:11,
							expand:"down",
							textAlign:"center"},

						{compId:"ID_txt02",
							x:116.5-13,
							y:346.75,
							width:104,
							height:17,
							size:11,
							expand:"down",
							textAlign:"center"},

						{compId:"ID_txt03",
							x:190.05-18,
							y:305.25+5,
							width:91.15,
							height:17,
							size:11,
							expand:"down",
							textAlign:"center"},

						{compId:"ID_txt04",
							x:65.7-18,
							y:305.25+5,
							width:91.15,
							height:17,
							size:11,
							expand:"down",
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
