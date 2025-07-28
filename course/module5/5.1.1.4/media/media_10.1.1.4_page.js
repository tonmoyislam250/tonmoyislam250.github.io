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

    var slide_images = [{name:"10_1_1_4.png",
						x:16.05,
						y:46,
						width:428.95,
						height:298.8,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:37.05+9-14,
							y:64, 
							width:196.35,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:249.45+14,
							y:64-5+6, 
							width:180.45,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt03",
							x:54.75+18,
							y:122.75, 
							width:140.5,
							height:21,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt04",
							x:268.9+18,
							y:122.75, 
							width:140.5,
							height:21,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt05",
							x:54.4+18,
							y:186, 
							width:140.5,
							height:21,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt06",
							x:268.9+18,
							y:186, 
							width:140.5,
							height:21,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt07",
							x:54.4+18,
							y:249.25, 
							width:140.5,
							height:21,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt08",
							x:268.9+18,
							y:249.25, 
							width:140.5,
							height:21,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt09",
							x:54.95+18,
							y:312.5, 
							width:140.5,
							height:21,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt10",
							x:268.9+18,
							y:312.5, 
							width:140.5,
							height:21,
							size:11,
							textAlign:"center",
							expand:"up+down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}
