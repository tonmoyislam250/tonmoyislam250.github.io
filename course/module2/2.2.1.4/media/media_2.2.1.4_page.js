loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/SyntaxCheckerSlide.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;


function getData()
{
    var template_type = "SYNTAX_CHECKER";

   var slide_text = [{compId:"ID_title",
							x:4,
							y:2, 
							width:430,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"}];
    return {templateType:template_type,
			texts:slide_text,
        	syntax:"sc1"};

}