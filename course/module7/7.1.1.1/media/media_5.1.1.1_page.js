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

		
	var slide_images = [{name:"5_1_1_1.png",
							x:1.3,
							y:38.8, 
							width:467.5, 
							height:357.7,
							type:""}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:1,
							y:1,
							width:468,
							height:17,
							size:14,		
							textAlign:"center"},
					   {compId:"ID_txt01",
							x:11,
							y:232,
							width:135,
							height:17,
							size:11,		
							textAlign:"center"},
					  {compId:"ID_txt02",
							x:11,
							y:289.5,
							width:135,
							height:17,
							size:11,		
							textAlign:"center"},
					 {compId:"ID_txt03",
							x:11,
							y:317.5,
							width:135,
							height:17,
							size:11,	
							color:"#393536",
							textAlign:"center"},

						{compId:"ID_txt04",
							x:11,
							y:356,
							width:135,
							height:17,
							size:11,	
							color:"#393536",
							textAlign:"center"},

							{compId:"ID_txt01a",
							x:340,
							y:232,
							width:135,
							height:17,
							size:11,		
							textAlign:"center"},
					  {compId:"ID_txt02a",
							x:340,
							y:289.5,
							width:135,
							height:17,
							size:11,		
							textAlign:"center"},
					 {compId:"ID_txt03a",
							x:340,
							y:317.5,
							width:135,
							height:17,
							size:11,	
							color:"#393536",
							textAlign:"center"},

						{compId:"ID_txt04a",
							x:340,
							y:356,
							width:135,
							height:17,
							size:11,	
							color:"#393536",
							textAlign:"center"},

						{compId:"ID_txt05",
							x:11,
							y:185,
							width:135,
							height:17,
							size:11,		
							textAlign:"center"},

					    {compId:"ID_txt05a",
							x:339,
							y:185,
							width:135,
							height:17,
							size:11,	
							textAlign:"center"},

						{compId:"ID_txt06",
							x:167.5,
							y:273.95,
							width:135,
							height:17,
							size:11,	
							textAlign:"center"}]
							
	  var slide_graphics = [{x:158.5,
							y:264.95, 
							width:149.95,
							height:61,
							color:"#e0d5e6",
		                    stroke:"#652C8A",
		                    thickness:2,		
							corner:5}];	
	
							
	var slide_object = {images:slide_images,graphics:slide_graphics,						
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}