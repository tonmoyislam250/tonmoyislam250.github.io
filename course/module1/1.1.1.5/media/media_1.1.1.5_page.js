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

    var slide_images = [{name:"1_1_1_5A.jpg",
						x:15,
						y:43.25,
						width:120,
						height:244,
						type:"STD"},
						{name:"1_1_1_5B.jpg",
						x:124.95,
						y:43.25,
						width:148.4,
						height:122,
						type:"STD"},
						{name:"1_1_1_5C.jpg",
						x:285.55,
						y:43.25,
						width:175.45,
						height:125,
						type:"STD"},];

    var slide_texts = [{compId:"ID_txt01",
							x:13,
							y:18.85, 
							width:117,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:130,
							y:18.85, 
							width:148.4,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:290,
							y:18.85, 
							width:175.45,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:25,
							y:297, 
							width:156.05,
							height:83,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:138,
							y:180, 
							width:143.05,
							height:126.95,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt06",
							x:295,
							y:177, 
							width:177.05,
							height:126.95,
							size:11,
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

