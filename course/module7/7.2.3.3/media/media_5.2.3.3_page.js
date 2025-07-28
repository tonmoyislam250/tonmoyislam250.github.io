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

    var slide_images = [{name:"../../../common/images/html/computer.png",
						x:30,
						y:180,
						width:63.5,
						height:52.65,
						type:""},
						{name:"../../../common/images/html/computer.png",
						x:380,
						y:180,
						width:63.5,
						height:52.65,
						type:""},
						{name:"../../../common/images/html/Server_file.png",
						x:216.85,
						y:80,
						width:38,
						height:53.5,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:195,
							y:60, 
							width:100,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:55,
							y:165, 
							width:55.45,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:403,
							y:165, 
							width:55.45,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt04",
							x:160,
							y:200, 
							width:170.1,
							height:77,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt05",
							x:15,
							y:379, 
							width:450,
							height:36,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt06",
							x:30,
							y:235, 
							width:100,
							height:36,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt07",
							x:385,
							y:235, 
							width:100,
							height:36,
							size:11,
							textAlign:"left"}];
	var slide_graphics = [{	x:260,
							y:115,
							length:135,
							thickness:3,
							color:"#000000",
							rotation:30,
							type:"arrow"},
							{x:210,
							y:110,
							length:135,
							thickness:3,
							color:"#000000",
							rotation:150, 
							type:"arrow"}];
					
    var slide_object = {images:slide_images,
						texts:slide_texts,
						graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}

