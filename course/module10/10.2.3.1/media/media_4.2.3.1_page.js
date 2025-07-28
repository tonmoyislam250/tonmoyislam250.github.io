//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"4_2_3_1.png",
						 x:41.45,
						 y:58.9,
						 width:399.9,
						 height:283.65,
						 type:""}];

	var slide_graphics = [];	

   var slide_texts = [{compId:"ID_title",
							x:21,
							y:2, 
							width:460, 
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:31.45,
							y:126.9, 
							width:72.25, 
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt02",
							x:380.5,
							y:126.9, 
							width:72.25, 
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt03",
							x:205.35,
							y:92.5, 
							width:81, 
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:92.65,
							y:190.3, 
							width:299, 
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:92.75,
							y:276.2, 
							width:299, 
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt06",
							x:183.15,
							y:331.45, 
							width:66.2, 
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt07",
							x:11,
							y:368, 
							width:460, 
							height:17,
							size:11,
							textAlign:"left"}
							]


    var slide_object = {images:slide_images,graphics:slide_graphics,texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
