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

		
	var slide_images = [{name:"3_1_3_2.jpg",
							x:5,
							y:39, 
							width:460, 
							height:356,
							type:""},
						
						{name:"3.1.3.2.A.gif",
							x:86.75,
							y:34.5, 
							width:152, 
							height:59,
							type:"STD"},

						{name:"3.1.3.2.B.jpg",
							x:125.75,
							y:123, 
							width:72, 
							height:60,
							type:"STD"},
						
						{name:"3.1.3.2.C.jpg",
							x:10,
							y:230, 
							width:72, 
							height:60,
							type:"STD"},

						{name:"3.1.3.2.D.jpg",
							x:245,
							y:230, 
							width:72, 
							height:60,
							type:"STD"}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
						
						{compId:"ID_txt01",
							x:209,
							y:55	, 
							width:210,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},

						{compId:"ID_txt02",
							x:182.5,
							y:142, 
							width:240,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},

						{compId:"ID_txt03",
							x:97.95,
							y:240.75, 
							width:144,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"},

					{compId:"ID_txt04",
							x:18,
							y:302.9, 
							width:215,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"center"},
						
					{compId:"ID_txt05",
							x:22,
							y:356, 
							width:95,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"center"},
						
					{compId:"ID_txt06",
							x:135,
							y:356, 
							width:95,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"center"},
					
					{compId:"ID_txt07",
							x:333,
							y:240.75, 
							width:144,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"left"},
						
					{compId:"ID_txt08",
							x:252,
							y:302, 
							width:215,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"center"},
						
					{compId:"ID_txt09",
							x:258,
							y:356, 
							width:95,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"center"},
						
					{compId:"ID_txt10",
							x:368,
							y:356, 
							width:95,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"center"}];

								
	
	var slide_object = {images:slide_images,						
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


