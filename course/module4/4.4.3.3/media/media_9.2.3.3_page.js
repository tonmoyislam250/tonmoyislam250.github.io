
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

    var slide_images = [{name:"9_2_3_3.png",
						x:4,
						y:104.75,
						width:460.1,
						height:152.2,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:40.9,
							y:188.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt02",
							x:70.85+5,
							y:157.6+3, 
							width:75.5,
							height:21.6,
							size:11,
							expand:"up",
							textAlign:"center",
							
							color:"#FFFFFF"},
							{compId:"ID_txt03",
							x:325.55+5,
							y:160, 
							width:75.5,
							height:21.6,
							size:11,
							expand:"up",
							textAlign:"center",							
							color:"#FFFFFF"},
							{compId:"ID_bubble01",
							x:23.75,
							y:21.75,
							size:11},
							{compId:"ID_bubble02",
							x:272.5-4,
							y:164.2+16,
							width:152,	
							size:11},
							{compId:"ID_bubble03",
							x:324.05,
							y:21.75,
							size:11}
							];
	var graphic_slide = [];
							
	var slide_table = [{compId:"ID_table",
							x:20,
							y:270,
							width:371,
							height:500}];

    var slide_object = {images:slide_images,
        texts:slide_texts,
		graphics:graphic_slide,
		tables:slide_table};

    return {templateType:template_type,
        slideObject:slide_object};

}
