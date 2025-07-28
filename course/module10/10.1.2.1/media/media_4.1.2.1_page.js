
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

    var slide_images = [{name:"4_1_2_1.jpg",
						x:10,
						y:155,
						width:444,
						height:268.1,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:20,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:7,
							y:206, 
							width:70.05,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:280-20,
							y:206, 
							width:70.05,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:381,
							y:185, 
							width:70.05,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:360,
							y:270, 
							width:107,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt05",
							x:7.85,
							y:372.25, 
							width:475.85,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_bubble_txt01",
							x:3,
							y:54,
							size:11},
							{compId:"ID_bubble_txt02",
							x:223,
							y:54,
							size:11},];
	var graphic_slide = [{x:407.75,
							y:205.55,
							length:70,
							thickness:3,
							color:"#F68026",
							rotation:90,
							type:"arrow"}];
    var slide_object = {images:slide_images,
        texts:slide_texts,
		graphics:graphic_slide};

    return {templateType:template_type,
        slideObject:slide_object};

}

