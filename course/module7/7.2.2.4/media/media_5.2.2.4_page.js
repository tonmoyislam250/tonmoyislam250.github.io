//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";

		
	var slide_images = [{name:"5.2.2.4.png",
							x:50.1,
							y:34.95, 
							width:317.7, 
							height:303,
							type:""}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:5,
							y:2,
							width:460,
							height:17,
							size:14,		
							textAlign:"center"},

						{compId:"ID_txt01",
							x:15.35,
							y:87.55,
							width:127.6,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt02",
							x:0,
							y:141.85,
							width:156.05,
							height:17,
							size:11,
							textAlign:"right"},

						{compId:"ID_txt03",
							x:0,
							y:172.65,
							width:156.05,
							height:17,
							size:11,
							textAlign:"right"},

						{compId:"ID_txt04",
							x:0,
							y:208.3,
							width:156.05,
							height:17,
							size:11,
							textAlign:"right"},

						{compId:"ID_txt05",
							x:0,
							y:245.3,
							width:156.05,
							height:17,
							size:11,
							textAlign:"right"},

						{compId:"ID_txt06",
							x:0,
							y:275.3,
							width:156.05,
							height:17,
							size:11,
							textAlign:"right"},

						{compId:"ID_txt07",
							x:0,
							y:310.3,
							width:156.05,
							height:17,
							size:11,
							textAlign:"right"},

						{compId:"ID_txt08",
							x:149.3,
							y:96.85,
							width:133,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt09",
							x:164.35,
							y:129.45,
							width:100.95,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt10",
							x:164.35,
							y:158.65,
							width:100.95,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt11",
							x:164.35,
							y:234.5,
							width:100.95,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt12",
							x:164.35,
							y:263.7,
							width:100.95,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt13",
							x:277.3,
							y:87.55,
							width:135,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt14",
							x:275.95,
							y:141.85,
							width:192.05,
							height:17,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt15",
							x:275.95,
							y:172.65,
							width:192.05,
							height:17,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt16",
							x:275.95,
							y:208.3,
							width:206.05,
							height:17,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt17",
							x:275.95,
							y:245.3,
							width:192.05,
							height:17,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt18",
							x:275.95,
							y:275.3,
							width:192.05,
							height:17,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt19",
							x:275.95,
							y:309.3,
						    width:206.05,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt20",
							x:5,
							y:347.85,
						    width:464.05,
							height:47,
							size:11,
							textAlign:"left"}]								
	
							
	var slide_object = {images:slide_images,						
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


