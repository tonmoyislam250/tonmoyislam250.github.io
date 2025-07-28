loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"outputBox.png",
							x:45,
							y:113.45,
							width:423,
							height:170,
							type:""}];

    var slide_texts = [{compId:"ID_s1_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"staticTxt",
			 bodyText:"<div>Sw-Floor-1><strong>enable</strong><br/>Sw-Floor-1#<br/>Sw-Floor-1#<strong>conf terminal</strong><br/>Sw-Floor-1(config)#<strong>enable secret class</strong><br/>Sw-Floor-1(config)#<strong>exit</strong><br/>Sw-Floor-1#<br/>Sw-Floor-1#<strong>disable</strong><br/>Sw-Floor-1><strong>enable</strong><br/>Password:<br/>Sw-Floor-1#</div>",
							 x:70,
							 y:126,
							 width:300,
							 size:10.5,
							textAlign:"left",
							}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

