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

    var slide_images = [{name:"3_1_1_3.jpg",
						x:23.35,
						y:76.5,
						width:440.55,
						height:314.95,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:15,
							textAlign:"center"},
							{compId:"ID_text01",
							x:195+13,
							y:118-16, 
							width:281.85,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"center"},
							{compId:"ID_text02",
							x:195+14,
							y:159-14, 
							width:281.85,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"center"},
							{compId:"ID_text03",
							x:195+12,
							y:208-16, 
							width:281.85,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"center"},
							{compId:"ID_text04",
							x:195+14,
							y:252-16, 
							width:281.85,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"center"},
							{compId:"ID_text05",
							x:-89+31,
							y:95-53, 
							width:281.85,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_text06",
							x:195+8,
							y:75-7, 
							width:285,
							height:17,
							size:11,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

