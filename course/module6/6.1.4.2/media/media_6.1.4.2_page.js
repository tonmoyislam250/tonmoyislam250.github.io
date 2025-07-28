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
							x:25,
							y:15,
							width:371,
							height:500}];				
	var slide_1_texts = [{compId:"ID_txt01",
							x:64,
							y:309.4,
							width:396,
							height:17,
							size:11},
							{compId:"ID_txt02",
							x:64,
							y:332.4,
							width:396,
							height:17,
							size:11},
							{compId:"ID_txt03",
							x:20,
							y:289.5,
							width:441.6,
							height:17,
							size:11,}];						
	var slide_graphics = [{x:19,
							y:310.4, 
							width:30,
							height:15,
							color:"#FFE773",
							stroke:"#4E4C4D",
							thickness:2,
							corner:4,
							type:"rectangle"},
							{x:19,
							y:333.4, 
							width:30,
							height:15,
							color:"#90C68C",
							stroke:"#4E4C4D",
							thickness:2,
							corner:4,
							type:"rectangle"}];		
	return {templateType:template_type,
			tables:slide_1_tables,
			texts:slide_1_texts,
			graphics:slide_graphics};
}