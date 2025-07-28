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

		
	var slide_images = [{name:"4_2_2_7.png",
							x:45,
							y:118, 
							width:386.3, 
							height:144.05,
							
							type:""}];
	
	var slide_texts = [{compId:"ID_txt01",
							x:52,
							y:141, 
							width:80,
							height:17,
							size:12,
							textAlign:"center"},

						{compId:"ID_txt02",
							x:373.25,
							y:135,
							width:80,
							height:17,
							size:12,
							textAlign:"center"},

						{compId:"ID_txt03",
							x:130,
							y:115,
							width:250,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt04",
							x:130,
							y:160,
							width:250,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt05",
							x:130,
							y:203,
							width:250,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt06",
							x:130,
							y:246,
							width:250,
							height:17,
							size:11,
							textAlign:"center"}]

								
			var slide_graphics = [{	x:160.85,/* shapes for static text3 */
							y:108, 
							width:168.9,
							height:32.55,
							color:"#FDE6D4",
							stroke:"#F68026",
							thickness:2,
							corner:5},

							{x:160.85,/* shapes for static text4*/
							y:150.25, 
							width:168.9,
							height:32.55,
							color:"#DBECDA",
							stroke:"#46A040",
							thickness:2,
							corner:5},

							{x:160.85,/* shapes for static text5*/
							y:193.15, 
							width:168.9,
							height:32.55,
							color:"#FDE6D4",
							stroke:"#F68026",
							thickness:2,
							corner:5},
								
							{x:160.85,/* shapes for static text6*/
							y:236.05, 
							width:168.9,
							height:32.55,
							color:"#DBECDA",
							stroke:"#46A040",
							thickness:2,
							corner:5}]
								
						
	
							
	var slide_object = {images:slide_images,						
						texts:slide_texts,graphics:slide_graphics};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


