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

    var slide_images = [{name:"9_4_4_3.jpg",
						x:40,
						y:77,
						width:400,
						height:246,
						type:"STD"}];

    var slide_texts = [{compId:"ID_txt01",
							x:20,
							y:342.9, 
							width:468,
							height:17,
							size:11,
							textAlign:"center",
							color:"#393536",
							expand:"up"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

