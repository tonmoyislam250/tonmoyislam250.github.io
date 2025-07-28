loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/FibActivityHostSlide.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 675;
var STAGE_HEIGHT = 400;


function getData()
{
    var template_type = "FIBHOSTACTIVITY";
	
	var slide_texts = [{compId:"txt_instructions",
						x:52,
						y:2,
						width:430,
						height:17,
						size:11,
						textAlign:"left"}];
	
	var slide_object = {
						texts:slide_texts
						};
	
    return {templateType:template_type,
	slideObject:slide_object
	};

}