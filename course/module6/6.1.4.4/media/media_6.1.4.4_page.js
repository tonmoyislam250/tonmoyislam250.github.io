
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

    var slide_images = [{name:"6_1_4_4.jpg",
						x:20,
						y:54.5,
						width:440,
						height:318,
						type:""}];

    var slide_texts = [{compId:"ID_txt01",
							x:42-5,
							y:67-1, 
							width:87.35,
							height:17,
							size:11,
							color:"#FFFFFF",
							textAlign:"center"},
						{compId:"ID_txt02",
							x:153-15,
							y:67-1, 
							width:87.35,
							height:17,
							size:11,
							color:"#FFFFFF",
							textAlign:"center"},
						{compId:"ID_txt03",
							x:262-24,
							y:67-1, 
							width:87.35,
							height:17,
							size:11,
							color:"#FFFFFF",
							textAlign:"center"},
						{compId:"ID_txt04",
							x:371-34,
							y:67-1, 
							width:87.35,
							height:17,
							size:11,
							color:"#FFFFFF",
							textAlign:"center"},
							{compId:"ID_txt05",
							x:30,
							y:109, 
							width:59.8,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt06",
							x:98-15,
							y:109, 
							width:91.8,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt07",
							x:178-5,
							y:108, 
							width:258.9,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt08",
							x:31,
							y:146, 
							width:199.95,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt09",
							x:260-7-20+22,
							y:139, 
							width:56.5,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt10",
							x:314-29+49,
							y:146, 
							width:99.85,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt11",
							x:35,
							y:212, 
							width:389.9,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt12",
							x:35,
							y:308, 
							width:389.9,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt13",
							x:428.1+10,
							y:213.2-4, 
							width:30,
							height:17,
							size:11,
							textAlign:"center"}
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

