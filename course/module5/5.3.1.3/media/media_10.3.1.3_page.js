//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"10_3_1_3.jpg",
							x:10,
							y:50,
							width:460,
							height:350.95,
							type:""},
							];

    var slide_texts = [{compId:"ID_title",
							x:5,
							y:2, 
							width:468,
							height:40,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:18.2+17,
							y:59.45+15, 
							width:215.9,
							height:17,
							size:11,							
							textAlign:"left",
							expand:"down"},

							{compId:"ID_txt05",
							x:18.2+17,
							y:66.45+15, 
							width:215.9,
							height:17,
							size:11,							
							textAlign:"left",
							expand:"down"},
							
							{compId:"ID_txt02",
							x:18.2+17,
							y:244.85, 
							width:240.9,
							height:17,
							size:11,							
							textAlign:"left",
							expand:"down"},

							{compId:"ID_txt06",
							x:18.2+17,
							y:253.85, 
							width:240.9,
							height:17,
							size:11,							
							textAlign:"left",
							expand:"down"},

							{compId:"ID_txt03",
							x:250.9,
							y:66.95, 
							width:96.75,
							height:17,
							size:11,							
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt04",
							x:339.9,
							y:106.85, 
							width:111,
							height:17,
							size:11,							
							textAlign:"center",
							expand:"down"},					
							];
							 
	var slide_graphics =[];

    var slide_object = {images:slide_images,
                        texts:slide_texts,
						graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);