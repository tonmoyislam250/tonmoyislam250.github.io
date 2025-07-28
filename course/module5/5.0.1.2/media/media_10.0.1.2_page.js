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

    var slide_images = [{name:"10_0_1_2.png",
						x:20,
						y:62,
						width:434.75,
						height:236.75,
						type:""},
			{name:"10_0_1_2_A.jpg",
						x:15,
						y:52,
						width:116.4,
						height:86.15,
						type:"STD"}
						,
			{name:"10_0_1_2_B.jpg",
						x:340,
						y:52,
						width:117.5,
						height:86.95,
						type:"STD"},
			{name:"10_0_1_2_C.jpg",
						x:15,
						y:252,
						width:118.15,
						height:87.45,
						type:"STD"},
			{name:"10_0_1_2_D.jpg",
						x:340,
						y:252,
						width:118.9,
						height:88,
						type:"STD"}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}
