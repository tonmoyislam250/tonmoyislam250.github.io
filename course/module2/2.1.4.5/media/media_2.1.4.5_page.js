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
	
	var slide_1_tables = [{compId:"ID_table01",
							x:32.55,
							y:42.95, 
							width:405.65,
							height:64.95},
							
						{compId:"ID_table02",
							x:32.55,
							y:146, 
							width:419.1,
							height:78},
							
						{compId:"ID_table03",
							x:34.3,
							y:255, 
							width:402.85,
							height:130.2}];
							
	var slide_1_texts = [{compId:"ID_title",
							x:15 ,
							y:2,
							width:460,
							height:17,
                            size:14,
							textAlign:"center"},
						{compId:"ID_txt01",
							x:32.55 ,
							y:111.85,
							width:440,
							height:17,
                            size:10,
							textAlign:"left"},
							
						{compId:"ID_txt02",
							x:35.3 ,
							y:378.85,
							width:430,
							height:17,
                            size:10,
							textAlign:"left"}];							
				
	return {templateType:template_type,
			tables:slide_1_tables,
			texts:slide_1_texts};
	
}



