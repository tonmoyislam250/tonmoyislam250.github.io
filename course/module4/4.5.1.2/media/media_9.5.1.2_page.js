
loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"9_5_1_2.jpg",
						x:26.7,
						y:119.9,
						width:419.25,
						height:190.3,
						type:""}];

    var slide_texts = [{compId:"ID_txt01",
							x:22.8,
							y:107.55, 
							width:149.25,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt02",
							x:301.25,
							y:107.55, 
							width:156.45,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt03",
							x:95.55,
							y:251.15, 
							width:297.45,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt05",
							x:22.25,
							y:310.3, 
							width:65.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt06",
							x:387,
							y:310.3, 
							width:65.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}