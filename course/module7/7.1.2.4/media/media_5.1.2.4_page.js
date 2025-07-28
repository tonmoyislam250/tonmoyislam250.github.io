//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"5_1_2_4.jpg",
							x:10,
							y:100,
							width:458,
							height:179,
							type:""}];

    var slide_texts = [{compId:"ID_title",
							x:7,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt03",
							x:1.20+20-12+10-2,
							y:52.15+70, 
							width:58.05,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_txt04",
							x:218.70+20-44-8-2,
							y:52.15+70, 
							width:41.40,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_txt05",
							x:218.70+20-3-3+3-3+7-2,
							y:52.15+70, 
							width:40.40,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_txt06",
							x:393+37-8+3-2-8,
							y:52.15+70, 
							width:41.40,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left"},
							{compId:"ID_txt07",
							x:4.20+20-2+9,
							y:87.45+5+70, 
							width:210.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt08",
							x:224.85+14-2+8,
							y:87.45+5+70, 
							width:210.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt09",
							x:2+21-2+10,
							y:134.15+70, 
							width:210.40,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt10",
							x:2+21+219-2+5,
							y:134.15+70,
							width:210.40,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt11",
							x:2+19-2+13,
							y:218.95+3-45+70, 
							width:423.25,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt01",
							x:440.30+31-2-12,
							y:182, 
							width:40,
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
