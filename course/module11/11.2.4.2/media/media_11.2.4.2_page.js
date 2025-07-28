loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "TABLE";
	
	var slide_1_tables = [{compId:"ID_s2_table01",
							x:50.45,
							y:70.35
							},
							{compId:"ID_s2_table02",
							x:50.45,
							y:243.35
							}];				
	var slide_1_texts = [{compId:"ID_s2_title",
							x:135,
							y:2, 
							width:200,
							height:17,
							size:14,}];						
				
	return {templateType:template_type,
			tables:slide_1_tables,
			texts:slide_1_texts};
	
}