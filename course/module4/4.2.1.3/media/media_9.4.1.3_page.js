//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"9_4_1_3.jpg",
        x:55.55,
        y:128.75,
        width:366.05,
        height:197.9,
        type:""},
		{name:"arrow_bubble.png",
        x:66.55,
        y:100.75,
        width:302.15,
        height:108.5,
        type:""}
		];

    var slide_texts = [{compId:"ID_txt02",
							x:51.55,
							y:100.75, 
							width:86.7, 
							height:17,
							size:11,
							expand:"left+right",
							textAlign:"center"},

						{compId:"ID_txt03",
							x:237.8,
							y:82.85,
							width:86.7,
							height:17,
							size:11,
							expand:"left+right",
							textAlign:"center"},

						{compId:"ID_txt04",
							x:393.35,
							y:195.5,
							width:85,
							height:17,
							size:11,
							expand:"left+right",
							textAlign:"left"},

						{compId:"ID_txt05",
							x:20,
							y:68.35,
							width:131.95,
							height:17,
							size:11,
							expand:"left+right",
							textAlign:"left"},

						{compId:"ID_txt06",
							x:113.1+59,
							y:68.35,
							width:135.95,
							height:17,
							size:11,
							expand:"left+right",
							textAlign:"left"},

						{compId:"ID_txt07",
							x:271.45+57,
							y:37.8,
							width:126,
							height:17,
							size:11,
							expand:"left+right",
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
