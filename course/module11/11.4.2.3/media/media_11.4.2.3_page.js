//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"11_4_2_3.jpg",
							x:35,
							y:122,
							width:400,
							height:132.9,
							type:""}];

    var slide_texts = [{compId:"ID_title",
							 x:25,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"},
							 
						{compId:"ID_txt01",
							 x:385.7,
							 y:284.35,
							 width:30,
							 height:17,
							 size:11,
							 textAlign:"center"}];
							 
	var slide_graphics =[{   x:405.7,/* arrow1 top*/
							y:229.35,
							length:55.55,
							thickness:3,
							color:"#F68026",
							rotation:90,
							type:"arrow",depth:1},
							
						{type:"border",
							 div:"borderTop",
								border:2,
								x:399.65,
								y:200,
								width:19.15,
								height:20,
								}];

    var slide_object = {images:slide_images,
                        texts:slide_texts,
						graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);