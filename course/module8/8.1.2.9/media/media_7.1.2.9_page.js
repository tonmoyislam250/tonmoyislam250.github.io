loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/AndingSlide.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 780;
var STAGE_HEIGHT = 400;


function getData()
{
    var template_type = "ANDING";
	
	var slide_texts = {compId:"ID_title",
						x:0,
						y:2,
						width:185,
						height:17,
						size:14,
						textAlign:"center"};
	
	var slide_object = {
						texts:slide_texts
						};
	
    return {templateType:template_type,
	slideObject:slide_object
	};

}