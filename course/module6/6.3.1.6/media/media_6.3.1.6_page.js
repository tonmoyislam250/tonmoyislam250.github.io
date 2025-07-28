//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_3_1_6.jpg",
        x:24,
        y:12,
        width:416,
        height:332.95,
        type:""},
		{name:"6_3_1_6_A.png",
        x:65.7,
        y:105.75,
        width:352.8,
        height:166.5,
        type:""}
		];

    var slide_texts = [{compId:"ID_txt01",
							x:200.9,
							y:88.9, 
							width:75,
							height:17,
							size:11,
							expand:"up",
							textAlign:"center"},
							{compId:"ID_txt02",
							x:376.05,
							y:88.45, 
							width:80,
							height:29,
							size:11,
							expand:"up",
							textAlign:"center"},
							{compId:"ID_txt03",
							x:265.2,
							y:273.45, 
							width:62.65,
							height:29,
							size:11,
							expand:"up",
							textAlign:"center"},
							{compId:"ID_txt04",
							x:346.55,
							y:272.9, 
							width:54.55,
							height:29,
							size:11,
							expand:"up",
							textAlign:"center"},
							{compId:"ID_txt05",
							x:293.2,
							y:88.9, 
							width:64.55,
							height:27,
							size:11,
							expand:"up",
							textAlign:"center"}]
		
    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
