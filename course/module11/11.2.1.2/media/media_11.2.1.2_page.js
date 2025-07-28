//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"11_2_1_2.png",
							x:5,
							y:61.2,
							width:468,
							height:326.6,
							type:""}];

    var slide_texts = [{compId:"ID_title",
							 x:10,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
							 
						{compId:"ID_titleTxt01",
							 x:26+20-11,
							 y:69.2+40,
							 width:165.5,
							 height:17,
							 size:11,
							 textAlign:"left"},
							 
						{compId:"ID_bodyTxt01",
							 x:33.35+3,
							 y:110+38,
							 width:173.5,
							 height:200,
							 size:11,
							 textAlign:"left"},
							 
						{compId:"ID_txt02",
							 x:225.85+13,
							 y:333.7,
							 width:230.85,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_txt03",
							 x:227.9+17,
							 y:85.2+4,
							 width:37.8,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_txt04",
							 x:360.2+7,
							 y:85.7+4,
							 width:45.75,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_txt05",
							 x:320.95+15,
							 y:129.2+3,
							 width:47.7,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_txt06",
							 x:320.95+15,
							 y:202.65+3,
							 width:47.7,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_txt07",
							 x:320.95+15,
							 y:165.6+3,
							 width:47.7,
							 height:17,
							 size:11,
							 textAlign:"center"},
							 
						{compId:"ID_txt08",
							 x:376.3-13,
							 y:267.25,
							 width:94.35,
							 height:17,
							 size:11,
							 textAlign:"left"},
							 
						{compId:"ID_txt09",
							 x:275.65+12,
							 y:259.9-4,
							 width:38.35,
							 height:17,
							 size:11,
							 textAlign:"right"},
							 
						{compId:"ID_txt10",
							 x:226.15+17+24,
							 y:227.65,
							 width:78.6,
							 height:17,
							 size:11,
							 textAlign:"left"},
							 
						{compId:"ID_txt11",
							x:226.15+17+24,
							 y:308.1,
							 width:78.6,
							 height:17,
							 size:11,
							 textAlign:"left"}];
							 
	var slide_graphics =[];

    var slide_object = {images:slide_images,
                        texts:slide_texts,
						graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);