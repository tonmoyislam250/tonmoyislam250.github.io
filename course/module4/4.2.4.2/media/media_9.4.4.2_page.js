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

    var slide_images = [{name:"9_4_4_2.png",
						x:10,
						y:2.65,
						width:450,
						height:146.95,
						type:""},
						{name:"9_4_4_2_D.png",
						x:10,
						y:153.65,
						width:450,
						height:120.05,
						type:""},
						{name:"9_4_4_2_D.png",
						x:10,
						y:278.65,
						width:450,
						height:120.05,
						type:""},
						{name:"9_4_4_2_A.jpg",
						x:17,
						y:20.5,
						width:180,
						height:105,
						type:"STD"},
						{name:"9_4_4_2_B.jpg",
						x:17,
						y:159.4,
						width:180,
						height:105,
						type:"STD"},
						{name:"9_4_4_2_C.jpg",
						x:17,
						y:284.75,
						width:180,
						height:105,
						type:"STD"}];

    var slide_texts = [{compId:"ID_txt01",
							x:218,
							y:6.5, 
							width:240,
							height:17,
							size:11,
							color:"#393536",
							expand:"down",
							shadowColor:"#FFFFFF",
							textAlign:"center"},
							{compId:"ID_txt02",
							x:218,
							y:189.65, 
							width:242.15,
							height:17,
							size:11,
							color:"#393536",
							expand:"down",
							shadowColor:"#FFFFFF",
							textAlign:"center"},
							{compId:"ID_txt03",
							x:218,
							y:312.8, 
							width:242.15,
							height:17,
							size:11,
							color:"#393536",
							expand:"down",
							shadowColor:"#FFFFFF",
							textAlign:"center"}
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}