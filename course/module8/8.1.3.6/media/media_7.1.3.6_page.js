loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/UniMultiBroadcastSlide.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 810;
var STAGE_HEIGHT = 400;


function getData()
{
    var template_type = "UBM";	
    return {templateType:template_type};

}