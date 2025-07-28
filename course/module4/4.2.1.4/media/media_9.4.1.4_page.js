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

    var slide_images = [{name:"9_4_1_4.jpg",
						x:35,
						y:170,
						width:400,
						height:177.4,
						type:"STD"}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center",
							expand:"down",},
							{compId:"ID_txt01",
							x:9.85,
							y:82.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up",},
							{compId:"ID_txt02",
							x:135.45,
							y:82.85, 
							width:95,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up",},
							{compId:"ID_txt03",
							x:250.45,
							y:82.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up",},
							{compId:"ID_txt04",
							x:375.45,
							y:82.85, 
							width:90,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up",},
							];
	var slide_graphics=[{x:62.55,
							y:259.95,
							length:160,
							thickness:3,
							color:"#F68026",
							rotation:-90,
							type:"arrow",depth:1},
							{x:260,
							y:206.95,
							length:130,
							thickness:3,
							color:"#F68026",
							rotation:-130,
							type:"arrow",depth:1},
							{x:320.65,
							y:195.95,
							length:90,
							thickness:3,
							color:"#F68026",
							rotation:-100,
							type:"arrow",depth:1},
							{x:400.9,
							y:170.95,
							length:65,
							thickness:3,
							color:"#F68026",
							rotation:280,
							type:"arrow",depth:1}];
    var slide_object = {images:slide_images,
        texts:slide_texts,
		graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}
