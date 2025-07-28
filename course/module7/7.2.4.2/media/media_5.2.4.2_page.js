//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"5_2_4_2.png",
							x:93.30,
							y:68.35,
							width:259.65,
							height:272.85,
							type:""},
							];

    var slide_texts = [	{compId:"ID_title",
							x:6,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_text01",
							x:18.20,
							y:125.35, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_text02",
							x:60.20,
							y:78.55, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_text03",
							x:232.55,
							y:36.45, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_text04",
							x:113.05,
							y:36.45, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_text05",
							x:300.05,
							y:78.55, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_text06",
							x:350.20,
							y:124.35, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_text07",
							x:152.60,
							y:216.80, 
							width:143.95,
							height:25.80,
							size:11,
							textAlign:"center"},
							{compId:"ID_text08",
							x:98.20,
							y:344.65, 
							width:250.90,
							height:28.70,
							size:11,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
