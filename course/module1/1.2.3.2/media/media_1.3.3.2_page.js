
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

    var slide_images = [];

    var slide_texts = [{compId:"ID_txt01",
							x:189,
							y:25, 
							width:102,
							height:19,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:130,
							y:95, 
							width:217,
							height:19,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:197,
							y:185, 
							width:82.6,
							height:18,
							size:12,
							textAlign:"center"}];
	var slide_graphics = [ {centerX:230,
							centerY:200, 
							radius:196,
							bgcolor:'#f9d1d2',
							borderColor:"#000000",
							lineWidth:1.5,
							type:"circle"},
							{centerX:230,
							centerY:200, 
							radius:140,
							bgcolor:'#e0d5e6',
							borderColor:"#000000",
							lineWidth:1.5,
							type:"circle"},
							{centerX:230,
							centerY:204, 
							radius:70,
							bgcolor:'#dbecda',
							borderColor:"#000000",
							lineWidth:1.5,
							type:"circle"}];	

    var slide_object = {images:slide_images,
        				texts:slide_texts,
						graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}
