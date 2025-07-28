//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"8_1_3_2.jpg",
        x:1.4,
        y:57.9,
        width:468.55,
        height:283.25,
        type:""}];

    var slide_texts = [{compId:"ID_title",
							x:25,
							y:2, 
							width:460, 
							height:17,
							size:14,
							expand:"down",
							textAlign:"center"},
	
							{compId:"ID_txt01",
							x:230.4,
							y:120.9, 
							width:96.35, 
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},

						{compId:"ID_txt02",
							x:355,
							y:196.7,
							width:96.35,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},

						{compId:"ID_txt03",
							x:61.45,
							y:184.1,
							width:96.35,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},

						{compId:"ID_txt04",
							x:201.5,
							y:197.1,
							width:96.35,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},

						{compId:"ID_txt05",
							x:121,
							y:264.8,
							width:84.35,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},

						{compId:"ID_txt06",
							x:285.7,
							y:265.35,
							width:96.35,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},
							
						{compId:"ID_txt07",
							x:8,
							y:324.9+19,
							width:464.65,
							height:17,
							size:11,
							expand:"down",
							textAlign:"center"}
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
