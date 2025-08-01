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

    var slide_images = [{name:"7_3_2_1.jpg",
						x:190.4,
						y:28.35,
						width:277.05,
						height:360.35,
						type:""},
						{name:"7_3_2_1.png",
						x:10,
						y:28.35,
						width:180,
						height:361,
						type:""},
						{name:"highlight.png",
						x:208.55,
						y:203.6,
						width:184,
						height:25,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:5.35,
							y:65.85, 
							width:170,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt02",
							x:5.35,
							y:333.85, 
							width:170,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt03",
							x:34,
							y:184.25, 
							width:99,
							height:23.5,
							size:11,
							textAlign:"left",
							color:"#FFFFFF",
							expand:"down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}
