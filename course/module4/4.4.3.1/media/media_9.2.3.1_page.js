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

    var slide_images = [{name:"9_2_3_1.png",
						x:4,
						y:5,
						width:472,
						height:388,
						type:""}
						];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:14,
							y:192, 
							width:181,
							height:17,
							size:11,
							color:"#393536",
							expand:"up",
							shadowColor:"#FFFFFF",
							textAlign:"center"},
							{compId:"ID_txt02",
							x:197.7,
							y:192, 
							width:277,
							height:17,
							size:11,
							color:"#393536",
							expand:"up",
							shadowColor:"#FFFFFF",
							textAlign:"center"},
							{compId:"ID_txt03",
							x:25,
							y:379.8, 
							width:181,
							height:17,
							size:11,
							color:"#393536",
							expand:"up",
							shadowColor:"#FFFFFF",
							textAlign:"center"},
							
							{compId:"ID_txt04",
							x:215.7,
							y:379.8, 
							width:277,
							height:17,
							size:11,
							color:"#393536",
							expand:"up",
							shadowColor:"#FFFFFF",
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}