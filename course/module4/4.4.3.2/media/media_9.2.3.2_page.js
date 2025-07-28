loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [{compId:"ID_txt02",
							x:49.2,
							y:259.55, 
							width:104,
							height:17,
							size:11,
							expand:"up+down",
		                    textAlign:"left"},

							

							{compId:"ID_txt04",
							x:291.85,
							y:229.3, 
							width:75.5,
							height:21.6,
							font:"bold",
							color:"white",
							size:11,
							expand:"up",
							textAlign:"center"},];
				
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"9_2_3_2.png",
							x:1.2,
							y:175.55, 
							width:437.1,
							height:152.2,
							type:"none"}];		
	
	var slide_1_texts = [{compId:"ID_txt01",
							 x:2,
							 y:1.95,
							 width:436.95,
							 height:17,
							 size:14,
							 textAlign:"center"},
							{compId:"ID_txt03",
							x:68.15,
							y:229.3, 
							width:75.5,
							height:21.6,
							font:"bold",
							color:"white",
							size:11,
							expand:"up",
							textAlign:"center"},
		
							{compId:"ID_bubble01",
							x:28.05,
							y:136.65, 
							size:11,
							expand:"up+down",
							textAlign:"left"},

							{compId:"ID_bubble02",
							x:169.75+90,
							y:207.9+88, 
							width:160,
							height:80,
							size:11,
							expand:"up+down",
							textAlign:"left"},
							
							{compId:"ID_bubble03",
							x:316.35,
							y:136.45, 
							width:139.1,
							height:80,
							size:11,
							expand:"up+down",
							textAlign:"left"}];		

    var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
    var slide_2_type = "IMAGE";
	var slide_2_images = [  {name:"9_2_3_2.png",
							x:1.2,
							y:175.55, 
							width:437.1,
							height:152.2,
							type:"none"}];		
	
	var slide_2_texts = [{compId:"ID_txt05",
							 x:2,
							 y:1.95,
							 width:436.95,
							 height:17,
							 size:14,
							 textAlign:"center"},
		
						{compId:"ID_bubble04",
							x:28.05,
							y:129.65, 
							size:11,
							expand:"up+down",
							textAlign:"left"},

							{compId:"ID_bubble05",
							x:244.75+15,
							y:272.9+23, 
							width:134.15,
							height:80,
							size:11,
							expand:"up+down",
							textAlign:"left"},
							
							{compId:"ID_bubble06",
							x:316.35,
							y:136.45, 
							width:139.1,
							height:80,
							size:11,
							expand:"up+down",
							textAlign:"left"},
							
							/*{compId:"cross",
							x:101.15,
							y:200.3,
							width:29,
							height:35,
							expand:"left+right",
							textAlign:"left"
							}*/
							];	
		var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
