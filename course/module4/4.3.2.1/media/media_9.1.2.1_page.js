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
	
	var slide_images = [{name:"9_1_2_1.png",
							x:8,
							y:73, 
							width:456.7, 
							height:254,	
							type:""}]
					
							
	var slide_texts = [{compId:"ID_txt01",
							x:270.7,
							y:219.65, 
							width:104,
							height:17,
							size:11,
							color:"#ffffff",
							expand:"up+down",
							textAlign:"center"},
		{compId:"ID_txt02",
							x:183.7,
							y:258.65, 
							width:86,
							height:17,
							size:11,
							color:"#393536",
							expand:"up+down",
							textAlign:"center"},
		{compId:"ID_txt03",
							x:266.2,
							y:258.65,
							width:150,
							height:17,
							size:11,
							color:"#393536",
							expand:"up+down",
							textAlign:"center"},
		{compId:"ID_txt04",
							x:413.7,
							y:258.65,
							width:50,
							height:17,
							size:11,
							color:"#393536",
							expand:"up+down",
							textAlign:"center"},
		{compId:"ID_osi_txt07",
							x:24,
							y:86.5, 
							width:136,
							height:17,
							size:11,
							color:"#393536",
							expand:"left+right",
							textAlign:"center"},
		{compId:"ID_osi_txt06",
							x:24,
							y:121.5, 
							width:136,
							height:17,
							size:11,
							color:"#393536",
							expand:"left+right",
							textAlign:"center"},
							
		{compId:"ID_osi_txt05",
							x:24,
							y:156.5, 
							width:136,
							height:17,
							size:11,
							color:"#393536",
							expand:"left+right",
							textAlign:"center"},
		{compId:"ID_osi_txt04",
							x:24,
							y:192.5, 
							width:136,
							height:17,
							size:11,
							color:"#393536",
							expand:"left+right",
							textAlign:"center"},
		{compId:"ID_osi_txt03",
							x:24,
							y:226.5, 
							width:136,
							height:17,
							size:11,
							color:"#393536",
							expand:"left+right",
							textAlign:"center"},
		{compId:"ID_osi_txt02",
							x:24,
							y:261.5, 
							width:136,
							height:17,
							size:11,
							color:"#393536",
							expand:"left+right",
							textAlign:"center"},
		{compId:"ID_osi_txt01",
							x:24,
							y:297.5, 
							width:136,
							height:17,
							size:11,
							color:"#393536",
							expand:"left+right",
							textAlign:"center"}]						
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


