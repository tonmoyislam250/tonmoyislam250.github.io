//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"7.1.1.8.png",
        x:10,
        y:80,
        width:450.05,
        height:230,
        type:""}]

    var slide_texts = [
		{compId:"ID_txt01",
            x:140,
            y:123,
            width:318,
            height:17,
            size:13,
		color:"#067EB2",
            textAlign:"left"},
		{compId:"ID_txt02",
            x:140,
            y:148,
            width:300,
            height:17,
            size:11,
            textAlign:"left"},
	]
		
				

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
