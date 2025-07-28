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

		
	var slide_images = [{name:"4_0_1_2_E.png",
							x:100.9,
							y:187.3, 
							width:368.5, 
							height:230.7,
							type:""},
							
						{name:"4_0_1_2_D.jpg",
							x:5,
							y:10, 
							width:388.95, 
							height:219.4,
							type:"STD"},
							
						{name:"4_0_1_2_A.jpg",
							x:26.05,
							y:26.05, 
							width:66.95, 
							height:166.6,
							type:"STD"},
							
						{name:"4_0_1_2_C.jpg",
							x:104.2,
							y:70.75, 
							width:119.8, 
							height:85.45,
							type:"STD"},
							
						{name:"4_0_1_2_B.jpg",
							x:237.2,
							y:70.75, 
							width:101.35, 
							height:83.4,
							type:"STD"}];
	
							
	var slide_texts = [{compId:"ID_footer",
							x:165.9-15-42+24,
							y:134.9+95+30+40-52, 
							width:305.5, 
							height:190.7,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt01",
							x:14.05+10,
							y:195.85+4, 
							width:90.65, 
							height:13.15,
							size:9,
							textAlign:"center"},
							
						{compId:"ID_txt03",
							x:103.8+10,
							y:158.4+4, 
							width:119.8, 
							height:11.6,
							size:9,
							textAlign:"center"},
							
						{compId:"ID_txt02",
							x:236.75+10,
							y:158.4+4, 
							width:101.3, 
							height:11.6,
							size:9,
							textAlign:"center"}];							
	
							
	var slide_object = {texts:slide_texts,
	images:slide_images,						
						};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}