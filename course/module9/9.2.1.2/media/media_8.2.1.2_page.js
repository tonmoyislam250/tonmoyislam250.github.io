loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/TableSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "TABLE";
	
	var slide_1_tables = [{compId:"ID_table",
							x:80,
							y:133}];				
	var slide_1_texts = [{compId:"ID_title",
							x:41,
							y:2,
							width:430,
							height:17,
                            size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:154,
							y:102.85,
							width:192,
							height:17,
                            size:11,
							textAlign:"center",
							expand:"left+right"}];						
				
	return {templateType:template_type,
			tables:slide_1_tables,
			texts:slide_1_texts};
	
}
