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

		
	var slide_images = [{name:"3_1_4_3a.png",
							x:4,
							y:79.3, 
							width:156, 
							height:111,
							type:""},
						
						{name:"3_1_4_3b.png",
							x:4,
							y:196.6, 
							width:156, 
							height:111,
							type:""},

						{name:"3_1_4_3c.png",
							x:4,
							y:247.9, 
							width:156, 
							height:111,
							type:""},

						{name:"3_1_4_3d.png",
							x:4,
							y:299.2, 
							width:156, 
							height:111,
							type:""}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
						
						{compId:"ID_txt01",
							x:13,
							y:58.85, 
							width:149.95,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},

						{compId:"ID_txt02",
							x:11,
							y:126.3, 
							width:149.95,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},

						{compId:"ID_txt03",
							x:9,
							y:213.6, 
							width:149.95,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},

					{compId:"ID_txt04",
							x:10,
							y:263.9, 
							width:149.95,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"center"},
						
					{compId:"ID_txt05",
							x:15,
							y:330.7, 
							width:149.95,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"center"},
						
					{compId:"ID_txt06",
							x:175,
							y:121.4, 
							width:295.85,
						    height:17,
						  	size:12,
						    color:"#393536",
							textAlign:"left"},
					
					{compId:"ID_txt07",
							x:175,
							y:204.6, 
							width:295.85,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"left"},
						
					{compId:"ID_txt08",
							x:175,
							y:261.9, 
							width:295.85,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"left"},
						
					{compId:"ID_txt09",
							x:175,
							y:320.7, 
							width:295.85,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"left"}];

								
	var slide_graphics = [{ x:54.85,
							y:79.75, 
							width:415,
							height:110.3,
							color:"#fff3b9",
							corner:5},


							{ x:54.85,
							y:196.9, 
							width:415,
							height:44.4,
							color:"#dbecda",
							corner:5},
	
							{ x:54.85,
							y:248.75, 
							width:415,
							height:43.35,
							color:"#e0d5e6",
							corner:5},
	
							{ x:54.85,
							y:299.65, 
							width:415,
							height:73.15,
							color:"#f9d1d2",
							corner:5}]	
							
	var slide_object = {images:slide_images,						
						texts:slide_texts,
						graphics:slide_graphics};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


