//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"10_2_2_2.jpg",
							x:7,
							y:77,
							width:467,
							height:233,
							type:""}];

    var slide_texts = [{compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							
							{compId:"ID_txt01",
							x:41+32+133,
							y:30+274-90, 
							width:75,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},							
							{compId:"ID_txt02",
							x:331.90+32-56,
							y:57.85+2+105+143+10+5, 
							width:155.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
