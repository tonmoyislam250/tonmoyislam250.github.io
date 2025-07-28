loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/PassAndBlockAction.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 750;
var STAGE_HEIGHT = 400;


function getData()
{
    var template_type = "PABA";	
    return {templateType:template_type};

}