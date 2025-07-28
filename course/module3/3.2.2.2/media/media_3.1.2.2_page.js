//loadScript("../../../common/scripts/templates/slide/TimeLineSlide.js");
////loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");



function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "TIMELINE_ANIMATION";
	//var sortingOrder= "ASCENDING";
	var sortingOrder= "DESCENDING";
	return {templateType:template_type, sort_type:sortingOrder};
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
