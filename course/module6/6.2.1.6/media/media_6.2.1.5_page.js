//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_2_1_5_A.png",
        x:71.9,
        y:28,
        width:336.4,
        height:50.55,
        type:""},{name:"6_2_1_5.png",
        x:22,
        y:109.6,
        width:440.15,
        height:290,
        type:""}
		];

    var slide_texts = [{compId:"ID_title",
            x:32,
            y:2,
            width:440,
            height:17,
            size:14,
            textAlign:"center"},	
	{compId:"ID_txt20",
							bodyText:"<table width='407' border='0' cellpadding='0' cellspacing='0'><tr><td colspan='5'>C:\\Users\\PC1&gt;<b style='font-weight:bold'>netstat -r</b></td></tr><tr><td colspan='5'><span style='color:#f3f3f3;'>.</span></td></tr><tr><td colspan='5'>IPv6 Route Table</td></tr><tr><td colspan='5'>=================================================================================</td></tr><tr><td colspan='5'>Active Routes:</td></tr><tr><td width='39' align='right'>If </td><td width='85' align='right'>Metric</td><td width='13' align='left'>&nbsp;</td><td width='451' align='left'>Network Destination</td><td width='141'>Gateway</td></tr><tr><td align='right'>16</td><td align='right'>58</td><td align='left'>&nbsp;</td><td align='left'>::/0 </td><td>On-link</td></tr><tr><td align='right'>1</td><td align='right'>306</td><td align='left'>&nbsp;</td><td align='left'>::1/128 </td><td>On-link</td></tr><tr><td align='right'>16 </td><td align='right'>58</td><td align='left'>&nbsp;</td><td align='left'>2001::/32</td><td>On-link</td></tr><tr><td align='right'>16</td><td align='right'>306</td><td align='left'>&nbsp;</td><td align='left'>2001:0:9d38:953c:2c30:3071:e718:a926/128</td><td>On-link</td></tr><tr><td align='right'>15</td><td align='right'>281</td><td align='left'>&nbsp;</td><td align='left'>fe80::/64 </td><td>On-link</td></tr><tr><td align='right'>16</td><td align='right'>306</td><td align='left'>&nbsp;</td><td align='left'>fe80::/64 </td><td>On-link</td></tr><tr><td align='right'>16</td><td align='right'>306 </td><td align='left'>&nbsp;</td><td align='left'>fe80::2c30:3071:e718:a926/128</td><td>On-link</td></tr><tr><td align='right'>15 </td><td align='right'>281</td><td align='left'>&nbsp;</td><td align='left'>fe80::b1ee:c4ae:a117:271f/128</td><td>On-link</td></tr><tr><td align='right'>1</td><td align='right'>306</td><td align='left'>&nbsp;</td><td align='left'>ff00::/8</td><td>On-link</td></tr><tr><td align='right'>16</td><td align='right'>306</td><td align='left'>&nbsp;</td><td align='left'>ff00::/8</td><td>On-link</td></tr><tr><td align='right'>15</td><td align='right'>281</td><td align='left'>&nbsp;</td><td align='left'>ff00::/8</td><td>On-link</td></tr><tr><td colspan='5'>=================================================================================</td></tr><tr><td colspan='5'></td></tr></table>",
							x:46,
							y:125, 
							width:419.15,
							height:250.05,
							size:10,
							scroll:"yes",
							color:"#3c3d3f",
							textAlign:"left",
							},
        {compId:"ID_text02",
		bodyText:"<b>PC1</b>",
            x:86.1,
            y:36.05,
            width:40,
            height:17,
            size:11,
			color:"white",
            textAlign:"center"},
         {compId:"ID_text03",
		 bodyText:"fe80::/128",
            x:139.85,
            y:74.05,
            width:108.45,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_text04",
			bodyText:"<b>R1</b>",
            x:269.1,
            y:55.65,
            width:45.8,
            height:17,
            size:11,
			color:"white",
            textAlign:"center"},
			{compId:"ID_text07",
			bodyText:"fe80::2c30:3071:e718:a926/128<br/>2001:0:9d38:953c:2c30:3071:e718:a926/128",
            x:40,
            y:-3,
            width:242,
            height:17,
            size:11,
            textAlign:"left"},
				{compId:"ID_txt05",
							x:46,
							y:138, 
							width:87,
							height:17,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt06",
							x:46,
							y:342, 
							width:86,
							height:17,
							size:10,
							textAlign:"left"}
			];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);