
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

    var slide_images = [{name:"9_2_2_2.png",
						x:20,
						y:131.25,
						width:436.3,
						height:74.3,
						type:""}];

    var slide_texts = [{compId:"ID_txt01",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:208.1,
							y:157.95, 
							width:102.55,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt03",
							x:52.9-15+3,
							y:221-33, 
							width:61,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt04",
							x:398.25+18+3,
							y:221-33, 
							width:59,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt05",
							x:172.7,
							y:277.2, 
							width:153.75,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"}];
							
	var slide_graphics = [{x:94.7,
							y:204,
							length:133,
							thickness:3,
							color:"#F68026",
							rotation:35,
							type:"arrow"},
							{x:380,
							y:204,
							length:134,
							thickness:3,
							color:"#F68026",
							rotation:145,
							type:"arrow"}];

    var slide_object = {images:slide_images,
        				texts:slide_texts,
						graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}
