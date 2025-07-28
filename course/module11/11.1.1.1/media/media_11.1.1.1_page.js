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

    var slide_images = [{name:"11_1_1_1.jpg",
						x:8.9,
						y:64.05,
						width:457.55,
						height:266.8,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt01",
							x:77.55+13+72,
							y:294.25-5, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:271.3,
							y:311.25-8, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt03",
							x:271.3+102,
							y:304.25-18, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

