//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"5_0_1_1.png",
        x:0,
        y:0,
        width:470,
        height:400,
        type:""}];

    var slide_texts = [{compId:"ID_txt01",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt02",
							x:174.9,
							y:183.85, 
							width:157,
							height:13,
							size:14,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt03",
							x:347.85,
							y:87.6, 
							width:119.25,
							height:9.5,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt04",
							x:347.85,
							y:117.65, 
							width:119.5,
							height:9.75,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt05",
							x:347.85,
							y:148.7, 
							width:119.25,
							height:11.25,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt06",
							x:347.85,
							y:179.2, 
							width:119.25,
							height:9.25,
							size:12,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt07",
							x:347.85,
							y:208.5, 
							width:119.25,
							height:7.75,
							size:12,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt08",
							x:347.85,
							y:240, 
							width:119.25,
							height:7.5,
							size:12,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt09",
							x:347.85,
							y:268.25, 
							width:119.25,
							height:8.5,
							size:12,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt10",
							x:10,
							y:155.65, 
							width:160.65,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt11",
							x:178.55,
							y:120.25, 
							width:70.85,
							height:17,
							size:11,
							textAlign:"right",
							expand:"down"},
							{compId:"ID_txt12",
							x:211.85,
							y:226.4, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"}
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
