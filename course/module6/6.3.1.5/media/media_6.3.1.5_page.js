//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_3_1_5.jpg",
        x:23,
        y:15,
        width:416,
        height:333,
        type:""},
		{name:"arrowhilights.png",
        x:70,
        y:68,
        width:347.75,
        height:249.05,
        type:""}];

    var slide_texts = [{compId:"ID_txt01",
							x:74.95+15,
							y:94, 
							width:169,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:250,
							y:45-2, 
							width:79,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:320.65+4,
							y:104.65-25, 
							width:48,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:349.05+9,
							y:49.95-30, 
							width:70,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt05",
							x:111.70+17,
							y:244.95-2, 
							width:62,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt06",
							x:280.65+10,
							y:313.95-5, 
							width:60,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt07",
							x:316.15+7,
							y:244.95-2, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt08",
							x:369.35+10,
							y:313.95-5, 
							width:50,
							height:17,
							size:11,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
