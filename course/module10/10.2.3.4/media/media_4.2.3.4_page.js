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
	var commonTexts = [];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"4_2_3_4_A.png",
							x:24.5,
							y:31.25, 
							width:412.4,
							height:321.3,
							type:""},
							{name:"4._2_3_4_s1_A.jpg",
							x:283,
							y:66.5, 
							width:116,
							height:137,
							type:"STD"}]; 
	var slide_1_texts = [{compId:"ID_s1_title",
							x:1,
							y:1, 
							width:468,
							height:25,
							size:14,
							textAlign:"center"},

						{compId:"ID_s1_txt01",
							x:106.1,
							y:145.95, 
							width:109.3,
							height:25,
							size:11,
							textAlign:"left"},
						{compId:"ID_s1_txt02",
							x:105.1,
							y:107.85, 
							width:109.3,
							height:17,
							size:11,
							textAlign:"left"},
						{compId:"ID_s1_txt03",
							x:40,
							y:151.3, 
							width:109.3,
							height:25,
							size:11,
							textAlign:"left"},
						{compId:"ID_s1_txt04",
							x:205.05,
							y:158.3,
							width:109.3,
							height:25,
							size:11,
							textAlign:"left"},
						{compId:"ID_s1_txt05",
							x:5,
							y:367.4, 
							width:435.95,
							height:25,
							size:11,
							textAlign:"left"},
						{compId:"ID_s1_txt06",
							x:288.9,
							y:33.95, 
							width:124.85,
							height:25,
							size:11,
							textAlign:"center"},
						{compId:"ID_s1_txt07",
							x:278.9,
							y:270.95, 
							width:111.4,
							height:127.3,
							size:11,
							textAlign:"left"},
						{compId:"ID_s1_txt08",
							x:335.9,
							y:244.95, 
							width:109.3,
							height:25,
							size:11,
							textAlign:"left"}]


	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images, 
							texts:slide_1_texts};
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"4_2_3_4_B.png",
							x:10,
							y:63.4, 
							width:419.4,
							height:244.35,
							type:""},
						{name:"4_2_3_4_s2_A.jpg",
							x:12,
							y:158.3, 
							width:196.6,
							height:146.45,
							type:"STD"},
						{name:"4_2_3_4_s2_B.jpg",
							x:233,
							y:159.3, 
							width:196.6,
							height:146.45,
							type:"STD"},
						{name:"arrow.png",
							x:67,
							y:239, 
							width:282.05,
							height:226.55,
							type:""}
							]; 	 						
	var slide_2_texts = [{compId:"ID_s2_title",
							x:1,
							y:1, 
							width:458,
							height:25,
							size:14,

							textAlign:"center"},
		
							{compId:"ID_s2_txt1",
							x:215,
							y:97.65, 
							width:110.8,
							height:18.1,
							size:11,
							textAlign:"left"},
						{compId:"ID_s2_txt2",
							x:5.35,
							y:370, 
							width:426.55,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s2_txt3",
							x:187.05,
							y:220, 
							width:89.15,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"}];
	 	
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



// code below is needed for html5 content from Flash CS6
//loadScript("../../../common/scripts/createJS_bundle.min.js", null);
//loadScript("media_2.2.1.2_graphic.js", null);
