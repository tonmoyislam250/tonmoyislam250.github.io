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
	
		
	var slide_images = [{name:"5_2_3_2.png",
							x:4.45,
							y:50.15, 
							width:460.45, 
							height:340.10,
							type:""}];

							
	var slide_texts = [{compId:"ID_title",
						x:5,
					    y:2,
						width:460,
						height:17,
						size:14,
						textAlign:"center"},

						{compId:"ID_txt01",
							x:14.5,
							y:33.8, 
							width:112.1,
							height:50.55,
							size:11,
							textAlign:"left"},					

						{compId:"ID_txt03",
							x:20,
							y:210,
							width:81.6,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt04",
							x:110.5,
							y:201.5,
							width:89,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt05",
							x:110.5,
							y:233.5,
							width:89,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt06",
							x:110.5,
							y:262.5,
							width:89,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt07",
							x:110.5,
							y:293.5,
							width:89,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt08",
							x:110.5,
							y:323,
							width:89,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt09",
							x:110.5,
							y:352,
							width:89,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt10",
							x:207.55,
							y:248.5,
							width:80,
							height:133,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt11",
							x:288.5,
							y:201.5,
							width:89,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt12",
							x:288.5,
							y:233.5,
							width:89,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt13",
							x:288.5,
							y:262.5,
							width:89,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt14",
							x:288.5,
							y:293.5,
							width:89,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt15",
							x:288.5,
							y:323,
							width:89,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt16",
							x:388.5,
							y:206.5,
							width:80,
							height:19.30,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt17",
							x:388.5,
							y:272.5,
							width:80,
							height:19.30,							
							size:11,
							textAlign:"left"}]	
							
					
	var slide_graphics = [ {x:9.95,
							y:33.8, 
							width:127.1,
							height:50.55,
							color:"#e0d5e6",
							corner:5},
							/* txt04*/	
							{x:100,
							y:199, 
							width:89,
							height:21,
							color:"#A2AA23",
							corner:0},
							/* txt05*/		
							{x:100,
							y:229.8, 
							width:89,
							height:21,
							color:"#E8A0AC",
							corner:0},
							/* txt06*/		
							{x:100,
							y:259.6, 
							width:89,
							height:21,
							color:"#F3D0D6",
							corner:0},
							/* txt07*/		
							{x:100,
							y:289.4, 
							width:89,
							height:21,
							color:"#A7A5A6",
							corner:0},
							/* txt08*/		
							{x:100,
							y:319.2, 
							width:89,
							height:21,
							color:"#A3913B",
							corner:0},
							/* txt09*/		
							{x:100,
							y:349, 
							width:89,
							height:21,
							color:"#FACCA8",
							corner:0},
								
							/* txt11*/	
							{x:282,
							y:199,
							width:89,
							height:21,
							color:"#A2AA23",
							corner:0},
							/* txt12*/		
							{x:282,
							y:229.8, 
							width:89,
							height:21,
							color:"#E8A0AC",
							corner:0},
							/* txt13*/		
							{x:282,
							y:259.6,  
							width:89,
							height:21,
							color:"#FACCA8",
							corner:0},
							/* txt14*/		
							{x:282,
							y:289.4, 
							width:89,
							height:21,
							color:"#A3913B",
							corner:0},
							/* txt15*/		
							{x:282,
							y:319.2,  
							width:89,
							height:21,
							color:"#BDBBBC",
							corner:0}];	
	
						
	var slide_object = {images:slide_images,graphics:slide_graphics,			
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


