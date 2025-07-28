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

    var slide_images = [{name:"2_1_3_2.png",
						x:0,
						y:58,
						width:530,
						height:430,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							
						{compId:"ID_txt01",
							x:5,
							y:65, 
							width:210,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"},
							
						{compId:"ID_txt02",
							x:280-40,
							y:120-20, 
							width:192,
							height:17,
							size:12,
							textAlign:"left"},
							
						{compId:"ID_txt03",
							x:222,
							y:178, 
							width:240,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"},
							
						{compId:"ID_txt04",
							x:35,
							y:210+30, 
							width:200,
							height:17,
							size:12,
							textAlign:"right"},];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}