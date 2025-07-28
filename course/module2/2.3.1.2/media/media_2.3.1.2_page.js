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

    var slide_images = [{name:"2_3_1_2_A.jpg",
						x:4,
						y:80,
						width:192.55,
						height:154.05,
						type:"STD"},
						{name:"2_3_1_2_B.jpg",
						x:209.15,
						y:50.85,
						width:119.3,
						height:80,
						type:"STD"},
						{name:"2_3_1_2_C.jpg",
						x:336.5,
						y:50.85,
						width:127.65,
						height:80,
						type:"STD"},
						{name:"2_3_1_2_D.jpg",
						x:209.15,
						y:164.9,
						width:120.55,
						height:85,
						type:"STD"},
						{name:"2_3_1_2_E.jpg",
						x:336.05,
						y:164.9,
						width:128.2,
						height:85,
						type:"STD"},
						{name:"2_3_1_2_F.jpg",
						x:90.5,
						y:287.85,
						width:110,
						height:104.05,
						type:"STD"},
						{name:"2_3_1_2_G.jpg",
						x:211.1,
						y:287.85,
						width:141.35,
						height:104.05,
						type:"STD"},
						{name:"2_3_1_2_H.jpg",
						x:360.5,
						y:287.85,
						width:104.05,
						height:104.05,
						type:"STD"}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:211.3,
							y:32.85, 
							width:252,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:211.3,
							y:147.85, 
							width:252,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:90.3,
							y:270.85, 
							width:372.2,
							height:17,
							size:12,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

