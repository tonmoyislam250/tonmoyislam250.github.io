//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"10_3_2_4_A.jpg",
							x:11,
							y:43.55,
							width:210,
							height:130,
							type:"STD"},
							
						{name:"10_3_2_4_B.jpg",
							x:235.95,
							y:43.55,
							width:210,
							height:130,
							type:"STD"},
							
						{name:"10_3_2_4_C.jpg",
							x:130,
							y:221.55,
							width:210,
							height:130,
							type:"STD"}];

    var slide_texts = [{compId:"ID_title",
							x:6,
							y:1, 
							width:468,
							height:17,
							size:14,
							expand:"down",
							textAlign:"center"},
							
						{compId:"ID_txt01",
							x:30.6,
							y:180.1, 
							width:190,
							height:17,
							size:11,
							expand:"down",
							textAlign:"center"},
							
						{compId:"ID_txt02",
							x:259.95+4,
							y:180.1, 
							width:170,
							height:17,
							size:11,
							expand:"down",
							textAlign:"center"},
													
						{compId:"ID_txt03",
							x:139.35+10,
							y:358.4, 
							width:190,
							height:17,
							size:11,
							expand:"down",
							textAlign:"center"}];
							 
	var slide_graphics =[];

    var slide_object = {images:slide_images,
                        texts:slide_texts,
						graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);