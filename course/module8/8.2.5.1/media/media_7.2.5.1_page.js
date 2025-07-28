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

    var slide_images = [{name:"7_2_5_1.png",
						x:26,
						y:33.05,
						width:421.1,
						height:350.9,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt01",
							x:58.5,
							y:48.05, 
							width:178.05,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt02",
							x:283.55,
							y:48.05, 
							width:180,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"staticTxt",
							bodyText:"<b>2001:0DB8:ACAD:1::1/64</b>",
							x:262.35,
							y:122.5, 
							width:147.6,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"staticTxt",
							bodyText:"<b>2001:0DB8:ACAD:1::10/64</b>",
							x:16,
							y:320.7, 
							width:139,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:"<b>2001:0DB8:ACAD:1::20/64</b>",
							x:99.55,
							y:360.4, 
							width:138.5,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:"<b>2001:0DB8:ACAD:1::8/64</b>",
							x:231.35,
							y:385.4, 
							width:147.6,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:"<b>2001:0DB8:ACAD:1::9/64</b>",
							x:335.35,
							y:320.7, 
							width:132.8,
							height:17,
							size:11,
							textAlign:"center"}];
	var graphic_slide= [{	x:390,
							y:300,
							x1:260,
							y1:190, 
							lineWidth:2,
							type:"line"},
							{x:300,
							y:330,
							x1:250,
							y1:190, 
							lineWidth:2,
							type:"line"},
							{x:170,
							y:330,
							x1:245,
							y1:190, 
							lineWidth:2,
							type:"line"},
							{x:68,
							y:280,
							x1:240,
							y1:190, 
							lineWidth:2,
							type:"line"},];
    var slide_object = {images:slide_images,
        texts:slide_texts,
		graphics:graphic_slide};

    return {templateType:template_type,
        slideObject:slide_object};

}
