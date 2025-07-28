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

    var slide_images = [{name:"7_2_4_6.png",
							x:31.45,
							y:137.5, 
							width:400.5,
							height:109.75,							
							type:""}];

    var slide_texts = [{	compId:"ID_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt01",
							x:286+13,
							y:180.3, 
							width:148.05,
							height:20.4,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt02",
							x:314.55+6,
							y:209, 
							width:83.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt03",
							x:322+18,
							y:130, 
							width:67.4,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt04",
							x:300.55+7,
							y:238.5, 
							width:111.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"txt1",
						bodyText:"1111 1110 10",
							x:49+12-3,
							y:181.6, 
							width:72.3,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"center"},
							{compId:"txt2",
						bodyText:"FE80::/10",
							x:59.1+10,
							y:227.6-4, 
							width:51.8,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"center"},
							{compId:"txt3",
							bodyText:"/64",
							x:269.75+6,
							y:154.85, 
							width:19.45,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"center"},
							];
	var graphic_slide= [];

    var slide_object = {images:slide_images,
        texts:slide_texts,
		graphics:graphic_slide};

    return {templateType:template_type,
        slideObject:slide_object};

}