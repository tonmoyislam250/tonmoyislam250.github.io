//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"1_3_2_1.jpg",
							x:1,
							y:1,
							width:468,
							height:399,
							type:""}];

    var slide_texts = [{compId:"ID_txt01",
								x:10,
								y:3,
								width:70,
								height:15,
								size:11,
								textAlign:"center"},
								
							{compId:"ID_txt02",
								x:178.45,
								y:148.4,
								width:86.55,
								height:15,
								size:10,
								textAlign:"center",
								expand:"left+right"},
								
							 {compId:"ID_txt03",
								x:185.25+4+4,
								y:234.35-2,
								width:71.5,
								height:15,
								size:10,
								textAlign:"center",
								expand:"down"},
								
							{compId:"ID_txt04",
								x:8,
								y:198,
								width:99.15,
								height:15,
								size:11,
								textAlign:"left",
								expand:"right"},
								
							{compId:"ID_txt05",
								x:308.55,
								y:140,
								width:70,
								height:15,
								size:11,
								textAlign:"left",
								expand:"right"},
								
							{compId:"ID_txt06",
								x:389.3+5,
								y:30.6,
								width:78.25,
								height:15,
								size:11,
								textAlign:"left",
								expand:"right"},
								
							{compId:"ID_txt07",
								x:389.3+5,
								y:55.6+3,
								width:78.25,
								height:15,
								size:11,
								textAlign:"left",
								expand:"right"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);