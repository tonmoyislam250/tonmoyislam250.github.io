loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/AndingSlide.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 715;
var STAGE_HEIGHT = 400;


function getData()
{
    var template_type = "ANDING";
	
	var slide_texts = {};
	
	var slide_object = {
						texts:slide_texts
						};
	
    return {templateType:template_type,
	slideObject:slide_object
	};

}