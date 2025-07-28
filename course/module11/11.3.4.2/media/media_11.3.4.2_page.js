//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"11_3_4_2.png",
							x:7.05,
							y:55.4,
							width:454.55,
							height:336.6,
							type:""}];

    var slide_texts = [{compId:"ID_title",
							x:32,
							y:2,
							width:440,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_txt01",
							x:357.6+18,
							y:290.85+27,
							width:85,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt02",
							x:30,
							y:352,
							width:239.95,
							height:17},
								
					  {compId:"ID_text03",
							bodyText:"<table width='100%' border='0' cellpadding='0' cellspacing='0'><tr><td colspan='3'>c:\><b>arp -a</b></td></tr><tr><td>Internet Address</td><td> Physical Address </td><td> Type</td></tr><tr><td>10.0.0.2</td><td>00-08-a3-b6-ce-04</td><td>dynamic</td></tr><tr><td>10.0.0.3</td><td>00-0d-56-09-fb-d1</td><td>dynamic</td></tr><tr><td>10.0.0.4</td><td>00-12-3f-d4-6d-1b</td><td>dynamic</td></tr><tr class='highlights'><td>10.0.0.254</td><td>00-10-7b-e7-fa-ef</td><td>dynamic</td></tr></table>",
							x:13+20,
							y:276.45, 
							width:320.35,
							height:283.05,
							size:11,
							color:"#3c3d3f",
							textAlign:"left"},
							
						{compId:"ID_txt04",
							bodyText:"10.0.0.254/24",
							x:217.2+16,
							y:55.4+13,
							width:69.9,
							height:17,
							size:11,
							textAlign:"center"},
							
					  {compId:"ID_txt05",
					  		bodyText:"10.0.0.5/24",
							x:89+16,
							y:123.05,
							width:56.9,
							height:17,
							size:11,
							textAlign:"center"},
							
					 {compId:"ID_txt06",
					 		bodyText:"10.0.0.4/24",
							x:97.5+12,
							y:223.45,
							width:56.9,
							height:17,
							size:11,
							textAlign:"center"},
							
					{compId:"ID_txt08",
							bodyText:"10.0.0.3/24",
							x:195+11,
							y:247.1,
							width:56.9,
							height:17,
							size:11,
							textAlign:"center"},
							
					{compId:"ID_txt09",
							bodyText:"10.0.0.2/24",
							x:296.5+18,
							y:223.45,
							width:56.9,
							height:17,
							size:11,
							textAlign:"center"},
							
					{compId:"ID_txt10",
							bodyText:"10.0.0.1/24",
							x:336+12,
							y:162.15,
							width:56.9,
							height:17,
							size:11,
							textAlign:"center"}];
		var graphic_slide= [{x:137,
							y:99,
							x1:204.8+10,
							y1:135.75, 
							lineWidth:2,
							type:"line"},
							
							{x:143.5,
							y:193.25+3,
							x1:196.8+6,
							y1:157.75, 
							lineWidth:2,
							type:"line"},
							
							{x:223.3+7,
							y:207.5,
							x1:223.3+7,
							y1:156, 
							lineWidth:2,
							type:"line"},
							
							{x:314.6+10,
							y:197.5,
							x1:239.05+4,
							y1:155.5, 
							lineWidth:2,
							type:"line"},
							
							{x:251.9,
							y:138.4,
							x1:345.55+10,
							y1:138.4, 
							lineWidth:2,
							type:"line"},
							
							{x:296+10,
							y:90.15,
							x1:238.95+10,
							y1:128.4+5, 
							lineWidth:2,
							type:"line"}];
							
    var slide_object = {images:slide_images,
        				texts:slide_texts,
						graphics:graphic_slide};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);