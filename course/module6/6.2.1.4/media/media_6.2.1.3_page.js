//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6.2.1.3A.png",
							x:65,
							y:15,
							width:349.95,
							height:48.75,
							type:""},
						{name:"6.2.1.3D.png",
							x:1,
							y:95,
							width:469,
							height:306,
							type:""}];

    var slide_texts = [{compId:"ID_title",
            x:32,
            y:2,
            width:440,
            height:17,
            size:14,
            textAlign:"center"},	
							{compId:"ID_txt19",
							bodyText:"<table width='450' border='0' cellpadding='0' cellspacing='0'><tr><td><div class='top'>C:\\Users\\PC1> <b>netstat -r</b><br/><div style='margin:20px 0 0 0'>IPv4 Route Table</div>==========================================================================<br/>Active Routes:</div> </td></tr></table>",
							x:12,
							y:106.4, 
							width:450,
							height:100.05,
							size:10,							
							color:"#000000",
							textAlign:"left",
							},
							{compId:"ID_txt20",
							bodyText:"<table width='450' border='0' cellpadding='0' cellspacing='0'><tr><td><div class='col1' style='text-align:left;padding:0 0 0 2px'>Network Destination</div></td><td><div class='col2'>Netmask</div></td><td><div class='col3'>Gateway</div></td><td><div class='col4'>Interface</div></td><td><div class='col5'>Metric</div></td><td><div class='col6'>&nbsp;</div></td></tr> <tr><td><div class='row1_1'> 0.0.0.0</div></td><td><div class='row1_2'>0.0.0.0</div></td><td><div class='row1_3'>192.168.10.1 </div></td><td><div class='row1_4'>192.168.10.10</div></td><td><div class='row1_5'>25</div></td><td><div class='row1_6'>&nbsp;</div></td></tr><tr><td><div class='row2_1'> 127.0.0.0</div></td><td><div class='row2_2'> 255.0.0.0</div></td><td><div class='row2_3'>On-link </div></td><td><div class='row2_4'>127.0.0.1</div></td><td><div class='row2_5'>306</div></td><td><div class='row2_6'>&nbsp;</div></td></tr><tr><td><div class='row2_1'> 127.0.0.1</div></td><td><div class='row2_2'>  255.255.255.255</div></td><td><div class='row2_3'>On-link </div></td><td><div class='row2_4'>127.0.0.1</div></td><td><div class='row2_5'>306</div></td><td><div class='row2_6'>&nbsp;</div></td></tr><tr><td><div class='row2_1a'>  127.255.255.255</div></td><td><div class='row2_2a'> 255.255.255.255</div></td><td><div class='row2_3a'>On-link </div></td><td><div class='row2_4a'>127.0.0.1</div></td><td><div class='row2_5a'>306</div></td><td><div class='row2_6a'>&nbsp;</div></td></tr> <tr><td><div class='row3_1'> 192.168.10.0</div></td><td><div class='row3_2'> 255.255.255.0</div></td><td><div class='row3_3'>On-link </div></td><td><div class='row3_4'>192.168.10.10 </div></td><td><div class='row3_5'>281</div></td><td><div class='row3_6'>&nbsp;</div></td></tr><tr><td><div class='row3_1'>192.168.10.10</div></td><td><div class='row3_2'> 255.255.255.255 </div></td><td><div class='row3_3'>On-link </div></td><td><div class='row3_4'>192.168.10.10 </div></td><td><div class='row3_5'>281</div></td><td><div class='row3_6'>&nbsp;</div></td></tr><tr><td><div class='row3_1a'> 127.255.255.255</div></td><td><div class='row3_2a'> 255.255.255.255</div></td><td><div class='row3_3a'>On-link </div></td><td><div class='row3_4a'>192.168.10.10 </div></td><td><div class='row3_5a'>281</div></td><td><div class='row3_6a'>&nbsp;</div></td></tr><tr><td><div class='row4_1'>224.0.0.0</div></td><td><div class='row4_2'>224.0.0.0</div></td><td><div class='row4_3'>On-link </div></td><td><div class='row4_4'>127.0.0.1 </div></td><td><div class='row4_5'>306</div></td><td><div class='row4_6'>&nbsp;</div></td></tr><tr><td><div class='row4_1a'>224.0.0.0 </div></td><td><div class='row4_2a'>224.0.0.0 </div></td><td><div class='row4_3a'>On-link </div></td><td><div class='row4_4a'>192.168.10.10 </div></td><td><div class='row4_5a'>281</div></td><td><div class='row4_6a'>&nbsp;</div></td></tr><tr><td><div class='row5_1'> 255.255.255.255 </div></td><td><div class='row5_2'> 255.255.255.255  </div></td><td><div class='row5_3'>On-link </div></td><td><div class='row5_4'>127.0.0.1</div></td><td><div class='row5_5'>306</div></td><td><div class='row5_6'>&nbsp;</div></td></tr><tr><td><div class='row5_1a'>  255.255.255.255 </div></td><td><div class='row5_2a'>  255.255.255.255 </div></td><td><div class='row5_3a'>On-link </div></td><td><div class='row5_4a'>192.168.10.10 </div></td><td><div class='row5_5a'>281</div></td><td><div class='row5_6a'>&nbsp;</div></td></tr></tr></table>",
							x:10,
							y:175.4, 
							width:450,
							height:268.05,
							size:10,							
							color:"#000000",
							textAlign:"left",
							},
							{compId:"ID_txt21",
							bodyText:"<div class='top' style='margin:5px 0 0 0'>==========================================================================<br/></div>",
							x:12,
							y:355.4, 
							width:450,
							height:90.05,
							size:10,							
							color:"#000000",
							textAlign:"left",
							},
        {compId:"ID_text02",
		bodyText:"<b>PC1</b>",
            x:69.1,
            y:23.05,
            width:40,
            height:17,
            size:11,
			color:"white",
            textAlign:"center"},
         {compId:"ID_text03",
		 bodyText:"<b>192.168.10.0/24</b>",
            x:135.85,
            y:61.05,
            width:108.45,
            height:17,
            size:11,
            textAlign:"left"},
			{compId:"ID_text04",
			bodyText:"<b>R1</b>",
            x:247.1,
            y:41,
            width:45.8,
            height:17,
            size:11,
			color:"white",
            textAlign:"center"},
			{compId:"ID_text07",
			bodyText:".10",
            x:113.1,
            y:30.55,
            width:32,
            height:17,
            size:11,
            textAlign:"left"},
			{compId:"ID_text08",
			bodyText:".1",
            x:236.1,
            y:30.55,
            width:32,
            height:17,
            size:11,
            textAlign:"left"},
			{compId:"ID_txt01",
							x:12,
							y:122, 
							width:87,
							height:17,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt02",
							x:12,
							y:370, 
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