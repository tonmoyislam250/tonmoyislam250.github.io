//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"11_4_1_2.png",
							x:40.3,
							y:48.15,
							width:407.6,
							height:327.55,
							type:""}
							];

    var slide_texts = [{compId:"ID_title",
							x:32,
							y:2,
							width:440,
							height:17,
							size:14,
							textAlign:"center"},
								
					 {compId:"ID_text01",
							bodyText:"<table width='100%' border='0' cellpadding='0' cellspacing='0'><tr><td colspan='6' class='innerHead'>Switch#<b>show file systems</b></td></tr><tr><td colspan='6' class='innerHead'>File Systems:</td></tr><tr><td colspan='7'>&nbsp;</td></tr><tr><td width='5%'></td><td>Size(b)</td><td>Free(b)</td><td>Type</td><td>Flags</td><td>Prefixes</td></tr><tr><td>*</td><td>32514048</td><td>20887552</td><td>flash</td><td>rw</td><td>flash:</td></tr><tr><td></td><td>-&nbsp;</td><td>-&nbsp;</td><td>opaque</td><td>rw</td><td>vb:</td></tr><tr><td></td><td>-&nbsp;</td><td>-&nbsp;</td><td>opaque</td><td>ro</td><td>bs:</td></tr><tr><td></td><td>-&nbsp;  </td><td>-&nbsp;</td><td>opaque</td><td>rw</td><td>system:</td></tr><tr><td></td><td>-&nbsp;</td><td>-&nbsp;</td><td>opaque</td><td>rw</td><td>tmpsys:</td></tr><tr><td></td><td>65536</td><td>48897</td><td>nvram</td><td>rw</td><td>nvram:</td></tr><tr><td></td><td>-&nbsp;</td><td>-&nbsp;</td><td>opaque</td><td>ro</td><td>xmodem:</td></tr><tr><td></td><td>-&nbsp;</td><td>-&nbsp;</td><td>opaque</td><td>ro</td><td>ymodem:</td></tr><tr><td></td><td>-&nbsp;</td><td>-&nbsp;</td><td>opaque</td><td>rw</td><td>null:</td></tr><tr><td></td><td>-&nbsp;</td><td>-&nbsp;</td><td>opaque</td><td>ro</td><td>tar:</td></tr><tr><td></td><td>-&nbsp;</td><td>-&nbsp;</td><td>network</td><td>rw</td><td>tftp:</td></tr><tr><td></td><td>-&nbsp;</td><td>-</td><td>network</td><td>rw</td><td>rcp:</td></tr><tr><td></td><td>-&nbsp;</td><td>-&nbsp;</td><td>network</td><td>rw</td><td>http:</td></tr><tr><td></td><td>-&nbsp;</td><td>-&nbsp;</td><td>network</td><td>rw</td><td>ftp:</td></tr><tr><td></td><td>-&nbsp;</td><td>-&nbsp;</td><td>network</td><td>rw</td><td>scp:</td></tr><tr><td></td><td>-&nbsp;</td><td>-&nbsp;</td><td>network</td><td>rw</td><td>https:</td></tr><tr><td></td><td>-&nbsp;</td><td>-&nbsp;</td><td>opaque</td><td>ro</td><td>cns:</td></tr></table>",
							x:62.2,
							y:61.55, 
							width:370.5,
							height:283.05,
							size:10,
							color:"#3c3d3f",
							textAlign:"right",
							}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);