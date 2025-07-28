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
							x:35,
							y:77,
							width:371,
							height:500}];				
	var slide_1_texts = [{compId:"ID_txt01",
							x:35,
							y:320+11,
							width:200,
							height:17,
							size:11,
							color:"#FFFFFF"},
							{compId:"ID_txt02",
							x:251+3,
							y:322+9,
							width:191,
							height:17,
							size:11,
							color:"#FFFFFF"},
							{compId:"ID_txt03",
							x:37.35-3,
							y:305.85,
							width:104,
							height:17,
							size:11,}];						
	var slide_graphics = [];		
	return {templateType:template_type,
			tables:slide_1_tables,
			texts:slide_1_texts,
			graphics:slide_graphics};
}