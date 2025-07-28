//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"11_1_1_2_A.jpg",
							x:2,
							y:48,
							width:150.10,
							height:115.70,
							type:"STD"},
							{name:"11_1_1_2_B.jpg",
							x:158.95,
							y:48,
							width:150.10,
							height:115.70,
							type:"STD"},
							{name:"11_1_1_2_C.jpg",
							x:316.50,
							y:48,
							width:150.10,
							height:115.70,
							type:"STD"},
							{name:"11_1_1_2_D.jpg",
							x:65.45,
							y:231,
							width:150.10,
							height:115.70,
							type:"STD"},
							{name:"11_1_1_2_E.jpg",
							x:222.40,
							y:231,
							width:150.10,
							height:115.70,
							type:"STD"}];

    var slide_texts = [{compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},							
							{compId:"ID_txt02",
							x:2,
							y:170, 
							width:150,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt04",
							x:158.95+12,
							y:170, 
							width:150,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},	
							{compId:"ID_txt03",
							x:316.50+12,
							y:170, 
							width:150,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},	
							{compId:"ID_txt05",
							x:65.45+10,
							y:353, 
							width:150,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt06",
							x:222.40+12,
							y:353, 
							width:150,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},					
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
