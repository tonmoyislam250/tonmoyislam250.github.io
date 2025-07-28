//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"5_2_4_1.png",
							x:108.20,
							y:100.55,
							width:261.90,
							height:232.10,
							type:""},
							];

    var slide_texts = [	{compId:"ID_title",
							x:19,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_text01",
							x:34.35,
							y:116, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_text02",
							x:128.20,
							y:62.55, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_text03",
							x:257.45,
							y:62.55, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_text04",
							x:358.90,
							y:116, 
							width:90,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_text05",
							x:165.95,
							y:208.45, 
							width:145.95,
							height:25.80,
							size:11,
							textAlign:"center"},
							{compId:"ID_text06",
							x:121.25,
							y:338.45, 
							width:240.95,
							height:28.70,
							size:11,
							textAlign:"center"}
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
