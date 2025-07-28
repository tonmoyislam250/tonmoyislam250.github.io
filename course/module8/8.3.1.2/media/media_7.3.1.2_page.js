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

    var slide_images = [{name:"7_3_1_2.jpg",
						x:0,
						y:58,
						width:461.95,
						height:237.65,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt01",
							x:400,
							y:149.85+56, 
							width:81,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left"},
							{compId:"ID_txt02",
							x:170.3-31,
							y:135.85-70, 
							width:234,
							height:65.5,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt03",
							x:178,
							y:146.85+70, 
							width:170.5,
							height:232.3,
							size:11,
							textAlign:"left",
							expand:"down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}