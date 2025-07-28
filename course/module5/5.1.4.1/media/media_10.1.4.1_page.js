//loadScript("../../../common/scripts/templates/slide/InteractiveSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var temp_type = "INTERACTIVE";
	var common_texts = [];
	var common_images = [{name:"media_10.1.4.1.jpg",x:0,y:0,width:470,height:400}];
	
	var slide_object = {type:"CUSTOM",
						texts:common_texts,
						images:common_images}
	return {templateType:temp_type,
			x:0,
			y:0,
			slideObject:slide_object}
}

