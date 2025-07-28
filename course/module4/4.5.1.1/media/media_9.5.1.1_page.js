//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"blue_bg.jpg",
							x:120,
							y:220,
							width:320,
							height:190,
							type:"STD"},
							{name:"9_5_1_1.png",
							x:62.7,
							y:7.75,
							width:348.95,
							height:249.3,
							type:""}
							];

    var slide_texts = [{compId:"ID_txt01",
							x:122.6+56-41,
							y:212.95+16+55-6, 
							width:315,
							height:173.05,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_title",
							x:20,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt02",
							x:122.6-24,
							y:212.95+4, 
							width:35,
							height:173.05,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt03",
							x:122.6+211,
							y:212.95+4, 
							width:35,
							height:173.05,
							size:11,
							textAlign:"center",
							expand:"down"}						
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
