
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

    var slide_images = [{name:"9.2.3.5.png",
						x:8,
						y:104.75,
						width:437.1,
						height:152.2,
						type:""}];

    var slide_texts = [{},
						{compId:"ID_txt01",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							},														
							{compId:"ID_txt05",
							x:78,
							y:160, 
							width:75.5,
							height:21.6,
							size:11,
							expand:"up",
							textAlign:"center",							
							color:"#FFFFFF"},
							{compId:"ID_txt07",
							x:308,
							y:160, 
							width:75.5,
							height:21.6,
							size:11,
							expand:"up",
							textAlign:"center",							
							color:"#FFFFFF"},							
							{compId:"ID_txt02",
							x:23.75,
							y:5.75,
							size:11},
							{compId:"ID_txt03",
							x:262,
							y:164.2+10,
							width:152,	
							size:11},
							{compId:"ID_txt06",
							x:43,
							y:164.2+26,
							width:152,	
							size:11},
							{compId:"ID_txt04",
							x:324.05,
							y:21.75,
							size:11}
							];
	var graphic_slide = [];
							
	var slide_table = [{compId:"ID_table01",
							x:20,
							y:270,
							width:372.7,
							height:300}];

    var slide_object = {images:slide_images,
        texts:slide_texts,
		graphics:graphic_slide,
		tables:slide_table};

    return {templateType:template_type,
        slideObject:slide_object};

}
