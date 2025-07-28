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

		
	var slide_images = [{name:"3_1_3_5.png",
							x:118.65,
							y:96, 
							width:229, 
							height:248,
							type:""}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:98,
							y:2, 
							width:300,
							height:17,
							size:16,
							textAlign:"center"},
						
						{compId:"ID_txt01",
							x:115,
							y:57.85, 
							width:260,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},

						{compId:"ID_txt02",
							x:350,
							y:100.8, 
							width:130,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},

						{compId:"ID_txt03",
							x:369,
							y:231.4, 
							width:104,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},

					{compId:"ID_txt04",
							x:15+7,
							y:356.85, 							
							width:446,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"center"},
						
					{compId:"ID_txt05",
							x:20,
							y:231.4,
							width:100,
							height:17,
							size:12,
						    color:"#393536",
							textAlign:"center"},
						
					{compId:"ID_txt06",
							x:27,
							y:110.8,
							width:84,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"center"},
						
					{compId:"ID_txt07",
							x:203.5,
							y:202.8,
							width:84,
							height:17,
							size:12,
							color:"#FFFFFF",
							textAlign:"center"}];

								
	var slide_graphics = [{x:117,
							y:51.85, 
							width:235,
							height:28,
							color:"#dbecda",
							corner:5},	
		
	                       /* ID txt02 */
         					{x:340,
							y:93.8, 
							width:131,
							height:60,
							color:"#dbecda",
							corner:5},

							 /* ID txt03 */
         					{x:350,
							y:224.8, 
							width:120,
							height:60,
							color:"#dbecda",
							corner:5},

	                       /*ID txt04*/
							{x:1,
							y:354.85,  
							width:468,
							height:35,
							color:"#dbecda",
							corner:5},

							/*ID txt05*/
							{x:1,
							y:224.8, 
							width:116,
							height:90,
							color:"#dbecda",
							corner:5},							
							
							/*ID txt06*/
							{x:1,
							y:104.8, 
							width:116,
							height:57,
							color:"#dbecda",
							corner:5}]
							
	var slide_object = {images:slide_images,						
						texts:slide_texts,
						graphics:slide_graphics};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}


