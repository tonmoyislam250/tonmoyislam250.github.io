//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [	{name:"4_3_1_4.png",
							x:10.65,
							y:77.85,
							width:422.55,
							height:213.05,
							type:""}
							];

    var slide_texts = [{compId:"ID_txt01",
							x:3.65+8,
							y:152.85, 
							width:57,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt02",
							x:166.6+8+11,
							y:106.5, 
							width:99,
							height:19,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt03",
							x:354.6+8,
							y:149.85, 
							width:69.05,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt04",
							x:102.85+8+20,
							y:229.8, 
							width:99.75,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"}				
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
