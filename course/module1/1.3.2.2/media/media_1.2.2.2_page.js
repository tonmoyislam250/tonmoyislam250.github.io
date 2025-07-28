
//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 500;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"1_2_2_2.jpg",
						x:5,
						y:35,
						width:430,
						height:281,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:3,
							y:151.15, 
							width:114,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt02",
							x:360,
							y:130, 
							width:124.05,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:5,
							y:350, 
							width:460.75,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:5,
							y:374, 
							width:457.95,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:157-11,
							y:65+8, 
							width:165.9,
							height:17,
							size:11,
							shadow:"YES",
							shadowColor:"#FFFFFF",
							textAlign:"center"},
							{compId:"ID_txt06",
							x:115+23,
							y:90, 
							width:77,
							height:17,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt07",
							x:278-34,
							y:90, 
							width:77,
							height:12.55,
							size:10,
							shadow:"YES",
							shadowColor:"#FFFFFF",
							textAlign:"right"},
							{compId:"ID_txt08",
							x:250,
							y:179, 
							width:77,
							height:12.55,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt09",
							x:108+11,
							y:275-2, 
							width:77,
							height:12.55,
							size:10,
							textAlign:"center"},
							{compId:"ID_txt10",
							x:267,
							y:272, 
							width:77,
							height:12.55,
							size:10,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}