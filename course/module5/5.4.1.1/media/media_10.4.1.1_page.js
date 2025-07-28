function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"bg.jpg",
							x:100.90,
							y:170.90,
							width:355.30,
							height:150,
							type:"STD"},
							{name:"10_4_1_1.jpg",
							x:6.50,
							y:55.15,
							width:414.05,
							height:140,
							type:"STD"},
							];

    var slide_texts = [{compId:"ID_footer",
							x:160-25,
							y:201.95+14, 
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