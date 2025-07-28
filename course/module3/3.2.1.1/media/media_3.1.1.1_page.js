
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

    var slide_images = [{name:"3_1_1_1E.png",
						x:46,
						y:59,
						width:140,
						height:40,
						type:""},
						{name:"3_1_1_1A.png",
						x:313.35,
						y:20, 
						width:123.05,
						height:86,
						type:""},
						{name:"3_1_1_1B.png",
						x:0,
						y:126, 
						width:500,
						height:28,
						type:""},
						{name:"3_1_1_1B.png",
						x:0,
						y:254, 
						width:500,
						height:28,
						type:""},
						{name:"3_1_1_1E.png",
						x:310,
						y:185,
						width:140,
						height:40,
						type:""},
						{name:"3_1_1_1C.png",
						x:42,
						y:280, 
						width:50.8,
						height:100.3,
						type:""},					
						{name:"3_1_1_1D.png",
						x:400.15,
						y:280, 
						width:53,
						height:104,
						type:""},
						{name:"3_1_1_1B1.png",
						x:95,
						y:315,
						width:300,
						height:17,
						type:""},
						{name:"3_1_1_1E.png",
						x:180,
						y:305,
						width:140,
						height:40,
						type:""}];

    var slide_texts = [
							{compId:"ID_title",
							x:75,
							y:2, 
							width:360,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:80,
							y:391, 
							width:369,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt02",
							x:83,
							y:71, 
							width:84,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_bubble",
							x:338.3,
							y:67 , 
							width:100,
							height:47,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:360,
							y:200, 
							width:80,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:65.35,
							y:170, 
							width:160,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt04",
							x:218,
							y:317.5, 
							width:90,
							height:17,
							size:11,
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}


