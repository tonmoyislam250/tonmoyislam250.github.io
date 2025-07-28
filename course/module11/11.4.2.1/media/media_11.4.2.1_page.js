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

    var slide_images = [{name:"11_4_2_1.jpg",
							x:31,
							y:36.4,
							width:390,
							height:251.05,
							type:"STD"},
							
						{name:"text_box.png",
							x:28.5,
							y:286.55,
							width:395,
							height:251.05,
							type:""}];

    var slide_texts = [{compId:"ID_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_bodyTxt",
							x:53.5,
							y:301.55+4,
							width:300,
							height:17,
							size:11,
							textAlign:"left"}
							];

    var slide_object = {images:slide_images,
        				texts:slide_texts};

    return {templateType:template_type,
       			 slideObject:slide_object};

}
