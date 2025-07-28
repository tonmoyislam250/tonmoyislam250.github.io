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

    var slide_images = [{name:"9_1_1_2.jpg",
						x:20,
						y:54,
						width:441.95,
						height:285.3,
						type:""}];

    var slide_texts = [{compId:"ID_txt01",
							x:20,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:52,
							y:86.9, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt03",
							x:52,
							y:188.35, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt04",
							x:52,
							y:289.15, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt05",
							x:184.05,
							y:158.1, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt06",
							x:184.05,
							y:218.1, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt07",
							x:331,
							y:216+95, 
							width:88,
							height:104,
							size:11,
							textAlign:"center",
							expand:"up+down",
							rotation:-91},
							{compId:"ID_txt08",
							x:345+44,
							y:216+96.05, 
							width:88,
							height:104,
							size:11,
							textAlign:"center",
							expand:"up+down",
							rotation:269.99},
							{compId:"ID_txt09",
							x:443,
							y:216+110.05, 
							width:108,
							height:104,
							size:11,
							textAlign:"center",
							expand:"up+down",
							rotation:269.99}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}
