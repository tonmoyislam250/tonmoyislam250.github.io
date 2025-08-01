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

		
	var slide_images = [{name:"5_1_2_6.png",
							x:2,
							y:50, 
							width:467.8, 
							height:289.35,
							type:""}];
	
	var slide_texts = [{compId:"ID_title",
							x:30,
							y:1, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},

						{compId:"ID_txt01",
							x:100,
							y:139,
							width:138.55,
							height:47.95,
							size:10,
							textAlign:"left"},

						{compId:"ID_txt02",
							x:104+6,
							y:216.5,
							width:113.6,
							height:12.95,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt03",
							x:239,
							y:216.5,
							width:110.7,
							height:12.95,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt04",
							x:363,
							y:216.5,
							width:108.45,
							height:12.95,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt05",
							x:26,
							y:211,
							width:81,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt06",
							x:18,
							y:217.5,
							width:81,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt07",
							x:25,
							y:234+26,
							width:81,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt08",
							x:15,
							y:265+63,
							width:81,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt09",
							x:115,
							y:261,
							width:76.5,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt10",
							x:246,
							y:260,
							width:76.5,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt11",
							x:366,
							y:260,
							width:76.5,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt12",
							x:12,
							y:299.5-2.5,
							width:75.3,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt13",
							x:101,
							y:290,
							width:78.05,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt14",
							x:180,
							y:296,
							width:40.35,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt15",
							x:229,
							y:290,
							width:78.05,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt16",
							x:307,
							y:296,
							width:40.35,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt17",
							x:356,
							y:290,
							width:78.05,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt18",
							x:433,
							y:296,
							width:40.35,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt19",
							x:111.6+7,
							y:328,
							width:58,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt20",
							x:231,
							y:328,
							width:75.6,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt21",
							x:360,
							y:328,
							width:75.6,
							height:12.95,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt22",
							x:9,
							y:361.35,
							width:454.95,
							height:12.95,
							size:11,
							textAlign:"left"}]

								
			var slide_graphics = [{	x:88,/* shapes for static text1 */
							y:135, 
							width:132,
							height:48,
							color:"#ffffff",
							stroke:"#BDBBBC",
							thickness:2,
							corner:5},

							{x:102,/* shapes for static text2*/
							y:212, 
							width:113,
							height:24,
							color:"#CDEAF8",
							corner:5},

							{x:235,/* shapes for static text3*/
							y:212, 
							width:100,
							height:24,
							color:"#FFF3B9",
							corner:5},
								
							{x:359,/* shapes for static text4*/
							y:212, 
							width:100,
							height:24,
							color:"#CCE9E7",
							corner:5}]
								
						
	
							
	var slide_object = {images:slide_images,						
						texts:slide_texts,graphics:slide_graphics};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


