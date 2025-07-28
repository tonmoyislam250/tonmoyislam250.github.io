//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 500;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"2_1_1_3.jpg",
						x:65,
						y:95.4,
						width:384.25,
						height:171,
						type:"STD"},
						{name:"2_1_1_3A.png",
						x:35,
						y:8,
						width:433,
						height:387,
						type:""}];

    var slide_texts = [{compId:"ID_txt01",
							x:40.9+36,
							y:272.65+4, 
							width:384.05,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt02",
							x:30.05+35,
							y:53.45-5, 
							width:81.5,
							height:13.5,
							size:10,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt03",
							x:17.95+37,
							y:322.45-5, 
							width:85.9,
							height:15.5,
							size:10,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt04",
							x:366.9+37,
							y:321.45-5, 
							width:85.75,
							height:15.5,
							size:10,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt05",
							x:191.1+35,
							y:31.45-5, 
							width:85.75,
							height:13,
							size:10,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt06",
							x:352.7+37,
							y:53.2-5, 
							width:84.65,
							height:14,
							size:10,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt07",
							x:197+6-11,
							y:353+4, 
							width:153.25,
							height:21,
							size:10,
							textAlign:"center",
							expand:"up+down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}
