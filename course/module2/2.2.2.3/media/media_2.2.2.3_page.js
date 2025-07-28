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

    var slide_images = [{name:"2_2_2_3.jpg",
        x:10,
        y:112.45,
        width:430,
        height:162,
        type:""}];

    var slide_texts = [{compId:"statictext1",
							bodyText:'<table cellpadding="0" cellspacing="0" border="0" width="390"><tr><td>Sw-Floor-1(config)#<b>line console 0</b></td></tr><tr><td>Sw-Floor-1(config-line)#<b>password cisco</b></td></tr><tr><td>Sw-Floor-1(config-line)#<b>login</b></td></tr><tr><td>Sw-Floor-1(config-line)#<b>exit</b></td></tr><tr><td>Sw-Floor-1(config)#</td></tr><tr><td>Sw-Floor-1(config)#<b>line vty 0 15</b></td></tr><tr><td>Sw-Floor-1(config-line)#<b>password cisco</b></td></tr><tr><td>Sw-Floor-1(config-line)#<b>login</b></td></tr><tr><td>Sw-Floor-1(config-line)#</td></tr></table>',
							x:37-2,
							y:146-19, 
							width:400,
							height:150,
							size:11,
							textAlign:"left",
							}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

