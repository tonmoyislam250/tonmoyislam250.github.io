
//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"9_4_1_6_A.jpg",
							x:23.5,
							y:29.05,
							width:188.15,
							height:125.1,
							type:"STD"},
						
						{name:"9_4_1_6_B.jpg",
							x:251.95,
							y:29.05,
							width:188.15,
							height:125.1,
							type:"STD"},
							
						{name:"9_4_1_6_C.jpg",
							x:23.5,
							y:210.85,
							width:188.15,
							height:125.1,
							type:"STD"},
							
						{name:"9_4_1_6_D.jpg",
							x:251.95,
							y:210.85,
							width:188.15,
							height:125.1,
							type:"STD"}];

    var slide_texts = [{compId:"ID_txt01",
							x:20,
							y:190.4-23, 
							width:233,
							height:17.95,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
					{compId:"ID_txt02",
							x:258+9,
							y:190.4-27, 
							width:200,
							height:17.05,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
					{compId:"ID_txt03",
							x:20+20-2,
							y:378.95-30, 
							width:200,
							height:16.3,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
					{compId:"ID_txt04",
							x:258+9,
							y:377-35, 
							width:200,
							height:17.15,
							size:11,
							textAlign:"center",
							expand:"up+down"}];
							
							var slide_graphics = [];

    var slide_object = {images:slide_images,
        				texts:slide_texts,
						graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}
