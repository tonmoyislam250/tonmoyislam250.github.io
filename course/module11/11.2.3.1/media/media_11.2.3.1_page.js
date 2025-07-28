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

    var slide_images = [{name:"11_2_3_1.jpg",
						x:7,
						y:33,
						width:452.9,
						height:345.45,
						type:"STD"}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:63+7,
							y:61.9+14, 
							width:160,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt02",
							x:274+10,
							y:61.9+14, 
							width:160,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt03",
							x:46,
							y:107, 
							width:83.1,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt04",
							x:146,
							y:107, 
							width:83.1,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt05",
							x:258,
							y:107, 
							width:83.1,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt06",
							x:349+6,
							y:107, 
							width:83.1,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt07",
							x:187.35,
							y:40.1, 
							width:105.45,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt08",
							x:23.45,
							y:244.5, 
							width:426.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt09",
							x:6,
							y:297.15+84, 
							width:454.75,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_txt10",
							x:15-2,
							y:140-16, 
							size:11,
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}