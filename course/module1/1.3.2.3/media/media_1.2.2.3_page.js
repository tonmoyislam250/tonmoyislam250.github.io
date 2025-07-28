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

    var slide_images = [{name:"1_2_2_3.jpg",
						x:20,
						y:0,
						width:450,
						height:383,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:1,
							y:155, 
							width:116,
							height:17,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt02",
							x:290,
							y:68, 
							width:177,
							height:17,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:25,
							y:263, 
							width:110,
							height:17,
							size:10,
							shadow:"YES",
							shadowColor:"#FFFFFF",
							textAlign:"left"},
							{compId:"ID_txt04",
							x:5,
							y:381.85, 
							width:457.95,
							height:17,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:220,
							y:70, 
							width:121.9,
							height:17,
							size:11,
							shadow:"YES",
							shadowColor:"#FFFFFF",
							textAlign:"left"},
							{compId:"ID_txt06",
							x:386.35,
							y:170+40, 
							width:88,
							height:17,
							size:10,
							shadow:"YES",
							shadowColor:"#FFFFFF",
							textAlign:"right"},
							{compId:"ID_box1",
							x:149,
							y:303, 
							width:60,
							height:12.55,
							size:10,
							textAlign:"center"},
							{compId:"ID_box2",
							x:215,
							y:303, 
							width:75,
							height:12.55,
							size:10,
							textAlign:"center"},
							{compId:"ID_box3",
							x:290,
							y:303, 
							width:75,
							height:12.55,
							size:10,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}


