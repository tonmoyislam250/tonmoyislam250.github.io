//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_2_1_2_A.png",
        x:71.9,
        y:28,
        width:336.4,
        height:50.55,
        type:""},{name:"6_2_1_2.png",
        x:0,
        y:90,
        width:470,
        height:320,
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
							bodyText:"<table width='40%' border='0' cellpadding='0' cellspacing='0'><tr><td colspan='5'>C:\\Users\\PC1&gt;<b style='font-weight:bold'>netstat -r</b></td></tr><tr class='liner_1'><td colspan='5'><span style='color:#fefefe'>.</span></td></tr><tr><td colspan='5'>IPv4 Route Table</td></tr><tr class='liner'><td colspan='5'>================================================================================</td></tr><tr class='liner_2'><td colspan='5'>Active Routes:</td></tr><tr><td width='27%'><div>Network Destination</div></td><td width='25%'><div align='right'>Netmask</div></td><td width='21%'><div align='right'>Gateway</div></td><td width='23%'><div align='right'>Interface</div></td><td width='12%'><div align='right'>Metric</div></td></tr><tr><td><div align='right' class='moveTd'>0.0.0.0</div></td><td><div align='right'>0.0.0.0</div></td><td><div align='right'>192.168.10.1</div></td><td><div align='right'>192.168.10.10</div></td><td><div align='right'>25</div></td></tr><tr><td><div align='right' class='moveTd'>127.0.0.0</div></td><td><div align='right'>255.0.0.0</div></td><td><div align='right'>On-link</div></td><td><div align='right' >127.0.0.1</div></td><td><div align='right'>306</div></td></tr><tr><td><div align='right' class='moveTd'>127.0.0.1</div></td><td><div align='right'>255.255.255.255</div></td><td><div align='right'>On-link</div></td><td><div align='right'>127.0.0.1</div></td><td><div align='right'>306</div></td></tr><tr><td><div align='right' class='moveTd'>127.255.255.255</div></td><td><div align='right'>255.255.255.255</div></td><td><div align='right'>On-link</div></td><td><div align='right'>127.0.0.1</div></td><td><div align='right'>306</div></td></tr><tr><td><div align='right' class='moveTd'>192.168.10.0</div></td><td><div align='right'>255.255.255.0</div></td><td><div align='right'>On-link</div></td><td><div align='right'>192.168.10.10</div></td><td><div align='right'>281</div></td></tr><tr><td><div align='right'  class='moveTd'>192.168.10.10</div></td><td><div align='right'>255.255.255.255</div></td><td><div align='right'>On-link</div></td><td><div align='right'>192.168.10.10</div></td><td><div align='right'>281</div></td></tr><tr><td><div align='right' class='moveTd'>192.168.10.255</div></td><td><div align='right'>255.255.255.255</div></td><td><div align='right'>On-link</div></td><td><div align='right'>192.168.10.10</div></td><td><div align='right'>281</div></td></tr><tr><td><div align='right' class='moveTd'>224.0.0.0</div></td><td><div align='right'>224.0.0.0</div></td><td><div align='right'>On-link</div></td><td><div align='right'>127.0.0.1</div></td><td><div align='right'>306</div></td></tr><tr><td><div align='right' class='moveTd'>224.0.0.0</div></td><td><div align='right'>224.0.0.0</div></td><td><div align='right'>On-link</div></td><td><div align='right'>192.168.10.10</div></td><td><div align='right'>281</div></td></tr><tr><td><div align='right' class='moveTd'>255.255.255.255</div></td><td><div align='right'>255.255.255.255</div></td><td><div align='right'>On-link</div></td><td><div align='right'>127.0.0.1</div></td><td><div align='right'>306</div></td></tr><tr><td><div align='right' class='moveTd'>255.255.255.255</div></td><td><div align='right'>255.255.255.255</div></td><td><div align='right'>On-link</div></td><td><div align='right'>192.168.10.10</div></td><td><div align='right'>281</div></td></tr><tr class='liner'><td colspan='5'>=================================================================================</td></tr><tr><td colspan='5'></td></tr></table>",
							x:16,
							y:105, 
							width:430,
							height:283.05,
							size:10,
							color:"#3c3d3f",
							textAlign:"left",
							},
        {compId:"ID_text02",
		bodyText:"<b>PC1</b>",
            x:76.1,
            y:37.05,
            width:40,
            height:17,
            size:11,
			color:"white",
            textAlign:"center"},
         {compId:"ID_text03",
		 bodyText:"<b>192.168.10.0/24</b>",
            x:141.85,
            y:74.05,
            width:108.45,
            height:17,
            size:11,
            textAlign:"left"},
			{compId:"ID_text04",
			bodyText:"<b>R1</b>",
            x:250.1,
            y:55.65,
            width:45.8,
            height:17,
            size:11,
			color:"white",
            textAlign:"center"},
			{compId:"ID_text07",
			bodyText:".10",
            x:120.1,
            y:45.55,
            width:32,
            height:17,
            size:11,
            textAlign:"left"},
			{compId:"ID_text08",
			bodyText:".1",
            x:237.1,
            y:46.55,
            width:32,
            height:17,
            size:11,
            textAlign:"left"},
			{compId:"ID_txt05",
							x:8,
							y:125, 
							width:100,
							height:17,
							size:10,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_txt06",
							x:8,
							y:368, 
							width:96,
							height:17,
							size:10,
							textAlign:"left",
							expand:"right"}
			];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);