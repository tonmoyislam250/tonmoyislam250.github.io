
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

    var slide_images = [{name:"6_3_2_2.jpg",
						x:10.85,
						y:61.35,
						width:459.7,
						height:308.5,
						type:""}];

    var slide_texts = [{compId:"ID_txt01",
							x:26.85,
							y:66.35, 
							width:120.5,
							height:14.5,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt02",
							x:25.85,
							y:104.6, 
							width:142,
							height:14.7,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:25.85,
							y:182.85, 
							width:142,
							height:15.4,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:26.85,
							y:251.85, 
							width:120.5,
							height:14.5,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:25.85,
							y:301.85, 
							width:142,
							height:17.3,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt06",
							x:194.15,
							y:66.35, 
							width:120.5,
							height:14.5,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt07",
							x:168.1,
							y:126.9, 
							width:112.25,
							height:10,
							size:11,
							color:"white",
							textAlign:"center"},
							{compId:"ID_txt08",
							x:162.1,
							y:301.9, 
							width:118.7,
							height:10,
							size:11,
							color:"white",
							textAlign:"center"},
							{compId:"ID_txt09",
							x:301.8,
							y:126.3, 
							width:88,
							height:17.3,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt10",
							x:301.8,
							y:300.85, 
							width:88,
							height:17.3,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt11",
							x:400,
							y:66.35, 
							width:78.45,
							height:14.5,
							size:11,
							textAlign:"left"}
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}
