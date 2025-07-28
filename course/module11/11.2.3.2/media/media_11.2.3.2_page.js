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

    var slide_images = [{name:"11_2_3_2_A.jpg",
						x:9.95,
						y:153,
						width:130,
						height:97.3,
						type:""},
						{name:"11_2_3_2_B.jpg",
						x:180.5,
						y:39,
						width:279,
						height:340,
						type:"STD"},
						{name:"bubble.png",
						x:32,
						y:167,
						width:433.2,
						height:216.6,
						type:""}
						];

    var slide_texts = [{compId:"ID_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt_01",
							x:65.35,
							y:119.4, 
							width:106,
							height:80,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt_02",
							x:219.4+6,
							y:88.25+11, 
							width:160,
							height:80,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt_03",
							x:13.35+7,
							y:314.35-17, 
							width:164,
							height:26,
							size:11,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}
