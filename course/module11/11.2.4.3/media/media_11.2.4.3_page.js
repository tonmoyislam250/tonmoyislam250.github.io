//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"11_2_4_3_A.png",
        x:8,
        y:79,
        width:455.2,
        height:239.8,
        type:""}
		];

    var slide_texts = [	{compId:"ID_txt20",
							bodyText:"<table width='100%' border='0' cellpadding='0' cellspacing='0'><tr> <td width='108%'>Router(config)<strong>#service password-encryption</strong></td></tr><tr class='liner_1'> <td>Router(config)<strong>#security password min-length 8</strong></td></tr><tr> <td>Router(config)<strong>#login block-for 120 attempts 3 within 60</strong></td></tr><tr class='liner'> <td>Router(config)<strong>#line vty 0 4</strong></td></tr> <tr class='liner_2'> <td>Router(config-vty)<strong>#exec-timeout 10 </strong></td> </tr> <tr class='liner_2'> <td>Router(config-vty)<strong>#end</strong></td> </tr> <tr class='liner_2'> <td>Router<strong>#show running-config</strong></td> </tr> <tr class='liner_2'> <td>-more-</td> </tr> <tr class='liner_2'> <td>!</td> </tr> <tr class='liner_2'> <td>line vty 0 4</td> </tr> <tr class='liner_2'> <td>&nbsp;&nbsp;password 7 03095A0F034F38435B49150A1819</td> </tr> <tr class='liner_2'> <td>&nbsp;&nbsp;exec-timeout 10</td> </tr> <tr class='liner_2'> <td>&nbsp;&nbsp;login</td></tr><tr><td></td></tr></table>",
							x:16+17,
							y:105-11, 
							width:413,
							height:283.05,
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