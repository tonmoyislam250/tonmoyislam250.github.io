//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"11_4_2_2.png",
							x:7.35,
							y:125.1,
							width:455.2,
							height:107.9,
							type:""}
							];

    var slide_texts = [{compId:"ID_text01",
							bodyText:"<table width='100%' border='0' cellpadding='0' cellspacing='0'><tr><td>Router#<b>copy running-config tftp</b></td></tr><tr><td>Remote host []? 131.108.2.155</td></tr><tr><td>Name of configuration file to write[tokyo-config]?tokyo.2</td></tr><tr><td>Write file tokyo.2 to 131.108.2.155? [confirm]</td></tr><tr><td>Writing tokyo.2 !!!!!! [OK]</td></tr></table>",
							x:29+5,
							y:135.4+2, 
							width:434.55,
							height:160,
							size:11,
							color:"#3c3d3f",
							textAlign:"left",
							}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);