function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"bg.jpg",
							x:115.90,
							y:170.90,
							width:355.30,
							height:212.70,
							type:"STD"},
							{name:"7.0.1.2.jpg",
							x:6.50,
							y:8.15,
							width:252.20,
							height:218.05,
							type:"STD"},
							];

    var slide_texts = [{compId:"ID_footer",
							x:170,
							y:221.95+14, 
							width:307.10,
							height:164.05,
							size:11,
							color:'#393536',
							textAlign:"left",
							expand:"down"}];
							 
	var slide_graphics =[];

    var slide_object = {images:slide_images,
                        texts:slide_texts,
						graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);